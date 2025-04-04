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
    "bQscYBd4v1Tfgzf2FtatnCKE3o4QxdCMnEfo7KFPHkeggNfJfXVv5ghPXWHAQijxBz9H4Spb9bDBZYd2Uz2LqSy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "372LEkzMB8tggXrZRZwn8gBcx5qavmTYmkck6QXPUwnXbUTYKdtRUbfkVcamTD7AFj8kyvG2uhi9Gr2jia5iJvcw",
  "key1": "4MkEhM2SE8vEmyZTNLEKQTKTu2ro47KGmCTkagh6Z1ywqYRDVQouC3ZiX78CppHeanEecQnz42ZbpJ4586WVN6kK",
  "key2": "3EqXeQZymDCcy6J34JcxH7pAJpEGFie8qMPzurgqgRUdrxNDxp15JTRbGyUqMsiiWhP3cQrCSRrDYvmAc11B21nF",
  "key3": "3F48xQpVY9AKNiYychkwWhg4rFSsVhVvJf1YwcXMkcWzgfH3QbRjjZvtmQaLHv5noAurkJcXk5ReUgTo24DkPuHE",
  "key4": "5VgcmJ3MDabCyAiKmCV3wfHb6SE7uwkK9K8oqhAyj2gDiHG7BSnw7uDSuTmUAmXJD1QoCQFcBA8hkYfVTGvL1HKe",
  "key5": "YaUrnqX1Rwhj2vBkvb7m6E6aRzVk3dXNJKKqLsGX2AFsr37VCMzUNLLytnVkZq41iK4Dzd3wo5AVM3bhf5HoTgd",
  "key6": "53cEuQr7fQaJNu8SNUeAykaa68ew4Qq5adPG1G1uFwGe1QiHsPHkH54ZwRWXk2vTZxqhEMckTLcXvpsgt1C2MjYN",
  "key7": "25VPd3MGvm9hP4pdv8pRZodvQZva2fFuwxChz8nWKcoVHMWvYS8e37whR1nWE5RBSs55yz1ouKrDJo9foHd7tv2F",
  "key8": "2ZQVJwVuZGkuhCQNmFyapxE66DobfDJfYDdtRbKNWscjZBmJF95eVTszgdniwDEShu6STLh2BDWEBpSDTAecoi6e",
  "key9": "37Bqsa4gcMdUdc2XdwxLJ4AG3xWdicQt6HxkNSBD1CLtpxwBPbXxGoECc3PW8vfEhtgTVdHkgCHumchnfiZXWsxg",
  "key10": "3Hr6Rpp9qvTyyk3mC8VndTewmFgd8EU492JNpFoiRFnikqwbs4xxmVnHgNdmLrPdj3W59e4j59UzgsTtTXS5XDRf",
  "key11": "5y9iVkksB9yvGLbHcDXVYNNYhFGfq4cTsC1Ut9jFr1ayf35LvnuEQdc9PXF12fJLbBw1BfPGELP5FkLfupvP7raR",
  "key12": "Gee3mfYNUQ4Rg6j2ebnpQZR3kNYCNhEaPV4gMHGhjXtMTk5LM35PdKVd4BJ12cuXy1c2yS138eKVdzdbSc88YrF",
  "key13": "oqAGxc2pib1mhZFCn89u6UXAvAkStryvLtBLXAV2YfZa4ioN1ct6kjYRYmMm9g56rgj23fH17LZZY6ihRS2KPdU",
  "key14": "23p4nPr4tmsB2eVVDnE2ezDibrpYP5KrzgboXY8P69ktqmuhNmy4qLVQKmPxXbbHiop6RdJWyd5gf4HjPu1nw3JE",
  "key15": "tJEWqNiGSQ3LCf8P2mSDdHztcc8Luogh8owvcrDM8jFp9xUiLVybqkqm2AdKuwRxEAxWht3nEhmrz6j2aZdVWb1",
  "key16": "3dW1XdoAdhjKApeF7KMhbGoCgSuV4Km64qSejgWx1HrqfYJUQhRk1nubg2mNnUEqF365esG5YB1DBJX9CV8WuMuC",
  "key17": "4F5Dh7YtD9yrtkyuV1JonFHGUpWSAUzPHfCwcCocpaErkerqg1wsiFLCDgPnwYFGnsiA1xkfM1efTPZ2dakvmXki",
  "key18": "3AFVWMAw2Rj6kqgGmSE5GujcsK4EFYSza7S6urXe2Xev3C6ckLr2YJjib6Fz6FWrtaduAr14pGhxNBkFrEj7kfGd",
  "key19": "4qrXDBYtuYBpk14Vvu591FnDdMzWFwcoNB59VGS9y5nuXSXSy19KjWUoJ5R85ucJSb15JTjw2LY5V3jSFqSDt86B",
  "key20": "48y3yjoMvDgBkHrpBjSFCSzgmTBTv4nYiMMbkoo3LWcN1HBU4bTB5Vph1DED1uwvWGiLRHPkp319JsbfSSdBzb8h",
  "key21": "53szvTn1ddEEGsATJpb7dhXsrrZSq4tpvzHEAne1s2NnttuxK5ra2iZVBwoBo1nKcDH7siU73ccjhX6wC8xq6tnf",
  "key22": "Kxkp7d26mQufvvgqTTFRRNsP3VZBMWy2EzT1oCcjyhgFu4AuCxoGwjp1xpratgFczwrrcRRfAiMkVGToYsvSj57",
  "key23": "61xQaLPTAUfJu54zwaa818Soh5ucEUWnQaVAFKc9sSNf4fRDyE8kvnJ4xtuCRgdG3afYNHFwGn69qpK72TFjpFFv",
  "key24": "5ZFJV15ETCm369odCH4AXW5FHUP9JJrZt2cVV3j1GPbZYordyHMS6bWW6rngqR1jya4fbkAH5mi58HQZhGU5cfQw",
  "key25": "3NmoSrZB5VoQ8d1cEDZGfdhZXMHE9YPJQEjHb3M9hRNVhik3pWYJGVY9N4w1anVXu9moStfw1BJ7MVWADF5hE4Mi",
  "key26": "55YsAcLJWWS8oD7VFpvqGuZfmEr3QhkGWibLP8vLRLj3eoFvzByvCLocHJBym9XxU9VgqFPy6mywfT6EUcSv1mBD",
  "key27": "4puCMMbvit17zJmKJHQojyozTqWRFi2w8U9Voh8z2Fpq24YosvaTc99RPKwBsBueJNMLXEoPBFCcNni8AC33A5FC",
  "key28": "C6bvRvXBBTkf2ur52XQuM5k83rQXvYuWP8nNmNQ8Jh4zNAxYBVimzMmh4vyHfsq2dQRKFsV7gh6HcGZFkArKXbf",
  "key29": "oYuhWEPdRLzsrP9DMKAa41PVSF2QNRT9eQPkaWrSFAq2ByvRSTrfSTTb75ESPsPUhWwUPbTbKwTK8oNCPcib5TW",
  "key30": "2hThSTDCvZetibwbmyMNBvSJJfNSoLt64sB71uMYjmyneA8Vp4hxFuXwcgAZnfvDLQe13vuezVXa9w927rjC5h3B",
  "key31": "3aRCRWEQ1n7ZtXYhvBWvJK1MmnZ5guuUEFsEhz8jUZ9Rtv6iZ5hFDdQhY53fP66efq9uF1FPkekDaHHbhqPoQbjj",
  "key32": "4z2a4eNqmJhyYaw6gjSXgK5yh3BkjkF7fc1a92q495jEgbZ5xyFnRuo1gfmKWrjSozT3RxTCD2BxLev6F4pL1jkW",
  "key33": "4shySWmvkgY4c8D2uyba3DZkiNk2nP6CubLFJ47u7LvegA1qty4KNATEXAusU6ij7qy8DABw56hVxbKZxcGF6DhL",
  "key34": "Hc6jcjjKtsdXuoHgi7bC2KiugvL9DdBb4udL7bj7wMvoz5Psmg4AUNauTEJ7VAXRpVWdvEFxvc5eeWY2fQzcGqj",
  "key35": "36kY2nDG6gFr26yHPH32VhX8ohTsH6j4jXacJp2jxN4UesNZtbjZwn3msoARUZXGsm8yMApSLFcEPXteiAiDstNE",
  "key36": "2DD7sHxYy3126CvZCDiZFhH5ZZF254yX1pzQodBt9gCAcSLC9bmT2W8wwVsSERYomkiwARCvhzcB1BTGzPtDXcYq",
  "key37": "2vKGzHVxFD8jKtuY4kTBHFKp9J9agPqYvBBAaf6KFTUQGenZcspfdRdg2RujS3M4ZxvbDkF5uvmxfxBatF5EMWEZ",
  "key38": "673eDqMBycZxKMikpWHcWpHb4nBHzz6cUEcDcemPPUYUUGjYv2u3zNb2RyDfLT7Rynq74q3tRfnb9sxUcXdDw19H",
  "key39": "2uHV99GCK9Y77mD4BAvkjLfhAanMDDKitvrFLhFeLqNha79fFDnmMwEvJS3sBhyKuKpDLXES8RGjshESGzQyD9oR"
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
