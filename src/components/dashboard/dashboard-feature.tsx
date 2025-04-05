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
    "4423QqdwKeo3ncnLCMjy5E6sE9Ee1VDaqzsFpHarHFGvJPoPsmiCaFgLMtgZs3zHyXGxxJ1XnoLMky5gF4DXccKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hNEKAwmGzNpqcj47nnW8WmWuoyDy6iw1SJxerndRjiH23AybYJRXsVsyBdkETxVEURE2zJtGxm8ygmitTwwM9VB",
  "key1": "2qtBMZ2CxurfZNYBhjdyh4LFHPr3Fc2tzz3WdTAwvYaMuUtXqRzs1buh7VxZ13a24P2KEHZkuvjye7rRaULdggUk",
  "key2": "3RxNYJNVaJiu9umTXBsNPvB1hyY49zfrAjZ7x5jTVNoQdvqQcMKoXt1nJy4JrSzEB4iAGA2JRxHbTQLoJAYDpLYG",
  "key3": "2xeSFvaHynfj1MDMvvERVnBmxYrwnbPerK2d2xqLpaT58Y7rMrN18sxYKqKVGhx5JVXwUaExVp5SLrEtaLv3ik4Z",
  "key4": "5bECVZLDBSkrid3c9nouzz8PRD2K4Htj6Uh8PYNM4jeXUqr3Gt2FoNDtssRf5KVUDPoiFTpcGRHfghZncjbUiVL2",
  "key5": "4WmZZAq2acAmNzUkuAZCzxk4Fo4jybSuqkb7Sw5HG18gq5MhNrXEKDqmaiKsxMdrk3q3onhT9bRbKFcpPPRrUWWU",
  "key6": "5G4WGwihNSb3XA9DbDxm6NZ9wwVCFDKWAaXBUrj8HT82ZgbsueaGQHtDCojeEBC41F2wmUJEK83r6a4Nk9EgPPN4",
  "key7": "4R11ACEmzfUXVbwHvMPsadxenqqU8yDRqEBTy2bWpRyTuEVMoY3pHCWhE2Mp1dc6f7NvAXkheEdSj8ap84wQHmEZ",
  "key8": "47zn7mje6k3cTzPh6n7ZfeRHYzjYKVcFyrknPgueeR9Ug13p5NJde6zgbqEeWo5taAvqRjCsKw2dkZdbhfaYxeCN",
  "key9": "4eBrW9ka1NV1FeU2ZxcukNQk1P8bHSw3A8aFhvtJA6L6eqB45tB8aMs9z2bM5HzVwm2MpdB191kVTzwHzUBtfYvT",
  "key10": "5YXpKXNKUxZMpD4E9f3nGFfb2E97jCDYg3piyt5j5Pk3R91E4q9symXjA1oi9aLeWbmhLDrZnNtdA1iiorCFyNdJ",
  "key11": "3Q2exEzD5R7sSit9rXoNsHpqiTJYpYL3F5Gc2NVNqq1TYGGN6zwTdSxQNdctK4xT69VUMs9Gc6KEeNu8Z7sveLQF",
  "key12": "4wuGqMqKq1A3QgpdPHb4Bm1wdg9JG5vv2Vtr8nqsYhn6ZtNomxL664VdJRcBZiqG5pUUT5RCHAzcEmxgozbqW7B5",
  "key13": "hPrhR2qrq8LaWKUR5aPHvj5NhUAEGCAoZNrjsTBCHTpt3sw6iqE9BXN4dTW8CH5eMC1p3BU1z6PsQUooE46a6iZ",
  "key14": "2p9ZtEr1PDaszKqmiWmfZAWAacHBaeYcSF3rRHQXrRRkvR7xqfiGAwRuEFa4FV78mYdP8N6hb851RonGvd4Pvp21",
  "key15": "2u7EBsPWjzTmNWqxjevgLJWVBLZisAhPpKvMBo7icFQc3PP1h8N5ZvQN2Xutp3nJtoWgeLNRwVi65Quq3MicWBuh",
  "key16": "47AvvHjKKbmMUvedMS6pJJWfUm7j5pP6v3DWFNuE32WNvJYfkJZiPTJqmxxJDGcemuRrJeytAJ2uXAJvtGZKu6LE",
  "key17": "4BkEVcxEDXNVAwdWXSBKfpb8aUyaMK6NcGkjKgfam9Vu1MjQstgLcBYNQPYF23vKbSEhz9bB1Seq8Li8yqnk2aXy",
  "key18": "26373hUXMRbGPVSRyhKXBS19VS2RmmqSk9jSjQN9JnYat74ydeMgGAuDA8SVXhHjQwKPmMPhq5PRyFZUay2YdGHr",
  "key19": "CGJaiKmSzgphZpzxRHDjfPH17EcN6Rw9WRkL1aQEbcs7NoWd6CjKHYqzyX4SV8LfusbnRVJPeKWNSU7cfYKytvc",
  "key20": "3DUTcv38ebfaYbPq24uGEEg5QeMk1AkXvb2khb64xLbzpSLGYwQCsiGEeynxfhs27VK66DUPDZaMDRVUMZDc9tDQ",
  "key21": "4ry1eNPn5uFJ9kjzYPoa99eKnS4eUB3MFGaNnN7frkaB4QXTBoirAJXS8nLAbRYJ2x9rxjUBDk8LBWuNWYXLAVkC",
  "key22": "4RrGSVgHTzbmfcyRNZVk7fhFEcLVoZ8G8UP5BxZEUuDUm7dHN6wLxg8cANhUUSwz4MMbmQGJRRcydWP2KWoB3vNz",
  "key23": "2bnm1Q125NHRXDugGYpZQR94EJBopPJgVYzQeqeBXaWgpxjxBGUkia9xZKwqKokLMgvomyr2RqMD8TyNxpNvTx85",
  "key24": "4y7iz3YdE9GD2Bob3Dci2FrDjMhnXjFex8f1S4V1qe6KuPD4xXqDEDFff1UqTVWvPfSUsz4SiGG8ckFf1vk3yu5k",
  "key25": "3YFxBUYkXvybu2dNnQ6zPhT5YFqkdXyCV8ASNLT3tRgw3wJSJSkw3psJv2Q4ZXUsihewnkbwPzUma5maPWcfYPJq",
  "key26": "5U815tiyzYcBSZdArExMyEBws6prfU5rx9ym2fJgkmHj8biYQeByV8vb8pAPYeSv5cDZ4Lh26sHXh8FfNDBNm5bS",
  "key27": "4Ji9Ms9LrWypoL7nh6Zz7c6b17W4FM6cLduH8Kyg8XYhkH78AXNJQUF8pyer51zdeRbkF9hpPebKjTGfHB5eRoVP",
  "key28": "3j31G1E23FXZgerGvgG46FSD3uetRjWTZ6B3H7yFbpZnE3wpCxqGBAsWt2V1UTMYx2ARD69cZ3fK9KLBCQbFfGWk",
  "key29": "4K83ymcAwxuJMxSjC4sj4y95kWSvoWFaBzLXz9bvNczRycTzG6n6P2bWRmGo2mxgSV716J1qeo9GK9BrF6btg3Kj",
  "key30": "ioQX3Q9uoToEBhULoT11hopPf7xrMggTAXhAovDsRfFXYqGeaX36UrsaANnEqdGaxxRak9oA9TgrjZfsznjgY47",
  "key31": "23v2y1UdEtZtSBhuZG7Ffc6vTNBMv5cwRbF6EuB6eYBWpK2ipFpFYwzv7DNdGjkcEKgTYsTjSWofULk9YWDq3ySx",
  "key32": "2g9NmC8DRe9XxbPHYRnWMN9wr7XVjPHyVnfL5Wn7c3dgjy9RZu9p92VWCuLoiFMNSXyAwnuocCYUvKy25CkcRiAs",
  "key33": "2KzGMjcLL4QXQCLVQuVe7iq1PonB3tGzfNWcD5ApMBNsrNxLeW7TYgeMafF9JiaQfn7v8MusbqrfbxvequWePYDa",
  "key34": "4twok5SB95HVAwbQ8SKQUZfJfcbK2TPmPikUrtVUCM23cEtn857KrAahBjpNNiXQseJFjVZXfwh5e7SfBNahPuPn",
  "key35": "5FxM3VBNFxnEh21XjiLtXCVcB6TWBMsgFMeve398pUb9eenUGVnCfP3JZog5FSiqxkjEuXcnY19FaHVoobntHaRR",
  "key36": "3X2b9p5Prd6cSiM31SoshnGZqsJFb3VNDsfDf19RtN8brv8TogRgKiMUbmBA64pRYtVHFLuPbcWEXzYMqjZ9gejF",
  "key37": "44WsPoJY3iWhMspU9wAeT3ragWXraWMC8P2WcmSGLvHJkTyaGcUapTZzDBeKNg73N2ibRDUVSzhPqbr8yu9nXbzP",
  "key38": "5wwPRzxeAzm9WTAgt87BpiRTpSvJ9msxmLqB7xqBfMSXBL5R28JHeDVWLuHYJwZSgjoPRWrVJ1kpGZzTMnCEnxrR",
  "key39": "5LKUN3X9MUAUGhh8N4sZmkhTkLSU1mBpAJJBiEeDZqSyf32pL1BRKEPxWYgJiVPtSc5foDLcQmEAh8B7Rfa3j4A9",
  "key40": "ijw2ijLXeZppBRohJi1bAZ1JjzLVhL8uNt5fuwH8i9Sc4reUxdUx8dbGSKC8j6a6jpBcvUKafhVDVU9CrDFaGKW",
  "key41": "GodKkorATKYcGZNeowtAAfZFDj1VBawVVy51KnVis3F2dC7rB1th4viuyNT8Cw43xwo2JEM2cu8gBxdGZNQezqY",
  "key42": "2yeBzvDy8qyqYHs97BBJihGvYMR2jEnTbDdWZasTLViuPNw9QdaWHy3Wgw7sELAvi73eSeWpB4rgC25yVzXPL7ps",
  "key43": "2nPtNukHkj31r9aQPwr5oAsCvBDspcYLCX4MrD6dsDLbARxnjAZaRe3KYXvjS7JZPdMZv5PoGYZdeacy9bEV9GqL",
  "key44": "4spE9K9ndyuf6XvWomKmtwJknJLsFCqNZx2CqkX7gj4Lpi8LUMnUu92VHUTzo7XuCs4SNJ5aMajQWjY5yPv6Q52X",
  "key45": "3W8ewMDxQ6PbudJ7QyJ8ofFTvxAosk2g5AqST5eAz7SeDjv17PhkLv6DDtGvj4iKujmxCdeVBVMZBqy4PPH3xrmr",
  "key46": "5F3F1AFr4YKaGpCcmAd9dZP6hKBBiq1tCJNdY7NEw7JmwFCWSdouDLg7rkJCGopJKsNa2FLRPgG73L3RgBRWN6xm",
  "key47": "3DuG1YrDxGtaEnx3M9HqH79h8UKCBFZexo3fqkcqDCz7kJQVVyDSnJxPfRC23gqVPQJfLAeikKJdBJ8W3138PEkt"
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
