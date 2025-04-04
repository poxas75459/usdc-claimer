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
    "59q2MBtmEnixM2VFpeD3NKxE7hMHxRW5X8or6xxaGU1zUGpUopHjaSsiDstpZg2WGijSPMAjKMmLCUNrnDaa5qeN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DnuTYZiwx4fnkRB9q86TyUeNcjYY9iz1tqR1BHKXuKv7BWcfjGEmbYiDD4FzHSDhqtAB7KM6YEpCaFNDSZtnbTo",
  "key1": "2gwpQYhwGQv5MzvvNSb1t8o6dLsywNv8JUBaghmUmHbK1qLpWrxthXegFySDPkAUypx8zHCPGpKuB3ypx37uLuEY",
  "key2": "45NSZmt3evgZYposP2MuTsEiMk7jnGNQiE8YoEdkCjMpzx8a2dm1u5vVnaqj8iswFMHGHYkVhPnS13WpHZaW4RVp",
  "key3": "3TsMGH1MeCKDNLuHAxGyrkXppbDdPD7gpeeCwWURKGv6diXERzZrvTiwDSBLX1CJJKe7AzR5PoUsfpyJ3LVyaYEE",
  "key4": "muayjAPaGwcHW4XiWPnApzruQ6ZkFuBKgMopXXAzwEPRt1Rsd4x1Jvr2dAHyrzjWwqgYtDaeTVfEZDMZxYJWq1b",
  "key5": "33oDf9WpohLUHKbHbRnGYdm1HNMVgKe6kpAW5PXuQwTM3B8PJKzg79v5vvT6XYS6TxEddVmNKtm12DLyRyjyhuFZ",
  "key6": "2EEWYewrBJ56oWN8iC32j6b3ZMM9Aip76DViWrjnDGrdygagFh1fzU2SgwSuUK73JJb9fuzbZQkWQku1fh2QF7Tp",
  "key7": "2eT1HszE2iUCjouqmSyp5gQxHodT7vMTBGkeQ7mWJUEZjJJPQUd4PPk8NeijA8CttWw65RCPYVSVSSyubWarmNVY",
  "key8": "3hDsP3jDLz3PEGYB263a3k2Q3mV9ceHtEvjaNLfpakDgyvTzqHGx8UzWmZvbsztjNGEn8Yu2FGUuZFiaidVikSkq",
  "key9": "2jBAYfkKJUCEw94wTHJGWrWSb8eWEdcCHBC4ex1WFA3rg66f1ptteGbcRiYVk3FivfYN4wvoaD9r9PnpoPFAjLPX",
  "key10": "3JCzuS39YuSaQQ7RVriQNefMoQ2ydsTGcfdZ57ZRVNyjcWJXxtPMKcFXCkcKq9gZaEoUXAHiQLZjfEhaS8AXgJax",
  "key11": "4GYN8QAZSp5ELDQpRQHrErNiDYXcM4Fe8NZYGMyHV9buC4euiJbVyjipZW297dv65zE6TxGttEFYrn6uFRvXh1y1",
  "key12": "4ZqRmdQoFJUoF2Y9KQi1HCjurxKcmbyRV3ZmwfTraNy4E2XH1f4zEaPmPr3KCoFTFM2XhcWcw2XM37cWkwJJfrdf",
  "key13": "xteJAvUpkjxxbZMmFqazbH5Ryk3ZDcctuVJGyGM6p8vUgr9qN5QfeYLixxRTDG16zAJXixSk8URUGcf1Bbvgtqv",
  "key14": "2XYHDzo6XayNWvujM1Gu6H32jbqv1iBcpPL3mGyhL3mRWJ83BULU8xyjE2fYqqNvDvp4YHzUpVhGK7pbwwnHjGSf",
  "key15": "2davTBbobN9EDmFGTvK4LskQPAEj7VWfx2kHWgbNgLyGKNgqgENEzu5CAgiTQxWWDFNk5xfJvdicKBkzWptvdRXD",
  "key16": "4NuSxZTDSntujRd9rA6wmkMfvmtQWE2MtiUyVVDXzMJai6SDajYdU6snbwdpw1v9ehBS1SLhzaujseba8D9N6H2K",
  "key17": "eKbpXMKmNxVC71kbNGjJAWwgvVRzRvR4MUwQ84pamypFkmpsCcYS6rZokA3De8CFm7fSdz7YhP5AHEzPRefC5AD",
  "key18": "mhhff7hexn14jgs39ykGBhfSn5vYV94iKwbvTGJ4UniXhULrSZRCWgzov5yvYbXPzPycDpx14FyJgMiWwFM7SSH",
  "key19": "391WaRrZk8QNZG6dyMPpDU87VrPo63Nrfhn22zWEwKgoZqf5ymbJk3V6QeWS4hGa7hysLz7Es8VwjUtHwrGQ98Ng",
  "key20": "4QTT16P1DocpmFdGEERFXDZvDmh5MN7nCgFJTsQWSwo9ZcPbmowKFgyb81VSDuWurV5JDBrvdmjMyZegNejU9fvK",
  "key21": "b3k95F1TjRbSPazUwFktK91XxodHtUoaEf1bKZKfYSRRgoQ4FwLhGyYHi8XyDGNLn9Ci2kBG5PLZKALToUFHbnf",
  "key22": "3mepXnk8N9nBC2ujGqTNQVGFTaHE2XyfWYUaNWnjGbEsAxxCCS5d4btAnZP88Qt3MpLfRGqqrMBV1J3FkC87eMAN",
  "key23": "2kPnmKGQMH1xdJr5hgp9NwredB6krxmpysHzrUX5ZxpP3V5bfWJ7eoxSXP3JNmCj4vgDLufnver3UYtLM67ATHjZ",
  "key24": "2NB57naJrU9hRWL5adedVwDz14JeZpTtTkrZtPYTAWkMxwp7RJT98yEF1ruNNMSc8fytLgcSAoNwSgPw4e5BBqgc",
  "key25": "2EpMc8iGqjedYVFycRfBpMfpePoz2FqRRAQd8kY4F9Mum4gArBUfNXX9uonxCezUfcgwQqd7ciTLTq5A7PfLyNrG",
  "key26": "67GBCtox15tnq33xjMn8hAe1tsNtpKJoNnKUD7B7s7kY7uoHLu8wCJwPJpxfZsRhcFbAfpVCuHpmfeZxP22sninE",
  "key27": "4twg4SMBTRitWHktYmDwuSTSuu6WSjMUzQ3gEZQoLASkMt2wStnYntBvb2hDXKYWcx4cY6Gm8GfdKwxbC4ASWzcq",
  "key28": "5AFSUUVjq7tKjYmyGUAhRef593cLG2xodwQGDf4GvWqt64DAvQywRBR7f4ygumhKeYuACwMQiWjaNXoYzY4E1avn",
  "key29": "wWKrYhYym34yQb8ubZdqkuPU6nReFgxGk3YWdqJXWf4uSTBeYhrayVJ1YScziaFf595EcVZXtC1L3KiVrj3rHe6",
  "key30": "2PGE6RtbqECeL7j8ZLZyvRhyNsURU8ucD1jYdr38WkUdKYLiwBP1GYpCgSBiXs6iS4xLwh7kBz9DbB6xtwUiJkmG",
  "key31": "47kc1sPoSBgGZV5qkc5a48PSFwZaxt3u32EJStyaSoyx6QLdx9p9VBfeYXAhSmBHEvpMRs2UKY9JTMVD1KtDFH68",
  "key32": "2Tm54HNeTBbiERTXDLWSVLv11G9KivmNEQHoFEYi2TXMyVcVZswmLDpEUEroNHjoKpWiFagG6Qo8LQEd9SfFT7DW",
  "key33": "2F8PHYgjkro6Kj4bd6pT3oTTzp8SjEBDWshGQ5sZ9Fyc1D3PSAB5NFzY56HFehPimoQM7VNtuVz6rLZ7NZHHjUBk",
  "key34": "5kLH26yDKVi7d1no19TTWXtkuS9oiRLBQWWMHxEE376bqGdW9oP3aq7oo1YJjQtGXe7J6hPscwrwEr7KWP6NKMw1",
  "key35": "5YDUMH5VZgckG4ogibe9qZrZG6YpVq1rHSSqZLuaEdhJUfx2MDia2mhaizDgEeVynC4pTcUgFsUpL2hv3LLFJor5",
  "key36": "3UQAQFGuQsZVkvfuEadcb3VqXu4XmQD6qbRcPyPg6WAYT17wNepNHKthTys4vpMTTLtiHfewqrBjkXeGXwxCppKB",
  "key37": "2Y68HSUcAYhMaen8SNs1RUwcvKnNowfCmFYGXp2uTUjh3gUNfhHGGvuv4sdbbp8P3juGjpCN1fD6sg1CmA6JXk3y",
  "key38": "67o5XMGB1YZni6XFMMj6nbDxgU6gfCuhGs2mQUUpNfYaSe7RWXudQ3geLy7mY1dWmHfCWDYhKffYGtNbFAeCBTZg",
  "key39": "5VZUWHP9Jm94YZGcq6iyY1pSd3pMmwMn7LASQa6D1KU7iJ3v5sHkSBrvtvozWEynm9pbRGpXtH82LWZnWH5yF9G2",
  "key40": "2PyBbnF8JN866WzkV2ZKhCQKs7bY4e8XBP2HnP8Wa7Hun91Qf4rsHHNtd5UgrMk4K4JC1qCT3JGjoKnLWEhSwz2z",
  "key41": "2gDSr4MqJUTFghq3FyMuvZR1TuyS5TsHbWwdAAGhupP4gemWFYf4FJYHzxUm5DDYHGgvkm1mAv6PoegbHcJQigJ5"
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
