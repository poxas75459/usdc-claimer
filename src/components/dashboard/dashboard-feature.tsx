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
    "4xBqkH1uNih2BszumYZiM7nN9vWi7rPKXtB5jJXodjtw2DAu1m6uMiaKbtVCJtk9yuZ9zG9sdvYKBTFauYPCatCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MfGAba8DDQVsQeCEUMhzRyVnv6y3sWvzdtC74SMPmabyuXUiqaqkEjLTzcjkZnZkiMJN3anabFKrXuqMagiH8tk",
  "key1": "Mo83UaELgysUecQqsNafAfStqLpe6rDDeXH3DwttLqjPgxJVGMgXKo7C9ouPKcFGaXoEvrJdKrxC5GBrNhA77Zj",
  "key2": "2V95e38vxCEARg4QToKqikkBfr4hy3K6j6zmdUApPZVQoNdMf8phyfzCC19JXJFaetZUi1G6soLUkX54yUZxTRw2",
  "key3": "2k1xmSBN2GdCqKAmcF4vb27VabYwzoKF3W6PvygYRj2xt6J2QAKLWmt1q8yrVNAWa2ZhfeVrXbvZeyFAA2a3Rr6k",
  "key4": "5FWbdJPBPKknSJJmg8tJMNunci5YwQUpDDfZCoNNXPv92D7zHBoTXpPfxV37UKVFrZeGHMjTLuoaUhZgZGwcUCq",
  "key5": "5JziFEFKQTKsbxn8D4a7EpHbT25D5bSPGNYc1CxQoS7X7iiseAntsgs8XgKYtY7zbJ5d4HbJznwUjCRFjHx5p2rR",
  "key6": "5v3LoNKKJViMbzeMRN4ugfEGaHSCD9hQSkcccFjnCNpTUSKiDoXQShLkz9KwXkJPRqy5q8YiGc1qBb7NvRm9UAc1",
  "key7": "329RdBWrTGpscTAvK1F12trjNeyBX89fR6dyW6eYuHd3cFcVSuJ4AWXchveoSPhhyKH1SWDDL6LDBf9s7NbX4CPS",
  "key8": "5LqkamipYzpEUoNsQHeE1piZ7BVXCwpsSecL6NQqs9HtFdu691m9DbHS1orWkp36KYYQxP55Lg25t4k9XXfiC7jK",
  "key9": "2TB36TD2YMg6KRYDRrVJVD9TiCSn7FNVjW9pxjUYcnYgsmZm3aJ7L4ELrhuuuFJ6WCjUBB8a9RaQxEuabFbQ3Sf9",
  "key10": "3kZ3BnZCHjfS82H55RMPZL8dDm8zMCnkXXxvaAZwVugpSn6FncCcxDsiWURkBptibgdAPXfVzmM2yLdYXZ1bUP23",
  "key11": "2ZVgMfqrbfrNVo9jSmjv9aahkJobVJPai2fz8HHezhJTStpYpk9kT7734wfu1jmM34DTtWJLwPWEWpTebsJnjFy4",
  "key12": "3Bi3fZ3ogdYQkGBwN1bVkRo3EgGy4H7zBFxwE2QdgXyb2RMyNeLsSteVjS9GfdFTFJW5UnUAEK23RPtKDpMyMheL",
  "key13": "2WWMwjEeDNdjq2cDmUEHVkXqev5boFWTJZ7f3ijyKt1Bc3RkGwwb2JvBUKgvDYLjzEiygBpy5e1NDUM4ro21DmxU",
  "key14": "5khSuDhqtWJwFiMShsqbvwhKnNhuV9fxjQ4FEExn4EM5g4ToCxmG4iZbZmiCmLEt3ZdeuHPuziCXF1CsVxzk8cWj",
  "key15": "2DbVmRJCQofhE3Q5YF2vsok8DJUjZQ3PNDrsXR695T4FRo6sSX79WTsWiLHvkZVR2AvuRvZQNK8Wcy1APJzkmWZB",
  "key16": "2jEYiitZwSbqnuQhBMb4nJYuBHdbCNuFaDnhT9qUp7HDXvhpHKrRMMEhK9ckm5W29GwJHVad2qrWQ99MisMoDRZ9",
  "key17": "2zpgh4afNZCf4J1BMZnHXkuFt86PYHMs4vsTeiNpGWuETPURBvK8BY6Z9NxQi9KH3RnY4wQAMbcWCEG3BKP9SJk6",
  "key18": "7CZADTLaM2XU46SWNv6FMCe5Y7jTRA5EHe1mBMZ1VmWUZSqCaZhvFU2TLBuGmGsPhQjAkA1SXm7EL6YEQ8DFwdL",
  "key19": "65NT2Rj6TtUCP59Dr9Dfx8Gy4QEzhHyWuTCHNPodBR26LiWMvrs4BZXHvvvwFrbYSPBXpn3gmncNJ1Y9VQffMud1",
  "key20": "3HzauayPZ6643RkpgP5B9NA6RUCEAFPKFbgrY1tyfb6EmBt1r5JK3sA5AdbJiXEXDTLg8JsHspzRmKDWz4Z2Sf54",
  "key21": "4t3K8Arg4DDtU4p83rmP7j32PDotVmHzN3iFvZVppnjx13SyqsRt2zFPiaF1skDoqmi1LVgtBEJaSVv38yFWba71",
  "key22": "4pRFtMrpAtrRyp36TDpzjTL6b4o2W2MJWb7KzhV9WLDNEfKNSrkeMjxVLe6cKH1ZwLwNUMJPqEg7hVhbn3przjxj",
  "key23": "51CUYS96xaNCXCNs7VMoXpRXMDDXbtWvGoyzjv2hxpvck6Zn8mjgy5efAUQ2JP7k5xd7FTDs8UzEFGsjsdGssi55",
  "key24": "2N1xTHKcbTJxNCGmRr1LTLMJovGfc4zUTP99VNpG1j4oJWuthnBqeb7M2EGsSRW14EHHoVHQdWxJT5JKsCYFksN2",
  "key25": "31p1HV7fuj5ZHqwgfZDocyJfTPYsNBo9WGLaczzjzW68WfqPsGFYuWkyNR8BW44xgZ3NYuEjdGmZ2qeWCyyZghxB",
  "key26": "2PDeZQ3jPjM7xxd3PeF4BHopqSyRoRaQJpY3Uxywt2U4TcmfAq7cEG6GVFvniXQe6QQFfGk9x2zC16UpQNTLo8DH",
  "key27": "2ehsP6zf5Ezb7mS97hMhi43k7qsMKRKx4Xqkjp2cbg6hqptBKNvKDQudMv94eqzFYVkfaV8jkD7hzJZexxVVxkSe",
  "key28": "5Xs9qfvfE2BeBWHfpDbLDXMwVC97pTbEmb8CwaenJu5AU9UFhsgBqTDnoxzUvHhFnCbr4aneWVRjUqLMPXdGVqd5"
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
