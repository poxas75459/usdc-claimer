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
    "3a9UiGmQwpbxJ4hacF89ugvGkWiKmWUKt7hfRcPNFqWYgvhyU1A1asHKWbtFVoPT1SPs7E7Fvu4rWC8jrFBZDAWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zxsdao3s8RAu1SxBJaQuS71PGXim6d98WLuBi8Ps9ujwC45qRegTSTx2uaHpkwsYS4YeCnCnfyDGWLHu3Jt1zCj",
  "key1": "3uXU9XwWVqj7Xekmaqs8GBdPz86ES8prwBLVjAfwxpiuu4vGXuo4XQJ2gg6BCVqZXbbB5xM4gUqy5UaeCMQbLrpk",
  "key2": "3SCFfTL8RbTAgsT3WcqMHW2ZCeDqH4tD3NX6wg3N5JcejBz6AAuz7mw1w1Y999Ms437hWXmpkq6f3P6Hm3e3BNvb",
  "key3": "2nC6ZdjcN9FB4MqkKhsNj3bi4WhTrADCbcyPWCTrUm6NPwHvqBHdyYizzwxbfuVLSA7iQcXzQ8udTJiwGdTkKCg1",
  "key4": "5a73n9nY9ZmvWVbnbHnXuDkYiRGnBSEGfqvBxf4hLsr2knHBB8E5cYKntk1PC1rbNwrXpxmppBoWa6RyF6EDsqrw",
  "key5": "3nPAtU2XJtDEUXS8BVNR9DTdvRaDxw6YRE1uDAfpKCLPtNFpmZB1Ns9VVNQCQTbnXWjVkfoBZaojesUCL7RAmjyu",
  "key6": "4y2Ag8wWpf3K4kxfndPvTvqL1KMbPgb8NCo7cudJucVTqjRCdmn1TT3McyPuXEJwXE2rMjn3d5LK6TfYLTHcAExN",
  "key7": "2EDwsrHv1TJmTgESteekkMAp5WgzvSeKim4qcQb2PUMyo19uVhs2r7qL2P6uDZ8GbsNaU9SRm6tETwPFYXBxq65y",
  "key8": "mQgiZxspsq2oqrwfQRXxGg8qfzRaUUHrhTTtPEPtMNc4syZEnFQYRoCGRv9yhDm7miL8FBqaLQ2cMmYRVRWcMJc",
  "key9": "29hdXxaAWTHt8zDW3GTSxUMr2NjNzZ3sXxieU2ReXkPJLQGXg2w2eh3S3PvmaNQU552rw3cSPE5qSQRsp82jaxqY",
  "key10": "2JBxXrPdnZ7upZTx1L9AFCcNXWFBXa11bPgPYS1Kgh8ef4dPxtAWz1LAQtA2JBQFQq62A9FkySHpjDtCR6xCYBim",
  "key11": "4kjxpbwpLCWi9woWBiambWpzvGu9EqrHY2i2TzsNz82MWEwZXWvuRAXwJwywpefgYfVQo2sweuhHwLFHKbg1YxgV",
  "key12": "3hMo5hLpbhDjmFJUDbikWHFqtZkDpnPiNjygvshFMQ7AaKXDGGqARh5L2LhJ38kfMUtM7Ro7RE8n23gYEzx3c2Aw",
  "key13": "aDB3Yhqo5dwjYtCoBSz4QJPMyJm9P6QU33JD41ipf5KmcrzdrZEe63w57MbZLAM8pmM3bZrZ2MdPgWZDAmt4vz6",
  "key14": "21mzpFGBtm2YH3EVrMUV6WjL7TxyJ17q563etnncJnAjCwcN6Xc8CYBkQGN66eC8Ms2BmuLth8WDQCtK3NZ82Cxd",
  "key15": "3KrU3oQTZd55K3oNTiB7RbtfZmQ6kZ1u4CqVRqQU1zFyHWuw6XZUpR6ZcYmuKWmA9Bc7SvP1aUt9TnXxiAUkgjzL",
  "key16": "mGFbB4f4PFp8n2QuBmC9N7RC5t4Y9s975afeAY1R75mGBtqibnnH8Qv6rUjZkJ24E8Cht9at7QWaLXm5Jtfk1KX",
  "key17": "2BmBsmjWKxPsS4RtXJLtZXY81sBxjgnh7Z3wyL7oV1KeC5Nfa8HCde8ZFxKZULZh847Skcpa9cBuqBmYjuqAKvy7",
  "key18": "DcoSRro43zV8VGUigXiZdzZT49m7AAgAScyD7kZju4e7tbEdVZgS7MjLJKwtQr6ZKTPjpHXZLkvMyPZpTJwCeo5",
  "key19": "57GJ3BK94sFmpb4xJLmEC6whdVa3keE5qyvcXtog5Kh9aC2B42tfxMuAJUofG9FcsKdNnUrN3rPcv12BsCvSFwbu",
  "key20": "5MbTwJEDMuCb3W4DX1Xcxm3Yh5Fiih3Y4Z2LCJfpw1qTeAFFkARtTc1uECe92wHharH95Es4ET5dxYyqfn9AXbZM",
  "key21": "4Afqt1TT8Xhw7TUcGZ2izjMTt3MT41rSqiGdhhUMqMVcMchM1ADMNqGa1xv6vdx8qTPazKjeFoqTjfsJNar6JpHa",
  "key22": "5CCzUrnEkS75RqyAijvnuo5UvchJbFxPt48cmjQiXmSuciSGsm7Kj6Dy3KyGGfU2Yd2ibYMR1fD1UD29SeteN6po",
  "key23": "TnbBTjTcYNYgA8tZYaGDvNLj6YGYawyaNRAvq7Yene3ascmNGsyKLVRqgmeq2hpmK6q5HTdaEftwUfkhzgoaXbj",
  "key24": "3M6ZbPiAgJzRS5HZFkDnaYQE522p6YASVc3rcJrHiHZRhhggF8LiRsMwXbFWQWGBph6QwqsGNL7THBtztGvtSzw1",
  "key25": "5DT9fBehVE2hYLoQi29exrXiMCaCJNoBzgu5qdBSoNAGieqWpV1xLJsBS3yMiu67PEZyiLumGWQihXu5MEaJ9t3Q",
  "key26": "2UDmc7AypeCwuF1wB8z5bqZNuVWKqGuyb8RjQLV7zAV55LwfPfPR3UF9WARsVQs532PMNrwL2DNbcZ2LoTFbVRvf"
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
