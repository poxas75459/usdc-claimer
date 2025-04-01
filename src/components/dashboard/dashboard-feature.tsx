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
    "k3YE1PLdHAUJEHFiSt6aom2gqb8s8tqmhagi1efPWLojnEAbqrjfkE5AUxNr31YPS8gHPSwPfJnTTbfnnHRWdCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MNpmMcRAyCuqbrnBSLXW2LSdY8iHvPaSVyNh6HENcb9bLsCsgi6ksbvqUYqzn9m5AgSmddGKX9WatgQPR7wK77R",
  "key1": "5RU5geohdoB96TsgatnaKXgJvKFBwKVxJF7MYSmhYx6uYsFsqgNFprv8WWKbg2kJV5FGgeRqnMd12i2xZbNR2hX2",
  "key2": "2sG1ZpczSsQcb5MLTqfMxwhANJvNUfqYWqZZoW28j7icoqLMkxjp879pXSn7LYgByNwy33bZtovyT4W7Lo3WJyfy",
  "key3": "3ghCWnwvGDVUD8NByrrYiDmGqRY8fVVNKzFfZWTSPtKFDyVUSHF6gavfwv9w6BtkhizdeAchFEZJGroxTb6BsNxM",
  "key4": "3sGndyyCG46gxAKVYKGGtED5c5Du38BL6XRS3XwWM3d7yHbGG2SaS2XeniGkFtc5ZkAUqtjhd3YSjdGpYUuuTaUq",
  "key5": "3B6a1GCeFnNRzRwnfKo4rKX8Ti2ny7onPXbCAvxb7JrZbhTDNYaG7GxYcyFL8S9s8HFowU9kBUUErXJfNnT8p1uE",
  "key6": "4F3xw78u6FTTBd2GFgEmsWHcQU2N1tEmj7gXvBgndWwg45MkNnDvhs8KXS5YW7R4GDg7hYn9QkAraatz6D42EN73",
  "key7": "4gjzyPGXiXpbA5Gr4iWFXKviZ3d8HFfVp2XLTAhW4gq8u5UqDxE8BRWyTyGNydAqbmcZKWGej5QuCEoRxyE2uajh",
  "key8": "5mEeBHpzvGTdjqBCBKKCDfuiDLrgyoNi2RfB5SSko8LtoTQpaRw27rGb5gew2bb9pJMqzouW3Cvamu83sFb2g3Pd",
  "key9": "3nUuwPCoFzTjmoeZTfGBSXVaG3dwgqeEhD22CmbFJyYWfBukgfSFqmXx6Tk1F1VxLFuBt7gQUbGTRj8nYEG6dWcz",
  "key10": "4JAirmdsYWiMWpNkGDXt7sfh4rEnqBzP2bhvRwsyyRYNt18WLvhyiEVUyYAUjKMUL3Ti2V4UvQWQ9o8HCHaMJ4XV",
  "key11": "3QqP2dXdqinuqUuUSvT1Gpnaex23rDWN42u3zV47feHh6Dzgwiy5FN3K3zeQPF1TenEeB4vfp8Q1iD67uVqtGv4r",
  "key12": "2tPqm8H3JuFPtbvbScsRSmDszEG6J8dwnubKXuYGvfHK8HRQNazfGSMciVEvAWap7P1JzCKMxEwypuV1mNajcx7o",
  "key13": "Ghbqwm4W61xvFmfnqyHfVrcZf3hHABbvCiXbGfUc8VtKCKqCEzS8CcYBnZf7RYBpTERh1ENEkkYBn62NUpW6hNP",
  "key14": "3CRqUd1bRvK3FctmseLiZkjfMzEoBJn8Xi4SAxYQfg6JzUGf4NQVyiXZ8r7xhAgZ3vjma4RtvmbKwRgbYzLLeCCc",
  "key15": "4wvfxAbNv8akRN9d5HXYrqerpBbAuWgwxNdbAkz1efoUZYmGSSR4zioBQEzfG5z57vK7Z6hx4Kp77vTMrStTk7Jn",
  "key16": "5GPMgroNwaC7WHqubXaSZJehTFzLKFZhpn7vEyX5kW5rWkjPtqHR1AzuVoRkeGj1uiCEvsymYLE3pTgWvCxKZiJk",
  "key17": "QhCdzcesQtXcyVYE6ZVK3BH7967Lui4cii32r5qAH8mfjFuE6iqaxQpR3jKrr1397WpxNamGsW8tGGXBcwgxMxU",
  "key18": "5BzCemFMCTt9fh3VTwAGDKfYimLaYDZhd8QDchDtDBRochVmcZY9jQbd432dX92dy73YgY1648p6avhXtveyTAGf",
  "key19": "whTFpiqNqDHkreDQRYtX6J8NPnE9aHBAcg7KKrzSsdQgJvnfrK9GTaeXMUtdhiA7hBQckErWZK3B1Pkm6zFskro",
  "key20": "3Vi42UBtoQupD8Fwfi2pWfNtPWkzsP2HrfjiGYYZBH3LiYG5KPPRMXiDp78AVfqaGuLK3tc87d4JBJy1xBg1ftwZ",
  "key21": "5wDg13mLQP49cJj22g8rLd8NX61dBh7a9CRVbenr8bLVdQbjTWfhTthjFzeGMoaLy3Nu2Rp44AThcoTpk7hakB47",
  "key22": "XMTwwCHhUZdwetno97Uqn1HVUNdfsRCZRXXycxkY7Vv1SGHaUvtuCCVju4BQSyH8gN77Nss5EuLnRHayCcXEnEH",
  "key23": "3cCm4JRXwvLFCYNSYcAWxJtNbUpc9uNcoyQz4fPacrn9Gb9DBf2JFRyNp4s8i43qZ2v5cYbtUMvaB3x48g4yCATA",
  "key24": "3x3Vw7RydfoLetmR9VTunc35Axw8zXBb3PcmndAXmAfhmCSRHEvtF2Axv7jeAgFYbcZTD84PMQQjQnQxuBsZbFjK",
  "key25": "2gBrRacUrErmPm44EWMAkKkm6MwNuLo2C9MMcNKY1o7SbinsXwLfQadQqhSUWQyPHfLcGG2K5JeFqAq2omMjpWoA",
  "key26": "3WMoBp5FJWLWePqX2ZgfQjKuEhTyjEwx1YJdaKZtbLqyXBZ3r25R837GVzLXPycQ4z2sUfRpYSxvgAJWiW1p8Rdd",
  "key27": "21vRu9wRNqovxC4XB7c64Rw7N5EEdTMkbBSbsjGvceHtw7fHQcDihyWZhAN8Lqh9AWVUy5KwVSVaSrVsr2uZqPnu",
  "key28": "2qEa82Gd3o5582XmMWirUj6PWCa1ANPFtEhaHGYiKVrZbP5yiRPfjjYsGRpXcsmAL6yYCmsMAD3dzUiS8zVw5vjy",
  "key29": "aSJ3bEjwraUXwVHuijwJdLMhECEJCR4sx9Qo1AwxmxYkBZ4if3xEKV37q7Nbgwsj3MY6zQC6RHkrcsTSYkWTsSW",
  "key30": "4ifWpkoRDwTCZZmXP1NFaMukjb6f7rvPUVL1dmWweqJ9KqnqxJnyxwD4CZAtbG6t7DhbnAZhndziMvo6sJDsEJ5c",
  "key31": "iYhdVFxn8PWVfYq1NBpedy3ZMGF1mjrPxsa7BHBcDy45J1aWQERUptBnF1bQxX5SjnGwXvjpK1d5ZUgD6mAuX1L",
  "key32": "4bb6uMqRVqAyj2gk8KTZSXpkmXwR3n3mairZBerJYt38GZZRy2dkTLFMgdqmAepDb4kbsGGT2TXgbhEevedtxwAN",
  "key33": "2tzM8TUqPftB2w9KGcpSQ8mJTAwnLDwhQyAwkoMHAibzXWX6DHCSyUMTpvuLmoNCiL2SowgKLMLKNuVt4NjTNCNN",
  "key34": "4DWmeiyDb7568n8dKLmUjD52UfGF81yXZHi6y5pRW3CNtnxQeEPhLCoWKr3AnkbRDhU7GnrNvn7UYDt4hmBQmyju",
  "key35": "3i5KfRMZs7j2phoPVNcZr1UjoRZ4i6gsBsm1Yy76L3WEUG5jmgCH8oryXQMUuTaSzBkNhU1seMW1Hjt3waie9FqN",
  "key36": "5NpbMajEFqunHEFV67H8zxNXWvwLKk9dy5ai2bVZPurKqhiGC4m1zEw45sDGsqUUGHmoM9kd1fmKnegAT7oUDwe8",
  "key37": "3Vz7fB9srAShL2H2njyqHMnsGk6uBQMgRCUQ6Ao6pmpqpXqT7cobX9V7ChLqJLSWgt7kxC9X9NGEfpMh9eBoivz7",
  "key38": "5uS643p8u8Fpw3CqG4pfq1XKQAtpd9nZo7GA7b2vLBxZJaX1Gnrzb1UwABM7HWgV5myCbdvfexbs4Kio86MbaUPF",
  "key39": "4kHZjGuSjGUpi8eRdTpTrXCodPNKpJAHCrkR9Rwu2aqvsxoq7yYZhbMi6FQZhzL671uJWKfv7XHeZtcc5rwZ1Nnf",
  "key40": "2LmZcyNViPVpcLWoasymhCL83dTz2LbXaWAWjmg3BLPgUJwuNaCe6Y3ByePXNAc3UUNBMCiKkTUmP4mq7ATrc5bu",
  "key41": "3dKWucj5BZKWNh7vSeZB7m2gbsnPNXjnaX3vCMABKhDHWtc5jo34FnT8iLmHRgmn9NmGGWjyY8ciawz3A4px2eXw",
  "key42": "4yxao5PqKEpRs5Lrk225PbScs86fKTTViVb2efPqdZEF4SRNNw2KZyUWnTNLp2MXKvonSn63Fijrzv2L8NFLd1KG",
  "key43": "3wzQXr7vp62Hd3yMDfqASq6J7XNKJDxiLsyq3M4JqUNE1irFiU4xdWcqtXFC6CNfqpmXmwTDkuexZMMLKdsJ7m4u",
  "key44": "64K6MzU2MamredvsAZcadSqBiWcRa4KNuqPq46xCbkkDJ8GkwC8cT87zSf7kYASH5hJfBVufbhBnaJ2x9KYvaaq7",
  "key45": "3QSfZn5pR97T1p2B8oZXjHubfVeD3FyMq92nM7WGU54BTsf4QWHQ4huLUvsPw2VNvqXZFG54hGd9o9php3f3KG3U",
  "key46": "5HZFPkUSFntWA6YVbf2eX1UWrMWyBLatQofbdKzUmVxXZBqiDYpSe9esVivbgDCUovXMhB8LU6NWVnmLWKvjkuzb",
  "key47": "2jVJqSnpeNUhk2M2XemZHip8GgPSqfaUQWmMZUSgwDZLBRhMCMZ9SqAtJ4mdjVSjbcpLeyXbLkRBAhj8hu51K5cr",
  "key48": "ytKG5Lv1KDHYoCeiBdE2ZrhkUKcdeioKXcpoypYvtJTBtb9mx5QzZQp7FSK12FrVsVXyf9vR7AAL3J2BieuzS5Y"
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
