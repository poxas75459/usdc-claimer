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
    "d5cq79VW1Cf2qYRPiDxYEUuygPfRP5cuUB9pcFHuDx4kJLHmjXrJCnyqD4JPGS7QJi45AE9oA7R5XR67pLLNUeg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MftRDwy5YkkPbFwbQTufyJn4TiVUX29fQnBGA9MCF6ADkni9X8LtJ7ovqD7pb5EaJMQWxbC3T6qRrB1j4eK38T1",
  "key1": "3ovucTRFey6igDcLR2Zu9gDDyGmsAJCD7ovFANmb2GznSKebhZZ6kyXXUNEGTrnUpWmxqzuj9yzjMqFxTehySB4r",
  "key2": "2Szw2sa479sndoT99WxVMjwn4Q7QAJ1eKwpdXCGhrM1kBbuTDBjckuqUT2tb6HzuHdZ86peWxs5BS91zzrCZ4yW",
  "key3": "5vSv3WtUuji8r4U5q94hsRSRGfKXPZ74qoPYP73HVH1GG9n2EvTXxA2oZNhkWnQENWpnp6F1BpNAK4dBQCKJ5yXP",
  "key4": "5oFSMdNemcoFw1i1cVGbmxZBWaMRHEEnJz4tpJ7wD4GuxWL2xafVNtwVJiXm4ghqbchswSxp8hYVWuVmrs3Y5ofj",
  "key5": "2XasEEuwNR8SHe5j2xLsQXmaAYmg8W91QurtNkVLN37i7BZh1HE7T235K4wFVGfn7szTzVhga8i4orcF4hR8xwGM",
  "key6": "4vpiufnuFVfFgL7QnLwRCvycS5xDGM9Yg4gXAUtfGS7vE1tFX1ppo4SrrhwcPVhD7u3hf8vGqUyGGw7JouKAcYxT",
  "key7": "3sSx7UuHQoZyMTNm2CfpgifPFpCSWVSfcfB8pHV3w4AMEMVkoNLq5UUiMnZtWPu5SifqoBdWpppX5TZd4zmEAxAx",
  "key8": "66XmgJHkkMsb7ad8f7EhT8XPNybMQGJTgqqGe7C5RobQrLQACngCeHyVb7J7nQqqxGQS4Gjgw2fETTr4TvtmHqao",
  "key9": "5ZnedsnTKqxZxNESsUWeyTUFN8THWiuPkyS7PbDcQR7BUPem6DJR8qP56iNFwEc6JbJEZMic8uMuB28xMzk63tJp",
  "key10": "5gLs29ZppHQMCPhmUt892t75a57KgEBq6nZGhabbFtijQddJjCiq3dMPL2CEeDMgu3ggEHu83dtum5WtbbjSRbUS",
  "key11": "5EGAL8GeYZF9VEHRVArcUKuHiGaAvQYRBzubEW4V6JxzG7DUq3rr3beaYz16cKrY9xYbzXXacxvWvfCjE8Bk4V3x",
  "key12": "GZiVhQF2NdzzzDvq2XKcYWXa6GgcovWA6jfpyMQnbtVHfehCFzgMwchDtkjHaRJANMvo7813wNxQyuFeYbrHLGs",
  "key13": "Pwow9T69sq6WQbMHdn7Y5jkwgD52QFkYZ2jtpqLc1CKgoyMXVS8FUqtkjyCTtrT61fdfHk1fWxG6xtGqtroD5Xg",
  "key14": "26g7ZNeiNiLtwMWjgDDDwve8rLNDmJpxC2ipdtnfs9rkKMzZH5g2GNpVEoRMLmbXXT9avteZ9ntStFDVtwdJgYF9",
  "key15": "22AAgWNxNPfKANMkKMKgxhqPT3GZW8nZz2nWKFUvwcW7XSaHGR8yEh28Wr62AYnsNFDDSoUBbaHKPLRZs1t43nGj",
  "key16": "2dByxevPaU5d8HDUE2aGi6iscrwyUwXUQnAvxvjgV2M3R8L9DhpDXCahvxZJ8yRuaZykaJCWoPrHd6tugAf4CsP7",
  "key17": "29JDK9xqrD8UpHQ1xAZKxe48DrvmRw4QdcNT3bjDRuD3EqUbkCAjiRkwNvDUyHXS7bHyc33LsJ31Js1rH96yEjpN",
  "key18": "2iV5adSx2tYCgN8B8Nz2ysfynREQxJSrp9hpnaRPFxm5v6vRgeh1bex2FaBxrKDSMaDp5mgXK5qiZRJVoNKpNZoQ",
  "key19": "5QbJZPjXnafTHrk3iab5fNj2pB6CWon8Po3hfGUrUCPTuWD9eE6GY8M5RhYJmyw8bqwijr2DmUSYSbbtbMupyNbu",
  "key20": "5CDXpmR9AyfYApvZQvwTycM9exwYKayKtoh8oz6Go3zpy1LtCYgXJWLSyDsV2F9rxDMThPuYXjmyVqRM1KXbUfkj",
  "key21": "E7NFBLF7NLzzZciFFrqZv3TsfuswUaBsa911QKo4f2dg99ib5ATLTkBqVq7ZViQbMz6LveQJckDFRxDWSf3wYZ4",
  "key22": "3DHe5axg4admdHnNNZABn7rsf4wiL8Zh52p9ur44HLueLNT7soF9pJr63k4i48RF77rPsB4TEwmgUVS92YvvjSA8",
  "key23": "3tbZsVcRpVQLHknBPxMMuFZmEF5u19EMSX2GJmAyKTQeLEyRUZTj6eXpCbcPJ5qz6J2o2Ptv4fr93PxYUgmMtnCX",
  "key24": "5r12FQNTom64myDiZZgAuKK4ECwwksfNWD7MChALAvTHK2qZQjsyMBcD4DCWFsVbrmGRZnPa6Ead7rm54bhPoAgM",
  "key25": "25hzo4B8cEuR4rGUqFkXQHSkQMXjEZaxqGZRwrb1fdhjshNxZm7RqeNy96dTECTjvdFb3t7dB3fSdgzCejq2eSjp",
  "key26": "2hFefNg2DZkw1W38wW4GrecvzrfzVU2eYMdKAWP4xWwQPXqEh5JbYn87wYj6hJUdztBmQa44SWkGd4E5FVmUatLx",
  "key27": "4csNMD5sqDd5pq5ZVnwyKEbTcjgP1tuosonqZcU2epxF9fWrkUAqeN6piTJi4bnMNhkeV1eP6pgXZw2k6d9QAY9e",
  "key28": "3jugnD2fHQomxjFssmppWgVQuurB6Uc2DcMCfitZmsdPxtAtnLSy9cYvwH9nSmsKc4vY7QuERGKYfiBUEo68sAVP",
  "key29": "3jCxp9ARqd8JiZ2oVkYRaa25yiwWU9HNrkfmms5FayxR4XM1TibRKMZpMfiMB8kXeidfdKm2iv1W1WFjdGFCrAqL",
  "key30": "4FtwueZG1iCRpWmDTHfVaH6DV7jrqHvfERXW74ELkM9xFEA9zKcAMSnGr5zaDMWofrLGPB9591sQYZvyaVM1TFV8",
  "key31": "5YmfRrU5M7v4QFFejMhXHPb7WToUP34tUCoovoUJn72XFBHAKZbG7f72cjKXXwoStBPAfPNhBZXUmPBL7LQDf5oz",
  "key32": "wnCXPMYVD32ypNBk2rtYMDFeDhZc9p2LaDN749UPT5qEwy7VT9ty83bmNG2ycH9T73pRgEcvW7FhG9rpqLeSiNz",
  "key33": "3ZTEiGoaGdNkNCq16tiS2LyY4PiRw3iVsUJyrEGARfTWxyWpCpHibbJxwvNXJMMzii8ZbgyTFuqMWcm4jyQ5eCWr",
  "key34": "39ofjY1jFNQPxedRvstAdjxKjGXUU3sZwbWmLMv6cWTe1y66q1coF4SU2PhVuxwVWYgw5usFaYVQQ1ND3a5JGhVn",
  "key35": "5Df8RC7ep4gEeTdP6hXZWJiNV2My39AQi4NopG4oSWk2ng6a34uxEtZ5zKuZ1bwn9kwAn3HNLqPUoixFF4NZMqt7",
  "key36": "Tb2zbdTxWU8TJXzcL7y26RjHxVp4XfeJ1WzD7aazVU6whZWMuK7iccjaXbo1VmVdQW38H6fruh4MMz2RbWpD4nc",
  "key37": "fZSpqzTeQtCpavw8JWFD8zLXFdamNwdmTp3D26HvKYPA9HUVDvmmKb3rEHQUBN4eQjn8dL7LAv1z6pEbHnJV5HG"
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
