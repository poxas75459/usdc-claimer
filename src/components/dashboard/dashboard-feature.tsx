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
    "4mR2UUARpy1gPdD1FoTqkgSS44CpjYbkoDHXi8JKCPAZvCivxEZ3hpNkyWFogvdyHwdJ8H9baFh5oAfLSyxuGXc9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UcQQ8WWaa9dZ66524qnc4WBE4g1idKYNiiSNrcNBJ35o2zSzmaBtrmUSC9a2VxqEJ9uhp8ySeLRUprqpd6hztdC",
  "key1": "45MLNL25nMN3Jm18ZoT5e3stZ9vh8dYyHM4dsDExEQgJNJo8bu5Yeofq2wFuAouJNeuxuhG1kjJ4pjC6hXk8zyTE",
  "key2": "46kWnyTkJfMgAxDLvqbb9XsKLchM9qCZH5pKC8daKx9qcPTYhrJPThVJJqPQp3Y6SJJZQwVFZyJCyYY92njuqr8p",
  "key3": "2cVvDV16X57dLmZmaeNNb7GsDJ6artQk7Sqhs9gPhiM7qHMpzn2yhb8jD4PyHV3Jw2cyHfQ3EmPjj74ND39axuvh",
  "key4": "4SACcZTNZ5Gw6H6XK4RbigWtFMu2tuzMZv6meXJKHcbLhK6vCuiwKoowJTud66M9UbSMTUJXDBZGcPmrJBntKaPj",
  "key5": "Sq3mMKXv2bbYfGnUFoXuM2Tj6oTPyAJFy7EsSWEEqCK4k1WxhkJh9GUA1kMFNYHarnocwFCG3rRqsmQaKtzsQkM",
  "key6": "H6cTT43sgqQMiK84cxAajcK7itCAt67bPHPjaCrxdtpifQVbr6F8eEERxwPnWbEHdojyUxe8wg8AydKNqSyciru",
  "key7": "2Lddgj7CEUr8vpFZFXNLYSWyJYqFEKyxERfaQ5SUsBGuCDwjfrGqngKFXeDXfX8wuXkPRscN5cxWbB155Z6AdoKT",
  "key8": "3B4Z7wLCMyc6kmCtywhB14nNXQMSx9tns8VNiPff7M4fnjx3amF3N7DXFDfSTaaApfvChv2V4dZydG8bcSXbQCoB",
  "key9": "4WctzqAnA6uUJbsCkk4bYjSEx1XGboY4nbXN8DXrXYBcKB8nG2h27K3kgpvxRvWFzTroGgKFeL89vLgWBKSNSuJt",
  "key10": "5C8BgoxSP6ufuWRHDf7tfv95xrmXE3CaBx2qFBxAgy5GStuz1VamWqaHbBztFCrcFu1wQWLh6T2ZhYWEPtjuc5aX",
  "key11": "26kWoGLgcXH18Rb12PhaakQ1gZn5p4dpBiM3urfXwpbP9cfjkuoKm8hCVzmXTEnBZiKdbua837qBSJgBrUAnWavD",
  "key12": "37N3QwZNer7EmnhjphhiW97ihLQZ5M63AKj1ZLdaMC2sDfitYBK5GLHk2RqQZuXcHxQxmdky5KzNB1f8kXZbfHKf",
  "key13": "3U9VfcbbCejmJUFJjdSRNourfK4QNbDUKfb7UL5FvAn9LgCNECqzzFdjbCzzotVgdizPbdNMusDiuGiovH9HGXxB",
  "key14": "59QkXg7S8bQiKKoVoHoZzdAt2Dw8ed11nuA9zvVWRx4mVQvuEuerthdhWUuKQCSaUtxZeoRvZ3pcEhuXzXS8AG6e",
  "key15": "3cUQUvaoUbkbfqXXXSzJuhAgbUS58jiZ7cHATJbmCrCgsRToXsYKRHpLmFrMxjFPpptpyZssaknyAwag1T8e31Lt",
  "key16": "3CtGcQPV7X4Eg8o3kcjiNSCEGA7Mx1sMAiUMjYB49iJEs78KKbBgDtvfqF9tXZLjF4y4qr24gdzVHwj1j1JGXC3",
  "key17": "3FVGSWS1CxyWwGgYtsLh3Kmt8HqL22rfPbJpEd67tYT6FDhne6Wtqdg6Zp7pJeNQxBtMnzSwveV7HdtDPwfvQqjC",
  "key18": "57JudHXivBAXoWBjjjEmceku8p5gZwjjYUWD4ELU8mUnsPkeDLHuLvK6V3tqhqYzu4bNJhEsJdCGMZ1YadA12vSJ",
  "key19": "5xnzPWqA55CKZsmQpc4pJfdzT4pkUJMhJq54ihWToA6E6GDE2p6sCfQTNF34zYimZE7uC9q1rZNiYbtE7d2YWCXJ",
  "key20": "DEbYc6Y5UGfbNLihwXDgQ7z2ckHw8yTWHx5BMFwgNf1otKJzCA2uMs5nXpBzLmVPoFX5QFA5tY4A3PTEz13qE8e",
  "key21": "3mDH5z2se9543GaLb1a2SVWKvP3RqLYcsfa4p2agEZu8N7s8bbt4DpLuVAgEcPULRLr8HKediNz5UZNEYyEFLT24",
  "key22": "sXe2n56TT2Sb13TQXuvieQHN4RqEvUraA3Z72qAGUZEPG7NADZgyX83eD2jBYbBaMqLFbaCHKWLzHSXSneLebmb",
  "key23": "3UqJPcPQXgPa6CMiEmczvai4dAKG9auetoNdKAV68ymgtoBrBL1hA2nbXVLEnXXwKQu2eFpYahrYgnJ4zN99NoF4",
  "key24": "4rtThmaijgATsk7SpZQwjq9rn99wLisu9CfWV1tec8rrJHgMPwmByY2Q9bLAU9NQsEXcrXGCa57JBgq7cuPwGDHc",
  "key25": "5BJSUej6empFmpiH47b6wiCw9yBUJ1PGsZQJg2547W1rGtw7Qxr7Lm1nvpCtveUdAnC2yCU5sCRYAAz5GFQSG693",
  "key26": "66xqwW5WBPWF9yVcuM7yaUJgpPZEc48qieCMtQHqbwSdmu3dydNHqPinZm6Hhz7DBW5mHrszPqjcdpFY95zq2pBG",
  "key27": "3cQAwBvZpYBs7qPyktU8XmzoiTzvW2JWGTetXoDEf6MgrfH4EJUqZSAY1TsapqSijSAEirt8tEdNYtACFShfXUzn",
  "key28": "5JrPWF7ZCM3mceoHPWikVVLb3naVkJeQC5mnkD19QzcJLqSpwWfqPqEPi41g52XCHP1GDpxSUibYMGzghcA2rtE9",
  "key29": "5HWYtXPK3b41BAchEfFCzKpTichr5DMTn8g84ZgoZQvM6F7VA1vnRYjwVLhXawoecNNXWcEyPC2SzPBoZxB6u2zj",
  "key30": "4u7V9s6ez4N2nHMwYvGizrPbaSCm9LQoBFzaksFAXD1r2UMKTzKBSQmHkTUNbycPyfesBr2xVNUKuAggDs6fCX8X",
  "key31": "4hZkMaDyMoZbvS5sJbjHvfYp2yBabhWNcR93magpoECPshhF7qpCfw4g5zM37ykh2H24Xz114GCbngaJYNQUzpF5",
  "key32": "3eGtf6eUimifQ6dzaks5UMEWmiwvRce9X3B2CrqkJniejpi6kJFmcu45o2ohAYQY5rYjXwWzG4jdSaudEVnA1vRi",
  "key33": "2vQ4D9aSmw9493FKutV9Cp9W8fVST7Dvn82XBHKfSLze5MMFwYEAL9J9gJcxnvAwEPdYTXV6AJVoqkvoFa9xMh1B",
  "key34": "3BHBj8JZaQXHxSjYtbqLhTYhk8NWExE3ZuTrRKoLd4vX7jP9LQp6SKR36D2PTCXKrRftAJVHDsgs34NkY9V1mCrm",
  "key35": "4y2DhJ9cDToXLPSLXjArbmkPSNjp6eEZ9eZTcJZjY6cYEcYoxkbdQ6qoMJfLCRUUm5pATMbW8HqaSHXyhzyary6G",
  "key36": "5L5nHUx3YzPWNYuJ35z9VKV8dXiFjLvkdYkDXSZK4LrE2kXhn8Rt1NJMoR9aYCKqVZYpo89xx4M6ngJngLvMRzJC",
  "key37": "3iZgL4yWBnRM89PUdGXGMQ7Z15waY2vjn4boDvivzUhy7ARtzuXFZG5uN9kNTUdwxPUo93EMvpeb2S9W3eDk8yGC",
  "key38": "4WPTSKzodavAcRk8LRzdAZvEayL3Dxg27HeoAdLDmqhEn4VjubDAwHoXRamGo62eqqxi68MA2hTDTSPrtt5EWLoH",
  "key39": "3arZf242dw7A99hjpTTLvDH8kcbvGa1HT1FGWxXMeLkncQ3vMpLNf916uRHjPBdAGB7mYjw8pSQCfSk5pG7CZWB4",
  "key40": "yZSfA9CXBX9HHeExupNta2dUAMVdwUzP9tCf3rHeBFzTZmvAfrRXox6tdePs3bhF73kmaGDLZV5e5saJTZHRrTD",
  "key41": "5TtoTiPjSM2e9LzE9rECQzQNfjnyjxNtJR93sJWEh65jqNjo752bSkVnfVTeUz3N16uPDzGphxRFFBLTiStpg5G3",
  "key42": "5ExizZJPG6q2yhAkS2vPXf6hecUCjQYZExeBaZn6uzQBAqq26sycjoUTjz9aaB8NXuC4RpZ8ym1bMDEdR3ZUEXhi",
  "key43": "5EuRt7g3st9278HPKSFzcYEHoPkUGRLXzRTk9Xws52hm795rXQxQzCH9Lw1xVtzzBtivNnW7wXTd6mJyu4UNJnHk",
  "key44": "2bH2HYBsUbhrbGmV3abqhvwksZRQSoKKfuxbXZZ6jLiqW4B5gT53V2mUUbibf2mBMgCQZFsH7yUFdBz8cwHuK53v",
  "key45": "3MumdgFxvzby1Q5dhMKnBnoGVPBYar1CdT5Fc1zAZyRDGmNvtjRZToXsXkr9GfruzLKQLXwMyxwNr1k9uXv9Wzh9",
  "key46": "5BCB39iDYvaNz4Md5CmeNnEAH7V2VGHu2jE1x7zWQuz6fmbxo6UanDLkwxewiELCRQ4PLhjxpsJKTtHq3xdoPvxu",
  "key47": "3WZtiiN3U95xsDUbqUL9pCVaswM9stma1Z6xH72H3NDijaKLE1dpbKc4cZyuW2FSTtBsCBRZJw9agXSEZPirQz6x",
  "key48": "3BkzwDkRv13ux7k1t1vr2RFfHqPrL59WddXDdZ5cZ5nXbYYM848aoQZS6PPgNRGEN5xpB3foLLgs8sPBpsdC1Vu"
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
