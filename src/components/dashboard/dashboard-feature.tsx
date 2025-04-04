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
    "4QKAycnryAUpYYuxeYRduB3XUz1A4DW2XNHhu1MM44EHaEKZyjuKE2vygYDXzuGTBG61D9BjHco9KHR73NQ2VKpu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nT2brdapiMJqyoYfh7989UVVKN6fpgLqQMP9HQg1V3mya4MW8JAYBxCKMU3tttWMgtjEuYULEaurQteex3aRWoL",
  "key1": "2SpFhnyytWCikNDvRkj4UKnReq4KYRiBQo6qS1vRzTRJnkt6JL2gvTTa7Fy21DxBYgGMVEeJVrBVap9ezkMF7S2v",
  "key2": "4jKScZZpZFtWVzPfiZgPsnTTXtq6C9X5fEye2KPwKU2iVRCUHR611GT5w3K9XVHvBAmrcktSnFw5udEmeYEFsTrY",
  "key3": "4isVW9TdFkMx5A6vEhQ9knmvLwEzuFbPqeE9QywKu6B3BN93AaYGoSAnseUXXKZuT7YpePovhpedUg3oWE1j7Xqq",
  "key4": "5w2skVQq6qTtFZuuMLT17v1iR8iqEtnx6qcxZ4nSeKy1S6PHb9oZZLrW86zUJ2tNE8UvxhcxJvShJq1yPJcEk1MN",
  "key5": "SiGtNpQbT6VqpvSr9F6ZTxK2kattBFGQHqifDnJ57iuTT6SpXdt3BAmCKKQuRjFFatBpESDhWLpTcArqHj7scm5",
  "key6": "5jFtMyMyPkA67qyLQ3SLCBfrKGgRirMP1ZvJ7KWVsRtNKbg4cX9Sp2uL8Tg9KC9GENoYFjj1aweTdchyjwBBsLkq",
  "key7": "Vat5DfnjK7SqZdZBHRe9NWKq12pD1Xe13ZmffHE49ZVENT4zPLsjG7LrUiXD7wQSZ53bbm96pJjFNtBoPiDTYmJ",
  "key8": "jJCzB2LJfGmbsXdT5jqfX96x8x1c53Dxh43HvHeghbG4bvjWfP9fbtTRSH6cRGSXoxjWdLMMHn1r29VDr1f7vty",
  "key9": "ypYd5C92aoCJnBpPjdmDn7PHAr7yccDUAvi7gqSCDbtMy7ybVoMUQeJKLdhsr3Eapvw45Yg74NiMKKEWqwCcLHs",
  "key10": "4uGdvvSHjK5sx5vC49A8A9rpR8uyWhPv1L7JZkbMwpYwBiQ1GtXbkerLj3wgKKHVKhZCBD6nzJqBXTZ4CViK8pnW",
  "key11": "QoE9487wHmHkQX3QFujSpnYRdLDx141hB8MiUcXuH12DUspMLdb2qnG55pPY535tLjrTHcDsXBLxqERNrZCDwUH",
  "key12": "346HnGprGP4UtpHgYGFp3ThNFHaZa57WBHwCWnMssqTeSG4N8kyRboPwueuRY2o3kbt7ZxB1YFzztqzqrrWyn1nG",
  "key13": "Xheu6G84HfiK6U3okBzbZX8XsvcKYXg4Ws8dMcV2ZCBbkRkc1AR8mYgnMyz5X1S4B86NTUHphoowpgc4v3PBtp4",
  "key14": "2fEUjsSAx5q73pN9cEX5V5bcTcArQ9iNjZ5Sne5QKpnZ1KhnjNJJxZEBkFbxV8zdcg6q7G61xdXaqjGEAotK9utS",
  "key15": "2MgBECe91EJmqtX1S1afGnkEeouCCBaK2fHiYTHsmPVaQuSAene4fSdxtBGatm5n8mv9HTfxWqhMd6CDwMp7Ucyc",
  "key16": "5KpqQ4tGWdUUA1oDj6ongZmHfoLzULAqStfJ2REbbtGsnCxFHtPpqQ4ZrceBgcGyq5Wn5g6BJvbnJMpaSjAU9Roh",
  "key17": "4BSp82eiN3vmb2Nrj4PehE4agGTztWYNXHk7SzK4pxVndQA8KbYmRYvPvDvg7LBkcne481HunPmgJDDkSU3ZDeAg",
  "key18": "2eKLB2N1Nei6hvmeiSitgG3xfPbA6UmYiyxvRqf3AammLVWJPS67aTnrXyMgau9EoTygMnM5VKRvB9zDAZAGgqvN",
  "key19": "52qo6y4gYguZkcMhYQDdpLdypnep6T7KU8qcg3PAxgFpubNaqVwbK5rPweUVLHof3oEepixtBUPfxRsYbX6BWkB7",
  "key20": "4hy2PKH4aZU3BrGXdN54qWPP8dTnkKi3KaApLFGpKCj7ng8aB8MoidXLknqn5hGug2W3P5sYqELA3LqccPtApgdh",
  "key21": "TbHvL9b52aRjANumG1TJeckShvVmznmwrwjnWwpG5dq5UinEbPAZjkvJDSirjqagc1Hq7gvTMeud7eXfzgbRMv1",
  "key22": "2ps9hspgoPE6R5nkkLk5PSP9tNvUMoDD12VMipkb3dPQJkgLrwy4HfRA7mXpBjJXkkWgcPMD1fXN9Tf3x67k48r8",
  "key23": "7RAXJk7cevyGdz1fcmqetgELw8hjmPHEzQTHeiB2wLz8U7ihR3MuwA6HTAfjrt46FsjD4Q3NkTg38bgw6GMKWbq",
  "key24": "tEFsePTbhzsZ2vk6mAs2FRSi1ScNJmk7u4kHmjpCqL4ZGstihYBiucssh8m921DB4E5fvEYqRkgAat9UJEUEftG",
  "key25": "LSsaB1DzGnTerQvfd2J7BZjudfZGqX32Aq6aPRtCz9VJMtC2j5fmVBvV6jHAyGxsexGPaBebDUMECoGoVSHdQbk",
  "key26": "gfRc72i8ZDVX2NE6ZQ4gJN2tauEvfgNFD6N3C14mk1GDPACPfDPyqPEoGsqYSjeVcG5oeiqizxD3FBR3ciDYujf",
  "key27": "2HxJTLDXvWcPibvNjAZ2oSnbMbsMbD2STMp7Rzj8P8uUyRDPwb4msoX6JMXrKf1nYbvNb99fBTwPFT7ip9uaeeWD",
  "key28": "2kXGZdkxJpdUSHTMdNmJcu27CAb8FfQYYHWxeypa7iMzqLBYozvz1cR2K8BGaLKw9nTBgXGkCG15nNKqmLHkLbTs",
  "key29": "5wHLGfLSKsoC2MjZ4i7Uj6DXNEc8KTdbeJ9icoxo8D8cz6kX5fDohbM8a6GkckDsMiVX31HRksB5BhvLL33yfecS",
  "key30": "Z1Pdu8gEN6GyatadcByXMiNvMYW8FUGHNYJp2Ciar1BJfNya4DGXhwip7iqTgWUgjDCAk3kKvGrPM3B8RhP5TcN",
  "key31": "71ABmjG4urzZkkCdTGYhNgfXw6hmmBLEWQFTHZPUcxjATFbeW4sqKJFV5FVUTPLnWYmyGXggWE1ZC7TUDbbq2Fc",
  "key32": "5fAS7XbFe7D3TeR1SR3jPph9RjPHStv486SsUHEX5voyfqUGoWtnjmK1tFF46FP8trtSfEHtjc3y96SZM6W9RcEu",
  "key33": "4EZx3yXdXmgd3UUQ2rYKbSiW6PjRfHKAJu67LedAZoCH3iw8L5azhsbjZDb84Snw4tNJv48NbS5J4oEtkXh33PCk",
  "key34": "3SdQP5iZCyW2hPfXxbaaoBVKDbkotW98deSgcgYwSXzmDBZJgd3rJ2adicLW1QXk8xPN1wJ4ZXJiMMRJFPSE7Co5",
  "key35": "357S3Pv3sUFhWpip1j8drA6bZwFUZbV8jwybaNgPmi8tzUdFfmp8NaAUuYKvSUqBGyVYJAytbgc26NouZ3k6321z",
  "key36": "3XreEsCH6orbG6A4Hguq2vf6JZKXm1DbXCFR35ri2GXs6QsvN1SiWNm4gLzUKhLAJ1kusUKbGDBKYBEZsR5ZcdLh",
  "key37": "4zpLXSLBiLBkZU1Vuc2WAY3T1h6Fm6bxTMhGhR73eJNqebot48tDkJfYx5qsWAzrbNT7xWjPLQmrfuQNM3nCuKZh",
  "key38": "5R77EUdA2yercuLxwkb8FADbS5XcyNhMVDdVLFnh7Aw6Woe7SPeu4Y7xEf8X8VUCHVWJrWALk4N2V9sT7mqXTL6A",
  "key39": "3KKVr3qkH3TSQuWGFSjSyYY4XJYnH4rgWRLCXjrdxySUbYJwwvZNkverhjAAVNXdEbBF2xkjUMYf8cnF7xK1CWBS",
  "key40": "5dgXz78St8g1ezZ3AsyeBLfcmdEbUsCBp2TWTsjfszJ82qcUXURcFqj9F4PNy9mmGVFvCz6r9CusLvAcRXpyqNhF",
  "key41": "5hVKrXeBQzDWgYULFf7q8db3M9tEt89r2Vxizvv7X6SehtBckkUYyPCKKrsuipHCP2RMX4rsBVPH2up3jokm4eqB"
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
