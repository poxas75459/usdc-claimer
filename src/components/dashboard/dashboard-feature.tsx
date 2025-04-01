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
    "2y2H6j7nfiBuRPtRxVo7FdTYLJGMCX9H1DcrKkc5qKnLqpsX28vMNU2zH8SZhGEqSKazWnaUt6GAgssRUeJZPHwK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nRbakcC3kf9nDHBHMqX3QMTZqxmRQp7fEucasA2nw5uLbPA1y4BjSC1NXKLxGNkKVw8VTjZXFNiXDumXMVs33Yz",
  "key1": "5LrdP6gsVzTFH2Bt9GDBvxgo1YSuSR9mYLzsrvmKXuycebGJwYn3nob9nn7x5xh8syfwPdVgfRYHkbCWAmV8dPUd",
  "key2": "572kpf9YPfkAhqYtrcVL6XJ7LvPTwTHDgdKG3MSnVqH93C2ZgAMCM1KbmGfsWvVyRm8ZoDbRt69pAZqvWDrkHqsk",
  "key3": "3GHWS3WzVDpeWvXhgee5VXiiSZd67TxufMuNCAWQTAVfHygCy1eRcrPwHkzUyXGijRHTmpds1bfiJqQSLJNY6L5E",
  "key4": "4vrkX34sF3z6S3ksain4EAk8NCDWu37uGcfm3W5bcQk88Q6sYmy772mfhjkoZDnUwycZYqxu73LKWsGPi1xw7fWE",
  "key5": "21weo2dkujhrj25urXDJ6LmBuUMM3cPvYpvi157EibjHHS8fX35t79vcCbNupyMLU6aRRa7CcMsbzDyVjqpakguu",
  "key6": "36qytq9oej7pjapgFzTggzZWq7kGkRPt2tyYwqkFtv3gGEBFVKJ9UGyAMycPNARV8SpUU8JZ8YCHFSzTtQXdF8DG",
  "key7": "5Lv8rL7S4hCUqfMT19cMDqBDC4yZcfNeBhR7cmCTLSj12w17182VTTD2LoKrakf1ej2VNmg6qZ42YEVWjsvv1SJC",
  "key8": "3qk4ZgaaSdAho1PkKRDJ4pTMt8urtLqvkD9jymBTnX1o1qWa9SUddkYLTCTSznegmhudvEonXjiefwvvWirRsFt",
  "key9": "5LLEU9WmrA7Kha4ivMnDg6Eg8gRTMeNvmmAySAuX69uNcM5LjFzktvrRTtFuNbco6XoN1hJmPFAz551hWEHRPFkV",
  "key10": "4doK15nbBTJ8xhMpkwfAtfSvQGTphCcav4FmtjoSPU559BD1ponNHQ7JPPNSgp8iDre1UmQE52GF9f5HPa5gHDYo",
  "key11": "5aXFmdhAGtfmTHVQwPfLjmJJraLDKtQtjxByjvSj3CKJzbDxHXSHrxiP8oJ7ted6vTeNHBiLap2f7n14cak8ocfF",
  "key12": "5ZkvtXjZPshbMBdt53v3REz1BqvzQBLAGuwmixFcoALmkWGauE48afsuwh3i5txSMQDfLvnj2jjJEaHdrNnKaaqi",
  "key13": "211mH9ndTzoexYTQqXqUreBLoLKCvDbSLZusthRjwC9et8VGRtUzNtcoxZNA9yPtb3eZgU26gkERbFMxLcDhjVFd",
  "key14": "2mWZ5MmC5Ri3Ynocyy7njKshYDgG7iUPXwHFa5uPDVYcTLc2FbV6SUEfthThSKgy2UqsXChbxRrz1SZkLshq9FGL",
  "key15": "3seKQ8K5MYYwJEc5hwjEU5Etu1n7G3gBJmrRCvu6gZJ1bYKscBBatY322Nvg44rEk3dgcMJoPkNKWzSkYQTh82uT",
  "key16": "3EXp6DasE2zfyXgJgJjV5VdGcpn9ZZ3CgQSjddm5NCcwv8tEaUSnNLPEyd4amu7UjSh1gUyz55Sg9Bxvh8RSNoCV",
  "key17": "Mqmd8B5CNEfABWCQKuDf1daeFLSaMwZbBTYeiXoPvJkfEYr9CXg7V9WbZEUgqbmneb12HnYdmoBPpk8ZQXkr2US",
  "key18": "5qm2WQNsJHQfrB9ycQ93mS8J6SzxfuawMDC22Cqu8CLAXi4hYqTuHN6HruVR7U1dMCD4XhPA95WXhPzytfV4AdjG",
  "key19": "BizxRbWxR6YnbSUYxXg3X4TiAVTyZDP438togmLMA6ArcCs3MDgF7F3PreeZAeBcuTKoeLb1m2kEhBzw126mJxM",
  "key20": "4a1GLJw5EaARwzSofZCiQe6TRbL6YwnWPvhJuZAMAbY2dhi6Pib6Y1Z4YXraVoPcFvqdoavH6scfX5Hyuixar8oi",
  "key21": "5NuqvbWTtAnxbSd1h9aeNma6Vwau2wtBJRRdJP6h1Ey43DmAGw6eAfaDQgYfnn1K8gHigh21bELK8uqEh3gMFGqf",
  "key22": "2J6RQktTh3sskJHphFcJBZfQjCT1wAA2ndZjjiHLDUbWCpQMqCcdSw341RFXFkU9SRiGYKDxxXhbkGMXmHFq76gM",
  "key23": "4horLNY6qs1pfhksLa21ebjGQ977otfg62sewfhfxKuHiywPcx4GV6cpihoehpHR8ubodLDZFhnrkfo6sUD7wdQo",
  "key24": "2k27p63UdueqHYkNbFuxuJxcfunDAPF2HXKR5HnR3yRcn3GJjweno2xRCGRXdP9wubQ4XvRnhLqMzHm2jR1ByBtw",
  "key25": "kRZqcdWMw93VY5vJz9ABwRNcfHZdPRGX3LVmMyNXiGqk14MDSLitSmEXdVHJnh7kQTv6LzMR7Jof47xErhELLXh",
  "key26": "65MWMtKwe4UhBeQF7f2Y6X8SLGqSp1YG6sQgPoW3a3CgdtBLxbeyTN8ppEMipXPHVS6RtKAzTQznLPJ4mi2sZQPG",
  "key27": "3zdS2Vb8Bc5DRAy83MZaT7mzX4u7pqDbndUiNDM9GL2xGDDmU2X3wb9Lmmqvb5byKuMBRceYiJaF1R38c7VEVCzt",
  "key28": "61yJGPEtKqM2PAj9MGBNMUCK83JbBgKnHUy2P9M4ciVU78LYz6eQkbkb169u6ZarF2K2sHiNVynyaNAuia6fb3MP",
  "key29": "2WBCnj3hcACukSBGxDkeGBX1AV5thwAZHejzyxJzdtZfdQkhXcEV1VRYmR65qzA6bQKS2YgJqRShgrFhYVoc1DyM",
  "key30": "2oicr2rK5GtAgDRzksDb52eR1L7kcAHGietnivSL4R4jzgarLbRztYrhPPHQXma2dbqnkZ1byAuJXbf1VXXami2Y",
  "key31": "4daBxfYmq833AFqbQiFiQpzobbn3Q49mQAtxhZZbZS3hpSz5cQrRYG4RmYaji9CoPhcqxZKHdpX2wvGQxkuZ8oHZ",
  "key32": "zPx1sqcsvr6PedsUm1yntwRi6gw7gdxYidZvYvgKRMZMcZ8GJW9qnZgP4MeeyiSGWgKHmQSqCD6AdWcuMCMnrWv",
  "key33": "67mCArDRamHDiLwMAEWFcg2oxBRNcC24AkaADMPQP7WuvHxQQY18mCjTbc1pzxDRsCPMktmr9J7UQuBNXBPeYCjU",
  "key34": "3m3WFgLavMjNsFgy27RAeZoqeDnPxMNvsP3mVeKaFhSDMpraFchTsgMBx8YDJwLdTYTSc8VxXZJqxwNfDGuPkMNi",
  "key35": "5jjKtzLsoDixXwqpr9AcMDgNEarvZQCTXzMJaptBNC56PvZe9nEB72aaN1RJX2kN9TGyS7dib6VZuaegh4iod2z5",
  "key36": "2gR6vk5PaPy83Exzcg2uYbNbs8AaCTJeASMSwTqE9Sx9ccWyLSaknNNJgwBxqeEBTCGwwLFDq1RMxv24jS3tTtMG",
  "key37": "64AbRkWbpYHMNdu4AoQqzhur3ZH2GUhHdh1zv8r3MPMZcmhPTn46RPQBqy4xXLJovfZSAxHkBy1VuzzYDNFuqjKp",
  "key38": "4TXJ4DE398dQ8hrtvjzgwvC9wd4Yb2WC967vhwRmrE5KjoFxMzY1RCHKiQZgWRyzLaHQ8AqRtHfmDyPdwucVsumw",
  "key39": "NgDuQFpUUNuXd4YUTWoghTtd8Mp6VukrTsLkB3jgHmkASeUFJgHeS1anpUHcjL2jTLVtTswpooCB7ncf1bejirn",
  "key40": "3KjEt7qhcr32XfcYHXBsQrXSszj5grcX23bL8Z5GTfTZdqu2mggKrvvgTsEiLR1meVu25x1uC54NaetvZPa2qcZx",
  "key41": "5hh4B7tiBmitcNEtAeTqc3vsfMe6Yz2VVQieAxpFfrR6jRyJZkUms13x5YYawHGxY9qSdhVCoa2Mxeh7HL6uiAKM",
  "key42": "38bgdXmHikCoxTADQ3SHRiJd1V12qGxTPwVhwqX1d9QUU6Yphhru4R4QVGvgcd9LkJqcxgx26fs5tv5D1wUi6WqD",
  "key43": "oDyna8FaYHHyNNzu8puwYvJ8xVjUwudMFdoLuLdPAbbQ4PYjVd1zoJX4JUMrvY6aw6GDwKLEjgmtDz3GieHb2KA",
  "key44": "5nCq51bssgADuKf7zNxENyWGet6UK8wm3YZ7gUvJoWoGfZ5A48kfinfRxZbKdwXjMnbekFeMqxNvGD5nffqoszkV"
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
