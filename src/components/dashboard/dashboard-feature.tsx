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
    "4VopiMr4C7jySJt6SVPxKTUxZjo2DWrWFBDqMeQbPU5hxTejvcY8RByFcAx5BaeSFVdf8GL6WLL9NcprEahUUs2A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61wgkVNvJ5Sb1tEER2xwZe3jvS8rQmpGkJPYHzYNuQs2cBNgedUw3KF7n8gVchXcAn7t26jppoFkFaRAK1XAYrFH",
  "key1": "3XkLPZBsVb7UxtByaiJjWY9TVnR112nDi1ai1EEttQTVHin1QMGy9k8zc7LyPQ6ANLeoowiMzQ7H1TcKLq9bisof",
  "key2": "3VpLCeEBtmeBFNSg6dprXACPQyxmyYkGmdp3rw1kQvPmtAxjjGgr8bGETNPKjcA3mNtJyqXx7H2vijS8amJgWnBr",
  "key3": "3pGvJQt1CTMthkvkePWwZWfFqKhbEqSnxuQpmwagrc4TFNhZNbUjrZ91d13PPEYttucNsMRU2cQc1Fmoph9zHTHq",
  "key4": "4QSy26icUbfwgc7QkSdXVZfFgt4Bgy3Kk7uLQTwzDyjTrE2wNqVEVyrkLKGwbSQuWTBsixHV9fp6Pcqb2FkHfEZS",
  "key5": "7CoBJJxgQ3yCN7TDr6ikgirUpXwCRpmSZwZjmvpvtXZrqRRu9SCiffukuNzzXU9EFKivxfKsuscPh9DV7qz9FNz",
  "key6": "54dnzGgan3BYXmziamHPegvBjQSjB9uxg1wNVueHhQ3t9f3RBLmgAdzLZf7oH6creHaZ4mTE8nnKpSnSeALTM6g2",
  "key7": "2iSimLeqPTYJo1ZGNJM8UV3o1pyPv3KZxvcHAT3K7T8aq6gc5mPEmL3mjJfMYG7PNMJyuWPCmuQqKpUEptARy1gu",
  "key8": "2mBy4fHAPQaFivJ7ovUrvRyMFMFxQq6TsyjzNsjrxbhqE2zoh4BoFCUfdVguYb6rjRjaVzUZ3YQmrwNP6ZTwjXNE",
  "key9": "5wmFa1xgTR4HbZEt3zhQvykoBEETg8TTGh1abyKJ7BEH9NKUQNbD8FJvAQM1zN6WjLjukskEuxFQ4acaycuDUov8",
  "key10": "1DK9s2qkaQJ4ATaTo3dy2BYEuifxPaV3oh2j9XTBL8weF23JtvesT6ByMC5X3igF9Xv2EDW78EZRknLZNAgM5rN",
  "key11": "x2q9szgmAhkj8Gi1bGGqbHCN3Eikcoc2ohEsSfekTEj8LPt5Y1zPJsNYHs1LTtK5dpirqLSgqhxeypa5oiqN3uK",
  "key12": "4TXF1KHKmmaYieQKk85LXASQYxFdQxCBG2RJPsfP98DaWKuxt9TevkK75fjsJEXGYFsYqmeikTMQFvC8KWUyLsiC",
  "key13": "41nh1FFBDtASeFqfNL7Qfqrj6DCX1T4CJPz32XkVCVbdayB7W8qaUevMTEe9bz5AAQZNT8KGYroRXTEHW5rUsr7P",
  "key14": "2QKCLA5XnCnDFHGVdw12UT7ntVNdKtwdfxVsUmzPoh2LGVXdJAL7zNrkFWtSZmiATovvUMUo3L8FGH9N3Kw3Wgdp",
  "key15": "2ux43G5NRYGoLj3DFQskz38EBeAMqyJekaYKi6GPBgUzE5W6VW6kDxM4xHRJ699CrAkREW1qG3oNrsKcup73LZu8",
  "key16": "3ksbSekRLpwWD19Rz6RRkq75YrqJqrgBZ5RPprXAbpVRKRsSEHaxii91NHkuUJH4h8FVDo1dwCnsJquGV3xuTpFo",
  "key17": "2tSyya2MsM2h7W6ozGmHJFrjz5N6EpZr5ZrW3aAV3euYbQWFSL6w7mMN4EGJRfcPKvnih8D3eeqLbcm8KiNtBVEz",
  "key18": "yVMfvpzYjDEEV72ZV3ssFiTZvBoo4YxZSdMTSnX33assYQiJXD87fL7znRW985NNTehYVqUS5hhheSwbPRZpQGT",
  "key19": "MnrebHpYCeS6TLu3EzjTC7yurfL8U45mqniJMYMEKz3m9hZtjgC58riUwwnvAqDxReyvj7MtusDiyJt36zFBkVM",
  "key20": "3oCKZZ1AVadTJZntBMrDCu3wE3DykQWumw6wrHS6ucJPe7H7ezr3A4dN8uKsPFLrYtXdBNYLicYfF3AuEGQw9JeY",
  "key21": "89hu46gVgHEk3Qgb9jUuHCgHxxim1QCbDQHEdjA9twjjdUqR83B6GNmRdUJb2t9GbFjCEMAC1LG77hLJow8iJ2p",
  "key22": "51QSMaG45N6UgHPxXE8t6FAW3k6t7SHKYwuMmJk785E1qMqtFmjXDbufRU7u3C9DUz87EWh2ePskSBxPkKdTadkS",
  "key23": "d2GhfzcxZaCvAmLUz3wxYm9ysZ5LWN4Uf8PP1TbR5gz5MBhFk2iJWUZ3q7VeXRHBjhxSiB7vxPZUanJMMKjrs4T",
  "key24": "3BWnz69VXG8aQf7qBVawVFK2dtKdSf9FY4TZ22DSAvny2fQairrb2Euz7pEd1MZuyA7BHHcExo46d3qSbjqvxk7s",
  "key25": "4JAVJYMwszzoCeFdNLgzukYy8q8XHKNYHBb8axhuxPcv1p1SdtxgtFXtxJYFvWgFnUMfkiA8imgJJKkPduYWY9U8",
  "key26": "3osdJ8u88UxiT9U7G77GqqKtaRZxKuKwsLbCKAmwszzjur7auuWHNvPDngZP3Cvho1ZVUWBw1jDhzma9qDDzzvKy",
  "key27": "VEWHup8Bbg22SMZMD9U1yzwBAqFron373rpkwnfrrnd886LmggGvQzRVuLL5prf7KCZ4fZakcHToPuM3FVXKCXJ",
  "key28": "46ShGC9SM4MH2YxTAGyYcra7knrwYtrxB8rZ3ssriPzdqFoZBATx2oYMsE11N7QqJxKxueQb1B9hou2oAXu8NPD4"
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
