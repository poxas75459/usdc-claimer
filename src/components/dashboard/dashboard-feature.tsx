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
    "3M5pi4ba8JWGM1SagKmQoWwzoeCC1GeoNunuXMq6JtxHeQkmprLGoyGuePTFgDvwzuZ3J7rEYkQyetPQW9jY4xcE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hzFJVnR7TnDznJzvtVYsubFSakB7GfZLY1KhDjnWqi8BJS9yzhj1EShXAnvfvApTEWHrKDnqjQHGqgA7FuRbJwS",
  "key1": "3pwCpV8jiAevjqdipYL2rjJe9uExeyibPSorL7fn5ZA4ssrWTSUcyh6HjXsPo2Advgyy6qihYFkifLx5HunsERGU",
  "key2": "2JGXAq2mC4mcN3cAe6Q1JgvjhSAtEjYdzgpYj9csrZgfZmDdebJJXmpe6JqDmvvAXxZ4J6NNYKsoRGwpcUb9W9cB",
  "key3": "DSn25HkufeYsnpgdq79k9pWWJzUVUhBXLqSKg6aMACrkkT9DqHLCGcGUEeubnYjXGJuQ3yv2KMJPiYqu31pRFqo",
  "key4": "5WtYEJcjRmfdajFkvVAGSxyJhpYiqNXLp2Z4iRgSy8bKiH3mvKvCAzFaLfd8DGSGrdPFEms9uS7AwwZ8RMxrbQ67",
  "key5": "2oyUzREvaJ82PY7GVazzSMb1DxaTgv6h4jpJRRYoCxFhQH1pLi9XZyy8jJ2CkYMkZbvPS7xnY3RREAoHDUB13EHu",
  "key6": "PkyKx5gx1hur7mxHB32mTDWSbmTyeEqsShM1QPGw8H7Tc5GYxJr7xotrf6sNjytK9QX6NszM4KVdTAhJ1sVrUC1",
  "key7": "34zMgAxGdYoXi2GpYNxz3xy5Xag3Znenh3ps5AQ56Mf5YZWeRj76smyCJsJKTW4StBBazFEC7wturNcqVcJsLNbW",
  "key8": "3GJQmf7y38BYcwJnM7V1HrKjbNfyJsCTB2fZe4bvXhztiQVfoQgtf8cvvX8PgzmQdhGR2kb9PDK3X6YVLX1kk8gd",
  "key9": "4ZfEKqQ7LZGtSLgFPPmyynC7M26PwxoYcxB51q4eVxQSQAcVKqH7pjmmwYjbthqz7ZoHAcrN6kBGqtdFJPgMxaxA",
  "key10": "2hCGGVPsXSVLyR451Vnr69AJ7cKtwSYXNKegumnYdrUu2EYycdVXHYMkpbubfUot145DeE7hA9tqi7Vscyi59s8q",
  "key11": "3Yyk4pER8Dng6ncMRdPPw1QLmAimiZYXsbakXPPToSBRm5HyAbqcMnuXrjksNRCAEwWidiSiQoaduHocBvvGFhLu",
  "key12": "3zwW7JTsseExMwn3pZQfhdMZMWdp8h82DNRMgdKbYpjnWLy9M4dS3XyUCWUTM8FJeTrNVAzpYWZiZ9UGbUMrb8TK",
  "key13": "5Zk3SvKweidnJez2AtVDtvg2KnKCNY3ftweNoKDZGEoMRPFmz8GJe8DejWtsC35Fbig9L3y2phdQo6u4ojzkdRHq",
  "key14": "2TSJ7VmQUiMNDPLEfKWv6obFdzENnGUiiMggv5jRd7etbpPAA1vJTLbMJ5hcxktqYiu5uHwGm1emnGnYWQUkE9Nv",
  "key15": "61pGcAVd8igZZCdQ4fRtHBBtyQrTqhoN4eZgJpXGsxz5amxYLqeDubwgxxqqzbk5pHkYmWKWs78BMohfNRCnPDkj",
  "key16": "7AdcaHw43eCcYY4fFH8kihzBduwomWssD2Q1btqxZ5ikRvfonhXUJdCSAbgjjYGWqNDPc8yf5gWBbBwRS2fGZa1",
  "key17": "3X7DjxmKM6CwDocWcHNp9WiwCjw6fQ29iphDfb92eRX6mZJpEsUosSDACnW5MhpCe8u7tUxBNS2NYYETLAiJpPpG",
  "key18": "j9DpfZz9tXKVXEvFwPRMcGHhXcScJ42BVxT8MQGcjtUdNgJeVKj4H1qLAU1hFrS6cxiHFjNWqDNRQ699pmCEHUi",
  "key19": "49a8aQeugT4KGwabX73gAfLt42PiAmct214Zi64YUmnrLP2V6nXf2FZajvL2YcPVn1j4KCXyhn4ZhoENzES8okVZ",
  "key20": "3KSByn4w6Y7gpDoMiAUk3A16CTWE548Fz2akwKayxDUqJBni42fjEBqKBymj8AiSS4DqbF2H8RMVD97YT5YGfzrR",
  "key21": "ijiQq31RvAbcczMt6vjqmfUHeeZNZtHrYsFESL3Q67aDPbc9ZVm55vZbe3ipx37twe1wHnW7hwCqks8AjYZ7N7H",
  "key22": "5fduEAPGa7p2npvWWZopvvx71BPYHr9sAy52Mq8feLDkZB33kYe44H3BdsEFFT64RvhCPiq3Dp2H5kyomx9T8y3r",
  "key23": "2s2uXK715zHm3p5m1CuKLxDTGwXk4FrfZLymkCsrjuPEGF96aG8ekabMoFozrZAarVWUFoUad8WCrpdL6qrpR5F6",
  "key24": "4LgsYiJTBuNU9zBBXEnmNaovHPriJQXmrYBLX3RgAfJhRtyzworiywN2Jn1f9QU4ArGe2dPLGrfaa81iLLpmXhyW",
  "key25": "3PGPfpiWfuRPWJapYsmWT3ufUou1ZVu25y3yog3R8VHd2JWRhzatPPcRa2fEgZAsW63mxTtGg5Uqes1KyiHtrsmc",
  "key26": "G1XuPJvCHq88BRFeaEhgbabffrcUwYpLzDEoCbwec5RiVfZRUbTc7J6AiWr5inAtrsp1zkenuhyZdWqoEnELyT7",
  "key27": "VWTu5gxip6vc9PCkhWieR75yWZY3Cz9kHzd9nrLhoALStA7JMQZLeJSeJ2hUZyKfpjUxRwaGega9Ct8WyBEiggF",
  "key28": "655SaXJb5YCk7VJiHyN11pMZAkvr68oAdMdP8Fe1BzWJ7nj3EELPvf5dHURZY4jZxr32epTLue3oNkBvPja3XWa8",
  "key29": "zRwEtcaMan3sBuhEfABp67YtyASg4N3zmU7WeRbAoHCNnowqcF1o2MTGVboz6CcfZVqjPBRDgVMUN3K83D7hAAm",
  "key30": "5cxoUnpuq6CbWbw3BHCaRh2eyiMkCf4wNu4SuCVqiV7kHXiwWyAQme1zCqgH8jMKAPHipXzPboWgWgQKeq3ke5w",
  "key31": "622YiZPzoGPiwgp8eVL7iH5EqYRcvW3cUkFiBW5Mm9TtvVRZXXp4AJwmyESNYEvDKE79pKE5isz8C5DU5Vzi6hDJ",
  "key32": "2S78q1xv3PCFCkFZwuzgmCeKtYRNLLf7Dvz6x3eh2tNSGFY9MqKb3EdKpjGLrMv4cGjEqeTTEZZAi1V1FUhE7hyi",
  "key33": "3mwMypCRogvDor4XmZcR45MVBbWGjLGFNrysdQkxhn8uD338oW6faJTT3nugg88Z2ShPY4s66dbXvKMRETboMsTX",
  "key34": "ZQN8zREL4xh4ipURfUCfVfT9Dnk1e4zcXPX61R1CXKJ1rcoGNJVS94uiNKuX9AjeNPkWQF8X1HPx4RNQJbaiRLX",
  "key35": "4md9mPY1695uGcnexELeFCE6L2NNVwoScAj1Xd2fzdms9qyUNrDj8h1Fij786HyuX21MVUYbrN2oKWvWtDWRrUHc"
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
