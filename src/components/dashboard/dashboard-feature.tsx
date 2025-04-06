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
    "4sefrqPXQLt7RCCUpW6njgk8qJ7wp9FUs8gAGfL1kzNXoUt6Bd4p5McDk3ixGru4QWpjweYd8e7q9YeK8FBCcCXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HWgz96MvHHqZwce3Uf5znam7PBytcsUq5rQhfRvMvk9GYsKRmAQ9gHfFw87LnpXm91YnuxeM768cTUHhodh5K8o",
  "key1": "5HCaHXWue4ZqFcPy7UuSMcrdho7Fs95XzoVC1WWdvADAwh6WR6LT4ixPj2zCgAFhbc3gmgVABv1MibWbbeS3RwgA",
  "key2": "mjywRBYZypkgeRNA4MLbh9wzUzE2ptUvuQwb1WRTYUX8qdxso1cc9prApNZBpsHrchzt3ChxYCHwkSruqvd9tib",
  "key3": "4ZomLKyad8j8XLWGHA1LUHK18nog1FVZS8thVPqgsJgMeoVscwE88ebJECD32E4izayYerraZvunYRDikQD8FC8Y",
  "key4": "2BiGms4Gf5U3PTDWVwH6CKYxwqqyuCU26xaSuAkyYzpNsXrUR5bMgkHrfixce8x4uqMb4h6mhjL5RjSnAAthVFaW",
  "key5": "3tPc28yvAjGBNVRvLRQ7zYUZKnUCdGeoUkAD1gqUrAKrYKLcxmNsJ373vm1Hduc16gwx12MMSimQg9ksEPjd2dxb",
  "key6": "49E5xSLKxHXaqnGnvDJH6yCSb2zcdCZgxS9HaAXXXndzmQz1HSvgKq3RYV7D2zksL4zcvNHMDyf18ieVDYnCWNut",
  "key7": "TcQFxkL9Jezx6D4gq789fFBC2GQg5AwKnqY3L2Kv4tFZGtBE7a4vLCVnV5bQ3rcXiiZXEfQj6wXqcrktM77euBj",
  "key8": "3vxRFQ7wHyt8wjP9SWG8qLskR1PjD9M2gwaseDfCPw2Jw2C5NXUE6hUH1KP1mitVreMPU5d2cmqRVZZSXcp7G592",
  "key9": "4XzceVPPVvwv3mJdQ6ay8XThQziC1uuxoYN9vFBWHiF4n5irh2pmmBFAKuk2rDYBf7eMuNYNnvruxhsDLPiHepPi",
  "key10": "3gavd9vV2yLCxqPZ17sbjguZSNap2ojgB2MxqoK48sBFdKiPGF9kqHMRoFW454y7HjWaLRH1Yhuv1BKx8nkhQ4tP",
  "key11": "4w81xqf7yA5gWJ7TCfRHfARvrU9iGFRLJbCrcW4qnpmYd5stsA1rVnkxq9jRXdeVctq54pCxHq4hmbtBak8YU8Vu",
  "key12": "5YFGegwUQ1NfhhyzG124y4U4dWF9U3oxi8fD6Aao3tN3iWB4sFVrSBuRZepM8noa9ap2pGs2Teetfnp9RHJEYQ4e",
  "key13": "4vtBtZzPGD9sQXThtzstRxrx6tt1vLQE6qDGPJuZeYt2UZ1GYdepzNtLgyYi3uYcWkHuTBZ5eWFbJHHLdHeCB6tN",
  "key14": "4rdpLV4ZECcfp8R8wfsD2LL2aaApjTofChkGisNJs6wVZKbzeTvyPEgFWtgUfRaKGWgW9Wh4NkAwtPXBrju1zx4w",
  "key15": "2SyvVXijNThwRcWkxCwu9M56nDr17QhrzyqmxBNQ11LqLUnF9Up6UXpRhM3wE1YZHbcQrycYYNGX2NKqy5ZVQyck",
  "key16": "5SJMAcKwH2i5fWEfgZeZHhDf5okQDgTDVfbDZsEcEELZBcTvBA8NhDBn9GSs2zQZUYpQ1zmHRzDCGYJxh4X5x3aL",
  "key17": "9kUDDBdeWvMDpUzkeNBzpF8TQP3Nk6UHEDqRmnVE4HvZ8YvbsfHCSm7bmNzYyFYh8vtGJavLhNJJ36okhfygZ8T",
  "key18": "1KeS2Geq2MRG4DQkDiyj7LQWRiQ497mQ4nXptBPMnguBX28DbYBZktemSgvUeUUo2FtzFZXmLha1UhNn527uy51",
  "key19": "4Gp2ZzmjAcSBTvcA3UzrXvE7kjHy4wRb7TMnadtrX2xEanhoHDREDRFp26q3FwdzQUh5K3AmU4L9aLSBK2kD8qdC",
  "key20": "2yatckdbB1mm1prbQ3QwVj9R79ajocWqFvDRQZAD1epgH4NPTNJyoPSPKGnQc249pRqhNnnUCesKQrmy7rXrnSY1",
  "key21": "2b2jt5AdEc9eNy1WCJSsmZu9gaZoX6wAr6PCiKRqf37gXz1gsF67kYaxb6SwY3DepZXUUyEjgafiPNEouKRuhhgW",
  "key22": "3uFM7RydqFXkEBMu49JVz3eYq2ebjkoNjD13nAaaAdtJ3HGdiXWGGUPqDzeyGzRZN7qCi4fKjMRxbGCye88uDcxg",
  "key23": "5H58Gcso6Yb5U3R39waf2tkhjSZkBFjBSGiTbR65bVPnZx3hDi8rqC8u2FwKL6haQnNuUM256ojudqLBKcbcvPa1",
  "key24": "4UK8Gb7WGtC6bcuLC2hd5ST5xYpv9MrhdQLw1p2aUJqTXwA5mbjM9tjqUnK1NTtDuNVPfieqMPjnd1HHZrvVZdmZ",
  "key25": "jzdAuh9B8w5mXNPgtyoydxTeA3iMr4bTUtSpBNrLSuTxAaSK8QJ1vgSPkxGwBDVb6zSGdcaYco1CwF39LWeAVRH",
  "key26": "4K6UTgfxxEMgQCmZwGFddNi8L4o5F75NqvQxeRNpwWnq53KFuiYzgTvf3q5JKKyTvYwANyjtnqbqCXkYuzqYLBjp",
  "key27": "3Q9Ut2Vm5zWeu12KvdQSMmDTXBDGt6b6RMKvZkKZmg4ybERSXTsmaBZwce7bi2hYc6jyghmFTRR4GKKRS278nDbe",
  "key28": "5Ma4xEr4mqtKPHNkt6ookXLsYX4e4ryhFL4dpDv8uEfGLuM8zh3jrHMpAm6RigBnhCTo2GkKV6Y48XgpBQUJ4ydD",
  "key29": "5AhnAsQ6hDaA9no2tS6XnigxTdaE57zrThvQWpJZcn4KamPbn1ttejpinj316JcUsc4dcE9ChyUMaV9qXzP9fwaF",
  "key30": "pwRxEqoFDukWKDW7zmMSKE7ebFpnDpGPt9F26Fcs9CjMFoWh7rQEuq1qpmw3oTSKtEE8thAFWiDzbpXdNaRBk7h",
  "key31": "5Xqv4s6moDbCEDVEGbcDMF99zqq7GBxdr49EyEUGKeYc3M2db2FCgqe48FDZmXntSxUVeA6JNiwGhL5Nq7NSTWG1",
  "key32": "63ifMYJXAgteGXvnwQLwizECFZ7xt7zRvPFiPoCdAj5upoESWDKQ5YLPyQY4Mu2aXsW4hoWPcARz6niYHv57nNJw",
  "key33": "3vBMcFhkLsr5Ry2E4WdrsFEQc4Hy3oriTAXX5aPTMq9cFSiGML6PbpbTv4tiK9KvwTByeYfJhFseF1ze3g37JLjw",
  "key34": "4KkYtveYdeU1shqXfYG2N3Wir8EJ5tbvYi6dCPHLLSfNPbYZjXrVjt1ktK7wGLaCJtvj4FjQSg5PK7bcWMwB4vk9",
  "key35": "5RHfLn57rxMJaB98ZFXywFBajbprNRtZErcV4mo8Bmu26m2GmGmeghhn9hqT1EbMRNNrPjcEC9zCcPTjYGUg1UQv",
  "key36": "4cmBxyefxNGFfvUPYKx5fgtJ35FGGyMvcXzLwjBdhLQaUMubjHigHgMyPA2v9sDj4s9GWDtCh6A5D9FAAL9yvg8g",
  "key37": "3fVYbAgJzEdmjNYtHCvP7UWGaQhwUYstsB3DgkRtTEcj4HboDBekRtJLmSPA8gPvbH2CCqCcgrb6c8USimdmFHWw",
  "key38": "WEy5VDQyLuz8xtzX8KsQv7iBt591nhQ8odrBjzYVro5YKXTyiENhSiQjzpcXQ3YAtDFa2ZSoDDdSks4RHDHekvV",
  "key39": "5rXDkSurxZke5xooej1nB2NCo2hL4vvbcjjbEDRd7eD7bwJXhXtrDkcDzRsjUEpu5mkXv3hwCcVVXDLwyd8y7n4i",
  "key40": "4XDYfDASoHMb6rKRPgYy1DsH3XHVBaMrP7Jk7dgcZPhXzjRiLMNPDdtgEDwUhC69GEQPkHTV9RwHWBBt2aLPBEjF",
  "key41": "5P2Z3uMxi29szUutNrcNw7Ri2bXiF2aFcb29ZSjD8LSvT9sQSTrXHxRzWUvMzVEudmD1u8p7GAg3cv5JzQhfuZoG",
  "key42": "2viHg7f1cYk9zrNUcDXQE94ZKAaeL8fKkiCdhScpV6sZFnfZrjAgRCGZKMgjnfjf8JcQjwBckAAdL43AtEW4J1Kq",
  "key43": "3Gd7KVDfbKSCWezrFChmCWYydohJBBrGmAcNTEMgrrWvaG75nwMZeWaRr4kUvG6rvJsoiqVw46As53CRpReYh7Ge"
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
