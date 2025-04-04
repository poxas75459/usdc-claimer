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
    "5s2iRwBj9mwVdmwyWmrhtFy4PyTpXL4PxEKkcC364eSE65LwvwT4fmDWAZo2bptfEP39Q1826WcftzBvXfq9K5Pr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hM6mvXgx2tYMELVwAco1WXsJLCKKnguqRKcJ6KBrvR1T795V1gyF2gxbKoeYksf3XGf8mjghqkmzfFtcwRCrNbT",
  "key1": "44UTnGqS429VZNJKtFCqvMDg1QbBTHNmfQ8eWdAcawn8nKH65qWjiKFofjdXazBPxKWrXw5NyWrywXAyXpXMzLHJ",
  "key2": "4nYw71hb4jhhou2cb162rADdAfpAcwHbkraUeUbPiQyRfqsG3oeRkRg3fwSy3tRKZ9CuxJp24eVxAemPYbvAGu55",
  "key3": "3q5Hu1641pA6h4Wm3ozDX2CQw9eV4Kpfr7YCywczQaAGNBas8fB9WihYXa9EnY4fKqo2VJKwC8r3Msz56BJjKcY7",
  "key4": "4aJupYjv8vruytVckFGdxcufMzktAGPRnwHKsQfD2EcY6exRUXSHcKxo1AHaz96qzEyxz9fajJWygWjbDpwPV7gC",
  "key5": "2Hm22pxd7TYfwsyHdF5eKHKURoqEEGb2ruxJKmT7NqJVNxC1zc8r75ngp6yydk9eNK72Ribf1bzkYpChTdDyQNNV",
  "key6": "48H9qbFLguba9HuDacU2MCq7UNznKsyz6z1doK7uKwTi5M1VyTLgfMVWCG6pUZJESUfkTSQBZcUhHFRPkcLsbDmP",
  "key7": "2pJQZievK7PJNTiVgPMqCmSPmS87s1zSwucHZyqrAxP6LaiScXjKF1qEG1PCvQGcheAXnnYggXcvtorqX4ciSrNt",
  "key8": "5cUZVCFgHkpWGgJidQ41MiynwYGwdohtuCXaiway7HXArboLpHEStCb8kGnM5erECc3sWeUA1nBTtNGGtvo8u6P9",
  "key9": "4G2FC2tUnCqERdHqmK9DNsWUcp4kqGEJ8qRTouWb2P6G8We7ssYEr2wnZXpvU5XXFfez1bk2VvNHagh3VYitYGGH",
  "key10": "37RDgnNJPeXa78LP3hz3Un3nNbJzNXEvLSqEkb4KEpx7wqKd9Uh2y1fUM4N6B6EgVEordxme7ac5VJWWovUkRjDd",
  "key11": "5MCurTputocxVuSAkrV4w22RqHwDfeQPkepnW4ixofucX9pds9Et7e82PHxRhdKPvsVMb37p6G2cCknR2AtePXHW",
  "key12": "23yyYSYA6pvQggb1nW4CcomgYadyAye2iw1RPs2CzubLPojVDFpcrKUjeCrAUuEkit3WL9rV8dbsFrjz6fNpJW2w",
  "key13": "3YbKPeeJnsz1idWivxevWmAU3WyUodM7qjCqRaeJt8n3RkxKmf48YgSMtMCwWW23fkdP39V1gjnfsJvo8QLVm2Zr",
  "key14": "3YqJg3jyyj69s4KabX8yvq4mVyK8Ury4teq4pG3wXMF62BbxnLDcNbBuD18w1ma1xRaaARejNafrNjT84Pzu7wbw",
  "key15": "eQ6WDHqhsFVYJAtqrWLn6TVfx9HbkwMqDiCMvx5EJzjUfRzk1aEX8FDHMVGcS3NCCTBXCKAfWwXoEaUmM7L8YL2",
  "key16": "3kr6xsBtpWBV1jNxvUwP5aPYzgQHHvXEMzM3JWKaDpHPSMKxXecvcq2EVpAZXCp43JMDrWebcfNEQEzE3ch7RczM",
  "key17": "2EgnXs89UrSUdMRMYF9t6gABahrTo7PybK31WU1ecdFgSyofJhkJvAMuZPsAp4rvJzJtRmvmMyR3ENPaPMrPW49W",
  "key18": "5ey2e6ucVrbyrtxfXREs9s81utjhasw4Uy6qfRQTYAFRE19CWzKFy12MaEhvT7RVg1AYnE9W8Xtfy6xa9H1xxxdX",
  "key19": "3ZcjgMjLhKJ97TZuMZuFHcBj4co7QEsMAKwU1LzUVbiUcD2EiKiDWcY8YcmoG4tew9ugSMRcu183jNyb6XYYE7cN",
  "key20": "2WKeXx1aQ45rPJpV5oQMZHnCDRveXkYGVi9XcGYwStWgcttZrXJATUT6pvsBJZ5C6Zsp9aBgiraYcJkr8PnhAGRo",
  "key21": "28VDL7UFqkxbqb8vRzaHD14rMXZtJGSkEqWNubtdsXxnaqtcjePKYWgrpt8c9Ek1PLhPkdtu7wpADg2g2qauoSnY",
  "key22": "5iUvHgA5zY2xm9VK4QYT7wk89xB7KD9fYk7LMYs348gnNhmAXPBRy8SjjtPUZWxseucM3AXz3XpxwXK5aPwSBqgz",
  "key23": "3qKhkswti9ZMzs1hpTvKVC4DQ9ryuNaUrSPZj7MqVZaULpaQypwnFf5ig76zHh8UgX4StTKXfFokQrUtLfM49Ae7",
  "key24": "3HJjmZqK6NgAfA7c9CSEnfddgt8UymCiHZsoR7uSJv5bhNAbVhagxMNgJoFbPDeLzxa15VLM8zyEtcXCKo4BeDZB",
  "key25": "4BduaCk6pfNXojxqxYB3C91c1dUS6xZVjWpShX68RoqvKfAKxA3K8BsvZvV5ZyDbzaMeCazYjueyLYSLibc6z9S8",
  "key26": "23is2uPgiQri9rdKtS3FtXJUq1JtshNzF9z5pvEL5mC26DEYqMcykmz7y2YPfzhwCFsuDsr7vS91wTF97wfp57xJ",
  "key27": "4yYyTZd2mzwpKKVvJposLpF7RwMQNwYiJvorHrMWx2366oRwCrqcYQmwxgA74gj6y725QLwD8BWC4wQRMejZLRDA",
  "key28": "eju1K4ch8z3yLT774haW6xGMFzekS6aTewTmBkSB65FMKquVdahAGR6NVAKiGdpgLiNYfUqk4gJHaa3RhXbUPR8",
  "key29": "4oettW5ajK4Q1TiLhduactDy7u9mQVTyp3VXVerbJRrzP2wpX4e79ZTtbQ3qBW1Y6DoJG66Sgj6s24QCbc31bY7T",
  "key30": "3waqTFYZ2GBvX7RAC2jnkK2k9YnHvAYGS2Pk73hjgPm6MA9ogTgohQE5rK8R3gnmwWTRVCf1z7HEUPweL59QQjCF",
  "key31": "3nG5wTJsRFSQPcsWaH4NczGNRFUrec3Tscm95vxjTSFE6NmWKizmxCztX6AGrgfzi1j8U5W71DW8KSZ4bUZ7mePj",
  "key32": "TvGJmohU5UtjK2ewvXZagsdPpn8iji2FnotPMfqRnqfmypjs4zaX15ZSNgr61Rb3FhujoUeTwD1NCL5e4inoewW",
  "key33": "xGNYAy55d6DiTWasdcNChQD3qpVgsvabpNineEq1Rp7AijZJ1STegdXTUPCL9E7JzQ1jMNaPNWF9ZYhL1m1ik3j",
  "key34": "2ffLwhBeQtaJjwwaJCh343nerQTBTYTUdLwG37TyzXUG65sG2UeCFFddcMxd6M6TtdbKtDcNzt7KMzWvaakcLgD4",
  "key35": "4xZYywVqHhvJTyNmZqbiWaQL9bkHWybzcxuonDimGMod6pyGQrbNxYrPqdrhkbs74gj9BkrGnqcnfv89NXYr49fo",
  "key36": "2FHZvajCbPTYR23cnRhuZf9KgbbNULFfDHSru63agACoWY1WkgBfom2inhwpdfBxd5ksEixtZ1yjTDwHfeNx6jb7",
  "key37": "4zdqM3jDP53XaBVPBwtaonfjjB3mXWSCsmsdCwDW9sWkDHNmufFYSjWieEfoTwaeZZCbSYg1w7sPptVwF5e5FoUD",
  "key38": "4EeQgFQm5FuWyjWdgQWyf7uGe42ZVBUKUXnnQ5bh2rC8Gqegoa1x8ENadVvyGLXbr4zMW711TBGcvYdNwSdFpogH",
  "key39": "4JjuHjdQER2AZbtLmrCzuvRBc4nrtQ3uorKZHbcZQyfWAnw1cuoqXWgzTLKCBJjV4sB4menFdnJgTiyHydZLhQci",
  "key40": "319d74cPHk2bbRj8ESBCbrmXxGaUPonZsBjjY7KptnwBDRpdVRv4DnmJXov4RnRzopbjviUxtYxe1LVTR7dVRVWs"
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
