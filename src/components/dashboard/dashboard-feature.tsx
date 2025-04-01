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
    "2xqdtT9Zqihn9XWi3qvSPJCZXLCVSNd63c2JVEb1sFgJrQ7t6M37FmChNjE2ZhRGFgcqvVNneAA6qqvNPSVej5oC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zk5H1XK5LLcdHm1gsHm8QfmWVKyaEE8P1V8V7fMoBd3f4UMRJbufhcpNBMjsPWRuQdBqXTsnmDYtjeXm8sDBRL",
  "key1": "5AhdPhVXTpCV9BcRm65SXEqevpJXQnRtH7fzUnRcSWq8FLgbSwpgiv9JYwswXxCAr1aUQDjrzsFTJpyroMfygnd2",
  "key2": "T4Xy5iY3xLbfdmJXM9BVDoWia3QDNbU3N3ebtqn51Dh86HoELgSa2cCsaWYdbFeASHnMwcVLvzCj3GVsPATec44",
  "key3": "2d4feeAFbnDkAAznvJXN88tihr4UtaiVUogvpbWDbnQj5o6gZ7Ep3dYvBmao9Km29ggBoZUiLWRr5dSrcJsZNf96",
  "key4": "5t2uQp23AMGkH3vYUY1aXgjbf49aUmcWa65aC8NxRpWuuBcCovxEbnKchh2wzW4SoQr2c3Hgo44NnssiBtXA4KCQ",
  "key5": "CCLspcoMisFtkaoNk6S3QDP7jYVyNxYNjUfiEWZh4o8kF4XwHGMoutiMMBRW9vDASXZLCRFPS7xHBawEsoUo9Jy",
  "key6": "q4rZcADC54kUQ2FxxGkpaqVdAZfQnVXVs2wi8NsiPFJDSCn3wtC1TuuGEEWfr235dmxEYxrDY4HqkN3daby7ZXr",
  "key7": "2LYdx2YSCn5Fv5gdYxtqx1fWDpK1rCpGSwGxEUXwZhM1xv4ppf36ANm6E1of5XQGioNBA6SvLGtL91J4UJKN1vS9",
  "key8": "4VYrT5Q2xNpKMmSCHu2ibU1U5gUMsKD3p8b2ugUW4vk9PiE45RhbDtmkrBCbJBnRrCsdsxjfHP9x23ymJasK6EuC",
  "key9": "3e49RfKnHnzmpvH8NZRb5pmsCRuDS1wiu6FDLJkqDRjEjGCThMvCoomzyVunwaac9KcR9vaxMMzjry51YQsEAUwU",
  "key10": "2k22swTeYWzyZ24GjfKFZhAXUVBYfkPHjN6v5nU6ZEUp2Z4Be4nXnYBuwK773DUSE2mCegcb5FVjZk8L9wbXZCmR",
  "key11": "3wueB36uANEndDNVusa64uNSUweEgoHH5VrYro7L2wwvReFfPyTURWxiwpUFbR6iByEqHqF7jap1JU43yKxPfgFi",
  "key12": "5wiF1ut2N1i3RKB1xYRaaSsRcP8gze8fryNRuY6CJxXM7UAuJEsG8NcGfRLSythdgvgpyTae9PLPYjatsURk6k5u",
  "key13": "2Uw83wFeumfQo323uGG4ptbq8EF8MFrj1BWKy1KYJGYZnn6Qze2VgPvivvzoXun215i4vk2gK7Ja2DFPhL2Y2uzC",
  "key14": "tLcuBStDykRZL5ZSaUqL5WAz3dcnZRdzafC6BoCia2STVrt36C8sF5yPremAAQbKKELbLcBQJqwYHnb983kP8eG",
  "key15": "FZnyr5nnF7EBT9hyUsaunvtVvgzFP9Dt7M795m3AfUiLJuoUC4L8jpcScBVuZ3TkyzTQmcFTu6AWKoqVEkrwvz5",
  "key16": "5PCveWADHzx9rzk8QGx58nivnXDfG967aThXgHfrfi86FDGi9SGvQZYAZZTXG6R7URaXSEXEiTQKwGe3u7D7TAi",
  "key17": "45F4fA47dQB6Mrg3GSHxFWGTV6ByeuwDBwph22JXh42B6Y7B8v7F72eNZa8rM3AdMCYeNJfy1xx6EVQEqpfWLiB1",
  "key18": "eyodnbMNF6JixQa3wbZQjuHoaohrs8TFsaqbSj8nKv2vAnnP23kvz8GaWVN64ycyMRuNrTeCgNmnwaeXskYYvTt",
  "key19": "3QKpsr9FzBpXDY1ZgYpagxGqfeMpcWREVdH5NeL8vC1LGX9bQc3nqdz8K3jeXtBFFz93UkZntkRi7cvHF71z9NjS",
  "key20": "2MLhYi5zx7HEqSwW55qJzT9qA9cAp8iiFUYJw8tjjaMm4apexjHAmfdzSahf5P5Xang6iJEL6AApEm6cCP3DkGXh",
  "key21": "CmhGBTNu57PhBCujeYRvXrC45F7SAiyJ7xWX844czV9JPsqjze7N7hUikdth2YymqVWuEngxpnzTDDxfvjBQLbG",
  "key22": "YEmfRmEj4XL4kkzHnDdJg1NDe7F4TSXMjQK3FtP7F415t6xwLEnsBnw5k6ndvguVNfHaU3JGYH46HMdZxEvCzBb",
  "key23": "2SmsJjzkoKJZ1fxQRkTZoHs6DzALzeTbfEwHgAd64f5wNQhot69PA2ZoTmAv4sjJ95KKevjXvFbZ3Z3ajynNoaX3",
  "key24": "4T4N4b2WEDVjZtErTpD6DnLvhFvc1JE8vcpWykpNhhnGbYi4NYUDFVKc99Wv9JdyEyTYFXeeKoM8jpskUnPvonvg",
  "key25": "pZchPq4yD8onNR4vj4BcjZHFMzy2t2RfdWHYBrPDr4GAmMNtnt8g817RpGfoXyYEpbop4qp81xV7r4TwerBgzpN",
  "key26": "3QKLvnNVJA4BGPeZMccZKbsVEWXdeNeABDeKLGGpYk8RHk9uwNgvUwJzHd2iEzkcEArWjRPYeyZsbA4KfMEw4smG",
  "key27": "4FgLmbZN8ZfZR8HuZwGMEcEBAfLE917xB6kjbjFn2Y3QWeZpyLLa1CaUW8pfH6T52WaWzsRYSpXoK5xcANZhpzM9",
  "key28": "4WQJBGTK4ngHofaoZgJKutmJfDUc1JwTQsJmrjQuTJGF26ergFvcnCyWSSqBzPdcQf2655MtJbxxvDkNUekq6zdX",
  "key29": "5im9YAKE5bV8i657xXbAAM1PYtPB5Q2dGPyse6Pd4HzxAzNDKMXRvXSsMHSAhgKBjfTQCf1u4VAmLpJLXSamBvbV",
  "key30": "4KELMTzb9betUobyqGfiEcqZuK4iX5bnF4aJFQWpHWeuks4iTRhmF3oiSg5UTLENGeMyWRrdQPMruVG6gUB9BGeA",
  "key31": "5R5cCCzy2YxTFhkNitXLCDu6Syjzc41uu78rs3Z69TEBxB4dktbEfmNJaeWX1C1P8TG7T1Avj3bhtgJcPF34ZErp",
  "key32": "4h3E2oZBRkRSMs3Z4yLDQZevv7pPAHG4NvsFN9DX1PZLq4UnYTjuw57JnY4yKkm7V9rwKYeBAoVm2bsopdMvRMyN",
  "key33": "5rWqkx8CrZ8gyW2FCLVGMTMHSzSvmC31jHLmTisHYKQAvycmiNG3FnL9sNEAgjx6KC4pwTfajg16M9WAFj1EvbzF",
  "key34": "G17eQ8GrRmkrgi8sF5jVxCJ6nwhkyLRmyQrxGXQMjBZMKW8XQCgdK5KDjiKPTQUnTKWuZxvpy4yF6wGVEhpXKdP",
  "key35": "2mMjPqycmiR2h8ojiUuPjFeuVsW8co84gT1gs5XKjZ65QLx3TxGuUUtjzAdUUgdkxZH1vuexx9DCoy7eUh1ogrup",
  "key36": "58RPg4cp6U5UrFWkznE3Z4NXHqGLS9APTeC8fECAn33oWkBe3h8H85rCxW29BqB7hRoggWugysPfgtevnXHC4H6p",
  "key37": "2HeRBHBZgcqzJwER8McmGtXy8bmr4XbAsWr618Lq8xenb4BabZj2NUD7kUQsXkNKNp8UxgnfAeMKrM3d7yerHhkk",
  "key38": "cUnW48ULX1eGX9FzXxC2X18UNLZ2DYh6PNAY9APr2Yzcf42sBbSaJ859zxBvy4VbTeuTXQDg7rrtcyYF1VvGPX2",
  "key39": "3nT8bAu82VjVTKTgdoiqoNERJ8aMj3miRYryD15hHYJ6c3mjZ1QCjuBGHGPQnbwyRHB1drzzXmMvtcP4riFo2jFv",
  "key40": "3RwwV42JAXqgiM7DFjesniy22T1Zsz2LtSn9TNshimn9Ch4A5wX1EiwdTdNyRAnf7YVyTs3PiqhpUHeYX1pXvjdh",
  "key41": "65eSdEotusmKfRKB558qmGALLY9BQ79zpejwKmCpnbKYyuPxbqLkeTfqQEaURjyA2PCNMJyHGYQHXtyKbcvSewpD",
  "key42": "4PazFyZx7fhizfQAFY7H5F1T5sTSjas1tJX1MHpbjGW3d8opz9fisAKV2R4obAnKQiVAsYqpFWNiS1jBoLdovpYm"
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
