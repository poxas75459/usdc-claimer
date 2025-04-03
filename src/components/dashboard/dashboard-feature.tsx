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
    "4caK6DiKmhktq7N3WDtURENwA3zztRu7mEQHuJ6zpskuhGY8Qjd58cp6XdKCtXhAii2u8xzzkMbd8nyCiZoNWS8Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23ppV7GPXriXDinN8jUWmzGYcH8xjAbdfA3GEmhpwBn1X1mDa2esS4ajnZKghvvWi2Qnt9Vp4amRYKxfjD9Ci4DY",
  "key1": "31rcAJS3Un4QJCHpSktDHjejFahJyUnRmdeKLMdwRxaXEZojc6zYSjVnvmJ66R9811QjYPdK2hb66VwQkKxR2id6",
  "key2": "5v26qZzea2Pb86TZzqQHMWUMmjmDmwegs2p4dhXsrRPCjCsn6xxQt6DesUpXK5hCHgJnsVCK9QW83km8DTqtG9Ee",
  "key3": "4TrUxFArJbdRUF9K91PtGdVmMw7NU5L8nzE9hJc2d2noXS4feJhjmQ3KAe6gviXRMVaRcKhKcqkBuaZxturFywSs",
  "key4": "3bkSaChAQiyhJpqsRCWxC9Sy82TE8n1V3uB3UrsLEAaCnfHzifBtjrtpRY2Xqz6aVq2Wj6zeUjnF6xFKVTWQT4Qo",
  "key5": "P3zAgiKGRZzbt55fBeJbNY2SLqvtnCV4w3nyiWxjWpJe2j3w4GAT5ezAibD9vd8NCBV8VKhq5AtkdvL1LagdDps",
  "key6": "26DZbc3JR8moPtyg3ySKRar5wWDE1cRjBAG8pPAQ9YPaC3iSDfr492Gg9JL3u2J9AvTvfa2mvoxYjnfPLrwi2HHC",
  "key7": "2XXQDwM9msadLxVjziy2XGsqy6z9ewioAuZ6zjQ2cMvwHgXiQWmghGdRGWJooVk7FC3zobFfToeb9cFASoLDWnf2",
  "key8": "9nTpfiEw5oZAejQrFvNSFK74AA9Djz5DQSKFJE8iV8AW4bgpYMQE8TVH6HEB1fHTDVw4Bu1K2e3ujCxwoxpG3tS",
  "key9": "561Vwp4mLNPLqShbEzYwfRT35JLHwXQ1ingcYHZpvvmZQRLopdaeJcyng5gDCTBcsT1MTKHsSAxSV7EwD5uH3scz",
  "key10": "34fPn3Jv2h5wvzJiPtgcr5yZLskm8rwBPAzSKhGhiGQHYwXXic8VArrugFpJrgqmnMZxwem5959DNXDhmtzFQczg",
  "key11": "4TxfdSU9TiAsf498UaTr3zLv6GCN6SybBNYY3xVJ7MEw3qcLDfpAVZ2z9maaiz3buyXeXbvSJeKoimo5qVtQi6xY",
  "key12": "5wkExBYWMJDGfzTpK2Uqebf5F32WmSs3rU53VFYwWzoorkGjAXhXXMobj2Py6PYgh7e49BTyZwbsoB6ito19bYvu",
  "key13": "JN7PqY78UYTtLjfDkcV5mM1WWCuB9o7DkoVGZzqmdQ5yniqBLsi77L3ShXMiqPjfe4JrpgphCk7q4ZHqxrPZ4wX",
  "key14": "4jaa6qKBev4nUAWdUWzpzMxAqsYtomMRkoekj8oyyjpPEigGhPM1GCCDZkQxc4jwgBGqwQyAfyyRCCgYeYZjkhJv",
  "key15": "WVsYBxa5dwfBYDMJRDRsSeVZMonJj99kWP2iozR2cZpzdxfZLmF8bCs7yoPahv6zxtBhS7fNQ5NzR3Wd9skHN9c",
  "key16": "jcRVxWcbD4rb6GTJrNkVDrijLCgQCCDzGkosZKFB3w6PHMXtij2x3ijMiYsUc9b8nViW5kU1aaZApi6xWjXso8r",
  "key17": "5Msn5JtUzAFtxf7MS7s8oWZ6YLdUqSj4VbxgZcwYCjtSyxFBY6zp3zMah2gmNYzLmMZkq45fCgk5FWnvwzHNX4Xv",
  "key18": "63Fjew3vxiHPKh8ha1VcMcEhKfuqskSAUZvMAu2FkvZ5DBGgtHaBzZaFQTMZX5he997y9pocCimw13um3Mv5QeWX",
  "key19": "5k4Ee9DQpDqZCkKqp29C1KBSYp96jxg1kY2R7rqE7WCcY3RTHen3RzPDxbaL5JMVHjngKiaSxSLw7xt5UTRm8umG",
  "key20": "ymM85tdkuoGgXAGpwDmfMmCRqCcbeqgadL8ETpoJGScSjqDfwHZJSgK5KEs3Dz1sxYpW7VK2v3PSrkRqqJQmpqV",
  "key21": "4rR7dgYVJ6uSGttPZMoa33EFFkB1g9UfyNRBmLi2EALog58L72p7QDMpaTXmQV3PUhpQBat7LdChQWYGY4ZuY1Qm",
  "key22": "4AvkF4BxyPpL7BXM5EWPLBRyJgvTvtvjJq7gDp8Z1CwovJKPAyALVqXS7rQU5zuSY1zMEikMByAxb2GDLRr8ibWT",
  "key23": "2sq3ZjgUQqg2T6J7Qpa2mE3fgbBg7xmXCNpSZKm8fKebvpAQeLiV3tGmRSkMcUM3Zz99at8PqoNGa2TLWB8QLRth",
  "key24": "4yKm9hMdH1ySEu7PcqrcBbSdmBt8pciNGYW9JkzomG6YxG4A78jg6fCRpjnZczX6tjVkwJg996tgN9ex2nnrKSPx",
  "key25": "3V8iwyyk9vZ4BkZGwhd5HPVpSvLhiaJHFB3KSiP9zat3aDhG2C19UWrZnfejojrU9kR28QhtzpbYAGN8e1uQqqYw",
  "key26": "5xoJnVhxN2EQub37DtktdQgNe7Nf8YBk7vVmhFfdZDTWNSuHy4rnvfPjYPDAv9QHGMsJNNX9xq11V1qZ1LMjqftm",
  "key27": "3RtXqgkFV7PAj4zavdJZn7sCAZVJWa76v4JvXkQK7fyJaLZbG376pHquRkz5vxmBoQ1mstD2ijEkLW1pKwGAQPn4",
  "key28": "4E5txCboQ16BkEiAziidnzE1PZAkcsUsP2icpFx5SbwQxpJoztXG5mfhmPZt6zy7jHrDDBLNcix9jNotX5pHatuK",
  "key29": "4P5muaLe3pDPg94U7WG8guw6rikk8SGaP3c6268zBF7aW3CDPuRVocdAx9XHDeeBYYHdZwCf98yDQxvQBvBTXnMw",
  "key30": "2n4v3q6f8LP1J6FFqVd3rSx45CYtiVk5ENRF2AB1ZFygZfow9mbW6B9GJtkcNDP3NgV8aF6F976Dp2FPSgwzCWHF",
  "key31": "4DP4kxq3gTZA74JDxrMKTcDxdQH4aHhY9G94V1WzgsxeM2PcqhMaznT2Y5xKCJafThQteFJScUAvw83TocYh2GH",
  "key32": "3Ynqs3ZAqvpERMFfqQVi5rBNK6FdWYfGYJgnd7LSV3nxqdCy5sVY4nZjcmWFuxr3QYiEimyCNyqFogvkhESaDV64",
  "key33": "66A4vRtFypCo6VrwLJdzjeXgjHZJnXT2Lj9ED1WSjdcck4YL9BPFJzFqpWfDtYC4MWz5KehwUwP7X22c9dLgCXBH",
  "key34": "3Piis7wE9U2RbadN8igHM9qKudXrzJ7sYY6LLQDfbEDNXHYRcxffcJ4uPZUDbpRbzCQ1EHYxHpSbfdVJs6BUmyoy",
  "key35": "3z7ei2ixD77JXjkV43kWJT3P4CPnqiwbq9wmkG8rRCaSgZVwYdn1ew27wn7eWkyzZ5YokjMT2ogP3GNbPkpyrc9k",
  "key36": "2DXM5XoZWdXEufYaHkagEKBf3NrCy8EMEynSoSHpuoLVMwPqhrLMPnoUicoSGta1jz14JWz6WjkqZiXX9Z8nwbPK",
  "key37": "3dLA8DxQP55hZeDHB2VwoHdGXJP1Qpfy8oyyiu7wwmLjKxHzGArUYjngBUUpfiaT25wXqZXVVjUmHcEkHSzS79KG",
  "key38": "4EtZvkoU4F25QBBgnpwcNBHPXwfUNuPRpSV9aKm556kUoXmmLJM2Z4T5Fa8U3BDKNhSNHjGWPFDAqPaF5G2zTfY1",
  "key39": "3sW8aPnqmKu9XzBvdQcnCpxvDEFmkNtaogtw9ZASdGq7wXPxJK7Zs8AMDcDG6h21mMFbyu4WwRUHdRzxtuPKZ89T",
  "key40": "2MS1HbzhTuqGq6W9wHAEkKA4cgyj1yEjPN3vGo5Gm5j8NDLwp5mFLpFkyoJMkSdLyUerm8SDwFvQycBFdRbFoT8t",
  "key41": "5t2wgfoGfXaTfzZ3LGiTFt8S51QZkQrxJP1qtqRPphYkA8kaxAXRAF4qzz2i8NATULx8e5TZU4Da1rvCUNjAqrJF",
  "key42": "5VVLUY9J2UFvFNJFnuBA378Rpfv7ksePBoXUyXpFPLmnXafsAwVSWoryEjmKCaH6hVgfQTkWFGmNkW6Bkskw5eu5",
  "key43": "46y8PJ7Y7LtE9Vwa1ez9EJr7eP2rYtb6cg2GjQXGgubYqt2JJ679gpWXR3ar5qnkZnmQMx2GR4xBWHaSra7gKYfi",
  "key44": "24uqzFQDjy6jTpKiwNWfGZaJQeRTrDkkuPomyjKk6TocxiYy5ra26xXvzKtUQqGCGXgSnqN66aD2wJf9xNpU89go",
  "key45": "2Ca74f4kYxTQbJ8QU9L1uEnqFrmha56ratkvXNL6jmhQpnQ5s5vqDTrtcJcbutaaxXN8KZi6TpooG79kMpDmnAn3",
  "key46": "1TmpYr5n5P4mDCotgYgaG77BZp6GV5PBGbH4kXmsxFMBKqsKBJG3sdJRLc3yZTjqdvk9rv9YH8smxWwMukicHz8",
  "key47": "2GKjeYygRbfYkBpiR2qmUkQHHWKaArE1uGMdCFnWzVHrYjKo7BSF29AVV4tnmc9oSKeU7EmphgiqbaujabpdWaLg",
  "key48": "5MGLquJrkho39qUNCgjsrFfB7paCGSBWvUcrLWzbr5SshNhBqqAzwYPZ2U4dbmgLVF3qMrXxnNzxyNzJBHX4V1Pw"
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
