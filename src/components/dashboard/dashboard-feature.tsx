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
    "2YXzJZ6GH1P4x7HHe8FMW7q4wrjHJAKgwrPLj4nYR17uEStnzPcN9aR53ujp4BM5fVdixXq9ry9qvHJgBFkf2FJw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RJj3HiQBejeahCip8KwuxAwgmhr9442JrysUnPaUxXEzKGAyFJKAr4mozXqKerGxHzbF52DWKNXQhB28joWgu3o",
  "key1": "5SbY7EVWkHHJpayS1QjHV3crE4ddpxJoRntgHKKW8jwsnzg4UdLTbvWM4vyLuVBuv7Y22jtYLLK5yyP4o86F1KpY",
  "key2": "2QGRcSV1YRpK6qWc8EPQKTkKFAMpTLLZydGZEFFHRUfXHNSReScoNnfDQhvA3ch1ntgk5Yddoz1KEvfcXAmh2CQP",
  "key3": "58kwimdLoFRAujuY8wkzpmkoKTAhMES1jhcSe9pAW92YXuPsKcTwHoswT4K4HWFjyomdKg1QSjjQnDAHFUuq6fKE",
  "key4": "gs66UqqNqtg5ZTREu12FjaKWXP7Ti51uWWn4QZZ2kfPuoxo1H5SaZxdfZN9y6B5WmTEA37SBt1VKCBbskgS3KQp",
  "key5": "2LLNeU4uyp6A8xMmgayPikmvxQsCbAdTHHSocq1kEUgf8tPUpGMKe2UL5RLL2bVGooLeDsoakYo39Cxo4pXDPt64",
  "key6": "3t2DHn2V9EXDozJqArABL2Q2xM5DqzNsP5eh4gFNn2uUKWZtghgJA7peq4j7bumCEYf6R5n5PAEu55fg4aiiWSa9",
  "key7": "2LuLKW89LGzNMwua45mdeEqrAoQgoWcGwWiL8vp6V9NLxTjKhUavYMezHpqZWjqfVp7dKHSBQavrp3oAVRRrtzX2",
  "key8": "4fJZuUvv5Rs4CYquybYLgoQF3NkzU2kvnJWQouASm8v4FPd6qdxn2Nv354ajebdN82i72E5NWoATe6vK96MuRiL1",
  "key9": "2RoBGo9nz83kdeioPupAxoQqz4dAHQAzbBRuv5QyThjF7XLAjsxjTMmhQR5R9QAkqqES2E5tX9yunfkmaCZMunAp",
  "key10": "57wREKK571SgxYMYbUTkq7YCDKSmGsxPkHhNR1ZS3qvNu5m7NqQf9GDPKT7KLK2tFcQKkph7qSRgdBVWzjbRxvqF",
  "key11": "447pyJ3c6gqE6iiJ42juegkBFWPZAjLK9oa5nVUHNxpr2LezRVuWe7ruiqDma7AMriH3GHWBNR1spgAtiLyz1rTh",
  "key12": "2urq89csMhvWh9P6godmBZM3ynawssidFd6aCiGPqVkE7End9YxLTbJvhWBUGPLwQUm786riQAVER4isEQMLntMV",
  "key13": "25xdrfZr7zPnLLucSydT1PnCDQq7Q3rEdVzR38w4N37KVdZacEBjCESFnYMZbi1SAe2acGCBrPxtgwpsz7b2UbmL",
  "key14": "Yv7Cy5oe6qt56g65heZhfSoZ5qM4sDXdeoq3cyhVeaYagYfSNeqHbgQyQ3uuEq5DGbYmejszbCcosUi2tmqosNF",
  "key15": "5ipEfFbXjCD5iBKrVyppkyRyAvUioG96Hvag2zk1KMtPHbSguEqbqUQcMX5FNdf82YTaiFcqu2mb6jVhjSihv6kw",
  "key16": "4aaof4aN6jRRexnPj3Fuki6vF8tf8CzsV7fW6f4TQBPN4BodfUaX5qPz7Zr6qvNVvhbJj4ajkQkxjiWFp3F1VeBn",
  "key17": "3LpHV8dCThf4wLdyFfyyyxuLFmf8w1ZhALKnG6f7ecge2zqhMxLU6YoGpu2vidxfn4YdqR1JuwNbJLX9NZgsVSE2",
  "key18": "5Sxt7J6aBFXBSZeU2HWNRDY4zN5gMH6cJTkhzFK8ge5NQK79A2SnFCpDDse3B5rKh5k3wEm1TQFitdHFsyg9hFC5",
  "key19": "2kUm5pBYYTFXUcqN8km3FV8BEkCgf4KGQnNB82B2WC7VsW8sVjWA4CUKyASaeQnASmPEA1PVmL6d5995E46sP8wE",
  "key20": "3NH3o48BDJXML45Zr1DtCZKSixsjr5ijQLNzP9s2f3mjpTq8jHund7u93KAmDYJd4moE4fYe7dM33EjieDQ6UW9F",
  "key21": "554jzA39jqaAZcQvdFD8UyiRTiFQZXeZtesLVodEdq4HhUzhdDPDQaiiqvKQ2oKUvwVBHZVSDnN1ugAdqErsM3vS",
  "key22": "2hsNho9RWR7c8Uqqn4kAxM5WkZMpW8ecFTWHptbfSw7FzTEc8TdUpoek3NEKVxPh8J6t9X8Ao4MDAi63sckA7KK1",
  "key23": "2ZKWCEsWLN81LgyhP1HJSUhLwpRh96ycRFyrpYHDWB85d72KSuk7NE8vMbVxCHuceHEqem3x4KjrhJh4MWCHA8Fv",
  "key24": "5PayMMbj1cpEFUb8WVWLah6ybNhhKFZKTE3SDrqLh9Epi3fdXx3cZgTu1yRJKFyBTHPtQ4eq8ETHX8zTnzgoFW9F",
  "key25": "5B7ewgZz9YXAzKW6NSAUZPciYhQNAgJW6Ka2CbYKaRukTjefhD33CieUph3P9DFtBpv7oKZWTA7vXdJ74nmqU6Jn",
  "key26": "ffv9pSqXggefSMFerWJ95ciKAoW2UdLjkhZ6mXETXTF1Qd29TeeYooXhvDCtbv1ujahqoDXM4PquMVntrGHxXn5",
  "key27": "5TKcwmWtv37d1ovYvhe9DQeSdCD6GkXKFvx6Y1hTJyoM4EUVGd7jNRzpJuosPxaZR9MNLWSoMcLbj2XE1pz2SNj6",
  "key28": "3XdbsMyUrk8T4yLggXpktwATAkQWTgTf15vuQM25qwNjBSyArwcndK2GDXG6J1d3MpqLx68cRLyJnSQpq6MLiVif",
  "key29": "5YmJvb4veLkHs2uEdxAquTXNJRp3UBRk8igEGzKwv94AdHKRS2T9HpLPhYmhv4XWwQwbfSr4CMLkf2c7UP3qdhbx",
  "key30": "5Z34sECGBvrxpC5VaXmD5yc72cBmpZD5qyQenyD9tizLHLJqqQ6GQxHVSVxWzuNTmAeWam9uvfXK2ZxZiaRtz64x"
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
