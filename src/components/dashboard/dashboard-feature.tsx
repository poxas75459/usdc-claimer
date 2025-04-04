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
    "hgQ5LL99zRP4ZdRqVdihbzCB833uHHkNfGXRV61MJpzYGmHDyQpukHeVJRTQCeQ8Tc3jwoYQYwZhsrd8ZHLB65X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K69sxhMtR8n8EzeJcY9d9MAs5Yd5CdcrjEhzsjrytUE6nrXsvcky8RrZiZjLHgY912pLBUMsC87HAq6BH9wFSsi",
  "key1": "29Xu8eTDEBwM3nk8V2etBUPb9AaTQ3Si1PCmmKSEZkEuXrWgpqiKBVGT2TWfyhp1SMeUX6f9M2NpvkxX3uaKQakc",
  "key2": "2YFqCEQmUfZy6xuGzk3LqgEZqy4g2Lt6dqnucSbDhbPN9egm6yR7z8Qdem9YaZ7Gkc9xHHnpRTwqvZvsZEsqHu5H",
  "key3": "2cMkSpRusi4Qt9nq9zvK2jqvCRdmkv2aDq342NLtEUmvfuWWBvfS3UNQ2UESaTPaxJzdiqYo57KTuGVkivs85dnK",
  "key4": "4szExxmRBvfwy6iAf9MEVEt3TVtKRY87Bz2KzZ9gEcawNehRZRJxLJfd2W8eyLPLx2K67oFYq6igFiyLFuPJ2vSP",
  "key5": "SLbVuengGAfMHtn5f2qaF2STAJN8bCWUCb9AHsNDY1ZqGPCTpgwa3DMYZBgBm8GcpHiTnCi6Kpap9PPLDhHeube",
  "key6": "3bj7kKKH5DgmsBFJXJnjbdzei2QbzFooBm8azNDDifUr8zdj4th9yJF1jcwYv6Bm9EQCD8Yeo1P9CfAjVR6HNdWk",
  "key7": "Jok1GEtLQ5KjnB9FuV42EQPxiare95DceHuqkW1G49PsuXXC1knhHcPYYVmM2DqAMJBafQ6Y979dVxsrggxu2Kq",
  "key8": "3tAnCcW99ZvupoMmJJYAozcDuEmqDucA3gywJ5vXKD2uc1fxqSJuZWAYm68FiixQeDhGGi1ZHXeqQuPwCzUmjLKH",
  "key9": "4GiAAnZMzuxLPfVkLLA6AgTkNntugBBvzaSyGWen5xx2uSBKfghbhpFq9TXs3JN66Wn9FsGfDVK8od7B2L1v3J2B",
  "key10": "4vuRVyAnZKky8RLqEkx7BupbCMZQZGRL5W5Bk55scAfmDQJfpe6KizwTjiRbFERV5mfBDsdBQPDci8JxPPW2iNmi",
  "key11": "5HHYxmRV8Nbgzdpw5BkmtwrJSM78Cqw7Zdt5dCG3zrG3LnDfKjxh47EfqLJMDg3g7ZyU6ZFnvNASUyrqx5XVJCka",
  "key12": "4AsZkQ1gWvqoLjh98Bn5eV87thCYX2ovt8dRRgP4GLpSrthadT498F8MAS3ypMp92p81BRtVHJyhWhJNrGjNgjek",
  "key13": "59Ta5b665zPgGAMvj48jvqmmaDJej6X62hMDupNH1dT4Jv88rF54KqVjgFAzACkS6fj9AMdFtVym3kHvE9uTwTYS",
  "key14": "3Ev6uRbHup7hMqw7J92Nz69RHY1ahErmjpwn6AaWJFPQrQ9xmp38EQRkV67AywSo4DotPbXZd6EirtudkPvAkXBL",
  "key15": "3xdGe9AbsmBUArkSEJJTHLKkLT8qZhXu6Uti3cXGohJmDMzWeBhejiF15LJeUQHk49K2WhLqMnK2o9bgDKGYi3aJ",
  "key16": "xqHuLz9WRB5FL5Z8RKD459QrZoyHyPKZhL3YQLnAZLLx9v9rgHBPmS4i3CacHYLGQvAQ5WuB2roHAA4WNDGKkr3",
  "key17": "FDfuTR9rkt5mv87q8be6i54XZJyFtNmtT9WxRgq97gzABmNfz5Hc9ukUQK8WqihQLaXxZkDhERh55komaizF3vP",
  "key18": "5eZ1cDrxTEnQT21WCsqyUkwRa5QYEf6aW93a1EUZLQ7iYE7pGvKDu17qbP3PWX7Z1YiSqPQ3vJDYdLCu76iRCZdT",
  "key19": "4FcMw8fp4e2y6K4idmmc3QmysDQmJhJZXAfpsq21eMQjF6YUoeuirfAxScAfNDwp5yJJWs9SR3s36WwTk2vJFoFo",
  "key20": "4esVtsaECiiPMZ3Va2mfbrJ1F9i8Gmbe5qLaq4qH1NT5sdTF4VdUsJSKFnVdV8cJ6QzDJSjtkDB8FwtsbURc9WeQ",
  "key21": "6565CFXrcYeVyF5QjosVFxyXNtH2WSzyBpWq82mYdQ58Z8BEamLxEueGtY56rMtxmZ8NSfMqJcWvuq1APwfXRCUp",
  "key22": "2uY4UxUKBzS5GGq4mBQHscRhaRFGUsPK34ykbDxpQKZy99iWur2QtGDPSP3uywQNcAK8muVT2nvYzWspjJgzyVcB",
  "key23": "3yTDZpRa1LzH7ikewA1Z81Wz14SmtUUMyF423tcgv8p78yKwpuBG2sXDyqgc4en3WiArFR8AEHUApT8MM6G3RGCn",
  "key24": "2vBewcygYAFKycuJTxUq36J8H8JmrZQsVYxTfAGMW4W8gP5KRYVqXPoHXsgraxn7WmUFRjBmjCy9o5c5BMU6MFRu",
  "key25": "4x4NXDp9y1PPcDX1iLQZJrsSAa5mAxCWyiLDRDpKjaFhPcQtmHXrqNY5K5YsmizNAEFRBuGe4nThKFZFe43ePVE8",
  "key26": "DNPsxRqCEL1MFagPpLrcSQaC5XRczvwcaN7pUuQH5cpGzHX7WaeKtH4jyVorecR1b5ssK2aFTtXEzSkmEp7hQPp",
  "key27": "3Bie3mryDHd5QAyW9nv2T7UrZaWyEkfWRdv6G3y3PWMJZZpMUMx7DwnY2oRSuVsXdiAiQNCbcpou6GrQMGdYLsY1",
  "key28": "2cssUWMmKdfm9o9jNSicYyQSUwR1MsAAPRXSXWCmFjF9pzetNPAU1nFkFgMe3fTNb6ze57nwADrBkU2jFrNz1Cq",
  "key29": "4iJHvknkTrGHSGbqMcFUcEyGKkLiyBefwN4VdnWucNJpSwZQy33tHsZR1kTW6ZeVRUAWDHjbnvmuGRw6TNVUY9N7",
  "key30": "2G69HgCjXm5qL4nRFqbXrpY1G2ixzJH2sVtuChmS8gLHVLj9VZbtG6rpTXxyaPi32AD3vHTV959tDjdCH62DhB8h",
  "key31": "29eG2vW54AnTk6YtJZHAzZQk1RwuP6F2huHqCafaFraxzGLmH5V73Tx16e4pgdsf9wMPwWsH39Tzs9bKNXdaPNt7"
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
