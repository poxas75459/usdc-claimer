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
    "2SxYi4y4DzvHGxN7rx8bxGfHthMtfkHSwSmbiZgpja33vuTSeGPEwa4mCyfcvWNnHPyrdKtk8oYGcJ5pSqbMnCvc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qFEcnVeyj8sxYYdHFHUrVh4E6PDWY2qiumuUo73xYZ5VWVoGMjts8dRJ3FivrLfcBffcaLSQvy7AcaZj8pYDoQR",
  "key1": "4dfbkxgwm4ZCxFyeVpTTftNaD6vXAXZCL1TLbpFqjeD9mjnbyhjx1jjR4d3YqZxaSndaxGbSAeqvJeupoQD12tXj",
  "key2": "3ne17TUaq2fPonLj18baDaFTSDmR9fV9ZyNeKSNcNTSEBYxTs1BSrT5byrRJHb2TvUTqMGsZ1nmU6MAdEpHo161j",
  "key3": "3VLo1rKAeRX5Zuw1xXVRVaEvkEy1P5ywY5yvCkmtGfHKrsGhom1AawMfCKk5whyYfc54n9aM19zsJbBU8nEvoAUF",
  "key4": "5coTGM73fksc1WSxPQbxqzvdg9h8WjAtiPuyzgZ1ywBd9kLWN55SEavJwgfFjAVbmdTMdzPVLegFB1i1CKzXTkZg",
  "key5": "sijwuAsbqz3Peq7Jih27qAhd8aH1JfDk4B48d5kUAsFCKd7fvBLB38rzkuxLo21FLWPdTcYJRuft94nBNiNTuhe",
  "key6": "8LxE9b9cNodAKCfUHaoqR8xZcrb4myA5TTXTrzSyg2mtCRCfF7FYMT2ZxsUXMEgsb5hj3A1piskYyyYYxu8ctHi",
  "key7": "5v9sCma4ztXHhfiUwcK6wb7o8ZJ8gaSr7X25p1ocg8PbEaTDpfBUWwLbMyG8UF1t44Knu7MiH61jAttkhzZefLuE",
  "key8": "3Q772xhSai9QdqLZQ7FrVWj6C38uqK3KNEHK7HZp9eyagAETzUy7rdNPJokRG7tFBqp1SrWfwntJPkmuR94DxcZk",
  "key9": "41N2R8WJP3TjQ3oCrCcNzA87WZY75KLWQcwmEKsEX1p357o3bnYTGDLSMe42JaLcVe17RFTyunvid9BGYv6ff5YP",
  "key10": "2u3pPodL6RgyhvGUPLaatzaSpggy3xcfRGHfzAPxCewJjwEUx7NYDmHaQKLyBvgtouoNCHvJgK8SmcyVkhy1QfUj",
  "key11": "8aVH8Sy9xBL5sHAfGFfoykjy2AAimfbxSPnyfJJZoMo8U92hounj7FPxVtqr94nPzrkvQBrB79age7hpNhJDL6j",
  "key12": "2XTXEQ7MVMMBD4QTPnMccAL51BsGP5N6VaWLvQPjTMDHzCVYQ1FcxiK4yVtwJqNMzUGyoDMBpy8wQfFuW8rNueyu",
  "key13": "YdJp6LTjmJYUUAHhQymXnducvntjMnLq5yPad4fDmbDyEyBq2CxkSVQCAHxsnWqBmZ9TJRY25Z8uEsNMFC4YRob",
  "key14": "5KhA7ksuidFHEsnAA4AksjJMRZ5sLN6XJZkqYhHr3fr6iuMz2xtyWxZWi6ejMRT6R6ragYqVT9zDys8YH9kJwXbM",
  "key15": "3j1rZbGeGzPyUSzyAFN7gCxoYnPnQrVwp8hCsm2S93cTZc4KCUDpVySbE3nhp5U2e51aphr4tXhAkVfRHV62QvFi",
  "key16": "64gDkXcYrJPcLHZtAgLNkmSsRvJfzrSR1Px8gGzyXL21QkM4jdZ7SQHTUukbrWykGR8UiZRyx82U9BKFSafRG4NE",
  "key17": "3aAFYTh5jcv7p4jmX7dUYjuNYike8AVRa5e3y2oCmeAm6tXvMB92ttf5WYc8Kf7pNzeskR6c3NrgthGSiH5cBpYW",
  "key18": "2ZjW1UPBnFPijvahL7yp98dqHC5LNKmx4eehkcv2qadTLCiNaLicKMGncdMi75qGPHGmnLWfBP8DMPMJB9dhhZsm",
  "key19": "98LoKwyM6ZxCwEwUEECgfn5R2nPneniZVAGt5B6Z46C1m77ibRJkNqJfWf2QRJHzqRGZ9UH5Cq8fqjtH5NcRhQM",
  "key20": "4f1FGnrj88xZTkCdtVkbd5MPWeUWX5ycbMFccjbZhssfBa3U3C9trijVDZXnmgBT1Xx8PhM5n9qF6c3YJU3zY4nr",
  "key21": "3rfFiavUJHW9Fp69R54hxv2n476PisWKZ67QRiHyR3fVNcofPu815U2zn9SdhA2RHHWoztjgSvqFMYSGzh1AHVMX",
  "key22": "555wEN8dbGk6iK2htXfPaao84ftSeMifTigDKZky38bUb4bF4GgCt8T5Sj2sswqz2EQn1EWiuK88HjwDwS59PHTJ",
  "key23": "2L1BGs6EfEsNMGGy38mF86ZNPrdW25ErdVUAdSfM63MuEGpz8SW7haUkZWidSHGWChD63JMsujygv5TsuAmX1zyx",
  "key24": "3GX1APuvUtC7XBDWBTsiAH5MJ8TDJfwHmuNf35Gbiu5bvGCLKVzgz8ZV3pt2bDdNSLLJj1jb7szRcTRE99XnR3eC",
  "key25": "3oZzk8VienWcSu6q15vncm9MwHcDKpcmRj8TzHmFGwiz32bAe6wtksDUyUHYJDuK6aru1ofZzhggU2wzrNfFsq54",
  "key26": "3iwTGcFsQWz9Qo5ChjgvEJKErgULhGK43bDTTvUhzSHTbc7633UUmzPHRbpTtvYrW1X8Wv2V7sRnAEoC9hrHJ2PF",
  "key27": "4j6Y6temirPej1GSCyNG1g77G4HgTUqNiSn9NYaXxEgUJCTvt67ArR7CBZGBZPDFigvpfmLRz61QwsxHsxXJHNC5",
  "key28": "3HszF2q5tNKfxoCh61YJ4rwexNeZ5q55pYwM4LuGia2HzGAfzUShmEXqkT4Ua8TeNsWWVR5Hh2dguKBfrRwwJ47c"
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
