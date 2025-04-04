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
    "54xurEvxjwqJgCBtaqMxCch7tZ65wN6JW7PumDb48HU6PVZLqKQkWxnJicr72yeKZrXU5iFCHTLxRpi6W8byMaDk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bb7aGNF5bdSYBZXLkZE9qMmsNTDvnXq3y1ZieJVpMjsmfN5BbeRsm2sRQkfK7pmrEnPMrFqgqWyrromGmnEt6SN",
  "key1": "3w9K1pwxLg6SwfJXkTMyiFqByqEH1wbifrKMMB3EshQPGYK8LFrbsFFg9Bop2Ai93ZEzB6jdR1XvPmXk5ZvwvYXn",
  "key2": "jTjqdFuVwUTHkK7q9AwKYdE21uWhrZKUvGBKBvzRUbUAG443SfqQbPFRCCyqT4uP5kcs5tPUmbVXeBbatJDdWBe",
  "key3": "3ue9jMWno58s6K3DkCkSQ6cNCD1BYzDV1nVjAuEDZGpojb9jHRW3f8LzRYoEPdgxCiv3PQRPqztYKh2owYc3rgzw",
  "key4": "3YmTXx9dFSzUVXv7Bhx3RLaP1CWoKEGBebBGrj6yRXysYHS46jSZunNU5RDLSwbSdR2mJPEp6tnVF9Q3CaK9m1G5",
  "key5": "2WLqh9mEZkJrxdDKEBPeqLsCBAZbXa94LSxZzLKtLQJbgAdPw6hpNt79s29HyipvL32nKdGJWE3K1eHMg6CYmqqk",
  "key6": "2pDCAt5X9zZmFgEsJWzXzfY8X4wmDa9mTneEt2TD1Dzb4r9v52h3tDvhJhqE8ZJisZpJFE9GB8JczCE5zvN8QP3K",
  "key7": "3E7QjnN1UwBkLYknDgz2YettQDpczJTrBoknBAEKiXuidtgK8iDcUJUkKq6hs8yAVRVpBXQWNXsJ3iugDXjMaSrd",
  "key8": "4YgMjYEvhL5MfmAAh3iDgcSzkGBNtq1jdAAV4rma4J3EdrDsMGH7zaAuWUgBjXDRbHPes7xhmzGiNBL5K5jfB6LJ",
  "key9": "3yoSsHmdKD7oPYtY4FvxzwXvVs3T6h57ewszk5XN35ScCXAEQPBiJn8yK4g5C1FheWDRHuQgAtZef3YHsLA1JwSP",
  "key10": "5GRNCHnqgUBdVEDw1LJbUfLBTxqcFor3xVseG5B18AEm3x62r7yYZrRyxBcrC87moBBnhvih4MuXtzA7GmQHjCog",
  "key11": "44JyKjRD7mo2Rfev8A24xnwGGVHzK97m8jQVuCH8wrLt2iRVsTdGJQaSfziJ9SH2ns2jeywKhrnmFhky1oW6w8wL",
  "key12": "3Bw4ecpKiyfi1QHxg2n2Sk9k8BZcvpvrYPbmLVBp1uQ3Nx5voCCLS1RaJMiTJmvoWhiEFXknnTNMaWM9wpk9cF5n",
  "key13": "313tJ61qD6F6snUxpkUfdcCZvhnL1odfigJdxj2zWifNhG1ehT4mbmAe6cBA4eTooDqfsGmX4Px73CMgXEtTE2rp",
  "key14": "48gm6T5i3Hn5yZDWqf64B6DZ6aXdR3xEUR7YqP8xZh4xp1AmXPijDAfMbJWssGZSvJKueCqXbSTX8wuvT8y1Wk4X",
  "key15": "35N3iamkJQYVSCFmMgA9hnjv59iGR6csGLzrC2eaQdX6r8fESEbgnRtgDcbfVtAyjpEPfopXLfRrwUi4c8Njq38V",
  "key16": "2frFmeF9sx1C3CTbU4dZ5dJyLngovUtDbERCLNXNJrEKGwbLRZW8ZFWiexMYpDJ2GyauSjkKfNyVSwQwEfD8qN95",
  "key17": "5gGjveH6FYxLrdHHgjobBWg95MQGxsWcJZDaFX41rCUSrbxKiNaFSYSFGLFm8itMizgpyR3V39f8pYE7Spt4rVcT",
  "key18": "4ZUWCo2jbwcy4puR4J97Y4wQh4HkMZEWP6c5BFCYnxAWyf8LR5PPcqPxCJsLhYseQB9BwkhvSiQ9psMBe7sDoDKq",
  "key19": "37RQ3r9NDJpcZuVob9Sh3EhSYiUy5QSfHGZ54xEBQvqdgMZKvs3iXi3hvQ1mPiubt13fWizMVdvU63izZYGGWktA",
  "key20": "2q5A9tH6VJYUvFL6XJk1t6VNbiL3ASG6tdYw5AfaQswTgcba2MDNXgpvQvWibUtVtq6upA6S3sLjwGUUaeJiwDBc",
  "key21": "2FgpW8DnToBpRgapzxxur3knDHGAEXfWhcxQ6gb5oU2ZjAcVcxLanaALg8vzCzHzqmwph1JzfTSFVfrm4Vzbeg88",
  "key22": "3r4rhZPt4ZQzErB7UUE4n6fPSYwnedXQv8omnWt4zA4gT1zua58yt9iFqvSUZszRR6uVRkUv5v3YcAUFBUNEkADc",
  "key23": "2au1Cc81vmrqmNenqXJcRv9QR8AJNFdzheY7WLtEQnFQZsysdLgAorqFW7XYe1Hoto3efoNFB3Xa4zGqQDPatfZ3",
  "key24": "3FkLVFLJbEaRggpku2uSpzs8kEk8WV9McxQLxu7Arkfp9bGCE4uiB3s8XKrxheqzriwtR9SCQxPiEE8Jk1ztyzqX",
  "key25": "3A89LCRk6cLNu93tfRpTyzEVhHw8FudLRXPN4kiyTGG9qGE13sFgAXdb4CsDyWVRcp4K8qmt66mzQkJtvxRsZTFz",
  "key26": "23kYVXaaAwvuEs1tLrwiYiVvcT6Z7qc2GSfstCPi6QBiWswyMwV3ut1q5UJuWt3ZiWzLn9xfJVYRNctupksXeLsr",
  "key27": "3wvUWNPmZkLaGRhdSoPdoWcvDGQQPKGSA55aVAdPzm6DdZjYZctWqmWXA2etgSiQBCFNcCTCxZ9Aatg7BDdnzFop",
  "key28": "3b3wsBCEQDL81YQCJSwM4mxePEsXrQB7hxpKXTuswMHS73G7FqkTAkPxMp2vbo9pGzxJ9xwRt7X6oBoNfWrZah61",
  "key29": "3ZB8H8PqhXhER7DPvhrwrKiYZuaiRM3LZKVwpuRgBvpiRJcUKsf72po91cJmkS4wYpsPtGvksFtnkoK3LvDpqRSt",
  "key30": "5jJz8tnKBJamYiWnjRVhjz88Az8PXgyRuRWBF7kYquNH1ubw8jKTJnbyrgqiugz8agSBagwHAU2v4KRjbhf7xMZJ",
  "key31": "4JL8ywUnr2GKfokcH7EeVUors7kgqSwJqzxcUFzgQL3HysK9wqqBbMjWJi8hNsLyiVyiywXEDPPvVWWRKbgiTEtt",
  "key32": "5XuUWnDMMztb5qsMGPHBsUxko7MC4RJqR9Di2W1LLiiBKvA9rsJtTXQZhdCqaZtEEhsdQeSoLpTGr6wm6t7venin",
  "key33": "3z9n1625KtJW2qhiKR2SNMZdza7dTqfFP1bsFj3nURm94ERDrHX7t6DkrsiiRcUizN31pdqAs5CEsghqZsHEd4nc",
  "key34": "5is9P4YqRKddftNEkAvYMiDveCEq7GcMQGvBfE2S2VLkymuKtakcCiVeFdzzQGMaeHS466DMXjCBCcXcpn8uNBz1",
  "key35": "53BQfknmJAeuezeaPBLNk6CpZAwRKCZkyiKUbpqv8U77PW54wsVHnFU1NUz9kTnucVAYhC5Lnp4a6urUddFQXD3h",
  "key36": "324cvT1cdKac8aQsY7HMb5U22iN8VHYMickXLJS7BH8xjBgxnSMNmW2855sfxKtKciMhfgVxRZyYnJ93Ugg24C3r",
  "key37": "5ebKnpJXrnVRwisyF6E8bZLSbREnQqQe7BnTcK3evVdRdDJuDs6SeaLf2vS4z8WFYCDYZ7ofqjPAikQLHD86KHuN",
  "key38": "5TATFhC3aZvpxWvCXpirYGWinZYLhKKVVKuqdZ4GoBpjqvgNCQ8CUYn72MQa9kJodTvcFwEshHZDmMC1L18hvCvV",
  "key39": "5D568c9VpP45fjNaNUKyxeDoeW4UFmcEE4NPA3YuJuUqD6dxiSLjHEuqSEyqy8rLwUswwZNd53Ct2XQEXqC2hwMC",
  "key40": "2repC9w4HMjvA2K44rC7CBHtZmxvivqCe6aexTTQb28h44BWdq1uXvQTVpBj7pNugXyZxw3izSVuxWtEoteu27KN",
  "key41": "nEvWZHpXxoCXGJ9AuCHHppZwiDX3ZXFuwpYMZV9e26eQMsjATV5JBME5HGN4CWQz6z88qtAgfo8jgLd7aYrHJgB",
  "key42": "451nLmPgHcjF43hRNcuCB1j1yZ2gaEkAnTBJn6hB4PkhmpPvcNgFsgLd1asEjAbgiVXJf33RfBcAiHc6wAriD36r"
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
