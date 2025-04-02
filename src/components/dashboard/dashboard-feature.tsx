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
    "2TBK5Wwne3g8rkKadn5HsQJ5ztih4fCRX9swcJwxkJqD5JAHodmKnMxU9HomqqbGYuo5TuoiD6o7dw4RXvSp7Ewd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wh3XWt8xbKgds32UPqhCRHwBkroCTZAhzGaSwtenwrjHTmL5MYo2u8ThDZvcjwgxWMULX7pVxH1HkLDqdUr73M6",
  "key1": "35kakGRAHpBB1hSEjh8qkzBANBnvhKcFTkBkD6UhJKEoTUBxG3oxY5sZ85wqEnQM6UCRqRoZRcEjuz45ZSvMva9E",
  "key2": "2G7RP6cP7WVohyNCa38eNYp1M8iwTkJLACJpkEnwpV97UZUVWhuMyzNJvkuuxWTux7LJQxTUNRknjT5WHU7Ms5wy",
  "key3": "4t7LudrKJNVeBdeTSJ1xCm3744vXzGzHjXcBV8yYZo3bMSohdEfq7jWWp6668pvWdCbT44dZ6GzuPDT3LCEb9qVL",
  "key4": "26YiD7wFMCx9FYzhgM7Quk69XPUJrUANc8NSvFzGq7SSFzVziSqyxMmtN2n2StseMRdV4rhktU9LmkwVAoNdnHmW",
  "key5": "3zozEU3SMsy6usp9C2Ky1sbj9b6KxctwYWk6RyQbco3YD6erUUKGpHDkyMoJatxXXHPtB4UX5efyzHLzxxvnL28h",
  "key6": "2ADyqmha35mG7k711mK7VkWBEDRf3yzqyKHLUMUg6hUHMgNzxvaoc1LYgVnr6aes1P6VSg4XdnDf5gjRDfzfYvRh",
  "key7": "evdSzrRMvSaakEQmYT5sRfpM9iybuxMD3v95nA3wd4m7kTK9q9s7gPR9tLMGM4mYVhvHYb1ptFEbhL2Lc4H79dt",
  "key8": "2Fhs7edmjxjfvcj1LC3Z8cEVSJHLQCNswCwg2NScqPXee4j12nhA8kVGzyM3iEBbCafPrtWkfFjrtg3uY9DECyN4",
  "key9": "21PwNa86mkVMq6P4SH7g4Hvgtw3yfNV9sHocqCmFwakE2b5LVA5hjg7Ekg8TCumFsP6sHfUF1tTHKWeGaR2MNAaH",
  "key10": "2Ba3SUcuwvnWBnFETKxvsTHiuHGCnBHnVgU1s2hUsaPC9FBkT3H6Uk957vi1x192H43yNZ7Ryh6mvw6LSyMdqnVU",
  "key11": "2BR5me2rmCQ7zLY3M64vPmG5FqBEkVacCcGLD5eZJbSW3GrsF1n2you3Ht9xWhcocNF8Xu24SZD95AMXT8kVMGij",
  "key12": "kM3aFwCXPUervtMj1ZL3HupnyefB2jXaUhg5US56p8UN4MwaHMdKVyhqPe5BNLxN9kQBMq9SETDqPNEo2xxKBsg",
  "key13": "4hkyWFgQ6yuBog7fdtSXGpY8iE4qRNEWr2cdoWYauoHCpjoCPx1fLLfQRTKum1sppBdpAjnVsCyBDy9r1adf7bvS",
  "key14": "yUqzFQ683dgHcpR7oXe5Gu7YWBiZ3fGUggNFWxxA6wQDWSgHKUx5TzZoGR9arqpynucMbrgyobW4zUsWajFrq4D",
  "key15": "4uxZnFbm2Ti8XAZKx5YpMjQ69SnXiadUqLBvSq3AweDf9koNoX4vgAhFHdRLQCbMDFaP8gzasDWjnf3yPxmGFp7r",
  "key16": "3VBbcdA3GY4KyrridKjqvxzWsr7rV1GJzcNtEy424wmVYUU5oLEHtiALPNTK7rre6psnzuVk5yrim9eL2q2ZNgA8",
  "key17": "5umPew7ASqLegMbC2ze28dVSSRzhYW6Jct43J54ctGfooc34jTe7Zmt1nmimMudU2VRgqeYQV2NavjLSRySrxMvK",
  "key18": "4m6AUBDALNU5dan21VZhuLuotft5NvBGbxiP88g9vntD4f9ynxszrGGhR79GjvWvtiTho3uh3NV3HGgnMs53LnVU",
  "key19": "4VkWBbiXNfUDxDRRicEHP4U4CZtF2P9ii5Qo6vreXvWVYE73dn1fecqFzt9YcWCkjrncqD4gdvqZNnk8MXMQjhT4",
  "key20": "65V6UHeUwYXhA9dZunHLaxEMADHiYW6vNJNNeSWwFZwu5c4JfJS8pzEqhCPNKz5TuY1WyALA3Dz41biZ4XBU9qxe",
  "key21": "4SUhWy6RNCrHfT5M2W4yDQGTwqCbCD2QHpD5JuSbJ68aPWtxw9fAkVzBCzqgeEA5ws2BK4wwWWqw3xFCuvGsjJzN",
  "key22": "4CPiys2yecJsevfkTWw1VRubXyPRTyLZ7SwLPRzKj4Tpad2iwi5jjbboWSN2q3eYbR5b75tGofJoTKEWR9XjhSNe",
  "key23": "3g2RdWCtxACtjbx52PBAGv9M29Bz8kVoxpTuPHuXpALLSDHZeVBgWVqPYVyo4epeMCesXJmnMgTZmVCoG6aAjJZN",
  "key24": "5CZQJikV1xCXonyLneoca6DPvR9jGJ467d9hKr7JP8yCTkeFGVeiMe1ouDCs7sCzgNkk8VrLBaRaPVGEHc6W8DFX",
  "key25": "5ENZqwGGP8TWVp7eA35wHh5G4Xsg2EvkorngREk7dCk89HVhLcXNtzKshAGmJduCzJrmzEHxJhbpHxYX3hCtEsaC",
  "key26": "3567LLr4vs35vcDwjVRVjnCs3RnQHh9MjW6XabbDjQXYC9PfDL44JEbyfKeTaiFoTdWLo7XxhbXstxVz2JS7Z8Nm",
  "key27": "29k8tVAJqv6Qx14N4TTmwsMEkfATvFJP3dzdbDvwvEfh55KchCnD5xvfMAU6Ck4aDPLSVW96mMk8ij3oFzar6E2h",
  "key28": "h8TfQfKZLZjYwz8PFvGEDwMsjQqmBWJe9bADbZSj8ZnqdCt1RZDxUmNfq2v43Zo5Egd5yNoersW4ecxaDJeT8jD",
  "key29": "4rQ3xQUWVJ1GZTRJeGkpFscJejmfRMgXQ32JfzxqkJGnGeREDCDZJLVAkCDjLnHVg7kdXcALphCT9gf9Mk639Hcg",
  "key30": "5q1QmnyJqb7akP1FjtEBi3qXTgWJ2R44gpCyEsy7ehVj851D9C8PQ3QF6q2TThznEebfBEwKTfkky6N2MgmhG4n4",
  "key31": "4rfeJAAmPiRE5yLCUGiSKcKAxnaqkDPzZPh3LGuC732PvhWkxQqibNLo6GZFoSFxw2nXQHkcMNRcaJ74Aqt1dJR4",
  "key32": "4mgvmj9uHV1zudvA6vYP8z4oGuQq6YvFzG1RxWWJqoFEzUdHYRjYfRT9NfMasvFB1k7YbBLT5118r2q2DdNj7rUN",
  "key33": "4obhRtWtaPZrwvkUHpu9SX8bcfFb2XmgR6UKopX8vBkixwXG6dip97Gmw2xtCBSaVkKngzssQ5NU1kM9eeF3LyqN",
  "key34": "o39EPizJaHBpndN6HysrS74vs1wJLCdToA75xdVzxNfdt99VqL3VfaToGgiAp66Ay2YSud9kjhVQfjWSBcFSMUp",
  "key35": "5AtFhaSDEVtq5V2b9KRR7e5GW7yefEcLZVjTiARMgdDJHbC3vHNQHrz5D5XBG4DTTdYM9AwSihqkwqiyPxTnHuoa",
  "key36": "3zfMTCMFTkv2LJXDKLrdrfU9Z3AbTSCqPuaAGD6TEKRaNsUTSRF1oKhfWEBKMLpEyhsZB2e9ovdJiQWkSjZjnksc",
  "key37": "4p6yjmbPc66j3QSChRy1HXq5Nek3Tw8z9fuUAsxQhyr2Leh4G9KWssHfeC3pyymwfY4hHoYijHCxcbg42uHr85Li",
  "key38": "GriPgFMBgXQM6VvhkXbm8GfHNqVmk1X6FAs9ECYX1aSMkLh6DdqmMv9fcxGyUfYUFbV7DV4oyKvcZkPhZ1KfBcQ",
  "key39": "3LseMmSn9EYNYmPGnTxbQ5jspLcYu4ygrumcETPLsAZdjavDRhW1hM1VUiQiUD8iqpCaBnTfszdYzDnTtJJzhPZH",
  "key40": "5EbhydcaDFNcM1T5QWqoX9i5ZA4M9fxTgSbe1gQQVUqjifs5iS2o4Y23Q4FDie4CRw2TVeJnkcikTnPUEkzJ2wSK",
  "key41": "5kXS67BiZmwJb4dYuUCKKctv2qnbhQtNes7EvegnmSZDPGFGBdbsZKaRSWuKyDGxVZ8FwEfFKB32avG3ptferBAH"
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
