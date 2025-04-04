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
    "3KG5EriRh2w8TwSZjzdHGrEY2iTba7ZGztJPYSfAi3AqprVzQHCC1naybrGLYx7pEhiNmCGYFZ9pcgX4JhcLnbwN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eeNxEwtA9oEMeknGV8dRMCUaACcJFkbCG1TUuWrzQ6RiNX3ozNFQTL5HFxBuLK5uEyDjpgMnc2XBxLbx97jScPv",
  "key1": "53h5nnTauhLqHbgeFxgvqzsaVo5u5vCg9YazhhuECgYbdBYretsHPzgM9dARnuykXjNDEQZzoDL7s7Ykjrer8KPb",
  "key2": "s5tS795HJ6mebdhm6YTKLDw4qgE66hbmVjK7xoascHKnS9AEroaqxd7uGUYxMuRryqT5UjyDPoJZg5gR64TBZzi",
  "key3": "4jokW2xfKtsR4yKYcskZgRQGEYJcE7sqH9rbawxUCR8BwHSWCiNEXhZ1TzYAWHe24PzigBJzjqoCErn7ikY2mX3Y",
  "key4": "FV4XwtNLihVNL86pDfPFgjMRADDW2d4CREz44jr5kkAQqwiJizJeCdx5DM4chsuDx7mto2y7ahBxozpwEeFoRYQ",
  "key5": "4MqBcE7AzzqqMvxbyq6CvZ4nsas2SV4HRWuthtDpuCDXNq28pkjRL57U1xBQ2E9PVHzTXnCH6yofwed4kBpcSNY",
  "key6": "4LahZPUJFdDPEDjHZHVPcPZofmpnuznimevpXNvo275CM8j5wBCcYUHRpLEZpfMhYq3HwVt1QsEsshFrXjntsBYi",
  "key7": "4uGC1MZ3WTFxZjUKcLCH3Pmieeri1kDkvxLS675669TXcYnGKQkCeKWh59ce1yhw4iXBRgoe8gVzajmmyA16cKip",
  "key8": "66izKwsQF8kt2tmnZdsXbYEM7fbocc3UVqtxAaLouZSAYS4u6M677iBx277caJjhjCK62Wrscrz9kgYeZnhERgjT",
  "key9": "5kYZ7WRrQC3tGgiVFihqtv4cprh2YYFxbroTDZQH2mHHAk12PjgNGY5xG232M4qUH1twaf5XkjTL1csuC4jWif1H",
  "key10": "JeECGqeis2toDsRzuim6yv9YqYRgjtbSV5m2DxZYhVoWV6SW5WGcAamrS8fy98m3NBBZJdLoQhkb7DgXPoe4dNt",
  "key11": "5vP6msVKx68rjkX4D4DpDWRGoZW7ADg5cMfyCJep196cH2XHJsUSAmCoe1YJsfahuwq3rTUySB2hWBaPATArCFeB",
  "key12": "3jaddsARmVWXwCCVoLNiggjUB9JvYTjr3aDyZDkwiMu7FujKbshZVdbLe4UvkG5CDj92mebKA6gpf758joAVR6gZ",
  "key13": "3sLAUzhtyuZg1m9U4qqZExV7WvZ5qphiARyS9Fas3cBFjJzTZDwTJAgkFwGgwJ2wrgMQTmpMRKapXEh7ZmpFr9Xn",
  "key14": "3FAvTLFA5miGKhAH7L8D5haBpDostiWC7G5KJBDReS9DChKkBbMToYpnDsxpUK1keYBFoFwA28H7ayaL1pYwBpgx",
  "key15": "fdxbB6BK7TiXuSqLS3bhKsFrnNvbqy6NzmM6AvWJ9kMHBBC6jtwf51UxfMvjHXnbUeDYxR8ahBhR79BSpMqPXtM",
  "key16": "5QMg7LNuYnBKmZWxqZ7mm3jo6eQnaRwG4Evig56dJd45MvJXLKjN69ADJd4KcYcc6VsQLkwAYKautkYDhL3SKXvH",
  "key17": "4F8DGdUvJzAW38QvcRe6KAScQj88XazHFatUTyg71pCJuyjKXRiydR18KQ25oVqmL1hiLqqZ41wtSK5mdQUpUGyr",
  "key18": "5RTHfZHdgFYSGUiwu3HCNA74KkcBbf27pnUk3XoyhGx3YqZeTwEmhLbR31wVVVvgouxc3aeks9CFa6JWB28h8vmZ",
  "key19": "3J1nDbWKp4PdqVTQtxwfLvFPV1ZGCxpNbhdeh5g6YZZLyn8EujeSfN6Eyn77YAoTvi6pMFPquxBAwKdbvLpEd7Fi",
  "key20": "JWhaGXVUE1ZHAXm7ojgjnaR8JVqNszSHETabkeF1J4Wgx1FPX429v4nEZjWLbULWVJX8LU7kQUPT1DSBNqw6ZTP",
  "key21": "V7XUF77mPBG1XqwN3SJkRZgbTPpfPuCQZLHoXfFdYx3L3RAmMdy7xgpJfRtjnNPTKdAYRCDrLkuytamUUtGdhVm",
  "key22": "5BQwe3NLv1JcMVc6ewETcF5Pa3fBTKm2o8HomA26u3Q31UxANxLmA1YvndjEUP6DWdw1Zp9r1ERZXxsDYScrbLeq",
  "key23": "4orhG8LeZYNEv71jVYKUifm2E26QKbfH5wEGcVMGs6X3G93Do2fW7khHzeh7bPKWviGtnHD2dsVdDCurTYgqYxg1",
  "key24": "5bngKzFcdosMiRUL5hSNwqrb46Le3MPUwRUiLSBjf3jSH2niXUYMJArdLxdS5Tnsu1YhJ6nr1Jdo9xcBE8zY1Asf",
  "key25": "4iVpPRKJLVNrfnhey33EdZGqgD4JxJQjaMaGj1X2ZfuBataFBCu2vxwy87B5smr6Zu2YBkVX2CwLr6EEobWLpEBb",
  "key26": "59rTSbYCYHwmn7F5efWwrCAVYqZua67v7egSpzfnqNTjjpVHa4ds8qTg5c1vv5YGeeTyB4TsTBUq9DPXTX5MP663",
  "key27": "5HZm5rK2fnrHFEKUjCL116ZU8QaTXFNCjxgQApnqB5cqXcw5CHPXCcoYw7wAUoj3RG5sqNFiGePr9uxeTEe4WLyN",
  "key28": "3wYTaUHXsp1bvhjAKzoXprXT73vPbEeh3bLvqkppKdYfT8kMNkG4s3tvsTUNcZYLiYngScYHCmJs89Dkwse3tU9s",
  "key29": "27wonjass4FetWqpShkB8dvZiLjW8dUzKHSSRcpVVko5p2RF8tzJJ7NpJPbwNi19Vi4Js7bwvvduqQx2jXpt9Da9"
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
