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
    "2AEJ3mjCz49JFAerXMG9bStxG5KmNmWQHuxs5DmkKhbdPjUa2dVM3SekdgUyuLpeM2EFKMfzkjSXXFbXa9YYe2zo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fuzz1wzgv7V4c5uZsrCCQUMrAu3rUhhYp78oEyxM1sWM98WTSs2cecqDsEM9QzrZH1Mx1TRiie3wE1cprr6cX6f",
  "key1": "46V4L8pLuwwaHCntLNevL8KqWDLbQ9T3zM2Z6wvAfRX2LQUgvCNX9ixCP5kXXWYUUCBtNcavbv1h7nv4DLxaTSTk",
  "key2": "5S4esn55UPNkRXnkRbVAMMoRwBnN7YfRq6w8etkWUV1TkiDftT8vmQ5F62Ba68fdL6ao7v5d5N6QpxvUgZuyzgy8",
  "key3": "4S5iDyiqXSavmWtm5kXCdPB1Mpwef6qhzcYGu3JJGvWgmxwK5QgC4j9giYRbDcw7Kbhw2PDHk58QziyLEeorhuRH",
  "key4": "3viHqXa6ZoHdW2tPYRuPUSS7r7FTGA8sh8Vnfacz2V6U7cz5WoNQf9Wi5yzoPfWUjJyZFX1B1MQy2vJonSYjMs5p",
  "key5": "5LivnPrJNaBrgkXpKZThYxjZsDRPGLXDQZx7un4NSWoZQxtxERyyiJF1z84Ybc7wsGg2RtWsDj3ATD1oUC4B7USP",
  "key6": "E1bMBFNBJ4ZDGoY3DUK22reJn32GucJt1pJ9XAhkhgtMhzjMtvP6spsjyAbVsam1xEcPdZEgw8EDT4to9bFeD9o",
  "key7": "5agrvpgHVdKyA3AHF8ARuAGQXQc53KX2mH7xKrNhjNiLJW713RUamzGH261NFt1gnkd4NThHL4YpzvYDF37VPLpW",
  "key8": "2ru4rHBuSeyStpTHWDnQzbuxF1Y2B2ejBMhajxrTX8NiMcAeZYgMptDh2S8CTs11XA3N6Vczwo6ZL7iDpksiBbYJ",
  "key9": "47mwt5w4rwnrUmFswbnapBSV8kn9fcJohx3ts9VbZBXg2hQVsnfRt68vJKqGxBcJzBvieGnDkRUNpPLPfhrtd9NY",
  "key10": "5wKUhM9XSSknP2DfkSvdkWQPS7m9Z4H4CBWikmF5rVr5vto3bsLFgonh5haVmxLMJPPWnNxgWYzy5EAjGUxRiCg8",
  "key11": "4EsWA5A76EJcfh3xRKCzYShWq2BCesxayFj7QNnqoLc3MVP8XGKpisb8ayfxMfu5QcEk1Hhoy5NKtqH21wFyxhet",
  "key12": "3wb1GzcY3mnZY5hcWbW7YmyHGYskmnza5AT9GxNX5vEUMGwv8waU7KyKGCdMWjc4Kf71MatZRxxb7jfdY1D3rFMc",
  "key13": "4aSruqNDgeS497XHeQqF9tVaBWd4Bv17XwMMnuNCMdW859AGPstcKYwmYGZx6KqjaS3Ryhw8Fzsdk2m6JACZzodi",
  "key14": "2H7EqzcB1f2TkBbbrABevovGQkbGLTYwRWwmkGSC2vckZExWPcCQvSrz5Pk8zykecYWGwdVJPbxKtgFgQUaMRXVN",
  "key15": "3gnMrT6BZf2xbvmMDG8cMtyURf9QvyM17x5FFTis5pnfVLdCVYoZcviMsScUjAzcDChuEg6JMPJqkRqB7ugReREk",
  "key16": "45EfYKtsT4xaooDsxkB6LmZH6KXi6wVqoqrD2V7EEAXKziZTvPkGsuU7vjyHykkdtAkqQ1TW7MmAB2wC6PXnUjR",
  "key17": "5wDhMWTeWDn2uJmuD25iXe5hsEUit1eNTZC6PsFGkoPWCeySsQkgPQSVQfvakdCBcjSnBTV37D3aVkenzwCgbKht",
  "key18": "34QwT2fFTs4nAwuX9qqA9F2DMbNaPYNHCzQM2CxShsHxS4tFS3yssvEpt1HsKmJXRUVVzz7MHCCLF1uc3irVU2Cz",
  "key19": "5c8KVG7hahuke3B8nv1QJybdkoK3k4RafeUwYihuhs2QGx3ccyGA4H9UDnhoYBNWqSkVCQhqbShkjA9GzkS79VS9",
  "key20": "4cgveeJGoshs5bPFbtjqA3q98gVBfQF1kzPxJWLVmVNhU7QDKfq3Eg1NV6Eb6rH1frRqWjZVdJ2iEGeffeL4g9vJ",
  "key21": "1VFAGoM9nfxjtR7nuQ6UTMLyGyUMST7xzAGWBTuAxd2u22yDj2dgbjLVrPi27rLsQRq3bGZCH3ERdk51XdcssQj",
  "key22": "53jgcKwVzSBUHtLrp91qCLzZb8237Uzx45M1WbkXD13EcB78ptLUoJkz2KUZG37twbHzLJAkwJa3HdZwytHGXP9U",
  "key23": "3fpVXqKmqbwUMv3UmhfUmouioVGNXtZRgu2CHEsPtMrfyJyUbYx4mXUi3ayQet4cYQ1aDL3gQxfbEazD3M7iyQvS",
  "key24": "3B4HR5GekNj6VoWXky5SdkFXRjVGc9x6dWBeqQdEiMjQiiQVh1pdoRd4jgUBmKrnugSeM293G2Sfj1gth3UkydV7",
  "key25": "4qGnXKsWy13p9A2GbKMqGPa1vvYm9xJBrDb8KxnK8u6QAZiH5aSNg74F4UCC3jgr4b2k2XDYMJFWBx1KTcTRmUkr",
  "key26": "3DZFB1VnPuKQsm3CtQoEJg4T2qrfUC9WN5EqePmavNSMataCtePPrEWHfRZgZzddjoaf4uHoVmD6siPiqHJ5t6fS",
  "key27": "4cpvK3eJrr3cfrN7vd69LrXtE4d2TXLhSaXKJBCrVEt7rzb1drM3pjWjoR1wtHnMpnCu5tVkKsWzkrf9K3sNQZbp",
  "key28": "wGetf2SaQunYDBtMJ9E2ytxNjmuj6avPMMTaKB4mbgBbaxd9eaA1xtXdrXXgSWJbMwoaJ7BvK6yBCKyVr5Gsx35",
  "key29": "3GohoW19eBfB34P8cGn2H42LrD2vhJcpwYAisiZ4pkkraBs4Lc1afUgNGPeDzTNnGbGK9AaWexe46vXxQr3p5JVc",
  "key30": "2XHfwmAvBsjZv46G1qN8uKJBGac7QGtijU8Vna8K3she9ADM8FoW7PnMsHR5Sf4zcRUJ6AegqZTpfrCtDXf3Qcqz",
  "key31": "4fHAhv9D2o3X9uutu3tBAeYJUyTyY47Ytmx6WtpW6wGsTm3S4MZJK36Ns9zwARH15veeKnwrDcxwmyEfcEZL9QtA",
  "key32": "3PUpKXC7VHXCv7fsh9u1Vo44rYoqhrX93TuK1eMNx3TXdcsWeQuDWouS9wwo1CzHPNUTnFuB5scKCFXKncRVCdDi",
  "key33": "4rjHE3v2G5o3KWrx33Ct15nXzUZnXmCjdPawAao9n4CKbvKcThuFswg4u6S541hevX6wj7UcpS7U19E2uXqQAG3R",
  "key34": "3TyLaaB69urp7WWwwpQkMdLtQ9ebtXWn6Da19h2KvaSkPEtirwrBZTWZvhZyENboDwhtpQ6tAvTBBNpX3pKaMVkk",
  "key35": "33FUYMLXxqaMSRU69jJn25d3eiYEtUsbcrXDP6AT7MkSahvGfzaduZBxBsoomwB15sQz1kMWe4cHw72fDS5xWLSz",
  "key36": "AnsnX9j5dcN6ETkpGbtW6uSWUK1yk1wWHSWByEazZyfE7wSJ3b9xyoxbb6atZkZVwmiRJ9XL5zeNbiz8xenv4uV",
  "key37": "39jbbwopEB6VXXgEPEb5xsvfXDBRgXrqPG61Am5kWszDT3hJjxSYMKrboBVrDz8NVunBwBborbfLSvBjEBaBgus2",
  "key38": "4fxtSTCV7zVTKYFN8h96znJsJAV71SawFNUvBnkMqhB3EhewTvRnML5V27RjzNWDqr3mshJHRMiQLwrDRVLNb4zY"
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
