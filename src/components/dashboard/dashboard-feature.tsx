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
    "67kCJj14VPgqwEQTXtAmq1eJyMrGk8gufmEr3zYii3WFNv6fokDWtsBsC9ejwGCDDMvuix88kYuC5avHuETM1XzA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31xGYv8oVjehbWSdqjQhXamktz4SfaMWFtDvEMVJho5MNWu4WrtkbcQw7ZHZYa2BcWhi2axPR3ScLN4sSufLsAhf",
  "key1": "3Yd9SYRRQ2m2ebBFJpzB5Ft4X93zswrJrWPDYWiXgHx5tQXry1EDnwSq91o7sjUMETBkd8nsT8LGRyU15m3be32D",
  "key2": "5cdQgS2z8FEDsThavUYqYSqxjjNNdZWei8FLR43JB8S4bi8GKM31VhPZjFE81YjFztnWb1xFKfsJym9vsx5FqY11",
  "key3": "21cqPVULyjEDbdneaCbNMNAR61Q4kDzYqmxiZm335CacgSpzjffgw1HKFKJi7KhbabiAUcJq7uW6uXf7NDC7h6wV",
  "key4": "rjXyNrX8zNsnheBBGw4a8twiex7y9eJyoViZeuYwWwgVXRw4xK6NUXkt7SE1r6JKvs6aUeCF7MJGvTihH57qQKy",
  "key5": "4qV86AqmWrRRTNncGPAhav2JJ7HtzsQHQ6UdDCZuyRCNGfogh1329oW37wsS7unLdeT2JUy84FYzzsJJKze6AqPi",
  "key6": "67jcuEkeKCjvgTCb2Q7cPECT4HR7i72UtjXg1VtFnzf3bBcpN44RFd8KJDNHF1YCmovTC9pxQEA8w9gcxTvdkQmA",
  "key7": "3PDpwxEh9zZ3hCgmpqywuoTcyM3kb3hZLhB9KZvdSkXoMLHDCC3NWxsutYS5mdxTm9q8WpRNx7DtLFTWhi8WJXy9",
  "key8": "7aToTHvxryginMov2FiRAD6shQxVptKEgTDj7hUfL1FWWfHWBxgc1ZxV4PEN26k2fxYs7fVYZK5s433JLWJk6PH",
  "key9": "5n5ThnEc2qRFjgZFB3HvrN69Kiy975EMnPt5unUmN7EuoW5SoTfqXAgypBLxSos2k1YBgkvkdb5dJtAzrN7C97Sq",
  "key10": "2Ftf8V12AaLtKy6pTfKL9uoHvyEH8sg59EhhXMLgYGfFUFytrZ4r9Y6geEUsMS7VNqeZRoPzjZ3KVoP69caixSx4",
  "key11": "3EfVEwQVDTAasP1jaNjhCP8P2NnATeyz2Cc5U9ayKKumXfQzsrXQWtfNLRantxpCzyWJJVDGTXPr8TV1uNq2KZdS",
  "key12": "rXbihbYXfFJvUAJmPFcbV7RHgnyzHru8C3LdVNe1k5SLMXNe865KrWwcUFRn84BY8N4A8Qmh9pwggxkiURKNdQK",
  "key13": "3F9C4CuJZo19EZ49HyiGp1TpCksDgKKR7pDDCsaothuu79Y8p51UGGdxiDwdNoCSWyJBbuwjS8omGWc6K6e2YPxz",
  "key14": "2RkB4EArqQ22pbLXGm12RWebeJXN6jRVoq8pTAm3ZpsL4oGpJyVW3DevqGCBoRSTLGzWZqv6RfM1SVzWaqn97Mqz",
  "key15": "64G4gTh3A14cGQTHUT6ijSeKr9XMEVw8wy1yt1fCvXYP6pxpT9pPXuvpQxox6P16SnhcoequUUt5D3HUqZtHcWuv",
  "key16": "xBymKy9Uziu8T7NyV9mmdZ2dPBLToosUE9sKonadSZN1YejydjjNyrP6gj4K78ZeAcAZFvsknNZ4xY7q67A7Hft",
  "key17": "2Vb2cbBfwt1aefo3juENoF8AAaciZu1TreN5FFVCCuV8QsBa1xSPgLfCB6xKPDsvC456xVUJjvSaUraWgE45Lbuj",
  "key18": "2CX8MkMwRDzwNQPq7kFoKD4H86hLi8wy9DGf9HmWEVNgihbgMaKonjavSGHoqEaszwm6i43zyGgkHGoJ7FjZwWkW",
  "key19": "FMCkWMvsi1n5y42DuoDaWZbGnxmj1XLnof65naadAfxLfQnznc8quxUYhtPbhE1YAKKLkhCRWg11rSj7KdwnGDs",
  "key20": "4nEhhfr9Yz9xPE82aJMhBaYYup1KQ2RHwDXtwaSsa2FW489trYbRgkaZ7j8zHGAAXpdkPdcceffRuDS1v3d9voDu",
  "key21": "5JKTksfNcehEXTMtfLgzXN4APj7XtdUqrkbaVPEsEdwkmu8dGkxQFMMUUnJSbeaUuv9xUWfKBJKa8vAh91MZ4t5f",
  "key22": "2eFC1H4NXSctHFmtUCajf9XAJNEGR1qeUo7tpbaEzz42zjhiiPsaVae9ydSwJ9LsWGNPXiSMvkSofD79tL1qdDMd",
  "key23": "2SnwL5xtfw9XuiNpKtcc2zpRbjpVd1iepNkZKQBbrXRgURr1CfCiPrPT5VkswQG1vUh1SpfdxP4uDno8pBy7rvxN",
  "key24": "2MiyRbi6PMeaWB97RyRXWxNbbQi682HQC4ke6DHdkL31KHjCyhsvAsXwgU8dk8n9JMsBmSexDaoBY2qr3rysodH8",
  "key25": "5NoAGDKGEvBCNLMrc58kqG8PrwfKhKenpsKiSGzjuqKhrUmoJBwwtvydtVpycLL6tw5YAqWnCYeSLbFqHFj6fWHr",
  "key26": "XWSHGs5nwyyTPVr7MaBge8M9ytoS4iaNtudGaCvkVkxiY5u3owFjNvAEXUg6zSTvuJtzL8FvTokHrC6fwRsqDsN",
  "key27": "4vFevTQjjuMiet6Mzy4Uoer2aLF7iY1RVr1gC9SYpG6vi8JXyKdSj7RjZA7gxTFh6WcKeYkCWp4kntF1fjYo8VcR",
  "key28": "3DJPzbAcW5MvKpqJPSRyKjLRrE8MuW17hFggCsUP5evd6YecFKAWoFVqfePyMnfuSZxu8UAd4MThqBmoZgMraMnj",
  "key29": "22fJsVBjY2qmwgLxA3MHQ6xQANFMtSm6uoCt8nBHsm3aGSgoH3T821ZR2TYwJmrCGdHNwgUvrQSjf6NsvKku9Sk2",
  "key30": "5UKnvGK7HW3Kbwnzqfvmx6UuCU7WmcAYk6rRMSyetEhBHXi6zN3pQTjA8axtVF1Y6ZuhfeDgKNo4ybszrHR6PuLy",
  "key31": "3ZzWr5pwJC57fe6Ra1WNyS2p6VvxsNXumaskV9Qn6kE7EDJo4Do1TrgCeG9bDCdhc6wD1aTd7puvZuiPVHRXqPRW",
  "key32": "tMtqiNHBK88NYWcyf3T54dnzeLD6ADCibGEwzNuSawt6hXVM9PNqzgG5vpA8P7SynkNKA6Q14W8EFnYGod7F7GS",
  "key33": "34dk8pnbavBt5Mq5ePyUuPNfyuXjYhqy2x3p4gkqiznyFKow95TbkZGALFxQAPTNWp1QhVzRuXCpGu48NDihA8vN",
  "key34": "5BuyNcY7JSSSTA9djZhBDLjFtLiDFgn7srqs8ZSkYsieS3XkRMkP54VKHnKMR6ePTfMULVvBSUMCfLjaMP2vUhhV",
  "key35": "26Qp26yKAsbAB2Ro1WZWGSNoLoFiHvi9Bsazx4DhWigjhUhQVUQSvJTujpmn367dw6hu7dbFVgTHdjnZ4YA4B8af",
  "key36": "3rp97Kj4f8N7L1hYSposMsFXngQwEeY1exQZk9MuMJhacCroMLfk38Jdoye5YrLd2S5dyQaMPdYvB9onh4FDAs6Z",
  "key37": "5jsYtknhvVkK36BQvEUBoYiVDbAFGVvUM9MJ27SkPASfkYPG7MVsgP1HV2Zv2EwcGckASuzgMDgcYR3n11peXCYf",
  "key38": "5FWr5ASsUJNjDcb6cXacwEBDWtC1ESLh4iaBkZdv6BfZmi43kUF2zK8HE1RqTBNXzqQNjHZnKExe9QuvjvN5Y2u2"
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
