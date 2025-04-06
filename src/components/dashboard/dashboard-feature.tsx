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
    "APYuLCMHJNhTyBxyRr8h5UqnVpsX6nnXaCjFukwftzDPteifJCRgT6rHBT6hUe1FC79zAbVy9Fe4DkzrkNaEGaM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yi57mTdoPTb1DzJ53PcjiWdN3UV2QUEzDiFZSKqKTsY8VY5LWET3AYMzqxJ8HkmJcafHRrWSav1JMQLbUzB1Z55",
  "key1": "4V3ZzpSQ8onCNT8osuk5K9cPwu6sfPPJLEguyAJCz9Zt7oeEpNs27C8D5aae3dPcx1R99pqwuEStJsjZyEVRwiEz",
  "key2": "5EqX4Ms3XNU3C5Hiu2xzQj2mhw2wnytyukrJETJLD3yTaQApwJD7XfEf1P29WKBfXzSJfe7duhF1kpZwvva2Fsc6",
  "key3": "4X2yLTRSfkvWEHwtqoXRdZDL4F4YDDesmZtgJzTkNN4Z6BSDPJLSa3br4b6q5cVdymfvjjhSmjusP9BLxF5LDR18",
  "key4": "3RDzc91ekoPN3PsTy47oFdN8PLJVgdJjnJzuNwA9wiBkk2kPJJ889saw5eTVTHWbc1s2GPpupvchAXQSvrM6T5u1",
  "key5": "5egpYskXAJmiPN85CLmdWmpZRJYVVkhvA9YL2PWiGuXsLbo8uxopkMuCnmkpa2o8G4LbmKBj5RZ8sbFQtQvVKe3C",
  "key6": "4U96PNB4S3MYVPHz3ECvkNYEUzQ7T699wv3cQKoL3PyLxG3cKFvTAj9vVyE2wKSoek5VNZdMuKS8dHFC2zTiouzz",
  "key7": "332rUYFg3XQtemRUdHvQbaCrGmGnbTXoxd3RqPcRpXknmbTtoWwqfEJ98cCmPQ7asqSb7W9WWosPrUQWSZ3h8utD",
  "key8": "5ezvWxKKcBaarHc3C2WSwbn3HLJHF7xvnfPAuu3kYvkU4kBdbs6mwFCEUCDrBvBWM4ZU6Vo2z46tzxKKhPPRx2vJ",
  "key9": "3GcnAt898zvRKNn395oYaCJCryWjjkv5h6VQYxy3zKNP79VTe54GokkbjmcW5SsSuDcSjCQDhjpuWWixsRKXTn6R",
  "key10": "2GZLzz9jL6hhSA5o6Tseu6xzEpPgZvCcUSaTstwedKHpfSmCfZkLWgW1jJSKxBNw2K8UwKAzKx4dmbYu8SmrHRHy",
  "key11": "3uBFzi529HCDUMdiqstiXGobs3q3ataqBnYRtbXbKZE9tPYRhrZriKKrX95vx9TB5zKEyDdAsRdjsRanyidAkuRY",
  "key12": "WHhQ8jYjnev8y5ifcqS17nGLL5i6F5CCaBLicMuK8DTHvFbGdMwzKnqydP4GWU2Nh3uDDkJqeWMFUjaZA7RqyUv",
  "key13": "4wgk9Vz235kkFNUGzmZsNAMLd5Nw2PsfAM6AXNf7uwJ9baMZHzBCaqqdE1pMC5Uiiz7vZ4sLqFAzsoB2tokfDois",
  "key14": "5BKJ3ZtoHBvE4W6KFrx2APaDFXF4nFUXJcxHpr3qJnTpM9WT6veBAgMY6C8DDMQrUjwU9sLn7PH32LQqM32x6J9W",
  "key15": "2vo5aMfsWXCQhKi6WNHKbp3qHVD7q8iQZQkPqSM3jsUTpi6hJ1Bc89JC2hL26f2V19cEcf8B5yVEpPFcXixdu7tS",
  "key16": "4xDw965zmCKZ1sjpq55qvra7bqWSdJ8Jr6e3GVxyZ2xFcPzQg7ujExrYP5Uvx9FkMkztM4D8t9mH2rsRsc2QmENX",
  "key17": "dkv2YnYxd297yTjDpZhrz7TitrDSKkCWVkcCm7Ccq36zx4AP6NtRxeGQh4Uta7jJLJGwmYH3sQSrvDeBZ3yMHTx",
  "key18": "5bT2uZFnCJhdJz9y9RqJ9x84t7nL5MUwkiEPDthjfUGP5ec9c9hGGcXZk3xRHgNDkqnZwePQEPF8gUcnR49bjs1C",
  "key19": "2WNCksTG97Y6V2cNNTpa7PWLpgeVLCkNV373FGPLUKjT4ZUoGXNwsRU5UDxGGrJBVcwHhUk9kncs2YhBu4ACn3U6",
  "key20": "3QrZeAbyemf7tVmjbzVu77UfxwAfWsuEVFC8KaWJWFsza4NxUZ8J9GyHfPYjSrU1ANPcec4PgVXdCzvuzFV82VHU",
  "key21": "HTfCdAg8empDkHtenrNGmHNVyitXCyrZUxzbo7hcrTh6s3ozJ9zGphRji96wJb2XbvGqmoaqYdKDfTnVVE4yuQq",
  "key22": "951sUrL8hE353PRNXzWy99HEBPYAesWdTYtJ24trQTFSyhQ5VjJxAjHQgQW7rYPJxJUUPkrkfRJjGB5jz5yeP56",
  "key23": "LTtjXvndzQF9GCHXtCUzVw8iHtJdf62HAHvSZhHmnJB9WrQejdh7LXyyxpPe3nLwU566MP1L4S545VvYKXcCzHA",
  "key24": "2Czt8tcowkKoTzBmzhAx8z9xWq3A5Bs1T8LAmNsauS2jJzWMsSDL3C4zh5zFMLXvEUx5YngnNiWqViFN6mHghisU",
  "key25": "41pJNR9WGR8zmBTbNhgrWkign1mAhuPF8dEt3KvkDeriya4BUGx16VMYa8qGVnxisKLmawEzmf1RcBrZvyEcEknK",
  "key26": "2cCP9k5ybTRS1whHteoCWPn43m73bfMmeAoDqC3cdBUD8DdEYMfcgSr2aS4W6TScnYgiaPgWcaTTGBscg6agSbrw",
  "key27": "5hLfmqk8Vzf8FDYArmQk8xxfM2KW2kkg7SuTU3XCaVtRgDf4HjPS93HBSeH9htJLKaHvYYR4G8TQ9T33Uj7Z9FsK",
  "key28": "23L8btL1s2wKsAhwJWFN3MRvDnohbeEtSNJtrq7pavQ2SmRUNzSms99E4XCz55xJkwmdW2xS2s1UGuRoDbTLWgZK"
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
