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
    "2xQmCS1Wr9RNoL1awCwnHVU2C9i5AWetgNV1Ca6L5nByYXRSy1qbLPAqKcfPenEyEXzEZGLAG5H2z2yHrLtQtxWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sjUdDqznB2m9tsrNYFJ1sqWVQwiZir4RbCfhwoRrokBFZ8Gt8UC8M2LQ3tSrrJfpU18nD5zNYDea4vVy5RNY7r",
  "key1": "vyJE3GghwYK68WvbVYU9crvFAV4AKkav1YNEi1nAS8R8vVbH6CQEY5K4RvT87AjxHfb4fG3shDyXwE9iUsq1sts",
  "key2": "41XiueVcbQUXpFTfQR4nmUfy9Kr7WMcgnQfbMgCGCESToGDjpdzvvjKHjAoE8UXsE2gtHYb6Bs1NjBwrJvqpVzdy",
  "key3": "3dcGEaPEXmxDMWW4Dz4zeR1BTnzM43G6BDny86uC8f6z9TNxwy8HwFZRucstwmXsGi6Ymv5aziFt3rG6ae3K85mu",
  "key4": "4D7n34t7hJUYHNHvxr1ej7SLdwEfkXMdzF4JsDhEn9EeoHguWuD2bJEZDXEQffgVxXZRwF4CxYhVvaPfUbErdygp",
  "key5": "53uazwTkCBL8gn9QhYbg81JcFDF65MRJP5eo1Di5MhfBqACoaXupfiJmkVVab254KH45cnSMvShu7UTNsA6mmS7r",
  "key6": "5uuNp6iisuuWy56v4RHShei4avttdFmUozhHaA9aBAydt8GdL3eiDCsapCZuumQiK9RtUu2SHw8iZnMEYMBoKqRm",
  "key7": "w4vv4MMaWQDdsNPfs86e7N82Skm8miLWSxS8c5qeKQnKd9dDugL61DG4n3e1jMzfKcaqFehTCC6TQ6M6RUgo8WE",
  "key8": "3LTDfwxoDzQtDmDSCv1em7GptUBENJ7dET8VeokVGniErsvLao9qJjp7D42rRLUPzNpUEEBQbFRuDBBxuZuaupRj",
  "key9": "3PNj7DaXoTm4XbhSCQDhZ9ZNtp2E3fbo2JJPZTLwnVgdjD927dNiYFSqBQyiitXk8bru6u4SUpvoNtT5dbCAQLSr",
  "key10": "ehnW4GcTGwhkLV1jQ32oCTgtoEDTAZYLJmgFcFmCV46PrEKYp1rgvdaFhL9waPxwdC7WXoW7EkMreqgwUw3oUFg",
  "key11": "4nGNmvd97T6vkt2Xy3MExCCWfWYHi3WzVhUHCVrdPSeag8hrzwpgqT97KYs4o9qPFLYMjUDMV7Cs5S6BVNvBDaUM",
  "key12": "3EWVBgFGtxuxK6BAh5wL724LSTU7UZvgGVv7QYqjiC94jMEdDcnydpgMtP6r3mt4BBsLQQZ4WiXBkQTVQbG3SRW8",
  "key13": "614cunoLGJsrkETo7wswxGqWujFRKBw3psWBwNChFvT6jpqqsDMoVGLv8KhHNbNpTw7dEM84GHr74bM47Sskd1ZG",
  "key14": "e56wMwmRkP2i5AcnVdFaffXMrn8LWsDM5Q3dEbUWoka21jtGLRdejjTkPydYKG53hUd823cdKvWyg6TA8fu3oyk",
  "key15": "fQ6he2gpGfah8RrDPNTuVuAJQEGkqNP4icSsBDLVcDyYbe5npraaL7Yoc92jyLX5gmVWHXH77bvj89B2u39qky8",
  "key16": "5UaNaBfgPh1rnyjVmK8GzqoGumPzgbYhkqPMQcRrR4gq6Zk36xVbfDbFjc3jMa1nkKPXqBWfnc2b9rV4dBx1hXaS",
  "key17": "5VwJDav4NudkcGR8znoe43jykfDtGQxpWX4nZmNkEz6uy1prDqEvsxEPXkSUNB4tMA5Vu8WbeSxMwFUoeUoahXW2",
  "key18": "5vKv2C97u3e2N6Jjfqx36pM5Bq8nocbLGHGYyE3HjLYWLFRCb2sD9nNUWCiWmJbRhpC9q45KNWnpGwvqs1mmR8Nj",
  "key19": "5CHqDTcRCizJ4v9nP886T7u9qq81QGYPi85Hdj3AjwLg6PzZWAM51gDfYLGNS1FSuv29YnmJR1Kf51V96DGZFdTn",
  "key20": "3jqykE1zdq1KgjGs5iZSP6Ba3J9kvLKxQjCnBAx6awmJj1W7MD8FKEyb12L6gciZeNo6rHHhrbWgfnM4KjUDRfu1",
  "key21": "5KpLu3EizApuSLGjz1TkZbkj1Xbqu8TowdREs49DWRCX2bEy1AaHtsnYzcWTHBtct1TVKVJ2VgPWViFTfb87Qowq",
  "key22": "32LwsSnXazTGZHHLdeDrD3Ftf81tohPyh62wB4awomZYAVR4g8GxGJ4PoSGamBj2hjGitZFPbQq5b9Q3xBERTMti",
  "key23": "5ExcDH45SMJXkvtukK6D9F5NvQpLdT7FC5EbPy66tsmoFp1rhmbBvd1ynghBNsGVbosdAasZA4oap9uVW5NESDbk",
  "key24": "5mPvbzeU8PNrdCDrpNcrKhsz8po9Run61Vz1eA7aCPuGGiL55jXgYAzWJMxqhGLs1Z49c76sz61qpoe1dcyGFMA",
  "key25": "31Ss1X4kcg8iVfRREb2emuJMrZF9ncqnygApMN9GUazKhavmDCFvn8efs1FxtyGprUduwUeh8zSGfUCC2XWhDYun",
  "key26": "2C7hw2HUBPWbADFw8nBTt8S2VHAMEpEExZHXYQe7mVv1w7nBTrneeV9QuVM9hw46TaRftTEYCFUqABNLamrfQb8K",
  "key27": "5Hz85zkwdM12SgVGfq83aagsuBT23Ko7Bcs2rEc5aSGeWVRoLJPmwDXgVD1bxNiSSN8otH4fwzcmKRRBNw11kQ7a",
  "key28": "21nAz8orSgqersacdDtXzvEoYSucppGGasEhvXevd33cq6D8qKX2D1eKHD11TQQLFHKDyu2chsEXQpA1XW8ASVuy",
  "key29": "3T67mARUn1k3YCESUPnRCXHtWTiUU5DSob1VQYoDv6ebg3YzrCAGBAKFGKRXZ9Sry7UTcHcQUrSV2nQ6YuTmWEGM",
  "key30": "3fXFCnSij58u3tV2PbBy6FNxw79ioLcep9NDQXaF3yEGhQWVUgyk63bq8F9pyoewTNJFSFum9L1nxsMDfMa1uUAY",
  "key31": "4tdPqwFYLysPJpCpRfzre2TrEtzCgjUf7JVB3x4WnddipPq6FWJP4FLT3q2FZoQQB7BKTgx5LSgEHiVwTsJLfCmb",
  "key32": "5BzRyzkXUBFTgSnnu4wHvibVxQDU7oxWeGKtCVR3wXKHrRXoDZ4AZGcu5ciMv7oZ8qRDFCn9Fc3JSnodKhAWT6Q",
  "key33": "2TwcXwZTjWSNv3phbZwtBJi4bgyeigZJ5q7xEGiDJBwZLPTiPftbU8bmmbTpsGQjVXzBQMcuzjNPnLGbAyBbMHCr",
  "key34": "4nPNU4rfvLCkTxUQFd6EZ6YnF4EPdET7JqnhhfggHgBfmzbKDfokkss42L3VieeVRMHti8y2LvdYuNm6HyeY6Dt3",
  "key35": "4UcFmdcP3N9B7b42FpGgaFLXFEpo7p21SELZyZ4cvkRcjsojFZzt6YnYzwAMFpbnRcBu2W2UdwT8e9PMQyAMUo8Y",
  "key36": "2bG98rw3mTuPC7eqkL9EzNNTBoMmUyGQXD5kaYX5ATkyP5FCqBvELisJJUu2P6etbYRrTWjhoBs88mp9nzNysoG7"
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
