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
    "4TW2Ut7AVNaw57Gpk6qWafm4AfJF7Uycj4NYVbsjwwXeAAaVT9edYrZQzTMqW1cYiqxfx7nzCVVtBGgVUrDZB4xn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GK8bXxQGpPhomVJFh6hwjNqEmLA8jT5YC6APUn6DTXW6c68s9avhRYZb5NFN5X4WujwQ7QenxuQSnrc1xKsdAHs",
  "key1": "5HUUGUXkuTnMWUX4s9XXBmNprDo5ZLzHjaTPe5CKgBYsGre5YZU21qBYR6oeqXqTUMarYCj5beYGgox7gCNZ85nK",
  "key2": "5ew1LHMhRGuitA51tWcvEAmUwvdzifKdX275fLb6ri1GAxwvfYemDyTXtzMCZh5eT3f7thXUW33oyLVCDDScziDi",
  "key3": "2YVwmtgJpRGi9kxUKfFQSmYEGCavP6hcf7DT9bELg9MoJuYVEevNZv7ysynbiskP6kes2rLkrJpEtVPyRMAeoKGc",
  "key4": "4e8FbsH7dtrJzrhBaFDyBrL5TxmHarwanwkzdtKaps415bUSK1QP58WRJ7tEgQ15txBikpd9uM8EBFKqSvSxUWap",
  "key5": "4G7ZLxDgQVBNXrVdw3b5mKq4qZsozRHz6WYKgyw2ovfm5HdPVTLFVHGUKjY9CekdugeHv3jqujo99vwgGiyRrxGr",
  "key6": "so7fkd4zt1DLKYtd1768Y6YfcBDiJbrJD8i92fRRNGofeJU9hhSboDw62csGTxaypdRNfv177SKBiZ9r7wKGefS",
  "key7": "3LWRXkFCQCrP2F6RdUZyiPdb5Uxa9KdEYGCfbwb3LdybeniFjw1TuvDhQKxY2KFJsmhr7ArxG5ndbm5hVxYyny2k",
  "key8": "43AfhuEXDFznugvULw7jcKdj7snApJznP8DpJDTeauyHpuePf7rpqcjP539UFWbMYUPP824jGcQEaNTD3rLZqVpk",
  "key9": "2tT5Pf7y4NqSKkqWH2EwdVgxbjD27uS9gsuRnB5TCrzpU7vkzG1MYgNgz1TBJV3qE5fwivsC7k5YxhsXVriKmPxe",
  "key10": "4HggsQDjrFtBZCvU7wctEfqoWZpYbNHuS5j9He7Au6dp1LdCPVyeXBh9NWtnGRXuiT9xob9HcUg6MZuLTK2nmmkL",
  "key11": "4p33gNA5HCrSqxwZJXba9qFzYUsBk6zyJdtbyFrkZ3eTLCeF4aeXFSugrkPa2JeSaXH3gsTjhuW4pziSDzvbGFxd",
  "key12": "5Rqu15CcP5zQ5nk2Sm7ua9NFoK1JcJksMVXXQcNPwX2C9wvfmrWdZGKHobidiSisxRNchsaVjdk2yoyHdYDGnxqw",
  "key13": "5CeyPADmNNTAKW4aA86yKrncAiB4m1j7N5yyr2hXat7b21XgoqpghR3SarEc9N1DEGdHKFuvk2CMw1S5ipip1aHi",
  "key14": "53n1Lx4cnXPMfYUcoq4gDDJ2A7gMEA4bh8dAwFkSPNr1jE6LvLykH3RDCXkWtZRGpdWNjLzjGKVZuLRG1mmk8q5q",
  "key15": "2i1bcEFusCgPuWbE7F9P2tnobAM18yyx6w5FBZ9msGS1Ac8uVkwdctdZkd2RmekVpvSyes4obvUYEwfEKg44WPY9",
  "key16": "2auUegjLYackaVxmtc2KEFd5ixTTP4ckqZXTygJXzPnNRNHBb58WRwHMASSzMedbWfJD6twm6xufKP5SpoaQz4C3",
  "key17": "JVYmgbeaGjxgp1RPPuVWhABnhBrJxereJZ9CQNbFWTmLTpYm82jbxh3HTYZpUfXD2PxjzKaYRgG6zgnmz8bS3Ge",
  "key18": "5xt2AYgCZBABAp2ibVvTNspNcSMWzLtLXsqXXb9wVmJPDY6PXqRXJJVakT2S3ahbaDSxkZzuzmUWEJpwMWX2Lz8X",
  "key19": "581VHVo6Atqn5MrW24bvw3GvZxZZAFiPewGMKS83aF9fJxYxnXPBKcA23ShrcPc6AGsEwhohUXxXaxSLXN7ujmB5",
  "key20": "4R7P98jiZunUpLBNhuBmxgLAMkRfC2QV5eZr3JYKbcFsL3LpZpyMsvwQAwaUAV7fX9No8Gt57nb5LhjwPoWGo8YF",
  "key21": "2UJ5m3ZgGjP4cYDSQsLNaAu5JKn8GV3MLxhbY8PTx5Kiaj4swre6R58Ega96qCMtaQJkoADwz1xBzkFk9ip8MxV2",
  "key22": "23vcMwUbfpx6GY7FhMiEnK7NjZJBncRTtEYB7UYCGGLKD18Gmzx3uB9EbXzzuntZxWgvhpSVv9pLtWi58YkDRPCf",
  "key23": "43MEEhKZtKCN3bujAp78W4BiDDErrvB1W7hSRgEftPznc1KWAj2ChnrMm9YZkQTjzsH1toenKuXJLz5VaWooGCg7",
  "key24": "2gVdTFmNig7TkfNtBHxdAmm6tHGJnkEnirKxrH3EmzW7RV37Zr68F2gVDRbx9G2gakYQgHRXnRYxEUpX3LuRNpxS",
  "key25": "4MMBHj5xTSGMf8DWVBDkA4Fa4ZmGYm6Lmufoq5XT9KYCve7Ji8bncy7Np5Xc7aXLmoxiFJBVqG7sFmvY6oUSHcnP",
  "key26": "UAbYtC44RyCe8erqojWCQHWzJ8duDztAXEdDAoeyjNEcMU3czcaKa7ykAhqZS7RNmDPwVY2YSvHSKPJT3cEnxUJ"
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
