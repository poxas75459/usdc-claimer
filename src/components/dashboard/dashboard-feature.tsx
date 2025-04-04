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
    "35sJ2UVqpyUdGEuNAS4Ux5HjhxDMQjVzZhYodbPbWrSRbTCPAMzqLaunCm2gsiUWM1x3XvTt5THHKfVSyt6Mw4Lw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8VKo1RFYSAjVQiTLL7EuWnPQooWrrKSZESyJdjTi8GPtuquvS8jZymJU1BeQTynmS8DoDAMqQUPRx5xrEvg5VqD",
  "key1": "TxwjVEPKZymHEXqEfNKG6Bboq6ATQL4h5JsdhRcoeUGYyn8ErnPnVrtvbPNsBLyRrttkwgeknkxcYbqgCFTutFc",
  "key2": "2QjaQkqoXHJpkqeySzPSVSiZ4Wi37CZsLMnNzFjyncDCSE5ZAf2dE4jquo4zGvCFawyKb5F6Krc3B8nLWJ4axfw5",
  "key3": "3zv7X1FtvF92jCsMQfRNFdH2Gn9RAKPZyjwV6rG5B4U5fnuSJmwjMzDDzWiqEpZU6bee2UFYSoem5TzDsa6JzvW5",
  "key4": "4XJzEBMRUSwgeVCRJ1aRM4wzfi28SKpjLpi19NGjB2WrKthn1ChK7WtmhKzHHZafirG1TU55ps2GoGsgNZvAJcAt",
  "key5": "394bsFM4etZydN9RYNj6vV2YedTGKPdqtqC47xWLep6sKGx1jvt3VoEKwLWmvEPFU9C15BkiR5X393adkhDYei2s",
  "key6": "5yBNGzx7JoqAwkaPgNzchUgS8gvXR6bnHxHoebaZBP1YXpm1M3YSrfBY5cViCfqQGyfBj3KyfsLvFacAH6pv87TC",
  "key7": "GBx5LR6Zb1fhjKkrxHLv6o8afUQApKUkHi8cF24XfSyCUvUFFMyypPfxSJDKemNMzhHzrv52eK7dvspWHxrmdAR",
  "key8": "4PrWvLKJhFNg4Mxob8e3eRy7HJRH3vFJe3Ji1UhLjcpvXst37b6ENGqNNkaULU2Eag5KqUnMZCDHxzr12YFauWns",
  "key9": "26cs2hBj5sBBBNhqkkrNq6Zk9EiBMLWJH4BQosphQwUGCYrvxp9x56B9srj4qK7SdhmZ6krvP5fJ9fs1MntCvcST",
  "key10": "3Fj4yFk2tUZteRZS3A2SrraPFNNT3qxTzDTtTwEWhjya4Kjr9SCVGqbwyDRK3RuuwgiXc4eB9s3bhSwqoWFqEt4K",
  "key11": "4U4HDZKSRyVbDb3qQkb2F7HsZQPtMxbBqc7h1q1gtXosNBDb5UgZf6PKaLq6aX2ipeBFP1ZkzHUDQRsoEtr1MaGx",
  "key12": "HRHb9bDeeLcjxC2hAFjardRur6Zqp1roEmUG51mj21esb3Ctyu61k3SDwTY48DqCaXBJpdcCtcmzRkAQ6GG8UAg",
  "key13": "2bm4SVem3wGKQHFsXavpYrRXpf5b5MpApLVU5rJj4vMwWZ1h3G8Cfnbk5DMJdAQyQuPj2wtUU9bsUF68HmqwKiZ8",
  "key14": "5RoGibocmXTikqBjbqeVRcC2Hp7QPqKCQ7nnveyEQBGWqjv6dK2CCfKc7BtaAcckK9Z28Bcc7jUKQEZztwXcAuyR",
  "key15": "3UA9DCfyENDowgpgoER4H5GSzi3wmp9s4pu3LLVs4aoN6LAQ8BZhBAvDR3mvvHH6yVitt4DkVSGEWmZ3h6rJ3792",
  "key16": "2mcgxdfuMKjaSC9dqPD12hBVLGoNnn14Esy726jZKTnwcTfpURvxyC9493EiBbAsjxLk98UEVuk8cvYBciZnDT8z",
  "key17": "45pvnNZL9FB6qjZbEbLLMUFqv4jHJZLsBbdhH3SpVAwX7kTaTpi69dArCkdHgcETyxdFJ74VNC3SeSzatGy3zJ2T",
  "key18": "2ohrgvs1rommzRuNTxJvjEFsHnVX1NkxuqsWd1eqynQnDLMZoVpqdWxX7gnKwXU69oPGFWp21nSJurwjsBibQBgJ",
  "key19": "2zSsrBQAyTc4MbSc9v5RVa2qP5He4N1RecHzoQBdZRftwfCkHdvBb5NmCDgfjgkeJnRpgGV2wZTHa3NBjo31U7Rr",
  "key20": "2GqRbyMShCYdUSgsDiTM6rJAk7diTDqzJsi4boEofMBa4PuTy6eppBLTjkNDVQXt9X5Q3dSonfBXM8A1sfWjy1ht",
  "key21": "5RSQoxHZw2P8745fFP2aWerKTwwzzTG2avtqxcCusZA5AF4wSL3aAGXUHcHFJ5RQm3GF4WGwrRfKHxBtPivesNrB",
  "key22": "5udq1mVMV2Sy1YgyvuUrBcih9QTT94VDut7TLYZJiBUo9yfuVnPCY4LGCxLchftZHPMc32W1G1uUHgEDpdBRUXkF",
  "key23": "5QVRZaLeDo5ZGpS854HWMCX2iPgizYy7kCvHrBzoJEYnXPa5cRgYLa6cAfYCRrMzrB69BKsvhNPDn9Qk5dUGhjxH",
  "key24": "23Rhm2rGscdxHLpavidmvJQ4K8n7DewzrbsHducp7jKBWdUXMTMqsY9ALMPAbB5MaXrwEgjYJsqhxqu6pEmHT18z",
  "key25": "Wui8nsuZBq6dMYxZnSqeZwfLhm75cVDLEtsHzoff5akSxcytCS1S3X9ePYTzUSye9t4e4e2dXYgqCLnpmX1Ecj2",
  "key26": "64XUd617qnWdmek3HHe2db3fSn3W8RwawRZv75YkssuZFsZsTYMP4yjmuCt8TxX3Mohf8Kb7fmJ9QSP4ZG7gCzoE",
  "key27": "4FX4gUNPatFxteD9ri3EzovPs4Dk87GCad2LkTaUYmh2ZaSaodFkKYj6C9dAd6AhfbX61x4hrY2fCiQnBV88aQTb",
  "key28": "5Mqqmqjck6grVW5YUvfaFzMp1CPWDBHboPR5SC5UPYquX9vyd9GPNQiAsZeioH3WVp4cZbhGe5wpQj4da2QZ7CP4",
  "key29": "3YcJead9XZuZ4knbL6sUUTK34e913PWAFztxGbgybXbLo9pVsNacNUYBH6KxNhLxoDJNF1pjMVbEdk7G1PDgeCoR",
  "key30": "39MF2ipAyQbWVmLALE3XYXSJDxUuS9CngmGmVqvC2nVxoR1j43m8mrU1DpssHScef4BSe4rm5zNPsDte26mwitp9",
  "key31": "48cK7bAjih68EnNHzxxabvtp31GguCkmubgQBSeQAs5DHWR3cqDrh3bqiCp6HcthcD4hoJJp5BeJVdtMVnEUUUgD",
  "key32": "555QHvCxubbAJ5tHL1bqfvkNsGhSEvou5N38R78xU8btCFGaHqxrPHWDtjZY67W6qRAjpmn2y5teLJw2naQVvinQ"
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
