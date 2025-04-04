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
    "hvkzkMbs2dyHyD1mRk9Sz2FwGmLm9jAfXznS5soYzAfYW5j5Su1ojSrz7kRfyCzFawE6CUHn4Jd63G21ysKyZbW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3waGGp5DN55JpELMpW98qqWc1jzvzCs4bUWweUyA6nUPk52H4zsEcAgiGb7ZQSvA2KEqm76mt8oGVCMXCXHdzD4z",
  "key1": "3d9mnJX17UsdQXggmj4zEqGKaeuwC3b28r3np2WWAMbw88s3g6pBkzKokrxtXrg3VZzUVdvziXDwbqWUsrN42rxC",
  "key2": "5fEiCHTVAQuC7mr93RXK93ej4adhHgBNeBMhqQY3cmH6dbV453mNonPLnNVrxF2aabrfVnG545VHQ9u9DEcd4WsW",
  "key3": "2XS9csXVFPVBc2ju7C5eusT2GFWt1GPc9MvVGVrESGbgnmRBLpc3FGGGWyYpx2uJ32xpsZVjgP5NY2ZA1w3J42Ho",
  "key4": "9sbaiM6sp86yjrSo8LQcK8XUdGBp2vi5MnwWqdKTpPNZU6qRAFHmVTsVodm2o5kxnwT7sGKYJQhEdzEhMTKy2zJ",
  "key5": "5gfwswbHhB2K9brSwdeoNjYV1PKDHJkWzFiDA4Seg1n95NzkCkAFBYSBGxTGyQKUd1dMf798vf7AbcD64SFRdVA4",
  "key6": "3pqNhjJZ9uKUJQtn4ScZuuSjfrdTNYrPDkPrTt3vdVsWq27YTjcGpZGktAhHSdiKdraemRASh22dt5GPNVUGYAiq",
  "key7": "4YQWZktreAMFHXtGBherfXZzXTvNpLKWNmPPPbHMoUZq6Zs3MMj6MonvDHpu1NsCR4AJ712zRGiX1XBQaFKdxzP5",
  "key8": "3bKZgNzm9a2syE2aDzU1LY6qPwaKFPSgsgc9rQ3qUcf3PYUByDbxacMSf7r4aiF2WzMcUSHavMKULC56Jhzfyr2f",
  "key9": "bhc31iUsQEnea123MSmxzx2nQpeFYneE2CRarkC4yHJsnMAZQv118VmekfBbpDegppMTWaL8r5QznfzyYWVTMZj",
  "key10": "2rqkcqyZsTyAbwD5V4JBa2WbYGRf3sEZx8SaoptE4AoH8Rbv1hCvRe1hhzzyqqaaH23UXkRDaPnMz6T1mproYCrB",
  "key11": "4W1nPR3kRrFn7R79GmcTcd9qpk58PKPFZZV59sNQNQJoa2T4jfc3EF2HqsSSs37Cg2j7gB7a5MQMYaEayVK5nUp",
  "key12": "5JQQKkxWDjeePt4TnWr3S1teX6eswgp4ESNAVvPrCFDBzFGD6DugaGaRpgW5fAEWBQjwruKrWN5veNND7kJAEmtk",
  "key13": "4KeBevpy6ZbZGeMyVt3PWPr5ahyXuWDju3dS1k6kihhuwcnXRwemksrz846LSHuiiyFiGaqS387s8GDfnCUcb3Rz",
  "key14": "4fuJu1LLxhvcwAJtAAV1V33VySqY3oVaHHwT9AM3pPx9BFfLthHnhSwoYpBn37R5c5JBbLXeKeXRAuZKmm6e4Dnz",
  "key15": "2pQ1UYTZk5Y9vJ3XUDMh9A4BraZLNW4DmRpH3K1EE7Fb1NUyyUdxEdxH3u2sdKjmSBZmsJYwHWNxFdMsTbkMtwgQ",
  "key16": "3cFW4Y7eQKDmEJ1Lro4uDQg3jxrQyutJvKVTvFFKhG3FzUpLBsgiKGCdYjxrKtr2R3fWMrnCTfTwiivE5HXftGUB",
  "key17": "vWbroVLbLLFm7QeJNZNcYf5hENBW8cAeaDvCS3rxRbHj81chGvxVpBdVxatkoBU1P8jpmcnJpN9YWEzQ7zjE3AT",
  "key18": "2V3RypPjdrhR24TA8spY4Wk96hqmWNLyfRh8sPCDVbBGAHNXguENHkT9uPqWwEQBSr62PTGAbgpmYaYnrQqsKCAW",
  "key19": "52sAuiBuKUKjbhKcALb5ARc4DZm6Zu8L1YdFxg9PGH4HL76KRaFzRNJzRmZ5D58tWNazRh1oPgiTGCexEoQh3vs6",
  "key20": "4Lnhx2PuAXktAMQwXUMU4q532NQXSPLZPGE35sMNAr3PyUtXF3h8WiDkMb9aC7jM7Q4zcD9mvSgYP22JeKaCcwAE",
  "key21": "2ecu5UCoKcUh9U1XuWQYPKNtuU9ydPeikhEx7xatam5AAH19LXtFmyrMJncgf3yMA6jh2fTXRRFALcEwqaK6jVcF",
  "key22": "5WBXPJ69HgBRas2tTkpc2XarrVKoexhjoU7woTLGUP2wK9rvjCaopgTukZNRkmDPfetqRdrbcQPBiLFXaUQgqgTY",
  "key23": "66M26o5zeagzFawg4JrmVqjfjSgWSThq6md1YNrxyWEYF5sUi2vTmiu6hQYgvnYCMkH8eRmHR72fTzu76AtrnPCT",
  "key24": "4U6kF13iqir2ivwUUyyBoCA851baGjEfGhNVQ6EBg4rS5PXKcdC4E7CeEbzHJfeyRbCGVpigL1smQ76iRsjbx3G2",
  "key25": "5oZQ5egR2tvohRzo452USNn8U2K7NUumso9sApiS6qrHi4DZG6Rq2TeDTCooC8vPjLZwwx8rQwkGyWDSdNqhBDmN",
  "key26": "3PiHM8NZyr9XJkec4Pa8Lxik2zBQBZvFc8kiYLoa9kfaoycYgLbV5HY4iDg9xEDbG1EnoxKpn53X2Kys84ubBMXB",
  "key27": "5sCsSZa7ieDCMqZHvH9D2QMB9xu4zyXAn6RjqzxjqbcU81yYFu2bH17LgpWxT9mq4x1QtaP5CuWoJoUQH97nssaW",
  "key28": "4rJtRmXg7bYqLAHpfyGDKvi3jruNcjfyQFhfCK4RgJkPfNFj8Jjwxfux9G8w4mt36pYcLKXFob5XoAZc2Phd9qw5",
  "key29": "4JCmXUZcJjSRWhkns8efWizTnitS6NbigDrXP45BvWYVL79XHVFC4HGnU8JxVSSSLizrCqS3b213cEgc834TpMwk",
  "key30": "4V3xn41TyZwpMdHLEU2aomdf4yemjdMeXTS1D1AA1i23B9hVRfa7xniDW8qLyjwxoNkCFEAb8VkNW9FfGKdfWfEn",
  "key31": "CDGiJmS7cs8W5cCmY7gU3qhMz4bDvstULZkghYj3vMzkbHEW6Z355GpLMpk7ZgZxCWeyxEgAAL9PiogD2LWjPCX",
  "key32": "3PpHXeRTfYfiegpAWPwDhmMXmxKS2CwkdsY2aRwHaZgktkUbQjMXomAAM1rfRUmhdJ6DkGhKUrL422UxR7SeGpab",
  "key33": "2N71heQZKBVAzPazYcHVSJre3JAy8iep5oxwUKryRueQfK43495i2WRSrRQkNVuFj1tUzJ7iFPRYxpPTUytz6UW6",
  "key34": "5JJjC6rTYjqEpv4GMXrmZhqBfsh5Ear6kJ6Esz2wFirTFwqkeRB5x97gxRZXG1sPg9oMb9V1QCoqh8UrmdGyjk2u",
  "key35": "3xM9KaChrpnMcY2mcbm5YPn4JPaMnS6G2XWGK3BqHiifvswKcfMWER8dQEbYNXgNjTfqfEG5EXxC6mitK2b195gR",
  "key36": "55TZDFxLxd97g6GkMwWv6CoEQVHhpQZKTq58T7qMj9BsDn1TcL9vFMtVAKi4i7TwjoxB7pDJHnCjigUTN5NGXWGz",
  "key37": "4z7gwByC9NG3PU9ANqoAdHarqW2tmmwJgUF398Fv6nSxWGsRYVs93979WN7M4uSLM2VPyJMXtGd13nR2zedNF5gb"
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
