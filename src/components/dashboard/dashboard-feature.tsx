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
    "pk9jTQTKfHVejNbToGsg6HBUjw12ZnXxL4hTv4gKCPdwAuKESNJSwuGEhSsn2PABkX9X7LsN61DdBres6rp29Gf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36hdKXPJ3CTAYkqDNYVo38X8FZu6dzutUVAjx7EaNMtfoFwtnUcKPe7eUj7uZUY1qZnk4VSFmdGGQQBcYvhGFfue",
  "key1": "5TzpdwtvQo5bh5jL1ZnHw11SHTQupJFfmj5pDQc4acPo6sJPqHb32cAhjCQTKW581uYb3a5yZBuBygeiFzArFStz",
  "key2": "5kRGJeJP4sAzBhCfGP3zsG3HXwUjEjXKZFc7Medm1pt8SL1wtkxzTiqQTFJbu1AJVEhChEe9Whj3SGCJA5QgXaML",
  "key3": "2qoFVqcxF8bqv4iL7H632nQ1fGsT4UjKWouB4PxSFyvZqyeozmXUsAxPWjdqSAwDKu9LmsPy4VCyXhTKxY5VT5yC",
  "key4": "5UTvGtgWNKhxh3gBJkNUyx3BeCFZzXyCtpQP7VpAkVG4TTtjVdtdzgbmSKBfjxCndZ2ajG6U5AKxqBxuaUMvmLZs",
  "key5": "2ppSfEkHWr2agEJoeQsSTWzx83Y3oQVFWungZLSygzuHRxeZ7TFSDqbSqDy5MEEEjGQ26M6J6NWszjvbmJaLVQy3",
  "key6": "3XSmvEUbwNkVRKb7DrR27VDeWHSmLWscmhgisA63GjFBvxLw2sz52ahkdkow12T6PdM4SpYoYAqDfTW218Z8Kx3e",
  "key7": "2Zdot2meUxWGfJVUQNhLEKz4HfTXj1oafVSHuUyfN6JJCa6i9NfQHfsCytt5VeB9HCJTA7kew4dQL1HDcA714Av3",
  "key8": "2TimvHZY5DEp2Zg6JHb6eSuFM6UQ72CS6cz1Tw1DoSd1fm69Hhob6kWmDrQAoGf9FNQ6Bf5BC4aTipAPK3FH8i7D",
  "key9": "5qT7jBaXVVWFN96Q4KvFmjCoLodMY3RjDwrg7Nk5JJQXRAu4GqhrzGYvdSpaddF4H5xcfzJFzCbUn3o52PjBesG1",
  "key10": "cqSdDcxAy7hGSJDAZmcRpz1mgtH3vTyw7WVwQ76vqq7Q7CBVmfYGkXJjpf2rvG5JUqEaaRxEtRKTNKyuu7zJ4t2",
  "key11": "5RkSXpb8b6it1TfudEafYQ6ChGREgN62mSpsU9cHVcrabtX7BJHeJTc3ETmSHNDbiswjEcEfLbxwmHzg1E3xM63J",
  "key12": "RnovV4eGg1CZdTdzTZQsL3NXP8N8Q2rym71eq2ptSvZYEbf3P8idVx4eSqTapTNURB597FrXTPgGDYtYN1zqBX1",
  "key13": "zZCrNuD3SQRr3X7ahNfxDddaEKpPcy1uxDMrTyGF3UUH5hyQudCYe7774qEByBQseKueNvFdM6MVJC7AVdkuZfu",
  "key14": "2JftpHThJJC8PALqjPREkRb7YnGdqdSsPruFAj7QvW3kUbQp3MDvEdxKA9ntjREySNwqzdZcSfQXLneLD3GeoszH",
  "key15": "3Ch5Kqy6YRs6wYLu5C1kNdCxxwVgYJxRpKaux7ad4HQHxuFTXoqot4E99LGsdan3FoozMTf9FSugkQYp9n7PULkY",
  "key16": "3HVJsv4EnYnqRJq3amVh2FzbusEBPpmW3FC4ZkNWkCPQ43xi55QKRVxkhhNUMBWJG5eSMPRYACGFxcJ16HGd5yAu",
  "key17": "xwCmt3jmZDWS4Qn2Nd3jZ3kiMuXVvhFPLyStXJBmGX2uK331nQTH4zUx6rLvdLATv7jBeo7xjp4WQxznP2fGuNa",
  "key18": "3B3yTD9bMoWA1sdsfgKCUbnH9NECuuM8rSJBX7sVX8M6DDEvopnoh7VF6b5F3B2VWF3HgEjJufbaErFRUxoZEsHM",
  "key19": "5VDsd3tZkkqLxUsCKWeJuFE5RPZJoNJhfCJ7k8Y48uQmwmfswPywXCs1qLWX8o7vP4h5aN4HQPVTo5rzHhjDx6k",
  "key20": "5Gf2m5CBCK5fnqqF6RxCkTfamQEcNA7rZZpeuEaS1vGbwR77A9u1y34h1xjVxpmBH3GYTGbJnnbX1TCihNEiHJn9",
  "key21": "5DmAXp8SW3rBBnhzbwng1mpKjWW7ff9nsRgVokdrT8aFZra9Wfu2TatkFNboLiXb8K7VFAdXKs4FQXbdchp9aMV5",
  "key22": "57ZwPP22nyXKKtd1udxSGBmY5UCTRnmNehrpAHu7WNJPEwGdZgAGAWU4DUJz4tW2YLGBt4V1c11RWzWesorRGpbP",
  "key23": "2YuaxkKDh7LAzWacR8h3pfCQAMofKb9ccXR7rb4X4nYtz6gw9TAgVzRkgs4YwSntxbCr32oqpkvr2QUZwbEbNdxz",
  "key24": "3YvFK2gPsd1xBjbkyHHQ1K76xmroPvqjXYPDAN3EhBj7xJWDLZgVT8MRLWgZLry8NZioxy55G8zwN4m7hvY7rvPD",
  "key25": "4QqvBzVMsMCoQSZPHmSDWsRRM5Uf5YXgocmUun6gxXHQKTpT25DxDZ2Q9RobGMBvDwdnDAvCLzFaLgcirQS6TVZJ",
  "key26": "2ZyJDcFdAc2UgXDDKQR6aJJfaZdH1ivJyGuU29NvKjYKPizoK6zVSGt7BhptR6LAxazZRZQo86etiKHvQrw8P1GP",
  "key27": "2tpiPiV86UuZQyCRJvPni7h1GH8EJdCm9Fqdaxt7PwdSGi564A7ff4TxVNigaTgTzKcf5we4gQcdQ27egVa5qUZo",
  "key28": "3VVhPPML7oMxtscCzNCxs1ex9ryJgbybRyey1Yy1aypk5HEic4yxKccTwoW9hukBxfnYP2MgvTZsJymBfvSCH5AJ",
  "key29": "5ydcFMZ176bbjRVMVgxVbpPxCAn6VWHpqGKUmDZP3QSoSwfBtx96kao5mZhH6w3hSLz9v1ee2TSYvjBo6GBiy45n",
  "key30": "3HZeAUAajUS1DmCjnLtVb65YEchMtESvLQch3fv4Q7mKUk1uGLbCkBPnmmhGuBG3oWaxC3xkpSNxiCGoDZ4Ln7L4",
  "key31": "5A43exxcGfRhybibzKJeVNAq8XakWCX3wTr3DQsQtmXCEdsSZNxQt3zf2DCn6s3DYXqkMQQxAARzEPu9W39h7Snd",
  "key32": "53FBFS5vFRUDNgMBCXwgfvsQUbRfmzGQYXa9aYSsHouYSM86dh6iWQb2ismZ6adBqDQhTtQ86Qv72taptXZYTSHQ",
  "key33": "63ZNPJTJQH9xbGAxSozKWfk68Jg5DeFog7FuaCrPLXxgpp68W1CWvGsGSZzadBkP3AYRdscFZSFd1MBSWRkJ6mNN",
  "key34": "4udVxhjBAasZFiWqxV3pKnZJPwp7A76VRtWvGv7cxpForchGsCrbcMBSL7QJXUWdAZJoAVaAK62euUb5AEC9MApm",
  "key35": "5N5KmucCYSSELggDvhicRNE1kKDCDKMxn1CoZGm2C2fNpPSvbZV3AUh4AD39Mvd3Jq1n3qRKSZnzr43TDfFzUtNc",
  "key36": "4WE2KYornY8WAswvf48Zz8cE2HViZNq8ahdXAYYKmb3jdHhsbCYw2HDFjpZfntNifXiPnnxjixmKiF4xdpRLEYMa",
  "key37": "zBptTH4S4jfm9Uh9ZorXSetg7Vxr6619KJMkHDguRv4nR56JjjhuuKiUiuvKL3Ngp3pVpxwC6vxRjXwjS6TC2uH"
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
