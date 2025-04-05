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
    "3NcDFxpCDghdNod3DVJA2ydidNoyGX54WNRH6B4nvBavr11X7vEMhXPsF6v1kqoeZ1vthsLaL7u2YMyrnb899S2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m7DXKGaiTvekRGRFUkyQmkEpLHgMrSMMcyajYSgkNRRLm1UcngqmMmvETDu8EiqRMje4VF7rf8j7kr62PB2u45e",
  "key1": "5nGZmrgVBhqucKr8VPCF6E1HGaaA1b465pPZyDAWkndV9yWsnev3B5ZxFWBCzsKdSB8zxY2JZ4SBb8rJzDB9BkCL",
  "key2": "4z5rbBWpmGFQwi5bfonPEs4rAvroMvgN1JWU4NaWM3HmcYK1aXc4sFMnxatijYcjS7q2yMBhVx6dBhSswtxezUwb",
  "key3": "2YMn6TpxynW32tpdx5am46yjrATV4ExLtFgtjND93TH6BnJ3Hpc4jhvsENLto5eTuxvPaAjmscSVwvuNWRCLnGCo",
  "key4": "4wzSZW68xGEnaqSLMEMCQUEuPoVCbRMaiUMJPWkByzrT9zWkWhMz24GYmmjrFCukMn7NG6Af1DyDxUG46wQk1B6v",
  "key5": "P7boPs7aJfQerq6yU9cEhgzHRgQT578J66H2z4atb8EmngtzYHoyrauXgNdxapEJRZXzMiLxtsfqVrnG1QHogJM",
  "key6": "385PDCgKCWWRSQ6noV3NpeWE7M4j6XMcTQKi5ZUXnAFWUMUn972WQ9KkVpn95qpYqf8LUQWvoERC8rez2BfH2SHA",
  "key7": "yMEhQqe7KQp2jHMJRmhbQhnETpRNhKFWCMT4ywmSmmf9HjD4tSszQsQjvxrbd5dacmZRRGFgARiHKkiGSAW8fB5",
  "key8": "3osMxPsqKDHc5fWoEj7nW8RNmSLgR9L1xC8pCey9ar7gDoXiNCuZmV3R8EnAUQoht7gm9hxW2SNtKWokFwZw9YzA",
  "key9": "3KLxLg4tQKsqPSeC4LuMZ3c3TXzMNDrspyZsYzDGsyvv5pKP8rk82P8K8nDkZuYBqFAqtCYWRvG5Kchch2HCegs",
  "key10": "4befV3HhEmk7oQoyxCujvFZVZm1XEg7z4qXNnLrUCnDM9hXCmgS1ievm4gazNYBZDi29oestvjhidncA1YTj8bvn",
  "key11": "5xVedR92QQN1mYPtSAfjPgbZZygEm3CVyfAoMeMjA9FtuGG6VZniaaduv55Vv9S1jJUKbJV3xGHfBfecaByixsBM",
  "key12": "4ScTnSiEt5FpEFY3fqEZ9L8mHH5rxBdoNE9X8NSFSua2o61kucg3spFzoHBteqQDR2oUJacX5884Byh8c66UeCGp",
  "key13": "2UFqWYJceANtKYKLVpDsbntkFUCyn78TrMKQFb9yGBq4zEFJqDpZxTDeqMP19GsApFiBpTQ9ZNKWYDZa32Va6dY7",
  "key14": "3hX8eYZXYajyBoz4gqASFCNw2zmkCX6yA4qPEdwrQChEHPTuZ5U7j6CaiqNNPqhcSN642Mx9mjUxs9ho75vHh8Dm",
  "key15": "8bDZeKUxhFCTSHdnFPcGx5z8VtjGXF7WyYUxxgdJwS5YbLGR8wBDo4rFib5Jph6SkKarAWLG6VQe9XGbh6dHkH5",
  "key16": "2XUzwW2gknqwjA3hCtZnfPRiZqwisKPvdD1nHiCaVCRAtGezJUXpi5ycgA8MRuy2kteHxGj3HKVMiWCLx1CnhikD",
  "key17": "n8VYXmGmQa84jmctV2efUT3WoiycFxy7QhPc7GvKWoNJ1v1qC5CHJiwLTEn7WHgwi1zUaG2ozLkUakVbM44PFnE",
  "key18": "RNSZxUBwttCGURURXMzcAKmZrkgeS7z5HQxrcWn39jFX9QbYCooL7Vs2QdijBmHyveTtB4RcDTwna2PoMX4SQF1",
  "key19": "SFMYPAir3abHrVX3oACY1SNKKPuY9u6Eb7BE68YcikAcJCmibx9vjP6cw3A3FS1REwDgmpSvHUGUMeofZ8R42PL",
  "key20": "2zo8R3CQDchPzuoxR4e1nsCKHAyr6eifuboFQXmkdWbjeD6AWYsbb78HL1GNhtugJZTAeQXGy9fnwqjdo5KK7ict",
  "key21": "4sY7rpXePYXuCAFJ7KYVeBYSBKM26KUnfps7RCTvGeetriKAydhQDgym1bm5dzKVs8XfeoRPcufoUtZUUV69W4E",
  "key22": "3v5d3HQkTCGyGLXfn5nq2gLxp9hiCNV6mGRxXa3g2ASzUHj18acjnUjrxHzKLu8HxPS2dXFSxt5B1FyRd8vFBg6M",
  "key23": "8DRVkTkapdLwNT6DKsSosZa6eBfpJQUHFu6gfFkxSWbZc6KLurcXuVKd8tUNKdi445MzqkLGajDxDkS7kmg4xnj",
  "key24": "4EScPbYciZKL2F75bXMQonkyw8E6zYVeKhYn36KwECd9Q8dBJZrzKVaupjHmUhdz2gvbzk4jsULydrzYKS7VniDK",
  "key25": "8KQPAmm4KhDcAGNzpGqdKrnbfN7sHcpB7wvJh6J2fxi1Bvpj44KoT35j2QCBTF5HEpoZ1mbsvvuZRDJ7DbyZZGJ",
  "key26": "5ZYPts1xszcJw8JtNeZnxyMpHUsNqad4tHY317nNQsXbNevRU5g9E6K1ugXdpDdgmusR8nTXYu7uNuRV1iX6znoj",
  "key27": "4moqAecvhLx6ivEEtdaWf22VRGWqyWf8MVxmxWnJtjyjnm1d9rwTWUSfBZBsTvaSfczTqk2mdnfGeUoAQgKdkHbq",
  "key28": "444xPqT9YqbhvoyroUGfHXKH9XBcGm8JVuQcuQHJPsE4jafyNoMYu5cKkzzsn7xhDE7sGgc8ZgET7p6rubAjckT4",
  "key29": "4PiJeyXP34hVTsWHxyDRo8fwwGxx1LqYvuNxAtYHdG1rCMoBmsfCwWPY9VKRHzgfarNZ4VRNGT1y37Tjs5EG5brY",
  "key30": "2PhAHYHasifa9v2SQXujXcAzDrGsZBZr3CHX2J4WPdVLvNj6STXMdrUkAwx7nMxWwyR9ihde8GbfsDaqWkgvv3qH",
  "key31": "RrfgJixt91fCfbmYugDVNfFnFsZPQjST3H5FZnYPT5jG5j8K76tDAjUNHeUaaCm3dr5iMopVCqvFDXwWm1HjsPm",
  "key32": "5sJqwieNXVxAgWEKWdauzQ2T3E7T21S2j9MvDS1toCfQfLQrpfEPyTJ55AcpsAc9zMwgPjQwQptUD2CHUk3NwZtQ",
  "key33": "vb6mPc9U1B5s1JLAtM28Y9QEt8bUmwVTwKfvyDgiNQAcdbpffERGkrBYpuHpz1X6VwJaqYVDXWcbedXjjYeeJwK",
  "key34": "49qdRmcu8JB544ixFzzR2B5zuNMznSJrW2R3M7xSNCH9b4qg2UGKrZNcbx59WnqWzNFPjc8mNJVEtQMW379e7z1e",
  "key35": "5gBjiAnYk6TqjsmdjVioXD7dEXUs2fX1UVRqf1kEJKTXvymKKEJ3KyvHHLtzzpkdjs3AC4GjdPs1P1sZTf8jDUSD",
  "key36": "4SrbPKmY12scTyG2S8rXDzRYL3sVunUsH4LxHPciXbJCfyQYVfqs8HG9cvFiaKXcyKBHuAt8Ti8UgGYyX8Ljc7jm",
  "key37": "2pjJPPLc9hdVT2uDnacKquLpxXV6N7jBNjSqKngfQCT7Vut4rbHbShMtWHqxb3ZNhvq3qYnvnxAnFDc6yD5cnyd",
  "key38": "5zVWEkj1j7LXD2appQAkt76MEvZJCJeLYtrHPF4s1wfrkqsiLsHmGdTCGRNnwd9Jtfd9WbTzGVoZSbu4vMLfUaB",
  "key39": "5fX5aNb3Hqmfynen667zorhdcGQcV56qErvQxF3A7EPoASLF1w3t9wStuZ2a3Y1ReS6K5MqozJyzGHbwipagJiX1",
  "key40": "3fcp3UEFYkVy99nejUX8RuV5WBUAPM5eMkTrzgfyMMhNTmo73BBJKARn6RBzy1k8xokzLZepL424LHmfUutCjJ1b",
  "key41": "Y13HjFizphbnLSb38yNedqRdLQa56nKgz8GNVyRe462UfqJrLvtyLbsvbjBTrZ3P7mfYhxJJHTZGa5u3XtY8kVw",
  "key42": "LQoKXHY9n7x6a3ccdQ46SoRqaqeyhuNUMxdJ1dNj6Nh2Y7UQUrd9zts1eScCA77wF9Fr6XnNqM6WsXtnvfNzD39",
  "key43": "2k66SfWQcLKUCk7RyVcmkSDjLGJr72G3qTG5gHnCmgiNaiZj4zxSJ5FHLpjP6jG5yQEEUxaqRXvVnVZ4Lvm5uRe2",
  "key44": "3TZ73q2Y2WxJwzy1vcN2ncA2bQ7VCPTgJ6BjpUrcq4sGebqCVZPaZKVKsqJip6w5FyfJkjTB1PYtCHAMx122PScV"
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
