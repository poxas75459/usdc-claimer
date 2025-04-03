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
    "r1hE9FWPhdLH1WoCUdNRZWg53jZw7EybBX4rqELa5HZZxB27YALCMxBzyhpkg7mtHsjEn5eDWpUL33i6cb3AJpq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RSSMLhjUsJaZi4Fjq24FkRjQ1sKDLcEJceUzZByMdHaqNixEwYnTRag7pDoa7yvs3yrs1avVAhTExuB9yyPuJWg",
  "key1": "5gDCtUoguG6aZBUv1dyacc5aXouY9j8oDMPmbq5FP3Jjvf8zjB3hrgFgMugcjF1JBHS4HtFJW4rS8h36kJ3MSwiM",
  "key2": "5LaVqbDKwjkveddMSHfq45PFtLWxVMdpBPmnpyBfEhGE9neooofwpSrozWbTYTpHU2GrCRW3GrUtLCftvek9zVYm",
  "key3": "3UQpVsBDoAWVM5JTdKNKhqgv2DWNZ26Qx8uj1xLG8pEfmo92W54Usyaea1sibctR6QSykSgo8nW1xsEwZ8BjEfDF",
  "key4": "5uRd1VMinMirktzveHev3hsmCKTCbPSyjCtawjVASAdbXdKn7da7W2ZtMgcxXi1mTDyy4kgGGrigfHae4YrGvASo",
  "key5": "34TAnWHmuKqaTQPxy8d313aG5BEsKeyBJqArVbz9U4mVAVkNrRNwjYyR7y4cmpZiYfKiRYSn8qG6gDjqhkpHyJGY",
  "key6": "2uzNMK7z7xUr17RWbMrRrssiGpVaqWz2MREZFQXwvryXEjbitdxiGJgPENcBFVa5NpwtnjdR4fKbBYap9rCosvLt",
  "key7": "4FrYBv9PY7xr7qSURw7F8RjbDRG8xdYPmpzAR7JqquGBDxFyPY6o7jWGSthHfjUPSg4wduX2i8oSNeRueQNHtWAZ",
  "key8": "3Qw3C4SCtzhW2wBb1FjSk4EXEafrMc9wQF46yJ8DYBidCqssNctUXQcbTyzNG4R91ZVd2bvcuunrCaZtARPWBiCn",
  "key9": "ShioB3QzrKYBpGxcDMARNCB7xcrY2BL9jXag71QwDiJw3xj917WariAjVCxAei8JJr7s3Zkww6PjRb4jY3ynHPT",
  "key10": "3uYW9UT3y6dycL4WEQHyErigcJGbNaTVVhFrgEFGgv2ZKqco8A2eQhgkJNy7J6nnctgGh1bXCNA8PF3ygFAsWRXi",
  "key11": "2RU79eyj8Fub8xAnKxkoasNwmFPakkvgSafiJZrSJ1fccosYwcVCrHM9ihgCpPrZcoT6yCpvepYjwgpoosDgHKLR",
  "key12": "3ic8E2txWAaxX5vgSwRB5YQypcYMxjfhJ5kV3PchqGBxY7j6NGrjdtBweMHmfNjAA4TAAFpU7kZqVKqVU5ZYZQM",
  "key13": "a7tGMyPQjFs4FjuL2mk1wdJGEpE21Euygd8mFMPkdAtf8kcgENTe1efbiVbJ1Ko48fueQVqvy6aE5zcSuZXrHzv",
  "key14": "5KY5xEm7cVM8uz2t6tGAhUWujPWXcNyfp8eDiTDZeubmuJfwXbECTKbBDhF2cyURSJKzsWtHJQ8JRWNskJBTC7hb",
  "key15": "vLjX1uWqEctJYgu6azNEk13xDH5d5qZkxpesaPZyBwe179FaQLRFRKCgtbiC8y6Nm6mF41bbdP7qEMF8ZvR17XS",
  "key16": "4W7hMfuSWtGktP7HDjAYzT6xPfN64BPzaZ2CygTMyBX3sPcaktv5mJ2f6NHUskuZ3oqB9uKmKPASk2C1sFafaBLv",
  "key17": "3ps7ZChtKyXp87iTMwFBDV4g8wEJr3xdXYxyKWAgX3E88GwdfDncAxxd3qYqmd3BdbbPAzum82vuNE4fUPJSdDre",
  "key18": "27VcgAYH9Rg9bKhMnytjFN6GFtBDWrE4ktXqymMNdTk97RM7XCq3Hqi2HeYeynE3qFpuaTuPx2pFbJEihWVHhUyF",
  "key19": "2eR7zKBDPmkAGuuRzdMf3E8b2LdtfsRfpFbwib8ujssjArzxyQwDDC2ockxk4QgjSGzTPMeBLJ4V41f8RdWr6H8s",
  "key20": "XsPXaZ3tKF6k4DF5iNNWAsoW9VppZXkFRivxSrxUTPP8ACfvUZix6ymdajB38cAL3gscPkfN82ywDx7CLBi7HsL",
  "key21": "2zUPWxNLxbs2oDBBUuRabmm9xk3SJzjtUpkuaQXTH3x1dEzNabmexTPDKAj3NeWERyHFGcaFH1tuxX5RmeVYXWuX",
  "key22": "aXi63SraLoSbt2a4GKAfPv5a4CLdGfeKvndvQpCPmx5hACcQnHqgVf3rZm4W2kpALuDCjjyTbSSRDo1LqEovym7",
  "key23": "4mTZWkbU5SCgy7rjsp3pJ3uDZNu9wUVAm5uWw1qzAqAn3wXvjq8juFvpT9Mgn4VAh1oMtRCCcR3tyty9Vf4bf7ic",
  "key24": "HGbnka73MDxYp2HcgDvi9rfHdsgGbzaygZ9aByRvb6W26s51b3qoHiz6gVHvRYUx5w5xi1R3zc3xj8v5kLMTPP5",
  "key25": "4M3iYQKMQUw1Cxeuqq4JLCrS9GN9xyRii8N1o9p3ghAru7kFPoihxPwtWZSFynWWLtWWG5Gfan82SQaaCSKFMaLc",
  "key26": "4PL2MLzhfGxo69YKrVvGA3QWAKiBe2hik9eET7FR9wmuZ8huKWWxEovn64htXSuMdF3euVxW6pqDyPziLnpDcU8T",
  "key27": "5ML7zr3TraDQRqQ4pP26Ssf53GBuNNrz6zGzUkjcm4Vim3iQKBic4oRpe1jsxedCDDzBTpJGcNA62ZjKH7WyZayV",
  "key28": "3SUqEbcrgyN6hNUKNyzav5J6vS6rPcZsEppjacLHL4u5C3UNaF5b1ECbAsft6G2PFrpwmWdyGZrkiHHHu41oDFuW",
  "key29": "25au3QeCzUSiPicQrnrcmtdUn9ajtZzKuDCghUED8ZK6enS9GKP6rQsbKc2vXckWQDYhU6Qc2j6NDvRYPKMZA4bR",
  "key30": "3QzqqAotPybDAKQtTRgkrKpypeD3gta4DadUYJSo9m8N3gEVzbnfYZTaiGjom9SmUH1TDGe1bLQkqQ8wNQtK1hA4",
  "key31": "L59mX8gc49GV2x4dGM2jQbUHhxnJENDUBiZFfdQ1bKTrdJkvi3HUXKbRHam4K5FYznBJkRC74Z8BQwcBFiv3MBY",
  "key32": "975PikbenX9js4BGbwSERZjDbu2UoGNhgg5ra38xLstNY5kmiouaLRUkBzBc5cBnR3Y66BXuooWj7aQQ3VupFNk",
  "key33": "3cpGzzdWJnv65ziowupMoPKQdfZtkza8vLuWwSHxbCpda1UwjR8vCKLfwZoM1NJVAJPrDrG9ya112C5Yr85dJvfh",
  "key34": "2sZzUY3nqPFbbaJFstCBT51uaycijPcmtnfGouvWn1su9omVj3T6woQXEZWm3Wri4icqzQT7b5HzEJ6t7HM2T8RC",
  "key35": "2FXneHNdVs8Hvjjojo7zz691RPZRk98H5WiC41QYntKefAMunEq9rBY7utizR5xQQEQbMbJAAWVnyaiUXdUcPPEX",
  "key36": "5RYxdiGAPyJJSoqsGN6KQKK7fighK2i5Dw4Kry3hK3uxFe3ZDFXi4LJyHujATkiyirRgcSK96PBgNQJg2mcMRph6",
  "key37": "4gfLSS9BDFmfLXgesrsotEwg45ZzvXC6yL8SLXwu1dCBqJrkQACk7zNNVhpcDyNeQ5gvBxk8nmJP5WkaWEF3Bxek",
  "key38": "5sxmnnW9PSJsPJi2BAWWbFNEfrqVLmssV9H7JG5Up2gkxYcvTw85m9ModuQt8QcQgCnKfrxU4npmEZgYd4LApoNy",
  "key39": "2YgYqWr7wLiDYr9u5JvgE7kn57yGosThCDRGuYuGHH2mnB29MCUrSkueH46L92UHNfbSjp7WLKKxJo1gR5qMr4m4",
  "key40": "E6RTgszEohQfHZrnHziq4x6jdZwuKJvNVVPPzmSchJDkQHd4Mmnhc19gdKVHYSX3DsYvoNVUfRRSWWBZDmJY8k1",
  "key41": "3VTyuMBACCZqYCeWM9X7EGqGAc5DuVGAmHDK7AnV4WmY8Xo4MDNgV2ykAWJrsgSPwPvBwFHLNpDhALk8xrXE36ns",
  "key42": "4oimzP6LSN6yQgvWvJ3Phdnc31n2bpHZEWxRu7RKRdGou9KhrTbZiyV3Qsv4fwCggBMrqk5ktHzyujRLozCpb8Hg",
  "key43": "2KakjaPtABMYGsvW9HHL1uBDW9D2ZWezHGkomAJxsUtKoEPQ3VTqcHbV25cUpvcBkCWCshXhBpKw3xVtKVAw28iA",
  "key44": "5nNi8otbC7KgiZgwDtQGF7rQfqYuVpDGekx8Dfn9UJhMHp8Eurcw6Y8UVYeMZgvqL5wkxFG9PUfscAdppuZJGoMb",
  "key45": "5CoNmcdMKsigZ3idnJBSqFdVtTKowq1Lhdxj66R8p4zeVFHfE6piBkXQbP7GPuQocd8okkNa9vdiT7pR4TNfVYMq",
  "key46": "56YdN6BZ4JfawV6ZGByCZKqiSdi4gX8vFdmnQgEFAgGXoZbjh8o4NkUhmW4ugt7q9TXs1KHHhvXQNyo1sMybn8Up",
  "key47": "4z5PoxGchGme4UPnWxSXS1rMbPSrERPW5cegxxRvJxP2nbqHGAgoCvG8uxKr4cs5BKrxirefbktbmyt2ispub3cF"
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
