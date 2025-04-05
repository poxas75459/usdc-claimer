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
    "4mRUJoTgJtNoccNryEm1AZKecZcWMoKx4vNGhGpwHe5WxdtjyrER8zZvF1uxV7QHR5HWXusaFMKeJ4vjJ6s4EptD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uyUFnAzfCMgfSXtSyBtCrNHKVLP6B1apA2BT3pQgKqHCUdRxqUse7UvGuF2y7Ux1zdvncWREYCK4ezHcZRMiYpP",
  "key1": "4Rh23xvxTiaRvWrYpcFLLhXbcnsUvSRTA2sUmsBejWb3pZ5ku6jxX5sK9r2rWR8UcyPVEdFo5JpaLgFKuk3Eaddf",
  "key2": "34mG7jrxyumJAdiX4W2KAf2t15z9SFee7zjniqHtyRFYDjJEhXQA4hbP45NbN8ce7BhgiZAhAyvcTZhsyGx3Ah17",
  "key3": "2qNfXSHFyTihG2Niyj5pNJwvndJCFe2DwzAXiKUZ6NjgHJErNomZ6SKMdLKeTTYiCkHWTu1jzBwsDDHYD4XWSytB",
  "key4": "3EhoXwDpdFASfaT6hdqFU6oAwq8g1wftf7KG2KJs81nguTGyMN5KXnwHsELNkaTMWuFB7Ma6nbRS54QepzkvaD32",
  "key5": "3Sv7H7pp6saM5rdpoFNBW4XLEv3ink8FoBsDUPwJiCxudjfXCcyu7nwEcrWpYVkzsjfaVWH4WzQE2QqyxnBap7KA",
  "key6": "24YDviRzZooA5yWWK1N4RRoNKpRANXGTR8ZkyGrknjyDyZQoqAZWnyjZNJcrBRmFtuaHPe3uesedErBxNSMP1rZa",
  "key7": "3XuzmRWNXasgvc1dKyLGUNd6tV2FJE9Z4gvfQSubXnCsNWsVWXJVHuAuBHhJmfyXMoX5ND3Y1ms55UGBunLAE5i7",
  "key8": "57yhiZZYupxPhTHmS6qk6QVhtvGH9WzAsgG4FY6gvK5g3ojEnqgBpTXJnJANNQ5tezk7F2tgD73denrc11YCA2ME",
  "key9": "3nNmbGVwBxvXXrj68w1iK5hPGrDwT9ht7g3uDZB4wdVpTAZ8P1Tsoe73uovLLi9SAX8Vz36hWY2VSrR4G5SDxpkz",
  "key10": "4aYuxZAxiHtMTggXAHChJCXzHrz3emHNDsDvAMsHUyub7aRRb93PAVXUL98Ld5aoLRq1D9RkLgzuo5sLNtafeZ48",
  "key11": "38HS7WaEsKqzkd4UiJ59nFFhJw51rhbdB6MasZRGoSfXitn8xwSHNxqHWZje3VC7eYs7oVHbpW2i6NQVsuu3VghM",
  "key12": "3woFjLvZ1kJQbGddqy1PoKGUaNPTkUWeojx6sLeuMkqtbTKe1CTUyMQjVQQs3r63fCcmD4Nua1HiXffnEurne4zB",
  "key13": "ScXPx3BvT7oWSPs7jxRvjPWgima6GFPgJ51iHsoA7qBVz5bDg19HnVnQ3wBBuwzbMbNFKtjnyrgToBvCNQeqREf",
  "key14": "3Q6Lopime9yWAw1kY1Quv16jRDHMUQZa6TfAvQoGNi2VMgW5d32zXPconacNg31dc3LTdKpKJw8wDGdBNFLRrkNe",
  "key15": "5RBFh2oU2oXiAjjcNvtenifF8gQ4znbgSfWDgqZq59Hn669ccicrk8AuaVrYxb5A61pjKSdcqmPy5xeGBnXFYqfS",
  "key16": "2gsMy2JsUdxgap5rqcrBhAXM3cT4y4tdWM6jt8jxMUCezRWisLVD2LmgbXCueyokbwkTv8xArd644eAg6UGiYm5D",
  "key17": "34PExT7fjBn28rLrcjeNFse4Zkye3HhCMiq7GvyYCapoCZje39xemgKPHHR8bw2qkPjENU2Cy9NAociBHgA7feUD",
  "key18": "3vjRT78ijM7LM9wz2vxK9Z7NPGjMg8CKQK6MLNjtV8Gcoj7dQKrNZSu2xuaKqGNQU7MeZLNPyLxjRzxnH5acSdqd",
  "key19": "2BTLzAzj6R43AdCtDbF3SW4cHAwCHhn63JPWnvkX3JziqcUXXcsGo1r1KKM6zqc8KKZXbegXNMu1dBYxNzu2zdwN",
  "key20": "Z7EagwHdhX7jx9uR5MCEBsitSJapv2ZuZCSJcAB843et3U2WQLWmPJirgt63xGX48fjuizYRnuAhPwJJVZYyF92",
  "key21": "5KBfj7AGttkJu7pgoPi1apgZAnfw2FXxLjepTrpcQZdZx3GE65DNBrQTbXmFYztXGSdcNEkRxGGkCxVAHPwLNzx8",
  "key22": "qfKanKrEPj4DQWH9Z2X6968tqjS5dzXjAkSVMTF5sQRgpQLbdHqCb8kM9r1GY3wyRyZgm9x78di9BKpyLzXjFsB",
  "key23": "5N9JrYgbgWRp2rmp9HoaZNjeXpPC8ZNjVMruHnZqDMdBYCZ7D26moozqVbtHegQNJfzUUQykKWhRGcgEgv6dHBra",
  "key24": "2XZVavWrhwLaJB3PcMMrCeRdZwmSAkzSfsbVoRCmVTPRyXiiGsTzDexiNQ2PX4QhCo2KCN2PXbBnH7KGd2V97t5f",
  "key25": "46sywMinCjAanrtrXMakx4dSWjV4TCn2RnZL82epeHyUHCET3hSPkf2YGWaan1stAQwHusxT5gXJBLqwhqKFtZMn",
  "key26": "5FkiJM849AhemkxWgPuqqNMjSKPyR3BLSLm9FKc1waEuiPjBeUpoRC94nwRis7sybitmwedeiwYbSqXt45RJ8CpS",
  "key27": "2NMTtaou1mSisyDUTFNnCXfscFwGT1oUDs6PxxMoghpYDR74QzcLmciBLneJ7Ghehwnhsd8bu93ABRs7tDaArHUR",
  "key28": "4EPnxMMu3XYxNq5sgaGLJUj3Drxe2KL7f4JhBpLhBHsDLq5C7TiW7XcCwpanW1p2GMhgWZYTf9P65SzWRdbYjfvz",
  "key29": "2i9QCXQQ72eoDTZxVkVp9fJYBVXSWfc94D1HJAtFyontGmvd4jHFCFfR4o8xbycmFMXbo3wAVXdLzJP45VcuMMNA"
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
