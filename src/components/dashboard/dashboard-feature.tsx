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
    "5zsvydjVKjXdSrv4ktdEQT93qjzYkvG2Kv1yQ2h6TfyuHSUnKA4zfkZkbuyR4cgx6rqtnggoYRZKmhg3sA4VQgmz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24wXmXsAHzK9HhhW8PfELnoke4rqAqcekf7iBrxPNq9fYEvXFce22VmSkR18QpDgGhtENCES7zY4fF9TfMbj9tLs",
  "key1": "4VsutVSRv1ikb3EBQyD3Rfbb9fDbGujdaGk1FomGjMmwVUHRATWV1E2EccoE7GgBEZ1xCdBKSVedpwhUsW2bGpuJ",
  "key2": "Xv25VKyJsDV35tkScRHrmwEmK8nbQApeeDmEPZ3AVYbWbnQXatAUNozwBeWXDEbywjZPzbh3KcDBtNUfqqRk8nE",
  "key3": "3Mr4rWAcD4NBTdxvjgSUsv28XV6CZA61vbthvLSuVRx2H1PbndbatDMme2cjTwQeFd1CamqDyv6MD9PxRab9sFHM",
  "key4": "28zHBJWTAFbX5jDoftA1JS5ww6sYbURdzqqhCQeLxzAtegCB7WNeSCewtCdmZe2dj5JRH7wMkfGYWjKfEBpjutMo",
  "key5": "n3VCGRhNhG1aU3aMDBGAqLXXCSnccY3vWCmgUf6m2upg5uiUAerLDCjsCRfXTQiEsHE74tWCSZnQsKZJjqFqUtJ",
  "key6": "2MBiMHCmxBgwqshrFyc374UsTfu2g4y932aWXqWPfBHGYsCszrdxneduxjp3Ydxsomv6Qr7YC2LwbmPRYpyaQUiq",
  "key7": "4Rcxs6bAV8zfV1g23GrzMCBhsjeGnKFHcVhSrGpyf94CmaLoXzKYuoVWAgaS344a6KfXwRgf2GNA7PpnkEc3iuPU",
  "key8": "2TwnWhRBEuo1RGfLD4GGszZopKJLZzy7BXoVuej6w7evPR17QaKRMdVie9iqmPUTya5U9dhwZWDCMRgx2pRNmeyR",
  "key9": "24c1fgjpzfb58HKPNN4e9z7ZSCpWrf8KHEEZr6e7osSddT4aJKykBUcP9jj2jQvQuxJkoN6LQbF6QJsvEm9uHNr2",
  "key10": "4fPMARHNpVGbtxD496W5qKxft2V7gXe5N3JdYMDY6v8ee5qRUbHrdUgNrS7BVPfPZVA9gueT1QCJ8vpRXVbY5Jrb",
  "key11": "2Vv1DhyynmeHm7bTX2HLbJ2GusR4F5cVM93sDh3m8YqRboySez7PHpuqGkTnh6kxFBN5b88JVH3yZB9xKTkpk2Dz",
  "key12": "5XhJMnAjBBkMJU4b2xCo4wychyiEmzCNsf5EGpcyu8qcReYU12bJNA6sLxLtputA6dwiDqrsxkh1U11PehaK79Cs",
  "key13": "4W61hedr58rmn12DHwtLAJbPMedySBvByz7G9evitdb8UkF5pEHs4J4CCSHkBkcmnAMqTwQa2HGgfVeC5GcWeBHN",
  "key14": "4YpWpxNAxHWforix4uqtD1koe2x6RoGaPHWzgARNnqDGQRwSgDsLVe9WAQqEifxPAAa4Ho2KV4vpwodYaE2i5cDc",
  "key15": "2GtCMhKbATDvnGh6JQD1t82eSm28ppdjsUtVNDNF6F7NMra8mDVUjhWoon5ABEtUNagpGW3Wjdk2svw7FXKgQuj2",
  "key16": "2tFntCkP2gVZpkPw4gTPdJrhH36xNsKDxaLz96QFmB8NNib41vQAE5KxB8FegKcXF7CnUfE85gueVuqVV8icDjRG",
  "key17": "bLAga5M881bq8XUkmX6HUeW3SU77KpTS4oKznRKEECYTVZUKGxxwnxAF7cuKEJvnqR1cnkT6LE3LX3AVFb39Ejj",
  "key18": "5S873ETG4rrqnwJ2tuV2wuS9EvntdyhKDpEchxECdR1adhiET3z2q6fU1x27KwkqJrnF3eHoL3L3mDNAG1UHe81U",
  "key19": "3dQFLSQFonDzdkt5FDkVgyprLSP74gWGG5a3X4HK63PnMJK5oLAyUS69LucQ6oxUZBYYWbtjR3iTdCB9xeC2tKWB",
  "key20": "5hXP7ckQtW9stmZF2MfFN1yCykbQL43Pei54m2mmJUUX1TAgXPvtZZVSy2LGK12hwGcWkZCrwzRwKtMAdn9K9s4t",
  "key21": "2JzaAZA5dSe5sgY64TZesjiUKZpzvSnTiJwSmy432Q9erwZChRL1Z7TNg6jNg7eTMRxPZ5M9S4gqkTCWmMU9h3u2",
  "key22": "3WxR4Cy9HdJZ7EtYajCg361HDqD2aiedMd8gTP6eF9qdnP4bJUHVz5YxvGPWZi7hD3LY8zU8u4dMdC5ZVYdEMtVQ",
  "key23": "5QfXPwqBrfmi7M6oZ7uLTUoQvrHiwnMhPFgJYLPLREq54F98mR4tFFYKW8soS3YzCjTHtarHpCTTAnKTQaWyspbg",
  "key24": "5b6ir928DANt3mgnz7biTMrnfhMU4t6VUWFHSyv7MSH3223go73kCcvNQDmk79joWiPKD1FHZkytGGGUUEFVPd81",
  "key25": "4d1FVJRfQfLektUhN2d2TfJmEweyeeokXMzzW7BWSCpH9XHwXGD39kmEYjURrp8Zzj9Uh67T8uM77fqaoU9xLuES",
  "key26": "G2FF5QLgYjFZr7kVpF8znes9nUkCq9L3SruiT63uMMRnLCGAbthvrMUtShNT9vuFiG6P6Ervn2YCmTtXHqaYDWn",
  "key27": "5WquWNU7KReu6qaYxjSisRTycHGTUnKu4A97wP16JsibSxYn65Z5TWj6syKLe9PBJ3YP4YChSMLFGwzTs6YDsnpQ",
  "key28": "sPoAc7ekiuzjwJC2DhSckJxNjfWfUQX3eVfJLU8MRzXNQhU7gJeDKVs1bakUW4gFynHRDFpQTF2cDJzd8KfWMoG",
  "key29": "2eNwWNGUUcRxh8yToXp8Wzn2t5M8K5nhc4CviJx9boY9PUQyoaTKzEVi89HRLBMHB61B2W9hsxn43UUBZmRsr1HJ",
  "key30": "3xTVJBbhYba89TNPBFb65bsUYzzXE8NiCyJCVrPpmaDgziKx1gPad9rQFnvSMQeLJQksYC5UzN8Czif9oQboVukZ",
  "key31": "2hijyKxwSmoubEe1SHbSnLSo1J1VbpjB1iFEHCqvVLJELSbWiX8tNG1qxfmcydcNwiB9vrDcsgHJPEduYKj3Ucy1"
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
