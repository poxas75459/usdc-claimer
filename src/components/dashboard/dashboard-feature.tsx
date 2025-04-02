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
    "4BkuUv51YnBRFQZpMqDKS3M8ZQBC7bk5eqVfvkxrrD87kWii5BeEwjEsLXq1S5kKkWUQT5PcjhjvuNDhBgBUnkEw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67owRn5wUyR3dJYPs8uW5ZWj17fYk9k1PKd2qPUBsGAGpACyz4ZGczEhasNdoi3MPkMf7fxW4Mn6PqB5c9Gd3oXv",
  "key1": "3PjydyBrGdpAq3ix72JGbRFKnYmRJUBcze6zFdhaaDejk5fHm4dKHh3mVuKeenshrbH8vNc1RhBsLDpz6s79QB38",
  "key2": "62Bf18vaTUiogD7pSdWZNCZ9rNDpUpNYYkBiNMzv6ggPHDeUjJCttZV9AE1LmSY3f8VZqoDe6kEiKawoedNEQ2ZJ",
  "key3": "WuBHC8kL2JaxY7XsNScKuXBa6GUiws2nSdtZFtYUpYyqdLnRrNyLb3BA7cno5xVoo2bgvnwChFNNbouUG5NiW85",
  "key4": "3vgf5qiv82cQE3AUwC1HrD5XvJRMKjkPnt8y4Y7YiW2PDoiRznLgN9KeN8dKa9U8tounudSnNhVoBByL5Xj2eAJS",
  "key5": "5M8LJAt1UbLxDmxYp9pVjWrUXGFUQ9wGqjdaAFL2ksUgD56QF7fi8PGfPT399XuNsgGM2TThyG6FaPENsUjmSS4J",
  "key6": "4C4EfdpTmNudi3zsMwMU3B2hwSh9tH9USajGHQWKiMo9P66HCqegtcmtazKSPqir7VuVAohgRJKNVrJXZucajvnF",
  "key7": "4zY8uL19mrT71rS9QrV9QBbzvvYneaRSWbse4Nj9is4CGNG6gnAm3JpxnSXpzsQxEL5MZC46gJSKDvU9eoTjwq3m",
  "key8": "tqnJ3pzZSd1NCXRj62TMHRWLH6rXGDCuypTLdfPtiWDNPVos2fjFS3xuduUbNtxx6q8nPVPyojt2iEwYnH9t1vC",
  "key9": "3RhuiAMo6dUjBpGe21zWg5UfHGH8AfpiW8RwhqohabN1eGQM5FCZ4u4dKHHYH25HN77Hk3DJMqHA5c3xyKV4JeSi",
  "key10": "3TxGRCDrPQNxeQ7SDG9Ypv4jKuJWW9KvKSC8oPx2fQP7J3FSHNTZDkQfaF4xNnobcNTMAVa8NtMHHQvGLTtTyuiZ",
  "key11": "63ho97G4A2SJaQMJaJRdZVcE1KKgvqrVuHT37wAeUEXnPyqmd4P5J9NuexLcATEmZPvF14hZZZUe2vsaXb2rJ9MK",
  "key12": "5rvs9NUdDRJLNfKvMdhi74tzTA7Ri11axjjzqSDSdhs8DKEFuDST2UE3WQnfoGrGiiJDmsSNaM5mebBKNN1XsNnz",
  "key13": "5ZkTRaPbUvTSXc6V548h7sApX8EJJn5ajNAKKraE9W1apNYFqUzUoPPbsvXMgBjzNWk99ENqgb3V4cux41uKAasz",
  "key14": "4RjKmah4V2E8QW2JpFxCi2rVYRMBAXqxAWnVuGeuTnrmEh4GsWmTvhdpfZU2BUDyYnUGiiVMN9tRvDEJubgTe4FK",
  "key15": "5nan599UwievUfJkNJWfgTn9w6NbuDbDbsLiVBk5rpSAn4G3BJbWH6bxUHdzFRWcwb2DA5KCUiNwsTp6LvyJ48AH",
  "key16": "25QAdPcmMPzMimK8AhmHj6B6Nk8fur5w6CJP48U11KyPCUqVCSUNz6FarhkNbmTH1bjX9HyaG21NA7zcaB4rKQfc",
  "key17": "38m1xLL8JUvbpozE5tycuHkqGWFQyfD2kX4emL4kqK6akYq4EjuMDTMSTj35ovGNrnENfYSVS62iYoTkR99GQhDn",
  "key18": "1pYLPAPnoXDS9VsSmbvmnCJZ1owcQjE8Tyz8P7tQ6Pf5RvUcu4qbhGuDtNv998rAs6DqRzZUjXsM7MjgZiSJ6d5",
  "key19": "5yaAuzyUxgKK9EDE83aPvaw2RVoFST3HvqZnMppepsm8PpAqdhowkch6AvXmsKtDCyaZJcTnJr1Km3zen7yfNv9j",
  "key20": "5yhFqWDVe5FV1dd6raPB37gwsF1Gpen1YuPaXoQTBYZhr9qVEtSz9u3zUdLWBeMC2Xu4VngRwTtLAynqeC6QdRBp",
  "key21": "3GcZUyu5HwKJtiryiAzwS69pfgWDzfXKzDpRkPmCpnGo8W6mV2WB63UZpXpG9BfEi2c3Uqn1VdXEq5BX4pqsKdCH",
  "key22": "5HnrLibZfBBw5w6nADkuZJXYL2a8jyrKpDZrB4CsoVKG3iB2C9UZpKfiMB2nXZYUi234NmVAjfd878Fa47icxguy",
  "key23": "26tWEByg8jYCEgmEZkGAQ7fLpFsmbruwDGpmrLbnUBuSY2d2bXavvwurJNaHr2spjToCdFq7B7pNPsRmuukqUhJY",
  "key24": "3Z6D8hJ4YZ4B3AhpxhtJWDRiVsDLDRienpGjWDj9HsZJWNt1hgUa75T3Ymb8SyfxnhqELiy5PVRbp6r8XeVgWySM",
  "key25": "39BAq1usLKcWckARtcS8cp6E6yC6tKnWfQQ3RQL4C6Npa5Ep2ppRetUTT84nw1jBpPGEqpgo4RSTfX296kXFnFnt",
  "key26": "59om8E6PsfsUEjFQbDRwde6F8gsdanbPMsoE8vH9TdpZXFj8448AXGYqq3rpAZd4LZLLBrehhamwJSHae2Q4F4mh",
  "key27": "2cLroNMS2gnQzxXM8fF1R5E2fBoXpdDNTQBWmAJuda6yjVHLoN4yzc49c4KFAZ53pJHexPDNdoj5V3SaKs9UbT6X"
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
