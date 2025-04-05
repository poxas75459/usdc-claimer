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
    "4QyXQ2B3VuadcZW95FfjsMpT1VJciEdXYbMohzBghHkDQKtmfzDCyqohBJGUm4VvXGoThGz8odRPU5838s7j4ECR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UF7W5BKrK1adBazu6acEWQUAuwJssDwXrfCFgTpDyAmsePV4LMPvDvuKzcjx8zqnKtv8LgTNmTdban7kxw6FVDS",
  "key1": "PZt6gmXvQfirgUFiyUx6P7ZR7yXXizCUS4rV6yUHSj1kfhUrYim2Xg9HusneqJ7VAk1am35t2Ev126YVNyRawJt",
  "key2": "4TFmCABf5FD2zPH1sfY9A2so4qTXMt7Y6KzrCa8YeZtLqwA3xQYGvVyQoTfyJwCxUBDGgEc87v6LnbXkNdWbahbC",
  "key3": "5TfTQq38wi6ZQexwocgSM8kXUfMJfdZho1awm3MSH4gJXHhyZnhZQTs8LRcvrU22aXoZLFsJSEvxKjGdgbF4427b",
  "key4": "5K4vVrQaMyi9MMdvnfd91JF4v9YXiBGu3iTfJ96XDr1ikAXqYhZr9o6WoNrZvwYxyWrjGt226tahCMq7k9rsS7Z3",
  "key5": "571WXquRq6jc2ZrfroWNW4JhUDuL3Zx21wZaagBB3gbrUhaum4aTRd4YoDEpQWhmzBhNyb7etYokVCpSKAEJ8jre",
  "key6": "3yGyxHuwD86JMd3k2sqqiNd3n7vF3qM2oTe8Bq4s6DeuLdCoSK9VSYoYrMFehFeBPV8g6NbVDmrqy3C2q2wjJUxh",
  "key7": "4NybLDBsLt8vu3sAoGRzBRrGVQEUYxSg9526uRTAy1Pe6UmQgAR1PFhBXCeCkPjGVN2RHFRzpyfXAyR123MUioQj",
  "key8": "EYUszjckLXgvnZtsofeCsuP1Qb9TJ3YqDiFAXAkDcNbWDpgRWdN1m2XCKcChqKR5RDGGnfDh2Xrn3ArTNh19aFF",
  "key9": "5AwCFrMK47adM2GA9Ut3FR9LomuEQE3iYjUScjgQ3gim3aaSgVzDM7WLGceRHvGgapSxrokPzoPnTcRrEZftJV1w",
  "key10": "2t8S77LqytPHXB8tJQSxW83RECMJjvAwhQuYzNxGCzt88ZKfzPEjzy6jrcUSGubccnR3b7E4oSX5GHwiuiyz1Pz9",
  "key11": "5YfTDSC9XcLudoCR3WAU58fFsN2jrJCBb7ArKdG7GCs4p9YpFFUypdEPBKbrjrRGEnGuJatH1mpMGMdCHMMRs44S",
  "key12": "3tCp6MVYzU9WZUgWUbm4sdWQhmuqJvAACnW6WzicRuAPknDqtD6vcLdPgME5Pv3F3f9sGaBN18Hs2QY1RhwaiGgh",
  "key13": "5afTCyJPmqyc1tppZDovgcqdcEd7GbG7oBTrep5z5hWmUCctds2MEyWm1GXppguCiJSisxF9ZSB2VyuvfjuKYHPz",
  "key14": "4CfoiiZtSJHpatrjtbHxn3ENJPDj5qqfbuNmwGWmuRr4VcmwduUeU9zjkkK7u2173chMiYndMfSdukTWutRvmxzW",
  "key15": "3a1tfgaXGZhJnoAaMqqGo2PmG9uhnnBmpsTx33oUv9zht936sqAXCjBF2Y8qqdLqGSd8cbWw64NEPbp5EzNZu6mP",
  "key16": "22V8KdgyiDFLDZvhD8SVJMJam7sbqtW66eVu5vhTFCUJ3roetDgqKxcbnwdMgxHfzknne86i24q1o58ASDdDZKbr",
  "key17": "rxWPVnbANYFo7RSDjYZ45nHzijrbSJjw4wYRWDgbCUL5NEurwr8yCXNnwDAgjcrtVAZcL1wFBbyBqjmqWiCq7xE",
  "key18": "rzHLYEKMv85JRH5DdLZH6sYjsewEagmHuMUqZQhZK8bHhG1xYvzZYeTqvTrnQbvjxNYGaWqhm3xjzPQ3pJdbiQm",
  "key19": "ni8YogwVTk7TnSA4bNY6592NRovAimUQCMDzWuHd43cCLzjpsM285ZP1q8SsAsSQjRaVxQcaZQVjtzVuqWHbiej",
  "key20": "5YSKb7nmuSHVS476MUKM7yRsmmpeH74RHP1mLAZEkxDbC6pVsNStEBPq2YLvAtWEr8bQCe6W2hz4aQpfxMRop6BW",
  "key21": "4qVmiwrbnzhm9uXp7w22CvDeidfY5j8xQFtQ8S3VCaiDVLmBjWkEoxxo7hAVyUFF23B17TcGYNro6fwP4Vmdu16a",
  "key22": "2LY5AwjHCfPMmSXNRxHfu99fZ3WquwkbuDBY6rWYBiQdsxn5J9krH7pyRcRoURz26tiZ1z7pmBugaJykwv2wCTGZ",
  "key23": "3v2mF4Z8TF3cEm6EDMKXXxf6LQ6mFfpPJFtadkuNk4D8uYvyYqNHzEPfAf9HujaSnv9kYgtKVxNUCXidwLVWXiJj",
  "key24": "4nj8ziiFRJV4xvSxMMWkv1YHK9Rj2vENNnvzyWtDVWkvohVDyFaCji5jxtiK47GtvgN9QjhuMCcu6Tkskkxrf7Ex",
  "key25": "4AVtCRuZB4sQNTmK6xQT5ZzyAk1GkhusCPAdur8eVUPLvF6tL22fd2cH9KoFBPFbAY6qsCXVx5CSHF3w62FRpUSk",
  "key26": "4QAQnQHY3pDpomR4A3wCCdvBvjH1C9g1vn4vvwmRZC4bzsHsahdUBV2yX2oqJ6ywfCAPE2yixD5zisB4AnzGV7Ux"
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
