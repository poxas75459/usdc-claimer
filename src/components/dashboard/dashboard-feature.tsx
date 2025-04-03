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
    "4kf8fUkcsAEXD7zpdjqpEqwfxNNSKEh7sYSRdyZ5mWtN19KdtZd4wefr6Z9zrmJGiL64fs6iMFNLtBirej1itiRP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yARtW2nuUUzMuME32uAFzV2dy647Prz5mMwHmJ3qyGKWuNBjswwgrTf9PKZFgYKDmcJiyu3EC1EdUbyPKCJkKwN",
  "key1": "24C3Xwa86LJHDfNVBa4czCHoorHKfq1vTxBE2cdzVQQCWof9XS3LXJQ5oMp1aX9HwjXrESQZVbXPLApyu5oY9V4Y",
  "key2": "v1MD4hdANaWy9w7B1TBkMfibswFMeDnsE1zugowPYD1PkYc8tHMhMxEg2tkoSdztmZzaJVcezZ2iRHbYB1su58h",
  "key3": "3z26wJnqFmcL7MhCugUcgDB81RwRd8m5UKc1cRBLRiESDc5NFtcBYtGXnmXhhoBJxso4G2nD3ETtha2ohWGH11og",
  "key4": "LXMcbna1soBbDgjTFZuh1XyaVGwB4VtKGvyDYHrwaws26NzSSFzJqjJidU7bWjbXqd8YS7xsn2x7QAZymkuqUsG",
  "key5": "mgxrbeN1TBEaofq2K9TVFJNApNm8DoU2Tb2TtNhsVZ9kFEVpiSi48de51LCHstKqHXhtjkK7ACd7gj9ma7C31dQ",
  "key6": "5KCxSDJWrHKpbdGkRGaPrHQvhUmS1Z7Pdz8BaRKKcLrXXNtaoHtNNLq9hLGojfipLxEEkNn4D5Nq4PgBLpEZgycd",
  "key7": "26XhFEHmSM5WHA5FdGN3TrnBVdZT6B2BKxyXmZJ6YzaqSmADT5GyPBQJE47zAwwtiLomoC8WWaAc4wGqhNBy3r5r",
  "key8": "RqrQ76bvceaCvv1yZYeVDvfXKvWJ3PGN2jpHpcfAUFA2cS2KFTrNAGyEo9rKP2xHi5YaK7c12Kh9HjS6gYGJhkJ",
  "key9": "3TY9tPtJNJdhh4Jq85dQhhLiD8ZaTPGT47GDkS2nEC3mDCZDNxv747UBU2kRSyi4vJGnM33bJcnTJdoGkr2bC2YA",
  "key10": "5VxkNFD6Xqmnqp4uDwLgQr4rT12UwefmVfhLNQWUckFVxCu5Xk38BcuwmXfe6s4WBv92RF8bnP6dMMCafSyBefZ",
  "key11": "PmTBmUBjM6zSGYyTrqpGMeYEQDmyJJwAWQ9SWRagtUVpY31xp4sY5ZeBF3nnqC34E9EJNVQnbzQpnsSJe2nhjHE",
  "key12": "5aHmyL1md5yMR5LDqtni9qRkZBVC6kvR9S9unfhhtXjT7VQGWjDurtCMZCafLPZMrBuSoB6uy19L9wBaczvKMxTv",
  "key13": "2Tau49mMUjMD1ZxDV47tJAqrpjZxYHoxkan2RQ7yrPkwdwxn5yaubuFFBntQAAzXpDC4z9D3kDqVaGz29A7Loaim",
  "key14": "2XDKv4HrNawDXTmMmS3AaZgavAAoT2i8fxja3ZJaiRdxmzyQ25wKXFQMcp3PNBewk8kRDxiLnWs9rvKS68wvpSrF",
  "key15": "DuJcWTZjLcQzXf1mtr6UXRNHsEkCtA4oqTxxFdjyThyPDcfy4eh3s3CVkLevfz58P7WPMhodsjMAW2XRUK2b1cs",
  "key16": "4vdT4iCXmEHghRpDb4rBJYe9eUiMHhffwGmauzYD6kRQZd8b76wV4upth3SP4bf1Rgyo9RmTNEtsyakfEL8BFjyS",
  "key17": "4nbqqB6Yf9bDMC1j5cVNnQHUaWVttXUwui1AY4MhqXzPifgDZGgsyPqcST7WA9BrNQdT6frvetaqXDzM9z2RRxsG",
  "key18": "3dQ4jff3GCvvozkNGEgwZMvE5TTXScXHb3FTm38L8Ne6Wysc78T3pe6ycBPruFjCPbPRNMq1uxXMuHcPNubsXwTu",
  "key19": "5KjsCdaZVNhMag1edA6ACcM112DbGw1QpHR1aZNUTJz1d63R6doFWGGAc1H6p65gWef2ZuCQxC9zrren8w6pXFi4",
  "key20": "p8DFodVKZYzSbkDB9eSjqEatj9PHdLKP2f4dEYY1ji3t9FoX3DsNABdBCNMT3EXJ9FwAeJCiB3jbVYZdgg71S8P",
  "key21": "4CpFYbuZ4XyMx38TFHkeBhwBBLh7FFsyuZcQJdMrT6MvPpfc72iz11fWcS7WXaWEZfXeQF41hAbzmy8JAuK9gSAD",
  "key22": "2C8Ev5UYG8Utin2ffM1bN6EaeidgstUh1oFk7rrzZbj99VpEbS8tg1ReHbQbnrxCoUdGVqgwetPVSYaNK9NBFAVE",
  "key23": "4SDttiawR1YFKqWf4bEW7jWtEk4RtttxL5DwQjTyodacyNj2u2LaKYbqmBRNJnM6qPhyFFhNpuvVdY6DWqTwD3yM",
  "key24": "PcgeLo4BLvBJ65UtnhY6s2re6rHxwCX34hLDWpDDPuBfqmfsq5dtc5L1S12DimhjryukFbYjvuodo6MnjsGPrpx",
  "key25": "3LadWAXqKuz8LQYrUwzxmQQgsPDWY2qMGrGMNau8EuY63bPyVRHv2J9YF5qtTa1bm3zCCe1htC47Vu46qEd2BLz3",
  "key26": "4eUYwBKnLp1GbMjRanzJNArvuTPV7vpYnsWCT9hTXZU5jhLfYLQxVdHuu3DFnszjagfYhkrpdLCQMeFPWk1NSCwj",
  "key27": "2eUAEq61qaFkSQoVSB6hTMDxbYPSR4NqybzPcEiauu3tFbDo5QW17cXeUjzvz9omoBhGcwhfykAX8mfwCLBE68qD",
  "key28": "3cGwQxuLFsj4ctvbDpb4J1Bzf4gev7c7LqLXDdJb8wNXoVX8nL2bxf7tc9eHxZ3WPi3ki6LghGz8ywaRhxDpk5NZ",
  "key29": "5Q8gdX6A7x9Dhfkqz7Gx75vEkkyxnQbcf8kwSMg9cPEBsJYxqMECGCwmeYqtL7fjvjSiLLDgFwyfPtnmj5ZZFRPp",
  "key30": "2pwFG1SmZRQV5UjUZ4T6JLuEbinzr3HDH8JFLK9MpoyZRDsfLehE5wTxAzG8kRYDb5A8JmEFLFGmM45QPKAGFGnF",
  "key31": "59cHw9E32Z7jFRZkLNohQrBL19JnJYKo4sbrXSktyoT71qRH732HbMJDTEtKXX918yekkh5AH9ALveJSSd2jKoaA",
  "key32": "mHTji7wDvokCk4Y58miD86mMC8W9G8p2U1714dVrki6CPdoS4GbgHgMzLyghqiEzHQw52YiV3hpiBYLg7TeBnzQ",
  "key33": "5FQFr2tu31z8zv95Lq3i3RfjAypKVExah4ef4PcFaZHnuHo3Sne8u4xm8RgmjkwMdoA2Pmd4irJHLTroDAsYeHap",
  "key34": "3ofYVx2cTHFnRfbp46LgzVqNBKYPpF1FpdHAw5Ytxvfyiin41vKj3PTma7Man9rtU6WTYE9dm8urjzerkAcxckwr",
  "key35": "61jSCpoyTZU2NMZBpPpAx9rJuXydXHkYV4bEZ8q7YBa38B4yGnNTGcZ7dVfok9Jmm7xRuZmhc3PdK9Av72cYCdBP",
  "key36": "3RbC1dz4e1Z9kgfhNQ69KiYm9R8QTNz47cWsxLCmamHcybqpXViEJ5LiBgwa4BfFiRf1wx3WeqUFrPGeY2wrAkw2",
  "key37": "5mZCe8ij5xwhdyzZC4N6JEWePouy3tFPeqLo2XD3QnLh7Xa4fbuMajPSLxBLBTKbbRbm8U8t32B4HSVSdnYexmRK",
  "key38": "4mkzVNSiEYKpBcKH5azrMhAYo2FosgxYxNwdWg3oFJEWkaiq8wU4nfGtFrsNCu6tL1rHxorZhGrU9NSWpoaaPEc2",
  "key39": "UbyeVYEbKgYHZA7NHGvKpbDCy2yS5Ceq6PJ1SwbDsh1BG3ixkV5kh6NhzBeUtJVMjqc1hPC8HZQySrsbu7Js2Zf",
  "key40": "46kPk2PSwz9LHtcquREJmiWD4oEqTUEsTaPEpeVBKDPcaAbF2X5JV7X2fV1zXw4R1FLtiiFjCJdnjtQGNbTNbtW1",
  "key41": "3zhgv5iVwAPfH2HRbRqP3DLTZaqfShoVzHy3H3Tr837k5RGk2v1pt9t5J1foURhgCvNZvodojjjYZh7D6ToeQBpR",
  "key42": "cvPYyMZrFrnKtym9bnwAKCkHksKeSZypd7RmkcQa1h5Bp94TsjunuqipvFPu9Rrn1yNtF43tpP4aYBtpJdXJTJG",
  "key43": "3AVy4cfde4wXzAEeRYqh3a2FzM76GGSMeFDfPxWNtetkxJESrK3EddM3qJrZRhefywf7wYyMp4FeN48WtF38xDT6"
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
