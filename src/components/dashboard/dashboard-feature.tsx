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
    "3JpXD8kRtMczjQP9ZLdZQ5rguW8XN3RqcL1DCeFbmURDHKaVF2x9RCNxffPCr7dQjh2wxHT6hModnBnFFMLS1xyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JqB6MMGhR1GJF89EXadsH42kytdVFXhLgYtUxje2dh1i2gFU5Bo5Ac6Qh3WZdvqvCSgpoDumVieodkWRQwNDaha",
  "key1": "4ABoukzLVBMo9Jz4LfgP9KGCpJP59TjnPUAJT99uXygUZMpsy1tpzfCvSdQYzJQLiU1VFkTHCmJaw6a8FNqsBo6P",
  "key2": "5aT6SSrEeeqSEvVxi4c3hpzrntArYEwU2WVWthFAZhb5iogEVpg7iA79JkgqMsZSg27uUWXXP78jLw84QGvcxoRr",
  "key3": "3AwepnTAAu6fyR48FBhu2tF6ycGPnnRG3PVzPJoqyDYSZ2BJhc3eJtTF75PLAm4FwzHPB4XxEqTBkuBgkZjQrKjm",
  "key4": "jSCMCqS3d2V7MackZxkTAWjYDAgwLbgwKCer2W6dJXCJo1TyLsduKsXUofBEVaausfmj3pfpjAn1MY9mibkDpDX",
  "key5": "6NkDbA4ssxQ8w3fnhv7yHXQHjA5XtkKPseqPL2z9AMUB1BdARNhU5zMUA5q2HevjTXGFmfs7W3tzBwC5sCbGYw1",
  "key6": "2cYwBw6aMp4Y6NvXHLvyeSZtASnAy49PDnKGimYzkCkKaCrSRy6poVwmUGXa2KzHb2NLC3DmfV6qCRGdbeDBLxdy",
  "key7": "2mkynM1vGEwuxF1bWdNNr4twUkUwsZrRrFZgNhHYJbubBZtG7CSHWeKxurxkysN9BJysizDqgrNzPmm3MxJxYzRg",
  "key8": "2qCXk3aGdzxbc3ZfFeGGPuV8bsYBou52agdRUTbvxsDWWFBASGHTNNFkwySNLV7rwcrauKroaVgq7rrroF7t7e6r",
  "key9": "2WPaC194kvYHn3eU7j36ECGGc6aow7YgCZ5WKmV1qJcSFDBvBFcP7xNZ4RS77GUsVwvGiuEBTQWHN9oP8tDmv5DW",
  "key10": "5ZGvnHc8rQrypK2bYssNezGvpkNet6XBC3t1iuASVVzprkp2KDuWne9ixtzqrhY9mUpGmr2xbMz3nAQEK1V52saw",
  "key11": "2HJEaDrnN5fh81gjS6DaYYBtjSfwokamx5esEvMe1U7kJ4Wiayfb2HoDLVTPAd1FyvNdvZZ3jpt2GampBzQ3qZBx",
  "key12": "33KNF8DGPR6gNcMhXU1ntr9LkJ9EHPATgNxkfQzxAdb2jdw3jaMcAe19kLvCVrkQ4LvFKK65YduPHM5iz9XtVc3W",
  "key13": "2BPtu1LucqHDDKEbZaiysD7y4W3JfSEwXeLrS1ycL8tRcmosHXNAZy2wMY5XzRXEPgqs3ZxxNcjAAk84iRovi4Kx",
  "key14": "5qD6U7hf6yrfnpHuFuCid7v8yXcWjR8BLmonydTS16nEGCvKsQDSZUrLkBEdg9eXW4TnD7RR47DdBNj1S9vWh35h",
  "key15": "3TqXZnkvUZiUCdiSCfzwMurepSzFN89TCCbj2yXWLQNX8jgeNq63axLfbgoj8GASUhscbL6U7PkJzVME9irwSbs8",
  "key16": "5J1NVTMZkrpTSX4Kar4XwsEdGCgbFRzQxY1nF6UvbSro15Ru2Yyuwdp6WS9z54KPE3VJ825geBMV3bFk8bWByKSd",
  "key17": "4ByzUzStE7gtKKt5SsG8DACs5Nx7sQBevphJjwaJjiQHXX7bA7ttHhLKnv11Ryg714NMnRP1zchNkjQz6WUQ1Vm9",
  "key18": "2aUfU8d9VeWBsJA8ggJK3x2PY9J5hvWWXNXKuVPAMMKHJMTXeQiSDkccjkkTU9HEcGQWsMxKt1HX5PjHgNf3adem",
  "key19": "4ik9nTpEMAHkfeBLD9vvRH1YwVHbkE2BznVTxPevE7MB6ABnS8bVqxh6Ms4beRntuJ38GUi1rThipQ7YtRPG47XE",
  "key20": "2hS517xrGqR2NcZC4NJUiHgGvRfqv5aHBHaZHuRVo93yw4C4VViSdHp1fmGD18DaDHcaDrp7HfSxRFJq3rj7akA2",
  "key21": "x4Vf7MHEeHDVhtDoeXDtzv5JZeYuMygHC4GWs3UQbtGuNbq4vg8VjCAk4u8izM6J72WUTrw2e9sQwN5gzgMAcap",
  "key22": "JQ2UzK4T6gcc8eCiwDrwQvrQacMd8KD9KnmDjNg9TSPuJKzbtoSRb7GN6oZym7n4UtVBwMNpc1wRXcMc7HW1ckp",
  "key23": "3r8kHFejTkC3uyxoAr3WyZGXZxADpPXkR7aZLs4jQ1M121cRQqEcmdeTWuGRKJJeoXSvsGZcEUZBt6sM1LvqpBRE",
  "key24": "36sJe3E2MDBpD1HViHCevjnVy6QRWdHCxnkCs45FqtBRzPSLMHb5j5oLChfWhe4smu1y2iLj22hYw8pjLVbMDxxZ",
  "key25": "4yZGbJXVXjLFZdH8C4MmYqeuBhDkzENr29379ELTJxcMQecGzdH8a3fRgGSxzHJmCpWAqRr3zMYNneRkuTaB9twt",
  "key26": "26zVWgtqbkeDvXprvURuMGGss97eU6MmisbsbUJeudnFXGPevYZLmAP6ML3GijTtgyb1wrDULjAyhXKWWqvzEQfG",
  "key27": "3aUgjVdzuMd63tesaiQ8Bwqi4YahMb2TXon1WfXFe62bbpsN6Z8fP2xhab8YTRPW7zT8AsmPHfS5vqkReQqpXpnW",
  "key28": "65EiLHeSxmKoL151buLQvMBxKtMbNPpFy43zc52ZcekA3Hi99VVTFsUEt4kbo1BeKWon4sfEVHrpvFZuHVLFJWrX",
  "key29": "4ZEotAWRUbNRX7Qr3Hg3WppW4AE963XUK8XtjNyNcyr1nmzCrk9gHt6YCf15VYxTuwBXJzMVSfC8JdvkkL6UDhq",
  "key30": "3EspJ2trwkx6iYsLXUooejERedaMie4hLRHqmiq84jQT269a2gE5qY7223ji1tM7veyYDpAyhZgZeKNV9owzUckz",
  "key31": "3X2UuyVgMhHKDxdUNyqW65qCxfrdVNdhKGSRy8kUNLZCMMG3jaH8gJDWwGUcFzXX91buANf77UxHEFHMqJdrJwjt",
  "key32": "37PLnPQt8WPYQDe5P5bJBz6PCTSW8zP58931t7q86HYGbkZUGASezCTcVbNWcnU48TtjyiJpVDfjU5JpQKax7gQx"
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
