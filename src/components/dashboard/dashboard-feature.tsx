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
    "5k21mMxSTwCSYQPY3kcWeHRoC1ToUngSVD9ejw2yCUBB7WGKQHL1wbgbmb2KLkydKY1cu3gsivk15tvFDVZg2ne7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nfvn4oRswni7VUBBuzZLXeQuaPrbEMSgqArhBLANm6ZtjSH3vu35LEFPonAiSUCj5hkg5j68TbYhnuHL53XjZfD",
  "key1": "hWqmXyKhmYF6tgshNxGwuGLmAFaLRKAbMkVb123uNjtjyBnzvwaVxdpDWhyB44DYjeGpkws1Xrdq5L8xjRXBNzc",
  "key2": "31LxnVB7Kzm3NRmUHyqmknTHfGwzTknf9hFTZVLv5X8xFAdqZK43tiegVGhMy999ZzgL3kgoPsvWaXx23AUCKNd1",
  "key3": "1aDbyHKWoL4mokXL5fR4rtWHqL8muATCZFUoeJk6Q53garWQbbzG4EYfzM1TnSirMvyMuwGQnyxkv85w3Wzu7xC",
  "key4": "395WV2KFDauZWviK1BFupPxdGgadmtpyEiGUsns2n3w4ZkrVP7qfGoP5Xi4aBsGDit6yyNn9GVmN6521nzU7sPz6",
  "key5": "3qjhJvxpxXWoCG46qyDkJNuEyHc34QTWBnTvHc5DWfcHsBw7oEjxX3yd31v6GMxkBGn7A4hkX8UKDpHtHGvo2y2B",
  "key6": "468FwnijmKXuh5avjosx1Qhdgp3DjvhAp5eMk1s3ZwiiDeDTMnqtZKG1NmwWHP2BZNBnDmSUn8DrSq29LGD16ufr",
  "key7": "2jBepf47eVAPLkowAun3jV9EuaRLHdXWgRMiiUTHB3QavkGhQASyAb7KY5voK97GSNaJiKKm1gb1vq7gS1m5d58N",
  "key8": "LYyiQynBzh7bjBEjPpPBqySMUpK8RapJPK6UVnih6RX6siLmb3xpzAvGAqmeuDvw8ZKcn5vLizViD89bnW3Yebj",
  "key9": "3QGM5JbqvdMy8duLtzdnDgwLst7xQva6KSN1LfJCtFefEcgcKUWSeCg1oCeriwSWKFVFVygV7ypJXrXiMooifEch",
  "key10": "4wDeutsuSKCQ9zmCwnWnfZAN5fK4izuqk3Rh2f2Nmfh8ZQmr5N4eCsVdBnyFhV6JKTxyG7o5DM9uxH8SsEGsBbr9",
  "key11": "5MTMMbU7Anv6ZtxvkPo5nHxDHAueHmNLGixGCNSDvMkxRccXQGZ792MH34uBM39Ei94pPN8L8VN87HD67vvFCRW4",
  "key12": "Uj4NJ1LWkHr75bHtwEtHzd2GMDHWyiKfB3TWkU9gMoKm4NiVnAZuxQjAoHC1uiJnwqXvkEbx48oZmQXW752ZJ4u",
  "key13": "2pg3J4rW6ccmwcpLHyJ69uX3neW2gjTfiXEwUW8y7n4dkGE3zPhw8A5cAGqUnh6LdYhm9R7DRJ8yEbMhPfUmjVV9",
  "key14": "4R4uyC8sAWE6BsmJEUf1Vshf2DxaNys4FE5DjDyx5676VaHkFbCaQt9hhUxi4X5Ztpdpc3AhqongJ3fZNKpPsrSK",
  "key15": "35dAipPGBs4kpTTzUtFHp879fzGqncTL38Ex6VRFDeBReyHyxbETWrsQezejXSsVA1x4Fa5Zjsdoj3m8ju5kiUHW",
  "key16": "2ZT6dUhf42hducGUgjrRLzgKgMNDvdMwgkzuiFaJw5y7odh7TztKVCPLqf3BLRnYnRLNgMDJPnzSzBp1KZBxxQBC",
  "key17": "4v88ynhtM9d2yUZ1L8ZeUXExVNVFpcQxTLpbrpX5mG45F1Rg5c4bc9YfD4z6iU7CHAqQUjJL2i7sREaNb6uGr44A",
  "key18": "5jZ9yUYGMvsUiQjeawQp1shXa4TEYgdn84N1TT8CUqQ7qftuyyV13SY3xNvDtfiTDTxj2XktjRUcpjjem7nb9vWn",
  "key19": "4bTT7Lu6dZQZ6UByxrneYdw5jjqdBpJJXnYxxV7wGbEdKZwyKFtoSPZtTHPYu27P41YutuiTakZsPeUkfn9QQx4k",
  "key20": "38CtPiRWMNsf22iHC3s2HCLxZutVNpjCN8WSdpBV1mCFt4mvW8NTdsGKY9osEeeD7eLX5PreouhRVmQr3JbTbeD3",
  "key21": "45ZMWVBqYnmjRoxYpenopHmYFSr8BJjBmodPRoZHXopivTQf5hoaPU9aDPcfKRy6CHCndGy6XR3HBCnFwU9qW9yX",
  "key22": "X92qTygDbM1ZMKnKPC4jtcn54a8QrBQNBkAPwJqzZ6adUziMH1vJA9pL3QJzqYcUSQSbMzh9HkqmUGEDtG13r3f",
  "key23": "2xypXWn5aBh27xzX51Bj5iHn4ECNbKAQrryrxE7zbBUkBUQJJK7uqDA97VtA4m7RStcXFrtjen6q9sZZndGVeEMZ",
  "key24": "5oHCaZcUwamUeYi3ZWMkU6Q5CZpTttbTVxHnMGNvUgzHzGGq58Z1TnYEsYFhWceikhQonxpR4iuPG9jpCP3Y2axN",
  "key25": "2gWj8wia551dLG6qwjV8vqakZJ2PgfqwxrAmnhcb8rS69QZ7FV7tMrvhQxM2aVuTJBjSAfSep8neXmfaEbYftSwH",
  "key26": "3yXYe9t5mkbZ86oo383pPRkA92jbFvtrSm8m2oKQCcjTRu2As3pC3PzzUfiHDTsbKZfgwhnthwC5zCdZxtBkxoNr",
  "key27": "3uanaUY2kCDV4nqW13dmocNCAB7wvMac5VwAWNPrR9fJhJ1acS8wfWucZpBBqjHvu9D5BjxFjy6zdLWpNDViM9n",
  "key28": "M3Me7UgguRJqurSsCbzjf9Tvvyw2beGrCZMbeTQSTgieoyCZXnGvkHKCrkfjgdvqqjLPZyjWfyMFyt6nWnj1YgN",
  "key29": "cGhc5ZuYrs8YDvrDsPb22DMEz7DyqPZvxvDMzLQHFYADWXB5fjsP16hyfpi2LZ7hYmwoJ85pp5vFS6RrLE5S6cc",
  "key30": "2RQBR5Myt2wSn7VTZiLmsLCAYH7RXi5gUQueUbeHV7QQsw6N5TsMy7opz18EqWDRiW7BFLqgiPbGgdyjkN3ytdft",
  "key31": "4NBDk4wcnUEsP4LEZGLDbE2BxxrMBZz77ShaKQaevWFHC4WCt3S6K3RrNAfwT5kgWrTNtj2fAhEhk5rLTQD4VsZf",
  "key32": "5RhNukuLhbMLvUWY8MVXCDfFPhznfMNQU8FEU7JBN2pfzgE5wxQmfp48JTuhedHca1yBw95RT9ze4QLJqdGNeYiM",
  "key33": "xqqAwPBY3ZJQwTz76bBTFtAjJDVkNPYBshzHr4CsuYFfFHAmakb72WJgitKYN5X84JiJASW65pMUaYNB97XmqY9",
  "key34": "2AzamBMfWjsnThC6ud81yMHaAXnL5Z9NH2kGQGPUWwV4Q9yBszBoezdLeXY78r3EYCa4ytU5CygN4tG4ykfrCNUq",
  "key35": "4ht2gvW5adat3CaFqr8AYVk9Jc3RNCJ7rZTBZFeQ8EPGL5ZKUj4362FzqkUscwAG6egfGZeukQkTTcQuZcjTbRnv",
  "key36": "29SfMiNvcaXLRHxDMVAXPj1xnHE4wQo9e9wBNLp6LxnqFaigCJgbSVRk3MPk5SX4wvoYRrgvRQf5BbyJqC6tjbpN",
  "key37": "6qwiPEFAbjPM7V8WeWqdH8TT6sGjTUvaTWzx5kMYj1ezhVe79zxMq5nGZDMdntzaEGGK5oVuhkf8UVun7vm1mCu",
  "key38": "5AjACfZSYrU6n27YEhnmNLhHKB7zwyAD57CXw8zghDtVAq93SWJ8Ye4usEn6XQU7b7ArRUS3ZE7bKi87kkD3mn4C",
  "key39": "3aGBRoJjh9HatxiNnv11sPSRvxeur8ifUAFEJnfrTTT56LK1hFSUxHjCgPxX1EBgibggjR9VNSMEpYFwFiGkWWDx",
  "key40": "2aWArBr6EZ13QkDshCJ1Lj8F1r7cVWCwjURGmbL6FrmeMwrwyHpRmxyEFdd81depHppHAn2dnoqWQc4wdJwDBYwE",
  "key41": "4eF7FGAgdsNWb9DyTSN9GrRkaGBLDuwpLUU6UzSpMQuZSyCTEsNNigUDiJqpTLQUz7hjQBzYLkNiTm5fFdvHKxr3"
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
