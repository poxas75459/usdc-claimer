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
    "5CdZCKQSBUouJ36LDdDZLFFUfBU9VvNU6Nk9Xq1pL2nEXL3YAvpeXoD1UiUNjm73N4ZKGbxE2wyhb3di2cjyw3SH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LJnS5uWfmTrigf5DFCUsiQpvSSrp1oaYCHdCfekojjWkVXhXDDWUUFBuWRmAtnfxeWTPjvdmKUdiCXMtNLDWH9F",
  "key1": "2rH1bPHL7A4Qjdv2ffckQZPq2YhGMAeMMpi26dLA2ekEj5qMeu37AdqhcrdW4YdCvmgYa2TyWSEXdx9hXTGJVErr",
  "key2": "5gQJLjUNvtLyuo3cfiDs8MuWFbswsNdfubc1UUUG4DNZCA741wVccE8NaJ14an7pVpmoA9FUiscQqrSCVjXnUKFS",
  "key3": "2cxUv8a69btbMeMmToKohHqKAYU7ZontAY9TDLexKqc69PRLBsW1KSuFVHuHeuq8fPN1AdUJ5RkWo6JQRDVn3XAW",
  "key4": "hwAtzj76m9fWMc23jEzUH1TkYhRTCeMr3LdiQNYWWsVg3wGLcjsNgeTDVWEZxEhqadQ1oLrscZnfvhkqu7D8sjJ",
  "key5": "wjQHGcZjfD9CnM2yiHLYrQVyksV6hJr4FPPnJon5zR7YSVxz11Tgu7b1YfdKVcaYru63s5KEDEMKP436nFj7fTw",
  "key6": "LXxJY2t2rjH9skuhf4m6eN68fQAAcM4PYWefHsM3Rjyv9VHPFdwbVWTB4sRSYYoNBgpeY8cQVSxtD2EdDdmpCZU",
  "key7": "38hNiskVRUNnVc19qcfJvXBDR3vRR3xdsECpEpWa7wDBjwqDLBddnQMCrd6CV4gmgc27yjMLwUaQLmDuDtwNyDjN",
  "key8": "2VP36vZteN6Rzu9tJjfdvBTzLMuK93S2UQV8AA5qeVrqCB5ex5ZuaaA5vtSZ8buhqdSYxAEqkxvCny1rhK5P6PNs",
  "key9": "3U8iKpa3Qcb1fPMZc6227viuti6z3wT6j6ptMU9XNam3UWfyLNiyouAAQHTQztbkyuwF5rbBkkcRuxABHMLkTYMW",
  "key10": "mwTLP9LKeU16SPU7cSGP46E7Ft8Ba9sQMJc1NjRHFYo17Rm67g6xSAcGKeaK9PVVkRWeHcpWJzSQENjfN3AN19S",
  "key11": "2drmy8jrbW3Ypn28NkdhFAiU3W9nzVYw2Mbfg4sa4Qo9DArX9fGcAZLKKSx38Yfx6gvbs5GxHLCD26STzpKNwVhN",
  "key12": "66FkgtK2TRyDFssCyJ4N4AiDvGPh1Hu73tJNSFu4YSf7tbCzGX9DLwmFVLjVQH4qBX8Evz86D2RdyJHxay6RAYst",
  "key13": "5GhWvWDZznjiNcHSFCF4ZTbu7Zt68Gju2y54NXUvguWno9baX3Cpmj1YhL6ub9bz3Tc1VyCUstSBSe4GfHDSUTCx",
  "key14": "Nf7uAK4T94YdREwFR77tykiAjHPAvyJ4HGpjUHn62ePMRFarRytSTgP498K9HfqJzNwryohwXzbMWZpBjyzmEmM",
  "key15": "4c2kjz9fdsLLZCiL2YYaEfVeq9qzDvnmS2wXDjzcMrR4WsDBqUiZPCXq573RuGV6qvQ8ATqSbbotGqZsmxzCRqX4",
  "key16": "5Hf8t1noDMdTq7pNdNk6qqRiKQmAZHZR3M65X5LqKvrWzmkkxD41ZJAntEAUn9ZLFgZNYkSAj7BKN6kRm9eDffRq",
  "key17": "664caLz94ojsUXo5S234i9RT9RxcRShbR3ECDR9YZmuckayJL4jkdxyfcpWaAddCC5m23BTC6vVJwkNUrBmEdM68",
  "key18": "4qkd72o5t9ynUNv1MTano21e8L7rqeXYFxXjzibyx1gnykUSfu3dY8qVRjDvrTfMT6twRXH5VdRDa8s8E9jzNNES",
  "key19": "4KnUd3kquhMKPDg2ioFvKTRhLi2gnN4GcPaeaniXMwA6px1ZSZa5DsbCWdcHHjJPgTvGfKzVS7wpe7ZBbLmf9rWo",
  "key20": "47bRqQF1GHrCnZsTkmRMz4bkqjjzQ7nMkxFskaVjKEBi1saeBVKqS35JQbSS4aLjgVUqJcoGoBDcqSsQiaLooh1d",
  "key21": "2B8gRmXJsUQ6AtQWFiim47CxgswzQMgwxqq4YYtMLc5egJ9uAFpbMLSG1CNaHSkHJ4YAknGvzoDMvxkctvd9xB8J",
  "key22": "4UmTKdTqcPU7sL2jfPTT8Djor4zfUzQWxmsdkxk6b9b5ovoX26Y5Fhg3r4eoVbFwP9tGyzFrY9ZY2tgkn5F56gKe",
  "key23": "pdz6WzPNvrhmkTPywF5n77dBwoga4M7apuy2h5rtt9AVHxKA33E9ozVzbvvZVQVhXPNACLjJqw29x2P2vU6vdCw",
  "key24": "5Q1anf1VxNdr1yy9kpmT26Ht8LKL22x5NaK6K35UQ4GZyKWTNhGZvXYiYob2MdEAMCFTvxVo1Waus5BCpN54QXy1",
  "key25": "2KJwCfsYaeYLd9QGe2ixLfaYhzZUnHZf7VAcf6C3ZJ3FBpgx58R5tLSs3vSVGZAM6XAACjTB462EBADx3BZQf2Jy",
  "key26": "56bmBDxqg3APtmBbJ9cBtjGz4kLZWAjjUyb7zihQ9gjYzauoySUMgS3bCGb7qjz1bXumS2YY8wcEvsFbSMfgZbd6",
  "key27": "65Y1WpZgCEuhxtBUbUtRtdPuoTtMXMz2hMGjFvEAUp7LrxeraYQLQuHXvqmgVajYEuopphYaDnu6u1A9h7FbY2G2",
  "key28": "59nZetvArqFyFFt8sHAkAuQFPVEwveYACRPPXcupnbQ32uz1BWbbTqtS3HcQvsFtCeaH2rXcnYsPvwAEud64mPSv"
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
