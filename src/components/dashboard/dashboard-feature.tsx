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
    "VUakz1JeYNEy1skmW7HKn4eFUFvxjXX9TN2SyHzwMNXHMLRL38t7jy4cPnTf6QByQFyHyzbS8U3MYa5sp4Lai5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S78dDbDGATVTZjy5VKJxKL2PGtXtC2buE4S469fowCZeE26kd6gkW66cr9Bz7EieGdmU9enLR77kxDvHMnmxcff",
  "key1": "4yrwG76hG3TmrhpZ7T2jhUNd3HNeEBHCgcWSeLmt39UQWJdZT6JkZbw3toQFEmnk1YBgohvNqqD4kKBVmyJcsHJQ",
  "key2": "4rS9RV2xpguTGCSVBYJaBYHenpKVXFDctHgkGUDKouaoyKqajx7f1no2SLNhZxvwHzpHJ2x5byJ83FwvTosixwzv",
  "key3": "3x5jBg6jiWNDxVUBdGhoKvjVeET12tAkRvQh81T1FAZGUQJX4SfJLMGKDBp4H9kr8m577kn2KMhanoWjehN6Rc5m",
  "key4": "28sdPNQtb78v51jb37LUEEyPzGRrbPfgT45pgBxgmw5sfGfWMQrtMoPpYb5r4iQHaSQcRm9rv7j5KKehnE93GQ7b",
  "key5": "2o8rE6S9FeawkDP3jLyu8MYw4SViiZubwDqjCr4NTTDxGjpdTWyTXpstmtgCHx8gSdEpe5uwi1PC4Jp3yh2AuHVu",
  "key6": "4MiHU67GGZH48o7N38RyFZbbexTAxoqLgbDzBG88gvQcktoZq8fHF1PTSjNGLNsAqjoKYFf9qHR61hf2jbcwb9FG",
  "key7": "36DwxhF5KXbihhP8ny9DMUZFrimUfyrAHVt9gkxMDengsDRZ5VYTvDWn2DZUnjU3G3yCAPFtKkUjoZwaoAjmoaS8",
  "key8": "2GS1fFXLAMWfJP3NTA2QnfboAWZjZxtF878snV6AdLrLBVWkMc9YNj9tETEc8Etf6s3rMQQhGWxZ81LGkAXzaP7Y",
  "key9": "2LSbjovVEHNs9Gwany2LX9Lyt84CJUJDhR1HXojtxq3WNRrh1fPEZWMmbJoWyNZTEpWWPz2t4EFQfY2RBLDEtmtk",
  "key10": "5PhFc7gELt5EqPZ1HJo4waAuionSE6avur2LULG6pjTR1CMPqjKjo3e7XSbZf1Fh3SgbvufMDpUi3QDMJUQXU3VQ",
  "key11": "25gZkxmb4UZaoBV5FF9zQJCce4YHWNhogVT6Ade545RcEJUDHvQPJQNdSCZ927tydmN9MB6SZujUbgiATkbifPEp",
  "key12": "4LHL5rrh7VNbxL3jq1AyckrWtRYxF1aRUdSNcSbNwEjKoms3p7ZgHPuVnEcuEHemhv1KRe4qn64bGZXoRSz14Qii",
  "key13": "32uzgLzruz9kSXk56BGAxjA64H8u8zEvT8fUifwwqYVKhXNJLuRVaDVJvkfYhwrmFg53oTZvKY9JVKY1gCBPvrtD",
  "key14": "22Yi3nPue1is67yhenWuKPMM127Mf7J5RHet26toDKhUcpkSVMZCCKyeGPfN5e8U2xTCAWS1D5FsvGufKkwv8eP2",
  "key15": "omY82F3cSkwGM7TuPNUxJrKMieLyiT1iLZLFHicBfwHdcu7A9uAuvLEoF4MTGaewBQJoSayaP2AXbfyPRqMVaYn",
  "key16": "5DTGg4fCStQEeWmk8Rtpofmzf34xWbWVCVhgdyiHn4HHPjjHe4oV48P9yu3gXXuRVf7P1naccLkddhY2wDVvaFb4",
  "key17": "S7cKTn3qzncQAVohK5dEufkxsfyBMHinJzWZHrGTMsDp4vGzhiXehy9PzUrm5x5ckqLpNhTub8Vn68s2GP8rQdz",
  "key18": "4v1DL2WwURqziy7bF4ewSPhaqwTQSdV2i826bjGdoMxkxuiyMNY4AxmCrq66XxEFvbPeL92a9tRTE5TBNpTBc5TE",
  "key19": "2cPyReaALoAzvr57kvkNPZrk697iWfkj79MqE461jzfZqi8s2VCbZMbWhzKFjdHX2Zqmq1eTDVfv1N4316Bgngse",
  "key20": "289h6sbxgWi7MeEXHB3WUyu5MdRr1px42D95LxUEiqZQvvxhmWcfZzkSvV2zWmLQ3tQzwEk2zmY1mya2wh25WxPn",
  "key21": "4zX3TuDpGUkigVeK1xpTigTwUhBERZqgU3pfV5c5zUMZZEcDry6vhjJN6sjSVzj6tHqR7T2XNG5ikoHonH5imrp9",
  "key22": "67qAwGnvarZQXRFoQhseaUKNxVcapmyS8WPw2ebWKWBsJFEcpyb9MVN6wFKbpTyatetJorm8v9NZDbv8EMSvyXVX",
  "key23": "2Nw9BFTx4ZVBAw8ggZsZRGfkbdcF86jgRQLSfeoUDBpiSwxinKASdU2mUp5WViNf7fjyMUHFNyAQs5wqrnUvo8zh",
  "key24": "3j1zKcetp3zPeKAqf55UmNrhiWrWpaHJ6Kge6ZEtYcsyeisP9ZHt89sdXvyoaPDaKJEe6j6gMhHv2gGaX9tLVpH3",
  "key25": "4VQomDzw4scdSNfJLvAbkkPvy3dMZZr6EopaGpCEF9M6NSLDJvnF9nLfvvhRyFz1JaWFQQ5jbSwnwyMSyiJhfERF",
  "key26": "5Y7L8q2ZhGxnSfUuYEwDMZgQQaicuGk89Ywe3Lp1GtT7NN11Gx4bTCCyPZyyNkE3ExSK3wa4EV8sAMHGMq5W4kpz",
  "key27": "38h17n7h3SszkdbVmGCLfsQPH3TfssucVJijgmRS6gRK1bxyemdKNAi1aviEdKvQ5gk54JU4U7Ep8MToX13PjX3f",
  "key28": "3B5FCNYiRCcVURvY9eLvR8qP7e7FuC3kNfc4frxdNDAx7yUxZUR2o3s5aPHwEBwddJ3nY22nN3shNDqF8bP8jsK3",
  "key29": "3uN4idXNVMckChaFy3qTV7ubxLdVs3upV1NRd6PxAxqDLW2EUSzDB1WNJswAaFWPV3qoNq2ZbG9VAUV859SLFhst",
  "key30": "523vqgjQZBhQLvGCMLV7zTvQeVphKBHqTvkBDiuZuW7bmkGuCqWp4LTAbrR8qfS7PFHccoUBzToXk8RihpabvCa1",
  "key31": "3Y3zMf9tKxVk5mPKVdHrsPmDKZJeWSyrUZGzUQfE3inT5KTFBGWkwpUV7g6eRnCeEjrh3AepJrTnGyhX7utb1NUp",
  "key32": "teoa24aoW9c3H6hQNMW9GjwkuVjd9iJGYgU2Jtf7pbB8w3Bhuvpe1cZLbjhv9Bnh6owg9E16iBZ1FrdCmMhMXp6",
  "key33": "5c9duiXQKXHsu48zdwXFnzC5489J2GyVwJi893TRzvnM2xy1zUUA6HxcwXJqoRHtiwptYp1rB8bb7GWajkt5SsgX",
  "key34": "g6WF7oZCX3GHg4pAv22Tw7fHniafxRGXpQK6e84J1VrxiofZGtWRgwF1evVjSYF4h3wiL1zbzeQ1Gx5T7NejZCj",
  "key35": "4SEy4CGQvdrWXcXmJ8uzde5CPJkrbxCKezvup3LG5dpSmkq9BpRYphWrcCxMsTKdh4Lr8bSm3fvNXmSSj8iLCRri",
  "key36": "2U6W4auGV39DyLy5fs5svy8fsqnBAH2pizPUhvX58yW4w9Lgs2z8bdAKSzbXemuFc4gXuWVYgfqgwan2oPL6ZdLk",
  "key37": "k2uCtm3Gu5vS5Boceis572CKLkimc1FK417a4TeZCjCXnQP5hQvLzEbLX7cFaGL94HFCPJ4pofsNP2giLghGpTc",
  "key38": "5hVwD2J5rexAX8GLSqH4LQLjUVQ2rdmbkqg7TbnnqH1YnqTxoYQq3pqTcKKRw1BoR38AU8jbJeK6BNV8STWT1g8Y",
  "key39": "ZZKmMHdNV3UZbBT4PcoDUuKGepVEhXrt4UVJqioj7XBy6kbSC6W6M4X75s6ftweKwhzKABUpgpDnC9Kswt3yAAL",
  "key40": "D56iPkBgJBNjzT1Rcb9heP3wMQJfPw99Qkw56gFpUYTk1Hycc5PK7TyXTiEQEgKpCWTHTTtPPDLAxxECUrx89kk",
  "key41": "45eDwgMW88wMzkiW4mHwc9p6hPTWqnPmgEFXZ6s2JAqDpsqwGa1x95zoEQPDTY4HbWoRZRZX7YftYuqguQ4RV1SU",
  "key42": "5PteceDd1iXDMURsJFJNp2pCf43PGwCaBiExwq7fGEyTd4Tkf6fmzDy2eRYoNs8C6aQyPb6K5nXPjqyo9woqDP3u"
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
