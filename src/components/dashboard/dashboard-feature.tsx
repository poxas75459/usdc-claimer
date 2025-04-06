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
    "rb7kRMzqEAtkfigYdTYLaCLRc1MuoXWWTEuh6gbJKKFRxcujDcfb67UP2y1pdJZLWrkhu5xr6otiVL21bkcSDB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49nSzNGxednnTCK85ydvwjUqShGDD9GFrYAR7TPbvqrroT8g6bZGBQU4toEpzPwRWJnhxUezkyox3qJZiN2ZVQ1M",
  "key1": "3f7THhXBGQ5joNGWyHa8rrUqovLCEzvGFqEr1PX4VnY9a535DBRDJuURmtxGPQkShUkaXyxErejU5d6wfGAdZ3PM",
  "key2": "Bvvw52NRfXNzcXHGdFt8oW6CHR95BrvJYQLABgpvMy1q17jRr5bpEGH2h5TgNiCvQ621XoND6z5GtGSnmuZpDnm",
  "key3": "5Ccs5HFRPcuFKp6ZEa8BvugbFntiL6S3sp7W9EDsraEsNAtBycJLqdfxUPPh1HUdiCaLREjJUQRnzjZorTLJUtHs",
  "key4": "CZChEUTM5r1dQMQc5492bD4zaiGPNetwsqMMa3cKJaW6XrgyPxJSAhrK53LZVMi6b1NJRiT3KM4d5h43UQHoA4Y",
  "key5": "6yb42YUZVtABrMYN5yhHMeACvxLoZ9vuAejW1KDpcaH8JmP4M94PN7Fm38NZ19Vra4rgEvHQzhewPCU86ksnRfF",
  "key6": "33sDfvgfKjsFiuSeT2MZ36418Mxq7otgAc7Ts1Mpqh9kjFSAhrAJ63bkifqLUYwsEg9eSTsJCLSWcjmDVBZDr7Bg",
  "key7": "yW8fBEPF1keemVrVSRuqdbH34D4PCRkz5nBYcV1ag5xaMqvRMkXUecKntyHjPAFptq5mmANZDMZUfXiKbeiwKGr",
  "key8": "3N2xazMMEX88VzqfYmpsCUZbaMheGxTRgpHjks8XkkNnDv9GYnzkqtMjpzGfqZhpDVA8tzocjYgWw9Wtd5dRN2zQ",
  "key9": "5gtTrM1ndvavzZ4FpbU2ZE6UrbgqrDJGLA8mqaMSXXK77ndvVbMLvoA7NgmYWPyuFWTzfpZdBKQT4itq1g3yJrMV",
  "key10": "2nc6e6QVDPvzr9XgvUB5vwxqf5XKfPteY543RRp55B52y8y8RTJf6qT7oq792n7huMcFtZjsfnY5r8ezg1GG1b3V",
  "key11": "5unoFGwo46uYWg38PCa1Mr8WePkf3uA1j9QGczxryhTHgLBc3KPEaNbbgGd2SNb6jggm1yC47MxT3GAgCrEQcuYk",
  "key12": "vbGrokBAX6fgbzAJ2K5SZ9qRsbNh51Ayaf2toBnwoGeG2j6fy3RHiwCo3S2snWUgg36YDjSi9nVei4MYcztWmj4",
  "key13": "zH8grbSNpHgqZv1VmeEkBZpAtTp9HzRCKZEVVVWFgQqDZjqv1BAzqCZtGRzDoeWq5UNkM8BXxazvpJm3X3661eu",
  "key14": "2jw4DXRppvcmvGBwbj3FQQGY5GJiWPxKCcNfaqQNtwKFCkeVWk4FDBPyL9GXMp838Xv5YbJ34S4prDvDWhSRCS1J",
  "key15": "5PDMs8sxtDwKAyVHUA8T4UbsjTLKyrWKT2A8u42jNnV7nx2bNxdFiaZMUYxDA1UB3soa6FNtF6y4nTqUPdogejBg",
  "key16": "32oJxmNLP7Q7LFpCCpS2vgBDV5XvktFrAbmRkNDJKWzDdr2C6MTAUWwWd65U3s8BdDigptoh3fBxFRpiSvx5d9mn",
  "key17": "2gwcW4VdVixsDCxev7gkRqXr6TxzpJ2C9iYux4jjtfJQpDF6uvHRqcgX6duUUjm7ivqNwNJRmHAxofNF5vhZtSxq",
  "key18": "3HGgh8mMFdNTRiLNpCrB9epN2vj1Rm7Ha88epMJw4fomgvATwG75LKFa8eAtzQZ4kKrdQS3YBh7BeT9S24L3ruzQ",
  "key19": "3W7kQRM6Tkt4KfwyeAVoUbVtBYqtbCXdeqC3ntkCzsrPPvGd6r1UzhjnQJEcD1VFVVx7BTpWE1npHoen5yotKY5W",
  "key20": "4TVftT4xEXvadkVbhUrVWhG5tQocQSieet7asuoPC1jHHw9C8BxiAZLpTXnzr85JWqRoTrBtcEoCEetgdEX4ECpa",
  "key21": "Pw4LYHhn5d9JyRjCjc7xHwsjRQA62Wm3nk3ni8JL2KDt1CR9rPm9MViwh1B77CqjngNDY8ToKSk2WBY9pqHNU7d",
  "key22": "2nKtgpPGykvBURzW57EioEMebiEzxnR8q4qtzaUxToKvMdadngQSYsefpj1nBaAT3SAnqD25C6v2DWzgW1GTcX8B",
  "key23": "2FPeVJb6AYAvqgEuuxxE7oGT1TFGPgSBo2AvzZWrujbJFd1BnG76TCDERZXwrSKyD51aC48vCSDrgoVBQdnLzcEi",
  "key24": "5gwemk6pt4y1F4Qow9mZAY8qABXCC3xA3KqBAjxVKptpdz3qdCdUqih1M7rVhXpAZ9Lx2sVughDcTP7FzLCtthBN",
  "key25": "4xJnaW4xuLQZQ6oMNfyuxxMHcQfPrPBjooZTULnUvFpa6o6nje2aGnYysCaUXMJbM54bGR4pKAZGp3Z2BbdktHHw",
  "key26": "28ELTmw2UMT9RxQx2hA8SMm6HJgN9FAsZVKq1hGdQcZnKbmyKBKLjf3YRhPR4p19hoNi9MP1kVRj77kePxku9NGL",
  "key27": "5aasQHbfaqd7DBsv46cdMkY5EMHEP952bzvscHxT26Akx2MyXheDp5H37ptBJR1wDtpk2Y4vBs7VNr2LoZKnGZun",
  "key28": "5pdeUsn8BLCgk8qt9nVh6FMvHuLcwkrYgUkZxvujMMNsQxJQKBr9BmUM9BTTxkuG3z5rZw9hWJpc9EA38n1fbq9Z",
  "key29": "5H5HiMJLvjozirjuCE8Zyh7Qt7WVmwrsKYXiFYp3QcwVLb6SVBtruDbtGFR9y1dv2zQBj5JvNwZ6TdiUyMD78cPb",
  "key30": "2yKb26utvbMDWYwHnB1qYzqRpBQhL4Z4P59yGiyok9ZfvJaAgHY686A1HjuiLXPvZzLvgkTFgrjE2LphYG7XgiVA",
  "key31": "4KC5a37jLeTgns4kN3WAWRzWsPVzUJ6PwZkcHzsibHCHr1xovZcYa5LXy5i98uw5WjVsqLN2px6HSCJkf9Awtqxz",
  "key32": "3hoqpGzA6m87VpkKAEoj6cddgAHfnzLCtN69meReKHbsZmTEaPQy1g38S54yGPezg1oJEu9eZMZ14g7WUwczrLgL",
  "key33": "392eozFgtqnaebYJr57mawQFdXx4e213tUD8AciMNxfFaVvp4zznqc98tYoxdjKRPpDt8Fq6YhEg2LLVGjnfqH68",
  "key34": "5HcMe1YW1sxADBbTtf8JVaT1s3PdVpivbqVAXoyrfRJekU2GeGaaqKoQNwgDGH1gcmMd2uyeMmBFkEMHmqdAPZSr",
  "key35": "43Uw9PkHWVRbaYMsxrf7AuejDYsKnwoc5W4oFLzurXrinxuR1p7pE2pHNpAeH37heGh85hi2nzgU7C4futHEKUeS",
  "key36": "3q8B52CL1nqzEBCc9kXFYtJNRkLZcKCMj3vPX1GGEXEtMfucerM1eR82BMHqKG3R9uVhfdKPhrenBL7jfMKZFRc4",
  "key37": "52ULJsmkX38xR1J5RMnP3wWGYmHSiBMRs24AocwJZY2pAM9UtMBHzV1PqoYhaRHQxX9JFhqQtnCe3b8ak3CSJd7J",
  "key38": "4aCub6ohxVk9mXT4pqKTxexdwcDRoYFV58Y9f4TU157J1wgqppzkXx9f2epJe9Za3r9D7d41poVWPH74WfXRjrNe",
  "key39": "L2v81HEVXu8FpzffYcgB6hYbTFk9CgjZ8Yv4FEKMpHSbVRnu5sgFvQ6DjnKfX3fFiaYhdprpUjPkES2fZQEN8Hm",
  "key40": "2K4vazm5c8FGAv8ZZcbGFsD8Go1MQNeukLkdsejtodtenmnTKbrgqpy1y5twH1AE6KvyfBiSv7XKoSRujzENbTet",
  "key41": "4JjmzEkcNmea3uGvtrLe7kqfVW14ZkS8w4JpDaW5iT7RCAnNu5seVcRd72ie7xRz9Q5niEZBweD6cw9Xfoigfq5P",
  "key42": "5d7qTftEZZJJD4LeJTaUpbXD5qnS4CU9Poc1mQ4ovSqLWqFtgb7vF1Xu24NmLDUWBunECWck6zrqapwe8D22vuYH"
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
