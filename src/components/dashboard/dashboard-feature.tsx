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
    "4vfeQiwCVH5riXfg1mQSEgkQc7YQSC1KU14dCQu6veF8df9ncwVJScER9SF8v6YVhrYSiJZY7YYUmnMYofYUhXAv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rKQCCMhGSq28FUEjgt2cLz4iDskBBmubYeYXLQfaRM6nZHS7wKjXGQYUXjjnge5ALfR8QVjQ63NC7r8a6Qd1JU7",
  "key1": "4yL3hBmLHuqkqApP9znnAQmNpG1j1FanU3Ltmcv4aevMEGyADcnvQPbsea1f2N5mEqb9AGRWv4HkvRrRBRXB3Pxu",
  "key2": "3qKcG6sSG6egE2Md1SLJFepLURtGRSmDmsaDChfL6JvDCZGV6KiJbEHiCpDsxLY6qDsPekQePumuewSHRVNC4UbD",
  "key3": "2zGoXQXSSpV7DgDgnAPqiWE1evqyw4QqdYSByjaJ35epBuRjocg5WcU1sW9kutgpSTpjSD1QGdNAwhnSjvahrZAd",
  "key4": "5oex1RDHUnbt1ByDu7wnmGqLCxrWTc4PEkVyA52rwEKd1KemvK4ee66t1x4NSvQNWS9PeBJ2m1NpDKrGbgta4YHJ",
  "key5": "2m61VqBerueFVsuGiAv3CSbbyN2j34FwgoWYsFJ36dd5McGELhEVUoWQZVi57Tcr1dt1FWYjk9VDaW6vR9j3oHHk",
  "key6": "5u8DNepdpSMjJKKRK6BGhHc5MtMHwP7j2Ntui7zYpk8QSXqkSMKLATgcwsqMCLxEyhkjLJB37TVdC33Fq4kpeTxs",
  "key7": "3seWxreTLVGP89MH88ER9bXztmZRNQeHo2s2HcVB6ZhAnYSFuVNCkohCfgitUry6GKvbqKUkFvSEhDvQ7WVEyKP7",
  "key8": "2oEfZoHfaGuPLt59SX1WqH7592dnnLxM7JKNmVMTCWx5evpXQEv6WeddGbRwJB5KNTLY2A5VAw1939fw1HQWRt1D",
  "key9": "3YjSaVPL3vYSd5fHY8UQ1Ycemg2UqJDuTCdF9cPwMaEbaCormaXb6dbZYNBSgsAdg4LounBZHwTbwyR2m7T8z5hB",
  "key10": "2CXu7wkSwbsVBPoFFYHx79goKWrrqvbi2x2kUgyfZSuQQKyVQKeKbMgmRx45Tb3ZZq8onSMr7CgLEiAPMuszBySD",
  "key11": "4MXEh6MTqhLWtoQQCc1fc1hKLWroZo8GJQ4Ndmh2UNdMADRTLv2chgeddBDkFazLMnWqudhiYWDQcJPfbHXFNT4b",
  "key12": "35GyKMknW2e8PXyx4KRVbbsmM89uPWWF3CzgTzC3JRo4oLLDyzoWVcGJwjmpZsfdr9oXpcSZh28wcndhUd1Xa1Pm",
  "key13": "dxhiUuxR1dfEYVNYgBgEUdiuh76rdZQ9gQyZzLFx5Y6rQLriyDK1vTkzHrns8sDuEnEnhUfKYfcpv1i7Mzy4bCU",
  "key14": "2GWpnaQpuyFrmrPMreJMzsKs7FHGPCArhYqTpidfKAahE5wDisw7wKtoYUgmBmBBhReBfobvyAon3WFWqY9SYkjX",
  "key15": "66kYfAhPHXmGZLTyNnGyCY4qYseQ2HLrxJCupFjatr1TmB17XqJbduVFdwoWj5WWBrVEPXacXnnJtvanCyCajXGG",
  "key16": "66XFjNZ4qhRTSk9rLmXV62PNSdkD5JvxqTmwqXTdWzF6HmMWYQH1SRKricLembncm4z22QrWZYLhvCtdn1KxcnEu",
  "key17": "go25h9xezYz5mgM2gEdBCF3isexd2ch8ddK3LgoDfCz6eSoCQMYYoadzuLqzMXkov4u3BmT5XNUAKJcHawVgTKL",
  "key18": "42Sx3ht9S5YHqNzasNvZDqXbhB62zJB8X6QWNJv5nWG9vD4ko3wdPNFavX8HbxNiCVuLeu3dWdWwQwfEEXF15Hsz",
  "key19": "3ywbDGfRgr1ByDwmpWJ7bcbpaRGbVQBCBE9M878zPdSjozEvV6FWkNUtX5eiS4MEdfYS3pgrXBWM8KAibkDrRWso",
  "key20": "4uyPbGCLi3CdvStdzjh5CVUzqbefhEKCDoPA8YSLFeB1iG8QXJRH9GYy8MaRxzQQjRMW5JK4HmdtWhMbUL2XfHoG",
  "key21": "2WgDh6LdSFFJaU3tLYpNp78a828Tzkxs2wj7L9tUhG4HBXiNWkV3H835MLNeUhmnUE6FT4jyZiz6wjoR73ULZvAo",
  "key22": "4yR47bnpJ9wJxbcLsYzxAyh174UZDXGyhHCiC5vuCRabi7BvMgBq1oeLMjN9eybFQCdCw9Pud8h55kiycjFf9QCp",
  "key23": "47X79PUUfS4G3UTYc6J6QBq11oo9BdehQnh8VMky8YYRK5sjjf9QAXaXuNxjQnzrSVV9HaLSHg6xovjyaPSP9kdC",
  "key24": "2jENR8wES28gT1D5Ja3fqgTfYC7ghun8aX2GUwcwSmhgYBTeuxCUe936SEufCLeEuzcPk9P9YW9RRYbRcmcGFrTN",
  "key25": "4t2dTSunf38SygxtnMDNpf4f5ZbbS7gRmPmPw8nC6MAT1XmUCRMTBQ2Eo2YiPoeiSQTiTtctTtDgU6e6Sn1V3tLi",
  "key26": "yYiqYx6DE9F67W1rjrPgLQF5DTCa2RjALXR99fTTZq3W8G3HDtjp8ZgikpqtrmUiyQAoqKFgXuac8f8JAQie5Ca",
  "key27": "5MtHdV4azMYnj9juBw1K4WFgi9qj5Gt4swwrvBoaduLKGpmJZbkv9PyU5cLog7zVTdykkxcEDvJaFJ6kG1poWJVg",
  "key28": "2jPr3jSZJdtzAMWqNAq77NMqS5jZaUxNsy3YeEKfR6k9yArmWuepABcFP8bULA4kL4GwR5TMBg8WtUNmoeF5Uw5M",
  "key29": "4f2oUdhAPvonfz5mpALMJbKZgyveDBUea3kp8miwuehyxLYwgsQMNGmRCiczpgKKSYfB6sWqBoFryBcT5wqe4jFn",
  "key30": "3mGudzFabCfM9K6hDyMfM7pjsrVytfHWLGzfUju6fgyDuX4U4NaeQXaiXMM7DvPuu5BT5WngsaXTCoSCAqNWcZmo",
  "key31": "5JuN9MHg7r7UxZ3pVFzKvbe6M3USnfjPdYkDb5VBBG8hGpFWJb1J4YTnA53SgBrWttyVkcZmCH4wxWLxSuNontrE",
  "key32": "58b5F2BUstXLwn4fXt8KoeV9RNraRgjjsFWxhVaooNSuQ9SzhA2jvrFZRDS8cvVu9Ybx3tqy7oB5bZY1CESgEc3Q",
  "key33": "5iaSMBs2G1vsCnuhuv8iMYB8cfbUd7MusqyrQqdLUaj8aBv8ZK8Px6dwZL7LPEwog2v1fwDZwTPsV1VLfjZutMyg",
  "key34": "4rwbww6Djkc3izByLHpgkWTaAfkHkzJV6pFiqXRSTXeZN4hkYu7QLqumZ3ParLUBmbxw3WgA2G5HbJt2v5WFrfQw",
  "key35": "4WQFjYmJBhdd5ettbWhRpNVao2PooAgSZDyVYXwfzBEzVErukb4zqd5KJJcorBdS2tR3zTWeivcwVnakc9Ju2cSQ",
  "key36": "4uSyrb3ukY69W4zY8S7Xh15eioVwhJyGXts69amzSJQQWhe8QkHaGkUvMmvcFy41RU8oDKCEeUvDu6J2DKVzytL3",
  "key37": "CgKJoGo9ZsVPt1NrRd7cX4sL8S9M4uaXzbkGejzPxyy5kACjfrFUawzAu9Qp68LS6oermUAx76V9pVqhMFRugdB",
  "key38": "Sfxqhz2qxdeSXqw5ev6H8nHMo6L9JN22cQ5LTrj1qTdTuYSBKtYJHZJRNbQr7A4XVi24QRMeyvKtDqJXZ4AqWGu"
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
