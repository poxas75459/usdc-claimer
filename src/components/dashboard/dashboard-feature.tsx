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
    "3LmNbWyAg6jJiHRrqr5YqdDN39Wwnmam96XAoimhx6nUStT9q6tvkt4RZq1vJqef1FnKv2xSY4A6tb5fRHnnWp4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hNj9k4FFC5UqxvMtr5F9XMVShUixKLiZBMcbg8jjXvvwArJroa6rmXrc9Ts1MQC8pNojHc3kweQ4rssWsZbpmEE",
  "key1": "5z5sMmmZArxQnnvEDCiCVNVv4d1nFB77wd3SrP6Qe9ggbRb4nekkh3tKisYhfeYyzSWz8whXMxM7wqrpZet1eRj1",
  "key2": "3mpKVQifMqPngVwAd86AQgt8uGgd2dRtkg7J96SbnQrQXtwhyX2UTnDKod7CfovBmXQSVFTBh3Sc8L8KAuYMAALR",
  "key3": "oExGEpZQrtAGwAxxnhkLyTbwoWUje5XDaqhW7bnMuy14C9ct79bsZtxtN2Hcg5SRqmHXFeDuKUAZvTXBq3FSGGr",
  "key4": "3ydNkmu9nmchrAVSviJ1Mdss87pPPqJugt2bC4Q3yH6ZF6GAqLKUHD4nD14uVDBt8sjq18qtLUG4Fb4P5LDuDDU3",
  "key5": "4hwvWuJnxpaV2vaBdt7R3ScGJiBmwt4xSLkWGZ8iUogAKexDzbvGSnSgk2zLWWnWMXp5o6vpFdqyWKcKDp4r6MsH",
  "key6": "ePahR1LQB1phEgmmAwnyxmuZspfYU1czgBhoj55oYnbcBjH3YfGAcpVJx2KZWojCoqe6pemuXRgQLG8EqNRoeeJ",
  "key7": "4QiEB7Hv7t9n4a1c6E6k45MDbf8ZFCefXHNvwjBCXLUQf7hk2jMn1VUQwEQDpvB2YYPpLByLfeEdnxXpo49LfXd1",
  "key8": "2gD4a38PgPdEHL1YxZ95e6pjbtSBrexgkHKKKWgWSRhntBpaN8wQEpB3j1JUt6ejENi8svpEs45Q27DSTdXmBkU7",
  "key9": "4JFTPG82gQVAQ3MEqH5KV1G4GtYP1fzdpzmxr3kn8qApbqx5hzVHwTC8jUmVgt6qaDwNhBNW1D1hY7XcU7g7iuZh",
  "key10": "29t9hbHYMckxRif6BzdizWh4onNJoR9cQMmsPBvhrY1hPniYn8QBTGcCNL9xi4m5RWWSuaCBAtE5KrvSCYkooxab",
  "key11": "35UZWy26fEWHtz5zwnZSfewGaoKT8WpLqAyqXrcGh942xZL6BGDPJ4iNG8NFQtCNAG7QUTbRMVGP2GoR1YUW2aZE",
  "key12": "3oXhdHEBVWypdGWyWJ3djzTwVM1uJzXyiDuTeQX476HKDpMNeKj9uRnTQivzxBoo2EnEdjfzGoLu8A2mzfZLaAcF",
  "key13": "2XUTuLECh9qSmYYpLCDvWgsSpGu31W5psLWwJ3PTqL2WNdXxb6j1STDCrLuHCoH8rcmiMvdkWc4MGpYic16CzCSE",
  "key14": "JP5oHrS9K7xLfX5Ye4sTTkKxc2sDte1eVP1u8eHgHonK68VwCdGwJW2dznBJEYiqAtTYbZQUU5G6cHw7oAjLY7k",
  "key15": "5tzSM8emd5Z3jF9sNo6egWzc1QaSxmPnxGB7ESEXQtduNtZZKgnFaUUsZjFAHwf4YJLtz2BwY49LR6u9UwzsASBi",
  "key16": "4V6TA8gLoBWWr9hv9q59wTttRzoQFgNqFBExY79vafM4SEASZGAnxm1sfTWcDqat9YUK4M7D4Ecw8vgyeynH2Zpv",
  "key17": "RvSLB1mHSVBGz8Vae19ET1DrfJrDcLybq7rw53ZT5wuyZ5zgiM1Jp8i6wLrWaw1ogRZq6ab2PdN1BSKaYwCojji",
  "key18": "2odmHvdq7R6QwSTD8Nrev7uX7SYsTdXMJVPkZtnyydtfg6U5Ny483mvzP8n7L1q8edTkorgrdtwHqqLZLu5fbPUJ",
  "key19": "5JbwDXWq7HRD8U5nHepHRQ3LynNxz2qbU6vdh3krncdWYwHHwbMjW8J9bimNWa8NV1CJUiJCrwyNQqfvrGBarL35",
  "key20": "cKKPGpHoerDBo2KKjdZ3iDHFEZsmbWuQm4bn72rJoWo4TDuj2pGbBRykKiiAFAaL4rdSkjEJ2yvzyq7itg7Cffy",
  "key21": "2XzVcrPoGunySQEKR2UyFk69JSkGqH5cTRGXoBGuRciu6WcdQt7F8MAsv1XzwoTPHndNwFnuRrFdDiH1J26Mb3fA",
  "key22": "yDBmrx5mTrws2U5TMLLZFUyeXAcgVMBS5Gz7nS9rmA5mEHUkJfFNjuqsBRwWsuHeyrX6RFMHFyfwNq5jpWpNSx1",
  "key23": "3zwWAkPywRjxVcKUDCtnptwgNXqqhSmGJFcKPfnGbQM18m9N3wKKb2e34VzudMoi7dcyZQ4ftaDbfwEUJ85eRym1",
  "key24": "5dSPirBPpYqPe4N5EbeREQwAgBgXvXSYqNSiuJJK24EZiPhHiuoyHj134irtjquTukMM6Da8vp6S97a9kpnCR5dE",
  "key25": "2KZ1KZjR8TPZGFzruvX2PjEpk84jK7joMtW4GxxsUiK1FJPHCyxvsQhmXB9uS7iDzrqumnBj3cTort1sQP9vm8Ny",
  "key26": "48nu65gJEr1ZWzprYznNMFW1QbpopUK98QjZGkvSj9YjcrS8Xnc7i88XhKojPBRsSwPuaGUT75TR2HBNc114DqYP",
  "key27": "4bcrRpLVCFFRUuQy13ZiQqkerAVFZQL4nwQn9PHPZSaoRGyKWXdw7t6cyDLLkgDZkJeoQAXv4dg8KMS2chK31JyY",
  "key28": "3foRYFLSFFqEodD4kKyTgVhapRKR5nucDHC9LjVj3oaHR3rBo2BypNoSJaYhbye3be1MzwbKRjKTLmqDtJaPYt3",
  "key29": "4aGWFHm1MsMMYMrRLmKxb15wNHzCFujN4wpaEepBCU2MqkhHBnxUuHhwqvBrUEgXcA783V8394vZ9GfBMtcNudyh",
  "key30": "z37tL5x9CanE4dPEJHeeNEJ2sMW8ETC4hZzNLXQJ2YvLCK1udYPzH3wg9D5G4eRnRpzmL6CzYQPBwEEc4DeZQoY",
  "key31": "2RNBNPc4muN1hmaAmxcYKmtQBmE4q7GPCrEMTYGgKju6zdcsDG7pVjc3un1CeUJG4noZfeAfom9YnR5D6JhaCKMn",
  "key32": "YUKtWNampQACEnBeMG3S4Zo9Q1DmpDseST2jEQdp5HaXiaNYSEZfLgbp15svhAnVd3zyvbhD1LvGX9dUuzvmtFd",
  "key33": "4P4KfRenNjDCS9NEeeAUyTEdqxJEPBtainM8CSY8smNvpKEtfg4D5ZJ3euFRg2PooKxyFCVHaCaMyEKkdj7uvCke",
  "key34": "23wibYJwhb6zno5h2GTEohuRKck3YptrzCVi641Z4hZjYVifKToNs2QNRSMFNPZ6bg3gDnByRzkTf9Lhk2by6kBj",
  "key35": "4qYwhdS52sERe3THw3SxZsbk5QwV7W6a1chemCt6Fd3GEpEHFupfU9uyA7ejx8N8fUqMkWxRyucvRCe1bxgdEwHW",
  "key36": "4JuMbm8g6ooRSjboQNSWvWsx3LoUhPaBMgAWeGckYKPwCCQ9NNVPQfoHQw7jcfpYe9rqDwm7EfWuPPitAunrQi1q",
  "key37": "5SFcWo5mv3ZbZGz5zggYZdkNwNfE4WuywqX3F8aYFb75WtpcRFstoMU3DoERa6AvDZjX2fjRfnbXUk4Nf1gJzrWK",
  "key38": "22acMVCiY5wcHBWgeJAsJ24h9qym7LnDwrG6cys7aEnUkY5mFANNXyFHGTnb8MkfrNGT41qAwwkBmN9VqYNVLdbY",
  "key39": "3nuLM4tTkjBBSM7m36wuHovdN7EREbucfMQKxSy65FZKdLueexyCD8RyoBBEoGveUDmGYY7qtWF998czEsd9f8Av",
  "key40": "31podzabYVKxxoSmfjq7ZWMdehdKxBQuGx6btPr5ogLZwBMcvYX2NSSiKNhfbpZF9fmzruYcWbZEAD5noupJnFrV",
  "key41": "3imHihFWSrPCCePV9vGm9CZFUmNuX3hzeEYEj4UkyMmR93SWzACRdKxEv1PMeRnLcsRe2YKXVcUMcfVi7JbbD2JZ"
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
