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
    "4q7az47fqD163Ebp8dHYcGW1UvEAHjtTpEzGokqANdLRWfaY2pdrDSPFohWTWKfBf5m1m3p8x8HQAvTQpAmEjcQC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ye1vyDghRDEwRVm3RzK2mQwF1iAs4tKPTEDhViq5E1Eu8FRut3JHg2kJEhSWcgaNG9ikPGdewSEssYaX51paYZh",
  "key1": "22yjSJoj2gLCPxYH5UgXew9ho9jCdVmUALsp8SPsTdQxGuuxzzuLHSn6DvEZYC5z7w3YMhXcFY8By3xDVfhPvykC",
  "key2": "38asxti2Mm8DB6ELbap7RucH6c4VFko4tbMb7uvU28tnwbYNVCK6FGJSAm48Y37wsT7brvnpcQCDJe4hd93oZFJs",
  "key3": "2u8HGY93Bkg8t9RGM4A9fdMNoBVDjemTpkAPQBZu9G6pmCBRnaFicS2GaKnh6Hndfr9SWq3YqDydPc2xzsGfyoWt",
  "key4": "4YPoZGph1qAL6c9Aa8MHXg4e2E4t2sbUuNEnV3WDdmg7zMsvUPDWyi74M39uinCYNkqUm8MzxjAcrTQXPu8jnsWM",
  "key5": "4rpTw166K5uwG6RNJ5X4bqjJeMGDLP3isd7nqgu66Dmei8kxBnxNyFJfRwapGGRPEhfCc99vG29rxLguZBk3hLET",
  "key6": "5WPiJ44vK5gMRMMV2F9yx7SjC9sVsCit8ZTcKUCRFoXKUF5es1UJ3EztRiwUhtKN5N9sBSYVvgRWaVXc7xCtqhE4",
  "key7": "4s1S9yYpFxHxhMdxyPggNGPb65qzaEp1LBNVjXFEja4PFWCs5sr4Kg1TyhdpyUKET4THjf8CNz1zMa7i48gBaob5",
  "key8": "4kHXSTZikuwWiajPypuSdmni28sbVxpJC8WUzuRDpuLzQcChWSN3fcn5BbRNttjfTXdr44kXZM44g1keQdJvbuZy",
  "key9": "4g6DBxuJ38bJEQvFy4n24GC1qxrSVQ95indbDdUS3KnVxMEbTBvcJ561U1BwUVfXuy8ZusFdUEenExiNyQbSEVnb",
  "key10": "31NYM7PSGT9TPYQ3g6FFnrWE7rJEzD8nHvYtpWuQxWXVyNFr5dmaNkHNSgbr5kr4tUyXJFh7jkxvu9Tnkanoq6Ay",
  "key11": "4uDMHx2GBMQRq1DxFgzhgjJoTqqBJcaAEEdxswrTwZSpQidPqpZPSDXESeK3HY9W3wed6TsXemx6KRLELfX7Wc34",
  "key12": "5Gq3PGFUqf7WZ23dMBUSUdvGCLHRh3LFcR936q8hphdHW5Lka3G5Zferyx1FgvoKsopxqYdbhzNYe58nMGoE7SRD",
  "key13": "2hUao7XBsthurQ27M8si9cn3WArrwZV9uonDLpU6dShLNq1RP4gLxa9AmFV62JY3s8xhub6mucN3vynhWBWPaTE2",
  "key14": "3XkkvSs6sL4k1FYJJBVFQAVix1nWwxT5mEeUuZqezw3wuNnHaopUhuvr5onvbN6U1uqukedFDBHM879qjsse4tra",
  "key15": "38yKmhZAHmZ7KjJMenU5NXAjDewo7vy1HTRw8EWN2nbYkGGTvGokSb5G9RTnmGY2Em5CouVMg7ssLERxHzmLGqQE",
  "key16": "4QDCujFNFs3BP5o8wprQKJNtgsjFGWMcLakVfHCGbg9XCgjouBTBXK3VicoWjBvDg5nVc11sM8SWq66Hu1XKzxxn",
  "key17": "qcrDqSMdyUQtsheeABVJKcxokwsm1BKfkYV8EoxXiwgkp2ermAeVzPbWiYRRQro5R4YTpUcGANKe7eiw5DeouKv",
  "key18": "2LZPBF8H3tGcj8n6QwGHAnSsfoDNhfEHPyaMeZtjjXJzpn7xco9qum8azi6BivUZbM8emQtVobFYrmPcpxiT6bLT",
  "key19": "595Eyaj5zVU2UTWuvq3GaEiocn3TVZQZPAFmsxCGEckWkZ8DNJww2nLsF2zU4yBZbfCnLYbcLc9fBsLcaQ9d3pTY",
  "key20": "4v49GVGBtCdVMSXDy9DDMoh2mBt1eNRuGHMYk5AdzCEavSvNTgrzvNZaK8dEE6B8FrvZVwEmY8Sz6bSatXR7JqDz",
  "key21": "3f6d7dFYEJ2r1ZKocY7b9ACZ2jUfn3EgobJYJXuT5jJ7ULEzz7k2ndbsAmPaMVw5j8wSm6C3BR2ETinGp7CSpqVn",
  "key22": "3xTJYA2auGY4NXqBJSb3BEsvyk3WRXMDv1CtExRQ9RbrPXRJP1Lw67imF9wXo7GszKpvK741VpUioLgQqUoiuhXq",
  "key23": "2pbztLncASdGNkVDxtFxa93HyQ9za7iF6FXi5FJ2zxvw6XwwYHjHRXaEGiTrVXPh49qY7GgGmD1U7x31RY9ktBDR",
  "key24": "mcX8XhGn1FjGf8ycWmazB1dPX8XcsPwwkuEAabbyW2E1pE3ePR49FB6a6vbQqiBtG3fnERvbt1UWcnciKbhAYhz",
  "key25": "5L368Mqa1GNaSvuDdMduyNSuuTkmyGtcwr2A5vTmQkxKDdtWuBeM6iv4C7GYE6EbjSdkYkZycLS5KZYvnXnghTD",
  "key26": "3TRUEMEiWxAL1b6BGhFpCn3KZXkEXc3CyoBhmQwZs67vkvoifoWgRFWjriEU2aPitiJhYgrJVeKsA1gbzjc2BswW",
  "key27": "K9MzHgdc2Urx9Lta5dhpkH19bU1kV7CASCs2dm6VjpYHQ715HUUr7q5SdPU2FCFvNViwqxcuSp4tB1xfL25waxK",
  "key28": "4SgDWwfFQ5ihkrsQa5hM8GAeWcXahCS9eTTj9b29tEwi9QW8rm4ZDPYVkMdAtCpGz5Sxxd8iesZmKT3zV1VPz45Z",
  "key29": "4qVXw22AVNongGzd14brKmGcKCf4611rbphpyugtJfFpJyGFosKytCqXzecmR3a72HSyJry3Ngzy3bseQ6rAp2rE",
  "key30": "5nYX6hCjNMBHjMGT8E5jdRhnT5GCGPqWtNXJbY6greyAQK7ZvH1GSTUQyqs7hgnfBCytYPgVjNpowi4Ws8DeJ6b6",
  "key31": "3iRCfgLy2zS5Rndmyr7V9vqfLbMuT8bfHGHvRdF4mdJHtnq5K31K5fkV8t4zQWehbQzcfr3VSFRQ3bkJKU43Zx1d",
  "key32": "2tVkqmk64zMQeQWjdaRgywLv3Btc3pGN1WMEKiRtCHXpemMisVDTwn3wTzGSuWgrx2K7EETyySDgLk5KcXXjym1s",
  "key33": "3bbSfSE34SqHatfLhxVKwnqKZtZGEC9kiu57542rNjZTzEpns246SM7Pyuu7dCm6FodQh6ihBnfg4N3Evgqxbaz4",
  "key34": "61y6TcHwLQLvJx5yHN9edHKw5A2ELGymVpjee1JWrBFDsSBAsG6mHyLFTpE9K7dst3hF1LD3S7v9W3GGwYmomXs5",
  "key35": "3h1n5C3wRiwDU5d8YefUGcVdFHpvHvq2sPg1VZ59vLffZWhwBrJqDB42P2MUQbxVERM2y4x34aNQgqcDPypYg8wF",
  "key36": "4WvYgiYDgaNE64thwe6cbysN7n829mzDnScfpSrKX8r7L23sCZxRxcf9CxcmzDAttrHG3n35Vt9znVMei2UMoWVr",
  "key37": "2Fz9JWFM9wWMeomkJjb7PaBuqnCCjjXgcKcMBpVFNi5sfZdBvFQdMqKjygReNaneTxKnPHZaDG34oDsAfFjVWxyr",
  "key38": "56ZGYBP6N7EiMmAGFm7fJ4wPLbcL17Rxgg1fL2WLDJkFRKsai1h9LpkcxQsana6QmE4UH96PdT32mvdf4aie2f27",
  "key39": "3T4LyTwxwdKnWCx1YZoThXKaeeaZ66juqLqFyVfhRrMrVs5NJwDwEBHuECyMULUgpAa91hqvJfG4DLnQr5dAVD1B"
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
