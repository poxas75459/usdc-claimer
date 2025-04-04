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
    "3sMV4vcasQyuRoDHoeCPFS7T6CfUbwDdxEZ2W3s9crbHPpNt5uRjypectyudRsnd91oaq2Qn1caMFodcXwYCcKvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hmc5d4p9F2vFM7BrGCJ6Fcc9NSfTTw8SknVVK3pPP9aNLhNzeSAJiWSLBfK3eJ76KiRMBdUKrbn2sveL1GJPeaJ",
  "key1": "4wQ88DuzDXATiswNioHP4tRhV8CSeVY1AUx8og9qU7QVsZVcyiJAeLeikoXRwrrGRzigni9D7gF1vWgPUSftjhDu",
  "key2": "ruMchyR11mgVnp3zz8oASNBG7mDMShmdkXHSCZiGzVB449VF6CppiRmajmHRLihateg39MwAvd9QS1PDMQLhzzp",
  "key3": "2mYm3bmY3fTdfbMUu79uwccx365rnh8GHDhhoeZX5qfJdVvi3TTaZ6y3f9HK4cGBbUFiSJhywbt2aFqHcPjHo3cN",
  "key4": "utyBtdz1Ri1V4R9GhqVY121NHpVimGAW3AtpzD4NPzG8ZH5vspLiCbSM6YCL8s6oKVs6VKVNaDAj8kq19go2vK9",
  "key5": "3AgQJfPTCe12XCXezF4ZvEsUXhRxzCL9HzWqnTWsAwDvEmmKrwvPGxPABLqoRvMxQBz9AF3Nm6yZFC9KzyF7TiQh",
  "key6": "5vQR6SSRdma1jTjCJ9NdVPXvqi59hzEfGt8maYs7BjPUH6FqRC7Qkgj1aa35yMcHa28avqLE5V5GQqCbZjVWFubs",
  "key7": "3AYPDh55tBkx8cr3y5mes7jPiiex5b2NJoo2MKVimvf5RvUJizH1QeRgcQn1u149kN7Fpftep6DcR2xTBKaFN6gs",
  "key8": "3kei3GmTdER6Rq44qcrTFkNpsFeSnVysUPpRvTfTX1PnZ9Z3aRLBgb5hif5pcqL3MUrpnevezvDudVepX7TcLyNt",
  "key9": "453Z2x4h2XD2Gni9L9ULwkP5sBN5JSU6wruCCM3FXdeGGHU82WurNpU8TQDLgGKmW8HDjLNrcLkj9B9kMBTsCsr3",
  "key10": "2Ynogc98AUwFDLNV1gruWcjRVHz95utxVC65fahudXovg7fpq5Smc8oeBXGbZ7X9ZGCqPoAATAe1WroRyJeixUAB",
  "key11": "ozLnqEcK9QnBmwVq6CknzQzWLZVGEbgZK73JNJTqyg62dNAAB5YWaM1ekavxQZ2e5s1kbdnsNojDcqvv71NsZws",
  "key12": "34ThJPekvTLcRUxkktx2QUautNa5LTA4XcnL5LXPZiyD7iGDC5TLzEkxWraxhdc4B62wSGxWpncA33YsAt4qF5Wr",
  "key13": "3mENTsiCsfKNWmK6sdJjnaecZqv7PtLeYUg2v1Yd5snoA8cbNLDQJHD95JLx4nY3unSzfDp9CpTV4QqtFPFtFwi5",
  "key14": "57Ke5rtMPVCsfiHaBoaeapESWy7fHPmhKzwPoFCQbnXWy8B5nDhXmQLFAVF28r9ETPbiZ9cSZnqzhg9pgmmR6qEt",
  "key15": "3DEtXQNZzP9DMzXrBYorNHBunWy18sS2mB3cd3sUFC1qJHJXpiizwqvnBz9d6Cb7b5DZ3xs4TkmMdTBmVEekZKhF",
  "key16": "4tQuwxeyYfH6uyKNVfBxYQyYQxE5Wsyri5Ukk8cDxmvyGR3VFy2RbJQa4RhSAciMsKxQFBU5d3137DMxpRJHzy5Q",
  "key17": "XTJ6Vjc2MLHK77Q9VEuBCBVwmiorMfENYSAPWLxjTfNKqBP8Q6jSVNMhYjTNSjMEEfRK3VcLgxBnXuo8ZsrLSni",
  "key18": "5BTaWV2JfhaxViWjHcTzNiPS3str3T2ii5hZqvhg53Mi7SwoDnnPYAFkaSYq8J7uEqXDwKLHEtUnusrTbcL6YoV7",
  "key19": "4nHC92TLroY9g4DM43pqr4np9riZD9hQQseaDLKdg46tWE4awBvRehTSZu2CtFzzcTPEVnpi5D94UcGMsgudqmJ5",
  "key20": "4bjf6Wa7zGgitgX8uw5uubYvvfDroLhngKFvhMMWY6YAv2KagZnEaPpaogQstfN2CaYP1anbgmUoKUNN2iB7XKj5",
  "key21": "44prmVaSf4xq7FxGMdfDqmPrCTy81SAvDThtnp2w6sj7iK5z2yrmfL1Z6rZ3R3WVQ4AKtF2FXZqtYxov7K8KJBVM",
  "key22": "2drrXTJVWbHEjYk2V4kf3LbUpph7FZ6DYRuKwd6vW4Jdzjg62VuPnMH8vv1G4hHkXd41Je5wdDCb3n4ibcPdnrda",
  "key23": "4MXRGz8P2K26Ac4pdtKxPPUmwSSjneKPXFN3XSgvE6mNjnPmZDtbrt4tQ9Jy54qTnQpcnxHJGb9GG2H2BPFs4yB8",
  "key24": "4QtEYWTdpHE1rnYQp5sNJspgoRZvKkqLNBtnQ1GEL6mNv3Sq894sQw1VTgi9o8pDpGbcHtphN7czRn1mSC8rNP5r",
  "key25": "5afCmKiThMgQvzo2QraRbEKZGHZgGkyJw9xFbxdDBjcnKnYwPMFs9YNaouQy8cyyDLkfZs5tudtBCyxbRgHcYCgW",
  "key26": "2dZxyJn2TNirFMQm5CSaM11G8yQn1Z21mXxQH9RTzZtQJQcSKc4S88yboy8S4knqWwzQhPFbSGYbAVQUPfBSY3Wb"
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
