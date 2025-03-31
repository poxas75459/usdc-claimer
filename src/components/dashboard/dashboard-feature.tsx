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
    "27rcCtG6DPJP2LbuzWekgts7FyN993DPxEW7PAe5saB6PDBDkYoHdHt5uh8xCfhQ6naVkHs1QeVq5eGSSZXHLijV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zhHQVahSudD3oQmwR5TDLe7gHv9h7sax4JQLNwCA3WmsCQhWomdt3vEB6Af1HvMdgVLBtSTnrzuX4orBYdqvfEg",
  "key1": "38UBtQ24XpEkgZihHNbQvvZyWBZGDm9cAbzJ7GtNyb29FHYk5wVibQwnZMoRtMp8h9DY69Trg21XrCoLvZRNqnrW",
  "key2": "2vJzGY4pzRLZWPrdmXQwvcnoGpziumGGfHVY4thXaE7UnA1VZuQ2gATwqMJm1PDSqbKvuXirDT7uyHPq1eCRc5W",
  "key3": "5iTJJTo4s6mHdm4iQM9aAZQkGsmKhgcjcJxZpknMivvwPWk3m2QS7eCpmh84w2ejQBe9k8kWgsacikJyeP9KAbGP",
  "key4": "5f52y5sTbjHrJSCBhETCU6zRpWrjpuNR5VPoEk1pPT3fdGDtfJKjBmKZ7G25qdSBhz6xR6mGayG7FxutpYFPLvUR",
  "key5": "652WCQZqh5WD3ftHeutv3274aaMnQqwsNnTKHMST7b3KN1p48yyNFUx2w2EQkiDCYUzkza8DRubgs4xfLgZnNjAe",
  "key6": "53QWfqXusKfZFd1d5tc7aWUhUhgy1n1rn2ZXVEGcDpyvcSFsQArCYXU2B27jdWnfm5ToRvj8tGxVa3qohQqCx49V",
  "key7": "1ZqpzLTvkEnN2mSoiG2Xvm7Fn29vFzdxbFWRRwiWWWhVTz35za5ur8y5svY39S1hBhUmJtG3opAEtsWX2ccAMAh",
  "key8": "2ijmaqU3dcXASX7nkWoJ3LaHpqeMtn1LJvsCVwJpDiDaX3kW3kbtEpmCBuRqpcaEBUeFAavizzho2oSH4KU48FD4",
  "key9": "2hu1TqetUjmTmjDYzn4RDqGUzvypp6uzi6pue2q14LAEemE3NB4X2qeFwLJ9wBeNxLj5EVEAwnMqd1C1rBSXCHos",
  "key10": "2uobfbWm42FDCy2Lwii49wzxVPG5yS2977LBU86syqQjGhT1U46R5SMTmZydiXTLDQiMXggnTi8WQVFdsTgMSkAf",
  "key11": "wunJT7hrBnSU5jmZ173ZtUYBupTjV8oSEgRMcqURDTs6ZPBzzyHMH68fBFLCAG5n1ycj8N1TSqESqpk7LfuQyZ7",
  "key12": "Nd1XJvHCsg6yb1CUV1bTRp7N4GumYRPBkmYAwwWjs8oQoyA3a4vuUohMrghSwewWN1LVVhHfxkBGXPTpcYVgFD7",
  "key13": "XV3QdNBLHno89EqB8U6iVvKGB1knB5ga7r7nWGNW95BQoN2mAr66cWUNWq4TwS5gsqAgzSoT2P7dQJcDqDMBYCu",
  "key14": "XANi2KqzAQ8xwcZ6rdVURgQC1AghvdhDWQgsKR85FrxcjPsDPbiYicMWqyeULV1oKraomDMcfb2EDSvj5kiLDHn",
  "key15": "4Zbrd2sd9sNByMw7tEYTAtFj71vE8XrqDofT1U83enEdcM1yLfWkKfCD1bjRrUbYGzdnLjKjrc8AQD82ssJhBSqB",
  "key16": "2ZVecimjfchs5T5TofaYj4vj39DSnfTEMG1ZQXua4SwmfJ5gDNbopnShYhLZPsRyM9RaeLWttaH7y6u17SQUbvdR",
  "key17": "qQ5MNwa8WVAp9jzfA1jTqUR48HPmu48LR78gSunZnyYfuAuRDGBWKyKLZrAXZsbMV2NzcVjGR8xbqTBrQ7tksZ7",
  "key18": "2ptUNAZGTnCyMEPQxMnkv7de3BqdpitWW8JZHCsMoFUj6XsLS8Ck1KH3gnf1ksuUDsbeM2pmpJC8dMWyTfzLft1d",
  "key19": "23g9YwDmTcGM2E5vwYqrhEd8ARxeXGtMJibWv62y1yFb7cXsJndE2nja2ptJ963xqPNVyqtji66UuirNqjk2erdS",
  "key20": "4ADQMZXm8LgxXjFGCXTfkvWCKspfs9vsv9oUw5rneAVWywtbSUstzmQhH8U5hajAnHE6XJSkqoQpyz7dBxpgE5gw",
  "key21": "5pYhHTUnF4H8qBh93WU4szjCkJSv2JAJLjpLKMACuUp3rweP47hDFBXgY2YXthiuM64dASPuC6r4cydmSEjE3AHr",
  "key22": "24CbVjfbJGsF8FDYXheqW7hh4DbMQ9KT1BaVckrvnKN164U2ac7yjUFkHaG9Vp3M54P72iKvcMSfEzytw5nPnHTf",
  "key23": "2Y2FGbXW68PX1sN4PTM3AQdkGxNNKRpZZ2X7tzgJPDzLwsFXA7NGymGi9A8v7DFSexErWQh6eyBkQp6QpeZQLSV2",
  "key24": "NE5pg9xu65kVL8XsF98SygiJiD16DQdiNWeKgtMmXhRCWJXxPziE4BnkmCjMheUDNzkz62BofKWzqfkrdeiTteT",
  "key25": "3BJjcPFeNSwy1CUuUMdLMmKamtb1nu8iDwXcvWHCVcVaACY3SF1aWrU2tM6wNrGE5JApyVAndjWuwboZRWjb6DU",
  "key26": "5eBERXqxc5Udbvfnb1DKTgALeTsL5fjjd82vVaEgaVkTHV8xuAziaCfRBUxbqiCLjVQSMbmEDZyrHbfUiGNpcrY1",
  "key27": "EQhUa4SF3euqUYozBpKznnbYH2P77tw2b68KQvkjAqcWAZRpomzwQggxm8hXkep96ep7m1hXi2xUJtC9QaEY5Tg",
  "key28": "5qoU9CqMoYfwzXDWAX3xwgvfiRK8V3LjSr8hRSRCwgCVUkhL7MnVbuNTGZ7nRfrPXjg2ax6MzvQbqEcFpmCu8eUL",
  "key29": "4Pex5ujPnABngD4eP2D6vvwwS1SRQvvvQYeeMFBUnehohc5g5CmsxJea2hza29ipvGNpZM6QgLcP4p3F7pW15uMd",
  "key30": "F2PWzCCzSAmUEiQu7uDNUybE7xqKZF4KE2PBEZv5nWDpUMfqrUYWRGDZaXix7Lm4L1Xa9gq1Gb12aptq2o1ZYu1",
  "key31": "5WRbMtc2q3w669aPeVc6DWq6F4dWH6nGiCdCHancU9ugPUung2UU9b7BVpo6svo6C6ZeXYtJbRAeWojwBUXAQ62o",
  "key32": "385tjjGSgJJHdVwmD9JpbiA2ahmXzZAHwnNSv4cGBGptCrWJ568PzuoDiBbEbwYoU6JbrBiMZ3soeVBa42CxkaBx",
  "key33": "5Fcd8MUzfQ2TEE2pR54f5hqJbKifPRVEESvUFYWz1zqwnq2UVX2GW1fQUEsdez2hn72AbNfYvyDTFvwCWS2p4Adi",
  "key34": "3jP1786UHoQtHdGQTW25kktTHxpnasTZui2mGfzwtzrwbncMLkj5pAWPjCeQDe9Dq4Xx5TTEtHSuVii1XXduRRDV",
  "key35": "38DmK3BnaqoPHM9iLAyeMfAQbZX2Haz37vopUdVLKST86KwGxMdDJhza6zr933RPTftqgLZr9oN7N7tHFrQa19qN"
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
