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
    "53cXMFZ7JBmf8sdTQU8NNCruCHekLafoZYEht73BkpjwPJoAqfDpsidAoqbuZapd1EfDTxMMo8mT4UpnxyvMqYMQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HS7r7WBnp9FhbGzPZyP3qwt4X6HiAoUKNSJUXBxC8fraktk9MjnapZzH7NEKpbnAgrTmoMuWgdvohC7H8tYB8X8",
  "key1": "5gcFfv1e51BpgNE9jvtcjwrRxcoA8R1FX9iwoC5pb7aMhBCo6Fzc1e3aPNpToMGMXpw5Q7U9mn51NbvYLYG44F6w",
  "key2": "3wNXtzetforafKb5h3EY6g7uoegMxg7UFQb4nZZgNZJN6L8TvFNfUhnjNwridiuRSoEkS2yzGRhF5v8kY5X6MygP",
  "key3": "2UxmLgAqrMxcH6GJzLrTpX1cBw3LLEHJE9YgHMNHLxMEmAh2BTWot7VTmtJJqK5fCktnBkFXpqDtfLRAmfC1SPck",
  "key4": "2VWCiwjTeYDLsbePvWhy6XVMfHfmh8cN8apbUXnFu6AehC8L3tm37T8S3ZxrhJnTNWj6tiS6qsYvt3Z6RXTZNYoT",
  "key5": "XTkpqh74U4e5Hfi7Wn61PMtEozKxiaqPMxadNEmsWRcT7A5feqq7e2hvbCFtsuuzbKM5n4hLixJMgp2Cv71SjUu",
  "key6": "4NqAy8n6s1ybXsiiRB32ga6wgQqtgUwNxHSbyEGRa4hGdp3gJqZUm4vbC2tjED2ChSs3Vw47PiUbn9HNSwkLEGL3",
  "key7": "3gRHRy5EpKDNYywFYWH9akua7xi41F4xZDJo2xGobUwWxfKhtRsdh99NPqGHzPHKweRJ9tnASDMGTLvrNtSe8ADx",
  "key8": "7pzUUDpBuYHS9k8CnKAbNiiRjaV75neLE5LzodJKEoDLWkrQeuKb7keGGoaVNuNdY3stvUdrpeVYgZ5M6korbki",
  "key9": "5e4VKT19MmoS6Xx59GQ3rtpxSQWU4TKq9Nzcr6EmN76gyXJzxQS8rETYLd3eRXWHpwVYAUH32bwbXqBuoyPACDuX",
  "key10": "3sVCGtLfLpNmEqarAmV3gXFt2idTTSGjv25tb4MXJGtbzCQzuNTiHe6zvgkZDUiDQw8DnP8yuGEkNbkBZzSWHpo8",
  "key11": "A5jaw7VHKdktZ7jbdteXnCjvGsRigVKifFHH7W3pDEifFcNARYC72s3obDgTRorg7K6P5LTCqvwLfNu9aDz4M8Z",
  "key12": "2SK2m9WL14PnJzTBfxEzri7Hj4Qwxyy4LnvX9aBLbSw6mu6jhN8LtCuoSKGnSYsz4vFNaBkb6up69hJcfWbZLXdV",
  "key13": "22ck17ncmizrdpZ48FTRBZEbUnLduufuNDzdH4KPpeJTurb3YQaaTckkAe7rgxibvmMVixYq8tRpGFvYQkzngDCs",
  "key14": "2akomM8oGBYzzZ8w5h2LYubrJHSKJjtuybgyRQy6DRQGfFJbqiWJmw4moMWDoioxtgvSTnyAsAGxC66BSfg2UEcV",
  "key15": "3Uy31ehPRToUKAt5aHAKisDiyKZMfvSBaGfmuQwfvoUjzP7Q5k9AD2N6Ee47jNkxFfqaDBjTLKqy8wBCd8zDAyiu",
  "key16": "5dXjp4FqM7rH8NQ4mcdq4ZtSRkPUyx76LMMuKyEyzd4cqethVwQ8EmvESM5Fs4Vv1RM6nGfK89v9DbxvjuNFvPVX",
  "key17": "5hGcNjpsFKSi76s9uZBA5TEfgfQW8f76p4zQq23iFM2osA897oapS8FF2yXArn8Pa4C7Wq857aAyf4hXPExgbNoA",
  "key18": "3iPfRGPea5prLq3ae3NJTEUnoTULc6XeYcvne1uHGkwuVLr7N525xrgf564SuP7CSsanFSACX3BuUBxnHNT41tJt",
  "key19": "MGS9qPGtkGCGQjGmMHnY1kQVHc6niaDkQqHk55Hw6xJGgmEdF2hYxsYvyFNMXpMni7Fyo2drHBu8wxBxbUpTsXK",
  "key20": "4e4YCtAUxv3s9oUUj6WHbqD8wBiDuswRu3cD9euUu9pjSZpZQqJPWYoLX54Fymze79WTu7icwspTvsUyo5iEmtFk",
  "key21": "3t8sof1ndyVz5st8BGDWQLvMh4zFAE6DiHd3qj28CCMvocPEG1hTcJ9Fd5omJEdnwcFBtpR1b3dJZcSehchgKM59",
  "key22": "26GLUBsY5CA6NqEncViq48LMH6QsFXgM39pcY3Bu8VonXJVr7o1nL8yZbrrNiXxLPDaRuhLgwXmJZFph6axUddJQ",
  "key23": "3ZbUvphzUawatsBpgPi8mUJj7nrSE4YnWyjbuuPJFQEFa9PBURLdHNwtetbu3UmE42qnUoJ8yXYxSetp54dxpKyx",
  "key24": "2psxHR3cCje46pr47AsMBdcdtfL86CyosM9FUFQFZiYRUXd1xtdieC9QGxKtzMqtHpLCReRKXH3nHGShcZB2ocnd",
  "key25": "UdkJBk9iyP1E86LrrdE2Vcx1Bzq1CtVa2kKftEczLntKUWg8bkms1U7ifD5CtN2hfH9Dj7BPuL7EM12ftVu63tt"
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
