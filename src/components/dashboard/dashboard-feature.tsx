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
    "2X5aJz45PKC7YqHCUEYZwdrunHUSQXhWtdj61AgmmtNmpUAVEyirxpybtTuvechVNs8BL8LCNTfa3yvcSxW82EJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ucTMyjAhmrbC2FotAkjHxo5MuvRRpgcmfEuDpcshcReQNKKH6gkPPaNREKabkckA32ijQVMmSgXwySMQ9ejWSHj",
  "key1": "4Shte3tRJuxPY4vYDtxHmTVcKaR1mLCjgYqThRriRWsGp4hdqY6ssH5XwNCJEUcqQfUXCCgPLD5Sb7vErWhpZ4ad",
  "key2": "3cPBprzqpbGyPfJ9nABV6KgDX15EMKQwxPhB2fQ4ypzbPjDYyRjRMMnoi857KDYskd4JdWuP4pserfiT6JDxNk6E",
  "key3": "2awmfp7dBGcoWivxLd1HrsLJhuiXPPQBw7xFtZynE5WSRH4SQHm5hz7um9Tn8EGw824nkGNT5vLW1PU3UUVjeSdK",
  "key4": "4q864wbj3ScyRcnrQKA5es6iLs3U4btts7CVBFbnWAn4zMZX4JU7jxiu2kvFJmKtsBHLpXTWg8jYwLqboP99XcJM",
  "key5": "21BQnduG3sGznApdtjF5XrJCy2EsKb5kickNg3NPUQusxusTaez93C6YxnEjR2MFpgtf7GoQrkyuKnxRZhTBkUqk",
  "key6": "is16YuMrZpn4jQrhD7GKnFUyxwZxQbSrnBhEcogCLEjSoRZBW4ym4ymNicX2sYjVhq2UH99vmeR2soYVFFMzMjN",
  "key7": "iTqmqrR7Asr6tKZVv4sjw1Ld1J6gxhMG7p9ma2WWancv2azPiDdWvKwGaUkQpVB9954PoWvGKxariRXeXPoa4cS",
  "key8": "5nrtA6YsGaWoVghMoL92oncrFzfjEYBB1K5DfHvkAGJHZcW6Jkic9yajTE3dtyY76PqTEJZkuNZhqZpVWprxf4au",
  "key9": "2BkuVURtQ392h7ahfX25e5ztRTPPxiR8b1VZK1yA8pFxhkgevpDXtqNkE9QU4PK3ajD1eB5wPnJG5VwEBigZYwZU",
  "key10": "2EUVazuPr8P6eadss23AVVquFCceavBT3ss9uTyaLCfXAFEyMoWpdceHqmifTBv3R3RtMitA9WTrb54TohWKbZuu",
  "key11": "67iT165GBEJeKU3yqXvqL7Z91W5nsHnKMmd9KenMFoduKkgCM5PuFpomCyNQucZo6t9cJX2W3MfjMKAUQ4oriPPH",
  "key12": "2dGwJh79emXdJh17ja6YMw8v9LYBwd6axZkcNdbqoJU41j39ixU3X4ZCyTqaqU1nZfVjnDN1MwhzzVjKrMeyQk8W",
  "key13": "2H6RqivZ3StiQw3dsPxjVESNwPEkPb9TzoHJvFuirE7YAh4YkTGN7FotizEr54j22zfeaJvWgzqPLLiwVRMsnPJ4",
  "key14": "5VjkvdzAJGYoAtfMbNTGZ3VcBbRAHXSHec6fPVLLcUC44cvaPKXzWkTf8UhdAXdKJ627dhvKvsggGGzthL88bTRS",
  "key15": "34TbAnABNZ47BGirEtDRwRYN3dY3fRY92QagMy8yU2cq5XdAkXXchCRh1x9zE8EDDmJnMebJUYpq4tnM1sukp98Y",
  "key16": "2XQ5JPMJ5CHXJ2bcz7Bwfytck7FxswDtSFPyxYDqeruY4uHXnHPd1wWdNFaoioiLVCMqo35BhTUiEZzPWyaA1EN5",
  "key17": "4m1Pn1tW73v1nAcZjJczo41kXUoeFwaPoDAyyBYbo2K6QZpYd4CfPk75bXfywuAzb92s9uwfb5JooYb2de1hv437",
  "key18": "8psKJ8yD2i8FLefE5gozZUXBth33NPvY8xgBK83S8PYhN9jyUiDDZaYKR29vHuvUhbizfzXipArj9HEgDnpeKge",
  "key19": "2gpSYGn33aHc3TtrXb3GXrtVxnGRXps33b8EXdF7N4bFi9em2H7gnBA9NDLHr6M88dRcfEbDQ7Hr68gu6CQnWeCv",
  "key20": "3X6vgjCkYDc8SvHF6F5fkia3dXZZvRSRinHJyCiVoNcSgKmu8yBmKKoLrNjvQhk5DKyXomcyy24C4TBkGzMC4ToT",
  "key21": "2Mgx44gSVvqefskfB8dkStWWuvLN9Y4gFyVbnf7ATXf3ccbtG7vWsbC5WkDiNiwQmR6rXzACwGHgMAMHfStYFxwf",
  "key22": "2NHQzecoz32Q851S964LUmZBbmHK1veKoG47gJ7qRrk6xjSsBqWCrsCwQkgAxcJafJCg8dPMVhp1pdRh9Ey9aFko",
  "key23": "2wWygPshJjptiFquoirj7mEWdGbMv9Z5TTx3i5wKfPwm6tGkg3FFW85MERHmG3DYsxHpYqcuSgxRbPwcXdbn9fiE",
  "key24": "2zn3jcY1gozK4aV57VjvrkjrwvRdF9Di3qMcu4mqiTH9HZhhhevfX7BDqspvuxHnFyijYt3QzBLbt8tMnvjtN7Jw",
  "key25": "49zNb6XbeLCga5L72Av4acamy7Q4eTANgSttE2C3xVbwoBdKaKtmNQ6NCzW1P4j8bSbYsTQsVUBcAGwBeERryU2g",
  "key26": "5SvqWCtKRYN2D3P6wWoJzYZ6aWdw4Kr1NSQ6PCvC6GDbzGSNMomGkPwneDScEDvYxKrPMNCobwWCCMiX2SRkSSqs",
  "key27": "3WLdagPgeMpNT6T22bnouJ6a2kjJdoL2ATj71tMGg7vSSLxQaJWNX8VYcjWax6KygGubwhHKeD7wnavbbsdhHnNz",
  "key28": "3rXodsBZBLH5UFYzm9Tzmdn377ors4GzVpDq7wysyPYvycxxJmAvUXUXLW3g6TSibnqRYVNQTWRmkG2nwX5DRLtc",
  "key29": "4xyBtGbtAXDHUpMHNL2AA68nktGF1b8QzQcoehRgg1rbN2zfV8AG9P3TqcRqbwtav4ueGEmUKGtExkYo1tcDgbWx",
  "key30": "5P7PJKZ8fiMWCuo1TGo7jzbbVnjYJhNTcB4f2jKUUimKAsfTVwkjavBUJ9Y2b3apweR4gr5QHXDjAMZ9B4vRyFXe",
  "key31": "EgVwwUdyo8mBNKRntsnJq4RHR5wA9EGMrkFazVpbYZKouZMXGsxSGX3KN6TdSyWkdLe2fSyMFEjpNbgUQkicgnN",
  "key32": "VjX4wQB7GWjtbeUcJUEuGNPNvYZDyfAWHBzoVBXed1h9v18YAdnsapGevyTQFjBKurewrEfWBgZ51ScvQ4vqQJF",
  "key33": "5URdQu8oDAGXuSUuNXS5nYs3ecG2E3qx4N7GVpnvbt7tgE8K59huHjxMQ1pi6on2g6Z1iY7yELozWF2DLQVcWpbY",
  "key34": "5aVRG2D97BNU2meiCS2CiU1jqDBQUzUwKDt6jX6G6ufbyGsLYpV7zHvk23GhqPPMuzG2GGyDBa9ddDBwb2ZcSoVA",
  "key35": "67PsmCaAYD8kXdvrdF2Me6ZLPUtU85kDdo41cSZQFgh1H6H46iEYf8J4c2irBfnNB49LyGsimJJMTMjARLoFSbuh",
  "key36": "t7UxroGgtvBZAhp67nbD46TbmtxdNuN4fEcycsbcrJAGCEP8gMFWi3KtR1Wp9NfcEwr4BriSzVbi1T8CZRy5W2u",
  "key37": "2aAbC1snRCHUCydmsDjxv3CCRLxFXt4dNQ623MyuV9sct8EQfKsfbs6qSrvKPRASBP5mQFERznHuvXWr2muRTy3m",
  "key38": "4TdT1n6FwUuU4ttGu5x4yL1HREWVJqurBQu5Xm4gPEKQx7HY5bBRYQBQxM2fKsTs3YY3MAwmMjAzisfrdvd6PZtx",
  "key39": "5mmHCDAmd9D4FFcDPEsBg245ewSixBGWTyoaas2o1a6Xt191KgGULF5t7b81WGGDHm4NjkAwGdbgESjmJD8AxrjP",
  "key40": "2fBKLXF3Nmmjh7ausdGdXySawxP5aJJW9hvPxxDU8xMCzBMRMQonfdsjxsqFUoEjcLwJkJrgbh4zG77G4iNGUiZu",
  "key41": "VQS4ok2Ttfv3urqDmZDV4uLNxcZ19Ja9UPP4oSd2LeYKHgS3DCbswFykywRNC9LTaiPUvib6xt43UGT1rCjHATH",
  "key42": "2NgxpVqct5gqdJvJ8tnexX6cYQoAxrwDq1wEkeeMk1159ctYxRheWhVn9J4K31Bwhfn1NSnpE86pNK8NKvzLF7sM",
  "key43": "49aAhD48UMdKfXyaqxZgfS22huoz3cQziuQnDc4A7oS5qGjjeeaGibFz5ofHoXXdyo69VFEBbx2FVCPvg34R7yVj",
  "key44": "3C3VHwtjAKdrw3R6S3FNyajnuqw7QcZwW7moRBowWV7WSF6vgqVdCttW5dkmBkDyhwqCvqzLKZtZDvRCr1kavTCW",
  "key45": "VNtGBWeP4YnaJwBBBTM3FYdn8tLV7zWyJeiFqs2TH4woN7w76twcRnstZiRcxHj5r6SAoQqhagYTzRbcT6kbQ8R",
  "key46": "5d1Vnu8H3Qwiuzy8jZDNGvK43WUDHg57u1is6q4kj4nMfYdB8xtFXHja6gQDgP7qmVRHdcbiMJkufDdMkDoG1AoN",
  "key47": "rGDUeAfZvvFokxjYWWpNjScw6QdS9ypHVhXoEqcAkvrj72wDHPcypQJ79dbEoztoXDRYM1EnPA3dzQmbs1Vea7v",
  "key48": "4JfNdUNmVHjmPuDs3w5Cg9dmJrwC3dp9esFEWX6na5jhY4GR5Y1eeyvdcvmN34MKkTBVV9DQEtnXFQJA5TPQD9cF",
  "key49": "4cTY3Yo1QYb2nyuCcoybgLD4DWNJnQ2MKbzy1XxjAY8a2mu7q4L6YuCxJfrjQ3AAkcoKgqpiNSEckLW2EhV4BW15"
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
