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
    "4eKh81R8NGDQ7QdQSvmiFP8GJyigLA9HgQfTofgb7u6KzUepnR8gemnJD6uPjkdaxsDsQSLSWAiZuGneowfHkmF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CnZYDtCk9ihST1QxwSLk523ZAJ5ztANMuaVixLVPY3S6tY7fLUZL6TNAxHktqu1ffLtdpm6RSZRUDM3Ywubwpk3",
  "key1": "5dYBCpGfwA2pARBU6YV2agmBrMcBPyadPDsA8yJwuVNsN2i5QJkraXGC2z5SMWNvb3HfaZzmJD2bkDtJvJ73gpyx",
  "key2": "2Q1Lsmwa9FwRHtrwiiGTGeWmSaSdZt5rUL6e4CCScKAnodaEAuwfdi7FxExSH12g86GYP1TyUiynj1SucAQxAVH1",
  "key3": "F5pJcbkDtFTm9PsYauSA672n58u5mFe8FtdMV4ZECH2Tk1SPhNo2K2L5Z85AqLnSGSHQczgFnLZsnxbiQH3T1kj",
  "key4": "4S7nynWmJdQpv2A5d7EALGzh5zESyxR7VqJW9sceqrYjws7V9nVwG5Zdf7uhih3c49xz2isP66pkkVKF5mmsZ8bU",
  "key5": "2U4cP6doQpAoECL6QppSm9comCESnwfsi5oJwVvTar2nXhJsqZmFEQZKZHfMZM2W5MsEeEsBC1CWgZho8SCMpwSj",
  "key6": "afkqbqa6q5rwHjcMU3qqiHr5R7cihb62yJyfQe9kHKSLAKhuChtP5c4AnTdhV1ykdwrvgg9VrGa6yVyK6LtBAaW",
  "key7": "3BQMfAfLsh3cJYEVpnqWDAZd5vaBHHtvAafak7f7wydZongY8f99xVVYETVxnxCwSZ3FpAXKUUsoXPQpqUeGiHTj",
  "key8": "2Sk96uzw1x3KECe7g4wnKowxF5L6HV2t5XdexUY5NRLq5RvppXGXBamsLmoHk41bXTinzLKvZ1oJLSwJXxwDWbGo",
  "key9": "5Cc7CNrBuudrbyzXB95j4hRcGXryaNGpVMRSHemCJcCTnFPPuFdAQnxYf2EeiEYdzgHL4AamqWPmWkT1rCujsFm7",
  "key10": "5WrQeAxC2dj6Eb2D5RMRspwKKZCBPGLd9rdZvsmRgapJYQfXrEWUPeahhVsiTrCSBRDVzA91J63NuxCZ2tHTEp8f",
  "key11": "34XCYoamgPSHXYZcYFrmmzjRsC9axWYpNYgjQ4osGnjzWqqDuauVwkwmhW6g9tjF1Ui3WwuW1iGmyFWbRNQTpxKL",
  "key12": "4v41nBdwZ177ESSwGWTAs6ViaaXhJopvEFj28TL3dXRDmujXYp28rLGkemqe71XVvnuDuhrcEeYfSvm3fijTSPx4",
  "key13": "4bn7X3vTcXMFDQg5gbwERVjahWgvazBoCJnz8edA7mwdDGepmSz5egEKnygndCFTDW6qK9ePGqR18it32Mga9kgY",
  "key14": "25QT6gVCj7R9nUUsyVaTf7CZ4iVfbHgSfDKAszuUwe9jNCstYgMSk2LbiJrLMDnzfdkuqyx5jrAFzwm3t2LpBze5",
  "key15": "2x58YpKc3K1vK4HGN7N68orR71pw26s9gD377nh4R4kna5F5S2beDzmKiknUJhb9xQxPKG3tpJLUwDVmx7o77eyd",
  "key16": "4q1kY5rmBGZaUvQRVxktxwGEU4Y9v5wL53LyoPALYdLRQn9J3ykbzwtKUQSvgUXnPsMQXJYxiEsg23uoJ7imA7ro",
  "key17": "LoYUTnRAxeEHM3DMqWbHU4JQBffscJg8hpe6x5kgHuifWoctcNcwXkm7nziBzVyEiSwKa3GhAmNqLnXaT65jKUr",
  "key18": "KYBig2vv83i3zGnvWJuRNQYSQCTnumS6YqaEtjQ5n9G4Vpa6N22QkRmVF2hvKB3epwuEffqrfyCFuxBQzZzaRhk",
  "key19": "3Uj3XHqv1vkt81MPytLvH3aFZUvddMutKQEgaKQ9m68t7oQWpaSp67daS9vRoJyFUgfAt7gmCkdSgTK71qfC1QfM",
  "key20": "2T2MKth56iuowhQ65kCA6G93rVYGrfBBHjadp1ft56dtWm6gKAFHpsrwQLwWrZgtMiiCTkiGBJVqdnv2PyWfBQwb",
  "key21": "FKukfn2KFsZJjHHoy3AyseBbkL9oLud2mhRU8E12LkGcvg4YR73fmf9X1WWwkRgYHWvErHQ4RcXYB4fBZxggbJz",
  "key22": "4b62QxMtfWyQsvNziEG9TQd2t94YH2xbQActsCryEMu99X5B1mNvfQnvNWhqwFnBnFHX6wNKWJ6LY4SAXwJbeb7c",
  "key23": "5xzy33ZH3QXkyUFBx4vcxmjB1PTCBLvyqePLhfeYTSNAidpUNscS9e4EMSrtxZJ26z27mcTDKFQJLFKTZc5mZsqi",
  "key24": "5cEA6VA3xpx2hxbk3p9W9CpF1DxPsQRzTYrQAn2pxNfK8xJbLse2N17kzUJ5ikhmk9K1xrDPLx54AG1odD2aFchD",
  "key25": "bVkay89rDdjfjw6iCRvpxUAFteX7CdmuNj3ZWTcWDkrJDEkLUVEBQEgeQwrThcuh9TtAHwM8UPreqUj9ME42iTk",
  "key26": "3KETscy1p35rApN6srsTR6uLuUK5CZQ7cYdujGT5k7Aw1FbQJXqXqCfepcKASF2QnxLqb9taKF64ubFQVvnVet9",
  "key27": "46DgyF2z9q5BjPsdDtHidhmHBfD4C4QBw3e7uVra1gxiiURV86f564WbvZ65t5MiT83R1t43tQ2AVuUxv9QPURxd",
  "key28": "3MUcNLptSBgXNYzbxkenzLPjdUSfsUHVSGmD65v1moWz46VktCd7LMRky2jk9UckLQwBu1pywFUx11aSE2zyRHLU",
  "key29": "5fdibr49wo9wWjwmUwkKaRSpkAyeC5be4wrHFFu7PVm8JaR1cABA4srGNqND3e1mpxkS1gByu4zfLUopkS9rMZ7b",
  "key30": "24p6a49dNSSMiy6iLx7HeWnQbJtjbHzDqiribGoKoxXqbNYioq9pQQn4jbWkDDtekpy1KakrxErwsdJr5rooheGr",
  "key31": "Ki8b2hthjZgiPu6V5MKAgoZ3jEAfhPK5DSCg9pHyYN8jyqs84ZhmGTrWGoKX6nGwhZHX2o2TfsRzZvKa5Xp3P8F",
  "key32": "25HL7eEqHH3MgdxeMPRLc74tuv9AvZ2fLMEjnuzwRK8n2QN6EZYB59avqPjVb8mGCZ86uPMr3wsFHAsUX5FwgqgB",
  "key33": "JVFXyKXke5QzQGPpqajV34LVZg9zKL1QWDY239wPtcaSFvHksdh5L9ZXTiye7j1Mq4wDyGqpP59Uhc6zQt2Ammu",
  "key34": "5y5gBscCgYShK3LB8wavVQPVYqodBzpjfAVgyZTnPyYaTCRoe1bWGpQbZao6xc95fvSwBjceyhkeJTQFFnPJPygy",
  "key35": "3EUYD9EMva3TrWakBqudnt46uNdRj82U6bmNmYo3NgRYd2Bz6ZE4ZWk7gw7oiiaQHqSsfC8RhdKsgS819SdVas2z"
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
