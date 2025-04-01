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
    "3oJQNnDXrH5ki5Mp5dqdboFDhgRRDZmdzpwxeEXsqNUS48UGjVUdiZ9fbSBCpKLzDD5pn8B1uxhiE293jqZ9rFNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t3ZD4M8UL4isC2y8pr74Ktz8ZdLgJH4btxL7GzEchBfP8Cy8Te22PMNW2GstGwDfkJB7q9xKwDGzFjQqhyLuPta",
  "key1": "3ye3zgxSszNVUv1PCoKLSd97L58LCHwKp1BnfucUYPCuP5gAEvM1FB9nXg2pL8YkRvAGH8rMjCncnVYg1VcGVNEe",
  "key2": "3mXaLAXPocTHwRHnQMU2vJfzs4aR5txE4Wq6YA5Hk4vky59fqD1gMUAnhJhZdwxKxur3hJ2VBreExPKxrpcwxPfq",
  "key3": "5RX19K3jKYo7rCAX2zrLLDAbe2r7qyFUmbsV5irHAXL9pGoBaXN867zLULyoMgfX6ejB17ho9jpc1zAoQTjdsSbp",
  "key4": "za8bZCEoX23iDCMt1nQAtr254c5AxDfvrHKyV8corS2MqDVqwqyeynuKmW2wqew9XSHbaVp9q2AoTHYrD1aqzgr",
  "key5": "MFiYfxjpDZXYQ9CLT1b5NEeWx3M7yEhmAhy5ES7HEd13F9ivkUyf1r9w6qeCrL8ZEwARg4gcQZDATpAfyz4g4Kn",
  "key6": "2scNLX6UR917HuptQ4M8YfbpJWHm9uuEm86nm6gSYEaFRC4U6t9qFHU7QYME29daE619FL6Pt1rjb2qqyk1ik7qB",
  "key7": "3jUuuQG3eHnPxpAE9jPiNbvHdm8UhcuxY3RLRXEsBpB7eGeMf8jhXENnCcHHQQaXbV4uU8UrZ8qgVaVDpK3Weqxg",
  "key8": "3G9Min8fSJoYY2T3gS6MMsHpYUYhsN74soBAtPcf7Fdek4dEygBSS9T6hq9jyd2Ytn1nidbofLWBGjD3L5T4rHe2",
  "key9": "2DqHX1imyBNxyHHzf7cZEZiNjcj8ScuZUR4mPrHoTmgps8evvZ5oGKE9iCvcZgSSAaAJu6skNgGndEaLjtQHhyxj",
  "key10": "2Rk2kLzEZ15gR3ypx3UXYxB8jMpCycQ3dQsCdvfdHnACGfVbzisPT7sY2imAL4Xcz4adwJ7Mbrt1yEm7XQ8PV9qX",
  "key11": "48ENEhwhrtB2avFgYeYxjDuGNUsuWpAE6BhPnmQ2Tut62rgfA1FS35tsQs2HDVe6LstSLyKJFL53122mKZLbmezQ",
  "key12": "4PyQ2NusqgZn36te2ujVYosZsmKGCJxcB3mrPixD74iu2AtspvcRnvzk79yNm4ce42dpsNHDXLRvyZwBEMbBbWdY",
  "key13": "3E2VNWWpmCjimGVN5KDiWNHmqFGVHwhPRPffQQNkzvuUMEi5EFkfyeGbqptt8375RFCJMaevH6yxq5udYwuLsrPg",
  "key14": "4xcDhhnjzLjsT5DApBgWcXLCNxTiPn1aMwjdVMJkRgXAeWTx1SqQUCuKnbFrGv9ydQAwTkCvHjoRRahqPRNPbxMM",
  "key15": "2ZzGTgqz3vkaHDxxjCJuaFspwvMSnQYCq3SwPmpEwUKc2Rbfrty1pYZsgoJWyS8vWuNu93KQKkdCgJpjZrvoZFJB",
  "key16": "2zEknk34MKJfi7RaLmRocU2Qnqc23fkeZNsYxEppM22QXR8WSD5qb6iTwG2hN8ih2ku7EGahjXPYQxYcmkfxGFmH",
  "key17": "3LqncZJZnc26SJdNobigGwozYVfgazUJVLKAG59nLoXWTDUnVZvkC7KqtaxKkvHBCUX18R79GPue1kTHyMiWAxtM",
  "key18": "4zgbkdF4hxVocRsjzy7Dt4gTr1dixf9Q6L3eN1pz4stzHwPqWHJhWqV5k3nTQRdTAcPh1eDfZwprfQ1HoBu5d4Cf",
  "key19": "2EZ8swDPo1pag3iKFhcNpZ6HdGeYEVxbypoanxeRmnGqnTSyfxZqsB2ty43LsSqhDzzEU1VybR6GZzVkVbznpEp",
  "key20": "65yoSbHE9PhYaYZZKQzne6BnZzP2pHLNtaD9CRMPkB3MJS5VQPasrP8XPDwk9NVLp1L7w72Ft8jwRjBYAeDh6LrV",
  "key21": "5XGpqQcux1H1rYG8T41n3Zvk3ke6Gr9f3xGJME5twzNXt5ocvLvpUQTwVmhAFbqG1Uv9v49FZpG5w2yAhd87gHHr",
  "key22": "5noDSic3XaHVDfDV4YMyaMkC6APwxDiAy1PFTWqK4NU2KTbi71r6jYTPn86LM7E7MUtXqtN9rZU4ssErDA27FMZa",
  "key23": "JKvex85yhP1zT85jbqenDvSq8ZNqkj9K2GF2dBxojeuGVBp6Y5gkUb7f8ib5dCbix1SvGhiyUTDo96jtUnpyUDV",
  "key24": "3RLz9UzqSWiVDwiP1Jnk7611Wa8vMEUyGKoymqVMgFw1Lppa7XYPBa6eb9U26hTD6pkj776n6uE2fpAhDcEiXWcs",
  "key25": "5R22zBmvjfnsHQpT4joyKwEZVjUeo524mYE3LQ1NmZAeGCXkn6KXzuxhQS3P91FJMgXyEN7SmBneKqbP5vKiRrhD",
  "key26": "3adpGptRxTKo7CGTLRKyZs6uBSh4GSe2UNvA6CMX9u3t7drubpru65mFirqa1oEGA5qfobKVg3a3Cj85eZ58xPFu",
  "key27": "3urpbdMDaabNu37HmXBi82nv1n4vqn9eQFydhoPqFiDifz5EVmCvKP4gfB8TbyKWc6rqVnpSsM4jSbbQTtdfSeeH",
  "key28": "5UZgeQsQWMy3FCjQxKB54DvL5jKH7kKfLEBCctAAZ8uMvJEZJDNduKXwg26CGSGXfXzgFiqNU85d1neSvyWB4bsQ",
  "key29": "5daJ848Kzsya23w55xeBGKNcwkuBGay7RBwM6GeA1uxsrajc1Z71S3pVji2Ms5MAnh6cjaxMaQCSo2YMec9STn6Z",
  "key30": "3NTGahTguNMKCdL9gQj3q9ndCXgjsbs3wjrCrCp9wYEMXs6dbKCbEqq42NKADZRw6pYpPqdZPFa2h4WcGDpMuuzD",
  "key31": "VWssxtYrtntbHPrATgj1oXQsSescb28eW8xA1ipruzb7ut4KwGnx8hwtpkLufPVD3mbqctJXt9pJB93cnHMaaQ9",
  "key32": "3K4nt7FGF5H9qMMcYTSymAgp3mFxzt8F7AygaGTDoaWa5aTQsoaayob1x7FFRYuSTQrqmPRGH5GQwZdXCWFQv1Wd",
  "key33": "5ujngiWGUP1dPApx33yxmcNniTx2dBSLjawQa3eyPV4iqyLkCmjpX8tAUHzKoNdqVm7Sb13zVhHjEpVjSzi5Boiz",
  "key34": "3mkomiZQ1qiWCkpYUDtdHTo1b5WLcxoGrpp3eByNFDWKNLeJ72cmJ6BvjpDirqRsQQ1UGeLFQakuwBRreYjeMxej",
  "key35": "sFSSHegrsUc2eCEA1QjnkEwgfkKBtX2qa44ZofRBra7zjXMgCjMGPPnx9XRqPZCThVGZtiXpSMP91imh3kPcpze",
  "key36": "2KUUAqDFMvM4xcKzj4yKWtK67xXgCuNoPtCPCpa4vhJcVVSsPjdidDdqpw4nzGv6FfpGAFkcH3CK98bQHYjuxRcU",
  "key37": "VMtQhnFTotHgHNuh3RVpinN4cHWJ1Tmr8xXQsxYrpdeztNEbRzDLrNGjcEwkVyqdj8sqxBVuWEHqh9tmAL2Ac2X",
  "key38": "55sAY2Ft8TcJSyuPKLVrX5aUQ3YJr4XQzcSj8gTs7nvDkJaurg3XK8qAFUeTVWHubk1XZnLgTbdtWfzM98Dv5R7V",
  "key39": "2UsvqaiwMesw5zPDEv6pyZmkvaqPBw2AkkaytoPipMGKSp5hBZQKXim6qJNAqP4zg3sh3kbqN82yfwTPCKt627QN",
  "key40": "4Ratz4hotoPmYuCaRTT7FrPGdmAsTDwNiz5PpfUKU2fv5CeXzddGf6VKKDWNbjuxpThk2r91vDpu5wKv4Bdmq5uD",
  "key41": "53gyLXAqmzgmPnBMKgQLpfdvVbHLQdFJ34i9ChsH2WP3SZVUqYVLAta5Q1BLJfDrzJtEMBopMpNBsxsMwCLQKKhu",
  "key42": "2Q2rPX6HCtcqGpeJTb1ArjDa6k72Epqkke9nrPEFKkfC9iv19LS4KQq6cztmw5Z7moR1sJg7yiLavBTNRPa6aiAA",
  "key43": "3JTeipW35mvXeHcGVBbKvaKqYkXCUhYTGJNLmK9jcPf9NsRjypeGbqFVKAKLMjDHVpuhBr2kbopppV8T6JrvTcFf",
  "key44": "5kLh6pQLcbD86vSxqbqHYnVer6CWzsQgc6vS9GukyUhJUackiUz3sNABGdjRKAvqTQV53eUbyQXEXZDNgAm9Dq6B",
  "key45": "282akPrmhXs5w8Rbv1o5jDTRBUJE1KGWK55dSG3La3wys2UjWPSzpjcbgpChobHJX6zW2CvFubCtDA9MZ1HZynSP",
  "key46": "5q6mnUnYT51QdMsmgMfC7XQmc9WAZKZEm2Lz6FJoGmenKsT8KcgTKLEhzziv2M5PGjRifbBj5dhDMyRFzs31AcW5"
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
