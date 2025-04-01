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
    "5dUqXtqqtTb15tU5FsLPSsnsrgzmBR46RzeB15N87qjdefC38GZ4rr7rA4wVXa7SL7yx2wT2kWHi4RLezaYyx9PS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iLCKrEGZyV6S8kmkrkiNYjgDTd8A9wdKZ2Sp1Txi65SowWQe72xPh9GmN63GjoNhWWVSJRiyn7hc2nWB2aU7wwF",
  "key1": "67bYvZv77sNrzYSSWUYzpEkTy1PcEkuS2kLsqWHchLsp2eSwUMjrFGfDW3mnSUBS1BDUXmkUpZfNUhjFW5f37xWY",
  "key2": "5diQbiv6dT9dSAif9ZWb9aKSwqVw731WrFPBfG1jPNNN5tc9HufKtaVUG6sLQ8DCFy9fJqPAJ8mUac9u9MNi7SNT",
  "key3": "4PXJhbxDF8sFYZxLi3XiCnZH6HZnD2fPP6RDyuSJtqzodmKeYdEpNRmDyo3Mwx53fJk5SAYkdsuKB9Fge5muQrdz",
  "key4": "5ngADpwcst6Z7ttMUjcL3NedFFSZXZe3sNK36oB3gksiZ9fAFWSr92QV3SsShGRbqR1746iMH14U35dvqiMSNx1g",
  "key5": "43Cb4ufzBjVNy5w1HDtsrrLtunFw5DZCZs6CM4cau3Ei7hwPGF3udtHQu8gUTk4APqovaJSUmEhYvk7hcgbFYs6H",
  "key6": "22B8wQnXQwLy9AhgvuBHhpP576JrhmgFe2wKz7MSXRZALSmig967DBHDYhCxv2eBJVaJBh7Ca5UUoei37fzf3B6W",
  "key7": "2Zjjppd4rUXTb8fzcj9xWw4MQZjrLCicJgGBEBaN5vVrcjtGdiSmNsaqjxKNqrC7wfg8oJYF2ky6hPHnYWP5iFVW",
  "key8": "4uWMJkv7oNvzWjtM9R1tf8XemMVKej2k2dkkC3w6mLHjrrxXZJABUJCCfjbcxhtnHk9zAoawxykwN9s1B6CwL21q",
  "key9": "14x7gic2FUdVoMRXkPBgCgj2rP7Xbtzj3rGd3t3V6NmCM2bGXxvTdEWHMHaget6ZHPYCikmVkHjk6JWiRn1eSFD",
  "key10": "tk3xq7X9npSQxQGP6bRGfK4s4TKGzHYzr1EseZvkGfEuAYsevuuJPQMypKzDSnGmpRmQdbUyfmbRs6UiuuCtXza",
  "key11": "4yYMbaJaUqLQ4NukyquEFn1qEPHqvcrAaNSLc3NJadioL8opK2VajxFYykcpogPE2NJpJ6Pp4UCGi8VC59kf6Ee1",
  "key12": "2CdsYhRj7QbGRp5kcCHMkTTK31z1WRxCtMyn6UfP3X79SDNGzLLZqy2yPE3namjXGUeybGd8CwYXH22SgEAUaUhP",
  "key13": "2PYNd11NjWHMqDQdpfLREtK3ALxekVasyN7jhZYjqtJskM38VUtESYQ8aWjY7eqro7UNMpaaLDKJi4jeibhPDLnP",
  "key14": "o6fhKrSHTguJMcbbPd84ap9vgJoMxNJW12hv6rY3iZ5M52Xn4iGSCVv3v1AV3ARET4fLMK6g1WcTz8NVT9u9jKT",
  "key15": "51FnsbMbGuCiQWFxC9uVvc6X7VtS1m5Y5pY94WgWkbBEhCqDonNFHzcDk34iB9MpMuvzKmrGHCz8TMzzDxozz1yx",
  "key16": "644HuMDKRagrpDZYYV5DNbkGVKdoLQ1p8pUx83tUh7WnVzpY5rRyGU5SzvEUxEZnJMfYtrLDmuRd69a3T4Jc2hxp",
  "key17": "4byVKBzLXLwQqRP26n9mctofnod3hAUMfDkQiaKYDJ9dcfmTadUsznUMrpxaMQ4799ys51HBoyaDqmntjW6Y8Lqa",
  "key18": "48XJRcjKHxtacCKziKp3ThjaP1zEc6z533j2HXv1PRq6jBhkWEbBd6mE4YPumFeBAysyakC5c2ApCtbCw8TeF4xU",
  "key19": "3u8fT7nzFJpf32SsmyzwartNo5QdDfMhogUJCWh5aUcHc367a9v69JdDPUYVPUxv4M8it57xCmhDssUhXVdWoDrM",
  "key20": "2fLquwH7JYvQonf4MfQCKRQaTM8ngue7tagPc57cGHG3E94cuuZUN5etSgBRLdrPhUkLrVuaAPttNCiNnxFuqA6J",
  "key21": "2wGBaPJXxDXRTb4VutgQiJqxY3LynXJnNTEPHS5YWrfaMVZcpACzTUMcRyxWRfeUtJvqyZHqGLvMgVpWnc5zFExq",
  "key22": "5qJyY6oZ3qapqvWv1T93eJAy397rBMfFdNhXGRQY1pXbXtrfZxN4yLp4KQ9vs56beAZzXS17ph6mHnKzSwSisd5a",
  "key23": "3H3DTTFHR7gUbj8rAp7PPFe87VitEhEhbcXy6GkjEe2jqkwZPf135vuhA3yD1RnTD4SyBosHf32gCvvpJmKLRsxm",
  "key24": "4e6gJJAzxooMrjBFVSY2nfg2gyWVdv3SzoBETjTv4y7yBNPCoua5yZZW8r2jicb7w8LMUvD86ADbRj439zGmyei5",
  "key25": "3KBseCEQ2T59PFKW2vZnbeEuM7yzG2Zyr7QKFKNAEbNGzdYB8cHRuhpASahBZLRY3EUAhfitoaAW2Ri3EDk1ScFc",
  "key26": "2T5769WzobZcvFF4cYcBNf2mLqt78ywv2KMZqaEYWPB3ZNPsPfw38b6wN2eQxvpevkQVSLXus4XiuX2DXbCs5yRU",
  "key27": "ufhgepmXcv4W9AYHDx5yYN8Xg6ppqD2X2jbw5T8e6EUbrN6AtVYb39SVgfP3QAUJnuo7hswWu3CPNEZs5Aq5uae",
  "key28": "2XQ7zsZ167ySr9qimksZ3gqN6y2tCaTk49d335KJUXjZYAjSLicCBhYFUJvQunLXXycvy2XXeddVorHab4hdn5g4",
  "key29": "4L9u2m9cdeZGWqKzo14gaaK8hFtCG1RSvUu948CMULFkWp3G9yPbdjKVuxTLXJCumB6SZDep8WEp3iYugS561iD6",
  "key30": "57Ux2fGpmGHu48iivTbaQXN4qEmcK2n5QH7nKeSrPAkQZ7QrZiXPHSdNTWphx9PJVXE4oUCBJBnP4yAsSAdiEpad",
  "key31": "Xui9Tue74jzoZmWdyH4gQZZNqGjrP61ZsWZ7wpKdWshZM2KCtrYQeLRZFadg5c6f51MRANecwh2oZUR6Z7h8pDD",
  "key32": "63tPtv9bu9xo4Hmzh82hu5m5NBvXFXY46goL3w2qQzD19yCmUcNpMDkkKZbJJr3no3Hix8m2kqN4BjZYc2riZAW1",
  "key33": "3NrHCYYEraMaGDdg2g6JCnFCv4wTDHuaQ44g5djyC2PMztMniWFdoct6bbTQBCCm8g7gzWoP8Mt7mixRT1aGhRB2"
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
