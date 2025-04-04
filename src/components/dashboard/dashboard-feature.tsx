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
    "4NxnUAPoPe56U4dW5JkQzaYK69uDPJ2MU39pAkLxAkkb6CdzL8AURXMuf7TTt14vhu1BRHWyNqkZfGRC7YPUx9cH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58Fay6Jpue8wpLBuZjeeKQtFyJVPuJnFiTV9Sq9EkvWxh8co7bvjUfVA4cTpNQwoa88NPCiQyqtSxNEWjgxsz6uh",
  "key1": "5aApT6iUpYRynHjwyFJJazGZ69LDr2m6JCcgevEYVFdewfYLUANPSTwyYodYfrx9EEYAkEiTNa6ywJU8fcZvxVTQ",
  "key2": "2fW22xFbfZgBrdDxxbBuSqzo3a8Qg6uoVhszynY8rqKuLXYXCR6Z8KfcqJSKuqqDzKffk1rVpLpK5kA86qpd4pkF",
  "key3": "TKRofL2zHdq8H7MqKUbFk2VBEs4T7nmBYL29NBf2S5xCtHoB96RAvsofAVeBAhXmztW2JbgyUNaxDW79psgmJZs",
  "key4": "KnW8BkkPHXU9qZ5HrPFmbxeehAeYHMwDFcexFzbJv1sLzXhpNikeXF2zZsaxffcD9zFLX2sUwGiT9bgNHG3YRiv",
  "key5": "TQpgHCky34BjfB6x7kgpyEfhUkNHQna3zVGwGmfQddFws7zGP1XdM5nzQRTgt7A7AZxcnotjUyAbfd9PwuznEwo",
  "key6": "ioaBSozMaG8AuQNxihUxUaRNb2TdQ31sfV4wfunRbaDexhQZsw5jobqxSwBx1SgUF7StiYqtPeQgG89JUS5nfp1",
  "key7": "Xbo6Rz9pC9HEFLpHLmYFqWwuq33VL5DVmRjqp4QWVLRWTxtjZ8g9vow4WDn5qzeXBiCoPo8xU6VfqourDMVQYi3",
  "key8": "3UzwnqUybzqddJtqZbGPzPrx2P6VmBeSnRmp6T91R6YXxud5pwdB2SMSdEnMaTU5SdXF17LHf1UztX8bLuFBvvfK",
  "key9": "4SsrHpgHTDL244jDj5r789q4NF5kQw5ks73fkP18hfbhhQgMiDKJKAcsakPBiPRzUKSqmkg5mafUrZaxwciHbs7h",
  "key10": "2wdKg25hk1pc4fhRZQTcNTenyKExLGh7H21buhpFVHH5JoNEQij5Uyeq7LLCAAuGa16YMayQgiXe69ZdpvGQGFb2",
  "key11": "4LfjfxzgnJSHHnEVwTrHVLWmsNHfp4sNV2bR3RdV8gu6oaxoHnjhGZSjjaojZgp5HeshhXEXZX9pjWVnH5LVFKA5",
  "key12": "4qm21U8w1VpNUJj1GekhknHjjnAE2eRDf8bxgBGzHKCfyvExETo84dPwqEu7EvxLo3KphTCDMVmzL2skaxQB41Ht",
  "key13": "2snxQfvusMmRoFWTXUyoo3iHcmEah7eMWyyzN6Pfx5hu1F2Frqi39NidEn5wXbpRHwqLpvnZvnyNkXC2CY1gBAYh",
  "key14": "5Fu5RUnshENGuAzejTzLjsyPMyLKsnBTpiwweUvp1Ayhk6wMyBXgVygKsxbk9fMGt9iyfqQiBNPH285MaYXaUAJV",
  "key15": "5HjNispBGiWrCBjdGkNaJpcsCdkkoAkfUKQ17t77CrbUQjrPb9RRpergPKAnEevZq3DhtZ8QXuNkynWxCosEPCoQ",
  "key16": "38YLDcw5v1ZwhwKfTJGfW5EQnFjxf8YoCaPxbGRr4pB6yVQ8DgwFCthbCurfU7vLpZkCr68YzWsYvM9TPhvyCmGp",
  "key17": "59Uc1uv4DviQxXkdJ1kwxBhQyuztCEJREQPsaJobjLPNmRWVCE798t1EgwkQ1hA7x1XzjSxTDCxbRgESUV7KznF1",
  "key18": "5jocQmsNRZk7FRPfgGtGS7u1UvJEKxsbYN65WfYquqToRh8WBHprqdGXbLiaSe91CcxcApL3ja4x54tVnWs4aVrb",
  "key19": "2rVPU7nshntNt4qHvfziL3ofaW4iUdYoGDTN1L4v1Zp1sMno9kZ6TcbknUx3s77njnuRHHSf24uMaX2tXYkpJoGF",
  "key20": "2hMoWLZcuYDayRRp5woQ2YUQ3JU31PPweVgJMMXnM1bGjpdHE4wm3gG8SHsoGR9z6MZ2VvFw6pTiewdoTk9X7DWu",
  "key21": "3rdEiRWAzJTcfpStE7AEr8bX4NRXT4TMF4rWZgnyaYPSrrxwYUb93W1UT2xDZMLrNcBhTNBPxChD4VzgXKi11Z7h",
  "key22": "44JKKzykenayrSj2enfphXCna9zxo5GDgJFERM37oHAibtyt8wjHZoyiaSKsLr55rTFe4584KKRZo5ZWU2DnYaTx",
  "key23": "2mY17kz651CNCfMP3uMmrVztRLSEs2mvV3iLKeeAY8xw7kfH5fMd9zhEgagqkWUBoX3UkosyCMzi7VTzKAwxMGXs",
  "key24": "4LM7UqQixLGp7pk6EYMrXWdVzoutoeBw4awJnXfZznkzwHAWVLVihvdLp957T44UyNwR9D93EqQLoN4CpGeBGGdz",
  "key25": "1XMDM7St31kk83U7d7RAEbAEoF8YXiJQTzCFEWqQW1jqYQrvUcV6zoKwtf2nNjH2VCF7hH6QfRTptb9Vmc4dfmX",
  "key26": "zjdC8Xems9TKqXDXrReeZBrFSjqjisZmgmwm7rt9ARs24Y6mrqwMxxEepTbHCAJPcxJbXTaSgi6gU7djQ5bPKG6",
  "key27": "5Bk2zSQXcNHiMZjrGFyg23QFmoFQ51AsFooiPxX3VCGPa8hQL799X4WLbDhRSHPQ7Wktj9ZV7v2m5dE8MZKZA5rx",
  "key28": "5L5b4KiTZHYCKoJ4dLKesxdY7YYNC5Wz745NZBWNDpybiiimbKozSGxsBHko4MG86Y3vACBZx2kgS179dB3DVTA9",
  "key29": "5e9oB76iGU4cMs4RDDLbzFeCxEwqWeZAZZLu1F4euNiga6Yg8KHjC9tsvY2PGJ9c1QM4k5wAGhE6L6X1Gyz8CqKv",
  "key30": "2iFUszuSG7wFJiK247ewtESvsVAmiPhdo47pbBmH2uuejgRmHmxiEXcDh5NBiZnGBCKGv2Qx4SZn5EPFnJdbYw6t",
  "key31": "2q7KR5azyZcQApVhz9tvN8n3TR7etWjWSqYW3PYTAnaGP2EXkZv9KbTE3ujTkFZpffo8voQMJuHJmv2P47fjiTHd",
  "key32": "2hb5XhQasYvVUG4cahAEUDRivrte7eRJ1KaVcjcBosNS4TzMVgK27msVQ7s8co9RBfgFTX3uovYk9HTtzrQ5Jnda",
  "key33": "2NRsVH9eXBAY2oTHkUprXnmvxg3nsRDUiAsUqcbmNKc1ZWtk8x5ATzcMg2utt4RxaeaQSoyEdgBCEyq2FqH7DeMB",
  "key34": "49ki9KadEGyK9ygrnboGfTq3xLNieCCRqShgeCp1P4fEeYZmQt2yKWY7ViK73nUhNGJrYQPUWmRo2pga1YAHfG9p",
  "key35": "EdzSiTKU4HUsY23v9KnmfshSMhpeAtRjB4CkZTiya2puMTxZbqu4RAeFFJuRzuYKq1CrwbvAwcrdvmAmrZpd1dY",
  "key36": "49sx9Z3CsdN2duhcwMgBpUeNpq8P9FahygiM4hoHQ4JMJmT7YedjWYG4ojn7ZhfkAGq7BaYshijRnHX5cynghSaS",
  "key37": "5DsNyFGNLt6BvLp3fBuZXhPYT5qnfcVydT3mXZe9E48qLsk9WTgVVCQpB4hDaVVCG2CEX2WqJkZvsjC65vuC1ct7",
  "key38": "5tsKaJ3t8YwJY8qqNbt36fsAxGzukbJTqHvbzCyFSWYrrr1E8mMFmQD9JBWPvmS3z5KgWbuHeBUkQU8akAmFofCN",
  "key39": "3W9PP2kkibiGtQDhmafLf3571UEpvjcqW61NyB6qbyNVFwPzrbKDUbUPPJgAAoDoJJnQnQMd37v4k8hbPGHoym6k",
  "key40": "TEV9BSwxtuNeehVn4eVnWkWWoZuPvv9RkFvWbx19gDCM2mCysLTxNFhNkhuswSbCCXLJj4jHFZrzA6r7rX4mycs",
  "key41": "5r383Jsk8izxidXU2AqPrdZYGNr8ZckP3u6kXPZRStqngX1nBp9X5xRCu3wNipa3CqceLEa9F7FDQb96BwAhG6NH",
  "key42": "4w5qM1RvfZ91DkwHFL3Vj3orief5KDeDbn6R1o7b28vxycD5FYDtUy85ePMJ2gTyEfd4DyY3dzkaDyf9Yq3zbbCq",
  "key43": "JaZtdwFbsLPe1waq2SV5M4SALvBypfiA1TQgodHYFRfgkdUnZfyGfCcxyEipqqrRVKdHpmQkfQqkEnnKvHNhYZa",
  "key44": "26GgXEbrgTFBfBzwSgHeDhWC37r8C2QxwxGkyjnoLUVsSssmo8bbM4MwErw2Jov2k4yMKAgDNNeTu6UzDkkYqfFk",
  "key45": "5Uvx5aSB3KCogrMdjcTQZ8YcNSxwBVvUJqEWjX2p3gPFQsimpscJBTtx8N9nm4FsfryRSw3EpNvS2Tnvj7jLjenf"
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
