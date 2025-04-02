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
    "5b2UPTrzzBRdiEafDkmaZ7Zd9MwyukDhjbZc83oPDDM367dCXFv8Lo2JUcpss9GGpBLYV3DLpn4c6ZKh2krMbBGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FBY5Q6W1zn9HndFPst99SGCLKFs87HbXLCkmVZiaS8GtKRUC2kewAaBk5H6peP4KLDf8QeQyYmeZH6J7kggJmDY",
  "key1": "46h62NgFK2e3ytACDq5vdz5sVW2HQd1qFn7dJQdYpZkEBJG9CR6Rz7j9HM63omqyXrtYC539SascQunMJ2ZaaU67",
  "key2": "4XBY2yFXJRHihP59xfsXoP8Ka2HqeEazboQJY5dRHPHBQeabxDcrjDevwrdhH5g9sTS99VNLiDUvBm8EfrjDpLZ8",
  "key3": "5bH69DPrLnc1QbCES6Q3WxFv3GobEPeHZTkQSwNN7uGoQAvbQ3AFM7vBaHGFPHWxN4qazjmmGyqxmEk66Ca3x21S",
  "key4": "4JZK9Vps3roY78SpNtnCjybp1FpjTsJPXN3qfZCwLFRtQULhidcs3R8sZ5ojQy7CWEECjxKw13SFc8CkuLhMS8sN",
  "key5": "66LPrW7UPwHjM2JgEJnQe3TApoihNh393eARng2MEoDeRxAfAj8U2PGtA4os2oCt9u1brY4tBmJ7uSSHZydvwUC5",
  "key6": "47EF2QXhSUp81sa4Kcp7GVAxcHXE3AvjXrPrE6PkXVpNzdXuGPX4s6wQhK73G3qj7GtoaW2mLDeTxmg3dgk9Y5BW",
  "key7": "5rfGib19iTvd1WuDu1yR1Mnmsgoj8ADoQQdbBniCppeW44kq1LsmjPwUhgnktcCS2LewJBQRsnJBAFc24fNDUKKf",
  "key8": "3VQd45uL8t9nPgEZtYN8CVWNyWHXidhgRHSvBndGt3dSBjqPTVCYBuzubEA4PVAm6r886bKEa1HVRdb47fXtke8S",
  "key9": "5W7SqaH4hieRK39HM7nNCsWWzx6uv2jG1kUpqdxra1paowJiVVhGJhcH7ZjcA1wGgJq28c3wrRAGMHe1VCe3JQ5D",
  "key10": "4ouiBHb5smuNTNGGxnZDp8H9mqvHCTJC2stfe29wd4m7CPaJiYFiyWFb4txy3T3mniN63oyrA2cSuCpFAjHeqh7y",
  "key11": "3JWiwUNayVXxHBTqKKKrwgktAnwj4HGBjKeiMCPndL5SMU5QunPStWo4uBaX7vDBQMmbm9V1vKuTtivPPB5DKPCX",
  "key12": "3cGCUCfM11G3EgkUMM61RB92ag21xufnECYXhVnMW8XWLzVwG6iKVzWMKbWqFsoQRBK4BD7jSoQRjF7fPPcDjysf",
  "key13": "2N7MTUSPjg63yczFdEZThokwBt6hXG9ZnQTbNa8SajJZV2XiWpAo4ruLgWFcwK9RqfHMzciKXcUJjey726kaTt6o",
  "key14": "124zEcEXaDEMXUEbu1k68zEKWoaFRByMwUdYFCV1ZnHZRyWG6oyKJFSobWr1hC6wAFSQ7zzQd5NpvrgTFJn6HZeq",
  "key15": "E2iSzxUipFnyFDH1P64gUFin8PcfgU4QY5h54AfWesSYG6ArTVRbohRWRLN7LEC7KbwWJH18bNFve8LNeAEpiHg",
  "key16": "42bxDUV66Tgp5Tvac9czwsxzPjK9tHHWupc7LsFsg3SSL23YkyrzEHpa2VveoSVWejeujTeGBeHBVuomBZU7YgSF",
  "key17": "2AiNYG3FTa9PcJ4Wp9DHxDXweq1EBCTVMAzYxZAhLkWAT28Z1imxt5QnX6A5RXXmakMws2uyBSPj24ZUoiU2BxkL",
  "key18": "inXV7xFBYQSPD8W8CLMcHAebRf6Z4ia4HK7TtW9xE9Yu9TBi8FD7EnPXxr9wvqbL6Jj99kbhqRQxBqX4pWwGz3Z",
  "key19": "2h2AHPRWBQgQ9ZYNqkpLuCkax6FYif93XSeMMh9oxt3UBitT47QB9XeFUK92jz9kwCGcgmpvDHWZ9cPrTTCv4oCS",
  "key20": "bBgeZRM3CUTV1bcUTwgS7UedNkd3mBShdKSkt6aDHfGicMnrsrcpozceo2TMQTKkkAU69eLSKsa8eKxnmhRQrCH",
  "key21": "3S1ke6zzTv2MbobyxZnbAKAyG6CKCvy3hnhaQfkU6GFZf7frc6gAhhnm9HNWgotL23Vv9sjoKwcGyreggB9ukRhg",
  "key22": "35VW7ZEqKQcMdrb9CH5eEHdux1er7FmvJs2pTxV6JHdQgzt5MTQ3q6CzzrMn8g5qJ8Z35SQKJfPAQ9BJE1knp58j",
  "key23": "3zvC2DQyhJBEWimMY13ziP4FGcfS5MzChSgbGF73pa7W7AoWDP3xASrKKA84jgQpKtDqN3adEavMb82fUSeZpziM",
  "key24": "jU1EZGejyzf17654miMT5osvb9WU9JRnTVibum9Ayb5qaJe2adw1sgzZeAmGrarMjFLVBQsrATqannsHsAFogNz",
  "key25": "aFbiAqTZggLqNpiUtAY5KG7g1ZY9Hjvxg4b7hBNuGCyFSpJ7mnxGeyB4TLfU2yWXeEPccgmVF67utb2GQErR9Hk",
  "key26": "5ZoLK8w5mYz682a9qGNXrdPTveDNAf9GYHmdtp1vknNWbkWJhqeV1f1EiWjwBG36HzZqfjobA9AFCEL4upMRXcs5",
  "key27": "3QRP6UTNmaWRD6deuasEfJ3zR2Jm6aSKR8zQ87fMEpDTrCeTmJzDjEmU6qJAa4MxbgC4EGubWVjFXTp3occGb4kN",
  "key28": "ygAmK1AFhUUzpVXUj7wNxxLm3h3X9BBcbWFty29sLFZWYvbYaigJmQxsxmbTKrx3EKFJ74zWpAWCTmbAPkax8u7",
  "key29": "4aXQKGBvDWtqXhCiYkaWRgtZYY3t44f6L66bbtEWNahc6mFRTrGXsMddrPaUiaJ7XDBwUZwZswZPaKHLZoXVoAYH",
  "key30": "2AZWa8nY87WK129Cr4ERSa2g5rx9z7XyjjzUtHdGMwnXQjtvJ5rDthoVJjJ3399t527e41Lqg8hLBwS7gMmciid2",
  "key31": "cWHqDvENj2c2fcp2LNte5ZQg77tgSNC7r3cTWy3yivLNKpBP5f89SbcUXknv3iqAE64jyfpPCAhqaVbAYfgpeZ1",
  "key32": "2KvWLhycpYmCHg3pPRAhs6bYuvjqyQSybByS7aquqaZcRadHRyUdU88RrPXhoSJ357KuDkHkrT7XG5Ki12SPkDHG",
  "key33": "2tuVB4ZA1vWotUH2mop3aHLk2bWYK64U7pRHZKdgeY1W9qxu1w5Sf9tBiNJj8GKpV3JdS7Sec2DKypPF9t5UhMuU",
  "key34": "4fKKJhWA8yxPxvyzFsQwNBo9wu2rhp7pqKMh9oRXkqJfigrF5zxdHf1hBveUr1HriQsiJfzjYwaFEwFnjVsqzsaj",
  "key35": "xMtwSNHtXTSvH5Nz6TTWXtzCYjRygvrNHnzpUvL7dbtXDX52r4Tsv42UY2X5hVGvuDaWAdJ41P9RzTb86Bb7uhz",
  "key36": "4ThV84dLfTjXGEj259Ze1PQYQBfeYQDfFuPkgyXA9PJg2CwFyhQFYaHXocqHDFjyXZoHC3aiRPBhq6iUtZjz54mF",
  "key37": "3s5bZTogVGF7x91FB1A4sXoaahq1b53M3JDZvnsce2Jkmo7rFqGqECxy1avJpL5R9N1TEWdnaKqKZ3PHC3AQUU9K",
  "key38": "4BB4UHsmpyWTUd1QGHfnENBKiGQAhZriTZnDpSzULfzgXZJGtHMpTPEip7LRMBqSNc4SGr8MN4awUMA46S1ktBED"
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
