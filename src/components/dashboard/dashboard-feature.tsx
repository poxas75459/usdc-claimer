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
    "3GFVUk1ruDrjNd3pKmvu67jMrrzMfCdyF19T4CY5HYFzxTsbaajWKjFqMLviGpcKzEVXkJob3Kh8oH7cEMg4VJ72"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28zVPFh8MSoeKwKitmPtAG7RehN4Xesa58fawg1K3rBziEuhJBPfqp6VtaiDJ3nhnKLKU1CBFGPwfaGFekRWMDoN",
  "key1": "23rtccVhmujRJBxZNs5t4h12oms5Xc72S2WyRbf87K2hsWmEzN9tFxTDnep65wvv218wxSbDtjZZWBXJxD3XbiYW",
  "key2": "5FFakpkCpFimq5vzkdAVB3NaqjPnbeJv8JGyDRmUuiD223CoFvc9ndM3Y99wsfX9uxYXoxnuux6KSG6PYPb4dhse",
  "key3": "4dmkD8en1xXagU3erYXHh2qT9gpmsDwBc3MafwN7krYaqw79NxFUjxvKCnPbmAqquzjUZQmNg42JNMCFTgxHsF9K",
  "key4": "4iqzc5ibDKbVBnRz1Hvbe5XKmMWaMgWnjv7VHioThHScasQH4CUahYEzyJ5wBY7dBMzXatZSQKdNi372wG6H2U9y",
  "key5": "5cKbvw1DBEncn6ASVZKx1LNDHuA6g5RNN62YYJ1dq2uQC2hV7VREXV74X5xmQmFfXnyKVGMUwxCY3gnBidEoPF8k",
  "key6": "2pZPayTY4ZDS9p364HLvQoWtxn4vHFGhPAjpye2KDv3LaNFCiGGpY6q6XAVXDg665w5cs7PqbvAniMyBmYuhXwgj",
  "key7": "oTdA2HiBxWB9qGP3tTxn7TaLTBxAe8Zr4tYhLmv2fMi5H61t9YTLdHVz5kkhnzwG2F6xzqD4Y6MxzJd16j94Z65",
  "key8": "4HSptmyNJSkB9biKuEfqxrD3KTxBkCqDUSCXpGbVBcTt4vd8eZvYJUyCTGJhG9EBxLQT6q2sVYd1UpeD6EC95Enm",
  "key9": "3oFkvcAF24K2Pf5ese5EqSM8zzZVQviymV6ajKsQeF4dFQfX2gSwAc3u3SVNAoPP1wQwKEXDZAYaBGAmdHiRPJYe",
  "key10": "21uhwonZ8wcyysQ7BGHnKMH6ssQvtD5dfr4oAdJ7ib6XkGsMMGk16JfZVv5GZCzuWjfsoxZUyDEK6Jk8ikxxHyAn",
  "key11": "mPqRLoUiiGHt2vfv5wvMUGC4Ek3GC9Xr1ikBoZh3MNTzVNiGDNNogm2euj1wp8oNXxpGdWsc8dizDfzU3vEM7Zz",
  "key12": "3z7KBcYZHhGDCjnyNgCJNg3cnCnuc73JBQUHjWSeZ4fMx8QRHtoqoYULSow34CK2PE6mPKrh8Xz4nmUxgQP6Fo8j",
  "key13": "xwu1U1zHTxuUtuEJzcsZxbbvVgQpXHR2DfSAvhTeRLjL2sDfgJC89WaTpZCMehnfS2vtydnE5Uru6MkA3HR6gXT",
  "key14": "5g6dHCJCbkxUwJ235cChwfqDnniqEEXCUD5LLJhizqLvrf72mw4ns86DrrXWqJhr8t2mhVUEbDaF9VjCdU6aqHc1",
  "key15": "5ErwiZG5vC3H5VQBXB1pjWrCV5t2z1zpLaBXZ5sbHAmTw368gcYdcr4W7jdwz3bzfBavGx5tRTUSWEqxbqEwGHfN",
  "key16": "67kJyx9cNjoEazaYu1Soshm9s76cFWrtGCCxuQf9P1PnQnL94h2vfGcLsRwQwCh3NrMqrviMyw9kbJifE69DNAXj",
  "key17": "5TsZhjD2dgtE5pvFGKC25dVQjJa1iAy2f5LrVuV5GJcVvPEu2PA33zN7sATT1U4h19ECWyGQzH2RU5LPPHbd6fTd",
  "key18": "VZRqB4fdqGcn9BMnaCEvByoK29hRtCpsDEeoDkZnUhA2fj3PvT5H1EFQG1bEJ6h4StZt7XCrSvg3paR9hkVv4Sp",
  "key19": "61tHpYcVwb7evm6mHXCgAbtGxdw9xUSMyRxoU3Ttn1qUjC2JtNFKqfbaMJVRccnLzhmspswnK2sjAFRqkBCbejfJ",
  "key20": "3dkqEciFsmeL24dTm2qqxj7oyvS57ghRdnKWdpMWpc9JuhZTetbi9ECBcZ7rbcyCqunhp2KauCbST3sPSPjyFj62",
  "key21": "3URFMmxvaqNFHGLmZAjZ6vha6SrhBCcDaUYLaLK3gYKX4x7i7LXXqr8w3La1eViNqFt3iYrMKM5MmD19jtKnUWW2",
  "key22": "2QnZSzfkPgSkbqWg63iyUphZiW9dr1VZ7YgoXKsr3a9zYcs566UdNEsW6D5KgduqXgEUWdFMSBo5EtuKmLNGXmy9",
  "key23": "2cg1nNykKpkaMbEhuPkSWZntmgUxkQaRM5ea1GnByisXpEY5PTaCa8Z73Xt9y63czvVfbiuo9ek1pNQF2uNg6ycs",
  "key24": "39taCvkVXTh9rgLw65WMib66higCoxScFNokgK2vFNVqE22GWeUCwRPLqwMsy9Q9jaH7cCvSw7D4w9nitYabgQbJ",
  "key25": "2L13oXvx6PGRMRvT5LBi199n4VpywAoMTugRtdv4jGFydXCFPRMUcHJxdukk99Ho1amXd7EeJtvWz7KQ6KdaSbaJ",
  "key26": "3Kq1fXTdz4WRrdLza1vJTzMNP1G5gbzR53EeyfBDdKEAxoxpEtpsXbUngmy9jTMuMExpDmity9VNt713rMFWXNyA",
  "key27": "5ZhBrbf2JWLPsyewk27gRdDpbkK4r3y5Z48ABNgxsxhWcX5t7YziLP4QGvE27hVVsFFS6vZG9iQWRWz7ZdwXSVnd",
  "key28": "2gu2fnuh1cf8kQC65TjANfWdogDE7ChV5buFTQQPGZQLxEHbjHCkV4WGTuoxmh9EJUEbRmi7s3F3rWKn6ZDFi6L6",
  "key29": "3ZhjPLzk9SPmtgAJzZH1wWsouEHvkozA5rNJQQaU75rgro5UNaiWPbwJVDLGQZ4PxgHHQQBUi5fHaTVoGbt4WZtn",
  "key30": "2o1aJDooommv2VGjaP1UxyEcpsegVz2Qo8z8HBuVrDs7PDt73FcMWADUKxon9uu41V2t7ozyFQgeoutUMp6NJDMB",
  "key31": "65NPqoaN5dJZzn94mv8LeNQ44Vqu4L3UngpfqDP8pi1Tz7BgNQd1z6oKEKkzfjtBVjTjVX2EkWirLiqRsRSz7ksj",
  "key32": "pdAAz3Pukob86ZNXsJvfoxg4A3WmXF1fEHRD83uccwFZFwqaEx9rLL66SUVG8A89zkVfhRRwMfaEJfrPiccaueu",
  "key33": "47NDnZBcP6knooDndLdEMHD7Gm7bApP5QmE5BxtVDB5WDihu9uYHbAPj8fWq9dhP1XfmfJqkePqdbbnsMmhEKvDw",
  "key34": "6622Krwk741x9cdvi3Mb7Xp6Ah5Zu2LArcMF43wfGgx4ZwopEDJvaKUdfT6pvC5MyghVpmFsEh7H4FC7RESDRSuE",
  "key35": "5Js1sGhfhY4FqjpzFio5tiKb37n2r1mFnuvsAFf7ULEwanLAAFG4D72e7a6iHj4Wa2Q9hxvxySqU1eYBZwCiFCuR",
  "key36": "5mgett5R7RAuDxZ8ffkUf4v7rweugpfqfutyDqLJMrPPiui8J1gR3Fg7Y5kbmFaSaJdQHLzHroFCZCQcmbog4U2E",
  "key37": "3kbmsYJw939k1Cm4EMpKpkxPwWmRmD24mnRu4Qyho2NJfRqdFsfYekcwHGFE4xsY9UNEr26Rji6eJYfLDcHfzAuV",
  "key38": "4tAk9q5ahtxrGdUMbdoF781oM85AkjMbHci9VbVZXFSfwZXi625PqPJUg7kk7q5Y4Wpk7zodNXFEWxQEqsiMxG7g",
  "key39": "2EfcP7Q5s4kCrNToThMt3fZBLFV7EKMo5tGvaHJSTWtqWCysdUaGCAGuaQgGgVSfGVBz88MjaB65zX9wntXu3Fni",
  "key40": "2thPXXHJdKhshY6ySWauSG5a3dvjVE7o1Zydtc71iXZbfBuhZpHFD8aoHJAC6R8BecALo9SYnQSNadixLm2ZJMmz",
  "key41": "SV5ZNJSxPJV1dYorp9DrRPLD7yxEAby29fdtc4Hw9sccNrpp1BGhdSrFaMfKWhRKsPT9sN2mmKhbwJZTxVSvVES",
  "key42": "tvwLxdfhRgjeNhE9JsTaJBCoNhMsGVMZDBToEncztWrf9D3v2MuDFaX9PwoCibuHeeRkAXL93PY9knEmUWCBU3i",
  "key43": "2wEZAEeExgVHL4EPpXW9bvu4jiis4GKKSxzwr6cF91ar5rSBo5MgfyAAQsiujzVmDUv5SmDFAUeR6qndgp9cnGeX",
  "key44": "3Qjp5dvAt8zszq1dLhvUYfmBfhBguH2rUZ4aUWgWpiRQYavtHzTDsLneWjveqAgdZEivTyAyP5t4EzFXJFDd8VNk",
  "key45": "2GrwjfAdTjkk8ZF6TfNwXcDdJTWacBvfV2rAXbcUJzuta6sEiN4vDAZjruqPHyhguE6FacR729RgHYVd5KxW3zb2",
  "key46": "5KYGQNPDXSx8yjwFdET3pw1o8zyGmpugiAkfrjPGAc58aJT3PrD3DJvSynFQTxPWcy9RjxFcbAhUji1A14fPNnTf"
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
