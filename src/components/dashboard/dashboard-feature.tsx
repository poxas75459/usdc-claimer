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
    "4175xShLJyaTUfv5yTJWBLoMoCdvKw85TpqpEBjUsmDJDVHrDHpDHiVnrzqkSpUMFm6E9PngQD3pYmiH78Phffrg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2szihyoBFRFD9fxfSRuvnJYRFj49TvHgcUaezPiLJnPQhR1vSMyN8PZtP67YQW9KSe9VT4KQHcJokerjGDnQABpV",
  "key1": "2FJBKcvCwKKiCEf8NjnKGT8zzWWanBQ6VNX7X3emDDbxWLNmkkjPU7VmmySak7vjweGAxQbSj9Tsw6qWmtY9CLT3",
  "key2": "39ou35cQJPerkism2cHZeEQvrbuwzYisJckG5qWmRTk62KTNBE22coaGnuGwiXnsoDfegPfq9WVi8orRvM2v9kUm",
  "key3": "4oqDKrFEbRd3C6eSmxYMR5syoreryJmmKvwMrcJKFa3dzvhe9TSLYtUrN3cE6VS9G5axZDRhZ6BR34KfME7Uxg1h",
  "key4": "2avQwxhq9iMyYHLNRUYSSEMF32cdzszyVRajQN9B2KJR4gcnwvRXcsBHRPSrqHNEWjGW5L7M58kYoyZJjTH87xJR",
  "key5": "2F49zoi3pB6YmP3LKqLsknSLod7AuBZ9uihmGoUhBHSfXkRYSha7tK9tASiJqP72zGUt5FcbjEDnNuQD4voBBKL5",
  "key6": "5iDPsFYA4P6vJMjKmpKXrHtk2ziVurJXufiACvg1J2R9bNaaQ6FwzYY2L34mmPMJi7AFMQgz7UCw5nvwqxkSYFLy",
  "key7": "4si3MtrXhGRaPAqwbiBGQuUbte6a2K1Q28A91hHxJSJN5KW8DCG7NtySPrVAsbfEoKxuZMYcKWV56xLbS7Pjfpev",
  "key8": "5pRCzGU9KgurjHqP3ELZhhJLnvp4wnKZoY2y5JxcLyqi4VmDHKmgV3pyMFx4qVbS1D87ZaWwHH245X2pMSSEbNWT",
  "key9": "3kpevRTKzyaXhphpXC6Vc4bDrx6hSPUdmgUNk5Ztd8C1Ljj62tZxzKXbFew6mdPLjACXCnkUbasbFWFcTBY79W4d",
  "key10": "3AYc8eiTmxpsGzgEWahzgSRhZyBxJhNZ5UBfwfo3SC1K8Dm1Jzm8oHBtQGF1o3Pk7c1ryvDHQkiAtfTCrrJ6psro",
  "key11": "5ddQ4bLr2jKwh1rBVHKG7tm2kUTGVEyJNbrkzdRCLrJpkhyDKeZUHxWWsRjX9328FBXLfJKa175aM4SDCDrRB1G5",
  "key12": "3poa3gub7yB38zqQQvHzLRHNy96mrVotW4U76ZMZzmDYzCLSn22vDGpvk5MEEHTrBY1D18JTcWZdEQe3j71zTyNX",
  "key13": "3DHiAfmbyAQ1NHrDmCEVGMyP37tfhpc1LuwJpKggcAY31MWgcsgiggMMAkvxncXAxSM7eysgzdeJm1TBbLXeVHM1",
  "key14": "T2cDLK5FEkxorW5DZftXQyn5v64emkD2hc7FQoatA4a9sRX7Tim5xe7JtXicoU2i5Hot7ZMdSZyE63CXCaD6PWv",
  "key15": "VBDXpTuGS1qugnDbtE1RfNMrWKs3zWb4Sd5vWpCC3b9zbFZVfjqz6thzpM6UWoE2aW9jCECY8AcaMbQoXVRFG7T",
  "key16": "RCiR7uXQNEPXeVsi5vfA6NLZbz4ghoCm7YSA3S3SsUspoqhbNfkh6mFeFwozxUseMGeczqZLH5XssV6h6WeBeBu",
  "key17": "4Jda8p16Wobb3KG9LhZx29wJFHecYQMKsmoKhDG2Y9oc78g5jm8aCyLpMcqBTQL7m2GfQRVcMAMXUZVQyLmrvKKc",
  "key18": "3LKEfYPCsWjQoWrBHY98VRhE41pXABmwJACkjeEqF9TE6h6AJJ7GCDGYiqv1YpAjbQbUU7oJNBfBMCgKk1tnFy9d",
  "key19": "2ztteV5Q6V9T2EB9RYWAbY2SugBUSB2X2qYuwGknrHFQTaJKbnL2Z1EdkfCfrgb5PrdroLrogjz4wuXpi5mHs4xL",
  "key20": "5kEHYGGabjpJBrFr1uxW8mvCkvZaRLJhJ4HiZc7EsMkFPTy3o9kF57p5pXFhuhL1RMFCC8xxhpMP6EQYjZ9aPQFv",
  "key21": "suKqFK1ZNas5yavkeWhe2CMu1hhP8d2XWHXGdyFQkM5oqt9ce4nQZ8nCF6EELbCLv6QBPazshCmv2codaEevHFd",
  "key22": "2R7NXZzWVcS6JAbGGECxmtzs4fNMRJD4B3MhGAmcsxVXUem2XWqdoWmiVibDZFKECTreDaiNCkodRGfmkZXAmcVC",
  "key23": "RRRvXhxxQStewHnHc1VNH3LhuJzC4bVC8nohVwwpJfAzkg4m46N4FQLtAzFgCHR8BHn9H2bjRPF426k7oB6QpU1",
  "key24": "2d5Fg515F9CM75VsZ1cWnqtEFam9gT28A3z1BTkfhB96rNAZGaqtPGGjKUj1vhCNAoaQGQu6tgbqzW5jP6PvcNMu",
  "key25": "3jCuujmgaVkuoqxbnKXokjVVMhzk9CRjfb29dEpKkbCQFfjeCNiHGqTMox9y76QexcUAcuvmByDnsvNZUa3ckzbP",
  "key26": "5kwv19KpXhoHp3KFNET7aEVsoegku4cXM4wpyXTLXvjWMfABEpT7ZGBxjoQoWnk37ND5CweYasWXjzQhisf8ABZc",
  "key27": "Jt2J1ZCfdKbug4y7jzaTYkeVUaRRhwc6gUkX4vC492ybf34us2qbxHhBVmCCUeQJWwc1ECRFuZPaZ3Fmb9h6dnk",
  "key28": "4AxYt4tRAEXrpYiSfFKcH4T7k8LrWgKKk3dxks8DjkbosSUpnQ7763uT3Na3YBTtuyWBgZ8LVz26No86hAkv1V6B",
  "key29": "2Tc9iXnstFL5o9XmJ5Yucou3PbKPZkn3sVEbsb7KzYFUASZyPx6iRoSaEtVBi59RxhrWDxVwvQyXyo2qzeSWc7aH"
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
