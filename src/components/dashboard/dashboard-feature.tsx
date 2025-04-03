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
    "2LmZbKhBhNyPYjmRLapvSm1QL5ZJKWZWXMuP13bcGbBD5dmBWAatrDSWZqkNCw6xCkuXd36qBhUkWezLJ33U21wQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xoc5YUwDk6XQUbyr86kHdo9sTSPwzksmYP2uX9ZMQPrpDxi1TdZFyicPNBMYTydmQ1e2fRA3pGZr45pbepDAfcj",
  "key1": "4vKMLEwiiai64ECPWzaNEnUxGwv21YG6ym2X6rZfdhpMWuVEuuG2sg9x1L2h9phkrNVa7x9cs99DmZr8SvKqutSL",
  "key2": "3XxDkEJd1qqFfD9SvssBVZaCnV6z6WFTJvMJfojgLUV4LYnk9ykNnmmiY4MbKNTYUYQZweeXh4hKr4FTBnB8cSt",
  "key3": "5EV8dcSK11F2BjS9sGdTLWWKRT2ca7DVuTrxBpaumkycr4KsUJPCx713szFw2NsSuw6LJ1D1JKY9JKVDHqnUdz2s",
  "key4": "2nVzoddBTxZnF7iRRauYotp4XXYAfXWzpsrpgxBsCEhtWRTa13TLcAWJpuxZUnjQo7SwoEBnt6kmTfHdShnmDjZh",
  "key5": "2BFmR9pseWraJQmF5oRBYscj6ca1Y4oeYadJtrH2H8bKjtTbccswKQH5RW2s8ZvZX8jBVDuj2KNye7XpanTAAEUA",
  "key6": "647jUZwiuKVkP8DjtxP3VyCr2qg6aQqweXFLfB6AvmAwdtQCVSQZ5AzZF4NyGDyZi6td9Wfd1ib1Jar3rvbprYxR",
  "key7": "57YtS7wRrECiNN1DEYEsn7p2wwWPpPKnMXfKjmW1WsroTMvH2ZYNvvFSvgBVXTyCBy4DSmkSDAVcxndSayaQtDp8",
  "key8": "4bVfSWEiQ8YKd7gMWoFjeFXLVsHSRrprCeYZTqnF88fKiwSEQCVSzwn5Z6zst6pGi1CfQ4Q4zE5mVBZq3yaZGF4P",
  "key9": "4jfBwa1AjpFR1CVb5VWuSEPwhJmD6Qqu9e4Nnz9UZVA6TvU4zK9LNwkgfji87AMM1ussHuXFmaaKBGHGuLTtxCmp",
  "key10": "5uHWx4j8MNpgHvymcbsJrSJ9ZhFxqajnVUxBz35KHpUag6bVUXtJ3yjggLVEptB8etFG1qmnYmwwURrRyYWT2UM4",
  "key11": "2i1wGjhv1qXBZi5sgzR6ryamxXLbsMCUusb1adoPtmsXqN57z5xVYNWZuPzeBfdnbhBGxJgMNi883xZoKpwY8BZc",
  "key12": "4NU4MBB9XuU6W7FDTQHMefribd8WtixMvGz4N7uKKbL9af1AkfmYcYrbrvr2kqvDnxs3hGhs3nR7GezwxuEXLJVw",
  "key13": "4We3JRsBaxd5ZS6erEahdy7HyW5EmqZXJMeR44h8vC9i4nmxamEri2uMcbcKr3ox7girz2fCquVhjWHsfteQ7Djc",
  "key14": "4b9GUqGmmktJD9JdnnoZ5EujCbL7xZZ4orgAm23YV8eeKiap2tzt9w899uNxu5s1q4126bxr2ku3j3XwronCnbFX",
  "key15": "TtXtwRH1xPytqB4AHJcFAw8s1KumHXSrNcYmVyGPodzhUcd5FPskkTE5HYX4PVHx6KZWjmkknGQjLJnrkyUPPM2",
  "key16": "3UJxZAqmzuqJtPJZmy6DrTmyz2pDnmzW7kKBtAbkRQHzdp9WsrHQwYq8D4RcL68DAWEP28yGfdbS1ZGjNxEec7sY",
  "key17": "33qhpmgJc3BhGodJTqyKWHATYgsnzfh2mXzGp8xksHu8jTegY67fECiuKoVCqx4ENMZ2SjUCadJ6XGJ9v4F1btoN",
  "key18": "5F8QKAZBnPj2kko65sp53JpmtoTQgMdhJoRzWhUrNXspNED2dbzhYo8nKtQU67jZyEiMHc3ammoSvMenBRLud1r1",
  "key19": "w5SQrdZx6g3mYTVE7K4dhH3P5QafRu363Q4XMH9CXiJVD2bNn2LXPDmT9Pe1uAGSJSgGCZwayrYfZhzC67E7YjS",
  "key20": "5ccPbvQ2AnHmfUndjhFWQdRU3AjnfnxTKuQV1u8YtD7hjbkCQeXDExDWFzMJL3VEzKRSkGmFkkiZXzc6t6bcqLj",
  "key21": "4y4qZnsrsh25SFA3UpfjP5vJhs86Afhcp7CkLvZPAgMFQ8yvyvdwBKU3vFgaTsrjCaVksuXgH7Frq7amUoG3MYfP",
  "key22": "5fsMAQSZ3puzoYUQLLNnuWniTjUhpFupMq3VN6W3jvaJAoE3vbqAwHfPvTbYZ4mjAoc9JhdKaD4K1TKFeD2i6rzX",
  "key23": "AMnyLS3DTievgSbHj7HrxHAmCRXhwJtUT8NLnT3fiYRm56s7fLZYg9wKm5BdDKk1fGMF2u2VZeisGPLvjZ7KnRX",
  "key24": "223Hb3C7J2ns2qDAF9Kq3mbkHc8oUpFFQ3DDLPrwQeY7k42opGjpDBkhsQdUP5sG4GxdwYX2vucX4vAhEgW8Cs6V",
  "key25": "EKyeTihKGoBwDAKsABXWG8kL6eU9Wqs1NvDLdfwvQRygN8SZkAMAvktsk2p4DtoRjdwieTCehPtCPoFNzSB687h",
  "key26": "639aKCKjQKgTG3NjDLcy8hwhj7Wrbk8pu3V3cPyNHeFP1mLV864sjcSvvpfkytZXs98sv2cKaJVp3konL969VVVr",
  "key27": "2JSKcN8tnJPWC5TXeRiyq7jYqcngqoMFskg4L2hNRFTYBfXWsSjbxg7k5m1cCXvqptNVaMPHQWc4zfeZbqFw2hrf",
  "key28": "2we58iRqN85h65Si6wcgBxAdPH3VcVZ7SZPLzcMVrMtp4kVYQBwqLYa5QsQY1KpTGUQPUhxtRUYBWjL83poAc1YT",
  "key29": "3BRsSu6qFzkK7po3qQ4Ynp15rhHeEoCFgMYSTEgEyUR2WWz3UEp2hoZo2gE9EhCHVvFPUxoZmz7j39HFFLFfdDqd",
  "key30": "2fkajYCvLdmr2pwT5VvNBdivBXCudFLP1FG5hEASU7vcLv7WokfuUfUeot5xS5A7gyFiaNxomdC6K2KU3fskjqze",
  "key31": "5mycNRPjX5TVwGiMAoFjbUTLPLgsRcc7SDLv52Cit3qvSDp2DQYtZ3NY11Et3YRcF1QUgaq7DJ3Jice8GnEfZQ6g",
  "key32": "54wRrD96Jt1p6KPVZQMPyf4jd8ZyRjkhpiWe3cdux6Ca6EnvMuhe3R4GitvDDKsGuGU51NT6dFPGeYxQ8y9dwrZs",
  "key33": "3YYPq49VR6UYdKWdaqLSQrm6iCpUZoc68rV8LyJgD7BwV32KscLsHQeKeZS9wj6pbMspcHMpzSnP93SWRBdhKxvE",
  "key34": "3VNpv8qxidzpZJuyyXB3knz93oWsDtje7MviDkWtX8KN9wpKBysLbgiscWPKEejCCqNN6qYNHDDytfczuRxUVuC1",
  "key35": "hw2DzR5PCxwFdetLF1PGnHX3wYtSqjGTJYirgyMUrQNYTdHuuAdth2dySGm7JewiUTnHSzqqV9AHHjJNAipJqTZ",
  "key36": "2v2hyBoZv3H41LkukykQSP9FbJC7Fqwix5NvRfaXYtigVmzcW4m6FifUh71V7Uoaya3qbyRyQ8doF1NxyQGwtC8H",
  "key37": "3ds4Qhte9d1nPpE4WjjCnHvQfXGk6pASddxCPjB82LejUfJ4BW4z8p2nQFXyD5CKTLEFwnBKNXtMrmdjx7E2rE6W",
  "key38": "5oQ1bfY5qSmbhfZJz46chN7b3iLcTGDHg5aWtEchGm5tK6qKkt4driMmFzxNh4FM5wADK4biNUDE1z4ikKpoKVY9",
  "key39": "2WExbfPd2kuUjYz8fyWkybsNzdbjXtiJG4m3hA6t88rR1qf1mjjDYEHJeBVMTAMonhUBCzMmxK5o9RYTkDTFKJiP",
  "key40": "3cDswdWy62GhYfeX9DBDA2fQ9zmXiaPaqvRbXVqtVxnh5tAg2zRHZt1zm2ZUaw7buCZgJrJtcbcfVqRaENJYjyjW",
  "key41": "3StJvne6cydg27C7YTJtFkq18e7UyE3FGyyQdiBMpjix62r2FQ3RizERsRVEcV2wp6Lky7KNVkCjD49J4mZJ1sj9"
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
