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
    "5qqybTdhw8aLDsHwrsz5bHu26Ygz4gGHUSeyu1npmEQhaTQeVrFvQrTSNLdttXD7mC7HnhqhrxTbqdPoNjzzWwYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "474oswA81CNdL5XsTR5DofRqitaussrsYNtK6Nws2ZXEets1ZRpp5JwHyofUxkmPqZh2ZEif2fhti1EsKe4e1DiU",
  "key1": "jVhGaEeqNX3DwsgpdJ9smmNHWyK8X8HFXL8M6JdF4A2iBcXPW7dmfUf9St3Kd4P6SRcDXKcNubJmFimoH8QGLch",
  "key2": "4XJqiDwGjJRRTfu4fzi9KqZoVzN9fuTUs9Sju8YwdmhQmzf3MArzrSr8MnExqicPGDXEynygBzfH8wC4T1YpF14G",
  "key3": "1UmmwheDJV5gSiPVsd2Eda4yG8HXC9aff22xceLHXybX3P3qW8M4YHZid5H7qAgWNpbwpLr6e6k5Z3RTYSn9CYA",
  "key4": "3JdQ7KSHNqWYrSK7QUFfKcqHMPTLxxnLYAEcU9Jwd5VDFSjspygYgx9SRpJLgCm6g8PiM9TywwPFDwzbXAQwujVE",
  "key5": "5MVvAYE3uikUpaFGdAYPTEx6hN9d7sV8258tU6wvP4c3mM2D8cAki3zjCDAE4HS3tdgg3iajXRiizZ9wNsHxVGrE",
  "key6": "4MRpaGxThuyup6ST3WWCXGiVMrEWiFa1ornwksunaKzWn1AxYp7HefwgEUSTMp5meyGG6CikS7RfTuyq2xZaFgKD",
  "key7": "2TNt4zjgtK5YSyfDHBTo6L5ATHHaBQGj3wL8tvdyHTh4RKeWzBEL9AcanbPkMoji5SLR1JrcxG6ZX4BiZjX5EntA",
  "key8": "SUC1BqNtC3cvoQHtF9EzvgMXXmu8nGBBAgKuXJwFRT7qaJD7CeLeiWnSuBtquCcThEuxr8MzzEHUcpAEAN2g3iy",
  "key9": "3qaTBr285gSqLc9gNNxe7VP5As4qVFJZzYA1uE5FJLgtp8xKidvE73nfeoQ2YQuCg6qFThQQyzmfKh7Y8N9dEZtq",
  "key10": "5RDq4RY1SGkXJfxZepvNxegWXWrjmARFCgBRdNmMFhQ1vm5waUqe4LBz9ah9mrnMBdET3TtjjSc3AdNHHocFsaNB",
  "key11": "aW8kfmsfQw11cTBF4iKgAfswV8kBr5azDYrh6MJe7XAvMWGottxghmv6qzY8yYiXwzT2rRkNM4QSGouBk7Dhdtj",
  "key12": "597ZQLuJbNAMiDbXNyUrqX9bN3JXyVaFEX2uJ91CrLh9CjRFfMoJqUE4zLpSX1GuaC2UseJLQvsPG4ykRnwkyEXV",
  "key13": "3rPsQo4gVjav5E8kBMDFXnsJomh52wZ5PbMa6ATGCcbmimCXbMjEzecrZb4Hov1vJyEusYnhZscerUBQBLG6YdnZ",
  "key14": "5jRkz28N4HU5c2jKedRKoFhkGcj3AtEnqR6JoXv4SbR8GFM2KcBC7RCCCAzHdMp4nqQDKg3zhtyWDYCPUEbgi88g",
  "key15": "5k8MJ7YeSR1JK9Cr4AY7UJvd9VrUqjUQycJkqrcxwo6XLMm6mJcaoKt52J6iLev4RxNZHuSebmJrbCX9Qh1DeJMA",
  "key16": "3GTE9Jbpw7ZPvTYvkK8RDQaQcZgBZbyVP6y2s3bb8tFGLYchKaWQUuiZVHBZhqqmeji7jTNzVQwtj9YkjyyAphRp",
  "key17": "3GvsqGVsMeuPwVHRdVNqEPuDdYkdV79dUyMM28cE393xa55CJr5BTgYJCvWLSsyDJBjNnQFu8YMm2qYRksXcnqg5",
  "key18": "5SMJ5oBa3fkV6ecD6UDX1LrdJ9jxeqjxhC6e4guvJZfxWu6BF17PdiFuVprrDgkgUC3naLspiHt9srXKgFMw1T6c",
  "key19": "WHjjygP2PXBFj1xNTZNKwGkmKBqg3G7YmXx3Mwwfx3krWWRzqND2nHLcJEPzwA8v4uQW2wJZ5iPRuJ71GRFbsGs",
  "key20": "5FgYsVh2r3sY8G7gp7wrbgQ6DdtohgzDWKjKf7tdo5c1bRnS5WBEhoLPoNbYPoqezMsDbsmfikYxh7PNqpMhBUna",
  "key21": "4pxkDdYmCPyh8NsBWgPng4sEtBn1oLyv9adq7kpGYmfXXe677hvvbxMtCVu3Vj22b5cecuUQSSXsJSeULYEubppa",
  "key22": "3c41eH6Vtg1nMej7o8yx7p364JNYSrxgRzdW4acHvbVq2xLdqP3Ej6FU2RKGbEgJWruux6i548fL94Dbg2MaBLQQ",
  "key23": "3itaMNK9KtGtsF4MCvx6z9WA1zMPHNkU8FpnqjLnE6L1D1u9WCkXur8xeUzXziYZWiU5ZKuxjKvUg44z4243fj96",
  "key24": "4xbn1XTbSUFoSmin7RnGbjesrGHQeFNbwqTCYzKgFF2EmJerg88cebQbaKwmVqSECtBzsqb3QNJRf79iqN63uGor",
  "key25": "591RZoJpwRSxKM6e2fHR7uf8ivdkpheXfEvhcVGtcTUKmRCaAKnJ17WNjfbCoo5cbLTXsTQyGgqPu3d8j72DcTJ",
  "key26": "NeaYL4AddBDiXTgPRuPiodieBd4G4inMbrurjXw4cqjERxHtACnvQa63ini3aG8XY4MjJxbmaTeLYk6d7wKwVZN",
  "key27": "9FzP8ojr5zuuDLVTsnVs7yVir92mJjAkEqXGGs6XHevGnmT5U1V52of3GMHTtsJbUKMZE2aVAokFveAAU9qRKuX",
  "key28": "3CuDLhBoUYEg1KRp4htwuhYU1cB8HoeWSzegqwmkCx3SiEktLMzuNMHg2Ef3hZ84hFStoigJN6jrcpMmBgUaYxBc",
  "key29": "4oNiYFvW9A7tuv1Tynx7AZ1L1n6zvs3etrsi1muipso134RuhVSBrDSQK3VvvegRXUb3gpGuSyuWEcoSrbTjKz67",
  "key30": "UD8Gw3Q2y7EX3q8aNeDxttxYGySPx5j6XX3YnYR9KRvvjpYSic29aSHNE5fZ512GKCacLTxCDPiVCK1LVKuuk4q",
  "key31": "2P6JDFBnBTxCggkMCRLBsYB4fJAXhdxeBBi2P5jt1QPnJBmS5rd2fD6efSwSPWKfTt4BLMpq8UNxZH9AePUwqxgS",
  "key32": "4oDjg2F7eHo13dccLrAXUgZV2obPCqBUZfr1MtgKJRqyj83w1Aw7zpqZhPNQFzLfRy1mRp2S2JWBvcMPYTxxnWHe",
  "key33": "5QvQA25GNJbzuVzweHJcmKdZWfSZDok42m4tubWh3hQ97r3a65tFcey2qun458aD6GjEdShJFzMX8bVuUqTtZXb",
  "key34": "5RAVCc1uaTSFQ4T9ykwLYZM1i7PdkVoSAcmrMFcSBVaJS7geqfpoPtJzUfhuXFvq6ztF6d9v7NQgFDAKULwTPXpn",
  "key35": "2bGL5BY9yTh1tfeZnz6GicgSBjSsct9P6NW9CBTB5UHVhvN7UQihmor9f3Kc7FsHVmVZbgC5Zr2PUsNh8QRz3gtX",
  "key36": "21PzbYx9hkgvj7JnXYW9QS7D9qPy1Q5xumAh5tHEdXyTAVVyYDNqi4qS4HR2RTzEhfBeDpxq6nEruZWyKdeUp7fp",
  "key37": "4GZf3xBfbH7GUSkxcdAZvSkuvPbWg1YeEnFimGam88cw1EToXnYxhZejBv9RVeuaVX1WSFRiE4qp6teSrRBQhHTK",
  "key38": "46uFM245rGJiRzYcoC693ZYkAhDKYv77L821pvnXRFm3LdF9SD1CUWTBmXXkQJ1kAyQx9rKiXpXtboyYf3HicnAp"
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
