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
    "3zK4sdRxL4kPUJo6iorfM6Na15x2HqcMDhJqdJMmsXu29C3Y8n4VxstTfqNgaTxMdwhPQWp8ySDeHgExXdiAr1Yn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZSnUdzu4ESSQBcFBqi76hpKJXyvzgthEW4PdYnojLZeFwWqj2bBS1HDUia42SWYXpiXWBGgbuKndTfacZndu5JR",
  "key1": "3NLqdELrbqYDAHVwgEzAQCbh2azg7d25UUVDtTet18DZgCxCPgin4dG7hvMtXkE2JDSEpLiS172YxupHbruordU7",
  "key2": "4sfDuNmmqhtwMkGo5SFeaCohYvtvdN14o9SWWuSQniANJ8zjzbmXxY713ADVfen35ckNxpMShNEcuMbiUiV4UwHB",
  "key3": "rv9cgrK3EVpY7i5SLWBiFhjUujCKApYRKESbv9RULXfQDgsBTFGbSk9hhym13R3jCRS1gzbBr9V6qYNugdg2Aeq",
  "key4": "BXEaX2Y5f4NfhYsiYoWBNczFLwP5DHGVEecS9si5YMTs345JBi2JM86V4hV6Uiu6P3f5KHC1HpwCwirU7TShTaA",
  "key5": "NyDRG2x9RpxSvS2U6YAcXCNnYTj9pSzdTXasxxoozuiTGZYtf2Axf8deabg6qhAhPybn5Gc1apA7dZdCEk5EYEp",
  "key6": "3UA5TZhm3qvKBmLxek5XGKRM6MjEU3E1fnKkZ7avW68o87p5thvfTvaNbG5eHSUEDuvFBudqWYTiwaGYKsWGPXUR",
  "key7": "5XyzaUZxPEEPepkHrsMC5Y4LZQRDg8YGRtuSx9HfumFgVXykb8sDaEhA4q6N8X2JCJGDfaDNv71yVW4ku5Kvdrqp",
  "key8": "rJKqcQURvvgM3bATMncWHGixHbHEJd1WDj3dCaRsQV67QBzpZtebCJNTCbqpV9K1SmtkQNb3wfvAYLfsnHixX58",
  "key9": "2CXDfg9KNEKddpkFppnSoxVhF392631Azg7H99fpN2eaJmcQB5JjXeENTYBDsJa6C1S782Nf66Q12aEAxKrPSHid",
  "key10": "3As12FPnJ6FiW5CKCPPHxnF9HGpqGbeKLgXikApMCjSWdwkZtoj1h9A5NPx4VdwmVHsDbc3rgkjSwbQxEQXF9Zho",
  "key11": "29LjopBdoKGgsGW6VoJkSKeFSquEmMsNRXmzTDgQs7joao2FsicUJgZyLXDCXk6efPgTbxjZua6XjynPFUVfroYu",
  "key12": "4PmBa5hYmHKWqkRYrFNJKVgEeC4nzzyp1pcrH2KQV6SCcmDJz8Nd3WFiQc4AHJc7bHT3F8bPHH7CKdnZR6x3exyG",
  "key13": "4V2Ex5BYiNKDuYZuLSm2Knm5p715ncTTF1L2hUaUcmPdab55Y5Ki4TjMFaziDjnCV6jkV1GFTfc5Tn8Su1FiRpZa",
  "key14": "55Ceo8bxesp5Yc5gxeAvMbbJxhBgwpYDSRRuTxbigerdQfxDQbWVPo8gWhjAcCZPYWRWhGKSqrikw1be6JK4qQyp",
  "key15": "3B7caNvQwFS5wNuPkhhgwL9YJoQhJpf1Stzg76CFgfAniseZSPmKzgWQeByGCKFuBZQ6rJqUoSs4hRBcPn8S72oe",
  "key16": "wP7biUHbuR69Z4isdFTqnJuD7eXYavQgnT5WFAyCqUMgXgbpDoN4FZHcwciiSJp4Hu3MPorbG5FR1qAmGcjrBgm",
  "key17": "5i3tnf5XsaZNrC14tixtdwfdiSjGnkMASJqrTAKTENZt2RsW9eVsoG5my3qYCNL3XHEm6CKEMxwGcpq3RjBhLVDP",
  "key18": "2n72kReYxQNiBbnnK9nytUiuA5ntt9saY7nUbVkCn5JwESrUyFdzPyjiV94SADMfCmHJ1KJ3V1nSWCLNEFN7ZTC2",
  "key19": "5MpFasB1KtqqdpH1XnVpsM5Pm3AQUGCiyKJ7VabiKWd8iFYPS8mfXKz7exm1i7AUeu8XrPQw228Cut34Lq3npyw",
  "key20": "28tEbiCz8qGqQj2oepYcz5jztU2aNybs4ovjZELSNQnbUhzi1LF2vik7rEwRWyF5c5Q8g71QpKNfRf2mpW3YTyp6",
  "key21": "2v1dCH1CtM8heBLFkayEE4WdPdYfk1R4M9cYjMQHCDGwaqVnPi2WRw4wqofLdDfag8rMhLgmyciTiDfM1E1FevNL",
  "key22": "2G9TR5zvxpS4hCGoaa9Q46qJzwcUGUkuqZ2tpqZqnpcmBax5tC11FaRvVq223husbM9656oXgnb22AiANHtrchMz",
  "key23": "hSerHXjz85hGG6qxkbQQoqNrYRX61DrfQz5vuzg5wsx7mnU7EQCK7UCNKrxWpVDc1rjGaefs6P81CTC8Z5UcxPF",
  "key24": "ATRYXefRLkS6qpNouxX9WEouGjEaywLfHYwnQC9N9Nch4hrarQNg7g6gYxDRaQsNfb8MNj17xxm1LAUTRirEiCt",
  "key25": "3ES7NjfBa8RwXSugxUAbrDJekaAvnyve119GvmenQLQd7Qd8cXqswN3QuzyAp8h2w9qWXR9uNwxfP4GQxnzK3yU7",
  "key26": "4K3MQjxYkLaG6hWAG1PFjZGf9i11vst9vByGMXFQrv7rBw2QhBfnvyunRdA57sjZDUnrdA6PXZDzXLV85K8yx1sd",
  "key27": "5YbJXgTYZt8sFr7H1BTvLQadmxuCQZMiKMZSG1aQGDp2j9HGpLGU8WP71jM2poVPy7k8tWh3oL2DPKmQPzZNFpd4",
  "key28": "4KFpt3wZpAbE79ccVy1zBh5fiPkG8qjfnHr9ye2zHpe8CYces2F7HZyVESoU8FuQYPpRBraUAN74qaLwjveXQ4PY",
  "key29": "4LVMLQdjPUkzYxZYqLw7kv4nxMyoPm4iU8QqroTuRHt3CVbaXcm5iCe7P3wXjthgwE4EFjn5iGkk3ZpRRvpUZfu2",
  "key30": "4jMMYwY3ncALWLjVgJQcqoqCr1RUaVKZ3gi9mhHwu3n9y2HzLTGGFxjJFjF7gAS9XksB2fZfwQr1rLgw5fau2zZg",
  "key31": "39ejTvpzzVog1X3ZHJvsjfaQBYJHVphXeVe2r5Xz9SnQbcKm31fyMXrPKAN5oQv1aM2fndV36VS4ZXGpgzD1ZMkE",
  "key32": "LAtz9WMM27HU6hpj19rG5Y6q23Kauqbo2GCpLnAtxnu3UN7FybpCnUZaKowYREUQNGTz8m7Q2wBEFwdZEpzt2Pt",
  "key33": "2e5RPNfZ6bJn6S2k2NBR69knC8DapVaPq4Q8qaHKzr2L6EkjjLALpdnVvNxkfuk7ha9TwVbgLcdYr8gcqzdDi5kC",
  "key34": "2Ji8C63MjTmtZ2SpdKzJYMbnZb2VyHMDBYZRVpiceB76wFJHkPwGXSDNwrBiEwdvxZWq7tbff24hGhJ1xfz6ekC9",
  "key35": "46v74k2jWefgpezT2N7MPAVNtu9qXcnHSnAFhwrkJe8DqyWX7gok81Cry5ApH4QfNW7fgskcyiwQs1qKGNy8Ap4U",
  "key36": "55CbnumvNCZmze5W2vuQ2PnyVUKjBD32y9C91ciGpvNCJUjHewDHHmgxZtVqdYUNrWCx2ww8U2MzWUdD74Jqce7v",
  "key37": "25YAftkvnFJ2akkpXHb2XMA1Ttob7BWWtaY4HsMyjbCtgCxuL8FNQo6LBP13pVeM667D228dtKZ6vTWMgaQxEaZK",
  "key38": "32FkV7WLTgZGrueDPaie7RRqQfCmopnwR2L8pZt2EqpX4neSH41zEMHf15vxWyxYcB6GbNn3EEimaGFdxJdEZ5H7",
  "key39": "khLhG3afZsVUCR6D1cpkA1EnArbqHhkVg6k6QFjpKJRs1KrF9iBBgKYyAZMFMKNFkSQo3jqwpA8JG4NgAMfF5GP",
  "key40": "CXt9kyg2dMnj1ovaxaq7KHSAK7t6HH27wg6E88tnw1f5oWzFKyTYBuJrDmWM33s6opRGHt7956v8eSrV5ELiSTD",
  "key41": "3ugXy1Lsid3N6bAZEUzbHBtmVqE9djhE4ADNqAgCYh2iZnHxCr19kSKc5v1anwfGhQ6NvWruFv5GC18hW4mQfnr8",
  "key42": "31n4unuCdwuVv2ipE3dRtZvnC1o1WqLihjMjuo17hcZTp6kfK7Neu4YGh1Ab1BFymTRGyht931xzQecsos1mRxkg",
  "key43": "4i5DYaUqmSzodVTBCGJv2BwGCGPv2FQ68GZ3BDkoUwzixz7VxZU8YTV3gA39wb8cpo1Hp98HQgB7FV72pRQm9VYx"
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
