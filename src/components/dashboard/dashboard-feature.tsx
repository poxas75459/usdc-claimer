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
    "5Q2ZzFqxohWtxYTF2YXBnPUqS9Y1bME6vVD3rYkk5hNDH2VJyuBXGq5yqngLMUj1CncXUva8wbiHPgaHWT4eSR3A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uVSLuBAmYePsnDXs6TGRah6a1TAeHYFLoodmwWfppv9CDRi6C15J6LzNLnpDSwBPWkAxxnm3QiGQQZiDfbkwqvV",
  "key1": "2CCxHfueCEtWZ5akUb61Xopmhf2JQyyuQbktNxq3PuYmNq6BnTAxXx4gsmjggvBGVdkuh6UnyuAVMFbnd7z33S4x",
  "key2": "2jwQWvsrixbaGNCiU3TQgWtxy7feLbWmg5vG8msKGfvvbAQ8prryYaiKXbbzXYXg1HLhzZeMwxLS8XsU8Uw7sJyS",
  "key3": "65sGoZmNvUSWgw32XcNQdiWJakyMbARvqvGQsNwr4NUUX58mUZ3kaPFaEWemCmyiz8QmChUmuKgC9YEfJEUuYCp",
  "key4": "5ScR51YsvkjX8xbu6pNgAyNKPhrqwUd1SqF1ErabqAXg67yU4amZNEYADNvhcxYQDpqV27ppwzesR7gezvyoi7Hq",
  "key5": "4V1Tqm8zBi9TTJVBioqPejnZxE8zJqXqufEhPJarAfktFHtoHLzr4uw6Y5ccvCDa9mnX3631D7fkZMfzvcN17Gb1",
  "key6": "5XMVMDTyDfFXpZFvcbfpM4T5tKji3pZuHanyPQa5om5CnZDUeUUptjhtUEUgnieHRo6Drn3ujCDMKFpcUH2M3vZE",
  "key7": "5Qt6kthjAk6n9NTM8mmzdfBM7v6xPVHiPjZA4rTik2TqSJ3Cwc3Jri8RXNSYbPvR8jZuoTBZAp8cXCwxSk51J8zA",
  "key8": "5ucJq3eYHYBfzz3SvhJGS8cP6nzbBMFruhBFfjmynPvbZCDednUBC6G2QpwTcP3LC9X57Ew3Egk91TrwP43QJ2sn",
  "key9": "3pdVzU4fboxS9PLqaF4xmqVKozedLHMER3DjztQgPLR2LexcxUuvYXcWv7eFeoUFbPsdHGcqnYhf3Taj37puKzCS",
  "key10": "35stYvQ6bvXjNQ8WgSqnbG6MEqoYSCHaAXHgH1wbKbfna3YLxpSqMTEoRftXfVU4EvHKLt88E45m1PWensCeTzUC",
  "key11": "2ZUZwBEMPemT8LBANUux3qQ31otBHB6nZuL1L6wB9v3UZb596Nkmr34BsN1iSemSQpQ21bpryHbd3mijvcDwYvWZ",
  "key12": "59ro1VYMhpYBWkGPA5J2gCFwwKmg85BJCJCo3oMXgeiBAg2vUa2u35R1S3TDrzaFVRVVamburj5xZ6dSwdyycfvE",
  "key13": "4mxcPoDrppWoSiXnPR4irdzzP6xBveLKiRh5ecsAtFi25XBZtVaNUPK4KENpZrvPGWGfh1uzT6nB5ZpG4kM9NzSA",
  "key14": "4HaN6UJ8KCdnrBrZitZFMp4kA5e4K8Kso1rhBA4Tf6WsQp2UoQpwrtZVW87E7YEqL2VnZ9jo9LNKC3q4odHBWqVy",
  "key15": "5fT2EgZ1PPgN1UPQNroWraF2Q8UPuj4TbMEErRjtp6diqCndT2v1u9egSLeR4CAdNVFxCrivR4B5YFqv9Y4jnmya",
  "key16": "hi2TXRNT3SxktDu7VmoQUKwRy5Qun6Z3dAgDpzUxbNojJfAdBkt6jh2RrpE8kmQis6h9Ui8Kuz2c9zbSTBwL5Vh",
  "key17": "BpJMTeCgd4jybGPSXHt2wrrLEjKwkihBQ3n7Lyiw4jVYxFpXyW7wXtuLgSZx5PFc8YuQugSD4CGnRYsLhSDkuJM",
  "key18": "nV7T43pdUjKrPPLHYQyxtf2oJqc14P8YQ9ZAd7RdrvNNKjyB1ELaoPty5xWE9oGMVtQJbF9c6JP55pYch1xjAy9",
  "key19": "2uEQ3V1YsrDSE7dtNsBQH8UDnuzvTxCGiCzLpho5BAj7BTgEtY7RnRApw9AEdzVhL3EjDzJpprCynPvyij5Lpoct",
  "key20": "5t6HAiduziSv7rEwFgKWHtTvmbvrNYWNiCqiTksY4pnZi7q7Mk4gxafKX16GEziQFQSMgW7PbvWqLogxucVSym6s",
  "key21": "y9n3ZRWJ3VtQtdykx33a11rrt6mzNJphoxnDuRpJeUvEhAu9F89An9xFsFLTWQzK6Tb1ayR3ciL1uwCRbW9g6Xp",
  "key22": "3g7ZBBmw6b3pHdHZcZGTQQ6W8SjfFbXeqrgA1EM2qEEqsyEkQkguB8jK4RMFwa2U2fpGNhTaMx1A2bNoRHK8PKHG",
  "key23": "63KPU6fEEd5oMUCiD1boTXiSbSZGzNvBzuhT24S58oTmosyEoMYc4H8EKwNoPLW5E1ZnDMwH9hXSb4Azczx9ACVE",
  "key24": "52jfUuR3rjivx7pZWYeRbxmFLhThupDKcThTqSk1RwGttJaSZaxCeCRSM67UVJtoPknEBvCxBashwVynQ4Ro3Nyi",
  "key25": "5efJLeFgXpN5V6a6oM1PAHiz5ydW4iDyBaY9Bj6rbgUD4xWugtburVhRzABvn4pVVa278Qog52qcGb3y2ecJ7N7c",
  "key26": "26yGpUDptQS6LfjhUYnuinjPRgR2Ans5QpvGM5Du8jwUm5puV77HF2yMPPuUvXEPkbnY2EQYLYkQv1rtgQAtDLoJ",
  "key27": "4nAjS4yJSJXgchZkaBYH4UmCsouvRAYhYSePdCExP6QiUV3bDa84bTtpTeMh22aMGHL1PgtsQt2ACiaxeXNcmMQ4",
  "key28": "3emCkCB3KW1UcpLu7RRWqvm1ctcnrkjgjqLk2t7Hmaf9ZUhzb2x3kuUbmrVB6YcWoxqVBgk81HMuu3Kxr5JgN3qV",
  "key29": "3LJMouy8ii3fi3Zkw5DwMs52ducEKY1cVkfELN89iFtExbznpU5fb8GTRT51ik5hzwT3ct86uEthpujbBrtQDHVt",
  "key30": "jmkCW5cn9x4Ek8GBVBoFVTNfRV8tUnLkZkM56QssJXojj2bVoaNm83QMb6FgDgg5kGs94otdS3Qh2P1uAFKgGZA",
  "key31": "5AsZH783hbEB6qmLnNYLgYh9SEu9QhxNpDByQJFgiH1DDArmP7c5TZKR6YeKTcj3AGnqPCMp5yP6EHERnZf3tqaM",
  "key32": "23BmGSHgaWNj4xrMZyBNVD8z3GsZuZdZM4j8HyxvGh5iPSahHGjLZAMeasDH3c6CbPmEwNv8gk3eydi8YZtZsLYH",
  "key33": "55rLEJgk2SMfQd2sitysB5mZE8W2dnptUxAQ7Dx1kY2kWk4N6JhQF98xLBYPAkaJ69VhvzHq9BhKCzX8VsxsVw3e",
  "key34": "3GLScGpT6chpYf1M3uUgMBrVSSt2AE3uth8qRecySvzyZpoebaQzQfcGRh5HRQ47DMSdaVyi1545Mw6H3enDgT1m",
  "key35": "2JG91X6LkYjT4QrstdrFzhuJdM151qLsVCz6d1g3N5nTRBjyNvMi8QNQKDFboZd7nEivCmyZddVr45zwHd6a943T"
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
