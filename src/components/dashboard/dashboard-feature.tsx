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
    "4QYpoPyBWhPmauy5Qm92mT7GGmazwF12S5pR3PRaJtbLQoxhpjW4d9GY8Y2RecLLHPTv3FTiCA1xUDSh5CgmQEZj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UfvBjepSD8hEbyJpQ2Fs8bTFDTcBFZ5BgR9LboeZkqCYrBr2NtjY11fpsZyCuHDQNreghcQ8UC4D91HG8SByGke",
  "key1": "4Fp8MjQxWbnU7fzcdDMjkmyNHfnCsyDMe8SQMv9vTtDd4dQUjiWZTJmxLgbiXrqVKZFWzVcNpYrJ2Bbkmw2vkhrh",
  "key2": "3dkqZDbugBuFpLgFhRkUVW51BWwBKyBfJSAVMG7JfuQZe5oqQRUPEHWqaDUrcnJtCPFUWqbz47p4X6oDE4pn8xQk",
  "key3": "5ioUswSk6K2SjgEAoSjTL95qxaTJ6jeJKF6pUFReEYxYLJRYijaPspzjqBDAbTKvFM7Rx5Bn6ZfUW636tTQUu4YB",
  "key4": "3aLEfAxKzftkxHy4dfSu1Am8ZD8YXuKfeWKFZtuVtGX3xPLU2b1ZQ1swcL8i6rikKcZ5nHB4WHrodr4p89TSVTyz",
  "key5": "5LfJJ7U6zKgVMpL9VRU5ZqjPViaj1u74QkgLd5jzJrMJfEERbWiUfSNvhK3yTrYCKMHm3E2FmKqR5upbwG9yoTJS",
  "key6": "5Lu4b5mzPekGbqAEkynbosT72mJibrKficK49Zas7TQYbfBCayT9VhU5PQuZANKXZFswWp5ELMkwEwqc8b2eguUm",
  "key7": "tJmeeqHc8BHJv84zGGTB7c2BVBwcoHNZV2eS2Z1biJLMJsCdmM2Z4UcbJtZEWZ4Ejvcm9HQbj6MAxHd3fW73KKE",
  "key8": "nDd2cfMctFFQoYEbmpoLjocGz5j8WsfD3i5hzZN5svEfotedSXuGjvx6RiCs1mZTqYTEoB87husUMXWRZ8BPP42",
  "key9": "2qHoXp2wfkESwmfRycCH8HKRtcWbmBe7sNHbgXpDy3JK6DZZ1pfk4mkt8gejyKJpeADhHickBMvcvJcE8BY7YqYh",
  "key10": "5WWbEfo9jHr3PAx6iexfumQE3ytdgDzx8qmW97U3ZVt33ZtfW48KgVQtJzNrUGct4AJ1JM2eDap68WieHPVU9dZX",
  "key11": "zeSamya5zG5PiNTRdGF2jxpTcbipA3HGaAXceDAov5w9eX8VrMiciojurVumiwBeoJ9xqoAJDGH7ypofRLXvPCe",
  "key12": "4cdSyQy9pNsWQSuGsP5nEX5TKwkcQw4RU15HnmuR13e3FEg9bqtvFZkJh8YTW7ZhFvJebRLQMDVVBn64K8rSe344",
  "key13": "3de3piAUdQqs1QbKzir7EBAQpAncwqBCrXQSUwrMxvRBMxQ9abKbaZYWaSG8ADpraCPtuhrFzJm7mAzDifootgKf",
  "key14": "4TXrrfSwXcaVNgN2b8RYgcsiGkP5gUCsn8HR62uV4qGjeSQ7CRpnGpPaM6XexVQobLBJ9BZLGSuXWeBXPNXn2Kw2",
  "key15": "4UwzV4ZXACZhnLtHY5vz2stLqA5oNHjHVNyBVJLgRBdRHSoBvKdG3xhCayUWtow9MaL6y7CnF9zggdjEPDLrwycr",
  "key16": "3jpwci7Ky8BD35kWUwNF4CSQpyVkVn5FpuEQYTE2F3o3RXMrv3boHpDVK4wXmzN6RHxH6Ei6r7dcJDj1waJQ98aa",
  "key17": "2nxMjrBtPecNR72yxUoZ8gUhAxHCWHYWfcYGfRaC2pBnFHdy7EEGLcEDTkzFgiTqCt2Uxtao7PPNTEVvHtgixjBg",
  "key18": "56hERjUs14QzTngS7BRdYewDcAD28hEecf7s8whaJqArrA9dzXzuCqbiiQFgMooUwTr2Rqt7rE48THhpPar48S21",
  "key19": "5Bso67rdXzpy5cwFcPGMq4ui15JwXzBFMpJmwRJrMcLHeB8T97RMs7Jp6irwbV22ep3tK3HL1vmb13npBpuBnb5u",
  "key20": "35GwAMFSBGtFjh7Q962Ja9SnYqgbFLsQhy5xPYXWSf88KGDexpKLaEgk6q55crUfJf1e39Q9cGm3FyFcppRHZZC6",
  "key21": "5zUtrMky2e64FeigGEo7sSCWib3dE1n6dbzjZeEpHYm1H2HDa65G8NC587cw7Yf7sHqwTxcYZhEx6VpSXHoUUiUQ",
  "key22": "4HUPApXZadwJDmcQYBuPwWbEVufD6wmjkwyzz8sstxF9VMyA8QR7VkCKBp87eXzR5wHLx4Mdm1bNPPeqUWPrGyFd",
  "key23": "2N9Ci3qEKp34YTLEHAJXDKsdQZh1WSuVW8wQsntr3cFKsCpHmXwZSc9Q7hLEnqqNTvFRfNQNaC3VR3MTtH5bxJfQ",
  "key24": "58DvVVk8UQTvmipmBHBtTFvdpB1qQFMPNAGde672KJereiCtcuKsKkXpJJvLmaA2zsiZfGboFH6LbHjajFNSjCJg",
  "key25": "5wgLsE9CV3zep9StQGdEU2Vr7fnxstoyUhJ2KbgTnZd3m1G5aMhwrYwq4jpfGRKsoNUbe3vodQiS3vN1s2qaYwAM",
  "key26": "66g8r1wkUjNbbgZ4XLPw5NYozczuHwsNLr6sX9xrP3hR3Yh3U5S88dXWvayN7CJhzVaZLiw4Ktr9YBrpmPxoPGj2",
  "key27": "4puhbTatGixiibrvPE9FY37yp7eogmcC4s2kwFbmgS6k3tT7T7tA5e4f9YqnSpQFhoeLZbx18VYsWyrtwgwGQGGx",
  "key28": "2NXLVADnP3QjT9suwF3EevgtXsu5UsvNwx3fSp3xyCVER7zZp8SWnY4v8955UAemSPVGYavK72MS7vDmfmpeK1Ex",
  "key29": "2P4GM1xfZtQz123rjD7UQ92Ri7HkTkLE2jypLXo4cF58bstkRsiw4pvBU2xo1btVb6K4UdJnwGrrQPJ6rig9dWZg"
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
