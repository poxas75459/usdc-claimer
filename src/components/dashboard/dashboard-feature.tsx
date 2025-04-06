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
    "FiNyLSKTNb8zr19zsHhRMiiD1NyQqwhnjez1CDp2TCrWPYc3D7SXttcsqxnBj7FhCNeyA2VNbGvmDtSuob11FJ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27c1GtgMQpJQxFbuNXJDWn8AEuqWZfRfbQZP9KC7DEkRtR7J5hQkuCRaKaFzaBvLQSCreNgt1nUpkgq6ky4SNBZm",
  "key1": "63w6duJTTQ8XWGkusk9iM6smUyDmGRqH3GmfjWtsmj49XN1SdD8K1cbkwFibD5pinreWygki8owVa3QLCvaGkJkS",
  "key2": "2eh7C8ynB9N6CfgMcKhYnza83S3zCg97u7HX8QUKDew3hT2EtvryVtMYFvPaDuvWv2r5awAX3hih9ybgSGmZRZYd",
  "key3": "4NXHXB6jNzYwDRdR6tdHafSyJwhn4UMtKHfiXn1GvF4MiPCLdukKG3KeHC36pEgEviyqmB49LSFgAFuhRyssEhRL",
  "key4": "2tuc7iBpBpeYmKEwovMBc2CHrr4nTgiiBunCTiThuR2oePdYXAv1uDe88Ybxkrw7zt2LpmCfafaxDKRbeiDUf1j",
  "key5": "zFJXgJnCedqjqKq3mnPAEj9RHSQ3RyU8xHY6UpLWdZVnvh3wgGrQndHU16TrHQEks7QWquGJNqZGtkUBNPvasHL",
  "key6": "56bgVF3zaML5xuyRYLXdzbQTsTRL2hJ7AVVPoFth9yr3BHznBcDDwsdceWYDcEZWC135yzFLDJz6Sk5mpdeXpgX1",
  "key7": "9Xmgk4LhdPytA41JPvDYRDTHQJwUAzoe6RBsGVuCQhFVEJatuEFGTVE3LgodY3Q7QW1fmdCyx3zYy6nHpYSkKDm",
  "key8": "4jDMP6KszQVigYuRpNumEVghVmNUaqasPaDtgjojrhHVmuv2HwLgeb6sQPXJbNZmXqMA62sxs5Bas15zqKeXfdmq",
  "key9": "28so3KpD3TS56iKYqQeZ59Yvxv79zPsDqzsvBb37ni1BGf75QL3p2Au1gFJBrJMh9VWdS3EFRDA8marHPWQJVd1W",
  "key10": "5WAMQzKg9ChLvMNMhDgK9MHSZrytkVadX5BswophyXUtPRomx2rbnNqkLsoftCoRdmzssaBNfhSgt7ocmJG6bTiR",
  "key11": "yb2YsTqUc3wo1ykP3ykmNdphm3o9wCYxZ15Ezg51e7FaoXtdF9Nz2NCkvQmiMhQLJKFvUiUkQf54uUSdifvNifE",
  "key12": "4yjFZvykR6yBvCNTb2Aj6npyEyic2cWNQzrQyzjhBnrJpa1oAwUDLUitGXSW1YzTHMAAfAgp4DuuQuPTgM4ysefN",
  "key13": "zJtRuMTXnHzSfBpbR56DUtpuUpVHCVrSP2KNXUdSjbRnNHds9176S5zgmK6SSHYXZV1UkWCxDSLs9ZbE4E82daR",
  "key14": "2hSk4o9wK8q4bZU86VtnBdkDqJW1DNWHCK3ratYnka6jpqZGHJFBJLPN77ZfoCq5HM6x4vmwAkRxLKhiasUQiRAz",
  "key15": "5tRPCFDibEnL1C7M2Z3DvZp4xhVvGcoFkL24QYBdJfQvhQbT7ZXT9QZsDRugLHdt6LVLtfLeJCbk3w53999fXtuD",
  "key16": "49zzemPgxdiztsEwKb9hQe5QHNM5LS3mHoYqk9CfFDwHvPZJrC871hXcv9tnFCzgi6YJUabSB6MiXkfgoD7DgH8j",
  "key17": "4edEiKc5RzW3CuGYegeMzQqkcsGPYM9hMg8nZrdtJr7UZHJc1Ri7jgRJBWVEp8XUV9uuB8amNqAXjagMhBQgsBKs",
  "key18": "3hpNVXYozDQTfwBKSENT2rnumEgCxoFsDVJHuAhNTqWqvwEzwT47HZVdadWkMC7hMgDKrpDV477vGYUnUrGVpt1j",
  "key19": "5hqaZp1JGEXuFtG1DscgRhmvW3NfQun78fFomanhRiEzxEtRNjM12HpznF2cBS53RhdmtErvSVwJhNXGmhfN2Byg",
  "key20": "2Mq1EpSKtNEDjjoEgYEuHUdX6gx8dTHJnr2Y3kpWDquPkyKH3DGeDwaXAmFQTFFECPZEL7EGC3UKQraMZxdaMemm",
  "key21": "3F6PtJCS2LCjjzg1xHfZFt6CdmPRxz39qDqdoadAwo46cCvMidyPCkMLhKSDraZvfv4sipcySMhVUVXT2j1yditg",
  "key22": "3gjLeTGctwLbg9cqtUoLjGisAA7aAJKNhn1qzKmiE2TJAYdG6t1bFMDXWhScsKBxEqVekG6DwNSkdhMv4s6r8bxB",
  "key23": "4hEWvhdEah1w3WioCPnxyx2YZE3JT61dchx8mmBWfNLvU9LBYPRt4iygShM6xxse7cDoGmUkRuKRV381bZnS3Lth",
  "key24": "4FFeKR9QZncbbAjXxbZQJPP9Q6e4PEmtdqM2JNXpW9nm2xSR91ANA99UbsQVtQpqU1LzWTN9G6F5pdpRvBNNstUa",
  "key25": "2W2qwVY5Uq5pbk6reczF46J8pukZqD3WEwmqGsv6njWfVXGPJTssDzaBHTn1WNffDe9dfQTDnNRaLSo29f84it5p",
  "key26": "4QKEabrANjQKaS4ovWhH4EForQPrCLz6rm6tcsYid2pDaKu46s3JSaHgzLrPGGqsPDTXhkvGXTRm4haJ4bZHHofV",
  "key27": "5wRQqnP9twepbqExnuDjRgTf8iYubYjGoMr3AJSYjTSPBuprVUyoCYXUFuNNtBsYEnfZTSZFx6jKeYjuzqidM28K",
  "key28": "Lp1YtjnRFk6CMoR3WqbiSoCCRgGCDb37UgayipLSKtuF5ERZ9TwPueG9daGoa21LG6w8geMrn6e3Kx4Zv18ttAS",
  "key29": "3MpNcTsUhDayNnTW3HS4YSXpVvD5BkoQMH25hE8rDoquthGxeTu7rR1DgPWA4xejkBZssFRU8FEU9yfzujjdS4qx"
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
