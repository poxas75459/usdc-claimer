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
    "3p8kNyYyb3kht7RKY6cCVpmQXxnN8PkLSsY1aF4jHgmbaQXC62e4weLnB72bgFBhUwtasdVa93HxoNtHaw6W3emt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WX5raszR5rqdRLuTeFaQ71mNaUWp1of4HpRZJv4uTbGT6vYe2FzXXGhCzAkNVCVXdAHq7UFj8W12L72Niwj1pCK",
  "key1": "5QJr35MrA1fG1oJUBbf2uGQnuZnb3xF7mAgYsTvfiN1BFhfQgTBkEWiy8FiWS9hCWnGvxJAnT66u7PrqABMCD2sv",
  "key2": "3b89kM88rmEYwtDxEQkxew6MAope7Vdjec7Jn3MsN9MuLPjemdpwaWcZhhxv46BM7LT6JJ2C9NCPFJHrZW97xyoC",
  "key3": "maSo6oL1VJ5daPetHtHetvZC3G5Kaoi2qqxNnfyXisXEEEESzSvER9YFdtK1U9fYpj2kXzi48uV7sjT2ac98sGw",
  "key4": "5GMavc1XoEJcDTZ2HoWBhs16VQM3FefzLguLMcGegPUQiS4ygXAcNxUHj1xQ9iu312ECDeBWRBFfPxtL7jSRMs8G",
  "key5": "QD9z9XtEoFvNLKg2Y2BgQjPBE36KRZsSocg4bHte5saurPH3xBjZ76UFW9fdxQNXL54HomggK82yvXuiqpfSiPu",
  "key6": "PvJS4xcwsknoG9NqQzcum77pJjwra9DVNvvbrHAifXbabUY9xts2kUgUXgddKsR1o4uvyT52P8XWcoBvWPiRbdw",
  "key7": "5qupTaQbkcmqzP1A9zD2WdpyxxDHfJ2fh1arb2oKuJHZwfoT1UotYpvRPbsx3DHjug93TzqA9y4c4tEMo1gh1Mvc",
  "key8": "4r9K8VJhZCHXbU6jCcsvADXRuD1z3yBe6xfvYoDiDrapZM6n2kZuqdaoAfz2FTZsmbYyFDvyzdKJA17EtVD91BmS",
  "key9": "4L1mLDzZvGJhSEgc2iy5Wdvoc7d7LPXmSbvJASXzBRHcmK92wwkVDCHjSoaHhAuFT9GetxcELhahM9bVznKvSPf1",
  "key10": "51L1k9Er7gAnToBgDERFTEzPXbw5YW8mb7LwprFABJ4zWmYUio7FFK4voZJLJxxm9LHStJPyUEoAHnPueCB4UBNK",
  "key11": "5ZAQofHB3AU6jAATtLWuN62rP4MxC8XwJd6tRPynk9H5N9dPot4mTLch5S1EsgUxGWRZaWN6UyAUX2dnyyug7uLg",
  "key12": "YEXDszRkBnPyjeF7PAWFuFNHTPhSWuUynaRbYcY5hucUUnFgHgJEdLha7HPdex9iPmQfZ7VBXBVoSqRzVTNbZSM",
  "key13": "48FvohgDe9vUAbJbp19s4HgsanA47j4iptHFa44syFkvPLK2kWs4CQsakHqiGTa1Mtbxco4oLYXh7qqnHd8SH2wo",
  "key14": "2275VozZ5TjAGfPaAC41zjfPqpWxReZfrWLyHWJ7wQffVUD1P57naP3CSRfV5Z6PAqB98SYSEJSHCPWrNkiQeXry",
  "key15": "3i5UuBvVNUoxMPK7JwW9M8wkdNYQHzoTKsMwLvjvsTk7CgJuudvM1fqf14xsG7dhkb2kEASHW529R2pgB8odH7da",
  "key16": "4HmEhwnagDRTJPFn4KBX8KCRAFQkQ3iTpwFgpKZb5Ur2EnBeKFb9u5LVDtGhw8xwWSSKC16vKPvigVhN9RnmCnb5",
  "key17": "2quoaqWXthANHCGn9kDiGZzxJEwau3nMeoWQHJT9uJk9fcekbCkAeNMNTnnzgXbEZ4rSW84MdqBpSVsNdYSAfas1",
  "key18": "JQCZx6B7zXKVKu6U2AnChv6C232whS8QZV1LJtPJw6e6ZrbqvuEEyLhKsHrD8XSNhXZCXpmChFs2r9Wdv6kkXGX",
  "key19": "5iYELxBJmAAH16p5ndpjM7x3LauBDAES2nKGr11RhHuLx4HCKjQ9GqqjxqLASZJ7av68MuSYSDHT9KjUKbhQeGzb",
  "key20": "43EHbHyEinKRrzMjxzrMQGoiw2rwTVyBd4WF7pvjiyeP8rtU3bwQJvefHi7Vz8GL72z9EZds29KjNznxartRxPxN",
  "key21": "41Q7SnmDsnkABVGQDF4xepXQioHWu9RmtLSeS1jCvhChcp75rmhCqoy2LzGr4TAH1ih4kquPhgc2yMRPEuyNWw26",
  "key22": "2dTm6dG21771eFvyAp11Ht4PqjEjzXBup8StW6L7FMQzfVKZ3VSrtUjbryHDQwzP84DVRLBBtdtZzCMYwq2rcdch",
  "key23": "4Y7uebVmM7WGKbb7iCWBQFyGFUGZya46N9hMbvSzkjuxT8LQ7Jayj2Y6dhJGXMx7mFmMU5DGbDbLtMdn6u3aSNu5",
  "key24": "3gCSXB5hfdG9CoMk3ZEiaYkwxnFctdyvqLoKB1He8tkiH5JxSB9VcLKQXtmQV8bYz2JNB7x1SMeBTWf8KVQNQunK",
  "key25": "er9K1gjhwgQuKwZnqYBoGH7rtx3JzvUGLcWrPAtUeH2kvUWSjY4kQo9b8TdqPehp4ofxMvhw7EhoxGivxQt87jC",
  "key26": "2dCYAfQyCcMgLkLgANckZL5cfLFTfRZvbBdPGn8rDDfxhbFn6tci5dB9ARbDCc37nNMbAUvrk6eCDS72uYpxBdLD",
  "key27": "3ofQrVSHZkGkpcGN6m22PkXBEXeXawKVsHBrtWkNDQkV2ZNazY7i1hjPzfMEtm2cEpNbfJAZTkBQ9GvpVKp6qeAi",
  "key28": "3VLaJuYiXicc2yE4v8zrb9caxQLaYHc3aByBWhT7UCmXiCucQpxdbgA9SSWBDZYJtkXwfMuSWSfir4S9zRYJao8u",
  "key29": "5pVzVR3XH1rF1koUdRSb3yCopH9ZapzUFUaznvQRSgGKGocg9qTJxag3FNAGiqBJPoex9848AhmNReNvV4gUAPkQ",
  "key30": "4g1nw1oEkp7gHUiuaczvM5Qc1haCr79SNbahvHdMXX5kurnfgaJ1sgyaG84aGUCVsaCZjxuCaKkufLniiS66TGv1",
  "key31": "3mYKykEtchD62ddfemnXfPNG3EAQWB6skDntwMX6pn6D2nJ3HDMJusSFtcicLhb3rHeVXgJ6T93n3wbiB8SbVCTm",
  "key32": "4YQ5EJZLays8ydAMb1rKhUpA9pkHh6Bu8DyzA3powg5k1CscBSDtuaXc49Uq8FTWWjGVGPTBo4Ek3SSuH5DVR1wq",
  "key33": "S53AKLoj1wXwhEaNHsBd9nVbxBE88hVk2zLrQ3miQVVBWcESfpKAQq9HEEhpA6YymijUrNCB7tJYTeptvdSAWun",
  "key34": "4fUDR3fJ2vr5iRLhmTtvF3FBstRpfJy5rSisVThxnfc9R3L82wAgL3LMvvrSirbXfWPeNK8oNf3hYHQk2bvZeWCW",
  "key35": "2u6eauSk2qBiAqLypcHhhKGQ8VRP15e3JezC6eBSaHafwUkPqvUufx5x5miZWm2AahppJdDqwyEXXueT2MGVpW2b",
  "key36": "VmGjgBBsA2GKSeBmYX9LjRx1DYsoEg1NffwJ8nNPHqunYPbL7NBvg9j6tbHDraf7knLq8Atu6fdjiy5tbM1Jm1R",
  "key37": "2tWZAeEt2bLUEduQc524UD3AAXkDDtkt3hnEwWNW4puLBoQbAdxL3RXEgDX8pMYWhufPDoZsdnGydWtofn5digfv",
  "key38": "3Pq5JD76VRPNFgZTj45wgjeUvFJD9yRmKmGSU4qwk5hLpiMEzH8hoqVFAh3bb2iHnbrxNBVTePvkzSRPQysUvQwb",
  "key39": "4rkNHc31QauhDNFJ8UzKhpMD2CxzY8ndNCgPBPUcmyGPjkbUmtWnnTFg1VgcSfHs1rU7eACBsVQyQeHdaQ2PTNoz",
  "key40": "5Xs9o6wujG5gmpMgw8abFLtH5WjZTq8aRewCgtZVFxaQFVAH4ks4EfjkR6W6RQxp6GtjY9j5bJnwcLcMfticdEJa",
  "key41": "2i7kVbDYp4edTPWMVvkXa5rtpmLHs2mbpGSoxn3jWLVSNkdejjrcRhv1xTj5WVtj1VdWsQpcvou2iNJT2T6Bn9Ux",
  "key42": "4iZrT9tiPs5fortaWyiUtpUBMcAZ49eAhJBvbcAKANi4oitkXAvtG5cq891m8e3rvzJ2Nwg8hN4gz68cx1ZKBsPD",
  "key43": "3wcpGmBZSd4FXKaQBEEn9Vzu4X6hgKMbfw4vyKQk7eY2scHZAmN2uf6ywFsHCGqCqidhzMdo6d73XHxJ3HbvYKHr"
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
