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
    "3s2cKjSKJD7UZjEYc9Bu6jpqodjKqKcjdh8Vtu9XFUwZ3ayNnX8uedpmAARpwaii2hPF9ktFtiLKkJbABan6B9XC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66Muo3mbPXGZwKt6uqSwzsdYT61iQry475yQdEci5grmzLPxeCxAGYq9QDC8KLhVECTej65MvbxbWc5yJNVmwrJQ",
  "key1": "2qpzLeYJR3XEhG7oeTGUQ4tactre2Gisjs9age5wQigWC5jtZ9a2YtsUqjeL4wKeCeXM9N833hZu5WodBJwqrAb7",
  "key2": "2jPMp1FypcYEuWgpiqc9GnzHnXfojn27bC2tXzDbqCKk9kgiaE5XbHGvT3SkVHcBqkSTEUsjdJfpz9GE3pkq2YX4",
  "key3": "3WiiEgisyvPudp7MHenP9fCsQYbCBuLXoLhAiR4LhS63khpmYDBfMy2z19xgJ4YexRrFQfYDGYymUWCGPwWPmUdH",
  "key4": "aSC4mtFeenkSpyPWWxU2k7bV1Gs4Lux2zbjtqiKDf7eM8MZL24GJo4r5gfnqSdfN84VdRi7KzXTEUum6AMcXMEi",
  "key5": "4QAp246ntFGs1eMYsuDj88eWKJ938d1saw7bq7HKG9kDXVpVuLs1ccg4ZcGvpXxPtewfMGued7Ntyq1BmdhhssKk",
  "key6": "NGBfM8dQg9M1cn2fB8esMdcyo5ec4Gh13GTLAi9LMg2T9Y4eQFvG2LtDJLzf41KxGB2W9aMiSG7xronsXFob8oz",
  "key7": "3xnx8FcMYFcncyonhB6EgtTqE4TbSwedMM1NFnc5oYdux5PBpriZUhtTskpi8jvFxx3CrYMSXizfn92JuU1zf7Fo",
  "key8": "fy15xzN7hyDeZeTjP41qffsZEzQzE5exwZ4qtBHuhWkgB12MbaYZPLB294grFfKk48adMfHccEj5TXT2jdaYBam",
  "key9": "FKLhcK8temMhWFWc4o5akWeJqad3Zbv7Y6St5v46XnzFYJK6vYCavUx2Whd7qwnXLrSaUDAVHmHEWRqHpBN7Erq",
  "key10": "2KoKXFgecDQcDtnmxWrUG994Ayy1LrrGw6BPYdZz6AYxaS4rW5tJCG5AXrFZREfhLZ7W7kHn8f9F2bcDMr4n66bC",
  "key11": "2LsoPpzJgddyxQzVZk8JohyBxu3NRPhXfzhj2Q3dhj8K79oYmKnwkaWg5Mxg2tKup6Vg9bDrxJXiaPrbzRd6w1EK",
  "key12": "2gL7TNZ2csTpS3nAFybK8KuSA9HMXbzVSQqGKcUGJuqeUyFFjhQjheQgnjKbL4KaCVFnSA5ASAuPqKTqdXi59PDJ",
  "key13": "4PjR5pQupb3zE5kUSdZw1MwP1VJug9gNqj6gMQ96aWPrMcpWqRDpyFfkdTyGo2R1vxGKpBUjHn1jFu1E4BfNkgok",
  "key14": "2cVWoBGkL1RpZT2Zu5otPHeTKqBPsY1qHvLWsTwkKpvyEoZSMsCNWmk49Fck3ssTbGSyghHSXMPEHg5QuETegbbH",
  "key15": "3sTkifq3ynezhN7PzpHtcNUcmTJSSDohVKNBhzzdPvkj8DKaRubzMJWDyZf4L1pxVdDiR17svVQo3Bau9aeeBwwD",
  "key16": "3SsTPyvTDyjGvhvu2p2rL85J8bk962xSFuYWTJQ6SXzQhg2FDo3PBMNFSJn2VM6VSx2sEfCqsUQ6Nc1G2jBQKLw8",
  "key17": "RFVNhHi7fXK1kgGUvtDt2CWxzgjQTHF4mhYzWFzDizHQAf89JdP51LHaUbT9Swh6uRb4KKCUNPPcqj696P6iMRA",
  "key18": "2mHt4ugaKYtfpkVdh9MR9fZNDaYvxoyWwmRXJBrWoV5G2YDB5moM9CHjBeoXKVYDwHjKWyU3JvnGHSpXG6thkno",
  "key19": "5ce7PamZvhbAyvGFJ4YDnuJCkTULEdAdCU6xGdQGcTXfJW6rVoenDdza9VT34dNkb4mTsVk6nqcFFYbDSoDyaypZ",
  "key20": "5uGqDicXYYtce8AYKFzzVXVZwnn14aoRAMSFsogoz8gdcAQ7qYJtvEGBrby4whzvPjNJZ2gQHYPT8Ld6EMDeWAWX",
  "key21": "v25f22GxbpJvnqgjjiuXxLjNfU3XGRit3QTgBCpqZZwbBTyJ7wKBRmgq4cGUGFx9xh1fiDHMiphiUfugUq6GVNZ",
  "key22": "4PtH7UoRv9fjyNCA3wnR98pgfGmH7wAVvd7ir1LoZNwUoxEznTERxzSvxV8R5oh9siJY3j1sY1EywyayW1SkLzqD",
  "key23": "3rWsoZ5tTR7phkBkrrKQgMb3a73mQPZfJckvPUJFkZzqxBdrypKU7ybeK381Ar7oAv72ygX5wsxDc3ofgoiZaJKa",
  "key24": "45wMpPgB34RPYkCBjVukgEuwJdNArMedYC9GRnRNDwnGFhzdbqqGgrsuizQn4NRJ6dGjQeaBpfDj1F7eoUoQwENZ",
  "key25": "2966zSXcGuExNsV5uXnRvKH92wqGJCuc2aj7KTw7dQoyjfugEYm2YSDHBqHTdkwpWgFEHvg3QZCNwAqkh8bLtQD4",
  "key26": "VCdoVvhQLNqMEe6QaQLoRxLwqkWiMCFTjMeJFMXpbGQPr1oAhN5JbcnV7eKsAWA894J25RtGVr3pmb8y9njhs4f",
  "key27": "34F3LutF3hEYa6cQ9MEU8D3yGofKgb1tzfWEW3RQvXaoRF3AHPvrj7xTwqzGErTjg7JbWV56te2RBYHvc7FN3B4F",
  "key28": "gCZPco5vi57kx9wH75c1RT293PCS1AP77TsVsacTGvJXo2SF8taND3Sqsj9apcapPYfALp4fkYrvPJ92a6R48A9",
  "key29": "dGHKqvEkCYnfmoEncif8rz8gdSPVKeLnpuRbUpEBQmWrNt8j2vojEMFYWg31hF2hdZ1qC5mbNFNzhyvBrJtKqRB",
  "key30": "2wiirCiLHh866YjDbYoPxwCc2zJvQbxxTXdb5crHpfuGRvyEkN7sLuhvNkR2E7vQrY45UxmjaV6EJVe9dZn731uw",
  "key31": "2QwzGKwEB2VMVjiWxU4erzYYjaFUSesJ5NrFb5VyvANiupsTSrUdBhh2v4HYVLqWqofQBJg3iD9idBd3ZtGHPs96",
  "key32": "33cEBedosXQFMUKyGuN12NkTf4CxT9kedhkZbX5ugTUUvhN8ivZs4MvtYGjuvW6Kxcy8kjZ4W5wkyAVspGemndYa",
  "key33": "55atPFQp9VmaofweXMweihX4WGkgU3ANArmUaeGAZHUSTX87pwnXvS8yJguDyX2uWXBaksLpppp7wTDdo1VQJegT",
  "key34": "2UcYZ8QgmgdvEq2mdzN4P8McfVputS8ZEsgQcHLF2y8PwsCWiUP6d7tdBmoHojsfKbQd99egsNHbfK4i8A3DbCe5",
  "key35": "5hF45UPa3VjhKZ1Te8JRrADTJANbSFSg3ULc52qSeBYsdph2BqsyNJNDjxhjHJ6MFGrNFPn4d4tKkqhCnAU1VuFH",
  "key36": "4hiXKEs1xUS7UTWbnrweezC3TaCHGefWFva2UvJJhespnmZCNbg2swLrZPN7UJprkkx1tCbHXkpzp17kxkEfaPJT",
  "key37": "5Y8CTar9uxEjMuQXixJSFzd2h9MNUom4ima4pmdjrTzFzawUXFtpHeg5Qqnton1xLahA6zFgCp6ZQJ3aNxLk5715",
  "key38": "fjwnBezXp4nCqnenVYWrFx4S9dBPUeSiLv7aqjZ3VyyK8LrYMA1GtbXMn3VsebQyzmXjvmyLf6N6oPXDVbZkkfZ",
  "key39": "3tMBddeEQtEjg165cp82WoQj4qooF1oeCvPYFaC75j9nmDggSP3jP7TZYZ6ZLK2i5rNeuDJw6dwEnSN6wCsQV4qq",
  "key40": "5uodxj15xqeF3k7F6n32BN3xg2BZZPYriXjcSdTEJzN34Fhb3ZtCt3rpHit5vVa4Sd42hejkzBo65D2Kixt6sxKV",
  "key41": "8AZhia1dMrKRNcfjprXckcuMj6AoxLtShmacZwcknhpRWbV84wN2JcxGP32JGSGKoABoyBnrKCHxDVhCksNjBxx",
  "key42": "3RsupGn9QTgNNZSatwhcLkXbQf6Mb5GXFJ7pKuwv81rCFTLN5jxuiLdUs1GTEP2fEwZJDUSdgk5U74nsSbwDgnh2",
  "key43": "Ecr1QiAFyhjLDtKtPDwYdNkYsaytMnMw2WufaypUDxpkDjotYQwmZRRX9G7Lta5Y4AGvRh8PRcSZhdBqoEocuxe",
  "key44": "2PGEngr6VfGxSEv71BTuhGwq9PPwKwFbR1JhH4M41qdXgNVZdH8VLKvueSfuY49jMchm6XtiNJVQrj46UR9PCHLv",
  "key45": "4Ndx24KQ5b3ySHp7S1R6sv8X2Btw2WLg1MCNv7yNvrNuS1mtbiyyxybCkR9tkFZ51bwyTiio55827oVKkjtX3ZXm",
  "key46": "55KSwJNrPpSifGYB6iZV1L4zPSFM9LqcdTZYFNEFpwKnJ3dEeGYsXH33z4G51uath3ZjNrGDYyyQjwDJf1iueuXM",
  "key47": "4jYbifz42Pam6pEq3euxyynDhi9TcEHTMYr9QW7Zms2YHxqEEGNs3MgSRboAwN3tF6cp1ervdvQNakbrZ4sd43PD",
  "key48": "birEbLCMx2UpNHG4Kfa2YnHBBVq5osLEuYXv4pCzfjmwnCVLCfrVm3rXKtHGm3evxWk39NNzwZMZPFyxquHLAHt"
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
