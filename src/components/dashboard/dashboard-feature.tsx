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
    "4muRoUAEGZ1gin2ngpYPW7zs3TcQVN7dz9gWV67gunLR7exyTPEQ4Apn1EuuRYK9V2QwhuzdNWjKJYds2jz9t19j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31GqR1vKozu5DVacFdqiU6DjC1DnFn9ASWrYtmS3W9n73hPYyQb1houZsZyQTr98JBGRE4z7L4Zk9BJrzYN73bpn",
  "key1": "4wru5WHXdaNTqvatdE9GwL9vujJTvE4sf6jynUbe8kd1rUzFFcJ49KC7B7r3TwCCq1Y4pMUS5PeLzP56E1prpmTk",
  "key2": "41he4xcjxpA8KbkUSAkxWrxFMPyRP3d5zDNqcdCfw8Dh5GQHe5BzmKkboJKPXi57mniQT2uTrXox8VMK65Tp7Mnt",
  "key3": "mK7xhqq3xqEPeKyG3xPUCLL3tBQREFwARtra3eESQFLb4VRyMtAxTMUnt5HiaT7TuUKUZbQM1jQKQ7HhYKicJXB",
  "key4": "nfHrNiH3KGdXFPekmSXrDgiXanJgmsSAqpn2E6kjFT9pAcgvMTA4v2w9bMGeDx33KdziQYV8G8uUSaFGkKygiaZ",
  "key5": "bhchmW31aHz3fYejbbXmAjopqexZiYTuAaA3n2fiBcVNSbSs69zgrause6PVeXCiz2VELt94Jwb2FRLLxT7qnyZ",
  "key6": "5AMHAeVoCqacjkcXVkNB9jtr2FExemmLEJUmccBERvPxjY3JEtxQGe4Vo5m3ouDpb7LGf4WNAatG9n8UbjXNrZMT",
  "key7": "3GHtJGe2jTGBUuHgBg8A1tpwxZszJ89yfBo8HFbEUBe1yq9F2EqXjFPTxsw2mEoG1HrkL6ZGfqZfFijEZgu3UFQG",
  "key8": "65s4AoqNyD4W3v4QnZCw5fq5KCd3n3LYoB8GTQFcGRZX8YwEh832V81vpnv5S9gYfZp7yABh8pZqFU5muZcAhYo8",
  "key9": "3orhPjZ1DBDGubZkjPAVsB1F7PDfokBRKwMHScvFQa1v8njGhkjAdywXiPCY7eR5FXBqbVyRyuRpN5x5Wv5P8MvX",
  "key10": "3zsXaWs4CbXwojU1KuTmMyorncWWpX8BoUMX6jU2jcUxiof9RBCbWG88Va4yeLDTU2mGrrKmHzCqeZNvSpWoQ3RS",
  "key11": "5bHL5BzSNkf4G8Rdf2au3z3Guk3kax4bRYz1tjEmrQa1b46b4dofuBEWcR4q8EpBr4AMRoW3UD4jy7HTXkPiqkdW",
  "key12": "3NaADezMBbKN42SDBX7yT4o91wmWQNN9Fr1N6yMa4YbDjbfugKf6vSBhAb7cp1J19ixHGJnCPyzAFVbqc5W841Jg",
  "key13": "2Kt6ZCbrzQsnCHaAUtvuVpk25a5u2yvjxmVgYb2vNzf1HtrQhsKSS8PGhSdpm6rVa8daHKUuCYx74aEHEMrfYzaa",
  "key14": "uLg7FBdNiV6E5Ek6e17JnxdcDR9RV6gZGzt3H4hjja9zycpmywrnGaJRYfzsbbPAtYJULCnQtgMjXsGU7wRQukj",
  "key15": "24DyG6hQcJoCtgZhBscmknhyuGNXyuA4Te8A2kWcNgNH2BAm7voZnMxKmphmHjGpfc4mhz8U9g15h5qJt9A7j6JN",
  "key16": "k3NzVmmjmB4CLv66VGpCZc4Pt11mCwcpm8oJ4UDpsqS1kWzxcEVXrXXXNi4hUMXy9j6n4Q6EF5L46U9Akdf8ppC",
  "key17": "4TQ3mDN6ba13UQwBtXkwYjcGHVVu2H4A9a8F5uxjEp4GVzG7nBp92JoGLn5Vogidt8JPSccxykrXbUcKBwEQ7FXg",
  "key18": "5zyiEY1TDDzDmXREk7cCyStUpDDLrTLwjWv27FqCTXxTRPhg4UCAEj3aVQd5pe5UmuD2goFWJrQbMvyXASYX8DhQ",
  "key19": "5w82421RZgQyvt4xBkY4ewLP2aBuh99eWHH6p2ZKbnoiSaUGax8dwVFMnMbAMspawKPpE1cA4zHcHCFcG5YTzYTz",
  "key20": "5P9mxMum1XHnaMTMdsy3epuWjxgYrB1112Saacq7h1P7uaFX9f8sh5aNWXHEFuZxCRVcBcikqadshCHDbXtcXZhA",
  "key21": "639XtViMwaGe5cQq1ou3BJdxBqLQ5cJpuur5c9jZawEyQX2E6k1QYr2EsMTytxUbH9zGi6YYaSW9qTckoqVaSrui",
  "key22": "5NAZyivmxgc6r4TrrP3DKdT63BETrswcdWzhdsUAKvhpAxcTUmsFnkvBYLHnySU2Qm9GH4izwgBcGnJJNRc52Sfb",
  "key23": "2ZnozSRrAphKc9ZyJQsFPYWjWsQAjNCoNZtH1bXRUKC55WRzqMrMz6gd5roPfxbFDDMbD6SUyGfKBexVCW46CZFT",
  "key24": "3hZNLCHXZmy8jbuJGHnMmoXm6Cu4Abyf7hLMaaMFQxMAxJFkHKeHqRZ1SzxdqfEHvSU7koNvRQXyshdJZb26SGDo",
  "key25": "4Q4pEkbvun6krN76W1RCLsNWRncC5D53HBWqHbvLvHhoYbA2cCtYKbojWPxLgSu5oQvp5X98TaozfmGBfbVb2JZk",
  "key26": "TRBM6JbQbWXEZ1Hvp56bDwvXb3fzLnimnEyfNmWSuhRxDxGYo4BM5YwLVS9TjUomoYy3o2rEwjGa2Dog56fqNH7",
  "key27": "4RQQwxxDaKtrUu6kZNxaZDMJFYd7SFyihx9iCgWPjB1s6Mho5qyG6nkuV7yZMJN5urRdmBEcYpLJgQqKM7QpX8CJ",
  "key28": "4cGPhMjBT6ZfQ8ad8dDtLuqYYurmAzYFdXdRSLyguuu2EQAChHncRA8EhGtB7KkNsvjahZKxpyHbNFAnjGsbjrM9",
  "key29": "4CeNthbFsum3UoEtGUvRGoGYgWh7Y8oJiUwcNNWnqbk6MAjiK2fx8WCEZKBJrKKDnchGrKS4cfgq1V8TiJGqJoqB",
  "key30": "hvnghoQGvJGCqazUJAKzxhQpkaA54bSQG7TRXiWLvgQgEXNcPNAXtSGWBR4GaTzwHJUM7VczCZ9nnTZiJK8bJGA",
  "key31": "2GwMKHjcztm1RbJerKTNjP7cmPM5CpiRd7cf3DjWBchjt1wQk87Gohh2QEUHB52NxT7tAgyMq1oKo8WBT5nR9dxM",
  "key32": "5L2bupSWk9zPaU41e3QwbAnUeMMsePoKC66ndKA8VWcMk4THjiBpb7vceD3yJTgS5sqkTxzNQ4rsReqz84x4L7YR",
  "key33": "2gm9CqakDquLrzFB31sbKj7FRuYBJaursnHU5QPVAbUiG7rYi4gvBf2a6GGPwZ73sxT5nDEZBkwWYZxscrGrBU3J",
  "key34": "42yLzSV1J282MUw3qJ8kPFBfNDUxpZA4NPT24mM7dsWFXDoTjKpBeySoHtcNc9uhfoDBog5RKfFibtHWnzUvP3NF",
  "key35": "523x4AFmhVJTQjhWKrdWMqULDH74F6Ddda22j7xqzHy8xgsV71LrBj8eiJyjuX9hcBcg56J7rvBFyDhSLsXnSGuS",
  "key36": "5JgC7wSFjrSEwDceMgG72mb7euWRybSfuSbY2HD869XsdWA6yna7Agoj1SRRh5AYV4f93njYQKLs4NXzzCBeQMCh"
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
