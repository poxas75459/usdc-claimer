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
    "4LTdJqTfEg1mJstcrN8PAzw1ctS5CKdGo9MxBFo3D6HP5JX4AcvZupFGb3QCfXtysibnuR548hjSkLK8XT1Upg9j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jUguhxUzke16n4Z7G76bAfp45P14rqYzJ6SpyEwMiXsgdko2jLWMm3LC5Ztawy9EMxP5DqJWXTreKnxmopTryJt",
  "key1": "31EANdaNn9SpWbT5Zr6Wq3g7nPsQpr6LgDmdBfGTEuwtkwmxZdYwuN7pA2PyVRqiAY6x7K3wQhBfzwUVP8yPjKvv",
  "key2": "5aqHZmZ8FzJu6frgiVLRkkSjkowua32C7HmUwy2MrkWZXt2K4Wiocf1KG4a8ksG3MP3GJ87sxb9ZjNzBSePz8Biu",
  "key3": "2MKaJcgjbF2EYv785x4apoRGUskfrMAqWDv7YyfLMqo5oswTWAWDWnwjFavWLhEMfp71MwTwMaGpS8rLtju6L8zA",
  "key4": "23KEvSs5DJ42QBH5AodFfsf7wsWWT36bUzGYjbcEXkSSHnxawLWQLmCPPy39XB3LdCmcngNbgxgSZ5C9eFnDfqHQ",
  "key5": "4i5oHu6ipcBvx3dYsZ1Qk9zovLc3WeFU2iqYc5Km7dqSeXcn2C85t5UuZLkhrqma24eHvdifpoUf49t7FJmss42C",
  "key6": "4fdER5NR69dACHkzQEhr3r2Z8zYvKiNkVLVeT8ejYjDXucRTutMgfE4eFWWAwFjWBukkJPmQLPBLDa5qAutcVHHc",
  "key7": "WKYXgddfjjqK6fmZUQiWMRqiis8Gm5CGe9Zn4f8Cee5p7JWMrUmzgmNb37DMzpdC9XC6BCkzAmDeJcsvgQPUwLF",
  "key8": "283jZTkYLribWEgMy3Y1ZsaTGEtgtVZX3cdxFjHQU7CJnGjByvVX1MtHVvfS3LD4T58EvvtGWSmDDaA7ozRLTua2",
  "key9": "eSrkMU2HJPzprKYSUA4FRkW4sGbKJabg1hMiSQ1o1Qcv4BNkFVWL4CW3XcEM3AF5HYhjKHxeE9ACK6Z7E88MWE3",
  "key10": "4HuELT1Pu14TejkQed8nsAaKyvtg82uhzcfoWEUKUQUvcw8BmQGxnjfjufwDhxCFzexbB8SF1HaCku4MyJMnHGgc",
  "key11": "sXhzMcMxSHTEEbts75zM8wfXmLGq8EvC52LxjcyonkzhP2nnSBYwpFRoykCYtQ1oF7c3Mk89TTPBh7WCWebadHR",
  "key12": "WYhy9xdHJGJkj6X93JezxhpwKiSVVge9Kxur7fRmVdsGbYwwm3YksWcPtoU8QpZGxwkcG46NbWGLNm7qWTRH2wB",
  "key13": "4ERUoCLeLaNFGFtArFYLzfBFP5ZiEjoRu7STWzETN7qcdEFhHvMTxvph4VFBc32jsvQpywyuFoyoA2wSdX7avUtU",
  "key14": "5pQ4eHzuSfwB7LNwweeg1kKpr9yDDUrPgnYSFPaPbMpHRbhKNVUQDXttNTLmbrCAZTdvKJSZBeT3i54EZqfuk1v",
  "key15": "kPoVDcvH5Uk3LhLxrUbLXofzpdG9XG1hBHZeupixcbsKkS1bvBErdxLwPxhRDcmpNaPhQcpYYQAt4MQh53ENykw",
  "key16": "3cuABHiWuMaKkaoZRnBjg8axkn23hjzgp1mje9rAJ8jtyuxtEyn5oXfGEsueHB8u1FsHn6jcbPVM7Mmz65Xgk5ym",
  "key17": "2rAGAucEvVYHnnkv96FJaMPbLohF8HCvWZ8UTaypoHub1bhA6UboqfvPZQVUPrpG6CFfiJj6ASqtRPLwjmBYgJUv",
  "key18": "QaqvLUTCtxaGZJ2KQChmnvhbfDoeqTPaSv6Z9czKDqxxLnNn9EAko9v42pQGwm8bBt9swGAyVgTfdx3H6AMgwTf",
  "key19": "34WFWxmDsUX2uQLPnXgqC145DDSrbMSWxgkgnAcncW22opMJjq4kDRkoahvEaEALBNM1SyAZaWCWDQAP9xGDTko9",
  "key20": "3RWxNSv5j2KPngxrApHx4KquAGVXcCgDhRc4NuBbGqhck47xtojaj4DmrydoySWmhrA4qc7BdqzwY6i4LNrhL6tY",
  "key21": "4AQLiUBULtJdnRNK3prhSfhiZJfp2UQ4B2w9i8phXcWAMHVbeNsZsNL6fS12Pv9LrjKfLDtft8Jywag4gBSzv3V2",
  "key22": "352ykW479ovDJ8aB1kMZh7t1pkVmN9EZ9vQosUHcfBCyGN8DKhSB4RGKjUtV1YCFpeYaccLn2dVngk2qVqwxggc8",
  "key23": "4yRTyr4sLAzHkJTQ5Bk4rGKK17sC3jWDQxyogx45qCiUyWzns5KcQVaatTrGJiPJVrSekZExfPXVfpw19ddAsqrA",
  "key24": "eDPzd2tDyp2HnCP6mrVqECTVNqzfFJmwNEXaCNVWWwZU62dZ8URuqxsVSns6MZ2cHjWt5JWNeKKEtQRccwk2Q3r",
  "key25": "mhyXnQHXB2fNvyJVpYU933fVKGdxtFUPvdSTHcbQAFJwHbbYW6vwjTbFhBTiw728ZyHNoXYCx6wbrBTkPNE2jhk",
  "key26": "f7obYS5tqxxnQsyGQ6obwKBUeuWk7j1JzUk64TULckXdpiDwkZrN4NSR5MfbXLpbit6kMYVmw4Qs7VVisX8HLHB",
  "key27": "2DQMdhSqBewU9dMvUx8aPLA8oeH9GV6zhvSnTF4fD4WQcibCp8LQcAxRNdHeufE6KjXZZDJKFH9jDaBc8NpzcF4A",
  "key28": "VySvY3mn5x1zTE5AGzRCpWjx1UzUfdHJSNiHD1KbtzRow3ZMp5a29MHY36sQWRfYXoryKHQBLfd4Rp42Qqd4EeE",
  "key29": "3eEgMfgaEWCEzVN8kt8d5YU7cxdC2nQ7WcM2f5FDhQ7d3TLNzrRdnHJDKDzWRtwy2yY9kKyobAAJBLvbPJNyDerK",
  "key30": "2fba1ae9pvqp5oPNiCB9T2VfXFQKG24TCNxx9xQyzSXRYdjqPqbvhm6meq8SeMu8vy4QTWT7hXbc8E5QKLL1SASb"
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
