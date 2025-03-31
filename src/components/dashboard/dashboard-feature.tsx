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
    "5mFymBZBh3v5qRMAgZ8wSCmerBCvecJHzU1oqSguZUC6PrQynHmEJXo536bUZeToRFpCii3xUmii9uW5Z9WFbLt8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zRhZze9KhxCaV7pUcLPcmb2FCY1YbgM3sV4hFd5ELqLddNhMSqY9cjCDcPxEPzPri5jzZnVnRJzcnDSu88XNq9a",
  "key1": "5YyNb1B91a43jDHi4ZLwVhovpc4QDNdJBJ59B7mcjdoqnjhxfaLAA4dzfyT1nwQ2Xzb7voLaqahjnSGZWaz3CnL",
  "key2": "3R9uSLeSKgHvcxBhEfUbmM5URCkGxuekB5b27o8MwgSSq4LRLvdSDqYk8HWuZ8bK1gxUHBPob1LnP4QZY8ePgewt",
  "key3": "4CR8Si67z7JeYKnhF3ppfqG8H7tQ9cYgnjhygZD5AZfCxUDeAxJfaQJM7bDafhd6zvERjJFzrdTry5JuH5CSrfz",
  "key4": "zCu6fezZPgtVs2Q3YDVgMxsZvnn3fRKPbGd9k8Wbs71yUTsnQ2tsHMkSqV2gfFUKkoiEeaufQheqbQF1xmsttLt",
  "key5": "124i5axqsTHdK7Xc82C6a9tSCpAcnJ4bULMkP1NfC2PBNEZ8Wiahr62zasWAasBPb8xNYPpF1kdDhHPb1CnAqqBp",
  "key6": "2Cmb791sfkmXyFMro2C9SYLNgiQiHYdhYvhVf5jVm33u464gpUHBcZ2CksD8siQFpvx7mC4h4yxkPpyXDJW5h7dg",
  "key7": "zePhpX4LpM6EC8sTXnLK96ZnHJDSmHTzWmuRiRuviZW1ivyv5VAqvSoQePNNwmYrRWBhrJa88gsFFD3eqoF4ebq",
  "key8": "eeQQDGn58wp5Chw9eBMghWyX6mt8njRybdDyCBaig9TJPrZwAdQpFMwgn3xgDqC9LJerixaB5uELbDqYUoNvrgY",
  "key9": "3YPrqfCnGxfeo1SKeGnnaaaZTo6UkEdvJufKJQvZHf1bJPa2Y15U3pxGBLPRTu8VK6DgcDAoTBuX3RNxdsyrPCgD",
  "key10": "66uWaF25fC9fhrm57BYaCkbbtaxhQk2sV4xuvvFkuLtYbRnt9v16XkH31Jiy5LqQ4ZsB6HexKHehsXDDLPNXGrb3",
  "key11": "2kbLMrw7wgf1SHYMiYw5DEc75SuqufCrX7CzeyRkqV4yagP9b8tP4L9Fr3p4uT3RwYwew3Gw5xg6GYvXEvbeo97Q",
  "key12": "539kd7nwsCaoTtALXuWqFAGqhvXwscvNYjtd5r3Dhxit33XG9V7tKKWSvF2Xj9kSdEzcKykfdzuikP9M5iZpW5FE",
  "key13": "5FLL4rZnXoo6eNqTa3Bsj3eNfTeGViuxHY9B5Hwpcb4X52hix5pq8YKcQML3cqYUwtSXLhSeiyvdaoRxR5rS3U6H",
  "key14": "5Hn5wakzEpgNB8k9RkA9V5Bv2gnJ9rG1NLvyFpuaQ1RjN7Xx6eN1HcmHtpAMyXSX3wUwfBov7C33W9GuSS2U7wLV",
  "key15": "4N6wokuBC1QCqHAxnGPAmzzLB31RZiNyP9e4XKiXg7VmvU6CW3FaQEsGEkiRjbDJYfS9MTiUKWKY3V8g83PMqjCa",
  "key16": "3ZUzp13rjZViakJ62y34kVUxtfsgSTY8xCqBdwpgWUaMTHMSByHkV2TYYXdebE51Umuy3M3Ae5rZcHz7nKiNu5A8",
  "key17": "3y69hXXxsjYMRfJu4AQJVM1xW1CaC2VnnrePkUNqSAoYAPE6FJZyi1mpMDtNCfgYoukxJvVy5SSxhuYoAXeg8z4Y",
  "key18": "3o8fc5GVRwSew4ucwM6JUwYxaK5Y7BTxWKFcTrCojVoEF55d9Jz4b9VKLhuEgNVLvdpjTfWGm9yQNPqyv5ZXEbAo",
  "key19": "4N272JE3kNUp5tSfYnc1ShoU6jLEo4EPR3WS5QtqDTVTLw8y5j2f4mDKsihcBiXts8eGWqEoncZukYVDmCemwrWx",
  "key20": "3csiijEcrjHA6Zqi4jRURKBrW9tVMEvycJqjVTKqWrmFauxPfosRcZE1dUW1aA8Txsgkv3VfREKCJnVsokPqAo1h",
  "key21": "41mJzidoGog5Gq1pnRD3cDV715WHVz4YWWQ8KXKrUbPxjKAsrJtZKW919tUoAT5TQWJk2iyMpfrvWNnL94z7MKMp",
  "key22": "2LpS2kQocBRnyu6ZPJRAuviBdoirh3XYkCWz3GkG4QrzBrhvmwGj384KXzQnqnTA965m9AesiFYLAt9SHNyGJNpj",
  "key23": "Zk24Ybcfynomhdy6ejw9vWusfJ9RCqDmgmu5WkqrndQD5CAoLJ7i5TaLMmapBqbUtedqhoBRBzkJ2eiPeJEhDrt",
  "key24": "2pbjP94ryWRyKmp85Q5JJJ8CnwH4srdY69MrFhSeWJ1Gh6BLMxUqNPBa3exiammM6ZrP1DbaKWugLP9QiQtTmkev",
  "key25": "eco9KyTPMQqq86tJU3iHfPyR8FGxpZadFPH6WVf9H8oZy59nXYC1ppJQfGjX5yeRzYeMEDvJBdfnzdeZ3vrtcHf",
  "key26": "2he3AkTANoaYvY885riknBGRi4Ng63a1xDvEPNtmkTGrH25b7C61fV8DRcu722psg3kGbRVPfBRW4kedHiC827vG",
  "key27": "2HtkWP6Uvcik23qeu343YVuAsrFtreifWHs2vjBfNEusMFrHxVHYqfsCMvDk51J7Aobhio3WsqKZMssF3ToWRvKn",
  "key28": "5wCBmrU2riibseR9PLTi6XzQqZbmQTCfze8QENsBxmS3Ayn55TwrzT6vacjbBpoYdjT7dvZPRkMRE5n2Fa1wTmyZ",
  "key29": "5u2b2GdvHkPvigQLsZoP8aHdYVbtUCCowkmpWzAtDQtpZmSg6bX5tQ5YoEVnG66XBR4dixPNKzo2p88dFyS8Q8bv",
  "key30": "4cpukZAHkcREFcfsuSjjDDQZPRifY7cQEd9uEVL43aNLBuqBZzQADARxpqyhLot3EGSHxAY4AuGhfnrBi1dLoiFU",
  "key31": "3pBL4mUQkeyXATLHkDro6rVQ6JA7fCfrWnP5V8NVs9fh6FtggxejnRTExaNUruGEx4zagvfgSTETDYemGMeCMmdV",
  "key32": "4R3ChkKZ9AjcWrY3fSRTra3xEm5YtEU3yZ2uthzx7LoBBYHPBz5KnAaCBKWZuNJcNdpT4EZ89ah41ZTHkQ6c7KPK"
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
