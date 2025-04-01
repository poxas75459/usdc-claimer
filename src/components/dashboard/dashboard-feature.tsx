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
    "2tsmQihmkJb5bWgfJMcjfbqtkFt9Meptw3Sd23KVi4uL8bfM1nm6zfeGeapn3fEcEJhanVoNPCVfiLbS2Ro7rqvG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3px4GSZqBD4YjESdG7Xi9NBYUWh2Vk6wBhRMmmCx9UK7QjWtANRgf2CHwt28siWmTqpbyoGkaxujsKBRKv13uLW1",
  "key1": "KRQZXXdTAt8UeupDr9GYbRx8RoB9TXtK12NbvnbcFXCJte1bdG1L79AY2Vru157PacrPmn2HH7jHj5M6nfoTJty",
  "key2": "28o4VznJUXM1xaYM21xTptd8VE5Tm8ZnwgiEtMhy8Gb1f5jh21TjiRDi2VXrpvf59fa7SLQidU9HGKE3pnRDnZRJ",
  "key3": "3goEUFGxqrVgE73eLbNaasJPY8efxa22tHseqi9vWnnhUCFMRgMCFmKNaVydvq7ptxA2mxZEmajArn5kRJTWNcej",
  "key4": "2Lw2sjm7aUXXEGgf1RB96m8txYktx4J558xxTPBb136nrdsTzhTL8EcPYMFDgQ3H2bzRECgky1SCcKHk828TbBrP",
  "key5": "2eGViJDEqEh5TtKHNompmZunzgGjMuu2EHjEEMhz5RU38ty6neVsWWVsNbnWpZef3zg16uNWMKAwsRpHscSAG1YD",
  "key6": "4whEcaoPuUWnLeSaFg89E6KGM7WNqvnY7QdhJgpLVSSnbbracDT2NCrGTJVNsJn1kun96H28iE5xtFSd5i37hPWv",
  "key7": "2xaMk5QMPfdsochjW6t4nMQh5kSbN26oM9yq6QhETGCTUvzE4XtCwhjaxVQ4kYWZRGF8Do88FZbWeYiTVmK9Wv89",
  "key8": "kMBhbfw7TJNNtdTyDh86BgoMh56nCwse4Nc4aLiJjT2pZW5S2HafMhuSptJDb7gNaseXWZBieP6DxKHPgTnQV9e",
  "key9": "2phjKhk56qbJd8pLjFGouHXt4ex2ZuuEdtN6y8XoQ7q86Yd1ewTAzAPxvid4Uuek5aRWHZAeFuRYoMa2Bwy6aT4r",
  "key10": "3rDpPp6Q7U92X8LGzH9nTa5yYF5QA8gYPqFgm7y2ZVZxqKhaZHniJf4shZZZaMwatLJ1F6oe78X2JxvQSKD7Yris",
  "key11": "4jHFjnR7RRe3njMECXBvCEefcY8oCt7PvjGCV8YmeRHUtGwUssy3gNKipL9REyXwNXzPajwfyzzVryekyB7wtGTu",
  "key12": "Xswghb9wsGaa3fr2pG2jGTLTfqAwXofp69yGw4ZxBxTY2a8H1qwbAFyUpu9iKo8ytVWc1jjbb9Q4ADtDb5zryum",
  "key13": "5mDjF3DcS5R5bYLZ2ujPtSDp3NveNHquEhxrKokhUkHL51RaY7oaLZCE4ep9385hcJ2ue41Z8GAHPAty2bBYWcKS",
  "key14": "XTZHWi77MUFuA2L2pfFtDmuzZgV6VkDGHRP7yK3g5chtP9Rt9FeFE8qrBCgg3szXSDYkbNAdXburyX7JFpSWuWq",
  "key15": "3MHbVQ8nv5j184rNqd5ZNVp3VAz8zFFCkQSjk2T8SuJ3sk34XUoE6spqi9eJ74AGYvbcqg7KCgpULMbKpf2Ye3H4",
  "key16": "3F38PeEb22aGt9TAGnChsb99zDmegr62iDHkAhZLxraKLcDu7B5eDCHBqoWUE9ZFePFJC9nUcLSfPnxgUQuy6qun",
  "key17": "2M8EEwdxpjbKYKVwM7hqZ31FHxWMPE1o3vkphMMV8pVFBf9d13s7H5dcqHyxiMuu1BQPewCynbSDqdpLMCCg49PW",
  "key18": "V6Qd6k3eASrsexLXZuWWBFLMfMSxvHotZebPHgEX4wxTZ4s1vymXEFrmCBdPLb44cikQxfevPNUNYMv9ugJcqvF",
  "key19": "5kigpjb3Ck3uvcnNgX2y9enPgdSo2FpgGq4byzvhcEbVZJdnAuN2sC3xt9Fhgp3PSc7ArgpuMWszWUGNr9TG1kr5",
  "key20": "3ZnQ7rG56AK9JJoxDmsLyu6Lns8Di3QfK2seSqDc3hyAKYtCRRnJXNH4r99HH1kc6SJu1vix8Gicm8sgtiv5ZgGR",
  "key21": "44NQGdUNoooeALHB27U5WcMiTxpys2RQ6ZPMmJrn6ASGe5xhNF9AbmyTJhXBy8Cy5Cg8vECi3KRPX3N9NcYL33v4",
  "key22": "hPJcs4FFD6cMRXHCJptkB6jULVRmmYQ4WxkTZsYKVfF2VXZ6Fj664j7teQSzLgM7AmkHnuYE981bS7NRUHSpczH",
  "key23": "D2X1Qgt3KxXjphasYyAzg8w4FfLYpGC7TZ3g83YDiZN6LLYeFDMyJxN2JbzNnoLvuS66zGw1ehrBTwR9Mr5LKZU",
  "key24": "43DXUBaroG41eUvqAnPUSjUGuQvoEcqTV7JEnvrEWLn19byGueSBEnrTzk2EkVFwmkEYcAF4DszcoTcsXDcV43zG",
  "key25": "3U821g6wvXCYbRBiaHEbQQMozRYe6rBbcBGQiMTixqGWyrAn3dcy6qUGUrGyMLRQ32jSzUqE3YS9pJLwS1uqgECX",
  "key26": "3Xo4n4AnN5smyhe5SxfdaZh9AwiUYpCoQmHoc5fcpW2kqhoMiwz2HXqeJgHiZRh6VjbQrgwgnfn62KVhvUEdioAT",
  "key27": "UZK9Zc3tezTryQi25p3Ym7S5C7p1iXQNwFtkhKvZFnXF9W9Wf3D1zU8aCrH94Nzbe7JfubxCUavj1C71f49xrBp",
  "key28": "31W8tyBwUhazFsxCE2G4Cp6kUNfmRiw2ZPbRaKBwkjmZ2iu3ueomvzLYtBYYdzBztXpTRdTbY9ChCU6tH8ZEQn5r",
  "key29": "3KfkMem6vait9Vfx9Yjj2gRKv1TMHDDXmAZNfGQ89PVcRcyXDdny5gGELPVLtFiUEE17ZYu5yBPkvsCj8i2sAy6t",
  "key30": "5UDm4kc2cbzAN7g242whm1dKYfpv6PCE6n9MQBYCg6n9oJEcAb3EXNaBeiVXhFR6KUf5MtRToMznB69CbGqrUXzG",
  "key31": "fst5KMghF3LFggvNAWxpqXUazfqQ4osRyDsVQUYUNMcgM6o8grYPSdEiqRbYVx5HkxpsgVyZUKsQHyHZWNWnFdR",
  "key32": "7Ue6yganpWfyh2padoiCzLfiFmEZTmJsbMWedKdsV7RzL5LE7D9wD6LZfA9NvbZrzwjDbc3puNwZfaR1z8o9jXw",
  "key33": "3WY1MprwWonAtN4UYseJe9MXacJcsrZicVpMi5ewdZx69sreW7ogG8pGoq7kneSr9G9rrsNq8jE6gfYQLfJRD2L3",
  "key34": "3y13LG7i7tmg6JyksfYbCpbu9e7pcCbAKbR73Q2sCzNfzdBV2oDmczzVqNfDcg6WbHmwEhhgu7QqqsZhaNjZRiTF",
  "key35": "48n3igo6oJxGZeBeh5fLSaVYMCVzNtHheNyYs7z3MAtnnxHev8nZJ25Jy7qVykFbSeWTKFSszoaADtAEghkVzEzx",
  "key36": "2JK9nKhwRaCo1AXKSrdk8LaNrNme97PV682hwTTTCTAL9JVX95P5RsuHXUVB7FPE6Pm74jwbJPs9CcVAqyq823nv",
  "key37": "5RyuHZPUhhwdeU5avHLKueDzoHg43imHHtts16MGNJA9BtAccXDKqbVxPCwu2ftMJSiWBvLzMboKNP5QJjKTzceE",
  "key38": "2Ra9E9RGBuPasF1QexnhcwbozHJQS46qMU7u9fEgfY6q8eBejmXDo7WjE9k2BJXrxpfcUsnyyjS7ckXiqxP4Cfxj",
  "key39": "2wj2sdLk1N3E83jEUfKDwWYGZWZ3xtpy23zpPBeyhfqhMqxspJ3zCMsitZxYD2i9zuK8iPgogsUSCD3qgb8Tu8x8",
  "key40": "4UkA8tBwQcjZGZ5W9ANng8ecX6MTkZ2TMmFJCfSZ6SZmLYR7LSv85Ki9tK6HodYnpsYVYH8hs2ZByCLiTqn7FrPK",
  "key41": "37CHVAqDqHE1wn3pQqnRJckZxU3FTyQGMEoBV5Up1Dx6T1k6ts4NCep7S8W3c8zGC8nE8DJhvu356BcQ26Wgvkmg",
  "key42": "41Ak73W1JAxGajUBdu8r8QRgfJK5zFonkBLz4Uwgnb2ax7A4fvHj66icqqkJ2gLehHwJYNHojWuTGhXUBCZTrMZV",
  "key43": "5UTkSWmghKPTKWkHTkaVnoavhotHqWt2drjEoazv1fGvFRWJtWZUHWKb7V8HfJwVxUztDhqbUYrdMBw8nE5rkMWU",
  "key44": "uJZKyJSc1u9VSxwcQTqQJxqrCSy1q7rhkLMB41KiC31zesz7pSudUQVgDXRBHtRrtKuvHVWgTGB1MHoR931aNcn",
  "key45": "43tJza1dGvppDU2XyWbv7yaMXPR5i7iumjcuQfqwH9sB6J9c7HZKz3EAMVioK2j95NgJchCnyAMrWxwG5j2NQqBS"
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
