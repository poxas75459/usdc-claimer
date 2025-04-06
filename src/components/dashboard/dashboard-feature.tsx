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
    "cfQiFB9KheiFaQ8NtjUY4tW7fKyw2sdzsHc8PkFhiURkYC8wnXSaveDLCdo8CdVSUbmVcdLqH4HaEj6Efapad5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Dng8Y2KgQLrFzHpCgkEawWZugPgXGM75d6msZni8JTXQqoUN3iGJVCf5LHhZoKzqgNGg2cvq4wiRZn6zqYgxJZo",
  "key1": "2BnS99FnzAZXP2Gh2kuLaMuBHBxrfWEWtMJdPNKYJPgREkmejcosnyJfXb4XTepJat8RDgH9H8way7fS63VSpmtB",
  "key2": "2aHfdtgLtB4vFRnNd6jxr2sqNQhrRN5oVYKbaJu9zdZ51NokbG1eJhVUcyLcj5ohLZNvGGYJxFX434sosDcnfDsL",
  "key3": "4jzEh4nfGf8LZoyc9nwtewkekPiXe1KfnunSPocu9ZWbwL4rEy3LJ3PaBpdQY6w5RVDZiUh2Wg6Fgvwpth6WGPzp",
  "key4": "2kLr4tQRbcbSRnvouMW5qS8Nr8PVe3BURyWp5wSF4shW2n8P1SH2FHYL32A8GrSfGhAQkpLY36CVEbToNCwNVjPN",
  "key5": "6Fj24PhB1NMcVohfqstFXSRddXMempZyn9WzNHiy6U1GfjLvxxjk4gMobaAYyXe4kiMxsKZ4ZwT7hcpqB6cuXQN",
  "key6": "2GMNj8GGGqGSYDRiWDcEba33yWo2GpnrbfYPHXVAEPRULArvRW3tomrgpec5Fx8cLmRW9zNx1ysnQGaGfHvNRc8a",
  "key7": "5FtQg4tMGtuLZ7fUno5Wjn7fQtPqoDFpRexd4tvthXAACqP2DA3mx1PzVWJ14Zyj4bAELteN8Up7EfqpRdBtwhDZ",
  "key8": "4FNXAoHCsoMz7CEeCUEJmXryCg4F9n8o73deknhrqJAN69P67cQ3RDYBzcXvz33ofSCYhLeftGJrA1SykracSrU8",
  "key9": "3Y4kjRRm4przCB81aQxWfsmgkdQaTJbUCVbKWkeUCtV7S1oQKc6cCytbmxxZfCm55SNDad2TEzfqxHhWysLiJsbz",
  "key10": "H6vpxC9NEr3sjhuNJbiFY3VexVAEAYDyeekvFeLm9eEY7gG1VJUBg7e5L413YFUaNucrVqwUHqSnRT8AsWg8WpJ",
  "key11": "4hLi3o8jnfFNgfwfwEnggCkzjTyMedS87DrfpbVtfg1n5eem3tMDh8cTw7bxocT6PwwDS4EhfUzrX6G6wkov9cFc",
  "key12": "4ojd1xm293XQGCh6i2p5jNUEQns89gQShhRufoHwF2JZw5zEgZ9cSUwu4XfGNwNMf48TM6SVmYQ7j1rjxt9cbsPC",
  "key13": "2FGkgFTxTxy6TSSBtNVUptTjbw4gevc7K2ZfwSEPBiuz8UM4sRNXcGhAcqZHtVNtF5yVxhiA3oW3Qvhq6HJn4MFf",
  "key14": "4gxq2yHHCc8bS2ysgecE45NEf19NhK1J69YZgmQi8TTJBS26sech2dbq6ihdvDqNmE1D8yLvH8PUSEhSnhuBjpuo",
  "key15": "qqbDeBNisyoF9qeFSJDVo3zRzNbj6H7XijSFhsg3hKvTQ9zovhJmee7M59iHxayeiVz2QKb6rUmyn7Tm8HGHSbq",
  "key16": "47kZurXdfwVeuAnXFt24kmrDEsipobouzJp69Q4pc1V5G3JtpBxH9A5nk1PhLT9NGP19GX94f5w2oZthErCU4XV1",
  "key17": "2DASeCnUUm4eUPTuxf99S4LYWSxjAJCiNty1ie9g4BG2jQudRd2T9ocdhgcQEZSqe8iCSU9GKBCLqB5SJBHDeKYC",
  "key18": "61axqjYzvrvPf43bPNtrv8nN3ec2SuGUr5d14WgqngmFeaKmMyAXv1THGTZ65dNFDLSfx3MqVqCav7M8RZA2vZpK",
  "key19": "4L6GaAKxu6VUQa44hubnEU86btGei2QiRfwupjpVrbPVyTEejyBQdnJMGtYszHmRYWGLbqbgqLxRHEihvB53b3AU",
  "key20": "LaggkHGJdCVDAf4tFzz4k4XxL1yHx4wwG8amnoHdsisDQ28abALWgGXaLgsCbZwfEQ2PCTcBRbxKcbmpNipewb2",
  "key21": "59JDs2sh4T7c5PmJTZ6L2YibfGMmCwi94R2ArqkdoPJfsm64Ry3HFPJtUNw9rRWPdyvYyDdTcCAqVwTYTeN2cssA",
  "key22": "5qecT1gLkuPRXQZpS8PjkMu1hdjF2MXkFbZknoPiQ2G284QEpqU5HGCgUTcDiDaVwt44iRyJF6GEMcEpkc8kv7gQ",
  "key23": "4WY2z3MBKWsKaPT2hx4WoSNE1Wkmbi6FRWjwfgCSeRhTEmDuhooqH1E9TaKvx98LkB7Qm1AG2fvgLyZBP3sdJa5f",
  "key24": "JDQbaZnpfDrL3xEJqLv3JrZzMS34bbeG725Hjywj8kKRCu8oUywSnfz35S2hSEnMcKycSGqqwfBonWwSmNPeEYg",
  "key25": "2Hr2UuVvhU25BRsoy21QCExdJAjjqPdFUZ1vgTmu4n7uMGioinewJ7xUWWKLuwW23BUWEKb7csSdBYoG6mwfvyLc",
  "key26": "3AhxcqRDQcsXDqa1G3htdmSd15tXUieeuRdRpsX441bEnfrih8Jm56dJQ1gE9fhrgtJCYgNFC9H7dzGVAfAP7s3z",
  "key27": "2YcHDP2uSfw3BT9A5rV9QYUKKFCNc1x6N7JRP2VdHvsjNp6G3P9HRhfptNv7SGs68hq86t4y8FUrrNtdHufBR2Ny",
  "key28": "5fmKQt9Sr2p4xqpmoVvfMuubyivwjN2CbNzc6KFP3ShZbF2nct5doaJVpRvwr5WiJBRqXEFzwdLhiGS38rGNbYh5",
  "key29": "5etsyBQ5zuzfkBRSwwe4kvnzTEgDQCCJb6JUerFRKQrCfMpaCH4J3NdpLVmZAY6XM9Nq3M4VF8vGpGBADfrDYDQW",
  "key30": "449vj85TBy2huZ5zhJJq39FcJZfBWpPhYvGj233ksWSTi7Xz1mFhxemSGJ85oW59D9qChkdKnVDhqjMZ2JDRmwyX",
  "key31": "VqToeqpNXdrvsA1zHXBACc9ME8cUjFFhUAECC1UhMzxP5qTYDrHp6M65s8J1nttwjVPujaDdNRY2DxoBpzPeCmf",
  "key32": "4HgcfvXFkd88u9Vpd1xtKo8BhhsbfyUmd5WB9snbyc8pD8Bi2XF2GHzBBzKwZfqJX1JHHpDuY9P2qpErPuSv4xG9",
  "key33": "21fzCbfsnXQuAsvzfZDUQZLZ1nUJ9mdcyBrcZQc3SLPcwkHJp3Yqfg9ogzy4QiSzzSShPbYsUfKAYADcd6xoYo3d",
  "key34": "3LFhTmJhQpcZKjDjcBuYpzcD5AnJwQ2ryB2WFPD4avPp952brqynuYvLsmva41CC4omgsNt9Kmnf5sXEASx6KTAJ",
  "key35": "3ryZ9y3VpL59BN1DDh8Zun4v4P38t5ZWUG7EGPUHbUauwGKnoDwA5GptWWAoU2HjoyxPjntGbcRhM7PrZrw3iNgF",
  "key36": "dsehQSA3KiToXmKB1E2wVhMxiJMBHq79xY8HvPNirzAZ2uYk9Vpeenq46VAAdJyi2NEMLL3DAaZUurEeHWvxywu",
  "key37": "4zrT5bkv3yZ38wS3bHBki9QLPDr6UL2ARwxjUpBTJPxSx9FAUSr9FayD9pQHC5m2VDxSNEb86T2juPE71LvaZhdD",
  "key38": "4Lt85XgBVgGZBdusiFxbuuxv2UzS8uXUZ8GiMYCp4BcZYH6U7QPBGcoeGhNDxMJjf79k5G7ZoGjR4Y9bGityR4re",
  "key39": "iRMdovqPJNkvR6eCMR3jhVrEE9CmYA2w8pHXeuuGzLArkUvTUuG2ivLWZmTkpxcmZsnwAZsHFZDGxG8hUhEWR25",
  "key40": "2eCNR2k7JrFJmm97mkaEaSnvK89weeztsnLuzM1F8XT1iBPzMZVcZBWwc8JnKE57r8Bxz6mitsPa4JfLW6JxA8Fa",
  "key41": "3pPf7c75P5KaTNngJhRkjjjXUxvmyGRJtjtPdndUM8nVBUoqLxY4LJsCMTt46GEzTLdXZUrksamGn6PvA6xSBeRN"
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
