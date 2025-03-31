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
    "m578Q43iZwVXzoUJQZv6gm6XGwaGKVvvbVtBC8qeoUHcpe2g6bPK6wWAeT7nkD69eZhdp1RRbt3JbyNG8aswEuX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WntvGoG1V5Sx9EVavCq8zF8nLq3Y6tggczvk9t7A5T9ZASktKZJjwefpiF6KnvfqXyfXAJxxN4ZBUX8VyLhizVJ",
  "key1": "4Rw5f4xu9t3E5vArh2BafVQSLTS5Zh3mt5QTvPUXCS1vm7xoEgUoZYQeAC1Z5fJDZNcfQatbN64XfUunKCEk8qjk",
  "key2": "HARbeGR27iMKza1jiDRit1mHgTRpBar21auyeyyzfWYfxXc4ZHeexKeZakuqxyvFERgi4n7c1mWmPF5zR6CkkcD",
  "key3": "3SDLA6tf9iBEPv2cZbFdqv5VxFX4AZtmDx4MSSmucUpvyTvC7nqABxmJNsL3QVK5SeqrZZH1MSzQYFvMpnw7sd5j",
  "key4": "3EZRCu5aq8R3L4cj2opBL7i5GsqVgiAou59UMjTLtCoDm4qEsrZcQmdLEQZJ9yvQSaj7AdhGj65TE8bW1ALZTD1v",
  "key5": "jDaQ2C2vAcC52fxy5U7UYTTikTirMMxfEW2vwdvuZcxktniHmPrJemT2kYXfkjTwKzbo4SokuhfxvJyTh1JMFev",
  "key6": "5VyUdbspJG4GieF349GGNxL4GF8CDBQ5No4DGbCjwiF5VbYPuSKzyeMWBj7zS8PdTwXh4ePgvF4BCF9XHSoHNrdQ",
  "key7": "5zqkF5T3orodtv654HfH2zH3MiKTj5WhK4f6PsWrshs14CXjuQJguF2aQpPS2o847NRhjGsD3uCyssg4umwtmaSH",
  "key8": "67QmLYXBtafMJyik5mYfQQioY4kVHXmCYAihJF6qUw4jAyq9AyZm87FWUH6tF1ME9NKRH168gQejVCzMeTU339Lc",
  "key9": "2enYSwfBHZCCbfQhPzehWMvyFN1fTxNYDHcCymrPwG9o2hvew745kKRP6PdrKXwaAmFYdKEHphCanfcsmGs1EraC",
  "key10": "3PXT7nTbqrcwSD3PjpNJz9aZpyzy5JqtFcdk4city6xNxfZ4T1gsEArbxLnokK71tUozPDdXFqKwf6YCh8bJftfi",
  "key11": "5mFUALs4ouzovBggXpfbB44eVBwWN8MkzpXLKrmzkvxZuCDXGG736or4XHBHwqbqqhsym5xPr1sSvc5PVPCiXPVW",
  "key12": "3H1F29EegVvk3eSTZoHnrbRteUMD344VnH5PDVTAetfJgnDzXF9jLAx1rLQd5WxsRdtKSAh71PxRVYLcNMBMGrWX",
  "key13": "5f4uWdmcPsYdBShsQRHQBg4iBRC3Txc4AwYsWLidnXoYvULnRG1Bhh4zE5zah8VTytHWe9ZWyAUgnLymtQgBTrcw",
  "key14": "4pYWspmobitGCKMzp9A3sxG9LThkNLoZ89uo9ScTdzDYxkWaqHopRsmX3VTV4oUcTGYQSFPimiXoWERKVCALG7WE",
  "key15": "Pe9gGXZ8qXBw6DWihKybJoVDq45HLbqixbLYmyZ1G1K7oGafdBJM8GRojvSxCupaxTGqRzba5H6MmxwB9brpbrd",
  "key16": "2h2krunmj2B3aTrprgecbfTqncuoQUfBy8WaAHf1rEcxFZRsQ5agGjkRagLHabu3GEGegwgpCxeN7ZLzyQ6CCjKK",
  "key17": "3mx7qwiAbB5NHGdTvZ6inrpMyxdpfNMG6TrJtiqRfb6qpZsboaNgZaRj1AaqUarm2F9dTHutDLsmGXwGsx8vv7zi",
  "key18": "3kJ9LbioAR3V6QasVrzYhEKjyMjt45fcDTLyqZPX72def5KD6fenb8jXczogBkyMJWe7vtDWKJeR9QEDUvVCswVf",
  "key19": "4VTBtR3NCFhmqJX3k1vFfaD6dkY7buiKCuFbK4ksobwAP1HSDCA66yWaFCJ7Gnb6AbbSoHajLHbab7FkbpvWEVP",
  "key20": "q9zqzwyuWRz8d5PpszMzRkKpj5ecgNkTZqUSVNwKqxQbwkySo1HRxfVdjjbmEkEr3sMaE7dGcMpx6phGQkiA6Eg",
  "key21": "4iJn3sKnYudSembUmsXn65SoZ4aiPy5nHmFZ9bxVSrAiFtMNZakbkxD2yUX2ddWX8SXYCgJtQxLk8F9e6k3DGTSg",
  "key22": "4HTVrtaYwzzJbweEWX4DvRgMArUWiiiDD9amDBb98bR9ENxsWtLCdiDw1KjRXFPXd7AnwePJJ8TaRgdH6nMW3AU9",
  "key23": "5dF2nBVyLCzoRLsPsBaHWxUM69rZdihtWVJomMmvDEM2zFEd4u4JBy5GB4fvjc8zwew5TuMQj1fWn3RvsKECJDQd",
  "key24": "Vdhjws6xSuU3ZiVjzUTQSvBM1YEDMbpc2N6Dg1m3TtytNsFhspBNak43Yo81vcBX5apkoznGHuxX3jjJW5bcEa3",
  "key25": "47ct7cxPq9jeRqDFtCBip2597NjFnc8C8A4tbQbfGFAnndaYJ1Q7WDTdzwCRWUiJhFybJLakfYNjLPQyHW18Y2s8",
  "key26": "2QQUydu952CTYTGqNhz4267QbQRafBBKnbWeRf6ECdQd6YWSkrpFa7Gshei1tTNoSWwuMjP7q2c5RVA3tL6dkgkp",
  "key27": "kmCzBasajmfH8KaubFCqXRMzm9SfZHjSNQg5mPnGCATjKDwf97QA3A3nYphZ2F27JxZjM4zQcV6KL3bYvqSiD2T",
  "key28": "3bDqF2vBqxXKhHahUA1CtD1NRuyALWeY7q2exhvuK1rX1mgdBMMpzmAvBbsSK8CYbH6KeW16d2ZmzmPKwe1fVctM",
  "key29": "WwpjZcrvjrFVH5bcBbC2gEtBWQsZLgVgf6ojpgbTjGGbhaVz4PhUbuuoGPntc1yPnscD7kwjNb7AXikbqV9GFEu",
  "key30": "3kiD6ZJVGANwpoLyk2HgbpG2xSa82MrjQ9LaS5tveWW5cyAQaFGSTD5mb4Cfuj3oA3kLf7Yg7ffKDyRPqeZAJC7i",
  "key31": "4GYUX2CUoysJFV8g7bY8Y1SsRLBVVhKV64W7XtRLdM8NE5XpcombhWbsPYi4VvWj3wsSrbEiTDtjYkU4jNMidefM",
  "key32": "5XmxJoK5fnUqtdUczj9VDCdQcW4evijFkNmz1CrSN8y9YvfppQCHZ2UWwvH1hrjc5RYqGZEKropJ4Uwf8ugir3sq",
  "key33": "2nLabyaNgfXYqFYDCXCnTW8kqF4hVfNsg15n6pmFitD1nk3pKBrW5huyEiigkDk6w47uQpg3HhGL9wZLVMYDhTin"
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
