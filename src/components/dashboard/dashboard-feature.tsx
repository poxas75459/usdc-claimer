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
    "3znRh5w84tz8TUjWzA2pBoCd9qqgyHWjrTS41rGu4wFs4msXEn2NucGwSFUUuZ3S7xKE5JcTQSbLkooRZFLSH7H3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L4h8Q6N4AxcuQ13NknSKRH4x77LvmccwsmWt7Y84hpTcWVC9WrLxyHcebpt9jgkCSDGAPbXiGHCz39wQdLd5Nu",
  "key1": "E7jqdwUyjwvdnQSYJBAYKP4KAh1FZaFeq61i32TsehyrH5cpeJc76GFVL87Ny2YqEDFQAnYsXemD4HX8eJQ7MX6",
  "key2": "3k2dhyKWxGg9LoxWrdaC4A5CaQU5pryaWFXzgVdYx875VcF6nnrDSxUVzkCheDWagLnsBrSYR7jzqCvZajqUmvFP",
  "key3": "5Hz3ayJvu1K3eduqYcR7jGvdhHYouguPFLKXnSDqeZQQpjAzZVkZUtotXRdtKoD3ikPkCZPtbbThN5ffnHeMP6p1",
  "key4": "tmMCrs7r4u2ZhJ9AsBA26HSrnvvFuDYHTrzdPqDyeXWWP8ZiwH1DPuowUPFKzmbCuFa6jri2sRJj1F1rJ2o7ATv",
  "key5": "39JgVvpfVZnPWuEggkpVAFpMr3Q2NyL7s5d8iDw2Fp615JEPVc3nfH2eksRRX237Lqcaf8UmKAfqrACrsmbD8c4z",
  "key6": "5UMo5nW7HA8dxJkuTdzhjXKXAn92W4WdfBY6Vre8JMJCL1Cm3ybk37RTf3SA7NPv7FwUR3uTm153aEKQEJJridAm",
  "key7": "5x925wmbUC5fvyn8NzeiPgT6fLA2BZZCh6Yfr2z3EbobxQAwUKpCsjUEzVJiciRAJeTmLKPcmJjZ3wwyYGAT8xgM",
  "key8": "2Vh9UUyUjCnr1PrqkoJEk8qrNeUm1ZuHq7YpRfudbeSBq1Nn5DNLVYtAY56Q57rjVPAZm7pa62Jpio4QyvHa7FPJ",
  "key9": "f9VtZ3nQx16ZsS1J2j5Wotkdw3KpRwLDk7GSpubJ7PCVfan2MXwFx6sJ94keVWoTWysqhzX41vDtUi3ZVjNvhvb",
  "key10": "3yUamgxVr2r2Q5eG78azWts58AZgqTbVjXn8mHPeVmDt5Ccedv4hLHtpq3gyhMGXG3hXPsimErJCKZNFQQ1GQtWi",
  "key11": "3SrZqunsJeoTZpdEbv7Ym1281VtibaYmEBhXAk8WypSQqAbjeuwu52WYt3fu9ZhdiuSENQ8g7q2QuJSXcZUBmQeu",
  "key12": "4Z3ZPBZCJuony7Bc1pGk37n86tcRxMc38A2qsLWf9N4nTd1SNYwamF9VHiJxxkQgrohoRgdGX93NcArfkSeNa3QE",
  "key13": "ru3ScqYwef5cEjgH2fXTaoLow8rpsydqgHDuHq4sTyY5ohyAY2CJSFHg5MftigUxVFkTmBh9pkWcLTwpYW9HDuR",
  "key14": "39mjBEcVUeYhvwvPTas1Sa4d1dMWK9RBiHGVhDrJEYzJJVevv6M6rfmrG5Jzt9bFrWPeE1Jn7X9k1NpEGAQ7UMjk",
  "key15": "3Z9SpB7L7HBp9zzvmv92jm5omGSvLJLq4R8HCmDQ7bbNu45hGMCo3dSKUqAjrfCo6VwSsus3uefEmP1a2aGrLnt3",
  "key16": "5Qm2QD38Sj8b8UgusCWAuNSWTEyex2c96A7tB8zjxm37PnFnuBuQomUrbfyVgqL91h3dzMhhy3t786y9uwmBfDmr",
  "key17": "xdR1LyFUTmuGixWC4Wz3JAw618Wnrg7qDdPe8iu1Hsk3zvy6YF4oEhEfEdxGvaMRugXajEz3srDeF8dHaG3aVkW",
  "key18": "58i7S5b719RtcjgUqSdhuDpwQDUbVcBjiZAYMNYMgKzQdQYf9mSpzqWa4uCmN5obZr79GwCdPPqkT2oYMyEniAoj",
  "key19": "tiw3uvyHQ3xehKMGwodD9WrjKZjQ4qxMLEe8BdrmA1RCBDoAnXNLKzJTcNmVF94mbeA9CuKSQJaonxgh2mnta3Z",
  "key20": "23nv94Le4PqqVJKs5F5o3vkfhyLYdtanYB4wjmpH8rRBsFCgqtgM7q878BPF734ShCWcnreAwd3CVyBPN7wafHaD",
  "key21": "4ERP2kxAUT4QArB3wYUGXGzA5kXmScGnPFBbvdvWaRWmXZDfpytkEL25Cpoe1BxFdoBg5UAkKT8MiFHRahSmgyjX",
  "key22": "619UdcKtyB5dKyZ56HKfyEiB2iNCrZfFhPV7S2bWxfdS96Y8eDbfF5JLVTjnk95ypHzjr2mPYKUcSsb8qmkrCGat",
  "key23": "4iUyq6DcBrXCQzwP7JSLiHKf9EuXSMEJoBbNfr9fJ8roqfoixTs2ZBdPyCWXWjxuB2edLr6dtucbwA5onPjc4yxN",
  "key24": "2Vf47uWhHpwq8KQPAt8LF3SRQpEAMBUSHpfhqF6YyS3jfKFCiQv9UbUAC2yJJcCEQkSkmj2AjCKqSXYjRcexzH7Q",
  "key25": "5rJ6rpUcjCJmZkbAGw7vbpKWwXwsMmieNLrPaop5snmCGyTgrJpFR9BSQhHCbSm8Feh4XDebB5Gu48NnHbWZHWMk",
  "key26": "2jBAyAiPEvkT1hsGQhzsJvVztqJAVJWiaLhaUZr98uMELTe8WzgFhCscPbmX19kSpNbu5XNhA8E8ZvroMqnMk7N3",
  "key27": "4wUpbP34tSMvHoYU23mkqcEBuxKTCqMNVekqiyaMYjjbAZNG3nsczDLfYceQVcwsRpKx3AHMch3eW6Lf3ziwYY5Y",
  "key28": "eZBThmexdR7X6XVzdMPT9JQ2myRrCtdouAhonRASWUpV1TysBvfcwPAocxuReTUZqE6YAe5hMR5zUpu3pGoHJoG",
  "key29": "2VFq2CnYFjR9po5AYrih841bApPuKJGZmcKaFhtvCcj9AGUYu1S8A74KUw3xAbYW1X7EXyYzr6gydP7GsAa9urQT",
  "key30": "2e3P4VcYtA8iVycZ1r2nqYVUghJb3fph4xkfHYr1cB9t1FH8N3JQ4p1VdTbPNjS744311VCiBfTmDm4YuiRUeM77",
  "key31": "2KWt8AxYAw4L1cGECNMcyXXoKnhUV8t1SMhUkvtt2Ujv6dyQZrDnzpGqGpappUrryKUA7texXB2mEfQcp8MVqQaR",
  "key32": "5bpb8tHdtL1EC8MxsGCQ8QhzDbHSgAMb2Yw5tVBk1mmdjJTaUVD95MwserG4GkQse3RaKufj2S9sQktmLaLHiAAy",
  "key33": "LBJiyJ18nu96AVZhx3fdXK1vDt9rGKFhnX24RvDS81AdyNHKzidfuobjEPoCGV2iA5T2QqWAj1Ax1ZCv37NxkT3"
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
