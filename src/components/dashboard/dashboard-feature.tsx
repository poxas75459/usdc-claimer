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
    "41sdceggFb9kYF9pApCmRrWbY5a7LpoScLdihkLEML7ZHtGuvV2s2qrwKyAi5CKKAmEjmBEwHpiMY7HoiCmeq4XF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4grmSfLuBzynEKRg7MYucKFNpesKLuGUUieh4m7YqviNHfLAVcQn2FTmT95bHm57gM3zqXSNEhiXidguX6r3DJWx",
  "key1": "X5KfQyhGJfGcRatd9RHMr9zpXpncxMqTioG6k12FK4HwmPBChAWSsQ4ox6h6GZ9GjxPR9r8y6L5Y8VGTU7nqUce",
  "key2": "4JdDSdGA3yn7X7dVR5u7BjVQLd2GfVV419XDb951SDX6SjZFeogAWykN6waqt1BS8EJPVR4FhCgVzdqqzV4AAFgQ",
  "key3": "3aQwhitNRfrGuZxZW3A5eXgR6j48TJUkJt3P6dps3juywdpcXmgi6Q7AE37qBy7hE244DtQwub6JTEstT9HqKCcg",
  "key4": "r4jzFbgM24K3Ew7gru2taJzztfTzw9wzDKxrSUSCMHiz9uGXUDesaXy6YNQUGA2MdYhHE7Wz8hLH66Higj3z4Qc",
  "key5": "3rXKFZuVHcH6bB5PqeKM6NH1mTBQo5jvkCM11HY89SLn91VG2j9VbgTwFqpCjrLzCr8fuBE6pFYFFtjNZDweZ8Md",
  "key6": "4BXZgKBAXShjujsxactmGH7fgKdN63iCQE9EpAir82zUPHPoZNT9MWwzN9wBwSr2GVFsmog7Jmj537QKc44dZejN",
  "key7": "4ZDjZJBQvzzHFYbbPKjiXB6zQXeSnUadM6bhRDZk8RBK5LcTJ4FiMngb16gVE7n8owcrNqDcHBeFZWsNqGb7LQyu",
  "key8": "4L2eoYKTxUSaznyjdp64PcC8DoFYohBCkD6v5PYkKPFPutEqkAwX6BDk55eZFTd7F9Ka9faKQqJ5vHdW5QVwgNc2",
  "key9": "3K5kxYrSbvzRyaq7sHGVfY1vrZ24orTMGFMxc2kgXmyMv63w1zgXKg6q46ew4vyjSwHT1cEb9ZrvKLnx8k2fHujF",
  "key10": "2XLfkNKHckbLJghNk9cALdXq73kSjxbMp7iyYdtowxrciSAVDGDUvfG39rp39naFf19BWGqb6azrfnyFbJmuzpCk",
  "key11": "218xaLeDmk86o4srxmHR9p5J5ZPGUNDcLDmMTTL32PFxD6ANnfyRyCtwL7ADA7PXo85tMGH4YKTTXV21GXpVLsR4",
  "key12": "5Gf4V4J4EPxQu31Pw3dWiEPNeQhEmsaiLZTiRQDQh9Qwa41jb95T4drHdfzTodrAcVTcVXoqvaoPrnELTsmw5ynW",
  "key13": "WnNLktn6j5QQxPcEYVRq8e5dLboRmWmFqzz9ixy8Aq6GRqAKXauuudjUAjaQHLxdi1oGHjsky9U5UDibm47z1fp",
  "key14": "4J1ndTCrrPvQoHzKkYKaR1bPvXRobjChAQbaxJUKGU24tXcfgtss9pdHjzA5MaRzc1eheS7Lt1c7UzAbaQNSRNkk",
  "key15": "4hdVGnWbea4v8UYm52TNi5ag1PV4aJDYEofikz5tTCN9RoYzHnKFLJFXfXRNLmJm7iX5wMDdGopjwno7hWPPjkpk",
  "key16": "GH3xWu2hHYzPvtLX1aED2EjjCJ6xQz4o5fVLRNeisjrYFFBStt6vDm7eedubva1CqUvN5p4NCPnFBE2gWi68PXL",
  "key17": "5MnxWWJv7vLME1qVKgtXFddWWc9p1fRbvZobfUd8qRq7HkD5wFqP9KoUKY3btNjtqt289ddFD6xV4oBkSnPS6eho",
  "key18": "4oDs3n4bPrrcf3FvYknRRkL5JVb3k3BgpkM49io4bx5YByog84Qrx3ZRPjcT1sPq6GCrYMwyNWJyfd5fiSdUc9Nv",
  "key19": "4z2Kh1gPhaTcRCkhwjDTRkCtEFtZduB5A7NXY6FNny1RQryFqJzJcnG9FpFfodkb3Pj1HPs5tzSgckgiHADsGuAB",
  "key20": "2Y9RbHsnwSfMJv5BNMrkA5jT3Qe7ByUYetKU4vEJpHjUEvpXfNV4o4JUcARjLNVMA7GHReFN8NCACW9wAyWyskKV",
  "key21": "5LrzH1d679mg9EdtkL1JtYsNxRqGiKpwpHUuEWDmcYePR8vsJANsxTCC3Z63V384Hce5MzZD5Poe4eamBQ7X4BRi",
  "key22": "4swYbda4AejqVJRMHUMVU2YvWjgikEAoagbZz722eRz9899gB5PJnVq6t1ZpvamE782fePE2Xq7NEtaGmmuivkUr",
  "key23": "3NttGfHJSoYTAa9nbvP5yi2ZRvagTQsyDaZ2dTZv5odEuANwNKBu4ojkKovyTZrbm78UEKEYc8nK1F7XziFW8NMR",
  "key24": "2zKY5m6YHkrhyyDsoNyVCFTgTDRWdhXrbFr2Ffp2k9FfzXZa2bzy4yRVc6E3hnA783nm3serrCPSYbfNgzqnf5FQ",
  "key25": "26vnWmDBo77C89YtxTsurMG5byyX3wWE1uh8nFwxPmo31qVaivr4CrdraL5gVN3XZdC6pVKjirwN4j21PS9Wj3tn"
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
