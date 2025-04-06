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
    "3EUeMcNmyYxb4mCZiAk9PiSF32d9eviR19yrsMt3wzb6aJtpG848uj7ahgcLUUQ4eFXuMpdibJXmoT75FR9v9o6V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gd14vp2pqgeGd8jeqYDGfmtULRUmkNL3TQiTDgEw47p7UUimHrKCEGqfqPXQE7fFMy55Ep2enxA8qonJdy4kavG",
  "key1": "2aowxghUo8VTeJhgNKy18b7rYRod4PU6yrdBY1YduJQUVNzP3gz8qxmA11EsJcL4EzbakDFjD6x2MEfnZQsTdStH",
  "key2": "5Wuqkbs26P8G3omziz94LwLNZR8EKqzxWRrWneotQzKoAVZF1kHwyi15BUWv3NMqRJ2h2LSdViGhVymr7f9si4Wx",
  "key3": "3EwVvsPbNEt2G1zcbsCZhMbqeBKQCAWduDBYUZvfgYriXL21XXjQKwm49CgpizG5VqNPXMwtxeg7Sp6Mzjtxt5ix",
  "key4": "3wGpfzPU9PjQrJbbq2uBiH9FCgsZszQZf2oxaEMVUSifxy3Ba8UaGaPu9g1CD2KZvTioXrL5R8Dd7j7ssPVDsWCd",
  "key5": "225GDezd7DnAUCE1pUG6G3u8rXnYQbHUAzG1fEMT2iJsbsfL9FEGk4tZsqLdv7NwFXJURx47bm1vD1yPXqLhoui8",
  "key6": "5KPthC1iTwVzhczLwmseR15KR2RyK4DyxiE719wKpURomw9o82cJTfrSucX3okUJ7gxuwgCUXwbwdwsMvCtdV6Hq",
  "key7": "5z7LxVqN1C7kym5g1QV7uo2rQUYDnfAzQsCf3fEdwXiHXSfBpqMSDDk497buuEnUs8eAZe7zGgNeHxG6QNUD6Yv2",
  "key8": "4LTDreJF1q76HCfZztNeK2p3sfqwYj7iuQZRQqRiAgFcRg9P7Zi4fN45jAgKKZZN3LmmPybig8NCgj4Yw42zToyp",
  "key9": "3uExGT6qT5XCw7bGQbpVjz5buR1PBXspDahZXyxsVvrMNeUemz5X1B8kGgnb4VwNHqC4fTfucmCkth1Dt6T97szQ",
  "key10": "2dso7zBF8qu6ggqYdkoDtQsxqxGqzutsD1G6Vt7oMa53ZLCQbJWJjNnuVQZ7c5VPG9daCgwa95zBqN55cyDPgPz5",
  "key11": "5SGfCLBkBkQXf61WXSzmsVayhWcuaYFYtj3HqpR4H3bGVjvfDo2GyXDBebkEibgphKJGJTn3z8fBZqm3hNeEUQwm",
  "key12": "tbfXvcgXkctbMqRcgYx8y5FKPuzVSiQKtfhd8nRDDwqz7Qu229xdutagwmMAkEXdm8BztVA2fDf1Yjs4iKbJ7Pc",
  "key13": "3Ri7djVxaXeuwCMDipTKB62BXw4MADFR8xBteD1sE7vEDJfTdH388qkpNhBB7sKnb8qhw4jEK4RQjok4e7jo7zzK",
  "key14": "3GYUnT1GX1mcF7TuxCHnDsvixYfS6788Qp89hq18Uwmz9KYJSHMz9LMJH9xLp8ZFbk5wkYwrphzdg8naStKoLPg8",
  "key15": "4JkrvdACZKbq5QJT6tGb9VjkyhGA51Txd6zVy8Je8FgfncoaYNWFUS5HxdVbrydbyXi7ZUozrfvnp6bWEv7dfCEz",
  "key16": "cHu5fVunAzioaajsV9zbi6nik41aX8caFvyuLuTzYxC8gq5zsoBk38gjhQjvCJu2Eot5sZ6Ufs9ogKqxT5NXKK8",
  "key17": "3N1yNNAiBDSPgY4onBonBXnsndH6SxsapvbghXTKYbgL6uB7Bi4RTzeK3QPe1yqoVXQUeBu6G8iS1BhiQPVEkhir",
  "key18": "VC7eN31DdgZ1DVmFrh9oGnNcz4fmVxuPKEFHCs8oG96Nt7DE7pbD9FyfACcfAcZnwk49G9v5Jw2TdET2Xw1CtmK",
  "key19": "4raoRfQVNZqpFVwnfmFCY8SGGj7zNq6sK6G5QC6MgBQy7tMjBRgYBRdGDtqWY6oWMyrtQEJp2cEsteip8cj6MArV",
  "key20": "5sBCZG3R1aC3v5rFkHVr6uBDEUvc8JLExbxZhmyhUhjJC3cavvrhrWfQ5vjv2iW7pqhaeveFSBDQfe3oBWmXsFRM",
  "key21": "2m2zXToAP7dJ58X2wMHHshkrbybeQxEMZsc53D5NXyGn5AipeRiFG93rja8uGbBGcdbCkor7uS3LdgyTQgT9r7Tc",
  "key22": "cKvE5Ax9kRe6WxZZUQj6eE2TVUpRp3E6xHfo1Xm8SGRcGYkQ2AmXRZCqH8gvAerH9nGHW75bbkdCkVYkyrMnQV6",
  "key23": "2VD51xaAU8oSbuMzdHpXMvpuyQHZXmiQX4H4RKiNb4g7c6cwt9Yc9goEgknF7ewmHnjo9CBMDQeDq5LqXhRwMx8V",
  "key24": "sf4uYPgSSiPPMvtuwJmmhKn88BtC4FcmA3ZdBHSgauwxYvSY9gVLecgR76Kn8uFSdtt6heXVWj4qaU4BE7z7Wez",
  "key25": "2yBu6FSyR3Sih6Ap5P3nZkuhDhrmV6PgY7cu6ZubSJr3yiKouRme5ZFjnmD27ijMfv91cKUPk5tpxNgDRdfGwT2h"
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
