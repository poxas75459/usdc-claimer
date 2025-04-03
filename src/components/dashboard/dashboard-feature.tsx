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
    "5PpfYtcZS4M2U8gK85ynJahTf1FHbV27kh7SejWw3udsNjrq2UXEMr9vaaGGMUhR2maV4MHA7ummyheL2YYbe58h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ySCg9d5svfbjbHj9PRrBmaUzXJy4mu513YJxeQ8GLoNFPcLzu1FVf82XHm6nJ7pk1TsaRkGodQwPLn2qrAtUDeX",
  "key1": "xTeCw5x8kMLFkq9B2REHUCKLDz7QWcsHDjRhmf6N8JoBBqDDR2yfcp8zrxs3qM1dxsMpWj3RHf4mscqnASvUB6K",
  "key2": "2m2R5iYhFHfVftqy17q35ofQ2yGBBmbcsUNDCNAqMtvHZLVmjJyGLZTDuaAw4JpwS2j5wyAmN8mLrNUNEW391EmH",
  "key3": "4q39e1FPnNQ8iHawiyKXeuHxHYuGwxegyABEdJWzJHrT2dRnFJahh5FLR22PEQEVH9BcHvbane5idKKm66BSMeQZ",
  "key4": "wbcz3S2WzEyk1562rCA5XXBGVcZZBeYqKzeJJDpct8ATcUD4QWAajKDuMcEGL4RzH7RHDH6gW3dDzqMeJn2YR2x",
  "key5": "3Ba5BztPvR88njWC95oH2kgEDS4921wiSNQGSAnjCPNbebxESZ2AfRBErCTkFP3jJKgyHJJ8WMznWjPVqHKgKFpQ",
  "key6": "2iqHPSBVvTtGcNDey6LJju46rMipmvJmfAjLz8kfYA72B2r39SzxiPvxg3gdi6b1uBpqnXGNbLxGqVcFYJc74M9M",
  "key7": "5XQyVkLbsfEefTc6tyuUhq8LcbZ5tV1b3GXm8MYrY8y5o6R1hSoCa4Z4dH2V1By9RX8bVJDqyjkBH7XQHGweUKU8",
  "key8": "4c1im1enV2rhPDmzkFC6byVTCvqvVsJJL8R4adsSLZ4LgqzVVaa7N3mstwVryBG4JeXaFeR96kBDjDqPinJ5k8NB",
  "key9": "5b8yJRBWSWnCE6YtfQ3prjhx65g5Rx1fxXJkfTedb4Pw4NzYd8WNHr41eTtKcNtCy3p2L8nPzeqofuMDRHB5dGiU",
  "key10": "2wRJX7ZNQXx2jx7hfCsznJ1574NDnh3A2nCGQomdCbzfELc2pmBhJb7oHpvwaT85HgCyih1XVQDoF7EoXF3imoJB",
  "key11": "3xZ5B3ch9WT6MgH6EBFioHtwrc1gzTXmo3c5WtznTo38xYZpT6wqKZ1oexubpQGWxthhuE3khmR97PSKW1VWAtn6",
  "key12": "2G8Ykg5gQHKesTr9WQ3vXs1ExoniFBETGSnYtJLEJqZP12jSbAFexu2hQ6QGoYsKtC2EiuaGqwtdPLBAeaBtKXMb",
  "key13": "3Rp5H68rhQqftbH7fmugEyR5fPv5ySHHjHoWcs3vm1FGeFPVHdnNDq6Xopsj3fSpCTLLouBNtxHphSAhP3TXMnGu",
  "key14": "4FHvR8zSzsAtTzEt6JLdnYtXWP683s7mVP4U2CNuGBan43XCBSomZxNCcYw5HDK48ZEhcCJEyVC2BQK5tLEkXaW",
  "key15": "2fqm9WjD7s776Lrf7aSELzAEgPBEipJTRy9cCR8ArTZ1UbUPnwnKM8wHbaTzXE9G692HhqsQmh61tf46mgzKK58",
  "key16": "3GNW5Z6V5GGEDVHVYYMTbr3jEbhP7uAZwH8eineqsvJTi4dX98bfXHCBwX37HscBBVh1uo5CZv3D1fR4gVqn2JVS",
  "key17": "4J1wHQSPAfjy6ueFpMRSAcChfXQqnsZCCUkewxV4MARQq3ecyE39rD8SdGApEkBtF5VyhPystR8qsx9sD1juWH2S",
  "key18": "2vmcLyHzWn9MoXhyU1HgbJgWxMX2XDqHfR83d3b5se8EMTNJQ1jv9BNH1Y2HtkD485sdV4wDTSCz3ajYGW9gzyfR",
  "key19": "5vRHDmm5BufUPQt2hYF8PGuejAhpSCF5pBTGR8qq37QDpNME9cXBwZ6uk2sJsouoWnEQe47FyybnhAzD53dkjMdj",
  "key20": "x1ANUXQNG8gu77fBUXpsjep3jNtUos1kDWX9gNWpewP7QSQ6bNjfHthwDyUrWDWw3wP3Ekp7iA1d4CsYT8scWjN",
  "key21": "5hyPBgPpEpgpziqZZb387cGwXNx1rNoiHh33cYrtZyFN41Wsy3gwkEKQmgpUZesfPJUsLwBu5CZs9JAap7vevvXu",
  "key22": "YBCyMK8mEwBZGyJgxzXt2wCjyv7X723TuTGL31geezcZ5GDTzVNgaFsPEbe2hUyNhoCnqQCfNp9vutvNRUkgf4k",
  "key23": "ZwH5vnrMLo4RnGnNP23LyivXrdEgNYWsYkbuA4LG6GAv6NoPwcviUMecKPZooKywRADDTw7EKqZWtMMBsW3BfCa",
  "key24": "FV6J8HpSb3RzZF1BceBXAHjXJGfsCNYsqzvVrEYhWjKWRV2VxzgfJVpqD9jsS4fa3khtVtcGmapmrM1wFFg51h4",
  "key25": "4SQ4LrvLML8czQkmLSES2MyqoBQ5wPNxUD468b4zcYrTNVdHcC83uDVbn1pWW6JUuUmEXK9j9bwwowDiMua8qMPW",
  "key26": "57RbxKbxCLsn4vE4izU9uDCcEBhGmfdqaQ5HJrxuUfxBDuxyRzry9UkKnQASEMyMa41bHXanSSY7zkfAVveSKHdK",
  "key27": "4f4NHddGAqdaxUD42wSPvwBiqyDeePkVk59hYuuq5te3RCR3xBAHfsa4xVXT89iYyc1aepx4g3jfKJLNL1XPM3bV",
  "key28": "nP4RWVjRejP3zHWHPVY9DNkp4ytwAVaviu47rPwzCHGxP7gPoUSbdHj754YyEPXyLQFcTvYhAR9EBQvAUkbtfuS",
  "key29": "3EH3eeFPd7GQogf5VnJS8aHFebjkAy3KfMnEEu3U8fxmKTz1psb39PnvZXpKqifb1h7mDqCQF9TrjXuNvcZkzmWZ",
  "key30": "5fHWbeCwHsw2go7RgasLuPARgtonWpxKD483SCQ8Ra4zuDMUU632VcajYWvmCyn2djo7DmTb5g9CDHV9pDb311br",
  "key31": "kgh1WCdnXaxGQEzXqxLdiXvyRnjUwbf3QewDP3knGnXL6GzDoDm2AS1MEUHsxKGA4nmHvCPjAcNasrXRnpsQ2mx",
  "key32": "hPmN5y3PvnhR7iYg7hJmVNf4yGRbnfVqwpMQSUq7aumwzrUBfn8hMBMyBKLk9TVPSSenZKgFGYdaFB4zm4hcpBY",
  "key33": "5UMiyQCBNAdaQJbL1qMPv46bLErpSpSJpbYnX5dxyTrjS9JMf7Smw7hm3gpyrugR2SXp4Jt1AjWyTVL6sPt8JWzD",
  "key34": "655vvEccFUxrgwKGd8niJAsrnWgYn8ZNhRTgpazi1fBgf5w6Mji2w7Dg9xKRKELKGsbnhYvAkXcfG36ZARBUHWr2",
  "key35": "24eEAQLv9qHBWxj39noPZUtFUqMkW1fsBMvqPquNELU14SXyP8hQs5dgVCubvtUkLQpCunmisv75nMu9RNpUkkMb",
  "key36": "4Gf3PooVY48ZfsK6KBz14A2HMwqoX2f8mRLUTHWzJx3GoqREPNkRJ6i97MwDPmPXGMeyC88oP3JgqutRiAAcicNH",
  "key37": "2NNVsonBDxD1aaPbfw85RienUiHy43zRdC5haDFVx3PZCTyscRpecBKMAGTmGGLeY9MpKYkf8czA1aj8KPsp7hyW",
  "key38": "55169vmcEBPzCS7Lum6Zi6dWeeaZaV2vhh1znuCa4kUYZ5sz5aGe6kR1nShKEiT5542zFNuZi1Tc6CAapkT99tFi",
  "key39": "4H8bQqkeBPTQBmzKVHgDunpKE9g6TbX7HVdXaMWhJbnTFAua71gxqE5LNq14G5Fc57Zw1jc71zE3dBeUe3AihYVa",
  "key40": "JQgQAnggd1B18cv4Hdd2pHR6sbZyma56og5StZVSmSbdB59KPThjfXQhXib6Mfsp4wFQjBvhNH6Eq5H8GzYoBSe",
  "key41": "26n2LMXyGzTrjLXrRiAJwXowAGWr5Y22uj4zWn3JZdD2vg34z9vLp1EwYqtqYENnZqp2BcHgHPZUfnFE9G51NivV",
  "key42": "QX7p1gscRe9dytnLqTHZnHZYHDJn3G1XoVUfLU1WPeDxh4EyAjKNQqjF2usZYeTATn3DaWmSR1TYXK3YWKXHmYu",
  "key43": "5XR7Hj9t8psiCmEDQ8c17szDqXjYKZDr1DSYtVyv4vabFFxcipGfUUiQS2nfGadBr5bvubgsC6B4D4bEaYbugJk6",
  "key44": "3tTrQYmkXbjCWCCJfg7MLFaYcpoekMPTJAU2prDqb8eyyT6c9gqn1WDGourGMcbeqXvXJwfuJtrppB8wypsQbZ4M",
  "key45": "4bkuqir8SPMpfAxk54N3NbnDL8QYCHzEinfnt5R6FgimimF1gZWoZK5zTFYXGQqZhBvfSaHCstLrx2eyKdWRz4Cd",
  "key46": "5p2aPSHuVcB38GVjKzxKHpFvrYC157En65DEQXhUK2WEJxb5T8fvPMmsAByWBjYFFoz6w3518d9Kw8aj8a3nX9x7",
  "key47": "22X4RoLSqGnpVndj9qi6cJZzUygWUyFUMAW5GBFsBE4CBe84MgEThT7dskcrWVUZYWU7tx52huzTJ3sU4J3KLVBB",
  "key48": "4gAC8HFGCdngoswMS19rc7m4n2GS93Yy3r7qaV4Yf3ZBdXw7VmHVLxXuLLdVNNcyUn4HDgkSUWjLeXjdcTWoywiF"
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
