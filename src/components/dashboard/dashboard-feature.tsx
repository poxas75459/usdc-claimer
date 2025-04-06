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
    "5Tq57QyYQaCGMEkLNxp42qoxjYgh1v9fdR58iF1v876yoZUATZ3RFedn13JN2ezDZTNzPstbfb7peRxgDCwd74J8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v2wZfbkUTjAH7jwP9A6FrivN6TMbFsYAGA7MGMDjGuzrCfvDXfUfYrr63wnh4noR3kCcvM8pdVhG2Csmyy6PgJi",
  "key1": "j1TNZCMFUmSoHgsFxNHo6L9QJfpsA1afVSpwZ77xvzbJsMXC5PMb9pBpkAjsFXy1k1pLTbez5DHGeUTfXB1fahF",
  "key2": "3g1a7SYrDBA3oBAWpXqc7hcVZBvGH3yN9BaXxgKmT76ex8jEc7sjxsWpoBCvBn98eijYBnRWPQkkyjW2BieKmj1x",
  "key3": "24yWj4nhYxCmDYqtWEvJMEEHeG3QKiHFJBCPbHbdNk5qkVKogcZjkfFHLQdFB4po45NTkauK7iTQe5hvwvo4s1HP",
  "key4": "2tsRTpuSRHUecJLVUf6LHyosAS5nM5g6GrnFbYeTMuqBKjEZrERSmuLsfSVL5ecdZV528TEmuVKu4cGSdR9jnEfQ",
  "key5": "4pyTjP6GTQVWRuvugd1bYYNmxfSDLqwBRgKoPui4UEgNnz8xhoj92DCKsuhESXBuiBpKZvuFno1evnDhZnxr9rdy",
  "key6": "2YZ7ZnkSL1Xs3Gj49CsbJuW7n72NLcMbHtRskpC5sz393jSFTBtpu3eyKcjfzDmxiZSTpApG1MNw1jTnTmuCfW3T",
  "key7": "5VuxEhhqS8h6bwH9nF7kWYxsKibfHKr9xVbPR2icgkK9kLo6PcKT7yhvjNC23Di3DZ7JWGEZLe354HkPrVYkf8Wr",
  "key8": "qGRA6Gh1H6qd26qZ57EPdt4wRRMJXRS8xa8N4jr7BhwBVqhenhSeuusMpgpbsKBmRNXSzo8iWhcZMfmpoRt3JiG",
  "key9": "2uVpuux5zEvirh5Xyh6VB1TgnoWcvP3gapCdeMWN15zk2w3b9h1y732R4zigwpaYCMZaovFdFtcmZV9ktF5K6JQj",
  "key10": "5HsrKkhotn52UpiodRaL2F5ZW1t9wAQPsn4397WgJqr9xfh1Edn1JMS6WxQMJvRxbxpAxYtYFms8HUV6U5uXMgqg",
  "key11": "5airHuL4dTgvuBBLNx7PEg1iAESn3CCb3AAULd8kRsYdAaweF9LTSo1TzhvBDq2aSwpPh5vGRPijs1dXov6SfnYh",
  "key12": "5AvHdpQromUUSY63hoYpKHebEjJF5VB2PDFYmyvCo49bWdA4GCnsYf9WTHagXC26WigfeSSAtJcED8iBpNwR7NFL",
  "key13": "5NxzMnNjM1PEjXuEzDmGjTYxrR9NrKhi5GJs2JEVH9MvmDpHNwaoadTPe9eGhXyp6pMxVjTZBgfPkzGjqjvRqoSp",
  "key14": "2ntRNwpxod9yNYbf1cxiYBoRgjMAYzRayfZdWWfQtgedqBZcTxPQFLEgzJZ3AiVRFEqgbv5u6g9cs6uCH7hEbGs5",
  "key15": "4zRe6uLdfGmPXyntQQV9v5t3forbhztCLDudkxFfAgFYAK6jmuAGnCf6UkY95rAokD1KWhzfqwQrUGKTHz8jYsSh",
  "key16": "5pm1HSKXX4qjAK5adGoBXFpb5TocdvqB3zZkqud9Hbp3BL7CAdC95vUCSmsPPD22ThK7bEzGUp1RJsySXz8JaePk",
  "key17": "5V1JSzg3MStjFVzge5CofDqUEqJeXdx6ERdznfJsCFQ6kKWb1D7Z78PF2wzQ5sDpkVrEVrfqUx9R455F4yzXXrJw",
  "key18": "4ejaZx82aQmiaGqEyeQyFKfSooCSpg4kP8pdQXJgVEhzTubUYEdHqeaxdrkYyYYT3uKfyMvENCjP7FNnU16n2BDz",
  "key19": "4JUdG1i11ozGgNerfyX7t2xakbhbECBn9yb4BAqhqsdYVPH3oyhQQ4bB9DdRSi2ZqcKcFzmJyiB1C2isd2DQLeEN",
  "key20": "2CwVGKs2A8Ae8ykmW8EF1KTzLf5Qu9ys19AYtzxXUymLDmdUfYfYVPU8h69ZpjcUPuur8vTTp1qD1vpFySjAeZbF",
  "key21": "vjPgJzxmGjC6Nntn5mVGWVLApVprzzRSe5CWDCWFe9bghfiLuTduN7tSnruDqPtTQa7xWjCxCMDucgwfjcehuUn",
  "key22": "3P2vACLeV7P23EXpS5zdBaRnpcHar7LwBs9GXjNxAX9vWR88147kDeAfpJ7C6FnpnYRdkBGtU9tgykVc7mGKHyw3",
  "key23": "46sucGKXyRygbEhTpQ1RKgsDkBYmGZaMAU2Tvd8fDfKsRK9VKKKv3yHrF9RPzXwBFJTtUydbx1H2d9zKrqNXNRRS",
  "key24": "3f2ehHHcVgya1HS2df71KtFjFiXPdkKgCVaN1WQauiYHB3nA1rbmvQvB8nH5tqdjSm4rNjio6t7ttv3oxEsLKiec",
  "key25": "3v5tNRSVoDmTBJNJq8Afhx5r3VbkyqutCAfN5sgAeYCouGKtrC2XrFEazL5gu2nfNFeXwVrreNJsqUhZYjqXmgDQ",
  "key26": "4oY3aak7EaBoaN5EKz9Gbfv69C8MqEyPnfRARFXg6fce7MdNSQNwVcqpp1kfXzWS12CnFFGfyou69Da96jGE2jUQ",
  "key27": "BNCAY7B7fvg4Hq2ZFCRZ5qJyM4iEpUvdrCMaePnZ1RJL3N2GcKgdBorph8EJHxfa3oFzHgMyBb1M38UHDLsPwXd",
  "key28": "28uUzWHbWQvxhBdrTVYKTKSrbDChuQqMMqcV1ADjYTaY4abP5Tpwra7w13tP25aZkjqFmwXbJpy3PYBrGhJG1yak",
  "key29": "4Hu4fTkSCj48s3cFbszD4AhEKyvqiXE9Lcr4F5gjkWNjR96KDXJLr66PD4R48KyVqGSoPnQUAjwVsXt1uJpNkCHf",
  "key30": "2asa99Z5YUKVW7aEXGPHWqeuiSHE88Dsa42ijeB4gxsHXsLHfsU8MsCiCDcPY2vZFKCoETnvGgCJJsVuN4JVTJvd",
  "key31": "2dgHUu3Eo1rc9jFYqUwcMxMCW518SCbvuNLJNMcEYRKTLcdZTPFy2WeiptuZsUUjnHrzJBM9LSDRwkYFdvzw3NLU",
  "key32": "poWFqsSJNFdpCje92fMNHQWzauEEFc4cwNryrr2nriZ9L7yaZyoQRikcgQ2TzuvD4cBdcYJGFLGM2dUQcT7hQWF",
  "key33": "MxNTKqPKnPJhb6bKsv7CKQW9o1P4vmG52phsyRvA6s6NjdMMBx7DVJasXL9W49yiEwBJzeeHy39dVvZTQhsHHcZ",
  "key34": "2gYZ25kWqDB6dNpYF5YJ7CVWLSUj4G32NF42XkVkcVSECGm9qUH4GJrFMaHS69Ka6SczRA4fWN6TesfeRCvT5b1W",
  "key35": "32z6GEnE39poAoVLXTSDUE943b6DAYPWL5XgSeudMH9jMw63oh7AwuieQA42zU7tJsNF5TK3wZtm3z53Qp5aQsgZ",
  "key36": "41P2fgtym5vtdQcF3WX3coZFGXiNDvEmyZXSBYBT1QT6uCjQwgsVixUPsS4yWEDx3zAMkeTJDodoKAcjC6Axd2nK",
  "key37": "5kebyBp2c1ZyQuLvP9RQPCMHk8zXqrvA4pqGPTCH2d9ZTUohFtCoKerNg7NQN91yksFsXqKMekAuxaC5Znh594iz",
  "key38": "vaCVMcoe6s9TVDooqx1LJvMaWCiJ5Y2S4iZgxSYrddabKaAFc2hFh1nfHmYbYtrgYWEXt83H5py7oYJyPKmeM5t",
  "key39": "3YXox6Dgt3KgLe65SNgbuepJJvWb9a3CG2KpZXM5kcgBFV5XxteUGyhkjbk3LgYgLPYEcKvAxPbS3B3zAXXzNgoZ",
  "key40": "2U65f6ndSLfRJG62BJFg5dt12s7f83Ho3n2Equ1HoSbtidUnrVwwgALhy8Apb4SphSXo9JsjNNzpjXuFu6gi1jcZ",
  "key41": "5TEhZd6tDwDkEcddFpqtnguvdAs5WuvJRM3dzcvo6tEos1coQUrzYkJCzsnkQRRAEmB7TGvKzDoctoc74nZ6qLug",
  "key42": "5V5ed7Js1VAnNEDjZcuVepuCwzPMSSkLazeckPbBkVHar9ohV9GFFPjwAjuwxh2ZjA4Girm8wQbrErKrSQNuGgih",
  "key43": "ZFsJNAPyVTmvonjxUFHysaAHiop1BeueFyQb7m7f7qot3Zr4G5PVwHtwuy4d7M2nvyCWG5P4mQ1gjiABVPfnsmM"
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
