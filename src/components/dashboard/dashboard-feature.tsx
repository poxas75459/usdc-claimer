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
    "5uSEeq36FhR4cDXeD4PnjucX4b1KFN7oyTLBsVnhvPYUhFhoTzsMV2PYsXgeHsvpzysiaefgh8TFGGzBaYrfHigs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37b162KJUxNFkmbBFui9iYn6rF3MJS4diZgd2PHfT41yMA92xHbTekp6vwmfBmxuCRu1DMNQeVhABRXwai5cBzrA",
  "key1": "34kNd46xTf2sKwH7Px1SKLqgMGhwgLqsftqacxuseuNb9LiyriTwVeWryke2v1k2Hy1fFSUMrw7uMbdNHrckKy31",
  "key2": "4rkB5tqyhkz9kp4nexHCgwwgSCCqY23cJkLRrkmF3Cxiooe1BTJjd3481kgZcC4trAcB39RX6zASuVF63XqyhJin",
  "key3": "NyTMQ4FSAztuQc1zFG8H77DYiaxEfwsFwvnxCNWG4KMzqE75vUaGM1k1R3zbCJ9FAi4C4xu33gdk8ZRiDdjPH4Z",
  "key4": "3DjCY7TjdybTb4HYNt7nkGepApB1W3dwDZ4oqZmg1yk8SXxRVe1WQvcEvejL5XrqxTSrRJJWoiANn8JBqMbj5NpX",
  "key5": "4F6oQEiZZ1GypxQLyn7e98kZwttC95kFTwkJNP1yFY4WnoHGH9HByBCY2Ms96LDeoRQ68yhW4EfmUWgAHmx4JsUm",
  "key6": "3nFZChfhi6FxVxC1DdoUZe6XsrV9NnERLAF1EUjxLWNG4hncAAvENjaHAKaT4Qzo4UWvd4Ub7hdh6LdwvUAZbdqz",
  "key7": "RWFwqRnZXiYF7PpeHVKTvtRG86UvCMn3LCQKpmZaW4tGdR1XiEoa33TZVuFU5tsRcELgSPnppnmohmh67gixBQT",
  "key8": "1b3UjnPnhL3mc1D7Ktvd5fTZR5ry7SXQ76bmsWxSGnH27Ku5hwasqNMS9oL7xq1U2pdoXKe9Z5J4ytRgSiAgzEA",
  "key9": "3E2t2s1dqqhBtKguVnZMXJThuX7VvTu8KHazvv6CCbGQL5Zdn9Hm4xKdTQd7oPwtPpPTv8NRmFUMMtM7FGXMCG5A",
  "key10": "4vruQfBt6RvWNHQGfWUY4izyZNGS7ezj2X2Csk1NNtPzbBmV2ZbFbFR9x9msokAbffzU3Ubi7VhMaqcwaXdKinSd",
  "key11": "4BLEcoFTRKSsAoU4UHjjAwZRvTRkrvXgQYgDBd7xVApM26c77evovqAsekj9W66wHbNEQoZiaioygbHn5n6mXaFu",
  "key12": "48bB6WrefwKQ2FeEYVZxqUQ9ipQjKGvjN7BsYJ7BSB6LsNDo2h6g1VtMD6DjKwmt547couGNVJKDhxGcUab32Dqm",
  "key13": "5yCpfYUZmBHHPL1Dc5Q8jMj4x1PMPbc9SrQxd1sw4efFp472xxafHBuJ4vi5Bp1rHbV33zhXLSmax5KGapGEnXyT",
  "key14": "5WBNhLeW8kPDq5rV9bDABndyKsnhJ5RsF1Nrp83X8s6cXjg7hFpfK1131SPyvxGAo4AcUU3gGry4RDTGLMsgtXUo",
  "key15": "3J3sPYLUeKhR9XwkBgZXiWHkqAFLGKNZhoQU164H9y5NinMWsKq9czDYFLrRRTYNrkcY4VqeYNUDHqq6EPDSvh2a",
  "key16": "4QtTb8bMSuKfDZyFSJ7ffKEzC4Wjxej3KKChr7aSTpNej37HkGcPJR3uS7pACdqhacy2xpcpEv4KSJ3bDGXEq2xq",
  "key17": "3y22Wzf4u4AE1GRRzrYvHh5HrpMMik4N9mJmamgT41V5kTrE51UsBu3candpH99v7tWLiSVHxfkzGtv1v9yScV9k",
  "key18": "29tzpfPYLFpN9GMdi6V3dQvwa2NawqW2ahS82GkPZvN7uT3uH3W6qWGnjKVKQL4VUQbJziFAXPaMDipY56cxEmek",
  "key19": "Gb56wdHesPy48TCHHqjVUUaz1iFRynCQTxAQcJ43dK25wYub8eMwX71adGRudP2YXix9W3eN7LYAuqXscyPmjrk",
  "key20": "3PpzpudNfNG7bCH2vjDxHtN2uvThmgStuxFeK5N1xnocaoQu8G22pn1yRsBb2dqzabksz3Yvrz5ETNb64anKyy2X",
  "key21": "5A8n8s4EjgCtuXMCV4KyhmoMM7J7AS5gqNojgrUAs2vLge12UtfKy63cSEoS6Uq55AofRxASU61DR7mCBPwNDuDf",
  "key22": "LWQ5dcUiTAxVAwryaUKdcW5tBz6idojTcmpNZS8uEoEBy9RYxbq8TR7tepr8a5QNzq9DJoscyRJbm1mG1E18ykz",
  "key23": "343aPNtKGM7198mf6ggZuF41TApYpt869VwEcmCdk5h8Jx7JgXXJMUZ2e1WEA9cPWS5W6Ff8N1PPj5DJQ9dJMjz",
  "key24": "fgWtL7nYff6TDM8etR3NPtWWdBax1Bcw6Z7XVPAp1MZqdEtp3VDPK8iG3GsXPpqNbuJFtwod8XGXaoXbsN9uqZQ",
  "key25": "3cBKHkGuM1UEfkPUwonYZKhSP62n73nBCzCh1ik3EXb2Fos5J2N7LL6M7hWGQmtFmkbGoawfSuBHTvQPKt1sMSeX",
  "key26": "24E5AsK7uBUDSY92WERR2sjRB1E8mZ7sRtew8CmxNWkb6fDZ7MAziVrpckCk8pEYWzTycCagUF7AP75kzbe6Hcbx",
  "key27": "53iD5aAQAmphCbArfwBCkV9Ex2vE7Y7nRbNR8nBoukC2cKhQu43VNinZcixaEcL67i1HzLLzZkXDUmWMy56sSAqs",
  "key28": "5Ks7PmJj68dVJQLeLbGHPTmQbd8VZBa7mGsDUWi79RYFyYfBivfFSQFPM99wpKKQ5Mke82oT3Q1r6uXroJkNVZ11"
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
