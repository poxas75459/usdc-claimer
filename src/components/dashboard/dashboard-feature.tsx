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
    "5YT5aC5HrZMPe9MH2Avbqo8PLQoHBvwJcNh9XVu8m3fLAfympfkcZ3bPwihFXuAqMTmP3ZraSnvUctv7PjNsgrqx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1LxWTFEHyXsNFH7oLvzypw286HGA3cqDDHg5D8cVY9baY7wmdiwspDmTPBFofdCutazgf1wyom8MNcD1eVHg2us",
  "key1": "5AygxUC5PVV1BuSRXJoFXvXbueuL2Y6WyQ76z8ZWzZKcqM8qH3vaGmtPr128Wmp1GY2H1EePhUBvLfaJzN89c7TN",
  "key2": "3Aas6ETRsbbUnj85p3ABRUQ8VhY7qqJWt7Zd2GnwK7ZuU5ATEwfXwKNVVaVpp6eM6DzNRGMXXdTjn8aWuNmswdHu",
  "key3": "5TYanr2mfit9QXMp6X8HLVqjUw9DF7NcW9DRoanzJjCQn9tbVwHDchhE41BYtfsSXiEuGHE1grm2jv1vUxSckjzt",
  "key4": "3p8W3LoG2mvttK41Ewm1fsn394nwU8Fn8vQoaPbaHF47VZ2mzdJyMmycUymLf9hR1TXzF6AWQiAnPeLMxCaozfJf",
  "key5": "Uoyn7WkhD35Nst91QQzVq8Fp4bWgHHfjHAxTJ3sUG6tShUzMXmdHQWSKpLK1LeNhR9PxLXpDLnx5gfnoAVyv7LS",
  "key6": "32wN6Zr61ivk1em6sb5cJzruMv4jd9TJ6PLi5MzrYRmmnNENkAYpYe1KjeMdQjY6Lf18CpTTw4bs6QzKTTwFz5qv",
  "key7": "4WPRDLdByhDYAbwKtydt4cLqNE4Sr6ZYxbwpSmdtA8yDgsqNGA5qWAM61qJJUbSPVsze7YkYNQPtvX6K8kZLrsaX",
  "key8": "kCs97DyXT9MQdZa7XWqzHRu4bx85Rvac5MMN1xFE1Qut9x6VwRGrXtqTAFENfJv3h7qimDgBm4YahqE5ugWMqE3",
  "key9": "42jRYGVWeJTGqz2cjrtdBSpYfZn5rHHdtPZDij7xpUWb2pRGS6s32cw8nKHFvxsRbajrvjeqJCRJ7KNppciEKtBd",
  "key10": "4GJopCGcfVP3vcsKoz3cvKyB6WwctdGf4UjuXP82ZoC3aA2EcBBsVW6v9zMyHeQFx6m7HgeGxNuQJVapaMbjyK6h",
  "key11": "2LLNbQzKQrLqTKDP5MRofnHozc3kVy9sfWMYovuovaAFaeiBUU4sM2DcWLjmHetfaAGidu3r1u7d2JRwXPHkCZ2T",
  "key12": "2okWibZkbytD2eQHhu7FML5RpzEgTKFFCxvQibiZmX3d8YMXdHL9pXQuqiT7aPSsHYarqhdJ82XJxd7yJcgdPbSf",
  "key13": "3NryDPRwX46ogJzcFg436A4AuxTQk6R9Bw6QrnLNnEohd43SQYjms6C5SvozLTmhkrXZRhT9rXw8MEpz17TxAwEr",
  "key14": "2AeDmJmLQABrDHRcmCTkK8Q2EgfzM5TXQUiCEBrbAEt7zfnW4BaHhiazEexrg2BADrG6rz7ZEzQTqMi8apTRjtME",
  "key15": "43KoFCmmYCiLyCCDpQ3KGDtGdf8dAAZL24YsQ32wZVPLsG9KvN4U5XDfqZx6CrvkLZTdkpib2nAhXUMusVAiAsMo",
  "key16": "jEng3qhhcpuKMmZwQs39pgaP9mmFV8r8TeJFzLNUTtc6RbALnKWCsWqpUnMbSw2FefALHhPwtJXNN3Ad9bUyNhR",
  "key17": "5jiZMiBGk7XQKzvMPYac7KEacUwm2jHWBLXdV2gjZdNu3g1DFHmstc2JpoL4D97CBSML5ubxnuSAdMUP9kpQofXN",
  "key18": "4DtQ44k4yc8MBADt8RJWJYEuyvs7vgbnB3cnBAgGXbWZojAda8a4tRx65zWhM9DiinVd7vX4RhfQGmsGnuS8ENHZ",
  "key19": "2HsrLVoWfVZQM2QdbnfdkLVsi8NBrAvSho6SHVwRPtYRjuFcPNYxQynCKKwt2K1RszCJNW5EWKcfkyU2PRK8c7dh",
  "key20": "3fU5NvwipisMsFpgtkwjdTQdxJYq8eg1QukYMiqAmZFy8z6raqbBmjtNSp8sE8e3KQHhDxjZsdnvt8Wp3HC7uuwi",
  "key21": "K3K5UW5Q8X4kz1u1aoAddarFsMrZ9EYN5BYnkEpZ8BiSgUKxfV8WzERNnyG9ZB9BNFPhvM3aWdhPDhXMYVu53Ej",
  "key22": "4CvCnffzEfarR25oHrpo5MMJveFuwacZDVgkxsQfex9YyWJNfrd5oNk2wueCTzoKxo9UDPyDoT1uXg9En5SRdWjg",
  "key23": "4mpb4SgtcMYYPkyRvt7LUF92E8fguXpkR8LQdWXfvFDDaHs5hzvAttENgAJWt1ay8kecpG3z28PtoeqW71WSUPAA",
  "key24": "MBjVGammWnhPepeRJ6ugCRQejZGcJ2UhU3NGCP8VrBEWCKqT52ofDjVMeTMmfRMzGF67QjsTS7Qpf7cVZvH1PAN",
  "key25": "5AFcKCraznV31WzbuNajQyY4xJ6q1HGn3cpsrTDK2cNhkLznSQyrZnKogbwMfgCNuePpjJVdKH5Kf5WnuyuxirmK",
  "key26": "4ZXzPHR1M2dpShbN78Uhozkz3XyvSDH6EQEkMGmoz9RcojECHzxrfMu9EnqR3sKmVYw2ggLCGyWm7r3CQQGqHGUZ",
  "key27": "3asLJy1VhJooUnqxqoNxT47Nh1CVkDZA7MG78eQHzJmqdQJ6hD8UVKtnNaQgxASySnXgeXydjxDTYdEqSbYVphfy",
  "key28": "4BVmEeKmmSZUp4zHzM9bwAtp9NELVTv7WwPkaxihtu8dePHyhEjAz9DHyHFHt6b4p3PesjNd18YuLaaVhBtbKRaH",
  "key29": "5uZibEZsgCBu3fqYTks9ydahPQchdVHuz1zxMZB1PnRnRynw1AMYdz4S4zQ3iqDtYhmLuCquqzSLgVuMKvGxYKdH",
  "key30": "4N2Vu2NPjKr8FQK3Q62mcxrqWVvFVcdGgP92iFUXQ5JyYqvjiAm2Xp6mMxviEnWCDyt7j7T7iEYoRXZKQPhPoJw1",
  "key31": "3V1XaoDwE4XU7mJVHrQgx8Fv8aE7YqTevC9RfyDtV3HaWcXUodyurLBJV3dJ85Xf43igtqQM162w5sDEPEZcqWP9",
  "key32": "2h81iBrxRWegGBbmmwSAWfRA3NAaDW4KY2DDFF3MB9NLDYqctB1ztmiXCzy2xxe3M91CoNbvejJ8ajtPRGEpBSi1",
  "key33": "5kQTazWhhRWsYGt1EfrSNuKyadrvMDyhYfWRVH72nt7Whoq6htjAmZVbPrCcCJE165YPThVENw1faR4UJzbkr2EL",
  "key34": "VV8DoTe7iWPpZ1AZHovbesWkXjpgvoJqwukpixMAzpjbhVyUbad3odE5guhxRDdsusJDtCB3ZHDBGagkzpTzfWv",
  "key35": "3xSfb1259yut4ScGjLHho9hA7dnKjfnXqrRTwJbTpKsc7sGRt23FBPa6gb5bFk4xn7EDmKsNwKHkjHmFeddQK5XH",
  "key36": "3AdTnVxHEqUDdSYbndPiuiFzDc7QTR4FMFJh9VuH5YktoVJqpf1hCmw2yCXvvN2dfwNs4jvhrv6inmF5vcan16CS",
  "key37": "2TXos74TQQtYjwXtkq5hSGy3QZG8fsDb6HA3Azs7CAD5Q9nkdnL7tXDdigfqjx8vvV8zHNVU4idZRmQd6C6HT5va",
  "key38": "4PnzHrp6JB4byoHZoGXtnnJGMHKo9mELfWiPwtyYQLZJm78kBcQsDKrbGPAc7yh4t1Wwtv4JSiSDPEVUg1byXDY5",
  "key39": "qaxBLJFHEvRWrQYw2XT4K9S6aFdwrPSAZqnMkCVRGXhrx3HJr5WRHx4dV7sXRbaVEq45nYLCp6htK5qrgefGctr",
  "key40": "5ABBiHixEpe5dRBDwaJMgQ9Sp5MYFFgGbU393KWjL92qFTFRCZtDJzZydoh1gWmo6CeEbBgrrZ6NzR8iHtyNvkBk",
  "key41": "2eheB34Uxy9sF69vBPn1RABLwQcnD4FbHaiqs2EF7PfQvtLK1CACfuZ81XCxMJwFvtBNZ29GCtVUmVD42hrfyaqP",
  "key42": "59X8e7snPaLNAKwLxAuUxGrN5GRs2zsTeuKR8QuUqyXBt26cNHRB8VFuM3AjtcH6TyKxL3QwiAjDWTQvar2E94Q8",
  "key43": "3p3kdYA6Jvq7fnZx3pzxYF5b5BVYSc6r3uS3khznPQGRMk5fHpSxsane8vxkMDjoJLv3WJAi4VimfYp5QBTjsPLq",
  "key44": "4kCdgL6vHMW3Rdb44eyem4Z9Kbk5RCvnatBzaP52jEAHmN7Le5jUKcXDdX8umFMJkrc62rf2ovjUpgmZAicffTJj"
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
