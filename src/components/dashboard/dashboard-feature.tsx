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
    "dnXNRuwfpWvfvMfMYi6hTWGDBiF7VHQsxTuiTUwHbWtWXgh8DLwk4A7p39m7fWDScVKGWSdSsZRDqZ8X2zzvB1r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gL6uaEeougCKEQcCoPfoiY2qJvUdzi8bp3MpiZAzk4M1PT45u1qGtmYEqneJUxcSEyUnEURcBqa1T1KWWMzxPjg",
  "key1": "B1JTfVtJQweksBBqx4GuBhCCnbhHiYKkaRJ3BGNwKwCJDqDQuTG3R1oHgveBdSSYr52PXymJ6LK7HkQDxj5h2N2",
  "key2": "3rqCTUYPNzG4Gv2wkjhsykd4pCaJKFT6RYWVjXjhZLPX6TzvteF74CFKHA4boQKHXqrVtcgPrq1vfsfJpK4jUpH6",
  "key3": "4SM8BmHuoxqbWb45zzAVrPmobnkra9qaWrabxZLwjd4E9PbEQ57B21o96ycnmqNypfHwAsdf7hEYDnp1Tj85GTUb",
  "key4": "5SkoXetdND3qMiHWkbCQiYMFV4yYB1tj3QVsZYoZMdZxbQrfhAPDyxRP7mX8RA3pXu7fE8nVUxGRFskACenBMF9s",
  "key5": "3YhHEeWXbvYBZxsCeBZLzV4TcdA12DUjrAesisZgqoPLNB8DVZxx3vhTbLX7iQdN3vvtUVC8EYt5iTTe3By7PvXH",
  "key6": "2avjpdUukR72TtepChgN3NpzY2mKPk5TZBiwHvfXurAxMJjSFVYFN9kqSmjC3nNJns84XURRAxg8kKrqSVSafzPo",
  "key7": "GuYf15gsWwPZeifvWFnB2oco7wr2Qs2cNBSrA37ynsUySyY7MGmjKEHswUfQuDBcehMXodXUhnUoUuBcDXLbxeU",
  "key8": "8XrpuSwByHmShQSjrcR2sktuBPY1CSAju4xNVWkKUNcXpy83nmLpFa3j6DQrsWiGU15qPDVpawtKanP2aR9DksG",
  "key9": "4Ltv98bXc9rAcFJ32zJLossc67D5ahKfBeeofmSvTzzeRob1ApvhwxvXGz5Z8xaoxxgiT8b2XPBVjtDUdnxbAxCC",
  "key10": "5SPtoysVMxt77hLJAwfHVN4jqVfoaxkLrvCAx2k848EfZUqUwQqPgM87oML5Yq3gMLo5M26dKaLzBDXSyMPSwn6M",
  "key11": "5rPJXFJ9axwzmhCs5HdnNvgahVAH1JXuBVFTZVPaMSm2cyk2zVnamtssaWZfANSdcgvf45Ae2UbnxNar7Vgs7DJT",
  "key12": "4vwDGwzh6KKFyy45YPtTxb4M1Dmfz2en2j8FkYeKxrLqG4NcMVxi4ToeP9NomjeVbcbHDdFuZ3ngru8Gdwzx88be",
  "key13": "2UeYMkT3aKAR1hy5BKbTZbuhQxgG2LjJi2ss4xvaYmAJqGhiFs8xpepbezLdvg517H7HvLQ5adAWHovwacp6HxWa",
  "key14": "43s3rspWCn7rCbXRLjyCxx21vxHek8m95aunkEY5JmJ8dVM74qUg3APYCBUj3Ld8ss9SaUgfaWA17Er4otqCA12Z",
  "key15": "2D6N1TiijfHm3bdAMvwYXmzjAziS3CYgGdA9wTDozFtYG5cWVQRuvN6AMMZcA1XqRUCJEhsPfcVUrA3ePpWrxzBL",
  "key16": "3f4ieKvBSm2hkeFixWdstapJkGpDhgfpiCtu7pGcyjGtwc44G75L5yizcvfvzFjSXg93sxN9wLaDEHFUgLFdAyiY",
  "key17": "25wejyS6toUdNFrLWWcL1DbNdbPmbwsFxoK6i9ggELKuKrYEmu9uLQgvm28P9YpsMhTPNXwHDjQBDWwKQCiVJCqa",
  "key18": "5b3ALqiSfRSUXG4fHQS7G2y7VsTvW6UswLYJriCcQ8R1ZhEPG9RL1kBZig9G4uNz7ZzD1CrWR4Lbmsyb3zzvfCPf",
  "key19": "2jrXbmWk4UyGvaeeE26F56CRVkhNgxSG3ah8dviKLr3ZaB2u9AvQt2bEDzvnwWoJ2PpASJhTTHnQkemYvyuNhx9m",
  "key20": "WSqo8kjqrrEYnkUni2j1trcUWXbe8MCU4Yimu4xDHkegTj52rfMLei76gudv3y5MJviGgAtu5Cyxj6GRge57Y8R",
  "key21": "3BpaXCMdsj1AhBqxNSZFkDrR1WeMhqoEmGJyiqyQGsJJNQyWqrF3TR7YsEQ8KbrnJLoGnnuzr7Qdc2qQZtZXcMVq",
  "key22": "B2py8gLCKykKqE24AV81dMA2sHC2aULXAP5EzHQmnR2DqWnG2CpZP9j7de4V8XcjJTDPgKh2v6CtNRizH36pT1b",
  "key23": "234gkN96F8VeJUD57aZBoBEdbnj3jZWnTpXDMSrKmCZVpQ4YvdE2bAAkfAkqVXZfGDAiBdcKJscsrnanY5kMEDBL",
  "key24": "2jcYDqHE4RCFhyKYUaiUMGrFEyWhySiMxCexn9uDpsEfUXmjT7A3e9YXiwZ4e8EmQ6mnUXwoZW4TP4a2ZD5tTgxd",
  "key25": "3Lh2KuXRXDP7zW4UZjakNo2CuinRNdqRNrNGKKA31NjDYuCKUX1U3CSgS9kSrD3fFLnSk5tvxxXDTzoYeG39QTgQ",
  "key26": "3sco7ms2FrRsGJezQgXitP1KGaSgi3F7y7qaTGDtTYeqkue1bG3vrDCDq7shsoh1tM5TdmhMVcueFhB4xcLppz75",
  "key27": "2GQa9pRW8pwrUadVxAtmA9G6qzD36mFBAiRsydD5k9JTEfDFYpJLcoh7KQeafHemnyfVYB1QXtqbokMcoZjVdFMH",
  "key28": "3S7cYrLVJNvgyXfeyeHYwATik8GT2xFfZ2bJgs5UNcwDqhd6vinZorpqqv21zUYTwLnR9XRPTRgzoUwJn7pdYsRq",
  "key29": "4uJnNHyG2LViTy7PazAF7fjF76V9EEigCtDe5jkaFkTg1Jtz4f5XCWCeD9Wv1WwNTm3EbS2BZQBDF51Tt29gcDK1",
  "key30": "58WB5qKYBtYuaSQFvUysD5Nv4pJ98ni771NBPj2ZBEckhveZYrSgh3LePqhP69rbGExopEm3Bqpik7P4jD6fNN4s",
  "key31": "EEt21pp4TsyYR3CKCNtziR2d3x2QifTjN6ZRo4eWFsHMsibApL2zjVRieiJNeoZ2BQEEq9gfukjW6kjxhL7x2zg",
  "key32": "5ftb6sA2yZkFmZHBvDg6rrBYuWAXNADNLJvqSBa8aexJ8fMX47UnV9fKMVkciu8s1NfHH7j2SymcLDs4r7oJc39",
  "key33": "2XMc7FHhZu8FNR8SjdqZ9ju42WtHBZDAKyRLnfu6Xku1p7NpDyVuzXxgbiTxrDXYMsHPGmeXtHdCswQUUMtW9QWb",
  "key34": "4VZZm2QNuxznigBUFg8ZvMmpS7t6g48iiL8DVHjdg9RGXQk5rS4Pk1gfen1pLJngKGuqkCmQHakxbu1MJZMKjimX",
  "key35": "5BdBhSvW2BwL3gmwDHL5a1cr4Gpyn4ePvhWbmmcbwPgwFFuDbvpAMHTWMECLHZi97THevVhdHyPwn6Xn9mZZ3WAH",
  "key36": "5tsHUSzinSc3nRVKsJuxCHXcyPR3AAkfZVanyGbnh2VWAGibf2yX32BHHpcLocoBDtHqVXD1Wk3qA9GtgTN4XJEm",
  "key37": "7QpY9Soq7mqB5yM5YrYHUXZTcqzHqZD5ArW8UYT5tnHudQyBNxTVeeDPzYBXhhaJ8XY1VjqqwB1QDhqimyLKTvt",
  "key38": "rxP6smPr5noznovVABeiAU49r7SPYgeMhxRzTxJaUhD4bdd5KmGhQo4Da39HLjXfnqnAhku1uMQmo4Mg1oHssgy",
  "key39": "58cKwebZREjekWBVNoesU2WMVvSvWAQ4YxKq3Sp5u3jbYFDmMxZULY5kLUqXgvt9XVN9D6B6j8WCiaXh2K4XQMJb",
  "key40": "2VaoT4Z6Be2CD8wv8XUUzQEDa95TG4Q9pGeK4UiwotKiwgaHbsJibSqAUxacikHZeqGoMD19aKQhU2UexVK2Tua4",
  "key41": "31DXDzMGSDuiKztGRVKhi1xUCv8vn3EYtwvJgkuvmFsA7sV6FbD5TTJGhRx8ebE4Jnz8eXc7YgmrCEMkKGGpqoDK",
  "key42": "2SFrwAQvpLrjfFSNEJkDjeuJBuxjqZ4RZ3xrumXjucNejwHLtpS1vxh96TYmGiLnievKyW6cHhrmaAjJiCWDeDJK",
  "key43": "2NdBt7AX2Xd4q1bzYqkhAJDwPBiTH6j5BBdwLqn8deV3R5QPBsjEycT7Fka5D5THwb2M6ZpZgq8Wnwmp96dYTCTj",
  "key44": "3AQeMJtrto29hxtz4QYACkeziHPpEvPfPBPX9GFMc1EfReq2nkVDiLc2fqiTS4WoZEHYJv9RcMRz1gYzsukR6hLk",
  "key45": "5obtAwd1hXP8bSW62Kg82C1439MUwbQwxKToogjQ9XC8tsaLVQip2Lci1ioQq1aM8GTTHwNxKKUkSPARqr8dHHZx"
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
