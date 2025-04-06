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
    "3DJTVUd2xPS5D4XCk8uEF9MfKK92URN9HLpvNZaUV9c9GAckeaHT2GMVJ2MkyRP4A7XmqmJoh7jvNRj4HPmzAdX1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n8uaStA1uHyE7pcayB5sMAs7TXtmTdsw56iMtuzxsFLpke21h1N5XxwdNF9751An43HQoTh3ifNM95A3bwaFE5a",
  "key1": "21rEzDqHzi29mW6dAhX8hiiDv5U9mZPoP6HxxahTbr9yCUdW47gyoKHrTjC2NJv1Fgg9yhEh5mbWxBo2mfbpGJph",
  "key2": "2tNPtpJw7ye3fE8Qe8So3nZzcbozCjfohvhiTZYhbjT2YxPBum7yP3JNFUFfRsSFMHb65gTSAbtH8frmVVK2vCM1",
  "key3": "2qTC8vFFSPEKA7C2iWgWVbXkh1FF7FSRoJjszv4iM5CY6JTgFXLK2RaPBLcBxBd2tfv7hS4Z1k7o6MiirXuHjoeW",
  "key4": "3prM4JokY843ibJXMNRtgKhW393du1PJdPNvqN5Ft119VKA54hSmoH6TLtpX8C7Rgan8DyZZyENixHoyCs1wJYgH",
  "key5": "2PsKZ3KmRmDEZBVrPcwy7aw1wFMC3yagmbXECp6PeouDDCvVtpXXUdM6qmBurzwGfULoxaRmf8Gz6mWH9er8tX1y",
  "key6": "4hmZE8FVfY3ctpmamQSsdioVxoZ6HTsPVfPgkD8cdm47cpEhAxyegn7ASokWZ6wPMdvhUirQtgBgaX7TiZEPr9Q9",
  "key7": "2AfWV3DevLiXuK78h1szoWTLMekPwy9LZkceZytAuxoJ8Yt8ssamFQ5uUvpLqXmzB4N6QWNyGnHjA2JziTesvgrU",
  "key8": "4ZZ8uReKapwqrW53BnC2hQJt3Mx8gEb7rgejevWaD8Y8X8uirK6ZHt7ANDp21wkVvJvQz4wkdy3AHu6vjeUxzQk2",
  "key9": "2pYJVn5Lmk6H7Y1CkJHX3R4ZTcWNzaktFyaAfgtJiNszwsEpzMsavpezVeiYttgnerPBGioydLdkS5kpUfpkmfJR",
  "key10": "d1XB5W2Mk5Xc47648CPJ4VA7KNAMx5tBygpAxCDGu1JEWoVdaSDUvcwwzGybjYv3SDKp7dF3nDEtmALhTG8beqh",
  "key11": "5EZaQcVbgszf2uWPS65auVH1kTf7ocfXnLng4KrxckCPnfRmZQSpXKHXpnveyZFpMGhW7qmkD7RmP6HjP5cKHFrQ",
  "key12": "46wozep5vK8MFcBD9v8D88DnH7weMDoQEv7VDWV5samdHVW39EPeHwu19uzqctDNhbQgtUMUY8HaofKiUopNfijj",
  "key13": "2xAyvoegLc5t4M3xHcJAapD6Rw1CwxzTepcCuAwfgXaeK2Uy85a6H2uWaXsScfXwTv8zYPfft6p5McAZTe8PaX2e",
  "key14": "3cD2b157exdhEnefko7YDpUF2UJVLau6dHhEGfYazEduN7xbMc159orE1pS4FceggDLuk7VrfWCHJNGxvK7YiUjP",
  "key15": "4Nbnpb3qPFsF2mhwgTBfP2ChZYFbngNcW9tp8xn46pkhL5nKQj49Jga8Ktka55vy7ZX6BUP8WqKrT9xJshJZmW5Y",
  "key16": "5aNBnNUytXqSDgSn7PeAodAag1yA3pNMXaWDxkKqNedALMJPqTq3FoHULDyERypKpnin1rLwGicmJXZUJ2uiAcjy",
  "key17": "66C1qLUVVHphZcwCAY19GqnFbCV51E4dnGQg44DDqyEDo9EJ7woiAUg8FDD7HcGwQiKhewY3aR8S7igyeY1qEuhV",
  "key18": "4fyoefPQYswrMQCYUSigwTgaNtoAYRZHaqfcYR9JpsJDPE1UiNJmh3LAoJPZ2Jkd14wLKAhRukJznfghPPDp1Pdi",
  "key19": "49VfWD4XKNdgYV1RdFhLQNVqvuqb3QeXKNALkFmB9orMFF64opVyQWhezKdcnrgeEKtHkpqrCSuN7pxiwWrNihFo",
  "key20": "TEQ9BkEu68PAtvkagbHFSvzm2pG2GNvD3QvhhxzUY4soGkgUB8o9Qz2WqC4cXbCio9fnBWcLuYnSxvime1ZhxGb",
  "key21": "5XYf3knCi8Rqg1LS1zrGMKR9dxnXm36tRsFCcwxi9SK6rRwCV7ziVDo7N3H1kY16WZ6pqF6NukMbiGqtKut5rKfn",
  "key22": "37UwmvNp2Yss9zgB4XLs5KaVmUZL81mG6ivoruU6QvC846kezQuztytCaSsyiSoyCWgTfSQDaSmMeq5G5Fr1ntwP",
  "key23": "4RWYaMDfGusaeLYQLMtAJShcjhzXnE732VxRrtFGSy2KLGbzTW7vrDKZR5T9zysJxXxQeV9XN7xHM3N6oiHqXdbP",
  "key24": "5faaYSE6kgdCe92DBjpHtew7p8MghmhzwudS7CLd3ra9QC8f2kZHtbnSGzKxvB4pA8aSaNYsEHSAs2E7KCd4JV2e",
  "key25": "25Ni56cHWM8hk71UCdeo4aza1ayynrtXopb6MgMZfnykhhzcrXcozowqfJdadEruhAJMC8ERjsk3AfLk7N2vF9tV",
  "key26": "4C4UUofRLBjneDnWzFvFqug7GkX8RkZTMkQbo8Sg2GKoc9qfzGxt8gp6gV5wALfLJcBUrahtR55WsLbaniq9MBvi",
  "key27": "4FCR6TeEW7zX2KtxCRYsykU6iNDFBkzQqvSrxB4K1HqVqwPgumq1Jom4shoCz9XqkAC8Y6ijP3JgpzdXM5LsYDtt",
  "key28": "WLAgV2ZRqSfvyNRHnzp81PUnsX2pTSgsXg323NePzAReSe56GqVF5L2CpH9Pqa3asTFZTYc5QiGBDEKmrdGSAUx",
  "key29": "3MaBqXETPtaQQakDCaigvVosNAMBG6vXiV2A3sXfECwSQZCLcTTeC9SefhewhGfRLru8KDYWhVNgEkHeTjhgwrSb",
  "key30": "65BekexUcNpuhHAo3qi7M47Cy3Fi92eDv78wSUGK5CTGVZpNH7CN9o31n4q9UMdW1QvKzy8pSXCqY7GuJ2U3dkwV",
  "key31": "2dnDk2RRru9qFi4BoXrog3K4TmiV3GcbV9LkS9AAUTHY9VvUVKA9Kww8TKnHUjLTdU8Hx2rS4Rj2CmxTTWepU2yj",
  "key32": "5e7pohmyhGvuHPhyZkf5n977KHyyxdgbmJU69A2UDQWkpHa6gHFGx1aLurPd1KuH8dtjtKvKmNdXezmg1hoESMEs",
  "key33": "5W4m4nDnnDGFcD6cKJ99rgkkonnswv7DxSTbJm6RzaRPd2ZWT8AAGEfDeaTo1SW7kFhwGjQPs5xhArDdb3QY3Ro6",
  "key34": "52Vdv9YypeKhRGNajs4ssJyz3uFbvZGmpR9K68ghBYygCAaYCaNw7toerZGRZHRBHxBUjxXaMaFmQHamm9LwMxiG",
  "key35": "2HDp9Vsyhz5FtWfo4EnEADZYR5k5P3qrUzmHtDUMvStY5jnt8rnhdYnXcaeLyqGVVsGSfrrX27oaCyUwBd8xv5CF",
  "key36": "3DPqM5qgnXWTxzAfuEvg2xbydkdduyU7McM5aF2ubLmTLRXk18HKKhG1rFeBaxW4QgWAwBUuq6Lj8tszqt9JR6vx",
  "key37": "h1stBbtyPXHtPG3KvSoEvHkxTV3CFSaFEvZkoujm8uqe2bDdRcRFz7Uajb9pwvU4QqL5LKxErKFpN3X6vXy9Php",
  "key38": "3w8k8jR7HLh5Faw2Pkj2z5px4LyaHAHnDxqmhZcCiv8iyEDNqshmwarRL1rW8gN8n5aRs2kSH1kpRonuP8VhX5Ay",
  "key39": "5ah7XeTrN6i4xXTrciReWBBR7fX6RLGuRVkNubbe65nxYnJoMKS9GkHJMNgbh8LtFatBHXLaBwnFcwZUVfn8rGta",
  "key40": "4D12FkxFavY4FhhifmvSxfb4E46X3txdiUphYPDbaGkK88duZHBMSgDhZ7QALhW6uGxZ1ecPWDM2y5tUBEgtfzMs",
  "key41": "56frRyzrZsCadESZMQ6ytUZXiwcsE4mzjYHZP3mfDKEPcDg5JjQijir3s8jrnxPTbZEYuLqh9yX5HyfS8BkYJYUt",
  "key42": "S5yYwBmeSQVBrrNmmKUtqDLsnrteL92zAnj5hcMCxFJpMHST7mrJYRJL6ddq6xAQBPZu8t7DuhWncQNNNCiwbwu",
  "key43": "3FfLKKXZPnpLicHLjLU5frwsecMoFNbxqAtWWB9gMHi2w4VfPpGNCVXVtJMLZggVJrtMgVyDqM7GprtXhr4c6iCp",
  "key44": "4c7mpEHjb5z7CVBbv8a6gNNtcy1pKGF3k4x6GshmRKZWf2SbSx9kojqxDy1vhJGoXtiR1J8u2xb3szAU2sxSQBoo",
  "key45": "5VknjRfm1Q8nw7cXZb7RucbiSMxQSMD9U34sh1WyvZiXdBq6oeHyFuoBMgSdxaPs3TyWFNQ4417o8ZR8LBKT8kwM",
  "key46": "4KpUeeqwNcVPsJkmgiimoRAmdgLRUMNy9upoL1XaSDECDsD3qFSjuj3ivtSVZweVohdiyxc8NyqzbEK2RzJhX9Hv",
  "key47": "42rmpFQspWqT3FNfGzgjpfiFNtoz1PbU19pvEFgEUciuPUwF2E6c44WzLnesPRJD45nKLqKNsMSE3r7fgfL3S7iZ",
  "key48": "2B1iHxDb9kNiTPB81iQaU2ztafkCQC2oUZkor8j6eKZCGnddtdyaJvqvHyEPx1zpSxKjMCJ6zCi3qx5yiXqC146M"
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
