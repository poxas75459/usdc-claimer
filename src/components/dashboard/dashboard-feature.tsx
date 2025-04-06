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
    "2NzTt5mYQxUxTDW8cwCTiWMPPhFcAu1TY1LMAsmKn7pSaG7q1rAKiVrH3NrxiFGMaVJzWV4XJnkgcHrNTNB4GnEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gwof6o6FRGrXyghy4dYPWzGMnoFPBX62VkPjjuH5SXsRcC3tYBWDLqngqUGg3G87napoULBMNFfU5LT41b3NsXE",
  "key1": "3b3KuWECcZWx7KdNfi3dTqYTwsKxcx59Mq3w28hSfZrk46G1r3GbzXnNQA5UPC2jJbbhuMXtbY3pv25FMQnhJqZZ",
  "key2": "obw5bQrv5KAj9zbt36ri8WfxQGoPBD1e2QGi6LKweJ8A1z2JKLta1psAZs3SB6n37zvNmYaEdCZutEEspXwvaHh",
  "key3": "r3Dgvh2FsvVmS6NwQBKtiCW4foZdCfrEmsusQijcRbM6fCPor4y5BTawFWmJNwK3QVBMVr3LbkGuvrCHCCBfRaw",
  "key4": "2GzuDPqqiZ7a9FU1FtK4y1HvFLQ8TEyRevdSBBcYVicXkCmYW1cbh9uWouxe3hxxxtYr6EMcaQp5C2mrDXWYbNJw",
  "key5": "3sZ56GdtDLANA9j6M15maTXjpFwJucLbzkUb4UFVP8tuF3PfVcUMbVraz7FtXBAWoVJtz9mW72wxZLkid6ezqBFa",
  "key6": "2DGysDBwRmm22dbLAtsH6QVVuPo5qPocg8NwRpuYuRKPpq5Z5PodeSU6qj6j6pxuf9iwvN4HZB7Z7vM4pkGYtm8v",
  "key7": "2yzt236zvxZz9yx27FpqqC8DGzXi3VEtN9dxf1sUoZT8rkb2qY7DL6EwMZ47a7pXjCLLMfJeD2eBrrKPjrryu9kQ",
  "key8": "Z6HvUHBp9NjGGmGJFE74EnCpXgeNkD2HNTHGsbWqFekTL7DWoqZi3yxkRhJTDNNX5YPyKZ8nyE41z1o9NiRuvRs",
  "key9": "5o17b6CoCmGi5mcBEvD1tpwpUv7dL2ARStyX6aTJhL4RosLwsb9Zu9R3ko23gkvj3SqL9mckBAMFi6gLoFUSYDem",
  "key10": "2nfxnMzqowBfDsDdkotWD2fwPKLGxJuy77MGQzZVr8CGJC9zKXoVgjahVkaVD1UcTxTpuPYwgdmVCoXLjfpZjD6B",
  "key11": "3FihWamrRmpSi3MvQfhGd5QiAUtmpfs6EE6A4dCKjJt7gxGhrjrH1eC2ckyD2gYpExgJ3E45CX3H3xrUViTYeBA2",
  "key12": "3x5GiwsB8PYccoja7Z82o9cTisPQXQZRdDDijqK8zafXoBN2F9yPV4poRKPxHZPs45fRbvUbkzsfk59iwcDfMn8d",
  "key13": "n6ENkbL8PUmwxQDn14ijp3W2cxEgRRVdCFE2ELbSAstndUvujfuqqa4iZUn3PNebaHM8e92pYpovna5AqXB9E7F",
  "key14": "5tGH9xafQEGcUVrNzAb54SNQDMCuJmasSJHC5G4jtimtf4he6Ywemkog48aBZtFcmQiJVUiYkhgtjGj2KLMuhSn4",
  "key15": "doVMMzXPxAEbX76XuxvVSdXdX3zCUDuhYWbHMqYzdAu77vvALNeMKbKGtbMrqeAT1zG1ucSitCSvBNdZziSXPtZ",
  "key16": "3FvTeckpVuMKJL1iBEBqvpso3NJD2CFHFwrAW1Zm1ngAgYjVfSVWxdRtvPrHwT82gZxQ2tQ2hChWyQSiszpXcVzu",
  "key17": "2ZJkQCpHfwCFVTp8CyYCd2uX6rTCH5MmBkpjHJduxVZgNE1JYzMETWoexLS1ASrs4rX3qKXdvoEyVe6ZRfC2H2je",
  "key18": "5iyssoMxETssoHyK2JE63exCihq8pMmhyNq745ezwUH1LZDDXd9MLPkiwJDtVSAU37FnJ6qzDCZS9LTZFW8XF8Ms",
  "key19": "T6nup7oBWA7vFkDPBys43t16bLM7sAxCVMyyemUqyq2CV8L51XgVb4yk3B6iKwpjQbV3eFPfRtC87kthcKomWPy",
  "key20": "3bx6161RZbMqZVfT4oGG1MLvPFyi8tNSZWB2Fyi5EJsgq6uvyi26rwNuGUszU2tWbpK76rtyReBYxm1FhwRxNxHG",
  "key21": "5PmcjFpQJLEr2cNBCNRpZsEjR2xdNfBRbjWzaWBysKWQVZb71RVwQo2EP3PFuMEkARfNGd5LxfyLzqy7R6FJXCSK",
  "key22": "2ELaqarJGQSUwg28AiudNQiXFhoJj8w7GsNhVDvBUZa1fUFaM5WAJBWJNe7Y5CJ4amKqxSMbFRp7cLtNmugiJCaW",
  "key23": "5yYjwPkUuwwgnYXxnGJUuT9TxBwc9oW5791WwdUZMVroqso1VAkoeZ4VvHqU5LBiVgU8SEu5gVKca3B6idAPf6Bg",
  "key24": "5G9EtzJuJAAK6nywG77FwQzjr8YaXwwp4Xyu2NMMCGcWZnv1ShgY5FQjfRngWt9H9m6nrDfg4DjJcmEg46jwrvS3",
  "key25": "3GLGgzSGJE73AvRpXrSjRJJe9RX5evyFxsyu2RQzHTDJ26hsB4CPthGnWwg3nNrefXUyTw8p6BWk9LBVwsArBBMX",
  "key26": "4BhGeToGwiBGBpHHKGRVQMEJCWy7bGMvyL3A4c8noSQM9BPjTF1kRrhP3S6cpCfXwpdXDpTgvg9BuMC3kBiUAvsw",
  "key27": "2mQDhZ76zJuGFSu9gsFTHgFPH6B3HGxGdfEjBRj5fKeXyqCzQtPDXyEPsckESRicojbL6LSZuc4wC8gtiPy3Z3MA",
  "key28": "5xYuU48F88s3gnRgY49cGNUkKRvsk31JSL1LKib3KtTnK5rhXjEgcJg6yox1Mgx8gaNnquifvjbx1Sp45zV8ESP7",
  "key29": "48UbvH7aYQYTZXrippRhVwJR3LqvsJ3bwTWB31GoRhbSxLPe9L6T5k1QPG8HHKJu29eTLh6Jbcm8LEDYjNwVoSxR",
  "key30": "ff8M6qiVYfxtevcQsXXyJ5GvHKUR5hLmQGpCfHS6znp2xP2KasAzj2zhP5bCPdAGHPAQNTqbQmz2PnSdohedLN9"
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
