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
    "3RTMHPrQwGFdpnHBrDSbdqXfrr5Y9ZRM1JBjxxAV4dFRgoVgHYw54UhvFYgHzFgQSKoShJaijaQS5Jv42BGinTcK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rZsQKQW6U2dVRRiNuX6uzxCKvXp653DAC9WMkDqm4ZeiJXTrrCRMErdvRD678Sib1DW4kky2SborfBp8cUCa5fr",
  "key1": "4vqYDNyHw6RecEVtuDXqEbRXCiQ61hH9H5KLMXrHRKJcGavPkEP98HzVRzajbaG5MZRELVD98pDv7Wimt13Vh5V9",
  "key2": "46D8iX1c81dFuqxsBLfwUaPny2VS8RSeie3T1AfVxNzS6q2iqNQ6jgWoCVJaHzB9SvSj2cPhdrBGNcNzYD34qAPF",
  "key3": "4mZRhe3hvMYRxFPykqFkYsDa2PGfJwN1KbLt4AZt1yw7NSkqXJZSLF1xriNjdVKqnBVVuFCS7E2xscTETNgaqyes",
  "key4": "5mtyAhdRfoDMT3beiCWA5TDLe3MEqfn2U9X779YitNpgNBR1jfPkQh2rkLggYEMcxK3UadFpzNdLPNVMpM6reKVK",
  "key5": "5vXFQ3kGdmhg9feb9r8mv5MkMTZKK99HxeipQWkxQMcH33Dm1do7938sCemBVfL7AADXMkuSMAqRmZ1exVuXpPeN",
  "key6": "4ex72NUwLywpFZY2rkYHmtB6qAyi24ZN2KQdCKR1ip1hRtXoea549FF7MH9Dc1EgzZJm1bTZukEPEX3VKReCQPsB",
  "key7": "4vfeELC8KXw4kuNQ9cE1kX6KZpM1Y6snZAZV9qQdhYz7DtfRHrJgnSMJp7VngfgTYYcj43ZPikvDSnyaFqEvJjLh",
  "key8": "5CYReTRYJJsLYXrPx2PHeZNGbzuMTBoSQ91p2xDpq9JrHpwa9GGcihF4SbZuBioHDhjjPgu7FnsNvPL6LjVRo67u",
  "key9": "3Kgfhz3T53XG4pKXxkLuNcNissAKXWK8TiWCuYVFBJLHmH593WSR8LYNQUaxnPMpzK2ZEPqiR1cAe3Y3d3VMNom8",
  "key10": "5xjAFn8GPJNPrchjLZWarX4p1ezSaJRkf4ZRYXvKa4BrdZWyK4avmjneYSbyqAjwQXwbYyfbNMfbqKtG9qy5KUFs",
  "key11": "2BUcDusNGA7R22SyULeG5XyqMbMdaYW5vXLsMoAmN4mpKVCfGkXhAAo5vAuevZ6sKpTPgegXxs69X9cFmSUKKwUW",
  "key12": "5c5mL2ZQddZsBFFti6FbpmwCyYFdZHUEhrnSQQY4hP7xSg4SPr86Moo2dKsY8hn37UkdpmFz7BWghJg3jConmCvv",
  "key13": "51SzjB2c7ZMSEhNzAy1LUw8rYqbetMnW3YeZVsBKsbJRSkBdT1QpHdgtBCdeaDwRPNZ53oBsi7RXvYKJGwzonijx",
  "key14": "2xSXYs4iZ92WGt2Gm9kUdnioVgip5tEWfJrk5ed73JdPiaSPZ6SBevFgmdNVJXjuaLC6vWiUtT8gKpMgFC1bogo7",
  "key15": "5JdmdrWVUShetvsVL7CxASYJQ8CV3KNF8EpNsH86Mk8wJmS8CEvNnEv5ydtQ1KDfzaihMBk4AHnCyGXqRtx9HzQG",
  "key16": "58b7VKyem9PGAnuaoWdVm2T87sphEiQHaa4advuwTcWchNZekYBfkyb9K6nGE1VuEGba7fYkoXnkAH6nTx9UkqwW",
  "key17": "5RrsUEYhfPLmdPR5mpoPehwMLbzn66kE8qPNmgaq8BBmczrRGmi5gz1tTfq3acih3uNZJHfuQCwecMSsFENvCz95",
  "key18": "5vR7FEvtRJvfPfcS52GG5RYApRUvUbdgWj6HdKLU1ULc8gcdtpNMGB5sUfAyciLMrtq5noTYKcKrmCVWRyNWKQQa",
  "key19": "5L8hZxuj5eEUbWxA8TMCzdm5oUQaSDx95QJRZtARLLap9J6SLUfJgQ165p5QLGBsoSGkHkuWmbqz3tzB3J34igDm",
  "key20": "2X6ygXbYXwwMxtWPXZ1QEdouEgzgcaqiATAx5L2hj4wvtgdjotA6nn373vjkHvxkFkqEfTcAbLtR3VZ7FrJzNJQv",
  "key21": "3oStSBbaPBHZcxC16ttDRJdGshJ49J7cXGrTkT53EpDRQ6rAGKUZ5XStPPzDdB4WEgGMqwVR6FZHnbwwjPCMJ4uK",
  "key22": "3wfZFajVgNZrNJF6vGUH8XY41LcSWHr3adevbxUWPfyjXe1R3LGUkzr1qvggRhHwkGvqxXSKNuq68R1Rj6USffSP",
  "key23": "2qiUVFbp7TV6NjQyc9fm29459ZMiuHgnNoCBhnMoqY7RJtee6etDWteKAxs97A9FB8FGEP5hy7hb3rDkDK1WShLi",
  "key24": "3Ghv1BYx4c4khRxbLPgjiaySiKYtRTVnKPaDoLXkj8esXG8PYmXAUHL8cnHuFMKwFskpoojZpzi7PfuTbL1QXZ3z",
  "key25": "3yLhizKm1kVXpux39xv4xFX5VUitcVjX1mj56o478rDYMURQWsnRVHSrG47VmU5toMpDFcdKXLW5LjxbeFiXQPyP",
  "key26": "3NR9Ur3RFqdYSgPQnb7kDQ5FKgpLzSJMWgQq9AuBwLfAgNtThtfU7jaUMCVdEviziE6SxfZBAX8xc2WvjMVhkar2",
  "key27": "32h9yjZ4VRWssD7fU768sCp1JYnputaAWejmnTpXWcuWTLMCj5U12gDnNXwTceSzC2D8Yb8iH1fKVeY17VcyRjQC",
  "key28": "21t6ApQGUNQRFMG5SLnfkLu8MMc6dWgVN1h99UGSYgEvC1kUEfgz1WJ9XjsE19NvTjreFjpZRnpZE3yp6eGNzuQU",
  "key29": "3rABMQDCmsdgTjYTcXTdquB8LKmsDZjCbGMdajimaKAtW2vbN3qGWLYcmPKYfGHt9AqGSaKcvsH3WcrovR331diM",
  "key30": "2wg1g2WWE4Pw5AgV8w1ec1f7NFfy8yV4fBg7j7MDSDzb2revQFCaYy5mZhLWuF6M2BjyQVyueVraGmee824qAx38",
  "key31": "5stTbVShV5i7VaPuQcw4aJHB3qQ43uvRmrup1vGqDpixCxQxNLLUv14N4gvUAJKfo7LFCLtcsffn3TFqYojF2HqX",
  "key32": "Bn95p1kCYkT1zLMg8WUKY9jx95iQmy4ktt6rFSaK6h8k7ik7YCQ3jEzgKiQ74sp5yNTg5fokwLv6AsQpT1C6Cmf",
  "key33": "4zuXnSbBsb2ejMYpEsyLjZjEBNf6v24Px8RWHxmqE1d34gz9N9qRyM3MmEzgAsHsVyJriYMsKzmxbVN6iRim4hHt",
  "key34": "64zcHfzGvvk5Hps3w3rJYuj96xxNsxQjqz3LNDFjVc4TwWXJE4Pd53bcmkP7xV6KSYt1sWXUeGmzESbgKiDg1daE",
  "key35": "4DAJsGtbqKAHg89SC4v3nGAh316c3KJxa7VHpfEkgSFVqAmi87oHsw88SgU96MtVqXbkSCfdHwDS5kozyphCXFrv",
  "key36": "3oQiTVeEhEe7eNU8Rmqkr2tV8kA6Xc4CKtGqNLgSxumStqFkniG1grSVZ9XktSPHdfTPKiEhpNFhrZ7mLKmx65ha",
  "key37": "2fkwo5Pgvi7FbgW1QXdbHp5B6Vf8EZk6MuPbCJz2XEsdR5xXqwwtjsA2FqK2f7NzKWZHqey8fqb43gR64kMcRBw8",
  "key38": "2GjSDn41oBTGEPqqo8EWEJdKJXmPHuq1nAZaPAZ9pnUsz8FmmxgBQaUiDeQUsKzXvh6pK6t8EtjCmwJRUYdbyHQn",
  "key39": "3Y4PSbyncLoaD3oYvj8i79F9SGT8VMkAf6TwCCP5bFJT2yVGyMLSh85CYALVonb7Nc8LyQ43Lvdz87JF5i52zRc4",
  "key40": "2fv28kZPSvQCrpyd7BdhXUbykPhzMfjvQsshnNsJr7oBrAArRjiczjiXZ8zcRBiU44z3bRzojC74Lub4mqf2PaG8"
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
