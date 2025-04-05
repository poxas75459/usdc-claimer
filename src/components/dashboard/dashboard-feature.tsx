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
    "86eaB73xfuzEseqQAKBL7XkoESkqgXc3u5etHbKCEeF2g8RW1EthoAAVMx3wrJseEgkYvomHZecQ8PaXco8H6Tx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e2tM5mfPw236WCrpATi5ezrkw7BMEz3EgfxrQFx3vCWGACtWzzS2Ue4wPxqjhzoPViCcE31YyuifCy5orGALS59",
  "key1": "3WskpHJmEVGi9hJSPMHfhjvfuAF2MNhFSnPHBLN3fULBqUPKJZc1PaePpJy324nCmK62CmkHe2AMd11cGYSkuBMv",
  "key2": "2j2iBQSq6ZNN4Hd6R42mMHysR5gtsALnwRQ82EgxE1y1P4siFVkX6FQPwfumxUp8ZH5UZ9DxhhVF8JWUCK1jcB45",
  "key3": "BzxhKMTq9XX42AnX3RaU8W7BDJydHPd629MychDYazKmgyrqfSEQCQC4wdYAu7tvqXHfoorTZ2Aq7aQcf7pY7wG",
  "key4": "F4JkBZpRQjs3A56FgxRpfWP7koPMRT4SeVJctJCzDkV2nS2D7NdoWH1835rUkRYSAX36Xb6MbRsPhtg71VkYgXU",
  "key5": "27erLMvPWKWdghWzofUfUifSemF7fzyfihj2TcZt7qyQgbP39AdP8ZaBo15F7neiWwPBYdHi3M8DaBzaZZdmKMcH",
  "key6": "67HB1wF4E2PC6EDudNUPMY2VLC4uTegYd3gQN2ZgmfzTwov2srEkgsQF4BjU7VuEnXeqLdqocgw9ysvKnaLFw7iC",
  "key7": "486L1rTCbbqLqtPzBJYxn3dySVdSTK3z4bNKBAC3R1L7NumrBK2YVfP2VbGMvk6o6uk1NuBNdjvmjtwn6LzrbFhn",
  "key8": "3UPYHeAzWNMrcCRMSBX6kN8Xa6MG5oY7gHhLvkBcKV5tjN15mLjQ4zr8YZFihX7SS4qi6ZXwncmZYfZ8L3ktpFmy",
  "key9": "5zGSCFBYco7zSRgMB5q814dBTGgLv4zB6SSjK7c3WDerVc7pHEZMhAaqTtqicykTNv5wczbPLHEueipnoDvDGPVD",
  "key10": "ZwdtzoRuMC3k2UQFS5rAtu1i1VbkhPyqSPVSSdwPaLhjRrz3Ueximnp4TmjeLS7Yv6ciM93fuUJS1jmbwndwHhf",
  "key11": "52nnevfWfJYBpreV4io1kabPWkmWK9eda7qd74ck3epkmJwvvH7U9PZ5BEt7KHNztHNxaRf9oiAqEYFjpTevQm2d",
  "key12": "2Gazj2Z3qzgioXo45NPgka4kkTqAubLLrfQ7QkiTABv64iFFCQdFzcfhj4aFRNaU1hgu2rSJC8PDwTwJy4bymNZX",
  "key13": "2DnAmfwXQ9T2ixukbAByaResyvynyek9XDDq8hbJAcJ9QZuR21KzKzQmfHANKfL83X7BAWhvdDLdjiiNbanZcnfR",
  "key14": "HSqdJEyXEf97JjB46ULJ2FE8Qn6CzS1g4Qnh25wZeNtWt5hbU4DhwuXuRGmjsZ1pVPCvW5xwDyPGwSvfDej5tEk",
  "key15": "S3qw7nK4dTzUsfH75tgsciJuNqKEmn2PDFLbmVGi3CTggtJNmu8G4gLoQMYSY4ndJLx7Z82q1FcgJQqemAR3A4Z",
  "key16": "HDJjk8E2sDB5TnJS1ZeGHUZdp2vqKNjfMbBseG4F4c1jpVNZD5dE6WVg27U62ssxb9xVTK8qAoRbHb86Tv7vzPo",
  "key17": "2A4ZsufBbMMm7hksiUZuH2HNd9Dai188mkyhd7eQmLHNFUnEEKnY4te8HuXnesYqsSh6iJTYg4XeCxe7qEcd89BU",
  "key18": "5SoVTgAPYL2aDRqVZJrUxJBq9CeqS2kv8VsDa8N4EmU3VztnaqE2y5iKv6CmBKhcTqVzMszyHkoMCnyJQ1pQurpj",
  "key19": "5ZGin9fPmRYLfFJb7zf8EpjM2wU3ryYSLUn7zNr2FHGKEJY1xYTox7Pc4jGMwc8FTXFwdomh2QPJECEYU2ksFzHM",
  "key20": "4pACHZjUMNB1ozaDa6FSNMHWmstonyMbHd3sjtc8HAWkvXN78cf19fWQt3bt4vT1rgqtao9ZrrTxXipEuDYZkmYz",
  "key21": "576YgQbQxazwc3irXAHPnBUWdjwoXjDsmKgDFRRtYssqVFXM6jxHnEzQmjELSzAusxmLS1vPseht8EjW8hdnocYC",
  "key22": "4QSq4hj9aasMZ798pqmXTrCWtDyPqYVBJLXKhxz5L4HCxhFn25PKsM5TFs3xwfg9bzBv9Htt6trqw47z31uYFhJy",
  "key23": "ZeH5HUeThKKcyTL42ZW8QEdfsVivzNofzYywYSDSXBgA4mneQicnnvTnbeqc3ik2ef1LNgccrDsxpdbrgdAikkg",
  "key24": "5divRsY9XXV5vy9PXdxCpnSfDMZWjxKMPLRaxq5wdGPZKpoNqNP81tQxY2mSb8qiwT9dhvvYFjSAUcA3EikpcHWQ",
  "key25": "5sXPjg7vHuuJ5mqZUnfk1T7GwdUf1KSVy3mmNz9ecUdD2sv5wiN3dLPEhhH7S8re2XvMjRbNyXVNutv3PNXP3Apv",
  "key26": "4dcLpVGNUgpLSw3o1H83jAQRMQrPx9u6f2uhN1w1nAXshjgtVhiUXxSive1AjenHmULgLNEDPX62ZrShFeeNSt9z",
  "key27": "4cgTaGTGqnF39Lnpa879J3JWdZpZYxgxcpx6X2iuC9CzGBXKYqAhxgzXw1d1QLjudxhTsRWby1Gevf9QEKkC7YSq",
  "key28": "122X6yMLj8n5Sqs2QMLDs4eudLnkQTJhfh3tLgVe9DiZ6kqmm6Kms73MUCiUJ3umKxC73EXsRGGySZk7PEW5HYYT",
  "key29": "4hKHsP2G3TwKYNrm3c9hMT61LAgrgC8ovjQUPHYhTke8cCDUHgANUWxQfb9nWHXnJz6DuF7XPtwhFexh2tA19dgz",
  "key30": "53oMyV5TywJEZQqz9wwPnjtU8Bix8tDap14QDKVxNHPs3a8LNPm4rfqrtuKjPLDkDKveF9a3K358bXp6E9sxCjd4",
  "key31": "PpZdo3izGakwvJAu2mAEihK9fvZsjFvZza7i9csre3sHpDLb53X9ExPbiWLbNvC9nf3u15jhjGS96mcMT2P42YC",
  "key32": "4BTaer8yC5fpDw7PwhiC1W6UQLPV2TYSgEkCUTKVzib8AVfDcmWzFgZAf9Z69vsdYhusaktNNrvP1iJ5x9QvdLuT",
  "key33": "3967VcXZegU9ZtfezjoQT7JDt68wtTw7vh3Whn377eY7miWyzgbu2k7f3Xeg3E7PjrM5tx8hkZoYAQTAp51jALJg",
  "key34": "dK7dMdEiaNTga1Ntsf89UyBvogWPqYi38DuK9RxejM1TLXBsJxMDkKXjJGFSKFPUAuuDfDJKszRUie3xR6fB2r6",
  "key35": "3ZSq39DLcodpXm4yPDwncEC7vHTNWJbe6LNNycKPqyUk5FQRbM5fbRXrTgsjBqBRtiqtQsDX86645SNyXw9Kp15e",
  "key36": "2ooCPG7S4P8BhbALPT8D3FTAfAXmEBveXHVyDGdpgpKm2C2Ak4z36dbGgbRuT3mYACZRc6V6icz9NYfyadNHZtYg",
  "key37": "4QcpUrAKz3RQg2jFLpBRKugePSgLsmK1giobwFna9RQnr1bZfTP4zzEjfMGB3F4EA9zB6YF3Qj24N4KioJZ26cBa",
  "key38": "5NthwK4j44JiPnFNWLib8V6wgDWJkjXLQh8fRRwQ6zzo6fhe1vSHJ8wK4R8MpGUQkiaT3DrZ7P82REiDYi4kBqck",
  "key39": "4eSpVCqeoJ7QLv3H6ZvvqQdVmFd9rYX8soZL58z84BQrag8XhCmb8Vv1FdQSp56xct4sfn92eUGrDCHjn6UtfRE5",
  "key40": "4FUVLtHtEfQZXpuqRizMvuMX39b8cshwHEiA1kNQJfdF3VmCo2ofs7cY1P1Cb1dYroTK1JnChJWzrSC5vFdb7NU9",
  "key41": "GLjk1KGcR5M8mzq1nwz7u8dKUtq9y3445PtdMKGxP3qGdx4jENhGRVUt5X3KggcjpReJeLQPZ9KJjzg5zekupNd",
  "key42": "RrZpEm8rU3u9wd7k7Dr3qSjK6ZA7GUkKmpSzxjYP1zoxbKDh3oqTYn7pChYap8iKBbEDXn3JQggHnTVAA3FHmLh",
  "key43": "3BDd4hNDabUagrgwn6UA7s8rrzUH1ABV97jZ5vbfBowKpTJZSrSmDxiByqSzpkUpvybGuLbvnr1LVdmMNwP94hvp"
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
