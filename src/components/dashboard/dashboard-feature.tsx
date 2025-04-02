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
    "21v6epoAWRE6RKTdxjop3FJbYuJxJyKaTHG8jC2jtxyAtqpaowvv3fYtkvYGm564aChB6JWDoFajCaBTsrS2K1jk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "537nLousPQKpRZAng6Fyn7sTQD7uUCbB8kaewibZ67tKHvX3eakewqJtgBsnHnutdXFhraQmiRKByWMQuE7tGwi2",
  "key1": "333JsLdhoshz7cTqNyWkW5BD4hpMEY1GBEhGd4CNeJwpBBJYC5JNyMW9QWmhZiL9pyPUsPPt1EcuHrcdRrZ113XH",
  "key2": "4DPdr4ZUW5QekNRL4egSQvkgA8TDPg4A9p2M8iDdhBFVHUVfStWD942ozHFudwjFFguZu7uSSdYUjWgwisH25M8Z",
  "key3": "59CkFLG76Jhg9fobbrssh3ZJm4Q5AD9gFfSibGq4ff1gY2rqXowvmYACw117a8iN2HhLTAbUR9eEUSFhPtrqK1v7",
  "key4": "4PomTkDABqv5kkPVbPuWxJVztXP16NyqnHV3CSGQnicBQYkmgwPCVuNtaFWDKHA8PSa5Um4YPNb1BfjYANc999cL",
  "key5": "3GxUygzvVgnSXiBvPSBSUbRUxAbDdy8WzEaurXiGzkSatb8WzMPHXaoQy36UEUy6YXWonRt8aHjGzAS9bqB3ZNYZ",
  "key6": "34W35HVY3eUK3fqwz2UUyAiHQQnweisXPRgoGQ7aKfXzQcEHz4LrDLd8EjZzJpYv7Riraa5XqC1VAURV1dJVtDxb",
  "key7": "5YCKckF2V9kJzM6CP8Y5uf2ueg3XYRLUHCAzD385iJrPWDoPXXyc1YxQS4HLzgLmAWkgssTKmJLkXZvGaFWuMY5e",
  "key8": "5tfYUGYGtctQ47pfMG87Lzzix8pnRReQkn3hFGpLzdHf1Eh1mH9tmRu4ALs6ikvm9Fd6FGDBoWp4LgRf2M3pGQJS",
  "key9": "xcxJU9xqk6FTHGuVe6jFAVzEFKsmBq1YTr6F1qpsU4Pi7RWRgRKnCXh8gHQKJPhAZ7Wm8HoPxYEVst6meyHergj",
  "key10": "y5Xv1zK3dnsoS91JRZrFGx4YjYNmB3bypqkQHCiz1s1XXrFmk7McwrwpEb9RaTnfrxAZsUMDbFT3U5WW3jPVb1C",
  "key11": "55NWVnEh4ubv92qFKKoamjdTT58USJhQ94Dq82NnTnMuuHnftCNHcdPu9Mex1dLnKKwLeLJ4VTGBB5P1Qq3pmSp9",
  "key12": "4855Ssj9YJcvKSrW7ADJmjvi6FxWUGaVzNbWmEYZuyrU6s9vAiBB35N2tfVLhMD6ffq9zSJgYzjtcj3kgC4RckFF",
  "key13": "2XcZxePkjeqR2ffU8hmZLHqP1b4yTRug6thdqkugs2XyrNChkHuE6hWRZSfWc7wrWDx1vA7pwqzedwmF88pXbcBn",
  "key14": "4mZUMWNWya6AYnBif2wZFC8pEcuoqUD1RNDZMM5D46u1nriqBQi86mm29obCjyWf2frbqZAd8DqWebbq89PNFjGj",
  "key15": "2iRp6DQHf84J6BDYLisqXqkP8ByZ2CdtFwKesdDDsDCn3MEzVKFCqmqo3D2h8ZpJA5XxwFzE12wnUzwUp6Zqm3w",
  "key16": "4trroX38WnvbzdqP9WEn4wAxBE5aMk6ufekc1BCkPTFM4mqRGtapj5urJRLbdgFL6ZAuhtVBj2tubZy8SjPJeCsH",
  "key17": "2nDViCydoo9mTn6aL4LnqUHEg2eYeehA7UPaV2JUvgbFCZTvKsw7Bvv9GgSiCQJU2E1Fx38hBZYqT8b63YrEw9Vq",
  "key18": "3s67483JxurCYXtBheV4Bie4VovDi1ZgUxT9qjqueENpEozEUBBxoNGRpbnjHyoBNfPPr3cDNjKSwdcBSvM8EeCS",
  "key19": "5pzryPJExWd6HXhkPgdUP8KGyDUB9cRRpfoK5UHqah4PoBo3ZFzPnC425T19t17TiDjGmhN1uN2MwUTa8NHtQsxk",
  "key20": "2U1AUGNKvyQH3E7WusqdBLfQ2tfvPV2BGsPFtWGM1rkp82bsLqkmB5JphwwdoUhXp85CjXxgG4TMq2nUrHEYQKwY",
  "key21": "3RXpnSkxYmpZWPJJurA3ZGNE3mMXcoDAomVHTmTTpxgdsE9AhW7rRPqa8NExe2zdjcY9SXX14i146GF3U7FZFNrt",
  "key22": "4FaduzQvkoC4wP8RBVRWL4zPZoQJsWwEwR6ZasuDTRvG4CWLr261gzpBPxoMnXZdg1edf4yw4SEQmufcBCfTn8ew",
  "key23": "3xoeno6zFjsDPaTUYGNZfdAWua1KkCa5J8Me1ypjixRmGxZ9QDzG6A4sD7D7iumkzHiKFfh6BWfw34SgUbwnQKBx",
  "key24": "3DX9m5T5fYgwo9kJXpkzAfcXhHwf6PuFd69Q9Mva4tjpa61Yz52t5eZuz5HzVZGe6exsVehtQGWZD2Vn92siAxDd",
  "key25": "2rT4mXkzMmXFwLJDs55hoR4Lo4tVLym1dmgGhwSGn5uLwcYzZpBiSSABYH9paxL5yYao3fKoaZ2gEkEYV63aMVuS",
  "key26": "535DdPLwotJorypZ6nNi77EYWYwNjhyPRxUDMM1wPdPq4JZrEBegniMyMmxGwytKaacoGbyWZ8d14BTb8VHrCDVX",
  "key27": "4C4MksVthhc9sKtAVVHgjdWXkt96hMByD29wUo9uD1VUbmnYrSX2DLZJUnyXXzX5KsPZc7zLRzT2Hg73r3vJsTVj",
  "key28": "33Hes68vcw8CqfKZKRBa1rXxStCZXtT2QFRDSzaKkSoe95EKHkCYvpb4y4qp4gUgNbRfn49FXtQwZSFjhtu8QW6D",
  "key29": "2mRUeQBQpUMXkJaZfQubUqhYhoaBVpT79BEzxPkMznQZeZ6wp3rVva5a23Btqs3T4RzVitGHBSfyyWNRBc9AP46X",
  "key30": "3bxmAAoZMHXRwrW6vB1rv2Df52FJCRENjPdW4wsChEFFnw5hBWnX1z7VDUAzF26wStKxTuShJJm1Kqp5gBke1E63",
  "key31": "aqHUcht95KNCAB9G1rGjg1887cNG976wVQeMwKHCdViQYAzZqz5v4p8iUuwjyovhEX4UfNCCBP4jZLghV8PKC5w",
  "key32": "frUqFpMRX15ugbtMtHsVmsNpzmQw3FPG9hZZfLozzuPWSDZLcPnJtBbmguQw9s7T5AUdQwN3B5woKvQ4hLgKcxa",
  "key33": "35Z4a4sgHWj5PGpBbAgPAcQZtjBEeyGSbmYum63tZtdz6WYZGo4hyCtTYdJxQb63NLqpHMPbSmaZvYAMpwTYdzv8",
  "key34": "25SRBM5sFxRmXiNEzMbCYX2TMwJGn3DrHWmh2W7JvcvfqRKQpnhuccHUcSqDeCypAJxaxAvuzEYetTguCd6vTeZL",
  "key35": "4CWFmXwu6io6EGDSXmxNBm3X6EisT8vmvJKZ5SRyJJ415aUcXHyHFSCMoUytyBKceEYdCGsGPWfFzjiqkk2DYmFW",
  "key36": "34GJP8RuCHs2Dg115LgMeMAurrkKLauVtF315NFmA71CZif4eiMx8iaV5BKGJ9Z8ZQyqgoFCf5gQFEoWgou2E1L",
  "key37": "3ukFhUQz8Dv83MxHnsrTbXfDqzguauM9t7sPhGNPuoZciCkuUYgFt5yAoHMUpyquroozKSGRswQFRdh3WcT34Vcj",
  "key38": "3vz3pdkfVErXwaCxRZPzxcmaMVptMbqCJkTVQBaED7R4RA9NrTkwvoZ1SikzGnB6fB2Z3MCTGU8bTVYERfWocgNs",
  "key39": "3D7HJvbDD3Y2sQfLYuy9oXwHWjkr6ZLEMECUtFm9bez93v3LC124EpPkZM8CGTYaoWynAnM5dNs238Hg1ZBdVFFr",
  "key40": "HeG56r2eDTy9Vvvz6tWWVyfSpdwFky3vYaiwt51FyBAtVickQVuJ8Jzkn12Lq8FkJY6JCsP5MkPuzdAtDKEzLDV",
  "key41": "4bQURwhuCYFpMcFbP9K1TFKS2fbfxPKVKG6GLQWgeBi6fMb14KLFu66pMt8JmosGJA64tqxBwvtvSsXrS4BRZSaZ",
  "key42": "9WYLw8zFVat9P5fpJMJssN45WN1vVnuGr59nmDzKMGtFkPa2ks5H7Kko34HuziV5AHCUeCNPhbhCMKLL5rb2TTj",
  "key43": "67gB4TWYyEfkwaKXr1gvgRWgFWHXnqnQWn6dF7LJxiZycP43Q8McTbqQtuaAzu9tccyZNeweN5PYgVKGBZYWnidp",
  "key44": "9Upwi7QGz24quDkGqaJvWARWPG3WU2qbvqVRSqPqarzs6FpVwt1mWD7knzaWopsbUebA1cGGhrrhyXShPm76iSc"
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
