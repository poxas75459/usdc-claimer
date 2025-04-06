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
    "4wXehqnffs44vGb1ccdLqr9qRG8Zd8yN1vkFLWSoXG8rencFdp5nbDeuenJxuDUJKWLdSVS6xUMPt9UVM8gBvDzL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vjv2Z9DE5iBzWFMmxDiGTKU8JFbNm8ZoHFQgemPXbNdrSFP62qKzfqhsMTQx7xdJz2pzG8k3PzoxwtpmbnuGuHm",
  "key1": "3o9qgnfDkZ96NcTuvzBgbnRWBKoWwvMAPgHLq9yhio7wjgw5NQZCpnEPj4YTAsaJKDzCq44SGtRdvBzueQGeQz3h",
  "key2": "4TKUrMqNuChrZred8jxHQzfQeCU526oBkuEWVFDBcjhVHuVZVMmSWSTrVdFN3g3WtennKwiYQtQAsXNL6tM4waok",
  "key3": "5ZPpmS8iy7KbfaVXVfgHZj1fZhEeSUURhdR7e9QS6oJVnHKAiovupVkfYAo8S6mWRgJnTy2rE9P7Xbiq2Jmf5jGd",
  "key4": "2Ydz1dwBtnkTPsgNKgVBf6iGeJXPkHxp9tB1c8M3jrdbsB5M167doDiXCfoVSAeyqQ1QEFVqJvfaBXs3nt369JD7",
  "key5": "3RynvMXSg8nTs3pKojvnnVixWv2Lm2Cy6hcZzdYuTT9ebePLkdQRCSvL8Tohtry5dj47Du6CkBYbnqDf3C4ubeJa",
  "key6": "2WcVsdNb49zUx8dWYC745RZHRUFJkQzFqAAME99EUe7g7YwuoRdrov8ZUCSeTr6Gf1gkiHtK6Ng4czVdZqgwFc8F",
  "key7": "22qLn6fDh2hrSd1vn7UhBQDZM2nvpWdEHyXTTroN1qr2F5JEtHTbqCLdPuWi8wNnkaTjCHZYA2KWfcfsw4Zu4aN3",
  "key8": "5128uLereSXzn4i1zbUZa7uuWSx7teuKKexkpZEpUayfbVurywCBCPQtP64jAbM4QFeBKoC7rQQ5cUDysuiowFcv",
  "key9": "3gBVsmuEmErYLdmzexSvboNGZy5V6j2C9xHC2wQFrcXn1Rgpo5BLw4PvrhAe3FXM6RvWi5E7kvv1EgdP5NXQwA1a",
  "key10": "3jQdXy5t34ZFJ4kKNcoZYUA1g5raaBAKjPvNKsgbuoqKcs1Lcbj577dzSRJrRHMmL269Ke8jNvRGmpYSdrPmud8i",
  "key11": "3poMA7AqEA5Ygf21MKyERBEXBhRE7GcNjYRGbyrBTuie7kV7J7NPZJMn2pDZ5Bk8CEmqourg9CKEop7ddn85114c",
  "key12": "zb5EZZDqFYokYwBEhy2HN5hCDgXpbdYL5oCDVBP17u55B3AP2eXSHR3B5gL4BAKQNdjdQGeJJFUwF8m7nCU8g3D",
  "key13": "4ZrTPtpojYAzQZxPaTqqrEbU41Z7NMn4DrMmLGhmrQmRgny5d13cXwDPXYhNKm9iq1aNh6ivSTsbRQgwzb9vzbwm",
  "key14": "39wtdmNLLRCsoxfQYnmWucSiTrGJZfZooJceADrvir7WmRPUxbWx7zhBPUVdbZsNQ1Jbt23MNni7iVfrYy6gGhiw",
  "key15": "3K7Sdnmv61xY5EfVGHGHMaYEg3md2UDXoJK4w8h1bYs4vxHH3u73JcyNfmR6UeDvwn6MfSd88b3TmM1AXc6yCfNQ",
  "key16": "2TUnwZXKC1EsyDmCZh5hLnouFup7FYhaZNJq6y5UWkqiwik3AsNjzX64QqEY8X2HP2cPadAhS7hbsVB9bmQ4fzps",
  "key17": "4kvGW9HrmQBQhXCP4QPhWZWSjaxdkF1Res2xkeT17Pkx4RvtRJUnerZVFwpBCyGRovjPdZiPERqeebc5JY1gyoU7",
  "key18": "2AtcBc8NzQQRbNTmt1MCUH7FwebnNf37D4g6npeNkKaV4Ky8jz4nQ3ULJVvydxm2HaV8YKCGBE7GFXtjuGfeWAUV",
  "key19": "4zT7hs7PtvJ2msCggf4yJvhPj6kecWLSSUF3ib3c5S7narm3bpGPy5WKSEre77SG9h2j1ZZNhqXbBMAQKdCG5Ji2",
  "key20": "3jxLpobVSFm4qUsT5Hgfh2AfWQa9tMLBYnqysjSGoYLFeE9PYXRzDKX7qMhpUcCzG9P4u2fXGDb1zLaoPUV51gvc",
  "key21": "2RAVQGvAyZMZhKxeghCNLav3EnQ4VFyNTyZTiBr7SfWVKx8sRZR93khy1Jr9PNfod6CQntF924QAwwJcxKSPPaPD",
  "key22": "5dSvGqV9PR6JhY56HGHLKnJcZVdMX9GZ2wXeWX7VTjWxXzaA39TjVBztsuvMRo7c7eAWKuwqTgkGZmT1yoXHswzo",
  "key23": "32LimBxDPd6E7L3c6zkMLArK66GCLr3fF8yjfGpKrftRMvibv1WuSb9bCLK1xywf77bW7s1B6MZgunnrLtUNhyqa",
  "key24": "27TStxN5hGTary66fYapCj5nRTTNw7Uuwq8ViLaYvngH9Q2rXT7NsBk4jBoqJazqXkSSyKZP6otWBFUnn6GrCnik",
  "key25": "5VhXn5VEDgwuMwB6o2DZ2MEHemHPaSDdzJASCf61AtF9huRrxPWqVH8L3oSYjWyMdpuNWU2WbPyttdGCsJNfLM4z",
  "key26": "2uALtTzUYaANZCxm4MvUvY3dbWYV8i9VithxHpe9A81bxCeJFW9Ge96kSTThVmy6uJ3eUNHxZatftpCxxNSNFvSv",
  "key27": "3EdcfXwV2yDbQmDHtuq9UqzWyPA79cMtThhatYvdUisfG63Rq3a2aqYzGJDyEff7XgiRisgFZohRdLbf3JuQnAR9",
  "key28": "53gWBv4Ya5JcbChD1udtQyWZ6ns5LhJdJ5KdZPhzQgyema6fAQKCmftkM7iPbr81kj6QHSWrzwhPehEjCSxET2Dw",
  "key29": "5bxL5cQoWYNMjU25N14RDibrWyfCPcQVeA9EERLAgutcNdgkqJ73n9eWkDTmu2HS4sbXgaa2pSxbB3974H5QDTd1",
  "key30": "3Sce38pwS7ugetdULzyMpqVGprE3jyusHz4TG34kCaSHe13n4cvvSNuKG9fpbKLdr157GRChgwgF56LdtGw9VRHL",
  "key31": "3h3BpT6mwRAVHqayApMhDJ57wNo8kAhMsAQfwCeRyeLAxfVM8tSQS5CR4Y26XgYjVQj17HsLQZpbD6Kt5Pc5tGiy",
  "key32": "2EtxKJpukpQASenqQsnppZZ4Y23EAcJzL1pFVUwjqLMhiyj7yFccqeNGexkRM5TMzKSj3ZFDMLxN6Z3Tdi1RxwSC"
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
