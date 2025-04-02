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
    "d96m5akQ7sF7ivGyepej3Cr98aWpSuZQraQ1KEDtTX3wGziratuXYc3iN9WV3uXgfkzqMbRUoeQSiFTSH8xD6dc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ng4kB8SwmPJ6QobQBiw8ravguvMXLbfQwKVw6Lz889iJySJEhZcZtNqfixrWrSxXtG4g1dN1GPY5yq2K3tSkPgv",
  "key1": "5rZrHnCehULBvdBviFkuNh9ydzkSepn98Ayu11eFYcfnE3wncnD2ixknUmGxe1ZbbPoZDh38s92W4mR19UGJTnbc",
  "key2": "46TKyG4c6mwyAVd8n3T3TR1Hybj5xq9fawhp9VT6LMumm2ykBnMM2t4zEBk3h8zNgiPLoZKpo96U8BRRwy3a7yg2",
  "key3": "4tUYfMebQGRwJ6F5aHjXGEeumcu3GNMKpaixZPMHJRK4PWa2zkqRYWzCWGdbuZKEs6cJWoZB9B9co2sQjTNfzK2C",
  "key4": "5ZYDMeETir5sxStwvKt8W5xs7DHn8WkRs81Actd2MHEfdw4KxfEcCLcwfWjqzqB93tCZ4CTKF3mcMm9jgxwpkUAp",
  "key5": "2CqLJ9vRNvrXgHjVy7qL2qDAvBGKRnvrntxZ5G9jiknWcFA3iodFJFLH1PUAgupTuVqqEzYr3xeLEeDhZbC8HDg",
  "key6": "3w5kL1tJ4avm1PStNz2M3ziwXV7x2HwKvjNoDK1RVLSgLuWxXnSiFGGnfegBDcYakd4EJqaRaDaZ93U74d2JMjTx",
  "key7": "4iEJ3wkPnaB2PbHh6EhAMMG9Eqej3sSHgWJKQPJGJLJR1VvcaRvpi4sztZDf5QH9hdMyv5kxAkRgCnjQcXdp3vin",
  "key8": "pNYrM63S25fpsy5MCoBaYBinR5bwXLRp9CetvB1crbTbk5oQPyFCPis654zRDkiidPbDkoytvNuJwxoE9ZdyHgi",
  "key9": "62mxxo9rFda2WW6eAMrQLuPv3af3JbsxRscWyJ2gyyNjWB63NmCpMCGTs78CvoAfL6gcUp7QLoB1gyhUh8gDJv1j",
  "key10": "5EVGAqKEVpkJxTHQfR6jEqBTenTkSbPgs7WgeHbb1a1qKGRTgmZjJ5YZYnuNmxgrBu62iu8Br6CrruGpzuLTbBw3",
  "key11": "4eTayP1RxtMCbTARBdaEt3CvX1craER3AF9G8TpD1ySLpBoQ2jzchZeYZY9dLSEjHpnK7EFRvQ3UznHGSHwyEYL7",
  "key12": "5KeGSvURPz24EsmKw1hR5NgL8wAv54yQRCYZ3sYY5JdKjgWGa84EcgYsbqXxZ1GxBGBgqqqAsqiDqoYwLacLcXqb",
  "key13": "2HgXmocFJcbs3yUe8mi6Q6EvAdnYyjLcc2n77cFeTP3fVGZPm4kx7Rndig9HXPdousLhRQDfvAKtjkq7KCTrXGvT",
  "key14": "2T1Un6wTJPx9sHaHaEmRdoUwQprAwgC4B4Ca8ohK8jWMoMhM2UdcCwoXEdRgqx3L7hA2TMpE2KbR14bRz8T5qSxM",
  "key15": "3mD7E41o4zJ3dUcHKHKHMEkwc4eLA2op9Px1KX6EeDKLvTUtVNY3ihHJ8CHTTbrc8DiBNBNE2uK1qkEVKJBPJ82y",
  "key16": "8tit8toqqycxYr54R4W2AUcazjv1E5WBH2TxbV6fX2CyHnqw6MtYSdLbrMNP5oAQD2NTNJWDKqsG3T4TtkvMj8h",
  "key17": "2bYRMoTvjGVm4TEcJZvHvD7Nm2kp98iVZMJNynQyLHx4KdP33dv6FLAVs7GS6ZYQAsmrnZtocCnFajzYxuJebfzr",
  "key18": "4Y1JLghyWQAQTTZhCTb4oCfWTCv4hNbRoeU8n7zFgbXV974iANMpWWdRj971X6uo3H6qW1sosHg38CiknPGsD5XJ",
  "key19": "4n8iTG9bLW4TYyAJNyz3JFkH5t7XjsbMryaatVQEkoSFHzSm7LmgcotQRehDtjJoBFpL7vYCEaFCVDYwbgSdTeG5",
  "key20": "3KTdvLof1UjTuZEzz84bBphLAWT6TGVRpXbPPKsGFHgJ3JGTFTykNhtS7aepsh7Pd7V2eVtKqL4gTAMMLbbEmqxw",
  "key21": "2nZPt3bndQG8UuVfhV6XTdCMTojME6EF1EbXUSvEnqwqyGJjjGjTF6GNjMPVtMyMP8G82Px1AhDHsrdzNQDgyaAL",
  "key22": "6ckpBdFGj3t183ga4KqqMbTXCxtEDyqF1zhxpwGvuurQf1dRh8T6MUgSKMDL7HhvAq546eeNTNLKEKawxWXELYe",
  "key23": "wAXjRuK1MfcLGRANxZ55K1HkmXC5n17ZhZLPztH4DunGrrkRvsb5sgvac3MnbQk3Yq8T8dYt3Qjur3kT4hKwCZR",
  "key24": "5KtgpB3WDCeKfXVrr5q9cQUmFaxg9qzvxrW85CY4TrkKGoxApog96p4faxTwDFQb9YLhPvxcKNh2Ear5yynMXXT5",
  "key25": "Kycksz5UXcMh8H1W72PWjHVfAEnvHkeYvdSKUwWyVTVL5oeR6rhazQamBRuFDCDL5P1HCFsn7fceowGJDtR1sM4",
  "key26": "4dTpwXvrzFLC2MM94muociREberGSNzxwwU6ugZmhd5BqGdtkCjXpwDuzZ6Tz6f4PH9FoBAU3NzNRVaqh14eioNY",
  "key27": "5dpRGPmsChgyc56HK1GGL35EwxiS2KHRSMT6KxyPgK2hVF8kgtMpsXDv9vJk1Qr2nRvTB7fJCHnwqSC8Catp4EH4",
  "key28": "5esctfHqZSNyCcGyFLNECCEgaNpBeGt4xyw8gZRSLDgn8yDDHeSHHxYxT757E3nsWXdnjTC8y8z3ghscGr1Fnd3s",
  "key29": "4btVbR1BXfMXXtxGwXvhAx9RFBa5iReaDgsb82btZa7n8JzNGSsx9EamSLNK7hdZ7v3u5sTKi4bnzdns3c5ooUoD",
  "key30": "3Tg6QS7sfJ436xaDgmcAAFs2hBjSEq61piAZ6Kba6uMZDngKAfxJodXPkFwhdxJFzTLEGduXQdXqs852RtMTbomg",
  "key31": "qUToVv1euJy6Xi3QqHnzXWix9ad1pqrgvXeeDrCxRiHFmUu5LL2HM1w2f3QDS3uFvWumvkZkXdsYuwksMPyqaDC",
  "key32": "xZto1hqc8XkuDZdoGpwke3nrAt9L5CEFB95PpvnKBCXrW685DeVkZF1HpvsdAPW2W3oKFz7fitaqscWsPx7h54T",
  "key33": "3n4UAUzQtHb9X9xgtrriKQT9NvWecZ8NBUJF4YMHLnTJEo4G8Wr2uvnrsB7EhsAhWKcWbix8kCjmAybdqwsuAXU8",
  "key34": "5fFzKSw1iU91Px5nmWBkEX39DWfLbo6nezTEk4tvFrswbwysH5SoE3abQr9gNGmJFE1eNQ5mMnP6qgZeopCyUNs8",
  "key35": "Yw8tN4PhFSMk7X9PTDpCfWDAkAtH4wcoEfdMFWoQENSBnRhg85XiFDzZU9Xfo6c7rYKi5b3UmYHFZMCDAH88ukr",
  "key36": "3jwYhFNocZZRciCPPSpRGZe6tP8Vay9VCZsfJjzBgvnGnf5zRrP2yYEFH6HDSCH44h9ipzzUvpfGDvJ2xaiuzo8a",
  "key37": "42Q27JJC2JuTgQUDdkFPHKxwCHygdhhf3KH4nDVqZBKmXoasEb615R2XNt4i9CqCqKBsuv7BaCczxVDFM6kAGWML",
  "key38": "227UybvmRTB79FYfj3tNE1KAvre5832AmL7JoQaYJn1U8PDyiWbTdC8nZQir6iavqC2nbL4fhRh4ucXzujvpCzZL"
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
