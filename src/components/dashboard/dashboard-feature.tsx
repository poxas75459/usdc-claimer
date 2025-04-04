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
    "63MdvWBbHJqsc9jH7e4upvjFYVnS2rLB1nmQ6sSbr3sMoxVyNYMBgCdkNiXEbAoBmT1tKLRWUYVG7CeQTNuw9CQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LLhConcpGJEzWjgTpjng3rLiciVs2QeRSjzaiTdu3vrRUvpU3vui4J4zVJ1o1zqQD5vnbkksR1qk1rz45oArSaT",
  "key1": "3FNdyA325AeoAbowGTPhp2qkrM3A5DsUkSZsLoh97FJAVaf3dq1UJXoJkUvyXLMT6o7nXGv3qy3rgWXqeiFHAppg",
  "key2": "3JCaEbGoMaiVFUJhWLLYwW4qdXCN4wsVJwpbiKkXaiU3mfpwUuMWUZiD6ERLuYWZppim9gKd9q3EgkujnWFBk4uR",
  "key3": "3kcrPmFKDM5ViZhm2AoHQ9BxaVrXMokj21bCSGutaDz43hq91THpv5rWpuapebexyr4EErS2QmNxemP34dop5MtH",
  "key4": "55rDf71hAB4t5cTBYSbD3qdtNVQMFK6tpV6yGZeGTgebvcmLpYvHnqQjtT1UkekAKMPHJ9aK17QPSRiHVoo5FXSY",
  "key5": "3cQYMLatYeydb1jCpsbxwrnrW1gs8Nu9atDqhKx2AFGGdY2QmmY5ASG2sSVfVhitifC9WXyUdadxwiv1wdaiCJaJ",
  "key6": "4PVNm4Rv2RMdvmy366WjATm4nNeuCTTECPNyEh6Kiv292kB6ABWqH5X89DpREYaAVFBeMNYEzif6ieN8kBgoUK5e",
  "key7": "2raDBk8uLiZvXrGQWXpcgpdqwUpjrtz5B9tw5bZZxxGNWdQJYAFdEw94mpikzutRtmzYH315tBdWu2jxFGbY29kF",
  "key8": "56vw8YwNLVnpUKgSYhjB3THThSEdfJm52B46X8DG42HuMM9GeGub3VY5idutZGJKpc65Gdrck9Uwv31TktWXWBf",
  "key9": "255TfJwqL8TTnvsJfodX7rxa8hyB8buvpxGzYBVdTaHamupNHQcejuGR5jhQ6TsJYpqDJvUKai4pmM4f2ig6VFfy",
  "key10": "4SpuPaWRJ2JfVrwUv2NdkFbrN419rYt9QFcocFErmHXVXPyPpZDeX8ADetK3RwhQmqUJFhQV9RzE8G7AAJSNXDZe",
  "key11": "2FG9Q4c715BNAxgLs1ZmARzegZMH69bXjoM3B3aZ1uMiM6V7QDJxCea9rkLMYB3tHmgxUyjAtTvvkvsjPbkQcaoq",
  "key12": "4QA1kBiDEALSiSj7XB194jCEcssWoGR6eJpMP2CkXsfc7JZWgCD6VcUDhuZ3Z7HGcUcwq5iFW5XguMs9mKKG1nnE",
  "key13": "5LJXC4LBLJ7cjHsJTWz2aUkUidpHUnvM6Z7wwsnzEeP9EgjiqhC6mzXF3EUdVoj9jx73xBgGqkKm1hTposu2okBH",
  "key14": "4tbPAWedyWypEgsuYfYWZFBpdVVTQW1LPUTjGu4NsgryaCzsXRhAk7pGAcvRMguVogRdFFW3QPtCHosd26GnQKRr",
  "key15": "4h4ByZhgQH4oWXBgfSmc8kuCgKeLE1hs1AyqPmi3hQkTVCHdjnDG7P6WWf75Up8WbcQs7qFGbCGNybYdigKHBXrV",
  "key16": "3tVXeoa7f8VrvyB9nWHQvJMXRZ8ewciePcF1pD69zynYgtLE4BvBwzJP8N7TBeratwuqxb5tnJP9noGodRCKbxcX",
  "key17": "2mLEpH3JFPUJ9DXuzN2HWxPovhaVLKB52epKPf5wSwEV3sHuf3TpWa3wjBX4LvSzTNMfag6kbZ7wD2TSafrFinrb",
  "key18": "3DUsSuK5JYQRfXNUz3qoeE3242djXWVi4JBURVNcXtAHtCBQd2j6y5LZKYtAL1r6ktZMwEsPuH7zvcacoSgo5sZu",
  "key19": "445wBqUnJKPpAb2nr42EWLxiJwdV3ePxwz2RoYkbKxaWHkRZfNEbp5QVSPmTXrVPVE6cUyUs26obWTgm2U8CYafS",
  "key20": "3RxjUnmMWd23qYjBRxZ9JBXXb8DvcbV2Hi8yvMR1kaALZnycbXrA85Fwmm4aA61Yt5UY3g8CzKRXEUeqenC81XRi",
  "key21": "3jXqUoPgsScrpZopGKVAkP8oT6e33KU4AuiwUFg6qgB3V8X5kiaDa13j9aJDtJ2dnPfDmwYrz6MQk61QdFaQ2Ytp",
  "key22": "YRokbuo3MfBehh631619JS2NTC78bF9bjqtQNxscvuBRzPipkVthwqAe1ygGSc8r8Kiqt6b1FjMgXYakXzHH51e",
  "key23": "2NhJPretRFyuEKYEreD86BkCBx5KSrwerZ8BfSqGe69kJKtD816qgwXpM3ujFCWQH5ckLM8brVPr3ghWbkWnqKta",
  "key24": "5hffTn7WzPV9gPBEtovC3JnwfZcH7oPjvMCAErAVC4R6ZWafuk9YKk2Dzo4ELtCC6EoTLGUMEW3pJUD37Skj2xsb",
  "key25": "3Rdk4tHpwc1YNNeRhK7VLzPbKKphpK8o98MwsfBSYrguVpdapE5TZG64UdeQv23AV5Tn94NCZnY7mNQ6jiwVkyem"
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
