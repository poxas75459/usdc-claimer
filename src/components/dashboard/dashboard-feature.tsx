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
    "c5W8b9PREfYhTJWNw31p2piqyZzDgXeuYsyGafj19FZGEyPias4FMtMMjbp2HTgvUBene1kGU8ewKXKHmkhp7Do"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JvXHvipqYFb41k8WC6ptswCjB7iixbPohFDCGiDxD46uHRJfgusug4aRHB53w1i8RCiEH9etuhq6fRZmc3Th18w",
  "key1": "PUEVeqLBmQPsN9hnBAJ1TWPrRPL8dReCYYiffcggjP45LCsX4H1EYRKSmwVv6DuftWsNSRE1bihFT2oSghGBp9V",
  "key2": "4K2i95nK5gVAawQQsLfhYhzkthjXLH1scdEX8CqEwgrLHGR3RtZ2WeGMjB426vfe7xzvzVnFTeV3AfkM8cSmGLVH",
  "key3": "2xM4883fQeQ4d5B22jHxKCHeBUPhnc6NsgfRsJ6NDFfw59mUfpde7uhbtKwkWDdm2t5JHFUeuBYDtEJsvYthFzFA",
  "key4": "53hSHZYpcXPaQAx7BtpkhLESJe9pZvbck7T7ykSKsLAuqgsRCzbjZ5ZgpktatoC2CCip9CcESEBtA6kTF7ac1oWu",
  "key5": "5LsdjAxkRBgQs6T9n6nH2nGVtDANvsxFn9U7AogGYsXxv4Bjn5fBoNNRXU7e1KKhP8WRwxdBjL3hR4xRjLtCJcrt",
  "key6": "x2DS2rniSRpvxszxhDTdxzJjroCxLjBfVUbAWXNkSKbZrhRTYg4j9dWoQzNUAM8s4Teu8PWgJDLLCMSUZfSXgkE",
  "key7": "5nxE8WfsjrwmzwaYiuk5aDk6tgMFB8GsZGjx8sZXaWBxNW7e2Tj9a6Uh2ceTew6KDeMCUHTCV7trzHEnjcKw8WC6",
  "key8": "54zkzuM6MgFjJu8MRhMomwhBhq7DSyDgPywrZgSHL6GHtMYeq8yxcjfcvfworLXiaQoB25tCGMLGnXR9x6Ugwpqi",
  "key9": "41yFKPP1Jc9F5WzEs64mrqz7JRHxUWFeFNfooWeGtoZwWYbtcqKXcwVkiEebXwKcFcdKRLZi9427JyzuysuLfBok",
  "key10": "4XiC9NTKsz1Z38PktBgppE63CVuVwMjdevpfFkW7AgEjYLK3QZBtb1eg8DXJGcmYcqCPztqjdNEdez6c6QDcaSDv",
  "key11": "4bRPpdZrFj1WK5NPNyjW4wsAmgZbGaczALd3VpyWHpqC9zzHK6RpRLSAGa6c6JVsGj4KeKiRdPjARxAXuzfqe2wK",
  "key12": "5Jq3fe4apwc73jG2KPMJR9JfMheygEcAzDbHr6AxGnzvBgzRxnGrXdQRLJCo1JJuKbKFT4kTYc5MPRdQuFzCZM5h",
  "key13": "56kus43m8KbTJJxFsMSUBLGeJuRZeWZySRzoMwoCHXCsAmC93KL9mD2PW55bfs5aU8Yw7634w42bGj71SkMf4mUP",
  "key14": "23dYGg4ewXnoRfRAgVfFRSL5NmgCrwnaHVEeHXAEeSErHjytFzdVyR2nFYgwAu3yUPkdJYwLSwZm9k4gZprGf7GU",
  "key15": "61uyBYTqPZ8ULsYbfJav8EVoKfF9DbwuPARKwkvatx6c83eY9xHJq5MLv3Zs8wcKNwdHWMJX3yvBA3MC7HrxcaJf",
  "key16": "5iPQiKwRxc2AaqSeQtGbDuxYTXbVU5zg49LPWShRxJg1ULgCrjLyQ9E9eQi1vsoWg7FiY7yZs5y92omVY49mPBUo",
  "key17": "2TUnYbr85LKCwEVJWbawD1s6uZ84Jj1PUgbCHefybept3yhS8Lc3ugGVZPKStxhg1goQCteszCySgC7ajzJZKd93",
  "key18": "5FLW1dounMSZpXPpjALf3Kyas7gw3JfJTgApKBgNdSW7VYTHjTENmpbC4jXD8gtoREizhkr3t3jyzjdSiPvoqDgC",
  "key19": "Pbmww536YxZicMJQALXRVDkAbka2WBJTM6wtkjfH1gyVwFmDrptWPb77dKhNkQAzxd79g1Jz31wR9Qbjc4Pm2Ky",
  "key20": "4z2FTEojDREwnjUDUAieQjHJuGmERWB11VSRhtwAegucRiMDgDYLQnWs13CRzvZR93LiS2tuZJ8Rf4G4hRax48MT",
  "key21": "4oRaQbVLmwA1ZmA79a4QfUKWduWKMUamzKdfPFA3mgtXvvuMew6weV2dbwSJS5YLcuVTDgMYGW1JGzREibQc9MpE",
  "key22": "ieshAokiyYhyPf2szivXmGo69DQcknupT9wFwZb8x5pxNjMKhPkPB6fsn54EHcUiKfsoHRmDJ8kVWvrXmfbynwS",
  "key23": "2knUT2Kj2gWPDY4yosKqo25SJaCSfHvxJTCic5wwDTHzJ6JbMaw3zdSL14X9tmdEuFM2gVWngcxGnzt8V8RLaiv4",
  "key24": "2NAGaXLrm78MaePR971WBNeqXuP3eBA46kpMcURbDUbwuxJkrGMC58NDivfDJkooD6bQL2ZcvyXUJUi1ViWaUe8u",
  "key25": "4UVYhPjv7nvguqJgYmL5k6GcoWgrPkAivxQXyRrDAdc74C1ECevQJDsqt3Gs3EAbvZss6QmWxfMYPRkWok7Kp9B8",
  "key26": "bUZT1213tvXGodLtJ3R7vNuk5cPqLpD9qh6WCysnuemX24PVUEHHgPdj1gB7Gokmfen4UWRTZtMpyWDUPPyajrx",
  "key27": "4JHkEVzuYfCduLeYsZr84gBbWBhsZtwZgBqsTbQhcDzLEr6yLEen6NqtrpJD695GuqVGW1Kox3m4MXaSZo1U5JC4",
  "key28": "5ahxnuCSyuVmB8DYHBTVPry5omnyCC3nxPw82jSwiLaGRV5t4LcGoxwNvNnv9ZAyzHfJTrVXBNjtzKJJL2zLTG6V",
  "key29": "3sc2kPGUn51xYKDixJQVdVtfsxEX3uxXozjMyYGNrZBrmFVo3Y4dSSrwQpXQ5Fs21WSaKs8Ze5bBcPVJS4Dnz92m",
  "key30": "2jg2w5TmPFh9BseqDMZ3hb1P3iMVjrnJJy9GQq44qVcvHVzEZ7Qo7cAUrqKgJQg4wcTuxfs5cNzbwNzCP1VuadyB",
  "key31": "62ZuL5XH4XBBG88V7iBK5MFAqGNA7EAAY8GzhNUc3BskNAXkRLNmgvNyP32a48hpns5umJpoP3dYBDZshkse6cLC",
  "key32": "3jjpSGwC9oQ9Nk5ryT4YDC7Ju66zCMAZ6t1RSGVNgWuVFS1t11obREDw8mziDjryNvRyXvUiwcxNYnbYeC35w1tN",
  "key33": "2Hz4Y3rr9ZeNsLLbjVH5YrhWEVMymxt3i4jcLXSoKAJWCLHPFCC2VwcuWxfQLpmQBGzr4U98MgxFtBcVRPtyKRbL",
  "key34": "3FUm468N3LFmR4pyPKkvCFBJaMnCAFx9MXEFQRuTdqy7j5op2x7owweenCTAUokqSTPT1ieXLEvLyCHJkrM9qWef",
  "key35": "ZuNf48PEEnaDGZayxevZ5C4cgrjxnkoUnwG9r5UuHd6Sm38hFdm7MAxZJjPJXNxz2MyoFfvmnBi6QxN2aNNx44D",
  "key36": "mp5mn4GffJCQjSKyWEaRaJMWhaf6DcHp9b37MEXZmPgPZGW3UbLhJ3omkYu46hHdtR8Q81KsDVxHLKgcgApVLFi",
  "key37": "39w2A2nPsVgv4R93cKFEmombc595NpRoNq8HK6bPgb13oGdm8CJDnNCq5C4NttYxVDuJuNFYvkm8b93ahPe1y8gR",
  "key38": "5bsHJANPuts82SpkXJXmhq7PqBhSTjFCaYJY3Wo1DuRqujsuCG8TKrkiHn8mGRtgq36aECXytkDVae2S9HtCjrcC",
  "key39": "2v495LYVvLK9v9K2wy6DC4UtUv2S8D39F2kro6W9EpyX1mUzwmYXA3LZ53MZuoSy7H6P4ErvqDmDT3pvnVtUFKJn",
  "key40": "4REDxzJ9PFDTpcsBkd28BptVqUBZiD6yWdt8aWKxTWcif9bjUYso2akDrnLvYpjUykP9JHG6HXdU6eFSVGHygrFD",
  "key41": "vNrgM58KSHPxMrKaEwQ22F9fdNVq8EmmFxuzxLRBcWqmmTrqYErRpAVqGwLyXYJjXaM6rWKrDKYxRdNxwitAmkf",
  "key42": "d4Q9hwV2YTuQEtaDU5q2LEeDGSFskUby8inWjTX1wiFZ5tCjEPYcXPsoQw1Nh9NCZ5Xytpn9JNeezLvAQzQMxHF",
  "key43": "HGJptNK6yy9ss2iWWGZWFmTymnrQsf2nHMqmfi5TFfYnH3Jph5SFaqWMZNtLWxnp2ZJdTr4nR1gw4dB5DqwnfAQ",
  "key44": "4oj6LRx7cLTWVfqr571sgSPccx1kfT7r7vH8xfsyzAwsaH8DifZsyhSqBTAtnT4HeXPyUC4knsCZnraDANzEruqp"
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
