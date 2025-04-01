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
    "38m2fxxkFPwN7DEmGD7zegVdh3WRFz4fe2J4dM8B4cyaSmppdN8244h5BvfXAHxUKG1QxAf4YsXfzZAkBPKVmHnf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dbXeRKY8Shjc2geBhhCv1nz2HbSVg6FHWXFF1By6sYBTYRLKWajUfnMu2kwWedAjofay6SB5q2RN39hdxmpoyXD",
  "key1": "5TWmVDJwVJV1h7ccS9hgE4u8zx2YAuTyqEiQfTXeEMVc2uS5isVWvHctHyXAwQsr2AjWGczRtrEvgvyskwwfc9xV",
  "key2": "62SBu5DQY9sGtVDFrcABLrfpTo1Yvq2qRXpKhXTHNxL9Sn33ny729t2kM4iTyY3uzwDvqueaoyt3izXhuLQRcS6h",
  "key3": "2vqtAoz8u3MC96iwqkue44jujJvVgLu7KffftJjBUz2HyeJ2o1DoiWgZQBp7NEJe1fdH8xwZ1b8rzfxbNHbspUQm",
  "key4": "Dp9cdcp2wfyD1CC4gNmUh7UCSZznJX8TBHSY2iBw8sd9bEDnPtPn21mkpDF6Jb7JWEFRXGsahSvjyKviVmKr1p5",
  "key5": "2npBJscb6uuKjJYsVe4QV9jdsq64i2F2USq5vAEL4mVbdS6vbN263awWWA1sBXhfVerj5VniVEigbsKSiefXFEge",
  "key6": "2tfgNneCyMXypeepKrZF1rKbMmxrkYgAMuwGx4YidGtyZ9X2LmjpMzumgjfQwQjmW173vFgJDZF7jhfqDgxfSEcC",
  "key7": "2RTKajL12y8NXU5sYVX1CF512ksP54u5H5m7BGEMX3RhMmJeb6bHbecpMJuwGzdJiAzcoNeDCCzg9YFc5P1ZgJtQ",
  "key8": "4oknP996sE8dMduw72J9AgTETPVzVfJLSS4G9tyyYnfJ5339byh7NbaUNtNb7CifvtPNpuvSfUGtPjU7uLeVs2CY",
  "key9": "4FNUG8tPR94hNx2bLLLpRcJzW8HTiVpBHyCrJHD8BSMpZ5abm39D79ux5CXerLDKon8i1fqJQtrRVAfr4Wq85hHh",
  "key10": "3ccWeQkwFUKhBbk6JKD3g5UnMtDpVJqQNPZeTnGfxJoZwK4katVwiepUb4AYemMC4sXqrHzigFt7rafq7hDWbV37",
  "key11": "5bXmXEtcmWyni9BuKHj69YfmhCUMt2AvXA8zu5tD4CTpuERqpdyFubTAFcoe3GNw4CfczrnkunQBNUA5CncY1cGY",
  "key12": "GBq4QLAQYQcoHGoEto9kVVfRPHCwdBFF39mUox8rd34Qd2FU21QVwYQ6rd4ff5aki3tbsuAF2r6xqoHKL8J7sH6",
  "key13": "22NQ9ByKsSdKBd9U2qLozVpdfBPf9CjvSJJmETHQqpJmKcGqf5SUW59SsDPbkUeD9s9ubNsm4b1h8uBKpaajB5bN",
  "key14": "5XUKsB4M2EwCrp3SKX4KkQPRbGkTfvVsFSnq1KHhWFdjaanxchb93g67UAeCcCAUc8B97QgNFSNNpn8mcA7yDocN",
  "key15": "38pibE5y8XhBP79ZqmwHSSZDeN8qkq9NJwe9gtYB4CKXCk8d8VMFNhFXHdWkqB3MYPedARUsAftgHDLw2zeqUyQW",
  "key16": "KCbuCCD9sAqdKQXFHRFPseUbHHVkb96bAQPaMscHh1pzL3SaYLxRBZ9Y7qBh4rByvWEUYY94ZcARBuMPZQ4zchN",
  "key17": "4tFYiwXCnyEoY6vviArqt8EW3iUrEAcucjZiteXs4SoCZQB6ThgwxSw3bHj4iJy9Qorrv141wqncFxLxcUHCqsMt",
  "key18": "46mux9vqyi64jGLpDKY3NXz387gg4akjCXwaScwdwtZcFQ2zd8EeDviaonr9fGHUkhmDiGuSYxs6ZBg5Tr2HpYZZ",
  "key19": "46CvWbtGomptmdqTwEiVT156V2RKh5hwbjCe3ao7GakiFXEX7vu8o2cg9uhYS6deJ5UQHGoKn2t4JGM9ZdTkwSLu",
  "key20": "45hB7TcFqJ8kcDNpREU3yjGKe54WJLKkgtQLfbQANtWQ9GKw1qfr5pya5YCrxKjyF3qN5KsaVB3rUvM54WfUmb9R",
  "key21": "2z82qsdBchfTU3Mpw9sbsgLx8tPHNvnz2f71pA9NzVSBGKBQejrCbzNt8tuhpgJv3fe46EeQ14LHNJHEafRXSkiH",
  "key22": "5dGY3AQA5C72Y3tHZueWjivNoujCqrZhZgR7kPW3tnENttoBGGB4RzjbiouQq8JFUaoeNB8KUCj4Uh7HrHa7KcCZ",
  "key23": "4d9D7yyjxBGG3TGRUdbZKmVYC7YqbgEBR8bjD4oViUkDmERUrGbRgENyrrsNCads2kUEyVdCZUAJ8Lwkab8TcrWh",
  "key24": "3tKCGTM9HjwJ7JZSyGoRo5fXSmRAsxVW2ozPeSoVT8R3g4erhoXJeP8Vaxf1sQFtoHgUEgK8WMUh4QMinYiDHHfb",
  "key25": "3LdYy8YmszLLwLrJUHvsz3pvNHV21j325kMXigwjBvAzsbJ3V7v5Ney5VxsaHfKBExSbH9UCGa29xFVns6x2nFYP",
  "key26": "5QyEgqCvmmEc72pcRxGFp2QkGNTdc9zPXb5ReqS73uHyr7jKKz7sBHWjQDHiGVfo4SGqWDwKc7SM8KJHghid384r",
  "key27": "4XtYVdhf5Ufdf9XtAEhrVqDLmroHFSMcEMDha3hCeFV7Yg1XkzvLdHsxtTXuEds2B2ChJeS84QZidQSSACbGnrq6",
  "key28": "59j9reznS5EPaStjC74Y6cNrsYMfK5vmBzPrbJAz2rSx9JnVU7NkcPUM2ohYVSMe1wnt4ZFhXffE2KoD8wqjFAG1",
  "key29": "4hoi5GgNceaHQfadpTTAbhcb6xYFtMbPiDZXpApjZzbmvpCMqih5qxM8KMgdKqNcZj6rDsPvbe8o3UCgWzdNftKM",
  "key30": "5kXBHZCQzska7wDid5rNeBNnfo4pYU773uyfz37waBo8TSLxACqzR9ZabZkYBWTF4ANDPGVHbQf69ikAMMi1d7Um",
  "key31": "4zLUVvywqXjwWXWm9gBeETrSxatXUWfsmmBXf5JyrdmLKCgyrVfVEkvNkZjuv5EAWyb5b4DeJ5SMNYYMLJreFDiR",
  "key32": "4RqSrKAQLx2zryP5giXFTfWLnHKfLBuXwGH9rZVC2ZKTJTcBCQxQstMU26y1w73cazTNCocySsE9GJkDbgAKw7z4",
  "key33": "3mZa9CXnWqTzGvbk9g4jLW5Z1t286VxXDsBjk2x5XNiVXtSXTJgtJdxT8oeqMkPY9NHgaMiMKfPujBpkTdjYZVdK",
  "key34": "4b2M2oSCUwDm4KESpkwFTXsVomwqzSR4eBK9T7sS9LKGraWNr8wRSmtAaRJADbGmvtrG5pRkA7Ax7Bx8y9qMFjof",
  "key35": "38MjQvkWpmrQCzVDwH7BPaM5UkmPu1i9CZ9VzeyfkrbhcjPZ3wWVroC8wGouUVKovXkfaAYgrEmjTMt4EXTwntnx",
  "key36": "3WxaozFWeU2KLDes6kXJoyxsbDuNAM2eUoiq1jQkpaW6jDEiEF4ikHMr8cr4wvETjTx1eqdYUi5f37sgeAWc3Far",
  "key37": "5RR2zS9C358tVLKTfpUoVBW226EdxY4tnLzHsTvtJVbG2DLNRVETu2RHpa193UuaX9Joskm2WzFJMCjtFEAUJhRs",
  "key38": "AZoW32Hho9uHzbaLNgTfVFEpSrtexBVXH9xeQrEbtomScCU1D3xXKvm5zNQBbhgziEXkm1e9b5N6CdHewMn8fVv",
  "key39": "2BWP2hJdChrm2RpPegW2Srg81qU5rhUjFrLhDa6kYsgYU1CnJ96DpNuZrMKigrg9xi54UZXK2fEHVjwUt8Hzd54Q",
  "key40": "4nq1qQTdNxazzjDBbC3c86z76djy5kxZGKXHr6v64kNN2jRQ4m4XgcC16rsuBK7vbiXBF4TH6s5piTQD6FR9SpZK",
  "key41": "57JaJhSQadm57Qr1DBNszpvPMSgnwJzr5UyvAVJnwaoBHxqXhXPFZj3PrcHmPX73ghQA4viGWAxBoz1ftmM3tmZk",
  "key42": "65vxz4DiwFsgmK1SMeEpx82dxEdTcHARnBMYKck3TfzX2WcyDrQKZHb9SE15qHkqKb93z9e78VzhPfxCUGUQVRif",
  "key43": "567Yviz3UHuNEKmKDKP4Bo58A8oJnYMuN2YWbaD6iukwnLvvLxGvWUhkac9VUmpewrxa6x2AnHRbGqfCLMTwtHvV",
  "key44": "5qw5xD5cxmMbryg6A3GXvLYd2bc35FuunVxJZ9XNpyenVV2sGPRupvGw6HhDXCxoTjexxgRvJna1S9gAqR6sJhWY",
  "key45": "2ZvWpsQHmaDwBm7ukhEqa2uUFXE3X9DAMnr5V9xbpppouWeb85VrwvfGgTQ7gDUiev9oWnYZ5ecaPE2x7fiGZQPJ",
  "key46": "3tXV4JLkF1xXDbG7BntkQy7kuc6hGc4MrSvNaKgQrVfRaroRgF9KJUKib5oqv7WU7VUyNkVNBrRbydLpXeZDQJzP",
  "key47": "5GY2etVDJVKDs4nfbfD4781txShytNJYDYYXbbjJvN5S7ky36hcXmcrSgGjdschBS83cj9eHJBCVF7GSTps2NCL2",
  "key48": "5cqDxLinCUTYLb3M8CKYEjow9Zomkq8PfwAAZrdS3WmsFEGYXd1F5mFSzUCvDHSphLLghqmuzPr5C1mMmRhZU7v6",
  "key49": "2wxYN35XNKXc3p2Lhdu8V38ku4ADv1KbKHhboVjpWjPaduuREVeaq7Rt2Fv7GEkVD4SmC2MyFm56wNNpeZn34odJ"
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
