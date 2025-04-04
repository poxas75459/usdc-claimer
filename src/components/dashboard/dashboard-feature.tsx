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
    "49bghCaSr7zMn44wvNKSFYydBUdVU5AhfZqq5DcP2WCUkR2BT12JCxsiBoR3bwMLT8sVwdEHaK6gE8TnJKN8vSrh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ApEbvFZWAZ4Lv8KwuaCjJQA5WgchFu5Qe7JEsV9qKdjwPUMmagotH8H2fx7DmLB1y7UPBL6CTZwYhreJrWjLiS3",
  "key1": "3hFJycD3GkHAVsD1vS62CUvkuez5KPBdZLUXq4UcKDmUrMnzDKzodbXeqaCX6fA83fbkSTxmhCCREg9sUt5f8neu",
  "key2": "2wXVgPioXioJLHEVsbSsCSafPK4eyo4BjmRMrpCXMvFKHWWDqxSgX63Ey85psm3STzXcTp1NBfsWqfk9cmqHrKTo",
  "key3": "4Ri35hxxqhreBfXPpLrfKEXMfwbwmawpnbMjBzAYpA42TXRorreHk39dfCEw3NncaZbf93eMHomwbNUBJDXeao6k",
  "key4": "4PHWspcqvndzbfo6fnqjncTazsGYmMGLSmAnt2sACFk2XYxuXJyfUPSeck6mWZzNVaiDRhjbA1Mez9DyHecbWiNt",
  "key5": "c62AkPdG1mFdDzNHvGtTDxfxWAiHAEcRYXWFEKchkHe6DvbpaFem97QAJasNJe4mU1VsTpFnCAF8u8fQffnLHyP",
  "key6": "81f6DM15S6ikWyDsYGAy8jrXydD13b6r4ZkpneDBGuaR49BakMKjd3bzm1xziNmKKQnmKx81mqePbp1Z2DihkJk",
  "key7": "27Fybtvdq6q1yLTnEfLnSQBC2BDHhJ1qY9RtCg1n8Kb9oK5todaHYmEhDXNCRgjB95Fpog9KTGC4qyJRZzMNjg81",
  "key8": "3czryDNDFj3e9sSWMY3oYwyQHiiau7mBrADS9mYUysrHbcc9bzNGiU37W7VfNjX2BtoS8fyghw6oDdZp5S1CrvQA",
  "key9": "3f3Dinege5GzbXT4uNTvUADaxLXtUAtNfNfLKBxQ617xkRgewahLs8K5R2wP8ns54o7AYiuEUKpjMh2V4mwAnbqQ",
  "key10": "5XNX1WbDPmp52pEsixPWaadnHrW6sYkZnd2ou9SkBfZPMrGZ5WaDMgbdHNRbQQLXmuP5fBqY2Nrpqp8soUsFwDuV",
  "key11": "3TPLUDwDe4nB7kCrggm7eWTNWUKRKP66LaqmpzTSjrRyLZmMAXF7462f8YG3uYup7ZnVPsaiuRtbrSUyFkP2AAtV",
  "key12": "4XL5h3AKyr2cKcnipLZ1ydsqRhF68hTWkChbuwE1cPq4sSNB4FMgZobCEwd6nTR7cva11kJ4Quj3WQW2LcZF61np",
  "key13": "1DAcLS67N8ZLEPtNJxWpMVg2ZxCjYQ5xrptZ4Pjr23oo5vXZhrowoj5mFK4KDMSWizYybiVPy1oJ9C26pH6iWrZ",
  "key14": "h77tS9cuBTvYJvaEvRvdwnb3ETF7mQH8kKggh9i6VxcAJzkUuPBpN5Sg5rFcv8YcgRQRsCaFSv9BT4u2h7UQkRq",
  "key15": "2iqjhGiRBQ2sByiKBCULrKuzUYNdN4SkcyP1YveBmmLvFGB6BYC1JiguMGsRzfRTnXY43sg1JiWU4EmkWmC4GU2R",
  "key16": "2MtmFmWarnMrvnAX2yEbKEci8xurFG7ZBJU9M31sCgEryiR1a4gkPbVaR5Yw2649SUfvxiMnQX8uGHFB9bEJ9C7x",
  "key17": "2WGsLyvx5iEnoL7ncnqV3rUP1cBRZYEibf4eNxuMNYCQgeeDHnhzbe5LmxV25N2Zcb7Q4kmcmeDBNRzX2wRfX6BD",
  "key18": "3c3eFJNBpm2EidXAZmZGcrYsaYmGUbaPdPF5N8v2MDtQn9Snh3A7oSpXSRkw43vPXqPdw1RNwcDGGXZnksYC6vK4",
  "key19": "4uRumRvvs7ccLWxWe4EfMWbDX6MJSW6KqVjxxwSYHDrUX8dftzUCXxJGVx1HZ6XqZCfS5kbVPggGReyho7672sMM",
  "key20": "3cx5fFvk9TBFbcFnsN1fNPe7p8kqFUToy1rAPCpgMX7wLDygi41uni6ttZmto5H9NmNnJ7u1JfBrJXJyxhbot78n",
  "key21": "pXCeVZFBQGEM3rqbCkHGuq9QWFxPVXqEejRdRT9h51epku3c3yXoSkWjknNAxn3ySSgaFMbjPojcdx6ZYyMSo3j",
  "key22": "4P88nyNuNE9Ca7t8n3QwZ2KMmWPLM9dQaDyhVorLPHewujGYXvbaDRsrk7yXhZkSxefmGtviXRP9jnPWMoMULVKw",
  "key23": "GzzWXYvtc6Z8VZzP4KHua9ptSkXwjX2RojkGwmmR2QVZRRxErmT9XHntaBCUVdDmcfWbk9EVRHYWfB8mGRzzT1m",
  "key24": "2iTW3ma2soH42j6M1FHSxT4i8pvZzUbwg9q44CpmUn5jXnAYJf6EqhxxT7ZUm1xieTC1NsdGc7P7HSgt98aAfHpN",
  "key25": "5RhSj5emN74t7EEFM7ux8JQD4BhMDqwqhshwMsGJUcQgUF985r6Y6LSp1mKcMTSpNFc4FJA1y24ywLVWNfmzafvm",
  "key26": "5qdFo4SuMaURSCvS5R59TKMacGGpnuk8GzHcVZQ7W5qNwxQ5MRHNnJahq2AGiMoYiLj6dvTc7BuPxDf3QwVzeL5u",
  "key27": "5YckP9dcdKbWw4Yor344jCnnEtegUDJu4XAvpQQFGyGzamFM1r6gYvHnxhV3HNvNTiZbeVDwpo2uCLXt5hVurCUk",
  "key28": "5pDbbo6si1JjQCbFTFHTtpMXCbT1evKc1EsXBEeNtG1bADgKHAoFrdx8pQKGdSGtn5mvfeSWWt872FfcD6WfHpzj",
  "key29": "4mzVeJsJSbF5TXQitBUnz79Wsa74N8Qp4TBxYz595TMdaMZUVq3bMqPxc3rcKszL8BbUN44MejFyJnpFQRBVpkEN",
  "key30": "5MrNtMd4Xn5e6bmLofLcCyEcvEeoqCXVgTHAjqvtay3Us1aiKSkYG2kLGopNC7wVC8BihDX25mZYDzvuGaq1XGS1",
  "key31": "5wugwqRmEtHwye91LUZReVCKHmWQpvpyf8y6kgCcFKdpdp55CpHjhSyoV1srV4x75Q8g3C4Vhajf41i5E7Qoou6V",
  "key32": "2sULzBnadRZxCsF8NvRvV7NjSnX8DSaeVYotoQwggi97JfbgiJjxU38YrRRF3weRt1TEfj4eXZhzGUNJtZjfVXGB",
  "key33": "8SoQQsWcq4wxtuYhkK5CEgi12LVggPTZSKNjdYFLgLjK3omxu18oqkmqYj9xZmJRkL41p1D1fbMTfAF9iDfT4Yk",
  "key34": "qZCVkfmWVzgv7tgvGhPtsBqEfX7QiTf1WD139Swxp17gpzgE9W5EVY5kjthp22ThHz92Tq44NUeHZhTLvYJaduw",
  "key35": "65ND5qhekdBfCGwrMk7h5fgb1a5Y9it9eydVcb778jNdoco6H11RWDUPFfr4yVP8tcJA7ucvK56BVFUhDsqAHt9J",
  "key36": "2brBLMb3jFrHeyU4DTThU4wNJK8GVTG7qwD91CiREckAiUnbq5MbZUHeLZLeY3Bcj7SCYQeyeyskVR3JsraGa3YH",
  "key37": "FUwEUFecmd4eHkFHPEPzkb2kdm8YTUoCvTPTgAvZ4nZh8L7VPmyiNymYyMALgCCEM5jL7Rts4fwCmexC9GDhGhq",
  "key38": "4b8oUSNNbqwWJNEVkUZZYFXS6P6kCCh3r9tM1Xtqx3MEZThEkXwPUFNBLp46zU3Xyi6a4LsU2Yqm89dTLVjThqkj"
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
