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
    "54t5KFdZGa6zRS2GpnzVWeUCgmHkPmx9SjpEtn7HPaGjXQkTpNy3cgYrScfoqFc19eyb9oUtVAz3X6ukKwuoDNHM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o87kxmC2FMa3USFJfHerop2UxwCpVGYX1mG1WSuQSdmoapcfndPia2QEyTLKfugFetzVFnTWaJbEa3yYMD2VJAE",
  "key1": "5PZxo6dMeSukqaqnUFjMSccoQvjJszuScD23q2JpR4ux6PBvsbXcQdAiJLoyYW1nBURNNCub7cUPTHWwE4VzE6hD",
  "key2": "wYWZV2NiQE1Zs35LQxD2JuqzQKws9N3VvvQadq13ctu4SPR64cjCoa2tTW2ADnFkeP6Gc9EHSaxP1rcyVhbFwbS",
  "key3": "5yMDpZoHaHMkCjcETGZcWXmYrZw7qcUhKh1XFagygLNkkeBcQLv1QYbDxBYA1w36txbfUzxcf2druxqnUEDByyPn",
  "key4": "3gwwCRemBW9MxW5hHScTzuF4v39HoDHvee8WXe5QFn161Ee32asQ5p9NYywc2cRz6xTCJUBV99TxCuruxBRTPboP",
  "key5": "xqUQdwYrHxbwiso3Csc5XMoL99p9z5QVb5oEHpUCKoJguEAcpAY4RXzwEcMf438tFe8RfgpMD9yEiDP8itakvv2",
  "key6": "3Yo5dEbSPRHe8mZTq7AkVLhrRxTe3bMgCD6NYCb4CxXjEX4H62aj7Jcw1Q7ynWTgh4gZ6ovpn61RzF8brwxnVGpj",
  "key7": "PQ2jKg6U2DzPCfsCDDEtn5gWrTXVyCobYDUjbin4BhSBsejNiEVpbPJRrQfXtrjFeYzibYkRKobVZwUgab15nuw",
  "key8": "28s1cGNXDiXQ2WpFQrpxA5Vats4GaXxrsVewyvMALhrZTS4vfm5GaYMmLDM7HPafry2Te6t3yLsg1TPYrhysi276",
  "key9": "45jGq95WmA7RknV7UooK3SFGGRmeYkFdtxzvckYS7yoq44vr3TfVx6bBW1umH2NJJZB61LVkHqNi9ZpT46jNFTJv",
  "key10": "4uXN6Bx2XgT8pFhx42Dbramzqd8TiknrdQoKueiJJRUbzGHt1icXu9hgZx5dMSPnv2HFiEuG8y7CzLw4uqpQyj4N",
  "key11": "3BEcKQog68erST1PjH3kmtRYC83QkNHYHBKHHLuJZZZmy9ppLoQ1TwdXwc4ewa4ByvSukh581xaGkzBsm19pHv5o",
  "key12": "3N3JwU1gatxRC9Lw2XGGFZUGzQFJg3nEPUrsV9JXU3odzAUY3RYRoS81q3RT1BXfsXdjGzDEk9WTh6MQfywFrcyL",
  "key13": "3Wozi7osgh3XLhanBq3kUutpZZPM5EqiTr41mCHz2f1Syo3baUVq9HkuGCUYEFDYdVw1dveNQBZzjjkpnNW5tMUy",
  "key14": "TBTneetsvGtWt3HghRkQtUqK6MWC1ZkTHc2yoG6SeMypczyGAcfNx1BTqcvztjb6mdKm9tk7HdEHgQqEa7PFfyC",
  "key15": "2SWKJfXLkFAAxdMb4fmFVSZQDWLVVZuJ9k5TB5h6Y64mhDK8WqWRQ9mdFPrvEEjXocUhaCJX3RWwSB6TFq6DoEjk",
  "key16": "4oebdMaNi51r7n4EsYhqoZNsLfiKfzfJoajc9D4tivuKLirhNywMHzT1Fk3YsvHghuYJBHDK3Jfxadx36FbbiJ7s",
  "key17": "foeE8EbLJZLRKzHNbDFaYBptVWMqtKvTh52KzAav1UUF43J7LimGfGdnAUk5W27jMpfMbxxB5N8otoF3pnSgdkv",
  "key18": "qeGzADxNq28sQFPhW5QpL82HtAeiTJj4PRNzVSdLXDnNGYWiMYnp6RvqthnXbPRV9diCqvpx34brDCYCvcF8tb2",
  "key19": "5cEbsFor9bBcP3xyyB4YBf7DM2v5zcjxfu3inowZJ8q1PE3KH844PaLoqJ2om3VTwZNWL3DydowoVweW93iJRCEm",
  "key20": "5Y6SCU8MS4pLXjzmXYtCaUk2B7bzyTqo1XtPiWkjysBGpjbpeQSP5NHfVRX7DPg6sg7Sj4PCNj5muek8AZtTjVDt",
  "key21": "3pD8eqpTk3p9kf5SXgBVw3HniYLcgRwcimtKBdxokezM5yxymdwkZwVCRRA47GvoZZGtKZQRQicCrNYYoc6QYVrV",
  "key22": "5BR3rNnUSKxSpR4XQ2NPkk3CpAeBVWXyKbM7kqnhnZG6oWMwwhRZZqS6zAKMAJbTEiYFdFYkwRCv8SuvvWTQyHJp",
  "key23": "4UffwQvmBymmgkKA7AhKUxxeR6XZ5giBtnsf5sc6DWmKwpQgED68Fi2Y1YQDYqYn64SN4be5GYM8kRifnMbZAsfy",
  "key24": "52EcMiRzsPh7CWmwgzQnHCAA26sbVfuNvaUZc2JU7jRT26vHtwbSMgBZ32fQL7CaRg85YXjDpF9TLcFDDbTp5sWb"
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
