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
    "4pR5GGcChqwCjGbMTBUTeqDGYX5dPwXNZPU8wXwjtScKLeGThxqiNBtL8KU9zb9zDYbnjM9z9iwUWj6epJJZFBXz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EKCvNZCamU4K1saJmiktYEMYNZKTaZYSp52Vvj9BxxJcvTe54d6bLqLfwDAhmB2VZv14NLpGK8mzVYwPM2cSeSH",
  "key1": "4xUiK3qid9tfyCXMpvhi9xZXWFYhZ5ah5sGRHGvy4STqYDMZSBszYyzMRKNoSWa2VaXJD85biJhg9K1Bq8tkDp7M",
  "key2": "p3xC2q4AS8A1xS7XUs18ugd2w8idGSST9XbmXW2K938xbzHn9j1m876FzgpzDn8kGcNL5TZdsAQPWwTrTgSxoZZ",
  "key3": "5M1VsCATGxVHmQBcGTP9ZBhCUGX48WTJM2hnENmvPRa254kU6pDxcWR1mEFETmjbMZazYyT45qtpJB9Vbo68YVrC",
  "key4": "2AFDGGUknzjkvPume8sxRSkpVNhbx1jhPQasKU4sjLtn934cC2C8LwiaczGKaz4MKsphQbAbAoiuyG4i3fhkWRXf",
  "key5": "43xNfe5cXwCVbQyrJHsE6E8W3d2FY57pYtx6mQmMC6rUcYKJnP6CUiQdN8spCD9oEDxpaR4act8Z2eaz15x8VEok",
  "key6": "4gtsWdoDxBqSCqQeME3B1jHKP6sNY3efK3KBQv8HECe6ghfWquE5enwnB4PpDiQpihYBJVHLCqqc3TXzbAyN7hLQ",
  "key7": "JMYPsWpT6zeyCFep1ce6y1bgQZUQ24fds4vrcDEMuSHnx4HiSRHnScDdFkEStSYmLHVqY4xCb9wAKJsowwWy9cW",
  "key8": "4dC47DcRXtuqBj18Cjtxxx38oKCnK9RQ32Z9LhTKmV9eWNLHopfAJxMH3TUPfopRuoNmUWo67ha9ptq8H8N394n",
  "key9": "4R5Ts3hzAwpajd81mk7SJSZe6Tbd1qNAW93cX5jDsPDe3fmXsNYJPmryXQf6B288NttuGDaF199r16vbEDREgoRF",
  "key10": "3hdHB6NdrZCVpHxA14Gc4KteSpUR3sJbyDfxBdNLTUEWFyBCGLQJ2Bz6uJLsyGCy9Cxr5evaJCBjuboBxUy2mP6v",
  "key11": "fVjTND45rvBgkCBWswz3UsZ4kX4SEqiEumBAgcWUaFFbPe9EEjBd7Tfx2BNu4YkbjbQDD9pSpmGRvjn7BE3R9Kw",
  "key12": "2EWJkVp7NUhWnmJXcLN4QqpmYEkkwrBnNRybdEC4qqyrHWfRMgMcS98niHXqeoRmM5CQVEh2VxAwXaGu7LeakfrA",
  "key13": "3vwzdxeYtd6QihTmLMJNeC95JE7135Df7oHGFsKmSAfrnKNRpC1G2fX7Ze4oTL4WmCM6hK2qAgcQgdWzYEZ3azz1",
  "key14": "51fmyLMvCB4bihjqhNHVu78NPJqALrEFAuPHNaeuysKqGrYEeDSvjv7cjDa7Lkn8vqBvxpV7jD9DtSmUJ4xiVC1z",
  "key15": "5XkiFuo7NPvsFXyZpHCnPs7XJBjVTRKmsFdJBBT6z9mpJembDPwjkx3vW7XLuF2UwTXecEyyTq5zTyS7icehzvuS",
  "key16": "x9Fx9CmX38WWBcosW6SPcxmG4y3WDT5Ajfq7CtCVTmBwJgYaGsDGagtcZB3wm6wasbW7Fp2BF1QTmpu9FJBLfXH",
  "key17": "4ETAVmigD8TMN2k5wxnGknxndYqYwUUds8yjM8T3u7Uo9B4hFdnDz9q2v72vs83u3PwHvUSxmgTXoxGjAFVpaXyj",
  "key18": "4SmHgCe5kmj8xwW5EBPAxh6U8Gcni1eh2HCH6mV9QqtabUhn2AeHgBZYL3iVs3ujEZCeLK8W31YoKj5UNqRwHRCS",
  "key19": "4nSjy7BtbBWt7yKbgtDu49kXsUyX24kSDSChyoxzdQqYPiVjwDkqgGvthMeQzJMbSFg4n5Vku6uFH8gLJBL4zES5",
  "key20": "4j3NRAZbL949epMiajEZBz9bZLjzq2pCk1aGFu67jNvZaYU5UVT7KnjtPf4aXoM2NCb5v1wv8cF2ATizZyYZwAGc",
  "key21": "2zjbSWCM3NAr9NDQvQEuDoPw9oHpwYoASiBcjD8NEbk3LNDghVXsvhGe5jUDZgdb6EpTUdwWJwhhVRTyJAhRiXJV",
  "key22": "HhFNVQtjdUnir72XUZih5pbiMR1yuWhqUpyu5SbPvU8mrP2JtrCxH6iKVhuqLQvbSMYohtFXJt7u1irqMyv26bb",
  "key23": "351YSec5dbM4B25zATxF9uCd5LQeapVtdAFRamycLCs7wUnbc8T7bJnX3cFn2uv2h2KiLLAbENVgAD3u2y2QJ7Gj",
  "key24": "3fVg2LxcdnePFBTcdwVSvoWUrNkJj6a6dvZiLQy8XsdvK5dV6S2sgsNuyDTKM4LwYHoRFU3TBoodDuBDSsfxpAz2",
  "key25": "HaH6jcSodCvZcnhpe9k173danvTbTQf1ERjdCy9kpzrHUzs1ntpzp6pfcewCiutyTc5cZaFDbH1u3ySNSAMBo5b",
  "key26": "4pbbr8Puw24dG5MCd314BYHYmTsfBTbKX7Gq2uqptw6WVVifY3ScKrMuB5vTEvb522WEgegyPVoPgJcVFqCbH2Le",
  "key27": "3TrdfmJ5kfhLJnQTdji3XQoeCogTHFiQ15ME61PS62erCiqRXxbiiKRHqayysz6kgepaLixoikgPpC6jUpcgc8CM",
  "key28": "5znXRwU3xmzGksjxVGwb2pr1jsU6duggY3D1z59nZA5M5x6QaCRKGt9Zc6e88nPazPV5UT1hF22fDAioCR4WpSfP",
  "key29": "YBgvaRCQpnLCrFr8Nc9mU7ENzPuHnKhJCb5PNDYERpj2mx1qSMdHYMkNbxAJTgdvvGVA6w7CLqNCWhfTrCNJBXa",
  "key30": "3Efxrr31KXStd8S8dM1sbHjJWqjSZEwwGV8SDkCsGCmQBzMa7AZty9jeoM64tpryKUnf5p15cDSZStzf22hrQttj",
  "key31": "3rpAwmEo8MNyTsR1yJHj4USFdVYmRgbCBLDcABZGJZtd5ZiNFr1q2hQ2L8RfE5brU6ELvZ54n9WpEX3ggfi144zx",
  "key32": "56Gw8zyvMxRXTE8VUGafMs6sfNGoF2Toa5kneHFznbA85Afv1G9ETsyqECoiPsWHMEQBA9UpPstneQ9a52sTy1y8"
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
