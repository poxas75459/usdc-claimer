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
    "3hKFB2jP644bdQd2bWpXVmwnM7hd9jGcHvo445SLUJeZHgpjvgryGx6VfPi8XEQd44AK1gP6jhdmkc9FA352yTnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GxRzkBT1HxBDRDj53ZUAXoEjU5wkhfE4bDT6Pjrn3YbiG1NZxASQXbcyZC3gq63NSQSknnzVZ32Prhaw9nnQxUX",
  "key1": "VsHLZskQvWAC7MRvGA5JLt1kFkCgNdrLKPDaG2CnA4dQvALRjXEFj6PMm8PMi66BhVk3dc2rkddvPcXc7iuvmza",
  "key2": "2vustiUSZoEs18WBt5JWczuN3jbtjFmWjqvxkNLacV8asu86LZMso34s6GFLjsxVvJey5HmjGCPoCiuJjyrYqtiq",
  "key3": "4F1i5f4vDrEgrgE72u1fZLdYcQFyjSvFKbrpE3NgBWT46iL4DkRZcNHGJyJXsA73mkiaWQ98KhhmrJv7mBW5qTDW",
  "key4": "4VMh6S6CjT6AVFB1iokYhu5n3jW98Yoht8HzGRaDRmPbiGn7ujmz9TrE7x34bJYhYMCobLWKjnPmBVqyWcw2Xqxz",
  "key5": "wupxtr2jczzgP4nZ4RMBvyk7xNdzbDhWggQZoh35eSXCcMkjjsYHhmxw6FAM4x2g5NVavVRfbMAQzzQf2CFBPav",
  "key6": "5K4iGZQWRQRh1CeZBJSZAYu6YiK2eQJZDuHAMKuyAuZmwztvaD5Aed9MDJsd4mJcgoEZEqpQusv1sSBmxfXhLoNv",
  "key7": "3x9xoYRuGPqGbCGZQ4PY4DJJdZnafVAKwHcdVTkyS4XK7ogoiBV3kUkXDFymM1MEHdGhb6AzXCrbNnEv6Fne6Yth",
  "key8": "3m6C6NcDd2hV4SwWDKz1aYZWTpDpnF4tr7zWXv9V2qr3sU7ofTyeQU6SZHQLEpSg978PT5LoSDsxqopzGajj8k8Z",
  "key9": "2Vt86GQgimLt13o65fzD7zNJZ46BYov6rL1nbsNu7iTD1ZtevJV1SvhrNoQExRgpcv9h4YWxx1uiJ34HXwuZZqcS",
  "key10": "3HEYW6h9uhU7pye2LBFXAudUHAJFfjHyhJvqPeJKKnEDgHd4kJzkcmpR64DmXHYAjf9ziBKZYmmQb3shBsbaFyFF",
  "key11": "4zVr9jgUUd7T9yb8LDxtQq5x6MNbxR3L319BRVYpc8b2gNbWEHqy85sDLyveikYyk8RSQkRCCFNZCj6gnkh5mwxX",
  "key12": "4Hw4BVbMa81LDrVb4tcrYrDrHXqPmcYTKKEqGVpcGRfbx8FjDKV1mJVLRYVrxYG3HRjAYZppBNm3N5aihzRH5Fsd",
  "key13": "4XyRGsbRubDTRkLXijjEJKyqBvajMAFTBWFbW3bKhs5nX9Za6Lq4X8od5c22yGRusvmF6ab9U2Lpn3jdWGdXJjVb",
  "key14": "3PUXxrqHvaTawzk1TL2CTGoShg4fiKjAKSa1nSxc2qGSBaqXPk3oF4Yq8XF7T6CLKmptairNZKPYS4Umr5zfwEuC",
  "key15": "5wU4V7JgxxS5TLiDhJ4uHnGswX5kJ4a8rQtypjfc5wd1V7GfjEfKH5VFkSXL7XbXTrXwq5hHsvbnDNKBbMbPx7rk",
  "key16": "21UBGN7eNBStibYHP4Rbd6t5KH2MyNuF2V1UQ1Hn1A8Y2STFQeNseNijxoAurVMXcEf6u7bLwPvEWt2AAsNEvvJ8",
  "key17": "2bEU5JSEJVeoaEQb5oJJga7Exj5FsoUPUt1MRfv3zn5JFUxXq5fH1uLkwqf72nPxDVisysAwfX52wghyndG6b349",
  "key18": "3X1hMQk2tuXfDLNUje4Rt4FrmEwyuTJLdCnXjoShxbs8vs3wrJDbmismAg7Ds11xjat7UY1XQtShPD2DheA35gYR",
  "key19": "8mcqEapwEBfyNHxJ3Rc8Pgz5wCfQSPByFBPXjHxxPuzzcQZfNgthi4qf9WNL4MpPrAysr9NkeoFbxKKMbt71an1",
  "key20": "4RPPxWcikdb5ZXNihNt5VyLjxGpEyNZqhtFtoR6vuPNEqmCJbFLJcC2go3LiYdEXPtygkovKyVMoX1dPiWGXdjBn",
  "key21": "3VRTVfBn1tGHHUhc1Q32bBEjqp1iu5MbBxVQiqQ4Y7ko8i8yB7ttwYpWcCLdxF7YacPnDqKvQRUr3ghMr1mCrYUe",
  "key22": "2V2CNcEBuGaRhCntjz1RWXxF71iAVuvco9f2sHLj4tR6rgVJWDsSTpVHyj8stm4HzKZQswPrZcXaVckjyW4HykpG",
  "key23": "L9m8ypT8tmuPQBLKg6M7CJaWBPACXXVZVPmyXdnG7kgsCsxxPy9dSfpfAgC6aVVrWE5W3A2ZUCSprLj1vmyPo1C",
  "key24": "26U95Q8h2r4ZKRLCUzSq8if6p67gre5kQdjFuQ8R7ooNfB38mfQqS2Pc9jYGZJDM3N7cxQEbCXg5HJ1uqtbSipgv",
  "key25": "9XtSt4Abjp7biBnLurajPfZRwR8aEhCsqBLHns6ZuN6d7pNUwzt5pHNDDTnWr6HeyvJZFccziMai3nnucdun7mR",
  "key26": "5wPkDkyyhxpSDX4ABKSRs1MNhLwYZAga68Ggr3f9BzVrY3mFH6x7SGN6VeS3faXpKKyA7v8xAP7Nfp3LmPxVmC62",
  "key27": "5aEpoNZZ4TyrLnhGTCvCi8ZaKEkd2Dva4sEMQ71Sdn7NfkGb8HX9a92AraeT3hjRobhVRJzRJBKcrdD1hPSbAxqf",
  "key28": "2Ta6bvRFEaGGwdAtS9s3QbJDB1CweS2tYTMGh3WVSvpfdfjL8ScSMCjPQjFX1V5p5WfpVJ3dSTyTjSjNcSZRRFfy",
  "key29": "q5Yo3YX713LBRwPKv77pdQYAChU1HDTJQd8aJWMtUaRA5tx1N9G7vtwSj7foQUHX6yQpLZy15zgD3Lu85UCbWrG",
  "key30": "3t9RFDme23awc4eucxAmNRRsnFUj3ZMszLM7HYWTJCH15TD2vRn6Z7xoXF8Fnkina8pg48Y4icHFMC6Prus89yA4",
  "key31": "5K1RyJzPUVoq7PsLJgY6Bb97GDng1Vq7ZfGEayArgsu8nSPU9VLVPkLzmtADrNUPtbUr6TBJoipxX1Doqpu7ffW6",
  "key32": "3gesk5VJYZDtPdpmz7SnsQXAYmDbdhuKTzxikPuP4GScTg5pi4Q5EwsSdAHaSkFu28StzMD6HpioAzMV9Be33UaT",
  "key33": "3DdXcgm49JBiMkGyKtgFWWyjVoDvVY1uFDZbRQkM31TC4eL47XF1zc2bweBvpHtJMQf1XAqzBLaPwcr1m6h6UeVN",
  "key34": "au6u1vWr81oqsPQtqZMHpmz12BA8CKZnSpqJTtbSybvzKV6fdnDWiNWGKuHknNrHPadd25S8C4L8T3tJLoh16uM",
  "key35": "4RugAD5iTmdXdaXVcW3hBgZTaxnec5ai89JbjzNbNNJ6z41La3xd2kf1PC4vDRt2XgCAM3Bz32Zqw9dKNnmbYuMj"
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
