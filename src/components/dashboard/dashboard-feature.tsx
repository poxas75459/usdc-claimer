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
    "5S4AQ9pQPNcagt5aBHZBuaT1HXJxGDhHsXC1xR8nMSNsMFm3nqi9p9C2bVHLKGLKrBRh5PtrpcBhQ6xnDKSsF93E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h7EGcBmZENrWPzUmEiHknVtwujAtEGLbnfndBGdQXpwcM8N75ma4rfk8ZuSzgjQVAEg1soQJirA1Zwwc6Bpjagd",
  "key1": "4pL7tHS1fbAEnn5j9V6VXtYzVmj8ihMX1sp4ZSiyAwuFY2jyUhF9fKLBt4yQUEhozFmEsPfUfMjR2VyvSPfTUEqk",
  "key2": "3tdFJGH792HTYaRB3pFKMiDXkSxTopzvreucftFj7vYDNkigXvyD6EtDde27nZT4QhRUaXGZUY3GbQVKmLDmC3fX",
  "key3": "2og8koDq1C2oBWSdW2DP8boEzwfbGosuK1gN6g23yhNSUeR61TGa4swB5dD8v3QD57D953ZmkqbgZpiH9qTqz5Rh",
  "key4": "3iTQ21E9DWubtb2H5AGjjwQ9whgnrPnZtZFavVMaYwmkGY4LuCYsU41oCP57X15BHcK3zBj2wi4WGWK4xtFSrxtd",
  "key5": "Q5r6xaxA4wn7mg2VLnwNwZRfDRFd15S6MZj4ke39NpTHAtVuoGBX2yQUjz8ttGE41vq8orNunofdqy61btSw1LN",
  "key6": "67guykTRr9VgXS8eHAW3DZDvKhpnyp2DJbc6zid53wMzBb5YurqdJYRzCxu4hmZYVrcAZXEpJMcZRMxBp1gTUXKm",
  "key7": "2RHvZMsbwfFNspbTLpQTFmZSctCVD3j9snpiiBhojsiHbytsfVbMvw8djdZVDQ2gzRJkDtvMs69R1zvt1Xa8d2Zo",
  "key8": "54iupzZvKK5HycsfPBjvQ5EL2TXD74ZNZyoWDPtuTGb97tSFp69mYiW737ngaDBXKunYvQRG15TmosQopSGPWnX2",
  "key9": "3TMjxGeA9gmyscszwyWtJSdzgPBFSNgc2vwTpXRw9JbFzqGKJnaa6p3xkUhCrm7Td3v8z1CBC4VeUmdUe2D96aHH",
  "key10": "4mexB557SD69PeV1Sw7oz3CTVzuXQs4mmnRWBtfxmCjt9pLpNERuh64fjx3YAaTnChaKhH8Ei5rLcHLeuyyLiSM3",
  "key11": "TwM2tYbhTEazNu7ewUfVWS4Tx2AZZeLpFz2vti5SHJGyhuSv1SHwCVR2PjYtjbEg6nn3njy7oTPEGRaL8BiAAyq",
  "key12": "dbTwLzvxMiGpHWDeoH3GV8MfrLXDwiCTRDBbLAd8Hzh85ELrmEyXNgEzszx7ANN1v7Lzq6r5KmzfEjB39Rk2tnk",
  "key13": "7maWYywgeDvgomRVrZ2ztXxgLt9nCnFWUtCz1xb1MiAzkzoQh1XXj1SWNTAqi5zeaGQPZodPAuck5SZ6q1kk3z6",
  "key14": "3HkuD1kqwWjGF1eAqVHCookKA4uPN6EEXTfspBJyHzrCbwpH1GUScYDLneSSpW4wNTcdwcj874JAkitijwgjP71V",
  "key15": "42rKKqoewV1APgPLzSGX5iSR1KyeEmH1M81HE812X7hNWJiZZBaox57j81q4PUYKFc73PV65KhrFmbPXEdrFzc1B",
  "key16": "5vEWx41dw9ZUtk34QqCVthH1e6n2USu5o3HTdC6gCyT9V8iFyauexCRyrPxKXkw8rpU4HFYe53kcswcxvfr8DMS2",
  "key17": "2T8Vn9obKE8fh7ZrpeagJqFpdgJ1Zkw2nHqRryzTtCyJAYgdPrwnYwR3r6ZWPf1eyj7vXvNATSzR4AYTZD8Uy19d",
  "key18": "4fmg8GrUJrRFVE7p9pMXHUDCD2Ud2A152q68av2e6WNmuhwwpRwakxDpzor4z45z4FgSEfBi4Q4GLsDRF816bpVL",
  "key19": "2NwPDuMDyepg3mq6yPjeLpE1ax1siaYQGW1bvGXxfaxm3Fea58SQwhvctcqzGgZZ2yDm8p3UWdRAXXW1t1VFbNve",
  "key20": "3uhniKcziNwnDyQWERJXceXWie6rwNUFrQka2ub8pMfomuVz2gTmDifwzZNm4yxpqFweA298dSVdAQZuptWMNPF1",
  "key21": "5icDXwJsmhZjEpKnC3eKk3oJCucHZmY6bd3uy76c5VRLncw8uaRihedjCxgse9ox6CYcs8d576DizD9PcG3VMVVh",
  "key22": "4Ts2o2S6xZFCXtK5FTKaH4oGRXLghXkGu38Pv72TXKTP3nMH5eErLmaHTCCqhfWP4CUR5cqJePZNseMapCEteECG",
  "key23": "32QZLWRRXTedoj4fkHzAAGfUxox4aXUeRNmzXBYdACcUPgSn2ygdvUWxgV3Bt6NaZ9BGGLBeudNTiNanyJTjq3S4",
  "key24": "2w2Lx3U8QgZyJzeZ4WuveqSkif9MgSeM6JKecT8KysR1KAayGHW1QuBAyJJYR7WjGLPrD1KRBUBUbMX6XxsePDNa",
  "key25": "aq1a4VHgy1zNAxrQTf391vVaA3SizQR9JSezSDaLECNzDNs7t4tTQvSuzsvWm4tuuukRsBUKKTXs4jf2KmgoqKP",
  "key26": "2rE48Cj6kK1fuBJtU5CYB19AChEkQ67iAMJ97XKwcWPfurk8EmhjzwwwMhVBrZhNt7ux3QV7wti3HhVGXVqkuby7",
  "key27": "4KeFMGrn4mWJMnHGskYQJFcKgQoQQY2Uo3nBHG3v2dky6VJBdz6zM5XhGANLFdmKv4JzPpVbL4e2m4smpcHZnFjF",
  "key28": "5TcKxzgfGe9rkRj2BN71izehB1NG9JeFNqGB7Yhj5NYC8oHyKsxzsRFBBHBpBQ4cxbwZeFE6Az6KrUJzn3XK8362",
  "key29": "452tQV8inYPM5JHqHn3J4TQJb3pGfbotkEGrorADwTJiP2HLpMdQmPk9gjwCYTRMmT8oVrYbxRwW2XV4u8eGY253",
  "key30": "2MqqEg3nvFa9ewi87MddVhyPQvkEGhUbr8NenNEeembXsxeRm1q4jWxQBTM1eY4KREczAud17AMAYs7Wp3oeoTkx",
  "key31": "SveDTTZ2yziG6bGwiVAwGbW6uUCJPCJfZ652jG4hHMvn6XRBkpPHVNLXccXpFx1pKumc72YFJZGUAkSXHZvp2JK",
  "key32": "3gTfGiWkKPoFxPeQu4a6NBtx1DwQopbntHyWkrL62tZfKn9CEh6uyZEfubhw3KkQDLcuuUWfUD69AeVpyNhqhAie",
  "key33": "3KLSPDBdKnQkkcko9o96BQqw4M4DhUTboXWpjS29iFtnUHKdLRQ9aMyEgqYqjr847WFz6BDWBS5inLTst3qEfLWr",
  "key34": "2KcLKVrA9ob48r4DCo8o9BweVYHgqPD1RvYNcd5e1aHzw7u4Fan84rniVKQ6nqFPzDR6MB4b6TfV7FZm2J7jADEi",
  "key35": "LBQUHUvezXefJKaHruQ76rZH86MNBtfFm6igupHNr3XEENJa3wy8zU8e45qoW6UfsUa5dQfEPsRaJrBiC2dTitD",
  "key36": "cBdeQjNRdbzKja9aW7fzxmkrfzRPHpxYLBbGmF6xa7DGQuLxUvdZmcGkw2bWuYbe76dJvwx4wSvNDgyxjTQAMnJ",
  "key37": "4BRpNABEgGzMPeAJne1uWkeSWAP5s3Mo3s4nHJLji62fes6Via5dsGJGytMyJkN1GA8k4jkj26YNAvbdLAMY3LR7",
  "key38": "26KgEZf5mg5xuZ8kk3AchN5LK9GpUShsLBUG1ajb7PizAD9oqGviec1iBLkHTiVFcM5FXRs59WDRn9xJ6RJ1NMcy",
  "key39": "3egGHPnRTEtpJccZCCnFR2JhVi2QhsCVt95kdt7vBsUgnw3ZpHKqbtxJRC9d2RBgo7HkhDpHEQqPgTPdtS22Y2ho",
  "key40": "26vtt8GdsvVL8zYSVXn8M4kp64ecnqj63pVe5M3s8YCky9y4bemmRXmapKxuKrYnN5XGTLXwKPYwkJYSPkmRsTJx",
  "key41": "5XknC1VrM8m3AeDdNUg83FkjcoLeYupA7PuQqENRJ5JD44C6XUt2NjYAFc8DSNp254ygsGp1JHKnjXg3mKLqUpU6",
  "key42": "63rXHbWRfbZ9GQhmtpYi4Gt9aDnpEQkUB2pogk5kyBL3PkwWaUHVDDfe55mMxkdxgr3FprnLkxvChGTiLbjq5GsU",
  "key43": "5z8CzMCyW6ykFr8FZtcFdsaskhUwCxW8dTL8xskin2Eb9RcP9vVtUCFWciVMuzaNgZhNKoYaphoQK4yjxT3sTABd",
  "key44": "3EC565kfbjhQkTBNL9BnWZUYSexUeB9rsb1guiPkQEtC3SRc43SU3t9F3S1CHQKEFdyo5tujVZBhZuJ4P1qBFH2Y",
  "key45": "5Qd5xu7AB7ruoWz9Z754DreNjBZFFq6Li1WYzAiaJgyhb4LehSobfyAf4sVEfVZr1BPc9ZR4twkVJQGfLDDcdrHR"
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
