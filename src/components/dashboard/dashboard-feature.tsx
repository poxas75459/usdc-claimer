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
    "fwvP7fPgpmfNinY8UT3Dg8K4ZqHWHR2Zm2iSG9YNXepnjUBmHepfVc8Z3wn2thi1mJjA1RSxmW8ZE3f8rqGSTz8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gxkUYAXdMvDcJCxR88WdN9dtNkGVHNsqgWLHHeoQ7zgjL2CjUK2hn1j35V7jHEvVgZYc9oWGrsV1HJjqKXGgiNt",
  "key1": "KWVrdbtHfPvjjStHTCPX4RjeYqkB4GH1XTV1WyFdZQ9Gy1AimFTczGVnsqoBd42tMobuTysA5xnKDKBcvdpFL3F",
  "key2": "wFj8qJ6kL4oaH29VdDWQxnnF2MH52X1DvjZY7P39cAFTXLoKbVv3ksGDCRtormhMZQTgcq6mzKqmyrFkuFAkmjc",
  "key3": "Z1f2Xm3cLUqk8cf6SqAQHV9brQ7hSoTKSgBQYUMLDB5nNyivvyjGQGf6Z6GRBakA3kqW6gSUnR6jDs4gTQpMfvC",
  "key4": "YYGrLkvth22zHFPmwcaFAu28vPtTNUs2zMTKnpJ1SyJXW5uN5t2EtwXbb7eZgzxbZh1C7Mky8sr2x8wZAmqMUNC",
  "key5": "2jpMjJRo3xsw6gERVbQXT8wbwSimyqMs8PJKiB1jKhhotb1MEqmjAE6AN8RmGmo4KVB5k81rkjqS1oU97bFwCCtr",
  "key6": "47ZebEunLieRaSzPNCXstWDqHuMND2hanBazb7h8CxWGnprzPkMrte8z4rCBuSHxThXsnDWMrjRsFQFYifFkfPZx",
  "key7": "5aamwJHQksRz1eXv38VG3A3HctKWKdFxoQXnUV4KeYV4EZgLjyd2d2npgYBGN8LgRyY351V7xjcf8pqPrDTU58Jv",
  "key8": "5WLc9SNUxhA38s3YWe9meX6ZP3ume7ZGHHkWBPrPTvpsDwEMjMHoKhMVb52tjbJuqzoDxBR44E7pQaGkqx5bb5Yz",
  "key9": "4HDks2t6EKk3DxEAJtEiETa5K9VSSrJ4iGnKbjNyNXyXSXttsm8sQFG1VLUCb8abxQvvKuxQvHtX7iMevmATXuvz",
  "key10": "62Cy7CJMj6LEM7FDcVMEXgSpfV2kSRgeat39R2a3DoQGY4dMAE8Yx2AmEMfRQkvcoKje2HrQT3sq2Uki7H8zz1QH",
  "key11": "iKPW2gvUbL6c8NH5skbmpn4r2QPcX3UbwgCVFSrr1NUJuUXue2tmcK8eQ6x8G361s4vAfW1QLSicb2xDmN5SYno",
  "key12": "5g2wrCsL89Y8UiR4Aoi3iQW3Zhb1YR9v2WUh2mfreEs3mfPPU1Jcg69gfDgq3MEMaWvS73Ye7qEP82VW8ZtQkgZ2",
  "key13": "2jqxsnoR7tSutcpjuRjrYDupCr2LmkxFtcSagq9sPzW61VtqsPj2cXXvy4VZaqkpNhuUbJDCoYh6jkiEDiiGdrvu",
  "key14": "SxV3P9jvtKtDeaxafWaXUHuUTKxJXDUfZcf9QE36YU5euXgjkiyazfCnZ5KBTkpjyDFZc5BRGvzikbhdZQnmaF5",
  "key15": "4TRG7n6oymH9fF4qNMbDvRPZYk4GD7rgnX3ZfJJSHBsWR6XVYmknzRWuXiyR5Q5Jt7fkF2c9i1PTsYUjatAR8M7p",
  "key16": "51D8bMN4ihT7QtPFj8SZpSjVKbVrQNa1nPGYZPDzPxow4aZ6bpB4CdskZ3rPd6U99czjEkc9YXUDhhkknSg5k3pu",
  "key17": "3dd2Pgb7ipudiT2Xdcu9TVJv74P1hCtCvr2M7gEpAgDvAqiacZdR4XTSHCKCUsY9grAy4PyXitfQqGy7Q1e4AAY7",
  "key18": "5xvBohh9ruGaQbQjrSNJnUfBn4U3s4NcYn4L86Fm6YT7XMLCXPwADwEymHYzxBKpiM5PZMgMGpodUEthjrsFKMfo",
  "key19": "2h5kq9ugvVVnrhnWz19qGFnE6zetkHH3BrKSVHiGRYcFeQLgcw1vHbr93WGHb9RmPKyVSrDyUtA4Vv8UGuuSjSfG",
  "key20": "66Y7SNgLu9Hmrqd8JXuSHS3TWgFmuhRKeYrq9ZczCNN9q2qxxFtu7PuHNHCMySpk2EmAd9RbkoRNMJhHYzbk3ozu",
  "key21": "5bq51mcU6K3AnS8EZmdRTiY4SJSYWWYvxFJL7RfVrAk9hc1YTduk2cLhdQEMDyyUm6wpk5Pf7jYjCdz2W9XzoFnJ",
  "key22": "3518FDTwjnkVjtPdyKpavVzGUWWH6rG3imfpMM6hk2VAQcZHvT1s5w8f9zguAdPNcf2iY1voaCzZ1zDJJ5KRt7SE",
  "key23": "648qLcjGFCnzGrR5VHW83WBktoSakcMZdeeve391bHHHmWUnr2thZb4XwnSmDW4pTQbAcdLDDsL7qZNpkpdM3Jk7",
  "key24": "4gyDmkDBAXFdesvJi4WerKA2nq3RYnnBYiYUwv6hbkDWCUA97BLYw6mZAETVoWHVLJaDZFp5gawF7Pg9f3qZoka2",
  "key25": "FkgVvhkXK4C8gxbzN9wYRmfXVPLSjtpKTxRvs7NgSCof8LSqWR6593fYxLmDv88aVgVEUkMSK4nLWxgXxFq3vz2",
  "key26": "uBQu1QsfxZovdoBsyP9JFPXCBQfSPEz5WktQ3zCSbz5698SCxXMSdvFdKAMBLF7KfAMC5Sv2A23MT4FtZSyFfGc",
  "key27": "4caKDzg5PkV9C8F59N1zjVRDfLp6t8x6wDQDLThE2fotvSHitKap8RCQLUS29dgfMEsk2PD3gVXe68mGjdGS8RCd",
  "key28": "2vz276kDWG568hGx55rfAKDBugVhZ5yNaEJoHii8o8CWjtMpAAaW6VbHbvQiDZNWWvjM553V2jj86MG63MNvXJrQ"
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
