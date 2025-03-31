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
    "3DX8cpebWFWkRW86u667kKiq8ZUL3uxdY9iaJgaBtsXkfqdTZwARD4MgC6umca8F1UgpZw58cjEvtsfNkFstVPtZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NjY2XVarCiCyL7L3kpGayF5B1RqLvS2ZbqtUAuLKcftM5iuKfKRSGGRZgSYf8sRDrL7Rov47t49guVhbrFTsbHx",
  "key1": "3LRzLZAfcgjVXTh9p4SgCrQ6tTwkmXbUrecoqxj2GtsepVQRn64GZ5hqvnZv36D1yk4i318Z9Akin91LQHWou3vp",
  "key2": "3A99LL89YDwUvoNL8QhrHhzfWTrr7981knNm3V8D6fmQJQrNoYEfSUyPwCCubzNx2y4EvwiwXycKkDE7joSQqvMR",
  "key3": "PrLCwNRfUGCUFr1zPQdPHVmN4K3KK7nkJiFofvDViSu9b8WiaPaF6kNC9FcRtNUCtZKZAgrsK18ANzH4AEqZy5K",
  "key4": "57M3FttLoruN83nHp1r2tLQ1mqVUXgGA5FqDfXTvDnXbegfut3ZQ55gfZkgTjkQ2ur1oaq5ZvmGQCNGSxNqfT1tt",
  "key5": "32oTGTUVL3ffjTaBJQ74wWqmaisWaWjxsuxcG2zZdZUkTndhDkMPSjbrrDYUkU9e5PEfHgyiKQ2zxyQwUc7zmVa9",
  "key6": "2Dwo1569sM1Bn72DaAnvrPnWK37ZJjEFY6t4DjdErpZ8a8h5Uy1o8s6qeKg2hxcxjUqadCex13PM21ToUwYpgmPy",
  "key7": "5Ve6DAyn5HBvXU7UxAhyqE7BBWwxBqUYAgWfsSpT7gq51VffRptrKbZ4vS91UjLmoHE8MFYsjgj3UPtoXg2BKTZV",
  "key8": "59jLPvhGtQNiXZawmXAsaZJJzKr9YvWf4nhhhZQHRJQmHxxVSYd8bittpjJ4x9Y3xarQL99tTxw1qS89ACbsxf6G",
  "key9": "3S2vwK2kNtunKoEBqGhNVkh1kMArxUUSTMcwuYv4i21GfiQLqkPxwY8xdmSTRRcVCMSCJztw9bSGoKq8kfdbkHS9",
  "key10": "5z61BQhE2jhwAEDxre3KAz3QuRExY1EdYEkbAnTjGJTcYgVZ3syfWDhYutdndYGhNc2pAF2L23zbcYGUqvZAVn5S",
  "key11": "4GPRwKYhM78Cdp4q9j2afE8DQWaz8hpq71JzE98YCFT6UZbUGpP3TTx4k8Rhim3Gf25J7o6TdUJGjimFB5jYhbB",
  "key12": "5mMz22o7A4ExSSvzmUjA39T2yyvWWj66fH8vXWrM1j3yBysDr6tBQk221EqCsqWSV4rLsNC58KCcUWUD53yvBufj",
  "key13": "4VLvkqUFmFQJu2dGej3RHm5edgS4HQF5Rpqd8VwjvPH15DAkiukAVio6rm69GJJPgkB9NZoPBW9AjZ8AeYZ7PEhZ",
  "key14": "4tHeGxViqQvhUXYDE1dKudjp7mUvTFJRTt1pJrhiQDg3HSbSBqFcp6n5MUt22SoWrVv1Pxqw7rLYnh3BACcACuMi",
  "key15": "2SDEFXFFvc8KBauMfNsrQCrS79gmuny4oNzPg6wFNDFXkZXXkzdvWqKX6NFSdY7HcWRENFomjrP9XiZ6KTLRBZ3b",
  "key16": "232PHUnkWkWmoJF6rvzeNbgid6JZEMz8mpWFcWFBt7kiDUiPUj3CV1fZYb7feSXSGVyKLDmsQARWzBoSwbWwasLH",
  "key17": "2yrzWiJbfe5jL8CpUHe6BPYm42vfwQtwW3rkKs1b32PfAHbyw1A9Pdop3vxj5UsyNKHdTy1iL2mkrbCnmdfMKwJr",
  "key18": "4gPqrGWaLgdS3pob3zfSoju7tRejMuKKB1KnHvW2pRUVz9WpkbQEVNLTm7KT2jJFuUFmtZ8v5C4o8jYFMnxxELz8",
  "key19": "4aXHJqsEixXtRLBCvsgVhFRfrw9WvsAsdEKucXu6yiZfKqSkzFKX4wJW4pD4F9K3HjQrkYXJZrtCbeiepF3FGXux",
  "key20": "5ok4QbNXasG4RGT5J7vCAReDdfR4uZEbaXLN217Qm9cjAheVHR1tNiWAcMis9FVWNYoezSEKJxF2FTEdPNt875XY",
  "key21": "2ot5AM5XZrvPRb5NnvS5Lv38f46HzXdXPcBB7fJjKBk7iAR7DbJkwPz8MpC2RGc649v6hHfA6szccwXyqQ4XrnKp",
  "key22": "47UhMucJ3MZYcqqPSjSHwu4aPLRH2wyL5z4Vp8A1LXHpPbTAdmYVQxkj2sUHx5oqvdjFfns9vztv6G5ETGRYn57z",
  "key23": "cRMpKhXvX1obuqeosLLdZfWAcgzYPwjiN8MGGAXYEiRe7zyeWWL2RPYdqn9E8UW8qqPcsT89d2XfePywCethEjS",
  "key24": "3N1VLiaXd74JqJK4xmz9xTwJiMYkfhR1FqXW817W4pL8nvqwkFg2JCq5nty6vvjo6AFAuJ1XTrMAMcZeK2hZPqVs",
  "key25": "5PUjQpDdBNpVwnCBZyksq8YHB17zEUEFvWb8Dy9zNFE62hjwTvRQSGqSdqroobf7qyPHs4Nm1ur4L8szBENPoaDe"
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
