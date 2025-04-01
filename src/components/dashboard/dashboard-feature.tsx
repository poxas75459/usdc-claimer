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
    "Wb6ZPaFxs4LJmdFnQvy4E1D8h4kmTpRkG48TPeL3LwzQr4TKAZvPAWnH5SJttNnUCwZXGVSPy31FPgmh8RppHJ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28Sumc2niiDcKjeno1ig78ggC6Fjkh9BTnm5rrkTK7RXsEXxAKL31yYHfEbSrXLBRFifnKKYmLkS4AM2NWpYFCJC",
  "key1": "2ikNLAq8bzd9s4yqnSwUWYXFPVgikJAf3d72APsFnqAY7wWgGmnuS63fcDdsaSSiiYv12KFSkJ3a3CoqHQsmZCyA",
  "key2": "2uMaVkybWzFVbaqooruj6JJsFDcouoq8XTz2SnnPqtXExqtUeegFyJ311oo1sEqTJWbwL7Gr28cnCtHNbw653jKg",
  "key3": "2Ar7HXqbKbjLuXCR7AZZXqYQeG1P76zVcRRvAwrxfkUPKTLmk1r295zUKZqejtU69thCWFVTPHT3pGkihgjVaqSf",
  "key4": "2fAouba8zcXVKzb8nyPWK4rSUDZgN1xzkAYukw9XZy6axMEg3ntK1VhsAefnu1ZZ8725DXo1ToHN4ujDGrf6KgeT",
  "key5": "2bg5HMmYeyWd1VNcvhoNFiZwZ1UEyg6KZqUsRrvzWEsiopqKWJo3BcNUVWPNNVXikqWdiy7vAN7guhMQNyDEX2WT",
  "key6": "3BCAvhau31YrwaLq2yaqA3evKZHu6fDFBrHfhjnjSZRfb6wmtsuHEcuNzBpDNc9MojuHJ41jmXCEUXLUp5XtQELJ",
  "key7": "vt1uuarhGDXzmasZzbxw927c6B5KRhF8V8uBUJYfEjBAQNsEysAPF9ZCYagz2LY1Xgu6oaTBWkUQ9ovWTFvadwo",
  "key8": "yFtD54zKU5VyddsvHcLbTu7ueTY3B2aF1LsbVMLNJbmgUddL8Caygx3MgG1sFfUHPJiMTu23ZynGfE3ez1i7Ppa",
  "key9": "2wujtU1px8s7j4Er6jGBkWTXUy2kxfBg3Tu7zhYrk84GcGazhSGwJghKfnXMtw5qcxsvMoyhMxrFmwLrjDBp4tUW",
  "key10": "dpA8o5sHRiSmbAAYLUz9pKf4CXrwf2Kn4TC14zjDPBTqJwmQe9DchV6JzmjNNr6RxF99cv3UyhNtx8G4bpsbjsM",
  "key11": "3RNa2A2oRjLSBVMRzUXpDC37SWBVbZhPV2BTA7XF9K3WtmS9NrXiEVewaVjMXEE5Dv9Aj1yEguCeMnAsX7BRsQNo",
  "key12": "3QA7Fu45SLbGSGGbSF9LsFJkTqrzDNwHADb7ptUJQ25JaysBzyrA2HQoFYNUH29uV5aMYxgnWhxbxQdgyi5MM8HP",
  "key13": "2Ff7CCe6u7ZAAJnnwMrgNxKJFpUjEbvzwzDud2kfp8RLJNLCttr7ZoXTny6YWwZZ37u2Upr7SLzAMWZac2WXF6Qx",
  "key14": "boSJHvV2XRKeFaF9fxia2Yyqa9U9TjhvwHgFNmWc1VSwnKePP3ysKKbWaL2UVzC5zUvVK5iX9g7S9SHJUqgKa6c",
  "key15": "ZWQaCSWdKmmoSfF97xHWaPMvYKXsP9eyjPuxx3MPZd1kQkW6R7GjjoS7oA8dEDCH9DXUvxDRjbe2nmr5yznuBTw",
  "key16": "3kKcGXXYyzQDb7XuUtJZWNeSBZyYCugrXtjUCUoTRaSwzhB5SGudgsRZ1J7zHiewqGawUCNxU7WghCS5A2yoZC3",
  "key17": "46NvLC4DzLkiVUc4gLWwf13aJ7Wwizy2yvcxBcwysoYJF38PhgAN5CJ23ctekX9fxfB4HKgWzoCdqv689mqpmDtW",
  "key18": "JNjU2qLXuwdDaYqpXU8YaXGzLvxN4gRfQVHKNfRWYgixPYN5YRjptP5sjukWzdgm9qfXaGiqcANVPHGGJuiBMq1",
  "key19": "38WCRn57ZXScJWNSmveyNpaVuCjMX3oW5vytJQVwAzCKhzTsgqvvDpFT8egx1GasktZNr5795hoyVfUa7ZuN75Ts",
  "key20": "kbtXdpgZBChu5JWTb8Y1ZDUa5sRNiMrSEbPjZe7P2TN2K81up3MYn98a749Se6c9UGmmFE997Kpz5RSQ8o5ZT9K",
  "key21": "3XfVJ7uANGdTMKZ2G7fKVy593MrzMdYKxqjxiHanzRngoJJZEJ8ixQedNhxvd64ZPiRWSwC77ZArvKgerPM7iNKU",
  "key22": "4VEstYSvWK5odgccLSK5jNLpcp21kTg2Fj1GZqQTi9KY1u9izmdf37sACVG64VSjAi4jGNJmpkAz3eRvDc6Ks9bN",
  "key23": "3SzVgiETHUE5C3P7BthTTB5pHmRfb9ZwWaYHgYLoe8Hpqhn3ivMfyasdbpfBVnSUZtzNDj1jmb2nD7ARFfoSuAGu",
  "key24": "4vnkXRW5CVjRpYVk7JCeVoZW5YintV2Uyr2rFkj6JatLoVDv9JQrWhBgFdPKMp19cXq8LLXkp5ZGYnnBMhEg9U1Z"
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
