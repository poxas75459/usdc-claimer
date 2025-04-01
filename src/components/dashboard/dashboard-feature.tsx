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
    "erYfJNpTJ9jbeCfP53SheLgt17uyfGx55v38wacN6wFBhPBJUJYffZ3oKFGtUWRwE1bWbnWJGS7rwoBDjTHc2Hb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3soY9Mybv53Vx9gLZB6yDz2WsxqGwGjgcqv42sfqymNaUAqF7UE2S5qHV59dwFVo4YSxWYvhT5pXot6dqpXaKj7p",
  "key1": "4ZGszzvk2ugFsgZhZukn8jhnuYNzGdLRCCDyKsKA3L7kEJSuguLex3tEdemgZQLWYPQYMwD7dBJrA4LVmoBsyKHu",
  "key2": "bkLj5AnMFhs2vzw1AumEMvvaZKv18E2RxUta9JUxTStTZ9f2NEJ4ZTCN8b3zrZBtvYHAHEg16npFZZE9syTQpCd",
  "key3": "2S9vHuGmzNvTAwK2DdVjDbYCNvSzyB7Gy73jyizLUEiEhStgqcBgy5iXmpSgNQdZt6VjjQqfFNEAa8EVMaSqRPJX",
  "key4": "4xkKVBim9oZHMPpsNtYgPQSNbhsuzPp4wwcRSXPJoc5wXNQRXTjSo7yn5HXhSEHERudVNbRunFtza38Cc6VCiHQn",
  "key5": "ug3EuYV6fFJz1Xp1L8SEKASbcsnE9v2mLKx2ig6etuHNEvfjCRpZGzd34dssJyqqgzphzpZdzqMPZwRjB9w87cd",
  "key6": "3Uo36CVGdMYVuaAsK5wxhkQMCx6DnD5oUqrbCrcWDAq7abhTrmqY4EHn96g4CWNpJ1m4Lf8FrSPNnfA4hEdznBCb",
  "key7": "5k5NDAZpUJX3Pq9bhv6HqhTgm2AGC48vBjdZ2dcPDvVoZ1YarbUDLV96EWnjEVPk6ZdA7kxrAjTYZqz5XzHmYzrT",
  "key8": "5rm5Kr3hVLAGQSjwnV9dSmqS2gKnEPnAbWkUt6PeiwVmtScCpx2GGHBc5m3SdRrqinpFyKugvcyBqyA9vQRfYc7e",
  "key9": "32ZeGd3wsJB68q1H2kjC3QJi5fMK1j64vpBQViABJRUCasaUC4HkEA8pNQDgYdJWYkQ1s2VVdokVZJix1PkhKZBK",
  "key10": "A4wWvVMxJJWrK8Xb44ZKaevCkaNoLKoB3n2N2DFrLejcuTwxUYVHkytAHE5K1cpyaYnamDZBFto3Y5PHKiEnUTa",
  "key11": "3DYK11hbhnTvj9ZWjBLStc5r47AajhCLtgoKc3vKZP9D2mGp2DJ6L8CeXTYEtpd5uwdT21GJmeHSdcTdChLBBQVo",
  "key12": "5CEcpdsVyMDbN996oDysWpCUzMs97agFa9LsBLzk2aU7wsyN39hL8dQuFjd2egvRzc7R7z3dt2Z6TWwwigjS8F1P",
  "key13": "5KyuWbJQoRFZEEwxw1DwXoSBEtxdw9ectJ1w9T7HZQ11ajvHYXPjcHExcFUajJq7Zn5WEey8C4sBeKMjNyFcjQSi",
  "key14": "67qgia2LEgpbkere7cieUA3mjVPRMsAE7A5dbr7UpVvYJe73gaMUjB5q7BJy2Hmkn2igMJgHUyHetYdwoQf19s8c",
  "key15": "661E7SNsjLkgLnE8WKufrVzwGmEVah28JeaBfZtPa8jRqUZdBdcGw6Ja22ZXshfLC1pH13Xnb13uh5sMqoVCD8ef",
  "key16": "5yfPRrguPggCS7zBxFFim8AeRUqRxDHKabadf7fSQ282bhwuYnGRuW5DEpczKBjm2utu38bcx5UAnNo44cQ6aJT6",
  "key17": "32rdNdHoyvjrvBUzBg2PX1evenqRfp7xf44Erk7bLVEmJNn74nWcBTp29WG9bhP7K35SeeVznJGtabTSiGDz31Fv",
  "key18": "4kRBaPDMUaBJuw3XTrj7YmrVb59Tu4KzjQJnPDFNELtSUuLZLbBz9HQgAgsUZB4hTJ6fQhQmcXoxhw5LxCnidK2c",
  "key19": "4CZtnj7djgYTn9pyaGFFEDxuTSZyHeTvrmN9VpUtSAWByZAJaizxkSRswtSMtmNMbGbcW6Tbh84esQgwvPkySzb4",
  "key20": "YS9xT7ftkEMUCAuEEny8henLj6Sp6Cgtk83nPWaXVDmkxqZkxQ7c6GVSuwpGafkiGPXtT5q6XkE5q2k9i65Vq2N",
  "key21": "5pJWmrvyDSqiPU3c4WeEVryt8kBnRDipxSvgBoumhmvb1nLErnjvWa8Zr5kT5WeNYEuksJBNnZ4Ngecodjvh244b",
  "key22": "66C95DqCr5zW7omqc8CCrxQ6rfGUouct3jwrHwKfPXsTvdfy1XzfJWtb3mcxZkB5Vhtb8DUMkSMpiYnZyLPPy3hr",
  "key23": "4jd7QjV9kUkNfmQ6RZSGPF3YoWNYjRQresXcmm2K9My7h3ek1WYqCdwEBG9W23NV2KynZu6jMp1FdcptEa9m8rcQ",
  "key24": "3jvvhfZdzS8ncwXRcoALfxkY2K45o8Rfew3nVy5itGs99BFtY2poYaZJEwPQd1RpZWHj8AK3s63EC9tb6gQeJDY2",
  "key25": "5nv4w6ZVMzYHSEMoQ7im5e4X9nccGs5syrw5V9a8n2ZFDScsmdXMazoRBEBknxh1UqjfH2GWEsiuqfFL5FAKawHX",
  "key26": "5sUjWeY7SLkseTNSXSEZX3KaUePhvHXKndgQ3hpP1QRH3KUWZQ7FcdBHCTixCUYvMECGa1htwnC5SfuD6Cak1dJT",
  "key27": "3QWMWZsrGXSu6Vxyi481WmKBfWQ3Lcd9izPasZUNYmRMrVb6xAUSenorR1ztRAdr34f8Lj2QEsoJwqtZMPzbs95i",
  "key28": "2yYE3rVpfiS7WaQkPcC6PwAmtWaaQPhy7jJUKVSRSpY5J1C9gEHK6UnoWHyVgmKsaDDpKbRXothz1vusqShgqwzL",
  "key29": "2pEzjhnca19XZfXacwcx6pSHYApuATa5hwQUnMMKSx54wnZwoYqkWdY6t21GEyPqUgTCNSzViDVqh9s6LG6YVvaN",
  "key30": "5RbeBhjsdVPj9oEwmLePF391ggHkkGP1ToGVKpYvx6gek5U6XHiDd5Z17cbduC4x156tgApbtCUQENjfFZWYFSKb",
  "key31": "4MKCs8UscQ2KGz6MVwnb72PG3ypdwaJyFWbyxd7dzH1P3D9eVZSAHVeD9n1Kd9a9cS52qLdBstvkHQjjRHMSYtNo",
  "key32": "65ht89anDAcKxnaRNUjYDWTGavniDFaS8Xat8UpmKrY3hAFwddBQhr22dsnR9RCNsRtNs6LAA7dRPLoChDJ2coYN",
  "key33": "3Tq88NKfa8hdrM6dpbTtQuua9yJiSM4xXAf9JwfyviQyXH9Z9qP7xtA8L16m6oxH75o3biAmsjUyjqrzBEF9pnES",
  "key34": "G1rX74nfL1J2yuepG5NPJomJdzCaKTWEwZ3ZTYkwqH11QMG4rgEZGFykHXv7HxMuda6aSZN5bfeeoLUM89QCzGx",
  "key35": "528KbqbTB42GEUiZeMPxjpjQLxDSYeTZADwWEwEY4RwoS42HvN1zLCdtDZtjUhDkYMECk36dze22GQCZKxmnAw7F",
  "key36": "3k9SZkXS9bsy6cJD9UqZPm4o4KgSUxCj3cyRHw7oteEaYAWegf6mEqXVFyTBUhwoGQAB2uEGPSQ9Na8Z9QmzsTdk",
  "key37": "WdcnQqUMyAJ1SNLQZvENb45DqNvSK6pfd2RT1kpNnKLGuH9LxsrTZDev27wqQRDaySeaSrfXGb9fB5YprKiCfwP",
  "key38": "313QteoQDkxyZj3uVWiR5KkwNDa2wNRi8NXTdzHXeWhGzmXgqjNBZSpxz9ZZU3dAJiqFZF3bmHjSzS2ADaEgaRMg",
  "key39": "39PeQVZWhoHmy3RbMjUUde7c65HgyhoXbpXjuzecjhsfrGQArzjYpQJCC7o7RG7Qf584t2gFEpXF9GkoR9qCApHo",
  "key40": "3mBBU4oqepQsUTUBXkT2AXA4D8eKcVs2N13Z7W5xEsxpXnG9xLPCA3goCHGyQTsaZofX3AQWarNsQ9WAGNvaLSb7",
  "key41": "356XNqdvKUYJvj3sXzfaA4yv7LV7cJr3mQftU7RvaGwZW78Qyp1AmJ7LfiZbuW1qfHHZZH7sP7LgwNJqN6J3PBq9",
  "key42": "HPTXV9xhNAEwt1GrKznmpcGSbFZBp4BWgj5QypqHBBdhWrv62dGfGQKh9noE4L2sgsfqsUW33CE9571qDuJarM8"
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
