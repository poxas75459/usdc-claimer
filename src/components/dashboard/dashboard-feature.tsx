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
    "ZMk9cFRkWgsFheTuvnW54ZjMZyTbYtqLEhTdk74WHF2vnEYDa6xnjXs8iRNC4EYBitqhuJrReQoww8Eo9AGoXf8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mqV9vUFM53S2hBt8HHXSTz4k1sriUX4ENXDAwgHLSjw2RVsX9GQbbRzNUuLxjkf36bb4jxEqWRGgenQFKfgQ8tp",
  "key1": "4Yy44wHxuti8ojNvtxZZuDCkwvzFVp7gFf32zYADygrzUfif2X2591DNLbrPvwpQyJYfZGZtagbLTYu7yxiz5VF4",
  "key2": "2jeZUvvteUnkr1oAfNqi7pxJFNoCPPLHTRyosZZCSVTHwrEZ6TMwg5AdsbP4s3dz5fpEthNdWyccu6czd6na7MSw",
  "key3": "41TDTaQvWKsr16qubtrMikRj9VABEiSsQCjR6u7AJghmQe1jWbchrJMLY9Vidc2srEQFAup7jXMunMVTckCA2Xd4",
  "key4": "5Jv7gorGt7XXix7rAeqKoTdJN13hgn6Aw5XGgErrF84FTntMJMUVoLxJpb2PF71mUk4in1D5VtgaMG3mCXZuNx9P",
  "key5": "nJhPzu6FcZpPEJ7TQfdRbs1uWbBdLYgBvu3BqfZyxT1Wp67PgZEcu9MkiJSEW1STq7w6qipWcR7yRfGYeK22Lfk",
  "key6": "2ejGwXq4fDSF94VBUW3fAkf3fJoppYuGsevxLpk6bChM7ZsWgSSCjCpVPfxgKkv6BT3h5YjSQMZQ8DBhsxppiZRP",
  "key7": "HgKtNmwVfzXb3Wv1mN2G5WCc1USATjQ5242TbMfuDXtTHbVacvFCLMMsvKrfqmx56AJgcUxjMwH5RdE3aQkgG4y",
  "key8": "7o9P7syysdK87ADtwbky6gPN91ojgMvrKMoN345cp95JNKVPXMLgSpLsnhvDxRb6SzP7SAnWx6VKjvDf5UxrRe9",
  "key9": "2FmxbMdn64sgkJgmmLL6W8Y3iJhBy5ANVtbNRrZmyhf2hZBrXJtvGiWZQgP5tq3Gq1eL8xS2rUpZVBA6dEHNWYG6",
  "key10": "4ZV7Ffwfz2xRWQZtMHGZDE6mGBsgDe7BV6N74mrNa8ML1LzKFHZK8nug42DVmMri3eF8JeRQgTUxA1tRYaKjbcbL",
  "key11": "5MYGpdq5Yp3Y52G7Q4phxRCJT3RidTm2xS26AKxsocqRP51Kq8heVGG1UT3KnCu9CMQAMZg6cCUeLCoVh1PhTK1i",
  "key12": "51zL6w2i5zaN4sBnfe7CFYD9ER5124PUFCFSNnc6TVfcJhhw7SNETrndZK1DNFDGi8hL8qDUBdNbyts4savp8Wqd",
  "key13": "5eviKbMTrSJGGgMhBTnrvFS4ZRimtp1ZrCE7NyygWFQdmCYxdmA49psM4gJhqF2RPMf7pjqG3XjhQeXSrG8YW9Ee",
  "key14": "nrdTsRygnLVc3SVxjburi7Hy8zWuxz8mUZQ94QJsXru5y5Hzt815JSD8aGf2UTQFjH3okbnTANLwP4L97zaQSh5",
  "key15": "3ckE8UWGHTLQ1oZwqbxk5Jg8LvAaC1ePHbWcws6Wnz94txUYDQ5bNSFEK8YoHNUwMzP4QKVW39SkDbw468yRutDe",
  "key16": "2WpT7UXchZbKskBX4Kg2SSaYS7G1BbjaDFLq3jBHXuGYYrWjBUmpgEtZJ32ukd5BWFuJEhKysPxzV1eB1NGmLvBM",
  "key17": "5kKCgD5nyGk8uzjd4eEN9bChcxXJeLGwxfmSp8pELJyU6cmvoNdAxEhTPHPgUh1raEoqcEnikEUPYVAvLJNj9wfZ",
  "key18": "5soYFarsuJiKz4FYB6UuJtTiCB8ANFLrX7aU3eXQASBpHKbyLfwECJ9oBfSJT3c2XY66ncSjdV8A7oD8pq5AT6EW",
  "key19": "9d2su3ApZsRjKeWhJ4N3bDxiwGbMh4HKQsyX7S3eDq94YgPZW8mqfpYkRrYPE23G5gwHMqADtQHq9oFMPHQv77W",
  "key20": "4aUcF5Aex1bX3KeuDgJwKE9zQGqYrEbvLzaGm5sRvjt6nRZNwa9VY1odRALMXiwSfYaA8SoWnmk4w5e1UJPBePij",
  "key21": "5uLUWkhao2KvnjLTr8JiZoarebaeC2WantptaEUQhZVbcEpVBRyybWHhU5CWvhYhNfa6UM4fAP8tPagBvxGXe5AR",
  "key22": "2j9AtxPWyuunkN5J9WTKTqQUGxTQhHpcNkyQuqZLNbuGs52k2QrMVMfx59BReRWEmw4UKjQ9xRyv5BMDYuzPYQXt",
  "key23": "3tbau9JSnym3LYqTKx6yid9eadNq6dcWPiyFYx82FoRQWhWenGARAGzfwPUCYwo4g4SgAGXaxJrJhUDHLGhDBRxf",
  "key24": "2LR2DCvDfSiqWt72fyCqhDA6HtafhnFffqLYtF8SjS5cdtzCQMMpZS1ZAm2tRJFHKSAfqdvZ9vev5q7YJZQDn5As",
  "key25": "41YDwCZoDKitVRFcjPBggeib7dJem2YVHdewAo2vxzjvWSgsR8qZd7PkrNGKUt6SCieaf2TE7d79vm5fqvXh9t7o",
  "key26": "HqVcDnGmbK3CzuzwQxvbXPkyFmg7oDpBUvS4KUYKiU2r35De5RtSWsUKmmmr7AHxoGJjnSNVszC8B6JvgkfHhLo",
  "key27": "DKcXXdzbP4Cm2heyUpMpyRT5KKvPSXJEMZry5gXv2dZnV4XY5ymrARV3JDKK7ZkPE94u9En96u7dGr7yycNG2TL",
  "key28": "3RMAyVoHdMjvvpn7N6p5F1Wi5UEjwS2QyEnYwJr7nZgDQi4iNoVkhCThbNSdwztLk9TdF8cCZwnDjqNjaDVdcB7q",
  "key29": "5f9KQEBYtDoeCmZgMD3dWV7b53cYreYTxLivrkuEZJETnGaXzpdyBWPFt67whtsBeu3hfyhjjcD4bieLxXqCE7ap",
  "key30": "4j7FWLNDKvSuuiXEPgnJjBEBSXH7tAB42JLZm5eT75no7vtk8JycN6SUV7Tejxr2vq3hVoBscPKMAVVyBkiTevL",
  "key31": "Qgaz7Cn9cCdHjjcjrfwzQGY2EsfaRpEcTU6BAzQXAMLhtXtk3fygUduVWuHtZfrxu8c9D6ZCmTyaSxmBLZW7Ebk",
  "key32": "2FkD9ftm99yTbnX25iYLD4o2bfEtYbop38V52D2oUfVTUbR6JQamgzV8vFUAyCb1G9D2yEAsLeUvsA6gbFPW1LKP",
  "key33": "4rqjam4NJuoTCKYsTh93K7fXPZbPrg6MCdMUMxcfFcmAk6DCMt7JbpG2cNbcTRAhewwKuN8LhLt3LHMvDi6fP8Lf",
  "key34": "3vgK2J9b9JHrcFhXdhhC5Twrn3RYmv3WRu4rsGeXDydm6EgQ6uyzgAM3jMsbSLD5XeMiUXVZATuv7nas5PQ9aSXA",
  "key35": "3XVYJ6rbqrm338hkRzmaAHHkeFwrJ172Wy6bhcAdBRifq8puUnGYA3A3vANeMR1Ae2YBWRmYZL89QAQopribxZNQ",
  "key36": "67bGXmRmPiMnbqLn12xXSyp95hy48p8WzsB93ZPvWLLpLCxPYoRZyntRHrQa7jYGHbbpUo6Zh7Y2zScSNg2FU1Jr",
  "key37": "3WRNX2UBK9LMDXT1b63XGQZQKeTNGi7aTCBwqr6tYBkgo8vmYfnp3wpiCGULpu9N2fce6MxRKeceQ1TW2FTP8efC",
  "key38": "26JgJfFwZbXz3PYb2DMCpB5ttPbw69JowgA1CdqCaYHTAU9opQwELxda3LJZbsH6p9kxsKNWeWgKmsLvywxEyyxL",
  "key39": "3kVbQC7mQqM9mJXxtHrEGjBu2JHzhMnc2Pr5CLuGkra6GEieuv3BMZxPULQRZQZzgvqd2ozLuCb92Hup16YE3vd3",
  "key40": "5oqLZs1TGwAMK1rXMi4SgUkK4bHaoU9WsFWN9stJdF3A9j3z7WGoZHSwoGCPabKog3aeZVDpVBjhVW6y95BbfqZx",
  "key41": "2tXtodNDUag6hVLMnBNFy3A9fzLB2SdNPxTmHGS7tJf5bVygNhN53t8gNzjXi2T5jQvUH4o9Y525higExvsT1iA7",
  "key42": "3AxdePhSRmUF8jfAkw8HF8E92XaPGK495DMSrEDWoGPitKvFSLcf4UYZrNbQKuS97QdfDMA8nQUAHoiMU2T6HjSq",
  "key43": "2dWhEYmPbriRts7ZcGFiZRtBMiwCkQS7bLS8wqxsjcMKeDNds2NbF5c7fyDT5BKX8c3oxaJeFC13viSUQmBmLYuK",
  "key44": "5H2XjtHEh9JDkzTCu9qvQLD8sr5ubEH8ef9JmiWfvaY6kLocX2Yq1RfhnEmxthLMzTsfSJNUei3MK3qyMrtXgvbK",
  "key45": "5np3qoV5EishqPyspCDMCeLLGo5BH4BCCuHSWoGgRLnj3aog6B3i1hXLpdy9g2znCR8fpcvNwU9RTQDp4vC7JDiV",
  "key46": "5jBcNWfNfDXCWhKok1UmrnbtXsQKCEz7xTR5yYJgr9Wti61NqR8RXwtCD6snMJQ35DNHoq97LJScVSp1Phk9qEG3"
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
