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
    "fY2kckTqAWoX5XdzEWbr7yTwnc86z38tXSTkngTkYnsWzu4TpVPn5MC1nxzMnF4Kn1GXh2eUpi6FFhJsJ96epxL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MUdssiXG4mV2Kv9SkNiQRsrNTPscqgr3bFpNkADAYXnJBym2pRxk9WaJJNph176P26Q8m938eRe2BFqpVCgjdeC",
  "key1": "5QT4nwd5g1DnEZ1VDd6CWWLdrDjZDwca8K3PJpSnnjjzEjoHK8iTUaQYCwgUwf67nf7XS7v9aAsED1SWLvXNPPzP",
  "key2": "5SgbfQZmMv9EriiQFW9utLrQmkaAmyb2bvvMVJ85iAVt3YiRKDQPW15kgft2mEK5oXiFXMiXZ2qREDg8t5MHG6u9",
  "key3": "3ig8LeY83FYFfYeQN4hS76MWpcVvjVnAFjm7cjyrp3Q6MRExVP1khbJSwf4dhNk5uBkubo3SFFfDtGnji998zJk5",
  "key4": "49mtifDYeBvZCxqhW3dGXdNAUk9tc5QYXSMdfdcacWfirDyUPdyvd47E1nwDvzHx4zNarnZ2f7CugyT7BXDQGie3",
  "key5": "3uD3hnzMCgfLsEc1WsjJEPeNJbN9fdnVQmqBT46XYwtiAHpJDr1GomnPGspCMKHWapZizNfKsY8nqmL3BucdL93C",
  "key6": "hH9xawKJMEhEwmmctXL44xJMSvSjquf4an14gA3gN97ceW282aKo3yFnZr6ZB24c9npLk4day1Xkph4ryWucj7J",
  "key7": "4wWhzwU8swzfjnx96wUNJ9wqvFgpDP5ucNnPzRPMo88qTrQUsdyjA3NxWzuHcSmUJyKTGViK7LNnfkxemZkKdJEe",
  "key8": "5KtVdv7TLMrjktUyvvhvLHyLxPHry52afi7qh7TG38iKy32Ysrgp8mUTmzaoNfoWG2SwQs7qbQh8w6HMADEAhp8y",
  "key9": "54s1spM2SNh2y1Cgayu4xJdvtGH4RAYLx7hBo8zVEghBLc5s8UHes55XEsRmbkv2Xdk18bbaomV9aP8zbMAag3VX",
  "key10": "2BajMk97VLqsUdYh5kMn5ndymxmib6Dh9sVQwTgszz1RWsSxD6cnPpmTzqQXHKcFq7VxH8TzE12tNfq2mwNMtC7R",
  "key11": "4AHzX39RDPg55ntMGbpvKW2mu4JAQCheC9sWwz9hzzCLAHzDj8uvskBgw9F8519Qtmrka5KRig69Mh455JGdAQJB",
  "key12": "zpi36qhBmmkGt53ESjr6aQoJxw11MVfxdeZEtMMVJ6diTRHZkpk6u9XRVbeSACosuiDeReq1kQroJFGpMB5rza8",
  "key13": "4oaLxE1HActivjsDkjUmq2TjfJxNHnNxzX6eK1hFWmMPJjbk7Zw13u4B2cwAznCSDerMXHaSCxSxrTH4NfsQ2EMr",
  "key14": "43sgc8KPZFuWMzWeUfA2gZZ5FGbJnqBR7MkkKED5yPcivHiTJKYofnQiD1bj5Ntc1BG5mRdcH7HB7JBv6zEbvXNR",
  "key15": "2TXfxTBQz8xFS4PPMHmfAtbc3A2f5PeWwA8hKN4TTLT4ainH3c3DNS54u4M7ntsekgAjwxuezpzSuZP9HRGzUZU",
  "key16": "3tEhpm5HnyX4VXB1qsP3odmtppXMxzD2J9MwrWrvUyFpgGWveL6JaNXSds1hPbZeFUKdtdpWYZM8odhjzWxyretX",
  "key17": "5ExtpxuRzcHjwoCJtV2F293CxvCHGBLf2ALxG8dNgv1NhRkW1VDPin81TRsTVuZY7D8H6A5D8HEqAmVrBL1W1m6H",
  "key18": "43acKfNGRqNWUNeeTaDbineZUt4aFvJWYXndWQaSG2dxVgMZg9Ddoe7V6omCZa9Y2YqVAPjpzbVpv4fwMHwFY5fW",
  "key19": "5RWFfyzRMf2ERAkNg5NgyRbzecz7fK6NqmvRUQTW1ysuDNdWarRLCg6nRHGiaaBXYBS2mAJpXZqSVXA2ke5wHneh",
  "key20": "sozk86bRJ4FyAZE3UiL6nibzi1EAq8YwbKgbizSwQAwhg7U3Ex6JqGTcmjPA4gbuH1gy7vBUzJAU87uVppFYACC",
  "key21": "5zwN8BrPv3bzin71yd3u78z6dcGy6My24zwu9uPFpYSjMmNsj64E35eu3Jmwf4h5ceecVH98WXLYo6EAF66ir7Lf",
  "key22": "2y6o5j6aChMTH2L3DNSoArT74N4NJ5VcEYk7832bqWXHPTCCNh5F9DVSmzx6RXfhQ5Sr1mVC6C3er8J2Fw9bDeSc",
  "key23": "36z7V4R3MpvYkwDLMsECj4TjpDUN41wsJspA5R3rot7t4jvpz4fUTecBPpNy2aMj4VN4azjT4q4k7vcFEuPGdmNu",
  "key24": "3oAqq9YZNzi7tnnsqz5StoGuQNEKiz6TGW2wRQK6r1Rvjcd8iRfHtYR8QLRE7qnfETM4cGo1sgE8bWLyt1QwtQdc",
  "key25": "45xxGj79Gc5cF8JYUajG8Ay2oF7DZvxYSbhmQtfBgbzfbPbtUhBrD11dDNiYjGPVqDx1Ttra7NW2r2NgV6Zyyoda",
  "key26": "2LgQhtV4PJCn9s5GgbfGiCD7dUiDeSzS1nVpYQVBVPJtwBQXuHqxmu1CKEBkyvQ9f7vgtEudexCDskrCWKPaADGq",
  "key27": "4BHaLvG3eyZs4UrYQDT74K1n3JZSnx3aW4uaEfpv8ZL8UPwRPdxgyLzzyiiWasScrG8Xq6AiqomVev58gyQqiZ6J",
  "key28": "31PXZkHZwRoa8jmPnUHnM2zN5RHzJhcUp6hPdLv77Du4DqktXJkTVB8kKYDER9hGsZAa37NLUWZXxyXP5SqC68T3",
  "key29": "2gd56Wph9ddBFTDQBtisHdL3D8p3kA1MT3mznfvqQo5xVw63QyeQQAU3MpqLtrCNanoxGp1R3ekB8woSMwufYhxT",
  "key30": "3zUt8BJxrgYwnqvu1Y2gfNXZB6j2DkaZaXTFEwDvJ3ujrMAK7J2Pp9JdCuaMcchdfU9DGtcEtWDLKyZR6M7apS4J",
  "key31": "5SXdBDJXZj2SMryR7JuUdZd6d1YemtWNaHAipPfSKdQdXsmHF8rPJavKEXTP4uyKnYZetVfKQwAZWkGLBk9MzZra",
  "key32": "23kVuzmS7ehfxDQgp8HvtfeS11MKqVup3nMX4YdersUZ3jQEFmDjZF6XmRPSDK1x9jr2CvbgLeHRzzcjzhTjVsW8",
  "key33": "4yDKDd4m7CHxrHFuN43RcyPGKn673MaKYZN6CUwUdmvqyWxDcWw72E4pATZYYhHULSRS12SdpDurkycoLJxwpT7J",
  "key34": "31LYznzdsjFyxJh4NmcjJXLJYPg6H7CUfbuYutCvnzkiw6b9f5xsAK3HfaiavdqR4Yn3xciT4azUxtiooNdhd9N6",
  "key35": "4s6mqUniFnoRk9GrnxVrwkGyUagKoarYPiar5Zyw15cZAszt9AmjDSnUduAkTtDesBC7NU5sMD3uzGzRh46QJH4n",
  "key36": "4PmTU3m6NMkYQdWLsVgedtw7SsvvG8d3aiVhqTyPcuhcK7Pc3DvLLQWS9hgmKopiAucHEr4Bf4xMTobMMjftW43a",
  "key37": "5d8QY9LAUSJXDrPHG9uUUebFuAyJVkHrxEVVWhv1Awo3Pt2wkLBPGdpzEZBXoWk2Ex9UNsNS4ZZWCQDEttm4G2P9",
  "key38": "5idwzKZDoRe5BwqP35FD9YERSmkouJA8fjmNsveqp9E6e4snsCSUZjwzUfmDFnMxvg65tTtSBomHGxuwUZrb8UEb",
  "key39": "3XYa8p6WfoddExE7sMLtdyhTh81kAmyg3hkM24JqRMpineQRsXLZ43eY8MGk8FpkBGX7oQiboC2mAo4CpiQ6cqHj",
  "key40": "5t5ktCvbGxpgZQwvEhiATCAbQP4mV8bg9E7LDeXhPYMGuJ76x2t9s75YNnawgEEKuCJgKdqXqqbojXAX1kEQDjVP",
  "key41": "5pQGFZJDjpuJVPpuv77SJRc7KbgL69xLHGgqcqkn5EncZX6CgNj18qi5aqz7usFkcJeaK5UTLZpspmdEokpPzdDS"
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
