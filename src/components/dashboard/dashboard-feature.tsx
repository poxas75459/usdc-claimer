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
    "2UM8xrEwkzfB5hg1sDhHHZe8tjRFda23KwmK7Ebak2pNY9DjLQz15EE5YMeptdNvC5k3tiG55wb9PSe4SXHuG73T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g3go3oeLjT5gi8ygpJbToNrg7NcqJdvYYB8VrbLPDVkjKvHwpu1hyvrzViFpSXtXTvDjsPd2RetUQ73QU4zGCNR",
  "key1": "2jgGq4nmPxWJQk3VHCuQfrJQBQUyvDeW84rgmymThGc2Trn8UhMU8fKWRTvgSYcemmGK6u2ebtwb3c8Yhx4AiDNp",
  "key2": "59GK9tXno4E2Kv3mfweNQ8Svboe41wwx8njgBJRoVkZmtnSPcBn3JskBU7ECBkqW4y6NGgr5LT5FJbMoephYz23P",
  "key3": "iCVu1yGz5RVDUbsfHb8crZbNYef3w5XpxbqwCk7bjrCcW2a6LQeeUDod4fErcyiSYZ6ZMjrF9JLn3oYuXphPYFX",
  "key4": "2eUSgYjMnPPkhve7Pbu8Ny3QmhkmVAFUxRu7TZdLVaXGu8RU7tPcJLvACkgiAFtYUWqp4R2LuCuKvqR8NHKfEbxY",
  "key5": "rVTfvbnK972ES2bBS6x3fzG6vUQ6p58SFCsHQfEMSmJi9frQby8QSrpGwZDprXqz9kLBR8scQekJgbGsSRXVwUQ",
  "key6": "Q6daT6yKRn3jRvX2WUGqgDyv88qoTZvWLbdz1exMj3bTSP7712UorzKRQqDhfsGtjtb7hcCaQDv1vyg9zxsDbWy",
  "key7": "4EA9XMp6Fe5Aksriub93N1AW2ik2vLFTENqS8dCbsmxjaYja8AzrkY6oq3pQeysqQD7uwe56PAaJD9fStpSEBNUG",
  "key8": "39XiA6onzTKgz7SCU6rNwxMPDqE5M4dwhiwZosxotryrUNRpQdi3t2kPRXHA4Qsw1bjPDJmLuYe2J7iADj2oALp6",
  "key9": "3xrx3Zvv8xkdrhQGn3pcXdQXFPoieqmCc8urnfX88PoXiosueGsHCaPPaNHKqJPdXezPPMNGaKQiQG3vduMqMEWo",
  "key10": "63TZAwDCiPTX9qA644mU5uHZas5ah2Re5ukoUC8rsPZ9gBwJaqgad7vpYQ9XNGzzhFZQBjQddSVwyCCVDTBYV23e",
  "key11": "YFZmfTNMxDvZSg1kvdDBN5ZAhjSU18e5M4ggHJoiYjGLbaAZr1gFzzZFS1wc85y11jP8WoFLwLdaKZh2AbMHaD8",
  "key12": "4M7zweJWMYBYrK8zZZxLSJt1JhwF4DeAqcUGxSoZodmkfUdgddqEp9fot33Qhkz4WWz7cmEecYi41Ju3u3pVTWcm",
  "key13": "4ZkXW2vxjY7MbWPM5FDKrLf5gep2jBzJNJX8fCwBcmzTYEj9v1ib4E9S9qZdcyB7ZFVrqJf7H64Feg9fmNyR7hhn",
  "key14": "4ExApVwNf4bFWsmHCS7CBDAyPtNsQCzvSN4ko7DyY7aAfT48jj746kAPM2sz9QgC9pBZGPPc2bffkzzEtZ1cZJCi",
  "key15": "3BCgB53VYsEVvKotrLNHZw5r3xcdmqL2W6VuavLruvNoKxQZrc4SUNjeb2LYMxcvUKJtLupWe4jqmQ84CV8LCjSd",
  "key16": "5RrRoocY1gdhAAt1p1PEU9oPfggcb2BabMeAPXtYJGkHmDrnb9z2HdibQ4L3F86bT68fm1o9SFskB61XCPgLVZUx",
  "key17": "ESwTewkde42YJenhBm3kcoU23HW6mcHcHoW5iUpUS5anWhq1mZWgWz8tayr7QfREaAPH36rgu4XqSa7eH77PXTV",
  "key18": "5JMSuKEsgBUgt6bGi18ebjxHfQUKG6cEGVSt8W5tpcN9mVt2WXrENmdVtTz5osnyxADbLA47G1E2kt4d9uLo3Qfo",
  "key19": "QFLpJHvE5Gm1Mfo7Lo2cfcrL6MKP33vKHWfyFFWu42PbVWTfntk4LKUpstRCsJJYZqS6h8ANS5ssGL17bHwHDkH",
  "key20": "TQwtLss95wUiE9TZawpCScTv3L75McqeEBdz4qE9PCchCdGaW6PGANfJ5by8GNgp5nFpuyfQja7M8g6MZUFVpQ4",
  "key21": "6HQN33xp6sSpc3HeJJdA6P3gX9GXCTB6wJibuPtnPnp59m3rKfQg14e99Qr9yD7xmdTtWH9WNvj6TFeaNcLNm8d",
  "key22": "2reGfZ3Mgg7GFdFDUSLeb9maPbNAFf5F7T3yK4FK2RPHyCf25vWC8A3yhTrDT186y1jLBfxHWoxW8gJexgGL7PqL",
  "key23": "4x5bM859isWKM2xSfCdFYCbGCES19EDnLig8ARBQpMUqnHPPMTS4CExyzs5PTKwSbUW2McNiwLoqHg9EQxgHAGmC",
  "key24": "5RoY7PBao74774zNniYNDQvPmHBE5qN7skXQyS3QBRYjbxgUCQnTCZWcMU87acKpayPrUskUHifu4Txz3m4TJiFV",
  "key25": "3XNtt5xnc1bgspLY18zzHP8qbgwUXPLLe7KzV89K1cHmzzNvmNZUvAPN1STFrGowYi5V8Pao5Nab4WgLAya7Xzwy",
  "key26": "5UjSU2LUXEW8RLex6dfxGMQNnqaJfSzd14Ar3YyjkksV37LM1CEfYTWphtebC9oUCtZsXRj6LFjz76pbUUYvXpp2",
  "key27": "3zNNAtYKQ2tdbfV8jecEnzDLXy28sBpWdvLER181a5HpSQ4KsUkbt46nyhBysz69FgYsm9VbMk9Lqg3rvUi3jJFS",
  "key28": "KfHwPE9etajQ2vhpa2qGdQuhx7PSRyXzvpv2fjV1iNtFreYipW38NwkMG29gbVmTgXQ7n3n4WJkEUqdUW48dbmi",
  "key29": "FU2QpAQQxC7yYtLaYkqEfy3sKrB8X6Yk8r6cSVMmMe27QDJ9Xxdt3cVWpexbYS93rVCfEwHBwSPz6RT1UvqrkNW",
  "key30": "3eTdCWBfHX2Ti5M1Zm7hhC1wq1RbbZrwteYf8wUjoZ9srmoSnfpZcthsGGLfrJkoeGiuk3CS3D8VGxJHWRgKtGH3",
  "key31": "2TJFUNEvtLJ2d3KbZGyNVixGPUVrB2EHdwdYvni7sv8AT1NpMJTFbXSbLPxjDNTpHRHugRyMzyQ5HUBcwkt9Phsr",
  "key32": "2d578crJ2eqwyFW6mZXvjQqPnvpRSH4zcHddLwxZnnt4AmUAik6yzDNQdTRNpnQkkofkWUAc69DAqxE89Kq7vnnV",
  "key33": "3d6Y4urUQbASKHRwzd6tjKBLaEqykHvf6hXZCTdjxdd5i9rxJoWDTW9foSkwHv9me61DFzBxe6mcM3QS7Yynn9HF",
  "key34": "2JCRTotSeBFmceFVdvGdfh9x186ASqr8Qy5pKxURGv9MX3F9nLeJmfK71P2cScUyqnpKvNqVuoC3gPgPTbjcUzhg",
  "key35": "4UQK7VL9BSLQ4RS6B6UDYB75guBmJ1nL7FyhX1rXg3RUET2ji8uLX8Lm23B2tJ9p2HtXJbWBLQHkL2SX7FyjHsn4",
  "key36": "2inYYQo626Vb4S298fs1o8PxoxexEXdyWpjRFzXxEDuFYPnDyrQDPyPQVSndwX5xGTwzqbw4FMtHxwfzGAi3gebR",
  "key37": "4Ztfbuk2vaFnGa8qitmyGMkTrNt6aUHzbgQSkoyCHLfe75JX4hpW1m5rhnayPUmTSrJQqAd9YJAU9yXBzsrEKQb7",
  "key38": "3fk23TijWNbdNo17PWLBQo8LbE68WUbhdd4iVocjHZ23gqzUQXZGq8DjUhG8aErXKCCZWrNLjFsvzeXZ6wxod19D",
  "key39": "5PiCYf2BrQFMcWSUfqYhu1FfL9LWPFuuRHpMgRDjNMdtpyCLBnUQEyS9hgoVp9r4NFCTMRDo3GQoKkiHjoG8GLhS",
  "key40": "3KPAK7uUDtEf5j9ycNMzS2yk61BDQM3SbAbrKwmRo88oUFtdg4XmzhA2iNNNRNXTkyMY3KkSsUbzVoQTSNLxEnE9",
  "key41": "4rtG9SM42dujrnyHMhjExmNozUFZ6WEEQq7xDnnjqnCCeD9SLyij6G1hYX4SpPRsrEXnAF3nErhPs5krCf49heTc",
  "key42": "31VD5paFzZWmRqtieYYxiF3Fru1fcph5UQVJwTUAv6NAT6iPbu5XqvZUfcpj12vxgm4Yy9xKCrwT8hBijMVEFJEF"
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
