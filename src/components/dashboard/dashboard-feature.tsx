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
    "2DqWHvoBppnckAthKwXq8RxjVjsMJujRrKZiFwDv6FEUVpwCzGFLtrgcGFA9rPsUP5zpadFry76XNtu3YpJBX7jH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48KoW1k7adpDFXYWvJacK6cLgVey6z2DiDjvB1dH9N57NWHrLuT8GY2mPFPqCieBPzcEyLHy9hJzD4SYBkNKdbjo",
  "key1": "3JF9trTpXwwm4VBCmQFVd7tEekK7QTwxYPf9JYMLvvgQ8j6HbHn3C3dUTjJi217YakhGUk9dkcsTnLGUaUEhzjRZ",
  "key2": "4wH7yK9iixzChmj41EdwF49YGyua8nT6pmJxhrUWrbwkzWBSx4kiSdXBxChiZZ4Yp6fB62qKSvh3yAepuuCM1ger",
  "key3": "4ArMcGKAY4HubFiQKQ4ioHa2djmRmwHHBYa4uDng3QnRRdSiLMw9sBMBxaV2DQdYbd8jj7qet42dNVFKPUUP9LNt",
  "key4": "5gaPzhTyFvB4HCzhSowB8KBRnqpG4UVevv3Pj8GQeLBTuVAWpDTNnFswS3T8g4G52u6UUKvv2LMUNEDaPWqLmngp",
  "key5": "62b2JvZvnjFw7zjD4JeKEiqWMsYbm5DfncaYXWihomuHTVS3DUnKhp3Biw54tSyqRZfur1HNdeYxkk64mRk2ZrcN",
  "key6": "3dWdimGuJvfaVzSs3wRGLge6KoUFDUqoQ3njUzg8w3auwqy4HkG4Aam3vrxjWSawhQhoBYbmjv8f44AZ5ovhd7wA",
  "key7": "Y8Jj7mpWPWTtizpE4XYzY2mcvjFPUd7FQm97GJuVgfRV2x9awJxXCLshRZPP4HohDFRX6C6yLRFX7gg5BQktm3j",
  "key8": "2XFo4JhwfmkQnZzDuZCe9QonMp8EeJ8c7F3eZdmmVHW1PQ8mNDxsiWf2USduoCCwdqfLXcxp6YgtXNCvVThfiCjT",
  "key9": "3iTMWsMgnTYzaBX9y2fYPCm2zZfB6YQ2y8vmBmeiPMAFiDnCKDrY3tws2F4RiMDFzNGiH1ZCSGEGejwFFFXHmub6",
  "key10": "4UoSMfnaVtnRHjvE5Zaw8ThFrdySEmtyo2orF6rGVZQBoGgcsL914L87qckJBGzi6XTcAxPAeBau9fUFWHxkikTC",
  "key11": "npsqXkrKysq4TmyztBqHevyVUubh3qgCL6piWDwf1QpbMpXnGikJZ28RCMMc5kP3fgbLnSkCuFcZaBafKXtHYc4",
  "key12": "2UhEudw7pRaQerfhTAsJ7Sg3nsCJgRbMGNQ433HRBjHks3ob5EByGVH1ZBWYGUHn82U7gB8SBmdV7NsJZLAY2goL",
  "key13": "3t6bayrx5syWmJ8xDAwDgvxfsBYSYn64v5WvL9eNpvBXr8ChPA6pXAPWe6Urscva1ACLa8CJXXDLdP6GH46UvkpC",
  "key14": "25VCiJjfm6cJjQAd7MuguQbMkzJ6B1Xryr2DMkgn2pyTH7db7pH8TgWu62daM5zaL9egw1gN3ffXbG9iEDexMUSV",
  "key15": "4jAukdKUQXQ6C1RXaJMZnrGMtEB9Qi1kCYy9PBd2ZxzaeZB7z2uJg5WdhZY7MnPVz7WS9V8ZeRzMPraYxqT4Rhmf",
  "key16": "FhVBenDQppWm1qGv46ZDysJcXMN6eUiouzaD8RE3kpzxaYoVXFvfhtKn5QMGwqJ48XxfcTgC6yz1i3jDRWC8Mg7",
  "key17": "236Pe3LiYhLKKBYb5SuoPmMepy8v4UT3M3D9NKdgKT3v5pxR8DgkqpdnguUjMysERHUWJotB9TdxSdWKQ74nYinN",
  "key18": "463AKwrbKxyiPDrhByBAtAnXatfzM8Twk6Ei6pD5GDXquFCDhJg6mknjDP6s9A9Wu6wJ88xboec4fXeaST2CcW4m",
  "key19": "4Gp2oNehUPZr8A7dohoVJ37KK53VBAnCD3J863bY1iqK5XYptBhKHcQxgcQ5kxfVAhh6y8WomwrEFqXXTGhEruHz",
  "key20": "4FFCzNJ4o22aYN6FsM8zyotquRDALdHoeLTXF1yGge1uXM1Sre5LWjcx2r7rVA6tQJUjoLwTh3dZXKBL3xv3zW4D",
  "key21": "Ho9HFtvbs3cMesF4dUxgsuzZzwviGB9eZDJuG4gYQGN4JsLSmD5zuiZHxBAfjroYECjFpUCnkv3Nvoffqa5D6DW",
  "key22": "MYscip9uk3j3ah7sMGHb6mqqQ5LbCsEcUJ7egMVNBNf45LdHSCPvz9fK2nLRSwvTbS4wAs5jyimrWSZUWWQCEBk",
  "key23": "5rB1GGvSzXEuMH5jtmxJu11GiXLXrJvYeNr8GgMCfDqUPd6SCDqDfm2LFRfLbGhP3PWhqKKnggH6CCDupAymLorA",
  "key24": "126AMh5qWZGm5yN5gFEocBqAU5nMH2RNmUyfsiqZGNxYw5RkhzdhBdHY2v4G9PbFeKJUFLraCEr6sudoLCaemgyG",
  "key25": "2R5QDWwMEHjCMv2fJ2JTvQUThWEpzVeLMMRviUJrLe8GTkRkowBo4yvHmQuvXALuyJGcRvxCUyK1GXT8vSqZMLbE",
  "key26": "57MGLAPtM1xyZfdknXq8vmAmBhPNibngJuYM4f5eXkSw1nBL3TeF58XQE25Rp6ZPGJdphzmzHS7q5cLmA1JGWPvt",
  "key27": "3DA22FoGSJNFsixsiNwEK6CeLafJMFZKdG93YAWUAmehm7Hnd5HFLMJWg1xXRfupWzg9rBJfrHgo9fJJ55bHmCzQ",
  "key28": "5fgMbCjPMsuJRUUVuDX3dR2SaQMo3JhJdP1PcGXykMxpByjuEcLRXRmAYdFphTYtAFsyg8aaZmcCNso8DEcYFKYB",
  "key29": "4ECrZaFewJiBsVV1AVzCg7dYGTQHqB5q3Hvqptax3cgEUxuJyHJ3c6P1Qw5Pz9AjC4p8SvSbiNeq2kzEQw59UjZh",
  "key30": "4XzSH7ZEhG4TwchTCRM75Ugzo8TCpTj3Thx9gWK4LW2z2hqERN3rvnZocrCXMtAzhZz89HZYznCog9a3anMCZ1q9",
  "key31": "5MmRYtnkrWzKd3XhRgCUxMqnSNECDn3sCsP9977AQrMSAzXSzJ6JzjtFXRFguwanZgobmYNgF1AxUYX7sfPfcss3",
  "key32": "4D2jyG38QfUN3uDmddDFLMXUhEBBgDy56PG1ZGxohpKgW714gsRe7WUSKtapdoANKfUhY2NTQKViTNoX2nDLU3zJ",
  "key33": "3tYHAHExjP23WJA4jkFHZuXjj8YzppVbHAbMwqWLgmyy4suWKLMjkPrmJGdAznu9L14c8f3cnM7h6R4xPVmSFDDW"
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
