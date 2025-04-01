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
    "2arWXXqfWgk5u1WsFxYxgSnK6tPkU8djrTwKNuyz9qyGNjWSm9EPvXHzapUs7soGPnbNYzdnkZMQwjna2RzkgXym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iaBrwRm3ZSi8JaGYVQGbS3ErVfB6nSuuje5376tLkXSENKnSnZStiP49cnYHh496FUubFxHCZ5XZanQG74XpXtr",
  "key1": "Jd8VJ6wf1Yzg94t5Vzbok79NmYscsGy6546BtWfzVwCwzGEZNjEuV3KETrCdg5T4F3kxD21FKfm2f6Wcin4r6ZH",
  "key2": "4eid3J37iH7Tsk4jHiWS2sfFNHUGt43pqwwdTPb5UYggC2TkbLAoKgc3riE3KB9svcvpXZZgv23qwD8kCCjDHnyq",
  "key3": "sVVAq51f83QbAeSJHUhhRkevJuJDruE6AtSMQcXt6z8KC5Cn8r45JPnomYcD8LBDU2mevD6yJJW66k1dAKYZVJA",
  "key4": "3U7G2qqJVNctxooipZUrEKUhF4vQLFNYYAvSRWtppWrrF65BT61uKqFiAVhg42r4LzoKDh2KwJRvzGhWMEbr7zKL",
  "key5": "5GgHobkDZwisN2rkpxMPqLegQCgbdfWh7dxMAQaJ7YP4MCFx3gWXvpUSebS1DaKntcXnBFiiQhZnHKpTnfSvqJQM",
  "key6": "5WRx1ZiXG7HzutXUMCjqz9DcEZTE4xJ4JoTMZ8Z7cSQtjPFDSBS2ruKac3UHSQrAeN9NffK4HEnQ6BHBfRmJPkYU",
  "key7": "TjUzXBZ9eVVvTrxUTVNuq9NCAFxqHA9tYypJSBz5vCpsKq7bdUNxSSQvZQM42Wj8CgTRFun8XiBpgMEocw7Cgb9",
  "key8": "E3dQauSkiD7q9AHrNZd81cyjJFHCyqeQZJrD1eJoSbBr1KM1UNx8WjoM8vv5zYmGL72K5f1FweH6TN6PCp1CyAH",
  "key9": "2chtZbcB8HU3EnJBsP6B6S4WEQ5Apee5CXK1R3Q6ynDWR68rv9z75h8ciMn6GvpyXV1VyoACZnipcJw5nHczapUG",
  "key10": "5QkdYpGoG3zCXA6mx8MhHuVrPBqeMYc8TU9X1vSp6bfFzb5LWjuPB8uarF3XDTNqSiCVXvumvmzJ7e1xw3d3acwJ",
  "key11": "3LLyCuQgW8pLTxLkxy4higZANy7d5MKz39bGURbSWw8dn7arSeNpY5FA7kWKaWiu4KX5dUrUMsUXPHgteaZaVsno",
  "key12": "4rFBy4iySuFjCyVQyBBTo7v1YGLQSUrbo4b7XUXEz95JVDJUzSJhh8sPjCFAgdRAF9nbZjRt6kP28u3zKt5avi7A",
  "key13": "24WHTbX6xmtuQmNhz9QwQab22LaFP8v3RwokYfwwipTEpVqmvzVKbSkgafEnQE8w5EPfuZDqG5KbdTrGmBboyAnt",
  "key14": "3VqwvYbNUhkSQgLhMFdY3Ldj58EmKTMsDp45CKUP7p2zbkbxiKyt1H45FFkbLXzg5rYrR7TVvi47LExHsDTL8vN6",
  "key15": "5MjBQjussy4Wiunv1GHeatucqsiDnXQbefaZUMzhthWQRthw9yNYqjNQowvWzdGKbfUsQ8L8vwXECpj1qsUWrw8a",
  "key16": "4WPp3LYo66j6ACUvec6M6pZRo7oeFrcyzrkX7BntJ19qph5dkpC2pPpY9D6Xm4uLi8Ts8YPhkzGw7kkcvyPp1qXc",
  "key17": "3tcKAkyLWEEZgduGGRptZU2BDQWaZeJNc4FkYPNbXcLHLhA4y1z49W4WwvxVB63TZnyXeVan3qCRjrgR2wZ3mLVN",
  "key18": "5rUURi2sv7t3oFoL7sqg78nAD81WpuKogr83DZpBT1m2V78VMC1WptDxCxoTRa4rfUbJHan8RwepxFFVJ3PKjWUP",
  "key19": "2cwz4h4B8AMiJuW9v3ADPWy6WUupoYjqLYwxM1SsLiurDeTH2NCmLTn5h6qriydhQJeDGETonkVndDoWGpge1Wgz",
  "key20": "35jysaAzjLrEprNSEuNaz6qBycTuXUJTsPVma61GuGYrno3bxN1LUztPiuPQZJb7ovPSSJrnedKcHvoUqN2CBooA",
  "key21": "3bw8tp82WZvin1qh7himBCfv9EaNquzPAmVbkAKn6XX55aZY4mDP84tUcfWz2T4SauVTB74dArTrfiFWpS3sxJ5Z",
  "key22": "vMZw5jfHWYKknuBRzVNBgWZpsNUnHh2s3wz3dMj38bcCNyop8yqJD7oAGxSxHar5FFADTkU5pG92KuSq6bSHZjZ",
  "key23": "55hzy7747kXKtmfNFc3nLijo7TSQdgzVL8PteMMY3L2CAWMauskwRVkpL6Y9MmgR7sKNTp8E7FqqNxSvA6MgGgZX",
  "key24": "3yWQ1huv939MVv3myG3NEvHs65E3hxRZvxpTA6D16ENhkmK6VxCi8L1EnbF1bYWhoprzhpnJjoEa2yzcHB1CZaoh",
  "key25": "3zciUNkfFEc9k83HRxuLVFfsgQ1qceC5dAtZsEtdKT2b6jidZj6Y7W9p9KFBGc2RNdcnFzmmYohVr1wTSBMuWnvA",
  "key26": "hqXb3XydsYRbakPhA8K4Au37PjNzBJeQhBfYrhHmABb51MDvXRU3FXd6UQB3Lf72NsWd2YQZ3WKbH9srkQtTPaM",
  "key27": "3pSS32DGzWQXxizQN8SVcRtDez4F1g4T2P8tRvYbsDkGHhnEkWfxZHm3VGLYai6ZX8dUbSUigmc4xn7UMrsJu2EV",
  "key28": "48FMcFxR5QfGfo2L4hfSkH7zDuP5DWG88n4mW94JdcfkBbq6qvf1xtB6MaTBw3S6pVEGYfuujmo6vtCUTi2eL6D1",
  "key29": "5WskUekQS4bBLXUm3V8EpeisxnJsM9TkFZxqveyCamya3W8ucjx9p8qg3jCqrXpaNTCRVQDY2CCJo4HmkErLkNJH",
  "key30": "5s1T8jSbYMXRiTp6qyxiVeZSUwipHZct9o78zMLAT7dfENmJE6s2Rsnjeh4TJWn2SxAo9VQ2NTenywLdr9MRES21",
  "key31": "pk4G5AXZqdn5nXgCziWVnUtd2zNBU6aResXEHqyHw2E25qEeNYp1VToKkUTDWU8N5nxYGb2i7P27Ui1SDXGTAHh",
  "key32": "29Ry7Y88rG4kCTwhts39vHbvBbLGKCDsXpsqb1L8c7F6HfGT3jYMa2e9z4YtYKwAUpH6MWHVxfUhrqzaEUkrtHMR",
  "key33": "8GuZCSgihvFaGMN9h56pjgEgo7u8JdiHEUvRDv38uQtPajtZeMNRfiLFgAyPVXuvk5gzBz2mvh6P17a7WqGDbp4",
  "key34": "5d1wJNGmDnnYzK9zWPaifS2REj6DhPTGJuikYkWw12h2zoTMmLCaWpQpddERUBwY7WSHJcK7HuiYVujjvFZiTxA8",
  "key35": "XUxmDHt93s2fUEzunFZzhBr1Htdx2XPhTtAGdxxZ6TVTg4UpV6hMS53p5Wi3mbW71doL9aDFjMd8U8LE32LEguq",
  "key36": "4ksQCw6AmusheimVjf9XNfkZTsh8siKznaJCjBswyy4ww3xx5P9TojbeBQTMrcmBdbc8fLMkQ7iL4cowpN7dfuEE",
  "key37": "5rj1otD9DGuuAWme8dei6jsSh2ZyycZZsoW9KBmr6RxDgzQ64mmnKSiwVJsKFNeiUDiSK7dRQUJf1qssZo85to7w",
  "key38": "57TYL9wnAhJB66wvTwmRaeDn2uVvpBuV817LUooFM5MsGar6diw165xTvTz8mUWXzFydoAc8SxHPX5GmMNBX6WRB",
  "key39": "2DNqXE7HuNrVVx9oz7ZexoEpohHB79qZ7dZLmMkJqCLo3VQGYfj8kjaN9BAVUBM4oHrCdmrqJycE91YSu4ALPeJz",
  "key40": "uu7e16mdLv1RuuK1RbJ1veu4QtfGWtCf2tDdPLyezWhRxFELXcsThV9U4zKRNWjv1v5L42qYwkvPPj75EqwofNc",
  "key41": "qYJZxktFc5VJbmohvv5qKRSVJ3qEsdUSbukuqMtwQxGyZw8Nimv5mqf5GZMkiCJ86bfsdhRkLU6B8QhMvn9eqgV",
  "key42": "45gcBnBuzc62S4Ck9tQBs8XLi9f8N4SDXPDHvXMfGrfVQTBjSC34cm5uhjs3w5Geuc7Pw9XuUQwd4wpTuB3u1n1m"
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
