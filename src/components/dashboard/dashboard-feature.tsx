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
    "4X66qhYeQS4NHeFkXkZXMpDhxusGFWDTQfirSvmWicbo8GruykvK1WtMgBbUtRjcjPkSa7DHwM2vZkgtAdShnjex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oz1EKiDn5aXBfGzfZdND1iBTrVdMEdjzn54Gm7ak6ipY7oa4tDiXJ2NpQxUdPbAW6NQbn2zXGUDzA7bmqvjc2fB",
  "key1": "3oddwY1NnYx68yQyPoz3EsFLomM1zEHWcd75i8E5JoX1HHWwUKLyEfZQBRXisU6ZSbE7rzrxV2y1LFEmMLXFpvR",
  "key2": "5Q7TJ2PaXNonnyL6zhdV9MWrWVJc7BdzqdL9kGRNSh7idgFNuB2P9uWNvPoiBfVm5zsZ1vqs1MefUVkRqtxvxkZp",
  "key3": "3GoLxHbSb69r8PPYdR5hHkVZZyxjh4Rs88uU6ZK9JqP6QqGeAXWSkLaWUqdbfokbDAdBHYxAE2C4XkLMYCMnwzH5",
  "key4": "39HdkJ9yPihMTVa6f3Eof85g7ak1nyTN8RXM6WdAVwoFpR65EsixM6G8aUBgHpjGLponUqhK4h6JhKeFM38qhj3p",
  "key5": "34DhfyZTSFTFvcDUCH8iYf2g826NbdATFApxfx3krPNp6TLSidQWAZMR6a11ERZrkv4vyWKq5uY99Vh2fqq4Akri",
  "key6": "d1wZri44FSs239w2VNegmiCRxrY88gGeeCbeAv3pcpKWUYqkHXCr5GGzkyyb7Zq5a6G7BoxSza5byn8CAGpBtGS",
  "key7": "3FzQ82x7Y5U4ZZg4i7YhSouiaTp7e75gx2azWCy26ZKjioU6rk3RzYmkgZMwn5gWk2me53wk7TkNT7KmPhc7oWd8",
  "key8": "3Ay33m3zyFy1MWEK8Z69NCtQq7bMBSKoamCXJddyTmyRs1NyBGnzFrDMfNu1VW7Eg9HesViiNHjc7ghJ3RCsFkWP",
  "key9": "2fEyxvcoBYTZcUomeB9fTLKeGwgUBgUMBA9cwwXHvuXjs9vQzCVQRprpu44KVa8wZTvdM3ZQq5EMcMgMk7uuGHvQ",
  "key10": "3BkWLGWe8Q3a2T75TCAGFeVvP8s8Y5GSLKGSdnFPmvGVkPe9vqnzuvNHzEvENeW1nbKamVrJc7xUvnnL4tFeV6qj",
  "key11": "2KgdT7z64jVZVDwKGcfJYcXa3pCFCftFnyXv1MbM78eJZaDnVyMTH8JKUPPrNMH7BhkpioAqmHoj2ms7zJVJRBLM",
  "key12": "3nJGqTyFXx6Uq6sgJLf3DrTj7z3a83dYfQU6m8DxKsBjDJhWoq6erEzYdjktsZnbnJuroviKQS11FGJE9p34YDZy",
  "key13": "2sREXHR6NndzFJVhr1ZKZ5YPKWQnJAEAJn9oezvqbDiBVppUi7EcqBquxrnVa3MheFthG5Nhp9fDsu2nvUsEjMaS",
  "key14": "4Ur6Z7ByrC4zv8ZMqgdaJqzvkR1VGZZ7hARjuSVjLWempLuBocFmyBfmR5DVnPYKgeArkR9CyxEejJGqAsmSasFi",
  "key15": "5Edqugpz4MH9humXYmbe31oqZSW73BoT4DtryKM2Cq9skuKmfmADC2NDMyavfq8e6uKKwfGuhbB7BvTpn8k4CVRb",
  "key16": "3NMY3jBRtpQC1rk42SzB3GuK2Si2LTEvN23UbSpCCxULdBynL48j4wfpcVGFwhsEpRPtf82faCpmgXsZaaAzzJTQ",
  "key17": "cA1JfzFu3rqCdC86DXtHH6VLRXdoTnra6T3gnEhAS861QgMetSprb2v9khvwErj7BrFuvRmTLZaczKE14a32SQE",
  "key18": "24Z6hs1H7srDaLDuLAUYNjzVszK5GHsCdSpBZVjGppuUqcWvYECk7QzXh42MvvY3X22ocdV9Rae8V81qbxnnBPHi",
  "key19": "gFigqy3Lp8oQ6ziPWjR61CQnP1Tj9v43KiJT3goLQFrMcjkmwR21gCqkN2FGrTBV6gMoSa5N6nTUK9GWY359625",
  "key20": "44bSambt87dfRXTMJQ2NZ2ubXSdpxKarg8mN9ZwxPRHxcERhYCoxgK59nxzT8a3bRbJKqCvd3xkFp8fvvRr9auQG",
  "key21": "3RgiqonHPznnHBnUbLh9Z7XAuSpoMNnLBC7p9gKp7eaAhjGe1dGQK18z8D9huQjxneG5MPHFMCd8eQBFvPFYYGHE",
  "key22": "b8FryR86hTc3bzsNGEJFhoYnSU2q1Mnx8t7v9VNB8qpPPao4qTd3VV9zH7XmqFS7CZRXeSMoKeRw1BHpUrZ6oHo",
  "key23": "5aU5tsg6NwC8AB9crcq7weEPEGicQwze6EKhqrkTGXGAz7Lx3AzCa2FFeNa5BvfkMRPTUkXP7fJDvaqDroUcNfrD",
  "key24": "24WWdJQ2j7PnpJwxcBUstqiqBGW7ajEzijhV44zCGo9XGrazbYupjX6xQH3zbnVfUYLswoEN6DZPyWVXaqhewZyo",
  "key25": "61skH8GpvhfDELQp171CUTk6XbNCZChCR53GuPjiWM24RmrpSeeCizgyQg3a3sksBXYdXhoLMKiqTKmKvpXKw3jv",
  "key26": "2Ue5dyzPfbNW1CyzCCrpqjVh3Z5iKa4aaQnKiMo2YY1EgNeGcKPSEYdCDCUiAXJrJHvgdiu35KdsvqZ3Zm9U2tUG",
  "key27": "2VGmYWZwNsfnWhgdy8VSjNNUzLGcUhpKSkBkDSmBbi7PiuCwyA9ZdxKScRAMtu1d4rhYinLwdeTXMUNNrCF7MvCD",
  "key28": "5Hd13JLmWDdm5pQjJ6XTMEKiKs5zihpoSBSNz3UuRpi972Cez9MQyMWtzehdU3B4gBqiSoCcrkrWJ9GvSAbZwuqv",
  "key29": "39ePELGBW46x5Q5U4LyUAvQAzCnAPca2MFcDuamD3GyM7DkVSgEZziWSPGyM49Ad3xchSVg5iUfz8fmEKXkPt2ED",
  "key30": "5KZeF8B9bFrGarxC7HuZPtjJuiUbbHX5xzZv5iUmyEbKtncR232NyPkdr8m43r5bNXd7mh58XHwkMgH8YpUioykr",
  "key31": "3hqihY4AQtciuwpt7LH9Z2nHqKqSAvxTei2ahYwtdHFF1rh8kfS679XBvaCPfRQXrz3gwZ96f7WYjcHGpGTjzEHG",
  "key32": "3V3cWYwpn47bLKsjAjrmooNQjEZMUCcVyy8LT8tewT47kW4CKXytmxPithvE97CxqwGG5eWyPX14keaZe3jwjwyx",
  "key33": "4YAEeTYJ6fb9gARsJkVZNi9fX9mcd7VjWeGe6v8LX2xz6mKykKGRA1t7dW8EScPsdKb3arYABSwndXoY3NXE6HoY",
  "key34": "62p233uSDNSmu2GrCfxU5qCx4AsTRaqiSAajVAToHGoKicChgPiv88jmECApauPK4QeeRnUAwwBoYuGUDPVFhpH2",
  "key35": "4hPRqcExdjthpY39BWzcL8F8PUoFsBPt9JsKMMUcDUay2bHXjq9zdqw93jfa4XdCwWCpLd18kJvinY9tnBFqhEoE",
  "key36": "5WGWDoPsoqYVHFEbsvkRBZFFztJEsnBG6iEGV7PsGDFDJaGjoSUsfj551DUNAz3Y5iXzg3tTMjHgt1pNoMBn1RGC",
  "key37": "4CTStd9oKABAbXg4eFTSD3DL6up4F9o7s1WQfdffCpF77fvTp6oghMAA5WBEkXfyFwfPSVL7tHTtKQ1x7tSmg5xo",
  "key38": "4s82mRK4SUMBZoA2AtvDiZSHiRCpf58eYuQ4DkuXQfZ977BxCFaYpzYFHZD9nxim2a9j7SRjoPKZPbXYDQuMszcU"
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
