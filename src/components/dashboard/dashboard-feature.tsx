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
    "32ZS5DKPqkQHVsqrg9TSuk5vtZdFQcHCGYq73BNr1njGLeqF4hFdC9daxrrDUUCWC9jHQYLHimj7dVHpTsKtYrC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fg74SWu3Xo2uZZLXvFyXe9xwqqoxWPnHK7rYFjiwuSDda6c9RDnKAQjYeDWsxQkFkDTcDxzGtQMccBkbuUgyahT",
  "key1": "2f2HdjeJvQbm4vvhYP7144njHovPE4qQzpWw6u4Mqp6dBRv9nKaafhr4BH3fKjc6tAFnYpwexkN2AZtWbNQyueq2",
  "key2": "2GnoaEC98UTycSsGPAyYNGAAnoAiHZdyYz2dsCEuwxPbZqkDD1Wr3HXawHCJfFtF51814rCPeJsBXbkjuhkaxcvw",
  "key3": "2aQujLAPBNmTZPFYqsqsp8jBhSGmQ49sfNErhVcEhDSVof1UE2UhTa7Zoef5LDEDzNcMEgS9gnNtf3DpuhW3B76n",
  "key4": "2LAF7V9hzhLCoM771eAFJAV3Prvzwtb3x17pqXXuMCViSYFFnkhVf6tsbbHfRE6GRQ2SwXkTCAR2yeSmor64NKp2",
  "key5": "3BJrdsFmpFNvsopayohPG2RzgsycL3dLh4uPepfUobfqMCMXQYgAnzXG3tGLUKvCQVgyztdFvzhBwNEupPc2CNaL",
  "key6": "g18oFZEEtnYVeQVUbXVq2QsnpxtQCcD5FzyGeNqEfDoTJJH1s5K2VYkSW19NTMUBPhzESpdYeovyvBMbeDvdQAk",
  "key7": "3xgdw39URG2axdT6R19tw19YtQXa33nRMNfpxceMcz3Wm1LABPAiAjXtmJjA1yyQv4Cj8Dy9HnJNREGt5JkDfER5",
  "key8": "4sMk5Y9EyaL9wNcH9tJLSxUyTPKqrTG62ebzypKAhmzx7ZWetqfFFXK7uM2byjg8XidUn91WDCpTyTQfNLY6NmuD",
  "key9": "3EmgcfwcHEEgXdWjVdjwjRMDcUgLxoLzb9YETWgUYe9Ci5H4G6z6mYahNSjFaeP2SGw4oyk9jsgwf9JUTDY8Gifs",
  "key10": "RHn3zqhiufw1qZdT2dT7uhCwPfzqhoCYFSxGaSdTxyLsEeypti1fDHAZdjQDUvMHgTD6g2xGQn48MAqWi3YwEmL",
  "key11": "3o4MGyEbDBK73NSwWQWjVaLKheMth6GtxUkoGQTqcL9ZtdeSUxgufWNVEYHWiLCuGgY5pxYZxw4VuBtHNvdUCHiV",
  "key12": "2dSN8r1tJBjSXq4Her1kwQs2fzFZGfW3E63zWcy1cxPbGzhTbPtVDRdjYQxTPgrYLttvFY5GQhxf2DGvry8hn76F",
  "key13": "5N22qiJFJZtXfonqUyZKoMZQyC9sYh84XkcBoknRMy421oF6EJqTFXy9bPWAJkqDHURy3u12ZrNJ8LKck1YDRqHU",
  "key14": "5dqetk6RvRVmxjL4z1ns8DVMoQC75todBGbsxbxKb6TVZBbSxpJ2L3nhnv8jsKkgGaUp4vuHZN7tpyz8P9dAcHq3",
  "key15": "2YY1s1qT4LgA6TQvGGXY431mUDVZU2jzJSSifCbEYzBWMF2SpzTLfCfM6f5GjJ7XesL3TddaqKJ1UD3ezt3xg1y2",
  "key16": "5uRQ9gripfcBzpsefd6efUxLFjTJfx8yaCaXkCNrSxn6FpXf5hM77ddTbqDcwjvSYdbaVYc93iL92VjmiFTGWkRQ",
  "key17": "5Arwn6KcqMAgjFYD4DF3FkqtfGRo15huN7fuem6nDW4HuPS8iLsFzfmZuk9g5uLSQ86fFAgDVVAAjWmhnGLeFHGi",
  "key18": "43jPzRBMu2fQLvyQVS9JgLFSea78wfV9gcMA918htLckKjk1j5bAi7fbq7WNQXidojBVvwtRvDfLcT3a3ZrMgzrF",
  "key19": "5Lp11XD336RRxtCWZyB7RavMZvkiuqeWkUZJ3MZgzV8RndpMC7fhmxq7skHagdqX6a786hTFJXwLVXDyHUD5pKKN",
  "key20": "3TQjd87GbcXeRcRNZkRMbxW6Ux1Cy3u65jm2vopvLmKnthfzHwNngruFeaQPcdF7CR6XHcnhQAEDaLC1HbDscfor",
  "key21": "3Bemh9qAbkVAJfNyKMJt4SY6jCfAPCBm4PoP7FWFR6rzHLsyNnxHZiAc8AdGVnX8wXqmLVnH2PzsYgm26iiiqMDE",
  "key22": "5BszMBcX5vLpL8c222z7GYNEPCqeV7vWsWo9ZQgup2Tb19SxJRpkGaG4RJVvRRLrSW24jAmXqSc2YoSibTsSyLfs",
  "key23": "4MB97Q85zsYgPcdzdTVig7WjT1TaKYE9ysSPwnUnyFB8ZaAHwZfaf7KNWDSRpJ2Q5BmzFAn2AcxSrDBH284upd15",
  "key24": "2yaTfygVHXWXSBTfD2Nk6UHYyAeEpew85f2ypdnDEYzq6wHpVhNMKTLcKMaTrjeofuk1aXdstPMcTgTVS8R1Jctk",
  "key25": "5BGHZutWnzJYKYnG2ByUJkSntZhzJYnA6sjS9g9MYkzQ7YYcxxPGjkH92jbzTzEErYSksvkkzkBJX2f5bZPwyhbw",
  "key26": "7cVVeF4FYoDsaJENh7p3JS6MhyctER2Vo8rSjoe6dztkXtwqRW3LAb3BGejAomLDkmjb1o8TBwtz3DAdTe8x69K",
  "key27": "5HDQePRSPjonPi4sz4koFVxgFpiJJvgLsP8xZMtT3e8igL5JAcSb2YDqhpQEz7ybanKMiVMxtfahzVFBAJYscJYz",
  "key28": "2RQWyjwVs3pntanwpv29cyT44k14U8s3DsGkf8Pe2HZoTGJUzqx41znjhybANved9NQdxebYbGfNoivDqUPotdCR",
  "key29": "5g65UMF33akmzU8YvWVp5twqrdbDSpriHaSp1N7ErXpGyTmeeTyNbYG1Bx2g6P7PtDTN6y72TQRY2xnVK3zcbWuo",
  "key30": "3M4mXqS53ezCtPG84pLkKjUGunXCXwTTnYaG9hbXX2NmYrh8aEftCaqdiPdar9kAkcZSFJxezdYCzCF1KAx9iYTn",
  "key31": "29e2UQjcgpVXWaGgREjLoAbkTG6UfWXmdqThXiDGLufX62ochFywWswYJhssVQpzxaHsacrqVUREVxoeiaGB2aSt",
  "key32": "31B2M6AB11qi9F1H5jYa86fBhacv8HrPNRKWd29yXfzMp1DgEjQzekj9Dk1C2Sw9wxdeYnRGqUK2Lb5fVFaY2i3Q",
  "key33": "5iSLF99mZAAQraZJLk5BJ8qmCt371EPJJ7azQNf9qd1X99ZaZETpBGWmJqwHAKzGscreDYAZXWjWXZPUsDnAnX46",
  "key34": "4e6krFwcZz9nGGT2PcQR768f8y7bMxofBSaMJUteRsAXCT5aHBYmmJRNwH8m4VeMYHkS4ANm9rMt9db2zXYVMfNU",
  "key35": "2545KHR2p6spxrzMjkxGDh5G42r5WPDd2w47GnMpo6CDKQ43smKzztNehZxEHbfeFyFUy67BpV3jPCMg7yVZyinQ",
  "key36": "sD5Bh6qcLUUfkpjaN14rCoJmHXut3rVHJbN6rYb6X2KJb6EhX5kKiTTD4U5de8tiVDY8yku1AEw74Tk9A5qr9w7",
  "key37": "2ZKqAuZS5WfAxgRWrRQ1hbSGdU5QpFFjyqKR8x3PEJSgMQ9b8d6atkVG2PwFXpu6Vtii1kV4cn8rnKcQsWjmb7f9",
  "key38": "3uNgFzbCq4g5RsGXctkF4rowmBjaH3gh87CxonhTqpvDtUE7qcuQ9RXaM8UKR2yNC9JjwcaJrN2FyDN8HDNPQ3YK",
  "key39": "2c2d1S44uzCwNnDA1YVxoddkUVvAZf8HfZpKBSbNGK22nGU3MsQ2Avm1JsvYu9NBqneEFRz4egsbJkxn1dbvaK5C",
  "key40": "FN6nr6bKdUD4pRAzsxR5YPXywiCEyHYMRZXsELwqX9nWcnAXTPUBWTDpEzGF1n2TSsi1BmPE4XuUXMXu8irRe9c"
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
