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
    "2dejb5MtpnzAuQ82HSULgQdFBWiJ5XwaLtron7CrtYZSHYPo5uQvCGKBSJwidZsoowTRw5PdwmL1du7xxQVk4BAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33JVnfqVTXPXTzwT83h3Z8Z2X9jgWjDbDvhciZQh4Nv4KaMrLeMrpwkzNGqR5EijFLQ2dK1Fd8Ko8MWe5Ck4XAUA",
  "key1": "5obGtdN8uFAqeTgZhAkJXARELSiH3MmpmWqKWyxjzTXW9Wwr2pVYQhbugsCtHKRW4SpW8pSheAsf61ScRc5JbS7k",
  "key2": "5k8WzXN2b2bepNazoBakG6EhTYmsLAbSzysUjqRAjKPcMXMrwALudLoCtcndrU6cyDz9KvhyX45ZvVGmTq6HQjdJ",
  "key3": "3dAsqZoWpzjUtqSn7MCNmJjr5n5jxQgc52WiLi9j8B5csY2oDLkpJHQBPeuNhzFDFxULT2c925Ldoa4jj8utWjUR",
  "key4": "4DD2aeEEW1As5gjYoRchwqKAumJEFWsbphSDqnC2NyT6srHhSo2NkkVJfwQsEdYgnreMUGqwNUmGuqNCvbtuF1Wp",
  "key5": "7GR11eCgVafiBNhTRDdwuqgC7RWsLgLBASZ4FHgvNSg5aNe8RBrCbshvF5tsjh35tJHNPRC2GZJLhMQLgZPgCVn",
  "key6": "62GpJigyjUUHucKjZ7aoBPXjqPemtudM1A8mTVpnPGDDDJDBVxSEnNi5UC9XkBJWviWMNyWQYHYsrXmdEfGtRTjP",
  "key7": "3363Sr2njG6WMhTcLBgygqYhdn1Xr5HBibuhqfDGFnxVAMEfZs21V989GUrCagn52AxHLjJyxKKRfHoM47EyFtjH",
  "key8": "4r7qhBUpNkaUSc5NSFSNprqn3rqTTJFxpUWnt6gL1eTSw6zyGdtiG3CDUw1tuMRuvRy6uyteZ1bYkmRiUa3WWJ8X",
  "key9": "56uwvvnoBFatsUFLM5XKRYaywzJP1oeb7Mnh35cmq5NLz4oWVgJ99eQk1USmJY2xmBAHGQ3dhtbPy4D4c6gCkPaz",
  "key10": "2oTAzNWCprrcEVVDj6qLTDwWUPgzR9tjUqeBjFgLuqMyEMMqL9CwWcWh2BwTJoaNxAc2asS5dBZZU6PWNHoGWjL1",
  "key11": "4dT1jFT3MBjwLWGpAeK5sExCFrVdWzTnjDXubhmJ3PzjhkNKhM4LznheZWNX3PKeDhQAfG13UMcSVYVYDJqv7p9M",
  "key12": "4UWTfzoQchyd83sFCDHhJ37UgtDyg8Yag2bJ5RuBM9W3cThisViPqCqrekR9149aQAthFddxTZe6BWBJceX2DykL",
  "key13": "5iDTXozCKFUn1XYBQzxPbrXFPd72hPskdjCWAwjXjkLKXP8xqb77Pm5PJzmgQNvjaa3fPEuDTqtgap5PeAzCdRSu",
  "key14": "52LnvSRLVjD6Daiu9gbNgfWddexUd3shFA5WgzUhcc5idm9Y92w11Zw2QVuEKs9UcxXYCY8kLjPAw1HzmdyF9DeT",
  "key15": "5JruFyELoivuNLxtH9pXsZ8tx5MEa2ejAfq1oizrHeJWAsMa2P5wwKbPnR8XuxodbZMYQarYK5Z3LnZivqB78Z8",
  "key16": "3YVecgg6rzZktxu8imYwgHhMXb2kYXxnff9jjxfH37jdU4LVceyVfFwkbVFh5CNppQKJujLAgGQCvonSvuFqv9A1",
  "key17": "5pzdgZ3o3X14pzt89RkgX2o8YT5EpN94pwwkYUg5VjJ1GzgrfeFvDJr2wjb5QcSdZE5PtKj6c2RqaX72aPTkYBq8",
  "key18": "SNhFKXpTg1jDRnmAf2krx9wcEgQRSH3PBNE9A9uBWMeYe3ZkLU5uevDjh3b7nuoH9WaWzxKxawu3fMmpR6ZEBYu",
  "key19": "5DBHJGzm5Han9vfsgwthWzESZ9sXzmmotRQZhFDGwcKahviXhYHfR4L6jMJfPLngPwFhbpu2fRYUuhmBAJbdvx2K",
  "key20": "EWDuLQtNnAb8LFbrw2fKoxhhtbQitVjeWmJakBcZmNg7hBzKrUfWSWyW6mdLatNPw8Wvep6kthyZ5jbCupMWMRC",
  "key21": "5wTuTMP2myyWmeBCVgYE7ZPjG7WjamuHNUsUcBeNr7nzuiEFHg5MdA22AA5xTdNLGbXHcgRa3kBxYp8bVxQUAnrT",
  "key22": "3b6Exz34Q59WdcEhwK59vniPNExXWHEZpJ31HZhwx6duhZPYSNk1A9gzYEiJEZmfNyrArkPw4AUwUqonGEn5j8uJ",
  "key23": "5EiZJ1DL2tkNSPnfiNuwwUn1iBwLmCY5mJGAgmqDz2H96tZ8q6NeMphVL7S4arqU5JZcsHXdKpViY2RMa7mJc5bk",
  "key24": "pKiK1rmdawsc3w3qYfUv55HanDdHoMznCd45gj2f7NNADZqqta5RvayBqrC5gPfz8gRVGVPzWFN26GGpmkP61tW",
  "key25": "4dPpB1QcMtfgZEdTXxouYUK8MqYpQADDNJQodiRzLzEHhqfyUecd6orFL66e95ccLMgstYaHgeFm9SBbXdgYbnUZ",
  "key26": "5Extzru26VC87mN344URaWVXH9aHSXX8o2jPnPTsu8ef5WoEz4a5pueLh3y8PDHFyWNjddpgew2zqAj5es8M3soJ",
  "key27": "fRWN5B2VB97kbYNNXuoha3yQTAeQ5NUFRNv9DqRwcCrbY9UQsd8mRMFXQs28BWmHHPASsYppHGXV5Svk9pSNQBi",
  "key28": "5TzdsUbneA97VFtRW7CRhfxJ3vURFimJCaU4Pv5PuFzpJX5emFs7x4h5Qwe8NBeeLd3kjpaUrLKWYpC4KLGgM1h4",
  "key29": "3f5VoiAydpJyWkZLn2Drdag2tofwPc8uk8cnVC4kt9bJxr1UxrPQ8VPNQhLeVTVRKrJEUECT2qfP3sv51VoDM2Fx",
  "key30": "4MFQys865HzqFod5F4bRfZSFcHRP3VCmPk3zgdF6tEBaSTZ7fQL8n41fmnRY1YXqYcVPoobmZAmfNVo7GwUvakWP",
  "key31": "3iF76vZtbsiweQKuMo5G29k7XRUKkVguQZ8rq3wXeG5VcMrBmXqJ6fdBPuBAhtwPpCR5GBWb1QFhMtdkYp88rde5",
  "key32": "CZzmC19My3hCFuD3CvU4VbAG8WD1GVZaMAHNbFtsvVqvHn1prg4a5r768RSC4rcqJkMUzrihC3snzSD9GsjFA2k",
  "key33": "65r1eyYskcSKh2tMZkV6fdQ4rHWHdPf7GNVwwnpn3CUcAkgTozySbG6XhLbeThPSwHEj9nroYUn1QERDuE45CSRv",
  "key34": "4A38w7F8WC3SL5ZxonDS5c3Bn7Sp2QNkxaXpPgj3ye8FucCjVxPBhQrVhMaKN8Eb5kfvBXBUioy4PmmFw1atzZsr",
  "key35": "5TWbhigdLZF59Gt9E82evdbHizWgLXDucZ5YXNWNnwZyG9pB1XAasdSi4ZDvYu5XG3nFaFZnYeDyKdMiWPLv91Vm",
  "key36": "3FMS9WPSG1Qb4dSg9ou3k8oc2RmegSBkqBEmKigBD5HcxM49AU6ci743zUBsqWVAVuFRstnBJQdQ2pMRs5cP6wpL",
  "key37": "3EXk1GvoA3dNP4SAYaMDWtE4VsopBpqNQa3SY8o3Nkq4XbESGw7yYqfNWfzRZsBAP2tcvUukf2JB7vFAWbQojJTg"
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
