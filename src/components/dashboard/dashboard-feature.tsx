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
    "2eYr8DnfA2AEXrRDiyVNTz2cengctYdurB6353LdQaTiUrgEBphfm5FYwBQcMChwGjg2diuvxQGvFhqkBnfnD9Vh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49XWdYV5RPxzfMwujTDWLNGMJapZrdPdk9WLbd9uiGS3z26pXyS8sg2m9GvQPMPoTCYDprviD1xixNNAgLudFMdx",
  "key1": "67bDRBRscoGcSgoydJrjEniQd85DosKSSL4CGNZWxREghkKi4f1mY79n1AtwapiBiuVmeaxawQUN84DwbPg5wcvv",
  "key2": "2nqnUDu78ieBikfa1nomtdVJprkLDYrN1sxk7AD3e7degPZm7p47c2J6Koo3Gb4kCdezuZffaDKYoQ6BHnj1c4y3",
  "key3": "5xMJSzut7Ns1omL1zHVk23ZUY9uuqCEcn1au97YqxuHZeyBZVy5va8cCBCTU9mb9G5RyGBYtyPozssy2JuEZQARF",
  "key4": "33jE71nbG4FvY3rVAoaY7A4tJm6zsaazifjwuDMaMHKF1J5ubx7sT7QFKHUPaFSLMuyrb8tSSBzWnNjP9FSyDWY2",
  "key5": "5SdtKwo2cWkT4qnH2BCpgUSkqNxbEr1LXJLUxWyKsqfhHNdpY1ho1D96YeZkDXiUmDzhvtSNCTNXyd5SWumbkvDv",
  "key6": "igsWhQ54dRqYgyM1b4bfqYrkZBCrgWh6axzY7LSAqL1n6xajpz3NA2k1oss8VNnEDCZGsgQVxK3mP7HYi9Sc9sa",
  "key7": "5z68SknLjFDhXdxnwteg7cYXoLsMQrFnsC4kME7xsQnaYxpzaqpzhjSLHp912JiMRhqQ9DKjGnaEaQWkpPLsfNYr",
  "key8": "RqFsZq3jpesCdFf7B6mST5pjAHVxaBduVpg4VhsqqyuVDrELWerDiQwafTtF9Ny5AdyywUMYj5b4bA3LjQQvey6",
  "key9": "3t3NPH9YxdDUHUUKXVKh7KnqzftMJ2jwfG927sCAHXBvbaKxKd4HNDzmAsnSHEZFHwdA5vDHr1A7esL3W2avrsT1",
  "key10": "NY6AgoNncyKy3VZtr1rAKfXfpFBKuRvEZtoDC8U7HtbfV2kYmpdAkyzVrgJP66cpK7MmFLtpzZVNfBVm4bXhE4z",
  "key11": "32jHyLw8SNFducVkSB1JEA8tL6z1gVHyuuK2faWP5f7gm6w13twqjPzkYYQzgxGQLxpaQ1cjBAeWHj7uXCyTFkwq",
  "key12": "2kJkkAWWjGeSXnDisV5FZJFspGM6YRDgKtxN4dDFZTbBSV5toKy4YAsBUUK8azCoi5UE2bCs8rqZLciuyxEiCKtr",
  "key13": "2WCyTuuPmkUokquGLNspYPvq6e8uEo8h7S2yY1SNiubxB2zE3Y7WnEX7EgBfMETuCB8FUD3w9VTfE7XtGBkSsfEb",
  "key14": "XXtQ9mFWF6PzhNPv9X1cV1rDQCucRRSA4Zzhs4unuNq6GBAFt5rZmmaSzSW2enkd4KP5WeNWTWz2jNoM1WMJxj2",
  "key15": "5T7Vu4Hw6oRAF8vFGRzeisAcBJpB3eXPYE17ETmxufJ7di1ENdjV7jMLa548jcXkkeZi8QqtBQoF4iQRhgJc19Ti",
  "key16": "5CEmMqKWbGK257U8eZ3TUQkMMn52zTwgaj8ksiL9XnVDE6xQKvyLkWAFQ3twzk4KC6k1vsRNXi8rrKv9JH5sDc3Y",
  "key17": "4yHRh82pX6WeE3cNbLhVeVCyF2igMemikzcgdfD6mt1RNgRUg3Zn2qTALu7u3BrNrd4AXsP3dgNpE4ahJaKADbJe",
  "key18": "3cB2p6MunF5E6Af8NRxmhX9dBrVvpvAeG4pCjsSTjfokVJuTsqyr8KZFHwEuMPYFFjZLznrFcJbN7PsPTm7QtFGJ",
  "key19": "3ARFBC9553Xx1YQr1r8YAS8Hq5YaCx9pyzcwbmx6o8UdMvtFbV4ZvABXUCZbknsr9AjxpSu1sbsAq9fyQXZunPbm",
  "key20": "5xqGqzcyAUJZadFSiv4E3MhV7Vru5qFjT4UTns8TfAVjkWMbS2n28HBtygssBM87zW1VfmNE7n4c7gv6YwPv9QDF",
  "key21": "3r2H3w2HMRsgaRH7m8KYQzutyQmP1sSLifnf31ZZjM4wgrA2mdTurZ4bmTKoemQaBLkNzjTkifrxtLN9bcXKPiWt",
  "key22": "3wD93xcD22cY4h2DAsEBkBTQk7hgxANiJAE7ja29noQZqTswL56ATxGcn6682tsCBBWimzPQSbWY5drKyawjxE4z",
  "key23": "DucQidg7SpFiZKd5HEVLEpso2ZQEiNBpv6GkSfQetX4AMTWkstEss7PhpWXuxNs19Jr3DpaLACfbQ4v4VKBzrAF",
  "key24": "5BBDdrFSJpHvNkYQdWEq9c3rFcUQNaxD5Un2WB8jCWzztAjYxhAYQ5tQhGt8DZw8kq5CbwoDZJ1Rwnn7rVPR4bTy",
  "key25": "66gMgZwkZAyUFPqVY6b5kjq5EkLBRRiANJNetSD3k6YGCAwBby9igJ9VFfayzwp9rUc8ztxoJX5FSxRhKfEbaawV",
  "key26": "5FfG4F3sowknLXQoFCsXXSq3fANZhTXSfVkJgEnFGW959qpRT9i2kWR9nG6m6MnNf8D44oc8VZNQvbSvoHFKr8BR"
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
