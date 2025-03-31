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
    "2UJVtmUw1WQ4oqaqWN13AFTnSMS9QwHxKx1aR1sSPU9CvB1JwVEKnGq5xyaNKvC26CPM2btS7nYx27p1LyPUPRnk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YAxXqESJ3LqHsnTUNt41MCtvaDTzkhsCch8HwjA5jZCxcenXpPmhJAbcdZ1m2ysWq8XckPz3SBWNA1ZYg2rWoc1",
  "key1": "4dg3MQvNRTWoXu1mhMAgKPFrCP6W2HCt3U7WDusprQxW2koq3zynoEdVV3qxDW3eHjoVRet8jQCkrXHsUK19XMFd",
  "key2": "2T29L7GPUMrVxaysABfKofHBheeDVxTX4SYDjWVR4HEYPRkw4mtiuWjsWDoNSTGgpJfPxsueEGJvrQ6e5jTjF8iC",
  "key3": "TJnWRTs6esdRrtpLeyvVnXHYubeNZpVupTHPgEX4PsxkueRCieDaEb1JEFdb5cXg7Gm7cxPFXU2ydcDXZ7YANJ8",
  "key4": "5deyXnG1A3oeizDceny5KzbypPbQKZgVEb2wVkvNMjNFeEoaQ4Mm4bHQpRd7XcjAVeFdkqH5VPo7emGaAPTXr1qy",
  "key5": "2xWsawSwAQgC5DiQtAyZuF5mit3P762pMBbwMvXkGNRNhfWmsPhBPyvDuN1v5jRAvuJBRvnjbk4TLtw5iUmu5W6H",
  "key6": "4mhqhFmtEyEpSHq8AoqavprxCLekRkyUFgvJ2uQEc3emF576zA8AjyCeyuqMsuV3mBajaL6pKUt7vvc77cVmLAVn",
  "key7": "CeUBTft4GBaH6pDk7tRt18D799mNVsP9PdBjSpSYdXRikPJHHmVzARcaqM2awHE28KPM2nqirS98838sSoZ2DbG",
  "key8": "4im52BSdR87f8DX2Vkamhu3GAVeW8DZStxgEAZetEyHZimRobTP2GHRMFLnoPqifpLxvo9tSuyeRgUysuwFGeWqG",
  "key9": "2FrSCMHenKQbZ2UgRKuNoQPwaz3uewRj7JxXLzKhqmatJJv9GrQr3ihkT769JyV7ecqnP8rZs9eMaoPeCdfoznvw",
  "key10": "4aH2obkQUYSARD2v6V9yFpwh8jAwQFX7fx5nKttiD8hzEC5oqyE2dJfgzecDqdxY6PqvRTBaCMc4hBSS7rHDYRuj",
  "key11": "2kELxrxvoP24ExRRunmsrPokydzSeZ8LdHY2yL4V5sTr7MMQsywxXkMCDGjkvas9RGyX6yJDvWnJfSJMKPrkAmNY",
  "key12": "59EboBsnMSJWnqvd7vUXue8TdnmscFWUASbVN1DrAhRPe9kob54t7t66UpX5EnvFzTj4ktRPCzfZyTiJxR6Nq1g4",
  "key13": "38DkoJgKhQtMG2Naokx51CL2NZcYm4tkR3UNtm7hkbothiF2L2apZdDcAvM5dU96nTZankpDGpgrTnfhCtwvPUNg",
  "key14": "5MoYbdgdAVjVDpbA2z47uZi31B4vNSDo9dPh2uQG43LaTjFdABdwd5HSZFA8k1Wxt63KY6LModeDFgDGAF8RDcC1",
  "key15": "4fiHh5aQbBKp882kkwTY6JMxytYwSgB3baz6Xs9jdoNy8aTEpBG644dBNaQVBo2MsxZMUUUWw1HLBRWhL8qEfZtR",
  "key16": "3wwfyqPpx1KfmxNSd7bCBMLW4Esv4y8PCuHyobwjapJS3Jf3JHb6zTxB5MQJV5BgKchy7wXAYfqYz7n2zzp1y92U",
  "key17": "44bfH2w9Y2njH2stQYVR6ELHE6gydcHzuRDhhCXsPsdjzatWxgH14PopbqyyPMzCVrjzhSrUyXsuteuR2vY6L8ZK",
  "key18": "3aN6HB5nkLrVMR1w8nor92ADxYrRtifHq1rm5pfw5Wx8HjjMKZhwYBA4grJz3RxvmzZCJYBMjKZooFSDXvq3Urjv",
  "key19": "4wGnfm53w4y13H8bv4X6dYVKr5eBSRxwbVSK49uZ7NKuF7rvA9wL9Ut2kBHAeegzvzXnNye4UN8FrPeTt9fHAnGa",
  "key20": "HzwkE4KRKH4vPkCdBcxhqS8eegagBRXwYBE3d76sRyWbRjW2HfmQKcgBkXLwUJy4TJRLiWMZGHs448TF75N9BwN",
  "key21": "55V5fXjf2SMy9LxkMR4UfVWb7TWQQ3CVgxiJuPrfZQwadoTapqk24hyTm4DYM5SjYXHyiyQk4R1KoxZpFnRtscYq",
  "key22": "5y3NLUosjyvKiJ62h3hWisM7DN3UK5XmMXJVhPykTeAFWephLxKEFKb2kxbeh4vbnZYn4kf5s5o7tTXoAcgGK7He",
  "key23": "2Qn7pxK5NcXDrEtE32Pcv5LkiyBR6S3wBMxisq98SDie3qR5hfX9tXFshqwWxVWqWtJntE1dJh1TvT8Gr4XqJ65A",
  "key24": "49UvyT2MA4JWrBchBmeEcFQ7Xz7L8cktGbPs1KYaPiJfYqhtjp1WowhLUrgLg7TSUEApHnFh4ftQ7eubaJ3mqsgi",
  "key25": "2xLFNHLteQeZiGphJz93pnc11xrRMdMxg9c6JDqPLqjF4pcP84DMWyn76tF2a7dENSpXTMqwjRxaSzvuC8RMt31t",
  "key26": "5RArSbxkmLVpbiY1eGqqarJ6QennfEjFDUA5H14gAjAwfETuJo5GCiLRg1UPuTErP7GnqvXxJyUogPbS5MGKwjWE"
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
