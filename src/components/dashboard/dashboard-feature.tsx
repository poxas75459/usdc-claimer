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
    "3ne8vfJqssMcojtFT1YXJLjRhwQRnfxXAXpBPpU5ZZVKfsDqki9uVCPqz4n6PcYswwwVa4WsrL2ggkugTEDuNh8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b1UgYwMMknKtLVwqaPXWd9bkLaCSVjF6gXxGCkzsRtS9dXCEYLqFXR2qhfzBvLnZKWNcyCMJsw5UyV4PpiTnNxT",
  "key1": "5Df3BCP34m6GHEZtDH7CmAfoMiC6CX2S1tP2yoihhCcHUCTsKvpax2W2R4G2tpHvJceYfqHRns4A2qPz53k8xRpo",
  "key2": "3Kq3K1mLqtFzES29TbiZ4xFEHE5Sq8bMqhgMWnDxHT9DrKXvadxNEWQ6ZBRX8uz4FvXVEri8CK9HmDRkBwK8N14U",
  "key3": "2vvT1B7UaG3hH7k15UtbtCTM2ttT2t5JpFzhLUnoj3gKHQtKPiEvpX9cfSHfjGVqQNCa6kHQD8865uXJp5GPi98k",
  "key4": "2uQAFcQPzB4zFzW23AT2X3v4e9ZT6nN1qt63V1V3yk5Gk3JCBr8gNoYaqZN8KJ6ADwv77JTi4oZPHL94saFfG3Le",
  "key5": "3BST6MHADzYSHVLSTyEXVGW4kU1aHoYB4byvPqPN1AofspRMsENzoXc2CHESy1DRyhzm2pnuTs71632D9CLKttFU",
  "key6": "5jcLv9Xpx2Pa7g47EdRsvHkcjnTXMm6anxsJb7e9HGyEQaaeNGX8jmjzZFZcxX99q8onDN7sSuNqm5HaTaRrzyVX",
  "key7": "2iVhWp4BBBbMnAmz4X8WC9HSfxhLue2827gbWX8qrvsSXKNStXTrrz9SXt8i8TvU8jinYwqb76Upc4iBLMHWaJEj",
  "key8": "4Z4JBB8RRNWRSWfnTfBUHR4EXSVzFMBW57Vprd6VEZtco6M6T8ZsLAVASki6v6naL5Vc1BSQstjEJYj1PABEiCzS",
  "key9": "3AFbnDjqniy2Ew5cCG3mmLPJtB8G22jbuTJeHWdUmVkSipDUX85GQmnry9asCtevfisYe8FgcUxJmEmH5U99dHq1",
  "key10": "5pYdmCmyMcHwJBRDUgsM2fuaqCd6cw8LqzZ76JbgcTjAvugjBL6zdv2X9LxHFCJfzyDW8Snv9sCL1aAf6kie1qnv",
  "key11": "4TqAyxMQAztFHoHMEGzyuErkbg5mpv8x4Z6BxgyshanKY8qyBm6BDuuU4auBY3uZiusN9PbnBJ9NLYaDFgiWpm6d",
  "key12": "munvYZn1aFAsLn2D27ubhYPwcSNPJFkXdLpxNGopDckhLVPwJeaupxy9tKJRdJZkYSiFXVdVcdFaq8gKu5rqc4d",
  "key13": "zsg2uem4N2reJvcvRwAFm1JwXANwhxnmPDiZiGsMxcKjxEppZ1BTv6JJjYyqxVF2Mq8QgFQNDC8z5cJ1aTTuNfa",
  "key14": "51x6YjPFMMZYBDR3j14e9NMWYXjVBJaxuaK1JrPHeAWDC3NyvevwUdNYGMyALx18NZ7orYxvvzB4aXAfoQvFuNCh",
  "key15": "3kABg62PDQMhA3VduUDF7zcjGDVHv29dZf2AsdnT3rQuVrwCGG53zGxETGAmHWRj44DfFhdDKVt8Yd9fKhiiXZeT",
  "key16": "23JRYTZyoGmGCzNyVzfrZvhv3DNvjyQj8hHCQE1xiEA1q8oTqMicwt6uNocJgoGp7VkMJzaLWbsbkgz1CyDAV877",
  "key17": "6ncx8V1GYCs3JBTdnNM8FvyKUqrZBwk5PffWYRJauPLv1JBSCuS8k8PFZkQ25ySUACnAucJvtMhL13iHkJ472Qp",
  "key18": "4eEi2QjY3YFsAqrJYkPLCWiaqQUeks4rxDfsz2PDuxkHu3iYwZjHiJCzhjEy127kqfPmLzrj3kPCvDRG5Fmw4rRo",
  "key19": "3VXWpiWAFmMqKHAetjeymX5BYuZdSYuSW4kiTvWZCrNzpepZcQyrfpKzz5LxAmM4grqnsG8dnYiX9z3oeD3CLna5",
  "key20": "4sWwBjA6a3UBNYHE79rWNg8QnXvt1H4Cf2T7W3GftLt6PQa6jkBErNVFXCxrQEU9hWBPv7A2tU2cyiqjtLR4eLhN",
  "key21": "5Frz3ThLJPYUx2ZAbRz4MVDncYQjesga8u5DtqjgBdBv9Ue9gXQNkDpk853J3aS8ZbBG3VjgXkKku1yJyWQdTdoH",
  "key22": "3oAYAKTVmha6VYJp3hk3txEmo2HTZ4q79QSRjrpDiJaJrRJKniBQmuDWrxAvca98mujQr6ap1GoGLZtsGRrDS46Q",
  "key23": "2viT41XqikfaxX64aMUGQdsLaVywDCWkytDHpEPebbxiPP4KdW1VF6P62op29Uem5HgNfPzoY86AAb1RZaA6F6UH",
  "key24": "515adV8EyzEAi65mtmfw1vWLzRXLgixCPM8bqGXbYUzTyPudeS8MBXiKU4VmgxkaYMcwFMMDLcYwKKaChaKgvuxJ",
  "key25": "45A1FJ5p5doBsUYadYiiUMkFK4RiuJ7ZbHZshYwTsNGGRsMD3oeb4b1mfyiCTLbRR8Nj2PnooA52jgqUh9zd45eh",
  "key26": "4QDxCpJkHfZ5S79NZ7WbYqXcdDFnnd5eAKhyuPaipd2ow5pMQgRY2EwhYRKdQ54Cb353CDHazyvJYRpXD4sFvhfT",
  "key27": "2cRhYcqoJT67MpfPF3XqZef2EBLYUxwrn47nzgbmjz3jga9Rzbr8pejuRTecTjUto1iPVR9yvJYVPiHFsRig1HZq",
  "key28": "hkuJir89EBBv2T6Pq8aMdvN53aBZ9YVWTCgcGR2cFX8HgFB2T5dBqHqx8U6DpZ8Fj1Jhwo3z6SE77TTcX5RGKQF",
  "key29": "5BM7X5qSHb3bqbHj4EnEJeYpA89qA6YXfApK5wcsfGtDtnrJofdsVHZgkNgZc6UDAkDGepuxNVSnhgGRhzkeDz1V",
  "key30": "5xAvbfow2dG4j9c31keBKWyV5yWNUwgizpvBQiwTT6wwSyD9q72pPp6bgcsEnC5FsCTyYf7YnVLQNE42TQrEKoBQ",
  "key31": "47nTs5Agmr6fEdQTJo4oPGce2UdCQHPhVXq5dvaFcjQgyHATKJrH319YPYT86uNVcpm6GtNKY5ZvyF63ExsJE58m",
  "key32": "5Hq85iw2ohtkiH5smfY426CNqAQAeoQBVTJD4pXVpWtbgZzJ5JFLY6vnmU7RC6kgGFhsBqLGQ9hKcx9d3qeWCqKn",
  "key33": "44Rqbs74ZnbPD7T6tzs53arBTGBq319eqQ5jLFoRHELpuRmm1beVUMLGHuK99UM1KjQmtBMxi3DQuQ3RS6UQqU2p",
  "key34": "2HvjKLad9PZmkvxUrobLMS2gEQChJjsZsSoJqKCR29QeUYA3xi7yPnjxEF6RZQZoxRNFN9WWE6jDBUTYjFiHzjva",
  "key35": "2myZ5PhHA82yVfWeCvyyL2ZgdU4n9u9FGDS8HgpfeyufafTdsFRNvmMnPLnuMrtLynJn27AxVatamiCfLkmLHVFx",
  "key36": "3Puk5kouynmq3BaZbWNBP9yTTMXSTbGWkRurig3iGaQkpz2zfLJM6juU1yS6YfA7eKErM6xsG8zpoSE52WpJWRfz",
  "key37": "2ThCVXH8mQXRU6b4z8erTYbdi9QxfRj1xKeU3YZTc5k1JSvFY7PRJNANxqfJNdvGxuLozBdR71dqFhrzsGgAuiE5",
  "key38": "48kUS89B9aJ5xBGSeNZX784jT3NQcynjDtEpw6FssYMVGLhxwXhBLzbJ4AQ79mgbNeE4SbXdUxjGeA5Lic7yNNup",
  "key39": "mxSPi1AJfDTjmobDyJYGJooK4AKWAht9CvkjHDUy8eW92JE75rB8xT3wjGRoag4X4FZydHa5UpXFRiAA8Y4XhUM",
  "key40": "5hkSmd1z44ZBakVDFV5QZ6JxCF7u5PEXmZVCCKziToLeLpZLoC9o9XrujMpk5mrTmvaHkmrewJcbwuEo1uMAmZ8n",
  "key41": "3nWcbZxmQ79KkpkMK9pHkesCe7rUEmeVGcxu4zEuzgG8DfakVb9ChVuACvktazVyu8m3UCzDUqzXQFoLxZEnqPvx",
  "key42": "vBCMBEF8TtHrxq6HD4PM4a6sj4ZbEk3Qrrb2vTFbUJZ7iyUofHDyjEQDuhsthrSV1X9EY98DyKDPLUgetVnngVn",
  "key43": "2dH4aa9P3DfDp6abK2MpEkwNSm2YnHJkW8EB2sSxYstar37RkmRXxbidw1bUb82Smfr6Ja2CTzBP2TpYvzuVmqwi",
  "key44": "5wANijspLHsWMS1vvL34rUMtV8CUnAQGKbQmdwBEqSs9xPvkvRKxCdpdEVnSkYU5G7Ng6ZG22fptuc2QPodBnwBZ",
  "key45": "dG5tj6Rnjy57FRnjnPU7Ac6fTZZwKtkVxKwLHJPjn7peTg7LULudhGLV9Rg8QsouaPRPJaGHsVTUsFQbC1EnNcM",
  "key46": "3Co2DFtowqDo4tjAmLoZYFx1GTGVzv94Ny9d99mmEvscznTQ7bF1DXEy9CumJ7MKyD2Dud1BnHQCfsPDBq9VgFdH",
  "key47": "Q4pqQzLByNCCSbLjKDyrsB3m1zV2fHACUJiiHsxiBfdQRu6zpfdZuvwVXkwGMG6h3muJ1wVsjrXcpnvTRh1N8pb",
  "key48": "2G4Rj3XBgm1Yz4SvKiGdpKgQbLM8FtZJrYQPP1tUwwsSRe557kttxzawRJ8Wk3TfXPJzQjaLiY2GzovDb27fQapW",
  "key49": "3WHDko58SdWYgB7bFagwawrA4wt353QfocjzwGufHHiLSLPcVVuyjsFgPF5i9MRjDqvXNt74RhFNf9h9Csw8UfNx"
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
