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
    "4hBrBXaHU6b6V1ZJdVJjnpcfCj3EsyCcnZqKeNQ3Dut3EunruviHEZyjpGJfuFYF6hg1TYVvo8fBr519ZbpXKgz8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w1JY7gVV4gy2PoevLwqLH8SwZgbMASL8DUEwt736TYWds361MYohWuwhQEFUYbt5M95S9kQTBVJ9FtLg8b5k3X6",
  "key1": "5MRTBmTtWPttQ4o9MFQuQv4SNUYpG5aExt7bvjn3TzQ1B9U9kz9JQ2siAfa6ZPt6rLyDHuZM2CDm8k8BezFXR4b4",
  "key2": "2PNi93HwnqdnFjGchSYtXirPGRppqBLHRGwDxEa17pSxx3xoGLdLXwhnMwLrjFhvEa7DZBEzvgAoEcbEiDbaBu3f",
  "key3": "37nnMkaseQuNUNffMaA1RcB3HRXT1RgNsVMkXK5URfautRa2JyrDFVKdQATkjbZEcuS6Tk8c5CE5ihJVZ9cFYTuY",
  "key4": "zeKrRHDtMj22XK1Sv7boquvGauBnxorU8i2c4vzeBbRztm6xcrhoJQtLkighuUVBm7cvXy4N3rnU4puXpnSfMrU",
  "key5": "wuYa61Lxv4Wx2ZbwEgCCnir4HJTSdp45EHH5FQGMTPAwDCxuBjBFPkLYdUUSyMYCqsvk93xobcH24pmAtUSHx6u",
  "key6": "3h8AvPrf3pEyUndjxLGFvzq9aadPzRf2B5yZtQUBovpbBmZg4HtqSF8fLqz1ETGiBHaTaFaF2x5fqSq6RMUZa99P",
  "key7": "4WSxouiXHU82abtYozZNyh1UZ83gLdhhSJpTgDBychNo1h42ty2vx9rWEJwMb64giLBJABvjemZiL4572EpV1gCp",
  "key8": "5r5Lsc8QCPT9xGQamLyjWRdTtNTU4i3MkZRsaejJGnjG1s43gcqd64188hn5CsDPEBtPNVH5RFTw7rSia26mxoFZ",
  "key9": "3QcEMMwJZw5hF2y7t9tWJ92bG732aCKNBQ9HLLJMtJZEjfb9aSNq9AiwKxjyWZUqNoiho241bBYubuSkcxG9bMRU",
  "key10": "5PYBvW1C6gBUfR2qzoM5QxDyiaka4UmQJUpGVxzevwov6CN343SaCKZhkE5ps5JyWYKwFdWnCNJPrFbwV5qPWWVy",
  "key11": "4WPX99FDj4VZJyREP2aFHDm4ZBgzNdcvmwLXTx6CS4fC7r4D6NwhXnTrAkeQG7Kiv7rjEhJQGrFq6ovrxE9QCPij",
  "key12": "UuZGF8ABbteoWbCPaLsq1FRRsumTAe9PDHnTnLNj1FkUkoVuftmqUBP5rZVMi5SUJ1oBp2CEr4ESvZYSfPL7qF9",
  "key13": "4seyiiBPdZioNT15v7RWU1tKWz637NBpD6UMXPMZCJX4KUbBoCDA9WYw6hvyKF9PvEC8Pdkay9jhEJbKcCZXdXHU",
  "key14": "2a9VSnL44JnXSzCMFntKv1rBN6uuz8EiZywth2raT2AGJux5A4d8W8YdZfAPwCXM8RUcVb15kafjeRHBAwkMHmis",
  "key15": "cfYraJMgQ5PwEDXwz4p1zkmxS37wX1dM5tTsA8EoJA48Fxa3ZT1VjQSYpic5azMLhhq59TTZJ37jBtcGQ5Qemzj",
  "key16": "3oZoDLikPYGNQPbxULknYjsHrtt6tqmt2Xgi9UeBZerXjjVEvS8NL5PeFkA3VnYdkuEr6ZdwiCxRaQVs1vzZYE5U",
  "key17": "4NgXEMyXggJDsPxiwFjn5Y2NXoesGKNcZZbmtwjUjDA9NfCkeqExLkRgX4wML4ryqtJgD6s4LNtE5nkSAt5pp5rV",
  "key18": "19k7bBtNVNsQKPLyiSBKHV5ygkD7hJMiZuu2gh3Xpcw4j4ekuDk9SAuuEV7avVKopbybsoppP6xFZyuxfGze8ZC",
  "key19": "5UYEMnNipqQNYSxtLxRxBtnfw8f96CfQQ65SSJgx8o5j6jVyUV9aGUShgoVZtaXhWbjwJpVZkXWZekMwsjFQkmiP",
  "key20": "2dGj9LWm5afWT99jmngjpaN3opRk6Qz9m5NaJbAHUGtwydfs3FMTZHNHpKyk6Svf6855sLVdUQ73JAJTQnfSCwA3",
  "key21": "iSZKwmXwwEvVmW3qgyqCNYFD3cWhLyJaNPfYEnxqCH8ZVEbBitq42BLb2xunTy4ib1DWCi7Q2TNjLZdb4hSTPqb",
  "key22": "5qBnMwPJfKWmXC9UnKKwN2qWvphnBbTdS5Hm7WryUJ2VX72BaD5T5BpVDo7aknWNv6sjwm2rmp3kAxR25N9HxLaE",
  "key23": "3MPVoV4PkEu73FFKugpzps2GC6S2jPqiFshJ4pZrDNKkdasxYvdympUWd3sJPjnoDzL4eeU8LxP9JMjRqgVfGP9e",
  "key24": "2A3cr8TnF9ZJJdgxNGXFSYKnQU4Fxi5YXD6ZMHhD5mbqc7tBDxBW7VdGVZ3ipTS7oGJ9MtSxDYG7q9uCvgjX74Va",
  "key25": "5kiPMKJVUv6huFXXXgrqYDm95PFmBgyEiZVghTdBpJ4SpLy9XmpLiGwMhhVhS7Le7KKvQbXM4MrMwu5NysJRCy6C",
  "key26": "494ZWg8SRTRsAH1rKLE8Pv12pwRbXFWhapirTVh188pXibnWRN24ugz2joirkEzyZDCcp1sqanJmngUhVDAMddoP",
  "key27": "26sbRwKMAk65fsGAPMvpqacRTx8WwrbtWXtK2gNkRhtZEk6kbTe6M8YvQxqiPSJrAsVZjPVvkmwMMq9XT4HMDCti",
  "key28": "3iEMiSv1B6ybFyyWAeQRZ7HGgjorfNxhU3JU5TvK4VSMDRkuzNSReq4LVTskCEX7G6XGxzaNcVHu2GZQ9QLqyBnU",
  "key29": "6BiQxnQYvrjv2KD6zeE3sC19NqUcp1u4oDiD3YNtkjhyQTt4tLWBdF5chv6cCM4XRm1Yn6dhWfoRda6mir4fmZU",
  "key30": "5yu4y1kmEQ1ZAdyU2cHAXTGZdiZDchHV4E63sGiABRcgd1c6V2AnD3jJp5t3XzLViRBVq6bYszz7ucHCysDRnBMU",
  "key31": "5RhYi2z3CR6ibpoqbywpgn2Mv8fnZ4TUdJk2tjjk4sgP9p3yfC8Cn3dQZK1CTd1cdVLrzLeDxDeoZjB5QQcmWL7T",
  "key32": "3wViGKi9SihA4p7cSESwd547Qd1foQP3z3pc1vCX4L1sx6GmgcQcHEzo9iSaPrxbU5Z2kjKdNCX6axYtSSWkU7Jf",
  "key33": "4ho1AHF7E2PD8C3WNzvoUgYwQc9JhXcah4B4dHEkQP6PYFDK7AfryjkPodjxdC4Rz7RAiHaDHLcDymQZFvWiZyJ",
  "key34": "SX7tomdyCvMkEvuHYPNSRdrSfkvWYFZY5kQo1ZVkTgm7aGX5qcQcb4jiPmEDzqUbEkQyvekGScaWtuArjbUQeTd",
  "key35": "aG5syT1ZT4qb9yJhN8jqpk5KQiimre1q9Tnp1uV1zdjehjqCpxRkBrzq4nxSVZXU18ARM77fDZ8xhNibRcsBfMv",
  "key36": "5r1n9Ux4tKjymaxpFhQtaM1CUxnkMNH1Db6P9hxm5xEtxXFG9yYvTD2k7Qxu29LpeXKJ3SK2xvPPBX2hTRKR75Sq",
  "key37": "22iWVgAvRDwwJ56Mn7tUyYhLDz4ZG43WJaD8BBwHjsdxny2m8Lm8Nu19522JEEuM3XanL7b5VxkYDWLE4qLwKiLi"
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
