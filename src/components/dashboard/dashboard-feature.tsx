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
    "3y9aUPPLFHqZhSDaeyPmYLhnTHf2Keq7qrpgiriEJCYHcsmMSdLgX5rQZGJkcsvkeUNNMbsoL4UXUWssNrhNRQ9n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7zaXAmUoRxHdesz5KSeWpg2Ds698czhHKCVouirZHFkRQUsrT27tHh44A3cWTVzMawwoiGXTcu12ERXvkUiZZTC",
  "key1": "3NJ2sdJ2gRwWb46LM3gzSfjuZiMbt6CD3GawCJMaunyCBFYuBhTJa2LqxcC616YwtUWgAwZZbkPYbttKuhKPGB4Y",
  "key2": "3UN2S1ZaRbNhFqenoJjoUSaHSm8tP96kWTMZ5ZkUSc1BrHAb2rkVRmCErwZaM7Z3YekSVGZA4mJWnMSYPXC3PJDi",
  "key3": "3AWHoeaVrkmbiopWV96knchLognRQMQXovwU2yuz6RbNAixscQTEmjP6fdXDJSgxZBKxrqmdPoMvb6b8hAwCQRhk",
  "key4": "3g7vxMwNyTp5EGTMwASN3JsWXY3v6CVkbYEPdjDqb8tQQ3szBAZoF6K4SfoRNf7nneC4CQQFuKtBkuYsTjjkcJnZ",
  "key5": "3MsvGkBCYmPzNcjkyoaBAedbLr32RW66GKdpVtBTX9zFkjXRK3WmkjLx3Lz32zH2ZhUfpfxbXMoANTT7KqwidMrd",
  "key6": "EBDePbgNnTa9NKFoaZoHMBfzxNGxzGgrZ7QD3YiNwmTxtzVFkdVmuBWJTPXFyJ4qxx8NrF7UjVC3FKfT82tgmGD",
  "key7": "4viSxDsd3V4MBKH8HUrY6NZLHVNxEjVeSWxpc2YBqSyhx4TN9uWgKXZrdjc383DJX62RbSoE4QFZJzAufjKUCCLb",
  "key8": "ogoYHwRCX7e5mr4eswiHbJuFou6yWfbNui2E4dJ9Br3fjsYLvVwaqCH6KQZ5WC8SkW1hVLEDjy6dezj1iPPdjiW",
  "key9": "2uLkdq6VxMy9VjCjfY8ryCJEZLHBRN2dxvZiFkeiyM8DhBtrySsoRnincEyuLwPHRQzwt6pC6YzG3BtFT9f2KKTM",
  "key10": "5EXMa9TW3QiAzimiNp6AtSAHCt7kGTrNG3rpnp7eYLwprZYfXw8svtokfSr1EirKbRvJaXAwcUh4kQbyK1CmShK1",
  "key11": "5JqaoQt87Zf6mCPQaYJZ5pxGXknPDNLDJuodWqVb8fKcBpYBFVkMZVgu2rNEmwwt9DG6FHgobDRcjJvigHs1ssh7",
  "key12": "4koAPHx83KBGMDSp2szavy6785ruuPLaGuFZUunuBfewrr27TqFrnKrtgtrqRJeBbhEoywUkFUCmBjx7SqHjrrgv",
  "key13": "3wbkMExQbVBGpoEoz2PytnKtZpSUbRryShnxmXo5aYbbBUpr5xQq1euwmBNyXgArBC7aT2DmcKq75DgKbhbhk2GD",
  "key14": "4cYvLN7Q6M3bpnkRLcbe3fK57X6LPhTho1JTPQ278CVN3ngrPZxvakbYakX7pBBfvPi2bmhfKVp1Svm3snDAH3S1",
  "key15": "PTMK5zSemfn58pMoqvb8TQBLGPHi4k3Z5A1tcmsy1XiP4T1b7Y94deXxdRhwUsC9CowPPDsUTYGRQdWoai5JMbj",
  "key16": "5pHeSFeedBfSm7DcrrrG7wmPZfm1VFb8KdsUpac7ZxFBvm42H3ocXZv3UDdQTcZj2a9NyTVV28eRmv8jVQrkRpAR",
  "key17": "3puPhjPdFBxQg2YJAvmpVYaokpo8NMgULo2yaGPm8hUUpA2bXk5i5vzHGvp2anPCNGuUNUqZJH7NnAxcPtqKfJR7",
  "key18": "394eX7VsdS98nmHXfCB3x7Tdnbdyup5DeZ3aUJtiZgN51GxxaM8Wz2MgVPXLo2oRdzGGCeFakEmUY8Eqx8ecQpzE",
  "key19": "48hVFaK9qhkQ1QsnBhWWqbhLghEgveLaACc9xfKdcaWZjAVTrRQCx6aDQTpRKfuLeXVHhRyA1Hz78XKoD4VxriY7",
  "key20": "4fkqpvjYcgDKcUSUg91mu93e3LdbvpjB3DVZMJFxJdnDP3xPzzD6C3caj9EpeEuXuq5BxdH5qZjhF9bWaVfeHsjy",
  "key21": "39SJWg7fkAy4VQsu2bCeD2m8tEm9Rqi8wwShJ2V8nUmRxqZ6Qbv4acaQAmhAJPRpt3r97mJNaJdNH6xnmbvxSayM",
  "key22": "56zdfLdkxU8TqztKjPdRm5R2gfyEJhoTwWP9FHDT1he5Hp3kWPQpSr2xEninWkiBaxjLdSTtuFeFeQTL5xh225tg",
  "key23": "4NeBtxse1PC29y6FEy8UKNmDU9GLVSLbHpyVZyqdu3ucBAsXCMpWcZ7sqQBCTJoQbwmFrZeUgREoKYdawUYbpyVD",
  "key24": "t7AMvcP14wEWkwhQPTcuK7SiL5xompuReUt44wDD7HAskEdGAR21cAAR9kgBxF6JKkNtHUTADLt6S7LJRKg1HUX",
  "key25": "3QYUx2DZW696uSh22i3KJ5FYh9x8Vi4BHghxoc1PdZd5JTMgHfh94yYxJ1a6TgiAdBdsWyCc9FG8xwX2XF2DEdfV",
  "key26": "5qPpopLnmnkxUoU2GWZnFVuRnd5VybnSuBzycpEjZKSuuYkKbGqZqEzL4P8n114V793M7p4KXgfKHHkbUdksW711",
  "key27": "42DBcSyWgZYgSbfXDZ8mo2jfV5nuUspucTd38zZPEPHt8ypwXGgeVvqdxiRLTP5wGLdB63kZCvmfo9HxN4DfBDmS",
  "key28": "553eoLg3BGgCThnKYYazvJy1eS9gALnyu25BkjoCgs2w882xtS8UaUTLh8h9LmaJJbBFUNXywtAZ4zZRHjL7pyxk",
  "key29": "5up7SgWJG6dakaczzBACxoKVjcoeSfHixLcurFNCzrX3PwffUpKx17cxPw12xcjp6HMFZ17Vj38fTTtEpMS5o1wg",
  "key30": "P56ZGWD8TNcbv654BCKoPUntXWSkGBfiL82jnPPq899XZ57YkcAwUyyfuZmGMotS6yQ2daghYAmpnVF6r1nTpKr",
  "key31": "z8e3b3iVgnXDYpG3ZsZsm8hr8UqTWhKXrhpTsTG568cPrdjudhJrG5xwMecAE1HvKyh1RCUQ8AMVovzGzYSpkga",
  "key32": "2YsiS4xPDZPg6hrkWaEkSr1kv4m7coT55hA14ors42hNTSyMLrMxtnaMvXDBwuGNAUa81QW4NZgpQnnc9ivCB4oA",
  "key33": "5aVSoa1nWS3YDmeKWUppqFpFAwth4ntrDtJmK4zW5kndqM7nFGQDLQmrz56M2DkAh9Ep9n1Vr2YoLjPMReEiwPSp",
  "key34": "WdGR5eTnEGrMfDPS97Bcj8yNmwSRjDBjZcF8MDSs3yXPtq92RMLhpGYdcrSEhXewsi3SYzTrc7iJWU9s1kfRNDo",
  "key35": "4UoWMrnck5KL7XbyYEeSZGxDmv4LF2HV7yMs7NCEUikSpWdZBKBPLdCooQphWj4MH1VVWKFhcG2Eazv3yA2WCQLY",
  "key36": "2NXkLHtW5FyuxomGQwBLFjWnBz4APwmdEy4sa86njpuCjf6Srd54VXTi1HydsaHRDHvJoNZM1cb2AUoHt3grqiDi",
  "key37": "2AhEajt6wCfWMEguL9w87WjWhF6aAeKLNqATkRvYXPMe8vXRqWDEruycTGjUdhPCaPjmXrRq5S3vc4FR1JBZn4iJ",
  "key38": "4DLtxHQjrXUGuokKYbUNCHJP7i1DCp1T37Mmg8QCZ2BpP33JnX2Kv462GK4Cn8mg7QtQeKpkFmwoWfBhQf9A8Fzp",
  "key39": "6712o2SE8v4DhuP8inc3yHDKoBxJoejWQjMottu498ebdqFvsaQtECxGTx47itZiw3youjMFytajWbBCs4VDNEQ",
  "key40": "3tMH2qCpVEepHne19V8nSjTLdWWcdsB4oM9EvgQRhYV2ZK2DRprhvngWEJc2BwYjtRNdBUJEKtL4Uf9zicUicNH",
  "key41": "5WhkSm1CiWDPork1nXeBCSCagubeQboMFnQg6qX6auUaGAfq6HsLSPnyE76n4hxXMsiCvqJ9T8nVCevfkUHBebV4"
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
