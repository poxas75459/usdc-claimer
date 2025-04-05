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
    "KNsWWmtMBnHZH6uS7MadZWwCSwjWSS8FyuuDgYQmv4kdPhc7ccFEAAkXqsnkV8Ay2d48qCzEKxHnHobLQGMJiXZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z2os9mLgzDv6KeQfTr8rFRm477cf5JeF4VanxirZCX339ar6qbv1uVEuqCWttPKM5M3F86vxvmzKR4hkN2N2DQf",
  "key1": "3VkCYx7om1ucSS1Ea5XYypnW3U5ZZtCAkV31sjudQZJ4CopviiS8PJD9S8LSxQZYVGdX7kEviknafjed2n3qjcuf",
  "key2": "GvYCEHJrHm26t2UKq6CjkRijTZnxejZZ1J68vrgd7bWL5FM82F4gcb9Qn88gAtqAnbMhg7fWgRE3C5r2AVJGXDR",
  "key3": "4nbrWmjVxhTfr2E8QLQEkT4PC1VGoHwqzQayjz442gf2XY8WgbaWTkFmS5bSyPzPncqZmXj2JBo3LGEinedryeQV",
  "key4": "2D1uLXWf47NnHKgyYMnFh7yuiF8YH4huxFeXAv8iTdDrXJka5ncsTW7sGKarxTbtm8gSf7MSPfjupNKp1NCFt8HA",
  "key5": "RRyTF1TQufrAnEsRuVmnc1GTC5Znj1KnMx1gunPXCKf4dTwcNQfVXv2GDtd7BURyPzjANuAGgmKnrJ4rikMwzsB",
  "key6": "43AaczhSZ7VPUvTuPLxZ1HXgHuwyDsYAqgtDviR1Qk3pVivS3KXiY3tQop5ySL7TKpmyEjukF7VRsMUyrgVMY71Z",
  "key7": "39B67kzjYAPa3erAV6uZZcp67x5surbHoFwW3VtwX6Qo32PTDXQTpan8kHrF9XFeaXut8TpRJVfTTtY6jAW4DHCG",
  "key8": "2mSjYLu4akke9PwfoZJZC5R9544LSbnRP9G2HBN1JxiTkMYTH7YQDdahrpiew7tekXsQPXYx6DRc34EYyc69Jppu",
  "key9": "5sKgumZ5hkisCt335Rd5hToH1vbCXTJ5iuh2agyPjSU3bbaB8Y6HzjcCgR2dvA3AAcc1wuMDajEcR1paixoevzSq",
  "key10": "DWRF6phH5DbtoEjeeqnkG7pQWzDRWBvY7r4HNfxEzUiUzEDxnQmqVbyEyenEAh4nGFgD7C6yDNYQ3XT13QfQReG",
  "key11": "2kTWf8r4ZS5iPfEXMohAYJ79H1gcTxjGBnYkW5sBztVkaY8or2v2x2zydTZqGFZ7eBJH46Y8DD5dtYSyy2MsCi13",
  "key12": "4JMcyWQhNRPsuqGMvB3euB1B8u2J9Te9PpyzMR14Te4nrmSMgomLsJJRdqX7TS1tQji49tNicz7qRu4qFr9ntuQu",
  "key13": "4P522k596nbMMZuorGUhPYb4X9CZUXMzMJRdraTyW1nzBGq3Lcfjd9C44Fz3T7jWZgrvnA9tyv8d1e5UrbwmLCAd",
  "key14": "66rbjWBywYr4fFUXvfkfkftwA4MnTCjwWKi62DKcMW5CmmzMPd4xoAnmQvvhGbajuNWgHogU1oW9x7Mhy7jvjGoH",
  "key15": "52ymh7CJdQqZsxTBe5eEA5JgZwbnNSYjSNXGPawvpyPRsUNMpgx6kYwMQXFjNnbEi8zey3bZ8UaQLMJ41AVQ96DB",
  "key16": "2opkwwsiHC8XZn3gdoTj3tEQkdFQpuQ1n951XkPnnGUy7wcszZtYGUJKYmye7APHC1MVSnWrgGFebaCrdsHmFoaG",
  "key17": "2q2YWyJmGHjrSF3ZprfXudVhjDYZ1SGS31WKJVV34YnUkKt1ZkbToZweVEHKyChAvtA23iAZ2CYC6ccaqUdAmgvk",
  "key18": "63Fp2wP4ZCJoMuX7eA4xWtu8GDZ4VZqwo53VGwouVuCDoZo2FDaUhYT1MFCWbbFcp9UN7hFYTK7QjDFN3vs79avK",
  "key19": "9PuAGjCHd8Fgm5E2bpuYKtRiF6JLRdZVFifev94uYWCBrJdSSSQ288fNcNsLDLFgLUjRq32wqcWxz5krfF2g7Vb",
  "key20": "pPTskpa16v4RinED9roMb5P8XjeRv19x25evtMnNZqCacpnrJxD2WcDt1o2UMgSef8SjrscCNFRVvAQciBaUcmZ",
  "key21": "cgSGihMQZWMKUtdvTT3oc86418wA41jmRCapFviHGRaFVnZL3sF8X9q7cbRHiFZMK9BmkTcvD2SstUKcFXAYeBd",
  "key22": "4pzpmGEFcAEyuQEK7tJMM36Wg6TPttvd8EkpWbresja32qB2msyZuD5AJvmhQVsMWcJyx2QDjHpnkR9kaetdJTed",
  "key23": "2SBKQvJPVz7vfhyncGUFFx65v5ffSk5rnb5XGS2h6TWZP4mGgVcQhnkHXw9NaHby571n7JYKfjvCg348CTvEyDzz",
  "key24": "4AjzJpLe7EzH3AYdmdcpDfArxPDzensu5smjMZpumNody1Cat3nG28Gu3C76YaHdFaqdR1aHxEJjtZeTGAUg94Td",
  "key25": "5mhPAQ6wEkNUwfhgEKHkNFca6CX3nEH8ECUthWb3A6f28KP8mm9DWaF4dYNzUkDLuDHPN2EPNgcQ9JaVCxkam69R",
  "key26": "2wgM4JQb6KEcn8bRnXAq14GtQEDDdVtrjBefTKSaARkaQXMtGL1jjEws77JRFx6cCN515ZqXQ2C6hvvEfjGNXJgb",
  "key27": "4QskYRnaQbDTpBUoukmzEXbDeRtECKxZjrjHQ5DyVNBPUtfQNCLKof4EJ9mzNiA2voFrdEhywYMMR3UA5RWnxUAB",
  "key28": "ddHuyBUg9J3bpaNXmpjMKERaAkS2AnQ3ZqDu4E5AobWGCSjywD7Ss9hEFJXpgTGChvrimKPU7kiTTYNXp2fmZ1B",
  "key29": "2DaaCqAAtRyaVTxhhaUXkiXCdj8Hfd8qBXMJdDhCj7L7fapiPm6ZNG2iKLWSZYdMEJUYaUyXuU1JfptpRhEK35sX",
  "key30": "PhL7gdtJ9Sq5MCQBwSK99GFwmobfXqg9MnNFJHAYaQ31kkbv8UrrTBR4yj7nmTkLCtbRaJX3QFDaZNusUREamzR",
  "key31": "2zyACcpUFRN7RFYY4KrbFsurLcRDQupCEh1jq6zJdQgWmcZhL6JzcpB59GxB2pXGP7DiKcmocwibL3nkyuup2ji6",
  "key32": "4RLEm1BG4ABtJKi8P6NTYbvdAgxcqjkgAeBNBUZBsbdqKH2J33NBVp7Z4UfD7oeED1Px6AbRiQz5mg1gpZy6An52",
  "key33": "3TwLwvvKZuqN7yFtAqaUcR9EFMhAcXCNrWjr79JJsiwzd4w4SuLaz6Km7NMMg1gT4mHxg5UpaMgwG8pmMSzobTUG",
  "key34": "226dtxr6eER8EQCRQZQCLnQbZRetdFai4XsHooZyUE3XdoJWugFej6ww8jrdo11WZEoyLnzJ8DEMB75J4BeasTvs",
  "key35": "2PrqtZimiBMGMDY2hMR9FURcvfJukWqKMnjEAFKB4yLFbJGugJE8T6XowzBQGFaFVwM986FpKbZhDcZNmzM1c6dc",
  "key36": "5mig3Vostajdy4Ss2Ky5ZYBxnA7rWmorEVx5jQe9gKhjJw1TbAF3bqrpWSKGJRkVt4eVjiDSBLGJ7SCuhhf6AkFT",
  "key37": "3j1t74WrctTiiLDaRyRJyQfVtJtr9VkU5j9dhNMmRJ5uxNiLmzDVFdebET4mj4TXpuTgMqJuuY17MbXfU1FpXA9",
  "key38": "5niyLVqk1xzXG8rC4sNRpDgn6VJJMAiS9Mnj1EGAkiE9jEZWfiVpTZnku52Kxrn1fB5aUb44FoaHahEY154e9sFH",
  "key39": "STyYFw5Xs2ff85ByJzeYYhL9SExw3CLK6eT1CtKZsgQeCrXzAzpUqN2w46DQvRZybiRfQXG9eT4QkDmrufTtDMQ",
  "key40": "heiy6AMVi9fMgQXsGtcH5AYhk1WrTN9JRSYGgY7FiwSjyJUAxxbNvdwEo98uorW1zzYKqdMqad8ZD92brqKogY4",
  "key41": "39E27fmef9jgA6CKYhGNtrMGim4DMYpsHtQT6jkH1RJYSBMBjdQNKPL1kPmCD8nH84ZRAraz8WtYcrxq1ioqdKWy"
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
