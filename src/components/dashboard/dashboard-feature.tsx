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
    "4n239RRrT8ac34CJzxaEeFKrm5GasRk9J2jAuWvwFNzXJeAV1orwwDdG9s71EHBoJsagdYY8gJ7poJdfxNutg7KA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48MkPsGhwDD3CpYc8Yy4hwR9VgyKMq81LSyVnsjjVJawEWiKQZrzSHc3wwfLUFh9N7hmXHt6d6L2tAaDNPrEPFgJ",
  "key1": "33NpEVzuB5S16ptQFitUseteAfAsaFJQKZWtM8GCQXF5vdyFpF2AcpW3z3QUcAWepJcUqELxxYXj3pD1FX5CvaFx",
  "key2": "28xyGtyn4BEjcDhYQVVYExt9Ft25CQc6oWW5SXJqZmsqRFi9zcJ3Rtk5o9HJfeK8wkFQu5bY5GWgWNDK3VN3FLgq",
  "key3": "51CuY9ZBGoZxCi9v8kDW4wixHd5HJLUUv18qxmHacWFGBf52EJGcoF22sQvVPo1m8rHSsEKjCQ72e4Tc6GvTwZ75",
  "key4": "4u1gXkCwy8dkcmV1FtB8sw7Dh1N4sgfZTkssNazwBmhWR8NmaRVcibswGZJjQQ81hrhsK6kwrKF7tpNoScfJ976s",
  "key5": "3nLvUPWepQyvonD2Po4Wi7vtv8bR2sxZWuiSsdU85UYwD5VwbV9HM7EcLGTRYbG7KqHvSgfQotyEAap6XawAnuxQ",
  "key6": "65wTTrvRGKdFj2rj3dtv32N6K7HsmvPYAkwvd42hg4KUzRSRy4678q2ubdhZ7d8m2F63f2pRzmpm3HyzML2wcF1Z",
  "key7": "4UqPfKhXMbhK5axwA7cbxbfBUiLeFYLQsnS9eiUeT1CXZWVYyXe2VWFB6RFw7kseAdPCobq4CDG7BGmniXPSpohQ",
  "key8": "4kJPaFGftRdQ4gqjQ2GkwhYpPAYt7kbZiw4XcW3Rac9AnpLzEDaAKX12VCJ962HCkbSdjJj8oX2jcw1NMgjuaUjX",
  "key9": "4VPxohYqsR7NRy6EvvDYv5GUEoGYAK6Fmt6zpUZNiTcoQSShsxWdL3n2DGsuJKyZCVhAiMkQ8EYSD9N6CKNvRHCe",
  "key10": "2WUgc5hpqBT9smr6j5zrJXEYtiAZcwb8aUtG3D5ssTXSPd2FJhv95QHS99v77tYwoVQmJs9qm7RACBGYgxsUXkqY",
  "key11": "3wZVqjj6q2s5vF4ziBDC5YuuyrLxv1874VFr6fBU5nSHuK5mv3J3zPqznedQg3tyfYcowESvtqMndYSUZar3Feuk",
  "key12": "5WxFoaXJtYJSti3rGZjdTPFFnxMdS25ZW7qSgbFf8L7a9jNK15HdA1Bdix2XWb3ZMuewGxKP2jXUqzFvabkWAChh",
  "key13": "hTi6EW3TaJuc4cHtUc6fQBbxvfyazbPeX2cdLuXtjYXDiEq4pDRupggn19SiGCLsEB3fBf2bF6eAgskQGyUD3wn",
  "key14": "4pTWxN5Q9iRKDDjLbsRf5pMu8pP5JAWj2HDcBUYMsvdZDQvs42KR4gBEHzAD1rSMXG5yPi9LP6JrHj9n6r5pgeg5",
  "key15": "Pkrkvv3WjonTnhs9axvVqY8QXMooWrg8j7umQwnvFPX6zD4hZxZU6nMnjf1jcLYwUw3Ay4dNxsHLShmDzjALdkZ",
  "key16": "56y8Q1tjaCqKYv4BjBkBzpf2TKFFCZVBH9v4iikqBhKXC2BZVqQXJjy75CDvvyynvWYCwjdWT4kA6Dwr8Hw825WX",
  "key17": "5R9Y8Hrz5iNqsnKvRr1AtL8y7z2aTVif96xDNMQuaRSUFQytnia5CFWuvyEcGQNrqeVimxgE6nrnpTdgK1uiFPWH",
  "key18": "2ya4eKm5UAn1sGm4vpCut8g1LcL8A9CFLSaxX9UzEhwpBgta4enBDk7MGAnemyTXXG5gBP1SKQ8MsWutYj2TEzs8",
  "key19": "2ui2uGNd9FnSpFk4pQtfWUKhwoJCy7UYGXELoLKJ8TnDrjir75hFjZWw3sePaQoa5GpSaQHXhQbEvqdQ22bm7Qte",
  "key20": "mudJMsfQjXRDV9Kv5U1fZ3cxMuBVYMP534KXuCy5GZvPTww17rwsoXP8yuVMYScp53fwFkmoW6R6gHG8GHpYwaK",
  "key21": "3FEd37LabRL3VgYdnoEUMosjvmmPL5APn5jMgrSd7vs2pDppdFMrU5CSrzwn8NtA6mVe9XduLt9JXQo9bnN3BQS3",
  "key22": "5vPxPZt5AWoyiX8UVXgk67f2ghRyDCFp9nPttYnoUSax7zqujugi94ycCTTgNzVF1tenpkdizgJPPbYdEjRjAa8H",
  "key23": "4UPzXFGyytfAPfG5j19mtAu7WS4gwa6JrUTtJFXVVFGQ7XYZVhcRRC2rDkmvZDLC8Ts5F4sYFGPnKfUUnMsCKpTh",
  "key24": "2YZSLJXd5GJEWkNsu7JPG1M7VFVhvWwrDCrXQnu4oJYKEeUxzuP8vvGEu5B5d238FeKr9ZRgwGU1KHBouhEQJQGR",
  "key25": "4xbDx6zWaZDKbfQUmwFJ6izyTCSHNT11E8jo8is7GX3JHLEtK5ynpToPXo3EjKiH238r8ffaoCJJJeZGnErz9A18",
  "key26": "LcdSSiizefmuZ6anGiicBJKipPrpYPGABHTT2pRVrQ1eknihNyjMizrJoyYA2GojgJrXsP5ny6PBkMqDmW4iKqu",
  "key27": "2iamppA8VJotbQyF1yDiVbJzZTrRirhxPwYqJw78zdn9Rr3dmnBBzGZve5KGgKnY6nKinfqAJ1aj7p8xjdxb4Ky4",
  "key28": "2CnzkMtfRqJAf5ZHn1FhJK1sywU29zGGcu3DzPhkyrjQbeU5fLzeBasJKfRF6eAfouRZmZLf7gLpta3gcFkeJM5B",
  "key29": "2vB9TGGjH6gyfNXRDCBzq7qrRtG1aBNoGitLuAipRsjadvqTWFHQp5iNWk2DkevScfJxWo2s9pPn9MADJoQ8p8XE",
  "key30": "49ngHwYsPqkY5hYiwimUyUk44Ft3eTWkv8QzNL5SuVKoW9zjE596DDV9bGikJcPLEFy492KFNmsfPYnKAdb9Gh6c",
  "key31": "4NSVY7hmnnbFQzrcZiAYXhtDzpc8pmJQ9MNDayDvbK5naTqiMDN2xedpCujN9m3SYQFri661A1B7ogR3Sa3AxSL2",
  "key32": "4vqAysBWWbo8rKABQvNNug8p3DArAuUXE2v1dxHkhM27G44QFhVYzPt3ART3JyTbfC137a2sHzivhLB9sbMGo7EL",
  "key33": "4R1mZfkqt92xLBKnGHDX1qSJk1NQ6p3Wtan3eRYPAEm9AvaM6CERVCyTDdBrhs4XpFE3HiQ9GwoM9Pr1haz5NfkH",
  "key34": "4LwNjZuk9QWTimvAbyR9XvW1dT3AFRAQdjxCAhd1sADxpQqSHoVUkzEXr7PNvcK3PzQLBpavoQYCUYA1bJYBBpUr",
  "key35": "5wSWfRJRyR7aMDcRcVtw7WS1Jf7WgV4Lz9Dp9xGkLiXYX7iXWR7vzg2BRsi6VpP9fkmCM9dYj1G2MabAmzc9qowy",
  "key36": "5VsiYH4CqKbhDMUXU5H8b9Gmu4V9z8A1vuDevjn3GWMAV9Q3HPbAQqRJxFbfCRqUaURj4cgQ2h4Awc7sbgyp16Ls",
  "key37": "3sHw4FpFjgC17BdLFkug1tKwP7mzUdJon8vvRH5v3814g7JWbcrrhHwH3CqyzAEYxwmyBZyCtPHak9jcGUNKrNnt",
  "key38": "4SxHmsLKdZYtxzxygzFJujhn6vww5vwvJ4ETJeuTR9cbDAVMtTva4PS6gA6HogS5VDMqVdTF7r642S5rjdANnBTa",
  "key39": "2NnFBWRwhgYiVppyVR5H9RLouujfCTSEucFSPTfj98Yq2LGzwTSoRWwsLAEpidmYa89tPz7unsuGfNYpfL8APaQx",
  "key40": "43U9vXQRnk8TaeqYP3FeFmRm7tjodHFcherSzcWj8ewwhawJsezrWjcHpEPJPa853oZyNA8x75km7afw7ACxBmfo",
  "key41": "5yZiiE5AQgEc2z3hiav1X4aRs4PRRTxFqxiqSknhVnvph6NjYFGmKQPafkrCpmE7YZ9CrPztBN9EjPqpXgjpcvmo"
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
