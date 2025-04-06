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
    "3kb9o7ANc77hibSXrfu2JyNERa34soMckyZdGXSZ9E1qhyUu2rB6Q7XboYA9urU42EXnL9MaaHyik1TbD2zF4wzB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52zBUYDo8CeZq5cqTv45NqkREcsdREUY9iSArxpq6hMKrmtmhUXqhFmiXx2jeuvNud7MBmVjrEHdfM2igcU3H8Ma",
  "key1": "4r66E21tNAvBJmXFqGfDeLpwHhNUVvCNNm5RBneUzsAbx5sBzJwpzfULKpCeiyr17v9wr9ic2AicDjSRWiDsDMdo",
  "key2": "3Ybep4GTWgxcJgt3S2xNeX6Lb9jdx2DsfVEcJGsR37wPoG66xhCincuYgJ8iRSVXxtLA2w5QwuAivDU2QAU4Tu76",
  "key3": "4Hs12NQwZoqizaU6WnBfYPhJsHUACzcJvWdPPLuNyocDyHp2VPu5s4FnqdgxNSgR7XWbC2i1fDotMf2zcqZTwG8T",
  "key4": "tL4VEdKjXLMXXzC9ZtD88bTpyek1FmfJFAZSBiXezhRJJPB9ew9G4A1CgFP9McdZyx4vgZxyh6EFBMwuS3fiUSF",
  "key5": "292vHxfGAmBbRrxzjq6Li4WtSeZy9FzwCdiPEPezG1gw2BNkycwDzU8SVHdCfj62mq7qAatKqmN8xajhGSNqdhb2",
  "key6": "2UqbMtLES8cfcK35cPyseeSoMF1WBEXL6MVAPpWGVW1zyy1eXsYGW4AYdjxF95rkzQqgPZ9qyWkiLTkb4Sfmm5Yh",
  "key7": "Q3o1fLKPapTfabZMVD4tRxvxnCbinaApuZcpkEnfC2tZsXvZatf4B4ZMwuyXYMHssL9WPoRXn4yiEgzgYZc7BGx",
  "key8": "4jmLNxNGLt4WEMdXwDWG1GWFdUq9KorMrXrE3YK6pgmVHdriLs1MYQTuHvcRNkSnZ2LCxEAdsQGqwdMVdNaSdNKo",
  "key9": "5mFvruHdnBTArtXyWfgdszabMfK6W916SmxHbFD9VirjV93eVNhyMGBuYsKBoB6cNp9DCBm3jmQ87QtyzWgAy9e7",
  "key10": "5YMjm4BQMuS6jqxKWEvuuuQvsnih2BpA4ANEbWmY5CB6k2CLdyHf5bSL4RQWqjfuNSZdcm7S8dZfeNALpj92XsVr",
  "key11": "2eF4mvf1nmFPLi3fyre6hpVd6LCVrB4ykJJko5ehetwUmkyenjL8BVrCieN9t5nqn3N4JQbWJ6E9Lzg8ouf47CWX",
  "key12": "AqhAKY5HMkEvzQ4QaV9zxbrDFfofMfkvtCMuKSjMqmPNeYa3TEU82jKJcCTi9tPBCcybN2JL28Jp93mzLofQqPA",
  "key13": "WgAy4R1L2T7rAWG15ViLLQzGnTnVEGg6nGSk6wkZqsMwoA4aw4ZNFQXSppJej92RiUjiuqUkebfHm8vLaisZ5Yz",
  "key14": "2Rs5p8KN2Ggia8GgHkzaw6Fbt8nBRuzKFm15Ng7hqB9BiSZmuzNxafhEbM2oys2nXCE6QhBiStkMtCfCCwhUQZEp",
  "key15": "53nLnX2q4xsVFSBepR9ST616jJfsiTBHvZnsRGn8ptf7uy4bi1gdtCA47zj3wTKRXP8uFCMUJZiaEHyC4qmB6py3",
  "key16": "3EooV17nharj6ARSeNh9KZCe2xA6Nt6sbDP3WwQctQSDA7AUV7mUx9SKZHDYek2CK8GHkSdokPM5hVT2UQBYAyzs",
  "key17": "5yev76a11bQo6KxgQoC3RuPnJjm1hM2jk5a44Mcp3CZuUoGLc5vtnnmHNHHnSQvYRtG2NnMSet3CoYE3yfhahxeu",
  "key18": "2pA1qhx3CPgugwkySJU55apMHgY8nSCRuDiQbUUYV1dqpFksk7AhERYje6A8yoBMWHW47Tq1b25q6Fgwt2T7uF63",
  "key19": "DfioqPpz7hya3dwJ6Er7MW2W4zCBrwAdA7KQuJ85mS9VbTNS1riGgwixnkAiQFosxYSUoCw7aPo53L1bcmh4i6V",
  "key20": "2hTkk5ydqZDAxWdjr31ePppBCyGBqhjxVcuRSrwJY94PfyAbP1necQQZy7gifswmMgySEqprC21aWi781z3yW4Ys",
  "key21": "23NWY1SmbDyVMUmxB7xJUbLgDWYL3rNGjwy5ts2VGKyRihJtdyi1b9AeBFGDcQfY2GVAfm8hXwsCH5V4XFTUd7sR",
  "key22": "Mo2Rdm1yr8rVcpKShBwf3sYEYdibYhiTxAVzXqDf9gkUatEhUf3UyCqzRXzxuLneowwRwGLYgzVfMi9hEBGHWtj",
  "key23": "5pxdXY4MqVcBwRhKswPC2GXSgWoKQSJLfDo6Ryy3NC8soUgVqKndCiecGRzR85F7A3ew9RiAHucxfi15sjz4jbFJ",
  "key24": "iF1pYaJPJvgDYG3dTnC9negJNc3XdeUq5SmHP985QapZN9PCCaMUC3BE61QgMvE4embX27GckrfvbuoCgBYqh6F",
  "key25": "36SUQCRTagkry3ur3NWEZGa5ybJu9VN1Aa4pYa78BornS79vz2T9cNUK19hMig9wu6ozFAGhDx7rpg4rKHufdsFc",
  "key26": "5CoCAuXASGGkLLuQEwBPHbh3scvrYfUwVGkvdPsDz826V2CpeLdEUkyPkTataw3d2S8nPTf2r4RkjZ2eRnxDiDo8",
  "key27": "3NBt5VPajRCeUFrntEeUTgSKmnLF2o55urX6neuzjePadeMjtvtfAdCgz5JFSxcVdVTePeRs6du74iX2aGeireYs",
  "key28": "55wu2rEfFFHFKAeDCT5VJX4QgbzHEezs2xqerPAbJaD5HaPvGYfY9425iQRkiUYiN1y5ndLfftRPucoJHHCQVN7k"
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
