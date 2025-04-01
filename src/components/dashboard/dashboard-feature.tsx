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
    "57PG8UZm7fwSXnUjPwaSMRdJLB7YK5wDVk5nmLeZrJHDC4TBtLavm6ZJWcrULzMBZuQCLRMWT6rrXbSzJGFCDkqe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nVrhARZcMjRNXaGgRh8qDqXhPTN3zKPsgk7uQaeF7B4zS9TEjC9R8UEnb8RkJy5wLwkeHLTaPwt3GBB4xgaHLVa",
  "key1": "5pZ7HZFP5evgu4w9Wm8FSHaDS4YjJCotZw8FQvM44JWR6fwSBoYacRzJSJZvRK3s7FiGVNmsxv5C4u17Zq3e7Ey6",
  "key2": "ejbL5mDRuwYCMQw2Q6eridDBdDEYULwY9Uso5Lwv94k7QrQLpLKGpx2jAtCc5JmocxpPWYQDVhUUC26RcXQLTa9",
  "key3": "28EfNu2Tq5sDhXEV8keQofDKpcB7YtCqRdNxLA28QfkRgqyPWSGEs63uFzgjZw1fB42vTbcZX3tXUR3ws5N2xa6z",
  "key4": "2Qwt4fdMpMGDSxNDrxNPu4UeduHTCz6sATEMQTQn6f4R1ac3kYxexvXUtk6KoUgZpUsnoyvKKovLipKFx5fomtWH",
  "key5": "5L88tY1dgRMiqc43iFBgq9G94PJV5xaAQXWHBZEZabXqwTXQiL5EhdwfnuBZLs3qEi4Qeuwx8xLvsBWt3NYSzMQQ",
  "key6": "4qgKGvTvfrE42uoPvNUh8smbkpJcc5MwudAnHqsEcToEnNxwdbPYWzHbMFMDSdQ5i45wZPCd6xaZ7B5bD5d6Jbba",
  "key7": "2ZB6WhpAVzc7MMyA3HoohUuvpMMAXLfdKwBAiZzYpWRKLEdeots7jvF75umL8qxL2LMZYyUCTvRdXHeP1kUaoHnY",
  "key8": "F68Mib9FUREL9vcA3f6aGTdTti6c6SRM5i7Yj3JjVYpSyYb6NtrvfjcM3u3gRAhrUgWiGeBupT7Aagf6Eg5K37V",
  "key9": "4c8q3L95stHLJAdk5sXaLZefBTcLxUJuxq3ZnzjmFBHbB5Uem5em9S7HjUi4bhR2MDaCkhJZc8ztMnqkfeFSigbF",
  "key10": "458tf9546qSGASYQpTzt4fCgiaVDAPdyWLhDz1TWxo7qSiK1x9pxoooDWmjSU53ZaFsBy829YQS4zi11rsWRDQDy",
  "key11": "5p1XoCjbHZNdmBnsJQKzvtsuk8F1dPDsHxKfnzFrCBavk1fubD3DmseNdyBFvsVC8ZbGReQCw9ejTK6QcbaqeAcg",
  "key12": "2bzjHUeAYAusVHdoxb2iiEcPkHTvgBhXvmb7Q3MdsL1jQ1aLoehE47BEiW8rXFxEqUf5YSNkD9buzUEews6rYPfw",
  "key13": "2JnwbQBYRmGM6wnbVgv5siWG4uJK1fVopoKK7fbfKc4J8WAnoouQ5w44dbNJ3oe1jW618V9aq3VLAiWaPUm1qRrq",
  "key14": "2YcLYAbugs5sJAV7ufsVUGSWoxmx9uAHkNjqQ2j3MgySfA1y2wyf8mwjWzLwpDbLgTz4xWvVSGA1qjPJXcmKD7Ya",
  "key15": "5ciW6wpNzgG1FGkfgjMfjH8KX7ApVj4xLziysPgWoUReoTgEVHuA4d9AjRDmtRftv2mYkQzkGs4CKjp2Pr2Yihfz",
  "key16": "3bTqgpSs9sy3MUykcE7LdV8B4xxDfuhaXH3zV1CPCD5Mx3NkQP5TA5b4F2J4TCv1Wb5QuTPbXF64UaH6inZscqfh",
  "key17": "2heEZZfxeY1bereChKkmkJZmmQXEMnsEpqxVwD3au7rgBHQBx4Nhg9jhxXh83zF6rfK6mwEbSQy8zohrBRor9mXM",
  "key18": "RHpy1w2tXPYGbpNZTBLievx8NiacxKmRnzFLnAJUxAyD89cPxHQqPFjTXtKAvtm7SieeYUJC7Cz6N8BLHvP5pgw",
  "key19": "45GqJ4YW8dzfkWU2caW9LYmRwPH3ha7QeCytoA2Ffupnq5R8Snr1431mnwkoXDj7S6hK2EBsFueTxjj6mFTQWR9h",
  "key20": "5paqM1Fjfv24btvGE9iMvvn6eKU23jjivYqeJoDo9YLjWjMvPuRW7sTKAgiU5DB6i4a1LiJKVgnQp3pBc99XcCd2",
  "key21": "4vRTj67toajvQ5MK3wCwYz6Q6zZZPA5FghjfGnZYtoRAQq1HyokC2LerJKVzgVcHsqAtzyFnCQaqhT1wezoApu5y",
  "key22": "4Pc8UYhWykTTpCXXVwU1whyHEJzMqBWCqf7a6jxbheqcGiyao8Gv6EH2kFq2sKSQZfXf6F12cBV22VgQ6rogoXzE",
  "key23": "4FxU1zAwAJCaWyYmsxDTgfmeojUYZBmU8BpYKWNy1tPwga2zwqAHjoU5k5VRrGDct3q2SwPrv2BY4KbAa2nYynr2",
  "key24": "zXT1oRsiXvX8bzsKiJbziPaRtfQLRN49oUpXRNLGwGstzKDJ3HoAJhyzq6pChfEX3xqgSNny9mesPGURnhSBpNa",
  "key25": "2KDwudBNCMs2rnwwQMH25vMPq66Rra5nTrnBaqxyGg9Ey47h8Y7sYgY4HbWPyS5RKfhkYEkuL1r9mA7dKoWjMrfY",
  "key26": "542uaAUZnNjxR1Gm77TUSe9fYh6G2APp6gwnp4gz7KSzmKvABBmRXUhy1WErRJE5AisSioyRNgCFrGcfgt4N6qwe",
  "key27": "DxMJB8Mjvrj35NJF9GVWjmBHyUKvCrsLEhQQx9FQw8NCjTq12G45NoBaqdbRDmxtLpKGwTj68VjYmcAvYZwSaxn",
  "key28": "3JpmW1Q9WCmVCEAn3Rgm3PW3QrJJXRMw3VkvS8J5DWtFoRaVTNgYtdm2hW6Lg27np2msitLA1tzi7WLKCSZ2QJS2",
  "key29": "2FEejf8vJyt8JFDtY9mW5npF96aGxNHYSn3ppHaanF1bsvuCG8CGuGnGz2kEjMLWDXPfsW7FDrWRJviihnLa72by",
  "key30": "5Ga2yAG9euHQWyv3PncreGVHDGAQDdernTkPyeoqCffBJfGe41XF5QjiqJoBEwx7rKw9cSb2zF4bhpH7WsBzVdLW",
  "key31": "32rZTN6nwSzdhLmX6netawf8pQVhi3rBNdbtnNHHEj6QriRFk1BWAeaRoVmZPxYepbEacNg5cmHb6EzmK3qLNk94",
  "key32": "3kkyS9YevA26FLaJrYcMxJCdXrNKapshLKspzQ2KkyrDgmkmSeX27aeaxUUGdTp1wY79KkWLbQDSCxArfutejazB",
  "key33": "4QabGgpNKLU2kHXtvnKRcmK552rKT95pMA6mjeVah2ZSwW2NMdJxgR5CTq8RxxVHCz3iGj32VUshK3fpjcU2xnt3",
  "key34": "5J3hDBtK9S96V9TFESGT3rRRp2G2Z7s8yDesLhfHKi3B3yBWtmcqoZKwmb8U7SjDA63SzP97Gg9xBXqT6kcaRigJ",
  "key35": "3Apx9AYJXjzAwuT1uCZJ7QYhTY8ekoDw2r6qs1h9ycoV3Yyhh9mhNpHHC9CBPLoqgPkWXwPb8uP56VatW7K6vCW1",
  "key36": "5ruk93v9RmDwakK5QHoZLjRhKZCPCkbHqGkLkqoNC3uj97XHTS7r1wLwirdjKV5tj8xiAdbwpt7Dua6cjW46kSjq"
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
