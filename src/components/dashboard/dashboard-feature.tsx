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
    "4ELF4nxXb7MyK9G76KTNHntjd8PPv3AyvjADqkrRsWPREL1ACguFUex58rgwddCUiiZ4Fe3XNeZTBVdP9FJHk1vj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yF3MYetVZMggnxyb5ak6k16NGC9tjSpzuJrgmb87SE2UaaMVEjTcyr4sEVWK5oAFN358opVSSiCJkwGry84RBib",
  "key1": "JyBEUSxvAjWSkqSusxUhrsdAmC3djccJw7xot7cWeFfiQh3imcqA9iyvki8zLDiKpJV9kkVFPuRLL2CsfSg3dxD",
  "key2": "4pNDFEvjiy3BAFnR583w77Gxf7ii8nzfunv2HB5vaeS4nXcqvGgPN7KWqh2eJjyTQr24ARQZpaVovrGyTwR4J2EB",
  "key3": "5yq4k58TC3NMePxsiJNbLpNHg4tgKQSwRuRaYyDSAJKRTggR8nQsTbUuf831H3vfScCCHJucXnN9dvzvmXobNiBY",
  "key4": "AfCCADUyz5C4QWhfxcSHRJ3NLdYpcCUm3BCHzU6FA3rwm3VTPFbX6BzYSdRGJ3VVvzmtkYpkEf6982vAeJhcEpr",
  "key5": "5UakV4RuJbujsFALUQRi6rtQ6wSCx99DT3oDmyvZmibENJNkZbVnNmdnq4jvYMe8XNrPzYPpYwn7oJB1yGEe5g7z",
  "key6": "2k9zBEEGFuv3rVy4FHoUTft89NL6ofNFRmgqPPPCvT2LdXA7a5QUDsHkQmJzX7fLPjDgMPzh5WFJSnPkwPS2FRAZ",
  "key7": "4LojYpLLEoeBiYJYezEwM8KJJYPGViwxVuvsnKd6hBe8ucFMVvdrS3EPJDm9kKjyo3FjNeVRnDHnuSUBYawRuiDk",
  "key8": "3Pe4Nmsj2rbmb2D2UAprT23d4rFibMweheM28vzeAU5TrKdFZG9JXfudja1dmxJpCKDTwfafVzPBPo3Ny8HG8HGf",
  "key9": "3wcHTroiP8sU1iTiQL1oa6uRjrJ1FmthEHFGBkMNbAk4emMESQ2ej7ix2sqXTwiyWxLQcvbbkZbHMAXJptFCrmtH",
  "key10": "JpjiwH8xgXKf8Xt33qp9aXhry3rubYZFY9RRqjX5tk4nEWcdUotefFPAgvzb6hzXBSVxYkwoeEij57PSmbz79NV",
  "key11": "Uw8Xw2TV1dnkaXtYNbmZdHZmqn7Sv6HkfCdZKRUD97eS4gRrLzUbZd8uAQyzyPPYi53hXiqK64gAv26SEFP61BN",
  "key12": "V4VX7BdAhmW4qa9KzBgdC5gAujKLhf3wUfSXAW1mNspN4hXGBtxMp2KmhfAbBzVvpMrNE9phNQGqwtWeCme5Cdz",
  "key13": "rNu6WcjhkCGV2Fh57zgXBAMTatKv3k6ZqXieKkfYRWRLp5ny4QUuM2jBqHXvKo5YNTx6QgtUxZ1RaDtN9DbaCtX",
  "key14": "4j69exsqkUGuuhrRCM5yzprVBhgmQwaYvkq1dAom2DgFjLHLqCRE5UEhjzq8gpETA8QfxyXzwMLwXzHEmKteM3Do",
  "key15": "4Z7esrqtu1AV7VRQ5LcccPEunpHtkAzF7ySBVt2gY6oyS7Fda4g9FgTYwqrAPTh2UB8svRxBHiUWMPKFmZaYBwnX",
  "key16": "2VpvqeqA1rpEUmsaocSw7zcSeMGLd4DBeZCPVAVcKw6MsT1oCx1UAMsWesWwQCjkg5JG12uKKhV9vLANSNNai6bu",
  "key17": "59xBkrNgbAMvuTXApzyjWnzUHDPTaQjzkskbkWBryDCMhUpa8BLmB9Jo37FvFbumzsZZTxY4f8pTPr3nik23BcrC",
  "key18": "4Ry6prLHokxUdgtZFWDj3iAyDso3FmQkMo68XFMxf45r3AxwKozyBg1SnTgLhVgieNk1JuQ3TdnUm1HYWevJDPFQ",
  "key19": "7eL77eiaB7FM4rFg4zoyMREisNZYmq6AgWEBzj8T14NgMVq49s4vL9Yww6hxatGJyDPjunvoLWcApUfWPKeNtC7",
  "key20": "2rqpogN6jz9JNNPdFRg5YHNCv4zq7F3XLSukUqPLZEysfbKYyhMxRnC3ULxX2yQxi9RhN1TqyAt3wHBQtzof4TPk",
  "key21": "3xnqRh338CAS4sBiNpPUXBMqXmsPaqHmXs8BUGAEDNc44fQAPMNCZ6YTa4xrhS5aoaKBjA6rjhMy1oXBx8jr3zok",
  "key22": "zRj1mrnqxCHofKSNEzmPd39cNyj7tB5y6nnbVwiEnqSpJsGqgfJaWVW49PA6Jq8rHKeEjPAonPEFYUoogf5quf4",
  "key23": "4Z6GEPUSpyM5CrViWcTvcbkuupdi8z1hGaj7NtxN7WqeA6uRfwvQpk3cVZM1RcjaqwKWq1fEDTucTJpWEAHoSJsY",
  "key24": "QWiHKXWMTgQHkzZiTag5NDSKosXgK3tuHXRLQsc8a5yaXRKL3mtE7W5iF1HcTfNW3h6Y7CYWvXN9Gy9CecYAMGb",
  "key25": "3k9RTLkVPAfqmjGDxNCsCZCoZ96JWmXccVQSJrN2FupyqWRyUhkQWxTjbcN1Y6EyfqHr1TUcs7R2WyGimwgVGwCH",
  "key26": "4vbmbGoWJvNhKUNcVtcxc5GFS4s4J1WDnRiB5pRMqdsh4mJEdnxkcpdmKJM3XAEgyyLdajnxp4LEJXP7AFofQoQS",
  "key27": "3KEMsJFK2GGDDyxtGQQrJB44jSpWesx8q2mp9mzUNrJh7KaDLsBHeMNBErVSAiWono4cFiVbAdWucyXoeJonadpL",
  "key28": "4YdB7jp1yfNqQBgmghXYvpzsREwwLkTX5d6fNp5Ei8ktPXzdDueScmn21uemGcaneufpfdrd1FuKfucir2Weg5eF",
  "key29": "2dRDCwT18iKHontrcFJPy8KDzrrBD8USw1waaELJkcdpWj8aR4ZNhbnj9seMGM5bETSuVhtAMqHTD7wdKHnLrYPY",
  "key30": "4jm3L38uq5uqfXRPYKDf3Rkxc61Rf3uWQCrjrQahxGSbmB2zGbtzuoTorr4gb2Pa6T66y8Qvna1Z8TKu3uwCMDCr",
  "key31": "5MGGEfkBe3HorzTMoiGcR94HgTT7zz7bv7qQq7DKwMLnLtaXNWtHP8xB8AaVuUugtyXsnDYTwH9PMfnDSUNcK4Vu",
  "key32": "35Z5CWDXT5mSbp2sakJNgb3mhZuWutERrCa42zUgLXvCsj7kGMUYZwWtvXe26qYPcRFHEGxdubaU6HT5N8NwJwjm",
  "key33": "2Wcu3R6LQXqbydXfcv3efzzY5111WwGUPxNQ7dcDTKvM1A443rTisGDyXvkx3cTKuTBWNVnQpDj4xtZwsfP97rn4",
  "key34": "2REWGHa4ZcrAPcbzUcqEAGarRPErJwES9ZRpnsL8Z3ysrshAzaHPjmj3mJ4xkqAL9A7U7q5mRU5pSapAsMAKnFtX",
  "key35": "5P2ZxFcR1QivppePkgsZ8Cf3TpQuKtp3ra7dHYaWkLL2dz3uPqn2pegVyA1Cyvkj4eGXCn1F2PVSwBZ7sNxiMW7j",
  "key36": "5kJRmPvLvvShu5XbfiWTG5aDJS7xxiRUGoDu8a778NTUpUcMApSttBsHSMHCzZ8MU4vq94m2hqPSu76AoPNQuAHN",
  "key37": "2u21ANsL7wCC4xc5zYnudX3pXpwsa236kdgMuS9Pk3C55vpdXBepc3QfGhqE4ZTGT5bsDP6PVEtjyCW4AKeQc9Fr",
  "key38": "2bvHFEWYQC3sejcukhzuvYRUkVx7PKifdGbCLxzYxUWDpjMFGw1zZDo1sRLczcva2AQhVGsZjfoQoENf7WKeHX98",
  "key39": "2X6Nu2tkqPMKosCnT8FTZHd4uP3t7e4U5dd1gTEDmogBFJKDMqHNk1ouoDtaAa95RYoXgLuB5JVfb9GpaLNmhiba",
  "key40": "wConZtFtBUyKUBga9N8bCzqVVn2F6TMXEUKb11avVvLAAVMbg1TddqtjSAPV8zdX8bgH7yA2jiLvkjGhWdPDKT6",
  "key41": "4iS4tDuAZKe4C7JJyoBthxh96J17NdtC9UNBQYw9K7HZkSYRhz5oc65waa599YKAu9VCttityeehrjitEEFxJDp2",
  "key42": "KJoG3sVK4Rbaqr86rfYAnGNxU2uzyAee1LVCexDEshEi9A4PvjC8LtsDz3gqCbktHDbs2VRb9eibD3BPqunkSoo",
  "key43": "2swEp9eYZMbm6LfcVMpdjLViUkmYsUCiUkNggGeTjkF5mao8nMASoGzuhiXgJTC7s9ukbtm8vafxMuVU1VE8GW3e",
  "key44": "3KdubzBV9V5JUzdwTqGfZWT411DLjLdTXgzgScFmAcaxmRZS9RgeY6sLianBdVcYm1qXYnj7FAUXnYGrouwJXHNP",
  "key45": "3MxCuXY8kZGoU8bWtsEG3LHY2f7iMes7YXPpGWeKQsuVQgb946zMMXkxrryoqTE9NfErBKM8YNZbrFn9nVnme2qr",
  "key46": "53qt1BN3WyymrYXxjGNkoGCWju2zvYFcg7SPmJj87LJBeR3YH96Qd6GP7dEr4efPWzw2cLXUyXcwbA94DL1XntZd",
  "key47": "2PkjaC6rB2UgaZfGkqxmVgXAZTqW3A6srz6Kta5aJvSuef6nXNSXWYhStdhpPbMAPKNgCakY1mszHfh5GxmSi7YK",
  "key48": "62AUT9cv8BrZFPTjM2FjhkHqpBA24G8HcRjDXHoyzJ4DoFAQxi9P6CxVLYt4kob4KoHUXuKSJqxipJC6p1RnLhto"
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
