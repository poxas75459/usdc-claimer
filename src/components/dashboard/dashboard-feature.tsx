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
    "2igecJo4eyjgQHgWhmoQpbRYQqa36UaDbi9yQxesuqkc7sj9E4i2VBw2yp2UA11yDTSihyF4EAhcbqDJPnj4r8KZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4erbVZA9JznrPCEhu4CJDEwCcTH9seUgKz7XdHdJcD2PYem7k5CykZShumHsrgRf7KzXTP3uuv35pMKreqrQkyDY",
  "key1": "7Rr8VwmBqxWszHJpgRDMjAQ2AZBNiExvtrwznvwmYpLhSZ7J9wNMGwKxaKU4JpRaLKiDdcJ88xVpDYT6GizSU2f",
  "key2": "129ZhfN7fJe4ELQweysRauVC3cFhYcJtJo5m9WRAv4c6inNoipm4bEGhU8vzyJ5rReBUhFSojED5zQ7WA4EyWcxT",
  "key3": "38yw9j9BV1vmUssdJ8xG4LpLPBHK29ke4AovbeTSYqiSGyiXriv9LoiDFLr6HF979hyzbiSBUhCHJcUboRRVNVBA",
  "key4": "329j7vaPejYXsyLpi9hseiPKviPQngQPTCU16FW1fS9q4V3XGF7xDXZXgbce1Q31D9cxgcTb9SWaxuxPaEap2oxK",
  "key5": "3fyf7rQ2cr8TjftZ7bXHvpsD6GnLQQweiX8F5Ls9LijRb8toHMHr1gJbHehEZmKVwFTyvWTL2MropxSoJvuyLsun",
  "key6": "4J9Yn8H5qy7Epz4NFKr7gyBGdTAaHpxt33GGFgRcwvQ2k5Ae4iydS4LjSVgx8h61W5W2VyeH9zbjaPEL7vHuCTmc",
  "key7": "2aMy4WoFzJPCqxSkBAVxawpb5z7SZodEq9JWjFNmqbyFGFxXCWNUDcBKnQcgVM6hXpkJv4Msosd2mwszSv6n9sgm",
  "key8": "5pLVe2Ds9yHVKMjEo5mJonsDGytQnGjH86sdtVG53QZRcnwEwZgsFuLrTYY3VgsMnebbaxdidxuDBmjDnBPcJghc",
  "key9": "2hFVq1jPar6y5f5nrmjKfAUSenATheVe6snU85Pz3w8HwP2x4VsM7UgnKchjBo8WJyygQvqZvLYG3cngQ7mqEqCB",
  "key10": "25uxQG81UyPhwbYAZqrYqrP6S4evf56XEaaXfJe1ZvqPeNjpQ5xwVEkAYAAj6QiZsCKAmWL3Qh8zta3S6Cq9HcFz",
  "key11": "oCsxqLTdDkrcZRbxEKXE3Mhkpk1cFh3C2wpwFRCzpz5oMCTJKsHxHJtrJBc7MGPtXrbSkTv9wCHu1jjyWpXnmGT",
  "key12": "51qTB2HqdJKww8bxaEw9NcAdhMZqreex5yCGs1S21y2mRHdRCrwG1vCeX2e2cKmxoB4NDP4s3XbfbHQP3TwhEQvM",
  "key13": "32YYnvZH67hUmHT11zGgpjvVQrnkm3GgiCsWJ4m6jY6pbKV6pZXJkcqvrMb5pW58c3T7vg5y83LMxoyvmYLcQqcG",
  "key14": "sYoUPrmGHYdxpDCNNKW5Fr6v3pYLqP2zs8G2QKm1m1MDRhKr9ekR3b8T9bXMQZg1Tfbx2M3yto4zPSxzPMq14qx",
  "key15": "2uEFy9Wxosrg6PKmQPSc5DZo4FbWoNiEuW8Bzxkw2nLpTgRXnHUtTK2vVipj9HaS8vePGyArBcVz9ECXn8rSwjMa",
  "key16": "4UEW8gRLQ2bDc4WTHDsL6SaHtthnZjPUrPthngJsdaqCEYfWTNuQSc1eyyXirGtsfrMLo2z7aU8rrHEYxoK6ta6E",
  "key17": "27vaVTBtN2PzrSufWwamunLpqbs3TVonTmrTnQvvgpXxynKnM1YHjfAXc89hS8XENUGTuFEJX3j8CRSjJV4qWWe5",
  "key18": "3nkUksDUNWNXmbztWchTQ3o6RArJ4XPiPLW2DyvnAdjNqGYcHipgo5qZvj9mpFuEUypVikZsFDbZQq1ERdTHfie4",
  "key19": "3F5WYKbP58boc39rDQYigmHzrLWVG831MeDtfcWGpCakX1a8dXqpuH8qz11LeBqbGaSXp46GJ1AfQkivGR1k6Va1",
  "key20": "SiwH4TgAfo3p2qBgy1LdUe5nhavNn5v3FPbNqewZbFB66HSzEfB3jM5tYZcdwSFwLhbb1NcYVAEgvkfzWvg35GA",
  "key21": "4etUCxvN24qNVWC1WbJDpAxfWdsXsenFnPsQtA6XMXsD4Y9eA2JLucNg7yUf3CHdVq1RDbai3zQnvsLkQ1GfZEkW",
  "key22": "4L7yQ9GLVjo2pEwH69agix9dHx9AnuLeZdCKTPwnxFKytmahGFk2vur3QorzyZypruooLvtof3k3mx158t5MJW1o",
  "key23": "3npgRgah7KNJK9ysQfAYxwoqBqW7FKt1ZftL2L7SrnkPXj6QihJ4ooKB4gsetYJrs6FhCHfwLJfRp3QKFJcHjF3L",
  "key24": "5CXxy74rCA1RqdUGFaqKN8ubsC6xaefVxezNvs4aJLRNBLFThenaxVGA6oip1tb1ieBfncx5FXMBmXHRGxJ8pGzd",
  "key25": "2Sv883iiU1vGbAaXAsqSgie6xhkA99NMutArpPjjWfQzWn6TS3KgL824VQPoSLik8Xa5gAqWBCZ6pP3zg9vYAyqt",
  "key26": "3RRVdffwxgp7X5mYp4qR7RAhYy2ehjWJsCjbtL5eT8hzh3xHsWGYuSFrjZJqZwRKmSqMwF3KDthqTpip9g7Rj2H5",
  "key27": "5fuicEwqyF4ovBuqXJNjnaTa6inboAWB8EKuYZU6VdmuhtpcSCAs7MQvM5KrksXCGdr6iHRZLRJYxmM7kvFqcuK4",
  "key28": "4tdf8324QxaYZgbRu751w5uhyfgaEHpdACu3kS7t4Hq6GFdwT5beD24aqwUFPF9nbrAjCiNRHy27joMeNDs1HSWG",
  "key29": "5jNPAun5nB7mDqbXxZAeQYr3oSBMSi5SeJJT4EwCaJVx8gugsdPLTmBmcRbx24guautLTmP2KyoYRsVoCSKmsKTU",
  "key30": "4KYcGj6U1ocEzV5hpEQAHMtbzpAU1hquYnCpgy1mjBw6piHRtSvyDp62KwmgVA1Jmy4LtM4tBczVbUyinqRM1mQb",
  "key31": "3CGoHH9xAAPVXBhFCKkAhi8HirL11tqb6av6T6sZAKM9yiTdJoGA1FBBbQua1xrLfF1kBvEDVm253fVCWyjBpWgi",
  "key32": "49CQdc238sPiv73CRZAYUGiw5m6QnBmgfBNQUdhSyGEt9huZgb2J9AC9Ccx7LpGPiupREKfXbEZ69FLNNqDEmVSh",
  "key33": "aQcZEHejz9QSwuH3XC5Q6t8BhD7yUopTaTVPxaxenmGbt6Tg5GhSW9Z2dw4FivLw55gatq3YJW7zgorPxY9dqkr",
  "key34": "5wwH8gfghFxsjypA1wMMnAajerNXgrUaK1afthPEWagMyac2E4Vgj8LrBm93yJteY22AWMArATJQnu9iyHEApNyY",
  "key35": "2zT5jZp6jLxNkKgvK1RWPHDPjc9yh67LB2RUi1j7XfpRbQ5xwUwHWd8b3qXXne4fn1G125ZXjq7YDVQAgpFxdYuy",
  "key36": "2FBMJJyQQ11Dy4poA8d7HQQejShj6182QeEjvtpnYHyozCjXUtTM6Cik3ijKDKYEdEdy4zT2EgsiudgLdM21N66b",
  "key37": "NYssiXCouuwmdFW41pPYxUMvyjAuGc4QPQhAWKUuDDBREAxZD2wtoQ6v59KTqwQZj3ffw9ZpxH9iGAFYEhZEfeg",
  "key38": "YBkvAKPoGuEEwg7upkmsoGLEamCWmKctqQhM1UUbhfnWj7gkmQnW7i4YVUeAJWCG6ihwgw65rqQZfdrtnsyHiNZ",
  "key39": "41uhAbaVgRa5FRiyMksj9tbwcs5FsU1QTwFJBYS5MeoeD2bmBmxZsnWs1dxteBTCxH9E7syTxCYJccDnmLaw3QoP",
  "key40": "ebE2BUSTDnQDAaoZ1WEJKxvtXRtKaPHLioaJkP5JT143AfTuJNEyJXD26oVJtG7yNkywUkig6RQwe7KC9vdknf4",
  "key41": "4hHEcTfjUQhNGiY1tREcYg72PfxNUH5HRbNoZ5QaX6CrhKktnak6o6gnfZx6FnJAyFVnb29M49DcUkphEU81WtoH",
  "key42": "RrFXjrR9kGmW84ZdpS4HaYt2NfryzSU47Gs6hXLuvyaLrc8Se934SdgWsNT5YDSTb6HFSsUtFFyH74zyGwsP7U3",
  "key43": "5yNguAsx8YYvF6fhEKrsKQGhFhqjUK98EyTqDohSn9pSmGSmUCCiKHaa2Tk2weMY9UH5zVyNoAQd13FhKjBnzT4v",
  "key44": "3Tju7RfA6ZLhePa6BZCD1Jfq5716KFXsn9bfkrmq77ghGEv4Q79VsTHRZW4Yemupnd9RWuwrBBNc8bYfg2PMDFeE",
  "key45": "2wUaBG1xXL6AXx9qgDraFtDXFFRKid9WW4XiH1pjj1kUCNM9BLiVfSexmi6fmsenDdQiQJWQuPiAUSHH9q4ixLhR",
  "key46": "3fEdkAVotzaWwk1prtsMkbF4NeTchkLquWmRQbwRoUA7W29j8v7EuWpLXM7gg9U4fdHsqzuU41SzSEyh6FJimnvj",
  "key47": "47Bs2x5PpFmLf8NfxEkWE1c5y5H2Zcgp4BVKEbCdpJ9w2A9gXnfakBfAp6qUEdmypNe6b3b9nP2sMQiZgCZbPfF1",
  "key48": "3vNxvY2UCH9479Xiz51WTGUxtiRa9LYsjKCeiqH7QxRM7y5rzJQb5gfceR9KQxZFpCQcLXs9sKrwAfnKjDeTuuPM"
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
