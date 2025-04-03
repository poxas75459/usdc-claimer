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
    "63mJN2fqunHpBdncyZJKBg6VHAfVCwxKdF5xN4vsJMLfaHbSMJuaN4NHXuuRgVnqtcUEwemyuowt1suz6yRcmD8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wxv6cmGE5dxHjMkbFv3cU1jWbxHAZTWLbybyJemi6Abw7gxKK7N2PjCYHAWWYeWLMYVgDR59YmaQnzAS1mYHCet",
  "key1": "2t2NGbAVsLS1wnnUmcg4xmPyEgCVZvpPWtFoxcQcLsUZ3MAfz8dmuWjzNXoJfdzAu2TQnG8EbRFfcxvaGgYRNXni",
  "key2": "4A2EuatB5kAVDq7WrRWHtWKSVQdC6gABcfATwWDvrPdB4yKaWWuP4zMjk8BX7GRm4Laqeb3NZojs5ndXgjfNkncX",
  "key3": "34iUp6WbudautYrVJswuM4JvHMuNunC8T1813bMJ6YqptiXgGjAag1q1HEpqx2o28Tfs7JaCLwcpJL2FAPVUMemk",
  "key4": "21gtVSPge2xaymC2bJreUqA4JaadZATrR9i8r3tpVfpRsQwkbbQycYa2YCAR7Dgb5XYZMDiEgSDwyFKjJdwTf5t8",
  "key5": "2KkKEP5LPyWXq5UzGJXuA7X5skkMocCaDWiY4JaSF8v9zyvSFMb4hUicwxPMWS1b9uyiPiQsvRPPALsKn5imA1XY",
  "key6": "2TMx1KPiRHFmKhqHZGZxV9t6HXPmF7pXHzna7uMbnyjvRJoKdi192dCtjeuJH25QT5sFBhEHpsxwKSbqnavTMQfs",
  "key7": "499PziuWn3uwou72nPyUHbKMwKMfhQ75FY5WuSvZgBTg9NjYMw6uLxrcTBUCj7sD93JX2iqSgjrPuPRq26NWidA8",
  "key8": "MMSutRWd5A2Xbam26jQsMMFi53KmgfcbStqGKJwJSwjhc6rxa9FekpE6xJpqEjPg1BG5bmyhTGypkrmixGJRtV6",
  "key9": "3p3d4VHkiZFusN8S8mRr1squGnxsxeE2kzDwUc16JAtrvYkch2d2rS1NUYxgPgpT9Evi6E7s3XYtivWyfXYzzhQM",
  "key10": "3JkKQKKzTrD6pMAg5MtZUNuyr26WjF6U8e91TNHkyx7Ww2D3hrBHxdHiQwFHmvGsyfcv7GAEEmvkWTo3E78ippWN",
  "key11": "smy6ynLLUCrxhfUBzhCFRnzgmQHfo33CCaW8kV7Hin5DnHQXPTkQmLoA3pdfFtmB3uuoQB9KkYSgPjtNJJvM7AY",
  "key12": "4uK1VfV4Bxj2VjLVSGNGkZ23gicVM6rUvEZev7FYSCLfGjey9rPCt1heKiQiARH1roMPgZUmYSx6wxycHL3Mjm1Y",
  "key13": "3z7VkmuFHTos7nZ3PPhaot3ddLDZZGPc4AtjPRqkwnbhMgbLHci6Lje6nnfLLo48ErV9NRkEFq6y6ErMNRi1sqhn",
  "key14": "gmofNAB7peHFcBMwYHu2K7XBk5TmKy995HjvPKViLMdbgdxX8Arix3WrpEFVchPZREbKvGxRyU9qXsJTbiB5MfR",
  "key15": "p5YKw3XSqrWiUqkmY8zuXdvX1LCp6qhW2SgcqwfR8qnvqGT49xCRJANQiEHWGhCmqti4PMXRiQmZu5ispDNwEem",
  "key16": "Kij7Ke6RiXrFz3Eo9FsgL1JbCmtvHHbF7LTycJCaDsdCgU9AwGBR3NnfgSJa5fdikaPA5WnS7UXQNFgvJewnhVP",
  "key17": "586cvfoPm6SiXYKru2YexL5j2nakR1GrWfJfVxsTYz7svh3s7QaNhL4cQRbwHgREMk1frd9KP8omzrEBWHmkDgoV",
  "key18": "3ZfojcqvYmJgN4dBYcv2yG6Wg4XEedbv2Vgv6rFXrf2Ht4ugKPo649PAG5i2a7mJr1PvHuBudxAYL3ZeXSWj9N9P",
  "key19": "4GY85K3FisQasu2b929KmiXUqPLpVopoMECB1S3WCiQccHinbndTnjwAkXJdrkNv9wAogtiLn3ecWtg26XxE8FqE",
  "key20": "4US76xM4C2SgyNgHJoANUWG2b4bBF7NrqYufJDsdWYZCr8KmzMMZFnXFU73YCn5S1yZgRpWZo8SoXdqkGjRNgFsk",
  "key21": "4CLa5bKK6T3rCk9FQrnS6stHpYvZVDPJt1sxTCbMZ4TgUCg5JnafxzPntVqXCbcisFnhUCm8M8q35k8R6xLTMdpG",
  "key22": "3o5fTEMVxetXgSBNJXU7GjE9d7edZEXbXZHB2gNMMk3LVrkFe3qj6QVEXuuCuJ7mJCxuX7MGvfKPxZNAEAs3MjnP",
  "key23": "63fPsZg3jq5bwg3rw5eXUq2FkkxpjxsxWw6FV9HLeqTXDrzpeLE1rqbbsUgcY3BdJyGdAJXLMrhNjdDHyogPxCPq",
  "key24": "22kextqC91kZjLyk7DTfRqJLsFiLa7gaKytXibzggkiBKPRfCT2V9yb4tQtMwndwUXWsfZvmMsPdFsdi6dHy6KRp",
  "key25": "4qwokeo7UbGE9YF3aPcaw73yuzKEcjkniqnJzSUjNVCd3q48V6iQHrHmZbVkf42Srw47hcD25g9g4op3CJdCsyWs",
  "key26": "5VvMjNsuwNJoik61TaS2drxTZPUy8N6Ne3P7xfX6raUea6ZReYWodHgfeZDRuoLPe1gLSPFP7yc4UATof2RaqDm9",
  "key27": "zFbbNQ5Um61jXWLxEDkjR7DecMtE7ySN6qWyLSXQzA7zxMU9DFQMnyYVfe2TnsiFtqe77TM3v2F2i2RmifXA8ng",
  "key28": "2EWHCh9XyJJukpAk1oYzneKpty5bfjK7gx24LbyUSuJ47cvAVK3cLfzPVFtUg6rHv7ET9dJTzokTegtEUAsUGtVf",
  "key29": "56APDebY2B3YvKVREYmCx4QyhsG5f8SksVwByDxuJ2WEngXeEvtu4z4FsxruV6cEkHtLu4mgLWK4MnEeq4YZ9pGV",
  "key30": "LcTEhsfJmod2BPEvwTf2ADuccQoRy2DXWqG6duGgXDbnWbdtzGN8VDJ4kFqABevLyaNRNUtj8QPhMdxLWpqRJSi",
  "key31": "3HsR63ShKpfH8zzUqfCmCjYTzz9No9ntfkmXHavQ4Ec9Hu5chsFutkHQ9jA9y59GSHocFKwyY3FAt8jvposn5EMP",
  "key32": "2A1qA2JiqPEbLew9AXoxhsvgB6ZXFn27mzLLxZ71hLf1ZyHSYns6LYFBjGm4xN3pnw6poErL6heEabz8ekbSWDKB",
  "key33": "urGAtNWcXuCr8jBa4LwFRGvxoyqptNwJGBX1CehFMNmfio6tc9QkntZtbd2NKthgW615minmG3BabPiKZoSz7mp",
  "key34": "ieWq82dvpbpzaa51kF63Z8ZqgGkMmmUnEesN8zL7VdoGemhiCmWDXdm55U1TsHUaQ9YaqTqMcxxWZhajUz9sgYM",
  "key35": "2sF5SLmwHoun1PYLL4ZRXwLNwZ3EnbPLmWMdwud5ryiXSGvsZSnU5NqGACi3hV365mg5NFm752pQg59R9i5jLB82",
  "key36": "2jX4bgbxD8yi8JaaV3JjSSXBdj4NTWv9rQxB7uyVyKJ1H2m5o3CgQDn4VThqYLKskdSPkVDRTcYPZeWdafaDNziw",
  "key37": "5fa3fPbbDqtvdHj7dNDfmoL8BmP72bX643udpPk4HHJx3gCs6qtRH8RD3Hux8V4j1jQQB5WpycGq5WXYj29zWtwE",
  "key38": "3c7KZsThAMCbaiZ3bu2qm6x4VHmWo9SCmZPTBR37Jy842cyg2WBE76Bsy9b1qWrXyrTTvHEN5fZxXhmnyzTpkwHu",
  "key39": "5X6HA1J1iiGKeB56banMSQB6UVYVBP8n9oDUmR7T3G4huysdFp4UPpHA9SZZNH2baKxiiUUpMkSXd5ZcTABTb92G",
  "key40": "2xEAbtA6UDftd7aCpwcUFGGvJTt9nb8v24owaiMRY4javQ1S9pxAJnjiSjNssP3NnhMiJ4A8UEWTByLmyo681q8G",
  "key41": "3BJK3noNkAKzrQafuG2Q7bjPJQJJ8PHm9tEyhEGHwoQiijus3HgzG1sfKo7UH8DFqAZ7dmaibX1mDmccLwMiNLWo",
  "key42": "4p5wQAtRV7STJUQV4YWDwDB2mk1gZjexxDVH1Zjw1gyxSigs7SnfqCvZCBpvpKUQV2T4pr91VZQmdzzeGCpfiE5Z",
  "key43": "4AHAxZPRNB4UmWDy94AhenwFfx2qWcDiXcKbynNK8Q311yqgFrguM8WvHtQELnzPTna5LWTeXrWrLUWHkSFnVFfQ",
  "key44": "VQBBQZ1h4uJH8sR4c13ETTSQ597CxUDQ94o2Ht6ZbPtcuofafMbJ7e7ZidBur5dBbnSw8hvJsBWsSXoGrUQmmzh",
  "key45": "2qYyaYrRjhaYueVY1z6H8F2vySb4YGzvmUfWD3eBCFRpfz6Fycxhdaf8hUxEW6nPzWQEKwa3KURbJKAJrbs2XnuA",
  "key46": "3fyfx7nBapxgD1Ym4HdDpEm5hb7NDTsCM4TCPEP2vxPNPXWdheUVfAn9dHU8xYMchRzdCqmdxTqNQULKdNMXrZgP",
  "key47": "2cv3871LL7wsiSDwgG6NmSvkc11cBquuAfVDxC7RRK6fCVsErTmcAspDeomh51ks8996aFQNM8kp7a59wrdmM22R",
  "key48": "4vTPn7yUPk7BbM5SuJNgxjgDc4dZ9ezpidqZUf5pCVrr6QKf2YPUf3ctYX8AtyFv8sa88G5upW8AnzayyfVxyBiK",
  "key49": "4UYXoXuqhPxvhr9UeHKBE3QxQYUVxgnoiWbEvJ1FHEPAN1TQPZ9NLQoWoo5rAFcRzLJqCoTLKBHxyU6DF1NPubSS"
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
