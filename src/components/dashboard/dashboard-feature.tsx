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
    "3mzz8B2xcStho2iDhw7PFVi1tajDen2HS2WRKEE9TC6Z2BuA2qdKsaQpPYcHYq8ZWYqDgrwAuBDbVvrdmkfsgJ9W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H5dZYACHdVceAQGeRrYefto2J8Cb7VnRgMkJcN87HsgJiz9nq6nFWNwQ2bA44GGbat1SKLKk6aY1ar2ASVRRgWj",
  "key1": "4gHkYCTQzae2kEEKFZCYDzwBPBgX2N7T1n5jRqG6qEc5x3Pd57KQi5KnUJi1d9fBvPkwxG7qMND7Jp9WFXCu2HU9",
  "key2": "328tXRwLivCcX55eqqbEbZzmysB8VsRk1W3JWRFw3hUDnK4nXxM1pcEsm9auSsv8DAezdNstjsY7CGbc4chpmGAF",
  "key3": "52LnnQaJuMzmqLxAAVj3u1x6NLKoL5C5d7woTnp88eNkK2djDQJWo5ZdgJTNkxDN1spin4YLn4B459vzqDqhBxwQ",
  "key4": "3Tj6uVGxhfAreVhcaHcg17JSmNVob4qMKW9eZCkRPZsBQuf6GoXALY7SBqcD9qAe6oEw9ucM6WNL31TRYeLG21bt",
  "key5": "58DTkMGcCmFSLo87ndwXby7JjphpHsweEta6HXkVUjgDBGbdzXew1YFjYtjagaMWQdCPjPACve3WMEdF9GQ1Q975",
  "key6": "2RQ4ZTzeeJh7gmDAkFkPP3VeP1dkPkoo79qeSte86GU5YYfQCGfXVYsGPepqYadrYDtADo9xseGsD3rLwqTZGT1G",
  "key7": "5f7eNgViHwAEpTtcz3UoBvVe19m4KfRDnnFNM7JJaSETY7a86s5sHeqsu3j2HpQx8ZiZ98tZuyfYgvZS4ez9ggHc",
  "key8": "51TZ8cTsg9z8QZ3bEv9zmHBdXskSB6RhJqyZ1JWuGvudpNCed6F82Tk23NsTWdKv4ufHEf95kyxqUd9RMwBhEnbB",
  "key9": "4va3u7TfQxp65588YTdXSoPNbb8UoP2NtXadKPAN85gWQC64xfs7U8Cyx19KLW9R3vvdtbuUFEA7b2A5kSVcpc1y",
  "key10": "2xje3V3fpkxTrdd7qTENMQWhXrnYj1vgV9DhLmVbLXUVPw57s4a9w2EABvCWAYamzsqUJDoPoPL4EbmJiTcFngst",
  "key11": "5qNM2gSfapdNJ8CNLVe2GNp3KbsTs8VQdFBnxhn3dsvDNgPjHjaqVuycxRAjPZVSr3Kb5FzvZ8Fbn4SwoFv6Q9Cp",
  "key12": "4s6J7JjK471PPZSZvnteFLzCwhPCZbVGyMKaoCz9anFER5cgerRy9MroxMCbAeMmgm5zvcjpF33RnntpDbgz5Q6P",
  "key13": "2KAGnPkaGwtfKuQeUKgEPqVJg6K6ELKUxkdWFieDQtmkUtV5AFxuQhUPBXwY3LbbCN3ANMQUBipeRGV3P9gfUif5",
  "key14": "ZRdLwp8T3xtoJe5dEMbPXnPDu4wefmDmZSAypohEf2JXSKeJsWyZHTtp8tsg4QhpyUcpLScEstPzCdY8XohsqqQ",
  "key15": "jT4VzJsNMpztuQmzYkqCA7tQ2Q1Pq6WZpsjE6Gbg71qj2xymszAozy4FJ9dR7jvfh97KfaMDF22UJiPdHqFPJTx",
  "key16": "4rA7hV9cuTeY3xYXLXsd8ZWWkxEi1L1riFXeXQkPBpAb5aM161ehhV9shmBGrJUvNQdVHoZ955X19vwwUUYHdYfv",
  "key17": "4snjedFA5B3cHyyoTFZwACrAmWxdeYtXdUnfF14QAfCraAWNGCayMn53twVnU2umX5CNpQGwULJ2jFrkqF9jUHdy",
  "key18": "54JzdSh9S6F3Q8k5JPPX9BG5b5seyEBxacDMN6UqnLH2ZCAaW6SYLWTDjybNLx9bw7FE4YoaDGKeJtmYxadUyE6Y",
  "key19": "3U5rUsTwb1rnhDGafDTCLDs4kBjVPEYGasY7rcuJ4w5ens2UWyBJU2K7E9ab9MV5Fteu6uVoQN6XwWa9GpdGzNzp",
  "key20": "2rCwazone8sZq7fq598zeXU3cA32Bn7fCr5rZ45fAGi4NuooP8Q8sMyHnF1pDAqpeiLzad53dr16ZLZZBBWUZrWP",
  "key21": "uzT63XmGxLG4YmUnqoHwjPWeBERXkXDCNykrPVYyJQB83gaDeqHFa7sN4gMBLvSDWv7vDFYzsFTwjxCTcrAnTBU",
  "key22": "4h4yH9TQQohrgcbvnuu9SNfhkPeAySJMkD3cRi8Xab2Ch3Vvhr1azk4wcfnwWSz5k4e8kAEBVXF7D8CYteyUvi6n",
  "key23": "2naihDTJ3nrFGk2QUQfAdtGLPMcdC1z1cS7v3rLnB1FPDqUkEkHb62hMitrRYokiYxWS5rN4YAU4pWy9AFvHUzrP",
  "key24": "5JV6bGbSAZ1ibmHj2iHSR8nBKcfvVnT5uGLS78pVu26e3rp4XDZWGuuqtTt2GVLXL6w7eFWP1k2o4qGLvTJd7m5u",
  "key25": "51sE7JAphYJ6N3uwvgckWzqeDGzZUE7FifduMrwYgj4f5AwzSXnWabTtWB8vCkzgYNHwCt6STztfpktP2gdbXrnZ",
  "key26": "3VpvjU5kskSaEsEWMWtzrPMfsbxrnkjZKGs44Zixkd8E2CNgs9DHT6Dws5rc2FFcJ8bTQ3qMrMwirdp8vya35SeP",
  "key27": "3eLrCFJeSCe3LqedWrGYoLxmuoBkf57Q8gu3o6gh7inrskXrM2dn2qiXssmrBnYoqDVUpCugSRNzicYJ6fEw7CPK",
  "key28": "5Eg527tNzKGaKeNC5tFzyeyDxcdjQ5RLx7EQpRrSJ5vLhnDNps67UtRK5bvjpJPrgbAd31NXJpcPcCL4gfaELR7u",
  "key29": "bzPUNLvGyyQxMy4tsyAuyJhWPvtEFbKqP9qttyMLE1XrjeKF9yt3ez5svqKoS5xM7W4k63jBjin2r71fqXdepT9",
  "key30": "6dswxD81AsJa2SqYZCTqHbbftV7fAwr5Ay1iqFYNqUkD7jUM9jr74RyWha5vX8ULot3a3Pf6m4rgc2DmnekrfEY",
  "key31": "433XD7A7aFAeCXer582fwmkYefKPReM3avaJN8PNQTHQdWbW8nJ7PuyGvqmQXusQBfGN3wLDVbex7Lqg4Vg7ZCXV",
  "key32": "2BtWPxheqC42LDnFkYq1h4Fh4xayfxW7SDtpQPLQZnEGmn2G4sr4i2XAjr3mfzjMKBSWTakKhkSn6nmjcJiEKH7T",
  "key33": "3zmuSb2Ht6yRmoLXXnR5ZmruvHtQ96QMt8RErz6X9Zz1jeZVwWsB76whNBXsp61yMQG8xPhY11ms31PEadhAov3G",
  "key34": "3EFj4Nn2mPx1xKZdupdH5ALnBC2dsBariHTXNMCK7ya8SkMHmt3C3PLX58WHEAZEsCUdBsKD4L7ynwNRABFFJSDy",
  "key35": "2HBnRDLWvvPyh39oFvw8TdtYJTxpPESzxUWBjvt4SQ8Z4P9jbErJs8sPtXd2PpxLotmkrNYdAkCMCUPZXpD5kCyu",
  "key36": "nui8YBStPoAVUbr5TXmYpZrzwMdveYxA7FKuULPi7QAGFEjSaSXvpvp7EofgYrUgbEtYiDC97HvtaF94nGtV9TJ",
  "key37": "2SWEkihnFsXj5q2ZdGpoSbVah8ota7WYx6kEvyPXAMTS2vK1DaCgaEqJVL8Y9od4PRdrZz2E18XSbq9EKoqykopw",
  "key38": "4KGu93qeQuotxD1Qk8DayGbtpUj1vgtr5wr6x6mCfrNXWqEJ3a2dsKV5rX9KMTBcWCvM8HU9WC7WjCfbqvzvnSLS",
  "key39": "64uX861mDBwn3JsTTo4UrZBi7rWqHJHZDjQQGvd8bnP9QdpY8bURAzq9BHZazvTBge1rjTBxvw2L262inCttghTu",
  "key40": "3ia3szApJyBon5nSfoedXZc3j9gnjeZxvwg8UKc1Z4khfjMawhUd9d7UETabahHEnzxMCfkBAdUibT38udJxURFP",
  "key41": "4JgEPLdPjSJjkkTQ9L9ZXoxPmz62UTUwrjH1w6daqi6Bv5KNbRJU7x4VJnv52NjuXRwM6jQw6eVQBnoe9b9Gq5SL",
  "key42": "2ygmzqtLXxXe4kh4kEySQY1vp5Cwxf1UbtFgux6F6K7ZZbVBSKL9koW6YZBxeVNDq2t5UE1wNeSJMH8zsVzJTjBB",
  "key43": "oXQ6aKt2fPMinVW5nxDNDf62WfeVXGA1sLR9awU43hV3iaD16q5V1aQo78U8wQcit2h5amtzqnirfB3ikRkrj7F",
  "key44": "2dF8hqKF6qfM8HZNUxFuqF5wtZGZHgH2J5gpFMUQJaVoq8M4eya1VHU9Mp832svwwZEwqoDPBWzHbdCXz4DoHbS7",
  "key45": "XxZ6BPnhd6Xfc8EUwhMJ34apZsUPWf9P4krQMBy2GtWy637Cnp8nV1UwCHDciCjRYsRFtNqP1yqxpyaHGt3duC9",
  "key46": "3rmHp1LniZQCHJ72HjN5QZJCTEXSZk1Z8yCDdr9Y88ahtrv7y4mAeL638QMRVwFjYDo1shLrEygE7GpZqPDU2RAr",
  "key47": "25SH68LNVV5xZBRVxVJ96AG6PUR5sDAkTc6GqkJth62suAu8wjMar8SihwwfwKYWxHxY9MiSn7o2iwhPKppodw5Z",
  "key48": "4JqjWShiFr1t2PBnEL5weXJEpSzgWGuGTYA4cSKB5AAR1dkeD386P4r5krhv47tW6iUAZDoKNUUKgVVRde3Cakcn"
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
