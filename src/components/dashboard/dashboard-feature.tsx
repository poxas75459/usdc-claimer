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
    "48TE5rumcgdaNQakcwr6gzmgufLV2TrQZxJRMrmM5JhcVhWHFBQDsEwHzU4n2HLCHrPvpUHhjEDBr27zxJ229C44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wa9PnLT6vbzpnQxxxm2vX9nAbQ4yxewjT6rwt4s9rKCLTeQ4w2XGKBrwSqmcV5Ay6jaDRTuZT1m7dpFzE4TR7pf",
  "key1": "4giRHFfRggaci45oKDAG8eQDQhV1LARSifJFDA7bbMPWxzdmo3voQiV7V5SUst6uWwQTmueMA4TfLTd6R5QydgWR",
  "key2": "4y83nZ9WUyYAyymatHSM7fwRUiuSX3xrEDVD8BnJpM7GUuWKScRtr3CSvhawzDRZveTCfQZzXgxDVKavt74C1kMf",
  "key3": "5V3s3c4qB54xgH3i43QAbLyr8q4AUYuAAvjn3cGdH8uURMNgaBiFGjwtpy9nLhAZhL5E4VxyWNGc7AewApSsS5YU",
  "key4": "NnpRokHNeoD8FNNAv13UAGhy9MQ3scSVuDVAgKi9qA7tfXFiRvT8ZjKTCyfJx23Bxp9PNTDL27zTo5cBxQZVncd",
  "key5": "3SD79TokhpBQGodkTirfw8SauALCXxNM5QVcZrPeXfDiMiKGPmoZbhdEN5ewcbZ8qTTs885Cpher3XsKsmBPxtjN",
  "key6": "3TrDnt8ba4og7vg9q72bZ1UF8DjSG4PCBDDyzy795P6bVnm6eEHZzYx7MhEqVy13r81Ng6ax9dQ79uFSj8eWc7Hv",
  "key7": "4vFhwC988wdxu5pfD5Wnrq9zEf2GUfjLGNB3KsaFHwC1nRTXA45h7nx4aDkmwyZGi3dZqVRrhCrnt1p71xyjUMhS",
  "key8": "FTaZgPZyG4KGyWH7fp7ncBzqryd2onb4gnTB6mbjnStvDmFZJtxoXfAimm5MrK35ySL2h5oD9BMGUvXMs7cPk66",
  "key9": "tYNxLkh4TPyUMQHP3obHja1oUGsVTdLvyYRiiXL63ePYU4PS89rk4pMH38wrQw986TcyZ4hkxbGy7yE11WnCfm2",
  "key10": "9VEwer2zB9xjb9agSMrQBPjP1ft87i5VS6kEdWzYtUvFogbWWMGsZULPE7PjUng6k3BL7Ge693gXyBv6dBhsyzB",
  "key11": "3Cq1ecu2UKwGFweUp1BuauY3J5pekWv2cSwJdPQX2Y7hMPPKjDP4u59csENzhmKGV8vvejQUGRz8kpKN1oqyb672",
  "key12": "7VGU3oJVSTGNhEtpgiHrHARMQMuyb9WduLQqvz8F8VxU5dWg1RDaH1KxLMwDmNNV4at6c83B8K8UNQuxDz8KZfj",
  "key13": "5RYYsqv1UzqXMLdpkeWf6Dm96twc1DCGTg7oMmE45Q35nqYsv4onxh9tggwKgvQVAnZLZuKhhPMkYt1pKP3YBkre",
  "key14": "3PNtAv4NyvqbYvoZKMqp5mprugq8Z24dz8VNK8sDxG2Fa7GZvkcsTWipzEfmYJMYybJ5bq69JR5WDtbMkGwAr416",
  "key15": "9kRk5uRGfERUdGfQDMTBrrLdkh7sFffQ5qij2NES5dAZGk4ZAWjy4VaLbk7a85p7VnPzHVxsgp11ztHKj8St9qP",
  "key16": "4mfw8kfoR1dwqX5EuPJxMv7XMEWLAwUMZKG9UqqwKudefgkTprV4fkiTGER6rb6QeYuYmGFykS7QS3DLYNYqpVrv",
  "key17": "3t7fe5neWGXz5tibdTU25rZZ8WBwSCrWqu2VTsN5EwDtJHX4AZwuNfczqhBWdAfNLnSwQX9tLSqHd93BJQfPEF98",
  "key18": "2XpWGCfcAWRf2dtWgJ1Rmdjz2CrmzoiYQLuEQ9xrQd38mrSwZVJs43kmzRJCn4b6b5dT379BaoMeNhW8n15B3tti",
  "key19": "3trtupe5et4z4VkvCheW5vbmyHm9fkVXWgN2hVPeLcy9FoxUSvwSMFHTE3uNjReSmybq781WW8m61nNMX76StEEg",
  "key20": "2DfiwxgAdV7w1pHMv7FVbaXbHfYwe7XU8Vzd1pku7d5qqXAkp3MZUrC5o3sAxY5GfUNTsv86bRbJq9srhfRMRWGN",
  "key21": "Rao9sB2jvmbUTu1tXv7JS373ErtUwgUxFo5vcniLbc6h12FyVCtwHNXkhZABxJ1sCBwNDSzkAV3Ec9tgNN9SsFz",
  "key22": "2TtFKYNM4rQskJfxk3T1qhGVu6zBM1Nb3qH76w8f9zcaoUrXzxAeYrJsCdiPz21heMHp4YLQ6hqV42nSK9b86zi",
  "key23": "3zVok2rzsYBj8Rv5apZ4aUq1EzHQpyWiYgPHgazCZpmgWnNMs5XNd1imyhuLo1CnSrAYRwd3z5VfrQ7bQHisFnFz",
  "key24": "2iGnHjyLLgZKwP8EjQBSGQvXZA7QtVHVaLQ4i4n61grYn36f5JvVRJTHutiX1BG1qeB32yetG5unRBYDV5PR4v6",
  "key25": "3DSssCqgX7Z5tBewSaqDCnaSHa7snCVhyqoZXKkCSUzg4dDAXsrHVGcf4yppAmSpFPZukKGmDC91Zy2uWMPxtxn1",
  "key26": "dZeG66hahTFATMYf7dQspP84J5WPpkEXKiXKFSZPagXd4DaTEM7Ym4TZkkaCAwA9ZqhnKjrdeT1chEoo4GYB6BV",
  "key27": "4ayVh6CJkRSaqJm1jXbkRZKKdFPMmDgwAh18EhgpqTWobxKR5cVeASGVdN3DZQkqZXfyTstUPUiahjKSrrL5kRQN",
  "key28": "4seQx363evgVLkRfaFpCu1hvSSo2ELtuQ5Fg7evL16nuwr62Wd381ZeTeNPFTantb724v8WFS49yFRDyNDqV2EiV",
  "key29": "42KK8xEVhW7sRcb7FFVuifFpobanfd6aLMrfacr4kzr9ewDVqxXVjwHLc974GiyVM3Y6dmL9F3FujyNxMSyLMJgE"
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
