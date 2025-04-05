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
    "2nLMMHk9GHzgJ4vGG7hzJZJTQtRpBFL1Py5FdweSj391nKs6BpX47hrA4JnmxcEARrNY5SMtSp92opxMX7gja868"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y9FrKXxmrFJadsbAMUaxQe3L2nyUy56rNkzY3No7A2gDYgs21P1mKk83EuKgwEKQjg1wo8wz9Y7Q7ewbuyxEoQM",
  "key1": "5oC9WfQhffeURfxHE7V9aRfJ7V4X9zvVpTQRekrb9JPHzM3CVN3fbhwmwkFqR6M2XRbJgGsv5BmcJz65rjGfnSFv",
  "key2": "3Tgc6zyFZJbjLgPDFErWG23sM3FMzrS64cpsLTm3F4r2PcDnXAxMwMZEiouqNEQLQZ1oyhv1zS5THYV4groKUuKh",
  "key3": "32xPm3yvXtfnwYRpC2TZBSaouJykDgfmwkVp5iHzQx863B8ufWx7RRg8RpaiNwMQY3BPNpHsqWxxTAePb1WpzdKC",
  "key4": "2ZiJfSNCSLpqyPLnbm6BmXEttgTeZnS1YxbvTwXEXiQJw86Msm4N6tTUMv8uDLAFtRXuMWyxXDT8nJQEB5MTzjgL",
  "key5": "2oPSb8m2fkPuE7mqjGgkHdHK7j3qq44aKYysfka4ZSQw3fnG9U3iGrgRJVxC6u4A1d1YQ8aFsike63Dr2Lng2tWP",
  "key6": "48tioVMc2pmn95QDke7K6rf2aGTxC725H9SFeR7AG6GxWJiVSWufupm51FQjXcxhzdDgaA3oA93KSLT9fNebkSUe",
  "key7": "J9iiohFa7nTBo5SgJwAA3PJNt6rWpDRqt5rzBVqRsBb2hcNN2BJYEpuhxfhyJXfqw7zgrKx45fyUvkeEF7jrKCK",
  "key8": "HLfUtk9q3De9o5trGdFa5uiobaYUsV2fXXRGXkgAW3KEydRtVDkSpC3KvmMERDHHpjdxRMQz25S4UYVzve9gHEJ",
  "key9": "35YHTZnfAeW8EXqAKchuc1ekxSwCQsFzK7ZPdWdXneWGYZ33htPZyjRbZBBqLBpDHtQsUGTG4gxcXewouGFm16dM",
  "key10": "2UzUiQD6QZizx5m4EbJQDsHVhMjtLdA6Bap4ajEecTErbJp7tEAnbN84RSPD4e1AGRzrRY7Fagb8EmiaLtUT22Af",
  "key11": "yjjpGhcdEJRP3LaEmvdEHvm1v6W4SHCAsryj85fWRcCn8Dkz1unxXevZQ7hL5LugSxJQRyuACW8iBqdHQazyRiJ",
  "key12": "5VFqipribvNwYFCWncGgvkyjAeMYYc5BPjKz8H1uNcy2M5ooeqpiGvm7yamb3WEGu9oDVNNrdBBEkDuxB3zTGoGo",
  "key13": "3nFy5Shc7xeDqDkaGtfZYM89G7Dk12Ebc3BGGT86x5PPV4Rvi9EzmUn5xzK4miNzzagbn5YW1G5sose66Fcsxeej",
  "key14": "4VVzxpA59skGHWzimV5mpEXzLAHcNruYGH2c5w3WoCjoNMVzrDZ6HFqKoMHhA8z4vKCw3dfJyM5YxkAy3PhW7kdz",
  "key15": "2zcYPk1VKH9qjBirgvKDrAEiZ2DmPuDD4V3g8AaP6JDsD3GUhYMmreZQwMAKqkwYLpb7o3qTo4bbK9f2nH8khoM9",
  "key16": "3CLWt1Js4x5skPZ1hvuk1YZpWfCcKPGYeqNrwDQGPQrY2MtRvuRf4UGmmnDKcMqRBLBHKW9A9hiizcSDumJqp3cZ",
  "key17": "2a8qsaDtLCTgJh5b4XRhhiqd9KdyoBUVTNMnZViUUjanoBJE3Kgc3cPDuL9D2RpsHXzXGQpPeb5jVX9XEkugHz7B",
  "key18": "5DfbfzPiGyZjVhaQXmsGLDsCrWDCGi3E3mbqxFaTyMscZAy8hPmeSmRniNGGjFZuNYK5w5dBarKj6rPKDsXnUegA",
  "key19": "4pZTuESU5xD1qQNMLipz9HTtAfaXiyQh27WHUT7xyGoWXSyU5aWvC2NDbKG34PbVP41bnehdqSjABLS66SzFd1rL",
  "key20": "4eCwPyr3bJXs1UvprCaUNPnjWE9MrTb3YxjdxSbLiaL1cGmcYyrm1SKDoF1AUc8haNJuAg8zm9YeycGhwDHqohEd",
  "key21": "AeahWAgNw9A6yc1NM8QVetMiRjg2JSeMzJU55KGtvkLjE581aCWqB35jcGH1bTs8EEffwZX4YeavUktnGQGuL81",
  "key22": "UFCfpGbPHijbUae646FCXjRR52atsUNB6VcKYHrMkSwr5qBSMUXP6zW2wVbR2RLpp6EWLyd92XJYvo7Xw42GZeW",
  "key23": "5UaboePCCVbSYR6gQwCpN9vs3CWPuBUjJHrK1QwJDiKd2HVvc38Rww9WC89BNnav5ZesVV4toBN5xiRnF5Kp2YwY",
  "key24": "642vhq1cMvhbCB2DYTPxAneM8XzPuXTavWnJPRtVB14opG7fGusjnwgPJ4otegBcyW8bBpAL6MRPDMhZXDo15DPs",
  "key25": "5x6p2HxaEto5bA6yeaYQQ9T85ahewXaYHLKYPUNVEXpDCdQLabtHwvDg4q2ugNLLCYv2AuGCnvC1BtAryEgoyWra",
  "key26": "5kuYsBj91XS13tm6o3xKryc7Rvjt85y7CoTT3dP9EdqmqkDjL44NtRvtRmSMAhck2FpxRSg5193wRMkjvoe8VFLY"
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
