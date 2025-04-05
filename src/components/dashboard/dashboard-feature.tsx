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
    "3Ya7864DwQKxcj1sWKQi9ZKci6YURhF8BUccUQEYLdcX8ApPfMgznqZsnc9ifJSGYc5UdZh11x9RiGctci8oYBNv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44P9bn36MtDEohG8TB2ZKDUNcZRpqf9xs9igy8cwmoQdNYdg4JDu8QpbHs4Qw5ZCaTmuPicJdgV2ByLeN9PtbGmi",
  "key1": "jjRBbXzc8yVDNjkWrrEwVmGn6KRZZU9DN8edeNP2Xt8WqEnE2AwB8B352ZxmANnpz95c1Zjnpri5A4xyY3HkLqR",
  "key2": "5x73A3FaFiQaFeyRfnih7TX8vehoDszygHGu51JEoWLUcw9fg41WoZg7kCYNQxnFzF4ZSNC49s9aWxqoTqmmEq7c",
  "key3": "449TFm58837akYJyccauYe6jcHxJjhdALxkRyKEL6cCRoFqGjhGQ5SpGr9ELFMuzM64dZMzdaNUBiRJ1eEjwFz5y",
  "key4": "5yMZde7CuJ94P83Qcnjb4zQTeYjP8Sc1Q5ZgPzxJoRZagEtKd2MsQqtoPrxpjTq1s97vvsqugDyfacoYUVdyY9PZ",
  "key5": "Ghce3mQPWKxQ7WWvxVQypZUjqiRRBUbYg3hV6EmcufsYd8HVpaf89Qs7rRyHPwUny2kkvEoTQN4X8Sw7mVuARko",
  "key6": "3q1CUqMbeZ3Cx1a15qYD3GcmRYs4zz38n4GxdG8zFf15GvLe3wiA8VcKs9HqDv2KVPnmV4X1EydM4Q7XicYqKpwG",
  "key7": "JdDHTaugeuDNtgLvyXL9za2pQMJ4YtV2cQzYD5xKnbJ4xf2WwA1gL4aptP6UGkNpZEoUg6TdkAkFEPVQVRxSQov",
  "key8": "5zE81bMMNgL6MmvbvQNm8sorAWyTxZ3zB8KS1tgePUWBfQkj42a7QcEk8PSJvo5aZqofvYbdxShD62CAsoBoQX5M",
  "key9": "2M4AU87EAUacBQ119kkZe71ZgVXQurabrt3pCvXZJmzjhGjtkZNAL7WFkLaTginMGqFo7zRbFE45ocbfSHoMTtkF",
  "key10": "1chKaRfSNVgV8h8xRLGMaNZg7KMgDv8BQK3ggP7wh3cWeBskh3UxLntXoQZQYCJZ6Z9Gp4v8PpF7834uv75K5Zs",
  "key11": "2r4cLWCNRFAB64M91CjYoTNPQoyMuJ1dSgYbqk5wfHWRoJjhfS9qqY5XSuyAXW6D2uYWBSuKndZ6RXquXDSi68AE",
  "key12": "ygXx7dfcHtc8fBLLLHCLnsghGkC6MGHZEboNZcGQe8ig3i2nDfemnGquG8aQtDdRfnH9Y6v5smCaUKikcAKRksE",
  "key13": "23x3WjCXxARtUD5syGxzceywA49BFhAzui1uNBMqXV8Tp9PHvfSNaHxJsVvXRXJzKh5CsgiTweXWi6cPUVQaHgYh",
  "key14": "YTGnxnVbhaiErutDgCM77R4Ms4iHuQmFGT1DYV9mSDjR8ZQwGx3GJJUxvEYL9YGSjrBxwtg3Dz33Dm4APEpFNKM",
  "key15": "5mbkCXg7qKVjA8F5DEeVKtbiRuVqhjpzn1Tk1yNd5DH6pxJxWfQrJXKTbDTGXNVnUPvktXuVGw7VSkuS2JanaPYq",
  "key16": "5Tyq6KVSAYnnLdiqgAQS1iWdwio2Qaig3TECDB3MGFs7aTsikhNnVEWpsg8ckqQ8Ey2K4CHbjEALMhA46zmfjres",
  "key17": "4JSqxbiVbFknnDoBFDzE88D8zqUqi1wHh2ATztAJp1XC2kku7omiwVCBzZDNVzmnUgCbuPkyu7HqP9Mtrfg8tf9q",
  "key18": "5G3fenf1PC4hvJ9sARi6d9Xdbf1CYYrZi99tdtAjHWeua9Wv19VpaRXSD5nR8kodg36oxK1pMHcGMuc9NTy1Eian",
  "key19": "58QWftUN2YhyDe8DV5MnGNSfNNmHiWaRgR5WfmbQ8Jmie8sgzP5is5U4qsCUw1RL1vqDiGZWq4B35UzAub9KTsCg",
  "key20": "5UQEUMppramc3FWPexkRPBLSPrGPsERPmKhN7vmrPgUiKGPqgbfRHazZaW9qdhnqr1ZqzLZVL87VnRDyUkSaGU6Q",
  "key21": "5JK1EaH4BrQwSPFB7SciDfTgjwoEroriEgyRqeFGPKh4gTGsKQhx3QyKCznpDxUwm9QxXBVy1iFbPRkAUBqiwsB3",
  "key22": "2Y8yvQDmLtmHwqpuUDDqA8FBWwz29eUE6DaEybXE8gkZHPoUMhFimouLc7ZY2z855wZFzh6WgXzUaZ5ENKdbAFG8",
  "key23": "5SCKY5PAJvEownqFGUCi1aqkeetQ4SrJzM1azq9rWJ6mAmcu361ZNugazbUCMuhsjTpPY1c5q4owD8ZkKSvZVW9g",
  "key24": "2pTraNfGpJFZhBkM8nNFfQDB988wZsS7Z5PQ4BzfTdXKZHwPrypeepJhKbTrzt2GzgEHMxyQqdyiLyiDVKPSKCA5",
  "key25": "4a3MwJuxCB5av99yivkkeTEMRpHwFNVfT8C6rPfzvBWFf87efJaxXxgoHb9ZEcEUQZATqscyys1B2JH3D9pprN35",
  "key26": "eyNrJ18TfeNZcfiiL5FGXHadfixbAg3RmG92Ny4eU4U62kcmhjdLxynGvWF2crvMuDs9GbHzzXNbhxVZuqeUq6J",
  "key27": "rgM5aw77bTatMEaVtz3t65fSJTLESpDQZqezQDy9mvqZ9VMmsWzscUFw9skT8a7E3z4JRpudy1Cjwy1Gws71CGC",
  "key28": "4PEND9Lv6euGtYHnoMM7z8sKsgEWGXTGXjKX1zUrXxGV9yj9rFtZFi6sfzCdNMCrLAVJVC95v6tHB576x18UTBwc",
  "key29": "3kA8RvPgH37jAPT5qj2n98nVrngLAehL4PJiYgDQxr2LK8mvjMnPcnA8JhaBnQJGY4YYdJ3Rz4d6KpHSnjBRbkrh",
  "key30": "593ayhLCKv25dcogJY7ct8iwAbWF7GqYK6WvgBKoaiG2c98nfc8xj1hgKBrNVNkq1LrD4xkTujoQingzLoZaWb2D",
  "key31": "bz6Qw9zaAqkz3oZhGq2Cudej6Kb5Y9HKzRqHLH7mPrEje6ycAuEB19c6eG1VfgxJLYGHv7d6Dr3pDvrcMXthFZi",
  "key32": "4WWTFiMgQiGeHUomZsmZhViyiP4D75eraw97FhkpaEptUXQ5v4qgSQb2W4RwUifjq1bh5AktsfbppriUZN8p97r5",
  "key33": "3KjDLk1ZSQFVCKQzYHGS3tb9b1RjEwNaCYQfnmYrfk9jcZD6zAgB1zX7Tar2FoAjAPLruds9mdVFE3D5JLepipA5",
  "key34": "3mNjDssmQWzo9u5dbjB1rGBXpftz29qWSabfgW6hCFrj5kn5Pdhf7UXQqM8wuAwosTMEN5K8eShaMeGraG5fwqhk",
  "key35": "5S8SnYM2HaxWaWZzMSkaS3UP3qads7CFJBNWhQKPstJosvhwyBbnAnSBVBPKGzwiEc48TXbPitS58Cbn1TGYrEBg",
  "key36": "2zKdySP7SXXZqvmuKiASpBVwa4ZXSA5b5UHM9CiijvQDtnt74C1sX8wKC4XwiKMqQbUnJoeTd5EhVP8FMiaUWoA7",
  "key37": "3y3ZY2K86pmrro7Yewpr3WVT5UF34wsUNK71gsyzUNRNCCcNbwGQXMYdGAV1W55Dwu69YVdGfmo4qRyJ9EfqLdBh",
  "key38": "4jQxkhCe8PfFFbdFsEKSuMoQBALa1B43FpnE14ncsHgd4hx55PG88NaG7eRva9W8Ay86chBcFSGByMZ4xkhycJ2X",
  "key39": "5kSX9AtQ2t8yCknSTxu6U1xxDXKot4mPoGPX4BWQA5YokHNVMTvcP2d6vWKxicPhu2Nkbw4Qw2tj57wyeSdWbyRK"
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
