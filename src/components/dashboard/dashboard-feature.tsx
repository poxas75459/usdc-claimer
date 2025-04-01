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
    "2g8mM8UoBsYgnyPBLinjaSzLbhmWNRMJjzzNiGzgfLc4hCDjbsZugsBiLCnLUCwjD3zNgTUfSdsmW2TnftDwVrzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M5LiuJ1Cv82JcKzJJkvag53MxJjz4tDAi9ZdRqeddy6TSNYHi7YHUDq8JiSxz5Y3HY5h4guRzbYjCEqmpCFgxgy",
  "key1": "EooCdM1biEUku8wckq4iuowtyViocjxqsUkJND84Q1Fpu23tjjrbhpbaVMFvsx2v9Jt5pD8yARW4WnVxeha3We8",
  "key2": "FHnYTE6BQFwx9knT1wNx1ogqigShbGRCvUy2qA4wFPdXNmX5qTeKvRUqLDVA5BL3UtBFX4qj7pLorjEfaHQBKy7",
  "key3": "5HfBygkQtFpZiNiAY2PhfiDJs2ckeAAoKjpLQmhgRkj2BYMZzZoUMKQN6hYWaoeqEitAMgCXo8xeu8MLWZQqbjPY",
  "key4": "4dhusNEx13PWMagkVpCBDVLHdCCcRiDeU5Sd7uFihbwXPSttTUQpAcTY8ohBnKv655NPVb2xr6y3eGqkiuYPA4ZS",
  "key5": "NcAp1mrbCQ7w4Yf6iowCoKe44VjpTBnb6NSzefMAjFau99G4rqJhVALxypQzt6k6LaVuvg3TQ5tR66C55hRVzYB",
  "key6": "4k1AG4fxVuYmL5EAXFuEzQ5RV2THhfwbkRJaAZ2Fzz184aNXkaBHf1Qg6snp7AtAuF39GceLgf36fCmq54KapRra",
  "key7": "2PXy26RWJrkrQGuZir6db5TRb6exDpUcxvKHx2FkxKo82955m9AnZjs5gZPpNTgX46QpNvtYZrbMMT867XnHNkBh",
  "key8": "5GgFLnN2PpemsFffKiR54hKDpgqQFkYGGJE87f9otNnTRzvLfq21mYpCv6iWNJFJ4Uv9PGdBpsE3gznoWJvkxQRt",
  "key9": "314XKCNnjAUVRpafd5FoHakBdK4wSmGDN3WH8joBaTov2PseKxWaRbVv7K8j3XuiVTb62DKMc9GUZPVgoaLBHSTJ",
  "key10": "MgvmWdT22Kdia1Ks8r84oFDrYq5YVhTNz8aUiREyWAxpi6g92HAbKe6ez3TrVEPZMv3Z2MqnWkSTzEdWDPXNvFR",
  "key11": "3YuHBfJM3cBwcVvBYvwbc8YbVPaotCZps8AuN87QrCWuENd4dXm93LuF4BSEP6iLJu9PnjnxaTPyXUwoPQEorMyY",
  "key12": "4ZBsKp5LKBroAcbjLuNWNBGEBtyLNbhY97Ypiph4nomozXHKz8yAzx42CSzkotiF8j47kwyExiWDBPYYkUDepaZ3",
  "key13": "cumvRubqWjPb4394htdR9NjLv59DL8bGaZt8Xxt9QqEsyNgrPR2V8sbYd15DePeKEUMMT2DY78WmtwDHfnXMbjG",
  "key14": "33J1wpRNMwCqLEWZzt8CFVEGAiT5wYqbdRYSLkqHcXBiSkx529pafyPoTSTkqHh3sgemXJmYRHPRtK9sEfWdwy1c",
  "key15": "3jnHsaFrcjevwWRcisNpuwHorVKAWQtcMMVPXfUcKdQNGDjYgJ67y8kg1uw7ybhvpW887E9BhhKtdbDtrXhRrmDM",
  "key16": "pEZxeo73RkEUht6w1YRDPFaKjArk3xvMovuLXoSjLp3PLeT7zokKziaQWB74MiGGtpEhLuTDwXnyVMQFfUDrmxE",
  "key17": "7xe1uYHjQFZ5BV8FPp431ToEBZwBSqv5Cj2b6zUEYuUgRbAQLf1BXMPCuVSQnzXu7eufNUgUHsQunmhv1aD5tKW",
  "key18": "2o32FoapoUiYwSTM1mkWs77JhSyd5mxVXKkga97mh5c9ZnBfHLqcMn4b9V5VkP9HxX9C5w3k7CTAqnGyyQPN9Ja7",
  "key19": "48fcQ7mbiTjNoB195EyXWooeMYTQQDP3nZkeqAkhcisg4PkYnGqCfMsucKd1yDMaEaBthiF2vzhjcc2sLDMhhauj",
  "key20": "5rC9jYjn5QYUjhzKg5AdbH95hUfW3ufoDACED6ZVHneiRSUU9guW2Y315CuuKPumP67HoC1nUsdfBoyFgXxeZRV8",
  "key21": "2a7JTPr2p9CQLRBofDtiH1WbatYRkevEnvfwcbohaoELZEUHHpAeBJetV1mj2Pz3L4iAgZdiNiCb4bxYCpHJZFyL",
  "key22": "5HBVbXg6f7f3QxGtYqTgY18eS5hX85hmRtHvEknYrtqoVZw7RC9swQ3bjUuLYmjgKZDxZUY1cY9H7Fao2r96tuyW",
  "key23": "HkD5ahJ3KYzCCzQyGTSH7gkqwvEhG2KKWH2mdG79XuUVvMguBCh1jgsiHvhnGd4j2h5JstsJak5CX55rwchRrgt",
  "key24": "pZcGmpqyaFYQHDpZQpTAJ7UZqHXe2QMLDJMShaRdBhJfuh5Pk37PthRFJLSzDoo8nEE45Wz9GbHaJLnFQxmieK4",
  "key25": "3YbWsTvVcBZL3n9peMUrjMZ6AuW4JsoWvdhdskbyQQRUASHhD1wisXRtotbpEhdvqypwySf5XeyfSVehgbLuWuxy",
  "key26": "2xgbwzdj7pQiprNN6Bc9Svn2Rn8cX8bRBHoN8nkRZ7kBGMFPCrFvSo22LyhfTBrnN7hYV5SYapBMBSrEYATprZ5X",
  "key27": "VsFTh2msW3C9AKTQbsBEfJCoiMupthSrwGb4quezoGQtmQ4exDUhCf3PcDP2NUkdmdsXt5fC4dEy2znZMdaRhe8",
  "key28": "22AkkDZ8WGEamL6qusGkfLfa4crHm8XyT5CkZ7oyEuJL1N8tTTHhznir23zgBvbAU1LCSYXFszozKAbaco8uew31",
  "key29": "MTFqhzS2E2m2QVc7GZGGEThmxAb4hjdGfA76MmAfYLgrTrX3MMwcGHXshk7a5YPykLr5WA6bqhhVSY5T4oC2cJi",
  "key30": "49BhS7VgvbZ4prQhDoJNNAtcZtqTChpshR778Kq6XLzneeA2fbUPKCG2FWGh6xKNSMdj5zU5nsgWeTzrmxw9ktVr",
  "key31": "32uixdao2nW2gLM96pZf69gbQnzY4MEqb9d7NYGmfNjyPU9fV4tyXACokQV73G6dxaSbdZ9Suqk69r624gHaLYCG",
  "key32": "rGKhwJQc55rP87Qwy77xCbXvkqKZb31TcL5XNXV86zUEzDtjsNGAFUgqKr7NFb9u36i51Z7r5eWHCChL49davZU",
  "key33": "5pompncTeeXJKT45w2FCd5esvi9viMjnbPJSToa7Bp6sWvsEDurC5vAKqibq3Q1Jtn7Zns9RakRUoYEpsr22pU2S",
  "key34": "t11gwrU5dBvJEgSmJTwrjVNU3o7iQcrbRuzfouBRhdmUAaaRwRWwtT1qssRxp3eeb1F1k2HW9DJzVt5VeK33hbo",
  "key35": "3DjGj2dLjw9LWe4QeETLaQKkQrLr856tLVBP1BB6MX1sVBvtjVHLheSBCLffxh67cXfDdd394Gw82RLx3NtKwDbo",
  "key36": "48uRkJE8j2WSwCrscWHgcPxzov7jW2tRFG17TgXKeFrvpRnvAoh7e3GWEJvWWpkanRXrckhFmbbtva7yvLJUBHwd",
  "key37": "5S1fsQR1rDg8mr4biYeoo83SJCDRo3LpMGe64jsT2hEvDxPFcwa7afiGibGEBfKuS8rR3rHrzb194vhiibZcmy4r",
  "key38": "4wNAKaTeXMG6RjY33eTx1P2ggE3yo6Dz8oainuysi9Ly3knVwP8X2EwWdLx6AWYdV11b1r5qs8gNeex7aNhrm6Kb",
  "key39": "2DB2zr3pZn3jmbqkUUc9rJ1t2ioKXwrp36UKbRs6fZaUmLDUsWNp449U349t4NjuEXzPVpwb2NxwTxPwSeQjGirn",
  "key40": "Zj5baJLN4B5fwaRK2SPAHjCFJCPCADYiTMz8Au7dATytBzYtw7tzr311m561xV6vMTNKLGZxHmhpDDQF99eJKP4",
  "key41": "2xdNPRYT424bLWyDWdJbA274sc7EhJu6UUmNP2Bp4ugZMJmSVDoZmXXZCmMiSWdMVRfMLt1ZTmfNcZ9Wmd2yBEdQ"
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
