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
    "4cUS9Wd8UCGiZiSCTUYEXpvRaC1hgdrYfdKGhAr8pYhJi9UQra5QvEsMVXSBtinzA3tztzgPE4DBGAHeuihxc1cf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RmPvm8NUSJTxu96Wq2ZZYs48CKqiUYvJUvXLZkuCSPQgp4boDxzScTXpkzJ7gaCpLqYvy8bRWyn3A7T1KDvbg1Q",
  "key1": "3NAhkiEU2Z4K6o8hR8Y787wny3XKq3C7H584iCwa2aaXhjHyXNxnPoVPCPERxVQ44ByjgFs7tRmXRoKm9UZctzGu",
  "key2": "4Een4c43njMTeVcFh3c4XvoQehe21xWS4S38Nmtks97rNXxVbJKGQFSsvo8QtDRHZdqQ3TgkeRVbKKtVVRTPAbdh",
  "key3": "3ce3eYWvw359654jHfJ6YU8oY4w8ngP21eJwLRNW3XEMNxUr1SGafcpUgHEkchjtRatVcoqQUNoFu291bUy5yFtR",
  "key4": "ATFhQUnTHKmFC1YxwuUfNaHuGtuD7Q5DiWJEPSc5Xd4eiLhr6FsoskVB1hNiGLcwv6nNGxN1mG9uLtrnRXhhvSt",
  "key5": "5CrQ1JiZJkpRKEfFR4fcJwGr8Hv5AFPkNGbaNSvubLj8CoLUSpgFiVPMnf7Zf9uAyrX6AfUxRRh1WZ52wQ61ibgL",
  "key6": "568WJMrdS6PV2CatWTW4L2k5oxtddDQWYnccbRdbvr4LZvkJ8ZCqBDJzM7v6kVGwqTw77rcj77g5M9n3PVH7oXCF",
  "key7": "3xqjsHqbfUB6jGbnWLtiqL2KRrChkeCsQyEBPExW57PgVvaccyJbMGMc7FNZHEfKDLfxFSoeV7wyfiCFK8kKQC2U",
  "key8": "pg9hPDevPNGZPVa2QAf6GkWrYkHuEX2RSh3NAwohgy4VLZs1CbKpnVpNNgdqwGi94ytQkyXgk9MhxWUVEWBXV7g",
  "key9": "34UVLcUV4E2KDTxq3Wx9oHHyDBiSLkFNGyvwoLnJ5v7kF7hwGk7vLadUgJnquAFMqBiHmXghZyNP2PRNp4k2yx6K",
  "key10": "5URwfsbYwkGDZQQBGZbsg9RwQpD2FNeXgcje58zyFLoUKHgfKx9YjP6Msi2r4bWPCCEBeweotshNpY1t26jcPaxY",
  "key11": "J9K2hYSitr9ryPUPJevAWFVUP7iChpjUaK8ebHbgC8wPDvkYb8rCf6c1idvhBzRtb8Dtxvg6NkHB9KD4yHCeJEq",
  "key12": "5niEStj6Ws7kVmPRmKmYjsGLaYNtv4MNn6Kdx8AWowTtui5zFcwDVs5iRqWY3zDkNJLtE9rosLrfpBAzJmAFsU1S",
  "key13": "5HSUuBjJV3v2JAoVNcRjbPw9NV3dm9Dh5RdWEPtJAnXuoX9TFM7Nm3dQyHujmqcUAJq95osfiXZTpzr6bhk75PNT",
  "key14": "2J5kCdL2d79WmBHToqWFbKHX5RzeU4Ja3EfVoHnv4yjR2q97otpGu7XBWHTJJ2WnBwE4b8x38n4nsLfneR2nAAqF",
  "key15": "2AUy7Wgw6K4WQkGJbHT8hrk3Td7FbwNq3kaUgpCXFAKo9csu7FuwNkd2F5jEm1Jzc7LkcZYhaQNA3Tf2yT4JmC64",
  "key16": "4XYrookWUGSXP4dRTpFAHq17T9Qb5i3z5MAbPJnpJdncK17aBThcuVeMQkvGm4oGK5brbkrXPjNVspxipHcjPFb9",
  "key17": "4eDx5wd4h6MEc6HwjL2amiWVJzzzXmgtFCnnkwNVtGLk98gCgAD1Pgxr5drmVizpjLvV6TaXJTgAmovAJuq14PYi",
  "key18": "5zf6rDC84sVyESonvKwRx5BbAattirzix3AKWscT82ecWfPqkFptyfg56EbhecTGPTPphLdQa4q25M5rTU7vZbQ9",
  "key19": "VLN1T7KHj9egLz8Af3tgjtDEwY8iJpw9Awv8ZbnrekUtzu3mV7aMRikSEW3QcXx8pziCAGTEsFzY9Z72E7kBb9x",
  "key20": "2bk6GCeUaZWAPgY2NdqBXxV97tW2g6nFddpEhqKdCuswD4AYpAsYV21hF4CjodsbZkf7KcCc1PtsSMsyYu7GkJQz",
  "key21": "3t7MaeYtk2ikNHR4oQQyUqtUnu8Y9a6eXjpKr3rhbtMEJfHB85cXfZH6suECQWdYa6ue7WWdTm7Q1S25UpdZZHe7",
  "key22": "4gkviw15XLMdQLZFuWWgpqQyXvi61Tb2xj2TFqxg8ADjeA32NYPKaaAFpLweq1qFymufPZUffHsiSVAcpLqmfyFV",
  "key23": "4G5u28rTj7fvja4Lr2WC5b19K38eF4tsXUhgWwRMmXjUk3qpv2uF2PyShqh8yeNYzT1kR9VkED94zv6EViyUc1q1",
  "key24": "3ABcrA7gsbXZx7ts5NNQiRUYfvNJ9PsoAprNpnRt4Wdnp8jqNJoAVhRyrpFC4aTxLzFAPsfGNiUKfkv4gi9vCJFx",
  "key25": "4o3yWz9Fez2XAj5qUNdJ4Y4abA6NKfKLEu8aBAbCX7ZfRA5FkVhEaPhqxr7oWDyyTBhzismV696PHFya6NXc1LH9",
  "key26": "4FbWz1k8Vq2FgChDuz6KAdAgdvaN54sGJdxHbKSxZJc6k9UrpUABWm1szPdz3xEDBEWd6dT5bKYjURyjku1PPPNH"
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
