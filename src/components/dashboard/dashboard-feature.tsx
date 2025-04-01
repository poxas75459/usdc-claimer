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
    "5gFfadbjqxzUjrc3cKmtkzmUBw3BQg6b6XVBcHXDa1PEDpAGKqKXfTF8SzgcdSuYEyQeKynaqCt6gHmA9vv2dgC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6Y5SSiMiAC2C3QGNGsZ8t9hneJ37joDwrAbXa5o2B6GfviXHMkQ9JQzzkz7niu83CwK5wbciBjXegzEKjKxQqg3",
  "key1": "4B9oZEHADrkpBF7fTLJSfmRK1t5M5ZEXuANNeYsTeJDvHs7w2HinQ1CvPSKnk4vmB45661N7SvcU4iHE8ncp5NZ3",
  "key2": "38jydGdxBUvjhUy5GEyf1uNvpxZtTHieennm7JhYk7yrxTyE3dYbearhgrYeaMs2sQkzHLsXLM2RTUcZNnhyfTXx",
  "key3": "ZnAyC4fvLZsuzbpD1koZbviCrNVWiLYNq3ChZSq2rZCdxyED97ah8xTKZMPQDob3s69niaTzELLaHMPN4bamxDB",
  "key4": "2NuKWoJbCwpx3pBqjZ2viPix16eHXdy1j5AJ3gG7si6oRTT9qwAVBUSqH5wpzNXobEdYttYTRLARzySqLEhY5t7J",
  "key5": "2SysxKYD5RSJwbdrDHYsDHcBPeCcjRJFUeBeNTHPK6S5S4tPnP5WuGTJDoWaq2tNjEyU7qjiVgfmFvq2W1usV9rK",
  "key6": "3go9vARnaE7v5ungw68ZpEQ72bpF9AX4ZUKGAWbDT9FAhR93skBuRXLTGhDzsTMFVb2v2m3qKvTavpnDNWa8r7VG",
  "key7": "5Ea1eg2cw7NxFm5TBcG7S6hX6roTSRPjUZDscNLJ2K6zLQzGWi78F86XMHd5H7M6Uzg43V7yCJeWUaYerxF5F2xZ",
  "key8": "3UWbtfvUgxEf2E15VEUkyQCNszCXYn3osvUPbEXDk31ZnekSCpBFZDiKq8QDzHB3fATV78Rc7boH1uELsfjmokET",
  "key9": "3PkSFcXaNfk2GAbyDh5CTfJGXUyQzkpx9TZeSsAgscYuJ3M8imqi5QK2gSysHseurDcNXihDCPy1yPt1mofUGPVz",
  "key10": "EDnri1n5PU4KcVsbbAHJtzZss2Y2PUo9jRhQrdym7pphNftP6GrvuuHbDxiX5YGSchxzfxC9orzyZwSAJnJrrpz",
  "key11": "BpvJyMMTLsR1dNm3EUep3jwWnX4RPqMUCaHPYhkaEYn15cV9FCbSWnYNE5A6zfeGogujb74PaG43kBQDP1tgY4J",
  "key12": "23MGY5E6ou1suANdxs28AFXtxKrzGARUcHXj73bew1C33E21SDTij9SpVwvkddpYUVcjysf9EGCRmrZZHWGp4D72",
  "key13": "2eCYLn3sfjutrHVvjhVbnoVj7AmnJWufh8ovL4KeCcjtT2J1VthvmJYLiQHJ9P67aZFAmYY2Eg9P87fCza3banRh",
  "key14": "2fxMjEf3vbYwxgPvCMi8rHo9MAgmNDwvkPwRi9GYymXuN8TMTSZLsi8ewk6dzWTk4j49Ee1dee4yFkGrBrmLfsL1",
  "key15": "58q5BbeGr5TrAt52nSb4dbgH5SXN7Siayi8A67YVuQFzFNc5zn1Y6Vgi3ttM3ZBNwCvjhCREd8rx8xm9Z2zx1eKn",
  "key16": "4cDApK2Y2PPffoujL1GzAznQYnpY5HXAudDBEeyCcZochEMLJe6HJpkTpwBDs1FAVWCS5zAEwsi8HqS2GZDaWRJ9",
  "key17": "54AuVpLfUAf2P5K1QjDoPxHVc8EKHL4kbK2QyUwVwboc4URt4u16kBxCp7p5Vw7iGhKkLC1JHAXdxSnptheqzJHu",
  "key18": "57UTjLAyVfEG7vNwbuxE3X8km9chyRPih99HPzfFWhQWG56A9K9rDEczsTWCisJAGrbXSNMT2YY2h1VMUp6UC6DK",
  "key19": "kHPs1LFnHAAKRdGEduysjkuqAM3XsDcrH2n1nttYcsmM2Kg7RrHwZ3rw9isnzpVPh2ijxcbpWgwKSsrUuqmhbnf",
  "key20": "2dGk3CY2SSVGX4eQ91YBhFyZvAwLpdmVEqXGQWaRH3p4pJbHJHq7yTgGiRZ5owcBscQsRzy83ufbboUXpiafqKP9",
  "key21": "5DwX6QCNZsSE4zdmMk9bwTas9hebQfQFaXY9KVbr4LpcQpcccujq7vMgGJsJq6wogd1yuMrwBsnhFGuZVk6bmVPP",
  "key22": "3gHnyeaL8Z9vH7EhpwzFKqiCqZV8x3VuekkFT9FVWo7zweMzTr4J5vE3cBVq8Dw7Z4WsbPGNYDwTDE2diQFmUtwu",
  "key23": "2WByuoZcFncYWPTWCpQCEGSx7q81z9NAAz8rio424wc5LcGWjUN6WUDtoXwzdsfLVSTKxcGp2M8JpEHKM8WMBPkj",
  "key24": "2pFdxY7K4QXxgTC1LVspqmBSyLt8aY2iysmM5Du8SG92pXfM9c223bTYcUtBg6kYSsJ4cVA9WdgGJJG6AJbSRLRy",
  "key25": "kKW2GnGTzoB132pFbTVcVUJXKdZciwZdPkYi9D3eXeR7UrTYQsDYFTAUqbtZdfaxjs1JTRAiVskbrWTJwFicbLE",
  "key26": "5K3sAAwZ5tKFyFmETMZ8kDLiEtXK1X4Lv3JKyEGTjroBS3oN9mp7gBh7cR1RdGtZTPtBr3Ef1iCZcEnyxA6x3ePd",
  "key27": "zQABojybe3D1LxEFvHytCkozH4kWJhM1qxc53euF5by2FnEhN8CVfEAhoXs5tCi4a8Ng8wjoxCaNSHjZyZqWECN",
  "key28": "5M56yKY5oZSizej93Fie98fPx85PzdGqiDVYdykNBc3p3ZoFCocoauirrqK62M7hHd3BeaE9S2L6FpsFwtteaCyH",
  "key29": "qUficqh4bpRMYtQCGhdtfdzMUdkAKxfDL53UeenmNePjBsD1exhNkeZF7FS8ko8jQsMr7EJr3JA5A7p3DcP7cHn",
  "key30": "aoRifnedkthxTzoEFWz5GVWza72BcWSpZ27Wi7Bfev3UGxZ6ZqmD7rrSoJuYERkoDqHurEozgx7qtE6gmdZxKX4",
  "key31": "2iFF2xPnnYKeh55WgaAJMxhWyvSkFU1vNZdwc45rkeisE5SwbQY7vULYPxGeHGM6qXsXs2udEkiaHujBvnGT1oKc",
  "key32": "UzyQFiC6y96ViuoWUWWwnaZpVuonmnXyTsu1YH25ve2rs8KESMmYwq5XmMym9FCLeMyTqGANVurDbJYDkhb6KbG",
  "key33": "2RPXYj4fXFJEJaZWWLTKzxjBTsHTTfWXzttRuvmKk6eaWRBKiVhoj3jL8xKeWiNp8BLDNVwc4d8yVdWkLXjF1GzC",
  "key34": "4yaBdJMqzHF4ASwcnjdnRboSHqvu5PidGqLhiqZS4VhZeqfJSoYaKjHdSnv3bDZGxxtphuVZ1VTycyg9aNRr7iWT",
  "key35": "5TjanpFSW9owEg6FUg3UDFvFW5y7YWkmL4gzfyLH7rPZxfqK3MwSBoJ3vHHZ7hGjmFqgsq1DGcZDkPrmbbSRfLsJ",
  "key36": "5MH8moMP4wMpw8V12uLUK8dKbB5HLA5G9437ELhPjWyeWBrM5avfxCckgCAj8SVTztT3of7cw5EM3nWCoGUCQL4R",
  "key37": "2WP2TitwqUtNh1eMpEwuhBZgFEv7nSZF1ij1xvK4frf7xidgGpESuMc4et5ozf853rMXHaEjio7hg5vqdKmGVNh4",
  "key38": "4NRTd7sh2DJZQ88XkHeRn9H1oK6HLqHq3rVnHMj6NXcqbEWz5LSAGoF41X7zPu7j824jZM4fbMgSjLXgmKJRhYYM",
  "key39": "3LAqBXrPhDq11z9edzWwBiFR6TqmQD2W7XreRzcJGac36e9os2dqWmdNdke7aMrgJ9p9vfBKcSndo8wUeQsQ1oaX",
  "key40": "4yyvjjT5iC3pVep93GwAtFndbWVPMsugpfekjXuKbhxtYa7chwrFCketp68MVuegiJQr4iBnkcTgYxbDyzru9i97",
  "key41": "gTHkaGZJ6bfrmUJWvx7hARcErgCmxBTxzwmb4pvR2sAPvpDaUdr28PBa9vFbZhTDFnzSUtU7Dj1CDWf7t4KDcVX",
  "key42": "4T58UAFEc5sgKdpe8UiLdg1gCbi6HmezD4SGd2mc5rEX6GGDjNMWg6BcfgUUw5PcXhhajhzr6xnriE7yjM3aScja"
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
