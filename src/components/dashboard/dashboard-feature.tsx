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
    "4tHTL26gJ6N9tMxiQm6TDF9VXvpmdAUC5enYQ4U1sz39VgSubthHDbh8ppvcJT7qzrMsKFNBZBHU3TniXiNFCgNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jozEFn38Kt4Zhv8ckfVuUBzoigqjkiiAmTQN76NXGSmJHYQiVrMBf5LSGuCG973gEYfKTZXFMPz3pt2tMGCSa25",
  "key1": "66E8hUUDmGaoNo8UKL8AZYGhMrMStYoHixbqScFm131Y6jc3pG8tzDe4HBDdZvAFaxHxpZSEVL6gbGDz8Jv68yrB",
  "key2": "37uThsp5rRbLfiRvyXzrr9xDs31bDQegECbJTktvbnAZHZJLMcJS1iFzEp7UQLMQq9qhProoftjf45d2azKEd6Se",
  "key3": "wPyn8jDzLwTptBcjPG4dU1KdEsirHai2dgeeisA6w5actxBpYSosPrCxNPXDVennbXGeJF6L3VedEasoNBpj11o",
  "key4": "2gxThrWvuif178utbT7TafEw37Y9GzTdyoGbTZmgbVMe3rMZ7yjpx6UjYiYWmp79Zb7bV5bDfxgP674WQZ2LC1ju",
  "key5": "2LQ5dtTKzrCT5WgHwfDTKMoRVk27D47A9kxhb5sjZ2fkJne4u8hx3DNJRQD6u53sE2beUWuELdMHHo3w44zAsVpE",
  "key6": "sZ7GZws3gZn5aEsDmf9czAC4n2LJUWKeadpoj3iksYrnaSMEVgmgP4tCR5NFxzS3HoNFUd3LdRxAVchhiT2n3PH",
  "key7": "uxau6phGAv3zNWQDjUNueqzQCpW1Wh9rApoFF36s7R9MtYTaudYZ1QPdo1VrSnXtytY4V2sxbaeqHSmBvJrokv9",
  "key8": "4xvjpvHvYyge1Pcc6a2zGavfi5Sv9w5p39yVciQbdRErP2mmgodnZ4AzypDoyMpHtwKdZLjziSjcqfp7yG8VCw5Q",
  "key9": "62JTAvKaLkqoZ2wohj5reRav3QRWZ2eRkHpmnzAXZ5zihdozZRjKnzyVWdWpGcVj4gQyECpNj5zn97h8gsNATJpg",
  "key10": "5zNXiCkfqrDQhGb7cokCeQoHPZKxJJbWhXGPfDi9vLKoo7LsMggm9hL5YbN4XsjeN6e57w2pwhALtxbaJASGk3En",
  "key11": "39WBepDNtdUq8uRo8UqkJZuhU1a4NZKwKvoQSiy5PkQV54WuQfZerREW3vk3b8a17zJ551UWAWLENcaoyFUHpZdW",
  "key12": "2jg6s7rGV2QPLmTyosi1wXugLtXT26rKLMUhVha7N8Pti5KUZzLwF7Yzjsfua8b9UywnbGRVdY8oPi763wvGC4g3",
  "key13": "3BgreX7rLJvuScBrDh3g6dMzr4WsBgXVLnz9fBkgKFwVUTG4q5Q9eaordMZBT6UrSBFtMsb8RudRFtxfQ7HytnXU",
  "key14": "65WxSbtVfFgj3MmQxVDY9sDg4j752B2aJyuqmrkywUAfJEJNW3prYhtg6bGUhAKfbrnQA1NS51brtrxdhia5JC1E",
  "key15": "2GU9pwWshRoGg2eZMLrhnQ9nQgcAKHDr47yPhwvi5Nakh4YUijAaNSUFp55CStgJ14bU2iNm9g1hAerfjz9jhxTP",
  "key16": "5KynssiqoUNAPTnsDzi7F9YtB2DorkGqXrds3xCcaKPNBd71nfqCdvHRBLLiz6dBTZdfKt9sAFxwN4jKrrBR16SZ",
  "key17": "2gJKV4QGnt9nUW8Z4AmyAWZNWKYyCj5xBvcQaZmbGdxByZW51pH1cfmk1Z9QDuWRww39YRgUWXyMRywT6cLxsrzE",
  "key18": "5AqiKDYVABNoTSQZnnRC1BFGh2RvA2DUm68AMPijiXb7Fcb8DmGD45B1zcWb7YY1HjSHyNX8nhvgHHpSaajuhZFv",
  "key19": "4Ubs4KuUidKDs6FgEpNe9esReKn8gY47vVodLtcLz2f7sdj21K6k2RUkBPEv6u4ZLmJVAkFuQRaLib6uNaT6XdcK",
  "key20": "21DGtjukGnvXaRGU8uaU4VTG729DzkbjjLFcYDzSToFZ2N7zoJaUTy2cV5fuyXewsd7rL1UuZSZbmBDQE7K6zk38",
  "key21": "p3aN3Ux1XYPepUMfG1Kcrqs1mMdZSMtPgSEhcWjNJfmfatR1wNXfRkeHQbx9FNzpGKHfZtwsJyqsRSW9AfknVaX",
  "key22": "5eD4xtGkVUzaeSGvtra2QrGRucgzK43o2GbBU4zBabPFiXHPJyPSuspqgAXwpRpsdicJDE6y6qBFJ5VSUb5N8CkD",
  "key23": "4GcBdQzWNmWEzK4sGhHtrVscWureLmg4Kx3ekewS3qGczFMyMHoeDSf4waAZdPsTwH6Jpju8QmWVxN2c5o2tZMC",
  "key24": "5dFnCdrbdL2p7i36WTYLt4cFu3oYZDYy2UQhLfBLRNbRE9a1RW3AT7Kuifz6M5BERjnQhdyNsc5AZwEiGSEoWDh7",
  "key25": "MpJG5NMMd1tc1RA6X8N4TCA2xboZxvST8yx3XDvzTgZmr2PFZua8WEig3i48MC82mX58PqZwQeFc8qMGdiJwfba",
  "key26": "YjsKUCeuRABU1659miY9yxX9dZxuX2YwYASmQFy13ZCPio91Gh3Hicz5WCGnWpu64hcm7ErUvUWmBCEjk1Qk3ax",
  "key27": "4FZxw2xVHxmHH8N57rMPKCjQP2Kbj8warVvy8pL4K6c8pMikoYR7qCvt9JJv9g6YiXZWyzv25qEVhjSckmnyECcX",
  "key28": "R4iWzky6fQLZH7cy5Nb1zmKkkSAU1EsZYpZSbXgey23fxnLfYBj1Wr9Bxr3VAdU1a5ivffm7X15BmPpdXDxTXGn",
  "key29": "58AkvESivdngHWYh6udarPtYERiQcwNL1aJuM15rSpMjDTgBGW7VwPo2uJy3kW8s9eGtehtrPYn29ewobNjrbc2h",
  "key30": "3iwtLZYASjEtsi4iUjax4FKSzQAoTFhCzWBuC6Rr7kRkXNvs3JXoK7AQv55AAe3dB5fYVUrVe1gqooes4CMJVQdP",
  "key31": "Bo8Fdwe544iNS74RcWY8Do5J4qdd1Q8w5Q4WDsHR4AhrGJFWPZSmMYRdg8xabE3YQ2ogojiJ4vnkfyB6PcnGLuK",
  "key32": "4fuNnpj5Gqj9fDDRHkZsRhji8VpYWynY1eBBUYQkCG35k5Zd2aJXMeseyfXsKdW3edPEdM6KBobjtqggsmLvosr1",
  "key33": "5tyRb6kfWFGm97WQWEPWaKui4MTUVtNxeWtkgMj7LsA6TWa6FUKqqtpV7mr1cTAvLPfNvXMMz5sUa9KVinTDTE24",
  "key34": "25ZxYrPVJ49p61a6hTfkqAeLA4Hbj3yZSXy73LRDMxw4AxN73efSstgx2ttgx5oWtX4sdMLHVLZAd5qTxyiWTBNJ",
  "key35": "2PTG16zUotjNfvnpHRHQP2TwgFcUsTgsDAc1627Lt8CtRf911eD33VQ6HbeyrUGd3oZYkuLHdhYhvWAP4kMzDe5r",
  "key36": "3rALtUcsk9Ma39vjs1UcN97eVWmnCGtbtChZHXpTeqjM2s4MhJr3jH3dMvGHTsubhfxTXL9DkPucvmsNrAmouYBt",
  "key37": "4y7bmYinZ4cTZ66QBEsGsSeBVbd1acqsiyhVTrscSygzsb3y5kgDPCfSuXvarE8ziHpEU7j4YH2V65AAUgiyZsZE",
  "key38": "3U79fkBcnfbGZVZHJ6Dzoa169nq1xcAE1rtXykpQvhxLAX3JEYFrhocG9CepVB5deGRDbpvdJus7JqvqBrsiGmhS",
  "key39": "3JCqfP4xEMRMEyUHWJ5nr9oC9HxXrnaSH7j4vJZy6SwEnyy7ZB1qtAGUK2DBXWhNJk9WkZLShkswduG47fiCkS5s",
  "key40": "4JmVd1pVpTsZzP7i53wfhQVmcmjD7Dibfv6Ju2nhtZsoMhDLxTgHWw9NasMxRSvbdA9MbUgBwHEaAKYLBovhcHr6",
  "key41": "4RmtivQtSjH7QXagUVWNMqvDz53mCW4JcKvF1L7KtWVVjWtSGFKTUUoGvCidvR3TVzM3TGytRTJSLPSZfvsxUDtS",
  "key42": "5ugEGePAjLtRs5TzwTe8PRuJqsAE94jNVFRAtVDFmRojz7JEdUA78ULChtDuKo1QHsCewkggwyvM1PfqUbBk5kMt",
  "key43": "3D4ArLLshts5QFJ3TP2nwqentHLhdBucyj5UGmQ4Useus5AQp9GAoUc4jEQBTyTUgVBNRZFFCYkW1ty7dJC2nxKu",
  "key44": "37WABr6amDMH8UJSe9MF6Fki7eNexL5eSvaLeAgULgsJD1ud3RCmCc8RzBcpe12xbAJFX7bs8iTETM24cK9rnKZc",
  "key45": "363QwGTXAUCd397D9NvR6MjNEwyKq1FfsSJjC85URRwSXC6d5fj8u9RPew2QM6tBfn7J5xpQD5uk2Fo4vBsGhgts",
  "key46": "3kb1CHFAb9Sy2xomX2nJ6o77KYf2P8jt5djLwH3wsxN4Bs6ZTn3E3w1Tx2jKepkZ3uTN9HtTJHdikzZHPNz9VRnw",
  "key47": "5V7YvnPML2eT1AEUjMqFFqLgLhJRGwi1T9ESmALL7hhTU7pFe4aqDEmbqPdEZWhrNfySsyy69ipwChFg8qEg5YY2",
  "key48": "3gTWhW3Q89BGXFjBifT5qMWDQKCYDen6GQh5mBSDHg2NAhGEFFDzBB4EWe2RJyhfNcQ2dcmLjaWPk53rUKTY9kHM"
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
