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
    "2dU68aEWaN67Nbh9aapzcUMBgfDiHZg1SqoZmEyYpJRPUE4jFScqE3W3mwZVXbzuPugAxEbHkfAU71eD7CHSQzQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RR5kpeJQqxC8DkcrK7mbBq8TA3tZiXEf9KdD8ECDxHsHKxtiXJ3QaR5aCekQm5zs72WjRjAY3QtJgmkgmWCvHHX",
  "key1": "434VHQp4bp7cLog3FrQXqLU84GNnpeNyqYmXaLNkrhrdmBKiAJFzu8gnsfbZVoFx46Y4QM5XW8gLdZ4GPwu81knq",
  "key2": "2WPi6R292zyR6jKhB1CW2KraWhS4c169ZumHii2nHJPH3SZq7N5NeW87A9bPCnjFn3oQNi9L5Px3KRigZzHETww6",
  "key3": "4GDviyvAnHtxidRbKoC3mD5a56vKnF11QLwB3cggKqoTqTdT2nZKnQA9xQUZ7DM7fQdRG51Pq3UYeV8jfcp7K7HG",
  "key4": "5RtCDLC2bwQ2qF7mCuHhE3ovqVDbK6zqSw98iiz3GtMdxFE7GFJU1XdgxJqtxdHiitZc4fiC3wpkgDgEj2zE2Rvr",
  "key5": "3oXZ1YLwevifMDdHqnnyi5H5kSneuG3fBBJkGDqgrgXxiNVQGoDSfH13fs9V1nvxayozbGfK34QoobAEmdVSn56w",
  "key6": "rvuuKEs81mVk4zj3NYj6sHruNqTXdfjy2akjMCAQEk9PSRNeQXPSPmiouUkaZdieU4Jk5X9qnELUQQHHZfNKqpZ",
  "key7": "2sh9U4LXYV4gd9QAUvM3cERDf16gkqBoPfggmE7TUmAhiTdtqaLssASgkDaFi27dyVvF38gigQFJMuYuJpS7h52A",
  "key8": "CJ4GtvGMKnJrH79QuRg3bCrzinBZbZ8Rr5M5g2bfwEXy68zGJVtSac6yrYqDjEF2EZsKqf4HhQgGHpAvgGJ5W4P",
  "key9": "62RD5a2DcvxWfUgi5HN6GpAXprjEZ5VyLAsYKK3UxWEThr3WUYnqEvwbrLArDUJRQZGEoXfqBkds3yTLNxJpT7Gu",
  "key10": "CvpKGxZYvavz54XVsGsi1ddo8qK1DS5f1bc3JuQ288Cdt5cciSLC33ejYPFR4N7KPm39j1CHAPV9FoJW6jm12D1",
  "key11": "2RfxYKj6yeh2sv2weXSXcRwx1tLGz43cYAPaBsE3Fjy58pSBUoip5ZQCKHbXE6DBUspWQjaqmvDvgT1cLSVVnVCt",
  "key12": "5AjaAkFxTpsvKg7aobYuVZvVhhZ2Bert32JCp8iWHC59Sg1N9JYGurWHJ5ozDQZtYfozQ7GpJfqj3TKjGTopMUYi",
  "key13": "sjDaDRz9E2RqY22KzrXoMEUznz9FJFDWDakcYbsFRLPGzy33QWsu5sZtFmgX1KrQzwre8atAM8kUZqrbSET9m4a",
  "key14": "4WribrN3JxXXPof3RAamFckteAmMhTyGnH2NLdygiToLZmihUrKabGsmmrKCAUkLrqMsbfcgRVoDM5Lo4DtAdmW3",
  "key15": "47KoDjUPPGobzZQPzZU321uewfbxBmgsGetadgKxWxEXifUCsLYBSJjXT1hrNn4eriwxpHpCtsE9AtrUQeM1rszc",
  "key16": "4cmLRKnuX1hsxQYS9ZR2fk9UB5g6UFbnJtguiff7zkY6pShJLA5rESFpJ8AnbzjGTQv6aQCzJBMnKuwbx79nQ5iu",
  "key17": "4tMrnEFrt9b52Qe2e26n3ZdE7Dj4gSSsa4jxVWqK63ds21FojfWV3rEb7TagZawwRm7JD98BSytsxDBr6NtJpion",
  "key18": "2j4cSYM5KMuqo2y1DRSx2yJVXipVUR9v2Nfm1K99XBY61gw4ERDzVa99v5UvtPau1ZNvyEdt5T8ED5qANbaLXRjq",
  "key19": "3kkVYxzi93A6PX8mzLv7gaZd7YYx5VD1M63X8CVEsiXg3rziLvCnruhAADnEU1uDFu99Twwof5czf7dvNUNmnLTK",
  "key20": "4b4f1BAqDSXsdbnZgj7j6N89t46tvjErRFMEuzbrUs3geydHbRChc5jWY832d2eduHyEXcmMMzL398pvCY1hPTpL",
  "key21": "4tUjYafxMXKiTVz4gvXruY8V8R5y2iDcVSBBY8XSRVe5s7AsxZdPcjzLBveovqFR1Dw4oeUHwRSzYuZG9ka2ZFoo",
  "key22": "hssGZ5Kh3CK4AEVqjVy52QHabgEbBJTqcu3FQritggs4krFwvuBtaJPYFWbJguXJdonhZjBYbzCbUZVcSVACrbW",
  "key23": "5yXGonUWTU8vfQguiPzcKXVFoxvXC8SMFJDAntT3UUFc2T17yaTeBp5khhbsJyV1gm8mCCUAeSFcRmd7qgRKbRcV",
  "key24": "2rNdJYBAv1LVUzMbRFtPM5it6ytwpKFjiZvxF5iCfK8zRtGt1kSeLDyR4WMBieiNoWNQLBXH3ssLZNLh2VTm2T5z",
  "key25": "52qcqK92fjmcTRV8gsjvXgcot7M8rpZRQc1GSFLVtPo45u8q3efURuXnomrwjoQdXXWLZtRRqTXegKkVfGRjbUC5",
  "key26": "WFWue2j8PSx69HCpPuHuNm7AWwQSnAcGW8qy46UNbJuJYQyYiXWom7UF2gyH7dA5x3EdhoKqzHWC93VUtrypNFA",
  "key27": "3b72TJ1aFNNi1FFFc6eSELaJtk71AWCoz5sY1REhqEFh4KgNCHZA44JQhKy6qSeVXNDf9TMF33xdDbse3enWRecJ"
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
