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
    "2RiZx4jeLMz9AGwExJ78rYDez3dA4o5eeTvoESn3e34Rc6YhzWYxFquGXnfDY7oTXuP7TGKMvoEfmigNgv4F9rhh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h8jy81AL1nQZs2L7rtHRYrmACuPX79p5CpcerNfQTEm1e7GYeKoCqJ861HXLdfBniVVuJNxgFK4V2mKqruKTLwL",
  "key1": "52WK6QY4uELEd2r69EGcR6YMecwuAwzGdMVmR8ioU8mmb2dhky3zJnxoezAhEXyEA2MxKkbLTnGogQqmcmrJKEeK",
  "key2": "4rC5YBKN1jLMAuWtcBVbcbt53hQA27SyTrnoHx67JMmZDr2zUswK3cGwkRGP9nsmWBq4zjdYG6EqPZKspwA8Zwne",
  "key3": "3aFNkfUrscvsGzPGqnQMYBGTHCs2RRyVBNaV8gRwAuAYD5BRgkfoMDH7QH1FztohdpmQczJgTzqTNnpwrh4k2BZo",
  "key4": "5nGh2eJ3pFL1AS2k3eopRenuPLg2Xr7tMyFkg555K8y8sQKLqziQF6zZLRoteGoEVMgqxPh16DtS1wB1fh6oXoDA",
  "key5": "2njpbEAiLkjqGSAU7UijYdjHaVBDzdykDErKBcw2Gm9APor7QwWg51JoNPsDkbECjnW4qiwi1UzWDCoPLeKzG2wE",
  "key6": "2wBEMWsDx4EgdbsPFzLPi4D2KnfpeTNYmLCy5VWDk7nWjzNPxmye7dZNnYzG5StP6K5ttTitYhQ7ARx61J6ZAJtA",
  "key7": "3479FBRwsUcT3K4mEYGmxqMa9e9PJG7CAeWFPNpBo4r4xK3fZZBJYTxnAtzhQViV1UonQisBVWGZCiBarQb9HeyX",
  "key8": "4yVtedT9AQ4FgvZzqngi3mqGvVZggZ6Ccm9qTVW1eAW87pxFuXcHdzjQMqmbw9n2m6m7xK6jbFVdtSqFw6bLKDnh",
  "key9": "155gErWct6SRPzm6xRzQ6effz2YK6vmsD3HG49qinYuBXxzunAR3YjtZqF55kU7TSx5i3nfRtk35phDuUeKbrtx",
  "key10": "55FpGMD3jgfqcS63S1rdeoq76oCSLmrhrvJ3fgujXaLaaictEdGnKiPXAebSb3GqcJvN1TUTqfpQZNj7qnbcbb2J",
  "key11": "2yUntjxfs7VxYfBiavCmbLSbkr3uQNZixnK7RfoyYCd8CHTcpGx6CmhGYsWJmsLGK7vHCeH7yPp8tBkCapye1rVG",
  "key12": "2HVhxrxjSsU9YYXUAheAjpPB8gbsLq7ouxVYaHBNrnodNdxAA2DteASTW5bXgaKUdW19Maf4Md8R4QKvsNkYzY3J",
  "key13": "4ePC1344HYRqFGX9qNJe77xQL2MCd7kavfXN2MFSiP5e7vrNVpcJ5AGLMmNd56k9Q2DAAZuCZSvPReAfrdiaST4q",
  "key14": "5Z3yN9YrSDQpFcGQ6VxyiTrvgZ5kUP17gttgKDvBxhb7AP5xTn386jDmLsfnn3aW4tmpyzVqrNbPLrjsH1o9fqa2",
  "key15": "4S7yjLfjJRTrUX6dcKQfTfYYccHRRpdRUr8gr1zjjQmfEgCuecN68GXejCm52sE2YmEuFcdLcHBY5m6EDEBcacMZ",
  "key16": "2cdBNfmKRzXwUmLY4T5nWZdoQAhTD3yF5Y9oCSJHrQ4ZSvidkJdeknFCPAsPoLYeJPdtPryYtm6R4bb1rfKSe21h",
  "key17": "4Tyij5Lf1StUZN3hEsLCEjZgHvzFChrvhNB3oKQtrAE1sHwAgM8vWHMgfG5xaf5WAuFWs2WgTgsBa6AqHvo9b3Gw",
  "key18": "29N72SAx715tPpmuZGxNZBKWRbsJUMTyUvgU6LSLwCqVtaa36dwXTvze6vN6VfEu3RhfRGQacHNRNYtjvc4ooCCA",
  "key19": "3TZwazFKNbvZveTt8z7xfnSUrYwheLAPxnD1JKo4thQvpq3fBMSjrw5eEtAGqovBmetzMXFqvt66fyTzN8W5JfPc",
  "key20": "4HeNNBohvSJFbagiUmWs8H9bdYTAmR4oADDtVLk2PZPHpiB1uHukHwUAAbif53JDKGzTNyGM35r3ayMaibm6D716",
  "key21": "RH4z5ZjE2cKAo8iwrAsGTTqp9GGvjujRf5nVhoicBPu8RsuUz62D7KfceEtiz24SywrhJBr5Mvve4JAypAHL4j3",
  "key22": "3y3keYX2PsFRUfLgVFx828DKAJ3m2GG34Mdxy7HjRojay3AMkRupN2niTrrJyDPqPvkrgw8U8jCBnhy5cbAgvnsY",
  "key23": "5nQiN2fFm6tGm4nUbSVQh2tZLa9qJTue5ZHUhBxvG6Qo5ngJ16g1P7g4ubLomGBWHXLyowbnkVZQnLq4KKwomqTd",
  "key24": "5FDf9iysoUeUUzbprtJ6gzBZuYDuuLRu8dzmQTBTehjeTNkaXCb4LGSzUii4FRvZo3wQryZW7ytuF1WMRozqksTr",
  "key25": "reR78nyF5dDk48pNevNumUvUzpi2mCT1FQj9TL4tPLPsBZhjxKgB7Nwbu6yueNgiLsrKrK66i2ZApSvPccfiHBP",
  "key26": "21GVp5YZBwt8p84b9J2vV9as6Aq5W1LqYrEHQBXZ6jMhc1s8c8axNEVSnvj8P46SLx7pxPcxqWBW1eSmtYYxUZcn",
  "key27": "5QnWqWFJKgEHSbTkmSX43qtp5fGyPKG5jvB3TffXU1keLTrtZCjmkMFb3WyqBxvWt4WbRY4yP6F3QZ6NQpEs7aeu",
  "key28": "2Hv9purH5Wx2sGwyFmxs7WpJageVtJnCfJ3qu6iJrQ6NsWsHwdoCmWC6uZFpLXbhzVTwG7bkwtsU36L7XYLjoZrB",
  "key29": "2bMBcC542drteaLQG2Zq8xHgJdkr9gM4m9BrmMWU1KYFYrQnQUYtCN7DtsQU8Mx4wM1Y65HFB7uaEEmJMwLsX9Y1"
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
