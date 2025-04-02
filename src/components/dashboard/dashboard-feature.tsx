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
    "32AYaG6s9U8UWHpQB71Df9XU1chh2WbpLfYfqSaavFeFt8pv5N8Zzymg1Pz1GGk446H9YpGoaTNQbrV18oCmiCgV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ybyLrpqmxs9swmVciYBpye5XTr3YQXoitAJuxZijX34LCMKePt6aDJmSVfPVyWs1gfG3k6aEXucLDTqD5SmCTUT",
  "key1": "3Xz8k5ZcN7dKNjAi8nSyoRsvZSpAcK9rQSCGhsqRvwnuJX8ruFctAcLLib2A3uisfQaoqnddJGE2DK4a1EawsSdN",
  "key2": "NsHR52cg2wj7MymY3zniPPWhmFcFB25MdAG8ZzoUi5LfSFDTomTwTkBC9rkMHoRktbZWUKz7gqDPyLJVEBFNJ4a",
  "key3": "vNzkGbSw2Xtw3zTpo1g3gG2KH5S7dNEabmyWxes7vkbDUaMUrj6ZYJi3nNCFyKtViRyTtg6RzhnRzy64zHbfsVL",
  "key4": "34BoqkufFq4LEweoBfB8AKFdiW2vDujDsGFy9YvceWnoDAnu1y21bDNoQcsTtfu6T9KNkicdeE2pZzKXyjETjCSw",
  "key5": "G13zayesD8Vy6XUfKGgaSyjQGxG66Vb2onAw9DPhKD7dMjp3BhJhWeKiRZbQybrQk8ErDDFUqC9VQPARSV7GCpi",
  "key6": "4vvEfutepnfxKLknsYM97YfLq89sKK44x1oD7XH7icRhYh7Bdv48vuMWGyEb1VamJvpXargEJddycu8zAoEMCGuW",
  "key7": "4dSiHpxpp5cLhahoHAaY9D1QyhUJmTCBJwoehw6LWJCFyty7hSGi1p8y4zEssC9SH3kcKxkDFjXFT1RC12p9wfyU",
  "key8": "3LkArQd7n4g3oaTh2EpRqnrsc5wwwCfULgLayUvnKfpcPS1x835NCrWVfJAyH2Y9mX8wehH9fzzz4km2ciLHPTZ6",
  "key9": "432LkF5jMF4gTYfzfQzX8q5VRTacHfiiHnuL21RCr51x8TLVi7NVfbWfGdDvgbjiLRQuNA3uoNBiXtRg6wgBky51",
  "key10": "3tiPLXEtGQc3TWFrfq6duEBhkQvX6cyqbVuyrEp4ffyYa9EQkUCpXX3PaMyiB74R7voFS9kfWDtLxXMhSoafAUw7",
  "key11": "44ugspzV6ctfjn4waA6C26RDCeZz7RELvKcbj5HTJY35t2re8AU9NeLubfeseVuLfa3oJ4hxa5Cqs7q4jw7TX3ye",
  "key12": "3EsTtcW6jPsDiopZjTZS5dr6rTz9cwvZPtXJY1XRYbzCf2gonGKyjWr5Ee3E8ST7afGx4yg2Mz5SG2C2Ti3iLfo",
  "key13": "5gdwqevXwSh2WTGvFWo7ZjMokAABnfFb46CuuYcUZfG7s3SzDRGs8LhxZRjbMcFjjwA2FsraMshVEw7vFkrtsBgE",
  "key14": "59UmXhPRdTouxmJ2wxHeVFKWbpL5cNpXKNGXynoFhoXYTgBsLfgeoUo4E1rp258ajdG2a9CSXTHXqRFYax8MAFCg",
  "key15": "2YoknpybVvqWw2DdPPhsYbc5vzGDdwF7RwCYLihk1grKwkw2XRLcVNCF6qH812chySzjLj5vNTTm1vVCjg4zR4sY",
  "key16": "5UL91JU6o64XWrxhtwesTndtHFH5PF5zjvTqujxdcVzZT3GTSbk4GPcDfwjtJwzzysahqC9BcacFvKo1Wf9bkMPY",
  "key17": "5qeQpPxz6CKNoNBrhyWzgEju8r8pT8HqUwWWw89ycq73PhvLXeuVrjArHdbhBQVF8wx1F68opAirRKv5QMt3hJBa",
  "key18": "27QwHVgAZCF5xzbC1je1unmgJVhpdsW55UwRsx1HajwnXbNFYN5KzuTf3S8eSrMDuRQ2kMLPtiMYKCw5C9onHvuj",
  "key19": "dyEoC5a9ycXeZVxsjbKmwAn3Sep1zMcerV8c4h99WbfDDTYukNtpkeZVMVsUmTzap92GhPgntvRq1taV7dnhW5f",
  "key20": "3eJ3Aa5rTz2iBBRzU38pr8DhEhHcFGEW7NiLLiGvbjtTekNhEL7KyNbrzBho8e69GTzokTib38VVSuw2uU2e2cv",
  "key21": "51kxrD7PtyAGZvA9VpVHW5N6xPvUo4FrM9H7E7ehdRrGo4A2ATn23ZUoxa5zDx671hKqUjnBaJC1sF4GvVDxto5W",
  "key22": "2R1XBWefVb1JccYtsKbWzji8Hg3VH2WCSBR55zWBQbnmTGaFseGYm7FHZiRbkxnR66eMH4ctJBphvzsA6hGwbCoL",
  "key23": "5ZsjDMp1x6EDHWf84AcxQECkywE44BJwDmV1MivYrczZgmovj2Hxd4nH8rvJFJW1mQaBAPxccGBNTPseXzqtA11T",
  "key24": "5FWV8envJfGrp8KcrVLf21NHNQMxVCV1E96a7yGubgXs4mmHiRB7nwniK6P74ewo2bF2P7ik5ugZBLdWuwSjCNKz",
  "key25": "4zT2P6DQaftEYPQFZMTQ1UY8f1uC8UmGaFVuk7EsdQFkK194ykag5WrGi3tc3hDVUkZ8H55YqwMTjnSguzzcmtfN",
  "key26": "21kMfMYi85o6w9Y7YRhcKAPq6VRZpauZVZfL56PXARrnNHTdHiy1EXjMYd3WAA88XLUwvjjeuP2dJ3UwdjW5y7GD",
  "key27": "ijgQn9niLTmi9NKzuRxGQHjhgzXrLabfos4HHmFPnrskmWj1qoNzyeqEvssBgVcm4CQMTFMNtyTYswgu7aXz434",
  "key28": "QhbUDEnJgeaUJXEeWQ6QsFH73LQKREUNtMJfux6LBKNQUn4n4h2QkD69KoHjE1FXKop7wCe5RpvYx8QQbP6hEmH",
  "key29": "23Qa2UBeBfpYBWVFMtysa2aDwgAYeKRfSpVqPQHe6NxdqYPfMtcdnG9kjbVCbXPxyjXChRMG9dU4UrToBZc5AjYu",
  "key30": "4epLXiPUcgSCgRe82m4wG1nZ1n21aV6gCkt6Wy1QLV8hju1xY2gAVNSmW4yYUNbF3JNg4eyKRazRe25FhK11WcSM",
  "key31": "3ZUZ2J4RniG9S9SoVz4if8neW6oGAkKShJLoZfqCj3JWa1hQyHeFgJxiwMFCmCMuBFPdM2HWTEThcXaCRhr31J2H",
  "key32": "5DjdEqYEy7Lkv4AJZUsDD6GR53EY3KYjW4d4Q7rqD3Drfw72hcYPLeSKZZ33bdBH7c7TcwKoSq111H62E78hps8U",
  "key33": "Q6knjTRzRW4yTAniz2D6K7dvL3e1ieCDYFpfPjMCcT4E8v3FatVT1tvynqAs1f1YLrX9pyimg4WCWeQ5KnyL23N",
  "key34": "3ZX7eaWv2D75SJf2RTTk9ZCjbgC8YVqvEhAAJAveR21Nk3DRPGEBzFnCPCoqCTtARUDaseqpwdFJJKpnJnNk6KFH",
  "key35": "AcWSYPwBYAR8VtsWDAUYUjyUmvpS2Rw1ycBCNE2YRRSArkxLQifyueZxd8PAMdZPkFSbmdVjMVpw6QZzSQX6pEG",
  "key36": "2jZiEU4Lo1CohBcde5oHFMFxGSsDpcK7XXXXK82cLGfoZ3iKbCyNAVvFZvSNmym5Dts1kQVF1aWyE52xQRbVjjW9",
  "key37": "2CxaUfgsBZ97YZQL1wxuu8qHZG5K4BrMWijJxvqzyx4Lwzpdyn5LMYFrntvVH4Skd74RFCxVSfjwCsWSWogVVx92",
  "key38": "4or1od8QRNmcP8qrm7ZA9wrBoWSZmMfRkXSiWr1tCkpzh8g6mWx1aMCz6HDGRBjQsEvKsT7NaGDk6YXgbQcW7gPk",
  "key39": "5iCkspgquAcnqsRq2QdbsaZs4iCKFimk3JhNSKEnzHvsF8UY2rASDMQHSpnbv6pprEgRXizf4TE2xXVqsbGg55fN",
  "key40": "2Zkjwd8zdFkE4ioKYdvZZPt28ABrmdBgg6imGod7sZTnqyS6Ytp2tV3zz1CaKVjxYh8f6UA72aS6Q6dPFwW65SuK",
  "key41": "2EJyjTA4eyrUvGJsXjA5fTZPNKD2UVJ5E6Nu6NeWj6vmPBRBBmfVs8qcUfh3stgyjNtnoWC5QaL82EbFq8aBYhVa",
  "key42": "Cy32dkrs4gKvsxDjcrKfXDrHwpgHHqjLvBLCMf978SqXXpMfR5Jsd9DjtyvG927yzNYkVnPaJ98oyPVkzmBECA4",
  "key43": "3yxBWVUK5E3uPX4Ye68mK6DG7HrfqhKXXdNsV59NvNqq1CWQT9gGZPNftVr9tFmxatPh2PqWxY7rGuKovpDdHenM",
  "key44": "5PseBEGktkBm781E9W5Y4vw4pERtBL3Rsb1QdDcF3AGPWMMZag39MARzmSwCFay9uMtWrRJhXzSbtzUMx8U6htrs",
  "key45": "3ocZ7N3gvMvuQG6dBVjiLxQYgm4WBjHniR6LziTVH3X1f1h2qmmqoqpnHkAC6qTu5SPvGz3T5UCaHPcdW8fW7GQS"
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
