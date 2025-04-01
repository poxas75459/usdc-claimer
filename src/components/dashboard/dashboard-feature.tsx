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
    "SFMgVntPjvsQuWzqau1ARxdkADXJkrTgpR4Uh8wp7TaX6SwEdD8Rj4NU5A5M8jpbAju1HwNerTzY21TXHpsuZYs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T29MF5MLKFmGWK1sMW8rc1ukHB5B31oGd5fr4Jv2HUrhUuQFnMCkpEaFFLWoY5AVSiPSy9AS6roi9NNw8LGjqfC",
  "key1": "3vqmNo4p64pzEYNcoYaqd8BJMLw16MHvUb6HVwKsYvndWajmAxwx1uXqyWQeHgsXj6PxUwDTedEXVWfUqFFBCaZk",
  "key2": "2VSXyihBQL3QQ2ES93MsD1HCqAckbVceSAmWh6QW1363prNwcUJtjtMFruDtnucLutQUJwTDiow3oAtJwTeemP8U",
  "key3": "3YengMHG2TavJerLQU3FC61gW2F5UDK4rFPetzhmghUzHGZtkpREpiJYS3Eap1E8uN9sN4a8rdEfxmSbnDJzJzkq",
  "key4": "3TYW9jpFeDzTwq7Yt1KYifKr1hEW5c4Y8kChJMM2S7ycU9LNXVzxakxzW6PTZpnoGykFgddypwHsy8hAfetQcwDy",
  "key5": "3LTAxXyLtYRSZASziynGumZ8221At9EbpBKhtbJKLsMNtbVzJDgzofPwapaTWycvjsrk5PM1kAi7Lbt9ku7RntXK",
  "key6": "56XPyA5Gc7kvRCAgLVSRADtoihArJhr29Aype5kn8AjhG4t5bHjmmUEcbmuM8tmZiLnZBEDPu3qx5GgrXykSGGqX",
  "key7": "5J1TfFyqx3J6a7JkRt1XwiBTafbLYFEmcsaK2WAvrp5yhRPKAP8q47Yebis953JRjKWbZsxywNLxacrTJn5P23a3",
  "key8": "2PmMCi7jCxnZEMiibwxjG5Aw2McRNBw48LoU4CNM6uUyLqqfwfh5RtmBp9eJP7GXQJrhgRfHewfEeLLdbvW3Qwo2",
  "key9": "5cfeve13dVdjF2zyZnfoSZMTCkDetHnG48o1Andi3qvqxqTzHrSdGX5zYqRmgyCU2T6XRCD5s7xeUxoBMZQj2N59",
  "key10": "2bTdk1fuF8ShMbCEZHRVZW2jGujsjsZZc5KBrEAfooM8i2aZ977iKK57yyFE4QSRTk7jcjzALvHCQ7DXmCc52nQt",
  "key11": "hfpiu6Bv45RKKQugtf8og5iUULa1DPBkVpkpWNyC49fmq7YG9yd9oEBXFcFQ16X8Jm2HJTwJwKXiGpTJeB2EZ4h",
  "key12": "26VKen6G2JUt9aAiMAywJsqSKrififVUTzzuHecpjMfAvjPX3Vfy7K5S1zsxxgGCdZiqCkYo3jR4yHFse8udrtTu",
  "key13": "xNQr9aFjood7sdT2sqooZxFX8XfQK4ScLAyX2KYCm7FWcQQQCReBwzHLqUnqF9jmgRCipyMzi1GGYvEXYvJfAV2",
  "key14": "45G3XFKtZBEApVySH7AccEawdoVABTdTkpZ7PV27cUf9HzEYDkkFd5r5ruAMwHUh8Nur2w6uUmpTvQnGxoUaMds5",
  "key15": "22tv7iBx4tp23EaQWcscFGyfsyKrSAEnWhh4cD7u2M2jvS7hmApkCEVcoRtX4X96azNSfGE8do1GXuZ68sxeRrFM",
  "key16": "4CqjXyV77jTKKxjJjoGKoLa45eD54vB3c26sWDxgPUrzRfr2ao1taJYUBe7AbY5HxDsNPJyFDB1byhWQeJGNfsuL",
  "key17": "21dxVdtU7YSNRPJksBRoaxqboyqGDJ667PzonAJmV1EoRvyeQzRYehZYH9jjQgCpCz88m1gutDMKfKEVx2iSwLpd",
  "key18": "4azzaywKFL9BGibiq9typT52MZQeHgc7kmmEZnqZBVKu7paijsrT5xjqt3z9h6FPfQXoBr1BjPrVuuSEN3H13hMH",
  "key19": "4fEmgKtNBQNKCo4L3oYuw7daxXznoD2RtjB6ZWCvrVe9UkkowwQjVpSysy4Zv3yAseJrZRXvX2zmDCbqUMgPqKgt",
  "key20": "xt3RUCgyGWf6hGoKx9E5Kp4RAoNuXnZjRVv92iog4sxBPy9F6bHY2e1XnBSk6ur9AeDF6g5KWfuWbnxens6xUPa",
  "key21": "mG9LTybzkBXpuFHnDi3qNxgCuNBLgrox8BPFL7UH8XYenb9zy1qd77DnyS93ATvhuU7zz6yfXgz5jhxsuVLzyJJ",
  "key22": "42XuEZHHsezogBjgeYSGSodqSh1cxULtU6VX9pQv1vqWA2js2Khc5Ns3UsebBo27p2QnbQiR9c98YcKbKhTTmMEz",
  "key23": "3EWegEyXzyPZ4njPoFxBBUuSbYCVRcef8yYsALvYM4s45r9vjs74evoDmQJjWzA2c975dXZmcdxCyr2Cxd4k6635",
  "key24": "nHtmBuFVguwaV3PS4i5ZqJeWQ4dn54TdyZdravmGfcAzQBC67NuiFQTvRRoZL8CqgBqn9yPmXLye7StgF8293YE",
  "key25": "PiuSBF6dmHxPjS53kq8XZoHPhcR7nMRvJ9iSDYrkDYmXvm2TCNUUySeUbJn94AfcZBs9Q5PqHwDoH37vFRSHA76",
  "key26": "2qxR4ajGR4DKR2w1Md5y4Wf54L7vey1cdRUFRyd8EBCUZP9iDW5yogrtpJY5JRBvG9DYS42LGRxG1scDdp3ordpE"
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
