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
    "4GxRnLwTwx1WfEsQeebUgjn1UxGCBTyEgmurq8QDS4Kg1VF1tSCSj72WnCEzG9ncW7FxfzWpAU8ofPu4LXxi39yk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eo296i3CWhz41RN24Y54UZobgUWbYkX3hFVjEUY1hVbYjV1vviKjwSP6VrfmBKsQGdaAAfogU2wz3zS4KUqqoEa",
  "key1": "dNrADawWZbnhw5oJMmwH7vZ2GNLYmAs6yaJJPjgE2Nqq4BjPvPU86DzLAbkeFMQWTdmoE5C7RUqVas38D77gpPw",
  "key2": "51poQqQyDeMEDeXuoCMQJhkrGee6NmgfPC13oX4ocqsaReEpj6neAbw5oSVXrPaGAr6aTpW3qncyaTBv8fDtGCzs",
  "key3": "2hNBtVUiAm4kFyACLYQJ8oQKreKegURvkEKHfqpuxPnbnAY4su5geHdLjtLi6VV8xaLEkXCRaQsGoiRahaSeKFsP",
  "key4": "5JiRn1UkUGAV6jNpjJfB7pajcUteNseF27daGGLP9E1EfZt6FeGE3fwtzihcJMHHM2Bh6cgTb5WSPkQc93osenGz",
  "key5": "3mpPHQT4Zyoquo7npz4z4MGvB263mmjRccwrLpgmQpZsocXz4AsbkBRKC7e6Nw49LGdnQE1GSa4q2fvPhAbZ2RiU",
  "key6": "23fZA7va8VgfoPGXLk3nhfyvkMWqSh5wZNfbVTB4pj5m51YFXpQ4ejbyM1eJy7Kx4sjjFS1iSj8gh4V5DeQcDn6F",
  "key7": "5ezFEedkRCSpaZ4RADuyhkHjT6LJtFTQgfMioZkGrhHWMVLxssAeVjco2MRN5Kxe6XAuRuNAaV2JDnPHhjY1GJTV",
  "key8": "27ChJfSNVBvF5HP3EUwhTRBnVu6j1KyiowNEPNSsBb6JvhPF7dh9awgivCA8BJdRmn3eJkqSP1r2H6RfzrdRTEdR",
  "key9": "3Rfrbgg9PdrHLfUQiTsjzki1mE5Bkxe7JmCcEkfiLHyPL8cWYJHraqScbnFYCpKtez7RuZg8wtfF7KTjzJVPE1P5",
  "key10": "3oNyBN1HpjVbGRECghJt7mmUxB8E9MYBU7iRb6gTgEuSpiBh6ePTVsBYE9MaBxzP5AKaN65t5pxpu2zEpXcbtWZE",
  "key11": "2BL15HWd6dxPM3kWwRUdHHHPumTCKW2SvKtoRXQLjVeWbjGwHpMHcTTEtqpRYMnxo4w3kFXAgJvY71ZgwdsMntpU",
  "key12": "2ZuBjjpnaPyZUdT5E3oyA5a5fb9Syj3nZaz1Fa5eSUDTfhcn2XuPyzRM7DyvkvoXzxko1R3omN4EtXvXhSS28nb8",
  "key13": "chCtA39dvm6XhFsAbz3jt8YarWCCSRmsRWHkG1Hv67NLca1qomLToXLeYGwe7q1xRDud4HQ6d8kfKGUnfuCpxYB",
  "key14": "39U8Ug9pxEqMyYThrHYk37pyFidfuyU5dQdcnqdAr7EKWBa6zZgb9xLAm2zMVAGQgqT1ecdozNGofT2hv7hM2TTz",
  "key15": "2b6a5Grn216yrkwEMTxbnegogRdvPNmBiZ3vTyTvqNmcUVHePVwJtZB5PVA7ScGHsMPo9e3TE9J8zhj7QV571JLG",
  "key16": "2nE6CNXfr92QHjHFirGVPdevkdDFtPDKkjQqewiNkFKX8uXQHzmQk3TgYnVuUefdLFDXoPV21BSB5ePBsbdeJYW2",
  "key17": "rzNvRtLT8nvZ55gGwJGgZyCRgze1Px2kqrb9KPoyWvzDDiWTQf9Dc7563fBNWkkbyQvFTMg8jdcthktD6ae6wKg",
  "key18": "54JSUs5PmKdQ3GBswJzkGQfVWfSq4G2vVTeioK98RHKQGhv1jS6pvvP97rY5V786NZCEEhE3r7BF1WdLW5GprqUN",
  "key19": "4iSZX2REh3Uh4y81cCgaiGKKd2ebhB8V3pDq2rhtX4EYunRqdADztXN84Tnfz4S8cqNSWrANg9PNQc2Z19btCAt1",
  "key20": "21cn9t4ZKJmBUkkJHJRnryHWWpjg84yRMS98GDRV1nxvuDYUmAnmKLM7yC7vCVupCqoN5QF9mhWzKa4c8ZkxH1BX",
  "key21": "5n9F8eG8bP54Lu5MqK26WcoarbcKHh36fTb78P5oseswG7ZdFtHCo1cTrgPxyCN1qYxgdVLkmTbGzKAGa2oXhiL1",
  "key22": "2TPdrWHCfAuo6dt7TbserKMcM5nULv6KJvKYbiHcUWtcRhVS3UZaz7RBUyhUPF1YAzBWALgCagV2cMo4hiEdrkMb",
  "key23": "HQgAqCG7sML7Z4Kv1Mcz2NdweT46gpsxgYUxCfUZX2Z4MSqr89FMTRzG7EKk59jNfYaHfSFPbiGzcg3pomjvBK4",
  "key24": "FMbAfccXbEpgASfd2a89wwCFF3mmjDpuYhWHR9pTQF7jSW6UikqcJv2SJtqMVp51vDRT8ygzXWD11T45FUQEXWc",
  "key25": "2Zw56aykqp2dSxgKPWvXJ8D7XD6oajAKKixjRRukBypvVHWfp5vRudJ9wCbrRB1r2T9Tn4FFXWoMuKAqa62NaaAC",
  "key26": "QuzbL2sbKTBxpTeMaoMA7P89sH9CztDhaUdVdzHXjgkfXHCQQN2a282sREivGj7yCoc68A8B3mxU2jMWXAYn5Vj",
  "key27": "2v7quLsy4n9bYAeBbMw4UrGoMtAX9KmjJwTDFXL17AkqpscwmAQGG9iLhQ8wGyQZycD48KTKfvDXYjVD4yuSYV9M",
  "key28": "3dWDJGY5APtei3ct3txarZP3SwqQJDqAV61sJeqFRJjQPuVSbUVuRVyGYHMZE4BDv8UNMz1G2vbn4P9z7NqbiwjQ",
  "key29": "5M3uNyaGvrvF8BT5jHb2p3yroopFFx7Z522xyjrJApomLLCNbfFPrcCYsqjWbMrEw2t2DKJDd5iSNcCHL5pNJDox",
  "key30": "2tZW2da1RkFd48GmkExfQT689xYZJFR7GPKarNfjd6pjNARBSBGtQKkADWkvqASPcKPZ7g6Sqpwf1JN9ZWkU8VFx",
  "key31": "4cizqQy2PytQg6hyYCLk7uqtFCDw25HSMLu7HQs6ZCjKw1N8Wa5JFyNJ1D9U913CbkaZAgGAjTVN761bD5vJSzSc",
  "key32": "4cqMtvYsawdVZRwGodkPGEvAoZF5UDHrB4FQWeyUJCiGP5BvYmk32PLRhdZGuSdxiMsjv32jGo6275DbSfVbrHBY",
  "key33": "2Un85nLX3oWdoug8GkUXdMtCxpuEP6Ch6cCA9rmQyuk5Kz3H8AgQbBXDwYYmrvvJjWsBh2eMDAW2xPifUJiHVAGa"
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
