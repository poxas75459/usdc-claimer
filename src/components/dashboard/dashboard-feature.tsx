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
    "3SMLEpHJsj8nT6ui8njySJeGuqWPYuXdP3XvRD1ENwErhBCFHneF4H1vU5M1kMzLt4rsnLEwxk81jbLbwhf5kdZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53e2T43PtgS3kgoochi5vX4UoozXN3BSeKutxGegPT7YnX2mbkmwLMg44SwmzLufFFxcjUFsrrKBRbCEQkZxovbo",
  "key1": "P2AcENjtm4RbTmW5mY7FynFGKDWtj7tykW7XGzBYkr1zdCqbTm6cLFGWAf9DJXpGZELuRG2tb6eL6hHER4KTUCB",
  "key2": "5LTr2eU1kT9fYarBYgm8h6V1emi2JSEsq63yVe6xQ7qYm71PZCQa7Y4k7rHXQCgtGuiMBpaSXiS6Dq1WhPLaWt5t",
  "key3": "5uG3WyC8tBvwSz336ZZU9NQAwS5u2XnQFVDAsZ9hDg5sUcbUfHK2JzpxpdmBFernSymTopqXLspABCZ2Kn8rQnp6",
  "key4": "2bLMFsEBZysxAqy6um4YayvjpRJckHSnaJr9gvzGc3pnCTHeKE7aiZxGNndeoHvxXE1AmrNUunRzo6DRcduWvChQ",
  "key5": "5tme4MdGCmCRbCQVrntNCAn4YG77JxuGPwrDEK1A8RCBgg3gmhYqCvDEUWvFag1dHnXjkNr3TfRC4v5yQfLpb7Ps",
  "key6": "57WX3YRWxg6NauyURTs7QL6rBr4ifbYk25qpVBiZWV3VLYuxwJvzQ5pTPv6p46bQJp5SPYnWUnHccmB39n4xEJsv",
  "key7": "4NtuFTAZsQbycT2G7sd1W7SsrArbYDHefrupS3zkS8HjBAV6gBU8m8zhLvgSnrAZKLkFhaymhpANs7pqU68oj9sS",
  "key8": "2QMpjVX7yGy12Lsd48WfeoJuMJvxzXgvR83EqQFpnP8kFSu649wXV226SbcUc4Pffts71M59NhjTrpY8zMnHzZ1M",
  "key9": "5vPo3KJy2TUufCVYXQUejHYHirLnh5AAWWMGat8Ncrq5Yfdag2gyaGcpRGFB7MW5PNs5QjUFKu7Pq4zT8FJxGxy8",
  "key10": "4RPA4yZJEgoBoevWWizkN1Gj1YjGnKfNr2t9g6TLUxEXT5731jHC9bMEYvMayzrwVMFQZECJ87a5m3Dd3V4NyoUP",
  "key11": "4m9HMCP18h5Fwv6bc1s7GT5wXCvECNTSk4D7Wb1C3uWxxWQ3qTf6gFkvV5fLScwfin71uRb9zGupTdFtZR841GpG",
  "key12": "64nSM5i65WdUYWCZ7pKhDycBycFYUCTMcsBUZYa7tLw6gbEuhnFmd7oiEyeSvtaHceFJvyqvoMGTsS7Pr9S7uThd",
  "key13": "4HJaGfRRw5guEjCYBn7cysJhdZ61i3foSAjSomLNQSDLNPrtwQeBWKic3wepfsabGU18oCzQYJENBVPeEnqaaHsR",
  "key14": "5zXxWAjEvaVU3kvzrhVqSpscxNTqwiFhruACaaN8PVGjsSih4EX16REio9bbCfB65ftAwg1j4DjwLLYDiduR3gTR",
  "key15": "BAd3hch8mPpoU2D3ZbbFptZaLqGen8495zJxsTm9dRQHD9Sq7wYf3DM8fiLiaDaaUWv7UfbXNxWdDdZPFg7xCro",
  "key16": "375SdN6FXtjgTGCoMaA5TLeJyQ4QjMnQ25aoZ9FAVxbfHmsjyX9xP1V1xVNjU7ha6PsG93jTVSRGzWXfLeYvPwUQ",
  "key17": "5Pv6XQjrmRPHBAdG944F1xvsFu98r3Vzh9gC9GWMWzqC5ddjQXXLa66iyhnHfoFgQ12PjozAKe8x7ES9Sk4UaGJ5",
  "key18": "4YDbuVeXtTi3DGM2NyaNL3S1iqKK6idNUigXLqUBj3GqBNJPoRNmECZN5VFcjAZTc2hKq3CtHUG6aVn5cwXiNBK4",
  "key19": "4VraMqmyHY5jq6U5qazZ8wSbfahUQGfzv3JP9UqQ5HvXcFySPgNWPDu8eWxHfdcMZb8HPf1yastvwaqxCEwYGW8L",
  "key20": "R4s2NuE13CrB3VGwqderuEmgMFeSHcxo6KFLt2bswXg9UhNHkAuKTSRcJGwJkr9jApmrB7sPYNBUbsvAsr1NjJS",
  "key21": "2srJYnFURXCpqcsjGeownmrYtFn94XdZW3Lm1HcizAzf8uDNzT64Q9Hy3G5kUb9jGVeuhxXk4SDFNh2eeid37QQR",
  "key22": "3LHFLmphdVGY1VtPo9MADvVZfGujV5gXPZNvKePsZUUoyZmusWXxmp6xmdihEXUazKBXhwJGSfFAX9uVcneciKqV",
  "key23": "4Kk1w8B8TUD8DqasQEbHD1phdWZRHqQyaSgbk4MdyZyM5tnV79JZu9kofxQbj4EkrgtKSn8DRrRp8LwuTbSr1Q8b",
  "key24": "2uCssWokg3pBCur57vNpiv2X5eqXGeoTxXFZLhk59YPVMeEdDt16dq5tiHMEkFfWwrvNmXfsuFZjDV95evQRwaBU",
  "key25": "3cHLdVcCy3h11vR88MvKoYkU7b7aZ6xjh1j6dkPWtZQNUS2xBBWhjW6ccZAmz8N6zY58Fv2z7hTa8YN64Ng4xtBD",
  "key26": "3zyCg66CASNYPSrUQvjnpmgQTQsC8nV443S5jPPverXKNDRo7Pwhw9KU2yYHM7YPB7BgNcdpWPUnsFQ8bbghpcAG",
  "key27": "qZDdfBXaXHuJyBqtggcdE9qUDThkaWXJXZFRmiAiVTzYuoJybsANxAWqRwYu9awCF2QNbXo4hDETWhpVSnXGTBw",
  "key28": "4qfxQSC4CvLwb7ddopGGLWjTmHus8Ek5vrzfbZboEQPsv6VunK2KqQ1LciF7vbj2L6Y3BVMTs6duHTsFPysoBaza",
  "key29": "2a5MUF1uBQRDpPEn6hDp8B2NiRNTpnBupoTtTfY1uJLa48AFiZvCeE1BJgSVevP79EEcCFXCbzWD47AFXfoz27dN",
  "key30": "4L5LQZqGGo7kWPVphPoB9dq4CKPc8HRDrxe9ujRJVo3mVbkZdCqVZbcC6xnWZHTr8Sh13TmjXHampARrouEcNdXZ",
  "key31": "3wm56Zw9pJoWYBZSSzcfKZJqPp2aoPrF4c74Bwah6U7gaVhAB9AxAtJAk5eWuyuVfpdzgWWDwpCgtheQJg8CqBW6",
  "key32": "4PL7KmzvH8j3S6DrFnQtD5VwwgwQ5jc7wqSSt7uzg7y6DNifikoQfFTekhikVxhbDjSyBqkqDBLVPmJvmbL5pNAc",
  "key33": "4wrSHgEt3NC6HnbqCWNWyAaefNZNA2vzQL66q4Vvi6sLfXnmCZ24G9mHCKyDdDiotVctPmoMNmjBYfbdMoYJNHTS",
  "key34": "45rYZmHdJV4kcCFNKpwUfYP4zUdXeNSwfgZiE5p9cZAVUGgx3Pgr26FgXPu4bSVv5DZensneYAjWpZxCfJamxYnJ",
  "key35": "47xf896ibJLJQeHkbneSSHXpSaWHBPpN5Ye8VYLpxThCAJSavo4BB5aWz1gMmDT8Z1kAkZxjuBvLNH9hqGbBA1sd",
  "key36": "5su5ZuH4REDBf6vJ1AvoisbDGaDCDvTta2XMnhAGRk3ChWeYU2BN3tMxH6ovjUwvH4K9SjQXLocjiuYwRJkQysfh",
  "key37": "66dsARQDq4XLZJQKZAht6oQSJfjq8oUvZMW3CL6vyfoWVrpWtbyiskntEWi4pPWpYrUQgXDWSgz9gb3pY8ZBPQ5m",
  "key38": "3Rva5pma1mn2uXAYSXsHwynBMmh9hzPecjBPXHxXaBTsqskNFdGdNYg6ucnLyMqZmtfzBz5TYyG4n7HiYavDbkkh"
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
