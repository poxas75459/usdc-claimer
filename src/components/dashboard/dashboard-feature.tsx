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
    "38HqDYhKsHSNdcGQxRRHPb42zxJUnBzcaQ1Li15qKFmomBLW1GyYLW6uKUcuMCJAbUsqHCdHxN1UURsjhx4ByDPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JHnxvQfBKzK1Fei2nfBJTmSChsLgFdEVgJA69KoRmvtn9DrK13XWemyytao8LLcvNG4oqDuRAKJCp99c2sAdKWU",
  "key1": "61G6dPfB5LfcnQTTKAcRdSNT9wJVHbxGTBigQC4BskRu9bFuofFpqMDWjKzRdQd9m6Y6cPDmc7CTyQdqNFHcKG5H",
  "key2": "47CNkPjTmTupTSMK4917MFt4uL5vkzzNyBVK2cPGcCZmfA7gXgTV3AyfhyBdmuWGDa8u536zz2MpCzNwc2aCjvYB",
  "key3": "28qRoTgt63CgMYYz4qi7AXWxXmYSwb3X55EDuaVApE6NGHWxat39n89fALgMRB1FGXfwQrs73dHUBerHkwvgcKx4",
  "key4": "2WgntYAzx9tkmNE1v1m854hTB1J5JSUTBfRT4rmjo3rWQ4y5aXdL5vJcszfamR9Bo5CrvKDnan5y4Wexq7pKm5sn",
  "key5": "4wwWfWzV2WZ2fYwNLByAz1BDEGRznrPRw625Ci1axCLL34a8n6yyHKJENcWk4FbzPoQPsZEmyrjzACK7h6ktXXuq",
  "key6": "28ZzbY89dHPJabKR7WUsdSi2W9ChexMqg7LgMGuZAKBvjkEna48k71SVZcE4M3uaYonebovgCixYkZR8RfSeBeLM",
  "key7": "4KyoQTKkghYqnKJMF39Ktz6Qg5KknF1emTh4eGuSx2pFz3iej8t9NuTKs9CEjXYddjFRGyXXXCp6JYqdtCJsFXVv",
  "key8": "3rzD8a5F2Rq5pEyus5uvGfbprfQ5WrBnoHTkvSv93iD23YvHxDorHndgm4ru6DziNV9pR6BLZfqetccwBn5s3QKd",
  "key9": "43kDtJ98YxqCZghjDzP2o7SbgFHyD6mVKeggvKCNreckHwCY7YkphkVehctkVnQCm4DwT4B8dfKGkLnUhLdjzzFX",
  "key10": "5F6guU5yxER73pDXf2d7uSUd1LRcvFLq7yfSVNRNj7MJhsvCrEF7xug7d6Hb189kfNCTrj4jFpK7Jr4VKLSKpx7p",
  "key11": "5VShYPDZ4dZitzMHWwk88j815uaKtqrX4qAmXH6xRjwkEzWFfYNFPDKgvnddmdU7z7T8NgX84YNqXNLWJw8VR9a8",
  "key12": "618oHyNdauUUCSnrHWExsjMdwMCjuTCrJ9yj7yHNKpyfFzaDSgq7w5918WrkgNUCYY53az1ti6asifBLifYN2QA7",
  "key13": "tL69bK2x4PtGxUpVt1P67wGismwxTJJPwpcatUokUmZN8SjEaqQQQ7NLDNGxTZsk24D73yY4pbgXFAa1bjbbVgW",
  "key14": "rCpM3nRa4jmpKnMmmUT7hKuqxz4kvr9zWLbqhFCaAUkPEhoVYPbz4eBmuBnTztzAEHrZLDJgTs8CvXAwaHkVoiX",
  "key15": "No7xmZCxQFJYYmRg4m28czc9iDuYnTLjLQJd2NzegCcyEjpJCQwU6w1HBNSKyejQFwNjxCeZe149YU1BRbMjMS8",
  "key16": "EZYGS3qCtczotP5yEW2Bxjrvs5XyqLT3TGBJ5SMQ4N8q5TPbpt9Znes5xgnaaGQTvySWxTznmuT3qEBLBVSmncQ",
  "key17": "4WZ3NkBbHDH9Uuh2ofF9SLBhHeJSKAYGJ8bdvVdbVbyntF2uNYWXD5vbrpEYX8Njmko37doEsEiDTaRkdzkmcg4A",
  "key18": "4ZyDbSYPFKZrZpfThC5zDUK1QSVDrdaQMKwqnRwViuGkpEB9U2ZUBpouJn2WNmgx6cxcSVnzzyTyMcBTvfM5LvHX",
  "key19": "463KbcZ74g5B2oqubVV1vcXu8bsH5PGMWN4W3wH7d4TKQquYxC25Rx3BPWxpxVQRjq1gDw4b5GoYxQ1U99etD7FQ",
  "key20": "2rbj66yfWMTJ9QXPq18uAC8TAj7skcEsbTK9WkW3zgoPW25q51GXw2he2F81JBJwsEKwrbDBJt3Qje1ePJMicLMK",
  "key21": "49ftgqpB4rcKBcRt2F2yghHxr3TVKoL3khxLbFGtvNKPDH7ZWrhULzy8MyQsSpFumj7EyXeSCJ7LFXKtv1ZNwisK",
  "key22": "3mZjhEwtprV8EFW6h8tKicH7Z9UbHSFwxmxsdaW9vsSt9wMZnigLeyH45nNHp5iFYZKbA9jiqchYDgH2jaouxpuC",
  "key23": "4dym7qudCGEzq3G6mSJLqEVcYc6ftvjeUNzYLCuukNJpsYMpjXZtDycxTmU9eTsH321PN5P2w3Hc7nJmSJbkJu2b",
  "key24": "5v2ny4bcf43siyrkkoKGMSEdJ5K9pQvdndkvQRxPU55ycaBCnFbm88jNbukTArKTBerk4nJHYk51Cy6EtGUAQMvo",
  "key25": "X59GTv2kvKNd6SeVxQABo5gihK4JMaT34pdaiMCjHy8jmB1mLM974mbvUdgjBabuXAfu8v1obAQXFBD59jGciei",
  "key26": "u9zyZ6uy8nbwU4NJUTsXisSHXWC3KxG6UWoyY5BrzFm1gG7jkuQAjrbFePnbkAWcczSdAt1xpyAb2k3v9pGw4GK",
  "key27": "4aHRGABcF7YhATQA95uSXAEpQLT3eJkmb7aEiUBfb5tSoWnie2zjkYS1vrYosv81vN6GNy1jPVxzdhEPyaMiFY5j",
  "key28": "5grYbnSQFYztLmN8nHGsswndDYszB9ySkT11eZA7bURNtyUtHbMDUDd2tz3FCmexH1PKNPrSSeyRocpLxyC4aAyU",
  "key29": "2R8yZGMmoZV3fekrtyCc6o83L3g2PrADZ6oYDaXU6YtCH53e59LnU1ZXAoXHd9AeMvhSt75xyBSAS784QZeDBfv3",
  "key30": "4wQunFiZQ2gquJ8wRYfyckPoWXdqjDNf4P615KVsPPe8udq5AA7yBTEjtHhAfcGwptMZ2A3yPH4RysAUnRyiug1Z",
  "key31": "5ekL297nZjRQZv8hocgML72hTpR18ZkKA4UQpC4HRSggKMSpuk5wSrJW1hMuqXqDLNKL9wMn3W9QC4Y7WuqBa9PY",
  "key32": "4me2KRmVvT1YwpDk4bUFn6pjGYK9B2tjnokKiHFLD6iXWhe5JyRJtr4MMJ8ujCuLLPC2jJfFfDP7AWM6PQLbTpSt",
  "key33": "VyiTTM7D7dtQofhdgsu8CLMniLsfduruaFGmrH6Yqkb4YvpLTsHuVaVtCa5Qf77dHgdxnEaqmdQJwhev5PxkuDV",
  "key34": "3eoaFoMyjGu22ectVr1AziDJsRDAFAp2NL132o6KgNjoVRYj4cSPetU7hTcZyxZFCe9sqcxJ2vo2qfC8VJzhXYmh",
  "key35": "Dh7vu2EW6u5FDe5GSryX7MVrNxWXDxc7MGsSJJ62tCLqhUucZUc65ArgN7mZz2uZNySYSvAPePSz4TDXhiGTiF9",
  "key36": "39VC6zaiJPeSwd1JGqoFUYZ9WW16EmgpiGcqXcvvY2KiGGDo52mukmiRQvUNa4CYRc3XdVJjAJeddQ66bnX74yMj",
  "key37": "wdLHYeALp8DtP6dCLVDa7xTVQpN3nXiy2nJt8egY6yLz2Qwuw5BDPCjbKe3bW13nPxVDdoiKj8GTysLZzCscLWM",
  "key38": "mnAUR9A5rMYGJZDP2LBRQpiwq8uUAZUKwx6RxrvK32h5TFkReSMnTWhxnuSUVYW3bmoBhK9qYKzauQJPndeoc1M",
  "key39": "4faG3ATGi1e2LgxM3vj5hcbfiGKH6WLNgWkej4ymt1Qzp95TLR82hyXiXp2sepMKkkBtPTjDmcABgWNCSm3Ai17s",
  "key40": "58gqxByWxwNJSyxqMWR9fP5EAUDW8L3cNfsNyaiszpsvZCTaRnTnoaaaiZn5v1hHb3zvt7k7zp7EDoYTGVfKjB4V",
  "key41": "53ZaDFDzRrAwyQX7VAG7tvpBreoV7XP68oryT1DwQWvuJNuqZCchFG8jK8Q9zmtHF3HJqVY59rKXvL7q5A3vPHQz",
  "key42": "4QRpQTM3NekHm2PzQxTUFsGiLDEPb5UWTi5dG9YD9YiE6eZDiofiLdBoPYt8y5ccaSdiLiSVLEWfRaVdNMpWVJhz",
  "key43": "4wW55P4ahu71AHV8BbeKTe3LuYyb52YjKRU21YoSAdWjS3Ha3TAh7FUBWKus675unyZwr2ZQxkdvnpeSs5U2N4DG",
  "key44": "4HTAtaegBju1f6bNBtq6886yfpLzsUcSppmpaaV3ECEA6HnnHzFYhiZYyWe1tcHQHaZQa9QaJLJLVnWvQh9s17ep",
  "key45": "67YERekmHSEPkMjYdPhTUMTDxF8u4xzAz33w12HRZne96umjM5iXaQsjBHVXijKEKo5CvtEPGQtNnXGKm9N8ABzG",
  "key46": "6NK1A43UVUQN4Do8pdt8Wu2GrAf9y3udKm3uvgeDob88p58mZ8wfisbXTzcVWWL5fZiBbCcTYwKAVpMgBdLxUxf"
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
