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
    "5TokAdmtUmXD6pkfxwWvUxWthm67Q6NaAXDZoKabMRhCEzQdLK1s66ovKoTYW4XvC3aybMiizm1sjDF58CBN3KZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42Q1CA3dRuNQn5pmTKkZ7NF3HF6fU9vNqXaBu5N8qtXwJQwGkKB8EnJcQ3e7v1tjeRwrSfFrEafE6eSmrdFNKZ9R",
  "key1": "2CF1qUe2qoFRTJGTqnX1GCfXpdtiTWnCGkZS1ac6xxgmwjGHNs5HrHihLKvHHYBpaD4UZjxwuTASNCb2Bok7hn3Z",
  "key2": "5YXxURwGqLDjaSei7HoGPxRrpHRyQEmV2F7jctSrLLgc2uGAX22SR7GoCVnX5cUh6CDpzBGvByMEjvxZt1arTee",
  "key3": "3mWPVkPpjsSSPzw5gyid5QqtTJ4zwBXJPZgdmXNnX9ewZq3LBYUTV4FyLa4k41oEHDF5Yz71ruGaBBGt7UHkN3e8",
  "key4": "3Cju6h4pGUkwMnRAwtMkEbDQFaTXUHqpFbB63SHPLYbk3DCtLNCoNsDSmq9rCQ6M3CWScpj3WfJJ2hNqKvfr4pBL",
  "key5": "N3uEyxcyR2AupCWEHqQtw85Xhtjx5m6WG5LYoZG6Hu6NPFZDB77ixiSTC2rpoGTCnMfm7oTQpkfggTCCPFJD4ej",
  "key6": "5FEVWs14GiFm8GnFb9gHE8Wn888F5kpNPUX3UQC9HXdNEuisgiZuvAFBJ5vWMcZGp4u5no87jwZ4KwwT7k5Wo5U5",
  "key7": "52tH3yDTzbv8EPNaLqYLMy2eJqtXuVvxbc26nZt7uL4Y5nxmrztwLUSkN3AVLdmkRThQjadKv4o8jpEsqvBk1HQd",
  "key8": "5dNJWP9iA2GWvETEuGjV6d5gxRLRhKMtLbDSTiZ9FeBJwYHotTrnDHgTagfZRLAL4yHtQpqb1tGwPfkxeWJqD8og",
  "key9": "4T8Zg5kJtMby88rNsKDZyDZXLoAZ21NrDqhWRuKngBMD7HfM19euSB1B297aY2RatsE9wT28Ab6VG7yDEBxFiwUA",
  "key10": "5JxxbCNAJ9wfD1nKjMMSkAPiAd28Sykt1B645gaTkN5bAAnapiX858ePhUrZvsRwFeZhCxhvtXWFKMyAChUa3Hig",
  "key11": "41GbsbHqSaPX3Dnpw6FynKeqpG4dLmNgyJzJ6RrhRCH6xzGsgmnDkdepumAC9k74XthTuuKiKhu8jUoWAjGgTQp8",
  "key12": "5b1ZvuT3gq8dTYUfobCt3FLY6AoAUQKuvatJvqzjusNPhTsCjtPRnL8W8CaAEW3XcxwHvwUUwJwTkSTgXkQVzU7Y",
  "key13": "4WQjDKsgYnNSt4Ao4wQgxJtA8ByaTcEA9FHSVLHuTY6krvfkosiWMtBRTbo5vyDaS35WMcFoudLZJ3an6yhgcUZt",
  "key14": "2YSfXKv5zhRHWpDXz4LFwSRzcY1GwuQs4sUVzJsui1Kqs7FeFcTtBMAWTaR2ArFo32syF3PiDXBKcngh4qknK4HB",
  "key15": "dSM8AteFCj31JXUrg9EpwTUPbctHfBQNYpZFXW4A3ui5Ai4M4dx4mKxi5mpZqDerrV2avb6UXi9KocFKL6GUdHx",
  "key16": "4yJzQeBasxNdyJt73WjHxcp38nLUmnyPH2oUUeosiPwJoegSgzCSEJa2F4MwBU8fSnGYY3AR7x7UY7g8QfLd3S2X",
  "key17": "T8ddiL43KBX1Jw4RmayiLDNfsFDX66BnF9UraEkWFtvuSPKiEDwHRAUPoZuxf2ysGv8PcXL1nwZXCmGfziKuGAQ",
  "key18": "5KnuxzGeLkzqM14KrgmyMQScHin4kMtUQzTvVa3vus95n7xfkK3354MV38LZLwJ5uQdC8mEyKN9H91uqcaFLLra9",
  "key19": "7WvAXH9WS9AmBEq5v89Weg4LnB1tDDD6Svzi4B6YtofShLJ4VmoYU2S82PYLWC49NJ1KwaCkpgNDdbQXAd7mhBj",
  "key20": "3HFsaMayhrDRNvU7DtWfcCL7rGUCGV1sQHM3eWeXyRLmPnErKpwJPATyRq49shaqvr6S8f9nCVXfPdNkfbmfSWUZ",
  "key21": "5CKXhqdyYFdrgtDFLkE9UYx7t82NniNSJsiwwBtPMPjcir3CZj2SkWaokGC7945F91kXC2Yvxxh6RnSEVxBQiNoV",
  "key22": "3vFudt4DgpoABkBV1naXqy62Q4UsavjwBvCBjpEruYFcbimA6goCheqCcDA8e3EMoRsx4SHguHdJKX5s17Y3Fu3r",
  "key23": "3HgP1mufWRwKv2BnAD6rFntA6DhnVAj5a2HfADAzuQXBxpzAuQ3PBLUfJojueQZpywS9Mv66AxEFgbFUa7F38UBR",
  "key24": "1VQp36SD9VMqfdgbTQzJH3t2AenU7usMaxso8iMNPBe88ZMjgBNi6fJ6GPoraWyUETjVAkantzWnQsqs6PDVsr8",
  "key25": "4S8wehvvj8kiBEPkoKvK2UjyezRdE5pEdYixJPRRSuH973JzuAvcrs2cWnLwzEXcD4rG9yTnkrKttWSjsxorMoH5",
  "key26": "2ed1YookSQtTNjRJLLsUbtMEZEuwjovqTgsAfSey6YSPb8oLwNnqfYWYZRg6UiLGcdM7AFEuqCURsBSsHpqu1CCG",
  "key27": "4Lj2gRU2Gp2Rw52wt2mQhTCBtzctE2Gtqy47G9EHhXz7sW3arx749Tu7qgU9rdN7BvkTHUZ1r81SMa9CAtoFKZVA",
  "key28": "5cZMYNgLi3c7YGqSCnfaLa3CDhJZobwCqCLBnCT6YNgnjwx1Kzk1YDmR7Fify2xftBCXjYHR7ps1WZxUasxrN2dS",
  "key29": "3n5JwX8biUFkca6mh8F38vXfaUtP7HqCgShr2cEX5e9bUZVmKpEgwv5eEHpetmw3HSafLT7qQdz2eenT1GoGp5HL",
  "key30": "2V2PfwwP73QBdCrcvF3Xx33rhtHnXmJiCn65CrMmCMRkDcxLKTzjh5u3AaWfDJ87j2xdL6nkaabR9QTXrjMzNwoT",
  "key31": "4jxyZqQ7QB7wmeJqesG1ww94eBCBpRS6dUbCqYCfRKc7TK7nAUivY7esCf1k2jyyqP5ypJymFcXYLYReLjG4gG5J",
  "key32": "3spFHrHJBNCbuj3w8BgGWwmsjrXrG7cQJfVqXTJ6hVBJn3C5Qyoc6fbYLjsEHMTAoayi8gQvXLDHv3vEnAD3dgjL",
  "key33": "3P7PyYawn9U92mFDXv7REyhnn1RyvziS1RdJaUnDQiS6Jc64AQmdW7NDPF7YRZK164QZQDjWVA5UbUHY4C5tiAza",
  "key34": "PvJS89NTMc2XGTexhizD8Uiy5BzUauLr23edFDA9UNT8Byf3cFPxTwV7uHSgUepTLWpkydiefNFwf82xYspfLjs",
  "key35": "4TANhwTh2NDND8FBK5HWphw9YmmRZGkgPB2joRHiq4n55ijPSEMhVTubcrPtFkQCLDdPXnAN8JSzZNgRqKntZy7n",
  "key36": "45v9KqcXcLw3Q92e3TfY61q8ugxog9DyfB5aUYztrqv1WvJuvZYDiwKH37Wz7dvV5n64MmSJXJZLbE2iZDxSXbzN",
  "key37": "3CGAjQ9RiCo7MHzQazF9jVGgqqYrJLqRzwugGTZ4QXRjTHd6WLxpzUCNhRUKHDzwxNU1eVCw6Lth3A4UUiTjdybp",
  "key38": "2XjTCKRncPh8pNAiHrWqzmFLEn4au6zatFwAzfcf9LhRnbmQHuBmAHsYiPGtdjXBr1dfxu2wVYTYYwVvssufrXRQ",
  "key39": "jRQA3YR5RXaHPefx4cAWT8SvamyGMf3U8sC1DMmr6dn55FHcT1yHroCkb6J2VMqAUm8HiqtBEfWLmLnfEKZPE5e",
  "key40": "54kxqFH1X8Gn6JYxHAAP1U1Hem5H2U5HfU9dVUhzk1bcGH9kB4DXrjzzS6L16QBnhmLkUsdKUusfi1onvMqzJRTu",
  "key41": "4mEkbuLywoY6RqKbekVUdoSrzcFBHAdQrXCRTuW7hPBiPoFrQF852mex13pynq2Pjse8kyqRPAyYufgVgWiU41Hn",
  "key42": "3kJd3iSZew2nTcUvisELCt2HTahAQzByQPQrKkzCi2z4C7joEN6ENpfcPzZ6wLxtLy8KZdkfwsicnDQEoh5SP1S9",
  "key43": "3aoLo8MLAp4tcr9qjhLAzRuRRTJtq8aaXhD89bkg25D2NjRYVfUhdgRPBtuVAgz74dw7njLfTwGrcfhucQtFSk6z",
  "key44": "3qMcSuSkf5ToENrdG9EmsG2AzxAyZsYhDpMhrYbpr8LDeZDnbJYV17jN4fPNJQ6QZvd69QqPDYESWGdXFCxPoMte"
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
