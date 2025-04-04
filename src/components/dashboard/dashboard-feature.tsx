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
    "2QDFdtBo4yw6Wq5LpUx13p8gKrP2y5XfbR6dmiGx685B3GZFn3pZZi7tJRAWfkaecXnXWQAdYxCkXi7Pcq3Qh2vp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DcmPZiikTEtF4iS7Ti5XyYjGHw9B8QL7E16JjRMtefRaG97bPk6h4jj48TeoscCHFmNByaSwFvbJsF6fB97TtkW",
  "key1": "5NGXHQeDs9msjgzaQuWx6pQLqUKVw3vR5E9qDJ3rv8bg3ntgLf7dr5sTKF2AWTxG2NsZWMoyQQb1EDhdgEg9ikk3",
  "key2": "GuLyA9LG1AtkTRF97JhddsQYD8W41RqEavgaMA2ryAbUxZoP6d8U4xSD1DXyUT6GjD91jENBYdN1e32AwbE4FJb",
  "key3": "xSxXb7QyA3Wq3AZKfYq41xV93ZpRHg5z7eweJ6N3xjnpPSTtzjae1xs2eZ9Ko3nnv868B6DR8P6orq99JqANjEH",
  "key4": "4wNmyJtroR5sQpYns6ik3GS1N5GytfQdXdKWtNVsyzW89Gc4ttaZXtnDQDVYUpd7yZdSFjYe1hqmaHoYPGsfkRXg",
  "key5": "af2XKkgDE8TWgMCqKnctSGY94ndioSEuVXsXSqdzkCmuPB6i4umKc95Dr5EKtLYbsEUU2TWaUQPe9n15LKqjaHy",
  "key6": "3KCe2vUEKRBbUGqRYf7P65zdQtPmm4Q9S4dYrSJyxfSnUGcFXTt77vvJYtyxfRmLBqv3Atq1TSyAGhvc6CnhK1b5",
  "key7": "5FN1HhcT7eRGf2K9KP1Y4dXrgXgyuXXwYRRvqZqd7JdKBewRrnRLf6QVyRGGMkvZoYijypK3mwU1ZMHEGm3baASz",
  "key8": "3QnXWXMB6fSAiWbEgXCkdTQm3meCi5ux5DeTbGso1bSPfbHB3bDNghfFknfzw64WfGhDftjtySd74mHhAj3GPi5E",
  "key9": "ksJ9TkAEsytRdMiCXfze8j8bwdZc7NjmNcFGriLSDGQN7dEeB7kpRB9ibUPaLqYuAGuEu8DrPBBRyuw71uuU4gV",
  "key10": "3pYPDM6xsP67a71g7hWExBT2J3HvjctG8vgpssrNtiSQa3Mjpygj3d5BPHwQtpC1vjrKtnaBQToMULUkk9jW1PDt",
  "key11": "49sLGucKhrEjnnUYknpMXN1S1NjtTKhQxtN38CdUAUvXd5pUyQVUN77a2xJUT7U4g7K5MzpJzHyNTy3Zt9nFFCLL",
  "key12": "2uhoRehD6jyMiyR2pU8CX6WYbJA4FDC7xRD8BfPmqSMNHUJ7QGXCZaLFthqwe7pHYvQjCgwCkZ7HtPKCNU8vZYyn",
  "key13": "4gD2FGs45WNRLjozHdgSNVknqt7P2ZSrFFbNxhXwAigKCjT43ZSDofANhKQpgquQV7KeQ6ebuzXAYJ2nLjTR33Tv",
  "key14": "tk2fki69XF8zsyo6m9tgwP5j7a7bqsse2GjAqbsCCCQuvCd9YEQcbQfXVboG86qn2aQfhvdZjHmpQuQvx3CSggH",
  "key15": "4kK24NBgy8oEEMFXrcRWKjHWsAzQgydbhdigaqCoEGAGPWgezLC1kjj9kZ3Gc466F9hMHGmVqrCu6XLhbyxCFGRe",
  "key16": "46hqeNMZqQKsEimagHeW97b9LJU9EAZca9wTGx3CpC2RZoTU4xLMUsFSoZ2Q1W7JEopg4iSR7GPKtSF9uFZr4PDL",
  "key17": "BYUnd3ump4sgejMXJQud6DMSq62FynjmTz9kVzXxRtHpYJHktLKDVuxU2P8fDa4Lh7hvc9C1n5HxZADWyc8adHT",
  "key18": "4UeTwuCbHCXbEokj4NHBtzM2p9xZYwHgwAc1d81tphSHShtBGHCDHQzAWssnoPPzZm6J7kvt5jyXLWdr7uwPAx7",
  "key19": "5uZGN652i7W88AdCZibjdmLkv4HWTRoAaHa2koo6eF5qiMomPquHYds4q59vQZ2ZCoYEBWjGYZcMaML7RLnUnBdT",
  "key20": "5cHY9aGLmfti89wqnwmRu9eE9B687p6fJ1v7mosmiGZsk83mqxBu7hgTF2CDYDQVKvBBh1MEEfKZJQ3ZgvEjJdcb",
  "key21": "5YmB4dVH1yTLVmWwGfFV5SYyLDkuVfct5qAAjjVijyXkr9qTDzF5Up88hBhDjgHCoktcV3N2nRifoBLLCd4Rymu3",
  "key22": "XxmoLme2vjxHcLgmbQgaobSzbMiHXh8TE64BedU3g8LeYE2pq2KDNwgvVo4e3T1xEBpr8mcM5bHfFrLiCAnHyDq",
  "key23": "4ChPRVzVoBg17RCfVfrAqGVLjTuScw4hvpJB28fux5zQCAKLV7zCAuNDXWPw5TGRN5sJAMD2wN3MbQjQwfszpTYU",
  "key24": "4LenVNAxEb8dKrwmbFJGJ4cWfMkjMKefLBBjz3cdL9iFPjAKRSoWebMQbK7DQcinFMdtCiKSpvCTC61s2mris9BY",
  "key25": "5jxqzUeqKnnVjZQBvzBroXJdskTvGtFbVo8bRNbreAbF3mde3j8MQpsoygxdC49tuAsApaBbYke9ZANEWRCMCPai",
  "key26": "4BQGJxJZxjrKiDPm4hxyysiHmF3Znr7VNr9x2teaVVeUe3RjnwQY44PtV7dDzGQ6yz97PwbrFwnH9rcHPD5GSVnU",
  "key27": "2aR9MpsyghUxJ9DGotnYegL6Z9r7R9sgrj2rwhCXT1E7n2FdtAzwqTpN14BLibkSvN87kFvqK2KgCKLHh4K18r3b",
  "key28": "3z5ezAWnWG68J2CDdDdDrcRhCiJJaq6saTRJ8EoWNwHZNsZLqdbxpSbsZ1h5JXXS4tTk1quxZxyHJgaQik2PPHxN",
  "key29": "5Z7vddRc5kMrxE97qBB1ZhzsdhjmFVEQTH8W7DkQ3otVEqALo48LEsMJub6Mpb9gFTwPu2ZT9eFM56RzLEEPb4C9",
  "key30": "32B9JvzixWePQm8FaTLktAKbQyNqWJSpHioPjSD2aGZg9pFLBs1jgU8BUAN8TzMtD3E1Bac9ugCB2P2Kk8ncv5T6",
  "key31": "4Kyo8hLAcaaNhBkndoue626oY1X7MKaNYpNS6hcz9gB7jqHHxoxjMSFdU8Ui6ruiPYnKsgHeezuxtVW6EBUtJcz",
  "key32": "Es8hsBCgMJLuD7ArSPMEoQgX2dkPVW5ph3YjZ7wGSZzSzzMMcHF2XHGsAAUBno4v527128t38mzQuWUSKN6rg4b",
  "key33": "7kFE8bR1rWE3E386hQ5Zo3x3dgGT99WHZAR8EaHyvcCTNvbFbKLFE6ozzDzvMQCuepCwJz7Ma9wVtdU7Yg586sf",
  "key34": "613okHEYrvbPctxDdMqgfP5Skxz8qTQbdBtYWXbVDsUNTF575vfx7wShGW1J7X9thmPDjTTvSGyRx9zyCGZWqt2H",
  "key35": "pb3Y3YTtp73y4Q1s6bFi2gW35hiJwifCtxBCbhLDJiMZQzDy9JjjWvBmetjTgtpfaSPdeids4NP9LgBSzv2jM36",
  "key36": "4nzFPse4ZvS16L2rmPmgiwniXHi726vmAdYoM6SqnZVi8HjSV2s7TmEiLquBbJDiZQhQSAEeL8S9yg25XnePbRxc"
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
