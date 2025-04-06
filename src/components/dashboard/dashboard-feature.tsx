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
    "2o76oF61G7USNEUiSandhgqLoCGkyujWwZo89yFDo1dRjPm3Kmhr6erDTQ73vV8zGkyMkXpqH3Gc3TML5Nc6rj1s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qgzvuD1uwHsgFbXbEMHDXST3ZNBcyV6EwDxyptxiubEWFCLPQSDxFLj4EShNnUfhGuN8f45WKtPZUKg5ynzwnGb",
  "key1": "WuUoftXLbmkhsCzX7U2jECycNeDCEdt4FybFfmL6yza5dG9kzND9QBrpvTziNg7Dz1qvheT844YWCqGVJHmfZYh",
  "key2": "sFxQopaidgoNx3fWeKmkAFAj1gW8tEQGEvLXfir7L71jHs63em7nKCKvZbaTAgh3T2WQqEKok4xQbV59MkDyz1N",
  "key3": "46Za2ncN2EXiVSA12BFc1R8eJEbUxLrZ6eQLLz5HErNnPZCXthBoijeoxtCW5ZMSAYo5S3riqZtvHgGxCv1Ek6xv",
  "key4": "5Hekk71kXvmYgDmxfvgbibGa2uNeGAf42qDVUTYnDysz73kGKFWQaVDidkvQf2f8Vw7BXRC7LxQh2PvdRUeLmRru",
  "key5": "3ZQhcYtvp2eAsLnD1Y5XTZqNCdRBxmiLhruGBT58xbgcYBuZiJt1mh3XHURCfje4MPN8c9F2p4WeyVEoQNpWF5zL",
  "key6": "45EdcUAZh7LSWmR7dEWwzu4AQskpxnw2BfPgSryR7E675XeS1wDT1VEe2kyWZq9GUCYnZn1LNcZT15RMpo8pz8Vy",
  "key7": "4XpH1PxYAYW8FNxkKQ3PZbcbMewowftR75DHh2m9hmVKytm4JDQaNDXggPDPfLkf9XFhGFvaHKjeUb7BWEyNK3HV",
  "key8": "L2HHM7TkHTRv5nk7qteTwLLnKR5t5Fwpa3GCRQr3JpQT3BpXMbEJebuufwpeapd96sBJxfbpaTVKmu8UGHqrqQs",
  "key9": "9AZ3Hj88jZh2f3EEkmyL8wjYBgY1UfEayFsfcDrTLZGnZcDZEUjCYq3nehQfU5kPCBzC9bkxZAViaWhtaZuhKdc",
  "key10": "HsA2qU616t5Yk61KSY9e8dBUdSLhYpePj8UyoYw1Af2sxhBkzvZroLaD26XCHp52xaMu2aYFwxV64HkCXgqtMJ5",
  "key11": "5943BL4kQQWVonPbgwEvyDg1xAjj14ks7sjZhVdT2Pd9YwJFmwyEZSpoJSp25US5MUPCdNKwMGDZmBfYGmEG2dgC",
  "key12": "cUU94d7C6xE9uooUCZkm6dkSeiEb2AWCVH6yvdQVErb7ssyK5SXXxoc3UFvGu5tqDkfEQbVRkiabH5tjhREK1qQ",
  "key13": "54R1D4zq4exmR2PcWHX8FBegPxtakySgSFZcoS3oE7JihSPEE8e9Edj6TUHjVszBw7bV4o2Lo1GCGLz2qXvci9W8",
  "key14": "5r7ff69SzJF69grRpGVwGyRAjrDCFnNVzS1Bo32NZWN7NLadZNkbz97cBHkMfa8b4r3jpRjsk99afcSMzjUsn8iN",
  "key15": "PpjAgfLDXWnGfDoieTRTjZeZNyhiozhxiKZCZJBZfK8R2qa8J9whEpkVtY3B9xULMmG3pMSVi1a4JSHm34Lqymv",
  "key16": "2CRDQCHBz7TsGmwKSv3JHc7UQKeBxTYKoR3bQ9W9sGman4FyW1i4JnrXwptQHZnpeM66fbCNPcn1m6Nfq9uutV5a",
  "key17": "46e1Hy9ixXPt8gRH45T4c2USzxExYMEAC2Uaag4NsuFELHTHgo23tAoneU5jrqHtwFynsjZvSmuzmnymseexv8b5",
  "key18": "2uUYCUJDq4CmBQtEgyh7AhrjX39Md7YntZsiKk1kxFwfEVNTTM4UHSnnrSVVn1R9kTdAZD9hwMveZdNiHV3CzY2n",
  "key19": "3QSiXXCpPUitC5zWrbBQ6cxhQksc3gjimHSy9rsPerFN4xLsqLyVemEwWwxQMH1ZUGNMSWp41ke4ZtWhH9QfUhQ7",
  "key20": "3trv5CaYTJvDZax1GJ6eZDp8La2eMkcDH7DKD2vSm4nP6GPEF4AGkgf8KrrnvtZ14rmLDjCBSzUpR6aSM5YWxgAP",
  "key21": "3jdJvB15yJVGikMEpsVHCTwvJ7E4wt2ogjXJbxGMqojjzBdu6TenPGXhcGCacsCwrCHeiJT1eRkobZrHtWJMSdwD",
  "key22": "35NphnikACFecS1e8bRHXkvUbzRRFcAo2Anjy1iPQK5HtE8cg8WDFUGpuFvzad6jhEGUV3ohiMYAnBLWLGTiQuBd",
  "key23": "2qUTRhdBLZkyVjQBdgUANpAWqN6GknFfQ6Ae9CvmmTRgkiuGVM4C1joaz37qNB4FxKXKaEym7AFH2GnSZq7cDUHq",
  "key24": "4NdMWR4TDMNy7g4Ue1t6G24W8hUmGYsYXeg9rt4KB7dPuHQqLnKkYeiaPSN6wkJP6M5JXZ5WMszvTbfGy1wv1H2p",
  "key25": "o8JfRgFezXSMLVh8PJBhkDsDCciQg9MbmpfRqDbCNtpAsmMgnjniEWftXCvQ1tABr4XVrokKXm4TpzQhqyGA7YN",
  "key26": "3QVADQCYk2q4pH4EU5vAzPX7QUD1Z1mWQnoha1D3ao7wPycrH82pX8k8xsoiz3V9briGp4NvB7b9tyf3DzUVyEoP",
  "key27": "6Bwas8Vs5uZiy1JzNzK9t4sgNHsUYaqXnLGCiVCimSH75xJS1J8LmneG9fnoXt9v1aSoaY7kvpNnQAD2jymVzfK",
  "key28": "5KfUXQaA7xcnRaJoNizM752Tb3yt3fZ8Rp7HhB2hVgYwuYjQ9ECvdSkJMJGHccGnvPVJnZnyfnVHDL3PEfiK6cvg",
  "key29": "37nEcRdxBZp2NLJcga6yFGyF6Naszqc6iaexaLqSBxPcyt3EZJby1EULN1jdqvVRBtiNdv9y6YvUT6zQEDddiYtP",
  "key30": "32Jd8Zm2XCcfi35ARDwBRSpHVb83NrUao25BJHMMzrzMjhA15THhSGwGjijFApdgWZZycAwZPPfMU2fYegYeEPfX",
  "key31": "5B4SEAdp82SrnrGitScZgrTZmA9M6oLqdVDDaP4dMw4PARZkoiRomHXEuquPcwkX71fTuP1HYD5juQpSrjJREQtB",
  "key32": "4cU5FCWCo7c7FgXxhVH9tgC4vQQLicGfAvoDg8ve7LH3xrR1TFJSjyjrJy8P3me6KjRKeE1CzLT92Rs8JVF7XAHz"
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
