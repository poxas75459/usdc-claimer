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
    "xhYFEKv6dG7yTCupfa9c9FVejDcVek9gyaCos1tDy4pXh3boZWtYajbkec6wSm68gYoW4VDELbx3EM5pQuw12BK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nhPVofLsFkLNyDhTyzbg4BjVKh9WwZ3w4X4HGvwuiNpHP252pQp5KAgZ8EAbDFkzT15dRW7wUTpJDFNf8nUX3Cq",
  "key1": "4PD25vGuFH8fbc9XE3GqKFTgp2kMv2ss54UNYfUd1cuKTwmbQDnRyxZ1gPupYfcPQnAcWk1MuWAQFcZVJAx7Qpha",
  "key2": "2N7DPb97TPY9tBpBMn9LPz43zcQyX2MrwLCJSMgnEXuPpz33g66ot9Hwmgb2Zf8Hhjc4Fx32GzmoBRmEDUQeWBRh",
  "key3": "5TVCFU5ZDHgfrjGhGqBMn3a1cCMCKscPHHHzn4qHSwFeS4w6MpnNHrDqWUqDB7CuVEAjevq8BZFb9QBWbvjFQUf",
  "key4": "4Pg66V6v3ZrnisnmjriKLmfQ4mdxVbGUztGQAQcLFDDcDKgikudicCE3z2MPS44SaHExXBakHv8stFem7PuYLmeS",
  "key5": "5kv8GFVMbD3Mu2NBGrb8CjaKZvpq85HtApA9mKnu7JYMNinkfwx8oN7r8itFXoTyScnRnH2mFeu5jkhkfatgX69p",
  "key6": "3pn4u5VViFPnHyXpUr4jsM1YF2DHb2fdpNhVVxGGupDixWRtAC13Q7mcFvfeEvM6ZjAs2Wm62V1EwpudBDWj8ijC",
  "key7": "2MVrpCDTq4eHPsH6CMp4MS3oUzkWxHtTfh7KGZkEqjCbnH1KqtXCXxhiRHbFhyyrvYpQkHRbuMEpKxJTjHhsAMK4",
  "key8": "4a1ztEueu8m3DPU7izNAC6QGTSePNArr3qx3ScLV4mEdCUvJenJpf4HUWMzzNJxd7JpHsUUADV1CfAJHyFfgagwS",
  "key9": "3Z8oFmcgb3YQrndb87xU9zcAh75usSVdGDZzWBuZxZj9pVyUcyyJNqzks6hcaScZCcFobo3Qw6pWRzANd7V8yo16",
  "key10": "3XXCX5kTuboLfPCoTNDVLFm6iPy21WDShFhTHJ5wprxoktRtceKRw6LFET2B8hW57dqe3qbFuiGeZEhtmrK7FRzE",
  "key11": "4T1fmHSd6qnUbGDWkmqNjSgECuu8KLoo7gTxNhhZJo6YRMLpDa9ixdPaq3Peaf3rQnQjTw68u2W2ASAM34pTiBwE",
  "key12": "5dXb17kFeRPjdrs573WJf8VzjH2HJpG96qLe9bAi9n879DiwM8CV1qBj2BKV7AR5d3hZB9GBQwz6x35ckJVe1kZU",
  "key13": "4BrFrLvDpkmKLwnBxT3drPUUYiLWqMXxDi2gqWaxFHdqUXXVRbCBerfSVDzHLn343Asj2fqmkrvpr6dSb4DZmSJK",
  "key14": "5g6GT8yHfzMDeFhrFLLNv6xrznTf6zMx7oLi43Uwpda8XGiDZvVEJ1haFqZLLUJs9Z5AhGHAhLq7S84ifNNiYNtQ",
  "key15": "46MeP2BRbxfF9stYdPX6t6VG2ureNcCMTREaudtxZBW41LRnaaBt3iRNZH1aHrRtmf42z3378HMhz4mWUz5F8rck",
  "key16": "5gioUpVzroPysGGB4Kpv8B36wxwYCmnim6AY212Rbs9PPXsmHJYZvLdKzcQMVJSTc5Lgd7Ty6fjAFVxuXQJqeeUD",
  "key17": "Vce2ZYiVngxfSctY7pQxBm5yHT9qdJnSsD7bbB8jkgqphS8MhPeNBNpW3dhK8pfT4w94oYmQPojhLNT7dCCmTj3",
  "key18": "5fDA18peShLRDhnQMYk3pCWPmbr4Jzwpo6JdXk5sQtamRbxSzWU24Xx5AFxiAt5Aqah1cH59zRnrB9uqAkquuLDN",
  "key19": "5okz3HsDC1F7U43NpVjMGCB9VpusTaDykMeFqkMRHY2JxrgQsFrh7CjwJmeKAjuiidtqf5KWKbeZkpxEob7tQrKT",
  "key20": "58TYd96gSgSjzbf3Y8K9EcaHika15v9BHNN4jpaYjsdkvm9bCqEuqak6nma28zL6C7nncEzptyeQV9akPG2d2cwF",
  "key21": "2ddieJq74KAtVcNyfMrVQZ3QAQturRXMz9odBq1SbRh7JRimPuxSyWgnx1zj3H4iZj1pfwLGXcpCum5SUeeRZPsB",
  "key22": "2RW1SgUqLG5TnEsYrgaMZHmZ63xkyzPqF6S2TR64REFTo44kCE5FpTNERKSNxH6vKKx3FgF2DZWhxEHGEX2TabNd",
  "key23": "43ftqcjsC6CZiu3AKcRPrCSeCTXpGc2uoC3HAZSBFoNFWTJfqnA6cGYg6Haf2qrUKTfxbhP5uRiWX6YMwCppr5BQ",
  "key24": "i9kaKe2sBGb59t7oPBdQrfJPdhRKiSkoSrGuinGLKHMByahEjsBBMcQQeo5uvY5Vdwvy15yurJ8zV1VRrHHLRPo",
  "key25": "3E2D5KTreugwEwiZ1MnVnGMVj42x273HCdNX7EJevXx7pHcSbZBuUu38smRjZZZcFdd4vvugXj87kA4kjRT6YHib"
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
