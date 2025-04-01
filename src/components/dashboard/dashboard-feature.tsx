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
    "5w7PnDGfdwxxN9xRu5g72drFVpCvQTVERyn6F88NP3f9DiTzren2ZW7izuzhtpDu4CmiZRZuH6zUHDwqQwhg9swF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GEvxUdySjVmr743nnR5FywPB8S5XfeqvJiSyZJSNr7R2ksNmsn9b88Umyd3pwYqaJJzdoh114C4M7xPiJnMgkdn",
  "key1": "3A4YqvxnFBpYMJy6uU6MTUA3zgGxDt3CYmoGbyNbNod22o3mbfFAXi3GVe48PVBh1hAxML7ZcB74u6fvQVz7r4vr",
  "key2": "5VsjQ2WzuTpHGrrDS7gjUci2sozE4QEAWo72uagTsWUHdaGDNphgCySQBaVkjjDVGwYAjT1dp516cyrPu1tux2oW",
  "key3": "jVsYAGwtcK7stmVTPBPvmeMi1VfcHtn4ShhbEfSGbtRPM6RBBuaeF4JdToGDivE1iC4eT5AUBqLLLUV9DDNnAnZ",
  "key4": "2VpNFWvmdA2HN89Uu75Y8UEV9PMndcBfdTpe4uttBf15YB6YkQrywNQnoJuqNHmx4qkgg82cpGTQCyvdXWrfcm4p",
  "key5": "DVaUFPrJf6WW8GHi9KiLGEbPZgXsZdxFacnQE5Eb4qNTsbTmES5TmHbxxFEjrjAmNUsQLhye6CZJkWxRoi2DhAP",
  "key6": "2LTVK95e6C8Yh2NzuqK2BCeaaEYpi4C6b8SmNSm1rciUqJSBFkSpgusmE98ZwDPgeY3XuGyUTVD7EZfr6gfZQbSD",
  "key7": "DLKU8aMbWnHdqQV82wipi89X2gi2sjtB8HHeDshA8HYhxab2veE8scnBZNkHa8raY2euac33fxBrDkGeYhL9DFp",
  "key8": "4VdTgMXrAtmSXizYnm9m5zfZU8jjqFExL3SKq69iipneryrumYTPriNs8kgJRTxS9eNDoYAHQgPnj6f4mJeSZYqx",
  "key9": "3wFmVmDNcRcxrfJZJX6vw48iFJhJgYtsqFE1t2AS4E3jpRrT5KKRktdNovpqGkpiKj2DTdYv3LZTSXspWgd9a1Fm",
  "key10": "4CyMQTxnhmQL3J9ECqmK4JVvBkWZrHZKVrDfuMwAG7yMm4SW1ZMdMLx24eXNVJpijJG3aeNwnxrLn5KwHcVgSFsz",
  "key11": "3cv6hF256fKPnhTknQUJqustZ4dR8PLAmf7FmcxLnp1me64NTFLssFqCbcs18ceTafd3jMnhPUFRSSF79SZnxjx3",
  "key12": "9Y5wC2eRCsExufj4RLdwA6Bx2FaEoDpaA2TdtZBCDWBCmxjqJq24ud6cThkpkVBncXqXVJD2iFMyxHZ28o15eud",
  "key13": "4XSZGFqSu72p1A9UFVgNPHV5QPFPrA3WmKKRfsaVussQaaD627wpyJaR7trMWYGjozdHcrkskzzafWAa4wFJRMpN",
  "key14": "4srHhEagrkqY2CEnyJB5BkUnQXTX8Mev7E3ECSaGiMPCgZ2zAAVmoK6a7tY3nX5fX2A8tvjjCbqDYJ5Kj6PQvc1N",
  "key15": "2zX54FXvZhK5Ex34Hm76JhGRKW3UaGAQpTXKLu7qnNHYh4R1ud3GvKZo2H6ApBg5tVadka1Uh2JSbo282JiRcVTh",
  "key16": "4rym3RCR7Ghh5Bvfk8519FuuZiYCfRGizGehxcdcsq1YUA2zs1FApFjJgwT4S466VpfmSzg5tHrLVRnyoABBwP7T",
  "key17": "5vCvs3L7yQbQmRUgwDsZzWjQyhTTn8L9A67sFggdw68tVVRWeqhA6QXVbmQ56f63csx7pncvjMX7kgUsMfutnQtC",
  "key18": "3k4Q2cyYpS3TnbVqXCbAWCauVCitTAqWYvQeLCc33FB2AWidqE5exwPEFfWDG9dddhinaFaCvq5CR8WArHGxa91q",
  "key19": "2z9QtiDpcjSknKXrJgh1MESKCBKwZvLc5hJNtYTUBLM3DdRxuB9Xeqqe6awAdQ5Zfxv5vyUhREQ92ATCjwZfjMrN",
  "key20": "5bNr1HUQ89JpT7TB5zEXaoij6nzULxbE8iVvkB7MN5hRKyk4fJcsD6TrVPFQVyEz1eiiMzQPHXYLcJs3CvP9DQ3g",
  "key21": "52sgrihHcNEiNnEjTTq14fLHGTjkT8YzvygQVBFXyRKZf1qYVcrNWxRtUjPcy28TF1cUA5CpQrziNvuimahhYu9A",
  "key22": "3CXa8uHJWXe8obAt7jPaw49q6zprTW8mwRpasZurQyMvH1abzXbBKrskFR8r6fpyCwBr7oWVpt7YVvx9CWUGvMkP",
  "key23": "5Lkitv2tmtet8MA8vF6c592ofTbbhKPNfzJovaaVStWEba4WqEheCtDb8W1zpWivWrTjKTfD6bERvh4hbv6ZzuBz",
  "key24": "mMfrkZw7JwT8QjgMRg2x9YLpYxG9acv2zSzuicr2zquXVEMQbEdViS8kQAeBbYFQsxF9PmoinaDt78yAjotdcMW",
  "key25": "23kdVwxYxzr776C1amRJCN1Bw3yZNgyPiu2Gja9KgDALuhYbMLUNxR8zFKQDByEzydJbdtRb3Ge4T1GSVB5wo2eY",
  "key26": "4DwdyAfV63WFzHs9qhQKqCf1487747UzxvPUh1U7BNWgK1euUtnsUQXdH31irJ6BoqNqPYDEAyrk4Jbat92LLeuB",
  "key27": "3SA8ywkHufg41w8ASiHo55kQeYeuq1McdHw6729iawDRLXYjE1YKiVzxa86a5iegNYfAubwKUDAhTjhPDywzHu3e",
  "key28": "3yNTQjnf5bgSjZxTByzJJf53AU3gWvsgkJVt7qnWCyzQrXP8E6PLWs6Dru5cnrJzX9Z7q7zNJt95ZDSv6Q43kgqV",
  "key29": "2qevgKV97xCiKEmYCEKR9WpawbYTt6oBuVjmrgGFcHJTr3dR6Lut4eAAFDF7bidv4cNwkau1xcbUY5DB9L3UvzSu",
  "key30": "57t4Ucy4hpBpr4kWs7NqrepdU8wy7ACNA4gGhoKsp1i9fUTbHDckTRYa4ZDaqUSnjbSM4KjHxZzeLUUBf2ZJn1NF",
  "key31": "3CeFC7RGCFmq7ccZuYdsCPrmk1V7Np53zXbEigpiycpPEZ8KCcew1JfPwLfnprMQrSvuScg1BrPWzmwUcuCPYuAw",
  "key32": "3CnzGvckWYCFThu7Y85vgqHasYGgngpP5pvHm6yYuYvAsXCkYJzddhxqnL9CX9Ffwka8UvzEvYQwiw8C4Uj6VyDK",
  "key33": "3Zh1KH6d7GX6nJZVpWuCTBKNxLGZ6enXdZmSse1CyLQz3DtpjnQVup58BQ9XTAJvMNZKdRpTTpbLYETo7mDS6FrF",
  "key34": "5hwHdaR6fB5MNonyA3L1CTA7HLc9tKMtd6URWoK28sKVUVbyvBcVd8h1J2XD6PPSzYWi5oNM2UJkwoM4dqAAHiVC",
  "key35": "3ro5wPGCecP2rU1kNhL3PuEFnZEfK55uQanuNM6R4UM6LyaWBRytMZ9gayK2bsPDkiJWtisdoGQ9EcLD9QRwmhpr",
  "key36": "2GNQYv2E3fsAqxiFT3Qjn39F48Xj5uyczvfRu4RKNXXSCZxWHwPwsxip1qBQV9kTsTnuHCYriMoBqGRFEEnQA4B6",
  "key37": "48chqWvHPyux2eu9oMGVDA7vDPJ7oijKvgJTGEbCFN7zjwvfAdtyzrV8n3xTsF6YPSfcVzJJF62LhejiCZtH9fRA",
  "key38": "4PGjqbFsZjvjWJMcGCxsXnKmEJUdBMs5t5MmKnxh26eYGkqawr9wy13sedS5CTYx6NuKtiG4WRrfL9XYvN14AnCT",
  "key39": "5z7NBryrs5xqmdARe1wmDrJZ1DqHcNxHC6agStiLR71kiPPTwMn6BgZ73YZ1MzLH3G8ax5VA42i8mbQJvujogXMU",
  "key40": "2FAUXGDCzd6fetKTnk57Df6rbdnwj5N8UVw8a7XgRPq2jBSN6rHazCorLgprkEJSMCSM8Px7FM9JakKCKNcPMJNu",
  "key41": "669s3iFrohFv5S9xWKQpDsDDSEyHAVQuqjYsn1mTgmPUFbJqhm5mPUjznugKJGDbWZUpAmwKQnDnhyjT8PNBVYPh",
  "key42": "2PXycRYcxE3WskX3XK4YXPpqaAcgvzT4rAEmSUT3m7bZUtzYmLbL9eZew9RafGuz7hJnezh6XFDof4itCYdZRCKG",
  "key43": "cduwWaXv9PTgLHbP7C8Kqt4A5P6KRaUL4UW3taUjUFyT1BgzvxJUFCgJwnJJnaExSs9beMvH6WrW2bThubbWVfs",
  "key44": "4224DUBs1f1tB1YRyNwyrKD7kU3KgqrgnhZsabK6hkHqF5PG9ofzVLjUmv6GAZv5jfJrHmWycaT7QyM1b35P9R3k",
  "key45": "5MgoRmMoq45hqLbGnf9cPJxypP3Uaq8UTMKicqiFYDmtVvsUDQGJxWqFg8gLZ1efawbMHQsvLLkhAkpFtcAY48h5",
  "key46": "5mJ1uff2d4YM7BifDMVBtQhPrHAL2UTQkDMSDegAKNNjkJ7awuvigx1Q3zGpKJq2BfCQNgP6WBAVDkpneUJ3RZ7o",
  "key47": "4uesSMj2TyL5J4Yd4Uqt1DTa3kLbuaU48yhtrQiNmuPN37gY2BcSbUcc4L5hxa8BMgMeSSYXGs7NTcSQbpDtTLwM",
  "key48": "n3qB4a1xdBjA5xKxAK5opJk9USdY62eh7KVgupCC9iGNkbSvfbhRMJ3yyhnBQQggEiNSKea6JgdXB1D5DTj994k"
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
