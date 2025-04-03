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
    "2re6xT5SSgGdTRTrt17trcPZEBregL2kJ6kVfED2dm7jnvtbyoS8YYvpEVF4DPsA9MghzkJKUBeqxu4BoMwcJ5k2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WJzMowSKK5Px7HjfT2enk1SZRsfVnionRjpYqZBZKJDkhfNFLcHZ3ftktHreZzg75RSsJmpaV6sR3E2G6qWFE5G",
  "key1": "2xBizUx8NcauCQZjPJ2JPufeeS8GfWVc1GQue65HB3da4PB83VWuqEaC5VsQmBydSSiPZRV5Qit3y7kHEDHQm6J8",
  "key2": "3jjGYuWNa9iqBmEn8nT8PocAVNTTpU3iFRwKXaDeXCVh3kTg11MwMqmM9uz156NzXFvn5XrUGdwRd8zZ6yGDHczZ",
  "key3": "4akmMeZtMuVbCciotVsKiMNyVQcnTbPxK8Dyy7mySsc2zQXkcgFcXi25Sr9Dj892mze3pfYbFs9deJczq6JBsEv6",
  "key4": "4z2UG8MV9DpxjEoMm3RJbhbMqgXDdn9GsxEzFQmTmqvoPFukkbnzo9AADgbWAAD3G1imiqKUYs4hS9hxSD9R3qZ5",
  "key5": "48AQ9u6K3pcK6hifBnDr3JPDY5z7w6XZBmqS73aYpyuEq1FeTEzHz3zjoWkp134817HDCt34SuTpnQH5dvX9mWti",
  "key6": "4CgFw84j4kdbWV33kmBe7ac8ENc9Lgfvt8GJQUEWDPPnQ7FAumTWzten24Pe9Z8dtpuU1E2HufiTdtdn7vY9VDgF",
  "key7": "4Qj3AwZvyPasamKarQ5euDyg9zFysbmokMPs4nWSt9j8v8wsEL5tRWoqEt2YPETe1qdWir41AsZ2DFkjYzwEPHyj",
  "key8": "22cjR8MeiCB3BEj7YnBfRZYPoKan687pQWFZrBit9kqf5Byga2VSkeYYaYEquQ8woX8e11nTxRKj3i7kAbWe183d",
  "key9": "3t6bJXLgXvfVZQGQ8q2mXE5zrDzDAaKduYSjasVGwJvQBzx27UEDxKiH36ydc9Luvaav3KpjdiVAvopsspL4eQoK",
  "key10": "3zC61MjthRVkUDn1gjc3tZtPN2mz6Dnw1NA2fJAY1fD2PDje3sLV83vK8gNAKvV5K2kbYUcWAqrorudVmj8nLhoh",
  "key11": "3NsUfhYKDAzLsqR29nswznVvNW1cFKW3MjqP6gzGtbo1ZvRvcnf4SJxpJGRQJLoetTFZQ8gxRYpGGG19QX66hwDg",
  "key12": "62Ds3bsnYHAM7m9nFpCNsp5fSe2S9jUM6TsyQeQywdgWvwhDUR3TauMm6RLTEeT1m2uoCgaEU4tbxvyxk5P5EiT2",
  "key13": "3WXxUjjT23ZTuUpbt8FrRpDcFDpLy7eEnACJiompQFbFx4ZsbSdW6vDKmfgueMvGJtMrJdjC2uGWJsnfEVkHKJQP",
  "key14": "bTHhNkq2h4RnKds8AVbQRuS73KMqGzibBVY8U8dJ9URNTnmixTP8Bq6KFDh7d3kk72Smx9dNBCZKeD4TRoCiKCR",
  "key15": "3nUdbL1e2wwyUdQch6yNF9EQCWNSKCoJ4fzrS3Rp2qppCzYc4VAsBMm3dUXnujTw7ZVC6QFfHyMxEGy6hZpB5GPj",
  "key16": "4EMHYPV2YLypzYKaZEnY669gF9AonJLA4RPJ9ES4JqSYBLhmZTCfWVBtxZjqk5kWb6eP4acSyfseuD8vxsiFYZg9",
  "key17": "3t5VYPBjpjJ6VLSBzvv8fEwaASB5GW34BmRrszJTt3YKvQCSxeHeNZ9wWKHQhxAohXFHn8qujKwTCS55w2t4XvhS",
  "key18": "5QiZiciG1JZnCgYxGi54PjtNDfonfgPSbxv8BVZaBfAxAiyWTKkdAc6w555pRBMZPABb4taJVnQqQvgZgjqjZqnB",
  "key19": "51RJMZ7eiMs9kL9tDAreTBBtP9jnVPF5ap6jF6hDYAMMpYzn7BnjixoPaAF8LySr2jLk3EQb4ssAgvEUKokiR4pa",
  "key20": "KjvELunSHyDUVi1afrKxqpzQK61x1two4t5kmZCZYSknrQVRQ54t5tfbHgowvLxFT8EPNCYjQVD6XYy1rd36AZB",
  "key21": "4E9wPpa8U3D8XLw7YmsnLQxGTGEvftMy1Bg5k9P2obsKRy6GtMaQjonoBQYAAuzXaBzCvwxxFbHaoA5GE1D4XvSy",
  "key22": "3cTH6kutt7FYiUwdSL8epLJLxs6jZTM8RVxnwybZ1Exx56LSwHFQkbLTZPyxVPAy3q6vURJ7Laz2s7VjALYqoi1A",
  "key23": "3vyV7uidGP2P6xExbFccNGSXXmJ1bFc3CNaMcx8UtyNFTkmQbmCytf6Thw5BRmFPuj488pEY2xDiLGpMZQyNdjh6",
  "key24": "4g5WuK8c95Gw2YGmmgStX4HpXsh71NrPpGTyacNrVtKjzWs2q6Civw6WQPjEqiojFvDBGqfz1M3dC15iCrMvNWiC",
  "key25": "4qZWLXTampBRWnpmWDGVBsbReaufYrjv9gEjaGocNqQbjrMPCpRhwbjseDvYn7HjEoZbwke6kpHTzTohcByLXzxV",
  "key26": "22oveYL5MSrR71kLJkyELCo5sMLDnqYXFM6Kue3aJpwAsSxN1Rz4JmFgGyHTYRuoqZ65bi9oBCt4DVGxGADQQpCn",
  "key27": "e8ArUSke7PQJUGxxSSM2KJwkRT15XZJ5mCx2cxCiukNWBMY9WQd3U2uNKaoTMGsmtJvGxoRyS17pAadxn1RAkpP",
  "key28": "4JJkmha1NBwJroqj5N4Ki6wKTYwwaHE7aYNUuK1Buecdb7RKPSb8WNuCaxdfPKjJW41XqHAMepM78PxWFm4s6hYX"
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
