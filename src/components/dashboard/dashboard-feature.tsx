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
    "3M3VrFxvJ3SEhxki2aXXbdfXhL4VrPTveZK7qdHEj6mtCxaftnXR7GjqCYiE6DkfFPjxc9TPtAm9ZuoFEHAATWhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63PjkAVFiUcUtPyc27AubMW1CQhTke2oBToHh5yUZhZQdoteLZBKQQsuPjkBXYWNnQ3dzEf6PTqeGaepwYHrYrM8",
  "key1": "3aK8khHfjwfJWp16rjg3PrWmS2Whqh59u9XKPKxhpqEFnwka1iW5FgwoVVwQiAvDYqv2pxRwp3h61HYfZ7fs4QEN",
  "key2": "4dM5NHNAQUpkrJ3UtVBMvRziZPriXLJYEQicxgS1kQUwFswShZrqXVTWMcauGxKTKqBYFd5RcAajX6N6XikbCZdh",
  "key3": "41VEGhYkkYcsqvYmCbZw1gii2tMqQYm3GPbeFbLD1DhSBWcUck5L8nSfCsu1vjVeo9AkYY2HSVcjQDEkJ28aFRnW",
  "key4": "3n3fQ63yYmi6kfJV5e8P2JbGTsm8MBfVdYZ7VSC8LPDBA5y9ru2NF9vQU5SLTz2giXLn1UPHUBwYBokDCw4rN3yn",
  "key5": "kmTFCxK3uwszPCjykt1UPKgHBqMFGJpq2hgCitTFTKJ6zf3ZgueFH9B1vCuRDW9CUuqqCopLXwsVWCUNxPZBQ1b",
  "key6": "2yhaBdumLyfoVtFJTPxXAXDfCrLX1AzGdkkC1BmiSrGrgL76x2JU9cmavk4Qe8ewZUwmKytUDf1iHWLShbE8wufk",
  "key7": "29G2r6hWV2e91qqeUyJ399GyTC3zsvBdj6dosR779gXN4dHRzyYRyrCFrUm1gEP2BCoKoYnGbdKDN9pDEP2K5tNa",
  "key8": "4PdwB6dPZDx3kbNGcKwfpYrtTBauvxS3jgosU1DMzKqLALt6nvpjnK869XTGb1xoSUnfs1hmczereJ8QsPBkhSpQ",
  "key9": "5sFBjUainjb9S1BuZtP7gQXkDqNxkvQe3A5CjnDw8fNZiCVhwvipxtqTxiG5AvbjaVeN1bLbEdPDV1sLNZDuZUJn",
  "key10": "TXNUFKesKTgsnTUa4UEr7L1h8RMi6vpfCTjL4amQUmcJ6dVZUZ46RW7wnSJXKahkZE7fYugoNqpDeBPwWoGpNiN",
  "key11": "2mdSZtMRBEAxjn2RV9bBPGYzX4i7jGDDeYWz3pDJ8yZR1WNFXEhVJgMfRAV6agxQmQAqQou99kc94wKL13cf1i4h",
  "key12": "3QwMgUzTkACu99n8E7YA3Wjv6K8nv28aZ2PH9c2UodYhSCnsfRCkRpvH8CvC8iB6PQCPFiwVgsLHxzoXV9B8hUBx",
  "key13": "3ZGhQ9yyvxahGZYSDKXbKvdpWo5m4QMKxQHyxSoAxFKpKxToKHijCjDncMJw53oXeDKVYejKoGprcvvQE74RsTQ6",
  "key14": "3ELrcSAvyoazn33Eu7sNWnnrgTb1VeUVfNbErkybsQKSb7Bds2ZSy7s7Gnv1JpG7k7Y6MCW9xNSNXHCvW6s64bgE",
  "key15": "62WknAEKSM8mBBnpkKha1p9cwcWoG8WCJquDwdNGQ2ABDS5EUmPLPTe3TNYrkeME4KZV5HB8axJEAPGUCNXAa7KA",
  "key16": "4Nk4EpbUeCWFVuGhAUSdtSPHRmR5z4asunW179ZCbdWcFA3wjPacNrg4jZjka137QxhuRrZ84e7z6hKtMiGLcw3v",
  "key17": "4eZtB7oTABaLkmhGnrHnJ57mZPCYWXGpdxf2am2sDGmknN9mY7W6bpjJGsT5BHh7RLw25zEvMXj55StADVY5Jx5s",
  "key18": "2LMGWBbQHwkMw92HWrMASXmLGV7GZ5KNQS53mBfhsiPpujEHwvQJhjcWc6ToSamNWaCcKrBz1hNeLVT9hdXZ6GXr",
  "key19": "4GSVTYiArSzu65An9Uwgir6f6n27cC7iDnhumwAupXJzeN9me847hhY1qgwGd8ZobTLvm967tG1We4QsDzzw9GZC",
  "key20": "4gcfE3jMEQrxSf6qkUfvWUPt3UbaRrjBnuJnCU4kuqqYg5N5jfhqukMVNKh4ELF34sPHqmB6XgLUfY1WyUUBmWuU",
  "key21": "2QNFNZAVpseiRqVSvNJYpjCWnXcsF2PMUxY8gNbSQMaAG8na4jiw7LDjqjekaRnDnGhWcij7te6xYSpcRjP7dfqu",
  "key22": "5KNm6EqqWeiioigmuiKdfnEVCt6SDNoi68pqkP12A8u36WZPGuF5ti25aKmzHJQ3fTUwH1EpzP9CVsGonuNt8TLy",
  "key23": "2g9rgB4bYQp2bYJ8sZB5vLmgsFu5fcYp97wShgZTmSBmdLpuZiyfeH4LnE7cL7hYNu9SPASUSYxos2iztVGHpiPF",
  "key24": "4eWsAA5KqbeTuBQn2FS8wgVmhiihRNQcyyt8rrzCSCyEMNZmJFMmum6Xd1oQEJX8osdykGJ9FxdAcQVHdVoHrg3u",
  "key25": "5oi1uR9TVR7ZzV81DNUDTrwx5CZJ9o41AUuMyDWwUTic7dDgNgvimCqrRcnfkAjtQzxKvNswb7Ma1F5ZavnRo5nv",
  "key26": "5YS4S6EAa4hanLBPFcvWr4EwgGom43xsqjHzbByZjkAmf5c6sVnQKDJUafPyiqBuSLHYTeDVK1t5B3GvQkwMu5Wp",
  "key27": "9MhwKtFARuXTDVV5qbzi98Z3whjBgdp8zHMTPEhCYNqXGLm6L6xcPrsvuaWqG4UX8pi3WsTnCBXJEMZyqupcue1",
  "key28": "2UssojsM1K6uKtBxFWhRCqCJ2kVAVNsnm4vcciq8mx11rZuP58wnWzf7y7DpA7tg8TMuxKK7DUHTfMTJLo7cnTh1",
  "key29": "54kMzchyaUDD6G5QDuE7HBie2VYMQm6nuaTuyzgjG9bEKvaieiQzAT8f64LSP8T5xzy1sEeUzT8fJW2HjsqXUQPr",
  "key30": "23daSzySSrLvuspaFdKA6rP6d4dvPKnRtRgdzvb9avBkn78tHAHXV2w8FZQ8qgS99fpaH93g2ApFsLH59PFHf26d",
  "key31": "4CdpVAuFZHWSaemVDp8mLG3eW2MGW11ht2Ut8uCtTQtuA6NGphx7eek8pk3PoMtBP7hX1KP6VyvdYUjfkRbdED1m",
  "key32": "4oWdx9adkHNgogAyZobq6HorR44NeyfkXDRsbBtaMUG6sYrmLP3FwisQ1hipS6VyxoyCh57Kwdou33r7Yoc7txy6",
  "key33": "4savqQi4Q6fEdgi4fyuxFSTkbLTrLc5DYtvLNGvbneg8P2Eft3PjaQUGAmfpF1unaHvcjuLEfTTAfWRSZWkUNr98",
  "key34": "4MGsem2knX8zqZK6TAjyGYfr5MAvzwcYm5w4PDaqK5UqpwZ5RCaKmCWMveRTxLaz3dksnUEXCPehAQDaXPQff3Ax",
  "key35": "4dH3syp3fJvpv2HWuMfFTzUgv6FHgYc8x2HqgfAt8DRU7QS7CUFobLB7nEu9Rib6rWFihyvGpvNxWTvFo8tRyaHB",
  "key36": "5WuLdcxhDUa25tnsXRGic9pi37tAm7w6F6VK7BxqnaESpw192MhX48CUVvNqbZLgcUB2yMXvDWPRukLtWg2uZyUe",
  "key37": "5C83vgGDvUFcEpd6EgroKRRXvRtcndnc6Tam9X9tLyT2hZTMMsAtJNdhuPdJnEzZogyTUrgkzBp3xnGYWHKMLKQ1",
  "key38": "5aEe6H8Jxb2wSaKsAX8eSv3yhsUop9ZbcZJp245g8TLruDd176xjwpq5qZsYi33kV1pSpRvkBS7CmJ8585uapvVM",
  "key39": "3uyCfUQUFknrA5EbVjrdbJLiCDwJw8ECQ7xyhkmGdwmGpgNYJt4WiHpbFfEh4MLHoioD2eLDGFZcndr9the14dF5"
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
