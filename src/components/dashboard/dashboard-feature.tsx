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
    "4CjUSyrNjHUps2KkBgqizyJYHeKtds8AK5iQ1QmczTcxDoRaQkvrkGZ9FwrzXsv57ZDaUoLaohw95xEaJswFAkXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w3cxKSnow5PLGChW1kiP4vWwAe5MEjwWm6PtNbsvaP9feJnv88CDBuAMWYYo1fMMoQENFDL93auhgZrjXbp1AtM",
  "key1": "5f6Nfw1sUDNBTeDkWurvPQFpMEwbDZodzSDR1S4pCTyo2u84deHcah5cvnveAd1WCy9Uh5DW8qujj8ZtAFyaSHfw",
  "key2": "3U9B7zuohLdkzXeFfWUFjHaLdhTGnxuJ3oef2tHMKSMsJBpSUPG5sh54yt5ujC3mZSdQTZ6fHUZnRSe63J4Egjvt",
  "key3": "4SCwCwGShPTjh3Ugu7PYBDsNmkkLBhRtBWjbe7zsZmDTDV1vYZoj2hJfrB76ERNcqKt1srdPVuL7dqfVyXYfCy7F",
  "key4": "2kG1GpfuvqLre92HevbFAVKGQBgRwNnakQBGThGTHbNTmn8EgWv11KSt4HK1FVU9sP4FkiuCn42tru7Xq6opRrnj",
  "key5": "5NPjxw5gpJD8zb9CaeY6kWd6GuZsy6twUdiHbgQUJ46MjvKuU1rhUvuMKCdhWXwkDkAnegXtXZmqBXLNo8JTXBbg",
  "key6": "YyKPrA6CnuGbGCVgeghV1N7sryKTnDbMoS9EuKS5jkTeWGkX9ZnqKRxKBHYkAMbwBLbZSisV73GvzkfBKxWtb4v",
  "key7": "L2yobv27z3YEjoUrhHwWNguso7rAFPG3PnvARwyq2YGZHcYzbP7HBMDYYFy8Me4xCpNenhay9DXdAyAktiwhXkD",
  "key8": "3D4rmhrwRwbA5C81PYNCkeZBAxasCwQaLbRuf7W7J9ExTSiHvaAVgP9EKHRSrJFvQ2jEKaJjeEsy5KkYhiZjGXf",
  "key9": "4kyhMmAGuBkyZwZCcEjVWkNz6qDzsQeywwX9QVRKKvqwD9TyDxfCWyXuuSao2LfJMy7wTAUyP5vLe4NpPcr133iZ",
  "key10": "3k7m6fWnNbLZZkfSGcnQN4kBmioh9hsx1b6DFLWC2QPN5w6ak5xsqRfXcBkeQRYF4EVJMB2z5FD1Ws7KW7PcJhT8",
  "key11": "5Bg9eaUUmBAtMKPzAaMACZxgB64fJpgXXoAXR7UMD6vETVCvCPbKzESPWKfCrecedgmhR6NmWoqYJX4g3fac4u1V",
  "key12": "4mPjGt9uGFrbi5N58SoccgCsJJvX5YLaZwHnG61R6S11RKUm6JddHxV3fmf3x1xYRW5MHBEHzT4GDCodYo7tWVqg",
  "key13": "Ue8AiJy3a2NYgLBEzTahFw6aUZRkJk1ZeDVq7Yni47oBtqqnYGQT6rZuWC4qFumuyo87D4VZHdMdNioa1sLz3Kn",
  "key14": "3MW4JDKM3PG8z4fBpF7SypJV5Ci6CYJkrrb8k6MGerwa596YQXsoCTWXsDcCDheLVMqRLUpmVwhiR6jLrtNAFjyf",
  "key15": "4D5w5RvfMT2wKugrhDr6va6D9ExC1crUoe8o94fSwHsyuWrJYTPzWx18W8y4KEXFPUDxP47zCsbkkbAbkdqnBTQr",
  "key16": "J5jdrP5MbcVLvouf9JQmQhxkBjJujXLXkGcL2pX9SKLvs8dX39DnE3zBLaXm8gVf24EQjP9m37Hmz7WvwZURqk5",
  "key17": "4UwC1b5J6nyJTgvmgjWwFiDbeFSz9NgpXcDNL9F4YuBBiopk2o5tCi3o5wB4tZ3xThoWPGpszVbHQuKKG2EyAUXQ",
  "key18": "31qvKowQ6EGM7evZaA3qJB8MVw6cjUPWkmcGpFQ1Qf2cLKjGnKPMZKAfYVtPBBvQYSvTPPnQBACYc96qSG31zU9r",
  "key19": "x6Vm9vPnXsEvmeaCpFRJAnrCxz8dPQrrDiFGcSCgou1tkX8Y8tJsMCfN2SFv1MC5jqjpjrzwW4dZv9WeqkrjSzY",
  "key20": "4VN2sikLKv66zLKsrXm3D9xmTZCMBcVBZuKp5guVJ6LnbwtyKHvSoxUpJbnVTskpN9E147E6A1FB98fGJgcQ2WnX",
  "key21": "4ARfujLPjpU8SaUPMxtuKDcAs4WcT1Spd5pj4c8FAa1iUMKExbrYjgrCEaB1TuakmnP93vuvq5jkMkJ5mQLSvaTW",
  "key22": "4c12Em5rRSDTxwpb3fjBNHAtedBNnCaeC98Dpm9zoKVxYxashn6JAta9HBzCx7rZKUdWBrzrqWNHpdN3ZXpR9paQ",
  "key23": "4cEWsBxpkNmmPwD6qJHYLvFVjyvZnkmSEHt8r7jowxM4iw4NSzdoYWHhQVmKJ2CJdsmv9qdhiGkhs2Gq94Md9W4z",
  "key24": "nqLdrraAGmGHcNfkZrxG5GeFb5CDeYGkYi29U4hcNr9mqr4Kdr7SUXJZnDuLK5Y9Mj2sfoVbLJWP26kPv8RUXFN",
  "key25": "35rLRwCszTw2MK3mmDhHrgzthPWkXjMst1mCQV7zbsNSS34jUooVpobFsv4RUiiGzsNDBaBmd956Nv4diWw8sLdM",
  "key26": "3vCafpcbnFvdbQaTEPMgsLzLXH16FA4Wmf9L1zb5pK1c5CDizeSrr5tETvVeNok4uzwTcJ4y5jEsKA7AatpgT7mj",
  "key27": "2uGqbEQCoVLB6A8xQFL1j32gkm9Z9Kpwf9i7f2iCapvJBaknyhMpBSzPF2Fd9heVtx45gcM4UwepS8gymo4gtis7",
  "key28": "mVJNmRop2tAoacNtG8GB9iCHj3p9GmFdQemzXWgFZtBXrG41AmnRaY88B6Vhh38GCR1NE1dEhLLZ6au7tuKf8T1",
  "key29": "3UMVV2h1SZ1d8kscxg37W6CHjGtkgxbMZnYiX9uHM75dyREo2u4erK1sg5xJ8ruXtFVnj7aW6CD9uvDNqivajEB8",
  "key30": "Bzz9atW6RZXiK6CfekT5ZAN7Anfwi8mVjH7fZtCc4jAnLMhWMSx4RyVG4ukp92Ejdf9VAUszm22CWze8wBAPS6M",
  "key31": "EuxVsq8X9WCcZ9sRfgZVZ94F6xHoEs7UyAwbKivooPLE9gzp8odypttVapmqq1aPeLZ7gJF3XzeRSdKEyNAFikJ",
  "key32": "3ZuVSRbGkEDozyNZwNH1R7oaS2kNTTrMyPB1mNq7bCoQxyqAi8t9dM2s946faS1H45gTtWBR9gkNbMAVvTfBLyX5",
  "key33": "34w1vPgLAcHTECbDJmp3WaUwJ1GmAvZfNVegQ9aL1rDc4G3JFXDxMwLDMYuoG2mSeio1i4C1VmsF8ruAx4hutJXW",
  "key34": "2WxQbZE8cwxtHimKnEtaTCb6tqPomZcEiBXV43M61JE3QroyJTsv1sRLHAgtAcbP8Fvayyudg31bns6Gb8qzpkiw",
  "key35": "5sUasmhwg6rFyZen7HDqUocxaDdVPGu7FazHqD32w2Pv12vKZqYCqKeVMDAvcsfJesqjrift4Y1qZNkbLQ6z1DqR",
  "key36": "26oCpvbSrh2ga7cJHZWkdAaWy2tPTp5QNq3xGAqkW4m4uGVE3znqo4vTsAP9Xc7zqJAkewm1dHfsqXzQS2foAdnY",
  "key37": "2dgX8nyzFzc4RBb2qxvCJJExDj3kvU4Bbb4zLqfQy2VfSNVQFWd3ENbJBKcZTqmr4odiHvWL4f7vTV6hbuAERXs2",
  "key38": "42huEwaUeZx7JDgNbEytHLKePtF4PscZaVW51A2xLJYpBLJQfqq1FYmnSdqpwfTyiFiFBehVWZ4iXwXCcoyEoUvo",
  "key39": "5EdTbcuSp8GY6wbm2wfMSV6jz86aFmcudNA9RE1zNsaPGzuffWEeJ3G5zPK7umyfEDJAeziaiqzm8US2AQufH5XE",
  "key40": "5WQMpnEsPgXinbhibaDCQGMqCP84wDXKTAbdFtf8QoGQZAqmYWo2SFUhhieD9rJc1qcCsSGhnXxEddZWwPACCSGH",
  "key41": "FtUHmNhgKyGVLhH8dbnDitwWQ6JAfeDeovE2b9rfyk6F7TChuAQg4B8w5q1bLbQyZoE2LScj6VQ5G6Apm7YBUcR",
  "key42": "3oeCJpLfv9tQhRncWgvpWSDFph83ChVrYYx8rS28mtnZzYTbsLtFcEJ3J66AifF7qWgWAjfrUah9gHtWqfegtWGK",
  "key43": "3voWGhdH3AocKEfxdesfqxY4Vj12c863CTo88GTTJswsqtf6UfX8RUNVszcH3DKqpcWg1v6j8y9M8fSdPvALw1co",
  "key44": "4mZ7FEKvaQFwNQ7F4N9pQF6erkRiDnNFuQS9JtAnAZR147U7RzuaM6h1wYvrXX5yqM9s3sjA36p2aNDcVk2ejP5b",
  "key45": "2cBQUD4mvrU5xX9jw2uuLczBnbZdGLaNk1AhPrsq2HGdFpoJbdCLSZ6i96NebGnUvB9LSvQpDX6TYTi1tzGt56KA"
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
