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
    "4SSctfp4vQgbMkmtruhAjpDdHWU6KSCqrZmPBoeuMtGX88hpk3iX3wVwmh5QWT8HzvLGm5zghiRMCqBB64bcWgTo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VYcKx4dZozuzuawXWHpFeeUwXKrah65WEychyUPXNR9TeexgdXfSvi2P7VP9Y8RFX5NGafHUA7ASjQtfgZDv7MB",
  "key1": "6FcAJmCaHqN2XA7M1dHmde5aJBxHyQC2deTyCD5TJZYHeWhhtguYcuNoPV4Hvdd8vh9ezsCLuVnZD4Mor5wwNUm",
  "key2": "iBdwZxbTuHx47G2ggm7q1L98pvV6YHCZUxYKMHLy7EyphMGz23UDYCLsbQWEgju7vJssyAmH9UFCUuwcw5njf5B",
  "key3": "2nrNMgHVDrVR93vSR3kWRpooo1etkqpT4NUgXv6VteBZKdXfZvhBE16cCr18zHd3YwDmTuaug5BYZSCH7pixjBfK",
  "key4": "5Bk7a4EM3FLPwmz5qaCAJnVERzkL5pW6TGrXmtRb8MG8cayfkFeBWejrtpoC62r5TJtYwTipPzFRMu6bunyuGoq2",
  "key5": "5JQfTR75Ws9WRThYVxLTH8btoeCgEBixUYk3s7k3P9GM49UofKHegEeZ6r3fNk1WCqAbcf5WNJSZv6euMmH1gD7n",
  "key6": "3FqxxRyvykRMuo4jD8tekb32fg8GvY77Bf383LDnmSi5kDTEoFX9WTjto3ht2wFX5KnBvXuPKRrD51MkDnSrmzwy",
  "key7": "2Ag1GCQvsxknayjnyFBd9SSePtNVTJq53sdj9mdyL4K7qhGbKrz5Xeqr4zWVtEeJikQZLZUDKUDAe69MZCk6LwVZ",
  "key8": "3FAjXVqzduaAwvAfeUSHKpYZSUkKoynXppVBdJ9XUgSL2kK8ZxLyLsLvrW88H55SNuemiCA8rSuQAC5GRAdD7h6V",
  "key9": "4ZQS6JWFqsXcz3eLYZFcrepgCXi1WdQHtYecjbc4k6jmEf4VZi5fBwZVrEWsooQh4kZyw2vyy1uBamU8RPD2HSBy",
  "key10": "4rwDg35sHLs4VChTwSFaiBt6DvWvE3zZVnz5P9jrzS9YWWnGTbaQLmCEAUYPWVgLWWhmS1xGnaqMypZsgwWNGhai",
  "key11": "5Y5qqRkFSvXNKxsHbbQpSgrFxohJVTZEkPPpRcrHK76cvEhzBJyaBxLPpxNpi8AgN4aGSNgszyjxvtSJua8ddGQf",
  "key12": "4NDjvzLzmkn7E8vRAxC6f1sXSUNfa6nyemPAak7PinNvfisz67Pe8c3bfV5n9TQ8QKnD37VYzmeqcdCZYa5oDEuE",
  "key13": "BAXVPgMJkDb8asmp2V9ysw8QfJiTn7C7G9iF6NbQVQxhV9K9e5at1AZ2e9AKRnNNcAZVwbivNwBwKuPTP1qmpFD",
  "key14": "dt6SCr1qn1nrHamWZ1LRJPj2mNz9gtoYt8i4z2HGVdQtawn5EPMRzmYauZ7judWECAWtq1R18WQhohfcfCp5n2J",
  "key15": "455jBrWkvReata2MAvRTK3jcqeM4ey1EpZgEvg8FCzYzvjX4SkoEnimzAuospV8iYQ6WkznFuuXCdyezLuVjsyvE",
  "key16": "24Z5n21roo1v1ZbjZ7D2Mf4qGRbKxNMfjvpp6WjJN5SzDpCJccrxTsCUmu8roNCBM4L3nJW8XRBwyiKtXxa9ZAwV",
  "key17": "4Y9CSupymRCdn6YfjqyRt13BDg9yUqQG1RxDBQsUtx5JtrdcviLEQCv2CijgyGfRBpn4J9xBankVatPQySqfvbsS",
  "key18": "4Nq7WDsssdPW3kBwoi5cD1Cy6afakE5GzWay17viyNFQWj8hw7F3jwsywFqZkH1TBaTXi8utweE5dWvV1biEYSF9",
  "key19": "3aQzMCWwtL5vKTcNCgTEtBwbzRWMBvJUEGxs4S2HNX6g7T5V9B9s58tHGLkh7aTGXrYFFyXT29pgtWcKJpSByhL3",
  "key20": "66iWxhqyibyikBRM6gssJ3jjZoEWUGoBPdugvq3WUXEDU42cwaDRiAAgijyc1peRwFeLXJDXhY4BJ4pfWZsb3fF6",
  "key21": "pHDrbyWhJB7TFshanf3m8FS74SrsZgQu13wCeu38LsZmiSswXLdULhJ7XF5jj1B7tSyyNVrxHEHuemGZJBLKssk",
  "key22": "V4sh7uK8DzUs7JBwg2ux4Bvtq8RJNbbscyZ2MAPLGRyU2qub2SYaakecCLCbWscsYcd1soS5zVmCmG1ZSDP9sKK",
  "key23": "4G9LxSV8g3wDL9ziAgKQ5tssgQfiJ7Fmck4yPNqTKZkUnbvhQzFRWUs2MnTFJhhqGTFQbHSJCLzrSoReV2G9AUA1",
  "key24": "y55ueDYK4Z9mB9eqban2eTd9gn3XoQBCJDMVmdHxMakZas923yrdfUbyhfibdbPjRyWNyKcXMDphibhJwtxAiCs",
  "key25": "52Vv28XRLY57YAiCrcMbTmWTnuCyYXC4f1mZqyk2ubJ461asyEJCGB5yR37GZtkGC5poWP2M8m53tMW3CuNXMxFq",
  "key26": "4aCM8WxnJtNvMezxNPKJQi6HJRfhqBSd8B74GMfm3R68W7N3Ls4ovkA9FBoScSMiAE7eUGAxoWGSaTNsLQ4pkv5N",
  "key27": "4R1jz4dBevE3unuuPvyb93TfJqku76mTuihH9s9EPgR8AQnHmnWgXkm31kdhYijZb1kR9v25M8KruNAXwH9ftcME",
  "key28": "53RGJw4k7qGhJjWWJm45jjAGn2976tvB8Unv4o53CKMccPXaAaTeku7NsEds8FvHi9nRpYnHUbGb3H76CEkFRXb2",
  "key29": "86jE4rsK4H9CWqmBgiY8Mv14eU5i1ZdUGsgoLPNHcdoiVJn2HRUjUg6x1QDmg2gvq9T7s7DaYPRCTBH1goRk386",
  "key30": "5voAxUsuHjh6aG9y6DMPCDok6aeP9VBLubWBFrMLPUfgzHt8JCVZhifA2CDD5mfzFNnzX6BV7fQJczmzFaABSGrw",
  "key31": "3f7H9WyXHKbgCaSJhZh2JoCrT3MJDAeo1f1qo1rj6MW4kgFd5LYzJfyVhoSyavm9jhb6Yb1hGknk78CQAJbRcjmg",
  "key32": "4AMA1SvcUrKxRquLh5ukGbPjbRtPk76CjatJrkkgEdD8qYGtktiHAqgL8LLBVi9rPxtyNwVdDpUqDNCFURbMmr5L",
  "key33": "QK681XTQVvfY8Fm1xzKMF3NPo5h8rwsQiaYCKoyHDKnhtdScaAZ7fz8Jqb4dNFTngehs45weBQZRRDt5Y3ZHPp1",
  "key34": "4YNRbWk99aJoiSVwroGjPcaobySmtfo95PXcVbfPAnb3N3SwH7YkvwLJYzZ4gdSixt8Ko3TdpQ6JGkwtrFQx5wUz"
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
