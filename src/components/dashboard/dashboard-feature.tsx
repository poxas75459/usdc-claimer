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
    "2KLE2pr2HcxHALDKFRtfmG8azQw85dzxYyNQQJRvmZbKJSBuJxTprX1vf3WpxhLTG8PH4bJgXZ2KFrNsiXu9Boe3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35PcgaQkeP8Q2nkoSLmZxLARncmv4jfHAjFJygNa8CmBzHe7Wc7XHo7pmSABvh1k5wVuxHypwoYG74PFp434gEB8",
  "key1": "2zoiqPrBt1HeVFRdFH2nh3urCLrTxpf7GuX7fqbiPuPX3RQmfVgitwpiFtCdTCtxb2Pf8WrygrWM1DwuhmnLvuPd",
  "key2": "5SpLseKLkraYGHK9ukFkw8KRN4pRrY9edgm3eYUH7Rgzztpw39irWpThGTJXxrZSAx563K6ekidUD8JbV93di5t9",
  "key3": "5VZk782HgmMN8NNiELiMqGi6L7Ea3aXDyKTP4cihmENXtkWtVvkafkTY79HHSyGQqNP6qfs2Fu5tij39z2MTaUDF",
  "key4": "4x53bmiGm89zaBRqMLNDiPWPG1bh9qDaEtyfSdMCsu2jZ4coVNczVzVJWrBtkM2XS7TKpJBXFd5zTjhqmVHA2KeX",
  "key5": "5rnFbPwEff8UKho7ubELj4hA7nvfC3TXfFYpKXGPJEBzFfiHG3JH2Yd62F9wwsfdavaLzQy8GXPG117QyoYLqvvY",
  "key6": "48nmrPzTqn3iiY4mEXmdbPCjjEiXEgvVBeeD4cWyqZBxVyBQ1SSPgXtyJ9qZo2JarvV52UfFcquMdTZcUA8m1jaG",
  "key7": "2qxb9yYyzmh6VsKsPt7TTff8LQifYCdif82KbdACceMif7vXaVNP8QaVvdWwVuYaQSCYBt626hLtieqAnUCmENp2",
  "key8": "5Sqgu37wps3dMTFjhCtPCBJjz2cCxDBpcrCqFEzCSvrHyeR9SCuPfeXqp7a4LkUFGHwzTGiruQEe73UgiEhcz8LJ",
  "key9": "M7e4PhbbDvRBdxrN11maokTNYbMijkd1FSVBwYEvZk1a65LvcopwTHqGiLURQett4gjtN7VkuY9T3N4AB1HCfyc",
  "key10": "AV2hsRe9xiCbpvcNohF68oA6a9x6w7P4A4Lnhxj7rQTXZz9zmAXktdmYBPfXQUY7KqZzDPvvkUjZv1dLaj73ugn",
  "key11": "T11Y6sKFebF35V2421Spw3yf9PHfpMdNbSJXX2fcuL3FFxTCwoxEPPjrorQg4ssx7c66FGWRAB8QNvKLjrFSdst",
  "key12": "1krzziBQxRPTtjc98NnkkgppvS7hF9XCtaf1Fih5wi2Taj5kc9PxpmWJXdcm69jvCSBadqkZKx6gabiQwkcHJBz",
  "key13": "63VPkUjDphvt3fTESxpPeqGhU2xV39NJ7FTQXN1YFvzj6fP8xqoCh1XqdWyFnaLyNCnyrDYVCqVL2mCpZYjkaeR5",
  "key14": "42a3DxhfKFVDKrKkDGLcgzhN3zhnCnZLajtsBNBD6NUjtLZfrvdp79M2rmSmDUNgi8T1i2GpdrtSiGuV8Lfh48hB",
  "key15": "5WtRNmSF2kjT3NUxnYeZcrVDgLYEQgTxFeKZGtgQEvryP1nqLdebughnWNzCDyNAvvLRP7QEAHp5CNQLEBMvL3io",
  "key16": "UoBPcPTw5mcYgZ14UjFmoCiCxFabMru787QqrLpKSFeoRDJf8douh9PsQUWd4fx5FSq1q4mPkms8M15yrhWNhac",
  "key17": "2QHpSKkpwgDHwt1tM3BG51DERkANrTRUdzMRHB1QCuePe66g1WRHvVWXj1DcnJAwcxV5AWhGrmgV9Hm3AZKfSrBe",
  "key18": "3EUjz8fnJ17Bfm5jMAMXtzPZc6tR3pQgStLGJFY9EKwNqjy9AGaJ6Lx5NFq2q3Z6mfKJScfbAm4RNZcnd8sXYwBj",
  "key19": "61BBiBV93gX3Z9Zk1Z4QoDQeTnqhVN62EeDPGurBKQqS3L4NgnNqM5Ux5DU8dLCpuPrYhzptDYLhdiYaL3SAbTEG",
  "key20": "mAkAmXU2dxWSp9hw6T9jPb9LdgjQ8VSMHZuJB2kxLFMkrNTBnVZ9aqf8vxfxkcp9mM2SpqMR66pnXJBUH2SMwAu",
  "key21": "2maeLNmdHoEFyMLVfNHcdjHwwiCZJ286bpx93HkQDc7DM59wHNkq9arNSVz7KRktdPZzEUH3k97muzaFbVygk69w",
  "key22": "4ke1KqaovkZU7SZFK4cUWCC4TLJDMGjttCRGBAVp4zU4aNsYjr54txi52QtF2rzUBciE8nqATQM7hY3CpnrwqXor",
  "key23": "5T74e9AsjA6SCpZsrLRUXKXcTzQS1zNYmuDcVwaUy4Zh8vWXbDCbtcVJzvYfnucXKDP6Lran1JG9sHzQcWxLATX2",
  "key24": "3Gzi3YhdqCCQiYKzsfsBJBjCjqzdXu7nkvpDXgzNL95BrPdHCr1cVrC8Mj5VrkPEjRJApCEqhDPdMXZnch8A1HRN",
  "key25": "547m4EmVWyHpgsnaoM9GTXFa1NUoJsJoYHaAcNtJUZRXom64Z44MbiUZBPcM4HUZxHwJ3eHZVp5HkGPDiWqe2qs9",
  "key26": "4pKZAGkAwo3M2PeQKAPqJFKQYeckTvxe9sdm95qPBbqQRyFT7Ua1GmBZTxW5agM7UZNBLcAQ28QCBsvpfJH3nEJf",
  "key27": "o1Bc2SYum5W2J6Afj9b442nZaZdbsDUFohbDizoWDBfMFey7oRfnrn6w2GzRqPbGERtuXGrMGeYofqP95KQHzm7",
  "key28": "2gxhRzVPSiS7S18gZvM98EVk5NpfqrEVUHnBeSGan18bhck3P2mgc88qH6y5rRzf6s85GU2Dn8ckqQGBP5YTZsEU",
  "key29": "2x6KHBmSHx5v648uzw4t9zcnQfNMrxDUq6xFMigLnGbBXgNFJKrYY56ZaCyXqRYhHfhgqHg68xxw1a3LobmmCCQB",
  "key30": "2YAMJozpfVHvXWvKYX8GFcUTCGnMqNebG5vB5joFLejqXwEETngn93JMLhcb1F5ER4jDgYLEnoNEMt523SS52UEN",
  "key31": "2eTK41YE287EWLQJdjzkxseog7yNxfZv52Fk2rqvn1SNHT82spz25jEG6LwWT3ZQWMAPatGaJBo7RL3TCmPMKzfT",
  "key32": "sEAnMq8ry4Q77Lxvv6FXUitAqiaUPadm83PQRrWpq5AmZM7YLXohmro2dyPo328HKuDM5qsWxQWjMejKUCxrj23",
  "key33": "4TYAnYhx3RPSXjSECr865GcGdngyS2YydMhHWoLrWbem4jYLsz3XKidk7ZwqRiE3eXyzcuYLFQ6rwQX3xKrnGBrt",
  "key34": "3HoqgSQJRxzenzkVm1ZrSeSjo48q6ARfgM8jgX9kP7qkat96FtqEJDHpTUjuvKcmQRn2FWh4RMW4seveYdspCgSf",
  "key35": "63mcGmwLPZh4cvkxkZYeMKsKku4iUo7ZMb8UNTkqG4zU1ivrQVyz9A1Rou54vYckNNcF6FeEncKRxGvyJjkRB5Dp",
  "key36": "2pgqNWuWYEDG8g96vHn6gKSqj98qpa923ujbvQwkttgWGFKUkYKDTR7yUFGhrqazTUJP8RaSDo31RsFzzGMZWGZF",
  "key37": "35bMyA4tdP5Jd5TMHivNWY5YL3wZwxBQQjDbm4TC9yoeBq4Hj4cY4qHyjqofKH942begYYGriD9DvrrBXXBjMfu7",
  "key38": "2mADAwb1WxhEkvmaBSvGJJ9oLu7tHKXhAsEBMcnDbQbnorCsTw48R7AsqMtwi8MbMNAxTC3StTzPK83tJBwfwRtc"
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
