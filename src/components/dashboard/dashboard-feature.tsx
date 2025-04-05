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
    "wgnzRCDNwknX4NjYhprEdkHNnXEQimecSiD885XvAC6vUrtw3XgR8bwJqRrbrBiWrJ1SYdcJNcy8YA7FLun37XL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7MZg6MS3VppQi6AfqQXBLroB312FfW8C34depHokRU8d26wKSb8nUu1fn96K444bGX2TCqAGyXxh16Lpw1F3oRU",
  "key1": "3jik1kXxw1UxSvqES2tcnqRhuCfkttcquRHv8AXGaAWHBkhZXj7jzEURp2AoNUW99fCGPKdyy6fPbYnJWqBrDby2",
  "key2": "2Rvd2xsScFELRTVqLWbJUiPENsiEkJMnVhz1HMUooKBANVWeEuT2FGYomXxFG9DDhLtjoJ3y4QB3dzbG36TQSQ9m",
  "key3": "2qs6A3HzEMq5EdjaTWxMjZsQmDLeYLdCSahdTe1NuXASKuZEVzHz5rM9r1HF3EdM7psdy4ZKsadH3FNZeW26iyrx",
  "key4": "3tzdyneq3GHQw6nx7j2j3ipuxnWjnTnPfbfP9p9eKwAjrbrPmWCVndDSEckFozTtXrFZvL3tawzTJuwM24XTvUCP",
  "key5": "2C823pz44Dco1YUdgnTH79siid2iXZ76MDHsHfJT56hdRD9CAf65KFizgUBvngSbrua8NrPt57EsgPG5Lta3xA9i",
  "key6": "39jj3gSVFhRBNExpUgaLc8iRkcS4vt1biWyXRP9PVzZPzne2mMH3yQbhsXiBfwEV2Uefde1wAbwvX43itKH7F2nR",
  "key7": "4fbZykfeYrsvujL2tbKLgSv5gEr7N48Eb6jf6CfrJwciqYPG1FT7nVi11ndQoyeWAUBV2uZTxULEoe9RXAsQF1od",
  "key8": "4bYAFhdc65pEEtSipiKUY2uhQaPadWESwBvZho7LgmmHVnWoC4YxXFpU3BHaJLU5jZzEa1cX3pHHcTLd6bj4C1YB",
  "key9": "2VzVXda7mC121z1jAUezWPFSC9rZ8EVqHogAzkYjaJ16SbRC2YEMTcAa9yVKPWZ1kd6WvohrZUxfpundCz6VgLwA",
  "key10": "2bcNUSy2BZFSKqiHd6gUtydLixP89Ca9QkeCBroCc5P3JW1Pca7QcxMZBJpPRb4wwxV8af53PLrKZrnuNf8HeUr5",
  "key11": "xPYFNstSp29TKH2C3o1JM9VF9VzfuzD2nVPRMJLKVZPkbeWWrqNs2zwbdeGsTim5sLqAHbfuwFj4C9xckc9CsoD",
  "key12": "9qeNCjac7aFsQCJegRPPwW2Z2cDZk721aLqmngjVy3fKzgwzpRwqP8GtYYEyCi4ph8ePPXPgqe9uHQPob7QHr1t",
  "key13": "2mce9ZP94JTZrXH7ZUvBGizRHTrJRhKMhxBZUWxuawLjrWmBJAYJBKcSaUSysEKXE3NHLx6f8frBxCdrr4x68zWm",
  "key14": "nQdHF5jpux3Xsjqbh2aFEM3nZhrVNev9mn8ZVEmWVRW48G9hZFhHqRE2CAF2CRGaeM3GqKNjmrvgUerW5ASrKbS",
  "key15": "2aNF2VfXhCmu1Y8FkMWfHZGLi4f2vSvY41N91bvq8chNYZ7Y4nbH3ZMe5XbBbtrsZAo46Tftnt8cWGTp8XFGJpFs",
  "key16": "65vwZzFSkFpfpeaLmWnfbD9n88urBEf9G3zfcvAw1EBCgoFEs2DA9LoSXXRWRn6DDKuCSDpC6eri7tiVQbzpYsT3",
  "key17": "5WreX4oWavx5z7648GLLRc9zsmU6MHpQ56EWXDQmuq7SEfeBHNZyFiuPYm5BQS2kR2Kv9VLccCBuDcW5Uqphu7by",
  "key18": "5aiLzCRac5BDxFPsCx8qg9CQQu6xqA8F7A5Qq7648LV2BAfJFwWNQETaCw7wkAcW5nap3UV8UwmCoKcP7mvHqfFm",
  "key19": "4ZWkC5HdJFE5dmrNsnjwhBNnuKGr8BA4SoL7mHCWeSCRRgEFJj8dsTuKdXYgRBsDcDMwR9FhqZ7VshYCv3xMTmb7",
  "key20": "42cwZnuUDMHsA3oitLTDHPeuk5RMDsxX9AmozmkUijqDizcNXVavmbzr91L12iogv7CXjaUDVxkxWNUmHJMCRKdZ",
  "key21": "58XDzXXACSwMKUhNyqqgh3dDxxPCRXvj66UR19G5LZXAjNkHjsYQ6ryXmm3Ffs9bCa1nSsLnLdbX4DGF31ajG2AU",
  "key22": "d4Mct5vn36ARczy1uiuaSJefo2mATtxKTRwksXZSpTBXStgE98Y4uezsaR5D94FWvSvW4NwwmzGZpcVzgrg2tx5",
  "key23": "5p1pfwHEUvFTtHr4v9RHdFQXZZC2SYfCP2B234i89KcpdXGyEmtXqaap7SMdtiTtcyyxTK8RBMqhatHPEERaBQRF",
  "key24": "5eiDyWdKNTGcB6vJwx2enda1ffbzprAGBfm9dk46G7EZhTUNbQS1BCDgA6JpJokNXs8yTPU2uEJMp43Gjw3g7bwX",
  "key25": "5JUQGRBRTRM9hL8m7PyGSAA5WyZFKqiXmHJ4eeFdG6hfN6zbUdnaTcuFZfQu6xxd962LYxf6g5vHCdrAcMXjLrQ2",
  "key26": "5uAVwq7s4aLE5KM8eWbo27CzTdt3DwUC28mpchoWKNF9Rh1DdGge7kaUuJEhhVQT296TVR3Z5tvtDwgXWAu1aP2H",
  "key27": "4TC9DwwoUy2HeMPU8xhuwhgCjNnyTFzz2gDysbNFbBzq9ZSQUHGYwbhFy7Uz48Fq6zR8qPV9cjBtYALC3QPqfRyK",
  "key28": "3551mLMvz1BzqwCXwRPLeMcqZF1kNPxHHDc7Nr8FRsL7Yo2HZzENdnLehiWfYaqfUAoKpDwXx594hJfLfX3AJW22",
  "key29": "4QVkXjXxKwMTVRrSbnKgGVLWUNsZiwypPc6UhhkmbsSUjLqnxtnsXKceZSFSvc5abz9uhUUP9pWYpycFT3183Z19",
  "key30": "4PFiKR6443octEBGdJZprPM1wA5dLBsLX1ugbWbFbRqvWAwKZnQxYFR1uiPiDU4HkmntiFT4jsy6QfCGcWrgZ1NN",
  "key31": "2UZozURheNHzrLVc3RuZBz7kLKLJQY6561tWXXeD6ASMzWLSfmqTWJFEMWy75LT1qnDtPJFcVhD6wmu7sENNxGEa"
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
