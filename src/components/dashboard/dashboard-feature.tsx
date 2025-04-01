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
    "2Xttqbe7sfa92tSNUNRb1f5t5Hnwb4MvkZNddNkBdcsdxJRs4SgrGzj3kNpis2wHG3VKUWHqj9YAdYUZLr1GaNNZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yrckQMqVX7reabPQGBbcrns2ExNxyY37DrqAFwMV8nRrrekkdrmWHnYqrShiRo8s9hK1UEZAXMMz6dnRxYk1yYs",
  "key1": "5yJGQh5rszNuuhD7isCBjkpo3F9HavzA1uibhSh2TnTUb2RKFn4uyp6LoSVUpNDgcYV3ZFvcPtwEkzCNqy63cNsz",
  "key2": "4oH88EUKsTXkR7wPebJ1RZdrneyy6ibh8zmQfbWCWV9KkDqL25j4xunJHYy3KqaZugmA8rKoER7QfJEoDaVTgwy5",
  "key3": "YduCoc74SmSzXszpXftCV3YRDFfyQEScXFXxgj3hXw8tTDk2RhZJE29tx3AeruYda2f52T9uV2xMWjvLfnRYVzv",
  "key4": "3L6eFzaQEcWurexcoAJZYecwu9TMxhBzT6u1u3xqxhmVu4yBtW2yasbJQtVyQ3cSLt7wKQ3mHKhyb14yoPXrSmJ2",
  "key5": "5M4BU6hdzr6PFqGJnGjqQVJzyFPHHdJfxShEZFagAs2Fh2YhyQhdeTLN3V6JiXBBdYH6KhnjhuF6s3hTq8PvaByA",
  "key6": "2bo3NnSCirN3RLdWP3oEL7gcdeCqeMM9sEXcju2y4xhyGj7jmM5DMbc8UfxV1AkRNK5cTr2TXcbVmSbnNYsoCHh2",
  "key7": "3vs9GU6ibXTw5skGpZcCJRX91GPgvd2dXsZgHH7zN9HbVUjio8yisuDAMJZsR7HZUyLR3GSNUjCVUx9e9R237Jff",
  "key8": "5Jqx6Z9nWJqd1aVsoK4wogWZqmUkErphjVujuvRbqeSYa9ANRMbBdr8m4NAtV54eFijmU7tX6rrcV2a4rzAcHpmn",
  "key9": "3Nm6hd6CvBCQ81R57PyC1LZBTF4WBKVzS2CCw9f4dVmRWniLTNpZyG7G7bT7PV7k546yWpdyRW6j18ycPztosH7F",
  "key10": "DH5gFqpSCw27jh4bjiw8tjL3DHnZjzTEmbPUXnGabrQdsfALpLsP1St1fxnAL23TUabtYXwMs4ziyjKeEKcyS2p",
  "key11": "hjBeZHdSwZn8yZq74bA6XkSP9o6VGPT1W2J9nVqbVffioape3omz34yPyyB34kCi1BXRrBz6RJRARcgqGe2Lh9a",
  "key12": "5w22U1QKvtymJHBtj1HK5ZQDBwgJc7L6d75eao7CZYxoD9AVMBHrDCkfEHGeouMdJvRNr6WmE5Tw24o8c2UUHRGQ",
  "key13": "4utpjcDmyNujRMQtmgMKUpRKV9vmQQ1GTNnzFFUcVD42iy8d7APq232jD1Vvybhdjm23hCvvwFi3Kio1HxrG5ubN",
  "key14": "5UMKejmz2Br4kBLpS6f8vvdG3AiPeKQpxkywN7wnbqgovNv1qtMUaSrDvTwBptYBjt8nd935obydgfwCYFBuSD5S",
  "key15": "NkHEQ5qEhgz4ZTzgwbpMQtHigshvWAiy6FpSUKBZiRQshgqXzQE6BcZgC7aea58Pd6tpoPs76pbBJ7X2x39Bt2a",
  "key16": "53YAGnrvGPFEjxdPKuEjcPR3s6cnmuVK8vatQsh3m1FBAXeoCnjWWyeiXUMGf9tA3KzmHd6WUgPmpwHPiQdn2Jqf",
  "key17": "4uZAgxzyq1jJf5h3J4URxxwWGj6416DZ9myYCw5imCrnP937AtBGsz7GyYmh7goA1W8hPVMo6rt8oZMCBd7C8DhC",
  "key18": "5hhHGcUj5HsXS7s1LzJd3AVuRrTFVkZsD7mntrfEVKRQo4hQsXtvGbxomU1irNHUofeHXogsWaDFQFU11Mq4P6i6",
  "key19": "2DK6orYouuFwBBjECsWubyr1yKx8ard43A3rGRJaoygKk6XwKwqNowCnJkW4z4aZY4QKazR8oSaywCrbtQ6Gk9Le",
  "key20": "3KyEAAQgxtrATZeaVinUhPZhiznbmtaPkv3PP4Bw7UnMzLb9Dd361jxUZGxT13vFz1fv2WJqKrPkJkRgkdVKTmHd",
  "key21": "ySVgUsmNaqRAgthLeHEKWr54zJGPawSETqYVqatdkyyvnhqs2BPjmKewDjhibcDBRYABt1FrNSM7Eud5xXM4PQF",
  "key22": "jjByFHD3Fjcf7jvVQAdRWLV9sLuAdiXg6tapk4MB2FWn5SvjxETvGLZJUfr6RWsze2y8BmPAvNrNpn1zD83LD1k",
  "key23": "2D3M6ohK6nbHHd3g5mURp6wz3MNv2CZFUvZ7m5nUnYs1MykbF79fiYd31KEebnNzR3G4CvB3zCkfgcdiuv9PLm8E",
  "key24": "2ZpyjwSvRWjqJ4vxu7Z4S2H4VDdzLm7nQYnBqbQEiMiEpU1HShrMFJDfhnWBxaG247ADzpHgcRp2tzRVkPTW4sSV",
  "key25": "nacUqnGHrDY8i2vYY6JatEFE4TkKCtDqjwunUvgDUXEWpfEF7J1KyU31qYXLtP7sKkv9cjbo2pef21UBuQW2BnL",
  "key26": "25Si3S8LCFSs4QVr3dNRPnKg4TSwaUZEs1dFnkQVWTx47JvngZJRXZu2eCt7ZXbSMv5TqrqSzbx3uy82tACzm25Y",
  "key27": "3HuArWA7uid1efFcLCdvq9q5M5iWdySnuRbwJyPx7swtXzUu7n6ko8CaiAyJMCRMws74tBYZ8dFviUMsLPKzEbhY",
  "key28": "4GPRWa6qwVNMMiTkn4nrTUPZSDoP1wNtvnApDcASgknHErCHQm44ohnFCJ32XoRpQn2q2DTLkxoh2RncDHhHysaH",
  "key29": "4tEavsu9n4RRUMMUTu1vrJmQyUcqi2untNraBzxkx5ZubwmR8wqPeohi4Dh5VM7ViRe4k1iqpR52YPPwCB9iqbCa",
  "key30": "2M1NyHv4oHhXV9GMMG2nr4c7dtbeCBMLeKVX9EtB85vXmtGmHu4oiqMVayTH3AwbU4oJmunx9oKNAbfRZkr84saE",
  "key31": "5ay7LAKeb61Lqfs8CBwA4s9dJyQL7jzRhSkrfsc6e4MM2Kdxw42noz1vWYFfgRUbnat7nDnEAgskp83TCXaYJEJD"
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
