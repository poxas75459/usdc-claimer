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
    "5oyVXJ779zLf7EviCit1NUvaZB5XqMnhfe3g7xJnaxYrPRRbbQiNUVzs8ucsy2vCFxPLvypEnvsdmnJEujPhRtTe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27n5nSeBNrpzMMcYDhsKEazidEwTs7E3honrEVDHUjhc78KxhCx9em1BeHoD7R2FrU5rz5Jmg2uM9QJeyqnL8M9X",
  "key1": "5boUepKnudwg4Rc5Zq9t3u8NeT1cJnfsTDiazZDJmnhDb27XHrwKTMvntjwKeZqi7TZGjtBfd3iCNN4xrjUxSr5m",
  "key2": "szPqZRCi88YAADvRScdKy5AtQGTjuP1fxrz4FfuaxLNmUWfgQrwkJGNy74rSJNiu1q67vE5qB3mc69oFG1xkLDk",
  "key3": "2mVEk6nHCJvrwJXh6UtXrTDh7hZzZympw3WMEGhmLNTg2j56LosJd1S3NQ4YYgwjvWxHMESMRbdqA3RLfd2DGk24",
  "key4": "3RoTVrikgQN6BVZf2QXM24iPrcsCb2N2sDH49fkcv7eL3GNaVDhobsBFuWQ9WaMmaFKJJX8X9TwBgqqnSnRkm9s3",
  "key5": "4Byf3ysBgXVRVqqHEENUi7ZHyiRQk7PNvkxpeaKDrZGqLbz2878XHAU6ANEGoBY4E7PM4ZVVqe6EKUBAVia1CvV9",
  "key6": "3yJqvJNb4J8z3BuJjTRyMiaGe8dyUcgHC1mwwNftSFbDmxruNLhFPWVFEjybhDjpUWHEMnuFK7Dxbn9pJRqUr4oZ",
  "key7": "UTpjMkN6Zo4yrNb2HGTEV1o9zxVdBfNgAhWmbygfqBMyJLE6KtuErZR8kMKMxzBz2qVph3UPeRqDUkKNXn2ziBE",
  "key8": "3eW29KcFvMgFGjQ594tKUxfVoDccdURwyE95Ggrfvr5EmJBWRxsEoNQQndk5QTodQF77E1w5nJPpuebyU4HkkrfV",
  "key9": "3MzdEv7BEsqZ24LX5Eisb2ooEqmaj9vFH77vao19TPvVACJxMkKAQhKG4oaKk2NvR8hABMnfZLs1oXHy7ceuYdz1",
  "key10": "5WgFVbxcJthhn9XTW1bYamMti9DkcvS4YPKfMeL2tm1upEkEuYNM6tcWffjCknbgonAQdrzfcnj69b7eBq2AozK5",
  "key11": "4q61VTV565reYrQKRWnXGkmQPFbTApJkHwe3BbAwsCu6X3GpzHg68HYcv68hhHb3pgE5biLaggykVzz8QLfjwLEH",
  "key12": "2SPWvxNRWbrXFCGa9nCmkgiVVXKvJ6k5WRAiBpnt3neruDvEB6Ma7AmEpxUTWkFfbZp522qvieQmztrqoeF8CeJ1",
  "key13": "2PrS7wcb1HxKE5GdGQj4vm5MFDsEm6sv6AKtntLgxd1zaKVFKdHLQrF7Kx3nbEoGvP7LRaZn1rtag8xQz1wKY8Xj",
  "key14": "2M3heqxZm3ZHt5xS4mnnpx3qM1FjRK679sviLYfVvpzU25oL9PfcmXzjQQcBgMquZMRUfAZS2XgodFnYvJs3qkzP",
  "key15": "4Dj1j894mJR1s1o6qMvfNB225z8zXnkwDknpyY3rTvfJrhrLGgW5Fi1kg43C26rcG5ac3KWz9yPaGF4X7WECk2ba",
  "key16": "4zP9c54LnYDCnJj8ZmtgdZWLhPiLzu7BRsGgLLwLdFu3sBqtUCpPsDvs8MgP5cHFYtzyWuWtC446rphABNEPCPuu",
  "key17": "5fBTAk1ke9nN5VUxGLzGrVvaGE9Xuet7RG3pUamkC2CsU6LAfNhwc8Y7UquuytSgVeQv4caE314ETZLV78jPs8Rd",
  "key18": "4xZxAttyiUB4EznsJXzHxFeRLgQ7i5v4sMHUk2q6vMAMmAtpGMAj8TzL4sYGMe4ntBXLCTggZdQoFHwK65u5m2PK",
  "key19": "57p3QyXfpDPGWQu2vdF3PdheXjKVgXT4wAUtfTjoJgqw1FbdfDKNdrp7hRMAxy7JtXCgMHppCuyPSG9JbQwxDfpz",
  "key20": "5pKbh5aKTCc6i6teqUc2LQJnGNZZ2qbSTehifu1qJQHJrb3gur7NR9by6zoenfeeTfDSpjmeNZLzVunH7JpQMB69",
  "key21": "4ai3yfwLWjs4ZUFe37CHodgu4QBAYRiXyCQwp9wGLUnBCkoPGpBKNCVKLVQcC5f9MaK3qvA5f9H4jAETj6xAnoCs",
  "key22": "Nv9osyVSezSUCyofKWURkNPZ9MzbAtJdobJifBwwfufWj3PzB1wupPxWSeV7PEeiARvGDNMbwQJqs1EasS4UmVT",
  "key23": "BZa1Wbyj7XBwFBTKH7dDA9eboSFrB2eKyywHgfbqDiSZktMyCmaSRryEt3uqjd1UG4guFD6yyD7s7XKejZQ7zdj",
  "key24": "98zcLFrdWaxGXmpGQpeDSNt5bUmzVpKkwqE7bRkeR94yEXU6Y31QZKcbZzvumTnM8VjNf6UPvANwisK1yZEk9ze",
  "key25": "o9MCUQ3pha7KM9kHThtpUyP1AZZCaSRfYNLnB6GKDMeeieLLsMLycVDdbvBciRb1H4ViYmpYBDN6ZZq1h4Ab34k",
  "key26": "3EgQdNXbhquXuqGHvoxBMQPAzG3ifN8SEs2Eitk43JbYtScYi1F5PopEnEU4PZRHtPUJcDxArSmHBvCThV28Et9U",
  "key27": "EFVjnopJdfQCUtSvVNMT2LWkHBeM9axEsfX8CC9En4UBmBbrzx4ErAvqq7sJnESb69rpw88VsKGUbKBTQVzyvLg"
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
