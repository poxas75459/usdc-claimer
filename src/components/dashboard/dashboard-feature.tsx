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
    "jHgujiCSQLoocGZpzh23KnmddenY2DRxovTwiLbJ6qjVLQiXqo4cAFrV7bH3CCUqYhnETJqcmN8tJxj2ZcrZU3H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NuLNpE9QyN21sQaaUHmPUxXpmaYz66693WdHJTsW3p2dnB5RbVWoFQvpxirsXkEAkgGUCjSmstPQfsDDKt1TL3d",
  "key1": "66WAryswVjmjh9TFD7LrsvHvMkNVX9U9tsNdCv2LA2k9mBJDHvqebvXW7HmQ7orcckgnBrNzu3MKobMKqTQttyX1",
  "key2": "5frun2NbpZCewe6kazU5qG3pVySN2TRB79XCefJVQoZVXPAGiHVqtNfUF7vUC8njzdvKrnVDYDR5SbbqiWGipRWY",
  "key3": "5AWbgsKEcekdbHH9FTEtEhH1fTUprsMP55KDNLni9KdMzxK39YSf9reM99C3dXu7GD8EKVbmt6m4jfBC75uuFtN1",
  "key4": "5gEQ86MKBeeqf4W4yw98NbE2LixWkLom7fabvLrwYYnrp5GnowdWGJnPSX9KKJFyKYLFHDx8bszg1kMLmdjxfYpn",
  "key5": "3eR5VrtnNGRpH4eufYFZZwBDVJrjzJxCq1WP4SW9rBT55hKeDxMDGWr1vFJFt371AB3Fpi87S6MPFvZYyoavKw2G",
  "key6": "5jDmh71dGLX6fxi22Nm3dTpjkJsesWPfs2pzxFkK9Awcu3eze9bAg1dcpnnNVEeeXpgDjGazRF8FjPobyYcesqRY",
  "key7": "2BEBnxhSq14KVgDMdfrzL4qYafCD61BQjqgm4mxMZHTkkhcYt2indGZkmB7wTmQUYFMHJJEfGe4boadm81xJ41Yn",
  "key8": "4896XkRnicGBrsvyCbqx4JEu7MZNVNC8XYWAhHenVBEgKB63rTpgJH31UHE9unSYFU9ifEapYJwrXbEs8sr4xj4d",
  "key9": "U97pQ7T5nW56qUUJL4MiZ5bt4Kj5acse5at1v13tZsonH5gDazHGtupxiKZkC1xP22VehZSTYisMyFTwrcZwsC7",
  "key10": "8CiVw13kbyBYGLoQ8dMDuzr4QemQr5xFdDDqQPaS55hqy3f3xoFBunbaBemuYQEXJhQCeaqmshfMCN8ZFTh2dkF",
  "key11": "4k2bYBCgATGQeSLQ4kcLxiKhQEzVH1jkDjThgQ1t2puxSEHL1EWsTynnXz4wsFm3LsDvSsiYen4Q5WKLvUJVsog",
  "key12": "2TNnVimetRqWKFnGTGwDGMJeJmVBrLZVGKEdxuUSbF8LyYsyScW4C9LtrEXJKuFwEpfLLzR8kN5JuPrn6sdTyneH",
  "key13": "4P5z2kede46xfGM5hMCnVSaMkEooV1QHTqRyT2XSGC9vmP9tqYviN5PdyMrGnuDbPzWxtFxbaqMK1HjHp7C7QyoF",
  "key14": "66tzUWxyVCJrYiZ2VPfg9o8DGQHFRGgC3KWaYJ29Apg95AbqwkWnGLK81YzeetZVAE2uBpQqovatnV5wHgLgGCoH",
  "key15": "4wGtfFDqarTNwQLzKzRux3xwjQjh5FgDeoaZ6Nk6LF1wH1n5SQNWNQeC7quS4GgwuWQpc2kv1AdLnJPdy1CiZEdg",
  "key16": "pZXTxabvhRQWodqufbkGm5v7s3rNfpD5QSSfSo56YpBHfsKq9CxdciqNdWHeDvz1bZxyTcPc4AzFQ2zmu6MNGUR",
  "key17": "3RYT5yZkxtd7RFpuaY2oAGTHNMC2BminVtX6YKdRXy29bcBDteA2bmmiSTiJLUmKW11JcRdLYzmW7VhKtwGiMzAZ",
  "key18": "5oDvAG8umfJr3rJDccybfmWjdXmfKYEdz662y8EUmYW6XhNay2VFuY1rejT2BbmyqfQNAD3Hqhjvx83MUJSSBV94",
  "key19": "3NbKLaoX5apbqC1gS2bnPLDJYt4nTa8jyjDfGZi4hKYB5be8rS3nNG3imZ91B94ttKje77cm6oyYZ4Ub2sACffHm",
  "key20": "ctVKBDXickvpehCcWt8zFjKUhp9Gi62t5JuPJMZCEH3FZknVhWcSHgATty6NVM3RHyDR52skCaaV29nkVAz2SGe",
  "key21": "4mGBhdo5oWHAAtHN4PuJrmzDAA556txury7QVYzGJdUKsUz8nre54PQioXPR1M7HhRhrLANhLJfL3pVtYbNEXMeh",
  "key22": "3Pvc7hbTTbdbPaqqrfoGiqHZZRWDCyNqdCyvG9oDiLtJwznWFU4tCYtjrD67oAsxQKukbXvcfhzpF46bqBtBrVhp",
  "key23": "5jmjA72A96gA2kqHPWaHHrVYsJdh3gRm6UJvcHAbc8eComddUJ1fCjWU5pTvT3UvTwvDSHZjVu8qnNTGatgidMLG",
  "key24": "hYnn5835UZLMpEa1Ep6vjgkXDCwGBm84F8uDryKNmUWQyEpc3z5byJyYaExNsZHu36E7rvSC8iFg1t6Qmg86Afk",
  "key25": "2abKhmH7FmRdWeXc8A22DfM13EaXWeb2EjxCzJ1AqbkK8RD3DKCvu5PSnexTa1ViXwaGnTeBr31BQwsGs7cgDYts",
  "key26": "22Ft3PBWpgXge1rL134LRn7MpKUKrdM3sbCKiVVR242CnVgo1aYrkdHoyGoVYmtUiuTEYgP3GJuyAU78yeaicXw1",
  "key27": "47kpU2XdYpq4V5ao2etZ4EDSKLSgNrZvsHc9by6wydk2JASRb16At9AfDNUBpJFDie2dg4bkD84e57qtxDfBEzU5",
  "key28": "PJv3WgV2A61vhkuE6EyC54QjEL7YQKWtQ85w2AT5KcAcTNz6bTLdoz2hmd5DmCVDNoxbgxcV1u86wMj2SQnNXtM",
  "key29": "3P1EZiX6SZCsErJoYgyyd8HUWEFgTjFpuPyFdB17fZ1uds5r5F1Sb5H9wDVYjhc7uNLDTGWVBauCTvXwy8gKJCS3",
  "key30": "5VJZ8KET2v9wpb6gh45xKrLWedPNpL39Y5p9Cj8kPQ4PUnmSTjcFsM2tRWJK5eenZCieBbhVmfpK61gPcxZjSyjV"
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
