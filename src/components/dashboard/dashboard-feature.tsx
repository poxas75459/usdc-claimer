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
    "4aarKWcZH6RRBrYWpK8RW25HvRJBK29gHjrBNpi55XmJLbHfutMf55LYyfHsSrLtvw8BNjN2ptu6vmnxiNUn6eu2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uA21otJqFZF5imRytBF7SPjx6imYGSejPxuGhwGKgmesQLvAsg3SGqqJFVBxYRAp8QVCUN8DZCoJ7SfXNMPHvPT",
  "key1": "23arg5UCgAb6MCfES1BLm8Zh1KvLDi4twptq5yuWfkX5Cg5xWWLE3DuFwUw1ueMo5u1kA6sAEVyy6Ckenumuq4fX",
  "key2": "HjysVNiZmsJkG77NgW59w2UrEuqvJh7g1Zpmg716rAhJmZxTTL2ZhNptWq3DRxzkh9PFvd8Tf9Npjv1saxMj8Wc",
  "key3": "3HHSZK1t7tL5U9AmLY8yRSJG5q2TpJWRtwNC1oeQmzwi3PCcL3KffXTDomBpaPRqZXS4UDXnz2upKQMKQ95oLGAk",
  "key4": "236EX9z9QAFpFpmqXCPRAwwQHNzgzJmK4YpRzHMMnLA8zp7jXqJgP3LiwZJui4pSPpqR3RVM1ebPJ667rp69NsmE",
  "key5": "3KJj831s3gswLUdKDTQbFmVK4WELErehYPVEtM6tEsDZjWDJGyEnevJq4Z7HErqieg7MXjuMLwDY4e32D3wgjhQb",
  "key6": "59qZcK9eNfxAcGASn9cphsgCMmfy9BbQj2J5gqNMmuY2bSsEsArfYmYecB4y21pvw3i1wMV5VZkdzcLeZydQDvNt",
  "key7": "249ApSccRkqRm6pKA9KxzDzymmYctGiYPW5Mz17Vmmwq55WuB376cUHwpVMKT7LZZ39HeAnzZtEkN46wjLVgFxNn",
  "key8": "47PuzPuGMbfkd4zaYSgb3aDFqjMjauro2fPWtzVgLRszPdBt6k9WdHpTrWu55KcKzeS5oRGrjcUZ3Ds9zjMimht4",
  "key9": "63FsDv9Sb4PZvJKtZ5JgF5VjrWKYbAxH5fDV98jkFKi6drbR7Ef934YuNDCxeytRdf93JB9tobGokum4oHi5RaKA",
  "key10": "5GKvLjPgNfXBcaSgpVHg2ns6vbneSbYUdqsRTG2vgyGovYhb1hUZWFo8Vjb3PiPYf7GiusAdxf8Y58X89Yvue7aT",
  "key11": "25A5mnHKaGRoSjcikjfng1SD3HZKjHSstLpiF32yH8ubai6ueGrsiqEBBbnznmJWaef9EEVpckPfRD8noKhaGXnP",
  "key12": "gzxw2CQC5gYiuL2KsN1QMDs9DhXQJYFyByxzJt9bosAPW8HhVHWokBuS8a3C8yoGsGH2BeVa3x99CQeUvwxT41X",
  "key13": "5SLVyqWap8qmxYk5oWmZVwSryAAbWPijF1vpZE77EYjLfycgeUBZU9amWzuDdFEGy4Qd6BG6Bm2vZb1bKhU8ryci",
  "key14": "SXjQ5A2NPzsFECQusnvNYjMcM8Xacf4R4GnM8cTjw7XQ3Kyiyq9taemrfaHntdjMApbx23uPx2gTB3EqpeyYVvc",
  "key15": "35HCiRPGp9JoKhxqiDhU3NBmx1mJKAsnLNf92LxiMiPtrYWWtoFGXAGroUfR41ta27gz3ZVkXg6Pgyw3WRB1VDe7",
  "key16": "33GYJsxg92Ud3L2jTevrJxxpacf2kE8HeSbyefdE1Etp5CEMzJupQ7Zrrf1YaYC752g8QUi2JcwTdZKbSzJJp6Vh",
  "key17": "4WpRAP2wSdg4KL8SH1VETZGdEgorsUbG9v2kDd9GakbwXHTVNbCEBnymwDZ89oX93ELcHs58FbeX21YhWTXC3qhX",
  "key18": "2B7SpA7yn5vLShBeSZem2SXZbB5ay2L1XYeKMe6HdtGHY4cHTh7vxFm8LNQqQhxg9gRUhzHGKqU29FjgSK6AxPgG",
  "key19": "5tFbCzPGLynEZML1QghuhCXhQv1xFsaaxdxnMHsWQTYFX5t72J7N5itczhWedoNxpn6YetG3Ac2g3ifLguTTALHr",
  "key20": "5sKEW7sX3MvLKQEtUYV1N1heN6pusB8Xtww24mz64XFSdFXC64VJJ2ZJYtMzi54rATPAiXDtZ3KNNn8dzYYK9mtK",
  "key21": "8o2pouGrtLWh1FuAqDdUHPaBrBRQKEyFQS88hHg1QsRkJ96b9ygVmiHp8vvuDFta1XPtfxRMWR9ScVXjxuxqMUh",
  "key22": "4vhVCQ9kYvR1MAJvmwdmC8j82fK25nT7S13TXMdVr3toNgT6aJQ5UryvWcMy59ZG2bFx5nPjnFhRX1uPfWtG1QoF",
  "key23": "2NkftrwRxQ5S4sD418hB7xhcjPF7UgGbk9cKyMPXxJVJ1mtpxamSbtzoj51ESH11zoczPttFdpX9B5445GukvthG",
  "key24": "5xgd9QJhMTi8pzwBZTx7Nro7kuvGtF6DJWMT9R2F82QaeDMre1KKKwR4bomDRUosqacVyHCSpMnd4D56wyE55Q87",
  "key25": "5i1fdNMbJN1mWipt53JMm8pAag4hn3QRcJpk7LFaErbMaNqvn7DG2tiwTT1149CEZ72viYDjqUbis8WwhuUGkReh",
  "key26": "4L9BdVDa2icXkER2bmwe5r67Ly4SGn8DDHSqGGpEoEg6NBDrEP4Zcz4RKWYdANSjz81wrKxSxwok9eveTCMLCQSb"
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
