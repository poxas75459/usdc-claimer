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
    "27ad1Pxj6x66ZDqrnq4ysAgEq1s2RBSvtiTcqCYmoUrwbbdSjUfzN5kB9knjgDGcuTWiR53NVXz4dw7NzMpNj2mc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bNtUywfxX2Hf1kDStNXVpgV6tYLgcCKBTLLF3VMzpzWEtkEaYLAFi1iEL2E78YBBMMFjCh6qCVDj6yuQX8b9Ga6",
  "key1": "29LDD8iJfo7UyGcFX8qz2swNMVLzqMnB1Dr7qWyYeiJxNKFuqRFudq2pKcTfkYxpWPGhjDmms91ywDZZMqoyRU2T",
  "key2": "2b791nE89RVTNz1E81raz4Hutg5CDFSmJkaHzx56FuBLKXwgrFdby5CypcmaZFgEhFxFfndiknm1j9FexqK4RnS",
  "key3": "5h7115XmSKWFjfiDdbjTTyX7ZGDUxKohLWvsMM67veGC1121L2a1VDEBnkrvtw9j3EpHSt4BPDRcF1Z1hboBQicS",
  "key4": "333c7TDiVYsu1sTtt4cdxKZmZcjh5tqgMZFurXVJ7BT3Z5sthUcMjr9bqbWPTS8gRbEH6uUBF3RDFGEEK6d3oHnM",
  "key5": "24ZjnMBYDXiPPaK9PC3rQn6TeshyUUEtAmJhHLcyD59eSpuoEAQmP6JLGPiPRf4uQjZv23PfRqpHiHjszHh6CXnZ",
  "key6": "4mQhZb3NEj6vsQ5g8cNRwdtm5V8fb65yma3sPagdZw28j8SPfFWmVbVC96kfKXfExPB8HXcQn78hZaNgTR3BQGsx",
  "key7": "3qjZeFW2zMAEbHY28uMDR8yG8WYjTZyN8whZ1Bev9U6diRWgYskGjSKdRoimMJ1Ait5SmBoVAfGQy1JHChg4AUJZ",
  "key8": "2oPTGT9JHfcE7J2AdmNqADxMMw7kkhPtW97Jf5DTS28i68aFsdgypCAkw7oV1eCBz18zC3xM432Hc9n7e2XnMjT",
  "key9": "HnAjki1L3o71xTkydr8JBRYrW8UVKgv5atP4r4mTWhH2tgTeEv7xK2TM3muYxaKSAKfbboyM7P1RYDwzP9KjM8U",
  "key10": "4oybH4AhPSuEJAWGJnA4QzGFcYbhtb3T6VsJ2BLYgtTXY7V6xePjV4qyqVy5bXNvNsUu91iqPqJsi2cfQT3WSjAz",
  "key11": "66qn1M4nikFKDBqwvSjprokSLwWpstDFZLUG7g3gHqWdMknqSEbooVXia7E1SvtrXFjDippZs1gzocjFbdmiwxFF",
  "key12": "41quveSmkATCNi2w6Uqp4pSZWeAu4yTMjhF76Z8LoTpc2euRHEPrsJG5T4cskqehRnaYRmA6dGid5Srog6kKxYMT",
  "key13": "44pT5PN5uSSQeh3zvJsHreVi4QjKVbNFaAetdv3nJBCLQ6qpq3pmjKawiCYNAptLMov7Ckux8mJMHVDChaktDBnN",
  "key14": "267sMJaCgYLbKZZkCFTxRRYf3hN7xoadyUC9P4HKVEjgF9vdgWJCq3Q97RVM693oFSPhjfRwbdrWpFw1v9ftfZhG",
  "key15": "6bJ8fQjd59EqPAxy8PWtMdFHZL59WJtfDNnAK5qC1yU5MxgQP33tL8oMdLsT1DgzoWQBMi8TzwipUkT5yrT9T64",
  "key16": "2cJMUu9tqTUmZBA8HyX1o4QDMp8b7t721D2cJetLDVovAMmFXHW1S427Como9r1p46Er6i8KgUUGvp5JPYL2KR1G",
  "key17": "27aS69WioHwwwtfHsEhxCuV6Nm4UHc8HZniQYS3ALDHy2qUcrWBDkc8rQrjPW5a5hjWkrGJahE3iPfnBQu5h8n4p",
  "key18": "5aRS2QwwCPvfJZZUPnNYdQfDPCVYs9rFfpftppLQPVPo3xaLjQwGw1g5uTsGH4tyKgGm4nU3sLYsGF47XNkTeLxq",
  "key19": "C2stMQTvrPJcw1ve3C7XrHfZXzbZEbaZiLD7obV6985umCtCdSz639RrJBdYwtByRcrcFmhpbgXC2X2u1QWzQud",
  "key20": "3R9UWj3NUoDeAmr6RuUUbG4CARWWs4qttm5rRap4MLmARtYdyRur9HZ7R69CAffSN8XFomQDQFqq25Yw4f1msniu",
  "key21": "5HcAk5QW2f8LnUa4VU3fLFkACXr7xhpihwRHah81euJJQnrD7j3A9kJK5GjKKYouVV1KYZkU3W8e4sR3SPo5qPd8",
  "key22": "4ttN767dg6KBjyUb2yyvpXJ6XeFaYgs54ZBvnr5DpvYNSojRRw6DAJa6P99kDRgfeE85Wn3VkyfuWGYCf7qeNiRT",
  "key23": "5xMjw2iDwVj5YYLAY3LHF5s1PyB9uovJK6XSpqFYVYFCZM4pyTWs6ncJCaBJozT5TPWm4PHjrcxSJSdJbzEy6UEw",
  "key24": "4VaDFStcbyrUHwXuKthiwZ71sJmp3sH5Hz5ei3TYcu8MXexM64cURdTGwUdAsfT41RsBxFW4ZkBRsHNBdT1M427Q",
  "key25": "2hwUJsMYGkuwwHvw4q9PyFVgfYUmygTT5DEn8yo2SCXggPuukzu71undbJaHruXG6kAyJh9wGvGibC7JhFHsxBh9",
  "key26": "2VLiMx3JLGYUrkxZ4BSruC9RbgYSFaTC8gheLQExVodBtzrFSyhPYKAzd6r9DhQuJNi6Ya3MKF5pYHNWN3gDRYkn",
  "key27": "4d2wDfNc8GiPKGNZu7AUxnhkjCnQvK1GxM47hPLVdAqE8amqzTMydfZh1vbhoaws5LfNX6mpJhUsU3NbiDDvyoMU",
  "key28": "52QMpyQkbR7gzXsVeXinX2DzN26f5esC2FYikUv9WqNcXCuiuv1gLwpn7pp7XqnN1zjneCSQ3Sz67dMEDGR6T3Rr",
  "key29": "2mwafXsasUVYSSU85PhBpQdtQWKxXN67btFJqFgvhGisKsM23wjaTyXkgLSfFxeVa3oUz6bhiGZeH4wQxotzyGGU",
  "key30": "21TauxPt4FaAimZ2SyGoA2QnxqCa5qSRmFf58VhhsjTG2mUoHBy8GJD4vHAosgazHdcF1tV6ThJ1eMG4FhdR4wrf",
  "key31": "oF7axEKEh1oAwoMubeSnn2qM1Z8trmPDBxymqxoZJ1BZ4VSv8bU94wSHQxobGSF8KQTgCTTyfHnGWKyeAtwsJWA",
  "key32": "S9QdHa1ganY2dD8WpuakJA1H73qK6nUXg1236CYCJhprffy1SKkYvekitDXYQrT3giKU1AsKMuiq1VPeWkJVYwj",
  "key33": "3gKDdT1Eb99hraxYzs4x1a1JWBMNFdf5TjbHC58ZXDzFWQosY71MRz5tNjiu1D8HiDeWbKJ79Wvn2bDyrT9d9CWK"
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
