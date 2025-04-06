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
    "5t1g7A37FHT2crbinw8g33gXQsFkbENDxQNGrax4dhmi4z1E3G7dWANeDciCHmifKQT71d1LzyvNMHyS98pWGBDh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fm58TeiuPoT2u6KZhjVKDkc4JRbn8p9DntAc4JQjrNx8A7AfV9dfRB56GQpZ7z3EHvvoks7ekoAb74sFegegB2N",
  "key1": "nesFKwuSXvUruNjbm6TdhmZZ1HCmJzSNwSnb7vwBzmqaraqJcQcef4FnPmt7qq2SJwsyXmJwkAvVB851711YR5q",
  "key2": "B1rxxd1EPfjVEYX33JNuwLz4WkF4NB54jmGA152EGyjn8cG6eJtWMtLd2Fnnb5Fwv1ZfwvYVyV8wS6WCa39J2tk",
  "key3": "4sfbXC7EEZZQKFZjS5D2niqQPbeSEkueYEfxLtjR8YWNoL4pcAHJMcdVrMCMgT27kaDy7YEz48NhHgG4i4S6WhJX",
  "key4": "2dBkN4Q35APh8LueCQEhxagbtur3Wu7HL2KEFq8wRQtjygBVTiuLXsRtH5XTCJY4pyXuePWa6XchJZc9hrcDRfRd",
  "key5": "BsxmTpkARCQfAmxXYRXU4Jpaz1PSvVmsdSyyn73mMDqwzvCt2ZvNFxzG6wL8ZcxWTpLDQVWAz3qQS6x9c1J8PFU",
  "key6": "1z34Tuf8oXrf9FQVhfH8bdcPFthJLrXWobqJgbf2w44WCgRZTwQjBqBzASi4P3ZpdtJ23ETMxKkN6tpxfrQcHz8",
  "key7": "81cHezCRxqC3zx2H4Z7xJbw4oLQCj6NjDgPNvuYW87fSKq6cFvRmLVBqYyg9cakPYcuTrcRYdnsovroLJBnXW2j",
  "key8": "4ovLTWzM3RVbVSMgL3qMipdMBPbsxtobPVDnypa3tseFp5mHnDApfM7R7KVJsEDK3imxNk4N8Yj3rMnsvj6Apo4a",
  "key9": "3eybEJRtiRzdVsdADkn8oUQzUAWFH9MrquaZTEAb4MRUMnvKwt9ixnp5mgPcjQu3dqcrTyaTBUjhQztCAaxiLucM",
  "key10": "2Lb1D7smMSVFM4Rbx1VEpbEaFFtpsXZVSH4yJx8gYfV3YHPU4q8pLzG4rvG84an8EKP4GuXps81BE4LcGp4jADMM",
  "key11": "4Rm6PJ1aL1DgswB2x3UJgFWRtofamWz2TJe8ysUGE6rfay3PBazo5Q6JNLb8unySSrbNR8ZcrrPXXUFoKXZLXXdk",
  "key12": "2sSBMi7cUU9En7kbfXu4uCjEyuHm69NFBweqtFggYGNjfqfQi5xyahNJPc5UdCM8dvA5uc59V9rmvMEWQzkXThL",
  "key13": "RniLVfK6HapiV2wqe57XitT9WiFTSrqrn6aVCy9PJ9Z9YwjRsVuMNvY5TWMdvDiwTJez1UWBaco2bBJaxM5CRie",
  "key14": "4gctFMsBY3Djb6j9uGhHdCGv914zhgMtw88L8kNubH9mkHBZKsACnoo3MADLRA1FogrFWKvnmMNNcjyj5kgbFYsM",
  "key15": "3Euubu6CA9qzVHUz62yYv4sKqBc69PEiL6ESZoSFMVgSVEqRG8JAuhX38aisb212hncTeBq4PAFhVzvGp2z4NhrY",
  "key16": "59PzDLSNZNenoY2wUuSR9UZ6f1fyGiiYJCJ34Uak3tNhK9ajiLjnwtGcRKWCpCeApquTK1JFLwy3CaWfqu5nskRe",
  "key17": "3EdUEthSjRzyKUg3gZ3oVSuCDFs81Vo3zF48sDiUcWd92WvRm9e58UutASxe2yyg8M8K1N65BHx7iAc9SR45mBM",
  "key18": "3mJvyjzEbfX8Q6joto9LpH7kRkXYXtCVPLX5apKPPngRQuBXzhxF79PDNEbjDxZfrJLkpW8ixfFEnjf3JbhZJkjP",
  "key19": "djjwvDZLGpRDZHKvFiUEaqAeahcpnjRgzhQkf5HGzkhL8zjyfGqx5d7CDNVaSokaKWx3Wqqs5cAX8YuV4h4k8LL",
  "key20": "2TVv6XknYcQ6sRTNxCEgDAAf1iN2UeeoKJut38r3CZ5fo5EWZEPck35wwtBfmx56Hs8cSu5yWQXhvyyUvDUzc8Q",
  "key21": "PCrRFG5vd7AkLevpzXzmhxHkG9CJ3uRiXyTpixs7B16CcYTZJTECSRsP5oQxc8xyacnJpxgjP9EzxJu1Ncye4Rk",
  "key22": "5ngBvGgSSG8Fiq7vAP8QCu3qmsXKnLRfWGNWKiNaYWyaM3TMLCEKGvECDnf2LJYeDyNHGQhxBjjdSdYk9yknBGvh",
  "key23": "3q5XtL65v1H6Y3YxUX3XbzahQWvHjHqxd3V2y1A7pGudwYknACtR4ubcVQeRJbHTqyJV9PGTDR4DFYHyQUbTgnrR",
  "key24": "4wY35zZjFQwTLdZVXTbU2bCq3W1P43vdGToq44ZY4D4647R8AqZNkdEEtnRDr2FDPaJi8sXcLPSPMtRU2pwNUCid"
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
