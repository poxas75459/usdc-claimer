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
    "HYED8D9Yztk2JqZbNR1tcVoq6MQmJbq3msgNMUVM4DxCzEtPoPR6xtgVb3JrFBcfwXwVeRXN5Yw8pj4BVgegywd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y4GHr58zoqFN4EgxaySxpUYeKZ2qxEzmSUcjq62qcbS2svVFxeQhTQwj2PXh4h3QouiRthNAxxducc1VyT9ethQ",
  "key1": "4K1Sqw8nCCaQdMFYSiwYhXE8K2ToZsftWPTfvJ7qfXFP9TfggGoKSJDKdo5gyjtA4dkPq7YLVvJzC5Lxhc14pDn9",
  "key2": "grL82vgqtWbB6YzhZFJYKaH148HhsZ9DnUBdwqpUSgWQPazoPWvSvMbjFKdaae8B8Qhf6oDoLgBAw1qYdidDKAa",
  "key3": "3ZfMH3NfWEkyCn7ZiUD7eShArhT4P4zBMupsjMrx3yutwtYw4Co9Hs64m5XnGcVgyGFRZfRWczYSw7jkGqnUCM4A",
  "key4": "26izV63S4nYLgpSWSNqt2Bt83wsgvwy9Lr1oNdb98t5vBUP1y79vZ6n1M2t6HYpHmr1zW3RhG9FtxSdXEuWXtL4F",
  "key5": "4pTEXeCUgKXUfrCoWDTtTALbBvVtjc8jRPhYfTDFGehS2nV7RpUDbPcYm7HwB3S4Wct3uxqJc43ZGNaVeKqoNmrH",
  "key6": "3vNaD8U5wtUPP7ydP58CHsk1G3A3WbMQng74BJArT2VW7eFrxkDtqVHKPpmbAnYUGWFbTVzDxHPcug2QYwCMJThu",
  "key7": "4rRUdbb5N65pmyoT8zYKnA6JUkBrvCFgKrEqDyg148MbVQfRtgd9RWS8oGApVGmLufv7vbsLPM8ARN8g1JRJotc9",
  "key8": "5vH1d7NaVPaU6frkTPfuWgp6eStojhfvdnquyTvoR2TQfNqgPpcKVr2oQTzbGACwDodoVMPmEKqtpea7kxiMiGEV",
  "key9": "5mJEoixGeGeZtVK5e6sbzjB9BsGaVXEfstTmDNBMPchMu4tF5cYE8KLjNgdk7C6VFQ5J7mCdbDmYd4w8em7xtY8k",
  "key10": "439y6mn7DYejRyn7dtiaEnARRcm8knR5XX3xPw3rPLD1LkjDHq1N94Xnj52Y7UMJQvKQwF4RpvxH4tdRe7ANGdf5",
  "key11": "2HnHBPUj1BaJNbmjWwkWfWDo8jaKf36gtEsh5jFyL7PtL699CyhAC2FDLn9jJWj2XnadgivpJBRooW9PzjNyZ4kB",
  "key12": "3gq35UsTg963huVrLcs42rgLLRyscBe9jiZcR71zYQ2fUZP82P9hH6K6SAvAhB7hzfScBKpdRGvapue4y4pa71BV",
  "key13": "43XeLi6spbKB6eiQQtuGeGgWF98iBYx9LbBaGR2Tifkq4giJ4FHqGwqRqgq9PMpwcxZTph84WS7px4mUWucBmLen",
  "key14": "4xAGD3GduUuue6QEfNToeQyNKHUESB9PbiLEwLfW1A9b878WSQhpxisCpTCChvQusVY1YbjSyEEAo9PgLdenyBuA",
  "key15": "641LTi5PEioUjoYkWFR1sjpZaVcQ2txgqRQyQZEGu2qvbH52ERbmGjEihyvHeLQcsmhxuNrrqK55D89v7NTpN4hD",
  "key16": "S4tnp26Tikbi5LykJd9e6EQQ2PT9CJEoymYSCJKkPXMK4HPFsrFyeZGSjmjhRLdPxZLWJHzr8vgGwwJLheLnzMS",
  "key17": "31s1Rds8F1tBAQP24Mo8EiqtrUaYAyA5mf6rxxD6UybWzWgGsNGbH4auTW1DMR93oxM9bstt7G1LkFQujjMGjYc1",
  "key18": "4DkRvLuxwtCXtm7vEauQmjCBnU4WfGWSoKiw9GfHJJrFB66ZU3PGFkPqiFuFFa1fDcXYP99apGKZJy3jX6WCB13D",
  "key19": "4V2L5BUzRe5KUeJh47WaKc2EuWbm8EtEjePEH8ivoTZR5bEWgC9P4xLjo1sNZGAu3ojVdu1JFpaApgkGf8YGdpQp",
  "key20": "3a998doXLgx8NdhcUGo8gd9hvCi8MAsggXnZMsdQy5fzU6L7kt4rpNcKAqsJ4KYiB4knpqHMKxs5L9xCUS1s767x",
  "key21": "3s3x7b5N1Nt95JJzhkGvvuvaXmkC9xVyaMYyedULenpqjKPHpAcjfCHjg6ih9HzPPsBnKzGDrPBux9C1ABtM5iYe",
  "key22": "1X3vqFWy7jzk2XxBBgU3DcwCcEEBqHJGwnvGjxdPdDPGfYKnZLn7vt9ozkBgGQ7ha3ibVNg9qESaAXz8Je58rKm",
  "key23": "3pWoQZnhSngfgk9guVxWYbRaLYsChzJ64bNGLFzXfksipv9TnFNcd5ZnAySFfBcx3SvSkXqSHsNKWAXUKeYNtzWf",
  "key24": "3BjqV5aauuQk9adMdudmCHCyZ2JHTmu6Qiatm4dAEbJNwhPxXVBzctdcTgZq3eq6SENLk9vbJG25HZwrWpVTR5bp",
  "key25": "41MfeCcFLiuxqcbQimHfuh475FjqTQ5kUGv841rtnEcQZb229EJcEYV6eugud9C94fv5gzMyT4JtkC41Cp26wHsB",
  "key26": "AXZh6ax7qcExD7LXa1aNtyUgiUhgWnRnF6M5NdgtrF77XARx9yZdXPfxhqa7togjXXqD2wwL5tfeVEdHfZyRQBH",
  "key27": "3VRorUH4QUpgvVYeyyjExWwBqEcWCuvajB8rEDKu8cQkRG6WiFd7Y1zf7j65mM1CRy9dr2DKYEkQGVGLZrMg421X",
  "key28": "2tLkeTZCvLi3h3eHs7ixRkDgUk5DdMyjWQcWsa3kV85qcvd6ypY154G1iB2VtBgqjDvJrYPZvmRoKyU7aMYi44Dg",
  "key29": "2b3BsAS9qySmFbJmbaFNdmWwAQNWrdvfsLnHAZCMd8KdxR6jDRre67QEUtyVhs4EDQMCA5KTpZCisLg2djwAV3S4"
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
