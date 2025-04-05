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
    "4ML4dRYjqWCww52kyiw8cpr6MsCyW59eV9YedsaS1TtHmN8ZiVMudWZyadKrEjN4dqGUhdnMoPMZ4nqwVwE75NCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4awDZsHtj89gMje55r81ns8fPtXqHzBzGTJBrBrcQzRRVTbWjW3GkhgiKorDRr69vwXkr6BotgYtz8oBaMFqWfDP",
  "key1": "qLQEyTdZwuVg5cJvva2nYTp5s6Gri172wkJjaiyCZ8omYSLiQLbkF9Va25AtcpBXWPXTPZBSFZkMXysoKjH8omn",
  "key2": "5HADJmnbZRmb5HJDSPNFc1HkvuUxaYUV3CUrH2Rnh4WQZJ2ga6GzoTAUGBowyg1wHSY49hq9jiAzo5XKxaciULXn",
  "key3": "2BzR55o7MRPsx85sMVp428QX7r6bAu5MDzdQxwjSXC5bviQUFy2tQKEYowJrQVFNtBjKAANRZrmeBfTR8jdBZUPg",
  "key4": "2WxNBmgX5bq6GpcPSdt4YFAt5KnN65DJVK29o5v67gQ7z1ifowxTDnLUtMJiYbA9DjoXqsenyFx6axGkxoM8Lnze",
  "key5": "4kzf9e4QonqpS6fYx2XCyrkjAxp7euR8ocr2sG7KJdWvZpaBxDQZhwcsjcWu42jeKc89kTynciqyPKV7yNdTbsRE",
  "key6": "hCoygFCg7yNtXUsVReVQewhzboJpK1XpMYqKaXnge8t7A28nY22qjPXtsaXB3d11sstyQYYXUk6W1ur7gd8WzVg",
  "key7": "2n8roRSGMce5YWPEAVLPdZ1PBe34PzqnTKXf6HuATqgBb41n6NY1a1HP5hF6vEW1KtSQGbVXAneaW32T9mTXrwMR",
  "key8": "59DbTsvEq2Dq3KgCE7MrD2D2Zj4aXtkUsUZNSnpfeFS35hydSvqjASLCyEexL4Hqquryi3Qtrn1B788MwFfrmr7o",
  "key9": "vEvLsBbkH5tQaDHXzFn9orGc4s3hQ4ekEduKh2rm6JCs8CFjzbWuz2wEmY4oS1G33bjqvjaSpozJREHLVEfgm5B",
  "key10": "LeW5w1BgH2aXas3V4uTsa5a79hg53viVwfBVdJhE2aDwbMpx5mrN4KyutHPTEAgiaB51GUzDgcE1oKd9agQbH7L",
  "key11": "5kUK8oB9A3aFkw5BG2msNfLBmv7X1swmTGgn1VfmGA33wA3chQKXsUBmc2kYbXk3Ss5omUEtseYfaYfzKqkXSGFY",
  "key12": "3ywfGaQrbBTAdpd7UgZ5vjJCbdXZoSHpCmw16zgbHd3GGkc8Peg31yaWguSM1mLRKshTsA3XVMt2wxpVU2Wwu6tA",
  "key13": "43jyfT8T8UGFBwFYxcXCoDP21fRWmq2bpSxbfA723b7jLE7zeBdxgsmCpDKegQZXMjMvFFKRzQDnUWyKwQiN6jS9",
  "key14": "2GsosQaLt9y6P9SN2oRt8C4bZoVeCAVBM6XS5rs3zpF6EbCob1XiSRQUkoqgDwbawEnrdRBi7FWDkGEf7LHq1jyG",
  "key15": "65XnZHnUE9RDWo9CSH7GL5PHdSxJ1cBk2rxArqhGu1yuvb2QnCHmUfgqMcHR27qQB5YvrUpHaxZL8uz3aDMam3dN",
  "key16": "3bhoacA2dKu6US5XeKVrimVvyqRgPnqx8JcfdbXCkHPvCsPinPK37VWV8bgxJzubzmccP5c2JHLFCLVg8oqVwGFy",
  "key17": "2rygJF9RSGGAJG6wx4TvnNAwwjubuv48Eb6gSmMdEsCoMSQGR4VWuWQt6Ky4FVSbPv6SUnydi58pUwBcsSwV2qt4",
  "key18": "3XjTwEfpoF31LdWX4iHfmGb5GvWVYDS99TQQSzCQHMec9Ebcc6iLiacTnELo85NGZCGz19gH3GZ6VZBmym6bji4f",
  "key19": "4Jm8GtpUnAST6L6aEctAjkcj5FxFo9UuPybwoe5h2xofwJURk8JFpf5tRrfNgPqexXVrXZvwCDrdxZaBfZj2eQ37",
  "key20": "529V8HBc1KThkdPEjZtYKPvM3sHokqJMayLqKG7dgvoubuGn5zguPCVRjtBoJ1VQenYJPimEbz3R9Ui6E3skGGpv",
  "key21": "2MZbYbyLSPfyYvBReWPpKeMdFEygsNyrV7QGw31sNcbZH2mofCAF8Tc1vZXhRjoG8x1GwxbExaGfbkDc4JSiXDE2",
  "key22": "c284UgpYtH7gYqWv9Fiat7NMxDMRNEgZdmRoh1r5EZGyDQJkkqZDKKT6t1SiU9iEMNURaggyuYq5y6nf21gMGfC",
  "key23": "2u2pvKoeos1hKrfxrAPaVo4g1uiAtQUoFu7hGkA3qS2bpsvrAGctMxP2gkwUxDdQHY49QjguMYaWzphfQoGJSgze",
  "key24": "2rDTZKs65pWcntpz5SCHvrhAkWaGA2WstM2yNp1rXcV1fVuUZ5xsuizhADcKrdCsxTvg2x3kpgQ4m7UzfYLZyHf4",
  "key25": "5mQohmRnQ96aDzq61E5JPnobxBaX7xEKF9r5m746Et9W8s3W2Mm67Ki3xPWF8eQzM2qCD83b614YcToQ4FsPNYfd",
  "key26": "E9jxyZzBpUZDcrMnvXJeFJnfidizCpps17wrNsJGDPT9R2QKQqaBa2o9tb7AuDy9kGmZiPRMB8Dwghp9sm4RBw3",
  "key27": "w4tYNAJxi7GEQ5xd9hceCARZtepwWRezePDiAKqwCjsA9E8QbpZBAAWwKziw6or2aiWWxi8Y8gfjfMt2rX4WCm3"
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
