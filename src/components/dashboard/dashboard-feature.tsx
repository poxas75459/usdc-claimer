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
    "65KZe34TomiuTmQhPBufWNHnWskfaZLUfSFqUeE6upHiEgwtL28GVy35k4v49z66q1vpev3kMSG7pGgjXEGMH5Dn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34jmRDN2DzYaPBhbkfgRWUuMx7WytymmdTJjWrb1vmZbe3sU2YwBuZk9fPmoZchs8G7eKFozt3wEX7WwMmyxVyt1",
  "key1": "5uUBiucb1ckPggjKz3E1ArBqe9ymZFCJqV3Qjdp4jyQ54LMJi7Sp3iC1FULB7QEdHtVTD4yLf4vUqgzaNumWH5a8",
  "key2": "3jLnd3cp8wBcj2Zz4Qw8Hw2Cfw9gpoEDVRiTdhcJpe57LU2c6FsCiPtmvYVZ539caKF1U7WoTRxLfPecoBef1U28",
  "key3": "2KEfJKuKmH3JnaXwdCc2Uo2Se25sSTNsemu3XTDSLwsSvHB3nKm6p2UNtsLy6cgdzpCbHkFE6QJJihyy6ZdtjSJC",
  "key4": "5DsmJuGKCsh7xVaMNWaxM25vEWHbsM2nWpruPYj8cHV3uFp2KurvTF1YQhH5AqdKjHGmX8UMaazg4SoyzzRaBvA7",
  "key5": "ma1wGgp5wym3WvVMVwEmwDsMCN1NKyugAKxA6A1LXXAorqBtQvAHQVUbWDTuG8s9NAeJ6c6qYFuwfKd4tHQLpAB",
  "key6": "5ZsxNdhAZw41wXnYekwwC8vaBMfto9ri4T1TrC5Eibu8kTQ8juf31UbTvuk488n8x5sRSMRdgVVWci2zr6kweKWh",
  "key7": "31xadfBdBZjsTVkcLVX1epki4EnHg9x1fDWXZjqBTFmBZFmGq4E1Nfgo8EuwRaknuoGg6ZSpJkCNGNQQoJF8KdsK",
  "key8": "4MtbVnBKkCN5DernSRmzzuSV58sYtuVCjz6cg7CHtr2hyUneCQw4j9LDMygFp6Rd4ae5AyMReR9ENXX3Sb9V6UZx",
  "key9": "5jpVGzpVLi2qNA6TC5qB7cwzizCL2TCDvxyViWrRqqAbsbvPZz4QToo2wTEn33ghaeMQVEyjiVutdt3NBBfd14Gz",
  "key10": "4hLVBUqETmiwS2yQtuDNkLgTJkWfLdEr3MkdKLYRrwV3UbNz6GaWNaYWyGArHjZmFa2oHyU6CY6m22YnJReoaSeA",
  "key11": "5Whgaja2X8nDuV9Xhy6DHbuQgs1ZE4yFokD47z9odcEa6uHdo3K4EesicURWKUJmQGXka47GYm6ZzBovj7K96hi2",
  "key12": "4iiBg6f6RVHdd1KMr8bf7SseuW3wHR1k434tFETG5uub57JCBnk9huoeQX5ufzyRJeLsZqxLGqkVvKk5b6wu1o5y",
  "key13": "jwrGqqvHm1b5pUNKZ2Zrq2oywLEkKbfcvxjgzH8aPW3k8GiePqXwQzhUG3mCxeqBwCxtYjtkH2sGFQykjcbuimA",
  "key14": "5aEv95zfuq23puUQ1BbFc8KjrM5sGdeEpKhv7DWTsQXuqfXvh2Q7HRZTQroNm3BgpGTGiVzJ3FjCrvSvLLh9dNRR",
  "key15": "3TYu4ijobAqbPYC267XpbBDPcNb21JxgjYYhufR5gr9SnCLqYNEv7k4fqefMbUpufLjRViZ52wotLAnNTNXkEGUQ",
  "key16": "5sH9ehGkhtQAcsi5x2rN8TqFDk6p7QA4UyasCJEjsRkNBLkK8tvxGsad3krviBv4b36TxBL967jPKRmqwUXQ85x1",
  "key17": "33kGK52t5VSxfPMT3kZwRB7rBidWXQfnmdPRvg1WtovyAo3Hj3ei7x8Ey7U3qiCPpukVeT9HU1CKZ4jGeE8tuaEL",
  "key18": "3shLmcFnZ5Vnh9s3JUzkmCGAQ5C6XTx7KyR6amJLxPxzfUYMVrNNiwbWdYGExN8hvcNUoSwtyVs1M6cZcrHeWJCt",
  "key19": "3pHBssPS7xsXRA4LJS9jJTe8MCsvHK53FDQiG5YnyewPS6jrU6daW2YLEVNGGsDfkP3ZDiDtDFXLrjnZ3TSQ313G",
  "key20": "itaZQvd6NNFEwMAPcLhc7Y1GbhyyoruZWXTrEVBWYau66zXXh7UkPXT4vkjzv7byM78n5rovhZ5K4WnaJVBCL6y",
  "key21": "3josrTVqXDVhon7B8mkkQkqM9aPMWRNFAzSg2bzjK9Svhp7jgRhRrtTfiZpYwBqwesrse1cUdHLYVn29fS4kUkMx",
  "key22": "37M6hY4Xou6escqSKnTzfkoALAPWwafKNBt8uFJFBLQqaRvi2oXibZPrySJDgn4VPysrKputwvA26f8t1MxiPqE9",
  "key23": "2y79B7b5Jy4XmFsjCQSve5LhY5pFPxQxSR74MgjZdLatBM8rcbgaSxXCcrhEwcmrdHXQaamUVUZ41ukbQyAQaaKi",
  "key24": "5KNYVjRx3dGtgMkTmq59HjRVuJk5RfQv8MTD4FtGZNjbUw2UfkEmNSgZagmDUaqwzkZWYwbmWXi7u2Pe677q4aCf",
  "key25": "ML75cVqto9JNeSph4R1QoFCJdgSsjFWiRZqP3ZKWZ8Ua6Vm7WWkmdMscs14X9XezUjMPCZksmEmdKmUo2neLzh6",
  "key26": "5BDuzUaLw4fXanpx9GVSReVVBZRrXgtjAyxktjZF3xzDnNP6XFwrfKjD3Ay8anWspdf1a9X6DLzUpfSLTzNE7QcK",
  "key27": "vjDJsqLdN9Xo6aKZS8HnQqbht6Vfdy5C1HhqxhuxbbrWSEr9MKUa52BamoMxcHBo8aTPX7UuZb5fjvaRUBvtAq2",
  "key28": "2vj1Uew2oKQ56QL6CWUmPhoWk3u81gmn6f9NM8P85ms5WZAuVNq5X1NhnxAZ1sn5fLfcKNt8W5ciwZPUQWH8D6r6",
  "key29": "F8mHUeQVkHP5Lhe4463ZfSFMBH4W33mpzeXSBuvVEsMjBnYCas9QXJ4bdHviLmQ5G5sLAoEb4DWH854N56k1rHB",
  "key30": "5ioX4p58MRkW1D6gRkdePZLcXAMNE5HiwkCvNkaggqqvJmWwKCw85LKZMvRxrfHUDZEb29gTG4JnKMPkwipwE89d",
  "key31": "32qoHnHktD7CdFtMopDs3yC6qq9XB9A4GNV4gK8gmU9DnC2TPRJyPaH7YRSWjnDiUouqdLSGAAaaEfoFik4yGSkG",
  "key32": "5nPdf23ENxVoptrkpVwi8RFEoKoe5iz1sXfy2wBP4aZhkW7AVG6ATa6tqprQBnVGkRyGMBk7vCAMAZ1Nv98EzrS1",
  "key33": "2EuiD9hz79efWt1awjEeofrV3Ms1safNHku5T11GBakXnesXJuq1qcXkdhRBXULxJ76ydpgmg8P9oGAWe3j6ewY1",
  "key34": "279bHBsQVoChVGU81xHpaFJi2u9s7Q6zuFDiB8i7En5CyyXPdvdb4YBC9VbHLmy7E9ywoBYHRa6ExeuMM81Ndbkf",
  "key35": "oj32ZqLcyWSxxokjBv7EvNzfTX4kW8sFvFMyq9fo6TMzeztTMK269oF9aFiR7W1FuJFQEqkVuwb4gZroS5Q6bX4",
  "key36": "oXNLnQTAL3LZkb8WzoR6RXkc6HPN7PVCqc4cfeigAWHsEJUusiA7bRXLCpZGDBRpZoPEyYJa9iR4VUkUqC3EmHn"
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
