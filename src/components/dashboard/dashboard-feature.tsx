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
    "KarQjN2NQvZUibMngdkWJJ44oosukWcw4hE8fV9LbRAD7gUyvcyAA1fdHjUvPMrbizzQesLmJzz4q7TpQ2d6afo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54mEPnbCvL8hE5fo1Sx65wAsaXqpVLK51rpaKcbZFymoV6JxcLHLcoyQJCPYewc2ktTtDUyysEEh6em7hXhamdWx",
  "key1": "3bf1yeLM37Vn4tgurvSt81JrboygduBxoJG5DtdvsebiCWqVLz2phGbqb6SCo1DGtjFCCswjzEqULSoG2v1yze4V",
  "key2": "3Mw5aXpBXRFo7TeoCKbYtw38NgpW3b8waYihqkNev5PPht6hSzjPpUk66zyzB6rWsyiwaWmnVAvHyxGWwhbzwvoS",
  "key3": "2iR6hT6RWmSVvBU3u45hu51G5Rkqnjp6n4LnyuoznjppJovhM4FeW1wH2XLPABbwpDUjcHracz1mNLe2Hu2othdP",
  "key4": "nDRyFdbXJbkStxU9rnwGntyk1ifRJRSpVseuSiC7w9xL6kC4MiF96GJQKNA79KsX1Js2kxhci9xKvraPmmc4TXG",
  "key5": "3TaTDgCqPwRUF9q8crYe5ZuTm3iEnmJYPpnpf9BdQaV7QAGX1EfrpF2f9SneTG1UWRJdUUXtPmJZbnSHs6w51rpw",
  "key6": "56d6LRWrkShVnayiZj7E2kCLWPLWsvZDB8wn4HRMRTAybmovdfDhiCe6HuTGp8Y8DEkApGWurfaFygZ4Ha1NuuSP",
  "key7": "44qsdDhibuFkRsggAhrY5kGJe1YNwQnDEuz7yA26kQhXbxK9dQjWESVNcexd4frHzJtgV4gRAmdwsqoLy2E2eUwv",
  "key8": "4oV4Aq44CieLTfqvrpmdBGroe62YYSUUS8rEWCjChco46yanHDtwi57ACPKS3ScngGYd3AUn3ixnVbNJVMvBNVDD",
  "key9": "41mWPD3hKjKE5Pfkbn3eTUqkyPcPpg3ZrbNtGX85fx6kos8Xx9E6LvKgB9p9xTfHEhWjYbxGmLbWYkcC1DbxgrEh",
  "key10": "RL5NJcgFFDsXRcRfPVELCEeeKsb4sSN9NLTPWpjvmDNgxHxQUkBrxcGTnicTtWJQ7ctrwnxuKvhD4Qg6KgLmTSd",
  "key11": "JCrMMLWqbQyn6wY8NyKGwNNDfAAyEbSDrZHq3MHM5JnkCPsLhM6sgmnYJsPUcYZFVSSx9x1wGHCeRuwAokYBpN8",
  "key12": "2bo7se9pY4LFEWGzRYzNxht2814YZXJCP6uugZsP3RjnsgivHcwZSsTjJ28J39Z2LKsBf62MogE9rrGF63UUdmgp",
  "key13": "4rUouLTTBque5MPmj1bZhwXKZeQHGSoHPpjT5iByVSx85pDB5RKKYgYSrTb1QjFn5fDLCGDGETPnZ9bVDQE3RFzu",
  "key14": "2pH3ABkdJmNo74YkQwtUZenFqmVhacy7biHQ9KHmZrEcoGMdtgNpC1iNtEqUkRGv8T8MZShymPCt8oHoBVqT4ABx",
  "key15": "2W7gqMwpXJGpPLVrgPQf9ynxfkg5bSWhtqcrN372wqU5C8RWigSrzhTNMKnvi5FSC6MSpbmcaRrPmKyUxw3jWJCY",
  "key16": "5LdGyuzyLmAxh1iZsQYEK9d4pJYc9RfmwWLmtJGvMUSMUhG6oHJy3uew8pSKfZ8wE7zh3epdaJiVFxx2QEDfJdBx",
  "key17": "2AnZNHDGBTC3cTAcv5Gzya7vhpSNZWEhQPvahv5ny3Lbkm4fopGs4yAktRfeu1oVbPAgWnGNcJBeyHieBJNu3HQN",
  "key18": "4Lm5o1FRCb4G2JAM1tB47EHLyhQfVnqTHnqYXVve3t8ACJi1e8ABJ7KhKM12aYFoDR4yhTRPzy9LpgJt6A56abgu",
  "key19": "4Jf43Trem3NuVqejJbccioajcHbsYVjPR5yMHSLFwDmoFvax8dSqY2ruRz3Qm2P1RtZj3txfYFLAWPpMW2H2hPv2",
  "key20": "4QmG8tk21VyRCKQEfyQPrUWycq95hkWbcMaS5KJEu4w8NKhYM6kbHGXgQ217FnPtebhyQEyW3MT4paFBMzZL68QB",
  "key21": "5a3vSdHGA5io8aBato6qZjSfjh5koLyGP8kQdR59SzWN3G7uEFfGdgAdw1E3eyvL1EXoWQ3pDppWoB4t8vpHrhLr",
  "key22": "oDRbafqpmAmMvSsPjfrXBaLAGYb5n2MP482JSbMxQXqdJ1GvhpCa56k9uQ6CQEJR2TbBSzCxETChg8fj5g4ggux",
  "key23": "3gNN2cQwCUdxw4qSFajaoaewx4TW5BAiJ8XfERZFXCVMrL6iX7uQY7UCu78vk2tvVuwLuhgQ7j5U2kFFTCFczrB2",
  "key24": "bcpcBM5oLrUgfZDdoT2Lg1UvWAqQmRvDz34oo3y4Sh69TZNmRFzyTVHKBgPEZ3qyWBD3PsgCHqbWnNdNxSrFpCp",
  "key25": "553Mtnu3q5PEYYcqcsVJX1GyuQyNgwi3tagwEgpZMLzj72eH83JXHbXkpByXFk7GfU44CYqLbbm6u1hhBxwaer3t",
  "key26": "55u3jJA6wKDYuVGnhaopbqRGGndLa5m9Pev4A4N42iBj9gZsMXL4y1cTm9fTHfTBfLQCn62rNaV6qJG21Nhr6Yzu",
  "key27": "2wAmWDtw4gG51eo7iN8UzF55DkN1NbCc1Pj2dSb3AdZNxtKZyURCv89aAiFPquJ4qzuehXjZaBCY8Fe23g2oD714",
  "key28": "K39M5rFs8iWDRH1kt7mCDYPXN83LQ8uhs9U7zZPZvJeiuyNZuLrhD5ZCi33UTQ226154V9LbGADwazuZycsMJiU",
  "key29": "3Y1bm25SrixZwtziPxieJpWMQVcoK7ahHiXYEghYkMMNhYZ5ZdYTtFQVKJL1G7M9KvLnEHZXWX5FCHsnEyz8Xcwx",
  "key30": "42jFNZoks5ab9TAXZv678fKh6rece1x3HgNgqndWUd79z1dvgJMqysYGFEUDXPrLyD5PXF3356de4HexdqzFoUG4",
  "key31": "5HWR8wJr6JoPpek7ad7ZCySCcxWb66KkEwkN52W1Ectb9Z84RehpYnLD3Ug3o8QQTxY3zaKY3k1T8Fe1jNo2mHPV",
  "key32": "5xFtoNo2k8UsWx2xvMj6ixWW9yZ1BhhUhhGpNWghCs7TZdBj2nQTB5uaMM1QRxGipwFyoCAP5mr9W6fPtrFZ9LYU",
  "key33": "3GP1yWRSfQ5Lq7CczGS3LfWy1m1WGzV29CgBLdVxunt5WYVgiV8uUieYTQHZi17GAqYwRdRsf2PVxijxXPKrBsZx",
  "key34": "2p2hpVWBXqW6498stAX5afVZstgZRwDzxL6w8cR7W3SnyzMmNj8Ns6E8YM253TsUb4vRjxAVCEyVocFNybTZRzY7",
  "key35": "5qGTJcY2igrPmzuiHRqtTSoWsLDGCcNtmAVuJ6Gfouc4bGiJVSZ4PzGGVAjTMEwmkSr58up5yreJvb9qJP4dEw98",
  "key36": "4DAhwHomfq5HKSNYCVTTqK5XhmT2S8uapK8W2cbaxYVegZVAA2YCMb22XNmcG69pzx5kHi3CYo8su3VcoLVKp3ep",
  "key37": "4axKzxWM1SoByL9g1gW5FrCCXEdPbHvL97LP6GxjEibPJJ2RU2DcVtvruvZK8QuRnb2Uj39KzrCjV2EZJYuYFJX4",
  "key38": "4bqJ5UUgDWm7VZg7VoC7aUGRHVSi4y31fNJiHxv2AAJZ7ssHJrYRcuKH97ddWhgJxsMcti3bDx6oGUU9oA18pYDS",
  "key39": "FWhM3zKfEw3B5kTLVUjKGYCuSzZ3oP5fMd5WGYPyjAxNT2kwQVoCouJPMsUS4JPnfFN3X3NhWyRYsQXSPYfPPEs",
  "key40": "5pCLiTftMBnYQ65aGjs9KYNXBnGPkTEPupmU8fmSJNXXSHhtYD4dCkGhH2zssWMjFDYCGsgzoY3HC4KrX7i5G8h8",
  "key41": "3GPc7a16XZNKW4q7fKNxqP72Pa22LA7UB4j3UT5ikFtmtCviEBYcXw32AfdQK1N8ZrGenDygP4UaytqSRrDxCUZa",
  "key42": "5623fgL5bS8QwxM8YwQxShRqvK6QsHaEQr6FCoqdgqrvpAm66bmaWTNE2KZrJowvdM4SkCUJ9ov8XX1P3cmpjK4q",
  "key43": "2NExZnWgLdeHGujmNuyiA5qXCH6c6rfmq5Fnx8PiLANfAQZmBq4wTWkQQwVoiKNhWmjKi7MfPeDKPGQP6GLuYPdc"
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
