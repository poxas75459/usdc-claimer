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
    "5Bb8QKtmS6me5dzzrWHuofyqqP8AW2sXQhJC5hMNwVV1J8MTxiv4j6y7gofHfJkSvxbfxbenD9W5VrTpReArSHik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V7HL5C4pLsTYgzxQqjcSLV6o41cCbs7xDzFk2CvpxaY5EBtD1MferF2xQ2FvyvLnH6ZCTNAebfyTGtYhigmbCTy",
  "key1": "2g9Fr4sA4yyjj3LQPrjj1ytHamePTLx6RXa6yWvX1DqmFK9L9iUiz5XxLnWDFkcpE5D5yhVt3wRoAfN9bcVQKZxn",
  "key2": "5mndy74QFxZC2Ud5gDHv9y3haLQBh23Bfjm2T56uNgx5FQNwKgoXn2HjqVXDZUTPb1u32Fzuc1WnqsPBEumgtk1a",
  "key3": "4isf5vRX8Z3FMV8FJusb3fsYcE7kGpj7AtU5QE4cUtpjib9cLodTt9LL5j1nitCSz2fk8LEkK37dhPVrVXZ6X39A",
  "key4": "2gu3hpGUey3cTMuuLdTowKXWMRE7E5RAiiCBKKqWkWCS9qkkxyCBgkdmF6DzxKsK4QtHqm1LsKfVHpoU31CEU7HX",
  "key5": "8ca5WSRyFaYWqPwfoMYcwTtCLk8QZJkiVp4eLrSNeFvpQjoJ35wqvNh57dDmCUmXr2Kcwjw5oA23Lg9NcqPSwtv",
  "key6": "4JWCd4hPejB13Rs9Nx4KtH5V9L9XA5w6Y4siwLtNyBsRVaeBf3AJ6NiQNn1HmZ3GupWVffi7FtbdVNbT8U3cmnNd",
  "key7": "318vd4PQ7EMTCzynKUCjSYQd4KAnaZu5HZ1z54MYix4teicQELsuVD4UfDYkdaWiQKfnCSrf9Gp1cqB5nSBrdRMb",
  "key8": "65wUz3NqDZ3KifAANzuZH7X76nCr8m5zCbuH9LfFzjQQvAAj5Ac9yDcQR7nisUR8SZGNPvF4ZMWS19NAjvRa1ByF",
  "key9": "4e4Mnx1YhY2nXQQWuthD8pxi9Gyspg9PjyfAW4nMLQbKtcwrVXbpfCWTsbrhkMSHXZ9r4qcuxdcn5LutpvRfAeVH",
  "key10": "5eqvfiizEiqgGvi7mzuzLU8o83WUzpb6dGoCztHNfzBytUcjbTT88DLh4pg2LGuTPpDdA3erAyf4YCz4oiihvUUf",
  "key11": "2mmWv1hXcSw4jebExknZ5mzAFXvfhkja5aa9au7JrtXLTcfAm3vzTvX573P5wjZSPx8ZxVUUwNYUqZNHDHmhZw1v",
  "key12": "26Xw3jn6hPxSAtAHZr7amgz2xYcKtgCU6nTepkFkjcLA5xoQxAtH6VCUpZcs9sm2GBCVgyLgPfwC9yFKenAxbsf3",
  "key13": "2zCq44B6qn5jpj9TRE51dod5RCnDGaCNEXVMhTSNVYYUqRKyaUwzZhmNvsXt5YPZxFokLt1GUfi8rqu9oC8o6ETt",
  "key14": "5ewbmWc1SMG3HxXVnrUDxC5WFWkDF9XGG5G8hp2fWLbb3ezRZ1M8TXF1MN8PZG4jnShBdg5UNrtwx8NgGCgHgLNU",
  "key15": "4B7DpicStuK55z8C7EY3wK9fF3eut1MyF1UQ2A3VGSgCw7Vjtt9NX1fyjdajWqxsC8EPBrZBPCLT63avLH11Ui9v",
  "key16": "5Yfe1UiDC7VUh7kuJLr7oAQVVR3oiW62hFUrdD8FAHZc3JTihsfQbBzDvqQzYPWei1fAGKbQd3Cy7BV4Xv1uyRW4",
  "key17": "3AgBUWFa1i4v14SWCcKCH3BtWUQg36eH18SYdGxBYD15381coiHQFvbPqgPgjhoycSHAAxbZMboeeMcAWJck6DuD",
  "key18": "2RMY8NkVPHPf9FSTEMJ59j8fwVsdEwWq6WCL31mpxyqjTw5uZ311iWwmHbH2YNaUS3KLv433K2or32f5XfR5PaES",
  "key19": "k7sp4FUNeHHkyBdFBZR7Kuyeb9n2wRLfUCWP2cXmGUXzgpXvttjESdvZBNdP9rFHAxD2bGk2XyQmUWvTm3JYc8D",
  "key20": "3qPo3ArKwXoMNeC21WxemFmSJ9GtokMqPdMvpN5tkPCfaktwpxDQKN8u6kejJBYUXPDG4TFm36eCeQskuoFeqh4Z",
  "key21": "32VYdengdYwZ84z8vve69sgx4EgcGZf7Sv1K7RJNo5iRw2VXATnwnmRR2oq9bPwVBCD8sv55fUWhbazfK3UKXgQc",
  "key22": "2pwB7PoKij1ZDPtQnRDkuQxR1p5RPrXBPmB5gK8E7QXPmiq6QoHCzhMchm4joCzVcWUyoiSwrNm12fVnLutWEd6K",
  "key23": "2cer5e68Xfnc8n4nA9cjGsQ9GxJ1WxiQ3ewh2rg2eNsiATiWrT6Qdq7yyz7iEgo6zaUb7LNnnqyGz1xRdVvijgkM",
  "key24": "5oo67RAEsJnpkGkKi6DmREnnCXBHwfqEY22mn1VTm8AsznXH5rkpNt8MDebPC3Y7SrbxsoK68HqSTbMUXZmmAxr3",
  "key25": "PqZE73RFTH5f9ngtYdD2eLejeTsF1hCRj9XXqmzKZLGiwad8Pw2xPC71rGxByRrjgTiAieD3YGZk8SXuA4L52Xd",
  "key26": "3QeBvwy96E5emduwoW2MdyV7LvXPXBHDtZRHe1yZpWsNTWMprDg2CoScFRUu2ovjU2qegdHxfjvHKurhHTmjhAQE",
  "key27": "3uVPDmHZ5yCyQ8HCLrYFdpVjWKkw1JtFdiLB8zcRHPPUD8YgKaimfDqTFbbLVp59zFyFr6iXvdPVoAMAygW3sobQ",
  "key28": "5Voha2REZnXxtLENsD1STWGuH4PhcTfmcmH7CFGHrK4wrHcMJfAA5MR7ukrUtipeaarQCEtG1L48eFU3DAhb5Mpz",
  "key29": "4BiV4UigaiTvBWb2Q1o4zuVqQHAxrjVx2BY7f8RP6WHMEt1UUfX1x8BqTPiASaMzXiQ1U6EEuvMVPwVoNLgGzhsN",
  "key30": "EJc42wuQnr5sUGRnxYHGKpcjBYJNdfTCKWxFxKhHEfdn392r2zYHARSiwqGckBYQdjfuZ4pYqfTuHBbGdQeynmS",
  "key31": "3y6JoG22iCSzRF5UPjrGp2kdTBMhc1XhAjG5HkdkwBajR12cgjV9EgATUNaeaqg2Ks8Wb832d3YTe2GWBMEstimK",
  "key32": "5CpiBZhgEyMWDrWwdU1G6TJGTJVQYYNAdsLvo3Eewz5pZu4ZyJbqUw6Htajeq9WhU3mZhrzzhXbekN66mkudkV83",
  "key33": "3Czde2R9StwbYSbTNgC9EfAoAhWmqnEdH6oGNDeoiCHw8ZSiSVPpZWo7sQ2DdoTdebvSBh3TbLmkhYFWN6iX3QSs",
  "key34": "3dwkTb3BexpjQnvCsXbPcvcm4ymF3cT9wzPrcrB6tJNVq2M4eP2HjpXCFSwgqb49ZDcoQwaasi1QGw7AdAGBDxP",
  "key35": "2KtcMYtGbHdYVYuMETGG9oU3u2XwTSk66P1diKcemB86dbdwEZ6mRJsLwUkkCc89fFBR399WiKPRyuC1YFiWzWPo",
  "key36": "Rx2pF5qypv65tipyym8JdiKYHVrNSDYrPnCDQkRqDbbhnVfGb8APw3z1UNPZvSRpcNmtG1WyPiDaxA78YH9BoCv",
  "key37": "4gnqNyaKCw83xUddHtVWsNKjZmT67w8Niqa1mXESUHeYQGyPZu2VZa8BpS32nqCqEsWpE3jpLYVoEggFbcAJy22S",
  "key38": "aANofi6dEkmF7sUFqxrbTuzbKnUAvuq7qvHxhyVzi9MBvBAuZrZCbCoYc5tGU2mKyovunyNQe372shdwjpf4WG4"
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
