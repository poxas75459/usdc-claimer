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
    "4rnsxtjQJqHfi4eKKQQZiQPbpVhe3xEzMDLagTAFVT1fT8RcGgo4m78zneECwpWNKeVTNFp7Ga979SFJ3DiW5kxD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qrqxGNbFu7EBDq3nqWMWp8vvErBj8Q3N5vm3e3takBbZqazzeo3s96TPdt3YPdQzPQuRNViPbXcfSTXKdUMwrYw",
  "key1": "4GCUL39znh7E1HSLDXEZz1ZmvHcmt3JEycGrKBt4SuT5wxMikqztrZ6TASeNFTRobnrA7U6L1pFsemKF8mtin22w",
  "key2": "4TCvLnFbfhnyHZ6G9HFhEG7Ztv337HWBkAMLZkA332iPvLM523wPCzz6GF4Fxk18uMNK8x8mTduVsKr1BnC7ULfe",
  "key3": "2hEVVSUAVJXxYiXokGUSjDZtb9HdpDN64PFuJDucegcyjqNhpBa12E7dwDVyxjh1ESE1Yr6BH57xznvakA8Zwa1J",
  "key4": "28riuqvwrjmULot5BNZoU6xoq5cLbpPa3rdUQ5Ay41Riu2KBaPyPRVAEPwVwxEeZErvL287AsSLhLDZw8ukY91o9",
  "key5": "36dxAjZbpywtWj5uMUz3yu4peV5EpwoG7XjM7nQQXi5u3DSCTjuLy6PaB2dhyMRS9eKe8L4Ym8xLGdYH7AjSpDG7",
  "key6": "2XLcAecC3gh3gBruWBT9bpq8uAw1V4ABsrFcaAyXY7ds5eVeU21Bcnnc6t8fTK3TNuXoft7neEzfNpi8Z2qXBExg",
  "key7": "5ErQqn65JzM15U7qpyuDRqQ7DFFqgJ1WmD1KU6ezp8gHtUe9pakDsiBAZyePJwZH1jheqayucBsVyTNjJDTnz6wc",
  "key8": "4QKeq5xfm429wfPcCrArGVbX1zBZYKCX1X6wsE2WiFFAZUTWPBrxuKAL2AUUHnTdESQgLpu4qXkeKxHwjY6SjAFo",
  "key9": "BCcz4EAud9jogZ33Kt4NDeCY8jAd6JPXRsenVhJMHbfDroFN3GjwBmpd5m4mmKoJoBs6dHVQa66rAh8YVe8r47p",
  "key10": "457zmzX9PCS9jei88mpbs74xYCm7iLvgYukdpY5eGayLFWxcpUH8b6sLHgEYu3nbuc7bh6ZaY3HW3f5BAn61ST1T",
  "key11": "3bau6aRB8xH2PVQfcjbRWhzZdk5Z3b9hWXMH2rw2JmzcqhovVDkD7XF2YAjS1VNcDHPkEiLvxnE4t1nEZZgJG4S",
  "key12": "3Evtfi28eEjpsvqeDkcbSY7ZTLAfGnpJAHbUJ6RLTbjT8VC1BL5NNE9wFLS7YQjHepNFBaX2iSN1343zKs2H9Sng",
  "key13": "3AFF7WyWQcsrGFDDbqpuSRLtbMuxcomVvJgxa8KnnmvwpvmnhjZck2xQCy2iXKXuerdqPzotQ95aqFEPnwj6vNR",
  "key14": "TNxftPy7nbLZL83TuhFidymftj8dK7vomcWWq2G8GKXRdE5QPmV9LozcQ9DaYQxamUGPbGnqQ76Nov4XD6Fi5Nj",
  "key15": "3ekQMfCzuZNMPDFT6wWEuyseqsSBF58x8pjksNZkvBEGJiq4NUHn4tCDDXkjzdfPFf53y3FdLLkC2dfEfGSUVY2Y",
  "key16": "2yHhgyoAm7bqFywFRnJBrnJc7mdZkojsscu6NVbridP1ECXbUmo5YRwHgPJEAAMpeLUToXr7NWueS1s3C1PbPiQb",
  "key17": "5mMAgiFtUMfpbKy1vZZjWnXHyNqCqE9F4Zhjb3VL8EaMsrmnZYewg7kG3aLCFUuhfhkvr3PHZbXLAfidMSyT7Rxh",
  "key18": "5SRMYVH9TSLzgh9cqnGuFWRwMhNKZrNXvsNdbsZEyWDw1GDWh2R7BQMV7ujkFyY8KWo2z4tFpbLByPn65f9b3sJM",
  "key19": "4WHH8KmSTWJ5pna72QpiQAZiV7UXqivQTe7ZvXKXJKfTkHeqBnu68ENnG5GTDGaSkXVDYSXfdZqgkfeC5fcEr5LH",
  "key20": "5DqPVrsBZQBmcfKRpKmmiZNY7rH6Bgr5ScgZSSDRi53NVCwQg6okP6pzDVsFA3unHPisP1Scx8iWKshCMiyVEwvb",
  "key21": "5FFcuUQFwtzK1XRuvpe3uGBPp8T15HjBArf18PGk2fzXJ4UgojSArxrwb8D9R7GL35x5CUJtkREcVg2LAFCh9H6q",
  "key22": "3LYaLbCVecHt8fq9Jh7ywhNrsTGqN8S72WY76tAwVqppbUxLg6XU1KFoTUiwpaKNNpA41FmmibUrmyToCimkWaoB",
  "key23": "3UMRYyL73ZxgHnwNmcaz1Ueogbd4dVFW9Vivba853gkHDWvhzoUaHbDRDhAQU84eodaDt2MsLVrqB26L3mAGdHnk",
  "key24": "RgMwAGkFGbZXVG67bdjRiXbW3tr3zeEMa6c3zj8K6rRU9YMBtcqe3njkjrrMNApWU8gKvTcFA8W6vrGJqmB3qTm",
  "key25": "5HfZtANv2HUFCeUxbUTxeTK11bkv1mJjTkTtju8VfrYHgrwM5kDPRjUGxtAsxU3rWZSMWzQ2hckGM4aJsEs6yApX",
  "key26": "2ocQZG8eY8gLJM7PKYiiDQ2Abewq9z43BKwUNr3m1fidgmq5c4dZbCX6dpmTPoEXjv6hNPdzLKQq76m3eua5Pikb",
  "key27": "4feZVxsrqAApve4zwhhTXwB9oett7rCwQPo9GVrBBe6bHGp1qYczDeZwjiYDMErRRiKTjSnMhPrYQKZWaJFbRmQK",
  "key28": "44XtBcsNULcCqvgF2SxdFitLPEzCS85EGffppMUzH3qUTAs29MG3jB9xdDjtqCzL91h9V87HYMzPdQxbf5EiGoRL",
  "key29": "4zmAfZ5JByRm7Jqob5T6DVyS83Uj5ufRS4wADpKm9Ee4VkQ3mqqdqqqYFBfF67XajApP4Cc5X3iGdwPMTnCmMVSf",
  "key30": "44VuJFCu8URb26S4hx4AfiiUKKCSnHD2gg9WKJdSNeSmyRpvryVKwobbEwhE3DfXDm9wfuj3ZpJZGu2PJXySMXaV",
  "key31": "473dXb2qe3inpqTNBu26kFR1mbkLMm5jWiytqJNhnSte6CHz8mgbKEWs8DRwBLPaNLKZtwzr5KWg1mbQHUQ6Ze5k",
  "key32": "4MX98pGFMYWAFPt6251aRBZ7dN5i9wiE1EbfNxAnSCusocw1gyEYrLwWMkcNJ7pymWcTt5dYrNfxPm6SnqgtJnUn",
  "key33": "3WuebQPmZ5Uapn4HFvZW9gqjRGaz67k1dUzmLFaaAQvHMxdfUxCwJDR3We5CQbeo3A3LYd6WnTkyykUxKG5SBuLJ",
  "key34": "5Uv1WogC2FqFSS8HA3zgA8SHeJXtW8Kx2Jb7dHAoR3pmFwBHrTwnrebdDAMoHq2zPqqYhHznSxMLD3n2Qg8NUdYd",
  "key35": "4SozvuxUXSer9L9gpsyyHDw62Pti9MvFMEhFmaQKJmteY41ZbUfsTDjMLk3f2mRibepWoeCL552ShUYTUhFQU5J2",
  "key36": "TJrGgHHu4gQdQHHYRjuG2wvHz9DjQ7JDkWA7qGroR4WfP7jaNZjGJBVnyqGZzyPaD3SzVf11xb5XYJiES9F97eU",
  "key37": "3JtZytQY1nwFfyAaWFBhAw1zd2DRBc61vYeskfqs8C2LGo1tV71kjCPdqx5rg2yacWgeUX2VzapenuZA88WoExiu",
  "key38": "YeUdjM1XoJCPimV41sNVC5udQKWsZ5eMZEgU19FMHTQFqMsRmVF2F3H8NtPYAp3z7QHUwPQmkzTKyDfg3oqMysL",
  "key39": "54xdJAMUDAFfQUHkfnZpWNem2SKnhT5emsYemgo9pz1spf5yfZoYpHmqeiPEGXVHFHsucvWaMrELRQUQehn6ckFL",
  "key40": "35UtdTmshhq3DX63Rz8GAxAwUS1VScouKF12FimBm2MGpvQXHZea8e4xUw1oycafK8RaJ8j266myTGWo2AGiAShM",
  "key41": "QjcoCEviX1P8iHWivbA7aksXTRGfraW1rs9KJc9g6FFoLBim85ZZYR2LYsYzTJ3VVLJUkGTHuPChKMRUAi9Vf3J",
  "key42": "4VWhF2adH45F5p3oQ2SuxVY9U7Gk12J2vLticdR2z8YjeenFAtTEUo6T13EeWCZn4hExNJLAAHYjSP8EWvvrVuvK",
  "key43": "2e5zCTaxjzniq4DQpWwNJcq9oJrws48sQr2dw4pMdQzoiAZbn2NaxSBaENxZ5AtHtbZvAu9Aet7y5ZxhGwxyvHFs",
  "key44": "5ZKcctANuAtdV1m3cqv1nRurZ1LGkPXHGaywHpbERULcm2XeAyKnSKRWkK5vtHM3DLffPrWW7JHFDxDssykmFYRy",
  "key45": "26B1YpAq9fRPzxRtVXC2Xa66yUDtWdsQoNciJ2mqueEAqPLiedHzas4CAmhvDy6z3C8LbK8YABgFNqobDKUkGv8r"
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
