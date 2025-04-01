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
    "64mxjScrWLdmekXNmn9SwbsKUvVtiG1M1CXtMRX4x5dTdSPh3KXxaovMzcBPXCHTjiJx2C2SgQCXwaMp5SWfq3uR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qUKHMCeNqtTFg95m7hBdPuDfwrkfqgrtodfR5K9kBn4o4Yi25bLfqZvDdrBCkArqtCrgSUTt4teNuUMjbCEF4eK",
  "key1": "2S6Batt5XuP4VwN9cQznmursMgQmBTMufAxSEXuaoJEiA1vrEpNY5fAsspYXCGzAYYmZTTQL2xrGiScAo4S4KKdk",
  "key2": "2yutmgTR9uYHZwNtMfgbxW3XByLVh62AcrBJCb9X6sbXf7Fr9MYwoqDZMjK5fkQshpptPaMoftdJYax13BmG6A9K",
  "key3": "2e5ujtbTK9D4KTUDRhTuVDrv3nEYujvnZKz9hto291dgzqJEmHwJUsQfcBWYjGjxnR4tyfBA9NUgTCrinfsCWWTV",
  "key4": "559D2jq6Ho1PQVvDnsas3Qk2FUDRDKC5FhuFJ9kwBxBecyoNfaghj6fcie3FKwQ1e184W79MX43Um3czhupyVHzo",
  "key5": "8jfFY8b2Wbya9kfkrrtswCo8uGnwux2cKG7AGuMZLAy48pAxzgtoRmfDdjApfECiaHoJAyZM6GN9jKdRWXesUMA",
  "key6": "5BZd5xByCcVoRxWgeF3FNQkAfPjmem2otVZPXkvcXCZAhm2PuDgB38tWmHUjR2qvsE78NWnvVNmXXDqcknoVZCZr",
  "key7": "63LJCtv3y8rpmsdpB9NoGyf33DpCaUZ62xz5XKQvaqcsDzLFCnzsembq14zFtXLJsg1uWtoVGneytVq6zc3wuPUn",
  "key8": "5m25w62qqzm5ER7XDXom99y1MVo336GcyfjbpKwMcq9m6Td7wMEuXjWThq5xHKbCcGQaFaKs56FEtuK6HxCQhSv5",
  "key9": "4mhMbQSJtTByzj8r3VrduSBzVrnsNZZ4MeT6n13g69Be9zioHNy9tyiug2tL95GAtCy5peuSVgR7eC5yVC2D1ofU",
  "key10": "r5ZPpSZgqiM7BsNR1JTv1NA9H6u5PVDa8HeiYamMQRWdAdZ2toSzt5omQ7FpBgJ6mxoaLbwqZe3zmNMj4q7VSvU",
  "key11": "acVvaRnhGWH1dkNP41AkaiqxKvq3AkwPgtifXrxwcfhLcuM91mxnVTqik6hR27Kqy8TfV1jBvqqmVz7fcxhtodi",
  "key12": "33J2Q9ryU9BLedmAkjfe4rPUskPDTB3iXbRRLy32XQPNtE7MvMUeeys9aT3cokZknjzf5WN5hvFBFUoj6PMYqbFy",
  "key13": "3R3gegf8QmwFsUmp8AmJG4WVjweD5x9e5fczbrdYMWvqbfUBUbpFbgPxyYAtiD39yCuBidXeLL2BCbYBfPHKkzkM",
  "key14": "57Nzt4weaEKuZnezUVuuBGdiHmL6ci7bpTeeSgsCQ3gMDFHYoMN1ckEzsW392uyU8kzaQ5SN9rdVjSMBS7PKqzqU",
  "key15": "gNYwMYXEW51fymyzS9zxnpxrVAHyyiwhceDJ8pnVuDVW4hC37LdjDwgaEjXnrFtTEwwg4ePsm9VFgLyU3Dh87PZ",
  "key16": "3pfmqW3e1inBjsu3R4PdL6wWctMW3znTKMqB1PSUSVJK6g1SoNBA2msXGRXUZUdZbXFpRmVodrDGR9vRohGeTdqU",
  "key17": "4pbBnNoKc3KHZgzHoMqyevMA1oqMc4TqtgHLZB77CFdBqCnEaW1GfYp1uH6fae6VDmPMJhn71cw3KSD2GDtc9yPj",
  "key18": "51tEKca2SRTzABvP93wc3bkPGWruxPPB7xN4DmGLEXQWDetTGytRAWbX4kb8e3DZVexmhfkgBxBoMwrUYNNZJVCb",
  "key19": "44W7zinPCqwvoDAsUnmWXgRqji3nDnd2PXcoDaaEod3C26chtChv3JuvuyFG1scHg1u88pvB9ZjH7G5UHM8mW1kc",
  "key20": "2n1PMthaxFGXWtNGsvHcgX16aJWgemXN3VGAzdi9EgetFomKWMzvg7QBp7mhwi7QDKrwvSvS6xq4XCXk13grkGtv",
  "key21": "22i331yt4t3DFLbJSa3EQRtWk29Q7LTfd3YuQoN2mhUM1m3BjA27kSm43nEQuJoDAisdvCoh4i3dd5ebKY22B9mZ",
  "key22": "Tqym7epCGfyeQBK5Jnu9C1iuvyU1PFdN8b64g7J71kQXojsJivu9svb3MCuUjzJ3P6FVuxNCqyXwCea7MnDLYAY",
  "key23": "3GN5kV5NACu3u9xLRd81TuLNmNQQedSRWdyErqk7GrZY2NuyqJomRoGUbuuw87wB6WSd9vU8muq8JV9goyGHWQJZ",
  "key24": "5SgPmEmZwMa673PAkrtpJcjeCX3YWVi9rWcb1UtY85hJcbagzuwKHUYTUJgoAQZUb7aPiyq3qoaHU88ZxcVXbe4t",
  "key25": "NNTSScB5gdhJWmNaLz3GkY1T99W6fYT5eTMi8vBTFt7eiUQamcYj7kqH8eMAzjzFC4aNWLnJcCxtr3VusSEvzUi",
  "key26": "2qfQmtq1ax22ryCLQx4B7HAa9PRffjAF9vZdq1bmefAVaGZPSiquGNc76fkK8AKs7Y44Dqe49hpC4LReqgG5uRw1",
  "key27": "VQFVDLCMgj9UVevQCsMgBqDqTEbK8tJzMkzzHDMcCwDjtm7ndo4ZV8on37cWb7WvkxYcUnGrQdPjJHnm12r2Sgy",
  "key28": "2XRfRWRobnVkxnmsVqVMtuCcosKVQWrZkVVbMrnWEwKbXEynokTM27U2vJeaa3n6TwezCzUbuD3DqhUU79FFxyuW",
  "key29": "5uWZJ6pSh6pXwiZXW7BbaBNxToUjWGh4yvqKg8N4BiExdkbp9uK7MzjN166XvbntnKhQTwvJxsyxYcyb9zJxcsic",
  "key30": "2QydeuShQsYJKUDxvUNkNjjL7h6YSrg4tCUywPuSFDrhJ9zUPdRYuhPTvEwW38qCWKG7hA1bGpxnEeGxbm7s3uhJ",
  "key31": "3NHYyx3CPLK5DTgGLgLcqkxHo7ZdVyeXgw1t5kzeT1EqvuzeaFMcKbjTiGfRJ8meeJxCTrchLwTyZck9ChvcZvUw",
  "key32": "3an7cAhVoph1n8Drhd6gefpf8ZudtJ6eAZ5qtEVzK27DjBArgyzcV51AhZWhNoHeV8SueD4pxmzUiFwJf9eaycFR",
  "key33": "51rZseShoHLD2DX1fgcD97qpwpEp8fDCveXa3BKXNqX4S5oVum4M7t2T5pVavAReT4f5eV2TswWFuz6mFkzGBVSB",
  "key34": "3RvcRAUnbEMv9h48z4bRYnX4URYqVs3cjMea9Fb1JHNtkfXCVtgQ8BpYrGSPjaJMfRdArQ3qgV7tc6AaBCk4dGSf",
  "key35": "7y9GSBordKkkLycBdV646DZVDNZY8oEKFzpnGzpPTCSTk6uWjBdijbqdGZLi9P88eouyJCJA9eyoFRjBfD3pPd7",
  "key36": "3KeVtytio8fmji6yCJr2B5gqJtqjFk5jYfMzzEv5tAprxvzxVvYPGGUKH4qrcZCqGpwLEfRtikwVvPakix65R7WX",
  "key37": "4xsMc6FZ9qh6AmNoewCERagnwX8VV4u5qg54P2YtUirmdzFFETh862NU92CrfE8bptJ5eP2AbQdfYz68gkT3Bm91",
  "key38": "3eFeLzk245kAovmionKFHBrbXJRgd1M8UqwtKvgjM6VamrbqNYVXPwmciezmppXASNfrqu51JnbgpZFJfpDskBAG",
  "key39": "488UqEKzqAPJZj4jDqSryPAqKX64jmp82raJEtX43pdqQahnQU9HnpjhT4kqzzsFf3GJAns4qxDeYM9ixLQoqcjM",
  "key40": "8eirbqK3JxsHLziXgwfVXkjEtaUiZaDcW2mAZ3rdr4dmQY3kHuSH4TeUFzNnd2gBJes6xnUgFZsxa3AZ4pXk6La",
  "key41": "563m3cKk5h13CmpnK1BH1covj2BZfRU1cMrHrnmXB5bUtGrFFZstBDLBtcapLE2HssM9pcMiCQxwrjttSE3nNW7S",
  "key42": "4vZeiPK7HZn5R2W5wqwa5prb75pK2XsUQE1ah71Q7LSjdDAgPK7bLNu3L5zJtVpDVfA4X3iBdHLarZWVyVMow8Us",
  "key43": "2EDE3U7gKFu8tvFj3W2npBT5rDEWc1c4o5pJss57YoGWZFFAABN9TwmGLh2FxZZCgVtkjgcYi9mwcjGsYjnPqVtQ",
  "key44": "5QxwixqSmm61a1d4nJFT29dPBLdpikJPe4t3cuJyNV9C7z1Ju1cX6tB2Bvj1UaUNJnZonmZxXZQiVes14CSDDjuC",
  "key45": "5JdLZSorazE2b6iuvSZ4AaxasPZ9qvxGj8RJarMqCQtMqSpxLGcMqZxUGXWqNL4nGQKPtAk3n8REqDanR9H2AkXs",
  "key46": "3vu7X7oRsGq1fgaPxYyZxzCHPXXtdhyiDErkyo885GzcvSCj6PQNtcwhoPDsghXkCTDee5KeAxBi5HzmRpQYYcPM",
  "key47": "3VEEWFpGYcTchETeGpVL2dhJfmqNCsSrjHXDeUQUNJR3ia4CAuxcs9rXcBTT8pUNykPStgkb9WeVQQCZf7rPFtMc",
  "key48": "3dDrrx1iaW9PYcaeREUXjyyRbaguMSiEcJ7XUmJNvKthAnKWJ1J65apMoZUmtHEWc2futeGfuEjh2AHXvW8y9j3r",
  "key49": "59QpxGGYkQkXjAUcGy9jUFTE87poWPus4WPkULk8YRBzu8shRYTsVMsUDHLbK5tEvZt2nMcfQQ6ZgwRbCJzETzYa"
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
