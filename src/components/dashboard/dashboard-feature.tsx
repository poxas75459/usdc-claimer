/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3CHv4rAgyLVQ6MNruVEBZj2yRiRCmcJq39p5wKnnCNkgMeCqtgmvgAtUAYJUKVcY6pGHxCANWa6CrWT1JeoS6jFj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AaCWC553xqFYovo4tKZN1gTGjd3nySiNTK2bJDoscyq1RQnooSCt8FcvxL8sE6UMcYZ9QyyzjrLEoFRkPDWQPcN",
  "key1": "3YguBZiiyRGNQbx996ALcwaYhw3P8tEh5G5DHDL4A2AXDN5aicUeGPQxQVL1yTtwNmYDeAtM6mzkp6TdPC5Cz5w7",
  "key2": "4Rx9p9dcC4CBv358BERk7DSfJToaHMsffrvatrs1wZGDBAZhvB5fdvgYSvgHEw1dwgPbtafeLDG5D5Q6RxkyqcR6",
  "key3": "2RE4aKhqzqQGPxmEoXMr8CNNpCjGCb75MuNJTBUB3ZA18shfMutnNRXuyprPWWFBNyoBWQLK1ewJCKu27RCiu2dZ",
  "key4": "KaoQ9DB1UCLEeLyEupMSd7YSz7tTehD5eBUVxAcV1aekQKMBnkapDbBvRmYH3YMqq6Tu5dTPxdeVwWpWYNkrrVY",
  "key5": "YmNCaAdhcNeMvKM9zYfexi8DFrWmmCQ4sjUQtjRLSFqjkPdUWkpE8GH1iADzuov96ndfLZwfcbogZHfhCYTD8y3",
  "key6": "2dmEkCVRNe8dM4kBzADEn4DM7sLEuQY6EDvsKBGyydsfXHudEKJV6hEuCS6JbVgCbVeX3qPD8MA1ZXgKbMYUBBA3",
  "key7": "WHBEJCnFu3Aa5c7TxR3x8DS2vkaLmcfS3WSFGhoge5b98zhD6EwS3RDykaoCC2M3vJAFBC341ZuG6D47YN5GnTk",
  "key8": "3Lvz5xVbJsvkeNzxoNmjwWuy2UzEyixsPRYf5DQ4xhcCZJuykfcfPCPM8Zexuoh5WwNF3TStEZvk5HqNUnZ7VVfN",
  "key9": "64qPogm6qZ1d818QkRNc4PijbHRQHmJvASBpJDMJMjq8nDXTR5ifXCwATP8wrdG4kT9t1jwTfoaQBhyAv8ssdY3J",
  "key10": "2s6NKc5FYTRLg1XASAVqZNX8t3TJgAWwiamhx9ZRtqXJJRAWL6Pop7WhRLz72eq3wcLB9QqnsBfnfAsjUsRp9XDq",
  "key11": "EwF5MpWNkMbNB5umUwQQyts28hdnwWTS8NZ1VW6jg8vHx8xfFTJFiRxXYaTz7LXuaoRPkiqCf8hzJKuHpkhpKkp",
  "key12": "33MQnnLPn5QSHBkLQRzpcoaBRnuGXB5pLYv6wYrTST5dDL666EMxgnYZiZoK8M5npQBJixUeQsBP9GHdxtBGYPpA",
  "key13": "3ywxHM1j4QZzsHDLNsMFYQTNHHGSPPxfF2PeonMTXeHRTfHgNq8jPsvvcnR52cqFnSiYmsGBhTwKGL8SHyCKzYv2",
  "key14": "4eZKadv9zjEKfzkeya4WrbMftALMVjtkPxvrZaSJVRRLHq8JFpJukcYthsV7e6y3fbhfUwnKkp6yzk1VhEGZ6Qce",
  "key15": "3SNQ6zogCZT3C35fqzqNyGupgHhhWsmVyaBUWCiwg8ExSNL1rmsX9m7gyrznH3eKPVgiDr16ZpSFYWKC1AVAkVrh",
  "key16": "MrKr4EdgWD2zNwj8DXLN9pZp8yLq9FiYNNBpMuNCpe7NkLp1U9wDDwZHmJRPQ1iSbnbFwYjGsdSaDff34q7oETU",
  "key17": "U3sNEFoca6efUiwVzBPpMAbggazFz1kKTSiAqKaChDk3K1d2onqv6FinjqFnRyQfXtiAcMXshmrHkbcicVuENKc",
  "key18": "46Kb3U8G4YcFfdUxxXHivRmxTLfmcmMyhhY7nrRvBso81eCAVbinVCRd4daU82p68QrRpzogXDoY5hgR9gvgbMWv",
  "key19": "3yd1BvS63c7TEGBE3Up9qfW5J38fTv3jtDTm65L4PxpFSEfxmZYAak4hRH1xXbYqGm1mM2sEzZjjyk5ykiRGjFFo",
  "key20": "3Yo3V4b8vDAtNt3hwSbTSYEBsvm1hRfncFKyegZSDqRdGkbcPSgtSsvsoeSUqAgd26TxG7K2FgGixVBvRXn38X5k",
  "key21": "uM52Z3MmDtfgk45PDFMDd1V7MkmW9s1tWsu7Sj8Bg1o1CVNmdGTCenjbCkE9rErsVAu65oYu4g4h63FmNLLDEoq",
  "key22": "5YoTYqDeW4mvvqGcXX4hZkWTtqDKyc1psSuFTZfnDQqsLiLfE34NTXvt79SaFvJmhq1VkzVnd7cX1StfHWnVGNsq",
  "key23": "3qtDeKt5mizCh54ncGAXht7Ha2ux1qeH5togF4zNTo14ojC55QyHpiDUc9rEva6PLWiFxZobfihKq4MHdtEhHdR",
  "key24": "Yp4kujaadBgdd1A8H39faqtQwwmVxr8aMXevyftPSSXnEQgyBq5AZmhPLmWqsGGP9jR3v5wMtTie9KTQ5whanz8",
  "key25": "56dWaPMKLHTtzfFyqKWNHNNusmb8VQPn69Tkh5J49JuqX6AGgq3M2XrMSnZ1hJLeUMv8gd6vayKYwoW8RMBG2U3n"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
