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
    "25FnHFJM5DNX15yGktbvXh3S3ViHdi8KdqqZecxgzt8bt3kRq9NQEoqxe96LEGoUX9PDdSUex5r2qNGWrt6SaQJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zNwgH5ENfWtek4bUuc4HdptRa69pZc5zL2mwH27gNGVYPkng7ds3XrqGPcryd6AmzsWXNQo4Jv1nzfjZGqBnpCV",
  "key1": "FZteUKAvqqRAkUJCLBRUrEH1thRpuY4SXMRwy6SsqUVjiioF67DU2qX4rZP2eJeLxfxcxFfBhMDYRVVBGb9fyjo",
  "key2": "2sAopmc3zJ1NvfZ6DL77AkZExThSDYFJ7q1fKdvnEXEVQ1z8eB7npGNo769XLUv7bhw7mZvtRuqvHveJMoZUm7Jw",
  "key3": "azgVtVZHaWLEjn7kdbUbKXUiUM383SiN8wRrp7G3kR9kvRGPaqBb7JjP4J3L5ueuTTspAujQF9PYdjLi4EZZfpn",
  "key4": "36BuJ8o6X6rnZEDmLVLTa9a4oNLzNLJJuwUGkGut1w9pRL1tfxLw8AAEQXe8PJGZo2TZyyU5V25G3Pa5BKEhHmi6",
  "key5": "s2GKRpUxEUXDALZpubLkxCmbN3RKTVamnJ2oYXqaMntERzYe6VUdAWgsArRg3brVyX7YzFkpCfV9TNBB1weef4m",
  "key6": "2rPGr8ZCzGtP7HH2a1xE3ghCLkA95Wk5U6vdpLgbS7qED2ECPE63CGosbr8gZH7DsDDPMXcqi5RMBCAyuunffdZx",
  "key7": "2t1TFjZixCrNBCs556L3JkTiBL75NnjwSH6GYCfkUPGga9FBdjAf5bi7mzh8CciKeQMf3RhyTQRzHepkpLW86BjY",
  "key8": "47o7z9QD3fmR2UKwzcKhKN9hVrSGVYMYw7pjXheXB2NiBu317woreH17XfaHVaQC6nKW4ar9jzG7ox8aMhQM63nB",
  "key9": "5n7UGAMF257sdNdK5Y8ENvnbTUBpRKn3HKSJzE84FdtWD9nVUos36SqRHs9Q59hxvegMBGMREiSfrLPXzLBXh2m",
  "key10": "2hMwJmXqeB3ica4WZHYuxwcxJjeBPdtBYnAGAZv5wTGJFyFM3hfTeNfFea2P4mjPF7WH9pKAX9junriFUDLZx4zX",
  "key11": "aNAz63Xkn7ip6XNeWB3XaxkDyDmQRuiofzRygPHSQbaDDR9s4qY9uvuhnckSCfcQQ1LJ2HSvTBqyEAqXzjK3uVH",
  "key12": "4t2iXhuR4irEPq7o1t2mk5P8XAsCxhQA2naPeEtdzNtoe7DjsHgXV4HSccJyhmgYnAe2bShjmqxyy7aN4T4NfN1x",
  "key13": "2dTof9zSodDgUn1vNiHkJzEB4gWFK9xsEUAkjBrfSAzAY1kRSmBXsw6cQSVzFGMyN73Mp7GWgWVrGsGTiP48AZdv",
  "key14": "3AKM7dGLCfzLHzF6tuFHo2fiS4zbXzoPdaQ67p8AuyHtpx1RW9JczKZ6wjNGBptRW9n1pjudHQVPrZYzwV4V6TLw",
  "key15": "kpxHYnuSaiiTrDRpPgngJWd5ducp2Y3gyGzN8NrPNGMPuxPGeBPz8f1sSdjwoieuWHCmqpah1v824Am2N9Nva6h",
  "key16": "2TNn82CeinApE357JeindVaBngTRikp6K6UA3j8PetBkp5z4CW2vNeTzhsiW3aizoi8o4vW9KDx8PbEV5RPf6Pgj",
  "key17": "3iFAsNV3pbn1LuuiXmXNHbUtbyxhXTAeFuichSuwTgYHgbwE9rrqXsx9qvZekPu9anMVamfYmpwuA8ijxyouDQ58",
  "key18": "2J5tVSLCe6oCJM3r4ftZsvBR6dZepS9W2qNf1mKNCSYzhzidUrShe4ybRH6XSZW8AXLDgRw1gY6M1Qdq2hAs2ovh",
  "key19": "2gcL9vJQVVaiPm53AanzFBtB8fV8QCRD19qoG87Ecwh92mECZpE3v9aMTHhu1zXHBGSzqoLdeNqkkvGC4t8HG5gN",
  "key20": "a49fh5zHmwsy5BFX2R54Vue49RU8MvcBnhP24J5rFDKtTSjW9vt2taavEynvumQcxqbyYsS8YtzgQ89Da4aT97m",
  "key21": "wSU42kEMcaveFvWjPp4bSVDwgRmC85gjvtAthdUj9BZ3WBPWRAtX2LBw8qZxqn7yrzSakx8m1vfj1W8GuTAbqKR",
  "key22": "3a2eme1fTFKiEbb6YztQjvLGAsRDGKL1wRzpgoX1GG8MJdZAXSNK39yJSK1U8FFUDgodz2nauHwYvqE2hXfN6CPJ",
  "key23": "BB4q9j7Nz89YxB3fP95wkzHqK4nbRZSiC3sSTr1mhanvbMUCYf2B6DA5pVkqh5KRm4GjVEzhKdANuYzwtQxQ7xV",
  "key24": "2FFEh3LiS8HxGZcu5X6kmQbYSnA3wRsVGg6ANAc2MA7Zz89k1FaKC6CEGJLvMHxrXeVfNZmTzsiQYTLDZBN1B18a",
  "key25": "5BTZavndSW2wiACNH5iAWCw3uEbH6DYtVCaNcMGopkZrbsGL2BKHDpUoe7FR8DoTxC6CLJGWYNpAQfjsvFdz5R3a",
  "key26": "26tFcj3b1WC3jHZzc9dXiL7KD4HNKeqgw9umc6SwQTLC4D51Zjro7KwmZgNLdDVDXmTRBfVJcm158r1ZwSB6XJBM",
  "key27": "676mm8zkhfNxZejWCa5ZkEyg4fmnW2KJmdg38kH3NR6mZG3jr7T6Moa2Sjgc6r9h5UsBZUzqEnqgeuBPDBybF6x",
  "key28": "aDRUYBtonge7NTWsQMMBjgePG1d5SNe4tqth1i2Fiubv9sCE7RCRur83Psr7U5yHwp6VhW1evxu4Mv6EA6LRD3A",
  "key29": "qrEXQE3bk8ESNwbNA3iarxpPQFBrg4BMycp1pSk2739NEFTSQzLGadzfugXq554p8VD2cwD9LT3J9mF8RgzxkNW",
  "key30": "52AwiWcCoZ7TZuciQ6ivYio666XSbQXSmN9rxUQfCZvFkswhK6QC7cQW3Ke6L3XDGRTwMunPsCXGbpS1bQL12ULh",
  "key31": "3bS4samfBXzwqt6XTY5N2eVJC7owf76cVEtnM4Si58wk1Nd3srrZozabtE377wtH2xbg2JdTLbLYAMXt55PmQ4eP",
  "key32": "KQhgLxKUhsmM8xQLxWgHvyrvrRStZaJuDR4QdTnFWHhKpPwtwQtH9Z1aQY87yuBmgJCoeD2crsMovBN9iyUGxM9",
  "key33": "523Em4xijemNiSCCCw5mtBkyKtcUTh6qxuW4SorZ4DuD83VuznKsuHTiTCnJScrdHrg8c1smtvcTunnv2SRTAk5o",
  "key34": "58GHSfAPmEZCDM9AZP3MUKmLZctzzb5wNvWJnS3SibN61Q5hx4noefv3jqzfUa52qfoBVhWH7hkdB4WVM4GPiHyu",
  "key35": "4JPkex1eUGMf63PdrZXrtdcQckpvnyemhgWBubAz9wVKESABk5di1WubUBwb79iYCP7HAXWay2h8pGqJS2kf1EdP",
  "key36": "5Fk4DdvmvF7d5SKzqDB1cZgmqAbNC7X4HqEc65GSA1rVJGRBRngWxZEfMV3PxJZX9FBHFG2TtWRPs9m1H1Br96Vr",
  "key37": "21gD9umYGpjFGorAKN2qcnCJLkDj8WMjPGuPwv5oxbagG3EMm5NE8UVkPFimfEnsATUJkSixJLZcSPLepeL8fyce",
  "key38": "46bA6Zzkxxmma7tYkSz4zR3iq1AcX7nqNSBfT4Sqp3dRUbRSSTZPCj1Jpgd3W5qdffcmnGENKpJbuA3AvmkYoVji",
  "key39": "2wtXHSwEuV8aUfWqWwXQa3JVPmcGQQ9umYE1fhK2B1zctxoCoTKtmRfSseRdgocyNmcEpp4tC5PKE7CEjTE8siEE",
  "key40": "6ruWfNDyn9pGNkWN4Kfg85M8PzSgSmPU1tcrnbJ7AaqEH7PE56nj6JR3kW6MCsFkD6jxxyohqgBsd5AEnsXhykA",
  "key41": "2jyxHncKcmnzQ3c8MHRdYSCq9auau6kCNB6ugh511fSTvH9FwMsU3P4X8Yjp88ZSeVfvDaWXtrqa7Zj2kvNTHDoJ",
  "key42": "2PsC8rcby5brR9Wk6rKQZ9SR3ckmQSjcrmmCrcUTwg1zEQQPstu5LkSNLR9xhrbNAWVx9Z1CjVnEsZhivFkKqoCU",
  "key43": "41bxqfGPPzDmt2mUbux2S6qhRWSrd1Fuh1CsmJx5Ly9X6ZemC4cGTKKKe5U66TTmEU4VChXZJAXD1kr8W5b6fa3",
  "key44": "4jhQw4txRzW8x6nD6JVWvrYjvZnCTXuiGVctQUVG1hpdExQTPST1kNHeXXZkYzS5xxoqpYDvYL4dbfJnhXZuDW9T",
  "key45": "5nUeDMDWebQ69WWBjDybJfPpwEtYcaUv9hz47CbvGbp6fsbpd2GurJssYa4upvc8eAHhR7AwQFNKbL46o6WgfT81",
  "key46": "3GWLEEk6N1kLs9XypuZkCibesYmAdRJRSwAmUr5Ed59sNWHcRLrF9ea93LW1sZUSex5QPqyPQv6P4YkKhB9rm8G",
  "key47": "3qawrg9KPjy29U4TF8Aag1ixZr7jb8Gbivz2vAPUXRak9hZZsVCewPvWUB8akqRgPKbh2S6jv53ft6hGB2C6GptL",
  "key48": "BRKcF9pBa5RhjHtJMJbzE7CKbJwBKikvYt4uYGvkk1LzVCk4YXTMVUTgdiSenakPmrXANXLBRcGbtugrfEbXviR"
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
