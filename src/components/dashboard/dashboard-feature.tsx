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
    "3zkWBzAaVF6U3k9oJHTMJDP9hS3x8rCD88Vcu1K8cn2om4ogQSMfDbtaiWXU7UFb8qnh41MdD3y23PBCHHbgr9Na"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PXcCmafsMg4EbdQLevPUMCc35sTAG4yxwwPcZXzKTddy7WB4us8ABtBx9zxqDqFRX4AWPS33jiueSp7f7XSuu3Y",
  "key1": "2N5pQTriKNd3V7HjgC7Te9x1vayg9fe9y3xQtTpUFmygnTafsYBtNB48iZkahWuhHUWgQFGx99q5zBzkG1F2jerz",
  "key2": "3ipnyoABaCePzNxbeuxKR3Eu4QUqEDq8ioQuPRhQfewgmP2S1RnY5j2V3Mmgg3KzzcdycEE6ZBUKoAmdtPh1Dfdx",
  "key3": "4SmRk7QgYUAR7FB59BiS4uaMtaqSMVW6RHQmYNUkVsYh7pbRT48nxETuQBHmiWjiUKFEGKfEtVqn3fkyEa8jS8Zd",
  "key4": "3hb4KQFG1Trtrp44pN5unn7Sw82NB3hAGCaNUeUQzQoSUigjoWiMutpB7Gq4jKZz8sKnMFrEjsBRGyj84DeeFLpz",
  "key5": "2YMJbKzDGMYwMKExcZZaBJs3rQgi1tWdprsdpg73iPKbdb2AUWgXVQ13gZzeA3NgGoSmWpaznEKkLWNXbkQANHyM",
  "key6": "2wSjpBeuMESFVkq9m6ShbF12uZxUNexnBtvzLpAWRaYAxTS3smBRASEec48KKHRG9zBK9ZrjBvZXyQQQL5w66fap",
  "key7": "5FgYHaxS2C2sijh5isni4T4a54i7iwtVmMXgtE6wAR3scyw8xEammWoptE8c2RhmaguYSpj8kDZRLnb5ADqa1nrL",
  "key8": "5HCvANNwQTjBv26bSRMtnRWjVKwA1L4jYacBdbuP8m7GHHDP2DS11v9yCwWGc936JppiKNRAJLghv325ippG7QtK",
  "key9": "5LZBDfAHca9rae4TQtjugqhTx8tU7TTN9h4tAn9WnBa2ozR4TDVtp9PwkTTsCxx612qeajqtYHdExwtzzVnGRkRW",
  "key10": "55FMrMBqV1J3RP7g8AEiN4suvKnqtRTxfeB6VEZXpnGmmASC3ticyhrjR2XB48xd2rmqxA7QroJ5xpDNww6vKF1j",
  "key11": "2FGxPvHbApF8QGEWKUwUanUewbNvpHn8teM7XbWbVcSfRxRKtcFT5qMekuLTo2sjroU7VpaWTFF2Sj9YyxgfHfrC",
  "key12": "3ctKzGbQKcvxyezcpd7Wmg1CF4rhiGFARd8u95NbKsrRCvddivtbhWXsgD5XGE5CpvXi6GA3xkVY8Qo4SXGuq8C4",
  "key13": "1MmKQ6yAXGJBStuM8GeLYGTjmRXiNnxXc16CPA32GhB7d8EpCCFtRcHh98bGBa37gGvorRXhDsJSXht5mUaNwNv",
  "key14": "3b8s4iLm14SHHCFKe1ZjyEzvjLtFR6iwTn7iaELuCK4qdKrEtvQqz7ikBDHcVQrh6H1k2DJp5Q1fdvvQTru9RSua",
  "key15": "3NywEU6F9evrrevoZM5AtyDpiSexQ91gSR1zPpQqEpUfLxrnFpSGBgfv5Mc6ZVq1ztcU2a8JNRSJ8jn2cTSAkEqZ",
  "key16": "4UHCESh9qtsxQ6mds8gwvQQACJjFFbgX5TofZVKxP9aMt7aseRuJNfSm3g6uXgP7UwxJHzev5r739fxq9jW5msch",
  "key17": "3vrvdZScw2LPgCvhK8up3McAG4cLqesGRarSghVywqJJgUFjWPuPDVnsu4bXvUqLzwvQR6K8E7QQu3XaDc63UFrf",
  "key18": "47GgDbHVLAMLxfv3mi8ituqke9jp3chJ18bPzteGL38xuyjtxB2jmtRB49j8Sjs3utP2F4ZFbrmEQkKzCXV6tiET",
  "key19": "56jHxfJqd472579UtBu4oQB1CvfVz7S9nmE168ZnbzK6HnkcsyN5vEmSZ1hH1kosN5nM9doCQoZnDMDnqKtz1wZy",
  "key20": "3NVzUdM2mKcfPVv5ATTfDwUcrupdHEB3oyH4thJ298cGx7NA1itS5Fzg9WN28oagP32EUUQ2Gb3GT2usnx6xkxUt",
  "key21": "5gxqSLUrvYznbUodVs7DjfoSqRY9noyxpqVq4rrdHqkBKCCYtvRbSphA4tFjZ1nRBAXWnKNaYEbeaopDfrnmwEwE",
  "key22": "2nKXskV8PPgDRye9xPsvTUQUqYwy571cHxVu4x52qsCbZk8ekapEy422mkhm45e5vPfgRaqy9aFCJ4GMnmx4oGM",
  "key23": "578EHQ3nbhxGiAugT25CwwaaMLi7K3RJoXFehJ9zi1iemzv3NxFK75XJnVfBh1YoAKjZYeySMTNhaHb7Lxz3kPo8",
  "key24": "4gp2dx4vVzKSAEbhKdLFeaWDHeS9h52AQKgK6HkFzYeY3XTjUtrDxEzEKSR2WL3vZuyevgmZLZo3HP6zabw75msg",
  "key25": "3XYJ8CM82X7NyPpXE86ufeXSuUqsfq42yCFZPsGwErKdsmiA73xNfWYYCSueUgKumTw9h5byRgTBBQUspDXjpuyV",
  "key26": "5vwUhig9Vb9wWZuECtTz7aPzVDQm5RJdsVGAftmGV5fDMfhehtNS8JUiSGxbDBCnTEgZ72F3uLX6qLD3HrdwK3YF",
  "key27": "2p9wndbCL9NQKr8keceYTxh7VZ5Rr1BTX1pDq7BHoKcGysjMBhUxnQd2jiqcjedEBexx5GowVJXTrMb8cGcjyBVj"
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
