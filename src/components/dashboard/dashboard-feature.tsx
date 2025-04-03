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
    "2eHCw7WDUerWChQS6ad5sQ59RbX4RbPQN1LWWaLP4WiPbLJiXE61uSyym4ZY6jKvwuuCa9AurGCS3LyrdaPg7GW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dK7AmtJWtZJYHxnJaaYU6zM6m9nuMNZKptDrT1kdg7bahPh9BVT5wMZRvrgHcZ9tehMsK3sbNf9ShMWrUruSiYM",
  "key1": "3aB4Z9gWRReCx2iP6Tqwa3c2b7pADAHLt7Z4YvMQnerforSZ4JMeyZ1Aaph39uiwQtA67hN3MiYD2SRY3mBzbZts",
  "key2": "3poswC62bS5pLzfduQ1EoEsp52HjNjuRRdrgBZQqcmwnoVzV6mpCsFRa7isgNxJ8xW96Yy3xKbKu8TuJQ3RbsKD3",
  "key3": "4yhU4BGSQ1MxZ51i4ugSntXu5UsaDGX8Zb3148F3esE4MnRA1BPc8sY56YTMwhDc8C3ZquMEvR7gwnu7574Mrb6R",
  "key4": "QgG7NB6PwjPaC3q8FuYV7QTgtMrV8QfzNNfDE7wgcekeVPmzHVMgrMhoHeTV5vLyp5aFSCYjt682oLYR6XhjvWh",
  "key5": "4UcPqJRUrE56UZJVQM8aC7FBo186rfBryptjPjAuMtuBBPvC44JGXMedLQcfyDVqVoE1SHMeaRCYVced1CoNcZA3",
  "key6": "4Jz2foapWHbKrCur2aCo8sjEv5ma1zUyLKWAL7bWf3gXA6twGR5DmEZPqaVtfv3KoU43pDCGJ4T33Pjnmi4aYYxp",
  "key7": "3RnCNTeFPbX9uE9pSCfANHACsy4EyPQzcSyMQbY7zTcEJ1Q9LDgf4EDmrpm2EKXPsrdnwYUS51RAb4Uhm8yd2h7g",
  "key8": "5Ezd8qKSprkRsWkGzGkN3YHXVo8LZswRikdQzaNC3VbrCg4ZBaaUZ3pmwP4gBQ4CtdRy59GGYXAPJDXxMPu5HEDf",
  "key9": "4U8gmNeRW2zBhYiXH1fvGoLCfiKc9CE619gDCAvsutmpDBXgSfBoBBsbEkxEnH6jdGyuFLnsir2vtA2BrpfsKJ1j",
  "key10": "5b2smJ7FKAvaDSUPtE9HsqJLEnr7DZTJXGBs8z7VJRMH9vDcNom5hxg6rPRoUwYkCH3s4UXMYYs9EdivnYBBsesU",
  "key11": "7sWSTmTnKBHzXu6oQKPiSXw5BY375h9LWu5jt99dbC1xmgnEpdr6FtpN1Z1yeoYtYhsG8mTJ7uz164DwLKoumo8",
  "key12": "cqQ4LjFRBYJGA8a9GWwBRc7GN9qwNn7KnN52HBHg2ifQie8bLzSMEDj6Ym9gNVc7NScxfpgaV3X2Np6kSdY1QdR",
  "key13": "4NSrmxB1QAdDy7DhNDG2WNAhy2CdGqrHHA3aEAetLG6WGV2ntEJNJUwEBskHDQmLAEZ2PqU5frstrUsNbqYocrmC",
  "key14": "3KP9vSmvXjjSjRtwbhccYocTSz3MawFUpni1otwpLY5KoiY16XZoGSk7fEyFYy4C5uWbb4ktJnCeNQJT53NHyvos",
  "key15": "4takJsTkUGFGtTArfca8LxB64spuE9rhQDbBiPWw4nJcFNia4iS4VCkK1v29x6FLdh5k3p9DFvygZF4FcASvvafd",
  "key16": "3L8fd3YQSgxugSZ8UcQEJPz45JFETSYraNh65cctkyKgSbJZyZJJhqs4e49vw1VvsgMFdG8sXJJtoy4ygVh8vuG",
  "key17": "a3MSmr7Ece5UpY23daJmTC4mhgo5ytFZnwCTDgoGWSUPjGdWYyZVaPXaE3frUiKrXDdBi1ropABVmzpffhjNrhg",
  "key18": "3k3nvofF8bv4ocDgSAzF1MQqLfr5p3JtzEstmKQtdfVqaXA1ATsgvaB9zVco9zmXMrq3CaHgg9iZwxszQsHNSpJF",
  "key19": "4zyEuq1WP21B9BSfr9Jz2GaYsRmdskwNbGSdMc3p4qFKs4S29hp4Eyf4QwFGVjkuQnH5sSMSkZuLhqD6RWHGqxBb",
  "key20": "5yN44dNagJXDBBn8zAtLjMzHXpHNUncDxqAmSKbMSApF1ut2MkC3MhgRQtNsRqYbgCTrrfjnoa5fGxyhaCWQdGb6",
  "key21": "57B2H16vmx58rdT4BXcqfunhSgjPWGdGScioAWeF3ZYUbSYqQNTWdcHTD9RQW4rax8VAukbD4BRm1MGD5We67Sb1",
  "key22": "SaxgseXrURaEsZ4mVVjxNE7yLV7PweTQ6DJo8MRUBrpRoFMJQvK45fo1e7YJQnqZXFn2tpogWeLBK2874d5Q8Au",
  "key23": "62HvdycdWCztduA2BYF8jZvjk1ZDTtVffWtLr7osf1zLbiRwojFbR3BV2CQHgSZsTuPHBQyNrPjmay9wjZwadckL",
  "key24": "hkJr1jcymERiPWjYnJmmu7rqLAq65WHoQnDUGPZT6S2wpffQVc4rH9BkJAJ9tuWSRJNXRhpEc3LxxRxFyY5Ah8X",
  "key25": "4Ho4b6BdGd12QyBuGCiAy4FKonwybXzwDb6CufbNvfjfn3Ufs3ow7wX9LuMemGhve2xWsNRGZrfvu5qMSZkoNEd5",
  "key26": "MPCe3rGuu9Y1czptDa9SD1BVN6kJpg6vfqeCwuxwmi3J3wsELCaZHmKwQmTRANXHbrhm3ApzivAVGSuYnmn4Q21",
  "key27": "4nXGinsrRJUoaY8JDe6K1egKvfNvQ2UNT9MUpPfW1fVwB31umK4oj9Sq7GuEN48Pm5Lx1psNAKVmrHwjSiowXWwi",
  "key28": "48oNMo3yupRSTnv7SKQgEUm5RdGvc3DpSEZ6d1smjzsEwtyif62bruon2pCoCDoNPTqZWbUmTVYoyz7UvnDoq9TT",
  "key29": "q3qXQJt1SRqpWkZrdT5J1DDnKGr1PT2hR922VbDVN6QudE1mwHomWoump92PBJTzTyzY8gE8a8s3XjBhyJcPUkc",
  "key30": "efqWaVaZJtLB7m7dfqQTHUgi55LsyyZWXeSDrLVyBG5Udw331riEQuHCCSRPioTmr7LDJihcpDgY8hcttbVaZq9",
  "key31": "4iQABgYUrkLFigvgExJsz1ybkrgQZfZdbqXS74yN8EForqo2g9c6wrhqHW49zPNzEzH91BwjtW6Gg8uHj7aTgyFh",
  "key32": "4NfXP948n4SfrswjQJvKuJXLYwXXLNY1StLNuRxDgKaVoQw4C3ehUrdeihCgQxQgmALwvnZPr7sS5M8LfSeTawm4",
  "key33": "5G5qpDMPsCEWPT2AzmEkdRg19JUAm2zngJuPLxUQbea1fJHH51Hyd1kXQcufd1N3xWhf8wCXqr7PnnnD2PE7gmhK",
  "key34": "45GPVrT7FgYmLWboUbEEV5S5U1NKapNTQ2Red7yPa6oVyLCKYBuE12EXCzoGVhVQWXeE733E4jU1e5gLse7uFUSc",
  "key35": "3WDDWLi7ybDUh2oR6CJDQ32LxuqmnHornJAJNcRbd82wqef6iSqQtnrcLHXLQwhEFmWdQvaciwwpXx2UBkDQpQGm",
  "key36": "3gJi6euytC6FFzy25PSSF8ViE1SKSBAwCD1JKdvG9cpMAs7CqAgKDrnfpTvZZKE93WyM86U6orBmFdf85z8dtvLL",
  "key37": "5LjJ8dQ2avxArxgNBJ3uyaHhhNypBvCa28hzHdhaoGFztdsZiNGr7ZiSxXpD3NCD2Lx72BpbBLMXENMuXfnSrsV1",
  "key38": "VM23BHafN81f6fkEzhXk3R4kiJUoyWefwEefy7sSCaKCvH1Av8hTNXayVdfrbdSjvuUHHVKG99vZL58q5wLSvhR"
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
