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
    "dHNQBG9pTjGCz9XFaNaZYSCvDPetapavNd9k7HaJHE5k3tRNyMAQu2UFFRdPy4X21EgFFhZqDtNX9FS4f84a9u1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62rY4e6RLCMgeHQWLAgua6RRqzMACKMNAh7iPHnyZz6CEViCseuJuuGm2YzWXtkEhdjdzsuiwYygah5AL9wWmg7H",
  "key1": "5F8aw4HLmApEg5j1x8De6jMniKYXc8bhoeZTB7t4hm7RKJXb4fsu7PSgpXFhCh3acW61M2GJMu3K6R9UwC9nivFX",
  "key2": "47wCXXAkdAAZbekgLpVaCLLfQuSBzx6jfhfLFPwBSjaMYaibAR2GdUjW7D97MPB6joacBpx6WtPvqwaS5vWE5qSA",
  "key3": "5RBj2ukipFhqZ8wUmc94UtXghxY18Nbt1Vkk37MuTAVeZhwo23H1NnL8X3VgRcn7pgjs8EGWTeDBqhsrwoNKQZYx",
  "key4": "4YZ1ndqzxhyTQ8PQiicQ3TSVLYKkbJngjr2xkbSj57MQT93gptBpVRLGn6CaLvt9aBX53TXAbFBdgoqyQcrNXkqi",
  "key5": "4UHMqViTtzHRjr1QR3ZqS7qJNcxoG9DpQKpUJPzRE2wwSxLJduPen7az2zV75RKEKc9vyMRn3V27RnuneWqBZqmX",
  "key6": "2JsvMz5jiXqBAZaRLvQRBt5VSg7w3a2LjwRKhjVxhVMYpvRQuLahpfi4PbMLgWDCjTULj6fNJwA8DrjvY2heT8EK",
  "key7": "3zjCGU7ns8hc4rjajEPBCknkJiekT38UM98WwXZi3fe1ssQ5qznsPqN6JUMAmB5hsx8cjM1iJvijriwrnQ2tq2cq",
  "key8": "xU2zaExr2dbzdC7fQQf549mcNmdadcdnmmphDQeC2wWiKJPxmQy8HoBNHcmiGekujk4iqYd6XsJsobfaGH76km9",
  "key9": "3rMyMca34JHQm7L8zdMUqUDaXEd233jPhfCYudfQhfnbWMER8AzyCUXSh3kach8gLkz8Wnzz1CXQE8mFaiuckosJ",
  "key10": "5WkifMQaQLofpF4ksNYwZsf1et83fKyerN2JdT6gcZ5WdeLgujiKbYv1cJpZgnPU97EFC1kuikAsBLFe8wbQ2zKp",
  "key11": "5Xt2wbzHnKoerYEVD3yPD5bYY57Z3z98mY8jHTygpDYLNBiy1MYEmubEq6jB8XHQDg2DZcXGutSkEFaaXYtCgkSq",
  "key12": "39dD9TotHuH2ejMYUjXjAJ8dWT6g5HvKLwoY1K9pdjxxsPrrtAERczsQQYGVY7yZVkQW2em6BfveHuEk9e7QotPs",
  "key13": "51Lpmcz8tEdPFzKUaoSSsV3kTLkt3ZQdVHVwCaH5n256i46DkbeSnjj1kURXXdzQ3Fm7FNZRtfAUp2AMTZgvTTQw",
  "key14": "Xp8KQSUW5bXmK1eKMYJgDcHRWKwLDNWaEfBm3dNoqch1JJP4mdJMuxqSHmRbmr9eCxa4ULYCz3N58rqqLqVWb2Q",
  "key15": "54p6bzvAMECzJSBWtpp2kA4GcLpa6VpPM4mrifYCXUGb9P454sYczmNxDdmaLLwwMS4XKiwB9Tf924i12pHDUiR6",
  "key16": "45SfbSPyXJgatWAZJpL1jrMyYkZ3VA7CBm6nbQ2oba9s6izTTMAAkKDyhqa6PfrZ7hr5dUNFXx38mn7fCkcb5jFE",
  "key17": "66NxpeFg4byiPQHL9sHFkuNptdpNLkLPtMY7MeeUozSLbi9N4fZYhrYcJehnin4qEMdrKJ3cSxSUbuKCUT9KcvfL",
  "key18": "3dRjvyDaK31eWX11xmazocboxYEmAJfuu5bmUj9ypijVbP3mzc3Cb42wnt6wsL3AvL5ZpnzkQrTa7yX9t46LWkv9",
  "key19": "31AXmxuixQRWjEQvkT5Lc5RiAkQ7TtsUxgPGG6jvNw4RaseoLG2iJvGmvJ9gvc6jXEPW7po32Ew6rAZM9uifiQ3c",
  "key20": "QHUJwiM5EY5iJDVQgFmQkz3QxSp3JaMBiJe3AUYpueJQQHJhreRrecQcRru2cE5ZfWouCCd1TtKEi3uMWZK898V",
  "key21": "59YeFXLQXfaaGA7LK4YbqT55XvGA6euTCs8gJmEGFaD7H2i6KusrVxNV8NYeqXgW2KpJM2qHFQrCD4AcviVk8N49",
  "key22": "AD694iYhh2MkzdTGNRMYqtHqY8J7ryvkCtcssUXgxWY31ZYvCHVNyWADDwNG8wNe4eSBNSzJj1zL5XH8ce9g6m5",
  "key23": "4wszLuLXj7kCTYsLJmk7vyjjZJXZVDuxNedsbyNv5e6nJSExUZw1M7RCFa1BQKDBVDicryemEhHSu31KgjanDLKH",
  "key24": "3aFYZ2suNuMtDvVQdfAmHiycSG7Nw2xc2sbQcypEN1jiiwFUFhcc1fXWBSqLKSnPNSNcZKWdzAJA5kMqBucXES8J",
  "key25": "58UAAVhTu52vA7PynmbcpCksDWhRKGupVMsEUf2C61STKKcXxT8ubpzGiWZXysYM2HCfMiUPjhhjUfC64BMQ3Ysw",
  "key26": "5sbVraC9RtAqDxR24ix77MyweJ6oqLgQLQHQGq1EZ46xYhDkSzs3EdxNbNu6E8yNbbAcLUA9RLMFBiBbwxh9xpLW",
  "key27": "36GctbLjLLgzRHZSkAAEXfiLoVFepiyJwq9MFKcvQHzdhtzbZhoVC8yVT4on9T4BGtGwiCnqou7tXi3D17n2mPU4",
  "key28": "3cCsE93EzF3fTTWu1gzNVGhGnTwXm8LRnYqvHkHyskouc7LfsVwibjTjZa5NTZvxBjwjLrA2MxENcbuDRkMNKKEd",
  "key29": "5QUB9LXpKqEuQkVie1AATwcBXyGmDV9KJLDQgzafJweA1Ybgyhc9g7WduW2p9VPJsDEWeQvf934CPSXGuw75B2TK",
  "key30": "ePtEEB3RcMRVBngiYhsoQU7cvPm5j8JctGf71od7iYGnUJQhLrbEHtcCHz9miBNCBWa7mtxDLyueiyTCMETg6xy"
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
