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
    "65U4eWEzNKQt7r3VUpeN1WxrC3WwQ2cNhfExj2tgjyD57HaMB3VfWpD2eQ9aHuk49KtXMGHFWYpezdCkrMNDkKXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ui96qEBAiYGsdzBXC7sKcB6NBNx2Gi9wuZtP8LaDzAKV5vAq3zyZ9wU53nuBMEpqjtmxcKbvUJ3NBDvhJQf3Bzs",
  "key1": "3JCGKF48YcpN6wdSKSFagUGbDwL1Q63EG7gDykHbGg4PPyzH7QN1Yrov6fpSupWzGkaKDcf16Bc4qanCyt4CLg4a",
  "key2": "4QzXtUuwY3m82xnPKMdtmxYj6AB8RMMUP827FVDcLdENfFLVvJVdZKf69vistfpnW5SgC7b12FreNieTZT7T8Akq",
  "key3": "pTTzrLqRHAdY2qjs6B75PmhakQkS57JJEMH1kTgDczkdu6E4p5tF66TWrfaz7uVQLwz9nVUW314siuQGqh1uWej",
  "key4": "28VmG2XerEhvh2vZtkXnZZvmG3AS9notvFRLhni8t6wj3w8n2zXuQVgFuJmyJTbmS2h7UiNfgBkKhSs84M2dmjJX",
  "key5": "4QY3mDf76gRv2RdDizFj5iNDtrgJQvJbMZfMgufUk4Y1cVEaxz2f1PLuYobPDvKo9VPN3MJEfkNRrb8XdVCYM3s5",
  "key6": "5sQnTGG43Q8kiodAbMKtGyQoWbSBmLH1La5irHXxKbVr9QPNzQgbbZGxUCD8yvgdLmhxjUiNKspaGZQKp75TgMdE",
  "key7": "3Xx7gkMUpxa5owKhiom1YeQnbT4YYvmLp566pAsKR8YDFVzbGrG2jHCUMB8wyCUVqeEbHKRSxCFgeKFQC6nqAJsf",
  "key8": "32jToxPejjxLXW5Y5MLohmN3w5vH3hTAoSdDkhY1oNM55EHPm9CjhQoacNDyXJDMESYeKcueSScrstuR3hfDA1TS",
  "key9": "59Xry5fVpHfASNKi57CxqFDr8Bj9CXwWkiEMBfXZjVC1VDyxgpx5azS42npoJDqHe3zL21bcFFXC1hSJhLwy3Jjb",
  "key10": "3s76Go5hjUkY84M3Ji9X2HjiGbPhLw9yywxxADZdHPBLY9Pv3RLZXRyzTny5PNvd8wnpF2EiJhtdpByeCYhEnKk4",
  "key11": "3Kshqf8VgaFXWEXrR8dA3SBk7JxyGA9eBHgPGaK3By9tbncAopZi3SbBDYmZe38m2gGPUGNPDKUxi7jVus2oQf5k",
  "key12": "3ApqU3wpDEPmURsC3h8NVjw7imJGhNN21c3N9PW1ws6kt9ZdqJ2Z1hnUCZ5xAzX1YJc9jNnj7X4eHx1xpJStMms",
  "key13": "26EsdQpw7Pr7E3qpreWJHBzFp5x7Xt7x92h6UvfBU8WXGRNy9aHMgBqAc89pVhzs567J4TT1s41DTczxEzysoqcw",
  "key14": "LpacRN31ekKtbobFU4xip16P2gk69w8iXSyXua4bW8xxmTa4c4aDK26mCBqk3atHNEtPoxAwwq9NSAPQ2ykT5pg",
  "key15": "5t6vMw9t2bgbENmxda5pG54rc3RyQAXHgvDHBs8rUx5v7QQkHs4qoNGtU5JBBgda9h9FD3P5EE725v3ELpDiK1dq",
  "key16": "2kiDuWy7Yyiux3Bptro4rZ1hZb1xQb67gTCikEde21k1UpRWZBKj64PcPdVADJNZVJrUnf3GjUyBcsiP65GnuYXx",
  "key17": "21LE5DBkZx8GeSkFpKwLJ3QKp5mZJohWAH4aqJGqfEksdvQBWtmeXVndx18wMVeioBW1hXwNRakiGw9XQmecYNSs",
  "key18": "3a25QrnMmWSHyXoPYAXotx8Vsov8qbseeJBoQhFs6SNF7EAKtgzMSLK9RtnQjnRckpHoQdQJ7jr3ieU2rnoWt4X1",
  "key19": "4c8VS5LrZ85ywxWteBooehq3rznBVq7ohwHXb9MHpt5NTrYMjnZmtdWeukFNcAhwHPMun7AGrQaP8EKdGZoamK5x",
  "key20": "4P9Hy8ST3YrPKQU5kx2i3PmENzFvPUTMwNey3CDKm4yfF4MX9xQhYeTB1EcQ8QKxCTnF837PcBAvKo3qcYpLDYWX",
  "key21": "2Bj3jUvffnj55PQBAXWphSD7T38aP5zKHLhezVp9zHArkM6RtmTcMLgsGrtFXogioPYm87qLuYTuC3FzgWVWNebu",
  "key22": "4X1AaYVh5HPyEaY8T5EmBRUsqN6f3B9r5vd4PuscjCBiwUh7BNhvuUdCnNsqL6gwxkcvqN7743DniUWC2hi4SoAP",
  "key23": "GVMn3ezjMZPH8gHK23NYG9FtxLq2pHxCit7KAsKPW5Pnp3fMmneLNb7YNCCbqHcWBgBQfesxdjjNWFMQGVf2RGS",
  "key24": "5bnkBdawnapC4PaMDvMwJmdZ1LJdjCVZCf9dNxLUKQHJCg1rR6Zh5uH2foQipnsF2ex7RPWZxWppaNjFfz1p8Apx",
  "key25": "4H2Wx2LzLspBccv4qw9rzAYAoPiXj2JFSEZ5S6NY2yPVShWdsmNfrCxHJdoGBjtanPmZ7Gxd321qTtNkHjJ1Qh4e"
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
