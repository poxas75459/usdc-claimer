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
    "xajS9uLQERX8w4hcoMYkEfoU7ayPL8bSJrHjCFxg3EzM1isqVewKC6Q2CZJ7dSHmNar2uQWZU7KTpZrnw3JF47H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25Ax41fuJHdp3Tkoz5edz6jpwVUHX1eSLL9bde7y4spJY9n6yyv8fZmj3FVg53r59CFEu9aJ4zxvU9SvCY7oem8Y",
  "key1": "23FDfVznnzjWwyLfDgnU6abJy5WJbWCqPpQmuQjAfwWKKeMUFubsAxcGu3wadHJrWMubNaNzwdjMyoTY7bwHev1G",
  "key2": "3k99amSezVQCMv5rqbkVhhQz1N3Vksbqgpv7pd4y2DDn8KDTPkwDqeTisYGUbzFHd4cSbMJroH37mSPGTkWph2Ly",
  "key3": "218L3KiKm6txH2LNmZaJnhWZ9mUiMRJWAUSegFnSZGHGEUxLivsZyCvsW45NrTkN7VKB5sxmfXHWAaccYxDDgLVZ",
  "key4": "5DYXUPKo9c5L6Z5Ng9H7TKaBKBfaRnKL8Q1pL1DHeZQWEZBodgHed5PgD4ip2WkBGs8HKNWLFbtFwf8i7Efi3efj",
  "key5": "3bsxNvfv7mJFuLcdS4p6NoredzYS3K2ufFofN1nCChZEXuGRzmZmL3CvQJ1X3DH2ZuSkXq6878v338k4dumTANo7",
  "key6": "uGeeR9H5FuyawF6cT4AGXhtNKFZgNjq6jX2nS6LqLYjEVxuondLp7HvGEEyaYUAwJL1jcVRfAkqeyVHqRgKHKhh",
  "key7": "32eX764jj3Gmbj3rUqLWj4MK7Uae1G2DhAmayBDoeE5Rns3hWxSnk3yn6QnoP7y6nm3JwkadYTMKaZSqwfAKKLez",
  "key8": "2ETyDHVfJm8jbFxwbMdEvamS85QtE6NrutM2SHfbsBJoPvSLaQuyhm8djZXCLt8HgXKsDxYNGZPpCSyStgCMdkiL",
  "key9": "DsYVg6xgWTpTZWJSvDXiNL1RmHSGChsztVybhpt3ndm3rtYTAdRanCawBQ1mZhYPmyTHVtMxiNSDeSRqnwGeB4w",
  "key10": "JHfP4YBuBz7iNnEsnrfegajCnerLhJbNYvCr8ZsL3BG5maf4iG6wbmVEVJyokxJdqDZKoEGmUYa5f5MsM8v5tfr",
  "key11": "bdeRVJzsXu3Reh1h698f9u4ZLZXfMqi1VbMBcvDcSo4UALy6VuqAee4AZ65hESDReGzMNP1VKVmQuJN1Sc86UZQ",
  "key12": "4a6GUd2QLH4u4MSZneEeho45F1NcN8fnprJnFvhu7bwMJLsxutoVjKem6X7WXWhieayPvrFTpDx9ychQ5pqPSYYa",
  "key13": "3JxNK3EM8zJBpvarii4VYuwaoP72UbsSEA7ot8eeFBSZEUQPNig2TqSSTx8NsA35UnHjLTSTZqMdVARt1Z6j38rg",
  "key14": "2tUQsakLQkaYxRB4MEA9h5KuvL8KaNUxSmjn3j1TGtTSPyrJvrfcWYjcW3JmG1MJAQHgDdCr8xqdDCMvZiR4EEvT",
  "key15": "5DVJvPG412bpAh4gDTJbRrhS2dRGG96mLg5GCZYsxaNd6SQbLwxMgVr26mxrGeiWYysyvXdFqf36k7AFPbD2HW4Q",
  "key16": "2j9McFUxBBkPeY4meVTAZ9soSH9HZGVAevEra1WCorpjCiprvNFr568VbtjTKP63TJDHQtjLk3JTXUxWpQpFASCp",
  "key17": "121TTuAwixPLzD3ATJ27GDNHAjotvtofpxqLqebdpqDmkKBPiyVr5DBoMnXaJ6kq6JWrKdVaAo55pR56gEwvwPAv",
  "key18": "xp8MNbtXPQQWnd4xgT6VoMdy4G8vGQZEV4FJyirEWX8AUrwu41mF2fbMgXFB2GNn6bUYVnghJUpqm7zLo724BgR",
  "key19": "5BzzKHDRnYZKRC2ewnp46G9tneAMMrdjkdNmQiwRPU7X8rix4xJzPPjk7wpBmR5abg54Q6HQqbMXxkDGYDYqheZ7",
  "key20": "YcrYpimWJvMSR5vTPEjrT4Fmvega2PXWscJPZzmPoKd5PSr26D26ZMyex2vgHoEAFwKXoKztgVCdS9NNGHaWQ7F",
  "key21": "45VbUHWWrLAuM3SyeJd1pgfSgBKhg8ZqVqpHJvDyVMBbiMcGfgzqsjYESXZry2kZJ7CM5vAhiAnx5cFwVbNvQR5a",
  "key22": "5H1j4YKQZuBypz9Fw5NPEvfaWshAg1LrLHd1RjGSgbrjirzZguG1BztrGg1eCwKmDcR3YLJfyN3W7aDf7AMRh2Fw",
  "key23": "5C6gim7emKdzg6W3sTZYvKNuZ9f4ATtB21BJxb8iaqLm2K59UBGvYWJ1FGoj6WR6H7LT634JQLRP1D2g4mq3L72X",
  "key24": "5UiJgh7SMaomBXE5Z5LkaA7svZiEdMV64ahVuhS7rbUcK5h9M8tuVmcd6UsZW2WJDrbAR5c8YQyeMw2EcgFgeNYG",
  "key25": "39BEB6GePEzrrLmX7XyRZn2TkABoH2awG4UEoqUkPFDAPyQo4553PYEqg23NbezLvFctvm6hjJptToWJxEgnLXv3",
  "key26": "3SCEUg37BJKBDM3DqEKzwdTNqammp64JDjyog5w5hVMqkEVFY9yXDsp1eh9w2twVGDqLmNtFg4SQwtjzAFGSvsjF",
  "key27": "3U3EotP6pTQ8iT9GmUsqRUYYtDqVhFy4v4Jbcn4qDCirWEh1sRFKTq43FSFd5wXZrzGEXR1UZQLWjdePwNdSbpXo",
  "key28": "WLZ8X9xfKSZjchtn27SfwUYdyBkusK6YKEUXVscwinJWFoUuWUn3HmjR7RWtQwiVycrk8rdPNUuZTAWq9abmafM",
  "key29": "B9XAEAnjyWgxhTLfQgCLTQH8daSNjhfg4wGFMe4DYtoRBMy64Ahr4ovFKtD5wotLxCKdY3nhcGxt6tfiRWHLDuS",
  "key30": "4o8WLa9kvwiyzwndNGHUUKVBE4obmz9jVWosvXcYNj7YNGuSQdGMdkiV5t2D2TipuHbCr1V7M3DaonjNZhbYwArL",
  "key31": "3K66wvhrw39iAiH4JzoTpoX52ZWeNEcXsKZ1oUDrguLRpCr2cDDbSG8ibypAMHezeajSCYTQAoKX2858DmTwwbQo",
  "key32": "5sVu9aiyMCcgymzAu9c8VHTfx5ZT1Msi21y93rzjfbo677SS7uA6PPiYxXoTNQmBhXAai1TdLKtNR3TbvhygXNny",
  "key33": "2hLEG2go6hCxmACKo3gpmHsqV5Z28A5Qe4gLp83fmVdMBEZfGKeyfe5PzodbnRAq1HGfZUTkDvasT7yx58jcCmtS",
  "key34": "3N2rfVmnjdn86pZjazzDUFZWTivAwzYhCy4EPArJvY6HSVLQosfM2yHAeGCJoUmeE4hujCy7KWgvwiMCihdgCuFv",
  "key35": "DJDBcGZLmiMowuHM4JfSHPH7xGMtfg7eYEermYwNuPPqmDPXMeYz6zeawm97Ftzqj93ciGauiftqrNEmGuFyuYU",
  "key36": "4KtstBFNHuUS9PeGfvGq7dZ7WU18GE2o8ENgAmMRwuusiwLtNoLK2dTqSiV23MEpSwi3XH5eTmvF7KAwHv7Xg35s",
  "key37": "5fwSFJ8NnUYTyaEu5DwrUJDjfGADbmu3e8uScLfqYDLq8jcACMnZPUW5xs863wTxa3dH7FrS1c8HaCLX9gAt7icn",
  "key38": "NPBLn3YtyvxvgUsxshy4yoFkKFTsb6XHJFW2tBtpkguaJe66YhC3esnmbvFxVrtEA1Ssi4Nc9sXxpNnSZATNpXP",
  "key39": "4VaGcDuM9FgB6yCLakC6APKc5xZGFDGXp9X2mP5HsWJAogvJfY2MbPtxBiataE8RbKrpfWcpTnW7FJkAnjSh6njf",
  "key40": "2Cf4a4AL3cywRy9wf45FWZyaNyHSCJiJkzRPMvDJHRwKHmgqX7XRAD2AZkuhYkjBaniHPYMkC1jVhXPcNfubBy21",
  "key41": "4dM9kvMwWD3G6dZ7ZEs5yxhAFJMxjdjmMko5ZEwp9caWEpmgBBLuVLEivHC45q29ZA9aB4JU6p2qsjwhb8j6Hknq",
  "key42": "2vFcrAjC2v71BLosmjTmBUaThjteZjN3RdpB1rvWgZyJJJ8gfD7VnsXVv3vJe5xCFFTL5D6YZbfB94Nvtnb17ecG"
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
