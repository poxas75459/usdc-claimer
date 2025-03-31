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
    "4fZBkPPKgfHAP8JNLfiZrqkUSCk9wWogZwosX3LVCr3XCz7TYoSZGg46QKFsq9ZgdnQ3hmTyXKeumovUhXmoCyih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kPhSpBmFKX27FPkqgLCBBZvnsZ3qkbXx5Ut3dkjttzs5L4M51U9eeTSVZZU3geAn8GNPZr5UBjRKu2ENN3eFzRM",
  "key1": "55mP7daegztffUDyn2qXWuScEs7xSVaZ6XLMPa1rb8hd1NnoStwGiBP8UfH2UNjybHQHK7sgtvPYSGneLbqWqVV",
  "key2": "2SwH2rAFgSxefvkD5pF7wr4R66xmbmQgNmQPo6Xu6u3yrjSS1ABoZ5699TEFyc9QexNpnohSNmFSSthErZ5r3hDW",
  "key3": "5YfiHVsEWZFTVk98BDzAuWDdQmqLUHAijSweJcybgDVgta488GbixgHVUHizrqDMjuL71gVW3sEij4kiaxbVPPh",
  "key4": "2voxcQkHgA3Gg8wwXapHxrvE6BUi57JkPr73di4uWkDcB8aGhMiJbwdpYsdX2F1LeBxnqHm3d5ActEeq1t4HjSeP",
  "key5": "3ybojtGymWERNbSqG9XxUxnSCVe7sXqFbBQgmWRcoFjkfr7ydYhWoTy9hweuqXT3NhB1VDx2hJJLy2A2hLK8CqAi",
  "key6": "5mPoBpaFDWUpbntKnRybU9MUK7pXeoiGoiBLbtgVKtwgY6fKefETn5E1MEbfyzJQSXmyu3nqVrR6jyitesYvnaP2",
  "key7": "3EuFYA2GaX9qFctPSfGWD9N4mjjPt3dqv68dTczN4YZ52LmP7KJj2WjEXNsNZg8Piba52VXRFLakSZnb6qZadeoT",
  "key8": "8GbkfNGDPiNrxCSsQj7s4yijzvtUFQ5kHFLocZ6MFV9diGZR1cUANM7RbTrBPYi4Z7SGwzJqaS6MboJQYTz2Ley",
  "key9": "4MWGxyoBSSKpqyX3kRsL8kLyvrvyGgmfzRytc9rHPobe93kfM5W4B9afgJXj8DQUtLHmsjH2JkjAzyYZ9i6UuTfd",
  "key10": "LSSqo2ASR4RCHiT72kyqQeFae2mtEUt6hRWxLYwrrkg3bLY7SA2spn1iGb1WLLEKFrDjRPM1gXtAY6EB4E25YoY",
  "key11": "3vwcres5SfVUojHG9YvYHmvtuzBraSypGdGMeWmR3hvfShpe7t5b6eqCuuHZxu3RbRyRKorhnZAN1UdQypF7psMN",
  "key12": "2VtQRrBcJHNBUR9nuNkuNvhKuoijAhYAgzJXVB1QMjo5yxudxLVihfoRfhgF63qxSW8E95phYkCeCd7tbFUpxYtd",
  "key13": "5VE8bMmYMHSXvczuqtYWKvcVw4kx9nV9TxXiVQhmxLG8codAAkfaS23VqJKeNBqHVQTY1bNxk5nHF7PT77Hboa86",
  "key14": "frhJbrsJNSNAmpMMFPxuMv5diAw8DJV4nfAxhmsaJa2DAb2b89gY86HPsdd8E7ywgsw1fnUuAgg9WEWqd9f9bWw",
  "key15": "58EFuQcedmM9omdgpE8tiok4uocp7jMjAEW6bmm1wMnZquUabCL7wpvAmAcBAPdzjgprwFhrwChGEAP4nF4vxcJc",
  "key16": "38gfxFQ8DSvfxNTE4gRwFLCj6rECVu3srazA4Tf2VU6WRDx93o7eyh7CvHF6bfBDFy5GttgWDrs1btrPFH1UWvr3",
  "key17": "42uE6jFSsSRMqLn3HdCQfpAFATN3yPJTPnva7zeAAmKVUuhubzQCibxceXqEGxSRbafzpqj2NTfkCDPfn42GVDwJ",
  "key18": "3efX5XH8sRX4hPf3UpGbwR4AhDHsanz3zHfxELsVpP1HbVWaUqbdKhupxz8wKUQEuu8FW2c95dpvqFbic1ySvy5X",
  "key19": "2V1rcNgJKuEKcdPjYmVQy7QL2mnijmckEG9ABoHQKpkj1yNsE5nVXWvzMsZLcpU8w3J5ifiSsPcR5jhSFPjyuucs",
  "key20": "34aZ4j2KkfVXUAWnjSRwV9ManwW4sugzZA7vteHG7vSrhS8n42VT9qaMzWtva7qKa5TSsnG9KwjGfXUT8VVd1wXZ",
  "key21": "3YJCdHbSt7grhMGnPHgGZgkhfY3mKJDvvXu3NMK1DFkD916QxmTsfyUiCsmsh4yCHpcQZi5txroafoMK2CzSM61N",
  "key22": "4uAZC1WmdKpZMZ6rhCBG7mipQseWgWttLER8SfeCf19z1WDM6wStuBMg74EN25tLakk2KX9H6MQ2A1ztAU6QTfvj",
  "key23": "3WBJ1rzZrxhTwpSigK6SCJLPZgerqbM2C8GvWbC6athL1fDrsHTq9ouAS3jW3Swya3WwM6xYHdSdXXRyAwQ3q7Cu",
  "key24": "4TjYiffw2vv6ctz4ns3qqYGQQiKHYYraDuRnieg4DMvT1r4FGCvf5xBbSQrHk8fQYhn74By5zuZqGWu6QfcXjGeQ",
  "key25": "4XUN3b1Mr7DM6w3H5vGo7NQ2kLBiPhZmMPWBhHUjxP2mdi1kBALpcQgxLbmDwV9xQ9Sbvrt3gK5o7CFMc4g67aaW",
  "key26": "4jsRb6e3m8PcfaNhksFsAdMCkA8nAKohs3Zy9dDY3AyAhQUS9xqPo6yNwcUPTNQs2ajjh6i3mHavyuMt9ZPMcmgA",
  "key27": "zB58zAaoP7YuZT8yidhnq4bnsWb7RwiEnReZqJoWgCF7qjD4ZWFYNGZ1UH5ZS9kokB1fGuNFFrRWqgjE3bhGjR8",
  "key28": "3zuZfEG5HvocFG1xhkVaM1MXRm9pPXoBBKN14F7qxq25Xq9cwxnpVcn48jnNGhgg4cZCzMviUg28TQUoYuMNSCiX",
  "key29": "2sJg7UeWHpKrgmJmnsuzBBNg1w8vdgeZcmf9kiFmM2x1x7K3en6MWoKub5prvw6UBA49CUrKvET8Gq8zA2jykGt9",
  "key30": "5qG7fTuJhrSuHkbnUvsFcFd9WXxa1KsLbznRZ5fSvKYW3HCB6DxVT9FcETyLwhndVWtxxgqfuBwCiNz66fARd1mZ",
  "key31": "33w62RnFNMg5AzmBjPvbGozgRkjMkYKq41ExnDrbRqQykWtrYuSpmjmecaUX7MTznkzeWV8M5AJ3PG2UMaUmkqKr",
  "key32": "5H2tQyMtMXFpUgTzZGkHYCjdzPVCmVFh7HfU76wxyyMpSBmNf6JWgmTWGAJVECiziwU2qW5Rzy78ZCfwGmUP65k6",
  "key33": "2upgrnP5FFczFqwqzPrJBUpeoPVWpRY3oVDZMtFpnERdqnfWXJ2q21L8bQeAXKZrQEP6W5e1ycvyHrGByTDqCyYq",
  "key34": "cv1xS47dBMtzC2BEXkHdSwPrbPS2G5oQ79Y6CndVYEKdTb37YTz1xXX7du7sWz5TpxRDGipurQCMGYTNoJnDqm2",
  "key35": "5gfz9b7fM3ocr8ZaR7WmggGowJoiG5ZvGbhpMZNEKVWDyk22H4vsxMVwdiVe3wwkYS4V7auNjQ1fS6H1Ea4BdKvC",
  "key36": "5f6kE1oi4RMkJcbNiG3vnf9rwsnjbVUoXEFgMEpbrrCVsie6hXEgWHNWjeZ11M9sxqzQNYPrX31YBm6KuuHf3cYB",
  "key37": "4aCZLkE2b9TSUgJ4TziuTxZjtHgU3jyvjNtya7R5EABaAAaDYHKw2FYAd3ib733mSNoz6A4sCPib1JZJMSG1YLbW",
  "key38": "3kEus8MohDEboLjVEf8D3s4GRYR27fdA9iCLna3CTh3JY9GYE8sfkjt7HJdzGCjL59wQ3HDHEmV1irS5dR8rVhdw",
  "key39": "5JGA3fBcxjvWvNx74CVNdnukCDLypZrLGZZoFkZNtV2F24Dy32FDQajzQgFYn39DacGN9r88P16KgReGdxU5NWuo",
  "key40": "45E1dJR1NMuFd5AFMTTxhnfVSrYA2zZfcruyW8Uo4A5vu9pGrfiyzVL6GPpKiRvExWEUGeHhJPJ6Uun2vxmEXHkh",
  "key41": "3tAE8AeWJohYRJk6GTUE5UPtSGYdcqSRYKvqQQd5whzPfhVt6oV2inrNF5uyB4j517M8Zyn3QCWwoaYRVeGsHGJ6",
  "key42": "2oDxbGKM2AQSj21fTX4ZWnLs3cA8gKce2V5mzAmqX8cVxUyvKsxi2yGJTsve2aNhZw2Cszmcxco6QmkDR9aY9Atk",
  "key43": "2w4e22ciAsonr75LgHCaqhyJzfu3V8gAU74FJyy9t2N2YFDMREB43KFCq366xuGMeESCuwHoDfUr8DW1ntkLfvQi",
  "key44": "5PW1aMZ9cqBKimSdc7Z7DGkqjvBUELvJgyDMPv3NHPRNwF7buneAZrTLfAH5agpSvdU1KytRPULVVrf7wbgGB6pK",
  "key45": "w3b7JP9NjGzbrQqxf2b46fd6kxVgSNWCRyby1yZxDuZaShYimMwRmTvxASG4A5boZtH2whgXFzVvtGD4YtQ7jan",
  "key46": "5CyNCabpviNae9PqH56bbMgPTAjr5ocg9QF8GzqvpL5sPynhfffAXfitjWXj5e5dSzgXzWbYZmWqTWLzxauNcTxM",
  "key47": "DG9uMJYat3xeTjynYHdVfxb9QqSqefq3rsqqq4bCnwSACwdp23AXAR3Vau23YXpX7N5giKWteRnN38PY3WnQ2yM",
  "key48": "4eKnwSDYrsGaAh2nVHcQMJP9p4RryFfNiEPgckge3B52vWJoPoPhuSE7NZiqLu8vbNq4j4UmQiqqLj9UNorJ6S58",
  "key49": "2HSKt6ztJQ7xHqdyBeprAhKgoxGFQ7dV8Wef7zgQQQtKeuQWGL6ygvL7RXXmkpZWdVr5piJTdzwiTnFbGghF3rqH"
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
