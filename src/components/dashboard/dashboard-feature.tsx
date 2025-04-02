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
    "3USMeJLbkJ9tB6tw9eGCFCRRg4LUNU7gLwqabMA3fUYjNd172uqNLpaMP1UnEPAAzu7EZmo7kWMMQ8QT3d7uKJvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xafwpHVw77SksZ3PsE5b1p1NZiTnLnN2gYkhe9guRH8AjKbu5BQ7DjryPT7ZZri4w93FXszHQYK6HVFDZmhF7M7",
  "key1": "geNu4sFZK8aqpQbzvAKgt25Y1ZD6j1MDZHS7pCyJ2BNFfH2MgPjDzM89qQomeieCtdUKJ5MEFHhHdS4YJD3A96v",
  "key2": "3aHPawmmFfiKYxjT3MC5C5VkhCpAcgEt43RTCPB76PgayCYaLMvvE8FBSdThaynbioquG48NVvbqCjCttN615ySW",
  "key3": "2yoRsvUjRFHPgmvf4vivLikuwKcfA1hoUssjhQw8oYiWfnAU47v12E7wWShpHH5hUJfvQ9KxYAaLap5ZEb8iJHSW",
  "key4": "31z7KrX95N5KRkhSmowJvjFqUxKk2DGPZnGPVC5qAUL9ZbJAMMoEoZDwCHPf7bj82eH1apU7EofjkyRGT6z8bMP2",
  "key5": "2XvvxFkSeX8dkXxUyaYsv4e7AxeP1LUNNxnVLHnZ1bf2U1esP7Psx9XEExjcS1sy8bWCj3y292n4kfkVN5Fz2dML",
  "key6": "UdCyjhNjFiypdeqGoe5QeKgv8dpvH1JeyJfbPb4cHoCPuLKZ6nZLw4PXP8AfBHDZnp85YHUFuYWjN5vviFiWnMb",
  "key7": "ncdYqqMPcVv7Mkk2CAY1McgcKWD3qmuwZjMfyPcmuycsY3JGXJ99RS4uW3ZwCjWs8E3m1Q8X4y89t7edHb6Bkw7",
  "key8": "2M7Y1yvYJtgQPb6y9gJQa4z6KLNTGMstR1Pbhw6u7Mfmud5xbg4cFxhupGE998Z3aMQ8FTkvy4Yx2yHr3Jg6auJo",
  "key9": "2itCnQzkd4UwRuYsCMx2nYZJ5M7vdGhGBdhExNm5GR5wkPqu4yNuFqxFq1kaZHxhh6DddXRFfmN2fhBv1q9HxF3L",
  "key10": "5X87LmgrNEGcdsihpzZrGzPdGwhgDqC4JSN2ht6MV4jn43ULhBqarJndg6dg6SDxpqkGEYW5SB5Loi2g95SxJDgh",
  "key11": "BhyHkeNGATeQuBzV3PpiLYwbrvqGAZAhz7tq1CKrf2oZ1YMEi9bRqCuQhwTLhhCncQwKofvGfw12Fo7bvDZmcxq",
  "key12": "63ZVNuRzYid4bbPNPsFekqMKuon11FKYPFHixJxn8ecetXfYP2YaLFfLWU5aGMKxp9QrkrRJoHwxhFviEk3io7yz",
  "key13": "5a8Uz3fVjBtmRs6ykSpERbZjD1tTufKB43DUj9qrdA4k1cgy1YYs6wp8UJJG9rXtYRM6p4vSt35fxXU77jTadjK2",
  "key14": "4zBcgBToa1b2YjFNQTcgeCsCR1q5VaqxzAgZbVLbGdQDgRicUkP5ePdePTy5VEucLRhQyemA7v8bpq9yQhwW1bX7",
  "key15": "4bVxdzNU4vtC3NvmcVJTVedhvDDhRDUWoSUuDruXv53t42cJMXGuSHqSiQcgXFES7RLSjZQtpazfnAvjuxYL4HGf",
  "key16": "3gT4WeLaqoMrc8WJykkKHXGC2BgYZoBB1cYHvYFZ56UbmnnPGnMHwjVR3WdJCYdDf54J2hTX24ooiWAjVhVvKqSM",
  "key17": "5aB1MkgSsUi6Ja1HcSNKbTrSghRc5RFYphCy57dW5ad21Sr9H66PL5gqWHGHXdinzTGBvGJLegkSh1XXFV6eCw6i",
  "key18": "3FtNeBWJiLcWJszQKThDkRSzTVhjE8mxorMaxUDhNL5ZzEUgE5pfqzEZRDBjEtZZp5HgQArsd7UQxKu1S9EroJKQ",
  "key19": "42dgR1Rz6yEXgZekFrwt4jZvoLg9xw1ok1caLURB6jF6DVVpCk442DJ64DwdEomNjwo97sXUKaWquH2eP8u8a2YA",
  "key20": "3RCdeYzg5wsTGDoj5eREJZXbuko9GUc2hypX6e9UAKCB8b8DWwMepKm6J89PKWwUkad1G3J9rSZRGrHr5NBJmSYr",
  "key21": "q8rrWD52D6nT55w9Lnm487UDjQiSxPuvAS1QYEcKyzikQXDr9sAFR3eP8ywwphuKhJYfgYjSMBebKZDDGWC5io1",
  "key22": "4XvcbRi8P6GRGNkn8kNpa63AaiGrPzp7RqyvzmU6tJk9WnQKEEFx1TEJDEquE76xgDgpjvxFZUTQLt3qWHm7uSpF",
  "key23": "4S8KnzZsC5bMNRYzuseaVjsfxgAoAutiHPpRsjfLuKR6uJT4jg8QXrFqZssGoPuRuKMeYobxrik8KnnVDYM14Znn",
  "key24": "dNxqPGg1WTc86wSmFdrERZxVPpXRcHQarTf8JiNHgK7AZxSTTFgvD3UPqvns1F6oErTrCTaub71YxwZH7rg9vmm",
  "key25": "2iforNHHqPCNcZPScn8ejh86wKdCGhPAZtCd1g7LCA1C1ndmeGXRPbHV6kVZgbMC7AJ3DJXXBtSDQz8TBYKLfWid",
  "key26": "3RNN2mHs1NKzRPwjNjo98hVqTmm5nLhVYxTW18ZhzTyqan6Tammvhjmew7K9GcArLNn7EMKV98cfeKUnGVutpCb1",
  "key27": "5kMSys8TrT8ZWrprJAAbAHffSM28E94D5qJMy268a9gshLgfhiVFBX2shp8rFGJ9TNziXKAPDfCoxpKdvrzK21Uu",
  "key28": "4a7peaLXXb7YHpVntCu2JuYjr6DHXQzkip8kN4sQUxX2YiSHsoYqtruWbAy6k9PHvwfA2sRef3jSe35u1bMgHZJj",
  "key29": "3sxj72LJ7YM1iLxBG5PBonuTVBcoMJ9LRELK2NjW1RJGauVYyG9X4u7qRcTvE68mohXPRWgYrWjXR5ihoBfNap3X",
  "key30": "fGfFZgsBaoPyvnBwGJs21orECjvBxErJr6ZsXu52X9bgwvD7hEy3MkTAKs3kwEHT8UVkt7RDeuAkKALay5bTzJ8",
  "key31": "4Wdwiwe1GYf6Z9N683PRHiSJGXKfj4Re943mo88GYJCdnRMtEk1amXBCyezg92a8UDmW66quzhd9RP1TbHwWzjV4",
  "key32": "5YQc9aUwhyyUzmgHB9No9FMYFYtDf4NefwByQyuUWCKAEWoeVug6hEo3yiSWqQH53a6V5v91GjGZzSzpa6QUXaDe",
  "key33": "3adTn5vJz2c6B5fYF16tWPzEjetTW5juFgwP8DRNeScoRKNCrxZzX93sJYBsqXsq9RdpEU8Mq5RzE5JGL5TRFh5j",
  "key34": "66MGmV3Rpybmo39jcEHc79ecyoGJvUK4C9g6d4gmkeRfU8fFE1BLCS5kZmZvvwKiJhL5265FtbwNx9zU5J3gdi2r",
  "key35": "2v6D61j8Umd15DVCBZVJtTok2VhBNg4BBvq9D3saZsKSMxt9XKXPxscJoyDatPjgMasj3JKmtqkJDq4p2RezJRgL",
  "key36": "QdTvF7n4iE958W8L3KJAqYS9LPYDK19E1JALXvWraZ7qy9Hqo6PvjrQphsjwzzdUpbHQTu1m7emcfERKk7oSz1L",
  "key37": "5EcxQidMMDxxB4x4io2LhF8Z4gjKqW51UiMsKAuepMMygmuWweFNdB6yGghq98pnNrwYrXXnr72BZnr1WbRnfqwv",
  "key38": "xM8tZQojxyZSUGL27KsLdQFDkscwh4Vhz8hciXZE1g3HE6fCyDLcavjg9o5ZGK1XugEh8r8ifWVFVE33dhd1U3j",
  "key39": "2boWLADMqqcNMb7qfgcfwhUy71s9LNmVdtYaHK8PYC2G11BzrG3dtHS4yENZJWeDGndZ4uAGjGrSqumY5UN7kYMy",
  "key40": "tYzZEU24QuNMH8mKEuCMsoL5bVSZXwS42CECtL7mfpZtHWxvmE81FywtSgDyVXDWb8tvsmuNi9sGQkfBkb6teAJ",
  "key41": "zAfWkJRmLCCNnANeZGCRNC2V9nEmquDYKdUuy3iVQLJENWwytAU2efKWCtZ7y7DgyfJSdC1kYS1pKELWw7vN9Ag",
  "key42": "2cRvoZYqAiHHaM57Lv4g7HndySa5K3KFviSyUgEP44HHqomULM88EiVNs1jwXdkEGZVzccgDc4EbE3iWUwtYEaei",
  "key43": "46Rp5LvZKWuFFduCZph9VN3UpYMsjWKejFAMDQUSHi4PHLYGdSNMQXq5xtRuZ8f1TpiB6byvovGjnVeS623ah1nR"
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
