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
    "3Un6ySm2V3YKHXSAdKXiggxbtSrr8ZFde1np7us2CNVJMZdyN99PuUCQSGiafQxk4FNy3JJaDKS4BVR3CRZ6NvC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JyU2nYwT756grkrrUPSVh79dVRygaGQ8QDFeixUqha9tQF51bx1b632fmRUYL6DsGrgbaayiUwFU1EeGm4epF9t",
  "key1": "2Ms14BX91BohU1BCyAoE8LZYwiuraJB4jMtgYnccwBFk2fYEwHQshRR6EUKhX77YcobMNfu6sWzKwiqp4Do3v5Qg",
  "key2": "5dWF3VAaxAstTjfuQ1TD9yjFyimjusedfwDMKUZicu9KBfGMjk4juXkRkdkixJcDg7Bq6QZrHqhUi6of8DKcEJo3",
  "key3": "3CsRW5feZgCT4jp3QCsYThC5X7Ca2P6RRL579dQk34ysV6K4nKD8HwVARbfyZNxenuqJHgMzfoqAJQsbctttTNXk",
  "key4": "2sfjBDy4NonafUQc1BsXwQaeVco7DD3mPr6wCFrTFsL8owLe2AqEaNsCCAfZuVN5cxEiR74xyqpWGneCLpD5b7Jx",
  "key5": "2BBtbBtaD3EnfLVfqd96jpCy6oBbHCPworNPj6SR8JpYSUnTe7JaEkcUe2eWt3RhtDyb6ronvgG73mPE5RSwM1z2",
  "key6": "21PMawxrW62v7S9pDK8qRCK83gmJiyfHEjpmfXPJJEGEU8dHrHhuPqy3iynS9NPaMpyfyfATyuMqZt9pMvfZ8ob2",
  "key7": "5FGeQ1jryRkyCFokbvMr6FTx6ec3hrNE7GQxBHMZ6GoBpYR5haeAoUt2LDMq3LuUaRdTzhgXwa2DNsShd5J8Cvzn",
  "key8": "5xZ7MaVoVTBXBRbJqMdzLrTFrAqvtqaxqAA6TCosyhB8jXkFCS3j9jqt1xP5ZnhPfHjW1mFdsks7UJzWFHsBPeWL",
  "key9": "4MRzWcuezAi589DF2BjoxayLYiPfm8iAdR1nHhAHxhzkd6Pz6txtDmS88zGnL3RjMiK4nQvPCcMi2mJRN9goGVeu",
  "key10": "91Tpk63dvmj72qfjTQ9hyUEnGjcogbysrYvL79uiYk1bfXcxixGPx64YeZkQYPMSyKofj3VR9PV3VnZatNi9zum",
  "key11": "SJ9XaAzWcBcjfDrokjAZ6ZNB2c1i4wMKCiRSg9UoLRXq7sNxiFUVAJFJ8mEL4q7E7QqUbfxtnp3uZz9wXpWwQE6",
  "key12": "3HM86UPADCH6dCkyv1xTGWEKVTqAw79gLae9MwK1rSVaPqp1SHZ1bUBFew2AoH34w9FUZavQmskte1nKasQTJ9fV",
  "key13": "3vxCT4Vde1FoMLkf9NTjegmPay4RUAXtecwKG62sUGNMefVS7ZJs6Nr5bdHcG4oQ83qh2PB2zqdWLvJVZxsb3Tus",
  "key14": "ck5hFnYHYAGFpYBgtQj1L2jBePQDWvm7FJXSSgEmtwKH8QcY54BpzkmvyfptDf4PJW5bvCv5VNB3rPAE8BWnjDf",
  "key15": "2MCpyi7nEjpETo8d9EdtYf3LkgGJb2WN5iFpmTsm6Pn2svJsFQLDSSzVAcQh7creBkipaLXa38USf7m7vdqcoWDR",
  "key16": "4vhr5LAXrmxwb9ihyb63ER3ET8pYN5xtFBkit4QsfKaCjNTRXGWU7oTuBpuQNp4t5P17DoaoVRskZGAHKbk8HHWt",
  "key17": "49dQFbkVGVtzXjLxTd92Nq69cn1ZKqyGxMpmSiceY1MemvyJWwZiPJFEAxipMmouKDQVrbztFvdnQf7FAa659iuB",
  "key18": "4vXKK6Jyw3zNhuPQkrXQdEysoJkbdmtZ2sRBWTxHrMkB3Ft6xTTPPRgmGzZzuMx5kuaSP88zbdtyQu4AFD7c8P13",
  "key19": "2UyoYWpERjs1po2jJjvEhcA6BsX55xvwMi2YSbC76JP3gQLwNYHtWysPsLgmncEQVikCWua9RbagY6ASjnKxQ9cj",
  "key20": "297CEQK3wded5RUCwANs1Da3hVytn51J6FfRcFmPV8HdDW19dc8nsdRye8GHkuY9kkhEmKEzXJnmD5E57r2GMQtU",
  "key21": "4q1zBz2EQqLdap7jwmbm22m9sxMYeo3iXL9ftutqMrJ4z9rJEzHjQwWYAT3FdT7isGu8DE3KuoSGMWhF2qLfMZ4g",
  "key22": "2sryJGWMuDTV5yXP6xFeYRqnNAH8ps23ds9rbyVYqEsFzWv89W5wxmVBWPsakbXThrgvypKcoH7UFwTCbH8n3JUL",
  "key23": "5jQG3EAr9dMsLrETNBpkn2eMDxriFy9qN1rAoKtnmiFNj5ALtDRRY96GHbEHXTApkXq8BNqtXEDsXoeC8bJ8wUUt",
  "key24": "62d88GZ1XfvvVVPdzpH6DY6PD4x32f2QvGVEPRAQHrH7yzeeJyGY1tyyrrssAUXr53xkUaToaRGxMuK61MkZ4aRM",
  "key25": "66x2cFzrBzu3ShzdkrR5wXQsAEfyQWWv7HffqV8W8xyxciDSCjZVNjj7fakmXsYcDE3p3pmzSqzpzAruaf6hG5So",
  "key26": "4TEBavh62LwZkKbi9CqrkaqQtBaWDjfFeWzunNwupUzwrkZAipJ2DvrbZhmNjjWmrxRN24AdMnbdRG2KmSF4Jx2B",
  "key27": "5FAHvPVQEghuxgesJha8xXbR8bE1PwDcgQp8pC8x9uqAhu5HyJ1mjcmBjxQTBsGNRCDrHfcDbSiu7m9xXwC3x3XE",
  "key28": "5HJGcAKLwVvmvwwjdjn16pMKpphd8gjuzo6UkejpwxUkL2BfLgMR3Us7sb8mnQ5XL27j6SGZTfXniQmFkzU97VuT",
  "key29": "2MYYJGghKUgt3hAAotgQPToB1mPT1Lbo5MRmkTm5322eijDBNEKsbCvrYtrrwTs86DMEZU7HJiubUx9JdpBZk4W5",
  "key30": "2cqFoCvFNBeWi7Rs1brHc4piShuCJGgaLH5jyjAMqYoaSJwq88RXPoiwk8Wh5C1BBsps5pF4vWSPH4umvrDppBcL",
  "key31": "EPYx8QMwapRLtsHC6DXEvti6YsqJ12nHsWo6m7f8Zwx6wwQJ3V1YeT1BVXfnd5L2P6YJLwS7TgALBQvAPS3Jt4w",
  "key32": "3B7MxdqNugcGj8UtCUWda6vxrZtP2H8jfXdQBXCrudVqX94jpRwBrBqyFKaDiWjFbcHTy8WJq4EhAxEDdk573A9y"
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
