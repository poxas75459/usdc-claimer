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
    "4nDrciDiNQUfP3Q4WbmYnQQ7qm7pMtAZcsyRcBFHKS5psz7vpvoZj2r7y2R2bYgLUaRUkGSJ434f78snTrZ2dCKe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YprKdScX7riUzALY1iPZ8E7oWb3uTxydiMSmTdDDY21UC36fmRsn4eiT4E4NmYJYYTmSgxfxXf8kBnUzhrvyh7e",
  "key1": "X4dXPdtVyA2UJGVDkbPU8U5gb81zeWKaoJCgidDqEa26vzARtGJSQb1TnGrm7ezF1LQEYW5wzy4EecsxAxfurPX",
  "key2": "3uBemkZWHgxNWTiC91AWXBeZ1CyMQ4HRLe6BkGJAcei8Mh5ohNTeDh1BLUb5GjEcZP3924Hacr6ndwAKi8dYrdpX",
  "key3": "2KpoKmSfF4Ad3co3hNCtzGkKaTgsQWg9Nc8C7RAaHU77YxmBNfFMBCaD2q7AcZnCg2RncCLmG34dBBss4pjpi1SY",
  "key4": "haEy9JqpLGLL8TH6mLgWJ2SnAhDL9mZUYCtDmrz8KTEpbX8CuZKWWKXwp5XDiCPYkPnWGYaSCmWMLXk96Bsobdb",
  "key5": "4x1XrzNHELRuKhKnZYfsvLPegPs89bJjGEapy1beuvwbTqpvABWG5KZga8asUn45FFXsyQDCyp5TBH2ncNjVswi2",
  "key6": "2Y7fZPRFbUiqFDnpx5gShDXkhQGbX3BjU4fycxyaXTsoi7Az4mpmAy7EZCYe99qHevoyrehyHySUXUvwJtSJpgv2",
  "key7": "4w73dqkVRVNU87VkHQLSRknFHUUTNckMytkTkztrm2uZk4eu1FB5DUZG9gH1hyYwELvBgmpqu7zxeCVHbDwjS2Bt",
  "key8": "5ujHNh29A1qNftkYAMRAXzZWWMTmqSZ1Hi7TaU5dAAWWzGqn9bR3oeyjHcgVoa4rXxGC94tEpYjmwVMvM2bi7vai",
  "key9": "4Yda9qfVFzqXv79PPoUjmJiFnTbq5CPLLgdZVkFA3ccpy9HKkQuTYXkBXcQaxq491pFkQcGHapFtPzMAQbJf1kdH",
  "key10": "5TYy2XsGk3wxS7RuvJwafJBf17M5M5Mav9Ew6bgpTkxLpokSEBkXfj8HH3qZASEpQJzWcp2JMMMnPzEZCA6p4ZSX",
  "key11": "5WERr5BVz3vrQ4kmSiEo9PmZDfsvBSJtWPpMuxRXbdfBa7eSVBJBsUDsJFKBu24CM7mcYuJrwYnGakPWPvUPm8zp",
  "key12": "5CW2XFPXvyBmrJMWbtaA5yL3nvhmzE89JsA8wcjXfzQsgC9Xfnavruy6Yia9FA629Pso9dWBrkUZLXZWZDKWTeMM",
  "key13": "664U7qeWbJHSNyKmi7iPYQTSXk5PxAGE8qQHaCifbb8qhsUeamnGW6YFn1SDR5A9viTtWTqP2HmASKxp6pQAjvvc",
  "key14": "3F4A4cUzzqAyH2qeAGSxv3JycgZsgeKdQmWW7yvPFpJZGPBkjUdLdZzKEf7VJrchG7v8CtiWELVoDqti7db9JjM5",
  "key15": "4U6sQvt4kapJBqE6d69KpFEM38Qt18FYN5vYjMQCB82TiQKbfFYhdHPWsYvjXwp9bkuwp7KcDzGMxeWfN3fM6qTb",
  "key16": "4VoaYupUfVV13LAvgfs6sp6ykDCguQCpX7mgkjymG7LAUBzr7VZ3iHyuQXfw7MWMyXBHk4byDKfRk9FeGNCNaxuy",
  "key17": "uhViHq3hT1LawLdsvm6nTTwKLYsCkX2uMBLwB2WkZafjHx9C6wYwcmBxLqRQ85uLWMFQCAZY1fHyC7JPk1iDVUQ",
  "key18": "3q1zHmi5yBAFFfdqYYaanQYkYJzZL19DFpQ7TBLjVii41KrTPCPTpFgD94rX42nbA4ezfLo4cBNqddfSQ5DLTpnh",
  "key19": "4KQmziWeCawz6e5nhvRHS2xb7cRqtiQu5kpAXqSjwviAuNgH6VdCaLbi5bbzE5KH9hz2PsboCTziksUa3BPJE5Yj",
  "key20": "2m8YYVtVz4SfNiNRmDsFGBvcEas8etgK9kKb3FU1uzwn6qMu26NUyVH36W1Ggx6UMPVbw2yemrwtbMcijMBBbssi",
  "key21": "2TeyH1vbnWWxv5Rrdjgp9mkBP38YjoKLc5nYbctedC2Pzx9KzUA34xAipujnEEJUTc4aKpir1sbW3j3xFq7QjiUi",
  "key22": "Ps8SRNwCwmbTy34w8x6ygtQiS29VArpk4ThnvEpgc5UPH2JT6v4yKPTto27Etou28UtQ8vaYFyasmJCmVfAF2fF",
  "key23": "63dymLo8pz9xLudyspbSq3NF6uGArunsYPsMmddjuQG6ck9mePUieeyY2dVmarSPR9VXgX6yAgSoxmgBFNmmTAku",
  "key24": "2BuarBFtzU5tWuMGY7hNdkr84svQtGs2STibpriKKbf18cWXnfGR6R7zbWDnt2P7Vugz9sjPmVi7c8k815hFMEt6"
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
