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
    "2hQrxtXjk7D1XRnWisSRXM1mWxoaScsWR2sZtD6cUXNAV3AwfwVRhdUHfyt3DwYqNkK6WSqKNt8qL2ja24CkEzhh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qMpL3KSji3cj9cSQAumaickEKdBjMKxUMeFfmG7PvpEqtGciTArZLD6PdcMhUgVHiBECZapzSJNFN6YLvNhn34Z",
  "key1": "5wFRf1TKqD2wYyUT34i36CTSiDCzF9BbPaiGwpbETboCRETcrpXEtonz7q1xPwc4qr43smrdFTV58r4FRLaRwdkU",
  "key2": "4FD5vj4ddquxfkGktffDdFf35tWQFcicDGppfGeT4msE9RHazTCccNi8azXgkZv2ZMTGrY1hp3BypyG5xpeW5WG9",
  "key3": "2EcGXZf9gQPHAd9xgeJDVcxxdANVZqTi7JKfXnisNb4pZA4Zf8vkkgLnx2GuDL3APjZaSNXvEC4jBcgceEd5Q7JF",
  "key4": "faZ1fGx67UTbpRYWoMYxPACyksGa9cKWqeKm6pAYBQEAAWXyzPb1v7n4beJJQLkFNQKDSJWEFNS3ux2SR6DAAA9",
  "key5": "5WWHWYWPrVPR9VLMsRq7RgMcVEL9f2rKxGzboJzMxAhu17FhjMt91mT3e27PqQWegXdrnftT4GdQ1Z1iZnPmc7Qq",
  "key6": "1m6ZqTvYDPPEL9h7zGmEyvuM6qnVyQHeYr8zKeHA9UT7YHNxKdq2hvsLTUoq68U1zp3oYWMrjYiRRDLSTNfKzTt",
  "key7": "2zWzt8AULPLEBLZ84h19gw1PWpPAb7ZeF3d4oV1GM1DsjDyKWJYyxYyHw789U5e4nCHXrxBAdzRcaZMiLoQMadxc",
  "key8": "5xecQFiVqZfQjpGJbz9chf89sdz8bt2cUGLw4qE3jfdSNSWfndm2xU35ym1SSY3DkVvSJHm3XZaF2kzmagvB79Aa",
  "key9": "4SvxKXWfEj3KwBkDNNYBFSgEeQ8myzadRuRKLzxJ67Jz9BEn1kz6gQR3VUk3PTrLjTitGp5uHoaAf9j32urVp7VG",
  "key10": "2PSjjG1FrAcEPTP9qHCadb4iddZMxHDggjSX6qGD8YdUrhbNwTZirKVr1xyj8ByKyvJYpHwFwkZeaKAfNHHubMNX",
  "key11": "34ko4u4qGhZmvDjWKzKq36C9DxkSf9u8KbxyS6fdvqnSyUY19iWs65gP6BKhhnZB1pnjNAtegYKCrA2zARw9cdAc",
  "key12": "5aXyVcogy79Biwiw6G8hZKqa76v3q51cPeHvuDfQeX44b1CTa9qNV4W3x83pa7fvMP39zQc5p8yC3TSySDAXASES",
  "key13": "i1HVsKE1SNZNrpcvMCZrx5gQJeJQA2ChvbYg1chfs5fs1rTLNjkUi8gdzafFpkG4L8A4hKXmWy917wMNWxwEFqt",
  "key14": "3yhFB95hbmpskDp9z5LUtqowBcKJjC9EvHgzXpN7tfhNt5oCiLpvVH2W8Yy78Fn29HdW1i5t2vXs1i5x7vrfRptP",
  "key15": "4Psu21rYCSzhu5DX8TQSQnXFYGzzbKkguv4Hs9Cmv3iBmiu6dALtXtBR8z2b3JKm5rZtrAD17sebbrDwDEhons68",
  "key16": "5ug4gJccAxmc1TLQfqX1LPubb6dLE77WuCWzNsLufvxbf2SGSD97ayzz4C6X6cyorBepm3S4iRjGvAhiWE9snXr3",
  "key17": "5Km95ZE6assJEDehTGHaY2FTymZxXzYosBeNvXYqEKzan6EWYXKvdsxMux2pg7hqwLub2d2qZYgPwYFFDqnRRg4s",
  "key18": "33ZSuztBxXi8Np6HJEWw9K3eBMzbV8puKzBgoeGELcgLQzv1H3fMwrT252PPhhvqCQGP69Eza723pVmqUo61TKFx",
  "key19": "22ewwLyy6sfNYsYHXsB9eDaFgv7GEyLefoSWeKMNuMpRhQ8CDDtWshnodRqhBmfYipCKbjqpxM2mxnKSSMKYdBuZ",
  "key20": "2YjNc7aeT4pzEQCNXeTfZB9MhJ76816H1hiB6bwET8uSrgFZaJi5CWb7PvhJG4FVvhmfDP5v5vEUAUrGM9Lnmq9K",
  "key21": "5yyMtgE8aE95TL9WXQvzMUFrhTSLKr72kdj5hw7qvXbTLf8FrmCWdj8j87q3Ci1dqQuUQZUecFAnHWGGQbyt5z2w",
  "key22": "51sVMpqsiZokj67Qw38mkrSmHBWHSh8BhLsYS65gKo34kSW6oa7HxQWPj3woMSfdP6sENpWB32wvM9ZoGQ2bXDNV",
  "key23": "5cFNW9h5d7uRBg9h1Wp9zkgJRA3RtjejRoAMiF4yGvVWfgpTytStrmjFqbcErm92AtKdtDoDMMuA8iVLpUpgUWjn",
  "key24": "5xHrTReXH6p4dKeJWhVXdckyozs1HvWi5KQrXSMVDK2PoWzv1KZGqEHtQX9pSe5g9nXXDpL7LS9d94j32hiRQTXG",
  "key25": "2rZtkm7bmz1xUiUGbAhzia8oJ7cKsqYLKGuXXccC6RUR2DAqnY2jC1oj7NnwQPLEQcBoBgyA49F6gBewQWJzR7L9",
  "key26": "2LKK6JzFqpPn1hcgzaoAnmaA2fE3PfWGDD1eKFHfjebQexFVqtV1KXKJ5JnAo939j5NXAonQhTCZzNfcYoK8xbDy",
  "key27": "3wg2vrWvx94J2WivNzY4heMKe2JKudnsfuiSqLkBKVTaueourmWcfdF1iphvoiS1bzbjaRpF6uDEKXUBb1JK62Tt",
  "key28": "4x76CnugpZ3NsBn1RP5scFnFhF3gCCrThdgEYtZNErAXZQRXUBs2MJoX66p6jFpfSfh5y3LHfAEzfs1iqUzndVkn",
  "key29": "4MLJpEbgJ1xxLhTz2D3BjzEVPm3ALW1CWaAMibC7BijCirBdWXVwf3jncoNoKFfGH3yRjb4yPG58N2bute4xk3ry",
  "key30": "w6ex5WR1XtZo6L2QFenXkMJ4SRsXAEaCmhFj36TmjFM3urSQ45QvzvykvM4hNbDKDx7rjUfdasqLoE9gsD2ve3D"
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
