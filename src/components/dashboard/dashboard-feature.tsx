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
    "4MTm8NbdKrPwqpaEsiEdQSBMJfFLooQnYAS4o21qJT8NAcafy1FZ38Db7C8eYxLiRi1ft6no6evPKNsjYrnZCvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i3tDUc72JYzXrgFjFknKYvf7WBNGJDPwPWrXCQpawN4vji9Z6zhx3RJukTsWVUujXRNdACUnrmztrZYs9p5uHLe",
  "key1": "9XBnuWhq9Muf6uUrRDoA2aGKr6Hp6esBWhJfYncbV5afVUkv2ZjB8gEyrv3HXtMVcaPA5nwzbPYyGC5Ke2ZRdKy",
  "key2": "3syzNpq4XCb99qmruw6DKS3iT9jR2cnSF9yByCpYfH7wvqk6H7hrXzLu2nAmFpsJVVLuXR2jGwfme9xee7qwrZrM",
  "key3": "3xyi9ecxpe3fvLzjpkk1oVJJQfnvjGpiE3qfkw5QH6nGd13GW2krNo9YmowWtRHof3kiLxNUUSTqR4Aeh7MV4VP3",
  "key4": "14Sbap4i1kr9BYGFmPLxnQoMNgHEjxX3uXxMrZsxaJV7eQP64vc8Ekjhhp66nyBTjbzL83wVD46vUF56MAMkd1C",
  "key5": "2En8yrNKt86qk3Uuag7XmLfYbnEcrJxEVfMxV7vr3CyahfmZ4DUWub5KHrTvDVNwJajemyHpKQg6K6tu66ucctTU",
  "key6": "4qysdyKpeZM2FAdnX9Zynes2FhWRfgzUAKRtLraLRtshCNfcjVR4htt5KgdKwmByjoiARZVMKckjrbUrGqAFaqAm",
  "key7": "4Tj2euFxZYXxLLydngJWefztr3QZTLEDyxjDvr7KUa3RxYGAicLNwJxACPLukDQEt9cjvn8tbmzTv8DH849RA4Be",
  "key8": "udWwBfeAvvZsMGx74sYU4c7gryvyzrq4SbbmCABGWxCi3sJJiaQXXNTb8ezLgbQ7PfmtiL3bv86CbTqcH9GqMvi",
  "key9": "2WpotM8yy1DjaQkwARrgLnWZ57uqKnW74QmivZNrSraYEgdghp4PSgoKKYaRL9sDRkExr65aD6v85gDPZR7AdnDd",
  "key10": "2CuBxnppqnpByg4iFTo6RKquNF8xH7ReTWgbkSE4drZCJLDaH9j8SnPM4YkW6hdfna391ciYgPzzU8KvmgLtamjT",
  "key11": "2EWM4gogTrbBdzJ7H5NTfUkGiLPmYCWPsuMqSeyWDAikiNRn2vUiWxv3gynPFK2qtqcywRJ2kHjfKHU8Eg2T6mna",
  "key12": "KqqFpyobLEovVsdCRSq6gDunfA8sMYLiWhVgFg3a43cFwAvRr525U9znPm5mtWP8uWr4W2EyNnzvVPVSS72LUUD",
  "key13": "kLvAVvKWNAMwtGYbSME1S9oWcML6CEJAXQgyEjEodavZK9dam9MGdD75g8QZXVS5jNBs9ox1UQEPgbkVCu77JTL",
  "key14": "3BzvbuBod5cwusBZjNR6jZ6fhmYMBPTeoAUhAKRAjKHKv8rbVixonWMjVxSAaiMuG6XD2xMoW1JDZJegPcxxNvds",
  "key15": "31Sm4BeqPp8SzAE5n22aDxosjSrNerYHffwGAsSEHoUVtm4wZe5x3u4VtS2RCziTLYbAmPARxQDE3ezquMMC8zkk",
  "key16": "5hvrcRuyX58TX5UpqMayi3NiwgtxYRd2orNsBLcXATCqjjWMUYEiHLYMpvm1dJ1FG2dD4LiTT6h4ZC5rgNBNyXoL",
  "key17": "5gHPSpcwNB7VJmYsugPFode2mUPtRxecHWQJqHD7zPBG4VW7nP32G2h3TxKS7L9tboJWPHc19c8K7G5JU2s1ZB98",
  "key18": "5Co8dN1aWCeKVDjETC62vKCiNijJLYYQ2zVqKctFCD2G6UGPFQzM9Rb3KPHAprvodDCYQ89DVpoFco5bxXeefWHF",
  "key19": "3V3n3GbGkUCzDP5ygd7X712HE6wKZsWsY9uBLTNYUwkgdD614jFdnoe1TMYCr3tNnTWcaprpxj9L36R63mGKKzBr",
  "key20": "4e1xEcXdJaUckDCDtpyWtcXbwpw4nKAqezvxLCG8Ecf2Gq9oFXQx136Q6t4WWhEJdP1msrKkaq44MNppY1Q6yvDN",
  "key21": "2W5UsoAyzj46mvm5RXRSPtCLS1fS6gZa3fRXsW9YENh4xZxSvDXx6x6Yj2xYh8bNS34LsnZFypcGoCBBoByuMste",
  "key22": "2entBXxMkFk13tYZ9QH26if26L5ZVTxLAHHYMj91tDtxZk3Ns36zouwvJWUAAfNuz1Ud6SsZkSTE9H67wXCt9zHR",
  "key23": "5pGuA96xdodga29EM351XLCMaXiWWw1WNJhytQcwkQNRGMxhDXKjERQLnaLoSFH4K51rWcCL546tu8vGxySDGty1",
  "key24": "LgRSWeS75HfHe7bzcB9q5KseYmqepwiPDDDgBJcWDuKpLrCgJaTe7oCQyi1oeoCuTfMobGbWmhy4BgYE8tKk5rQ",
  "key25": "qHaB7iyakFeRiTZJg2uaThrr1kbSKSBVd75dR6QCP8wzFTCxjCtSQvQfsmZUyAjNJzvAX8MfFxYVRiSCyCXnESc",
  "key26": "4fE8RAsGFcCrugmQJ96sBfT3aw3YveXnjCCjn2i3x36NtmPyjtjh1AHLmyLPMtyZRxFq6utA4yLBTZnGp6VfND2D",
  "key27": "5m6WcATUn6uoda6nVDBzj66ZEPas8FvUi3QL4K2nBrYDH3Z4Z32J3pspimnRonLor4kyMtLJ7RyrgnqbgiDVZP29",
  "key28": "2KsVwZxNeiEv5866iNj9q9HukvHxhKK75EdQQaHnnHAp3fLQmNX4REtur9NRbUUnK48yCyTNWPftBB4A6joUYsej",
  "key29": "3AwVUzckwd1LXMPMAN9YrJgKWPSn9KycfLg2gn2CcvB6MQTEJR4FVCXvxGqdyxuh3Jdm8YQnRBJSxYQqfCwML5Gn",
  "key30": "k2BzuHbck72aKschuz8fW3oTZMbntqUtsaLkQbzmhVD3ASRrXnqm5x65RPx1Vga5LX7LD5mzkeqxT16KzE7i6Fk",
  "key31": "4QsfTjgGKEmrBDjnn7Ypyh9rJzjWgzrRZkez3cs8zZ9HyMEKZwCMV4qoCLvZEGzqfF3PpMVYjpvUcbATFCSqSYqH",
  "key32": "26tmn6dWtsvHmzzNPSVpUoUwHphUEaNQWAWxc6FZjg9qnxwCCfWqrG6Wh4rbk4FZsGuTu3zGqgeC7tZZP7hwzYGJ",
  "key33": "8Z2LuWrZhZ7i73U5AucTpeVrgheuffVU23d7UxnvCi1w5Aqd5aJd1cZ85oykxRSVsenQvGqKBHpHWrjHdLmP368"
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
