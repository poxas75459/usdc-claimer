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
    "4xRfVDKbwWQTaUod798PSR1gLPT2KmcMqnr52GuwYi46PBAYMyi64UxnGAaZ8dtaVhF6MNytfRdSg7EMDnRukuaM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pDqtH2xo6BbNTKm2MzR59C1iod5zTGmR1g6GRTp7Y81fArez87UuGhPvsdBNdypHc3kBAytNivfXbDp6WEXZgEg",
  "key1": "3hyjf3QhzVnNUNPwwDrfbaWyyrfFguqV2wxQ4ECGPQz9u9vLaCxC3GoQJ7R86mcMWCCadGS5zr6GcP1kUkCKXJ31",
  "key2": "4FZoRKhBp4MN79qpTuo5BGA7W7fAfXZ47hrntsptswMisSxUcZn2ezsijRRmNVJjxjiobHdtNVUZbk9aa47kqUKw",
  "key3": "54Yb1oiZmTYa4Mkfq2sJ8GNpv8U3rWngPcQWfG9AkNo4UfsqwW3P56odprGw4dibdRRTJXKUcozcSwcorWUkVJJJ",
  "key4": "b9PeazTADNFmnBEA7UhaCWAMQseGoieS38HGRdEWHegTA8hY68TrU6xfeXHWFhLpTqPFp8WNgh6CNCecEDcb9zd",
  "key5": "3SDoqo7Gr5BPqG2sTEn8aFDHYyp4UBVxsW2AnfhxULzF32SK4ahyrkWN69S6jByTwK8EmZMgEawmV2iFnG1Ng86r",
  "key6": "Pn3mQWGDsqLp3UjNQJFibYqRG6C8SSc4kyZsTMQkiZ1E9n5opk1XostyrpSvsZLs3PU8WNzvDtKiHi5w8wUYw3U",
  "key7": "4hmFdoXZcrrt92DntxfvQnnWWqGVtRZYM2trzakM4jErppadVHYy33RTkQe115tzH3deSoxwmDxZJjJpmPRRJTKK",
  "key8": "31MdzsWnzQbPEQBJH7tvYZwqWxWhJod5jnwPYRKkNfnoPkgc36qeHwZ3h2RQfKbo8G2SurqcSYU9GrWFEnjhWtJo",
  "key9": "3rLwCooaQ9mwsZBw1LaSFAQVjMQZ79493BpxQP2pWUcmu6rnqbTyFSFcvSx8MnxzYmG7xbss2vULazrYXjQHWuCy",
  "key10": "3wT7nEjvG6YfWnvYcFUL96aiLWr1z9YERvsGgFY3Ec1nmduxWPm9WWnvbtN7SbJdZYK4PSDG4fiLGEs9f5vtqDgR",
  "key11": "5yyLbyfvWqGX2sShAefxmJp8KJtPQxZZpwBw3MexDivPivMfR188vXWuiWwMA6zBNkZjxvLpJpMaEHog4YDv8MS2",
  "key12": "5e3MzK2poprnfjR1qsvjmAcZNGgi32xVFhqz6P81dBqB6npAKzwAsCEZNMCMcspRFvkE2EsgT7KRFiHXsJwvShVN",
  "key13": "5ZPQ6jdmJ9dZS8z3TiEbDkzihWqsL8FXDyeXEB7BfUCbTcSWrHcNiHNr3DLo3KyX3MA3UiUZPDEmTGjUHPpDiHwR",
  "key14": "4UEgcBgD1qfm2RYhSEH7q2RJi9JWTYeYs2WUUGF5M2oS2sNLWuwzKhdNVpf8ZFFCaabSdjRL8ZXhufT7LUQAP1Xf",
  "key15": "36y5otVxNrr3sXotUtkFqbDAekg8w7UVCRoZZwT1tTUeNMq9J9SYkgDkXTJHV81K65uLKxcYsMDaF9sMyg6n6Kw6",
  "key16": "5jgMohPCcDF9H7gV4sbNppnyQsUwtrpJif9QaW7CgheVop2EM2pQpxany5Xa8SrWFbPbUXxMs58yzx31M2eFGhNt",
  "key17": "4hy6Wh6MxSjovcNWFiff9GSpc9jx1srrB8D5XFS9W8ssosw6EgG72zFaxYVffTRJepta7PNBohQh5R1BdiQ7XR2a",
  "key18": "5ikH18B5H5fqPejzAgXtGx5q6VcsTiUodPxfFjt7WUiqjRNqcon44roTUxiDUdvUcTvchtNiUV7aGm2SSmT5HwD3",
  "key19": "4guxBENjodjmhRGqHYBkztzZf9iztbtWPjHJisXZfw4zjLqp6NaHYvdZ4FjgS1BMhMEpvuJzHHuANdX4ZPwXxEij",
  "key20": "4xXMqtamaRBKHu8nub97re2n6NjPCWfitZyzysGzxE38pt94Kg5K4EkGMLmBE9afQM4XCBP8YMxFZzswjYC3Vnxr",
  "key21": "UNbRTbQi9iKTaARBjefe9DGAJpDt2Bvdmds2nG69Afaa6sD21NFZJaBC6dFAa8fUEet5t2Kk2ugzgHwouAF8AwM",
  "key22": "58JjpEnuUy5osarSMhsDxijJiy4sp1zGJfK6EHgmUTTbAfxhdgcZwYySm6UVb6NPa4UDqcZChQWBoeZxkW7y5fxp",
  "key23": "5ALhWYkRjNrNLPDLDsPr3a8xz6iCk9eQoSdVywcnY73vbcFUc3RdJAVBTZLPjyx6VHyoimx21ifWq196Le1HbUBz",
  "key24": "4xVD6t6Dr2j8gT7BEMP8tRJ47JEQXYaHvPveW7crBs1g7xMztDzHhvQ4zf42qi6XtwpWg6AzVgBuUocjn9vWaoKb",
  "key25": "3kNe2tY7MLWmRCpiSwP2GNvYE2eUG6pLmFdT4GMaWJQEfytQBbnPH5pAvtzLvgTeHkJhV9oZB3dAdaXdZru88fN4",
  "key26": "KGCb1MrFXEtkgDF5qSGwoFQUDVTKXyDP1vE43sGbyB1oegduL3CF7LxpWdQHK9VWZasrsdmV72ExfNZ9WrRvPrW",
  "key27": "5jdBtvRNuqjCPpsK4j3nt3MfvTzuksAEQH9ph2Ue15FkfpbPsQhZV2WBjgZncE7TLbqp2dyJtfpkwVknGS1iQbCp",
  "key28": "3ky8uMVmgcffyiy3xNzqGfM2hdzvWoDdDEqfgKYqzQ8G4E49N9FUgLPAKJQf7b5PGqq45xAQbNqq7ygZrE9bi1Hd",
  "key29": "3VB1BJ1FwCkGduNGgiFPDQjWxtFTX1XXfHRMsPhSUwri9rdvpqYzFrGn2qJJe4pJz37f2rw98ng7npCT5MjYy1n5",
  "key30": "3ZY3Xeq81Diqkysss4HxpUSaEx3PaMQ5G1cz4dv4MG1witBoqxjUn4kuGk9yKkSFeQn4i4gdsvJFjJiuacCvEahu",
  "key31": "gUm7xYEc8a7htkadqALqNjUjq96B1iET6TsqaXKB2WWDoJ299NJyeEH2o8ywdNmZi1DS75kNwXCBD61KGx5aB8L",
  "key32": "4msdwkcTemSnhjH9DornimbY5yvFCW9xeLtVhK1xYcGNbhJxshEPizue4WLjpqV5MBFRyFGh6Wd3CZQhQQ8mMk11",
  "key33": "2xUCKLqvYfASrbs5YPEf9HRzNwBBKyXHXfpZEs1uPcKpwfhJoMhozZC3UsM3KyLew1uqdFMBnXMmnvig31Ma3WoV",
  "key34": "4vymZusPqAHMBTvaFR6JjERqECjkh6CyqSLSCrNYVrUVZiKEwJPyCs3Y1HKgamamMnVePqGa5pqfRXCkP91fKBWn",
  "key35": "5Eg7Xx4U6ScNMXW3ZEWM8v9jmN4KJLhjBck4yPWLuq2HLZ9J1at1rrqDG7hcv3evNj3wfJSkaW9RxvbfosWdAF3j",
  "key36": "2A64hi5xfAat8m68BhR88gaUxnEsHPBTD5dd6vbNdS69XGNM7SPksvesB9FyzXYbnNsV1VWFCRrkopfQqikWe9oe",
  "key37": "3kqCbYwfpCBoohZyUtQftPH16nbfps8yWEu9w2esuPmLrfetMJizncMSi3rQhFPjZHFX9gDJCtHPBTvuzCfAtJNR",
  "key38": "hN9pfjpKM9hd4K1MCn6SWN7VDLSsR7FNPdBXARjT2R8iKNzepWFoDHzvXuMpYofcvajFYSk4dPF4VGbwGSpskua",
  "key39": "33CSXE6vmfJJEogD8TG9fMcjqKmuvy7GoPoVgXmfUx4KiiQHgcRMp9S5jq1r18QHZ9kQSBWjueNsJbmgVd3R6wc3",
  "key40": "1itZXMyxmGxas6LMzWq7RdEG4gA2RwDnBgGYbfDhHn4rwE7V6hYDoffedMZQWY7K88vVTJ9ykFQGXR8zekzwYFY",
  "key41": "TvNPxC9g7vvbatrFL9B6X8J7oa96CUAYQSbxWrftV4LLTGB3hRfBLNAiUvmHbjMhoEBf1NjYbbiVj6CJWYHNgno",
  "key42": "21NccKMixKeiCBThjTkZdRAiEDaPxwT3x9yLWs3RFNjjq1ssh3o4ipeN61nzT3xMbDrMZp2FAyuARUzm7K3ddqck",
  "key43": "2YZV2dYaL4y8TFUnd8Ym63bikN3hwCHjtufVPTqbJ7LHoBABGjfx8dG87X6DgLJL8F95hwJvzJX4f1VNLNa5QsaM",
  "key44": "3HvH6qKBymBWCMDc2iQUGBi4bVPCozJJ7onvJ3yvE5xdLEhayzeWqSLNrv2LgG23NtDEX4DquaZAHTD8L4GFV5Pp",
  "key45": "5Fqa2quGsxNe1sQV6UnjyaXhGPuwLwRkLbtztWhsSg41gzpsfK1TDWQPgcVZ74s6GmBzcfWns9Hsohv8CunpCKJo",
  "key46": "326qLK3ozAVxaziUmL1kirokEUDBHkyhezGe6MzRxUqLSAtbBTyRTJVeBTrg29gXrDn69WqN7qzQjGf4hdong95z",
  "key47": "2VBR8UMHjGFWw8ucWppF2BUjssziXVp9LUkEcnmjsnd7YMkTA89CGGA4kJ9S4F1uZfmq8hizyjeKnynAFEU2uzsg",
  "key48": "2XxLaPr2TqhWZ3n2vnqV6HcMLwBN4h5Vd7ZFq4VGkeDj7VY9ZbrQT2LucxryH6kCKbaB1cTQtMdW8AWYKdcyBKw2"
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
