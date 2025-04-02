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
    "4pb1aY46D3F5MSmZGAob8XeiJresu22fR1nyP53sYxf89xCjhL9FzgGnq1Hn9p6GCsap4vYomcZjxoXcHtuWZXLB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZJ7KZam5DSfiketQAJv5cdRXTC4xXafEj4MDu5YkkjR8DxCViyGqS7tFBoV7wvTegmZaR2LzVzv9sGWRDC5fDfE",
  "key1": "2PFHp81pqfD5rNV5Tbigsu57Faamn7NxK7Uv5Kg3SaA7WYKg7Yq3qDNoyxJDTqVq4ebBbPm22nUXAGFrSaSd1Cbg",
  "key2": "5Ta1jt5tyUDqeWKi8sRVnpuApWoDAT4ZhaEogAYYiSdonSamZxmW4LJsmiprMbC6ipNQcnLu2NmGNPkFCWj85LqM",
  "key3": "28AYtuQA3PrAYsVSszvrSXunsvtkQGwdGcZ9H8tNadoGEnLQJv5gCYtQYG1vRVw61AbCE9GAXG4S9dovqXfS3Qtv",
  "key4": "4cs8dTWCSuxaJRkrmtvhbdAMgKEcdykGvBnZ41sY5ZSbZ5gACMzRFzpW7CMsEX3ugFFv8dif7NBagXyLYzi7M8qd",
  "key5": "3veGMrJvKmiqAqVf8qiqYQSRaKC6DRV2jdaRXLkRHnTYSjvHmWRfYVHzHP8YBnHU5k6mogwx1TQp4nfgCwj4Uc5a",
  "key6": "5RGk5RrmhR2LyLDwCgNvh4LpR2yduZdt1jfkgA9fdEsssebtKaFdJcbCJ1zcq6KSaXsjiTerMyrcErPJTEBFJksS",
  "key7": "5uTs4x2joDLBvfXTxtMzY6wwocsCBVd3oHsC3f89By8xsGPHX7pNW2D4zxD8s2i8UqJMAUAUUB8ceVYUakLutNK9",
  "key8": "3seZn8ibwCQChNamk3mReYFLARBsHF9EnFourYRd5v1Wwn64NPLnh8VL7xeGHaks3gef7tvDrSa5iuEfNbtu1ZYE",
  "key9": "5f9DG6J9vuy3Mtp3ZsPBwFGcqPqm8SmTPycs7b8R6CiMvhBVumuaQjRoYKi7DSuzgDH6P8qvW61hbhXjWLraRSXq",
  "key10": "D9eoXyfmZjKHcvPBesG8Sb41XqiDDbTsXXPejDiuFQXwc6uGKkyikeW2HH7MUHzjSnW1GKEe1yoZqJFBpy8hxR1",
  "key11": "5FW5HbKjNyvCzkuthE86gsKouXmUuXt9qL2ZXUjPGKVHHMm1u1QSU6ctEtTjmoZzpPa3hksuYyutXaAXMCFoKu4F",
  "key12": "2C9FYKLwkfoJy41t1AeGpT8rcd9wQNz5MbjV73h7gYKeHiGcBquAEwYJnfaeXYLcDud7TmBp4RCwzCoKaFQfy8Dx",
  "key13": "3oDvSeVQ5AEkwc31YBufzNrXnqmV8zm3DMQkgvAHvkkgCWSYN2jfmjeL5veiTd1si6CvDuaVRvXmGToidwiGfaiX",
  "key14": "LGKWkTi1aF7JjupmafrhMZDgsjmcGuiw4qZ1sVRkTmfS7f1AQXXSuYMd5zvrpNBLo1KpEeT9DkPrjtNF3sMGKAn",
  "key15": "3uqBhhrr1FkVuf7NZ45RKWB9xWFeJdhV2zWsMHee9yhKBDsDjL2gHxoV2itCLEX3wKFfdnm9gfx1HmohEfDj4fRz",
  "key16": "3hJukMLkNsBnKde87FXf3BfhV1JsJ41s1MfWGM6s5brdfoDpQvutqU63btre4uzBGYKXHSULDEa2wi2764d47vej",
  "key17": "KpHJkvn8pDdEP6thu83knj6ivDAQCZpVGmY5iJ3PqazAWwa1cPjokcRDXLiM7HTif8gZY75T1dY3kJw8SaeWM5t",
  "key18": "37p26W3DE9wnnTtEpC6cebDwF5v1rQH4aLD8x4nVQouju8SEqg7FEoPQ327QkD3kU1cBZFYd2J34GiPBPUeGBncd",
  "key19": "4YXtJcG7h2bhdb9yQWeF98UxTWVAuaqc8wEUUtwRZy9XFppbezeYBoqHdzcFZaLPvmnJpTeuLBJ8xEq1eWXawzPq",
  "key20": "4kjQW2GcixHqoDCKryc4fEAr8j2S5G8o5Fo97xpD7fqvZYzx3swuGK9FGZLD2tPReHEuCaf4iwUwXUFZHYYdaAVg",
  "key21": "3adutkuK8nLx1TVf6kNEptih5EEXw8a2d72KrYshZvubEe3RTmGfj4ZspdeanfrCgzXdVGGBVquQNyPt36gXDScX",
  "key22": "5L4mNGfmJqeFysQeShu5hQp3CpQuCpKfPeAFYj4fJC8kcTquwUoasZn3ShiMKhRYwwAB77R8pTPYcSnyWrHSiEgC",
  "key23": "55qTtPWrJq9fDbSwXME442J7CGxgTrx1thMa4sfUP3KEsxXmrgBzX6UYx2JNXQHjogjHcmkDQFQKxT6azRAk99Gm",
  "key24": "VRRPYUpgjSwWBiLkjDQtVCmtac6rmCZ8TbyRFXUqj4L8GUZNFSiDPkh3kwgBVqP9KhCKDiY9e8n9X8QZMPdaZ65",
  "key25": "cjDojdoC55rLy3AMUYJRmiXag2pb32KKyCTkMy3sxG7D99rrHDxQ9JLv2WGeYaj7NnDMJugMbszx6dAdBFCEz7M",
  "key26": "2FVqYBAFm6EC15cXBdoobJi7uJuyC2FKJEormHns4TgFdFK8J7vQu2BfviCtZB8hhkqA7DC67HtAJKGiirgSTaBF",
  "key27": "2McsfSU6tRfRVPRUQRPaJjBnGaaLFUbUh4jh4UcEWs5sjzVHMfQQDriMfU3dq18n9cLHf1dLVFz1qnrxP33T46rw",
  "key28": "4rW8A89kex7NsSgojQMdnnMempiSaLJdxvGAvwscYd3cbZsK87W4ryWg9ggVcXCEiSTjtSu8KJnD69Ww7pWHfbJm",
  "key29": "4xBa8JGadXhQhxrE3MHuYMx8WnjhWEfmz9x1C2RZtTprJ4qJb54KCMiRuW8hGG9nGaDcJDHsm9P62fJGqjpqQ99c",
  "key30": "3zv7mYgDnhMejhfGQcrovR4ZMDZ6V6fnVsptDnLwTB6Fmxy6dS7yAqxH7Xgk9HcZKBkonibh6kW6XCA2t4d12ujn",
  "key31": "5mjrviFeLu6wFdfzeUqitfW2R7Ph88AStc4gmQKCPYfjyDXEZ3tDS6LZtkCs2KFkYpAVyxnX1oN46CSjX9b8WbTZ",
  "key32": "3FnmsL38frdeYaVDPZdCmPJBqpRPdXi2eXvDa62fWxi3hXHG7bdG2K6L7M1FGvxKPD7GBsNWq17c5Na4EaUTHQ75",
  "key33": "A53sGbfsdw1pTBcgPv2VxdxUVFUGPBnnTu4VQkxgSmB2u3VhqpThJzUtegteuhkzJC1T513zyR2k5jfqQN87YCz",
  "key34": "4oTWFGhbEkmTqv5qSq2ipNgncrAC2qeABDrf2Y1HLq5Q68L5ZrJigY8ZQvKCoi2r2JnzgExT1rrtQBYxtm5UMRcs",
  "key35": "5eVcf6aWauuAYf27jDjXNQuVUCQkUq8qNeXTUUk8oKR6QABaei3thKzhmxSGkusLu7LfsYFWiPQH69myCDFYR4dj",
  "key36": "4Ay3MsW9vDC98AG46Ncn2zLNv3fhFJvzs3KPWY3DycTisS6AhqLZhcuUGJuLvS2quW5hH1PJUiSiKzD8TrPmB6wf"
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
