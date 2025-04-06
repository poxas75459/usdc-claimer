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
    "4sdkAb9XsGUQdLS3sStDyPNaKbpAXPzLByo53FfCu3uBveHrzdfuJ2tniW7ty9rGTJZsKQ6fvV521A8wovYGVGnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pHDVd9TDH3JsgYgzDfA6hBkBN68JKtWazrdEPtv6LQRpbvFXEHRL3vkLb3NSSnxUYxbfvJChJcnH5Rn1KygumER",
  "key1": "YXtB4mX7Nv9U5ndbYQaDLspK14Eq7N5Yv23DoqYhy6SFMkeKqrA1jhvabwPpU2v7GfV4kPfTpdcKrui7sNh2HYn",
  "key2": "3oxERxtJw8EUAC37jesgk3jvBV6cinikNp1rVXsz3nrpcxSiH6XR9PTDVscKnCZRRVCHookWJ889eWKcNBy3f6Px",
  "key3": "25ojPNK6CPgwHtbwwjXEU9tXd2r7sAHHqkizGCk43Jkv4ENDLscAbZh7YS2aYhq6TmYkDMYgA9eLDqYjM66hMdMR",
  "key4": "4jwehb9exJLkq6RhwFKMYgKiX39Zzhv6huxt2bMrDEfFFiTLkufbPDADWECzviD2nu2TMY62LjFPvKgDytBZPFio",
  "key5": "3LPFXXBKVyax8rBEYhDWJejZXEvoHKMF8DTQvQd7oi9ZGdqnkimWgo1Fnz2HqKLmXy7Fca2zwo8tCCe9z8eZ5SrQ",
  "key6": "CkMDT5EiJKnNycRz8fQp8vdaJ8hNYSUfbGQCqfQi9eEDmB9R4nM4FC5voUyAkMCzFFe2Cs32WfrZnmpE4HTZcHD",
  "key7": "XqCZ34EQhjvDdKiweUZeEgdGvKF7AjcdHBEbrPawFKFjHTutDKh8AGQ6NN4KUvvq99XNQQDC3QoKCifYn74eQaZ",
  "key8": "5958PX96qv1i3Hqi1oVbAGNUvzJruqjtb1iUvEJi2WxSAzqAdrHrSD55Bzfn67VUyWLnqoNeyBkqnkyob7zuDsjo",
  "key9": "3gbrZatnKext97hz3CfpqS52RzvDbPMr4U1t5wkMHBMAuwF4LpoptG37qVtfkiP1h43tMT9b8rUE8DKB3xdCAUc3",
  "key10": "2kTtR2HQfKk8vbrgFxXurtAdrskj5zK87Euuq9XP8MGMSgkuWDsarNokjxVumXUo2VGX6zpX8Jp4LCm2tHeEjteN",
  "key11": "3QDjfy9AMtmMqKjh9Ye2cCok9fqJ49AcdaL85ijg1jFE1TaQJWomNVab7iUDXGPwfUHR3jwMsYtMqXwtnqFub4iR",
  "key12": "4JKYkyUmYRUx5GcemHi7hfPj9gXzj4efnW1NeEdH3Y7Qv8pmbNp1KcfKFESHaTtKN7bsyeNhzJWMjH5EYTEXnmuP",
  "key13": "48Nifgtg2XLBKKDKJQe1sWNwuFLCzUvRf2cNESHmo2yW3bFpLpAUaQadp67mCd8VCYuzcjAqAiQCnZk2khvmQHh5",
  "key14": "3oGCytpb9itJX3djniWsnFa8eQGoxwoMyTvNWKk66ZPPeeX35b3q3srkND8GQq4tHe1eFf9H8P1RukCXVmTjMkkB",
  "key15": "3YcyoUDeR8ZRSyM9TA6mdwysg6VNbyZtsvjF1SYqFrWfeR4StjfCXoVwtv6DUAqbaSGyxUbo1KRZRJQB18BNTf2X",
  "key16": "35NwEL3xsrT47KueeHy7gyfTqv347RmwzRUbadDD8kc5zLFTtPEuh5yDGicxbsEuaVPa1PBSVPwyRUtN5EdLso2Y",
  "key17": "2Rf342C8JWHKyj1XVLnjrnUrNRnqCCJLXAdTf1PAh7WTYWWshAUehaH2ia6CTTqQh9jN9rTooVxGUWD2KYErv5db",
  "key18": "2GHh3r9YodBRYK71gWhSd88X89Pvc6VihUAAEjqPLYPinw8e8yrThPTBeVcxk9usRPMWnxRFFaJCTgCX8DVVbdGh",
  "key19": "UgMthwKbTYQJ5YoNbsgRfJZTB5dakmn8U1YMkoVqPTPMKWTQMFLYofCBiX2wGCvTcXEErpfFgndUFkM5e7gZM8M",
  "key20": "5nB68VV4PV3FVUu9QduhC6z7bjaKEFjanwQyc6mj1V7HxRCgEes1eiLmGwtYQem176yZV1NRHt5VUpZXuSsSC5dy",
  "key21": "3xoNHz9aah9USFLSFjy6ffA2X2Qy254vxZWZ7XX7nauttjo6vLpH29BM2A37T9nMCbtiWoG1ZztXZMYLjitKPf3y",
  "key22": "2CPrfAZN4Z4QdDy4RsJxmp5E9gq3UuCFsiFU5fcZ9vBBfJnPMzJmjwGgtTF9VevW1AdTLJvcrAkidM3aPdDKGJxF",
  "key23": "32MpyzfpHoJJkViTDJfViWVLmtAuhhdnu8B41LiE2ibCEa6WLxArKyB81uLwnC7DhXeMfa24tNXoe7z8CgSxxVNR",
  "key24": "2M5YkApEvZ6ggWGfduEnWji2Wy5Q4k8psH3JU1CAk5tAkhZ75QSFst8CJsXebUkgbWJNYEdNw63T8oAE1cS88wSt",
  "key25": "4rpXrpiMo5n5DAzuyL1Q83Mb5KgTUjGYtDDfjH8rg6pR3JXPEUPwkzUUyvxX4bGysbjs3A3ZDyL1CKwNNdPEYFtb",
  "key26": "2fpX3SP8GpnJxfwsRGVQ5zxwsh17KPgCN21WEYX9dM5fZncK4tDjtrsinRJ2QWhQHqUkCQMF2tAtHJ9UufNqQL9N",
  "key27": "5URryPQpewz3RbuPFDtor5AUVbw2FybVaFaNXPDCzzNURMYp2uDmYQN5Dv4ndetmQPEeC7NjTmzyBX2yiJpg2AUQ",
  "key28": "2T4BxLVcZsx9hs9U5kUhMhAE2YFEJ1ww2UVFX7oEzGmX7k98KWSSiM9sAi2ntdQdbrdg7AHNsjXgkBuR2BVFNvap",
  "key29": "4piXpaCwC9tbCyXLAbQPxM8z6ZkvvjvuyhPffTm2YtA44p7hncc7WixN8GSvFUmKy1oZo3t8hQ7p2dM5pwJ5BY1D",
  "key30": "shFrM2gwE6ytix5zvVsnJzsdEqmFpqbN9BpqKPYFbpoAEVJXn5sBhcDmLnfgFdVXFQL6W7w81NH3uZ88x1ThPR6",
  "key31": "2PPHrKaeoLYXeNPSmE3zFH2AfAGVeZZNtPiWqau3w8up9bfwUoU4L4iiJngKU2Ao3pRMAKYKtYdwmPvTcTbh15Qr",
  "key32": "3kGK2XLcuRA1WwhgtqXGJzrBkYFfT49hLkYxgb9E4hMbMGk68jckNvoCGz22HDJzy8TdmyAK7L3fmxCWL2aQ8Pef",
  "key33": "3goDW7Vwbiyi3eqUjEm281aZQea98SQzEGKvSZvw89EJJ1XnsjinNp3ERWtrkGX25nU1Ms8yRkhHpXMYw3d6B9V",
  "key34": "46T2u7iSuXwz8UG83BtqwVBNYRubdm9gM99GRt3cQhwUbyco9r19BxrKZAeKtcV5Hpzzi6ztyVKM9pExDKnweu78",
  "key35": "byJYKL2ccGZUzEXybAW6KjuyUYT4ZNz8pbsHeRpmZeVGsgqj5kQ6oecJkEBGfPaufEvqtZ1hf8qvr1KL23TgUhG",
  "key36": "2mbV5UMQw6soR7pENcjRodtmdDhHDAEML6i2vHNbQuLsRqsq7tfGVKWjNhzHEUn8ehHPPsvwGH99D8z8eJEmXpf7",
  "key37": "5rAqB4cB2dP23LFN3nHo8eL8L6UrKad6XN8J42AxKd7aii7aEAXuP19qcVREYa5FxhqERa9sMMBx6cN15YvUE37e",
  "key38": "2kmY2PyFjPctYA4wqVwjUH3wtXjiY23YuwhZE261ZPbjq1HyT5DAr5kPiUPSBjSfEBdWhDC1ZSpHm2Kw1jdFHiE"
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
