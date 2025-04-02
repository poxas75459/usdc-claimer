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
    "2mE7xtTdmdUkfjeqqDcoPPNgMAKnFXD1Y9xgvMQbc976Ffw8nnipkcBWgFgnbJQk74RmY2DigAPW3bsP3ZWXyDvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L9AHR8EcxpneZWDrWaeetxa6WD6VPbqjucHngmqNxDDraNjwVnSbm54j9fM7TZUdfK3BRgBzQS2NfnoDFQoXXyd",
  "key1": "xe4cJLQKSdbL1L5585RRbRu3RD2ZLtNheyKxzRb8cjEcPYJvP6oKJNXtBWc7d5v51PJooF5PAFMAyQ33FtYrBPM",
  "key2": "NPjAa7Pw5F4DWrfXrBPniWPbZWiHgWv14NBFbn2AivSGgDuygMzhstSwry4XTy6xjQndVCb7CCBtjyGp2wPeDbc",
  "key3": "85jY3UjjzSbFDrrPN384FH2LSc7cuoCuRppKYMVFem6iF1Fr2x55A3K5NiLqjZoCakd5SvMemBKEFePZnSB7PY5",
  "key4": "64c9Yxm2J8M4NtMz88XLjhDfp3DP3PfivxoR3GWo84iwzGQQrBfXJ5n3WB67MFrWftCfkNjhwXcS2QWbAQASRiRV",
  "key5": "5nB89QQ24aP3p85R9nRQzGHsHEADDzFAWj8uythHv5t3b1cYwsMbZ4jcQVzDoPssTKasujTaSHLu4vpyN38s9Zei",
  "key6": "5CHTpqH91kn6gec5bvQVbhpWBrUf6Y2bmixWtNRHJRYhd5fZGA5zhhPHLatCs6768W2NuwrENsFmPjGbKS4cLf9y",
  "key7": "3yEybaPGcwQ2erifDSWEMosLphk2UzatQZu5DdK31NkPMyiv2Aaqhp4meDJukTCX9gE2g9CNVx7ucDBHrj4DoRKb",
  "key8": "suinL8cfjdaBd9V4uHL9vXdRH5jU9gSZ7kz9jaqcRP6L6qZKx8aAoEUMm3fYpTa6FkYCpSPdBCEPeciBn7yaxTa",
  "key9": "ML8HRboRqg12oiM3TT51cjm4s681HzhZhe3K8zDcH2K6UXpHD4Upch2VSTecxs3UeBAxU7Bvc6gAesGM7ZBGZmg",
  "key10": "2CJsC3c5f2o9pjKqanKhJpehjHU4LRD5p7pkxjpvVh7khK6jK2sqwkHzLjfk17SWy1bnw2zyWGRHBsVbauuuWRMs",
  "key11": "3aKH5HCrXfGeotGYdcXNQkXF4o2xXTxJsB414SNYF7fxH8temJtoUScToXH5U67w2scEbdajM9RpNkP63hZt45sx",
  "key12": "4bcW8YH5gXyNJKFxBnYPfF4sfQ32a2cnqPvN9Mu1nUDjPqSjDtZd5WnRXGvAezQEYK4PmkTEkc83B2SLc6MmKJw8",
  "key13": "3xyDSnmYe1LzUhPNMqbbwtWfF7z7uZ5arEZfAjzFfvtJXm71rHCautGCgfGznerFoYFCjjXbZw4mcounUXpRdRQr",
  "key14": "NEB28QjKNXPuhk8W5qKHFSHfa68Wstba58vaMcgdYAjnLvRrFQFwSZbZLGUeBZPNLuUAAYbsRy2zJEv4QkiZBiR",
  "key15": "4np52cszD3RyjLUrsjPc2eWcku8fAS9AxNoB1ALsxWaW4HMQnRG1cy89wEvGNBVFBs4wWMkmzTXD5ZWzBftdCPjV",
  "key16": "5XeHeWQeeUwA6Baf76yPrK5aRvg1RG71QosdMWN7RaEiu89vC1BCxhWtNvyW26FD3RYZtmJ57jFsSeUuMGgb1JWy",
  "key17": "5FYgbZcA2Q8VhRJ2ab7zhs9s13VS4YwpQ3ueB6gdVyBwXaSWg4aFyDgKQUwKpuBtLHzVQajaJ2xiMPzr6jL9k7aH",
  "key18": "4g8JJw8AgBnPJJidAwEAwiv6KiCHjh7uQQnfjRchZSZbHRz6hz2TWphqbaBBq3ELGPNsmTeEFxuSscMbkySCKmqQ",
  "key19": "1pkiBH2HdGTKoLedsv1qCBEoL5LcZd8Neih8JrZewWkAj5SFaQLFFd1159P4vW8PNyqncB11SHPLymYKLynX5Sc",
  "key20": "2d7BTo9dMDU9qMjRY5guMojuvf7BoSr6qBJYpmJ4UnznvZLHY5XSqCpVpAbs6DrXTjaVq9V8bv6SXu73KTxhYBmc",
  "key21": "9KgtnNoyXpSWFRackEprKaPCiqLAYT1nHWe4mm84pxwV4HtUQ1ML2ZRzXXBsxEMvzjcsMkd2xQt5oTaoeVfHhL4",
  "key22": "4NCEdBtSNPCCi7MCgst959ii5ZzVumTJPDRFL9bpMzLS7RZSrauMTZGjhP675hpikZmWrGwYpbvYAqas9s5gicTu",
  "key23": "4FJe3jXRHp5LpBha4PC2QDtDDBYJ6vVm2DXkiJUQ8sMWDL228BtmtfuN2DyaQAeytSXsCT6BTm7dwhyf3B6UQSuq",
  "key24": "4o4VHvmMYjMQKgLewoN6oRs7znVgH7tTS3cEFQhvtBDnpRau6KWy7yVenyuN5bTvXjDERPonita7CCQPjJ4Q6vdB",
  "key25": "3aTxeWXyhC5k3mRZk86bkSQcApRfEXR5H75AVDFys6gZAjriFMJ3sc1LD2fTuQ6nEPXCEhoy3QeR8isuG9tFyDth",
  "key26": "5HnAZ8zFWfRvGdEJRJt443qS2c7yaVHi6rzqPNEtNHWnsaEzZ92U9rqMBN4pYbHCgvoXvM23efQEp1YSbZ3HL53o",
  "key27": "59irGxxkmuuUXDS1ZMcmzyBMS3JhHkWxLiFxAaAsKvKMZ8PrjEUAZn9Gt2qQDcc2fYFHGKykAAdQCKhZie7kTcZu",
  "key28": "4oxskyYMzPxRZhSNcFD6p6xKk8hzg6awCszhfGqB3cNMLyv3xzb8RxBqKwtSL7TTkmLXSyPUwii7bLk6e7DBsXQW",
  "key29": "3bimAoyq4ZZ7dFzP673A3HY5sKyeNPEQai2LhPEdZrD23mT5wWRCq3xTTVA3HsAgtgZnc5kvmPwmArXrjLsXoGYB",
  "key30": "2t7Ns9RcsGTfjxAYnhGfLDhXkpHgX79m5Wx283zq9m9RyZ6b9ExHZacykgkMhCDqtF1YMobA8WkPUP3GjuRE48m9",
  "key31": "5Te26M4sAuF58xCHhCD5LcLY677wiRtkh9ZaLxt2yaGRFE4eg7WrFencgc5j9pQCD23eJ4ezSnMkL8cq481xDv6e",
  "key32": "2LvbxeXvkiUCbkAsMjQuyK7fPpN1iVLhts4SU1967SC2mFHfRYexRTGbcXgpotKJKcYp94zJjC2UtMkiAmQtZqpR",
  "key33": "5SzUoqHfPoBapcMH5986tWvFLxbLkCArBnopQp4SWV63sS37wbF9gtkNspkh2A1wxp7dybmQ7mB94ZPEoZWLWYfs",
  "key34": "DPHDYo8nxTd1D3RrW2h71aN5EsFxrHkCWuVG6foDT7QaDwPXLzKF3AWZjcvq5GPYUD6eJLLqZjPtiyFRmdk5V3Z",
  "key35": "ymuwveN1vrM8QqBJjRBbT7aBHMU6PindKUnm1ohacw8m9JQMBh9Fez9WiUAmb78AD2mCPfcHyfuLjHQgq9D2ppw",
  "key36": "ZwrURgEkrURw4UTTGXhWNtSdn9i3u5mrFJwLeWH1G43dHZRtv6pXfMMEkAu2kdss3fug7idrs9hXzkzb2UC7vsm",
  "key37": "2FRnuwCvy2PnGkB8Yf59fb2svft4ndSQKU2bmtrwy6Jc7XY7QUjhrAbKTcmthQKDUsLF43mksQ91Nps3ysMJ9RTM",
  "key38": "5ZFbVoMnWJgR5KgbT2sso7M8rLDCxxJHU2yohNqWxZwP6dbXqmFh76WmWPGJzbmeduLkH5jEjeQRcBQtVxV2T8zG",
  "key39": "4FB2U8BzRpVduJFNLa52vKSAnFR4FQouY31eGRbP1S3XEAMGF6oKcdXVq9W5NKvsMopN295X2pF9pFFWgCFoWv4d",
  "key40": "3EoUVtQAtkYHsj5UfS4oQmGVT1wfzF81FPQG2pAFSQ9aejvEFTS4F4edQHgeL36L9YeddRjEa2w2nhj2iLWL8zHe",
  "key41": "2PXgfcBaqvCV2BVYcVYCJ7TtaQuhcpL68ATJj7Td9LpbR34DXw4cA2a9NyCRs1oBZiVyGAz6tWxVGPWQunGAVh6o",
  "key42": "5mwBNsfcLHk3TzUFnWrGTjpki6deyfUSE6xte8Gio4feT1K9WasxvHVpvKeuMGKYinAZtKzsTMPgZsVP2ApFobE2",
  "key43": "3HUa64FPmZ5iuxWsQvsoY4FsHy2FdeCsP47Wnm5mzkJnGDyTYM817PUibiKoQVWPHhQJsL9SZDEbZPj2EL9j77sQ",
  "key44": "2mwusnbXgxMhaoyksfGRUAedkvZzWb28uogRGXmWAr6ZsBNyq2GdcKP7HHHS8pRUuzheiy2eqoDa7QwweTeVF4pf",
  "key45": "2oRdKJ54HqiYpZhDYL4fbf25sv8rw1p7J8svT5WznHDqjZeB2i3as4mUNWKvTkcZ9mJFb6rvZbdVWb4BmQhXUjNt",
  "key46": "4QqP2tUnNDs8tSm3dZQScYJD9TaVKRsXvuDj1T14J2RUWpnaT9iGwDsyxbExBhNHGAnNR4N2agby2nUkG5Ub7HkW",
  "key47": "2rRNtuWWyzSPTNaztjTzt5RJvtGtVKquHkSfmSPVQ43qD817swA8TznwPZ7DgnZenLFwVXEzaRHDYHLnVSRVNTTU"
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
