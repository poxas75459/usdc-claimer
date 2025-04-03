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
    "56BWPa6FJr9fyD9HzCs8sRMUKhkMvbyUqpu1eCzgt1M7RmU7jJcdrQZDGTeWLyTejN1ziwCzxNp2zS275DCuhZmi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D1snaZGnFnJUPcZoyYzwETia6UxVtpgmXnUg4LanBfYagkEG3ymDgWqjshXRxUx4bz57PvxKxLpN3SwBdFabW1U",
  "key1": "49PfSXib7hbz2QYYnNNWakncumLtsPhdq5UAp6PGS7ES7pADmZVqQxGv5E3MTtPzzrsPBPs4HoeDA33FQAhyS43y",
  "key2": "4wemAEdEkYSb89nWH2YBWeWsP2QmBRy4GZi2MNEAw9BwQpoPUocmCHCwCzMxdXdkxm625Sdva41oyH3SDCdkDVZj",
  "key3": "3nWUVpEaLBCMiZRTaYNMYXdf3tAeRPqCHWrdTCotJ94hVD1wVmcf8RxZZ7DM6NNPvLpQuSC8DN6L5ZRjyeUibZpn",
  "key4": "4Dd3LYfJuz93eDJSKM7ZL4VCbW8fJ8DtDkNTrHba6Epb6e4j3PkYosV1xSDqk3NGXX861vAv99yFiyjr5gePVgwN",
  "key5": "fgyrocwUAJVAUXnfaE8Qvm4UGnfb2hG7R215XrDT39BrDv3c63vd23cqvDJLzfNN4Q1B9up3ENUuJwGSYkN619A",
  "key6": "Y4dTyJuw4MXar3YG63mBLYgMYYcmLDBDTydf5TTvmtu8C6VuuRe2CRakWNh1moBw8agsJxqiiFcssif7BP7kRZX",
  "key7": "5rxKhNXymVti16nLHZpLXYieMbkc9cYJACRA8iBjf6uWiiCsTXH8N1Tc6JFfvDkx5NSf6UxrVy6m9rSioSvoE9jQ",
  "key8": "5xme2QhS7Q7Cz6E5YmWtWWpjaUmpFSKBfeELfY1fE83KpMj284ukDyDr7VvPzHePu9DbLw4hyUWJu1N6888WgsgY",
  "key9": "Rs65CYmnDuTZW4FT7ioZbQPPLHn5h1vgnMV5RVVdFH5mH5x2kRBkG4rWdUyqaFnfGTQxLAxou8LP8TBzKzpmmL3",
  "key10": "5uKvPkVq7EFdiKkv57b1RB2XuFapWRrXp2miLb3aTexWQrbLjS74hnY8pP363MD8WouVPAejmotDhJodLQhVFckq",
  "key11": "2awz7FpRYoVhWVpyLazk6Tjvxz59cL4ukqWMqtecTN2y2ocgaAqTxMbMPo3y8zLzwXzCVK3ZV3qsoRmyrLQGpWGc",
  "key12": "5jGX8m3FVwcy9QMoJJx5BtiXJdQmi5MT7wB7q5UTn9UxnW4bWVp5gY9ZGwWcSPUMr7ji6qLBEnSvywXMha8GmqoQ",
  "key13": "2XCC4faqrJkwg14cQkhC8KTwkRoT5EjUATJfwqesGga2RSgK2QsLouRhA3cCRgXWn8Rr8RwgF2XwTvAAXv2KSRiX",
  "key14": "3eDVbDN43B1boeJfGe2mjVxjwZ2vrbpY9pwiZDDLnKEZEfwGsonGpgm2euPkLEjgyTjmyJvYTPeVfLEa4Fo8rtiE",
  "key15": "2CWvqHHBKwMsZ3zivtBZXDa2Rwx5AdbttTnSAkr9URLwbata5p7abd6GUtQBadcbRo1S47R3mDdAtuc9y8W69Z7K",
  "key16": "5wuM7DJ9NEYxySojs9958YW9ZrhqW1ykp3VAdAnrVbgv36eEn6poPFyDLoCuaYvfvK8EJPYZ5stoRzoEFkhdfWNG",
  "key17": "2Aa7iAbKb4mJ5GmPd2bw3PN4eVWrSUzPdUCMMfKJFavzgHuWy6TtoYFG1kjDiMexznvdDAT4sQNR6rAq1GngEf8W",
  "key18": "4Zt6A354uM6ipXF7p51G8QoEaoFp8RkCKH2xRqC8WTHpKd5DPaktRursz4qUrCtXudHyXW5QNwZHuByBJN8XCdis",
  "key19": "3C2m39JPMZxcWJXGGvztZeKhimbKCGZPUwxqvnK5kTfD66nsPokUaQbXQMpVJn8gg4tsNhKm9mJFzBpLKHe7ezxd",
  "key20": "31Gu7ByGwvSq7yM2xns4XvjHc9FfoMz8DeA8gEAETVBBR2u2LqakrsqVr5UzywjiSjvw7jJqk87p25WmVHDqSiiP",
  "key21": "4yjEL4RNdjUwBYxYBtQWwhJzdNnt8sY9SH5oKUtyMtjd2pqXieZBcyuHwAXXbykittSyaywYLfcZUqdRCYBJ9J5W",
  "key22": "4YaskiTEKo25RffRV7bwYisVhoSntKMLMdVpF2AeGWXvJWAzU3Ws5SuM8FMgFZYwmcPqU3G3UsUcL5nszs3KSatw",
  "key23": "3tvxZPdowhPmSCGVefqqmH1xebHWGCNFQikxWv9FwQzudmGTWKTXh4aqDbgMTijeGYCcBzCkSMCnUTeaZgFG89xB",
  "key24": "QjityuDZNvGLdq3Q9WCaiEDhdz9mEe5JhL9MqBEWPjb9CbFuCryF7Ws9DXfp2w2WMnuGHiq2mTg7tjRDM4QJB6N",
  "key25": "3WLNJtfbhqD7Yp2vaYqfHRSDWGqsh21wGTw5PtLM4xg5oSMrvHZ1NDMtLxbmZYhnVobD4oxP2CuSLRDvZS4A7GQK",
  "key26": "3fEgg2kMp9PcdqydJ89Vk871Yx43vNK9nxqBRXbSUNWkNa4WwKCMewpzjy6b39jpf23vUoU5xLmUZEgwWEFz9rp9",
  "key27": "3Nqcty8vvaadPMZgQqeNFNP71R4VQiixWzrbUjK3gEmr9rm2bdWGyCbir9YNQ3eBkCHPDApsDfuz3Ltd5BiTAWfB",
  "key28": "62eF6iVGwZu9ozBhfrgWQmW6gFz4mZSob5EAq2oMsnXJqoKFWB5bFqRZEMzmQ8K4Py6uwue1fB19D4STBGuFL1c5",
  "key29": "D43Yn41HFqmXyih81jiNykWAs2Y4Kvb9iV1KnmvpKroZEarJE2ZBWk38hGzLbDzrGagXxp8TvvYPtb3vAX9z2Fe",
  "key30": "4adJ8sNTVE5hB4AZwRguKUEZwrjdWVxSmpHm9Y5kgeLTcWhar2nbwHdbJn5GnqJ35RY73WYm48LnzLyHwhrLhh8s"
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
