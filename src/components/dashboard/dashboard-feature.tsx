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
    "3SthQe7RfkYm4G9novfRfDThPkgEKbpw6Yud5pzyufP5BWZgpecCjKbSoe6dCZTcMhQ6tHaktCkkGb1HtcardMyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HnhmCW7uVmvYUKVJp5gHKuRTC8gzh3HgP3c4u5gSphQWEB3zGZ2UvwguT8u6TyotwL1D1yBjf9GbXXQ3QW7NQFx",
  "key1": "EF1NwcfprwRSL33C1x3rCcEzN5bUJgbsmaR3xefzTBCxmyeJ1T9JBJek1fV67fnatnMy4bZTUVNBdB3zDVTtqhi",
  "key2": "3gYP16NHph4VbtFWQ5Cr7DEd2uSFBU54mX8bsMA33wwt1Yx1JNnUMS3a6njcWkH61fiVane3DCydCtxGqCxPh3SU",
  "key3": "5LemPgeJzoGkNYKoy4A3CEv6njqNGQJsL8CRfXemgFJ8g9XwuAAAMA2uvnDxyMiy3h5mwxu6WDVp7MbJMyHUDAJq",
  "key4": "2KcvgWyDqVBubJxHewDAwe35jGqZLx5AcrHqitLhmBsjjq6ra8KwYUCLMG6UVTxTYSJj9WYvCjgt4gVimwZzSxDw",
  "key5": "2vePocCjD2s8EBkiNPuexsHM465vwXJGM3VdFbGsHpSf46MmzuTpacYA6tiqbdwxnNnLsdU8u8qsTzcCUb3S3Zpz",
  "key6": "5o9Q2hoEKQ5ao8FaBdHUpL8N38yW7SS1KTqWZRkkTPC1brNMGCYyrBM8a83A53GnrC3NzKtpGwzJL7XqAcRn4jAr",
  "key7": "3a9BCVLMbw92f5Z8f8oiqTiRFDdNc1DC2f5qKKMY8pfozxVMHGjWDXucX8maCHYkVNWgcdJnc2QThKMSfCvTm6gx",
  "key8": "4LJ2Kz9JGn3dKyYsDLAmPwFJrQHsR5khZiH2xxbUL1aGzquvNeKfeGKFLsycGURZyP1hDoms7wzwU98AczLsv3hV",
  "key9": "37NyXT3q9fgLoToHn7nwwVqmCabrfGLGELeSTtzuUezxB7DJvdqhszM9nLybz6jiNmvjoEzWYa6u6dudUv8tzq6D",
  "key10": "3H1qWAXc6qThJDSdcR3XqWDRikeKDFfhJeNuyx1CiEci5XYZBQf5CWKeSwdi4wr9YDydx9HXTHnQdzpvZzmPdDYv",
  "key11": "4xJMYDYechDbtFRgxhPyq7trvuEajjWa1RFGZmnwcqhJFRJPZdSZJEkYxGK9Ek8FwWoVy4y5iRq3Ud5VEpb5ku6W",
  "key12": "3mawPUzXHBzsmj4NfbiFRkZT3MmGsk8fwRiJvG23zi2nbSmjRCadZ8MfmNrtntqCaQZheaB96Tzxs9d1zFuuqjyE",
  "key13": "5vH8edVPGjpi6BxAgzngjxh2xJu6mVXev7z19agByVS8Gn9QvTejwzZDyThTNdQhF7LYUToUsSZERQ3aP3GMsssD",
  "key14": "5NB1JvBfnT8veNLiu15D5w2571NJ8bD7rC3Gr71NvJscwYhJbi77ErCeJZhg6RmF3Rmvx31BrAcSNFunz4qQBXWx",
  "key15": "2mVeduyX82YWBaMJYm8pRqTXwkxmhoG7PKwSHX2zh7D5bXQnNUnifSswR2qfoVLAPFvHWZp6gpwYpauVMuv7gKym",
  "key16": "XdV6icmtPRPM9wFcfTeMRZju3m7ZH1hoWsci6AZQiyjNmfqT5sTZYchgkPk2JBajXo82oeRpi6C2gmZex5mEwKw",
  "key17": "bFKZYdJzLJSsnzAFgoYHwRdJmgKRWvNuv7XfKxpLtgCF5BPW64k84PDQJF727ic3Rn6eW4hTEVeKpatMAf3h5bG",
  "key18": "2cfvGxtngJyaZSKF12Yj2sZESyV4XpC89okpsb36aX2hTQQw5EbxHDqHC35pr2zgLLdCq9R39xgvVS4h45LZn2Zv",
  "key19": "4Yrs9jHHC5Hq982G7aSkg5bFWXi7x45VNL7gRgetoXtF9kQkRTistrr5v2zbEmVUdVEZhqFW369YL4aCUf6KN1jM",
  "key20": "3mPgjJuXnfL2BxtAUbomxvV9EcDqTz3TaSQ32VqDzY5LspxTBZi8YnmP1DQqZ6mCMeX3CKhmYjYwhBxrd5JyY8Wz",
  "key21": "F4Er23qtQ3vUjAGBzMaUYPyUHhTJXYSKcYY6JtXpthfCNgkTT7xVfKqPccveVKLWyJhfuJDaCbw4kkrRPpnkBxK",
  "key22": "2XjbFUBtPVbNCMyq9ghWrVVATeabJEgdo3ARgxMYJzysxbwTCi7RkBLdHM5uX3gW5RdCWMVjShV63jjwDWHdoXMX",
  "key23": "2ieNFUuDTmkar8QNni3NYgJYrPL9YFMe8sDeDzRMkKwFmYuhQwpd2qGnWPRPVzd7MZqnMT716NsNi216PVuFrsXD",
  "key24": "gMNKb755SdTXeiJXnLJPcK1mGZ24uWfYoM5sXmD1xg4ztCStukMvfnR1pKZFkFK3aLjZn4XK2ic3XCKVXwCsGXQ",
  "key25": "5iVQuWG6xUoeJ85bRwNS9FkUJB6XQV1V8sLBg7zg2tSwsMnt13iXhSGUrhvjpsz3NYNFa5JqLLCXG19skeYKYNws"
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
