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
    "4VW3nJVGuK4FcB2fEK8Hm4FyRFaGtBfdgGzLvFHnKcHKQBnLH6ppm75K3MwuQceRRsVEhuj6VFp7p1hcEtPuQVpj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ft7KerXiifont3aziebgpfPrxHnzCgMt7ZzvwPCFryyq7x7t6KSxVH1pPNrdpZUt6A28eyaeJTKjkDjUhy5YZcr",
  "key1": "h3xUMR7mpHBbA3PHSnkgePhgcQxpJTuvp8L29gmErP5y8fs1UDLntAH93PHMBFnSuRmTcN8xn3RkduVb3EqPCQG",
  "key2": "NC1dfcBZ1JC1K2G3Mte4u4gxvqE2c31Y8RAJfH7iaZJhX3xB3Wqs63gd6vWPme2G6i2jQhPtipD62cadCRPdGxd",
  "key3": "5UQuPBMz1LGQmVgY9gBitmUdTRrvShiGVDPPGnFQnNym65QLyi1erqh1NAxZJGCmA6BitpshrChPVFxZFAnkbzSB",
  "key4": "3oQnGxh6nTE55dtpvwmBYxxiqSw1LSjikkzgr9KmZwrwrBo4nqrH1fwsx1iL6mJJr9wzY9mpmS3HMS4PtcHko9aq",
  "key5": "fgpztW1tsbn4Y4sxD1nxCB9ENsxdaTCBobTz8bXca2yyUX2NsYV7ftXEfSkk6Q1FaGFFRg4jNp93kq8xJdiYjLE",
  "key6": "3XojyEWxuvrivvkoT3L3fk8ia2HdoX9YBL8NG1Drfbdr5oJBtcV331AnKE886g4ZJA6P8BbZkEBYySCeZZFTWoC6",
  "key7": "2AzwFMCwM21oVkt4BAwQMYiW2Wzi9o5txSZsSDiqC4sG5tEoTG6Vr9KdSunLioduiA5UkY1pDzD3weHUmceDWyfp",
  "key8": "VbdGZhsorv5zzdAb5hvSv5LgF9Um34ZpfpxAefq9u2qA1YsnHk7GkZS78sgMLnhYW3War8a2U9jyMYX9fcSboii",
  "key9": "62cPsL2wLKkGbDBLag1SivMVnbWWePqXbHPSKFQwnAcQt7ovLWYYKFWzFobb66nTnDmbPRsF3qXmtUk9tX726776",
  "key10": "nt6GmMshtWJhj42iHK2JuXkZEJoXoHRT1cAvsiV7rKon8dZefXVuPZkFxdsD9H5wgK4R2vkTp7wTk1WVuS78Ubi",
  "key11": "2iZzb2PpUrpQJgbPHAjaK7kKnXAAxovGZhFpAB9C2aAcVRQ1RRXrBo9kUfaDtf9TnUztVprcY3tQbHm5oK2YMYLr",
  "key12": "3z2oSzMUx1jo6x5LrcUzjFF3NU9j3sCvzw5Zt4ygceQwtXEmonYHmSvPZL7d9uoemtxEj1ZfkGdkiUDHyA4qtnJn",
  "key13": "36ziQ4qR2XKbg9x4mA4R9EE6QjE3vo2cZLHz1QKLTQ1jzdyk9u8BTveis6Qx4THKz3oohuLBmxxpnvtUXsV5oZkp",
  "key14": "3rQ2NnbV9kFkFAMCXBfh26NHT6bTynUzrnAq1KviPMxJvpLiLcvm2GNDj4fopjs83atAeEmCBjTysPyHambM6npb",
  "key15": "46N4qrf55fKXvq7ah7HXYRyRfWbs5BSyVyPz7MxN42jaq9H8qnCYBqxsb3b3aMV8Qjxw63fntdHz5cwhaWe4EcRK",
  "key16": "52UC36Re15qY9K4r4X5b4kLCTPw9roJxWhf5SW8xdteptfKCgFVfyHxdfcMourzPfw7GCERB3nMbhZcREtvHByrK",
  "key17": "27G5m3YaDwT88Dip49uumEPtszdbTHTr6VboJzLXwwFDZTMrkUoVsSdxHA1bKghDSC3hXsBMZJvzwkx6MEbcmvCj",
  "key18": "22cuz4ZbTTMvd6LLzqsKiAmmTWReD6aoGz2NNrjuwfDBbB5EXbbyLxfmbXP8Y1D2m6ZZVTB8QJPE93XsZs6yx78w",
  "key19": "55tRCbUoQ1u7XFY6RPHTDufioBYMjbj3hc31vpZcVaxKRAymjFueWKASwrRC4gzvy5upcfYPYeqhD31PrNxyFNEa",
  "key20": "67cyJkwNfznrmL35khA9KtLMH42vXihGSTeNSiNyT9s3i8yKR6AnAo8pW6anTCu5xRrwKFawdSazK7B3Da4nz8wB",
  "key21": "4dMRWvsG8rxmxi79WrdkzGATPceN92Q8Rh1gJ9ZAv7CHNR7yhsRFtSA1TiDCX3voz2bQFveFY7vJQkjLP2rx66cA",
  "key22": "3geKNWWGE1DvAsQzJhDtrqXzapGapZKUpkLyUx2KJ1GqvBWDvAmbj7wEtaDeMjpBrGa5fCgNknheganEMZLpP6Ab",
  "key23": "4DxjvbEk5UJFT9PjekKfhJyb3YSiCa3nQTfm2UnKhndopAvVFSch4v3vC5uuBCBqHtkzsR1e9dTW22tzqdpbyWsN",
  "key24": "2VEsYbY9UiypeptRq77PcRioy1C4RBML9CzSumtiJt1PpzwUFXtu8EZ75BpzfcHkuFYBcDMeMUYUNGbr1utFJjWm",
  "key25": "2Uvog2daFazSCzggCd2VNMViKuBJai2ZuSJV27keD3zRsh3hhcR71K5njS1edgzoHQmLckZJW3YDLXmh8bxAmQR8",
  "key26": "2JpiMirDem4VzFojPKacEF1RsgwhayBFVa8z1YdFbDCsF5T7q5VjuSB3jAquDQao5jqjCLP7gaGA6ev7xAE1RaQn",
  "key27": "5ULkyT6N4TwsEZThnXszs6BW7eErbHdY9bteZdNYFi3XkjMqzPZwBucijviy1HMazi8YPTy3THa1PctQJ2DvpHmQ",
  "key28": "5RGw65AbaQatDyxB9HeWZJFRKahsqVs7H1kRMNEiAXECBFFkXbHBYGgVuZrigvc6yStNKhzELdrBfwbokSkJJWwt",
  "key29": "6tKdLropKi1GkDVFBMirfCyeSrLk98v2JppVUb5NYD8nH11dhRLbXy9qdfT9PX8oxrZcfFi4wkBm6UdmMGRSQjm",
  "key30": "3a2HMR8A1ZPXw9CHAVYAParbmcYVibhjGaQewPK6T2AN8QmdjwSX1vZBEoszc43ACZtBpevWkooVwAnipCRbh36F",
  "key31": "gLxvCGNJfotkcSTEpLTL2Gi4kQ432PCah2mSa53Cwu1yMH9XRe1ocd4QmpFzULK5tRnNNRAXDy9GMkX6XX659P9",
  "key32": "2BpfGQsHfsSESYr9qxprsw3BEVYM8SuuEcGo5CF3MvFgmp81S3f5xdMRDhC4C6GRC9rupev3m25yMkTmHmRr8Dne",
  "key33": "53oddxSWomHZ452x6QFmewuAeXhFJbWdYDJysSxUatkhcV9PR9aatJR1xUjJiraW5VSsswKTW31dBSecbvVbeeqk",
  "key34": "5n4jX4QL79SLra738YFCokgHMYxRVRQN2zUJVEh3XSF8bve61NV6CaBjtKzHPZd5D4WDSfujfNxAqG1tNGGTsNrq",
  "key35": "5uf4G4HaDEJdeesF2X8hAK18CU8hsdUu96EtxifXn7mm3NNLgvkKMLxBRsRwgFJqyX3JVTvEXwzfY9fyw75N2CbC",
  "key36": "5sfnDfvYJj5fyqGcJj4LAmoMf3ykTK5Pe4BxBaWHyaH3Kj1SJLoJpUSVQZYvcji2EQQnvEoMFo3omzTj5KGhsNSd",
  "key37": "4daNmaUyeb2eDJguGa2zYCVD6wxpbmedpefK2PEwd4G2mH94PWUpUKQr5jZXFjGp4E7VbJmqJL4QSzuSSDMtGuHv",
  "key38": "4dD93rZug48HEjSfMnsPyxmCJyTNwhL7C9AEEbzaTJXsga5oP3xbgadW6imscY7ykTXBACNctomHsrVbUYWYJ8MP",
  "key39": "4RzmJJo6b4ZxvenYHPUvaNpAYqpKerJJURCzxiwrwQg5SC5RJu7r8PAKcvdK5cJDeCBomJqz9BjfMvKvsQnhYwnL",
  "key40": "4FT9gGzU2wVmCqw7CLcFsCt1HiuYHpSp3uwY2J7xSmRYktRd8tqRnTNHWMPzFyKXXxuYrsj6Xzsp4yQbNsdGEihZ"
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
