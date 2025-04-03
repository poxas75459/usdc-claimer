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
    "63bEEYtDBwHEezRNpQAJgb3pZuXd7QBtWeDsUJ6gfoFVcm4zEs3dEJbKQRqDruN12fNcyjdWC1XegHaYPPMi1b9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s9dExw7wVxCnVJ97WkwkQ8MDpFCbCvvX7dtNnhv82Sr7h2UWprsDVDWAdzLNHosPKAJaj79jHUEgNztWExYSx51",
  "key1": "4wy5XTZtN1LL4gv2ugRkpEt9qoUyZbsYvjngptEvwZY3rEmLqdAcYJ3iVfT3u7a8yVUSJsgMjyb7SeGvvBUkqTkn",
  "key2": "2TbLFy14BJSpiJTP83ykFKyo7CcWv5Qpz1yRHgU58VR38on2pEEUH4S5RFP2pHt6jo7t4CBYHzHHW39fNMgJ9aCJ",
  "key3": "3EhrEHfVmjwNugNMQwZjK1XBGeKzz6H1yJrfDQWCNKCgwVvp74jAPQG9D4oTH5wjmpgXfmGFEk1C7DSnuPLUKtP2",
  "key4": "4aVJ1PymYxhrzrzaVCFf8Rw54Y6DybrLb5jUA8RyxuAq7rE1bfB9VY9d7CLni139gzp9VSMdqAg2rq1r9s89xAbW",
  "key5": "5nZRtV2BjZMqLv8t5y26KeJszskqjV5821Cqa7XN6XACpj7tmg4DCWRHtW898c2z2C2kakrmnZDGAusp8jgavmNS",
  "key6": "5EZARfuwc2vXBiitQSSFahGxv2kKUReKAbpvJCmRVK46WU5k2BpCuFH9pjcDVHeWuvtocXAqaqmyVphEZHGN7PZS",
  "key7": "37s6pxWwx5rwWhiXeNDJ4a3CiTY3v4TkPrLMag3QFsomxxcGfhkbYfRm3fUi1d4BfE82yeEaFe3uH8CbE4mhcR4C",
  "key8": "2o1GA6CuT8G7eeqkXn3fLDaU3BJM9mENm997r3KsqZ78Xy6pGk2yhefj1mCFstZ1mxxQBbdVTqwK1C3BVemGhGoP",
  "key9": "4C2c7NdHMvPZmyqk4ZhPvF1veZmw3Ho9QzKPVAzwWwgTb4aARgoi3S4hw3wqj8udtV1JDLENhsL8seJeqpvesBsN",
  "key10": "2gTt14nBJMDtxkPK4zdoeSY9uciTYRrr8wXYr36mdenYLtA8syWUYPnVKBsFJiqqpFLi5AF44ybNwhiHeEu2K8F9",
  "key11": "4YWGUsY1zCyhgASDxt3M9Y45mDff1VC2N3xYVoES5qQH426WuYSfvbeaAfhUimP16FxPCAdQgGZep2eg1iwGujZg",
  "key12": "5MCSAq8wx3CYcr3XN9EdmADHDgjbE2GkArt1bcEFzk177hw95eWHbtibXMgBJJQuNRpzdTMaRLKje5wCtuZx6oDX",
  "key13": "5jaTtRdfmnMMes29CopNFy86vz5WoGGztLku2k7rGwBePpik5R17T4T615xiV5N8Xv4S7L9HLAk6uQGNwg275W2r",
  "key14": "5ocW1pz1dyjngaNVJVBadG8y8NuSzdB8o8YN4z9eMXpqp2bYEAXGMdPYiRYerM5q9hoSvtViLXMxapgU4ZSHDEC5",
  "key15": "52y9W2TFoxPoqk7dW7SqPj3GDuGUUoLQvMyRkHSYEu3N9whBHVHU4s4xszZ3kbELzLUxWvBck5gw1fLh2VQDatSx",
  "key16": "J87Gb7dy83e3ZNTV3yAQcVZzsk6MWkxK7SSMYyZEoNZH9CoGSxnC3itry8zPE5wGVkS9RUFaRr5btzYW2BpuG1H",
  "key17": "5mcnoWbEfXuzFNA8o2Fh5W1CLFotuPGeAdxq4ZHrwneWqdkbEfZNV2fquWLFVBduzU6md27hn1BAbxpaMfYoTRNr",
  "key18": "2UmrFJU6d1qErMXABdgj3qnpC6wJtLvJFFDYKnnfm8VX4uaa3tD9KvD2FRzMraCZBztsdsTu9sLyFrz5eB3ZTBWc",
  "key19": "3vQVQR87SCapj8uwUPMZnNKi8CCetNXZXQUetzzk8RCKLCgp5GTNGX23hnJawNiRSrnZk2wgWGipqaov1WeNYsss",
  "key20": "9xwdmVRYPU5Y671mgVi3zuKkaJUdrn87TuPQKcBWYgxCFLs28WstiAdtced8iPjwCMxk2j7an828AzxrwK7sSs3",
  "key21": "47kBxCFhay3SSdGhT3Y9upHm7ggT4mEGyUrpVGyc1gqVRcwRYQwVCw1k8n51BJ1tdGkkmUym2b9GZubcCXzX7rB3",
  "key22": "4E2yne5asBMU1RGfdHdN9uKBaei59rsw7YRVyEWU1WZ6TfmCFXMVQupjwky3kwVDh9m428LFXtP2ZFL5LcTtwoPX",
  "key23": "3zqo8nRhEENXzzkJ11TqXo9PXhSK2Pb5FEv2521JMHXsNxrhTDm6kwzQzzRWjtExrBHi8UwHTgDUquSq8PANFpqB",
  "key24": "25GX83Joqc3NfTV1VCbcUZoJCkRuzUAVfaJo2PTVQ2M56kKi2PtwqXWuRvoerRU2h8k4BdhZVfYyUUii6t4qs6jK",
  "key25": "2KVLDpZwjRBjrgFx9a2DevD8Nr8KGoinZW2kiFPTLhzenkFJhXmE9j3LmQvNyY6HLr8VraXfxmfzBjX8JiDeJNDk",
  "key26": "2gKNkKkQ1nmXQrQr3wowzE3R8fDQk3JShLdbdPaHDTME9ZyghMVLwuHwfzb5hbMZvhbfu1XvHTt7M8fYn7fvh3GU",
  "key27": "4b73GCZu431Gtnq69oKeLhJCA5qVb2s5VzPEQVkkYG2UNXQ8yDrj46FwpTZm6pKBfRuGvzv4Wt9QZNkSnqxxZUTp",
  "key28": "2sEYf8D5v8zeSmecXxM218YnubxCu7B76L2F569sJfzyKo4EFrehq3j5b7VMwdub9vTGVWkcwjDN7NFibC63Apst",
  "key29": "4qLXX9LXRmqHYcWP52XEMwznjNJERp3VziMd7a2mmEfevMwm6qU7aGy2x2mLt3k4QzHTxWgJC9qbkLUtHgZVJqno",
  "key30": "3ummTyVV1ekk1JWg3ViduL6u6cZkC6RGUQxgctjCm99jsGWgJm2vCyWmZ7AFZMmGezXyiUPrgWmt9qDN3JgeAUX6",
  "key31": "4sBn3mJQTSLUHRTMrakoiuaWkGkWFTGmLQtwvUMdmtRZ9cQtMerhptbBZAFVqpFrybNgX5qMD5hC12N5bcDcQmJn",
  "key32": "4LGYeRzSWCU2dWESWYtR9oHktJXr3yJjDub4gsitAYn8cCETKUr66jwdWT2iSKf9Ey1cs8xMoPASJwB7j67Qwc53",
  "key33": "3v5krakP2ZnTeRcaZBCfkNF33FGB5tKZALBGX3aVhDxTntCoeoUQBZa47vAfVQg6KidCE18vX9tP1K2kVjggkLyQ",
  "key34": "aWvzHFUTJiDNREEBoWPd5TQGZcuHZXG73BzuzvmzzoP7nbaPTXQPfaouad6kn8kDmtCeBmMqujYR8UizMr8wkGJ",
  "key35": "4kHRhLwwecpFur7Px9ha9GtNGVN5WVSY3rctCEUETDzhLwUDkQMZQTQWbnCjVmF53Xmp1iVErkDZD8N1Lwmh86eo",
  "key36": "m2yM4rYRXTkoj9ghkNgn948ZKwF5NnkVgpJ6ysSzXi1UEt9Ugj4mSs3dEX7teUqLCck4M4MaPZSymfLvfVHuCse",
  "key37": "4zhs15byZgX9n9TqyudWeJ1euKA6cVGYMiHFnTbZBFtaccgGk2pTNU7JfsEFKwgebtGHp3rDQXRVNE4fpjThuhS8",
  "key38": "2PyYYanhqNeLfRRt5Hwrgh4syYkjvvETuP97a8iFTUWiHgbpxXv6dguMNdiumsjgRMByHTjipW2dbgpAS8wNVSt",
  "key39": "EKHyNR9Z3jwqZ8cj8Yjr2VkHqEvAk4vejXidpZ1zS7Fd7PbQ8XYsRCUwazHVTedEZdN69pHSqTnstf2HWBx4G5s",
  "key40": "q7mL2LrGZzLAC5RDjv1B4b2wRGTnEjEJjchdWR5R3v6KPU1o9RDUibWM5WLnpE2e9qJpM328ayn6uaFDDXvUuRD",
  "key41": "2hmdqf8eoykRuQbZaqCy4kCUgH91pbaxB64Dop4Tz1zwXjUTsMJfBTGjLbmi42xSZZeuYYe9rzqPW2fRYnyg96dM",
  "key42": "39wAcqFJLsPdaisqF4nbg44yEJdSVBDLcXn22RqbwtFfMkEgdUp53m2i51fyrz23ivfp3chS6WyvwukmifFUimbE"
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
