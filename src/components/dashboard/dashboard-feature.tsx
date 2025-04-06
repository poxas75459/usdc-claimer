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
    "9hBhpT9Ncv1g7h5AcDeks5NeN169JSfbyaiwHHTibNbW1tjz8bbL8KQxuAysHnN3X4Xti8GPdSMjxvpNEX1QoAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KYuTSvNSpdW1ykvUFuTaB2QGcqSJ8nQknEYSf3M4Po5Ld78y7tRdc8rrKpq3tJwb7J1TEQ1awYn7eArumdxtk4v",
  "key1": "4MqngreMKLqd7KgPkFt6Y5TFWX1K3C8qv3UeEzApAy9Yq8rzuScvEa7ELf34UQykqaH9DTjQ3orpvKA49HaGVkRF",
  "key2": "pT6utxNynUv5ERoyeDAeC5BEb4gZFBEcDTFqX3z8xgZhg6HGKA4Z12VZc4hjqQJqsxJbd1QpuP6KZmnq1yQAUYa",
  "key3": "2NaqG4AgtKwXF6ovoXcWe1piu5TWtReQv3MUNkedXVfG8QrSLBxo2F5PogdsY2Uv8m4FaKNU1uCS1DLFXLKeRbFt",
  "key4": "3rJJyhDfpSLvEB7xR9AU4dWskgZp7nnvPjUBCHCsqkH2VFj4MUmXhM2WkqLbK4zfAvVRebRkJXZgcoFnkB4b96t7",
  "key5": "5CVCNvLu8n6oimk4KQhnQkM2dAVrSYvppZZjt8U26cZqZdzmRFA8KrZYZFhfEL8UQLfXhN25arAQgkbPGHsAifCS",
  "key6": "4dLA1yJM8qumg9hEjN8QXBmpTvM5q4tA4Kv4LtBh34Y9iDH7V6e96nwZRr54t638npafdnbxcJZ9bsdvctJCqin5",
  "key7": "2wEs7SfcpJQnVmuBW2EkA8PbhF8JcMgqQxfH1z9BTGuzPKTso2Cbc6STc8xihJEmd2HuHbgAz4tiYjxvnDw2SPPv",
  "key8": "5yMJRxw1Q2XR8xv7ar4AsuNN1p3d72QNTeyR9qFZyDky24g7tQnDSmRTe3fB5WmevmzT3PZAhvhhz1XhNeJQ4r88",
  "key9": "2PByXerKVN6UnADwNCn4NoE3JRMLCujAFC4fc6seXie6mRSvuA1UMikcUJ7jTdqvPMSxN3ntpeAc1HkqZZwmZbYY",
  "key10": "2f4CANrMxk1bewqV2FADq8KV9iwftibk9ULdR9quhdznpC8WoHfNAPr9EKLwMXAiTxQZEqGjf1NBhexJvYv1y4iy",
  "key11": "51eFRCxHvvuNTETj3YHyR2sF1LY4vpHCY2dhpQXPTixXaJnRV1m8DiPhijKjskZe4LoT1QVtcg7hJpF6hQyQTytu",
  "key12": "2BuxUu3CbqgcBNBosnJ4rHSz2zs8aVCTesqbhwmxP8K3RLAb5mRiMtL81qyq57smMr1wjG3rrdgceqtepZRAhajs",
  "key13": "53Bo7pJLc7Vm7H2mgd2dB7Q8Vydd4SDqeuf875Tus8Y7khxjFfvNPppX2KJQ2UnE2t5wdxyciZ3Mun37y6LszNcr",
  "key14": "5X4Dyh3p8MWz47C4YgtFmDb3jsvfS13hGL4niQ5NpaTPbVR3xMChGafcrygSLz1g2dzSGn2MQQWVqQtz4UaBCWS4",
  "key15": "5HAWJHaYLZaqMRBKz4fuDLufde9xF2htcsWQCVU5VTaMq8pU5V5hMqFPAApCCFUVwgRwiAkpGo3Yp2qreMvV1C9x",
  "key16": "3sQCbSTEJNurwLZbsX1brAxShuMXVTyc1VeFCPdS6PoSP4F2eocwUGka19TjUahv7hSggCFxhNsvS9j2oi6DHXRv",
  "key17": "2AqBD5UEdBfV9UF6a9Z2cmZMwC7jAz38Jg3ToUeYFypSUeW1TEM9KuUhWvVjEudnuyDNKpAyVpR6GtthSwBs1Bzq",
  "key18": "2yEmwFX4jv2s2ftNtMyA1531V7LAcBAtN6m6KCVtktH1JG4fcSQwN5Brgf3uFGeQXQginbNR3wQYBmsbF9BCoJM1",
  "key19": "63NHFGCFkqVq3wTFxHoMRnG84atXAA5DeYNcVNYx9UaazT4iA6R4f9BGcmBwkref8T2xdDGPVyHUQYv5S8Cjzamk",
  "key20": "3xkc2YGm4zeFWq3eHdL28xoAW3oeKbwqY9PpEc6rLvuWUr6o8q6yMYHiS7K8TRTCr3wzGYYLZadwt2MTkjGJxFFa",
  "key21": "4i19AtF2VgQNdJ5Eeq6MDe5Lv32m1xWiFN3knrbBsSBAgzKZPS4jkwd1fUioDRzTTqesDvHdYv278ye8HP7ozG9Q",
  "key22": "dPd9oAZhQuwohPezRYFWV9PVUx9wA8bJgwqqrwmwSCLshuC64Z8mrpKr4DZRqo4ph4icuzzXz5YnfTTvDuLRL1Z",
  "key23": "5rKzVvtWzoN5JKeyjNeHawFbiUaExFzhvCcYzLcbsbF1QoKWWe6GcR4anAshhMXtNx8LRoT5WxpyNZ4uYCfSu8Bg",
  "key24": "3HRhJVH6M2GFx25GjMXCKMX2ehooTQ5GeFEMDNk7554wSJMBTKJoV7Yj7h8NMmXWWTPQVkvyqrCj6M3yG6CiMrkk",
  "key25": "3jh8X5aFLRsW6v3Ach1WNXWM8GG968bipig1pJGdMdVCGurpuKhqBcmfsdnty8McyGGisL1SjyXqQJyRk9bwBC55",
  "key26": "miJutXKHZBybHMAD17UzEfegPKsU5xvFB73oiBAXY5vjKQhY9MPwxt7yx5XibHRseUszKeeGrGrxSCgZiQXRuC3",
  "key27": "cuw7giwxrk7Re3npaxR6aHiWGrsVoETGE34vmuiDU5vo6dPbNHBBkbzbt5DWXkjgrujkT9ajeoJYtKG3r96PbhL",
  "key28": "45YrgNoUmrhb24PYy9BPVeoiFDFFWVxS7BUirBLhzmJQyqYfeKfQt1Bbqdrq72A4gjgtj8Y9ytiZd1R2sjemJm3p",
  "key29": "4EJaFSe62myeYGTwQg7jNHa9fiYV2wrmUcnn46MuLUpYgAcJ3WePJTgYMMrdwnD9iM1s6jzCsfQ49p8gsFZqtos5",
  "key30": "TNZchU4vrrAdrZHMGKwg2fEKMtTG8CRFRTXBjcyijMexHLLCiCqmQ644ynTmKknqndVJ5wCWB7fn4YBBs59pPmi",
  "key31": "y5jQAx4RopF5JQQrSiaHmSoKqqkeRCmdiUTuAs8PyZeeeBAwc42N14nZLs3ZFfxXJn68TDsNGCzQ3sGYyuzyjJX",
  "key32": "eQvg13kHZpbPwgpx2KAYMBBwsmTxjCpZYWScWu2FmNfiLtJHboGg66BzidQnRw6wJakbpPHDZAvdpmV8arfiuH4",
  "key33": "32ckVBYEpVRxdK5SkSMs39aDcKTe1a9oiVKAiiS4nDQ51YAQkgNWjQxruQt9hanfQJiyUnJTq7Lmiu7zLN9ssCf8",
  "key34": "4WTTXSzkVKyQjhdEzfG7JkB6fR2fLb7B2DMKV423tNdXtYj71xAXnjqV88cw1R9X5w6aJKxFFKKPPGnmw9gZwrx5"
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
