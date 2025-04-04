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
    "YPqmXk6LKFtPaueJfShegDdiqXcAiRvAYnmxYD1NDsKppucaQeVcNdkgrndYam5ZNGq8ie6W121aarh53HAtk8s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yfTNV7122NbdoMs9aVgE9xTWigDnBPRiuESxtAYUtZY64fEUdKvoFtyP2vCbCvH1Tif7JbvvkyG97nfgX86jpf5",
  "key1": "JB2Rzi5W52chPrnxqf2n5ufrQwVEbD3bcmygZt3LGBtSVaH7oh6iAmTuarpgpccePmhVDDt63FN4PaGqP6AmjA7",
  "key2": "1fvM3ynU4RgXGkJYJSeYwwBMUE6RQa9AdcYKDXSTi8oSNLhAAgKw9HmV8WoPJHK8L3KcsXt7W1xRpKGtyBBeW4N",
  "key3": "4bz9Po5RHirZsbcZfp2deZRCEq36YbfMp2fVrPjtvSvFoWkvpJyeYS6UahQ5yFpNnUsYDwV5y1vCnoppAfYt5xps",
  "key4": "2pYsjuoQXjSBSTLE7gDixndKNWYrnZkGrzb4rZsjEAvmpd37SmgUGgNcQo5DWBft71Xfh52c5uQdn4JgDjUfAvZg",
  "key5": "65GMp8W8XU4xLwdKHC6mNi8mVnokGpQZ1PQpWYdQDtKdF1V4CQxRw5eHcfSzui1h67qpXYmYkCs2ZgJHZAQ6sv9M",
  "key6": "4MF89oMr7oHfP4RzkbWmak6fT7CMcNHz4fjxJFV3z4CY7L6E1XKATeyuMz6pTDLpx3LismujZ67yaB5x41eSDRWQ",
  "key7": "2MLsTte59FL7G47imV7BcQj22nekHi4hMXdJenGncU6ctcuKHBN4ayZj74XvT3zkwyiHXWEX9AxPKyRCJhUnLDDr",
  "key8": "4Xyx6y6Aq3RYMVuq29KEbgKL2kbj7SmAxaiU5Dk6E7C5UxdrJZFZEiNgqmsxTNVj1VLb5vTNoDib62ZNhsjdcf3r",
  "key9": "3xXZ4mMzNvdxngJCQPTQgeFPzjany4vre4rk4cVTBMWzUiPiWjiLcUttVpByqkkKL3UrATyUHGz4ezkP38wbmJn7",
  "key10": "NPbYPMmFLPJ5GMUFHeNPWToRP1jw5iZXbHKt2mjkkggtFPnq1QcEpMzCkCgV8vqLnjFpC43hde8R9xE2WHjAvBv",
  "key11": "2JahSZoNffZgyKWEupuL2t5Q9DUXh5vkE3Rup7NVN4Rgx1Tv1NaNu18H41n7BvbqXBorfZJ1UYWfvnSUcoHwMzjD",
  "key12": "2uaNPt1Sq6KoK6sMbQs9UC4MXej2DRpLP6vEH4qbLXJkFzFoq2PAuo2CKCPFnyJNLRvi4nTa7eHc8WBze6NRCHMT",
  "key13": "5NN5nSPn6zwF12UjbtyvA8dbjUJVW82TPZSxjURCpxeocoVJtzpLC94fnAZFZ3G3eWSN1xbSpsGExBKFyp8nEJNT",
  "key14": "5HsS9iE13AGAsk2Y26Wan4vM4ybzGLb6YWbvoFT8UARgrrtNrduqV89r7A8xw2pnsNZWKr6wnGTXt121qSKskFvH",
  "key15": "5hvGuQanzBiBgVwRhUjzmJdb9T62PG2aizXiAZZDVyPu1yRJj2QPo3MUozfbjmMiZETeXfMcUdyyH1Ws5tRcAecB",
  "key16": "47YAx53XX4W19NMver3vPTiUJRLCiP3vWoT2s3cmsUQeoM5jSb5KeG4dgwiMJa7PMFGYBi8kL6cw7irhCkq9hhW3",
  "key17": "31Ec1chgFKtSYtYAXEbrHKUkdDHSqr8Dx8yjz9MaGyPL1MQXQiHtkh7oAkcHVJVvougsX74PGdTBC8hiYmR6UdBt",
  "key18": "3dA5cJErXGPr4gVtCwxKJHyskHwRVMvjysMyVFWY4DNjd4dcjfRgSEiC2Ar6ktb1N1sqobraxFeHwXJAoD6xatzC",
  "key19": "EqM4ECbgEN7Svi63gwYtsHci5UgWo7DcYoMD37EQJX8Becoybv5SSubaF3351tUXEsEFc5m7JKY6MFxABu2rN7K",
  "key20": "5ySqAT1ZWGuxcAugBmRFJnG6n64hCU961fZ3yzXHUvzU5SHbieCTq5m4yuap3yFBYedmXScMtyQXcyo9SrDkvPgF",
  "key21": "4JieKL9o2Z1siZrzyvNQuQDBFNRcdzQu4kjLPmNuwieXR5Zm6RjhnFcBAKkLJix9bsZs1hZSKnkcycsVpfm1oYj6",
  "key22": "5V6LTrSzNJ5qSvfJ9GHYQQDZZWwgeWvjmmVGVyam1TakyuJ3nwv54yDRobBKLraEZU7MZ4PgY98FsghByxknLqVt",
  "key23": "5grgFkJU5W3uRtFRTtpmfbQxyBn7Dt3gqyuwvtAYepJhdYPyEpXaTQtguAQWBRrFg66qbvsadHLszJjV9Bs6keEy",
  "key24": "cjAFZV7G6V1F4gUQUXASDxEumZv55DhWjbQYxHboFUL5Atn7GRDd3G3wbPGQ59uCsKWFt4KEbLxnku9y6eMsRwn",
  "key25": "6jYtno6k53gq1f9d2rH3om3Jq22Rbin4z5KFKUp33Z27iSiQNhsS8JwDbWxyRMrHB9AkFHo3iPhSStdohDxaRR6",
  "key26": "51jc7FFEmUXMDAfgKGQdXVFB5JgE7sC9uUXXRjBAXReyM7jdm9hPf81ZYGh4DJua6d7ndN3SdhR5tk44hvmqDopA",
  "key27": "3HyeerD9oMLWNikCzpg3sReHWYCro7p38HTjCYpeLUypVAnBeJJAoP5nNGeX6JTBCQU8yxHu6YpzraiDUe2DupGq",
  "key28": "4m8LjESkdMuG2MJT3L6ptdrAP8fhx7bR1xdvxbdgKaeLQCTL4z1Gjqw27LBs8oT3h9ikzbfPGovEnXUunjYPimmf",
  "key29": "4emYPg9kEb4ZWDuHNX9W1nHL2Dmmwa7UUbTpiXnioxkRVvZvdMax5waYZPdBYTwFaHTuegNeAGUjaCrJHnX9ZbKo",
  "key30": "3xv3dmjhqx883r76QUvba9WAfwL2uEK6hW6LRz9trZ4WtPyvzF7TEKR2z4XLL12A7TktiekfVGX7gMKwxbnJcpQN",
  "key31": "hnKW2dAY5WhNZ2A7j77SooAvqK8Kc2bq5AAMrYczfoESWLhFufe45Jm2iUZVKL6yZREHqHZ4XRdwREtWPJDo4aT",
  "key32": "4QquSLAj4De3oMYRxCJdXVnzaj5fndgBm5G6t3W2JYLYqZzRjxPsSr9FXCRcycdriKwoRcLhxFJMg3yhacJXA7ia",
  "key33": "5xogGD3CdmWaq1K4XymBA9Zvzu2cia5DngjQaNcXjhDBgGWAR6AB6t5r7v2krKys1CwvgUGP4ZmnRvbMm5MuGm3j",
  "key34": "3pQ1NhyFBJZorS3e6Pq5mHXL2dk51JkvY3pwGY1cp3vegRnncNh7RVBgxM2oAf7LzRptPVFoYXsckeGw9kN8fkZP",
  "key35": "67fokHEt8pUGzM4L8u1nYdJmKZ8H8xMJCpUBMN4vYHfpdymBznuBhsyaKBqSkuLPq9QSZoCP5ng5h4Y3Uha6eaK7",
  "key36": "4joetnGi4zEmdJU7UuA8PmUU38f3uXJZsP4S86eJA1rXQw4VEY5NztMRJTHZZ79R3pqhQWj2gsiX5AfWPiHmW9gV",
  "key37": "5j7dwV9AXZGWSAS87uLwPBtYRbfPsMGPrEvygf3pUYbiDzXcawpdoH8oPg3vZ1n4LcYstzFqacZ1RavqkLmVNNyS"
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
