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
    "4kDUPTbAAHBzrijicg9NbVTwZYbzVJFiYPUukQCgbRQyXyVNPLEfa2BF5MwXyWUcSc4dM1XE6BBEF7ui1aXeof7S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p82ECMxMJPBqTvfQBhWoZh2A5ZVKEwkHyRp8EiWFyoHc2iVJwikepFcc48Z18gbEcFD7Hc9NJ6xkjps7CGfRRZs",
  "key1": "2VV6RM78mrt8PUVc3QMxNeFiTZJ6mbJUPhtWDcpv1gcuhTwDU16sxVWnGpZ7175GMKZZJJM6y9BAeH5sQLx7Rm44",
  "key2": "3eSqoMZxNuZ7et8KJznnTFCd6xpF7cz5eFaK2nQn1ENXoWwZrLpsvnyvtDmUuqS2vooRo4cZsif86jC16QLRu6fi",
  "key3": "5wz6W6eh44C5FkBb9DTiAM7W4fycCdsKNABoY7T3yM7qexH3ca78pDBL2JRrT14wERCV1sENHYESsbUxTyBn9Pvw",
  "key4": "4Xc1iapm4sVe2jtsEk77oSRdXCQoj6uCHLE6dnEzdxcHLtqQjuosq5MjXqVkih6uVxGbSRLxbSvT3znbXgPd2L3k",
  "key5": "2zPHqNKbZ7PQ7aD6fRmw9diHGA52DXzU2ucQswHEZTid66B4aJ8okF2rH2NMYCHD5RnvHNt2chAR2BBt4Twoz7o3",
  "key6": "4vXpY3Q584fVRFEWZLpYQnXXniq2G4uEWQY6BvmpLFcWYnkJken9ETcDLh77S3AN5NChB6qzHanAFTQPxEGaw2DH",
  "key7": "4RzEw5oBXrtR2cDwduHrokWeeQNX8UMuAKJEb5eqFQvFuT6berShkEkzH59NdqbBiAyKMVSqLLtjYCLV6RPdjLds",
  "key8": "2GFijVtM5uPWuWpEYCFsPUkzkQyk7QgAE2MV2G56YbpoPm8Eue6thTLarikk1w1xe8W859pyg97CnSAAg9EtFyG6",
  "key9": "2GrvWkhL5MyZyHKh6AWrFrFPuGmPtsaT9cWkX9jJsXuUmHPR3LFWcLpa9DwLGgiW3grAKqGcrwSPLHTns8UArs6t",
  "key10": "5g1cgXkZyqVrCFCnnsqBytfWZC71jJkqqG2sq7DB9E1wdV2tmay1YdJt1EfGdgxH21TQoDAExvJpUBiUsLprtzdV",
  "key11": "4VhxoWEi5onEcF33fTq9sbfSDA3rcArgQhH5G7bs7qwCDyFotEUH9bRQN5nL3o1UUpbxmN8dkcdcmoP9BqwdoxRk",
  "key12": "66fN6yoSkscnN5hMmeudWiL236tgoNoDo7b7wLBcjGX1Cu623dfEVKkahMCm1hUyNkzkXmfcguqFoCPqXV8cZqqH",
  "key13": "4aF1XaPtF2RbZWuTcVtaXBDGHiVVABcdTS11KYGe3Zhi2LHk7rNpX7DKFfNvxyCCcgoRa9g1fRsMqYsjKXJHn9hM",
  "key14": "4aaKzYbncpTpA6ukwpou66gKALm7j644sTxhQzeLET3zwU3zqDm7rCkD7x28Z8Md7xvx1X3tsk6r286sQpjHTe28",
  "key15": "3CodiCdxC7xMApQV99LXB8ST6Ejempo2Z5VycLvLRZuMuCtTrAsPBYcW6VPfTvbHKE4dKuGmLh6Mfeo1L8pYPyx5",
  "key16": "2P9yvcRW6RhAETWrbPWv4u4CbcDXhwzi5DhtJLK4SsS1W9ixw4U7ma5CBQvwbvQtWLkVoK7y31xq1buLrUifdUE5",
  "key17": "5fUHrTQaPgzKgjm1Yy5UEymD6s1ZrooVCtJsJSUyz3Rp2ViVPLAtxHfoom8HsG24HcpSZyzwmBoBb3HnznrcwRc9",
  "key18": "4wQWjRSVzsS96fP5SRf69BsoDkX5pAAJTv3MdQ8ekRLne89X1saJq42TsMRvDrf31jeSiDt9ofiLDas9c9sdnUnv",
  "key19": "HgQURbSRj94PoNE9W2eEmMiLg6T6srnN4zHreHGDPfGwBVKQUfSJcRp7aWkRgxNN4uUDGG4LX9w8VG7b56ZaAYp",
  "key20": "4vxUuTDK28g3ecmMivCqt3FMwRTVjDgi6EtE4Ukjnic1oCyCeVjfJmgUY6RtpREnmKYDC2iGUArrCjgXvPMYUTuN",
  "key21": "5cLAMkq7eMgdoAG3sFDo1UCbkcvJvoadM7yN8JNg6Rvcxda5AREh1rNk5gJ2bV4e6VMckngEVFxXWEQZDwqBqXJG",
  "key22": "2dkiXRYCxKWnLKkj4Ares12QqBQ1VeM5tH37pScA4FUn2wEwizomo3CPpS1WgjqwKUhdPfgPHoGGatdLHYkKLwyw",
  "key23": "DZNokJYuKjJgHc5PexwhgmTp24dCetdnW8DBv5LDn4cn9HuMv3bw5J9fZ5qPc3M7sEWmNR8UhvEs4ULYK28gumF",
  "key24": "4r4jU4u3S3y8bazEWb6rLgYMm4e88nnMRbLEjzf8ALmYpGdqH9sYH3PVtVdNjSy38CZUE31KTjJiWFRNKPrpEYPm",
  "key25": "Py73agJ18AbkU5TmypXabn2xNVcEF3TDtkqR5MByibddTGQMnApi7X1XiHVRqaYgjkXrsSLgcwcFAswaH37w9mW",
  "key26": "2neNUoYmnYDYaXCitkoVLCSauPsyVVLgnMZFyvtaJH7UzCJ5Gqtbny4HZrQczog1ZMBkcxKwPPGWQxXmkerxkxLd",
  "key27": "3rCjpoB3w5HG4XGicQikJGgZMw5BGDCFnhm7o9MEaRmSPgg9P5vCW6XrAZzrK37jKGS758BK4QfFHEAhCMnJ5oUW",
  "key28": "3rMqiAARtZkvaVtMSe9T4BhLRrGAgskviZwTuWs3gRKXnNEjQyGS5s6xR5wyBDt5kYrSrFCSdiAUD5848ocvcWUf",
  "key29": "5HkCTvxveuUgQE9FJspNwyBzKmTGiJi1nkgo54VaSxXgLm8pQB2HWJeCbFmspWwLCtjLVzvLSgrP6hM8GGhhpRZ8",
  "key30": "PYoZL1kG8ynwgPLb8YhoWPAEicuZ8bBNXKEVNcBCUg49bqjZii7fY7RJVZ3TAL1aCXLuWbUbs161HgS1bSvjcws",
  "key31": "XT1aidup1tJaBEsLm3g4NuPogvjUdoEL9N1chEcKoPVGHQiUSJ6yLke9jzabrzPEivadq7K81SQGriCxyC4Dwd8",
  "key32": "5mTJQMM96N7w3HDRb1GAJT6aaLiQLnjvR99uMzp14kPJbNQahDpJDgLVa9mjvTco4wkTUe8DHESJ4JNmGx3wtdcL",
  "key33": "oGXh51ve4gN2J1uYzaANYLk214zCCUc42MDAT7qNFLFvw9V4a37mrrVDxzRBsriqC8rbZYEkFavZxXiuuv9meF3",
  "key34": "5DfGprY1RMUQKk9MBK9Hc3jjFnM76gFu4EKZHjSjGikkcGvyieq1fSCPfBo4iFcNRwqAGuCwrJSLsakUSe5e4Hom",
  "key35": "Nt9nmwviMWr2JQexaXee83YKMwMRXwzxBjD1BuqaE8JeVjM14Tgv3RuBEVFMJ6XqFFgKp2uJsxGFZ47ut7M8Mwn",
  "key36": "2Ya1QpLBVvspbq5dQNGn6GzBfSrtUuSo1dTBmF8RjP2W6moLZGBuGGMxgagBnXuXehXihbPB372AevMvYCr2AvAT",
  "key37": "3NVRmcQHZomjJcC5AKapcvh9dqtCxjkJueeAN41qFvaKwxpBWnJYS5WNso84j78Evqmk2dKfwCrbQgphtdCFZUEX",
  "key38": "3gB6xMKZpFCqZLD74gvpzyFM9U2Cae29RntAuxBUfbMXtDFYLJrhLXAHiytkgnXBF58xJ9DgKTVbRZ54H1WFP59F",
  "key39": "2YBda9ywMHSMX5Pcanac5ehffcdQ9kRF4FnJgfECvD9czdDDCsti7GcJ5TZpMk32wdqgzw19ghwJXm8ftekuGfSK",
  "key40": "443EZDraLAzRrrkac2f616Md8fD46aeDjA7XauZtsZ3qUSpVwkteJtkvi1AnTTwvsB6GcW2Pm2dft8SAwuGwQv8g",
  "key41": "3jz33gDd33EmHJVzJqjFj8ZrMpUXzbJ4Ap1PtAtPaDASrC39ZDovPBYqCyXzoXX38YPme4LCnmGXZWW2DngLn44A",
  "key42": "2Jnsfj1NdradNfL4qVRhyhUFnh9Rp3xaYpE33FiifPvp1NtByksEJSm1dEjLu6MxeubgUJaYk7HTf9s7JB5mXBNi",
  "key43": "5WQjcSDFSaRjJfwuNSaD7HsECE6UcJGuymMQTPyugknLdDngwFcKjLM1jKpeR5xAvDnGgn3tcnhdrNdEN8jEhs1e",
  "key44": "XZ2XEzAnn42LaZsQaE8SRLEvx3hZDdsyeUf2YozkWi2wBSTYEkR91bC9TbPpdv8391qEFfmmHLVkQ4nxYtVV3BP",
  "key45": "2T2TF9ifEYcqbdmRjMznrjbEtLonHY1bbV3jZe24v28cw5VUsp8EN39fV6j5pS16TjXPMEm9b2hCnuBeCYGPVVoR",
  "key46": "5X9GkbtxaycCfRUrGqRhdamVoC44pb1yNhic8rEAyq9mr4hrTovECgVZGVwp9mvcGMaXHGULjKsGSLPzSErVbHRZ",
  "key47": "5vUtZV2RnYcMj5Nin8RZYEr9pvHw5DvtHMHdsr62FVUiES6LCPsZALSUxN4AkLt1M1WYAUqrHR85D1pXPVVLHNtB"
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
