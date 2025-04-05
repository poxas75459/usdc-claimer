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
    "2FmBMrU23mDZbvCGH6GfiPfZL4jPpKtc6b52Ds2XdwjNcFm3q4Z5uNU7KGdTPrttdhWaPLMZX57Au3HDFaa83SZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kg2H1Lb2jiycPnF4K7GU1QWJP4RnhTu5SxHJKwpwetyxku3t9nqPTMmMxzf3hq1Yh3sLUTqwfjyqGvH7DLksYpQ",
  "key1": "4VGDqnzSE7igkXzfDsfFw3MY8RnQWfHJ8CL7ryJykKSiw5nHHFLhCssNLUVcXhXGastkwpUaTxSyBJrtjRamdq5u",
  "key2": "4T6zn8E2cpLLDwfuTejJtgYs8tbsx5uuJ4HE65t6B74f6kfEs4QDVHK5iihTXRkvtFCmywjY3JizmLhBDRJtUzt9",
  "key3": "2iCQjtrFrRzBbJDLdhXtw3LZ1uYpRyUFCCZsHiR38gEXFNK6sa4JQH5akLp3ULojRZ5Gqr1ZnHomnARFLckaoogH",
  "key4": "K95DV1aiwvMekZUVZUCfQMsXh7GP7hUrHBQpc7FcSbkaj44RuMdJMRnc7XdV1CaCyqtgVvCjReu6HkPiW2L1Vaj",
  "key5": "g1Q5vzUwxtfN6jfp2AApc7nv58wB8dzudYeWiJPrmc3r7tp2tXmHY6r17tWPAJpkKkAMa41RWnqsAtq6tcm5x9t",
  "key6": "4D5X7uXFY24tPQekzkPHNm63DPubd5kJiRCCuWSHjeoHLCUKks8PtKCvBbmW7U1rsAMjJBs88SP9qZS4xuz817hQ",
  "key7": "41AUbWuUpAE2b8K5DSFPmM9P1Y1NnVxhAkVjQa4XRDcjAZDck1k6LAQ6pJuNDZGWhQ1CNuUuShbxf9JX5kVKouY",
  "key8": "2vfEXFyFM9St4vQEn4puAoLurtmc2iEryMfMYznU7VJywHLvfDoBPr4LxrCxDdiuR9K1TAk8EjJxnUfyRFK54Ddo",
  "key9": "64bWfxcyP6Kh5oEqYzkxRFVtWneMEE3zpxJgrZkG8wZTd9gi4NrL52iouZLM91ETGhqZDAmqthxaSuatDeGQdo3J",
  "key10": "5fpN3PXdr9CBbF4qxxHvNQLSJCfMB5TUyMjQqagjKzVJ5MBKA4LsJXBSw2pRJqvDbLDguxQFZxLSoZyXMYdmNtCq",
  "key11": "5Rmj2XdTEQBVFK2wkgJdtd37WCC4VRhUwMWb36xxDukRVnx4VZCpRw5e8MC8V6UAiS43srTUyrRTWs4oTd2htS63",
  "key12": "2Ls7n777EV8rsB9J5V5ztvFM7rX5VfhziuX6MQMkwVbASavsF74VaT261HkDXjjCzKEnUwHUKxh5nyxdAAm8jwhW",
  "key13": "2QW1ADobr3WaXaPxHs4WRDNBk9kcqucxBow7ZqAWVedb7Q1Gr2vaFG25wf2e5RHaasszFZ1W2PSzosUdJBTwx1Kj",
  "key14": "3dd8DHcwjYiGSWbcLJ8v8VERC7nDdhFAVz34ft7wocRTdH8qWhW4iFPE8GWCMcTdRf2xwZ3VfmCCvM1FJMduPJAQ",
  "key15": "26tNimhVtkuuMNvKAavk6m4emmf76xVKSeG55xUbpQgmoABf2yGVPe4dWkJJghDHRqTDBH5nrix12tPQyZCUcsDd",
  "key16": "4P4YYVxY2RWmGpHcT2iQgFqg5GPtF6bjnbZhMLYrVcJ6hQT2ZQUiKnQwhBr2XnyM5ge2a5eD7iJPyZUNNnnoMvHf",
  "key17": "VZn1JgXWx2yaRtZUTD4pys376mkAtmiqdzpgBeJSRW66PK8N48G4KQ3QztutWTFkkrHarNKer74WBwSwhX8Tboq",
  "key18": "3WbGttvHXEofoyEhzcyJsdhG9Qd5c4CoTwpEQ7ssj4SJ92qCTevoY1augyXNGAJhewGVCMqyiPwy1k4xSWKUsUua",
  "key19": "4ebt5NsFXD9RTdeqEd44LSFfW5oqjEzQ5F96BTcskWD8UFswJ7VAJdRsCqTPfPFBQiTKXbkrA7dpDNcVmmGkRe9a",
  "key20": "4AfHERNumKKnEeGV3eN6zFiRZAeUhd6fC2Xa5eZFBKN4XL23HtfXWSh2en7WnuqFqJpHei4JpE9LhFNUZvp9du8J",
  "key21": "2rGZ3WdwHWN8JfviMmpyw6XikrFmKr8ZQPiP3Fk1TDgCQCey9vXSx1ecTDyeivdvWfU2m5C5bLgt61QDP56CDvQz",
  "key22": "5mGC6CEnSRUb4ypAsfi19fhviiuwsXLxGPwP412b994jGbNeUbBM5gEBHnHWqdhqDdmdAeN1xbAJCPNYokPC2u2v",
  "key23": "45zfrYhxxBdfP26WDJVkVGvmGhPhcqrFLu55zVCMLofGkGSkj36C2teqa579ZhGkiFxipSAHS19HRVpiBB5aJ16w",
  "key24": "4mV9BCZxsoGXBU8GfA9s61yrZJwRvHUr3NUGxHFkPyeXyh5ZpGgM1siwchS9NNaGuDbJ59dHW5J1QyaSxBGwbGCH",
  "key25": "AGeqTmhxq2aWaTDvfZfTeCstQ6NXQPyrj1j3NxCyVZpjcfpJq95wm4YNoJs5sAYYxR4tgP6LzdHMv9kNB8NzJJo",
  "key26": "4SCpizeySP9wVKj6YZCKDn839DtAcJa3moU9YWeMGqwQnk437FVyz64uqKQHA6JEGXXWfisC9e4Jff8XKytpUix3",
  "key27": "3u5Csn2qKnVGqd9LKbNo91H319zixmDWbxZum8kQRbHtYECzrhvFUkb4r5C4dDPzFgV6uTJokYMqAC4zb3KAdykL",
  "key28": "GB4xRAUvLFZpozLjnJ6MqH3wGRxyB1DibWgbSKJmjDx92mfrTcK5hMDUhR98coRrxFdu7XVGiD61ZRMTAxTWnjB",
  "key29": "3pgsU5sLeMg1J45KpGGBnzCmyBbstJG4T885bfB9XTHmqNYxEXVVYRmzovnGEcJ3EJAYjuPg5qywPhngT3A7HYK9",
  "key30": "2W6nVqTdunvWXs7cPQ7p3HKqHf7MbkjBAin8o6pS2gjWSUUgFF5ZZikkiseg2B26T4q9syXbizbFk4XrJSXoociF",
  "key31": "4CneqwvUjceZzeCiTNsE3RTQUWvFJUuUNeAbYkC4mBzvbuXubJq33LAT6CcvJ4CYit2Cm4vY5oLiSQeFX71biNLT",
  "key32": "vdG5oFgRqkcWm3RuHNd6ssSxRTyjeYph1iEMu9rTXYrZUx18HCC4ooo7144gawS4itaAgwEQ1ox8P5idD5cCsWg",
  "key33": "3cijfCbxqjCGttH3X3QxgjkW93toPC2CyXeAEWiMGJsBDNi7VBb26cfgsrVECUsFXti9z9j6o8jzTHtc7mPy1pai",
  "key34": "2qUFMsGMFwta5iLKmbGFqAdSBjeEmFFihNgCwd726VrarVm94kx2Jpp55QGnZD5z8rRHxxLmnVWiteebSnkVs1dX",
  "key35": "3oVQUjv4gVA43pJ3srX36M3BFmYeFcossemMHnkibsDQY5uwgEqSkRqmo78sN4AEDP9bSEnePVLGRt5psYSUd2Rb",
  "key36": "4XjwLXYRsXd2qbZ51HqSboNPNJvhhn6D37gHi28R2NkM4uWTayTNJdQqV1iwfDUgq8aFJ5vQnQpb2dMfLNQhJTDv",
  "key37": "2kBicQD3ZzbJopbwndy3r44My8VEhrQhBuaGkbgPiGdqY12uFk9AiabjYTCu3DbRvukRdiVa83XFumoxpKPrRhV9",
  "key38": "4uKhWU7FoffTWLfsZhCVREuCwcmj7XL1h7RgpsZu1vsYSCLQvQAmGaNGuvkb1UNsZPtnAvfmgBmace2ymDecu1By",
  "key39": "7tSXioSMpvhQJPiqHdJcavyuhypqcD96xFL3qRyNANzTfNSKWqyVb73m2h2xARK1pvq5XLYG3TPBj8t3RstCXMo",
  "key40": "3Z7zvQpqN6H15NZuy2JMkp1cpBLHzcJd7h4H2NEVuVWJFgrVfM9omYnJPqxnojgsoehPaVfvb7RRYVP9VQErdefz",
  "key41": "3HkXjDSxuUVpycKSwtQJAzisrw1bCfHPFDXrE5gZNiRA2jk1xRXcqyv2yi5KJyRpisKRnEDdpQNjuiQXHPLv4CHg",
  "key42": "4F57f8sWrrrqq3L1zCJemskwWbb9Cxzqic1HnkmxT4aag1wf96z877U72NMz9WF8jZeBiqtYr2zk6ydomwdiZiNS",
  "key43": "2xpqVXLij9ovv7NM4DRa9Ad6nzq5qD7aNoECbB519Y2wLMvXQ2iRBaPgxCcbvac1rPwzYbkHfEjqekEvLCKm9dSv",
  "key44": "5GFMrfQhRJvJfwJdimGBmx5H3eYRFzbBwpfTgdQJ8aNtqgTrjxbq2hkcDtqVYfbkuihp2u17njoMWSdkC36CB3tP",
  "key45": "2QjuuzasXRxHHifcWemKGf2YPnr4Vy3Syd8xBmZBCVed1hinLxT2iyLeRxJQL9S7UaF5NzwVbxKuLLSjW28ZQQCe",
  "key46": "2QdrocDyZ8AK1jKCehKeESY1dSTiR6QKUiKfLFQt8U6ZDgXiU1hV85nseZtJY3KbaUjGvbhUw6Cq6R998WGiZSCm",
  "key47": "58GZt2aAAArkGm6PzyEVBznPEiR65M9WFmT1c1ikPWcWx6bXfjM1eBesngcXJgpaByXJp1dgFgsVhmV8UCNrRHfG"
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
