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
    "3HwYBocQEhA2mJUJ2CSZ4vRBVhHKLzY9Gt3qFhzAyjPFG4CY9gPvHpxLmgvb2b799CkvuexB13uP4SUe4rjYY6a3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GHgV4XEyXuR1gQUMnp45gfxcJLLhhR19H11FbHpUUWQwka6VCvUd7Ac2ixsadpgAojg7JMCki4H4BSAwXA9LgCX",
  "key1": "4Vyb6k1yRgzRHqGx23taywtJSygT4R8WRVxZMa2exxNaRK937HRaLnP35fL6fE1yh4faFtCHWXZYq1fJ3wZDJer3",
  "key2": "5PTHAjLCUdCyGxCFGDknhvLb4tJWyu7Z148T8YfJBf8uw7xbnphPb1QufJvBviYH3d8QqEUsxyWTrKcxwsdjspyZ",
  "key3": "4uzZHyfWFGfU92MiEJUvcyuqpMNvyU7Y9a4nV1DsqjSTCKxhkMG6d3GBYkFieAGZsiWnPCZ1PiAgiRMFgsHG3Dnd",
  "key4": "2rCDgSHSZrwzkHrNcQB1NpQxCg8BA9DdpqdqGupT18q1DdSAWBXv4rWaBMmsPvdJeZBimZ1DZ4M2f2f5x2CASSCd",
  "key5": "wHE9BRv9s4jM56vCm7vX351wp9m1zWCLchwCp6pKApk5oBE6wi36NMopZySriXdyAhHZPY4M22NJKVHiZ4NERZk",
  "key6": "5HrgLVh8GSTNVXpZpnYXmvu8ZefdhWbFSBbTHzmTfxoXBFGrCEkuHPRRHVXEZcTTKZk55Cdua5eNviDDNs9PL4Ds",
  "key7": "YzmiGJ81nAkRnz9a6GLmNaCMUGceJ9LuJFUWcEPSXJNp8eB9LmPeWem4yYKoPFjwCCxFqt95XxYTJZiUvnzTzZh",
  "key8": "2ARxYtWFyR7AY3Ty6DP6k2pkRYEj36hixqnu2th6CP4Zw6TGaC93XGizEopi4Y2Chb6X8zYEkPcFKG8XAwTFR7tu",
  "key9": "59pfsaZs11nwH5k5HQFU2NYdSNeg6oQYKacBRxtdv7xThb8H5FJ6Tho7VM7osLmUvfscHgTZa33eNQKnHmLPyCGf",
  "key10": "dbqTZHcNr2XkhDJQkG8BxXjRTMLyFADCnmCPoi4qD1XLBbh57H5XUeXjFebeKhXuhzf75w9mR6MQPLKNk9b3xy1",
  "key11": "4GWs4sheZ9Aazvmga5WzvPRpJgoZgmpX6vBbHKQkMHHMh13rthMQFuegzjvMkWtP6ELptY69rUuNDikBQJyMPM3Z",
  "key12": "2LJjAc7NxiUXcKkdD6UNN8ZzmwUQKn6gA7yFdrmDMpi3eihVqc9ZKqqpAfvLGsGM9HC8bhXppjaRzpqhb2MwcGvq",
  "key13": "3VrGguAcSHbFLmqWqvS9b6FgjuR39CNor36hAt7BerUcU2Sw2L6tjTNMJPRPaxfSMwRPtoSr7Ebmp32BD3Qgpmvj",
  "key14": "27h4pxX4GbGa2y5YnLutrHQibrZpyu6RTVhMEP5GY6yLjqAbG7TNzNc8p9iHLKu7kwgf4fKicCGLoCMLf4JK4m23",
  "key15": "3c9UbPUQ82bPMVLsDGjcWo1AjebbcAEfeh54GBoDUjdQf4GLL7Z1Z56e3vPbexh6k3hq8huzYEyqjH166PKhAR2Y",
  "key16": "4JfmYjbgkW5V8o8Z2bR6Ea7uc7soeCqmhAyFx5t4VJaXt3bWNJkJzx691aRZTCCeRTwYMc5BxmPqXeSVKqERcWbv",
  "key17": "VhS7uAaRF4DfVYjNzP8sjJWB31T2twP24aDvFWnKLKC9pX8F2fwxraphGDKhav19inBaZWr2GNivdjjER5Buf8m",
  "key18": "3WtJ7fZ9BWqYfaBnm5YQverRbb5t3kLQjbC2nwUTobWEfSgL2x2frFAFcDWw4RX1aWBHFCAxdtM2trcJAqMNyHpX",
  "key19": "61tEtudPiKYYyjzxYyFyurPYBTsMDcDvH2rkksQ7GRJYndvBcboYTjiLiqMcWvi64WwaToZVsFm2dtuhWEkEH4A4",
  "key20": "u6FSdCU8L8C7PYn7HJVeCjQocbx9voc8a3TXWoFzcXD5b4WwQqecPyViZMm4MpDQhb19wvtXpmhyLhuNZStgffg",
  "key21": "2KZzzRErw37PwfLuyJShVrihAbjNYBpuShk3b4HD2RtLYWjf6962mMqhMNkxmJxakNAxsdUDs1HdtxLEGXrxBmD2",
  "key22": "4ZLvyWgykLByXE8U3GkWiMF4GLpqitZPxUkMDx7zVV91eaWvFTN5GYJgoEajfGtBL1aPEnY3sATdxuMfGCAUuhS4",
  "key23": "5ZnyGS9aZSTkXZz8QACEZyQ2gVTzfJjAA2aJcYX5wjyoVgeQkzg7EmwbDppGSkCdKss5jCwgzguydpUonsN9ijpo",
  "key24": "49FVyEQ2Ebiei4tEyF64pEx6oazWAQeQWa4Z3wCoYxbYunXdmBBy1QsFxZS9B6WnrKdGNMB3CVNxs8SanjdU1Kg7",
  "key25": "2Zi17DdHYxoxtC9UHtW4BGCoiTK4L1sLpnQhMZvJ79zRwPkbMwvuoBbeQtepEPtpMiRk2gbhLVgrVdmBUscVdNfJ",
  "key26": "4rCzYhQq3vTuWUNYXVijPhWB32xqr9xnFdWGCY6NPQ5fCc24qLS6Tqef5NCqT2CrJkPqcY3kuCtHj1k1EAmZRBJ5"
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
