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
    "5JBzN64d9EYgK7XrtdVrSRGMuP5F8b8jAz5KKv1CJvCJ9RkiMRAZmcRERpx8wcHmz2DfAvBq69FGy9GVkyUwi8Rv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oc1Sxb58W4QJuWHNf9EJFnTmT2CQCoZQz8ThWpGBLWjfkzeSXWhF5LeKqnSFCu37Sne9UeGziBfumbkE1y4ZJbG",
  "key1": "3nVJickVCVf6QBe61aiqqAcVQu1qh61JJfccuG6TTdabff7odWAguDrPwWe2qajJrFVLaAfLJY4M2HDQwJniss6V",
  "key2": "4t5bZbRsNcDZBWzLA31JpAdUcpu3jeTVgv9aMryyuRFFwFWSUCWDRViYoDZWeRV18estd3PWPHwE4rCQ1mfBnxGh",
  "key3": "5qbouvy3NfoU5hLarjNuzwMUAxyhto39q8vTf7mkczh5kw1tePaK7cpS9tYDb9rMvbgePMisW5QpdkFiRhiTiXQq",
  "key4": "3YedGwish4iDUUjZriPrhheTnVwRWE2deuEA2pbbodhwV58RRaNESguSg3xBW7Wf8Lj2PYDE5eHeEUsDGFFBQCyw",
  "key5": "5i6SLN4gQyHmprHGsqk5YUx11PmERy9AcNmjA4etkMdF181RouGW6y4bLmK6PSgba6EzJZTKhQMpacE6TpcvuyMP",
  "key6": "49Bz5dqbfBZNYRuLjpWK5kM4WpK1AZ1buHF9Tig9NphBtVSKXdUoPHetbkDG1DvvBPeT7dR75weNGwLHAQMpBock",
  "key7": "5T6yN1tLyCi49Pwtk5AcEt9sYW47J8wRvCBAc9Rv9pKic6HeyzaRjrbyhjmyoikPA8DtuoUwfwP8BkSRHZfjr8zU",
  "key8": "57TtAimcHVBAVLH26hzSB3TvVUWRCpnQcmcpjQPPS2SxbctJEmq5ZhiM7bksMGRrLPQA6KWSevq7UXkQUaXufo3g",
  "key9": "4YkfYE4aTVBbR5M8uvQ5LHzjbywNYWmd1vQfFnA55FicMtApV5vaodeNgioQ9zdCGTEHDYgdJPF8nn9MAW2nrf24",
  "key10": "2BeeMgxuEfzQsAXZ4vMTGAapgqXD9igRfujtuS1uFcT56YrkAGYSbtX3KVSsSCspsSehC11t5HPcZc7TV1pA9L3h",
  "key11": "3U1qenTzooSM9oYHkskoUiZjnj9EbqsdPkPrVGkD4M8Z1UBsWbybLixRtZoC3heK2oNk4QrHiX5qqerBe33w2ddx",
  "key12": "47httSpKgsB5DQRk9A6kMzMFYjpeq8vWUnXG1cqgE8tyB1oEy1RUSXhhWZiFzYZzbn6XbasmNjzgeRRWGJkumxpk",
  "key13": "3xJQNoaCq6rwA7M5DhkPWRVGjTiLkVCaXmEGQmG5CqUDvADivpE7LiX3UsbkPzSYc8Exj62BEUCDA44Dc8QAMBNu",
  "key14": "5iqt3cpYA5wjipRP3dgQmuyZtHZjnb7gTaGdxP8zwrrWkBEPitwzA1hivU5af9ioqWH3RqR7G7VdS1M1Cd43VjH1",
  "key15": "4L7xF4q482Gxt1XYLCP6aBoSpXFiUp7XHcATeaCus2HCjhy984znNSxwAjH959cWqkB7o36w4B1qdSZKsmku14Me",
  "key16": "25fUwZkzRGoDCeyKV4Qxvb1LztEiHv7epNDdfishgN4y6DU7uKz4KDcAiYWsw9Kyma1SyZPYNWZ8yaV4u6WczhVG",
  "key17": "4dXDd2244GcKQXMpKE4jP3sYuUZiHZoQXoiWr1dVDuTLK5QGnAQZSHDkhsXQX9auy5SumRUGU1RZD9uFQ4d8DL22",
  "key18": "3mUJ95H4LBqvUF4V5uqMxWMoumpYtinvtjnWRdcz2YdsaZrj81j5JcepQMLw1szcFxC4Ec413sPGDZeHn5U73BY5",
  "key19": "25TsyNDD3LoH4hrqomadgSDyGxKWz4bwx9AVepb4eiEqdte1mavWa7UNiMHTkrgZUPzUSNKcxxzf2AECnAX1wq49",
  "key20": "HAvScCGieWkSyFijZgt6DytRuimVrGmdy6m6xHSXEyoi5YRkq961VudZpVpXgxKLYYeoTvZqrfCWaGfZVrtciok",
  "key21": "2vmjdjXLofx92ZyQ8tKnmhSDDKGyREdZffapuwAnnqFm1ozr4ib7BRYyNBTzyhTumynHyieuBDRhSus8j255buNn",
  "key22": "3f8LPPtK6y33obYXFzL179gzQ3z7dprLN36V4G3SxMSquJwru64o4ZF9jkYA87K89gdRtEwuUfvyhjXf7E895ByA",
  "key23": "5PZVqHZUw1ufKoqB7mx9dRQkFhuh1hKPffp31jenYBXtdFpW6BXfiKynSQxgfMGubpjY7psKdvAKjgva6CQUS8zW",
  "key24": "4D76SyNf6URF9TYqg9EFnaDoeNo8vwKKYWgdd9X7myKYN1yBRgXjXTFqT7qoZmjKmBCZ4dZSYMexbciiSmBYJbHh",
  "key25": "2NtDqYFM4pKZkHwxZ1Xp1R9dUwhU9xxtphG9CFhvJpUfFmVvuuFkQwRMGzioBFYB74TVBbeuhMpDaBiqn1PLge9d",
  "key26": "29fmS1pgYYogZgQ8pnvRJ5dALNyQuhK4SMjU43tMEnCkRZzvGTBMS3taeS4tTmwC97nQZg6t6hpJVtVqpwaL5Q9o",
  "key27": "uUAKFbChxvZZ7CfPPZkkoiWoj2jD6q7PBND4kyukdGePvCTWGZ5C25NwTqfoD5pfwVbywLPicrcnkhqvC6vXSpu",
  "key28": "3kwzWZi1cQ4ib81cUj4dqhExQfFPzUhcwhmfEztpdezNCEJAMLXiKC6FCk8jG71ZZMfKRazWBdSgH7MSFUDRKP5m",
  "key29": "3Ew1RCJGbKsQoCoNgfMcDuaymwuFeMba6PqC8rLSq7raMzEUnDR3o7keTXZN295xUz2JZNEb6D6Fa1MkXmZ2rFMY",
  "key30": "5hNBSugXSkQdSqj927RjLy9tze2DpiH4nnUJu2z1E9LbCsfeJcVcjp5aEPX9EpeeXcJR1LMvqp75UCu53JjL4Yhe",
  "key31": "jdYjSyKjDjWp6omQX58DN3E5igUcQVnuGkRjdbinQgtFeKxG4Mu31G2EeGVvhQ5XVU7fPnCZrzC63ZuWgSoZPKe"
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
