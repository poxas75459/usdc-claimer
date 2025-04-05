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
    "3ed1c7tF6sU6Xmajasy3Zgv2Cu4RUESX3F6dp9dbadymWhYnt724gHhCYSEQTrmsjTYKPFPurKyrLKuS2M9bsfpY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TRsBT7kjg3xzNwXBgj12DCmUqQFRzsmyr1eMWxKFKZ25H88CUzzxc2B8t7FogWCnpuySKGLsNP6wgbYQrmTWUxe",
  "key1": "56aUbcYRLSPudxfgZv42nGir6JcuzEeYY3SGYrJN6WizFnhnnKjAGF9a7a11XjasrrHKdZJeC8PqpHHLU42Hp39H",
  "key2": "oXVeaiPayZpACqjY6vAmzc8DWq9GDxiVRGy7CXB4oGtsVRcTMKW7VsWYsvEXcN6uu7hnWx3acvYh3t8hTaNgS68",
  "key3": "42hMV1e3gSJxB3szZYqN9JQeLzzMTv18pv1ARx1AMFrGrYquAo73DftvUcofx2jwTBQ5zT93uXpTEoDgJwirFMqW",
  "key4": "8qm1UxrKLn6rzEJ5bauEp3b3eNDMMWH4J4L4z5LdoRmpfNXXHjZiXGSm6yyYUtoRxmP4XH2aDSyYPM22D6LPcm1",
  "key5": "2FJajMcTHUAPzaz8wEf3M8UiNVsdmXKsFPHZpqz6jmf33av2DppwQs8vXmSEp6zMix3XDPjatZgizLnqM673kQjt",
  "key6": "5KdHGHzfejaoLyWV9pGkR5TSEeS8K6REMq4phhzLArMXtVU8745t4DBThPU724Rrtk7uDQ6T1hw5ekntWfRUKx8G",
  "key7": "66L54AdmVzhb91mpg2GUXyBfDNxcos4zNabYSXTG8nzstC8BpLjTb6kP7G1gWyhVfL4LrLAjeRUmQFN6pxyPLtZf",
  "key8": "2V1cGfQXwWfDCaZ6D7ByHtAwi4xnCtEB1CqYCYvDyGq8pZ6N7MXWpNQSpDGp4mmR6kwm4vqha2XteWqRxB3q7ZRw",
  "key9": "cDuRnYeYFHpmwMCJPVXeuRdcV8XsvBbJxtbPFmxkWD87kP452ekXwQxo9EAENTRAKJTVQP45EAS4cBbNDoCyzf9",
  "key10": "3h2UZozwbJgKirkxSUqq4KbdgB1xB4zshjmFn9uFqn5eBi6nAtjwLmnPBijjsVN1uiYtWeZNojaVPy1Yq9HWMTMF",
  "key11": "5UvCzUEsFS6RF1VnbPhyTDE7xTbwy97AQMoqWezSaHeGdv66BHnq6Uweqsamv2YDXn5SzKDK245hMv7pd78XATYs",
  "key12": "4d3idVunvRchwHbowMeAhkqGP1o1Mjia3oZPNeGD2kEA3xnUczbgirbAA5PfkbVwzWk2Fxepb4GqYcDuzuB2awwh",
  "key13": "5PW3i4spRGuCKbAvNYC6h9VLZVgQGVakBgeqR69FMxZ9i4EKbuQ7M8yHpnkAPjkHpjEaPTuqSikgmczF19TheiUn",
  "key14": "5UkVNSdMNPqUMLumkWZXbW1H3m7jjLA56CRA3y6YXxWDwVJwZFKDhCLRcXdjavYvX3NBJmppki7H9b85VDkgqM9g",
  "key15": "oamjXva1rrNgnyYsvB6hMJe8D9TwZ9wY3fZavQ9k3i3C8qFvNS7vr88EEHq56zrL6VYzBjJfP1Lya5PMNuq5z5v",
  "key16": "5h3TtoyVXWVzsvp2GnhPoFE8JuxqWme4JDqwePxZ3hag6CvL1ZRrUkzE9uq5kAzuCcMt6VJBxnNkk1vSb6XhoxHb",
  "key17": "rJauNrxxVUkernCSbKMBWckPzDi1YJLG8fYezD9un3qUXvqQprKMBCzw9FYd9f6Ajr2X99EuRixp2gJNdJ6Zssi",
  "key18": "yjaZ6w67waTU14q84DVU7QkaoF9eAGs267jZk1xBEandqkV9gip6J93YRpzGRQUfykJLuL4qGJdSpW7YaBuZJBF",
  "key19": "5S6Jm8wASkQBg8TRGEe5N3VTBkWSM7555vkqbiPuvaNrSqrZrvM3Jq58RjbhvFbzU3XyQtBeum2966YEojyBik6S",
  "key20": "2A7MkZa8sBxVRo9Nfpdgn9HDXRxo7cKb7y4eoqdQmmGSJT6qeVMwCsqsw4Lc5ZzkLrZ8pai7aCdwtLLEDcWCSXqd",
  "key21": "5JG1X8vx7mLQAuuae2KNXvqpzmSjo521hyMaAT9zgoefTzdYg1tDCR6kmnBbo4jhR7sY5GAsesxv5iBdek812jDU",
  "key22": "4dMjJZ35YG3zK61poJaUBT76y1czsf7zkht5G2D2szd2YRQoLuxu2KELCNTSsU1PHRBwumQq6tzQvHdiCwcVvJPv",
  "key23": "4gkfYTfLNusyA6A7d4HCpgD3eBUKbPPWdabB8XrxzeKnRypbrXEQ1XegXLzAv6hH2D3Ut6bzzq2WEFobPkUxkCrG",
  "key24": "2mmBnCnGrGV9RoyhDv6Py3HvtZvMmKoybmyCs9CaxQyRTP7osAL2U5VD6egvi2ywTrqj8WwJ4ey4Qhi3LL3R1k2a",
  "key25": "4ZaxQckKT3qP4DCqLAuoLXRoRh5KTHK6EMeLDhRZNpM3LboHikbdpvc443c4kECt8c1xFZgC5rcFAGWQKVkZT1oQ",
  "key26": "5yQzebD8R1hCJU2wXf8dKRc2ujq4nw31uzgjZpZLvnVt4WEzdxdaH6oWm6ZmtXa8scPJXAxUMDJaj2BdAEKA1dSm",
  "key27": "3K8w6Qo4FAMYidT1XXvKxaqEuyiZ5vcBapRd9cDkfcDo1U7BnnuHhZRP5dwtpaEomQdLABbtXqAp8iTrpBZJFbMe",
  "key28": "2EMuwbUv5oQHyXs5jEMruzkbjS35kzdytxUPW3SMvuTsBZuQb1L9QGgJqjwyaw3gLnHaNimDEQ9qLGjVXEcucvGR",
  "key29": "647LXF5u9CsnLQFfUXQbdb6vYs7r3MBiHeSj1S2gMfvL7LukDHaT1SeNfPu25YLiWFQnmcAWzssUB3QsdDUDiamK",
  "key30": "3jSU16Q98TPcUGS1tDJcJzTkGZefdtNNJ1EQ81iFBkhyLCZqfe4dJQV9hJczjPTdmuSGZSCvF1p1uWJnjhkRCSpk",
  "key31": "45FWHcaLjkzoaeGQqBpX3kiMpbsAx2UVq7RyoiYxcC8SxsyUNAQpLUpkFh52Dcy3ySdX5yRVBFrVwBf7aU7K1UrD",
  "key32": "5aTNnggvsKYC2fb4AN6e6SQmxrDk1BvrvZFiyE2btenLqVWTQS5rwJqSER6Qc9F7LFTXihdzsmfjVki4GZX5Qmg6",
  "key33": "4QgPYsma2BixfQdZ2GrqHnqELtP3nvYXA14HzzeshSNBNxYpbVBHpKBW7eXpnJN3aifJk63MiohmuySvpWgRwczT",
  "key34": "3k63vbSxRYHuAdpGAKLwUubZ6q7iAsmFWm3jBDrJPKDpSq8iyeipkJS2PE3XAYKeBJ1zNuJBeEWWALQt2xLx23wz",
  "key35": "2CXpLfYua2GKNebDCzUjpQnB8YbeJRiuR8po6aYQBQrRyXx6xARJcsHHvd6w7kJBgRapa3nu4JCykvsfoiT37Rhj",
  "key36": "5vUzeTpgTzZNg8v4ynWB6r5u3Ngs3PpsnMd5aarrF9V98Aof1pkZCQSkhisxkk26Z3JMKEheDjzCidMTUaxyiLyW",
  "key37": "4TWc85j6ojEwGrPU4a1RpZTBLAN9Gzf5VJn6mbSCS6gkUXPgPKUJ7WrNNKH4p1Qi9P29Hj6odsVLPnj6wLLwcKmy",
  "key38": "5KZtr5qXrRFCUcEw3zG6Fb8sLtcJd6Lp2LuxfRE61HJRBN9vekRMfQSjk33b16RRY4qvpb4ECCzj56FwAUB8nAer",
  "key39": "9RR9H75BhUEqBCC5SvtDyozuKdvmrL9EYhbsqA1Foi98sbMBUeAxSE1dMKS8bYtCdu8of1gRhc5YQzxE3FJRXPo",
  "key40": "34KvApaTVbPNvELfc9pwKpJzzSV7RE7oDJ1vZArmLj1TJyrc6Ao4TcYCH7LGK2JtoJQCoy5MNfv4ixw1pKgzeobD",
  "key41": "37ae4ZvfjJSV7FvrsXv5irfMYi4pDwjaHByDRwuKqEmVJTMazbP8kzeTDxiQUGsvb5BHBTLGdm2Qqy4D8N5eLqqo"
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
