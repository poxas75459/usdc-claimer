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
    "3FMqYzkDBUWVWFf4tgKtCCnD8eLybYHLHEPdwru89cLxQrxt5UgXvuwvdstoEvEaV6oKRE4haKeWP8NZw3xahFgN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pyDwKE3P4sb95rP5jv3791q459xW1AZRcpEcc9wwxQCZdU25AtSKUcgbqcXDbVxrJsnNkwNZTzwnjMbCbHCFwtF",
  "key1": "3LHXDCk1aaEGErX14pbrfPZ7jePapwauX2zo69sNM1q3CQdvmuwwxTSCKqV6oDvWx3rYbypsyVkzJZr8egD81NXj",
  "key2": "MJdzB55dTcT7MbamGuvdmc6mUKwPyCnmUcBuhpLYcQg2nAHYJWisFrXPdbbW6k6hEyRwuTS6nfCStzKBLRsdsYY",
  "key3": "zaaspHKiN5RqGfSsZkMbup2aip1GgYiG6Bg68yGEjNaLNqr5VVw5xafXYTD8aLxVvbT4yPwYkjVYoPQ6ZbAKPpY",
  "key4": "awpM4xaTcGXTbCE5RQHfbjKhgjXn3hmn9bw1rjuSWdX3NYtBF3nx4Wxg6wyy8VXmmrZM53AHGXX4LD8qduahkSS",
  "key5": "61Cw9VMBunkxYHNoBgjQCrSTC9GPWnAaewJz6Rf4ye8mMPNftgFqhAuzbz683BaZDURv72VCz2mYBysBt2htG3CS",
  "key6": "5uCe7FW1K3d2sa5q7YKkY1wb3Ua8bRu93bw7vm3RhLsKWjE5nJrdqHPozfrqkKbSVU2J9aihQAN5zCzx8pn8M7vt",
  "key7": "2PZVfMr411NJuapGpzFtpyxqVysNWzFV79ogrsb9x9mZwzHsFCJL3A247NbccfmXSL2qdpLJSGQ7DZuuC6xjSczH",
  "key8": "ckv1bAsajrA5Bood7rv4W6xNQw6g4HXdF9EL7rfwioGeoEijZbkCf8ErjzQUpKaw4hSgMryugo1p4dkcaTDTa98",
  "key9": "23qUiXYMZydY7gb5dBT1XUXNDf179En2XfhgRaxiQwzZyV4MHiGtM3E167xHwxkvnvkJBKxsyEmATeTK9vQAGAwM",
  "key10": "5TZDDcjv9jCYn4V7WSPn3sDnYe7WDLT6G7kNmfzw6XxxxFuLpvCc4eiWmxWbcmMgx2CiMqiBrALjdY2KF4Q4UbCR",
  "key11": "2RpKKDfpL9oqv8LStMXi55DMGo7m4sfiAYN6KRxAFFnTxNeu1y7vjyzzsfmqZeU5YDEfFH5bBg3KC3qmX3HJxTem",
  "key12": "2UGav2gcPxDqRPEbU6ZuyeX8xhU6DKwve8UaoC7YNKHdptRQVTKRzyBuSQTQi4edJwsSnSYf9mpMjukJ64P1NK33",
  "key13": "47KsLCBuc8Wy3Nrt51UpDjLGsX8fhrqbhVPCcPoTBDPQVYkeS8twRb7sheHG1Wrmgvc3dMWPyPs4Zz5BMBM5sgiB",
  "key14": "5CSJZbKdHsyB6wHt2ZJS5UP26LBsVfDgpdNWdYqiFbvrYwHEdKY6TzuCwFuKLbTvQbVM5jyWnSDKeEFEfDT7G4QF",
  "key15": "2Bi4m2KXHXTGFL2yUT7T1fSHYmBe5FxD6Y6fxxXyAnw6YSqLtZBuMKHhJ7a6iwDUMtR1Mh4KRKNSVHqZs6VNpoTi",
  "key16": "3KZmGukXKczyQNHuMqbAEky49CUuYMUx4Sw4U7DG3PHFHWSVZX5HfUBVP2n6WFTvftkYwAWkuvr3EkYCZ6QwnfuK",
  "key17": "4adBkAX2JBy2xthmFpaEgeMSY6PhWtNo8up7E72d2cd9JTMziKUe2J3vUwi1y6mwfhuZR1wA6n6hU1963hMYqo2W",
  "key18": "2DzsVxsmFiagoU3ZdA87izMRwdBg9sjmy4SSZXkh1r4qxdChtz64qXj4xBGAn9q8HeHRz6xdr5pRhWFQqugDPNzM",
  "key19": "4kwRuRKgPQvioWYv8rzuBbMez1msz1xRDMb33H2KubAoDC8S6GRcsqfzVzxsxnTvgqN2v2ezGgxZbsTSgDHo9bGr",
  "key20": "3CirPBH8dSyFLGycwonfYjZS2xFGhFxytjZhrdNCR4Ki6XYkTF6daswovgWsLNV2GPMHuimaZK65GeDyUZWGGgLg",
  "key21": "4ujMaeJqU3qx4tdszf8hKj6AqGCuKi7Ab7ESBdBR5STfLoWqVd7NeXpJmuSrSnHSrLBmCYaEUVSprirgFmytMRj7",
  "key22": "5LhDS3dphCxN47x3kgBFJkYPQAZpke624WtRnudeMbgrddroVzLwydj19GTcqx2zB7xrVuph5axDw4kUeCH72FZZ",
  "key23": "5WQzK2KyX9uwRrhB8P1pSxeAZjTgN3cfjpiZPCXKsYrkJjsdXc7DCJk7rZqG7GK19kqrw1XU8pmP3mCGpov3LV4u",
  "key24": "2s7A3PVkzgxa3QoUG7fz2rQMQC4WuD1TUdXmuJyVBLFP2UcSZjjgKtqEfHb2kxYskMWQxmDZJioN8TxCLfruPxVk",
  "key25": "3zPAmxzNxecy4vwDqR8AMkMirwSQdEaQzugtuX7BVs7fvApi2pCTzjvymeSepAjtfoUxP2NgQbcv1Y4BqitoKA4Q",
  "key26": "3Jen9BFDPn74ciSj5ULCoHyrpCwMcL2ydcktEhZ8rZ39gxPDGE4xZ7SkirFXJErJ72omEpSLeFVt3SpoqXzd71F",
  "key27": "HR4eSJKmiAuAa1ytXfyDHRtGZDZGosmJDvUw6ayjWwhCSPbzNWk9HcpFhq3s417TftudNSW14Qs7BgZGYSoryaE",
  "key28": "4mKKqBYxcK7yLrnP2fVQzc6rFaAUR42Eyrivi3H8huuPUnr5eB4ie37D6ZK6tjk8NVFm37dmxWKFXfbBoEz5TgMd",
  "key29": "2wpp4gtQZMgCUBUgFQEonq7faYVACg9f76D3QuBir8Mmmyx2rTr1eYyiPqv1BfWkFwoLWSEFBJiuUycrM5Nk7xK",
  "key30": "2NJBnvSY2sEFZn3qtT8FPw2wG7EAnoMpBrR99AkrSxeTJLdZSqwujazHWwDai6wejrS5QsgCy7PUjtUBncqMGmx4",
  "key31": "4TnqdGnr7aP2eXfGnwVY4z9mYcxC79V1Wm25xqi5Mkqe6RLFZFwXHbzxS1hj4JrzQCK5LLKV9TQfy27N24PDWHUC",
  "key32": "32W4ry2sZxWWKpv1NXSSRRkYaqRFMvxtjynpv93KMwTPAmcQz5WfDhYDqFsLKSMmhXHjxW6QjQ3GbhBx7HyN59Ak"
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
