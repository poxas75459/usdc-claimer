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
    "3xgpJRfqG4w1ApK9usvCVHTUeFdao4GMfVaMATCkd2JAbpnbPLncqZ1XbieH64Rzooo3kQifxMd88ujPa9SjMgFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uDRsrnG6NGAf2x2ej1xUM49Dp3qnkr4e4hkmLdfSVsKCpyCAqBWwhCp26VU9xTghcVBn71fQDe8555ybCK2XGvq",
  "key1": "3prWKw9csW6Ckb6pWPQqHcRiSqpc6Hxcw2kAte4G4ZqSKMLataquKXbvbKktCU71vXDEsLJ94YWpAE9CSK5hQb1P",
  "key2": "Sgz4GkuGKkUx3g6ZefLCG2HMKnUVGpJBP4ABWyPYmouek1B92zM4Q45ruTtjaFV7R14gQXsoGe2ovubCTjiqMD6",
  "key3": "4FBA16gNVHeHxT1m2UYEdBuGPuUtmf7SsEqct2ZSVt9M3h8uHVAAQ1SLTgJQBQumRLqAvu1CjCMGG77BmQg65Un6",
  "key4": "2AKB77y6wG85YfZVDY5chvfcHfummziQvmW85jQUYVhwDpFNjDmoLYdrTF6jrU1SxDVTzGSz4WfKs2KJDkpJmbp9",
  "key5": "2Xd56jAjRximvPy7qGtb1RNaKx4ERqE2yKxLxQHWS5BHAM6f7atPAjsrD5dFEqkUcSipN8jMyBcr9AGH5BcWKgkR",
  "key6": "2Fa2unrbSKx6jh54suGm8kV26FwVcWoCM3Pt4eHHn1RiJSzK7DWtrYHsoXfCT3ktHSDJWb7XeZkk25ZE2Mrfh67E",
  "key7": "HuNgYerBngmeA2HBKvpFGKJzDVrMn14wnhcDvvQ3NJQTrKzMFTz9n67NKpdWfNUDqsrMkunyWPzc8rbLhzFQpRY",
  "key8": "4x4w1aChgt4i6sRfmirM56Ea5LJb1GvW1aWoBcyqsLWbTttv9aycAELTit51NoMmNa8W8Go7BYgQURTzWfv9zeXs",
  "key9": "4dMjm42evymotWr3bnboGoHtWj74d5xM3EUMbTQk4NXWNFbjmow5usCNMTQrvScsZVB6AmJCQWBrneXtHYWwcGGf",
  "key10": "4mi3uyghNqBnJrA963cxfmhkhjyjnUzQL9iTMh6HapRmPWXXU2Z2DAPfCwJi2AKwioe8rzyEdj9Qd6P9twK12zz6",
  "key11": "oEwt7kmAypxGr8UKUZohjWmR6uu6bjwM1PcvVMMHNj8X3GNuG3gW4YM8SVGChtHo1gfC3YDgAPjg3y4EDgEYnbC",
  "key12": "ftJHgsVynYCjdhdvWGcyMQgYmzyCMgs7MpweXKXD5md8W4JXr6J5N53HiageiFWZfFe4BKpd8Vz3RNQKS3YDPKX",
  "key13": "667FcfDDpoUS8RwjSuuktFTVnAk6VA8mmP6M7fzHPUjGNsj3289f9meK1jHWhK7zwFKpfzU86vPrMES7d9geN7eb",
  "key14": "2gPsqvLyBFwHpopd2i8z1EJ8z8UTcm7p8QogbZ46wRhkBPZ61GBWuEx7f3mjF2wWDvkEYZXNDv8nmSiwTnLMEZ5W",
  "key15": "4d5DyWWKMWrBaiVgsUKm7cmmCFibZFAMb3SQecQEKUCgmFdan9S6R3wCumowNesCL3X4RmQe6PYKTzJZPV2bYFqM",
  "key16": "55tH9z4vaTZjQVNGQkR9NcnHXpD981ZrGAbcRcnDzMBgCrK1gvUuNrbxoeoqwkFbhY8fE3EuEysiKwjcGxwrcRmW",
  "key17": "4qqSo3BUMzmWKAigxVxrvLN9twsZ5Xp1xaA2DabKKR2xKkdzjoLSfLbLEqxU83JA742CVQrLXzZxu3V32tqNUx88",
  "key18": "4R3K1QwQ81DXhix85oKqvb9yvsNPPAFQSsjHQJ22u8U3TmRFTu7oWFto3FWHLg6MsrqBjJfLo8khe761APQRZ7Un",
  "key19": "24MTpS7miDxwKy8eD8Jz9rxJCWPn24CKWWDh2q4QSyuDwkZj7fNXFu6p6uNPAFWBfgqiHKsubMVfcJcwJErQnisR",
  "key20": "65h5yiTr5LmsaWRGPmc5oeDiyRd5d6nG5XhXGoiugKnfuznYmjk4DzY2N2YqpZPSGWhdtDoyWHnbph9rrwDoAu7j",
  "key21": "3p4bgxP9hcsqRiwWowdjq3rZV7X7RyFQxgbHLUrWNTZcvxQ1kNi1XG7Cd36qAnWRJDh7s6ubSkUBBdNCKUivdPKE",
  "key22": "tSiWDNF5TVpn3brdPXi6nZqNJS84KRFfYHTBMhNzdQD5kuor3Pn38VHDTE1PSTGtv93W8uJSRzoDRPBWjgyKKSp",
  "key23": "5oL2nxNob4JNiWx5zA3KSj4v6ohygZc3YtEPhGy2v6ySHLzzir6pSWnoPCpUjXPMAnzmqzgm494yBWXoRxsBXFpi",
  "key24": "39kUyhEcEfX3BjH5CUQkAVD1mEPa7iVTXqw76np17U4Lo1smkBZKtNZ33EheeALyMwFZY3nfg9NTjuJCT6EyA6B7",
  "key25": "44E2D3ahanfebG5WBUoo1c1Lnhyskq2MLThytQNPKN8PdkXewB7UmDiuChqpqyR7oHM2ZXbayns7fDyAeCQ1J2Gc",
  "key26": "5yLt1Wu77KAPVdeNYfGB448tC576fhamKDknaj8LEjEvHDuQEii5L3hHPXL7xFSnmwfAfBTBbkdaBcQtDmHBegFg",
  "key27": "4x2yNUBP6rzMf6gizcJCUgvH8NtYzYvfWkidknMN9YtNhzrvJTeyMroE38YVGPovJAUySa6sja66oMmPcKeXaHTy",
  "key28": "5KHENHV7YbYVpuTSAQygwjn3PS9WjCPtp2QZa5BAsdoWUQSvyGVEJvCcUsaQQj5RdAukMAQxavp2DtHNpS6uwRJo",
  "key29": "5g4BS5zqc9x8ouZnWfRkxw4RCbq8w9iD2qczRppfbTkac9e44yGazYq8ksKfxhyoFJtseGs8Mc9RH7QwdiHdn38j",
  "key30": "c6douFr9XaeEQuqBh9V5JNruTW4eEANDnow6uVCooPkvwmcriUdd7m6jg4X6hA5AVKRxCx1kpNFDCEaCUnvJ6Rq",
  "key31": "F1EFRmxwQeueKuWZd1r4UuF8azzFUNdvEi8RERS7VpcJQXtbhcR736Yy3UE1s8VX7Y8rbgX11nQTzR9jXxiFZ68",
  "key32": "53nwDUeyGkWNhuHb26jTNCRoBk5GSAYuvdZyseKSUtXHE27Gpx5rPM4DJSxPHf3joH1HKfJ9YGNeJECKRTv4P2Nn",
  "key33": "4P5SxVtBUqoLnPNyRK36c49vFJjUgCysqbEC3TjAEpwnXCYGTxNCw78rm8tKoXoWq9G47WGyzSdUsLDRCoDxsNko",
  "key34": "2STgZfaDrhHdhzvPVMP62N7JQGU3bTr6FxHGQbCR3jy8WqSBcLP47ti7YKmFRjx7Guq56Qaz2QVixWKZ8pTHdCm5"
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
