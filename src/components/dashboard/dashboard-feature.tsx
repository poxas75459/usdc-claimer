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
    "5dcfmYWo74uywTPrxVWDENAhfH1c1yT8tKhSMsuPRVY8g5QXCyNRmSLpwujFSYdyR2Hk3NpBPK9YyZNPKpHUZbeb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rux6Mhxi7WcESDCDbTNQ7YNCGXUzoAedJGDsp4LMcWh3zssZM5covMfCXPCCkoTrMWFSSJGfXAWWiUKunseQZDB",
  "key1": "wKnKmJnrktTFdmBwrM3roCkP4Gi9eV3HCSxCm7McX6CP4RptUsKm2VnEEa8NQLVFtKy3E99KMqBVqZYYHWRCzQK",
  "key2": "5G3J3g9fALYRbWeVezCDpBMep45txhW4dHZjwmNMS4ma4yPWGGgHiueAgoyTQudBCcRBu6ZiZSvgNqEAsh1dZJTY",
  "key3": "47kBg7AvP4RRRzhAHCGpY4GtQ5MRuBHgyFdFp4rHMqe4xPNHU2Hpt5shaBkFriYzAuTj2FB1nq1QEQN4UT7crsd",
  "key4": "2T2xvkdgRvbovoQ7YdVCS2N6gcUYHYgZy4E6mb4Zp9gMYyXomW6Q9tbbGFA5g889CtUNPqQyvVxFzZuXizu2p5Mi",
  "key5": "5uYpARrekifBADWTyDUZzxhQJD6i9g6yGxVLkfTisczpFKZw9QzUHWnW3NVLBSPyubyZNsJdc6xLGNcAWDRJ3Hm1",
  "key6": "35B9oj5F4NbMfsiSMHaD3oYxb1wZBJZDHRKf1B2GtadxuxErcVajwxEUSSmjitLb497QgGHXM2nbaG3fhg2V16Sc",
  "key7": "2jDRMAgpssSE3ZgYFzXhbxvMxQF8vx6zTfaNzvQME1rQ6ayiB6CqTDEJWfYYBxXrcqATAJ2MuZjR77AexewDCxyA",
  "key8": "2sHurw2LPTAhMvsr9atwoSpeP3W4ZzCgKDYjd9wBrVLZA3xKv3XR8fLFVEtDr88vHhGdv1wpzq3RPX6KLxBFc7ui",
  "key9": "2AqfXS9P5M9AvH6yBPycduuVQikUyjJ6sCYRJo1a7d4TJ4GGeU7qrUJSeKTwYdLgqfUp8W1aDCuk7nVxmtWjWvmJ",
  "key10": "441bRxRu26KxvDZ1F7KL4yCi4bTB77XWj1FBoZn3woKcQPViKn1CDJ5K97TrwFdoWfguFwF4M79tK5s4LgkGxdpJ",
  "key11": "2ioRtB3ov7CUrTMYZAkVB6LpU8XJdyz2Sgx3bs4vyX9zmee28HWgGDkqMByWEHJHPNq3en6fXkzTD7iVhnQet7gi",
  "key12": "5GZd2Z2ESd4NJY6eK2yx8GbHF4XMSYUkwbL7wkR3CCRcXFMigYUcAZA9N39Es9gBpFyisUPUEzXu9yoBPZQMhEK7",
  "key13": "N3SHmxjTQM5QdaaEgnLZwNtxMtXSktdEdYok7zkUYTgXjFX3cMrGGvrzR2XXJ6TjibunXY36Fay8CbBrZx5CpZJ",
  "key14": "2GUUanB1dcuvGgN3m3PCmgzetpMKSznnVzmxgQ2PRzpBnqAUfvdrS6poF7Uuks9TYem9AH6spRacg8N63AHtbVXV",
  "key15": "4cdS6GzEmj24mWhMbLWEyPvQxHQ7KsHoRrfqS7vqNFwtKi2XKAn5HB6xN3jqQYogwFbK8oeeSQRqVkmVcLy1ifhf",
  "key16": "4RUMFLzJoGfo7jWP2f1cnfZVkQXPieWGC49Q6UT6fasL6qjfqeUgvF6uHVJvfF2KnKPCWoEiXCDvTYh1Ep886wjg",
  "key17": "3knkwyFeDSeN55KEKy4uE9CejtjJK12mNMdSzSzWbn7Z5MRFc5QxQjiJuzvBGz9uKuGN4wWDcnbp2Esr81HS8C8W",
  "key18": "3NCMCYAeXi5dAqGKTz5puDHGzm4AsdwxfqoVLWn8bvxrL1BY3JVnpq8dovQAvRBG83PpPZAvT9zYp4UDtSswVz1y",
  "key19": "51hbHdmUrM5NS7r9kekxTfch97LQD8TRG839mN3S7AhioreUU26qnKx1Z1juqrkunWesPWEpSo1KQ6qDdp8CiQhg",
  "key20": "5YLP6NQxdtbGp6BDQxhQoidAuki1Yv7PaQhdgZZDV4m4DzNaNNjdW2RbfiBdeXpv9FfxYDHnBHPgT8dn27btpgqd",
  "key21": "2AJgWwbSsRBbZ7cV79GZoX1gJLdsk2cxTgRKVpw2ZTF9j7kyYqHs2vWz4Nr2GVc59Uxc7L1dcqNW7xn4dG8MR8cR",
  "key22": "3XhMAjwiWj1qnrCSpitX6Asgip94gFu83TFz3yiXqjhtyGW98SVuSUWAQYTXMkPNWZbwJBGx5soGehA2NDn9w3AD",
  "key23": "4tqJXJL4KpMB5E9e4mcBP2zXDRPk8FvKcX5pWNSASgFMnYcWJ7fVv4FnQ1x5tJVWVY2yWt5kVDs7g7owpeT4fJ8F",
  "key24": "6RuoXcqH3SMpHDtYYBn4rWNDf1kgxsyB1EgNbM5hnKtpK3RAKHxCnoQzwPubkouUZesdF1Yi1a21HzgivpABMsi",
  "key25": "2agbJDdYGkn6tCKMHRgu7XtUPRpa1MJSm9XNan4wLa4JWwXUP4aCFkcRs8Dk1JaXbKxHrvD2nm1xSKcBSjgNHfiX",
  "key26": "MX51t8e7AqAFBH3BwiLuuPMP9oLM3HgaZ16npUjn3zmJY9ZawbdLZgjkvmVpDt9UDGNuP4xWMjCCAY3aye4LJYA",
  "key27": "94euWppVMvPJWXy3FcdCpgjRbhy1xMxVGXEPjTm6dWZEG12mq1mSCsVBdZfTe8wmNWiL5SXmG7aVdeiavuHPnZv",
  "key28": "9WfhBqoMmg5YKyidQusspx7c9zydiioHJLBUi3QGbzW6CRdkHqtHWZPwxqP1Qia6K6SvDSrN8Jd5GXe1rZZWB4J",
  "key29": "S53RPJjD8ZeymURwWLVeXteaFHnF6GSurm6YEbAgctFBBffRDj7UwTMXMFCG1JXzFQgnNbtxAyktyUAmBhtF5VV",
  "key30": "6urtd6q15bWUoMpQaQZVkf8sAoEjdqAmf5hdexxcXYANzcCZqEmaeKCGSoVqQVds6gafj4M3HLgsyuuKrgYbZv7",
  "key31": "2Nq1cWVSo6pgRCmoPfJBXikzc4knZGb1mjsZc2pUMcuBjfFGTNddTYRbWwbe69qeFjV4dE7FnkAjhpZZPaPKFuRt",
  "key32": "9PmnTrykGLaTXgheiPnrDKaLXpeP2vvJMuqPy7X4Hy5XX4quzg1DtMgXmSdUPfK3Bzrm99DEyBeE1SkHdhiB9Bo",
  "key33": "231qhc62Kw28gbr3WDNJqwMFjMKHqmsihgUMxFy2X8LbaX9dV6Exko3j4Pi9BE1Ui67Fh74ikawUxjfv6NYRCGw5"
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
