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
    "46gDsddQNLMgaPcbB6bG4CwJJZBZ3M8ojoVnjLk8LA8Zb5moYnjM3iMtvU7gUDXnRQrSq9RNP4WKqS7AXkTGWgtC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hEAvLxWSQTF1Y4BzBNMoJTNLz6GczS9KB7DFzDLaUXUcdDUd3WN4ETdFECztu5eofDvD3xw3XxqZADtZACAaY28",
  "key1": "4u8qH4rUuf9eHTv9NdUsboVdfQyokBcpifyKbLD3SRiFem2bihYwAFxSLtnDPSqAQMTxP3FkqbNw2pmE3xPCkBkK",
  "key2": "4ih7yPjLEwXJEZMYc8LZq2QB7fv5bQm7ktWKQ75xirHWhprcX3FJxPH221ue4sDqcBcfx1iLedibs56davX3MZVW",
  "key3": "5BRcgwSym1kpryq4oTLLtsKNF5b4wQjkjjxr56QrxHyAoof1eMqYrcszB6gEVyZSayySZ5icFwFaMSLKiKEnFP1F",
  "key4": "5srXxvf8Pc8UiHLjBCXTfzTjZ1rRoQsH2ccaQVKsmdiL1kD4Ndx4AHGtjTzCtArGeQXqhK1SPtDZWP5Wb6KGknxD",
  "key5": "5BqwYBe4ucggeWXXGxJAM86f595VHkEyMhWN2KNoJsevppWbzNdEd6BHGvgcgHBST5xBXrEEey7T7nz3BxTXiPgL",
  "key6": "5o7Wd4JBeQ4ifLgCLCjBRie91hDnTv3BGyXSvBKjhtUujNwAKaPQm93M6dqAmYwb7g1qvygG5t6tTvFp69f3MAiD",
  "key7": "2DxVMSoWtUYCo45r32nNNPJnHqUcBAkmx2m5eerGPLcJDJ5xaMe9mEu1LLu5izh8ZgCqKshZy9bhGQdvcwmvyuzm",
  "key8": "63YG8EoxsefKUGgg14i6u4b6hWtScMfdnKvszWCFZsnYr4wPXfAzNB5GyWsD6DHmbVNx3H76g9sj6eh3fvt2AJ4j",
  "key9": "NCVRbPEaEk71dKWfePdt5Rw1egNyDjC9mk66hsRtnvbBEuf2iXFrNYnaxAd2YwF73QDUi5gPUMC6zkLc2fenY9c",
  "key10": "31Y7v6DTUqehLsokraAfumScNpU2VvTVZ7FUGyeBKS5YhZDwhwpnBBYxLf417G9kib1q9q5k3KNNz9692WLmsgxV",
  "key11": "3cEdtzfHU82esmPzvM8Br81eknNfWheByNHQfPXyLaRVvQSyFp5cuCC5WCALvWJ8U78n1t5W92EDFDHfxNhTQKnN",
  "key12": "BDM2nAuoE6rnuco37auXyVmsYt4eZynEnntSwLoBZBEmgfusjTo9uvvU9vQZ6kmd3hc8tYLreJZDZE1cHdUykU6",
  "key13": "4uiTV81Qg1YCn2NdxbekGtqfLeqa5BUDwbVywmdFrBwgEsYGS36c6zjmhoQwSQKWkyQkqNH6PupSKGk3VfhcGEn6",
  "key14": "ay5VBRgP4SWnsAyiYMowCkVyCC68rQLGZcGSgxQztCokm5BhnvuwAWr49dFgG5T4NNDwNUygedTTwMtNB7KbSeJ",
  "key15": "3LS9bm2d7VEVavqd1xFD74np3eBkNY7JHybEzEDF1fNVUyXe8prd1zhqYtYVahAynpT26bMYdAdxQLgdQCJsgDi6",
  "key16": "3YKxLTVvoMcNacyMzifmPSf3rjc4iG4TtjiqjVNXsoPhmx91X9m7K75Do1yZSH22gczbbacDsdJrN1Mx8WDSb7VQ",
  "key17": "5NMbyipVQ9XxkodVx2YYjeEUZXhVbeHuWxyMeKvRoHg1WhUy4Vqn6pbBQr5MprnGdKrQimyHY9yQibkUVukvWgot",
  "key18": "hb8qQRN57xPwNxqEbHPu6fxiF29F1KyavZxp1uNwPR5yR4kC84fyJTcazVw6SAbzKVvvdAiYPT2zRJfvDEysRz3",
  "key19": "66jXgwc21kKfBraSVdUaiY1UcQjg5MRZsBiiEWFrzWQ5MWyo7NkaMtfuhYCqFMVYWr9D79AT4huAoRtVcgiTd3Gf",
  "key20": "tnKhyCkRbnEfQqMWkSatBWNeHz3ByXyBc9QVtqfNg4Fz2jSjPWiaUXqM7jkENFHX8jGrg4VL7Q4FT89TvVYw9vr",
  "key21": "4Z1mAFBWaAN8Up4shubTAaqgFvSFhr1EJ14K8mQMhNRFu2q9WHfb3Uxip4PZjXDGa29x3jBVZR6AgvYbfXMf9rZr",
  "key22": "3uF16eTYNXrwHcXEg9bGDgnPD7u6qFd9HGsT93oE25RuBr1atLVeFHUesJQhxW45CNhRhYQ4i1yYPh7mLrKCNnHc",
  "key23": "3fZBLuzHYzyd88WCcfjWUZQQimJi4NChgjGXXzYAbhELjdZ8Ejrpyg3LkMzWpMkUFEy9cB7MgTBUvFXceTouCUht",
  "key24": "5UBYaxQiJSpgX4aF9a6h8nU8U96DBLpz6gpG3syKNq9anhQrEu5yTuYGvVAyX6efbdvTt9izq35W9zCb9WKXXooF",
  "key25": "4d34JabXkrjjdmBBsKe57PuMZ542YvEfJWKKFu7m1pk7DnCnPh1CexAYRSSkay7XefiLQqu58MpFJNWzz7kh9m1a",
  "key26": "5feSBtHoBW5QRETEGKXJMUfdq4TJ8psNETHkTL5E65tzqDNFgmEf3zYw6bWJR9xj4tWb8EjM2XQaAbgGgtQoAmD",
  "key27": "3GsYhXrTzdu3XE19naLynFNQM7qYqeEyCigShsqZJgDGU9Ws7gzyjagGHS8ohE1mpJW4QxF79u3WUfj3MUtydn1C",
  "key28": "3kdTvsv5u3aAosJ4C3SmsnQcYuQ5QABg4tWabRvvXFFuV3VofKKEin8qMR3zbQGmrjUVGPoDKENJA3Rv9Bs6ZqB9",
  "key29": "39RNAkZYsxdfK4sFn7do4utQukF4dtKd4sxDFFKzU98qwoL53DBRMpFUHJkAYd813fCkPiZoEL59j8rECyDGNHsR"
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
