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
    "XAoPV1ht54DCdYHUBMLnw1bYYm4r5KpKJWM7jT4uPYXZtYi3UZmeU81HzoiMD4DQMkKBgyty1Ci3JCSgnjmB8b7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jcyrrC1omyxzqjN7j9ZXaqUHFj7H7e8err8HqcAbcy8hcAp7aQc7BUKwDErY47D1rS3KrdD4cvCkRzwE6wUgzrP",
  "key1": "283Zxa5hpNqLs1BiVZ1HBm3nEpBhPVhERN4s8gZQsEydmnT3eAQRqXNSNU1bfnUVSFrQVwR1pHd5jbLPSkM1oUKW",
  "key2": "4MdQ3ZQRMksKheRSTxFT9ccXZw3D3XayeveQW6KAKdcHvcanaDJMVhrAbTfeGtRNB3snrJCfNuJ52HFGKM9Jgz2T",
  "key3": "XZu9UT6Doo3dxwhH2vpb95KU9Ys61BXn89MVPJAjrRDjVYkB3FuPSX2wX18nj3WfgSEX2qNtidKxZYhtW6fnCU8",
  "key4": "58GBMFSEMzkQfdCKSnFvu4hFPMedAPvoakEG5V6c9AVFq17Yz8nWBoJKEtzcCE9Xj5YvuL1fyLZtiNbqpV3fftoZ",
  "key5": "66RfgGx2KakdKqKXkjSxQ5F7pccpbLAxFtifrPUoCjUjSLD68UUXFAYKrtXvqWhmqkeRA2Ru4vupMhmbBMfkY5hY",
  "key6": "ah7zrJnY4JKz5Hb8sh52PWF1zPieKSVZ9okQHNMpRBG5yt6bxCsj5F9VgxcRJe9T8xR32xYJrUcnbxkup9dtHcg",
  "key7": "2jxhSEqtn69XatA4eB1bZcg4Fd4F5oKyEF3DvP2UtVoPfHb33zhfm7FrdZPDJadeEbBthAF4KiBfsiACPzqM9vrk",
  "key8": "4cvMi6up98baFyejuhivmhRVNZg8M9SXxeemgrDHU2myJfSrgWKDJTzHpT4VWXo1NPS5PzCW46B1cVfw9UMsSYbV",
  "key9": "Hib2AqvNjn2Lndq1Rs7szFCg6hmLjDhuL6UDaqkoyvqgLmPDhqQnUSZQhyzqQY45Ybpfkf9nArpYV4zsEtDn3hM",
  "key10": "wTrB4i8pHYshTR8BXphe7h5z45WSVp7FwVN7SxA3UWUuNYPC5Qy7gJV4rj2gicCDvJJ2jFH81wt9RUCpAt86ddw",
  "key11": "5sTxL1fzK7yKCEEdoqF2w6SpZt7aZPRboMdELxxviqp5ziMsryfpGzJk2Da8Hf4N2sUEKyzQQJLeyQJqW4Vkj4AR",
  "key12": "3SKgPSX8oPeqAT9knZtjUnZETYeohWqKssQNfCkLYzoweBBDj1UnuobLeKLFYquqgKCdYw9tdn8TgpRN9gHWcZTG",
  "key13": "2qnCUrq5e9oua8rDcnT9PDn2eoPpHhMsuVPB4SULoszrVRkAJfr6xgKRPKTFXxkpiJUByLNCtUHJXCiJtCMM38DC",
  "key14": "6bb16nzKhmW7JzFEfYiPjZAUEHHZDmjjPcexyapsTjUCYB7f4Fx94UK2Nej2meP7imYnq2T4H3mJmiksN3EtZn5",
  "key15": "2LXYZxwnibBUWL7jBEWEawEQPBputEPhsUNWei25LM1iLEmKhxqgPWMgfCCafYb2Kj5R8FMufZwpMxXtc4ztV6Su",
  "key16": "4h9wE5amz67pdbts1Px5KgPNRiZyBKcqq4ighszX6Eh31SJDJ8P9vPhXgS34shjEz21nxnSHZ9FZ2WwJPHqxR3ZQ",
  "key17": "5R3BUkhq4rSqx3ZygLNByvWdek8JTptc4745wzjXwbw8gZWi5FN1bhhzMfTejA1VCpNzEXLJY5rvRwKmxWPr72JM",
  "key18": "4WhbN4zrkMNrd9Ei7qwhvu33D5FHt48mgWJfYv7mU3zkvzuRDaaHneCs47Lr1xz8dwu5pQSxUEwhDWYJKcMnqcRc",
  "key19": "3QHtYK63bCQN3vxNzauz88YB9ZvScdZEfR9voxSio1Cs9xr3tb5bRXL3yxW9S5ZrcPAmMKVBAYWxTpsXhrnUPUnW",
  "key20": "57QzgThZq3zQUtduPCpEBYXiaUtPHsmdFfxd8sUY48HKGJnV2gAm5VaSa2rjMXavp2DPxUfxAkyDeNyMRforowZK",
  "key21": "2V8nDTC6BQQagYJPudvKoerQg4MbKyfGGEMZFe61bPUJCZwmM6pLfH1qhY1oYhg9VKWSBR5WFAeuAsQ99Ms7yGNT",
  "key22": "TuKosZgc2wEnM87EsPhzs4KCaCMASxJvCwBdpV7Etab6bneTyGQGn4hDvU99VvzU4194Sr7EWixKHYbpJEGqLCY",
  "key23": "5TyJcoTEBCN9muqZM4Xm3Ai8YRiyfARp4EZWnBXRiogMNYWYZheynQZuLriZqnzJrBKmGkvzDaDfsbHThkdVa7fL",
  "key24": "58GkzoY5TNwaq4rc7bLRBGvbFghzSzF6ujLyH5iTH6BZfDV19RQUjSQqa1hVnZybqNN2r6G7XEpyrPZpdBWYeMCj",
  "key25": "3sqQsyuhr6LZsyXUoD6d965s6MqTaVsuua3xQZ9tsJErqQhFE5WfyD87HWUZKFMf1AqBwxvhR4YeX9QcrzncAn4M",
  "key26": "WE8BpvWaW1a18N8vPQhDriWsqwWEsFfL1NDBjTiPLEHLv7z71HZm9ypgkcohjJhtVGxEJwrxiHvK8h1Wwbeb2Pv",
  "key27": "3rKnvqBUXcTPeUWJb5nVaPRk38VQNYEng3HwBiLsSrFKJ4YcqC1Wvnp6azCoTvNpgM1BDTZMhwyhtkdENWC3q2vd",
  "key28": "3DqDqwoCh12oPkwhDTunsfHggWoYafiLiWyAmVKP9sETZtGzYp1zZEAgKd17HtsAQnVd95KZax5eYd9YH6guKqr8",
  "key29": "2NNGWU5cp2m61CfaYH13a6eC2KwBxZ1x9JiZqnzXGjYwea2Qb2VEM5rvZmffmcaQt3H93iwCcp9EVMMqAug77de1",
  "key30": "5HuQL46vmhpmpU9guWfgeWQbZ8ADKvpqorika7ujxAmgmcYvrjbu9EfiTQQthV7Tcn4NZsfJK6oRACw2Xi3J6qJ7",
  "key31": "3hS1FKYGm7S9uiNLXzcXbgLzS9g7iGSpiaZx7NPBGSRAdjwvvfM9PhCP7b1dGCR21x9MeLni2rXHM4u3Zrx8Un8Z",
  "key32": "7d72XfbHbEcUJtYu3DFLhaTKdeoV8poh6YNVdhSvQmxGCqXHnmCAEL4c3n1uSnnviUP1A4nvoLktfs9dAtPaRiU",
  "key33": "4CMcvaqiLFCHDWv2tYWD4cWhgCHRVsDugp37yGHxiezD4hTkEJmCpZTcP6AuNo4wHuoX2dFhjMS2MPeR3kVgd7Je",
  "key34": "4J1DWMwrE8iW3uCBtYbqQRT83BmshRDFsQEpQ5XqvA79WRQ7KZGpcSq4gerbJjDiTLUTAFcF8VUneCLZJimdjYhm",
  "key35": "55917bFKKQK2VWgy1oJUGL5fZ3M6jWmBg1VwSP2khLDwp6ZZyQgqCLwPfV28QXubfGVNZmLZthnoUfiSmFSpiA3X",
  "key36": "4V6dcxbaLBuM9o6yvGLfqSrxH648zHdn8oYFcPvvTdFc51SFwTE1W4P4LUY8dVrHrLS1zbo7cWJQNydAxLbiywpK",
  "key37": "BevWabeUFBB39pgQBxgsL4TQyKoUiWHL8or72FoyhA396eoSHP3igsRDttZ79zKKyih9kAvc8PA6Q9rWJFyjurM",
  "key38": "42XCiikCfwKHJ5yesfaifSs8brLUdvYq6xX4TwG6RPfj8d1oZwP4HUfXgRBcsV1B6K63B6Jcw2y2y6z4MhJmiNsi"
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
