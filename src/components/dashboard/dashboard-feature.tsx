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
    "4icksCBmTkeb294yXxMJ8fZRT9mbcJEoxKUJHiGBFPwVxN66YWnYM63B5ddP6KkoyUKGySk1B6Rhh1pVJM6tF7YX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dz4ofwoBfkUV3zb1nAWBqTkPn8uxRWMcRJ6b1DWavz8GD8bcb88QmPA8wnoTDnd8UuqPQ8N1PNQyz7SWdVoxskq",
  "key1": "5xcH2QQ8U9BdNB8zipUgZMHKwh4ZEcas73aTrw8tzrjTUZuaNahV1X9zBrSufyMjzd9dLcgrqsJxt8K2CkoHAp6F",
  "key2": "4KFE9yvZMug63rUYHEzypssP67diyneYwHT8qddUuHiZsQcUhLrTQkjh7D7Awt8DzHZcArCWUKtTAqP1ARurwbS1",
  "key3": "3FndFhyW8meJqtCduDx7WsZ4oVeeotTHNNmvTL7nRr2CFNxbBwNzRygk6SMeb3FLtPBqe7NVZH7NRXoDzVWATdET",
  "key4": "4Cbns8ZrBZHKgXr8Ld4SZseRqRcdivDHKhwMueba9Fe9P4vM5cr3HAV6tYFtoEVALmMj6FcdUp6SH9ARJsLAt338",
  "key5": "3X3vCtSvBVmbzs6i8ncL8NdupiFtpmSbRYzbBzA3H9QRXmHzA8ryJmhPVKAJSQaQ5Yj1LAbSNSoGiPfjgUsDo2c7",
  "key6": "2tCar9cKr4R3URF2CiqBU7P5rxGDaQDRjAgrhkFGopEGvZR6m8JLKvdiaMKMmviaseDT4cfdXxDnjFZG97bPpmNe",
  "key7": "4P7x73pM3soU6gmMY3Epu19rnpP7KqbyfLp7GDYMQrz4S9dNtegWVXaT7oN96DRprLsKXtpKU3t8VtVKNbCeWX3G",
  "key8": "46EfzrSnjGom4JjjNQbX8gZEEx4Faroa28p1feuFWjLRTdLkxtp6ViE8yhM4dYsZZU7hiRt4JWwiYRDaezLm6Ejd",
  "key9": "5T5dhdcYPHRRKEm97eQvJLq7HuEv2NL1kwRHw3wurmmkogmyd3oC8XRJMiGZLfPA3mjKKWTawGe8umhGd5SdmEbs",
  "key10": "3mDw3mDQstsVNWFhFHq5vvvkVXEvPvQRnomtEdbf6dCpBNStWocDi3ZfvXTRAt6huXR5qXYZbV5FDnZT6sCQcTAF",
  "key11": "3tBy8hzgKhVzRbkabKhLBViW4W6VeYNnCukV3YZFuaKyPF3YxrDpAwCBfo9WBW634KsuM1t7RVT2qiGAt79u33GT",
  "key12": "61PbSzpnoxBS6MMR39rDPPvtPEYtVQXKP5R112TXakkqqbyVVhctnJHuWHzoi9FgdNcbjuAJGDGE7eYrWZ1rfaoT",
  "key13": "z3DRBNkhqQ5P7UmQm1ZDrjmzUxMM4ANQrK9b8B7kwV3y9aeQ6u2gNqiSoHc1zm1js5wUaBvJQKAN26kYarFFRT4",
  "key14": "2yTrtNgtPTdjJC33oNQh5JpKQazW9NAnebGcrnepGjb5hd5cDNZQKG7LTbWGhMZx6eZV3HZ7dZcM8ygXmpFon3D4",
  "key15": "67bwPUYJrrnGfNVUwN3yVoxZAjyG98AD8sDg8UgaCoKQgr47ycowkEttEMZfS67ecX5ay5RzDd3Sk7CjibTStTB8",
  "key16": "5QRoZymvVGFUGjveCcTaM5uSfkJCQgswYdqsRLwovsANdF36BaCT7uSiAWw6vRScdem4BzMCb4ymyJZ9CNpv3VWD",
  "key17": "4zKsN1AyeDkePeufsor1bfBj4EQC2Aj9tr46w7n9TepmEEMorj7CHDv622c2RZwYRh4MFNWi98kE5vpTrEhUTKL6",
  "key18": "5V6tyGiDDcMDiE8kcEXsJ4MmpJstFefrz513o8K9ogymzdRqb57xcVndPZUCXmF3TddcanPENRNJavGn2ZYffiJZ",
  "key19": "37UgzX5raHLgMDDUdQR7LKfJx3WbNCruRzeet8VkMHhdsgyEM9oVKm7B97BCrP7Yzs2kmxtPywMWGWQ9odELzFid",
  "key20": "5wnRMvg2thWHwsiCDBVyimRnLzorjqhgU7dDVoAgS4Fb1H9nvwJBpSQpdYhwEp4vMtafBNjuiojTsYNr47na5d1B",
  "key21": "uXbvw9HSsqhmRUUoL2Ucg5MsJJyrRmBc9UJLL1KBQeebNrnRjNc8pwgzhPNz9yGdrkxNWuP4o9KfW5Zg6NSceYs",
  "key22": "qHaSWDiEgwtqXojtCijCfyV4mqTLPX4XaSrAGtTHneGiexx1KqnEdXTCoau3RzjAysc4gWvjUU1ib97nX65tdjj",
  "key23": "5YxhzfqJ2BmcC2axdN3vzHtYPWut6mWppriKH4bpEFJuj7uJruhSaSRB13V7eNdie71N7oZ6BH6ebHQaT31TAyt4",
  "key24": "2jtccwPENKRUNtw5y1QSgN7B31Lb653qjkNRsiSqqUrqvpdPPnGm7ggbDZWf4o8BNXNRdZBFxTDjrsne4HMu2iHx",
  "key25": "5ULcdArt5XcwEafC3neefDXBQ4pSuu9ikYDvxWCs9VMaocQ73cCUd1waDf22Qk1VjCEBWQ8gNq4uSTSinuchTN23",
  "key26": "Ne27HyCTVMffZQJ5Fe8tXJWuCL8stiToe5AEgcb988Aj3jM3S2TNz2dJqQ4qQGwMd1AuLn5eSRBHH62uQpeAa1Z",
  "key27": "5npsgWsH9AxywZwBwo3T9L8s2tpSYMZSgQn1oTdBfjuHzcKREap2uzPjQAZzmUumSXGm9W5phccGBTe5CdRfrG3j",
  "key28": "3QDzhjoiSNdwKkj6kh59mt953z9v9Ntm9c5EZfWGdMX7r7tsPNRF4TTDcNfda3peCxiXcVQDBNVn7NaUJREmcNTX",
  "key29": "oyjCNv2eJcgfHt8Adk56c7svr2y85UCkprZ8hpFwNpMPS6ykd4EADXeMS4aQpWznMZTDCEM49LKvhNX6pJBifdj",
  "key30": "F5JemWQ8oGR9rmbmMomzP5wjo7dNp2coamVJbJmnSnPeHgCDG31LQ6Nj62iUi7ivonjT9kxHst3FKATgMQ9Lo1s",
  "key31": "3F9Cq4SrfpqKsyCgc3yrhSDrMSjNRXVnmnCNKjZztDGtLCDErfgxUAMibvmxK6DDukbUnJ2BxkzhqGFJhTt71LWK",
  "key32": "2A9h2TQmmz6oaaDcEzd6AmiRf5GBzH8jex4c7uRR5518eRQCS82KgNPqefoaQ2MVU1ULLsA32K7M8nnThCetuWuP",
  "key33": "2YciBJ87AyjewzMy8xAFNE3s7gyFbp4JketoVwsyEsJW5mzbE2zZEKyKRLECaiWm783LVwaWwnS7JN4pBXaS51AN",
  "key34": "53RK4Fbg1fTJwuqPVmkZFDZhLrvUVP5R665LzGWxV1h5zSgqX1SCrAVyscuspS61AGV4B4u1e52WktzL3aeGeVX7",
  "key35": "2Yq6QPrCQpf43SfxBizHySgtZW7Eq5EoML5Y8psYQHhm1NCCjCuJp1uKjGYoTu8PcUyCJkDGect8St6sMJ9862Xp",
  "key36": "N9UNU1X6WWbowsgvo8NK6jacD9WfoBNe5eRLEkssUuU9f9u847fdcNMGzNBg8g36i4J4P8LkSXQ5ZUspfPwYbzo",
  "key37": "5VzdyTq8oKTViVqK93rh3ueVkgZxcwa3YUVbTNg9pQLg74ePL3454YWKhzAPHceYr1Xv6WaK4eNXgQaXeScTrTGC",
  "key38": "2fcufhAaTdoysZxNJwbNicR4xfsT927SKnrE5GJKKfZ4dFqM6M4H24QYUGQMsN1C7i7oXnP44TxPXoostAyHFGqK",
  "key39": "5Tw982KUhe3hcRnMBKw9qfwtcZF8M1tH9Ufy9sGLCQdT5tvoXMG9r5b5ugL1VhwJuRnteKrFikguGfMfGjJDK8Dp",
  "key40": "wWtHJogZF7Z2FRvHZQRjV1GcrUfyZJvraoSYjnEyMMWVcyMo8ioFtJHU18GDV2VHbZQURruTiua1DXZFKBiWLrW",
  "key41": "2FrvNqYMe8joLugKB73hpMTmvsTSFQPH1rv3HK8dRFRoEVCK2t93FqfwUrV1Y8NoKE91QwuPh5UbY3tKtZLed2nN",
  "key42": "5GWHqFXBqjx29Veaf627y8E8uMaibrsLJT2XpQtsxv8NtEoQrYnELtqhkZvJFquDHVt9cButs8p47cRPtuPTVCG3",
  "key43": "3wbRYSjYprCsHJhGoTmnWhpu2nkPmkcVeELWvSTy4tCRc5f9bYtqZPBhGnUNNC41oQ3y7Wm3WxMYecjAysoQQ8uE",
  "key44": "49LVWBiRTSTsKviDxmbZGywutGjqxAZw7S5mT7seaLeY4tEoRxcXBQhXXChA6BCbfmiPqcL9NvTmSiTB6y6uZTVJ"
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
