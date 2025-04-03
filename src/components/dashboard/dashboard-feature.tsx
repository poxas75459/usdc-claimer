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
    "5aE7vEPizom2a2Gyh6xDANRXHyvokkWXr3dAzNgVbw1AhNzeHHrpFWwCcqc1HsMvcbN5nh6oQKApboKQATNU5J42"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gn3SyFzr8jpNAtZXkkvAqo3G1EC9xF63eK28rAoNFoyKbu8LUvnAQU21CWT43JJmdJVom9jtUXJNhUxj2mKqQzR",
  "key1": "5hy6HxCWae2SJc4ZUsv3Gxu6UoBvvbyrefUFV5HFafiDwXhrK2UPuNwfRf3VKvUccnrC4DZFLmVAXRUFV2FS5qUe",
  "key2": "4epKDhUEWgzSVN8Ta2x5EjQTBaFJKFBrYsioxnrjHcbVNiZZNFsdKbpAuUwhHjpVdY7gRwqKoS7uMVJ91FMGem6n",
  "key3": "26cpVS36tLJPQcoLxFGzkNZT86Yr5Jad8CDATL6HuZdiLrYiWoGL7LtqjV5z3jL9YJU17s1EXyaejzaCmrRvZhR8",
  "key4": "4Zwy9Xw9BZzbJsX1ysnZYZNHM9H8zwXsZg9Pf34MVVVi2goQqStrhTfrEZDBvmrKKpzn8fiMeTFEKUBfs3Y2M6ed",
  "key5": "2DPS9ZGFm8bhiR4vadUVLLwuVM5nzXkb5dXVopQpBhoMJ3FobQSqm4X9MJwocdumYeSP3vAexsLgRkMpE4ydZmwM",
  "key6": "3qmzUXqnb8TtD3b7LraZ5Wqb5P59PPU2EN2oE6bssL2a1JbPtUxJAGfo7QatyS9ZjnFTsGzJ6MxzwFtLo7CB1mop",
  "key7": "5jj6HvZkZcawxTKdBgEMxCcFdCpthhizbgAdgrwvFAF62TW73JagXVyY5PG4UxqcqkiqF9PQArjMS4qhDnaX7Aq9",
  "key8": "4yubce7NGrU2FqRdXDwz7SqnZEvwas3WssBahqsJqSgjdwgSonSKzoLgy1VLf53wKjcimrwfDRMGhD342H2LrU8V",
  "key9": "4phViT43DN5XpXWAr9mwsv8cAJ9xpY6xQ7EhF8hCDhCiy2xFStwqYyLTzgQRK8U9H8oTFtGRz1URC32unNQDDFDk",
  "key10": "4LQUpnw5Be2XE3TmDCTYgUsVa4tuU4U1qLhwL65r8G5vNrEcPjDJWrbWaogH2y8Db4MeVaukBojm5zbFBeiaQBYN",
  "key11": "2VX7xupJpsRi2zQJFFKE2YJdvtbg2Z9gKTe22Brfet37BwB6nxopR2nux727DjxhiyxfWy17KY73ogKkk4AFGmYv",
  "key12": "2NBMQV1hNA3WRFUFuZfuC6fk2DUu33FnDayPu1sJQqumG3Kf2EUCX3woZrvmyAsPWGP9NXERD7Pghstni4vLaVWc",
  "key13": "2mEDAsSXNPhVxPD27KdZrHS9m5CK8cjRRxieh3M16y5xUh1ZEixxKBfaCqk7Mgb4w6S4bGmUuc5gAhtqCYojmjJp",
  "key14": "qSTFK9USSnyATvgHU7ZxkZWkCX15JcSrMPdRc7Qvgx1EdPggxbfxAHT8iNRhF91jJMAuWvjFBGt3qEa1eituiV8",
  "key15": "4xfoYGLuy1bEaj442iMkzqQmvKB97PG4pxu8KQBrhp7naFCf3nKqFYZfEbZF1qHJ3FTA3nqC1H4RxpL3xibp3yr3",
  "key16": "2XnEy3SWT3jdcEZZLFqDgKWT2pskxskiwKFHCJuY1dbE1X5XZmumepZT6y5ePQSF1zFfLmbbm7mwzz2V35K19J2m",
  "key17": "3BgTf26ZzMi3PMk7TFU2VdFZVNq1mRs6YQJjbR7e2zKrv6xjAB3BqqtBGBtXkz48tFXHxu4qvmignc8MUbxTHAk3",
  "key18": "ry1AZi3r3RJty6UTT3awaWx4xiZ1kSt2bKsULtpzTzaMz4nXddiznrWRWAKyxTj72GEdjQp9whwBJDShRaWWuMT",
  "key19": "JQb5k7ZeJ74xpgHNPToVtgTSupwCZE2R7wWJTxWkaCxBiN2mX1GAvaSp4Ddn64Ex7f1nhc1U199mqjfxrF4dumW",
  "key20": "3HuD86ZjnNnVhSeccut1mc1XmYsgj78s4nywPLUD8ZFESJm1BWZvaYmE42TF2gEDmnU6xT3GAn19MD6WFtgerM8X",
  "key21": "4FZCsSH83zTnPBNrPiAhDDSbyYn3muAyGCyqfcX3obwkp1wGepwsmwumnvAdb8oUXtaXTt9CB5YrMnZZxjCUPx44",
  "key22": "5fxdUWf6jfmkCS3gmoAGtHr9U6baDLU6AQnuJ9iPEG8eDarJPLvm886dJRd42bFpvJyMF8v1eDRJu977aY4mvanV",
  "key23": "FhikLQDVZx2p4R1uYqdGrvY4Kww5GXhK4Ta4ZDKsjAFhArhBhyywVsyPvVTXx12aAUFLF5YbngBkzo47hvPTSsT",
  "key24": "5jaRfkX6ro3mB9SsRGxFKoPLXftuHEPTUjDKorLw9wAGR7vQC3BxWeyBpeobJezWSQnMBUTPSKBTLupXHr2QzXuf",
  "key25": "2mi9iLo6eeVATPrvhZ6jCwzXWu55ASt7WpXTg4oWLd3zMNyiG1kSNxjCVfQtn2ApqNF1MXRMqahikK7NBHWuwWQi",
  "key26": "2GTAR8VPVvM87NJuPL3H7EcpCVWWdNnHAjx4nf6ruK8woyanvysb5p5YpZurjsqhRZrsBisuHafGW5c78Lps7pJF",
  "key27": "362bYHjfwpWC4YcYvA5TxwRj8Pp9bb4UkCCdsn4EGiGA6vxXuTLcmUhchYzN7R2BvDaeV8roGtGpyAMVVpP9Qr4N",
  "key28": "4bUQd7rtDwhqMRVTCCLEkgCBZ1QWBMATC1gCgoPU4xAeCUenJy2V547VxKGE1Zq9D5HhRJUbw7BMNAw4uDgJufM8",
  "key29": "AZbEACQZ377em79qsvFuGKeGB3AC63vcJou3tJ9pjVaNc5qBp7iDgv1uTcnJHeUzGTLo5JzBFLW3GNaaiNdvTBG"
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
