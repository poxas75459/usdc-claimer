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
    "3TaNK4upfDSbfTTTE76YRvm7gj2UNaQQpXsy45qwzGagLhuVHTAbTnuKXa6JYeupBQip5VAhsmyhKyqxytYB5uP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zz9DKqiSTTvXNUfDyok9Mmjihjq7NRNLHwpDzhSAJkzSBMvqWMZXn4tgnzGMY6Qs2UmMjafyukYd5g5ZpE3qvuB",
  "key1": "2MYuN6EmsiYcSuezn8swrsEmSA2M2b1yMK8xnyLre133uRnjnFxLRSEhH58TBVJJ2oZPDx3iR295KQt64VEjckmK",
  "key2": "4hN4yxe4N3mvDvQfZ6NSTb3LUDLS7pCKeBVeKwFHf7Tj9gmjb89cLu2unnBsDAyhzZ9o4h9tpiEWwHoVgvJDditU",
  "key3": "28jvnsZJwTh3qSzRnoEoA5oAHYzDb3G7Xa6Yc28h5GRc9i569bHA4pNAghM8Ucofei3XBToWw1iHmQvnHt7k1ENt",
  "key4": "3DDuTmGu2z1PVUFnRPvdG7fHff9GiQ4f5tfkmVDqR557RoWufnJkSttayBizT65FxhWYsVDcwyvPksQV1pwRF1af",
  "key5": "3bi1UZvXKxWVH5gRZrQtX8Qp6HsXarVGqjorLHzBueEd2FAJsHsARD2KZJCLvryfCPaD6nuAktn4CbXgTQY6Cp9s",
  "key6": "4yZT79ELejrCAyEVxwSzcJP74uD7bfWC3HU8bCeSpgeS1uYaVPqtP8GnQKYsonyj4XNtc3B3Rxqu4NmRLJ85u9gH",
  "key7": "5VnL658DqmwVaUyocuzETSDRb8MVdd2goQPfkUWU4rZxcmLFbjbtdEectsDnf74kUVB9M4uHhHpxcqcLa1sH7irs",
  "key8": "3Ty54dbmtBDx61HiDHJLEFRhVMiwwjbjdTep8mEfZXd9r1BUruxk7Bfm2JNd8Wvy9J8tjKK2dkR8dqeGS5NKdRWd",
  "key9": "2fmXesVFrd2NEgTYzx8bQeGFoyepowVoPao4BfGxKRqe5BbtFjysHXEBbF7JVDNoQX4Wqc9WpRXHdkbS1kPzgE91",
  "key10": "56an6niBndPG8Wr1CKBDjt9WDWfy2RNaGJ1GNT8cGaWygZ93wKZ7eJTMvGtxwPDkwdy5yEFLvJVHFFsXFHWqp3oT",
  "key11": "5SCZqYwZpQkKjYioqmgG7iE5gcL3sVjLZLvh3G7fThGRAVeCbAoeHwZfCjGyMi4bywg7oeLK6dgcxyMEQM7pQnFN",
  "key12": "4iADFKsQtGvd4eXSqLVP34qw7BRmECq6wXfqupE9XnbgrcKxE145LfPJWKmuRRYoLCGvPEGpH2v4Xwxp33WvqgS",
  "key13": "4UpyhDGKDieXGSinTJ93VA5BgNeDb7PnTZneoz6bJ2fcBm6Uqc5sKEV5H6TTxA2MfzGyVGxy9tigPqQ5GRWQ4sNA",
  "key14": "4C9G82vjex5kXXuGLHSAzRGqiQwhMzfSTQDxH7V5ecLfab5rvi1GRkMMd6fs5k8snG7iZQT95dCMpp6CNP1Gc2rS",
  "key15": "RTGYUcs5dfxEVKc4zb4Vwpj3bsGxApMuyQwqphGkvLF7XDYPEd7FPZ6hrLAkZbsJ2wEkMhj3pZrkPhrbrZSbVGU",
  "key16": "4gFNUKcfzcJEUPqPzXjhqQpo2pdc3omyXbdYcdvwAPVFWsY4UTFqrojynh8ABuCqX3pfNBnWPtGbeBwWGXwmn5hD",
  "key17": "wV1ogNjZULwdYNsWPf3rpo7kFJvGKByYSWuj3su7rkfEA8VpWm2uhUDiTgEbCFRxhSFaFtwQ2sJ3AFWvvZNu6Xg",
  "key18": "2SPZUSddgKafzCJhGCpH4Tti81vWm8novaxc54jduzsRxGXDeja3ay6aSsEkMjtHyFtmHt1UVystjpokPXzrpM9m",
  "key19": "5pRGwzzzCED1PnTauKytpG31w3D1F4ZABT9NSiC5wgZXoxpPtHDyXBYAChbFakRcQzmmFGijGej2t8ZKi2BrSvw4",
  "key20": "5QVcArzrdMTkL4neXkn3MaucWfcFVw74zsT1LRgPxdww37kQ7B4uViyMybUvq5aqTkMmGc15kWe3UPJ2UNsdXzFw",
  "key21": "3nRxkhCGybZquvkRBBdTFyMo2MN4dB9xypaopsKHmHcSxmQYym6jP5J1KnfkmbAPtuZgu3r1SoLNEbYA9wi22rAu",
  "key22": "4HdfTUiT89pNiv1TvJqiKCukbyoQVbWxhQBSr2LU2Ejn1U4jJcQY4pEG2qyP1ob6CnHckzUkkC4G3n9XNMt6rrmW",
  "key23": "65t8tCA9pWewKYbdjZGuvvXhg2J7zWhLwi7cWCy3YH7cZkgdJLhGiHSbF1968tKtbkqrzKymmZb3gEoA2zKFVzPm",
  "key24": "4GdyYbeQYT6iX62TZkpfaA5mMEZMRGpygyPC4JWEfpZJkb9u5M9LFVuY92aqQ6gMfxtWP28uxta1D4aUpMmXsykC",
  "key25": "39U9XY22pwZyHSdFTvLcbBapRBuTHyfz4cpct3LRp7h4vcmMLmyMSBAJ7mcTv9GFyUsWo7Tt19oqVh6qwxNqUmYb",
  "key26": "sqdXTnMptftbiBezXVr8ah1i2iU6zZV9wQRUbUVcJ4UyHBRozBMM8gr68g68SvD6hhh3MhxHZG1GPEFpKbqheSh",
  "key27": "9vRPLxyv9wLaTeWTwWt9Ld4N3poph7MRXBynZ3jKWRaJNPGhpAKSparGqXA2vKgn2mPuMUjSzNwTZpHNXPS16KB",
  "key28": "38obZqCLXjyuqL6S5xxGfLA93hVKxChWqsBwPw91y1a9XtU43WhHdHqiX5LnGSDgsgegUYwKNJx3sKvT7WoWtW9m",
  "key29": "2hdvHD6Wv3f7ejoAj6ijhKh1R7gZz9yDAPRAnQDCR89rtstwqh68szDfvRa7Gq9ZCVKMqWxruhEf3y4eQKVDEkuf",
  "key30": "5XsEynAVokawvtSocVUiHPrsufaxdagyhNmoaFQkm5wTKvLWhth4QstQWZvpVHnVUvfDF4J7qq7DEYGsBYdAuNFR",
  "key31": "2WFaTMvjMNLijEJ4eWeYKMfVpPrtYawCNLK2vMZESLdu4JVzewLFyCxoHz2mrQkpdFu6MVie2JA9TWFyRx9VX8n4",
  "key32": "D8BDf3J1p6zZmKM2QNjw1kVEzmj3BeymDi3oNwwqQgLGWEQ6ghk5d2jTYs8CkovHDveDitNJswQubBGfThfmqC6",
  "key33": "Ve8vpuQ4M18S5TwAniW9SHhUVd8nFTcf5Dggr8FgwbHRuAWXEMUyFQYXjXsRtGeg5a4SR9T6nDDanXwotep1U5w",
  "key34": "26zhagsjgheTKMuFxF2W6jufx4WMtjGDQGY7J2oScvPtyNpmz5rGE1fMZNqniyAuDCgtqzMpFYZBN8N6VcEEugf1",
  "key35": "5FU1YisTuzzPVmEhZTUxh6utwohbc2AUjKo5n7F8MJRTyUv6naWLpNHpmvZBcFUkqAvoqtccyFTSUhkbFFUVyhZR",
  "key36": "areoSEyZB5hXq8Qj8R1LHjcpw9L7zdsad97THG1tmebkxrCHaFN1mHCDGomovP5M6vc1GdPPvchoGou3RuKahjV",
  "key37": "46mWDR6fXQozbEXVUodgUMh4SpDMAhtCDNZZZyg7pRV5yCTzhpv3yQtkbeTbcmKNRqHhLDeSiQ2ckzK11q5EGtv2",
  "key38": "3EeqWooda675iJnJW3Y8CM5SwJyXat2ZVdGbjk3NvLDvqGtH1reTwmomzJCUeQjQ4j1bXZnCEVmsZKvQ1xMFwZVH"
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
