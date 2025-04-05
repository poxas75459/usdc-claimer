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
    "3bbz34NiFnhuaGVcVqR6exresWaGwZpANjzLxoFLGNhqrBZV4zdKw1Qmj4JZGBgjg2nhfYBoUAu8gThfkqRoun6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cbHfeKP7HtbLHtcHo4V83KJxVtuxsm2txU9QK8Uq1kfHkmc6w5cKVAT5ejYmVgtvA2p8M2ubB5GfJnk3bb5j9mH",
  "key1": "2VdAQbTUtNcnAyh7FpzvNHFtaq6kbqb66YgmhWZpe25Xyx6dGTpaqMJabXNuq6n7MK8f3iVYcKbZXzXY5G8U8TEk",
  "key2": "3dQrvBjYc6nYCApQhF1fHG3vM6H12tBqZjbHjqwn3Rq8ArEkPJocDnz6c9xRz3zaPJAsUFf6wv2scD5EUQXHisDw",
  "key3": "58qF26wGaDjLmXRNW5L4pChvKi6xGYWYycYW9KNGgzANS2rqFpnTstC5vHAZgJapARu6rRyEooyTFNBKrZgwKyEh",
  "key4": "8GyCvu8gGB9xv9Fm97CDFhfCg9btKPdZimbrUYG5iDYZNcnW4AsVBNaw1fBP9Rnew36aBgYh5VzZ5UyUc9b4JhH",
  "key5": "YWRESaoiC416NcdSSUE4rLWBWtBXyeKdJymAPBueoEaPaU2mbsG4xJUhj3PnBWer9jLz5BPq7B4TBYkmF2GHixw",
  "key6": "4N9tw9961Wydu4jrT6onLzpPcxqeWNPzNDk6ifENhvF4tPGg8Agys7GQ7WC22zU21x8p8otqx22sk8JE64Mj43tH",
  "key7": "5nKVQHKoxmdgoLTJibAbMKb9vsTgFfwC7JBXbfj5LGDDbar6m7RnGKZR5toqeMC33AMjZc2stS4nViDmDdX1csBz",
  "key8": "2vJ3GXSjggnNyN7ZXDatNKygYDnSKjY2vxmEYGcqkJZVCAe5W7P2sq15yYXwKiHzkVkxzvx7XprV9vJ3FWz6as7f",
  "key9": "2cqDFZKv2APVU1UR33sUTy7PAo8z3AVqezsuQvc7DYjzzwcRj1hbSF7vk14C9CAynDwucp1876LH1r26iLxhwnFA",
  "key10": "3uuNE1q8WikbR7bD9Zp9PxaBChYv1tNDMLL5xGxjppEmCVYg7Axs9S2bXumVz67VdxtNBnqqjkfMYTLqg35EMUbd",
  "key11": "UzHnp1F4XZp7n9jAMkseiQHfzJ4ur6Likf3e7q3WVho28twoYZNQ4d5xzNrGjZiZJdkL39nq4vhq2Yh4eTJLeip",
  "key12": "4uGgJEAhPrQLKxxguZNJKzGcg6gxwbmPQfAzSujQphLTWoUKX5x22GuJJht5q5RH7eVXvaTGm1iYNxKxzn4ZLubS",
  "key13": "24j7zVCAXmjDJN25XSoNeNFG6PfTszBnQZ9Nim3p5iTm3gyud9SRCU4sTXPKK8Ymr24M3oM8xvYQ4Hv1AtRPEZPo",
  "key14": "5pEieDHNpPPBkHoqUyeFkXjEji3FNKXYDwQYrcrmoRRckbrW88Gge9mPb6iqpXaSScdChPJ4HjhMn9wiY8zxUMvq",
  "key15": "2zRAJw7gwMBuX2mh7RZzXJCY4JUYrMYVH976sogPZzX2meKxupRE75chdTBDzgkFk9enw6QwRg3dttxSVQjaFkSA",
  "key16": "35ETuxomUwqZJncDz9YDHqWSCD9c877MfJpttyQJfUwFB7Enu2Bz7fwRpgpWdqqA71idbAoVoHr1872MLcBfYFXX",
  "key17": "644qKBH7wzrPdAsHf6qKZK2DxB7Yw7CATpGxVdjDan52s59WyFRFVCDWdue5piiVHCySEHHqogVCa8ax2xutEvwg",
  "key18": "pEHDx5WbAX8wW5c56kvnmkRUEfRQemkP1jhvLZTX7EUGQpKfHfKbwDR3yth2MuKJCGKYKdVNZoYWzC3DeFTWqxM",
  "key19": "4SFv7i6iTQXv1YbEebDJpGZDQTsEFH52kKUkZXfEqyAL95ky2DSuhnDN3JbndvHkDqcA1Fkr3vepVRfT8sDJkMqB",
  "key20": "2QpuEYvNXEBWcQaL15qEQBvaAiejDq9Qp6GZsbsBNarXyJCCGkgMgfHUXpc4kPXYrvoXFCN1BTiyhSRvGmGEuAFQ",
  "key21": "2zFbNXxTXbdL36yWantjEDs1Cwxx2bg8WLa932ipxfEqC6zZcxcS8RWm8WfEagGwA3zGC8KiRhFjjGYvhwHVZ33Z",
  "key22": "KVzRt2Ar2WFGdpEuVh56vBTKMPhtz4hEGcKmdRnZsxMRi3b24KQBgdu65w4SQJb5GU9XvW98uUdt3fdb7uSvjLC",
  "key23": "3susxW5iD88kZEsjghxF3m32efi2zr3QsUR5j3mL4hMzw6bwNVq3UnSeDkYGUhQXPZu8fRcprbnS1xJzHWp7vjiZ",
  "key24": "4gnfwHK7GnHm4AsmmTUepuyhX9wacvVXTDWUpFsqfKGvQLXMofXyBt1PG1GvwESx8cyX9qpDhhcdg3GfFVPyBvoR",
  "key25": "2iJViiw7wESUGMJeoaayTqrHXnVUj4ptLh1sAFYPewjqnnUJAPA1SFSn6XJ65RFaf2Nxk5BR3XqQ42dBMtE8HUQc",
  "key26": "Fkdg29LqKpnhUEsqCeBex3L38RQrZ6FJrhGmrjiJenCVwCssdT3oLJzREgfuGLpF8noyjQC8FFvDY9NSHTTgg7U",
  "key27": "fQKtaCzfzTt4UtBqafWwoiXb7CsWZQi1tbY6ofw1AEWoLditHrf2SpFV8MV1RCffM5jS2nE1P3SVt8p6iQiPFXd",
  "key28": "66f1pZ3d6eu1fWWnCoC1ZYYGmeAjae81HBTZvvA7WR27HQE16uoKDiCqMpe38ZbJCeWQFoi2ufcN7pr8ZKapAVCX",
  "key29": "291LeVdajhZ9x9fwLV6zoqvLwdfaFaBXxCkTtVabR95DyNZx6DH4Qicp7CthBeGtC9kZyHvs5hvHFSGmSP5KVnin",
  "key30": "5P2FeCfKcztiWVnV6mBBHLJKs3HqMRbicQ2iZBXXfs9GHPYGm93Q9Ry4kibtn4iLormp9yDVWqWJb9r9dhSyGKYL",
  "key31": "3zVCyLHXuVQuPpdZc3gbjERS2gRGvDbphTnmyHkovQozEGkY5Uzqe1ausDBQk1KHcPiC3gitCNjNACTcVHhDMokU",
  "key32": "3iLy2qaPRoixvzEwBgofrvqPxyQhvHyGP4ytgpKi1RLBxDkasjxewED9fqY7rzWkZyqhsp8BPwCj33tnw4XKStkx",
  "key33": "64yWNP9k5WWpHuxtUd4q4pti38J6Y8guHcreUCF29Vb8GtygW7sxwZkdXkc3ZpTUJLx2FzfPNyVnaTaP658AdQuY",
  "key34": "26ZBwuw8FXRLgzsqe9UBJji4KbKxBD2h1hBkgnyT1zsmh2auJnH8eVm23mJG6xbX4hsX7BQBsawzDXgFzM6ukR84",
  "key35": "XYP4a1dFxGVmwmxjnkPg21aNN4c5437uNxbSUpEGBxHY6MUg7A4MHHiHuHe5mQ6sWpDqwPY1kZJ34QYLv3wWtZm",
  "key36": "faw33jizFeisvyJbTsSxhGoGTRuHnC6zLMWTh2njR26oHbcTQFKoepsezh2ZvttXpw6wXmPuumkisuisaVdi96A",
  "key37": "2rFZb6F6HV6C3ab6yG4arYzRijCSP3usoo2MkVDXV2H9ruJ37SCPeC6YvVg3FRYp6eUiSSttcCs9NMLPnBAsYHS7",
  "key38": "4znXxYLGwXMC9XPKGWx5tpUk8p54YSoiWEpEc5trxjkghA9XzfPFT2AWiBi6WisJaQshESLnX7NneodwQcJZX2wZ",
  "key39": "MUAq8wNMTn57dgeaihFheHLBZdHuwys42Wxzc7RNEVnRbGxeLASXjFdsBSP5GvmC1yoqjUgzhSZTMtUfCR1jqvw",
  "key40": "fXTys6yrJqkKpN7qjzwYWSe9AbCSLCZntqG2m2obRZRLExGRDR83d4J25d1VePfGxWQq23Na8956JbGkT8ggRT4",
  "key41": "3Cz7X9Kq6Ka7SkV9MGsanbrje2A2QZRrxwszFmHnzNqXTu2gFTPwV8nFBU4aYvayYRZx7PRCbD6hsEBdMYMvTCCV",
  "key42": "5GXvZxPsMAEja57piiLhiaeNQTY4Jc5pvD9meZ7LRnr1MnP1FgNC9azxYMyuZydk975bAxEvpnYrAvZHo89eWWSc",
  "key43": "64srV8f8C1JU4yf4fRFRDfeXZDtFTFmqgU3AV29YoQ21c6QG6YzohFdMZQn21jV16pp5qMf1VJcAEQJp5tjMERBJ"
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
