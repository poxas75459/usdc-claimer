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
    "2iTa59ZMeDCf8zjsN92tRPod44g6WWgBZuh6vYH6P5uT4w6Php6ByHfe1FcTa21NKD7cKbxmC2Wb54mBeJXSGdQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "322tgEKQ1AgQMMdB7YZGq8rFW1MC4C39kmgmxwdfWCY4JbGtkXKuoyy11EDC6jDGEPiYcmLZPrFAyVRbdEF8Csrp",
  "key1": "3ULPkeJJBQkip8DzbUsYdWoY7VnunELAuV37veSWA6Zavj4dKCiPZ8tfmBKPbkzQj5BGnSQK773Qvcu9qZHXPufA",
  "key2": "YeTH72fwgk7kSr5ygXGxo5kTQfbDZpemMbNzt7UM5YbnK6Tbqji4kE9dAg89wrrSPuro9bzJUh8nwk4e2FV7cnd",
  "key3": "27zsrawjBp2rhWnYrs5ky5NhGztQQ8UiSqVYxquYi2huPYkayGWLgFfnsByQwJGkgR1eHHDuDFMWmmmGU7oA5ecd",
  "key4": "87SarTeBKTEkcDdLBUW8rr2YKMyDiQuYWdkyU8uWv8qac3pxrrnizBzKDFexkQSG7zbxKoaQ7phVrXqyLTdH3Lk",
  "key5": "UDUTmEp4Vx72ZMgskkESK2phYTgwDt7geh7vAKBrnWaQDxoexP9ge2UwuZmWEm46mdoVT4SyVj6uKXJEFdrqpG4",
  "key6": "5LYDEwprF4SHWyatRMnoA2RHsybhNxJDfcKKjpw1yX1JYHFNGdi7wnF9PosYkf3xALBkACiy5BddzuQY2zzu8nJ4",
  "key7": "PudjsvA7BTWysdf6S5bGCVosGtkgXTaidGybv6xsuZiDMTBLPBwnCVMT4X4ST1XSuKSzars29zquNwvj46FVCKF",
  "key8": "2PgEiwPYMBtm9AKQgssMqy4H51NYKTUQR32PpdMwccEFGUarcUGvFA7xrg4rRHb2eL95g261wGVMgFA17vvAr7MQ",
  "key9": "45MS4duJ6WYWeU5624Sm4vCLdFYqnFmvAWW1kKR2yY9spM8zbjvwXmvbvVrcL2ni4ouC7GD1FkQddwAd5Uo9q47z",
  "key10": "akpLwcyRmeW5udCnXnQRCxfqrZmY517s79Mht7KGiPStnGRUEEsDtPEQWuBpmQs1docT5z8Ms7JaFEWYNkmucQV",
  "key11": "nXAGWwwX3ibgawVaGP5kTv2hhCNTYDUeLX57ptvbf7qYFaWx6SUGnVfQzT7X3pjRzUN66k25Ps7cvbYiJ9vyscP",
  "key12": "HVx92aV55XkBMJAG7zVFpPpXkzVUdRy4vhxtsrSVyNUWZxeKhp5RFVSSdgmj1P22E63ssJTuowFZg6ij4NX3Tjc",
  "key13": "5jVuC7BZacHKJFPdsPfrHKQhZN6aJRQMLWSDb3wmJbkejw7pvqHzaLzgHusujuErGHWnsH8E6mUkpSc7pxMvij58",
  "key14": "3hpnq84mFxQZqyMbaWhdT9H2FxWNobiHk6J1xpoZZaveRNtNFbs2hVFrhEpXxGNiySQevo7ovrKgijBiwmm4Gwx4",
  "key15": "4zGDx1GPSZcbsMQHzKT5LbvibGCKZRZE96APeMf3sQHFJ1Va4tWZFMpsg9TGqZnc1EK4WRxxJWaR6JdkXWCXBjoJ",
  "key16": "4nGs8FLzSJPjoipBTJoiy8F5zXTuNgfGKfS2FZK28fZYoPdHU2xFwDkAnWxskLvtkpW4pVcCabVkUbK6SscVUoJL",
  "key17": "RS5WHoXfduo36S3YxSafL4uD1PKfEemDSDhHQRy5fvA6AK9jscASLSpL46MPW74RKhN77JWN48Qu2exNsbV2NPP",
  "key18": "VjEng9o6xTtafjDfeY2SpgNv2PB2dRGYTNAXhupf7guuphcxbDofXF8aZzBmkDUYGD9S2s5nnsStRXATwxa4sbG",
  "key19": "2BSGGzWPWqFdhbZ4eiCGsjH1inLTq8RCxYuq5xt4Jap3GqXTxWEfUhqLPhnsL1vGVKdutYCtmXEJVNjckDxpxp1n",
  "key20": "P4SKfj2AVH21F7hiUjuDcVr2BWHrWqieWG6A5TS85NtSQjHQ9mnYmD5UAnfwH2fTSmm6XPkLfbyREoXEvE7uvga",
  "key21": "565apcnXCki2a5vqtSB4q1hYhZXc93SzhafBnZaVGYs5F1n2pgGUWyiXXAtR2CJebFWRMUqyaz5n4zwEdmzirh9u",
  "key22": "5AjqzMibomadtBwANgikkTY7hjw3LbcWfvuYgEs3hq8VZq9CGTqnpEjd65DGGa21Z5M4Jhn27ewmnWUtcuCy3KHW",
  "key23": "2yrf4BGkR3bWH3mvmovTbjErWeZcAByomZbn2GLWLE2sn8PUPdTXWv1ic9tsXXDKcdZN65Q9YeVWXPJHrfwWWz9Z",
  "key24": "3BhV3XPa5tmXvQBpn3AUygE9Y9rWRgjWqHkbB84PL95Pk5NvsR8MMthsCvH8i8qSy2iUY8jmPDWTXBP1vP4w89wU",
  "key25": "3mfEEtpuLB6GRNMXqEPz28W7iTr1Uooez6SBKZppUc2WxQ2aoFS8r9RiafE7pmNvrgjCHdZKosjv2Ka7K3BByy5u",
  "key26": "4cEmLd9wrEpaGzoaxvqZKTRDmWPPCihZ8b8mJXSHHZRAf4qfJYyDt76ysmiFihaFNkspB7iCARGK5E2UK1bd5iHU",
  "key27": "tcQUCZDDULQubJbZEqnYYbt49h9hxxCPSV3BWRwmx2tGRLdVJms2pzrfZK6rHdG2hD41ZSh4iDU6oYhASCTT9ct",
  "key28": "4UYbsDCrntAoDQpdMgvxkRpwoJLBHRrmKFyUxMJyWQ8A98Bb9MykqBqH1sfYsbCsHQfQMpYgBWsekeNgetGFa5yx",
  "key29": "5SKU4kHZd1iaMQkhDqXSTzDvrquVmPU8tuRqRw8kvvCAZhiBWsLRJ4DopvEWxyeR6TRd2F7XFZBdDQphLQ5GFSNF",
  "key30": "32evUWrvtJY5VY5Wv6boswc2Smykc7u7YjLdxRRzHL2ZQDApyuX4w6JM1EJs6qVixV1RPPn2E8mXTHgYNKM5FfKy",
  "key31": "5HMWk9YJWiqaWGmA4CFcWHXHAFJR2t27TaZc2VfdhwmqQ27kcKqo7jYxmqSsYjsPYeu9jujZxj1tZ4qH91HQBS8L"
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
