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
    "5m6fDiHXTJTGFPDTZFquYRDTtfNKmDAApjudxyXE7HKTWEBBd7UNrmLGHdT2sjtGykc31cXacZSwR85VyG8nWM48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ehxa9swzArq8DPGDFXgEoWWFe63sgsrDcWtRjfyPXJqNCqwxVc5BT9BBV8F6aN3J7fqqeKt4xJGR4E2LodHEN8u",
  "key1": "25kDbVyjRQUFFodzKEp3PUFG8cKNPhq1bpKXGp4uXsVUb38feMTJLriFiK2GtqxgVE7fJL8we2ABbVjn5akGVmNV",
  "key2": "21k9XmzeeHjhLwQcShjMFsUmRpHm9DZrAj5rnD2Ue8QeQcLZjR6TLA83sVjV419WmHkWFge2tJ8TNHKssmBh1Wu9",
  "key3": "2N3w5zXrCxQFds4KH9CcXWtdAnoB4tcWJrrdMcPdrPADpaXJShked3CDhwmRkPZm4tdQnwdGYvn5mhJ3K7mSoN5R",
  "key4": "4kJng8Z24B7V9ufRasqo3EJoxYD1FNkXpSXTDPug3WVduWS3P32CAiZ2AEL64YqXZasQykbWcJJynY4uRewDRZ45",
  "key5": "3ig1NPCNGbDu1h4r8mCodGbg5wtmMJMre6SsTStoRV2VQRcLuwqCXDdu95qQdjDM6omtanBcvsg9LWD1uamvGDwY",
  "key6": "2QYnfADi9cb36i84xQMZiZSukJw7FNqwEoHGxkF6H7JDLL2bAbyLwpMY71VDzd56gHavje5nZiz3RnXRTqGgWaze",
  "key7": "3Mo4WntyDEqeWY7wDm5ShKqzGXskq3k9hfHL2bsv3LgEiuagexCqjXmqXtekiNuWbF64toWDsJ9h5zsH8oCZQ4d7",
  "key8": "WAWmca3WJtUfPQUm6hjMxDcgjsbquibtP1wDo2ovNpVpce6Sn66QPJFZbZAatqkCM3sUnHCU6VA1Vw9FnL8wnWQ",
  "key9": "jmoHAcVZJhAYEY5yuXF2BUFrPc2Zx559HvCVEm7yuW2FcTmUgkDMsga9U82rNanDTL6oT4mnB1LiJgbbRwUMLLD",
  "key10": "3FELiH2A876VaCY9qc4rpVaoZodGPr1nHXvMqb5L6QVMVxGjAjsqA1Eg2SWrakD1qKo5WTUaz1b1dKSSpJbt6yqz",
  "key11": "2urUwrT6zPzo3XFqJ4nvp1wqLDQ8vchCU8iw3YFo85KyDqHbwsK3JFSs2q1bFZKPmjnHt1z8cveC9Y1M9xtqAvoM",
  "key12": "GohMkF8VkpFemNyunX3UF8uzvCffzPnbCg4CCdYHVDT118MdSLkKn1XYJ4qAnU8GEJw9MhtXUYyjddaAfsNpFQS",
  "key13": "2P33wFPWFh4b49b7wf5skw56vMamyFrnDrmq4CcL878FqQbh2FACi13xqqxBndp5Xmu4RL2DwRk4YAdfd9x5L9qc",
  "key14": "2JSW8nNEX4goDvZqfxGBwHxaJ6VXV6WU2iiG2PjyHR9ySayqG85p539G4jPSyEsZzLF35FG117vEANShMBMBETTu",
  "key15": "67aT7FjWLDZVqXZrR9geM27KuUY1FKZaLBV8rs2pfGLHd12etJsoDJ5mTwzJTuyvjvk82SPJqVc1c2GzVK6fmYGf",
  "key16": "o1SaJkdmBc1SVbyDLRD7VM1Fb3rgJsZrVzKXi72WgxR2YxEevc4AH2gbdrLLY4NmGDdBPicH9GyTFGqBZXNfS3t",
  "key17": "2AeenWFiYfCY35dMsDTNGvWjJoJHrCbVoR5k9sBduPPKsYP5NnkoRwLk9ox4vVcBjgbdYtNG7sc7HnzYVHHcwgUX",
  "key18": "2pi6Dx1ScWRYPpFfiZNFKRqUhWRjXAFmgk1Tmv7GLsgBQgS6pgsCs5VPkfdjZ4BgpqukURdsjuUmgUDLr2M5awvW",
  "key19": "5wKG2Vz1gJMFwnAeZWnTw2D1YzcmfCBTCcufco2d1EUcsgekLLh7j5iVyheVzwPsPgFQAtBUum3n3nDR7sTAgBWt",
  "key20": "3CA2baaZ2yuvxrgJi7wtGHZf1AtPUnwXMeTQQaZzehE7EWxyFE9aJWAZ8g8SUSZWt1PfL12wiBoytjh1VBDfx9Db",
  "key21": "3U9r1rAej7UR2jAWf1Tpn1GtkJDCM6BxobZSC3MYrZfmp8JTzqhwLDgrKQafefStzwamU9MYqU8ivRKoPH7UhA3s",
  "key22": "2ZJjdVgCEFyuzYvbCyiAiLKqgWxUv7o291CY8eoT2tWVXzX59LRMdgbuArh9YGXzepKd4QSZpCERSxHozxp1G5Zi",
  "key23": "3wheyY1i8dBFXXfj7Rqf58G5fnub15wj6VKhkuXhNhehX2mjWN65f7KzCeDH9wi55VjzxAUj5DpP45shzZFiYeoK",
  "key24": "2sCSWduzMoazMWNbCPfhcFhE24Xw9AaCNQbrFmDqYfnGy11z5xra3TE8WLA1LkRsqPRYwsrDKnfJXZ91ZWEYwadL",
  "key25": "3phgCRRkBxLgZGrmyFNhLM8FXT8MRoDyh9L4JyaGdikhvJUvAe66RQSs5Wbu1eEzyWQV4jebmQpe3pg8Kmp9X6eg",
  "key26": "2UaRuCk8WqzBYY9VRhBXFneSERqarZsoydNaeRbuSJpAZrhfa2GibubrcS6p7RvndLFZKNaVHCXkS2mVx4eNKc5Y",
  "key27": "5vP3PZXoa5A4iyP8WricCjizyXiUNDSGuJNYpVpZrodz2jYte8UieU4rdFyd5cVU15cMpa1g8rbrJ62sK5pEZPwm",
  "key28": "2xERcWQRVtR8zFEGDaVGfzpfytaY1diniNsJWCFw1pfA24gHtZz51vegHY3E66yaKBFntAdCiTkwFnuxNXW8qGnY",
  "key29": "uwFrDJ4Zkneog6PNx1n1D9vbMx3Q6Tsp76sxem5MVe6HVENGjsigwTJV56CNy1NpbbscuSJj5D4DnhbAP7sKCta",
  "key30": "2uonZRbLShXB19Yht47vRyErF1SJJoQYcbGyYmAtW9zBht6oguH6QV4kM5c8h2oA46sHPueAJG8RbsWiFZpuQJDe",
  "key31": "3pc31AyFqwvzHmgE9wyMQ9izBDPTtGT5zxnDVkzqZiKPCoZwgDkbknKSzkfSu82DijTgKHkzBsnVdYYRGjCnSdqe",
  "key32": "64RS2WznqAZx39NVMWJmkezbp8ehmp4FUHxf7aT94PEfR5YMH4M7XMWsP6qwyhfsUewxYQ7ALJiPf21tsqKG7dnZ",
  "key33": "423YhbozU2xc18PxrnJDz32pTgsdp5LEyudWaiD7UihcUgwXCnaFBjbkFh2NrgyZWFHxMXrDHWZFmVCbYoomRUt6",
  "key34": "3YeyKuErJPRGWCaTKwBSoK5AboFta9RtoxtWdTjq3MXiFQGnr5FYuLSVCBjLCmuuaVwhYNrXtbMDVenaHExcPbTo"
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
