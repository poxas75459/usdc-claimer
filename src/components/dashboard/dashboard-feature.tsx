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
    "2a9vyX46RhT7rBVQwSMPtMYBf9dbaiaBSYrwgEqqjXzeC5hRFgrchRt4nLtYrDr23VM2ubEKYhcRNPNAaxDUXWvf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NoVh6b3R5SuanHbzAV7XS3AFQRd4gCBnaMsDhgwRCA16DMsbPZmP1MGEs4q2Pq88uy77z8UWZrq5mkr2Wru3ktQ",
  "key1": "4xaDbbkhwTWBpnM1xxkmFdUeY37ReRWzRfGvi3xdko2WL2Cb1zgcnEvsaCBAQCHBXEUobxoBZzs5QmjrQKBiJQEa",
  "key2": "5aixabuG2fubyYU7NZAWViyPhDmrbi6sYhLa2PYWZ8h6MotMNe7coGn8CkkCDX4MwCd4bW7WQTGLAnMWyCoHrSkz",
  "key3": "QsNwLmt8Mu3PtPUre1nwVPYEDr89r8WgpBwdYBYESHRhwxDsNrhVmUJS5xTHekfFEQkLqC3jSw6woVt4sJ8N3MJ",
  "key4": "ZevA2x9TESJxtkp8MaEUBoLLsgoaWBAkjv8UzAo5yi4pT4t9QerBvGHQmzEA6WtkvsTXZeaKvE5NZ5A9DYxPoC6",
  "key5": "43cTYeDVgXEK5ZWV4PkybDVKcy5j8AjDoMDjrufLm7GtMWBsVZS87dNo7LoaZVe4V8KVvUEbi9A1HKMEFqetPCm",
  "key6": "48myEhTerLxSLM7FWcgkz7bS4AF34TRxDuoDXgiKfa8ygwCrbP3CwPyCvX9k2VSQX5uUacJq5sAE6cBtxRr9S2tE",
  "key7": "3hozfvSFffVQNM47xGz1Q41KDuwZatxMYVLzaKibVLrp9CekZTjN4VBZGrJw9DyKSLXneoyvUoqkomwMKD5xPN96",
  "key8": "5HZV4tKdXPDrTwPfaCM7MiyRtMgTrxmVn6BF8bZwj9CPaLbBLuBc6RjgVpw5Z2PtdMRxuJoUG4nk1JDxkxiv3V8S",
  "key9": "3D3cNsrFg9sCsEgSqZWE1Yu3hvqCjVNoBLXS2owb9Y3v86cBjcf7ypEt5nhbSqQKZNJ4BFasBHFPuj4c49MarThQ",
  "key10": "TGuQVPdXJvhREdPnnAoPkzyt2L51BkMA21vRu2X6rNqndCyYV5fRnk9mBEefRA1gceBuHKix97gvUm295YXPCi5",
  "key11": "2qMnBEVVgobcPPBJyZwZryQrdsFoAQCSiBW6nvbmjRPuLTk49cHdmHdbmAC4iPoTcD48pHJh3oAVQUcDYVc4ekMF",
  "key12": "F4wt64myJ9Nv2X2MBdyrakujfLAYjG6FQtiLwhCECW5vzBRtLrsJhk6fr9T9oKhNS8DsGwfqZ82geMwDPX82Trw",
  "key13": "26HsDSXbeM6XQTQrM79uvgHLZCkAAiQNaKduS978F2Ady6bcUDZb9qqAmfR1gBaCsxFi53ybqoJ199pcrs3Bqnqf",
  "key14": "5FzCiXztDZEJr4Y4MqkZxCgkVjfXH7xRd9pennCXqaZiVsTitusbYTqU2JyPQr9dKATiEAVycnxJ6AudNHiSxMNG",
  "key15": "3CRzHTcNBkJweR9xUxfn2szbVVqupXjHNVU4SMvg91myyJoncKtNaDpwYJ5BM2QVqNQEj5TtvioijucfcrRRh7ND",
  "key16": "2PDwmB6J98SZewDXTPcMZd6PWY6y5wL6J51eG7Evy88aBQFj4X1Umd2nPkkEa16pzshgs7wZqmEsrS31AoixyPPm",
  "key17": "5hCFXQbUyzsNtqAhGFMAF3Q2ScZssNxzvpCkXe4i8Cw5756oNZHpVQk1y8m523u1Q5KsTLofeoK3g9ysRW7QDFby",
  "key18": "yL8CTRBnLrVMF4Gb4TUPGXucxQLgE4eKWgf3R2vyi8eY9nLPzfw9akNPiC6TxB9DtaEAENcpBTUTYspcsuMTRAq",
  "key19": "3AhvRNGftRVRCSSNhL5VhAnmtbxtRzF1cGrDm57auhofaVMNbP1LsjJPesQTrM4958RVetkANAwuBgqLi7cAdTtv",
  "key20": "4DcjgNKbUTXMCx5WtdrNMyg6opAXXUr4m4PdRytH76sxqFK8ceDiNAvA6e1owmgSGK13gU77zsnrXwUfm5bkozDc",
  "key21": "2ygek6Hi6s7YoageTocKuCS1fB8wUt6yS3VNocRsa7p6p1hJ8gUiJCAMuQ43ruoa5AJKQEmN73x1SdSvVbGQrgB1",
  "key22": "2SQJEF59v73YndBoTB3N9XQVPbNtmcpjiWydGdipB5jsbgzEZZDji6XpiyLsMZ46KwtJsTg44ePdgNGvwuzXYddu",
  "key23": "G3H4aBpMusTK1rC4tquPPpNW4KMiXtK9eyNhycqefe1SF51nb2PF1tr3GAb9afJkSn1MrgsBBLKDSNCcddz5DPq",
  "key24": "RuGASLDGpinqGE7c4wQUDUGXsQ1RSxpAti6oE2utiWRxXqQCskhknx2QbeQe5urhoDykvMmMMsNAepYjvky1rpL",
  "key25": "5qSa6WWDLwGf98B6cjt6GDxoTgHBKWaFJYxjTiM4nqNmFDBGYZpiw3EKpd5SQJLGYVKNwmNGBksPJpgzX1ZfqeCv",
  "key26": "3faodxopg37HhifUfuVeEpHASoDuyeXHbiTTY6iXbkvJL7WM1rRotD35z696YHhcQiVfMz8gZDGbLqkiRmhVh5Jk",
  "key27": "4QDeFhKU5gEwMJQi9SZdWDGa9qUtNG93qPjvwCknP9uMe7T9kUF3KGxPvjdWUTnfjtFJ1AyNWwjdUBiVJChYEgKv",
  "key28": "5dMBdJpXr7LeWaBFi7CyPzDAAAFsvpZDkAb38ngbyCyktVBzWgJEdnMUHhxrYrKUi6fBG4QAXMSiwBrFrp6Ah4Rb",
  "key29": "5DF2DJCZtWnpKHfyESJyqPMdQM8ALqwbvmzMZJdfULBVBbXDbKdWTDSkxkpC2wgTmEf5xc1Uj7th6kZLnPFRVE2X",
  "key30": "5rK9QLNy6ZFSSCWMeTXcfygJ8vFA6jwfU9z17Xc1cubWbAcm1usjfWpaawoiWFFceHEZ8e2KGWNSbMyVSLUFx45j",
  "key31": "4kAvWqKmYkQLoJBhKzAbDR4WHBg3ix7rUGhQwufFzrnfLuhomXHTWYrTTj1HrkKqzYphTzH7Unjc8S46B9vEEZVU",
  "key32": "RrTuRfUXtpJKoTYPx25FvhQMB18xcdroudLdhGsX44Bjae5cSWGdcmsVPCcmAEzaT8k1KPHXUNNfnVQrCFLTg2d",
  "key33": "259FALMuC2SPSfJvwtUHuCDuiv85YNynZ7Ypgucza6JVKmU1Lfks2jCv972azAy1zxEj8eHzJDUqbKL48ACqSoDQ",
  "key34": "NA6kAttQDDuDdig5AtXHBiyhFTS3zY7kTVxznbcjqyd5qkfFsmam2Zovc41goTiyVNJvDmpfZ74V5qYohdP9dVz"
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
