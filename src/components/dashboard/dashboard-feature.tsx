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
    "3FtG8K6NdZL44sRq5Zk9hnryVJFVnQDmhMCZDzTFNWPDYsYmvwwxgDiCThSGES19vtQaYgr7488RVUFtBmZ2GfG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ki4QfhJygrq762GygLGDUKPndF9Q138aZ9324KqT8sBcmVgULEWCGtKhcxLqQY4pVZCz281BpyhE9VRXFid3Cy3",
  "key1": "5653AgfLhtQ9bmkA2P4PcPuagWHUm1NexuZh4SuUzjLfRKh6Zco7svBMZv3GN5chHDaabpxLeZHZKEn1PfMKeJso",
  "key2": "5ShpDtCj8TEfPmnWoJD52aWzN5FSBu5Vo8wuy3ZTP6g7v5dxUZe1Nciqzd8cKcHxEHCPZhCDHH6RXM57yagUjkYH",
  "key3": "2GMQ8D82iwHLZkn84PnZZpeknx6Pxrbqm4DBvPA3q2XH8C6SP1fRqjrzZybvipzo57uaiXEfWzv11UkKjFPnDm7e",
  "key4": "4CAayFWGJjxM3aTsxUfPedCfz7r9yGYCpqhJkL8yFycJNAGEHssetQsfE2zzaMZgKMCUxsF46p4eMEvRVhwUzhsN",
  "key5": "5gxMLWsH7jddwbtYR8T4jGd9sfRFBwNJEWFhMgeJNcSq3QzyQPhEKjnuY3YgH32mduCAQKuZMmVrnsKeLLbbFX2x",
  "key6": "4855xeox8iiRKXp2GZsuiRRFcQmRL2gcscA3P2yNZBfswHTbuhd935wEwfzf4MwfrYoQbHpgpGGWGYe5juU8MPmp",
  "key7": "VHzrrx3SdoFzfqKeQaK9GZfiaLmUV3F5LKJVUmwsJP2Xn3o9cz5WcKkUS6LUuBXWRs3XqHYVtNtzMKGwkreEwmu",
  "key8": "24xdmwgbbSLqy2rk26aYVNEy2fh7akHMu53HA9UcrMAtQympashfBWWGMQ9wFZJobE6zEnHKV9zDRHG6szsKB2C6",
  "key9": "ZKrELsCVw2P9kHzT6FUsyXzJzd59piPHTM3YKc8gFrfBgzbkpsmNLgHVKqNzTvCxmWwbNr4fF7qKC92SgQhRyRX",
  "key10": "2EyNGCnsFQvC9BvYXXvjgi3wsb1Ta5kpw3uvMyHefNmPpLYazs9tBshrwJkqm4onuCz1F8KxWZ5duesSNm6CXPmh",
  "key11": "5hdFJbAgD3khEs8Goszb3Hbp6CjEXeXJFRjfGJLFnX6M9P33hCk3rhLByTj4Yh57oCJK14KNcvBHmassyznDoDJy",
  "key12": "42EBHte4LvWojB2ANB6kr1r79XpMWzNX6cfaASHKACTF1bMe1nbPdQ8LjPsTiWsAVoQmGkAiYEeTTJt1h3W6cMhZ",
  "key13": "rK3L68r4JuUGVs84dCx75LB3YfcSPirQRae437TFi81T78VzAzokL7AnAvxet9Ag8xecoFaYqFbDr6xJoaPJcVQ",
  "key14": "WNApXUZTLF2L5HJHWooTDsRd3zz7B1Sk2f4jk7ZDpchnzbhoc1ENu6RMUXPwsSS7kUyEaTkPCVViZT1BHF4HEdr",
  "key15": "2dzRhgZ2mmPzw8iEMg2hrDgjKKTUevpnfXhdowDAqHBDPt65aCDHfnJyLkbpKU9aKLzBqPSA17nCLv5AyeDvUp8J",
  "key16": "2MLCGNntD6Q9kZvuTGkuGrP6RtKMHWWzAQjYSDZRjSs1HkxP3bxWv23Cocp1nzXq8zKzeMdJcWpcrFs44EpAodzi",
  "key17": "4qN5eEiqKm1ddBmqn5xgxHcp6UF3emLarbxaf9T6sknLDkKsGASbvyexXMdxEsRLchrER6XVi46W9v1Fvg2SMh57",
  "key18": "42QtfTfkpA4pTt9baxtzwq62U2HBnjXyw2tyxz6gJn6BHoBoBg1y1Tc3PvwgTYa1UVsYV5pKVW9wSVM29HbXA9KM",
  "key19": "2SHstw9MiQ8RjSqmPdkb3iHFkBifvcDEJphykQAjWfWc2bRtDr8x1sK9m6SsMBC94MxPPxUfcPFbrvtNBh9SPP2u",
  "key20": "3mRMecS4crixQkc2pCqkaJnFgupkJnXYuh9KCFYJF7d1DRjoiA4DRgAvSE7ekLrzRA6BEo2hMj5vGr7kGTte4atE",
  "key21": "4aVggNJ5U7iSSuTMi1EKsyG7XaDjwpHszeb6cCy3RQHfQUpQvkeMqU17HceHqGNUnfoZ89tofyrKSZDKm45nXZVj",
  "key22": "5QcXERtZ9kjwhur4SwnsH2724yp2CywwvVsgtK54S4FV8VMP3Nczuk3skeYFkRrx6p1y6yVFdZAnLCgV8EL8pPDf",
  "key23": "5gP9d2eJnQBGS9LvHGDkVtF53FaKKuvfKjSk6ojAdUu61SsrEQpD6CzkvVP715Goce88WwAB4keZzVwQmaCx3Ej8",
  "key24": "3NvPgnF4zM6UwcxWvA7wBFr9mMS5sjFSTw93LGotXVdf9uMECmAAdwVESpoLUoerhSWuF34EM3AAf3RWKvoPsQSp",
  "key25": "3JZwG1RPDAd6yg9qLhFAo8UUhGxiYn81WDiZcyHTg7UVURim5panXKGDpJQeLNYGNuMFVqVR7pQzGcmRTMhNgo2J",
  "key26": "3nrRKEXdQFpQiW4wfxdamdv4wMKFs8MUebnA9dcGqD85KKNEavWkXCEoexaXTBx5ij77f5JcP6qRYvg2KJZgPEmx",
  "key27": "SaDVCEKY5YHjY65UAbQ3kpAWuwmEMMN1QTGGafX4ggDXBqs35rkD4pHnURPBSThZ8ucpneD1kfKyYGw2158co1a"
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
