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
    "AjVmWd2sonajtS92EJYuoijsxTmZQbUNRC5CianYqXoufDVFQtofAfiRTKZfvzGEyLv2oEYsgxfm2hjh4YXU9SD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "673H2Wf5NdsMZ1BQCYsoP37F6kiTPVniMRGXnEQyMF8BoQ96Akj4SWhyDLkBRvLQLMPEzYhbuy7zk3J5rk1SUAa2",
  "key1": "29bS4vfKfhYDHQjooPo5E7BEMNAwYwk2tDWzBCqfB1JdXtxa1mxyKsh1U6vW832FF1EPLi9ytdPvvy8QyQ4riwiL",
  "key2": "3o7qeNhoKd9zRTHF7wx72P4jAZvCzDUokhawFQobDTvux3tZmr6nGwG1H34DwgjG1FURfhM9LpHgM3oV6XgEZ7t1",
  "key3": "z6UniSMxK2ajP1oh4ZdSRog326BmyiWF3fGyBiWeh3246N9KG8KbMZB6Y2P4uXkEAupbiS5VhqZtEvGhwoEjseZ",
  "key4": "4iKZou9WZhJrtGVtxc41Mrv5cfo9RzwaGPFWo5akbE6BTHFxE5EDarNnC2wfM8zfbgWJuL5sVSQHVdFTLL17VRSz",
  "key5": "2NW4bb6BVLhsxgMTciQPvzD9d8yP8xXR9KYqtEq9BUTSmR9ZnvTq13sjB63dPBxSnAS18WfwLTnpQFGMiRkPG8Ab",
  "key6": "4fNCL7EJcUfFFvicuNExTT2FzckYa7M2kLPRZW6EH6Ywsp58sXA42AMpZfidp1TWjRjE1op3MCGEeyf2tzVPUW8K",
  "key7": "62sXtieX38SbEhK5gv7xzybdyR8umB7qnCPrVYQ8DFxhqEqE62D7kJw5wwMwUZuebpWh5iwAUJWC9GAYu5aLaFbL",
  "key8": "5HDynY6GSnXgjD9cXFXJUXbMNaUB7Aq4Mu9kDcoGt7Xuzfc5zo771HFtLeWrjfzZNh95HmpWeTCpp2LafgsnHyAi",
  "key9": "4bTVZEAvizTVpsaofJkEXA8rx6ZyQX3AyrzpzR1Ux2eNGv2mSdGkLes4iQM3ZL9YfbMMVXKPdDyHHj89Hsg3qs8m",
  "key10": "5RREg364xh8j285atcDJNfoaH9af7Fwg1gHY6rz4EK3f5m1JnwM1QJW8v8BC5wUz75Th3XkV6MheAiu9EzVhrLgg",
  "key11": "2ZJ8Wwzy5F29tDCVA5Z1szssAr6J6PcTDfzuEtjhYGA1GbvaQzTyKkpQho32PuYeSFEXt9t2gZf7Ljnq7WMLwEMz",
  "key12": "4RowYCNEpkg5Kx6g6DyEkVPDxac9bftcdPU7GoQCQTSREY4cdcQi542HWWCqGTZffAMH9ehofohDXRSD3UmU5wMr",
  "key13": "3f5qp3wwdakxU2YqYPz7waoVtu2AcscSvLYidScyqMo7zjKyR3SYQ1n52AhAPKuznMLx8XcgkpqRKJNo8qkG8nCe",
  "key14": "UxuiZNtmZBYeo2qX55iY4nndrwgD95DCdbtrvQtU2pE6H6EBEG5fGKBqWkW2KtKYqTo6F9s1EhF8xXRKV65zqnq",
  "key15": "5JJVD3T7fRdtrgbuy9wY7HQPNwu4WeRtEYuxPMHPQyf6oGip19TevPGqJDKxke6X9U8fvnGyEEuQebTzRA9JQw9z",
  "key16": "2fkBZWvnoUZRj6EydPRSo63DNY8jFUHGZrx6Nu9735WqpQLfWS7Ki2zJbdf56xDgF3hqYo55k7KenP8CDAHSUFU3",
  "key17": "32mh8oLZ3tvCRgitA9XFTKfAeNtNQHz5rPvNP4HqTZLipaLbYUKyMzi5XosLtXjRN7mpKhXHpdVPfrepQ4ac3Wnz",
  "key18": "3uv1sV6N9FMPoppGhdNne6DsKPKWEa78GVqf8uVMD7okP5XTxPmfgLH5uTmag2D3dvk5knrw5ypavL2P1EMP2yav",
  "key19": "3LLJwZvddmuSB1pGPPYVEaY6zzNEinckMU3hxkZHSwFCp2Z3RjT2kajKTYzVp3pnAE81Futk2fpuDPMoWjuncjVR",
  "key20": "3b6G6TQ7bu5M7TqdSbWYtyvX3mtF44FAEDwqAMeKwAxy2mYVFDnpe9zB6WWj6pLBtWYZ3p8JMTtMXpugNCgGfKcj",
  "key21": "4fxMpCxwJyec78xwthScRKoAbiKh5ZVY43Mnxrf1W8Nx586Xw6HYpBQd5t5czGLWzbVCJpifpFXQDprMNoFTzjkQ",
  "key22": "KCnJC2pCFCzZqywgUNVQ1paPfuQByfhuaGdgUPxZ8krMrGs6ehBh9SD8YocLi1ezchTVxD9c5B4k68y6tTyQBdK",
  "key23": "VW6RJGXsw49PXSWSm6rKoWGyF2hALDAZh1KkRm7tJvd4T63sAtK7hM6zryovnTuWpaGpbZ2BXkNU7tgXGrxNPWx",
  "key24": "2KstGnYf6WGuP2d1Ad7kp3SrdxAxWoUKLPL6AdiqYhqU8D3j6B2hXAD1iRovjw2V8XTxy8WxoBNh469giYKes65v",
  "key25": "62uoMoyAamiHvWMAMqr1TPemtoBRgRuPeDogtVnGyWg81EGmpMnAkrBit9h2ziKzoXxgtwrNwc1ZWDnxNCqBSdDW",
  "key26": "2YEzPbD25w8Z7DtDd3w3V9YX69jhYuidDoQbMrM4hnrFQooGSHDozeK6bje2feuUf5rFxnfjQeNqKpoaMdunFGRd",
  "key27": "4aCLBNMHCKDSAcJrTkgauPGumFVy5wmEXzLxMLCnFKZVqEmsUV29fyYTVNwFQwxhKkGKPFGayA37nwXwTVcmqFnu",
  "key28": "WbfNMi8W3z7VG5EYLt2YQ2i7DajmpSDYxa27qcGe8MgJXWVDrJ68tW8Dv4AZQecKJKfJVMHEdQkgj2rZzD9NKZ4",
  "key29": "5Xj1WBmoEpx8GjLcL3siPZtXMeyES5V3tP24FPt5iP97Q6vsHnuUprPUKCYhkgfxxrqjkreYvhXHauCtKhgsUXz",
  "key30": "4WYEHaMZvSmVN7a7VZydmHtTxpvLTRLcTY8ubpkGGnCJDv6d3ftDEaKFyK4ASP8mbd3u6ZdMZ2vuoTZVXcCA3FhB",
  "key31": "3MJRaXZmbZ2QJFBypQwLPi1Cxv1uBvQH7Uuc37MRTXkz3YZXmwDgtkE7JNaPuydBurgx3DeVUkfwuJVSeV4SfCQP",
  "key32": "32PjRDY4n6YTEV9E8Mr3n8B6aKpu7v1wySazsAbE7NaMvCuB4ZVhFUm8ZoQvUFoyEipXmCrs8rEJf5tdSeG99u2V",
  "key33": "4gWuCQP35DZCSvTj68aYxRAr5EjDcRiVUp91NbtvkDGM12z43cUmnC1oswA2BhtiXLNG2Bpp5PdgNSPgdY8iHAbK",
  "key34": "4oaSzMSGRhkbQEV4yy2xchEoUgCUKMmZKq6BnTX4C9a1v2XqDyXLxEoXskeyt8m6A7zNthmWaHPxe6UUTaV2PCFY"
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
