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
    "xdU5SXpXwapoVcvxXqFCzhV5Y82tCRQL7qwe4aZRUaDnDQkUM3LinWnp2qCkwt81E9BkUJ6ZzhLSRAZLE1zNbqB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zJUuqkgVtukHhnky6oBZ2NHeBsRuPNHKzqoSZJJftF8GVa3QSdADVHyZNDprHYtDNbGeD7teF79xRy3bTtG2mxk",
  "key1": "2Hzq4ehgNKuYR84HNQaJu7wVpRXmoPo7mjLfGt1cdJRHGPAQnQGsSQbL6XukEG7hWgvDMTQ3yhRyEHwbMZs1q3gR",
  "key2": "3Hu31nqThYZFB8Uwkfm7B23ZWkjoRqjpzsrDzy8vp2mzb4DjptNmVqEqFEpXpLs53pBR33yGDX18A7ZcxMp41BNX",
  "key3": "GCzLhYNtAZrQNeXrJzEnA2KVUTv3jJJ5ZVc6Ai2xY5Hqopojakt2XBNusGirwb53QDvVSKS4SMKjtM4m8TFY8Ci",
  "key4": "2Rgh2BWoidJL4tBj4LdiGoAanHFKUFTQC9cLPq2FYpNNTUmE8hSfxREfRDDNfraJdN3kUVoCorJHdeNKUuE33EJ6",
  "key5": "2ZLCGvMFEnnQinhke6jPcfSqGVWzKpEVokz6JwKjeNpdMyFo8enmmGf95ZpPyonWiW9ubRsH3rDopeoso311WpZk",
  "key6": "52QSSoHRMDcjS4tEU8K3U9CciVKCTf3DQ4LGtH1CbeuB6pgKdVyTDDMF7TRJq72WH9876xLwQejkzWk9gpnKVHMP",
  "key7": "3Wgwsgc6w2LmQ5aZTHFuhvmFCKX9Yp2E4QpVL9VM8gEUCoQdf98wNhP93W1EvUafrXdj74ag3VpPSHaAf7NQnG2f",
  "key8": "5wkMHsrUAEkWz2wr7CtwMRgYsoUamLdb5E7RhshJ46hhVaKyQR4DpshjXqD8EhcC4QAxBmvo6tdGov8N5bemGw1L",
  "key9": "5sPrcz8sG5bkw2G1cPawWnYWFtV2Axa1Jo4yrve5BfVXX818ovo5HxHesi9rRR2KtASuRKZb6a4vRWx3WeHQuuyA",
  "key10": "4cjwSHPXeqdic4bn3BssNwLCJFi1iU5yPAvobQ4gbtA36TNhHdDtH5oaUCcEadZpm2d5z8j76ZdyZZKnmvhmj35e",
  "key11": "2ppm5os2PWwV7Z2WnsoZJeHnrSh9Qk54MdasR6arZkQnzwHzwq9XeoeNi2bs3o2LuFCzMhQhi5AStX2rMjcg4axY",
  "key12": "38T3JgCLnqMoa7Qn7dWMRb9cQbCxjiFrsPEbE7tk6A6CXoJzXHDUWMaHS1FCcCPfN1KgYeojXCNiWJHr4NVqLzvU",
  "key13": "4w7XcEoLAE4jrDK26eHYFmb43zhwg8KTyiSkLmNBuLMdvtoiHRBV448GDS4oYpFoVhpFveGXcDpnZ5qxrw7F3hoA",
  "key14": "2fRQwtCN6R7uiSzxgW6R5WteWhazDP6ETM2gAUVXmByQQZtJYmgKdE1MoFVUmduvPTdfXF7gv6xuRAVFzzUGkRen",
  "key15": "49k7Djx3v1zEp2aiKZUCMNspRioFn5TCgWcJKRtJJ27jeLLyL2o75jvAuD1VRkcnVjzycESfToNbRtySuYAcVhM4",
  "key16": "2ZrPxrDwhrbmGKRHeDQ4WqXGD6HdfF21TnWpry81RF8zq7Jjrzk7z5jUdw2SgSDN1BCxFMyLVRN36Bh1skkrcqvC",
  "key17": "54g11B11w7UGnocgwUAvwRU5srByFHgP6V16YteGoZ5Q4xyYPshpaWDfFdGEKMb9CrCHrPJjnDmbeBiNTHdm7tZv",
  "key18": "5mZmRiGzkQm5EhKXMmAAUftvcvH6C1eAmjMMJ33iUWGD7WpThbuWntGnNaEZeqJcoCbiWTKoytmZHymZJ3JLu8B8",
  "key19": "dymhzgkqVGjDWUSZL7qDWef8XQYsRjj8hD7EA4D8sm3tXESb5L8FuiCjsszALWGhKdoMXpS2XCqBJYxt5G86oUa",
  "key20": "Afwtu5G9dVD7asS7s3n86TuAEAWWdMk36h8hbtVxZuZrrYSePoDGbP2tG5GJnehMYL1ps77H29m1uumFFe77Y5G",
  "key21": "FwauPa4RErMnxLZrR2EmXnWj57c4YRDAtgqLAckskJVPJnHqwLpbURij8CrDy4SMkN566MoggUJnMzGd3GZygxS",
  "key22": "5P3UXkHNETXUG9VkobQi6h5bQNQ3JmdfNgr557uiE5aPhG1EWKF1GCt74ZqNMBnaG6Y9CGpUC9LQxstLa5WJGc8z",
  "key23": "Lz6QVqorFfij4bFR4uFVmauNW8Q3kx3B7euK9S6ooUG3UfkJui5QuRERdzWb8jb657cV7J7sqt1v7M26qDL5HUk",
  "key24": "3X1XJaAgDBgPc69H6e838jxwvms8CSgh6FL9tYTsYXnWCgnuc4HHPvEbdXk2bUgMg3Kf3AqgUSxjCwTjyEUdwQdk",
  "key25": "3moyef9bibAgYd55y9fsNkdNaeATS5jVGCB18oufBBWuEuYuMqJBEx8kJfCgsxPTsGexZcBCtcTNbowRwUJ9TJ3j",
  "key26": "kTtiv4rV9Sb676AmYJTq5tMELMhm5Av7ysACZfyG913Fif7FxeTyCnbhhCnQCegcdyQzzKth56r1em9iCDgpkRX",
  "key27": "WkZdzbpFr1F5MqwH1CvTpyVASAYAgUHJsk3JtmehMeKGaW3wNn1RAGTjt8L6d8nHPzjGnuueM1V6eA21Y6zJ4NH",
  "key28": "3mKGP5seyNDnUQo8NUoyyCSuBR2hWGKTMHsN6LJRyG9Xhg7ewAaRiFvAQYxCQnu8uFChc8E8ny25BM5duraidtmQ",
  "key29": "dxLUusYyCyB1nh9pDC9KjM9VLX9cEHbQrZtB3EWDGxL9wgcR9DHQkzMZabAAHdYvQaZvV7E58xE5Xg32nNtwzZy"
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
