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
    "46S1qxjqJ8xnNQyzr1XbrZ8g2zGcFu1NVysa2Jk41f5FqRWJGE4YQja9bexQFAm7JC8Rmco7B7UsmahoepmA8nEp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CrFMdSHpT8wi3LkXg3EWugemwWDN4PGJAHRQRQgReycFMVooQKF75QbnNH96cPDtiMmd38rRFMUuWJriGcjvyJf",
  "key1": "2JChPpEUWLLvLSHjiH5QuVo73apeHe8G6pq9gA5TjwPNdbRkJfGrxE7Phi5XTb9maDP9wnHH9oJtJ3CHntu7tMse",
  "key2": "5wctGFEhtnqptqrPn2kTqc4UU8fNFxACqfWB66grkkCvCYPBaB8ghmsxc8pkx5Bb7dwmut1THdP1AfmLfEVhLNKd",
  "key3": "4xcnANpDWJ76iGBZmt9fZks2kDEDjVH67WpSHCqU5dZ3VZC4ZFKdBHBHMq5oHnSbXwiVLBdaktyW3L4PUzCcdpME",
  "key4": "2MQWkN4gdKGPBV2F2QRZXVjf54Fq7JDQyzPJdWDN26BY6rRFTwuPpPCmUvkrvNQoaHuPFFA4A7gWjku7FDptDkhk",
  "key5": "oscBpHc2Kcwj2xNSBo1w2N3Wpx4Sm1z7NqB5i27XR7LMpQG3D1Xzae63gaXsSy19urwFcZtv9uP99KpUEZLLX9m",
  "key6": "5KsbvNg4fJZUnbEKSdtc19kMWXdjvWS7TPAsMuNod3xRK1JpCHuX8U6vbiTcovopaDcaTL7EGozvC5qjCH7SFGaG",
  "key7": "6MZnAAXvc8A5Zc3mNMZvzrZpXNwNZF62RnsASM8yuXid612x6HLitFQGcz99FWXoMEDV3YfFaRxWM6mndwybbUc",
  "key8": "2JY6tfLo6ZvjMa3GLMLHFNvYbNNEYJdBXrxH5qAWWDG2fHYv44HygZcpUybfR3zeySiLUWfjtiQLPo5r3fKpf6cx",
  "key9": "5BwmUv6aupsziz7oKm32CniobZap1uF2wsJYtbUk13KVKwrXbSSKLKVG2U2QJyK5utW46GW1wnohP85WpMyz9h5c",
  "key10": "ijVksJJmzKdwmY7jBiYBqRahA8NXP4TfyvYH8EVPK1wELEjBKxeqYdfxyfoNbZgfhRhxxoVQNbjDdiiz8gMMgTV",
  "key11": "XnV3kHAxDCq5gLSqy1jh2LXDxHgA89SsMYU1tQ7j76FgTfn3fcGbuVhTDfp4pxjD5Qs7ymZWmmq5QXbTNQs6eR3",
  "key12": "5pvzyP2Bci58QXSeumF4vNLrMuPFz2EnGzvBZSFX3XjvE1JzsoYubp9WxDQMmiHbQWzirSPYinK9A2AiJ7GkQAXz",
  "key13": "2haQi7JctkVYdZEbzA1yQoqdANz42GgkGQFSD7nviZtTqTsEg2hbzEP1YdUnCibwQ7sQQqn4TLLvQVgA7S8s46CM",
  "key14": "4f7p9fobL5ppdUQaC6f43fSDMLw2zV9kdY3UAojND9zZtSDFGMrgtZGxcWcZkUTVRdMRYwZW7xYVqZ4iM39DKnk3",
  "key15": "5p4F4oY9KpPnMRPwWViVfPwMATz6zq65vyNzWSjUSi2j8JkKswJqdBPyLdsadop8nNes57i52997Tw59vDLWDmP",
  "key16": "EyF3Qhmean4oRmSUertEBr1DQQc6sVuTDZo6UNHednrENzG25magfVkrxbiEU2XevUcmLEYkRvqUqZrZVEZBDzQ",
  "key17": "4WZnTUt6oS1z9jLYJCzi2K5HqRXh6n2W6LGapoHtDERpjeMVSMTcBpZvQ3rXmQwEBR7r7ichsW4YqyuTKidgoXiZ",
  "key18": "5P5Krc755jLggTF7WJB23Fvb2G7irKiMfJfe3N1tSDRxj8TKbh3BzNVzAGb3sE37He89tobD1oE2GvpuZQPBWi5N",
  "key19": "51ivtMqn2DnY6DBo9Yj32XdZnwv7EBaYHVh2JvPZV6RYE3FXpm51dFLtNtAEL8nDTbXj9CrgfyQpFM4bQcLFkRPE",
  "key20": "4UDTnvztRApbhFA1bk1WgBnhWhJT1USYe6kBXoKYXiHtjKRt6yeXMVGpJJ7ZCLvkZLMxYiogBRdDgmc8at7AcMsw",
  "key21": "2C4SAkVjttR2eGxreh3tYGb5AJhQYqKaHJL7eLShXs6MSJv9nL6fvFCecPDjYv27LWKN5eA6JQhmrx89jS5rSSju",
  "key22": "AKE2fhHAP8esFqjmTKZoCswX96rYZYbc67XFSSz8gMP13zVQoVbEoE5mEuRhna8ixA8zHXwnjPC1uJuheKTjjt6",
  "key23": "4XK4JNrZKwsNbBUrG2DMPWxeN48NgHaohvRwjNVV3BMAzCCL91YiNZxAYD6rzhSdRScgtDfTT1WoNNY6qjEsKMzJ",
  "key24": "2wzpfwP2Kr8FvkbKxAbNdvS3bfPPYh6CiL4rGEuQtuHJnbkEtJcE2CqVAPGfJYPSHr7tSFbApuzHy2qiy8uZYBgr",
  "key25": "5q72bSLXsWPQf77Zjvg6yzHahAnadaVaiVQdPe6kEZPzQEsUeetH84pixLCP1w5QZypkgxRddifaoio9LubMou14",
  "key26": "2fDju1zzgErPNetbLDpWPBE2SazjPA44hSwhASB6P3W7P1seSxhYryLowCcPJeDHHCGYhp6rBbgcQBLtb1LX1od8",
  "key27": "3Rnqgn6fp5ys9btPq5nQFz5armuuuyfzDvkXbfF41TKYLz67LY3ysURE6RU2AuEFjPaadQ8umwuVUcQ2Le6iUCYs"
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
