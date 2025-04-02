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
    "3gwDb6CpYNr6rJPYqu4etikD2Z4sywxkGkQHJweMDBgoj5VfT4YZ1sRW5NB8Vut2a6c4yTWBR85aa9tkKLZoGnRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QaxWDCmhvQchf9eeYJbNaoc1MpqNmy4kjBnuFjdDSii3mrHcAuK4JBvcac6GNixEnxRCCUn3eh39f8jgHPCes1c",
  "key1": "65FkdBprNvGkerHqKEPYGzS3ExWsXy3j13BCwdeeDEbGpfpcGejNnyiMJ4CFGax7PnfTdr9V6haScaZ9pdDwsXqH",
  "key2": "5VEz4GMCYCDJCAeJpuPEGRQZkSwtTTGUgPVHxs99w5Wa9xngxJdhMxjJFwKPvRZ3dzGBJrU1aC4XgQ7nUGadXRwn",
  "key3": "3GQuujqNQ71tRfTMxYRpxtag1ADQjKarQfJ87mBEhUpNSWukDtq9bLmDLzLRcHMpSkCBrR5PfFuGchy6He92nuaF",
  "key4": "5TefpmkxGe4HgX6wBpmGfDQ6VUecaatAKPr4sNgBf4iMggFc2omNgvdsvaRa36k78mXUbTcap91YTYZhmENFSkkg",
  "key5": "1dDGb74FEXBmWYNw3HfmYiihnR8w5Nc8ZPwPeEeqfJCvr9Ev31Xgawpj84t6EAcb9UjsycnJ2Q999ejgtBV1v7u",
  "key6": "4sMPvEG7mV1j2SsczynbzBCVaN5vMqAdxY4446Bc8uJyMeqU5usdAnirhsMY9AHpTLZXxoqZxAKjZ5m2tCfhQABf",
  "key7": "zYgwWABFbLvpgTAhPy7w5wWWasNAByeTEEHVqKQNSm9r7wZHr6pZASbCzGoNMDVr1yi8gKrdiffbQmFRsPzWMZg",
  "key8": "pFyMUWLTxZgMFw88vSzxXsh1JQDdKgBtdyBcC3bhmFoLjRqrYYHJQ9TXd9ngZ8Eroi3U7rSrBXXZGsz33tsDSkY",
  "key9": "4xBKBXYhdX74Sw8WDroN2gtvsay1yuhwPG8D6KFK2DFDz47RGk9jh6HpaFW1BH7XKnLupTDjFkqT3c3m3PCoZdhb",
  "key10": "3Zd3ifUyLupHwB8qVVXaPLYMr2B5h3riKf3NhE6wh91vQCXgNcN45qd8uGmG9VcBAi9Lc7QHzqMk5SyzgP1pa4e9",
  "key11": "4cKXhd6e4EuyhYZTkQyDqLhuyStcT3RqSdmjJtyj1zdmfDU9oPFviW8ngsPevvgbbr7ijZvpFh6irFpKZKBj2ia8",
  "key12": "urqewQQ5HHEusjwfkxfsXYPaVVQK1GmVcavSyMkrSCmz1RpjEF9C6gK7SC69PKLjcpQLv7pGC3inwB1ANd97ERa",
  "key13": "2kCW9JrtDogonAUsH5L8btGppQT7NU42VzJhkAbhxnDLZbVhGZDY9fq2MuyS5caWByNE3Kzpozdobcw1FFo9T5qf",
  "key14": "2uMv2TUVkhXwYknKT4x8cmpP14foG2ZQhEhkfhntoTKiyShpGSLYCjiKtajywXtsajGF55gsnigYfCKLBqwgoxNX",
  "key15": "3HTxqtYRaWDi7Ku8Tu5eYsQ9cuVg4s2zg5UfnMtVt8WvLD86PyAtuYr6s24k5H9k6Tsmj1kVtFbSBNijc21oZ1Kb",
  "key16": "2m389FgRjvThHu4LPBdt2SCGPGQzjy5FdyhM1vsL3G7scfM7vQVxSkTQ7d449hDfRPyte991Wts8YthvCSuH74S6",
  "key17": "YUMbMgd8MYiUnR7bXTkGrsoxLNxBELpBzkHnBeGaVweKSxHv8qXXNQUepiXeET17SMeU9JispLwBQLtkhzDHEAr",
  "key18": "48ordicYCzNeU1cdfXWssn7qXjynRk9iiSTZ652Bhx5ok3uYpRwUgKJv48heFcrzXS3hYyQZAzZmC38FtQEfnmYc",
  "key19": "3ah4H1VGFvQVPG57zxeZjvxhqxdDfNPiAaaqeGMHHES3yYU2ftqBHtZ3xMR1PV91xiu6PSb6YbY4ZDjCPUtSJhVB",
  "key20": "5d9cdMhMemV6qTjDBWoN1HV2T45HVZey3icptK5EuXV4xysGciAaD2fu74Vqoyb39kUDRSoyiZhvzDGDVANgsPB7",
  "key21": "4oMKk8BedhRbHQZzVNs2UJh4hjGGjHFoWeNgwHE7FcUL2QhiJB7zuWrXtDmoPAYrGo3HFGVbgNH1fUgMxzwpoFRu",
  "key22": "RjiJ7suPKye1CzHRPEhJpvxVZRwgyybjWNpQpu7NMXXDPLRx6gKGsKnJjXAG5PJgFAWgWkxe4CAyYDNFeRkCcuM",
  "key23": "58gDpHhc1uNUkwvM5HgBSXGyPXGELTZ5ubdgU9yGZgS39GzSbf1DLU7pisCyv21jj723jCudj1rVCrW6xPxxXvuR",
  "key24": "3Wr8pSE25ccQCtv633ByYegFuwQfiJ1BmdPNZafBhVGncuwn73iKPFe8gVWhgKLQUVyTE2QruuAnyz49PFvH5PGA",
  "key25": "w8AkmWMWPTz8UVCbxqiVhYJ2eaheV4EAB7Qz3ehtyXXRh8iwwkuVRMH7rjPLiHGxU97WHkvoM6v1ExRHc7izFfC",
  "key26": "prk1rdZgGQFMLR1PP8cVwqTQNjiY28fYiqmbhWZiBXuFL7vPxnuhKGCqCuW8wDdVxQNfEoQsJXowZVWt5oTdznD",
  "key27": "3jtSQJeUW31uQ1ADcvyGpwqtyDjhkd8AfvTMZ5Bp7tdybYAA44GRxJAj4jEWrew6fUTrYdN8wkshJyvXmpdmfH7C",
  "key28": "QQwNV3FYXfxCLTaugcFwF9WqtWuZKUtYzSNaG831iNko8NqPLp7XadknQvS36n8HKatSA5FmgTZQ4NtGB5bbU8L",
  "key29": "5EprvoGVZiEGeKmNLbtedFEKGfmmLWpFLX9m8eBNnt3XnDDWV9ePCcXuwD2AsBZ3on9iWxtrPW8HfBAa9FgcEjh5",
  "key30": "3pML1DxUNw5Dinc5RMMtE5Pq9gaDBmV7wjJCL6PXMz4e7GA2P9VYJeVmrz3iUvZKERpGgWEsKidU8RE6XKouyadY",
  "key31": "4tLY9ztVjWvubsBy9f8TSYpTsnhP6GPJt1NzejcHE7fzdc7BvPzWi3LwZEpVUXQfkBE12CiYV1A5MknPPvZirKKB",
  "key32": "2vdDjU1RHJi8a3YyrtqaV25h7CfVoHgA2cCwpVwPLUmaSCudej4S6SU7ivrPovDb87XUfr2bw5kunsCR99sNFaNK",
  "key33": "4ioCfB777UhnppGsjzYshP7xTRT8XXkPm8zAtSBkpzq4acMRoGkgH33M8QVDxCAYxGV5n2czKAXHEVVTdgkZoCUk",
  "key34": "2n133kScvhpjfT36U6xcbjLeHjyEUitHAD2c3ivyCYxxkcc2c8tMrNr8Em5aG7tLV4YkBHQ7RbKVvyLTwkhWYja1",
  "key35": "3xpD3nrS9mX9NoYGQWSVuik92BKsqYgV9E1T7Q9zDDArcZYP1JhQ1uvPBMVWHvvKbnjXS4PhT1KY9dYvxhnvtqVA",
  "key36": "4gKrq6LqWcA2tdgRdvQKt1jbd4KHw6xnS6cB5sJ8kmprSPyy4AKFNA8J6kdvUqTQXg7sgMPMSZC6CGwPXDPqffVH",
  "key37": "4RKh28ZCacckxkTVH5AeTXNFoa1d7TFf6yDNejh3FbKdgUbt2csp47x5dz11nVo824SadmwNXVqks94PungNDAEJ",
  "key38": "5kH47Lucovqdg5pmbocebQASJg8Bc2JAt3j9yYaT7thzBQ7KqLf9QVzN4GnkzxYXDxFNPyPV6Ark9hcH4m7PQFXu",
  "key39": "4mUq7pZYD1RjD4R7b8YcZKrkD8V67PYSzMpQoySbjRdYJPmtUGxNsT5vFmqPk9TpaiZnhLYF4gPBzGAWdgBAmoPi",
  "key40": "5VY7hiMAzM2jjJwtdWppw4EQzNJJA7StJrZD779aLhEQ1Co5F2D5JQk99hdTAVJVotfLpRh4Zw6z4E6ZwDPuBmPx",
  "key41": "2LHQHKHEFNdMktYKqwdoop22fZGbjwmJo3TeRJywponvrinX76oDAB9JGbF9tuE5yeXBQFd1fnh2iKFxFQg6jX3W"
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
