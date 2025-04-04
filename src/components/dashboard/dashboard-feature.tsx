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
    "efC5wqMBH7WJyMTeqU2aYRunYaSxAXRGuntRePgUoEPPkW1KkmopmmEQbX1vTHeYX3Zrt2ca772oXJoxQ8W2TJc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ge65oWksoTaSRHRVGTfL7QrAripnhvLzcUpT3Q68aJpjUeXwpqdB4FpHpc63XbFD4zf4ZQx6mnC1FqjLLusyB13",
  "key1": "2aHH7B1s2VLbemuhfGucfKRVFFiqUNCyJABfFsUcWqLX9NJzSJGHHyPgGfGnAzvFP8i1JQRbGL9RvdfebFPV4Zqs",
  "key2": "66napsYr4kZWhHjAn8Vxio6ax6BQ7nTHmd6fGqXAQXeoL5ncTh1trwhFYeZWocYoyshhjQccLiKUMsTHv7GvEWj4",
  "key3": "4h1AAyHrwLhvdUXZXpAz7cDnaTKEvRkfXcvDZ88fZYu289ftuUoiBVMnSe71QxnsPMwxsmLc4eZSNoDssFwL8f2o",
  "key4": "4DxmaJtF8CDLknSyqPMqsqzD8BgPRGs4Kk3EvYLAJ6gQYqyVDhL9Q4GDYJ92FW3f9mL8hMdALidvbP39WTDjmgC5",
  "key5": "59jCg3rQ2mNL3C6mhiuMJjiFHFJVj1DbNv1H4zUbA1t3Xr65vGdcenHtsKeX5jg9EC1yvGxXWUPLqToote6UWfV6",
  "key6": "4VdQqhrKgZgdQj1633fYczcCoy31L9xmq1xRkNs3HxPzXD4eQNYG7jJmqXXkVpAmtP4Rpaz7g7tmcNNqWge6ss4d",
  "key7": "2QcAgYXhPqai9FnpH5RHQMs4nZc4w5dehvPz3hdiJFw3PsgUWhPsZPQpfocYHT4RVHuGHrmtbKBBWtg6H7f7TP4V",
  "key8": "4SV3ZyFwPBCrY3hFoqg2xRYW1pQJZzen3ZrxnxGtJvLeJUj8z3YbwxtYkztB6Mx7gCx8zFAxjGiK7B1VAGSVKMxr",
  "key9": "3gKkMLcxkdYU75PXfPdUQsBx5ZnmL5bLkZcfhkrdg1qMNdWDJtRTmXMKp7EWMswCkEu7phT63xZWQXLto2uTETwE",
  "key10": "XYG2MntG7aTJ3nMeazftU5ZXFQo1jQXk2cbrEDiNwb3gzCKeyyTVHZV4GvKHc2RAY9f2eST1nZ3LTdXfr5LD8Df",
  "key11": "3tpqowscwxQ5yPNMqB4H259y8uX3zK2MG8ew8oxF7TxSo2d3NwBeDAAVaHFtRR3ahhndqMHkuTdtUX4TLk5UqdWQ",
  "key12": "4Vqb1LzEYHnnHHnW6g38FoaoDZ1NLeadaDedcaqye5FHbf87bEkHjrHYbZTxdhJzxC1rsGS1QibS6vVD5mm5nH94",
  "key13": "41HmknSixX9M8BJ4nETYJX7Rc3m8rnmY8g6JkiRHSBEyNZmFkHTermoHPi1za1y2BQ98vAY5NnoSHNx5Mym23tG4",
  "key14": "4jCrDGaRinQdyXD7zXYp4A8rocZmTef8L6VLDbe4UXtHYwesRSznZNewgaNBgMir39LjWyyEaNcdMKMwutoc1GBh",
  "key15": "61WRGeU39B8fsohBzBxKkBfoMog2MFcsvPdSTSVA9rQRHxXRaozdsuaNWgiYK7cJ25HdZpAgiW5t3jQKrp8PkwNt",
  "key16": "4epyr94oLYeE3QbuLHehupjC9VAJY4tV4u7wtri1kyTkCCW54x6kcWvheatGo5KgTdwt83EfUkVAMjHbqK2siKXb",
  "key17": "5wMWGz8Nr28hQasnf81CEuG1srX5daQwMdvb4WQDRLtzyNPf3eXLq3Rj3tGYqLqJrw6KN9oFm2sHErVGBCqNLPvx",
  "key18": "2fC1xQUy71mnw8599G6HBHRGkwE42gKKw3jXSVnDA7rxYMrsQZJBjp8HGkcp452xgc4aKcV5DbmD5bzmSWpvRDXm",
  "key19": "2SSrSXS5PZK65QwpUxr9K6pwD2JUixKaS9sSYfTF4YRSc2CVEfh46QVpqZLozA96DduhampBTeWVksZcQvccprsR",
  "key20": "4WLFcA82HqvhB78uuTpvPGoPEAsgYrSSKcXVg5bCecq9PWj95NwmXWUv4RPPh7x4GCJQpYEXZE24jY3qvRGCyTfb",
  "key21": "5cze4d5LJuk2GBmdn6s8YssRVBvH3TkJaeXUXDvGJb5cuVqrvSGSoWUdEjJqLrF9rnghRuhpfZrt55EEtUGVtWXR",
  "key22": "2L3yC6rhexFpqhjuhf26rnrAXHtuRSwQbL2Bne2qvfFcXQwWSeeGhHHPRTm5jLbFc6WXSpdjNtyvXeTw1A2ZJ1pG",
  "key23": "3bCEVtHcUqdMpv66ohwWbpfimqduRcgKcebG2H6weEATJRKaDVKdgYwPm4zkbDvVwS6FYXKrinjMuRiGzSkatUXN",
  "key24": "4NJo4WChX2StrC39fJHdCm5BbDiKn4k427dBpktW2AHkDuQPCFKiqfdu6g3814k2srq2BBDae32snFP9WRJBSq3b",
  "key25": "5J5sLE4nFEfj3HDRr1tceEwaiePYV1Znp9w52s86uqhG1VY59PCGpM84pr7PLRBbckEci7rwxftH4cwykM1mmQwZ",
  "key26": "NYxBBwKmQZzc47RWTsVTC5xRfozPmQsEySWQDYNoj4NmqNBHyF1zCpxTB1z3Bphhim8bSK66yPMJtnb6QFwVUhK",
  "key27": "3cbavAydjf4Jqf6btZdQD9KKoheV4y8ZhpVpVeXtKKzQt5vg4eiqAQdzbFY959nu911W8KHWHkQXPv6XTdLQXvAh",
  "key28": "2fsuAu3jBUAjqABAN6v1tiKZDYj5EDvdS21i3EKmsFC2DaoMyGCXbnA2hdfoC7PqvoDEwkStp2hNfvnq72mZgLuB",
  "key29": "1Nu6sj61TThYvA6UDtuegbiP5LKS2M2T8GdJgKJdnDAfsD9KqRfdoMHboDgSYn16n4txnxBGU6MyjvXqreoDxyH",
  "key30": "2ZiAHHa9QwtpHzkoPqbzHa2PWPSRmnTF46u9ECWM3ft54xP1wXcgRGh1VcMpD8DSucvwGkFkqemEE4fY9NdvUmPT",
  "key31": "2bFSRRpimcER1ajC8imDvis1sf5imRD3hF9qP1yReNEKtd1iaESHDRXeEZExkVmFRnwsumnqySV5hgL7cVAAp7s4"
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
