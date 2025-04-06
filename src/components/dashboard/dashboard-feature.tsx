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
    "4iFrwVZjZPHGeXVy6gX1WRDZKFZa35H6JUncpYHh6SrFSYPRRH1X9G7ZGAUBrua6tyej136UYB3Giad44VEJhLhR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XoPRkoyuxCYinzaxWY6SVNMAwBh5ac6tMXci8hkQxmfquxxWomMLpFv4B9Z9DAstyaT7WFUep8ZZxKTGYbSJtEP",
  "key1": "v9TepPbPyXc6jkGN2stiP3LA2sY9aSjRBxQTiPJQ6vFPCjLWcjoqvNRnCjNxtFRDZHFut3X4Rus9W8P4PphaG7F",
  "key2": "25oocbW4dzxGmQpg8f1AhGA2JbW3vTPn5TGGkMHzqoeU7z4jaVUBfJraPqSGMR3AJNGD4Y8yyfJ7Ht25XtFG1N1v",
  "key3": "37NU8T8UtXZ89Gaz9Tf2thyN8n3GtsGHfByeKfNzMmq8c8AcXZjqfHvBasu6FcBpWmVZwcfTM6WRJhK9muf3zABd",
  "key4": "5fwz5GbGxVh6tpoBr6aqmfKiTwSpaZbUw3cXBbrPkW8ev3tuoUec3Bcoyak5o5YBTr13DXnxtbSbYGXe2wTXwv8T",
  "key5": "4gLHPVXei6d8C4gwKsCM4QD77bXCfsWwA1Jofn4NVzjuo5EKGFKouvqgoAWMiit7xQPXHJwaDb7neZq6pihQswoB",
  "key6": "4zkarVwxMDhz7oM1cckKKDt7Fuv3yYEgfx74SKWX7pwfeViGSHsqGD3DVbgSiM3xjKJGvFT8uCtc2HpHunXVPJZQ",
  "key7": "5cNTBj16jDkQKQGgNysZDr26P7zcygaTYeYCuipPjjzoBqToKeQk8siV31vQmJXuUgN1pwUjZ9F6CsRmjLoyEuFc",
  "key8": "5kHHoNxcaw1CagSwQHVi8Tgx4wR41vapqRUrak4SdoDrbS8AYtjebAK8D4M3wi4E58TVh4HaecDJ2U7fvP1bVvNK",
  "key9": "56bzH5e2Q19DFfEUNmtUBq5AvwVv3DtM6MAnsT8GAPYsM9fbNGM6V3upUwgX92tRfCDHFCozYJG3SomP3YcwZkvA",
  "key10": "3iQXBujBxw1bewMPzm8ffjtad2CERfFHwrm7w2zJtcAbFebKQzesT5G1KGmjEnRDjM5QnWpb5uudqe3FodbNbeem",
  "key11": "5cfJUp9DvzQ3oy1qs8PNUcVPKPodhewo2CFxiXAp9saeL4PWc3S4VX1GYbvxKFJqoa2Yqxa6BNi8n8Um3hFRPnzs",
  "key12": "25QfMWKhgDCPs3if57yV1ZMnZ2sbk527jZhhGBrU2K2kwdowB36JAQ7MMmtm9afxVnmKwPJo5gQZPLxFmBnhnaiP",
  "key13": "31KyApYWXkFqnfc2PPjPXwfmgeb9jmkriXNEGZtN4g3QYUY53w71Zeppg7u71S9PE6ipvXKX8SoiKaz1wEfisvN9",
  "key14": "5ky17n6Fz1uz9EM3j7v13f1kY4XJrBoH14hy9qSxv3PyNL6D8zqcCBZksMUPqxguCcADwnX7GKV8MNYkBLNpjUdG",
  "key15": "3oDgT5LVWkjoDjZsGob4i7i5bry2yn1Ndy7Ef9HUR8BfZ1YwBfdBoe5HHVR4DW4NFU3fmPLKucapnA4r62RqpWjm",
  "key16": "2wMud5wjPKh1oXRWywL76L8rcncFoYV6bQFgrr6mLAGG7egRLcCuqvireCVrsrYoQHZsh5YiyCrgHJaV56xgxgVg",
  "key17": "2wttZ9QmWpU28ud86umURUFriunV2VCaT8eP9JhWcEHmU22XMsQnLk4g4bgdsqYgvmB2woD5w4BejaR5CN6GeFRk",
  "key18": "3TCDB6u3pnJpwt7vA6SMqSKD46bVu1pEbecTf1fMbjGyFeWbANENw4VKdSyJ8sugYxkHYEmU2QE35qZmoASPQgcV",
  "key19": "48Q3uymw8fvZ115GV9JtinjA42MjdgWkfPH6xtwoyZB92Jr1VhQqwraR2VLnsW7nxwSGhaa9rjYPb7UMHCjnT9y7",
  "key20": "3KQi4Ex9uoG6TpHbCEwxECrJAGfPx9pJeNL4fbakbWc7MksyAwnbzR55Vah5idY99zE562iPYTg1bZL1sr4vnMTF",
  "key21": "5bZkLz3VptwykxaMWdK6KAMXAWDkBfAG2snG9psQuVegK2UhfD9jxKuigyRkxAUvQ9rfZ7sKpWFFFNu7kF1DuqqS",
  "key22": "4ih2xhRZP7qnme9fY5E6JUV95qAJe2nQjPEsSUGvo8Hu4JFErpddkSJPd9oPzTBAHoEnHWx1vhZU2voEqizFiSzM",
  "key23": "36j3noY34VfbDX66hM5fe2PsZEWLLisALceXQC5v3V683CbKp83n5qMsBZTNdbSG6gzAJ1y6cY5iWQrd3tmX1aKJ",
  "key24": "3SL4rwgbXNTycm1gdT9JW3fhD9LWwn25qcx15HSCxtBZx5BhmbAoWTBRnSxVi5vZGuAsogxNJAsHPGmcrbBCRbQt",
  "key25": "GByc5BMeaSdLR7CwFnje2BJefm3nwx48gLBrR4b4v14LXxANj4LvioyHpoD596gaEpHYzhdZFcaiSbLLrFeXAaY",
  "key26": "4Mu6U8ADDsqsN8wNTgukR9LJrd2dvikqFhtmybWvZ5hLEYCDqNAUv4ogiL7QywnBXJ7uB4SrHhBGrdcw3dbUzPeX",
  "key27": "5e38wj6dZz9eTkQJPhfRw9G3sF9Fh69hCcGy16CDKPfqWpWHCn5xx6TQsaoYYnGQ58LbqeFiu6gnSwyG5DrG18vH",
  "key28": "uDJHJYGtvDudTQafvRcxKsRcvcCXNcTGBYGECZ9kA9CZoNuJRDrDmYbavnu9jFPxSwUVbPaHrvLDwgZuVyQjMMU",
  "key29": "43CM1WYAFT6vuzHdurjgcfvCHWjZhoYWuiKq9f9V2yaRo5thHuFB8J6KuaRESUFKkYjzFD2gJQpZw5Jq7h2SAgQQ",
  "key30": "3a2y4j3ERzP3ra7BiAMzAwLKEJL7WvPmZZeQgLVHioszJCbveqLsfJzqvaGG324kAYkF3veTGrFUjH8kKTqQXP9o",
  "key31": "5KRWcByrfqRwpNKvJBGGyWLtqqAk7KwsEnXUnJGM6Z2f1ptCSQFRDCTwJi5L3PLqkXtPWzWWuLs7srfEC8Ax3q8a",
  "key32": "4EttfgyEqq1iEM2VTsfbF9AWgSMgp86yVa6CjZQKcQgjHgntzKdwoQCgJX6AK4wVm9hzUFXLmpC9qumiEq912UGy"
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
