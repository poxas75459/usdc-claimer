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
    "jvrjLRgRVzt9JWz65ezfE4Zc5rfYcspAe3rqg6jRpXKVRUJzt46adsbSqPkaPjrvidYJa95YmZ9Ghp5aN6VjEzQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27DrNoKqAnkwrkY7yYR4Aso5Ybx8BbLrDWiEWmY2pd9cZZjUmLD837hzzvaKoiez8RL9VdVAnXnp7vu2YGcc6ybp",
  "key1": "2TAC4vMCVXj7CfRWGDrHhtCQurJpE894dzQjhhhx6wEtGFPuGPVADsLRTndTi8jHrxcDPpifNigi1AENrqKoqYZX",
  "key2": "53brBuxizSJU978WoFg6JHBp2LCpeXnBuHvWzKi2XMw1t66LnpqM9NHk1WF47McN8bAKaR2SRzR9xrbwkxAoFhHW",
  "key3": "4k8BasnZ45wVeP8qFuQf2aPRUgxzdc279Nk5P8pf8ZeJKgFUc4TLFHS6ZEQN9vQVLgxfahkzSkpAk7zVi7XznSR4",
  "key4": "35Gm5qAvYh9nUqYRNdsLqByE1FKDyvwqEuGK99KN9gofmLRpSc9J4VnrtrGwferAEeFTBbPYCh1kL7UDhe1ZrV3P",
  "key5": "3qF6tXeHdaEo5cVXhVdmLhmD1NW3jQ4DmjAxKUbb5e4kE6Hg1G6oufHhku1kFgEib5A6NqjBxAtfNXJmBJ5ktAsQ",
  "key6": "64Tyj2mTGS7zg3oY4ynX3DG9FwvuYrGDsxWZLCQLS6N1tX4iY5JG2sdo22PifJXteGYWyfexesWfgF5untRcYEtY",
  "key7": "3ZvWBPf2Us1557GCTxaSLs44AM22qrvnwX3hUmwd4PTvuQX7xq4bxnYVYun2G5EAedqMXcwkQFQ4bhkVGQLzmLxH",
  "key8": "4845qqhdn6otCi7aVUYE6ADafMimkaUXZHGbSWoviueDdp4WdU4JxQvGBwyHdtBC7RFMktcEF5ADh1K9cwqwWHgV",
  "key9": "2bgqRkQ6UPQXSJM5rsJxNLxP6eU3cKPpa2WERsUH3cu61raHAFNC68ephHBDktpgEqbUVMKJ4zCjBUjjjwt2oCBn",
  "key10": "Kqa4a5WjPrAnv95gxxM23jVU9YN8D8G8BiSAmos9r8xoSJfoEYE4VauDwxSwRTrjfZhPQ9p9w8v9BkueuzMDTV6",
  "key11": "yWucKrYeGwPD3QCxNERLNnAzMPrdfqcVMrsHS1AZj6WXiGTRYHcXh4cGNfsHC1ZYd1U3ni7Qdox2QiaXFoWLXWB",
  "key12": "39ymRiN17jmXoD7rKdqsL6CoLo5GHZkcrVSguRcWuAHwHSZiSStFLvuNEDFKKXbJu6FX9hSBxvm788gurSjYKNEQ",
  "key13": "4NZpEnQfMkEpUHS56cMvxWnmLvtnt2ine6LY6fUdL6uvQxAAtRJWhTcue595TfsiM7rtrC91ACgtPphL1yBAtbSE",
  "key14": "34iEWML1jJGrhUujKCniTK6REaKi8Y9r6L6qK87B8QyDgtPzKZi9zSckpJrXps7nJdGdYFvtZeMuR2BMM44XXRV5",
  "key15": "pDMfHtMAAAnP6LytRiLFpctoowWAqK1Tzrkay9Ju1SPHNDaFSyYihWKaE9emrE8GnXM29GtwWbvgPig6ExZaCjd",
  "key16": "qhbNW59SdctDpkabdnwNpHNqoELGYSbmF2VJXW6JxfpEgARoRNzy1yQ6ke31EQQLKcSAZhqjtnAoweQqnTHbSi5",
  "key17": "5eCah5cqgCRb7E9k2HmVM1wFQH2iwKHig42hzMPsgePaKEuxFBZX5B7wPkoL565cobXxzWKgtzPSNZBsJTpazp7K",
  "key18": "4gYZgy1NtMQBGCfuNQ68tS5igmFHRjdmF5j86Y2WNEkJ2oTZPR5ntUXL8vMtX97NhmBh8FaLLEsrJWAM25HgsKjt",
  "key19": "4nPPsnqDbCTKFg8UKL7huZ6QTWrM1rWnt3MagSEb4YwHWCbfiGaWbPrVS1g2nh7nYnW8rCg2VdmcT3SvH2A683si",
  "key20": "5dXSuH29HwU3NwA4AzAcTkBd7VMfgndgLmBNAMzqFPQoTiZAh63KpeXR9zUQmB1UnXkkdLkRETvrAvyapDScgMvH",
  "key21": "3bdXqJuvpkKxUD4eJJdizjzSZpFRY3FAqSCvheHDeLCd8VMorpmDKVPYt5D5SHfEPAD38w6kN11bQpGhd4TFLezR",
  "key22": "5onTNhq6RQXdSMNr89J3nxj1XoKrddnvS2pkj3jWTNJHdYzyFhtWBNpamM2Y6JpmThkdAt4io3ZzitXGkjQKPmnu",
  "key23": "5THMSPDWdA5JLZxrL9WyC4dvHyyfaJSW9emmsViJ7ViMPpVDyKLc1oRdh19Gg294XaR5Kds2dZiQ9XmuA22sAuJs",
  "key24": "WuhvezpGQqpDNCjax49d1Djq1578rBUMLehkGPABf1MwkncKuy3MimoSk2r1FY9kL6GXLsZc4UgespDk5zeaqdZ",
  "key25": "JnanaD2xxvx5cmAX3c3FNrHx9zsQdm3s3A2jQ4c9kpYnoizks5XpakLc5ZWLPbriqZ3rVc9xBFFWS4GDs5eG1kP",
  "key26": "628xSsJYjd1mAJYc1VxsB9Asw8YxJJnKU1TueNaXC26492FQzPUCG7TySkMipBfe85TQzvc26v79DmvizopTmLsr",
  "key27": "5Fe49qBquVv6SW1VWHteaDWKPSGpuhwH2Unp7VyFZHZ3kJjUmYJW6uaXHi1eGsuB1G1QpSfziR1vdobfe7AoooTB",
  "key28": "2YwXRbEusb4nshhnp3stX9Pvv5idkkLzPnBKVpFixXFdv6mwLUzYxXWemzju9ffKn1uEP3A3B1dHvZY5otNEqp35",
  "key29": "2Dk9bjuEEQiVnX67DeeQU9uzhZ5iAu2NMQE7ksG9xFsPQXRNda9i9PfZjcpwG63viWAPH1SsXxZpD89QqVRNHrD5",
  "key30": "4NikZKjPxSHk3FXjhghvfR1JPhfg4HUcD7VDJpbCfbM39rXyv5sH7nv6o4NDjRKXNZPBgdNRgXhtRuDx4tkBNt9Z",
  "key31": "2QQL9T2z3kWq5at75u7Wdfib12abk1CR4f4wCRTsDdRLCXjfyxZCnF2969V8YnQixRDqG2uyDB15GLCgjEGwSeTP",
  "key32": "44WWBn1vvwg6r8bNEEsCqvcS33zZjeuLqJ8z76KizgqSJyY2mVoeKukY9Jx9xwVf54QXbmQi1dDuRAC4v9WUC36k",
  "key33": "3pPAnvAL77ozkKfLQ7EjoHk8ekJzXJVJdGuPkD4YiA6wyZYuBqJZLCdeDdiN2BGkh1fvmDSPwkeLkCURrg4JwBsD",
  "key34": "wBPjakPn9UGV3imh43pYw2aEGf7ivXiNADLERpLPdxJMoMKhvdywu3NVgsSWyvhpAyrJwCprm4bi1cuWrssWRn8",
  "key35": "SFpbk6kZvViCTM5UJA3abxLsLTbWSaM3ENjHNPR6Xjm97VfsTqnee8sfKQNRnBKewGGTAiQcGGCW5MSK1pUmJ4M",
  "key36": "4WbNgMesTLaGV1KyrLRzkkUi6E4zPPDsh58qXiwWZd7z5raZUQok7mQrBM1EwZAGYzo8RS9ereEdfqegjG8aXMTp"
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
