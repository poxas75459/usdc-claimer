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
    "64gtddetpURNThXnVg8NRFCbiR2LmtkNQuGwhL89LhDPGDN9cm7WuzJXhigNQrmt3E1AKeGpwAWntpsPPNYp5YUh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CdF5vVRKRoMsN4oHJZERcaZUuz4UFi5enGT22wg1VBth9KD7hznHvjJNWhqNRYdTs483yvF6URWqV3UCPiBshMF",
  "key1": "4KVrNzoVFqRYv1ufjfTR8kqd8MmPwcJhSKahRHQpZwaCrVbWBUa99vPRSLNPbcVz7Yiz14drCwxPJeGqCSC1UmfS",
  "key2": "67FDqjBZND4zJidu3dPMHCqDLckujXpk6cFRx49TtA8swZBghq6jm37kNreZPKS24DqTuoXj5Ufrz55ehBaMoRxZ",
  "key3": "2wR7QHiPPEzQGCH6f8ExXnTww6bPWQpJFgrdwAXcbzbigsh3xtT9vFZru46tK2f1X8NUdHCuT4yV1wv5HHWC5C6U",
  "key4": "3otM7AYD9iYVKHTs32ZDdsZ54vTcmwXRWyjsvzcMRC1gviMYEHHT6fAZoC78nxdFE7HemHNfFteJdrpGWTRCTptA",
  "key5": "2a7vkZRYow5GqwxVMSAS4TP4XrSj9HGJToGbUV8RJ3ENjWqruoHJ2rqetLRssaJtMMWo1Xo9LNeEsrAqgnJb8UBg",
  "key6": "26iEY6oTDQgjPp7B1w7KwLegPDTb9ZeEr2JWQbge18E28S9HCDXvcRTvcyi5pqPFP6ysM6H7eytSZcM7ZRWbVJQZ",
  "key7": "58nMTtFJHp74nSk3EsrnbTq2EF66YuAkA57bx4NXR6SYE84RpLX7qZuaLAGcroV2fchocSj4Vs8kCTY3aeheSE8W",
  "key8": "5yQWBEifN3EszpQx4ywPUVnDCrJbMNj4AHKVYtnuLYkM3zdmemZRa6KLyFCTQigcFXe85tJnm45BU32UowD52qZ4",
  "key9": "38Yta8zMk6FoB8iPhunNM62DmZJy9iAm6zxGcPMx96UBTq1x8ZZRTAcAFpxZnpCSNPbpoQFH8jLNWLY4tWDENHWn",
  "key10": "4hvqo9Xie6zRfpmjYCJAjSaqiE5ouCJzv2vbtph7ujfpLT8XTM5ynLA3FsgRU2qRWHzXSUq9AsMPHbpCbTYrknQr",
  "key11": "489FwMxAstDZxMPJHu2Er2cerTso82cB4t77X2aao9xiM8vw9fSpRT9s99zWHFZ1b5NtKEQoGUbVF5Gi8yXHw64M",
  "key12": "4kRa9dco4ybXzv54BCUMCZCyktVSWw7avPNr4bT23n5Ju4F7AVusubdXRCsB6zwL3BGPMixEJMnjgn3X6921KDYQ",
  "key13": "3zfJ8hJkaV1ZECySM2cdotSEzMtvk3GBt8jN48gFCPpqTvTysqZxXXmNyheufVsfjUEGn9EjYJNCpj1M6sLPftzw",
  "key14": "3Xz6xriZBGAY8Z328WDzrhnRDXreGnQr6bDjkKb5WUsHNfWCPEYHv7xVKF64CRHnSR6hw1T2NdEGEE881EJAGJhe",
  "key15": "5qeMC5SzqdLFSKhUV9DStW9pgERkpsdhPUCBmUW5HDzzsojaaRnkqr61LgsYeCGvXPdAqRgQ6JUkRDXgkX14k1dt",
  "key16": "5zS8nc13BbaTY9yXa5PVNNT6uVuE8SEXBXNbxQ1WZkKjHEL8RBaRYLo1kzhWepdXyTucuvxnd4fTecnSkfdLHgaS",
  "key17": "2Wn3gLXUW7PUuWWbeWUXn2pNTeufHqxGnuUJjeNU4Mo9AzzP1AwPe1PhZTCoysnhqox2q4ZxvKt2jUkKTFh7iEk6",
  "key18": "4xzJzvetLMCFsXYVeaxw6Jp1zZo4t9aZxxZQJsj1jdZrPQ2UiSk36TwytwT8gz7miAMiY1bAfGKQiq8kjQmtGFXv",
  "key19": "4xWioqYHZtGhv2aGSA9Egv9q6v4qvRC76g6zgEYEPwqgambxY4EkM8KjFGzJ72vSEtKUmt45Fuzxk97tm9RFFY9",
  "key20": "5zy396zr6R4etduWGcj3CJQqELRjt897UKhs9pQQt35mDTz7XZd8B2ZdixsHTLqQqjAJCxcc2KwV5MGP32putWNa",
  "key21": "2DujBxDufRzDKdTNiwjLnBWutCfZt6jQuK9DycWysCExYF2o6WYPsk3tw8f1TB7YDcDWztzTU4webJz43myw84W4",
  "key22": "5e5yjtEJAJB49ZRazp43BhVkznXsrRiMB2cdDmDdCRzACCjhYeEFnmb2mco7ejSZbyPKAJ7tQj9eAdW45NjyCSvt",
  "key23": "4YwPkzJ3Q4vRiYi4zPY2j7zyZdJi2NWHcpWmgGmuX2yQGBJTAoMHgYoSDRZW5C6Sc1TEef13PhPe2nB2EgREQtct",
  "key24": "5FSkbJqSrHF5nnchypxF3SmhKGKw9jismgtKPBB3bgMCbQnfaZej1iiPCZnVzj7UtoiAjqgkBqUdotgLmNHTYzJW",
  "key25": "3nmXoumVW9Mdo9VP4TxnSt1jTixdrYyDswqRZMsZ9KHSbYPkR7aHhd19238GE72DbGcb59tDHKScwKUdykPPn525",
  "key26": "WWpEPpKpHEtVNzTYFBTn6aroq2v9euQFrFguRRHmNrZzNJcQTKrtQ7JMCpxNef3J1LrqgRR2VwnM45MuC4Y5QYe",
  "key27": "4M5idkEd29jNqiXmUvSnicPgauezqirm7bnbAwLSbjky4SFu7tqiTjYpZkwJDHShTWQ2fueVZvZbCnjLAghiLcGs",
  "key28": "5jTMGH1dKGanQbnzs9tTeMxEAbh6Y523rsAzxzrpTpWy5oq1JjN2k9HE3cuiJ1ybzH2yrNaJvbZ8xVGrtWzEW9BC",
  "key29": "4K9t354nQVwVNqtoheVQ9MMsqXwjDpHqWUkVGb6K5Xxe6XBdF3UhoSaqEnREWkWjg1hjyLMeLUYi7m19NAkN6w1",
  "key30": "34wjXkFdDSY812vA2o2k7je6L8JiuumFA3K7CS47WCTjTsccrVmd12Giohc3otzVWuBvw7QefGEwEEgsTShzd1du",
  "key31": "3P5GgF5r66aY4qFKno3eDPo41xvWaPpUHAVg4CMkx9MmDt2j2j3KQU22VMD1hgXjP9MaUzv2aX9QCenXL5pReXbK",
  "key32": "55n79rafbceZbmez61uXDy8DqeUQ8YwN6usdJLKR6VgRBe29uLct8wE7f2gzr7BMVK8ZESzZv1S1HFkS4xKFhFPS",
  "key33": "59wZC4gnfrTd1xzFUjDiSz5tNohDbFKp3hWW136iSfHz2UTsNmi3K4btB16kfVN3YVk9EjxLYsvBhdA5A2YhuyB4",
  "key34": "33J3F7cs2fEHqcRva3kp7yMuf3AdoqRzzU2GG3oCE6qG769Kgre4cZoTtj97WeYGFDB1ULEua7fjsSZEydL4VWsX",
  "key35": "t6Kwqg5pzVvZX3kMjhN3P27Uq9qb24EdjBK2cVNTG1KmTiJRyRJRZL3SPFMjJyH6ixfXes7yL9eZxioRm4fSCxx",
  "key36": "45iT8Mk4PzS3DaFiqqJMCDXryxEB4N5TcuHUsEXgtLgg8CTbUSf8bSW2jHKhBcBJfeQRb72UfSuQyGecEarAyEeC",
  "key37": "4YV9y7h7549vJAUZPzMM39yw9Nc15u4vbShZVUWK1dujkfEVQ8NH6mwNwZ2mFuAxqm4ccNYvb9zgSDE1SmkgV2G9",
  "key38": "44Y8qw935Lhz4Pu6SUoQDLukMYpfTe6pyvER7NAjtrh8mgH8Vp4n3FYcYRY732yf9RJvFiW7ECEFpxMJ7EoVGjmP",
  "key39": "QW4ZTJjRxAgmRmzv5MGXhpx161wo49ESJspp17rx213X3QLuANDfzHYFTzja6wGJfovMqX1spXhmu9426aMZKmZ",
  "key40": "YwcEQZ5TC9V7x94ZwBjfxdc1n3XrgdFRViun6FBynaVQn3FSHDA5xtTKvKsQXNBQFb13KBFat5HsFpNoYp9Bizj",
  "key41": "39vV9n3VF91srmJZhbKcmaVHzBqSGKjFfb7S5BniT1vTnHCNbqGKAH7bU4RHS41v4SLeJux5PmTnGT6mpiY98dUd",
  "key42": "5xUcQPNACfQ2898jRT54DNZuTANHyLzJZwX69JXfdd8aFcnuvjtqx8Sq8pJx4Z2pZCfpAztpaWbtsP555eUUFiHX",
  "key43": "2Pn8tTDfo2S4F5SkVj9rkq2VZtZGriYBx6PfKMgbhnYu7TouQ65vFbLN74Ts8Jb9T1RbHFfbjPUfEpejfToJcsX7",
  "key44": "DfLMPtmxYrg55AVg8Efk3JBt3sUFQc1fh9KzFWyvoeuzVp3JRPXyxHNarnEVa3JtV8dG7Z6buqrY3w79CfKLMvo",
  "key45": "328ho1wmnVwmbunQGyEH832YLEry4vMKyPHPBUgAGj2VAYJMqHLWAyhpRqDJMqsqxqm5Z3dj8z44ovv8sh11iZ2z",
  "key46": "2tMgZkU2diD8k3smGhWmZsTpxYMmKfRKW2jC5WcZ2PEG2evSkYTDqwhLYdFaxHQh4wrGXKGbj5fuAxm22YpCNbNW"
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
