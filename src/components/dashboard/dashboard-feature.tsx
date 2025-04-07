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
    "4KHyLCRMj5X9WV6j3hQNpWMaPNh5a6iiYYEhvjW9awifwLVQiBr22UkBsy1B3QDn4rojnJQ89EYgo1Cf7SK38oKG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32F3tiQS4vhjDwGR1dEfm5DhGEBU2eWpitC7nV2pL6nSn8RWU4G3mkrFWsgkUYCgaq8AWYaZgjJ77jbrcU9aL8ef",
  "key1": "46PmQDwcJmDM6ofAjT4j8kTgPYi5hK8rRDiLdJonq1nKsizDd3hkU6vJazNVyrYuyENyf3zKjz1Yt1kFVscuCCTu",
  "key2": "sV5wngA4NXV9zUxcShHi9R52yWQz9kHyf2myEc79KefSFoi2hgWrkW8K9hnXGKv2K8musePyoW3iVnZtd5fc8d7",
  "key3": "E4AhvCg4tzLCMhzTrpufhnmK2RRWb6873rWg5TsZkFA6eS2vAGePCEyskLaPwwekUodrS9eU7mYsqG64iAMgemF",
  "key4": "28a6TE6XUYUzLmt5TgAu1VVUMrxTLV3BMfauxoAid33urqtDTrEyBbiNKTWJnDYDCTzqXKzdMsHvYikZtopPohQZ",
  "key5": "5fJv29M5yKwJLuKbt4iMSwR86xFanz5rxJtkbsjp6ot8zgJu2HpwVtajH2fLTG5D6AuGuPzRBMkxxs2ei3tVTMJP",
  "key6": "2mYYbQoMFADk8R5JHxdXHY61nZVrDqQR2DsjyvZHohFUrtaY3DvGKqKhs7oPdAyFRKiRA98Yh9CSCNTvYuG4ucKH",
  "key7": "2yjsvtwBBkFdmBRJVtfktdE49BYCPQMsvvMi4CLS7VZenK7LmsAFmN3NsL5NhPQj4WZhTF4ZFmwK6ahJjknxWgLQ",
  "key8": "wyxshzYs2qPnr2DUj4HmriE8tnFkXdFWxa5zChNu7q2Lpbxg9K6gVe6w6ASW6KZDZiW5FNesWi4snizodVm4qQs",
  "key9": "2KiVRD7ua7bcapDfoTdfsQjJJEKivWFyj2XdVkUbqYieMW31nk8pHZUCLaqovjR2xvwta9EsYJLfts5pQmV3MuJr",
  "key10": "51kgLxnFaTfmmTkzXYRF4qYh8ifbMJikYSWZJdBUL4FAnJUN9WpdY7xGt1zGadRjv1LuDRF6RB9H6z6WFLsyUVYw",
  "key11": "BEpZJurHZJMriztFRYPHAHuXEZ4BSVZYjKJ3jy4tcJNta5AdBDqTFDWoPYXWSwyo3LuJ4fMAmu8SxNtUfUocctj",
  "key12": "dA24DxwS1L6ytxMm56hxahH7z44FoBgXgEDZ6uZyJRMv8G2LoeRzThP2HLfpK1Hm9G5VZ9UHsrFhxxQAvrpy6af",
  "key13": "3Lhhs9ZWMnh2MjKhukNBkEcbDVtDYX25UddtNza8zjwckNSueFBdL5guQEnDhALLYcX6hDTptzfVEkJz56EVf8o7",
  "key14": "3m3hUhU2zcNRhvbymh4xg3axQ5ic2f8bK3Q1WcUBHoHKLrUfXUpVVQ8dUUUqnQxZnn5bX6u2CNoM5w8puvxbBRaU",
  "key15": "5G7yLuDmJ3jDSE4tUw1CTigtaQq2U35F2yw2RQuPmsyfnGNV5vDsMnuWN6bDi1Qpd5Cep48aX2jqkbqydjgTgbYs",
  "key16": "3GqvESCgvMxLYPF8fAVoXY21ejXt5LVzeatYVxworQwW2dcnrggKtQyFVPvvXJC68HA6g9Mt8G1jKy31KVfmbdVa",
  "key17": "2obeVUuBvE8EfLjby7ux5sU4oRgAJKvz8Ex8ToCAbjCYaq4gWDwwEsqa2y1p4rbUj6Kz51QYcLa934ynyjR3Svqb",
  "key18": "5vH6wWPsKLJJ5CXbbMVMLS5vyi2aTqSDuQJjMLrWuW9eCCM6y7BVWpBVFbWw7tsSdPfmVM2omhgBH2sr643XksPo",
  "key19": "3DZk9VcsWWvXQHgiqDnVdx5ecgMY2cVRYcKfJoUNptY7MAggBEzywxQQs8qpmeZaUcFEQFLCGni7wifD6nGYn6E7",
  "key20": "35uNd3rRHnST7PHMTkMrs2zwBD4tZa3e4gJrEnPCFY71J3aXiLK2BrRHVuZ29b4sQ7EhDw7KZatDnHFUm7W4UDw6",
  "key21": "oK3fbJzYJc52xWXNvEdUy5LjGmXBJQjrkqX5VFGbqtmHfW311iwGo4J3H89VdbJC2feJmR3Jjocv1U1Fn1QNP6y",
  "key22": "5RyDbVBFq3M212DX1wtZej1gtXHrJ3FAap73U6PkZEep66rH3Rr143S2Jz9CTTiLZBLMf1ejTAzdzFrVcqm6tLzU",
  "key23": "45mVAZthtC6dxn3uRdqWAYTmRuekPrsBp6oZhM4FzqDB1DGE5qJN7mR1LfSzgRrDw65aqPTnYdiNMndRjjZ3WHKm",
  "key24": "4QdyJP2dTthpoZVawg4RRvxDxQHQZGChpkZ5HJvhB9NfGAB7rGpgTgqPLHmxs2Y61fFNizaVWzFrcUp1UCS93kZ8",
  "key25": "246JKXjLTERmwJUKYEqLWwkTzJyEgBTusVCPq1dD76ygYDLZ6NH6QWtsmG1o4XhdwGUBob7uZe323PMP7HGXFnT6",
  "key26": "YVo6YmbhGDtdyMGU97XekgTWem1TGkcaFTHkS4YQ8ifpyTx1CiB9V4mZbviiVTNtbZQDen9CBm6wWLqD2LD8Qd3",
  "key27": "5CYZ89e8AcDhbM7CxJq6RowCtPkNjf3SGtTtfpmUksQh6VdMSrrkkDqtgHCbFrMpAxLJPqpoHQmAJWPGJSiL8DRR",
  "key28": "ZKUBjKiNprzbNwC378Da1qV2M5xnAWd1eRt9Zc2zxr9SAhn1w2f1KtU2GReChFdAvq11bGzayeZSMTMAjxR7jNL",
  "key29": "5HCZXT8AUd5FYu93aNkW4s5FZoDGD1VS7JZwtPXy4UuCAttbUjS4tVRiHVM3ACLTj4QgyRdi5yMGmMTZiFibdNgb",
  "key30": "2uWpPdhQ5HwP8zHmEq3XypDevhZUvh5wjrD5jRTVbeaRt9yjouTiPyX5TPuiZvFnA4tmh4rRihkX5TRiXGEVBeLc",
  "key31": "4Y8vnNHN8WZCDAgLHNffnt3tdpFGkxueP7V1bT2QG9Mr91KH4YcjJ7nKjr9Dwt8RsCBA3bFSJa5GhxxQA29fmRbY",
  "key32": "ViqVjVoV9Uj7x6vLVm6dRUhvnJEXTjPUCwxiEDEixybLrohxDBDYimXduNgyQghmNwZthAycYGWTDYM6ieemfvz",
  "key33": "29qhHrLMA7SePGrZrYip47FP6cxm7yfeNNCT64RVgG72SandhWUBHadZgjRvFXmDTpFubRPBnDUqGTaXmuZ9RD7W",
  "key34": "PQpMFXUVigWjjwboJ3oYhBiBp2CVbdHmBiciKdv1nvd79kt2CZ9jkKzi7F8mRs3eUwhU7E8RsQtoqHLPYVT9kmX",
  "key35": "2ezG1ETPi6A5A7aFemtGB6uf2Dz1SHjPoDYhJj7zRTx7GwBuK8eB2TdMEkBKKqd1DspAnLveaQTDAzxLN65bmYNy",
  "key36": "5RqcALcxMLPaXd1i68L9d1NxtDpcaAVWcUnzjzuL9nWGqKTqZs3RM9gnLCk57UVUjw6rj7VrsxY1mSadbE5hdNvp",
  "key37": "5KswY6rprvv5RLQjZJiabx2PPgLFH1KsmX4qRrwdkoGWRcBUARWsVaAUH1CDEpEJtEgKHfL5Yfge17voYcvaT97U",
  "key38": "494yFY7PspRjQLUu2eHvxbvvc4sWweqUhviMELW3fG557GyF56opNhmYMGnjAQV1dBxo75aWXLHBasZonP5NifAX"
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
