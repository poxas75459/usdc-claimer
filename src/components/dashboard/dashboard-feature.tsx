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
    "NxjfnyDBv3GTNGBbLGZgN59RkRM7NkXX1Czj4fzusuREgAsd3RTB2YLftarSbX5uT5MHCYaK8wREKLgGgLvzydG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62mWR6pHQ16pb5725ZYCiMZnZiiYPrg5xTnMtUqpsE3XdCiavyeK8THjxDUf6k5QbFruEni3M2g54WCqwXvTVNaW",
  "key1": "46YcnjN6sKf4G5SXiYryTWmTyWepkJ89Kn1LHs8f8AcVUZLZDtZaseaCesD4p5sxyNrgKbbBRFayk4qaPccBVX2v",
  "key2": "2UB4Ahog2bwzjEE1x3Br42scEbfMC43EpztQFvQLGVDj2TkaQms6PRXp9ax241BDfjwDWK6uksA4xzj5PAcNRdwU",
  "key3": "3mukaccMxGFwpYygWxaoqAFuPZ6z8mXJuxW9bAGDi2mZE1AoiY657vDAEP7qWybrpvsftURjPc4zxU63tBNgWTt",
  "key4": "496o2xqemfF6n5ZuEGiVAirc4qjbu3DFPMsuDNJkxJEnC4LienbT214b5QNHzfmrCVSpqM1hBC6P1KjriutAPHT6",
  "key5": "2Dt8U38uPPPRUqLnMQbrx7Z1JUJmX5TL1zM2yTH7fw3gQxurvg98AmxMX5oCKQk3h4zbP88hc9vL5E8CzJyGbuzf",
  "key6": "5aid7KKfeaykapQZsJuNgbexw9dnwk5oLPhogQVsHZ9uk88nEsXcbpFQL4D7Gkvf15crnu89a7aAMsUGtq4RLZ3g",
  "key7": "yixSzFDrUU68czEnufHv3TdfqvkrVNqrvrzhfYAzxUoWYCM3vsUgEnoSHnNvDXUdqKBRFgwp8xw1GDbGqf9pUNu",
  "key8": "ZT7D9BpbQyzgj1FabCxLWNvXt2fYnbUNhcMCRLrctkKXw9WeKEVjVX8CDo47aypdFUdjzBTFLWsmmCdDh8mRaU8",
  "key9": "3bLrW45H4DyJSwces4FTBtiYoybSikRhKAD6Ju5MQYHUhDNbjTQvAQLiwUqugWXFfLdaNAq8YYiDf7zGV2Sj26ve",
  "key10": "5uL1vbJdrbyN2YKcUiTN1VVhU3kJACvYN2kpSxq2U3rQ9CDt9YDYcc6cvMMgjmzFEquyRXCyVM9QdNNk1eJh4zKq",
  "key11": "pemcgDiFiU6N1hZ25ZXW8aoMS3z1zFA2wgmhK79x3fZmXWod3rweeSZD3edgMuPUCuWWZEtt92kFMPAPGfCjmr8",
  "key12": "3ex5mL2ivAN29EfigWKmGbutBkaHmqCdX27NV3fU2ftCnYAUgdwov3SdKzEaECY77Q8nyRFP61BH9XeB6K4FHzXe",
  "key13": "2GtXWLC5ghvSeYA1dbkNo2eukztft6gndtJbE1gez4KR3A1MnfZvrRU7vewDWFZiBi5aMdk7ofromfsZ8WawNktS",
  "key14": "35Nsww4ErAynLgrarGGaYwizBDHy3kFEfTdBuWwaZbguhUVPm4t7wYPi9B6xUMtpu1Ca81toFoSdHt5XArsCqLxq",
  "key15": "43Hy47QRKrupeD7Qr3kQEfSwE1Px3HCZSNXitQWL3F3ZXq77wpZdfMGHqXRJ8KjZKGB2FB9Dx1JfJSTuDLqqEnfq",
  "key16": "4rKLoiLyz36HUZsqVswwUqALR2QsHMZ9bD7CiGNwVCf5zViy9anju7ptsSMiG1SZUnqKbCj3iAf1SpTdNrtC3qdv",
  "key17": "626TPSnGzznKZbJW486Uunhn6QKePAucpke3CfaCB3XVCdNHC7ttiufxLaFGBBEFcvZofBtrEvxCNLyrb9oXf84T",
  "key18": "3wgj6HVRzk8hwy63TLnxbHXX24kdnMCEU61YafVaZE4Mk2R1J3meK4XusTeQAaSEMkSnifRH1zyX63Us4RHJWoyz",
  "key19": "2NsFTzcsLWjKMKjhh7xtWrjANCyUDzMH2C1W8KTG77CmEg9HaMd1F5bphUuPYrfAwe8K7magAN8oKCrzaTWq1FZE",
  "key20": "3FvhMLmjFTCnM1aUvRdte9EiQvncDcnuvf3qQsk7eg5wCZKoHEo5QRgjSWiscqsyrepBmHcyjYZBiWQSrqruwvYH",
  "key21": "4dKhUXHgapw4k48yegNSPMLujPRVfSXa85Lu13nmUtUvDjNdCS4o8BjvMajFj1xXtcZnAwUs1LsUfBiS1dddUDpQ",
  "key22": "4okkfpX1ZXw6W3bbYCDqzRYLuougkQjArqQK9GjDFrLdKGqwr8oXCrgLPGCAuLkNcNR8a44Ar4CbkEUZa6wSsooY",
  "key23": "22gogAhzEv4TFPeEfubR3aqi6qc7e334ZjmtNma81tVBWM8ywmrZUkDFf8G6jkBTQ2cKG2Vor7NPEZxL8GApEqna",
  "key24": "2Q1KFpuusU3go6j19zbV9s9REUqov6afZDFZ1ER499QgQTyWcoug728igMoD2wGixMxzwdMtsb8BS9M5Xx3PkDzb",
  "key25": "2CMpYnPNuTR1n2jHknGSCodBy1drcz3LBj2SumhBGq7sd6cuc1t95ktEeTtb8eRTSeahy3bBCr3EjePQ8mr7hDd2",
  "key26": "2VGm1NfdeieuGGTNAEYqyRW5VLzQkG96VdzShERBWUQXHuu1GKf8crSJAdtB3VL38yAejG4kM2tUHX2kSTXgLkzz",
  "key27": "31gQcatmkHroXEKb6ZZQQN3Xq3CDYw4MyHhwS2rwGYMYdsdnAh7exmWAqNPFUPa3TELa2TdYLxxYw68FWfukBR4x",
  "key28": "66VrxDTSoDaDMrgKwCyxqfvwag1xBeKJc1pf1zdXgbt9z6MQ3h61pPmC527MkxVrWRA5kkcLeVUQJqXFZM867XHF",
  "key29": "2ufVWnQn8nmmT9ZrCmAUYNqN4AB4rQuiT1kFkf9YJRPnshX6JEpEHv488oFTJS5EL6hxTfXFM5T62kFgRKHYat5G",
  "key30": "4DycqC92q4Nsb9nYMRpzjQfMQZZPMv9cFdurzrPS7gxjrwoUCfKBfBxe5qTfAPXdSMVqCSxNUE14ATQHAs7Khm7F",
  "key31": "93okb5jg7x9ng9LYxZGrKNxmEQ3PnLjwSxS8S5RQFv1LbNce8Bz8TN5rgnXK6bZi8JTJrYzDXqaoMTtqg4ouvQc",
  "key32": "fZ78KM9GW5FKf9hmYPTQpF26qNtAAZ5iWKqZ6vQiV6cpqxrBfoa4QbuMHCqNrMSsuQL99WjvxFsn46Ea9jpdRuQ",
  "key33": "3VLf4S8gbC5cjvw8sN9VjQ9sKmJMYzYDk1TfDTu7txeEBH86eKva3mevc6oQ3UVa283wsboSeWNRW8C2adJnJtgC",
  "key34": "227Dx25f4CZyopwmcdonyXmamajBdKbbFu84rFBMk3km4rnpRMv7cWYhvktxWVe7xPDQxbxjWypa5wAV9fkMt9Hb",
  "key35": "3RSFKknw4brNbLhdDCjpZNv16E8fNJWgRbe4nFV9vsMzu3T3zBAcPCcjbU7aPapfLSucstZPvYzqsbuanqr9tzQS",
  "key36": "5vCDnXirpfc11d6k3MtsgYHB7a6X9wycHjy6FwEdAFHJnECbW8g9iP2gN9S1wABqaCZsKGiPHceTkDs98iHHgwdD",
  "key37": "56WesUYD77iiXXnFnF7QeVMuN8qKoBQrqSwXsAeS5Lu1KBn4867B7GeqZPfp1TrA9UXqxtjheqDtawF5w2TieVeZ"
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
