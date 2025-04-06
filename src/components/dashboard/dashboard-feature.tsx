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
    "5a5nf8a4rCMqECgvpqgNAueXsNXPoS6Uh4Z5sbna3P13VcrcPmJhotVY2xkhCA5nMRrejCQ4YmfiggcDpMbiVcVh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mu4ei2yJ66RD83eAFCvkj2qcCb3weh2fXWsvzUTAPckEJ3D7hHkbFKS1ihqt6P5r6EGTAq3qSjFcvdnTyBRGNqT",
  "key1": "38nKsxQXbnVTzaZCUD5qsGtWbVW3emSVMr28mW7o2DeKkusEC6LKPRurds5tqPpkAUUHNBzqgSCpPRphyJgpL2R",
  "key2": "2hAhVJXyLm3J6d6BAFD1Qxs5ZBivSpZvujjjDihbzZRDZ994hp1sXv6sX6cJfz4ETXanXfk5iYmRocHsRWw6XRb4",
  "key3": "5SRh8pEg55BLXSsnznN5TcrTyiUEamxK4sTHaeYRcZES6nwXake95W49shysafTYHGQCpd9VvmkkaT7T5FPGyG1V",
  "key4": "3Q1v44GwkqLLY2q7bhwAsb9kuAqf7NkNTaBUvYR9Wmgw5GJ3bjmG1ezrjbGhtmVwEDHc2kf3LcDx7jbWqLB6mQUZ",
  "key5": "3SiyubW8DmmnL7LxXwbG9Skwn1iMCDT6cHFBKriwfq8jEkegTU8SGAxGuBsNhqojz1sqLkBRwDyZqCfrtq4xhauP",
  "key6": "2vgVd4NQwmMyvjkJqgdWHybEMt1Smf2oWJdHjtWJXW89YgzpTpCvpDs1mxxRBFBkpfbcH1jfrwaH1bomSPeTpDvQ",
  "key7": "5Z8BrLAAvGX69P5aUGz478xtEo6cD1MR7hRaW6sdep84hjg5XCc1orTJWeTt2pUMgDHRyXiHbLHpbR7gSuDdNUx5",
  "key8": "4p3cCMk1VZioZijXaAB8dDRSmw9Rb98P4uB43X5Y6yY28WbozdGjhPwFTCAERc8Q5RuE3FMiD9XgqrkARmcQ6xA4",
  "key9": "5bt59b8D6n5F9eBzC8pVi63MvZ3hhSPxaSWFN55xaXrk3JhXXNJre3USXvrbgAZoCPoGjtKQZQdm5b8HBKvttAb7",
  "key10": "2GQoHLLtyno7oZJiVG64uBN9vgVHoDjuxPW5nyusxbwvee4jCN3At18J4ieCfRKY53myQ6c7rYvScQAm8VQfZn7f",
  "key11": "3MvgupvpFBskAcQ4nLcfhbPHPiLXH5m55tL6EMLUW23UcELczoGQhhEZfKBUzX5m42h3qLLdKzEUsX8Yc2Y7gtKX",
  "key12": "2BcqVBRosMp1dxi2ki17VYXvQDgjA9JzVoA1aU1u9vdWiW6YGM1k2V9ZLa2ZLadmEDFooUSBW1dnFVN28KPRXLJB",
  "key13": "3VVaKVZPqxp1wUTxFWzMi8VEs6CaZE3wTVKxoJFfrWNUgKDhZ4rKD5RXSBV8ZAgQ6fyniWRuQ8G9VLW5fPFF7DTb",
  "key14": "4TpzGfxmjuXpeAjG2BEkioH61CervcuqdBYKwbbDvMTrAEUQSdGpAcg3PJGxsyrXjXQ416iQHx9XSV8gRRzeHhMa",
  "key15": "5D11dtpw7M3qedM5nBg4KYk4Y5dhzWMefRcofkHiFij9SNSoN3SWJPdDFecYcmCNs5iAvpgEVDZq2h717XMcHCHf",
  "key16": "2BxoiU4qdWSxqVWjp2gKpbTikvieHKrPYPNJvqkCWfqsW4Mx3sUPjxUM3qgQFcdVwmmtCuF1WXbExksMMYqByCSj",
  "key17": "2mR4wBFHtMj36791ZggDp2fzQfXUFi7gEZqiPVKuuVDm99RkPnF5KbEKS5VZNcNUcTrMEUXMNpFck6XsqF9KQL3f",
  "key18": "3xwbXC5eEDdSNPytzh4TzTyr87BuQ7Eyv5jRhqtnTpNSZ25gYAAniQC21kxxfRCkM29gNrJJBSgzQXvEqBZh4ZPP",
  "key19": "2UZoMTtd5NETZmwdLGF9WpUaXqxY9BbkgtSZYePLVZszHNU5bviipFGr3vFSUTQW2WN6fnLsEk15b4iXRY2p69Pg",
  "key20": "5LxLzHSsbFeJtZXAVeYvBLQDkNMszhRSpdYEVrR1a17P8gnChYZeYNEa99f7VCnZmzKzCbQPc1t9sF7fhvFgZGCb",
  "key21": "3xMwWjEUXDKz51tqgdbEfSZ74C3sddDku61rxtLDerTG4wVhZSdUQcpcWErZMdLhrfVoyGK67p7vwL2ZG7c5QnrF",
  "key22": "37Q1ZTf7514YLfSGbGJATzAixQY7YC6wXaFMuXrwNx2wzLJ49gqTJACZHVA4JkodiiViohgpptouCZzxwzNLw18k",
  "key23": "3QAm7b1u8msJ5qHusu6AsqZ3aKu5z1ZqyWnUz3Ziz5LYySVpbQQng2a5JQyjiD3JjAMWwEQMExnDvJaK7GcvQheH",
  "key24": "5FDBmXZAaC9Uqs6kMerQg75rKCCXqEjrWwsudQpxbWmMytdUkGXhCjySqGde6hfKjTbvrHJg11JMniLd1Vuz6yrF"
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
