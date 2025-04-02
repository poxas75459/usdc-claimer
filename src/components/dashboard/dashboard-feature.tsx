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
    "56yPoe2hwxebySmcnUaCBWVtTWcU4dKQE4qAvrhGbvovdt29fSZx89sAHPoUvfH3PyGqmvsLK5zYG6BoR17RgHHV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pTNX6GVNjMsntzsFCAs1LYYDrzegptH5QS815MQuN4WGVhrwE6n8iBKgnVh1MyukqfhSeWZxneEzPrumwrGUj5x",
  "key1": "2i5X9FLpnP9YYZowY5wFnpx6yeyo3rdHeUe9KL4x5bgmANMDeCEfz1HUm6fEaiy3BtkbU5M6EK1u8tHzLqS8fbgQ",
  "key2": "23cLAfq8nWrbqWFbeTKpwoUaji3dp2yAxmEwTefJ5r3reSevp1tWqkwbpLJakbvcXq2XNX9XWw1fJVKAK5BEpuaF",
  "key3": "5txLXGZBpv13ya3PqpAAYjWAEBMaNcvMjXPzYKHfUEF363WNhCAavJ9j97Sw8kVMFBY6v3MmrbHTRkSM2LLaoRvM",
  "key4": "mPSWJ9g13B8z4rEexqTcu59WDgG35Ridh6W2iuxYTVkB551GjyStz3QoQbq9vkFB5i2eB2MFvNZYZshnfZJuC3B",
  "key5": "3iTpKnX5H7ffeBtg3hhKxb3VCnTP75oHrRGxbrEzemtcnU2ASX9zBQ9efS7UHq1g1PNMZD6Web4SRnN4TBPvrEQc",
  "key6": "3frLapMGrQHSDFRyFAQWqGWtgKpB2cXNA2XfVGSGg8yZwyhFGXdhxuaxZMnWeTXGAszQ4r7UA4R7mX7pAxr11t6F",
  "key7": "5vfmMRgaubheLpp9UBvwFcBFRNwMS37n5zTxvjHHvSx3jPbofyKQu7wBa5SAokg8BvuUqf5Vd5XScxVzmFmtTMwP",
  "key8": "36x28N4ME6G4DoFVLXP5CHh431jAtvAmocoPYzqdkDpaqwrLBFPxPLPCS6nRf1YkY1f2g6wFixQbe6uc9ZAZVXe3",
  "key9": "e4Nd9cfwJJvQ8cM5xjKdrgxBKKhX5EeZx9VUwtwc5xk3P4dTXHm4tA19wwRx9vCziwnQD1kQD2CvgeQXQGyDT6t",
  "key10": "5SeLHtnNnKL2yb7BCpvfEdfAcckJFzRD5GNVqc76tVSF2TG6ERtdFRivyarXkPxpsYdt5rPDAuM1MRXFSUr1W4TN",
  "key11": "3Cv4kASZTmRL88A6KHyHDcQMJTeKYzwTWGKQ6XWAS2CGr9LtzE3YVmSEiSoP9GeBZMUbivvQ299rhbPU9Q1zzEhm",
  "key12": "oySrYBeFNuMYKyjqJyZMfqE5LBAYsjA8umiX9pavEHer1j5SyiwT7uPzydZLNh61Rc6NACfa5FE4b7x4uhnt19Q",
  "key13": "4s92kUUVLdRPJXECd2oReurFdZdLGccwmAnznjWjapdwzdj7tc1MtvJA7jdLGN3Kee8kwhBxRBQ6VWMMM2LvWEkH",
  "key14": "2aQxj2mRMK5GKbS5FYmkqiYSpsZQeT4ZcY5WCpFGr61ue5biTudgtWnNAyWS4tnmZvLCbW5a2Tnta6u3SfY9yqXZ",
  "key15": "5v4HSJbZGfmqd8V53DeQ9Yo9q34aHTVZxyWTo6JpyHFsaDJNr3Axg2n9XP7wu3xxTpDUnLf6d4A2fZcMgJkapJDP",
  "key16": "5Zb7wqsEhgtCxN99VLyYJQsWdAJMvaXHEggULwxB9e6Aj5gX12H9LrBfZeHJSuLmmXrNPXsx2jCjbSAwdJ8HvGJ3",
  "key17": "4Yys1nf41Qrk68j7yotLtrtAGQVYwAbjnNR9JsZy6pkV88YT42whdxw8AcXQPA5xRpxHtXVHsABe7ZybyAmNeRc9",
  "key18": "u7hq53UvU46mFdgRYWenCUe6LMZ1UmWMq1pK39FNv5FiMJytBwNZ6hvV4LmVdQcTGAjAyAwA8dDcJB4PtTBMGye",
  "key19": "URAyPYNmiozApMDPbKMMXQcVz6ic1VGbarfeML2X9it4WdJHgSPxFMvkLtAoTfMP7S6W6VdQduSbTgqUPApNYGE",
  "key20": "61QYXk3quRChS8M16ueQiCq7ygXR9zuHSwgF1cgsXQShSa6DHcub6f2dLMeUN5NMrR1aZg8bxb8f4W1bbDRWBfZb",
  "key21": "52A3MWf6YqMc6LB9ti7Ngqrh2mmu9Ka9Z3a6SUGFGzbTMdfGCbgqLq8nt2dwynb61ZoCLMi3SBqVsWu9f76mhwtp",
  "key22": "5GgqesvDvAatxmXJgXZ2mDqnA53EtdhrugH7wpRh8N1jcE4cyR2XsaAEfBY2VxubtVqAysK4QHhJfLgWwt9ZfMUM",
  "key23": "5BzbetfPkHfpQPm9CjLST6yoEmzQwbF1DAMdjLFwhRkWCXT2sQuBpjonrwWiD8UELtGqW4xPVxRbT9mZt4FkSKJP",
  "key24": "513UC79RwyG62feeeAjYrMHnAY61u9KNPKy2BjvggBCoY85bQNcbjYpuJciuymBJy5RtfyXfKBK8gPtT6KYgFvEj",
  "key25": "2ovv6LeLa9HhRXjcnT25uKam1HyKy7u2M4tPAzboxgoGB57oLTntJa7giBEhrKUzthzZ9N1iKnYr5PtmuLcuxbtZ",
  "key26": "2ZwzbBXxUZiytxYC986q2jRPdH3rtfWyqxDkRF9nDkJF5qSrv2iFK7RfyoZjWnHsCA1M2f5F7sPKkMzhnUc6cLNw",
  "key27": "44FPQEfyroM4rCNRkaNQ5bRnFgENLXBjHN2y4CFUjyh4tV6udzBU3bUeNUyHDN6NDKXfy5trA6anNwq47DFnBa9s",
  "key28": "M6jrWu8tGANb2XNdRVnc6ZLGyVqDfvvbC7d1Tiagag9AE9jeCnWbmQhQh9UX9QohCLX3XdFWWKUDV81mTX7tzJD",
  "key29": "4FdfGiy7UFT8XCsyeTPnXBMD9hEgEiTqZLx8r8mMfo8BG4DrGZrCftqLh2CA6F3azd3QVwuUZ3AfuCd3sxQELvtd",
  "key30": "2sDGDaJhZu5cTbN5cxUw4XPAPhak8uLmqfKLUKL4b4KYfh5f5Akfzp4heYK2P9foxuwV3ThGeeMnwUeqq6N4imQS",
  "key31": "2bb3FVuXkaK744tzy6jug6vwtDRQDFXJfW7ramTNLdVmFdsKeFpJZhjtqED8Yi1A8oK3jvChosdQPqyFk2B3Xx4K",
  "key32": "51z7vKY2sPVJooYjsBdwAsbHk7EgqUo17uvr8X3baZWWtj1Y8E8YYRC1ic8u4LAeve7s9hUFgRj8j4rTZJcH32aH",
  "key33": "UGR1P7bbL3JUSv98zsHKhp6GwSiW7D37MUAYy922uotr38tLVs5wKenfbM5yQdozrojSbg4gYPhEpKJNA8GVA9R",
  "key34": "4kVcJDuSu3j72MmsGd6YXbYA7ntmMdEGZd17vKP6kGywRmBkb2EsNtu8WJESaheoiydiqmqkjUAab59rnyumtiMS",
  "key35": "2QXSdTQpD5nzhqVyxAkyUcHu9ZpN9bafsRxUrvMq8wtZzYs6zJdABPpnD9bK1HwJB52GG6wBiFWoUhxswRgUZ3j1",
  "key36": "ZdTHzBLPCvfCQm1ScxTVtWUJy92oo6Yt7n3QFq8jzoJDgm9BZohCHSyMnfdiuc6qmsXABckBw3oDg48uasuxDR8"
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
