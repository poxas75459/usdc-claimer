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
    "5Z91JYnhZchptuR3dUphdiwAVPqQo7BeSgdsWL2YixHdSHtHcAY7gHEU1Eq7kfnsDNKhW8JE7UfD3epY7aN4v2vo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kzN6zytnQdL57JMR6cQYrRWFpHktV8GkJ6LScrVRgD1nayUkH7uketsC2Wb11ziTWDizNJJwvAfnRopcDeWpPy3",
  "key1": "63W8wSpnXW7MK4rkUBLH9vKjQ7Jz2NqLxLPHGXUhqdH1cWLLBgHpNFp43iR8D25EJUZuz2o18W5QhGEo1v8uCsX9",
  "key2": "2pswE565uHoLGXqmA7st2FaobsEfdkRcQCcn1BTWWeMKMLffnLQqjZQYUJNkpQZbKbCmiagNxDnZ4RCvyyD1ddY4",
  "key3": "3Js71qdRTGaFUyC19R588jeasZgiF6U67r7ovvDCAdFdcfdeXSrU3RsU1EvusE4MWnYrKt57zMLaT4CsU1rutByQ",
  "key4": "7zXUvpufngZBVTYtA1qqbsE5ykn3ZF6A3iFLnHyQVZ2hpyh6E7uumEkTQcTitVPJeMmrX4g2Vi4KGGssexTLK5Z",
  "key5": "3uhifavPgV9i6kVCjEidjNJf5jgPcQCoxzt9sLR18cepeBZJr9P883HDTdnymmwybJyL89Vq1wQiM7wWpxTU6bt4",
  "key6": "5sjEZyQRqrstHuC8weapiy4Whi3zCjmkpc7EJmvP7huKDz8aYaagWkZmerZaDaKzzkbLn3rkd5vBMa2ZqbMpjXn5",
  "key7": "2GrzZMcdfYxzeAofv6vk41XvfNrHkHY5ACZHoP6CEPWnhMFvop6dMymoQtrvnnHKxhBngUKotTcrzQ6jwQFGwWzx",
  "key8": "5TkNxogCnk8gqqSqfUrekgDuxbhxu8cGry8SsbLXnhavWNk6LEA7d5r2pUqFSJg66gKvsGWEwkxAgVSv1a3GGL6i",
  "key9": "21xWCt2SUUKYaWjPZfe52VmuUQqyfh2Wnp3rNDiicP2zdQWpy9cDf3TCR7TQaQL6rF2ydvztYjc8ZAtRPV2oZVni",
  "key10": "4F34kQJuF7sn3LYz8XwA8c9qF7wCW3zs92tCJCgPKqPfUFnoxA9hGhNsR9H2uQuk44WmW1deGdm2bK8LJB8ivYhr",
  "key11": "2bUZoFb3okgENZdHk8x9yve4cp7cSF3EQjthnen5fwKwX4Uwyyq8hbQM1WKegSkByCGDqewZF2Q6LWg5C43eafNm",
  "key12": "5GwcYAstb4RR8YfVs6qnLVSw4s4wjVAE5Xb3dttr1TMuC2Uc8RcGqo5P1tPsVAYL15KWzD5cRCKUnXU1iWUbL7Ju",
  "key13": "3BGTZb58etSX6tC443Q3CpU1ao2oFvedANLXs6nQjgJR8r7PgdPJvkMqfuAYF2P515eQ9e5CdXj5ctDhVDh3siPs",
  "key14": "2snK127qXBvSKKgiJ1A61AoeErd8LeJkZUsXMLS9VhrJnj51qs9rFXyarTUuayS9rzFAGgEGw8j7s899cxXcUyPM",
  "key15": "QzywvQXgWUyQPrkSoLcEpSLabx7H8rHsbV3ZWqDHQLkVqQcaDsjQggPwM6eGD1D3x3aqtfYsvhrGDwWjpVvmi4h",
  "key16": "4KCZLVMVGSZnmq6bUv4s7vqsFtgRt9FxitPtJRqPUdMyWFXWyVzwC51VPm14v3kQbhbXn3PVwvoy5sX4heqn1PKz",
  "key17": "3ZHXjVPKRL3XF7nutAtn3Mz9hwLBHRQzARbb9MSao8jcbQbWaitvHxoRjxZhsjjiSHWg4974r5cJrxrGCogGDYMi",
  "key18": "5T8vCJ6aSqNzPcCrYKduFurppKVw8qCdp3pZcLdYKQ3ToD4YKPL5gvhkiLwQtRdoaR8reMkyixrQVhxQSt67GCzy",
  "key19": "5XEGtZZMjiv4ea6GTEjJ51o9oze6hEKPjszLULnkz6y74dAzKwNWVFvGb8oBcwNUfHvpgwwBca8aZNBFGRNTAvYX",
  "key20": "4B33jmTMNPAYvGpzAiTTc9p25F5ePZYnYPGLrQcGBLL2rXU2N6uWG2TwYon7LJytoQsQ6e4QePmUGsRErq8hjFax",
  "key21": "MWccVGqTPwNd1zVWEsfVrxJHSPZYMBy5sFKm5t7J3Yiz8vQW95CZGYBf9uhGdXndbBE17aGdKGicsfFUXUg4Pxs",
  "key22": "27L7KVE9nWuLTUQRSAWM8bQrgbPzSNQU9UKyyoMSVyRu65jaxBQaA6KieZDAi4U6MY5TE95garQ8yVo5iNqhJy7s",
  "key23": "4VmEu8WCU3VMFHmbQYxjUj9V1Wo6MwK7P3yLCb1kSkK67XjUaCUmp96dmE7BhnNnkc15rweSShTvzRuhDBgzsFBZ",
  "key24": "2T2i5Jx6uwogy2QLBjwHkdjLKgtP1dGS1BNjcYpdWUerxRfeaJEuEXmbYpW3VneUy1cRDn4adzMkaLsUPf3wEV7z",
  "key25": "4TjHq7wfkLybp2XGAbcg7nbjfKnFLVsg7The1GnbXvcuEqrgaLCpTLvevgJ2MTssAfy1VEf1mjExe38CZDrQ5jGF"
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
