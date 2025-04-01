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
    "2r2VztyQcB2VELSWrNWxR2yPc6HjjFkx4ZGrEAEvwjLeijtignkHxKR1GL9SC58K2Kyz77zZn94QzSgm9oVc6hAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bufLcDDyhWCo8xbGVvdghD8sj6JWkUevuf8npaf4gjneMWR5fG74pC2BsdBBb1xUMuRfh8wQX8aqxkyJ7LZWSkR",
  "key1": "hwXd5BnQbJcBfcdD634UyCb7P9mP9gX4pVBW1VvgMtptk78VTArhDTLsp5hLbiBEndrzmSQWEFmhrzwTBwDP66x",
  "key2": "2DWCUgvZMfXDpBSB6Pn9fNDuBy9M1ySyHdV1t1JGMdjTDVoLg26ACL7Lj7cK9WQkVfm8h4VfV8vKYpGWMLZCtkBX",
  "key3": "5MW3Tg9AHULAqWox62VWndx52o4zXU4LYjCfbwi66HrPRW3jJimuTPKWPNr2HXS1ey2hyrrRsuRJjfuQFD5ezyDk",
  "key4": "4JjF6BU2V7zeFH7k8V9rzGPsEVGEwfPii8zjQuMTCNEDi98E1mEKajsErSruAfHVLz3nuYFhSfPgqXNdsVbZMoey",
  "key5": "o7UWRLGzL2iBbnNGrQ72HkQGbKk9KMp3vfLtC7VgCe4QXsDLFU2qHGvDowBijRKwJQe9uxNRhYR9GuCaN5VXCiz",
  "key6": "4MNwTZod9pSu59yidX21V4hQyAzywMbnmG1zuavt72RS9NNYuboPEgNprtmxcQ9sKAzSi2wG26PsBfPWUVPUpfis",
  "key7": "4oeUCv3aeuHQe1j9e2PiERz4rQFQkhicwc58HtZQMrtzhmNvih4GdMd6ni2nFSZoyCwDC3ppDYf8GKn2BMYF71Gr",
  "key8": "38CbBGgMNi2uTEmqZWY1gko1n2p87rUDyNk9UY5bfwfAMyQHTvqmTvt9qBnnvg7yxSKH5v3mba1JYXRgJq6rNaxm",
  "key9": "4kveUR9Vmay9o17EVVbY2iY9UrAe4QS3Xy6Pvuqe7CwW7uGx4dUxvXbDkr8TjYB57t6s4RpPZHpRKd8Ny8HqxjjP",
  "key10": "5QVG458fmjGCYzV5ZUd6ccD2ZyV7SvBzG49KriBXid7AxRHi32FDqQx7UKL6JY8akCk3KmigYdHyPxa2xSjXyQay",
  "key11": "48VhjoYYxRPnLKXGxiz3XbVEfPd26RUDbWw8Y3Q8vRLHbnDd6kHRdUnypxsRaKs1vrKro2JA5h2R1jMBXVemLUo3",
  "key12": "bDAKKgtCCwpujBhKj3iiD1dw5vQiFs5Kq6pjQuT9HNpyoLep2NqzhqHCUdgCLet8xJtEjVy2eWcWYbJRgLR2HWi",
  "key13": "4dtf5sH2uJDveFWas1qx7EaV93hMGbNd6xiGdjTJDCwVxzoc5FuRuHLMnogpBrds2vL96JLq2N1rk9jZJmDPcJyy",
  "key14": "5HqR9iZN3ykiUg8E1TuV4LP68ZJzCaLofbiW5jdG6zQ6SVotEpmSNgaMR1v7EdPp34UTSL6F8dGNnBcsgjQpXjNf",
  "key15": "2TxC3C8zDhGV7pP2XM35YN2wQPp4S9foMDhFM27M22FrU3ndN6c5BKqqxzRz2i735fWQeYNBvjtwX9ULMV8YQ47J",
  "key16": "3mYkRhDWteSDLpkdnHtomozYyydr5yvjY7qyhGA92esZbqvWh5oaFUt35UF654wetguzSYgS8U3uhPYn4ZYru8dr",
  "key17": "2bBdvsbRfNupxMBUALKerG4tkvCQEkQrPxZ95SJchu1bBrpVhu3bMfsxdxdxWGYnP5pbQhF8sMCrgG98DJapTR3W",
  "key18": "2mvhwidYmC4xm41VrpP5sDMoScoovpUP9PHdYxFe5LMVSTp5rDFH4u14rECSA7VfNDoBE1jKBVaChKmQwSncMxUy",
  "key19": "2Qtx8wWA8Kfkz3ytUzry54jxJdUdsQNxdzvU5eaSxb21V7QR8NVi8P8K25pxkkEZ8TWkfMyhkB6WxbmGFjQqtvwp",
  "key20": "ow2zYb3PvCUZyxLoB1AbiRFx3iQN8meMeWPf12AXMYaXVSJfJ5J8Ts6ovXYjugVwkCmjReyV4P2Jcgnn5UWCVpk",
  "key21": "2jUTgGpwgTPRL56fkTKFDYtprMdJMTtqCXzPqurMhbuug6cjwVsE2DdkXeBn8ueypGVDPf7F8tcnwzqTifVNxRFe",
  "key22": "4jRncfrfPtNF41z4mehYAkpnTbtae8KZ42TvrdBFWXUH4wF99j28Fyzfva6sDKARsEi3EPY6p4DYM7zXp6x7iHa2",
  "key23": "59pXQixFVfs8bA5teTuyUvStAZXNHjj6kPbW6Uy5s5xz84Pbzzjxn3rT16i6hr4k2XBbcJiRRJrVD3o3nfeZLv18",
  "key24": "2DHi9FUrPCoJFGgwN83SdGFD97UMMn67kszA3xosKcvj4KGsuBPDAzC4tTn9FGk52ZaWEG2eEaZqfF89bdGfkyiG",
  "key25": "YTkQFMewH5xNaDJE4EP5jL6CmwYHZfSdFp96DqCyuYAuXDwkgggWLpHQroj9immQoFW1HEhJWyD9VgVfRUvEuWy",
  "key26": "5PAzRWfU1tbJk14fUkDRFch2H6k46LfWku5Fygs7h3bMw2vc6XHbCaHSaugAqPDo2Z4ezV51LxvzF7gmaBfhxBEF",
  "key27": "3Gdm8KbBduZP3n3qoreSFbmGf9bUdMUW4GteVDdU4HDZrHCBDs8hGhTKCYPcHobdUp1HJvZUdmmtGEWjCjPXZzUL",
  "key28": "4n3LrXB3v9PQ229XMR79jtcjWWvgYBrdBMgpJB7TJuxRKGGr6aqMBbhHFzMENZrBxy6nffv5rvkNbn6JBzR9vn7E",
  "key29": "5Zt9EVTzTsdRBd3EsNnHpAMdcB4xursnh6qj9pB9viVMYAopL935ETEbA7YtKjTFmCTtteSYKnw1C5epdmBzDDrx",
  "key30": "2QbykBeQ1G2R244sBux7nqazWnKBPhHPB4sEXFbrWkc11XPAqoQGvbiwTndpCSdBrpJBtzoi4y8BuuESz4atTKjp",
  "key31": "3LfZjp8FFXbR1FP9TcUpRJiwhgKuyDVakTzFgzoMeZcr6L9CAc4tERgGTJyH2sg3o7rHzrV8qNjgXdXNiZMMpnr3",
  "key32": "FcSWfUipLzDUqmojyqLiPtmipj3g1ZET4BjqdCeZUEjnEi8xMmdtYAPxSUH7KHgpCronGBYAyTaooGjVT1PhNmT",
  "key33": "5p4UMCzZJWenysjCnyt5tXCYZYHbAwJwkQGEMWjHc6sK7T7oGSP9pfKWufv1yU3S7Bb5Uqo9UhUcVcFJxx4zNYM9",
  "key34": "uL7qUMF14cbPfR3Yd5WVqea96hG7ejTaJ8ELxgr7yEL2tjBzjeHp3j3mGcJDDD5QNhFVgRpgFYhr9qQBee9Ac7P",
  "key35": "3XJqNC9wAeGfE5DHQcPs7xQGooDMXwSrz2vqC6hrNQ15129gMBPTbc9cYsh8qNxwtAcfdbVATSUXi2ZctUBnRTbT",
  "key36": "5Mr5a5XvQz1ryComhcr1v2qEXcJDnBUoToFsS5LXeRJdbQtSDjs8Egx6YNcaxBfwb7EKFXv1Ga7xvWiDiBvkP6up",
  "key37": "WeRxyVaCQ6VXCMgwUvvKWUEvNfGM23aAN1fhLc7HnZQPk6Fxa6BFogX3LLhXHp5xrFLicq9Tm464yWUkBhyWT9X",
  "key38": "3umHHk9peDFinZHL71K9bk93uW5XGPmnpVZMq2xDdPW2iKmNbJomDZXS2vq1xC6a9Z5KEhwNBuxLzEciUNi5KApj",
  "key39": "5PxAWgXa4eV7vVUaynYq1GdE5y8Rts2KQBzwXFm2yKPLeyWTWBmTaUWS8mvrrq5kkogQgCgLbX3VbajTd2TuFaAG",
  "key40": "J21SzGytgvyJbRhXkDQauM3bg7RCthDbtUgTjsnjb3dZrHQBucEVyDMkeAmcuUToqwNqrthu91VjdZpgimd43mU",
  "key41": "3z1J4BkKbaHwwL9HU6G9zhFGFR9kJVMb2U7Vnc6UZMWLCTzffqJjY6zjPyUzgLb2m8fUv8Sza7AXizJ8YKWP4Rpa",
  "key42": "2y1cnm5hGEjTNqd9S7YuhU63NPKDJF9ZMEzSjaJ44qWoiweUrcu4fhpmg7mN53115RzfdtafUtYpvMF9o4xZpKvx",
  "key43": "5iNKTTniYbM7SAiYa3LVs9kTioWr4rwVwSzFsNtbPHXskuP5Xy1qR595a8NWokJLvWoMFrbjzG3LxfyaEwGKnUDW",
  "key44": "3AJSkNnSJYC1GbaSuUqcwjzSDFgStJXQB6n4xMDogjqeM4UBK8mZNznaqtoz5GowcHKLg93UQHG3QwKhgTAioUgM",
  "key45": "2ktDeQK5gz1cpXju9f6aGruRhqjJa64HDVtuD3wwWQqQsvGT573T4qnk6HApFmybg3VVFnwRPYHih4wHyb6WPLvv"
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
