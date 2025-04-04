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
    "7kj61QnbGzVpb467VCLecnGH8zRoMBsqRw6br1q9RLbqdtaC4v6nA7AHkwMXyZoHSGEJATnx93VouemCeEmQDiW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NVmFJnMx7C84oNvSn2gLwipBdtQkKS8T56NTChm6VnassKy9SXt3ALHAEGMrxiiZGovwkdxMEKHkzLMF67JcCtk",
  "key1": "4g4K32MWZkrNTWkGbck7byHpmGY19byUHw9JkWmKLe3V97i5VU13yC6tTKGdAvvu5pLHtKYJJMeVj7EN4o7TrJWw",
  "key2": "4Bpea8RGgRzQPJWP5WXLsoXNYPTdJi6E7Xe4tFR4jGYtSnkKxcVDtvoDnk99GUH58suX4wU4LjxkGT1KjWubnGFg",
  "key3": "36G14dM2VKVu6QYcuQGxKLGpUdPdgz6EivimSAopP18nRRri875yhb4XDiyghMqnQuVws6qp95k3xjLW6QnCHeKc",
  "key4": "2wTd8SbEXacGpuxaLrEUsDG5a12mF92E2e38HhsYwoLEsufLC2WLJE1o5JjBU8axX1c9HfmBMXzh7TvP2tY9xgrv",
  "key5": "37Y7ddpCqmtFss836o9FeHTsb3LmwKDSrjhiUUNn2dYCxbsGvsdN7pD9MQcGjmA1ZzCdHif1YaKKQTFCKLRvjS9D",
  "key6": "53tYB5dxi8heB7MMehst4dzjSREarPNnDV6ZpCBaQ6QqsZgKB3FMvbuzDhtNxP8LNYX4oT2KEbGFjFHg8n3bfRJ5",
  "key7": "59esFpXq47WEHWuePTBRBXdW2Re9oJjdRi3kQ2e1qFchVvnozUtbFviM3LMXbqnrS23YL5DBtNY8u6SStWreXhiE",
  "key8": "64aNAY5M6NcJQ8YrqTf9DEhV4ECstnod8zKGug7ZAu2RbyeXJeXBgTLxqKdu3voHCSoDqwt5YvrgEseyxfLCGXP4",
  "key9": "5Ec1iumzRaRu81Yk1Vk5DZAP9Q9CdGBSXCa9oNsJb7QVB1fZfkGKonxFyEvqaKXYGBdTTm8gEVDtVXusWYbxWmL3",
  "key10": "5Rqd5MGQfZdppUFhisi1RWHEB4J51NH2rcoDnDmo4AHBkr8cB6xHeQnz4YS2KN8vuLhNATQdee8RxTKFrS51UA5R",
  "key11": "3HkpL3xoYjccZBUdrPWsAqWuqHT68uZvDdMRaX65EBJEHSXja2Ha9R5MxsRwzr6SZeGkxWa7XPyDuPWEGnew7FGY",
  "key12": "3rqRjrH8TnZAVcywEQGyrttPNQ89ccGvE1eZ2vas6SeZWTPfx5diUgGArkNKDpstQB3A5acjgPSrLPTANuvcGxte",
  "key13": "3xHjXXdgvKsryDjxResSQAwihqtFGrQCu55WGjAo4cNaAMQsfP9u9PsmXJrgQyJm1HiwQYvUdZiiCX6Zeb8GsGo",
  "key14": "3tfzXuekWJUv5J7XAvyCrvNB5oXHRcNeMJpv7ZVMZcVHLA7K1wDMnKRkqJz4kt1NGyyxnt9Mb1A1ztxZeEwboQKS",
  "key15": "2W4ZzJike6k6Bws377mk8G2ijqdjnCJ6xSimXDkEWATiTdAE42GftZm9jLgbnY5hHTeTr28Mb1L7aTzjxQx4dPs",
  "key16": "4iPVx7tEg5A67k9mtZXJukSCh3FScRpyBiiGcgurGTJZgJvLr1dxNtX7SRh1GEpiwacX9oKXYGv18DzehN5MSgMr",
  "key17": "3Lf96tcKg8njPak2yqhNLtGLqTPrxJUV9oBqSDbLqBgAKD3DQwDwh2YDBeuFjjUtpxB37MVN17dcbTrJeLsJd9h2",
  "key18": "RacnXqDqUZpat7hH9dLeCKSDUbGmKUrmn6p1ZCsnuR5MM6Yh6qPkMCwuJ3hoQZqRU1qJwyAYTDtp8ZzjWLsXFqz",
  "key19": "4Cz7pmHVytEtddb925BymM5CCxUAXA5JGpyJL2qHZhSCBV3SRgPPfShEjijwSbobWSJDuCqtY1ceZQbAdxKCGKDH",
  "key20": "c2Y2x3Ag1Z83aMsLhL8foGza4uQcyfAdKyxzF8aZJypuBf3haLGUU9Bmdg1TTU3hewkBh1zH8RWUrQ9exB8JgH8",
  "key21": "4mnk4bgQaBSt7QQLJVTRb3u8Naf8TRMWArZeCiWy1jwwiNo9zCwTtxxdqpskbndJWAGakECGR5uGtjNMRGeEG5Qu",
  "key22": "3RZuDaDwgrMuiW4FKi1sdXPaPyMquS61WtU4di7Lz3GmYoXz5Wa4svQrW9Xanpc2Vf4CRee7ZuZM5KyjC2qhWyxq",
  "key23": "3kRWiK8b3jgkF8dDieopPLzJcRBHRkHLC5T5TEuCHqtJcrZ43AAwAFfjkDDsH2YtSMXLZ8N9tti2YnTJ4jDLk2Fv",
  "key24": "2bgDF2gTmutXnFFe3LRhvfF5D3o6hGwedUzmmBDHC44xpKBLW4zm1gUNTZi4e8hqnM4fPrP44JfMVJbcKJC2xpVE",
  "key25": "4t5Xji99e9y6mrzpXUZ3DZDw72g3CiXsS2M54pdrkyDwJzgj4LBwHcfPy4AC1p1eHQKAoeyQ8PYwgTPekASwttYo",
  "key26": "2mzre2H2Ad9TPxzZzgt2eR11r8KVH7ZWYLmjT9nU4ANwbwsnmn9KKLvqy7eRcMZziWhLGqwaso7XSXvUQxgaQr6B",
  "key27": "4oqF8yUP4g15Vctprhh8QCt96q7otHj4QF45djJti9FQwK4Uc3pGAX8ztUiDijhK777iAFD2P9anxuS4Bg2McR62",
  "key28": "Lsz5ETeJk2g3XwDuKjnrxjxaGdkB1NdgJAQSYEZ7HL4oyKs7UYZSCgT9TZZXG4XAi6v7D7iSpx24QFRjNss6dEc",
  "key29": "2HGqgPPhKFEfcpt6zdpLaB7knMDrZoVesp9VWPVqAzzasqW1ZfYammjBWxpn9N1yi11MpfTbSWb6wEtvAr1N9a4E",
  "key30": "29ZAT2iKE8WtiXw4h8xnnvKF4ndquYcHtnquixKuiqo8A4UtTorDJCKkzf9oh79fH6sZh7HWpFwZLFP8JfoUJSAP",
  "key31": "4c8SMG6dDfeurmXAtULFzFojDweSPmmZyMZ79powoaH5tg6TpWHCXJSwEvK5sWzwr9HeJGP73gP1VLvGB5aru4Zp"
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
