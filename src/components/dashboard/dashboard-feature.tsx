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
    "DBC25F5d1RqwqXFWVT7kYqkSvwQGEiWzmW6pw7XCgYw6MMVADmzJxxiq7UcedU3XPouERHEyNXAqQboGwWrRZLE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VRoUPeskLPmnao8QN5B8QoZzS8Ga9ZbMd4zwpoZs4grWFsUVAghfGJJ9vzRf2u6vme1dxmZy5EQLcrWjGBePSFi",
  "key1": "RQABEdshpRd2UfFgnEUrmuBrp6Av8BwmaDmVNc5jTvQM1s8VtPYx4ue7XJkL1AAB8WVeEoSf2mjNdH9jxm6kyNA",
  "key2": "fEFDbt5dig1AbCMVKagNawfUN4VfL9dim5ngcqA5mRnUvzs3BAjTJrQRZ7LZx8QhQAheUNdtR5zjbD3GWEkn1yi",
  "key3": "hmTinHgDvXLumzde9UyrdW84d5UoD4fKyQvn4xivRraiGrPE5i3MvRP4GqYbhdYXrAhYU25CUbBjz6jnRQcf9zi",
  "key4": "4Rgu7CEDbcUPXDCm2mUUkBwquyjaxZvSPecGUHoQVJLNGHDYg86xHy5KhBjMK1K19JkErN8wwA4ZnAB7xfNiPgNk",
  "key5": "582iwgLKEMZ7m6ANZtnGsSdu7sffD7AFrqeUsNdkjDzNL4qtUjUSnYV86f2eFAzNTmmMo9r3Qkugq59eG8WHgi7P",
  "key6": "3NafJ2hbBvVcrHyhdQ5pHxzrWVa7EF4ZyCciBdFPW77jvZCtie9m4raDd4YJStXGKBGWGQysBwiC5NZmBWK65yUa",
  "key7": "5NFGaGy4wbDakHFSkTzHhdykRrya3uFC8PukkkduRxUcxzvVAAWtbgWdpVtoKhSo2W7Bo84c697tzj5JU2GK2Uyn",
  "key8": "2aycWnuXNkmrUu8bk9P84ddsaEXmaGrcj9Afq35ZiM7ABUF9CC8TVK9a7aWB5Q49JJvSxB5rnhofLVq41vFtvXhN",
  "key9": "5qN8zuwWKWEt8RLz4KotCSLBpWyCcni3c8J3Nt1kArcu2pLXtvcLmWujMcavuzzGofYNynGm5mioFuMk1efP3Laj",
  "key10": "3a5Kf9siVV8Av4JaRMB5uLjAPYNLbddPfypVeSZJXtWi1VWAKxQz9JdLJtQPRgh49nGxgd7T5Bg1xZM2X3KiyHwG",
  "key11": "3VzdbVvxSwgNA5JLdoYkBUxBnNtve7G84hZc6UrqKiWbNmUUgcFo8gn4TQipeuseSNmzU6qZn743B3kuvGWYKC99",
  "key12": "25aL8L23mjPxpB5w8HFfcFrr94L3ZTk6xzZ5AtojKdYXiRbB33wrHTAZ3NNa9cT657SpuwUJWLxzGk1zLTaH198U",
  "key13": "35u4gEhhmFgovdHSwW4XJsBmAesfQc35ZeCsYHxGYYUk1TKCgJ8DotKJGC1SWoy3pg5s6AU1cvALAYbuZumnUTyC",
  "key14": "28MUKD8qRbyjnGuebboEGaq4wADAZTwsaBSorysPpE8v9cw1ghNbLpxFBwoVCoMV32mC1DyUAqjzx5z6Jo68VUZf",
  "key15": "3E9KKk5VuuGkRcWUEmR5VFCsBHPpgfu7HkKZoAC4sAvuQdNV9ZcUPLm4gEHPFEC2fqZw3tsHVR88s2fQp24ygwox",
  "key16": "3QiBzps8gDBFYzckG3YyE19VyY8SHvDcF1dsbs6n8b665UtLPdE66xL4bzpqSgyiiXDj6uUrGN51pMKufh7vNRZt",
  "key17": "3pDAfLEFcNv5r9gVVgkcuzoLsnLMp4NbiDKzKNpYYLtJ32jFDyiKnkbLwcBHnhAc3Jmwf6jMsTQM9qDcYG41VvyT",
  "key18": "nszAhQNp79XXePad1Yc6xYSfnxWaBfgWdJkN6973rcKiFnZ8iYkq1SFKmqjrWphiJJhvuMrFc12mjMMsqhRaBR9",
  "key19": "hRn49mLhdoGqTA8ZpgEwKisSmnKr3U9ZFU4QGkRho5t8od9CAyQVnnKmp3KKYuPqV1fskPJTTwBGGpJpXENnLPK",
  "key20": "3CDvzkWTRF6wNeeqUspHJZqgwe9NaBD8dH29m1vNVuM1nvbxmtGN5DpnprAFMEFGiUhYdMqnASpPjuG2nSBvuU5Z",
  "key21": "vfSzAbJo25e8HtTP8gZAf7ZAS4TFgH5dYi3u6RjcB9MUwa1YD7g2dSWhjRXbMsdKGdLByEe5gjxuK7gyXDY7CDp",
  "key22": "3RMZxDNVtjHQRhBxD9QvtxMEAERVRkkNGfWtYyR4xZxGyNSvpkMiWd5FkTBYtsL4bCWPnHmfK8DEMbQAR27jZUGM",
  "key23": "2SDwsnEULiMYu5qvCHtbLWGfF3xPwzNzj9BrQxkLaDgenVJU1SUfqVMNrwQXkaEnY7tp6MdRou8GEPsrxgKEreMQ",
  "key24": "gcQjYzGXwMepDSV7fCx15s6U2dWDraa6EfboVfaVTtzrDsuuvmUYXw5rn6VfGwXKdVCNhNrzsiY9fXFoaYTn4aq",
  "key25": "5LP7hxifSranfHMXAEAFak1pcHjD7Q6UKHqavnDEnjmCB9gEbHyF52hfhEmGCn7xs5yeEfQRtjLkMrqeYyL44fq3",
  "key26": "3Cg9a6ZgobmwhR7BLRVH1grLELt2XmCwkNahCpr2J85YsG5KpvQoa7ioi32RMux93yeJbiGg3mqzXKUiJ6N3NH7k",
  "key27": "3pM7hYu6wAXNjidtesGmBtYs3JGQV7qnnSvivzQp6iwcuJb2q7Sn4o7Ze9hJ894dx6TqwAYCVzFXbZirYwg4bzsg",
  "key28": "4mbA8UgVLudEW8fcSrzPz7NKe1X7muEAnXiuhzsTnVFDbmPfZusExmy5Xx4PUMrVQNyz5627DTLSg474q5281prR",
  "key29": "4dpwpHhG2WxN21dQBWDixDPKU5R38aULUWmpZK5wwy134Y5u7tWsbkK7S87oNckvfvBuD6kycHA2JZd7CPnyvKB",
  "key30": "2R1NpoS7v9fBhJp3YD78VhVycMqnMMLioZ9o1aFqVReHUyZ352kqAVYutWr2kDmfdCLJD7WynTfq47PNxmcmUodz",
  "key31": "2oD1qo8yWzGpEFL6KpfvMw2bE8Xfft6dFrjiXGNLL9EVmijk3VJZwmvZzqtgkVpnvSZbU8C89gtWqvRHthYarX3V",
  "key32": "5ZseardkfTdTCsYj1qKpRZwdkx6394HD8uyuC6y1Y14sLimPyA2aRkgAvVaGu5DcjNPP7wVqWcqkmyRn3ZU6KpdA",
  "key33": "3pMHdAooFpRsFwnxa8HezMUVRE8rxGFshChdy1w9bcdCHvsrqu9WYbHJraXG2eRVA3mRNXwpesrpHiiwuPkNwQuu",
  "key34": "27p5bJh36AnwzNmJgipKNSLXLbyGNaNLqyiSdUBSiBjLpVwuf4erYnbsicrJf9erWd3CG9yubPoSATrH5k4qSxrZ",
  "key35": "48jDhYesF5MNgrt4JRSfZNW13D6SoeyGmxBhM3sZUbGagSoF1gaQsvdydnnN6oNbwGAZKDkRShf6kXaYJawg5UKQ",
  "key36": "3PuRcv2ztfbxiKjtNnNYj4JbLPTyhDeTizFmBhjnvnxDnaGrf2JuWbRhTa2QjiRohs1bFkpjLep9YcMQg5PXupgS",
  "key37": "5kxP6YpGaXPgCto9vurMnGdSpzNviHoAzr9h34fE3tPNQpU9NosSmWBMTkuKV6r8qYFEEM7jgHXSs9Hhx8hzE6Qe",
  "key38": "4pFToYxZjRCRzSJqkL5mpmgg64x4B5vxq6kWKen1goNpxs3rUh2iDzWcNGD8A4knLYBZuYw3zwRATUZ1wjwwZMN9",
  "key39": "85XGDwU7Qbs7GNHNeJ1brGq3MZFJSPGfPWSYuCKtpGNKD22iksbogyCGNg8CzEDNwWP2ZcN23ZZUWxBYFeHjnMu",
  "key40": "3zY66LfL597JyBHSyDCiJH327bFUFoUJVGAD8SzXouLnSJuUmwundh8qZ2fxtXvcX8ZJJsW8ZMMo5o1qJ32iLzkb",
  "key41": "28izFeEzhFisiG1aWhoPAt5SmzdTEoir84MqYHRVJyYHD9gpbsgYoFLf6bYqWvR5EZSDL9xCBaCWgLjpfoLyAB87",
  "key42": "3z6Y9G8qdZYXxwviZjmLy8TQHX9pNyiuPrETUtpYQbCbhae2MnddgA5kid5WBwYD4PLjwMX6ZVoqHchxnqytKXx"
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
