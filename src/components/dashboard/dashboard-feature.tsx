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
    "3zDXnZMmLgP9JkkiVaLAHdpD6PA2Qj5LYxnEaNGBTvgrsUqRvoBYjSbgjrzZtL1DRJJcw7fmdSnQsiWg31rQg5X1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W9v3PAar1D9LZLb5EwF6NbYLi2NUL6J9SgCtoSpKJhmke8ynXkYLTvqteEekiCJHSZoWiy97q3oHjxudD23pRqv",
  "key1": "5xWKGKws9fJQ8nVixq7MsmXm1hV2EPsBZHoPb5Tr7fyDmfrzZdcocKznBHo2X5kH87uJNe1ZwZC31hhoQyKBERwL",
  "key2": "2EgZrBo891ajfZH1kXtUuXKonnXr7VsxvToxuPA1EW1ZaT4PoD84hSBmJBGS9tUCgepVnkaC41wGtvpEZEgn1fVS",
  "key3": "b3VNS52LcgiYJx58Sy3UXZDKKnGXbKHN2BBTrU7kagWXctmH3TBWkD6xadVhoxhXaNM1kVREP3xk4ukAsMvJYzM",
  "key4": "5mrri71w9QQFJDM63UTkHWrk81pymMArqVQwVinMoHFs29LcEfSbhpgsUCg1skndqhNy2dhVECbobUfrDqU6mKkh",
  "key5": "xmpLceNbJ1pXN7XkyDvEzS5tLxJrKzvNjjNesm6Q4QfgNs72kRo3JkhrkxJ8sxn4onNVCF58waMVHMA6fWxBPHf",
  "key6": "5jPzDCXdtAdxDhLSaHVVfgukuasQNo25p53bAiG4drtN4935Z83DAuZQvsKhcixeBAcBbizo9ZzexogEDd5h8GUH",
  "key7": "5SHvd5HQXVcEe8PNp9hxowevdQVEhXewvemZXpgr7QR6w1bPYkgjvSaCFeTXNduUVXBbVWgmaeEXcmbjt12mVJz5",
  "key8": "3gf7kZfKfQjY46oU6xnyHMR4zcDcNzCop7syP9Zs8D78SaZmAcYDTK4WvEngYW8sHBmUbc1uG53ZZGbBkQwdxkCU",
  "key9": "44Z4qQqWpRKDziMxNWwPdUhdJ5kt8bG9zoFzfLCzqXbxU7JtiinGpZjjNAZhgWxmVyDJWfiBiLLnh5vKJtTZZht",
  "key10": "4AcXhHPYEL3bc7pW2kNwJRAMdawoP5naePJ4254KVB6LrMuAB6Mr5a66BoeyUHX9wxaqCjSKW31kosYPwEQpuRey",
  "key11": "3A4mu21fTVFULH2aGH3KeDSkm85hqXqky1j6Wm9WYc2NJHVcceTvsv1RRNPcKHUrFPRHUyy4pVonhXAKnh8jbkjA",
  "key12": "3R2EeZkFbxMQbTNV9mzA6B1ynC1RgvxHdnMjhgipWgirLNcwKhj5sdGdhzoVqo2tq2gMDaiKaLGpPPT4vc8EvfoD",
  "key13": "5yYAE6CTEg1XvBADV1bRyPdkCysKjax2hR85eo5gZNew47mQVeLiSqYgpLsXeDSvdMJzBW9F3YZXsn8CWFroUKSm",
  "key14": "3ZCqCtev6GMy4ZbV1dNXi4uxWbcpr7JL5QwixZw81ABzpBNZeZv4cZ84R4Ggkcj6SUM7KhsMyS5R14da435a5QCf",
  "key15": "517fFUr6FP251R3YT5imTtTdHtH7y8cBcupXWJC9LEw6kYLHPvAKBgip39AQvSWaYGfqvML8ib9pDFktA2agppUr",
  "key16": "2o46ygmYN5JXu6V4qs7tVu54E4QvzLwHRBdQc9JQk6dvw3mneCQd8q63if1ZCijCfwgBbqMV3t285CacJTyZGvtm",
  "key17": "5zXp6K2PD21iNkPojxyuva66Vs5u12ttEwEmzBmvuPvKxeNNz8zVqr2p3ks6UpijC1SnugVaN1ndJbxheruoZCi9",
  "key18": "kgVbZ4jGqZ53NJq1oEit1ojb1gnA6sDUocu7RgBkyXi7KcAtkPSvi5CCFLaVsWiRPW4jGo2Cx4G7m2ExZWPTMWU",
  "key19": "4wQpRP2RdtfWiaXvvWixXHW7tM8a3vuhsH5BxXwPSUDJGoSYiqiYhykN68SqXRz3ipdA2zBjtsynSHnpwAxWbNQK",
  "key20": "4ejfVS6WvZWLQ93egWkaPuwnHJRuDzx8dXwqHUaDhG8yNHeZemL2h37y95ggiRcimXbbpDxszRiwkB1BMu8iEpBD",
  "key21": "2EpU2ZaQTUGBocLg4kMXkeqFamhubzN9mYHo6qJsdm3HJhChH5fV2mdnv9jKPFfB8k9hBWPDZWLwTZ1sdwhXXaQz",
  "key22": "5qXUXS95r9SRHVcbVZBLzHTsB8FuqqofpKThjh4y5JVweEG354A6z6N3panFkYZocRTTLFsNAPQoWn49GX1emUhW",
  "key23": "4H5gtTA2ioSnz5ocbs7appUkPmYXQi4zFbxaRbgtaz5SVtHwM1grzVaPTcZU65vHWgBk9nMLbgbcSNNEBcvgkDba",
  "key24": "wXMqknS1xS6NDDnWVDGU6pyKxLN1pkkXcmh31zm2EXcKNZ2oRNLRwWmJMguwLg3wNyAetcipiJ5KiF2iJMmPKuD",
  "key25": "2znJYtqL5qSuEbrTVysqLLSnokW5YMSK18Wy1BU1T8jRwSG5dSKkLgpYY1aCEb6bwW4wS5nhfWfcGiEQLyCjJsxc",
  "key26": "4rQ8NDYKvDMurspEM1P27VXynqM17SfXQfzXy2LSPRTRvKFf1TY6TvRURWsU9HA9ogCZbyHHX28kiVpWQgWKQrAf",
  "key27": "44X5ircCLPPw4YpFZsTx2fFvcRaiT5ug14UXU1uR7pGmKGqLgS66zMFjL1UNKRN5NTBjbGoPKZmrPg5rqbgdGttf",
  "key28": "3QGf3ZnJz7BMQtE5r1BwpNjzsmHoCaoZZMLpxE44SEgFr6b7MxXjFXVyjzanvoWjNxiaz1v2YBKQdKocS4azehHv",
  "key29": "KGZMMtEaurr5vTQ7gZUSzw2n1JozCPFhAuvvbRbncCVznzfhD2c3HzQrYUQGZkSghWWe6XG7KK8fiwaZSXE3psN",
  "key30": "4UcZ6yT7JcdkZpYhFBexKpG2acJKMcNr9W8q1YXUtPvKbYKC1DXsiAeoKqhP5BpY9Hg1zxr8kmqDj4y2LfNEF3ts",
  "key31": "4Av4nRNn1k2pFdZTzb1pYpVGx5CxUgx8UHnfUM1AP1RqA1Cb32gom1UEYxAjGL9LqwRwwhefhPUoHoQjTN39SFkr",
  "key32": "GeQ7rE7AMcdsynfnSbhMC8fzhE7YBa7h4eGLTas63hpwXHM1uwncxNksoB6W3efMwaX3h75nkdGAcX4s8G1SaBG",
  "key33": "3raycjKxm1S9SiefZeSbMYi7aZWb3NPHTG4EhmHekbXwCDKvk49nrRhNZ3xuF4LW3qwsWSzKUJJ36MPAEUiu1deo",
  "key34": "5do3hiWnzFGsjMbXSKraGgtFDXoKTrdFVXA7P1N1nN8Nm3tfAnUoNEo1XmwdhHA5kd7dcH5YTZL4FQW9euQYkiW4",
  "key35": "5D4LxiB9Avo1pjP9VgoBRfLZFWQh8sS18V5yqhphsfEgmEbdkB9DJ3kJeGtVXwfs1pTozKnJhzjR9VmEDCkENwDv",
  "key36": "5ZgSf6GBwYLfvBUAzL79Pw7B9mFnjfPPjYUqwUWEPnzEzr7wysZaYmyMmWKk23bDN9bgDFpRVpMv87MCqHLZjkDg",
  "key37": "3ZZWZPKtJsFhoUe58tSMA8sWeJDox9Z4H5RQpANePKoeUMnxd8FZjQFZto26fr5sxLoMpjQscLEQVJ5saG5jigeB",
  "key38": "2AtuRZSEbLYGk4T3YTXhWxY2jTWM6dVwLSXR9btJ8P2ADSAL8NjvahsZXVVitDyVkTxkMZHhavdsRAEMK58ThXXK",
  "key39": "5n6odedcurGt6eSG7NCpi7iZKayVokjJ1vfdyCS76SCsjGFtWF6e2TnN984RFWnvnEDiTXJYpgRMjpHgjHMyzRHg",
  "key40": "44Wg4vaXTLxSyMvFptvUqAv7vLmbdZQ1P9LHjUo9C9DpRb4m7pSeVamPBi5PmKMNY73JiCULDpdQ9YWVxYXtGgj8"
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
