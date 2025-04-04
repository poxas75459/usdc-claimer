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
    "2C8XiTud2thSXqwf2MXaCLjJ3okagmBs6TufyxQsrem2bCcMjfrgRfdcECv8gQf736fJhrYcAnhLb2h5yPbhbRjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42BckXbu1HGf2ZR15g8cGBixmG6TJJtctuTJvofhEuTV9w9j5XU3VRcVN1xCChNiQYUwmKduddBCBaztzRgjR6Ls",
  "key1": "3Sabtp35dRndfjL7kCokP7pNmKozrWmNLTwryZ4kpH4a9npmUAD41vah5PNZAvBo4rQZBFK7Nkj7xqtLKwoYGdQA",
  "key2": "5sMnDNEFBqLw1DmjXZcrM4ZpJ5tkEJwQPdpDaoitMWoCjSHgA7QP6rC5TSh1tCPJjexm7QTzMyUaTpHRxhxfCdGn",
  "key3": "4Zk5pwwJkLY6Wy9Ztzv9BS96tjn7AAAi2J5tTe9YeP22jwtZuf8zr2t92qPTyPjddWG2jtNsyK19TQhggGFVpurm",
  "key4": "4z4irMAkTqcDRdfPGJjFwye6SD2WxZebHmFYCsMxt2DuB769Qj2GW5WK2F72MstuxrrQsi5u9rE7DLw6an2ix46W",
  "key5": "vYh26LQpshSksB6BRdTXk9ZchSE7iC4XfbNAwpyVUp7bFMCedeZwBqjtMzTiujM9n6Y9YppaUQ8he1VoV6zYNF6",
  "key6": "125gotAq7vcV55djMHuG7HYoHwiWueqmwFXfzPnGSUue9Vo2HNnMSo7yupeZ6ZrumWkwmn1qEh35HC2wVcEHsKCY",
  "key7": "5H46oHiZs7nh671VLx3NTUy3B6krPzPDwcU1e4K9uq7CcXVVMML1iofKpnYA7cBgviQiTmQozzUmkAprQ7VVbDHB",
  "key8": "2XgoN1XycwxZY9hVVqE1YQyajst58JJ1BmqvQdWpor7wiftaVcCb771osVbtPiH7McjjDbzcjSkF3Wb5CC2vqNJS",
  "key9": "56gJz5x4nsupvc6xU4wmJQeYuCPKxDKkgR9v5xjdYthMtjJRmqNcEPVaH4qb1eYeaNn4AKjwyVAddhPMsh52Xp8v",
  "key10": "3bBa18CqGKHfBmbr1hiq7zmrDbCyhpYyBbpBLPrgapwKMvg3y5gECZhV3QtyjD1XNoUz85eg2dpXkjGXu55AJqHT",
  "key11": "3uzQBNGTJoS5bzWB2D4M1L3ZPoQrNbxE1XtpNpvejNHxPEjheYwPLAkioeeaDiAQtzsDeU5hiEr9Z86HCZMwUme5",
  "key12": "5aw3P1B5BxSXj25TeK9pAK57QC1fK5XqTzwVjvCFJtz3J8msL5CAN86GLfNR4TCXNXAwM27j6VGQqpK6d2uGPAfG",
  "key13": "3GJwvVaCXUggr2qMNS697FV5ZaLKuV9NrNYGSoRB1bGnXZS8R1JoU8eQgu81iLaHkVx6Fqyk4RgrKtAxfHsGpYjF",
  "key14": "3RiDx4rde5aMyeCf2ZDDLuLGChqE8wjTncTivLeugK6q7HzzgccbGuPPDMjrCdtFuwN1AKG3Ae89uHSoBtjDqmPc",
  "key15": "5C2JLzQvvdMPHxw8K9Aj5edngCB5znbcXnFQk8fLs6HA59ZYNjHB1zP7bQnJ5Q4EhxqEwQev75DGE7GKn1quGnij",
  "key16": "3qDTJDhZ1rybYA9vYhUPwCRk65SMSeBnKjERL5nAf2samNuf7kzhKMGN2fzrMyN1uDD1AaM7CXSofvwVpRFwt3WK",
  "key17": "36jaMT1wScJMhjG3wexWv2XkzjqGEbSbJjsDqmQWf2xET8VFNavX7oKeZFXLi8ayBLxNHDanUYKYCckhQekKfqBM",
  "key18": "2vygo1pD9hm5FFJYQ6BW7Kue8WyVdMvh1aGjEve9UXatPciKqKATa9CqFYGZdnJ2HFs4BMhn3FVfRR4F7Byyga18",
  "key19": "4MZbZdCUCS2SPtLGi8pW14pQdzxg6BC4ncJz2euR3TTbV4Me9rBCaRSNftSysVttBfVc4GtSuRksmM7ztfSZgH3Y",
  "key20": "36Qe7nvkm46G5mdfmztfyjArkV6CoAoTtJJbfMtFGBhA23ikZMv86qMm6DLMHLCx6z2oUBHJ21n343uZfNT8qbZU",
  "key21": "5Bj7sfr7T6HmXL6vi4okXh9svTyw4HQMbexaTZCeWhNyuSNRQBuEPoruqhQWnHx1NLQwnTKyBt9CVTQBhnD7CpvC",
  "key22": "2NZUmNMGNo3uwBLWvYx4htFrGBgqK7ZDkM2g6sBQ8FmqvKfB3SbEBXHq2x3eWRaqRGTim6D7PeCJrky2zKm5ZuzN",
  "key23": "ZJR7gD1cbYL6PgCQqmApebGxnzWgk2Cc494VsJErTE9tMfK3hoimy3LCAprmC3sRpeoBsd59GmTDJGdsyB6tdDN",
  "key24": "UptA7ExEAB3ow44EsYZ4JqoKVCWtVeUoPK8NRjAvUdW4NpTUo33LyTLaDpqkqd5EGLL4Rq3c3WMfdREoPDbHFiE",
  "key25": "5EPEqaonKFNVgBoeZLascmfxGLWSGXvKvNuqXNmyH59a25fg1cc8eP9q2dMPH2TjXRB1YNvWavuYD9MU3q5Z4Y3k",
  "key26": "5YuL7uAC722kkE5LmX6s5Km64Xfn91CfFKaMuJPMk71EervCKaqvj27iuCXPGwKBACRzsk25r7vzUuPYRLvdNDjW",
  "key27": "hTJz7zcmcFAXgdmP6bkgxM3iHiMuH5EH1tXYJ3hiz73xeCk2GK9QtKqdF9ZtDRvgKoTLnURfLthKDzSsCaWyW1E",
  "key28": "3j6PexWfNge2HGjg8JVRPYKVVRCVhX7ybjZehcSoRaGD7SpC2W4bpRbDe2Qiyj7J4otQ7Q7W68wV9SjMSLWMPEwQ",
  "key29": "37Zz37UrMZy3iyxnVvJgXDGATqwhGm3VixTGnNaFS5n1wY3uLvLJQy1BStjThewWTfvfNrA52JM9GXmEm8X9L8SU",
  "key30": "49qbAZDE1v7LstUM4c8TWSZ1ffSCPMfocT67694R4ChMuYYZggmU9kUJ1xA2yNT1vsfAUfJDQYvJV6f8DKQ21ZQE",
  "key31": "4VQKLzHhdfy3XaYfprpJtQK66CC5JZ84AytzYpyki8L9YrN9uP12LgtsmfnE4qxTCoCG3mnVNxzuV1oE3iAyafdm",
  "key32": "2erKqWLDPAm52A1wSzimMJqM2sV2bE6pT2JbWpPLEr18eavsaabGKBFyojf9ryHwBo9v83A8dtEo7wRCEegSerRw",
  "key33": "5Ucq11fQ1bJEJdH1TFiXGyY1RheMVu39JfFNXgHdyDvSvWGT7j28EDy3s1Jb3ozXcQQig1YZpVoASxnhUZbVdZaf",
  "key34": "3JoydEPmCud4vdF8pE7h2n1xvrdGg9vYB8Xdnx7hL8GTagSJdtbg1R6ADjJb8a7EcnR1NcWmVvwJhW1uo7pWzPYs",
  "key35": "4osoQ3whMEpFaWqxoREaqqoZn8DA1uNpk1PGf3KhEgnNKViugxTZSNV1nE3hepvBCqdbzzU4StTrma3zJNAWBR8y",
  "key36": "nityNY4aK2wezHJRjGarNN6wvD8fM6xVV6vndQ5uyCicKvt4ERxhsQ6ny7Di34haE6DJkuQmJBpSEQvW4KYd7h8",
  "key37": "2GPoFSEa7VUc6Q9jzAe4y7wwEBtxUdX7wWAuLB2rPAXPMt2mLT5MCNBRgUZxrxEsJFiG1R6oKyR15FECZV5tFRRq",
  "key38": "4iZEcSHGPQ9WBsmQWjCFNa5s45DGnG82KTdNjoxLh25yUio7wSz4paXiYyFFVNc2JvBQD4H8aqv9wpKrSQd8jZMf",
  "key39": "wygM8e7ZmVd1UTSdpWAGuxbdvEXesfpXdAhFeCvwYLFi1Ru8QnFFKu81C9D16iXhbH4GZ6hH8THBs1hUj7guwn1",
  "key40": "3z5qK2AMXNtVmabDoLZEL1RP7JgSCRnxZS9jrKrDZC1YizPH3wn1kiDwJJEzarVcMbJjfRhUvBNAqdM9g9JQk3Rq"
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
