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
    "wcX2tjoqYKKRh5DsaqMapARn6eFB9A142EyqBNsmEyuL2gLqjjk1LCckj28gHwRRuBtLi28orWB73JnWwPdtKJt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63LdZqvWWcCJD58RF1JdLPAaiB3vVwLfqztqFB9Yhhf1D5oxidVXMG8mEZXGWMduAiv5w19LiNGvMyLLrqS42NAW",
  "key1": "4XWTR2hoPqBWSYUKXuNJZdn9g69sJwNrhCowi4hKJgTPBp66QCEeqAZcxPZ5dB9VBtWKkrVdiakB5LAqUuaeje64",
  "key2": "2fnMaz4hkPYwqhhv5WwQweNxjRPmrGx3zUMDZmZNP1XvYRv9RTwTr7mFNo7SR3RCio1Udcxa32353AaHNmGDjsum",
  "key3": "66t5x4GkkFAYGW11NTqRDDe3wMqkf9xxeaZRwhU9YQKX3twwpAJxPCzAZ9RQJqV83hDnwCWERoSbGermR8ofwDtX",
  "key4": "3C2poJcwP2tppavU41mysxQw9JDDEvwpGBk5YMxxiSDWtezj4xPzNEkEP5afWbfbPVxNQFS6cqakV3dRZRgNme9J",
  "key5": "2HePhCf5Pzms2TkMvKZcXEbQFAWWvL7zEMtyRn4K7i1etgq7ySwgLuzCAHNpvpyDZT5kBjMp38ZgWicWAT31B2JG",
  "key6": "4Lq92EriGfcRPgvm3HyvqG6tfbhGFEQ5se1LZVVHRJE5dEgEPttinbPLnNcHsE2wQhMi8EZtHQ9EBNu4sCNNKq37",
  "key7": "4dbE1mnU881iEfPjq9R3h1BDWFjtZXkhYjhR4RV6eUVrqse7hjPvXhMMHhnJXKytpwa9xFQqxh94cAvvkmZ7spmN",
  "key8": "3psJBtwAGzQf9jfSdMJP5iN8h3AjUZH8mdfqVqhq7k3w8R3DTD9vY6pu93naq3rBE69Jv6gPtP8DZY4xHs3Pa7iN",
  "key9": "33s7MpgMXxJEDKcvrUBHuS2ozLVcT8CE84iyuV9g7P5uz5htSr39828uq3WDpd5XbTRbeYwDfmai4HjCMkByCrR3",
  "key10": "5KKu2oePLKTtnkyw9bwuD9KAMj4865tpxzJoGsm7S9hs3kFtfKERACn58BdtwqTjsxS1ythFaMYtqfxozKCoWSrm",
  "key11": "5dPspaDH53RLxBobFPW4xbhvBe4n9mxDAptp3ncuAouVBx2KQgH9hTeF4ezQNpnY7YC5s1Dtv1bJYS2gPEyEjnMK",
  "key12": "61vBPTDuGq1DsgcCVrjGyeykmdm3NWdkmBDs8dm1UFqiq2DTyDDWdaTc4xqg83J11hZfMoqeZgkK8Bf3p8DejHuD",
  "key13": "6oQZCy8dxcQYZ6wv9Uv7rpZxbJ6BLD4D56td7uAJwKk6DQMdCt4JPnCYjB8kPwig916nGFmafXgGgqNQRjpswDB",
  "key14": "2m7579qPCvhD9ZCCQ2ogBoncfFcucLwf5cSXyDXhhEjzLicxH39VsGeHGYChA8KMpTogsWhf6W7LBUa5s9BgckXb",
  "key15": "qST4TUUcZqBzzNLkBPrKzuoD8gRGViAzJsozqoLtKDzSTmFomRRQEK7hdYsS8oS9GVwknRRFMKewmPxqLS9zubJ",
  "key16": "3681Mzmk54cp6WjBWSHytRuz81xLr2NEcY3gcmRTaRY22zaaaZ1y4tAJFaEAj4MtKQQs9nSyWdZhdkTakaEjsaST",
  "key17": "5edna9YJCropHNKRNvErkAjjpQVwk912obu19N2XJuoJ1AKXa5LbbX81onVpupwxER9ptfRe9ENWxhWEQtLgSuaN",
  "key18": "59hNLZudRCyt9zAPvmMaPt1dvYwo9RPkodJ4hvKZkwq3xY6qhwxABrxGkCcwpJ9YCh4DbmXUaGVC9TsFHqQkEBUB",
  "key19": "5AisZey1zgyuKzUybmb6DV6nN8JHYyiJiUGDGhwcCuUkGgoCh4QkC2h3imZJVdyR4avLnTmhAdyqViSvjPWEwXjq",
  "key20": "5NJWNd9Kb5QmjHkpGEnu8by72LpfsAX9f9c4u1WUctgynHTcLGs1NY6ULTFdUBApp3zzHU5VWMMKSQChvhqJngub",
  "key21": "hBUFw1x5qDpoG13h8CrqXVjV39cn96d5nwyiUvEZUwUPJ3xyMjcpoYUU6E8oPexM3u61Dj3PwLzbdCasSmB2saH",
  "key22": "5TM39TmKTrjM8GEwGfprmQzHtCAA6M4X2EWHJLNHF7pRxoq5gJXXVaErwTajRw6aYcQ9TWv4GnEY16RYqmAggy3o",
  "key23": "2k3KfdZxjBr2RfzTXLfSsBDmp9F9B5EdSKc131bTmEXFaiKKkiRoSjpWo8CuySVMGoWYbNfbqsi5gYe287KHBYHB",
  "key24": "5kqKqPUQ4uuoojejoNPuWLwnotLBxJkYZe3zwUCNKQify9DmAnXPmYCNnJsMjMBA7HimNFo6VxYJzka7zmVqbhz5",
  "key25": "2bNufRvfiqyDfAA47cyYPv4YVzeT6zXWSrh6NoVH78tSmACP3mLbunnW8d5NuZJSfY4VfFrEF1GE7iryAGiT5kYy",
  "key26": "5qUBq57wWiXqngWZodsSx5SMKcJu5X5HFREPP9mZCuTMJhxsGiTp6gYZ1AUz6ke6Ldse6dng72UQfyYn4mkXzMNo",
  "key27": "26FdVxPtUzx1yWBNHkCjMfWWTSP1cthU9bMzeSudeb14ZmFmEndVvzZ8yyCcgxvSvASHqbGEezscPimFNYEm9oep",
  "key28": "5pBH3AU8owAh7FTD3j57A5bksi6tjUjaF9AR2kQpUHXW8jnVFnyT1yF8qdXAkadSUDRGW8VGYrPEmk5unkXMcABj",
  "key29": "5E9dUtWG5BkiBe1Q9fkFtfLYLSJrrkpKoZmTwYABwAaT6cLzF4vGNzHBw8BZrGTqD4ZWbCPSzMsne7GbVE4rDe8J",
  "key30": "2WmHDToprDQs3LD5SmS8ZaSjqQuPBhY5Bt5KBZtBfyLmbNHozQVEg6CaqHG6nrS4w1k7YQZxYA8A79M474bKVcTF",
  "key31": "4gPp7HkvwToa3Lku9Qv8fKSfemd37J2P7Y6gd1aZfygnVSyTJG4tzYGqsoKDnXDiV96gcV4o6kVkYwDryMLpv9oZ",
  "key32": "2qDS9NZn8SDKhWh1Ei5vThJDGiStYq8nnD7Vg9Cof1YuYMfKiqw7EYJPdhEXiTKYdA7Rmw5QBMXS2HTMuvnjbmRn",
  "key33": "435FbHd3FwmwNbQNasHph51mumr5ca31DA2ZnExq53neZEmVoMVbGq3W5nFEv2Pe6g8CcceJLxGVwvdsh6qUQaWm",
  "key34": "4uiWYmYC3GpvYm6Q23jkReZjrg5wUdeLRTMKoemDYE4j5t8VJbyxxuiTqx7ZzK9ebiBYb4stPH3cVxcUDP1Aha7r",
  "key35": "23fMpJAYJoPCuRSyTYAhGiQt6FqE17YTvqk2HQKQMSDSAkYhSpRebk9aG1N4WgToDfupoBG3WbVHMMMqscbrjAWa",
  "key36": "3yjqoAF3445tmEpk4hfAjZrKgtVRVC8t5rrU9C4tL2Z1BWdpef4MXb15PPPLxsm3U5Dt4DsTeTngyFFZhiV84QR1",
  "key37": "2r97GtAzqbMFhzrsx6yfnyXHCamqBFQDvCr9W33BSoiAZtCe6gRY6yc4Snda4FHejFdmUUu3rBDDApvNCSrhbPvN",
  "key38": "2zod7gWVBGo7gon54cdKpVFnh4trRWjyM74n156V8ZaMQfJwcBxVBH6Ykr5gyzWBUJgYqtQhaA2khg7Hq7dhDuSZ",
  "key39": "3Gr74w7LD6krJjEZgV4BVPM4g5p8zfd9dXTgo1iNC7MfcWD34ah3AjeJvWGVHEmTZUS3QFZMoBP7rQcEAoG7RP2G",
  "key40": "48RxwsWgg8QAB8vgZ8HtNdHLqGQkVbAyHLLreGUSM35pdWVQhUggBUwSr39gkPS2Vx9dzGLi9Cg78zGH26r24g7r",
  "key41": "eyFdZ2pSYXfVpLC6t3BWSs8pJbFLNN6dYoDL9JMwRo1snG5YfX8gQujBRe6rLcxYimrU83k1jyFkdQeGYpDUWG7",
  "key42": "2xKSB8EvZXQvMsfqBGirBdcyo8qiKM7FUHRAK35KCtCJhjceL2TvFjh8RKfkg8DANg79aEeKys5ovyc76zdRX2H9",
  "key43": "52nrfoceqSTgTNokj9Br77wFy95wKqz45tVmpq1GK9eCiSheoaGLBpU5J6Td47EEgPZn18vkeLYQmS1xCHGzNUxa",
  "key44": "56WHxBnnnUb881iBJhUy81CymPrTzqcAHkjJUvCHFhFv8kLCtBuGWB8P7EJjYjT63z8Tda9yCFMmP22zkjqFoLoG",
  "key45": "iBWzYNMezVCXk2c2TvB8JrtpfkN3ewZG8XNNuihmKQ44j7bhPaEvnaBnHuU6sj7Hzj8jfPEnfDyf8QQTxQnGUmn",
  "key46": "4KeqJHZzSEkfmUQHoS87zyg9BmQEjCKoBQoDFLcUULggUPJsWhWLpWKDGE5NooS3ryjWbeA44xkR4j9J3si5GXUF",
  "key47": "5jEYVFkTSLAkhqWPQ646jiwP1VbAqJNFboUwBpAwNxxmAqVpeo8URowoYuLtWZroaw7sLrJAMhDBu6n6KTHT2kBi"
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
