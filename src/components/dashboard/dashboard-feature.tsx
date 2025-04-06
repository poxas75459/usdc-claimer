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
    "nTAPBfH1DDybiFkbG1QuEkCSZTnTEokvMMTSMpLDkaQ4mmzWdbEhuqHAvWMHGFG758h3DoSLsn4pejwXMXEiAVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4igPWA9SUxsRpgAndLTuywmAmjU6csgm1SbBQF8xjr5rfqXjhMQrFnoyuN6St21W66gewHmbzUhKCotJndRsuh1q",
  "key1": "4sFQMpM35jvL8mKzme2E5jQpMQogVwRYuZNpoYJ7ruhUVQjkqHet1sx3akLJH76VTcMyDPkWE1dLigqdJv2PoF1A",
  "key2": "2tfuZo7MLY4PWhTaHrAhqU6Lxw1eHjoFkkDYwrDPpauf9xirtBtiwSqwasFQbC87HYneroHcwHTzPA2W5dEqgNHP",
  "key3": "v6zvtqrARAaKtXaAu85kPMTDR4wGwGFGKYreL3fi9tqKGuGYnRV9Um4V7qNFi1SoCpdMgKFJJXqVMuQMxrX9mvk",
  "key4": "5hh29MQ5cW4pFDGcHCj5N4HHsm4qxvWtw5drBSCfgvCaYPBXLdGWgYxGUoXoCQCtG6nZquVCeA6jnuydCSQQsFrQ",
  "key5": "ZNozXdKLqYKo2jenKUNZQx11MVddd8umKenwhmAnH2Sxdbg5iGX27QANL3nbiBNYsRs3BqzidPVuCZVYXf6kGxy",
  "key6": "3qK3kDDK8RyTNRJqQhnesCyz5eJe33TZyRwVhuudWEwNPSEb8cJDr9cwjMcS8GSAeAH6NjsbY7FDDofAda4FpgzC",
  "key7": "4hCFsmD1uvv9h5ASxJ8taJ2GSYmUgyFShY28kCW2jyBM1kKBqtPs42apcLEopaqyW5L5sYfHYXC9PJFfugiA4MPo",
  "key8": "3ZDACt2dD5K6dfRZf9sy2kBEYPpwuJgYuzqZegaQoPYQ3RPxBBvdo8hLyAptMVXL9L22vyDU7hWKSuTLk61hCSSm",
  "key9": "5adyeawNK7GfJqLYPQnLzWJpWTi658Mrng1KdxeqgAn5Gz3wjmTTPfj6bWK1ByBW63A8Qr5ChvjCZaDUV4Y5kRCS",
  "key10": "53fpEHQhU2srtEsnjHJc1U9nJiYT6Wp4ZTRZocxYG5MNwKuYJ1VJC2jieATjRtKQKPEXWDKvUbvfrKKrCpbdXttM",
  "key11": "2D8ai8ZuLkCXoDTJQg9JXpD7eP1v3eiKjbJJKFtGXVwiXNdYitWyJcn3BnTx8iqqdsoZz9kKsHxidWoyHu82neAg",
  "key12": "FPiQwcgQpKVi4eHGYZTRUHkjsXNDbPZtaaeKCELUBRW5rgd9sbQEkpE2zsBTtxQ6R8oDkkvjL3uTDPMz58ZBukm",
  "key13": "2tqhc6gnCtewb3ju8XcVCn1QfZRiDcQQTLX7SQ5tbR77XpSLHtmTMaVN9tyPEQcZFbZWUDQ71eVC2YGmjDuCw94L",
  "key14": "3x4UdCnG2MChLP7iH6qc4gkXZYDRh2AQDcPaVkQrrtsRLhb17hhNcsf1bZqWTttULArK52bu1wHhsYxYQKGiZnkw",
  "key15": "3mJh5Kf7zTAtWi4pgXKPWJkNor3RpY8trhANX6Y6tNxu659eCX846jHaHjoW9GfxfiKM4S3QPpoFnr2yemuXQVyp",
  "key16": "5vmSqfNGAd56Z92eba1bdLrLtdhw5VDopQVJy8gazUjURSJNB3o6TbPE5Eg2b6Z6nrAbmxqcQfqUu1nmVdza8Ec3",
  "key17": "36MnDwvzxqqANyApbHtyZGCQRXqekyMLpot5f3ajjtPKjraS5qdr9q3uyHqstvdToLLmWWTaEGVyQae9bK7VuDSg",
  "key18": "5QvikAxwt9FN97rXB24DS5FQvhXdsWhQxnSrswBY3mQQispjpQsPQtSm6a4LvxGdQPpRgPo6MFA4HRdYczRzZcQY",
  "key19": "J6xetcsX62BrEWKME7qz7XUu4LQAEsYvZsMJFgSiJzLcEk883RvnAL4cBjCkzV2yp3Zs1BgBMm114AUCbjK3uQ4",
  "key20": "2Nqurn7AN8Czm32tvAiz8pJWyzPAjnSBNRzntizXSLCftkJ4H8rxqG3trXs2ryaKYsShh684PsoXKR28Lp6bQFMR",
  "key21": "3VGWVPrCGkuzMk5rKiV5S8ormKxrycSZzWqXoAQUHCuCjn5SQ8Co9VZb9ajBVE51bJWE5rMW2oNt1P6VFkPyqQwo",
  "key22": "TS98PjYUxH7oFzVA9VktPwrs6Jn8fbVdBXVeMi2ioMGgs2J5tU2LXBJXwrgjfnjYZcsvRQu5QsdEQnGszvgJvNA",
  "key23": "37JD8Y7FHGWW2RqDwhe1iQJwWvjiMVwnJhdWvpn2S3dap97fjJeEicDDXxLGZ3uGfcoQGDMHnU9Mgrwm4SqG1jQa",
  "key24": "59JHtyt61MGMRJKpWh7W6DqueMbbbQSrtdTf4kxg3gCVpcZDWBLFVEWZCpDec9bykYYPE7yAS3MSWEEPdvSpZMKY",
  "key25": "26RmJA1XE8utgQLih1P561VFzm9oMDBZt9DdA2rKCoEjKzF3RE9QTEKtFTc43Bpp29BQaTQkbT7S4ARfc8GLz5su",
  "key26": "2k7Mzq7kBibTJQeFR52vMGKZfSJxCFQyT1dSHnSk2NpWaagCWA7XbtQdAVYMkAuKDmh4EJPEP2hkAPH5UMpcymmg",
  "key27": "3LPD9os1h6zexsBuZN887RvmN9wJKvFhAtkmz9H6YaBSpDstVRdgwF9SuQyHaLj81SecbQr9mTXuR5nYqx33hkZZ",
  "key28": "4d4Po6YMRz6e7b8vR5mC6GdUyPzbURyyvAPhc8totVwk62UJzm7hD6xDVQS5UQ6uVVNXh485ZmfgXYPeook9CjKP",
  "key29": "34GPxsJjBowmfJjyiMWiKrxManZ2WF9DrX3gQs6PehcdNERqhoG5FM7Zbq3jP5MyBDy5ZcsHfxAbs79NxikfMskJ",
  "key30": "5egDEGoejijmNPKy2rjmiFUXLV4esk3jjE91qC6HfuPPyhopv4SJNAhTyC45129DJ5xhKGBbgNBM3xqM5dk8Bw2U",
  "key31": "5g9WK89izs6b4yKavVYVLCr6WKTtCrYDP61BetJXwoktMo1tMpFCE2krbtbvYJLACPnEmi5mqfWCxvWcBnHdFR2w",
  "key32": "34GPpeWP77hYhL73vRtKBydsoUpkmnRFP3dAZUnhtZdYUM2mHBTPpmSw8xEXTrSTMo9t6miv9Rs6RYJYBq4KiTPA",
  "key33": "5fuRz9ZmSPhMarfHLkLrfLKW93EbEjMVwFUs5LMFsQ5ojAKGhbdmwEwHKAYaexKWSu5uUA7m8dw9Rt33QV4UmMry",
  "key34": "5uD4CMoN56DDVzhfPusH7qKBEPo4XwNoVUCrrkYYgaTpdoS4dTzHoVDp5NDGmFZmwcBiWkRdkRSmCtdyFiL6gHzC",
  "key35": "5dhnqv1cYx7zJf1a1ps3jiJhhX2k11iGRxPnXrV3giRmbmrDWQHRGZvFgMhVEEwgb8EYS3angAKehZYXUez2iCve",
  "key36": "39W48jinyuLhx7ap151SbqDrV7mDwSrASFJFVNiEmx3VEapES8YNXcVTcYjFzuGdXkMhMePpYuM2c14nsKw9XzV2",
  "key37": "cP3Po9UAE5qeX9ijqiYFrwPxRbgA6TUxrdHVvbLDGgQJqNDZW55YyCfvRCjMMvCV95s28H8SEuCF9ddEYwENJSP",
  "key38": "4MemB7XeiG3NRJaCtrjSQsb6gfX23eE6N8HG34mwdf4YH8GnhfePYu5nywWXJn22ZjxG4v9aGCQDCK7rqx9ACVGg",
  "key39": "63AqtmFKggkUa5G7NjfUMGeLKqpicWfmRsYyL1RoJ77zW9JG2x5VjKdxNZ5K6q7N6EfoHvuZ9ngkTeM1niFtFUwx",
  "key40": "3CCE5fbKbik75vu3k5P2MXJdr9hToPxHL2tv1DHZrUBThQBe8SFzYJKTn8J861HQJLLghCspk1nJqFcfc5sJKQfE"
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
