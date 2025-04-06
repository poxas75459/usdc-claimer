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
    "3DZKbioURuEdgNtXqaqrR37xZfuTjZCFKJXftAg4z5j1ekTeJryiiwuxr6p7T7Tma9tEB4QrarBsqqShk6hLjJdQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oLnanDm1uREwgyCNroQCtdSgGRvddvmZtTmY5L9sTo2DewCwVAowVd8wuvmAbvPTtnD7k4j99g4k3mzuza9yQvj",
  "key1": "5D7cZnudYfrsHa3GZArA2sMf3BMAAxzSy644wfnPXR274fzgubyUgy4QuwPSw4MN8NwaRrAC3ghiYgfrvtUjR63e",
  "key2": "4f6RoFExwkj7mZiq4CqKbX7jc3b5bncmjucctAp8xDANbKe863F9qcjLg46DR41nX3tqjdPcmr5RgpK17G9k1Hm",
  "key3": "4d7ELR5tWce9hSjUXRM1hbJAfiukJzN4GPVtoX3Nm8NrQY7nFVUb7sEy4MZUmLnJxmtf8mJW19nhmzWqPZ9BU74U",
  "key4": "4wydF97VhkGVCZv4He7eNKyq8ujgo8LsERsnM5cM8LQHijpWH2yMLS6jqjdHMPxGCt6UpWT53pcYY3d52zvLgMt8",
  "key5": "3oJmCKsdAf7em7y6idpMiMrKeexKFwSQLjuW3jYUQRz45ugojr69KEtBSm9jZxeSZyeWXNMmjWMVVSRTMB6yf4xU",
  "key6": "wK3ufpj9gVabYCc2por8fVspixoYArJPUDpe7rA3TD3jqRVHE5Eb9GgCVE4XPDRJJWg3nqSvTyhcUmTcDXcHLE7",
  "key7": "3XprxYmM68YzEqp9SZwRjR8saAJ7giKHiRQkBh3sPewgZ83Umbgbi52h91cNUbNPwvqFstSckGx1W48Jig2NKSup",
  "key8": "2SyX8TYFevpiUwLTCphpuse2oq5GmiqNavkfau8jML88CbfP5kzFZ82Tb48wLFqE6g8gKUKR6htiiosNnU13XhNz",
  "key9": "47Q1p3WDaiDGmHQS5WjFuopYPcdot6Y1uaaz2fDTcGtta6HjHzmLxTwdpB1gaqgGPfoZqkN2zxG3edS5K7fSFyC",
  "key10": "3ZDDWHZyYStDgZ1rRvjRBL2i6kUJHuHdJH36fm25kmSWMD1vZSpVGDxNn7i93BJaxH83Mybj5Kxjcg9FAyZ5y4Aw",
  "key11": "2tTn35nfUZRHuHzCJ2Pk1e9fKgNdJYKebEphVJcgYLYxoszwBCCjdhZhhf7f7zy9EeFxuSdSrW1YUz2SVvVyr3VE",
  "key12": "3a3SpDLEWhAz1vArkFKMqaDS1RxiWr6w1DErRL2bG1ouS1y6Ji1rjYAWrN3ijSsdNbJL2As1nsPN68znpVFnExKg",
  "key13": "3pcpgdqhTxr3bJhabprmxiQm5nRNKotnjqKwFnQzZjS3BJdc99VqUcCwEQQ35cUt9oD6fXn33dW89PoCEUQ5egwt",
  "key14": "5FATFtsQCdGRm7R1Ky2PKM2e9XDrmEtvPRVUi6LPtwxFFfkHSw6Ycou6drb1ePdA4W6297vaLpwsCFxEtgxZZZpf",
  "key15": "4QkDyuEPLLeWXkHeWcH3TZnbPFsbZ47aGPhLdGDt5deDn1zP6PzniubPfmQwqTqakW9rPWnekMHqt55VTJu1quha",
  "key16": "5nLbQ3y7LvJ56A7GbGu54GPkuz21xbkJCVhzKJjVk2Q99M23TwuXfERCSzQc8a6YEZhgJbavAS8dExEL9m4UgG4",
  "key17": "5GD1LLxwjoNJXnoHrzcUCpJZg9n39CfPXnrABueR5AgP5X43Fc4HUNBKeiShDeVc18HEjj1oHFiserhvWeB8Tz6e",
  "key18": "5poeUUhaivx4c8q8uRMNQBA4UDSPxXY8SXk7V4wYjfCkoxvuSfchgcj187xgW4K57EPMtQwbVJy5j9TbN9LRLeJ",
  "key19": "4J5seF3t9gbVUfQaJFYZJxSiMFw7XcGfa1uVjNptePzLqabEPStCMXbmeh6UxUrGhxLYN19TXCPEbTJ5YJg4RmhU",
  "key20": "3du8zsKvSKwQtbeiPCSS8W2BACgcBEJK9CEsMDKe5FeZzsE4rNCWYHpuPoRpBMPsdCZZXK8EGhfeh2JYHVcig9tL",
  "key21": "24G2vhJd6cufS3tiHrAZ8WUV1qndWiewCt8fETrpGnngE4choxQKXCvM5GgWpc6mc6U7nr2fSacGpS9c8decUzCt",
  "key22": "2FhpgTMtA96iowWmFRpywnMwQo3YqG2WQrTDqgXJHFdHfyhvVPZQoEZEK4y9PQ9MbTJYCW4oXEtjEfdCgi7zCG8X",
  "key23": "5YMbKMX2NWHTbM1qHhifi1pFAc67YJX6gSBwUfiZfsYP5H3RJJTMRCQE14YW8xE8Az2w5SNggDVRVNJGZTGzZdXf",
  "key24": "3f8Lbku8vSRbzdWtuiJy1G62iWzaomvnbDejso17cFKRehcT53F5M3jREFqza43reQiCGzPC8ynJHdEKdwtdDmFo",
  "key25": "4CtVsdApvwJvQYK5CoRccfscHiJXRQfCtd1GUBLdeMgXGtiSeMdErDqQW2TEyQPcVEVNZxHnZTKJZ8XoKaa828dJ",
  "key26": "5KjT4MNKDExRPwBSP4VwZNHDJpqoBH1mSG5Y5yogoWQKc5AHNfzavhvajR1ysMKGUAEj9tadQJsfz8ZJ6ZmjFLGp",
  "key27": "NC6T4gP4tXoo8nJ9AGKtZG4Ncxt325REizbtfE8LomEHiQ6vRKV4mKamgiD4WoUTJ76Y95phKYmPtpqsiLskoEq",
  "key28": "Bp1V8xVt6Fbfv7GwS2Ez91bFpjfGvCaTd4pQnArZFaebRW3W1EoZhy8ErueWpZgkNWg4apQKyeSwiMNRtARxpmN"
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
