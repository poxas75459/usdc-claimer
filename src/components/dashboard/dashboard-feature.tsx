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
    "5nHv7ZMkH5yv8L4WryScJs8tTpMAMHN3ChRbRYiXbtpHaiwRMTHFBY4KkDbMA1y6CktcpsB3JWqzirtr7T6fLgPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vh6aP8fYSRG7RUYv13dMwA5c5hFRh3ai6DPg4uKJtU1SFi4MbrAHfM2h1GT6w7jEH1HJeBB3rVuKiDTQ5dkJqvd",
  "key1": "32NpZRpSuvSQganSf1szzGuF9MtyeB7nCDbbjyikQYsgDKe9Zw4dBaj8gV3fapjSKvyNJEKRBzwsd7jLz6YT5iNB",
  "key2": "zxC6YrDVfW5zTWmVpMTnB6xNipCxLFtVH1xtLKp6rwv57VYdRmP2GGwXNJQL92vfERnMsLMugF7aypETYJ4eKkJ",
  "key3": "ZqwznGcy4XhGdbNowRwKydsjddVgJ9QJ7dUfUEBWBMfaBmw9AJtLdkFboFsHtDCEFP8ELDFd753suMoovq5MBqS",
  "key4": "25NUbHqaPwrcD63XYW2QrZc91kdmF35HfefKqyaaXKXJ3FSbJGShVgoBsarmnYj7HtXdmrcwWCpmNiZ86VjBRJJr",
  "key5": "nCnsAnq1c8BFaxf5Mt7DiCP2vF2ecWja12YsNM1qV8yrF3AZVgUP4QKwVpmSN4W4pvN7NmxHCJjEE7cW6Dx5Dan",
  "key6": "3RubAdNjWz7Y7aakvTCzmjiG2NdKJZyaDguHZNA3Zh1Lote4SKzte3vfQ6HNG9w58F2FN5dQUTrVmWsnWzKxmXQH",
  "key7": "zYQXHKDquvBEYMCNHmNNTLbCzDazLdRZ9K9cdX5QzsKbrLYS3CmTF4D3iEfQgKSDVX1xehpBiqFDMoxzEWxofWB",
  "key8": "5sEwcYsX72pzZCGxnuhMTt1Gm4iEJx8GTjg9C6nV2XpRS37KwHsu7edaRjFngpQU7uRjB99sPEucZrwks8eRGpnh",
  "key9": "DKfdVvAwKvGh95fFmakQBvQ5Ns8EktDYpH2BeASqqHhF1iR7wYSP2GKKFg444NLDdrzAqVf2N6ZyNKHkFqkjZ6y",
  "key10": "3ppQwTpFeBCnwLLyLp2NCULLkd8R5xbFd5tAQ3AMmt7K7Md2pCvNhAXGNC9m5nHZZAgbee36jk6HZmLz2cG1MWWh",
  "key11": "5vpuZ9sXSxN3SYCgQQLp1RRN5tL5Rt1SBHPeYrkmyqHs8Gx8KDR9JnrTP5MFBSMJ1kt6aoY26HMqdCUkHrDhDRrF",
  "key12": "4L2g7pg4KaszXxhDuqYiDqa2KCHGGoEEdnioxTJMv9y3LRQwxN2MmUFxaaVDUmxTzQ8CRKKtCqovFGLUMSmLWx2a",
  "key13": "2YcZAiPpwjwowir91x9fxT6CEpkinX6iQYPLzBNh6gM8zwSif7ayNXgxPn65UiPQGQq82DTpjCVcaVZXzPvvYmhP",
  "key14": "hmgkuSzsCfgZxQYiKm1JCrRKqn8tLAwLTKkuasJ5vo4Fm6QMZeWYcnkpxoxfR9jpz8hmms68HRTo5fBt7aYgCmL",
  "key15": "2ipEQJHCWuKqD1Bysf6uH9QX45FsEvYWcFwtx8CSV8EtRXzAzLkDmx2ur4KbW2rVKdcbCiRyDjtEvB2nLW9RMCDF",
  "key16": "65kzZgcBhTJjYuyDRXhq6eJsVQ8quzkAuhM5UcHDhutvQ5h4DVH6tERx8LT3CuS2c9zbBeS8syAnYvh8QcyM38Lo",
  "key17": "2drx3je4VZwMy2wQ8E8N4zjFnQgTnL7FMNu5TQiWpFQDyAAqGPrT9gpRsZ4pth6N8LcWh2e2pP8i3rND2BaboBUC",
  "key18": "3qRKf2uamhSoR1CeqDFTDNKQLBzLfWK1zJafjS3GvQhb5MWkAkEBBNXmLSkTLvSnesFJHB9aDu4BtqGNtMcDRiX4",
  "key19": "3i1k14Nk9kwzESFt2ieJcpD54JGYyRnFywWsAYXNAfkCjAnbm3B3JKo4fxMyHWi69zbPajGCZvgNH34sYvu85scx",
  "key20": "42tFYeenW4onyAZ2EJt313ncHGrTUZ8TVC3yak4sigm7FhnwxjQxizoB7zn6ByyU32dYc4eN3EUbJ6xwge9spMsW",
  "key21": "2xoL3R7Pw6EHLwQCBWmiFfyzYPFwR5yme8V6zsE34A7TSJFFE5NZG1MEngwJVQKxuJi7w4sNvr16ppNeaJRmXjYW",
  "key22": "41nYEpoRLBG8fGx4SxPmMjJgarTMK4arDvdFFzFR4hjE97BZsnYyUAkanQif6Bw9TgFCzA8gfBHHWbTJM5CaYWA7",
  "key23": "53carteWjDoUg9qvja1vpYThFuHRxuxWyKWEf2qgPA77FW2pYV878DSpAFqaTnKy3gsDRRHJtWqKNve5NbumCzzV",
  "key24": "4M7BgXWboi8r9k1KraM1hf8rUX6okCiqSjXUVmWMPc5fuGc6iTokK77EuExoy5xKJNYP4WtDo5TYqdaaypvH5cAG",
  "key25": "2N2geSh2DacVHZdjQogVPAyrRc46JjhyfkWuCbiCJfC3u6wZPbm6RfeFPqoq1DU9k51TbmJN9aLqbLpWEak9bqTn",
  "key26": "P5nySyHiBxmDmvujjHeEjdL8DUmh75JdB5YG2YNyg7pWVUnLKGpEyCRCswb9X2AhYRKAPr2rKnqzzvc4MmbpptT",
  "key27": "2axcfhYQT7a5HyU7qTbCm1Wh8gUK989dLsiiJQBP9fCmCTVSatNryhPSWcU4sQBDJp5po9SY51oBrp6XqfrbxHJe",
  "key28": "3RFTXVPACKAYYGDYAbPZ9qmfcnn3PvcPGERK3yvQb4uh9GtYCpAteTfm1w4uXfzzbJcJgHF1Jv5fXKcTejhoVxPE",
  "key29": "2G83mytyzQN2t8xFR3RsE5cULU1jJSRcGk5xXT7yc3CiyNQdZv68DBWiyg7i5piz234CVJ5TN7iYGbEasm6X2V3W",
  "key30": "5tsTw1ciXSgroQvoTtmDyvroQSWFmXzxM9DF54apyLbJtMC3A5kj733SEkMJQn3eBdrEzijJxNEThkzzfn3h32MW",
  "key31": "345swMuxRX1GJgJJw6CkLgKhMD9DL31P7gA4n4vWwRn27ANH3FK57tA3hgvbeM5Lov6n4bEWfB6MMR3NYDiXKuBE",
  "key32": "BiefDEWGrNSxt3GnVaZQ6eRQzURYpotk9QQE9VZESDi58TBDfZBwTV7DBQQTamgztnycuJpS47XhUTXwavDXRrF",
  "key33": "5zxQvo3SWUyLhLxzjJMz1k5Ftz9hTrPQt6FXa6RPhvaQfEQVvL8jY49Ej53FoX7taqtXFxTj2JjQVrZzjJC7vEAe",
  "key34": "2gdcqzU6K5dmaVbxHUL4kEShUvaV9mZf5cfBur6LCcVpt2dHfVKfFXFhRh9ouzYaP9NowE3Rkbmkys2fRBELYyvR",
  "key35": "rLdwJ721dJ7CTQ24yumJRzvguJ3N7nUop1WetQekm9ZFCN4q1su9Fssfqs5D7efQcvVmNLoMCiEGwh5j9oASCpv",
  "key36": "2JF1sFPNp96iNhy5sef45r4PQBwSKEySd3WyBLSs3Lmj5BCY1bxyV2bDaYadUDs9x2CMr5XTA2vn8WdfXmmHxRnB",
  "key37": "5U682HG76fDXtWgACyYZZRkL4fFoXD98frFHJeJKTq8dYKW8Po9iUed6NSEjzDdi4YQqQ74Y8HxSrH2e1PMjkP2Y",
  "key38": "3EsndxVtNmNpkDBmv7g1fW8eLWU4r5LuBCJueJk5oyy3SQ56sYkidoVH8RYuK2hrCQUyQGH8n7Y21v9UpxLMP2Wg"
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
