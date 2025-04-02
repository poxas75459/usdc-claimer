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
    "cVDwttQcwMzfkaJxWhF8hj3DaqQPgWFXSMjT3NSbR2SMJ98wcgq79QPYV1Rvmw7mt9gDK6Dioh697fqvs4EZUSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J4mPw6kp31euTzN253nx3Upc9no96GFJnUwXukuXPGBkdhQsS9YUWDwoeceHM11Qxttomabw8ipt61BafywcQqo",
  "key1": "4SZkMpgrim7cxS7GdsRbz9ipkaKXCFDVMLUGRDhx9Gt1TVueBqDm9ZyzGWhbNNJXTGfiijfXHAUd41MqWGfvnJok",
  "key2": "2euivFQQzeH7MMzDeGVGnT7sCYr62urBvaoKeKimt7ufq12dyowuYCqVe37tGuxMcfjqN9jZkbF7PVwVBimLx1tL",
  "key3": "eCwYz8dePUfzmGgurPnTGvnzrsNVs8MzhX3Gf9xKuxPwCHDfsHQxmhbF3gSC5mHRKeb2zu3DFihwvNyAVYrZ9iR",
  "key4": "4HRpYbMbuaFmzQauzFcFYGdNUPJFwK4vN5jUX27MY89ipTJTXDbnQKtzQRfVEq21KwerKUxR6YzA4Vn675BA3ksu",
  "key5": "3LPtqy3Lja7r8EsofCfvKH3jVXMG4qzcLui7xPKtf8yTwk5LvU6TJ8yEaNJGZvFyR729Y6HyzxbNvPZBZDk1TyKU",
  "key6": "4cEnXrJfYvD4WJtAgU7R8jL88esqaEVbBTfy7AafTGuxWv3VBT9G6MbM9KhpCUPJFQQFDpVzvtXQAMe5kfm1ehFU",
  "key7": "2NdS7Msxo4N6Z8DgqtNQYyfa7xbSUxJPycugYBMs9Ub9GNQhTNd7xhr8ttP3wjWsSbgdy6hwZSAK24fNBxkG8BZo",
  "key8": "28KiYM9pVy2gf1w3hcCgKjPwbPGEn8w2rADCVE164WWPvFhyDFPGm8hqQtmvZJweEejFKWFWF2Fqok6ZyuQXhfRK",
  "key9": "2Yq9rYZndEgSNke5fLkiLyvRLkcVTzZfr7dGAeQqxFpYba8AGKXKMR8D5xTPpn3dSBVyUpiQW4Lh3y574ZsYs5K8",
  "key10": "59gXjCZBzF1Ak4o9dVndy3mnE36CQ7aEtrR9aiJ8G819Gqh4EAmKFTcNRg4xsR36CP4xeFts9D4DZzyxrj95jCtw",
  "key11": "4HX3PCskeP7qHLJWu4TdWbkQQqWp4kphveumQ7vTju8o4wv7omXHLxbjYxa5cj4umpAW9dESQ584BuP9HscvM1Bg",
  "key12": "2DCGxmtyqPesHYVdgfskQqzz6pqTL4Eggi8ASNAcud14xXqCZSSj4VFXG3Cx7S59kiwtPLLMZJMRKTeVgykBzeNU",
  "key13": "vKVsREjyKuGeNfHjqdVcxwJ5fjKDGvHXWR5Ar17oc4vN3Y2Lu6eVQ345MykHzW4rasqgpNETBZ2HWv49enw9hij",
  "key14": "2eNsb7ECv7Q9ZcUqGtnoLZjpE7RakpMhUjoDMgoyz26vcKTh1VQskLfoq52Sv3X9EXir68XjHxfihb3C4RKArE64",
  "key15": "27VX1eD3rh2j9QsagcHQAND8gUa8XvAmbqmQoJFYh85mUoSEVSyPwRtpN1rHqUdFDJdmCxKCKH6PWT8MSLxncDFA",
  "key16": "5vUuKTXHW6cPe1Jm5Jjm6yNDnNeZDaB5TpVoRPKQCVnJ1M5rqZEy6BYoFhPXeERSepdpmeRo1BKFGaQKsrkYH5gd",
  "key17": "5YhnJevGQk3ND5pKToY3uM4QfujiJQzQfoGzPpaX49a9QWZQtHYonQXKDwp13UQpqogHDgdYvw3CDA7rmhcHbRL8",
  "key18": "22uGmzEwj9QTx3ihaF7bUc9kpviirkTGfVxoY7UByMFXqsmFiHpGDkERSXWjEKLzM44XfDu4vYmT4dJu6n9fPs9J",
  "key19": "5j7CQfbpAWgeNH99o3ktEbRzcf7ZcXm3mExcep8FDkAkTtQdHTMh4Y5c34mdd7MB5hWD7bMDNExXJHkK91DnapJU",
  "key20": "4n1WtLUqtNVrJp8iCoRtTMAss8jVkAQn7CkHXFjaWTQRqMtMcC1S9uYXbxgXi8BhkuaAJ5D3DvALeGpA4JTzunBs",
  "key21": "Hyvox7ko7krUvB2AkEp7TRjWD73dtKTikbTafSSbfMcvnuXfnD2SZ1WZ4NGYwaidmYCFrESrf7VF5ENWPAgDtEr",
  "key22": "qn7FUdnb7LsZqBYkW2XcsCwNVoFdCEd9xT4RxH9MQu4w2ZkAd7fisxQRe5cpnhpWNzyng6V3uqnu3e5FBSi7cCn",
  "key23": "4Rt8f9UVmMXpzLx5ydYqry3PRikVVtCPt4FEPWWgNabUKuHgEhFarVNanY67PF9NBVAdVnrGK6ZHEm4z1TBRBVKx",
  "key24": "42kDdUZG8MuP16rxaFt37n38jVFNuTT5tD8Ch7mk7jwHGCunwX3f9me5mGQqm1Jgn7SgrJuWf7VDH89BSVWUBHBc",
  "key25": "4WPyW11oPjQpKKAeKp9WrRjUCoQjd5dziPzMG3FhUUdumPYLT6PiryyPj9RLzGaMkAhdmY3BCTsgA1ueZrjH8Y8T",
  "key26": "5PrELmFUVkgUiie8MF23cAgM192C6PYQLft5pf4crTCpMo58AXLAkD4NK1kH7HfuZi3VMDPJsTwkzCjT6sfJPRpM",
  "key27": "5fY79jHW3YZRfoSCutfxSAkz6xhL7GBQRrophQ9mruTJPR7BrYxGXy7653xMmy5mQw6Yoe5RfKqGYU7eRmbDmAmQ",
  "key28": "5wPsb7SWocc2pfTGPZohGkZxNZnBuQt7xdGd1FSsBpiLsXsvT7HHpm8Li8MD2YFC6e9HtuUrfjUn4QgB7Ah4ncHf",
  "key29": "3hisnoi8S2s1diXvKhqvcfH2e7TSUHtBreP1J2Zz6VtF4TGu4r31hijuqM1cepNWEPkDfxFm87MhX62q7h81WNoB",
  "key30": "2VJzjHsHGgJNViXm94PXUSbdJcjmUDVBqhyDvggQAvUpbdv8hsYDif1rQ4PAncm5NkXRnNzWqHvXyNHSJpN64RoX",
  "key31": "5pQDGgysUKcShsv3ktJd3pefdKG4UTJsfif5Ef5eF17Vade7WfBFZsznYevtFoRETKUAdqDqLaB7LBjgnjDZgdrp",
  "key32": "41ca1ZXRcqqkbF4hne7AHuHqH7hZVCWDv5kNhnAWCyZUZQ8L1mkwA3owcYEouB92NabG1w73772mHf6ixrpbzCZx",
  "key33": "2qRpX8mesW2crvZxuqSpMHP7Zv6ncMKDc4LDom8jnmgHxwUxBVstLTPHA6H2RF2KoxAFZjnrzCf5VZNtNb782JJD",
  "key34": "3McLGCAkf9J7WBFT28kHyKA5BfogWmtuYMZ86UjFMYr5HV8L1rxrYujDgvTB7AyRhQHzvYXShKmdufY1ZhG27i2",
  "key35": "5K1g4TDSamv1GuqAVgTXkCs5kK8bHu3jB29odnGaaQnVKKMAh4yeLL7vSmUEs2ZpgyzFup8ZpjTdce4Dzz5iKPGC",
  "key36": "259QTyT9iAzSdSGJShVtbBxNZDsj9jhcxMshTqUX23iEYncFyAbrsukjWGCLSiknkwvenQsMXRg86BVNgsxcH42a",
  "key37": "2DQiyjd9yLVdbJTmaKpSQh54sedtKjsxeSXPszPCdg2S18ugNmApMA3fs2jwBAuYEHUeiAKc5UaGmdFeQiGH1z8F",
  "key38": "2Zxo8Bnvv7R9YMwSrMnYRH18xaurm6iYs96pr32T2xt7xD7u4NGqse2kEPtLgn5aZy6S5CfPGq3vdB4fM5tHsWLt",
  "key39": "34kLNuJH6eQFJc49mgUJmv8qJYpfU7KYBDUaXKtHqkiUUJRKzgypw5AmYbzm3rZhmmao8PdkUb1th2hCvTsNPcJM",
  "key40": "5va6HYMADQpv9q65PFFKvvbnVi1rHNPbChiKN8N1ge3pXGTEXFvEHzZAzfuXVDn4Jvp2z4KFwYkz7iuVXdZ3U7b9",
  "key41": "3fwxwbL1K4n94RTGRGSZhEidA22jHBJcupUMuaNeH9kZPZRZQkxvNJ4DysNbKnMHf1PVjpw5u5eSQYJpXYneWrNK",
  "key42": "67hH2qqPkophttJuvgqF1LHf59VormUL6mumr4j1D13AGCddYzxqeGqAfa74pfVAQsz7yfGY3LN2CiW2rp4f5N9h",
  "key43": "4MdetHRJhmtiVYSsbaTdzxA9w7wkzNBGxjx8HE2q5MiQFC7msqU4uJPLE9a6nXdxA8xbpWcF3NDjhjd3SCXkpK97",
  "key44": "2B3R7aJtmsuyDbqrgzC5nZCypShxYYwrqobm92rfPznUdSndTGD1zEtKzLF8grjg2JuRc6v6HhN7cyEUxuEAkk84",
  "key45": "5e4xXXu16g2a3g4maeUSp1fcaR71KvbU1qynAJR8g7F8StnybTK1nscNKZge4bYymGyU4JLYTZcPWXdjVK17Xwyh",
  "key46": "X78SP6dwbnCbywYX5DgDoK84BkRCe9PPxgL64soJxvrNdJi7m8dvnNgvbCG3aaY4ZGeNVxDcrLf6NtjvSKZAHrT",
  "key47": "5PbXs8Yd9sHZZCoqqdfg4uEmj7D1s2J3f95i6USBoKKAFRZFqJpDkSpAN2sEb62KufWxGJpchduRffEfXx6b1Nf7",
  "key48": "39539h7kjFwg2npqjw8tSDgDA8RbtUZTvJCqGZoKhngsnftEfAF3Hb9WGoFGqEKcK8xKBekZxMUwYe4LcmCQgWwg"
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
