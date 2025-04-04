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
    "4Kmd7jhuKCV4wscpAFdbTg8XJ6JCywcFjfV2VrmzNtujY3b2d29K5FXnqegWNvS292cvWQL2S7mDKd47DXmsh6vw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rXbXaGZpEww9X9ueGhKYH5EzeB8paRihrvWxpParB5mCsPHfiS2TxxeZRFkUWoaSH1Qs6PJVqZvnx539Z8oEqB5",
  "key1": "5cYkqqKJ8b2GJP5wQkbppYnB4x268hXjzmkHgjLCfRgVZbX2e3zdbQLsv37aETDG2yFtP13irXJpHj33HNF8bCNo",
  "key2": "66BvmvhKJ5zUWJ96bBboivpVYqdhRT5nASyxcxQsbxK9HkApnC9Ec7Cy2nb4ddXbFEveA6LdFrjYS4Qgpd2s4uJ9",
  "key3": "5ZfE7JTt4maqRjbQaSYyXrWv662sT9aoqewXUCbeRddkzNByWhJ7LUWH1s46W8Z1kA8WTJsQmKUPvogA13JQX6Vk",
  "key4": "2XJwqpteCgK7dpxe255X2f7kcKXXTtQ84xjLukpzwXtcSpVTMT14PxmHFiviP8rbxaEwZfCzSrTLnt3jwQghUU5P",
  "key5": "pRCDq6W5yNs5atf8NSVzoKDDfTeU8MAJbJ9KGwFt53jUDFdE2EoWpmNNfcDrXzPAhAuR7Y5XrfTW3TD1v8wp5aK",
  "key6": "2FNAF185fUjCdktEVgzwhVKfuC9WqUEVQA2huGpoKLR6zr8PQvUa6Xmu83dyMVRe15ECu3GS1vE9zgMQaS64KucB",
  "key7": "4PAjSE3eFNAFjcigrtrmvBB3TUoz3v9eZ26SqYW7rftLiiQVcuZAjmK2vnV5idoQVJH1H9z2qdEQxR7nqMFtP3KD",
  "key8": "5EQTL2YdN27BJ5kPnzMt2EPaqfrMRmN5SU54jhaKP4CLzPwJhHjoAQXLtfEfTQD5jb8ZLPnvBmxbaSU6ZZ3DTJ2",
  "key9": "LTkfiiH7nTLSJPYS2bn7EVgqeep2qaa2GUNBzaYy1jHHMDz12DXpqQ937o7YANKCaBCYKZzDLJsnFq8TUebocZ4",
  "key10": "3FzKrcJdBfiXasCbGdEJdtwcwHuWLisyefvv5uCofdp3zxDJaS5yoBN7X3qwjLBcrnrV1ToDZnFtyEVBKMCE24Ud",
  "key11": "5UFzxeapgohq9VQ9Sr2QxnEAAJ3UYPK15yfUM4544iBwJk1oPyZjgXdht7ggXhgvGuyoAzVpkXRmqVKcRhDGWsaU",
  "key12": "RZ53WhfsnTbiuo5nXW5hCNVmRAtdJB4iRbeiykJ2rCYogMrZmbMeUtP4T53psKN3iQ69Uth3DmDaxzZQV26RAfc",
  "key13": "2ZpYcWajRprZaFqGXrr81hoVoKqrNJed7V55wiR27FViF8fLchPtLvGPtSFxg7QWBwKeExrsL4hA5XgeDwoAb6NR",
  "key14": "2AZxu5QN4nfUZDsYMwxxYiHMyVDBFXNiZzE4VgpfxCp8QGaLHyXtVZDxZiQCYZRdLFHAdYYraeAGVM6zeVHvwKTL",
  "key15": "4p3WBwrV7dXx2vCss1jpDme3xLZMSjULshJVfgTMSKbuUayoRtwADrkQ86myFMjzeUSmAkXpEYE4XAQGo6sYiMUq",
  "key16": "2BqGAnzrfjkBCmbuYphE5HzN7fn4joSF3diTX2sS8m5XSyfaHwCtn5zFYMJNP52MfrznPsDZs1z7LXGWUVevUmPu",
  "key17": "2gWY9HJRcXLnFCBFfe3paJGp6rB6JZXnRWknmYZZbrUD8pekqyS2VvwxtckQBiC2hKUkmsscXoF8uWa45yJyj54A",
  "key18": "3n5AmALUDoSYoNnxtmjX2SX3qSv4sy3X2xN5TagpyzZxo9RCNwqcLu2rAUn2DjkGupBbowTsuehgUqFujgB8gt4r",
  "key19": "2TvVSz3yBWPeqLHbqAf35t4JAHapPN4CWocURnFv2KXxAo1dbRCvse8tDd2CP7FFjNLnk4kyn4pWPfMbjTw6ufrJ",
  "key20": "21UfQ1LH5QAUmLG6iL2zwtPPbBy321kDafnRSmKgEnyvQvW2yoUW1wDCpC77wGmztCidi4K1Gm2HKcShGspjNB8S",
  "key21": "3Qa1PJG423mgChTdb4ZtLeF7gBv6MPW7SW8Te7Edot734aMQzXfvNW4gHXKnaVCzbr47cYFswNo59PovNkbMYMtr",
  "key22": "nbGR8PhHzGX2BhFUfeGZvLXZuqwwMXGypE7DaEqeu51s68EFag2HrjUcUrgQtLTr5tNYnYfLEHq7Yka7PM5sKru",
  "key23": "5ck2NTmGynKCaiyEgFnH7TRDyXGvUrQuTv2Em5GmSYXA5qkB1Ltnfhp9VAQ6CuwgPXfqJRUDcqiakcmy7Jzr41pK",
  "key24": "5nydGRtVGciRHPDLn8htLSoJ1qbEb9BZYMpLLwJUK3qz2HWMvU7hyj5i2usnvHRVvGeZ789wiP36TAxeuiekKDY6",
  "key25": "3ojTu4Z5R2DCh7pznEsGpGpxwGtrFPiwVXGPga3CUgD7TpCC55zEuvo8sZu1H6mJApPC3JTuhXmXsRB9JZpDHuFX",
  "key26": "N1zUjXb1t7GxxTtvj8XBaU3zJUdEoGFYUVdtFF92ZCbJfwNfGZZE2Zkis9TxaUGBt3ESNj3h9MVT7xQpg4H2ZvW",
  "key27": "4qwP68vVqeyaxDPRsfehzHcGq7BUyu9PYKMcAy8zUosKeKu2n4JBUakHw6UKXvSPDYVV5dqY2jYLocmkrb6FQYdd",
  "key28": "fjCKTrHjS1zzxD1AyQaQyH9G4ta77zVF8ptKhYN5NhYZuvTzyS7t1RV2qyoajcv5vWsKCzcUksyjVFN7EZXsyeG",
  "key29": "ZzYYpzn64nKYbeR68B1qfy22wqBJvzMKnu68wAFWzshJwHWW9GQAyxNGuG6ZPgZMiyebgECRfpooTdYAoJjYNTY",
  "key30": "31UxwGeErCt7deVd7WrjY3uJfPALdLUtTrtvvq8aZqkPYcrXb7GeamdQRef635VuxSnqaC5ZRWqxkpZgPNTqVSqN",
  "key31": "23UudEpdzzUC7BX8zerezTTMuv5RKcwhWRtcvfgJTGLDLzZWbtnKH4f5az9Q8ZF2vbtkaArt5whd3S5RMPfdMd3m",
  "key32": "nJtTujbGCiGbHccw2rjssGuW74SBW35cLmd8B8X6NWx2v34XpfZegr6vYBJLyofYvDSW6TASeKyqY61juFk6mkS",
  "key33": "2cTaUyH5sc9Q778BWCnq76Ke3QAAeAxcP7osxxRa9UfDafLFGNqPQeHi2v4hHrJ581iq93X7fyvnnWr1mDBNda9e",
  "key34": "4BMKLxetdH8hkEATjiCNS57o2h8KhuquRicrTRoWqdiqs3nv6VVndAnvZcBvxXYtJVWuAkevyfP3o6zPHohrdEnf",
  "key35": "QUzJZfTj9FyjLcJvE2br2Rs2fe8oAfUSvhTPdWyVHgnVtaiUmNsQc2HXnW1tjCwVEht9xPJZvbg3bCTsJw5bR37",
  "key36": "5Crq6dVKKXZ5KuEdcoSKciw5dpf5aD9sTknyjyQFMTPRrCp3Mkxat3jFrcwHC2mcP8thQENURbywhXkJQCzouvZu",
  "key37": "i4CBmYZx1dSop34nLtU61HhvMFSqebSVy1PNY99rNafHqXhLEbYWAWBvKY8txowvUYXv3ZeDGJfYw7mGqcrTWoY",
  "key38": "4bbCg4GRcuwa73cic2DigJE1vykL4vfmz7zbqtwCF1euoShGbq13oS5559nTPQrFQMMynVpK677HsvmPeHb5DCg9",
  "key39": "e3M9gvvQYMVPZUXfMBEx7aHvZZcFs8GVCG4zPVFWv49hUbCMQ8UBXeSgpPSRS9D2Wj3Z4MVbYzXbTLUkE3V8mj7",
  "key40": "4LWEvVPUm3xbzchpLrXLJmRJ7vF3y4iVJfdCnjDjFXXGHAWyrQnuKPs9wXTQvFqMLxx8LxQXGz8Ez6b2C4r6dJLF",
  "key41": "2ZY9dAmMXiFx4x8WujjgHq1RqKVE7z5mSurppu8tA3iJdxEQp7Cggh1BrXq3UJq5kKntfbeABcXUW35CwJoAMqnF",
  "key42": "TgZ8wyDSuqpZsPf556mvhkkkb4t14v8itQexPs6gLGTXsgnBrdLiqv5m937SoK6GY2a3Qxv8eJKHnsN2QKEUNaQ",
  "key43": "5CM2X2xf3vB5vDdxMxEoB8YhXsgQ4czjQq4GapGZ42ETjBnuQcf3Usbbq9rrXMZYBsTJcHo3zRNvsCri5xbpZEHa",
  "key44": "2pFi88ccbFcMLokE1Rs8w4khEmu5PQhjAsDUyR2e6SLXdFSgeojyEtmgcMxVDp9BsyvUx2uDderjkf4c2i3xuEom",
  "key45": "4p4etJA4uMmTjEaH86HV2fwxh3q3bQHZHCy5QdfL8BpUqVZcEGaR52jffKGeKwCoPpJ3FKUXzA69jL4PA2jZyX73",
  "key46": "kTWmYjetqmcJhpXD5EQpCRQvPZmB9wnkAaqDKYpgXH5bg8pPXWZ1p6DQXcGnNVaDd54ARSb8fxemrGFutum1kH5",
  "key47": "2zC8vLPNEo1ESjSMHFjd18B4eoFrLq3PpPiytreGQWbPrNcxQ3Wkw9kA74pZffXfPEx556qQGLMNLFcFCfUWCDib",
  "key48": "mXfL3oiNsicikGfqjAdVxasxMgdpdTNN6jm94SZDyNkUMLbBcdy2f75uKg1K4UBA8co2m2EpaCZXaJ8YkhNAQzz",
  "key49": "4WP86wmM5KL8Li3Edg7YPZAyHxuFzmLTDCyHyNh5pSYZiN6UPZm8Sy4PbqTcYC7LpqvBiMstjdKzBvVhzdvoHeKB"
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
