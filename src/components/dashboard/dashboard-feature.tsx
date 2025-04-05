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
    "3Md7fsg3xgNSPpmWJVsZEkfnZunrdDyi36FHXAEe3XCqXkvrbL7sK6UVagmA3iUJJWhU7QSf9A4DtoAWZXVarfxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27swGNrMKJLeJxMoMAKgR14g3vQk2jrYWbfqfVCgcrPZrhxSeTHi3GomYJknHqG99NBDrwBVpgNVkuWCpgzp5hnY",
  "key1": "5ZGKVEKy7E5wEg6S7nkn65MrPTw8pYMCzfzNbCitqCJ4LHKcZBe9ez5uhuQuqAJA32PTtoAim1uAwnh9n2tgTr94",
  "key2": "2VLDq7fjgevGh4d61MZdeXQxjeDT8J7hxBsd6TU4MQmdbTYWP1Ki9CRZjBXmcnfmd5dvg4LeL7LC3d3QH2Nt9Wsx",
  "key3": "5eAQYi5NyMXj7kqZD9fb1Kz9c9GzitWgjPNfZPuzY7g3S2UgsBfoTkgJKjPHsLpFgBXgNWsVbBfZch5v4a6ZHbnD",
  "key4": "2TYUCcFSR2yXqfgegfEuVrc47tSCcAoN4EXRb2uLQAai9Q9AtgfWSJSdrtAt8xBGPpaDaxgGcBkfJtAMbuEWbyUW",
  "key5": "4rfF2D2jq7jStLRAtojRT3u95ipitjBLoGerWSHibzzCNnV65BKctDYkocLxXtDaYRTrM3468wS96BYwSEPDDjcK",
  "key6": "4g3oj97goWqodpAZzmyFNMPnThGC3bPkHvVN3iDRSQCZWeeWeBrzGSgbdPYc8H3zezCuX5mc5o58XRn5ZbYsVoAE",
  "key7": "515bJqTBTn8YzFLM2QCiKrb8KyYKAZjjZGddsZbd4jy8Rz1D68hNsp2DeQCy8Qh8QPpeEsGiSmAx2H8eKvuCrpRR",
  "key8": "4vswg2WD9ENXtUGxZqZtSUeFWLUnNxqCKVkDpSYXtQE2uGRFtUb7DYzrFNBAAVikSfWQ1qmcrQokDtAR51ZrjK1E",
  "key9": "4BqgQG7CzTBx4k4dCnzW9RCUEGD6khRN755LLyzcAugpinnNLMykTGoLdXFGVDMSoMpAz3XePUz2Rjghzsd7CXZy",
  "key10": "5N8TSrRJY7kuuAjNSNnB7Xwg41cZCKHe69pByw3shYpHsXXSVYSuqoAWtEB3U7FuHN6YsxxtVxUm43AVifzENsd9",
  "key11": "2VeCZUt3TRj8qyJyF454cbsQd2q6RVLBuKHSsH6RWMd9vMaDcbAdb13v3yFL4Fn5ZGdqHw46HjeCVCcyuFYWVGnk",
  "key12": "2opRFh9dhExKaD6yjiBmxLSQbZBqnHwXXRL9kXNDhPXAgZ2hDE6fSJYd2Ju1r3vbwsP46V7CY89sNHYg3A2EJUCy",
  "key13": "3PBUYFKvCG27rJjWJvqBGU5eswds42W9NiUV8cQQSpxXw2JHgKRe82H2vyFrbnSUX83xhki877BHSWyaUYzgewW7",
  "key14": "2eNA4rBZngpRKXYSLwj17zZDXgApWSbkJVyFthdEBJnkXRXpexXcoPB219kwt3i1L7fuYv2vk8MSpmENRtYcVArF",
  "key15": "niK4utDjLVC93w4HhA2jTfvassGLZSEPwmS6Pn26ZsBqp5Pm92Zx7YGq4XVnm9o8eBGVRsAtHpayeo4qbXytHRg",
  "key16": "4e72e2VMfMSHLmB1ks3vQXEnMymNikGvQ3xpuSsu7AewF83hDePCiXeiF3NttLt2RsC4wEuuRKQo7CThLnjt6Gpz",
  "key17": "ibPFYP3X9LFpxnJoUx3gLMirfZdvJ8Tx5qZU4D7LoBtcWkazZHouhddbPpSFxVPbK2XKkxrrXwLd6Aa96D3qgTJ",
  "key18": "34rwnxawXvCG63BMunoun4rCzQLjm6VFP5Yg2KiJGDZmPq9A6roqhtRZPkxAD38iPGV3bSsKTuPJrd6eQcWJQ4q2",
  "key19": "4JZGTNYiJA597mkEiEvVGBTbbUNobyG7epocmsACRJY2LUDk1DnmdPbka5Cc4gNFbuBxFK3gE9cei5FuoNCK2ApM",
  "key20": "4JYUbMhAzw7kqqrthoS8utUpCq4hyPZfNXQRPKt5DbBMLX9n6AXaF7uEzoEsxt7ge9KAqdTkHQ7wWERsWmmEBpF6",
  "key21": "28ErYubMzwCESV1aJGVdpiqphfYDzXPyJVJDdcSFD95zZgbe2uP38FQBRfDJQUYhEWZiAcN8WbBWwBp9BJ4WwkGa",
  "key22": "52KYZR7QaDH6z8gUPQSokiYAQsRmFRk3ZXR215Rb27eKpvWcYZ1jVo5fk4fH3xG5yMGJtRjfZhCJMGKrAHXegcyW",
  "key23": "5Z4NftFf9KigfdkHskXXa4jkifAnUifgK1tbR2CJjbq6tsufRKT5fKLKJ8juNnEBge92268FoAJj3Q5QKUTzp7EC",
  "key24": "2PhF7Nt2ubCAXfScX9iBM5nkGw11KcVv4o24NT1kohivZkV9jt5tiau7kpLZcHDxFr2rzVUEVYgCdCsCmdhAReim",
  "key25": "2NKQfmZZZ9BT4z96nNun9Rm2rKEjobB5iDxsA8rG5aGCfrQufNmKhdjNDQ3BGLmUWGjvzqa9C7susdU5JEjQvaLW",
  "key26": "8JPFebfYy9z1Potk9SosZnsA8Lo6DKj7b4u2C8ZPfSd6LwJDZMABwVhabsbQ4qrKcJTh5JPXvdNNYjv61etbZRi",
  "key27": "5f7SVgWTMfMW9qG3JarkoqGy9uWZ7S76rD3PHjuSfpLenoTSpLjhmrWJFYndPNzARm2N8nTJCXqt6YfquM8jEjD4",
  "key28": "3kmrj3vgbrNh4f77NH7gYXKj478JkLYfMvHpmUCVg1HFe4hHG5Cr7xs4VBbbg1VnBpnF3hsj8WHNyWcWn5bnfDLV",
  "key29": "5SAywPWXs2s1L6negvC1kpLT2PL7HAbt6JERwWNqZ9kjf6yTtM5WmFTPUYiG3nUQJYVe5qcjmDbiEAtckhu2zHsU",
  "key30": "Ud4AhMqKQvjjHTceQB5y9VguwGK7kHvajZMr7YZsZyY5kBY9C1auKCqar7CPx4ARfczBwiPERJFeVNQdQxUhGyU",
  "key31": "3DC5Nv1oinjQdJ18JMZRhNJsHujyTUqpC5bNfVAHB4JTxPAZbMDT7Qb67nA2kWhTkGYPENHtrUuRisevK4Huzm1H",
  "key32": "57ioFFChfrqL7n5a6NDXYr1pUWk59ST2pxWyhpihmyJwBjLjFBKPnavzZD3zKtGKWHLqnwh9Pu7k5uwZTNa7kJRj",
  "key33": "3v9GZhajqRRwhM7JpfZ9qWR99C4Z6Tpt1dDJMzKZkxKHHZdH7oEKBSCBeJCos483L736aACrQKb9FXM5XhA2UCds"
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
