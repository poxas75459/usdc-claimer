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
    "4QLqi18Ri5KDCX6C4AtX5v2YoUifQvDA8CGGfvwz4sj5GGVEjxLy44LREvNUrsCokVJ9UEf7NBzkQjZPkc8yseHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BHUttHdB7cmAo8U2bnK41sMRMBczdRg1x2ni8PGgmnBMTni6C3wwB8AZgVP4MV1T1EEHTiK9nYJmKvuNAw5k2q3",
  "key1": "3TgdBGM81FgvVif1MJiTr99D5x7e8zx9kJTFEbyS5tPs9rDq6PB2ZsTDttxJCR7KXMthP9qyS3jWK7VaZpbMdxyi",
  "key2": "sQkES5mZRUj5x3t6L5JhffvFmLuFzDEARtnt2C3fs8VQjHQUqw1RQKctxpfMXXbFhNh7Rcwf1ap1oZYDND9EcYG",
  "key3": "5zaLKQipUSTQQeXvfogCcn5poxFviQnZFUBDMmapukvtnQyBbNYYhqXp2HFm2eQ9YBYySxfSvWx3UtPMh5jTHKVk",
  "key4": "37tUrATKp4jbY4oHPaJFMSozgoapZdhMbgdeyC8DFY7LQh7AmMrUtUTwJPpnHd73hBUTFXCwbmzqYGzkNnatjvxj",
  "key5": "4pEinfTVqassba2dtA541pJX3b7jhTYdH6WkCX2TyXdrSYk1X3CwGaWc2qSf4ybC5HKX6YsknMo4xxeQ6cQAVBN9",
  "key6": "3dn1i7JcGQHNtSGNY5NEyMuHuYbSWA81CXXY2TK7ugz4V84PH6AVwszNxPCgoBdVUfW9GiG7WytcGs1ChKqNW9uj",
  "key7": "3YBCdrWkfx2z6t55UhDEfs28dPawEeAoymhfxsdb2dRsLwMUPwzv3p9VwwrzuZidUGGXbw1ER8Vo8tYQ4vht6nsU",
  "key8": "5wY6CXaFNfTgQ3sKd9Ee9GpyTYpuED1TxAySwh3vHEQrfVkjcwWjopgsqWgxxmajUqt7cZFZTdMi3thgberYCeo9",
  "key9": "5KQuJ5Sh6ABHNVAox8jMJnT4QG4oYUNeWQzUxR56vPB5WKBAW1Lfz5XPJLMXM5YmLgKJwtoCiwprH4kGkRcwJnow",
  "key10": "3ARyn7Z7avvMw752E9cruUbuq3pDp3WFrVauxSqRdfQUC52qKYsisdiGrnA3hb5T21NTAD6EAizBaiNpr2eHFAaP",
  "key11": "5cb2rrJAFozoGoKzMsfZGmHgYeDLkGRMM6xJdDKWmVZBtgWMqGmKdwMCLBMHp8zDcSnSK9pVJ148UTVGUANFAHq4",
  "key12": "4EsEiFjbC2RW5RTzeCE6mQjmH4zfeTBjdKiN9gZRjBuhzYiDkUzMXdsSNdaVKwL7tKRGS2xToYCEFbb5LRjWm1Fv",
  "key13": "2RcheYrvVvm3xs4BGZ1ADtUQyNTjKTt9BgMpjz4irxWKxGwfkrjdFgXKSZtuQKc31fZBrP3CLtGa9eQxtrDvZasg",
  "key14": "2GwRaGhZ5DfRPgckCFuVjaHwxBkuPAwmJnSWPgtoU385c2mP3JkBhuSKxfspoMn7BepvEBWmNBL7JhetLeoce5KZ",
  "key15": "4Bq3y9XLr156xY3AjDeUyd39okuSnv9gmqZBZnDKza5MYWJRb31XEBwagBsusnxjdVe6zDhfjAro5HqkYD7itUd5",
  "key16": "FZ15qf7RC4diZ36W5oZ9ShW7WzuRMCTNi7F12gh5ejsdqjWdeHGpAWk8mfJwuD6GKev69itcwgzem22EvBM3ajv",
  "key17": "51SkP42KUvWqom2dSJ49TrQxVtyut4r9TNZrdqN8ad2pSsQMxq94u5qtKB3TcbzsLGJjjGBssuEDyecLEKRNJS41",
  "key18": "7hrFynR6dr4XSeutsBHh1aaoiPsmGyLv6oWrdBbDSUSRu4iLhAn4eLoC8dGE4Q9Pke5ycFme5Yt13cAzD9eCmUY",
  "key19": "2mcdEBWUcY46E9dzvTZDRiopW62BCpP6kMVHuCXmTwb9iHTZZFGHPtmGCTABtfzykDQKMbFRxGTvsqwfhs4efSEg",
  "key20": "cbQeAVgnhq6oH6LX9EBM77wfAFLmmUF49WjCvuqkNo8tSbDYRjh7PmHFCbGGGec7VHEhSHqsAnWX3AMLNyKaV8z",
  "key21": "3UKnCk96KLhRTbXkC2uuYTk1UhUGH2aMZGFvqhX6oEfMwjSGWkMbY6EgQ1ojay83EtJUG9egQVvUZ98VSCfzqLn6",
  "key22": "3xu2NJrVCxAHZ4FEpoQEg2dWpEWRDRD441dxLsPYSTxAN3tBHjCXWWCrzMC2UFCTvLt3BSJ62U2VgnvRrQd8Agwx",
  "key23": "49wyGHxQUrv5mUzdgvVXj26Mk3UceQFL17VZwthkMC3CgG9qSuZuUmr4Ph2U85qTVGcqrL3R3K6D9nD5QTzrWuxY",
  "key24": "3j3Wy6jVu9chYyLd4KodMCpcL8pQHc36tzfLAxvcC36aGDSPhETFzq1kT8NUpHXkwuXbCBor1V3ugmbV1fhqbFnn"
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
