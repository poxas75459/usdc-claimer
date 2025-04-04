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
    "xuuqD6eVkPW53xjmtyGLDfu9sreNpwaYJGgDSrmhrLPcNFLfwa44B6aUin6d8Byy5W6kgkbXDwdXQ4rrjZbafLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35djsJ3pVMaytFT65mtVcsVCTECxTbeGjawpuF8sAPk3KYZTqMUiEeH9RKHYBUPFCJEwkdXhiVWuviyps9u9bCpL",
  "key1": "5fAVtvuwdhSc9xKATDidwF7AeihPZ6X2AnJQQfGdyjMqjxv8ePkUcya2kwxw3YJsZwTFALsyYC45aTEZvPM1Hszj",
  "key2": "5p6NfnJ3DyBkbgaqg6VgLzKgFhkUicye5ezYxo3fNk31yYT9jWEHzPvzbq34KGfZTgvPzzrA7TURhyMi1uRXKGBe",
  "key3": "2jQzmW6yhujHP8LVqqgAzNvU4j8XbDYdsYSQNwLYBUH2ojsTDgMHznQfQA4HGqmptfAWkyoNATz1Fad94bB5XKjC",
  "key4": "49LrXNrcXiStsKhXsHUVoUnRqzYKSKc95rQkaF3hxkkzwKQhemNVpzdWREDmzquy72iP7eRT4pM2Gc8dq5MUuoV6",
  "key5": "Yx3TUzXSeH2g4Km23XZHPCj8RhdCs9b3qNmhJM9Z3c8NqNNzQ3Pm8tUKgyJwcAi84g9aG6rR2uvafe5ibyXNzE8",
  "key6": "2abFy69QA4yTdz7hNCgkhkuaZiS2a8NjTWrpqoE89aMDvpbeY69SSPTMbNwTaGSUtaKrgbT1PierTqoxHWj4o3gu",
  "key7": "4qrkqh4RgALpe7UXSjRmmaJ5EHNXnNf5Uz8EYbTWTgH3y4pXMVFtsTiX8eg2HGGpbwZ1qXidTpPLQtKBVWY3VMCt",
  "key8": "2FC5LGkmHcBgVTHWYbqDVJwVjCNZhMANmzEq6BUmuQ9oTtfoZmRkpYwPwrt7WAzLo34RHTScB3C85igGCxViZMyw",
  "key9": "JWqsQLjXs4QaX95mqL4S19zNvZXXHVCV9ekUvZ7y1G3M6XznjCf7SJsX6mHyam6MSdXM7vKgHfVnhJmLo61efQY",
  "key10": "28Hk22aqzadBMH6e1PQLFRenzrx8WDs5zAaGv84mKvJjTYtwdb1Una2XCE8wgMosNhAM4Ym97ReXKDdc6jv4r7pf",
  "key11": "4sBjqrFLVTXgAzfo3kBvkFTekVMWxbvV13WMtCGKxcr3KgtVUeaXovtzoEREd3nMksgUBdJCHybmsdG8ZzSuf78R",
  "key12": "5FSGUt5PHZj3UEFXyKFiTygZ4Vsz3asBjAXwiuDmuUPNwTnTBjyhqMKREwXoKiTNtBWiLL56oLm5XnuVyLEEY5mq",
  "key13": "5op4fBKP169mnbeRuLEWehSrSnvdQZofqQeTnw74ex9okzYq3gc4jAxt7cdvszzkKsUvRz8CDX93pCb7ncsHovQ9",
  "key14": "2yzmP3q84PzJaJ2oVs9ZRNhQ2s6Xz5AMcUVk5nUci2Lzanp2ejbsh7dgiNkcoxgKCRNU7A4GRRhqZcgTGhn4X613",
  "key15": "4fMfGtqjDWhdpvbm8W33QySjQPi9RAU4AkEwhfHiVohcYjEc2uW2CgTzUspB2dgaJUQDEaWhfgiF68sWbBkoGmWD",
  "key16": "54S6Y4wT4V66QkYyp3i7cDL5k3RkdfjSL7hZnKKNgqHyu9J4DKRqxwCw3KpauGMzHCBxeUHpzjZJukVXE8WNtoJN",
  "key17": "4VcFK8x5BXc9P3fBh3eavXSLMVjppsY1RGmAAVkK2VwJCkLMVPa7ppEexmjmz1dXfuxQgvddZHgJmGqqbBpLUBMA",
  "key18": "5ovrAUk9uFUfShowytMEmmFUmMtNHyWLmYCBQvQnNhzBHwjKdNtC3iyHqE1uJeeD2yyV8VUzeLNkkZqXz8AY5dGC",
  "key19": "5VUfE7SsBAoiNozA9s2UQw61zaJsrz8ro4nS6SMBEzrfLJN2RpGL4TV6xwx3HYu4hSKrHKQTPvZhTDt7VaA22NK7",
  "key20": "35W2RLXRRX7Z31d7Cnc7BVyiQXyBuun3tv3PoULocVt5NLwS3pWVtPmkykSp4MjjC4moKQQjVCjirRxnVA9jRVpB",
  "key21": "2nDseVVho1K4NXpxwt4B9Guf9pvmj5pi4wNYiB2mkr7kij5YaVNApxoXDkKLDtR9PM5uYBbuv6Jd79KzeMmJRdEB",
  "key22": "4qqzujkZUmnZ2DWXsJr9cvNrmdvB8qGMShQkpvgMrQvUABKmC7vwTy9sE2EHwcDGHqsSeU9rWzAjuCvqH5vaq95",
  "key23": "485xLS4ZyGTQGZ5EXEHFzhfEuMtoCC33KBxWjGYgABwiAfgRKfytshNLPE61xd2hoZAVKTx5Rjtt3Gurs2ohS4HP",
  "key24": "2KNeaAWZRRQogTDX4VLcgDLRUxEkB7iYDTUwaJw54g4LqfGqsy1EsH7XCj7XG9n8kFwF4qNUBDR12HMTWTqtDLSp",
  "key25": "3yk39Ghyx8hRdX5cNn5idrp9nuCAJoLGfNYPumHkhvjfGTspAe94fc8zPeagDpGuU9rndt53zaC819QDziB3HeDM",
  "key26": "2oAZ2i49LPdZAymZnuuX6HpUxGfrLTLbA3E4RiSUnSH8SRyh72DYTpAyKwKoWq1dYG7ktQYZq8zmrActMXNpnKPR",
  "key27": "5TSENjkAhE9xyqpQHepoazQnWHkdV2NhY3grJchGg6cSynMknSWbfZ9bS7grgzdTDiz6UBpcuLfqMB1j2tpyceN",
  "key28": "P63UBnc4qfnZQbjK8gKMuYdzLvV9zKhA76DGs9edieBzmuUgxmDBSjm2YzXJH6utMp6EvJWcPirUhTz5Pd3bRPU",
  "key29": "5qtqTRW96P1YcNQky1QRPoMEJe2TASLovveYD8wdJJ2g7LezL2DDwvNuZ3CseSxp6r2FV7ZVXAf7i4D3crKBHM9m",
  "key30": "4KK9PCcynWT6ioPzeTrW2SNBoqENx8axFE3hjCPNS29Tc6Ln1Cn5fDHbfsn5SJmfJ7CzW4oHfuPT92mxeuXWfkKU"
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
