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
    "5W8gsSjDLFec9AyFfQ1Upy1UTnEZ17kVUopZ57WN2ZXuVZchLjBjujiu8yAU2ThcdVAebKGc1dpxH3n9YcDuRYN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WjnmZNZWZoZs7mEL9WaKZwYvvXs981xHR1RiEHUwbG4WcUEUrSjmv9VCyezT5Gm7UTqJKspJjzBaxcqf4Yif1qs",
  "key1": "EyqHLVZQjrEz2sGv26BRAwGvVvKmAZRL8f9HeKhXcf49z2TEutrqCkg3Btf58gN5XGdbnC2RiSRcAYeQFD2iH54",
  "key2": "2HEpzjxfM4BKeTVL3BN8n7UFiDbjnY5bP8iSwx9PHwwFRQxHCWPHM2edhGcJKGVkeSRPkasKNpKiHgSbQ4QpDGtj",
  "key3": "2wp8UwDs4V46WyHM8cbJb555HQ15xAHPDTL83S3AhHKaiwNrbcvm7WiqRj3cqaES2YaFayxdCiMxUtHsuGdU7McG",
  "key4": "J254jZoTdu4nzA7e2VgzPZYYD2iwSGXxivWKXuAyVGD5GuxDjLqdTEgiDSSSktuRoUuyRoGWMzVQFqTu6f9tPRV",
  "key5": "44sEP6psREr9ZbqJoxWgxrqEpssPThuCffzXDSM5ZdvP4SLfupSX3PtPfWvFiz3VWyphXNAD248NdZB1uHZzMEyx",
  "key6": "2prCoa8H9MR7BuAFZwPR6HN4W5SnWEPpotLRm5wUfpyxWtohs1DhouwuqyPqmSmUMEphFi54YJkmLLpZupUVUGkp",
  "key7": "5VYKm48XQPvz5QK6P2MAEUqfWnCiCj5Vxv6sJ8bHiagvQCMpftqM4DbVA6XU7Nm76VUHZxoZcPfnzWodZ8SLMB5u",
  "key8": "3YBdWVgthipdtkSBuzxQc5iNpd6uvGC1g21Pm9sTiwsaTntLeSz9bmtee2CMQq6ajCJfHudNA1wziwTQ3thCscEj",
  "key9": "4W35CDaWJ2tyC4v8jEjrkkrPq1LY3BP7P9WnSW3JBpRrMTj2S5k6tNbr2T9ke7AHk6XxoXv2Fb6JdNkZixpa5CKt",
  "key10": "3brPfg8ToFhJM92ZZMf4HFuWzpvnkiy3W1YrozZ8qFQwkDmMwRUT8oMxi6Ni1vt2RrzCaK92pXnWvfMPVSPbzHkt",
  "key11": "4Mc4fiXjGPFD9dBBXBnrmYdSHF5X2zy2vjNnQthLHBcrdtZLbQoWX1ccLPHDUAWj1ZV9aJzGqYC4up7fFH12t6UG",
  "key12": "5aBUazTFUN8aniHQRkzGHXiRv2dXGbsRHx3uQq4P13Sp83xQNedZWvWC8hdXYQzSZGk3FW9vuEcS91Fv71kRw8tX",
  "key13": "5myayD57PaYkYZ5df9bHedhpaBoGkcQzRmKNF3Woe5Ydw79y3sTsM3sGLJ7W4ac18gx7eVXJievM171zoUHF5sy1",
  "key14": "49qFhQjbUnbuSSJ8CZJdQEzpHHQM98cdaTJzfTU6V3TU9ynkeJfpFXdbLAEPNii2bSkCoF5TpECUYfKEiJADX4da",
  "key15": "2GqdP2hnRFZBrU5uG1c41iW2gNwt5opKcZEwSy48AnjkspUvpwoPD2CZ1egwYzXVWWUJNDooLFHQWeaefT6ASCZU",
  "key16": "8QnrVAe2XWvvc5RhcfKiDLYB3wEUBgHnbDkkuW7gcBWkHzKJc8gs46jx7E52prYUdqDpFKtqKQzNC9VFEWGNSyQ",
  "key17": "RegmxsmDky4tiunfyxnw6pdvRArUStuWguAHU3UBM5C7QVAKvEuKm8ZaWSAWEZFfRoVFvwarWRCTxPCmYk35Mva",
  "key18": "KGGH7FkkbMHMfWK72NPS2pVmf7m13m9EE1m2qbNCmUpkEyBWpgzVbPUEmApmZr9cYPfAHenGUmuhYwuwoQGQZ2k",
  "key19": "2zMrdKLG3hFNjFyVma8wfNG9PZrSX3eKLMNB4j8YMW56ByLLPtG12K3L2pvDRKuTpSCeM6cMdiVCydAvcXNrRYsy",
  "key20": "5GSKbsjiokyiwavhy8N77oyizAuD1N3Np6hqBLZyYtE28nBykxzz6A2R1F8hEJR1RFRCMp5w2GHTYDQUXY9z9Xui",
  "key21": "5xrsjerevCpaqBvuTLbLbHPkEu2R5MHhjjm1gLuUDENgTwUM2SCBdvVR23T2dmzCYbMiN4ra9EzhR8C9rDKM6DDn",
  "key22": "2dtonghXTusvzifyH5ucDuPU34VEg3fBx5uJZnwsCDn9iEa38UDzK6cDA1qcdMitWHFtzFpExv6fnKkCURG4gyDv",
  "key23": "5XkGiEUh6q7ecrVh3vkfoyj17zmrs1mwc1zmtN3cGnML8MfwmCMaCMg3gv5bjWYRhidX2yv1Kb7PzUgWZUkTdyRn",
  "key24": "2NTAHFRv9xsvRyciydLdoBQtAW3xxnJx1rf9gzgiSJj2YiutmG9Fegr3Bkr8ayZpnjyqyVDPdQB1LoxJVm4svSQY",
  "key25": "5HkiqQNmmCrwdMdwjcFKevtmGfJy4oa8s1YZyTG1XRSqpAiD1PVqEM19HShmB7GbMPbr4ghq9rJ6mM4UtsELcWVf",
  "key26": "5p3az85ePYqnXL3PAUqLjNpQSeoM2jymbKuLRFNBnSKBu1Q4yiSADhY1JYak43TwYtTZA7Wm6cKBEbxwnEDdU4xs",
  "key27": "42jYeyL1QiAbicAUxN7f2r26c3E3eVmP2TTcp9QueDMTy8FEp39Pj45mpoo5VyQ9AaJzwXz8cNL1CjeyzZXVtp7p",
  "key28": "4NmQuAnaAmuD6p49ZnNNrW5WHAB5WKARKSUGBZc2ryFoWwvNwfvpTMLmGNwpGyoM2xXizmrG7eisNMHQGeFThgHF",
  "key29": "5EUAUSpr7Bxb6N7XSbkDMNJA2VM3xV4EDaqBVcvVhkcUPnT4uWzbErZQqJUc5rbWBPT2j8Hup4MRmbtzzfRc8Uoc",
  "key30": "3R1qvqSa9zSPRMcVVcaFYEy5pWw5TDnz72fzjQSbnUM4x6PbnQDGKahKpkJB3xkV7tcM5CzVSjVRrQne7Q1oq3xD",
  "key31": "3uQhkEmS7EXLULKtn2xRkk428VayLr9uTo4RPfjbbuq594PTW6M8K1TG5Qt1U3J6tqHDmPtiDN9zjWLLvpEHh6fF",
  "key32": "4NSrzBeZqUuH5SvaLYhf79YTA5pUv4uLAgVFnFPrvHUNHhrnoyiHjuwyYXxRKRCoaJbRKn6D3P5d5YHKfqRe679X",
  "key33": "5RJdDMfaxPJSr44kjFbEHB8HW6C4xtt8vE3DaPahFrRisCVwptuaZTaW5Npwe2RMCXDkkvfbKmjHFXLwhakK6fZU",
  "key34": "3MZeKbG4a1KETKfjw5jxs3Uag54sTbyufp7Xrrfv9kMj3uoxDffZLQy26i2ESD2JRMt7eUaumPuUzG9pP85s2Xqn",
  "key35": "oj1BZQKcTkkv9CTAcu4aWKDXrG7osRRYLAC89xYHPFuwxmRyPGzHUxigChzQjQynrNf4et2ffiozydwTRQaxj6D",
  "key36": "2LuNm3R9BEuqFxX3XuFXeTrMdBVeALTjnD2d2Chj1TcVSbM5BTE5s5xGthee9At9FcVE615KT3jduhfzzCRSf9fk",
  "key37": "2UdWeZZspdo3XCkNaYz8Fo6W9nQxTJFgUuhJwj1od839GfeZYnCQXwn4LSGEFTsvYHnA4ddsQyvEkV3whutaMu4g",
  "key38": "3D3ozByMyjDp7rCu8SQggKqwh2GCgjz79HyGBGFq5iUZoXBVgh47Di71wVC8b9cHR3jSnXwfgxv6jJ26qMtRonbt",
  "key39": "3Bj2KCA6FRAgfnoi6xxninxSbb6m4QVTDmqZzKk1pZYNB61SE1uBZLWVf7u3jrJ3bojH1Pa9dmMhrtsjNg1hwPdK",
  "key40": "eQtLEQJEimwQfY9PeiAcDJFKexKNscjtvejPjsyHpzrVbfBRjhAyT3N3Lk3YQ2CsdkgxG3BFQCUp7f4ozCb9t4G",
  "key41": "5rHGWKDKj3MjqGXsBFtMZFhZzGuX4MFmUFhzFCmHnVu6TRATRyFhPT3RwDKYw4WMrfihK4F2iuQme93ji2ha7nn4",
  "key42": "4x8hPu36hzrWsY1y4ysAzUwXkk3yihqTTcT4saiLHBWYHd6rfxEto6QBkebFqGTLXgG4cYBkJ72eA6hAsGg9437H",
  "key43": "25PacJkVTVEeV2MpGj3JBFnVvPU454szzfhy7qbtwyw23zdoP53VySRY8iZ8U7mG39zbPytvFsUh9oBPjdmwykh1",
  "key44": "4rD8Sq9cMD8Dsky5u6iARR7CPDA9X5Ff4noFoAD2cuGtnnHRRbPhBBJTgmpqgtTHyoJwdTZcbXPuBNVEgZCEu6mb",
  "key45": "5h6qBpCt9Ky4vasVcQnfFQxe5hmjdmB6tZp9QqrEzNe737AWsqpUkucfjL7UjbGko5pxLj4rWScXiawnzG6pU4VD",
  "key46": "36WnP7w7AbEJNA5Yr32xJXVtjXrbfcRCntQJJRaz4Bh67yMfHMfDET3AwRuZnGDuZSHbZxtPfeUKLChKpn7neQ52",
  "key47": "4PZ7YRrpzkGfGUutmCnSjKYe2utdifqgz8Y12YB3QMB5Ex2Vvfd4Zo5agVT2JjrjZQCDREYMGXaMsYYtjviXx8Vb",
  "key48": "21vdUpUr2aPs4mXkQz9a9rYpUuvNGjBrnVNFxsHmFUwhtVk1RzxeSWBG4U9vrjm9oismDNK169uWSJ1NYq1Z26tN"
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
