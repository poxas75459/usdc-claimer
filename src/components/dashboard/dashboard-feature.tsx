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
    "2fkq4sWvH2qg8sMh8ihEBe7Rt3y386zo8mj6Hy2TJ1KCrBNvEMmZbFhLUci9m3GY4ybka7mAwS9YeUQ8uNzvxm9p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZdfQghL6zrkfswaSf4tUvXCcRabojPAEAF89s2VQ8ZE48oDs9izT2cLnp74CT2FM8f94upPQZdrqMfhXW7kod9R",
  "key1": "2XCah6fRtyQDeGTsvapqtJNMydjAJnUPXS4M8AouvVTbCdS6yumzcrFuQgcZciV2Kx3hv6YQ6hWJrqPDRTqPRx99",
  "key2": "4staLH98tkDrGGyRpiiBhqgQ11LsDXejkvaT5uF3kivrKLfD9rAtXs1V9gDwxgDdNnCuoXfrPYQcxP7XETFFF4BQ",
  "key3": "4bMbp9ouzKfqXRc4M5tu1iPizxH1dXYXz639XwpXwKhsWveXxjsgS5sChjrNZTaFPVBdatYPFVDcp65xUhv7ScsS",
  "key4": "2uH2aSg4FE15hfuv92cLzahySvQyJiLTBqiMhbW38CWLnTXyAfra3SjNBSQjP7PxemgawwcBiDCFscqz5HxSEfhc",
  "key5": "5USfxZ7G6VVJXTXwRvr1aWT5dzBFW3MjWHms9x3dYVZaxqNJ2mV2o1jJnCaefriinrAAT1WYFZMurBgAiRAxwCG",
  "key6": "54QrKAfWCamwFrnQqaCY76CbcuY8nR6zGq3UxvrSkX5d7prRvwU8CybqdGdbmT22h7MAbxokgBo45SphgAU17cwo",
  "key7": "4cTWLKkv1bGvc9ytQ9rPjeDbH1pKwSg1F1nHkqmjn9nK94hFE8yPRbKq8rN64C3h8x1MWWTbXrT4sdkCTGUrQVAr",
  "key8": "3FpyShyPF5B6idq7meVyUFX8bEt3LSCoV1AgrQzT918m5GMaK4NNFFMqAq73FJaGgsPyPJ2SmxfTsCXoMMd63Psq",
  "key9": "5CkrBsLWgTNyUirNqY84hPtNT4xoTqAVqUcDexzTg7881aX5zyrrHKKGcRP2a8EnncZRYpsSV9jinYggE4VoqLwY",
  "key10": "38G9zPx2LUTq6fFveEwmVtrqQyAx81HVvU8Up5jV8CsRxEWaAKb3xVAz84WVaSYx8eC9ni3jAoQSrYAmVkoHhTLZ",
  "key11": "37RfQ9wXTWiweEx5GkZH5Y9vkhK1Ke9BKKGUQVRdZufJ5b4i1g5cg8dNqi4DAgM8Fy3CRhyAPdBLDu8hH9UFMcr3",
  "key12": "56ht7W8FhKVv2raWPm7KfoBQNVwYcHyUN5vmSMeDKkBFm9mA5wVYzoAhoxFcJJ4nNN3VPJJCthLRX9354LcHmiqE",
  "key13": "2cw1bTVPpWLV6dFQgEvMf54qd2SWutJTqToN8FP8VxuNmaVRXheHYvbJY7sHX9GKKFwEMYVboREmNo6CuqudYWdx",
  "key14": "24jErdg8jTrgte24xCziazbNgu5jeQhxjxNzhJp25y3wREHF3shNfHK9dTEqhBqZLkVdkvj8nsBJma6jTjhGR9iY",
  "key15": "N5p2Td7UedaQAoa4MTjjYKtfVDPmrq3fj8GcP7c6yGPuNd5HRgLJfQPKeRmXH7abZEK8Mp9v12cDgbed3HqPBY3",
  "key16": "2mRdueRw5iif4yyjGxY724PUV9f6cwHnAKyfWZpcez56krqg7kAH5fhdBMm2k65DXE8iYTGtiXFyxWbVfdW9dxw9",
  "key17": "4AkheNz4sQVAdyyHMCZXnBqvrctp1tbkibikyokKyjyRZcQByZtBmaSCjroZb5JD2vaaRfX6odUNk6476N7E1RaW",
  "key18": "3myKdvGfv5XLzBt6TLCLATQzanpfLtjSN9TWUhfFp6ttzVApukfiHk4hC3KVtmmyxv6vvFvoDv25qsnYrqMzVmix",
  "key19": "RbEPhq6aTy2RkG9ESML614fKYuqZmC7peKLbDGbY4K64gfa4ZbQ1PHxrxVXPEoBdXqXdYFviNtNPTi2fxoXWbR3",
  "key20": "3nKrgkS6ouz72fYw1hrEHzWjmhgejk1wd9dUszgWbaXTTvks9vQ1VRKBHrisUzNVy24xNkZKsJHFApcTisfAgmuj",
  "key21": "5Rhr6iaqBiwdJK4qqqnLHnruVs5WqAq7dKr1DvZPiBXZXj2fAcAWLmYAhLv25UTFYoDRYjr5EVdZtkeLkQ4aAHyW",
  "key22": "4wQVpdpKnCxeyhTR8XHnMw4KYVSWqG64PbW2LTKZNBfyoALrhSvRzfciEEjUchRhPoWdurTQj6tGsP1wuYEdYStV",
  "key23": "5eqgo4KPA9n5k8R4jskQXK7U4xk6XwhsyUpWrd7tpfFmDPTEWayfFtj76kQWMM2qwRhqP8X7sJxKGxSjF1xnbSEM",
  "key24": "4R4EkuDNaDwrPhXSXWEv4yujidMvLhPMyVdZQ6eNfBiQxELPzMBXFqhEDKY1ESNr6xZyELXb79uUWJAwAP9fUk4Y",
  "key25": "43FfxEVXa4MXYX37Jo2psJe6ofZorpaWN6e12AQ84gDNWN1GF7eDzw67NUjQe2SAa4Zzadu5jjKQb1REUJzny11P",
  "key26": "2bUYkyUfCjbqFfxrwWeu9P76TtY8y4jgXvoVrE2MSuJiyZJXQfVNZodncHe5m2M6WP3YUvZX9WGfBYJWpzdbrwK4",
  "key27": "4X5gBDt8asmGqz3kHY698qt4aoU75BmstfpVaVUj37Y7hPiC5YsaiDm6uVGeaakufJ9QwYzE7QTtWy3TuPhrbdha",
  "key28": "cFxq4PXYQLm3XP7yaSFBrnkBE1ec8vske7Gs2Y73sPh9V9yaSEDxydg2ggwzaEC34TMmswMhFNsmruyj1uXHUuB",
  "key29": "2aATuEHZ6gejEoLaHbe12LbMJq9wkk2PSn2SQsivu2dPooMcWCTv8vhqm461SKUSgQ4VXzTWiwV5oVbY4YJ9RREA",
  "key30": "4jbnZtu7dBf55MAvfJNSiVhGdrEJU15mGatNiYaBkG6yhMGuZnASivJfKEdCt9LMZDqjXnRTE5m4TbtD3B3qttHq",
  "key31": "5MkaWjkaQ1m352eWRgxi3ijVVMXMjTmuMfwQkapUR5cwau58NqVJEo4anqK1rUVsSLKrPaZn2zrZMemKRDjeSZqL",
  "key32": "26P3Qxqqp8yPJWsLwXbPjqVnaHTYWfFTiiQbHfVdZhCh9W2z4xf8JmWjm5RWhwrABt7mznpDxzfXhoXDXJRV5jTm",
  "key33": "57HxFyisapf9LnA4EV2YBPaixv8q9yowYmbQVRTK7WgEtUpeHjpNnw7QCToxZmb2BpFjrfyEFQzLvLC9r3ZsHTbZ",
  "key34": "27fwa4AMD3UQ3sSVpMtiZcbFiFCfaiwVs7mzyDVcCAy9Xft1HZBfh3hiF4Jrt4A7jNjnGEA6kuhjPKaE3EsZKvea",
  "key35": "RgBmy9EDkjuJTQHChfRPo9AeZgbuWMzGm1YaYLQxUxDPmNX2HfipymwznTXPsxBjKVcXDTfyywz8BKsToxYkgia",
  "key36": "4WZMvMdUwcNizf7JZa7VXogztdzEzy2GMvwanBjTamVWd3zC5UNkVGTRhkdGvoy84hcZmkBvQ41yx7ci9vBk3pQt"
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
