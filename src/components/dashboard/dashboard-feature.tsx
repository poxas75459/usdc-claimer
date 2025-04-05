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
    "bmqP6vXd68xCqczrgGCpn3WF29QM1g6K76MFzhbk1YirLCAvcM1N9KPKXhepLF62k44TAQQMeVNuu46aZ5r4Cyt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zSR556Z8TkLdZicEqUtvJkKXw6iYNCnCMSWTx5VRYBGPApUyNNr724v4GWoWXAc5Y4LL3YpfubYwy5yqQ2bVwAM",
  "key1": "3PcgXmdsCrRreFPVzqxLXAVLk1CNHdFcorWF76oYAimiZnDyodDGqwr3F2PnfuJsuRAh5QXGvJ2haDbjZiT2Rj5f",
  "key2": "588etfczbwpVSey7GJgqSCnketFN7oGRCU4UXUrw5527N5LjLtUHZcNhqpVQiv4UP8rVWuveXV7XNBtE9bQAPJgT",
  "key3": "38bp6dWW1AqzLie6uvfvgFHC2JkZinkaCrvudP5YFq77tQwMwuRaQkmYhstjHTFpaNFQYmbHy37uSQ7tWc83X6jQ",
  "key4": "hm6Gx3hszGjjFw97PWFa8vEuWBBC22vzE6QSZKcBQAnLqXGGSFuKTgsXxPWD1mvhszxYHtDeBq9wxMqGDWpZHkX",
  "key5": "22kHggFFSCZvpUQPGVseYovRgZ7K1upNTTR7NhpmASZeLVe9b9Mk6xHyqQd6mzjxFoKvzis3tPe9suL5VABf2LsK",
  "key6": "28AsgBpYWhGAUwBYRwNbPbfuYfULLSdhS66ATRRM4QEoMTWz1S4Gb2aTMGdzoB43MeUFt56Vj9ZvWeAe1C49VnQo",
  "key7": "3AgeEQpvpCmuEiHZicJK1tKFBrfNJzcsKm8uBUK75c9xs9AQJE8p5wYrDpN4qAqVWqJQTzB6K6y6FD2senNQ3xip",
  "key8": "mbACY1bBM8AUw2DEpjAZKsi6G7JbqpVFnWegdy62bwGanpy2htrPKjuw2to88CwZgos4UjpK14bp7wxP5YDrth6",
  "key9": "2Tx8cf4kkyztxffbfzMmJyMHCYrX5BSC1M9zZ4a9Qtd8V7qmVenSK4PvvQbWqpg8wiBf6oLTaodUApxv7xfGx7QM",
  "key10": "Cjy89m7tnQQm3T6WMRJFTBy751JcyFuBt24zRZGCRPYmVo2DCbijuYHjmzZZD28gxg8Phxst5mEx8berA6QFd3E",
  "key11": "3Jk1F5Y3Etx7kzgZKewEMGvtWtvx8bLz9egBgMXWWVBTJqSXGFoGNPtz19KVFdzJhhTjzb2Bjd45cSXq9sbs6H3h",
  "key12": "4D2Kde5mQLjGBSYSYyVWhtiJxYUf8bouBMfciLEYncKhPD36ethiUQrfQ56BArwfe6tVB7MvNbiHbPcaxxAMgswU",
  "key13": "2f4GgyRQMvaE7Hce7xh2yd5SVULpY7sMDpbmQxmDsBxL8MMC11AnMQ5WYXYHGasC4ohutvMH13Tsuqpt4CMrtDDo",
  "key14": "2PMdG4mosGBu6m3SgWApv19wVYqzvmkxvf7SsJ44HCe7sZeCvpgW7SU9D2HkKurYW33bej1Lo7ggezXEaeFWLgfP",
  "key15": "4AobNoMXf3CZ8g2vQVmHgwQM816sT81YSjsB5hjnJAtrkEs5xsJ1scs2duQJqRsfzDTURPZx6ugWFw2j3A9usWaW",
  "key16": "4aobSXbS19BDWm2RLcSeznwgLkSqbcKKDepfU354zFS4WABfbEiCBqYGRrid3broy3F17dcj2LcPh24c8oARWyBK",
  "key17": "2NDrUmoxYdGXo7mqfm8SCBRRqU7SvYDC1kPJP1jmXcFUrz7kP66w1KRH1biNSGYC7pH3YWxJEDDYiHLS8RoK2mqB",
  "key18": "4rEFbQ63NTMtgv6yoZTh61Q3vc7EnqATNpEeQX82wXrWwgAv2vPkbcsJV91ViJguesB8aUDm7PYfAbFvq378aeRC",
  "key19": "uXj6CK33pcccWCSoazSPVMNqYFGdpwemiWkQfUEuTeHoGhny2opCwQmFvnuQ7gvncGP8xBeojCuqdM71Lc2kKxm",
  "key20": "3g3jUPWw9CB56U7cdUU2BPcnS6aEyzt19xFygQjkC1S4RvzLTL442bFgP3GZE4MMAcQbX2FHppRt84xJWjAXo2Zv",
  "key21": "2m3tVWYEksnp719hjzu4nGQDcXn6pZrNd1KbP3QvYoifM4qLFRxoLxaPQzYV9amkkQYowWvhGqxm2d5HgEcAMiwE",
  "key22": "65hyKwc88x9ifNc2pVhUQkSAKxgkP7PjqccGhdrjfjQgdc8NJRov94dFNZsbVpzmtZVcoY5KRdqtcTMRRmXfDVZW",
  "key23": "b2AVZLu33jZkcWkqQUwEkcXbaR97qh6aYPYQCn1fNhLERzS8HJRWPb8tZDpzFXSkrMPWHxHg8CDZ9v8dLbwfgxK",
  "key24": "5Vjfhwbhm4kmbP3CAq3vWimSo7rGSskbDqyU2CmGuAj3uWnzVh4iv2WrA8Nfiy5RsyCxMNLLahaLWqeezR99tnLs",
  "key25": "379cC74MUGQ5Nfa6ct4JtZVVshKjgy9fEfDmUwJh1aMEHS2k9TGVZsza4T1YpimX6n8VzQHhSznRc9D2dHEU9N3Y",
  "key26": "3EvQqXEbq7DcicAfZgEyN3ej9mnDKuRytyv1w1YoQ4f7E6ryM6TqComUNR9QRSaGSUHpG7s7taArWxuLiCJ3inMV",
  "key27": "4hggHznhkrtXMkGJGQXCA273rPQ3MnDpnk9KBnUJfsPkPziaTvdkDSivEq2Vnw123hsgSgfDTs7oBRcbm9Qb2xVV",
  "key28": "HCuGQZNQAW5j5icySoDhDVT2z8dcwDzQGCU8jLw4JsPag7f3K149Uw76p7RdLvEqE1v3Q85CcX3JLnKDLBJZmyt",
  "key29": "3Vx3BL4mAAhzyhQnQsNW3qyQ2rSB4LA6VXuEv9bcygWotk5VWPYYjgdVZSMshjyyWtJgz9diZL5MofJz6qqsXhYK",
  "key30": "9v5rfeLBxQF6umdQe5g5HoDdkcco2sWLopfDXtpAuMv5shT5xwhYGS89Wk3rSPYjCPoRszmYkShGteRfrsQH67x",
  "key31": "3FCse3MWxiTTU9KaDxg9AycssVx9QJa2wnzqwv1AEACM5hrpV7LNx9H7vvMyasdhtPyRc2ukn68uoZK6m216LG6P",
  "key32": "4wFvbyprcwai4GyvtPWtQE8L2H67PbBaijbTSsyEXKR8oxRaVhhFts5SB258iHjqFuNNXToerupxPh51mRb1S4aX",
  "key33": "4DBdRKaJWM5E5cVNf7iQfavpHwGSxtQrb65dt7mjvba9FMr8RbsmBWTWpgQnfVr4u4CNd6yvncwWAeT1bYi2UdjT",
  "key34": "4FXUJ6p63nrDFdGt71UGcmkBjX9qzExh2E3keQhWFdvtPZ9Q538jj3DVhkvxov3nQ8ZSYqX4NSMRdLNRHKdxzWsd"
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
