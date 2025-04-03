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
    "64Pt544YQEz6FT3NEbBP3ZjMvyKbViSTbjQhp382gLS9nD1Qa1HptTZJmuynZHQEiyouRtqyRJsBWsC1M8Sw4Cku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43BNhfBDKPewMaqXHywuWo1N1hZpEcSczpJXsZpH8oP1L5hT6xX3tLgfLeSK4JkToBdsfHqfRMMCtzXKULntiHHJ",
  "key1": "66mugWAjZ6PiokKWbpW65eCF1QGaxCQ9kmpnhrDuyHV1rmWKkbhZDPgGuDRohcKiWfxbKcqtVfTA4MQgfCFLwVz9",
  "key2": "WZi1YWC1tZPxmdfHbtxBsQKHMvgzEcRE8zmwd2FijHAYixPsn7EkGMRJZ1j3ZFEp2VqhBvS34LgRm9BrDiYb2CE",
  "key3": "5DaZeyvKHYmUapouL1E7zRVt2Mq8jGmXtmgFMB5tgWZLiAWk94jHwCZCiAx3V3gziHjMLdmPoAZwJhMeUVjK41Kg",
  "key4": "oxYQdmLQuV5ybi1npUUXPmMyBWZkjGvsC43nHFoErHr5STUw2RsxyKUWKvaqMcwYVZZZCvm18HvPsBs7PJz8JB5",
  "key5": "64J39A8hHi1t5LPfJq3TUYbywY6fP3yvPk1n1acnA3mUhRcyM2sL8SnW27maML6drZc9fEwo19mdZpkncwgQbMCd",
  "key6": "x35oB1h8MjZ7L4mYNksR37MxCXtSf8rTYf43cbdFUyQtB67ZTWcwDboRHmtxJqNDYyeSFnbSw9VjvjumWnwzU6n",
  "key7": "2jMVcCHFfP7uaD6aGy1G7zFj8cyvAYS9SCrt8e1QVDkwg8NhHkbbrPfie4LqWXAKP5MqPpmrnCeqpNzSCVNKNaEU",
  "key8": "38qESddoDLUMiFEeiu4bm5S2S9NyFbZ7bFG8WFkUNXruCCT5rCmTs33ghs3wncrHJjJYTqHRQD5kGpSgWC8Fdkvy",
  "key9": "43LjzKVArztvTd7FUYPQQWQwb41kDHuatTzyfXrD54HG4eL7LYLzpdmBUGQHSQ5uR51SayP7Rjo9cv6aJPkB1zvN",
  "key10": "2ctMkPXXZm5qJ7Eg82aBEamUJ34pvVBb1XMFX3rc1ZhHXPEuKAAXr7Brzso3nSgdZ7RD1LfMRsu2xXSUzw6sRcvc",
  "key11": "2vzhqQSwUaJFEtnkCUQzCcj7weeMd2qyPtzf8AkEyys3DVEb5sRHASeVGUYdkiXDLm1HM66GUQzx6mbcLRp4yFoP",
  "key12": "nZvHVAnfoYjmaURRzjKo6RAtbKXDxCyZyVpgKV65pz8D83L8sM7xCg3Urom4jsHSoDtR3ZTymGXjpFSGXvbzojZ",
  "key13": "4xMgJPZiT4WKZCYu5QJavj1hRCfhBUn6JV3ueBABwRfuMBL3Qxg2fogBtiL77QquvTvqRbxMhd9KX65eoA3bV6vn",
  "key14": "4XXXKVvY59DwhC5TdYqA3aznzBFS1hLEpBCSqJ1KRZZs95SVqaLPC6QZEbckK8ZXTPDHBQ4i3GiJkZdvgj4rvUDZ",
  "key15": "VEEZWHqffD5WZJHu4aM33vrMaJnLda1F7T22YSCAtSfY2G49DzizwLUqvpjA7Ed6P1vpxMB2qeYRkNRBQVafBEt",
  "key16": "3BKUMMNaddMEcZmEyk1oh354dPPrZ3RfnbCbR3GnoCgz4XL3mcBVjBkjbtUuZjnkGDoJdCbGabKTFyD784txjRS8",
  "key17": "4yYX3UYJzm5nf26vyBVYQnQaYSfx6Gobkeg9Dk7xRwjHbHoQVwmP2LV3VfKUpHQJbFqYkpr9BX4Ef5T7H1WkFUfH",
  "key18": "YtXVzNWdmhuHNHAoWLGyF5TRE4p49UPEEh4CfFxCumU9AJnq3FZ5LkJ76uCLx97FThrWh2T39hnYhqH4m7TFnMS",
  "key19": "3FTEqBADCZWfBC9C9MXJ3E74VHJ5ow3KBFwNynewwbe6TpvJRMWCZrb8yVuC9j2CtQw7aYnY6aTgAoEy6sA8yoj3",
  "key20": "5WGTbb4YpgcVw8KaC1H4XXY64ZgJcMcnZwmjWkV1qiwpwuHTgv5iqsBPSgDoAWDN9xqiWoUERtZsdcXo3rhMPTbT",
  "key21": "RdJSmiZtAzwVgr3vnXd7EbUnPJ4bj7Tu8nDyy69NBEVHTzrXpbyiLED2UWtPqD23mckQ5wY5RSbMsUfQVRVpB2t",
  "key22": "4hFE8ye79EfWyR7AJhEdzWSS7i6cUDAkoHkuzNcAdzru8doj21DuNM9kfTA4mf8TMn2yQbmBNhPExszx8gUqjDLY",
  "key23": "3aouYkpYpupZPF4YrMETUKaL5SQsGvN6FdcZS8Kbzsczjkk7r5fAZ2CXAb5oNrsd1ZePDkW8HcoUhiGKYSQtBv2C",
  "key24": "vWpiEUcxYXLM2UU89taspWCRvUGQ4hpMnheFAb1eCfqDCDJqWyvkWx7GWhFogbKuh8yYsKkdMeRVC7bTXaYYnRp",
  "key25": "3oS31stfj9ZRZne6GjoTsJmpFBRwsjFQJkXUT6eee8tLJsupkATRfvD2q2ubwKhYhuEqkhYwnAAdyTmQB7ASp2ii",
  "key26": "ijNhALit74zXCvYMe66qJDWxYARFHLTeTWQSMcfsekz85MhnPJZYn38fyVikPmCtgvKCJxbFY3XTXsCkRU4ii7M",
  "key27": "2aaJXms5HpQEmGaRVdkARpjnqjr4beAa3rWnKFzCP89VqhgeWtYiU3fH9nUBNstTKXZ8yFX5j3ojtPUt8V6Mu16G",
  "key28": "3jjvtih1uqUanH9Qivpbh8PYLWXqooxY7x4FUauGBHmteQavQhkf4v8rJdLULLBdJ5BKfxo83PRMeHCPLypqtEUu",
  "key29": "3Np5s78dMprPz8hQ7Bc7VTNvmMH84EoNGsahFRBtFZydmi74UPCtUvs9ep8EHcJfEABb5qLLPQNHWLSx6rneWhNt",
  "key30": "64sFhodxpUaNFcuuaqkScpT2kxK1gnWmNTindKmRzxjGzNYeyBcsX7VUtw2ixBt8cHzMahNfyHGGN7hbrR3zx8q7",
  "key31": "2umuoejUbBvP6WRtC7SaUGQRaiy3hXm5ZigLmSStRPuSnjb8UQRL57nJ891dTHG9R59RPSDTtE4AwgtAmR3TtqSz",
  "key32": "3cDn1SRQFRVdL37t9k7gTqBNSLih2jz2tE9i24KWCieZcpbc9DSEd8fTTnfj6ENsdZ86T89kxEzKcak7pSMHPx1m",
  "key33": "47kJDs7YsKe6mj9fJ72Qh5p96UAh5kBjU5BGiCyo65W8aJSQfrZLzR2RKEWG6zyERceEeAtDKWPTq1siXWTS4wQR",
  "key34": "2oEEsdwtKAWafF7WUevHQNENJJzcnNhE58gLSmnuiaAFJjSFM6XSqVCMqA2eSEgU6mTkZC637yG12s65uH8PWPhd",
  "key35": "2nuv3G9QCD8f3M3CV5Dmg6CpuuW6PPc1y7YKbwp71e3s9djvx9gwkB2VoZAZaY4wGmESCZjmMvUsyQ9vHRfk5xDR",
  "key36": "52TL2Gbwgqpz6JqdA7vY6iiWZaYBwaSo9w3ThXCiTQZtuUhyCwsRadNzpyQkhujaarKFkMfCvvW7A9EmL1t88DmE",
  "key37": "3bDhzrQAKoeVQUTfLjANNmg2LvLrpmAkNkjpkYxTfhxVMZqMPGGbCgff1QL8FQQEQ1bt6zD1VN17xgTHJq42W9Q7",
  "key38": "dv8tyjFanuYtdCtAXSs7DocmQCkCx7wq3X17XoyJkmaYX2E6gpWAuMGG6iC5Tcfq9FgpCmDCc6iGX6kNQAWQ1yX",
  "key39": "23uJ7ux4rSgiLtNtQTS4ykpcFFACLKMoSSHkTy8zR89oqtkWeuQNoFdPcEkFeAsByTJyfyLsSnDjqZ8t2Cmenyr2",
  "key40": "4mYPWD9HPBszTYo5pp5ZYGuTkv4utPTa9eGuV4rPctJzfMN6Exbhyr1V3SrrsEh2VpKYqsMFXqYWGwnw1XKiX8q3"
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
