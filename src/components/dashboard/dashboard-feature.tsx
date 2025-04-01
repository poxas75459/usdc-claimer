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
    "3bLwNRJTqXSoGPkDRpKXETJ6SWEQzJRw6Apjs9LGdXevvjd5wR3QBp2edEmCdF9SYqpKHUR8iiNdgikLgtP8Zmcj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xUaZkZheUoxiGpVgoDq23agANwk1dLS8my96g6jYYKoUnkXicxSyfGbmXUaosMq7m7rAJPuYDTTz6qaKqVgf3z",
  "key1": "24Uj3HciMCSu9kTpWjYMuwQwwWu4nsu3Nh9sG2FYyik2jTQsiTWteRSNDqMRemiqApWAD9B3ttVT4syRdzHhmBYc",
  "key2": "2Aj5GHM4E4c5Kee59Ctzk47xUYTqMcoCcpS2VBeC18g7yviqq49A3bBYPsk5ozVsxCLJKpEWVY41KVGde9BDgAnP",
  "key3": "58eoEBPWZiZj4uLNsH5konHPDw5Cm21YSmC89yCeaUShcSdTaJPLHwiK827yhbGpgTEzEosF2WcQwtwn6NyZRpN1",
  "key4": "osJqPyJTyXzMeNd1FtXE55TLCo3uvfYnUajwCt17Rt8Xg1mwJTb4QD4sN7t3oFQR9AcK8tYYVKMiigLsZ7M3sTT",
  "key5": "3GQvP12hjWMM6t4G17X2HArtRkqC9tyQWhhciN1pTbEKDUGBDUjUnoVvwTwULKGogCfJCJspF6WzB75sjvbXpuwR",
  "key6": "2bW7zB4y5wSTj4FT2oNQHPGczCeyGtn7RppSRL3mGSx3cgUsRT5D3waqTyjWkoadjkca6TAinVABVFyRrgfgp9XY",
  "key7": "aXy5GXnckDhTpZinuyuLBCixesVZqS17YC7eG6XHRcPs55QDP3qv9vokxG3TBGQwGahE2kYDeVwpbwfuk4Fgy43",
  "key8": "4AiARyoLGL3qkyB39RZipLkNWQQS3F9moHANLQsHZ3AUG3qtrou5hLxWdNZ7p8RhRm3Popsirx7Yd6wDi3qiKGaz",
  "key9": "UUiHS8iEoct8TTgy29eURKNR6bP1xQ3bc4YzALQognnhuoT4j8CtkDUPTbnugJKEbgCBq4C1qars1cva1xxKsFw",
  "key10": "2jDnjXYKpouKWxdMgwrbPZsUxjsUUhfywPsSkXsPJmDLULCJ4vmTRMStCBsr7euiFiZmnfzFh2YEGXNAXEHhRn4o",
  "key11": "626DhxAhFX6oxjPFKG4NNmhgEz4Sdzd8o2iPf6Tu42DyogqUoKjLnMXqggjVJNJCZdxvX6ufgncg7zYYM22nsLKR",
  "key12": "2KHXYpqtXYXXKYVn9EcghDrzv1Hm6acHwanZHNvn95DNjDkXRmQMoQQ44ecainb5dcwS49BivqPehvRiprw9i9Mx",
  "key13": "2UqTQj6JJL9Qf4uuNunSzuXPk4tcsTUVfyEFKbCVjw5kdhtt9LQoyfZAGcVRUgaakRJAABspvGuaAuBnCdXm9N9u",
  "key14": "5nStzKH7DpU5JLSWtQr6GSStRFmyZnLzomiHYto3qAqTnDyDbpGNFYvj197yNaojQ3CC7DgEioYVuzyiBZraCrKA",
  "key15": "426EQhXWtou3hRqqHncQXU6PdQBMpPRGKgPTE6DUc8ajUUNADty9tBsqEGXBbRgih8oaPEigBgcgvekT4C6B5x1x",
  "key16": "2kpkZaYwB8UPciz8zZcmp3Dope5sQ29XmvGkBrq6Sc2xyGtF2cmBmiLANXFbeSmsQ7BG1Fzz6QZd9Zkr4CvE6rqE",
  "key17": "3pJSq1pGVT2ad5TUi1mWd749QU4ZfXtvAhL7PJ22hmdkfMKef8r1JaA1eLkVb3FFfcpoxL6WT48oyGhCuhHMqhA2",
  "key18": "2WytnRq4gn1LoWySchahjJvPDfyAFR2yXroQBTomKYfx1dPktzQo6ffuWeoreMnFsgrL9273cpGVrDrkAPpRVV89",
  "key19": "41hCbWeqXZmzRLUXH2hLGqQ6Egmp7PbZLo8HuTQJNqrvWMvKeZSJHMdEVAhHjYB4ipukUBUdWzrFKPe2siY6526v",
  "key20": "2bUiU6boM5vttsYve71PVr3jBQKftcLQGLSvHLSvjRdeV1GmxuviHpJMjxhFMd2f7N2Z8X2Pc7LAf61vnkTNrcXD",
  "key21": "2caZSTt6ENVt6AffaGjoR2Xw6zoL1PxAHZCBM3AMtiHLdfy75LwJroJMixHeE21RD3Heupe9ejXYaju3TzsDJrFx",
  "key22": "2EW1xRv5ZekMx9YCzH9MDw3LufGoAgt2G8tLccCbVdSXABb8kk2y6fqweNq9EfkAx12TDvZTYTBA55dqjB9HNU4X",
  "key23": "5dek7Ru9M5u4cxiEynuUbQVF2ej691YhftAb4PCMywsBdTDTyyECZPJoVPBro771c2dqaN3jv61Dw29PfyK4K3jR",
  "key24": "mp5NeoGHZKgMNotQPHmZF3GPFz2ej5RwpR7xtMeJ7Zf8rsmDejGsCjUU9JJdzKXbQiapbZKkFmcfyQZgpumYp65",
  "key25": "3TkoLPqjM6UdmQauQhxjRWE9Efp24NzfUYpZCZkJdsDJmJ7peLT6cnLSKuF6HpZ8w87EmQngXbe6SkynKrNgDG4v",
  "key26": "4DwjZhgKEPknhWVXNyqTYjh3KxRQ174pzve2sNfDbzeKFHrJAsFX9s5k4NDfycaVjN3tgrM2YVaBdzSwoXFv2Pn4",
  "key27": "5DvyeqiDwEhFsteSVGigSAKtVsXyiMUxchEsv15BmJnGpC6Sq9t8XJA8DFkVpVBAhc1XSi7nZn5SqV3iMqxPgmWk",
  "key28": "4z773s6JVrUfUTzn85rBSr7zvEuFbgTC34kVPCZ7mrkDuvFcjevj85EUFrZo2Rap3nddFETusDDYkphUCs66keW2",
  "key29": "5Qe1mv8wUpGNpWaF267SPUDffw8v2FRSxtmz5uMz3vX3sg8EfDxum7F4vdnnimnaye4mXSac7xkpJxCLeB1PAcu4",
  "key30": "5Pos1WLmcYtYqBx3jiMuYU4XXkYg1qRzqf13fnVEb14wCBECcbxjXBwE3UZ6srT9Ff4YFSJ3Yiv729HRXiq455nu",
  "key31": "dq9WpThqqEvwsTYSBGKw84PPoZcXtuahX7tcEtKYzWJDsRzzKWFFP3VL99Qifg9YirNNuSfvmkqPSCf4qRkCiTu",
  "key32": "5Y7QMC2bzvsotMxvBgnsnS2yvJ2LoH651oLnwE8bDPchosSKxDKbJT2HC8f7BGkHbDRLXwsgrueAYY1VRBoVRZxP",
  "key33": "vnRomHLBBa7EfNy633pydfkNRYYURfjJbgzwC8wk5ni8zYajPmRpPuqzNfYgzf8cep9v2xc5viEckyntZMpJiBE",
  "key34": "4X9K36EP3vFUCDAGkj28V2mtytAETLfA4hw4qWsYvmHnLKvUaSMZeo5iYmi4hXsruXC315gAPSAWsK42ztm7M7C3",
  "key35": "gGUvsvFrHATsCKYKrQ9wSvgLhKbmsUqTc425WhEEZbxiCZQrG3whTURyQpaXZzCP5VFSjnLhk1ZEu2S989V87KC",
  "key36": "3EvcLCwm9FJoKqCUoLfpkRfhsbNLyyeJenipLLbkfXCttrohByKymyb3PDsYfr21XVucYoKjauVHfzzZedXmMMfe",
  "key37": "5fXNYDUQfDydEwdp1FFRpmjuZ9tHeGs66eYcJbKMF7sWfp8HwuCrbBJ64K1pBmVMZ8fv77djjwKjvuF41dwtzqtb",
  "key38": "3ut7dPQG2sAUCsexFD5s87dS9sUFjDWSsh4Kjik2V31vKMSLndysGpHvT4cm5Z5b1BBt2vkjgnFQNpybkLWuVEmS",
  "key39": "3H5nmWDZd7sD2yPkDN4NRHitFKE73F6CuagsJ6QDKsCw3TTA697Kf8FatAHuFFEB2XhrMoRLhokWCZHBKBDUYSfn"
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
