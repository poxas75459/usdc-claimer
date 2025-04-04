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
    "2kVx6u3PcCY7iEbd6gu7S7tcquc1VesyU2JurwJFXNr72aUtj6U9MdWjFHUfSYZ74Fd8RRkrw53JzFLdapX2XU79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jfkawx3Fy8rrPo212bSEy71NXTh2sckhrV2yLFD6XjaBEf3vinZTcwUWt4FNu5CHgtroTLaGErdhDsg5x2cpfDx",
  "key1": "3yEc6rr5iJrUuAZcPzmv1boFTnkRNZEySvgnweJ9jsDTdxryJvkBisaqtsuAbETgrPk5JsdzjHyH6oT8U2Jv4a9N",
  "key2": "2WzNeYyxAJqhMdSaD4Adf8t4YWH56QRmW1v6ctuQJbKwvSmmLidLYgUiGMRkc2EkEDJJLwsqVsCakn4qZDszfLRP",
  "key3": "tUQ3n3oDSXsiYKZ2fTQM98TMaKpCyt7dnXe2r9gXZEiQu3FpYA8Do9K9egH624c5LsKfj41q2oaYFXw98cqWsHp",
  "key4": "3z9hzfJ54xWwLf5iGAvcZCV75micSxh1qfwL1Hnk4Nd85NJ8xcZ9FjK53x9PdNhuj2nDimHn7hMVJz5Nf4iVS7Y1",
  "key5": "Qv3ZZsHTpDzjZFAo5bbGzAV2zDbjV9o1S9zSXHA3Pzc43K9FExyRJsVx2kaxMT2aAPjZWLQs9YA66PAseC6VKZk",
  "key6": "2t1XR7v2A2HL3mWvHaVkBamx5gKo2WgoY33kzVFk2ToEykM6SehV5ABgd2JF7bviYcmaNVDg3BgkCRCo1higUG8Z",
  "key7": "4DjkGvrARYniNM9T1kTyeU21cYs3AGU2UrLeLryrnrkVezsYGULr7RdhDV5VHNZjuLCChuaKZoN5JF7rSspsbrB",
  "key8": "5tAytFQ85a8qavifPf175oimi7swdvNCtCpUWYUYPJNGkfkXzfLCH5s8i5egcNu9hNi6utuSMMxNL7bzAmPAoFi6",
  "key9": "tToDDL3BHyqtdBa3ZRSgY4E38oNQrTbCy5XJX37nDBgpUtSyH6oyN4aCniNMm4ABYqwfjchaU2cXEE8jsf5NP3c",
  "key10": "2ai5rHkCf4BaihXHaLVvyFxktnLYEbDrwVVB4pS5YsWEnUYshHccPEgx6Br4pg4f3CrGZycftdhDvqEFMSbrpk79",
  "key11": "b5ujGC5i4yN2LqowoEVJyqVTZ2SDznjy12f3mBFGfftQDL4ELgjZUTmaHaU2hpREapMWtHkAJwogWrJ9maEKuBZ",
  "key12": "PoXbZm2vpLq6QFhHzX1Ukb9UREJnYcef157aSzJ7x5itXeiFVpfcwZ9dgfNo868EJ7izzSjhr5f39xx1WFF4pvp",
  "key13": "29asQEQ1fmoB8m58Aqem8cVsyoPG6miuJqp9QXMTba78U6YSRuxV9t7ftFWPdYuNKBbtXngLeVL9Ej3RcnojSrat",
  "key14": "4G7zM2qPdSNLMguEzufcuvJ9vP94TL6Bx7kcCwYofYYdGwFtYpt7F2WYmoAz85b4XmxJwf879MxwfbuocXfNPqMH",
  "key15": "rH5khfeaqBDQBRh3nrQbkLPtpJFBTWXKgx9vV23GAsCHp7bUabSDJgL2p8ZQ8YtsUPw9rfro2Qwd1gAYsscpsHe",
  "key16": "5VvZMn2yNrcHq5sUAPWXZmscrx8QSiFKQTHRDWMtkwmufShChS5wRanRMcMoyZtsJQMwgpH2xhmjaXeQ4nk2Bo5y",
  "key17": "5hEXknM8mTeobsS6GzQJnZuQ1mBRCxbuGDxDagVG3KQHBabGqzNJssFiXEtzdv6V3ka6ahFxSD7a6isvDCHwGGC6",
  "key18": "5i8vAti1vYxdetFCBYyFNgae8oNudXcFDdJuvk8XqxPqELiG54koqiBddye6JHm3CyAXBfPpBm6Cx4mS6LTLVnPC",
  "key19": "4ahqXAV5QYfhr1hU5t2Uime1xZF9LnY1J9QkuSrXKJ4ttvubDqHxpLkQDJDHuJZ6jsSrudCdVeNTXfCzjrvSAjpn",
  "key20": "3MjEcdgVvbnUXxQUaPzHv9SvWoLmHwzCNm839SavwEpV8kMNmgbysz5KTauCB9uMjZ7wGd6BNkzn8CWAYyHbr36H",
  "key21": "4P2pf9JF835F4wPDD44rojzEmhEJGsKVnVVhZGd51GLcUW2iToUDytN2qHcBmHcqV9S6rZpScigHYXXdxE86R1Pn",
  "key22": "2g3HE19FyEhEZ6D2Fgcz216umCvLsJus7mkSbRfpTHy1yjyzUb32t5hvcK117EM4RNQs9ruSf6cicQiuxQrZmpjW",
  "key23": "c9aNsHBwLuVTF383AYLRnkkA2i4VzfnY3QsVuf6rrNoZQ3n9ik7KBMtn3smSYimaPVDAncw8tVPsGSHXbWNnmkq",
  "key24": "wvXGnHZ4U5NgGBWdvMBMT2Se3U8XuWM9q21wD2Acxw5DNsKQxaJeDYmYWXYWT5eM5kn5YXE6Fx133y2aLCSogQD",
  "key25": "3qLKJcX9MY5iN9mueFQMeVVfeFhvzT8uxXN3dcXKkkVYqiZysdNppHodMkZrYgvmrsKzd9S3xVLGFeZ8YLUSvmgP",
  "key26": "62Soj6JjuyjYYUwG65bDX1Uy9nHn3ELeFPUorWmHBW5Zm3DzPsN83B4sR9ycDKmmubxo7XnEKm5MU51XHipjbVL3",
  "key27": "39LLg4mGDn6csXe6zjyZa8DZo2Y6hprqSfHfJwL8gqgcMdSeTLdc8jTJgPYdN97qQNrFApTdQbJziB8XSAGcaFfR",
  "key28": "5abdsVTdQSJ4ZQJnehqnQKtHUREeBCE6dk35c1o6WJjHVZWzbUpoCHpKfcgWhE66ppCCGhujTxFULVxKjWUZZXoQ",
  "key29": "2TDEzXV8Em8xJ4eHsZcT7iknE3XCd4BXwhrQ7qyaBLJCHaLPvEJJcJia6NJpskNuDfPJswMeLiQqsqMsuAUjbAnx",
  "key30": "xADBfYBKjbtBCSGshGmsENbeDH2J8KaYPxFPPtnoFZeEgPTxWvJFrpTUiT6zDQ3UhnfBp72CUdDQzdsmXCBipwg",
  "key31": "2nWQuGB9W3XENKDYVKhoagEZmwd44uEV6hBAD8UajmSge46nFkqz29L7i9P1Ctjo5FoCK1prPQLzZ5XCRskTcuYA",
  "key32": "Ses452HW9J2E9n3Bm9urpWd2Wp5rPiETLo2JTH9eeeTBPDPM66kQ1s7Amtew7QCbixnzeX9E8MxJjrXiXCYCSKX",
  "key33": "2m4gCXSLL8emLqGyRrtKQAhVUWdbaSDVaxqtNkeDGCziCj2yLKJrzbzXa3QYVUP47KdksfppTBZQu241BHwG3d2H",
  "key34": "XZyRfWy3zNa8AYtMVkypKrMYajzuTsCKnrcSwTtB8G4RNEBBbzybkhE6La4Y5AfzX7cMiq7XtPN1gARiscvzwmi",
  "key35": "5FuW8MSjydaUMxK2T6nTKUz9uEdSFACPdrGBzQDDC3UqH6zH5Y3ak5XpovxuoG7M9yyZcQiPARo8xJPFUiGUKbF8",
  "key36": "JpN9UP5vNEJLtn9v7kwWBh6BD7VSiiXiBT1AdF9h3T7jJMWSPxk9cAFwhDRYMCGhN5DXe8w3TDABL24ZN8GUcV7",
  "key37": "XPvtPDdoJ56gss5Ttq5eNw7fBXLsPpRtm61VWYCw1r7FVYYa2CyjBB8HHBum3Pe8SLq8oSEh4GcjndDvVhNU3K4",
  "key38": "46D4VYKsSJ6DS1VAGtUt3jNH6tDXLPZiyv56poMoTHT5sqVqPCPhMwPQ8zMywfCrfmZGofKmn6Crzd37AdwaMdzv",
  "key39": "5XHHkgedKzsZ6e37ShwFW5mjNhLGTZHs9ti2kasb3zJnjKRrFqBr1dHg8WXgPnxU1ZKKy9JeCQvN9U8VEksHYvNr",
  "key40": "4Wx7CyVarihnvaRcoMBCNYafhmM1UTjEAdiCCq5BSp177wADxGRLQ9S4oDb1Wz3sbn9BpfcEUj7iDaa45qJ5K7Nj",
  "key41": "5pkTFYzpUXz89Qg6umJhkrkMvn74DsetJuofVrnWeNV9BfEhxCgpsWM6j8hZVgkv2gRoz5F8jTGUvmMPx6hnV4XW",
  "key42": "5XevBCMRJGLKo8iCjn2eKL9AtAdTAiMGgQ24yuTYt9tfN2z4anKJZiP9R17PmzXe5883wB4UvENDDiRDfUPVzo8o",
  "key43": "3ynn7X6asd8VdvTEJVYid6n7DSUfdWfwWCXXVcQQeyGRUKVYjyiSjaqaVHE2RZTJhVMQVitx79zLdGZGLeZ9nrRQ",
  "key44": "25uiVLH9yTkkerKzF9Up2inaPVqL46ejLtryPBSns3JWoJ2tiZXjHHSi9Y2DdGsWFnLvK9K26GdeZhKfWnLG3sjR",
  "key45": "2uW1tUoTWtpLkcsrwfEtN84zbGuHF9hS9mJCXM11oytxfp5PoN9Re4jpAiFbeK59nfNnimJTwfzmFXWp5qKhSQ7T",
  "key46": "3rYnShQM4QDVTbqgVVHwdHH8ufiaoQEKQ7fFDwXhuja8pqbhdqBvHkfKSWLRaPXYAwNE7XAvMHjtgSw1iXgRTACx",
  "key47": "3xF7xvAvaTW8aRjZjxrEhvTjsTSV8gwpzdV7z3r2TxKGL4wKVvqxyg8wBTzpnpc4GoXRNXe1bpS8LUzM41N2PrKr"
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
