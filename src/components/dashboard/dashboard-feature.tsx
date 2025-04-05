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
    "DKAgjJSPrTreMgpYTenKYc8RhtYvP5SZ7rBu6X9L3Gyv32zWwrLQpnRReqxCnJEpJTjfYLcuoGc5RzWWLbT3WJh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36pag1r17Pd6FRjDDH3t8oM1KJYvhXMef4RaNhYub4YYybo4NUR4dTrdBfZiDbTxyT9YyShnjsmoAtz7ru32Hxno",
  "key1": "5wpGyhE6Aa7jKNKfqipLzSvvxNzhuYku3yqhF3mp3uo6LZps8M2NH1UN1Yi89sT2r2ANCCiQVzub3sRBvkubRjxq",
  "key2": "5jRmXqWoBPcrwRpQ94UPLr9abMaiyCw29CkV4e5ayYvJA8mRvRWKS4GPxD7FUuTU4MnxqNy6JPHMDaPncp3Qro7A",
  "key3": "nAkESnKwbwPDscYsZvbERKVNF1kpdmU4b7LHkP9uVXJWkxFvNVvfyeFBT35A1T31dj36Rt39tjPKSftRmuKuhYp",
  "key4": "3RFBicEGdvhNTaJNuRzK4zDJt6ePgyZtNxeLjvN3QoU21NNc3dmDEvE4o6G2YmFyyo5jZbPp9bsh2rUzSNpvmrgf",
  "key5": "5wLozVWNWH1sYbCLL4qrtWvPkD46Qbq1iU7tcEYudTZwK4LJXH5H6mck8yuGBkieDkiPoskdcy4vq78BteLJocj3",
  "key6": "3zX3VbUpeVAvh7xbxj9QJzERyLwRmxUvkMENT2XdYcQu1NW5QfiMQKnG7GEoCbxjLgz6ASVfAo4cCXeWPBeYHvBf",
  "key7": "XCGcWoepJcNoguk8UCwYiwRee4bnYHeRMwJNLWRzknULy4rkEbYrjSQszfQFzG93drmAj58C1dzCrsJ6NkkNwvX",
  "key8": "5zszXvK21z2rFvzZKUKLnXJKU1jBZPFHMHAQW2kAV4BAw485jYpvJbp6RfMAhwdg1fWzH8Ds96GPTMHzPPkpmDrc",
  "key9": "4kAPEwens9rQ5hEN2FfwtUx2pAJw51MuYhSZo49arvuYt9DKqWVZ7euipHuFVDKhJke1t5dfuGDjhPYAK672dJ4F",
  "key10": "2zUmvMBrXXLGCiwoDAAcSRYdapYH7k9PfgJj8fJhd3qaRDDXGsHN55VJwqNbGDxm4t1dz6xan3psVtq5Bx6HWVRL",
  "key11": "5GkJ75WXnATAricVCEu9ro33v3S3KP7AFTnnbYAw69WH6wzt8jPgG9aPkCs5mHdTssFCsJG9CQRxZaVPeV7AYY3F",
  "key12": "31xS19ybZVtMb2LHeh2fTDkRkHjMdyTqyRfUMpK6E8zMfk4PKuBUCUMGCPCdMTzvcbNxBmoPhDzJieWEh6HXnhbF",
  "key13": "2wecwG2RrpLA65qr3iGzCnxThUmBEiiEvcP1LArUXXWVmTT3iKppFP32b5N6x6Aa7qH5xFFPMPjAW4h7SoyqsbYp",
  "key14": "5gVxWicLk4UE15XFK1fK18RKGYLggmBunRKCKwd1aTC8WATUfR619RVpthfE8bXw1chwnnWbxaqL113mBpbUCQb6",
  "key15": "2Cf9NHGsHpYGybdWcNMvY5dNSpg6xqcVuc6HHYB8PsRhqpiELU8yN7fTp3EdCt1S8PMn2DuGGBDTJYeGM7nbvYRz",
  "key16": "Ddn7rzmqiWF2fWDseDWmDEa2VKRSyDeCLzNzQsY2G2VoGUZ3t4ARz9KFPhJG7mshutGheAFXH7u4w8od6JjEwEA",
  "key17": "5JehCqDeH2pe8AhUzvgsw8aDBgVw9Ycf74dU5a2E8ALYNiDxnd6xBXzpjDBSNnBtGLEx27enrqWHJp5wC4gwbuzw",
  "key18": "4QWDUBQAL5Ahtham81BBgEpKMzH6xahVqgv1EmYaSrVHc8yZVq3LWBbvexpwPxdd1TExfj2BhKiQd2gingpTj9Yn",
  "key19": "2Mu8FUgsxa727szhW8WUnyYAgbygxewA3PUmtSAM4jr5hw5U3BeogRNZ99cx5M7JxBm8uRyDzQWGJGJGh8kmvo6M",
  "key20": "65pES3iFUghV2P5vU8PBwNELJikXji6AbjgJmEjqcYJwNwoVNs6ZT2zKLPRGLKQyc6mDiv13wC3x5eNnnuYVzedp",
  "key21": "4hAGAAYFHr8XAjcGARjFJf6iDsHy3un9QPLHncwrhnUSYFCHJcrhPXggU8M3kBXumwUZZpxXdvSP281LG5fCD6Y3",
  "key22": "24QUTpmbmrXEjd5EVe1CK6HJuTAyLtq75bvhgUk64ptxKn2PjWAqmT2HiCR6d8pxPyG7akufn9SAfcvo2wBeaSC2",
  "key23": "2ymwhH7ukd521LwbTgYUUuACds9RX5gqi5bLSEZAYAJG16v8v85GiQh8chu4p1z41nJu3iMc4FcDpnimphRy9Box",
  "key24": "3RWdXV5VMrpnsP7R1rZFWwY58Fi49dcyNK4FUduezynf8cGzGgGvsCEdmVSwo2ADCwRapvfeM5gBKSd1Yrpj4c7b",
  "key25": "5ewyeXT9arjSMCiKmZfZ2gLSLrbD21asjFhbH9rtQ3qmGVwHmbE1Endw6WW14cuNmhsFijxZtzDzQuTdg2Hrc7Na"
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
