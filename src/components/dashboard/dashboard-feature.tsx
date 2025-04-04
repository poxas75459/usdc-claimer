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
    "3G4DvEkFoHzyPkJzjgvFrZuumJw3GGezn3vMn4Emy37mTbs9Fb1JUEFgWSqAUcrr7sRxFbxTGy4wf8VUzEpaVU2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tJbDhHG3q8x1UGiCvMjxKe8TH2SQY9uUe2FBT9qK3qR3c8yC715MK5SeyjWFx18znaZEE2mzGUiDF5CHQXV7wHh",
  "key1": "5d8AKQy32Vut5nqKgA3sLCxudeBtgRwfc3xSDa3Jgb3iLWRjMW1BFuzAkgKyRrEj9PyY8YaKNKGQrp7VzJvybYPq",
  "key2": "4ZcinVdFJyfW4KuSqP5ouSK48ZULVD5AzfzcpvcYEL9zrnMcorfA9vJHGcTvttzPYktuCLrysFnfMyn9ftL6Frwe",
  "key3": "2y92AC15qswiZHZKEU6Hr9fcL3cnRAHNpTmqruFTaoZxV1eKTy87XLwYrjZKo8F9eQZ2k1Rp72GPvyy9kTU76bVk",
  "key4": "3Yi7cKgDSZHemxCaXGDNEqLqw8RMRvUFoGyMiqLdfMiVZZ8s3eZ2TzWhZ71q7pBDJPLizQuKrL32rXoz9ZMUYwW1",
  "key5": "2Cbz6KdPW3F27acHTRm4uxbyyLoyKSkYmR31cSqEAQSxBqvDmD2i5vYJkVT2HCRJUQUmw3A8GZBNVpWdbK43DmFX",
  "key6": "2eJBTwCGZYZxzLFHpLL3CLi9enKoKMoS2a62eAVCiQshYGs9fRhmiZUKffCyW1MrLjgM2ZkxeEh8LkDk79q92Sby",
  "key7": "4u8nN76SeiYb6H8pyhW4ozUYZ9NttbHqmeknLBbV1fQg3QVunqBB7FXaVqPLrTzeYASh2cGTAZN8Vb36PkE1dtY9",
  "key8": "2ZzfHK4pXAqeqijCYNphGgtxVqZovNU5YCGa4tkU48Y7kznxsr5BugCmMmcNfW7d3ucKQ81vVVujVhr52axmooRU",
  "key9": "3h5Q6HkfwPM5KSEdWJfDAFxSuzgBNmLa4X8uQ14nzxdYqsAzqnyRP1ya3kZSfhAGVA2NjvD56d2Au9dNp19V9RSd",
  "key10": "3A7Tfn9Ht8dTtvJvBaxYegWh249pDpVvZ6RBEoxiBFy6qKZuk7kp956RGM5b4UUMgciTJKrmXrQuUdqTZRDMB4cM",
  "key11": "5wi4MZEsrRhmsxmfHP4CFYrPX4qRwf2ZxRJuhDCd8ojxAsvwa18YQ7j2ewjSyhLJh74Qc3BXktkkZKkp6tkxf2dj",
  "key12": "kNAukDo96xN4URZM4REqgU24PBnFMSQ722a4WLJbMpEBuS6d6XX7WjtJW1jrTywVdR3qMMneNASKykYWvn98dhG",
  "key13": "5E5HcbWNmGYokURTnFri3ovjgptZqK4qGJP2vbM26u6vpjkw4NDHBPsfRZAqFdVQUYpGaeC1gYXCEyVAWgidSiyt",
  "key14": "5FvUwfgxBYPaWA7FGKCsciDQMYs6TaK3LbfcGEmwmuuvvAuc23LYkShgUwtC5axkuDt5qpyC1z8sysj35BFcbif4",
  "key15": "5t9EQEvnQw9VNVdNbtJM4GncQxB8nUzdHTy5vDUaaucEr1bzQUyarzoCvuq9AHdQvN3u5xtjGxkxTZVL3mS7bCHf",
  "key16": "27Vk3EjxedkucRVHTDngNmjh7nxD1xzumGy1G8ErebN8tgButTaAXxbG4S5EVp8D6arE1UD98yaFM6XrT2M2fcgB",
  "key17": "2N2UnvNWFAYnAh7cYGWeZU2q5dYq4zpX8UjVVH6zLcSrjof9ffYcu3JR3FvJ1ChaZ1xg2PngMZi4vPk8YCngfDyb",
  "key18": "v7PXbduBFpB2f3A1pVXLEsKtCn98v9bz7qR5qmgu1cQ84nNDBBUZe67simenb2j1VWiqNHC8XEBaLPNKpXwAyeQ",
  "key19": "5ShaERijxNnz4oxzBoD72XuCRyRB6jariRVrLfcTAAkuzazEgRbw36jpeeJP5Twt3o4qWeuD34c6R3Lm5K6RWuBc",
  "key20": "4azmBhgmp19NhsqosGJhV7qZpqtghr1n5y1Kg9kXC9S6M4k8AxETi1TZKi54wa9VNZ2mvbYv9EohgeTXkgoPsNuD",
  "key21": "5Evy2SDoTUMfuz2RwkPCPmo8WBni8wgWbETsBDb7vnJtKoYvBdtZ1GP6K5us2DSEAWNAc6Cx7EXNL2a9M8m1EYVH",
  "key22": "YVdDvbYfXn58n4xekFfp8hXU7guxTjjj9iUFqUCGKNM9zErPqLsjA8ko3PDu33h5YuZq657EhNyBH6VdpVpz8Yb",
  "key23": "3Lxd2sqVjNpNkfHkcNPMD4osjzPh1ANwXjL5pMDLFqDd7fiyxd7DYSikBB9agPxRnjcNEBtHEirswN3JUP17NZ7C",
  "key24": "48GgZQnfgZFogtWrRoyJwBr5FZ73CeBhRJEHFhJxMBic64jamsAaRcS1SGJC5JPQiRMi8zZewzTq91h4Yc92WUFt",
  "key25": "2pufifCEFhMDNwskfsF27N4rgFjbLp17rfZ6F3s5AWhCjnBZQ97xbkUJ62pYQ3Ccq4cNfs4UPLQb6YXSZuoiNdj",
  "key26": "4jVnLtV5TN166VqtFMj97eXxiZxoqTcETC4ZzbA3MuGPKFvVWXUvLkGHeHGT8EX9dfPbwRymdm3kEdzQTah5XMs7",
  "key27": "392bZcnrxbUbFPzSuC6tLBRrSuSjN7BCA95DgQffF7HzFdw8UAvo61ooEN9sYjL9BJbErYGBvSphXEydBdYvB9qG"
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
