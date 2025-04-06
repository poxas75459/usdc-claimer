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
    "2ZHp8Hbd4o5MpvGDBUF85A924oNyv4D1h5kkuHPex78nBAmh38MzctvZM9vCPKCBu3ttkXezcX2PYeDAfAaVJ5n5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ib8FQt4PMb8N9MZsZ4u194WiiVb9yjy7exLHR85bpWDna7iSdd9BbqZf5qf8epzvvhSgPJ3bNq3vCZjsBHvkimR",
  "key1": "cj3eg69rwPeo5S5kS9AzJ3AAQLYF5wrronVnNMmquizbuDdZmU27PSDTsy8BfU6CBU54QqvGrHxgLLqieypPQdq",
  "key2": "4duhKt3NeZLZHnasaKVD9RvwYKMZyicwpEzrV9JZPMxe8bvTN7yiyiBGiPVrgAXTBQ5rrzyCehs7Cd7ffKGcHPaj",
  "key3": "5dZw1gH4ykoB85mfcmF7nYCjTwY6kjXDfvRppjBFyqXHsAwrfU6vHS9sBvmA5C7pthC4pTUFUtf2VGHm9bpEvjq8",
  "key4": "3QW7CMKtYFVeJnuUyDDLWzqauzmQWYmSGZauri26Yn4aFmZrQ32TC1cU399Sj57wd28zATcTDbqmMHjqTqtNngaV",
  "key5": "2rzZNP3asARvD4wqvS3XSox1mwsaxwufLnsw1iZz5pxAufFEiXsKqiSv2JBM1DENFCWKM6xGBb6KmQATb8PGQi5s",
  "key6": "4LqM9ic4hwnefXtD5wXiiunUyRruCGpWPdF3X7iNVUGP98nSfVnVjNwNPgcsX7CGa8ZSLZa1hyRKo8eE7HyQwbLQ",
  "key7": "rbiZQNjv2Ykus5q5BnCSdPuxzqKuHZGydMWxVjpvJXmqVG1cb4He9KBarrQ4JMTnmDLKkb1nnmWZktrQyMa2hpf",
  "key8": "p56ijV9NMDu1u7MWSe3FzBhgiZPakZ1kAR8rGiJqkJqarA2wdprPLT9MkMU8a5Q1j9eQ5aqu5sGewuCbDrsHp7v",
  "key9": "4LHCytqJsrSV1Mxfk5aJG2emVq9W7v8CE3zz7SKvZ2hLTQCiCaBBydQHUn6sFidd1nuGKrqcKbRMYwh48oupzvxa",
  "key10": "53AYgLZyPzaHHG2CLs9NtVpyvQSsRrPCYgpQSJF2o63zP6X8mq368n1NiiTS3DvK8Qxov4t7UBCVP1mijFjRr5n9",
  "key11": "Ko1yA7cRUyR4cGr1pby41taePa7AyDmssN2CeAyPhzyx94T4tgeSD5oPehW3cdMKcTygZR71nAxnTA4TeLK6gWP",
  "key12": "4MKNxZt4nUS1yCJHcgq2czwZEoNZCn3czbJNpDUAZ82nSkMgLhHHrCPU1AC1gBxDaoojrkZX3DVGMqsquj8BGSzZ",
  "key13": "2tbffiAKXH2GwMGpEqefdoAbmdD4k159eSXeTtu5bJcdsnv3A94koWG1VFiWegRiEgQNgBPpUUPaWBKx5ofR2VhX",
  "key14": "4M94hTFXGp4UCvQ1K328aQBZFsb8cL1bkk5Zh3o9Qr4ohbxcf6zL6PfaWNHQ2Nca241gxyfsda6hE9Q1FfitNvrP",
  "key15": "5dQrQBVsDB4LJ1HUaNdX3Ds6r2PCpmZmscH8sNpzZmt3e1H3scTDEGMT3LAtu21AmcGMWfY8AYyQ2AFwREpsdsAz",
  "key16": "4xav6Qc2zsxfkJmUdenofXfAfS7DusXabq1EzY1Mmaf1VgRbUMBEYj5YL2hnVuBtytJTF662Rtz1o29MAyr47ErB",
  "key17": "5CRJ9N42pB3ZRHmdco8snDMstHxTyKXBj1LuGWw4YGr6rjgBBkRghd5qxB7H6TUNCF1XS5JP3q8JqxDf71H9VkKa",
  "key18": "2kR7zBjHhm5RBSei16xobw4Ds7cYtg5Qduw3L5pGUSzsZHe4XbH9TMCQQVg4V9ipGi4Bkvt6a7sSY1xqZFSaprDL",
  "key19": "5dTNnAJ7YjdGJeqkGHUFkiHTEuKgUbjTs7CNM95NW6N7HBsHnYCDCChwpTV1qqfc1NeiPfC3p1PUTQTK9rSoDQSb",
  "key20": "3rueXUL5PaeMKzjJmJxksAy4tZJgeZYnhJHibPoktYFHLcYQ38iyyCsLWUGZv1e7iTbWTTNTFWw9Byxnafkn8msW",
  "key21": "5aHKnJpGQGz5uy5w1Dyz5dmcVUVSaCeuybmLLfGu1ZDibb9Zs3y17AvmqZnpq6duNysHRcgvitdupVg2FMvH7cRQ",
  "key22": "3AskhpuLR36KTUkE7w14rUCvydKfD7UbF58Gmv3hUotNcYzbkj8Ad1up4drPUPrLeG14GYWF9yET3WerqnBuHM3e",
  "key23": "3Tc2tC73PYGSj2yBj4i1Q8P4mF6jCHNSLCh5JZL2i4NRh3iTqKiN52Ux7nTqYJGmgP2WXABNiQny5YQfdWTrgHVs",
  "key24": "45TT3W2998fN2CS6e4hcqJLC5KK6czeopZeeqzZxDDc4R8VnPfNScVsb4vSnLPafkrq6ieKUAD5R3c4qEnqgVzPt",
  "key25": "5XzMsWaU59GKBCHusw1X8hEKz5bYVvMtAWoZrtBekySa229TTj6Vd85jZjyZWfsmcS4wtzi1iNLkwFUAyKEzZgpC",
  "key26": "4quJryHH2pfDFYxK5mikyVhcRk7bRJxYg9uPTAa5oVaBN7shzpzYyVmQV3hzqpco7yy967jjnjx4Fi7k2am9Nd9A",
  "key27": "2VxX32jPU88CBGCrCxQwS33Wk4iNDbdGmBcpwDtJwoZCRrr7GYRcfk2kNPK7cQ8isdmskhnChg5YU82e5UFb6sMz",
  "key28": "YQnTgD7gXBcxs6GrtcS5XHosQcYzEtxKeVapzGho6yorSJkm6VJPNhaPL7EFfKQN6RvPTYVsHELWQhmBFPEk2ku",
  "key29": "539Wj6nSiJQJ3j8mY4WUUL6QRCJaeHi3svNjUPyYdWGE6nDpYxfX2Hry5L5aPXo8gZ9n66yA9xwiPDUHEpBJGf9Y",
  "key30": "baxdoCUdaJtkPr535fe8WFbmGTSqPgCKZMfbPvd8319ASaizBLEn7hqPtcKuGvvVrPFRckpyTNFm9NfoDYmGik4",
  "key31": "25ML21ptn9KP3ixy66RQrYpqnPDeKvqUVhqjNYDjKi61qE8fvbw7ESJoxSJjd1FxNYrF4LKjVB8CkygeqbF7iYy4",
  "key32": "3Ba6ca9LvYjyLxNbJBbpwN61MQpuPwf1CXfkVqEKGwS4HYnrQ72BtVgyRZiu1Zb7Z6minA4yfg4hmhDETPGe64gP",
  "key33": "2mr1RFzqmswBRSRZcYLdE3C8UK4tXTTAPpB1wnZdQxT4BKHuxKJBS8o9kd7SMF9wsivHffjZd12obux9Pxk54keP",
  "key34": "3C1h8tLdNCLquwgEQNo4LKvLp4NEPtNJnHAG8NZr31kTUerSbskmFKcMi42KGKUb5PLhxfPKs1k5h4Tu9KdymL33",
  "key35": "5HTRE91hVxAp3KwUzUHCKVB9RsCrLyKn9xFjrAruFAjbXpLA68QpviTPy6yHzpBym24sFMd7hyEkqvP65hTgpSLd",
  "key36": "6DMW8BVEDzA3aDjQ8zPmrVn3p6eGQSUy7Y47FbNbmgVVdBu6mg3LwaMBWFXx4vm86V71rUsyQvkBER8kNt56PLm",
  "key37": "whitpxbb3WZCTf9PB1HmbJnxCMebFapFazMP9Hq7c1RRKwCn5sY7KDrGpMHu1xD4e1XawQo6vatpMLMPfnjeEm4",
  "key38": "5XEnXMFD3vYkeSo6JEqNVG2KXf1dqHBB4WKSUrJB7Jz1z49ta2wxDQVhcKXJBSGBVFo8vffR2766a5E5T1MLuMZi",
  "key39": "2DNr1tHPQroEHsZDnjaKv3bz7ye1oWLUtXPdK1XBnzTDFzirzM19GV3vnXZ4MARDh9mLLDuqmHFffhqFYhg45df9",
  "key40": "eGefNGraVFggb6UnDQho1yS66q1tv6tSVy9JRLR8WyDjViBvjiBxMAMUm5MskzvHbZgn16Nj5ZiUudc7uzukVbF",
  "key41": "464qqxjoQCxmqCsn94wfXzcXQGntWkkUuLoAKriPtRfmX4gGQxYEbaGiq5oyAhCkKxQGUzeVLcVD4Dz4JRzZBKEm",
  "key42": "czsNmwRQXavZBcWSb2yzf1N1Wn28JnoEwWeA8gyPRickrRfiFRQ6Cq8GTmGbhy6heZmMRNAPsMjKBmpjzj4ActE",
  "key43": "5mk1uNX9NaLF1fj8keiJF8h9HFwDQnK4z8TkbhBg3o45aFARZbLzLFaxAgcTkQ2ds6Gjd2yzTchcu2NPeQAVMSE1",
  "key44": "24Utq6h4ZsfaLsU4KSSLF6bYqFKbUZZTHtUEpNEgqoJNZqtubL31nbG9BHDsoVNyYQx3mKZkeJATURHtKfED2H6s",
  "key45": "3SoUeseZsf3oCUMDj3PiY6Fb5zLkbQqH1D9ywX98KQihEApjuVL8PdQWfDxvAG9bBmnkhBtV8b1o7PkAZrqyL6TN"
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
