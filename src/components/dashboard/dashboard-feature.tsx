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
    "3bWdLox88jyWSip2mHRpZgNgveeLXZGUY5i5DJvVqhSvkQmJ9kfEDxphMhypo2van4U4ZYMYr3zpFxYMXUdF6mni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RehNbUQWh1UF8bCDHVLWdy42KNdanjgo2jkp9DX9psnavFnhpMiZfTWW7GSzbNNCMq9FvtEkYRAxVP7Td5NVXeD",
  "key1": "4nWG6MF3UvyjdxE1w3wJYhUScY4BUJ3VMHJJVHJm9r8CjD7ksaJGSdTCPc6uNwustUXNRRr6bSgx5oxxe3cbYux8",
  "key2": "5AJwV7AY44H6C9jifSQbtbMegMnvaW8MfPWYenSJwdGqYojD6mRovSXr5Abwot4npUByrBV2JMpv1NczvpNqXSku",
  "key3": "6yWzieu6aC9EWcDCUT3L8dQ32TDP6YcntJCmsN8q7f6qygaQApcPyS3heKokYQwr3Hi92K18tASxLiqmDQU23yK",
  "key4": "5RSk7b71qaLpKonAouJjzJSR48v1Fz4qVXgQ8XVuRguuXJ2BUaRkET4eqCFQjFo3RedKZWxJcAdd4ZhSJDPb2DA5",
  "key5": "2CbkDw1c1pqNg8rS3PdGRtModLQVuHr7th1gP5z5kMe2Lk4RwXdLNwoRMc2GzMbTYkvprYpCzTaTsVb7Z9zVp1os",
  "key6": "5cdmUAuHdye7DbpbQ31DraHSNnnSV11gxZDqCHGtVNNAn5tFqeEGx1QVHXhUYdPisTn2ZexqQt8WFco4ZoMnwvKo",
  "key7": "3TNU8KcyGHMp9qjLJPQxr7iYatuNimAbUJBZypWtVrsPEuZiDKJTzgWD75d7jtRPLnah3PMCMWd8ihSsF7xkwbEQ",
  "key8": "KwUXLME659MQKhMsBYpUyAjr8mLzihn35bW9eKqxjQbFpRjx4ZScQqezdkC3Zf6egdyLGxMGXYXD1R7rL9J5Mn9",
  "key9": "2iGAmkts7UjtpSGjtpDY8LGpfry2JruUJf3B2nPwDD9C39iJfyHms9qugxoaVJPwpDSCbwq752iSDDPVHzrwsqk",
  "key10": "54uq51ASjvxGdZsoaaYqoEZ7whsQCgiYvvXpGetCPVbqMvQS4n9jEaD7TZzyhtJX9ENQyRki5pcitqFh8sQrCAML",
  "key11": "33gh4Fw7Zjz5cBBnMszRawy3QzdrUEB6mNWwzA5CYD2K1LweF4D5NzreyFvsWXTeXybYd79rWcDxAsHu7qekEY6b",
  "key12": "2jpWSH2wrStBgqZenrVDeALP1uKrbXpowejyejiPZwRRGTrtEfUuVsqAH1PgU521NbNMdYefn8n4A9WgXofjVwTg",
  "key13": "2nruq61nX5zdA8nByF6cLyUP1VqTgMB54dN23ptALTUGLBNGDrTxSHcQPqkfc7f5WWsw1Ga4KWgG8sgApASuKYoU",
  "key14": "588WFSejvZcNk8uHqY6Ru48prveaHs1qSGqRedarYvp6Nk5YBHo3NHi9eLXDet97FYGm5nDxjQSsrcYce4MRMUmB",
  "key15": "TcA2YZiuxRnR4ThohXkW6xAq3TXzUAfWxzBhY2zHYpdMHnVg69viEn8o4QMtcXLo76qZkrKW8nM3LkoDPseRrZG",
  "key16": "2yUtJgmRLyr22ky42Qy24o8UNRPFNwnGLCriKX2erbFPXFuA6eZ6XDWeX1BCfQFC3fS32sbFgMEWncarEb6MjA85",
  "key17": "2xNyVHokqDVwRWPbwPzRyiNcjEZiNdEx2N426QjWRfWZMBcjQRYUxcaCHN9XBfTu5iBKv75jFa7JLRgXzCDiRkAZ",
  "key18": "6dT1JA3iEN4mHg6XHtLxwonjLjtNUsPDZ6KA83x7FRAmEFPSxM9cnwBFVLarUkWiKraCGH59jrzBQX6qX48UxYH",
  "key19": "5aozVmwzTEP5HYCWgtsbiHQev5cYBMoKLWhEoVLz1PrWC1MBbbJBjVJektTZLumc2TBysG5CP4yMQ7Mnx58nHiMC",
  "key20": "4kija51vYvGFFbzSDMerqgxWfGEF2Yrfr5QSNdtk5GWDdo5dw4Y6LZxLCLZSqNZmehzQfr3aESobdTVhG5hECcCu",
  "key21": "3Gkyc3faCRkR2dATJ926SzpqJh3dHscLRpsxy64Pd2st94ZVhN7UoqEPaq3uzeEEa6mZMtPD3sMW5u5RKVAfqF21",
  "key22": "hTyJQwFTCKP7kNV5sKk5D4Cr1YPvHNF6HmfawXSXCdBMH1b4DR3FTm4xcuHtVAWb5Aea7CKKtKvwKuJzBquX6xX",
  "key23": "4gtbDKWHd4vhtk1naWzEujSNFfqKb4sL7nZw92Ryu23K8w4n2xbsqx7kLAAdSYcy6c1DMGU1f1wTax7FxkrTmW3n",
  "key24": "4aByHCyuR6WNV66Bb1fcTtxneTExTBrCWSHyQ2La8r79AUBmnGyCVZabhPF2TiZqgAo9RDG66AMnfyvkXtZ18PYV",
  "key25": "3mTjfGkvdSiKmQW9rTm3Kh2ypVfzk2DXHiZN64Ty9LtoYeQpTEVngBsWZV1rqNNdKboaqJHiS7DZw7wp2Tjn3Z7e",
  "key26": "2LXmFpAjCFRhPksrcuxLtwx5pCyaEkL7VNpqcsGEmcFKfTM5r27SWhwDQCK6H1iXZKDEC41t1zB3fdQ1hECJWX8C"
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
