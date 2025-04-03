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
    "3gyL8zLiYR87QPZDgo2GNyBPapdYs9ETx8rCcEtTE7fbuvzBNj3T7LrhvvywBMbtTJUQnoBAQR7N8GMsjBtzYAZh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gqbf3oLEcF8GANkTpcFvCwQDrtYAg3s5SFT14kHggmQBN78cjZUnB26ejdtMR83rg9i3B3xqM7ekzHH424vZR7i",
  "key1": "KkcNXdvSJfy1vRJabPExkhXVzY117S4a9Mtvb4SaVjFWsWGR3RBCSMdJ1a1KuCnCop9fSqyzH4x4XbqohzuwDwA",
  "key2": "2vmYgm4Fmx9xaGsfrFg17ecNknt1ZXqYEsLAwc6zqgRCCQoRhPJAc1kd3XUEB5oopBTJz3PLbfG6hYLph7prLfjE",
  "key3": "4zeTsmUi455dYgbhbxdo9sJzJvaR5YwHwCTVkYrhqdSPnSUe9N81D6wyRuptGBgfBZvc9GTWNSHm9iWip24ojKAN",
  "key4": "22N5PiYjW6Xhue64NfcQk8vhRZPzW3PrLRfcWdE5K3t29aq3g4sn4GFy6JJMqntWFQqk8uQjBpBfSnMjzgAABHa4",
  "key5": "5syh6psHKin4bnDxHaHfzvAoFpLkgbu7zhWEjzYtqroc2Sau6JC1GTiQRfgTv9ysLRcTGPaoXLZDwL7my95ceHfr",
  "key6": "eNWHz1JnXnvZtL85TFUQMfEtzd4SEajmcAoXwF5MgaWGGW3Wkr7Hezebgh17ZW4FQ8h42k33jxSK1ABX9my6ABv",
  "key7": "2FeTi4LXwVWPtbT4sDjowqLmyUP5j5kztZbX1UsXNtAopKD4B8u81WgXBhRPDGkK1FsHpgTaWmcHRNS5B2MX5axb",
  "key8": "3wtxPFbeVd8g81SqyqUmky2ZMZsAMykk3Qtg2eSEcqpvTSWsehgkq5vtpXtuknRJMUhAaUhGpLAbVQRZtWm379sC",
  "key9": "2NRXa9Jr6z4HxfauKvFJeLXmqXXZqPA59A5h4NBdEV4NDmaAJZLLCVRTm9dc1fgDJUJ2yXvjMpMJ4NUbtKRZiyoJ",
  "key10": "3raRiwNNhs5n6WcDMuhytUAnSwYJUZouLjJi4CXQLwwcCk2idiGjpAXDUcMJoHxWJH62AKkFqpq7Na7CnnPZF5gA",
  "key11": "c1LHi7WvnbqjFURWSqRKyG8d7roHSGoA64oJd8ibz5oph87wftf1fRFEk9g2PJibxypdSGrNDhpKAEdhvtQoy9h",
  "key12": "3AntfAwKBjn6hEGd4jdGoBD8SzAKKzGGhMsdmdYh83NfuZtU6WRYcJqBwbSJpHrPmjMi98ZKj3Pco9PiwTnQ66Pa",
  "key13": "3h4KHoYw4S5Dv6QsB9AbcFi9xfDfM9LC7kwVopCufjerNbFpteZrwRaVfohkJhd33BzZcapGLEm8vazGSnTbAJx1",
  "key14": "4T6YgxWsgWaPkx7FAatbbAfFxi9hRMUEuBx8K232fQyTR3i98SidF1jTwfRBPPMJ75k5YqkgUDkzfU1wF1fvwDqj",
  "key15": "514v7H9xHDYoaseMzNucaQZdcKScKMZx8ueESdz3p6FT78DTQzJR2zBHzaTPuNgHQby8A2LsJHSGuTCrFXA1MbDo",
  "key16": "5hi6HttEFuvWGt2bHoUEQLQNn7GXuo2n91PiejhttcT8ebPXRnCnPQEYBJGhftSfuRPQavRUEWyWsRbfnXteJT1V",
  "key17": "GFACnNyZTNEswneyGAGnBfXoq9Et2H1UXXeCe8EHo2892HKt282Fz5Dnh2ZHkGcqUp48L1oZTwJVM23rAWMLvky",
  "key18": "2DiFhZ1RuQq3yZmRRtRSn5fCdyhSw8SXRyznmtv9ZTUeDBsnRerfX25ni8Wn4kS8adntHz2nquZXvVc7YiAqyqjk",
  "key19": "2kA5WoKyTP1xVj4JKKS7He3DBWZKn7UtNxuHzXokaiDufN4C3drx1QzwY5cE6rzBZsHszhDbz9rT9zv2XhJikvHm",
  "key20": "37pok93Lat1KYF5EC6S9CA2cPYhCpenFiCpwT9bpTx79yWZUDkHSaD6KcGnLJ13TDYYNxhviNiYDYTFARTaN34hH",
  "key21": "3AwXP16LE7wgzsGRqyvS4pTEKDHWDw24b5GM9JBHhf1FB7gFAhryTrnUn7vkSiFq8HXSXqjxqvXdNFmShX2S9Vp1",
  "key22": "3wS3dRNMSGM89MKsDa8sVNhCWzXmMhowBDEAeA26fTKLzrfbP2Cimw8PGbZxGhwe1v42hSTzLCXVZVV1BiqY9RKX",
  "key23": "4rATnxLChYAf72z8sHCtoptTEnPy73RQkA6JVqQ5EnwqXoj352A7LXZxfXfeufc2GBW1WsWC9DvVdWsaYTzjgYvp",
  "key24": "hcc9Qg8duUzJj3jR49PE9UvcVDKocLGcDVpgsyeSAvgvi9xyMy4DfXatJtTh4qb1qp2totA3evJbwM5h3AwjPz8",
  "key25": "281oL8VnUPhWTyfGYCxiJA55Y9nzjWtp8BDDjXGoNi22zJuee3ocbvvmzhByUPg5PswGYC531XaByeUoTsooLrEq",
  "key26": "2AUScrTxoYj1yMmCobrGS79y5zU9R4t1C3xFGLJGenJJPGMRVHUysPqcFNVK2DUB198zzAPmCojrSxGceXddq1rP",
  "key27": "HHvR9xejf4EP39bEecCKpHMRnFaYwMBZvBr5Mw88jrsw4jVcjJ5Py6SuFrL5Uda5iPUUsbSi6in4KHD9ABMkkim",
  "key28": "3po5HuHjoUu1kz9QPKFreTfjZHooUkFDpCs7owoCDEUcRH1NSM3yXCwoNqUNSZWWZFLa6tokKpq1dKmX4AaNnoBQ",
  "key29": "59SMSBuSK8opq8roFabV2wdWrSwDo1o7FBGbfA1cdFzRik2pE45WBo7vUpN2BwWThMjZHSh9JjNgu5XBUkqdoWK9",
  "key30": "2wYw2DMaGt4afFjgsQ2xf3FUhpvsx2f4oijRSHGwaLYqS3dRJwr2JxvkB9Luk6Rg1F2o8tNvgJh7cK3pUxUzEeCb",
  "key31": "3Z61E1TLCdxfoVtSvJP52pMSNuJAJcZwcmd898PrjrNMsZLcAeaGhNjGYmepGnMCw8b9gTaHmtiM4G97fydfGvjo",
  "key32": "3ALKHWSY9sMqscihDtfjkjvVeSiPoiJ8iDLin3jgXyUPyRQpDXfar59HnWBJ41APovkHyK2K4cxjScVQBZf4jrGi",
  "key33": "2JK2J1Bc7KR5wssCeGFTbvq4zncpqYLqXjvm9rjC2BPKHPXkritcVMXVGuPKxehsMKj8qCwAHTKv8FJus53azviv",
  "key34": "3QfDTToGBYgwD9XyChxnnwbzkzfaK77bRNjSAefZPf9jjzFSdputXjmpsXEnDwGHDbjp6c1c7FCh5GLXPTqFFxAg",
  "key35": "5D4rLcZrZg4dhhx9eDSjQosDTWvRqxe7dJaoQ7cBRpm7X2W1jnuot89Gjha93HQSkQTj8Wo3jdZPKNbpb4RYTDsW",
  "key36": "5J4p74kJHJgsDq3xXe8WSpMhpnV4kyUsQ5nWrTKnzqrfZaP2zfxMgnYbP21UTx4JXMkuWW8bxMSUwKW3bxmpvxdZ",
  "key37": "49B7btF6TxWmQPxtDQzM9H24Gfju5HMPQ2oVAQcCZoCZRcun6Q7PrDC7X8kwtVpCg3tazXNwtwXKuNo5ekC31kki",
  "key38": "43QvRbKXUTyZoPMMLKZ4NRV8rgPbZ4qbt8LZ5U75grSgzkFpDA3EhgH89uqk7eacTMegjFJuMjqQH5NsRGFqhJaD",
  "key39": "4wxfCitVmMcnBYcjPc8Mrqu4SbknsTYDCLfy8x27sGpumJJt2HmqtfACf3v2whDTcr8F3VfYLSbfPhGDJXVVibaf",
  "key40": "3As2f1Z6sqy3VjXwmJkpZT7MGj8pLoJeW7tURmKc7fkxRFgJkAwoQrX2UWmtojRzdF3feDR3ZiMRyfkHpwgkX9we",
  "key41": "5T7GuYpmtFQGpGbPek6d9o9nSm3MT61vkRSLtnJVabUzw2rXvVeywiHPqRFWVt657yVrfLbW8bQUpgMy4GAUQMKq",
  "key42": "ihxzjeNWqcRcetmsqvxNt9TDWzfpWEZhnWPuk89mXxky5PQabvt8Xgu57oy2dNsSfLdEBmpzv8ArY2RqrrEuyzq",
  "key43": "4Z3YWdTnHgsVcSAKeSnMmUtxw2D6e59wgY1vUQC4LnV9W6B37rQm9kAE1RcSBzTfMeJRQsJtJkt1tgJs9y2Ccuyx",
  "key44": "4gfX17uwtSfkhvwzqxkkVz3eYPvAGX3yciC3cKXCkf28LqjL9qb6DP6yMFKgrZxu1vsYGjaHZNpxJ6ymcmw7QYCZ",
  "key45": "66VZsLjKMHBGGtbhS6TyiN4ws5ycHDkDHVs3x589uNMHUpQKqz5VpfSF5nvyUajBJgajFTZ8HCpUMWVPjPJrqNZE"
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
