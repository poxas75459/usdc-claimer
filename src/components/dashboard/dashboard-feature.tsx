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
    "5EnQBQdQ7fHEnamJsA3NxVqRAXwHLRcpSUkZEi9rG7G3pL5ZwpUpgYmm68UZ5nxFgdaL9ppUYNkQqfZQGaL3k9pf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FXfYxYcuozuinRfi2kvi8xSoYPxDP2hJgR6GH8XrhzECKqe4JTPD6LHLsX8dNHwXSn3DxxWJtRCCaP7W7xUmKmC",
  "key1": "2tkKYsox4bNvyhoHsH3TDoDvimyfGQBctHJJPp4wCpzgXBxSf2QK5rBdyfEXzx7ydnNJ5nX6Un6r55JA5jdPP8T1",
  "key2": "4bL9dUKNyVKviituMLY5e8zTgn5hyZo8cdRYmsgB5eaQxfja6FDnGCz5etkQAPh5eMkKmxTzrM63JLzFwP1kFCUR",
  "key3": "5qtMsqbG2ArrhAcARRpUkCwg5UXXWBcHTHLUvaXbgqxQ1XdyGzafTekVigBmcv4nXKGtDUeBWtxSz8fboJZutaWJ",
  "key4": "2ziJYx5EzqAGvSp6tuLbMBg49emoshvPNBhfto528bxQJrYyedfQehthaJiy8AuKBJndQa5u3LQfosr4QWbSrLay",
  "key5": "2LY9KAtjFTrrqbjy2Zb2pUej2ZBm3sPRjBsg4KLh4avdtB8necsqXdvYGagb4pGZCTUtPqe5yZhcrUDBfr7Uzig5",
  "key6": "5perfAgZEW7N3H2hwBTnYXEuG7FZE1xU3FLhDXkN6qhDX6fpDzt6HA8U3b4bdyrJxxxmo1Ru3Tjn17xU9q9937vr",
  "key7": "29QbakSSE4UeyNypXREMpcn7M6R9pNt2YAqeVGGcMzTCuYJgysvc5PqRR6RcZ4d17mJoV4aKXxCXgbNLsUsnyzYw",
  "key8": "36s5aAWEXiMoxGGoDvePXKNBiRkQndzSsvidGLACoEfP4xk1yS5iXP7yPCrPgwyAgPZFXYYF1143PRgxnoQqvBfB",
  "key9": "ZZ8PCzBLFweusBAhEjm43npXnSK8e8752R4v7cRnp5mJ5Y8R8SZCCBULSeEEYXTdjMcK3tkVwx7tjSLD6baBgFu",
  "key10": "4hs9LDj5EMxEjBxd9fkDNxGHnbNMHJjaZ9gGA6R7rsUUyfS1dEepfmVkZi3SwjFQPBGPH6X52dfBZm9o6SZScoi4",
  "key11": "3Hc7PojDbVdCFyGE8sAQu44fEEGew5SVcH7KUNdJB5GU3b2fuQa4XPyEyBeT5Zr2Z84qgvNSQAYa3mUh2orrBwMf",
  "key12": "5WrasqCZzGqh9ZpeqPLNARLP2yKwvVs8DYfv1zuKNY6zLTfTmZEZ2bwH5H668S3ptJt7QSUsy2whYTaNcUskv3bJ",
  "key13": "5ex9qBBE1ZCtPczHUrvuT7Q7HUnsTBZWz4JVSaEf9ABsfmWPs49TQyts3cSeSpf3EKBh88qYJVLaPJNeJou4ETTt",
  "key14": "4883Dgz7mxAevyfVVk4Feku2nKThnmGJkyfdsKFLxfqHxujK7mZ39TovWcLigq415BacKi66km5g2YA4pPSz79AW",
  "key15": "5DXGT3H4xC62DHP4AaiR6DgcdtbdURipmqXrr8QjZBSFvEvKi6K8gf6kWWLxi7LUNr3FpdZ69TmamU8CVYRiRpRm",
  "key16": "5zUdV4PuebeC5LY81NCzcWsTPHmviDNx7ineJGHoYZo3vDE2NiuEMb56qRE75gAov6gcqvg73GRF7zDv3ueoNaXT",
  "key17": "5mdzKDpRdWUHy9hSMYZztaAznjdjLyWmvbwKND58DV5VjvVE4x93YANwjLfHHeMYJRsBUUhxVUS4XwqD1u5XPfuH",
  "key18": "aSYEvKb9LHgiQPbdMmQh6kMKGCkDTfJELBqFYvTcPMGa4jVPN6pDfGoAT5XbjvXQggp4CiFDRSTjYUn3tiYZ4qc",
  "key19": "QBmnNwvYRUg4xAkuZF9zUiUwwQ89nPzHx5KcjH28HsEwujEhZS8kszzpKnUdwbRnSYTx7Wagq2AwhrbCY4UmdNA",
  "key20": "5D63qmpSEvinJkTELU2jsSqXSu4j4jJey9PrT6WYdSFjJ5fT1WwXMs6bvqbFfC27xnQyum2ciMHhLcVMTjX4afEp",
  "key21": "2KjUGGYbRCzS1odvcNxYcCBrybk1DXuUYmpFk7einwvB8xy7jq6Y3Q3skeZHjmn8Xr1KJAuFUBeQ4dss9Bht1YgA",
  "key22": "h7QdFJpsx3QrCjyMvpuHmy4m9G174SVZabscZcR2mN8WhaJC9uEQqj5HuL6QsavAkHxRdLpytNomzh5xar8bYaz",
  "key23": "4Kx5dVXfQuyH2ypAe7L9Zavhx3mCs9SweVYjWB47mzrEGwnq1frfY1BZHkQcqg3LbaFjCJDrRatgiNTWK1tEqLoq",
  "key24": "3KyNgMVWKpjJsHnf2wjU4e7EyYR7CgF7QU3qsadth5GRCigbopV9mwZgc6gPR4RWmrEmDfEbmuv8zEXiepaZenEg",
  "key25": "75F3cTosDWhx7vHJYLcWyX5w9y3Cc5XJ282Wzcg66ewVZp9z8ndudUsCDJxubu7nV2VYgWf1bR2YNcwXUupqi2W",
  "key26": "4kDZrg8UVim6Hcf1Eu9JHQKpY2EeoY4mfeNDbSehRhahXmK7NqW25yz3Cki3RWmVUHDH9PNKTzp8GgDPjaugaM9K",
  "key27": "2JEtjpXQB4RHyXQ8FYn6pn852jbXSGwgy2eJX3XZpNu5g4YKBcFQn8Ap5onpWycjNNPuC57oDjCL6j1sm2XTvBK8",
  "key28": "5fZWw2TYYGRqpbwGHX3yfxAeeFRpw47BgURw3zgbZ1aMuTRfa6wHo62PjGsRqwgdtvWe6WvoKAHoezJbc3j4tMnK",
  "key29": "4DSbQ2oiBKE2nSgNEGoY9pmLnMJFzwmbvunuDgRBFVTbGmEdjRnmQS4qqDxxtmc2MRryCDuXzbaqBkdfZ6Sg4abc",
  "key30": "5caT9HwffXVBcyZRie2KZnYpGmZjR7PdgUfLMvx15QEGVjbPMRsHtXTWGKDSDLKxunnfBsayJv2Fd2HqNVbto21A"
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
