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
    "4sXsrg8eqAfNaAs3UasdwejfXqp4Cye3RvmQL98Hr4ELYXT2Log1RwXtjYAJorVLF5bKJVvm2Ym35eL5HdbCYiny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WUwj8sAU4PbY3115jH8JBQWKn64gVmvAKifQeCWNCXeg5uD1VDLeEcvTnPyJR6WheyNfGL2TXyAUKBy7vVadKD",
  "key1": "41Ndv9oyfRtRaPaGkvadGVDjMLu4cPgHpymq1P3Qwjq2ZGoJv9QcuPS2aqiZtGXvsqWknnXZXpdsFCTGx45i7mLo",
  "key2": "5xqaaLLYzQwkYeHaXRSmrBAVSbHwBqM36y4CgRVCPg2xK8KCVNdaK86pphFbNp2nfXnMTTdvACbVo5p4sJcsABvd",
  "key3": "3jL4WqGx4h3k1PhhrxNZGcvUuEKbTEJsSCvMkqUmYr7Zhgo6GbMb6HM7kZM5nnoneLrSrfnrkGyNVBW4DJY9VgyM",
  "key4": "4w5RPmYcnXCKJMiAnL2UsRUdXa6jm33ZEWhzuV8QaW8ZJHV7pUL1W9Wu2o7T6B4RaG8j311esmXskTcQxEse7gqD",
  "key5": "5Rq9n5DDu7iRjaUpCaAAACwGw28FKWfDHpasSSZPF99ATFTY3zCnwBGMY5KDbMSCFYB5RWr72Go2nDzgoLUSXE4e",
  "key6": "2vP1emqpPNxhgLi2Q38FVUJ1p6zfcgBcV4toKVjEiWqHpNYLU2nixJnfLqLGEwNAvYuCLJMCADLQtxknKi2EcmDX",
  "key7": "4sjQDUYNXaoGiheSgHgT1xcWhjHJfMvLZWURFs5JNg8hN8VgBYU9Ss41TqQoDRLzaaEfTjihfQdJVQE4PqAj633Q",
  "key8": "3aWmw5d8KwNk8hCKHh5QoX3PsAqWyPxCMBCa5KUqpAjXEUkuyTQQjeRH6bcKMzMcwLoN29oWP9gSXd17rM8UhxKX",
  "key9": "5BTbZbrdwWom4AsbrX9c9qf2K8fNVhVuuMnJQhyZCCCn6CKKAMUUgN8uVvdkZNTe7s7HtP9xSqPRaBkHYbTLEycn",
  "key10": "dhGVaCwtSxYcSAEypxk9bcPcvKeHwXqySHVxFjTt3uSWzS9D6bbPsEYKtNjHaKfSbN1c7NGoxQnFzexeLg8fDVt",
  "key11": "4DoVHBcV5DB65WZ95wFewQurqccoWtJ6mo7JquPKBUhmvtnPDjY5UJXFudUFtKXk5hTFATiLcjFQY7g7Q3RpYaw4",
  "key12": "3SE72ZRPWXxfwR2oDFTsV1CuF7tgS7PgfBxVctWbghsasNyRYNsa863WqD3vx6mLH88kydY3rfj5RFRGBZZ2Th8N",
  "key13": "SRpKm9Ym9sSG83okV9Yrz757SPHgt8AoFmxMk6txczjztAw9ALxodqpcnXNaW7cL4t4v8hTMNSJT17kSRi2SLDC",
  "key14": "3xJHE1rEQ2A9un5L87ccaqkqjqHhntanvcsJjhAWpE915ZaxCr8GHgH7HRHnHWkiREdmu8YE41aeZaS6mGu3fLFd",
  "key15": "4FZqnP5Q6M8Z5TzTPugHG3LDDCHYhmauZBx8VuMr7W6ooVADy43F8kGDAU7mSfNM7MzgoikwKDgRiaz7A1nCtxDo",
  "key16": "4cipKDpZT5BX6n2qwvxfWG4vMo61Seo95ZNDAiGQkNdXmDZ3b5R2dE6NNRcjrB6BzoYq9P2pRLNYS1aAACa4E4Z3",
  "key17": "KrC2HMBYj7m8uqfXF2H8xZhpK334DunWnMi26thuSw3x2BDBZPw5NsddogBSoyAtEtoBJ1GeFy3wCeWRmSA9edc",
  "key18": "3aSy2V1WVZbPdb38M91oV1MVGS1GK6GPmsrk8mnok1mD1oQmSJJhoFpq5e9XvGTMmXD7rJth3WGqjCyG5vTz15Ev",
  "key19": "4QdtVVThz6aeRxxqqx67Ve8gBijroB3mjhFKjWYW3tDwGvX2cuHiiz7pMtyV8YxUBuSYW7uzsnzusPhaiCV8nApS",
  "key20": "3tLeXVtcEyDJ8AVk1dMXbryegD1mbF47BLmjmsxgyUkguheaV1dbp9o2Nf7hb6XDQbayMA7WSSbzUPMxYLDRcLPK",
  "key21": "5mnvfLG6uJNRenqjfRE4GfSsmzG4opxMbGsNCqGFqRjmPsMfrnfMq93PDNFduAT8Ba1e6Wt9HPXu75KLA24LwMDf",
  "key22": "4NkMRAbsNFKiXLmSZXPP2qFyFocgi8VRNpXGXUkoacbzJig39FLZXXx2cqtc7pTmDk48ncAhFULHNrmHfqXDxVAB",
  "key23": "3w42uFKMHYNwrst3YC8HiF3myCaxHghCcyd7hTRduaJ125cn7zx2pEzhcnfwu2dgvwsMaWCAxL8T2YhuvcsqC3AM",
  "key24": "5AhqETEHNVc8ChusHT7vjbkbNfh8KXHBu26zqBgRh93xiwYeDUHXWFEgUg6EJpPn9K3cSdZosFtvp6ZXY5NQ6ci4"
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
