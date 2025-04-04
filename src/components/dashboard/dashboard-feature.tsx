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
    "2GXUYRqbT4hdQ1ZRcYJgcj1X6yN9o8L4igGTsxs7ae5K2SKnP6qfznqHhQ4NE99Vzq1m2oUxU45nCfDbrAAyFsgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SNiE7WkQX3eb1eXvNZ99w6xYdVspMKKQfjZ8y5JWZHjaWFXCe7F2AS5hueoyQdfSr5vm62QueWEKvhAWKiZk2Kt",
  "key1": "2xrWb9xdMfLBsMEzEv2qJJGTQM1iJfGjeVAiaTtU9eFmSgTySDWyKDyC9FLS71LGXF7DziJAX6AT4zh5BykFMv9r",
  "key2": "5d5ZkquHos2auHZPmGPZpVLNEtirhsmu2YwMkVNQYRVQQW1JyVqPfwQcWB44ioPyu4gpbKyukeCNWso36Rz574Di",
  "key3": "5NHkFigjBixT6aeavYT2YEdWBVwEpXhyFWNoseK9cbZM7XmgPw9NjtwXjSLUYdPyN3YFDy1wqXTGTeKShvV9jZxo",
  "key4": "2WtpGuCn8NSbjZ4RBVDpZTk5JTQ6rL1ditBsaAUBRcjqq7m5oCq95JnjedvFbW6isWDiwZgpFmmgAEZoa7v3b7aN",
  "key5": "2Fs8uHgqB1QkpAF26nRYVPred4DWRsd3DazbZQHfxFhx9XduJuaLLTSfeS77UiRUpPd9yQpjfqdPv4hLa6jki1aq",
  "key6": "5UqN18QXiGpDPax4sYX7AHBL9o6urdASqYbE5y2Ggxvnu3WPWBjh8R5Gp9YemuQ9k63W5hVDwaGbdJgrVBAmbxhG",
  "key7": "2BNVJRv8FfYVuF9z3bLndvgciYivc2N3mZJJBVikaSFUw1SU34mqaFojcB6CscisxunQ6haKTvtzfyTEHzu6MbZ7",
  "key8": "4SrCGt4sa7WuSzrzbM6FJxuUa52N5DBBs15qxRe2oguiGA8Lsde7AcxnsqxgEu8MeqjvaSkYsw818swHwLgf5oig",
  "key9": "2bVkYyLrR1ddNSAmMAQRqTXQWbiCqeidA5hVCrvGLrqns3d5heztge7mudcmGEzRYJ1vRSfVVmFECNRQMLobiTnm",
  "key10": "2RZdF4m5ycsNe6TZpsnD99j22X9MVmVBcXJocZ8xmLzNK2c6ALXDqyRn2NWuHwzwCWgxuHDRBLfNQtg9dGZqYbkP",
  "key11": "4HoHuoU9GDn67fWhaRFPY5ha36ZdayFyTNAHs6NjSSAUgeFxG3ehiK5QMTQ3uc32TJcGitG1ZqzuzLKntTSQE8k7",
  "key12": "2JC9TKD6ob6thbATx8dtpWuvFa9WK7nrDeLy8nnJ4t82kDgMquHAcW3MfvYwBLiunoT3sqzSxAnV5S26ozFwpRiX",
  "key13": "BfrqBCyAanFE9aq4MivRE8MC1Q2bHNPmC4EWW2wGaFd834Uozmmge8UVdGFG7boYT7qnkpRGfUpANsMeeYyYxhS",
  "key14": "47SehN8ZpugCqruh2SJhY9wypNPUaePQZs1Z184nWeY9MEkWZKaRTNpUtpsGaFraJxFWrtNQuoti97yaCsrQ3jQA",
  "key15": "DbrAsYmTPmmm4ykQaz3a5S1XfgHyNhBhGkitvvmxJQ5qDyC73QknF5eUbyNmdCsshbV3GxCQWjjEoRfaQgeJNnc",
  "key16": "S9mJiUheaQ5KNjBeQ4bNUaakdde2sgxGJ2aPyxsKW7Njb1YkSmD8VrSaFpr8pKmYY2cdqRutPxbpq64S7meo9HU",
  "key17": "3ErEzCjekiJDq7T5BhkkoBaj74tMQ32pppafyEg6BTiyR7BFjE9EMt5XPJRvy6y2Da8eBzayPMBvhHiuzp4o1pv9",
  "key18": "HrzBJYZrU4KgGFoRs4ng8TPGkxwhMcnfQZi5M9acaRGJmaMKj7E2fGWp1sX1U9Us1bShmxNpggvtPUvD5STFQ54",
  "key19": "48KcnBFMyGH3nKiBZisEtwezdfxkriVYuKmMJWLDkXxjZWJ8ok6sn1ZYWXJqmC8ta65YmJE9PGs8a5gNSpP8chd2",
  "key20": "2kUFpFUfy2UHJwGxYY5U9ybnVMCRhsBpjWcoykdSZEg1ttFSnSinpdNg9eMhqkgzbdoBdqyZN1ANZxZ79GaoUi2n",
  "key21": "3rpytiesBm4J5dM2F6o5ZgjpNMzzkApex8wrgE6qBgsk9pApzDQW9eDTHdnR7NjP7rK6DVeNqhPENaLdwsf8Cpny",
  "key22": "4axMjumth4sq8wnahUp62QHwSEhNwkqMWqD2YpV3r1khMLYAhAJcZwcsmni8MCr6rUMSvThGvfHqzbgcnJhFqujf",
  "key23": "2WiLHQ4MAtzzDcqzGhNhFEnVASaD7uA8PTE7VRJ6NkJayd6hGAefdfSw3o3AMUZJ2TNJcPqVKfnsdFedkQpnAiPn",
  "key24": "BEJgN7XbbLtfo3U6UbYgKEDqLYx8nUMZ5hQ2Bd6W97KFwSnoAMxkTwEZrk7xhiKrDXr5CgAewt8fmvBXSVEtuEo",
  "key25": "3CG2RoyX71RYw56Sp2ZBMa6iSUNFuYxPywWbTtdvqrenWAsKNWy1nU5uwyQAhRTCYzES85zkuatCADoPKPtwymuM",
  "key26": "5jBJaSpG3Mpr1dYk7zBqX8ZvurutxHiYfFTvmzcYZt1wUSB7X4R4PutYHXKHgKVVK4n3SJphbjbaUcnUDhVg66cN"
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
