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
    "dyWejDpKbTDUvfUVNQecmBdy5TRwRpfP297sZxF4B6MGKJWhQT3gTt31GsCMibufoRgZ1Cr9b9wWFVNeoHYiuXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s69rdv4wnehyraMNzfDFTijZURnC4823Bv8ho3EM2G7TXL9XZHSCuxfFxa6b9QsuTPXJUGCFxUCs8e5TWAKoV4E",
  "key1": "2EVTaQwKCuUFFHSbhZ5NfBKNbPvaqUKnopJhGdkBJdd1CbZV68UFcbR5gUtgGA48Pv4NDD3EkrXT5d24UXgGMH68",
  "key2": "24WwWvJKeAS8N3EeeWjyi3hnPVUpVo63s26RPPdbWqSi7pPQYpV4vZ6iFdzHvQn2mkNqnkcNftqGUf5Ak99UxzJn",
  "key3": "3xgBMy8EENAM4VyfcpXdHgZwKYJVnW5aurFTHivQveN5bGFtqoFqVttDqpZto84F4SzJm6yCmuuVAKZfWTzGiaTD",
  "key4": "28MoF1STepimcBAXZLwLCtXBtczfeuYGRHYQ8EwWdryqF9dXMFhkbM1gwuEfoEcRUGKfsTjfeimsUsDNE6q2YNgw",
  "key5": "4JW3Q2EiNAbW7qEhn2GfoGzs8yMKp11Sari7FRKPYaPvzZmjuGNm1MUdURajCKjsv1LtwMWXDf1d2EsgvvrRsWu6",
  "key6": "4479pCvg5mbZg3RowNQL3Xe9ZVmASYeekebyfRyice1tFnmkS3Dpxy2wP47CMmaKXNt9Fo23Zw3VTtr2qfyND8W1",
  "key7": "5ugAGCaR8iZ2zeUCG4tSRkrBC2TetySNLWLsemWVvSJRywjALg2sffCmtLLbdxFHjFCstrWNgWjWm36aFHFij4dE",
  "key8": "57Xk1121gdX1ZbZ2UzRyWKzPNgwcZtbe9JadizD2Lkx4JSxTk1T26jsxLwA8MM54yMwoc2SrDRJYF3xs5sQkk2qX",
  "key9": "2tjPo9UvZyXnmtSBmRrXSJVzqiLjEtfHtZEHMHW9qYGkFkjwMALFNvQmGbLEPRVSgUrm9WQyhPwqJ1c7V8kw8Zng",
  "key10": "5HjtC6oCpiD2PdHv7KgwaQkjozZu2213xp4yEx77CuEBr1frgQVv3uCd7pAiW2H26dVxSgfJiD9LWSJjhbU7pju7",
  "key11": "5shGRPeveVw2EzRKkcYggr3N5otpBLaQH8e42Zw2auB9GEnjiLruUwR5FYNJaUR5K69Jsa9nAb19vowb9KEV5Z9H",
  "key12": "234Wba65UCojTL83gwFv7jW69PT7DeRGbGVBjNvndsATxXzcoNGYF1De4zHhD18SMWzbY6oSBhuKotLanT9vrdqs",
  "key13": "3KFeaZcgiTfAtULZj4z2m3buYQ83rstZGPoEE5SJpx5UuL7pCZZYSh2VVDAoJS756ur8WziMvS1F1FzscGGSHc5g",
  "key14": "3LkYWFqAsW8kRoQjNWbLVCtCM67WsRvU4jQXzAjUHhBCSXpzQTazoQuEMFrBnUFTgWoMBKwhEGVsT7ktSwnxrLYc",
  "key15": "5ScfeeMhYi7ANjPpZy3yyGqcXNxYhuAh3kfsH1tzm3TciTbfxjf56dfg4fNGoQzSaQgSrP7sxM6kSjebGDj9tXqL",
  "key16": "2owbqC51kd7A1QYrXNh1VVSvyBJVpbHkTamGQ45hRq7MPNn1rRb4mXQB7QUq965WBb11T57FoPxpunyD2wCsmmEm",
  "key17": "ktSw1thFKYT45omNC2Z6pzPfAh26evKhMvG1pMKMwtKyCs1c5uZKYqvLQowjEbM84UyThMVZv8bDoFwqVNrN8VD",
  "key18": "62GgLsCVbwtzZsa4Z8sEEKFa9u66ZqSzywZzX17cyXbkuZ8JZTs8hxeqsWeYkna73PcUH2Lx9WgmfArHsqqs6CdJ",
  "key19": "5mDPAYznzqZbh7PVzZVwocpDUUiLSMQwLEnsUDgh9vJ3bYKx628QBJPbiZxTJmBUiDkbsaYewPZHEc2pr7rFc3jy",
  "key20": "5UUKewUajxpBm6GLY3yoMT9TJx2ygn2Uje1poKsQtK98Ck5vy1utUKF4vvqtvAvyTVRSr6fy9kDySYoPMiZmofaZ",
  "key21": "2n7rrsBgyh7zA2GauKwUA5EqzsmTeDsG9CpuiBiAWWBB6V92g6izxestVowszGA9ZYu48h9LCoepzQVYcojbb59P",
  "key22": "9uuAfs1Hr5iq6kmJtDHn41wFbYsoMFX7dvDNzLaxQocT9jLyzt7NLP8zQJimpFonvXASY3GenqSS637mqJLoLAe",
  "key23": "3pvrLYEoJdKTZg2679rjqYK1rqebcbFJdqCDuG2x2CKnVJY5C2vhBFBhFbQgjqJ7gyY4Q8eoooD7tVmeYxHmJRLd",
  "key24": "QW8Hk7hNV4x6nUNv7JgwqqfyUKYYmcLef5jM7wcoef4RSYGgNJhw4Fk6HhJVoS4CNUryEJu78PoKZV4HjosSJWc",
  "key25": "42oPxhYRbLdod9ZKhzuR8p3eiuxy215mPE45nGyopfkJF4XGV1WMnk1ypSfR4wTDMsZ2Lrb9VFocppDafc3XY6a4",
  "key26": "3w7eVJMvJVgmooksbfkix9mF8izW3FYG33GbXdsHLaAF5VXkxoyf1Hw1fsbYFLgEeuZoJzRLvADbMtZr9oHqEqNR",
  "key27": "5aU6C73meAmmHyc6KGgfcPPbod9fdm6VuuLjqEPGWmxQev7bxKKEWUks2vW6bszzD46X9uGxDBfDYVxfCvHZmnUv",
  "key28": "2j27qpRWAFKoWUPYNsyRWWV7ZV8eTePdw2TPTh5XQnYThTjJ3Yhm655ANyvEtep5BjKPoU7pJWKKZ66hYofjcmed",
  "key29": "26hqsZbV3txc4cmyN1EsEunzeM5uKJtgQbibwFtQBF9XK2kPW1Gs6kVQVo22bct23XhhXrRfye9ewYWvp92qRnLE",
  "key30": "muSM2fAtjFM99qZPVuoW7MEckrTp1fwB2JQWn3JoSKpcbVk1WvJqWNG485A1NerQGydiHiiGCfmp7bGXy6rBXvb",
  "key31": "2LFUJ9WDUwxRyneszomAbn3jja3L86AnyLTm8Qg27znBKhDjCmBLpk13aFNpmsdydu3hjHH8V57rZU8R7RTSngyB",
  "key32": "2beBJTDS2EuLwSuTWFk5iGyFkM9qfcGkKR6hLCVD4nZ4uFDYpVpEE6PVjJ1UTyi7YjsUwfcResVxu5wSxvpVL8nW",
  "key33": "2P8Nrgs9sjeqsSueLcE2XcXfzLxL8ADwBis8EHvASaframhV2D8X4p2bjmedSm8pVqsgknjdzH8Hs1Uc7WdYx2SV",
  "key34": "3io1XrebmyZmzgV2Xe9T1DUXDKeuFhwnmPxzmpujPkefzTBqESCYAUwkBHNG1WiQF3evRSNi5by9D4ootEAoKK88",
  "key35": "4wMSgeCWgnEs7NGwnanXbug7rAmWaFohPGkspoyBEqkVokvW9pNaXkTgontgtubTHXkGi3op5QugxWoJLxp35ngp",
  "key36": "2J66TpFJaAxJeVxEkXiwMVDmBAL6i5Tacrtg67qBykshi9yUy6tP2pzAzzs2b9xXK3rG5nJpGHTcTHVxJzimCBDL",
  "key37": "59p2ai7KwK6kS9EZQBLfpSZxUujLASXk3ckhRcBNFkacFpDAxWEDp7QRUnqZC12Lm3iN8Df2nYjZrT5mLRB5LZc6",
  "key38": "21fugnF8MpZZgTPUeVCsc3br46crxygttEoXZm8sWYdchCC9rkBFtpTkAgXeotMJQY8uoSbr2MhS9jB2KRaeoWgg",
  "key39": "3b7CpfndLUD5MDH3q9wHwX2xjkbiqpX7yJ4xxUW5jvvr94iNrtsoxuudBqzqfetdEZxvfDmFyEcCivBFVaPTExps",
  "key40": "4CoHTQLTn9A1h7B99ZbBwc3vFapeDLsLFUj4NzrgpqDTmqsvXX9SwXR3hqFtEPJt1ZwgbAeVG5oN3HWPzeDfW57K",
  "key41": "58DV2get6pm6mK6hsMDBkyGhGWaDX5jEQaXf9Wrrwezc4SSqSBMfkBXny78QyYQJHorR8RRsjxtyLVrBtYDdmyib",
  "key42": "vLPLxxrYzLmszkyPYruDTpKwcfG4p5Rv8GnpvCVLfaL2X9iKPwn8xFTrE4N9T1hbvSAVGNNWRXimyCEnoNuhVG2",
  "key43": "3uecGHaJsTqy5zi4fhT39AwyiuN2jPP9RVrdYesoRFqvm1W9qfY1WfJ979umXZ1AkvfB1ZP4ZttE6sHYmH72TK75",
  "key44": "5m9vhwzz9w3ncLUtZeCLZjKbSb5cVGjpZezfGn9kgZSU8RfP8yZ9TdmDGc1BTt7AViMPqVw5sa7S6NTuNpKVjyXA",
  "key45": "3eJcMHhhhnKdiDr8FqsuLW68MwYueUaztMULmjr6Zig9jyoLcyBPJGUAvxcYb43B7NrdRxtuLqU5xvMaMBt1YM9L",
  "key46": "4d5MJDjuT2iSyV6s7i1WcAaj2j4AzLEQ6UuGQYq5kSbzkafgDRNcB5vggRL1FcM7nzGQZRk5JFzYfC2PjDez9os"
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
