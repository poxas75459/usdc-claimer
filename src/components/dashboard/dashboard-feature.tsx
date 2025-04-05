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
    "2ZyKF9sA3vHgrpZnmjSMp6TkseM54DgChGmk8MohfFevFJuHKGTVHSpG7q5AoZYcoJKFe1MJoPnYwc6mhRAcqy8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HrPuHD2vENxJAfsNadR63wfFaXofu9oBBzD33QVpQkq4jjfBocPDaW6QVVtzq4V7hkC3FeiBYQ7zsQ6B6CLhFqs",
  "key1": "4ENS16srqayU97yzDQCBhNoPRAPg5VvWzSrWndoaF2ZqAYesSPCkpLHCvtraY8SEF8kLLbWCVkg7Qz3aLnP4jWmM",
  "key2": "4Uk9pM1kb7KY9m2EKq2KCxY3cGXMipcUjwCGkp6HaKZFHMxM3PRd9KbpNYtjTjhSuZGXAuMqDU3s2iP8PMRUBmpc",
  "key3": "673PT4rwTHZkcHV9bSwpThddCeMiyx4NyB92YTtAM4w2UCReCGS93JyXFfRepLufQ3ZDrHrvNjPAx4z4rn5XRUih",
  "key4": "3BASHthoSyxqTz13AvLZdS5Tnq19LkUFnYLiBGZt3KdQ1X4f7uvoLv3nnWpMzAtdFckjBUjkpraoKSwAUsp4jpiF",
  "key5": "3LB6UGpELBkjs77KMAnxPsPhaY33kD97Wuk1AR2FFaX2ac3pFRfFdRsjz2jsXHz2LzmRRoGYxC3sJWyHnX3LX3a4",
  "key6": "3UjEWHQeXHri38mw1ZcVibati95VG5fGQXFbTzXr6ScSu3wNrKiKXT2DtyeE1inWiaQYwncoRwVxXDTjPwxkcxwD",
  "key7": "46hUMpWi4gb6NoYDuzoc6rmfsefSrCUnYTfpaDmPkyu8RsUkDaY8NKuLBxKq8xXAtZVWHyMonYMpmEZ33VJr5HUJ",
  "key8": "4WUYjLh5gQxWJqSM3oLzhaRxTgHDs6ZzU8Q12MTH6ptFU1V7Y2ujTtsXBo3nJ1digg9tXkfG1KvpKJQ5Kb5LcCc3",
  "key9": "3tag38VJ8rs9jhJJccswsZQANrQuWMeXWpL1zRzK9V7yWhHANz8gojB9BnbBbRgNxigjiGUTPB9KsxSFxAR13yWw",
  "key10": "4EVFa5Qxd2aqNdiDPPVbwp6PnXAF8sirVaQcMSjMBYKNi5cD5z9xbtmvNZW4W3S3fFy6GBawPFPqQ1wANG8bMFaL",
  "key11": "5WuVnsUu64GsZdpHNw38cgGfML8uwaK6ThLVVTFJWgD1nMU5QUZBP3cGq7yLTKLrtyiQV7XXaA9vwKPArqaaqSHD",
  "key12": "3g9AX7zasSwwKmUiHmYHJ9bTvEPqBF6sAXsL3VQu9fkcfg8eZk2DNhBjJfShi5GX9wVfpdb7Ah5Fy1JiwPW4xwM3",
  "key13": "5z8fTfBJxZZCS22PhMjov5ZzMqxZcfsrVixrHEc3TJuBveGgETmxs9wckpLuGxfyZwgitJ5yWxRiUKLugdpJeNYv",
  "key14": "2sDjrHeGW2fhJ2KN6JokkBXTP6DXsaoPR2UuWZ9RJ5de8t1vzKvYg6JKuxTWGneomoMZPAqaQsies2cg91aw9mwm",
  "key15": "2NFRMbWDTFFttoAAsgySNT2d9kmjxrfjq5H81meeFC93p9X39dPhMTmat8V6PPEsnR2EXg6gEvri8s6YCUfsabrd",
  "key16": "3YkfMNepHTiyALsG8C7tms4577dzdXKnYHT6wmoSpcVFoKKtcyTQWpnYutJu3EKCEX6AREaTZLZRK5WxZLAdqzV2",
  "key17": "4D3DwEZ2V3vAhL8RnLTs9jQSbGktmmUZxEASZBeqU84xREfkKSFzsCLHzZqVpqJNvu5PY1B5h4vBMu6roW8ZmFwT",
  "key18": "2YWh2cmxiqP42FKgAoF5dvnuHpgP64KvM1SWoBqwS9fCB1qebwfQ7ziSASEyNdXCj3CbZTU6XteDiyBSbvAUyzpd",
  "key19": "aK7xMNktYP2Wf4uR7g5uTxAb131A2aHP6vA4dfGaEKyt2vwiGAHWh55RcrfmT8U5onorzH9XagpRcGxDBdkX56F",
  "key20": "3429bqpTZfopQN5SJzoVJcmRpehZA3RgsgRGb7s3xbXRYkaKN1NTHDy5MfskRyGnBDAF8ypN464VXoSecCatehdj",
  "key21": "2UdV2tAfoTSFYK1yQpdT5Qy5CyDVBgZbFCEvcWwqyXDYckJtNbjUVJXQksYTnwqJYrwVuhTipeNCsFJD6dNAHJqq",
  "key22": "5NyF9sqdjNEA7N8h6nVa4aNuXrFwrnmDZ6LYmrW4uaLcBr4nN1LcfFQJCcotvZ5dWYZcFCz7jPNDe5jtA13abTgU",
  "key23": "3P6xN1ia9NLB7VZwabMZCd5fh4JctVm3vRjhs3xDmJEPexxjHUTB4KnfVT3zxGZ6xjcrdQDxf2mu3vZaqkBv6pNt",
  "key24": "WMA96Aqq4SkDtHXGYTeGmg1QEpyqedA4nZL4pttjZxKcrtBTEcN1tEtQfaC9uLGyr5ieCjkbNV1MuLRZXRYnsqV"
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
