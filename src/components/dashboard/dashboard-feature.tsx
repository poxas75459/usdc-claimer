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
    "YXn4MjmMF4CCSJcUXiUVfERHi6ZSXNGoq63w8a22nbmmGpoVVvacTyMtbUtkgBq84d93ykWLDakTfgmMPnZbgqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2941dnVZcWeMxUDjkJ6CCw7aSbkdK4a7HZ24ZuvHxZC6QF4dJj2bQRToURFeQ2akCv8iZy8DkNk8Fhv6qiYGTYaj",
  "key1": "2EiecKD3QFDWFBYU86R1SKREwsn84QkCwiWbs3CvRQ2MWpCJTm1QqGGPkzwPr5xr4AFexFvAjwgkyyAwNnrkq6S8",
  "key2": "3V8nJjUGNJGEWarrMjfM5MwXmoPrRACCEaWNAmUVXvcMC9XhoRJ3Yr5PJsgWUC6auX1m8N919SwHqGGbw7HFEmxF",
  "key3": "3Jb7XvfyHrtTyB7zkuUWJEpmUHXCnz5Y4uYHXjMhFBJBNLyysrBDWkBEgdisytWhn51hZDPyG2HfjKcdLYcJNgbY",
  "key4": "ZGFBzWBzbBvSyWBsNNK3sxyF52PB45kbG4fVPD53xcwbAiFGuv7dawSkzCow6WV1TM5E6d5zLgj9YpKvi4siY3b",
  "key5": "2m1Vbuvb9N23VqAjt6XsnY6TWBHe6cRWgo2vXbRAoS6UJHUunxcCVb5BwiCngVYzW7riw3Q6W776oMRjYoTvc71z",
  "key6": "2SZxwAZEX1xzm3pUdf8axTWpWQc6gz9hMPkaJVCD9z77jZtZgaWwYsBNbM4FjAnifNk77FSKQAj5K5125y5wBbpz",
  "key7": "kDSkC2as3dZSHRgzyd7XQqe16vRndfcnHn4H7AA1CjMP6yTnPjF7gVMwRr5p1Q6iQRpGWKUCmeJsrnN4vyEB86n",
  "key8": "169gvvRWsXb4WB9jTn9HHJhsxe1rKjRz42FyDifdB1pTjbMRyZvFYNx6BRQyMwgKpH4zfsnzbD92fqYasudCjoM",
  "key9": "4KrLJKSfmH65aqoZfhH9qXiSumCPrC4nGB5bapJrxqAi2GV5xt98RDgVGYdW2cojkfShE2z3JC4o7UMspJkacAVJ",
  "key10": "2nNvM8jCxRg63JRe1ogBdJW3i6diDaWMAuRGnSieFp635UxTXBnECC1B4BRBrv7vs2RxP67hPNkJjrfgFvRjCRzD",
  "key11": "51QCFAos7k3qNi13cs6FsLy2SHZ8doPFTb2JcMey293WkMmzCd4hweFXAxi4EE5shZQsbDbCbzsdpkuDFKE9svjG",
  "key12": "5VfcJdmbSbHvwTC7FfWqAanEB21nwDj1sB7eyuKACiD52ExnrZnzAFgxFkDtMh7ZbEYL5n9QJKAPNfNsVL2b6ELa",
  "key13": "2ZCjqdvPLLkyy5fjw9HdLJRC3omoELr6jQcEXSRYK1KXrLCzDg9nBfjdgZf9AW3iKgiiZkpqkCTQ2afq4AdokoPH",
  "key14": "4mDTRLCxhrPqAnYymhcDs7C9h7gNw6aU3h8KWyveEQ7SepJJVeZL5nP832Qs1i6aDMmpQ87ia2k2UjsdTKVb6xVo",
  "key15": "4LKqZaCgZDKwvvgMe8aH9QvUJtTkPpLMv9sbfswFpgGhoytuxK5iVdKpoJnp4MMuNCbmBSEDFkCKLrn7VM88eKTx",
  "key16": "EnzjotehbLTBf1GUkL1QpjVjQtCJhqscy8g8Jnfbh195vwcu2WpxEyzgss3z4Bbi1HVhuguJhDoiiJWkVRA2qwD",
  "key17": "4F3XFMhXNEUX1bcmh4j7PcCuunZAu6uKvpefA16fYbJ4J3QmimPUxsvtCwSPNUsQ2xeNxqoAN1WsTSXQTdR6qd8T",
  "key18": "5mcePro9f3C5naA67gquAya9docpb1q25wpu6VVZthrBmQurLg2q8GrdiFQ2nc86zERBAqcK1h2PYsjJPwxg2X36",
  "key19": "FdwCAstqYGqaQKSYS27VCDmPXsN6uLmcgwPBif9hYigNyKdsJVenoaXMeutbuUbrdGaAEy88ituDzoSzQREjDb4",
  "key20": "4UnrHtqYNtDqiBRdrCMqcU9gMm9hMo7uuVHTBznpkDXe2r85yybHuBfDmTqmnY2oricUssyqo2HuJwQbMXhY8w31",
  "key21": "4YGvTSPYAFzUv2eZzxU6ZgKc2noY8Q4cH1Hjf52wCnpxYyjSv5S1iXtmSxFFwhqAV1jJnmNbyodSyeF7dgqsTSga",
  "key22": "54m8twQCVx4H814UcsquSqyitVQskgY7bHx3NDoyCWPGemdmSNQX2FJtQW5XNRRZCsKr5zvKnBiXuFHEgukFCJt3",
  "key23": "5QWGJdAEbj5RrHJ77YEn5ha5CVykveA7wvU8nKamhNRscUK1Y6rkymUTyB6NrWfim761dMiBSWhJnNwpyDVJEzF4",
  "key24": "5rzwdkNRYP7zSiv3e5amWJaX6BV6i8WdjXF5GPTMM9ioSrSFoKE9e9vW8o3NzHGWiboN3LmzfuSEkdeRKDQPo9GD",
  "key25": "eepexYATCj3Gwm5WUcmG9JX5Ey7wvrHAZsUXzUoTDr8poFL4LgEQ251FBnUQ4cNS61RJU7ebaRQYEuUVJG6LKkv",
  "key26": "4R2YFW7JjEwSVjqoBqcoKPL6c9qmpB6KNRJQcZWgueSeMsUxesxDEegokf7khgiPqeqA5FKRzVNQbhyqiiVnH1wJ",
  "key27": "47fTt7JBWW5RbVRmhckQChGG7kbVqRjMdnCCm2PMyxQbcCHLTQRrW2sm9MYrjxqKLJ17s9NAagghb76nAVc4QEVS",
  "key28": "61ftDouQgfZCynNXU3ifTJpZyaB8X1Z9QvkPc4tbz4NvFrxtm7aduBdB9u5hzqaHPWyVgHjYK4HGLxFGuGJoUoLL",
  "key29": "5JJdQL31cXhDbcwBkho4J5QwLMqS1UXLRgjf2hWqrtNjNtHj7HzVq5jCe89jDTxNNUdNccRhxaE4dQiNJEYJMfay",
  "key30": "4kBezgf56WBauvzPiSXunSKoZjWpnKkkdZXYdT9GhdzsE5GdrWAknR84QmJuXymXuDq1qve5zchDeZRNYTstUnnR",
  "key31": "3k4vbQfN8DtdQZvgL9ZvC16ZEv8yzefcEfH33LS8Zj2PvuK2ZYsGYbSfXkf8RFBQP2Rv9zqdAct4LbmQX9F4Tj3m",
  "key32": "5wL7NKWhEwsSPwbL5BydZ29knFxhd9ukDN49D5HRrFcFuqDtyk5waQ6hNTFzPotC829pZoLha7WZhFzi3MXz2jW6",
  "key33": "2sHySAZQ7oBF9ZCGhk3pLQL53uMcfpJv1FBdFbk8G1rS3QDrdqFWRATNkDJ9qFMDgv7MkspdECNP968kMigCvCCs",
  "key34": "3z76zU7vnVraGLdGqAmEoJ4Q11fdwRhgMMnMYqZWUx4tz4hCs94myiTNx3zQBTj9oCZN2kKXZVcXxmddHhddonYZ",
  "key35": "4trJoEBp5Am5ofLQkjiwHEzp8iEBua1WUEY1wNzuFvCJbYfdP8r4jDkhokJLzbVmwKqn8GEoWG89CnYcayEqhRCJ",
  "key36": "CjjG21K3UTmKhL7mgdBK31HGZtxrPWS194ELhZRLttyEPwx71ZAYp3F4Gye7byLeuB5kyBqMmPDUvQQQKNP4RSa",
  "key37": "4g6yGJTjeAgxBAoHshhVhJDHXrxhApci399Qjf4HZuAGGfns881ZQfdJL23X38vAM7S1sBQid79WZty4SDLvjcnJ",
  "key38": "3qwtzJQbCQeWrupgdtNoDh1vTpJ35XwqC1VDenkBJrX1DNzu8ahZXNmYh8ZAbTbtkzoZ9fQnmGaMfDthj64pEHDp",
  "key39": "2qJZPf25kxC1Uy4yaintRZW9bz1XimUnopkofrjQRuvJUgpo3nXHmaGhW3PgRKyD6w4SZxQJ22R1jQ5wek8j2EX",
  "key40": "2AKAsat3nFbwJBhbLcFx87EKsCByuTr5hnxWWtCakvdDEjyetbJ1TvVYCZKygZARVNHZZjVNGMKBn4e5kgnuxmZr",
  "key41": "ax1En2nugm4QPSLZsWu8E5aVAnwrKy7MQEVmmHMsVMt2bwjaNWTMhSg9dNaoj4dkhpDnravKwBg6e9TyAYgnGnP",
  "key42": "3qBzoqhPEn4xvcBTnZJ2vwP9Hv9YJ3rYvUcRpoiHL2Y35iubmGGooEp29Q2S4mbKmEUJobNxN7CWt52oJnire6YQ",
  "key43": "4inJV7TiTaUSqaMgx6tKJLpQ6C8Yjx2EcAVQEuwfZtU63VDFnkLJJXiZjQXdSLeZk9Ko1txNeSG1Yp5aWkB1TYGP"
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
