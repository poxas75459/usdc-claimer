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
    "5MaJZQaXKpFwLnyekNHtmxMyfTD1k757QRoip627KP5SMFib17AZKqZ39emeT4A4mJShMMXBv27uAtGaeg7nHuzB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k5knd9o43R1KJDfmJWRqa5HEuLr26TkGcsmhXDWvSKszduaaEEL1mp1ewM4rv2AUE9rWMaXRpDrryBu2xMv2891",
  "key1": "5ia4pVymu3X9b98gkYAwY2oMvMyXFjc7FSoZFkGp1thyfFd1aetTYh345zRyNUvRoHs7AXDDyLPc5yPLFr9gj7te",
  "key2": "2kcH1PHqc161XwH7fBsczH3KkUjgkhVaWQoRwcUBKRiFpCM19aij7gHLCa72zeSgC8UmL5J37nULS4rWtA86UNdG",
  "key3": "2h9CeJgBvnWGTesWLXr9vyfmSnnp39LwmBPdEbjCuXj4z2Dis5FmMkJXZYdH54FpeQ3ZYFvgNRD3m4VX1WkxrUDR",
  "key4": "YSGZqQ7xTPdgUxydo1FMtPW1vXSe5gXvNUjS2W6newkntVsPdVaqXg1kfypSTwWSbZnAyieWvx3WEMaWjtWD8mh",
  "key5": "5mgo4DnhnCJz4VMsBwvHLhqDK9bdYvT8xRPd57RqxPD58SzAf2t8Zozy2yY5qj9V9BWd2jFXpP1M2iUivxdx5v8C",
  "key6": "5XtPRu38Vdj3NafyZma8VWWrN3kuYfJff9WW97AvkjoR8tiqs7eCQceUPbyvXASJBPC5gJ8vRRrh41DfbJThSiLh",
  "key7": "2rZT1ZAP34v5Zkn9djQoymGndMkQRV8x8DsRt1b5EKfK8H43nd1an39b3o4dPbLP4NEym6dokZb3121AH7mZzGc",
  "key8": "2SQuFD8iofWmo4gBTvDLxhDWYZrNWNabXRHEFHEw2sht1FrE1p9QouhVLL6m7Ccoh5wtDzByiQoJiL2xzbCi5bYL",
  "key9": "4zwTWKom9T5L7oCM956S7NREYBDvRbfEWEyESFPJyEAu7jmay42m5uHQfegjWkfSf9zkjfpKqRDcvQaHDawvjcP5",
  "key10": "49uN8p8HaDd99vsxYEx4wpTyr6AzBZF8dfgYST4dbWE9RpHvYkXaBj61LYaRnnC3XYXo5CT35SWgTWJdoymT1HK",
  "key11": "3vAAGYzr6qeaXotGeCaUVcwYTVmbTWvneGrnM5cE1FzaXhabkFyaRtUzF3x4CKErRdvbMkXgyV7Bc9BexUgxNHHt",
  "key12": "4XmU2QtHcpTvNWaPDd3Urij1czTfL1mYhdKScebUP3fdHcBEVUANEaCmJbZPcWfYq2dACm4rdKArgwwQvV1SyG7F",
  "key13": "5m5uBkqxUgaBmvKNzXsx9LxbFQfviWPTJz2b3VtssTQwXcDQNoE1cc3wBc8NbMWoNkRT5rSmoeR13Q5kgMf99tzh",
  "key14": "7LjzDbHXNcrBPrCfk9rJvbDHjsBLNhjNZq1CxUGSSzHkJeURzme2JpkDk95qB7PTED1SYrC3zKDMbyKAAL9hytj",
  "key15": "2vpwqA28DmUjHuHmAMf9ox1CSHXWuypqREbM8yVxaMuUtSqCqur4gY9z7yNDXVAhkTsxkigwpmjtCXuiZncm16MY",
  "key16": "3k2UQyUed4XCv1e4un8JTr8bNN3AJZQmGZDJ4Stip72pGgZEwY6VdZJ14FE22NNaBMrdxLVTg1ypK1ZxUo1fRUQa",
  "key17": "4QciD3AqomLXomX6yUz31MCnppuNmfWkLpbr1wfcLPdLuEhKcCWjn47EEnDTFHvYDLwazXrNxVZq2g1Bwt94ksoF",
  "key18": "dEUknzqwyRZZMCciLpMxqBPUWCPpT4qWN5X7JLB3g95GwJGa8MyLdCPjky9iTkdfNHgjGTWCh8gENqo7L3EJT7R",
  "key19": "WVTZQoRZFsTMFscpEYkXfHuWUn8dwW7Asxu5wcLzhs111ScePJZ8fbnquoAKt4m3i52KHEGSttMjwUKJPsqvBry",
  "key20": "3YDqFAeBWPgXuvyMGTh89AkfqFWmh6exg2tXR2TzCujHTrf31tpusqN6Cxft7y9kvpx13SCDKNMD7181fDJ5AW2o",
  "key21": "eeUBC7s7c1cb6y7HenrF4MQ18roGTEZtPv6GFZuVDLXwH1XT3Y8CUEs6b5BZpzx4EzWWFFBTXUNEqZ54QCnQ9W3",
  "key22": "sMQXaKUSCBhrLDnz3cSMmwtkQ2ipL88tQ9LR9xKuiu9sMMmas2eF259Zz1h5cpfWbvj7T31ZMkXmGJR9MzEEiAG",
  "key23": "2DK2Mh2o22hrFmh4riKoeLCuZbGGCiGX2omzYWvepd3BJG2E4meYxBWLjzGjfH1y3tMD7RM2K66nwfDR5hsafahp",
  "key24": "kDyxjWuDbRPt39fup3i8L9kEVHnka87K7Xo17rsADbBqqbpUsGv27AQTeaZWwmZnzERd6LF3KDdtMBZBAxedc15",
  "key25": "5qANySoTiftwc5ecdAHLCTFgUPiHSZEGKh3dNAMtjWr88hyEnRd4NKMp2CKyaph5KjNDFi3E8CyxkimHGv7gEY1L"
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
