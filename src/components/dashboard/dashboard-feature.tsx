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
    "xDaiSthH4LFeigEAzRCxztT7qP2cBP5kZu6JmWEsnkf6rJeGXmcwqBP8fu7mWubKFQKe8h99skPiHpzn1VUBwrT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y25xmcspyPLEuikr7zWV3DYz8sdyKaMEkdf9yivZu3oxbf3RskCM1R3AqkfgpeazX81Ui68h8BdLLbar4WejWr7",
  "key1": "619fLPJat5mXfR8zpznWk8quzhq2tNkvAzLGyMFTeCdL3t37Fu9kbUnFfzuxqCHu3znx8sQq4SvT9xmVYomyztwx",
  "key2": "4RuFdwdCG5D7ntCcvY2P9Q7rhUmBFVn2uFECwvLC4vDzm6A2aagrFMesy9MpLoJj2v8u3qfWmXQNDPvWsVkpb6HU",
  "key3": "5MqZrXhu9wHu9L8sNDwAW4hSnH17DpTzzZkxCJbJoYk3oaVWcNZeP9Upey5TGWGystxrLHDbt2dUkYT8C6kBLvrr",
  "key4": "4XRPr5cm5rMgGxt8h5vQjiSXPu68DhdDt8YTBJE55kxGhREZDTrARLU5MRTTWPtver6rQZCcFbKHrS77iCFQmaXC",
  "key5": "GuozDq7UYTEKjRWQS7EwarFSq7jJz5qzz6nuyzAYdPorfnUCXrMNyvrQQzW7SygFL6oCeV44GZ5YfYdZL5LT7wy",
  "key6": "5HY1uPU2hwRJYyHKXNUGmfNZA6gm2aiQgHAzzEiF2qmxtLs7WZGPYthdXvHaytH3gJMuE6aH4RpGS7ZsgepXwfWa",
  "key7": "5BJV3Tu5svA9TFqVzomHkXn5XCW62Ko81Q9g9qHv2k4xeDa5bhZZgJUXiATJApSrfNbiwCoYEYxjNHDqEKGnKfqf",
  "key8": "35LnSss7iK8hmuufbFjGnNUqKgnwYwJRG7Ce8xy9NiH8tXwqtZebdpNdu2qhVU8hj7VAqJ75TkdRbqrEbkDpgGaZ",
  "key9": "2gUiNZibsu4XstYWKsCVRWoLWtFuoxRXWtNQR4BL8jgqZLes4zNyPCJEzbb4MnUo8Cx5djc6yKafcgCoDGfFNYwQ",
  "key10": "HRSfZmQrqX9niVLTiuX97zpxanc1sDNQmwpFYGD8obSL9QxcoqXoXgfwoFwaWRUrHhP8vu7NN5jajSYjnidzp2T",
  "key11": "5ZfxamSSbnfp6h96oHATygMEn9s9a3mjLjzV74Dn39HfLn2g3hnytfAWmbF2eGN7f3tjPrbjxDzCGdJvyRXsyzHW",
  "key12": "4x8eaAoS3yqKqrh9MTcnbHGiPo8SA9E4x5cBTpYNyxRKCbtkCSREZdCKRbrS5ZFVnfYtz5hM9KJn4RvUbmdipXqB",
  "key13": "51QYwc5tBvN4rJ5L3xfk1ik7YsanCxRNjzYQsH1TKnAoSG7aymAiPWbK2Kvmqrw2psZgTgouvwgAFipbvEbc2U23",
  "key14": "3g4ENNgZbk3hEoYY8Z7yYn9gBroXpXiBTifCnBPv4eL6XUNsNhJfUGHQamVTt2V1eDJDWHhfG1NRRD9zzu7Bt3V3",
  "key15": "34khp4JoqjittEixyMgQi181Jer3D2c3XZ9Z6ZB9gbpS1NxuhLqSc4PnNriC5yT3Yoeg5SCw4GgxdqtjR7Jnt4Ga",
  "key16": "qZjqyvPQyzGq4azwAUqNGvCVYwrL3tNduAmm4WjdjyiqSJ6ofAeDJyS58nwYxCrdgFRLbyHeRjviv2ECuBZn4Wg",
  "key17": "3ScvY3reSgbbvAkbguFwfiL8X5neZAoocJinyPfQiDvL8gXVCVPFGgBaP6iXZxgwLLe4ET2Uz31GXCrEh73rGbQv",
  "key18": "5B4zMbU8FiLLzx4qXzsjtH68ekPXTnqe18PaCH8FiArAAEPBP3JWBFmSLF1fzN4nLq7hwFhNzF3d4UPiWwqjtXUa",
  "key19": "4Fu4aBWDqoDwhVizNsoDYWB7AgXsWDHUJ8VcmaCwfaCQLVsmLqcBiWUDELZeeCV88gyhp8VS9SBtnzL6trS5fbZN",
  "key20": "5fXsmsECiGykqUyKU4qAobARuQDdxm5epmbiWHc46xn6qU7n9QviE6BTpQ6wDGK46DDLJnDzzzReKA3VFNXetQ75",
  "key21": "33gaAg2TpjByAxn9L51ZHTSkAyCZVZH85955zTib2FQn1GNNbgMH9pgZLky1cSku7LbhEzukZGUMeJTD7w3P4P6r",
  "key22": "tq9qFh6JdUzmce7YCvY6Wk4W24kw4j1qqrZBP1CgDsSCUVJXTLGijtLuTWcGpBLZ1z16P5Ect9gtYxAEV9dEBgw",
  "key23": "25JSGFjW7VXUGDfDHWRoLboaGKuiQguJiBqG1ETnxepW7UgJEpXwyPhjmjpcpQgXhSbF7hN9iWAwmcNsrdh2nHtP",
  "key24": "5HQNuLCzr56EvxeQhWsKaznCBCU9FQ9PkGDsULboXPhdpVEnXP1Rywq6dgS4K7VghcyvMd7CiUCJQNNj9g5cyMgW",
  "key25": "5WvVtVpNxsSCqqh4nYDut9yeYAptCCeFGFTqiHbmCBhZA3L44r2GBtgT7QtV9dEYGJvjM1Xwf3qTrpH3KuSDUSMd",
  "key26": "5Tjap5anztpBv56MbZ61LtaKcuFVoKj9tDGYxkdPCjjKzkFHaMs8x2A7YWknMmSdgNphvY3Txn7dCPWS14JjQgup",
  "key27": "KVx3PuFAupPxhmB7ifqanfi89a61mkwMJwpFdSiJP7sc7eF6ypBX8kRA3sFySsnyjUdX3E5AK7pLtKdbPCwQvCZ",
  "key28": "4DyYFaSyYfaj3LRGbMdh5U5tvfbPrBEhSbDnW8JoPKY1JXPJxhMyBRLtXn6AMj2WNhSXrrSbuwYVSQXYfNfnv1rB"
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
