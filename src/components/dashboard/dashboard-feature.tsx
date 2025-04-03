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
    "54R1c8qzNXNkooSp5wnsqvzV82CLU2wFqF28bZKvC4MKD5X8NatDYg35ZrysnCrr8A3xHSSvNfb6rM4U6tuUYAkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UeEe79tVJhZZSMjEPH1TwZBzEGqmwYnNBxshBNb4CtwAvWXvLRa6JwR67LBLxGyJzaDcpVLkrqu2XQbpxtnPxEx",
  "key1": "2JtFeEBxnawvFQ4YSTuayw1AvJrrkZLJG8Kb8ESFgmrBcWPQs6sYvzzSw3HbrSo8dHRh65kMwfkz7Q5hG7NZmdts",
  "key2": "3ibj2so8eTzUmxikUfk25HMVwZeCk29ZMgfhXwdk2xaLrygLXz86f9kYxdFMhbk8SvvngHwaNyoLwwowmrpEdKii",
  "key3": "3syiRK2EdkK1sBUj24na41xVuCdzRjiiRgmr7qghBCh31JCYTdVRyFNFxR32h9i6g2LwVvtbErnwFiYQ49fffoSX",
  "key4": "4gnLPMrsQ782PiTmkYHtXcS8n813yX89aj7mqVsvR1ocEL5i3yBQ7gwzcSGGH1jjxpazckGGRLCEsdV9vR4w9daV",
  "key5": "3i77YK9kvD7iMB8di6P7tp5xWgRtHdgQ47Pf5rvuZxezSHVPaP5qxt7WTZSEVrC7BDD41JVeAq8Bdo1zcPf27shQ",
  "key6": "2VNhnhS8JUHWc2LpoQgfwxSAbvrSwEp5GonU7PRNuZG3H1CWoNBiCGDo6uJ2BvBMF61MQvZEvnmNM5gZxp5J2MyL",
  "key7": "3ueQTDiYDsi5mHBWE1KvQ7HzKUb7yWgAFxvvV27T14fMppusMiazx7e7TWvRZztMJvheksvkE5Gu7Hd2ih6wwNx3",
  "key8": "5VxfRc9tFszYsFkBXVVG3ugYeaXHLJ1MTiegmwrAvQJNpz9GMdQgVCezkkYwz4Q7tWxnLXVkqNCT9RXiKuihk4Sb",
  "key9": "4rJL6LVL4hYUYqDR3zqFVrJGVPZ3UAj45jxwfJizwZmEZS9yUGdxxxKNcK4kfrq3uRn4M8QE5LTebUJzZSqGTRpE",
  "key10": "4KMM5imzQ9AHVFrNm1GDZYbuLfe1QBSgN3YBC2K99grKa6CH8EaukU3KDBNVbk4ykRa6TmVDe89gGUgoaGWSrpVu",
  "key11": "4fLyeWyJBpGrYUt1TgZxDhgvzjqDnQFxU5q7tuaZyyJ5g2bhzXHCGCexVx8tQEueVWmUwwqir6QZmDf1bAv4PGJJ",
  "key12": "28HBoEvCpDHmoFsf81u7VyHSZ1YEd62mkBRj8ESx4LvMiezvTyfC37chPF8j7iKVY8mrHmyUnvuanmbV8qCZAanQ",
  "key13": "eChsxo6QFXn788JXJSWiRZEVrBenjm77NzUHNhRRMb24eTeUWvp5m2AoAsWKddg2ScWuHUbhFmtwoBe8jLbMyYn",
  "key14": "5NW5QxGVDdrMiYF9fnfjLXtt3DKanNdU4Ez3Y9iaJfym4vLh9xNnjLzM32MfdBkKHodV6rAakY5TRr7uYaMGYbtE",
  "key15": "75QQbNLUwxx87L1ywEJMkThXhtce2jTcUXX2M3pRxV1M6oXpVo9c6tCt19riGhDN1E5DKaeYfhCPZm3FUuzgmda",
  "key16": "3zk2voWKrmrU6dTTdXd1AGWAfSCgW6J1dJUNPiyDZ36ahH2m3P7cT8Zzp2CtnfnmzdJYYptCY32rTAboycZo7i5x",
  "key17": "5ResDddStbDXwo2hR4aAFd9h2v48QofQ91bnjCHrfB78tZvrJd4pfzGtkyf79m9nAaHfUQ4isDBaA5DVtP512jDF",
  "key18": "4JxeRu1JWP7Y4pqPr2FKxsappijCumx6da7p6vcYn6vtB2jndNfgPDzxLLDy9GN65WL9nTyHmhyfqoSJPXirhRa7",
  "key19": "4i1yx7YCrs61XX6YerEPwAbPjmTFbAhdHAbYk376kExo8zr8fi8nrh9PASyTSNiVyzTiLoq9KJx9XoFxbFHhwwhg",
  "key20": "4sQW6H8fg4PvyZ5ExUgSXdHWBVReZiUK1E5pSZC5kDTfn4iQYjaijQuGpYy6TjEkwsJmCJPZsbVVaFAaDno8z9a2",
  "key21": "5YRKr4dsQpVh6ANfqMGBLiKyGkes8P5yuu8qtoTG1hdqDrynpB17XMjAVrfGLRjascpiEEmAmUE8icXVM91TDUE1",
  "key22": "4ZZp64y6qceBbJ4MzX4JWC7pPFm53LKstjuZujmWvJGStutYCdAf3V23H9XJMm5pkDHx9Pd9dcuLYJJPzQWNs6JM",
  "key23": "5f26nn1hPq1CZGQcW98983hyRCUkt5xHsPRsigLFi1Z8f7iLnhF8fhYVhujLjoPCHfyKqchCZHHrXn61TWG3Jy2o",
  "key24": "5GLXiU9KkKJvWuVEAZZVRZQbodvBFkamTLe5ckq9xNaaeXvfvNZjDEdsxjfgQsKSr8tb7f9Njaw1apv6tWzBinUj",
  "key25": "vwn2GvQtjEgPEF7NJwCQ3UUBwkprAca5YJuBichEiv17bWZ7CXzgg3iRUv33xE9AFicRB5JobXkviV4bfFKHf96",
  "key26": "2kfGaZaemHc3qvo2G5SSURsgdbgXLjayKCgd9JCbtkeWAzNjBpx6xmtPxefTXxQZqTbiHjirZBYFGwhwstTJKQq4",
  "key27": "2e59E6VAgau7NHm3JjYUNVnPT1SGE3fTbmPNWQee8KDJPnFJT975C7VzLmP9aspLUfq1kcpsA8iKVdby6YBb3Y2w",
  "key28": "Fo9X4CVyiu2W371UsTm7STYUFnnof8keoUckYy8hjGSsAPfz3qf1BT98Y8ijHrroknjAL5oPxngZXkQaDuX7pRr",
  "key29": "2Zasc7E9fRL5SG1W8yWDq3sTdg7VnpXo4EdSGSvJT6YSdeE6KWauXGQmXWYHDzMuBiJZzYVXqApspy8oJkhjeEHs",
  "key30": "4T4WbQBYqo2wma7S5qDseZ4NChBXwZmQmeMPSKmpazN8D8j2X5buLPF8A2y8aUbHjF8zXjvNUCikKWRv6WDNY6WZ",
  "key31": "2UkjtZR7CYHdJJhYqAD5uD7pLiMnpi9Bq9M6yRJ39nwZQ9Wxsre1XNRqEhcQaUbAUxB2ggnt2VX2YQ6yDYHHBpoV",
  "key32": "5sgwvEDcqnHKGoFyERQswVTmySvNveaPhm8cibuc5xjhEwW2RmFnu9seksjKbrPeFSUsaQ7dsvzSkwybZZLoAC6H",
  "key33": "LN9yjUNcKomw4TWh4E78hEcyHGqgNr4BuqBkuPPRxS6YXk8UsNkGuzdUjZKpfiCeaZqxZvKb5BRseogrcsLJGs3",
  "key34": "4VQQNBiyEKSy3f9pdaEFtfbdSqM4Fv2A7Gx5XQkPGq2Tz89wiBn5pnR8pQ3W1m3jwsSuZjkyzgcHFRGvAjwo976b"
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
