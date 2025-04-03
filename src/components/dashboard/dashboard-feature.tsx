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
    "3mv6wcdnm8LqaLhLFxgYqSUS6xShfTkDFrm2aenqzFi5AHjqD2FweBQkL7FeRR6XfFphkBS7U8AtgKCfH98Na2wQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28GfL3y3YqfByc3Vik91mE5MzA9m5kq4QPoBZ6UvjBojAWbDtmHvE6zVwAoTi4FYBgbAMTnARkQzMWj55raKvRyF",
  "key1": "657xELpQfpTMSc7ByuLDSghjSUeKeYeY9Ywn1wm2BFtZKFy2TwyKvd4P7RrEL5rc3gJ1bQq2niEgWLPqMY5iEcTL",
  "key2": "BJUYgMKimUDnjf4YpTqTV3hBHReCzA5rd8FpeaSQJSYMwhbk93RMH2xmEPxL22nKjgX6sPcN8QDtyMTeMg6L5XZ",
  "key3": "ExJNLJrpyJR12eUG7uZoweSdusrtvF7ZTLC8DBu2sebkqTpiwyTFCbDqP7cBqAQ9PxmrjLULgX4om7JkFtowAck",
  "key4": "21aHQEhMRpHN4qNhzLWFkxdAFwxHFCZjFHmScvb6cc7q3BD4q3v6kzJnTUuMNmgkpyfrRdFfJhiLifAiHDkL7twC",
  "key5": "2MkFT7LsdiKEba4nio8v854Pw3ncF5trHuei5QbxQhe2WtNBaxdj26cFKYwoVeTnxfq1TQTicxwLKeSpaxPpMBa6",
  "key6": "3HLbhCiGnhwY8V7BEF79UQDhoSJP2wB1QoF4sZna4jpP46FEWMagvRd5Uagqn1H5xK6WkzjLgTuty5kGZbmYB9xX",
  "key7": "38vyz94zJ2wNNn2wkF6VKHfSLzL3XfAm9hQoCc7NYgQ6qAyi5Z3UZeGAggJ18tFZfU1jUbMAKzdoM7z4SA8CCjX8",
  "key8": "3spKujspzVKH9KXpQERE2qsSowADUwvDmd96aSumpvD79jnLNGtP3jJFfq7sBzjB52MnvtMFhGLPJo5XcbDG7kEo",
  "key9": "gnqXibWrNG1JSdHiyqmgPyf1sZ5dCfZw8U7iePvHRBoM27f89vhka74EECQPyjmeBU8TJPEGWAMQi5ERXwedsPB",
  "key10": "5eJXC3bQf6Htt98pz1ikKC13J6GU5PaPmviw86aMa7DG9AGrT1iz8JPGoBaepUphUjeARmM7rcJSdBgmWksNemQF",
  "key11": "48yVDZvkCeLxG8ovYj9eUc7mSE8BR9kMTVnqC9wxc98vLwtSLbbZDnARYkFWnTnoiKcWdmPzWwZvvUMm1byUb79t",
  "key12": "3dQ3rQCydgYqV3YnQXbTL1psFyw3D6kiQQCs5TiaHYTGdx1zTyya4WeLWn2MPPC9JsHe117KnoGvB9fnuXKQyXPs",
  "key13": "2AN4C67Lgh4Fv84MkL3k4pR2Vi4utofmVEEHp3mcYyvweXtp2NQ3rZA9tPaCujeRXGX2GzvkSBkfiYC4rfkN1cDf",
  "key14": "tHeuVSdP1JxQYcUL2gd41789EWx6V33GoCGjygHCR9cPk8NgRi64dMN7MEp3K1RB8SjyTGJ7HZEoZguHSuuxCP6",
  "key15": "4kdetQCBYna6CH4AYYg5zXYtHVmS35seJa5aPBHzzvE97w1Ysfw7LtngoG5NiB6U3ZsJ9j6qPgETHs2jaoMyA6sH",
  "key16": "3sPuc98GFrYxx8oxc7NFLwKoWEaEVyeGjrD3KzYf5ntrQuCaruvmModJtu5YYE7WMS5RkWjrtgXsDyhU59k59o57",
  "key17": "28JQEjjh68jDJVM9uD661kkgPcJtoMu3ejXfxPErc48xKrAxj8fHjg2HbaR4oi5bV2G6wCnat39PwkFCHCANfVUq",
  "key18": "eqhDwUMaAFRHWJgXZNUTaVzy6fzRQTbujXDkDqdgTsxW1WawKeSrF5JWzheeCVsoL2bGddwuH6HNu2AWr52C9uG",
  "key19": "BSxhJYFTwxfg23RTAT8gGby1vG5VuqWyDQRW1VQM8PBf6BR1qEtMazbXfZ9YG7Y6o6DkQK7gPXjkjsxkxv44L4H",
  "key20": "66nRfYX12BaYcDDdDjJAwvnmi3PvN3bE3hLjRTgStfZP1NeU6GJSHMoycZ4jsj8ezXqeVevBTxDmcvdWrPetZ93b",
  "key21": "5eV3nZ9hZmdCKM554zMRA1aDnRGsNoTrk8bkTmo3JVLKK7JMPgfv9xdhV8HUkQr5tXxGas2YNECMY5pvcSB1rpGQ",
  "key22": "2139zUSDCRcdpTYK3Ax4PsmkNPGU5owVEg1cwFBdC6k3BnhCARspXxo9WrpXQ7Cw4LgM6sEJrCyxRUzmkg7JNTi7",
  "key23": "2pjv5ZErGUhVes8xdKFvQDp5aebE7FdMrQ94TQnHR1akGpP2A2rFWmtNZef6iVvMaFnfszPPqo9T3Y4bsNzjuiKC",
  "key24": "aaa9qptzKsYLLkAj9DW4KspPzwpVTfy1yUu2qHvQN6jmGrqz89Qxs7E4Y16K7GK6NSVHH4tGvZx77LEufLZnGT9",
  "key25": "3x9PxU1kUpKM2K3Qwj1sFWMC6MTBgtEMBCY6qZML7tXHtgLs5xAvAme5SCrt6hdVyukQwJa9JsnQpT2MMnj14AWH",
  "key26": "4XxSvgJGs1jkZx5sKGyympvETSQ6roQ6UmswXJm5nF7MnDLPoDTKQpbDUVLoCFcXNdnfjHcaNiVpGiDZX1JmJSvX",
  "key27": "4mxFkuwFCJhDdAwwVgecMoSvaVp7LMExWafS8WxQBquPb3zE1k83t1HRZVyc1XZgjo9PnEFuvHuUYhSz3vA3aP5K",
  "key28": "C64fvTayh41ZrNnmugM84SvkeFmByZuzQ83h9VSip87RDMNxSdhcbM2w7mphp4NLxkwB5mX1wrgLEQyBQ6Knrze",
  "key29": "4hzSFno4buH4i2wVU2Xzw4k9v8iVrLX9iT8VmMDsnLGN34eRPMMzd4nkcdLNqxYD57ERkH2U4Wos6XG9m8DVsfYh",
  "key30": "5pChsbCPFBm4Wn965QzWoUYSa48cLRC9336qBpTDYuL231uZ4zCoE7bTgtrKw8LFTS4ngriayXcZHrDg5JeF7DZk",
  "key31": "dgV3UGVRfPixXL57emCMMXZdQNig5ZUeMjGFhGsXemnDPYiePFGXFhF53Ld1QAy8GWimsxHFnpKgj2m8F5E9PS9",
  "key32": "4TTdkCX9RJpdskSjf7LTP8kvKyrBZSRDna4FexekbZSc3TkdjuVmqAUiAd4HfAQs5WufTwGBQvFMSPbBkpsBxiPT"
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
