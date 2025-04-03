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
    "VQLDvij6qZRacnsSnjKMFabsDR9tmsKgD7oBPxGTec735UkqRb9rydt956hWM7JRetpzQEXmRk5bRjW9io27C3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hNJtm2WfFXoKHqWapf3wMrVSYQzhgCrs48HTTdTErkBiKVEY5cw6rs28jiGN9epqn9sasMwXapunHqTpT44b8q4",
  "key1": "32RvMpUT8o84SWMmiqU3SJFfpfeKmJupBeaPPEgqLrgvZ2c3R9qbHVA3Gs5eeNjP1UyVsuuy9H3bEa2cG6yzw74N",
  "key2": "4nJV8GtYVAMYN3bSnwU2vq22LDwijGjNpMNVkBd7ZxFLUd6uJDGhGBCRP5XWVjnegcZ9QCcK5nsnqpEkTnjq32DG",
  "key3": "3DMdD1BYgekHjvnmx1afJKLN2u2beACnQKz2PfwLgXfhRXdnJmoHkR5TygXuqrNCBP5oKyaXbSsg5k1skEbCEGv1",
  "key4": "29Rhi1Epr4Hfw5FrTWsVpEssFcHxJhLboWA5wBwLCNaUqD7cZznFVPNEXG2nFG2maCBVYaxRn7mwgTUVV18gK52z",
  "key5": "EAKnTGxywRrAtb5HoRDFoCGztUT9H8Ffrye6Qx4BJxTtr7Dfyv7NfrPSfWfvswuMgfNKBz9LoVV31KZN8M3srJC",
  "key6": "VkFroUqDWJWp5opAUzpVbAaTF9jnQo4NkXWdRxH28SrwuU83LSGPNgZ4rLyFbJf5QQcu96uZ45m9R43z3mmWn5R",
  "key7": "4b7St5xWCSyNZDa6iMMPTdJVDQEgbFABrvgjmgVrxJuqFW5yX1dWtGPgk5y8c5XsHCv7zPrUASHKsbeEXwCR8msQ",
  "key8": "5gTWaybZf7ki6NyhgTG5DZDxuiw5TonSxKwgh72FNf179Xut5psddtkZRzA8y2wUmdWQrqZLFbYjkK3cNBT2kKA6",
  "key9": "3Vo9GfssTSRGBNpMVBi5A3VFwcpHRSjV7Qk7tVpPh5wMUGRcBnhdacdNjuS7CBdNPfNFENtSsEp8ZkvFZfCXttAt",
  "key10": "4zGg9vEKzRJSL5wrNH3HV2d4aYhEnXUieRmLK7ytCkwmDJxzrin9eU128dqfiZowAzCcCiFbSDVxHn6ktmerv4Gj",
  "key11": "5cBa32zidfg7nzEQNGJmx7JeQ9yF7LGPgf7ucBet1Fpb3Xai77triQkbMg9GW3C7urnsygt1eCvSW81oc7Dkepo7",
  "key12": "3wdidtTLwCWnKJZoijyhMEcy4CHwAC1o92eznGTH8pki6HtaGCx6MtAF67daHAZWSL4hsMUyY315zSYeR8uFhf7o",
  "key13": "2B9PAHAF8EB1cYG9jQsrKLQducc2QzbXfuc1XFzPLJ6YeSQPSpZ7bfPEmFStqdkVRrx8wSuA1MFPDWsaivSigbTu",
  "key14": "3kafpMeQw17UCeQwTrrb5hBCwbjQW36ZdUYAZmg74CGqw8gqDdvXbYqBY8UcsH7UQ75TLP64FCui4J9S4rsGiai7",
  "key15": "XwRoTKjajBzJ6Kg1XUqG3JnjiYGanEmBLVSbb3owGDoxJKeKwn3iANVyCyFhgnokxoFygfhtRe17YzayP9YsC8p",
  "key16": "QRbsG2xCM9yK2YuYeXkMS536WBJvytZf7zQY9q9iZsJBziQGuUhBivekGZJGkogogMBX2a1xyfbuLi1wTfH6ecZ",
  "key17": "2W7ciYAb6kS4DcqHZAZHR4zgkZVGDJR3RjErZCWEVT5a59vimqYLWbMAYkUtyHGEAzsAWbjZ8852iFytrtcQNrES",
  "key18": "23WTwbafoLhDPFXgEv72NpKC8kgg7gZgRygvgj6CUuF89sBEyTvH3zmyJyigeyJuAKRjtusuY2UB5sAuMpBGeX6o",
  "key19": "3SLqrq2md7BqTKj8ynP64syK9XfWJ1prztXZk31wKuFwZJ2abSBPGG9MA5CjaE4w6wDkR6uSpTPBjwrVKFi2Vf5S",
  "key20": "3FTsoe342QpL2o1yGAy9h64wmAVnza9za7Sv88WN6iF3NwnxdeEpKYFa1VWikttF2pNL8VbMojQAnX9NVZ4XJXnh",
  "key21": "56w4g6LbAkWGzzejrMnSrR1A28dmBsLnzRiXVdkWwepSB1UEnYSWqCcrTBSuFnm6ouGBK8KXDjKe6zi6raA9pyQo",
  "key22": "4vny397fCDG7pVDmuCcxuimJYNZdf2bCKgy8Whcyi9uZbKUvE8xafffDAT9GnnyLtdLzXN4BbA6LLj7vshB7RwKk",
  "key23": "2n99e9pwiwirNBSvuvCBmvXX3CjKUVwpWsY5HigjpSNSaeZgW4ZZB7UBjNW5h2LZY6x5w9co3Yv1KwsGkYYCZg3i",
  "key24": "2kB1PCdvLUsmkyZ47gyKkukzAYrVcxMu4EJkiHtrszNzbNKQ3eFeMAvsjeneRAzeqowxQgkSpvWffVkDQstWX2ep",
  "key25": "2nGUXv7VLugcK1r8H1JsmDvP9JZ4Ye3Gg3sGsubtYrJg8c9MjtLD5vtocCEj1ieTkr26j7A1RmxQPHqh2xdV2X1n",
  "key26": "5N5vBrBYL6uNC6DniSdyiZRzJwUV3xUDYsBTFyZLJqWcs1tX5QgTXs15JKQwhfvkoFeZcS1kP6ku4Wn1akwsjPXN",
  "key27": "2eKP6BYReV3KXudYMdUBeHqt4KzHvQvtgpGEAGK4i7fcbCngLstZBw3Vuc662pu9A6eD6YmWAfy9jNdVwh6WyLkY",
  "key28": "2uQwDuAkqYEYiAXwWGwLFFQ4Lhua5MYw45TLJWLdJSxL2MP1VZTdfYNNxZ76kLJbEVATRtRg9x52GMUXmcU4DGQt",
  "key29": "hrpX4hBnr9UHnEnsUkmSxWawxN5Z41CYtCk1BNRup41SQ3eoAXPz5i65axS2ByWbn2JLuj3LyeNgssLscw8tRnP",
  "key30": "4sRzgrGwJUkh7wVT3MSDdgNd95vyCqGvxfLJ3FXgXBA9n8ommQYc8qNzDWPomc6QZrTBfUg7UdnkDEWBoD6VYf3J",
  "key31": "3uKP2s8t3ZeZZCdJdppMRkkLKsu7oG4aGcmPEht4Go3nQCHQhmU88pnb1fvZEpX1u5CqR5ddPNgiL58renKVxdzT",
  "key32": "3thAAHVKqLg3reRtWKasLbwnh4fAKFPjyBTfi1CvpxoWv6gfV5dngZBMz1Bf9Bss1N167jfpnzDasH3caf6hwMK2",
  "key33": "3BxgvPwoBjgP7adByGYjoDt8FaoPKRwLNKCFMV1pRqE55fBfe9GtwfXZniAmpsJTTLWXrKN8a1bBMWy3wypCDSi5",
  "key34": "33tjqSWWgX4aTyuftHg1sPv7YFpSaiYJUjDYih6CtFoFdRt4c2dsNSuwUidV98WdL9myD7GoPdJYw1yWdBZQttte",
  "key35": "3hfewYWQCpxCv538Wsfb6PDwHMg5nmydBC31iinhaafjahW1dK5xfFfU6pThEj2JZKxcL8uFM595fizWg8trMunh",
  "key36": "2E9ih8xAZp6KgGNgR2Tv2z55KT7ZL7KGzFPSiyZxFpPff5gTdeQxyo8S5GrhHohyGUhrAcxpfrhXXqkHeD2v1r6T"
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
