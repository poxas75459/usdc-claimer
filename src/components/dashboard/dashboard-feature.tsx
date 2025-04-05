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
    "4SC683DmKB6iQcAKD3joU8YKXtnNZri6G13KTpEazniX6tc33C6emBDqnETsHR9RVdqCMXaSRdPxzijGF49vEGtE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ms85LRiv4TFqn94dt4K6hQPf5G9YuCD9L6xk8ZfjmAoc3LD2HGAPgNEiYTmYDxe7QGPzhxnf7EzqDjwjNkxfLS6",
  "key1": "45vhxNEFp2HRds9dweLUNFvNyJw42Txkm8kFUozbvTLnFBHrAuNASEtJ6f1vY29VAyD7tkuDVHNFZK7u8MT6aNUY",
  "key2": "5mWHd2QR98QFeZNsKCjQXxbQhThBEXdjx9oNjnQVAeDVCfadqX3JxHdgH1hau2MZAX68s66EvmRt9xBHjVyf1SNQ",
  "key3": "3hK8K3H3y5abAPppyGMuoWSFZfFu9ZNBrUdmy8Af1dcooF4HstxnuC1wbyEHFqbD1xxrPNGdLfzBMyMdaQZBuXVG",
  "key4": "97a5J7HU6YcUKTvinJKcjV7KH8Twn6c64xDXb3SDmq3H751KpvgvzuoSerfUzvwHv9DHriu1hFfVysXbx2iD3su",
  "key5": "4pSYhgwzk1S3equHmnCGqpDgxx7EmUkJDQPuddMc6ydQ3qZFkYmQPK9FywnrGkHqPcT9xeY5Eka6oPa9h3kuhkkw",
  "key6": "3fUda2P2vtHZKTSpuRW4iUffHU3hR1K9EUTwQyzVfrAshcRjZcd1Tj4GBoA9LBu3Rkxwi8Yrkm7CrooxVEaJKaGK",
  "key7": "4EY2Fky76aSrp8x13XsLf3qgHFpr1wkW9WnaUH4mHCibWJpq3pcuyVjCBY93YSme4HKCABUecagVikftnCifnMJY",
  "key8": "BvoEK4y21LBNwBYdwayqAxbYfa9VnQC8ThHMTzNixp1e5kJ2BHXDCt1THMJYW5t8WzurQ464hCWki4gKhrbFoHf",
  "key9": "3aszXg29124a6vEn4kRCeb1fwfMggvK2PFSHNMj1rYNJvtiZCAmLKCREbccpN1GPm27rCXpj6zgw2n23x5iGPvbE",
  "key10": "4p2pQm9N7HUb6sTeT37SUUoGZ8MpjpCHZ1ShfrJEp6VnNDai88hXGju1Av8GgcKrUfivgAZC1RVmTpPSRYBZ5k2q",
  "key11": "2DQazhcf11RqkR1qcrHXZvbAWBWBNXXRmkoP5EbuX2E4M7op9dbb3FTQaodZHBv3QHagRhySAKYRz5F52ELruLAu",
  "key12": "YWJzDdEMx5wXg6EFtYjfvg2NHWA5coRjZyLsDDgFUw4pYZiJz7RRCq23eb3LNVCTeGqRnPHadvApT1o1aJFG59K",
  "key13": "2Ex48fHvxxSvxFyZHXMWyzSXTB9Q5V5mYMZeJ3MwWfovmo7ws94yVoMRcxeZDJ3pnKSZ9GVPGNLH9YpBqYN3VLdz",
  "key14": "5U6PytvzfiT3KuQxqFM5Girk2z2i1LnBNVDzmXsKWb8QNoUMtLhtvZG27jdaiSVD1dtoRGw2K7fesUnnaaw4aVth",
  "key15": "5c2wwdq6kjMxFWfbrXDKrHXuPmn3rq6nSB4nXE9nGPdKyivmyk7g43uenv6ENQ2vaWzFUZCqmZC8ujm5NYNQzQwn",
  "key16": "5xRB8AYXS4hEbARP5CC3KsjoddCE6V2kjdkvZfp9XqWxv2Lavik5ybiR2TWoRKhRHpq5RNZ1mnVXveA4xv3mkJtN",
  "key17": "2MJfcPLr7nA86vCDJN5Eb4hfmPichUkSaVWzC62gaaiSGr9APFAhMpddsEqVm5Fih8WAPnaz3B2eQ7eTrzcKBVLk",
  "key18": "5ZZQ7gAdWs7qaTNYSDEzwzwEgJx31yPLqNK17nyoce7yFcWvNT82iNV4H8FxXC5jB1sgf47FnQb4THNLBaUX3ARG",
  "key19": "3KbJU4pp1sx3YJ2Y7RBqkhVwaoawKyv3jkdaCfKTmofM7PEojcd4KaLV6yJztCHJ3GmztHCLzqtgK1S5V9CdZJV",
  "key20": "umdMB4ozz9QYhyWybbKHcyD6XLUa82TqUXhGEcxEZfdjPkva5yvvwrwirJXhpHFtVc3JRMdQJmFtGEaJjDt3NyD",
  "key21": "3Wob53Tm2smHnpuaQ7jzthrdH58L1pa92WzeXD23TvPrH1SFURHRH1d6W3MahF53rvhyz7teGXgw5CzrzJgWGzA",
  "key22": "67L17mjTjoky1PjxLHnzMZAkZbcxBUpcQqCSGX8DDC2xu9bSDgd9JfsWCGFRyFQCE8yUUxspVR24aQw2ziziQpUj",
  "key23": "3y1jwnnGSRMoimCjR4LrBPCHbjppLr3Xo2mcq5HNDGJcM1f3qP3pQy8iiKQWXTrCQCneMVm2iYUk7nsba1Ujbwvh",
  "key24": "5r3mTrQxY8w5FFwGMe7bjyanCNJ4PozBbTE9hrEvyZwZG5ehjb5LpGgRZoCM3XfFwECekdshSTyTWorjgGANVdii",
  "key25": "2zCCC1arFjQA3PhSVxbKErNEhF1RUfp24yCkvXFFTR1nLEMDFG9XSxRQDBjd5V8WGz8jj5hoRTSsutjhDgUd4UC6",
  "key26": "tT1tt1xvm3bb75ffrAg5QgWHKsJ4v8rD2gHK96o8SacFdHGfwKhPAsxK3amvdZUdLaTXGrUJpzF2KcNq1VpUqi7",
  "key27": "4y4ZFrj8VsN5VwnKhVdWHMx94poG6SwLfrdQQhmEZdLyhw1rNC5uGi9VPvF2n3B5DWRqQBNx8mqCznW7s8r9jSh1",
  "key28": "3SBAy1XBfs5fgZefLxrFckSVoGye9z91RNYjCCY9Y2sTiKZJ6jDRKnLXY9P7ZSxpYuDxEMw3CrpYp43M2QcoW6MU",
  "key29": "4gVGp2txjzMwFv4o2E5hGrvRJCy2zV8Nb3WQ73oz9ytpVUNLGLtxnmUMzEEHiXc2dk7mhDCz98GUJNZnu8CXjdK1",
  "key30": "58jthzEytxifzAPS5i22MpEtWGsx2PjPvxXMumDxt1MCgm53ZVQKvKnMT9ERy4qprfSVQxyyFEouDys9H59QEmvo",
  "key31": "5rrbKWPVxAtfbMtXBkxkCwkuRpEGk2Dvy6TJwVp2rgFH7Wcq4ZLT942F6uYGftJUXmuFXc3BFQPDeAMSsmmBBe1j",
  "key32": "2yE3ZQbvysYCsXZ44sCku45ww8ttv5gtmETy7oKU5fkv9avrw7e31PW1juYKX5v6Jy1HpdvbP9imr2SNSPeJKzif",
  "key33": "53SuA5CBfDguLqM2hjDgYucJBsaF6qzgse2n4TQdHfZYLkb7jfyXzKuHGrrHfXHPPmidqyMm1ftyc11e7k5sPMgb",
  "key34": "21LzH2DhJr5dKfwRfraeMngyNKGzqqCYScfLk2rqYRWCt5SS6kqaJ7eum9SaP7NsGQ5JMUD8239gmkMFBSTvEeLU",
  "key35": "2CGStzmY2e3skJtCKUpR1vR4cqNJWUpcETQvWu8q6pnSnmXbmFDvMDa51ZNXBZj1jza9gvdpbiPYE1BGYskGu2CA",
  "key36": "4Rc4t4n9mSqm36mUJm7DyL9wajXmmV6qEP2Vmbto54K2sQTn6RVSJyQhsmTVosAyTNroYfEt8tLykwuEJMdJaUtt",
  "key37": "3nEeE6E2C4xzWJNvDweUcrhAZbjt21eXQwSa5LfvvhaJhd4Z12X2DdnRiYwfKkMaRcgFF5dJ2fXxNKqadvqPS2o6",
  "key38": "mvVQytyf7fDdyiSmjGBpMcGSqnDGuoR6ggU3CPrcwvkbiJWPMytmM7sy1E7xoSsx19oKk6JYQLWxCU9xRvcfZWa",
  "key39": "3XiHm5kVQKZiBN4AKSVstiX94qMzkSRPfsw3imhfdZKZoPDe2YtMVv5z3uxejyLnUNeeU9heSyiDdyKYmokjsESN",
  "key40": "5CYK4oGr2uciCLb81uJuxx3FtjsyfL9jwh3t67gMZ62kn9CH1XryC4i8obveWoKwRhEcRYgVV34EhASSRJ8bFtRq",
  "key41": "39feVGujT3oCD9yryMZ2BVA5mMaUHr5Hc6RvtkuPRAcjT4xhHYM1fMG1SQDwwJSgBskcEnYUaSMxibNAzRBNKvVq"
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
