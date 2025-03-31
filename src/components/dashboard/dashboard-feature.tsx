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
    "4Lj2X8gVvuHqc1REcxnoRFBT3W4bGMBCxmfr1542qRg6PHc9LyURhrac5SEKsEvY5Cp5KwYeDdvhremPaheEQ4NT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CMQgjLaqEdub5UZfKkoyTW7jVGUK5QiCGnCNGRPbe1Xpopzr3CLf5hzHjyZAUKLFcdEkPcuowY6D2hUCH58px5u",
  "key1": "23aicnACimJYB7Rv5JK2dgx8GxFqRVu84JpzStdMcNkXUD3Pf8SSMXKPmXqX9ACBFW2JztFBB3suQ9DBHX75cjhB",
  "key2": "4kXYSXssKcMkCG3c7Js2e4NLHaD3U63dRL7YLB94hf1bF2aT8zMYSddEeP46DXXunFZ4j2tyS7fGmgQJtydZszBa",
  "key3": "2jswU8t9gHZhum7oCdceNyXjas99bDXM9xGyyF2LxFqVHYvSivkN9u8rh3z3SwWa6FtgHqote61UnEidsSyoRuwf",
  "key4": "G88jMC1epQFy8nuwVY9eJm1q13n5BRCsq8wnc9gXg4oWovtt6tD2kuUjewA5uaZgfzBT3zTex2anciwEnVNhphG",
  "key5": "5nZnx5aN38xRv3uanofbVaRSUVi8NnQRzAXr9hWYDgYGxkihtjL4eRTBp7nCK3VvCPvDUENvHE2rxq2qNC7h4Vat",
  "key6": "3nw5obvoNDBj6e5mnkjdgM52a5D28d6dqjzngpJRUEQBpu8jn1Jtegj13PKmhjLJ1N9GQCV7pT2aoKAeWZzqViGK",
  "key7": "2zkTG7rLrPGe2dWhGGMdKJ4v2A6aef9BXvKr81SqJyDoRTpvuqAW3BUnFWvfAL1K35miYi1NHMTFf6zJHDS5MQ55",
  "key8": "uf99q4revhRAcaUScqBmwNgEESVwHUFwBmYUPhDmjzcJx3mquw1gvXUHfQHzL9E7kuR3qK8HUV4hwQ5F5u9DiSK",
  "key9": "gYGccTNrb6YAtUxxKLMGPTU3CB6aGApXhZzNCT6ymDjETeamWm6Syknaw1NPRn5GErM2MuycrvmnFkw1cg7GKUW",
  "key10": "3swsGnuPR1rvSq3VSGuYPZ2Q4P6rRX9C2wjbGmBL7di3rQfT3TXSHYGa6Lwz95xkN3HsQzfG3X2Bp6ou3nh6bJMm",
  "key11": "5c69ivL5ggGrp3kZvEBf8Ek7YCicw6FVaWWfbTiDKFR88NUjBL2XhYfbsjxXYFxpYqc7M11vmEfV8jq9CgDCLXEc",
  "key12": "4GKAURgmFyy3KSYQz6E2Ytq2CBv3JetukPschf7rbXCjeCf5Q6388DCCJapitVnxT2n6YrGnHjBo2MqywHoV5Hcu",
  "key13": "4DP2rYtHxqf1Yv56cFH2DKXbJ2p2YwU6jKtqTEHockKYb4XfDqoQfB8883xjzoQLSZZYmjK6dBzHKFM2TUh6GQzL",
  "key14": "2S58bWXsbEutaUxeyDrpaAkBcbgMQUnqPxmMkttHeVUcW4TkuPR3zmN7p9nhi9Z9gasmKUfaTUimiiDJonotiCBU",
  "key15": "5Xbwbhkk9T88nnFkvTHeb1cgwALW3NaPPpXozZ3Wm2b5XA8dHbZoRyxwepJhBkHakqFRBWDeVmcTUazK64mXskkP",
  "key16": "AJWQRjeRFF5sz4HPgjf3yRxTtGjRrdRhrJuzvcbMksMPeSsAGFsJMREALqsFi1EeZJiwsfXU7F4JzvzSEQkNfJ3",
  "key17": "4vRnWAjbg2rEeiU9JwL8ASVfcMEFQwspHgfbHiMVrztEja1vS172KNKGiGR8CiTF6hPfUXE4iyHffswomfaaPhR9",
  "key18": "3YuVomqcZV63XhGx4ovEYdowvMuubvLEdkyuJYXRf4d5Kbk4VfYBfcL2bgRyZ6uasy1pc9eArMU93h3A8fxVtHrq",
  "key19": "KA7i98nbL7TnokgzkXWCnquf5Pb9F7du9RqYqzsLyXKEjJUBUFakHo1rTcsakab6bjYhzVavrSnAVWA5VTmdhqD",
  "key20": "44BqkvwFFDZ3WZXDG31SvLDK78SYMF3Ao9EYKACh2SrRwgpmSpsB8NQgqXthCZGnuxcA2RKuLLPKbPzdD9kHaXbH",
  "key21": "4sT3vfhGdsWBiSSmmTJCFM4JD7u8ouFTNbxJkW3fEdcFvdso4qWUbKjT2g76SWzshvgssoeUUL6VKvJXih7bLCbK",
  "key22": "5JUZsGLAou1cafdpN12E6mTtyicJGqawCFiWibs3TBvtaUnLtCsmLWqWpr9B6ruPr6rhpPv9Ux48CWtD5Toj5E47",
  "key23": "23STD7t6Srk5NGDyukczNA2vnZuWr2oDpicf5n5Hy3T8jpnhUt5D9ZgRTQMdNLi6eiAqvixgCdRfVp8gybvbAyXw",
  "key24": "pN4nwMiBjqQMLBiczdVBWnbt5TMMsfVWwxZAq8fbqNBcUcJrUQesYceeK8HJ1d9gAMo3vRPWoNiMCp2R4xhUqA1"
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
