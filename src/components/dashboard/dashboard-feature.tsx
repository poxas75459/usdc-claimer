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
    "4dxDfht1sVACQV575TDm35vHnevndS6j1ragu4htKFRjgnqXmVg6gu7xaz2szRVAY2BwTP9WWEWHGX6keZPiW1u5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YTat6ZGLzH7gpK3N2wWTfPSP2Lz3PkPBRoWxKZkhEotAGq2XvXgvQcNAEGdVwaAHdBAiwjVSLngCBFaeUAfGU51",
  "key1": "P8GdEGDN2Pj1UfTCZf68dqsArN31o7eWULdDbURpTnCNe3JJRgb6QYHcgBc6ezhHhLMF6cb31vgJHFFkuQ5ERsU",
  "key2": "42eirFqswN8zUx9UPh3KsQvGSgrSvYRr449z346TLSUwH3ZQFNb2Rfj4A8bsA5d5k5XaTss5xcQqdfyr4dAuvsw9",
  "key3": "5QySHCwdxqojpi2EKC4QJDmr26r2gmYSjV8JiW1AdNABExk79X7wYqjrrCNt5L1LsNsTWATGdyGCaaxhqzLyNzVe",
  "key4": "2j9fny8zY8srHKVKDKWWefJ8JR5i1uMhx7QyEcEyfFK7nizxahnSGDasKGXnna61P38G1EPJBkz5AjDL7NZdqj8W",
  "key5": "tutgzSHZktqBnaxGEZqp6bE4RSmmEnyigW52NviYBA3QFRTMR9Zqy65M992zV6g8PP8p7coN8NGRRFbwu8Bt3We",
  "key6": "3tACRycRGnaS5WLjB8fosD2KFHaxCdQpy8vTwKgs67VKtodMaPMpCuPF57skHUpqFR2bHpHkbjD32xGKTwxP1DAr",
  "key7": "22gQi5B9WdAGa3R9rPDbYYR1EtvkyBVzFNWVux2HgVpYGSK77zNFTD39VxfA5AzF1bexSHWEqizZGiYhstnxmXNE",
  "key8": "5xgs9RJAuxuCRgLqm6U5wpLWMBt69KwinPh9HXnhnm4mp4qYXgTzasWnNY3xk6iJwnRXaKFfrQKUcpsXNEtgCVdd",
  "key9": "3JK9WHtyey9es8oKN5x1R9gQKHPheXfhDUxxiwR6rvxC4ha9tWFonpMByJfZ1KBUrxZhJUuVUyyv446krJzV1RS1",
  "key10": "2c9EYXY7aJokjYUE2q5ayksoSDFqozH8a1AQ1UoopTHDLsTcyminUgn2uscUmZ7dokEV5xFueWmBn2a1Ea1kKhYb",
  "key11": "37haiWHv97rMH5PnH6TVQ7xDBy5Y52Ya2HXpaFqMiex8PzD7eA6fW1sQEYC9AxP8Zzfn263EhrRL3rpCdMQtm1pa",
  "key12": "349NFhgsnP66LAt85uFUCppJXauxvCLrqzbj1fWhPX8SwF41KLQ98LyUiexoJ78kJaT3EDKd4oMw51LLUkNCWUGt",
  "key13": "6dC18QxiRDp62SN72ARoMek86CEuDPtHhJ7qda9UxDdgYd9pHUq59vBLVt1fFa4e2CUfz2ThNBC389SKnNe1Tuu",
  "key14": "5ArrMYscxuMCJhiUY9hRJViwva6eZinCzxqAmjYrgxrKLqqbwpb3ekCP6YsYEnxji6ZsBsZVXZVSFxUxpZdaRnvm",
  "key15": "22gGBEUrxJL75qP39FNHq7sJc98mygbHW9DyHbAa8utwf5hZw3pL2iHrtiEyaCMSoGeJKxsnzDnwUEBdV1taCfDj",
  "key16": "3dxPF7Fyxp9oTi9pJWeyfs4w8YByNW2V34Gt9CsqSgWvfx2JV9QcE5MkXjKtkUB2oqWSyXoisBFEBJzPbvmwdVrh",
  "key17": "3LzEUmDLz8v5CiEygM1r15uuWv8hK3TKa1PnRMVW5Fii8nkqvJqxaKJrigsbEbGyarr3xBVSSmgGgT1RvvYx7R3G",
  "key18": "2kRmNLNWem44VJ6Ua53t3CEDNqAxktfz2Xrt9t4Ms1YmCALjhozQq9ZPfTRjXKfanuPQjbsFjxAef5AkFhsUCHS",
  "key19": "33d4pKBpDAGLgXvmtuaWy6g8WPkhP3an3oZqAodCK2Z9foY1tgn4wLmoQbdp12qSVxENGWsgw7Rz5AAyZWbtc13h",
  "key20": "4fzRRrhR9m3RRMT41G9Vp2QJxyaBjwMiA6qtTrozZp2HHqXdY7K3gEntB4aWZMeoZEsiEV87n3pCPGvCrkmrBVHf",
  "key21": "463Fs9biDV2SxB9cZS2qEcP1rV2bxkaBFEPZoy2EciyU64hunGe7JZTu9HZUm9nVB99FfLs1C4EaEQhsEatS2a96",
  "key22": "35AvzCuKyyrab5TtGs1txfCKqvkhoxkY6i1TEdhSJhdUgemAyYMaZMbEaMzRS6QuPXWTDY1R5bJAM4U49Q77ZTnz",
  "key23": "hjMbvg15f7jaj7ujaSenBhQ4V9W8S7m14GXjzSbLWhjJbfztHQcY6rgSWeHTQJnNZFxLSiysPbEm7khpa1z4LGT",
  "key24": "dhQ614cQ8WC4hZEHJ5WbjyjH8NN44ttK5tfVns9Pw2yCZmXne9XYDw4iYPeQwmjYWvPQuMYVusj1s8pg5gZZz9X",
  "key25": "4y7b7p9hSYP6GT6Cm5vBvL4yYjMDJYLLBQXpw7VJzRiiNs7Y2vhJRbVR7y5cAHJuujFwPPdQaTtCvipwYPhxweWu",
  "key26": "3i8b47Q4cSUzy64zrNChfuYrgD6nP6mNyMgsvnGWaK2dDaKN4jX8vHxL3bC2nyGZLoY1mEDXyYHtXK27CVmqEQcm",
  "key27": "3W2UvRD34qwaam6PWV5jKdsnfkXJC427Wytq42LC3BTRuhTHBs8jMppSQRU2nckJrwaX4ynQay1RGFHij6sXPyuD",
  "key28": "qhNG4iYzk5zUm3jqa72bj85sEXLysYEeHFESioECF9seZquT5ipMFaDJrwbvHSM4fp4q5yrD6unEBNjFKAsq5Wk",
  "key29": "ViYN7c5YorJtofUUGVwTVpD2zfGWhFoQu7iKVX3ehCEuQdNRjDEYFqxPK9o26cfssuee5878a7S9T7UcbTcxYQL",
  "key30": "2oSPLDQpfzvXPzLnR6ooYmo6nXimQEVSjfNb7SXB38DAxbzULou2RVrhA7Jayk2ZQGmYoL5WJoRGSM8svfPsGquR",
  "key31": "tbJqu92AS8F6t6NQxPAvb8NHhTUadE3b43WJXdj82kcZc3y3DnEAGozjGmNX3iCtwdfuqKuVHRxxC2XE8aUSxYR",
  "key32": "24UzVeoxbwCSpAWLKHpKBz7RLbuGRLsTZWnexRLoCf9fWyeMLVgKty3oeEa7ZsrSf4AiWXq5TP6pXpLGfsnu1EAP",
  "key33": "5SqtDYyuR6dugFoo53dJ7c3VwNRwnxAQcDc87V7YFCKkDy19xxj8qXvfdzgMXv5outnW3nb163goBRHbNPCe9Zyx",
  "key34": "5Y6R8jKPuvR7oUGe6SVyPYDLnWtRYMQp3xvXTK33E66ZEU7mAC51tqF2uzcwKEgqx1sd2aTBhELckzQch7DNrLWx",
  "key35": "4VggfW8XZv7H6DCYeYVTRacZL4h67CWzjc5SzofNEivi9oHbc6s82h1mq2powN7u73Db7mvXdk4Zk7kkVdtBHzDy",
  "key36": "DwBuW2rhetMHhnjAGKnuNJgwpEqMyea3oa45oUh2hdGc5VxKASX3c14xoRDmv8x19paX6Kf8MHrdh1NQWn3LkHn",
  "key37": "2yKAed1ch8cNmKFkSMJx6Seci3AmMfGJpArXq1TzxHCoZVWD2hzYnFMQgMS6x89fC46GtiZ2fxfi4PaLqX4BnTtD",
  "key38": "3y1Gg8a3ffTUXb3qhhMGegkn5GPoPjuWswR4QomszE1oPxxhDaMiFJwmTYyxVKBwjJnQTyDiDtNex2M417FXBBJz",
  "key39": "2KaRTm4y8ZwtSgwyKBWCk4D8EiZLzCQHYo8s5sUxsoV5sy27qjtSZJwTB3TYKCRHxPqRXnV7zgqbF9jJTq81JpuF",
  "key40": "3dqMBAbzpzcuKSJmr7fiNcajy4KFen56E69FQwtpsFXAaufcb8VcASZuDdYkn8k1VpAGkDQLMrCbcGmbX2cu8aCY",
  "key41": "PyydwimFRUSHV9qzd8QZjEhDvghYHytxhozxXmvANtKCsjSuF1A4t9yaRHPCKstvWYofhmhSgMVa87w1g8FYPdH",
  "key42": "EBhfRGQgRDz7uk5uB2bobJ7yfLEh11xHkun69Kuvy85ZPouFRcAzsf2ciEF4MrJ4QkuSk2KQ9zdHwtgwDLo1eWM"
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
