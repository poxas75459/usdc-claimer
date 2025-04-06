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
    "31Bny7rQ5pmiwffa21SZdqwVFVboYJPzHXSW7z5WRRV5MWKVw7TKmgwCFZzPPBrXLczZ86fEapS8H4NXep61LTM4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RNjdQskzpqUSJNTA5ny3mvAqFiPynnTgXwghYVafvHXCg9ibdajSp7LwSbfeNiorTGLqYvTBabfMxDZrLt5PsR9",
  "key1": "4DLbFUvnG2QSzbxzmik7bMynNjpBJPQH1GUseGNCRa2UDsqLwhqAinNQDGaNxURCqgmSLmnS6LjB8bTGqGYQ382T",
  "key2": "4a3QY8qS3vdE1CJyMFSmCoXDtmm5h4NN2k1MDL2zbPBt8U8DYXhhBMzyaDs9VNnE1asSv5DuhuH9y6ZxY5eJ6eX7",
  "key3": "mybiGKvhuDeKnjtEjcwAefDhpP4Fnku3Km66cpvQj2pqtG6TciahjN2RLZ3dt61FGD1Y8oq6XmL5aXNs7y54h2C",
  "key4": "5Bw8Gpa2XkNoLmYexUs4ZJTn2Se7r1JQvpjDUxWkAWDk89GbaXmewEQU3VBbsAJnQoiXz2bgSEdi2iQ7hTKiYBWs",
  "key5": "4gT3BnAZVdd6HWnizAme2n273qBxt6g24Ze7t8E8jzUVTGSNHGD8wsXZ4XitgPqvfvtNpJCvRxUDn8KvPt84T7e3",
  "key6": "4KUTKGcAjL5UgVjZsEVZg8sQt3EvUFc9KRUSz7pHiyHXWrzPVgfJRaXhC5ZBEnLjo63siKttUbr9nppMPMQhtuY2",
  "key7": "4MxcasYKTngPGW7WAz7aXJrezukTATg8rptR3ztCr2Q4iTL3id9CNfeiv14j3noi4PB2itCKvec7E9Vv8AzzmyPN",
  "key8": "4ELTXCtTXyUhw2aV3uYGgHFiaU8ioDbq1SwFeoL9XTNpwKgq58d7fG8FXV1qCex3keXByjryjLDf3Nxuop1ygu7f",
  "key9": "5vjqBZBeseCyqrP3xDWsHijfkKjgJHKrjHohCwdwCxXF1V8xmcx6mmf27Efc3sn7qfxJcTHcgGGJx83ZMhVog1bD",
  "key10": "267eYmYUpnTeHErYmXUQuSt77BGBGAt5Gs88NqszbUGGYgdmroZtwaM477KRsViALG1WwoiXAGwsYSYhvEup5CvH",
  "key11": "4Qzgda6uNEf9Y1eJeGDqZCBBKVaYwU8GimoedE1wVA3mwj5JriFsB3Y3tgopkpteYXLekjZfvwdSAo48xD3nqBkq",
  "key12": "5W6LDxxVYjyfP4vhF7GE1BVozxubdBeixRqQTeCfesEcYJ2oEjXGAFSFkQYLnubThPm4wCLSvnuGMkZbG8VmrBuK",
  "key13": "2WdN6TtRnGXE9L34qgbW2Aie3GqRoASg9z6BUGGcZKy1ErPHjS3kuyj8EEUSByHaZbV9MCB3HpAPWGB2eQ4s3a2Z",
  "key14": "5YHNS2XDabay9ED6YeFjNDX1t5mbZGdupyT2URE6W2bVBGNgavr7Pmq6qcE7fvqAg1GeMeCcHxj7h5No6L3SNzzC",
  "key15": "218JRgwf6c7Eh9foxE6UErH22fCA5mDzg1W1gGWKT7WSPH96e8Zi68HxRs2GRLqjwHsmy4wkjMtss3FdkK1fJcKu",
  "key16": "57Xmpkhr5JfkCTrPRNhQ3vEew64ix2s5ozAtptcwfVo6QMfWsTKiBaDAVfMqz888pX141YbdLstPKnW4cxZAT7RF",
  "key17": "2FtSG5NWc3ybGovhpgrYdSYUCQre75FcUaq3rWCsJJm6cUG4RhJ9sGHDj6hFGqrrRdS6KPSwe1Zs7XhevWf5nGQ2",
  "key18": "4iah5WjUsvoBiyXMLVmiGXp56a18WJJpg6CT6aqNeqhfZMNTo8Pvm8nfLnSHPBQW2UPRWS127mQQDVRhGJ9egwgk",
  "key19": "3hcu9rtS2aLHubtS3XvZADr6PBqGtWzZXtNpWeXgChmDPdZt2rhD7jxZLjfP2nTLRuSjmrjjmNtR1FdtPWMqDzF3",
  "key20": "3RbkHWbGmVKha4WpmFmbRJKc9tT8nNtCUZoWbpDVybS8M8rPJSSrEtGJUL4Ddvv9VKYSEDXhCW2i7aCeqKtprLYb",
  "key21": "2dRGRaD1nWPbuFSsVGwcTHSGxXiL6uRZmnPRKJ4DDL46qrmELWJ4XVTMJXc4Kvus18RCaYGP62QumGFSRXzsj9vV",
  "key22": "3SZ6BuCUMiQz5S8rVCsNxY3KfeQKNQ7mK9cD6cefaPv3VhrRF13mZP5b8gF3axzbVAYEkRcFDQtRk6w58r3dUBkE",
  "key23": "2fPjKRMJ93qhxzFvFzZWNMp8ZQhLkCh7tb5saW4DoioLPwTt4CqVfhXGgFWWdvqoA5CMYZabg3fALooQNsqhdc8H",
  "key24": "4CEz5iEkbkscrQYqT9jv7SSXGQSeedSGsJTHGHhbDCXzJqLt9T8Cs3K4fraRGG1KULrY5ywLsL7JRUzwMWf8XoL",
  "key25": "1r7TufxpmQAspAPHz1Nw9YGpeRzzwtDxXXrUpV1pgLaz6kW7pMSieMCJbMtdxy2xCSm8M2ADBkJUnAersk9zENH",
  "key26": "4UBSjw9KPLHFrkCYAVimXTEmwBBh3iRqs2GWEE5UcBxTRiPuYrLdLmrvFCmTDNQx5jXptcuXpafsyHPsSzQK85Mg",
  "key27": "md853TMdxj1wWFQrLVNrymy2gCvRDUtRrPf9L87tTeVgL6zuD1KRovuTKqR21BRQKsySERmEWA9fD3net6wa8zP",
  "key28": "azft7T5GgSRnYt4u18TBT9NQ3YEoP7g8xnnJKn83CTb7yjDj5MkXdqwdsyf9ryMAb5SGKJqd9Ezaqh17zR8vgAm",
  "key29": "53XusXNqJyK5xDvdtdHWwfLkw9imYTxebDr8t6aaA9or788Y34uqEwVE89f84ixUPYf9J8Yn7FpfLNjPW5ymAkor",
  "key30": "5nbkemodqkrMT1G2vGHq71gJNgxmJSBmHsJbnwXk8JLEdiJqsVFDFsXtvfvd4jMCPPF9YNNhEV3GevCbN7Lqcf4M",
  "key31": "2Y9oDzvFLi7Qd58ampVE2aSrvC4jfGwcF77i987ziw73EMFEi735tju3qaiauU7VYZKscN7cgUEp3z7ZfLQrevM9",
  "key32": "BHTk4Y79GHjScfKcqkx4cSK6bLNsM4rsp8SktX7nUFY7xrdjrF2fnbTX7dovoDzoWVY5JpQP9cgvpBae3rq79HY",
  "key33": "3J8ZQG6LuUaRs77LkGmsiK3cQzEmLxco85noey61wBwz1Pgz7kQ9ENTHwkFatS4tKRsRKp5927ABMgBcMbsRujfr",
  "key34": "5BCY1bka7qURYFcgxhNBunvkyk3tdEwoeKnmfZWNGM9xzXsHZ6HKKVxDdJbhF8s3kFrkopbKU9NzeiW9FCbDfUjD",
  "key35": "3T2FWijNJBN3F7REbgyU26Rt775ST3bk5FyMLSp9zSeAwUwdJMA8pQ4Tq6qPRZhq4w857TnHqstRLUH8ZavpfXm2"
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
