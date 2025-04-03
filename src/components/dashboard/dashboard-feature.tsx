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
    "4d7sWWxKMbZKFTPfkZyR2YwUvKnepdwBTHvfHoL56H783Fn2qtgbPmpvLWevGxLWGuttx7SF5Uce4otvtmDiguVu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qgN46XhAscfagr5ETP9YWjE6FPSfobLp2HE7VecXdqz7GrrDa7KNyQmUooh1eyNDbGq9ds8sFenB999PtLt4D6S",
  "key1": "3VDuzip83S54rBiz1PwzShUnVuWNxWw4epMd6WTDnwfJk2uQu7Uo2foXmSNeWMVznTLAqyEAFoSu2djcJCthim8k",
  "key2": "FA3JLNm47iDqSuhrPu43Xrt6U4xTipJqWWQ8Cb5NnU1Q3XyqTqhECLD9PRVdq279XGQj1YiWYNgcHwLiuiw9nVw",
  "key3": "46MXCCu9zwK61zQzYiqR6sPfPqBSp1fTnaCi4cRYCRoNYAQXTxSTCQgEbbE175Do5McmXXf45FvuhJdemGES3XJ6",
  "key4": "5fDpWdK9JWa3fNwjwR8vnbyWGsUq9Z9bLHkwHkGC1pE1HTBr1HSufJp2FKHJjU4fjvAgiMwbxgxuU1TytCmC38VX",
  "key5": "2zSMTEBHfZwFHrdePhAWXo6vrMjrgfwgWt3fQc5JopmSXwAHQcLxvhGQgrW4a1Uiu1EiCXZ8S2z4ysKw9RmqZPbN",
  "key6": "VBUJxwQfT3RTosBdxe5QScDYEx3egqnh9ws8jfgmEkJVdDVdzTbFp3t9sqQTGxDQvWAfR4qU3QFsEncK23EsPfn",
  "key7": "4x2SboYU7fZZNmtRn8DvXH199hMjBmo6s7U6aQiQKDZDYZWgXNyMkY74zdruyz3ddTuoY5rT6XDUPSPLqzMvTGGo",
  "key8": "42BHqnRtVpB3TwebQpgFgTedKqTGWXfgpYbybRnD9VJSKVz6QnSatFttuAtUPujCq72t4QL8K3XhjCwR6RTTnFuR",
  "key9": "3UyTGLmEqMGCMMJ5NYapsUSoobFAx9kPAtEc7aDzemFxywoM8BRfT8PvKdeWkK8UiGW2Lv3ChCQgUGLLQmvNC5aA",
  "key10": "5vuwu9JMQfvgKiaVwTDmsJSf2STohGYSmpVtj26B9oq9cb4KwiGNqD1HHRB9MpZazyEZZC7ypbTRghtd9qKuqNvx",
  "key11": "2SK4D4qEQreDUJwbbUpRHfGaiGaZ2SfQgiiuFtJ6uFaBYQAj2oHicsosSn6MiZ5FmttY8fo3qzz8NdzRko5s8eaV",
  "key12": "5YAjrj7Nsgk8F5EK2sv3dTnZAZ4uGuREgjQciwVchkmtrULa4BCb6GJGTVgQ4vACfH3xAf9Uh75oBdvGzSSuHGn2",
  "key13": "43628SKM6jZLZwuRmZehDfMQLLrvUpRDJvEN1FZMbadAAwnvni3fyE2hft5DbdMKffMWfnd5PBznRZek7cAE6wvi",
  "key14": "5EmRabQPWUDnhxfT3YkAGyRhvZriRAWwvEBiySn8UBcsakKgtnktyBnCpUhVjCzGtexWG7VwEM8LswUdXGA5n4gL",
  "key15": "4VEWDGPDW9docHpSBTEJj8AgKagkF5Bv9UhyQ8y2zmpXt3hMmkTnDaoD7dnQmPXnuYgMUp53oKpjcGQynBTxDTLd",
  "key16": "3NEzbu3jDrt1HjFRMnRwffQxSaXotSFChh49PSiBPzD7BpvJnvJQBTgcYuv9JxP6QuWAFg6YJ5ieW6b9oioTbzCR",
  "key17": "frzY5ns4ZD3ztnwYX3iECKWReSbb13pZBcjfR7uaYHiNDgEcrDMR2BBJwPqjoj2w8D1y1ncMeRhu81YDsB3a2M5",
  "key18": "32tVaP7zg3PdCnZdhfjvPDfy66ZHMqRbLawTyw76Kum9TyaToYBVu9V1s8KgiYks4nEj3AKtQcLRDo1fWjj9KAHT",
  "key19": "3hXU8hdw4nQoh7HncHLnfEsBfesFPKjdKyDLYNJoPa6bkrM6Mmf1Q8yThbcqVLY8wHh7P3LEfjQXwHDUD2Gcezwa",
  "key20": "4mbjwo3zTrhw62cUnxcR97f5rAFzLB38sidnxJ482qsPB7bj9m6KH8hkKWUZ3QFqcs7nz2Y598ohh3rGL5YCPvRq",
  "key21": "3Ah9oSHfyA6dB5SbDWTWjJfHTBv7qTTtuwuKLzexwBdcNwbNu3QKcdtcAuqJSPqkcgWrhK6uLGW5tWqmpk11PnHx",
  "key22": "3N1obcRtf21p7WqVJpxUYdvKiJ5X6HCXNKU3hVcmjzZ2XgzLVE2HMHb3RDG4QQPpXqB2E2vjsfmruVmJxE6DgbjF",
  "key23": "S2UXf8qpT7hrk3QD8UFQWwfGxag96cKPxM24zagan81jbbdYR7d1m9bPc7deytfEMnAeqhW7HRpr7rjXMb1yVEg",
  "key24": "4xj2mnR8aTmGGiZ2WZHJJJfyehBVbR3eH7x76YMkzJKGeDsygYWK8W2eJtaCtCbWDVN9693LQtSdtwAsCccUbf4f"
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
