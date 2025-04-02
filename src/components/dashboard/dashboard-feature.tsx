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
    "2CVSfKCGdN3m3X6SqXpV9KhF5dmyRt3iXtYBhc9atGPRDhG7QQ1nnmRHzPxWG1pKeDwHWLZWi5aLkj9g998cHgg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ypUYnNALwFvQw8z5HcR773P8LEFWxQegVQpDn7v2Htep7N6oMqfutgqTgM7Avwxk6N7Bxz7TEMRSS8FwsMbUKRT",
  "key1": "64ieErgTz7tYnTcAaCbK1yPM98RUkzT6DScKUcDqxzThybiA3rxCbptCubCdp5awS9Txc9qRgXjGqqqii5vAyje2",
  "key2": "3x9hfjeMmGrrbYpgmq68QKjmwHkGCGSoDFoZ7UtQNuh991nwCiY4V6NEVwcqqGrgDoXrjdYLr1myANYF6sdiva9p",
  "key3": "3K2PeJ7RNyTL5Jsqe1uRDreRksdwW4UtR2sW8nSozjrwCk39uAGvXATJujv2XCrWcduHp8HBHiaRtFDn2zCBXKqP",
  "key4": "5Fcurz3beuWHV9eVbGf33paQFsqg1yMAYGz1ENwaq589UBWTjssGPHww6CKABnS5ainjKiGoS553jJuxXFc4xXsh",
  "key5": "4BriuX3Bdhx3TQgEYntiygpngJw3cVTSoM4ioFDecaagyju63gEbisEyAywGo8BC8YVHwAfkDovgJqWs4iokimAs",
  "key6": "2yXXELTd9rdCoNMWHcZJm3KojSiEwSrK2RBuVKG52Vq3ZKuJpsTyPGNxjgfTQDSCchgjUSi4rkPGTzuR6m6QdVAo",
  "key7": "3nmybf7oVLjwFMiYAC886FniZeGr3ro864L3CBqGLoGq9kdr6wuMxBvpkQJHQ5JfLqeowJk3fRgzEn1A45kaK3Qu",
  "key8": "4nDdhLwUNYWEVeifjmwuYkrdz7ZYu1qwawz1aKozuApxw5wtf6rYPiniwKHSqEHDF3RBjZsU42DNcpLmhjrVzBBF",
  "key9": "3a62QcENnaZt5tmYyrPJTqvg6STa6Pj5HPEjzxtmLVzBJaV9nYkGasqWgLkppGJCyjaYduH829iRmNDZcQuMhL3F",
  "key10": "5ZHn8cMQFVQjw96yBvbnrPT6BfLb9nuxq5EgaVtvX2bbmXRNaBNRAvYBnyjvKan8m27bNfWu2H4rQ7vABLXfE8fm",
  "key11": "2Lva7ajhJNTcP1nHw1iKLNVdkjm97UkgnrSRTcvFkPb7qzv5QsjgTwXHnaULGLJvB4HPLc2xf7LyJcELKqQiqtG4",
  "key12": "2Qjnncowgi2MvSRhpsjDMRoatXY7dRV1ZhC6nXNA8LH43KUipNaBa9i4qNDRCyEgSMm5ud2zbKu7inQDxW6qGYBn",
  "key13": "3kWUjWMfpAcJBw4f8kK2u6QrQZvK5rn4zZU55yPSHeZghax6xHY1bQBCtErQ5FbxrRrV7bQw8wMdEK49i9rFCiGw",
  "key14": "4TjcTz43x39FG7iRuuiAjEtskE8tfARauWCt8fioE3JAmnUic8n5XGCDsLppV7zLDobqMUnrXAw2NVnj8daJrGuf",
  "key15": "3E55MiptN7mwaa5Tv7d9KMVqDL5moyreoWKD4XpeJmni9sK4RNW2q4xs8ArCy5gVViF2XNYzDGKcnqxN41L1P4K",
  "key16": "4MfzKwSdvFthLxaVb2rJTNzntyPoVN7BV6QvU4BPbrPTQx6RnEH6BxNwgTymtqBWBhPLrgyGNcGyn3nzkqG1umsJ",
  "key17": "4vbng9yipHGpoCdHKHRMWwaGKEquCxXWQEdaDskjb2kgFr7s6Bpt3uoaCfZXHMZmSfgUy7Fg3assBpkdteVPmrue",
  "key18": "PtacnmjtpU9Le3am4KvPzcmDTwtr9PjwV3K8PsLNC28LzTc37CYvd5aMMnsFUZsQHuX7nEaVbNfpLK873W1JTAj",
  "key19": "2x7LcTyjbb1N3p2EKPwEzp4WgxLg5dqnhchS1JUyS5sEeo25yH2akhCYh6NPJi2E7s1YFTWoqeA7QTG88BkKM96Y",
  "key20": "5b5GfAdsDF7jz3Dv8fXV1UC9bZpCNmLyyahwZqNDvvqv36dus1xuB6C3H2au6c3R2F5duztPHFUyvfEKBPosbyoY",
  "key21": "23MZmKqQyuBnZDs6U4VbPjQkWuj23WE6g1ojYi7AqiroMW2bbKa6cmnD8Ndk2AkotDrG2N6z3nsrnR3SqiVbQMXG",
  "key22": "2go6TBr56LJvEf3QLrAtzXixCFAwecBdFHNyuHMsEh8pFaoyW5X4nL6BhXej9NzNEqxcietrbak2F6VhPFTQ4AB1",
  "key23": "29SJ6rJz29JSjVLraZxoqiwUTHu85WP457uGAiWCa6Jg76srf6g5iCwcmaNLgVpcbbPrWfQx7Cg5UmNKpUshV4k9",
  "key24": "3cb4DB4muFiqkHk9bntycsAkTfD1QnNo8fQDELuPaY6pHYLLnt9NGkZucLyLczxTUa9J9rggq6iNafa5ofoeXDL",
  "key25": "5J9UCU7jhL8zyi5GUFiKaMy6J2fizLoY1oA7HSDJ4rDLwLKo8Hwm9zYphYeNzKS8R7qkGkbFxWSnXzFKKtfpFn8e",
  "key26": "2FQwVWXrHkvZUkfQThnKjvh11MdhKsrhZYrwjpKfkq4331WJRhr1Ey15YmHBsFP18cWkowG97uk5gPvCqBYtZFGr",
  "key27": "K7BYuACTiRrnxUvZuWhnjwTGnf1do38HdZZkfvDQxTvKu97wdiiz77Xt3xXXMYq5Po4JFhPVyt8feynhpwooNik",
  "key28": "4xBsKGFb8ysezqdytFQk9fokqhyGwCiJK9ssA7RDKuESJbAkGpnmTseBs33DQ55tHfZnd1MrxukPwCepwWX5ifRq",
  "key29": "3ZcybMsMLFRmE2vyXyBavSuwS8N3jMvF6jtRSwDSu6pSKURcds8ycsX3fjPy8MaDARVctYMB7sWZzyhkm9W1h8wL",
  "key30": "3C5awv7kx6C2bPhkp9NaVCciWm1aMR94rakVQv4G8TJNF5q4jRLSZdowRPrk9GCpQkKqDSdHyGBh3Yg9C6CvPo91",
  "key31": "4eFporPVHNMCusuixZQN7XcmBhXmufrFiNdLEBRpeFxPExR6JpD51oAdgbnnHCEb7Huy45uPEnqDKEgxTimruMHb",
  "key32": "3WSx7ohbHdMSbBfukvX6XFffGsjmpntNk8bG8ac8Gmbjma7d1Fj4ip2br7C1MXkp9Arsw7phvXd9HHkUktAi1Dkz",
  "key33": "EdGuK6FiMv6HBQhKNa37iVuK2Ws54yaBMVvPtBfJXGWrwdSggWKbPbQjfE2fGZ3umWdj8GFAGxXTyZLQGcRe6qZ",
  "key34": "3ay7otRRGq1hteE6ozTxhNUypGQLSHtetvDBNNurMe6GqyVbQTnfeeV6Z1rJ4BPrfuHeAkL8UnBvywKbtrNYBoyA",
  "key35": "3cwMDshFB6HpVCPr1gf1mpM6f29MsBnisHqe8bU3GAA8dhj1rm5xDo7vNCY8nE8PDVNacYhCq5D2zgs2bvQVGFKc",
  "key36": "YDGaNTGkwcBarxADpdZFjNrmLQfUsuZteQmRbcVkBL5yUfvNoGNGj29fAaVcaxmqcsdBmai8vurQDVPEQfKMP6t",
  "key37": "3Bn4MDQZ1mZfVYT2C5vdW2ThdrfYnVgrcmE9S25fVy3eWorKJ21LQ4QqcbUaKqJDwum2NPmUUKQ9B9BxyoBjKYgK",
  "key38": "2LtCKzVtw7wWS5mUcRQ7KnreHf4sGqsEbVvpaVsncQ1N6P4LLsjJd7W55J98so52ak12Rid28G9NEb1KgEEpSrtn",
  "key39": "3fpJn8t9wa4ZmWJ85nqKcDovQXdqSe6JRDga6LCwaqjJquMMt9p5Ry2XqTeM2o7ezToz59cQAPnnLkumusAtHC3U",
  "key40": "5fh4m7UjveUHHBTk7qcfSNX4MngHa1seJbNgiMB1g7eWv9HQXpJBqHsfpJzMY8Qhmkwghq4cF5YKrdNSjCZDgPMM",
  "key41": "63njc2254oXfef7TQ2KTuDrZPBxiF4typiuG3iJgdEVy5yYV3S2BGCAG6MQeRyheSxwfACKKCLmtjZiuVkHX62YB",
  "key42": "44EP2iWPwVmiaicueoFgyGsJfm9kiuLEUtBXjgRwcKdHVmq2nEquTnxYArcmAURNJhexdNSWvosTNqBr9CTTPY8V",
  "key43": "5eV5U66YeGtUggXYhBkoouukuJmiZDdWHpJra2vePGgSiYuXqwPSzqs3ycwT42XUuNq5iA2f6diBRuLUCvwb9m9X",
  "key44": "4u8CFAAt924tT4TZdZRsx9cnmrxUyHyw6dtEizsH9Q26qLJJYKkb9i32bLAiAUDryW2LGazy2czgqDWeRCE4TZfM",
  "key45": "3CcM5mBE5k4f6eGEns7uJgBhkjx5KYuzZC4jX4YarRWQ65QY5rYWdBDjSwb8f5kHLApN4wNvvDp2DHHaYn47UCmC",
  "key46": "4iPd3tM39UjzTT79fZhQfM6VSeZgy7afycuhpmXPNP5QHXYpkYZ553mQjnft3JXZ51gbZLzZHo1svP7WjwaQrsiy",
  "key47": "3EWXG4aWpsXJgTupFn4hEgH1aJ1xWPKFuvWjgtPZf4sueqxS96bCVVjtAZzmTiFxwUURPbky4dxLuLNLxjdMJb3n"
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
