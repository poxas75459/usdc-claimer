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
    "3Cgk9foRxqUYMWikWyQ111p2zCawtgfotFb6RzV9VN9mY4zpXNvfaePngQk8YcbYDc51mdFRR7tDNvmgaELzbyoa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49mTaP57QcfHFVGgigbFKRLN92uRrwUEV8kEKLzQ46cyTAaSbVWpghzMDSfNWzhMyQBnkYMyp8uUEfBLgMjdrcKM",
  "key1": "2uo6vbZeNu7TSbPmJF7STRTM8Tvtpg3txNkFaDURGfndt6ht6Tkn52jupQcfRhV4JD5EAgETbCRyfTMDs7sRjQgZ",
  "key2": "5nPW5zfEZh3G2UiiNgYUzr5KGY9SJig4QLCZgJZLvsGoeoiLXXjzgMyYQsC5s2qzdfUe9V8EebBFYUVWfSvU4yww",
  "key3": "EC1AisgsLcP3zRTquLzZukUQXaRK5qJTQGFkfMgERzejKjzoBU7SxYw1USsRYWn5rYstEg3yutnCNYhdHrYiSoS",
  "key4": "2deLDTHLFv17593JzMupYZF6FS8ze3SAd1pJhAYaddHaT6jzcTpV7QBFLJ5VtoWu4myqKXUw9D76ZWEAtxud7ZJo",
  "key5": "2EKizs3GKEJHCLgYn8LtM9K8WsCBKiAc4j7TboNkaRrVLg8jxb3EJDqcHfpkHmSvP2DkNKteDgEW3omGvPcU81k5",
  "key6": "5vH3eMVcRDsaEutGFeyWtL2Rr86fwK2pq1yVNWzreZWqmsbvRpHuniiphtsgZAAbSCk3AozCcp5frwuG8EqprarV",
  "key7": "5xzELF4qebXFNmuBiCKMPPmAvBDLsUsQZbQZFejTTK5dpovNxWnL9JgmrH5k1tj6hQLUrv5phUeLZDrc4VvMkLWY",
  "key8": "34dAYizQXTG6gBTqbjBZJoiMaua2SUb6dPgsXCj2MuQmPaMBSF81MqGwiUCSMjKsn4Ek7V3CKcC5iB9Re6HLtPZM",
  "key9": "2KeLadPsGtLpnqxfyxJdWYF15W3ZRQLsShysFFfczMJSN6SSGtxYWftVdaKAqDpeiiE2cSJQBDhhawQpqiyV6oMJ",
  "key10": "5DQJKWXcvh382NQWLQY73cQvC6P2D9dDZ5i1bzYvSuNn5baPpxkiVfboP9Qodcr4BX9zaUGLbWB33XfcN7a6DF1y",
  "key11": "4KGAqCH8AZGPvDTfTS3rfMXkk2NLJfVVJjkjmamAvFi2TFCGQHPDShL5Asjs2fyvRWeppj8pW8EDvoVk3McPVSiW",
  "key12": "2pk7MH8SkN6pZNGFnxN38HThAvJ7b1S5uSiUGVYEUTzKaVtTmZgJoXuFJwHr6KS8rESehvv7pJjcREuuoeqHnJmy",
  "key13": "3UYRiz2Bq1dyDAsPmKnipNNyxZBiSn5G3fa1e9LaKNQmc3n5bFWqrMvkJPqA73Kn4tASV1igNMwjTPsjTSyGNFvB",
  "key14": "28Z9NnWt6k7ctyHBqgqwXRGuwEomJRtg5nSAnwsztMbFcmeP55K9BBUtXABSco8Z9MDzNBnRgj712kzQWT3cUW7X",
  "key15": "3y4QCfagnUxcgsRXDpJUkceCgbGjoyKzHsUpVzydpUycBvpbnWPk7Uhj48kqBzCLVgxjVdHWDaKMDwCWQ4xNuCy",
  "key16": "w6aEQRYpU3UNozuGes9CybLiqaxsSHkQatTTd3BTuwumyHiYxCdr5RiqPydsoNqujX124HjFWAPJCWyRoEVtcXm",
  "key17": "5QvsUhzKqJRQPmoMH9ZENUeRHEPkpheVtEuhnnLoh245KUbgD7Eu4Pkb3UB2UjisXqmUrdXKqsdhfSDTUEYkiB7d",
  "key18": "4jmwa7pB2A11EsyZ2Y2bt6wzh6HPtSrVmXLrK54xAqbcLmNyu4JoRFXiWhgHKUJRZV34U9qNdxyHQzU4E5pq6ann",
  "key19": "3EWJnQ3Bh7PwUqjmfM4uTNEefjjZXp1vdYnjMJ5FQSe6aNXmQ9zNhDhntSehLZrqP2L4M861gMndDhwT1ufAYi1g",
  "key20": "31Rv2wBM4neQmyL45rtW4mFF9zACpJ3dkfSwY8taypN84SccK1rv2iMCEnC7R8oPCybQ5FfzTttejorcMSNTFjfH",
  "key21": "54zX2rq8wzU1prGdQE39CJcA86we4hZBYt9Eph7DGqWZs1SPwGwjc2kYSAECx1tQr46wCLAQbThJCvop1iGKPcN",
  "key22": "4oiUy6VfV7NYdXMeMnXrcc5HQiDKwGqhtXT7KQm9XLUY3JkLVadAK1vrYcy5LevS6rn2ZxedL86CzYmAdSpdEqDD",
  "key23": "SK37V5mYe5B376A159Zfc2QPg7u6jzb2M31Vw99y1kkXMt2VN1MMZ5Zyt7XcnUU1mdftHFPNufu8mrqazQtWP2r",
  "key24": "2AeBe45Zkf32rYzvsn6hNNJ6RfsmoDspjDdK6MLsWU6w5WvBcLegQyhjM4BmASQJrSymRrNfvHtW8ErH1iUmUnr3",
  "key25": "1zJEXKjU8wjsjSA3p6vSyj9G6N9Q4BMwcbnQsfvdHDzbQMkP22MimKq9QshJi59HojESNoNhinxxLHohGg4wdgr",
  "key26": "5WZNMdrF5HhDYxbPd5YHGkkqaAc9cfbzs3wHXxxUvqjQSBPxkZ5CXfFJ5fUvDQYoj35CqSXMVYAvrEsDv2HxW5G3",
  "key27": "3iBytWTcn2ap29BAgtTsCdHYo1jgmZWm72LLBDAXSjmMV6KTUn15vJceZ8CE56PiUdBZGubbegriXzGMQEsaWtG7",
  "key28": "4rMEKiJhMRZh45icWQqi5YsSt6SAMEBmcVdZsdLfABhah4MgqKJp3ybZJhSLmmRRT5gE7EGfyPBfcBQyJVpVkdBt",
  "key29": "2qjpUJCkFTVtpQbcydYVWZACXbX6UfpNvmh4ycA1tsY3jMSMxBdGdSVAYbEizihfupNju84oFhXdFoK3SbiuhNoC",
  "key30": "U2dzLeqt7BMjqjCkC2MGYRCugsJVYgVSP2jypecT29YVGyWXWQkfd2TDU29MF6ZC4yAuViiiaGANqhZ43pD1qK9",
  "key31": "5LJW2Fh1M6B6i5WUMkU9VYY6ny7AvSJYJUENub6RbbXT8jYqWwZtMo2YAvSWrCzfuJ1ytJ13w4UWs1FwNKPeHwfN",
  "key32": "3Bo7XanoBDtgvviTjEeuRDmGdsEj87K2j7GGSpJJiz7kTGUwnfpN3HP6yUko1LyMHfYHjskYHnDQhQ1Zgz4NcEMW",
  "key33": "21daPy6ac6kFRJdoZ6ef6Bd9T5o3TETme3ggoDFaaEHVPC36kS4XRzdtanKwMfb2CBmXSDDtP9tESvD81vLnhkVQ",
  "key34": "45sAjph1ZZPQwNQQ5LP5LQCrw6Pi8fFqScPb5KnXganoQf3Pw6r8qkSnVHhxcaXge8hGVQ1bbQPyLNxPEW9sLGQs",
  "key35": "25G264ZqeBNHi769o1VAejPCArc7TpBB6bzhPcfbJpqxfeQeYsugpJeRvSLpU1CsRYA2aribvYfDycJfFHJA16xa",
  "key36": "4KWjXKsyxDE9mnPqSquNXzETN1JRKztEcQSPkdbHybpzCctey7JYmMVJeg1i8ddYbBYkkNBnrkbg9DPBHFXLPVtk",
  "key37": "2M2B8X5bLwFy1rJWRXX3nee8WqZv45ob5JJWsaFRqhZpSL1FfRyebCYJyVNWyzE5H2kbMkaNWPD2RdpFHHmsUWsL"
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
