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
    "53RgRKmzsjveScBjPwoLZnP9DbKmQTh5diS5KcwLVf3CbrBYReTM1LbiCfWgFqZS4xNspWwm6MAAbe8HakCpPqNU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KYiX3dp5ak99NWCEDpAUXwKQBSjjBwxtc3xitD98MHiPmHTCTTJT6DdD83DwEqn8pujkorEuq5dR1YrL1t9XtLA",
  "key1": "ou3noRCCqM4Yof3Y4sbH7mdoyzqH9kyUyB3DHAVvsiEv7s35SDockDadW8ZTgBaLGDEVrp9Y4Xh2WfKC3N1N8Vn",
  "key2": "2Jd1QWoYxHKt5UzpwCr9G6PTtY1kT6yzcTgkUhCGQo2irRvdLJaAvJKRcfNsq4MJRMdCZxkD9bv27LKGawsz1uLA",
  "key3": "3YYDc4HDuPXd9MSryJB8DQJg5dZvMCpww12eoFomD14jKqjdJPFSQaHL5nWiDYXb522DKcUHKts8tgp7ZE1H44YH",
  "key4": "3nVBdjUGfXV2uAhGF38xfAZ2Fq7n3d6rKAiUKwKpgWcre3Mfv5RJDHPpCNdzBEan6HQAw3eLFsCq3bZBQCp1JD31",
  "key5": "3oDwMn8jW8ysJFmNTg6XNFTxhGD1m1Wk1n61MBkhwgVswP3MDx3q9MY89vD6ZuNeBMgNBoxXGPUXK91FsS7iSdkB",
  "key6": "yvarsVyNDTUkweedXizuQAvHxmDk8tvzkKVLbGvGNVw6SybcLbheQ19oBA6E3iAoomKraF2JA2Xs1HN9VieyEF7",
  "key7": "5JQiTi9oyt4YWhpYjdsa26F4JBZAhLmErsPLzgTu6Lkh13j2xE1TBH2NpmA3YV6hDR4XNWVcCrSbjAXxjFpykbuw",
  "key8": "4hqm7nkVyi7bbR8Hf8Vf5918uZG6pSojbHKoUUPQr6GXM5rbYak3G2NFVtmZLXs9cNPemctap1sN9zNEBpq7hbRr",
  "key9": "28HirMM6tyCiNjCYzsnR5VeazLW58UAE73S77eXQ51UeZyDzwbbwU1L26xbTDtYHhwEcMfYCW7LPbmkPVVPLN4Gd",
  "key10": "5Bs2cbBnzdw4YJvtaQC1ww9RRMi8whJV5UEAYizuEN839e9cz3moFTGdnxqiJjWWuBwzKrBSGesWfT96oP25bdzC",
  "key11": "548nH9UDPGDvfNp87FrkcQe5mCw2NmE2AtRep6gj2pUVxWE4WYs8XvJ8YuXe51NoAvSRSp59yEDC4YBDEFcELyZA",
  "key12": "cUsFeaszuXynPnaWqzAjW3R6tcRY1Q6rEQZVAevwcP7udU9gmwRGkEKyVu7F3BnSv87ok6hb6ctNaStGE3EzzfP",
  "key13": "3oBgvQpWHjnQr6bHpPCcTyAEmTYRL349GtuReUiHCfETtKMU5R2XdFvfYAA2bcLtjzv3yED5jX3bta4oHVJLYQak",
  "key14": "49p7SdhpG3HEzyijJzrG91jPeJrTLAtU4W8rnyFWVBocLy47Rya6Zc6VtN75xkmPfo2X24BsJntn5conE8DiuBas",
  "key15": "3DcZbioN6kbBzAGJb5KAUBzRTc6DEThDHQ5N9xAEYvpkkjTQtbNGjgjQCw7Ht6aLJ81qtAZ46cmRLaFfEpHc6MzS",
  "key16": "5SbJZ4ZB4LPt8qFui4yo74a5BtFzNakJTXgpH828sGDhVeUkAJaXopBtcNgfk1eJkWojx2EaRCGfrAzeqZsxTSvq",
  "key17": "5j3w4k4iCRoWQUtQR71uabN8WkEgHNKW18nSR99kbh1WLpYobhNhguoC83LUvXkfmMKaxK9EzrUwPynMRDWMQaeC",
  "key18": "N6b6nWvW8ZWvskLDd3fZiuqcgHq8TLw9L14B5PrExBp4He5XGui4pMMBJGsTsMqY2TuzqXtdd9V7fJDNFSAkgvm",
  "key19": "5BxNnLbpmG8v5KHM7bWwzP8Vq4tF6B9VpMpmvzihqa3kfHkJD6C4wHdgKbB3cvjNBPbx2Jqvi1RT815ZP3XJF9q2",
  "key20": "YNmi7cE4hKwmpLjZXPfUJ5YPTLJEMdXNECddvKSEHbs82dpDA4gPNWsJbMinHLqGgLByQ3jzSbsaQjBJpc6i1tK",
  "key21": "3y6KfziHeUXHWdr4ABQFNwSriGu4f1mWJhRxjpcMRBDPEVeY5SRGomraArsymYiLBhaNg4kQqM2K4dnFt5PZetXx",
  "key22": "2H4N9b4KroZHm3SBjK8CiRFgFLEnpmpEjZszBzfV9qHuNig7RRUS7P1SozBY9ki49VEJC7FGSAdXimGhTMem6xhJ",
  "key23": "3RPmXytrh6g2dHM3RUYazLk61TPT1j1FLaA4ciZFHjfWZCs4GPYFyod1tU3u8SdaJWmT2u8tYGkQ69yLy2cN9nfX",
  "key24": "1s7vfm36Td22b3bVzEPSYA2hXdfbidUAk7gffpEN82bPUd59wxYQuVddUaNxgMQFyCnPvQguqURpRboFHw4ycr8",
  "key25": "4PBdB9L8t7H9f641qsa2jQnUgaB1drj4LEK2mVCppu882CQiCnUj5vybXUufqbrqECKb4cp9qZQHAqPJk1hJ55SD",
  "key26": "SAE6ai4D9JA5MdE9MRJFybAJHU5e93NDXP3t775FmNXrAtSs8dvm6rK5BnHZwunCUTfewa2id1q73Q4ghBfAguc",
  "key27": "4HN5Js4p6jCusqakC8JvnnSBAaAPnFFFBpabAFfjiqRUZ1v5H2qgxJFpxcJaPiZDwJQBdP1dVqoHm25hurcFw7n7",
  "key28": "4zBajCLnuAjrhHFudhPhRkznENR82nJoqfYJcPmfSZ6rgFxk57gjh6KGgUEdBxTc8xMZspdYybSyjPVUPLgErytj",
  "key29": "kwZMZR4MVathiGuM4WW9iqk3LJyuT8vuEBZkwCBYRKLMwkzZaNV2VFKP4QLFHhdQTo9Set2sCvwgca1gCpSxyC9",
  "key30": "2KGR9axbpkmb3SLS8KgPHMY8FooyzqsYQe6Ur2UUuvv6WbkDA8sGozq4BZyabwfA6rw3PvgVL4g9DvMf4NCWnfP5",
  "key31": "4ZNwmkTwuqGFXq9a5m23QNztYYtEFEiSQkh5RAaNjm7WnTYkqa9vcfvK2BfTCv1mQvAwM1SyhpgBjft9Zn5hwF6P",
  "key32": "29gaWoHLydbF7ZtXdaMzPPkyc7fe3Q8UXwWyKL1GkdEUda6yLfY9A5BNeGUwfqSEr3WZ4uQczRQBmKaLesUWbgd6",
  "key33": "4EaP9cKXTjcCLLnY8ybNeuCuB6sqnUCRqQhjWUWRRJaJr8bfRTSfbkE7pMTU6tSyzN4grpN2eLWb9JfdvinTzPYM",
  "key34": "4qgWJsH5kbHcE1txRYCf1TPz9C8zpSTWUMndTF2z4J4hvtVRmrybL9zRPwKE1BWN91KH5bpGuSTEQk5GPixT1tcV",
  "key35": "4VGQpF2xftLBJUrujUZpwaC9vjFQeDEcQ3dheAXocem52bkGkr24kFUtmLvvfteSBX4LobgBfSE8Y9LgcZDFg2sb",
  "key36": "64rAb1UnWz5omRq6EtymXkkZQC6bz8aThx2ViaZZu4c7QKB74SQP1ckuk5G3PjMQEHufYNsgEm73P3LS4R6WxkWA",
  "key37": "Uh9ZmiDnMHXR9QiQ2ZZSoqDLy9tm9mdBNFUCD4BA2dfjmBNRhscWEfK28jpzRTdK3YfWowHHFYo6psKwBLYXEfm",
  "key38": "5RiFW7t4pRDipnuhXexyCw5zUY2dv7bsPS1ujBHjGoHmY6GFtWrAZrEgXHZfzi1fHC45Fyeye56dmasfy6WXYT6d",
  "key39": "2F1g4cqNKstynrUipYpYvbYKd4XyDHjXv3WzGdAig9g9tRRccyL3sfqJCpYYMPNfcLWEizRDz782p9j4xu6cALV7",
  "key40": "2YEnx3wQiAkKtNBPtkMmE3NRSY247MDPZdAQA4wJjuD2HL8JV31QzywA6Eei44n76LeJCbsW4FhFdcJKHZv39wbU",
  "key41": "4hVRsKvvFnPrVj2WwgoffVyzsaTu37iH6Tu6yjw1gHw6jTqxQJNFsyEnQ58Afuo9dNQWZMdAbAUQJS5Lp3jtQ8yR",
  "key42": "vRFCL5P88uitS2Y93WkpukJ67GzJZ8CtBmKqDrvLyXCiwthVREEtjNPzj1uozFCm2XYTbFZweBtKRsqXJApnSgn",
  "key43": "38xJ1TJm338vHACEdt6xxhR56r7dXxunYmJTrt7GedxDAhhFvxfsSuC1mGGC87L8AAA6bs6tEcGnHGJonLvwwMGu"
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
