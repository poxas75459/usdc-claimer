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
    "3Rrtvi1mgVAZMYLwnMWnAR6jtz8crd3YbVsttWCYusKDW6gyNowvt7q1a7q6w7Y1nJ316XTWjASfDVw6XMSggPG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pQ8HweJgsPGJQfubkhdtz9zDNHMAjgdpmvhp23m9E7bGVT7UEAR2X44G8ip6ngnJwytrcm7DjiaZgNvLoLxG2vX",
  "key1": "57L2QFacrspjAxDRuHZ8gMsckABidHG3rqLd89jUeWtHWk9SHpZ1MaaT5S78UN5jmayZmQkkNVXyxfCsuwosUeYy",
  "key2": "5FbteYB7BWBHCNrUQkM3MSpoUD6KL3eFNC2N6ZrBBUSFSAT4VxT3ai7bhZ3D9tW4pjNcqQpAevhd98UgxL3SXQNz",
  "key3": "YykhV5ftWabjCuAQG1rKoWT9r5sf9p3vKfKmbREccPq8JTr7XFYn4sNby5WYHneS4gAgC9dyogKm9SToZfJxnNY",
  "key4": "2ruAGqfS1Z6XvuXCKmbns9H9bWSXVNatRBLVPwZajQvnTp6uNkr441oBZy4z4LMhtAZVDg8zeSaeWhkTCEJBeYkv",
  "key5": "52GijSc1tQAD3f2KiEYqA1AnTLtxGjNJjXbnMEPJsMpPnmwRFBFEU7bh9PnYwVXx8RD5HBrtrUTz4xUirHF4G3Qa",
  "key6": "3N1qWrkhTtSfPV9zbB1W5xuh31U9WW6wgJffbFnQkEzXtadiXg7e7qY1GtoHaeCdNpRYShL8yEYcVGZ3U1GcwN8b",
  "key7": "4mjPiK23YFEk4vKCLvUtAUX2NPXNgGFb3JWPp7PcJN6b2hcmJDCsiBbzhcyU351x42Y6AFZokhsyCReHNhcpoWgX",
  "key8": "3QddnjKxjyPzyEQyj7sPbtS6yP5uNdHGL7BYHfCZM3bF5unZAcAJLV59Pu9eZVe1La3BDRVQ8uacaULhRfu6nM1b",
  "key9": "ZdRNq13NZaRj77Hzn4XrcvH1B8bB1ppiUn2uHp1J1tpGMc1nPk6EEV9N4mXCDTUaVF6V4cqAnkjyDW9K2YtTW2D",
  "key10": "2n9G78FCs3p89mrp4XQgUkUj3vA344Xy8QXcverh1Chvro4PrVWG4aeZvFebSWBmsaFMbRfwBfSyqaFLQR7M4hQs",
  "key11": "2DxkUs7rDkYNZRL4DvoDrPMuGxu8pXWGRahFFK6K8bqzhDA3mx7pV5Ev8i7agPv3UzjYNzMZ2FeNfeJGiy8NKYFU",
  "key12": "2bvzoojE8kXAnLzfQKrMzzxnvsN7qRMujMzunvcc1mu5MmStRnkRAbKqGV55rwcyUBRQ64X3jt8WrNqcciAaimVd",
  "key13": "MFwqZ73cdxW1KSTmXiwL4BMLMr2RL7Ba5VxwAH3tMGShvXWNFq9coSYjGUAsCSqYzZxw9RaF1NkSW4qc8nj6G3d",
  "key14": "61gL3BXoQxhZxec9jxcoKQmX9mTpYk6uvmb9noKKoB623FptoHGdJUj86XX8Wbsy6FEZTuYmTqtAdM5T2ThFyPeL",
  "key15": "4hzcn5bE8WrPYaRBWNdLXMq24Seskxfh6ghifjxB39v2NNCEasGwZe68NZLRFTrrv5bDWoFQUPyWHsDo5rwLTs3S",
  "key16": "6UEymYwfWHmMiFJxqAbGwz9yQWgWin1kHvQ35m7mK7DicR23McgUn2nTx9VVZJMTzaXEgjf2pi6ywAGVJ2tdCs8",
  "key17": "2PSF46c3EiQmRc6dbbX4VJhefnCmAHLTtxpM9W5LEmd13rNRsuYmdSkHUzyybbAzbjKuDLoFTrAbu9RU5mAZ8kRG",
  "key18": "47MYWuRouHwwEWohfJwnZ2BF8wghJbGrttGWei6nMyYRZALxDUmKJyNgsGfEMgAUXqNxLLwjBQ3dqSo2dcfLUyhG",
  "key19": "3K5RwWUSybcQaM1Vwdr9iYvdwbJWjPZFVEyhq4PtGsYgj8zPoJb2gCZtAMvvdHQ6h3JdEaonG7FLcN4evXPQfAgr",
  "key20": "62ofDYDgGgA1FPntekLgVXA2H1geEXEZ4bHZdJhojCS3nQEDccRXDqw2rcCFCnenstEPX9PPxXiGfyxKnqzcoNHh",
  "key21": "XkCh4EwmwEjzpUjceLgCrnBen3N5D3RprocuHyibpiHJomxUE3vk1Cv8qEyg9jKQg1zeqtmtyiFLFGp3maYEyiY",
  "key22": "4bBi695Z7BhCHV83L6YpbvoJHh4YozCLn1Yp7fwgUa2cAPGPC3R3eXhnJ31Wzv3LoCzzufmuNumgGm5PD7XdoJLY",
  "key23": "58JTkZTscYFXFk2vVM9SozkJTjwRy1bN3MJ2HsKKSxE4AL5JsuEh5CvN67k7G1SxcC2nXkP4LMQfWreuwYUsAE4Q",
  "key24": "65vUt9B1vwGHj22HEksB42UwDHhbzjBjP1jd1FGY1mcCaDjru9L9GgYWnAG9rPiU5FQsvjAg2zMfhHY5RaxPfxni",
  "key25": "qXXishTwcjYf9zdQW2Jgm7yxat3Yf6Nde1zAReHRkUxAJgVVnxfi4wiDcxAwxfg6GEQcCgsTypNmwZ85yiD8agg",
  "key26": "asYy1NzCsjtwRMkNAqdy1S4kqojhgD7Gn8J6FEGuGj1ABGZ5buFoTLsC7a1haweJZWQtrdj8gE4yYKT8ejnAKXp",
  "key27": "4aY8jrnqHLfNm1kaYTNwvLgPgfYRRFv5U7MxTSUudi6gVePsGGgN4kLTBT8uJiVDn1AfN8CvWqZ2oLEGbeR1fMAU",
  "key28": "5iqAUG7VRCJFV46mAzLQJsjS88DXwM5WbESNt9jS3g5km4NbpPAfNb6ewQibgz9ZNKRQ4r6sBVAUJbkE24Y3tu2E",
  "key29": "2u2YTaBCKdd2kADfkfzGyTTu27PyPBHFVJBkvJQ2SZ99d29YyxBJ3QkzjuS5DRvdQsWjfo4RmDa6q8BJpETC9KAo"
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
