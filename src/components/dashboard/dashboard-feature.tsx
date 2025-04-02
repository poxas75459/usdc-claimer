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
    "3MyvXHNqxaDU7SVUsq3rpovtf8wQF7eutfiMBgmu1GUNVJuHSkRQpcnXvC4SLDfeJFLWUegHB6dSFWJcKyuJgJUx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57r1uyak16Yq4DwUCWt7MjxW8XhGzM9banYyikbBWLe77HLu5LDPzFsp9VdE68v7PoGLGj3We74jNxhYv2e4zfCv",
  "key1": "XWETLs6Y758K1M63eYe2a62EZ9U8nhbfutXHJNXB85gDLdFkpnydRV784zxQAsMF7RZXst2PLUCUhusosaCy83A",
  "key2": "RU9kCD7NUAQeCRvnDRNpQHDFgcRWhKCanX2MWzuBMw3Qu87BjrXoURbRPADmSNVEMeY7bWzkzmBuLjmZawFTsTK",
  "key3": "3h4EzawwEYRUY8s1pidF1M9ZAQWh7CG2L3Q7eUJPRmPXiZxDSF284m5XA8RbDHUH5ZSAPg3KCCDrrB6aF43vEfks",
  "key4": "4vR7TXEEu4AzhnMNE5xBUJxF2hw7N9DHcAkG5vmFTxBK6DxxJ9de6ZuxrkJ5BzKZcECXuUS4i9BVHspahKY6aLrN",
  "key5": "FySUwkwLR5Hh4tya5M74ncxAengJcwLwAX949gyVbQuxRphXRB3KViht3P5PQ1PQoLiNAtyQR8aJge3UN7VCeZ2",
  "key6": "LXrz2KU7p1GnaLCRii1WXNLWQUihVSfpF9VZSjXyEtV6fvUdhTZikY6zdSQzdw9T7HYd4Q7HCjYhqVWdQt8oAst",
  "key7": "4HLm8x4uYSDDfXQoSSZtd2DVKyFanYXrTaWkUy2EXvfjXKJTSSWFYAc3UkxKSqbxQwqj9XsEK5hkAkrbL2ep6WYp",
  "key8": "3FfEFL1YasZjVHeDCWicuY8ne4YyCUM7ViK4BzZxbZ23bRgA1MMJWTqcoDMqHuPmCfZ1gYx1ba5djmgWFb8Vqn6b",
  "key9": "5dbsiXsWh4dBNg6swHe3aNCkDq46qS4VyHte4sTRYdojjM7WNki4waadpaxRP7cZB8JwEpBiCTRpE3MdDvSHDgr8",
  "key10": "3d1LVxLMVLrHw5Pkgzn8S4TmBeSHN9x1uXL54AqjS8R9zTmrczdFwUtjMmxSEEMGwqA9JfUmwHHnrmLV6sqj7ACL",
  "key11": "5YbjPmr3yWiJ8K5nhUYsERJXaZFDqGD6vgnonyPCPRGaFi24Jh967zv1dVkoKGPFJpx9LGdodqLQJnMJ2Pot7ikS",
  "key12": "4X5XoGHziXV4CUcuUpfzRN4xspwkrRSnBUgfUaHTboGzWJMAEoJaE8m8mZrpTjPPU2LpQjPSwgqNFZ5iJ5BzpUwG",
  "key13": "3zMvSziRewzHLibD2anLwtuucVcVpRwppSwW6LtEd8yek7RGf6tgyCAeio1WyowJaYQvqKsATCNKCUt6VUMzP9Zp",
  "key14": "4osGR2TVEJWw4Gwif62V7vSLzj8r2BUAyDCiUnDy8ehHRVKbwGD3wbJ3MRVMGE4TMrTr69DfXKuXRvrbMurvwNqD",
  "key15": "3G1Vszp67Fagmpg6zxTTfRT65bRNQ3W79JFiUujea7y4Pt9qeyeZvSsFXgKfNKCHadTG64AgqL89nq1TwL1SVxGS",
  "key16": "FaaEMDkXn25QkX23dnFj1u1nKujtWpFrnpj8i2Xaw5vPjxCAsGpuYL85UVEsDhY5zibpgmFxXcxp2G8qRGssURX",
  "key17": "2v88HtnujAPoVSdkFqWiK3dFa95SCkMioHvYJgVpSQJfzALwKrYuSL5aC3nPoqiu4Nu44xKb9GdKsqGPAHvHz1ie",
  "key18": "3nWBUM29e4JmwpoQYiRrT6kmUwqBu2SJp9VDWZbmKoYv9dqLEfSKcwaitoxVr98QqPuGRYx2UTaGP8S9hVkVtHUR",
  "key19": "5E1VbmTNyaNSbwFG6u2tWFf8aY624jDTp5pCpsSGthmebi2zyUihoa3nH7XE9Tb4gLHUHm9TUsBdU7Gdrihy5n8x",
  "key20": "483DHS65fXzEHWY4zZ6WrF8y8MHMutRCW4JHSuUCgoYodFXe4QGkD7PoTDUoew9KpaHBkib2mDGeDCrFcmRxTAqF",
  "key21": "3Jp84EQGACjYsdzBWB7BSkLUMJbM7fCByxzgyaXQRLTxsT2gXNVNZ7H6byPNUFqt8ToNZwStsfyPt9EPnwE226Nb",
  "key22": "3CXCu27bNfyYmUGYjesgdUvVGieEHxxN6638NmHt7soCMkQR8u6p5GQmRjhNMGp6jPQSAtaP5Vea4EhDWDu5KYZ2",
  "key23": "5rrErinXyFN8MFdc4LFKCzgdTmcPDH6SANwDhU3dRwJkhV3zMq5CaG1bH7YdmVxapLKxBy8hTNSX87VFTZ36AMpD",
  "key24": "129sqo9rae6WSwDbMy98YjqVm2wDX2uYq1LGQUvLggYFD4n5jisyVjTrmJRWJ2r86aJkK7qAaxgBA8kWqmYdBu2M",
  "key25": "C5bKsLt3CdVHMhcaY2yGWa81vCj8wxkM8rTsXftir6HLngXZ9bR1bGywyWuzRCDTGMNC8tjNZjzHKWQLvYKuVvQ",
  "key26": "2xmw6SeMBrFPFvZHRAMS2KLUPodoFzSDHunhBzzjRjkXW4zxMUnnT1JUSP8jcXt2XDwVxvw2vuMhM97ym4B3qnAp",
  "key27": "3ogTzAneKCUaDc8gMWEXwmLYzkD5AZmSbjWifQz32G5K8ubVTKLdMSqNJhNwqHpe148EqbS3KgYcc4RB7gSDxisA",
  "key28": "3PHXhDPeKNUA8zKVARNE1HLrSvYd7EkRd6kisDcDHF2cg9WVR2DfB34YvrGbaLhMWMAWf1Ru92hWpFSCw1SfqYqn",
  "key29": "pepHthhTWM7het5ifAUjPrMZsPBUhojewBR8St8WcJA9fMoV5CgsMeEo6UuNmNy4Pm2gyGv23cSoDCXmRvqWnqT",
  "key30": "24czUJZ1tAw4iLpmgp2yztykpBigyYAGsF4JFZrJ2dsjGDrp6ei8r2gag1wqnmqkUrodePgDtnVhtWH4MjTwSmUr",
  "key31": "2DGCjgXA7Ni8Kx4QEQpUtincmGzYRA66Ytiq8WvLPqUeGuXDJNv4zCU1we8mt9CvK1F86dXjsZ9sRiHu5EEfeDd1",
  "key32": "3i6Z6Pe22CMKWGt3t1rwojCMmfuGbQz8B5bvZnNmTv6mu6q8hYE9qX9N1dgXpRsKQwQv7zu87o7ssuGHJpNpfbQm",
  "key33": "3BapSJCNL6MAuxeo89aiNUaEP4GyRBjzWYX7xMgXP63yE2KyQLRodYzywBqw8Q9sArkDTHLQVcCSEeS7FZDxpq3V",
  "key34": "5udGbq2VAr798zusEUpKBeaFah4hdEVFWDucAww7s855dTbCLb78pKWQgLxLgRxGsz46mBjaRvGgL1m88d2im6ff",
  "key35": "aZGKfRPQhEhvtovzjb1dsz82GRXmvmeyJigDuhj7wGwtGKwDe6d2gEXEWvArH59667Bk3nmDWs4G2dzsk8ZAFys",
  "key36": "49SVEf2Mb31tppmVrKmbFkSAyXtiKNqeoGVDh5osxJYiygGDEWpdoXP7qu6BDcEDacbj6mMaBzEB8grJw1DGA8pD",
  "key37": "4QK1hddwnEVvMTu3CjbjHF87D2zCGZsDeSiDMsXyxCsJpBcWjzu57n4mMvFXfywJqXzuTr57gnoTiHrqEhjUrN7U",
  "key38": "4NNvLFDjXhgUAmCaZZRxyXMhhMwfUtjZBxsPYLEc9LPxzBCyNaCn9ECV1Wab2vr2gVjHdBH7MrFtbSmhQkzgPwCM",
  "key39": "54Z94PLPbQky2q3rYRWCoXX1yV4aaP2D44Ty9ASLBhZSx9bQfyeviCSr8B2Z9rhZPseUndDPeGJK65bKw5U3ykFn",
  "key40": "2Gf2PQJkpXikdofZ9Fk2r56ZWmyrTwc5Mj1nNeBFgxB5K1QACrimwV9Z9xxBkyHuQbYRy7otcQVjDZBGBM3wmo1i",
  "key41": "2M7MgJGGvrDkhnPXDM3n9w9dHCQSwhtoBKVcTUrN9qFBD13pCGxhPZzicvkppk7kjK7PFudHHoKzBDbYFU3LUZgb"
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
