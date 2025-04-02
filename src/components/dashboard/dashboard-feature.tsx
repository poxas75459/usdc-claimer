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
    "MJxruJaUEe5AvynTrPTwoz3faa1ityCfK1Y6f3sEgtwtYPm8YoJKjtYicC47ny81FN8wDPNkrfDVSxsLu4F1L5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G17j1m32jPoL1KvoB5ZTDC2SSK46bZviRbGxAo2pxuTPpu79FHGrJCG535nMJprafD4eRruKLyaD4FMDiZbut2W",
  "key1": "5GSQsBt9vuU5ZaaNUDYMsHJPTNa6keHjb4RAvaQ4eABe7E4qnQWPeZUWVhpKc52BW74sj6scQk7C6xDk7uDMfMpR",
  "key2": "5ytaKG6cy3oZQf1qByxSMn7H2ZXLnd4WMRuBFrCrdMhH3ERpYTMv2VTPhsD1VVQ4C5yxiSkNW2CiexzrknN95Kue",
  "key3": "4cFxmg2MfR17gsMmgFauMhBix4kXnafUx8gT9gPzUgykSwhPP8ouy9VpA24eA8r5224kYMLK2JjjbB3ASU5oM9PA",
  "key4": "56M5Gwi5GQneVB8LRs5zdCqGVxujvanTo9t1NBACfQp9dGkKnDad5oGekpa9t6E4AkXDUhz5YwZoAyidoWh2gmGg",
  "key5": "4eJzoykXFu6Ssix6HFWngJ1MVqVkQ8EbVQGrkHTL4a84UxQ2cWRS8NiMnBdf8dZpBn45Ax6WJ3GFCe9Mo2DorWB7",
  "key6": "3NWJAwR5rTwFaa5DgeETPuZLG6pXcQVDJeVcAbLrcs44b5ArYZ1aEGY2L8tGAeN1wQV1sC4DCaH3D94KDCHajMuT",
  "key7": "4xGQwJ3LV1orjd8yfBty2AhvN1uBfNoHHt8YXhd9fX1jSNEKbhK5YndnWCqCsTycZFjBAfYZ4ZPQKC544Exempra",
  "key8": "2CkNVUH4fPToBeK7MyPdmodDP2QhanytVwNPLjyUNPtJ6hxdouVBM8Hu3AXkdeUedChAinaGc8PtMSRBmBv7w6U9",
  "key9": "u1oqp27st2VBQqWntoBwroqoBL92gbPSxw2J444DoUut9HPYFTu2EiVz4MFJAbT5Gn3yfYQaLjo1sS1EuJF1Yir",
  "key10": "K187dxxTxX9zDqzd4NM3Cj7QCGCkWQvDNxKKL8LNu5VtdmCVJmGuS7bqmsATQwh5gVcAXYPgw1eaNf2XsDxPAZk",
  "key11": "2SWbH9JWUXY294FothhEVEBHtrEcVMZyc23Hx9GWChjqzdkjZPdNQp4gotRWvbVFyeUV98rCKmeMfXnCcx4kJoTT",
  "key12": "2hbUcvrB1ZzcQiwiMSLS5twz2f2o8FGVdjRaS62L2TjpHby3A4CDi6MoAY48jzGSuzoF9rg5sR5QarMHnjHo8aqU",
  "key13": "63TqcJU2MwzVkEpboLbrwcSA8KhYLHwLGUZuf29Uw3g7uzYsKvj2Cjjgn1UdMniMorV2jKgUJdkz59upeG72C4V1",
  "key14": "5d2GQCzQFz9t2cht1xqc7AYcEqHqJhQQL7EnQe5CVu6vDELmurjG9FP94nbHHysbBgnQZRqNWhc8Rd8AySAY9xuV",
  "key15": "51ofKxaafo9AA7By7VALbykTCiwqgVkaCivMJm2b6ptcQNYQZdFNKGNK9K8F9wUnPYZ9ZZLQh6n1teBJo9577pQJ",
  "key16": "62m7YniZ7FxpUg2CjoSg13yY9G5ww6iVoqahM6AiEwq9QYvPTFT3mU4BWHBcEsKudfn8gFnHnDPMWdPDGxuZnSyV",
  "key17": "3ZNQXQW1t6zmkqA7ZNXY9yXtYrFAjYdSV3E5ZisbuvHMF5SPPQ85pLiM9yeN4V2JLEkb8CeWCaxAAxgwpJsha56F",
  "key18": "5YvgRTGS4j1qU6w2X5PNWZmHL5WZraPTUxoUJytqTENfD5bXitFFVJk4cp78vhCKQMCfiRaB71Z18aqb2QrbShWp",
  "key19": "4SemDyUum1ZKDn6JyPsun7Tvj4roB6VyV2uf7KAehTso3y2u7AW1GLc8BAYTdCKHvFKkfPaUBvmvLrApkzPEoT2v",
  "key20": "3zCvNetLubBtPwvNkMfrc4mHGjtDDeW6DBPzjhE1b3n84Ngz9nn8zoxbkDdCGevPoYc12NeiQ7qPr22SsfxX56xe",
  "key21": "2vvAzBa9H34SmYmH6jrKV5xWeVWRjR5TsX2VstQxHZLEf5J36geFYcPvLzKfGfCffiU45X1fW4gZBbEjYnzLyXgf",
  "key22": "3RQWfvMpfdXzfaT9tUpfMDf45K4RWDyU4uN9gPEugQDneRwpPh9i7rnFpPVg8797U7ZAEDL5Leura67JqNeyUS1o",
  "key23": "3aMcTfJ8kXWhu4aNdUD195YP9LiYEQw9FegoTdv2E3GKdsscy1sDCWrH26pfT66kC5uKFGadutLC9jtaK5reXEww",
  "key24": "5qKVxetYjBScDpC2U5gwC83gNYZD6BHpXLfNB1zJY55s9AmyvjU3Fcs7fcio9BiWMBP673rSdXML3fdPB4x9rt6R",
  "key25": "4kdeV7tgDYyvxeBUbAUZp49pS813TyLZrWJS5N8xaMyvUnaNioUv1tR5TUkdzD1hPKyzggujaswXu881CCoJiMm2",
  "key26": "2QxjZnV7fUzeyt5GAArrxu3oF2pPjfTsNp52AFUspiNN1Nb7AERyxPwbAGnVme7YqdL9dFqhKp6x8CZFcAohFDFu",
  "key27": "4QUGTo6pPcnHdRTmVY6Qj2PLJv8GLa1TdasFKES6F7nX8y5fUDVeBWrQh2gF1DaMdRY5gUx5qatLk3zpKF6Vxroi",
  "key28": "2zjrPEzDL4d6Dxhi6CA8dLnD1EdYcSoXJGgG1QLXxGRgydtwzTtypdNNcF3En6zdDmxfxPqQwi1iCQCbxVwA7zcs",
  "key29": "4udiqGkAs1tsQuFJwAAEuH7a9kcuNUpeeGkiWamwoW4k3ztH8ELj5Zn6s9rzuUzXnhU1LYMzk6PaaYZDZ7iCYt6w",
  "key30": "2yGrB1jBMF5BW7DUeK8AmujM21ZX8gLMCStH7kgJMptNY5khzGUSf7qoGHgdtL2iL8tRNBv3F2V8y7Dqk1nKZtCw",
  "key31": "2aZtVb7jTD5HaYeHHqrU6mHwfskH4w1RJZvXTeucFGjhSy1jpabaQGMeBZq2PuNNbAoDDJmzMppzCzMc9mEBE5Ad"
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
