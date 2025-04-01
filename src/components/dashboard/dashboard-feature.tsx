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
    "mqNKb8nY3W8zVR2ZAJkaKfw1vPydbAPcpWeD5pva799QdHB67qr1R8NUsy8pKH9LHnRVZaLkr8VPUS2UJAx4TCM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XyNGhyQWsnK6os1VKyAd6hZJBraywN52gESPkZ6ij3DqjKDqJcuprCUnv3VA5NxDt2fNNqBAuUqVc8cc93Zkvqk",
  "key1": "bKaNG5x9epA2zx4XgVBD7jdgqZEnuKrxhQpx2zDyWCz3Vu5Rv26haW5DMbZEomTbEAQ1H3mkfvcbwkYSJ3yjRdd",
  "key2": "4k87s93izWEBqVgai85KQqFYMXN84bZq6qqQkbe9d1SwXT6Qua8PbmPqLUzFz7rmgBKtz5LwuXnXR1qgdNgJ9Eyr",
  "key3": "4h7YqaFe1X7WjPtHF1Ui2iLTf168nYsvATr4mNWoWJhrudaXTj4hfRfvbx2Rcwz9VcBgTgXmPsek213bpvL73V4z",
  "key4": "JcoU7kzaGZBn1EeH7qYi8WoSvwg7cNZswAA1hK2ZRZuY5DUfqQ4dMrhsAdr3Wo8Ce1uVqCUq3iAzkiZnx9DkPKY",
  "key5": "62w9eHdzrWjgJWduwCbW9DsmT3fHgGRJrzoGXo9RRn7Qt5kPrM1tWUdBwMnFxy9VGfwcWqA6jcLGsb2yk5J71FSu",
  "key6": "gD4ZSWE152RtaFUkZgqh1DJRvqgcREFbBQRgdt6fcJd283bGs5muaVMfHAa2JvGmdWQJXCCaJCpjUb2UFh2u2SW",
  "key7": "5tdyxpUNGkDdFTeuW3EM56GQ3dsx3zBZjCnhRK9DkK38dRKS1kwXbcbPCYL886HGAbZFpM41vHEbBEYBXexKwGJU",
  "key8": "4tT9fTFuPbCMb8vFRd5u1yiW5czCPk1aqzFXyYngzPcRfaRG3ka8oApz4dsboNb2chjpj9pGqsbQedXQMBDwazsL",
  "key9": "2nFnRM9iQx42v6RxmcjL6E7jsGw3kj6tSvm736DXqLdCWcWkqWE2Hfx24hy3qbRzfZabyoCtSa9AVeUPfJ4hFxX3",
  "key10": "3KuRik1p8dUX6rXEwATtrALdY7BJCcRDHa7NQWh9oJdgDRnfGmys2M2jWqRy1Rs9taFo2RCuEpVPirn4GmLTaChE",
  "key11": "5wVFhKQ9a59RS5GjfwJvR2tVQaJNEL7CeqP8jAVNkMhRxV7d4NhU81oDpcGYeBdMgLxCUFMmvYW8R6ai3ApbpNAX",
  "key12": "4QZMQcrhEURyZJ6PqUeQMjBGonKqCcgJcxN1sfbfmRv6JV2S1jr866rjZ8DHbd3kibPaBQGgFL6EPze87YFDfvz2",
  "key13": "2c1vxBkkdtiJuhiUKT2KdbgcDBWuPnXoBAb6pNadpSojCaDmSpSCTzxv1BVNCnpiQN5cnT9pqDPWVJd8g4GBDNcS",
  "key14": "LRN3SsdUXC2m1PqR3ccLxqiZiMZyYqSiwvZNTnaiC6w2THaW1D8thmmg5oJErqzV68AR24wT8UP3RYauthjugSp",
  "key15": "zS8TKYcE8bNHGBKbLWj995YVyuU9cF3FdH66XKypdyUTNkA91KzBdnAset5z9f9E7F8wvFY6EMQWwHAZ5yuQoEE",
  "key16": "5yudEXMfpi52WGfJhBmc1PynMZ1yKBMsoK2hQ1qdg1dfh3UMEZ4cBB3zFYQvxsXeSsq71GgjK5mQdBpiuqrsMqiC",
  "key17": "5XvjRsZevChv2Q5p4ByJKfqaQeNprpLn5jrgwAXbQA8p9nepfQoRHmzcsvsmBrE7138nSDQdUHN9WdHHJEHRyM17",
  "key18": "bTHZ5M65WhALrCQ2QmJwNF6UaxP9WNaQFCRvhmKQmoTLXfkuVadMLQrWgGLePr4i2uJgqDHoB5h779DkmzehE75",
  "key19": "5UFij7UR8BTijFJ447LYsidru9NyA5UxwckWH1WSguQyQcqjmqriPoukUFBxHRNQvc6ZhcTNo92bXSjPYYGAtVTb",
  "key20": "5Rj7iUaMcX4XHKQk65JGh72TBxYUhwWCojCjvL2fZ99SQ5wgqy7ojfNrwyK5eUXEZqmWHRAySHC9JuuC2L17gbNg",
  "key21": "3Wuzc3VEEWWKAf9GBTuq2a8HXu7wjP8JQ6o8CLVeomMQqLkU6K9E2RbvAGihLAjBkpANJN7BDZGsEiVXu3fpGds4",
  "key22": "4AwPTXWHk8ndsW6KYF5Lreu8cVy86PpoDmdCETo4tdhXwQFEubVsEDonnK9kygqdjqyZac69ptSfJ4JSpxnxsJ7Y",
  "key23": "3dUJxUXqXeFfy4C7twoSikPBKFDzMvSZT5TAWiPichzWyoDjyrY4EtweWfD2HhvCcAxDdMciYVo7b9kvNVjNBKsb",
  "key24": "2bAK8QdspcjW4kZaKEwnZoJgi9pNgjPWE3Duu3wRX2nuH3GCGL3aJ8SXtJVWQtUUFseejPoT8jN71Wib88WfrjTv",
  "key25": "29Zt18HGiEJWup954ve1XyZx5VLGe8ehBwswJPDyRFY1wwME6jzkiCKhF8XMeUGiZ5xun8DsqepNbX4U7NcZUP1K",
  "key26": "4j8XRHawpPKMpiZL7CbNF4AMVhAL2XJ6qiUHSi52xYdKkt7QyDdToHBvSZHjPRsSmYu4Tqw8MfQUs3Rcjb2M3Vjz"
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
