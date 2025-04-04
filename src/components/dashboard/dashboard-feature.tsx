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
    "isimFgodxD2JSGDdaPWdQfm1AraEKX6LVtEp6U25N3WTfPKxhW963SmqTMZknX2jv5Smz3ctho6AvFx6dNpuoGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ods7Ckt5XPRfjBy1ePFRGMWLfkW1tMkMX2Z6SX8cMDuhcDCzyrSi9nPj1MLN355Jvo4YePNt3HTNnuy64Q6y3ut",
  "key1": "27xTRmqbv9JeSGPvbSNDfCuvwKaeCzsTaHUj44PhVVci6gJ77vReuF5GfeMBWA1RYST8PWEMRkhRfAuMJbn6ZT8Z",
  "key2": "4uL8UESuW4TUiNbAKDTK8oxB1VD89BAnwkrXtvnmXpoZhVKYwJ3FSnUd1xihnec4nP5PWaC2HgzJwZvhZJXZH9r1",
  "key3": "4xmiC3LigALcNLsdcwwos5WWFpmNz8o1u7poQQvHBCwZHJg6rZTmcFp2sUFTEmFjigbnXzXGzMP5kswGNRra7e3K",
  "key4": "rxpbqNXQMBZExqRyy8pBkDtDTkCDS529m5HHhcS32MKVDU8RyVYGv9ifW3AYqLEgR8dE56ARbntwtoFSvoSp8Y4",
  "key5": "2xRM5foUxAez5HQk928JwdRn2yUYH6XHmr5zwcxRxZNM7GDZBTEL7kut33z362Fk5Y9iHDJZh87HBRkDMYFi7mCp",
  "key6": "2CNqLQXqcTdYrkJH14pmZd4hT7nUSyzmP2Xp5n7aK5e7zYjvcpYSgDqQwwRn1fQ3jMACpFbVtKdPAB48W8haLjTu",
  "key7": "3Gk6zRejLgK5zQZm2cbKwrfxUaxL32ouMFt9jyY2XUoiGhnhwtB76LCezwVSz4PLRc5nXuJst71scYvhwcYDzDTM",
  "key8": "43daRbhMKBBqrHsBzkK1d5nCbUGWbgwh8U4o4BjwdnpwJEZapqmXKsQ9gQ16f8PPVwXNKmriKiFU28oVbuC8tJ59",
  "key9": "2VF6oMCBK2GjERFz6MA1CbMFHhL6k1oy7AUtMRJzRi9TbrEi9Qn73VaoaDXMi6XnbZQfhMCQTJ8BaBjs7SJuxGGR",
  "key10": "4Ep9YW39DrNEX5fBa1DNoMAUVsmMgzp4KVc8SHh3zX9U3zb9Wr7qRT2SN9xhixorbZ2upFgSTzfopsmtg3qctkjq",
  "key11": "5CAunGjXsZbXja8dvyLo8gn6xTpkrFjb4gGaT9pXdazKF4AxLr1z8D4fiHJviGw3MyRGoaKGPmNVSoXjZMhijEJf",
  "key12": "4uDWVeUgP3dqx2kzu58Bhf5sAyPqvRN3BWH1GnGbXiCiS8orTzQ1NqRpQR9JFTRBEQ4W5oVRWtb9G8K5JuPVPNUj",
  "key13": "2vCfih6CPmFVxkogqLmdos52ZnkGERVbCw4ASrzuaX6mwueBmkvnBTtZiXc9v6EPdTHLyc7bjnb2mvkMciMuecZW",
  "key14": "25yVemAnyTjFGtgs4CBigmi96rMXPe6kXm6oJeku54yCpYyjCKFuaH9W5wPNYQfmNFpTBo4yY7W7ERig84nVaSaK",
  "key15": "2fuwC2rB4MFBp3GkeEfzatBtZgdmFPron31PvYSAL8NPXgp1MDP2P7BT3gj65DW3RCBRmHczBPsmqjvjC2pD4uwq",
  "key16": "3RL2j2kW43JcUSYUmU6XAEbYnaDV4T6FZbWBoiyYnEUjSpkLEPHcKbo27htP5SQiiBPgvBRLmyiYj7hxgB3Yhn82",
  "key17": "2RuYZBtvgMBUPjGm1hzqLjRnky1P5BDipJmV3XdjXVbaHjupK2LbS6KATtvn1Zdvii68YMmgzxaBCqrP3wwViP1a",
  "key18": "A5DEsSRGgiXh47mRs9BAn91y1BgobxksQLPaD8bkD9kZapzjd3tpAcz1j75kC9CV3annYbrkjMQFDw4fdMuG76w",
  "key19": "5UEm79xV3qHf1nzeE13qv2hA3Y14D2cGxGcUmPdQ5i8fn6btvdVeqMoi2WWBoUVkp7LiFEb4GY45XLYV8Uog4krL",
  "key20": "oCXYB7FjoyhH2YwGq5piPUFbGa21RKneem2HqeJ7cUpCyq6dpLmXccghHPR6xzWgaYCFXn9befB8j2CXfPBJ7Py",
  "key21": "LSLmekHtzFkA7g1F3UxjZUzQNfZmHoq3J3dsSrKkSFexy1cC3j2X9wXNnP9hyrNnednoRaTkgv1PbqyQkkCj7vX",
  "key22": "5wK88XUYZffXgWfQ9BN7UY5PGPXz9zFhGf2k2eQGiq3FwtqeA8RYRB6oEfc5mwi51i8jJt3F878jCks2KLpGZ9Wk",
  "key23": "33quoQhUiquhxPBRdyrAcwzaDkFFqDfPJY42oY9XmevA1NmbXeF7BRSPfMSfiWnZSXxjEhinthpWJXoAuMtE5cxG",
  "key24": "2gutXsZuNb3m4S2Y6r8cpPF3X4JtBXgSWjKwWa4GZ8PbAEKWTwzoEXuGkkx5Ff58sd8T9kUY5nfjpgwz6Z9ZSBJs",
  "key25": "4Wyf6M959tkHwX9Tbvp4fAbdteuWieumpZG84beVntWxTRr8dEbKEK2UUMaKh4DDkYWeBBUtvrwt88y3HZwuomh4",
  "key26": "3TyBP3pDcvjicamk98NndNWvFFmmpDyuf51Y7LdZiebFg5hRpyJQB1zd57sFqM3w2jUW17YFTzrYkFECiS46vbiu",
  "key27": "2RKsqq2YNdBecYsGe9cg6rhDaNk7mpw7bBz2Xjvhat7dKtcYAmsh9kN2YiK69RFDDsK29wAWVri3PmvWZ7gF18YD",
  "key28": "2QHorL2ihvfaGcfKHttH4swBFHeoWqTYJtfGzqs1XaykAkRW7mdKGjEmadA4QjToKKkJxcxsbMAY7YacVMSk11SU",
  "key29": "4j6McnUqSyptLaJwbBjD5HpQTwaZSzGsCxdspK7WQ6qbE1MuPkwCC4QpqjM4vCvVZ8MY8xLCfqpC84W69qQDmPTQ",
  "key30": "4eQfSTaAR2aQbYpB49VpQkHNroxhYHiUvNwKiSTGDocHFJuHx267dS6gj6JQdLKqjQBypNw6ddsL4wvopbTSViH8",
  "key31": "4ikSr6bRTKdLoeeLViEAkbCme11txGg2E1Met9vREwvZR2RcQx3T1nZE29mN9WHavP1kg7XrUYFeww1roT8jpCDw",
  "key32": "5YcPEsBXSPySHzZBAxErn53SXCf2n3UAH3PwCyc8oZtUq4DiCYrM1nxjFjvziMfhJA5xnkwCBPKLRhQKbj2JXaQf",
  "key33": "4NW6dGseikAM1suWKYLM7qJcbe418WLKeNNJ93LqKqa7p2QBx5ja9KGinqCB5E36JwXyQcopYgCfcGCjtRpqJrNP",
  "key34": "43sMYNwVZ7przBADR3QugHTdvb3jKNqoxbiNFVZ88w2pkUk6AJ8GdgKwMjDBJVYJ7e7b2RPq1EB6ETaUkAs46vJp",
  "key35": "2xMcEA4922EZGn8mzVMDvATGjTy1a419uiDbeXn122uqV3g8RAafc8HGgcMqf7so4yK9EZhobVRX71svCQhsyn7v",
  "key36": "nmmcjmW4wMPA3bXLaKAtDsLNSj1SuhTyqCYLh6KZqbcu1SWKDwJ9mCsFLGgNA3xbj8TW5FHFfe1JcJQ5Czm2uWt",
  "key37": "5cGnQ6k4p7eKGDv5X1o7hthUUy3wAzaeL3nQmdaqMNMFiRWog7dV4ZWW99UKyyboX33CiSpbfheDWye7EpT4o3j7",
  "key38": "3wAdsB8L9PtC3XH8khmJxvZARgMV6q15fMzwmTQTysLaH9EfroRrfLor2x6UJoZw5EuzwLrEdEfwJSSKo5UQx7oK",
  "key39": "astHvTQ5e3Z3omLqUsD8uHPVFwMpMZGcKu3a1MnuCLiNHTU4XLJZF3tGdRFaFDyHccAbe1UqRbL3dNg49u2up2M",
  "key40": "4thqaJ5jkjvBryDz7DVkFCq8w1BDuefUgRoKaKfPFt3KDsoKvuPoy9GN6zgXeLJLgseDxkVExCZU5XvHSgyHTwbk",
  "key41": "61a5LWfePAa2p1Kcb8iDGjScLbJdwQKxcg66d4b3ZsaDuJ8FCLe5bMQRvE3keuXhB5jLLk161gQeGbuEoGFXjfR9",
  "key42": "2EhGAQfRHEqhsg7UKhiaz57pjWKKw25m8x9H9TYYDnGhV8WMm2Ex4M5ATbSViGHqP8WBpUvNgdewFn247UDNUcLE",
  "key43": "2n8Qzj8qwJLM8WoqA1o9uw83ViN9UMR91mM1JSVVQ2z9ksTskhnr1VYD1vGwK9TvURLB5hF4AnJndwQXi5XELE4q",
  "key44": "3mGmEFQAttAnqhxNWwFZsd7AgP7sKbcQp84YEe6RZtMRSgKt5BrVsVJDhVrLhNakpTw5ntafKzCgCJjeycivj4LJ",
  "key45": "3QK5JeiUqh2XvwGNvEKDrmtGu8ZTJAsh5tw2GKkYsy42QEaQnehZMtNZFUnertAAjY3db5yen51MeBgHvcXaWJuf",
  "key46": "k3WqVDriv8j88yUcWLWNkcPapYqVxN6u6vKNteTRDTqefQi882v9czHZTPJ646u1VFBPTHk8BV7M7W9kKaz7GkM",
  "key47": "w6waBWoPvaJPdMexR6WYnteD4hrb1hccMqURqxFhwYFLCVbKNw1urKUDxpjimSDArhzjw3b6TWcEu8kioAsbZVw",
  "key48": "3f5ftw3rJasvE3cSzwrGxX3M64tv7tWtew8fMJjDSBq2hPfuhnJLg776ixcGVY6crBePEcAPM5Euu6pKaP5WHnVq"
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
