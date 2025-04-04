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
    "4VZartFaf3ZM8wCQRk75qJ2LmMGkMEZbanJ9rxenVwjAACuF65j9g89vVwMtdRJaKHcAoMwwZ48dFjPweAGmmLG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tdtBfUzmndvk3rmVXHXcNQPMaagPaL1ziWftU1hdciiUH4mM4DaTyhY9Mco1czmT2vQts3JRrcGswDFAW37TCc",
  "key1": "3NL9ffnv9AcGtdYhabxkU2k46B8w6Bm9PAnoJVjDUV5CBDQ56MmiAi4wsVb8nqHNw6Ywr3aeB8QBn5UYfiGVX6V5",
  "key2": "3epLNTwrNkrA4Yy1Uajc6kkDwv7KZ7oYVELDWG9e4dHNrGupdAPwmjnrygXXYeWkns84oDAxC4D3ALrmsLXzhVDh",
  "key3": "22UgQUTiytcdsj7euGD3Y9F8aPE5iXoxMk9u81EQBXGrMpZKYkmWspm8VrUXexL639Ww6pfQygotxmrc8NcD3v1u",
  "key4": "2HiYtnB23S4EDvHPwosoYpnYfeUY5CsVyTjdK7j8CrzpDytgpKbbBUS3aeju5pzVGvzyxgXVeQZkfxvYi9J8yTCr",
  "key5": "3Auh9iU8kyPhcfWwczdFgRYnSsprK7skzp2QWHjAGwJH13TtU7gyLfQVj1ow57X8hxEHMsdL2DcsuY88VjhVNMPR",
  "key6": "2cEsqBVd3Z1Zta54Dt8Ktny5c9X59iimfMU1r1iesYWoEWGYKbhqhqVAeCQTxAihCK7CZMYRBmffCKYU7f5gAGXH",
  "key7": "2hqwhSZszYBYctyW9mYtYThj632pLUiRNB5bsicgxLYxNteR47a9qBQmTEXgLBgB9BANmzVdPVwjYqTSfe1Miub3",
  "key8": "4d85ocEFPfCYWTUWXhTXkEXVKTKwuTR9HXKzGzh9dBU14wAfKHwcDhE81kQgfNVJgA1s5cqSa8NZvA6KMfMCcQLj",
  "key9": "62Bw2NqQAgBNEMeB8Jse9Efsvtt8EnocWnqT2h89V62v8zx1nqLAm3Hm1okL1jswNRzqhxHc7AfGYEciDahvP3jX",
  "key10": "3NcnNWAQ8YDgJoYCEuKVuCtXVxDozg56BRznN7YboDG2XJViAE3YPvazhsQTHMEZvWssEyrM6q1N2mMFkMhirQU3",
  "key11": "5TmHFyrimhaovf961YxWjfrFLwfb9ufRToEvsbjA1pBzNAN6rVH6NvUNtteSwsV2aMGM8e35VWReSbKEZTC7g6oU",
  "key12": "3k8Md69z266RHkhKPpWiC8pdRJGuhQ8kB91wkMeizaiw47t6NytHC4f743pnBdTSM8bEeX5aoCQAjuLB6Nu9vrYp",
  "key13": "W4FvA5BcXof9rzZMDJutcxcMY3cYE23QFBg4MpNj73rAwhECCpL1spsrCxDWRVAkhmbChNCSTvNefx8LyVZCUx6",
  "key14": "4fiQanh7K52U6xNcoCtdKBXEigWb6kQMEgpH3iXmSh1ywDAxYTiw5jX26u68Z8PepB9n3h9bWER2Ct77XKSVBnuu",
  "key15": "hzuYsPMdpM55981MTxjmSh9HU494aqaauEskyWUD5t69nztsKsPkrb7r3UeJZepkYCMAKve6cU3uNVAWqL5CAt8",
  "key16": "5t9H9Z9HNuyCKwXiox2TYxHU2KNAanjjerZKoWSGnMgAuhc8PabxamXfz851ND7ALRfB4YDP2c1fCwUoFruofqCn",
  "key17": "3prm7wMeaxtVTM3DnobsHUwFxnj2i6f4QDy8iafXGMDgRZtLSo25KSR7coakfmvJ7HbUU2EXQYCaNoPJVspEvsK9",
  "key18": "41Tv1313YwLgViWWZSELuejubBwWk8iwo1oHmKMPkvbJi7PGzuLsGvFGKcpm8cgzoB79vsKo3h8TgAeAjHRKLQHa",
  "key19": "4UKvcAYcpng8vsaRfuT3ZaSjvFgjETPDkQAk6YMw3YQjpwvEhs4FJGJsqEyYSLre8ULUfojpo8u5ZSHhM7ijKo23",
  "key20": "35UYYtTZB5vxCyg3cnvWYAgk8rWqddVdPMnF8sYpYYMSZzJR8TeB7N3ordLkMjVtPrFKiWx9bARGFcdRbR2Bzmba",
  "key21": "5fQTeE8JTDjPuQ8tgGJY1H7Ui5BJ8NDhZmHAmhjkAdHWiLiSSuHTAMfXisDBuX6mfAwA1yUCXxjBSRxpTsU2rsn7",
  "key22": "yxgQwj4Q4x7rZdK3sEBTj9SoC7jANEvhCHDBu8JMKmwAfW3hJr3UAP32m8pS8GGaYMKqDVEs2sDpengVrBoo8rT",
  "key23": "iNjNBdT8ZpuvnarttDvhjMuqCoq2iMXL5u6N2o6aFSG9fRaCfVrm6RRdKb3uKKqoqsaDUeBeYJCxSkq1jmutsEy",
  "key24": "ezXjXdXYuFdC6BEGjaTup12w9AKeuU8VKztwxT9TSY1PBdzkmFHSoF1xMrjyUot89Mecdtvo8a2eR2ickTYjZ7S",
  "key25": "4XwDGrrJZoDeMSmd29rkiPVRBgrEo3YEnB2sAGtfNBnLmowxSzxSddwzhJDiW4K97S3mkkuh25SS2x9LzpHMbFKL",
  "key26": "2DL1ysnT2Njuc8Vw1A9YwYSUVdg69U3DRdWcYSrVtM9V1GXnJb75owkh6YuLEqHEC5h2jhsQUnzXPCaXSA4q9eND",
  "key27": "4UrQQ3V35iwNH6tpBYtGGd3WsJCN7FYWByZnv8nNvnFmSWAG4tFToM6sAbDni6x4QHucaA6MmB2BsLuLWjBhzGtq",
  "key28": "5BrfonSX7HZYLDfh2zEBCGZ6VNvTMiYoqLcjwQgwXcb4aEajcaVUqgSudP17XnDPNGCkBjma9n4Fn26bk8bwRmPy",
  "key29": "5misd9RxzrV6Bbxnuc3857qK17busNDr8aGEwERbz4YzWH4JbpqZepTJ5zZK4xQw99CVx47C9LwkzqRks55hEnvi",
  "key30": "4rdu6YU6y8BDpuuGMaMcCXERe28Wf9SyHwXePRfPysVGn66ehE1oZ8GqM4Wnt69VugHvvWY6KBaGyP8EMDrQYWyx",
  "key31": "25jk7Er7mwDMNTcAAi6EVK2RMH12Z9xzXPRWsYzGDtnoYHVWm98LoHPdPMZ1J1db1ZDffSZamLmrfrfkzJZK8MgQ"
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
