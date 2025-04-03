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
    "5eXiZkUqt2ewJXWTSXBHKMT2dVji74hZQDMZXGiXtmEhAo2JDayUV3fbAymqmxK73YU8z2tYGyAPSXfYemP5kieD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wQL7bgZPPEfB3EuPMDuziazCRnw2euRS8RExUoGEMiGdBWacAfYgbRqxEMZudJFPy3r4Pak2EKfqBDgahfQVUDb",
  "key1": "52AEBo3z81JtpeccdbLN45Ed9Yn1G2mRhJiefyAPZUK4dKfuthyMip79jWwA6xVT7EMZo5rAB43UQ6KxW9iTWshM",
  "key2": "5LngzshAN9nWVCJehEu3AjD9McodEPmi1y31Ug8nLAjxtwu8K61H9oefzy67LYxKobcMLz5xt8aoCZj3kkKyhZUy",
  "key3": "6uY9DXRiRL4KSmxwhmG5B5cjLL7jGk577U97Rgr6asG4UywSsJ4CdLw7kmMT3ihaopBee14pynKzt95pKi4KGy5",
  "key4": "49nXGwTnU1NMosH87BdhPfoBE8V3qSGqQntfdEbGp44iS1oFqNWaTPygfdkrdURNv6xChSD1gFBWw2zxV34oeupR",
  "key5": "2bJbc3fLm1fhSWikaGdPyTLmkBCghf2rt63tHLQK3M38sHU9V2qJKSXuoRvsBsmt9rf2bYRQhJZFfCyQVTdrbMeP",
  "key6": "5aPxiSCqPZgH1F8wQSdmVLZww3KRP8yKFUWyPqN6iS6onQu6XKyFkggCN7MXCcgJ23iXdWcQ56HywHKqBK4yFvLK",
  "key7": "3BS44MdjcFhQVJzAD4DicMdG4zvjN5R1DSTmdyoYFuCjHgkssUyS6BEBFDoGYPDP4wMwfxum6CzoDySNsqp4XzKy",
  "key8": "TPinpEjbM1Fi3oLwNS37vXbnqY3tV7EKdEBNZmU6k9VEXMcdaCXYYQtPMML4iN9he2i6UcHH1HB44PnGivBi6Ca",
  "key9": "3rMZ5njKUrb8xZDb9eDiLRKvvbD8ZTdYA9nodNFAEkx6wNtGNjpvkaUrmaF6Awx9YqdY1xQHYfBE5ZTo5JQXMeb7",
  "key10": "2vju2bESRgMPM6XoFyfdCD2VLrfKFznL8A1ZyFJpXRm28eMKPtAJN1Ydgq6ok3KKtUuCqEqwHzmG9P2NhSxn9Ehb",
  "key11": "aRgoDXuwJpHqWpKQbryY25d9TdwDonA8qCW6Zh2sF8dSGpsK6zFmejoytEP6rAkGKRPh3dSWyACPDHDmiwPapWX",
  "key12": "6NXT8QQrPVEDbHmMg2SGo1RPfptVnQT733A5zhCPvYq8QSQm2Scv2C5RDxk7bVfmenjidDPsMDDx1362P6QMdDv",
  "key13": "4iiekhzWD8fHAkvkKX8DbyL7PA3iiafuScsL58sPvKeADS55qqsvyW8NXzn2pKK1Y1ZvJXEe6tBvmc6ZV69EJpAw",
  "key14": "2Un9irULaA7TniY9kfSdAUVR1yWeL8icHftJTHoGzBsCaVfDNUyJfEmgFmZ5tiVy3PkGJYA5TH7xWZy9MjJehHRR",
  "key15": "3UNjLJHS6xevHAesnBh7rLBgBfEG91Rq3GuxcUwr2Wu7okKoGVpv34JRUykVGwvsP9jRAEtSkXScadxnceivcyJR",
  "key16": "2sgjtQoamQKHEP8u4CCB8ZGzwA4mc68QUYFAAjAWLZ3HwJvsVVE5Aw8RMrxiC9kcikw49YCZ1GpguU1VmZLnjB4v",
  "key17": "4i9qbjnSYhDytbxkMnbWuz8wybfqXMzSks4GN74Lmaw8YC38VpgN72V7KuKCYSHnUAqMC9CyFupFSeSTS7R6whAZ",
  "key18": "33NR7Dwvr7myeexJMYv7HQcTHbP6bdcWtehAuUVt72iDn4E7nW68ye1FXds2r2TsQPjcwabUHMxNaVdcdr8dxCGr",
  "key19": "4JuAm8UwfQP6XpovL19XCsp5dDocRG6khCfaZTvqnoquSvBaLc4GZKQhZ9T2mHC8tM6pAHdZeDxBRiPbK16vD6i7",
  "key20": "5K6J3Rdj26ndNHtPrc3RUJFCS8bDUc8Le7xo8QKRobXAha8KSb4RVrQLbBd6KcUNTDrqHyd3bfuh6CA6QuP2zXk5",
  "key21": "42YFzXZcS2Uh2snpEX74GwByR7ei7LcWnYnqxqyMC8KBF8hRHeWcWNuT9FaxUvzaKL8Ns5PW5hdNGGYhCgrEdR88",
  "key22": "33bVge6MQnrDWfbWCPjDAAqipESk1GFVSaWfR8X9t5vpijfb1ZwfPXFo3U5s29VhcYyMBQtXSULHekhAZoaN9x5q",
  "key23": "4J6EuxZjZh8n295afMgeJ2VNpxKEhCevAvwxfHMaEcUf1GFKq4XZvvh8yoaRwiUsLueH7arkF7mmEUXDVhjV3kGE",
  "key24": "5f8c2KqFXBLvy6tu4LqV9qxzr4guBYN7XTZBxrYkA3spXRMg4wyvtJc1HV5SziBnakzB2gKoktHx2HZ7J6jBAfeF",
  "key25": "5Z1nrQUNMn6s8zeB9iVvSnFah3YEHxJT1BFEa5danErQA2iPMbvwyexeYEzz1ZeKGdsXQ9Dy4xyfX4N7DfbhJYqE",
  "key26": "31Vq3QgNfEJFfNbmoJhCHCPR4q6y37n9KW3DwAaj9feWPgcyaeiTKC77W32ek3WkuQZ6n1BJbjprv6u3yLdf7dTP",
  "key27": "3UMtnFjBSrNL627Cy7GuvLLrsikzEvmUNixanUh7MGw1QxDHE3owWyhg5dSuYe5N8CLNRXA1yt4ZHzr9LCTWwvZT",
  "key28": "2gVHUTnZoR7tJ8CXetTGLLArkMEkLnV6SobePWRo1Jrb8JWWZRmEQvXpLgCs61BrvzGaTMQyz1LCvK9UKE1XNp2W",
  "key29": "38Fersa7tAfNtZ2pAJvVYyvXL3u69BUfogoxe6qfaCRCAPrUcq2LRQqBKwZ2j8yTuF7zMxAhoumpELtT6GuLHbfP",
  "key30": "2KWyKvbbThHS6WqS4U2tAMSgyWVPpvF8TxLs56mQ3bSLaPYQgaWGEVRefcjaowEUYdJi3URcFDXmMULEpi4MmW2c",
  "key31": "4wNjXWnUuBtNzV3VirKYW5G7QqWPHYq4t2pRsmTSaUJs2YD9WP3UuBLABo3XXH5YVHTsANiVJyUx7cKHP5st7KhV",
  "key32": "3xD5jtfF267W27KKeWvtGK8JBdoeAH2tJjUvVJxvg2kY3UQTjj3nPFZw86S6fcMCS7bFjcxrQewp6beJR2YESiqv",
  "key33": "TiBmy18X615HeiFcCKDRzAZp9N6UWAP4hvw8hAGefmjTQa6noV1PiJ8tSeasYTno5WCG4aTneTc12w2svmD5jAE",
  "key34": "MyXAbCcH3GpzmoptPDydT4QXhD4MW9QhErgVd6TLhpzAJo7ySY4VUC3CwbwKmyGfdf16QXyePb494pwRL68Cpur",
  "key35": "pxhx441THWCj2tbq6MMd1wu6qRvECCNpT1XPaSQggL99BGoDbe8HLo6He7u62evznrvWZD27j5QUgqva7Zp6u8z",
  "key36": "2AVQAAk6fG6LoxZUpjdncSd3iNeMhvJbUJ6HxwQrfAr1W9Nfn2zpwqJCc8xHqbAuA9cnnmhJSCCpbiKTW1NvpBDb",
  "key37": "3vodFemHBKbZvkFoA7dy3dgoJQzy3ntV2MG3PUXxCsx28BNhPMfqWsJn6URU5gfELJGjVRzKiuWP7fHqMpNy5Yad",
  "key38": "515WQFZoD8UDMgi1uPzEiqf3B4TSzMAxW9H96fHd472sPyf6RnWLFHUsoa6N128ZwJB1tt4odgeMwehaEdNHoWaD",
  "key39": "3AbCvqFCjfSofdrQwQyGWbrDUe68he8znRpaUa2EUjbWnCko5MJzQz6oaRYTjxAqbVAj6GKLdcaDdbKtwpWdpRda",
  "key40": "61KyvL69NLBA4h2rXrwbTWascoNmCCemT3AaZKS6Huirzd6p2e7mGH1XPgDDRQNzsiGQq4EUkfk3xrSxWSH9wbpW",
  "key41": "5t1ucBNDVLuJndHKmdY4gpcjavJRGoXEwEduGw51aRzGRX2jTHpwt9jiMaMD3uKV9fcaon1GFdwyfBQYo8PBjgfh",
  "key42": "4AUcgYky23MFuWDkbdTWmBA9K8Ag37CsBfMtDDpSUHgGE2TtTsi2PEzhvXivKjY6Ahg2TAMMtLPREG6dUyEb8XZu",
  "key43": "5ByHwAGJ36hbVrQuAm1fpB48uP48SaDsLnJN9e8tPpx3aC9SUujdAdATN64WZQBzkDaw7oZEo5WSMFFJtR3iikFU",
  "key44": "5KaYegbVBh6kKB6XJzp8dUN2W4PnTQ6ndE3bshCZnxFTYKkToAQ6BMuXcaBXXqEZimU9PBr5duViyH6H1ApgkUf2",
  "key45": "2stLNGgJ9YF76cABYPDpM91LN3k8nv3mgtj16g95BfCtH4V4PZPQDGvUBfgMVeKi1w8s9XkoEUDMTRaEahTLPxT9",
  "key46": "XqyyhCcWPyfVhvYykSimCz9sk8kvGFM3a55uarFEvAg3CG4iqyg3cBLghsinLi7qPNzR4mdaJjXjAB66RSvvQxc",
  "key47": "3P44iqv7zc1Xv6h1GQiLTH9wBcui7PHgditaW1wkXKeZhXzHKcfrvHpUXYiab8iMakEVKUU1ejQAuL1VGoiwBZZx"
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
