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
    "3EGXss1Gki1kbc5dzfgfixWkkHVwtTaj2ruoFTWnUh2EUt5yDSL4y4KuL3qLmYCp9348jXmM8upCWaA1tBt2aDWb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61x3DkQPHyvKseaXWbPrsjRoJCLj8Ssbd543Qdk81jAH3CHZcoAFCy5vZ4Hz9soA8G4vKzb73GULVYpE7YMZ2WWr",
  "key1": "5kDgDePZ1SDpkCaKxRtDKeAcUf8Vdn7E7bQXMBCZ6Hhz2rcJwNVoiB1J8EHk1GP7tvEczFd5cqE9LJ2qYD1dvF1R",
  "key2": "31JEpsiKAN5k4D4movMYm8pWXRc9gMT3gjWNaWJc6HErWXENQRx18kGE32jBfYVjCCE1SxGkqXejXMXGDosDkDTf",
  "key3": "4GyUNxhtQaLrjWCnC2i92MqfKgBeRwrXqy6Jou5X1HbPLQYGHQKuez17AfLgPSTX8x9Sc38c5VGCthQddEZBW5xa",
  "key4": "64FHYD8gMLgmPUnQDUNHo7GuGaSZUHNkAoGtYFrqtycr7iCtbDHBjtxVVNyDtuLQ7J4i4PyFv7UmmUNfp4BLfPCn",
  "key5": "3WUZjsoXBsh3fWyVRFMjVzUieL657NjkWuoyYSovYvBVEou3fwLgLe36dYvQ6V3V6kWsZ4bBG7MH6T1hS5mwbhDx",
  "key6": "5BwyyPGoY8cJtX3RbHdtNZDd4qs7xG1zEsi4SRUtb5XFPR65WEdXotiTDkB4SsH96CL6nf8scLPFWP3BUH84BzcW",
  "key7": "9Wyk85ZSXjszMKx9ZEWEiE5Bym3kQz9XEN3SSJgNNdQdXdfoE6QQYKnMUitzudabdpp2xkmzz6bHmgR6Wsf76vm",
  "key8": "2ra34GUWRZsE3SqKFAdZjHTHRekx9zCUSrinGDi277nG311ou27YmE5GHqwcLz4pX9B8gCES8f9yJ7prD59XgjwN",
  "key9": "2HJKsSzujgjZdFCgdwkNqsTarC9uNz8iKbviKvTxArJbihBA5ccpN4mVB5eZ21E8UQwbUkzLh4KD28HVMNVknxhH",
  "key10": "56Ugd9v2D7u8MTqMQfkq8TcirPRErnTHWkj5aAYExsqmNgd7WqvQqh8XdFyhSwx63HUJiu1ynWCQ1GLyybNYrztb",
  "key11": "HZxyhK6NKyF8jwHJp2n3BaXV9r9y3eXpe2K4MXxT7doRdo2kyCCM3f1Ewn16gqAVkfskn9UVFWPBDEgaDDZavdg",
  "key12": "4vgWcFHvgqKhquSEBzdW55WWAyaFGLvkDmefHhsHQmJC6UcCYURehj4pJMrTpgeWEtUASchDSYdTEvYSk1E9GbFC",
  "key13": "4G1Z5dZtHPKzv16WKU6qhGFeDzHY45ZnCco84DF6boNYLuMWk4Jm3R3MCn3KHkdXVnMiQk3gWCJUUDWCGRTHVQfw",
  "key14": "5jYg42Pi9sMtENXwQEV5n4Ks7S9eqvUBp17RJa81DFCCEBjB95Ldi6o9zFicsKYuAGRoXsjH4DPNqHoUkFTpLxtK",
  "key15": "3n7PJJAio3W2MhigokWB8LwnXEEm17tmpMcMZER4BM3kd7LKsuHntDP9j9QHLRYUkAnbfBAf7S56YSpS2y9m1Z63",
  "key16": "5DtewfyNAZzx9Tom9MtHg1haCcxrG68J9CFBCwBtBaY2y4gNGrCcJTxMj6zcm86obPq4ut1wKsdWp1Xt9kMiBWtM",
  "key17": "5NhbRwKMiDQQxXRtRSibq5nwRRp9Amow6ZxW8EnUD5aazdbdXAKdHDKkBf1stiEEYhuaCR3yqMS74vRnqAzkx6kk",
  "key18": "3mtqiv11mkxghsooEqM5dCQzjA52vKP5tSp3HSNemzQpPQEP1rNUM7ojj3ceJx2K9DHMgCK9s93DZdzbwsg4ui8m",
  "key19": "3ryuQDnZU316gQ7mzT7TPimVDomDMxEQ5Y8BTCKCpWz1UvpK2HLaAgnFQv3RQmwWVgpLNudhXW3uCTsbpxAPeh4J",
  "key20": "496Z926G4bVUFXJqkwekrsa27MUUK4EDrK1PoJSa4JJt4F9VD1pvkA3hVPmw6hVEKtbcHrt9fc53f2N1wWYLepmc",
  "key21": "3BtgsJqByFNNPFnUgtfrCnYZq9pxH85gsXVUuWmGNVngUg9oAakswvgmGtWUT75s9AYZkNBRzj5F8njusDtLUwtT",
  "key22": "4AwvnVJ5RhmnbQEjjSf89R6rEDNaF4j2AEqGR6Zuc7gRfhjDakx48w8qtVwfcTRHe7ZKtMyWu3P2hz865mqnNyUH",
  "key23": "3YuyunLBBK5ri3xF3yNuNXJom4rvRkhVFmQntgaNE7uDGsfECUeWiYq7aQS1DhKCbXNQK6Q56Wjgw8twMQjZNv4u",
  "key24": "35ZFRwjFfivXSiZ4aAcX17J5vwqioNygmx6xkCmczWcu2MjDi4WPs3YsVwgsfpTo9vwH8fGKYQVeuGGUFeXGZpqb",
  "key25": "2KBp3XnAYNhJEf73MMPFopm2NsYCTftWfFp7K1vrc18zoLmo7TB1jwVpD4X3NEdCHqDUTfTgYvSWCu1rdCYfxXKV",
  "key26": "tJeFftugiupJnF1VibrVYyJWKR8vDFHb63HgzVGhNQZZXrxXZ2wqRFpjZyWrZQSUypup6YY36RzUqozr17yfQiY",
  "key27": "ZDnaRpaDdfD675gq8qy8szjCgaEhSrFXvAyp4myGAaBpfw1GFkNCTA6HzmPKxJdahTha8XgGUxDAfH3YQczXkNH",
  "key28": "21Y3Q4rMWhJf6zNQcF34GYcrhr5Si75LkkccTpU3PZdjpKySYUrbpjsahoDmpAcr2mCUXQ7Q7LpkxyDJBfU9BdmA",
  "key29": "56iLrAzhBVba6ZvM9AkG6G72i5hGf87hF8kHpMzZejPQT66uUVETJ2rCqAde9wNfUqH2GgC9UBoimZqAiPzNhyQ1",
  "key30": "57FdkyQ5Q1ZopSo5zt834z8RMLdshsEdiLsoEAUd8fFh2fpW74YhSLnt3CRxPyADEooSTbB2VdMqwaZnXJ2pRAmH",
  "key31": "2gm2wFkRyQDJnhFYvDSX7BGxpVGbRrn7W1Ghy2MYLUHHMagawohW4dDgFDUvMsJvjYeRR4SFvkGW94EX5oRjHKX8",
  "key32": "4biwSZwVbWDMszrdqLviE8QV1p6DqHDzMTUgVLuYy18M5DAg3LmvPbWFTqNYJGAx3PwySUv4RqRf6uGLQGaGxAfi",
  "key33": "4ZwHcJxSzd2NhTazoAibzJfFzaJjVtqr1HwyrEiLtYgNZ6CfLrEozE7AfTJqpk4jB68P3RpRPnw8eUzuH4tUnAL3",
  "key34": "4CGnem1S2KJcvz5xt8MZ3vpdsdCK2nAfgscPUGzEB1VQSCAkm8b7CHGwrRP3FkBx9wmGubBn5Va5nmZoNPHjmB3Q",
  "key35": "gSV5EPCS7u2r69PULUMqqPwAyTwCzJKq8SgKoqGqHLfed4ABynVnoGZBs1wS51ekqGwqPerDMqtFKXAmJ6eun7p",
  "key36": "5ygSC6EnCF5DmvnxUne1nxvmHXEqsWy9ENB9NHJ73xM51mRD5dnnx6Y14yaSY4PGwgNgDWa4jbTEvjMDoqVs6fBY",
  "key37": "47oZ2dQSp7st3LDxuzdAtm5XzqVp26fAKvJvFbojW9o8sLVd5C2HywsXa2rgAxkLo7TJYjF3oWhNFZthy6ADkTTd",
  "key38": "5U27ZB6Dfr91cjx7tBdz2XT4ov6nsNjKktA1s2X4RkwAGYedbbZxJicPvHe6n1MtHiHQy8MrYLg6v4kENsygFXLL",
  "key39": "3fCAH6nnkNVucTTzT9UkBnxHz5AzKb8oy6RgbCRVAxX2L8GJzKeX5PbnBgKukAyEaiU6eFVKDxGpS53F8gxcpGSZ",
  "key40": "65Ddp1CMkZu2pAySNZfAXmmLAwRDcLQf35XYC65LWN5LYJxGM53xLfXLpBqgdq7FC93uDDPBL9erDLptLdZMpBFB"
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
