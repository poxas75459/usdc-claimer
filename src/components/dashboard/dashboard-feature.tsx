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
    "uUCNQm7UeWRB2wm2ADiWjQCXffveMeBn3tsb4M7XS6cVym9XCfufMURBj7vLXsutCVuW16vk5fxgG9oybjefUAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h3muC1TReAuu1jMNKfZ6MUcF4Hpsj6z9eYwR3gemsQoWc5ufoi5UniswJvtS2nnTF86UhbqeS5HY3iS26Yd6bEY",
  "key1": "4AAviNHeEC7HB7pR7RV2eApFTmN8ySnxSteKh1pZUyoKRG16Z9qheVpMRG9swu2Ksw5habzcxJndzEWmGt9RSxN6",
  "key2": "4AKGBeXkgHDR76X1b1TEr8SX8vkDsKUaofudFy7LuK1XAYWmrybAWpbgj3YMHdR9mHAyqLNB8cSBDVXKkXnJedXX",
  "key3": "nY6KDErEQgQqg4maxKWwiTC5vkBx3N9bvdhkDSqA2y45VAm4ysSoMSSYvdMpYTtuqwcEE9DMg4vVYeifoqTjqcJ",
  "key4": "3QzTyvES3wDg9jAC37KFRYrQgCceg9oTMnS1uz9nfsjzKQnY4WsaF2qjspShFqEfb9HdhodW36Aj16DXeViDWtRg",
  "key5": "x651SsiDNH91svkwtxPGKiLJwicpHQarY5Z6zAq8stn3k7s96EkSTjBTCrdPnuxM7aoamUeLNAXZeK2kffKYaXL",
  "key6": "5ZyjZJKF8XSzzrVZBWMSpVvH64izQRpxnxXcHeDbPPDyy5pv16gfidARKxRix1FhGNThHCNRFXwDnoHEGtybxsA6",
  "key7": "4ns91DhbjMuik2K319kNgGSAtWfaNN3ev6J7cSkJgk963sx2FLjcFfZoQzkjk2R9Jao82MTgZcWUiih9yhyKa61F",
  "key8": "63cozVVg95Mb8XGxmZmdjj4ZzhNayCEM199vox6hC6EdpNaPAnFsY3CVVUUumA3tN9YCX9d1p1okEXVBTQN2HwkH",
  "key9": "pi3Ha3n7qcYvp37djU4fWZrSG7nn9ZZuZ53fVVUjEFFZARfKy7ubHpWiF9XjdpV3utm3KCVjoHWCH6MMy2vNnS3",
  "key10": "2JC2vxvwxoGpc8v7bvzAeJKVEHcqZnKJ4Fx2g8jjYiEvNM6YAoBiswdGLc3qT78ZSrUvPKxqbDhjvJn88prvjFSC",
  "key11": "2tjTxTA2GZrw4Tcokdw6sPEYDeTEZHSYM3nsWKzR8acRHmXpq2V7o9vwSpASGEqNaPqQVanwBBxLDvZuUFbHv9VN",
  "key12": "zGzYWn5WfEEmhMdozHbgN4aVJ6uZqGxBNRVfQvihwof1GvNkMfGxeDYiQwcruJ35radvbW2dik7SnUUHNAFKj1P",
  "key13": "4y9XUBeeqbQnhHULxVTE6iUJgWxXaj3RKwVbHV2qVhAWfCv1Z1y9yUf4WrxDCJLLzuGz8FWAkYtEheKE2MguWw9T",
  "key14": "3UXADNkLVt4dWRYojkF1Ku3NzZfK9eCYVjtENZ6v959UjWAR7aouhoydsJL21CDah9mxURKLfyXrAbe1BQqkMRpR",
  "key15": "WauBaKPpYbixGDYufuoMfyhJ5QWrKQRoWoBPsLrPesujFTy9UqzupXvE6udMTacB7KWxyrSdnPtLuJwDA7CYxCn",
  "key16": "2fQ51RHPc4Yg5dsRNa61QDSvBKXi9Vb6SUdModTfUmthBLpUxpMKii6N2YwSpTYQPiXUR8q9cRzv6erPUVHVGoeX",
  "key17": "5sFJzNwiut2W6CbEf5BfNDsEbnVt3ZTQguaZLPoQaDC5JMRZ3qdsjhn9GpDBBpXMawpxMsydRhDD1CZ953o89djG",
  "key18": "2oPDaaPRDR2UqGJTcSMUQ9jGWA7RaUcyRWTn9TbcVfUzb4HWohudey6SbqAD7AP7axCBMNeBDxiYCeExWcECnSNV",
  "key19": "2ZeXSvpa2szrPGSHePMVGbRntzLUG7NxQCe57m5o4nuBD7YYqrCYYsEw2GhLJwRi3znDVrD6k9JiSbKX8d2X83Sy",
  "key20": "4DtMiAN8njrKHo7EJdSxx3umVx7xGAuQLz6c2Av7GxJFdCUFiPSg7QKGYVh3pqBS9TRdDrVZsNaXMK36stqhbqwT",
  "key21": "2Ryyyzky9JHp6jHXHmKCMXsD2oKvDeRzXYxPozeSmEQn3sRiQeUcVJJyzCaucL9YFY2pwuyoiLyK8rAajPpkpMdt",
  "key22": "3gWk3Nz5k1QLDB7U4QuNk6u9E4FfYhpmg8QnU3hJo6j2eCPVVDAtbY5RdqLL518xuZ4oMbbrktEjpu7AXYpMKLQ7",
  "key23": "27utrvsFEho61nvY3K5b5Bjp9ABhi8cijfyVfEy9HjUWKWeuKyAoWEvzC55qQw6dVrAvsfq4q6pyCAobz3yVPKTb",
  "key24": "SqnzqRD9s41hi4FtaZEVpwtFjoszySiuEa1wewzrxkc9X7KP1YuTZr4ncYWLhFQ5LHhsWrXBSwonnAnAA21hC7H",
  "key25": "3dTdmcy8k9tQgiYPGUACkNF9FhrasBpAksqp4Xx6HbzB6WdebDoWbroPeHgn4zHC3ZosxGqTS7zFC1aQkQZL8SQk",
  "key26": "5QgKS8QBSwazY5MtTPpbjb6htsPXy2jjeuJTQucLLgP3w92Q4rkcgwWWdgCKS7UXy1nYoN92mAe1bJbShig8hNTP"
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
