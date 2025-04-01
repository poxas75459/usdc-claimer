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
    "3rkmyvn9JcbTAQ5zhDYUQBaBNPAsyTW2h4rskPFNm1spky6eX71UCWjtcZnXiMWcCKyX8xZ3z8zRfz4H7pirPpBG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xcsKFXS44KAck29fUbBaZAM4bLF6Ea9V1sLq3QudfkWaMTKgwLMN8XG2U8WCUk5B31V5yUgjDTbyj1QX6FukN3e",
  "key1": "47nCa2CXagkjgxGiCaceSb2dMLtmbfhkggLh5LMYmGfsUBVLxpHaDnn85JHYK85B2bkMSmbQcuns1NYEy8MckTLz",
  "key2": "4w58XDrPDHrKXiAHWdhVJ3hKLqSNstp8jj1e2Xjd1NfKLGCM1PkXi5ipsjCZpt4BgP7K9oiTQD1zk1bjb8DDr8wU",
  "key3": "4GKuGQ2qwRhfQF8xvERuLWtajsgbDboEetKhHvU8iGzygzxHYMf1jLL7vJLnfZck8kmLyTAff8xWJg7rRecCX1gW",
  "key4": "3bH97Nvnvw6htAWsat8EQkcCmwz7Vzi9FuEyGsJtKbsXa7HEWFAffWCsn4sfPvsMajRqVsTNNHco4PQhW6QrX8y3",
  "key5": "4gmYppt7wiUh8caerbkBqdYP84xQLbApYJkAycYvkQMfjB9m5vRjnxgS9cKA1v5EvAdMLkinpWueCsWbjQexd9Uh",
  "key6": "4RkSvqJrYRMuTjoygD2bZ47XhkJPRUKBiFRJ8kEgqJ4ohGbKt5mUDNGMudPETygGhQpKxWDDH3GCYfiHzjp75Ku7",
  "key7": "4MdnuADrKP9FrcHh9TtARjxiMVdNSMKDvCQ9v6SgZvHgPPnV6NcSZbfGFubGkk9qN5HMyDw16nBm4StasvcWdKXT",
  "key8": "4fWHVnmPXQWbJXKq6ZTnjH73t6o9Nfiff67H2TU2QiMTax61VWapizuNdsewRZvJWJ18tQTbyTfcpzeiP4RDvRwW",
  "key9": "5TKkYJyRHNPKLG2Q3Ks4WNVsxWnbnkimpXP12wJsFdhmZNZiNjakDYP2eeqJGmgjxzxQGrzWAwACHnsDrFeCFd2i",
  "key10": "2WGwc3nZsEMsERVBsYtNTL9gvTenYgYmkNdFzmUKbUJdKn6QEtAT21kxhTnCo7fcehgw4ANDc3cQJaRwCGxSysWs",
  "key11": "ADHECzhZroC9KYufK1a25sP2iFda85WLnwJhqoyaFiu2hVS28Nc62qreXddXdd1oAbZqFtsNibEWe3RPh8mPFkD",
  "key12": "54PBCsFXp8nMbdBAcJmo22UWySzuaskXvQkRMvpJbfPaDUmL8jLF7kz6bGwPLchR4Ahk587rMLZVfosGvyQd2rF5",
  "key13": "2QYB9kVjEcZskspmVtH3TYuDWmEQLuWYnYZ77TdhGrKbD1htpwHNyfq6JnEDsfoYrxR9dt6KTtaF64PEZssM6yCJ",
  "key14": "5kwKiKiQWAamaz4QQuR1gCpQLuvYcUdqzsugNtXqes67bYvuH3YgLj9BE9FiyD9eyvoyDfZk5RwaZbrBwnaPH2ig",
  "key15": "24kdFqVpSXdMKrzqX1MBFFkjsyvV5kNuzEpzSeSBJdHphBwKTzP9fJ3VoJ6gvamsd8ZBkQgtrQhganx3gAZb4oyw",
  "key16": "4TfJ1kQEibx2xbSai6kEQzhnPcmfSJ4UtdomZLQ1zkmJS6mdCmN6s3FUCgaMUu2GC6K1guYDEv6faHBnxRzHvAZw",
  "key17": "3FjhdSPf5chVYKSUnsQDaxVAmahZfvYh2R3XpgSPZe4qQERndYad6V5UYUbVChem87r9bHnAvG1fpLNemkFSsEfr",
  "key18": "rFyt5oDvbyFdE8PyNh8Qw8TuGRuQTAK7eatGMwt65jz6mPhcmqeAsREzmg8EXr4NZLQz3KvFJ5Svdi94sogJbzn",
  "key19": "5J7e8XwdUzJUQ2F7kjsAfVzR3Ap67huHvpoaEc8s3FyE4xz8z7s74hzxdTqLpjDikUd9pFf9QpRRcZ2xiZSmMcs",
  "key20": "44rfZ7iPr674NKYZAVDuJAXyUPnNkWLWugLWD3g1Z4D1DhfUjjUiPnhJdJJy6CuA5icWx8DWwm25FLapYyB2q7Cb",
  "key21": "2e9u7f5CmYpQ7AcSndNMV7NhXRZa72GotLhVJ7wS7xw7oHYQRFMxb17qVn5JzoSTczwQSSii1Pm6dJxbrMQxc8UB",
  "key22": "djcxsp3FUn2V4K12YGahoqp38Jo84sNqPYPTYeJCdg44Fsy67j3SYKcsfXL29FBtKsYHqCQ3ivRy8kYgMWT6ZQB",
  "key23": "3o7xSJ7YSX1Uz8J26GDgiPsZtLY3CDXctupzfKdTaUi1DLg7WggKweRhUcivDsziqBKJ96WFJbAA6bMnFhTQZkdP",
  "key24": "3uqBGXCJfWjW8gay52dFNmjugY5DuvJJTuYHa9RNbg1fDHppkMJK6nwnibdaJT3y9DFWA7gtigq4dMN8nQ2KD3Hv",
  "key25": "1fS7FJrWyxDA9a9ahzCromwEkHGEy2FW9ocj31kCBAt2MRwjSG2zgruMi5YBSodpenviHeHCMBLEhNndXuUntyN",
  "key26": "3BkyaDryopEAuUDQidMjeajFEAUFjxMbWDg4vNVE1SvMnVa99FN9M922wEAunzZTupThQWspRHDWaYHWD9jgNHDu"
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
