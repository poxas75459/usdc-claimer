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
    "4kgEtcNLaaXETL4rQavLwGEjyNyfRuXi2xoUuYEwNZsSx6zvDWJV1446zWwbSqrfgAhTF9Eb7VGD11fDJoZjJkqs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tCDPCGzLiDG7fi64xpxLaPN3asYiDDz4GpTkPW5Go12hooL6DDsAywpuGRumLeLpVvtcvJ1gnnrpCqWDdR7AGA5",
  "key1": "418eiWc9Vy9noz1FdYp5Coseax7XdSWmFfpau2XuDyapdJgf8KFJLPjHhBF9LAyUFamNke9WH9KJuP1i6Y6ViLab",
  "key2": "2dtabXvKjTbhatchW7Znzq4syGRppaboYUThs1mBEwD2sLVwPLjiKDCLBFJYrw3LrgHrN5YzLe1hg2oQcnN1yHCk",
  "key3": "TnsH1X6K4hfZAx6DxBHmmnCX1bnyHUvvcra8omxzT31G6uuM6bbzjwvW4ZUadnFgdMqaxbhXDmbmmhQNvBVCo43",
  "key4": "4ozySBRsmk3Dfp2LJPykg8LXjE5dY4AEC2tC5bogFh1C32dnsbdMbZAUoir6hiAxPcjyti4TojFBCPtGeWgCSYYc",
  "key5": "5TxZS3mDGP2uvzDt4rzYYdiwB2YDN8ZjRpLsT7APKF5L1o5dUpC3r7Y2Zy6xmBQoKTNHGu9rrGuEvin8FZnwwaXC",
  "key6": "MFJe3mnLftX6bYtk8FrMNTNQoC5MSSdoReBmqtCnPR8k2j68W5vMeL52T2DYf57px8g5V5k9Av99af1bnRqt6qt",
  "key7": "2HyrRQT5ngKy8pktni1rUEaYXchsK46g5AGmuGsMN5SvcHiEXg6dk1485TQ8T7aXi8cu9Ec3WZis3GNkUtZiVU7e",
  "key8": "3uVPhsvc7CN4kkahnZNkxbad2GJbwd5VVRJF4Me1UNKDM9xcsKQp4BW9fHxtLohXpxM16YZw69yfEq2tM2PSYoe9",
  "key9": "4LNUrf23gGBy2Tbmk1bPF2rf1pGX5qXzv8Us2ZnndtFzzZcrEVAr6gFFcufegV8TNkQ83y6SFZj5aJcVhh1wCAz6",
  "key10": "pVpj4gsvALd2J3QkZwHf9y3AqQyGKF8C6o2RtNupC9PzCmY66rtGJyVWRsvoZKRZXpvXAuyU8Fiu2ChoNWS4jJF",
  "key11": "qmVVjsq2swPEzKzgiPXAdYJEPWanQTp4MEnzpXwuu9EfBqDkGRaL8QJACXVsidoGndsrxe4LkNVFHotbjYS6PJV",
  "key12": "5ZTZPXPuHUgVkLQ2rkAhc5RR8r9hWSMK46cf2WhCM4K9dks43WfuiM4RiSe1MxXr5jTqnPe3KUTFwSaBqbaGcWtt",
  "key13": "58s4uvjVYt5GCxPmvRsY6fgBDsacV2HBGmbshPCkUxduhihneAaBPcvZRouEzXbNhBAZHdNtRnt8RfRqJPTY2r12",
  "key14": "QiwA3KynQdQLwiiU7ozKXehPJhZU9RLPED4SJRGpkWTRPqFJVEn16WaeTTtJhTtpwUKdFr6Wz93A2VmMFByNc95",
  "key15": "YDiaHjQi46e7o9jHRL8EboWW41j8AG2XL93MAqfNVb8LRcKVY9zFrkSytqD8K967Sy7BoRW3DtGDGJ5dv5naD8R",
  "key16": "4QFEF5sMLnY7Q5UNxk7cA4GKsHkGKDnjn2z3Eczncw7sA3xXxYg9kRtoLmMc6aFXGYyErEE7C3ZBfv49aYWrpY8P",
  "key17": "8EV4gEVHDSJgJo2AeFHtTvzTFPuvKYU7N5FaryWEE1Drzm9EhgEZEJkbS9YbDaKJaRWUEf2bKJ5zeJiKyJQwHKn",
  "key18": "63B5bsHuuTdYwLoFp4Q2XAbbNMq4beUs15vg57FYhYCjELpqE8yWcAWbgz1zZfrApviYMswsDoQprHa13znDiE9t",
  "key19": "5gKFcQtGNbtzP9KohRscJt2hhD4o4mXPefBu7d7Zu73Cpdg8ckosag6GmuWGKbAFw5wBmB2NYgg6FG3qQMeUE5A7",
  "key20": "5AGSDim926ncJs2K2JbTorEvoyyrA1Yy34K3K3gc9pvZTj32eY4G6TDsVUW93BCSq8rn6iJQmvZxhTUVQB434i9X",
  "key21": "5Z96w6xdra1xFuN6H2HfGkeKsUs4Y1vFRZiHgdweKxJxNrGqXeWYsaHBxmXFh5Qs4fNi5soqzQueGCkHQwQFoy4v",
  "key22": "5vNWVCveSQ9XQapBpYLXuF4fk2G2hZP4d83BgrK8JBEXqN4ZDx7SvMNvzjHSBxXipX9Y34nQSb6GKASmkHJvites",
  "key23": "4Ady4eqBZsN2sxhUKB4sgfjBxiwD8RMbZAo9HpnqWgBf1kUxY4Hq5578FJYB56yjo9Vxf4KfUCtdbRzkWJsmiYiP",
  "key24": "54yTFzYj6t75tNgiuyuKPe3S24Up1TW6xLeMHbZtv9bU5FQPtaQbcCx1wnwJonwzjNRFKRQkyKQBCuAiz2QhS5B1",
  "key25": "36LHVk6MUL6EB7AksppBkeokgaULLFrwcu4nnLkwJR5LK7o6Dmi933bPdUE1AMRFoZJuZFbrH3R6qhJSXZ3hZacD",
  "key26": "2s7eppoQuR929mxQjEnnMbdrBheM5KQfMoH7pMujnVDrSNRhFTHhSGhgKFMm3gvAyWWXVxLQaQ1sfDo2Qmmcpjmz",
  "key27": "ucFXZxnpkc1FDrd3UJumqWy7sA2unDedGZJZxJWmJ177T9ZGQ9RbDXudE3jnrrW33aM7cLuAHvS48yPe2oEfcUU"
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
