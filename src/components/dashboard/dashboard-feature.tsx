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
    "WQydJojcP7TX3Rey2Aro9wifin66AUNHZ1ycv2KxCrRhow9y7yUp6WycSbrt3fU4p6fbZdGhFcCyLm31wmrudgy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yN9P7TPFkNkEsco2bN9EYvam52rKzPH5ShM7m1V8Nr4MAccBLECS6jLb1SUsG5Hinwz8LmxeHedVfDzKXNdpAkR",
  "key1": "3YHpo4MsKQ7kYuYTUPzs17nYNf4QGWAt6RW21pu5bZYXnjzRCU2171XWjv3VZxXMD5rYVDYT65eurQW4pf4GisuA",
  "key2": "3TkicQvtM71rbqAqLU3CiaVhNEJnDdLGAW15CNTt6NQRkxvTYQhiUCKsvS4hdAqN58faM8TRrXB6FkMjXTHedLs4",
  "key3": "XqBRqFahipGxKc4W85dVKpwRNQCJqajzqjSPegoS4ABfUAhvQL57aj2JUESHy7YvDKZEM4CefGckLvYicPAVMtc",
  "key4": "3azdmxBd14J7LoxKRMHseMmS1mTMtpTD9onxRkFbBErvugr8TJG1WjVJDKvftUYV9XUuSu5dJYrTWaaPNTa8r48L",
  "key5": "3GnuqneRyGkU444CDeMo8Z6XSxWEmvDzSBC9xgh1vLctgAZziSSokPuBMTbbpWvHGi577igf61HEMygtXdMWx4sj",
  "key6": "27nUnNpc7WUe3t7hfArAbfnDxwxKPsRvgfQEtssX77moEQxEj3gQRWeJfPNbJR9V9ioJjBbbuVHV17dujFf45Xqc",
  "key7": "2N8kK36AZR84Z1PEcWjFTQCgesv75hqwTzhjgEaC867LvHu6g4hqxsApHvkSm31NznrnZjttcaQmXj6pgmMKKoKJ",
  "key8": "2N3yxzfjSM3LDj2DtCN6VdG5wYEYK7uF9jzZVMGjNRfzAASDzDwjsuYx28cr4LJGisHqJMdYaGEwJGGb5hkGbPGH",
  "key9": "5pzPt8xXV919pVhCNhPgSPNX6P6bo89uJLur2iyCxioHsqMLFjyJsBzEbcZpfP4tsXN4xn6s4KAB55dSW1i46FDv",
  "key10": "3cdPqP7X4MrmQBVkeMT2v3235TpztgMv98EzfBirUGna7LewTpzgZ3PbqXZ2xiZB3sHMDbvFDCmYCHdurRZjkaSH",
  "key11": "3LqCKN8LZHAbuaHe9eUe8o6bUGufqpcZdVc5FLXTd9Q8KxzcVWMmPWHEACrNppMBsWBafPgty4aALaifXzBWs6Ec",
  "key12": "5Tn1pFnSuPXphwJkocV9E7sLNY4UoSuLR1MkBokLyDfeWQTQbxqXSC4wc5M9kHMBoEHgxktXmbJZfpeG5tjNWgVk",
  "key13": "QdSTWcC9raazPadsALEt7tp7dFPkNuyTQ9QaykNVe1wGM7jFo3uaYFcxBUVBeXnT5oYWzNFpk2P2bbpRHXGm7Wb",
  "key14": "5cf739PgErrvbUJqScAedj3sAKD26H1BDNJYxD2VVcCHhNVFFk1bQPAyVjmxZ1mjTXpSSMg8R9YmeS6hJE6r5WqJ",
  "key15": "bDtDdDLSV21GBVUL7yusrrgku71Kmnqw7nc7Tdcxy4ornrwLfGLKsgzQM1BGEhitt6dcxpTS8BEPJuxmCgmKeUk",
  "key16": "2YxKwMJgThhj9u6hDGNp9s4XqQxuLs5fvaC2QNRtvDKPX7tnHrGbdfeSyEJv1R9sTeMbSScKDvXddN7zoBuP15SA",
  "key17": "52Z47TdAHhkZYBjBBPJ9drzmFQc5qEAacNwh4CpuFxLAQ7ELTBE6bVod4XrABMjUWqeNdckJEvgpB8V4F9Gfdz4v",
  "key18": "8yCtrDXfEpyFFR7puhiBNH1mh9hBjeusrZWtnj73obFwjKrPyuu4n5sqRMMy62LpKAPVAW3Z3rFWHugPSFFq97J",
  "key19": "2APRP1cL4GZVB7GUVPKeoKqmC4FkoujKTsgBujAA37R9UUbBmnM743AsUkV2UjQbQvf4HFNc3FvZgUg71LgDvXY3",
  "key20": "2wfsScRS6rVTVA8FaLWL2Lxvdqy3rEWuYGxYFf1HEcgg9feeEMDXHgFtTckK7jM17KGE2MLSJNPFt9TvTdpXoVFi",
  "key21": "3htEku8shzLUATuUAp2aWGMreH8AZZ5JeYZ6Uk58AXLCKNWMzXvxFBykReDK4dPawaHYgBBtSEu3ot6t8nJ2P5vV",
  "key22": "5kXEBxnf9uThTvRoQc1cFnRm2tf2QLBz9gGxzKbNZbCanz92goHc1N9V4UfK8oU8Y2nCEUuvKvEFTRXkF4n5CTpL",
  "key23": "2z5b53nqHStex1JrcdVNr1CnJt2FEtjo3AcAKbwNE2ZJ2JZfvbZpbmuz7vUu72bePVfRVjAsz5QAp4mQzG7ths5C",
  "key24": "2GPAf59eipWCut2yxsSKExmcQ4HeGpTjjLJAj3e9ywKKQWtkMCccNCWLGqA7rPmKiRvA3azXL92aGspChJmHnFeM",
  "key25": "5oJX7HxMCvPwF4TGNWMYCjXoDrXngtYZMMkW2zXobpvLAVEqK78kiY1PJXuVxAsvBcG4hKAgursqe9DNsNWNZzJB",
  "key26": "5qXzRJVETYtGJnkxwRNdfo45LdeM2r3yx3MPfPE8DQtKqbVH3TszkduCkh71d8EhU4pM2JZFWw4dFAm8v9N1k6iw",
  "key27": "5z2qh24eE9QfwNdNBt1DdSgzzuLbVoAbissxLex7TZ1zEkqZBJfRWiFDzKf2z8emKW2e68JpfyM6rC9h71TdaUWb",
  "key28": "EfBKMZRbD5FCRrdgKNrs9C6nU6RWwL87y7fQkKPDozyBS92wDJNLtrddcuKDctpJNw9F9WQN5ZmAMHbjSEAaFnS",
  "key29": "42GuqEqkASKdEW8S6Bm7d7RS7X7abBwtaWp42KoQAMqKH9Ni6PXR9Y7djo6PQGyF1wSD3PkjXsyu4BUR2zChY7h4",
  "key30": "2qp2T4US6aWoaNXpL66513fjZrNx7F2cJnHnfqe6ihpbhq1sQ2drZGzLTrRR2edHn5oYbEK3WHPY2GFAvKkHP6hr",
  "key31": "2D1UG8vtz6AV3AdvNuqcE9hSDG6nFfc7NHzJEhLVW2RaooNBdXjduCstENqZRzZQU4keqd4E1V3ex3uHdc7PHAKU",
  "key32": "5MiQAwmnDYS7CTMVVxzjjNczPyvkQjZZZdakFRoLDk31tspofj3Xohpz7ZVukUnQiNyBXE3Rv4YNtcd7yaGaqRko",
  "key33": "2NV2MxJdgdqNqm2HGQRNT6apfoEC9zUZCcKncHQEZntzzwzYih4t4ixhRjrS9iXknWApMKSsuqrMVjVfQu383d3h",
  "key34": "4PN6fHurKU6tbkSqVRcMhSTCJvEjBHAzEG1UgZgUnqx3ZfB7sXj6PxMFmcUU19qpJ6mMEDnc2ad62vx93cEob4oU",
  "key35": "2Z4YCT88unWMf2dxhw7oaZVhNTdBHtabTcKfhX6Fmw1b9HvxqptFFgFbfkYLZf8pNDk6wVUNxR5LgDQLnUyFEEx",
  "key36": "5PU2fbMGubHZNMN1DuMTWSX7FEHvQBZ2ek7UKp1eWJxMNAG9MoVwDLiHyVGSqVt3hXbNKyvNwMwSb1soYQSCmW9a"
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
