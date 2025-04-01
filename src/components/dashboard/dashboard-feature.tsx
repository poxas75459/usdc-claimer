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
    "4HY7wCimRWFm4J9gEybC3FfXjMgFUj7KKi6HqrXbyM3UMbejhuZZsGwi3mh5KBwfEnBFugE2bpctL2bpZyEzbb3H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vzuW3kU1d2Qx2aBKQEZU6cw4pL2GtM7doeXc6rcDFvtDpGc1SCsKwotkLDKpSBF8HeWDef31AVVi3cfemmNdr8S",
  "key1": "5xLo976HeFz1VZe5RBp5PLHXRKwSrmBsNR4jLzvRqubscerFFQNgZejQLDJRkEvCVD5bRf4JTkx7fDWRajQZ8wqJ",
  "key2": "5fk1pkSTiWZ8x5bBDcHpzzKezp5PSuoPgswHyyiVXsnv8x37Hgj8hWK6JDJxRfLirvjiNDpGSBEjMjHH6PuU2b4D",
  "key3": "2bz5X7jCUnsWA51cjDf6ch9wSqWPqdZDQTVqdCmcpfBBWSnTxa5C4FBxgBp1JKz8rpkKovKhuhwtnLEWb1Mt649Y",
  "key4": "3QyYaBwRudu8ZKfrdyPbZeRNZZbNEoVzsADWVAWCE1U9zgVvB8PpUdLRBZzMXdDrMkukGzLgFpzSV7iLTZfWuAsZ",
  "key5": "2uAtFjmnfqXgqMuGW2HJsvXHnBhib88cJMcnywrZc5Cc41BYr1j1mYMncQgEKY1V9pv3KCBTbiCo8bbzJdSotd8V",
  "key6": "2JGV3gA5VQmrEhTTGHJpH3dzyexuXtQmdoeEmcafrbzDct59NZDG9adK4w5KoprSdRADXKMcjLgEXwHz5e6TJXmM",
  "key7": "tSSQ3iA6LWqqAtboCpdU2fsAZatrU5vxUoVriGo7SaKtez2Th7RzP1WNBVjT3AqLcFboXAX76oMqQ589zK6bHMt",
  "key8": "UeGhQnNd188m6LbKK9UbP53xPCnywvx2ecjV8Vnz9HQKAePR61ysqP4eS3JitfknPwFCgeYmqJUDK5Di9PLmsjm",
  "key9": "3Z3KfADGL1WeBwarVR22Sp6TACBxNTVJpkgDkFkVaQKuwExydrRqqXnRg6H3TsQYRQfwg3SnbtPqMqjYatvVtFxu",
  "key10": "2S7xqkhBse3wH33LUqpDfLsMKd9UBJdg1taYPQYFnLFr5s1VeD9w1yATGqjPANXaTdycuCbyYQodsKNBLbTf9Kd3",
  "key11": "4BHki55KeWdVfg1V9huXXJqLYDHqNyGYYPuAB6sDeU7xwyXXxbBCrkKE3CkrKGKNRkd9AEb9AaEL1J29SvJPkCxr",
  "key12": "5Rgh6aVyTWGTuJ7HXvB5CG31uWBZ72D4rLixUDYbxRGyvBfBozn27ijFBXvaCLmh1eLBWzAQxGETV6JftPaFCpNd",
  "key13": "2QPnL4ET1VwwkV8Ga4JXzzKxrEGatupC6wrAdfoATQ3zu6oZUpqrFwpbGFc1D42xSHJ9sJAUnQtV1Ew6ULkarS21",
  "key14": "2XAXTWCTE8nVqovFr51J6j1FrLkgKtn3srXNT1Aci1abNTonNCtS9wvdpaQ8E9HUvvhpZc7Cugqu1xtGuHBBWVTN",
  "key15": "5LAoZFv8dCq5ZHYPc3i1mNhUXtbAzoYWntMzFie8SoP1iNQuy8H5kMvi47KJSB7rDT7x8ZGCh5PWbeebeFQwYnMH",
  "key16": "5CSnQPwii6PjNfpyujMzV7bkHJc4q3JCBBiPaxE6sBCUNooqMNrs1tMHeoJDkfzenguuB7SGb5zAKActtmNsUa6F",
  "key17": "4R615Hf91ny4UnytdYRMiNF5AM3fb4LypmJJmGVfveNxJxiJgvy8sKJYTs82PTqzSqFRvhryFhvY7aMPJR7a45WG",
  "key18": "2nib26bqZkXqCznYviVBtqoZA13fr2U2VSM9BVkAgvdo2PASr2T7RZB9bx43mAfZ2YCKGXvj98Geh2HpwzDSLE5q",
  "key19": "2igR2FcFbKKFmmxWswStzSUhGaocenzB3nDoWojZGywKWjnBASKnhtiwYrUoft1QwBTf1Wq4EVeUwguRq5bMGmLB",
  "key20": "5iFFoC3NpRKxBkJMN9vWcieb66USwZnc7qzRVpvYBytjPPGxnfnN2fh9cVB9AMHP8NJH68P1GXei6as7KDk9GhxW",
  "key21": "FDsfRawkAq1YXpo7XPVCZ1yeuEzUPGzUScAYFpQDbRj3Gh69bgcq5ma7UECaN7RJcFwqzmQdkGi6ctgTE7pcMeM",
  "key22": "5LPrC4Y9UiiirUKzKwDxCRfvLqwAjF4cz7GZyJVMmYnkpVkyNwYV588CwM1teKNYCqSmBrjFFaFDKoZf2hZmPvQw",
  "key23": "FQDgyqSoYLyg5pfZmdbUZc54md1zv2ADKsgTBSuRWr1p9FybUix6cDR8nCHwR7n8g43ARsxx426VnZxgJdjzW2F",
  "key24": "2YfwUjVXSiUA1VxheFCJXCzDoU18nhqLMhrRxXWcfAWoXsFFNEA8BX34sKDE3bGXFk7Gds1A35cBosax2krrNEQE",
  "key25": "4YSSZ5A5fLascdHZ85zrveK1UFXg3t4FJ2JqDy2JHcP6BUuAthEGb7TmsJZKB49kWVYgjNxcotcxVrf1px63S6T5",
  "key26": "oqPGVRbARpu1796XFupSJA5k7rkwWLusg1uZyWNLAVh2YsaucQn3DkYSq5tVPRiMKQvGmHQNNQCoinsrNxFx2Nz",
  "key27": "4r3zc4QisiAoptMvWMyDVGgwxc8sYZjZi26tDzAHSkSbvndojrVmQ7Z6F14AyWK5TxtWUGUrysPBgyyEgZtfRV7U",
  "key28": "gEGiJ6wEetmWdBsMEH2GVkeYyYnt5VYu3jsvadWg7jabLUbDpu1vHdLzP7QYK9N7WTAAuftBgS3zEsNk1GNppgy",
  "key29": "5ms6o8gy6sfgebg4PAWYX73MnQPattUyHMtx6Pgum71czdwQKZNbyZxE4vEyreL1kamuz3ebLtnVbY739yc13oh5",
  "key30": "5hGBfTfvVWCLofveFbFqFZhzeVz9A6uuUt7H1Q2PETrwy35Bg1UkzL5wBV39bPCU1rDb9nchzRJcQQ7pmwg2NXFg",
  "key31": "4GchR5qi8XZk14Esqvsi8tL6pLeSutXmQzKw2BNbkDGbxWyArd5gpA8hVScgWzQWdfowgBivPNEsbQPLbKzq4W2c",
  "key32": "3JF3XrWPuJ9kz2m5CSoT3edAFvbsMov6tLzrdBmzRBmvcumYpHuurYj9QMvM1NkzEUdhpBpuB6E3dJHtUhQWrH8v",
  "key33": "5fkC5DUZ3Ezn498gJ7RQY7pa2EtBGavfFmFgPtxZgatedzmZQFSKTfwpNAQPfWj4MokzzMVUo1DhzwnF9Rr72Svf",
  "key34": "3YyP2FBgvNV5U2faLWRiX5A1Gc1HcmNuXPDBkmGy1tqAtZBRnbP5GD3PGZWxxpJ3Kqvg11txfdWpakgU1fx7dgop",
  "key35": "8RHcSb3Xy2CHPTNkLXH5JZi5C3SAmR5xa7H1EYDc3xxGyEhxgxz6xBaetRa9NxFtzLoq2Fb9m4p4UjucF6PPjhi",
  "key36": "2fuV8xMftpobgt6TCwezjhWZ9Kcn79UNN5DBkrhyxzEdfDrWKz9Bue1kCzbyzLWbEwryeit2CdWfNDW7c7f9GXsS",
  "key37": "387bAryFt4ZRpQFrKq5vr6agN6qdFb9uLPFUs1pfMN5Cg6DKaZ3GUjoKDCQ6UtRNBAbdkZeC3dwZy9Ctg8PwDVPn",
  "key38": "52yK8zKMKCUcvra1sZKCnURBqyfCvgX3PPfZMRSqPTnZYMkXVSrThxvg8LjK44DevmvihoXv22ESa9seF4Tk5abo",
  "key39": "d4Vr9xQsgUGJ39wYu3jqoGG7UKWRDPBqPtDT2GX5HYBEVriJzN1qZum4GHNTLULK4gx1zuVViMT6gHGyEznBkLs",
  "key40": "3At5joxXHHrgDrfkHVe926BvYTp9wZfTPZvnK32BNq6FnGk2pSkMzbg7F7p3Y2q1AmDcN88MX15Jv2nX6EaujjTq",
  "key41": "44JBTTfvsiqtGBpK8KCEuxvp9ZiyhPko71CdZqEpBfzyjciTtxjR6AGuCTXxmK6RLeP6BviQy8Aa78vX1PjnJLMM",
  "key42": "59Sck4b2sQ76xJd8UBRdbMekAwPqetimtaCstfZCokWicPNVFT3PF2nc7XBfiB5ePAnpyGp72mgjEyw3b3DGe9bY"
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
