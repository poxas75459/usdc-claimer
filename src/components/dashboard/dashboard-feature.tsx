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
    "3CiNkrXkeuUF6xmThGjvcfu9umGmXuZ9kq4YBLvhn6yRwhZMp6wM7ChEqiK3E73PFM9Fd8t5JqnB9fPTLxBXDQkJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31YToS4rPsHidZQQeE6n9i8SC18PBxSC2jpbonqe8nADm35Qi9qPfoAaQU9QMajbWndCVchBGigSG11moKUKXFZJ",
  "key1": "4GNKsZPhEFRxgNQQPhqkMMf7aBxKMYrZqp8QRXzZLp2ugP59cvjyz8WPYiUBv7xHf4neNCznREpwszZzq2D5kmrN",
  "key2": "45oydZfWEXLr7yNfTQxLibtwGXdJNYLXCwgrapkL3Y2UoYFCDKbpJxs3VKxuAf6QW7ktLez7ufEDpY7Auw3LuRRr",
  "key3": "5srHYYYr8hTvkhHRdt9LCMEYPPAYmaDbDEBuGrQEitpmuvieQkTw2YxVYkDzouEEkKUhx6vJEPmfiP44nNhc3Hf5",
  "key4": "621tANPb6Agi38MJx69UHMGwRBwZpvAeNAA1eTVi4LX3KjE9mxQNes17qQk264BpiShXgKbDwg9j1PnkW2As5t41",
  "key5": "5vqtsoaHjJGh83BRWJgkZPpKdDdMJd3SL2pZWKHxSG4eskpkobqh21LpgUtD4kbzFCYEEnTXyNpQ1Z7Jn6ixu3tD",
  "key6": "5sbjcpCZos4hJx7jYsXDsTwvzG4aAdUJjtLbfwztUjMzqU81tZP1ZzWvMSyqhV31JrEt2NpFX5T2gD66Lkf2DL5f",
  "key7": "5PujCEXsJr6JfxFR9NsNUoB1mA8ivcuaYZWRbyKvobD3kEoEeBFwyJ9ssSZErjL7Zjw4bCdH4WFqSZXQbDSsh5qD",
  "key8": "47MfH3MpWXzAZghidCEjJSW8mh3Q5KNRRNFdmFETiShYxh7kp1rB2tL9FJZEEZKotw7G5h61D27RYNJS4TGmMGVk",
  "key9": "WiGwsVR5cnuy7iMnrzKsGrfAQ5bzS6Fvd1ymJazkdPuCUEYkDQH2YR2H4HbQ5GSm7uDvhCLXdcqgsFZGH8tEVnf",
  "key10": "saKifFz5hYrRSAj34NkP89CHZkVBFpx3R4tAvNj8axmJMhfd8h4KZNxM6pfH6mx8eetHQaSoPaJF18mWcwGYwnN",
  "key11": "4fgeGFaSr4XsM1S3JpYLpCKBApJiNw9e1PVenuUgFszCKnjHkUhNUtq7V5nRG8hpFSfLKyB85nmr7UpSWjsZa7vH",
  "key12": "4jcKGkqHKaGGWAJULgK5JWVjDh5juaqG1gHszmLiYquBPnqfiFwxxEBr2TSzmG8XZ2uaE7vwrPVCTGbT21q83UaZ",
  "key13": "45KD6gmERodEDBCpX4LTyjBiNdkqLu8gBiTB7etefuhk72UntQcr9GWNAM5d3dxjTpfHJcTmvYnu5DQHvgGYxAV7",
  "key14": "65H8VVt17QVBmtrAzuMQRTg969mjGNoh21mzmHFPx1yhYSMw8Zr6wbompxD6Mxu57jMBCpTbZvHVbSzKbsZZE8Rg",
  "key15": "3fZcDACNhx2B4GF8svwqDwHwahFnHmaavo4XZXeNen5pmvbRZmhBA9KkzvgfYT8HaE11XAm7i3ibtyUDNnGnmxjs",
  "key16": "5mVzatd72WvMX8fKB6W1EWvPUBH2mxvkbp2q1yWqr5ym23wPDgyqfBBoJTsueowZzCTpHGZ9qHt6b6tP1bRWmreo",
  "key17": "2akcbTYt6b5gr5Y9dwmRLM4ZBjaNkVCG9oq5BoBN9C369nGkiE8ix3wk4MZ9tsehqowMf7Ts6u6iq7uwBShzQ6Ef",
  "key18": "3fQnLfKMpv4wtJEsN4fGuCogX2oeFSCZbSfQTAC22jMmCrsiuesk8NaaNtkVShy4noT8zWQwRBYZoVkiw9HJqHRg",
  "key19": "5kagaK9dZYorpLkxkEgBx3cqF2hW63nSG34qzoxaTbR9Wny5sHdSCsPPDiBTsXwBWQeRjwAmRcsMxnahsMb6Dvqh",
  "key20": "4oTUDw2k88mr3Q8cBz7dxarTeAatMY3aVKp6xNEr7hQARfx1U9j5WNfxELhZGSQmKHM2m5Vb4jR2JCW2b4YGoUGb",
  "key21": "2VPmJPmWmsS9baW1Q9guPu3nAU11LrE2hLmxKmaWcJTUt51twRBBB5SeD3shPxS4XkwSkU14Jr9ULWy1BQHMKz8f",
  "key22": "2oer1jg73LMiHEuFmNJTpbNhGJbkWNrgNT6M4kdZyPunKshrVVZ3WEdjDtV4GQMCED2kgUKSsrWqBNkAcMcFYJWL",
  "key23": "3KWC5iDDm7aeCuQKBnUVeNa1PqQZd9fHidez5jeQ13KyG84n1jjPFLV3pERW39rEMyJwZ1Ra6HRZbqM3CLnaiSSu",
  "key24": "3WgwM1jTKTjXwumwJEJjRFtdMMfCf2V88QewndarhGReZrcU2fkRzJpXa2JfGv2c4WRreH6xdADdzxuZghEo9Aho",
  "key25": "FJg7n8PZVJsf7HeJmroXJ3MwRengf4fnAFgQf9J9RKrFThGaMRFqRUFTupbkv9vCEQNzXsbEiTb1eG4EpPFuXJn",
  "key26": "23d3tRLGkG8zces2WmNkPh1JPBT6RbpESYMNe7VwA65HeBXbh6ngtzQuALUpmAwhRFtSU4f2kwtu7nXYT3jvgByT",
  "key27": "2iJJpeq3AuZrn95oVHbzpC6Gs2SmxVHW8gjq6ZWvGBdD89hjXa3GeXeTfqVkALtLHxCkSzPiw5sidc6KSzbEt7VW",
  "key28": "4VYr3q2bkdMpQtbZLac4eYAgVFRCy5F9ihWskM9ipQRvdCn3ZrZq1Jni1v4z9dWBLJE5FhWK5ahAeHo1kgVdgS6X",
  "key29": "48PfKHsHHVb1omGME3L7AtHGuJqtcE1JbL6qjRhxRuUuGJUgtJLu16WHbeHiP9Qvxjvy5s6eqm6tcm5CPwunDjku",
  "key30": "358B4uVkXcaYMTMxtXcXuMm5VHxaBKxiE1uzQQQxr8vyk3MugBWP38eZw7zfxSGyP94hsAE7RBjTsKnVaHwaEmHK",
  "key31": "45Y156poKF9MS4cnsR63kQdQfoacsxUUgZj7XNQ7EuQWzj76k2VpN9Uw1qxNenG6RqTmPjBW32VRfFeJoAZUrYo2",
  "key32": "tUJzPejCcdPXCyTtmrMwJ5c6yX9qGaku7sNYVBsQFVRyvqqvETsovyPm8xZ8eACTRabnUNypTZ5HMGLf7XXPHu7",
  "key33": "3kAjE3D39PTjH7mbsyMGzLTFpcWoXr24WHVvaQ4qna9Y7PyFhVi9BtbmyNkAYCJUWkhvCoy6LDpSrMBA2vvD5sNE",
  "key34": "4scFpcvh6dxgxE7GptAsd49GRRjwbYhAayfyDHmvnZia4yz1ERShyUgdpY69CWmxDFR3PZbsCqjnA2nTnUwBo4yz",
  "key35": "4hi1wLN2QoWdkjiiG72ECP7tgdqUbLbVivVPmw4bE4V7q5RaVW2tojTq4Az5GGZp5z58HDh5fLHaZFNiWbKc6tVy",
  "key36": "3fyitpVpvpPfJJpzi64JSTZnnyZaLpkaQin14N1QLWzd7FcxuAEjxs6q8LA7zK3k9VYapCjVZYEU8QRk9o2D7zeG",
  "key37": "3Vj1osmK3PMfn9GDU3qxbZ8fRzawQVGTXavy494YxDQm6FP6cEc8GtjazYUFmpnyumPTuL9bjdeWZB114nAApHYJ",
  "key38": "3cbs2kWqvoFwTWbhPzby4Xu6PFBRSY6icwUw7oUNbpez6QEGrxQ62m5cUJEL3TFgduZZYZz6PWgvS2eFhwqSwknL",
  "key39": "3K1ThzL7DS1QVbH6pbB1nSrHLjBCjCkDDkQQAuXC96YREekyxi6Gzw7pxjPkmpjJEvReuT571QnHLoAEfeobkW3p",
  "key40": "4CcxWEEWHveeFfR7Fjs3f7SwfiJ8FB2ef7sGw2ccTLyPaQ2a3TpCpXDSRNxoHFvNNLWhc6x3rWeiDdNsXFbrbV2e",
  "key41": "2ypuMB4iXtx4caPuJpvDryFH22zWQMW7oafdkCD5vJEwLxTRrKCHkHsBjmkmVhAFVqeoo6DAJj7qNwFQihz8Nu8v"
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
