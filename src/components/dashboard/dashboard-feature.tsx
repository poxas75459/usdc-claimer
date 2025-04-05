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
    "3w9PT8oAPCFd7nbiPWyR11ALGt2eXhXiHbt5Ubs2CoS36joYuUMPLgTDR95YZq3HKms26maLvcyuDiMbs3z9Eepu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZxJikfcGK6MAzfuYciuLxwXKLMYmGHQ7huJNBeVs1aH7NjPwVSVY4DgGTJHY1ZmBYKwBpuFyJ4QQC5SCKGmkUuf",
  "key1": "46an21oC5qZx7XWgmtEx3XnDEcnETLFEbY7Wt2kHdxF29fZZBXmvTb6Y2hdidY2KBuEAruqQFY6hAERVvRv3FdYd",
  "key2": "ZLd1hvok3fZTC76JAs2jU1uUX533kmYgkDT8Dfg9LtVAmT4oWkzKcpNHiu18MzMfkQU8JqRJnqGxd75wUKZtYc5",
  "key3": "38o65k1CRvkh6KJdbaiK1Vd38HweN6cH5ueLK47q5h6BaQpPhukTqj8gXZ7ptiYA8D9Tedm65CNmNtDpA6NqcTxf",
  "key4": "5apnfuuPYDd9xBXKcN2Z7D8S98LqgvBFtptQt2t2LG5hXEUve2afn98WMPGbFdpD8NcoznCd7ALn9xVpzMXMAQoV",
  "key5": "53fSJqfm6LBwTeUtM3rBd5XeQZ9Qmdu7i4bcjXyZYQjG1xtvAH93DBvM4AyHdr6oYuv6oNzh9ke1kGABoC8VeTvh",
  "key6": "2936JsNZjMwzfLRvgXenMAgAGWaSoVh6JNvmdHGguCE41h7wPbYWsYws9WEmmvLeyU4Dtcm53HP2d9Db57JgHDV5",
  "key7": "5nfr5ZrjAV64PNu2zUXJnvx939Vicn76fo7LhLAbGsFFZEA6zmC3t3JfwHRExtCRPTctryzatPYHq1mgMPhYY6mh",
  "key8": "2dFoAEFukpraEUtREGknd9kB5JRyASiJSb3azTBXHcguJCRKqQYqfRtF7UnG5rTwWDpFUinAP1z72hqY9HtXt2sX",
  "key9": "2ay29ZX3V6iuCvzFwrnoyyLNV192MryvohdgWekCJxtR9mBMSqJy11ytCiXNxTZPEanjhWmHZtJrfNn444RdgA73",
  "key10": "5x3JTGGZv5t83RZ4QVEDnL7zsdtGyPeoVzv2JGCNV3v4nhNMkaZYM3gwLB5WCUemkNKGqzAiaNLuQHPn7o2eY5W4",
  "key11": "3tjLfci4T3v2nfVsGH8Rs9LFAaYE4s4pQgm41G7MTY4ao7y4agJv8Kh9CpRG9S9Tizf88TwoyCG8CP1goJAsx6wr",
  "key12": "4VfMYBNcZikiTjfAFgQRDXnzmhhGyqcaRiZZGwNZcPz5Rh1svhmwj6Sgd7zY7hwvcxs9fpHauV1ZJoBnPwbfzqv3",
  "key13": "5xHxPUwch7nMt8fBLUPBWFnWzMpwWTG8egHbSe4FhUrCKyZrV19hszqRm7LPnu2zQBkaussh1ikYvom6kLFDJ7Pw",
  "key14": "4QPHcFfZ7dU2b61wJmmcc86dmLuhbHCBtxVWR5dVUiWCMe8YTr4RxQeFtMD1kKoeaQV4wvE82iGWMYqUiLwmZF4W",
  "key15": "4iWj5R5Jh6jpH5SKfqudbXVcW3jN39E3xGREME9MxMVNCnmg9JU6s7yqDWpHoCYihbBV4ZsGTykFrRR33gicw5jK",
  "key16": "4VM2p1biE9RDyNxGXtfZWDev4HkfjAVnxq9Q1GjkwczeMnhbxVnnKWq5JHCmApaCfcLhHyRjoarvJinHxcSnE5nM",
  "key17": "2CtzrYCVibiSA15UBnPphDuE4BCHFkRyeDToiRGfU1sBZ5ueTn3xKzSKF678m4o3KViUgFjMAiwbir2xs6wNL3eT",
  "key18": "2EsLwXUEqSV4w3Ev1UGieDskpmZr2UeNo6PPZDnci7fKc8q9gDPnKw4y3MbF3NyypiExfFPBwvt3joYYhMMi7chm",
  "key19": "4ZUzjqH2869oTEKowgcuEpEf9xxBLkMHLQVcknJM5UeZVHReu2dxorosyyQRzCVuURf6kYLzbFbmbeUpFs6L3UWL",
  "key20": "5xGn9ALhENVb8wEkegwrVzcEGvT7yC94ndic2mcuqNAV2LHsWp2f4B2Abf2hERbew8Z2HvMbmohG7LgWjc1PVKJW",
  "key21": "2GtsgcrXptEXCsTjDqiD9aFWyjBBRNoFiLxi9XbD5GXEUZcGK96a6eKmEHKhhtcjrKfB8Jbv2pCK3D3Xo7T71ccz",
  "key22": "4LjsJ67BDuj9dUWV8vDZW9Y6mia6TTb9FoGVodu7E8dDCVmj8vuHidFXj3hSY9TDvuDYkYLGySPZtbB7Ss5XAnnP",
  "key23": "NLpm2BFXuvZ5xPrQ6hWhZ81G4sgmC4gjtwTy1ZqPk18xLSYFdnLjEZrzjTidXX1Uet8bWxD4hngSxDzEqs8RvJu",
  "key24": "QCkpjLSC9Yqf2YHUeiwgAaTAY59zYBzz7bM6RRTriraDA9nft4NDVmTWBpRLMLCyPAN93b3E8EFFyEqXEJG4qwM",
  "key25": "25j2K6xzEvM71iYSrk3vXjwK4qzJq3nrSmuGtwcgxRJfWC3woNvG6df8VXH71ZAk7SpPd3Vts99edriH7Xz6sT8V"
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
