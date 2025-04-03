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
    "nRWw1xtJVEsbdTQkK47nk1XFiJozgQRF2WJNP9K64QKdDeur7CpdWHTBw2nGr2bck83XQ3BrovNRvkAVJLv54yC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8qftt61cAYCv5kQ7CqnwcyNpxaG7HwvHNm1PcQaqEnrDjJVFdPH6wJV3Mv2b8dVeZF31KiJYjpkh1ryAVgtJiD5",
  "key1": "255BQTTGTLZ9RjiUbctdF7JxJziajva8nMqCpbyfE1DZutZw8PXnB9LhDwrFhRzWKpW77xicnC5EnMZ8LMeX29gv",
  "key2": "3rFmvtoH8A43pwMDqRoSNMuu9YowcJ78ocpM5mLatAnuVk2TGU9dzh4rnTTd9CX6kAWMHXhh79KjLPAAck6TP2Ve",
  "key3": "5B96dUJQMY8gjqPG6ktoq44HapKXg9uerErubWfrBra12nMw3t9gymerUPEDUdM19Dn6PUGs8VzAh5qkcCuj9PiM",
  "key4": "ZirhS1firGsUCgzu5t78pmMQRRk6UpPtmkv8nfpP836EyLmniKqtgmeoDNfXKPgLbBfr7vUKR4pK9ksSn3dvv3Y",
  "key5": "woWugpGTvHkT2KDdQ5jYaVoe7wYbMXkXt1Ycacict8M3Z3CELwe3pRk9ckLeWgArSjCTP6uD1FURx1reqU5kLoQ",
  "key6": "L28EEjwTPWMxXsct9RM4NdKVv1yE3GSJ3fC8MHMNzc2oJP6BciY5YPSD5XCZ8jSF8ho6QN55Vs4S3L1zcqWXwQR",
  "key7": "24kWmiMzduppJrVX2dtZRjetA3ZHMKabfdiBCNuF6eweyf5EqTQ39K5D7qDdtYZA94Dk6mSmkCpNEKRJNE5nhs2Q",
  "key8": "4gjDnYEohRrSwGafjTmRPGq1U3vkq2Ng3KTBPagHTWtPaFNamcUKBN7LjgRVnCubQ5B6uG9w7VDrc9zzUKp5ssDo",
  "key9": "56bmLzCVnzK2uGXNhag3fJxXq4tMP9xZutzaxMSeQRJnV9cgvGPn3TMUVfYL4vf2QBGbxfefRcvZHFmsN6pMjuqc",
  "key10": "5LACqc2hsVNCk6z2JTiQGcT6guBfRpkXZvmpT21XXqABr1FdXdnxo9H4xNTtKD99GS3KC9wLJKvnoQncz78PzWqG",
  "key11": "2kbh7R4G2pjDaYrbAs8nDkowKR3N9JguCP8SPzYCa9Emi1CA8JCsnS4Kbin8ntq11dPtKWaa1BLhfAvVK71UtU1L",
  "key12": "zeojErjZEiVquwYXewhMsuNrEkaUhvVffRrQaEXkso8fh52WhMQVs4f65WTQrkiPPBD29hrEFphYDKK9Lw4xgsT",
  "key13": "Vmbirwmy9HHigQTogCG6o7cPYj85CcLbzwPq6ThzXhUbCSo4NbPSqoGAcRC5iniVA2cHwQuawthGyXBbHLD8ftU",
  "key14": "5StFKSiFQqy8pCSkXhiezyHePEcD5HCi1DU3t2FLQAK1AHJuXAnVaZfzRfLqQJ4V8gPYb5idDdRBzNXpwaxWRhkV",
  "key15": "4B1dbo4pdUAuVVziqdeV1wrzBhQnVjNomVdzdM73gDB8ufJ27X4Rbd9s1P8SSVJ4KRAGmZPeFZKUTwGShnFEV1wb",
  "key16": "2VDSoufeSKsEWYjKvT8aKT1ee7rzwHDojWTPcwXF1emX6aTt7CAcE9CczTAKCC24UxN1ThANpur6ZDpQ3FHwabzu",
  "key17": "3PA2qW8qAPP4aALpwgrcWLXw3yuxoMuWv6UyTLiC3Ue9CCnUk4JBkUDmeFqh3kqgRk4xgcHjEcqgd2NHEp5Wahyx",
  "key18": "g6gwsmSmG53s5fNCj8brSbWtEt2zgVUdaGJgcPrun4oWfzRku1YqfWzfne3as5d9FJnnWWFamg5wq3MpjRAueW5",
  "key19": "5pfSLz7S6zeSigLxiD2Zm7R81W7KBakhfqosVmSjV1oDs3P2fBAPrckuUHg1N7EJzSKysnkdunmsMg8PrxVrG4XM",
  "key20": "3L7g7sHjosA3SDeGJuWRKK4myd65JtNNhnefjdY2Ni4w6VNmn9efWu15z7AkejojPjrABxb8zaNj37gWKCHcj44u",
  "key21": "3XBPbxhBaQ2LdLytNPmLknPqQXzdYWbwDFuACuE3gnux69cL6haYSLzWTgZN1k568FucVvmtKvjpEMid1S3oVtG",
  "key22": "2Xar21mehViiDmZzT9TrrMhGCdkhfa3awuy8RT9zQFFRoAoDgXubaantpSpgvUj1tBv4cmnWoGAy3wZzYevXVnmk",
  "key23": "5cqXgyQGU97kjcFfVDjw9sXADSNzHmB9RpMsF2qPJdpo4J19Vs1SLcWMfXQgZXcctL7x6VXzgsHtgVh26ptzxuNH",
  "key24": "34RTf5iyZnUfYgoL4RtPeihJRJ4zQSnCrhbKx25r1VBYRR1MEXBMZsfNN3poKPvvU8xSqWQvb6mrEmRUuGKhJa2d",
  "key25": "5rgQQMaeiBuajMAEbMpr43yxJcLB9x6NJtigC96SAsvheueeWtoX5mECuCWQ1Y6eq2fED2YyCgbm86DLrPAjetTE",
  "key26": "4ciY6Pt79fS1hHkXEMGof1r4zrSidsgA4voRX12VR4rfidYGpdBQ3SuvrbbkeeEemHnQv68shxGu6agfEv4RksvR",
  "key27": "59LxLe2UudJGxiaCXDtuw6EU42n5x4RhhSAty9va5MBdVaP9UQxp4PSvwbHURPvdrW9XjjSzZFQEF8sgZHV6vEcA",
  "key28": "4kKEwNwYsVzrDHNYECTgoTH5xcF5iJkpjKGB7ckAiVhqJnXXNW6Kdv22V5AnXUR1e273bc3hgL2s8bTTNNEY1P4R",
  "key29": "5jxSZus7LtTaR8VGTk6JZQAdRdviqPFxNs8jEy7k1KsmwNcXnWpn9McaLqNNnxJmJtqivYKouNn7MNx8i44Ffp1R",
  "key30": "4Z9kWdfAmnKpbguWTaPz2N31QeMey9rVP196VpCd72p6yFFQND5ZtRnmcc7UBXzR4XMoVmxTSGTJ2UpuHsaL5fdd",
  "key31": "5FZzCgeUgKuMXDwyRdb6V7Ac6M5uRf3Ffaaq1HiCfVvwBZrjNv4CZpShoMeCFdfdC3aQ9au4PhRERNAuFGjsneBQ",
  "key32": "42oreQAJQofFrpuWwRiKi3ocvjLt9y9omzoSb5RzZtFATMsMCcuaqWv38Z5BT7v6MRrs8X83N22tGMnbvXvzACbw",
  "key33": "5LKZ8dMdbRoTcFzHVDB6pwyYMH2fYZnZgZkmQk7696UHmCWuXPW1J58yY7NwZyxXNbzQ328fWuKJLYiWpw2B2aG1",
  "key34": "ycAvkd99btGLs53sHcGbJSVW3DabwkuNjJnoa8feD8FkNHEyd8V8EWGBvX2GUwF7jkQ7iXzpYv1KNWhoday3Ard"
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
