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
    "4H114PKF8t7AdR3BJ85XM7thMzPqkSfDJmTL8dy8bHNXbjQeMyfEVanm2xbVimvsJUaszWk4ivrKqHpP2qTqtb9G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vaqiH8qGQbVLe9qxpnsG7RERVbUd5G9yRVriJ7yTVYz5mQdUsbKPxMxtWP8diiRZiTc8ucVoz2yyhoGngrzioJT",
  "key1": "3roEAiSPLSNfXwBCzqUZNQRaH24EdSxyMhFr9ibfV1mnmp7JdM1rpqLC6izwHPLHoupeiBDB6t8dW2jcMjctDqE",
  "key2": "3xF7qzs6XrQ8NoK4xuLNdF1s5h39n8tG6egMTMbii2NkLzgzo8bS6y2Cv8dqoa76KhwwyShyG1cAHPDsRoKHu5v8",
  "key3": "2WRKQq1adExwSABpyCvnq6NVtPKWC4JisvXday2hdc3YTZVUc58HmJW585DWsdP4fJCze9bnDxsCum9VwD3X3oke",
  "key4": "3gCbYYhVFjK8c3jcKoG17LugKvCeoFgotwaFQ8PoETcac4c44fQLVeEnGwcTeZUiCRiKd8ZVSbbAnrsCYQRd1KAR",
  "key5": "2ivL3fE1mjMUmR4P6aSdg5rccLSQFScB9deHJsDfVt5Shxzmvru2pPf9TFDjHrrkCVCGKpACPTUwChtrN9a9BGch",
  "key6": "5y8KABVpPqsMoXXH6GwK2Qn2hM79CY9hSDhTSsN1ZyJ4hcYbiun27Fh6ZfboCKUWhLyRPM6tt4hM95qYsJRZiBGi",
  "key7": "HGeyscYFz9bppA5Q4mmxgAqJMx7CPRkactrWWtcc2vDW4zvQwPLkdP5S4wr51i7CFMeHx1jgAzm8VqUKFFiovUf",
  "key8": "663vf4zeS6fZQqrD87o9beHMUfYS3pqeKrfUVcdsZTEj1dqMo5Hxz3ZUxwBRqNJtnWua1hqhSmdp5WFeCxbm62JE",
  "key9": "3N2B8Z4Vcjs3pdMHepvAF4bMrxifLVSZ3XPumGwmrrxtMz35vNV7cjr9F5yVSXdvcG7mPFpndy19GwbHDneDxrg7",
  "key10": "5xJ5v5simu6uJQ2fAb6MuKFwoW48jKJzcTzWD4wE5MV5rkaBRPdfAeG7ZrobsFttf5nKCt4FxS7DMB3fGzSufKk8",
  "key11": "3Tea9om8rLPeibS4WBwm2sZ7pgjKmwTHQhQBeDf1iaRzFkN9uc9h8W8581LZfXR5ZnewHUGU2Bgm6xUGVhjehQ5Y",
  "key12": "5AmFkLUjbxJu1NJRCSqtUZpQmULqcHqb4uqaUriz4b1dVf79yAEsSAgfMY2YYhbMgUFdZWpsinyScNwNekv5r8et",
  "key13": "34C9edQNKuJ9s4U9WYwUr15Gj9a5A1G4ssXTUQQgs6haY6pTVPAXn96EDnS61bdiwLM1j2pm8YHNr1EhukKSp8ox",
  "key14": "j1XJ2uWrnepQm2iz4WMjVMErDhoLQy1EVN2Xv77eLBzZpv55s4jakwvYmxVGK2APzJroExBrwarRZsA6GdAK4sF",
  "key15": "2tzwMRrH9HwLAhhcKVf7ZmKMcqE76oMkBjhVaEmngmRTo1mG5smDoGaRGcW6RmtJks2HWYLNivxMBWGBwm3ScKc2",
  "key16": "3TjB5B7yFaB9z98HBoKaLfsToQaNzXZbSrdy5ntGqvJL88EJHBavDpxispKhHmDnC4ydA568QXfJiE2nrx83pAPX",
  "key17": "4XjD1syEMKyeakdJR3EN4cftgXgFHKrARjLgkmAT7acgXmkTCYGuMwGeUxtbDiKa4T8B73TFZvwpYtc76QTevQa9",
  "key18": "2BvAY3BS9Xj2HqAtsVUkAVHfNigWSbAA64p2F5A6Sz1Bh3hNPp5j59vaTGHkLQGPMVzu5daEvKoZD14xpZ7DCEr6",
  "key19": "3iqfoqjKPj8MicX8gurm7rNMmebi32RZySFX8PLkeWynZAyDqRcDEWzkAnqitrwpjPgUysbED2ap24rzA8dsZWoz",
  "key20": "4Bxz8Mxm3wALsD1tHQBuRTDDrcBG4rSXHZKrSykLkpfqut3tBRwBVxgpueXmWiDsK7zFKtDH8RdhYX7xjMkvhG7N",
  "key21": "5HkfKXmSpSP1GoybmitbLfUGvtfJrmcXcHbomovhGSxX5kLzqPbEV9LXKb2bh7eCgh6D9CYwukeWeFwFTy4Cn5eH",
  "key22": "XrJPT85qagihNwVwh3WbzhXukBACbmSA682Y7i8G9hpwTTHL2ZiEX4WmUbHj2v3MAhfKGdQmpmWWewbFngeZBmo",
  "key23": "3koevph8YMt1AT3HpJ4xGAd1CsbiqA7JJodb5Mqp1yxxUFVnz8CeRrpevjmBcRRWqB62igdfDXzDUhChx1uqRszA",
  "key24": "uR8GFd9NhpV9i2zbm5jUupJEVokyxX2aDzP3VA5ZnMPxUcBLKxFFX4mq2PckkJX4TAm7pTts25hfh6ieZ83ZfSf",
  "key25": "2vudqfxn5uRaf7SckeEVD5kKPwpwpDD9ajf6FUVXcSjKMxx66Xb4xYCgxssV3KnjifyUwWsq8B1Z93UsuyuRoGvT",
  "key26": "47izLM2R99t7cBVfzSbvyHpdjwmzoioXkaxRuqF4wFX8mQVwpYKGp36LmQ8GVb2N1iBbG7VPySVqAWwyVQ5JJb3p",
  "key27": "5bXT7EXESjGg8zhffrLohQtAGWAj4KLDxTuyg7WSpkmPMZn4iMz2CnqHr4kkxePahbbZ9vRLhuyMFQuH6SDWapsn",
  "key28": "3PytL9EfDRSkzx4vHqQpboE1fP3mztyr8RFB4VWyLJ77aXbvFjLo7Q23Y5VrfudKPcqJVLQex6kVyG9Hcutp3eqv",
  "key29": "49U9jRYrPWWVbQbFBQzYruLrvatD13YxdNejJJa6tYPMHRwNnrGEJRnbbKE4YpnDk8KkkfUBCr8qbF5PxSSTLYYp",
  "key30": "EmzQbwp3KmfLramSyokC5jtk5ZRzgH1g9HLDNRr256mYnAcZeFQJ5XDF5HVWzRnbqiK1oREh1RDipBkbBjCnjEc",
  "key31": "2h3Fc162qpXp4K7eD66TCcC7iybN97yHhF9rfhSnwyjsgCSrCKv8DDKaRgixKkwamhSjcqBwHRwvXY1jAYwLiTTZ",
  "key32": "3DXx46Mw7gGUY1WQdXRzuVaJ53atBMaYNrqBQdxgJWR6ge3sEvxesbfLJ6DeNRDdUPxcXjRHGhv2uyGpmic4bYi7",
  "key33": "32aEo3Qnyn6uzoxUV54nDWuE6e8vFqU5Pp91atf2HjTQhJeK9vPqAX2cekiaMfLZSQkVQ7knKAnSV9yZZrMRDs4Z",
  "key34": "GsqinQfHweTA4LDvCpspe3ao1bXkixtGCnUYwDq4DnZDsKx4pL4mySpse6c3MSgpqR1araSMEsiLsPWcrP8hMfY",
  "key35": "63cGy5C4UimcPqt38rLpYyihqH5LtuqxjkNtvjaLVDnTFj2CdHE5QjvsAJZnGiVPxmwgarpSfLfttwZNBM3ktKwt",
  "key36": "4sbDc4tLnPMDeiMRNWFsBvHGH4onjdu1GrGYDkD99nXS5TJGJMfs2eZgrjsxiSZ4WVvxhZY3zqb3pDB9CYqrW5vT",
  "key37": "2E4UVLnrooYHnBBVJRKSDCYxbHUFhfDm6ohhQvyrSj2FxY11Qv3AJrdPBe9VJ2gJVoWuRNdz96d8Jj9gSABmN299",
  "key38": "3jkSpzrcuhnivWMeKpuzA5zpMiJyXYedf4YF2myTiDjaQPoMsdRqN3axebdtwoMN2JAPqssPoC53NcpdGUvj3Zbb",
  "key39": "heYBC2NTT7VBvwBbeiydB9bo3Amq1AiDTSYRezPewAaeBLkQXPEZmvQKyN69KJZqSo27mhiTooc9S8orhT65LCR",
  "key40": "mCq731RL9mpsZ4RrmWS9HHshBRS8B2jGq6TETbXuDAiDBb4GoA7Zd8jh9aA7LeQcs57kmpaEiFU88NcsYRWyiRB",
  "key41": "W76RzxaQQ9Z2L6E7X8zyAiRDYwsEG2iqb4yaKaVSC3mbupgWQpwRKHCm72BSTraBf2qP5nv6VMCeJkyyFcNhdob",
  "key42": "4xuAP8g2hreyuDx8QSSff8sxXLaNSCkxET41XMjFtHGmWnRR7dz4QQn38j27bf28aM91T2WN5vBC3WADeDBsAxRa",
  "key43": "5idWidoNRMP62HcMXxdZQM5pGWNeX7FeBzzQjsaYuEXcesFsa7Rk82XaS1iwvCYtETA4Zi3PU6X9a2UHBiKLBopo",
  "key44": "3RBQpCrHSoXMeTy5eEwdSSa1qbKKAJPtuE2FgnsDpbQkeGp1CXY5jjVguWqYbCDywTxKQDb76CvERSwKWVbRBfPM",
  "key45": "Kh3z1Ctt73dg8uvfc6h3qvFg4NeMYMAH295RVV1fadbdKhKqZMXeaKAAUn5KbawXRd1Tgq3jNBWQ4ZZiY11Sv6g",
  "key46": "5Qrn9QjpxQ1L2Lu1Z39Dg7wih8SsymxGc965U9WZqfCxWatxDhFcw4EvWnaonjEB8Ya5TaVWKiKz2DXJ2d3SaFCQ"
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
