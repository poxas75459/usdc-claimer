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
    "29v7U22bMZ2WVmoQvUgPNriEx5pCpeixJJXp6iAztqabYsjkE8FZSEDrhdDNZWdNFngQr7h96YrsjB56SnZXUWy5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XGQAsVNFdwhWhv3sTr5drwsk3HEnPKuiPq1uq5wNaMvi1tMkFgWKFcGMP23nZ3ZbrmmT6H7729sTSvspKXJ1PS3",
  "key1": "4S451p8FbksbAga1VG1AV22CD6uBY4dEGrrRzUGjUdyH8YEjuCtkS5wiAMkTeR7CKQc9AebA3TNfZbwrm9xy4PX5",
  "key2": "4Rbhdyti4WaRB7TzDzzNUnPLKcGh3UVCoNmcajEV5DGgpJUWoh1g2oojD8A1KccD4JYszNpZrn73eEgZ9QzrDnbE",
  "key3": "3wUAE5r2dZNo7pJGAMpzTaH86rFs8kf2QS4cjQVihCSLNoonmN5PUeyzXM2AeNqNBzB6i2gbSM9yGEpZejQ3XT5Q",
  "key4": "32xedupJunDKq8P432w5JMDxitTzDy4snfmPtjwMrUXS7FWgk44iNfaKeirXsopvKBFZXU2oY3iQq5vnT3nwZ8a7",
  "key5": "4BB7HXyzncRzqXXfv9eFphTTQM1euZZxH5eFq8asYSpeeuGCF1d2xr7jTGDu4rJYdn6mBC3M4jEDPByPRiEPtCT5",
  "key6": "2ybMTEFPRxsQriChRUi9NWCE1A4GWECNVJoNdAbLifk119Vdbrdkgz4zhaCC4xEJn2NygAg11Sge5hzajT84T13h",
  "key7": "2NU34stUdVhdq3CT1C9LcyWLhgsDF19CVH1iJkBbGKq48XDUfzirSYVyG77NyLbAzed9PMksgwP6bsni68qc1wd",
  "key8": "2jMhBsbD8XjRbqBCx8jturGSjoPxoKJas9iXUJNz9te2uMA1LFevgoThGZjQnMWLeW295qbByyPn8A3o2jzAovX4",
  "key9": "2iRAfX38xQErHM35EtURextVdA4CYcDPEm3SQprjfvjd8YdmdA6qvvxMTM66bQP26qSY3ivWfnTwx2nWU74r5z7a",
  "key10": "AiMM1MZsnXXsfjySaBgxN4RW27NHLAhLeQDcNNqehRZ3j8Wr4DxJcUMZJD8fJo6u1zMQGdEiJJbkzPrvMShmxgd",
  "key11": "cYvxCtxvkJy8ch3vo4Q5PexDB3amA1e9YMQ8bZNQ18wubGwsEZUc6JyixtGhLrnSS5HHbNCoNoN1pWfZPbhaLx8",
  "key12": "2EYdPdtacgYJfoZuD1xUHPwbksnaNu4PoPdVwXeAbGJJRdtqs8WguFXmsWq4k4YGabWi64ZcqYVZYNswJSi1qape",
  "key13": "4PoYwG6oy73kNuX2CTzqhcxpfbMkFW4phNucy3mDH6LJj8ySsdURnWZXyS95jfgdPUFFMZrMK3bLgNhNViX8JZeM",
  "key14": "43aAjRqVsF46UsDHHMC98iovJ63m6kQja9HXFsAymUs4WWhXrU3WmHKuTibx9xF2RcPddtgmKjC8yNhEZWDxtLiW",
  "key15": "JhChwmFcV2mrBwZuiRx8Qp7CTChbLUXjSwxQbwHqtoopy9QXbTWKPbpLbwBoGVxg9yUUdRLvCLBUhZxG9tv1kq9",
  "key16": "63bSVpQ2n64jeskbk84AVLXW8Upsy34v1au6TTwgK9cStkNreqT8qDhUU6U7dwVy6k4gbjDaQsCFHnwq8WRyp8xS",
  "key17": "5bem9QLGhryMaRYnyMT1ykze6rKai5sRVp6Jkz4uMurgAUpLVwnAWCMN8Z5vquWEkKP5BkTQBRi9HcqKMZYniGAW",
  "key18": "2DQszFBsJ24D71MxWMdkNLpnEFavGVGdHterRQAFEmQahqTEauNah2LGii8pf1jbEUrs8gNnJ4Mq2KJBaa6U4PDK",
  "key19": "5j39z8o5c645TZK89FgtDT8tzjKNghYV3Ksmpth61L21nxo8zT1yKhGQizpkwwWfiUVtd2Wv1KfsQhuDCjZSCGaW",
  "key20": "5pqzFXX5HxUpvKpSwUffVebojHBjnYgQYgmYgd13v8CJvqxCRBYCgR2Z9kgw7XgpnfsZ2eEjjzyhvnduNvjqXson",
  "key21": "4Gy3wB82P4dQ67dRcLAR9Mx3A3D5fX6GK3uyKgrYyeBcarb7cFY6By43oqhy2nJ998ZyUHVhBhbCe7n9ovhV1v1C",
  "key22": "5XVWE98j5bQKm1ZX5njinscBg2j7bLMjkz7zQ7xD23RZBuhSYDj2zKeTLrVHYNwjMe1aBCTyse7abbhDSB3vTzQK",
  "key23": "3oNX6FP8rhC2FykUNXhsiTmSNCnPr9NPCBwX9ECHkMFu5eAqxGfjUJsHsm7Tr5V4B2Y531ZQybTcfzNh8LKyNRXX",
  "key24": "5zLwF9ezQbAnrDJjcQuDFeP3siTyLQmDZ5YEBx8Qc7uP17PK32hbvcFNWvGGC6FxhcYuU3oAe2eFnFTK5jP5MdDT",
  "key25": "mC74M1s4fJvUpaiBSeW2tnPzS8kqvHUkziqM7L3Gp81XLdmjrgyK4ZcLqRVbMGvhY1UFUdxXjPdRtrzHoHuPqDc",
  "key26": "67raLC9dP8NUmB8k59YaMiaQPk8NWaQ2ReygwUNEPQrZZKvuXqVx3srhanEE5dEwe2woxKstUUs53YvpynLvffHQ",
  "key27": "3ZkJbSUJC1fe7jWXM1dFJvCzYfLkfWuTT4VyCfrtkFYypfLo1RGe2R9mLT1BXsCMSZqhTse1JqijDNSDE1iUSSVa",
  "key28": "36NHBSF6qKtdGMJoNgGGDZjERPZ8r6b3Hpn4qCiU6L9bBT11w62ncZKZgiMnnQTyHwpJepbWqanVh314jz2VC1eo"
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
