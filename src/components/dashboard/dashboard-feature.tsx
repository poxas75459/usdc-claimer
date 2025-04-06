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
    "u2kPceyCN5NUYszTUqfsLFviwPVVqXhUxzZ1hr8NqNjho5SnkQc4d79Cpc3wpmczAZ7n1snQyW6yW91v3h7Dsem"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bYhEywNY3VZGW7xd12uc4VTKzChEsRbK9MKBF4TUb7CmF1iuoifXgWSgQ39n9ktXjAoE5RzEQjxjTjAwEg1YtFc",
  "key1": "4r8sZM1LRyWFmewwuX4qRRdvykLCgL3YxHTEehFSfiHUYJDbrWaxeQTfjZeakgrcxB9iNPLZRFJrMmgdofBxN34S",
  "key2": "3q8JND5HgXQPYPHufAGAYDYx4nVmWjw1ZXuswUtVbzWjvdzuMBXRnQSZj6tkPxVVn9iXGExsx7PQuKrx7syRKGQH",
  "key3": "3ZaR3Zc9D6Ayh3rX4HaaYzcvhNQsh7DLyfzPqtJFS5AJ5c9UomgtM9W3rvmMkTAsDE72q2G2iMcGTku6wQm3LSAj",
  "key4": "pn2jEAmca4VgAtHvn6vUkSs9Nu2Rjxo86Ygg8EKNeG4WSpt6fKWVX6NgTFErmsdu1accB2PRMzWN1dUjMvguKqE",
  "key5": "2bhMK66r8dZZTgqBSjWf21MhHPDnLX3c8adLf97PJUNzZKBhQydpibqjsXWDvii2poWPtKjjkgcM1SWJ5dVfhCwJ",
  "key6": "351yNmy86Rk11RouYaELC9ov3zwV1PVKydbvGWGGDx8TEsCeFHqkQvmo5siZbsQ775nuejGyD4SLZ4MJXom7wSDj",
  "key7": "3MVDgi3eQYQ28aCk2wE16nrx6Zi64xtoFcTomy1tv7rrvNCkj5fpHDpcv6U6NRKDzy16zgdEZwqCdvvDzk1kxKrg",
  "key8": "5AmdGvs3XEEMgRoVjtnaWVtHfjnG6v44dEAgAQryqA6vdiQxnBx9gR32wSWXETbcwoTpPQY3nxpm9Yo7pCdYxRgp",
  "key9": "4yTbT3fAXDXKRKcrRtfdpRQdzGH8RhNYxKUJzUAeGAYZYeRUC8p8J41YAgxYcHAapqwuPZgHVUqokYNMqDMAtG3a",
  "key10": "2oA11fqfkgTCNWxQid6TRQFZmagTFAvexLtmCynas8PEAGdXzHnT6v6w1hV6XzJiLpvKB4eUqW59vn57mQKnivRA",
  "key11": "9dY34WcXG1YaGioH8QXgGv7dzUHmN3kJc7YnmGBC86fc9QNCKYnERvg4n2ConvE1rGEfg2TutG4GTiud1pdW9kB",
  "key12": "4Kb9bUMgm6HLkY3BJe9723WT7KpJ11NECQ9xy3CZmfYeL3GtZUtr4d6EuZEbhTav6tgzyKtWwRHHVu2MescBEnKT",
  "key13": "2jNbiN2YX3mhPDpzmjPi1uhc3uAyC9w99xfUGPnJfc5cYznBXUKQEAugkQ4JhhuAaPgUTw1vPNNDNjphCmLPhqGV",
  "key14": "3akXDqqUnAaWseah2XqEKgaWSCb1tFJcfGs6MSYZuYF4mV6NJzNhgKpsMPyg76pLnR6zthRkTB8HNCbsKFPP3o5Y",
  "key15": "2sjQNEcFUH3jLXhMexU7yNQUFo3gd6YvcjT69GVUimKpwcEJUZC8iRQh1HJ7PdptYRXR3KZoQbTj8XgPosRgTiWw",
  "key16": "2qAs3y3XUHhhU9XZUc3C4m9mNqbJKrn5zB2FH6PaSVt5ruzmPGnN4FAh1tAFRxv5eGbkTC3cxWfEFTAprMATbmhk",
  "key17": "4we72aAEB4ScJvjEE1EhiYtqtm3eue3t571fm4JGDAk8eL1aUB3XggjSuH5xJC8H3KGJ5wCiSA935o6DgDWADxvs",
  "key18": "5gXPcF243eFbJvwhc6AHmTZ5VTKxQYBAwQ1KUbcKVofAW4K6uznQVCbJThsrBLDoqGXpkkDbz2CZCgu5qSkgyMcb",
  "key19": "5EaixKjs3LujqU7o9FPy2VmkiyhkAcr15RGSo2Szd9DChw1DP4HF47QE9H89KSiZRYsAHSns1sMCa9atR5QmEP9m",
  "key20": "XPakmR18XeWrB2jbvp4jW14e2b7RRpANjcPvB98RSfkGWJ91uRMXR16Dc2NPJSJXCNBH9RZXUnQC5ejmfkAggo6",
  "key21": "697e1ZucB5zibNgZv29qeL32ahY6rMH7UtPJYqiGZfianQtoqrnTFEFTEB4NfKtsm1PKSx4Bbt69Ao4Mk2pZTNZ",
  "key22": "2VyqcbXkAW4oVtGvSTijdQVnP3rzSKpGEEuLR7vwXHS9BANaxQxHB4guZmVax6Q713p8jWRXzKTUgsTTQhEDsAXn",
  "key23": "5qfndJx8QkabjVd221vMdG31tvRoe1ZADNsdZz9qVnYVCYNR2NZR7iokx4SEt2q7epR28LxJS5EpbWqKAXipBRyn",
  "key24": "EqwPkvrdUNVMG9erE97mu4mvv2mtZTFrHWX1Ff1jnFDWmURsfTh2HkU1E6Uo7pE3dtjNVGGJEgYDiFE2VnZecUC",
  "key25": "5CeMJLDxPMJrxM9fwNt9gpdUALAZj5XcTwVDch6yimcRBEV8u4f8cn9GCJmXmLq7EKVxdXoDGwxos4q1Zc7VFuRh",
  "key26": "53P7oGHSs7zXKx9shMzLon4YkG8U6sqHXQdyDY7jXsBYhpsuuroFvCPGqP271SsAc2cHcW5gCdZ4uKU4UWDcHDnx",
  "key27": "e58PHDKpfcHxnFR2SCA5p3XfrYvo8FfPGFMfHS3Huwi7xefC1dZP6FsZuHmWyCdGsH1nysCcJLB8kXiRxfRRNke",
  "key28": "4zeE13oPmsgE4e8wKQQv9prEwJtDHhKhe2upcLdN2HWgB8NxjaXpN4btQUbY3xwEuCm7v2kaQSjpP691J6T6EVSK",
  "key29": "4t466Kyh5Mdd7pXFC5qRFViLnhKTfDxS2BD6VUsVZoBBLpttDbkRhP65X65XcXYqXC8VPjZaYQvh5g81Jvwkp1eP",
  "key30": "2y8WLANu4Le1Qi11QWwDEV4E6BPNk8P7CvuTysgb8a3CP4ZXEBBM2KMvc2cJ4jDUyVjKVN4DHMRyrQpUmnQrGXEF",
  "key31": "2iSi6b1SD4MZ4wMBCNSUpt46c56Drr7q41gcVUV3j3eRbwL8JZ8MXEeGd6bHbiVnTXGepMYBuEmP85cr5QFiN6ku",
  "key32": "CenDGzRoh6hWozpu2nMhNKEQwYPGQCFcufrsNjY41wUEp3CoF2zPJXSgeX3JrCzwEhDpzJsLzpWs65gs9Xu5zdq",
  "key33": "NaND4vwRoDeDvJt2CohBxANs4SrcMLbgTJc76LssWLZEGW4ab9f6CDBoSkaW4FQZ8Wa4XFAwhabRwrqvbNKP3DH",
  "key34": "3LnWHMuLeQ4NkWfG3jKKoYWF7k2vnRNWEiHAErTsoVcVhgTPsjgipov8NQzUo9C9Fb4Q2f9tMuC26ThgpVswbmiv",
  "key35": "5iLUriyC2RuKT3BD61JfZvsDy7JisWYMfCjRsVR1MDKWFy5aJR49wZadDRXhDTdb5KdG8Cb3TGDWHtn7Pn5svvGo",
  "key36": "3QzoKmTXtWeHKeAYnzAFXtgKCN49okrEVRfF7ehKC7pZ64uPouLv6q4p6Uwvb68aKubpKsj2QHsgMmQngsx7114K",
  "key37": "2HorHWjTRTMDewPFE9jDd6MduCN9pCuZF1TprHQEn47YCPbwtgeZ1ERcGfHeM9pNMydLpf2zYL89bAnSgmUj4Zpq",
  "key38": "3gQ35qZLeCERpECjq1tnzYZQmCFr7uds2qVysym4dBipKPozDfJ1m9WQzKj3zf3Mha6sLw2LsLco8gV7fXLizWKP",
  "key39": "2frSDc7cNdQAfREwmQqEwx6n3rVZns62oUmzXe7rtgAzWf4bvauF2NfpR6WqQHXuPkVUeZqa6VjfQJ85rJD1VVpr",
  "key40": "6MAdreEYCUhKM89tEgNvCBzCrkCFVSkMkY2P4KyjBXatjtWagjX7yv1uqf1yinPvE9DDNF3oMMk9piK5A9VAJ4S",
  "key41": "5CErLKkNLAYua2mNwfSiNkrGJ5VR89kMS771WNzCczZ516srksxvUfvjPhqhUivmBbs1upiN62tsVZFBj5FNwzpJ",
  "key42": "3bautcmn9UhSfwW7HDTcheLuB7Hfseg2irwNZp2FSVMKkHHSvTnKWMCbe9YY2EKDVm3ymuThP9eSrmNS3apELiLx",
  "key43": "3zu9nW5DhXHMKmL3WDqGoHPtnfvG9skbmwRSsyzLwht5SxBaAD6guwwvh4PrKwDLVvZNVAoDo1tNk4HZ4AvRo2Ae",
  "key44": "25AHQAQH6pE7N74RwBSiUEGtqHuhsz9KohotHNCWy6wK8HY5V44wQuG36sGTmZnnSYGtD3RFm9jUaM9CWiPL99Wc",
  "key45": "3kZdf6sUKcZYoqq6VQ8ozPXKSo5Vemw3K58FTYYykYkSCuMb1DpDQryS449JcmSbTMpRtYzkGkDk7v7VwzVZn2SX",
  "key46": "2G395LDeLSovVwjPDVfNr17n2tkLReFeH89dtUvY2ZWH7jLw6WKWWnurDzChLt35MFEyExNFchPo3xRv9jRUHtK4"
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
