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
    "3hV4vJRD3cATYaF3HyTcby9oULLt75Qe26W3TrYmgshKLNyJTKuSH8LHyrjKRE4f8UQuo89SnqvTLQAxomQDEMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nSPPRGLjfZSDewevKKFHnHuG4sb9KGYu1iAGeXeynDxBLNqtVmLXxcHh1B9k33CfrqJBKLiFPfT87h5SZuf2QRd",
  "key1": "2s2EegxyuyhuDcYEezU6JUkL2R3kvUioWSoh1QUJ7zkENehtVADf5MogwSPNrYJe44jXkM7mutySKdNvEEZNNhaQ",
  "key2": "4KaE2KFAo3z1PgRvDXX3aEWNcAAvaaXXDhDkgYf9KtDTowDfceKvxJ5U98ztqtMyJ9g4MQ2iSiRrwX3zLjosWbHu",
  "key3": "35HnCMSRWosLeFGG43t892v1vch1urnDnrUvVAfNrHMY9bGzTX3mUx1uBoaD477RgzejM59vdSFJFM9Rfw8UB3aF",
  "key4": "2wYvQUwSm6GeHSgP7rzmNmdhgBbx2FkuCTNupZSMb4DyzpZXpZdACix4BpiLqtmXhs9ckyu8XLYC8EQHcjJYHkrF",
  "key5": "2RUNMgCr6N2gX3gwGxuZgjhXYSiHS89goK2VkVCMCiUX7EoKjgQEV86gWpJjZmho1tiHSaSnMhBCzMjm5LfVnyEV",
  "key6": "aHHQt5WHRFE72nUQBdRAHdyDR6NcBSEqANoH8ngALUPgrn1fvVF1bJVKL5AUJZ3JxZJBDaYUTNPHRoD2XGxHb58",
  "key7": "5GAUe1AnKN8kDWiABjwcBy35AYj6C78ZWntPcgZcet9trofh2iZqz1uZJMtnCgtnmDQHfwWtuNUtx8yYsZdxFp7o",
  "key8": "21yzHPtbMhTguJmxh5SpxS2quzf4kWqQDYtLZhJz5RYuNxG4HS3BnuRd2gaG7ADBhFuWrVLVdPanyn4B8TBtPxft",
  "key9": "miDGiY4Z9ys6kUZ3AkWjZyEhU5qFFuPssU17rCXpMivunu1ueq874Gd6YZMbqQs9evfKQLpvWNbANqF2C4Wfgbu",
  "key10": "2RXnRW8hyySg6ABoCpcXQVuZjCsWUJK3AscQQDvfxqEtUee8voXEJdYbybHas7HVP14jcg4XTQQiYwbXPmRLnfnu",
  "key11": "bLxdq2HtrEvPzhTNQeQhK3PD5mu39Uydda3pcDgcehw66puPbG6X9BmVwkatsxi4HRxyvVPJJBcAqKXQo9nWoYE",
  "key12": "WQzmnk6g8rCevP9wQb4a942wpDW52QPvxHQyqvWXLXwFLd5xt7D3sC2fuWqiC34HEN8Ghk3zdfXdXBkr5FK7Yn4",
  "key13": "2q59ejRuyfA2mN6GaupyXVk8Jum16rLPpbvj6UyuMPVougpfJmNmhtPw4M6vFkbfbFWmxm7LR4qDKyPsb4Mww1WR",
  "key14": "5WUpQVp7X2AqJNmk3o3sJTwvVBbv3bV9xKVygoSgGWNQyeUEK79J69Mi3fBnirUyHcQK8UnLkLLzRJrvrohrXEzi",
  "key15": "4roidnVZqgmdQcXse3wC3v1AsqDwvRUdXs6bHiQmcFFj46PYoPZsbJiweJJjb39Aj4iR6MBcko81q845eSCyPzpo",
  "key16": "eW48pzxTCFtqwGdEEsdFGK6BBb3Bzp9abGNT7MvAViRPS58sQsTdq959QnRYrmM6qhyPvTacGnaYQHnqyn9PyWd",
  "key17": "5tjgmhtWwByGAfCC1obVQPTFyXCmKYW4szx8L19rboxhcnkTWtm29W9prXdU8VWbX4ptpJCdzJRnE535Eg1nCP4s",
  "key18": "2VA1uxGAxEPPxEz4CigiuPZXYL5ChjRMvfnrzr9b4v1nkjsm2JuiHsh3zXC5uW9t1pbUuCJD91eAExWmwhrc43Ai",
  "key19": "3MpMydJV2x7WDXV8tr2MzbHT7rjsy76FGG6vTunrjoP46RhXjpCUCH87GARMUDsgi1eBLaKio8zQfPx3hFNSB1iw",
  "key20": "2rzZTeCE5f1UiHQeqpRMYggN9hYhDApghqEoQYuohSkhVMPvyE6gqPNQiAU5xeqGn2C3TYgvUBYsTVMo8VVyoJi",
  "key21": "2Lcu3Rqk1ts1EgPH24QY2ZUFerSNJKgqTDmRuJW2auVpZFpteKMbMrexKDw8f2m1eZjPhETmdXmtLgf7sVFRCExA",
  "key22": "2BmJoqzjnVRucRpcM4JZFXRcFCGbgpLV9Cd4u9mj95gdr2yAKQ6XSQa68dySsiA7yFgZxCFYQoPeU2CxnNK4GmjV",
  "key23": "4Btg4Ge1vFbRi8oCF3s9Yvh6Z9eTE4gQqEqWkPeSVXPM1euiErFaxcvdHRq6jmonaESs5U5MjUhCQRi53rUjJXYj",
  "key24": "3HUFgYAeBbMwBRmFRcN6P29Ri71HgcpKU9vVndihh1gTwCXnujVHazpKvW3YpJHWXyekDMhXUvGutzJzhBCvLaFK",
  "key25": "2ZVccfyeuvUMttRJYbKoVbUkdXVA1uhNSMTnGfqYVBfysvNwd3niAh5B2z47bmYP5yJhWbHnbSUqPQno176eZYDH",
  "key26": "ApX53SRHMy6KdDs8KdiceTHfCuWv9GLejsT93mqCwkVfHuq8qg1XhBvHkJnsG866SWdF4GQQLTcAsXo4PuZswRs",
  "key27": "5MfEGz8EZjxmhSohBGRSK911fKwja6zSymb3ehvWAb5bWa9QWC9H8YH2k5PrXssNQs5DTNiKMzZmg4VCGnTmqQn8",
  "key28": "4DwvXL21SL4nC6kjvgZQTsCuENHZ57PtzNMubZH5tkpDhKmR2Law23AW8yyreRqhympN7RGb8D1xnUq6NLA7m9HK",
  "key29": "3hJb8WtzPiTdcsfUF5WuPm5926HKto6pMek4dDp9JGLwQqVZWikM8K5yuxURy5Rrnk58Ej9wzJBjgWHfYTxxPC5H"
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
