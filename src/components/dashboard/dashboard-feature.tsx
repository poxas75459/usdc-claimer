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
    "p174xT4cEVjjGHxrwh4pyoD89qREx3GyAAMN3K5sX62HSvVWU9Z4wALsTqTbGMaVbvsyYQmDFt825TrpKSez3Q3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u8j2n1Hr2kh2ijQJ8ZGHmcaqznswPnTRMwjiHadKo3ZQD33yucsYu1zKnALmiSBtZkdvTRCyHiDSPhpHN9yuR3U",
  "key1": "5LzpKRCckZjvRZKruep5dtYrpoYUofLUsmkYNjPoD9WLvyTKbt514LJ4c9HnNX8XU6XVme2HMnPBCao8p1uZTXbi",
  "key2": "64R52F9CKyEADn9BWn9g4JJaFowWFd3iJ2QhiYHaw7ySjyX84BzFx2kqzs6NwrGvNeE9icdbWwJVghggQpmXfDWZ",
  "key3": "4HQLz8fbXMVjnLmSZm2ippFPMGghRVaC8zdEPWZ7yQ8dGVTpCRYiJSGdQJi3UBjhLaMsLRfqd21mCBvBpgA6b9M3",
  "key4": "42swHg8hUMVwJpeW7hmhjJ8XuwRr8e1kFL4oQbqRwtCRVPNLrRWct3LfRBQ5bdmsN7ocdQb9RKhEWyiQ8ws3HfYi",
  "key5": "4A9bQkhSry3zVDyisjFURzMuRHBnVsyAvSA21M8LrL2dNjG1gUuwFTy317GnLPBpXfEPy7qmCEDS8WtWXC3m65ri",
  "key6": "5zitegcqruHdSVsv1Xb5prh6iKKJ8owExfMDUTQy53JYWyofZeey26EeiHTKKhqKhZVr1gNb29kvmEELXAtRsiRb",
  "key7": "5nkrRwsCyw36gfUbuAvsW82RBmkFnyXhQXmjTvHnvJV4HyAvZQg5G5DsNBF5xqXtQYeiXdVqyVrFpx9gTmteHLA8",
  "key8": "4GYmCXGPrKYbtv3R81RPVV75JpxtUEDDoazaZv9JnK9Rb1uC9BN7jnxKZffcAwYpFGX4hc11bvaPo5dPPHZpUqWD",
  "key9": "2mXrEn3wUoE5LnBJSZ5HBjrtvV9PaXptjrsUJhSXFc9mrp1QCbWFzFCvEd1f8jimkyxBHc1sX7tCS63H5rRYMtn4",
  "key10": "3U2mnpxivVgjaNHoaKh3v1VLNbuAeC53VHbgAVsQ97khTBC9QE8QtyLiGV1HNzoAFifkpXsbhjc8htQsYKPgTDZ8",
  "key11": "qKmF4TDEVeZsSUcgQqZRzEay3C5XUCrtxTtCwABcH69cPyNmmzp3Ap3FVMsTRur3MLikXc8d79Ssg7kRks8qTWC",
  "key12": "htbcUofPQuDSRBqnpvPrJsjDCmPeNyAovCiYC4q2uCLj8T3vag59DzyGFx2333y5qXfAMPwJGGqxAsYi7957ygt",
  "key13": "4RXNXH3LpXZkoebyr4GxFDRXKjnsDX8dqcauAgjpwou84wtquu3zuRrNFGbVHZBrJytS6P7eF3biwm4cNREmGoA9",
  "key14": "59BtcHeM14NLmDXHytxd4eaVjZA3y7dFkwNfn2jfNtv7K7Yv4v98bxHKHxtdsofVpp3Cvf8JYBRQDK7p2r2D3RUz",
  "key15": "3Mv4Eaq34yzmb7NzVagGxLBaUzsAQDFdbjHMHa4o7oZpW7KUexgiZM9xhoQbqNiKD8W2a6HuQyvCV3EiuzSEA62x",
  "key16": "4roXv5vu6KmJWRCrPEAS2PBMjXeX79eHJUDT89knbopS6wr7fNy6sprZpeGHCwQn8SZcvmvw3SJCsnVVrs6KkzLx",
  "key17": "531BueUFarmdGbAiv2dTPu4xV9HkrgA5FqjqijPXwdg7hM4ALRyV9746f59oKDqE1u14Mn3ZuvqerpraHfh2Rx5d",
  "key18": "4j7PE6bUbFLNqDLytCUZqZ9d2VDVNLQMPssbo2tZ5H9Ear7AjdQEtKJWco4BSfgoh742wgsRG3cpdmBEqj5MHAHV",
  "key19": "4gj5Scnb3hkYLvt5yw3kULRPYC444fnndZcemKeV7MYCURebuqhsRowF2gz5AhpLeCHSgs2h9M3Dw8Pkt7JBrTab",
  "key20": "28MfDkEZ1gWHDh15SwEmJgMZ3bDeNjyopHPpbf17Hsy3DaAbxb8ieYcYmNm7D635SnXjYjgk1rd6KVtxM5uTeNt8",
  "key21": "gMB83aEtkxNzWaT9im17zi3QaPniNM31Skn7nSXjyCLJTcaTHQUkkVdM7EHopfeNNuaTSGTrrjYibGXxf95c8AZ",
  "key22": "4m43oFTTUKBffn4VmBnEZYEgnT5f9uFHmtbEaKXZVdgM2dddseaZrSFJkRs46yWM9isiM5Ko7iaxYAaZtGpH1uRU",
  "key23": "4HPJm4PA61cZqJjHw1QVZrg1ZrX5FvvVvdxmMJExgDoedULA5ft19PY3Cx6RdAdB4jg2xedVfnQQeRwcgyCiLE6f",
  "key24": "5bKLq575WjYTdW6kA8wPTE5yGt6WoP9XWjua3SoCP4kDSRcNzS5D82GGRUphzvyMuPrtBFW9qR8L7JFEoXHNyuwx",
  "key25": "2FhUqo4rKUoL4kjjAxpWE3FtEyDM2us987ELcGLLDnEW1TW1W49YZdrq8mKnm5WjuF15DiuLwEL4TKxYxLwBBowr",
  "key26": "wjgsErEbRzXRrfv44Djz4fivqMZBbujcCQqHUzGXSbt8EgQ5a59yWVfPupr8FUXgaq8jks1ZQrQozZpukA8GPjb",
  "key27": "3BAmTxGdcUTLL8xQLNNrU4UQMw8Eq9e11UX9CEv6YQpd1jng6mAtJ9i2zLmQKi519bHJQSUm2XsWE4MiLGUAzNqe",
  "key28": "2oyrZg31oPNDvVPgHW531Gj2Fn5WUA5o877EJTb27dDDciS3xHYghByJs4TMB1gqsqnDQzVbLXw5vjsGx5pEMYnE",
  "key29": "3oecnYmL7bcN4Pbai69gqjUTqCKCyDQ6kUJ4BHPad1hSEoDBLGVsPB8BAGX3ou6wn6kCQy8wypTNLeeaioZzGGab",
  "key30": "2aovGKWNKvfMdkeWbh9tYDD1RngrDthBRmGStEp9hoLMCtTzQpMUjZKZc1NzpE25U4W95S75MP7xe5nzt7vMyqWi",
  "key31": "3xrosiw2r1TJVAh6d61veWWkKA98iWsoSgrHvsJBBUPrR83KetrH5sDmAMstZPcafEDYe6iN8T8oVqBgYUZhQ5Wp",
  "key32": "3FAsZUpF2kdG7pjZNpUUTWFEDZmEqQjFCmYNAp1cM2i1mroEcHM9t2ZdLd5JzqoytxE1G5JyHm3CnGCprRcYaqa7",
  "key33": "3oHYCGGTp2c7VKGDBL1AZjRRX1sfQTsRG3iqSSDhFmrSHoQiJ29tZWFq9LpyK75te47CwTdcxJQnqm9sn5ZMwyHz",
  "key34": "XtZ1iithFjTMC7sP3K6wGfVEjGVsJTEk5LpqkwyDNejTsaiW3WLgHoceiTCXnpu5Gn3Ry3Rx9rUxLDtC9LsfXpq",
  "key35": "35mbgCKpFMrPZicJYTPsYhd3abSTYuBwWmGWBE271oXfcXrxBWR5stzRQLAUgvfUCnXTZrvAsppoAfJmGhk8nzmv",
  "key36": "gN2NTP8XvcWgyfDGnFkJsBfZJfFS4Xp2e1ErvoygRww4zmq6a6W6iFHSvFVYLTAKJ3KWrzyL1xqQHWGCLj2UUvH",
  "key37": "74FQVV1r3HLbuezk3Y3SJK5Lcqvgk6PKY5c6trWhMGGG5At4VShKZpkjWdio31YFFiNeN1WKMDjKgWnVgJiu41V"
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
