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
    "4bowZ3qDt5XJMTAnjqn9mchRbtJFCTnsAJK77BSByKTDcNW5LheQd5ecTCcFTotszNw5SBh4kQ8smRZsiojGkaHD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RL9cUamjy2KrGJQ2Sz6DNNpV1qHgn6jeB47AuTD2PmLWetqPBDL6e4kW5zJpfhYSasS7JYnxtPMRtXRGcqQVxum",
  "key1": "QVR8juPtDEBuCHmXFrpkQeBcew2psUWp7j8rge4xB8MLFTK6otqketzQQqZofgHrjq67PmDv6PxU6Efab4pRZdw",
  "key2": "49bv39udrDyHahb8tgRMMjHnJPyztu3qm2Q8FF5fj841Byq4MuZdNwPuSeB6jtnHfbhjaTQQAHbuZQsNxyacEWND",
  "key3": "MdLAPyyu8WJbip99EMAWQJ2kBXtqCbe88HYzoZN3knTJXXSyvnFNfMeQkqdacAY8atRDNYYBw23rNX7PgeqpB5Y",
  "key4": "3ME11xLTQWGvPtBCAvs9Pav6NApzPhuqrHiYLjcT358XnvpuX872TTZse4vw1kmoYaDxNY3FbyBWUT7FvQP2tFxW",
  "key5": "5HKrGPePv7oPBTuUHKsQVqC3dM5q7fkMxE4vgLqY8ysHVLXvTXyEmjxRGtcgmSnXnxyiESDJV2FqE8QCPLEfMgm4",
  "key6": "3usU8iUNeQdGZdXDFD84noSRgMYy8kd6JZThzZMFa2r1fkVtVZNGXh5VdmvhurBHRqizSCQWoKtTy7e1vEnGsCQW",
  "key7": "3fDdNK2BrqPkYGdeYFjMAdaoWGJNRxFv4cBGunESKbmmoXkUbd6vM6pFKSXVYn5fi4Dnh6HZyxPg2JWCB6twUQ92",
  "key8": "3xSm1BQYaBE3pBcc1zPqVJbKYST4atxMteAQ45QpRrjJm7f3F2bbKZfisatzZhNitT4e7a4PdzSw9s5oTz7BzAAb",
  "key9": "52QsfUYJEb4MhRkinpG3NQb6qAbf1JbcVJmVThHyuGgVe76746kpGUukUyVH7C68HM588wApRu2nzkMeat3S5rnt",
  "key10": "53jGa1MApvFiV69bBAZ73PV9UWbLMMjj4srQSPA1YHjHxC9tecvZJSNtzZg3VcPfHZ2oG5CPuv24eDC962aGN86K",
  "key11": "3ibyvj2DUUfYj7FG4ybdd9tghfbs6456wxRZ2Z5cDrkuQs5sGiECbo9yBckRZma34GwWwpFyAZMqhwDRFYihji8G",
  "key12": "65cEaQE7WeofCYMJfRxGRmgXfSYwWbkgLU9emojfuU8diLj8dhsrYZepfeYr7MD3i2XYrUFzMQokbwczNUMMgm9L",
  "key13": "4pnRXAL8C11xNcBrAbPgcsyHjcEDRjKJfXxgUK6sSAyayjisz1q5u3f136MDWzvYLWuqu7JuQsTE2Zqh8QsTgogf",
  "key14": "3EYkKJLZFhNqcEwP5uErGVijEqZ6Hb1RdM4wBb1hzgbeExcSZEhYLqgqmmHC2kiAfgWUUQqKf74mWYd4nzN38yZw",
  "key15": "nm5taXtNCvmaMmvyNS1EjPvjebCrj8qUZfbfXvsgcpvFZ8jje5SomM6mhdiRjqNuJSBukh9KrHDr1Fms3622G1P",
  "key16": "5W3Y13sE73iKEnSFcu1yTKkojWsKwbh9m8YTx55EsknHxq2bv5eo6SAWKyENx9vHq1TtAsBY9gUEvFKsD342ReQE",
  "key17": "3aBkaRZrdf35JwnyQRh6THZdZvmxggYTyNbjwb9GjmGCNmR9skbVxM3Ec5BEVosQHzLaQFXX5dqxC8qpsE1bt7Fs",
  "key18": "2tbVTkaLcHhkhaixR4T8RXQw2bZEc8kA14f7gDC93VFruqMdpPUqhg9Ku59MGW9FCFpWtFXuZauQr9rP2XJPsh8N",
  "key19": "22SPaRh9ZUDVvAjya5Hik2y5tTfujyb5iqMkpYvPpJaDDbP1BGoqCt28MuudnYhKmD5TBqAf3t6qtLND6qQTYVHK",
  "key20": "2J3FwKLHrSJQfvpsswDm95ETBkxQfPLPaYAvyU5zny3yhTdedD1WKDAMoAt3a2Zir8bGLEiVcjmHVVJG5cRHJHcS",
  "key21": "2bxEYznRgEThcjF5q3GbZfehbeBPJwNR4WNNAinWTMdkhtb8WgQ7Qqh34sRQRsZLNeJXt3LooU7tPfAxNoEdWh3o",
  "key22": "3vJE8osUSjgFmyte43yvSCXGyXHxiSr7RaZ8A96gGCPcFy1oHbSng3uq1HSdPJRYwuU9KL43QqSZomKineAZN9xM",
  "key23": "56QPtW7CvJQaUobkgCaKREZwpfuJgwH2DwQTWwRyBiupxFQUgaH84tXCsFkDvKoAuiyxXKTPLA4b1Q6gvrpTrp4D",
  "key24": "37JnBiHWv8X7drhw4T7Rc6giNfmhLvZTybJkosJDDcjWSHi6SsAxFASufzab6jSUzbRRCqfTapH8uCRKUXy4rU3C",
  "key25": "53LYmhEdLnQJ3P9LzDR6K54px4Mc95FgHX7cWnLJgYaWM6L6vRLcS9vvH5Jwcn3Fqwweri7pNErwmd1de5N7BykP",
  "key26": "3eaB3Gs4YsVtNaMcS2uUbaJ6eDWmGo3KFqQ5hyH562wD8v4y2fG5A72iS22NrSKXdaQXMCh6jJXAnPRX2UH3mZkd",
  "key27": "4qrpXDWodiVfQq8BHBbKvwxqWrNnC9Ha6mwi5HZVmj3NEd8xE4XxKEUAoftGbKv3BfQYdr2ocdSfizfrwicFuufG",
  "key28": "2r7gXxvcdUpYZvCXvKQU6GCAZ2fH1Rr2StZLvSZruQQiFC91zzKaaHAW1bf6PhsKnLTTmf898Y2aUL2UuB4Kuw3R",
  "key29": "5XjMbRUscaUcPecREiERNa8xtarVE1gkGQ97KkmCsLe3KyDsHvDEfSdT2xFho1chLVugk1vWckvrk6bsPkJXGHuA",
  "key30": "3wyoW2tbTsTYWaFpn9SpQHkdFCxao9FMVwxCTXfs2cS4G2ryE12PCgusKFMcexeJvzD6vzfPS9Ug5uGzDE4V63PJ"
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
