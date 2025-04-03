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
    "48dhC5XiGzDxeTGaGYUQiZ8g2yk8UsXUjmhGW2YzCTzqrySfrK2TXfmPV8MArMJDsbbPPTRhYqxq1R4K5D3Bhbem"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RUBoPyve761L9sxsmdbSVdHpRwhsieiV2GeC5ab1vV5NagAfaZLc4MsjWmCbmCuGQBkdxVaCxo9s4jH8BxGVZh8",
  "key1": "P2CphoJqEdeczuYqinghomV1oGmfRBRjSptmrTmbUkGtDq8bLrRCFkbfjNwuyxboTtJqHbVabZQQhYh8qhg63Ms",
  "key2": "46tToqXiemk848tEyEMh3gtHX29WZt4KdJS8CE8HXAEzX4KpXntQJQ3KvpAuXkPv52KjkfFSFXJ1vJiaUCCKJYRu",
  "key3": "3HeY1dpuBwMNjCbRjfyiQ496J2pDaBoGuPxwuYvVu2EDPpEJ5HznTDX31qyDYPktpcdoXAHL5uagRp4JVZvbrgpg",
  "key4": "76oQtFMQJJHxLRDfXHDKbWfnTmvQMCz4teux8TUaPLxkKqR8EFd7dDYhvrZ9qfbc4bBGXoSC8ztm9JEKzLmUb4y",
  "key5": "44o1qUJi3uhSGxvz4eg7Yta93X29cG2HCCXEWPUkFMFvbFcwPvhDB48VhEXB5Wr4eHbA64nSN6Rxdh8GPwbaNo5s",
  "key6": "3YwTc4iA62KRXpFbERtiy8LqC1P1XGqEu8h9YaxvgutvUe9GCttbkWhmZm6zsiC8UGUM6pDuHrbtGyWBgSykAiZ4",
  "key7": "q6D6yxWH1YL6dTCaXpRs8XCCiDEGTrBJAaKdaVX4FnVmTJ8bgoTaaCWRPRjxMW8xsFKV3YQSJZ2ftLRpNuMeymJ",
  "key8": "5ABsejC9JBux8YrhMK6YcLb61Ex4bRVCwhCT6UEPMwiDGST9185hvkqh7WnQGQqLkHFpt71KC61AXTZJrneKPBUg",
  "key9": "2WKaPAWpitt1eucLyiUFVUjALFGpwqXdHM5rfcZqhWrTnsxrV78xMtsDvrCCowmb4BsHjNnMassSCDKW9nWLMqTg",
  "key10": "5nop5qsiUc6LJjhzFDuwBg6Y4nos7tCbGd1SFYBfDbR9ULb7wy4cQ6vo4ifsFw2S5n25tY292NHUiZ8n2T39YfxD",
  "key11": "2gKKPra8r79y69GWXbSwTfZybLvbv682Ni7HTZDFBoVibgbQCguTaBDBkmvJB5dBwLgcdaGAopsoan7oGu9xKqXw",
  "key12": "L5E4orfsNyRHtDZmaDG5ZBJMqu16FCx527mpeJPjYmPdfUCn4XCdrExEKEhVaCALzMARPnurV2Z56Pxbk83tBpb",
  "key13": "4DR1kPSLW418rJLDc6h2XH4LEPgrQBYCi7FqXLfAvZQdjtTcxhpBdX3yRo5u91RBSWYiWvqaJKNxGvdYAaKuzM9o",
  "key14": "2B3hsnWkvDo6sqQvYecfr7S8vtd8BmX23Y5iQWjre4RKGggUepLD9efCuVYsFtST1KTAnQE9PNcRVXyFhFRFiYkx",
  "key15": "4D2RhP9jp65QXo22jMBehvVSnyG6HgzHLUiF2PtFeZoSqQeM8irm8DhYWow3PLUHCVVM7RGDKUU7avmAXECR8pZy",
  "key16": "5onxmHVJZbfDqM442xcbt3vhS6AStpHg89LoJxnccemKX6Mvd4jxbo3rWjWp1AFi1zRdKvWJZUWVgdVe8qe5QRFG",
  "key17": "47bmZdTJ99aMcRqqzZyY6Q1HLgxPhmCrna6dHNCorkbiws33oZ4oyXRMazNUw3oPWeNvrpeMU6FyytWJsRZ8g3Ex",
  "key18": "3jrwnKeBrJwg9YyzPbHzUrFRhGJPPT5nftPccyKzB37M5GTDycznomTLqY2hxwkYPR4oDevXhwt6UQveubv1LT2M",
  "key19": "2W6s8soY4D8ajEf6RJs8zmWKbRjqi8VjmkYgrowDUr4FtT1XLJohf6w9qqLCwkHBcZR3qSjXbEV7FSLgEJyzMtSR",
  "key20": "4SyBxQhBDivLRvKakWUztUWy5rEF2WgcX6GpufCKeUtcpDGuQ12dC5S6mrhgBmpbzY3uA7PGHTSR9tN2tq78AXyQ",
  "key21": "2tYdD3ThaasHEeaLxpuXfU9HMHcFNs9Z49oJAU91nBP7FpyTbXt8mgecvoc4rfvHCuPscwQ5btni9LTeWBiZLUZU",
  "key22": "2cGLdcVHmuHjSzbzFMKr8GUjh6t62vQsaPWHkvGc78CzeVbkA7LVAic7dbgsBs7nLYHmGk612BfybpkjhfrnYnEk",
  "key23": "54eHTMhRZJzeD3FuG1gfBXqMDmt3ANGuk4yMdgf6vDWXfASBzLUsumwYCBiRN2VkfDhKbPayB2gDg9G8MS59jUzL",
  "key24": "5YEkXvUhJVQdAJUZuBd39y71WVLq9Dh2BgY6ahVXNFfASngSXv1LmqjR5QyzjzGoNrb5pZ3NgDTMbVrKNQsCjVwN",
  "key25": "5SqJsKqnPxWSGEPF3dfGBvZCqprsBdRgSZ4YxXfLJcRR3vZsA1NJnDThGsmv2EVx1KarEMnfZHJ2pUbZCwwm2oZ8",
  "key26": "2LeBbyDNHmAQouN68g4XTEEfffgr58cCqA38fRvJYWeGsLCKqoe6RFhbJgQhQy3GvcqjBdrUtr47zNWRT7nrngRx",
  "key27": "3DLouoP6hfADiD4TeYdTpjXysNKrpoPrLMNbN2UgWR3iLWBY4mL9CCGxxRn1AadV4WKmEE5LAANmZPZS5UBc1wHs",
  "key28": "4sL3MezvFHLNyDmSmeejB39ef2kjyLHqtA11bFqrjz2fEEAj2sDs2U8rLXdr3NTUANwxssHftaajmbL5bmpvRBMT"
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
