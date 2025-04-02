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
    "rQbu1233PunEzUSogXfANBXkcjVHgsdL33XpckL8RQre5nfZFc5Tkiu7WnNC6ccxa2HU8zr15ue58AnATK6Mihm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z1kC1FBJ1gDGsSQN8wRdWddryKokTB7mj3DsSEEG7fJJZVYbVNMocKKfRMHQh4eUc1fGoQyY4T71fzLpiDrAHZc",
  "key1": "4bAKZkwhUoa5JuTZQB2e5yCmLBpYbfZ14CJUZqERdc6Jcgbt6MzgkKWvWnKcMoJLZUi1JnanXBigukmf2rR93w3E",
  "key2": "2am5MgKA2vCopBFV47r3mvZbVuvHEv6gatpQhHQzJWtiHaV5x53e6VquJs2tGNibVqr19SUQ8DGjuSoZTcqXDDSq",
  "key3": "4s64k5AX3TSgu8GDjVyzjFfRZWFrxfAifXqtCQwLWyUYhKgC28QNjBU2gf9WhwPDSsvzCVsgLpMqAbBGrrNfetga",
  "key4": "34qU8rUW3wSNw7QBsSrqBfdpTxvcG6VqbbdbxQGiW515K1nThtfHAvKzPUgo7XCygHBPJ7vt4fji9baHrZcioSXh",
  "key5": "5oecd7Uc33jZfdWquGGi7KJxk5ATjop1DwdHe2A4Tv5vDLPCjY4EwLhzcjiXXyhK97ibYAvKmWmib56q2A51Jaon",
  "key6": "vmKMHJrgtf1YW8YtLAWiTP2CtGDwyCpeFumagiBHgmwGXVg2mEVZHP1bjrvjh96mRfpVC32nYhHG8SZ1Y8825wd",
  "key7": "drJrBH1ju8UDDsxJbgj7DJ3gDxABDNhnhPEFwbhgXifZRs2qhJyjGjrbhzJZ3niyn6zGTYtYHgFoFi53jYSiyha",
  "key8": "2vU3ycEhchv26B8FE2iNjrZjEdb8mhhyrvAowGxyQb6m9up6ebhRhFfPFX4cJDCbFKVA723NYJ7i4LysZ2szvZWt",
  "key9": "4Cf9LVktauZFNYi8JKV2RzMwUvvgGJMQKuauDvVGyjzSFYYwsYXNEhAXnt2tM8o3y5uyoVjF6LMgXaGn3XkJQn5A",
  "key10": "4wNEAjFvBW2TGZudXnyUQy3cXFioZdmxk5GFYbHnHxokkn7ePZpAcF7b7swxAWury8nP3koUxUc1HQCdygENZqjq",
  "key11": "5QkKeppKudd1eoZ9A55z2d7RhADBPgEG6BB74TwTM3MBw2ZXP2P55Vof2g4dCDHCbphCapd9yH3jaGkdyXfi4hcP",
  "key12": "3WZUTKTGdRptri9rjfhWr8Rra33mKsKdaxS1UZb5ozRFCzHyrLu4cDWFtBK8QnZziVJW8vrToREntMbYr2KHfnXi",
  "key13": "8Wi39idKMWi3XyVXeWHrE3F2jEx5YdvNgFvEB4gAwHe2bPLZTLs7HB6J43j6ysXfJpN6GLP2RQ5WtDohjPNPPdV",
  "key14": "S9rpirc5G7uUyNZT3cGY9RePGRMmFW5e25amLirXJsN5G5C1Jd4UzSgAnTyHcWLdxYWrM8KodCGropmQzd452Kv",
  "key15": "2qXKzsAdfkuvs3AvNQ25j15hdNxNwwuzoo967LFppWxJhAhp8513ZNuZgCvegRyh9Ws3mhiHdTQoTkj5cWgrDpzV",
  "key16": "551NVBXA43WvR6r3spLy9YD6dZ7NRaNhmxrm3CG4keD6urYB6C83LTEJAjffJx19fqFjxWwmNLEyW6ym6PmdKfLC",
  "key17": "4MU3Dpxa3w9ax37fBcgPmiLHSWKKTVPFk4WYzwSq4nCKWNTyeD1LaCN88PxwpnAozLXx3MwRFLAzA3VtL76hjDgE",
  "key18": "571wrqVgqQq8N9zcWXFohxNHj56eAFdxYptFbn96yehGUctU6GroApoTMkqE7T12Tp4Xf61cbQ9rrBUfQ9VgNf6f",
  "key19": "23KCXiPMzHJi2zcnADssu8apdAaomGAjbP5BXmm8L7dvvBE6xNSchjYFjXQPeGdB9rHTfvPZog5sDb2uQb2YDuVi",
  "key20": "28UHqBPaLTprQ1rCbgtao73oj4QLyfwoKfFrU5mbRBxqT1NMyZuJxz5ekrKkz2gAbfzFoA9EUh1N8TgBieotv2vF",
  "key21": "gnLWTzAXvBnUTF2r774pngCXbNfYt6yK6HE2nuXyiSFbMiFM9X1jwowUeDVyu3CSxVJyk41kjdhcUXRGFhEDxv5",
  "key22": "VYd1yxtFPDr4bz93HrUvdnQumUF9bTDnJaTbRa5dS8ssnesKx8sZdvCJyoD4qZNbzDhGEVd77eVQAQva1iypkrQ",
  "key23": "3m4K5gJeJE3L4kK2AseqHBNWmhTq4kmVQWyWFTfiAvuZErfyXwnepd47FEnU5gmTd39VESyLr61y5yuWV5iEwLar",
  "key24": "4rovR962BZ4Yme5q9utv5NEEg9SU4r6rHfYAHNzjCdoxMk1KjUuo3eM3ioSdXjJvga6XX462g3JqQUvdAvxDrM4K",
  "key25": "2MngymSvJUF1nccp3sVf77pYudP17oEPyqFV15SaMKaucFxg3H2oZbgyfWre3dgK97wciHk6U3b4gF3PSMRSHp7d",
  "key26": "4hZ7rEN2aSsm3T7AMRR8rDq8ypwJMFSadFhf5htFBXMuoM799GSQ6FTNUqGfKepetdTC1jEzdKA5L4cxxRFZgnRF",
  "key27": "2UdprG7RjRn9aTFEQzE8ku8QTt1wYFxdHrP6NtRN3vVbW8twmawLTG4X3rKtehgxcHX2cDH5sYFMhEf16GghDd2D",
  "key28": "cWTc1B2t2aJNY7rJfgM6J5muBFnXdTBpYu2Pe61daPQdw7A8kzim4LSKFftdi1V1865HJGd6ZXqciWPbbndGUzd",
  "key29": "4cd8eZSiGtnxq5qq44UHsVw7qi4d41LSyvBmBnuWVB7Y1nSvfP55J9L6gmxPi7v3sCVYTi5pN5nuKDdU9sD9mVxa",
  "key30": "g7njYdNEw4UyLRfAzfCTQdhgbL9SuzHUWiwujsfSPqniZcPJgsQpp4q3QE1knL7bDVaBeZFLGGHGhAKyEHp8ys3",
  "key31": "aiEJko1YWAiqayHdcHNGEpcjgs4WEFwnXZdupkUbhuCt37SjERCFwVimyEQxdfRCse1PTNo8FmikZDCGwoKPD36",
  "key32": "2MFQsfr47iKzcgpmiCXjKtroijTVV18uBAYuUvqWRuY93QwnT25oFcKwf849EpkPaQZaMxEhTy9q2dH71HTkpvRf",
  "key33": "g8svaaU5wRBXsLJpVC8igwySeF3ZFgghz3sB8qfK9rWVBjG2XJKLSw3WkMRqkNr5EVCGiSM89NDytZFoQZP8wUB",
  "key34": "3HTGZXFjcRaiLe9q9iimFsqULwvMvEiQLbobnuRzurchNU6nGPz4uXzN1MdDbPZ92wcyrJ9Jq9iCSe6fnwrgwbFz",
  "key35": "5pg1WuRq9cHND1eQTc5hCRBhvAzYS9QQSW53GQtcMWVaYH1Xvt5LdonrBkhkFNtQ4keNhiM2E9kScE7mUdMA3qY5",
  "key36": "2bb5sJFkJrC33bqkvvz4fbA5sythMc5t2HwZyPmMoUmTiQFonS2qahBhqxhwRsFGuBnzvkFkp1Z5bWJJRmFStPrY",
  "key37": "2xjujVvywFT4oq8hYkTwbygo7nRQiSfZNhVHW3VCXQfnbgFBDhF179ksSfqQ1DX6J9Pmi2jGLHr5y3vKqTmm67Dr",
  "key38": "4etxAGwh6nAMB4ECed4X4t27ZekVx7vTKJUBCfvPnp1Y8QyQa6Sc7cS2BW7bBGrLAqEuzKtz7EyT581289RTKu5d",
  "key39": "5kmreVWUi2bF59egYHWR8UNEqWakuCMMHBaosLS2YzNyK1vb2JLwv8njxFo7xXF7BAFqzGE9scePmgYmoWskgumf",
  "key40": "3kBJ3RLLXBuXKn8f8wS6FgYwejmGKvky8MjGEjGMDwKvDXcSHMnHUp4WH7espmM52JQ9ptaRGGVKfHk2sAJAn3Ek",
  "key41": "3unuYnK2vpuLmd7fWrhLsfzbgdJaw2LyKgnNPmADWxJBRzKSUZrDjpQxtG6M2jNjh2rdKErgyfwkCHWdKXw36uqX",
  "key42": "4CLWfarz4zo4nFe15bCjvdak2yMN4ca4YJWHG9GYjZPqrztcdb1kafBXtZKZtz2kkCELqvVR4ABwDn3PSxsaapns",
  "key43": "nqBDkCYmJd7MDwb4ZDJpLJXYymRMHPnGutaYxe3ha5B3ukCg3GGeT9NvzxJsEupFGEhE7ZfbwxRBLcYxQqtye4M"
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
