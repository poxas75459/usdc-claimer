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
    "5oXh9nMMUzje3fWRxzKGGrZwTFYBjEUDxgq8tw9fTsR2wFJXb55gsRthCXNF34NNx6jNEy45Ux7w2sqtgizg1haY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F1sRD4QLhkTZ6vqdEqm8EecAZsJzNG85tuiymi4v2oVQKuEcTEBiw6RKbnFVgQxfLjWTrkJBjxH1WyjD6fCp1ap",
  "key1": "xxamZSdi5dcvfrffYZJTcBauicZQNnJncgnCrUsx8QEzF3cyuR4a3vaQAYLuKvNG7bzDEBTxFWK6X56kTwfbDmF",
  "key2": "4VCDW6oPKACADb9soGBmdjirQRZznPUiPdR6PAQy5BqVX9yiEa38aChvRKn1yRgwDiUr5j5gyosdnNfmLhdBHjDc",
  "key3": "5dc54e2KPEZ9kTJ8fL1xvPN9X9Zr46fLfKpV1WX7FEvjW5fJY9z8GdSiQunVfvJGJPJsabq2i5t9nGUVSewGkgK1",
  "key4": "2Xmpi8T3TdCwcMFRLAHnFoHtkv7vopb889Xs38LvpoEps4KRYQvdhWamVTvA7iTwydQhf24DWXSZ2L4umUbgXLPy",
  "key5": "4uECsxJeDXYAQYFFaDoKhYeRsnEfmzWNwyBt3xMSdtqfWvFAn7p4ERHAPY231pr8KdynK75xogx7hjkZNARM3nRe",
  "key6": "45VKsgsDkhT2YFVAmTvS8VBAyBLkSGptme1rubStzenAGZxdQg5ptXgzqA88gVXB7GS3FUDKCoZqYiVGqJcRF68r",
  "key7": "4CPCwsrQZfoddj16VtHPZVFzf2YbjuRkp3EkhL7uUz99scFgXkaH7V51Ta1G9rvNXeWhPXgQY29nLfNCwvRU4TjT",
  "key8": "4uP9ZuJAi7xFQTaofNZRGKeCGAsyhrEC2wKSQQ7FGTcmh5ANMdmLSNouyzbwBZXz5W17fgbi83gQsDeAfpBB69Er",
  "key9": "3FDGjXRx2owXQUviAEMszjaqJFMu7BpfhHgzw77Qi1b5YYFL1zWwA9mEMYrJdZn65R4XiPfPKSvU2MjajracMqxB",
  "key10": "2RNhxUB63nXR4czTMR9EdDg2av9xQqTXAFhNigMQA2Bq36paC4r6kD4At4DMBeaBX6UuixcHB4G7SN3LDudbQiMJ",
  "key11": "4j3rvAU8V8kJ4sGqMwD55he3PBHVq7hKJbZi4sFYhdtkXCPBkPbXsr2NRpPW5K7hSWw1zt3gaCrehLwtcwTbAL3D",
  "key12": "8gcyVutTr5FDuHTV9WoeFiwSsnQEmZGhaJVSnMArWw1X9PZcuSrnLt2aCZ91rU51XXnwbyQJZrLXkEDYaQjr2Hd",
  "key13": "koWRXVuvMFahxCqHBxJmW9MnuMy4G6EKsKebVgB4TmHTTAkUKv1eokQfRX3aLPip2N5oQFGUdPX1D4HW2X2CyLp",
  "key14": "5zffZUsUZjRuXLyH9LV8WAh2JqoxyttfSCWoSTevxc1ZE3gAaeeokn5T4a9T53exFj5WMqrQHXUrLE7Ftt3RHFtw",
  "key15": "am1JwFiigj1RZgSJYpbAFgBXFKkFZYMiw1VZEaQbAyGqdxpFcACoCELh1jBdQeuECjaktGNv7LSP1qaSr23eDvy",
  "key16": "4rdjarMtvyyUc7m31za5EuWhJ6Y2ojDGhsLb57zjAUuEaUdhPMiQfpetpfjXsex6UUEdxic9LMV3Qs7UzsvfM5tR",
  "key17": "W43SfQ6oPD2o9sopcBxLyKkpuLaPw3HGxab6oXrUeW96e7CfJKHeHDNvDZVaxu85tx16GCRXw6ddC8Gm62evtzy",
  "key18": "4GE7syygh8B3s8MQGnxTa9t3x8RWurciN266FDGahjrEKuZrbbDezHzbSxXozwBUgKABVpPuwFc574GxctY6h3ef",
  "key19": "369rMH994WRCiyuCwUgJfCin43brp5RR3ZAq1JJFpwrwyNZH21NZRF2zkGxfKYvyFdf3hbb7oESP7y2kPRvnxU3c",
  "key20": "26H9aaW8xQxGKVkwodFQ6YQyJftEiahjtPbrK366hQPaDGMDDGBY4ZE3KU1hxZjT9z1VtFAv4XyKNjZEMPKWkdh8",
  "key21": "3UUBTmgenneoC5iPZmawzSQYb4c2hReZDdhYfP2h9EeDdkfk1cPYtCZTFLGwyceEUjorSRpqmdFw47hRK1xWQ23X",
  "key22": "5ArYSBjY9qhL5zom7bwqy1M1AxtfHuZPxvfWpbkYbbfHLvFTCuY1CYv9JF2dbfic2ubbPCLTj9Qm8vvUM6WLyqGq",
  "key23": "3BMZ7jpSYMyrAUiAW17k2cLnyFmpQwzsB1UUvoc143Me3jdWXoUcfTXZKhBbiJWyqDsTPSUtF1RXa5CDN7aYxj5C",
  "key24": "4pXb4p1sH82QG9ziJEsJHHLwGczfbYPsnYMoqGqzk6HHU91sGxYiVyQDBebHdgTLnRM24CsTRf3uhKxVvUtZVht1",
  "key25": "iNrLa9vdJByRyZRthvGfSpaBREupMMojaCRCoK7L6YdWYWa9Vhh14j1qDSdtotHv2CaVd83afrwxMFskhrhZRoC",
  "key26": "ehnfKBYxh3Ff6WRNngyp6FZts4ytK9ojgGb7ina9BdJ9BxYSrQk29uH1bWS64V82Wy5vP2Ljv2FBYpUzB7ue8zX",
  "key27": "xDJemWS5rpburzDy6rDUKDWj4mU66wARYSubnPbiupu5ht8daf7o2FgBuDQFPrUE9DW1XqNR9YE6pZzvXKYHh5L",
  "key28": "43htHFftRUPTJnL4x5Qyfcw5m9sJ9FjJbVQ3Ef9DnRab4BfLbMJkBauWYx6CBewQowrX24duqpy6Dp34iXrDFs5U",
  "key29": "49SLKiJwZegwkquTgAG9w2LTrkzZFoCM5kyW8ie9BFZ1NkX2Q7vVQPe7BFSEYJDvfwUbPNgFpSCtXvDEAMVG5iBp",
  "key30": "5pbwcsWprw9owYaKnPMnNx1dtiq86iLWUNeEy8Tv91JSZrLGAALnRewtxtXWP5ehTauVNtzr5CHeTqYNy1KZqKRY"
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
