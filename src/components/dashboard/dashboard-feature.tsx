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
    "2teQtjETAvpZH3Rshb116L2FCCgyaVheFeTHWC4rPRBivi4CjZEssgU4x8CQCCAn4M8cT4VVFDrczRSBsBsQDkCU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iP9Nqi3zTpeSFkHR8HeTbwEZqrL93H7hgxtvvvZu8msiNAqYVPcm4FuNdJKsFAhiEAA1ctxzeTSUJZXsho9eWxP",
  "key1": "2AbLiDfWwYThh3CLtuxVaKCfL9oxMpbtitoaK9H9pp6DzdYz5PUjbA5PQbVuSrSaT3QyKSDGBSPNrK528ct2cMmq",
  "key2": "5c3nyZkYV7i9UXbjFwTLg5gogwrtmCZ6j9euZXDWH7up5z7T1zvoB2SmJpBfqvGUre93redW8cFpoJDPcUxh317G",
  "key3": "3PWNfHJN7XihQ8a8bNsAviKA9KdTrQvs1SDV55PDyxjcfoJSfLfrtWK5oyt2kvLS94c5gzpngGr3wzVupgFxmH9L",
  "key4": "Tw7tqBrMhB2nPkxefmWzFG9NMrrhG3pnCMSomrZEeejsJ1eKQphikMw1nwB1zxJvHCztnJeN6HcDzpSaFCoWHWx",
  "key5": "bWBhV5w9Qt57ZgXrBWXXBbw71VcXfEHeus9DmDKSPBNnvLLRT3gBAYLaiPXNhFK5DyjoY6vygyLRcRcjbCUWZN1",
  "key6": "4BiXAJyJPrc9ZJm9xo49XqLBuffvWVft53Ltuc37FrxLSaNWg69PF2iA3HwCGpp3jKA9jhgKZSzugGthXL9QzNWA",
  "key7": "4aMSxYZ2sQhPiYfbvXZwEPY52bh6DDaUqAac7ADcCfzjSHVqg9pBn4Ei76FbAyNqFMyNZ13ZacxLg2q1C2nXY817",
  "key8": "2tGu7q1po1sEvXGWffQ7gse9cQPauSNLFcHFu2XKwe9msCjeAQQVdUbvkVB7Bztr5ejZxDW8DwVMajSC1omBP3gy",
  "key9": "4KRs7H85ncu4DrqWwksT4rjXPcjucgdoa7Q1Dn3Fjb51qx638cc6cJisEZpWuZEwWnDbniTnws6GnS4NTPKusAqc",
  "key10": "4HCotQQoTkHuErVdw7rfpe1JvUhQhDsRXViCbEoEDzGMr3nHj3zThxD1jvxM7iVFifiDpZ3RzRShVZWv2NrdgZko",
  "key11": "7q6h8PfEb11LcNjoKHWvJcwvwvNuguqKhE3D6m84Ewp3eCsJCMheDjDLx813e3dxwrHrWZJBeGEqN1oGpTfjZD7",
  "key12": "3JRy1cdFA1255otBeXxXc1Fdx1PqAN1qpcVC6BwV9yvFrmWHaevz88LjTjxnCnQeSVfThFbjKGxCiYFZ5QaBamd7",
  "key13": "62MnG3fwMVzNPfUSRWBxZwq1QyWNWXZkWBx4EKsPFyUcaFU2WSWqAKdouUCRpJdBuJZ23boLFYcXeyyCszXE5Goo",
  "key14": "24ykzLWGXAGPzfAXUjZgNqp4WnL6ZcrLm6cbQsVdd5DGdmBHYQ5HMegpVyCvN1yA2SG5pBXEzvk57HbT2Mpgkdor",
  "key15": "2rLGsNEjyZXiqNvUFrQzgq5kVSjUEeC4XFPwQNHvWcPzSvZ7GqiD6QioXntvH4JZ8KJNooZEha9n1Hqpwv6zXduK",
  "key16": "2uFvZGfCrU7AJim9hdSkFuzegwGn7FkGB6cy8wQPd8JDLLsp1UM6UFCmvUMcmWonZdUSzUUa2GwuMUUzbZ7GDy2s",
  "key17": "637wGfsu46hGnZZVh6d2pCvgbUQrQQM7hWLr3KqQkyEjgwiYadXv6M2hm4qD4nM7jXLC9G3jHEFR98ZXHS8mY7pJ",
  "key18": "5JTUQkYNP1qjd9RAnEiqrTds7j6FyUQktnC9n4SYLwTkpXSuKqiBedjfSrumTnFj57tjFbcCDsy9gnMapnssUcHh",
  "key19": "5ky9od9Vys2f2dTaP6jBa5ksZFfNjitXzJREutU4muC7DxjSxKZZwguwejftrr8nCbtEAaKdsWBndsHAGQWoaCXa",
  "key20": "5Boy94NZTQMxMwdM6puxg6RrnMS2nVWmtgzPzXRXkyJ7UuC7sKZxjm7mXQUwkLKhwQ2VmAGmVb3fnEenTPtGgdKo",
  "key21": "5hivpodUeMWu5SmPpAMDDvQzruFF78K8gE13vneXDJWjkiyP7fDe63pHAS1d5X96cFpCUtrWU9YfGSks3Seqxtor",
  "key22": "4raFwhmMNLmT8MkdcwWrNR3JCWA2tsskfDnPaL2kh9fRA7agKGR6WZFD6mMuQ1296AjD2LKpU6LR3uKw2rA6ZMgh",
  "key23": "5LPp64hLkpHPqkHunZyQN9mzSLGC4A8ynE7trNxe6JfAvUEHcf1WFs6QPuofb6QAmARfKzAL3FDUkQbJiUmJEUzP",
  "key24": "22sZcauK3mhdQdDG7u8MRAF2FAY6ymzaVZ4ANrV5Dk2DwQju59yxSEhvzPigrFaZ7oKgeFgWrJsXyPLsfVxMUkae",
  "key25": "67EDHyUDhrGUtK176ZdthYvUBxk2c7fqwkHUS7pA9zLxGXZZmHcpBEDaY7fRWScoQPsKqBoHdd1hRfaw3fGeFoEg",
  "key26": "9Mt9i9uWgd9tcJuRaks3viVQKJQkCTW6aG78DxMcqXhp5tGoTfYCg1pCkFh6vU7nvy52VzFptCtMLCGX3SzaZmC",
  "key27": "4sApBywy1BTNna58jzaneBB6znDeYtp4eHaBtmbfvnfvNnYaU9EPcvdtqMTWZ9CEUVxChrYQGWFUa4fw5NPxyG6S",
  "key28": "4JMG9PfzMf5itPXuSSZ56HBx9nbbS8TBDZpC6gSfUrJnySw5aBUrm3UrxCGpp7yR4nuXM37c5EkXczkco8DC6jyZ",
  "key29": "64oQfY2kA2UWAb1nJh7oeQH3FjoKHbqWzaxiWxnUJ9wAM9saapLv9o8sqUWbMfFT4p2Zi2AA1QrsUF2fw8orHFth",
  "key30": "31iDu3MWbQ7XBjdwUyVrLQhMLVUBk1Uy6Pwaip1WQ3YDVpHEv2CH4zo4ResgPZXJuoM1cZMBr7491sNmD7LZoBxG",
  "key31": "2j17fHnfZ6sSCQ9eZJEUX8hYVugWz96wFsD6vRbrcCr9aSfcPwyw4k4KgWRDqPzMcsFv6MYAfv8z9XvVHVJYMgev",
  "key32": "UQWTarCcza9ZtzAtXuDaP8jKdi14YkJNqXBbGSh9AgZyamCGNvLynsn75aoc82NWcpGh2YNV8WuQDSytjsv2H6T",
  "key33": "34HE3aMbdyyPXG8vdE9NAAsmFbWjykZsKgCMeaBXNGK9g16wL5GQ5NbpNU2iBoAsdoZEMwtWoGVT2eue54oAoDpj",
  "key34": "tATFMRpsiTu7mZgA4dkMPizBqvDkgCUsWhRZhXMJ3kQrHaWFxKXGpvbWQVh7UMCwGNtfyWH9vJJp2h8mdX61PMb",
  "key35": "52BSVS22yNs1hzZL7QtPDHfPA1uTmqXMiKEJJxGmiowndFn88skR9Ny43FMjHWVdPZkgrdWS75NVzVUbXnzUhfwP",
  "key36": "4WwzjipFpRHUTGkLS7SX1i13TS8FviyXuKUGYhsvQ24AqdFzPAxu4DA42yKsdABrZLmB1jXuSx6aXcpCc6sR2BKW",
  "key37": "Ymxfcu34jmWasji41Tec74G1VZe7AqUvqmbPQiUM6yzsfDUfxhbLWWNwM2TZCJSU3eN17wSCok8yGu74RP2Hx4M",
  "key38": "2a9eCRN6ZZ4XtKQwudcQXK5gFKyhcgwj9HMBVHeCvrLTcYbCVRDoSUWg1nNL2xWNGJRTp9hiUvajXTYeHe6fReSN"
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
