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
    "5HLs8AuoGGVqtmgYSGQ9A8ccayTdTJNrXDKCQhCF8KNL3Pf86Q2SSAoymeu9JXn1AJwEmDn7HZbKDj5kbbbbzELj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "svPnqJekXQ8yVK5ZVJWhqiWZWHraskF7DUe7dHqgXk4hs332BC9ZysoQC6xEXezXtnFGUf9W567M8NuPGN7QSah",
  "key1": "2hcW6PT2BFdfHi3PQkrHcMpgdwj9N55KKF6SQZzfe8JyMLdjRiv8VryNSTKtp26Xoucx5F9DcTzGAsCFnHRzX5t8",
  "key2": "47eNkiePmyNDTpCHBfQ1F7tB9pzDdALZ9Ve2FAF2EacvMMZWXicsGZ7Lf9LEaCVWdopdLs58Jg2oD333SpR5W2Tt",
  "key3": "3zDddxT4hvQFqPq7K4yom9yAz8VYbuvSgq9zFFM7peWTGZy1G6mhWYNqQtXfhjHUGfVhVgKwjeRptq9sUm5DFayF",
  "key4": "5d4FvGB2p9UCTCQg2SmjRJg5hRDRUTfd1sJX4MYQTJF7cTgnjY9nDHThwQc3SzqXiNyWqXruvEaNJ7geBwgwdzj3",
  "key5": "2nyz3Xbc99cre46DzVerS1Jmr9vqHeuJhN9nudJTbFGZEyd91M2hcceZYkiLkRHcDHNWUsqLy9j9BGY6UKDWDoy9",
  "key6": "a2ZdJsA2UG2Zu2xyee7GVJV8fwYizavmSRkTjmpLr2grfXawJzLSXeF9cD8rgzWiaw1JenV9qKxvAvwQzKMtUJj",
  "key7": "4hHaHmxvAByaLiFesC9M2hWmPEcBePdWQyh9savXgxwJnsAUqpe6axZZZN8opX3VqwK3UDon6AX2ytbgLAZepgtF",
  "key8": "5Sn3S8WYWbSzBL9iesD2RU2yknUCstwLvcg5peS5kfKQRzA8otqX5wKCdTEbgYJNekYEm9hq1wVzVAdxQvE8gPHK",
  "key9": "3SQvwcaPdqV5sTYyhFA9nxfDQzhsnsHJaoKGKKFwR7nRK4BHwHD3byHQtgNdKMFfHGCtfa3YgdUn5CRquQRZXa3L",
  "key10": "4woxbemYpHySjds5o1vRY3v9izUsvc64C1RksxmT8w7ba6SswBxYz7b6ekWShFCSqV6y4K9cJtc7zxRjKdfXNEds",
  "key11": "WEA4yye9sa4eUedC4atv8Ap7iHcgXoHZHKcHFeu24YHQev7xNG6DAcBus7LMLaNJFUzVcQiSExfZgBiupaDzLnq",
  "key12": "9EmHHyMXfivE1adGcTmmzXUxBcL82skYzqfJvDJuKqLeih3vgUWsDFvoCe6qYE2EiWGephAUf9Np9mZ3fTSV2M5",
  "key13": "5kErPXViwDDP9KCcTMPbj2FdhiT69hwqGMH91Df47h3DLsf7SJGCsZi5DzRVzkgczxVQbTPit7HNZQuT2otLzTVm",
  "key14": "52h8eoZNX1fWbGrsZoJQC6tmQ3SGPxUUGk74YGxDGxy9acVYLNCmiG5gQyMfciBdCuHcmh26wWiTBXri52dZ4rsf",
  "key15": "ameQci4u4oYnc7Vv2JUvd21f25tLBGyrRuTpvofpfz644vDVseHts4wwf6SSzeAkzZzCAKjmjyC45pJDiJPSswr",
  "key16": "2odwdTbSuMHwhZgD2hwziSTDQofVSUgMv2vZJB2CSQ4he56eSfkxLrXZQaD2KcSgZecuXhnbAkh32XPfKMudqu5u",
  "key17": "4uCseciyQCMi5yZmjAactjMdqvi2SAQFtKBp3GEq4yiKETDUAJwb9eA1DkjXFxp4DNKUHCkJmD68QhTPNK9rs4L9",
  "key18": "3TyPbMpGkE8bFG4kb1FxjUQfko8SsSLqqeSxz9jNjQhFjTkK77vydjJaMZYmNaXxfdvpYQyMdShpE1E5Z64knEK9",
  "key19": "HTzg7xT96D2htcxuTaGz2c7cz4yZPKdFXWrjmizGb49qaN2eJzj619hiRpzyVQ4oJGhHMGAgWrjN2NbVviC6eoP",
  "key20": "4mXbDBrQ5LqSXJQ421TiqMLHpFBZFDJrjjLZXXiRPkkQBjbHiQTWYCNM2FXQe3YzLiY8g7o6DHFwvH8f2JTAa9pz",
  "key21": "3kR988b2nkWAtCCqETAW2EPpifS1muYDkw6tAkYjNv4LbqBwmbHip2Fw8kdPvBHqNtWhHcUTNq7CYvXfFvxE14eX",
  "key22": "42jdWf8gKfpV2ZPdagitAwq1rMAsWuqEprHcvfZFk8F9CqdWPBCtk5YCCeXNK11SvyATXyEVUtZdvsGDZCXkRBdf",
  "key23": "JNS73EMiqa53daJRjCnwwtwhtNFc1HsdVyhBgg9eK7rqZ748nUqGqyeey18Hx1mf5wxnAfSr6oV2pAFBsTTmm8i",
  "key24": "5vDePQR9aa2eAvBmoxzYhgSWGbV9qCGh8HhPNxe8zmHWDGvXU5s4WVwz7GwFhEkMmfCDGTZ5M5Vn9gyfrQim6oQx",
  "key25": "Ppz3211f9YG6tAvs1qcU5o6cJNt6RHyJzArCTHeYTVcjsGF1twAjnTSq8eP7BYRpssteM4vh9hBDwgaEMhuVVbc",
  "key26": "2Zf2dXhFnFMXRcXTLVNv1axsih3YnrEpLpuXYz7hXnXyiRDF5gqDhpujX69gU9hLiNjvqqVWR5QnVPdvZZHEd5qK",
  "key27": "129sHkZ1dULr4Jw2oeJ2So3ubW1BEDK1EapWWMPKPBjLvnJySk4CCkcGR29cxb6bScnEZwb6Ut5N6ndJDtsoHyrq",
  "key28": "2dkM2EzCRnoH3tTBMyBTYQF1PLyhz75McTV5hswaZLPzaucWyjRtZN26QvqhwGrFdRQ9BqqqDJThtKAL4t7UsWAZ",
  "key29": "4htYS4n2m1quRtN2qD8gLuaWx3MtVqsmyLPcGdAfNGBSq3HToya56eCjKzWdjtXyU3FseVFN2Kd8wuQ3jPJk5ydF",
  "key30": "35yndFppNWqmS1uu3SuLXDu9WjbkUNpnRrUU1KMz2uFZy6ugZsjDQzHkHRApNK4AbH3zCmDSHehqnVZ5yKtE3om2",
  "key31": "68LsGXqS2H7mZxvn9xiCVR4xV4xLcPf7SCtpUu4Art7rvQiNaGK4ACjuhpjwjk5Nk4L27yxxeQ8j7kDDnfWnZGt",
  "key32": "5ZKWn874XPRPTnZrMUvBcYoERLucJBy5qWjBqXtK8Pqx5RpN1yXsgSMiRDhiyW9fUWtVrRdthCs7dFxTkDaVuzY8",
  "key33": "3v1qJjVvGAmZB7qBVGkXVCFvMmphWABZv6LSZgRVhy1YjT5Zu6Myb8TdnhPSbjKKHwpzJ2bSj6tWEFPsqWiB1Qj1",
  "key34": "51jqVYqChJ459vCRQkufHepixAtpY2hQ3APAgfVf9TEL1S4157EBC4EqiG13daSfapaQebJGvyUJAM9dnBpZHZqy",
  "key35": "4frjJZrDcFMKeZFhmMFFM18wjWmUzJj659rMcNt1vuiwhQLrAxG17BZEAMMCB8xvHqFAnCdDcJFxovEYxqkaTqn1",
  "key36": "28ECQHfNAawoQ1cJjHH6ArUD9a8woSSehcassPdZUtWzbroxC81DycWbLELmsjuDaLJ3ZTPEZofSTaUgGmDCF47F",
  "key37": "2wgSZ26h4fGKBkJhfYntyC9LNthPzEkUrMPwEFce11uiZN2p9frwnJuHqsnSwPuYpmpGn26ptq3LNDFMSmpBpxCn",
  "key38": "3SsXvAgQfvXGcGyFQ5ZiQR5ksBSYDVSdheqx2kwikZNcsdEb66XPQ4VAEDbHVZkkJZXCsThP58kSbHMmVjSbTfJU",
  "key39": "5fAPUpjiEBoCgYmyohipTczbXeFj1SbtpzJM1oHqmTvDd18cUR3SA3NQSjxbpnWc1DAj9UUZUtBCiQtKW94hxUcK",
  "key40": "3ynaM28eQVRG3bUu3Mr5TYWYsDnz6zsuNFqCavo6qt8M2qsgrmGW8Aeb9aNgMmNjvkyEHV5QQhmxfVjaauviNLu1",
  "key41": "5JhGsL4QhDw4yxjaLz8cYS3JXPMgxA3eWaGGJjnzGbvaaUcCiyoKDuZEithCnR5tZ5xNnoE3to3mMrxTmSAz9r9f",
  "key42": "48W7Bv8HgEksua4QNCgMs2bapX49LC9sHH9Sh8Vp89rgQKwd2PFyh1z88uJJb4bdSYV5jvoFoh96WkhLERwvzehj",
  "key43": "4Qh8Lp4qDoZ7r6cUiVQF1vVWcXEsL9zBMcJaz7FfTcy8RGfkDJRVTz5fgCed1VvQ6oiBVqsKDXRUtsTfZtLjGD9J",
  "key44": "4TsPvZnbNYwGUjgKnXHBc1WF1x34wBP4FdhvzEcP3EYKax57rXNDLRVkheQxEYPsARnBmEdnHFCegDW7n9frKtJd",
  "key45": "4yCscRmFr6MtNMVtvirJoikuGHjNxdVUmCMYEE2rHcza3MZW6R4STsH79TodFdxH5Sq5SrAiikViUckS2VkNWeQV",
  "key46": "65SFCBRTTJghA9VYKDoazwPBWAjex13bTwJs5KYWcXUyZH65AotyjjyAtaEZwQb2WmYYy4P9FvU7fngCn6dzLuDD"
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
