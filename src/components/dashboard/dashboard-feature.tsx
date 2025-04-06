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
    "5HKfHgdNhnTtrVZudv4V38SafwaZDi4K411VWHmn2VuNErnhcBLawyixoqrh5QfwzwCxa6pSYnK53ZVyAqSqLZf7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pof9hBKh6BpknZxi7uGGXEXRtLTXj2xuF3WGyguRzpMZsk4UrTjH7o2RrMSwEgJhM7bQNcLbzTQWQo6BLH1veXt",
  "key1": "Mf7PC7yK367n1s1iULkwqKG3AppXFNUzSdyPFqfS8CiHhx6W1oGe1YRmDF3BRa8SxobhuH7dnfqQrRqDB9dXE4A",
  "key2": "2TZTyog2qvraSkkBLPDKNZdNGES59xMqLVbNkoLrd8uaBbzRZBH1wjVdEge8scXhCSZJuJNCKFkfnCiVmd2rpqch",
  "key3": "3E3F1mkUU6P7WPc6UsLuHSB5iKjMDuLhdozfyByA5jgppfyGCzmtaKEGenLh14PKQ9wsJr8S3B6dGjXxQXRxYKtn",
  "key4": "3qYh9bjbivgsXBaq9KgwKgLmMdqPFX2TfQUBri9BRm5GySLzXHZQMmu5XeqHcYLfMx8WqSPDXod3Cp88Td1fnXNf",
  "key5": "47pbSmneystUihxrPxjJuTwT41U2k6yjcUS1qQ1hbLuGLhUfeu1Fa7Nm4jxkZEFvy2Ho4niKktRD7tJwVQmBTEuy",
  "key6": "3iFwUkMxc8KzHX4SaFhoHTmFWEUer6NYosYCK9xgWpZCrFdHZKcudB5Po8BMo56JXWUeShSi1QHwFit8zBZXj4u6",
  "key7": "2DD57maz5aK8oJsySWYu4FkAS128ub8RiEffB6DrnyWjNbwc9gzcszyvd6YEw1CW1hFzLpNLaWyMyHG9bPayynwn",
  "key8": "5C5JZkRrJG71s6AvNBWuxQTLB9tGfXoXKNARwwYBVBRhgQWcvptHEfCohRvJKZnxW5UUpxFsWghR7tu8iUm6d5KY",
  "key9": "4Wus1ry9CTggX2kLC7RtmtkFCJqR3r6CZJH27hnX6BDakuTu6JCqdLmVhX6fRECRZdgHpZ6uuPe8zceueBUbqvAb",
  "key10": "LBFoiU5DyP27ZVdRcSndy5XDTTaK28NRujumJuUALP3L3zTMLZQJ1hVFGtKcaA2hzNgq5JE9WwMNZSNsin52WYf",
  "key11": "44kimKzP3vNG2cwq3YzoQzh6uVW6dNnr18amLt3sJqEz4sVQhWLYexQnnURCkRFL3XmDTqwGcgVLFgWehLEXFXGC",
  "key12": "5R2wZ2K3wUNVXUzqLgWUJ6WcR25h8nA1aP9SfHSN4SJciD7RQ37kCkzT2HHtfBmcs6nwoBa5obKT17bu82GzSjWD",
  "key13": "55R1fjH66indZPcRZ31iUpWkNTLsKPf2cXRHWcvExYJTCpBJo3WfU2i3ZTB5rTpTBiJAij4mNhgpsVBMCS2PYrBi",
  "key14": "3peSew5EhpaXDzBieqTXP9Dv4nqTqPUodT29CGyV7EpkN5jrH8GuuqSRQ99UPufa91uaRpXsX9i9D1qTuRQALVKi",
  "key15": "2haUFWHJdUbtHU9rTuyKm67BwnLG7mmaHkmZvW9dyQraQWdvnQHTuAQj93w6fDBEeABbXNWNPaiVYQ2bi289gTkY",
  "key16": "3YBnZ1N1JwvRNneXu6XN3KCFAFx9MpnZr6XpN7qBXeyBYAbBMZm35cNebJc27bZfVQyXVYee9zYpeSZdUMXLLBGt",
  "key17": "5sHN6GS6dbjfSEsyJzBZ6bpLFWiHF4iRJhLPk74LMfjtgqucsebKw99mmFtJ8upcmhXdJX2rSi7CE4oWSq52BDz3",
  "key18": "bSewb2LWp4TrpSLZvRvAJ8Jb1RgWzjkrpfqcPHipCLfReugWUD1dpY84MxdC3wtuGFxuKNNx71eon96iVQaYQ4F",
  "key19": "2rfgsUtsvnzgAa2UmpjZhJQDrariXX8N1juRC5puaLi5AcKf7QUDLGCjtirp81Fgt3Sg7vKkFn6GkZyahKvwqazL",
  "key20": "5hxQ1b99fi3SV8TxW3fvdGeRVCp6SUZY4x8ZKzuWmdtsVmn8p5zfg9YBBUB5XgTxUJkwAP9hKmyzoMsbDW55pfa2",
  "key21": "4gPygUG4xK8yL31Ddaa3bn7YWktduW8tdHkVn21NoMHAyc4kB7szhk4s2WFvQUzph7AdQM747KaqzAXti2RYtWLt",
  "key22": "4pdEytiuAcSiHcfLd3jNPeWZ4HcMgsGnEuqUfBLP3g5B5vpPBaKGJ1y7NaK5p5TS7uXSuq3fLmH5zZgY6B3ZRwfS",
  "key23": "59nzqUUjbagGopYFSp19CrHtqLr3wPVnw18x39Qb38n1aboPZGF4VFmqzknUMwPognYPP52V4ZVfsnt5fbPAFg6M",
  "key24": "gLXMViStf8n52Mc3bSCmSzya8cKUd2QvB7UrZhAU7yhge6BfjTu5guyqNivPtEbVEQjP5wJcP8b5bJP9o9c7VSA",
  "key25": "3WnviJwjHZYbLSUpxAaHP3WEwmB25cqBJzDftW8LkiidZgBPo8SFc2d48PGCCo5UAx1h9Ahzb9WWQpGiaJjw7RzN",
  "key26": "5dMZfSz19gJWSpR2JtvtVncNg39XKtEjopMpEBNv4rw27PkMvgDxourMMEnFZXRRcUT6PnU3LKUZHTr3xVgzos5N",
  "key27": "5pgjAk34Rq3ofTnk5KMhyRX9BgXUVkZgME8vtDnG8sjvsta7CpgeGhnoxHWpFEuLrqpErwsd1RqUDPXypAAEPRmx",
  "key28": "3HwFktpWKF8wcJL7GYmCj6m4R78kH58uzYPGd7i9ZRYnDHCumZHTkQLiPFLqHWZkWrG2HB7bJkgzaz44apBjk2cB",
  "key29": "5BQimyctovjrWXx1mLCvyiCbyi34YakB81JXcyWJrkNh3pUjtd4wxRtGVFWadBkPA3fGTFzYU6kTzfFdeRD7yGzc",
  "key30": "5jrKXNTAefVUVBrHkA9jAsoZGxG5CaxSZz1F9XWJynKsC49WFLZoKLfBVti8NKvziwSdfPmTWNJKv4aCYoQDpj7m",
  "key31": "4FPamwXMsWdnxdhqEuzzgocXWhPu3QBsB6wZNfDsm4JiY3rbQ6MY71WJRdsnZSiQ7gHhkLuxPY9EHdcd7UfY9xGs",
  "key32": "2q1AnGwcbeZaqNj6Gr2LvPFt62JNMFMRvmhnAyZew8SJC26yXjbFEbFeVwH5ZeWCEairh6JDYA4LrzdbQ8pYopTu",
  "key33": "wYz2dbH6nC4CzMeJ75YxcEzmrp2A5N5dJQLk8GJH3aV2BoHu4ZhrGUDWy8TZiisif3CFUfvCxM4uXhSzKdp4jM2",
  "key34": "6MEU9EdVa1zXZzZ2oRFmZuLqL1vKyX2RY8DNxC114FGt2uvCR59DCdBYHJEbi3Eds1AXU6aUejfcvvRNwnYe6JW",
  "key35": "49BvE5fawptHAnup6Ye12jXKJ4QfPo4vBkMiYJT79duvADEdFSBgPJ3G2wkVgrLB3Vxrh4jv6MU5d5ycxqPdksPR",
  "key36": "3fVLcsQHScbkAnAdrc6WbhBbiakQkNG3jjxknDxVSeYyi4SCV1CqZV5oQdMFwdYrFuqTdFphySoAwHG1F6deoZka",
  "key37": "4swvnpjYzvDN9T6ziYsJ1RWzh7QSCkGnG7WKi8P9narCELN1kq8TTnCJjWFt1FhGMcVKxnZEchQxwLAuGMYQWZPX",
  "key38": "4yFJJsTDATBJJgQqD41t5sEBAjeNmTD6uJMgtHS1ySzKA5AMsk9nJgp6nCnCcu3T5itEpVudxxr5KoRbvp6XhAQD",
  "key39": "5WQMrtXaLw1iPoTxeHM3a4rVFSWTZeKcNkTimTWajuDZfvuKXoK1QscXKPcgZZs1Zode4UropEodZby2mjXhdJ8",
  "key40": "58xYgJTdA2RTKHLvGPuMCvyFe2o4j83ec7Mc3ujLqk9kyJxUkXX8TWSJWT5Hh9QgVG52C9hzRZ2XrU72wCy7yTkm",
  "key41": "2YjarxJeVAyXGFjvqvSw52FE4EvgF3T4fYtpoLwzprGhcrQUhS2Mx6ZdN4APtiMmcDgNz56bdQqeG1nMHiSnUCUy",
  "key42": "3K2EQPxjxabDuqz3LG6WmXX13KgcyPjvrqt3HjWDqpxkY2WaQ23GwEqdW5pnbfDhZzzYbBuR6fsqQuYQmg2PV5YZ",
  "key43": "5NoaBSQ9NcdvkQZkckS7Naf7Ppw2adayxayscr7ZiYe9FDA33SCiwx92Mn5wih8XrQ1xQ1mLKJzhMw6sQUDf7fCu",
  "key44": "4PYXiHwPAq779xFh7XSujEQCLV8433k41rQZjiLJefZCkpShZGKegdfESr5JVQQ8MNGp5AyJKhN7vdV8pET26axw",
  "key45": "UseM4xs6WgBcdyTVL63inbiRSku65WbbUgCgLSwrt7iPFpussQ2HUzsxi7QZzrjP8GLzyTpCx1pikZPBidUNqLB",
  "key46": "24DsEVMEVDY5Vhv16VzEda7x7o5dXyka4FiBnEc6EVgGhk47eBF68SHLrdeNeFowtbZUcxMrKqNDLrdVfU543EGn"
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
