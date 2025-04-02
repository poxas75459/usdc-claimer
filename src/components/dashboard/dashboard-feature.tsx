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
    "3sGzrNfANfAgFZqqrR25536aRnT4RGc1fzKwscyxjrmTUcAsGK5KAGnCw4LYKj2YvjdrHxvVpWKXizRT6ycUkvyj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44qa7pm1xQSa7zDr6oY4eZveXj8qY3TyqPRmPqikA5jrz52Ce2Rtdggwdqxuog3rF2o7VtsZJWmEt8k1icqYFtmu",
  "key1": "4qkCPAkQRXgZqrMjukxvZsB8fMUjDbzxSJdmQ6ykN8xrNAnGVUnkiF2n3zohvJU9Eb6LY1aR4mBCB9GpdHx8Xea3",
  "key2": "66NyUNcrB67xDpJhnH5NT6nDogo2nyEjJdpzt1BpPmb5CgzLrLUBptxt6SzFXadTccubjPBZ26udpnfuayNLbd51",
  "key3": "3p2xHHi29ee1GhNGGp9cK6188L4D64kpR2wvnLFCyBmQQNigR9XEuN7jczWhL444YDRCjDAwYBqmAou2EtgxYBug",
  "key4": "61nTPnKT4mWiaUpgBvh6B3yjr2LAYUNBWX8NozjE69ZC3nbk5Cj5Htmg4Lc9cfT5jAy6UayaXWEH9HAz9TLhcFnH",
  "key5": "2Rb1VSWgWkdsswpRDNUiVgh8pvfRY8Da3fbYnnmYhFbFr1PhNSKFcgf2Q5numHrar5aEhSTbWNvcZuRGbKu2EGCd",
  "key6": "45vx7cNWz2z9VW7raPBHK1iasFQJyVWwSareEp7fpWSiXdoNewrPLM8RSGW18S3cg1JsdbVtuo9ieqRJ3H2nwM7m",
  "key7": "5JhNqYM7AU8WebmoC55BuWAuRky1dk2sTmwwKfaoUmwzCNPWHwRtCCcQ2oDWzxjsxNBnVmGv7NW8TpBXTb14o8iZ",
  "key8": "3tLi92KbsR3hVWwbETR9Gi3rSGgwKKcRktcv1cAQd95MUFgGUjZTnQQTjP3LAiSHatvBqPFgHw3tMxi9d1qz5foZ",
  "key9": "28PGQYv5jLtfUmDYK91daaVaLApWYwW7kxR2PAMBpF6ZQX3ub4ydyj2zwAxECEvkD22iQf7saBR7iZQvkFNkCdh8",
  "key10": "4Cje6bnz2F9He8QPiSDkHbg4QVz64Cj7A8nFGTV8M3GN3xYucnQqRJmE9ew1KzyZAxKNYRpj7WcZbvvZ5x3K8UUD",
  "key11": "53vfkfnahur5SWgfLkVp5JK3keR4YS4Cc34nrxPCJRuHP8xLLJ1526MEQ18wJhuufzxks2hAizYtwip3riLKnN38",
  "key12": "4k9LC6tNNKzWe95Nyj48mh7eZk8zQakGZhtEPyeghV9B3USaf9DHvdfztpV3eVieZQ4JztkxrmFzcQWLLQ3Xvykn",
  "key13": "ZLnWRLtp5zw1J9N3WW3JUnR8P35jJSBfTJNyd9Pd3TbKE7NZ24pqmJCKXvCismdaKkX1dELrbC1mMmyYzxhdrMD",
  "key14": "4JJA2jhP2X6EW4w94AtRKJkTTJF85bWDZMBz6VzQQh2PGkHLM9TEX9iiANPnbecJNBMadhQp7QcrCmcX5WjuEu3i",
  "key15": "4fopF2eJQbpNi8NfKn6rCk1TUi1Rqbt8ycgbCgX9w9bjcU9AyxNs8okhZCHGZBm6944yVkGkdtSJ9YWDfULFCF6z",
  "key16": "5bHN4Qw6WmTD8hMS1XsN4GPuZ4rBw8CopFCncuJe7umDqXpCPFKugLf1XipkcHefjHeGDXfZDvmtMuKB197YkztU",
  "key17": "2Np7q49aCckZbdA9eR4pV81FJmpAZikr73opBojuyqxYHKZiaG3aWhWZbUoqJpjSEfeLxBbZkgqxPVZp3x9WdAuY",
  "key18": "nf1WV3yhD5o82V2VyYuVFnsEPie8tS4hXFkEKNwDq8BX47vj8qoQT4mSxeHd7MhqKDd1khvTtj5jSVJKbHDhiXZ",
  "key19": "3nTduqetfEXd2dty925z1cSyH6nAJfoEByVMAfKcoxGkBEVJa2qFojUaJvWq8FPQXjjs4zuHvjwey4i5HAkB5fdC",
  "key20": "4TvaeHfFtVtvJX1CnaEhDk45e6Vk5FeZBL9Vf1d7EdoM3P6v1jxskwH2N4TSE4FFFcDLKkePFoaLckMD4En7rhp6",
  "key21": "2hiLHfhinAcRpLvECmeJRJpU9H9Er568fLUQx78BANDLN2Ryq1UR8eKjpzftcDA49YjYyhRPRom6e18t5aexKT3N",
  "key22": "DyRyjoLtUHgpWncnbQJBtqor98s4dM9MoxZoSKbFaDAFDPv6ddA1dmMZnNcdZy6geoZeckdRujm8GaDu3U7KvKd",
  "key23": "4HuAxhFPgDxvWZsj9yvTn6QQtyb7oAWhZ2YicmxMA3AUD8HxGQuMEQXcEywpGydMmjqVA9BmKXczATBN4pv4BZC4",
  "key24": "2i8K3Y3E9FmKHnruhqxSuDQkAoehRSCTgDCJTcqSt9En9QVHEgzy4tcqYma6hpHC7TxrSJN2F3TBQdevfbbzVvti",
  "key25": "5VHD7St44jWKbw4YdpjQvRSUHaHBN6jBRMV1qBNFCzsQeAAjN2ggip3SpHdnvmECALixHk9RWZRv8hJpDLaq88PT",
  "key26": "4tDmRwbAwVUDik8jqPgKHqNyK2nf6WJNpuLkh5Wfh8aoBp3wjhso45w4YT1TNKvgHsddonTKYDupTCoWwZufAudM",
  "key27": "4haKmhi42WRZZvufsEyi2rD4J13dvKDpm383KhUNBEToY5JdVzFRQS2GpKexSCwHdCGDeC8WX7wbuDr7iYduZcs1",
  "key28": "4tf2XdmuX6DAqWi6YjTP32TmmPxWhgtdXDs864YGrXBRc89nBXt39TzTeGWyGGE8jbEbs734w4HaWxodEpnvvPC9",
  "key29": "y9tqWCwi1haxnukGicXPezaeBM6GeKT4K9XZX1YJyqgQFQwmai3weiBQ4YEWsbX7XWrhBrt3VCp6Wybo2sZi4Nw",
  "key30": "Y5gucxRr5MKxwZZjUDk7sSoSosSgmBc6dZKUeHeGNKkbAzHeNqgtVyU5bUDGB5y7Ku9TsNA2Zb5HbcqMLn3C9VF",
  "key31": "2G9kf5WUip7A82aTgNoJar5s4EVqVGSEpX5zJEnXbqeWTZmCV8pvynVPwJkbPJ4B2aCJXSNZbZheN3GhjKrGh1WB",
  "key32": "5HPNNG2AWYjjb8uhYG8c6Q1fw7fZb4qxEyQ2TscV2idFd67fHsaMDHkipcTrDKw5eA3nEx5V93zRH6mkcz7vmQN6",
  "key33": "3Md4JGsUisVTtcYXXpruJNEbGyWLFThttSPFXdjCqDcX5e61EYgCesnanS65WLS7VtDpbLvwoxkxu9WpfY8tQNRX",
  "key34": "46z6Z2dmv928WWawj9XxyR4eknx53VgKTMGDGDTmBL1dLx4YQbsg13i8aPKkbmPrTKFCPqvthb5wcf1gC2JZnh2J",
  "key35": "3TmEw7Uka9dxTp9obq3ihHVjiGRZ5UGWwnEfKggTc8XPwkq5HKycu8y3pXY2uEJnw6c8HiHGXopfVzNQtTJkkRmv",
  "key36": "YSKiXVr9wrJp8Bwp3o8V7dvRQc3TNZVHJ551awvgR7XgVGnCNpg6XF5oq97prPuqFZQXUFBSg4WTHxzU3HFQdtx",
  "key37": "4V79tmb1UiZgXnSVtXdDizuMa3SQecyTb8EV4uLbV8oWA66oGCFsGAZJfJd3FksThUhdTZepq3BGPFioShYwJVwz"
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
