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
    "5TKX9qWkMDhXxwR2sqMLdUHxaXMfp4M3AuKG2t7bHUgd6yfYQpfmMVLAC4Yn4qxYDj2D2CwK2hi17cYxDgUYvcAo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e6qdJoY9LZNcTuTF2cvxZVcQJtmcu7fTgZbbAxc6DcKFGGQ4uZTnMLHgW5EefCEGppYBuFVwxmMcDP7oa4FWpmm",
  "key1": "42nDZ4twjbvDEypDP3zUZcDuh9eqRV4ViDnC6bUpKwrW9ZnUjbNybC2NotyYgT6F3xbzKKEmiBg9w5ow7agsV8KY",
  "key2": "5zN39pbdQ3MVDbvfZmPBVesuCdjahoXeiTeop2Uu4MUoNWCF35QQeiUqiJ6jugdd7GKXU96grhySuMD8ZmTgDWN3",
  "key3": "s8Vypo7RtpTGJTJD3M2qS9vpKE5NsuEgCrJ5VRuH7w7XzKn2HzYmznp2eLgdL5jfvKcmqYR1muzTH8MrfaeYcec",
  "key4": "5YkCZxbkLcNRkHAJJYsrHYvBQHVkfGZ5oMxthmTECkVADnC5sRuhXQQBuLuWhBL5dXrhFVHoMfV4p7adCY8oGbrt",
  "key5": "3vCvLqpYqndCoychq3EECLiBRdU1RAUJMMxBf5LmzWM53NtcTmR3fRjbVQP6NKovwWitrBfH3n4L9MiycsYmeFXK",
  "key6": "4tDFZMgJwdJEPtzf2Z7Tp1duDiup6CXbHqNrJBh4cuvrnQ1h7A58LSHP16SebfGLnqVtibHFr18KYR8G5jFTmcF4",
  "key7": "51vsk5KzCVnBDjD5RVe1njhX2WpFjuEMFm5L1rF5YUTWi6dGyvVjDm6F9dCmtKqLWxrgBB5sVu3Q1P9MUzhvrod7",
  "key8": "5hGbay3JBwn3AjwbfiuLy11XA7TkpxDeGgWXJczRjq67tjQBC94nj3ShYtjwkEep6fbQi4pXLvnCT64B1umTGKLJ",
  "key9": "4zPbL1toCrzkpufoke2CJtpx4AUszuWUbimCkCg7FHvJBDfEFVTtP793dpAsLTiAjeWLyzS9A7n9jZZxEChMfE7o",
  "key10": "3BNrTL3hPweRQd8tWYcecKXc3cftHXX1HZTyGRRMQNuAXTrCKLmcVcp21NkfQF5atNRLNy3HLRHc1oRz5mis8W11",
  "key11": "3nVg3jjNSXPbTWvH2D3utS5yUaQmF9Cx4RVhvYUXn9iXyfUWx9XnvS7ZquK9ZHo1ooKiiPpC2zttfRuPprMSEkPQ",
  "key12": "TDJJrXPmbMthgvSgqDR8uKE3u6ceMfZET7DttxiG2T1xunbwY1aAaJ7MkqfRibFZdc4pKAvkioADS8Cn51nDxqH",
  "key13": "5aBssDXeVDY8CpLb9NqcdkvL2oLs85CrZXz5it1tstzathoSKaVJtQ23AFM5Qi5mt7LjbotocLFHQ8mR9Ens4KEg",
  "key14": "fEhnPnoMemUj1V9bHTkRwcfgDFkYAcrUv5kwWWiMD3S3BgeLD4EsyenJkUiS1rfoUcTv2RCEK5hDwn8BpMw79PM",
  "key15": "3xi4JYYLFhxkT6zrMKSnXaMs1QiGJAmXGnkewU9FBg9VwWPTjADvnwordW2R83p9UFybWDD5sZxqCeoAeMejpvhX",
  "key16": "5tDciqSNKEvqt68TwW9MmWsXnPUNRZxKcXYJhVZZ8i7pboDsbGgjPtniRkoNTpZtGR1LhhBVu97cEjiiRjxjc26t",
  "key17": "3fwzGy4oib42Z727wwkh5fU7fsQmrSC5W3GMpr3gLmiqDCvANpX15bJFddG5YWPmWmPYccphibeEPTaHidt3yQmn",
  "key18": "3vAE9fznz1x32HSwKJrZ3frAb5sV597dhK48KtSMp4rVjDk5zRNrPVNF5SnNg32r5PgG95iaPcruLuj7YeSrmhj8",
  "key19": "21852Vi7VzctobLJaPZhCVzeNSmYuMWG63YkAfmXsMWZBDwVcGRTwBtyncorkNVk1kztytsxP98VDmdGkJcUysed",
  "key20": "JEctQch8eqpCdcpUenqjwRd22yj9v3JVEowu5WdxVR54vYZCRrEJBQiz7CSwG872Z4Q3j4aPU7Lu22RDsXgEqyE",
  "key21": "2knL8ccSH8ozsVaLQBLb7RWkBWz3XjrwEbR13o4NENCZ45tbs2AsdYJuiwYVoeMHiY27kcXqLeGeirzcXddGKpFV",
  "key22": "5Mec7gMcxCvPao63vLAnmPBBuhTXJnsxndJgJQKJnp6JAeWvfgDNSYkC7bAggbMQWTFFYvtTAzJ39SYfejZ6iqFx",
  "key23": "453HK8JopF7kGzmGkrPXqcjRSb9FykjT8yvkuNgPRbrFVVz6Pepbdq6DSZHxt7wkvpuVWc68Cndbu9sgJCgw4GxQ",
  "key24": "2amKgf6JDSrA1WZG36kEnZcKCKTSbrdHPsjbGzPh2YUiBb13rcECpYn1XPPPEsZvKXHYZ5zmFuYrgFbEkGaGeC42",
  "key25": "Du9xKYx3E8D2Ra2WZYwZA8CcMD5oKZW7juVSyyd9eacQ6JwG4Qsi3a7d8wyBLWspKiJmVDtZ4WZzhuzZ24dkiDp",
  "key26": "Wab7e1uEAhRseVRFMg9WhAg3ETx8JuCFKSspDgARt4ZJCXet9phZ6nE6f8AKkeq4AwLEz281UkCCWnUEW8Bhd2S",
  "key27": "2x4QQK2e7FLkBJvMoMx2MMeMxoiLnBdPkyyJY2YkkYKz55EkGn3JG5kxB9JDux3SzCrKyyQR2DVtMQBbpP7WbcKu",
  "key28": "29HuS2exdBkZ35eb9uNsxtTF3KF9ZAzsvt7YM7DFizww6gZ2Rg9bgBqGLLCzZNAyPACuQJAgpHSkzUVgnbM1eAT2",
  "key29": "5a7sqnxJs8ggDqNqZVgXn1QZsQp292wsa5XTmiAGBSJKqh6GxuUoLnQMhxAQ9u2xtBcctVHkKkXv9TX6Cjgs41nc",
  "key30": "3NxGumUxP6YFCHwJBLrwC8eJFdcqT5RNvhSdrsxNnwExWZuyduKdwunKKzxChjEuMJis7VV9ixtzbeTp86LR211m",
  "key31": "Jt8Fcqz7LwLhPXsQCTVFa9YwV6PpUpKWpXU2pJq4Z2EkDF2bnjaWceWRjBdqERZ1CyrDobxY7fMG7g2N6wd5JuC",
  "key32": "5aSWZaoV6dkVZ4wNef7j1rGEo7gUhZQZ2LeNYqAjM9Ja2KhV1ZSH5qywtAs3vPn64e1BeDShuqivuoD2CM3QUaoZ",
  "key33": "4wyQxs1fqvnFtS7iY5iJr1TpQ4ou3Rq28uygFMcRMW5Fo9HoHy21xt7XnqV6WZ1hhF5Bya8sCnVbPMnAMZ1xwCpS",
  "key34": "y5VvEabMj9J5YMFjc9g814ixkXkak65VozjVUFEq2bqTqLNRSgL7kgKciA7SPHA956CnD4o331bGAYj2pTxPocW",
  "key35": "47jTC75NVk1swk7zeXn1VJDHBXubiM43B712Qw8oobWGPbE94G9F1kpsMUatvfWz9ZduFJ3StDvHvnMabTjnCUfu",
  "key36": "58rkLt7P49f8zQEZrGV6woJzqw4S8CX6kabcueuGD7KM292XWAuDwsLR55MM7t36t5HjFGQnvqvPWdjfchPRwJHo",
  "key37": "5tZVp3vWJEHP4WsuiyNn8R4LavER6jSD9aN5oW92qRkAh3QighNojvQjotYXxjGASjSWJkZBH1eMXG7z71mP1v1",
  "key38": "56fMqwLcV78SULqGEVLR5u4ZgzNdJSJ61CBGPfxrrWYeWm8qeSUqcFv1MEzYT7RVx7zFhRZFa9Ft3ZLikLbehrvV",
  "key39": "3FhdVBbFTJrBVZcEWYWUQMerFKqKeLrhSpxUn7hifQxhn6zaJKZRjizVFH81SraVzF7PACh8JyPG1Mdz18YFwMNx",
  "key40": "3RbmvZhp8KckDKeZX9ssvrNNT7xytShmWwpPbw9E9u8f9D9dx6tZLeBGdAcAXjAsLPUQLoKSTswoS1JyX81ECcRp",
  "key41": "3Xra3EWxWFqc265K3jXoTc4tehvqf5epnyvsmtLnLL3UFoGFeFfDuD9Tj9qiuX282Kk2LQQnrV574R8gbLCtvYjx"
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
