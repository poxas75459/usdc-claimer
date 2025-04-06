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
    "3g8FF2w9GcE4Qj3QHhnWHySQk5yYyaLpcVjRPR4GfHwK9QUD3NNAovbuQXQXmUNcVRRBqz9W2T8nfo9JfG63SUx4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WT96RGkhcpqf28Sdgi741vrCLnywejreEo3iBifiMv9b5MwRmCz1QKjKTEmGMX2EiXMmsQVwvyecMtStxq8Cx9H",
  "key1": "3VGFWXgihGMB3nuRxPTQ7bBHjjGMLhHswsjCiweYvaKUn7v46tvrcj3fHhcArfiU3cmcgByaSk7XQXoCJeBJCPh5",
  "key2": "cUzThEFHK5WFdrmtd7smSE8KkxMFZWYkJ9xdqYxcSw15VbVRC2UU5f1K73AghBGKnoMESkuJDGie1GMBKkZ4zhh",
  "key3": "5GpvmSwWsNHypAepHXXekvam7iRgxdk97R1uYWH2h7duLMmHnjkpzWYdXZyCBkeFVMg4C6qEj1dakDQu24HjWVFX",
  "key4": "Dv8Hey1EmhRZJpibRsACdMVLFc8CFcqfLeqPeWc7UyHQHyHaTY8xdcdmLDHVoc18uJ51YnomQRBFb9AG5dqVN42",
  "key5": "2G2coqSw2WyFoP8RxeTiE1ij8NuCKUrt672tPCdwguct96BYyjbfTmz7pdQabD1ngM3Kc1mYQiWYia8UjgWtyGWu",
  "key6": "4MXzN7mWmaQsLNaurMVvxtJwEhSJVi7RM6dFUM8s3XCgpvce1mKbypRYJyTsv8HXV3QYiHn7gfK4zksVtMTfHQ7X",
  "key7": "3m5fQ1Rj1D4ekNbk2QjAhXtypwogQ3CURwoEuoJhaz8ewiG84T7tb4tu2G4kbf3b8mp4wCTw3EG2sDBgJwTQFiPX",
  "key8": "BJ4Xgsea5PGiwnHbSnh2Xj4KV1an4bJ1kUc1sNASQgurVJ6mADqrNNCteTHcqE5cVa1GiGtjtWhpJBURLof31rY",
  "key9": "3634QegGRqz2bL8A2kM999QvxF1aPzozT9DDTjLBzE7jJujZXsmf6e8PwKBps3ZS7hDLhm9ujEcThmAzuq6xKxNY",
  "key10": "3oCoVSMRbHuxi494Qhq2zGSeREDVDokUGWWyC5AnPBTXH1LS6E143mVes5WjHBmS9e45SJcNaf4fouExg8dgdvkh",
  "key11": "2ZxGKFcsRhfJ1ppUoG1gKcn2LkUB5GQy7Zh2EPfGj6w9yLGYmzriw52uQTtydxTfgv81VVEQYkNohJygenmxzW4C",
  "key12": "RuAuAFJwvuheSsTiDaYDy5wuCoqQA5NirPVAytVKMHhNfzsgbfqQoDnbZNyhsXoAA8Fa1nUqYDXc5U8wsqELAou",
  "key13": "2S3HhntSNQ6BPntH4rxRL9EzJ2n8RPvDQhEKW3YYf3LdDxzXckWNWvoPF71Whxqw6QUpVPnXWdX9sn6W4Ee2puXc",
  "key14": "3d3z29CY5Qmirz6b5MbC17Ld2VQq6ioyfNJBGFYnY2nx56oRpimim9sneVay3LWPk1fvBezozoQEyBs8MMoFgrLJ",
  "key15": "PveggyrTXviifw8x28gGKzGJTKPyaVP4NLtEXdhMHBwSCNGVy7KrakpBRsmcyCJkk87dduKT61gYSNBJJAxA9iN",
  "key16": "4drekUZ8hbWSjukJogM79PFbubANF4DG3wSdVPofTs6BK4yG9YK9A2vg9zXPe6h7BBHAFEMc6pX4is6TmrHmucGN",
  "key17": "JeFy8tcQuXEyNR2ar2mDHeQe41CHEQKvkDX692XkCdfwDiRkN4Lu9qcVkb7wyTYeCxfHRzuSuRmZTDK9xEsdE3S",
  "key18": "5UKtSNkWPT4egRsoBVuP5M253mJ6bzTvi3PSVPrdYsdFaea9jJt8NH6Z1ievyxVZQ1KfqV7hCqoc4NsEKV3FQE7B",
  "key19": "2hrabZ4id2xwyTsB8tkTNcpvFkfdhXnSdvCqHYx2Nhj1e8qTpeW5bnLXe3qfDfYmJoEwoZnURamDj7QDYQXq9W3n",
  "key20": "3v8KoKt3qot68hu5JAoVmmFn9BRRRRxrgSqXuAHCmEnkRTMWEKtrfMgJ87iuYghna9oRVLxdev9fUPrn2sjVfKLC",
  "key21": "LwnZq8oQTbajyCwvaLpmhdUr6UN23am5dVZuumBTeyms3CDkAPXvnN4pwMbxvMh9DxvGYB6rKFWnpxcq8aP5mUB",
  "key22": "2ASEWCZ2s2t49Dp89RD7NTjMXGrgmewPv6i3AFfuCeqFwPUTw2RkEraCmDbsKvK4RcaJefCuvNubVRxJjp379vaV",
  "key23": "38M1XEaa6M1FuYSvkG1Kg9w63Gt4PNTJYWh4es8xsJXyCy6os4P7irdVVPoWrsk57WfsDXooNvbSFZMHRt12xmXZ",
  "key24": "3UCUUguu76B5gU4ziAEkBFMERMc3b1fMpezmWASUzk7zMpEVCdcT2QUgurzikGBxnbuEy4qFm96wvAXyf94NyFQJ",
  "key25": "5511h3ZU9cHRCLt8mQCyL3ECndL5rFmamwFNSckJf66VzZ2Uu24yrE9PM5FgZPV4LkVBNQjMzyPdVe7z3QaojVxC",
  "key26": "5MxmSqA3sz24Rj456M4PLQqd4SyejtpgyKTjXoeXdsLWQWqfcx11Tj37rx1dtAghSg8Z6WXhZZ3mQAKgE5Yq6Qf",
  "key27": "2jqaSPrGCWJNTr57d4HAXNmWw4oX2Z6cBWBch5GHHERk7CENXicBSJG8zDHUVSapG5bd6NwzwfiRFcMbYS9Dt87e",
  "key28": "26THijRuiXyjv4VF6LtMckW3ap5rbW5zu7WJWbtjRfhtuFVLyUhpshobBq3e1myjbq1DXbSYnpH2UTeme97cQtxH",
  "key29": "5GnPoLbbYAR9LqWzEY1KWi5NPfurLbxPUXMR5eCDUa7vQuZqTXhuxYp6Jx5KuGD7W3SyQe1My1qRdAXH3WgryL8p",
  "key30": "5h24KZVFJ8NBbED9GadbAf4WJhNnvULNXqyGdSJT943wYT2fiUDxLywKU88ZfQdcTH55C5Kxca8Yt4yyv3kkgqif",
  "key31": "ax9DANKFEso5r8ab5eNBcxnupPzx9ERVqDqgfBjx2e16bCT3n4v2fZC5itpjyjqr5LD18ke28FhWC7ZeTYhqLWn",
  "key32": "45BXKozirKfawCzSGE9rSpgngFtzgGLa9DouU2vXvzn2ySx1UfnyhFyqhqZkGop5tGkKHF2U89ednQFHeeX5pswG",
  "key33": "3oufrVJrrVByk2fjr7t38N355mjwTFK5nB3dEyHNbZFUnnLyFvUpSLgid577h2XafruZ7zZxQRTvjUdvmCmDp65J"
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
