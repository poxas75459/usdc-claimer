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
    "3GjAu8QE4WngGacAtw7aiPf6WXRBEwC4javWtUisZZHukQ7J9bchJRTXuHD2cWViCAC4FeKFRTU6RSwbo8wvhWMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jxg7gZsxfx7ndpe6c8B5Fzri1LduHfhxaoRzNXtYTxkMdPQQdRBJ2yKCCK5yDtqHhV4h9Y9b9CNawMejCzVsbqA",
  "key1": "59ieSoXCdznXmue1xwVjgFErUnFcNH1dhZYhDy8YPYCg4wPzuybDVgJUNgeBr4g3YQMSbP7rd63Q2LGQNrKNq1oz",
  "key2": "RaYumpGSxVzBFNPV18HDLybiJuuMd29XNWa6icRofuxgVZcyEjTpGZyguE8uKXLcdMBa3LRdVFDgGxfDjNDSTML",
  "key3": "5D2QtwEWnDyH5z3rdZ4aZ1PUS9gxVYN2eXcWSPP8yaKXGUhbwvez8gmAPcNkLh5wVBVnAh7BnYVGVfA6vC3q2iq2",
  "key4": "y34vnCT69WnvLRCAzVHs1PzaLswBvUUeWoJv6ue97g224DpsJmFMGSwfJUKvRq9EBXdAbgQ61uNPapfx9ozSy6Z",
  "key5": "55uqZL7prDZ2Pok6PqA23yFqagEg5rAdEGFkBNwRq2VbbBvMJhpeUNpLoV9tqDcoVbJngkzEXNfqncvSYazR838R",
  "key6": "29myyd9Qat8ZxWazgjmt8ooNtzSPiBaAFacWDSnh54vnDEcj1YDAh2bV4YsNvmz2vwUtbeNQmsHDjeSA6dZUdqqP",
  "key7": "4bmDPBEKew7xA3DJCvPX8kgq8cBdqRWQETVBvA69p3bqg9GYTedS5FiexDfb5K4zzpi9Q5GDvdQ5pda4yeFfyabW",
  "key8": "kw1583cjMGChbaGS6hreNrcW4jVHQqawfP1Ywe866XQNMMumB7dtsZAyWWbek4E8BU8WfpCAJHzjG6GUNWCRAaq",
  "key9": "5D5QpoeswKNgRWLyv2MjyXQsTjnpYGtM8d47mkZjVykUuLeRzsXJjyLCVGikrccZVaJDuYbWssdrDm5KfEuvrRQY",
  "key10": "5ToJ6Jz65E6hFW8zuVJ8Cgyxddy1nu44ztnrwPhVrcQgZxuzgzkNaR68betVKu45qcoQFSSdsyfcien6fdLTGqTY",
  "key11": "EYEsjLpKuU4FZ67eb9svJzGDSskWWhQTSi6KZYcNbUrnhF1C1kyrXye4Lvc7AypfhDv3kWGr5SKnWAhL8tK1otD",
  "key12": "2pmm6NdjPmiS7SrHPo23tLE4GfrpptjVAa6bRNmqLL1gWCe8nFUMTngBieeLXg4ogVriatzMbV2zCzJLuEF3UScr",
  "key13": "2KrZK2wPMCfJM3NoreagQWz2hUjZ5fFUSRpxDnUJqEe3UsG7nph53QS6yRaTwGi7XroqEZg2JATYiMA4VM7URxCs",
  "key14": "2j45tfDipZHhkFhGB3FcMNMBn89a3R8zvW7pXXD4jiwc8KMG6watgddR7syrzPsSjx54j6PM9wmJLvN8ccSHc9LM",
  "key15": "2gNKx59QQ3SEh8E4tE5tnhZz3Cpuyko9Ygdi6cvzjMpkxvycZowVqURjaiSgQdjrfaQi9sAUC5tnMiLeyeRzT1w3",
  "key16": "2uinDx5cTYbuztsR5boVEeBkD1zw3V8rtTDWENk1JKUDbnFaPsnoihd8BDZWs6FaEtc1xSfZComUyc9MDxwAYmJn",
  "key17": "2Ywtb1X4PvBufh8rS5REHDwBtmzpKxCwEoTdVEQUJCkBp9SKL9K7jCVzLdrMYCsmdXkzSMxBT21jSwj4ZJTfJ9Lj",
  "key18": "32hctqtFPmHaCjyrParkobCAKaJLFJRnQDgmBJ1s4hdi58ACJSdJ274YE4MpYYsj46bEtt64rheNuxqK7cwLiRGa",
  "key19": "4LdcMCtthT2gGpymyQc5CKP6ihSTWQMyQjXwyEh2XhrRn8qddZnvWPgL5hwS3k18bCCKT7AmPk4eWbfEpvWFbj9C",
  "key20": "3fv2TbtFYdqZUkrKq3AbTvpRce659fACcobbGkr6q5eRwnD9tHyXnWxDoev9GU7KuZWhqXUY5CYFpNatYwMFYjyb",
  "key21": "4nHESLkmSSwb3qR8vfPH8r97diFPYfDoxcnqGBBPSo8P6jDDGdhcWqyF8HNmLBtaLhDiEqTuDSJ99aPHa78FhsaD",
  "key22": "jN6fJiCV9bEMAEJXHZ6s3PhcTkmfhEyPgUwvQ82rviSCLojf2zuLkjdb4oFdh8EBTMf5Qz28AoR7KRSYgaNAFVT",
  "key23": "2y6sWqHtgWBERTYWbx3Eio9fahZ3gJjLhPw2QpyBSzcq3nF7fCHEjTpUPgNxLyf3epY16fWN5NrDr6kgUDc6MUUq",
  "key24": "ctJAhpsKLoVzK4Xa1wj79V9m5JADU1X2R2oFoxpnZS3N4MZGFWsyhN1LFB9HmVRqEx2s8tEmurToxRJEhDPWYgw",
  "key25": "2takj6TTAaaymPezihnCewobcB8tSQD4VuFGoknLzj1wKKS8AHe7yvq5fEtTMHqhWy2vnFjbvtadtVnqEGmB64m7",
  "key26": "4YgpkWzPQARp4KWeX7uy35nzTFxZYaeBVTmNsj32tv5mNRhFsPRHXKh9hRwXXukLwVX7meysLAEkj72dtJUg6pQP",
  "key27": "3REVZeookSMWyGi6g6a6Xkjx7u7zUiabtfHW3srge5k9uFSrHoQUMkD2Xdt25ZVBMpSGVzMVxvuoGqZnai1nAcSD",
  "key28": "391J55QCVT7nubdsWyakbyLUpJW4PTozGcd8j1YkZUQY3nenMzBFJLKu8WSYWgihhFKYUMwjQBEd4ZW5PrxdQZFt",
  "key29": "2xxHUqy8zJNnRVtsQC2XdsgNbfAdpJRdjkuSTyhkVn4tUULMuxEqsowrRrocPQo3rgCnXNubNMSdPVxXgG4eECXM",
  "key30": "3cjCetcQs1cqGH1G84fdxziWwVU74Bczyvn9Dc1z3gnS7WKfRfF8MmD8bFpt5asa3jsztCv1r1ywvyfkcdv291zw",
  "key31": "47BQ5R2y6ZqdBDZB6spj7JdpQTaQ6abyspshpeELKJiTUqMGVCRozVBkggLAYLHpmniZ7WvqkAFrTPowQ4ZBG3hD",
  "key32": "km3dvdrnJ7JNz8kNEidrH9J8aw389Ds221gRqToF7998sdwPqZczfhGFLgYqG5Ycgquh8oasyFdatR7gEwxiRHZ",
  "key33": "3fRGggoNqvG11SAz3aJz8CcnuxPn5C4L9b5gTJveyEoJK92GJX96ALvXdoBnfRCytkY2Tzp78AboRnTs26Cr9iUA",
  "key34": "np57zhqNueHuwH6Em6cvZkjoxJ6tysBrYmGMdGsbgokr8vbG4s85LXbnHrhG338hAukzVVjC6juUkgsrqU4YrWy",
  "key35": "2LhQjczTRn6Vig7F1ewaHe4ou8uxjdf25BosKTh3LgkvhhdcARYsZ5HDx1ay1sHPCLgnMiAXnSbszLXymSKyA5xH",
  "key36": "3f6gGtwmZPandebwapy8DAjM1DwYuAmJchxYwZGFHqpQhwvLxFzPkrknZ6oJQyqAFjF8xxd7yAcp5nn2Y1tdfvFR",
  "key37": "5SLd4b226i2r5bCioopECk9TFnNYhdgrf9o8EyoXkPmgFaps5FxWu7httH24o555gWdViMr6G91ZczmUTjjSsxrh",
  "key38": "4JbXaHhupa4M1VJkNQf1TX9S8DzdzmZFwwk8vPqgxBKbYf9UKeX7DEHL2S9eVkxq1QaBnDNLomLbVUSy8gNDLmuW",
  "key39": "3rD6Jc3ggNZ6V8pPreoMY1Qu6Qmf7w6bZ6hEf2x9xTmvn8E1DxNkVNUdE8dxEv9KmAaGLHdgsPY49ps4o1nsdk33",
  "key40": "5WBFBcbuMTLpUvkBd7687sAK8kmXczC4KakvHkjvbos2LZfPViRPS1D5eJeoxCqKYC8nGCEhyUXLWyBv4qxf5zUS",
  "key41": "5CdH4G7UsgnN7WWk944zNbGhthxv4ihmrsMe4gSH7puy3uG8o4XNydeSeNXrkr7sVxSj1ZvFkVKTYJqJ3Vj6f8iM",
  "key42": "PVNccoTH6McNyUeMtZYF9g4zQ3vmRY5Csg4HoaFFw3k5zPiBZMLChXvy5VwEGDHWw3HgJzqS3Q4vmQmNBuroUad",
  "key43": "2gk5RJjdhJesNiLFowPuysTDMAvbPMPjanwH8AUWAaqkxsbhTeFjLRbRFhKJsVwXKAVhkzmPQxjR1MvPoqVFWZwK",
  "key44": "4yrFAuUi1pAYuz3MBBQfdyKDfLUWXDCxemuonyXfTk7GjfJWRGp5AxPie3EG6SBR1GuR9i54aBG78SrJxRDEwo1E",
  "key45": "6468wvBKw8LggenDxKF4b9LnMzWBvZXXSmTg38oqny8UQZBY4sKtwdKpfBZJ9PzJ1rfNqopgupWzzk6YR2z9xMDv"
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
