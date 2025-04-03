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
    "5KxqSDQt4hDVjs6n9cARSiDqpHY3mhdjKqu9hCAgVaqHAQ8CHYSiavjzMHEZu16qqTSy3uWPFbWpUYFYXgTiAAoa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V5paJbPwUuc1MTd3n32LDoX27xi198FrDzi2PbStQeT8wsa8DBmKe4bAMJaAcgN1a5VCpY6QtBB8nAcLk4SABcr",
  "key1": "64p4K5Hcy9KHugyWWAdQwzWwRCCi9EW8JEaPBagyrsYKSkJZjb1QEZiYgPbQHtDDPNzbGvbrMRKWp6FjYY6RqcJn",
  "key2": "8h3LTCA162FHNqDun2ZbCDZVG7dY4kgwsXg45YAW6XcZnEhZVEk2DFWs4oyynd8wudb9crELep7oHRyPRaW8RVK",
  "key3": "4X2g9qaeWr7DTHwSWNktGN8G4e44sEhY8gM7cycJN3YCY9WZtsJX9Jt46wVi5fJFks5ijKKEsabbogYGLv3gbgD7",
  "key4": "3vQBXqNQzNTgdHeZCsLY7dqA4boB1Pe51FESwjdSQsDVtACybxfSWq9McBevzYdQdHcz2zJ3CLepr9ugrZy9AZ7S",
  "key5": "3yBxWXfgj6n3s5V4UesaNUM8Kg9oa9ryfr5C7z94DeJuoKdQu71ey4uF5utWws1fau1Gh8sENWk1tWnCAc9zNkwb",
  "key6": "gZt7ZzTNQK1oNvXaiyd6MKyarJnWE2oPCa7a2sdfzvWfFEWggghBLYKLm9QTCAVob75BkcZ2viT3MSnwhtnuf5m",
  "key7": "46kSxmvmAKpzZ1RWSopKwyRJh1Vpvnwv3ZpEwKHUfs2DZbxwWtwqvu5FewGyzh5eqFjEfW7hKTyihGQNGYctTCfe",
  "key8": "3RzmZsThsFLvMso4pcecgLZBxyfNuBSjM2Rx3mbjJ6zy12fzTqhdR71T34ghLnVhe6H5r1KzEJeUZktkGmYd6cP5",
  "key9": "2EHUV5yjUqo7JwiiLyftZn5HzyFQg97cswsfRGHhS1Yzv234jDz7YBTAowYyQNwGCfs6Qhgopq7XJD8MsXzXj2iz",
  "key10": "XuXGY6tveTnjvi9YK1t24ca1EqeqtUrJun64RLfb52e53oSkHJno2GdSpFU4Gidm7tNRB2R4KRZ682CPRCiV9cd",
  "key11": "4Q1dtrsbFJhdpH1tdmVjxkqUv4q8J9rYekQcTH3EdXwwvrDqeTze3hoLQBGp24RKMqfDwEZ99ptpEBLLANcjy77g",
  "key12": "5f11bw3Z78zzNCvv5PjhUJRcvyD6cgkVPmCYiZu1xtzgQPcxnra9nopz9fANnjaSheK7s8ySYjmGwKq5451o2trw",
  "key13": "23rzXti1ZEpXmqpbNajqZKjRtMVP3pKHcAyc8wU42Uq7n8LZrjGCeKMiJ4zuZA8ZXik2YC665bJ3LfmXSTrGEEKn",
  "key14": "2iVw9A7cxVK8BeNzB5KTTbyar9euyscWqjXVT7jyWcZMCvgyTPQu4jAKNuPuxpY6uvZhnpp342z6fK8H3jtfY4yF",
  "key15": "4QNWQeR3rBpzoHE7SSFtH4pstStB4tcbSZHb5sS8qPGZ8heFVLr5Epj4dSBu8s1K1kwRTRQ2ELyShTrbsMSNcnVh",
  "key16": "5fNZ6VStZWMepxT8T7qA1bNDkQwRkySzZGFL2U7R4YTD6VCu382UAA8fCCH89BTAbLsejrhACY8m7JkA6Zbxrfbn",
  "key17": "2GTFFLKNWo4GM1kkAnqdYjCL9zNCTRbg3Jd8Z8JbjAfacuwBmi2iDYfsqARWiKEj9vuimJQHoX7fUW6jyadmBwto",
  "key18": "A5vTAn6S9xW5WPGvm1BnNHtGKbjcAowTJki6Zo7T1pBV5x526j2jHtB2NEfX55hPkg3Wp8hFJkUhB6ArgvPwKgG",
  "key19": "5bFHJJuydDp84qQ7iVNuk4DTdAbzWKriFCADW6VfNWE6oqSjiZsnBftw3kzcjeQLG8kCCUah9EUe3yNAGoex36Z4",
  "key20": "45A2N8eG5hBcvLwJadS6sayPbjprNhQrgCRxGMv8MK2Lo47EpiFyMvsJBaEnsqKM6vWkP1Swy68LDtTuathP83fK",
  "key21": "3icRTNaQv7seremuCcwHnEpx1goGfzU16wuZ2uYnUANQRHbS1mbfnBdKN6qsHf7tiogbcUTqWBs2yD8NragZ8zKi",
  "key22": "Dg1VohXDCzYthFFCTV3h4161kQwy4UG18jaw7HfVYXfwcsRPY7GmGXa23mW16GWxofLak9LAsQduJdxiKeYQCnc",
  "key23": "k7orhRYg9vkZnsiWqdBWcEgvM7F9edNbssWkebnFwNobG68gN8nKVivrxJCgWD2fyxSoigTtNfhzBLDgKSXsFSi",
  "key24": "4wDocToehrzGWF3QFBXUKAyQBJnvLPrUSYiDQdeF1h2miH2WDbj2GD1oQcXesdquhdj5SHjtX351tDJpR5bXay44",
  "key25": "2xoRGX4wdEGSuYVzRZUXkHYdDrBzpxU4ViKXtUPDnCNPjwZjJKAZrkwNNE5p9fL2Frdg2QZ1KdDVyMbcMLSvhofq",
  "key26": "XoRdjue4pjGVqhmGvqDkeQgu4zxGGv3Vt9ZKtqX6HRo5pr84X4RXPZjox82BxEcwMynSL52EVUWKw5qzZZ8hA5i"
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
