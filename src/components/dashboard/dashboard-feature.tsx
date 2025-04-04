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
    "49X7G3Db7pGctqW85FVbcCYE5SM3A1NCB1v7tzpSZqB4ko7azsDijL8aQQKo95U5AHVBRoWvmLKUYvYWKPmpvz35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X1BGRcY6nM92s4ctj76zhd77RoaF2fPEjCPXMbLuQJTPPKq9XKR5B7vts6R6KWu631pm5fbYsabb7uaKd1Ra3Zw",
  "key1": "5R1drzoupzodzGNtUTgtDyk6nsrz9yRCvAC1zc3PLrecbLvQiqnU6QcPCVLqtBLFhd2fjSSoMoMAbon8zwJFF9i3",
  "key2": "5t5nNBsJxvATBDPUS1h7KbYjxtbL2wEjf9YVcWuX7XY7NcGrKLuLycMxn6DmzivWH63epvcJJNx7cq3nJ3szoXcS",
  "key3": "qQupDYVWNKPNUhuryoiUmP6mcvpcqq5QX3cpadVdgzJ9SDowrJ5mURb3gg9UiAwXzy77ZeFdn4PpPMjw3SUKfax",
  "key4": "SemwapVNYVsUZQRoW8HCJ9xvRYAMBFqG9UU6EQ4eUCzzCWpAnwKH4JLMHydyoDbQiVut3nxvZYd2PQuK36mM8p4",
  "key5": "eG3NMgEEkccbYH6igE3ji15XRMU9BYpuewXJCRx2AtZFjXuAA9LTrSmuPLNg47naFkxtakmKvyimqf2zYZZxEnD",
  "key6": "2ZxPENapaxuWHFmsz9pdyLHu2dXJFunqmLxtn7YoKt3y7he1iK3MnX8WKmePhcbttFd7sSkRKf8nQ72HSxfBqh6z",
  "key7": "2BmbmAjFSPUKd32magYHUzZTnWErYABXtSovLq1v4ufHQ3thVWAANJsZxAR4RZNMLbTws61JSeW7D2786S1M4TwG",
  "key8": "GnC4aXm1xN7azYYYW222HiNdG4XL34nZ4wfWn4KHQsACTSCwuCJiqz3dNBAvbudDSL21Sdqqz2cKpJ4EbpgLUHY",
  "key9": "cH7oJmtYmhwVm8JN18c2j6uSkATbEDw3NG47FXLY6yADQvU7fjSCbUyYhxjPdZ3R8vZS5ANLGTopi9cuPbytQXM",
  "key10": "5Zy2GuB35ethdaq8BqC3niHUbdPP2KQVeSw43cYkZCwHhN74kJPZ77beDGeHanWA6rr5HSgqQWj2wqKzXoGfDWa4",
  "key11": "L4addaTk1jDKtU6P8YyZFD8da3jkvNUrkRPYydfPN1BvQVjyNBcjkVk6C4frBhUBmgqrhcfJdJxgHUv4U6BVKoK",
  "key12": "3A2P8dxNkJL9c7BnaALqqSJKpS2tFbVQpKKk8GjF3gZ81FL8KjJZNndGtHVW7RZnw9RTC3V4DTdq8xYiN2idqysX",
  "key13": "4GKhiqZSJ3vE8tazj1SBPkEU6Jvw5bFhjxTi4G7dmYRR4U1Q4T4jj8KMUURJjYShew4xBYBbfMmWJZmZQ7QXUSKR",
  "key14": "DY5bQQQmRiCU5LorqduuFoZsDFWUs2JdpzpcRZFSw3BUFYGJKSqipcA7LQZUsmutsmniek8hw5igfSPWva1W3Mw",
  "key15": "4X55eiTa1oAZQGkN2D14WKjtT9pgp2UtQ9rtD4xo1wnkaQTfu8WP9cBJL2R5YtYrDxsAqpsgxCrgoNqR1ngthiiz",
  "key16": "P3VfA9jcmiwmq81VcQK8Y6XqHqKSR1cMHfWPcyYctRuVULcDdoL62X5hCpmjkeBQRFetfoHhetEK34EdmRLWcLk",
  "key17": "2UUdMbRAsMA8KW94B8bGGEQ5WVAjpYCLBArYUyaPnKGWzwRFhLv6urYmSVvxpMUNmSNKo9u1EuoeBHkY4EDfrT9U",
  "key18": "5xECd3HPauvxheJapDUHp8eofiXwKUk8RTkZBgNC2si67b3QqMRyAZvgZk3HhaUmxna2qApFxyAzkx1Dba7ShH4b",
  "key19": "RUs5giBKn4F4f7pk7BL2YcKoXz9qnBN14fYovZTuVbWZnbpMxDb5dRCugG7arfrqyMwC6AojNvPQv9q8Lg472Zh",
  "key20": "jHiJpXeuMEYWV4vpCihYVYaKeC5DJMSYJev6b4b9S55bAFmeqzfnR7vhHX13bFENaBUM8jSUKfpkQ5oXBaohTyt",
  "key21": "3XxSSFiADKrPDH5bpcWJSHtcm7uY6DcKWK6thFg7YGT6Ugc39TfcntRZ3owZFV5eAeyWs5sjBp3rUbHhnJCdRY4B",
  "key22": "652avbahTjb2mBvbKuGGvBnhkUQgGkFxntzPzzXhMRrrpnWULE1GWrWw7e9mPp4oprq9rKnAq7HzbH7yG9F7NGJ1",
  "key23": "4RghbRWJUGXtzeZ2A1GRrqamTg6EF2RpTUXbeP3dpg7T3XqRrkqE6mBMAsMfU5SqX1zci7dVdYrpt5BNZxRJkXNY",
  "key24": "37GAFG5jNZHdV6KLZAXx7vxmWEeTSdJoxfrNpsjCMckptjrycPnHnagXYoREZmUdVG1t76cjZrx5S5JY6mHEDHeb",
  "key25": "2n8zhuKAchzYLzZB572eLxXvAccXTsC3faqGHrERRSCMKMkdCRKq12sFwnXU3h5hPHgqaiLFdkuQswkExeP1TaEg",
  "key26": "3nsS1i8cCfjvzF8UWZ8RHPhAb8FpG6Zmuah4zUdxhThY7vBSbqAjzhwzNbLMdPQh7H92zUYuehkaEzxszLPjKPsu",
  "key27": "3n4wdMrQAXJ3EVDP14EXhYi9gaqnTYokUACuurAyUqo3JSBez2tZoQLsgqJdq1cB4hESrLAyU4i979U55xSBewxP",
  "key28": "5o4rrWAfdM7oNXMGXsSsA4Quvz3poMWyBL119nzGprFTEtAZNWbpXS7WCSUcbBgeJHtVUu2P69Aesv2ekkmN6saE",
  "key29": "2ntqszrHL7hmmnFGkN1VXRa72Bkv8nvu1nDiXPXFGpqm6M7aYbfMxKtyhjzuNXRCHwZFvbxGZw8UySueJvDXDE2r",
  "key30": "5VL6QcqQv5rJ3YpMeoctPPXd9Lxgb83q863nW46YEVAFAna8NrPrV17csDqRjLkUepuDARTLdNSybwHoqT9HmpRX",
  "key31": "kqDF4whbZ6oenTtVgd1CVwfa96VFSSdq8UVEJJg6iZRbnFNKxCVC9xw1Fe6UBXDr1nZJBWBTdiAK8PrL56nss45",
  "key32": "4TstPZXUMVg46mBu8gf6LgHpq5igNWS5usTeGxeHX3yiEHScw2qXuiczzKKgw8hjnP7ifx9jpirJfkRk1TknjEPu",
  "key33": "5TTjQMDRyJVaBtnUo3TEqxGTnS5XQ98qBMW6PQm7rwBRh4YXf1waQ9VLsFrJBtJphqAJ3ZGKzMZ8HoeU2sQPP8Qt",
  "key34": "5TDB7vycaMq9U6RtLLFc2QK25C3MRGng3kQu2wG6GumpEYQm8Y7m8eyzMH65Fa7zopknQ2ZQ7GeWJWvyD51wKMbu",
  "key35": "5P7xrMrsCFT32Rik57k26GBrjpdvAZ8cn7kKKztackwkwwjdhwLruj6wDSjK1fjuyvERgKWRZJ9BPNyPxNjH7tmZ",
  "key36": "2P8ycYAY8FJM89NdfPdpVYwGec83vQEcyYUrDPHWPvU9tBtNi8qPBUTfZDbTwMxfCNZPPNJ3cVMns3wj7WUCXKSZ",
  "key37": "2oA9cLX7LSdhYM7xUhtRg9ZyoovDiYPmjwkqmyWAYvWjv1RhNkMg1VxYsEhKZEKBvybhmHtQn85jYtVZz5s96hFx",
  "key38": "4AQA2MVTrwFDeC6oQc2MDPqHh7jGCarXXk1wArQRSQqSmcANrWbG3DMkmAnMUxM6dBHsvf85v32Wj8RQeVJhAgPy",
  "key39": "TA6aJ3P2hezZUVKehFZoF1j1MidgErEkrtrUDKLYqMHNoPLw67y5rERVZEJBU7sxBWQiCZJgz3dS6ArdrkJRSM3",
  "key40": "66zVypbK85QBBhDxzB2BVPU1xz8WomaZWXzK7ZC75Cf5jhqqdmV6YBERyNyVLcisv9iKEi9FRoJqAdMS7Gffw7ak",
  "key41": "6LsNiYHzZdKcqbkn6MbFPejBm6C7LbuigQdxee59HR6Qtf2vjWG8Thj2GWVUsHyjkTjFcZVJX1qJxUt2v22eL1H",
  "key42": "pYLPxqSVj4NbyJ6SdE26gQ3v6EBh1ZiM1X9s4Tg34xPaAuiZ8CkAkK9mgPcLGM3nycjTG7irZ4YKKSfbzVdD9gK",
  "key43": "3Mr7SkirdrQh3aD3NAwnuy7P2H3RqJLJP1J2wfdaKWLcPMtEvGW1rARufqiidjqwb1eM9yyP1zccZpmjJua9UVLF",
  "key44": "2Q9RjUFoqoZhKSQV8b1GzLsWTvKSKCpRKvPXZWcBz2JrqeoGnFdffJJTdj4boCVDmdHtKgEgSUAipceKYtf1W1YP",
  "key45": "4peuJeMvDtF5pT32uiRAYgeeQh9cC4EJcGbM5iWGK8AxSFv3bz89bJ18Jf5svfJMXqaPFHDVeyaCa7WJdqHSmQEQ",
  "key46": "2ZKWe1FnqGNyoD1YwomxGgztw6vcT8QVJKs5RJPBzZYEFAEUZoeiq8vFDHXJdZNMcCvUzYLeZuVGohSTGHRiBcuE",
  "key47": "SbJY77MeiPbQRmqpzb4xjRYk5XSpYFE5JxzxAGkacUDcRQoSfn5pUBDWpdj2JWqEMa2MtUC8wa5CsnuK78Qm3AH"
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
