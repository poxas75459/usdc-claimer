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
    "zfXqDjfMCbgH3YVNAUsWFXsEVotAZqie73Zz7ziMA6p6FRVbwdUA9poQd85uj1eoftBoGdBhnpWqCMFka3sk4rT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JYZQVJxubzUHTJyC7xcU8XgtgyCzF7WoNkNNqej4XSDu9hkvoGjRXeBBiV9VyT1bvZg6mEGhCABWc5uB3iAwoSr",
  "key1": "2FiAfUeYBBMicvMztMu9x1EkuAzxjG5a9p9gFeEs48VmSuffZrSqhGmB3f29wbYaDVr8MpPMkqvdvsFx1Zz32w8V",
  "key2": "biMUiBfePH5skwoFdD66LTAwzQ25KuNpwyYD9QyQYgkH2oUrUqzmvVeadNYcjqfq9o3qYQ4KjmCFEE9DJxckynE",
  "key3": "bXAhMG5RTYFATJVAczFA7W1ZxoBKXcxx33QopoudThhauh7HHUeJk3s433jTaWg6aMEvJTRNsQz3ypMaoKdtjHK",
  "key4": "4eDdzd3ZDYcvD5LX79ggv2mUUxJHUNdqLrgyVDN7p7ZgSAdXUxazcLuc9ScYbtw8FeK9R9T9Ygc8c3A6y79eRF4t",
  "key5": "4WoyzTf17XALQ9WWeQKzhm5APCTGA2giwbb4jNTxPBFEccb5Ewdvk4DquJmHG8XhSD9T5wdQaum2cwapmdiDtprB",
  "key6": "oKuQuFtBDu6pQCe11Rb7Ru2AeoWYYwtjoosS1n6JQT3kqP4FXfdL6dvjKbCJ1sWmVTcWN415JuDcdyfwQ7uMsE3",
  "key7": "dps2cCqQRmnMDW4VP55ggTwJsPTWvL7affGMW25JaNJxpL7uvxAG9pCK9wT1or5HKCrR18rkfPY1CjHJcd7bkJx",
  "key8": "23RWctfj6A2APUyhEExseKLeSmM7Q6EzzEV42dWUDLwFR7VnVt3ttY6kZPHeAgwHHFyFnKS6QDbL5eLaCRUTTTYn",
  "key9": "iJpSNfCsdS1MPWvqiaGzEMuZ59Yb6wdCZnYyz3KyCjxf218e4Vun7jqL2d1kVxDoi89rJPdBN4pdvyLVMwng8mH",
  "key10": "5uwKpPNkpwSDuwmng5vJuwVNQ3Ljg5SZcmgeExvefYRMuhwEWZmDwDtR4dYQLDP98i5xuw6mtv8JszKBEU6EkN4s",
  "key11": "2tiwispQPiGbf9Jz9F6K7vtDc6FP4e79NGJ7FZCrph2JSV8pBhDyW6cveeZx1eYrDN4xsidRfSNLvtzCpS9VDooY",
  "key12": "49DJDSs5SnGtsKqPFbPaEakPBxpBHjivnNwQb4o98zXwhCK58bFec3DDZ5u3Tzp6yiqzSZnP4YERxHoYPbbgGeBk",
  "key13": "2xLeFeWepNViR2jDQjczAjjENDWdubXHr8kq61XGuNiPHsrCHgRdtnn1FB56q8wydUp6yBwxGc5BbjKkNy6ernhZ",
  "key14": "2hxqKDDmdZ5CheUwXq7n9YwcciDivoLo6aZsFrJDz9ppzh8SRwM9xW2K1Ji7jqxdzk5EYzrLxHJG9mUUoxUpJ8if",
  "key15": "ncfqni1DxDixsHrpzoHgMSCUCWFSdUCCE3FmXCiBkB31x9ew3kKjskH3L6aNxKGpqryq6jFu9s2oDaAJGY6nuLz",
  "key16": "5fRjULdfgx3XEEGKQLe2Ke2ZLcDt9B1dHVhy9K7qG7AhVz7mwHdUMij7NCTN5ENUzdHeY5jGKRuMA5ogLnBEs7e8",
  "key17": "44UU8kxsSVVk3d41f8DeqdXkhQoMc9Hm3Si9gP6ix3Sojk5Mxq2eZqTYZQZtgFfP8ckKSY1LskU29veg2BXgFPFf",
  "key18": "2criyw45a7mUxnturEijhXtS8c1ehiqycmhbwqUQUq58YS1iAncjbEa9W3S5qxodPNmVH2DsZCtpzAeDB21vQk8h",
  "key19": "26jQubCCnNBGwQM6H9SDwx51o1GWdqkDFCvJ68aCDx2NAUqZcD89M46U2vnCQqXJZy1GBiK6ayoYfVUNF7RTe1tS",
  "key20": "3BnHYzJgxgi8reczujE9qtTLJFr2JA14bBPhoptkdaQBjgkHJs2Zxwdh1ngrmKG1S4qY4wQ7SxveXE7c1UMUSn9M",
  "key21": "2wb5bmpJS9Vm9Uj86u572NNLDfGBmtZs6KZfByjC5skZL416ZQFL9v3VFFkvf74bhVWYg9jtfm8QyEVKShkKHVqQ",
  "key22": "5w5XUimN15Sps2ZqyfWD1nysUBNzrGa83UYYuz8D3q2ofap73psrGqBi4xoTefp8PV87yhSm7GiyWFyMFkMR5jxh",
  "key23": "Mmzwir3yc4EsiBop3WxZ6vY9bruMoCp439jda9X8AoUjkYu2WSw6C2RuqaPLtNEhnYGb4vAxnfkQq93jDbXaABB",
  "key24": "4wqQ7g5BuNDJ8DioPyNaMi7Cebnuw7RVibD3A5mKhX4BwBZULoiyb5N7TWi7qpSVQm3cbK7S23zA9QWNFEQtc9Tn",
  "key25": "5FimMf1j2zdQ5qKiZEt9FBXVpLJvgALFJGjYSpVaH2SVTYa69KbdLLgU5gAvBzvfPkzeype7VPuqaTZYmbrRVJWX",
  "key26": "2k9qDvjCkHdzhXXRMcdWXksa27Zago7zy73WB8BFQHfPeWQipG9CFqjEpnCC1DfgVc4PKvoxGH82fwwhn7YmWXJU",
  "key27": "2Z5FyRDDfPjUvfoqVn7nqHFcbY8MCxbwDXaxB4M5hnF5TK8m1WkxUxvPRgpQReijNgq63YD7wSKJHYrjpHdpuhbQ",
  "key28": "hPGcAKiswTFaVzFtxEaBEHy2EgQBywH2ysH9x5ZuCPhLN395N2k3z81dsVXSENT3bN4QZUc8iB8vtiNttEWpyQ7",
  "key29": "4bn8NmeA7BahMtQpDeWLUeWb1j3SpFCKh3pSYrd67wArbz7DPWr8wpsFMf2TAbZZNza5G36Tz2DUaceTmRs4hKMy",
  "key30": "2yqjpZ4KknYKQdjCvakdRCHkAUSCpdnr7pztWX7pF3E45tQU8HNzp4aXi26W1V3nuEiKQj7tHQh8aK7Z94nPnr2W",
  "key31": "4k4xHDoGTEMQuCq9HbyHaTiVDxBEMDwyUQEvABqaM9u9cP1qxjsZKcCMUtgmQRBNyUqkGBtmfYrporKsErvRLEjm"
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
