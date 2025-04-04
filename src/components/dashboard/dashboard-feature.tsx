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
    "T3o1k8yysvwe569Heo4fWTWT39VQJbspFSVaETNduDEdfH7EhFtBkohx8X6nuUq3mCP5sqErmhKCRVeFtBNuVsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ALW4k1EY4NEQyvgnivNYuJRqFYQxpECaxitwR1uysCzPkK1bSpNNJrC9wuuS4ChBXfH378bPZeZoUhyGsqgWSF5",
  "key1": "4rdHVAQEhaoApQq9tHtvWH17D77siNBugF3Go43hM6rfoXfbLK8zy9GPkqHxR5hBaaf4QdLSjzf6jcRTYGfkNj96",
  "key2": "5zvZ8HPrwVvzwW2fx7Wx6oV1gPP43vbHs5PNbzzr4Rp4zUC25kKYqqgWrx2q7C2LbBei8oZSH7tdLKWMCQivM5mM",
  "key3": "2A5HnJh3BQRXNerFgERAtpCnYpJPHPzisgpuo3FGGEy9MMPkR52W2iBEAvpAtKP7cMGvt7zafuCnac8Ji87cEV2Z",
  "key4": "eb3QgLSx396YcwRBdqWCbPmyZFrJ8Zc9REr9npZWJ4pAuedwzFWmdjc6aFnq8kuF9XYibk2DKBa7xKAb9XGjv4j",
  "key5": "4wU6anUTfTAwavJJ5LQcU5zEgrJ8S2GBvH2a8mq27LDM4qqo2Y4Q7EaMkTuUAzMyE6HMQXmXz1nuowxvQWPi1AGj",
  "key6": "xjKyje5Pw48UM5QyBSLUWxhu9WVhYXMeGXAU3oEJfR8Bppbc6ZAaTf1nTFMoa64wwgnYGF4x1g9s1oroEepTU8n",
  "key7": "GxdXkNRLB5RGUmrkMhVSsLCZf5fnFLviudZqWyAAfFeKiFeCGccsu64txQutW6bJD2UWjATpzmpw1bRprq6KWX7",
  "key8": "2bHve9RYKipBBUAsiLAG7GvkcG5A7DTuoDyo8my3CTA8k3S7KJpBgi9RFHSVSzFZDoQsGb33KnSUUcUN36b3THBM",
  "key9": "5LueStr7Bq95Zr9z6anXu3adAkmVw1FXsVUU3A43TaPp1NdkuhX2KvZQt2REGoGtJ54ZNCZQT5NkW4tDqZQz8svq",
  "key10": "2C6K8tYqYgB7zwC6QegzCMD7zz52BA9FfvKfg97PMrnZmqYA4iiwxMH9aGKm9ysCFfsxxEFNvAseCHsDXkwESN1C",
  "key11": "3VGbKABHdheQYYJrte3gBwEVEbkLnc2CuQsTB8pQfmzuMWYp25Lmcgfyc8yrXUHUgyiWJvKspDuui11hnYQRoKAc",
  "key12": "4vuMnDgsb5GtG1M9fdw5GUCKMDmGEJhDErcpoq4hDzZhsk7gpEGTXE6CSY9tzs9qBT3Fe1prYNJjCWr7mDkYxaGL",
  "key13": "42ecY8rDuHNuM2S8TnEwCUmcXfNgLNYa5hsGoKfKFY4L7DjwZRvGA3LJ9EUgzX2guZm8VdiMKCWa2Hj5fkQJ1hX2",
  "key14": "424JMQL5wyrZA55xc52f4MEfsnMFuQxRuZArzTxo7WJF2CweDEoWV55BfKxFeuN8CZzWkrVXMY9C73GjcfbwmEsN",
  "key15": "5GJC4vAtZUy5VZhXceis44byYM7xUq8ESEbvomB2EfNFnS6wF8V2FRCLKTG5G2T6LtBjvDETo1tFWgbKXjWt8MiT",
  "key16": "4b39eE2LYNEs3F61VaN1wg48UJ4WQsTi2kUdWxFnXnFwR5fHeiJkm7zxJjnWmNeRGGgbZzHsSVocvN5wvbZvzngG",
  "key17": "4VKC7TrTjqZK1hd4HAbxepWvk3Cu3dH5bXGRkPHCzPUMUyJJe1QbLzN1GXLY8DmczJd9GizXcjbLujqXH8UFxF2Z",
  "key18": "3JpGSwU7C7wp68qpprPSgaUQBKhum8jmrQSHPXNtyC5DE4HUgFzbn7Pf5gf2JLiL13ASEhwJp5BGcVmpskRGf3Mm",
  "key19": "33PWevxAQPwcrAkK1Y4cHRSDaCp6xgHGohpM4i3gsFTrBCocux2yrzPJBQxNS3p9M7fzfDWAaMCpFsDTRxiPvoj9",
  "key20": "4K9p2NZJQPHY1bwrcdshbrkoy12xjZ5nArd41HGKJ4MUu4EyoZoy6QSV9YCqq39vcJgCiXW5ub7o6xUDxytN3C1d",
  "key21": "28wNfxoMuv1q1vuGLjW9WCURmntEMWRziJfQFJto7W6QhRegVJsSbLXwXPAwj11WysLEbRt69TBvpyzNLiUUBRdj",
  "key22": "2qwRALHzxPt3gqcQpfbaDqdebXmMUQpL2Zf2RgV8LFiptiJWEi1VAiEFU8TaiMLqG2oj8bthdes4YKDgFK7cXrYa",
  "key23": "55qstvjhpjQBCRkkAsjGxx4cTU9W3NBzNn2mbUtrKWzLWbWcVySJDAwJm5QfKqPx1FXxDo3aLRgpiiJmfDQ8p7gf",
  "key24": "S3BNYybLogQzcGq256z7RSNg4ffkMmRAruoMdyzyvDwe5mphoqN2XWyiEk65SLqz37tq1zoMVHUVMkaDMv61Hy2",
  "key25": "3ZhdtrGr22zK7Ap1yhUusa3Dmh9nPj1rXAb5MaXnD1CderRBYWs65Q4vmKcjSVCgnBD3Pw3GuTxhihEjZGNB4sSs",
  "key26": "2sZik9s66wFSbSgoPV3YFK9XRGgKMm9uKb3vbG7DRwfu49nrcLsGvxKYkyq4qWNCHC7tAMYquaMJJLSMiriYrAeL",
  "key27": "3otcyCJm5kb5XcBGgrxwTkotGABU1tHfo8rjPuo89fR9aS86Pp6Ejk23ae26nEFwdgCMdnLfQxvDb1PBEPn3msUf",
  "key28": "48CPCnaE4zwXeu3qNt8e9kiqYuMYe7pN6vsZUkQZP1HXR7QEJnGLA4dkFmGNrvpErAgvnoxRQwU4qeY4b2nNuaYq"
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
