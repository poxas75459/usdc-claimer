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
    "qxBQ39jEvna7Nyv75WLQNc6ty7sffnuW1P84fVjw3nuGgAhsz39qCUpjiPnjiRYS4g8L2nh19xsSpHWZL4BxQZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B5GU9L2rQH2NbX6DSPeNsWd3wwRozsbNopDYRPqJGJ6ZYPFkNyqktvd5K6y1dECZhmNVaUR857h5STUNPWhLLvP",
  "key1": "3KdDAHWEhp1kn9i3zmBJszzxYTZejqncz7Kb9q8hqs4u4mCkHP5XgZ2c9tBpV25pg33D4GLVkHiFmtYqE9dYAsFu",
  "key2": "4cRrsdFgezaa7qTBS5eq9JrkoDVBE2SknZVRdiUkP4WFSc91WtoZa4KfsSRBQsTBCqa5rHKw7BE6NfLx8qXoTjNn",
  "key3": "ZmDis7Amyv9irUsPPbNVtw1fZYovScF7gB7hPo8WaxgHv9V9rNrfaVLPPN1pumFTVDQPsYChVCiFybyKKPACeLx",
  "key4": "5Fw1bSmzAZb76dtkkCgmtWT5wLNYnKoQLv8m5LYazTVsEDKLBmdeewGdLy3e9x45veVqGWohuXDsA1ddBB4n2zCJ",
  "key5": "2hZSsPgo8phAsVMizLJ1eku8LJYYiJZF7uatxMUJzYpwezDiw6jFkQCZ5RTsemVxDQWuePmzm8R2rBnU8BFurwMs",
  "key6": "5DSepsVoLG156d6xojoMmW97eFtZLuEiPAaisb24Cuf4FHgonK8nRndj7eK3shrbgMpeNVQuhAaniXYA1eWwQbbd",
  "key7": "44c8pKtRaz2VTZXMzSYUqUseNbJcuxegsRdBQwtFXPmxL7SN973PNfETjmvRELoK9xmi5Kumj3t279ufKkgLAsYx",
  "key8": "621hWCeFwp5Mps6nhRWZURqtfWka98vzUasMVmgphkPjc2wk4KCJh9k9gqzkQC5awVP96nPM3QVKUhQ2hzkvT8Ni",
  "key9": "5c4yVLcvEuXFpPCw6b7v7aWqsu8PHZyMeqyMzwMw1GAHZXY18tARiM3huKsQKNQnmuHQy2pKKvgp1ooMkAPjWFp7",
  "key10": "5Zw8rqyLnqe5sijLmd2X5yxEHNZ9AbGKhqgB53YZrDKBSq5iZk8ektXWxnX9L1H2AKs39wMi7ag9jLpSCNQBrenx",
  "key11": "4eZd7qhrC4mZuj9hZeZjYJi6YbpPBsgdGMqBQXXoVrQqqdZBVxKXQw3CfK7QMXbacDn2HLx4hWAo4zgkF4osEddy",
  "key12": "5YX7iaAKXP4rMbodj9FQenfFjYYowtLGqz4KLhVZpqBHrpb4ugRnaRsGdTUQMGww7zApfhJSYAsPUEwtSJACWNpb",
  "key13": "4HEcnKsXEnGBxyXBiYtFwxqHTVBzUio8n1AVT15P7kg9mE8k1KZpdVpKx4F4VEHvnvbpjRpaf35QcRYc83CWZvCj",
  "key14": "4vHDVRKDQd1YyHEWuqagAea8T8FFexGHV2wEj8yVC7wRS1BCvdg39YN475mddq1mefhbAMPns9eSVq9NzgNyWN62",
  "key15": "3j5kQaAaf53oJPHZnX5TgWNKF5RmBN9s3iKjEEuRFVqMpQw3RHUx7BwdwRVh7wihqtyEsf1zZWwtKm2FA49zXxgn",
  "key16": "pdnwtkJcgQyjj2ArmWnhsie1xL4ustkjcEYKQ6qAzMvzAJm4XAYXMoRt8aiZYaVrcJzeBEQnYWUWhGibkNQvYZP",
  "key17": "2FR6hQEHwTMd5V8CmW9HMSsXvtB9AVTujrb4AaPBgenmdmZcqY4KemKA6W7fpXpp4CaUAEqAJWEXzfdcce7etxYQ",
  "key18": "S4SLaYq3dqGn359BYDBP59ALH1RafZEoMq9aGByZVLt4Ws47boUjZkAs6ymuscFaFS3m8TKAJzGt8YwvkZChpWh",
  "key19": "a3AwKg6fCzWdDem6S4eDxkJqQ3GWFsL3H2tuzhMxAXtAH7HQpJuK6LCro6916U57agF2VJhGxdx67kNeWiYFMi1",
  "key20": "2ua2g85Xi7nYMSQBP3cvMXA13QhK88hb7wCaz4zBNSgEkH63p8cicCEy6eFhiLvct3C59GhUKy6v9KQCf9fUmi9K",
  "key21": "2y3bhRsM8KPR9Y4mbnqjrq2dda1yAU1HmU8VENauL5FT9XQxrFZSgHH4KdVKUb8YYzXV73bmMoQMREMtseBStGhL",
  "key22": "4AnnqeFd5NgRjzHjZp8fuv2fJt7JtrbDsYvpY3wJMa1dxGRVrkznv9mBuc6sRK6RskQhGjkoqQdF1EW9mhTp8N2z",
  "key23": "2dbhtBZUfEfWeaFb5cTBwwDtetRwLebjmVHYVZ6RVRDjjudbxfojraont8jP8vhC82kF4GrE2XbdkuqfK6qd6EWY",
  "key24": "23rF8yfPtZuAdbt4phfiFfVqPbkwSWGHh1Fcvk1bvJaa9WhiNcBbD4kYJENUEnDKvschaCSLSAGEasMiWH4unMGM",
  "key25": "4cuGvJdwDRgd1Mx6FcK7frc3n2XQPo4C4VnBeKVMiTaGNZiiSvji1mtNYmyb55FzS6QnmuGCYGvFQLCDzdWtRKUp",
  "key26": "3FQci4KVd8grg7zsXV1pi2og4o43k2GVa5KsJJ1mW6K8PVbHKkx9Bexa3NzfwnFFBBbvrg8q5tQ2tLgZzvgq3QSU",
  "key27": "2taZkHQC4675Pv74jxEZaMBLTcuUWvkYELf36NVjkuiGz7kNSiP2ByfGwuvue8Hp9Gdf4A2eSwEm3uXrZftSZ4GM",
  "key28": "2Dfgcs1TPGhBWrchU85ercPqFuDovXnPewdupcqqeDxTodJ9yDxDwGxEgQ7iekd97GUYR8REgvRBqUKN371ZyUMW",
  "key29": "53MhZh84UZSstSMu3DkxR8fUnkxUP67jdhLbkMwute7YTZs48fydB6u1hqDxhqaavKz7cZBJ7fPqhm4FpNhB4L1L",
  "key30": "3FBz5wqsSomhb9HAyb5m8eHSn2PojWt332xf4e4xb4aJGTWeGFxcCgi2LBCBhXEhMAU5KL5nQ6CYNMaFiZ8nyRAj",
  "key31": "4Kvti1fQkzg2CzxJxVmXpFSUoxdFzk3b9giS6HqBFRxGHozzDASk81BwoQCBn66d7qmPGewEQCPhvYhi3Y6M3ro8",
  "key32": "1h4Uz2PNas3fqiTKLpY8WKMzaZdKsJXWosBZAqEbncdnyBfBpr5fnDfpUJywoc7uQeeLdPvThNqF4Kg9QyXqFnL"
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
