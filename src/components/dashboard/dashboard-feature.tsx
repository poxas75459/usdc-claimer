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
    "66LBHXRZJm9mSFtinr3n2RermwscxXD4ruhZWVwTqUvJBhbNf1q8JjJUy1vi9jhqNJkJPMFDQtLNZzNjs1himKSJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63dBG6z2C3bHwuQgeW6ma2qXVpV7KdYbCRHADwzDcNhLrdev98KiBJTxgV18bT1eWwas6sGqrkCA9mGkkLq8Jeny",
  "key1": "2or5GPhyMcBkhe6ZqrkMMsiv3rvaEenuRV63viJ1NWfBe1QYSNAFgKCyMg7Fm6vNrYPTpcod9pLQGK2K5u3HBQKg",
  "key2": "2EPov6vvYL7tgnWLbf7M36pAjd8vb2wikXc7CTXWuPwukrUcGQKVKWd2GdEtRoVp75VbfjY4A47WCsVwtQjFMBcs",
  "key3": "6PLSBjCM1ojCuSBsNb4YRFYrB9MziTy5LVcMtevctYCVgcAHRqTmJbo9pzC3gB5AWEmah8VGvwhva2ZNSmmmK7z",
  "key4": "4mypiaNojbchoakzHnSESdCKk3Hp9pxSC7cGqBcgDcAeQ7KvgppV2mF54hzXV969cHKdHkxugY12LF4c2YSpYMF4",
  "key5": "4KEVhN3T3xxxie7zKZiNGZ3mLehBwuLuH1JQWnm61PuApCCBLKiJqUK1wT7rJbbLauX9gGjadkzJhr4a7iSrRrZ2",
  "key6": "5hHkEHqM2qwZH8F1KnSJDcD9YT2afbLFc6zAX5fY4pUvafVxjhKAfF1Uc4bCpH3dVdTXBcNPt5tY37uWKfnujb5J",
  "key7": "4LVqUHXYDZcaLPGVmfSwj4rzQFi8FJkEVFGPHyTLzKcseiQe9dHs5jqyncVdXuonAZcBU9KA5aCu9aozaDiqiuHZ",
  "key8": "ua5y1Fp8ihp2brNrE7AdEfncsCBU6nwiiCR2JmMrUADh8q3qQgAtqW11ZeeuyZ4FQNmFoRVjR3gXyKPfKhyroZG",
  "key9": "5oAt8FLh1ZeYmXdvionZ1EuCjnjhq2gou4Zv5Az5HT3SqH76gHoc6m76VBbc3U9hhVye2f93KqbwYDu3LHQZ6n76",
  "key10": "3siwht4ShRHwsvHWgTegxR7UMtGMeXYCFoZdYtx2BN8eDj3iLqM2XYivbU2t1yJRuY2bpLqZVCDbihohqJWbkS8N",
  "key11": "4rWQ9H155ihWmnGVt3WuasNqDYjmfAdi6jASz6S7ErENdi8dCrUtSWy5MpL9grSGD7P32irLnk78pcoVYdkZqU15",
  "key12": "63AmfoFTAF1a8TXyypq3BiNqStnEQRvWBF5CZVnSxcjghmZV9ixzMyibcREPhTFiWjbgTZ1iknArLZUiYU6MtrU7",
  "key13": "tTrXzAANXooYZjce8yAnGxL9RAKdM8kFxq75szhnRgRcs8fUWNuadFVCAyctpESLK7Re68Q5TrACj7cHfterv1B",
  "key14": "3bbp4Wqs1eEZHKNpKUaXS3My8wX8LpeMffUSPqfUrXBrc2cX656KFdtRwE4ToxPWFKmvYF542UAKmZvWyny1NjvN",
  "key15": "2bcG7nPzzxbca7LNU8pfBjQLuGM2sqvxP4d9MEfyjBa3MdxY93piqw1MBH1UrD6gv3t4C9wYS5Fs3awcYECJdsQK",
  "key16": "sz4X19Ja2xrsbDo9ggCanK7TBmDSxDYgej5CH9Uuw3mGYLwgFyqdah4JqGAWwXdkseKWeFUqoQRW2VeXoMhTGx3",
  "key17": "SsWBuHrCuiMEg8tEFoFsrhhri71z3Duqp7Meo7oDtjQNMkymYWohKGvJRMPu1EKXovzyUUceCbn2UqPRbCKPDkf",
  "key18": "3HH81jca8LA2EtLb7z2F4eCM2URZkJjsvcVHPuB7fv8k8nfaMJVwfxJd8evq4VJjCCNRNKjUDRhPeH4m1vrBWDSJ",
  "key19": "2GXmDT8sj9RBCy8TzYUQYZUjLpFXaAHzBbBKzYWoDVQENjLdAJ7wyTGGwMS1NpJ9Adqbjh2LN42c7zfUrh4GBFfj",
  "key20": "3ttVrX74PHf2zkgrom7titMrUpXvKhC4gBSR3bqYHEH8Sn6J4XHbec4JsdGwaDEwGWARXevKBhnwojKRu6Dt6RcE",
  "key21": "4ZqkLHw7ZeoTGktrudLPbzj1QvyUYf5x4Fj6MUaBMbiT3DeUMREA3k893oTDAiMMiYLGLXYgZtWtyzffWK3bDzsJ",
  "key22": "41zKXPYwAJcggcaNtBh5V3phA7SP8WbxRNaHfEyEVctLGDb7EHnfn7WfqMA6jWedZBVk9GfS53AZSmiYYqRsSj7g",
  "key23": "45Ajzy7T1NKeGyPkemq2gGCQ9oN3iapYe2FJB35XkvENjVCBgAqAeLxj9G9DF47MHEUWRmiswtgm4s3maACqhbJX",
  "key24": "4tQ2DwztaFm9br2BPawnMNLMkKQxei4MzCFkEy4Z5HpbfwGEhStatW5P7wM83evwBDtBJAebELmiXTCD7cYGsogq",
  "key25": "4BvfHZT7WTQfNhNAZ4MQC1uKicsjGredwaednKoQn3xnr8gxTCi2z5PRKDxpZ5v19uEXfTb5VR1t2nnZNeAAfdA2",
  "key26": "4hyT9pjHUnze2pbgiUmx55ZjpVFHXZT3o5NtrL86VXFhCLkrHhqqSaMYD5enGRzz6Yo1YRVuaip5djvEhiufFsSg",
  "key27": "2EsAPSVDUj7h5eNhEmDD5j2jckhrHwiNaWY2NGQVTjPEqRKVSXJHKWPTfzjnrcU9GPRMzGXPMpwmDXjmzBkbeMCy",
  "key28": "BSH4FzDN54EmH3SWNBWevNqc1cYPkbgNbSezwGd5HkYMDRRtUzxLmir4ZsrYerviaq6S7srp4cvXMhgDommYXva",
  "key29": "4BGhths4gVtu5T8d4dTFqNURgNvGMX5CJHEuarAz8GVgcUT5ETXhBrYiw1HuoTKgPzLcD8afCHMBp794Ctdz9oKS",
  "key30": "57TXYdvxyvTDMPm4CA4emqm3KXz8DfKkZC3ZMJmFGRkZFUgqhiCV66kqnycJFhbt6nJZYCvPLfSh4PwK3xpbbU4p",
  "key31": "58MXwweefZ5f1B2CQNRJrx6gh4LKkqjeqd3yzBPXUNML6sKHmCtbbgoC9JPTsod52N3aDn49QwUpAstSQkCfVv8g",
  "key32": "5oUm9CAbdQmJB9aQrDE7Nh7zUhKHyQDocb5fqdBY8mU7BRTvN78RtKTUv5oKM3nrA6Bfc9VEcohmc2DZZcFg59oS"
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
