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
    "5MGqmVuMLKxJKUqV2MBzMXeTQMjQmSxWaLjDfRwWBHGz8TmYk7jBKGq2REoF3netu7ja64P1ETeHKi5aM4HG3ZQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ERoeoJJ1N2x9qWZCKR8CMGeRpr9X6FGawxCHv7mb1eGoJ4ycTUFF6j7Y2CaQk5aWsmtQvs9zM2NLpqthC4x1fr2",
  "key1": "5MDWnRJPkpsMftwZoBLNvb9WV45gj5zRp3gZMQ5yRskfsNoBkorF8FgpQuiHSnQ1tG2Egj56mBfvUjhXYmnY28hc",
  "key2": "5xQqbCnxzi8SDkbcoay54XRoLc4jaGs1LMXGp2bT3C65tne3hvvDmxZJZcwso5aA2K6AbpW6VcWPTY32Eaq9iqdX",
  "key3": "35TYK54kzGw67LWZvmiES6SVpe78pRACSGbRMGzGr4DMMixoHUUdpw1yBTG7m5hUfixUhbHYJJoPgh6kLpddzFy2",
  "key4": "WqAaMLBWTG8RdZiPzodpb3NgvnxeAKfM51zQUdyUpKVUPo7jcBDW2VupQWFmatDHJajQvAMAL1vaJfjzetkzRzS",
  "key5": "2EQnWN1iAByqdqUb4KLRj8Wiw61uKn87oukzaGGpSa7zSXUGTwv2bhRXKvkQ7jiCUD7cPPwBptsm3KH9tiatnKfP",
  "key6": "314hPAEocQhdBaaTf2iJRx2W7GTmAjXR723htKjTueLf138soZtk9xeGM8LsSbAvj7R7bvXENyhggH6nKTCppmeC",
  "key7": "4qLqmpmmYFUfJic45HCRPGj2vF1ubFKJvrCfm2N8E5k5E85sQ4m8dKNeAUroUXYYktBpzi6hHpXBWW8uUUTBEaPN",
  "key8": "3Gi6tsKunG6fPZhKC9XSYcxdxQGq1MfsHm2swLBd9aFC6FtXpTRtizEkBRuPd9CPYhE8FyZGxyeWSAAJrPNnHeWG",
  "key9": "5qCZ6FE1KwvSMa8DbqeKQybKoQxER8DxJbVoSha2GhMUZJoJkXAUWmd59fATCPTQL1aFKvDUh8ijyH2bwz97nnb1",
  "key10": "2Jd5ic9euzrnZSYJatzTLo7fHxSQwtfpu1oLP8J9E6nCRAnPVigyiTiCM9ZuKSLqydzkpNFaXRUXGN15vsmC4PKq",
  "key11": "4D1tmj5B16nopXXKQE8cvUgw4LBVB7oXPswsa4PF9HKvEEq5cyW6Q3VW6sbfm6NBik2PWifzVgfzkCVNHMznjGGY",
  "key12": "5HXe7ihgwmRY3wgRtNR1E3v96VBHYHNBciyL4aM149FHA42yN1sxtrrxqDpqgPNWMwwgmhjzsrBYyfhzrKUbH4N8",
  "key13": "4EUfQ7KtZTL2wLvGgEnBjXatUbp8YDqPLGrpxNy8g9C1uA3kfEM89YDR1c4wZKRMGNVpiab8mNGQ9rPbx5GJ1zBn",
  "key14": "51TKtJmJ8TTwxGuoppkwxnHQXEcqsaUfEGuHSvveXkAWuKgejDTHAArAbWWwSgtuX9J7StrM8VY9DchfXUtKYyKh",
  "key15": "56Jdtv7Dpw9wXvHEJVaoZtH8dEvipb93exzrriR6aLdfVtDChveouhvJXUA8Mkx1hGZm3UwVCTsRwj42Db6L1p6g",
  "key16": "49ga6XpEFAJjqvKHD7RUNEUc8A4ZcmA6H7W2RR6nbuBiD4VJDHkdf32qcDCE5qkTtvmzELyWGBt7Mb3jtfB9H8TT",
  "key17": "33q58ZC5XQ3b14WTHXAyS3Wiak4fTePPjvZFnqeXgCgToZQQERpLWPgmv8CcmDRPFyVd8EpYK7TogSbMWnFbFJaf",
  "key18": "28w8x5s9hopUojNhuMWkHnzUuhjqGspgWh9xm5Fws8dYcGdKhrBKFQaPfjTsojJ2CqHjaaypSJJiRqh3QB7wm9s7",
  "key19": "5Csf9gMsMiy8dQUcg1e6DpnDThPs6uss6a4vF8xZ5wy73DZTQgAUmivegfrmAWccm2HU2iRJePatXgngbs7vyfWk",
  "key20": "4ru5RZfLMbTyb3BHiSQuQsfUfpyFJHzuFsUJhwDSg7GrmaipPRkAjmGAqSBQTJYcFXWqb1KgvUP8NUraZWKzsioe",
  "key21": "45DKC7FFM8gejxYGAYcdxxjDrK9EGW1TqDLnw21n9e2ZD58FvsRz8toGeqHkZRciQdWzAzw5A2hqaLWP26tZYMiH",
  "key22": "2UCfQrqtptDDG1kNKh7mW44Nhp5go6VazhZMuUKQveVxDXwDxSNcWuz3ee9oNWAGK8zz64gP1ct2puRaPbkiubq2",
  "key23": "3bXfhVYqWSFSLHVXrTNaMngKB8acw19sVtetveevL1W2yHwr3sPN92rg2JXc7mDYvkQNDLK5K3HpGXxpDDDCshf2",
  "key24": "3wvRwpRzHri18HpDd4cbxkgYzgfWce9xMTWYxghkBAy8foJoZs195eGzMvNNA6V5CobN4iHKS4YqansGFbhUT9P",
  "key25": "4Y8X3YTAkm51KNqTST2piYFnygw1A6JM9TwjygNCP98jhr1NnEsA2yESNxXRDzCwfRqPotVjwnoMk3AeiWsJp6hv",
  "key26": "3W28PEeCTYU8UULCENye27svY8mp7fY3LuvKkPEJup3jDEDbYoLkd6US6KP2cpD5x7GxgfVbRvf83NKVit8jmPk7",
  "key27": "2PPBpzuxz3wonwaVWBoRmXjep9Aeht3xN17PS1x9NfQAzZJMm8iWwozrRfz9JTdZM75Ch8nhobEU53f14pNR51NB",
  "key28": "bH3gVrRpAu6PGLQkqMoq8j33dbFja9ySFjEKQbW5P74VAWC6CAM8MtmbB2v1UhPUpcZCtHZ8XZA1wFF1qfM89rQ",
  "key29": "KA7VYRn1zYhGo6EPQB3CuJE6f914pPKBFnr4z5s4SgNwCgvvNyCFXsu1PRSzh37Z1a2kf2br6WoP4EKVj181Cb8",
  "key30": "21qcx6AjtHCZt151yBiJ3jFihccHkDBAXVoHGmpWg4zWegfdoKgDZEq6MRvfuBi7GwvbXKtWwuwK6nfniDEA2H9e",
  "key31": "2YJ5Lx4rzVh45NDK3xHWzZHwEUtxkJCCjhiLqGF88hQi9We6nRvTqLXyk9Sk6oE9aQvyRtxQCm9CdrZJ1rvCVsqa",
  "key32": "2sYRVHokNye39DqdfTnnWGtFWDHSSyHjQGujaBAfTYxeqmSNxJ8B9p31KgEueLWUjrifVtcrkxwBD5h1avy4jMaG",
  "key33": "vfaaKDqrbnHy8M2FTZfB3HKswKgDGkzfLGs42n857VRutEbZm1Bw782Z8r5du6x8kiX8Z4jEBB1tQYSTJ8WHCJw",
  "key34": "6H7FCbareaC3sSiaVhdrzhpzDPm1UunhN5wCH9tvjp9fLS6QWPrujEL4GNC2Dj4ZSUxZvKK4QM8y5WqP5bJEW1e",
  "key35": "2RjHsJtNu6CSAZ7epr1BDprNKK5puj8jRrhQgePyj5NTK2XWGRS91RKK2GzYCGoDrhmXLVKQ1gJdFCepEjUzYyHq",
  "key36": "5e28gMMrHpAUuZLLbr6mVVYt2kynLchhY7KwsadaZvvHX8DdgHidzAgzsRtqo2sU6xZyWaC6tEzYnHNSfWNH6Qzb",
  "key37": "rbocTzAwYudBJRv4jAvkCgL296h44CbtyKvVjWGhx5CHNgnRUMcopJmSAj51yEtjdSC4sgyZNowvNMvuTWpvkGF",
  "key38": "nXxqC3SktiXZY2azHXur75uTJuLDxrhunGMEUYresAhw9ZDz8d8vXeFExeeU9Q13MwGuHnbXhufsiUrynytC5RN",
  "key39": "5bYjJCkG45e53Uc1WHE4WHbPuSzdS73WH8f8JaQbGTSdSFUWeuESrY317BX3c2mzJoZRZL36hqTrP7dHeVvPi9qd",
  "key40": "5H1jdRfTGvdrDsFgXEKczFiBQNuzkZLViakm2WR21z2ZgsEwQrzNzgBLhDk3Fm6z7NGSMgYscvt8AzqsECc2Mcru",
  "key41": "26XE8qpK2zudnmuxyKy9unLuVHbsfVkFHpkNAN4psSFhoE2xkvF2K1QhDqgkctzuhGBmWqMVfme426uy4wxKZ63r",
  "key42": "3GkfDaNY6cEm9vfjWGwAfXGwWTYTiuHCNhhDNeeu6S7TCStmE8wwVVwtA3mLF9BD4sz5GvDiGJJveot7TLZwd4Q9",
  "key43": "5sLPcJmhCivTNP9qq7w4LF8er9dm1fG91W5jCZpHkDtr2Ts1NSovj4tb2iYfamX4ZW8cJxseyihr5UaWSq4c1x7X",
  "key44": "7rPGHX7kEcKQPMA6Bdiy2Tff24h8o4QArhxoY5UhwCgv6HYovBY3UZhq23xtmbBneBEJ1sPjoETSDEd1e7dU7Rb",
  "key45": "4LNBoG9h7wxpHj2YmM4UQXjg9dyKdDPB4BpbCh4EnvETWLEiAGptgJSgD8ZutkkrZkdyhwLkuqjGeWhi87o73sFo",
  "key46": "muzGwecjkBVAqkeekYi1LLqTpveGKkNe3j7Qi95QLQxaYb6f4a2Gy7E7cJByqXvFKVRpvCJBgWwRHu5662FBSwi",
  "key47": "37zPSdE11UkLiD68GcBeJdVrugBtL14cYhVn1MQxExs67iSbvMwNDshVSkPFiQxSnVKmBkhguLh5hwW4CwJEToCJ",
  "key48": "66gT9jheQQLWEESkgFu9wZmyWiAegBTrejL7fFZC26bBqzkfFMfRtx9CCVLgKfuLg1WwRnGtqC9kxSVUqjCBYo8T",
  "key49": "2Ftza6h67uuQmxbV2xAgQKFMdRpThBD2DPcRrMSC36RBeTy2Cr4hMXcyXaZX7hFyYjYcRUAGz8vhbqYXci5ngmF"
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
