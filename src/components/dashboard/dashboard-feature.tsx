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
    "49w2GrcoccpbpN9mfZHu77gXvFCa4fFjbaDp1uEdg3cHhZqc2d5N4dj1hf7AE5ntTe1EEi99MA6aLEnE5g8Qz2Rc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kbS2qoqBKGpvxcLDS3KZ7eEvdhHsBSskQ31dnoT6ioyuxv87J5MydoxoBbtYMadQxgFU1NSTAydXbn8yqepoBev",
  "key1": "2zjn61JEa8WNKtwFVR8KL8e7D2EyXpAGCFqhpF1KBnqftzH53hrnxfVrpZVZpWYeBiGXwwg7U9bPLpBiKQmLZbQd",
  "key2": "QYs5DBPTnsPUg17c5pMxg8VhuKD65Qg4wUv4FdsD5sDd875mVbzmaccrwejRdBfLb5tvWRjAXW1NDRPTbpTR9P3",
  "key3": "5PaRa2fYUeDcurDqsVwBFpnfpCK4HcMoNZGfz1KB6T5vMoTJ2JQWrz1U8pDWL2B4dgSNCeRW6QaqLquSXyurRC6w",
  "key4": "2aa6BJmh4R1RLwBdMx8ouXpss3kn2SXCPcNFrqECaPtytjVsyTUC5Kpd5ebhSRJcYvtxNAGyPHRQD7JCZPe4BoL4",
  "key5": "3gtPkYz593RuagEe3mPqXNu8D1k4zMCiAmAL3JNa3hgAWMgMF9pz3vssUaar8xJKsJtr3x2Txd9WF6VWx76Ybqer",
  "key6": "3yeD6uiA8Bo3YgUezd5spNNk2UAWrhD9pD5cYDU16f9MymP4K8L92eFW6uTuX2oXfHWa3Gr977ZLcBn77macZ2Wa",
  "key7": "7Fe4xaZiJD2fwNm6AiXw7SdsBgMQ8XLFxiHKNEtabmc7tgue6Eq6FkY1d1xgi8b7nUBXmEJBFShtsVzzqujyNTT",
  "key8": "5AhyvhdbbihfvsCaNdggmjnszEVqkdn34BS6UbhCKJyd3NFepf2nevzgHsp32UvdKddPfLZVZLqYzuArrafY6B66",
  "key9": "24yb8PEr6L8tP7eoWpSNMn8kqtWeVpHDoen2R8VmPfko8YWAW3fKahPawZKRvvy5xQSaDGwjxGmoZBeLJDDo7yAx",
  "key10": "3WphjhXB8GYLpTrzFELzKoanZz54dVRJqbhSA9Mw2yMcWeLJjhY2W7ScjYN6SkaRTTkKHxRvC95vfUQuKDrTrb4p",
  "key11": "5n9Fg8ZQontgKEsP2ZVRNavNmNgyxRcVp1JZUUQgL9TX9G6XaN4XDZ16NK25NFMuYwV2CyEBZpyQsZDP2PZnvT5H",
  "key12": "XXWYEYv5udMHoB4KJsjXWGopNFiq8CS1LUXiD8UvoANK7iYuwab7w4tXbjVL3PHupSoNKtfWkRXkM8aFEPjegix",
  "key13": "4gJPgDFES4ovRRun6Ev4MiFqgCFCKX2X7uXECUYHD6XuwFTKDe52bqVaeLDmxfuj5BFyZfdSq4coHFycRi6SsdPu",
  "key14": "34FeUpHUunZcBsARxz7QdUeAwQXnJRiWG1onhDnCnfZsRxs2GAjLUsrf7F3xDGDRnnLYi4yK6dv9wetSL6Lq8DLA",
  "key15": "4eQqqdMRQjWUNy3D9TWFnt2AH3ApRidQDsHS63GTLCaa62wq7uEaT7bsWTeiNUJ3RgxSYncX9WtiAVpFgqsfY95o",
  "key16": "2Bw8gLfRLr1kbsGvDFp65hBu27ohufQujPkeyKTCQswadgjUG6XvrFdkSU7XpsWUcTWZp2QosfWYcRvvmKRgHh9C",
  "key17": "2jtqxg6z4QtPdy68RN9BzGwgHiWt1eehtSe7kXWwJWuUiWtbmZaLmo4p6Sjy4DDrzDCMjGxRFDBFcxudKZX1fmZp",
  "key18": "DuE6hthS8GdZ6c7Q9zFKJ1DviYbCoAFeAkuDEUtGLpNPWDQRsAJWEz76G2VAEEjFacaMQp8Ekew1tF4PtNHdifF",
  "key19": "qdcEqvoTk1gXoWBAiqDLYAxHmmfYTGduBeqEvuxPPH7LZcmLR3mH1orZ4Z8pzNVfbNumwUFaycgcj6xPg8xvFUX",
  "key20": "67VUAvSCZXaDqE7XjCEeYd2VLebRFvQMhAmnWYnQy1MqKNGDgeF637Nf7rDdx1yYPfch2FQnMWySWBrEtDMyu5BN",
  "key21": "5GeXEAPUZN2XLqjR8e58LwB92Tz7crWFhpwq8zVHm1juvhXeRFNW8ks5s9hiryV48F9gh5oL2QmFF7iUkd1dRoSt",
  "key22": "3HAmonMzNzXcVkM2PB9oZxgwyRcoEzL8hFpcroE813JCHeishNZ6ZEPXXpK7dyMhcY74csSQwZyceJAM8SdmhSJe",
  "key23": "88L7rih4TgnjQok86e4gcCazMekGaDvinRgAfAopgeRWkLfUaTTTrAHn1zkNfPwomzm9YnXSiPMhFXxNqkd2Hjd",
  "key24": "2tgakgHa7Rqm98UYuke8T9ZRT5kbKx1kgXuLf7RESs62MDkRUoEnNkoXEnMzdgHNieYCXjX2XPAqkimM4e1i51R8",
  "key25": "4tSuAPMx9BXKiVsjDHTbYE2S1KkwZVdvxHi5vKA6A2sXZgne9p7wrfRzhQr3oc4HzVAs1dDEPjDeBJzXyZbAUGf6",
  "key26": "56vvfaBdKhZVndgnqh6PQD3oeW6iSVhovm9pwgb57H8RXFK8yay1o1nqLqVfdwk4mwMK7x2MopjJTTwvqcRA7g7K",
  "key27": "62EYD5Y4txuB8UJfAwuZkY9aNy8tr1KT2vxXSZpXCeJ39r5h2ckgRoCsh3L4ryWQNwiNx6yZTzdLdq8gzEi36WBj",
  "key28": "4xW8LvCtMBCEWGUTHPQBZmGZvJCm7tizLA6eBprMdUrBUQvbsrNta4nVx1svK7bJ2MyvgrWLPoK1MZPwdg3LEX8o",
  "key29": "4QqA6fsWuNYuk3in1nB6xRgFR7Fh84jetEmM8PSAw7r3zS1uJaZLYVKBEGSWxT2dU67EBVB42auwCGJtsztaFZtG",
  "key30": "3JbPWMvMi1cURexiuskSftkxCpfRy1Zk4DrKUPBinwhD7Cjsw5EQ2HVnAxCyLyjr8wp7WVucQsgtMZjFXS5ynaHz",
  "key31": "hFtASogfMULU3V2jM6RtdxrESdZu1KeE9V4HGTD6fNNu1XEeTNDtx7cc7ztTgePdnHBziuNdxBiNqAneKoKL2wJ",
  "key32": "4BktzUb8riB9V3BMkYR85KHJhMN5QMbmxxAqFCSBhTBGjpLyhceXD9aGcHs5F2GaeWYx2Kb2YVrJq9YXphA2ZSd6",
  "key33": "66XPwvZq7UNeVH3qvvqctUP7ey3eHaLRGsxFbrwvQUwtzU6QdcmgmayzjJCxjqiHWN1bWKrHdxCJ5xZEHwXJoUFh",
  "key34": "5691DbD7svT6U5Jj3RRn3FrDjCCpNUf58qXiotEoLxvnVzpA5XJrFGvkSuJaYyDf8M4v145VgXPB4bT5DT3f3r4t"
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
