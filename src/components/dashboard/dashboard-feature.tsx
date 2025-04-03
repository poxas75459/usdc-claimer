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
    "324kVVDKifCYtRy8aikuwjEKyw3zwFbFsUN2oqvzceqbVcRrMFZU15Fbk7P6QhE2N1Ck3SKtSgBCpGrhNdnW83vW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BrPuv3JWpYxqS1dY1oM3rw7uus3tx48KPigESzDu6C1EXah9Las8VJLjv8bsUDdntcqa1uuvTy9qr7KLravZaii",
  "key1": "3USK34qPZoJbFoR9gjxonnLQfqRpfAhxng2KMan2DFns4tiVbxA3Lsdao81WijyzHmvuisgRdkCSyLCACmoaWB5e",
  "key2": "5YEeqPPRFWXfXizGyQW1EieUGrfXtbx91pV1azewtr4uCSaPeLzQGfkm3drUFrjTfiQm36RGMGJmMmVvquvVuNet",
  "key3": "5Z9rUHwrhDxGHZZChCR8rMdVVPB1sGUPDVh8JjabpnCKTcQpJd41EsvFEUFWaN6qc16MCL84oppNSLy8TLhE6w7k",
  "key4": "5wSfGey39QLLtw5s11tXtGxerTenp8oFsGbkLfs3QU6Py4Au44pWGWrw3PkgAEusd49wJdqz9fg1ijtuMqCMkBqt",
  "key5": "3ifqg16TnfF5ykdt18EdZJXdKAbvVXzquMjAqJ7kvdqK71qiF7KKxwtmNhKTiXtsqP5drbWBX5Cfcc3i4sp4qe4C",
  "key6": "5Q8ifqdNwnkdvptyyJ6GaqawrLfPJyexfy44dovVZqV3Ek59cFnYnLkVGnWJVHtNsj6fgJUggGGWAALfoMK5M1vC",
  "key7": "5bgrSoXX3sAXsXA9W81SBzKV96P8egZXxuuDK4Jb4sgGezxQQJpHQGanpE8YbDjnXrMP5jpdaoitfUKJAvRa3XHN",
  "key8": "4LvPx5A4k8Bq5rYxZrUnKFCxxUDaw21ci3h7JRiCKXuZDvyzgHd6SAKN7RpUM3geL6AKZN6JkqK1kPe8Pp26MG9G",
  "key9": "2aGGe19sVNtYVMnmMEV3S3EVyyQ7acHBqoWdCY55P4J1Lmg8yHqynjtEpeXzrrWXnR6suYGge1FiVyR1MegrjXXg",
  "key10": "4FGgBpB1Lps4jRifv5SxvR7gn8v6rGvPWkQpPCNAAjVNeMs6MkBcS9F1Mi16Q8ToJnQTBnRsj7x594FTC6jaFYAL",
  "key11": "2aqXmkGcbkcy4zHp5pj6a3Kg7iSdqYXr6VKDU2bCWux9ZbvCqmWoafNRccxdRQzQ6V9KJR4qjk3QBxkCjAXwQcpS",
  "key12": "5Unj33TQuzfUcuutXjoTdGasBgtyVzJnkaF8LwpM91LYwHjhC5dvFupFDrWoGZdpBJu6AWJvnW4o8vKJmtEe6FHL",
  "key13": "nK8eq9kn6wpzXS8GurtgtgNHrnraH6L1Re5rrpMyvWAiip2jryVaBbjU6B7GHA2trGkDh5nTNUMkzLwY9xGNize",
  "key14": "4NHGynUjVKqcNcbHG1Lbgm7ho9WTKYcNWL1HJXeNWQKpdt4ZW1EyAznsLd617qKNNsb6rrc7p8NiUnAdr3pQ1Utp",
  "key15": "61w7XRHTzJzYUQpJbxgSF1s2tEuKvBGHXDg1g69SNtnhtxvktwU2MTVnAAqJpwo8hvt7uF7KcgGiQgAZu6aN5JE7",
  "key16": "5PwArqbRHstawzrBYoosyiyjdRMGABK8qFSoHxN38eWWnEFscktjsRnNMQzxRDJP8XGn1KYViRRpST49jAZZWiEC",
  "key17": "491v7So1u2aVMjozYcmDq78j8CU2HccxM3Wnv6ADrv798r8euvhCb6Nb7i5PCsyKRXiiUUvXX8WJVbbwfgzZpEUg",
  "key18": "2ucwzZX2pi8CiajhPQ32rCsd3VSuFAzCn78RNh2uYDyoHKwXjQsNP1dHKYNv185mM1MswMLYiU2rWveyFbV64uMR",
  "key19": "23JYHNx9hLsMQK9FRXApAS3mVW33Q3j4SyzS66xTD3h6aYzk1AJkLa7QoPVRBAYrBvWip9MyJQvgmxQAH8PHqvrV",
  "key20": "4QmdGjCeGLa9HpB3eLkFBNZNy3QgtK9WV2r1B1b6bcu7kR5DTcMfj2cxPDLbcZppp5oUwFp3ZgwAg2NAC7eaDmNG",
  "key21": "2FQtpkyUYx8sXsM6X4jPWb7a9v5XgzqsD1JkjUSb5fXkbPXdu7bZUYwMyW42SHcYxTPW1r92WwVzu7aSym37u5aF",
  "key22": "4pNsFEbea1fRDgMdZ3bhcivNRrFrZBaUriayQKQC7n3o6gXLAPYonbvtK4u1GktpoZxE9yX4EFBYN4tc6XCkX8zR",
  "key23": "5UdtTMKV3iHKsLzChEniFgLgCaasMobMiMkPCJbkucRXUTRrVMKdJ9uzMVrTshRGjCfS55EWpjdRYj4jDRrRSGoQ",
  "key24": "2hHgCvn2yCDrMtGBBr4eQvFcRxrR9YBGYuqffMf8Dn8T2LjPmYK4sExXMyNacunFbWPk7AN7QfpDNSHq7cBbhQro",
  "key25": "4vLFCH5TSmTG1xary8Wpjk426d9VAbuohjdWQFbiJxQXYko1mE2iJ7xuCbun3SLqqw9mqMrw41rP2oNGAVxAc2Gy",
  "key26": "5mK5JBMuHzHpfjsMNkqxHJxDMGCfzTW6fPcqrwqmKaSwDodMA9DRPmR1AdPFVU3vXnoWRgEVfstBctUzCyKDq5KW",
  "key27": "5Bpt5RTjEdMNn7jm3ds3dJ3ExvYJE84CDwqJMoLLWUen1fHbzBs9ZvH31SFVJfsizGKAM8kNthmLnUjEE9T9Pu2f"
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
