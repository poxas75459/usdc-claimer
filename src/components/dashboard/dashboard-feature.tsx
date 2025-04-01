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
    "j9EUgRZYiViGjXLcJ8unxDk8jCJBKtKCv5XHcZZZSnheWeSqQXfRBQJ366UBgo3a5d25L7XKyzjwLEwoj5X5ihN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CTtrmEWmi9uPCM6oRQnKYfikTPtBCmjMNhYeemQfr1FzgmsU7d6dwdbA5uWXCzyZ3XqUWC3VbJ5LGhu1z9RsqJK",
  "key1": "3AEBP873DMBidn3si9YkgKx9vp7ErzWMFNaMUGysL2RMDSiJ1QRV8nuHbE54ULw4DcHRuidKLcrAHfQRd7iiPHEG",
  "key2": "2jw747JjpyJxxwLBFmQ5DermugSLkiN6Ln7VshzrwE5GzzHEfDQuqHz45KdeGhvKjW1MvkhCjfd5DdhDCNDNHiXA",
  "key3": "2ZZuuXJGaVmLcH4WC7BFV5dLdkNjJcNZ6DSPm5QdkiTEao1DAnPgfr6pLkiZczFu8t3sWe84Ye43PggyXJiYVmYX",
  "key4": "5DgV3LhoNpYptNv1raNcwacTf2ba2ocZ93VYuT68fSyW7JqrrzRh8xTsXTfHxdEXiU7jV6aQTXoyRFiGeMjSieX5",
  "key5": "2fUgAjRVGcd3MfM4PRcbpJmJsgTfxdbE1KVrMQ656CfH3MQYUWmdWSgVamhiBriQRX8Xsvz7p7P1RCUjPdtzxvcr",
  "key6": "2VSKabwUcAr4aa2EVPfSR8XZaQtKCbpRBQpnN53wJ2eAMKT5ZQ6Hm4DibRCXGVfi8bSXZjDFrMhTBnyFmpiHUHae",
  "key7": "3fkG6iYDE8oEAWT6CXzzWP7GWFS88qHcANzfGSK4g8CBEdCY28Zgm8JfzmHh5Tn9z2N4Y8bmyz99e4PbH1o1dE8y",
  "key8": "2hgnRN2LmMSaxhWB3myyBhUrquka1uUQn6GJXr6BvBEzPWbE9JoSpMTN8Ud46xKwJx18Ah9JJN18rkKYQhbRFHJi",
  "key9": "2Vd2h3aEZH65Jis61EciRyZuvYcgJwq3MGvkSz62WV9MoRYfA6nQH7fYE7VvE53J4xX9KqEbnEai9M86xHcBnouP",
  "key10": "51UmYwmLJaYT5Uv1VMUAjs9666s6TYQQrtVmWFxCN18NMQBTxnJJAshsDUjLvX7vFrV4dQHAuDn6Vo4bo5Xeyukg",
  "key11": "2Rd6CDiL9EqGfgkECZQcuoz4VEWFmZC3369Rp2dquHa9TDstS7k4ge49cF7Ff7rtESzVWTv3fSR9NatZp2t4a2Zr",
  "key12": "2FTzz9eynpcFXozypZX3NKvxCgg1CticyTvpuXvZ8J3EyzngvKonezrs9a5QBms8b1PtHBS9bEiM6qTid79ARMMZ",
  "key13": "5DGmZQPGCHrEq9Av1iov7DtwJp4Meua5x743XbtrzGMtFqVe8DhYESDJGXBWNYpog3YgkY3E8w22SMFH5rxPanMx",
  "key14": "5MQ5BBJgjANPLMiiLAT5AwnFnSFyWAwtk1yGSRfiX43xFkxiTCrPeUYEDGf8VbhwQPyae1XWmYpETZ7VfxsPLGcy",
  "key15": "4kKtpv7jCSh2P6xEDYf2AoG766seWEkkVNNtLfC9BCjDTe723JzvayPu54CmGeiVeWvRRMFMjQ9prtjDzoqeC3px",
  "key16": "2MHfPKRpMNuvsmnWrTLNXrBK9MfxuS5NNqvtxP3emPNvRo9zjvqDNXCBCCHs1DzBBvmD16geT81yVZPcHKGqHHJw",
  "key17": "2zz8KXVqJGEVxojh5hCN7wM9yupzd3v6G4ZiXPDeY2aybkkiy7Tknb7DGmKDiDuAzKYYCDkeCAQ4spUVLaaN5qqw",
  "key18": "5haT8oWcEDEedG1AVjdRpcx535WnyTywpZjBksWmKkV6PmQAmio3iehiD3sWFuoChj87t1r5fQtcRXHVVvfyfQhT",
  "key19": "31qL76TUkcwfPZiNY62nczG5HGtPVRakKcwnYvkKzJaYPR6qXZ1EyEv1h5cC2rn1uGFJdJHVmi2pTvkPmn4NEea7",
  "key20": "3TD3R29s7FCKZa6VVH8ANPz2TEqrzWVGmmZWpWzYuZLShe41LwoFwd9NpE7RwxE38kXQi3aXB2Yr85dK4sWCU7Tx",
  "key21": "2QWRGrBHt2QhkRq6U9Nz75ofskyH8c2hskJ12bonJT6EuFkUSvbBM4VDDCuo5ECtpyCEPSeTP6hYmv39G5CCDQfN",
  "key22": "Qq5PmDHz1bXGdTyQm8jVr8rZ2TYY6MBSDtxVgwCdmH7oXv4WwB16ATMLXYfo6Kk8ZWqweAkBXJd7doQf9udk6rw",
  "key23": "4nAgXiHrqkL5ZAUNVQGzFaFiT4mmX7yLfmxvUJjJquURvKmSRxP7pYfy7hMJRZKMVuWHyZ5UE6sq44ik9M3BSmDm",
  "key24": "E4P3R9NMSzEYaR5Ezv9HoWkFNQEkW6wq3pKhnvsQCn8BCjf5LoFvJHvsSD4xu4f4SXij81SbmSwemcXqgK93qyP",
  "key25": "5jmfrFkLYzffFb2yCJLwP4mGNeMrmVD1zCZ8TSLRTTSCEhmsqsYHrnt4S6zqgwX8qiuUhVPB8KXV6YnkBJCmUgZZ",
  "key26": "3w95uMCAu8qCmVbVUxcQApQZQ4KVHAd7tinm7Vjkaa1xCpyKNtZV3KtqRLv6XnDN4E6rvMbqpMbH3KF2bkRjbaPf",
  "key27": "3pt8QdUW9fQyEp9HSAK8Br9bThWc4JgYmzBQWSneFvxRjFhQ8ZPQGrRL1MFgj9PWBvLCgKvqxJWGW5gBhneSGBt4",
  "key28": "2WftWw5RcutZTgqr6d9ntAiKcCvppLfHSr9MnwwH38eC7nge64gBGiQGw5k9ZxFxpjw5FS98w7KxduRj2ywL466K",
  "key29": "UbL1uyKsczf3njUgzpgv5jcuLjZrAvWTJJDsFgs9t4vAkuJ4c4RhBAzsMhSxSavRRfqcu7K4rGoHWZjfz2ov8sD",
  "key30": "4RQ8r8N8oopq3w4h3WfA8Xj9eUhRJjJdcxYi2Qetep5QiVjzKG2PTYawoBdvAvjJxeK8rivpveVyGNrzRMc6SoWT"
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
