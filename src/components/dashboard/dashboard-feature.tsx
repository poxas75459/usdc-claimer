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
    "4Mwacrh4aQotEwygx8q8RuATfyaHQD2iisyqmehxnLMVLNBe9bDTvJY7E7cj6PnY31oieoBUzff8jAEbtiFQVTUx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y6221ckCtNZUzZ7oFWnyeFLga8qfHPtKmLinByv52x1EJdvF9GTHJWQWAtjYNqZFcCzVBzjqP9KGKgek6JhMkE3",
  "key1": "4BdHr1P191yFcisB72k2THvR78iNhtHBFL2tjGxf9yVmTxY8ZwZPCgZcBpT3rQSv3S7XBqEHdokznWs2sE6jvHsT",
  "key2": "5FLHpa9dbvgqb4sbcHu28zsqcZ2pMGVwta2RXpY8kgQdGKPRMKHCzm815xJdCzGwQQpkh5P7sz7oEabTEjkfQN2C",
  "key3": "4xBCDfKh7tayz9Hmi76D9n9Km21LTd1rd9ZPDayK2bDFxeDjGQc3kNy83UwsZUsSZVMAeG2hS6LmyQ2b7Lh7ZuWc",
  "key4": "2wYCofE4eSspm8zvVeCZMu5YsBfUgp3ZFC7uRxPKPwE3nHRH5YemuiSZHDaWCPq6HyaYGTqmRDW36ku9AFpaBsCj",
  "key5": "3e4r5N1VmcKe1zhapEzVHhc6uV94k7shJ8oe9y4YquLpA4DafZQ3TseLk3x73k3Eh9CjGv7rsaV5idP88NsW6Cd8",
  "key6": "46E8dXf6V12THRvgN7iXApgXmpQ3j8hWeVwGZ9DyqnmbUc4y7RbCi2izmBoAeNmeqrtBbrszL1FmuzY7vECCjcZU",
  "key7": "4jz42Qc5qbx2ZDope4hy48xPKZUSPTArEmPxU5t4sdjHWpsXe3z3CMdEkftcp9to5goQzr7TworrbCjkatcT7S6T",
  "key8": "5M6fG87p7ZeAoA6DkEZkcq6G551pgYNFvcf92QxRRhqHLg3rWe4db4y7KP5K65jkrNMjBhNNSexUkZJ8zMNrg4fg",
  "key9": "4i7AteQ1qEVkhx7PPj1RPJCCbEBgYFEpbFG2RPCnFgDB6QTGLwqZKy2Xui83W7hRSstMvVw6qenWxemXNuzCVx2u",
  "key10": "26pdGes8YTrLMwacVu3ZoyZk7EtZjSVgbUriRR4LnVaNpePfAGduU3frsLuYDPauRrKL8wNKgjoWis8U9BZFV6Dv",
  "key11": "4FdjGp3XrbZLuzfqkoSVDNkaE94J6C7Xe8YvXPxZkUE9HhwhbdnJW2HfwBuLbwdcZiGHkkkikxE8zVRcmmeD8j7h",
  "key12": "N92B5v93JQY18SsTTMpGzZ1oKZScHhnDSqp9kiiQsT9QJr8qEBCq1DvpRJa5MmXccnLcZXtWL9jwqhwFbX8J3q4",
  "key13": "5GXFMN8keWF5EYoVQW7gcbwzbZE2DaPx4nYxt9VPaEyjMz7ZnEGpP2XeRvjqjV7K5m8NDPrimP2PRr9sy2xYBWGz",
  "key14": "3Q7zefGuRJPipJW5Xd6Kw3Xv9812dypopJJsdPLz3KzUHRUYiwMHUBQofYphgCNt1X1Sr7Y6neSLjCq1WFCF6UZm",
  "key15": "Xzmd6FGs4dmpKcdZ4CrqMhJfKsBuBLX53WkraYzHD3WJ2XK8Pwi55FbEY1gwx9tXmT65ZgGC9ZLADr5Vh6gEKm3",
  "key16": "4dMqvbP7S6Ydn9dv9n1Mo4MVRTB4SeqQeigBMLT6MrGe7KsSpqyGjuaE9oKTe7629tDZQ4j74ttg3F3Azx1zCeZJ",
  "key17": "4eY2HU4tyKpR2zSLEBw4wEGSA25gjDih6wCLwNQ9iE3hv5Am4577zoxKFGEpT3mH5W39YrzHvdoSUuEY23gDX8bq",
  "key18": "2NKcF6rrap1dgaC2hkiWcMs1GpnMVN53TGaw1SZPcjWFLz4BZ38mmQsMeENBR9t2VhtpC2pfePWoSPPDx9kYWRB2",
  "key19": "4PrYYnAYJzsRrMoUBbcNQDbLMpKjbtDrxVeVT7sVgeBGzW3Yz7UZ8hVn2vSpTHxtkDUeoiAd3G7xwj3GVVWQKUEf",
  "key20": "3YrMebFwQHLmYPsDDGTJYModtXd9mrcEfTePJU76AXiHWn3JkdqF7Y1Wc2EHQWNmSRD2qvQTQ5AHWHdCNmvL7QyM",
  "key21": "4WZv1mjHWp7AQ5eTiuoEjCm49TrQVw12iutzsSzimNVHDQxPNDwvLawX5jYi6pESQNFvymzsmMvuup8Hh9Lc1ySy",
  "key22": "vbPsGLGocCwj4VZZF3R5anH7Xc86eFo7crLWrvj6QuZANBCSwieoa6NNyiop6h7x4uFazRn5QygXYG2Sdtiv4Lq",
  "key23": "2DKmbDvgGBqmpQ6WTZ2faS7dBBVEQGXeqmaSNmbwbjd1sKeoc4VYJ3uGw46ySJa3adEgZDKz5L4oDpy1ibgjNiGN",
  "key24": "4mMNV2q4pBNcvyRDugvijiHUXbqLP4SuBB7BeakLF8wjRxoRDrwpjKzPSD9tD4g2CYrW383x9m5dq5JZMctMPTDm"
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
