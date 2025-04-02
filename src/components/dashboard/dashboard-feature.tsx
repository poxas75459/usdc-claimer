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
    "2f5pD3GKhVsjNhU8GRL9sgbGLz5JrgXWLt8ZFtGvCPfndGWoLzUDac5kTGw1bd68T1EasRUyxtic2eS3sSkni7Z7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pg3AMwPJ31GNPJ1k8x3ZFWgvc1usYMXdjUDv3WgqPJCm8gsCFrNso6wVnYiYrx1wSMTkty6A1AdrPAzSwQcaPWL",
  "key1": "67oUUT9Q3NKy8QMsAAWrYiH5WGY4J8B94ZSFamxxUzj5wo3qj5RQSV1p2j2g4RKN3s4P98HSZxQ785ocEYbMHUg1",
  "key2": "3dLXBdKXVaGHnstyc698zvNHiadX8K1ER3mtRZZFxAHQyzyDcTJk6MGzCfRWfK9z6m3hPUchYkPqQQEqt7Ui2uvt",
  "key3": "3mV8J6Vvc1DJZfBxgvvEYeJ6pLxv3V2ebfw9MqyiPDh8Uy2qMU4USrhTYkMgYogPnGcErh3ih4YqHEC3QWfrzgG3",
  "key4": "3BYi24hthBKHFMeshiGQQSNE4W6mSvQGR2ER585ePMw4YUeXiAnycyUuvZzTqMGevBXd5EP4BXk1yuNLADCA91bZ",
  "key5": "2LxnRcy8dSscWywKx8Ne5eUpGGAH5jGQWCKuKC5oC5uMX2eDSYjP5faAVouVEdrQMDZMQL4kN1LHGdP6ebxtXRW9",
  "key6": "4ryKcfe55xN9EQLRRN91Xv2VLd1bei9T5iqDvzzV7EUnz1LPRZ8Ga9oPXvfawFkopDJzhngEwvPgUE9Mf1NPZ3uk",
  "key7": "nDqy8MhaKusVWVBxXs5JkyXNbzGfz7YZmjfkmCzBk5Qz7Jq6pfweH4s5114C638KqayWokE1hQ1m7ZMeQHPrMLb",
  "key8": "3nrGhm4zZNbkHQx24rACkncLpnXarTLdLU5nYHuc2Jgt9WvnPNXgvNVXeiTEm3uL57UhYNsUYnTZvu51VNzGNvym",
  "key9": "2afhHYGTLzQ91fk1q3bu5S6bqAFVjH8gWSf5vpURMwve1sY2UdqJUDLPmfgUnpgUqvq5kDZDj1LpCt6zx875a7JV",
  "key10": "2pueuSAM36RbBMX4ynM8ejfbgTQpJ5nJtH1Wy2fgy8yzYfaymG9VK1XTSYmtPBFvjyRwwfypYq3evagWixexov4K",
  "key11": "3qZX7b8NZpsbkyspX2yGiER9ouee1NSnFUVhAZZjTKxGS5bKrWUpE6sfJBX4jds7dgRGPEjxDL9cD5nWK2SR6dJs",
  "key12": "5CFUWNupzn4vnfHq6vAH8TVz8zXVGdSTFRsBUhAqPfJ9Y9CCuAZD3J7XhMoTuwtZDJ6qdg1nBEszGQC2BJkXLezk",
  "key13": "5GS9E4eQy9Dh9GXEAPQ6ag2agLSE2SyS6J1i8GiDh46dYVuC5GHur8ymKNVs7W8JsDRy4LUnYPDLN3hPYVcadEDZ",
  "key14": "3XL72xcucUXhZcGibaYKXeeMmVLUgixWJc7repVgbKLJZM1mukDUSBKKDdHV3Ks6xevxgfftC6o8Hb1pgbKjTbbN",
  "key15": "4jjsBFzzTNPW1J5YWKyn3RHfWq1RNaNjViD6oSSSBPzCXncWwWVqu3CrVF7HDqbwR3PCusYHT8wqHPkMtLgMHvGX",
  "key16": "5NL7xgxyXCTsQXm327GpptrKDBu7nJ8G59imzzLjL7UJ5adrp8nLLL7WnxXUuHcdfDMcKKWgV4VHqgBLS7V9PGMT",
  "key17": "3Bz4XtWMrQZG9fA6vsPD4aycUETJN4vsiXdn8fEmXWtk1V1cH4pNGdXopTcNk6hCg3PTuKqMprpzvNbrfDR9dwEu",
  "key18": "cCLgb7WcciTXKqKjExHumGr7scCoo8GjBB6v8zm15D2kdt7AJi8shRRJ4eWvD4J3S5Nw718fjjaJNrWBAMDkv7h",
  "key19": "4X9PTG99fX2srujB23BuRNC2SgDCpGANYbxVn6dTtzdtLpR1YHMqWFFMuF3qa7JeYbh9YXVkV2yt3TM1TN2KU3MM",
  "key20": "qGCfBeG3Az5Ca5u1RK1L1X62b1dX2TcKvcUFVynYvMTUp54NTs2db8DK5wiwbN47fvHVZtBevyB4G8ijkcgGA8H",
  "key21": "3uo8KjafAe5YW16CBBywSECJux8smQ8msspRxAp2wtrnDhkn8wvCQXEFCVTcRQP3Gmmm1ELjPNdQaVCivg5sWCum",
  "key22": "4hLL7NhrvgqgZHbttvsMaUXUqevUwgEW6cep2CtULpv2wM1TBgaJCLbXmGpDETYWWumA4PKDCtSBirEvzSyZKh3V",
  "key23": "3GL3QC6yi7h81osbaZiymtpZXmuxegi86HWNtVBWSHnr3pW3yjbg31yXuBhW91Fqt4vgVakoU2xW35TQPiAedbjt",
  "key24": "5iYQmujdAx3fL7qbhXTxFYjtQ57XN2WMCKeBZztXbiEWLddvG8oWQvkABVzMefoaHaXsZo3a2h9hvajaNf68my2G",
  "key25": "md9j4j2vqusm8Gxkcdh1XaGbg98ANTZrQW71Wk4bkALqpT6cM4QPG43JwjQGpWpdV1krnEgfLMLPrkANb5HJtHZ",
  "key26": "3xFi1RFwMaW2XduLeeAL5KY1k4USkkmVfLEFfB11yFmKwJCEMK2GkmP8qVsvYc2id4SHkKfrYTKzZXzdkxgd4Yia",
  "key27": "4wgFDkEYMXAvQSmBmsi1imWif5e9jLGdCRjsdn6zthTQC334qS3kYqvEy5HTtgDeCHGNzvtVVksDCch42EWCEaEg",
  "key28": "3cN7kGrPibsboqoJWd1Cfd6Hn6CCPmN23vbUpxhcm5fLk8TLQSyu6hM84RvKEa2WdVwF9SBwwhjsaZjvfbM45Sq9",
  "key29": "572XJMt4u5Ps3FKJexDaZQPVNWksJJH9iov2Q7f4vtfZvPEUwZmMEyzCDhkBd8kupEBvuFauiTjm2sgkvXPPv48",
  "key30": "4SvLmXpVJVfbSAo3eNpLBNNoemZGG264GZ7XbrJrvgmF7UYqj3jbv2QPr25xAu17cpAfkAPWQ1vhda337zxjJSoF",
  "key31": "XA9rawGqCZ1KozKZbhAMSewyfSVBFrKsMcbgdDtRfQmy8fJFjYCKFCMk3pJyS6A2RbxGo3h2aFD3tGgDngrQCv9",
  "key32": "66f4ybb52KjEDKsvogJVLqe2Ak6KpS3cLzZyqRagTWdQqFrTNkZbkTkmg8Q2Q4arX9DY6FWMyyE2sTJEEF8YcpEj",
  "key33": "5BxLY3q8LrdeQ72AkXHQ96JsPDQnJANS7YJpnuf7ZKLaYa85seak1y2nTpqMXhVnwU3LCc7Z77DK68dLM6TkwJRW",
  "key34": "33xECUnJ8ebHJtRxT7DvF6pBZUqzuRp9k9DyWC4kBe7P3miistTgHncGua6ME8tNKJEYLZL2a3roA3ddfY3J323E",
  "key35": "23PEMz3ibCRt2SmM4QHomYtq159CD5gHrx9d5KWNz7N1zq7tALbqd8tcWy7dG7S2RtFDs3c5UwuhYjDofHaVrugw"
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
