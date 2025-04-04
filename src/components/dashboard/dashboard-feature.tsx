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
    "3b35GtxstabZRdm37PA2fbsQtS7UxCBR4JMDrUjZBeaEDCwdTSZnVZWtZibGLH2PTPpXTFpHjgKLBJguirziBGC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1C3wZx3LULwr1jtN3oRyHtGNAjSF6sxYbzNRLe3p9xmYauzpLba6pytF74YmckjF4c7zpNEBNB5hUxmUayor7dc",
  "key1": "uP7xKPwz32cThPhuP2wDFsajVYNHKwA8nhgfqTMnifLFPq2AwcZnGtyX6qozJNZddDDdUsSWv2dJH76n5zF2yy8",
  "key2": "462YA3yzt68VzkBvD2sUujMxWga3mywWmJefhZXCyTKNVUZAxNXgBVd6cTbDDQieDtxdKuiRjb15LiuFbqnbMZFn",
  "key3": "4sZ1cyLDAH1Lp2nkw5H5T2dMnPAWHHW7XgtCkzMfSkJNsHCFM4GSNMd97pRnRaYaWGew2UHMy7kCTNMmDKtLDvom",
  "key4": "3E9gLQGEar2WRSRcQptCAgc1RGEbf3qhGPvSZqAkth99taZcBkmHg3Mfg61m1MEDv1s8zrKqWAHS2ndKwxbg4BPJ",
  "key5": "4DKbE22azAbCu12vXqjYTNUzWQSSL98pDHQEomPxtisZoqce26iKkJCYJhqGwE5ZKBG6EgnFuYJza5Pp7VdHbLwu",
  "key6": "3Gs4X8nALGX16GkrK7DrgNx9X2GaZJcX4tcYQKNiwumtomShjgH59Q6HBzgYC1WHstZGF97F97KKUm2icWNCFJat",
  "key7": "Fwu4KdGATCLH27ebBT3rUEVz1X9ox6AHbPQkHmQqS7K2a3Zm4ZpDyP4rTjZ5cVuSHwgbcJpkfHR37yHKqXFEusU",
  "key8": "4gZFoq7DCwrRMgkZsqYfTBawYdVijqqJNsztwaavzxDxN6MojagbGFkX1ArRM34Zfq6QMSFNQY4xk936xnvK2owb",
  "key9": "4eL9zKQztoZv3knqjtyZk7RiWMLqd9nyR2NzdNDN2g25iWB4GvtvkDmkuudkzFFZbJmhCCXN3swdQWUimFVgisNh",
  "key10": "3XXftujWimPp8u4kyn6oUBcrvdWUehgmmQGBteDDWMddPvLWRq7yNPEjwVPDhNviSWnoo24nPcoTtSoSd94gBTpP",
  "key11": "3QaDDQGwAGThaN52TrwLyAs3MAVRQ3kek9DyeSYxorgEVv9hQEFUrmQhnibn1d3HweNqgrvKDjha7SBnd7AGeRhW",
  "key12": "5YURnnAK7NGHDLD1zrThDDXdMz3PSaDG2c6NXNJARHdCLekYgFPeSw7J7dUpwfUUXw3n8zGdNnHbo2TzetEEXJTW",
  "key13": "3RwnNezotABhc5MEPyXgRgP43X4yTBRsxiGgA9AwXeQJGkH4TGbFDpa6w84Sut9ZyBZN8fWsiZntixxxwjMvJD9L",
  "key14": "4zAzJjaMh8EB2QHBnCTFcrGQYwgSKKPYnRq2AtGrdFmJjv4ysbGmdyFSoUDmsHSeBbLwHqtM6YdHjxScaLDqkb7g",
  "key15": "3fT9WgMBwhDgoR7qdYNiMpoAEJHtyKgJhq85iAne2Vg97kidzAAe7hKdH2nBo9S17jTCN2Ny8JP4ua5WK7VPZYXz",
  "key16": "qEvSuauHXgwkh58bqnypuGRPRVTogtTMh5HU4KpNd2jNJD9YM3br6GWFeBRniLQCoPANinp1NxjVBPVjRGh8PLW",
  "key17": "3aRkSCEHb2DcC8DSCqxHHcLowbYwfqXoUZ8Zs4gPWw9RN6GG9ukKyXC9pqsHqp5SYDND2h2VuWCS7hyna8L6ELT5",
  "key18": "5HHUJdgLrdJ7hoku9sdtWFAo4FWN6xABUCzGqT1iTvQk6tCGBbxcBh1yhPvK2VHFhuS89vgs68SEoTWEHD2m3E8p",
  "key19": "51ZNuWdPWwz3wHPTbcgMXi7VJAbadoNsUTZubMSfFikHBLkBE16nnSAe5QYYwMhWRzj6hSx1q2Egta7wn4gQrGTJ",
  "key20": "55CafvaY9n6Qa2JrKz7qYXfR64B1ZSn8DZjUpVsuMTzw8RJRB5SgwfDFuL1VQYB2M4ctm2DYLfgspXpUKkvYeiJb",
  "key21": "57hk7FKTneBVyE6FjpTfEwLD6wdQUVueyASjeda3e9WihxQPsLAqbYDPCFQcBufThNnbiutVPn1ovMRKUJ7mETCN",
  "key22": "59hje3AVjGAWT2V64Hvz3KnLCGjAnvKvnjRuxpjRcyQSkSYPToSq9EVUu8wcKax5HyapQajQDGymWN3RkUkNSSjH",
  "key23": "47cFkQpK6gHHNJaFhKUmH6V1nzoED1z8thgcNjYSidxvg2X8SX9Pkw5dXFF5P1J68oG2CF1VpBivxJRtmdwrehjg",
  "key24": "4WqTVLRXniyriWB3hcVXYEjVifqZacAGG2V8o9EEMb3n36na7pNrWN5v8U2wo7ZeZ9NubinwWbq7jKmGFRoW81CZ",
  "key25": "3tkUd5A7Zv836dANVYv8epiBJYakzYitUbgV1xAnWWzBR8J1m6NK3MjgbUo8m99RBmuBmTPmH2oJSov8FeLegLCU",
  "key26": "43Nfb2ZA9oo9TC57VeyJzaDBGib6jPShh44FUjiEke7dMazsFRdKp4oG7YZMJ3XB5Zojat19KJRFuhnSXrfksCZa",
  "key27": "4Mus4u4Ren1ZhwUg7aA4eGvPzG2JTQNPf75ym3gRU5R8aEniuyRDXs5UNFTn8FgLLCM18GpLHayGeS4qhLzd2ifk",
  "key28": "3W4r72jA4jVUEPG2pZcukrtpKeNtir2aBPawXSrZvWHc9Yn9YAbzAvPGZGLTcxAjaU5Afo5kNaVDGEP6uZ13Bguz",
  "key29": "32vZPzeSHmr1mUBkV66N9FDf1Xi6Hjji8A7Nnaq2EC8MNBCfhQAU2131aTyo2UmU4trsaV1omCbW2neUgdHRs27k",
  "key30": "KvGzCVaxsjNkNQqmLj3PdwmVVJCVVcdYbETxf9NxBmkKbSBUpBY7dq7Xkef5Ax8bjb6avPkoeYQ5py24Dm5NYff",
  "key31": "3Vg27p2cWttQdR5cV5gxvGG7Nn2rMyLnKYBFEpqUuQVQUPqh6SytHpPdBpSNR64gTaSXtN9ECMtz5JcAquqgfK7o",
  "key32": "646wPLMhiwYhKUbJq4WzQALRmqeYmwx1DHxVfqufUgtpg4JxGehAyah8pnxGzjqnk7xphnppJAG1WR3zoX2mGuyP",
  "key33": "4orbtnFkKSV8Miz7skHiLoyEL9C847it6aY62t8Q33SHGg31EdUga2ms8vqGypWNPBDVt9zesc5EyrpJozpFFXz7",
  "key34": "W9JjnJDG3xmpapSrnDjmcjGmgnZHeeFjPYhwoq64cRzUjqHybGoFSPdaYxyMDiYmsAEYqUNcj473PRqWwVq67iY",
  "key35": "xNK5hS7FFaAXpnjvZijr5Kyg8s9vQKKAeU5av9BKEN45HDqPfdJseRwYbJXcKvM9LcoKEgfndrEzjA4UeQ5H7YF",
  "key36": "28Fr8mAsi9jSknFEYGdHrWurWmbKYp7KgBa6N9xZYR2WEcBMssBeHyPeMc6K1msEzKtyaKi8xKr5P9w3M45uDfGQ",
  "key37": "4QohWVb1hzo2sdeeD8o8GHNWAQHbWBMa1AHhF3UaAiqMZJ9PgG47kJNN8hiLHYNe4f8ePDem1qtbqjZozxe6VLsq",
  "key38": "zhR5q7qiQms1uZDEkw35oAyJ3qr3gehpHSoYm49trZGjakXEEpnW7zFAa9rfsozt5vy3nMPJFYykGNoxFvhyKA4"
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
