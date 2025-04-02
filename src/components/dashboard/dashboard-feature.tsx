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
    "49nvKBLJVV5B6ekLNxpyHLNLLuHMQxUmE1Z8JoUhhexugKTWDQoB79HPEK4dPzbaRzcVTt5FrXX2y1xgF5R3F5sU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WVKqiSdKDBYaVP7YZFcvZPU9YUVoF86QsRJzzDxkoLNAL3ERdudbsPk6gmXY1ZkUP4ej2Dh5LCweN478peeBVch",
  "key1": "5SqpRf5VN3XGzcHbFknVr7xYQUL6rHVsDYKp39UZ8DrJAo4nAmaMJ53V7uq6ZMByXWfraF3vq7A7AfycSEskLyM2",
  "key2": "RzRhpWx79tFLv7uvSyLL3g86BEtJCr8d8wZnymH3Ubbqm6UbUmRMcRuYitmngWY2xzDGP9FvGsKE8C6bxwFQxxA",
  "key3": "5SWu4mtUjFUGiT67Jjxup5EhYPqQFkSvYtEffjn879p589jsS227z4Xqic41YMQyVke2gRbVak6SzAk4YwTTyP2G",
  "key4": "4YyQWCyDensw92hZ6QVWtg4ZeYmaiCSoA1qRuwkr7a7f8KRWFyvd5no7645aDx9N5KYPhvbHg9B9rZ5xWGRUKq7J",
  "key5": "2yM4VbZegsTYWrtcWHSTGeBNupsjXCh5xhrGgXPYDc87dpUNi6fr6qHuWM7hUb48NJSavdsp64oss5DiFU2XjStG",
  "key6": "3pgKv3B3YqEkEj8gbouyXWjD6deJ8KQQobQqhsdSA2TG3BQccFMscuJLoTJgRb8BZp1PDqr7fSn1K7ACFctV9pQt",
  "key7": "38Mk67dJjhTgPQGkVDyET75zGZzGaqSMCoidVTLDoStgsFaEqJn8YtQGNwZvQtUFNwucWiFCu9R95YmbDCYFuJux",
  "key8": "4oMTSJA4fvVZPYkLxFaFeZTWDVtkpFD22kNXMYYxoSJxoMXxpZ8pQHivUpK1CTGNJ2AZNc6Cnnwi7KH5BpP4dCr7",
  "key9": "2rXDkA92bSxFQ21mHjZkjwCmiPH12mHvHFsHot5NQWqyh5FNk4JGbgZtrEzgN1R45Yzzth4zW4BZTZJM6mjT6xSP",
  "key10": "6R7yprCVzqYmALB7jHDCAMdkJMo8Ep3PoF7bwoGBG5MEE5LzxxZXhYMroptp3ZTr733pjKZrBbj6Vm1a3oeZjBG",
  "key11": "66ER2daAKLrUcoBTeS5cTaSy9zEdVV3iaRCrLPEP8zwKvtCiu4i7r1MDDXWjV7i83MGhG57JubNCTDohgKMXRQuj",
  "key12": "5CMdAtBaG5ezAU9fGYGKUd9mMZBGho5zy6XQuGbyyB5QKcSWVbtr1dTLigzTqbQQgUyKZAJ53mDiCX3pUDeWi2An",
  "key13": "5nx1BLac6eBnYqxVkqAKVGzTZ6QbDuhrG3TyTWLUzXLNqiBKfV74C8oysmAa7ca2FNzXYipPoFvcSFXRxJKZaKCD",
  "key14": "4PmQEw6FpAM6SQsxMA8YGVRPJMPoH89sAKkZSX8vLC6m133dKTYzGmKmk88SWwaJqtn9LerdHHGza28uxMnMh1QF",
  "key15": "2qtMvMomSrS2yCmYK2ig48vaNoxQKfpSAxfZ35cX5XkdgKYvAG826FrERTTtGduBp1KdviTSZLkKbPaFCgPfekyj",
  "key16": "5xywt3gHUBQ2tdrapxaGEitqHeFpjFwmggQWQYf2D6aYyPR3tpXqVquKFprCsM2CgT9LeL2ZVYANKmMPHSfpsDFz",
  "key17": "31UUtTcDhHGMF6eMuAVvxj1B4aytr4EQ2me4Kzw6jRXFf3aDEfKtxryzT9Xki1SdPLirWvAtQHudGjz1FqRkLih5",
  "key18": "52q2fkZj2SqRywPzrd4FdhQmRgn2PuAfqdU2oC7bjDWsSaAeQqr4a3EeYiHdAeiGao47gyDCqjZtMKag3fUdeKqF",
  "key19": "2jwpDVoTgYYB1twehdKo1DQtdH4vNWjtUBNRusb9uMhD1KdUgjTtjSuiRNZkth8byGMTs7T98tz8v8aUETsZoid8",
  "key20": "4G6cJDuNv4p5phkKGbaRV6hCoUsduFQp5sAkqSWDscmW8cCodfazvzDh45w5ubecCp74xB4NUCNmgLqq1efmWdfL",
  "key21": "EyZD9F17AzuaYoXRf687JcFUfyw8rFUM3eFMF5CbBwmSTpgB2ieUJcZw3DV4297HTQUvcYqg2vaoiuZTQjCBqAS",
  "key22": "2bXyH8bK3fMQSPYimJhQapEm6jkbf2fcbERaDHMse7uG3tpfMp8R2u5h43ZLVJeG72cezrvtZiesDeCpjkHUstpN",
  "key23": "2ET9ZmcRLzNvMcm8eSMeviExnFYkYW9oe24h7akJkEWm4xscpQuoDFvHJkJR7cbuThb5Rv3GpyHZPnqYPhoGzCGt",
  "key24": "3DS9TTaeVr4WZPrAcKx146goCMsgGedwmHexrp4Yt5actkAbKJtqeSpbeRMFPrepiMp4g4MXswxxprhszsnymfX5",
  "key25": "4UM1t1R5FCniqKuWW5H7ai7kDDyNJqZLL8QLhP9T5R5q5VKbM1HfN22ej3nwDGtNJM8gZcc2Vno1BmdpCQNK3nZL",
  "key26": "5mfz11ok8pcf6ZzRSv6yBNPFmdPYLY55M9iwTiaqpJGZhbHjFNSktSwL2JXkkjg8dC1VbKSzEBxd4TksCDVeVzSp",
  "key27": "3d7RJeQxk4EkpjbJZ7A1UzNZykRvpc7NPLs6QvxXPmm4AUhcxE8b6V2tBLh1TYAttRR7m4HcqPawuSvvCF8EiX9x",
  "key28": "3rT3sAx1ySMxTirZBpwScnvrujcUA2QTjsYgFm6pHXgqwcS3ArHdrCsKwnhcYuj6924ALqERHZtMgzfcDPkzCNkX",
  "key29": "5Ab6kURsx8x4pkPZq3qGZ5Ej2CQLr2mx5ihwXAkV8f6d8zTMNsUi18j8hoa7zroC9NEWnFbTUssEfsCDXmK4hfLx",
  "key30": "5m91MfMUU3Fkc5Sm1vpvgxAzMWaAJAQGTHkdAgp2QHLNLRojH7Fc2ptcFrk1B6pcM4sFkrs7SideECVKUeunaue2",
  "key31": "5EkhooCEHv1buVB3wy6tikrrQeeovCBWBWyqFESxRbBvww5cYpE6xYy4C2FV4LKj7zHJbyEBvQpHkJb3nM5xszzP",
  "key32": "4ihbNmbSzaNg411sKRGBA7n4gb6DrNeWXAPNDSpkGLN1BdCXcAVgRyu7CtgKvMxs21QhuihmpkDXSdaYiGoiFuhp",
  "key33": "4saQmLKVbfxnsG2GWp9EXxvC5bLJSLzScFGe7TN7qPnVmiQrNyFjpJi9L2JkuUcFCHT98RoBGPAxFyogB9egxbAu",
  "key34": "3JShJLuen1H6dBETun8o2LGLHt3cYXd5GFnumPewxWnJHKaFeaSkzcd6wuE1QHV1MysbH7bcJafNbUpepXsvDj9N",
  "key35": "5L5jPw3N2XxAMkrKCJMpok2ycPcdKpMqMiN4iAJnN28Qx4tavJr5MnQJKAspnoJyFtvD8axsqf8iK1ex23xGRpt8",
  "key36": "4LL1GZfK2kyj54SvhJ1zoduYjek2LtCCQfEcHSJZomgkzQH7PAcDkurHtmpyb5LWtrxV2qc8UkXJoe7pWxsGFMei",
  "key37": "5Qb2iW1LBGcETj9nxgp1LSXVjzkzfQ3B9gtwZ9LnWf8p9WHSdXxuSpUCawpGWd7gK61R7yzA3wBLyjTF5XpJGAW6",
  "key38": "21A75tgaLNBXrUXZuv2n4k6thxecUMZSJbNnPU9SvSt3FBRBnd3914fhhypu3apaCt7gnzcPy7vfav7vtyxtqahf",
  "key39": "46sXvxV3d9c59HBjeybpoxQv4GZbjR5g7afoSfvub2xb33B1vJakqh8iZ9sKjhibuU1MexvmBY7tRv9HUXDxterP"
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
