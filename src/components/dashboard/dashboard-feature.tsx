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
    "4CL7U5mf1uv15HcGyrAffKd6wifNMrBEeaivVv8pfqXkQQkSNDQDWEJhym1wewePyETrshiHtaJ5AFyCQAkwBQJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3swRooQ4QzVUEXWaQafE4EXX1grbCLvmjvn7w1yP4Tf66wXogg3m1A6ZNSTmXMtsAemedWD59jBMrkAdnb1UFmko",
  "key1": "5bGmSojVH794DhmcEAGJYs8KGPfXx6ENWJ4kEvgbDYBHPiGuvfJc3LpngofwNzCA15Hm9x6LSgoxxmYeyAwo3JZW",
  "key2": "3DRtGFBfKcSiwHNKcpJQc39JS6GdLiJQ2Vuf1bKGdXTT96j6PoPvbdzAxTdTiLt96uuFWaEenuX3QgRU2Y3UULW3",
  "key3": "YpE51gofKpXYNShkB3EoHfHJ4eETiXF3LHUuq2x3DfhzMmbfGYFt19vMNzwKoaJQeUvt8tGRAPoXumRSxi2ComF",
  "key4": "9ZAwarRsi6DF8tx7AgRJxdFDcoY2yBFAzcHmiDLJWTKK667n8t6a8ennWrxVrjhX9my5KYh4KTpcrv6Fy2xs9Jk",
  "key5": "LVVAqpqHYpg2Er8Sui1WT7qh3qg5yY91nRp5tLUBnRkETvdTwHhQCZApmpf1k3jgjc2Ng56PhH5SwAWn9r8watZ",
  "key6": "3f7Ni9sPc6uNvyFoGMydmUb6njKh96waykXdpgmc25WFRBsHHbBXG3iy3VGhmL54u4VXeUa4FUDNsvrHfoAHHnnT",
  "key7": "4JX7Zf9uWqPVG7ncvSZQRY1TxeuukVXigBwyDEwNZhs2enG2iaCV2TEXwHDEDgdHidavM51c7KHwJg3qweDRSAcs",
  "key8": "2B4wgDpJpVdiP2fKssHXvFqWeSHDs8V664SihwzyxmNHDcBHizgaxX4NbYXHbwkj7t2a26ZhUKH9fHC6ZpjxvrzF",
  "key9": "3oeBfUHf7Ftc2N6JssSkpwepBjW1da9hGEbydsGT3H4MDi1245FLnPHS8sbryUqTmnCajxqWCPKw5QLorM2HpMQw",
  "key10": "3UW7sDU7MgUATWpkbVgp5JxFkABEsubo9KWYxqDPd4oDR3WE4FcXTcpHXgf8DFGWiKd7959rsPLkzHKmNkifk5Tq",
  "key11": "2mSQfZHgfjcsyu85DYVZyJJJi6Ygfq5x3u7mqhcBaWswCoc63VEde1ehwndMTryPg7d6KMsQLToCQy36yvAP9i1w",
  "key12": "3VBkBRGfxtQMaQw7UxnK2vS2w36DgpjXC5yzpHQBc8b56eFWC3JWgP4JbC9YHjrKidCzSJL5j6BKXU3CN24kJo7e",
  "key13": "2npuSk7k2zVZ6HTueDoxWPwwq87WnrjhfZ5CeLJ6roNMBTFtWXpR3DBtKeuhnEYTErEYN61CM5VPHgqbQTr3tWY9",
  "key14": "5reLMK3fLe85oawb9HnY3ZK4F2rcCj8tydp3dNBkqft9NmqFavUrhu8iqLtrBF4Kxyraxs88dTvXnyQd9XEPgNHK",
  "key15": "32pVuaFcJxcJmSvAkHaQe5toJVpQTTj6J6SqfApJsNkP5oS9birRUdZ1vVzqcV7f7bT9S4ueLLZjsU1RcdrZLvxP",
  "key16": "3zn3SAAJ7CEinMD1Z771nHLZCsQNwkYmidztBeH8j6TjPFDvB91p8wWk5nmRmxhFJsnoUMKcEje9LEpVCiYiTmSF",
  "key17": "bAkv6SEXYB71cZAN33h6GmytEsiuddeFyXPii9D5Gg3MzZCpJPorTGmukoX5o3cXoTJztaAj5sxczakkMVWxJg4",
  "key18": "bgBgdL1hGHRfGRg5Bt2mEw415NHpK5RHnRQg5StR2KSZ5LS4ZnNxYaKDCavP7AFVHMJ1kAimLpThNkPpHPKPaK3",
  "key19": "2bsiDUCTroExvyhUJUG8yZLNqikMWQTHdtAZdS7wPBWBrr8zckRWAkgjofCYRK6KMxT5BA5gTemNX1HtFc7M1BfT",
  "key20": "5zRXeogVCDEcGoJtQ6B3UPtd6LoJdmTTbxR3z7euLwLSDzxzz95ZoU22DuNx8hxXSjd9a3tgLca4GaQuZS3kiZq6",
  "key21": "2xBUFmrKJtKhpE1JjJNMu4k9LFz1g9tYm1aXKrSwFCqbXhb5ZpjibPts38PcyCRBi2rCkwEZ85YZEUCMHzt878Mu",
  "key22": "5WRJU9qwNtb4m8AjrN1TeJfLfdzZnuvfgx7JDju5Rs9ayZy6s9Y8qCbYBR4oiF5bnxVMfyQTA15KZd7jHa8z8jgu",
  "key23": "V4iqp4bxYFVJFN4VCKqKW6x3QCcibH8XvN8KuwdDU9DcTNu9UvwyARZ6Bz8GHL4TUhEpiusUDHH2S5LgKddQVTx",
  "key24": "5dLakA4tHW8FYWMShGd6amNxTxFsurnWJFrt4NXBr2aZZwisKLyxfqqLmHFbPF3uoHumH4r69WNiEYjVq7BCCw4C",
  "key25": "2n3ekWaXjer1uDfaT8gxjJKrkW3d4Pn7Lg1CSK2kEEiDBpm4qZ2kcEaGsrUeWbS3cZJeVy74UUZudbQxvcsXHLM2",
  "key26": "3i4doRdLotCS6SqDFvuwGeAtLV13zEzCjvgqs8CcSa57oJEDaViXvDv8UpkKfiAn4NWCr6WLQYZHseVu8RW6sXos",
  "key27": "2NCNxatKo7bcMnxx1rGBdmEKe6W2WPBfUwzX2hYoXyBLvTjULMDaVwSXgARqGjemj7jZsXmwUEx4QncQnWDo9PuD",
  "key28": "DoHyBnDGtw7iapRb2Kgm6riJPqBkyu4sS9USAg6uuEqUXLeGTyziWnEXXHTx288t7kLkRg3y41T4odC7hqunbt5",
  "key29": "5zMAVq9hzScRPDvUByTiUhR2XMBFnR2BoGSGmqvLyxAZShDePG2qVUnMiTrijstQQhzeQoQ3WP3qSzc28FNBQ1ko",
  "key30": "4rkUEqpyW8GiDA3X4VmEr2L8gxyzdUzNmSM3VR1bbyL9om6M9Wi9exskUpdgbjnXGKta9VDLLARa3KRT9NXsptfr",
  "key31": "4NNfBL4Bry9uTR5iA3LXuLkfu9w3r3QZLxVRhDpnF3JwfSXLTPBrtANpQUJjsFscD8r46wqNGi9ZjQeXbqkowHKe",
  "key32": "3WoGWrX8LmcV8sx1SZUsZATzKUpyue1VMBc2xasPauWcvRLRTNxv7mz5YdCPfDUqK7iu2goqCEXfiF3mbfJ8F4zY",
  "key33": "4ed82HWygyZjChd5stqfRMUnxPr7oNhweiPfqGJXgxArqzDqF5hx68Lwq6NcHpXeqqLHWe2Wfn1gf1MCWDH4hTKc",
  "key34": "4CRuqWt1CEuTKgTj1gxGonGBsXrBubH43LyQX9tUxgsF6VmWuAYtf52wdSNtmtw2nwqjmcMnHtrGgoCdsJ9HB6kc",
  "key35": "3BQjkjLRRuv9KGimAzShctuowre8ewZCxKp4vhvaCdmTRJKjeBe8LyEekGotV2gmvRsdKcaUG12PxvKvWTce5Qcj",
  "key36": "4gxXKe9CCCppgiYKowoHtaf19Ehjwgi4doTp8s44QZ6Nk5F4SLXSEctUKrRnEFS5t4kphDv5LyQuGaMCGMKSWikq",
  "key37": "5dp4p3pqA5tPGsEbYo8XBTbzS9ZTwr5gdxpF1hrVTMxjKKHpxjYxRMwyL7Zz2b5kwGzntQnK4LHustNtFHPZL4y5",
  "key38": "43YZyjDHk6fhWY7KP3NJ5BTq9saibr7xv2CHTFrdBna22Ke1iNeQ7cCi8nBWvPXgYhDWwXfTNhjqpjXyx4NddGAW"
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
