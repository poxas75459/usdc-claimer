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
    "2JnTHFAnDW8YxcXLozrnXbW7q6N7TuaKPgTookFVgPpPVGKytdDYseh7RkQ24VCnTu47aUmL6LoVqMhww8C4AYVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fa6vow1XVeFUygBDXaUgRzDeR1MsWTSyLe9fRCysnsnMoH2ejgQKdHfBsfEtgLLg3GPLceSLBGDxSj8NHWVVJHs",
  "key1": "2mbZ2tK2RvzTojzLkjdCFz4dBvZcQvFxDH9X24ZU539356soTPAz2ab9ysyrUJyj9kAsRg8UYNGFQt92J6QvWxc3",
  "key2": "3QZS6kXm8536Ut1GMmmag5FNXx5V6R8nc8hCgtUo5if6wxp11Db161idNVZHmmXqGKnJsWShT75v8mTYqHSjZKRo",
  "key3": "5WT5DD3oeXTmkBqcpdv6BCe6pjDkctat6Kqg8LaSXnBmNKBYuc5TAV7TrisNCoPUV6gJDhWUei9Cqvpy47K2Kzk9",
  "key4": "5SZwqp9Na8TggJAUP1W8T9TtGNK6eL24Zjm4vTx3g6TYBTvTADJ28w4C8W8YAgeErPLnoyjUJNCsTG8ikciJcnWu",
  "key5": "2a6962taf3dXE4VUQJu8rmbW5kQGqe66WUpSXjPXBZhg1ESCSBdvWSMMcgL8ZLKzBLcjjKktfx8DR3dVzPAivvfH",
  "key6": "3ybQokZVgNA4ypszLbkhRqfmd7QFDvXPdYvogV7VDWyY1726S69vTisSBQ1hdTMsucb68fsNVxKszY6a1naPXDJ5",
  "key7": "3Lwx1LTt75zJfJdhuKQLdzyohB5EU3Ja7iMoyJJQhYDTE4WgSTARPHegmUYVYBfb2BYZzqRSsrKMfcUeF5kJg7Sf",
  "key8": "EeS3C42Vnx735jN6E2v8DpecjwAxuABpZyZ9upnya4hMDYKWUtBR1hcjNpSjpCvZ9oUavrwmj7cLLiq5P22Zn3D",
  "key9": "3jnELQrbsE4aMhY5tozijgQ2H5TQFdvY6orDN1aiMNu8qVpKLXimDnJ4GE4odTSa9vvm1vssLmv9SyqCh7CAcR5m",
  "key10": "x8RKojnMZhzUrG7uxzKnYn6N2iGWb82hZANXnNZ7nHj94ALmSEL5tVTeyLsMMs2xFuXiAKs7TnUuGpsdJo2KzLp",
  "key11": "2Vzz4NMhAPm3SQCXdTu4BFoFYnv4Ce9ZFpqUP9qC8DRrgGiwbqJihhxAoPzPqiC7VKeyGceD1Sdzz3H25VXXyLc4",
  "key12": "3dcYGS7U66khuFFxgmKmb1ShSM5rY1oDQ5V9Va4K1KxG5GP31eYJV7uxxXSZHaN5MLKwotSRCermk4tQDjNJHiCp",
  "key13": "3HztBnP1pELhALCXaJf1PFDHijHuzY5jdYhGBuSCFH8LxFTGUZFjCiqehDi6cJpN3sMEb5yJ2p36GMSLUXvLcHFC",
  "key14": "41Z3ZPSbQrhdmoagqmZWeNC3MLt8KrjVWMBAUKX2uuRbVwjdGWkxxwLgKRApBNzXHZ98GLWE1ZZfkMEdA9hze5y5",
  "key15": "3LexePFjd1FzqpXz7ZjoZttNx3MCb8DaisvGsCy4LwPsVmK4WQoYvbiyLkMAsNDcsfkkDpixKUavrfMmvMdL86kb",
  "key16": "2oEFJHf8ciVRaoufgPdXCc5fLT9mQLVTbyVQ4PqXipC3URjhmrxU4mG347a6TVQ2MoWSsJVPcmHm63pDyguxjC4j",
  "key17": "3wvdgXjt5fy1z6Lq8M8Te9DKbJVmXE7ssX477qibNedQfSeHeoT6KtP9wdZbi2tTbe6er25upZwpfgGgwZ6pFdaB",
  "key18": "wPLw4hhX4S8SoXDmCMsMLaZig73ugddWhbowZCwdp3pifUVdBbZ3pWTJHRUHkyRUx4w7m5kRME2X7QJ83Mvn5yz",
  "key19": "3XPDsHAwUV3BTHoXV9ZRfzaZ7i4qoTUBkYtSEky9mNZPmYzPiErYcL9MAi93iHxjui8UTeUkpw9M1EqGu8EFrm5U",
  "key20": "42ZpmPFu4MQgjZjKLFGqbB9ZXS5BeE3CG9RjoF1DCiHNrTaXy6EznNg1WYHjtGzGs8tzMJ2NgJ1KrBhU1VNBd3fh",
  "key21": "4jpBejxKyXLbG9WLkcUEQURJ65MGn7syET2TaUGQyWMS3174h6zJkpfiP35pWGYB7jm2cC8YULdhH2RVy4mVDAcd",
  "key22": "63oBSmfxrus3myBn8YHePAVpfk5Jop9gWWDVDCSGHmrS4LYZAxvHQQ3oswexxo2W2Dcd5QGvrjmLcxjFHHhZ9Tqr",
  "key23": "5YbXBuadB7tPgveCiYjaBuZwkqKjyTGZKSHVXRgFVVFdwTF1WtVtyZ3YLubvkDnFA9qBdjtnBq2TSVSiHqCJyHYQ",
  "key24": "2HX9mF2FnDptTJ7vuV9zMMFRuNcUf7Tbf4QaTyPeysTRSSUy6r6kL5f3ko5whYL5pTFDf649J8knKbaxM9dsE4mq",
  "key25": "2yJyCDZS86VEwTyXP2oyh3MkZog7XknKtMKfNnwoSduuJn7DTBXKfidDatAkaLqMbvBFFW3eLVd7dUfdGJ3Awn77",
  "key26": "3By8de5FDiFc4EmmzdxzuhrP2Gf8GEzkdYLxMN9sRNbMYRr6MERhFwHwj3eRnmDD2S5yKwTAouKg367FGDLPGbnV",
  "key27": "25P9pY1oRkh6AFrEPgu2hE13q3G5JGB2YXLGZzHaACr1EfQvXNYVro4w13XYCuio198W4Pax1Lsa32bRfvkLqnZj",
  "key28": "23rkrNGPKCBharSvmpLEmSqnApBfFXFpagBYM6DAr3SfNfFcTG1JDnsgqUfdRYL758u2weis2Tg9nDRMKn8WoWiP",
  "key29": "4Wpie1DabTEDhd8hR5qso7fGmGVdyWXod5PN1q2CuMnQKWHhy9ysDHhXreZXvc7snDr4ayfUrr2JhtevNaBT2oW1",
  "key30": "9P27HQTY1QHX6nKCHr8uGbHjnuw1sYDbCiwn2bcHY7w4t2LVddnmr7fPsbBrMUfiE1CBYjvDxsawcnSEeJWWQEU",
  "key31": "5JWsFrJcixUbhBDNwgo8EMyb8wCGxwPAECyRVQQ2Uttu2BdVDxmiwuAPm8H1kMY9mQjniov1nmhWRLosQi7VyGRC",
  "key32": "hbC3khDXqUG222DTdW3KLp4j6TWf7Lcuk4vNvxdzq3tBpmUMnwXBkgtiZ3hau6FS9NVW5kfygncQC45Z2QLZEUK"
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
