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
    "5fYMFkjfeby88kTPBi8kYh6FWv8T1eU2YQA2fR6ub29qcqTLGfAdwwdYjDRiDjXMzncJnRwwHoKmm5wbiPjbzkPH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H8iuV3Xhvd4hvzs8rzswhfbHosTtrZyWgi654TcpveV84TfYMU1LEyLmp6NdLHBqVzeAzv4VKzkXhQPjAVnjZDh",
  "key1": "2AS8DAP1nzS9uZxacTdf6yq7DkvXqMwjpFMoAhRdu2HMGZWNg1Pr2yw2tqqMhX6P2cDQuieTTxnWXK1vZxwMGNpC",
  "key2": "59gCjnTYunPH2xUCypeoqt4rM52NrZeLs2UF4HXE4a9oaJ7tiezuzjQutUBdGxUqpnqfgN7A9UQkSMdmMREmeoCu",
  "key3": "5yjCMd5LjgAQ6XzCGUmfmGwvefPh77NEwvwTMKZApsLJ3aaWYFEfWWy5ZFYYNdCd1CxDL4TBV7xWfUnZprRrHPet",
  "key4": "3b8YJ4i5fq43tTAANAh7fdDMYi3cJG5oamZD6w1t3ESDHxjtLwuGbF9QKLDiBGLZHn4WNTzuiNbzVN74dPoxGmBi",
  "key5": "2SLr2p5LsviP4gM9yML9VDY29DvyUUSZWr4Y68L8Kq2TXwdYug1QQhDxQPo9usA8pvgmB7PVBKurB6z9iGtqTLgW",
  "key6": "4SSMgJyVU9rY7ZCxo1amg2ZjhQX9f4NPjVEsAfzHDfSR93SAHNtdf3u7nhHwfLGeht1atNnGL19TewZC5Tt2u5Sx",
  "key7": "5FQ42xffjtVujAEfEGbpxSxmheryBepEEAJBhYYuTncqes8MMHfgkZPdjwfJZGu9e8TVU8bGLX8UJieA5Se1SjXk",
  "key8": "2MjqiZtbkiZh4gqzcVeXqHAxVEeS8m9uV8mqSJR6Qp7xpraRaTj9TjLfv6qm3KwM9DEibbQbJgH7CswkF61A6LkY",
  "key9": "64Dg9YpgSDbZSb6Fg5t3ndgLWi2nHVitpeMadn257j1zwVrNq5HBdpp5BsBDZbWaFTiSK1W7Jt6fHwDgWZzyxvJG",
  "key10": "2EftcpbtnKA3QRMYsRTQUogtxdBNM8D7BEDouUvSG7F79aTjFEq7cv77MqEQ4EQHghBQqpgefQqh1LXGRc7sZw5n",
  "key11": "3AYgc9Mya2CX5Z5T5iyxZdYGw487WbCck278dVya48dAg6QQC2tcZr9hsmGPWXryw6AmKBSXFPXTxdCHakaxQQt2",
  "key12": "4EYdtMn9Tkcmd3xvXK1YaWAfGCvmxmAsNL2naFRa65kcFdfjrfaL3bMpCRNnGWJK6w2BzBxWkynAKvA2JN7TuwcL",
  "key13": "2z2DjE6frCjHik537sDKMGJxqHuL4B2pbz4vdmQkoFdCnYakium3avWmeiLFdeX3f3jUviemnT5k9YidYdJCuPrz",
  "key14": "2TngGcKUDFF8cPS1MNHCXkdzPekJHdrWVNwyt3rqAUqR3K67LgrCpqyt8WPt9uDBqfjsTNE8eQobHYoYW3y9CkhK",
  "key15": "3kS1Pk7QNhJ7rStHwL9WorWHN73YdfgKtidxosqoHqy21qXLqJxGznHjwwnhSsh1kirSVJVUdQTE4mPRpc1z8SfJ",
  "key16": "3LtHdC1fqLxXm9GHwSc2qMccin8KnGmTzHocM2S4mxFky8xATGBG2gJnUSBd8FjjQuYDK1FZJZUKQuuiZbDiiACD",
  "key17": "2eHfVSAU7ur7D6fZ4WgtuWtNk88dXFaCswSXRiszEg8KFFYGmiBACixjvHW2aztRRrhUiidkAxS3DBiQC1LxVs38",
  "key18": "3j2H557s6sLTFypFmBtYsMWnntZv4rczPSn559ujq7RQRCuWZwJ6LB8cQxqQJCERuDAHfzavVTfdcPzF4pJgp4h5",
  "key19": "2k13neQY6Xa1odqsHY1Y6oTrPZ268pXoL7oDYD4gAiyBhhDFuKvYHkPSmG3ADwMDemJFfP4wcWo1W8WkUVDddnGy",
  "key20": "5H1SeEy3a3vG9PrdBRCGt1oMYQZUunrjPgxro4BzKTbrMAYSvhcmtn5d7MZfaabrTc7tT3WE8JHCPxqVbP3gPoXo",
  "key21": "236HeRSp7ABNddyyZpmH2xwBHEhxvGid5BzsXkiv52MW5NRnotrjJYucGXH4gpbpg95HeVyKjbXBBmZgBt8tcaJY",
  "key22": "3JLCdVuFEkX8DADWiPfLMUPBR5H2AbBP5TENvkVMo3WuTcA5H8nkvSgLK1utgUDuMTLK4xu86HEsWDdN4rpkznpC",
  "key23": "5tWzu5rjmk7xkEL8fcHfAckd5bDcLkmKMoC846AhT2jcTHb5cFTJ7GzGGPtdmf681CFfd3yhiQtiQSJLod7EQERC",
  "key24": "4En28VfYzst2qmgQ3Rv1pujpRtXdwtNJSbfX75FTWwatvndwFgVaj6mvouyMnmgwWm6g7qr41TY81ZieY7NCUACB",
  "key25": "5oSkZWpCD54XWbSUDU63xnxcS5Xoh15KdZo32zPBjxH7pvhrbK1CER7Wxu1ctfXHc9YyDbuYKKFqP8XQBRUArUzG",
  "key26": "4aw6UfZ4WzXGn42xDQ8d3zycfzr3DFZMSUpLCHxrPxdb4hib7PGDbXnFdC66NstDKEWaqh9oLveqiBJWhw9dWajD",
  "key27": "aKURbZB9nthtXU94mfUxD4af8wmEbnQZXiD3qX7wvX1CCikQkeqd1UoeAAzUMvGL8913YaBnwWE9j9So8EPvzqf",
  "key28": "2dhfr7pCBkQTLtiK8dEEWuJyR6ocEAMMTFSed2vePcyJG4DwEjN3aW4yMNqgdBCR3opC6o7nXj5TtvRhAQWQvNAm",
  "key29": "4mEPPsA4xb2VVrxF39v5LHgKQpQdAwVrSTGNA3tMhK2kjaqHg88sspvnkZpJQBZaiR9JVkVLZifvTqt7Rc3oCpNa",
  "key30": "WWYeC7kA42zXsTAAZKC8q8Gmgta4PwarxT9f3PZrkbzEbN6BYo1LLKsiNDUAzd4c15eGb8obeLawittfzta173G",
  "key31": "5BPEXBUYKe5XaSDPthXVjc9ergicybC7yypaSDU1ZsQdExLtAuCnZaqkzQARq2D9VBWPB4nC7UiZCTRcTE6agj7V",
  "key32": "5HGrBivwD7HB14utR6m9qdvU3HCca6sx7iv5uJxs47XvrB8pex1kGNaS9ZUQ1kDhdk5PK5HQtWyboyL9RdwtvFiB",
  "key33": "5BLGcoaTdWXRv6feKn2bTDi5DcdsssUEGpG4EQummRr7s5LFzDCD7vLhmThFbt4GDc7eXVu5i5DXAkbWkwUGR4JN",
  "key34": "2ugSXKNWDPEA6JZua7SZSp63g9vWDdDoDTa2sxmxvCjtuNQYgAp5zFv6XbLXgb2cDbHUhia7WFcMFjmziaheaZFR",
  "key35": "q78jnyWXf2pS9fjKFMpcyR3uqgackckFFn3yqve2yZk7waaeszENkAs9PtnYD7SviivffxM8TGXA2fhS5iFmWu1"
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
