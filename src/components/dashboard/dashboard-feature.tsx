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
    "2zDkApTS7zfNJsCFQBzJooVUyJLym6fsEiwk8Y8mgAEVM577QKHVLDeAx14jaHhdytjk3c4LkMQi8Ni7y1gEG7VA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35v4R5MDzwYMuKov2WkcgjGq5aBGnHhxCdGWEeokuecY1ZCW1mL9CCoRXrfQKVhKoJDLaLAvtvUKZc357ma5zDAq",
  "key1": "2mUMctj8R3ar4efxzS1YkhPHoWU76Yiyzz4BCqGoKsFtoFCnyN7jYHsMLgiDzjeJSyTeRj3JntSsxmvqrXUcKSdc",
  "key2": "4gTyUz9d4caKhueX2Z4EEyqjirx6tvY3UQ9UkD4BbjBhQuYzEwsTJmz9FGkact616n1X7X1YU57zcqWvHFF9jcND",
  "key3": "4DHDMHZ49U3j9moTe4VzX6tWWyUF8QeEacYj6CGFxZN3xjHMevzQwJtXRGVfFRyKNVL1GS9K8LQ5ajk7PzwZqY1b",
  "key4": "5zE2JQE2fNYitsMdD3uLrJM5pPLE7xSM7vc8sTXhDEa1bk8BnABs654ZNdtdcvq9UgsbY84jCCRHkrnrCdtMyRMM",
  "key5": "2jtR4t7M7JhwAHbpisszGaeeUEUK3ZjBkii6W83GVR8BXkQSFyEfBMhw281wCvMCu2syQzD14GFRi117kn6NvJBD",
  "key6": "4ReJ3TJ62JgBWvKDAtnV3fYLYqajpVW23UdGZ2ixu63WA1ceDw9TouXzPFRNs9ijnEP8Z7kkpXJvM3hHRWsRkYHG",
  "key7": "2fKgNrGuwC3PPzeFP5x33d7jQuzLEPv31GEkop3Jn6iLmWzxoUxqymDwfZkkRLRj1ofH974qs4MPTyRKwMaB2K2y",
  "key8": "4ASMqjLDvvYsbMhH8wkQQMPQMfkfrCL2MaouzEcBsKqqFmxcyQ86MaJaYpXYGQ889As1YoHps7kXfD77qqDY3APY",
  "key9": "2EQRXxVCHkeviE11EZVE1qZcdvLYbM8cHBfi3mMkGMh3hzrHFWeApWAwUXRUuaXTgvPTwQpMKncf73DfWudkVuEh",
  "key10": "2qcyfWhoVX1xY7W2R5o88iSMoZjnk1AQFpQZUr25t6sp4FszMhPz59vTosruuwHowYH7RZXcZ3CaHL3WGkF3ZDYq",
  "key11": "5L2gyGj2TZgTAMgMiqYPsY7ucNiifJhHb8FaaacFibgsrqvYYXGCXUpJHK39sQwJodN66nAovUXzbiuz9JTgZbtp",
  "key12": "3UivUGqk3DA2x4MCjChdz62SPpuGULis4it5JGkda223cYCDnrpPSRsXkySoH7R8MThQbDramiH1UiPQHpkgyoiw",
  "key13": "4CCHr2Qmn2GZ2soHmK2eeXVXxw6JSkeaHJv5hZigEfwjVPX2CBDQPescbv3ENqVDaWxQ9zCb5oZ9SvTVXvgnLJw9",
  "key14": "5WXCoXdnpPWUzZCoda2SxeEDmyQfhRpxj6nvegBvwRRCGBgchEAoMt37F2NgXz7tVoyjmPaPRA8oMN4M4TiC2koF",
  "key15": "5EojfZNsyMX4yYt3Qp9GMouNfpJRGMzw3aSYmjAuZxWVgbnsX7xSDXP9uWz7LeSt1NaH8Gq6VN3FPxx5tpwso3QH",
  "key16": "WdGGkFLqMS26bMPZctkR9BLHTkwmKtHUffY27TFRbT1J2D9d3bPT9zk2xAR2WbTVhhbqj6uC1QggK8kGsFtrCSd",
  "key17": "hF6gciVdG7YxWcF9Q6wVgcZbVuD8zYhM3zv7TdmmEBhQSHcK5v8YaygvvFfEK4aztckZNKirwa56DWKHRCMhzr5",
  "key18": "3WxKhGGmLCbNM1KRV9EQfxurZw7sS4nMJ5sND3j4nfgCPMJngzr9NaeReJQhyiFa6DC1V9TbResd1Qv8XDXCE38B",
  "key19": "67SnPdyA9opJ2FSRDSQxnBpEfeupLyUXXGF8uPGdbncoAy947Ffw76YzHxcWRjLcZUfWQnY8kLSMLhsog8DQrYMx",
  "key20": "5PtMXDxUmvzhRyrWpi3egLmiDSiVHdgGZ1ZLw2kUQMmdvPUe2FiwYdDj6iYK39vGeqR53Yu5xBFw8YacBeKkjGri",
  "key21": "3knjekbpWbfMJUdNqQK4ybMctbRdtjVaZ4cLb4YeWoeVazPNgC5uX4eiPEU7hQBcXw6urqRgScB3pbsdagMCTHeW",
  "key22": "2xWMgSd9JBw41crCnbX3NgFKs2xUggCziwvv7Srd4fpqL7SKeVLWochZDpS6WEXaw7ixrEHoqz8GFxpwyYVAC9SF",
  "key23": "2ACFYtRcDJGnqZqXF2JD2wifBYAkSJ6aPD1YojfC81ZCnabGsTQwbgQoTDJM9msCFQxZzeq5S1zJvQjtGe2M7FRr",
  "key24": "3g5D31EkHh3vGaBUDQFSZ36zGKLL6NxhE2KtXcs61uoppr37PqgFyQpQdpS5W5cSN7MkbdLGzH73N5n8dFhetYX8",
  "key25": "ieEnfwJgbUPBNrm292LKgULirTu2xuyVz4tN91ZqomrLbZSMjFZF917LJsU93zDW4g4FY4VbPN5wPsHYndsv1ga",
  "key26": "64GKy9XZFojNrsnTTDpBfB2emUQCh2SQGJzV6Pv6AY3ePC8qfXUmoxS3ZP2tCrMDKGZ436VBZa4HD9WMLg8ve1hm",
  "key27": "2a1TCZM6wpw6acU4nnrACdkYzTwHyt9BCYVp8R94ANuk9A9yWFLUYLYCWKocnXAktSFqtQmuQQd2nvi1qsbfkeLt",
  "key28": "3om6sBzgRytFcnNWMf4QzWXVxyk2SL6yYtZiLX9kYxktF1wV5GnJd1XU61HH9n3xgK3XDxzpNzVaKbQ3ivpKpvh4",
  "key29": "rogy4J2uYyEwM8rkEZR5RSjtcw6TzaecmwHJKDRgxogJAsLcQwE3KKMJSZB63JF4gVwuNMqrVsRQcECenjCjxFP",
  "key30": "2Guzb59v8J9BLX1iS8ffNfoWCThtmuy2o7Wf76D21sRJ4VsBdQHmN2f9s9NiULPTHFstfWNdynopAe5sNBAF6cTN",
  "key31": "4P8tR4fTjTLAKersLHQbyvFusLgakXvCYBRUGH4uejUgKaF3LFgKUY3iLoQKxBUtBoTTvjE9oiwJqS7D6MJ9JBmM",
  "key32": "44ucVrwbBEgnwUKhUff1134isxNMR3XKPZUvV78MZFZo2zczR4EVm9WzWAVWLWXSGJsenFozEQbfSjykNBs7Vkqy",
  "key33": "4o9Caj9o9SVocExKv2DipDxLcaPAAwnfs3He2AsRfHsBs7NDcsAaY17FKHjynLrt9bGkiGXrsPAVBudZWP1iGuoq",
  "key34": "4uhtVoo7VosQYEQXDvGfS5oPzg1Bj6zQzsmMJSPM1hn7uQSUn128M565o8aQZGnuNkpb9nCiQxZ2zpzV4upVMwVk",
  "key35": "xQ67mNcx1bxJpF9tycGyy84mqNxDw35gNkUibZfGmT11n5EZUY4gDMeUBtX4DXffGLvYqh53AutyWmC9dEBzJZD",
  "key36": "3YF63XxCsikNayLRHhsAeTdEbH67DWP1XzFmteAJPgdBiGtQSizGtGeszeBHP3gAtnnubSHd6bAQUjpZgAPntpwi",
  "key37": "3afaVUL3DjHgTVfWUroB7v4DmkK4YHMXK2erdpiJAQtJifvg15C1x8YYGs9A6KYKiNssiADFBeEGG8ekppdEHd9j",
  "key38": "5ryMnj9aXSrrSrgnem56C2D3qAXSUTKQPyGyY9bWH5FGwDgm5ygGPoHq8FT1B7hHw6hSKheM8NRs4WRbxyjXXnEM",
  "key39": "211YCEBSExKN6r6NhS3PwTYvcznzDmANsM39MLJb7rfY7orTjU4FHj1aWQTpJvdsfgJnK6oPTipAa142NhMTssGv",
  "key40": "4b84VTpCtY3emMZ5yfG4wSYmijxMTKPE3RjioAvZSwxBFEXCcu8hdENcBSKn4sVKK5TyqBkTTiFdLWyuBLxv1WyA"
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
