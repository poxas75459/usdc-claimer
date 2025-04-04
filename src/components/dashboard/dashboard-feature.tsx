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
    "5BzaqYYaai3xkSwShiCAGeeypgyQdJvBymYxTwEKcHMSzZS6UWF6trKZQbSbrUnzHZUns27mCAxZZK8LqGiSMXEP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vKkrsourXagXuSn2NrMyWVJfZMQfSQnZH1oLqycK2p9rmsH4bwcDNEPbx7RLpvtykchmkSSuPqUoLkaCJJEaz4M",
  "key1": "2tnyboEK9E5X14KtrGmYueDwK5B2zW84bqASAM75kGfGNaHKLRyE46fFFU1aTnYgX3NhJ5m5LQeJ2aQT5SkxAzLs",
  "key2": "47FFwd5rdzBg3CYuBndAucZfTW1oKJatkjdPxph61eoQvapaMzx717Pb1XV4kxqYThbyEt5ACL8nTykvqMwGE4zC",
  "key3": "4hy9pX25EJf15yu6m9Z3JDEF6HGF7MZVeqtTC6k9gjarQWpwie6Y6e4myma1kxFxfSd9YuXgPcGefQyAoy6MkgPw",
  "key4": "3scT4cN1JjySKQezwqxBKXyEQkPp8uYfmAZSKVsrksriGtrK7nRrdXNe6EbEuamSZLDhA96nPQ5QMs4ReyHpdSWv",
  "key5": "2pMuzGBDsh77cWk8fbZ7Q6773W6RXv5jdPUNPwdcLssjq1yWuAMVWMdfDGk7uomiN9S1fefeHadXPYVk4sUuTN4E",
  "key6": "3d4V8LHwB55HDyY85G5u9YMDmHw2Mh5bVPMuG56xyoD2VnkgSLS5Ko4ctdbbGeMHNkh8bkVoQ9i77rP28VL44EAq",
  "key7": "4dgMW9fPCztqtGPJNFZGtYAv8tB7onrnZeW5kLdLD3vZR3W1f1oeXkvaBSieJuTyn7HYqtBiKfMYYKn1CTXVpFBw",
  "key8": "4TxwWQx7zkLyQbZ6EJqS2L7WDrBc7iDJSAPkHTA3WcmfzzxyBxwNfVaaLF6a2iouPLfEL7vfQ2mptsJDfLcABhyU",
  "key9": "1PFimzno7MNUNUYKp6WsUb7P2NHURgtnhingeg2cFxPTieLJoeppEhysF8fkkrv1V7ByRwfrf5oBiN59NuZmDCq",
  "key10": "3d66EToXNZz1eqRYHESdngtxrRx4pBSQr6nEfaXqkHiji4LuZprWSd7r73DbneEvxMPzh8nPoaE6zYfuJnjrbBQn",
  "key11": "27fFzodS7USzHnLoRtNDPhTprZ9NNFyPHzwfhTK1iTtxCXx7X3GEBZEj2kU8tZgM54k4Gap1B3sLSMoDPvizQtQX",
  "key12": "5mceTqL24rVijUDjNfPKTnLTkNAF1y5aZNgDxZWaNntxhKZkF1fGCdhCfxmSpRj2T7Uu9WfyVGxFjHGm3BWC8KPv",
  "key13": "xeyiSGdAUTnBxxCqbJRtC4B9rDGFmjsUcYhHStSNyZtKxehyUHRnx4HGze9bs9e263SgZXsnAZmmSyxunD4kgqH",
  "key14": "64L8hfQztmdWWCh8wMTyLKsxCLsry85BnTT9UcD6yS1VsFU62CPXEg67ahsPfsyzKCMEFL5MMumV8WRUGTCmNxaP",
  "key15": "5vSk7gAWa9krvm5U6WsuSWtrjNSnizYfdbVtDDhky1QUvgjVmnJ5zdYJsToHCQCuMe8T2cmEh11B6sEHefDWw4m1",
  "key16": "5b7ZFdDZVdJea78tV5bM9zk5epnX9tLkwGangdJWnj9ewZ5fF6ByMBvHkyHV6gpW7b2LWbEAJQz7mnNp2ZNR7Rv4",
  "key17": "3W8eZR1vpZtvtEhVrXhCPdotTFkaaxeBmD4P7RcTuz8zcwWJvU3ecAFu2mKgy7AAPq5yUrzpPpSmPw5N96tgPcqk",
  "key18": "4b1ETszG5VYQBhMUX2JpBjkXrhPLAGanjPDRnwAKBgBTHKU74WK6vQWJZ2PY3yfjFHZLNXiC8t6ozckVhS2dqiy6",
  "key19": "3ZCp9seJiv7GZJUbGRKfqiq8rU8QSUVRenctv19uV6iMJ6y6z7qmSjjVsSD8v9hb3SJW8zog4L15ytuQgvduD8Ss",
  "key20": "3vbVa4WdyQeE5iqkmKmPaE9SKHSfhSKXKkQvZGTiZ8gVQnKevzbktbcQJM9tuJoNjD8FDLF2nnD7KN6qF8XY289r",
  "key21": "5Ytp8gkuPRHQtqugenWdcJAD3MG6rGm7gat4Z4KPzWEZ1sW9T7NP7FdMXaKUQGaNnj372a74T83uivPMmNdWEpWD",
  "key22": "3Ux49VxPxepCdLAKVygKMLGi1ovEhfej3kunpWhhyxa8wnHg2JuGYjxvU6HwHUwmfCYCqHnRk3RSiBBSMukDDbq4",
  "key23": "yPYunD9GxcB7ihXhRmzkZHDhHdAzCte3tXtVvkX3ENCuNbucspLpaE4jft7GAfoE9psqFLoFzgKCtAgUb1gSAmD",
  "key24": "5NuijrtHuoRcoKr387rWhJCg6b5J9eFV9JbkZk8PcoQb7vBy312uRamJcAAGqtS9KjCFeNETFVScJZvrLbvVinq5",
  "key25": "4yux3MJ3DS4M2Ft82Tt13oDYoH4LbEZYnRs8mR3vqJMaTpW5LNpE4djzB9VnYzERhPH1efPcd8TteDe7GvQCDorF",
  "key26": "2LXgEtAcc9m2wuPUBqqWjHkyJESUeRB1wTes37TW78GkHqtUVx6m9WA8FENp9RAJcJUdCfnRkw8At8mH9KasfCEA",
  "key27": "5SBYyp8Jj9JXxztiD9tRzxETPwDj4veSS57tQ9BpJphet6sYXxzJqPkfCrFCpSF1z6xPwAsQK2vfFbfiVhthnDhz",
  "key28": "4UAX9rnvQyE17gBgMWJLGZipvNi5QvHjv2ckX89nVpXrgUkDr4TyTNbNBvE1tBRDsu6Ku9kFdbbPgj2AtTTuTaZD",
  "key29": "b81fSbbZkEYnLs6rgFR9Bob7EBBbf6RRwnBXkcQsGTChPCZ275EsCpaqJMTJAQkPdxfUup6GRXSz2F91pMTcq9R",
  "key30": "59a5dCa7hH61vuURUr3TZqfPK35HeJnhcqA8xmHjpRKwvh9nwCHyUX9i6nvZTGuqkkconxxLGsDcDCDQ3nA4DScF",
  "key31": "5y5tGFu1PP5Pt9PXXT3VoiHef2RUqh7S1pJ7t3zauUEsGbZhZynUZHtMrkGFZ7KA7eNYbbeT1eqvsW9J27voZ5wd",
  "key32": "54dPXY1Xedj2yPLi56h9eFP6RkEeERhZxZKRSC4R5dvJA51eUda2tJ41j9ASAZtpL9kB3ydFgc5m3ogBkt9uFcW1",
  "key33": "2VvSGGZz8uArrAmvyJ3gYfZdGhL7GN5KeHSMjn8rPe7E5mdTtKZe5BwyRaqsfvZ1ad14EwCcwH7BFtyiQtFmf9CP",
  "key34": "4dAcdv36NNoEssWYUvSc28yJnLWQGc9kWbUEqyZ2S6AmZ39T1MNEMLwLypLQ3UKokeGsRCmcRETafTHB4KCx5wST",
  "key35": "4mFpUYTcVnfBAWRPEpVfP6o9mA1VAQ7xBgSPQp8JXjuhCpr2msZyQdAUuFSA3rcpcJF8LSXzfy5Ga3woiXxNwAy1",
  "key36": "5DbD3MPcxa5zveSDcy3XvtP65aP55PgzXpeFSPUH3LCs7EQG91KAEmqoEF7jBmW1gagEP6qn9NoyUyNVKVYWbQCu",
  "key37": "2ihu317E7S4YgPDqsGT8WreciJjaCXobJm2nZxtoaostb138hmqYPdb49HcoBJotMFaW6Kp68H9SSfDt4v5UA69q",
  "key38": "49fyfQJXRuELi2vZoPb6oKw4PCderYV2GGkn2vXpwAkNXLcEXxDi6curQEXe4mM1omBazeowopUvjV1XhQc4tZL3",
  "key39": "38FUtY6uXTkwiLaSWnEZnRkFpZvo8bGqDgFwfLX9q7rxu94mmuAtGMZHb49pkmJuKpj7DxXQWrDFE6ntLszPk8cJ",
  "key40": "3TW4BjCBWLe7teL37WWA34NYzETY2P9ftadX3beq163fw2p1aAG1Bprm4QLYuub6dLgYw6TEP4yWec7q7VpyYU53",
  "key41": "5PdXWur7MNiLLbUsD6nwj11JJHScLe3BihCztWQ9o4iWx2yTmuT5kyGq5ebEbfdzbqcmagfqRFxF56VvtKSnAHMt",
  "key42": "3QiSEDRwMghobg9g7CGhztKi2QGPUY5rX7cCBUPVD6bPgSHQLQZNGMU5pdNup4qgzXvwkxTp3QYcVi37vhD4XJUH",
  "key43": "5hF6PAy2Ws6ssieWrPrK6eGtFYEv9DrcAEk3Xnypv3wDGcV17DvHpwVz83ERzTqc8K7UzUEKrq4DRXQpmRgZPg31",
  "key44": "DTvw79ZCfmJGeAqUGz7swVGTY34GT1Fu6CPHW4ZRD1AdUTDmPDR4cPKUsibNZMscdhsV35FmSP1gZBNXdx4CnmL"
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
