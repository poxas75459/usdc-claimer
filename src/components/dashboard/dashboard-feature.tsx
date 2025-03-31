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
    "3NWLo2SGQ84BUFZqBUZySGYnSGDRfEmgAdb83RsMWogxKATdqWMTSZdvQWBQT6sApyo6W4M5RMVz5Xs5NXT7Na9S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WGaAGyTGAEVTeuH8Yhj9ES2sjgfSqHVBAbXhBTCuokUZvS9G49hEZRqnDq1gGPBChAZTMsAoWvY3YKcxTXAzqLQ",
  "key1": "3cnAVrA2wmHUB95RknyYaakKHCchtpDQ5cm5B88miLdkQwFrpxBmVe3CDbc1BNxX3NFa1GLtf8M1hzGYii3Xcv7y",
  "key2": "3zbXGdN4okiXD1vU8S5hyymRQU6iYbYYgx97xoePyE1EMB3Tdj8EcSMqGJjanotkbfmkYSeQXAuRmd5v6YpQNK4d",
  "key3": "zND64jSrpCYL1kik5Y3GqLhSQShBnvFBho3w59cSfzkKuz3KP5988dixwpUAL8jxVeiPeiB4Be3a9SMZXPHvBxf",
  "key4": "2X5gQxoVsDASaBDcr4wjJj6GfiskCb4PuVhmXFfY8MwJeWBPqvzGUAR5SgRkSgqz57SgELVJHfdaBTMCNSHLVCCF",
  "key5": "1XZoqKMfL3WrP1ymJNZaP9ix2P9pkjC9ej5zn6Fddx5EvA8ymBFxFArQ9PLbbmkNBiHuWoGd983jm5nEwC4fRq4",
  "key6": "5ELoDTuigqNdLadwiDtgVQYtn48FcCFRomSKJcePN8Fx6NGz8pEdRyHyzrusqUf6ecS1p3voY723DpcCLA4ECzkR",
  "key7": "4d2YBktPMngQhq5ydwroDtVmBVsjxvEEe2EAwmfcnDchFiNJvVznSmh9d1sGbJLBLPXwsrt26j8aoueUeEVif95M",
  "key8": "5DahFGrhz6q3xbU9cCjhvij3KfPjebbht8JXjPnbwgyRofqj5EzzxpgQHSzLKkTeFmdvQcSfdHBkhoRA5hmF7Pgg",
  "key9": "5DXUAwKcUNKefQLGjv9zu8pmPR4cXYHnroupAH58iVoaASXdL9KJSkPbDcFGSpUt4Egz2VJi3deb4skx5NuEg1Xw",
  "key10": "38DeG3Zch5TwKuaSnGrAKHb12iiCfopb7qtGX762UiR4vc7jo22GJUL9daFuvLjR6vE6Jt8qRHXW4FQWcmbzSZf9",
  "key11": "65BBU6djof2gGULJEsHGxd2gg8Xx9f7FfGYc9nD13kSrgpTiD8SSfQAVknVcssaC9t4ocUxqz4GLP8rQwXn8HDj8",
  "key12": "3LjmmHXkaKffTXBoGVHgqb2j4CoFMfZiQyrhtysk4WroHxjbjTdkJStvJshEfUVVEtW41PEvMPzoyFaNUZMza9d5",
  "key13": "5WoWRUA3Bkh5mrMq5mfFLk7v4AYRzW7TYKPFHauJYLCwePLx6jveRdYGJtKfEskVkdikJVE8KZ3oHDMp1wThdC3L",
  "key14": "5pZUiStpuREhXyh91FvmMMY4DiNeku4XusRxeFBF52tz3keqNRkJmPTr9ubaYQgXvkQ5Wx17Zu1ndn9LSXE7haNF",
  "key15": "2bx2ShQMPYruCp2JyzpPjRXRQeH44xPk1eY7pB7BS2CfQ23t7sgnixUq8wLcaRZNQ6cXLDNEBqeYTb8uo4Ho7PBx",
  "key16": "4AGELwxu8JgjH8c6MiJAdYzyKa5cqruVtKmHBjXN8zTA4bVzf4BNZQLENAbH8rFjR32jdFgALfrn8uZnr5J6JaPX",
  "key17": "2rjJhqwTQ5u2ng8KHPtpUBJmvyyhA8mhrvZq3RtHQnSxT7KeV8GZZZBmwZm8e11wR8RU4CDRJFm16QnLznpzDcvn",
  "key18": "4Y4RX8SNLHF7SPhgMzXqj2XjnqrkkdwYzwrFa3ndQCuRNpwoWZ8pHAHZLfgAp9TmwyZTGvVB3cbgSSeW7zorCtBH",
  "key19": "64VVUk3ddVnwzNRUfJQveb1EFXed2Xf4bTWJ8Nseu64xBQ2MUyPuj7kHPS9zE3girRQRL4YjnTEUkMQnb4Uqbgvu",
  "key20": "2EuGFw2sg5bp5G9fz1FXWe5wRQ7yPvGBiQ3vaR8hQ1eC6wFMWaAdssw8ZoGhkwyiozukvgt2eWF9uU23ZhfBUUEC",
  "key21": "QSukkw77zXHqKCgwrR9W7z1B2FSwhJJgKsEyH58yiTrCncBKzsQLxpmcukhc1aDMd46kS9xxnfDtaRid2xuuhvW",
  "key22": "3BV2t2p2JR36KiFZihFgapRdL3PT6GYscrYHrgbCgocbZ4JvHG2MPG5YkEQCFAZ2ykDhaPuFiw2MoT9DTnwxqHbL",
  "key23": "BkdVxn38RtiLH5KBpc3zhqve84exvsNsy5ynhQHWEEctCAztJGLGmf9ZxWHdtrvdwF8wWp8hVrENAK7nkKqA8Ym",
  "key24": "pPwaktkfw3geUEwMZsmKQEjTQWipvXgN2BoL8hJWPTjpbtEE6jSUC2tUdz6nxE4YoRuxekydsEJWhNeXjK7Y3aU",
  "key25": "3eS2N8wwwPmJsbDfas4VBqjoESSJKkEUyqgsUMcKEdUdUHjtuuAA1YrYBLazVytrFz317m3AyxJrkrKE8RjKuLc3",
  "key26": "28PTxnmr6Fj4PeTas7apJoLeXz3HGNEpNvV3jcGuRG8H6nUi555BBep8KMyKb2kUiYfpEM6maE189Prv2US9MWKT",
  "key27": "5iLStN14sBTpDuHtZp1Ybf1GqtjeK1xiZRCN2Lye3FLLBhjD3PfRS5pUg43Z6Hpu7hDL55z19zBPmkm3XsSbpykL"
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
