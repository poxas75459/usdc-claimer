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
    "L5Qjy1B2GqjDR9qNumZEjHsuT7W4vsUprcUMeGAPA83Xaxm1YgqtpaaUHXPimWR7fQZhD1wVuWkuV2iuk6BR6H7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SjNLV9RwvkyBuGaAAxtumFKf6N6n3XKHurSEZqHYXaCrhoowB1n8iTTgB2tQAWbWWhswM63Jijz6EU8eaxA4ybH",
  "key1": "sGuHPPiAWQ8K4p6EyRt91yC9oJcwk2RctimsF2Cp2FtgwvS7itZfoyiz34YpAxXkT7an81mDnvH36TXotfsd2x5",
  "key2": "53jacvDujMHV1eHz42yqSobUDEUpyiZK9sZtVAdbBq7HjjotKRvWKzAWyh8HmDU9wBSnHM2ypSh3BRv3LNzCoqyx",
  "key3": "25SJDRXPRTfuJ9NUXNWQyBFjJvudCXoYW18kRyGUFC8pBKmpfzwEDXyxxEfjoevQsXCzo3EjAsvg8DsM5LJGJYSQ",
  "key4": "4GyNuGsegRMAgMQcRxdvuBbePxuaZ3yqtHZFfnZ16ocqVuKcxPAMFLPdYP8BbtZj7W1k733Y3HDKrjoH2oVnJi2k",
  "key5": "2ofAmwFwXKvnTxFtUTnp7uPmdCXooZWSSFRxk6g2RmUczSL2znNTKyV6CRnKtcXMBSn3QLWSyx1XSmiTqxojmKqq",
  "key6": "2JTgsLqhK1iXHi1yhqnY1sTV2jcmtgXcNM5iVrnZMNZbQ91PKPR8Bue4czbraxQjbitLRJ3D2KFAbSKmyxgZ2EF6",
  "key7": "4uF7j7a6qQnjUwmzgWrhJnkTzB12KeYdqtJkAfAMhquLMJae9YDuf1nFJk7raJCcj39JFtT5C1qbENppsPRhESfW",
  "key8": "E5D2Ho8B3dE2oPsRQZVnUKdfxKxj8WqsjGcoS46W6ZH9j6q6AMsAZLuiYztdDzXPR7DAwd9nd8TDEop4QGScj8K",
  "key9": "4gTz8zbpRUYmiVoy1oY7erwagALzMYi9YLSuV4QSSK1ZUfztbVkuuLamKLZ2BGqMe4t2oSodYR3hdXJaS2GWu4T",
  "key10": "5nVyn1N4UEQAQrFHLXTDfa3g46deUmxcLa2ZobFuLDZEFT9GQt17LJKuuEbFzLmuMGiTjZgrbxpSAExxWmHQLUVE",
  "key11": "3Mp3ErDHd1z2E2UtcZrX3ioCNj4u2DmFsUc8pnudkYof9jmMTjRNY7GckKjeXeShXyXpFytjgfvC4dMXssvaYmoh",
  "key12": "2PpFvqYP5NimG1dEjAfM5byx4XcUrBhHXfFiac6wFz4RbuPysT4vpHavUfWLxMdiXWJG29xo3y3jYoAQJToXYxqs",
  "key13": "4ci8pNFZrVREWa8TfeacT6gfmsTRvFy5qcpJB1m34eichFRWdvatAgzaSziUSbGiPc6KroK7WhWpCpLbEDavEiuR",
  "key14": "5DHxeeEVVX2ovtdvUWD3EkkWrs59xCfKQNnQh43a6gruGu9kqcNH5AxJv5SnLJBUraKmWLqGUUiSpB3uDkVd2hcZ",
  "key15": "UWjbM177V16iudQSv5q8P2wC1LaVkbpCkaYnHT7KcQJQNJmox2VPAnkkq94euyEqn7ZLerRnW1BthTAaBtJFNrz",
  "key16": "3RvZzMEYtdoigB8uMhEQxDsAAiFje5JWjKgWuuZZM1AURJzuWceTrf5i4Rc4rno6AFqnfPcYQ1Mf39yx9Qxummao",
  "key17": "4Sr3pbZEnZaroeduYazQ2LaURqB2B8saAKnpFZXaw6gstFNyXVwdpGxa43T6HSfW5A2cSbkhgz9yK2EvutaWkLkX",
  "key18": "5WuNwCNsu2M2LNUZD3Jvd5zV1KMJtDFw32SjS4cgeyQgZYkRCZmYihC9vsmYjHhyWb3fpAWhYkjdP8wHKejp4CBU",
  "key19": "4im7Fzud7UA7dT4Wi68kEQZQDAUJKaoCMeLHD3gLvJ1XTtZWibkYKSzbb9SHGK28fkjHAqZFGTWEgtCscsCbRG8K",
  "key20": "rid5JQikRAuCiRJxG2X7UdHPMH2NPJRszmb9HfmJ1M4PzBoK6vSs4Np3Shpyqi8QawBSsTjpTYp1sknbBWvJjGi",
  "key21": "4aw17972tQHTgjjeAHaLqENvtTEy1GKiSzm1nbk2qrUdraLD9wqFAbNratdEKfHpLyujaQYkUahYyw427rxWaV6f",
  "key22": "4bajuKy16UtNm1sVgtKcnX5Kp4Fwjp2C6CJ612NfdqZcC4BipdtAtaPe2fuRP2T1yi3pBkX9cTfF9UeS5VceBLmx",
  "key23": "u7ccJBy1e3w5CuD3BFXkh7fjHU7RhkbxQtqvNg9m5zSoUEbnSQg4oaCiwmbt5sWqxtrHgUts6RArKYm6akFQKJo",
  "key24": "66zsCeM64myWpUEQ9ei4xEdLmrNwWJ1RDcZj5ZbsxAmdZqpNFKEqcwKMfiBXhgTbc1MG8GcifX9gxwHDzehJAUsG",
  "key25": "2KAnqjivVPkSNYsKaSpQ8eEn3r6zxGnrGCjwaRGADyVfavrVNnwXqTo2ovuayWPnJvTqXnVtY9838Y5TXvtLVPEd",
  "key26": "2n3YLmrrr6PoWuj8osyU7mArfzzJZ63Cc68yDBsaadABmCqBJ5h3CZ24S4LZNEVhv4uWGrRgd6yGh8UhzADu1mdS",
  "key27": "45XrZSCRPQ27q9CQfwbzmkzuXQV6UR8EVDVCkAEZ8pVzUnJZaFiEBVxCuNXGCPucx5eQzB1MqyHB8Tp3F91bW7Ay",
  "key28": "3wFRDZpb39aiTdyCzW9uXJ23BajFRF8PnkXSwxJdMuNCot8X6u8m3Zo1vHZcsijdU5seP9wCj2WSTPfnj2MMyATP",
  "key29": "3xMMyD1P6RxtpkGrk92X6yDNV2k6fn53mPr38sicr13LnVXUPLJ23SqMLAvge27L4ynBhtNYpXb31ZkCrjgP8jVw",
  "key30": "2Xv59v3jx9pWedudPSHL2rtbZ9iVd8qzBdBFGJJDucJtVkecpmqhEqX4MonYjUbDtCsSfevprjKYbxeqYt5tZ3Pf",
  "key31": "2G4PBUNx6q2g8wXJoD2Mw6Enc35K7Yb7zrAA8gCLCd8uLvosm1DQyuW6Hm8qwpbv455GS6KmYgy3MFvdmCymSbND",
  "key32": "SzADS6KbkJSdcCdzvccRo12oGY2qH9XycxtxSJnBPGxzWrxmRe5ZNcaJb3joLjADMMmV5zk6aGb9dTJdQo6Zm4q",
  "key33": "Bjnr1mMbn8wWppoY8D6GoJ6ZX3SrZ8iUho71WYaNp3oA97X6846cAJRdT32BpJATtMmHvzZJ2abXxWVS76HEqwY",
  "key34": "AQiroKW4Tb1DPEE5onCmaKMUETXbSJNUvJkmDFPG7sk5roHikZY3AvgihxV66PcX15gvrBWbQvZFbkzenqLAVzv",
  "key35": "1c7FAnPiWbdvhJEj5GjbyDrZzCYPHt9iyT3uruMpY6XJa41wkvZGTzTHmhCo7Q8C3AxnKn86cLppDBDQh3DZHjj",
  "key36": "5Dx2LrXDyKvTW8RNZBVVMfT1FUBrn9xXS6DLeTGfhd5hz1GpVpZ4erLrmeKa6EPsRfj3ismV49U6Jirxu1Vede9c",
  "key37": "3xYT8uJytuFY3eREo7CtiMxuKFiMs15oytRHK9fiXQgph3kuHCt7umUHwhGZJjJkutdWVGtPvS3DxZv3yufWWMZk",
  "key38": "5E6cWAuMUftRZ6WDHhvQFJCqG6G17ZiQiEKtqm2wSdNumQpgjXgKSLx1PStAXzqBy249P81d6nTxEqFM1bte21W2",
  "key39": "4Vchgtr4ixdeQt1mqNrvipsfE5sK33KQ5VCfubTCCHS9Qa5y1NHMGWYibfmenck3aJKd33N6NizvuSYPMeMZjoDf",
  "key40": "4nEKp8KUdMyzdu8R9YQffJVNvCW8rQxChZczyEyWRVpUKFiLxpCWhFk6ciLkv8tHKhEsjcDtPihF23NHoDfVoYfi",
  "key41": "2TKU9e8U1fVEqF9YqA1w4Az8htXcT18K8JnyTuf3BJaQcngTssKosLjhbK5BqNdwMXVaCEupcd6dEkEnA779QQwC",
  "key42": "3z8AxgLshhJ2dh2hDoyS2va1VU8tjeZZMLrkzpMENTXbUsDhPW1KDESAFF58dUUj534Ufw59JcBuSbRqYTvw4C8U",
  "key43": "HVsa7pnHEqRXNyg6zQ24uHHTzsZAcrbamhzqNP49Rd7nuqL2dyUudsAE5DMWHHxcq521qSFhUQEQL4Bqay4WaqU",
  "key44": "2iVbDCiwugd6riKJDVgzirWD9zxSZ2eQ4uWBRh3QSu8QLmrFEBejG2xrzr9MNawZGu2sUNzTQxFCWmUurDjgCL5x",
  "key45": "53d6aFxkS9Qr4e7ikU458EW9WSxNUevUSy8K7oBtRUpeWUnod5iHKiW6wdmKHi7NWhe6CkpHrPEMjcpTNj8psDBS",
  "key46": "2WAQ6UYSS2FiT9a39CAUwYKHYRMAVkwosXfh2rNnE7hkXCQoCe7QtgBvHk9EdCF2LGcPBV26H9Cb3y9AiS2KaL23",
  "key47": "4DQAajuzEubSW5cEyoRdSaZsTRJqLcoJEJw7cN2rH5UkeiKjmmAM6FbhcYj4QEVbguqt2ZDFaXMFED2BK71DZdBf",
  "key48": "3rA34KVi9xYwoWoJx7NV2PnLFrBCywUp7D5gB6FqwHvqSCbcS4kFt1ch9jdZcyC9vQUXwkoUQFr5mriDxRak1c7N"
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
