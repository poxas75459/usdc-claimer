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
    "f22orciLvkn35kjtx8zNmCJzBeLrHWizWZuNWTQnx54bZDfdzzaZ5qghsjzBmxbn2si9as323QAbcNhhTZFG8L2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h8M9z7TdkjZBpBTddNirYzrrxVUo6dZEy9ogHjGqrx8SZosNzWdZeSHUQuxyLGaiwL8heUgsXmUyU39PxmnubYV",
  "key1": "ZDzzy9PAkrJkVQppTfaTUMn57TxBzTiGsQ8qEbKE8B4W2ExoHAPUKyQ3q6tsKj8hd9CEHQiEjU1XTh7z6pKRo1R",
  "key2": "2EmiqbGhZ5qzDaaKcgPyVdH31TK7uXRGTz4h9D6ESPHY5YBCLAUt76E2SEdMuiLbeb6qkMDsJMWKUyv4ggfeFmii",
  "key3": "3cKPTsECC9a2t9GA6uqVPTkPAjMoyRgk53J9dn7KQh4Z5Q6WG9Aw2aMvPkan1wZNxjmGVZ42GBQrAoaUUeA5Uc1z",
  "key4": "28zbHGtB1S7kSLoMemk9wtZEjeqyRKNwRSEWkSApTPBum5TEMMx9XH6SXqVECZapvsPjyDvwGwr9MVHE38cmy3v6",
  "key5": "3cuEsz3KouX41jTALe3nBCYAwQKevsFVLTGXrRCwbs3VQMHxLixYb3bx5B21F7G8kefP2omx4CpKK6G2mndk3CL2",
  "key6": "3qhuW3iySFBBA9ZXmx1jyiPM3FnS7bgg8GJetD4sukgiSaEwPftqE6G9VtG2ak3egxxdgMtunx4srWoB1Weq91fo",
  "key7": "2P1B4j6WL6GTPKAjvt5W5cfXgkd1GAgvDNE7XgxktLPF7hZ1XWcZJH3oJZ76zaDdpARU83Ldd5kM4KRiAcD9hCLD",
  "key8": "6D9sPDwqnuzbjnTDTDdDdnxAeznoqu5eUuL2agJbAim5JgRDrUnv2wvV73hnaR9xicoaP7EMtx6FqmdsAw96FUL",
  "key9": "3ArvLAKnsgbHRYdhd8tuWov4D3DH7uvRgdei3jxs116kMhCGqsEZ5fiHyxg8fmu1vpNY62zUS43EeTxX7XJ9Cctv",
  "key10": "2oqtLYpF87LM6hirJkZikkwnLgpLMbRLB6vmR6iYs5h3ieeEwPEZeJ4SWvQ5NiYFoEn3PGDBoeZGZfVxGfz2jM9W",
  "key11": "vFsVMNBip2NFDirgNmiVSQKKVvSUbXbauiZu6p5sDfJoFvV9qBMkVco74VonibGdQh3sPy9ZEUKK195v996sBH9",
  "key12": "472StoCB6A9scZnGaAwpmL8JTTfY6J5tcxjfn1x4PQt6smSkkEt9vnYAWH4oG5H5jdQENxHoJEcC2o3Lb53ovLcn",
  "key13": "KSeueUDZhray7LtKHb3JoXLCJEpFTXXyDfjE4vQ4k7E17KMExturSRC1pEbjkJS11NRtFxjNRmC11Y87PajHYsP",
  "key14": "4PYLpiPoKNdNgMC4h9ygJHgsAxwk96DH8CmCAz7aeQipdEhp5vevbtBdobmXyaKfAXaTCugghtkptr5erFditzt7",
  "key15": "vK7ZRtQS5sXuQcLFjhogVPjPWCFqmrmm8TUdtsEy6oTzSQX8dQGCdmD1JDpBeJPkM7ZnLGQ2pyKTbK7yo9QCiwk",
  "key16": "3TWM2j1tYAQc4LR1goDRtnh6U6hmLxMghvkziWJiR8gcZpDiZ4i2EaKJ4Psd7kawW74pP1eFsYVZCudUXTai3oza",
  "key17": "41pcGZdZtTDhbKDr4bbexkwiEPj5EDJi4RssRiKD92KoviyoVaVFEqpVGUzxTbmiWFhaS1wfQ6kiKjUZVZxbd9p1",
  "key18": "2tkpycUgP55aS4AZbwgesWrZ9yNrXuae54JLK731Y7iPCJCF8veLZsCDKVk7DKJt44EHrhBS1A8n3ZJXxWqs3HXs",
  "key19": "4p8QPt5TmvpYxFVgrfigzj9BdXV33FpuANWtEtmS4Z4m9DAxBwDTsSFHtnmYnKUnEwvvmfmvREJhs7YKBKFnrQYo",
  "key20": "5HfCutAvpKaPN6uVqv6v2A4HpWq6LEDZEHboAWbHipWcnQXCoHS8eSVZeVkDHiy3bqmaexQkXhSeHPxmpsTwKWHv",
  "key21": "4ot8uE4eyzfkD32NEbL62dxPgbw72eihKXYr4cEHeBYsp6j9XDiUabBzXeYfjfFoCbeNREgkk3f4hTbWvbogunFz",
  "key22": "5G7t1uAFY4KpCzwCeXJqwpj5zCXJP57LbF2JbG5XmY5CguisJV1ek1Wkmygry8qbwYARQ77EHgj6Y88GKNV2uZSj",
  "key23": "38UegkdASDvXLHdrKAZhFrz3jdPgx8YX5sYYn4cNwUcX8FGZ9oiqAgFSurDmjE48CgKKiYmMThGHVgHM7532cXTx",
  "key24": "5HevcEWh9uKSxrGdETEk7Cjoqp28dERW9RQHw2GKMHnU6DbTYktsaapUTnDeuRZsqX7v7fJbUyTeyoXtmn4NH46m",
  "key25": "ii8hXsfG5WRpsdfztdfs9hp7DzeEQwtNrwkJteFCKuHhwWSVgU9M84JnKepd4VPEyGdZExTfcNg3Y8mKSJNo94F",
  "key26": "3VN7Wh8PmNMEf2c55xkhTiiBeZcfjfK2gS9KE3YVyXjV8pB1SRA6L5iZKcL1zwntXQKt1BWuHH3t3dY8gYRGtQWM",
  "key27": "2vetfo1nyVxkctPZJKd4gQtZYdJ89wCSBJ6wrCZNGaxM6RzDEaT5h67u8PKjRMp8Kk5hjtaqJn8ENDQR7Yp7D8wB",
  "key28": "2sjgWBoEUvsmWU9rALgSFU1poMgjpqCLHJgy2UhqgCBPyQJ8RFNRx6CTR3rSuJaJEcHobZ4N4S8vna8dHrJYUntN",
  "key29": "5vysSJpxVaJivUFu8pabb7owNaf7gxGGHy2UC1Bz3R7Wg6G9oZAVX2nmEqMNdHZNd4q9KfkpBP4YeWmX1n7U6RAn",
  "key30": "4GvD79F9pusasMCsUKenALk1ih7AsSXsD9snHQw8nZVnuzNFJDdfyjqg7HCf7RbWbt5fgpypYHY3HP9wNw1JKP9N",
  "key31": "4yNfppcvbyCp8qW8mkHSL8tFiLR3xaUQaDpEkkBf5N79c9iktSqgrZtgnAyKhPU1DoYSLVroQAkrss3UyWYE44hr"
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
