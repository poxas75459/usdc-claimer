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
    "43BVJZWhK4UvUGAfEcR4E8DhGEtS9TvgEt9EjmGJtgZ4yfmeae2XmW16cf5SsbPgRDyx8sRzE12e2DM34dV23D3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hg9GATCmVaTd9GQyTY5AA1vegijk5jTo8JLkjSGSXjyh9wgHLCTNMX14WBaQmiAWEe9ABbzt93iW3JkenoGZJFv",
  "key1": "sL6BM55pwLZcYtTuf8ynoM4wADqfYsMtXn9ja3jtESA8612AWohboU5EsH4rXRN6nRzHRMibFDPvtoxRdYNa1uR",
  "key2": "q8ejCf38rtRXauWjTiURxVbSwsYoWmgSiEfrgyJvPd8Avi3qsKZexKbXUb6N2KxWK5tiBhxXr572ysuTmmTkGAH",
  "key3": "3dZheBDANRMU1LWywfTFNBcqifbKYRBFTyHJccC4AYj5QBC1wKG5kyVvMj1ciCNk9GHs2GJv13nyJo5gpoa6UXdU",
  "key4": "5mg83xgXYxW8Uyxnt7C9EPkpoYWSpGUEbEcQWdAZt6VJhyDTtx8NY24XAoVkEPDUXPxSiM1t8ik6SMhyRkaoLMiJ",
  "key5": "2Xot6CFUuysh4Z5iNzDcArWh3rAnTV6Lbhen94S5xhfGHkL3HyCQR1rXj6ufCg3kBkfjVpopPAnWWqKoMUakU6Ln",
  "key6": "3Vv2ujFjo2AuzDUfZDGkKobinXHc6zV5SkEi3BNfqUJgubUr3QyFcoNBTSWqTMKUfj9NAjD999rVdFRm92n6Abwr",
  "key7": "8xnWX2mhDndsNcErjqEFuVsWDFXzANNS69fwYHNKEif2seakaN4KREP1YVnhDVDj5jM7vzyisjhhM8nuuUoZhBf",
  "key8": "5dUT4jhZmP1vagQ6iHb7VJnviWz5p8EJMzxpRSDkJdP7NejcAVHipYc1vZRBBN492MpCrgZAZBpDzwFM4gkXVRHJ",
  "key9": "4CfNkiP4yhuxqErtVzWCvrosfdSYkqmGPTxqixgYU35hqkF8Zjb3eoBa9rXoc49na1PvBuFbngJFWZQPXPdBBEHC",
  "key10": "4653Auw7ycoEZLZkMgCdAFCnaSetmtX3SxWp9wFA43eeiQ44JtKbqkqo3tShr5gprV2rb4UwB6iUyP127rP93rg2",
  "key11": "3mhyCRzBeQN6RtrSbzwynnQ6nFUacyYxCQ3TcgiJ3opHFNSE3zQCakHwRA8ggEfHPgya6ciNLPMeShZCCRHcnLXB",
  "key12": "34y3F7WJSjr8QBCSmAx2pP9TjykTEf8hb7zGiE1Vrm27a5VHWTK1DivqWvNdwSNCg9K8vr1ZxKjnMgQyJZ7hyy55",
  "key13": "5gXB9bCdWzd3FEWz8FxyfxHqxNdt2xbDTiypg1TBbYi8XZiKgxcoTMw9AMxBfv73M2vQKcBf6Mk9kNjYoLEuX8AV",
  "key14": "w2ZFFWvDtZ1xbLtUKDoWV1YeNjN3Ze51U8ZyPJ1kG18m4tLnHcVMNgu3NL5LZbx759BDFaeRos4d76mY3Pmy6E9",
  "key15": "5FAujfBGpiV7X4dAMXE1ggWTTx1BtCBVMZ4jWWaeihPcmssAvaRxmgjp5ENaUbH1fQBtbroQrzm4pDDaNzFBu314",
  "key16": "5yvZMEQrC3dSryyuCYQgzU6xpWMtjaKDnyWefETjhfxaAf6efvJ8QFZ4BpCdPDhZupX9Xs8mFNDDoEpRB2GTxCJi",
  "key17": "i2ccrBVZ4Cuh9f9dMBqR9fHpaPYksDxD5AA4AdJxVefJfVjw7xh9vdeEoVc5C21AX8Nz5b2do5cDHwwzoG4YjJn",
  "key18": "hYUL48EirMxtS2ezJcVThc9f5W2hypHPDmamEzbTSmk1wvCoLyoqkfA5eYSShMcuekdXLoZppQhUScD8ERb4yye",
  "key19": "54E1ndG7qFJgMZeqtLyCLcFKjt2oCJwVmxQaD9jYtimf1F1mMmjAzzHgwahSwxrvzRrvYdX54YYfSivAhETdsFPa",
  "key20": "5e83TNfKFqf8vi3DnChaYYemeFiFQJiPMZqYp1z8vNVuLxs54bFWiQevUiVWxcyRmJCgVWKtx95YUGfYx2S4E1KK",
  "key21": "4Kq5jzPA58mKDeVd8KFXQv6qC4gJ7tNDSQNE4mBc1G4TuvTLMKQYBQUc8nitrkNdWGSSB2x5b1dPNU4VHj2EvHZp",
  "key22": "2BunDJBa7s9q9VtTY874LuEaRCKwSwBV5b7kehquN2Grr4XeBRKwkGA98HqX3pcrMSnobcnpgj9UUHq5Axs1DH97",
  "key23": "5tUfihyY6nGiWEyrewZXyuydVKy32VKNXogYZsXUDx1cG2iDKTJYzc2WJyCTjr7n3iTze8fCHKBbmqsjtDV7zqLi",
  "key24": "5WUgpyg1xH6j6P7TkFcXtiHCgA34nMA7TeSe2z7cQdspgCwLpipza6NB8eSB1TDZ6Y7jiZkk6xobmeXy7nbHkyce",
  "key25": "5gZDir9jSqcq4pq3s2K4YztMGJbrtjTiJbLQqwcLmLdupZr1SN69zdCrwStQVnb7KUCHBAJRvyqQxGvmmMWwd2sU",
  "key26": "4ZmwSJiLob2R7Kw1tMw52CMdDF3WtmtcR7VAWSyexwfCwzXdvfFuGvbGPdVmPSgsjDL26B5U7Cb1aSYrW76fnTF5",
  "key27": "5NPq4rjaVppH418eXNvQEDHYmiJjzNvcdoTPfCkZMHtRukBf6V7CedJoApTot1RJXTFxsTdRMcRAJk3LGk3kWXFR",
  "key28": "3N9VG7aFG9oJiZx3RVyEkNySPEnMxZMczQiuovcEmd4fi4QKkQ6tntF6DxY8tQgRUjJ8jjaZE13WistzY9oVNwua",
  "key29": "fgZKnU1CAq3gDrriiHh1R7jm6CGf2ikDHrBfe6FzFdyLLjeAZNSuRMUfP1mCWHdvAfUNGoZmFNK9GSf5PwrPwbk"
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
