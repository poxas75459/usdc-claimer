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
    "3w63iyHMoaXDDoh5uwjLDkKxCzN9svRY8JkN4HvshoWkSNcEH76w8Fut4rya6xv2CVNFwxgJtpppadEEghZxStZ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dV7EvDTEfwQu5RSwHkgN3yASgd9MKnGzxfrw9tkae3nmcjQsuwrdNsrzkUyJryGQebSRhmdx7cgumSwcVJFJFyE",
  "key1": "3bBYPFuwDwwvy5M8gi5cVzmri164RCGShBiae6peBDbka3AbEoeJcvVhzb9VucGofnuGfTgFtDDMAunUTrSZJjNJ",
  "key2": "PvxGwwnDeRWB8jBj8jvwmSwgyqtQA3nt9vWWUyKQJkJkvMLBqpAZV7n7aKpfJ6b5dwMppd2VFUwZmtPv251RDdT",
  "key3": "48797rSGP4zmLL64rCBsE4AEkHHAwCnvvRQjsNZRYxXfeBR3oMwD1ccwnHkmibaR7pGTwkpaUJphVkn1SVrJJRNP",
  "key4": "3Q5a2M3uirHhgftWZZEune2ZzwL4FLDxnCJPALRdZPsrjsUXL8RnZ5QFt97VLKu4CXUwibbkdou6RFxAqtrjDEBa",
  "key5": "5SDgpVjCgoz9g3o1wCAXqT6S6i8P3GjnakAd6za4gFHukmeFzLAsVtnVbx1JTfY8c4y416fC5FyhxmG7daXTGEQE",
  "key6": "2No9RAi898Rhn9U2jydoJjw3WFNtJc7kRbSrH8oeQuvJCVzVdbqGBQ61cdH43Cejb3Sz7ZKp2XovWgzo5YZmUofG",
  "key7": "3EtkZEq5LwJt6kTHVZCPo5vea5Q5CeBNPJNDcgFPDAEkdTXhVyHwpimZS62tXGedJrA6BkPeLytnrqpseb1XtNqn",
  "key8": "fiyDu9FCKgQDbhDN1UxCqKLzeX1CRr7kLGTKqwRMmU7gGrpX4qSyxNQzSQRBHnt7hJ5dn1Cssj4NFX5AnzxVFi3",
  "key9": "HGAZ84BfrHzD5vgVWUWUwDgiR42ZzKXFjZHqkfau8ciaVE8JnfZGhMazcUwAvS1n5vAoWyh47q99pL9uXJKy5uS",
  "key10": "4rLdb3aKh9ubFpSN7p3XK3BFdBQ3Gh46PMETHpZ9nM3dos728HKN7sbdQuVXkQL1BUZV47QfDBfQCfsAde7qBDNo",
  "key11": "3Dheah2aBoLvdGbynw7B4TuExxHaiu9ye9newKREbuZHZ1X9apwT6JZSRTSLgRfdN5ew7pRmdcYj6EC7myTxMBVs",
  "key12": "2FdDmWJQSbF1R6a7awDkEtHmdyPns5epTkymH1mVotYc3YQmoESfCGGJb1E1GuaFSC8Q6564UQe6WLTrWGZCSAVU",
  "key13": "5nzjiMuSDhexKQb5G2MetwSd7jLrQLityzHkEKYcekkPL636opGWUXCEhR9ScCWeKLjjxvnyTjqGJU52bMx9RfCa",
  "key14": "5pqq2F3Uc19p2T3ys3syxYjtFSG8NBGSQJcC45WuD8Ei4muzgZ4aAhKTXWqd8ZfdqJJEnV3Y2QELWuPbJDsGjKXS",
  "key15": "5BsDm8m6hj4xt5Lpx9hksPM3L3cpaM2o17DoDD7TdXVHENccMDPCuvoYaK4gV9d194389ncjEDDM6bZBvtgChXya",
  "key16": "2xw1kpzpMXYM4bzsNgWJkrkJJpJsQTpUGP7XJGsicdTjdaHstAcaQPU2Fe1FUXZAAQKgvzN1mQorZHyumS15eVpJ",
  "key17": "3a8vygscyUznL9u57sUWWNmsVaEBi6jjys6M4GRykKUAwPJihfSBEkzZknMtVKjdeqNkDFwQsZKyh5yKBtyoKM1S",
  "key18": "3AKNf5VTNuQXcmpt7kQ4vqaQov4JvxxuFR6CNGK1ZpoDVWgsCakL6dPr3P7fXgH9xydXAoMkAWPGBJTaU7kCyGen",
  "key19": "5MuGmorCTHgcSqfqejGZJuM6vLd9JQZn9xqtUXKMq7Evb7LnX2W1om6MPJvznwJrJ99k87VnTrB44SA1dnUoZrdB",
  "key20": "54Th5g14tzAoZrzz2CtJuTWW7jZB2YrV4Z99oHPT3r9Znr4RmXEqemXoVE7yhxgU1qen1Uy4wcbxW59n411sRxMk",
  "key21": "J4WNRVC84y7esvY9EntNk2Ftm5EqWDfp3pKV9xnLGJD8jRAUE4HjjedGiHLUtxVWRQ64BfD5xM4ahxkMX9UjYsC",
  "key22": "64yLScQdxMjuDMZhubZHFs4XSZEmZrQomZ6g5D7xmrsykN8tgwLEAdqVctqm5u8iEAch8JWjFyhUbx1yAhJhjb9M",
  "key23": "3s4k3CgKLeFbGu4tLmXrhFj9TupSPvhBQt7n91FWdZbgwcoLdTSK5gT9vX9kcy5CK48MGZGi2zwpnMMNTUGHZ9gW",
  "key24": "Pei6SwdhxhB9YEZsxNk4sijq4kviL22Vf53X7fbtBAz1Kc6e34yd4XKo5dFT7niQ1QmuMESzkhHHmbfyU3xN1ZQ",
  "key25": "2dvucqHYFFBj2fKyLZQk4dHNZ3bmLwEBrtchWGonhhLBwUu5iCNBELi4uYM6Q46MhFmnE4ZSW5EawFdz2Rw25riU",
  "key26": "66cuYmCCBtfpZumvAjdGGQ4C4CG7Bb1ZEKxBJLDLf7pLTMjAFzU13GMFPXKG289eBbwfQHFvgYcXrG2eysxEujoz",
  "key27": "43ZeypP34BuQVV1X7hmng7SxyN7p5jbp6aqoNeeNLknRU6f2csfniJzxvS2eXRxxposZ1ph3pLjJ8a8ZaUYnMiqR",
  "key28": "tDj6RnnshNFqUPjmkn6g6xEZwQi2D24JUCJLeTwZQuTqutV8pkDNeCfQhujSpHnfX5cmUhcwRRRvQMLA8hcd9xZ",
  "key29": "3ExQ2pTW2G7h8DsYdaCZNvuPW4piuDDVnEC6mAwVBJKbvJgCYfHT3m39CCZMFhUvZv71is9PJSXMDWT7VD3cNEc7",
  "key30": "3JQZM8NUKEce3ghHsVRLzcZvQ8ofedwBNf3zsSiAmJbMHwaQPEdkWT9e2rtBg75Ph2vexFDVb1aiNbGzZwacxDQm",
  "key31": "59WD1KqwsN29g7dYvqzbVhsPKhxKmnL5nMD6sLBD6b17NoR9sT2m9ZGzeuNxcKzF8P3uS4QFLreDU4uXxgSunDu",
  "key32": "61jZE7iBd8gN6PxrqWieNkn6JXsWovReTJskNkD4iYqnrcX1pwB1X4SK7n69B3FjRfEoNnGmx93ijnuFC1uV1EDQ",
  "key33": "4hn9Bs7ut3yd8f7TbqPKReTnu6F3o43oNctjgimrxEUiiC1L33mXEZecU9dBzcQi3rwFmWvf85bHQSK8WpJj8XLf",
  "key34": "3vb6CFjtSikuwwfNTMnvfXLKHJvcRbuZSQaKay9bgtakwB6ZdcfG83kXnsYX8aJkjus2qv1t6AHQ5jv5uScKC5GN",
  "key35": "2UdgEwb1LJEiivjWZP6ptBPd2vbVEAABuj4aULWje3YzXWViDDgJn7PU2qB9fSRKwC62zxk8MZ8Cq3oxvvbUy5Wx",
  "key36": "25LjgfCNAzEz9D9vQYRnmc11QjSUrKr2gk2mVrqxNxmDrv9kiNK4fSEUVyPYuycYVf9RiHoX1nS6QYRDd8AA1kU2",
  "key37": "3rWpG5QPVhweHdqMEdfBs3QZmco3pzBnaYinTaTGGfBhTLVbVug4uRLFWP6CusPxFQcZunHNEwA8KcvDk24Z4CXL",
  "key38": "2c9ASusunc8yNjPyaJovCUXSyYQWaX1BMgTR9dPd8DyJ5qkPJBr7w7jYDNSEyzRppEiNMMebAtbxm76a6sPeCLWg",
  "key39": "5kuax7PpSnBkbpwqWrn7nv33fpbwGhYYDw8eqo3hmn5xunobHbHTb3YfxEA9SqjdYAPiZLLs6ojTFf9jqf3ivAwX",
  "key40": "2DJJRj7hYidF2u4ASEjFvHtcoeX7UredQW5mLVtp1H9f2MxbCFLz1ay2G7M2pv1EzStMaQodNXczb3AR1LRmSJ7j",
  "key41": "3N21xNW4WRnepxty1ejLYjUpZsXRKKLrpJArpbwZYM7eDTBUCJY1zBHPjxhhs2vXHUw2wcxDWoQG44qZx7Sfdh8Y"
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
