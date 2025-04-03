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
    "BV96461LJxCKLkzJ9NCDcBEWPAuuHiqwWujKDViqUh54ZzgmumjYKgru81agsAqGM4FBYBfbbG5HHJSqscgRAiA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CYG88naiPsvfbsanxSXpwUdj2YHGn23LUPAbjx8RLbrpX1thfYTXHHPi9nC3XvMu4VqSdqP69yfbZrLuRW7Pe87",
  "key1": "3vmcEedRgKvfRb6gG4wiPFGAKiRBgVdyBLo7tTTNEojsaWizZpqvMQpx5B8au7rYKzaiAFrmwpKf4D4QXi9ihLTC",
  "key2": "4AbUF3QWtkZhyNAUPJWYpNF5dxq7FKx3JkB28z6aaDyZea4vNNgN1ifnaJrdcSJGj1Kj6jjYYD4cdiM4oHkied19",
  "key3": "5FomRrdM7jvYGL3qhTLLMNCJNS3UU3JDydDfoF1f5w1woMiG1JANskb2vhshHKJCW6uGjug3zcY4WoT3PC2SBYAT",
  "key4": "5nfBgm15pTUaiuMd5kWDvT7x3xZ2z3EjePJLMhkMFBPYob7t2UsZdrtdDMTsCG2N6RtE2mGVQeHJVtjZa3tAuzvc",
  "key5": "4ioGuv1HHGE3p1kraNNsvt9mnFUw27w2Krg3K9p14ubepmCbfZFkcVWDG1iK6timSUiv9RVjCAsqdWMF9KDuCdJe",
  "key6": "34j9XwXpTZpGwjtkNXD9hAGwTmZ28bc5FCTVjFmEvhsAggq2UPC1yKmyU22YFHHi9ax2JAAwdTYq4LizQcZ8wJsB",
  "key7": "2M7PPo6xoVGro5812rnZxwjarFzCt5GpWVVWqAgF3wNRZgXqZA7BgK5KnfeC79aumgRBk9etVFUXGYxQPT6oyBZc",
  "key8": "4r35vjn3NmFQPAZBjuqViBhPisbHFqzysJSY94B6hDcbUSvC6kagbBCvroELyNzpgHkuyDheVC84Gq9mWq466AkE",
  "key9": "rUF2iubbBSVf6BR7zzQA2CEZgnEJ5NFtwPUXvac6cNUXXk8aEe15f1xiYkMkwacxydw95ENPA3BM5uUxkzpn5HZ",
  "key10": "3u6kwQ9d5MiUn88eAmMQpQd3Frkpsewt9ce65wa8bSyaFNChQ27KgEzFnhCCnQUCvzTKimcr5S79K8PfB37Xn87W",
  "key11": "pA6DE13usiTLmbJFWCNGBrXKSiYw1Q1QKNp7YKHTFHPWpE3AwiSV1pwnb4eDN7cCT2szP7bx9FL3V5hfbvxUofQ",
  "key12": "auF6cvhZrhybUe6GZSHGCunyd36Z9J2opbeS6b55Ci65riG5Rnu4rR2fg2PYpB37yESeuGztaRxDwtwL9pB5Su1",
  "key13": "4dGGB6Amak7vNcmYyLnCrj5SuuVd2YL7Kuy3MgFnSGCKr8y9CsM9iduBnLc43c5yr3xcxwkJLBLdgRbdRRdvKBF1",
  "key14": "2tMonWJxo8N1HJFHgvKY4o8PQ1beQwxdgjpBn9s5Nse9T7ipRXDYNE4P542qdghTpTB9BmTtaUiMTd4YmzP2sWKf",
  "key15": "37iU6knwiLv3RDpLZTfyXSS8GEqtCWBZK8AnaBpAdSwR4QksnXw5Cs3e46asEhKmWzYxaxg5Wakm1pDkCQzE4dfF",
  "key16": "yLds7A9fYiZvEaJZwAJXUR3Qb46PQEJG9yWTEDftLq5u57Ro1zhnx2cenPgxnKc7bfwR9CqmMRnehX2CfWdckfE",
  "key17": "4vSbx8MxHBMhrGswkN2Zv3uCD6Bf1Mpf9qDzUbtrodvgPAG2urv6uVBnJx9hv5qp7HpmVjLiMpy7J3nCuwoA5iZN",
  "key18": "4xU52qPjzfaTpMSVsxddiNXEDeoiaVha7QxW2TWboPayqxsGKxmy4TKAP7DxAAytjjubinynmtenKhqzyskB6JoZ",
  "key19": "dKb4D1nYDiUdu98nkCNod6KCjxZu1aiNLpJG6ge3SJUoZZjzkY4BVQ36pH2x8fsCHeodGEYy6tDJhXGH9GtVf2Y",
  "key20": "3haVd3q1QJfKRWzxkZESGW4KHmwKrBqPTPR8uzoD2gcnbu7r3G94TrxYXoSugYT5QaCcnhgUPvibsWYL3fgcWRJE",
  "key21": "4oktrsMt1oyXnxw7Y5onhPQ6Z38cDZusJer8b3i5rc44DsYaQ5qKQj4pjrJKBbuhwDg9J1UqA6kr7UAGhfiD19sF",
  "key22": "4r4knpdHsxHKXNHXvvSCYKNAUShbu9yuYhRmGc12ay9ksg9qCiTEgarLv1K4fGH93mZX9catojLBh59idWWxpGu8",
  "key23": "4eZ1RBbT5kfDB7FpEfqaaRmYjf7Pkb4MiRbZJKPDzsjySd8H5NVeXacDVYVdPokd7kVcwq6qnyMSYpESMgnyzDAQ",
  "key24": "3vz6vpxH65TTzxtNwjTVroDUJKyCBkLdCcUfuPSctX9bei6DTnukdUHExJuNfL97Ds3wJ9uTfTLMURoT5iAR4koD",
  "key25": "pKhC8zUvrzYSE2n83uawAqsBN8SpkWcCUVwzUpphq2GwY3pVSNh7YCCiV9qUQ81tr1LPmNNB7qRxi9CyGiNqEAB",
  "key26": "5Rwf5p3Q2FHPR4m8137e3tsmRWQG885UQrEDCWLNozj1tdUoJKAP1rRYjBYcy52Y3GfuJkX5d37vzJLKHoyUr2Dk",
  "key27": "4ADfShy6Bdm4C9e8KdGCVuwsAZWGMt15Rnum7VeuUFePnhcwNkqm5krnYgv4NsPbVRiLszDnzE6Vzt1XSvAkP6UL",
  "key28": "2CNWZBG2CJkz9sehrmWsKzMkRTBMnM9RZRiw1cWq3voADfFZ3biQmUVwndKD5TQnDwjf5pwqhTJNQggKgAPEGfP3",
  "key29": "5gXai2ozTuEQSong6rjtzikCrTDoEXSX9XNu7R7bYPejadF9Y2FHEm4nw7tQjsTm5u48dx7AwBqrVqhRDwzTQjZs",
  "key30": "4anJ1y69g7Avh3aMDSByqEU8fYJBn2FmQVcw6iCfoysBMpWqqXRaM9nYZUGgptzda7H3q81AVear1rYA6TBPucwD",
  "key31": "5f5eHZu3wcechFZxj1uGqUPaR4zDAMmDdFCRo2KCRGSgub6XJt9zaW1JQpNq4J5CUjRFfduMcn1tzevAAQSu6WiV",
  "key32": "hBaMTBnXUzrFNyTn9MZgLnLPb7Jb8gjS8CyHTHaW293eQxuyGQfd4uZXikYMMLmQSN4mQNsvtZkCSyrjL1CKdwZ"
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
