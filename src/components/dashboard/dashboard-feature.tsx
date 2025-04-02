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
    "4NPkmrfg1rPs7nzDmA9VsYf9D5ip9tukp9YLT1HxkEJ52dN6BRpz2cU2Syrq5jznjXCWBHcUD1Z8szeaspaUfnCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pQ34f4ywE49jjvCRNowCgUysaMDPVqhGyHZ8QKdxcxWNYnjuxC2vWrEhYfWdiyuc3Lw94zKwvQJdADCnXZQH4xJ",
  "key1": "PkXNrSpPqwYnN2G7jP1xt39DkduWiiBVqoNb2ezsLhqiLWu4dCBXPTZmQ6P8Kovmrv4MqQYMwVzopTdcrrfnGAd",
  "key2": "4csP8i2G62n3L4jnr5sGuNK51wmioqSnoZKax3idZk5o7ueW8GAZpq9pRJSWEcEyfnFnjGNUUaikb61QKRATxH24",
  "key3": "3N4meUFR9rtzYFjewvqnPftHMK8tQHhvFGshMdyDcbbZmsm2HHL1fQ934TGhmTyRLLwAJkJ2oQFdhuZKNZcnPUv9",
  "key4": "hidRWii4mXubr3wwjcviF1PhqCnoYEgYpwHHeUMYhttBeC49jL1kVn8tpT5u9HCw8M9Mg8VUvj91KwndtKnKijc",
  "key5": "4roDkHeKkpH9AMRTayH6zdQMR2NmHQ3Kz7TraAoY6tPt3PaGMigD2FaLexVuuyktxfDTmfcy7yz8uxFu14dQ6JRi",
  "key6": "2XTYvX5PDSqYuCocNGtJzMviVYwhurj72eYSB59PLzesdjFVyWnyDQji8YzKivjNG37jHsGbZE7uMyMAhq7K9kAw",
  "key7": "3oWAJriijVrpnChWr7jcCzxZ3K4AZcUfJcVntDUxr8F3dSGxzsGmk997FCJ4Ary7JiU3obVU6q9bH7PkhijoZkRN",
  "key8": "3Lz3QEMQwcHyu1M1kPmFaCL15VM8YuLZGTVNib8KYb5CafeHYQqwFVMAUwUCZFCt4hB6NGXzzoeDs79RA53KefDi",
  "key9": "2dTWKBYZq7P7yo1rRKhcmSe67WCHgaMJAGYxiMJpZxzuyVwBTqMYK7i8KbsnaKNpNNtqkyVFAhC5A9MaGugDRT9s",
  "key10": "5MH3naWBFVKT6tpG2PbwB9fjm5odiB5W8EgjrxNsFRft9e1YS6KsRYjmjekfFzr4LJNfd7HrT1aHKQNUL775dtSx",
  "key11": "2RKM4hxXqCyDyQW99YV3VdT5L9oJR18asUC523crspFEoL3Eb85iokfuWQN578DMLUaw5ZqkLkdpKSYRCK69pCzU",
  "key12": "2dDRL6STLbiiUyeze5LniifN72J5bMtHhnWsEQzJB2gTg3r5n4P3fUgMED9BNDBJuJ8qBEhbRyQPsjPJuMuh5pd1",
  "key13": "3mV58oe7jNbpciyLkXSNFDcjuorTkVk5ApCgEdds8AHDE683RaXdfPENP71rQuz8zVWji5R6gmrf43hXjQ8Dtnq1",
  "key14": "5p9q7MAPQEGXbWdnCUvA8cXXbkzjx4zNWSNEbwwKebDw8awJwMiNJ5diW1otRNZ7bwawAyRZZxRTExrZg6rc9C8h",
  "key15": "4Nejxzv3KEDDjbttnaPMnidfvocZUEBpo69cw1K8xV6wZ2zmbqrmBSQcka8kS9XuKPKCpmB8MeqA6zYzPJgc86MV",
  "key16": "5HCNgvcVPvZ5XZoiaA2fHUSxDCzhyXMkL781CVZu9cSJhw1ggTYCmnrYLr6xKxqaGM5H19T2W2LiTL3hCJy2Qedc",
  "key17": "4pj8eRCPoTNFrxFL52jWRzkww7krLgyucZwEGm8TXGh6tExwr13iXdC7CL7UXX2JjzkWje88YFP4g6xo5vLMrzHe",
  "key18": "51qJrVsZ8qTXZ1Z8enPhabxAcu3zFXh6pvF8ne3gXuEUQV34h3a1S6RTz51qsgP9zKQV3BVj1NqWNyiqxtWhb6Xi",
  "key19": "5syHdW9tj4TBSGTHWvsLb5K2FdHEBqsvbwF1ZKGdNoRSeuPbKvXam3gtZBBVi9kPkZ3H5XFeXG35NowWNSPmCtDr",
  "key20": "KUA8y2evagZMoGLHyu8BP8xUttNJ55cyFe1hL2X24fPDoQnSX3y2s43m9836LxY4n5CkWM1KGvUhLHPVgQFcyfi",
  "key21": "YCcx17sgKQH64pu37jbWMChz9RPnYeD6dossuNGTkRDcA7DD8zAV8z3kpNHJ7C2GDCCw4NVXMeqmRUrN8gnpQx1",
  "key22": "4CLuJEvvHngWNQU555GdU9Z4DGvKzHEdXUKCx69FR29XzS8HmiPCcwikHBp1aVCRPUPLc7SWr3ZfFYjPqQF4Fi26",
  "key23": "3jgmEiA9iUgweCjPqwR581JWxLusfsgNsgd8qpEMVXg59KZRMz2Mw8zaf7ekEuDuHm6LudrhK3uSD51i9MmAki5S",
  "key24": "4gGMgmNe6QanZ8iv6kTdTuZd39tuDykBNbDHycVtd7wrXV1cFBK2LknQCfer8mzCYNhi8xpv86Q64toPiKRy1jc5",
  "key25": "2cpZAMopCZUm3hdQow5q1yaYMPj5ziHQFYbBUdLcRyD5xudpttfjWR492zFa6bufbKnrBduKb3Wpj7SNyjE1Xtq1",
  "key26": "4qDqoZruKJoBheDtVpfQKAU9js9TYDsatB6dgPZrwLYY52eotuAB4mEZfG4yRAWf6nrt9PDP9UsXg3VP8ipcg66A",
  "key27": "5p5Cqkcy35NZT8ApALboxamVDW7DVH4zrvwPm3eunE7NZxSnK3uPM8xFgYESkK7XFXgFBr3z9iYEjd3bGWuP4xwe",
  "key28": "2UyMaouchUoTdM4ni5htymd2NNghPB7VKjio5e5zBFUE5XaPVmVN9sSsBDHNShHkYp8k9bhtXEUbJZecnDW23nR8",
  "key29": "39QCwUW6GwFYQvEEv1R7RW5yUZgnGrrEyHRNxtno4tBooxCthx2RqX6f7t73m7D5vo9yroJG1mPQtNWz87nBh8Kn",
  "key30": "5rk5UmbMP6uDQawpCWTq1m33tTF4UZTtxsapSZTaksenY1S2LRjYAe8Lfrb81xQC1gWVfbTTDz8NmQB2qkkozyQJ",
  "key31": "4zMGvUuEXJb7Y7FwEPypzdroATFakcEpCHVx5yqK7gJvEh3iFk5omN3fSPXCR4D4FSr6UdxdmTkMBbrWUeUzu38m",
  "key32": "2e8o2QUPfY2UnJ1yBtMrttyKsyB3hKrtm2sk98VGieur2uto4WZgXnekZqBCTTkHTdDufKZiWq9RZeDhaF4aQRgR",
  "key33": "3LGu4ExqpYKhLaD4h56LxqTTwH9vKfobacfH58RiAZSRheKavKVbU3i5XqPxSAihf1zZuUGHEb9rWqr4LdB2gTtt",
  "key34": "RqQarhMMWMY9L3yhVyupjN1gfJxETo3gQdb7Ab53M6vBfz7R1izECDRzCSr2Va8ozpsAW1bugW9jfXML5Y9iczu",
  "key35": "2dL9zQVYMFADNBDwg2V7q5g14LmfZB7mGw9o6SvPTfwxZ3AtUYTSfchp8c3Nc3V2BNZv12gRxJ3KjZe2AeS7RkmS",
  "key36": "5rzvdNC3HXPofkcwzVspMztimwkc6tFLMSjRyoj1AzofF2afSkS4L1ReUGjUi46PtCnZHF9oBeG7Q2VQXWC7ukYK",
  "key37": "2VGU9J4ZsH28u6aF4eufKDzJdYAFV9ttpRzBZDmZMYogpjwtkRbrJ7gkTDjURgdTziyXD1zK28EFjgEAaZnpbL6b"
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
