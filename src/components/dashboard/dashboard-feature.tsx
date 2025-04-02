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
    "22M2U2c9dUwxbp98DDYLTuTU4ya6HgH3JF2qT2jvfzgzu6qh8qTsNFwwiuPzeTUmFKHvm7GBGBywGuwzYq5NcxNX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QdNDBXaLpc7fo2guUVMTPbvm3oBfxyGE99xaajsnRrayvHiu5BQGMLxuvBPRmvxh2v7xCCz5NNAY4wgQw53u1Ka",
  "key1": "32BzZCwYzYFZTSQDA8rx8KFTepKyhJz8YT6YP1ucNBBTPjURRu8hpGSwharhr53ehtTySxcgFBTC9ie7chEYkL37",
  "key2": "3f6cAJYWsuTMfVDDFJS4mL8exUNpFsndz1pBYwYUKcm1yWrm3Rnr69iHFV3MMf5eqQzwCnQaaUxkg3z1u1v1pAjC",
  "key3": "oscVdwQPMJJR3gG9AqrFrkM4LnTq8wz1bpyph7yJjS77xiSAtEPCqHXk6AwBK1BDz4D2pZKyvXYMdDLDKBYTsbd",
  "key4": "v2eTbkVSYweoZv2J65N63eS2VCsWjktfpKc4ckU3zAMCN9CNVpv9Y6wkQY7T4rskUSKTwifg1pYXcJwRXXnU9d8",
  "key5": "U9FMz98zWMfgfZRyyuBGovhR8UQjr7rEehmFWyXTgqgKfgvn7Yhgvd8LpWw82CWz3wXRc3X4GTS1He8H7MQqRUx",
  "key6": "2zjjsSTVAFqZhnmXA7Z5v6sdBMUp7mHcsKf1LWFYERCD4ZzsJ88AuCY1ZRfpBoj1T3C9H8reni6JqjiKwX9R4jVL",
  "key7": "4zYtttqvUbXdS8PSLUtP4EfedGcamBkWKAqdYdtRzDMy3tzT9bui7aMT3m5z6UoeXccHGrD9hawWc1WKa77rJVv7",
  "key8": "3LAsJb9ydmpY4nKdhuSJmfAYng6h1KyP2WAkhxp6GtYGMNtvKEkUWxZ87XaqXgpazdY432CDJAGcdYv6HfBTYSws",
  "key9": "YqRixe3UkLSEtQWnCJNSmXk5hVR3XYuFuEZXKWkvWpiWBgakfHJpC8DhKwpDvWk1tkzhb1GhzTpY9P77PKQgZTF",
  "key10": "5SxiyoMTtLVGX16vjSQ8zkt5XSbdxWAFAEisXh36upp5yaL3v1h7fQ8dX7RiuWr8kxR1jJdzVoA2EbkZCKB8mAr8",
  "key11": "5Bwh6fHrBQsVLTYTVb1JCR772xR2RJv5M3FSgLd1cbTP3hLw1EVtZfmcWSwNhgBP9bbzG9Nw3LZ7v8WepEfcGkv9",
  "key12": "4FBRVAA13dHwmxcmHvZRuKDB8c58btx2pK8CKzGUJL8jmozBNzf1Y7KHpA3pJs73MHf4ngpFi7DLDpvGS8pdJbif",
  "key13": "4hMrxQd5cSsJ18bbVeBzN8udiU9tHTQsNbfMBrRZcPuwVs3pQ2xWEGmEkQiCv5fEeeohGnqoiGGqBZSPFLwZnYAC",
  "key14": "4odArgtkBb7pA2jFXNPsbu5RYymYQ2h8vzUvpfuSuP4SgpEYgL1pTZZytxg8fMVWTjpga6unPfJwekCrx8EqyAT6",
  "key15": "3Gjn6rVCui3BozFZ9Kia5BQ8weCvfepwFhEiDjKQcbTtfNhkhZug8jE5t42i9xbtZGiq2jmssWYhLEJXUPAo8e6b",
  "key16": "3JCFC9FJXVnyyVqirq9utLccjANtkZpwMadRyMuVJLLGRxk2deG6ybMRZjcarqv8v7etvXyEwG7C9H9MR1rD9kGV",
  "key17": "3BpLKhFkyFeFWWDyYGPiinhk71gPPW4hviu9qDtKKS868gUUkBPBo5y4imjkFW4jmQMP9UAbPJ2ArZfzHwXi15Zj",
  "key18": "2n179uxchauKjijxLj6RFGAk656u8WE5h7unwzZHDimnw6yUsW5WGFwSWazKLFnagU9isrjA89VZ4uE14cQ83E4n",
  "key19": "4jxstNdVHT23u7NaWquMRSHZQ4Vv6cSPQrymMGVuCtPPgq8FAA59Zo9D9Xi1jGZJHRZx6fx8vthptX4vU5Bpkkzi",
  "key20": "3N845AMerHLQhxhbrr7WSJNMeV2zpi3vGhkeEmRAb8EBAGv57w6L8cq4kLzQduKuBt6RBR6SMS9uWW92vGUySXfW",
  "key21": "5TxWAwpReX15E99qpvhMEbFAbxwiAFp5VWk6xnbABiQPXbEr1Lq6KRDTZ5TK3CnDKBWXb3aVhUebjqxhUTVNUqHM",
  "key22": "626X8aQD5Jt1yLi4ATNKqCMzpMiMWZZBspwXuD4GxPLmdFmdf5k98bjr4ibSdD8BkspJ6LMTaETu3WcxStSi4uJD",
  "key23": "3dEKmdpK4FyoNU9jJFdDeaoKnvBAsZkp1ft8Yjwu3zVmkdrnP5gnTLKKMMfASNLEAak26LSMkPmDTzzCEqTSeafu",
  "key24": "2oXXGws1QuhDM7E6jXvH6QaeEfLz8s8MnwHxHwyQu5KbMxzuCJHhyccS72R3G2NREK9L5wj4DwXqCJf4iuUji79s",
  "key25": "3zjP4xZ5PT3bQzpW9VYzhJwovUkFXTVB7ZhvPnLNKkRpLe7nx1gjV6t2iDyTRh4zrbsB8sr9aStrWNRm45LzRtyS",
  "key26": "3gWpB9xThQ7HtS34K7BUM5t8gnMMXGsPDZrfqHSesyuhix42g15WhBxNTSPUkaCpKjUkHRXrM1grfT8Sm5Rgrw24",
  "key27": "5YzrnCGAxijF84UNWPjFXziKFU8UdfCnzG5PmX9xbLvzPkWWNTQGjFJuW54GBnvLVRMsAmN5MjvBZMyXVEy8ira3",
  "key28": "2La9qhdbbZimBfSV4kQQyPZMVsPhToQfb1xH4h1DRFSJsbFoisuH183dwSqiyoyp98JXoV4G4oS7UFuy9iSCffuj",
  "key29": "4UfZbnfaPPBP9Tuj7tKMUFyzaiSMc91deCdHd3yko77Uf7oSq3aToZ3vkcYhYTXBxfU7zQAy8CakDAeRaY1TGPSY",
  "key30": "5y75B88WN3ntjTebwvCqHHrDvxX9y3gz994SZYfFjRyusUC9RKww7CqNHVERVdrDpuLJikdap8YqHywgHUtP2JZm",
  "key31": "dBwmdLA3ntoaVwWkxq8Xsop3isvacz9yPeZtCpSarJwbHL2TZJchmfC58g8BuMwTD3H1SKdJT5R1mXiyYbEKDuH",
  "key32": "9FyyxGkPe4ThQceX2Bk9SQjhW9sR8cybzyXKiDWD6jPsKaLuVrE9RumLu3r29WDX3d4q6DTtpWBqXrxiGkqPhsN",
  "key33": "2PK9S1pccSvsdhPiSimsqUxRQFARc8puPU132wYmhjG9N8ZrQABgps2kq5XC7JD26os3uAgcYHGT38oQ4pMAwwne",
  "key34": "4RJwg7mdNZs2guovkgnzWbpHPZSgDT9uBwPaTgxymnLrXYSzzYgcb2bsjq6jkm6VywhKYqrgrJuNkE5tcjppMpHe",
  "key35": "48r6bgDeg2aK8Ly4hrugz42dntCkXfQnAe533Sz4o1DgsCJ18dqH7o5eFBcr2Y6mcB89J8iqNfw7EhGReWar6aKB",
  "key36": "2VGVhXTovS161PA5oaJTDd7NW6gxiXqRrrgTEsW24BF3soNWFHMsHAxCtM6H2kbyDKhyhhtyyJrJc1okow4Wesqw",
  "key37": "27pF15R56LXpgjsZzGoXaYyLkHpJ1BWhkZ5qUhoeTJZMddDuoeDz566FKjoHzCanLT15bFTraj5VBfxTkrWMhkYX",
  "key38": "mrywPnKpyTTEe4p8YpnM5ouAv7WyRr1nSvte95mLTpUYsHwHfwC648rZVp2S2mCR5fQKBvCz19qquLX2t58EoDk",
  "key39": "4vX6jiqKAgoN2NLq6TQ9vr99UHJgbHVG5o7a9RjnESw74hzG2P1yqi1qL5bsK2a7ggvPMv4uCqcP61h3qSqQsUjL",
  "key40": "PtyyAMeDvkBsHjhhwXkbZZWtmR5EjeULYxGztzWKNndcL4k77RjW6CWe5kiVgLGFMGVXpUznf4nyqZoaynPU8Gw",
  "key41": "5ecUqL4uA1pyxgDEUKQf82RteVzxtaDr5JYNZBatptE4vLnZvvAtAEs5uJh5Z76kTjXJ3oEhamHNmEd8hL75Mq4J",
  "key42": "2Y45RugF5gVp6miJtCdUUtvF1YbMpDYDnw1FCNQZ3kPsL45Ur4kS3d8aPGhYqdP6orJYmxxiZcEK6RHuir5ECVT3",
  "key43": "4tBy6oZNte47g2di9Coj4od3RMUn7CUhDPtWvGApn4jhMN65DNFyfBhfnHARhMrtjCyBaS2jxQ2GPZ4jVTk6mV3K",
  "key44": "3vqDHSUY941TQ9bK4PUBmVHiKPp5yBLvm4qAqNzWizDDxHMZAGG7BS2EJ4DaguYWPkcN7QojnhfKBAM8WRSJNdAt",
  "key45": "3ZAQJNYzbq81Y499v4Y9ndPHgQhmn29f8g8CszPxyC25wjhy3z3CsDhhoefRCq7XDZ3PFSoUM5KjcCPmLvzKjCQZ",
  "key46": "2yX4ggnPpm4K8vXEDxTWJdexKGjy8Fk38vPEMVsoJMVWSVs9gdRBgVY7cB2cUDgafcjR2JtXwu9Rwn6cwst9xJfY",
  "key47": "3whVcxpCJ8yup9jsBLDRsv8ZUENjm28rTXk5bNtwnEGgcPdnZrMTV7AKdbq6ZsXfm2zB9UCYrwJQLs8XYr6VmgC2",
  "key48": "5ywNMHuVr6Qq4MyYmitinX9yfAtzCiWg5cRWDxUiewe4DtNRsLtwfZB8WjRqh7Fsz8KB78dUTYA3mb2nxtqCa9mz",
  "key49": "2pzhLqjNwwNZrCEsjr8BXqHX28HbTQFd4VxGHqY5FZsNDBq1fTajqWBSM8MSiuzgx8Yh5MfH3CiYLZrW267Dmk9U"
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
