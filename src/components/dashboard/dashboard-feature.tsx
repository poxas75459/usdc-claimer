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
    "5aPeVG1KvYEHqTwMnDF9Q1FFbbb6gaL38BSynACY8T45nSfycdG8AhxF7SpvAozwA6Q5SKZ6hQGRD7883cxB7uMu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wSPCkmZU38htTokcTwLKYWzkZzWEQSrub22Jpj6fmNs3GYjZc7u7SB4tZUyM3vBT1TnCnR9p14TyYVH97SLswuV",
  "key1": "46S5RbHMS6mW2UdhMoqaBHwe9FUvNsrsiV6zsmWPb3gyYQM3V8gNfKsLYZefwwSnE59fH2Hcc7eVjp8VydyZhXZz",
  "key2": "X9xCUohAWBg6Ep7C3rNDuzccoZjrNC3TYZMNmwQYJHmq88QfDsSLWVLmHNhXTEqr7EXVLLdMtDFZvcBcwW3b96n",
  "key3": "7NBwtG39Ly5pZZ2WXueetEETPDqdNXUjvZ4idRVod1JgTYygb7tQPdAdCjCksDKoLRWrR6Shqry7DkG4QzhfgZ9",
  "key4": "2u2MBvUwLMMb7R8riJBVaigVWNX61fBEhn8NYwf2uwDxJ2MagfftpEtEbdKCeZZK9ogZUFL5zANivBuD2PDUMECe",
  "key5": "C9Sf8gDjy9DvQ3HyE1N96dZTaEnsgrN4UaDWVMF58K1ThVmCWoFxYtnWVe7UgqzKtEpSuKew71DtLNU75US6wz5",
  "key6": "3B3dB8uyoaWSKLt4b7PrDoBV7AxTUViQjmxv1FZ8F6gAUXdhEehDimD8bMAfTaubYqn3QmAZZ5VxPBoBZY3V4krC",
  "key7": "4DFb2i9dapeW3dsQvnsVcKq4JAzwYwM8Gnqq9JLM4qeSoc4R3R6bbzniMJ2gV3r9A2tAVJzPsWoidtz25MR1Bg5M",
  "key8": "2X1SzfSjifQiF7iWqKVnsej7FHNcSb6AqfRJtT2Vkqxzie5ue6YFXBxC1ZJrnCqu8MppxN5XMRjjCUHAGxXS5sfa",
  "key9": "2KgCSSp5ozUUB2W2YbawAwd1CHTdZCG14oKiithgeWuBgWMeSWrrLarXrCsgBDCbmM3MTXSF2uzyisqT8p2G1jQN",
  "key10": "2nSZN1GvL1TbiyovkhQCGdfBrsFbe2nsbS1oaFqgkXkTwDKdCh3VxbNd45nkBtVKmWTzV2bHj2oq83MsK1Vuw4S6",
  "key11": "cGUZyJ6fQRi4gEih5XJfck7oqdESFJVW5eUmqdEZcmnvHLWFND8ysHcoAcu4uRYoooc8FasqYgGkYd9mvxwDnSh",
  "key12": "4L8UPZVzeNPpMUPYy5PyNzQXaXX59xxJYevxZSNaUxHe9vWpFYHcdYmVXSQJPjX8wxZJKjjVQEendDDEUGiHC3fb",
  "key13": "2sTYuEuBRhwmv1et6ajneGgSRZeKiDA2pqF53ZFJRJoM2JZ36RBP5bDZUSUSnbUHYenpBq2j5vQ7kxArWEYzExSQ",
  "key14": "2DiFcLg3KsWk85XYNFvcjFAvataRq7vwYuU2kRmMUf1YnCp2s43BtkKuLpBeWJTcFwj5MpYMFE1tVKMqSDU5dT9N",
  "key15": "4dbNZsUj36CqJfHRG1b5hqBLmwTNYsdviXp8BYQDSYkeMnGCpBbuR3CLjyfhhRw5VzhFW9BndzQocZ2TsA2SNeBn",
  "key16": "678hZZhpKgtPoKbtgj4VECwTRjmL1maPMZ6TQxJdmJGNyZAq86iYQGA4DnojdraGzmPEDyxWGz6cQuZdXzHcGcHu",
  "key17": "A5wXWg3iAzfpMyJjL5QDcDhpmGn5PKn4MYQs9QD4777LjytHSSdEzjqR62o5Z37gsN8fScubAVD6y6TpbSrynzP",
  "key18": "2bePzaFrWhxjg7op3r83aFEC3EYj29Qx6CaeR2PwYYRJVsrnTVbWRSAMhzVA7sVTsTvSrWAqsGmVd34NNoFCe6Cc",
  "key19": "31NsoRoqdqt1zq71fvVkZpqZdgKh6okangwkceZ49bfeipLBiWLfqzfb1h4ondkmmCr9o5DJjm5PXRnpxPiVXo4u",
  "key20": "2jf8DjDaMmmk4UtbAyvbMgVtzNMday2zYfoaW8w8kxrgbAwroeKvHW4nwRoqfHvkeypr9GtMijj7d1FY914jQSdy",
  "key21": "2ogFNtSMThMEugW9AjhxEHpqLq7LAdGQ6scgNWW9VQ1p4rfHyZsWEJy2MoDy3AVUADQcWTKvqbd91oqStWETagcj",
  "key22": "2ceHQoCAA7oTnQjDDuBLmfHCYDe3sNkcwAJEye3bbL4RzZ464hMnSZGJnCxJv3VUXryoNj2q1EGgtUjgpiWFGc7q",
  "key23": "5daAmFoAsvgaW2TKNqjGe74Ko5rh5fFc5kyBmLWFtiPq6Sac9C3E37k8yjaaDdUBnoH6w2dzA13YEqCWHjEVoMJg",
  "key24": "61Uyg68dVeEazchcohcHqdquLH7srBy3yG5MwGhoM5mv9h6nquFmjnmPLmZGfx5WesTqwCXXH1iJN85TmXghrvck",
  "key25": "4GuoP8GQ32rBwDfTYyvYzAumoup9fiCNg6esnXdH4qrmpm5CUqnYSDe9P5gMfdWkjC1mDpiUBGskb4qzVKfVBemD",
  "key26": "33zMrbT9m3zsv9WH6Dx7Ua46ifyK9YCc4ZteKyivZHhiZHrhvK1BHvD2q7Q1mU52LKRkX3GhCU6whAH2jrYk45TP",
  "key27": "4Deq2mapJHNKBYX2QPRJGzTbuMXPi7e5Y1CkjWUJoDHQNeYbLSf5KxMQ5q9CrYdPjxwZBMFdjpvMVkgZyZqx5taA",
  "key28": "4hfUDuokM1b5yW4ufqa8bcZUQzAVieS7LQKPYv1zdUcRBRHHosm4z9qET1CX6A5gEnTUjZtuM7cYX6H2svHnSKL2"
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
