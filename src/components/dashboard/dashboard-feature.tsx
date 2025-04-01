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
    "53uh8UTGsrRiTpJHiLmk28fXoXw8FisW2cwHDpFvSuFJ7wL5K1SrLZXSG2izV9GtAyUASbuEwGcgLTZrwEFrZPgP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u8MynyBMsboFbFitGMaYFaXv1hqXU529UPm4A4hWFzp8SCkzx1u7NWuVWoKR6AVfKLe8ZFZWsoHVzg8v52FtvCu",
  "key1": "5vG4dLzPDL9tmQ1rpEC33x4QKQr7jL4RKRcA98YJ6Dephevf8wpYb5Btp8i36bDGoneEyDFv3YZCZWmVB2FH2qXH",
  "key2": "4Cz7eEj7xKewjYeLH2yec2YVSKkYpEaMFJBhtW8oDDhfSYBnRb3EKyFo7GrJogYMyqYs5DXcPiC6pEcrChCjfiGt",
  "key3": "5KXa7timkzFPvjqHmxwa2jTNVvfnugB7duumEuy2XGmF1YfEYS962zQkhPtu21xhNu7xAqEXPwTaKbpRHGqcQPLR",
  "key4": "2WCQ2ZRqUDkrgcHAj7zcu8NNaRgLqPRD14KvrdFz9RbszxRdBi2WUKqzJFtNNiXMci4yD1LbMbS5UQ6Mt6Se46T7",
  "key5": "5dPqJBWXayyY4g849TpHyKzhqTfjaxwH6dqp5YRaEpDZD81oRoyKbmC2Y5QLg6SdUjivNeFVWDqXGESTkrSeu2Nw",
  "key6": "5dWPQR6fkRcrNwNRPukckpvo8SfPGkZEqEEVvz8ZV1UsNGEhxM9Doerfz2Q3uvqqc9FLQGgTdUGJJ1cc9AWgR4fQ",
  "key7": "3grsnrTEiMPHrCkUrMXJDimax8GkZpDcSYFY35rmsg58eZ3fT6ZK7r9RpHybThQJffJf6yZSxLxqP5ucwmVNFu62",
  "key8": "5L7tyV6HG3UoRY7YY2f1oG5nJdvTrWKjwAWZVzHpWQnsLda2tY4FpmuPMFv1kXz4F1USYNb8AvZvCyKWnEik5Hgp",
  "key9": "2Fh2iC8WtHsM6nacFWELPvQbzAtTiNijcVLjYK3VYywXzL7pRJA26ftJJ9PDSmgkzRfe62Bd5MALoFh7kP279jxF",
  "key10": "2wDkj3ZzokxndE1S6xJxV9TfJS5qkjGoE5EWuMee5PTV4Q56kHpqvuFxavPJVLnpU7VdEiYWVMJWwakCAAqXKeuo",
  "key11": "4byHwwGQWDgdDHruAFgkzLpNjDgrTUpRR5jRe86iPcYPo4cdmioMdppkea9e4VBtru64k87cfyMWYrasHcmYgav5",
  "key12": "611iwCUJho6cPrXCNAjLeZwWB6PUPvzbHSszjn3fKEjLC44sx8ZdrxJqnqApPmACBrkuzZxet87PKSX4Q84ukxCj",
  "key13": "4y8SNkgn5c7k29eYGQpFWS5siCLfQMgcBDxM2yjn3q6tMq6kPoeXd2TASxDSsuSJyxZdpdkHEtw7qg3kHdV1RKb8",
  "key14": "5pevmYZTXNVxoRnNLU23MWdCd8h2PAvt7YsPkoAj1BPJS77pX8ZxJLerWCE9pHbKCem5FcscGGZMkTexxBXMWQL4",
  "key15": "378iV6WavxshPJqrT73j1XRNKVZe3sEiKajumLTRMghYvMxSfoSgi3QKh3siyCi4pRiRTkVaaVZBM9SvPYbEcZ7q",
  "key16": "5arkH5qqath6x2Evw7TnjveH8WdmhyaAMBnCRUJFzPP3R5iMWaJ5A1ja4qwN9xDQ6b93MUfrCFZ2q7sHQiPV5Li5",
  "key17": "5n3jrGy5En9y8g8EJZbxzmK89d1mUbQqoDGrd7nez6EacVoc4m9w53YErtxCHEMnxMtZ9Ve6kketCq3msX9gtEb",
  "key18": "L1mcVxoS5z3ZNNy2a2TLKDvNjADJyKXC1nDW4FeVVsjSXkwuPamRr3BKcEjRNCZ9h91U4eZEWesdw1vT81BKc32",
  "key19": "2KS7dWUpAMhdXr64acnNCQSnNAMLAHed4174UNC1kHaGAgXXMtzydGrrKMtqA21Guej5vnGaW7odhaDBMnZEmkt3",
  "key20": "T8vDR1c3evcRtTr5CkxLhyQc3KQsMDVJaGtyKCpZ8LPWPn3JPfqFWpvoqQVeVxT55wKPQRxWMTSdbT4vvQV2bmV",
  "key21": "5MDeF1h1KCgopGTmYuWtqVPwoQHv4q1VNedeZy89Pcvj9AhScyBZC4j9tAnf5BnRUKG56gcZhLLqr8escGNfRtth",
  "key22": "63UCRGiFa4eYRTDdFPKRgQUQWeC5uJgmEMS18Gsbo7JaHwGkeTXft2zu1W1mfjWBsVcUvFSbZMWTfkCwTaukAs4K",
  "key23": "5f4My1Xtu9iZBR4EbCLjXCyWFF3Mx74NGdeHDdisf52kyoABgnyS8AfHPTjUubCmPbwN4NrxrGGxdKsbFTGtRihh",
  "key24": "xKqVLdoGmoEubLPJ5C3XpWoKG21eQxrvBFMa1QvyJRYt5AzPC4AnSGCFkqch8bbbX9UZZeWwScvdngVCE4a9M2X",
  "key25": "ME3HR6vxCDonvuwFQnYB5sTZyZkLyfgw1KjahfHxnYp7tZj4GiDGcWvrxaX2kEX5iMrduN3t2TEpsFj3vQ4rrYH",
  "key26": "2mj1Z4EoXqXFyjkkjEH3b8GM6R9c4i9CcBff5CpZH6AJZqUjnKty8BynDRzEapbetzpStr3juX9GZiRc14FG1RBV",
  "key27": "4XhJQjRNz7pouEKCWGf6GLYqCcCjoMDrxRsrrDM94czQqMWyChW3tpR4kToG1oCsSQxjZZ4u4aaxuZNBokvAxXJD",
  "key28": "3E2fWgJNwYsVJsrbiHMG4EfyoiuBSpsfpKv3sJw2ixS1zQjHar6MjxeABJebjwvpAefZjt2dPCvBftDoE5Xv1yWP",
  "key29": "2UtYgN3ymXE9JAegchHT9xR3h4RVJrBvnsLqyZ7YfADZu5qyZvPJMYDEPQ3vK3Xs6gHrq2t3jX4Fx3cAf3XoHpZR",
  "key30": "2tV8VVAk4k5oh4Mx5Wc7cs3YQsxhtAZPzN2iWdXPwLu5SSe1Zv1opKFNgmT8cBqusRpnkKSoQuLqfJgsaNiksakS",
  "key31": "5FfVsh2BFrRnxHQYk4CQZkmmE4YhSLthsxhU8ffZaEoTThvnCiBhAPfkWRHJSbHwXmasbKgQjfWnNCWTiHHvYA4x",
  "key32": "4CDRWnPe2NX8amVr8uPxsqBKRc7CRHfJzaGsGp6tzAcwiSSptd1DJfCZuboGjUR6Vsdt1hujjeiCFnvcCWmbTi2z",
  "key33": "4rt2z8MFb6QXSWj2SzNLJnNPhignksMSPdH8r3tb8BEwayQWy1YzVG4n2pZYqXveLTbURqTfqeaofCYns91ZjtiN",
  "key34": "mGk3GdYHUTZmowVYooYsMf1on3yFtMGnDFe5u6fkNrg3W7ADXAcXaKHfqiuHTGdpoRtDZ83UdLAWqjVnDQny54Z",
  "key35": "4eNv8YSDK264VhZxP5Gc4cwG4hTHzsfmHDcvDq5S8Y8LiniTJiM3KhPCtHCo8pUWvYVZxvvHraMeoGTvDPYwncwB",
  "key36": "3yS1dWzmzmaY9t8hWwb9oy5oSbHxz88942UFw8bX4z7SJby6eunETLXU3pYQ5JYAxuTuCqT1WWii2ZS9AAWZMqWr"
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
