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
    "3YgT6EyeKSXeR7CHWrhBPo3uoELuCAGP5yDgmGwTDdg9A2ceNWw1RVxbEoyb1vy7kPbXR6er4TDGncpe6FhQcwU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G1MZ9cKKavhVgZfXvzrYmWRF25ZjcLNYfqkASVCPCd6TdvraCM4BqX47uX7TFUBdHRdvhjPhHMVs15SooES39zy",
  "key1": "4QcoPUmDxRtJHcaSh6zpCZARVxC4V1ynaj95ifUKWgMkmBpFvsmSHiQ3Ba2mQg1Zso4nVxBZJgetNDcDRqiWE4Bk",
  "key2": "54FVQa4kDdwkRczpwrsPET7A1gtB9XeG7UjwRfEqSNh9ijbPbJVopcWtfkjFTfZMojMgJH4wkGPCaMTmbjJcjQMw",
  "key3": "2VhoZ7nsjrLAPWXSj2TL1iZD4DWvby7pZzrj2imkVpm9VmMZF6bakCXdeGgHGb2rNG1MFutaVg9Ghn9xB8enuQRP",
  "key4": "5AdFWNmCJznb21UAJcpJMqLJDZq6w1LzdYgQrbnh8Vpd3VEGkCuwQWkr7nQNSkZg9wpsbxBbk29wLFAc22zN5yfN",
  "key5": "5mCBJGtfU3FFJqgwqTNCHPfJ2DTBhFMbYrtz7b3GWZdvd9UNtYVwJRZxBNgvZrB6hYGHMTdJ3RruCCRr8ZRgvLZx",
  "key6": "63V4HQoUFC47NZ89ejM3kZSZyC5JBkLbBVcW1XfeeMXZ3EYLukkCZi6qeH892LXk1vJvb4oShEz4HkdPKmGSpWZD",
  "key7": "2sfBJhFNrDct8meEbufArWJkqw1nM3zrAfMkgQtGnbN2gyyHBUYSyq1DRd7aQ9qjeGvoCcFuFVUGofseAATaKszK",
  "key8": "UEUXtsDzYrMsJpHy9jsZa2m5XU8Qcm4pGcQhNXmDEkg7XCgjyvjfUsSs78wLbjdtgdSNtnaQ7HmYaZVxEvh1An7",
  "key9": "5uwP1fH3ybBrXkncJnVRPCBTo8xJhE7qcU9Yorsg6BdsLfANgixFaJDfJgwfwdPUDXVHErbwA5hma7MtcJeeT8i",
  "key10": "ztV6QX3ofZzFok6Kfsr7HUistEAhVfz1dnZAQEF5jmkgVpj9NaCyc3kZ4KysZZaJ2UFXumYnj8KxGKLM9jb8s9E",
  "key11": "5xys6DTXEQv7uC2gN2aDs1oTybEpHKSbBbvCDqYS798y1viagRs4kUM5he2SEZtSj7sZMkuHdihxYW8vwKJJCVmy",
  "key12": "4rhAHs1SJQUccKZeDevCRUxTCRPdPHvui3sZ2fAyGzYPqGk2rRUxZWkw4BfUaqcLyNLJCVfMDbwgx1ZHFMEs6Gg5",
  "key13": "3h27qRuxSomqe1yWGj3jqGvxjLrEnmopArxge35vQD4Ham43PZSg6jk5LKNPRFjxWjfUDxgeDTPpiukRfA9MuGPf",
  "key14": "hidaz5PCYHzQWWLPyziz8wFgouVP1smadSXGLMuhePr4X2AeCqJGrqar3GbT9aEdRrMMZqZhT4kEfwbToHY6NDb",
  "key15": "5zFjQKMmyoASJdPXvsfvGcPCVMHmV87hd1ffq8Kp66WSjrrekRNmyimMyTEYd9XWmJS5noXxgBccsdVxM5BPv2iA",
  "key16": "MBy3pConCgh7m263qwo4EA5UQxu1p3HFA98tpr5mnFiTwRM8U1W5h3LdR96wQbboUnYmCJCP3rBM78HBbkhxVbo",
  "key17": "3xHgMxR5gk9jKkpAKrS2bGY8WDCYZUYwTK7sBCgip9X7ZBXHWUzPDnK5igCkXLLKPbkTgGATQmMA9RxmeGKNBQci",
  "key18": "3uovDC58XZhAYRFbTGsFP5h2doUtAGDU5jikpBJzZ5U3zgnB8GeS5dC2cptgnsgYp8mJSMEHRwswRUnd5Y7a8gPF",
  "key19": "5DhDJBWc4rSCkLaG7MYhXm7Da5Xcr5tnoy94WiULELDLzC4ZtcBk5mccYiPoAwh2qxy6XMTvXcDEm25avYLKWGq1",
  "key20": "4BVTuDroiugYnLztbKoXovatrUT22NTov81ANMCHT6v8YRD35BFgBvDuBVBnd6ubDmysuYzN6T3zKRzyAMzkXEnB",
  "key21": "32cQzka9M9HkbuFVTWJRfwgqAyKsgkVbvBAeeUAeMzjRk95sJxLiUE1bLiHeyzfYzmWwS4AkNbAPsJ1hFw8Njc1o",
  "key22": "5Me8HdqGWwb7xvXqm15AEZhSVoQajhwRS7MmgymzMH2iUzG873gmGjr6rWNkaZB9LS6H3Stm2vPKbtxSXtxBc1W",
  "key23": "257j4g5zKWKiMXjuy1AN7b5RAusy1CDBNNJjeaL5HSUnywP7PvopSLK8vwtae3m7ihd5LQ9Ptcu4f1Amj9PpJ9mk",
  "key24": "4qLL5D3h75AgML6f3CVb95ezEhCHYUHRkJSAVLC6fTDz4pMwFLpzdjG27qiMiAMz4xB1zuA2FRufrQykGCXEhtWW",
  "key25": "4NnL5Sx14sPzq5Lbn5cDYTPF7NkRkBikPJanKUkLRDZhEMJQfTGV2YtUJLkCSBW3Wob8Vu6QUtxquezDi8aTgHvh",
  "key26": "3HgsVAu8cGk89kB1VMK4mQdBSfr2sugq53LCHVdwk2pc7RnUQBRx3jGs4CEXM3TZSbfe9HjfxDERpN5u7a2csnb7",
  "key27": "5fnEsPXh7SGMAfY4mhwbPxkbSY28gVG9sCCa5jG1UTxASrmpkM7aXkwb5dfhoZLvEYoGqnt6uPtHtprxcXoYY7R1",
  "key28": "2nmXcyMNXeMSB5p3MfXn5niLcrPCaBq6tQidnrR2byESWmWZzVe4KnXiybiEJFd1TQ1T24qSXGDfqVgFLHpAWpw5",
  "key29": "3Nif4SFrtsY9vrMTkEZjyY8kpHRKMyi7J1oEk9whQq7eAc1B8dQo8X2XNBtpQr7wvcgCnsvzpS7SD8CfUFQ8sqGS",
  "key30": "2C1oYQnUdYC1U2Fj121Msn6FSHmM96WNMwpUi7HwjaSNjCGnMtBSH8bP7MDP35c9BqsExoQb7Wp68FDXrFspAzce",
  "key31": "xMD9YTpaHK26YatJgzFmDELefUENSouK7PZjA3ieZhR2iVidmtCytY9g2WZXmRQDoyqM9Jd8K12nWHHVFPSjEbA",
  "key32": "jitSFqFQ79WxfpN9LQSpzhtWU5EEN3XzSUrGvVoZuDLz2CAP9PitbKZHtnHsVMSJhRkxCkEYmQDSFSJbAnCnGeW",
  "key33": "4r6tYyh4S64Qvz8tS8ifGC9VAwN2h5V9Pc1bALi48mBtVcN7KNSZzFUT1QCG2pYGKCqqMUFMCNh32fkpr8PGXcV3",
  "key34": "4PjQo4NfGsksgaxQB8FGyBbhowX6eXeMBnzvcbMJSmJhjjpMgdaKM4dWBPJWvHCfpbLbxSDpdNx38erbKyTE1rG4",
  "key35": "pPnoocq2CfqVR4qhDwd4TS7rYpa1A9wETjhk9mWenmzuxsS35XhboW8Yo1mueMLvEowi59C5QKo1Jf6HkD9JwsC",
  "key36": "3R4fCEPa2Dcsup65DB9wgzMjKayUSKnocGRRGD6CABhfThrf3XWXfTshazd7q1fauSxtcZzt15E4TwVDYgiNKspX",
  "key37": "2Erjw9mSyRhG3axQCdVWXAeAuLusnPz7XFEiRY1piyejkhjrjXYx5uGazPZAJtmtKbQDPCWwFap6kk9p9xfDpM5y",
  "key38": "4L52ymQb85odGRADeCphVZGd6LaaZ4QieNFJBqxpHS5MK9DndEr2Gwsa1GFqNVRboPFNUsvLbYuoJ3j3Y7K2Hyqo",
  "key39": "iZqcrZLZUXqnUbB4QyQR2eut5SdEzL2WL1XEbvK9y6Y9ppBbnwxn7HoqKMQmCjUVXi9cZeRszedHeuPfr3EY8ga",
  "key40": "29fiHMEPNK5g8G9HXtNZJHXmXkmhUWZqoWYCLccC4NxBHwqiAvV2XWc8rzDebM3WnBqWPi79agGkwbQqiWe78zXF",
  "key41": "4qdg2Hh9Gzos8NKVJxMP3YvcyVDBizxo2wBqekUgJC2x5Qb2FMVs7inbePA1mZWEaeHAY51d6vsqkw9W5VpNxz1k",
  "key42": "2F8psrUyF2BACEPfsZcnpCYaC5xK7Sx8SJkvXHxB73H4d8GJbdBsjDrzvNjUdecJv9mGfAcAUcEUuKfxgvYuXYg5",
  "key43": "38vNBiYuXvb1aqaE7V93bhijsuYzZpo89jnKUcLhGCMeQoywkK9qdgDZoQ2ib9rRpaTBYV6AsxPskDGzhi6dk14Y",
  "key44": "So7zyNU7fbNd9thAWPo4vKHieZN5gU8E7DjW4LREM19QWunR5XezRRXg9JPa2ZCEjpgJ54tQDDn7qNNRxXnUQD7",
  "key45": "55KTmzJKPgyfZWngV1bUWB7xmDjNpYCrKdxKdWFZcMnQqDnE91Kfr7LEiebDBRzxx71Tc44ibk3JcRSBcqgkoYD5",
  "key46": "53pSZ8ko7RJKiozakNwDHewgVubQT4jygAZWBCVocgwa83X3CWWBh9fPhWBuHaZw7z84AeHXFq4QaqKAohUsDruc",
  "key47": "3qwcHZRmkUYWMYUp7FtWgeahrZV5GK7ydhE61txy3pxaZ7hComaaUVy58w6bvbboPDKojbo8JMDvkCPPRakF21Jb",
  "key48": "CHi9RFQ2Cb9PYtWjekzoFo8QADDNUUKWa3Q4Jp8DcKVEcvmTtfg55aYndvzQxkj6ttEqduERRNb2Cf3sAZ3M97v"
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
