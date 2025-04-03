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
    "4KndjKSnUmZvs8s59NmMpW4WnYD8n3djYVF2LKeJeDqNqqzMxxqhzx4iXHDVsey23XHuf3XVvu53uuFDCC3WMYYg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zJKAEQAD8bvJyBUp6PoVWZZ7MfTUCmsQdZFRTZ1pRx25us6RYuFj3CYiK4JEcZ1r7bnWe4DvAgovd3t9D8XXdQs",
  "key1": "5KPkJicBXxZHXHFEWpKyWxMfzVusRVbPs1DDZjPYopajH5VAd6QRSxBc9PZSbxbn8sg5ztMwqxwsrPSVhwQTbgAW",
  "key2": "2Jaagk9f9TkxuoL9NJC9Zvr27P5zJG35jCMpUokHUmChS4unNaQh7izzxik7xzaRdq54CukyQq9tst75P1mtrS21",
  "key3": "TPRdVXmtv5ZqUqAhhTH7GzbpH33SUVH4kcRzqkgWiXpB4697MNXccGJvSdvYzX1ABEsUSa5WD6FdmQ4ZmFATWFF",
  "key4": "2qATwRcZodd3ujT8GBdWqF9UAzFiFZC8rAsWqNsdcNLVBUNN5Fq2JCd7vkNEGezhk3hEoJ2hFBU63Uu4sMcNBXBQ",
  "key5": "3JCrg6B1XhaheX9n45MuK3BKcBSvuvdVmbxfQDMbYwigbpGYiiorL67H9hBTWDCBmLAt9J3b2xUu4f6YS1UNKZJw",
  "key6": "5t656Pm3LFwBmqkG9zy6pJt1UD6xdeHGjmi5XroyQdPLK3JwruMRffM7TyNHApumTSMWFMMCDtY3tverxozoKGdk",
  "key7": "3KarFPLFe9gqSGpR6X6ULq9HsYKd5R3VsXwob4zdZEvkBrgeLTKLJaMfE72JMz3aH1Agk6uXhUB9v6WJEQf8tuVz",
  "key8": "435hyXj4LNrbgm6CawottiUk2kaPibkCobyp3R9iWJkbjRqRhfsGtbh2utos5aD8YfFuKzddjnRX1bt2WSSWjF8e",
  "key9": "4J2TPVqtSCb19wf2p393oyd1KDDfw1nkwrfmVWTauG1YSq5ocKv2w6JR8kPDsTM6xWYeaxXbbVfWLq26zjx2kBw",
  "key10": "5514e84yyJ7SrvtigaShtVNfuRdGpiJtEA4BdRfyuSHDekiXR3jbn2DLCFQ1EoUN8UACBxhysBxYj2KjfLeoMnCV",
  "key11": "4MCDBoowdcGzBRKA8Qzp37hfNajv5rQxYnYdBLmg3TGTxA9tQUMdhJG9CWQABT4KvnXiQhDoTsvxVuM7Ugod9CBK",
  "key12": "4PKvg5AMpSQaH5DCAhUkNUaAKYK726J1JMpVJyHwtAAKPJQ3BodXR14X1r2TRJsujcL1AMgrCh6esxVVaa7S4frx",
  "key13": "T7FFn2gpQhYrVahviR7dDwno5VsxsNRShYAY8shA7Kp3Svru64jNr1msXjRGs87PiPuLtcaBsYGhGfZA85QPymi",
  "key14": "4ANsyYdn4XmpbtGzgiY1uhzsjheenoHCc9QQLTB7SqePopkwd5mPrXBFbc4LXV3mLw859ekgiCmC4BQqSh5Kj7mt",
  "key15": "4JGEnGwspNKtTmMCg9eRZYJakT38QBqqvtL3DA7tHUdinpNjJpUd4UWzLxUYp9M5JhTxQMqxvopvhHUTAhbECT3z",
  "key16": "5UMfTmZMXrm8zMs9CgEcJPFvrvVvdcWt26eRxZGgTZhHaskZg1jDGjTWQdvkUA4uQuNLw8vWGsG9T5aivRTLKEze",
  "key17": "CyjgoiecvuAJLgpDYV8i5vq6PRAJDeJkA5Q7ayHDfTV2QN5RTHAxgbL4kU2gwHCgZnisTac9BhRjZmyM5F5UQ7Y",
  "key18": "28m5YH3TUzWAaHcBS9ujKCYd4T7N8u25j1RjexoVVpifiZfqDXdXcw5GNsfdx8CKA7MDLeXrrzuYQGYxXSsvmg8H",
  "key19": "3neBDaPTxfLMJSBLDJzpfQtFFhuk193JAtKwYLTfjtFcntdr7qPJWk8VhKM4sGUc3RcMK1bHWuLfXXNFQM9scN5z",
  "key20": "29dkYUGVw4DGLrL3suKyAWBLtam3YFeVzSas8wH31DazjGQyMpHgpRzWHzyhxATKpm9KgbtcPGwZ4L8d4QLXE9Nh",
  "key21": "2HjV8Eyom7ve2djqaGo5TKqjKYzsUNUkULi1GBWQcrUJJokpm5FM6Aktz34mWLpi3d26JGxiYHJebt5JJxBCCC48",
  "key22": "41G7FcSaCayX2Lf1EMrUnzJjSmZhu5E3vwTqTFHCNdCWa4MDW2YFzNLjyxhRMwZvqBzu1aRH93z89DWHvjg3ssVF",
  "key23": "5xmoAJZuUPqB7btsnzJbXrqk2M8HMdWQ1vMGVcuiMfrBwRSvxkt4MxbsNkTWcvDmCRS2u8gkAMTqBEeAJKfmiKV4",
  "key24": "64yz5g41GcuYzEnWiRMbx4Q9ajKzbwamCPqTaWFemyBY8Qa84teMxehdQdtBH41Pym2ifcybqpK8f2zTa5ejN1Hm",
  "key25": "3nc5pukMxNAC7yQuaTHRH4kkF6XDtfH56uA6mQaerUfFthD4gDA738QoV2pd78D2QxJC6fEWQ3hRwewpBMa1CFhS",
  "key26": "2dC7B334ifjrUSnRaREgQ6PEco4LWXznohTUdn2uH9pWerRQkjuCu7pSPxX65AGckLswo9kUjiKgG8r1N4dFVpHy"
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
