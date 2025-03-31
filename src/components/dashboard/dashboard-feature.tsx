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
    "5FbbzdwaX4PNSENFXdNmqtymcQun6Yhxc2viv87rQPft8GAa6CQ8QunFNqRmXWSk26xKtdrYo4CGY3vygLFcPt1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29yEaHVKCv8mpbqbMXDAjqYhKY1WLeeaeq2ZCSozF2Kedm5KEkgz3U8eS5z6qWAZV3q56GVKtdphzBJKYenf7vES",
  "key1": "4yZhmovS4CjMFucRvoQSRKJKxESThF7oC9KPPNuw6UuhLUqGaVhnLFCAawTvTTwbFMbimKAeZQPErGLsYP5mHhTJ",
  "key2": "2jvvd7kRXBYN4JHRPiNr8C4DED5fmfFstw6pqyErH3K4f25SefDNhjZGLbsvgGg1aZh2fg7QRDKcVQzcHAPTprET",
  "key3": "tAwxa6fe43SE7PtdAQxyVBrcagAvPphT1ye5TdimPMGT9mrxf84H5AqSmyj3sfZyEA35jqHoiTzrsSkAngr2Gp6",
  "key4": "4Qw2XpmDHVEbzHtNVvTQ1N6cmwbrJSQDsjoP5GUAVox1wbWEc1ixjWvRDDhbUDiE8KEuwQic4yKWqMSTkhe4QorA",
  "key5": "58cfo3La7BsUME47KDYfe6Kp5KrYy7Ks4TYiGT7juM2sUt5PPJA2q8ZGAy2DVLCQ95DwVgHfejnkaJfbHGSLGNfS",
  "key6": "3pNAzoGRJe2mpEqBKv5xUThkQjqaD8q9KDnVHhsQ1bn51uzRWKT3iwofUCqu3cpSnbusTgd3pAgRWXRkkjKKqFnB",
  "key7": "3xP5fq6ksJ8jDuLaUJHTWYUYRDTxB39pyNFYsXGs3p9zh9pE5GoT4Nvcvez6HqT7bRnnkDKK1x2x9egdEFdnvmYv",
  "key8": "4ipd8HNJ2GKQnsPdco7wTMProvSk6NRKGoVEiDfF4TXXqDKgX2ZqsszA4T1dErFDSMa6nCCa9m883iWqHsERhQoQ",
  "key9": "7B4bbhkUdzHNJWixUq26NmrbcxvJ6ESkbYm1xwx81Ma4X5fz6sFZdeDwWBtxtJd55HEjVzq6VEUjacf1EPzzWuW",
  "key10": "49NdsWxxo6LDeP9hobbgcNfibAshzce6t2sd8qDq7vtXc8WWcKTYUemaP2XsYomoWXHmMFcrSi9uMQkt1RoBUm4u",
  "key11": "2rmmWBiZY4jytsbTzMUe38UiVrJxZbPD1yPBLEh9oE8uWSrx4SSbs8um6RgCYPpxHQdzNVsCrteDy1fRxP2VDkAU",
  "key12": "ksf2XPiW6vYnsjPMUmXkk8yB61wWf3VghfxhtrFZEqqvBgzwyBxVRv3suz1rXpLELNx9t2zJH6C8VJbVpEG5uUs",
  "key13": "4AdNB3fEW3nfdQfRTdvv2XtYefgnjLHw5bVZj3QRqPDmTFoc4VwkQxxkR6TXVhvaqGy51gBzstVL7vPjyzoDTo2r",
  "key14": "2uLcGXv85q5yHH9aE5Lj74UHStaUkFFHzpgC46G7hGMcHYARGevWoAcQG17rGmp2eu1SdH5zh2ibqmUeVLj1zqSh",
  "key15": "2cMc6Hx37KrMv6Zwb8s6ssVEC6hR3WFsB1ZJKNUJFYVjoQniDfCzVWsU3UQv31ii72SBBn1kRm8uuBrkAkWinGbk",
  "key16": "3EnyoRZXKXmNFAWvzuQouW6ebnZp6kJ7VDUzULV1EuCWj8WShejsmk2MmbdVHirk8wN846igi5g44PV2iHgmWRHp",
  "key17": "Prkvfn8rHLr9GLw1nay9dxyYAUwjzMttjKLRuHvmzzfrPKFDerYVfRDjLhjxY31cAwXAZhbotYMmEhTAwho68rN",
  "key18": "RC81dzR8C85f5T91JeuBxwL6gkTVDkeCfdSaNw3rwEGCojgvyzyBJXPsJt78YTnkSkStgSrrxkk9wYqZmEPrL4x",
  "key19": "XxJrqPs13JG2YJSMD2EmCPK9FkCfZfWr6Z7m3YU9trBwmXUktPLqn6688z9AHooGQE8NjAufWVvFxEKhQEmhp9f",
  "key20": "3CcX18SEZ61RTt9M9j7UveFrPP7mueAtNaZGSdZ5tJrjiKcu8S1DvT9TnEdzR84EDfJBbdCRCReMHikaCwUVYfpA",
  "key21": "65cxXVqaLweoGBq1LXPPH2TTCWuoc2zwQ8XRzxVcnFep3KNRsCUBDYnPNhuw7wTZvpzZgRV2ULCRsVx13KbEcqmk",
  "key22": "5ycBskrKhrcTc8VqDoRvVdrRCq1JPgcvsGF7fgJ2d23bi2jkQhXRQUoTLkiAZb3asZSGg6977Zkx82rjZZ9RbcQQ",
  "key23": "62weTCPeTaTodxSkLWpC7TedHaa8K4qbruf61SRMzcRmsJMZZkBig8Bx9HJkojkDWU3t44CSTKBrzQsNixRc1keu",
  "key24": "4KYiJfkWosT5Jeu6ZkmsjYUqr7YfVQmPRidhzZMjttsKVcNistJ4EnzvS9QZWgwRAKwNY9s59WSFfXB3Q4K8AgaH",
  "key25": "VvWTEKQPCcb6vYs1nd8qWi5n4TuCb88KfJDqws5EQRgHXX3YqYc3WCxjYAfGhY25QHqAWCrz16Js9vYs52g16JM",
  "key26": "4dXFZTYp7JCA1YBMf4ykZhygvSr44TRQKLZj6wtLJ3aPb1GNrs7NX47XWQs9xqhcMzL8gKDLFYy4NhUfjBBpCk5N",
  "key27": "5Z5AhSKExkWufuV4BZiiP7ViCZpvUo5UN2BwrjvrHE3c9jEQbdM9XAUbZUUFJwsjq3PvuHsn7zorzrBASVWLtVW8",
  "key28": "46K3umAawHCCRkmrfw1MdbPeFJ3hbPaFs1X6Fk5FRSELYzpndiK5RGmo8Qs1qvr9Jwukjd6U3jBpjDXFSgF5Sj1W",
  "key29": "jE4gy94Bp8FN25HtaaMqdHD4mqdAd46NWuvBM3JX35KMUXqf52fDyomgE9aznteSLkrRA1ea4C2H9Rpyq5G9XSL",
  "key30": "5agUqoZn8ZmeAeAnbzwEzvkmWqfkiE9mZuNrVLGD7MvY22zbx7Y37KLg14NVdNXeKpoXNPMHeMgtkWqpJZNTYCz4",
  "key31": "4gVkCG3KLJTJzLk7TEtaRb32kRPCf2g4xB5s3GQWjNrffXhBhtv2j9agDZNz2KxThxtinXM1qkHET3R9FYtfHBDU",
  "key32": "3BABR27ZM9quEMug4VFGjd2rPMxEbvM7GY2oAe2Us2yFMmUnYNN88qbzCxnynE1XCcjM5g4kAtgkRiTbkZJsNzHq",
  "key33": "feJAbfmrpTPrrBSBKQtccVGD8oWkdKhQ3LM4QZoLQRhYXcbfYL3jKReWsVmRpqwkxHyWEGAZTeEUbK5JpXLpn7d",
  "key34": "2MuCXt1iMBrVLSv8Rannfssk2x2voH4EUrb7FU2znF8Qkyc62dzSNZ5UyYw7r8o6MxCeocUbg9Gz28yng4Q7gwo3",
  "key35": "4RtC2GaK55H7rk8aFBxQAq8Np33A9e8zoGxecTWdZeesRRMnCmb15y9ABJcHD6NLix8MZXmSTtqGsCCu3PsKKdRW",
  "key36": "2o93xS76qrMC4Q6TS5G5uPhNit7KSa4vVwxhPijvc7Yfg4TEVmbGH9Gf92wG1EtoxZfVS75YF4Nb3WQ2z9t992nc",
  "key37": "5p9kJnMKS22fegDRks6kRmxqxVet2ZtxCA7vaRmEkHUJ9gdSHhayojbLJgvKjaubKvEUBi9TiB8gvLGeVU4weoK1",
  "key38": "NRGfm9pAwrFGwy6XfHFCodpXSVrzDc5eYN4oTtePPCj2y2UwF5y4ZR4cg8XGXgtDBmPzMsmcoHyYMp5zwtAag3p",
  "key39": "3T33ELFg9BaGFWQteKz4dmXy1HDmTytvjCAVoN79DUPdsujRmsSiW2UxZzWGskbamT5xMHRQZ9b3tD5n2AY42wna",
  "key40": "2Em2PNcNDvMaygYieapxDVXqAen5qfFwb7TyMYJpqAJzDv6QeamhPChEZ71b2FuHgPjuAuyzSL7b2eg4hxzGWZ2i",
  "key41": "31T3ejwNyozsjRUdR2ENTDLYTNxHLAZz3Aw9ZGGWTLaJtavHrV5chuV8po6E1Cbe348nsQTnkp4C7N7dviz6i9fs",
  "key42": "5vAGgaRi8cRYspNbNEvrVE1ufrEMUBAWYWZb9XzWjL9Q61r54vgMW4AFtXpBcn3brVuQUeFt6pMsTyaJmrZQQVgi",
  "key43": "45pQ9dN2NnaLrTycpR42ud4ZXfHXqBVHSx2aaFaSsVziMVqwVozuQv1Xke8aavyYZSemAwRH1SAi2iAyvwqmCs36",
  "key44": "3mVLztvAtDCXCE8p6MTSBmrcG5gSiLhTeqLTnjfVkZZWBT66Tagz2WRQHbqfehTaTrPNPneSMut3Kkmv1wnq7gjW",
  "key45": "2UoaBz7ufGpNbSy5z5DS8pMEbvezwDC2kRXJKKVdXKX23k5x6C48uqrCVXLWRbFXwMQtP6XeyBYSPgh9emEjFbDJ",
  "key46": "4zEJrZU1GmZPZVPEQNMnKnabdsvPf7pm5giwwBMBwtejiTwhzMy8ykWWdcdC9Vamdmeq2CAVFiQWfRHAq8dS7zqs"
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
