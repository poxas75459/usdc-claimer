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
    "5WHQRtmaT7BHnqVvUgutNQbfDhpwbr4a9nkkuzQuo3w9sU9UEKYLSBEsGZd17b4JMH7unWgepwmhV277gnux39E6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M22scG8xD39veijbaefHQunHCmUxM6kAhRnbGsxsC9awMmdYfaQngs85tqSH98XCWYKtdRGLqzWssR3Y1Wd5axq",
  "key1": "2obNDyxrRCtTQXJvXxaBdx6esSdw6txvYUXXjpbdCwqqo7T97R1ZrFNA5zy97JQSjQbRUuyH5QaBGevymXbmd2i7",
  "key2": "3t8xXeyWFARDRx8L9hYvP3WtzYM5P5zKKTcetFSktYPekFEP27HsxwXLgo1eBRYaKv3BE9zvkBmnjhkUccUCt3rh",
  "key3": "67nKLj9xFF4broZsUsBUCfq3Bg4tJr5AYNqJzp7jMrjogCceqwG5n7ixxSpGbwjtvBVCkSf3gD4QuarfmdfVZzhi",
  "key4": "4XgJvkgNWXegREFdHNztS3a2eMTGQuTXqDXjipKhmq5DgNgFzw9zEiActWWdV7pnwhozup8FodwbNpzVRndwgsrY",
  "key5": "5Z5njBddmidGUheB2g1FyYHV4uWeBW6R6b4CSGYVFjpYEZCNCVWXk5nG6S5dbeytAnYagQEL2WUu2DS9RtxyCdeq",
  "key6": "2JBuWnuMpReNrvDgRyqrt8298tYrzQ2PHsCK4fxJccxa2LXjuDjYAZ3nQv7SE1Dz6dPbb6Liq2xhfd1FDaQUuDKk",
  "key7": "35uTCi6b33twe8b56YF4VNbva4vQ991aYPPFQXoxaw2eogysJKdm7eWwsVDE1numWBgTj2LW1nNMvLFFyBNCc8ZB",
  "key8": "4oNTHTxCxuB3vJobi9UhfnAQARzZLfLHTo85fdUCp1tuTzMSzXY1iYkscQef5RT2UToDgdF2MVEw23pW5rryXS8J",
  "key9": "3XuUgvePB1jfXXifrP43GAhSx2nvmbXyDaAwSdnCU8hUfca5bsm28CTcovqQo2QxCXNno8YW3cYVPoWNFJ5UUAtC",
  "key10": "4F23nFJTJV8y6xKnE7pVFmsHB92N99CChbaxNGwEeVwtLHrG4cBRN73nmLJqg3Lh69zeKUvmLy8xRvSdMjV5uXLJ",
  "key11": "4X9YiCVGf1u3vWwG55jTv9zR8NdrNf9JLFoM1R3s44M2pscdjmqjKUGshAiRyhSG37LTjEsvH2XYZEpWjtunNaag",
  "key12": "5VpzVyWjfh2Wrds5P4qrf8PPjgnpm48zeB4Xvvq9CstKnRfJymkUsp88SgWAD4QxCNnsnhRoijpEXEgfcqKi6jW1",
  "key13": "2atJJy7EUwzeNsdMPRkZSybAvVYFN3cy4uk23njvAxvAJYgSNisPfu86dRbUERwA5L8XD2y1R6XP9JGt8sKDqcrP",
  "key14": "22hsASPVccs98LaH56XtuCBwmF2QHSJ1THv1BtfqAyHA1vHt4iVYSMdXRvQCvWBf4EZGAeLL637yqyv8LyhDwAFM",
  "key15": "4F1K13mbPQe1xcTuxmNkDomJG7KKNEefq7M5CJRKgobdbsXNrwvTNeDoHyayN9wcnycE7Ga8BQzaCgfH5CjsniUg",
  "key16": "Wgey8fuurenVLfyvYZAmTgQ4g5nNnpranMce7CByDL6tkWadxb9JvhUT6xhyQFsBS6zv8M5FQ3vnYyV3psQSusB",
  "key17": "3Qs5f5Rb4uER2kGMuN8SoKSs4idk4ivWdxRZB9j398uauKsVSgXxRJF5zsxGNYfL9LGWUuPENBtJChws6kctRUKv",
  "key18": "3JUs3uYqFucNqHuAF941K5vQ22XhusbZofskingpswGBekoDrG7jpvZavZoaB4enfybKqfi1xtoSzRKp9JKCUDQK",
  "key19": "2S112uGskqmXnriQrpUh6gpqjh4gY8wnR98UAUK61us8NjuZGspV7zAErvnxqnKizBS77sUuiq1yu8baFGx5kaRL",
  "key20": "FzxFPQ8mfMQ1uLBh3NB3S6kBSjsF7zRCuRm7Cxmp8sUx1ujJgJeabSgdmJ2WQrFayJVCHf7h1HDs7Yq3RFD6dNF",
  "key21": "3Pc26uDgueeFnYfnnfFeSDHnK6gYVsPyqgWbDKaSJg3Ln9xNEHBhQU3XnRda4cCajrrcuyHky2YLdSbsd2u2F9WQ",
  "key22": "2t5ofTKMipRnYazBe2t6wb5SYxReAo4SKVcp1wp3x7Ek3XE9oVkhHBxTszAcd5NiYJfnDB4gqT9rYy3qcus7CFv2",
  "key23": "4GPkoCHAxGbhQsZQrvT255XEVL9ztnxYX7GyFrsduPGNfkf5daW8YfCwysNjFZm5Ada1piYdDn5easXU7eVXD9uf",
  "key24": "3ubZXbyrt7MpuaVPEQP1gbXtiFXqzV4qGM7FgnC9TpPpDcs9v94zv2NkA4exBobv937exbaVb5MmsXpxKELKCYX3",
  "key25": "5gJkok3gqQFuPD84Cz2AXDSykwuhKCLTc5R99PHu82bcuULsQUUWiPCVWqtirBGsPRsL1hTvvPEEUAF7hDWBZvce",
  "key26": "jm6FLmBxpt8KXZEmx5R24zEyFc1DKxwfNBxsGmS1S7Z6tRxMbLzScBA9iUQDUCw9W5uLekqKotNm5Ht3zKRKE33",
  "key27": "5jpt1TawhU6dGnNipXF9MmSyb3QKZtmLDxuaaeNKt9TWxqD2vjRte7pSoFhRc2zS389gzCdvkzo5Ss4tEznAXXmV",
  "key28": "49T3JqRVWfBwrrT4YWDAHkXM5eMfUV1z8NFxnkd2uFGqr2KYs2DfVvVSt9BYK99VrfpbQVoZpiDBbyHD4dw6U9ti",
  "key29": "254xKd1gvXKMqkVgsFvEJRuz7upbZTgjdPFex3D9goexfdU5bbR4ppDFRDpPpnM2up7DKe47UQv4Pj5NstCHGpwB",
  "key30": "3a5Ed5F3dW7WF9AxL7VbKfcw3WPKh48wN9D9tVoVF3NucEcd3RdfAB9daSQKKPK2qq9AppCjettL4ghNMN3Wh9re",
  "key31": "5j6kJGhsDpVMYojbDVLojq6QNEgRDAhRKjYoVXPPEKC97vYs9KBnAiKj4rp2bBWHKA5zxQ7BLqBHUo8bvL6Jf28e",
  "key32": "3tkVywv3LQ9TKXN1LZ83BgSbS5PBG2dvNnSb1qk791YHrp9Sowvqrc5uMFMwSvGdE92cZR6EJumA5kjCwdyVjvk4",
  "key33": "5JqdjeTt6ZHHhKdBxXE9gYG9ToyUts6QfQ7UpF7G9Gd4AzV9Zici3cAqUChcw8AfWiPTftFgjAZiboLfZ8nyt5DC",
  "key34": "5KSi1Y4SYHg4wfZS5WvekPD6DM2sdoPnofky5RUxhwDzs8iy3XPCEUK166crh9HaSXuyiL7W3BmxAR8JFtzekc64",
  "key35": "cphp5fgqbp47tn4kA4yRYGxXvHRdNv7pMD2YDKkFm4UgNkZXuWi4SPhsCV6YqYWCu7kq3tL8ywwJ8kHZ2N1EyCH",
  "key36": "2Mf3TVgR3awAGU7yQjz2hGVG78mgVSGi4mhdLizbLqbPankbyBLYjSKdeniv18ZQyLvBqw6Y3cupUMouRUtsNWdZ",
  "key37": "5AL5BEBZhYqmHP2Z6vBaDm7zwN5sL4kXfXk3UFenMdvLvUGzEyo8dBMv75hPmtQo5VArV44VJpQso1XVMmrBFG4H",
  "key38": "3MAkZ8QjuF2LBP8UE39mx3UcWqxTDhyqp5Re6LFjfbVr5VfdUiWWzXcvw9xFwLBZdzb2883fzqQDsippooVcMCFL",
  "key39": "5gmiD9sHJLbdEKg3Zj3pD7EXw9AhhGs4UAPyDdDBboeSLJsP4PqAPooPvszSarJuNFR54LxcDyuyqQSrXwbj1tFW"
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
