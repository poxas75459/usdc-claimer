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
    "4fkCnqmeqUuKEFqbtXBom3ZEymZSqwv7TQWoUMyeSvmHQ8xGThFcZftaU4swLva6raFznKMqn9R3kCAgG119k1Sq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HgSm7R9dpu14w3VEv8urzRyVfT8gvWgwcmfVBWFFBsijxJsDpumVwUrzYnga92HvzmCSij6JbMvYiy5rrSqZypL",
  "key1": "4YSi6qZttvdi6rs4T4YYjGxWXTCWCPZfc73Xn7oqayZJV5GsfMEJrEVz4gknqNdt1uW32riu1UaPaAVWqQNLekcr",
  "key2": "dxfrSG74biCoiKvhGAVAA7kAbk9jwhyNvAdezUKtzvVrvRHhsBUQpgYBPAavT1qKcHAdm91hsgg4FP6VjAzHVPx",
  "key3": "2ECjpzZq7X3AFXuxckZZ4LmZQTZmHyFjMMEzjxwzW2YM1r313dVu3t89cgDue97M4xqS4PRHyS5VeaqJAZKTnqUt",
  "key4": "3Z5Xg4LckSUyXhZnzcnC3VJLtcMmpLGsi8Z7XQoWvcUcCGJBQZRQMRZ8dSAsncowUA22AZ2YTJuN928X5LNPdyuX",
  "key5": "2GqpisSrSZdsMh5fgne5ebYWfgjSfgHJgCJ2aMmGh8qc8Bd2wGTDFDQZE4qFxpiZfZpjtEe7DH6jZXDZKabMAdxT",
  "key6": "2uw8LEi2bu4d2GyCcsVMHDf29PjnuyVjs2A8dikSoMuaKQ66XCJww2PX1bqC2DEHfmccEhZoFz41VZ7pzTjZQH4E",
  "key7": "2JR4JMVF1ZKzpzowog98Eh3wmpVpBwv5r78HH4erHVrw7rguoSPQcNy3PVJGUHgS7UX2RDfSjcfAgCR45XNTLc2T",
  "key8": "4jfSYWqzSo261K3rVcyjc8Xfs75Raqj8Yeng3afeGBq3tSxV7ZrW8fuCgkXn9LjEGEF4tB5T7UzTE8ueqaKwAF79",
  "key9": "WKLXt7mpsXfPai1WvyW4nkhSLixpubseuHc6PyPee6BrZ4PzCFJuFFKxXAnfAnHwndX9JkKtrb8PBHqA54ARs6p",
  "key10": "4RmxsuLJ3MFoK7iDdN6dKJjnXNpk3eiGnrjVRorGr1nRDphrg3z5BCCiXEGoqjctCfcmK16dLG98rvYtGwZEEFbF",
  "key11": "oKpfhUUavrDh88vLoBaEYhZX63sVWWKwhksiibgdUHfznz5YfLwcDM36ARavrxtmokS7kw9zj7gABJKB4sz3Tci",
  "key12": "KYCHT4W5rktkeVx2acAbbRTVxTEkiipierwsFBqeFYBQw8wtA2LA4txUf9BCfFzz2LmX6zNAuXkY2oEEPFfwKBz",
  "key13": "3y3hYuDcTrCQF4aR1dA9Cn8aCG4fgcQ712Z7p4B3bSf8MeiuSbWZDaKHQrg3RmbTzzy2vhs7VENruF15tSWrAXdP",
  "key14": "4mcx9PkZheDs287i5VDGAPqk5ygmDwb7L5qNy2rbSVZiCc4rdvbzuFDq4atNBxhXCs2pHtHAJk1ndgD9KPvGVTqF",
  "key15": "2B1ZiV9GyCxfUFpNTWKFE3ZUmtF1HVmymbN2tq6F5q2rNBH29xd9v1ooqbhhzDeaZ51Q4kTuEc39uHfdfK2StcMZ",
  "key16": "2i2bPQct8DbNLuJHa6jodHmJ4Frkf8QzQRinM9j9ayShmKJpFHP52jmTJoLrwYf5X2Vz23GHXUT2PRuKE1SRAnmz",
  "key17": "4bgSSqZ1BuZ6HQPHWk8nwRT7YQeDNd3qK7SprjwaTXsZ3V1Yuabzmxc7jppz9VKjaH78bJvKJ8a5ZDWAzZCjoPtA",
  "key18": "535WcX69yAcvRz1wJUUfjnV7NLdEqjqmEBeqcKPEMCSXmYKkJKR4tLipepBmyDJpQDhdQz8JF9Dch8LgKF9qhD82",
  "key19": "2vSttWKKnQRiT8gnZ2nh7huta9G5JhLrdYF3MCjecZHCRmaa5dZoY3mPTttf6YE4wnyKLEB9Xo9GZH7rePDHaJqn",
  "key20": "5q7rfoYG4MY3FSaQ5poK7zat8psz18kVwgkpKh9qXRGgspUeSnTCVjadyQFdhXoxoWbTk3wVPx1rtVE5ZjcuKGAS",
  "key21": "umHXGTU1CScRVbuq5ATnH2QUVAYXZTSG9G55hpU5gjhkhFu7owm7Dh3DPwMNAcqCicjTNvn8aVRJwY3eNE92zRt",
  "key22": "23ozR3uXkdevt2eF5wGeL4gYWEpYZCNyEoBauYYM2i6Ph3mY7MoD4iGSuQvgPa4Re7YWrgbtZGxCb7xM44L5ecAS",
  "key23": "2wks39ifrBNEoVzUtnRyxctv1S55Y4TfTXfPaNirumEEgmmk9hdi9rzMYjgvWi1GEfhGxXXwXHmPd6Dc2rZ3oiKV",
  "key24": "2hFuxvR8HHcVNzDz3fAtt5AHp2EpTAuvcTznk4sT6nX3DasVuCpaG8Fg4a3ZHzRQxDf3FnuT2CCTSzushi7pF7CP",
  "key25": "2Pb2t2XkpxMouRymHQ67xBJquQjm9GqzTxg1zWvQQ8ConXEcdtrsa273K33dzccWRQZMfjkXCgoTPkQtXzaa1Te9",
  "key26": "4SWbijDU3atJNUWTWKemsydQaNxV2kfsCmU6uYUhAR6LNCiSh2Ym7q6XM7uaHtdC48ZkAHMskxJq9TkPH4PN4NbH",
  "key27": "5eooZqK2i7vdvsLTrivhBgD1spfQLu7SeEsWuee8KgCM7NNR4RC3BjcZwx3f4KeMzZriQXGrq4Rw7yZdzQt2QLNw",
  "key28": "3xW65H4BgJYZNaTqTSTzKVfq7ej7vcCtG79beGXrmEVCWCs73ZQkq7x2MarLNAyVq5dxKsvYVrgUw6f3vPRmT3Yf",
  "key29": "3HpkCFTMKtXAyzoKDBntya987bDMAtMfCV7xUS4Qrnnxq6uovMqejSxC8PYpeLnpeMx8gF8BLXBC3Eeh6MbbYEMW",
  "key30": "3RrScWw1sSKW4Vgs6LgZXqwCc2jS4Uk22oAcCFCSHW3AgdBFXErm4qMg87UKK7jE1SLNrwCieFjDCxmZyBSpgqb8",
  "key31": "2viPcm9ukSfdEn7ptvG6uivjaMqyhSspDHLbbUGSvDzBGQ19Vcw9SEydNbKYzd5XTQryaSUgpVCsTS43eeDQhhHc",
  "key32": "2WyazUhascMBYUJT59kYs1CuaEvuLRXyBzPeu9AD4pKHk9WzpWRrAP8xK1MfWeqGYum19Abm9Gq8BRoKPMqU493k",
  "key33": "4ynJqEiwd9UkbPg1KhbP7szjMtB9Ma2rAaNPEPaVncHh4WU6DZy9pBAzaxtw3H5D6EtiQxpTru1npfnh4zVGaKp",
  "key34": "4GjTH8njuCvrUnepMYncif4sY51jzLKFd2DW2NDEYWFkLRXynFmoSKyTMGYFHmUvetbwtuKTPh8AD53MF5R8DoBr",
  "key35": "4L4SuhgRx4grbYo9ELFXB6jyRBAXHbUGXVGidyszKZYXHMioEVsi1Q4wizT3DMBTuRv3NNyG3bdKfhDDajsQnmkJ",
  "key36": "W7Wm93x7nXdgsmqSpNR99u4CLu85NjfqxiwTTkYbHg6ZUAhCBE4b7ynN3ssrtrV4JD9pygex5H8uxovtVc4m7N1",
  "key37": "5oYgxkauhaZFeKRxHBuJ84hqqGJCrdVtLVfiqeerHT9SfoVXS35ZaKMmxt18awUe2ovqCrowKavuYi5WtRM6Hf7c",
  "key38": "4tqo4qkqHrgFT2eHojE2u9q8EFugKWGBtH2P8amPW2WLBTMyZJBnX5Pi8hdNo3V2rRcMY4KzXaUgCo3CinWGEYZy",
  "key39": "5Eq8Qr5PPPvVdQQ4EJu9E3DKj1QLM8cgnzdaq2XF1yJdhr7FCbpbN6hJTQuAHoPeV1jahkLVoVVPUpoqY3bnLrMQ",
  "key40": "Xc6ssfW5xmZZ9N5ARqJbq6wWfjpp5y4fdeSb33QHQVByBox7wT6zsQxKxempcxioHxTAn2qy8SqKzwhmBvzrggL",
  "key41": "5s6hDByh8gc8RA8A5aP7VHi64MM9NfArqxzGKoDRJTrZ9ahhKr8ojAEhhBVAmdzM5e5hqnSehh5qT2ud9f5nWoQt",
  "key42": "631QN3jzjCNJDyBaQUmxGAYNUBdSNWsQ9ad8UWa7z4WRQEjT1tf7Rk7KToZdwLEoEfiwLXpY7YLTESeqtJbN8FJP",
  "key43": "Y3z6SbFFEkUhjZuwCpt6GccnxJGLBupmMkkFTennvbniPubnuteF6z7ajEiuH4jbWzoSz84PwUeKKREZdMoLbyg"
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
