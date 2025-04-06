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
    "5PoAXHNZBzp7Y3g1ZZ8EiSyqwqYGSPCk7fj9akrJroRqkJ82rL2rAf3jzorN4zdY28Eepoyz25XSKgzSert5z8wh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QAuhkdFEpBRQGB4TfJf5dKfwSMFgm7HJXZA2Jiy3MnC9PQZFjkLKGV5SfZeUHhM3NQJ8Ei2CgdQxpKNVdXZHyiT",
  "key1": "2fjVCB8UDGpAoWni56WVoxXmESk5oER38AtEgDoQcCCneLBdJxT99qT9mj1FBnEniTbtSPVBcnM43VCDA936kwLV",
  "key2": "vyT3px1CDWcY97B14E2umUxCa8bd1cbbTXnZXkE7tdVeGSzt22XRWBzePemUTFk8KB8P1b5DxaxVhXK2GLYqDta",
  "key3": "5Le2Azjqgor66F2EZgfYZLgs2ZsttAq2CjbMjHZ98sXTJZFsauXFRTP1hvx85NbuQW3ZFrCZ4ZQU582cKy4CLb5T",
  "key4": "JRdi8Jxk7MZFRamxKWRHbK3UcZsfagw4fGXsx3p2xH1DnsT7wDMySSVCd3nqUedShekPxwYipB4CPdHQ7Wo8fK3",
  "key5": "1xLcEwnSAXt8yd7unDQ5AK8m4hHYmJS5jzkxh8bx96QRdMuRXKqbQQQ1U9zoZQ5vjhB622VxPuCFSu5PFAMD4X7",
  "key6": "2RqsYJ3o5z1p5ER4ZE9xhhAHkw7hf8UgEWz6KU4VPcGpTfTFf4z4MCXAR3R45Xwigg58wfswgUHsY5AbCBNbhsQN",
  "key7": "pB6ayJNbsvvkpzyprCrd8AGa6PKbks8fZnw3QWhDFfCYkDbkU4ubA6LMeQu89wQi5esicdLdMX9jdju89wFAWDC",
  "key8": "4gDyoGbtNDYfaU3Az1PgJoDbBuPkqJqNzFS89RKHD3aPdTkPEdSAL7XLmTWNyYnFneumPRWxYD4NyNBnXGr4jpZR",
  "key9": "3CYBY5x8TbNp28mocMKHLGLae3UGvu3p2Es91FCMbw8FgfJ5qB1PipfxVfX1DLtt1kb9sGLhX2PVCtzqfojYUbZi",
  "key10": "2XkXtoxjmkoYKurjHqw5ZwKuFKQ1NeQzu65Es6zDrSrv1kj4JzrA2sLXvyS3yyjrG5RRosWrdDgHAphJpiKktVfi",
  "key11": "xMu8vUEuRchP4MnfMHBAgL1NjUdp55sZMSNixXraXe9sPTgTWgT5qb32ZHazWWg6k7552St2EfpwQtmJVQXDHDZ",
  "key12": "VVmKp8ivKnnecvTB6DTFNLyWJ7teDTS4eTDPCPdhwZyJGjd1ox1UDEj1AGbMwnHP3xsyBocxAj6ZAVfkppdXRCu",
  "key13": "5rVYkXxtEs7NGAeXYzFLUsA12oQzayjyaDfTrCs8pXgd77nwu26hpiNns4bNoMcvjHyhUFgyzpUUNagmSogoqr2u",
  "key14": "5Gr7sk2vfdrfb6rWmUHJymdBrMs5eT8KYLiZTwkWd2CPN2E6tBAt9aEfEHGvsNktvRzKi3eX24wBDiaT6g9R4THd",
  "key15": "vEHziYiKvPkwMTShaMJVY5NTwzHygAygGtWpakqhe4NEaNBupnm7Lhc9EiTdDLj7rWk8Daz5b25adDqgE8xcLdm",
  "key16": "68L8ZGkHFGGBT8Gn9zx3666mmGjPL6KNijuRwoMkUo4vG7epKzvHW4EgXvBiw9jBJF6e9aiooJa4ANL5WgnePka",
  "key17": "43uVm5NiJaQw12tRHmNSSnf3qXM2zybvXzCtsesUn4XAnEmyUAn9AqZFDmCibTYMsQGaEfCCP7RbjiqmetpFPxYC",
  "key18": "2HWKe7v3uM4PuiAdQpAXC6b3MCfPXHib5364XBaAVSVxfLhUKWdkL4NaK6D3V8DshB59Rq3QYjECXXdv3wDSAuES",
  "key19": "5CrG2PmoqEq8DJvcajVwzzQtBwHPX8ThnwdE99TketUfTrKqEYNJzc5Fo2LzG7jkdETmZqWet54Ko1wWxPr8SKC4",
  "key20": "2RjSnjfnvPzztFAHvTL3tTrLA55ftCtyaPciJ89nSFajBuQ9ZR3oDr22DDhQZ597h4PR5Fxa6SCtaL6v533TVGoR",
  "key21": "4YMupUnNuX28fJNByRdDSBfss6gSvXhPovJa5SLpka6WX8ARS7ZaBzegVuRnY25rELCJB79wLSULAK3uFwTDxa5y",
  "key22": "CWFUNq3XD8AHeBGj8P7sT1dRzCDXeYFc2P69e9QTC1wf1RuwTEPpUrrnsPy8s4PSPR9fDnQjyN8fxtAob2TjN1r",
  "key23": "5rxCrFRMBbr2DACNZqXyvTqVr2cfiGPrwk8LKe6uFQfgVrekGMKqhUP4T34DheHYuAimimpHpFUMu3m2RaSg1HNq",
  "key24": "4ei8K4orGJfvCtzNrZvLt4Tiaq15TB6R7AhrXjkPkVyEHCs2phGaUGMvwp1x7Rz4WK7DUcphR8kf6RaPvUkyLJ4S",
  "key25": "4eZ2AgSSqX3v3iDD1URVpj4G9cmzDLV8c2zA3gP6Sdd9b5wFHc5jkh51WMYzfDnoAFjwmZ1pcUkvGD6JwxzCwJeD",
  "key26": "5umqFpf2hrchyHexrQU8KgMTny1ADFfcTn3LuN5hsWBPgc1D36fvmiXckoSDLVKrbG5cqekG6nZ33bPBfLPsKGo4",
  "key27": "2iGak1xuqpW52bThcH2i3ZYSdmvbcp7jJ1k7unQbjgCCoA1B2gzG88zb1hzJwNqVyyQ23zASeDthLiW6KQLZfrwK",
  "key28": "2udeZjnP2qeXr7wtazy3QMgP4ncjnV5hWtTuDU1xuuMbGrHzWrVDRA7VYwwdEX9TqydHzMrfehVd9J7WBs4MoGGc",
  "key29": "5rpGr3veiCBVqTKfGphRGnKhHP6jUD9fpsbjZAbn9apSzkZbJ17eseUuwjsb2dmLa88zz4CaDtEynCRNpmbBjqJB",
  "key30": "5LDNTFkdrxoHWBRCjj3xrnCZsqJbtgUCX1aP86EUR2MdKLb775okGJwQ81C9E7h1dzPZzt8Yf7G4MT1EaEnx3iBV",
  "key31": "3hAWLVH1Qqonk18LTELrFwC3T4Z8eitHJxHmxTdoAY8vEwm39UNfMhYmEEPq3nvwyUc5QbyqjaCYtEV3j1TB7HTH",
  "key32": "2uawq1XuRxc6vSqtVNfurzctwmSCKkfs6j7caNtoKLkxd4UyasFjKhsGqS4gocpMdLhBUi5MXiknwLxDjP3zDUd5",
  "key33": "3253ikWF58XzsVjBPuPFgVZs9oSSbd2vX3SoZXS4LThGngHnVrFBNLV5raggNQ6YCJdF9jXqVWWMj9hhGjemwFB4",
  "key34": "3Y9bExkRDvwzpSH8PsCnUWnrq1XAYF6H4zzfzZRJ7a8PdKbLvRKJzoghyXRJLMF1i8fcGBFdvANPQtqKscm3x8K4",
  "key35": "uSxmrX1Bxy1jX7y1sKsyYeQcG6HDD7c6QXjezQkBrwfCXF4UB1dBbxDW7H7gRf8sstgRnyBa9Fk9kTgciXCCEyj",
  "key36": "rNtDdJdkdCtEj6rwr3qdpV78d7UbpRNpwkGPb5EXBq3JZZUXNnvGv1z7u8Z58yh7gDH6SnDwk9XT8sbWp3tEfUu",
  "key37": "5erxv2zM3DZQyRDqKmyusUxU7iCpSoEHoRtoDJGgxnmmSR2u7f6xbkf75rSgBqddp7ALPtJCSwV5BUmLqW8wE3nq",
  "key38": "2HUniU3NwYDHLqvtcT7JGLZKzjuXTuzZRXsJhVPNzYeooaaww16emTRpciw6LHs5TCyLY35NtSZYE9iT9ALa8U7F",
  "key39": "3ZVK2CUe21w2dYXbh8cAAtKx8CgF6Q5J4WYt13tzVxJefHpVN2rsu3LFTMDSeKjC7EdQxceDdcXjWCTaLSdBcoGg"
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
