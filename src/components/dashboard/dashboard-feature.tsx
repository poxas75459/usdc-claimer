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
    "9dCvFMV2rgBXNSS3PTAQDAPR5m7YQ4PRS21EzzU5Gpzx6srXYPuqVH9hGLiddNUFmFRpnbScMGENykLVfmKoKP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QehgWZ29ciVR3y5GBoXHcV91dGNozSWsGvzv1RNsAhRTApF4yryfQkSyY4mnQkSpTEu8HPceuirpgpWVGZh5vyt",
  "key1": "CtYRjeSgdsPPfe8vYBckxuxC73er9NQQZzzFfS18aK7qpATyQBFBotASkfL17zdxhq4ekQhzD3XwwAFexqzpPYQ",
  "key2": "32KucWALDxdbZ9JebkiD5HjNhTfNxGp8PXvMcurd2dFfijKcyZh91Vo8RK1Uk9U1DwCLMZVjQajMRGy831zAUhsq",
  "key3": "2kEMAqrULGHqdvMZFZ26jN83gZSUzBCAdcddtZWCyzJkWTb7ZnF5P7KcTmDysDXdFwUPyiu2e92tVLfkNJ9s7K7a",
  "key4": "4RBZQU8sXYDdjJyc9zw9488HbSHm6L1TLQ7duZUQKUL7u113dJxoan17ZZ2U1svSoaZAcZN2ZSoVmBvVrhimKSE1",
  "key5": "5TM6hDxVHRenHQEQJZH3u8q1nR4XaRfg8qCYKaxfFKLLLRLf9c5DXS2cN6GtN37iybameU75R3P5sphaePMKeEA8",
  "key6": "39jmTMcQhzovpDo4hSVH2KfRdT7oNBD3VPdx4Hs1uSwZz62E3CgA6PXrjrJevzF66jBjnXjPz1m8Arp247aVpXq5",
  "key7": "2ujGGENmN5wySXag9YGYGFyqAaew6ZkKHguEC9mreFjQdkGQieC9zqw2ESdEk3B1qcAtZ43Z3ZuV3Y56RnBnRnRB",
  "key8": "mHNtzDweYTiPcxm1R6wNgVYMVABQRjafVgvvDjLrkhV7kcq18zbTWi1wnb6Z6Sf16o4MwtmpCx9E1keKiQAZsrV",
  "key9": "5mCumUKcDU4GnHDhbPYcGmVFZf7PvWymETwLTCXsXvvqnLsqPkZBDj24ZtcW4Dn28URJzvW2nb7m2bpRCBKBe9qx",
  "key10": "4LNnzXWhsruBuGzaDzdtX5J2DAJKvCVNCNjGDsWN6digMRj9H8GZ7AcoCismgSsSVf1aytGkPBFqBtQguMDmybue",
  "key11": "2cL1jYDewfhosY3C3qQxmQRRQyuqreKZxM7mDDe53mi57Dc2huC6A8f25wvt2fq4LZdvAMAhQpeMkFMf7e78LpdG",
  "key12": "2nww7fg9q981Mvp4tD2ULvXh4LWqUf1sfUGa4h4KnhUSuy1NrwshWPSpyyNgG3TT6jPrYukegqwrbRQmZzRueevb",
  "key13": "5dWvG8SjNJ6BNKmpx713GmuQCk1yW2pncCuCdRXNdibEHnk3YAJag8XpGkQ8NhsDYkHteM59G43HeqqhKqk9Ebsu",
  "key14": "5C78DyMHXxJzkEFxnzHfyFtHJi5iZKssppYt5YPGwpQ7iKc3aLq8EJnU8TisDifryrZ1pWx1tqPbHkCZa1BYtP4w",
  "key15": "f1fionFkdiCw6fpsg4mPWfohZpACcKLTUegXWkwWsFLVELSeECJ1yPT7BBWPJ4dGUQuAgTpN3cXi8M1nUTpDrhe",
  "key16": "3M4a4GasJVMvTRSdBLRq2C3HYzzzAQZwfgb3z9g36BoKGfGmp4MYumhbvKpqf3Ps3237GahgtYPUFPjoF3Fzvc1n",
  "key17": "4V4KqAtb1iqKopWgt8sDEcq9uBm6Q76tn1cBckjjP4G7MPNbn9BGP7pVq4XRWMGFv4jFMFc76QzpYk6sXxgM6LFT",
  "key18": "4MfRiru3mBNCeGowCjSen5R4eTX5MSegFMxTknsP7BSUj1XJPV8VFwSC7vuGuF1ejihEuAeANSo36uVEszddAsog",
  "key19": "4hv4pinDQvJGV9n2Vj6EdBawNQVb5myviig3Gv34j1t515wNSfvGSE5amNcmjRHLn2j9wmujbyQMjNygQXbZDW6r",
  "key20": "44PCA9qHQV3PPyJenkiYqFVwt7HEhEJ7azavfBNthsautEXC8XuNeo2SmhL8fTdZjN4ZE1qZuyncNGVX1EeVteA1",
  "key21": "DPjXGuYv9AJYi73P3WXfAtHwFipqpoq6pE2PbPqyt9EoAvwhytCeYXCRLUjiayz6q6aqVczGxwwrBBSJm98gnGh",
  "key22": "4LapWrSN5wVaQgkcYN4z56rwg7vRJSZBoLWcsjuRaydGNB4iBs5kzNb7fThoLUf7yA2m7gNCp4kWhMnniVZqDrVM",
  "key23": "iJYvW3s7YQvxjJj69yctDtpUi1mgzgW9qiMgMkZWAUUKBmQpLsZ3CfpiitE2mtDnkkrpZydcitSuNDpf9nQGLCF",
  "key24": "2SGY7CBMvFDmN1FXYkaAPVcPLCZKKM8gevLhGg4DAcaiVFwY3AaJwwbjt2iRQs57nXYeKNUqJ5dT885ErHga5F7o",
  "key25": "3A3Anf6jyV6ERHmcbuf9XGqmfbQkfvvHmJqPG1kfLxQcg6GbBJvZZdAiu5519XhPSaYC1hqJSuovNcAZD4WDDi2G",
  "key26": "614JbC61BY27xKshUXEimFBDzxaK3XA9SzAh3YPfKk155dvJwi5smaDcjxs7V4WfqVGYg85TgvKuUFv9j2Lpyu7S",
  "key27": "qjj5pSUrxXJtuMTgSjg4tJdA2phPMZLLcnGTzjYRrg12SeyvcrjD467DnvrqTfMVFcKrp1ph8HoAyf2xB8LbXys",
  "key28": "5kUXqYnkumV31EHoBDvpuK1uzqDrhQNC414vyNAj5J9c3PuJBD5tQXqPtuhkjGW36nQPni63cZ1cz6oLbTgwiW2T"
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
