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
    "3xTeC7XfNg14BtDaYsmwVBT6DDUzMJBM3BS7mTBNCDYo3xdHWQZpfD3LGEQ85xvFVer2hf3dfyTJNRYXaorYC8w9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dP3LAxV3hTXJCaaxJL9BreEhEaFfeLMX2152irkyEYyGSrDZ5i4h3LBPxpMJJpY7xTLTfxBgKw97DL44nfftjrU",
  "key1": "KwedJ1Co5hxAySWqS3UMgHACVu5uMHyGPaVKJLVCskEtct2gQ8viHY69tKLiX1m6P2kKH1Zan6EWCvLYdwT5sG2",
  "key2": "54RgVtHw9M8KBKyF3XPhuPgHgPHvQ6K9D3N6boKcDRkjxmwDXCzh2XK8aQLuGEXpwswkVdf5Cn2G8KMmk4Kf5p7x",
  "key3": "59ZB33eonS9cKYhTGkabedwhYMYH4pbiK9vMPAs9uNzM3EargtbYyWmB7XWFM9sCuddUViuA2pf6MfzajoXYihpf",
  "key4": "3RRfppT5dFEmX4eMTgFBjS1Q8HMmRXrpSH9S2E1yiy3z29RShzrKBNW63qtym1q5ah8tQ7AsyatrZy26TcmfGCyh",
  "key5": "aRZMtSnpvbDMZXsHdwnziPvDpKQVFWrVCXUerY66i5C2PaGAiFQVms8eeSNEatc9PwiuEPs6WBgcKqviKqv8iJ9",
  "key6": "2DeSVsdUD36MwnwKVh4qvz3UaopUMBtwSQ1Q7ju8Eks4C4Lwrb2rFiPorwawwojBfuT2d67CzWCgtyXL4ohKqkzp",
  "key7": "3Qc1FmysiULVfWdFdbqDYvS3HSCtuVkJv2xf8w43ZycoHeW1JeMHR7HKZop2AkNFdAgNYNoCs5b8GxGXQqq2G3ux",
  "key8": "3j1sEcmZ3ZP5QZDzgs41hHAZmknZW3zrHxAJrNcSjB4JLKFzGoCB91biiw9nTpx6j1W12LknReiXamT7AsZhpvqP",
  "key9": "m9wZdC7UAjEzKiPC1vQbv1gveERy6oziPs8EPApimYDpk4Y5cp2Rgf9iTjAFjSZidEJifESmpMKSf6WcpbrX3LG",
  "key10": "29XConQQgZhoR9waYQt9XNLZtsekcr5mTjkCxYKkPm2hoJSTvN1xZxFVPKV1hV938uXuQKrH55msG3Mf4JPDNYCq",
  "key11": "32B4VXS7ijHUzUgoMxmoB21LDzaNd7FtAGJte2N7gTnsTjLeqprqUYL7gHMs4gDPfrNc1Rv6sB6cH6fn4SxLx9S6",
  "key12": "ueftGHsGEJyfZpJzozTTzbgjuzqsBtaFgR8KByZ4KxcjossEMquhaGqTwN26dTXbu8a9KKpUovW4eqZ5agC2jq1",
  "key13": "477eVXwRMYpfPjRue4C7mpzk3FKFvNCF1m8SpDJvNqJbz3kYzhsCZvBndteC71eezH73oLT6fSPojKQrLaPkPyyF",
  "key14": "22JQqDLDJjRRkZ2PT524w5Y1jquhNq8eMgqaisJjc6UdNzoyjMcvU2tSzYLj33cAj6zBMPUTF725R2avdXTwrWVY",
  "key15": "iwDX5fpAWzjiHHpF5o94WZ2kHx8ebnAgoVVwLe9vRh1kEt8jHVgGZzJTD7V7qYupMpcJrWP2hDMs9CGHAn4x7vv",
  "key16": "2gneCH3HW4wWe9D38yHPJCQXvJHUUmonFrfnDduAhaR2G7oEgxNajbzGPBGSgJxkfCh7ncCpApPo6DzaZHS1mrG",
  "key17": "2bSnccMXFeKDGPq1ZLSZ1S7Kg2eHQNwUYUxpRPLoWfVcrLNCHj7Lk6CbC33Y2UQpnbs9uPg74MAD8Q2g8CCQr8sC",
  "key18": "5KSxbUK3AJVS9Vg4r7aXcprkobYYqtayNKzcLqPiMEHU628NZnbUMfVugYYdxDReNNPU9QYP1KZFYk4rirUUQKzE",
  "key19": "2tmXnnHxqEa3FvuWHVfaaUAgxcQD5gcx84TfQ5n8V95DjVjSFTvxQcfGp72innkF6jB2vwP1TpF1itins82vRZRh",
  "key20": "587BK9HRovAeJufdKDZZkvKw16ZFM44b21fyisKCEcMwBn7vXrqrdi67URCh8Txtbr6ZMtSj7nQx5Fpd8heZzej3",
  "key21": "43Xat5WmTWoytteH96Ngv7ww9gsbiLF6aQRQ1QATvDs19tWtCi8yxuzcqna1BGPR5tmE6Vc4A8WKus1UHo1dLJMb",
  "key22": "3QGBodxtk7zrCWD3pqAxu4oUsyJT5mLDr8nzvoZYd9oGYEgZd6g4o28p8TJwVRd6cDZEvMbdsHvTTGcLCspMf8dh",
  "key23": "nFZeZYt9k9aP3HQDP9M9ZA3udLJVXNHQSjnmc4LnrBUp8kGgx1sBGVqmw5NRjpvYPFvPdomwwAf1FUKDByhh3Fx",
  "key24": "arsAXGFdzZgpT7vgr3WNHptoYVQJYxTe7PWPgiEu3gnMJ6xBF32TQKXf1tYcXk6RdhLiAWyChzd2AtjFbsGg9tC",
  "key25": "2sLDohMX6x9J6AwCzvjVodtUycgcZKyWBBJRF2dkw1hw5du2GD9Ly9QFRheGH6WnJq29Jgw1KpJ11ZZ82zMowP1U",
  "key26": "5eQ9wPkzFXkr1ghWSbi78f2ZExhkGjArMdzPug6HZUHo8V6A6nh23Y9VbnExVZhcEDBZpGD74pJBPSEioSVAVVSd",
  "key27": "2SBt6ebg9hb1S9uSFetnnBhfbT2EguQFyDm5kUFFLYTboNcGf8Ws6hf5Wa9eqCdCX1vgtoJYvZ3L98Wno3LzjUZk",
  "key28": "5rMLEMgd88xMUk82JqnbxtnGCTLw5rXWwje4yXpQoQodPJahhXALC3jsGinVeBiVvKrvY4TknfLDFiysgqPf598Z",
  "key29": "2WXNrPD4CgeG7KPAsm4VfEAGWbYxbn62CTGkvUZPc5M2aq5iFsszG8uT8yY2afpqn2kXp2U7yzsr8axNRyAG4cXv",
  "key30": "3KYacpTNEfFAyLd86Pk9o7zS8zSLZbcsD3R39f45KdtLQZFFu2xu4vXjDXaePcmqjQ7tjUsV9v1Zo5sysAU3K8eJ",
  "key31": "4i1q4UVzAo2QNGEMZbVEp8zSPtnZzCoKt3eQnSD8xfsE1CH6XdDM2aBRosUMEwz8HGRRTsSeWbMjmGDeQdtGCU6q",
  "key32": "2bvWdWtXuxUzFcEowqrF1vLRd5ipx4V6w1dy22cGFqM3VVWahTGXrjcNefXgwkp2ea8Zb3iAozmXdBco47LztoAG",
  "key33": "2nftpPRm9UaxHTYESf7mGVuGe1G42GKsAhDwi5Y39iDRe4s5naBMPf85RfYrPLWLMDc2JbVvejg94jg8nF1Y3srT",
  "key34": "3uCsXoX89KRYw2jTAbeoPBDD9cMq9udSK5FfSjb3WR7Fn9nfMWDTsgifSSJZp8W4bZVRNwBBPR45TrDTSHhmBmjC",
  "key35": "3wHVMYku99ZMVjmydYbBbZztRAf77BfMy82VkUeJzSqnWiVB8Y32y3sSJT1M64yvfr46MoLC3BhU6Yzdxdi3KS4V",
  "key36": "4BUNvc2sdPqHxwhHPEzxNzrsy6Z3zUo37YRRgo5kMigr7tvVB5EQmuUEEY2PayRXNNCTk137Mv5pVbny3zw7ST5H",
  "key37": "3hWhGj8p6KWUZtJxpiowqRAiL9FbE2BXrxEQvx67LcRv1kwhnCQpfoE5TLLnDbiVWNmiPLtokzEpUt6d2XGHLV2j",
  "key38": "4VnP4yB36WrVT5qBjnzfoMruVpgV8rgEM2oeuukzwxPLtegqcrhT76wuRVyoZMVgtBJ8tHezu7DKPbjJaEksi7Af"
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
