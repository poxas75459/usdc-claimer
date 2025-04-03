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
    "3tmgG5jTWSp2hpWKKWeZFe3KNVEmicG7XwZLrBhzaq8L2c1QNgQV8TZRTBKivSGVRdyAc9z224Lu46n7bFxEnDrz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bPpH1gG2nzWSuDyY5AmsEY8KZVQL63EaT3DxVHxzUMDztBxMsycT891vNQekPjFHpDbNAT9o9CxDRuxFRGfumm8",
  "key1": "4ZEAMNDz1kpLx21JnPEYragGtjUtEufpbZEA9enMTwgsGsdLyXi2RWvEf9Ek5A2pQHKSfDh4bBJf7W1BRqDXZgq",
  "key2": "2aJ6BsqoEns4T2tPUf9skrL8UMTSECyShcEZPJZhBqEfvXfKeLXpu8Dw2A1Z3NpZMTEVLdNPStjPyuKssxLqSihi",
  "key3": "3BmZUMsPcCJwrkC8Ps5bMVKxyjcazuipFYgKEEWErKokWdD2CyqLus7KgnaPA514FYua4mNiPsk8ndsZEcCo2ahz",
  "key4": "39pcf1LHFoJFZr5yE9TFNSsj23K6WFgpVBuwwhFqA4HpsAnuZf26vXdLAgpuVToNC5Kh5XeYpbcMk3yYA6mjYQKZ",
  "key5": "3vgcnxiPddCvHoD7ozSBnVsg8kveyHjyhd7w6oj476TosGEdd12ZhYPqKAsQrEMxqHYvMd2F4tPqDWUZSWeX6zEA",
  "key6": "3SD84avbJ4QjERiq1Rm6Njd976LEC9xJqUg1GGPoDHznhqRD77a7XcUWNAJi7C2VSpRXjjs3gpkZCtouERDHfM1o",
  "key7": "3QW4iX28TcnYZPPdDU9H3CEwQdkSwGFgsJy7epVyuRACne8Q7p1RiTtey2HbuFTSN3dz8YrQaYj2n9T1itL1R3xJ",
  "key8": "2YHz6nDSYzyNSHR5dzPpKbwaLmbjL5RCVwmte2Getz49hFh8C7BJbfL6CwT1Q9cXagbtmL4ZKujhbB9KBYu8hA7C",
  "key9": "2R3UrmNAnTncARZemXA2yZF3vicrTRKU2QqmDorDUZYjrQ7wYJzHSBQtC8vHykpKFREpsjGFzi5hp7uDWR3kgHGf",
  "key10": "5GDvir9UFTWiRGGxpXeSLykc8GGdvf1sfXt9GEFzbAwL35ooDTRMZnh4hgXjT7229a1ZBqi4WFrPRzMzc273EAwz",
  "key11": "2nMZu4K7VUKY32BT4JuLqvm5e15H3i8pCCSi3Csecvuzpst3sG4ryCTTkadwXMoE7r1CvSbeHjNqQsQ1Pb8frSka",
  "key12": "5xYu1ESLmLeZKfwmmkDoLbRCCNgfD7vuNEx8RpRK8Basi15ShWyEmViSduVmkV1yNmUsetHerwzKRSxdakEcmSe2",
  "key13": "4ho3PMjgp3Tq54EEMurB9cNGxTkYLxVsocoCL1MinPsLfRwGpT3kHpjFdm9njtGNKF5yocXB73HGrgCkKz8dZ2eD",
  "key14": "3HTCby5oaY9DR7egxUw2sZZqLZRNYThUm6vEgoQJbaDWKtmSFSUk3oyBeEugYpmu6x9skJwwTg1GTwX4orRoG4x3",
  "key15": "5Kcornay5AyS6rc7cECNR8VFY2zVo7uK9TjgfbEBYDeqBk3jzRuPpvEWHESnxMHbDkPeWDLALh2M1hroBJQmdeYe",
  "key16": "6XZzHUKFrtUhgp1TuPoa6aYEEZyyzyoj9wg4c58vkS8FLx1wRudAf6cUoRh5fd3qb4bpcdhY37AiDVparDmd2s1",
  "key17": "4RRfSutzUBqaEAqcAfD2MVTittwUCaq4uJpwk1Fkd2gBy4KwrWcjrpheN7bC9qozqgnLTqM18oH19HL6eTw6V6uv",
  "key18": "2sGuudZsJdnWJJ2oPkfnpbFspmtZA8KK8NtmQCnS22ijXcdMNYiVdvsLH8jfuovhqufeQz699gHagQePJTmtvkwV",
  "key19": "61QrrVBvKZz6VQGTzFSo23SY2s2Ug1xizHUfkbR3kTHT9duw2f4Ry8U8X8WsukH1wuu26pcXVYJbnX1Kdz4eEbzv",
  "key20": "2iqsksjZjxAJeHBG13YMW5DBFmoWmfaQFhta4yJRHZ6exPtkKJngLZ5nXhV3M5E3smeRdJ97K5Twdmgip1mzoMtu",
  "key21": "Pzsc2svgrLhYmNoWLHgWWQX7XRgUbd1mWUrJiLVL92tavK5uqF4kKNw2pHXs5neT16LHdw73wMa8j17MSgmUnHK",
  "key22": "5ddkdb3eALHqREphGpTnDECmBP9fiqDJSVCwAyAFuCedWi8LjuWHmp7DkWWq7BSiwk8S1mFgRTPR82CxgHLyuPtd",
  "key23": "2uoZivaoDSiLTCzdwzChbkbnB8As3sLpnir5xRwEfJwP3tLJ13SDXG6r27MH1zU8qkdswfgQtT7pr2y2ewzicbdp",
  "key24": "4npAwHokNPP3XiDeESxMzipKT9azvkZTwCLxWM1781enmRQNijkVjrifHfUdwJQKdmCTnWULv6Rm8CvMBcFPmMLv",
  "key25": "4i59PegGeZmwZCLYy51dSyTQX2ZA7NAhYHhw2HsdQZvXC5bVsyMPfLKS94wbnYmfLRPJJ9LLydhZZn68EMFgrThY",
  "key26": "5yEZHQiCcaEx4AfaHaxgbve6VrX54xtF5YEbbSWkNbFQcFVYjKBUPfp6aqiT5PbXCNkmUrvuqYYqJnDrbNRyK598",
  "key27": "2wjGFJgDJaPteU1XDruGi81nHF54n4C3fPTgUvSMzdhSwkFSzJ7GyQ9JHSgg9j7vUFfzt7Sdi4FSub3XLHtVmdzd",
  "key28": "bhBQTFdaZv6y743dduHoCjWAyzmytcnMnqdEGgbU2ZkGDkgNg2ZXApAvDcH8GuGZg5WhrWS11LX29mnPMQ5VSRt",
  "key29": "4rUvfXus9HeuneNN25zyfyfP5aFU9vUDa5bw4qmXDb7MYyuqBEEayRgn7fQJKzFAkJ6xBusAkQWW7kTbq1DkxetU",
  "key30": "2sAuK2VCk8UE8T2veMA8dRYPpFNtUVKchwUPN3CsZDrZxw2pctpmugbRtkVWRHmWoZyKrJnyP6jhyRtLXTzVR85H",
  "key31": "5fxBrfSXDCAtUcQd7CGdZkpqDBrPfr8G6oKzghZgh8WrFrQ2L45SwaSKGC6Q11Xrrq37SQAmyUHUH6ReJwW3jMXW",
  "key32": "ArExVTDHHFzURynwWYvuWRbFsXV82E3fYBWcnCobPsRd9VvjTnMrghhD7YKyV3SAsPkBhjerWjm82oKtzYxHWU6",
  "key33": "4memiMmzdAtDBJerapq2ufSkmNUkKyC3ehzBs8Ai5eC29W4W7FYNPaRXEZbrWLgWyyGjekYhH5uib7CL7t9tDNHW",
  "key34": "3m6C9um5LZit1tJ8Mg1URhe5PbSAnRQ3zmFZK4xfY83mNa7nqcwSo9eVxrKhQE3Nd7Ja2PrTBkFWJx1jqWCsuuY5",
  "key35": "4zAfqj9jRDY8kGmwEHmSLkMdedmxoL65q1Htsv3LWNTaH8XMGafAMMvuT5YabpG2gnwTmko6HMTdzbiv38a7pRyx",
  "key36": "4riwbtXAuBi7iDN5HaAjaWDWZHo4NC84FtDiJTkehcPQfzgXH4XAos2LYtM2NyJoRAGBkQu2kmh7CheK3hAE2zgk",
  "key37": "34zVSANQ9uHqrWjXnUM2Giav91YEGzNm8v4HKJXr8uEFMZ4WKrn5t6xsCgS3FadBFRSSWZ9soFdrpSRztkGoHujk",
  "key38": "LvLMVB3SoR9MTE8Qz8e6cPCNVkj3JjQjHXMK3hftdmByPPcAJz9ocBUo9xLfHvkfad99petjjFrFovsXkMZWttP",
  "key39": "2189HnC2dxhirFzaJT5XK6cZY7m5ai2r8P5wDpCLTXwznX4XToK1urjenayhHzj6cr1f21VscQc6ejDbocGS51zp"
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
