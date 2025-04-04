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
    "3PzjALVMQRg82KzrfVLHWYitGCHUjQrV7tWoSx16gekmq6gWZNUxua9En9WUQddc6Lm3eEyed8nARqRCJgujBmoU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BWsGvpWPetAVo399u4nVcszLbB8hcs6c5ALfQWKNyo7iDUcRQpm6P94z3Q5L4gxpVZLNVsLqKfK57csZaG1yDn4",
  "key1": "5NoCrFwD3JDejthtMWraxGRkVaeSvsaxUQwz2LrdCxyQ4k4UdScMJYjMFJuwuzZXDZ3273MCAJ9LW2SWuCgiMtgW",
  "key2": "549mrDd92Yxy5jpSwNoVoxmhXwfy7AvDf3qM2d4t72E66y4gRCy3hqwbxDk8DruNKpMEh65fhq5ZJuhtY4Ti68ZP",
  "key3": "3qbLJ9wRp5y3LswujvzRwuak7pYtoSWmVgrsvGEssBxWXiyT8jXCeXCf7nVNkDg6XazCi8ZjaKZyW2Vyfj7Pu7JL",
  "key4": "4ZB2j2Zk2Ao9MLVmez39V7DAmMtt9QvY52DZGNEqPYWpkiEZ58q1wXmjo9Fr4XveGpee3DxYHnf41a85RXp7feRh",
  "key5": "5nWN9VCrh7CjFx8fWUk9vvqSs529tgT9pyPpE2udDtxrxAkDGhzp2Aw7mTmNKVkdvR8r1gXSv8FAxGL4rqc2XPo8",
  "key6": "4kCj27hxvJTuLcjyj9WNE3QmU7xmJv6dpRuVWg1WjkKaw5qLxmDMx3FdsR1UUd1uSzK7HQmFLzY8Md7rivHc9iGr",
  "key7": "36NSkYw8TfiLagATFn1Ezrktf8Wa38H4yPp19x3AVfC634BozuqNgpDSRKXdsxMK35UP1Vz6vBa6spCJdDVx5RAH",
  "key8": "4vybagbA66eRnJVw8QG4tArv6FLDrLhrRRRgPzF3KSxy7qpAkB2MohVz8eCezERBvsGYH7JD5Qs9UEPB8cbxPdoo",
  "key9": "4aKSEHN4ZJEWgyogQk3x2XrC5L5QU5LGqGKyyQQaVTkzvg1weQVLSfVjmDEtyR9wTyzZUuCetb42PTJ7WW4ysqe8",
  "key10": "5dTCdAykhTm4HDx86CaXPk4Ztk5BrvXwDFxkpuJhG8d4k3yTkogAvgjhL12iSqh8DmMCBtbUbhqLpUXMNDMTKZYH",
  "key11": "eCp7G8rG6kneBsgV5kUNeHcEL2ofbjN2bPZEpsCQpjGQ4iweWGLoY6ifYDMJZZDjaF8cTi4c2tAPtRwYmjrdwiV",
  "key12": "5nqYtxA2Wd1eoqvNJWruc52DGzhk61AvWe4ajH4vSK5dVjkQczn9QJgPfXSiWW7vygyTUqcuTBHUP4YYkTaA3xJf",
  "key13": "4BW2FzwSun55ywSVnZsKSRHTBs8n6p6q35uMA6AppbNRtPtLJu8ZRXpLwRH7DiCY6p1msyrbpeQReWViSZDh6o5f",
  "key14": "3s8o1b2Be5MSntr8o1Q5ejiSY83Hb6x53gQ3zhnJaMSSZ1ZFZN3BEnsas6VYRNWKNQVJApUKL24uwPipV7mu8819",
  "key15": "4TRgxEfDc3ZXLuZNWhqNXwCdGAE3Ve2VxQx2sdLdqGAod2dbTB1orZeq79xXDeWWzUurSuP3GLxGVmSFeKEi1QRZ",
  "key16": "3dv8sGZGYYqWpScWZup9hBfkkABYQ8SzcR2ZLmGUmcU5cwhA3rBNpEuEwEgjigzA5YFqxKXrRgKCdrkCgjaZ6B97",
  "key17": "3A9XSmnKkjVhR9rYmDsATTmxjGGgooTR2DSmWZDKwj4uqBtREPBiXXUJMDKpeqnJKmcyg9d63g1TGw3wZZ3bzCY5",
  "key18": "rFUjZZMwGLFjh9sH1xAzfN5xcEZkXFYMbYvA2ytmPucdcuPBYwQvUkJVvxVYxYtytFHQwsLv33eq2G7q8j55jFB",
  "key19": "2udY3WCwg7B4NhJsUQtVBJTKCnz86nadGhKFqrXvmtAEH1t4dzq9agDECF2z313qiGFpWsA7zomQaj2mTgFZz7gY",
  "key20": "3PnKKWz8dseoYc3cvZ8aFpDmdfX7HhHpSn37pdfhCTjsMuQAoSSrvHCGEdTGmHi6B7wbKPVdWCRBUTkHSyiwX7re",
  "key21": "oRFaZqEHmQc2khzb4Rkqy3PZUyejZHj9VutPV7MsJEmYLaBwNMRhJ2TN4jb5LMQdEg4ooXdVCzMHSUcgb8ewqfa",
  "key22": "4F5aVm9oR5wna3pgWazWcnRMcLeZQ4oXVULf5SCpHnvFtLSXNeGDCqcZbgzS6YwEU6MiR3zZrFKAFj7mbkZ2AmDD",
  "key23": "EUp2ZjTbLhwQZb5ec7pnZcjNrTXS7SeRb9uUvZqUb8wQCxKfihhRaepjnaswp4mVweqYe7c58Wbg5PEWvEVwt6g",
  "key24": "4Y6tAQpzvg4zFiV7EsMcYGXZ1pc1QyffVgBPTbQCZbSwhLWYxixPCTFTc8sbtnVp2Rengw5yUsCkvVP3HyFddmfi",
  "key25": "3rDfJE1Nei7QL33fgNHHZEbzoRd87tCd1FGX3FFAFRZjfyXJ3vuew1C7yyZAGsu9nktxxhMV7xEXceRjAgbVdJbk",
  "key26": "2pXBXwvAzjTXmghhTwF3sp4eN6mCAub5An5Kwmt2UXhsriBqqpxcdgeDHHtAyyhZQirFK7Cx7jDZBcvFnna88DN5",
  "key27": "4gg7ZnRJzGw1wrKK7b9F94Jb22XSTx9XeBSLEZyhZMNL7gTuetrvwa2GshG9m5EZ6PcwjpMNtKB6K8X9EiFguxYa"
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
