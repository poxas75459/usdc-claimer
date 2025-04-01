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
    "5r5MLz7HMy4Fs7B8MUSa97em8xwfYR3RyeGkfDKM21gcMmkShoqQnrr7r5mqePVVgw8bs2ffF13CLNFkMb36Rekw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RgWTcurn1o53nPnnZ4Ca8ZZqpoHr311Ei2Kd5PK4JD6R8pQXSy5LuiV3iWcLjkSuzaSqVDuHtBU2utPJBkmV3TW",
  "key1": "PtmkCzuJeuMjU6T6i75res2wf8ULcpKwJdSFqUvQsUKsLcmqtUbmJtQ6KmjUhQnFNb7BWzURXjSLMFFsYEohXMU",
  "key2": "4vxC84b34PXtrDCZGrtpyqZ9u9PgtoiFC34XrgWsbdAqTSAXa6MDerottQ1HUj7VB6p7g6Eu9Xouj4th5VSgMRvX",
  "key3": "TdUqipPqPyCFzJMaSnnGjNXGk89XRZW2nGssGCfQc67Puw1TdoFMgwCpzB4Er176P67BHSKK5wpANUXSNAZL9ps",
  "key4": "61WBwH31jdr1cFTqFjgfevjzPZY9d5rbppPLbAb5CfXwhXA8TNDNt5wA9zQdxQYdmjmYRaxmDsqqxiSTjpE8FPWp",
  "key5": "5kXA5Gb62eBU9Y7D7uQMmvab6JRdMJvJYzVZwMLiZ2m9QWxhcYmgSXWhk12JjcN4AA6Aoov3AhdzBacEgXaUFHUu",
  "key6": "2hYgaR9TKQVEP8xJ46wYHMjoFyyV2SNz9xPZcJUJpaNKm9VZL1qe9LtGi39Wjzx5GqaUfsqnp79xnfNxkz89y7Xg",
  "key7": "3gUmP3mLvXTeCPuwdx5Sygwq1RwynjAoY3ACkPMSZgSwkMi5R3RNH7LtB2SsKKm4nhYftNxR63a2rq83dsXRhoku",
  "key8": "5eLA56LRYdepMW8wAgdzCcQzJbjayejfsq8EvmGiSM7Y9aduU5gM35HEUXd8ZJ9XktaKAPuFnWak21mtFmFee4Rm",
  "key9": "3eE8xnuR4wpLSaYiv9UQsMhcKGApfe31CzcutwEBckSmjMWu1R9ghkcdVBZRBYYA21Z5bkKononLMo2AVkQJ2Qx1",
  "key10": "5uWg9szvGqrJ7NL9bXumFERpfJtAmCUYMckpTmJAwcNwa6ZTcXfFuuGL3Vwhx9TwyqthBhrChFFP9EjkK8MFAnzP",
  "key11": "368H6cyJeSfXDLDn5VPKEWWUZW7Trjc536kB5VpneAxqkkEW2zt8jcaWyr4A1q65efSSktbf7pGSZaKCJEZ7PNf7",
  "key12": "tbfRvk9DXvwV95PWoDrhnUoUGHZpt7xBA2sXQNEVBj6Qsnv3skh2NoraN277H4kDojBqNZhyAjDv23RTkifrCM4",
  "key13": "3P7goH2n2mvRE4S8jsHcn55sh45rveQxEJztHLgka8DdUChhEy4KJ3sTC5TeJJKwTxT1f9aj9FVmX5efMqrqbUmb",
  "key14": "24xCBgiwPxpy5reLYgoSNCthtueBSU7EcoPJso6otTkTjVT9RHAe3Xu7Xie7nYtRsD9tGRV9dQqkX8XYaxsxRiuE",
  "key15": "53G4SsSa2kkeoChcj3KEJ6MmUb3Xswi3j26G56d4YK97g8uGWGh8RC674jTDxiKPrCj8qG6Mn38A6B3chgLi9Z7x",
  "key16": "2s7EoiyxF8ALbKyz9ZU4eCSUjzfqVuAWmx4KvdSGdB6whS8dZ3nxAoRmM5BkMbLy99tFSnrBwy9b3rD4HjjXF2DC",
  "key17": "2MvAgfji2pgki111aiuAjqC4moJwrpXcSc1GWQEJneguBi44zyuPwjqerq2FzEwk6gv8SdD4JA6YNKuFMU7cLgRa",
  "key18": "2qyXt9poe7Fw24z8GFiyxzsCMeJnJKYbKaxJsetrbJZsA7PE4E3aCP6PCREbw6MAaE1CGUkR3LinQfSAkUJc4TAi",
  "key19": "4EzcX1WQHFeyDjiJw1ZWy5YxTUQWxgGLxDJuS8ge8oJgi8PsfvGnVNcdtDWpr2saVd33MW18pWqNK7ap6uXDF5GV",
  "key20": "5NEjtv49nzPryzT31uMNJYeNrZC8kLdNqXXsFn2cziz8FtdNziDr8RuYjhBy4qF5FC9FLReSdxDBKv49p3xYfYLQ",
  "key21": "2ro5wT46XDCSwWvf1MiRMmLY486HeccG997DcWtoXNYR6RNnTAmQ66GKDANxGGh4x5vw934roznPt5vvbgza5En2",
  "key22": "2yZdrAHdZ3EuA888GZGuoURyY5Y6F8LpDTqjDXAvaUAKxSeZ3HmKa1uirTHLFgs6iuGASdEFdnxYDASgrueV9f2d",
  "key23": "4Vta4S1pPoFkZdih2kkUhD35sq5fcoJB1TbgEB934cDcVv3MtLFxs7pWbjRaXmDB2WbsXbK7RFXoTpupMLaAYzeW",
  "key24": "4fcucYXqYeLWWXZfMHPJS7ehmiAyGcFtDeEVUT2D8wEENq8XiCZd5xKDp4jtU5ChFbA211q3MGBFRcKQdBSiXoen",
  "key25": "aUuxWLqUa2LEKzmyGmnbWhfHQVrsv3848BfB88YhN2e58KBWWQKprPhy8WE7KdWNgmPt2xpgqhJ81RoeKxPBEjW",
  "key26": "4iySiK7s5w8CMTXpMK7CgHv8cWpTgYse4mLBJRgU5YxPFf4N61niHsmUsJwSGUMA5EAyMNLn3nK5uKNyjL5JnBuw",
  "key27": "2DCXFHSK4PCTZmFM7u6vZLb2X14DHzmg7KyQy4MaQfSPxNPADtJVCydwDNM1y3gcqQef42msL5atcgTTRQjCpQEV"
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
