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
    "2TvQ4U34W9vYQcpFWmqAtGw9ioFWnHDAUf4QYqaQejRDmJpd1qW2qQ8hju7M3o2DPjrLLKivChzwUd8JK9mgt7zP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WaUSQ4xKEpSi3gLs66dkcbL1nAvxTv1BXWii9QyLY6yJTq3NWc9WXJRQe659EtjGzpWHpTUnr3gdyJ9ADJSwqdQ",
  "key1": "22Lekf5trKXvPVjafELMu1VZpiQg4gx1KqfGmh5kC3TJfZ7Svqfg9jrFZPXMLLHcrmfudwhtio8TsGJMaMkA6idU",
  "key2": "5mhzAM3QgaMGimNWuobwNFw2HmfwED4bY6PWNgWU9Wa47oNhtoLktRCriUnKYbPRPvqNLMQFe5svjKeuaqGvDJip",
  "key3": "2btPVdKQd2u511kk3DKCQFU19ReUa4SF86hFUPMpjiyjeJpu6qscKoYK4cQRSin3sZLfS4jgapnogHFBZUaM6VRF",
  "key4": "4SugarEaJjmTWmsX5MYTqkBHTmyCFevnJ6BkaBCydqZ2q7kfPeH93eijq8tqLaiZp4suHfhuWrdsruZzqbY1aSTi",
  "key5": "5bLFK4KD6FQYjRKh6SzQDUgiVfRiQCjHTihVZgDAPmv4aWy8uub4cYqAPKARFd5pT7wYtpKAmboJrLcFoCarpMND",
  "key6": "2SKNDzHqYthtth17AqkHC5q55FeNBABsCrXxFDuKWFJpEFtLWMYmHGusS6nqY3sbk1pDM1uLREE1m6KHj2Z45Y2S",
  "key7": "5THwbhmAsn2XAYZvoP6gMp9uJYtTCGB2J9dBhREY453c5LFdin6v2mhHHzuiFjzubJhoZLfkH8p2qzRKA7dF7xCz",
  "key8": "4mzAvDVBB3y5XTLYcZT7bgRTX8KZjxsetRDBUJTDSRRj5bFc3Du6LKxu2mSpaG7izbXCnMAWSPMBT1E8mDf2eh6h",
  "key9": "2tNMieHqqJQf9QkJn8qs1QB8WpzULYfevip76HRrMifwRejnvjJRh1iJfBty4LHirMa9e6q21fjRfBSUL8dMJFTJ",
  "key10": "5WhD1UAsi8DBTzK2M1vGrxMsPFdPYNKT7ka3eHevNWJF2RvWvSxSZjdvJrtLmLTbj4xe5N5x2c3kFQa5zKdvhksh",
  "key11": "euJadN2UD2UET5XppECi1to9rXvaLj8ovHxRxqjrCGaXnxyY3msotHWAgWSVJvxEWDRTwTbMwEu5CMx36j7sUkG",
  "key12": "5pkcmxrJFAxzSuh8stnoDmUvwY7phjnufMKhUbCkmcKbvbZo52t7cL4kFHYeAhibRNcqVYNjph7GGYymgKUyzsw8",
  "key13": "5KGwdccokZPKvRiVfRwWjELKqsURzCxdf3yuQ781oGtR4LrnZi7GkhzFbMze9XxJxT7LuJaQkR5HoDsmfVNdC9ac",
  "key14": "igCbPUuASBTStMdfwzA781VFasMdwZoCjimvmUeJm5fLPaz1iVv6aRtq1fcGckhwQNb58ACPkEDdrQD6Q4PRv4z",
  "key15": "3ciX4yxAzt59ECiZVvwN7RZ4BEzFM53ykNCaU1u1BbhuVP7kUyvaZyVzdqDobmYVfFhTpNinVpf7eC9vHgstXcMv",
  "key16": "2uizYXYRzdswdm2nwhGbE3F9puZ73WYTcYaXMYT6P1JMHYGS8XMivikK7BPkCoHbiFL3RxDyP1GeJ8XSEiyPPT2E",
  "key17": "ENGLxMuSwHJ86evRew5KMeieEdCi7ArbvZ6qfY4bfBZqSKta7f61DZggvhKzteix1fB5YeueApgTfv1yAgk6PZ1",
  "key18": "3b1PyfvfKwU7WWfmsvw437kgbvp4vFbeV9GYzm1nw2ZKeuAgYXUk26JwVcUdgGMFmzyeVDy9j7NW2eM3k8PKiYQZ",
  "key19": "3T1A1PuqaFZ8b8A73sA3S3GLcT3AaWp9cCWSoRECL3SZ6NuKtaczTdpg35JSw1rxGZYKfMi3rdWFhBJACoDtdfar",
  "key20": "yrfpDcbPjuTxpJXRf2v9QttQeLoKRgBa1gHUhDi2pTXujr644nFYcCc7KsF2X2agwNWsTJTptJMUufg22p6CE9C",
  "key21": "3LXzZRpz5uSk6QFPDp1gr7y2LKkajetU5NnLm3XkMcxnzoL7iT2533RcJidfkzNqJnJ31FsAp2a9GgwhbsCxgdXy",
  "key22": "M1AN72cu7JxtSEt2P1C7dPuvocv6WT5aU1VgFnPRfvueAjSqKMb51PL8eNScxZS4WJvZizqBWVpbuMgnaWnjLEL",
  "key23": "4RbEdNxKkhtXUeEQSUuRxq1XA5HCWNJWtKq4LRdQ8HUQVMg2p1EGFoL8y1T17VkFVjkwhEnr591JrzygTQuebFob",
  "key24": "2DmbusoDGpb3FGWt1EHWMHNez2tT54R4wLDr4owzbjDh8BfXeg7PkFz6WS94HPFwUHfRtDKBwQPA6eUbKHTmtqsg",
  "key25": "2Pw8LtG54Q9vV5hgAaRL41p94pwvHTQNf17ogb7RDgqtqDAFRTaWDaxfjQ9iekLJdfaLXm66cc9UC4frA7h25neW",
  "key26": "48YqjrBpXt1TbTfp2Dx7iJgwzpNMPjuGYjfehrkdKBZsBg44RGYCLa6df4w4aLGvBzDzGayqMti1uBDFYHEJ32ph",
  "key27": "3qEzde4agET7bbF3Acz2ExDoGoaZ7HQNdGwJNpRvU3qum4MiC7aB5FkQ5ThkErFDQng48iCKJYcmKYwohB5m9BVX",
  "key28": "5q9WHLpyBTvYNWDzVagCYvdaojpfYfPjrCdary4HExQ41M8cskRRFnHmZCnL9iu6BnxcWbYLSUoNfrLeUETkeAu1",
  "key29": "4oRvXNBL3AxByfbyXGoYkgChHaQWm1LUBMZYxE2KiD5jBbckRFeDesAQtWwDdveBLgWf6w2oZCy9233WpXhGA17N",
  "key30": "5XFPucc14S2erHih3czUrhD8SQTgEb6zvkwnZn9kYzrAzbSqWhr3jNF2R9iYsWG71FA5oVaXfbfGT624y9oUn8ZR",
  "key31": "37GEcEvfYhvcWH2FHMxS2QQEn6bRRgKHkZC9vKam25GWL2suCNrotrZQeH6wpbGCNErow9BmUoZsK3NTU8SxzFoT",
  "key32": "39d9mcQfoHG2ntnAPtDn6wkN2wGsWEzkr4gYPs4xUyxndUSuCfiNxtWPo3jWR2QkVzHKrpN45t4xyLAYqvbDtThq",
  "key33": "3mZZh79sEu1KsXEjy8jEQ5qkvoghS3jrvZBL3hCvB5kPJkquJgpkKApE9TBBeKvrevvcpGwHnd4etTpKK3mef54H",
  "key34": "2BevdYtfovgPbpA1GWHUFYGsZcginYFSgjK3JTQehcy13VjS8eBrejNf1ceoEvH3KijM4vnk1qu3Mhakkmq72pwN"
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
