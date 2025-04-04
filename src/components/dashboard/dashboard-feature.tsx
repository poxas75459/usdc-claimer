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
    "4fJp1xc2kZ74NVGmuMLG1YZDFWkMtnMWmmEkiyFV7gpUfzNssTtU5yJs6BEGo9Mvu1y1BeE6qVUz949VmyvptzkZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CVoHXvL33RMBpCkyYzcEX5KCTbj8kD9L5GWzE1oxeHg6oVH2xycFoPtSSmPCwFaCM4W4VMG5H8w6pd2W9PLbPLb",
  "key1": "ftPFSJUWRpkPKSvFxmkjnLWWYxToSCYg1HHokpnou3au7vtbqHErn26LjAv3W32tEzgjGvvkg9p2ZTBqjN8xety",
  "key2": "4Aze5FctBZng6J4ASYE8WsbBykrMpCLbLUVzJercLfmPGXyw6dnXKcD9jtkTqrh3uBSS5M6vFjxc93WG89SQb8jF",
  "key3": "3RhRzjkEp8XQZZ7k54ZB24YGWsnfEcWe6R7FHV1rHHuPy9AmNSMgfGzjwv2Fh2BNXVCdzGnhte79xQiXfmAVuKwx",
  "key4": "5ez9dWPpRgTVfVo3WEz4bkPx8UYKuesmNViQSEqYYW4trdxZ8AXADayu9BqWMckV74MaTcY4m2MuqgvYnWowquxT",
  "key5": "3DcxBDh8sTp81q7RvmEP3cziyDsMyNQ9tdrsiSP21L6apiwmTXRuBGTC6NTANwpL6McWLMSCLRARpBmFKjGj91XV",
  "key6": "5z1ZdQRUs46sNCcWGvpTdwfRBHpZjuB8YyZuACwjR8nSpfSnYFAcprkXWuVrZncmNnuqjQnnbtCbGXxHFJC38NyX",
  "key7": "2nHz3TcrgJsL5XnDsPSEAThG1mNDdWifs7JcomXM3ChgLL7PduaX57vMgZRbyA1e8nUGbKsDAnpSVkfcj1Z4P9Vc",
  "key8": "vzXhjjrGCQCcNLBpzD4LixePhbzos7Qo8KsbSDTTD3ceAWtANMv8Fbs9PTCfD8stRFhbYkAng1JBrg3NBgZrUsi",
  "key9": "4XQGg1SEQdKbcRCerqcKR8vsGk3g6SgQ4YqcWHuYP6sEQ8GmDvaaqSpBffgTrNQxeb28gkqYewzDsKWNY1ejPY64",
  "key10": "2KkRM2x5eH1AkWuGwg9Hx6uYyX9aUaJFjWswRhJpuS4Wbr9HbaCDafhqLfjphfvqnmrkXQEeJKChMmuCTe4PXvxM",
  "key11": "2RPsZ7du1yMDuoo2GoSjsMHHieLx3LZCsE9wLGHGj9PKp59Z5zWyyca9Szn4kzKwsvtqR89ycJW5bfsD8eqoB1Fz",
  "key12": "4Gz7KxURasoKo2kna5wyLdiC3mxGYTPznuDFRSrnd8YGvoFsPEP9zUVwhVbwC5vAxThAhUue78bJqH31qgYhB3WF",
  "key13": "tpjnh4QwhnrSbsYvCDMG5JDSLkd867ZSqbP7vNTMaiWUt9xuQzfES6VZApzkF7eZryBesd87Fin8QSLeCS7eMpN",
  "key14": "5cnQoCguow5MHw2Ko69dTibQLFeupQqmbMpHSsAMmBdYeqk8UtytNVWskL2yUc4vYu798nhwBJpT88xqhWEovwUj",
  "key15": "1TcMBoztZamEfkZpoBry5Hsn8pa2pJw4AN33FH6i416KagbJnjiQvqt1Js7LRwAhC9FG2fBKwcyuW9DtV3zbcGC",
  "key16": "rLQ7jjwKYtGxoEQ9LeGB6zSpSAFAMcNAFo41snhfYjwWzufggtoWx68SNjQDsTnXUeuv64ejyqX8b3km8fpohE1",
  "key17": "3YuK3M8THZ19z2Zb3G2NEtZ958D1tzvxUcqiNKgy4xMPuvkcGGReuzEmpg1o3HWi3t4BnxkB43eapRKiFFuBsdUS",
  "key18": "3vcEw3jSfGdVpwvVjkQqS1ZFTW6jAtEyGzPxpFq7GHpemwfQzQzKnXiuSeyQBZbcpm1KxoPvpjy6xcMmHUPkyTt3",
  "key19": "yKNUtfHaXXojHbxWMQQKy2qGXHh8JRjN7p8Ax4fYURQYBAprhpoBwwN1RexTwWEUhGBobhP2TdHt7qtENVFmcj9",
  "key20": "hHG6LSyBcLTgEisvd2EtPMfhZU5U1xrtamrM3uv3a4mD8FXv2Q56v2VgJoHSZpsPWToHAVhrSRZyyWt4MqGzsti",
  "key21": "66Q7NEJ6v5YqsUXPmEP3cBgHq3qL85Q2m4KSKw6YKfbmTB4SrEuaumY7DcthCh15jkyMQLoTghZ3DCkQvHHBmvKx",
  "key22": "5MjUWBg8G7f2zzxRM27BrDSocCPkJi9JEDgNHFU6L9QF6Dk72gXRVoBbTgLrZ5oVpYsrXUH4pkEcdvEPVTU79jPY",
  "key23": "4gymnFY7xsfxNMfTjNiJefZCVZhhYZC4x6HoR3w8gqt3kFPhMZrcv3kDgUt8V3GBrdS3M42mJnr6ecyb1hZqr545",
  "key24": "3dsUU5QUrhy7NYHFzcNibPLNfZyW1vK7mK18VtJptzPKDiKtjur72nTLQJpnapHmFJarEE72LF3Uv1y6vxSMWZPJ",
  "key25": "3EzBuu1Jgb6ptaJUcftokMSje2hfdZrNNZJjNhb3An3vhJWcAK7WVANo7BJAXp42M3thxvZ4AU9PBH5Unnp1smNo",
  "key26": "29N9HDcLJash83FqVLSYPfVgbSaWuJvsnzv26tmH7pEutYpUCHq8azGwUdr5XQ81VXgSyYXaMpcgGjH2mBeQjMWW",
  "key27": "4hEasRtQ9gMqZtBryoFSLc4qMJu3FRUQWJbWzHWd4brJtvQs5SFSDBtVCCSokEqeNpEUdWKL7Vif2bRykw1Cri7N",
  "key28": "3h5MtpHo6wpwmdgNdZDEtDm7BxNXmWNYHwbzaU8xLz2Kmi53JUWAtYUxqZ2vDioqdpRMUKayF2tzhzmn3njWoau6",
  "key29": "5zwDAdDTwY9NQfzAmfxiQ9NgGxjhS56iVU6Na6RafRqFAc6Rt4V5JSJvZhmSD8CTmNzK9VH7rTPXQNs9FSXzHo3Q",
  "key30": "2RSmgDCjLGWFPYNJV4v6SFrf5dLjpWG1WP68WRVC53fUv4tSzEXqppPchK2PQ6DDXCYUwA9iVTbDfSVjyf6BwMfg",
  "key31": "3MeUEoYdwkVHnVKzkYhKQVSrxxXp8tmmc1azXC4XhXCtNZuJoLw2kcdwoLRB4fh958yThMpxUanvQAmJwQwjAoM2",
  "key32": "3NfPH2Z3RVJwXU6o4DcdzGaFeVRLFUJHqYiHGxMXf2CNp5xKE849XfzLVeJ8wrJ64PaRKMH2NMZ1LTK5qG6CDoLN",
  "key33": "5UgpTwXXydX1m7nLZzyyY5UUHusF7LucKUtuCsX4QEvsWJ2xJn1HoEwvE19tmrtGRg2YqE9JtGRQuuYpjxKzJpCt",
  "key34": "41G28hn1FrEzp2z19zjajAySfmv1zhfpQ7uhkmHeV8AvGegHC7th5G4X1NjAsJGn5Z1RbJ7DyUPz8PDYawUFjyoN",
  "key35": "5FVQCVjMvet2enUgqeHMdAF4fX35xCXkKknDwiTQ9fS5ZNz9bsAXVbvn8U8QW3goQpHdWHnAEMY9bhhVMt2SKhPW",
  "key36": "24ofQdjyMjdfgLz68FuWBoMtV46AJTUgqBnEa966i1DD1n52dasXZjZ3Vjdq7HQB41ZmUtsHm86X6He3mTqBDfGG",
  "key37": "4eEW1zzFMVGQhVGEngMuPt7xkx2Cq7SAmfMapBhbbPS9GR6Cd9BhUKrVS7HKGFFkfC2b7ajx7hWormwvVdauUhr9",
  "key38": "3zGZDCX48yZPFKqur98veJ5cM915YkDELNFFFkjLrCia3gyRJeQoTQKgMYuj8KQ7pq53JHzS56kqcHrqcbBrWUwb",
  "key39": "3cQynN9vJVUnV9ux5oxRE1BRMor5uZ9osUg6SdRH1poZ1Z3HcdBVQ53s7uWVoaxavJUUatSDnHLk63BRxCjqFuhs",
  "key40": "4Y3PeZUv5J2VJPZMWsNbYyUUMfXTKDRJxkGebt8dFm4nvDgLTHHPkdq6w41HsVRJFG7mvZQ4jdEjmjiu85oYCFWi",
  "key41": "4MP25DHsocX2NmgMJF1YrujDQwR3kyCYDktwjm4Hq9oWN9xYDD2A87xZCeBCMR2XtjDM2ejUhVV3sb1k1DUC8x7t",
  "key42": "5nq8w1KXKoTnf1eHgjJ19QymkvMy5Q4hW98WsGJCwifEMu2tdx47VREiVk34YYAtE97gmTJpmBwZSsXVF7aurELq",
  "key43": "4utPoTgsGHcedMe6tUKTmjeedb8ewuDviMJVPExb1pr7mUy2G4h5jqdYsttB8LAScwNWp1iY1ARVb9z27HryCcKx",
  "key44": "56Bg313KgGxR4xSgTo1hHmrGtGpSh6A2cbHa1TxcrEju4ogZCi1LJGkjjYQidXAWaq5zUpAazMABQZuDYFB316L",
  "key45": "4KdHnNJXi445oivxCVPfHTR524Ayu36qn9q1QhcS8E5f9dqVauezBqz9ZMvHAfrBZxZ6YDGDBu1oB2MyfPo8Py91"
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
