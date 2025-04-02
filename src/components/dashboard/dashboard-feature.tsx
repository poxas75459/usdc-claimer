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
    "3RXfA9sYjcxPbmLHsxDiYS1SEESK4Qf3r57GpnRybyd5tTWLRiAb8c6dnwUviegSheUNBeNs6UyuMxFTz8iT7sVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A3HBmvEfxVGSRxSeTvkahAMsYfHaGz1AJqasYhsQzR5PDmHiviHH8zsSmBLBpK3qU3bd9N4vg9J2vqtKjunjxdQ",
  "key1": "5nmHnVXZvq31i28W3h7SByWsPooCNnEDtLTPSTztXXPBVJZkYhXSkVtn8N8HBCa892fVWDL1NerNTSzfwTarPKHG",
  "key2": "3Bvvpwps2xuq8KFuYS7NnnmNo641xixZuSnDjCtu13mDRg35dAWyHe9xWwpREo7tSdT5uKzt7w4Jb667GVNDCwyt",
  "key3": "4uvNsyBWhqsCH4UmKqmRcUSkm3VtspThDjawXhcfrNuENFarBi8cxVibJhnuXj1qRF4W1EY7WSDAKsmFmPTRHsHh",
  "key4": "5ryLP9R7HzZ2SXXYihoYMHu6Ct67aQzGpf4UHZfrkJCLfdUCnCAmSPyiq8aR4q8qrC1LG3UaMqQFRheiXdNVzk3V",
  "key5": "ohEMae6zVGP4DSAgxgsic7n6sCDbjPdku9hUisxVz5VUcbcpyRyYmZEEgUhT92AKdanW2DhgtZkhgpy7Jfyofia",
  "key6": "2syg2Lx1FccmWRAcqmUbqNhmqhk58drRqhKJSaAo8wQDkF7VKFfPCzGzs3fhARGCnYqQeAib4LR1hVcfGjRkFPjJ",
  "key7": "5k34uwJnFf2MqinhYKR4KY7pauWpnp31ncxrUewgcvnfQoojFgnHWsKvTmQ77Q3Uoy1ogZ8U4GTrrUUE89SbzrLd",
  "key8": "4hxiRXvyAidg1XcjLwP5b9Uf7wKhggi1Fc2q5udur4ZGD9t3ocAuHGqsQQxbXtLGBNqjMt9b562YJPq3omiML8rb",
  "key9": "2AGbWjcu4yQMLfrC1KXJ5fCUt6NCVf73cMyGgyodjeXzBq14guNumybsxUPbJfSyJqRtWUqwxE2nUDKLibLt7Ykx",
  "key10": "NgxGWpRP5xpPrViWmh4JTvGaJuroonH5e5rbhhai4xc8nhKALtRu2FrjLxcqu8oLjdTSF5Bg9qbSzx6qRpg9Byk",
  "key11": "4dUS5zAjnbAyUsBjoe7r2jWy6hE7SCHK2opapVL6UKja3PrgA48xadhDUQK9WeoiPBuxzCAARdReaVGWk3qYdbk8",
  "key12": "2mYbK5r63vgroZZpmVowgkVBdiWZ2xjMRDfZQLEj5DoELkSy979ArKxNU2vuZJajhz31HS4ujYWEQpJNJk6Z7KRo",
  "key13": "YShS6Xw6wfRvyqtkWeAdZ1f75hF3G4pKJVyJQxd8X8RQEa7iJSsiuipnjxPZ11KJ3jg2doTjxi2mTtEx9Q9iTw8",
  "key14": "2oiQwWWfH4KQ1Pps79P6KGa7AUteSbT59S2tHcYyZJM5UvYbmEH3ncjTMyndcgiTn1Xfjodki8ZXtJxNZ8EM7QYP",
  "key15": "4uPFVk2tDcBj3cW1XP1wbPQJ9KPmN3BtaAWhbHqBm9c9Mpuom566xpxGqL5U85278mMem2VKnvF6CK1uZFm46NzB",
  "key16": "vSm3L5cqE9bVkA9hxPHtJra7Z38bFYeUSPSdmRCz3x1rYCC71SgGdBEVr5fKDxyCqTt49XaogNvvQYn68fYhAn8",
  "key17": "35tgjqvTZCUU1thzHyfEVs9vBMMCuQhYedjQcjEXALuH7oPxppCwL9b3hrjCyLFczm51NuChRi1SN7XF4cC149wL",
  "key18": "36cVNZjXb71Pn7B3JrZ1q2wJdcB1e94nPXj6XUBrio7JqGTykJQ9n5VntZDomoVFKhGwfZ7WraAGRFg73dpK99Um",
  "key19": "3xD339572K217utdYKBSmexveU7KKtypJyRu8NgLeY3cqeFKm6f8TmxgDhBSLo8f35NbbELYB2AZvnxspu5whvVQ",
  "key20": "HFs2urjkRZTc6aAaBaweNbmHPbhTfVDvw3rNqEUvA8zTZpzUPsWaECDLAs3F6YHxz2bJjDpPE4swZjKqpvTdtpm",
  "key21": "334bxVZASbw2smH5XiV5JDVfsBwXfUmRoJ2eHTe96FLYh3s4oYyAmW1qZb8YRdVA5FPnghebSQRyT3fFvot8dwdX",
  "key22": "3UbrgnrRNihUsU5U9kpGPXriZfNerv9nt5fLrS6mDh1eanrFbkqNcye3DWHEi4Z2KF17kU5bpRxYvvEH2u8ySZ3t",
  "key23": "5UVRcQ4RPcSwEsCj4whnbHBjy3uDigpSLQgxTxFAAqnoUtTKHfWkZv1NDDufKJwKkV6P5YBCAXMgL5VMAe2MN3JF",
  "key24": "5KWKEQ3Cy4fuBbyn2g7cqfEsjHwkRnZRadQwuGKvU4t3qz3JQQAJJ226NLoS41YH8oUyQmHGEPjmjpcr2NzK7ev3",
  "key25": "5MJG6rJKiTp79gJmJUtz8MiBm36guUV6eB6mh6moegb5pkKjKpzczAKHSVYMhodvmYEXTNtzbehPEgPieMDxF4iw",
  "key26": "2ND5WxZs85uF4BLV1hbXTvAoqkxVF6YHXW1bFLtBwk1zFn39TEGzkXnoN39PdgPtKVG9CDD7KXZ5bwTrxHH5WsJ5",
  "key27": "4xv4rtdZRwDEEDzZnoV4FJ6LDfTa4YFXwPM84bJJHjDfLrt3o455hQ37VcDrLW2Z66PWm6L4PyEZZYGxAKCWQ6nU",
  "key28": "4Wb85wxqhJNMoQbGv3NTsH36uJQ12KYNVzmzh8bHdbY6K2GUaZjmMqRE57yVP3pGQPyQTTjjY2skqjV8xWmwtySZ",
  "key29": "5iFVhv3uwVhjfHQzosyNn5Foy4nXTdGVCpnj4Q4s7roVfzYJJ1EpvVdUJQvPSkRinR2bizLcha9MoLS77buTdY7W",
  "key30": "4CmM8jHNwKEaD6HammXEH3BHqaUfUmCqairoxp9vg4BhSrQ7Ts8SFZfaNXH939T4764UukJDHHQQUoiMuNR6JjTg",
  "key31": "36HSa42NC6zmyWALsrMqP7Wky7qKM9WcA1hvHYLXZhHe4A7spF1jGwW9Uf7pT4xe9wr8Ldqzqy411ziMu8hb6sjY",
  "key32": "5kLiSb1b9ytRNpxEUzsYsh8KsqRi8PodKGWMyJgP9si8CXnhkifzSJZ31bvNyKbLb77mHzFcp4sdjauG3kwasKuA",
  "key33": "5WaEhMeAAPqqJPrUxQRjyTQJmqhYGvdoCSsRxrFPmXW7CBtDmGF3WZtXmKxid74vQtvjWDURjby3eVAaew1gbgLD",
  "key34": "3fNSYtcuDPufZAvNgabZm92MkH2oqrpJrh29zAWjoHyYxBSAWNGwcW2mQYTXaiQqMip56fdgR9ycrouT5vBFDzWx",
  "key35": "4Bra18dJvSpEYuY4tLf3q7KM8KViudxS2ZB8zui9dvW4XpD4BmB4YpXGtRC1tx7HTT1qSWL8n6QaMKTqFXguPHG9",
  "key36": "5XfvPbBWLsQ7ypcytpznhkPCQLQffAxUTKpAiy4tYPr1AMfscbRsXnGYF3K8ef5jsQN216FvxdRg3TWhhCfX5EXZ",
  "key37": "2MveDgWS71MZLX2vYLVaM62V4GrjRNpAxchC9DzcqSGbWPRhgA37PBXjvs6LEN7bDYyxc9SX74zSRYGgQtc1Xqzf",
  "key38": "XwADS397vH9P16pycRyuYRRM3sWkAzaoF22djXfrc39oFTPmUKtgDeax7Q8a5t82T5CT2tvBxe84Vs885BUESF1"
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
