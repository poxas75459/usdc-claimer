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
    "2VMXNMJFnCppEtbPAuxiibn8RCJxc9bPHN1CS13fjaLCr9ZRPzaf9AavE51ZtPczHdwfqNVyj7kndswnTw2oXo1w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NP2vs314qjCtJa6awsjVdD6xX2CdmJAMuJxJPzKCSEyM9Ey2HhnPapiAAKVaY1R4vDRBNHb4dbFmP2QMZMhZW3n",
  "key1": "2z2pp1MLwWsF6QHgfUSyLuYEibdqvTWFR6CDC7Gn4Dc5BjY56vaxdYpkZrKyJPTbL9LmYE9ipTeRVxZRAgsgvWP1",
  "key2": "2tAjReQ5M75JNuxG8Txr11KF6toNxeT2QEgPm2nHQTb3H6qWpCgtcuia7uWVopkBvXGRaAR7HFhChy6wEr5nNLth",
  "key3": "zMqHc2gEFzNnfk1JADSnKGh7BVqMDT1aeX63wcBDNRFy2hZ5kUgbENS2CsUpuBXwyhHUqE2JZbD2suA9BJw6tFV",
  "key4": "2qgmGrc2P7d7QpToS4TuHLs1PxSCrrG4nR3mogXf5URe5Wk1ebp2fkMUy2yematj91xNAv2V2VTLSdjJfq3z2jqv",
  "key5": "653mBnvvT8thwbpxhyGAkb8jXMxszMKo9tsuGCdJPRuKCdt2FNjP7isNPfYH9tcRp5ThGQDpPvMozoBBFkWKX276",
  "key6": "5GDKRGwiafYPig9D4DaoePN2FLUdJGGifNknYSg5kfPT6thMExDkQSbw8cPJUe5HQutaddVJ7ja6gaTPpSPXXokA",
  "key7": "5APL4dBU1PmdR6imUgT6x28Zc6HPcWBR6kHJgpBubRynoE8ZaB4pVNiN5NGt1YJdqCy9VoNtSyRXrcC3QQNZAM9u",
  "key8": "WFkGPrFggwhRRbiEz4fcfKzsExznNtCtrbjQv9waXksVuCRACf9Lk1Lmz1HNMTdWB1JS8zmSxrT4mzkHxP64yjJ",
  "key9": "3XSPiWyp1S6ZHbT46SUbmKb1MdaJs2FkKnjYKobjaesKfoxCav6z3BrYifZ1GQ64gkY17vSuJmKEvy9E69NP5htq",
  "key10": "2F41JsrzAusc129frS5P2HEHrk2ws9fUy5JUwZkuCnZc8bhqa9hnfNK19xwXNhb6gGmgupwYGHeaCnBLatukhtxF",
  "key11": "4DwYBw3L92WCVf9b5GNY8v1zACrydLpHBGS5B61hDYJvdX7fAdVrFiomKYCuoxmLgHhDa6Uxa9QXZJVYGehPGES7",
  "key12": "5K5q7vEqauVEcveCrrznfxCaeR6PQ7vzzfTLpT6cuAJp8EVuoayHskfuMDkXSd6WMjDACNghTEfEyBa6bYktTarh",
  "key13": "5Z9SQ96dZkhmBcYRLifaN2DD2ihk4XBiHbLLoZKTjjsRT4D1DfMKTTU8YkcWGkRGJ4AsCudEppUxJAh4VccMoSPH",
  "key14": "2FoyNm5rcWPCDpc1HM2e9yMMENTYjTBD6h6hiTS6Vo79c3SWBzHaPybP3SvpJ1Usb2KCXURR1qFyajttWdd5JkKW",
  "key15": "4DT7UAQ1zsgqP14zEobrzCFSxbAJ9Ego2Uwkn58Qt53QgtXNmAc4S5wbGxijKqGjxxttcj7N6VNGx6Dkp4dFMd9",
  "key16": "5fibEjxqeqqsUGSFbaq3MogMinhwvfj3xeRtKXCDPtXuYYdC3SnmRvvHXM6SWWyT1bEw9SAPJk1CqVBX5VA4zMuH",
  "key17": "3FvNwqExK7S7Uy9xpCpPNniwNCtbB8JxqVTw2jLdpgRY4odGZVCSsovUfSpkE5Uozksgsb7bPHbJCRPMxctWRUj8",
  "key18": "4idJPaVSDWXgNSu4dWgNn9y7QMBXjGFjx53QuoMZF6EYgKxdvHkstJkqoj3j9xvAJ4jX4dKuXtPnF2U3qx7VBHEs",
  "key19": "26cgs66WURH9yn2E35VwW2HYdFjpwYUdYyj5pnzjgAgroWxnEMD9Vkn52xTqPET9jh5tA7ZyitbenUPZL8wAudbX",
  "key20": "5qn4VZjKbi2ALLrfoi1qZDJYYEndyKDXrurDTCEDmcbAso75R2pk5HxWyuG8amxL3dyhYfaaqmPVEBNdhUEjABZE",
  "key21": "4qxAkNxBX2XC6TLT1mmSxgXm725oAoY7vzMKAgNBxgMMhXc7M2j2fwBJEcHTFyBkJs9vVE7uVUbBuVvnLfGN9bFS",
  "key22": "3F2hi3UuqT5skGpqLVHggjPCGbsbnz4FqgmZgFhSmrvUszaaz68QNcfPX5XrW1EWbihtjriXZ5knQtsgm66xNzXS",
  "key23": "2riiDxygmmZKpLWv1S6gShY4KczEMrGCc9hwyT5eDVeer7arfUGHPoJTGzaRGQ5KYYEXbZUL6QkWuQMVM1X5EPyH",
  "key24": "3xoevcera9oobmfj8pxqkKKLYNx7SyofdG1RCYkiu35qGX3WoGxmqi9SWDwDrh5fPnhg229q2vQNbK6SVzh56aoU",
  "key25": "4CFN8AFegRcuGmthFH9GJUx3XJG86NtcdUZUGttVRCYrdZQHzZZ8CM3z2iuQm3AdhkMPor34HPfEpprcvVrXdibT",
  "key26": "2atTE3P3c4Y5utrX4UPYVYf8Xp9QaQwFNMQNY156MZE6vasktbiFSQjJfHRv44gZBkYRRZcFYXugyySyC5YHs3zv",
  "key27": "5HphNXKWT3qM3LsyxJ5vpX3RnRT8aDyqF9DmNThQNPrmsaU6YHypaRY2y9Z68s55JgERpXHsu6Lg76NnmkFwwVn5",
  "key28": "2HQaJGZYZ2nDK5nbq7Y34iBv9cQ9aBCoDNfYT3PvkH9LePBPZA3hGgpdPPH4C6cQsWq5g4xKfNLC1acQ9QXFBRwd",
  "key29": "wWmWx6K4zMy6FwzVZdnMstyU3ugsss7JSHPpQnMm7F8Ejhy7rrS6s4ax1wPrChNZPJSDmKf2rniTJ8xQWeYFJeX",
  "key30": "nss8kF1UNEQdaRFwDRKyvPbJRErHChNjGcP8psf4cyM99yjA3U7CSNBbV9YGpuE726zBmn5Vb8MVcwogVqHM4Ts",
  "key31": "22bWizvWi369emUkZCR7FQEdgE4JDgi5kUgPdx1Z69FnA3dzFDWoLDdNdkvaBKm3A8LfDHkVYkuGh5gaSoPDvHM9",
  "key32": "i6Q7xdpNfVDCcNkTqkbj1n8QmKNaSWZuNa8MzVjY5J9XimbXU3H68tK4BQAer3cE6P3Fwogc8XkMJinEzTmQ93t",
  "key33": "2wt8zLFXaGiErunL1FEzrLgpq1QNGhpVZT55qyv1xbfAqjHwJoegQSrHBAMeTjnCQPmSYPrW1eDfa1D2BEW5d4PQ",
  "key34": "2o4q6Gh4pSSDAPzQ8W69LVNNJpXFQwYnzfiS92ThVYm481z8dTS6PVPfJN5Dw4vwZpzLGxepkykgAJmoSaUVdXtF",
  "key35": "3uPrfLDHH3C3RYgGMKKG89FrmPF7ppwkSo1HfwSknFRrVUgYCskb67sYC4UycD1LY7epCtdSA9QKxufv9ziXpET7",
  "key36": "5mJ6wRDpsh5Rim8NNC2BzGSWjtqQqRNDgN9Bh7hjzvD2has2oPNsiYawa2eA6xERBjKmt4qACwxwayeg77kbBdxg",
  "key37": "546V5VSSfxQLtEKUi2re96VppkKVm9ct2PZABDwpaTKK4KCPmQ9GGzLR6Pjo1KoE9c5PFnMqfaHeDv9ieHWKckno",
  "key38": "7o362mjYoFuK5muiw5jAKMYkjxwTm7w7uL7BjQJM31mxddE4KGQEGwrKc9vGVXGbXxmKncq2ygDquSmApuSrUAN",
  "key39": "41qp8ecobe87FeS1RfFnuKWCMZdv71Vjcqdu65y6MSdfupFY9A6tbXjqeFZLtcMSxnpAWsLWYMtWFwX2KSheqWkx",
  "key40": "5Ja7WSh1tpqaHyx4XSAbqTvyvKGjsuY2VkQE9aVXUonFYE1p1Wa7GP4xE4LoeqogxnQTKo92PySkNARWnidhJMjp",
  "key41": "62x8Xn4Sq1a6nH9sKoVcq8Najgr1czMWkhR76iNFejcN6pshBaGM8UTD5PFmLZwKS3UsYxb2bEuec3tTrkwBuqW6",
  "key42": "3e1xQYGR6KijF49gLFAfd9iTrQQ8yf9Rj3upHo7XXVe432ZCNRiBJCh41V5ZohXMrTMju4Lzts5PGK9dk3Pi12GG",
  "key43": "4yNBxgz4Edawd2CbkG3URMCQLbjkfmKQDfgQHAcFoSvsDwcWQjEVHA7tANoms3EJEG4LbJsTrAiKRcainhwjiupH",
  "key44": "2r64HMZTQVUzujpqVLUaNHjaTQMxbA4y98daT8DWX1DkKLUbKrkL4Jo3B8jG2xXW77drb13zyjnSawGmaBBjFwEH",
  "key45": "3MioQGjnNRubpEDRpdQG96KzKDEnQ4Fga4z3QXrNy5AEvQ9kfuHjNWMpDikzgaqg3NpAK3jzS9Qv22c6jTNtbibp",
  "key46": "3W8ouUHo5dVQA84WjU7z9BZ63AUozH2h4EmN1gL2SgZwKhKrS7CreAVh2CDSr2q4HWw5psQFpbDDJRKDUt4Jv94V",
  "key47": "8eKF9ri7qLp1Y49xFbA555Zi8rgARnDdBm5jsSd7xngRzVms2SF7gems8NDAJpoNKmUu7XjiUSipq87Hkt3enAQ",
  "key48": "RqbYAnqx5pQi7uSohazmX9yN9MuTCe77jzCiMukgUVa3DmyoBe3DfhcZQkKm16SQXofdLn16qzyNfN2eJvifCMF"
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
