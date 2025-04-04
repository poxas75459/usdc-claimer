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
    "3ga23pD6FgQFVBC5YrVEMQ5m8Uj3iob7LJgqTcrpfdb1kYvojYt7BaKmTCrsSg8JcdibeY4pUtEt2KVJuQ67VP71"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WPBHnLoq78kbqW5CrbJnRZsqtuerF1WqmPoiP2XXyr5pEANdHhcdZsj64nDgwJhUWSPDMzvv3rDFNX3GBezbSLj",
  "key1": "62FQkNBCDNc4rTy3aoiTvtXz83mkJactB26Jpx1ksXfxsB2rTQTWaYcpTXHtjjjPpuSws9ZdZzwJ7ZPHvNCvhgWS",
  "key2": "4PCHKPNHdPkS4gXaRWPMAUh13h8CvzY1KtefsVP5mQCJSgGPzmnkXQ8LWe5SfAAsqZimmMR8vWvY7Svtuksv3W8n",
  "key3": "wBv5qiszMW2Zk3vPTMwp2fWSWLntEr9Sj1L22fV4tfcMz3u7tDNueW3y6d4acJEAP8nZPvML35ihvUMYrmVwe9t",
  "key4": "3a6JezYxPksyktVNhj7TDY9dQKag2yPjmRpwJpoEv5CAzLk6rgatBpCCCGYz8yDvNeDjwfPp7zHDhYvfgNDPQVGw",
  "key5": "51Q3go2Y8q3585gkkN84drZhW9KRYuH6W4qmmh1bEPru1xubUNMhKCCpvfhXEaUykZZDdJB6v6qA7ymnziv59v8E",
  "key6": "28iVEhnZijGJLpnXEj3FcqE57eATLDqVavDtaa4A2iD8jVp5BFSr2nHdqrGKGjrXg4gpWB9Rr8AUfGyi6TiZ1TJ4",
  "key7": "585pFjjvfyu2zZPUXDxxv2nvHmNJbNcmJiYLHDceuFdxCFaMNYS2dfEjfMXcsZ2QxN27AbY9aKhMue5uTfhufMS3",
  "key8": "5TPVt7R5ouwRji8TSJeXc97BHSmuuruLxnB4Ui24n3dNzoD1KQtgc2zP38eJh3Gqf5taYLx1f2tiLhv8iQT7aoM4",
  "key9": "4nnZS2QkDCbCksqJdiRRwQB7URqzCmcFpiQTV3KZWs19ojV5ri7MDzFrS2iyz8JtjXW2siyXMbFPjST6KPmCiBFY",
  "key10": "5Dwy79y4DcYFpSxgZPtUWAwPxWKdHFLUjfiqkgrofYTMYWddki2LWi28WzcqTA87CEQD5ro5Ep8uFARg7C1FNtZs",
  "key11": "3mvXRYGzhyLESuetdpUNFeKRr22r5xRPPkG5sj4TrrUCedeySUWVRgHP6RFxGaK6vz9U89BKFqSdiLEAt4VFhe8B",
  "key12": "25mrzYm4gcCYmtiHXH4CQdgJLytRckwnSeRaRKkxLgdxC3jTjWf1BtZeb8NKS1Md26zL5DAy8gpu6z9cmwyWj29i",
  "key13": "2ySbM9hepZ1JAvh779JpxS65i9xCGzrMovFvRwKggZp5JpNZAgs5F8Uye4RtfpPkaaoEs21nEBQddSdQxEzgzGki",
  "key14": "5pzzxZ3qghRAaeRiZPeWkiC6AGAA3naaGnZw6ge9eW5SfusxJDGyGSgQaEickihqxNy8g6ZmtYeJrdYYR8ZToLu8",
  "key15": "4oftMjyfA3FCAYAos9nRbxnu14LQRsJC5zwcMyFCqW8QZKY9kYgZbddsFXT4pWCa4FUVmDq3zRFduyxA9mBLHgpE",
  "key16": "2PJkmDCibh1Creo2cCmrrpYZ8tVhMqR9LEUC6nY5GPkrrhSr6FT6cdMYvLri4URsFFySBYrcDozS4orCFm8J4FNN",
  "key17": "2Cf1Nm7rQGzYH56TYKmNFotwMvRf13QY5QiWRVsmNDGcFNPfSkXY6GKpfG6GfF6gYgUpmtjjunrZ3V8Mn4hY7YeT",
  "key18": "2GWwyuFhoEehKQLESUBPMtvxBScJjXkjpbojp7AtPd77exmshvpnUivqMsYJtbw8MsHLybJeD65CF1bzSv1RcBUN",
  "key19": "5MkLz88GPLxEHpgyRPPGNYAgZKvxQ3nSXj3MrtwuLcmWdBkVFPoBD772BiCcPaxy1fDyCeFhNanWBVPviCdCCLSN",
  "key20": "UK38UFB2HFwhX2iFgmD9yekmiXikaeEt5qLKKAHTrLhy9CdFLpDafmLt7SpvZLiizkHbJYK1Scp2KNXzJAxKema",
  "key21": "5LU2N8gVBaKZUSnySTQ7MnuKBLeQ4BxPARkjDdwp9Yc8uuSdKrJK5s4ycbFaV6hiZpBiEgKD36qbCSMzeURhqXK1",
  "key22": "54pqtBhAetvNfhNYJcW16FGmqBmkkMby75S3ayxai4CWmuQfYy5VpuS8Puea2TvimD6GrXAhAe5ziXHqFroTDUhG",
  "key23": "4JGvh3o5WAxW6jUBFZk3yS5CCddB9TvpE17ZBAuY24TGaL7qV3cn5xFT2VYFDZfBW6tkp76FNWAjRww4J1i3tHWF",
  "key24": "GVLMHtmYvqjr8Y5stDtPEM8ts9y7TiywFSEEHFJPZHZB5yv3hYpCiDumj3v3wz2dzdm71Z3vS3nqQ9gFzPj7YQM",
  "key25": "3bFHqrw5XHKmfdrjGh8BXoigMug8Z77ABYvCWbUF3Vbe1gMra2ZinUDpoiGNLw8xA5VgkwtEh8QUMsN2tP59MeNR",
  "key26": "3mUmnKawSHxMpZwByeW96M1ERM3eBFUfMJbQweak8ZVY7hgEsxMeTB1xSmvSU3czuTSaTESytZU4uZm17RzWd6zR",
  "key27": "24zT7ZXQndESK7rcgTvJamBZmrQkZKzkeGobd9ZZ639o71kYd4oJhoAnAwRsZtwowZ1knHfBah8TFiK4PGnJbrG9",
  "key28": "3rsr6zjKUaS5H1UBjUWQobU1QELJWtALw2xUSSvPtZrWZr6nwJsH924qvtACQqUDfi3mcf3YHR3REpT8nz2pPbGN",
  "key29": "361x7rckM9388QURExgCvx3LHEkc6xGvJDyYqDu4iwfCvSLWcesr4NBLmZFV5rdsG7p6DV9BKAEQ2PsxZzFUDi57",
  "key30": "BPwbWfyNyxrxqXM9XXdwrcCw7TwVjmrxM2yeRkWqKVqZgaP8GwVjvQnjW2oQsvbfKUaCDLFHA8ceXgJymzi4auP",
  "key31": "5JrvbwQF1Zeb9P2p8F7E58SnWKoehU81CzaEfXhdx84uZvnDH6iQWggo9h1H9tQ5JeGUc4QbntWrtJCVjkra4rUy",
  "key32": "3jdciS9ZpiTJLUF6RmVYb69dXXbMAqs7HeVrL3H2E96v2kMj2CFUtkc5abpaWoenSwA6E1Qz6tvuNwURvyhEu3uC",
  "key33": "39YQQ9jfSc4v2TwHMhwcUdYVkDKEGVnBCWUrCL5PqBybJKeb3UUzmVBZVnPSNF8MqH3bNwMS2tTDdVCKHuDDAgg4",
  "key34": "1yJVJvT9RvhixgB3eDkWeqo7dm7gLUPcVgmUuKbiVYF2e2sZBXzNgo5T2zEeVWDY1r99JdhRVvPMU7HsGSHcWLK",
  "key35": "4r3vXUDfQ3iws7WzvUvLNDd7kbZX8KW3BrEDPTXan6RqWfAWoQw2tbyLhRwdnuecrpCZhwSjKQKoPNMZCYQb7ueD",
  "key36": "2K72x75VW7xFQHLyCLN3kLnLyXGhuWGfTU5hE2xWKGUNAHEBJJFdsW9tdDZAE2yjNSqcBjiXpFqzMJoEDoMoBCwq",
  "key37": "4fYvcKGtaqowmzidVbsD8rBmJuyATH2jhYYkZav53HztH21NQtemVgv9jCu97wVWUVtnymvgJxyN2PMUbffdQSeM",
  "key38": "2PRLLLkvVn2NAauRTzkLiCMRaC3v3usezBTPEcN45NwmxzTM8VothPB47wtYwxCAeKcuyAe29XSgn8UKLGsMkQd2",
  "key39": "2rXg6CCxHzmFm3kApXojP4jVHranVgDV21JqmyBFEf6xdv6JG7AT2hgUc3uEumXSQJ7MaBUM77KmRvuo5RNcZFx1",
  "key40": "32EUiZFn9jsZRcoMSZpNPMGqm7GA9a24D6jN14N6D4YANMNuyrVybKTH6aoAzK4oZcZz3TADYhLjYnBhWtA9eQvV",
  "key41": "46rFVKCmnGnCukyimyTDUxTSpDpiwA9fBXRRBaxqVi1YcsnpC5PxLvpGFwF89ipqDXp8sg9tGwKwD9yCZJjNgYVi",
  "key42": "2nrnoqtP2UBVnDriWPJQdftoB1YF9kRtQjwMeTnPcTjvEGiaLCuwvAUvs79FUpHp8tmhcArKM3zH415bceJkRe4q",
  "key43": "412Sz83td3DbfiTBjiYrVnPAoA2iBtU8qRznqupTotGh5Dt4s3JhQmSpZDpmqzgLBJCSTYc8ozGrnNUqPGkDiwLJ",
  "key44": "2dCTbDdpuJtkLug87GAmDg4fXJhZGgpqVPshvKwZbtWXisg6fYkpxWnhaogdA4HiA595Ycw92VppHzEGLnpCDi1p",
  "key45": "vySasenyz2ZZRvAs5LJeTvmajKd1meWQKBguZbGuNC2pu35q1ePvzuBTaSXTfpAiE8qh7vueP3jdzyJKEYb9mqM",
  "key46": "5FAVzpfeKvr1Sr2C1MvqohavPWNsGYuzLGhDU3SEKvBK5KXEfQktFZjzpbANKoSFk1PKw1hWNoub2h9B6S9eHveW",
  "key47": "3pizmm9KAUaponVqCCKiJUoZZo3TfSn3SwxqurYtthjeWvqHKzJSVYJeVruZuA22idxUWm6HmU5FJUpcmV6YAGKC",
  "key48": "5cgNsvqXBbfH88HKDUxnYJiMvdPjEJfnCeFvAh7hAfricSE1ni9gvUKvvnjN3d9hWQqR8vaabdz3xx7CM218WAZF"
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
