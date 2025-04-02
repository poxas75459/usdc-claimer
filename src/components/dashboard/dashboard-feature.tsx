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
    "2ixXB7Z5M6dRM9TtkMaGxSKoB5HApcLCMDDj68ZruTE4PvrChZy5mAsnWVF2a8ddgTby6TJLNJQoSkXwEFxoUrAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vAK1h17hwTTNKSkiqcKN2LfEh2NyR1viM3GUXHa9JFUVbDURQH9dYicnF1qpSyRVyNJTTvKeiCx8jaKK2oBAxqS",
  "key1": "5shZANN9afy8MKy8xQZyX6ApjzuoPuCNqQdvXqU1oe3PaC321nfTrXyqYtoYaMioogGxnje5KHvQ5gjDhAcQjBce",
  "key2": "5dkTAZ4faRpq11pvkZwC9bJ6PHHNMTQsu7hUZX8xDYKQoMjuByFNLiXDCHjCVP1EBfXDAzxQdBprBXKbku6R7NYA",
  "key3": "3dNbgmtnqqYGKKhF4zgyp65j1CFhSqvQYSUoey7vGU3aTKS1bZUUyNZs4X5ErTuotFLTqoKaPjFnGWUWMQLxKXDT",
  "key4": "2EnwWehmMY1UJsidX8Xq7v3KykpyzXD3R9QuL3SVwLxm4C6Pb1W3A3gtNeK2hw5ViSVJErJCSGnRDhraansMc66o",
  "key5": "5CwgUs86nDh6AYd48Wrp3j8S3ugSx4VDGZcu1TxCtPaeywLdsgns6BWMMnU4JsPn8KVKV5dwpYgrBLMKL4w3hyWK",
  "key6": "2iKLKoVdnQB5Yj9GF1fmf3NDEVG4Vrm7YC2hYKBWL1BTMKk5jkfegX6v3hFdxkArG1sfVXA7favN1qikky2hfdUr",
  "key7": "Cg4abSbRYmXxkihRmsmU2GgXPVUES89abz6HrTSAvgxGbPCoYRbneayqQmGC7vofqw34Yz27dKzKAgfekpLAwmL",
  "key8": "5tn8C6jmCFPFk7LhFtqeg37GCb6nfpDhyTetmki6ZdSSXDTbYYVAedSPNXH686cz5DU3dJ2N6hn8vee45F7XNLyS",
  "key9": "4UoB21aVeprY9PcZqHkEUowGfCmbJ6KJeKUw7hoenbmuKidNhk4eeo97RzhSU3rUdsmwmKdHTQtNebjVeU5Z1JGu",
  "key10": "338RpyBonvTR7cxQZdXysAGTb2ZxyPYxELp5hZrPLvrQD5J1afAokK6GnRBPMyBcDQWrNKeD7FDu99Sd6xoNLETp",
  "key11": "2Y3jSmqA7wbHTNDXHfVuSk72qcwXakTxs5LLdzHo9EytURQvMzmayiYxF6UDXpnVKh2TrKTbS3ft9SmrwS4MAzMa",
  "key12": "625zY2znVjDArKMJWxvPaGSDGnWmEhhkWhqJFBox3UYQgd3nkyPT4zcFFFviCEVRNcbQHS44Ax8rzgfhKCJWtAAb",
  "key13": "2FfUFsRv1DmYh1MGUFCVSs68m5j3zNR2C8MN137VW8fd6R5kekYgJTJ76kK3FufBRVNeWywz3cwGH6Rv7eH5E6UV",
  "key14": "3H55caGuaqYm6qt1RmnsupAKQXME7y3hrXpwRpHKQxqvxFVFksNMJrHbJq2ioYEYB2X4NJEv2UaJXQAvCVDq3UgN",
  "key15": "5YxbYRCYYKMkxxi5FgfDMeTmqPeaFp2n4aSVc8aDZRnJsrMj377hkG7D2Tck4MvZQA6CaMVUW5kkP3L8Rgfhb9af",
  "key16": "5NuQZ8JSNaGNtG6A8RgPch11LJXcS76BmtEjGDhEePKwSE4iHaQr912RHageSwTiPQPwRfUr5ZJXMh5pGL9kTZB9",
  "key17": "49Sp65TApHQfBQ8bJxL6YRYDDa6cMtbkBcMWA2AjZAegCfxBAQt9H6uhCrSVGZmcgPkLyESMLgkb2naiGSsWpZTX",
  "key18": "4fZH8GwThJhsf9rYCNNvViRwfPA2mk5Zgt5NmnQbEYoW9AygbmuGDzf771XFnvF8n8HY7CQ6ehsXP45mLrFAx7EZ",
  "key19": "2ouMrmdrn2u2NkTt91ktjL8PDdkyhfbnJkk5fLncqj6XZdUER4nXXAcJ2Bz2wX1PV9xENcKMRELvjpSVittJ2tfB",
  "key20": "51KYEPheND4hmZKCe2UX12TTH8qYi8MK5LpnNiao1qMVrQeqv7WJe4r2rgusGXmjUQGj7YcTruqV84Pm2BU7x998",
  "key21": "y9xHesyu6oDfuZmoQTJTVFRZLkJrwxt6y68nqeMvkkvbszpgmWuR227PjJCURBk3na9q1dAAo5L3bFdnFCmTVzA",
  "key22": "63uEsfokWHjStxArqnzKeXnKmp6KJWB1Y8BMufyMReJKbfL873SwssXVEh45N7hmTQwbBFtJfu4ZhcidQMn7VaZx",
  "key23": "32aPR6Ufi1mvAqmHeAUXzzMk4Leg6rkFCLAbDxsKD43EAj4VAEQcQuTTnVez5kxp4uf5o9NQsx1DZ4RAPxUeLPmT",
  "key24": "nhodmfzXq6jDFsSCrNwwyugZcPm6GY7PHpN2zPSJPpBMZf4w1tWVhYBPSPRpPzPreDhR7zWEFGsoAzTwRJEcEDe",
  "key25": "5atyMPdWDezWsBFeBz8ydc1LUwBm8p3xcxMR5Sj1aiQ8qd5QpTNiSB8r4pvyS2MJhNGVe3HU6mCG9YzWGLAUJ6wE",
  "key26": "4DYhnNmQddCdD9UwjKpdk89ZiZ69B9Pqgb1CYFP2WtUWQtov6a3y4kffnZX96NfMvAcNc3TTjdh7zoTpnoYpbo2e",
  "key27": "3uLpxoYwYbnaGKuJk7qo418jag5LMLHdhCxYh3sMuzXEhnkzrhesith2G2fDVXWbT1CjSdAUUerRFN3RMLGJBuS6"
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
