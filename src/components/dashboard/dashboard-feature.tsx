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
    "5xKAM2MNz6MnYD5GiPMDo3JnESbh7ZTzzRbCmc73ud5FpB6SbpkDEnKiUvHurG73vNLCSRKWZ7ADghQkroPGDSDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sCVM1fBiXYTDTAhXt2cigNEXqnqMjJQCifLNritD7vo21uLmfem76Jdn5MfHPZGtCVrTc7ATGneDa35FvcQkc6i",
  "key1": "5ZaBRo8ik2MhXBWFWY3gYp16ET8gZja2xtfVA5E9WST53dxGS2Nd3NA46HyyC75Q4PjdRN6kSXP29DqHjkjMVWCT",
  "key2": "431PqoVsyQLrvVDdAn9gqs449cXDaBoxtvdSRCQmgMirSHEaV87AgNUQaGQbcFmuqjs8gG1vD8ULERD6xjHS9KQe",
  "key3": "wsq1S5hjTFSffUmpW53v1XSRjcZH9jpMDQxVM9vScJBfFkFyuUqjmhmbegmTgdbL1v1m5QiRQdNoqY8Y7D8g7vD",
  "key4": "4P9uTiSL59eU8GK86j6WWhng1CxHsLpRNZMw3TzwaGGF1wycAF8zMVVYHNcLUp42UyvFQUAPcER6egrMfdu318g7",
  "key5": "njWE5JxR8UdcxhMjP3FWYH9ropV4zj5PQDzUdDjhkdcLgeD9TwMNWS91NsaYd8UoGg1mt3e2G8QimiPosMxB3Ms",
  "key6": "5BdtKSg9BnmWnDE9DzrC3hVZpQ2w8oGF5vmUTmfsZaj3KrvGGW8nhrEkSnx4EArrw9BQgFvCaMxFcXkbUfjmKV4B",
  "key7": "2gzAS88QhoydAaxem1c4VfEBNeNWT8TD6SDfqTVh1hvts3okWBscepzg1JRwKyYTSwE83Wn2YW5UGXrwXT8q9iST",
  "key8": "3jZKsHXbY9BwK2XPk7wdh7RsQFgHkz24KCxRjTv4farXVmMLopefLBLzeqwRj6WUzNBbVWEFeSrpLH48yqWzTpD6",
  "key9": "RpApyMMbPfq4tRPfhYvTaaUKaH1h17ydPntEbx2fBaNdx6efE9fw9fyx7ApGGASb1vBHW8XzuXD21Zve7PVwFSy",
  "key10": "3ztY8n9yAWx7pKKpgrcw8MRuk84KWhdbVMRjVEppSExQA5p8Uiif4BtSbRE7Lcxqp3vu2M3npznWX3eGUoJg5H93",
  "key11": "58zzwQatqfjKahWcbL7Ka39Dfu7225GHbyMCTEpKUcXwxihg8jkCUbH2QZDq9omCULKS2QAr6gjr3ainip2eiKxf",
  "key12": "2T7tUPn3RAC5NyMqp8QsxYekPcUtMYzb9vj2zXUnoohBbVCvZTpZ1Y2DuDwDmanexepYUfF2BdU78XaHJTPn26Qg",
  "key13": "ZaCsnAMA2KQXQvc9ZTFxTqDHNeh7KTKThDHFptbgnzvQ5bZCDvpfXQ7hSHejmzMLTKNM9REHx9a3Vzmyg9pYKRq",
  "key14": "57JDWpfwR96c7mrgkwjyLQLVZjfojD4YoYoo6x6eToGaDtV74EKSJj133pBVFwg2cM8fioeq6MeucAW1ZdGPNc1w",
  "key15": "3ay4vFAqYToNySxPxcQ63kFRtkYynsz7CiSMRiiRBxFWGmuSB2uxx3i9YHhFbH9wRFW1dm4KHhN4Zcv9oSb6Cr7c",
  "key16": "3zGSeedTiRTX4DRrNYz2TTgu6jr5DDEwAWoiAtWQHsQL2fUoVLVkWs3Nz6PEaqZmRFts1eZM4hfQPNgcuBKSf91g",
  "key17": "2Az4NYgedgVkZnS4t2fTSVeH1GqTQhyasHCfX4Vjd7vxZswzFLjdxeXEes2eQSYmVu6FNYdru3FHoNt6AvYvzasR",
  "key18": "4nKKXDQXtNmn9GZ4mbAw5FqY9PpoLDrzXD6fmn2kLHzeVPqKiTi4p18SKupvgiTFXPb45xRPMiBAYkCsMwJCNPSQ",
  "key19": "4RbRBaDMD1sjX3sJCxgKzhrGsTfCvRncC7sS2YgWHC8r6e9nmBjwy5B77um1RVxHqHHLwzSLwZu2XFv1SNAPKqpB",
  "key20": "2fkDyZUcPRtyLbAoMtig2twmEESJtVAFwm7PXE6zoLvXkJ8D8p59zcFsC77hzX2vAp5h74hfvVasTwpCurR6KQMS",
  "key21": "4mxSvhpHga36WQbDe8iA1Zt9TzW2SHDdw1ksHnge6zNmb1YAnTXYZuWFPRfMFMbFxrAdrzhZL3m9icC5qV6KXhC5",
  "key22": "4kHENpPnTykGmSuQ5dRNfXs42RsZ5jXhdjYAyCbkPNQb4gSDVd4Bsnh1tW3YL55hZXsEcKWbBvLVU4TwBdcYHgi6",
  "key23": "YYTJrwQVHBXC3JNoigALQis5CrEdfhuJ9gozwYYDWm7z6dccK81iMkwX5aBu5b5pwFLCHy1fqyhwpBzfUhvjCny",
  "key24": "2MwXwNWGE34cBM8vHVp89oiix6P3WDJYVvffbzRvTXaicLGLCeCuRBbAW7PbFpfRRtUciiH1j6y3xM3UgjDWfnQT",
  "key25": "2oyEewDhxMpxSunc5D6FA4f2NTgdajrm8Yy5XtXNNHWovEy4q3MvsgQFTyc2jHNQUTomewGdskMC8V54GgNLXeNo",
  "key26": "tmQ5KnVVPkCewAwUW4ZivPF9bqo4aHcmr6RYr1E6zrRnrbqh5QcDYQAkQhXB2beZhMDEAYq2UG87B3NWmGrWNXz"
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
