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
    "3f9VhwQLh9XkAX2YVhpL1d2QmfoojkkioZ9WSc5ZDVdU2rQMvRQf2t61FezJZxjo4bSmNeUJwo6cgAmuEw2sVyvz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cwbHrhbmWucGiLxZ3no99VJiLdgZQwRhydQpdstpbp5tFkxaJf2eqmfk2fytL1Rt7uq8W6VoCQLW8h87Qo1mjS2",
  "key1": "qYQgc7v5Si8brLTC1XB7Wkd6dwE6yZeuWtmqNxmiWHcvEw9k52DTcLpX8X2qq3MirgLtyiopYJv1tJmwBje2o4F",
  "key2": "3mXamWyzMAYG4qsURhq6R7uBbbWNP3jho3SPpCF5E1gMaT5dR93j5bGMBjUDr6Swq6xXRAyVtpnLk85qvYHTz2iF",
  "key3": "28aGcbTXdk8LrLCEZohgxodcgHeYs6HxhVh2GwozyZdoDN8V4BUdos65rvN8mhH6ciCK2r2xCKNL7VWz4MRrsnw4",
  "key4": "Bcj7qi7uSkW29wsnj4wBNgjJZaqmktjKdyacftdNfdwRaCANF1jjzYYPCsgB6a7oQVoPWgH8T1Co8DcxMKcHP5m",
  "key5": "5TU9W8MS1xd5GqSrivN2DGhe7Yzuty1YFoM9DKCWfRPo5mHJ35cxQ8nnuaQ7ADtMvhB5ceZEF7mPKWct88Rygw3f",
  "key6": "2PDcLPpTDogqMpoBRJsiJZeUUxRHEMrurQJrLXPXfKp45JtLtYuTMvegqgfa6zBTSTG3k88NUnraR5T8x1niXfsy",
  "key7": "4uCNsHqL25sW9YRLkHjyTNc5jxCYN95mqCBuAHJp3s11JiTP8XZwgszWc9dGRctzMYJy66cdbkWr29wZYVvdDquq",
  "key8": "5Dqd9oJ1ztjaGVevCCEyoQ95i7U2ScXzsL9YoBezkiCktEzS64DhBnHt9pAMZ79mri9nxmB2w5oqKiC3qJYxmyCP",
  "key9": "56pQjPf6NDsmU7Jk8CCLpT2AfeAwrUjbnDq3WvDDzapeXf73UBKSPpWRyEfSuENrCs7BrT3HcauaMVgo7FuPFAT7",
  "key10": "SPpAq9NB7HtUKDSYQm3cZxgoAiVGMVGjcfcKwmPgtfk8GM2pcdTbGpj6qdBs8HU7b6H1iWny2ZuF3xrxw2bWXDn",
  "key11": "3srbxc9VuaczuBv94WUAeEHZqSnm93dADRKLtus7FV4csd2FDKMXf3Q7WCfNha83FLshjVY29KMCwWGkRg6o3Das",
  "key12": "41zEDBY2pqgR6mCJXCSXXTHWL17TeYryBq41fwYMsbfkEkmoFsVM554U2msH3eHtGi2866VDJ2tw5TGL9PF4wbLW",
  "key13": "5g6xYJSf3GwU4cPDN5CWsveian3UJiEyqHu86Ndtrx5iZ6L2atuXRKkPTYaeQw2c2WG1AtomjQkQdaeL7czD3hQe",
  "key14": "4LC4W1o1ZRe13k8WYohvyW88wweYCvvXGZR1YUqgh41xPLojSZN3TrtWx2WQokFR9U7CwGsapkzbzzmtYek67Rzs",
  "key15": "4v3LwWgZSFsaxAK3int8qzwJpRySGfV7s2tNxU4kMmzZEe2wPYf2HEEE82S5BgBKRNAG5jHcLih73YsZJ5YeV9pD",
  "key16": "31A4DoNA71Xzc89nMn3qkR57tCaNfAbtmk9VxJLZPPaKhJZ1UdQUx6SqFhbVFtjN4Ua5FAttRSAVUqr98NLyc93a",
  "key17": "2ggwWGqxDz3s8qbh2LAUqagYmy877NPJBTWriCkoN5Zd2sQmMkNqgTVQTiewWq4hgfo28FYH2o4YuYRnL1TJQ5st",
  "key18": "2SoMVX5tcQy56hYm9wzEQ6maXhSqKxqcKWfB4p7KNXVMJBtE8TC1HDmxiz5axMMh2hutZYjCNAcwPhmfsArvxVb7",
  "key19": "5iyoyf8ddwjZsiLghy63HDd7yGvTbJ6F6qopxas9Be9S6DS51kNsppkbLQyBVnW2Fv9UBdyK32UgRX18eWwSfniZ",
  "key20": "5BVvmNWfMsz6vppPaXecwPHREEeERMseoz2EAE86W852xfrEynshgirepgcrfmGW4BYy8sexg3ZamsmMCjPGqFi2",
  "key21": "fPtUNVPxsRv1QGyWv54KtcDcD4qahA82P68Bj3fJcB3dozts5EcGe1oMRnCcg5Pw8zm8hHLFU1PEarFUL4jfj7T",
  "key22": "3bep9kTg8GJgAjbyJUzAh2zCQf5QE87yLzXSbELLA4fq3Pwjexxf3Hg812qxn5gvQ5p85Ys1FQbJDvy6VM4HsbQU",
  "key23": "5SVgEs3Kbn2mWY2XPLq6Mt7hCmLzP5zspSUh8a1Unj8t8J7isyymoRpBya58ti7AnJJp58bZtzrVo96onBBKiaf1",
  "key24": "5xGauzrx5jQfWpUgLe126KFgs83HD4EuschkLvWGG2DpdU6EVb3XQfDVPEtVqR2FFgyq1UpRkzDvLhgWHrAe4mtz",
  "key25": "2B9Yr6MDvU4h55VyNeTMWptrMyFpVMxkxWmSX7a3m77D45KQmYySkL3b2VU5RLxKyUndSnEm4gwd73ri7KvzigWt",
  "key26": "2u9cMHTQzBK9tBVQS3xb2Czv2tpzYVdWc1wk8z59nxUict3T7nsKgRNY3sdxnyivJF5LAXtm1ppsz7BmX7zsoTVU",
  "key27": "25tA2bqRob59rBYMdE4eudMnam7w3bokRMD4dovP4jB3rmSMTcbyTZumq8iDNHTi2PiJfX5qVx7X12QKLZviwCqD",
  "key28": "32mrRX8KxhuTGwwf5nQ8RnEmVGsPmYL85QMQEmWBxZKuWiJVj7D2twawJTw3kVa1AmScRgYmyp6NstrRsGpv71XV",
  "key29": "55L4JmxEeucenTbuVvzuXBJEujDh6Cq8yxzjeuKSkp8XTjjhiDZNT7XWckmK4oqrZFVoeW8dKfcS1r42hM4jZnQ3",
  "key30": "29XWA4aVc3DpcgGPvkxZW3wNESPA4HbttnUq3aqDz8zfFk27mg1SaBDFxgRhRhJg4T2TVLz87BAwJSRWj4qZXKon",
  "key31": "44XAEfyXmFwtHM1ciuFp3sw1CP6qVChTan7ojoSfREh7Ty4jqCnnTPdh7Cfp7ZCKixdjL2mN43wFxy7qAVnYrFHL",
  "key32": "gTmQqRvToX7RZyomQrRRMbpScjoYwYNqt5zti6HCafYw5BjQLgJgPFfEdBWGKccTNYM6o25erbTkX69cVPwnP27",
  "key33": "52yrKHcbuGvG6bkxqVVrF3zcgCg6BEo45miijVA14LtNLMTMkQBQkoYbJX5o3QFbrTKZ68KgpMXz7i52tr3qLbmF",
  "key34": "37CeANmrj4Hu4Sq6p2XJTDH3CzmVoKYUa8j62asQQGv9zBTRXJJaAtwxwQTH8eheumMAjkS85FCnd8Bmx17TPrTd"
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
