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
    "3KojbQyaZosYQBXDT5L5ELNjEpCNJkPfvUXGkYiH37Er7fcnA2y9fF9k89vuzZk3kGt1nEa22be4yCjqvcFsUKsQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X6XtmHkTDjnP3PnhkebgcZ2k9fhrdRHXM12ZXWjucVA9v35oLcUhJoWe6DVqrohkjGVqZhuGJKbxE3UnzDWKbg8",
  "key1": "51fUH5xyvHaJpF4xv8KErcPCL2Rzq39R9HWPx8m58S15nDAbZmofg9dctBLKtp3Vo7yWfk8SKeJXCDvHsvU4CJPG",
  "key2": "2REuwC5h7t52mNXoQm5A83ygHwJR2cWefQYBmi453Re52TAmgidUvx5orxR1RDei92t1Xu7N1vYaYfpRthXwP6qi",
  "key3": "47r79LsQHSSqkpJa7mDAb9dT7qH4CRXJYgNH9QvZUNzdJuEwPCjQ9oUVukjNseje2zZuPMwS1fqDfhiWiXP8Gas",
  "key4": "3pAppwyQrLqVSjB9a5BSwVspVA7X4ypcnWXm6CVnwKaJrPwTD7tZoUeriq2oTv3GQG9daHx9xsDZfUff6w8N1UTD",
  "key5": "5jMpDSBb9m93dFw47qLNBfENyM6EAuzoDejKQsEWxCVRKdh6VCu9bXQmjMtDve9u5Wc1GbPsxHB5DJxwXtdjbbsm",
  "key6": "2MXjXMTerJBkj2qdzFpGWcYau8RjZLZRPAFRw7rSAY3cUqBumeD79E74eEfHbyYMHVXcsAPv6VQ2e76vdzwhP6qA",
  "key7": "8MWTYaPnKf2r4HpCuv5PXZidtV7kZpYLfAqsg99pnTunuYBZX31DwLhJNNLX5h4XMJjs5A4TaSgdg8pqrEggzVN",
  "key8": "4oiYDY55qFjSqkvfFsFaMrsEpsm56B5xV3EznTLhdmGdFmDroBCfUPXvry48PM64DCZR1DZD5UydGVzVSVyPnzco",
  "key9": "5QJvBzzLgmXXbQdcrEqR7SBofYaTspbpWtR9sdLAZoGYjHGJTYpZqe5QbaWZBAmgYfJySFHMiHECV5YanSB8LYbQ",
  "key10": "2hAVoQTsUkDvCBNn7CeTx8MRHz7TXPC4j8RQ2EoSrZxE9vbNuWZwodpsZ2isTebaXmPesH1jG9cWQbqbUxZDPHDE",
  "key11": "2as6zQfzWNkieTsEYFV1JymfmpcvDrNtsJ11iToDKuhM1PoySsYa8TfZkg9y1DMacBLYrUkTka9tkRQqiWC48CbU",
  "key12": "5HSJqo1pfAz94rCrn82c2axFwVoV3nJ9BZcrRE9ShM2RYJ8AwzRf5ji3aZA9L74VimtkF4MGmHSyK2VSw7Gx2uW1",
  "key13": "52fEmZChoMFz4i6BCJ5YTJEsus1RhjyQjLoeJP7asEXnjL2TmfHwwKZTsEkp6CuxSRBstYSQmBtLh25HmGkbr1kx",
  "key14": "4Zexm5XfBzXv3wKB2d1SLigAHD7JTkHPvWATjogAbKWzVKurBZKpHKVRz77EMzptXhtWW5BWCKWcMDWKrVi4ZXuR",
  "key15": "8HANopV4hTk4oBExTKuhaCGtNqL6e3sy9mabuZCSm3eUtfhar7QfMiuoT8R9PfQDu8p3R7V9Efz4PiSW4dkL6mw",
  "key16": "5fD9GvJqguLfZd3hMYV5cdgQUaFoKryXqZWL5yQESGa7vQbPGU13kcD2BicQhUim1dJvNvyuE48oeYjKneEEVRKC",
  "key17": "4vvecjD8UHBq3L81ES1XH2owzUnjGSXidFaRJ2ujZzfQEGgvW5QfJz85bi32ToyMYDHPkoG2vx5n1o82m81uQfas",
  "key18": "FTtabEK2SyuvAREh2u7kTn2t1CV6i8ADzsn8BQsaKxJCkhmJaMzLAhL4DohcFNHKJ8Mig9Fi4zQJ6o7ikcLzNtL",
  "key19": "4RfSY8XvQri3aKvLQUDBs4M9ehFyTDisGYZNcKiq2xFuZposKxwZZtGvANpQYZz5JECPy1Sq6NsktaNwi7JP8yA5",
  "key20": "3UXrAvnHfA7nVV7sD9T82JaJ98YkRKH8kdRXABYtGFBTMptWw9vpXAbDe5NH7ZP8HSwS7TYk8c9HfpyeSYZcpodc",
  "key21": "5LpBT5kXRqVpHrZJZBKGGG3XaGdQXjFjTqhebKp6ixTLEEWDeZerTzA4VhC3s3CRUfkH4aF2CLLSjKnpLbDKi39P",
  "key22": "2RChXHu6Yj6K1hMBZtmTfpZVcv4mcFYKbnk4UNwXQrxgMSaYUYA4kdhy4dJYbSApJcTZycUzgVkzB7KmfDidHYR",
  "key23": "4rvds25vP7bNtX63coLu9cgwQMr7Fpfzh143ngLuMZoHfcyU2dfdnqqfxecTzmLzMkquJEhpNoD32ZuEe4uueZAb",
  "key24": "26PPGx7rQCcC9xhMGgQr4CKBAi72wEDrCwwZxq8PTujJCFZcEjJA6YEUGuWf36KasTosvpS7rTubLRnn6c4ARZRS",
  "key25": "4LfupmjFkP6NCRrZ2ksoXWSvYAKY9Jpyq5L8q1gn4dyf88dmXNEXsPSERE7nwCgKMdDbf7Le55BDGrmFyFuaUmwQ"
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
