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
    "5iNzDr2BwuBgxHdxCLo9LepwZz4RuSMGHDiS4ywBXm2EZYeGkxDYGuqsaCYtULutnaMARMFbq6vyHemVheEJm8zZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67HgW2nxjmWzLHmedBEK6rA6WPfzGLHgH68WU2mS2dPmowDwg3jFn8cKh8xSS1qLz3Daw5PeyKe5ARV9izeCziW2",
  "key1": "5xtGP7q7hdpMjYpkruQQ14E6rxvRaRJExMfJ4Ftx6EtxNuTs2LAGd95ZhZxF4SfA8X8ad3BScDkjQwfZU3bY22Hp",
  "key2": "5YNwGANRf7dd6LwhAbSAVuTdDDvwPLZM283u2A4Vhgykdv72auWQGyAadw4CnY9CUFrPK1fQ3stVm7sNkjezik56",
  "key3": "3omk6bDULShQ1rhKW2NkjLQmVmjJJ5eXu6X4SCK5zMYpSoa4hbhs6BiMtKa29MNnSH4xRGVCZsC1UAZ391g4LE7E",
  "key4": "UwxeguCcztPj6exZVn8wDNybjn9AmGqS8ZVzB4QdEVYdZVjj5AcSHMCLkUPXgXTeiyceD9wV854i4MnNhnfrou3",
  "key5": "5U1BnPTC1roJnYXvtULr9aVP9qdiQQiRvRY1AAcRfAbC8HqDqSzhR356gh1nkMW51AjnnMsdSwY8FTrN4nRaTQ7w",
  "key6": "5PjmwPpechMprMs1v4kC1KHf98VajAHCWszRMDZxfZ3tQPoEztQ5JALBNS7ZTogzLhnLu9q92YdExxmfxCnkKTUZ",
  "key7": "2NgfantcXfqFBeGHDba3WBRQueV6PrJtJ7LQqCQZBwqPix75SMDwvknzMjjWZD8A7DvJf6HxFyjhncc8A56S9z3Z",
  "key8": "VfERZuiyu8vBVMFrTG9rDAci7W62ndE22HrtqihcufvXVy3E5XEJ67D3Vyar5cwXiJcQQPgkhA4wCAyVbsrcw75",
  "key9": "5iaSAiGfp6yRoYbUm9haJtTGWw5DX1jXKj22UuwRBBfwKMreGQJgomRUwJEThd5PkXZ1zrGa3AuwiGyHizHeT6NK",
  "key10": "52k94qbfYpbPkrFRKki3RBGda7YoTfxUVipK5WrPTRfW9V3twHAj7ZfP4KyxNUcYDwaHeJGgssX8SGBDG3k1CSG1",
  "key11": "7qF7P73yqKiM9u3fHRfbX7GX2eZnrQfspaAmkpReRL7tHBiPV8QPZwkNfeM5epwRZJdAk8HP6A3aLhJSFogDSxN",
  "key12": "3yqVRkWqUwAJAbLjUqDvWrDDm9PL9mBEQYHXd9i1pyPeh7dqARUqazQuoqTv7EAjbZyZscWQxYam21AVHHoHBfYd",
  "key13": "48aU5w79DU7BuCSzbN3rqvZ1xkygUbWmUHwuQo9iZak38P2szJgHtGanMiW8TN5SQW6hzUM9rQM7S9q5iwfeSDx5",
  "key14": "2UTZ8PcKvgAjgcvxKUiCmssTuF6s4E6cLF33rb3G3y16r32NK99jn51XdUHFmt8J8vS7CZmBYaUUQMs4tx8BHaKA",
  "key15": "5KfcBRnwqt6DZ838dTZsTPicriHY8jTdvoECcYG1eHHvUjfee7ur6mfp26oCgAzgsN4PK5ybcijqA6HrQjXji6gd",
  "key16": "iPUiyMQHoWbjiBEqiZUwpEpik4giJR1CMJrVFiFKGxAKdQ1tF6iMoNgHGxu1Sz21YugaMFjsCYNPVeq5jP2RxMH",
  "key17": "4JoPBFWgho3g37mjiJdS8kEVmwNrQUvdWy6XrGMBNs7XouyydtZN8H1v9MfVEQ7mrZTgSvdoeYuZb2Gorf72cjyA",
  "key18": "8ZVNAQ6vHeVqx2aNtmBS1RuJM3v5NbZnReGwheLCaDLRM2nQgTFrXP2u9AwhPL9M4swmtQ16Bw8Dyn9SNPfNKWJ",
  "key19": "62GjH6Ayio9MS7n4tk97jBLbCZXpCeog7zYWQ67Zk5wA7Awop1n47SxxTWuhjN4TvcffbapGGtpjJbLBRhXfwWTB",
  "key20": "4UdqpfidSpqmP7wcSCy3JPpsyP3D9RcpQHAHHnXLKJwzkj2KHeLHu7weVFrKprbhtTxvZNEq7ESukNW2Sr5Q1mNx",
  "key21": "3X3GvDYehRAdp1WHdNmmFcHiV4q2tExW4r4bvNxv4c4m7c1ZpPtKkiQX2KYL2sUXhqcwCifDCuGhetBGJ1CJ8AS7",
  "key22": "GScRYSGti5KPVMDcCKAAmfpcXjyXZYGbWQejUYXLwrxbUttx6kUQz5kitixKREhz4R3qZumj2GgjfC6MrVsDRkN",
  "key23": "4F9FboWhFcH9JmHdt2KKZMriYa8PULQ4GDCcyE42ecBxWdi8tTErR9zV77msu4M4VcrwJYU1DPiavs5GVhknqifD",
  "key24": "5bLXDRBXZdg5YTofzzd4t9CeYDo1ST7yPAgN47VHhvMUCbwgfqpij1iTYUB76K5xVGJkj491Eug4s3UPpSxuMtcK",
  "key25": "2RD3mVB3qZ2mr2eyDwHj1DwDbmsXy7BBpSe7ooKaE41cXVqCENdWFBnn1xYqJF734pqQR1TSv8Nf4NhdQ1cn47Cr",
  "key26": "3s9gaUmA9mngXjQndgYeD3DLGVJPcr9vRdJQh8ef1uvReL6HA1SURJ7QXMtGUYJjR3xZFRb6N1RyE2QGCSTUAQq9",
  "key27": "XHGvKWyQwrBauUpt754vYzU9JDETpvKEyX1r34jSCd8Wibna43f2zUmQmyZHWWiqFNrK44TzMoowkjW3T3orc6x",
  "key28": "4W3HvjXPhrZHWpCKd9Hc57adXJ3A5n49cXBFkzB4ga5k76ViMSa1W1tXm8RMw3ZNh91CD1hAPVdbivkBfvDTKCyn",
  "key29": "3jJ1MPgdi2kuNKcUU8bANC31V9vton1P8HorhJw4DN6Mjg3YXLUCSJ6h7WxByR5XSX1TqgLHQzsZDgkZPeYRLMGq",
  "key30": "2MoXDbSB8EXRpZas7LFAknPLE4JNzBVReXpvazab2ccFqsj9yVDwQ7R9SFtDCELpi9DpPzXWwJppH1SFTHAZVZa5",
  "key31": "3zXPShzbY4MWBxGGVQBKyrfE9g6hU2P7HDK8ZZzTqAdVKZQCHpa45K5DnsaxiYh8vZqC9Sqisy14igpRiumA894W",
  "key32": "2VL2ems1ZMZJZPHP9qMMkh8TZNPAVPs1SFNPbQbhGQv3XxNdUEk5AYdXGwuLXq5irkmE5a7mxn4sCsvTzqwfKZdf",
  "key33": "2mEhVwGNvWRrKozdXhSBnY8RdeZxpUP7E5NP7aE4vZmUrxLNTwqs1FaQRUiDXcqhSXUGtTpBRGdoLqdpmcm9m57f",
  "key34": "2v4NZx74FfxMLSwq5NpH1rNjd4oyhNgfYmzGpAYrT4AbCYG8BqMQCRqScmHAeASpsxmFgRQ3HKeVNocrbYo54NTJ",
  "key35": "3u2WLPbs5Pqm6eA5PUeb42QUXaFUuFYxzQwxms1NeyiSeugPN3HZGXd3Pqvnx7Yv8qJSuN4GmDithxZhiXPFYCGn",
  "key36": "4qCWjHyEbfnurbN9T1pR77aaBcSizBEKB8X8ZM5cPWnMEZjUjvCxVpWKYv5PDwfpBzmLPnDzYUN4oZrTjHfxUT9h",
  "key37": "2rr6Dte78aJa8n3D55sSWiwYMqgoki7bSM1eYZFYUvqMheq2HgZGfjTExVmWGyVqaEZJdPeeCA87a9ZSp1333HVY",
  "key38": "4H6wADDE6rYML7gvGheJg3uheZyNaBHYQbkwqkaAH7oiyx82ac9UvoyWyvyrJRa4ooZy1LFhgqFQYsQEegdxfBQ2",
  "key39": "NWGWvPxNTfXpZiwXPXZcZ1pyryeGzhdkC9Q3T9E7fjKGG5dpoeMvoRrcVaoVnfx1pBsHMzQuX85SpaFyHwQuByg",
  "key40": "5pCRGRdAPRN4FzuC7Uu9CjXbV64oXdugYSHZ8ipUEdb82QYr6WHwPZ9S5GZ4WWuJVfJAg7FpnBpnL4hZWa39SZs4",
  "key41": "4aRcVWNhPV3HmQYwGvZWm1YsXz9i2V6vic8MWwJSFVQbTyUCqPDYySYmMsv6Cwfat64DdrfG9Q4UpNQt1Djh2gyW",
  "key42": "4NAh6wB3Fqcvd9ik4qP9uQMzkieKU32TSvPvc3q7BEUK5KzFHaBk7fPoU5yNmaCMnscvtwfiEAGhjq2F35QAnAHs",
  "key43": "kWUCHh4myVrYjWysdm6ucZYNgT6vkyEod9iAAUbrucgt38ScpcupuCjA4FEmoiQmYPj2vwkncybYMwDWwN4ofa3",
  "key44": "4VxgVykTRjrqe31KMCDkWvq9sMTvE5kR7zC9BaxoyYpjzcqy8mxf4mkddVC32cH53yRM2yKEr3vZc2KsmaEkdHD1"
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
