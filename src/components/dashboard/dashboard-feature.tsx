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
    "ktktX6vCpAwjgDHSeJAzWPgoR8awQYzZtr9oz9c9gYHoKwPuvFHWotyTfZNRSra2bYEF3DKBoErsaphZraAfU3f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iNr1KYV3ZVFxB1V816JuokyV23srUdDT4eLhUbrTDkQj9ryGLQTwi88qgFsLaWHFaPFzzM4aiKk3XjMr6bvhHpb",
  "key1": "6yJoPq6UjsjP8nNdEsoSVFcZ8QMj3rHZzkmoMmanSF3MyLpYLp11M8aqLucbbbm9Y1vLNbLhiV5ZW8tuWjuFdvv",
  "key2": "4dkHxSLKji9tQFUJJrPmkSpnwFVibDSP5xvZXrdKvkqwmVvqWUWdEJPWdDRmcNdNkBN7h38iEDZcWcrnudtthyp8",
  "key3": "58kZTSYi1Ra1xNBgPLYBjqqx6pawaC2q8yDLFve5xdN1MqzHCEoeGR33rYz7jvZHGiBtuNtW1JSFNaDVMsascLPj",
  "key4": "4NZzMPP2XgNySCQFawEHmtRQtcZNQWWTU96RYBFAMNY8fpmu9SRdNXNmmFj41pNejTNQSrkm99YeGRtCCKnzRsPD",
  "key5": "4xPR6g4AUFCM2tgSb1y9Vor5kapa7k88H6US7mj7rrGbqW5vWewtYmsvQstXUXQAfoPLfgKtp3YLsprAagVrjenV",
  "key6": "3DTv6Cs4pat5zHcbRnUCyFr4SfXvHuCmoZkUDvSC7uforRknGLdJNKuJ1FARWqgDwKxsXQx6abg7FN9L6fwPpvGt",
  "key7": "2kXJxLtcL7zEnNar6hdpURFq7Zq8g1PCrnRJawoBHtHMFNA1nTctgJjxQfwTxoFJiCfzv4ts94pyV8EWDeeXdqA8",
  "key8": "2ria1rCwQeBqvmUQhfAayA1yG89e2ACht9WXU2qdVeTQtpUFcpzbaeN8C1xokz6Pt1cNBeHAB8wEKFagU9tpNEQ3",
  "key9": "5zNNEBMrMc84sVeoCPQ3D64K7Hi9XiL4Peur9xqpcbKdJsAKQDEWnf7aUoEQQLaUuTVXj9wgJi8yM4YJz1E836PD",
  "key10": "3bqoKX4e3cfPH4mHDacdVFQm4na1zckx6RJcapvgQxfV3ewGiNPYS2YudGMJbrxB334wBJ6Hru2cPs9UTScpMBCo",
  "key11": "3tHDtETaMP6imuyxDVEiEGMjGxMBYrF1JNbHMavArsSo8aPSXomrMGkzH1jQP3Rs2VPWWTCdPZ2j6YyVAuAm3HBs",
  "key12": "2e4HfqYq42eJTLVyKHVMGAiaF9PTwUTHr9FB8PnXDAjidTWXfLynBr63MGVSwTpCVtuFYvhb2UCdHjSq89LJpFa2",
  "key13": "66g5tyexBV3AHYU8kMGmXaSpVAbgePBq5rd7KEzLiJL12mPXVmPQkxz4MGqbrWswrxXj5cGbdLRhcim6BaQeq5QS",
  "key14": "5g8AoPFNnQEeU3uVBhxGFbb7pC33g15JhqVuYJw61sM8WmjnuTEN4Ck3PrnifsLPZebZTaiTmqvcUZ2Zt6CZcQ8v",
  "key15": "2CRaLcDQo7uFTAMAjTjSTHv8jVS6BVZXa2G7PnC3vfdxU9iojE9WdogvJZqz34myALugtsBrrzrX3MNN3bMYGACE",
  "key16": "2Q4gFvHVNAfrED2vWv28Z7wbqTvqtGHjxLpAwNSJF1PFkxU86cQURfYABMSWUEcuY2zVtdG49hLvxf4JtUpDbFwr",
  "key17": "5gEErk1UYByUMKVGD6hbpmUzyn84z8xXZ5L3Uh2M8XZmC34jApBEqgshr59C8f31j8EUQF6LnqTXqcMSs8Fn1mBY",
  "key18": "3knwqKhCoNbyUjzi6PLX1rWpFbz3L3TXrvfedYSv9C7kKAJ4DKDFHsQuqaB9xaFL4EdYizJhtdXsXFXmCotWsF3i",
  "key19": "2zXjdpJRENarEYqMHdVLoq6zRsqc95hv5WcQoJRpWjATKRtf1Kpc6HimPgNpu2Ba5pw8RHGZchcwHRsFTeoZb9ph",
  "key20": "ET7erYyUTRqkDe78qX1apt1ykG49n8DYFzsQHsw3yspiSHrUbLQo66XV6QVh18rYruWmM7LTo2vrgvPzSyw1MqZ",
  "key21": "3G6T2CmJxpQdpj8LXPQiiGebmePkNZA3wQLFW7P5ykpSLAUdKxpamoRztU1dejaiat2tEW7tgVqBKgTbtSKMEg48",
  "key22": "4itW3eop9ypFJSApZgkmtzs5v1xmzP1fotUNRwymD465vxvoiMzcYW3A1ySwVgamCpiG1Ze1biqbD65P9ysvKPan",
  "key23": "2T2biaGpLN4zevgvrtcLzLiSFjgMMMZJai6Rm1YQsQRLhi2C9rorvacHoA73tQiCmHqZEv7XewLMpwqEiwxhhaJ4",
  "key24": "5zfKtm2JncBLCMcBH71CmVa5xNQDJAF4Zkk4F55sjyD5x6AmE82iFt23dL8LWA1t1DKNUPDWfF4VRbzx4swzrbr9"
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
