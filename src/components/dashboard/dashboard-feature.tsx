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
    "4dNUDEraF97TspM3oNTzFu3rCfKVYDNCJrvaruHNxrbDQxxTtZxUSySSQxmGGJVaUvM8C1TiFmMySdyjAw3RiEkg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nWJ4HrQrDLvF9vVMyZ6fEd6KgW7mAc1j8MBQeZa5qwdwr1nZxsZzJwQNGgzWm4v4nN34d368ewFmQACKWusNsHq",
  "key1": "4ETdHNuuUD8T6J7966KoBGM3QhL8VSrCGPAPHx14vfYDru1gNHNSfa9BMC2PN7q7x6pih92rAG9z94iwnxWbfqDH",
  "key2": "4UXKEMgKAZurPms89k2pNjSBKG98iYzXt4Xd48mLrrLqsbhxWiR5M2jeJo2uJp4ghEN4Pce2TiFrhhwhBd1oZ5oM",
  "key3": "47LAngw1Gb3w99sYAUAH2F7A2U5hV9X5P3YqL2xP98sKNQ19uFVReLM82r3yDtbMgHzfAYYiCwiJYQGroERDTHH5",
  "key4": "HoYHV14KyvQpyvSNYWxzHsjJhrrGYEg5REwk1Fg17LxAKL7P64ocbhrKsE1PYDAXUpXvnetGLtz8dwTRLz12xD5",
  "key5": "4nJvcTZheWrap5zHFJKXUjtkbPp5C1VCMS19t72uXfXetjkERv7FZ3YPKMfGLp5g2rfz6EbMCB49MTUiHf7MnEad",
  "key6": "SuxictZrY4AUAr2JdqaNRScBgwFfYpqndjRAtpqUmhrAXDLf2oLviT1YfbU3srxfAYUHY7jDFpFCnSSM3dPkxSM",
  "key7": "348dZ4kKsny4TixT7d5y6eyVryXEfqYk78RqLHgE8Mgo6iMU4uJZGoetLg7LU8gi29pwELCkjSXoiLpStFg7mX2t",
  "key8": "sphmwjnGLQm1TffbvdWMwrbV6rjWQYg8dprCFuU8opiSvw8w7Gnz693uh6hZPSsvxTYtRjL75MCTW7zEdhgjKzB",
  "key9": "3Xux8JrJPeLejBaXzpEVZpBRYnmWQ7QPKCXPGfW6iprRW636hUymUc2HGCtxgtUh1bcUHRAiHrNLviSfVvQqq2Bb",
  "key10": "5i3pDr8M3akrYRB2hGtqMBrpyEc5sVY92VK3fUqJFEuE4STYm3bMhJLVhXXnPiiLdEEY1rzpYPff5SjpUcFWde7R",
  "key11": "5GR7ewwZyU2XWg3zKvmQWbWKCohv1LDLAf1oQrPb2UTCoSLNZczFkhp1P429YsW1WGEhERwbtp7QrXkUcfjFD4qA",
  "key12": "egBK8jcqiW7HVNy26MpMKGe2qqPbZ26K42vizE9gYpHKeEL7DfnV7G6AbonGhCqZb3HktVTymyE3Ry5UMqvmf2S",
  "key13": "4oE2TZJX6hgyn4Jt2f4e2N8XHutenCy46x7JQohSJXkg8wUzgw7H5JGqCA6KXGJAzbRRvTiMknWtBRrTAg53fNRk",
  "key14": "T6WThJreaZqecnjj7rWdbpctGon7Yg2dSHYWYqsttj7VAEFrrvbSHE73MfDT4Sg23HpcASWHC1PCNyvskRx6UBD",
  "key15": "5ESpN4R1p7frr7T4mRMow85vaUNVzPVe5FdiXkUq5KTGabkrUSMLSToRWw8epKHCyf4aBCmFa1236ydKENMDFEzJ",
  "key16": "MSwBgmu5a1AP5cRmQJXS814jeksvkt5CsizB14MVX9CPz32FJJwo63AB4QaRxe8z1x7RvTTPAZ4qp1aXuJqUB5S",
  "key17": "3YJbJV5t2iShmY5rm2imat975RajWhwHsU61WPA6BVAuUv6M8cxDviumZ2Rq7FeWKUnh4VZ1PydkGcXNd5B2dn2S",
  "key18": "W1YY7trXZ4imbwXHnNbBypxhvho73qWCgnZFVdTTaYjVzUAZegDJx8d3bL4J4PsbarTUFcXLuvqsg3zLmwYNvPv",
  "key19": "3XJiQ8iQNhMknTSW3q6edrd4NHrRR1VFKx9RY2jRrz1U3ipK5Wm1hF7heuqJ1WSqkmab2tAEUf9oUq53vh77siCu",
  "key20": "21nD1AmZJQd45ACd5Bg72vsd1dmEJJs1uN1rWzH4nAPJJ4WefeRFAeJhdguasRUx2QduBeBnMFvD9VZjfCWW6LCY",
  "key21": "AbMMR2pnFdk4DN4jZMg8Zrspkbe2XZhnhAZv1RPffPDKrL98yKxGLFkcT1gEGfbQZHdDpsr4uqjzbRSjfPSCsAr",
  "key22": "4WXoaapEUVKjCgugGxfgDGrti9qbfaCDwpLTZk8e9sMFhhnycRf55CFkZi8LzsddHGcudCWyg2uL4xvafefjUBcf",
  "key23": "4Uqib5dgxjqJxG66PBDaSA9RxzsnotpFPJoNDWABFtFBBjQMnvQDg9c5koBFWoN5DaPLE5nwEkYHAvHPhihrFBaG",
  "key24": "5ie37FuqrqFMyPsNRxZSn7HstZyiwVoyuKSh4dutfsadyXRRJTqmmPwUnHeeLkAYbGE7uT7wWNnw2LpcdjQCQdsk",
  "key25": "2LfECWG9HZqYXYpeZQcWdwwdJhXmiPdSbniKRZgndanfWwDVsi7vKJLFa5t3WN6idPdSXe4DVLUhZSAEfVcrgVdt",
  "key26": "4oCqJdVWmQQwcMmzFhq9UUEhFrgWA6ruxg1DiZWQzvnFDrDkJfnypGdUHauu3Jhp4Ep6noRhmUEcsHcRRm6BEYWf",
  "key27": "3J9XFoKu9kx3iQWEcE2G7tTS1tmRvQSMKe7TeWDKPD8skZ82ir9YpPbDyYxLAA5kqdKQ1dfKhLyAiKyoRphmE1cv",
  "key28": "5RLnT1qN7dRA94NKaW4mjwGoUG7GQC5gJs2Bff92YPLeyccAt23FrtRmifUpi5YAmxr7qyAGVprHLCbWWnmeGKZW",
  "key29": "5mzn2PnDtxTKutjjxXKswLCRWxjVg2f1n2MKQCzrBtPa57gVFkjJ3U9i92SDehfRQjRVBubcw6F3TiGnMfvurBTa",
  "key30": "EkmSbuJF26WBPKXq4iEzvLYttDfHnE94Lh4yY2Wd9Gs9SDaSzUVSxsKhzmdLg1paGSvnVa9C9dBKN2RWpQvudDD"
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
