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
    "4BNr7Cq3hHUVTvYDtNyaDLJrcWDMBwPAfhykS5skWDFLBcCXmG3d3yTCbGtQPKFrSJcCoMQCawNmf7ZVR8f8fZE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yAQSo4vjbyzxeNbvKn4bm8mPHcCdukxH6Cz86MKqPoMHVS3YHNsVJ1NX2v3mcNpUFLFVhx4ukBDRbqNTf6q2F5a",
  "key1": "5hhfnZkSksXiC81hgeX8d1WkZFaua6aXTBoAC4KkuiRZBbSLtWUYUe9g3sYuADjJLnKJezJY2SrGsN7FQThcNEW",
  "key2": "4MZD1DfQKpiEtRrdJy54NMnYU599hHGPiTnBWYYAUypMijgMDxRynjRpKiT1CFaFNmNrSsboTVA7j5y785SBoijB",
  "key3": "4pi3RE1YAfKhL51miAWUgBA92qUx2drstEeeSXoy2avra8pqACci5Kks8yUmhZzeqmu7gAiZPqsxviqLKbMjZ2aR",
  "key4": "32KCf1Nz9TNndGzkuaGNqzc3jWaLgTf56XMbDmYjjxWMaD4qjZmTz4yPBxjUwKFBTmxDum5kMvYPxQygLztrVGtd",
  "key5": "tHDgGHQgjREdaH6HsZuCdhhpGFeC6obD676PEFzXnFPKp9fYm7EkY52gAYvKGdHz9zoNsiheSxi91rEvUWtM9q7",
  "key6": "2yrxhSw9Qndq567FCxG8QADdrffRLpkPD7AjunirTdi1s4whWJWi8Cpgn7Bw6fEfF2E28uJaZPbfj1bKMhkuSHqE",
  "key7": "45SBSUkPL8jT1UUoVDEsZNsVfDx6j9nDkMZS7sjJfUNZmQpj2UpJbwrtztS4GhumuFaptBcMkhgBvXgTMFqAki2c",
  "key8": "2hiVAdSfPk8BqbxfkRHVFFtfcEfH4pmF7MukevT5jyvNTri5otzcV8S8C8ALt64FwZEsBc9fBnvE7tguVrHm7XDj",
  "key9": "4n2ZFDT2WkYjHgbrh4Wx7CjmGSwDUrStgGLXbUfXenVxZC5zYpS32FCZ6NuvVVEpbb97mUt1opEMTL95Xok1ytNu",
  "key10": "67D5fzuDuiJSfvCpMJNpYKkEjibF5ELLG4GodptFzZDqUfuvBdjmBQ2u6XQci26tk4eFhLQYMqScUx6b7YWyC7YL",
  "key11": "4SMWAehQGXW6wCXT7bQWaEosP6bgmssVYgZ7veG8kLZcubdrmQctcNHMStRuEjeNcZsyftQWy9Fa9mvWy94qvYaN",
  "key12": "2zCatPgNJ7gRik7vWQEwTKopqgzBcsHHNTTT8Ced8b7r4iYtw4q3kgmfGnYYNJAonQ5De2VmM3QXtnJrxePfRbiF",
  "key13": "5xiiAUyE6cog4mCA6YCKuKdPtk2jwLxAd6GiqPYngozv4eeXeLoCKHVy6Moh3Zg1E4SyeTnKfn19mbSKUUPwmHgZ",
  "key14": "49JMjsyotUY7W59FfMadibN2jaPEmQjtkdq5EekFqk1z8i5GCQEGZ2Zip1Ugbj4EbVz2B6vL8vgacLVDTqMXBjAq",
  "key15": "4WbiaDhwQFaKdncspLu4XWPwZxPZprE4h2PJKPZfV68S7mXQ4Y1sJ42Rto7XoQPm45j46qVMbQsXbQ2zSqYg5Zs9",
  "key16": "51Aq3nUKLgLMSNz2feNDrASdz4Go84PRseB8ktafhycejpgiGpu3GihSpfnZbavbY82KoGXzhGsvCa5jgp6L59HH",
  "key17": "3vpbv5HnQGsPCwLA4Eij41nAiUzPg5Ky4WbFzpXfpnQS3U7N7T6HMRWWrD8TiAPR4Q1xwMyDW5f789Hf9UtSe2St",
  "key18": "qzdAXBi6sdPnsjA4gZjswTtVzfuTK1KfmZVAg1EZqEDiY7Qcgu14oJTsKJMTM1VU8ZuncmizkHJNa8fMfjuFgAo",
  "key19": "3KF9XvYSeDDckE4HAx7vNJzBtPSexTvSGrjPDDtvUexT7DPDsGNQPZDEGY5ohnXgKwmGScnSgd8dDpdbVmavNDb2",
  "key20": "5Wvykd96n79WyTDstVXe6uENYard8YQUAshs1emsWSmKtEH4TXDdwuc83mzpKcgg1gsXrwfRNeywYDHrYxXEadjX",
  "key21": "62zMaB4JkY36LnqAnFCfXFv13LmtYgPTqMzCSVK81nDJvnEmJFDqZZ6Py82vZQbXv6SjHEPKJ67eDMGjaZcyw95L",
  "key22": "4m5RmQLFEsd2itZzwSTVzBzMpWDPtCJwU9nb3xbZS8QMQKo1VvB5pMJyRzMj6HHccymZENTm4gy7moSppUkvccuk",
  "key23": "2H1jZdKS3DBtCihAfgLLEysc6cM7piDfLzPCmRFYVgM5KAchmAYMQJJdZyzKBenc4LtHHaApiKs7yGkXvewZYsyt",
  "key24": "vr15t5RZoHdQXjPFFT4aRa6mb1FLBnKwgZ5N1MiDUwxZnevSWCW1SkKUCNqGd7LiNdjNq4gJ4F3fyvXaNKR77Fo",
  "key25": "5dA7aiBVTdQ9wE4xeXwcGfropmqtj2eP3jqUKGQ2NidvoAnzPW73koq7MGTDmTPp4Q8ahVSPy1eNbUJ5SZd8noGA",
  "key26": "YS1bYcxGTGKicA2KDfSF5smtF82efmEQjSuAf6zkRfKfXx76FK9X8gnBnvnngjfPez7rc3CruCSEEXNRT5eJJb7",
  "key27": "3MVEiLWCBhdRgC8o6xQb2T31T1YqdLRw4WnektE6MP5A6A9qoVdfXtcw7HuEqeYJ3crPYE7aCz7Xq5zu5VHZ46UV",
  "key28": "5f5WQMV82J69zmCrG6PnN9LuJX6ZBhNgh7PjQyzYDQ18Mi5NrR3NewpoUwqrcgHMMWUMyETGyfUXPL8ysJ7oqyC6",
  "key29": "qYLxNTpGys6gZGKr3KKUPsMEjoiiRKCFxURaQFaS1ELBuktvzuKDYnQFeLyXLNoCTFCRKKDdKPND91yaPATG1Wc",
  "key30": "4BnGPx1MLQfJZB7H65BGDXwZQ2zrxRsv7N6S1fkWdhmnyVkkFRJq1jLysFqB8NL7frPHChLhFbxF3xBXeZ54v8Ss",
  "key31": "uAzBTVcQzxSxm1Tcn5vhdFBcZpLAJFud2z5JYYMZh1LNjuVyzj34CrmmP2muBwWahcgTtM89svtdsdavjkuft5A",
  "key32": "644rLfDDaDrqhFiQLZpwFV5GFNhQWEcrSQ32LosAmC6y1TR1rfZFgGU2mdgUyV2BvZcggm4AtoQhdwJ7gFdTfJ7n",
  "key33": "2wehJqNaCoQkLUa5j3LcSkAJLPBRGwAsptavywNSe4GGLxMofsyi5hCaWyTfSLE9eq9YnEmA7y98pe2YGwhMB8by",
  "key34": "4oUZPkuoR9NeCN4Gke7vK2iyKUu7jaLehmVN8UJYMBaPt2bPxcraNy1y8oQ4WYwBzPLhS3JxEsWe6zUoeXA61MF",
  "key35": "3dx2yaz72v3E2oXdWiy3QRS9qdWr9UZ6MKGGH2zaPRF4Qu2XbCeXmqWitgz9obG8HM4TVmuEbnSzYcFHWEsSn1AD",
  "key36": "384ene5F1EP6Zk89jYg9j4JjCJGEAErvpCS1fFBR7g9ufKVohsHoq81AqaVL2wPngnfQWAiVn8XNUp2ePSPtmr5t",
  "key37": "5avSk3DXfqJ7cEypbzpu2spXM8YUbWUDV1xYPixtuDhEu5GmNe9VWYe71ZUJrGz4sYyXRyEesZSURW7tFujvz8oW",
  "key38": "S531ehESnD7KJXPr6XZDtWtRzozuhnttdko8jedaBYjLuGtiWkiuvVyxa8Etc2nMhJGURVQE1ZaN1ZzU4EM4m8g",
  "key39": "5P3BE8NT7YM3sJJENpUPz6gthsXYuzVNcqmZyJqP7CUBikbS8qrRFor2eMmE2jQhPRvxxW7Nr3YUq6d1vjTrSbLE",
  "key40": "3UbMAW3JFngoVkcM9cygnSmVoDRcfctTEcWjEJNyxFLTWi9YKm5jW2ebEeuUvVPADHBf2P34hxtG8q36NDSkwhmF",
  "key41": "3YMVJo8Q3s5q18Zg93RHpgFyv7Rvzvw1p7Bh8YZyRhNG3wg5hXHBeShxhsx9673VcTotKFeQesGsMMDo8vKjNpbt",
  "key42": "5e8vaEr7ffnL2YWcMGTsjffvJmrECkG18LJx4cQwMDP9dErRhTdb7zNRK6D7j8KPFbyU5itPTZMVQ53Gusa7PjdE"
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
