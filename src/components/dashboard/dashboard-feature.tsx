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
    "5GqcWNM6oRLmh7P4Ls7fjDgt6YZYubUGpX6wAo91QB1DmbyaSLS26XaWTZmG1dPrm9R2HZiHcZpwAUg5KF3wKHVA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "611fqyiBb87PiFgemjifMA89DxYgX2gEV2ChRjUpQyESCNKAhbvUijFa23TS7UpCYviuqKdqi3YUTge6auv5zHHt",
  "key1": "5PLS354SUgumAmnw2ueVrixoBPWUNDfPqFVCoiSvefjBJ8eL1WusuRDo5hHdrtsrZNzUWv8NXCD1uBdJfDwVZrNK",
  "key2": "JWobQvmtUmAmUFY6epSPxQY6MSkkR6H7TkQAqiDudFiCkiq37Znmzf7Fx1wjjbWGpCEaAE5MqGh3FmzuDcbiLoG",
  "key3": "24Zc8pj41sFEKjCQyncDnCvr1wki1fhLzY9A5kcCUvYuyEA9ypSNbaUnNwhd29ZdFd4udjEKBW91c8k88SwKDNxr",
  "key4": "2uNgroSgDFvLDRvJ5XAqi1DVCcEipMvQnGeW5cD8F27LP7uVXdKvJpVPDfopyku5NNn2Bn8A6N2XcLpNWG1j2PwN",
  "key5": "6BSny5e2iazSLQkAXYVqVLn7xPZ4kQWigv2o3P51y3QvDqFV8M3jTZjeECeWcshHNkGLcrwqbJntCKFmSWHWyR7",
  "key6": "3ikogVtPT9Qzx1v5iCHzBJczLjk6MtSLtZf4cL3dLJ7F2SLZMrUoogvy1r7rRd8pExoSqEG6ECRJxqopQfoKDmgQ",
  "key7": "2VuMiHo6bvtXWxkwRES4zx1EFtkdbt8iktscxvSh8fSdCM6uAaVo39awk7q7pkrq1Jhrq6rViRiPsAtUzccdSnE8",
  "key8": "31eSZVWheems5wfoXms95mZvFQ2UNPqo773oy7K8pWzs1dSKA8zSZxEocxdz3SGX6x6p778VrSa9WZ2YxmDX9oQE",
  "key9": "3tUonombcFXj4gPBDhivMP6vBxrF5JekZpUPLM3LaRZ61ay4kFFbQyoHSzZLxZFnH4WbXLTVQnrLgkguLQ6Jhu7e",
  "key10": "5EwSQr34oKxiLVto78ANMWpKteD94E5NhEUrWnLHZTYJUhrp3bAuHGWHHjmd65a8ULK42rh7URokW2ceAN8yeuAi",
  "key11": "5ayL1dASJvKjwQwvmH2xEcu5rh8ZcrQsiZR9ixVJzUsvqey538TgE6ToKw57ZJp3uDTdaJSPin3nbKuCZFmL2jYu",
  "key12": "2ZLEHB6mKsjUPYoekkTkMiS87kDte5PmV9L6t9Tgr7N3UJjfun9R96xyTPvgWEkAfXHHpTRhnchE2Eemdr2wtNTZ",
  "key13": "5Dsf71MPdi6JwNDJBstTz74eCzdqfisoyvKAwzfw5NrkaN46tDLujenx9kMBCWs38mKxwT4dUmsCqAGPr6EXnT2U",
  "key14": "3oqLyimLwXLxkBEVoVkXArSsBVp8yYwfqYhD6DNEmv2FKT7LigaKbChNrGYhbcKgJqmcAXW7gVYCuQArKov7aktT",
  "key15": "57UU4mh1UXjfRqcXcCkLdDvDN1xR6MhKDFPwa8i2nrP9KBzAHtC7VbBQeD3oX4ZXuhP4QLnFdj84TEXug5Y7rJZ9",
  "key16": "4TzWAaoT6T9T4spNGYSqGwivm2twDHFnotuBNkSZz9jviX6cwBx5rVF4utCCnf3pC2pwnmiy7BPorFbHpMNi56bJ",
  "key17": "2KeHLgQXLYn83CYkp1U4QBGx8JAuopPEvX4B9cpDrk7PYao8EPJBnBHQVunJy4JzvottYpJzfcaW2CZA3Lov2bxW",
  "key18": "ghuD4MDuSpG6Wv7WCzz51CeKaYudyMdj8dXyvBQAY1he5CpeheBqYAKVCqvWXmEUg1ZESDokpd3NTWPf7kGHQkx",
  "key19": "5AGtihvq4zBouFKdwWQvDyNe4B7YQZBJwjqJAw5KFgxEF6TE8g7mfQukKT9h5jNvPFwKKPsPpNVdGMvQoTuYymxi",
  "key20": "2NYWHmhhpA3m33eEd4KtWCfadDpChDashFrC3VXMzAUVyrk2LTtNwyfKtQLWwpLY54TtdeQiehNTY8bKMdZVijHr",
  "key21": "2kZUy8byo55MPqMJjuPrrjfqs4Avbr9eAqKnSwqbMiHF8AFEAdxpMpoQj7KC1fc5fmT22ay83L3ZcTkAC5bxCM3m",
  "key22": "ikomKirKbc6MxpiCAvU7H73DGz6QPKvzbPXgn63GmLx6t3PS65wwydr2VSv5zPQHjnLAz88FMz922p7cggWJBFG",
  "key23": "5yPD4mZb342pyELa9syhWTktX2DujuvDFgC3a3xH9TQRjka33t9QBPaWnn9sRt3aEebdkh6wu63td2841aN9rXoN",
  "key24": "5cnX2NXowjmSkSBTbu8P4jev8aKv3pNK8yW7tMfqc5xWH5TA3UoYM4EWipYBABTp8KGjFPVH14YBa84puD46sYi5",
  "key25": "3dQsKYqDNAPj4ip4dSapb8UWA9zGifGnWhxr7eBn6kaoWhjL3gNUBW2uLh5j7brYaoybzuo6KrXnDMdJxidk8bG"
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
