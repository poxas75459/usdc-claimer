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
    "4ux1eFV5NbCezFT5VMj212jTDk58PWZg385HjPKymmUnpTyoNNaHEV21nfTqEazPjFiPSRvW4HDhjAV6CVRobKzy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DHEeABZEEZCvk48c8jhXmBMbtLuqLFSLYEJ7qeb3xbQZfL2uaqpKum6a1sCJbf3N3TbVL9aW9mie9sKB3nZN8Hw",
  "key1": "qLwj9BJpEN7XQTx1KuC1Z5E5Q29uNbf95s8zXUfoVdHnSXhKir8SMcSxjayH1zfEMCpuWK4ix9XYwEre6fonKec",
  "key2": "4dMz6UpKfnpcjVoZNhy1RxFjM42d28KbtC8XKiBQy5N9giQ8hBrPMqyKfAfg29SQ8iNJ9uXxGuvM7oJp2zxc9DBp",
  "key3": "exebwtrweL7dutpuSRSJgtZMyhNQtBztbwEWgk2DD9MUbHGVSnV8PhjQhwvbbi8Wp19rzhiKCh68V9FouGqXsVD",
  "key4": "4zhK4jJyDDA4uExbsz9m27YQrwPW7vtYjURa33Rj7NxdY9X6EQiHnj9T1WAF2yKthBm4ed8FXcpf8MaMM8insCaq",
  "key5": "23HVEc56dR4L2sad2Vo645qw7iWHHNZkG8RA8qvSE23VeotpBedy4GVKhnWitFmSsnS71ej3KojqVfpWkfaKdjcu",
  "key6": "527rvyUhBsafDZuiJWn1EPvojBwFzy5tJ5oxERDbeLeS7b5Vgj1255EGbmrbL6XMpC8NpkbXPYhXhLEJrauKBmBX",
  "key7": "3vzm8xTuPosDVUKLnKrR1y7JKTfHuqezjz9vLFVJKw3qGsG7jTakDw8csY5dSP5SADRkLczbuoLszBVFjrDH8f3X",
  "key8": "pJifjPeaKFxZytQMo1x6CDoeTvzZS8AP5fScYqsPMJBcyK2o9uoGPFhHBDFaiJ8Eo7Ab6GfTV5479vPLaQEUaSZ",
  "key9": "2BFRU5tps9YWrTHTcQ2EXmZ5qBioear9FpJkSaCwnZgLQZVS3Ah5HQ1S6GapQ21Qf3yrPC2DvTwnZd3AsTjYN6Wv",
  "key10": "3hzJS4MKFHfJfdS43YLZAKXLFEQ5K69oFe6szW6hCTtWXp7seUQrLYW9kW8HCGBimyCmFk9LGBDNkao18Qw4E6zN",
  "key11": "29UkGpnKK3MctBhFGAxBorByGoTDA3niQtgG7jVHqzMZznsJepzhZjA7d18XT9JJhpZACfTLHsntTkXLxF1wkYPe",
  "key12": "2vJAtPFS2mwhN66NvhcTLwN8sr1xaZyuoaUGbyBJQZGivGbWWpzESwpGFVbmUfPPKt9BxwqH79AJyUWBvjf8YWrz",
  "key13": "2sYpBrFFW7Het393eCgsgfk29eKZ5p2Bc1uvtUXLgBYyHJpaSnKb4H6ao6tE7RGFcMe3vUcavhtD6qjDDU8T9kzJ",
  "key14": "3DkSjZe3ckciXgEGjbdpVUhTGSwr7aAvQoLoi4bLnuWNv4MMeGXew7FMpAzsTuCNmfwsENYeUwntVN5BJY1hELnv",
  "key15": "5N4xUSK6fmHAaCgkSTDMWBEBQCrNikqfRhQwoSthQ7yFAojpnvuEavbxVydLZ4EV8QabRFvhdJMEALbAgfs8MD9b",
  "key16": "5rLazogM6rk9BP4k4jurkKTTepqgdH7Fep5bTQQNWiEWGAJNj3XbWwtNKi2Jca9qhGFwz9xLMcho3mTTxfkMsvKe",
  "key17": "4pa5zdNfjvk5AidBSiFUwaArErot9qAYDbnkid1brZsYa5PhMLQ3NY8NQi869Px2qW6Fpw8C44qhyJK1xx8KHL9i",
  "key18": "aHhVwJPwncJGExcYFx3DLPeuPDqEyDpy65i7eRnx9LQLTTfCurRn5KWBpGb5iSfr2NNV8GyyKsVtR7TKpkzp6Yz",
  "key19": "3ppg4f4BS2UEjhrFPE9mb4n75pza45bmFWXyyQYsQ7ikx2sGhn8gTXqDAByc7cRgM8CXzbDpJ9jgGSTRNDj3o4MY",
  "key20": "4Td9LxRj2Es6LT6Lcmzn3iL2z4atNctLBQ3ikENHVL3jMrn8zDqCf6Ej5QMjJGGo8z4EkEbPrwqaYS7gH3SsPtoB",
  "key21": "2r6wpsyKDfD5Na2pEsFanue36BwynWes7apE5V3NjQ2LiKNHgNqZzpk549TkhCe2CAoZ5CaJEtFvJMVQiDk4MsBb",
  "key22": "4acQ9v99iaRoAd5aZXADGFeyBE5rf8MNuQGMa8dYY3qvbuzcjh95cQJtNUzDrERkuJzYLnUzrCEjFLcZBjabWG5S",
  "key23": "5LVciuBRDSjDtBH1CsZrNjSrwYioyKYgvQhpAz2SJicA6VkFUk6J3eqNMPuGdhc7z4LntHVHFAa5gJeZnHo3ACM6",
  "key24": "4zFVAEMnHrivjgvqHsTJoLN6U7PNjgfvVXZMCfuvr82cQ7QUhtEryohTwKTionPyaYtzwWYaaaKRNhTdfy8q3N7k",
  "key25": "SPN6cBFN5xYdm3zmbrwXSTjW8g9XrmyqEXYLH1R4HqAttEtwRtv1H6XATBptJwQ6w63VQrmwCe7akcAiinZZsra",
  "key26": "35ZbLSRdDcUGA8eMgNcPAxBFndYkWahZx8GXUfxV2TuHF3YBPyZ9tyfmvresNYdeMhYrQDWT7tzwvTF2gVbWRuTe",
  "key27": "5XUqFSTWZ744V1pJpMhjJahutiT4h78TZsRfdqrH1GTFqfsgoUHDKouaKn1xsNwjzLCGV7gMGxmekrtWXQQhYD9g",
  "key28": "9dha77LRaj3JsNY7CiLksAimNHx9uim5EQBjskZkpxZV8QhfsonvzEsBmtXm7SYYEr6DdH3vBsxPbAd8afBb5DK",
  "key29": "5hNhGkpziTwqESDg3Zk1j1gPMs1fCmALKcQdhgX5ADMX2uA3ZtzriKsUE1mPTzf8hbkvWBgWC5jYbe41QMtENugN",
  "key30": "2wnLsHCUuJuKu4ZuyfkF5JLGZJsmXfAHt7c2umodyMLeuT4YgzNioLq6nDtX4cDAdVBFtPxXSZ4d3FabthHGDeAL",
  "key31": "4WwkSSN2rkEXTVfFaS25Y2scUrepKEkrGZ7eoVip37joQzHcFNKi3oSmRYKsCDb845zSoP5nte1cNSyMVQEUhPCm",
  "key32": "3ujWoDZBfbftV9TdZeDGoajSNu3CjqNSNorvcasaJvSkprdBTgyQKuiWoBi9KSc8tgVM93aJywhLR96Q14poHfJP",
  "key33": "2SJRPNCPMxTvJWDiv4ZDXn6DxrbvGHAKSP8sT16yD5EhMiYAwfMD1qXjnjrfXPGNaUuNce9cUHoyKBoYnxzUAhes",
  "key34": "5bY5Dj4AFUoFkM9nFWLizBWofVybWQ4t3hzmePtmJcRsL4KhKeJf7Lq7VNGDKS2F777tujJN1cfFByMwg8TAs1bB",
  "key35": "3WrCoXqgrzGcoPETPLFPeF9eHG1B3nns9HCvhs9LDQt1EwJwvEY5Bd6f2oMM6zX1wngaqdYpVEeQvMA9Sjb2xXTM",
  "key36": "iBpZGN6LCHpCNU3MpNCAdbrcNCTPcp3X1NXtuL849k5qNanxxfrD4YM2b85r62mMi79SAb1io3815Zkym6ZT1ew",
  "key37": "49Jy4aqYTV6aBY3nStszMM8sXwWVaMts85kt9JgsLhFGBLwYMuYcFMhVSsHkjAtnDjctaLjtPR3eTZWJnMX2oysv",
  "key38": "4wrnYUqkvuGPQXTqgGWzTUggFoth5v7X3vZcL7TyxiHVGw7mR2mDN5poGq3BXGhbyaTC3Pa5Ygsh4CV9gHXRsMDH",
  "key39": "oGEyCFiMqFPd9MbHtg74iUAVJaBJidnewoiYnST8LSZXQpVZssDG8aVRTN2uSR8RghfLpSa1d7WzVYjXRmgyvcp",
  "key40": "5NakhXuawRZMFWBaRowgJHJQf9mDWfcqM1CM6BJX2osLHwJZqRHgc5Ph2pKXvAY1UrGFdKRR2HtWubkT5nKXHbdB",
  "key41": "2aKfPNzwo4CgDW791mwUKqpvFJyEpeEt2KHoACSf26SKBuCa9AY5J5aHvTJ4nQ3C8aaNnmhmJdtJ6gsgmWDobu8x",
  "key42": "21TKNkqvwGHrktND17JBJVhqmayohfxPTebdNMMKPLyv55ug3mPq5ciPkLTgC55RPgUQgMHnZSUWLBpsWe9HGmGK"
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
