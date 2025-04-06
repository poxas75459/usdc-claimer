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
    "4aEp1PxbaE1HeLgdzfbeqzufrug1P3dkLcX1k6uf2YzbRL4yGYjuwE7QuU38e5AL2PCZJAYfHV7xaQ14fPSj41se"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xzj5RwQWeCHACKoMeCSQYwzP8uVCfPovjE4QVXi5hTpY1r7AMLNAs74fpmvs54mVGzkUWjQyCrckqtDJEm5JXE8",
  "key1": "rttX7MGDmfgbHpM2HKPs2sL37KFFfFNbM9tr4fWeXUSbAKJ1P49mnRRpB1Ls39LMkgjLHiDrxTzEJL1aTiv5KZG",
  "key2": "YrfC5Lvkapg5vFBqaofdzgU7ni8U6La2ted22ojkRTZTdfj6DPzGiTY9iGnwa6ctUbCmadNDfkJ3ibXutqtGAjD",
  "key3": "ZrzQZJtQE8NZ8bqUmQivJip29baU3cFTPFRSEZv7wSoFWPbDuiVgKoXdEG27oNBr6EWsoF5cAbhGz73KQoM2ETn",
  "key4": "5Gg5na1ykPbxxCShgQKLbLz7ykH7Hf3n3hWNiJBRECDfFvSy1gnLjeYX1tabSJVQAciu7qfng1Yz2HajZ3XveBRN",
  "key5": "255xeN2Aq2RX47C5cYnyZXjJBm9Ht3RKubo1xSuZLq5jRMKFfKycUiBahKUFALAyJLieW8YHmS4TMfNL17LHfKFG",
  "key6": "5wLTtP9dNjBP8F9YFv7BskpJ9CZ9F4SdcYiNDxNgu8xTRaYBPqwEH3hEjg8Pb4SoyoWD6LtLtqwsraSz8ad8tsVW",
  "key7": "4w1srYSo9EtywcjRW621buMhGkXihbtHrgWKW83tPcj27rCFWtchWCVkVc8sd1kxBeq7WcNErVbz6qmysiv9MXRc",
  "key8": "9H6n5H7EXvWJzRCMx9h4MzL9GffYMEYA4nCKANDY2kgLydUfAXMh7q1M5etTDYfhiZf2C54xt4DmgR2S4gVMfnL",
  "key9": "2cT9h6auUFQhJHQS9kVisSEnYX45rT7g9aGYpTSLuM9uBXDYqy3sbqAEZJem6p57HkXLivfTaxtT1hbfNScphBCn",
  "key10": "2GreA7TdEeS7Qd6GMuLqYaUWi25Ccxz8nwWus5QeLpcuPYMpqShq7CiZFqDFJKiN3omfm31mHEhDebDeCiVbe2fh",
  "key11": "nJynSbTjCmDmiU6o9W871fELB39PcSjawB5sRsWofGmk1mQCDnSWVwE9Ze5evsD3pNBK1AZNdWJY3FHM9J28TC1",
  "key12": "5NaiyFjaM4xdtStMkkuKzF9GHpb2BVr3uaLBpMfTo1zNSK4iUz4wsP1a3P3HU9W4u5twz7Wbnm4wY51cdUxMzWzn",
  "key13": "27HDW3Z2uYWw1Kb3k2TTES8bVUbS74xDKh3guZAoFrDvPcLepSBWz1gBuQNbQqa8ZSmWaJMDSGRmKiVt8AdHMWTy",
  "key14": "2kFyQgn9zjwh3oWnKX3k8v88JrHsj3r2KimYNvWMDSBVB5t2hhgHiAxC9kxPECBvuLf2cLbwZfCjCzdB258GABRz",
  "key15": "4DM4qnbxw1zLMtU1PUm4MRhCn5m36Udq3hWufvH2yRMsk2wgh34PmTrJqffHMXyRWzre812ByAScof6psqZpGsxu",
  "key16": "3NHhXWr4vP95qRLjPxAHBr4QYCChygnudYTJaehB5RtcbrSMfHpned7NveprgkerA5f1zWKgSv3yEM3n6vDBZyys",
  "key17": "4yiynZWgQPYPC7fEQXQUv8onxJHUyg2kKziCM7UpqRZ5KyRga6oiYnu15XmLWYVzYTGkaLKk4rZ9ziHrmk73Fajd",
  "key18": "2mZPSM6KFQJPGP2QdsiKd1BWfnbofA9wTVewpKWxujGTKNRbaaTGygNX6CnUZcYAqCbzQHQ1BqdSH8m26YrLeYft",
  "key19": "4At8yWuohFLvBatMcx7KQqUdb5pWSFvSXcuVvEmR7g6WLUhM43FURyHohY7DC5qSfQdU2Q7HTH7yxjK22ks46HBH",
  "key20": "3n5tXZioe5Ck5XEYq9vucJYCPBmf69dajQZSRVcc8eDWjsh6BfLAn5q2ibqzZt4yggGBBidNhBHQpxnLazBwAExm",
  "key21": "3f7L6qtuAiydhfYC86EaoM13BiETLkzYp4bZFSFmo7wrWxaiGMoTi1pV9g1JC6XkCuRJG33ymfDqVUpzx8KrQABj",
  "key22": "5qXpudEgBxFCbwVqmCHfh96SDeYRVTzhqSbd2wexhkbFgcJzeFPDHoi91HeH3FqkX2QSzL8c7fS3jaQaRFkQzvh8",
  "key23": "4yJF5SCtxjYMmx7ahGV5ACrr1qfLzpVh9fa23f9HdEoxgh8TGQD9QegRgQjGa63Mu2kVGwcqD6HJpe5H42vxpZH",
  "key24": "2uuUgTqdCi388gMFjxDJKL8CPsJahBskHcpwFVPkUMLSui254zY1tzSx8zv4yoR9oACr1x5kadRhPb5p16wHVNYW",
  "key25": "46u7NNLHS4ksFpDUFxRnXjHD4a4RDQW3fYgbX85PL9kppGibANeghdpWiJsp7e3Z7YFjhEaqAyHXKzg8wwRu4mb3",
  "key26": "5FYJQa8bdxPJEYQqra6nGnMzYtrBXQjqcy1soDrrsWyXWxXSAaELrbUrwCC3KCAvc4yDRuTym3CRKeDfFRnKyQzX",
  "key27": "5L3CjVBM8213zP3fDM1Ts3GgsswHQGoY71sHUyJDqL54QsKLg5JWFhpCPp4Taxbyu4T2Dx4fW2Mf2G796CaLFHNP",
  "key28": "4XgRrMWi1dmBZ9h9sZWfchjqyasMw3xMeTtdVUhANRxmY9bT5WheKZZMmABzPBiztfhaNGnwQ6RfCMeKYxUbF9cH",
  "key29": "36FZFjLtYSixbTeaSUATQZF9zHAhYjaYz1ytz7kKii3hzwJGSVDq3o8ZxQUUUEqY8gcKksiGx1H8GkNocnBee6SG"
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
