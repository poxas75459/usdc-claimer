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
    "3Ez2yQt5j2Biz7qQSPutLftoL2pzDNa5VANedJ7BcaiHbzJe6taNaT1YNhF1A7P8QWK1Ly2sLrtueUABoSRPwBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YMY5ixeBpPQFTXJoikFRDbqE55beevEiBpERq7ciXkDhXzJmoTAs7etR9zgUptodCM3cToyNBvxg7qw157BhtW7",
  "key1": "2HNDD9BMC94MWAk8a96r6yNznjHJSHbgJdDoJ4gLc3PF2jHWaTSmofmSiiNJNDpNjSUJqPCBdE9ZtWppJ7XRSqVr",
  "key2": "5BCsZxDG2jVyjxq3181TH2af3YA6qqR5gms9aFzEjBGky2ez37mSWmNfA2wyAgx38wA8B76gJxfArEmtWEaZSJD8",
  "key3": "4SkAtMdYaisYdSD832zNBTx3AZ3jbPxedHvW4k1KGS9kNoWJht4D58CNgBomQNv7fMzunGaHAWe61azMRxYbubct",
  "key4": "2ZWk6uhsRwAHbcu2thsaEqtWJh1viBykf6gfxVPQWYsxLdeHigjKSKU1r3txWKBVUUSuFWe1B8W6c17kPXqQGjoi",
  "key5": "3DLr2FKQ5pufXTBERoxr3HbJJdSgz4oCgmizReEH67DjWttCtdgCfgEDEv5dMqeZMbEMNAdNF5HXvQSK9Edc36ne",
  "key6": "52Eua1uZnuhhNKrMJXFSDsRdXLLE2yk93uskfTRGRsJjXy1LoHnKYQHnzvvUrQ9HTXsioHEDS2oSpFavhTzXHBPc",
  "key7": "61HTGew5Rz3pDoV6zA9EpFy9AysKcZShwuY5GxCpsZhDUxEwDZBmRLnxTTWD1WG7H7Nzc7WU1pq9WUUZWBCad6uf",
  "key8": "xZ8qprRDjXwgeCqgtrdmKFhsVbajdM5Y1hJxm77QAHDfpUTWNjuuRRHrhctBWbB88i2vLVbckPHDoUir3PUoASH",
  "key9": "2H9TbYNaLT3sZDoiCJRDDK8xT58XWPBSxHTyDvSpuSi9s4EqKrGnMCu97H5xCNdhPGXyVSR1XDVYdbdCUPmjJfuH",
  "key10": "594WypTy1GMChq1WuUxFz7G1Efj6qP19gpgaJacX2PxxYx6Rj1EipTBujWPVAwFWAxyRWK4XgRn6ep4jjCpjPSFY",
  "key11": "22FqVo4hzyvnv5YeYs62wN6wFAvXbSKeJtqFDtB2m1tUoiaqTqS8HsxxdiP7oUhAtT6xrkoC1ZoakCH6abj9U3au",
  "key12": "3MjKwdmibASX1C9qvgxwxi6J93BKEyzzs8r8wJdWan1jYQDsgmvNqJ5D2rmnjtJyNis4nhTYat1UirszHrz6gdjn",
  "key13": "62abzLHBHT8UBs8EMoni1XMQtHgRtonwkcxk6JgSAmdFTCxza6unmiyPY5Xghimoc7jSs5KxMH48N2MiQsGQ5XfK",
  "key14": "2Hc7RHhTMak81JodsNrM5YWMf8MaDRnVvxcWRBpJPZMmV7HTjkwWLoWe89U6cPLiYLziFWG4FVveQszdSJEasndo",
  "key15": "4FHQfN9RdXc9q77JuzJepvYzyin8GC6v8GCRrLWTK8QQxU4WKPYmmf8beTgo13di6TV9tskj3WtrU6ckrEi41j8s",
  "key16": "3HNx9bq8wusC9RcRAMmX4oKtJVDYfHdWK6Qn1Jj87BhMpM2dZPCnst42sRkqaVP1xMkWD9u8EsVdPbGciS28U8K9",
  "key17": "4uEY94GqoojheghXPd11mrbyQ51whDiUCgvwzev22Bn2zEXhex4D1GJHwa2q2nhQzR6bdLyE5fb1Crf5VppgXxDi",
  "key18": "5EVLiEsyddABsTcWnWoub4yT19BCZmYmZnL9vMvrWFKj8hYqsMbY48d9dFuM9fFfadpzC94NsKMQEaUaVdVXgzCh",
  "key19": "4RrG3pfGAbHXacV84ADjsCi9xbLn68pqzirfxdAfBiT1iC2W7392E14iEpigE7F6iLwwRkkVurxEN3YwDnLL8uef",
  "key20": "4ih7xXHLAVr6Byh6wbnCmFi6JauyW9Cdpb7smSV3Lo4MAY7kr3grtgrZUnkEzwX4hYzH4V3izmtzjEmDMNFXNDNB",
  "key21": "mq6ru9HDJogSH2Rd2Rvgwb1oWs99Ctuv289SdgZWUF4gaKWJgchn5HFeiSvwvUDGBcQKcHTsSr5eJuG5764qQKm",
  "key22": "3nUNWvxSsSJdsRbcYbw9dkpZdv9gYa3LRqTWvGuHjggscPT58usipeaoNwPQLSbGk6d6FNGUhC1d6huzpxWBjUSc",
  "key23": "Xz2yVWVUeLXT64LwDeNiGenBRVcwaVBcjRG11N8sXmfAP6qJeQVxNk5hgwkgoCfDNpcyrNqxNSwsuoZhEgqdU32",
  "key24": "5r4rB8CVksdALS5E6oWZsxz9KB5XybMi2hCCKbJhQvxFs3Rz5GD8UAY7NPPPfeBAHYtej6KVM6A3m9DSve8iig5Z",
  "key25": "7FHwL2t1VfRJyr3NiE8ihLvRJErE6qcFwT1EHz5QDto4zkXoq2nUDtjznZQ31WJKEEyDzDAVHkBxY2ZKDsNZMwD",
  "key26": "jwtTyJM1sr4GLpSg27uahk8nkxUtYaFiQtpwEd3PDEycCab1T2ThStQC4GysmSVTVka7z8Xu8B4VcbcEgn5TYXP",
  "key27": "4qqGeMeA2mubrTSo17J1QtUxjqf8oHRCvZnaWTwKs9Y6nfC4NPcKHMJQymphi6cqNxDGyNEkhhg7geupXvjJw8yM",
  "key28": "4N71ZDSj5eyYahN8zAXJqdLngTxS6vNHVjdmyksAEtQkeQK7AmmDjVZu4PWrVs85QfMbqukQ2SdcqB6D6cG1UPhC",
  "key29": "56o4DzBqTDPnTkAZuZhBL5CdforqV2cb7NaWwqU94sLYtFdvtLBLT12YTv441C4Y5339gGxcAKQnBQxTsuzHixrj",
  "key30": "4URdrAuAno8qMQFoKvarsqm6Ph3rMy5TNhCdEGzWHGYmjfXJXu2JkxypjFPt3GkYpFWmVXE3yvKqfpgPLoQpxUgP",
  "key31": "3rfg52q3hqsu1sCPXXC8Q14Lm4zv86NcNFGApqzUH1BCesBpDFw7LfSUfS7QQYoDZw33K2wwbjYw5ThqfJQiMyTs",
  "key32": "Pp86M8WYgHKC69XEnMhLKPBcXvqL3wAbtSh2SydkBNo8TDrhzZ85CJCfWyVKfji6PoTS7Ne4QSazad2P7yw5rbA",
  "key33": "5ykjwtNShh4QWgE89wk4PF178kzUmytdH5UpM7rQxv4bxQtjzegpnU9HgkT3k23EEUyYNxMvmrT1fszLwAFuQyvE",
  "key34": "2wX194v9XQusodyRyDuPfkP7CMqDcPvDiEXEEkcYM5VMxAe84pcWK6Ly3c6LJJANhtRzE5BbXUfTtpSNF5rtYWYE",
  "key35": "XjDWnKo7AZKvBA4JvhsVVkNUkRF8ChQsyd9tZ3jdzxA4TCxbmirQ6yvGkkvd4BWjga2JCgNLtSdML5mu92vNhh8",
  "key36": "PjCsnJLpAhHpbeVCWYN7RVr3Gx93DVkfXjrUQsW6osVbimwJrW89j3xzB3AoqJY7yyJBHRZGSxWz5HEW3WKeUk4",
  "key37": "3QQjicqoEy8XgUHdWvcZsxodaaWG4ez4aphji6XL66NAGBL4XQ7ubTMvMV3sUd98bDpEcwm1wWevio2LcFxt5zEn",
  "key38": "4NmtN6z3ZNfJjgHstMeH8HRLFMMAbDXD9fHTah2ckak7snEBg7b3ANMtf1xMyKyc8DugmrZEp2XXA45iF19pfaBM",
  "key39": "3aXrYdD1wS7D8xEGxDvsSTyVcP6X9nEVcQLcq8pKW8vN8asWdfLVK9gufquVXUstHVKTv5FNsCjFSNuKACWP249U",
  "key40": "54oayFX1QB5PMcHNje3XGwJUKjxptoCYdQcFi86FbD92PFwcyGVcFrwsErmZECSAXa9dhADNngcEef1DXz8zoX78"
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
