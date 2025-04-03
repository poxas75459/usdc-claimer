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
    "3DXwzZYc4XWKdHSN26N1VAo6N9xjyjiajqBod5t6rdGFjiRKPCU3J76gtGzBHQa5Yfu415RGxrDW2MQrUXVJehWH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TKJxszWaGdXTgmKMDyXqGYPVmagZdUfQVRGrGfu4QSudborr69qKiAEj2tve31Xkfxw1i4jZ441EiuBAAWe8VB9",
  "key1": "4FNujJbgRjeRdemdtyRXXeW9kQLuXb82QHSLhhKgBAyHDxo9YqdjYWtJrxmrPN7eNXBTdWtrEokbgxQdfcj5ytR9",
  "key2": "3edMov93Sac27R23UmwyKeLD6H769bqcqP88orpNT2tJN2SvrV63nVwCU5aStTDuaj5syPJ46D1Govi1hdSn6Zk6",
  "key3": "4rBy1p9tcDGxXVbnn36ut6EM2WBnRyJxDFGU3ethk1NxVscGKzFGQfKo1xqMMw92xLTbxezyWbC412h6T1L4be6b",
  "key4": "5ZZvRFY6WU51XQfUwajQm1NK7Vg9kHEnxFJ6eqLRaSERzji8bQkSHsQcmWZm4y2xtytgFkpVjX1NcdSY6ZracPeB",
  "key5": "4294JmceLv8euo9Kawkb16mgvs7YxezarZtgbGDXJKDmBuYVY6iDxkXSpMwaEbRmHiwAP57864z4FkQU7yFJpMYT",
  "key6": "4fFfcTPt6C92VHQc7mcCnPobdUHH56BEApXhhb3kswdKVcWpHxYCRKwwktYAQ1g8mvBNPXFnuY34i2R4iLbkiwcY",
  "key7": "2WT34QDEf9ucSw6163tr9WGZTjPFBFeVj2gFtQwhCt6PrMu8RcCJDKH3CD99WHHK1hHkoM3Q6qtowcT33Udr8gXz",
  "key8": "2SAkecBB1MM67vEPGuXhHHND8YrsRWB374TWbQeYJXE2Qto7sn1J4ujWNw5Kd2E1eQQ1vdgP2HxyQ5bY8u6NE6cp",
  "key9": "3T6SBtyYnsEyqtQaUuBJMo4yeSRDTdAFh7p4y4KTRiuPdqyc5RUz1G2qzGd5g5JR7dTUJywq7r7UinFt9XdwHh3R",
  "key10": "4DPS2UMX1YuXLNRTMh6aqoKtUZ7BXUh9M1HN4UMFp7NweL1cTGaijY9F3m2qqH788FZnCDusjauurStfXHWwB9QS",
  "key11": "31wu9MBYuo7E7qCnK5RGdJGwEzkGJsyyUj4xufTB8hQEDsBeVs8JwTW6hAm3x4Y4DHmMx6mQi73egLcmYUzsLknr",
  "key12": "2vgdk49r4Ra2kooxnK9UfP4pNv5MiG4TDFbJSjK11mZZC5sG7CPZiUNpvQyWzycvEaE3QuwrdxYJ4zJ7FGdWVr8C",
  "key13": "4Vhnrkiy8jyWSQQJkydwXrT4Y3xnzEvnwcUZdyLyur3V2p9WF3ku6hnpMmH5SqBwqUhZaSWtRV1XxysiujPMoakz",
  "key14": "4gbdP8AX1ydTdNJa1czbtWSWMETcBQV6ybiByKSRsHprfGGyMoD6HQXuBMVg1AYBPxsVwTPwgxp8noxdknXEiveF",
  "key15": "5Z6QakJrzyQJwJhkazwMBh9cSkjEvufCSPEveFAVoK2QxJy84krHQr2VjuM6C7s3AMZZFWLgxbneBRTDjXALqBK1",
  "key16": "564w9ztoAkdZ1TkwqsKYJPXArViiwJEF1hp8RLbHAapjKeJMCn4maNUa6YFVWm3oKj7qNtB2HxDxVfSos8hYFDsg",
  "key17": "3jxyfrqH8WiFxyzYpV4Rbse8y8uqw5cqrDkFLjUMtHnf3PhgsCSTkJVrLn7dk8GUbYq8aPyonuqqRJP51NtLXhbG",
  "key18": "5NbSFvZ16KXfqkg6PqzNbGzvWd6tAMUR1ywThsaTqsNeJWvdSWxPHXFuyPGMcNYDqR1hHiJst7Umx13msiPm2QtG",
  "key19": "4RoV9WY7iqdPAUPvhtEurKQYhd2nTcvSBHd6vfWtNapPxXH9MFRYHBt4nzpJiQteWezDquzhjB7WQWjrqz936zpz",
  "key20": "54Bx2dQZPb8YR9Bb6PfRQTmLPJ2fcAhDy1KJZEFsQ3tqNE2TJzULMJ4SaSpc65am8tX2qbXne7WLSFwKfLRY8KDF",
  "key21": "4unSh3W5ARpdXAZtLuPTkmwBXx8E4Li3riRTFrHDNra4WPgvJW6gR7QnsQm88psQgy3F9anpLFKwwTdp8ow3mF8R",
  "key22": "4jarbCzX9GsVNNtHNXLULuELEyX5ofjaZA5VDuokuYUoQowiHyeHtmEs6T99QNqSBu5VrEdndcyXFc3uWRteMxmr",
  "key23": "3imkTy2bf7FZVuzzrxVMf1149su3XM3cBpjaAtMFz3RPvJnaFfAbCBZ5nGk6BbK6QQzFhHpu5MRQ5aG7aEUjiqns",
  "key24": "iHxLuBG1DjgHWVENGzBbWbDFMhEYyiGsuJUwcHTkxcqPB3A2ExB2hgQV6AxCEXd2URnvgw9REnNRBXAj4FF9aV4",
  "key25": "64H4KtaYEMkBSXgmrDFhauTPYXkLP5JWxtWuS4wF6TrS5aRPr2GBZJyZENBHQMTirxfXCsmc1pgiYYk2ss45WnnQ",
  "key26": "2fFhfwcDq5Nog3TQB9DoFkw7o5Seag8qcpjdcTEsq91YJBJEYKtChN3Um8tcifZ9sonEteLwsZsUD2cVfyofYeTS",
  "key27": "7DDoJyhMEiNeaJXKiPZ9V92dyz5X4TeV2AQpePgqjZm5R6DzMMfm3stgxN88ELTJbGV9VNLqC76VBPGztfNrnJH",
  "key28": "4wg8iANrc63EvbHjNrkYZCHnsjnzRdiM9BfBAPAeubYjUAiJavwWyReWJDav8mEUh9mvHd21B5rwh634eWzJzztW",
  "key29": "5ikEUVqczimyAkkhgET1gqUQDJhcabjeVopvCASewKykZv3ehtDan5X8tGCVU65oTnSvYroxmgG4oeb5eoasyHEU",
  "key30": "UMaYk27sKWHkYY5Bx85twNKY8f6S262yDkQuBAyrfL7GAWYyfg3X3iCFCmmpEwLD2uMBhxNbe72GRoPGEkjv5QW",
  "key31": "i7cbvK6bR5t7T3FFU4FfmLByLYeGUYm4WvvH9nhrr1PSdcCsSykBzFthC4p65nT4uuzRr6gsk6vPb2XQPtVLQnN",
  "key32": "449EtPcqvsTax8ysCthvrnfTyxrrcuDqLiB8zKi978gyr51ANTe2Tio2rBBkCFpG7Prfgm8QKHMgYPLnAL847kYK",
  "key33": "2C76eTmC6e4Z7psiSLzkv9QHvsXN3CwqbHzBawzMF8AvRWx3wxtmQqXwXMNcqyphnRtY3w5atWkiKKRzzzxXGRd3",
  "key34": "e2Ksq6hirwBMFrnVgkLHwcHUP9HLige4eo98ebUGtosVdghtn9Zqi8AVAuaivzL3NtxstsyAZW8h6gqrrVH9uXV"
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
