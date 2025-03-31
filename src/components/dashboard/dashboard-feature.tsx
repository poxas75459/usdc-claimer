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
    "XV5FGxfPUeMHG47AkytJruXNwPHmGA71vyqXs5nWb7dYUaC3k61rpemVx33QDj89QGr5Z9AxUrDTS46feeuFKvs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mSdYETyny2U9PkgsN5HF9AW16VZMG4qtW2g3vBtmhVUcHdfpv7C5B7vnJWSfdn6E4TQ9nPSnYHtiyqXQ3o4G3QS",
  "key1": "4yNwCTgzH6vVytospghNj4BiAHgHZcszmMB4Tu1dVEBydLGphumvCBLJaSDx7UpzGs6a2GRUzSyN2vgaL1QiBMrM",
  "key2": "4AdvMEVVVHQQHV7WfjSb4cpkWqnn7JyYq8po6cJfGDaKZqy9UXieiBoaSFPLKLpxs5ws28peTF8wxRKyJQ5HTvFA",
  "key3": "5L1kBonCUir7WMKKGiFtwS6WNMwtSkGbXMXSPehrPetWYmJNVHHqfkAK9U6zmD9wKWM36ECrhgKdkdKrgNyLQBD9",
  "key4": "3wPgfmcXBDorc1arUdAfwxZsYSU2FF3rguNdg4DY5avyVScb1s3n9kVwYpnKxjvwJ3K9AY3uVL8d9xpD6KxS86Q9",
  "key5": "48pFZfBZ5NywdXcY26eALVwH8qumn2qo2SK9cte3W8kCAkMgfkLDuuK2FmZU6sNMMmVaDrajhMWfFSd7E7bHS3AG",
  "key6": "2EJxDQatQDfD1WFc97teTSwNT3hrB8LVroAeKaagaHooprTNLDCuhyUjCdEoive5wbMsvper2CrsSstifU1JjamR",
  "key7": "Zs6kj7izKjosStXTaqHLXJVqKN97nWb5KdKRucBZVm2YHwvTMDGB86cWLcbXrc5H3J4Rof8xyysPS9jS9Zc5HCt",
  "key8": "5FpDhtPmjMJSJh3w1M85fCUY26YepxMJYENWuoet7hADWAEhnRbYmTGmJhqUgczhwZjJWsEX2tY6i4kcXXjGVkDj",
  "key9": "2VZnxc3Jr7DqigCesU156RmeoFwKK6pyVSkpTwYftpoj2dTnctGHM4rS3VjWfWkaSGwLKNE52QifQP4wpJVrReX5",
  "key10": "33uNRcNHgJPPNZW2qgL5Hicpc2CSz5qrm7gq1x23meJ2VxqXhREP5tSK2yYcoWzHWCiY1LgZ1J9XnArZLXsCrWf2",
  "key11": "VbUERE5mfGqGutESLvjk7Zi9iio5AL7oQestyPyvT2vBrGuBVjDXUGoTUw1WyzbbCYTGeu8qjQ2erVQcncGVqg7",
  "key12": "2s5iqoSpQRu8tegTrWXDTV5jgxhLEaEmvmHKeEuR9X1z8UEKQiARrVJGRFXrb6nyzo7xUX2utg5N36xxUAgoccZM",
  "key13": "5u7sdfqXSpRierMX4jJj1pKJNmfyBVFgJqF7UhAvXX6dEqdram9HMhuojmCAMhFkJBMab2rGXZvbR5jzb92gRWk3",
  "key14": "4EHN2Q2LULg8cg7W7hQhMHfj4vtuZZCNeehPEFbnLUYoYRESEEWoEKireGEH2qHTSoTrsHyKpsDG7vxvuPC1PMY",
  "key15": "jy1d4WSiocgvW5FH8dA2PGnWnaBSasmPkyBQZHXFAwGV4jYnoaX1pmLJXgHDBHifMZA33CMDpZAkZvnPwqWXsjg",
  "key16": "67WnHM7E4YzhR1ZfXYVfczUmbPtCnSmUUuyZejj9ZVWwMHMyHQFN1bttwFWJj9EYBokJQKdpkpy1tP2bxRHT7NSG",
  "key17": "58zeGou8Zk7UNcHnYMLjhav6Fo2mc9NYADyqQgrDoiN4gXZVhjJkoorcAXj1ooUMThA2h4YbLZy1N5oddC3Bk7td",
  "key18": "41ZKVdFUbuwR6NpZ61w6uXnoERwEzGEXBLPaBpwjeuq9MPHiHk8R5eBF6p3u8dQGvuHgMbpvuiQp2McEMC7okoTb",
  "key19": "5qkMfZWvRLaSkwWphDQhFny7RQhc97wjdFSdoHjkAoFJDVNiaRnPQJdek3wBSeGA4Uue17epCi726RPSD4YYbmzq",
  "key20": "2Qh9JKEPbL7WcC1stcH8J5g4stQHCjAasEgyU9XYicHzrqkz6ptbxJBd9wiYbRgE9AzG8pKwHSbjmSk1xmQiznSN",
  "key21": "2ewFseKwHUQD8Qa63j8RokMpVGLPuAgn2GHjmj35T1CPud1WDAZpYkgbVaRArVq8jdqKCDE6fa6CEt36MJgjAELp",
  "key22": "47md4nTAzkar38dv5QKJtzpa5ruyLYeZSm4Lx8xpWGHLqLP3DMTxQqAYdpsew9RfLYbkthLDZUaWaUsG9r7zFKhn",
  "key23": "58ddSxhR9dff35yx559rRvHi4xWeYJTo5PtTevcYnuFNfS4tLYHYCaCwkG2CiQXfpHWLvbiidL1Sfkp52PTrVXQh",
  "key24": "5vyJoejcDNdVs6bZTUhMYuQnMtGLgycL4QGb33mHRQXqqwYbNZXpcwsf2fvJ5fgGAschwxE8CHTDwNE3xa1xJ595",
  "key25": "4tyDGYfBmLUTanTEd777SQGFPeD6RjbpCnaG9p8F4zAz5wQRHnTCNSmp9h4GNBjfZPbPVsshw8kwp5pfntN1hb3f",
  "key26": "5JrqBrqd4NVqKx3iHN9NRp4bQZvekj4UUfHYjvFC84jbYFW5crrHwPwws6KSZHwkPn2aACJMUgYKNgvEUau7v4SY",
  "key27": "4SoHBigXng6MnBp6roENCDZsUqai8hocskiYPD9vfMWHdoVSrLeDXsMrBTj8xY8h1211c4uA8mRFhdunkrQnv7cQ",
  "key28": "4QQ3NdxCivSzFKJCeCPUyV8oPC37rpjX8zGBQYjXgNFrDNNTrexFZ2QBAvGuQKTTxzcVWd9fqfN3TZvJnpfJoiTf",
  "key29": "5nwH5j28PSVNB7xjzJFeoPFGDoqBN2ARLmR3oMwoV2fSkP4pfG273MAFWkbDL57kvugjRUfaZoDcXwdZYgyx1DHu",
  "key30": "2KLku47ZTMKQothieGQ4N8LZ3FR6UG5mvH6fBmDv9dpbdyHftpti3Cm9L6NGmfMKj5kXhQXDGVu7y3CY15jtcmCc",
  "key31": "Y1vCDLtaRrRjC1RaySmF66nG6tQxnp7F7JjKkZQGVErzwUKYyKTjXZsd1jviMoAxwhsanjGcuXuPNmCpjVkMEiX",
  "key32": "2FLkmMioT2Xr3YFG77tsEL5QkMvMQPCezuvVTWocr9UniTibHYiPnc98EpAqnAG5DAzQkCMVQcLnmmo2NoHyeGX6"
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
