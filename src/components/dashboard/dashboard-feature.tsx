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
    "4XoRyJsFjQQhUE3k6V63VpnP9J3kHyBsJsYax5ni5FT2woXDhBRQ94QUiMxrdCApR6qi5NU24BUpr7yGYJyH3xMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rcpsaR2qo9n7BL7g8siqXKwPcyctwWfaEsTwj3V4qks5Nyg21RCiXeew9f6ZW6YVCo5YAZ6hY71DV8CTDZQ8Wgg",
  "key1": "3NLj7gvaVDbXdxVQhiJgfg8cz7bhJxNLBGtnh2ZQ3DizrnrtVpeUdmW6tzVCoBbtrCucDg8wbWWBRL3QUXV9WWqe",
  "key2": "5T5SDXgpRb56DV12xo6HaeucvdrWyLwsTdVgtbJqLsMhTEriiU92kdHxB49FhBdyYz8uUZW8bne13Y7uc7aDMX9n",
  "key3": "x6KwDsuinZCrz8geTkQihSDoU3v2yezapW9PBkC47bE686aboJM4w9KXv8wMEB3wx1dcNFW4HeGTpJkRrseHAab",
  "key4": "2NbmKKuecqvYpKnW7vz9Wi5CoAsFGy38LPCopJapqpK6bn1ZqhLKYruD5ErZsG5HCETGAsS6nYU14aGACqJHfvHk",
  "key5": "CdqdizNDasr2UEaVbfT3jtaaSS1LNKwXznvJkMk8Dps9RfFg27rZXPCQYfsSBUV9DnYCuFPGQiQnghwzDMuJNTb",
  "key6": "5t9mvt63q5h2Gt4ui1WpR8GaD5Hch81ia62iSnPCEEsW1kvpjTVXRwusH6Pbvw2rG3bj5Sy7vJceg7h58bYVq3yq",
  "key7": "BLzUPmk7Kjbnp5pezi9v7B3uVRNmBTaYq4f2iRCR3HKUupiktz7ZEjHdxiN3GsfonbDkReVjkj3gGRjYuaMDvDT",
  "key8": "5tRCnc1Mq9QNczGaqctaqzQyrhP54nryiSJKUhhjPtfEZWDGqHfUTvGuA51BL4s5QbBm71i3vPszxGEPzz9AFein",
  "key9": "5hyAi38HFS5o2uSRNn5KUVsJToPJyyH1Hi797iq1PJyDi43eHRUoyFnXCQzDAVWESvxqh8XT1G7Xoc7ePpup8f7s",
  "key10": "65h1qe1zMHhKVHU2nU7Fr18vVWbAQ6fFNTzdhdcy4TNz172W6x1DZzCtbQ8c8m8PfziwC83DLMfxCRvhWb7TLafp",
  "key11": "CRVWUwjuEHBFqLXeEVwQnQfo5VRwnHjNpiaJ7wuxo7xFx4jiwfZqQwH3XnxUuRm8HVXEu3gHisF9eKtQLpB8ijo",
  "key12": "4LWMShiRkJoNJ7ba8ZX37oxVoUzsJqMzBjXUPt8LjV7gVHCyVD3VF1etfvSqUi6WaW4CNKZN3bPYFk8Wz4t1Mhso",
  "key13": "HbTBuVjM4ttykyhnC6KgvBm9VoJ8KjBtG8qEU68EA56nA7CFpGx83mt1GtZcKHx7bbnBsnL6txvRFJfdcaBoWpm",
  "key14": "oBjwTgczWqQwrVvhCZGiH7xNaL8A82UJKth3QybkGquCGincLSL7yXBeT6eSjDviMi6prVeqy7CHsKP7eXno8EN",
  "key15": "92U66fZ8e3TuEj3F4FHR8VEwgbVhgriro4tiYJuhhCxKAsHRHgX23Wn96Ev4v79q92YazpZM2tUY78pXiRvaPeR",
  "key16": "4VGZQVGdgCemhpojyJjJc19asTW4NWx5R43tmjfHUT25CLkT4Zqn2enqiy9NXUSHYmGkkgWRMEASH9UcKGZ4BqQL",
  "key17": "fj5Fd64PRM9g7g4EAGXe3iZsjxuozBBnPSUjHaSHcJNVSCV3hsezDr6c69rrna5pShQYZT9W9m2NrpXitDTNd5k",
  "key18": "2DjLyy1eNqFWcPzezHjJkLuMbkkq1SeNAZnWxzzsfefWNQusGYfhzuN3w2AaxEhPCop2b2Z3unAi1xqPEkYmjmAs",
  "key19": "5SkrByWacjozvR7Dt1op21qBJkvvmor48QNfFZVCH4Tyn3frQf2rLNHtdFYJNADKaasZaPE6z93uWtFpNPMD2Sad",
  "key20": "3PU6TVQtZUxLQa9w5wNphVunMQ6kJ1iDm33TddvFTqQ5k1GTie3b6izaDGZwRKdi7YEaqro2oCBwrddv3L3WeUpv",
  "key21": "45vrHEatpqHhUTGcU6WueuuUnP22hAUeBJLTxkbxqpy63GGmfX2Zf4AQGBZhZT3yoHDkXdM8dtEi58pRRQW2CUKK",
  "key22": "3wVwJpAqWtvGNW6Vmb4JJ1sRgL8LPq9woCaubpXKQwgYP9JxPKXc3VQmCoGc6LaKrX9vVcLb8YGibJScst8v4N1G",
  "key23": "4g7XXUB7Gjf4utqdNYA2PkzzjMDMw3oAm18qnnrpPafddSZBvXnS9uLceHJjVPJQxJ2PqjXLvCBdJFHSs48PUdLn",
  "key24": "29eMyYJ4LcwWf38Th8wuSBuNMSncnE2VF9wNtT8jSmfdxeddJD5Uq7uxJGhWJACvvnazDsimVHsJiGfLDwDR7z9a",
  "key25": "5b14RCY35V57cPtZdUn4wQvTdFMfLTXZV664ZfBgQWPXmrPr8Yj2zsu2TCb3LqUma7naTEft4SGLDHBTa6SmSZjc",
  "key26": "2VEmCtNz8z34V9r7bnJj6cnacKN3zXE2RjD9otb7P5ggcJpKWzh3sSd4pSyrPUNPXo3bRjUdJpk2UcXugN4RGkrx",
  "key27": "2oa2PQhz6sXFSjDspsfC2Qw8GhA9j7Z8vYZKA9wJPXyVisDya39QMuTNPY2M141wcDaaQtXELuF523C5eAPSFxur",
  "key28": "29n7rHuQuqAqcsLLXw4seYaKCc3WVJ8bFPb9wscdMWKXCkpqc7Cjgi2hjU9wEeN99iSCQfMSZaHqN1jV9bc64i4T",
  "key29": "2ESYAB9iPsR9fx5DQB7PpCvrLmZzNr3JwViE61Zw3dYHvaeWmpFGRvZnAW5D5WnP7sGmB149pKP1ud2SjZGHjbgq",
  "key30": "61MbEGWnoZVZRPLCwjWvtBFfZqhrc35Xxn8rEdBmyAY3drvv6Lvu518AYLkcRKTaKt7ihJ9syUix6mH1zjViSb1J",
  "key31": "4VoRVHL3FiBP1jyCaQ9ouEy3YCBqaivpdHUvpexfiMnLW2k1R3yU2NbQXTqQo9B7KBD5uHKHHQ9AXmAyPw4QfHCz",
  "key32": "2PsL5jC3Z3R9sB3wuSGXh9U3cAPgZeVfcx7N9xQwKhQ7WbJytFvYD9mkWi6oxVQCTHfXeJGtCyRbKyu2vprnfPho",
  "key33": "2RjfVhHUKAUwCf6oey3QkwMpqWpD7HgpgAXhtFTwuaV86niPVVaAGpoX3QKcBgdREoc4oK6645V1xKbjng8vKXW9",
  "key34": "5iWY3cbFuMdQ5p3QFGfkMUP2UPBG8n4dfuG31Sc4EFw6vgSDVs9vCKyxm5eEyELW5wUxEcc4A6FvcbmpJh6xWFMk",
  "key35": "2b6sE3DLH4RBc5AUyEYrCX13hR9Jm24NHQPsuUfu8wURpqLDEEMGf2e355S5g87fZ3jxLtNSDEcQ4KS8F4q2BA7Q",
  "key36": "5SCJdoTnz4sUwFYUP2X8C719TWUsc9pszuUShbf28KuMY3gJTyUP8qxGhxLVShWFpabPcPfmj5vd8JYjLHsRJpMU",
  "key37": "B2AocxiQPXzhsqW3Rf8zWa6F8Db8JVE3AHw23qZ3cYrJGoEBsY8S38LsjJAcDBr1cGcZ8JiaoAZJUemsrWqSNJq",
  "key38": "2e4vx2mCHtkqs1X5hkcd9yVPcJLtGxNoczybCCPL51DpGvWrw8tddacttfY9g7yeWWwXs1ngpF13ybYqd5P1WGf1",
  "key39": "faUe1K6j72Cpw7bCdSnLRKY6TFtiNCR9oBpffdYq9hqFm2LLDRGrSf7qcxLCSXaY5q5uTHxh41r5txdzB7xFwGc",
  "key40": "23Y2nQar7hhVxKSoe5nuZ5fHDpTCztEL46SbhJdkaTqoTdzaGCxExEggnXNZ6k2Tqz5sPmLSuqaSjBN4UKuapFHG",
  "key41": "3xKnWWDZtghLHxRTgR4QWqufoFFqoUeE8y9awWiJeoVRekvikafwiK1kBbe1apyVoUrixb2xpVyjz3uSXikyGwca",
  "key42": "5rRjNWRbiVy5aYZx41t8e9JjiBCYSTfLH1bHNNrEUKTF4LNndgLREYWTTrfXAqSMjXd8nNV3xQJqERL5tgrBF4U9"
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
