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
    "4fZGCy7ksjQJ2ZWGoGPr38bko34cybLdMjA9L7dsE8P1EKQU2dsu5DzMTPEpE23K7xLn2wRAWAtoCvtjhMiWDutb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "We4fLP9BMBwJB7ZWhi2bKxGvBGpZFaDdJwMKCVJZBF8CwVX11r4VaWM8iS2YDTohxGS9MsGsT97N7B7vQZPUjqE",
  "key1": "DSsqApVxyQWYk5gBmHswRHdjDKY5VoCuzjwFsC3dchERJbcFr4qfg2omMeF2dpiS171iV6QsKD1VhDMmXvSpJGs",
  "key2": "5UhpL5Xv2ucS5nVGed7BbBsRmeGGMFB2yxWE7aqj71CS8YqKMEkVHhTKV1d8MmUW45jQSUmvqjAscGiHu6dDn5H3",
  "key3": "36odM1fYL8tUvvff3cASBEcy4v8sd1TF8BDoV8fKGPnW9XG7re2HSFHLCVWFTkE16w5efwKBJXWUMpF4shVG3Kg6",
  "key4": "V59geSRjqJv5rQEPfFU6tYtDfeiVgn674ZLyLeNAXyLurHEcGkiQ1vgVJrDL4aHmxYvK9PrTmNUbLSd2im7ypcs",
  "key5": "3rZ75e8WarXrni8Vo8tuGWVEKzB4UGrQtqzepFb1FKKBUSMTsYkfQaGMF2rPDFzSqGaverTN4PTSTtQDaw6rngZn",
  "key6": "2vCdK63yeTjGrFGNuc6ZAsFMnpD2tn3EQqa6C27mUAvLosZsJHHvgBZUhGyw3kNNxs4696keHjPVMMy4BkDLG8xW",
  "key7": "2kJEUGLXzbCCN62qLeA8MZcbFKW9aSdfVyFnuXBMAJC5zN5cao7fwF8NyxG3Sxt1Rn2gG6kkgkn27SYNXCNH4aS",
  "key8": "43oQVzjXQZ1E8qDAdNzoXjkSgPhYkWKNDHtnmBfrxUwPAuianz28GHStnB5aM6V7cNj44KLimk7vAHuBm2vtu5uv",
  "key9": "3P77BoicgKJHHwbF6iiEFLd8Gmm2xMDYUUVuTVLpyCJebfi6m7Yzd4vyo652T1psa4duTs95eBMRvdAoS2NXgng5",
  "key10": "2DC12eHhmdgUaUE8UXswCKqWEkHwJJD3M4tfL7mXPssUevBuy4GnjqY86iiFPWWM7Wse3sPrFR7SFffMre4mfsZW",
  "key11": "4Ha1uCymmVDReHJwMyX1UD6qT6CjgkE4Ayfnjprr8cV8G3DrPi3CjGbR6mrQe7SJ7DbGgA6h9R4EYUUQMJwH1nes",
  "key12": "4PP2pGCDMQT3X9kWwcHvnpcfCe4k8wZTLMAug6sXFDjWKHMwn69kAV6kPYmhmyCyv1QYVNbg6rUF2HiB2wb9TZXZ",
  "key13": "44NvaiE8MebEvUToVd4XqHoqE77dLH3aT46Qr3zBNfNWUhZqQhGFdQmiz2SfXzCMgBvCtGETdtK3Rf9ZxWs6tpFN",
  "key14": "2YDvNYmthKrXBBKM6UNgj9zYZyaegyEfphHCU5gvBzMxmvnPoUhZZz37gFGUFPbUYsBpZa96KryDkZA7t4zfxoqP",
  "key15": "2t1osodTSEjm5ye1wTmps77VVhbUDrQnvZSAa5bJNkozLGuDxk574kkgNCPrk8zywZG5Zd5dk8WyT9TrNBRU5ezu",
  "key16": "2kUPqeD9EytSANvthLCoo7d1V5vX6meqBG15hC3iR1pZ8Y4xaEfRsarb8zcV8HEXr2pgCBT2QPWuY1gNMyfajZBM",
  "key17": "5Pds8nA8Q5dTUhg7h3LfFxvoDcQQiwxEz6UhRw882e4vuHwtS4cBK9n9aBX3bvz7XozkiDmjUsFFPCbse7CrfS4Y",
  "key18": "5jXsuu8QLJC6NuJEKsR6wQivachZ7PbmdK1zEGJsN1hWHQWKkqohhgLsHDzybQ8vpkbZTMAofzjrmRUFbAuqNyMJ",
  "key19": "2kFDxitU1jTarirk6ZqFEi3qUytSbRdatsugRET6nTzTouWgnUF3qkr78dCixn2VvNopU71UfMWs3TFKCQ6j9JpC",
  "key20": "2HQpzg43E5eTfBJmx1UTQbMa6pFRu8FqxctLuNC1QPPxKhRWmXSXZJRBBNnCqUthiWneheicDqeYwNiCxyW8jgtQ",
  "key21": "DBhu1XHZvq8cM8wTjUpEG4Z25i86s54ceSWvhUmGMn8dURV2rKUHPcu7TzzDhGfViWbTB6c9tjd1AktcJSChPWo",
  "key22": "3mueZ2raFKmSA6ucSsffAgti3osNsve2KQDwvmDTnKVPxxTMUoF6aTgMNo33YW2FoU5ehe71XQ7WgG3wA8GrQAie",
  "key23": "3C31BQ4rvNF9RMBVjJNJpTeuHYvn5qWuRgsHQgxQKA8NUojBfVaLcaWVCStnvXbcXBchHASePjYQbcgEya6QK3dx",
  "key24": "4MSGt2wwDG9ZErrGFgp1LdGmx66VcxVWZD21K2RbXNPwE5TTHhUhvzyAizbbjZ5VhmQuYQizBRUpRcn7SfZSrRcn",
  "key25": "45d2Cucc1gHcnVDHokNrGXHzhHeeZzyxGZYYbxFNGCBjm5MficyyQyodzji3nQioApdSb4D83fQn7EFjL2J1gqJY",
  "key26": "3P5i69qMQYRTKiDazdGnjZY6YQGai4fUpbcDgHLn5xXB8UBaU5gsZUToE9p9eVr3Uydf3YtRBTiwQ6d9WyLwUstm",
  "key27": "2iL3NrNoQYyQMsxteCEbrV14kiW361VGUU1FeQ8pi9t3131UtH6fEEJwiN2pqDNEiPm7zYNeVxw4pwmGxyC7Wp9d"
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
