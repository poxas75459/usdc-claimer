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
    "5AkwCU8KgqWkdgDyfj62KJuYAsKMUs6FL54scv1f8DuyPWUZwZS34y8PNko8KwL7jWQs5Fo1SLQ9X74v5cki8CFB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NWSCqghkjv6K6jxzdK3FWi9CNMCaVzbPxMGsXegrHMkmD4WVJ2o8xJGxVNrtwB6E5KojwtjEmbt65qW95si2uft",
  "key1": "Y8aPzj8caZ9U1v3xqx2s25PF7CuuSCz6NeQiAqpQpzww5bHZkUA76AbGzyQqfUtW4SLmY1aYj2nX5W87QpQjWFi",
  "key2": "AMpN3zc4svp3iMqvp48oryh64kFanyPvu6YGXrnn8x14n2cdfEbqEVqTn1238FKhshNZ6KSNoZjmg5meEF8e9CG",
  "key3": "3oH156GLjWgSbbKAeGDdHmSRWyT8dHKbro5d9o1Q5b5KQitKKS4QPaifJhNrkwGDvFrDvVVNKP7az15sUVarR9X5",
  "key4": "5Sks7pCGr9FTPtPvkJJk3bt4n8J9TtjRBcoSrxHZYvbPBWsUaiHDXsLvGjfibG72GQYAfc6N6ZBgeVHks1qS6w4m",
  "key5": "5PtnreddiW4VfWchXb2GoYd5UWRAcy5aeDHsbCrHdFiKUkAbJ4eSH6qxcxqnYU7uFzcdCviTCCyGq4fs78Npnoid",
  "key6": "3GhYk72ffZ9fncbwZVqbewVhkhet43htdUgMNrQQV2Tsh4o44d2LsWvz529BnBkAAiUgRecYbc8J2XwoLVTAMjXR",
  "key7": "2sbiBNasE2Wzp27Q44TNQMUPLfFuip6rYcnFwGqJ12K1MSnps36KyqP5xeTGDgGbeUogEKoquQhuoCoSfBoHwN7m",
  "key8": "61xSSdYoZNGx4Shz8kEFn8m7CFHFsjYkNkbq3WiH9WQ6jodFbAkxsrFFVtcWb8prD5kowTD9vBB8auE6QxUMnoEn",
  "key9": "525PjYEAwJCbfnmPn1TQwkTbNDUoqCG2PRhr1gnRkB73Rks2nHtvQHCKy5RxBymSGd9rj5wBN6d4kR8NawppydEq",
  "key10": "5ia6ycNVjMxYVp8qyeFv8wjtM3NArG64bfMj7s2vPcPe74soaP8JrLCPYAGE4jigLRDzXamfzrPJ6PNzqg5UCz62",
  "key11": "5ZqivJXTP9ctE2TmX4zSbxpzANc4F12MiURH3WWdg5EuBXpZKackej6xSYwrXSC6DPMD8F2veXwcNT1BHuzp5dRV",
  "key12": "53KyTbDmRpuxhB9LCHcYZRWjVRq51QFzMLMh7WYEBRvyBx8P3ojD3dpDNNfsBL55G7JLij4t7VZv9sqKPauz9vHp",
  "key13": "2JySE34FdL2a5jK5rJz1hB3JcpghGxnVXjZ6xXyPL2and3h9qGPt3cvsegbsMZRmTnpcpxUsZ4umeTvXtQapLzAx",
  "key14": "3FngztFBm22L4u9fEZnJr2XQh1USRZahhKHCWxFRy6gqkQSNDSZukCSpAcn4asGHfFrQaM1PyLVy1dw2jKQ26c3y",
  "key15": "3qeg8Wx6D7obRiLA7uoshsD8RvfioQ3JiG3azX1wrBDe91ap55V7i7m2P219NKAsuHCRxBvVfMdVbyhgNmXPvdGz",
  "key16": "4HkH1CydfCPjYHYfYaD53BpNW2KT5TafUhsiW8ZfJ7fEcAjknkCx96n2JDYEjfHpte1inRqLm29cRAzFqwcgp8cu",
  "key17": "46Ro94g6Jfy3iTULPTWwLt5npkp4CHzyarXwN5mXrbKdwknMwRfT6mWTBiRy4eZEZeAJpUc4sSZkN9ibYeYGKYJa",
  "key18": "2zHtVFFbrK8gbRwZAKsaRLesqPpodDmzAWCv8XBDhQCoJT9ACDP4GnH1FAswnY7Pi5DTyhBAFGme2Sgn3cVvJCw9",
  "key19": "4rVT6zzNRd7DQspPqa4QugLZBJQNZBComUmn9ubzyiqzG2k8akFvqjD995zzAhzkQNVCSsrPzZRUAXQhV44QaeWh",
  "key20": "4M1yTNG7C94SkXdovFGtwDQJNFZxjBubV7Qb5PeQ6TdquoGhKNPJ76J9xSMaoZxmsKkmzNwjPz6h3aPzS8CGkSJQ",
  "key21": "39ruYyahimAb7fe8poyjxmGumPhCHS4LgDKgdHEyoGnSToNFg34KLhdmvyt6fyBgeTf19Sw7LBi2KYGZ1Ghmrvoi",
  "key22": "5fKUSjQuHcFMLFWDTGo3e4CaL6PwhRyLcMxMuD7ym7vJAvMt81v2k5FnAtoa7xrouJthXKV5vWrhtp1wXYq9Ru44",
  "key23": "2RgKofzNwcbaAhx4a9FuroBrDP1KPcXBJ4zNtrhxTb7hDT31MtsL1zBTNobFpXwAL4N9HCdo1pZ8qxLUn7aSHwYz",
  "key24": "3qusdyyBFTD2a38NE9fkyva5soMpanJHtQZVmy5B84BBHzS6tdX8MiT6ekRe1PsMrcNytTaKYtDJs8uokLWWVGZu"
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
