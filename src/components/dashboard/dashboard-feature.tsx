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
    "3KFLcHQpbM5WK6Td8AuUwcKAP8FhZZdBbP4cwZyw7P3nA5aLH75yJfhHcJnxQrNZ5iDGWcYJjyAGyGqiTYm7mrwh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oauvHJsHPwaRJZZiWwWN5G1WTcznBBVUskfauHHJhcmp6hk7VfWMkCR3Fb1UpVkpE4azs9Notv1VKW5zgUPMg95",
  "key1": "2rr3C7SXyT9QWA6FUwkUWKDWqX13XgEp3UvnN3EBUxN7z2jz2E3YCcgH5Ua4i7MQ5WyBtHtzDRNtKQbfbJpDfsXn",
  "key2": "3maGWqP8B5DY1iyvNcTUcfvvBuznTGf2SMm5zYvEhrrnhfH37rokHTA5bAkGBWEnn4qndFyuGpoAFDrL2H6RCnJL",
  "key3": "DafqMBNQTYENoKKkKTHBrBsFFw2Piu9hWxuw8DYad6AKXDzRDFUtCbLgaW7wZTJ8orJvJQiHZTaXSwoTsotoSch",
  "key4": "3UbLTdEaPoAkt8M6ys3onULtDDREtpfJa9Rissxb9KqzED2Vq8db5Jy57e1k6g2dmB5NCNZDATjE6WQrDdC5ANzq",
  "key5": "rvVbKMwymtZ38Vff1o4po7tKBf45UdJwJ5yxBUKWMAWW5FRhuUVUQUN1r6hQxAckdv9jKLYz8T5qtcW25W8gxXf",
  "key6": "5ykfgeTa7sfLCSKq4sQWVN5oAY8QaZTgLszbqAJemCP6m7jQc3GKA84WgKXXC9LcJ5rTtySyj44hCyDe1U3ZcFHj",
  "key7": "4aYPY9y5UcLt2kX9gwBmic6KqyafTxDiiEuNyrRJSW7LvtHdKQUmy8E5dJajQ3ASKMr9gzuePuupTrzvzeU9hpuq",
  "key8": "3Cikavs6PKAZcWVzsAdq9DunSxb4Yi6x8Q7e7qNDNqkLRCZ2QcQoU7aHyXyfsajtP6VbxS76VNFY9RYhJaejoRDk",
  "key9": "VrYtCiVzD4vTZzFDJkX55BhyPAUchCVmiEo2N82oEUT13J2cwZtL6z1wiw83D4aHRYgz8VCLZXmcXLHXfhfmirC",
  "key10": "3cen6opSmR54ASdPpQLrbwRgZsLGhuN1SMu7hv1QEvGZozy8AKXRdehaHDkfBENKfrXcQFr1LMah6cjVxeceKMbe",
  "key11": "3YPMNCFJGL4c9FVTHT3rC1MNZxvi39iJfLVsZw7KM6XuKGoJfZfadXNCJ65v1pb5sdTdNafq5pSm12mkgWsESTXF",
  "key12": "jMdnnckjhBaMdduxmZhNZVWHPjuaeCkfeKwefWqMr424GzvxmWZ1KXokyeKG1WrCntyPvNg5z6dbJD31eaK59km",
  "key13": "31heCcutB4hxvcCxFcv7PnJvsQ4hXBJovkyjBYBqrLSeqxi1QpuPRe32vRttydTZffFqbngfp9tVWikbNZDUxBGc",
  "key14": "4FTyPN99SBFLiLruCso1gPPNMiPixRNG1FVMkmG7CTkqHCePdAj4mvVgaTDT9ghvo4SKkPy2vD9iYQ8rr4mVZBxX",
  "key15": "5sRMPLf2dPM4rB3b19UpPe2Lpq5DSXpP8qtNuENyu3afERCae4poZCpQbFsinpowQFLQvuQgfegub51Z5MDDtCD4",
  "key16": "4wWd91Rd1MfheeqPzayEc3afRtCupPm7hg6H1GfyEsPHt8omYW7TS6yGAh7tstwSDqF9N7GisLyBN27yayr7iDRs",
  "key17": "MK4bEEg7oovPMMwQSVgirKJV6k8TZaUXHsnP3bJB4MeinSPHQBMnL2YSvDEF9EamL31Qqun5B7zFrFjduqpaGD1",
  "key18": "34fmDKJDzh42uFqHzQ9bZ1ABFuXnCeZLF2DK7GNtvzhxRNDzNcz2nSNBi6xmbmtp2oQWJjN1xtteR3E3eFxkhNUr",
  "key19": "3kR7BKkGfafKksTFH92KpNzNG6L7vRHiDS76z1PB7YXQxrBVVJhNbrcxe7JSGrbAtzYx7kTpvGEjukeSDF3GbzcP",
  "key20": "4cseyydsnE4d4c3jZWSKer9WieeBTZ3S3Ga1uAf17VMU1ZgCievGcySLkp9XiagxDeo1o2gyhC7UX3p3vmuA8Lg5",
  "key21": "4pqpjM9nX7vbnh1KwBK5DHAZpucduBdwh2dTjvXvnE9pbc1aW8dcpyRAh2tiH4Tq2pAu462wMWejG6wFBtSvDtxr",
  "key22": "82jySCmkMgvfZCNbWpK6dMGMnuQsFk61RJYCdWVnmjCg4ScAtaNC35Bsd5fskhuvAb9g3jgUsZYGX5DhJVdP1Wu",
  "key23": "3Pbgr3bJPt1uUipXGtTtxVmuTk8i6iuFrxzFTKWfCvaM9M9Bf8AVTCDKw13DqYq2BhC2Zamziv1jA4g6SkDQoZ76",
  "key24": "ReWgVPfJVEMp8PhAyVGaL3jxVu5hpcagt3p2bZ5KPGCkTSJqRvQGpb8mgimF5m5vRKpAQu7Qbcy6CpsqjzC8Y8K",
  "key25": "3w4vq6WoNF4gnLPdZ4fmDUBxrLXMnVX61E52hG8kTYN3ECvRhpzNKhH7bo8rUZzjZU4TJqGF5SvKhfsbdzkGDozP",
  "key26": "3XXacmWTkimxi6bNWaNPLykidSvRjWgbvrnra2LYW7Ca6Bf7aun4MzAQfDBQ4YzKAoSY5ZMhL92uecwc2b3jjwAX",
  "key27": "5Vud8bLCDRdACRyAvcc4A42PcgS5Dgc183gxDxnV9jc79TqMdCaHXKPqf6oxxEwjWd37S7Njc4ogcf3kmcXKGTzT",
  "key28": "JYj1284knDPW348whYJixaaeNdqnWQJSUWJZz4HZfSjf351nhMjVspwTyVtJMDhdAthHoiUgABNPBL9wn9pYoEA",
  "key29": "LnDqXx1njiUxZ1VTvFkzTmdbieeEAKLUWHETWjeDDMVw3zBnPVgoBGCb8TKc7cY5MNbaNBxptqrwLQ77F168VnF",
  "key30": "4mSwh2tacmBcVbtKgVByP2LQPbc2HF4xN6NJJ5f5og9iUxxLTnNYDbmvh48iJXbphAC4XLdde3kzrnH2fmGw4ey4",
  "key31": "24W7WynNgDBwKeUEawTH78GDLw9v4H4NdGxrLMYgVhhgpZ8zCgFZAFTyVHW4khmmoEe2XZe3mZgUPQwwAJQfdkf9",
  "key32": "JK4Fkq8wmSUcrYJ78E5P46rTu56SKNqnoyt1huC3fB27JmDnzC3owDwRwpn7wDWykW7gDYQR6661eiTMRL8ohUn",
  "key33": "Sm2Fb7tEnSrZt8N7By5Mct4AComQ3AkiewYr1xgj7osaFKui6x9yZAJeqk5CuziiHuLHh6hwXtB9bkJhPHqi212",
  "key34": "59UCyP21UCybFUcTTL8JKyCPWFZZ8rKx1MKzGPqKPYLpm7b5cphN7VZeKfmQJqHjke6EsAJtZf4adnwndqXStFHY",
  "key35": "4fZrstyhUepGU5NzhCzXDEdE8dWh3ti4WPFBiWctAB3NK4HpxbQGZ6UeknV6KfVmKKVAg1w8vBdfMYa8mJhnpGLs",
  "key36": "5VJJYpkPyNVvcvwxbWEATNTKAEzaAidgSrhkgD78T3NGC82gg7mJpHU3opZ2xyPy4NAEdy8rHVqdNCjU86frcJQ9",
  "key37": "2feMrooD4jdWLCFRH5nMfMw7tgvToN4K7aAVb34pL4HLwGj8koDzf3ykwuyoiKyJ7CfobCWGZ5BKwLHtBCcYofLq"
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
