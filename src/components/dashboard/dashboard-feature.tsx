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
    "58AH4S6aLpY7KFifgXmv8URvLXqg3yFk3YDo82PuwmAvhhcYSvKaJ8BwvMDd7k4FiXubPP6U8jcynPgR2gexe7ui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JYhU5wH53ynwTBbM5qXxMaEYoCKn8wZtxQwjUhZj5NBam7crMHrRzBnyMkSLmPaYNDRPDu4NsiJo19p8XMdeyHJ",
  "key1": "CjtoREV3uSNmW7qNFzQmqr82NDxqP6e8ZciUF8nAgXX92Rij36CFv1S1FHqNLxe6hEW2gYHPX8SodUM3sMHCdee",
  "key2": "64CFWN6Ddf5YTARnEHgwcRBjjAyGgkqEoEfV6yvgymLLm3gy1gfJT2Zumg6HNHmTAF6cdfPorjrWwGvUZG98yBgc",
  "key3": "2QvzYTE3Nc9sE2f4J43v9EQ9Zx9xcAVo4nEvVyoxu979T9NayndbNWr15ERUzSkJhNyQZNYvDA9h2feMcuByC8o7",
  "key4": "2d7mWFwifgCfGZTfiwra8oh8bQH34qwV85MCWX1rSmj25WRmH3NPva4hbV3aio5P3AR8oR3PA5TjtVEKyH2LUDkM",
  "key5": "zFE613iZjvJJHcdxmcEAaJAVdB4ZhpKqUCFFAKeUju227mUJxSZZ4aUTNj6zcNxB74B6aETdFisjAvQ6hYjseYE",
  "key6": "2vxqev7HLojUr7nLTCXEcmQqBVwK9MbDmKCgwezsU2TJPZ7PhfMdSSrsaNEhvDdohBPFqVTujsdBFHtY3ts2URVz",
  "key7": "65qb8XYwg6gmNhVMHRPV5s1pyyqwWz49cC1pmCNsHNiPaV44FnCXzkdMybP2ph2aEjwWPqXjnZWE2DsWHBg7yfbF",
  "key8": "4QqLURVQ2p9zgzmVSNLTortaPNtNiEmAvD4LyfsXdVsz5P3x4iJfU2MrnrEJBeAR5BkmRRcLPRqz6EtrhmpB1GZR",
  "key9": "3ES8pg4Cyp1ZLXCFG3h8PLPZ8jaBwavt8kARQDEKfjMeJ27wG2pXxok9pryWPjcFAGAVQGrxTagqGM6kCJEEYt6f",
  "key10": "2DaudPp5fWJgsnDgXA1x78RiH8VKPjoeAfL6E46kmg2LRUC3RHgmPxpvKgMM2bzqveverZDqeiaqtYEJpQ4zYkbn",
  "key11": "BAR3Xtv4CWgg3UukSokzrG2wmKkBBLZDEZHziHpsvV6pNB7ohqRs273yr8XNxnuCPmGLQK4X966EncQ3r66yhNy",
  "key12": "2ssgigXAYGPj6U8JYTtAyBpvmkq4EUbXFf1VDhLB96iknF6EEQzYG7Q5VzZ8NQAAPk4MFjmVmZJU1qzep3NF4W72",
  "key13": "4FpjrMxxZSX2QSb9QVsrBpKKpq4z8GS4KfmqQrMQB5Qt2yKKZQqp9yJqRYWcyArRdSzji61TqpP93rKiHJH5U4UQ",
  "key14": "2Sv1yLkvFqAv7qHAZDN7L9AFcQZND3hgE1puz6n3832ziYj8UKY35jgoHmWA77RAC6WsbRg4Gk3LmJYcf4Axjyt1",
  "key15": "28CefXyGvaQGws7PbfjcgBie9dLyJ8xLHjfx4NdZTHPWKDog3eWjBnW1ShZcPByqd5P72DaFgK1pZTDJ3taTVTzu",
  "key16": "4Mo8QZ3XvDWgENttcKv5UpFPhaqBNyNHyPXV27eiXe39bf8zsney2ftEm9QNWLmgRT8n24f7KEe9wwtWUcDBWthx",
  "key17": "zLYg7WiM6VgZZ4kHnhbpAW7n2KX4Vj7yF7fmbAeMTHEsPx4zsoXp8cshyhwsD7rV7xqBFGmnYRyJqEDsVt82VKU",
  "key18": "3ES213NxVJcSe1yzZqbS1pSWSLhCq5p2cgbuMJhdnuoPvsGVKdWjYAA3cSt9WqJ5pEUU8xUMEBU6KHK5mb4vrjZz",
  "key19": "5E7nK5Y6qrmxJVbmg9notAgmPk4CUUB1aJ5y6UiE2jagMt8hsqiC1H2iErSNZ689D7ThsDQm24vv3bH1TMhxtPhY",
  "key20": "42argnAWyu1g2QsRCt32be3e2FLfxMz9Cn13KqvneUUPXufxLiRLTabSPVnzPW7g9fLLuqWn2B58ondzF8CMjA9q",
  "key21": "4X75HxG9McfXocvB6ddGd5CMAZXiF1yYLLYp6Th187Eu7vqCBiefmBsh3hsop3BSc6aReofRzBz85XfvHNGogz59",
  "key22": "4rQgor5nUe7GD3NWqGGLhKHhFiWUpwUcpLRCGJkHZpq9sobiFEZS2JPfhHLFPnYdPQhcgXTKUzfPJNqMjfWMgwiX",
  "key23": "2jxKujawwYokHJRhBZpGjpHiVWcqvXNkn9R1wFjRyJvoDJ2MV1KnvcKLSsyU6N4LTAYe9bHw3uGzMebtV4AFPHrX",
  "key24": "oBwwsSsV1Fs7hu4fk6VcNcK7VFg3JD5wtwnFwQME6Fn3h4tVmAtSSPsCVJqAC3CViKAPsweoUYaSDwHnM6qSe1z",
  "key25": "4pkfSNUKNcGW3cbvUgqZQT5HY6JzEF9RZjuWbPLRgwoRi188JYFapgHcTxTodp1asdQULxgwiwhxYXbc1qCvcZ3P",
  "key26": "3Ei45pasYY8wNHL9CgumNux1MKPBPaFGniPQFov1CPbo4GocndmLpqRQURRsfi4BZWRANfjUHDfjDUaCKb57VLq5",
  "key27": "2EqLidKb2SuS6dUDVmRLERytEVxJ67EGtCXWGdjNhgh2gdpd1hCL2cyiTvDZLRdhUmzdmecdd39kWhjPQCMyx5EE",
  "key28": "3PRWrBVEgSRcwfJViS9tmAV4FRqsdkGqE8pg1Csw1Zuvr2qeu3NtsgWDmwC9xMrXe2RVwXCuQ3kKjfriXf3wxAcv",
  "key29": "5ndVWjbjjEFexJ7XBsa62NQQsfagfqWM7y3Yv8ffPgLmvYaUL1tnZqyWU7a9QJkmtyurUmFYpnpQYMtQFkKT1W9m",
  "key30": "4yykVKj1xBDa2zfSL324BqwcVQAqcpgXFM7Zt7CgQUEirpNt44LpfrQSGxVjiZUkbmrXK9jfyuLFTHLGNVG6MDdZ",
  "key31": "34nprW7XcApuAT7cd6ASu85dpgu82x56nMbAtA8yDcpH1o8HaiukHSfo3MHc1XyXD2heYgAcoGS57xYnGQw2f7TR",
  "key32": "4seDGuXLAgNqen2yrzV1QTjiRj3uezMgcftBXJxAmV4rmPs7j818n2sZ3f9h3dWmgMHtvqkkAyFSe53SCRmC8wti",
  "key33": "2NL7qGptsacR9Wo2y2ctjJ6eJW5dDK6eQ5QjWNd5F8ZueYqxp6CEsLUpuTUSaBg2pQL2rc9WhzJwEKHDm1TYDMNS",
  "key34": "5QnMAfK7QeCHpnt7fuy97UJpAjrENBpDs8Y91PrgPBz39y8hTWK9uPhV49mcUdPXkNbqE66GqGNbUzEo2bJzP9FV",
  "key35": "4sGDTxM8uToiB1xexbkubMrmEAQR3CpEB4oXfJg23D3uTziY4HeMfFBp72JrzM1roXWAFZM7eeQkwpW7KtycT4rv",
  "key36": "3RrfB45UTLWrgHH9Tb9HbygP8xGSK7LvPNQVu6g8EW2Q8C5Lu349TQNqgwcnG9uXr2SFfPXuQfT1Jx3MwMALssgv",
  "key37": "4M3iRXy1yYnPLSezF1ncQPR3pDdkQfDQRa8QUJG9LBkHHZSMZCR5vqMAYA6nRiZkThNV6twJELqtAn26WnUcEp5K",
  "key38": "3AZeE6eNArNP4HkkR1GmBAkPDALJPFqoJhnhVxnd7Y4fv7prZaTfA2HPhBdYrnsDbAYWescAuHGXD1dMMesfK58A",
  "key39": "5J8xdozETRiJJAm1Uz7oswFMPcmdb93uMhpjZqUgm85veEQSRG4RJoYS3HispPfswGHmyEy2XgynzbmqSB3XJztR",
  "key40": "2QGADP3d5d8dMPwWfaFmXNLNMFj5wsGwkN9S8GqMqc6cDeWzc3aCVskoizKhFGxTEUUin3CmwCpUfkFzSEXCYuuV"
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
