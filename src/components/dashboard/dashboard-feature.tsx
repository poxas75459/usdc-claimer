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
    "3UKjMwN5hBq63mLKtAbjm8vmbaTvQVRNDpqMx7ynsm7Gd7tMbTXsJ3JRDRqn7XbfSzDBHL77zWVgirdU1Nrm36mu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ooW7fNoSw45FHtsWPvBXPxXVvdH89cXhKWrj4cdN7gKmyQWfr5LdAk3odFndD8HA3ohasqPCeeMGRp4vFPVBSwX",
  "key1": "3Kcbmo87rwA4szreNeNwnnhrmXocXDYpULX8rJr6v7v36DVb6T64iwPEe1sqYAHFLCoGzPLV8qM2kL54G5EcA2YY",
  "key2": "2Lja4LCYwfBXQmu7Rz4HJeixCvMMp4b5nitsPPNF4ZaTQWShzCkj6SfksKwbxFoEBV9wo23t75RBkaGT9umjU1QF",
  "key3": "KdDTKXvhYqtBttMZBqFES29beFBJjMXRVnZWBu6q4rnUCoEtH9zjFFazwEj1PuCK9tDJBjpUTiyJcs7Jeqge4JH",
  "key4": "3c6bR8YZHHFRKPuxTZtQNBafPSsxKtTH68tf7KwoxZ5EcWpqxE2ucYCHTZdqViLDVzRwXvNCtzw8Y3MsRJ7Jupt9",
  "key5": "2p7itmC3xLYd2gshxC6DNCfCVsQubBQhbHv5KNkdKbTvq8fwVjkN4RFHZfAAhGBeUTKQXLf6zN25wnW8JQ8YQ51b",
  "key6": "4zZQXqLVmGs2MYAhynkYzXsX4qHZeyKJiCWb4Kv8upiazg17n7Vo89HRAWVro26noXeKwAhZtckDA1U1V3ERoyGd",
  "key7": "2GsagGg3Yxi8qr7H2XLbs4kKndUaKZ3hMnYyTydRUMs7V2k4eDnoLYfXQjvgA1vNJ5SVJJ1wDMJUM39AsGAxsSCf",
  "key8": "2DzQ5vVF6AASA1r2X56sWVCArGqdqY5Jubnd9inGnqb2y6pioYShGurKankWTnVUqsorQaC6VFeetXBTqWyKsMSv",
  "key9": "hJT4hiLQJR1yD8HAsHAiinXhUfQ49pEU9Ub21eD5zp2VaJNh3y789NKQCcd19wPCAhmzmWKgdhPKn9Qaw1JUJbU",
  "key10": "NQxgFWr9PQfUiwypEEMzKzD2bKyykuxXT3C1YjJiSNNeA9EhVCR1sAMgsEmpfg91Cw1mHfUYR4pvP71UvZfRqGG",
  "key11": "5Ag3XXkUYjHwBgiKdcGg9fVedHtHntkuE96v4fuoS1arnqkM5MsmRkPAXxzgWJs6Pfq7wZiaHAdq3zarhAytg96y",
  "key12": "75DKKQowL9WVYMZZLyWa7pfahBWPCjVniYsd5zRPk2kUaJYjcs9m5YUVLzMCvf2PC8mVV6rKyJQfRVZgz43r5mf",
  "key13": "2x8F2hNutvdCYsGYGa1So1zUcfncc82zUcwGorXfDwuMpHvuAHQxowYbXawJVKNqvMAQao7ASL931HvqL5tT7ke7",
  "key14": "5p6m8ZFovSbHzS1hCtx1jH7iDJYCxDkpgzQqTk3HcgJuwQVhPUKurhzc22AQ9fWw9aCCqD6G2WLH1zozUVpTMXBs",
  "key15": "4XhaXB6kHokMDJpLZQpnD8ASBXMvVqnQuvkGWHXAuYVtDw2Ln9TqJHTYweTYxYT56QWPrfpSoNU5YgbgG2EogLiA",
  "key16": "4sLE8j1XTDfDPdK9AxcpEKEcj4y4f6qyFSqctVfykcfUupNzwDAAo7UDnGBxGtDkzkYvof6rU8H5ku2fJLFs2zjJ",
  "key17": "52cwb3NhYkDJusX19gPR646uoZuMn97U2QqHu3WWkLmWZpXNh89kc9N7ih9BDPELuPUNwfjnqELFBFFN4JQcnHWT",
  "key18": "5RnnrcMBVg9sHhGtyRLiXYhAv6HK3BcYjh1bvLXREYD1ehxygyqYAaso9gHuBx8fSHkqBEa1hxuTzsp7KUy4Y5ZQ",
  "key19": "67r5ewswbnwYkWuEYN3aGAUo6T1u1VhH1HoL18NWpK8bJF5vpThhSBPEtyyQ7zDRZzchz3znT5JhnQo1aVbnkmrG",
  "key20": "jfwPSDNEbb2zaSvLYasTARUCPMawSsgRUBFS7TcAEkpXVvSg3UjxPhs553S1L22h3ors6zchGEjP2Hf7C3LRT8Q",
  "key21": "RZUyJMyAVvd57w55yQXXBENoWSmn4i75MEQmNRmKeYoHPfnzQfSZ66dbVhzMQPYJNkunYEzkYwnqb5yhMXGCLiT",
  "key22": "2bxY85mcj9rxFXCQpABeP6JFxVCfaV8UXFxyR4mbTQoTubiuk9wMi34P6uCuQL9YBHKQym2xE1EvRyHWX64h9JUt",
  "key23": "48j93xpYSnAo7FFkLw4Pu41qo5YwcA2dfk23Mj1sUHwoVQjZKeQ3CksdfiJ4pVcmLkHgCajaLH9MJqDGuUZ4Xy36",
  "key24": "5hzpoY9KsYc2Vz5qLoqEXjStqTEfRYr87zjP48WR2WCYzXKeZdHPYczubx51QbL893DXr98LtYkiYE9LspJ43LoX",
  "key25": "26fhBE685qdYx8SEnUKCuvfgLnKpiKTEYznbBkBZ4ck1EJJTs9yeSTiu58BJx5JHE8ogCA4LTx8wJVZZHjmQSdrp",
  "key26": "5Ff63HDyES6nGktVHwhq43z7n96TuRU6UP8GueGpxwEpa42Y3iFdLmcPFz66dQww1mAQ769rhYs3qWGNZHkG3nmK",
  "key27": "2GTfewRwmP5cQkDZjybXYaZV69kaDHpSfsvze71HXPjaMhnnYUmKZ1qCvzSo6sbumGiL78c5QZqdzi4bL4VCwMDo",
  "key28": "5Pz3PkE83dQfY6AoeHtsTUTWK971eDxRC9j23eDCHQN6WzpTihSYJHVPTjYrf5fju9LpKBsqKDwwEFbtMegS8Lig",
  "key29": "53zyTH8fMP9rgtP9krda9nu3dE8jfnam2XzzNDnKaPLou3RCXPU15RwzNcTxMrtjSK72PDu7YRWRDAnfktyiqNyS"
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
