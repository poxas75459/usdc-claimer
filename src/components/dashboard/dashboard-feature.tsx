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
    "5UW53ZUpyQWVL19f1gfWPMprqj6MZzPuRrxa7YUiLTovN56vt6grvXT4hZnZZndYecs963PhiTpQrwLPLU8SH8tp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yfVc3GZwwXXmWnFhHVAmWfhfdNxjxnCHG8zQvDLocAMAB2ScQVH2HDmk7AU4awNnFdAYiz3YfFHW7gfCB3XsB9r",
  "key1": "2pa5b8jKSnZE63SYYhMhnxixFVsGG33S5fGYcpry3hTNtUz12KhSbhTK8h2LAa1gmPcdVS42qJYJd4fcQreukp2Q",
  "key2": "2rewanrquGqUvBoqHibLTKtRJLTsr2116RuCN9d8JUw36MjK7bQD8GhZP95H79Wika78DTKj6JNwqiqTCPb2SAhv",
  "key3": "obsKvaCCPEU4d7RMervPa6zFwb4YTTApFudJnzQrNK1aTjAQ6NfQQJQQ5X5V4bwz2UDh6RZTduJf7dGiLGZqQaD",
  "key4": "4PRmuJFK7bjMi7Dddgh42CFQTnkPC9i3KDvxQxn8M2cgMXByVZ3vAogwyu1aPJvs9oL19jPZDh7kDmCM5AHDiQtd",
  "key5": "2vhwpKGG8CoMBg7UUDiWQKdWw2LHsh4pT43BLee8bb9KsR6gM1hK4v49Kb2eDo5Fa3XwrgZUGTXds7N4xrgwUaDK",
  "key6": "25gvk58TexTDHdii6tjAAhTfb1xKSW3Ssook3FDQoipwWiTYV3uxLkncPdjfH5TDk5MPRMJd42U3nQ3kRP8U7Cww",
  "key7": "2yeLzkrPTCPn2jnEbeWeUvR34iF9YXGEcTEkVoTgpJw78YwNVorcPqid5MhZzD5ADVVkZGmy3xgoNPMRvd1XAdog",
  "key8": "4FodBTQcCPgABrjH5ksSiX3yEmxubKkWnEbjZiUMwzRAvQK4oG7NeGEWfgXa6VrBm79xRzpCSkBume78SKGWFYsL",
  "key9": "5FAT3kDcghktRKhfgURt4186ZQQvS3uNHey67SpMkNcverGeCeyx9dggGF2hDuT2vXjPTL7tCQZdCweGo5x5vkUA",
  "key10": "5HCtFGM8oRP8jqz1Dx2zM3Kzxdaf8FCBueugB4UFR4oxfkVwDVTUK3qV13wTqRiEWcC7cKbRTetX1BtQ8d1F4kGr",
  "key11": "4DT7q7n5u1vVQMeaafieozsc3YZyp4PNSJVbWoA9G9JZCLKepzRMFpKpxSTXacUbkrjfKQoj6FBjJsAaQjkWkd5w",
  "key12": "2CkUAm9qivrvyRr1LNDditBt19h5nCbmqidHGvN54Vo4hRHHEhhDwC5PvvauyCajNYseuuaTYSmMaZPxtDgevA16",
  "key13": "21fYSAAtFsCYEZXGwE5pntCj52imQvCZzojP8HkGYpNPt4Tz666qpSL5B2Nn5LcATwa6mHt6c2QjvEo5KtvZJG2y",
  "key14": "5JaqeKVhWj3UbpcVRqxo2xr1QS3rhzryERBH5Nosr4V5duvwGwMBLsqu5wSc18hyrYCC7fwawgkLgY2ZqdzGLPAv",
  "key15": "4zVJaFcM5wpPURffYQK6a7NQGXfzsJ3FoZ3Y85EhcogWgnvFTFQ1fZUFCCmL6NcEeDbgMftHaLTjvjNbxjfmfrTV",
  "key16": "4kRNc6ZZfTTC2qsURLKsVfdJ4VSZ8zTshG6qNHMcc7qns9LtGCdkJ7hsoviSjUkvVLsKk6Z3pHpy9dLHbnCBmeE2",
  "key17": "27KXsm73Jtd317WtvuKY1LCcGNk9uTH29rkiVU1pguMjedsQzm99k9JFM2Fk5a5hH1rqW1Gez5a99KWZAj2Cyi3z",
  "key18": "4V7vy35yvFkKuSFyfXoSHsTNmfytkbFyJ54vKzVJWgPiK5ouvKgnyAPfoazC6r7EBQnTvHyNTAxi29L8LefexNZt",
  "key19": "43nFLcoLdrhkT2UwDMWLGXon43Pbx1qnMuHw84Ekbj6zjMmE1sNySHaBeFMWBMvg1DqAxxHFfLKdDBPwyqa49De2",
  "key20": "4YhA6JGKpzyKkSy6m6b5A52fnVN6BmzKSqBRicEnT78Mv9kJEH5NX8an2LEBi1Tq3LS6h8HbBVZUBjevpqChnv1K",
  "key21": "5TWg83H8jheAEvv79Akiik4xyuHPw5QmbsSdkko7udJJ3VGhoDYLL37xq7QYa6UuZXaz38nzr9weFcLq9JXMDZ5G",
  "key22": "3DfiewCbcwYRDepgCy4kzzihqKNKmnx1cYi6BFLuEhqw2SV3MRmKEiJL7YAi6srJ53abHrKMcUP5QXS9Fy7fpmE8",
  "key23": "ykbw2Nqp9D8gDAzkyAoRwPXsxWhGLT3VmWbZNvtoR4jrH6Z3UQyBge8b8ohJpRHLWPa1ShHQ83cjAAPvhN54JrA",
  "key24": "5nocDAf5Pu7rg4Y9EnqFJUFAS4YtHhFxGKJs1HneZ9eu8Mree1dLFrFtgbE4uBZc9D8zkTpuSzURT5UvUPNUC3f1",
  "key25": "469f2VwSdDLgUxEfDkcJreEmhZJDbkPySoadmXbzyHbzYt7UVx1F6aSKKeg3a8HPfQVKSYhPXqkz5bQicZLCjya1",
  "key26": "5WKPt26nvNhFBphwvz9QVQh2ou1MVt5jyYEMkBQ68KaVMkYjXLPuoo7oh4U284n34R3Gm5mBGxJgQhgvsri49jqX",
  "key27": "4ToLTnXVrJPfxFaAYcSq6JDkojjxWg11R1WngkBjddBTqnbow1c43ZdpTSJov5wKQQ1cE8iVWfAtkiL2Z3AL1EQD",
  "key28": "226g9Dz6iGG1TD94xDTC3rSX8V1WdFTszMd72dg2cEPZ3zpHJY7VfKPAuLssF9XxLZfvxU5hMV3qB2jgnFDB7mjv",
  "key29": "2dTPCkkXe7CfXtLic4k2CR3aWgNZWm1Nc3J9PcosmN8dp3wLVPBPVBxjkCqy28igGSqe2aJEE1Tgwo2WTKSJX2nG",
  "key30": "7Mn7pWcZeq4Pm53mm6uQ9Kdo2fDJbhB9GyMm8CLskyySnAgdhCc7bJsCVcVGnWdaw6aTzqeZWxE9mxpmbD28yyZ"
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
