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
    "62vAfjm3XDuNTbsWg7NfqruejKzbRzu1ARDPjbnSLUyjqUxzKehxuvv47tY4zL1ADx1xEpu82n1tE8yQMFmsgFNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23gnqNcbcCLYjpoDSYHyYwwimL89Nj2tSWrvms5G1i9XugWumWbiB87w1mxtLPyAf3F1RK1LYfwUeJx67CtRNRRA",
  "key1": "48sg6xB9UaGrjpBjFnfs4diJboUPEud4R1Aru5gm6Sdaa9ReZ4HB7qmCTXvaqHczWM12JPWtMwF2Gh5yGxgo9J2v",
  "key2": "2wsCxVodQAzopKmc5T4f5WohbmFLkxc8zdjtaAKqQfBNeWkzSJL8TGDHtBXAgDh3K5RBtbUrrcfBS4AuxQRFccFH",
  "key3": "oFoga8nNyhmk85EBTCj3uGWC9W1eThLM5RvmDy98TL52mGxPNkFEi4dWyrSsQxA5Gt4UkVS4oRYhBWeyNvPxJtN",
  "key4": "bVkbEng6CfBroz23ga6wQXcZhcMy6fbwmyLZ6EpnNsPuVm9yF4BNGjPgcKKanAgrcwtpKFTi9rKUEvX1EANiwwM",
  "key5": "3B7TR4nhNNFMs9fCCJ7u5WVAgWjLki7uYx4sDFZYw8GsEbbNR819qtGFaCrVwQAouZeguVfXsayX1t9y2PXrNAsH",
  "key6": "1ENUyenZkyA132xejWLeJWvqJEQZfs6jHqkMtZdv8yzorDD9sCGcmxqbF16q91Fskmcn2hKAKnGHugrme1jmnqX",
  "key7": "4u3bUrAXLVfo4buPAH3bi5wek3qMLphoVKCez4EUV2QLvty3WTTnT8ktPnReZniR6NvXNjwb8SG7i2PzXNX2BoYK",
  "key8": "3KiFDDxNq8PUK2UdmANaH4eBpxbq7oLfH4Y8b6AjwDGH8RAZocYMCqN1GPBBpKaDw5bYGZe3NR322AWcL8GRRuhZ",
  "key9": "62t5ESyi686EEwQwADCt8r67ac42ESctfrZxdnEycsT1jbf68ktE4F7CCQZF533MrAyWT49awZozNe7iuJb7uvy1",
  "key10": "43GVKVd46oAHEn4KzMvi6z2z9mwVLbfvU7Po7QkPftZKTPhvAGKBUHbsPd3AfXVzDv9QqnjmsjSYRcAX4wH5c7V3",
  "key11": "3RTi2W15WLQRKYNHBMtj6ZLjRLAhqSgenGv4TJ1UwNQbaTYnjzbFDUxi4KE5DYtGK1C1qGvsFZz42qvfYd2X24vr",
  "key12": "5XnkRBt6AgMH85rRNax5egMjGbiBQj1NjmymW8bVKMafN3tC5tHevwfY5czshPxMfqngfS7LiqW9vDVXae2NAdgC",
  "key13": "3F9R4o4sKo7PwjzuvkoqNVEuqF6efbGSb4871AhUsCtLfhBKaWmXaBefGD9gz8SaGQyPn7LpeqJ6WM5Rdv44qA4k",
  "key14": "PRN5ZAJUxB9xpvACf5QbHtvMALyzJfHFDoTciDymmgQUybdrgw4De9Xip8R7jr2BGWu9GDrTPAeSJHRfzLEJDit",
  "key15": "62xuw21wi5zRSLoDQtHhSPM3HFWwbNRCG7wQS7rikpBad88c576Cq3Lt9CNTeZwxaNzQJB3HDzC1zu71YEbhT1US",
  "key16": "4WuVhDcdGJ3Ewx7huZskcPD2wHcNMKLymACJV3WpPHKSYPLMzFvBinjpQZS3TUj78vs41Dtn1FDAjrFkFZCXTwkf",
  "key17": "5tpp24FwKDt5q8YK4oJ5mFGJqXxmTYtNho4oRVgcpxtbwrrAKhqLWMqJtxAjWtUFRAGTtzG4Gz9Qq4i2kUHT5xEN",
  "key18": "p5BBzTu6biXuHGiQVGupAkXhhJ8G3aiGRuES1fBBZdtakMPBzyXuRdtPpEt9Cnc6RqCXsoUnfYHZxWp1DX8wJBD",
  "key19": "2TTK3CpcVGi4y7k6cfPnyZpURnKz4Eb4qPg1PegTSfeyfa3JMjNLk1gzvRU1x9k7LWeyh8evKys5YqgPdBX215pb",
  "key20": "3kF63RsGVcbAVNSicq3BArQ91DvwRMMiPqoqyJs4Sz7p7fVAfCbgDAMJVjQdEku5xcDcTm4nSspVujMUMxwFJ1j6",
  "key21": "3uwNgpwWt1RFeuWiLphpzaNxQaY8qiLk4db7AF48BFsEEby1fsW9QP3MasUFmhFFAUDGLTxKW3fujfARsA1v8tQd",
  "key22": "hpyGMWfA38qcc3oRJTPiuyEs5Pjmu5x99SnUVS9DHCL4QsN5TjMbrHEpZec8qfpWDL5dWKoEDeh8UCnTMW9cZEX",
  "key23": "9xcGhuoiAjdQLw9q8aYbVEiuu1cgEX9pnjuPpZf7TxJyqxuXeojBgqgUEGdkvsUBpws2GHoCjfQ9aEDRChZi1UA",
  "key24": "vqEMafarMNi7EYdBP6YbKRASUe7Gu2pXPCL5ZvBCs1332TeT78GUrjZZDpX4JnJ4KPxXd3GopgXmdJ6nouaW37U",
  "key25": "4NKFSNKkZp6miA5ZoM8s5mrx49iiDX3RMnvdog2v4AkdrnrFa6Khy6RGxfLLBmx2kee7RFNNVPYwGQuGfmqZrVNh",
  "key26": "3VdLgmvZruYnrWJ9QMeqDNr2H2dPK243W45JLZY4u1HXjD5TTgGCsJDwvp3wzpGwUztEjidV3SmSoNBEzmGtyVrD",
  "key27": "42LFx7Hj3Cz2Vr9zYvsABPQGAKh7tszqd4vHKzfUjQPLotpNj7LQJTRkAaYuFYQ7iKmYJk3PVj87mFNmWmPhBUwi",
  "key28": "54uPWb3SXAPKQqdLKxftdrtqqCisX6qmMtk3JxAnfGzM3SNV1n1Tjs8wqmnRRcuyKk6hwvqymg2Ns6UbSbfbo1XJ",
  "key29": "5i3x5ntZgxJBzYiFFBdNJ8yoEqdtdF73CbKvVm2DoVUvXmvVxExZkxgLyVsf2XERFyRtjNjGhYYd4BtTKZ4pmePa",
  "key30": "4MqSLiQeYbBJLZaHtFWUCq7ArJi9FbCHjhCyWPw9uJyyw7ee499iijUi9VHVwoU9e3EZZW2xHCdzsBKi8P5uEndK",
  "key31": "3EPfsVM7FwnTomLJgTkpsTNiksAKJK9s7FhWFAM8GXMPvszoPxLDVkkUGRQACNmZfhr7x7maf55CDxR4Jo5v7W6n",
  "key32": "4yWuUTC3oBEvcR5Wi4kZg5iPSR1UfhEgHUbr7ioUpJMLKVAHt3vqBpRvLrvTNhtoTHyfjpqcMjF6o4xQJxiEWiYF",
  "key33": "4g3cD5FQrJaiEXRs5pfEjA2Db1sbiiuT48LKPQAcCNsQRtQFVmFrUSgQN6dEtm2Jpxf8sMAmSYME3FckUctMYSEW",
  "key34": "3WSqjZEHLBWkomdaiVRUWmYa1urwZgcGRapKzcoBYV4ueHD887EeHEPrKpHsTnEqwdhfdYtcf6ZttNXAopGtX3rx",
  "key35": "3oSfKm4xWPnBSUGcZqJbj1yp2KGs5g3ruXB1E4HGwBYH9vhCzk2VU88ZMNPMgQGkh54cwo3XJAMufH3qadLaoSjU",
  "key36": "22Xs4XZuMxdTfca6mVsSnSsUm9ExyK4XHgkagBTnTNXih6mWVY6T94ziWYyf6N44yZk9aSRttKPY9wVAn9QZCBvh"
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
