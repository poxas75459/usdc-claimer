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
    "34vFCjKZhsgyfCUC2MrEQtTHi3NRdMNiN5HAp3cTqzgBoFcxAH5XWxfkeABSSEprevmgtxecqH3tEiX8CVYurH67"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q75nbwmGZPGd22C3JBSW2969CnUYWrjVv96oybkupSveFrzS6jUgutYrx3VYeJQBeqJb2CrX9cFh1t8NBzgywUo",
  "key1": "5F5GbosFbsvQWoUnfc7UcotMyPz8TXPCDYpBFzHeD23G2aaMro3RG1XARXKMKtGLU2asyqUkzagctyF7vP2n4pvd",
  "key2": "Mrx5b4TU1zKBya8K7nA6FB2MsUWrbMGZqocTYU9ESPfuJy7MHNweA1cEHHKR4k9odirQrAPfPXeshvCvvFZ21iK",
  "key3": "4U8NQJX6Bf9ZCJNte8zHjvGJBwZrRr7MgYMzbpnggKL9H91CMZu9MVAFxjiCoizP5pa8pMGL4jyChSkLUthu5God",
  "key4": "2b3TF5pXFZkc4H2eDtbQdGRmWaXR7Ng62AATHkFduWMFEym73a5fce9hpc6ABtkZdtMHAAwhMTWTGbzxxVCCbfAN",
  "key5": "3JYEbz8oHJuR7HTvmTuQ5ZbRmY54qYni7bqaxK7AgGSDHLJm66hi3jfzSSk9E63fpZH9iWPJQZD4FtnXAZtGbMmF",
  "key6": "3b6WXt3wQTSzesCXaSmJu7c6xmhSkBix4SyAY4iaYnYh55nZ2ih4zK2sRZJtwVCcYktYMDaJcwGRdwgEB4LQFaXQ",
  "key7": "2nitZyWAcnxcFcu7KadAbvxATfmd1DyZNcDEq9Mc7FQS95CMeTF4yXUTdtDMQqzTWm4CeYejTrPC1PoWMXh4nput",
  "key8": "4FN6AFSj14Y6gKfw1umW9DETS4s7S72nM6awb4EEyxg9r1HXxsN77WnRN6YmNW8gDVYWGDcQ53SViw3Cs1p2K9jS",
  "key9": "PYtiQ3koA68iSkBmNVvNYBhrciLc4nruzdTRG9Hzt4BeNCFoqKQkXLb8fCWMgtyXeADKDj1TWxX4CWk1KnuZTKj",
  "key10": "5GRGAQu8DC4D618YkwxfXtrKD2S5jmSRQEyJCMbHXm8rXJUyUTAcxM9p7wWtx4TF1Mw7WE1ULVdBt1KRdeBsbooS",
  "key11": "58qXMFWc39kr3XnByG4Ff1viR91f9tYSwNLeVTBLqJYWSBHKC7XSjcPCNmfDwUpV5oBDLanTBSwxGqfhf6eAsNkg",
  "key12": "UVJMxKuG7w748HQkYPAe9Lu8vHM2dXUbzdcKxcFFN9S9VdW4moSNdvRfr47dkkaM4yAMBnkq88xyAYxikFpz2Jv",
  "key13": "oj7vHdQ4RkiZyUxv2e9aURUZZCET2PeCHxhacSbtq58WSov24r6szpvUd5JuxVwKejrc3ncWXAMDexvzYzr1xKU",
  "key14": "3oJ2y2E1426QfvTMUKNuPCx3BTqx6WNpnsv638T9JqSzf2hkYLARoY5aa7oqwUzxx4PRq4QpkaKcVt9k2ACfwpEy",
  "key15": "2rwufuS8ZcknJgfAjS4JV37Q5AwWG1hdrqwi5zEPoXcUhrb8WBY2kMcjppTA5m3Ni7RewAyaXWrgLuv1bnQ6VMCy",
  "key16": "53fKRkTMEP8zALtiK5beAdVPrD1Z6zhwWrAoTGff1LNusdy5ZSt5S9UB236XBSfgbLiRMzmCCD1ew2FYZfkXLq2U",
  "key17": "SWTDFtLC9gVTRjbPCTRnWxtEydw19Vgih4UvmEg7wygchkMaQYozuET2tcLcHcAn8NkGgLg1zZAgj2Ts36Xu3fD",
  "key18": "bRwjtm4pFK4ztQbDLq6PTs3gsETfjFpnWxQ24Pw1iL3WQ6CPvhCBWCq3vYnXzZ1GPozgc4k1KuriqMQ3S9UcUma",
  "key19": "3Di44K2DrcwRxBjPfVN6LzfXVxBMvA1YgztvaZ7PcbGVJifvGxS89KvZiu3DGQ3ZVjeyPXccBfj32NzrJzKZUhuG",
  "key20": "4s6zaGAL76iVnWFnFsBnRjuVDZp9REkWUx7yQgEub6sDqD2smPABWmUKFnbg3u5vhb5dHuCd7pHsPS457FKCR8tm",
  "key21": "hckm5WcUPh2u3nMDvEuzA24piLSD2h8HinECUfJ4XWrpMzB5NEhJmAggZQuBH5939VkoBKroHoGCPDzUyx5GWKB",
  "key22": "24eXNxmbwNR7cXw4jDFDvzHknNoyTu5BrzXwbcQMaQTZYsrVrSXHRK4H27FAunoaspRr6oAoQqiNVPqECM44ZnZv",
  "key23": "Q8tZsV99TwK8aEeNHUGBQ5fFuMQdnAPZBFomBvi3kuAQHLbT8JHCyxjERDpNUMRtwMrLRP5ECQKesUfA3s3Tu2x",
  "key24": "5H9oESAaKudpVqeoHNm4CyWf7AFpWRkdKTFVwbCk7x7gWc8qqCAoPVWRm6dfMxfFveXwhimsot1at6BPxuZBHRSm",
  "key25": "4YmTqsvpu2W8dukNjHKQopqQhq1f6kYyriradLuXXeMnx6W1WQD2VGB6YkhR5omt12bJpWwQuhBZbS9K45ko8sGm",
  "key26": "4jqRwfmZe82CHfqvN1biWbFMSPmDSWU2FJzhkb7C5C9H3U5U8qgqfLR9XD8zAE6RqmazGKRbuXauiqz2fL7DJtMH",
  "key27": "4YP18844xvm9c2LEc9EUmBycRhd4KFUtm7owBKPPp1LyvHqBxymTw1zeTbF2SNhfGxeDHsv2gArTjCRBESA9AgsL",
  "key28": "DhG29Tp9GRQkhu82XLa58N6b5mkEALV85PSrQWqGmnNpnMKLUrc7UgSM9MRpPJh2NivXEHA4PBJZXHirRqGhm7S",
  "key29": "1iT4XEYVURHDEot6uJkpLu9WGVbUfGNhPkWsakrJnaShhAEbSoTcEAb17oNxKtG9kPyVEDiPC7DRFSP17mguW75",
  "key30": "2JV4k1sj4mSkjGVnLdCTcB2BuQRnrDu5KfbUMhifa8cffCNpdRwm7iKUrj7FL1greqbvVM6MwFAEGd93EtRwzNyD",
  "key31": "5qYpyjCfyqGrV5gnWPCr2fqeAaxZvy7BDXVy4pjZgvobPaDvW37JTMDUbhjRTB3ZVpGuXPiWXapk6sSawnehT4DH",
  "key32": "36bsMYGx62rjrcLdzMda28vdnXNUPMNQmeHNxdAD4Ah2TPvhW7JqduX7jNvdv5JZcTim39WCkjgcbV1bN5t3RMRf",
  "key33": "56Yc5ZDSmUcHkDUT9BqfYQqT8hfWMey8kow8MVBrstYqaiFDpK6aMxbj24gynRp2YGFhUZQg4jmzTuG9zguHhAKx",
  "key34": "2ShBFhBZNA5ipwnHeDhqLXf6j9z7K7gZtv3eXnzAcbNBMMJ4x2jaEuVsNbvvU4FrN4L5yTYL9dy1N9qZ5T5Fd7qR",
  "key35": "2qGmqaQp3b37QrxoBFvCQniuYpNVw9Cs34CANAxneibAZ8F7AMwAZeXy8pSfRSDgQ7AMG9KXcwjkBVDv9kxAuwer",
  "key36": "2to7Qp3rMzZEbbXBXHRTqWRz2a33LNpx5FeVL11nmE7yW56kQUSFQvYkavkc1EzeuvdbneuUipDvFwov9ZkamyLt",
  "key37": "3FvEMRfa6awf8CFRi86iJHe3Af2c5nBFQraLwoYy2pBd16mHmmAZe3j27zTENziQpqqmYsEq9Ui8taRwoPWEuFs3",
  "key38": "2fgmqSJK6YbKq9jcDnt1HsnGfVV6g41iuFuzFf573w1BmSxWUGb5biqQ5MeaGqh7R8TwHPwbyFDv9nTwb8NJf47J",
  "key39": "2p6ZvkWzfnYXJYCPtJhuJ1qWh3HdR9LmhBsbYENLqQR1GKY7vJwtzgH1cHC2acbQCwJnorXUyfwLNbtsYxca75X3",
  "key40": "2RsNcLJDzH7XHnJD89bTuyjPGxU5d8Teg8ktPYHfzsbS1rfLSo546aPKShhboWpbFZhcKFbrNoqc9aKThkKb3G5S",
  "key41": "58wYXoqoCwNpXAVbyxYhwtkGPPgntVwjc5uXX46heoJmA4r84nWKBwYMAbRVbK8X65z4ny4q4s383K2hGF36JM5c",
  "key42": "2bMXnMniQNF8dAC8SrgSu6N7W5BKCgCtoiNEdcubJzgLVJPNpWuDek8yT2mBHEMvh8h8zAEk6oNb6Wnf4uuX3HQY",
  "key43": "2oNoqFFHejVqZiTic6WkqEdSra5BT2V6rAc4LxUag1RNXhEYoHYgJ4GBcdfJxmZjaXUpmXUjv1bL1tZr6eYXvKnM"
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
