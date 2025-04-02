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
    "62AKDXtDAcT9N42pnWDgJZz6sFvn9qPmCU8FW4vcFG6YyDMxFRFEQ8wYqx4FUNSq4b8EVEm4P7qNL52kKd5N6s4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LDWLKPrZ616r46vkAH3Xv2icc1hQy51J8YpxeLRocjuB7dMymPtap1BG85jTe2kms6Ux8tjtt7KkiF9BhmGTPPy",
  "key1": "568o9Urdz8PsqmFQmiLcX1gdBY17vkV7GGF6e99KLwggS1275tToMmYGFHVC747AC5LTEvWJeXZWbdbtjRxkrjo",
  "key2": "4L89mLy6BvbVZWxjT4L4W1qwMKkXrDaDEL5ZCu6phjPCVgpT76bvYnVHs7QHZ8bH4Xk7yq5sLVcxx9phGQWzzLTw",
  "key3": "59Bu38PyQPCBgNGfZU2QxZS5YWh4p8ukVaimYS9AxujAfTzvKaCJ2mEbAfx2ogDAQ2z2avoSppWCj2BtrRQgdetw",
  "key4": "53qVVozs8pQ3kMKU4Rai6W3M5XYdYB5Y8jiPPq2hnASDpmJ69KAYeXz3kLhfPxn5LFUqtiLipYTEDUkaK7BchDiq",
  "key5": "S6YECepzDx9eQzi2CYuYUpPkGi1umUP2qK6n6hpjKaYq7UqjwJgLLbhwWGb5JdLvcx4ebBAtfeoAwy4kGu1Re7Q",
  "key6": "4sFtaX4Pi38Msmqc9uDd4E81KVug6CBDb9hZTXmdZ6fJYdLJ7EAEZ97pUZi3Jibk86trweYUyELwQjSC6SaPjLhj",
  "key7": "4SqjjN5B9tYUYTtQkRM8QhqDC5MTNuk7uR29SEXRCZ1bpBmok63gvGyQX71GxCbuJdzARB7vxNucfceZjyLJVHAw",
  "key8": "4o5TwFHbpmuM1cZx6ovn5hUyik5CtxYXNKeWtRurN9dGH3eBRNAfCdYmUL478ZA79yttoSLofCDspEF49taRKUoW",
  "key9": "2ZbEGRX3Zkrq8Gw7kBFV4xRyZffdnS4gWfumgCRjkfHRNAz3pvp596PnXrMxJBcttCzw1HFNgqbkBhBAQ8M3d3HD",
  "key10": "5HjKg3VUjjLdTg5Lei8iAQiv7ypoRDiSRyALsREkTJeLSShBtSY4CMc7xtCuT8C6GkEerNadbeHBhMTroyuDLtwC",
  "key11": "2zLx9A5WBjSQYB4JmBhqkySEKrKKQ9dsD7WpUUvpw2awaR5eYjtLedaLoKRfKpTD8UcF9zwd8oAAoHD6RfKVgSop",
  "key12": "65Z5yB2dsK8WabyG1pihtSBzfZXBKtCyVEWa7TGdRSj1xmzTRhCnQfU8tajbJi4223uA1fvtqfeLMKqdMMYpFNUn",
  "key13": "5PpwKBawU9FNUki88UwnW42apvd3LTottBMagDLzspiDGYupy5Ntb1nXhKdi7Xgvq8JPsvat2StHxsgMx5PLh9UM",
  "key14": "4V42kPT9kcdJaGHfRdWmsJUm3dSRde3EpPRsqMuFgpGrX8SbssQ6qUv3eGJteVWUrvCtqBFVgvaknLh2HgLnEENs",
  "key15": "8KsFzoZaKmkqdrZCr48y3FyVgHYhVBYMtKab5kD3LsD5vxZ5T9NJkW8hwPDedRZR3GE2vsn5nU5vYSHXquQRDX9",
  "key16": "612NSAGgnSQob5KHYAPoSBtNLBsn1C7c2UB5MadgevMoYdEhAS2WDCbKwmd76MzcHMp7ExWqG9cuiyUdZBP9qcZz",
  "key17": "64aJgDLh7WoVgfCa6McLXrLR4MQ5Q1YsKt66G3tWoJscKH5dD6an6LDiG3KNQXhesyrFopJAZNuJ5g9CSGshNCkZ",
  "key18": "5wH7BT2mEkN1583zfe8dKZVkTzdRvpJWdW1f5M7UWWigG2ZpPjjqaWAyaPe9pHcN1Qq9PAtYHhfgdS3MG3VkWJ7X",
  "key19": "4Mn7VL1YKuPm5ShNX7dXJCv84GPyWk1Cy9bY4wPe1xiZihggNbrgZF39YMcFdvPvGR1Gg2U636A3xH4Pzc9t1FCb",
  "key20": "4ZyqV3icxC44nQzV78jbD3L3ycbC9puxjKYysB4GZccNZVaQ1ye11FuD8EDymKu7BEmRsHGm6rJu3Nqq6uSUTjgZ",
  "key21": "2NyJmtN9NNh8pfpkXGdDSgmxqLGAdNZmct78CSrEwoATWmFwxQHe2DW95CXwgQDT2R988bPK4PXWNr8hN15LQFYm",
  "key22": "4K8jj78mX6AbPuDtVk2vHpDxPvBK1EMScp7z2gg1j6d1uxY8NfCc6V95oQhtz71w1TkKbXYqUHquEj9cAFDLYzhA",
  "key23": "5nLs8T7ckSZVgUH6v9EJTSezASQLG7DZCreWanamt2oYGhX6FfHrXbEcoX8Tja6GcRSueHgRvgroBhawYJzmpaXL",
  "key24": "uTW21BPsqknZqUVb861gJ7z7UM2m7NnhhZJSfbQnBxwJ2YbBtcD2EBf1Z2W8bTRN16khBrvw2FsSfnjBnYDdJY8",
  "key25": "4HwhVpurqtFbDU2fomPpNPHYP88RDJ11iSwxvs1QtAre8cFeioHVUfNLyrjbN2tV5nHfPszp8sMjyNUBPDRW9vv2",
  "key26": "3DmUrUFRb16AcMXJwsjErk2Ef4AmUWERjZNgdnkvEDofFWfF9hXV7AvyfU1AEwiq5RP1DZ618owSfc5RJs7cJoHo",
  "key27": "4snygw2HMLBxxLmNiFxwT1wY9bqiisUbNQA9Ar96hUZha1UE1nXGAEdLP8hFAsUwnWNdZYwm5DBmvBHhXupmJuW3",
  "key28": "4VULkrDBQK2oCMRF3dvkHKw76yeuDraPBA6HWjSzAkPybxw1QXKNJdLCc8wAHdgJhtruvgnrSkHkkVHrXDNyFMbG",
  "key29": "W3WRKeWAUxePVLmpzEbj7gwRf3Wi2cUGzqqKcRNpYmU44vVmgMVAetkYzJDN6GkVNGhY8y3PWFWJ3vV8f2fGyDT",
  "key30": "48XE5Z7tZX2sf7KxWJEXS2LrEpDgww16phN1atDoVVoZ4fo188eYs56RrYKu1RBhuWKWMAD1S5rJTKLmiPAobeVS",
  "key31": "2Eaa7VhtkATB24n3593ZrnAN6qAetDb2rcj2SyqS5JCsKBz9qRJpdyuM9QetUNgMAPEDLTUur9Bop59RppfmUSQB",
  "key32": "4F61c7a2cSHSNm6FFKKQyY9iaP31BXBb8HV3mYRBeQAxNUi2wd81hoQEPSDg9J8hPFQVeJKWbRBaiTiFC1TB9Czw",
  "key33": "2fS83qy9DGqu5XF8dH9JwqJo8spUZzfN6cvYKV8vhq8YTRa2pfgra2YuS4hZHoCUgRq5phkZ87WCuAyXjvRYDYJ3",
  "key34": "2yJWoZTePUAhtPE939WJpPPBLAiT58AkGWiUA7ZKKAy4GveKFkrfu19kpzVQ9o8arAWutmGRvYcEiDunvpKtEDZf",
  "key35": "5Yho9fSLgDxWyU8cF4VdYTvUNQNekTdh2NcMre8cYp7vxmvjz2EGoT1h1EjgiQ4URGUcax3UakzWFRdLcxSkEtoe",
  "key36": "5CXYdBED9Gypr6DLMK4ik6bnNVTMQn15EeiMcATMiBPoc75TvAPKDfPPgbCkcEw9s7UVX7TrTzPoXtbZqo1qELJH",
  "key37": "3UrsCQgyRNpPt8Akcs6ZuUwVAnBxPXSg7dbV8oY1WQFSRMnqYLfVBHMAD3x4621dtweqi4eFwcaFZTwk2o41BbDX",
  "key38": "33pqBWGagmnv9ShekX5C1yLPh93MV7nMHQnWxN789biqugBue7tqbXbApiYANRT3bQsdRLQauZBe4sxTa9P82Xam",
  "key39": "1Sf5Kvt6FFg4ghu1offNKwu7M8mn5J4M9xjaMePdpWh5SJRiLWjXJVhWzo6beJrrUNsuTsn8GfoVQR9h5tr7wSZ",
  "key40": "5Rke3jssX1pZ8D3SpCFNs69iVdc1tkWM1pTX8dCsyofSPND5dbRXaJoriFicuw2aSDi4UZ1ymUnJUwzxKuu7pY3",
  "key41": "2bgCPp5JoR5jDUVEyTfGje2KM7Cd1zgpbQ73KbsrRMLWDhSGDyn6W4TF88tccXGtNpXKRR2qAbmScir7haqxfsxp",
  "key42": "4Qtt9kEoEezSp9CReym5oQBQMirpXtJsuGebXDhqkrnPy5i1Bk8ctKajxUDZ5xAgGKcSFQQs6GFvvQQZ9d3JHqiG",
  "key43": "5BCeUvemZcutkeQPWhMkHkESZkHkxkZjdXhvx3HJ9pjKNYaqvFZWfUcAbcaid7QCgC9iT8Sp9YbtjNuxCQo3xMMJ",
  "key44": "2mjLh3jGzA65oit7uqEThJZm4yGr9nu8pGLr5Xq5D8qweSXr2dPgLtaesm6XyPq3jgQAncUjQv3uwjS3pnpXgVJo"
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
