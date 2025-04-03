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
    "41Tsb1kx4xxGu1N68eKbjdyamtwBbQG6S6MqVw34vCykVvYkPPk1yhreZLwZhLzYcTiaTBpyyv6wesxdPSnsrHP8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k8qz8NrEbceHYdi1C6ag6xJLcsPkvzX1x5UMR5egP2WRRuXQ8BLg4Cq18K3CXHHcnomp7uryUsxkNdyKDSveaE1",
  "key1": "4bYw2MbpevF3U1kVuHei7LntxQFZCLQXExakctGJQ8bVC4mzr87d14mRkMMh8px4i4Hu9xzkw8p6es6S9g9ktzDc",
  "key2": "2f7RMegFoQ6Ar3BGAYvNGRvsNduVC3wZVYMd9eVpt8KwH4kvH7FJCPAUi88q63d55osBxAypLJRBCLU4HocR9JUp",
  "key3": "5odmEAxGgkzPigcCBopMUsfgXGVf6ghLwYqo1zqY46yPfBKMKSsWqbaXC9w3zoEw91yMsvfUADgG2YauoNYS7JZz",
  "key4": "4LWgtwnfGUhzC46Nxka5PqokXm2MRwdv77bhurhWRpG5H7bj2D3DVyTHdKzRWgvWv8kGEgFd3wftkwcmQsgvF1ag",
  "key5": "5mrVUHcLDBuio5c37Co9qpdhtfQeQSaEDEQLqiNG62karnKLPTeMNJwYpi2gXuVsVvBatYfNv4vkFaXqcp2xrVYQ",
  "key6": "58QzsR6mAEdcnDR6BtjmwhBxrZ59sFTDTQ9YJ5VaZRFotKCrpCdRtMMG5bLVghwjA8PGXaasFyFJoMadU2YN51EG",
  "key7": "PgMPxfMk5XTPyjAAcE1dtZ5QfWxviNSRtM5LCQxzYYhngHfiEkTamTSCRWieBqic3VFi7k1BMjxaqxi5vds2C7v",
  "key8": "cmZpYT8ujrdXPSjk6M9aWwdRbsxMuoaUQDGFgfqNHQjefArSb6xjahtbKpkJNCXFqk9ts848r2aopbe8Sg9nJB7",
  "key9": "4XUoSvw1KpgC3YZzqce3D4Cfn7o4aBKMEhHGvAyQUG6aDYSgRWAtWmbQYEBD34DAA3rXzX4oXSZYJLAcQyonzaBz",
  "key10": "2zLBPnot7QxxJKj78fvgFziA2beSs5kzpihqELgA6rxntQfo6g5Q8EjvkW31qAMbGtYYKXEhPhPCAyY7NbRXCbTB",
  "key11": "44xD6Dyu9EEYyY6yDyKiJn85Kexyr5K98z8cUBRZ3Yp32f2Fk4LCCbEpfSXiRmy1AyqNr7UBeYi7sMG9XTDRhjEL",
  "key12": "24JK9mtPzv1MadUcY3UEV54Facmg2cfHCeJUjfiDXWTB7pn1KBRNBapswkqjz1tF7PMpxgXzYuYaBLeV7RtaF1sH",
  "key13": "5k2pe8JNTasAhkRz4UGHsD5RmaMnqX7ru994ieupHgkCjpT8jks9q84t7trDuhmQhE3AkAsK87nz2P2Pbw2QBcax",
  "key14": "5XV9s9q8R7RucykpmHMMMCHdEkSfC9FMxB5RE7qkjMvUzRCUQxesmenzjhDns6g8FkPZaV564bwWRJWS6YZ8w55V",
  "key15": "5ZR5NnvjhdE66b7bFQ5BsHvKXnjat4hLiaHdmogFaZzZ4DMk3qK1AEdgkVB2PM8VnoYFFacKnhJR5n94aMvZmBrX",
  "key16": "3rt1K2G86NnzkPACGexVirVKrHRWPNJ3JHJHh8mfkP6p2Gk5BqtR36Wzw1H4hafoqFrzrFpfofnK1JHDABMCnB6R",
  "key17": "3ZpULqcq88La4uuARrRrQp75RQBX8fD9T5Xhkf9k8Fcq9BjE7TDNM24JgRo4QSZc9Uh5McPpSB5mXTHTBHTiBccD",
  "key18": "5edLj5u4FUZtaEd6hJwHkj5UqJeeCFfbeF6HhmTT4MWTUdKtzQR7AKGk1wmfcA9C5BbAkChRNg3oHmnwAUoPBdXP",
  "key19": "2xQuzeDYrCXZQwGobBkK4dGFZBaXpbzB7mUT7zArZho5vaDQn85KFRfdAZK39n4hEB9fwrm1LQwaNqBWFmD1GB9X",
  "key20": "xhhGF9qS1VdUvwUCNzENGd3DTsFsHFPXs9CzsKgYKobk38EZ5noxmGG3XZ2eeERN5tyvPHc1Q4aqgNYDNxCYdSW",
  "key21": "5S4axhQpZTqApU726wz9WvgKHZrdXkxfQzsXrUV2e1rQT4hrrSpfVzGdgYXv2Ex2RAgw1qKVTGGomHcAV1Xu8SnH",
  "key22": "GdHDrgRAEz8Qz337Kik1usCNd3bZiqCfnSFo9EkfFDdd4jK7Nfa3DTgSVxicWvDGs6ofwpEVZEKNurZp5AdwYn7",
  "key23": "5ydE8xBYDRPDq2Nms1DYct8zoDCvZPyjtxzBAaFCW2wr6gJAWWkhMjDpuT3i8aQsy6JvpFGzvJAP5xyAafseg2NS",
  "key24": "31ZX99bUWfAi6v9bxtuHBaSxND99XAAV1Li4dPGpwaozPfq4BFpDaDbhgJtRQGHKAPeaocoC8TixeXdTombX9ry3",
  "key25": "41H9GnADhgbUuSadvHBm5aJE1f8MmpD7DCaMqLXzyksHkaYbGe4ePMS1AdayyMFYMwUmEd1h18ActaNFLissLWZ8",
  "key26": "5dLDRwBM26qqUqRrF38e8MhU9MKQjxhGiGsZdyQyKV3zhVo2WjY1Vf5MMoB3fenkgE5Y4CiC8iLj2dXMCdGSPXoV",
  "key27": "5Bzt6Szsm5JW8rvLCwQcW4YMUn9ZhyNUVoeEB5Mf9WT6UPZynB3X9suNW6ay21rSEcvgVyyahfpJPHxEcfHXa4Yi",
  "key28": "5yDieRioCXcg8byTGyVu8yxqQ7Bfe5UgfR16XMEFZodEG6adL69fs3kcQXyL5PH9Xt7KendBF6yEfBmRy2EX4pA7",
  "key29": "5nsBCk3ei7o9mFfYH4CatbMH2EuxwZeFxCFUUMV1xCfPKh4manLMzkgxvuyMTj1wWE4VRCD1s83y6DnDeNTpnDyL",
  "key30": "3LjXN3jfBZkWn7LRok1UuEdC7GbtXT12W1gQ83pv97Cq8DirLSWwaRirrLxhHj4hJnVtGugBYsWXXvxJfamGnHd6",
  "key31": "5ibmUSLT4i242D8tSzYDs62YLuKJpeDPDjZzXMRn7uABfeq1iQv9ntofWimnDE8SVxiai9a3zNuVHByHqYWciUCw",
  "key32": "5P7XLMh7JFgWVuNzcrVwjdwJSZF5aYg97EXHFc6LpcufqYu7V85sms7e3KVEs1vZeEFALSDP1BMPp2SmLDjarKkJ",
  "key33": "2hb4hbH2J5rZqyuDHUMpqnqoJKgzyN5gM4aJhqZgV5TUKBF1N25AMEh5DhLmpkFiSrW9Bk413hyNBWCyCFD36D8z",
  "key34": "bjYgDjbF66dvTeqNMoB1Fi2ecuDswyyGWE1s5ZGxekUgq4CPRuJjTRfDrq59Kyz97fzfuV6YPGeqamrsWB5GVhS",
  "key35": "4kWT9T4nFwSNpNLhuAZirdn81wHZgeXTcLcYsVDD6ZoPdS7ubU2dfkizb8NgWRPsxv4xCiDNgQCQYBgo6oH9gTz5",
  "key36": "4JQxYf6roczr7hNY9y2Hi1SWhbGcoisb1vCQa4mSd8nKxZ2bpt8XaVk1TfbJ1CpTpkZMCKYdcCvyrYi1j26cciXV",
  "key37": "4aK5LUESLxs6zDXwg9TQ9Ws86QK4SLCoUJdoyFV6afJQXWVtGZ27kRHBKPCU8qooV5CosZ4eXpwskPiGKfhGRvab",
  "key38": "5pDPjweLyAJGdDaGigzTGYKBUQxg2vA27stgDUbYKNhtHNmHeEheXhLaQKeECGJwxvy98SgemAqccmZMu2CVGy3c",
  "key39": "245zD9oePMd7xTqCV1rsGSEtqXJofiX3tLRR46ZRqnQzVkArpohtRgEoY3Kw3sw3s4DqFwoUyTodWzjg9CP41Ukk",
  "key40": "24yWRyMvCe4rsa2GVsLznbs5BcsGN2k6nMBbseSZHDevLKBUprzdbDwF4KFS1WWnTQjDqs8HYkX6pfZsAkToA7c2",
  "key41": "3biWVeuwb864TaNaeHDeDGU68cbWZRaJrs8KXpmoLiTmthALd9ojJjUa7FEY7dDpdCShptfErAqowxXZXKYBB8bz",
  "key42": "5wk6X8iUHXNqTir4ip15KenDS4KxwJjymoUDpEscvuzwhjBM3ZjzvzB68kUL3zXDWF4EiFgd5rYFuuHZjb9m5rgi",
  "key43": "2Nw4WqF4mnyjf4cz921L4bbtSyDUyEM3bF5ugoLpqkN3fXGpnNFhMXeSHdXDAMgC41qnsLum78fCTfoE4KMKereA",
  "key44": "3PAFwSGFBkV8v3g27mFjmociDEpSvKddSPmNCjFj8d7a5Ruio9a1bSnW9oNekHwRnieYnVMGpptTJWKnKufsG1PS",
  "key45": "5Bu2L4KQKyQCZu1VYNXMJ4JnXrajEDcBajxNUfYwXD2i2kPfY8S1bY4hseww4nLCaCt729dLmHMRUqkCTfgSAU5v",
  "key46": "cVgukAShQp8Q6REUSb5H1MatotDaAGcnQEVjvWgXF7Xn374aoHXAhnb4Y2nz6VA5YKh37M9zsKGPbCYmzBT8gLw",
  "key47": "GXf2vHTNvbhUHhYzk2pu6hcgAUruJaSR3qkk6795DR3ykdZevaStJY2o4vBeJAonVcSvTt5KqDqLMk94qjMtYDZ"
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
