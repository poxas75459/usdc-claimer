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
    "5rJsykP8QoUQDrmqzLoD9hQnePnbjWH8k4cV1npEGCB1cGmeJM6bZgovjX3nZ2rRzgmzkJEvqm24jaoUZthNRJTQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QCMHAE9h5UpyEiZw66xEUaQ4bKG7cxDFZRyuZeSNA3LRGqeDUvmv2yTxaVptg7LGhXKaxgk8KMgqp2ziZR6WgRY",
  "key1": "2DDEs91PirFqDPmF1417DtpJ7aNdYJ9rTJjCJwAX92Gkrx6BzA45DNjh6Jo8eWeAo9YrM6Kc7Kr6RUxTL3CpdtFZ",
  "key2": "53X6RGcXJk1B4UQtRG265D2FSPo8HbViqZeUDNxJszhSRBoTsSfesqmzMy9GWCYzhohLFFkefS455GJW9JewY3zo",
  "key3": "2NuvCEL73Sd9JFZseRDyNgXchy8mKSZcy62BLbByjaemcyLWtV52zq7kApihmQw8YQvpp2xrzM4gEP2Qcknr34Yo",
  "key4": "4Nb3RWZPKJ442WAuUcvvfsDEWAVAPzdShihmE5TkZctDJAry1p5WMHKHreWRTxBMBhFTvxXTzvQNpf5PpyV6WUsh",
  "key5": "51y7GK5MsRMHPx4XfnmZXwntx1EC34w3CdwLv91f1qx2vowYqpgyCLaMLA2d2ksB8Ze2MvRduJtWTKmeYcWr4Gzh",
  "key6": "5h9FMwm7py6fKxdx9yyy3oxDKiVZ3dvg4rUH9AKraMu76KCyTCBSU3cmAoXFHkpBxW3HyzWLM6m579uRmsQbcrgr",
  "key7": "2WT4qiHd697CPgerTJEHmSbaLzeFkEmguzm5PpdRc61nytg9mKK7uuhHNAKqmZLYpZnwrt8mac2M1Lobo1G7EeYb",
  "key8": "47ZdGeZPQ5hcBnz9KN328r12V9Yw2f9pxYoYJjQar6PjKHFUkiUTf8TXNVkBsTKBBPxg6LWnhE4qRvaySLckETUD",
  "key9": "5NvNsH1fzq3ex926YrPd3eKvHELPdBo3VJXMpXaSjNGGqzpt9NssxdZnXG5jbuzJ1coBYHn6TMFwc2kGF8CDjueu",
  "key10": "kenmQGRxBWvYyo57Maj9Bz75uzmcsiBR4RmJnTFFiVfbcw8Q2pejBMZcLF4hkr6gMjeXdwMvFzf2Yn9XfaSQAnn",
  "key11": "5iWwQkfNnmgX4f24unkDPGtVMPWBrub3Wqb5YwjgBbMSKeYEawiTpCatjEie4n5ELCbPkThPm6d46vYTP6o3YNdg",
  "key12": "3bBZEC4YN6MnGJmRwzpKwX1p2fwNSvkfGjM4XE3h1gxnC5hXWeo19H29biagcH8LPbyUe8NoskHGKEip75tEtyiB",
  "key13": "2wzs8ctsZbKb346aGYt3bVQ81Q2XDh3tPd5D8LP1xs5N8Kn2hUJyLDZ7F7UDrW2Qv2Ffpg28qAzMCnX3ipxShTtf",
  "key14": "5H9NBXRfR78He1vByAKU5QrZaczkTKwAHdmrZtY1BnqfaPq52q7LezFb5WfF7ovAjYyPe4DgAoy5TMvzcpmq1VdM",
  "key15": "Gy1sUahsvK21isEXPdkFEb5anMkgV1JnXUeSn44MGq8geSY87141LfNxqk8oKaGLpcf5gjTQvv9J5Z2wxnqmZV9",
  "key16": "54TtRmdm6nH4ycBJgRrzBWVuPfoYbqhe3mrxFVpkX3y3KUg29YQ41Lxn5nUaSsqjFtFmFjuyEbkUZS2U8QMvMev6",
  "key17": "2gBki8zh7cmDkoqnkSvBgbY9YKKZF24WHrq6hLgQAgbmSorXnmvncm3CqWaFT5fvFnnswPn5Nv8bTg1rbBW8Ftoc",
  "key18": "5owsVka9BPjMoSAe7z7ZABib3cPgajYBzKBBgaNsruREc3eXN7zEY1CSc3TXX3kJvqFa3T2a8ezWRGyRJ5jP4eBA",
  "key19": "3tooRLfxkd7ybgWb4m5EkNWcTR73vXvNK9iBtqtvxNwkV5LyWVKPSMfHbhQngY9Vw4snryHmjNcFFEKnCG2PXnUN",
  "key20": "5nREbdAogaBc7r7oM7uPWk2nYeFUDb6f9wCLDEU3Kx1o2Wmh1cwn9zR9deg9D5FSM6J9ccyQhkJ15a2Dr5TNP9SQ",
  "key21": "4U93aZBfLfsxcmA6a99z4WsJaK5sHHWWtT6uodEnx6N8UZTxBobxSbpTVLfNZMqVNXjyRvfakZgFUEJPr164eHz2",
  "key22": "4mUHjXwLB4sMiPFVUNKdyBrd2u5yoNJhtQahVVE9zhykjWAXemP9UM3fa1mwrYTjGG8jdPWVPksbYWtRapsiuj7h",
  "key23": "4P37xt91da4HY7LR7BqZBF9SGgdZCTDrb7BQV8n85uPkWATWgjazTZquR9GNbq8kNDgPqaoLvJM5N7GheWarB7Z7",
  "key24": "5etGG1DzefqkdFG2QabcKpQiYAAnSrdmEgV3XPJvasA1poWxAoRaDV5qG79oB9wZy44XNcfn4pXs11mnpHe2ZUF",
  "key25": "3GnpZFbDLrGmJcMdebPsqJp9murni5ZprT2LZwqBuECDfLqpefUH2aRJsNbmAqgo8KSPUhX2WLPk4UopPhu8E9WX",
  "key26": "3yezcrMJbZMUPx76yxYtn3TRZ4qA5oAvbvSVE5NQcoP8k9X1E6NbvurHpenfzzJZP1j2gctDSTxNyxe4eY4DS2oP",
  "key27": "2WWLH39QSGhRpDkUE7pcq97itvZZPXJnWGzqnyi5Nk8SpsuTWA4ydM7y5qe8STVERwm4i3i1PZTR83sJnccKv2C9",
  "key28": "zXP7P56URu3sV853KR3UEEBkcAb5YKS7PhSeSomkfEB1HDYWNv1t31koNZ8jHsfSuCABPiterrAMmVLMsBJ1m9s",
  "key29": "fVEER1KuMMBBcGtVp3W6eTcFS6NWQYwEfPte5RyCC7qcUiWoH17Pt932VAV9NFA47UNdYqnS4Cmhy4stCG5HFqz",
  "key30": "4KXoCp64zUeCJxNwGt8PAitjkm6MJGsvu6W3tvtcebt9hB2nUadDRnTcu9WhjwYTAuW4wnpBSfWMK5aQEpNZG7M6"
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
