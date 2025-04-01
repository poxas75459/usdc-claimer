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
    "45SNtXa4d9J5bXvfzPcmtDYSZLWJB7nPG2yg3bQ2p2YUueoqZr41ThXoFssfRDi4TgmLTsZpyxxWLzHhqhpb5KAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H6E87sWeXrpCGrMHVrE2vMnDL8AdTJXfHSp3XxTcBXHuykFQkL6npMmtnhBzbYyuYCprkC3BUV32X2bZJd4F27V",
  "key1": "2Es1JCnoUNVJwsJ6ajSrehjkCJcwMfy3QRMgi4ULF4ZGjToyUgkwFkAeRrVTvowSbmoQ2Rdhnyyf28zV58PaK33x",
  "key2": "3o3zasHi8aMLonfaSQADK8bwD6YDieRH58j9HbA9ZU272jTgLnGJ3CCQXjzwYytqbraY3avPGDAyWu5UkbxQQVFi",
  "key3": "2jaBhmBBUPZw9QQ7dhnFgtASnAusezmUp7G53HYVuFMZwNjxADqCUdLTDeNrHMYA2weTHmE3g3iopXkb3dkxUCEj",
  "key4": "5aWCRCAjvyKDwQwuc4P1ASJw6c5u9fjYnNGoomfQRe265RPQ1UxBdFT5JbaqnbFRWQvcJimcsu3VPJ1UMnDGeFq1",
  "key5": "5c6LTA8tx532EPyrdaMhWdyEpfqLMPQoGFmyu1EBAUVvuxDsmXr3oH5WUNKStTVPj6GmN1hA5vzUQaXAmXXSQ8r4",
  "key6": "2xPzyvHbXxFFXydNH8DXeiQbBrq5wLYsXk6Ba9rqTyZvhJkb2co2iDHQkQxVPVPDLUPo2841gsDEb8DbKoHbLgpt",
  "key7": "264TxNfin19nuw8tUuTgknpBsUGrpxmAgx3JVsGTq81a6mrDTDDBxeLG8WPFpHPZGtsTn1cLZkjJgj7VHBAxkUMn",
  "key8": "R3YQzqVPz2t5pigzXVgqwEiza1pqnioFXFKESCEBpQjPA71r5bmDhAcMdvp1rrTffgkapXU5ugrVwuYtoQ8hcj7",
  "key9": "4cFyipjVC6A6XXEEcLWms1n6eZtxUqzPmxovvfJWBHV56gvHDPBkXH1VNMMrqGMQRV6sBJZpV2Z7ziMTFrMieoiY",
  "key10": "8WVcrXbkkVE66ywWqEH9bNmzqRYBrH42qaSngySRSAdYShYGMEsDVCxX8KNPx5UNWwXgM74Hx1mk64SRff7tghN",
  "key11": "3psdworhiUFqAWx95dPnkYJkLRbuftB5ZfZ2KuTtBJWZGAjkL43MZfckC2UzCFAqSW2f73ot1h5g4WLqHnWcjbvH",
  "key12": "3Emtm8wt7h8bWjDkwgdL2Ap7YtwWG2AUcxSWpftHGFYdfbQfiP9sDae9PMkFNZcAzMaia2euJVoPS1rthBkQKC7R",
  "key13": "2Deb8R6VoXT7KuFzakEZ6qZThoMwvyP9u6yVEG8nnyqzv4AQwvdtKxZEq5oEXHmvb9HWYXgELutJ36JPYmBUypSc",
  "key14": "5K1LJpdyMmbCKjaPk76fNj1WeHzRp5mpqtG2meKgcAqcWeFFFbNyyC7VpAQq8JzypD3qZmJyWrgPtgG3GFQVWWky",
  "key15": "4eHHa37fXuQXRZt7HNS17b5AKMNmoSQyFM7ghGRLnbDvZKkk5836xEr5vWfcKmWJYgHT2ntmVhSYvno13ojjEPFU",
  "key16": "2UuUuwSVo1PVebbuUNSa5z2e1sJD34vZzRBRh5HTsYiGQoWeEAZTaQ393WFpcuoYFhhamQaeuxiXTP98fLhKZWjn",
  "key17": "62c2phJAStArGbk3ePQnKf7qg4som7SPUjApBtPu1zGVh5jMUeDxJ8z98WfjbqAcYceWK3gCF8t6TydHHHtNRi3t",
  "key18": "2SWZDfZdXE8dJqB9EeGbD7PuEgP6qBXQ41jZvcZiZH83XdXPpW4Sx54hBxGqBMq9ViDWvjUzyh6HSsUtWmaEJZ3X",
  "key19": "2R6rd4aKH6koQVhk9nYEy5HHEqTcfzXXtu7Fjcw8bM8UvbuzCFS6biS1gRJBVGdbbTvXefrG5ZVJ2PteHNtwnupR",
  "key20": "28AhyVkqKNz87oioC3f1T1o2ouNMgRebUvjoFczEdba8qgqqrcb8eKdpqeNsc4yNfyjBAmPQ88zELiwsVM7Ej7Nm",
  "key21": "4mx9zZ6Smfm92gPR7UHo5Nr3uo6a6yyhSQn9QBusz8Jbe6KgrEZkcLXpom8RWtkY2NmhC6hoUX2ZkegwKeDMLTu6",
  "key22": "5TtaJQxS3gYZc2XNv2SwrQsWgK8BdFzW5dybN4tPu6B7qWZmCrsttLCQ6gcUCsY1izxAcyjuqRwBvaxCyLy3v7y3",
  "key23": "sfNCW9PvtmGDifLgayeNNawwTkSFiY53zTxoRY4ufRHBohpyAH55cPBfjuThQwhSBpyKojgpGVyFURvDTfAjww1",
  "key24": "5VhEzB1SU3ff3NEQdmUrSdGW3fZDdTHPZoWrM8WBFrG7NCkoMAGRJxDg5ddeGbj4azPVcPSQHeWcT3q2i4ViUevh",
  "key25": "3DoUUoP8AHprNLVKaUfb7hW3QdBzyRAuMg2qjg2FBzcxuJ9EnFgr5JLS5Qs4VW7782UdsdvxgPYBf65ETuDQuNb3",
  "key26": "3ck8wv8f989c27FTvwPha38Xad9g9C7ZM3CvgCZUJdThr2QhB2EgWrUSo8qucbVn8gQPgrLX5yta1RBmVQZAZniU",
  "key27": "43GCGASkfG8nnzKmjJB8YpreMTTkNRE7anepbXPikzggwSUhFPZxRAvEfFZErY9zi4H969RBzydcDAH6P85DdYhp",
  "key28": "5KK4mFgBsPEmFuTnyG1HkPKrB5A8ookAntibqTCkdQviPMCyFtCi1rxJbTNj76ERVWXB3AZSwXUhw9DNPVAQHDQL",
  "key29": "5uWBTpL9YSzj8ACnhC8SjkjifmUUxDAgdSoJARKDb2NQSBQAh9TLh3um4kpEYit1s3N2dPXYXGztHTns4zVGhKWt",
  "key30": "5APqsV1gXdMB79Q2kSJVrx7YvUgskN2N1VySptWyFAePB37TGkLJqE1RbDnMFmQyr1E4VXbdsx7i9p66XvbEU8ad",
  "key31": "5ZyGRznEXGiaX1QJfFggPioAaJepshPACJUrgEHpLNNtqe1BFuWv2PDrYsSYg6SokxPUAbNJBkauJFvqHX1ixu1T",
  "key32": "4MCdAgimHqqtRe2uvWUCSgSTzzxjXjyYb8wLWbLaNRLhhRmh9UWBp5YdaQigo7zKpVArTjyirU6riEfcH9Exoi9W"
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
