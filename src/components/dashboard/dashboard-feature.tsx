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
    "qZRNGVxTmGFHMds32uoTLoiAHahYo8wsH8Q7UwVbcniveneJM6j3mGYK378cNUuXeYNKjSFsXpMhd1inZFG49wb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LTiJ3wLiKccS93neqDttCJFojweTyauK3B72dmotDW8pNTtytyWspsZXcBZqdYuGSH8Vpmi5W8pw4HNJ6MWxBDw",
  "key1": "3G2Fut3p4TuTRAoc2KoUPjh6FfawnFidj936Cv1cs1qtyenvCEL6zNJJiNzfN2hHJZN7DceKbPAcTaki2kT1v32F",
  "key2": "62vJ5quEGfuKvUDmeqDk66JQ8uPKoJtY565D6R1KvSmDPK52gp4AD2cYzmWCSMRVPyy2NPBpfUmdUvBrgg5g7xZa",
  "key3": "4WPD9iPu1h5NikxL7iiAbfNB1fLcfbqjb7gwUZK7tc2ZY6XWSZrsknbfgAREB4jw3zJczbMFWGCwbtLrXm87j8yh",
  "key4": "5ogNdVGRJU6CPyBuPzceSnXehCGdg51iZj8jakpj6JdK6iM6dhRNx49JLNMufhNkCgxmAHodrYSjQtBictRxocW4",
  "key5": "2cAFseYg6SXgDMWWKk3G92egYg4REybBeccqVmad8DRqafvYaattGDyFL2AY6ALUBsUbEKkJ48DtHD5CioWj69Rp",
  "key6": "5NfMJCR8SXS19y3rwwSUFuHvz228A6YeBYMV1cbyXYZd4U2oM2x6pR7gBsrqakeeAgipppZFo5TEaMj6nMhPKX26",
  "key7": "5MYspqMh2mr1rd9GR6iXpRoesRmiVYonECASBPK5zGnJtjLYF2fdbLyZwqV4pErgvAphKnbwg8yaByuFSJDGkEi9",
  "key8": "4g8po2NntV5FMMbMvF3k4SqA56ZmxBVEho9ULSxj2RmyrM8W2QdM7XPwqxYYXxC1s984a63Pkxfvhnga5XntxczW",
  "key9": "2kD6XmZ9hvDahSrH6yHzS3vG2y3mLWRHTnmmcDntvhEpx6SvQwVDRPLKsWhxhsWYUMHZ8pebyKQWsUS3RXCvDWDo",
  "key10": "4S8JWXuE8EcmUfNUnhU3ohiQKpoW7U1UVqbYE5NfXtD9KRKWYdP4Tk3C2BuJHeCQVaH9eXyGS6yV4U5zdoXUgLsA",
  "key11": "3aDu7FVugQHvEcnjba1qDiCJHP98qfgQgpiHn7D12BfVQ4tnJyHdrNGfu2xqysUUurwt8EeJX57NvjmbHw826CKo",
  "key12": "spyZmzXDLT7APrYWMonriBnykXEoXFz7n2uvDcXf6akTtMuSSaRdBRmnhHeWCbqtztoMabCZyTWXKxZ2BsM4seJ",
  "key13": "4PtwzcJXJrs5WVQPLebyM5pemuRWRXJXSEm5LYk9Kf5Mwx3vWr8wr3C88QwdKgrnu7HHiTjhZgqW16tDnA5neGA8",
  "key14": "5gGjXBmWec23G3sCRQphX9RX1psczZgjEFFYperWRRAaZamWnzZGvSkC97ayuK1aDtVf9VL6YDFKR2jCrdWFdQHC",
  "key15": "yCmcRzoGRFQqqQTQ1JcQoNyQ1p1wKTuQXbzSjakNnRiinDvETtoiQ1RVRPjWmqM2cpvihjkc66cbimrkbo12ga8",
  "key16": "2mCbT84xhLNi4Y6wqdWe6a9owctXirJhoPGDH1a26cfbZsd3dtCDnsRBK1QbyBLUekWKLwxAgUn9sqzoFwrnfRZS",
  "key17": "4Fxirn9CJYneYzC8N1VUbiMspSdHHUYYtvEwYrrkSdkfo8HtjqvAwniL23NDyRM2nbL7b3pvZZ9E5Th681NHZwEG",
  "key18": "4SMuREHeboWRAZ4f2sWH8DSePqgAWEdeckjSN6C7GUQcWNwK3CQMXkoE7yEWadCNwfh1oyNRsJJKWcspga1pDRQ7",
  "key19": "3kHpVTcTknSbx8w8gZPJRdmtN3sMrw91BKD4SbSi27YzRckVGty9erYQLXASDbvVtZyFqMAS2tmur8oBy8R4YEWK",
  "key20": "2jimC6fAEHpVXp3fYRH5hRJT23sJfekPMbTSYa7g4uwWorasaZgEs94eJGUT4dZqWLM9nVdtzeNtJWNeoS8s3kjD",
  "key21": "2WtfJ9bfEpVarhwJ7yKKWuWobPYBHvXxm1G2kCKmHVFVKcXhKhknotU8oJvcpL2FZChTXjahMmZAC3V9Nd6L5hiX",
  "key22": "6wbiGvxdBYVFMTZ8hHovGdrNNqHgYo2Bm4ZfqZH81ZeR71mej4gJVkhkN9NGwRkuBdAbyymRtKMBHYG22YxGgMP",
  "key23": "23RSNGUyV2fd4XfecauwrBfoQQj6Ur8XHQWSZpYZcJnKR2YFGuSHYmhiE8AYuqMvr8syBDAcNS6qucqAiBwesHw9",
  "key24": "xbnbt152CW5drgi9p8AgwFHxa3R2hXNzJXBtLEbPDg66daiWQ4vojzBDga1WQeDfuaggDBCMHsfLf6C99Q8ZnDS",
  "key25": "66S8xvs4pEfhhZ1zrHf691hWziZ5gv68rUTUpmAM6aj24XUpobGfBttTihxyXdkNHjEKSHPbbDBQPtBu1FTA9gJb",
  "key26": "4FXpy69Rp3ZHBqVZ4u1nVDXuFTQsZcuRDJABqsuP3EQ9FxwfBN2hHQeBRhAJWVmFjCAg5nzUoy7L5y6Epbz9CkUh",
  "key27": "pNmYPwkKeVazPJbK5M2YAtZcivJxSaDpwHWHCjd1iFZJAiKLS3djgAoz3R2TvLSVkDh7i94PaKouDzydorsoEnE",
  "key28": "omCupt8hRgBBWv1jX9XymSendpZEM7FC5B83W5fwK6cCM9DVQnTCWziVDDrv2B6HNGcXoSweYNZg3fwa7hogcAW",
  "key29": "4jKYAERsoWb9ekCZEeeyKEfC3a2CnMKQBRC8ipzQMhKTZjMg8UvKkvKsf8fEpWiuwWJggnQDw9Us2sUWb3UZMYuQ",
  "key30": "4GTcbfKhivWJuQhQskFAGVN5jFMWfM9pKAcKg98E66sXN4bB6emWQNHBnTStSSPrj7RFa9X1jy9r3dYin5ZbCUVw",
  "key31": "5nJXAgXh2hsTnnUabL3TTFZcPyTKd8nW755GmFWXSQbqstPYJRr1Wiw1TNeLCsuhE3grHqXiVNi5VA1mXx7HPCUZ",
  "key32": "2UxvVXsJizAgLBT4g3JYjQjYu2c2D7Ui6eW5a79L1s2eQzBHojQNr9jNwurTNjJPkEB5hKa7QEVzgfvtGMnbC46u",
  "key33": "ZDEARpMtVZhYJo5kJNPxPHTHmdUBQMwNodW3zhKnwrcukav7yPNYeaDEEsySHnMTp5skYu1BmdeYtG6b7xDp6Gp",
  "key34": "3VcqtdzKPz6pyhksqbTgJtXwEwTPSMP2uZeneFx1AhGfK9dWwDKEizQgcfKWfHQDDGsP1zoCKfKjokButviD59on",
  "key35": "AVNkfYrQEATQNbqTQNzJ7y3hSwXaLpSoifj1LFJqUV61QXmyq71Qzhvmox89VvAWWraWumYxCsdC8YBszCogHMP",
  "key36": "2yz4EuCrvH3PUTuW96UobEDceVbgkX7LTVwWp2c7bcvAu4yJXonkyRKumPpLrqaBaQi74UKjsovPM7SURqs7VWY6",
  "key37": "HRHB9rKHQLb5BwWSpnNE8Eu5kgbQoCZGcCwpGJiDB8AHpfSQp7ZR9aGnTcbTnMsfJd68ri2au9PpgGqhpWegFXK",
  "key38": "4RMzREWvq78ZEW8wLZjCFLbyovSYqcFtTJAa4T42fPUqW1TDmor7aDgDkvACxTyFu2MmH2gf8XxRS7PuATdgmRRT"
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
