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
    "mKyif8KrFYP7rjM1vKQjCx4eDz7qU26vHu7aY28xUTxLPSxwACHsaJYh54kg2UHEj5EXzRwy7j9nEsoQSBgXGzQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48pmQ49zHvm7Tkb9Us8uZNys7YWefojK5u5WnUxfKk8XNgpXSEfMYVojC5HqJt5A4zkQj16uYz3iCukZsQiKR9N7",
  "key1": "5Pk2JNgLg6tYsVNMfMFv7mggfEVuJwhk55zg5b3WhLDiAJ9rvZTRTGwmeL3oTWejEAT3C6brVXo1YA5uFfidvzdx",
  "key2": "2jrPH1o8viuPYhcotfBPZZfoo57rcGuzZBhqnnm9XJnZp2rUxq85Hj5DBZA9wzsr5QSNUxTYE723P61KVrXSwnJ9",
  "key3": "36q19hCkbTGraUCST5Pk8LQya62eSVa11NQFSypk5nPZ7ZZ2dDFEE151UQe6LdqpPw6t5gcugpsugxpD8ttAJBCc",
  "key4": "4RXu8sRj5KRBAjKy98R2iFfjhhY16FGxmtYhN9iRT6ykpT1C8GSzFPrcazr8TnV2HtixqZKey1zrT3eDaZthHq7V",
  "key5": "2etSbR2SK24UzYN9p5XPbQ5jo27XQRGhvseoMqF4SkpCRjwMpdjxPupacWhEJ6BSiVFw2j7aNTaHZVUeoyMjj2Xu",
  "key6": "2aSVp8c1tb99JVcbFoXmm6iUCXTZT9LbDgk7rhC1JtW7yUQT1JXgBZ9JbPdoJdH1xCtKozwWBnb5GedMR5dKGbCs",
  "key7": "2EQhZp4P8wRumX7p2Zf2hAhhiwCPVFXLDjwMqk2QZf2AjXsZ8ULjTBfi8GfwnVdrAAAkDRwM9a6P3kxLkDwo56vh",
  "key8": "2thqNmfUx3t1nex1GaDmGAxA8xDmL3KYV5zFy8qvz7bZhfesd4swyKATaZvZ3vyTXvS1RcJwmJEcDufQv17Z3kYb",
  "key9": "5aiMERN6hQyyeND5As7MmBN7jRSjExoCDH1BHyUBYbqdBn1FE37XSiibee4YxWMMTTcoyr5r1BsEiPuBjk64h6hE",
  "key10": "5nFQMXXy656ZDxJmABsP8aBKFHgbByPJ5sDxHPefGqfeXriXrBRNrzVRyxqoCTWQdCKqVoCXLjF9HTagLUpzTbcX",
  "key11": "4NvzEAVbCHGrcEcwcN44Gsz9wozvfPVPUwtpiYCBRW48hfdcmyQUwmisE4TsM8HgNpNdQSkbz1S29dJuLbButPAY",
  "key12": "5wstdy62XqrvesNd79z1dAvYBycCpRjPrEUerLpMFHZJ4YjQQfu5n5DSS4Phpw9AK5t6UQxRwKcoDNsbpqEAHxMi",
  "key13": "SEWu1qCphd4mfvbndqFJkrohQYomN1teSvYMwQ2FrZLB83Z57qpiqk6Yt2X7TibH3Z1vxjzoPUFGPxhhgojvH1G",
  "key14": "53GCakf7Dc6WV3ovMkxrFBqe8k4BwQHfZh1Q3rgjqjswXzrpJVUuUEyDoU1QMTJdxfLtWNS84QpgjuPLfSCVTDd8",
  "key15": "2opk6JYkKzrzTUkisjtpZJ2GrjGG8ioEwiQfR3aUqVowT2WLBvEQWfS622kNE2h3KKBbSgiDvP8yYFpjveE5waTr",
  "key16": "3H2YUVRT1PV1WDdN4AGJh4K6NoP6djYaz4FFPXH9EAmpYFT8oZgMNgJWzBjwrbucC92vM6Qx5PDbJoZ5Bs2PNEiU",
  "key17": "3LPmmk2Xymqour1ke7kyihrgicFcioa5htzFhD7NuqDVo9eSAYWiaZzdw1mJfskusvkXhQTTTdXmNfgr1sdv9xhZ",
  "key18": "2XCvbXZCoqVmRxUrjmkWzg9nDdrXGdDpaYCuguaJwN54k5ZoRb8tDZMvbn2CQJ2PXzMVeXkaVuJjfXiNbBsisg5k",
  "key19": "5B29CJ5cwbjrn2XNZo1nrE8Uf3GMLnrgJXRnTbLLk8fqWnqLJJMxkzhffit33WsHYFkgsEFyNjeZbiCk9D6wsePC",
  "key20": "2y4Adfn45Br76MA7eH571nFSg64L9DYeRVccSgnhe6M1GFsUgd9a5WHVhJzb7JFdzkUFAJc1rvtDRifoyG19YRgo",
  "key21": "JkpiNRymgmqw6R1pXgCqTGk3VT8UAZ6FZ6KkmkfDHuwPp2oDJ1DnAhRh22TZZvGUW5rvcahecGX3FegnqFZSnQV",
  "key22": "3Jejwx2foLvdgGoJ9qtrCR1N9aMbqPJVB1Xu1cp2jdBM7NBNuuCPhEDvx7pRjRDphWFt5cU5TbhwUXBhvfxWoh5r",
  "key23": "66u2xFv5tcGqN8rs1vf1q7ZqUmzfnHihKxobscEFawLgJ84upzdmT7F9BSfa1TSeMJ6eUoHxMVJWGoXEXsCKsajZ",
  "key24": "3axHD4z36sPCrtyvcXb1Lx8Vqo3naPgztiVtx4Fxa3CDSvjccJfXtNhh7NG9CT7CnDFwDJVdnXd5SWVBZhZTgCbe"
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
