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
    "2K8pFuKNL2R2UjvVnrdyYhpQ84FHLUr7DGH38SKZ65jJgyToXnMQwCJbNSNqPkfecFVX3mYgdhqHGTFLZ2XFoPND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BhiMM8UoKL21cZmddsttoaz6PfJLCkjrToWnCxnFSBTiFJzA8f1Zob8gaDhiRvDk1aWeTDf3iTNeJeRaoQesPgW",
  "key1": "4ARLKtFwSZMzsFSQBtbHT5ByoVRZKSMR4yrWvhZK1GEaRkBoUWrgA9XVX8gXXdMXQZncVLDNznFfwdtGAnnHyFkk",
  "key2": "2LpFNzdA2CWMe3PMScbNp6phse4H7BqBp8wfkYHAxUCexftF9FYgyqffDDCcXbCq4fAP34GuDyhwb94GGLqzhYcK",
  "key3": "5DvSFNJDSz37qpK1NkgxXoNJBD8DNzT1jyt5Vi3RJyyWCp11MS1tpHurT7A7ZrK2qoqUimdhDWi17EMgQmsE8pvn",
  "key4": "3twSav4EU1fydpvPzVJXqbFywXSCCAapN8GwkosukK3tjVjRWSj3Rv5QTNSgfohMBmgi1HYwAKZ3u5w8s5P8PD1r",
  "key5": "4ZBfXrnYhxLoRL6BS53jCRigypy6mSrp6HFpd9aarbwZkTBCes7iu81ihNaZSmQvo2Mm4eR3abueCPChn7u3Q1j4",
  "key6": "3yiJrWZBqHEWmDKABZtGeWYNcKrfYbV1DR9ZcVY8yrdL3THgrjgMBQEFbmGzpPSds9xY925hA1yVK8PWRbnCMQao",
  "key7": "wB3NM1EdFQyQCHnf23ezfZdU69LToF1SMjrBbipuVzfygyj36wfaz4s52KkVsJtf2y3kj9FxpLGwify7oPEi4dj",
  "key8": "3nNc9GYp3VkatojUZZ8fMAkqxfwaf7Rgj6HUwPXbPTsuTPrCenffK5KXkT36FrJysh5q8orMH1ZA5rAF3iSbwThx",
  "key9": "2vGsLx7tM5QdizbZkp8NcwQnXtoceqYmTbT6xWK4f248HPqnxqXqsGEKb9fTi54JRHHgGSEzmA6oQEM9tLoWo9Dd",
  "key10": "4Rxq5oPGwNDcMrsYy3zYNESAiQTYZWtU8tP4SHpTJrsELVh1j5TDTLugaAWfsJjiMnkf1fGrHXC6icgw8uv8D8s7",
  "key11": "5fLeUbUv84KTFd6eWE8Xzf6Hqajd6zYbfktSSfa54LsaiRjsnP8MN8GMySEZsdoreM1xdVRz6TxK2ARtgDtPSDKQ",
  "key12": "3nRP25weyvLmyu4wGov9rg6VeoXfRJ1ZY8mudQNd7yKgborSFWMz6SHhrobLXg8eEdYouwUZb3thN8AfjH9uLLMq",
  "key13": "2ujroGg6fi5bdaN5T1af6WUnfLNRpLKcwPsoL6Qjz2TarG5yLWy61S7f2H4g9D9rUWFVTMXhwCb5fXNxJLdKa51q",
  "key14": "4mAGiMpRSPwaX6CDiMsBmqh3wuDuGrNHxFeB5Mb3h2yWUr3kCRrEurK75fANrkyHLXGMvjUQEqaNGWYGGfKqcRT8",
  "key15": "5wnmeF7FDgoHquoc2wgQSy9X4kPy8jHbmtX8RVmqckdKq2ThY4A3ohhTuKGh1kgMmRTY9T7BNuVGF5sLW8yboSsU",
  "key16": "3FCPgBHeWhJHqqgHwpVPiA3PDQhrhiFt55tucpNHiCasbjQW2uvz2yW94rUWtiPwwiy7etU6P7bbb9CXv4N1Nh2a",
  "key17": "3yATjTxChPTa1TZpKqGR5wHAXXD6AxpNhqnVp13XcZn1zrbW24niJFbXg2geRBKpncB1ZWiPdVuWaP3PcaXXDBcq",
  "key18": "223zTrZJmQzXXWAAWgPPePqET7rvX2xTRdyCbbUDa888JRZm1nbmpF8DbfS3yYEn8J2G31468axVJbKx8davYfja",
  "key19": "cLJuqHLk8VarAythiywfhGb9bW2rYfwnh9EJSzUAYvJgSTiXwo35UXdHQF8sMkRauJNBkTDMpwmBDmYs72FTAW9",
  "key20": "AcwCActzgowb6126Q1tpUuka4rMBqs4js8NPczzgPBM8do3kpfzZiYfiqAK1e2ATMfXQjMkM8zciuxBzYjdMjVe",
  "key21": "3PzaGJXZRRrLCZ5yvd14ZX1JrHPCLrJ63rBxw58pKgLYUj8vys6dDBo7PJS2oirBBD9RkNdJLnuy92VBpJMonSsH",
  "key22": "4CybHjnQ1eSYi5dk1u7jDVVd75k8CjdaR4nmSnJYvj3nN4UstqTfR3YypcF9mnUKgECZgty64uDRF6bD8aBpWPa",
  "key23": "5onZHsk76Prvybn7qPtmcwmZRskgUXNN7daeFCHbEVVjP85gLVB23fL7xKUCNWCPBwPKg53ioY7ope7iUXKdSkXv",
  "key24": "4HqjHqJwCkoSn5vaaW3UqTcEd7Q1G3Q5M5LCYzMedpeR18fvj7VU3BUwmGfRDTVMc8p6sVfY31Ymems7yCUHabXu",
  "key25": "3N6Z71jJobKP7WwGD2kVAEyLsaRDc7E1B3iHjwvnbU9o55HUyxYcxA2Q7VxU4giB3ABVWheDs4syyCXGsGDLG3Ng",
  "key26": "5Pg3kTB8EHUdcZQyPSuLpqjh2LyKJxqmRFzTf4kaoGHCXXwPbx5m9zWrRTA1F4xJHaWWwDtCT1iQZLV591ZthWHS",
  "key27": "2wiMgUkfFu6V6cjuTLuDXsHp7HiXbarXFBUHAzha9GJXVbXDDrNcmjHdPaqu4rCXpHBjExXn6toUgiAa4NXaQisr",
  "key28": "2iR2yPyRJWro3qYG3A9N2HMgiXHs6qsvF58acumJDDaPCmG8seBFzUbTaaGft9xCmuAHpMYVMDPWWgYabh37xWUD"
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
