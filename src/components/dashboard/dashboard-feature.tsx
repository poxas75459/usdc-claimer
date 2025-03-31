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
    "abkypQ6SntQ8xqZg4xGd5jtdLaD2jSbZ1Pst7BUm1PZgvAUHBkhzFVxiwgRtJKyb5eum5CwZ3xA3CwgB6thvoN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67jrgKD5quGq9zykASEVdM9u9hrRjtAwmqsR76GNjV8qZswMhppp61T95dTy459VAffzt7vf3n7FhGnDJ56ppsRS",
  "key1": "61gQr7b79HtvPjfzWR7z3yNmPfdbAtFGJxypbU7WXeCW6ReyTddTmXUjJ7CCuBcMJGzfMJLmkd8iKvSyyz3E85FR",
  "key2": "SU5N3GZTHKKBewFyT888piUZpyMwdcHZfvDLwdy1R6H8K3HwWSXK5AxQwqLb39y83tqcDRBc5dU37iwA9hgoxXv",
  "key3": "3BrM9u67G2EAQhFDEadG4povU7iSKhQwVsz1LbQa9TvSM91gchWX4ciiJuP8XL3d1LzYstRFQSy7NBRABmqPsPib",
  "key4": "3qaRf9BMGWEYBhk766Z8mPPnEepTUmpTXfmqREe2mFZZSFQ6itoTZfEkNp6ahoqf5pFcAhCZ9WhygW8KSRkgxXEn",
  "key5": "4WNQ35kB9pjmrQXwVagK3BE9ppgz46DgaBibfMQXtziRETNfgu9PBjzUmkQhZvgV5LRnBS5j9EGpnUtkSqjBMbh9",
  "key6": "gD1mAhemFZ4tkCfXjWQQzFxo52iY7YVfDUzD49nw39ba799XvTKi2BADmurRHBvnXijsfj2zHZDGHczgHLi3FA8",
  "key7": "5svTEauWrWivHyuGfUifjSsgwSn1SDEVGys3M7n8GnHxsSHRqbZ4zzqauo89Dgqrc351PxWk7DXa5NA2o3F4w4DE",
  "key8": "dVRA4PvZ4HkQjg3FYEPkz8sVxoA1nXRjzmrmDJCeJDrtHhvXAZRkno1nxpQ3FYWQYe5SPZozZ3To76MsxSoWjLR",
  "key9": "9cKitPR752cw23Z1K3HteMEq5fSkgao8AMLyBWrMymJhtTLP39yqcmDAhR1w23vQiHv59wvBDPJEmF3iNuPTAyX",
  "key10": "5t9u9S1JSQ6jLjb5i14Vp6kr7HCf6HNkW4UWtkcr2MXK3NRT3ymtKctaPmvm9s1brAe535j8RAFDefGaV6j5j3HL",
  "key11": "2Ms6HLP467HJzXHhfBTwcbTKu9fGp7RLcHXt8SAGUPXoRNmWCFVZXrtSTeEgBQ59uuBtyhQ6X9eSCfGqjcg9xpXL",
  "key12": "4SXx36M5hZbhrGxioedFEJkQ3CjPcemL5jX8X983WJcvkzdQ5cSiWfScousEvvmTnAoCHf8gQ3Lh1K8nSUGhtkau",
  "key13": "4LfbwP4pRwYoffeatua6Fo6hTQefWt9pKtzd9hR9tg35q9uGQNjgoxxxUkWwWkJP3k4XHtsRNyQmAVY2t5BREHxT",
  "key14": "4onB5MguaRFcjg2fsx1eTUMUedQywJVKm19uwSWQtysWvtonNav2crP4F3Fh7DFGy8hdFvbVvnGzgwLTvz6Lbs1y",
  "key15": "49Ye5BLbGkhoxKn22Qwm8JVtdPAvboxxeSqgauH3QsqVX76HRoeYzfm5eYpSZBKf1VanJCpL5hsb4BMTGxdfi3Af",
  "key16": "4rcyBHJ5aC4b1CuvzDwQK8bBtgdhv6RbHMHHchpU7nXJXGxY4KpuUEuL7o8N4nYjM8UynvfH6JHT1sMextm2ueEM",
  "key17": "42hjbDmAPxxs1bdY8FAV7aru9HDHxTLmGtNPE4xVfrAGJiGGcHc28vd4A9ZvEKBokMyc6LCfx8H2jq9jG4hbpRMw",
  "key18": "AikPKvSxA5ZgdkpXY21wjkAMjZ7fYYX4ZK2tcrii5M2CGCWwx6HqQyX3RKHTWuhZxbDwNW9PbVTZfyG3uCutrh4",
  "key19": "5yYGwzomEFWbiGnQP3pwYkEMjNFtFaeVMMyVqTUfE334uuEmCLqZSdEh6E28YCxtgvJFPrYZm5uwTdnS11KoFYhy",
  "key20": "4CNj96Hb7HDtBis2i3SS2bovT2eKGEbAavqcSASdxNg8pZhXD1rPTeqTtUyPpBAXxKaCg4a2oBFDXfunfaaEm8w",
  "key21": "5gLqdyzcC2XqcJ89ujF5nibDrykxh4MYpkhrBH5K354KH7Khhqzt8GGjH4ycMV8G6zqn3ggkgZd8aAV987a67cQZ",
  "key22": "5CfuhpE7WaDS27FZjaJPHeP9XybyDUxKPswiVMkMc9NngBBaAtsTuh2tBSUCJmqbtn6545psKWdMF5NQ7NoRoeQr",
  "key23": "2PhXdupQksaPqAwaUjMetWtmrbxddC4QxdhTwe3SkyJBAbsWhCJdr2TnLRQx7VuTmmKnYKNcg7CfG8HubkuCWSxJ",
  "key24": "2mxDgUNrhNfYjHmAMPwpUrtkU2Wxdpbt8hWyUrP8yPuveR9J8Z12a2JF5GN3kmT913Lkc4aocpugHyjA9gTKnrus",
  "key25": "5gfRRoHdn6gAon5ppp4B7dGzPiQb4hqCzqWU2d2FcoHTJxe6sjYxieQRNHN6oR86TB7XryuyVK5RJVadupgKdMxd",
  "key26": "5vLUcM9JTjRpPrL4EcHBdKwQsutboojKd6Ch49mmMvCyYDmt6Q7HfnaCj6Bv4xkyEhYjTVctUcCjrYdz3JTh9JDV",
  "key27": "fY8hkNFccErPD37EFvVyjKu3DPLQ4wrmfmT5fA34eAW5dtQzgZkj6zvp1Ajx8v84RmH7eRKWSWTYnd6p4sAzays",
  "key28": "2JEzoXCJiQhyexGzPY9C2kT9yZxunZWRJW4i9NbGuW4RgSmKYpec6Eek7AWN4FBX82YbzkhMFRninTugjW5AEZDD",
  "key29": "QEmHBH5aMSoJcwpB1KsbFtDFtWTnvVs6uHiVSqZW5zad1NzAgHxWh5yoLgPER2gzD1YSLW45bRJGXj4Q2DxZYah"
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
