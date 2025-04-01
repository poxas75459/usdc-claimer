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
    "2u6vndmAdrs2CqR4Pyk7jp2y7xHZVNKvZiB2K8wG2wkekB5YGnTwbJ2JgfYXdUKnSsvqn4FLbBQWeoM2Mn2v83it"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XheJ25SsewH6Gabp6iNGCrDnye9V3AUAp5gVC3dEPpw52NVD9ZVTWoksjCKLe5R6DdvFXaEHg2QwkVN2NmuZgxM",
  "key1": "5qtsA4Ff6cvx5DhTYziMLriyj6kyCNwYXkidn8Wed1oEkE2SkkpTg75pud6SvMBsQdBSMVzc4HgVUVPpTWuTpPuK",
  "key2": "66xgmgpAYaEhuuvVxXtFWPqkMNxWkBtXogkKbaSQZHKP6fnaRSTYiWnRDbCi7xNvtbhjqCDY3EC21oSWiTV2P1xR",
  "key3": "39mbu6sPBaDLM9mynWMJY9jJX98Vvwd3D1XpvyZDMDwgFaqwf2DcPLrcXQYQGrv9ePLkKjAZaWew2NeYBtGUvCAh",
  "key4": "CdAXZV6CSqxdMmtzUeuYN1rx913qkYTwgtDKgCXNXpPTxidbY6LFoD8dkG6bK7p1uKgGNWmJgu1QNGgYsiktyK1",
  "key5": "2vv634gVGVoKnUmFKSXpQaff3znsFaKyLVAGtgFjkxzmiTXVKeppLXgzRgj8YiKo8YGfxViaJsEVbimsDjSrMoAd",
  "key6": "58VZVq6ffiqDnEDaC7jZmivKiovyXJJ997BBjedwHP7CTkqeEfwHQSKuSmXjJbB5qDn5pHK6eYrkoyxHRPu9k47E",
  "key7": "5FuB4JgV9ZVi1EDaHVcM38o53bw89bSnLS6EUqCDB1uu94PURkFzUMmBcB75pDmKp368DdzAQSU8AmVpExQLKXWM",
  "key8": "3NFieyJKnenBWb1h7oBBFh8QkJhQwBh3dC5CPBDECVMzhHYzd5PNHF7yU4C1PfyTeXqzRFf54vbZzLoq7mYRcd6R",
  "key9": "5Je4xLQjzmtxBWVAXiSdehzUkdk8bxLqZJcK5mUk3KDtu9ryJoP2T7mUecS3tKhGURWEpZdfx23WtFziJyNmBL9",
  "key10": "2B6xaKRf3LoNYoAQW72aExcuWx4pWj2wKLqyfZ6EEpM8Gf1PELN9u85w3mqthXjsksssJXqr9Ztan2EKdtzvpfpi",
  "key11": "4rXPng4yfRBshC6kHECk6s4oUdPHAGDcytPdJ4beaugMLzKLAPK6MRabm4o7MjVNfeVG7J7e8XM3fvj6hYrdJ55a",
  "key12": "2nwRCpWmzUwfDJebxys99f8omozX7CqRJX3RZwVD4HNR2aCgi2za3ZQM1hV7fgT7JpfGuqhtfNcjFmrtteQnAPQd",
  "key13": "zoCvf3zSfwD8fjJENbcA4kfEU5Y6Jt8SN766rZrtpxs1gZuYFCKDCzxoun76VBxrFqmMD4swvu1pLZyVL64TTXn",
  "key14": "3DRz4jVzfFF54FCujJu1iPEbavzPKgXociAcSBNmsBW3PTbMKaf9Mgow5EG8PcZT21X5kRwdweNdBgSBkUUF3YDG",
  "key15": "33kqwL9v77QZG2AE7qTdxu3XmTHwyo7P2c9Y5uhh15N2iEfkiEg2ZrNejt8nPbEuLF5qfD1F9VXiYk53GDF2Zp5t",
  "key16": "5sy1oDxC3hJyUPQcj4AprZnFaBeAk92TpUqNtKfzDgjJBnhUy1tQpns8pkTWAuPLWmkY2GdpWr55vCZxqeDS4z4L",
  "key17": "4D2apSXA91bSnZC6JQN36kH6PETemnLtwWYh2pVe6m63msYykm9m29QUVxoW3rymaahNGQhwo4PW7JT19gYjvBWc",
  "key18": "4MqqAR8hgiGE1ArQmsuTLCfNnZCkTfsfeodBzCq7JpnVfSqnLCAMJ1XAAS2aNeLj1cVeHxxHAnh3FMi95aEi35kK",
  "key19": "4CwpgYG1bvQmokfr3Dr8JKq4Xa8SCSwVRrMJwU5EXBudgdsaPJiC58fqXx4tMnuVjap3ntKeeB7Z66pKXpKXVToA",
  "key20": "2r8rPzETJRvLtCyMajHhwp5qgnbd4qZmDKe7v5hwoaECHAvUo1kpL5onVPbPdmdEf9y7dHfC7Ci3oSwbYhb38nGU",
  "key21": "kgtFhGmtiCX29ng28pQTkZk3PunP8vn62eobbDoRgZ2sPDq15EDAaRYnPbDRfrdtYC1Ec6uNnbYydKuGrNYzhqn",
  "key22": "2jVJE5U11DhWtSk7extdusmf8wiRs2vFxUsrgkvv5QdAk178JMAjT9mrWXKgbFTPZcFok2Kqry6yQqAqsSi2xw93",
  "key23": "4amdkjmjGtBkzwZ8bMX2zaZb49wmHNoQqKKMNexKPTXdsRShEhhVtCkKFLYRx8yaozSLmtv2V7Atx9miFKbeWmZE",
  "key24": "w4wdre3RHCQcrtboKNS8n2nKDP95K8htFryKRUz3ZfZfDEALmarkWmCmwSpfqgCRcfMJsZEK9jJH7gtuou4VUM4",
  "key25": "3A81cx8oQoHZtd6xpSbQ2wWMaMkZw3X1x1uG12YWGQGeGzvE4j8ctj1DxStcezd6UH2GvT1kbRD96QSxV2VnByXc",
  "key26": "2WXDQ5cuR372R4GEdjJnrYQcYxoX7LWAAECVf9DjVpbxLZ7DMNzLxKAe1pCLrfMRsMgHyoo14mB9mXdySATfGJwe",
  "key27": "4Pii4VVE1eSJCbwvHp9RkMxm5qqkMBaTGTwjfvs3h4R1Y95wqdcTEse7KWbfCkd6LVcZT2T6dVdAXm1BAGU5AMk4",
  "key28": "5EMPy6YrSUP27mhXQFZLqt5kruo3cVEubbhg8S7ysF2TckvoQuPDkUJRKePR9bwAKb1j4tdr77SbwcwPDJeAM2jT",
  "key29": "biJZU8oJtvwMXBHLPrX3jCV8awfVq9EzyW7Xhw1c4g4f2xPqnZJGbbjSqw3Nu6iVyVPvUwpyn4L6yrPU9NE4yoL",
  "key30": "8Zd613oPGzz1XJttB74L4wywv6dKAWpWxzYUUJ46QpfM4CC1Rt3vH43nhjheS6urvjduyPAZAU5Qi3Eu6JLi32h",
  "key31": "2HSTpNZXBrS4u5tVvyQ5Ur2mUaM5GUALeX8o5mKdZwhYDMeK48vn3d3iUHmqtkyouWo2ZkfmDykqRXjgxv6u6v3Z"
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
