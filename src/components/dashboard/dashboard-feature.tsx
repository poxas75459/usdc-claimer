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
    "4RmMToH7MvRhQBoJBiEJcq6ZSxkbuvN8y5qhzbzVLHGGNsvWy7KBdtd9CCcMjMNSKBbCp98XcGca7k6iiJRLwj2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QUnY4FuwFhyAak61ih5FMtnFDkyAfnX3iwMBxu8tEHAcM9n4ma7LQ21SF2TAxobmL9fXgyjP1HyTAnETkYDZFHd",
  "key1": "4hzv1kVwvnfZWKAjnKB2LX2CyAo6AJUBZYakFhKasuNx6UxknTUb1ZBBrECbiNQ6v77hiP6u6D7nrCyWijQVgSA2",
  "key2": "oiUqyiD8LHpBnroGumyrfL113GFDKQBvQLrVy75vjumEkvQiDgpcz4JsRToCJqwqXir4PSPgNerCikF4qraGHDR",
  "key3": "5mE8JEZMHVhrqWjVUUCNHb3hK2nXjyb1NMQUjeVL8ckgFnrSs7CYNQtBddHDAvcvwp2sLoUawHxbqVecQPDTTKWK",
  "key4": "2gEoEdDnxumShmigHHbxbcVG74LhrRHW2rv4YRFJn9AqhrVh5BdTvNR4ZaUHfxStkLNvniaKPnK35s9p3kdtWmoP",
  "key5": "Cw9Lpad5SmBABUXe6LeeLZg15wx8Pa7Vk9DqqbYj1wf4MdsSXsCSCahAZ3SAevotA186zWcDoUNK8vjByLsidpd",
  "key6": "55w5gxKnLJj3StFVgdHi9J4vpppaMBTGssxwjRnrRBuT1H3TGrdPXdoDDib77cqhY98ufLArBd3dtcedWK9SqRUk",
  "key7": "3yWau5BebLBdZA4DSaUE9GXWaBxdNFA69GceSF1pmKcxZiBpQkDxdcWUaoG3p9GQQuSHyBioWQ2RATgY5zueSkme",
  "key8": "2qV75Zxq2Hfxr2QmSfBYB5Q8NhncDQ1YcDCXcqTPReUkh7YQYrnkLrpSVky8wLdw7gdmcCSHt7kBY6c3J7QWor8f",
  "key9": "QwXKQr2KZSbmv2ZooNxjQgPuZzkrxN1CzMLMQ71iDpg3KfxRNLRxPVtgpr6cFUKTvYqX5VTfPJx2SKVwMDLfQ1t",
  "key10": "2ydeMEw3fJmJM2TuifAXRWWgX5dAkJbt4shZR6Az4org5qCFkAA5QD715mTnbpEm4RXVnE9wuq45CbLYwdRxPQz1",
  "key11": "4s7fCmqCEfzfJw9xM9G5u4MGg6f2pTFCtnPQoK2NRuAVWkFBkK5Gvj6FLocU9aXHFeTJe6BdeZeC8ttcKafbhTpC",
  "key12": "2hWSUWnqoHS5L7xQt4RV7WbQFYDkX3tQr6kqNymMQWHW7jC7G9vScd9UJQPWLTrfm3BWVomx3TeS6iXfKeLDELsd",
  "key13": "5mXbqLE3vyfwfU5yhKUEnhMPLqmeouQb9fKBkucGQq1y9srrW64oxVZdM1pGKujmeTCgWKKVMyHSwB25JRCgRzcE",
  "key14": "3KMK218wza7LVizvvWsUALJ2MaCKB6Hhgso8UBjyqiYDp7DhSHBiSfW797bPytMwpoQgB9ohvrtSRLVrVcQMDUUj",
  "key15": "5J8L4M9wXwhpUxmhnyHVjo7ayCFXH8umXDgxf2QNdXsszzU6xUweANyisoBx9KGHomrXdQMtrFWK25cWWMX2YvbY",
  "key16": "3sLjKHKTiixdeB1KSiuXxy3h9uquFRjkm9oJeZ7qeTDK2idb8dVyVXdPD7ezPapAkTaTdo37gbhQh1iLKoKftMVr",
  "key17": "6cB4UnWjGref7XYXwQASq1HNqDURLjMBkrMvjexPrbSJivxRhkuztN1zP7z2dGAUtyeyUKH6VFrmaTnPCNscVdc",
  "key18": "5TNTUSsBhhKkMWF8Ve62vuCU9EcoH4Q11Nqv1KbPQXXYY5BtkgtBbGQSKeM7NGYqSGcQDRjz2VJCaJkWw4x2Fqun",
  "key19": "3wB3jWrXpDatcXAzkAeMvnKcLp8QTeKCcJn2v6btmrSZamHh7eT6AypdDL5if36NdaLGJKncGKT7H5Bsqxr76yM9",
  "key20": "5dBQUGoNpdWYKmkXQaVTREDTUoJGk2TzzhZifGQ74TEpTR8rNzFwV4GNnS8MgHkE8o25L2K7o9dtAVrBjoKsCn6f",
  "key21": "61p4D83zkwYznkBZrMmm1KytRQEqoJJ9YcXz8r6tHskmSn5af2TfZ1Z9AQYaEnK6qmxUCHysjssP1q11wQ6AE4eh",
  "key22": "4aER67m9Us2usyNndzTFNCc9YWm6UMJuZzPFszqhj4FKHNqBqgS6eREx1GD1gpUfmoYaUhpJ8zpE1c8Fc4b24vqE",
  "key23": "5Sck3TsBMDxF13iPqJZvE1SikcJuTAPT1MHfB3LZdGHWedHPwFHqnhZMNPxHkdEAKCpbtchQmWtrPJMGUW4U4MZR",
  "key24": "2jJN2CXgDq7U5T722hBtd8k3t7NBvi9YH1fEncdyjvbCYJGgsPWEsLF4v6PPsCL97qKCPJjYuXzjuqpZzx3SdA9f",
  "key25": "3CriUVhG2Ce7L69NhP67SDGc7ACCNfjAbyAq6H4d8NngXt4ioDVgyFcYnFDmS2goXyVBR1RQv8x1mEZYcMUnzLTa",
  "key26": "5Cp7XAxUcWu9mrpURY8as6ZtudwHVViNPzD7EFkXwAgGrbGg9xiHTGzNnifJU7tbS7yfrLmcUQP3yBWG5MJvnw52",
  "key27": "45ngzhHUmtstJBeywZB9mUf32yXu2GWZ3K3WLuo8wQUaojcBXbmRus7s2acMRgQ6mW9n33KNoZzTLmZHFx4m3F4E",
  "key28": "5uAaP6ZjxwbF6YituHWogykZqKs6PpuKg1n5vCs4EtkdMbXV6F9Cz9vViU8oK7zMeoACYnmULi5TsfDEPx133rqv",
  "key29": "DsZx1JcTRTmi3Jm8yRxikNWfkw7Sfe8PfZLT4a1zXs8xmaK5hii5ZLawNQC1Xc7gtGCGpf5M99Bds2wbuR2siNo",
  "key30": "2z4envfA2zWbDFND5ajEHNx2ZVeBa9dVD4Qb8jhx8tuxYxWJAjs5d2ncGzj3G4F4AhZZCZ1UgesmgvMsKo6Pb8CW",
  "key31": "qE4iNeSNab8DF9kQMUprhRsvC9n6caxbaGmit8Ynhs4C59LEEvAEMYLNNprHW31fUkvuosUCFqfMf6YRHMFGDQD",
  "key32": "GSQrCYEj2j9eEwULuNWvvv7DZJqxjx8vCFTJV8YNcseGyxcuE9DZqngQAqbkgonFFLo98YhuqmCShcPSNrJnKMN",
  "key33": "3sLtEYwekuF1gVvX1noUZujYwdPrEMS6UfptS9UMP6ELjS9PCQ6ahE6wsWktRgTk1rmR8DL2zddn56p5MmgH7fny",
  "key34": "3Et37RsGKj6iTMvBC1ZLauprpvjwGxZGQ1hiTn5dVd9xR9o1RqXTDuDE7vFK38sFBwysccSDKFUfDQAEB9A4TGJ2",
  "key35": "ZHUqQrqawNkBBDMr2dMyha2CtfnWdFq5cWFwGaBUDpLfdtm4DMV68R3AjWnYvVCPXc6cFZm15SqYDjbQMwroH6w"
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
