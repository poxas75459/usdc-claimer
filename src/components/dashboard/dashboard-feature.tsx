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
    "4pNBQy42a13Jky3A8pxfoqXkkkNuGAkXYaWTETSPFGELWEYUKNX3xqMF3kU9knPzMStYV8pjDCYUUTAg2sX492wF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rKix275YoCbZDiFvoB7uiADbG8uZ2gnoD81ec7FHogZj5ti1ReYkYSHPjTzRbC4jRDTbpyLg2fBhePT8mErLRF3",
  "key1": "4zjaVrqyEh2i5PY2HK8WDH8GbUTcH4HjjMqLvwBfNzdfwi57eyJNh1QHe6CY3mcSH7awgkUNgZHQ3tXfrF3TntDZ",
  "key2": "5cuGmBUKsmW4ZTtySm51QvtTQ3vsonL6kLN5KpfUtvjXhnWSDSjFNq8oKQUbksyVS95xhoeLZKSEYcytUEkZDcAB",
  "key3": "4uHhtu9UX1rrqwBgpYQ5cLptjVYFEfUcy6btxocaw5WMYg8E6ySYTuNGeqrgaEuZP5HmputMRcj7K5rtWdrssFDp",
  "key4": "L1Nz3CBxr2w3cMe2MctqkKj6RJh7SdtaUNgh2mXccmYdkihkiW2KGEKhtQeaf2ALpDQJKfXxjRwaoBU8gDPXAb4",
  "key5": "4egc2LA4vK1hJNWVpKLSNRdxfAHuA2xui2pyiWwDHhStHBhWvCm3fKg287SP8ctnwEGjSBMiXCW3F3ZnzNVT7ntj",
  "key6": "5Nc5EPGgFCbGUujyKnc8sszUenbGUxLMzSPcNMhEKvruzWRZxSTV4X94zxYq9KnJx5m5pMSzaUG8f7JY1wVL1Kdo",
  "key7": "5SH25gmWw6WJemDnbRq3ccNQPsNmBivhKxepoVikCf7S1KzEiphFv5nE9ErVZLRy48nY9EzqAHRHBL4iqabsVM7E",
  "key8": "4YLEPqxRRjY21TRmd2VBzs1yXHU6QSbUUZYHdogpqwdK7FpK9oCnBX1w5mzg82eLEVfukzk1wph23kTd5we8CY4f",
  "key9": "23DTsSrEsvpLn9m5qgww6xYeymSjeBM6cWuG9jAa6hKhFSTAztDbSmkvqUVBMQ2Cn848xPMoFFDR8XR89215scFM",
  "key10": "5bem3DwfdpfdujGsMfZoyZMxa2JoD1WvdBu1tRGty2eGe4TCJZfELnF47vy2amhY4NDRtk2CjMigA3n374a57AJT",
  "key11": "5vibCeEP4ZKDKNvDAxGexmpWzPHjfdRbWuf21ZrcusDVghmHHtYowoTgt176HwVyXcfneWZTRjFtU9KhPts59E3t",
  "key12": "5tQjrwkcooRbzCRSa1zgHWz3XzFPdcRdNvjda7qoff84xfGqVYgtco7K3rJQuZa3awi162kKE4hLr9NddUsnSRnD",
  "key13": "kdLj18gmL9c6Uh6tEwiN77VLfY8zi1V8GdAzDjBLZzimjgyurNuCLr9EJHHZfFee4wQgAHmvm1TaG1Zd29ex5gp",
  "key14": "5aLngec6sWa1b1kMUR4sEjhcWRHCuRJzmWGa5ojmobzqvTgnGmU6PGXwVaT68rQG6Bh1rQ1oEEdGDSUhAk1SkfRU",
  "key15": "4UjXRdpGpAxpk7woU3FHYQQCQJAomafSwkqtXCqExqXmjRwLtQhapmfAApK83zwJrftpxZeHRy3VymvxvXNrW8Lt",
  "key16": "5BwuN9EETy8UBrC8ZSysAoCRZ2oxoJKNDAQUUPsocaW4qXPUAZ3yEU4M3AFuwQVCoBXkCPtsux7CVmtQFUpnPoFb",
  "key17": "2b2Li7qFnvF5vTjJGiN6dkzrhgFzcmJt7haL1Lxu1uHeojsWMmRZ4H4UfMMytScuBt66zce3oCUkiZ4XD8mSMgfT",
  "key18": "5DrFZJQq1mir8P7ZCDwqLYBS5qcCJ1raj3JGnP2RBYw81ByLdoFmQnEe95WxGkCcLnitG4tfLZZubMprqTuM11fL",
  "key19": "EnzhvUPL5KY7orV3fxyBkAonCePgDLuxzKUX2Pz9VcaHeS28KfHCuwh6NtCq9sfi2GtfyixsKn5YyXCJmibNLt9",
  "key20": "2o3G94XKNnGAVFwabCKYNHfwWqG3dqodVxvWmyZADcadk91zn4QcAyZz11uHPuj2Bc93xoJbpXAkV1jwLF1zXbDd",
  "key21": "4bK9aBbWiuf5LSZ3aqtg2HMBPRG1bCSFJomYzj12tU4bPiJjw9ELtkzDFhQeMMuqv5hFdqDDiUC4q3yb4nMsyR5p",
  "key22": "K2fSk33KfN1q75FjKdqZu6DRfz8RnLUM4Nn66QQTVcjvKX9qCFHx68zeSPFA8jbee6aTUEGrPegnmPiB4yqXjMP",
  "key23": "2yLCDVotuKJXfXnyCMuRmjWwGtGNpJpJY1WXaaDqGtM5cfvuiLT4UxndzsMwWjou15rjXkpAkQnwauio8uEoPBDe",
  "key24": "xqPzMLFHweXJihWL2YKCtkLk8bys3WUcHHrxGf4DeC9y5rL85kwcM1EcFHatiyeD4LAuws83PCwCNGYiFaQGcHH",
  "key25": "41DfTjSrYVHYyZJeAFRRF5yfvd9My5NgB63bHghDHJQsEZEEVmLkCxMhpkZq6m77gNESgfti9YEAv6hxkuDn48VH",
  "key26": "38ctFQvtXCsgSa4Cj5kf4gEoT6pc9bemKcRXo1dCkWxyDzsNk735pYDeL28qyK3Zw9jR6KFQzYmJjNYzXgwzPKBm",
  "key27": "5hAYnAALyt2rkBZmN9LagjE1Fe7cpKqGNZDQUWQ1ocR5cicHRtW68eTgsvgEamWiwUd9Z7mncUfAJRwojJF2Q5gG",
  "key28": "suHQeBtkP5KWbwYCPjaaeQLGrXbjGyvvSwvLC5vazyQ5BAVt82ujahczoJ9CtCLTskibqe4H9mekEwu36kN1L9t",
  "key29": "2WVxf3B2vk33BzGAjW3YqyWGG2idEK9Rc1UmseNT5KHAbh8DzsQ96rMLgFBt4ruSfbmwDKcR52cKLdu7xXhcCTyQ",
  "key30": "67Qyygwz3XT9gpn12XJBWqAcvbMbGLvyLLdbqcsbmQU2UJestFNDXrGy3mHYzxc2ZSpob9yvXfZn9HHp8W3U2cAD",
  "key31": "4JDuSnwNz5UmS2javMDmiZveKMwkEmYKUCpq7sXeSuDGgLhDAT8KNniXEBiiV7htEuMge9CoQFL6RwHooZ3adbpZ",
  "key32": "58qZH3KZWZtcc3Ezg6gfd2wWAxrqw3rxE7FLVYHmSijZP7cJYU4TDyaa3P8TzN442xSVoyNKjNGyLUwZBgTkjU1q",
  "key33": "6ZGpKGF7oUoXKASbkhxTQok84FhqG4g98X243Zij3YGPBRAJU7uBSytJt6qkpRAyavg6jktDgqyfKfoabnNz6Pv",
  "key34": "5PCyLnbvgp4wKwtcjxxTZ6R6P28zQa7Y8wZDkPwb69U8b1yRdzQKYaNXjZkbtiYYUfHVvaRDosqzQhSjvGBJzbGS",
  "key35": "ycpMHRf5mJ6JtMeAR4Kqhn5RBaeD9QZvpUQ9Po9s7gRwpWzUZgWiCigjtzym1Sd3z5yqrYqN9iJevj1dAvs1tfw",
  "key36": "43PBzA3hJUBwKFoNCcipeVtRMHEqsr9qEX1DKrZCUdPqE3YyUzKRTpbzsRT195soxgxfrBkQsduGJDTb8obttNvy",
  "key37": "3N841CPWuCRUNKzRj338poRdE4ov4U1qSpB5Cd6uWGYWjRVdLPyPXjB883eNDnuuSU2sf2a6cpWoANoKcpWSdKDH",
  "key38": "2FjQbsRG36Eosd7kETfWiV65wzTmd4gYGLsfnfiXgj3GU9jByjz5Wp5smSRHJeoZTLMRnz4HaZGG8o8iMGbWwEG",
  "key39": "51F5w6edwKX8m9AZNHKMo1pzwnCPXJg58BhWDQUNVf119ALWPMsdKiKkUpqmnKrpSwzBEkqTPmA3xNJRmPuJHNFd",
  "key40": "2sdB5NA6WCyQ9moXiWRngfirneadhsB225vqLQpxwJeb163gGeM3tb3YR39foA7Lqb4VNjavy17B935QdwKboSVy",
  "key41": "3jVGU6sr8osVKSunLQCsLkUpxdWCPpni2o2YBEm3PB6sfAjPbeaThXwf5zpEfnrjUxWfPTUTiZcrAX5oKXAJwVYR",
  "key42": "24LACNAUZxcrvm39otoMupdZN5MfF9HRusBU4yyPN8C7N22TxcGtsLUxTcadmsKpk1wHPPWY3eULLQK5v17V7UPU"
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
