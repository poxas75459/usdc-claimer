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
    "3EmyTWnNPzZ9hL7va8AhDwFbafQieKCKgw5ruSJXXxH1BhYbf87yhfGNkWp6G6JwNHP79ZboysPxbXxKGqNHyh1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uwkp5ZAhgg8qN62j4xRBTpUs1YoCh5ce9u8TXTabhHJSc4WbeUtUfSUf2SoxwCCLXX9tT3i7ia9JELNDgKXS3tY",
  "key1": "2bYQnoTfcCboCEsoSSQkzwYELi7NYLWShSCwVUSo93iHvF9Nwr8JxQ86MyBLqWfBmJ1aAw2BDu4Keu4EsrqjhjNj",
  "key2": "2hUPQRPdXwRr3kFVEAsv1CCdLxZPkSgNj74783XqKF9pSNnwXzKaE6nkb2ufYM6NCBRo3enVBuZoNBZx1dWyMdKv",
  "key3": "EhBHytdwJ8wu4DJhAeWr8fqkXRho3YWwxjr9tbhGhPefvNXqVqD3Sm89SCtFVAXmAKqQuHhsuFioWMmUKW527BE",
  "key4": "49ywHA9hxjCRvwKRqNQbwSbVtuQY3WnPgpFSrr9ProwSydS5LN69Nc8FJMUgGSVzSpFPEh6uh2m8xt14oSJJQn1L",
  "key5": "5YyA6mxeFNETRmWLSPA69Z97UvdCYbYbH4WBbYsd4PhV65KKLqk3dnhkSszVx7Y8Yok4gD6pDQLEFLA7cjYfJPT",
  "key6": "4gSvq5MY59LR4FbdzbviWnfASJ4b4b6UvEbhMV3JxbVcLa8decoKDET92TqAvJgHmCYoWjXZU7mGkMTavgCrAHhd",
  "key7": "yH7oKUt3MAehQhzczFaPLf8qKqEyGbZnHujTfZ9ypH5ogdQangKJZkd8VXdTzWLNjnkQZZw5kAcRgjLafpCXLvU",
  "key8": "uPpHjHjuzzS6mZhNe3tC6rBd4X1t82ecVWjpShk9MLGo5C9qrEpYf3oLFAgTBC79tRQFqxXCay4Swxp9mLZxvAd",
  "key9": "2wr9dzTnyakPAfRLkiRB4X1VivmqFLuF9d2jVTg7zs15JWN1bDT9mfQGkTXgcGmikKPdcMe22yuF8nWDGkDeJZtq",
  "key10": "NbPZPWbv7Fs7jCM6RVQgZR1iBVtzXykMuQEe6k3VaF498ihxXwZaqF53cbBvWTXB2aX4JAh548PzhVMx53g9ZnS",
  "key11": "4aL1EocGqhRteiSaetqGQKuL8wMq7VYdF1f5Kzcw8G4B1EMmcce45rQRTVpAwg35G8yMX4j7JCX7BCuNYC6Y2Gud",
  "key12": "557jLvLRMWCUs3m9g2Qk3riPLj4C8W4hUaFmmprWZoMLVUQ3yBNVXdNCvPV8C9JekRuzjrfkE1ysa93evbRCZiUt",
  "key13": "3RpGDCMGPyGEMZ4j4pA2w1LPbdEZHPsdi3fiXKyg3ttiwzpagGxZ1M7pnZmjogPMdwRh7AqSe5jk8yKExW7djbbs",
  "key14": "63GymGcEgidwjQqr5zh6aBQafW3BsQNyVU4iDagUS3ikPBUNmDDhbzsSSK7c6R9DbxN8nGNnVJwK8nbU46YPepiF",
  "key15": "32Gfeemwoa9FNp12zhiDfCNqEMTkCX6Bjk9L1Dy49FvzBddeNr28nDEDEqA8hsu3SfNUXere7uLQjqHiFe1NwttH",
  "key16": "4HR6hfWC5FbaP4uCDCM6VXbmeUtgnLjYia1GLQZXx5YnfLvKcxoT4tqKBiajxxnpojtaSM5NyqjsZ8bue4mYv8jM",
  "key17": "znT8p4M5YkbnCXpHRXE2hhp69pGoBYiZxHabxzqCeHwbCYDzJEK9EeneiAQyrHsDf8tNvSkUKsz2ykj5RuhfRG8",
  "key18": "5XSdQAibEgDdqKAMv21JkJBhHtMQ1SU9npBUtvEmsSmG68NdgbJxrCGfgNWg1yyZcHRQWspBFC4oYhzhbXSU9gSb",
  "key19": "44vkxcZKcAymmoXEwMTU38XoxthNHv1xPCUhsm4Y3X9v7pvLNSXZBLZ688NJhwNHu3ZryDfUh56rb589ZKXdFz1X",
  "key20": "3AM6Tzzw3S4PdNyK3aSPKUDzY3uUDLniVzzqyVB81VkdrH1mvUqebZEJkW5KFCExPVJsabfboi3DBhszbEPyZ43w",
  "key21": "5h5FW5719ivBtHo7bqDDSJUkGWUtTM6Nnca6LScUT19ibFcR6AfPCGSmYgJzFG9D1sRj8r2oLvNekGjQZaocb2Lv",
  "key22": "2dx6nUxg62kq2xQrfMB9NdgiF99erMz24VWsgrpTeJvLmTr7DjKzhoj84hkAVbymrFoW2AXqGmaPVbJLcJNx1pRX",
  "key23": "2SVC7QFhNQkC7dqaeCFUgSRbDtBX5KRbm22t54EnP26kRRhzYGf69D627JvD8aYBAAg289zFDPfKdYChujeFQEZF",
  "key24": "2S4humSFeZZ29PPcaKiJRQLq8zF2rSEiX4hAVFN4H9otqnMy11ftETb1FS5fapHtFTHe6cHVANtABSzxvdfsUfGR",
  "key25": "4v7BjhpR9Fag7ncA9dkzrEjkt6dizs6TKyywMDqxstiTuUReadfdandixvWtgYK8Hapb7jEAt9REAZnEYV5nruna",
  "key26": "3tYvbcvoiaBxTkKg7tUBp6Ldk4Bqfm3MVdoyBotpHPJD9KZmcsu42FWgzKFBP45NyNwqiNqPMFBYRmv1NWgzcaAh",
  "key27": "5gEMDky2peU7FXwBaA16NvbkneU7DxbLNYghZH2mrDfz6swELLpq4TNopaYUV52cLKsk3w6iB6mTDrXSJa2dW3yM",
  "key28": "383FHDD18a3U7f8dsLGWRzNpdSXThgBSgDZcR95AYUXXFRyDmexfXoPhLEYGymx2t4XG4mB2rsZFWPNo4LTMAdV3",
  "key29": "3KtnX3nL2YkVbbAoQp5SSDhcXn7ydt2uFcupdDZYjt97hvSAcjkTRkYfRH4YWbgndajPmH9uEocunFHwJdSRE55a",
  "key30": "2rFqXomHHiFVCYTiVKMSaZMn8YSgpPhqBJ6dmJsqrsovf9HknqiF26M8yweWWVsY3jHxsmMhTFHK5AikJggSKKwF",
  "key31": "2ex9zsAyaexdVu6PpKdVLEEhhZ2f1QYbCri4aSLjEsSKwJ6PVziTky6eUngBLStqXPVZgrmMbpP85moWpAtH7tM5",
  "key32": "3haJEuecVeyUBVmyhtZR94QmHUU9iVfLdYZts1aw6mhHPsw98bLhgi2bMnyvHhNswBapMqWNRPAEib3WM7mduXYZ",
  "key33": "5btPEWnMLHQVJSkGKriob1YUpayLuVRyXgNMw29EfYapLz3cQnvaAnS7b9r1kogCeEKQuT9Jotg7w4zwmpFqp6S1",
  "key34": "2pSB2yQQAVku5t9Jv5v1GzD595BkAGTuckr4JXqvAGsLSHkae2dQEZH8HwB66hDgac8yf59iK6o94udhK4DHxMZu",
  "key35": "HkJ3vZhtPJScZuSUJ18HoVRHyvz5kpQBTbUMBRUWJzHj6zCvHV9kpR6rs4adFnMybk7q9btrcBoeN3DN2Gseghu",
  "key36": "253Smjm6F2LssekVN3jE5iBTdkJtB21QosUbRjj71YiGQCrduSBM4vKHoE5u2XgKVwjk2rmAYWN43ofJqptR2BBj",
  "key37": "2L2mTMrausN1neMGMXQqJuGeYoiRqiNuw3gpAJC3SRMpzVjUwizE9zHuPDmtGXFLEvEVtSFQyXGfV8jq4z6VHCWq",
  "key38": "3KwGjkvRns7SLCjWUe8wpYyGrkdbQDxTcenUbhCi31NTuKRujHSXkiMSipfV3uExTkw2WU4caEfEzzYENyo3rEiQ"
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
