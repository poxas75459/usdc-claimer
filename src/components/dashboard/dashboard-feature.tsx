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
    "2MoqNzyaRnFKSWvA34NhkF9E7tkjPrkzLmcXHrGb3Ej4Y68vvmsc6tTZKMzhKAewiMEynsMWE1p5mDQnbNUgCA4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54gcVcZCLUU3xJ3LXP65okupRhUtDGgUL9kxvoDVvseLQccVVLgWcD7ind2Gbtsq1Ehp4CcwiBapwWnUejfnSRqg",
  "key1": "3oHQZ6sLUzJLfTeSu74tuyKABbK7Z1rXXfR74qho1GHhawJy3ChA96PDuWBW4ne9NLQgHcp9KYirwoQwto7T6XSE",
  "key2": "4ZHWHHa5DSpzLz3nFNFkZZStJMexxW6a6CdUygs2L1UYc7jfV5Mm2xnnyzz8QnBGFGCXEkNfmS8KNLFt9qpdgtwu",
  "key3": "D8HH1unWQk9rg2wBMqD35wPSAVGhRnLARAvT5PMDLnYQ3oD6QDm1qpDDFsRmMR9K4WEzYt6LrBTyaf7fWzZfxi9",
  "key4": "4s5a3f7Fbk7sdDhVxc3AqVyapLpJh4yLLugVuKMCi8d2VbiKwudF1WkhLAkSGuiEi5zmom4BHoAhoRWCmRPqxufT",
  "key5": "2Se7gw8sLXCLvBj3S53nxZ56bWUiupsL8Dg4zNqWd6rABRedTsTQmTqXS2eJ3Ja3AhRL1hFLvtKLQHBfsK1Fnxrr",
  "key6": "2NXnw8Ag5YaM6JSVyawHizdiVQgsZtp4XRdXV6sYwdkMEun26nmwBD4jrNGo59p7y7fs1XdsLTmf4HELxii95xfe",
  "key7": "4BKbfkCU1hcz9iVVN6g1Z3psQrKN5tapwMC8rhSBs7X8zM2FwDAsianosN1TwAirc6p5ViYkL9WndquRKtP4xyyw",
  "key8": "4Qh3P927c9adp7oTBUgCjxdMyt7NSdsE66BMVVmoNhYqNKgnpB3jdDq7BuFXg3s3JxGdVoZT8YYtUjJw6cFws3Zc",
  "key9": "2M3ERq54xfZkJ7vgWGMJop7MDBA2Fudy5i1UE9Txh55oSMh6mWvCKAR3MM13VuKAAFA8kKPJ8XKsffc4ZxzR4JSW",
  "key10": "4rDoB4BAgZrnQS5Z8ikpuRwoK52VKWwg97TVPDnhk2ka6M2gzfJqspHFKif7Dz2mFEhiLCXQHHBDLjndoDtnq1ye",
  "key11": "3xT319v68apz1hvEWGp8Wcg7489XuA8n2mMkmuKPvzuaxeUmZb6UincevQpFJaLCZFk4kWSWWF8ZSKMkT4uaBT6f",
  "key12": "4rVS8J6eKeH9TZLg8JpZkw1rS22GKpBEMt2oJAtx4n7fehQAzDKnZVxe6jjKZ4HtvV8wmXMMgt4ACWrsAFF3ACGU",
  "key13": "2hAsz5kQvJ7Ya2P3qZUwM7pZsh8zesj5sNVy54E6NdGJr4V1aZPYyKLkH8HddGyyLWrXSgjafZJjywjbciW429iG",
  "key14": "3QJGJKJPGiSUzTQBa9KuWntuTVAzPobUCe6MqkT9xYEUDLoFWeGBG3qiXBpaT4XftKNWjziTtziojpMkDJXj3SnP",
  "key15": "3jyEHrdKyQYWP2TpK9MqobSWV4Z2MQspZVnK7v3BgJQEH7xd12bGTC8ya1YC2KGkLUK88fFJ8AsEUYRbaNprPuyX",
  "key16": "5ugc4V4ZRd7EZU9W54G5erpZrYgKqcHjk9CEdwk7cRhULVuvH7upqazxP8DTqVnD2AiZXpNfAeeKd9Quggswd7wG",
  "key17": "5AqpvYNrhqwR8DTrYyRwr2tPnv29NHHri3mLXcPEgra45H1Xqct5cYQHoRqWN36Bua6A9uKuqN3gWbmdganqYVCb",
  "key18": "4ChvyWG9wE6sGQjUu9oAU4p9UB3d7JG5SY9pZ59MuF75Cs7nZP2w3mVikin5YKmrFAqerc2nAk7T7TntZKucVnNu",
  "key19": "2HfRVf3Jn6kn6GisinN6UrcbnLZnJmJnRZN8VBz2pm9obmw7M5eaeMRT1qBezRbKqw9W69HbNozRcrgfx5q5GCQL",
  "key20": "4QQxFw1XUkdCHVefriQovyBNmkFmEXoKBeG6Yxao9YzT27fpyRdAP4fMofZRUNfcTdX3ipSYzuGMXJhQm8DnLAfn",
  "key21": "LjSBaRZXXUydWX5Z9KzZzd2tChM6JKqLcB442Q8bXawnogvZFLfBmX3yUGYAAdWzV3xASzWEuj3hhN6nucup1ey",
  "key22": "24gX8RU49QrDJVCrcbcEZcg2NX4nw4rDgZxUoaW7jkjiVGLR4n2aWCMud7UkBM4omgGjBq5nBa16ZLt1mLgUq5ZU",
  "key23": "59ULSAUitM4Upi55FRerhSEG7dFTVaADXmPKYMY6UeARTEwbStQUHz5Kj76dNTUVtUPGd59gvTYWjXb5ZdSrRvCF",
  "key24": "2vCsgVTCgnjPJS8XiZ4c1vZkWSN8U4NEn9QTLS3dUamk6VoARS6WwuhQwwhBQJYKd9uQcjPYZNMq66KL28Nt9eSi",
  "key25": "3pNGuNCZMA8sxyNpAygnT9T6PNJ8ekyWo5bbfQGaobdrMiLNisQfg7LK89fRHCNR4NaXRoY4qA9yZSa1aioMVBG6",
  "key26": "4NLV4B2rwmyk6gMGYPp4msUCeUtrfLKSYDkR8JeTVpg1AhroUqTn2YNvdcLxosupi4EqdLKFUYcmuHr1YeUYAZ5U",
  "key27": "5Eq8AkgZS8tkTeuzRvTcHmqva1RXb2rfYFRfAPwXkabYwfX24LxtcAwXwnomVLzhTddPtocs1Y3TmVWZMP1yAtJY",
  "key28": "4eKkxLV4V3adad1uZdDPAoMW1eLpsiTyZn9D361GnzZFrCkKZXEYVWajLrRvkVa5wia3TrGFuUf3koeTyQYiP54",
  "key29": "3Led7t7tHstUXMfkU1VUXXajVkTU34qcyoMqXLtJJ9jTUDzAXka4Lii8Jd35CyFWj6iJprRHJFBx1DqtcMAz6mPE",
  "key30": "4LjwH4tFs3phEipRAi7b7B9daubmRGKuECgC2CnPnuDL4dYv2T4FBmSjMNgpPddYPWu6Eqr1VXykLzcdZqhtjGb5",
  "key31": "rvfHzTsi412GjSSipoU8aLKqDijtnyiuCeUzN2Vz72yqjxmv7SQ68a7nqhQ16zwb8pMCHXkTkqmVC9eRpCAKB7n",
  "key32": "5Nu7zRwa4eLHUDAQ2EgcyWpbGfs1UJdsC7YLD7bzHVGFCpvhavdGwsDiYjYXfB1RdW1NykZzdBrnYoENm4LQUhRL",
  "key33": "2DKuoE1HGoWf4oYbHZsgam6PgDXFnafDkwh2EzGXsmbu5eYgUUGHPty1bCexQrRdHFyRX9HSTB8bnJApJ29a2ZGV",
  "key34": "28pHCQTeGVvKhWnX5mxsadEmbk6HzGrb9J7V1kLwn5bdcKzGGeEqRQckETFDHrArJKqtJJxnrMvSnX2b8vyKgSEo",
  "key35": "9CwvCSCo5PLFwNGx3t8Bmsr3Q65J4pWoUAXvLECsT283mEvkj5MwYqAMSzaFeYL1StBXUF2YV35TxmEaadoaaVq",
  "key36": "4K9Ddz4XoMbyEwgrgucGRnVsMX4GKU5ruZePZ2R8mtgKMso1hDevHi9biVFrD6JXi3NvnjjSkQCfYdAKW4EHbhzh",
  "key37": "2F3M6Aa8pWBwyjuySypAq7KyvdixVtwqAKtrzeMaMy1G8eZC2sHpS6ocxbovX5mCBiCRraFUwTmv8rMvKDjb6wcK",
  "key38": "2tzYChPiDMR4AZ22M2UErsPvVoaMDzMtcLV6KAnRqJ7i1NYePeorWrLiSNXyvcbtSrrFWmq9AMQKXXvi2MXhzX8F",
  "key39": "3GRKmaqfWMbNJSxHtiS4wf11f6gksn5bbDF7r7yS11fdKKdk84ZBVC3M7BNF6E58SxfwSAcJqnRwW3QHP1ysZ58"
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
