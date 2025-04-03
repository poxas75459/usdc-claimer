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
    "3sZSV6ARE1ESJafUZwVx2G7w7MSuq7ZkxHbF8FgTobUt5gDWhakwH2rDjzUknBa3GAasRiLjs5B9LW5f3bZHTXSL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bwq4Fc6WeSqg3dDSqtkGK1nusvhWjgjrZG4c3oRgRayZPUW6PWaSsaXkKfE9kRZXCCGdrHfLbTq7GsKv5JBWBPk",
  "key1": "23HcYBwVFxdiDSGf3Q3zZAq3qFfQNW2WaYNEZVh9jEyUV8ELomJyTg2qdWJozZ2iRBfTM7aCyetB8Yp8D3bh8AaW",
  "key2": "4tdb2Be8migQYkYZd9mxAXzXKBDzJktC69aEQULZNxySxwU11w52GWgf1XtnK2DbfYVwC9rHiYuX7ev3phWuiAnA",
  "key3": "9qgV7irGnTD7QqU7d5ZjTMNe6AstdE9qpHiPLtXqhwGneGbCfAAV6kkLVbxt4X7XbAaroB2saEt5FQ74UkUQ8cd",
  "key4": "4Bu9YWWmvfwpv4ccZByAqAhZxXU6RvX9qBaTmRiLRXWSH8axM18UuQXqN38DAgJKE7FRvTxxyiiKHpMby4f7vxjx",
  "key5": "2C45gmgZDSKvRtAGL4howtxXVKpaufdpLHi78t6K9j53MfFyU2mg8jeEPM4xS9jjeUmw9Cwdybnu96BHzX19tqRk",
  "key6": "2iTmpnzEVSxsifnY1vPZpgHLZjoYJbgPhyDwByeUFGxXkxkUF9UGEX3NdvybgxCxDmdAt7A7oHSH9RFw9aiPLvNY",
  "key7": "ztBD1j4ADa3C7v45usK6gyHUhqSYtLrzNkv87UUGrWd5ZhfGTdSQsdsN2j6i7jVXZw17ZUJtY142cmzNsbxtsga",
  "key8": "tYe48kSBy71ArH8MBtoSkuWic2KtTRiZAJQRbPpqasfcsywYwQpFnip6pRDkCdrWErTqT3PQkwYxBEZmekYrUjw",
  "key9": "45DqLSbGQCfwUMR3di1WARGCq94R9AFic9yAUyPJDUhUUVLwrAfespstkCAwMZQtb7eqmjrjaapEy62CSbVT1uoL",
  "key10": "yuyNzKKcxvqd7so3TrLDeMdQR5vWoFXfkWNSH1Y65FfkHUP2m7HaPis2h2uWr253isNHgJssokAtrsZiqCffQ1R",
  "key11": "2czJVWZH72ZWJQdnZufMsVEMc5VmqPJHcgf7ySCA3KtT1omWeGFaWVMxvKwhMwjZVnf8WauT3suZj3EY6Sqev3xv",
  "key12": "2h3Uv5SrwM4kHYQDMQ1JzheSTRcem4Lob7B5dpKFo1AWHxSKtqpFVKeGr9iNWfsE6KuLQFUz58zYYPLtm1tPdj7J",
  "key13": "2jDMyV5kWVQtGwXEhArvdZN3RGHcE4sQFhUjW8tFM7RDE2iy4EepiS9Kk12Bfm6TJHQecL7BMRM12dgqEkTsqdpJ",
  "key14": "2oK5wHbvKmoGVVQKvDbP3Qdndi95fSZYgF9xNMRMyazHsJTeUWf3sdn4m2Zf6ZDE1KvQWW2FPSAQYANuRXJfcUPJ",
  "key15": "5wti4JB2a6iMejR9DE7UgqJRo1RuijM9MbkoYUCYReDhPwYpkbD3RPqK1Luec7BYiSwAryKbHZsfxLRF5QtR8uu6",
  "key16": "sfUiQRn4kdfpWzKKjMbbc9qtCDundsPC741AiKBcRx6CUR9UHff5wRoTjXHtzbPz6jdBTgE8S8d5JmjMGb7kZkY",
  "key17": "gBciyFEbdFnzWsE9AbzRRRDMciwtgQS7Tg7STda9u1eeNtJv9Jp3davJnSB1zVChgVn2TVCgDuD3Ud7ghsqW3dX",
  "key18": "mLCv4wiUojXtrFDnW3QKSxxRUWagrBVBUVfD4cYzh91AxQtNzbiVRebPH6LqigSFiwq8TvzwAQ1Wtmdt2qwtJT2",
  "key19": "4vYYtRhwqNX8RtBTe94t9ykJt3oKYKbCzX7yz8myzDjZVCU9RzDqNPh4GKYQztu9qUd9iXaUnQYEE5Yjj9gGC4vi",
  "key20": "36RRqhEd8RohxJV2hzuDqEgjBXwmTBnFJzm7ryg2TdefN6Wg5LLCX9N8ifXkRPBSRUf8WMqYjCuUw1qAmu439hX",
  "key21": "4LFoNgf9k6Pgx4G3nu45JjR1s7BPGrH6NL7SPTLwdxzkegXy9RuEDXtC6d14GMG8ZQQZS6HfK52Ri6DPcwAmGFRC",
  "key22": "3mZTV1TYdARBebsvJbpnmWiksMr4Af6po5zuTYZF5XkzTnYxNnPdxsSVpEqpqVi7tNL8ui9E7MZV4UnWtwwDDhZe",
  "key23": "SkQyczcUp6BEvgSvfwyyGotqf6Qk8PjX5GDoTVUHakuYv1Tiz8FZQSAqsCa3gmz8CevPjb6x8wdMLfx7qgReky5",
  "key24": "2C4hjVX2uZx8sM9uRMoAMq2yCCEwN3Ae2pAJa8DbnxvqxeasQM3mmhL3bBmpJgnxudxEtxxa6tsWa5Yfa3k7Spha",
  "key25": "4MAQ7grXKHTsFmVRLjKWr2iLFNrxunJfwApLMzsYnNRZmXr6rTV7PeLHyrPYe87J8CZHtiX1Do443yr476o6Wdgh",
  "key26": "TjJaZjR7tLkBA3WuoBn2QbJNx1oXUq5a48j6G95DDZ5YDVP7nKBcdvJTrumk3r8ghhJZJTahNwmBFevgNB9h3g2"
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
