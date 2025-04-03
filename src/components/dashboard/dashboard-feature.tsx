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
    "iC5oiMXY3k3DYRYW58EBURwJBeHQNNXFcLo33nzQ7ziwkFdr49Mdv4Yh7mUhq3EARHYDbkxL5UCjHn99MQMQfnu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MVT5FJQMCoiTsRarbzUeZhNaD8zoArvUXyzRJEmX3DrpfpxzvLw53QBFdAHAREaBzsYsCbQsEAQVvyDE1ThM9TC",
  "key1": "3gBRobmNGSioMEEjSGbnobbPXdiX7N4sBeqCw8Cnq3Cr1KG1eR54UsmtWLuFCHM7mUUDddA9YDvySzcse4Mkrwqh",
  "key2": "4TNxH72sagKpHfaBECo3n7oo36quEK7igVjyRZ3V6wEfjkb2bqye8goBsk5jbk8FneKTzukoMS9xSqCM3XwMG9cF",
  "key3": "EaM9nZtd2pBj7aUFoXXqSwGoMSox4dcibGA6XzbKdBTDUh3fiT52KgnQ1vNejmSFJJyGDWmvVm7LtAZutEAyYtQ",
  "key4": "5PWpwfwxQx3WKxkZom9VueEjn4HErD1uYKXsQBe896t1iPFBjw26CdvcNXDNRVr3Bsv31MptvaAEgNrBLcVuuXkP",
  "key5": "EQGwyjjfjhGsQo6VDKrDzTM5r3vwgfFqiaUcwXWwcJr66iaT9hddAzmZPGY9vCBGkmTFYxmV2aqQHQjJHezia53",
  "key6": "4Y3EqFuc5pLwkR35e5FsrS2hDczLDMdVQGdtfAAbZG3U9e65eRW8ohBHMvDeu82Ti7UEyGokcfJBWCRxcWcS6LwD",
  "key7": "4aihAeqvsjhTvVqB2W5bWfSTxQXctns7hec5z71Gtp1Pev391bCMi7QLvTkKmQto3UMPnZ4nLLn4nNcM2dbhdQL3",
  "key8": "4L1j4eVA2p4BfjGLBzrqz5HDgkQgqyXHm5mztCTQasvp8JpLiBr7F3GoKnyK8c1w6C8DLypePYCXQ2LFmhrAEcas",
  "key9": "2igjo8gdCiSyhGAnxLGfk411wVv1dhga4SShbqRsbXLpWQPHcrVotT9csFTKftfLAZAqWMK81JrXEYe5H32TbWts",
  "key10": "21NnJDB48eq5oLiwAxQtMKWN3PxoJBp3VaX2j2xfZRKVkMiJFTXYRhcHHmVB51JmC914bZTGXF1GBiYzqYhyioo1",
  "key11": "5AzDWsXdWJYaFvXnQFw24tMFUsPb7DPX41sVKrGYXetdr69GsrDrByy5xPfYCboYLZmFuqy9dRWSAv5Bb4HR3RrB",
  "key12": "3zABidP9PEbUnzRd2j7q4g9MU68rATYqiCUwkn5mQPVebV8dgH5zg7nwgYsewZykBCvpsc6hsQvK1udptGMxAX2d",
  "key13": "5RjeW2SKpdotScN1t19o8YSweqC91jAKzgLxXmxgVsUcDs2doamMk56GQFLHCo8w8p5N7NsLL9XauCK1EPVXQR62",
  "key14": "66XFRAoG9n2SMVXgR2LfkLuZNLTc78CRqr45kXhTcbE6VktmadW4ki5LfhG9obB49zdGJcoVR5cGD2bSrjKAgXyp",
  "key15": "2ioVrNrzceWdo11V3TRyikHUKLRRZ8FFoU8ETMRbFXHuNWcukt2pPMvuNU4wgqJpEBMhcVMRpsy42hs3bSFJ8jwQ",
  "key16": "49ioNcVrrtC8cYnE1wa1tkt9gYcoyZCVcHT4P76SwyijVHTaXdkmTag1NgemrJFkR1kZ7C5KibgtoNGtyiyEUGM4",
  "key17": "5VvDh8XYZtUsWGTP1JocKgWNvTjjqUFGpiEH1h9oxqjC7AjfqY5pRuPjNK8B7GAxSSfYsrAbRFLAQwWdpbvTygTH",
  "key18": "2tWAtbEhb825AYuob8de6JE9azq2ZPQZnwuKWw8GgphuaQXjLz2DczqtAagqpPqc6XS33UCfPUj4wwNUTxNvPYkM",
  "key19": "efci2icMhLnsuqpzoLb2wsbh8FmctSiWRSwTnqh1TGr1VZHTRKtGh3AubLzKgd7PDqtrvMB8HGEWMnPSg9HnLgT",
  "key20": "549NuHmiXtamixFrgEcabLQjrgfqkbNmMZEzWTgptT5aEEgtFhNVKZkKZQjWtEDu11wixQPd9EvhEaGnn4sKdPfh",
  "key21": "3xSRJg81Qc9RGH3HsXzmAHm6UemzX2iM7CGwQVwcZqXQUtJAE17mvSK5Xxk3Tpn51MLix4GsP4jZEBQd3Ffv4Sqa",
  "key22": "3XXSnSXJt6p1aHSDGikoN6Mekpt5SN3cTNBBUqXmw9damjHcN6FcvPmeHdZgMvHq88GVyAmjgx88BKw52i2LZnzY",
  "key23": "HD9o5cVALXjmCR3Crk5LakemehTaCXVDhG1z2uLdnkzMkGUiETTjR92CgAWHmQZ4mertPuf5onEcZM8NrRfjMZe",
  "key24": "4Rvq65HpFm2uRUNPRUPPqDaFaaWefuueexn6pV8yGaKdcjgzpdZxGgUaYmJewnyXKkmrQ9Cvrsrk83cUxJfeixpY",
  "key25": "2hDpmxmtbCa69HsZAfXzvVM4ezPdGDv7WEHBJdU4VPqNjE9oqTMhgkdppMSZ2Fh7MD5KRDYtgzHprLDS4y6xxrT6",
  "key26": "2g3r5WWD9e9FaxP7oVpYYvwDsoNhAF36GBxkUysZBqf6ijFtCUPbziAuvseHRjpnAjnmQSSYLnv5ywUnrPjvCNbb",
  "key27": "4ayWTtkN2MjrRQkLk71Tm9qo6Uc5us26EbYBg9cvmbvHBMPP7gTNC428HkA6CQyLR5sBgLDM1pYnWG7N1bqC7QD7",
  "key28": "4j9uAUvkkNcDVCKpcTM9zTBfuVjMtoz3MLPg96Vr8aJUDSXVq2gYVJCf9UgDhPFcJ9kAEVctkHbTYPNxn8nb7kqU",
  "key29": "3XdG9qtcVXFQQSMj7CWGfX5QcWMSMR6fh5vV6GjCqHfHUkRyJikSMACvYbucrZu1GvBgkgurKatJJkgd5gWJPFfZ",
  "key30": "PeEEZrgXoQ2GFp7uwLHypWYnP7QZgE5y5qLcn9VyESDZcxYqBw8Qv8QZ2wDJqH8pVuNrVXTafUqAZXKeZJD1vqD",
  "key31": "86Ae8EjUzFgVnFoX9CFpxbbpCDsbG4uDvqQucNQyS8eigX2zgz8tXQ3SeVdEhoTiGgG2vSUhLjEaxhpgyiGEZjF",
  "key32": "3QEkENrKjbFtCH3agWLzTX13Vda9SgvPoFLVXyFFSyZMm42vj2hHX25AKSZkoX8bbEMNp8aUc1zJXjSLoncy9H3m",
  "key33": "gqZqBoqAXtavAh6Q8uXiZ2i4DZG3uGUT3VCRGdaHJfRCFdU92PdwoiqRUEaSwB7KB9LcJydA2x1s5n9164NrmcE"
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
