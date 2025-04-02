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
    "5ShHWcWMroS9jmRkzzUFwqD6aFG5QDA4UEFVUR9gsqvAhYadsEumndts1D1LJgynndLhE9CLjj5jL8QGUZg4Su1A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tsmKuowSWAf2nw6pZajVVcVRaUKTHeEAsCVqRaiyAMQTmZbrSAhbRc35bSxaW3s3YMMiweBuDL11uHWKvdc8e6y",
  "key1": "4uwY672Qxgeu8uRSxCR8zNK2umZnziioc7XFtUNPNbQVEfZNYRaPn9jx9hJHWYy3uy2Ls6TUpBLZFqmaTnm2io1D",
  "key2": "37aYrShDzvGb5NuVccYaoLerBHhcdVHMXYZ2donMN9iBDqfH2mf2ENrSsGptTrGajq2fBo32g9wQKQ9bVsXrdzzn",
  "key3": "4qycJmTFp5JuLk527RVPFRaWpZ7kMqysgfiy3Mxdbhtc45fVat9427rxK2hh7DLnr58qNsbEGbBFKGNSydor5q4d",
  "key4": "26FPELu1Gny6nXyMaLJNqtzkN4KthenmQHyKWbTZDeqLeqrZpLP28gzMYPgu7KoAgkJXdDfmKgdcLCQZr6Q9mFvj",
  "key5": "4B1JZhYA2vbnGoBvWNMk4sDpGzFhZjybtJPVGZvtaNnLc5haJX2Txqd8MkhY6gjZBfRkMtTEnXKvuzhLv4nYCmuF",
  "key6": "VBqdTNYjSmjonN6Gzze7HDDSwBaGe5acDSx7JcittQ7BBj5Vxby7zNBcPZrkp5PTjZapfXWnpSJDH4zA44p3Vhk",
  "key7": "2pBUb5yYJFtwyCSuZuXf2tgjD3D5rMs7Xes88LJHsabNZswaJqooU6by9dENE1T1StmdRYanmi7Z52SgLv7SrRtV",
  "key8": "5oqCuTqwBaEFobTmbwvePVtmbbD9LzVu5ddztvopoCRTVcT1WUooJVjpdb4THeUs8MVhuFkGq2br8sZMq5AfTRp3",
  "key9": "4XbjLjVvXE8QhS3XkZCBgRrp1b7zY4uLmQcp69enDncDkKynnCYBi7XaraJXsz6sN8mdG2qXkzBRUJQCjmxsLxSE",
  "key10": "2V3h4wnabYvBW8VcdoGSZQz5yLGPJfaSrAiHabxuQXVxfkioCZN3wKiybRVwEoUeKBxemEaXH9xK7qWV376NrZHT",
  "key11": "4CaJnbZ8ADhpeFNaY37Q5rHrAgcYxkJxL3aGPSWmnDxkWq2QQCG2LoxAYizbhMgAAuYC7TDDHwqe8XNr4pNbarbs",
  "key12": "5C5pcWEUm2uBiDcjzEpmNCD97hQ7qkDuZtWc7yM948zfPk8LuYgJH6pPHFrLUXDXkbvS4N2dYg1RsNvcveo2C8KY",
  "key13": "5dwMs4qFumaPc4cDzr56gf8aui8ngmhMyQkUV72BmnHsTAES2dKvUeTWnNK3mQPqCUeaukBqZ3dBkqycZt7bS9cS",
  "key14": "5gRpNG1KDqP6nLZPZGTBdP38UinTEvUyuDnbRTuPTj6eyG9hLXXjycHtesdXeS6xR3525rPQA7duNUqDHH62F1mA",
  "key15": "4wduX98Exqf7phg56hbrs9C4MB9NLJWQiJWhssd9DGTCybFcGRAVNgzGALJySyNcfqW7vGn7oRxcpQGDAvnaeZnu",
  "key16": "thRNnf6R9Er4vzoLRsy5VKr4q4qTBdaA4aFpATitdP5ETADJXpZ5G4gwq6xvUiZKaQUPwZi4SDWEBeHejJMDgfS",
  "key17": "45aTqxmByw3H1RqN1U1uxEugyJLPqnTVVqbkPE4owHuuoDNNzVsyoHBzYz3msWW6TwKpxF3e3ZrXFxY4TVy3VqWa",
  "key18": "4TN5DRHPqBGt5G3wisFA4fibaf5TANsUDoYJgCFdgARQ8Q5kuQpNvn4ryw8sJJFGGJ2bGhvj9PSZRLyWCzVz4VpU",
  "key19": "VAtiLXQjxhp79ee1XMy9tQFZs7W7kod2aR8B5g5te9F6AjxvVaxaoBPav5HLkFQmTJd7fsYfy4jXJnZbUKRhkZ4",
  "key20": "5CmSLxChbMnHS2NeTWNpcypTi3nQnANjS3STL6tz1EH4K2u5VsjynGZVHh6S9Knse7wtpvLDCWSXRtNWL7K5amYK",
  "key21": "446XwzDCPT2YYcTV7bPHBvZ28W4baQ3xcRnW9eUKCjw6gENLF63RV61g7gM2Aov3uY6BDYsGFijK6Vmw71f58ADA",
  "key22": "2MPhTQRYA8cKc15SnHvaeA87DU5bXoagryCE2QSNZX8U2AkvZ4mcvDh4zWN73MK3vZ7NJPacRDtzYDQEMrGCPV2a",
  "key23": "45V9q8agPfnzDSext9BLWqWeshW9GaBxvhSeqATgVKC3q4b83iQzoCbKK17kCo42gAo84yDAHycuRsAiRskmvmFD",
  "key24": "448BJ8TSg9chxXXLHjE31dDYuPSkPHpuceW74aT2QGKxYUtJ7t5aVKCbzQKw6qn5wEjzs1TshJ72ryUUb5ExzG22",
  "key25": "5xJWJXZkyjRRXpqZYXkG2BaP5F3GhgawppLxLHue4eficavW9j4iJeQsbLugrmMyjH5Dp2M8BuSniEGNtonheby",
  "key26": "3sdcYPw67UuUeto4k9hkfijUEwyF1Aj4jdHDsXo367UsjEwuL9kLdwiQZtfdfUSMrkxsnYexkWBXVb3FfsEgnTbn",
  "key27": "2n6nfXobSqFaSHbAorw9WZGiACRrk6WYYPL3YTzb539w84H8Co1M7gCQygL3dxFQKujq33ihw1pBJNnyjAguCHar",
  "key28": "5y4XjZyDNmxNccu6t3aaq9ysvyAtuvWfYCBroyYc3LK5E1gMc3EvExbGR73hd6qQR7W4nEroVX9PnCgkzLddSaQJ",
  "key29": "5n4KS2HFZK1xyTPdXcxke5W6qs6CaV1j4Q9XZNMKG1XBwLkdMvgcmX6WJnbGDugVkaJ958XAXPo3CPjAzYuuvwUJ",
  "key30": "3x4DmsEU361zzt3Y6bH8gCoqAGSi2uya3oqXnHqJE97y9hq5YanLEnBQ4go5UTZFPjm4sSia4b31UuY3dNh3hXVd",
  "key31": "2P1mNAh7GDpoXnK5aUEZNFwCvgfcoCAt47zwwstBowWqdZNsjxZf9d6MixVNqmt5rq8RhuFpcWf1xUyjjpJp3cDX",
  "key32": "ZkewVWLcijo1zfn9XHVRmUPZ2YRuCxcwiBGdWWdyXtdupWqu8KVNc5aGsPZDXdpgaehc2VBKyxX3cCW2myZoaim",
  "key33": "65USr1VRjkTqdX2Z8iWjGLA8rUvEcwpps6ZbPbsdQW8qt1iSoDEg9AxQ2HkmqtQzE3QY3y9jooc9mG5UFWFA2HyH",
  "key34": "4sip1ifxvj48jLz6VKZ25HCNiiTJhX161nCahbzpxeiQea2aU4fX1eE96pnde5RaafnDVoPLJETw1dFWoiuVooZY",
  "key35": "5Fdmi5weecpHHJL22XJTDMZJBHguZ9vXQQNVdg8WvmuczSByjwekxgfVz9cM9xPsi9KhewdduGdningChVJCyEnF",
  "key36": "4NCmZ9cQ64X3Dp8UwWE4XLw2SkCXSw3a4bxdf8iwB62pR1uoGhTGtjimaQ9AJeSQgWqYMW7KTP7iqwVkKfuYSMbQ",
  "key37": "3hVygoXKj6w69FwMvsp1n8Kq86bLyTBK9zt2UBmJsmf8agviHJmfpPJs5whQAZyEpReRz4baNbyycNL1rvrVmeoF",
  "key38": "nPXgYRGLd6942qdtu3Ua17ybYQGH4KCzDK5sjhCHjP8xSHMaWnKSnyjgKSR9jLbNR1K6KLVbPCHrgSyZ7sisxBx",
  "key39": "26NBS9JojDBDTso4DbgUoyiDttBkqnAr7RPZo4DUTUUPUtymjoDNxBSsNYQ4hyjvRuAUDzoR1FUXxXHy2Gfk4vcE",
  "key40": "bibgfHirv4wcdcB5p9gQkZoSzXFad647sFzUnPZnZ38fTLffDRBSSKwZujPLEafkLJCmoVkUqbFiHyZcydVu3bM",
  "key41": "28owReLpDTwmr3NpLWvZ7WsyjK3YDjfVrboujjMiZ3VTTXCYwSjKQNYrBuUqxs5qSSZt8qgNR9eG3oCsVHoSPAEx"
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
