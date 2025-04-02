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
    "4f72aUDfzddbZgLfuyfdXzAMaoCXxy7dJBmHx5JhHtioQw4ZrARJVeTyNA93KrW3H1rk52HwH4DwLLk95L89PVaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44ABkSDsx7pgcGhWjqbfvX7Vh1A6skyzRKzMbcfwVWVND1pt4PzqR8GAoqekMGkvxUezfVerNkvdecwyvBypnYPQ",
  "key1": "ZC4ECyHtD5wYETfUymvH7XbHD5FCY1KyvnUVJkzsSV6YxvYESRnSbKnYHmkKqdBVy6uSxP4BzUCuH11G9hAon99",
  "key2": "paHNDoccEgJDH3z16XWsKAm5haX1gPkdahGCwyGiUGUirAGp6giHrgCvdE1ewerGMC1PjTovKXGct6i8pubFTiC",
  "key3": "2pQDL6aov3HpoXFvMTzBKxzsdat9cbnb7YsoQY5KmUpJCa6gESqhxqB8RbMvpn5dPkbQm5ureovKuhi3ozbWo9Fi",
  "key4": "PfqmxXfSBpGwL3Y2ZxWGFiRGGnMceoaxRks89ysxqWtpWxL61KHVKNJXbSGpGKfZvbhwswTEi6DxFVdMYKMnScU",
  "key5": "eayP2GJZV4nQg11Dih2XcMnqnYpG1qK2KBJHZLGQvCo2hqs6EqaeRZWxCaJtLHDHCBdkZLpNgBTWGV2FfCYmvWe",
  "key6": "3mHNJEVxVBSf3LaJ6c3Bdp8Qes8c53MPjx57xpsvkmQZrpkKPJbBU7AWpWyPtV5hp3ahMnRbqD6ErXE2yGwQafDx",
  "key7": "2jiRKBf933eom3t4CHTh8UrD9nzKhi1nkLVMAAKrvxABfYkrnCFuUZeaWJTAZnnwMvVqBYY6ftxKk2N3PtVx4hgB",
  "key8": "4iwu2hvpXDcmpiEbCpFj6J9wLUeZwB2EEmSjR5JV6k4XMd9Vchj6nKrTTRHfyfntEnXsdSNPBdsaYmeE3WPt9J5R",
  "key9": "3VDfwwnQLrVuX1mcfXzrnYF9EXYEkNn6JfhKTDKNTMWK7jew64QAhdXcnUacjLQkmzZcve5JUDTMkBmXLqiyGN5P",
  "key10": "4vmk8pp8hhUwdtFqKLobSoaSab2zazzP5F5WNvjRa6d7JsJwAUx9hbmCYfdRdZ55NvFzNU8C5ywGrSTm5wqCporE",
  "key11": "3cB3dbvTfjgrQuVStax8srshzTaFrxHHPbkyFynVKm4TS4kcFVt92UHDAmh6cZt3oph5ZMTnVk5rvHf6iAyTYJqQ",
  "key12": "PCUFnEwgtu3Z2y3MJzyk3kwDZajNTCjqHGnKhefREeL9VJ6w7Sd63L8gfn1iBUvZzVkWGurJbt3wYS36wp8wLuu",
  "key13": "5BXXkUHggicMrrXbMmJmVuztvU5MUCrcozMZ4wMmuA43kWqNGhoLkEPeREYZFn6PvvqT5bKDjV6SGJwXbAR8SWdN",
  "key14": "BoENcsKw4KcCoF5fQz9SYhX4ssdVXT1J4oXy8PPyefLZRj4wn4PtZ37Sz5rie1GDFUbpVWBCRC3Rv9VkRjys5q8",
  "key15": "5if4oTSZySgFYvQ9AJt3aL5CDtqjasH6bVGAbDzJQ4HxZ6j7bmfDVxNYy3Q5mkZ5riYXQwoq3WbtR1j3jgMSSEpp",
  "key16": "3tEaxi4re8Ph3td7eNXc9UK9RenTFSFj1zEvusKk7UDAbwzVkeCPD8qqfcQ2m8tUtvsMGxSP4xhrKyNKJPsQbyWR",
  "key17": "3xAT3k4iDmjghN41BJNqVp8yKogQnKsbt7DiMrhGG7wpN3qX7DtA7ZZ8sNtRpkaJuDp4msf6VNzE7bUMvsKRSSLb",
  "key18": "7PFHFdpiw9KrdghtRNtwghtv5VRZD4Gxozhim3zh2NPgLWfoitMyEuUP2EjWAAPzRCex5c2Qipn3ua6FyFF1K9H",
  "key19": "HjMesRaQNQTADgvdk5SQhosTEcWGXyENs95E4MQxsnBmCiVqai6zs6eNoTisJ392uMeecPCDTWUiVKJP4uWjAhY",
  "key20": "2MddE5t6WTDSUUTf8u9GgHpcp6FqskpcfE6Z4G2pKdx3r3QwHYxPBpmSkXQpAYy4rt6Y1Gw2vPs2BsfF7gACHmk3",
  "key21": "5d1xRrdMARRAoKweKMoiyR9ZHo2XWHScyd7SY4mfcFBVoCbVVHBB4i7MSBJKFRLWaTCBc43QREjaf3X2tNh6sXG1",
  "key22": "A8aiVtbarHoyqSGj4XRw6JE6uPMWfZuN5v4QhTjXJxDebtCoMmgpNG79RrjftMeG4KNKAdCQG4gMBbPubrLZP8e",
  "key23": "5DyBkJRbsHFv1W4UbWitYrU3s974eAKtWRigQKMZhsKptNYXKj716Nd6odrkzwXK2xZFBQBis4MYVFciyc83ArpR",
  "key24": "gdMFFRoVTd1LsccjeMwZ3oYfb9jhftMLJBmbqQ4c7dhRxWTnGM1z6jQ3sbxKEFD1cKCzGsCzj5pDtmt9V3zRRjA",
  "key25": "3ZJqWTTqVuUKzBTUYL9j6BbKbu7BYdrjkm2C2hapj3xxmWy6RhsQWc4h2w3uEiVpZNsUKLzKBaiCELELg4vir4qf",
  "key26": "3uLYzRXaZ1hTGaGskWMabUope19uckeixKWh9GFtViY587djNUYg1dCJuhWpQSVQNZcoiPDC9c528A3Qf7KGd5t",
  "key27": "28QTDXGveRk9QpB7mSd78PnaMD91FtUASWMX9yFzNRppVdnwvwVmJXagN8P8bxYCud8hHNWXooDU8LQUMtuKedPN",
  "key28": "2nafPAF2QAjp3kN1btbVUNnd15rgrNiaHk5cPv53xVkiaSNXr24N8zQS1yMuEG1cz9QaLSJz54WCVHwhRzGscraM",
  "key29": "42JgCkcdcx4bHyt9zhAt7GWNxa9iUD6nVF25vB7RCXwWTvvE4XxTR2BTY39MEdYYbpZD3j9jQWqNxXaj754aLCvh",
  "key30": "2nLWHrfsnQPsK29BBYk1qBuYKC3SpmEdaUDtkTxBULFXcXKjiH9ZrZ5vzwBPVATJzxF6nFCMF1V3a3Anp2988Zjn",
  "key31": "3G4SRoKXa5Wa62iDDGg7kzSr84DY6HES9PGBKtAx1XGXuZqGDv4r7eEeeypMJt4uHmefvdeewBL4CuGtj6zo36V1",
  "key32": "2i1QZGJg9pNMed1EQYQNVKujdnSJrdwr4yiAEXNuT94QsLnEF4guiz2HxmehdNvUfkhDbjeXabuZRfUnUjpFn898",
  "key33": "3kpa2VaQ8xRbwkCBYN6jWsjqZxNT5NkgTLgMZURpjDnN7BsCQN44vUC4nFKjEhLfK7zsvVnNEc5RtKVMo9485wss",
  "key34": "3sYHZ6LZNtempAvfvGi5w5JM1XYcpKQoQwbJ2H71yqn3Tsfvk81sAUuRXPpGQcdVLR93L1Fekr1hy5WWpT7RAFBD",
  "key35": "jn4w7mjEdjkTf5QWv8b7sv3FnLLCjK3eqMVv4EoTWGonGE6aNv81HoHcksJKVnnkSX7nReJ6GxsgZ5q8TMbkjyL",
  "key36": "5Jy1iT2SZKWta8QHBkMNzxe5QQQXaooT6gUad3yJqcgDZF7LiW8T499d52bNZP5zGBL9HV3Pb4eo6iU7mRpy74kX",
  "key37": "4QQzL6EZzAmwv9XVHkCBR76JWvDqQrDT8V7XtKKaNh6boDUoEXLy6tCCFQ3ZRFrUxtDd9xCV4AqgufypYuy1AN4q",
  "key38": "2qsmJYSAkjGpGdb3T5vaMPyngWpAgFdg6D3KtppkUJyAb6ri9cXhj2g8CRWPqKXUpYBHtXZp8pmdggcrmcibsnty",
  "key39": "3GKdQtEWmGxYTw5hJ3yQmtiZW6SXaztHFoRuvMfP1Yo2nRkT97DbnmwkHQjwH13hoBTomdx3Ljyb4sV7JLmp7Md6"
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
