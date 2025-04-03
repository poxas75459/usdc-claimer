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
    "5QoGq6JfLbhZZCP623NqURcvT9HwNXfU7YPV6LLp5SnG1NuJi53KT5Armhif2VeMKWW1dxZD49oyTHXiVb1oudaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U9TwwLbR8KYLiV1bwo4ro6Hd4FxhivSeCnkUHu81GKM5pC9R2QQz9jBCAaEF7eXn6m66pUSD6UJAca1wA5MAWK7",
  "key1": "22iv4Q2AEzjJJdWEJuTbe6bqf6Sr9ZZS8miBnRZFWAV1MXAkmZAYPNiaNZkGM9VNpUX6GS18ibkkdT1XFg5JbtrD",
  "key2": "4QhtKK2fb7kuWDH33CMqQsyYK9jLoXtNwQ6VkirUVEhr4hBY8Mr3xtYtQJHAtb1iuEpJToLqFaXBPcgBaPCKBAkk",
  "key3": "ncLRgvhLuW89XuvXDQ4vRmMHLP34iCwVMa7dcnLWyx3iNsMuWKnMyABykjKRBpQDNRDPq65bJkpYHbV81BMMuSj",
  "key4": "2WDdBFGZens9J59Y45pYsauH4qPyPZs2uLJTHELbkZwgGobbo7KXhUcmeS3oBvS6MrTeySX5pcXEzCyTqTFEATBp",
  "key5": "42N6ZPNv85USjryDs7gbF1eya9WJKHjWDBSZdCkqeNTFVUDWzNJuicARVQUAcybM7s1JoqBdgExZT3GZVuUV94Kg",
  "key6": "3YWwHVr6CTuk3w394bFeo1YwvusXNJD9z5KMoUCCUDWHLfqMSMpCBo6fFed88Ha3JzLwWNd4arQEvYkbdTvitALS",
  "key7": "jmCFAvmHRshqMyhmC1iyAsLZTHf3Cz8hCfZkGTzhg3VT6qpsQrqb8rjGihmTKuErcKj6Y9uhgihtdFix2USyTwg",
  "key8": "3vFdSTH9LPt11byKLRRehgY5R7fyWB7N8BnNrcrwXZN3UwybtPyixS9XdUh6abhyJTb2dZio48ShnSSrkHRFkBVr",
  "key9": "3DJmdi2U814fD6iAffHjXN4bv4PR5PQP5WRTfzVBiGSRBbrCHthuaXHmMqFPCL8UsmdFpG2sUYEsSJbf45zX2MYM",
  "key10": "4NHjvReh1feRKWf3uTTyZf1XRJhmXnMA6Wz5GbjMacAmMAzpd8Cd5AXYLWNU9pmm89CBXFZpZACoEUZVnPz7Qm9K",
  "key11": "3m3ZbXYCH3XRgKns8T5yEzP3zXQ8VniYNEKwmXPpvAny2XNZSemupKnoeNMNLMiZ2BaeshzwuUMVR7ByWcrcviv7",
  "key12": "j2RJjct8NKW4v8usXiMbzpNnGGNZ2mxt79S2X52ZzU91Pvs1w6oWoRCSr9aqWfkZV4mxgSPq2HtFSBmQLarMQrt",
  "key13": "55iCh431JeF6tkdtncrjtSXajwAGi3HZAh3YwNunLtDfvQztHFC2mTERgYK8H7r58jMDkotwA7K61jV3oHpVtTSW",
  "key14": "5iKHKgL7g8x2gxRBqmmCc8roRgeGrbzB5nBZB5MT3XqWfCHnb9c3YLqip58Nb5AvEk2KrLCvnTS11UiQNou74Dsw",
  "key15": "3iFAA5VY2HhmyujWndHgAPh5zKSTKph1RyXW3iTrAksQN4NWrpFuiMeFQ8dCHvrtGVu8QLXwxhx2KqjMpcA9EaYR",
  "key16": "4LuvmbLfEo6ZCpsE2qSEA5Lw2dfrFShKpx8BaazRJUdmGQtDfAY3ac1AaghxrfD5mR5s4pZYs2Qr5hsk7H7FcykC",
  "key17": "ZuK9qShX8XhVmCTuPGDNWfm58HUyMxW6jQLEYfUk3emdEzQ33Bv62EHUGLvw3XRRHNsk9WsTEN32eMDiz9vxgzU",
  "key18": "4Wvze38NYmhoPZtKo2qv1q2xCUDBopgigTJFiTQj6ht5SRojum8QaLNNwobcntHisGh9qmsyj1uMTamwb4nREEJG",
  "key19": "5VRemJyuYycvVKh6FkM88SAPXa78pB45FExPjxvqvsTWgbLKhz5npGVZMuC6xj8iEuj7UHzuhZijmhdKG8qqr4D9",
  "key20": "67WFT3TBBxd5PiGuT2WQVgSymmRYMx2RkjN8GUFWNCjLvhLyVDgofMcZrq7B4XJff9Dn2o7QutHoZBQP6hUCn1Nk",
  "key21": "2NxApHV2VVqgLtxtZ4FxNfgN278DMCczgJh7wjYWZdM9MBWhTBVm2fvQHAZjZaM8TSKeqRgDjsfgRD3ZQpixY1Zm",
  "key22": "1qTSGmJbUtUyDU9DS9hqx38SGjVfqtXFE5mzRr6HXrCZPETNKQbhd2S1Lwjc98scPM1UhHzhXdKxtD3BpQYKJH5",
  "key23": "3fhvKrADpnSuFGd7KgCjoy4tTaCWroDGo3JpLUQ11Y62vMSeyw46ecRgF33tkfszRbX5QJYSpaGY7swbECtPUKJ",
  "key24": "EfdJidqL5STpWhSmxvxYhdFkDgYK3Y1u4gkH41rDwAA1kb66trGvLKEbDad7GAVLhZaqTa1iaxNQRpHE2CR8Cad",
  "key25": "2yr7VuGrxoBuVrqShmi2cJRq6g2ZWzaqMqbQLBPBfyMQ7BDL1wSZvMoJFkCKbNpM5899qv2rhJDzCT9LkMYVHDhS",
  "key26": "s84YkwJbYmNoRZyWxDKor8o1gV9bzbXjoMPmeyVN3HPgkRGXVRvA6tG4BHptkyEc9gS6oyDrZsvGa4ReeAEuzht",
  "key27": "4VBAkdr9vEHB524oQQjwrdZ9aF3Vf5Y182eqN5cYAjqpcUZjWy73pL73nLTmAGM7cVEvxE21UXef6tBSbUVu5U1S"
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
