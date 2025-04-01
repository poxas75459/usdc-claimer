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
    "5Ciz3CkULRdJ4PiKkPdnWHxeTAYPEiRnY8LiLRGSNgE47J1CL56usLGyMb6KDcBjW1yhCuCwZ58M7yReJJB481HS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26D5cnHFF6tHkngWRgknrVf55r9uxbvNgByqfuBEPTci6ryXXuHK6x4wgff94q8zMKbxAG4SPF7jpQoQfiaB3egj",
  "key1": "3FL3eFS8riQQd4BZDpwxAcgaeqHHyHMr9UPvTGAK3h1JiKXXZYHHGer4EFcLopXVx42Y5CsPBcnJTYKakLRRMwWL",
  "key2": "4Ad9ocwxYX6NKTsksLgypcv4Fdq2V6L7zdQXbzwuF4AYU1eubLq7ekaGhogPTbgU6bBdVJHyjWg8jQiHimmyRWHQ",
  "key3": "2EezmGBX5gaLhX5RfwwLyFLr73xoCXY8JD5YW9WrVFC4Kq7t1MTL5Xg2ngqMMfL7Y6B1RYEZ6K9nMt9n2oKxzFLC",
  "key4": "3qhEJ25MN6RmLaUuWTqRFhwHaHk2CEaQL4EME5rom9p5diPiBaHNhiMQw8fxuLRTgi3kEX3FLYALupESKxugtDNR",
  "key5": "5YtghY1AiM42cuvQugD6MxgjmQFhLbwHuNJuw5cXVxyrt86155jkBaQxbXVYu81ufM3GwfM4M4PEGbaXH8k8ZvtE",
  "key6": "3thQdzpg4ZQytWnMzE9omYAHKE3LNWs1bJJb2k8YpfPxQveNw9EViTtGzZpTVomwcQFz3TMZ3baaXLcU45S8msyJ",
  "key7": "55uhd4YGYRh5jNXut5W3yxNrheYTSajaTKqQ21pECwous8F1y6cADhzwXmKJTrvS2aqJJs7zm9MtzkAJ5Zrr7f78",
  "key8": "2cbumedtETsyxgfMGQJo2N8qGHbGuEMiYf2NQFidqF3sPGhhRC6KxK2ELwpNanTBDm5QQVpUaYrFVTcF3UsrHe9L",
  "key9": "5s5mYEU1Yw5mrqF4TfheqFjKcSzEGGYD7vvtXpDtcvwGb5WoSk6JTJibWJUyarnYJ4p32qdtbKgJzb9dLfmSFobu",
  "key10": "xGCsCsdEK2uzJKayDbDDnwxvb1dyLAQRBJ4XbJmruPQdMMubsc98mPpUWcdjBcsJTQSMgV2kqPN3gX4fXDPm1Xc",
  "key11": "5Euv1NUkUMTXDTw5eXR88RJyGBMisSxALaZEKrcUCRKQJr2c4cBEuk5v7YxduAwNb5dzrDwauUmtZGQVq8ZaUWFE",
  "key12": "3vUv3t96LMzfiXni1jyoJVDMRbVm1gSpeoaTGbsN73NSGTZ2nximrQBa2NDjzBSyMoLuyEFHjhvmU8zDqh5wcXhq",
  "key13": "2Y3NhZmzcSqxQt7qCSHjfuf79fEdvLh32fVKjbhaAjQqCW3pCtUVg1xQbptdBj3LJDRD73a7rX28ceLzsdxSze14",
  "key14": "5X4H6xp2KZiJQWyCdB5xqKbafK5EHyJEULSxYBBX4Hm4bmqHAhPzF12uFNyRYbwFQxCR8mhJwNKt8CFXdRXi6Mnv",
  "key15": "2XBVRSoZ1xSR4FmEkvxFbNXEGesk7E4KKQE6KDctJojwxyni8aTiTiS3s7ASeUUmwWp9Ja69HcCdXVqBwtMoEoUY",
  "key16": "5aH1USfrSXo9ZuTd9HkE9xxQXU8M3oBDgd7pK7DHZYFWbQGEdU2CqjsKgi8z5Rxci7NnqBogbKXGfed2sptDtXBC",
  "key17": "37gVFaEeDoUyz76bYTyRHYiEH6CbGUgpfHyydcoWaEGYGGHqnGWsbWNsDRAZ8GhThLPWwudHEJCwqhkWWVMXSQSX",
  "key18": "4BLeAPChrW1m2bbm7DWZTWjHmD2AXPUjGMDfNjbALMuC3m7CYSfDfT1mFx6SEpNxquYbDPPckdXWyGZnrHKKSTFN",
  "key19": "2jmhdqdjkPCxH9UuJEth8hNu48UBj4Bc2wHv9hF4GbD5TDcQcgc7fLzuoGmuPSDuKLrSSuwAv3zbi8otnAYqotpu",
  "key20": "3ttYFtAv1EUu8yn4Zt9oFAsHKcgHVVeECXMwdSZWFEdp1PE8XgDDnMSq8L33KE14xzHXb1xJcRYvBmAZpf8oJfSF",
  "key21": "2V2gWU7mKvuQsGn4MYN9HFFxYxTPazNW3Fp3D5yP92GT98C4sXsr94SuyXNeMfpRUViu65YjDgVUsfAc7y6PBk2L",
  "key22": "4CRNfmQUrLFAUbTMdz73zeaWGxkyk6Xd2yztCGSot4myPLr6Ws1sGAGkYKKSyJ21LXPhAZt7dDgddLcogW98KMSg",
  "key23": "3YVan2KYbDz8xg8YRC4t24gndqqHBAe33vyR7Zrw3qSKCTx9meUDhAXaf4b9VvrnXLEGxJ33LHUCR2CPnLXrJzKc",
  "key24": "3Nz2uph9maG7p4aYGJzZDQzRht4vCU1ahgUYFJaeMmYiBJJe3tHCeMJDe7nPAXWKAHcE9YcYb4y3XKyPJZ2Re2uY",
  "key25": "5kJxfvsoxS9YTGotrq4wXCeLWK4Mtag3ZnW8k4ifg8fCKo2GUoBLDfDMvoZVCwd4neNP44opLK2rKNwo8A5X5Hv1",
  "key26": "5LqfU3c389yAYkr878rhkjaVs4PJSnZSsTvyZPjSbbBJnMQ8v5Cw9RLZtBb7rTHzLqvDF7DrRtuXWVgXHfFaRJiU",
  "key27": "2ppJbFqqnnMC82zvWUYJ9HAzBr42eF3ZPCHGQh3swjjcFwRD32bits8rkjtL3QfF6oRSWCs7gg1G1Pua4ZkRyV33",
  "key28": "3CWByHJrUJAEsm4DLHKGADR7RnRqXBAWfVbjGJYou2fpaAd8VaHN3JdAR6doFVFHFS4YjiD1kohVE9E4rMxqYKzK",
  "key29": "FoLKbAkjjqGaLwfwnQHmWaFbKsqbFZfQTyGosDcsQ17Avf9mJ69UV83cRV95N1Zrs6n6AMeGCYSrnSYjTf7y8gc",
  "key30": "2VhMna6jxtxxGjikg7aG1vv6wXDx4AbeG4ScCCespjjJYYJdXcGyErjcUqDVk43qG3gW1S1AaakvGkgDWg3w5N8T",
  "key31": "6QUBNCoUjnLxE44EgvPBFWtVpwJjRUkKP5HUcXibxACo6C1HadzXEZKf34uRDp4K1HXMU3SkGLGSibeYvY4GD1u",
  "key32": "2QYBGeTyw3cMQdGrEpJwn7G1ZksAcLTS5ky8Ezsz2bPXMik64QHuHbRuhAjcX2qp18cjkp6GQ1ubbPUW2P1ppoNT",
  "key33": "2D1f1LDox8Gy7T1DEaQpbhSa7ueuZsqApDwBCMNLAgunaubK9Fas1JA6R7KKeH21T5oqPVsSF9biabAfvbAGNHSi",
  "key34": "3eus3Mechm85kvDi1VZwhqe45okoAoK8ZpW9LCLkzTUnhY4bFRTP52Tc7yz56A4zCxUjsYsFbkhMUNELEW7KeGyw",
  "key35": "29v8qPhiqPJ3dQYfQ6pANvrvVn4Guv9nw47hrRboMCN1B1F7x1kBi1pfWXt6UTKLC6hbGXhMP2ku7SRrXPrExJjk",
  "key36": "22mcwUsQEERmHSnbcw4wVfFhYDhF2faYGV2KkAXQ3v3qn57mH5A5dGxZuf59AMLuoU32wtLoLBtRK3cbVPWMiRgP",
  "key37": "2dSq3LAD1HEaEK6eaGEho31P7vjyzyyAxtgxSS5BSnhDGKdAdy282CkWZHdEB8exwvZFWbUeDPpxe4x4tisjtpr6",
  "key38": "5Toe24Sx2xLUXG9zSxZUqYikvXXK49Z2AhuXZsFwizvhyT6eYDCk1tEgJgMUADV15WHA4NG3YcepwGu8e1ZP8V1W",
  "key39": "4FFGYhgR8HyQrT7CEKubBzA27pNtQqiPZ8sSrNQVYWF5sitHG7HorZh2GLnzh3SRaywKHyoX2ZR8jnpwWi6D4AJh",
  "key40": "4xkmpVSNBzdrvUKRSsjKdYDoW1Hd2XyAn7VtAxeF7Gm6jsgtPdqfLf3u34vAT8gPRBAuQ22ZgqrdS8Qbx5nh5Byw",
  "key41": "pAd4ULEu2w1koP85rVpqwcMek8LybPiUmkfhmJcgUnFiozstKa1dhgMm2v1vYnfXfU47YA1yvMDiQnbTmUeF5FC",
  "key42": "4YLKrVwwsVJtycyGemAGxoPTYwrwYBRxfygdfcqBNHUVdjgxccRx3uzZ215FbfqV1E93qk8UQZHu68heL1v3g35F",
  "key43": "2C4EoDHdpntVrbWFf8rHvEZSjW249T4djpJkLcL8VkiKsU6fEBfStQMiiwemXZ9kbEHKUyB3tMc9i5Tr3hVcmui2"
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
