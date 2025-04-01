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
    "5KWweiSpo11KAmA6jSPosYS9TsWb84qxyzkvKBCCjRz6QeKxqJ4r5BUUf47dq7ZdWj219UPEXLLMCE8H6ytzo3UA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AcwRsKKY7BrkeYxf6YrnNEoEWJn34914Rhi7YMArHT94V4H8M3KfpJQFUM4xywiSkbFXbg8SBCa7WgQqXgR5GhJ",
  "key1": "5cqe92uYnjtxzWg4CuymZPugnoiM67qvLS3kDDiBhycnWbQYzU19oEyZHX2qnz83aTkEfwck6dtjB49ptcWA7Y93",
  "key2": "5Dso4Bpe2fdeJsxxZASRktVLkd2igsauei7SoHgUJZz2tRGQ1rBoeWoiZeEHSEYZ7Zx71aVK7gNW7Rik3rarF29x",
  "key3": "3T46PQgJCGABCpsKDP6n11fzNxEqtkPcmi2ZQMwY58pp3F7GW89MTsWbeC7XGUhUt2gaYHUVKSLnsos9ENbrPYYZ",
  "key4": "2sms4Em99wf8cbZiq2MyLNqkqzi4zh44bBSKGRQ7VVRyqWBShLoSBDd48NLqTcFvEBHcg4bhqbobGhSbjFabQdj1",
  "key5": "5PijeqSFRoRoY8bBoYsYMfACWPBrbascyLjek1Vpxr89Ux1KBFPJZ694UbQ4pFhkHu7E63eL12BQrn83w3jcCDX8",
  "key6": "2revLWQPgJmCUSUdxnMWDAeDcHJR93Z4gD5ekGSUcdgpUQSJNi7jV1UjE3Wz1o77SyFsV1ArpqcriaSa9JGbC6vJ",
  "key7": "3C2oZm46SHwLkF8z8LdWtGxcuD7Dr8hY3mvsyEZJRH75PYv94XBXj3JbnkboCDogK9Zct3mrMx4t9At7dJqmXpwo",
  "key8": "4WtbfGtxjx9EuijsqE7sq4d9RXcXLz7g48mYpUvsd8jwSYB4xEUS6dPLNsU5UVKV1KyJozrQXSMmgZzNvp4SuaGD",
  "key9": "2o5PvFKKQnLYssaq4knGYYyuRWzJziNRhFRNXggBLEcu16nb1SywuWrfEjnF4Yzti37zvRiPtcHf4m7bwuXJZUVF",
  "key10": "5quBsEacN4qn14rKm3vK5eutytkMxBA9dnxr9utjkhFtwDNRbi8x4n8Eg8h9naTz5BZ72EqTXjtEWAzkUnLMwibs",
  "key11": "6tAMm56gid3AJsR5KGZe3Lgk41LYsiiXbataRHppFvsG1363WUinpLXQKjqVDkEzjGUM6Xt5P6ZMYNm8LWAg33m",
  "key12": "4mJeuzEf32rKJDDVXj8s6eUSdd8wgDjzkBcAp5GVicRpSH2NdifvgrSPcWf88BoYeWosY8PaGJ3pez7orD4N7SG9",
  "key13": "4GyKMwym8bNzUAffwTdVBnbUd8S7Q5gC1Xc62kexm59jXV4bKPymMiQ4pRqqqa3xVXLNioAsqsQrYjLAyfpSLdHa",
  "key14": "rj6GGePCAEbrGMgYS1js1kfY1X7M3Nqu3k1fiAjNvia6FLXEYxrPCmY1YkHNAA9d6YBYejBLLFKd66Ry6Qs2i3Y",
  "key15": "2jmEvg9CEtib6Humo5M9TtQc33BbuxjzRgm1J9Yjuvc6bJee58WgSbLAT2cNRQ9zVcdH5bwZ1fttYnuNkWTwG1dq",
  "key16": "4n8NiSSJYtJs9zPJ6S9pZS6AGjuj3rL3cnFjCVRRdAryt751LnKhCvF8CFpphAp3yrALDGKxgTB8fD21mxDTtFqs",
  "key17": "5FtceJ45oo675EfXVccRv6k2HUue7cqVQbX4MRwUkGDmfA6tYZxHxnhRNKR6yYHEnhu3PCPoe2cAHPCtokgaAN9T",
  "key18": "5vCqVSWjKWC4U6HxZ1GkNnFMNgTtctzBL8icBbCU8ijwULiEdNUJtejvm1VZaaMvEudGsD2tJASVxmuAkcswszMg",
  "key19": "2patThxq1auzydGogXvSu2QMXtR4LoxRE9Qec1qwuyUVGYW6w7HsQ4LUx3JVQBhTQyup2Qrnx7ECeHmpXgrBjfFJ",
  "key20": "3sic9UjkfNKTUU91D8aSVimfvK4tt9daJxFkt4AH9ZWv2tUisBtkNoKJ6KvkRJmAmtRWvYy5Uw3MLiCwvT9yFLEa",
  "key21": "4q2po8PrjHX8HeWegCMEoarHsXmteUk8X2upPkuyDwpFr45jb45vthtmthhRYBDP16K6v678uDpCjQ6fXpHWD6fp",
  "key22": "SZbUbxqubs66q3ZYesPXDDYJmWb83emGzGN7PrRZZAjvpVBF4xXc7ForN4oeDgP7b8EbmJ2jAntPdwrEij4HVUr",
  "key23": "ULJCzhYtPU6oyxi4nphL2M1tYQhaLF4DLP7cRdU5gjVesNtP5RGDmP5hBBqmGpN3dzoiGJReJZT9sd47dwZAc4w",
  "key24": "srFwVj5UZmPqvv7ouTQog9PsfmL8aCXUBRzGtUo7EvTiZxxY2v35aRQ16ggwCXmXHxJX8qzVUbXGzsLfzfSm3Q8",
  "key25": "33QTrrrVCXf31PS64Jc2HvbXJUSaJi2swfuY2oK9DdWoWFxYhqDmJGSSuYRVoxURR5Gbxg1bQcniXZbDf2F5E4JZ",
  "key26": "3eieUD7TmjJKoCnrMZ8qiMWE5sbmgUVnyd83r635wufSSYy5JuRbkdAuzzbeSECQWRffzpm4NbycxTYKYsoqByx",
  "key27": "2Zo6y2VodkUhGwurgTu3CqA9qgdQ5PMjUZ6gbHRf5ni8VkEiKiWKLBPxD9F5VPGLg5h5nB88jyxEkDC3AVDvAziS",
  "key28": "Vb3vtCFH1YNTJMubxiAEtdDHZgETX7GdJ9C2T4oeAuvWM7jxpHc5gArbvegHXw4dsihMyZtdQAWM5xHJy1Zy17X"
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
