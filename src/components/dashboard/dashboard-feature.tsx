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
    "4hDEFs6HULyUaJGedb27RMBkU7RQcyK9fwxi4VnZ7292FPUXVFif7cd5A66wnWgC1Ssa4Y75n8wNxdUBeCNQKuas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gWsvo718s1t8mv9Dhz2Y1MXJxiPZAfNHJpEYaK1sVLaHxZreoJKxvGd7Pd4iDd5JLsFmJqd2uPKFCB331WkvhnQ",
  "key1": "2iZt551RTTVRcQHQ9iLDCbDN5WNEZ7hNj2Y88vMfnxC3jwT3wywu6HpPNsi9aDgpSJqenvEKJXQb3G8sk4hmirV9",
  "key2": "MJHHqBdn3WMoVcadQ5wTeGDKYKDmj4bDjQsXBnvrE7877u6CNfdvnMoAnvWSjrdhjR96fvDy3MeCG2dzQQz5j31",
  "key3": "36ZsWpMLgvi6E1N6cHMTCxbcKdyHMxRVbLNsacsiiT5f6VJyQRACQr3LvgqKpy8jdB3BggDCLK9qdXzJxFe2JxpC",
  "key4": "5fHWHHqJCson9e6EjjLp5a2GXPmWaQs3278WcQYCmbeuqdXS4DrLgGw6j4fV4ve54s9MuVQCstS8yfcbiKFXFgk2",
  "key5": "2dAJKngTt4ZfsH3HsYTLVTw68z3mcsCLLWkz5xesbGKZACfoA2LyDW3QYK17FKMSYiVbEFszhfW2ParxVacxcoWv",
  "key6": "373SbXyfrCdgEYgoKth5BHqVLPY4wMJ59bGHSKA1nZLyahaxgtRFUXzGn8utLb1Tiy9YMavtRtUfmgntJh5eNQox",
  "key7": "5LbpMEfnmdWtZFYY7a1ryx6GZJPUyjH8jyx26NtTKkTSfmqfn8AGnQtc6TdYEztwX1QTPHd8cjLonN3vmPSFQuVi",
  "key8": "5rRrnNPh6F83AuBUDjgsuJEafDRyvAw7w5MCnsyAz1aHNdjEL1hYDYiUFnBuJdujYBQFz7NsqSUG856eaNCpy3ZF",
  "key9": "4rJTh4qqJobSCFgtUXGRh9EsgdCdiFQhQQy7U4dW9Cyw8JqsioNfKVyqd9YVy2UbAF7ZsVXwa4DvSeNjozMh4jWH",
  "key10": "26YNauW85QRrTwfXwTxvRzPufpFKKZZe3XxU2ewiWfGdyTGJ5fUCsv8akRbnvSK5MKwF5HTh48kSsR7tqChwoTwZ",
  "key11": "3iBYsZFo65b1MuRviMuFxLCyo4mM9btF9CkvhBH7XWrXL15vAj6cCxF3RPcS3T2AaJjhU3tp2QgmhcJzdhVWJNET",
  "key12": "4mULD8iVN98jubp2GSUNArHdQRyn3LUm8pzAcGdeQ1vxt7pbsGBcTvFaZzjpK4QEJ3bhiwzsNJmuPMEdbBuopVbw",
  "key13": "unRe91eDupML3s2uzfRzEXw874ephVMfzhQPsPEuRpZnVPGn525oxMHZrp2QS7fgAcBhH9ULbd8XpFWwLFD6MkA",
  "key14": "4X7EpzAAWH3pWdbFgvsL1ZcEYqPDF6GwTAZDEWyxHtkm9qLjKS7PdwDsvewPnetRxmQJf3BDgvkwcKN24skmUgNV",
  "key15": "4Kdns6A7CBo84ztgGkSFZEoTh3LHQ9iqkv3noJfh2jsCNUKuqbksrLbjBZDSLRUR9gVHnAARYdnBrCtY1xTBMwrk",
  "key16": "SzDVetCRfHzJpUUYfK1hzf6MpMrVbjtUBohW1smeZD2UTkRVftULfnhZjXzQ8xeJvHBvPDgVghBquAjk3iMFtoJ",
  "key17": "3NzVYt5FxLb31cCCwr65hFzMAW1V8HQAAofcZdeAUfqE13T5vV3TrwqxeGNUbPASessQoBpCLuDFzhMA38146MTn",
  "key18": "2kW98sHqGsdf9bozxC4WDiEXbdos4LrgwDjRQwFMGbxNhsGhpXrePiKhiRF75RBWt76HXxcTvvRJcinrd47Sx6ow",
  "key19": "5d1XcLGse2Bbp3R5kreQxiNR6L2EuwnXEDwXaq637mqr921yUmRFXTispttTdFEQMqRtY5eKgMNvX3fuuQrukpxV",
  "key20": "5rHhZhUPRRKZuvtjtbMz4hiqKhdmeweWo2rE8Usk2zuzvzTJTkqtWy5NYATD33vFQPusD41F1hEwQDGLUv9skiZQ",
  "key21": "3gYi3LUUNwmE7XemY9emFcraA6iTc95SQfo19wShk1sq5Vb2iP2UsrXtSKnKRsYxvCG6Dbf3FH7Me6AKCMfcyyg5",
  "key22": "2VpxTqsr32b5U7RY14B616racignqVsG877WKRjGQbCn3UYb8UyprsEFpFptfeMZuBTJEtua2gVcFs6LnaoRs4jc",
  "key23": "32asr2DBCrbnGcjGNaTAGdn2bQwBbZJUJoR3fjZWrNmq1CKkHSMjVgFvXh4poiL58ebLGPuohxSb4Xbn4J2F9QV1",
  "key24": "2HWP22Y38dgxugTh6CtCw3tfmy79snW95jYEaDfcBApFigVobfFJDqvZSjQeK9vfcvtDvJSLxqejQCgN7cQsJRx2",
  "key25": "3jSzBbghaeBUZ1Psxg4EFS91r6dkF2XQkee3X2mwLCmuJP3fX6cMooefcMprVfxBvARYrQSAtDKp7L5tKWLfUefs",
  "key26": "5M6KEP8oHfvzyYiGpMUupcjDKZpLTLNJGhJdGmy8MVNCSPAiht7kk1V5Byq1V14CVtKcxN7ac31d5WLiinZKGpbX",
  "key27": "2XZhWsAGNfW4HC5yyGByjCMFu9Az7FbTkJajyF6YdM1MCtmehBuvPkbdhAuRAsn13nkvURMGNR5q3NpT9UyTBAF1"
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
