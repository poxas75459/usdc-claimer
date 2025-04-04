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
    "3hTM4oKzLu9287Hx6S9yHUqzW3sWuCv8qjvuxE4sNFuxvK3GzRxEqFWmWJjw7djW162nkkWw14FtiAgPLESe9D2i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "373cxquAoHy1H4b6WWJvmj6H2HnmKQ2Cbq3E9WNRwSfSoczSHTxYQTtPQXvbpLSsk31H1vAFU8VdZFLPW2MdWE3g",
  "key1": "3MUqNCXbJbHi37AsG8hzbj1wnDpSdSRJSt8KdUf255LNEZThc82mjPyUsbcNCGxK8jiCTw9qbg1zHjSz87W8DJ87",
  "key2": "3Fpd5wfUH81dyS6M8S4n1o2fm5ZzhzXBMGKvtAJkZFikJzzwEGcpzmcB1uqnscEZTDiu7xsC3gxFGcWVATLFj7Gb",
  "key3": "3QBfHMXRAXvQMXgR6JnVzFamuvhd6euNCWFr4u7K8S72BGTvjEvhXoDwA5QAxns34iKV4o11nowZ8ZhmcNLMTS9s",
  "key4": "5YkX4MVWcwagbeBrDT5qij2rSRv1GLKb9cjuWULRE1F4q4rf1KZr7k3wuB1tW68JJtZfzBUfqsuqtDW2oQpx98bk",
  "key5": "6392pqujurEeJXoGQeHDrPNzXDp1dq4mxMXnSDzwgmGWWPaBT4PH5wLxq1r5PiRCXsAV1KTneVEatDpqSdJSpBtR",
  "key6": "2i5ubY4gzR7K4Vbsa4Lee1tKikCRASXGQHzGaXsVA43TZjf8k7FaZSJJjacizhiiH6KqpsnmvMAaXAjdQsr3boxJ",
  "key7": "2anzSqUjA6vvdsfMb8cG1qvoQVcik6j17pKhEfxGZbgBDZWqVoBzNTpZiYmupQgiguuQHugh2n9PMhuncofVmCGo",
  "key8": "4e2cxFQP1D2wbqpvtJwwAumLwPjkDJc5NeF9cUCj93aAy49zHFcfq78Q4TxBzKBG5K7pje6ynuogdK7Ab1ts6nxs",
  "key9": "5XkUY3fJ6cvHUUexzU7eu5e7fu4JGAYFtTzYjZUZ3wEAn29guvyHozBDctDYYavefH5KVQfPrkeAEm7h5ued7gi9",
  "key10": "2vyp5zWU6X3o6wkk2dd5k9oa4n4jnzQHjVHoBwa9ogVxfowNMWWuG4C5CuyBjF2hRMVRA3Zgf8HDDM4JfDgvinkA",
  "key11": "5dycb5B6dAWXnf6aH4ZBFgpfusdGHFBDfawYzxKaPfUderS4xyjSNfRTAYX58K4YgGcU5pNfXbGzDmTAw1GKnuDH",
  "key12": "47boCr9apUZXWvYVETBBWPAF5aLURXCGmTMVwyd3eFNMKHeSPEUMvRfJu2WgP4XXsEYZW8SCpWz4Ef4jAWj4br36",
  "key13": "5aBW1qRhWEdRgDbUdjoHY6zj7k8EZ1vmdiuFtP1sxKD5VY6qVTGpbV85JjMNs4zF4ziGYcpP1LjSmckqzuMCNp3j",
  "key14": "4VpDAg2W3UVhCYYQym3U4VjZjLa5tErnHSeDEudQ7EmuH4hLtbmjVFV8Yrdttfzeyxji97tsqm6DFBSvNzc5XJgR",
  "key15": "22G5eUzpb4G8D9dXXzGwqVkDLeax3vbDBGYsAsz1zAVoirTphrtTaQaFf9TYodssaDVJ8CQvNJEft2h4XEdzB6nZ",
  "key16": "4BntjuZzwqQQSoddLtk7wLazUYnKNTJafsGZk2BdocCSHUV14xCqMRoSLBmdjr2zNv9hkFxLVTjYFDJuzkA95WNR",
  "key17": "2fWesATmMzKrht9zVKMtvNwkVQK9E3ysVd7x8snKPqPTecJm1Pn9f5KqreQK6X7y4U7LyPvT2EbYwQhskPzszWy9",
  "key18": "3Gii5VVeBZo8dozqdAW3m3SH7VJJZ9CYesetVc4mqH2y4SgHCYwi4pa1KvRdHzr8p6JeyyGgxCH4JppJ2q5XkE8P",
  "key19": "37KZAaSRCk9TK7PqERp9C54FidrZ7MvVwpsjSTo9mgTx7JfB9EojsHJxrcitm9jSpfCdQwNHRdnkMUTP6Xtyg3cj",
  "key20": "65FXJC4gQ3oJa7NNTWWd1EJV9DAsApNBh1tMijgi82eyjUkJwRujZCffGVvZkdJPxqnuwjG3qDj8aGJwBcjxNaei",
  "key21": "2QqJuEtDPUABMZ4evQz28ankpkfQkPpzuxZiXvUZ2orPqFvGbfNkSrA3b8RMS9aJyu1jEWsgBYb9p4QqdkCFFWif",
  "key22": "2bqm2zjHnV8UDFnxLk2jfUzcYkz526HUZ4TTTtiZ4w7tZfbbKnMryN8Zcte9M7dYACbU54eH2E6iCKUUTY3MyL2D",
  "key23": "4c5CAv6yWS3PK1iqqL4yeVziwhabANUmGuy6fWpCG9XAvqkHECfmDZunjHEYTKBn6H1GvKQMVsNCEB46wbUGUJWG",
  "key24": "382Mzxi7jFXxamHbCPzZbrtwCNj8HQyeMNZ7dsg8yjw8TQdDjShqatXBARWRFLVaEhCbz6F9GahbS6Gv6bKaP8eg",
  "key25": "DJgye9VNjts7ZV31T4c8d6mv3on85Uhsc2r9NUe187ggX2vPGki1JaokNVBQYfrw7ZKnG3f5QRapVC2ogJvHZFW",
  "key26": "bHZfnzyx1JBb8eThtuy1wUvNA6wwjY5L5TKSyPNsZk6uN313ZMrkZqxLjBzmbNhNjS9os14rhjTTTtmDHcXAXMa",
  "key27": "5gKLcu4gniQ7nazTyKAC8k6w1V6twTuhLSAv6xGTeM23C1HEC4e3dYy7ZpxaV8Nm83ve6ysMRLRH4CRSQytmXsiB",
  "key28": "3NCTo3oYyqntAKfFNcPP8ohfDgRvurdy2bQWzFrdH5zMpgGYk9fybXWTjDJ2wKZBP166WUaCCkqFvwymgEsbM8VF"
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
