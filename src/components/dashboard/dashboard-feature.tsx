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
    "5pphkUNZM6N5vvcAJcASZWy1bMib3d4UXvkcUbnp5UUaRDbC3iproza1HTVSG2FtMRV5793tuqim69asPpoJ4t9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u1KduBxnATgyWwoHCo3aDWGh3pDCuuuF6UctgzApHLvAjgH5GsihoX2kXKDcecNpzDBs25MqDv747A9skRgu9L4",
  "key1": "J4JNFP5DgnsUFaJnu2kvPVGZHDXiFYhP7cxThVF63XhAiLTqqCW278CfD3XiQaTzsdtvKApmxe49bBjFko34pY2",
  "key2": "ZS2s5zPBwS3uxZ7yVDz2JqAd6viKPT8VMUh3ffdfQDzaTZq69uza1E3Bzs5jqhXeg6XY47DrdTboXucz34okYX9",
  "key3": "2uDx4nshGQ1oR96Lxx1tcPGWH5AJr1o7EkivexZEc7EiHDtzTAZ7ZworgosTizzGCeygN2apmr3PUti1aaACTyW7",
  "key4": "5Bv4FbbXHFoRFUv3muon6DZnGAv5XdY6HKBpq4aUnqJrKofNfZiGmP4ozhmpZuJvrr2qStGxip4oiQxhMcqgg4eM",
  "key5": "22gE72JPaLMDAeVzfCo4YRGZp87q9Z1mnbVRSLvAvzUon7usEjkGBRqP2bswp33DhZKYUYDRYM6VZVJ9GSAXiavx",
  "key6": "2KpqMGTiVjmuuUzBdmuTXvqfBuXvrv26f6snM8S8qFt9q1sdnezJFBFM4hPxKkwziq5UPVv4wtzXWtAL4MGyHYHw",
  "key7": "5YyTgHfN1QksYjwpoz2KipwnpxfMLRqRniM8u6ThUQHEkEy51DXJntoog9FriLGb23jfD5Vgzf4YT836JCfUsCE7",
  "key8": "25HuYY1ehGUw1x2yJXdPbrvbtAqDRW3G2eoWceTvPUnzJVzG2PAQpY6avmLixcDqGwMy7Rp35rfY7V7Hhw88hEGk",
  "key9": "2nK6MQ9FyjVeBbvu31zqvyFYFD6WAkAMfZkCpf1xTBC6xwcN6Tev7BpVfTfUP8iXXx1XFMrVLtpTa86ceQSLQKMr",
  "key10": "5DYhT9HAiMMm65DQmk54vA4McQP8m8PaPvhwA2D5hGcqjZcZqHMpRYMTiUMUna1J1as6Vw1uVRBHdfmJbfkkfzE6",
  "key11": "5ecLksCVLcdAePBdYbapsiecCpLWgKUcD862CRCBA7YZbcdnr8NwU3EVzumRGVXdbLtWh1RnQKY6NoiQrPEnvuhe",
  "key12": "4mqvCpXWS3KTNE8jS5F9y54buJDEVAz68HYZ7QRh5LvdoZk55GUET9yzLmEeembGhj8tATgUETijG6uJtLa6tHM3",
  "key13": "2SPA6LhdX1dAGdtgAQtZjPa3hdpnU8YoduAi2Txn3Sh9xBpEk4h3PvcLcxTKXFTSH8dEBMzz7wNqZLRAJ3NXf6Ys",
  "key14": "M3wwv56fAJ1PkrGCM4GVv9wU2tPzEdrR8RAA9WkhG7DL7LsoEbLaBynoKnCCAS2bZM1wkkpxjwmgLYzSUpJ11eo",
  "key15": "39NeasE6A4LE8kX6GVdqbRRRL2E24ueavqcti8h5KXNx1uemFhkpvMCHHH14CMbqgpPJbbBVKCCs9ZrRXXL3beGU",
  "key16": "3pmjoDRGitRDAPpjAcR4xgL1nEbeQZucxz9qUG1r4qjnSzkuw7QiLeaPwcKPZJh6qWtdg2cmiLFbVhVGGV8XE64m",
  "key17": "4DGG4aG35jrvcYEMchshvJ3ApCZh1kdP4LWAtMqkaEKhFTgQd9grcNgugYsyMLnL7qNsunh1UTFYw4EpwJbtYJZV",
  "key18": "5Wj8UsDYpf5mRXxHvcVsW6amhD4GDPvRdoqF3oGU4Lj3mK3MUEahjBVHQqR1Fb81bGWNS4XgzvGqidg8PYewUYqw",
  "key19": "5J7mYDFHd3BxYiQNssiSESfdCujm5eRfM4kgVtzK9a6vMEpTyGbCD1YpHXJUbmkRVTYePyTWjLspyd8uTeAcyTQg",
  "key20": "2UMbrDcjoYLXpjVNCJRwoYEvuUQKvBTCPR1p4f4QsAXktGgcJTJApdWrKSHV229ivE7LHUxRNp6eMAUc2egAwXt",
  "key21": "37DmX1iQPXeggJzJpn6HmiwtvehTRKsW7uxhSrPbcKRxahtZAChHmaHARhyKrQDFzAKgbcWdymaNc2DXc3eXhDB1",
  "key22": "3s25NNWhYwM9YrbjWY27C7P2RBCsUAfXaPVHuQvtZcSyZfEvUn2MRPhzyVUQH41ujofxQdj9qdisXWuiAtiDTJAp",
  "key23": "FC3AtxBPuQFqWenrybxT6um8cAUeU5AP59BnyXd9dAzCTtPkRgKBuCGqmT2ZwmpLhPjfeXrXwYNZBHyzqc67ob4",
  "key24": "2j7ZxqtgWYE6v8jf8pFxhoVTvtWcASkMY7jTGJRW5i3VH1HGRXTqtQYeSgNXokGAiUfVXtYKKQL4ELhFXkqZcp4t",
  "key25": "NwLo4Tt8GJGL2d3iifnGukdppTBiL93gBsoRNVBipjFuH1Xiirm8J3X1GkzwkAtZkpF8tWG4hNpkBpRrLRtgDTu",
  "key26": "49wrnnXMCeuTReJEzJCKSJ8NJtwbfEdavp6NMX2jXi2zQy5pffgZYAk8Mh3BTBoDVZQ4orBQhFUDHfMm72HdQoL8",
  "key27": "dTkADmgwMmfBRWGLHhURAbrKyoZXocfEztSrtYxMtgAm5HpMFm1jkXW83UkTRju4wzay935TSVw4KaCC15ffJ4B",
  "key28": "29Rbko467eyZCYefma7hBngWDTGFmkuPLTQtAJkWiNcmN8uvnWAP4s2aAv3Hd9FngZYfNSNZefbJCyzvUzSDLYHq",
  "key29": "561my88KvVALhxqCgdca8AANNQySwbuZ8umBVG28apZaWwErSjMVisCxwvdhsjRrKjwnRDnPSyxf8sAf21aZACZy",
  "key30": "2gDGtYqXUkYdAX7QqhbQ8LFq4gjiR3JhkpxC3Snna6LszNBS4LVJ6smZwRU4wzUX2waGoyRtWQ8pYAE1b1yEy5Jg",
  "key31": "2rrfS7bsNzYRavGwZVzef5jFQTYS5qfqfseM7VQcF58Xhrdixf9wZ9XxNML97ccbJWLCWteoiH7TPFv63Xy5fMQd"
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
