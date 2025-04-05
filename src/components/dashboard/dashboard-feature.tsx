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
    "5LymQDCq6pP8VSebfU9JkXriW2xPknoR1UusfBoh7vCEywzABV64bbfTwqpMVUvpmbb6FDdzGYLGQp4Ug1HhpnEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cbAWkDgSPqf6gfXjqGUWqvLEVzFychQ7JxoiGpgpevtvY5tpafvV94YkX5e56HBXaQsbSNMh8Pc4Yr6PynCzQFB",
  "key1": "fLZeYdhsdQd4f6PUuK7SCSKneqqXTGqn2efLfHrAdXXDtnaEAvws6ZJ6HpH6CbCA5cQbm3CAHUY13tVzEQr4rXu",
  "key2": "2311PeHtZs3n3ij7NYBKTRASSDwaQ4bHLgNHYK2C1zQuFc8L1q8SVVaef85ydNDpbrjHtZQqYuxkYD4kZSP2sCBe",
  "key3": "5GECcfTeeTSeYCF2AAUV2QhAkZmgTGERHzS9ioyiMLbLP8KRu9LiMb7SGUVbZ6nuQm82t5UWzWMUPKgLmUbYtXpB",
  "key4": "3Aqq8zzSp45feLZ5AdsZqSiZafL89gNnzMC8euaCi6Qg3fThLtyTRhDRSaVFX2pyjnRjUS6stD85NM7CU4wmbe4M",
  "key5": "2zqzYkWsvBZFm3fPaQQJeMzwyBDsPWYkkmU5rJz3hYZWWszGxpSiVGta4smziCashdm3LmVReckhEL5bfy1SyFhT",
  "key6": "5digQWSmZGBQ1qdbm1tKqkoDzJYQa28d13SewtM6YQPRyd72o8oSP7qye6dgrzLGiqVBDea5bb4FDX7WZ3w1kW4F",
  "key7": "3Dc3AjaeKrWSqVtKpfURcGEVaGfCQS1UcY7BVvYYVvLPL8QWvFxCi9K5MYCm9ZjbbCchwz5zt8GtumgcqxcqJGkX",
  "key8": "61Kd1zhA7MoqnE34Fi5ikjL33YefPAEyrxkPrGVuF6BLmZaU1CxMbQRqn1RfsR3q7RTvuZ6T4rSfTh8XKB51Y2RH",
  "key9": "2krLTH9AGuFp2FGb5xHYQic8BbuSgucB4qsfLKgvq2Ao6SaF9GFyk7omqZ3M7s26FerD3uPh43uLBxeyvBCnBVWM",
  "key10": "4kf3k7wTj3BnW5Yv8QuTQ1UsMUbK2wqa5JdYQ8onTJaM25JuLLMd8T6CSNNp6d5BNqJidsgi9jp91PFshAqhUcGM",
  "key11": "K1MRLbwKfDPn78tUSCZ4i1DcdpYckaXBYCrhEo1T19FTCeyxrPqLkQ9F9Q4Q3aVfCQw5RGkxDFcUD9TjYQvHtvg",
  "key12": "b2E49btTn4sDoa1kvphXXgZtjPt9qFgWR5wxe2Zwzd4v7YAUpSPxmqiW7hzJ71HmUV3VDvyPzEHsqCWjycWezSK",
  "key13": "4UDSjr1DfXFfsMbvYQanAMcvbfLqXN6dT71d8Goqpu1DnXDm5bAUQKfp3y4QzJiHirzfb1LV26wUDqbPckrh8vVY",
  "key14": "5sxzwPYLr8bUdcZwhFGEyqm2JRptz2ECyjgtWUvnrofKopY9RoSjBAPFdDeDHwAfhAtmkgMAXBFdWMDchJNqocpo",
  "key15": "33mYveyr2GqbeA7LzL3qnQEwCyVLptXHkvp8y6VooJcZQoZocsYfYuXhjCBwcAgfqdLPR1ioh89hYTHzqJHCyNMU",
  "key16": "56QPhW7URMD5xeYHT52iFfehwWR2dKi49sndezC8ZWX2rcer7iBWLTUgdsHVLhDJfNYn7xTutkDfiPwBbGyZJw9T",
  "key17": "2FMxGsmYcyrY6Z83hPo8tVrE8DAmWANJVwZ9DyRgqWAxThwyiKsiVcJD1KBap6kspfgqCMrXtxxMzvfacfsshLyg",
  "key18": "5WUDG3nHRZ9zboctrzPiCokXecLCFgatqAW6DcAdFiW9EAqvKwkAofZ2qvUtywRmRcpruCxenDq9udNLRhj3u34W",
  "key19": "3dYAQTy7rMN9xeJ6cRxT19fPrhhsrrNShf6uuX1vcMAqntCPX8J8NJc6MjKpNp7cUUJCzPfHTzHW8u4XGxbmnQ3K",
  "key20": "KxBCMPgyMHYWFdPA2AvLNHjbzKoxPh1wMZCTiddeq5t34ELhape8p9LVY8M917Non5oHrm85s6LSoTzDDg4htGa",
  "key21": "YtiR7k7jLuJhusPWCnRgpSFqTTjwNWQP2c6yBY6UGzcVYuqF1KuEru64F634iZ6bnfDjrAUS9AZbCUrd1WudiLW",
  "key22": "5UenpXmbiYqk7d8md7XomPK8nvopXWRSPxWGSPUxhnif8DWXPampXU9fR4jmSCczPrmiTSUEUpzyrB43grH6bLjc",
  "key23": "4qUbqG6DbRYdYA1sUWcATtvzpV3m3tEBH7KTkYsGKHTzCnet2QqYNiYNNjAXJDrgTvCHax68WaAw1nJTNcTYXeR9",
  "key24": "28fhSbPjaDEcKuVKDhe9BRzoxUmB4Bv3n2L8EafLNvgFD3hyheqHzWQB9XkKcogpViTDysfug4BgjHWsYc8GhSvg",
  "key25": "234zdA4HH6sBHtQUevVXxbCcdME7f9aZcDohz2dDxpqz9P8zByZaaPfMyQGXUSu69TYXSf1VbYXWQ37igaddpe4s",
  "key26": "QJaLZRLpkbjxxXLY9m1Fuhk9BionYf6X3cQKUMd8uybWCZf43QJNvQXe3xR5p2sUmQ5jzQKgXsaMSrTs8kAjwwK",
  "key27": "3X2S9h7xpk6QmZQXpCcdRTQVWFwcEoFqPdDxHQmHzb1kGVzDJ4KbuiL19xk6RiQriauMwTvpKR429E4vrkikE7Bh",
  "key28": "2Mmnftn1bmZGYM1279UhtfcPwvTvEtXKyWNEvt3Wdq4QxdFj5Ur7Bb4VAFQPzm935fFor81m38pm8cBPWEH4Lrik",
  "key29": "cDQcdFAQEnpEL5mbFf2BgdYjnqc1qgfbfmGuundx14bontkfUMvKgWSnLxMarEEdHoiMk2jQXrJ9hMeee7KR2PA",
  "key30": "TY2pw7A4QzLAP5FFg3MgmiPoeATHS7eRsUXvFo6uSFj6S7P9WMJnRHL2mC9zBXWoXwLQj6upL5jY14W22nonZ8f",
  "key31": "25po3mK21E23DdgWk7pDZeyY7txSYp4KFDBxsLZau2P2r4yDgG6tBYc8pbhBvGXDofD98VLvAfzb11cmMegxyq6k",
  "key32": "5x4VNTV1PACNxefbhkZxJg2LoyttPxATc1aPic9Xuw4voZBEB5j1GsqVuBvcqkJMQkxUXBu7c5t922LM4eYo1qkL",
  "key33": "5sFTpVe2o3gNpdLpYSTZvVQS2Fm7Q6msKGP77LPtECH4NjPufbbXbS7Vf3dQyzcVnbsC6RBKsaZtNK8ik2JHWL18",
  "key34": "5gbZ4Yzk1afC4RZj3A8mWFpaC1FrUQkWrZAaxcJj1PR2zHS667DGUvGPSRpAr5tdEDvGAwPxivAzX5P2dChunMEA",
  "key35": "fybyiGxDcr8496dDJ1t5n99vF9nHDvbSQAhZMqwF8z9mMMmkKEDCF76XfzZbELb7kepLG9cru2CwehkR4n12zfQ",
  "key36": "37MWtAynLj3QAw2m9ybFqTWUzujjxJjuPDmCHyapiSRkNXTo56aFfj5B46LLTqWC7Bw1xPSPfxsAeDo9ZUqZwPRT",
  "key37": "5TQFhXjuH6yZygV4Twpdeg4tWBMz6TKP59yrkH8Y5n3vi3KKz3rhng6hfHHaC1gMqkKhnoYHW1b1MMA72z2XTPVf",
  "key38": "yuj4oHyaPkgss99vvK9JtFNttm9cWDs32AixQr2AddcuxCrM9jj4d1dbZuPyu4JN6XoYLbiLSYKeanvGDoCWuPw",
  "key39": "4r3YMRpz38Cm8dE9is7ak7y2boZbtPtNizBHrsrUdHabdsY2y2xPzc3MKoycxjbBMZnR9i9kQqhdnqR83s2uU56z"
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
