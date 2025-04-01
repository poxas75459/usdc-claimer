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
    "3Y6C89qEksf1DAJaish3dz42MwWKgBpoNt2JsdbTe1cEN1jErg9m7ZHX3MHQKLGU5ShXxTuvTXeHvzNEA8wfePEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EhPqgXxeeEyNTTtMwnydcsPVCGuKGff1Tf1jTFyz82zda51iADvYVuKvhe6iRPAsART9tXubK21rYvPhLnWbTk",
  "key1": "5QqXx1V7DLzrLxizcFAVoZGfMGdiqHzXWuMeNnmARjS1KkhGXbZFLMAmowjhE3LHxcUdcH4GyxtwuJRfoi6HYdvp",
  "key2": "2UV7UGBsj6VSftPofW5Z5bpYbjHbmthotg1pQHTun2TkXeyK2eYXa1nNJWJXbns199uhAFD9fDCW1QjFDSGzSWHr",
  "key3": "3d8NyEJQEYcD9YH5fb26mbezsyhibJZQAyUWkkNxP77SHssaGThYiQ2QNyGewP9JSbjG1R2ShaDGACqbRn3pEZCz",
  "key4": "3iADYhe4U1L9ssqr67RZ54y2EVEnNW1EviUHScsbGEzRmGMZUxq6Mr5n2DvBZv37oT8Xni63J66wqRpJxtNcWes6",
  "key5": "UatkD3SNsj77ryi7SCpnBm7DNP8zUJoR1NLNsydGpBKvGhmkk9EheUxzLQaabmBZNqfPwvWhY9s4E54jmCMr7vd",
  "key6": "4iQbdMLjLczX9RxucstNUeBpsqLPbeNWfVzHBC7tvY2Jm43BTEKqaTWsXmbJyUz8oMHHMKfdBDaTYGN4oLoyLkrw",
  "key7": "2FgnrbpFbxUGX1AsS2SRDaYVm3w3dX17YZbHXPbUmGw9mUMQwECSf9bwzKrrxG9WUksamdJBnUAyPQ6M48Pj5TdL",
  "key8": "2g5bLY8hAqVLxDFFjpDYGpr6gnJ78aUUBTeRBkuc7yfKYsFjfpmEtoNmRE7N35qCW6numBQDiqSxSDjHsxcHELPu",
  "key9": "5reLn8QaHTbCqWuutEt3W3TuDwrjTNGhpVjWUQey39o8u9QGE4BY2K6LMnvZBajjFdSbo6pNGtU4qdKwgXz33cFu",
  "key10": "wpASnBmD1X3s8e1fTyoYQjanPLi4XiC7psmGJoHpXvbXgXU1g8AjZTaxhiFeJABxLYYsjbyjZnfKhwnvNnuU9uk",
  "key11": "FXx6PDRC2nd24tjPWgwA9h44j7JvjzZGnym2igBPSSuCicmq4w6zeAKJy8XeSdXh3VFGVwzfz8Pt9KHVswU2ULY",
  "key12": "gmEfpKbGMmzjZR3C8sms2fvxPjeBkxhHCdUmg9kPnRJrYtKc4UfmqNFSjnmauyDvk5NSnED3mucvTJJE8CJoW6L",
  "key13": "2EWp8xxMoCWBsDzMLG6diCLaXTVuVqEVLD71Yp1dnSafZnZJXrWEPXDGib3Ji3mZQ8JmxyzR7x7BMh1kTyswG99D",
  "key14": "2fWs1ZmVW9FtZcUifhQBooe86WnCEcZMicGoDyMcSbekRwX5EotEMvf4nmVa2QA9EszetP7VMWVxsC93LWT4zaE7",
  "key15": "AoGNKtsfZwbrBaLJ2GDfhrd1SwzEZTquJYnDgk3adfk4vcaQQaUBi7GZB5dXkyPJamsiRN94Av1r5RLNsFLEPHp",
  "key16": "2iPeix3EfZeWTunbgiLwEpqaACdNJJZF9QMnsZX9aHniYmnwcE96cna6N3nFJwiVpYQ3Y1BnjF4Sdt4Hju1tZnqm",
  "key17": "277e3Q9DSjRkizsqfiTW7rrW235qsE61mimWfMhuDLbRDGJYDMPRpRFFivAwqZweiN2Ajk1iUohPggnD7dBBjBH1",
  "key18": "RTmTmtMHDbRRRUfziJ7D3UxLD6mzMQbnd2FNjr2a5iq4e7foPjnkBufmuaJCvozcGftJpX3KVj32zzuojja2t8C",
  "key19": "5GqFVStUMWDiAy1nhqse1rRk6Yc8a7fFAp2Hur44KP9nkJ1saAfLUxbevJ51ekJvYfHfeeZaYNHmm14GauzyfZKt",
  "key20": "39ifiHsX1hAFp5WzcynmkD9dabgTpMexoFXrwyU23JMjdXkRTFKMarvZdLbxw7k6V9BYDc246TQsjdkPhMmNqt5P",
  "key21": "RGn536bgojvC81zHz8z41K2Ae98uUQgCTj9fjUs2wdbRkCQqugoGE6Zbqcf1rUCFZnYUXNqa5fFaRxgDD3yMkuq",
  "key22": "2hwvJiqjzgwAVBQ8vP4yjy9QuDBTsroERtzpVYHW5S5g59Gts5bQyK7WEU1kqFfZHZmNCJG37KMFBd9rYq2D4Ji3",
  "key23": "5AoNgp7WPwfH2ATKdUdbVCU3YNqRdNXgxeGymdJBeqosMg8rFpdtLyMm4vBNtsik9HHycB3NhkXHGkjpkkecyHzc",
  "key24": "4TYDZCsJZgRHGRRYcgQcu557WNfAeCnzbWZs9Nvw7RJktmmAFM96hDtesoBumgFV9h2TtGWEAhs1MVk5AbCjWmCW",
  "key25": "2xTp6RSfKiLhBJY5KcNutyiDrPAV9u4jRpMxuBrvR8XGy67nvU9HXvQrH1HGL16VTqXZ7w7deQEtv859nzonwBka",
  "key26": "25xLiAwy89aRWumKBJZtupJjwq1HGsqVBj4WBLniRySVdJDChE5jsa1TPw4aMx5ciAhbB4gxyn4QSS5ZQgcGfRoa",
  "key27": "kg7cCF9TpAE2ZcTeB47yKjgC6nC7cCD7oEELQgAoQqoxf87veN9sKsQMKtziKhV45XRfxrGzwA9wjmt9DptSsvk",
  "key28": "E3GqZp8BVcs3TEtTckrEZpJqWr9Q471352MY4vwVYwmMHCYx9EmLXYukW8kgBG71MjJThtJb4jt8TxQ1PsDShqz",
  "key29": "4LYv8w2aenBgx5hER5SVk8D2nB8oCV7bPGkjycXF5pme3KV2hUBJYrbjvd1UdfzxdoK8QFRqafmtGhdhKyyBt92q",
  "key30": "5pnvSQYiFMPmMtdFJxqC4naas6iQWX1ZjXncFWNfiCCzW6M6tLeBMXdiADVJv1xXKS2vWjPFEMohvTpqpMYsvmTp",
  "key31": "zbMMgwby8xuyvx6xMDd2vysv5Yk1rWtdgXpQRrAQskYnV8wPciaMhYkV9f55LuBhGkTPcokM2Hn1n3tozCwAMQv",
  "key32": "je5izDMKXB5t1aJxFko7Dt69c3vkE3TktQUWcKiu3iWijzFpJ9BEzTtXV266fKXbnJEycw1s2KghT1Ga9WqcpUq",
  "key33": "hqrQwNwJqgaihxHCPR6quKV4Dh5LdnLuT7EPJ6y5YuTXphYRRe4zC2UbhiDGxweMfZ8iWLpTp4KdEYA3nCqJGWs",
  "key34": "4JmgJnL6RMAyeJoCfrbmFExGvirtB1aUPcDQVGQkXY6M1omLpmfq8E3xmrff64KsN8nWQ5j9QqHMzLXxfrKkqywK",
  "key35": "2zn8YVE7enZg9w95UhJgvkvhPYnDbZtVyvYcEBqCsmPzRp8D8SYysegqJZ87CxQLgmXTB1GqKZ9zpa3uee44cLen",
  "key36": "4iTsHv4zYKgkYxcSoHfPPAxTJz9nZvaP84hqrtwHcsgKdwgGsKiCT8ADDQfZmjau7o6zXGGP9depNLVF9TtUxSG3",
  "key37": "5qE9oaU2MFuY4SxWph2aQ6Yu2PzPwjKBxi1zBwxKE9wgWFtfkp8eCKNNwQCtF5Hn4wMPsmq7Pa8yw1bDUi1PyikQ",
  "key38": "57CjaCGgiyP21r3PxexZEthq3E7MqWmZcYnrRGecGTWbBk4dbMkSJtCKZZHUx7eKdKgNYPbMCC1hFCwn3W9YyLN8",
  "key39": "4xacsWChCk4SQjNg9UmLv8A16pSZUzNNy2Hbu2iiPtCXLaJh6AKfKyQVoztG923CrkK3cYwpTiUg8MWVEB2CEj46",
  "key40": "5VPux2r6VHvDDbuMcdrkKxs4px1p8kpj5cZ4nMN51vdjgmFxAEFekpUE7wkjTPbMMQLkWtoNCrbzJewwFNeiNcer",
  "key41": "49DQqmktBQEVWFcwecbNYZTEqupVppmWww2sWPQxdKxjxh6BHMPZuvGQfay4S458MxjEuo8SJQ1c7WLynBLPaM2f",
  "key42": "4TVuw3d6EFPpbbs3EcyaJWJs3jTETHvzkNQ5tVUWHJ2qnz7rEHtk8L2zxdfn2ADfvyq5GfKCCrP6aSF8vuX9mqQj"
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
