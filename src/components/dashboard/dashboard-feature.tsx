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
    "5FWV7awZiUGBNe67kBtpVjSkLWH6oCPNLwNXKzk3vMca28sR8vbmunno3xdewKmoXsak3dQbiNiqPCrzi6jqVE3C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E3zhdRqimzUq5zirMJBKSHXDKsKDCxEFVGhA24yER3qDVo3bEiyJFRRre4Z8gYcJjxMX5FwZ6QhbwPwTFmTEJ1w",
  "key1": "3v36z6RD1VqnLoY64t5G9U7tubyVNP5xtpUdarEVw7T5kyR3s9aomFxKk347BLjGF5qAVE1d8mV6p5uUxmZ5W7An",
  "key2": "2fUHM69PXLHVA8DBv2CVbzbnVsmGkGrrkmvt31zkitK3f5QGaE8EcMHdueAt33Ex93onkQRLDn9q2fSzyt8xdgpp",
  "key3": "2JgyPCvcQ69HCCdSXyRmn7GTGpcCqQLz9dwAu1En9xuYnN2MizNAbcjGj8fwtvEDytnXfEkDQW21vogYm77boCXU",
  "key4": "5aHJTdEusQLF3P1rf3mwQ4wn6PyRNsKZ4Zd9kkDgB68tsFWVHNoXvTsTAECWjDB63xEzX2FMZ3dQJUXizJR2gLqR",
  "key5": "2AgpHqqottRbK35SQ4A14sxwYgdUL5hEmQK7Rwbm2z1k8c7gp4TZP5ToBGSQd3J6WwTzpB6tLL3DV2XdQZ8LmZDa",
  "key6": "2zzpvwMhNT7w2F8gbWM2uKPQnea7B74vpVj4iCrnfkHbBZYSVuJwxQGVDvXbPCmfx9QbsSSNf4su2vw6Dmtb9dm9",
  "key7": "5gbpfNaXabUWFwZEYfWrQpkGSAGaxPxgMPZ4XpParE9RBAFiYPSwyWiV56VTAHoYt8TdEUWqE3PaFM3qBvqiC6w3",
  "key8": "2MFt7UCcFom7FztAvec7qGcsHymVNP4mjxAFFjcbFV7KkjydJMEaanuaFxVVvNzfMCXxukVkLUVrs5bvfC3QApYe",
  "key9": "u938jkiy5ZdFuUbDJjahejA5m4Js5AhQLVGUGHyDrVGTTbF3futtAewrBb6xhA6V7M8T4C6cUQ13XqX3mi7TxXJ",
  "key10": "KpuudA5t1P8XejUBmTjudZHBk1XGB9HyqF1EFW2Nq4KfS9LGy2Ftgma7n64fD1AXnTMH3kwHGdfkBo1RHbBJRJT",
  "key11": "6i4vRu6oo9PsNvzN6MPuxaQ3AX7oUYTFbKkGHzC6pcyyZCubKKL4feVcCveN8WM22a5ocDniHwJJaMHAKpAxfUG",
  "key12": "4PLEiX3YtazfJDYziZWGzaDYLCWiMiPx2AMG1TUjxv9bm54vFyEnHucQQhZ6a22JddAkAbjAYcLtM3edBrYnJdkZ",
  "key13": "5BwND9Wy5UYeFcJjCa5ddP8HynSsJjfeAHKL1LQcmbxqXhyFVhP86XCRSqvyGNFqEjn52QTCBi11v848EoYYvvAU",
  "key14": "3K7Mn4j2oKKrnuzTmaguTA7c4awormv4tArDmEGskGVsfo9ENST3s13sVBLSLDiihZFKwKgEVNovh2mtQS9W1bwG",
  "key15": "3JMqJ6UQjQAA65DoYZ62XcDQFeQUQbGTojqMUoS7bg3tRiq76BFuPQKZPZVUjtHM6uvt7tQD8f2Poz7eQm9sMm8i",
  "key16": "32vdZXzjgaDLCsZLrUos5s1BkkTPuDn82yVyXaNmrRTzU9ujcD9MSPLfsUt4Kc79UErjfMFpmbJwu7UGMqrS7cAJ",
  "key17": "FbDfHUmg4fkvypmpR1TaZAGVLqu8qPWGqWPevWbbUq2kABzqiuukTHgPNHv5GSfWr3bVjNkxXvKhTpjeQFBatpQ",
  "key18": "5GNPxEbtYUSzF4aEkjxS69xwbRBWFKsknratuZeiKofPQ5NMQdzSY41Fq8R3SULfpf9pySjXtGfwuncFXb6Gum1w",
  "key19": "4ksGUCkzRizQkhiarfyZxkhWtQYPNfoEjYcbwUfsa66ZSYkjD8Toepp683PqJX43XNrdT7734CM7M8U1sSFtUcar",
  "key20": "GwXYAj6oF7nXgvoVQ4kGszCeH7dGNFxC5DRnJBamo6LtjTSN1Cgyj9NSrF4Wz6i452b1HG7JFz5er7w3b4e22zz",
  "key21": "4mDDQRPry1a6WYFEBuTWBWbWzUdrNti64CHy4EM88KkCa2VNKGqjqfVzrt7tNSGCpVRwp4ecc7hTh2M3tFJwMyKB",
  "key22": "2HutMMoS9JH7nSKTvnpZs1iFEeLqnfxSty5qnGSnTL48CgJqiMEysBYqTw9tphum1dBW9gr54eKi57nf2Hk2Qe3N",
  "key23": "3FCf94VcqnL1THguvMS2V4M2yvNfVtikncpKBY1JaxXooMUuMj5vDTjpqujCcGxJ77SadTofTibT2FyQzRtSebWo",
  "key24": "4vmFKKidY3vAsnudnDLXU91RBfpsHNojEfqeV5y8awvb26MgbeUv9nsbEU7xwwNgSGMpzb5LNqYgsX7sr5bVTTAH",
  "key25": "iuXFTysbC79GGAz4dc5H2ShbDuVEg4YsBKtXkckKVF8xUgZyMs32A2gYw9Aornbz7dWNKgqPgDTFxqG358FuEpQ",
  "key26": "Vn55aoW7vPdXQJWHdXMi8u1PPFPMMnwT9825xbJ7eSeNwSaJn9DZX86yLo3oF6Qd1HpA2TCv3pStZ3UTcVzWSa3",
  "key27": "51PjUhHDxezEwCJyStH2zkY6EHuwqcPe9Y11F4mbMQpdNwLN3bhgrBjaJrRkbdSQz2emqyE9QZt91D95hee6Hvgq",
  "key28": "phAM9UUbZobN9afjjWEjq7cA3Nf8bZDnmFZhafuNN6nkX8iGADZT84qpimpy1qiLwNXYqV1gzWmAESnmGxV3kwB",
  "key29": "4jYr9ZH28hgfVjK4x2BMbBXs869fcc3xU9CiXMwSAwBjXe9LAvME9WPNPz23xpxxBkVCY5geKZMGDmLWuBti7PLF",
  "key30": "31K4RJwuRe9cqvF3EppUe7pWYBrBpcf9Xb2ok5nzHiq9LDjrzrV9UJoxPzLzu3rT1nofKztHHahPpou1Xks55khJ",
  "key31": "3geZmc9PDBFQVN62HF3gPnm1xZXGm8XRt7fb7LG4eDdCb6CPRfnB4RUb2ykQrHydg8ZszutHTQ4ArRoUc8beoTGF",
  "key32": "22YSYUamLT3fF1vZ1zibSqYBCyJWRpdeCcsCfh7p2vQK7sNugB9mjNvnQrSZRiwZzYxqGbqsHgX8UD5BUW5Pq9Uw",
  "key33": "3u8EppzGFvcSDPygDHmU5znzQFhLRnjVbYdPYgnT4kTofHvnpn5RmsGqcFozXKjMjws6ZqCeKaoKTpN2otwMjcni",
  "key34": "4UUxq4ox7ADihLvQRZVQMQJoxSiFeJF7nKw3d9KuTbXLmRdhaZYcyvvpoewSUsY3nQph28RE939SfGmsMKb6i9dG",
  "key35": "56w4ed6fx3L59yZVFUopAQ1f7GUFDJA1NC6BBMp1vKbnSd3RKbDycsCh3r7qo4cDfWJkQ8DKAtCH5gwQSYztbKiW",
  "key36": "2VVG7nL3nZ94J9iuuRvmu8LtoJugwEDNNAcmzTZv5SzrKVT7DqDDSiSXK3SFSbVdedo8V2pn918Cnm5z8isxTZap",
  "key37": "474QTwwkVHpjKXqDRZ3X1RYyyzYWu4mguhaL221BDjUo3GbY4uGoEdCnN9SK6QpuV88dD8Nvx2Bs6NHv4dYXBFs2",
  "key38": "2szPn85XfDk9DAmzjRVbhYhxG63wFFFFpVeRHZfJRhGq4Yvw4XwvRabzvTUTYyVcNA9QHSTtQMbvHBQ5VUxvVCMy",
  "key39": "tWgpVAkoyoFooi1eu3ZaLGxVVUYHUfrcTDH2J6ZGzrjS2Dff8y9TX486iNs4m9frzigUvf8tc7y3p9UqTcVghow",
  "key40": "2ZUMiU8r9m8AdYgWKVe7Sr8D8b3VM5SDi3CMpMXbCQg3YktabkPfDpLiSCmptbCEh3movcWJr4ESLcGGw6mE9ueB",
  "key41": "2umNZtNYndYxE1GMCPXNGK5SFdJ4DgeQiuhwycDKGMWRZihVFz5ADZuXKS8sysRthjb3BMBoaAuDJeAoAa6WKnMm",
  "key42": "3Q3eXXg1qnZGY2CJf28S8AMJivf8UwoQbKYDAStKDmicDr4BzdbUayKeg2iXoYeocC3t2bggEG4xJapKS1jqrEbf",
  "key43": "2EZxbK53bCQj3fRo93MxeDS152HmYaXoA3UNw8Qn3tgEdjxjznaRcdJzNzMY9FmQntxXX5jjcvVspGqHiM5Mftdr",
  "key44": "M1CzFbmrxfb4efNWsiSbeJa4H4YcCv33BJDz5C5rCjmYEtBJf3iVuAuaGiuo85jmT24BGYrP5RNQfQq16U2hvrT",
  "key45": "4ywm1CjhFV17qs1mVQykhLE4rqjHQfZcSUMjroX8pucJ2VcpbUU8ZSBvW5NevcNdsnJL9SXWuRmfPwBZUaVn3Mqi"
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
