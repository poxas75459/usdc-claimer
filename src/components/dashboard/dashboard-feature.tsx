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
    "3B3djZvX8SjzgtzMN3SrWwJ714KkZXnXqZFjyRmkjKRTihMN2cqHxQNPKYpqNpGu8Trby9B28JTCCre6RZY8TUjx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kawEvJiLteN1Mf7qbTicmhBL23psTcuqpABKtWXQE1wJBcRZzxauvd2E8iLGiMe6JDSJDaLgaPtTd6c2KhKnxn6",
  "key1": "M1w9cc2VrbPK5B5prCPB5dvWWoki7HRhZXRdt5n3MAzLrAgagh14jeoL7EcLZgmeu9XCe8NwVwhCNUvLnjyy52T",
  "key2": "5baruLFqVrVfYgiUoydAi9ZXARgk5yv31VpSMg91TSZrBYrMvxDWbJ3QV9QmYAgcsCpzqkw9RU9MFZzs4UTMnr8F",
  "key3": "5vVvqAxDSViVDuycReL6Vy493Lxx1tL31fHcs5kh6RYzKfr13D8s6t7ye4L1BZELRAv9KyvCRtvY78vcTGv8G7rZ",
  "key4": "5tdd3RkF1vUTHm4oCmgLzwZgmQhtv51m2hThnRdVcsAH6o83zRMXLtouKNKH3zDNwbay3KYAfQ73qE8PhGEwkeYu",
  "key5": "5QM9A5CAeSWNpHuLoHb8A7ZJuUrDGU65Tcft3K916gjJXvu1tse9KrN4ii6UnzT3S24iiNXpyHY6utLhU6kyFMEF",
  "key6": "5zkWfognLveDKVdWy7CjXsc9hx1LMh9QP1A2AHcHn4AfKs5G6ZEZXBsEknnjp1jsbnW1rUWAKUDA6cozkctUhLqU",
  "key7": "45K6BmxkrsfdZKVNH2S2rXYbNMNAVK6iqBdpKSi36CZUDMKAn8e9F97BRGFa2mbh9xhsk4htR22cc2dHeocUzfoG",
  "key8": "3SQUFHbAZ51Qnxjxxqsmkcpv6mzreVm1qqRSthn81nX7F46TFhj4jfroKgqHxzg4r2PjtDeqCKtaAingEv4EUfdU",
  "key9": "4181WwhtMgutU1vNFcwMpKVu5RMvZnHwkyEqWNfTAN52FTRYQNaS2iGGvd7asaghGMaB5XhKn6vUkvXkumqmgnQY",
  "key10": "HZeSKr23SAubkKQjZdLRKZcuKqkWjbsmoLdSqn9UvLjqdpWH6k8en7qZLLsVQkDZLBCGZJd3euYcMRT33i7VWFr",
  "key11": "47vWuFWXFVKtBcahQLxszC3ivJex24vC8AH2gaVke9PPYbUMUNugjkqttfTrYCkgZ9eoSjymboh4GNAUrsaRYRsX",
  "key12": "5Bk1yDTcLZyN2r2JRXnfEuXjMjet9C5m2k2VB5SHrSBcPygBFoFcP7NPtnPHWo2qfAYoEYtk5okXBFaW8DUHQL21",
  "key13": "4gNQi8g4NHoMNFVBvUJc7vpkLeDg628eMV9CqpbB3zqgNmEvvZxrgrqYzfymiCtZ1P4UnvBsppMtqWPdFbCgrhjA",
  "key14": "5Gm6bcfG4RBN4dhmF6CHpZQuuAQo5gQVt7yeYg4XsQfF3MFueocr3nHBJspzpXVhaDU1jTb5tbRC2MT8jzs6zRJv",
  "key15": "g8uZGUNZ4Ag63AwgWJszseRcWLnzPwgWPkrowDA7kMybi6HP2U34PTTYz3dZxCrCkap7odah2FgQUSK4osFJMz2",
  "key16": "2r5JZKHWHJCYu8fMGErcJhk7vhTJZryRhen4nBjpKqAGoikHByhdD9tiSGLi1DzGxwAiPfwSkft77Seci965W4Bs",
  "key17": "G3TiqxU5ryuixNg5TpJ8mZ7t6MsFiSeSiQQmduoWSXAztyZFm8jpEduRKkEq6TskxkW6PXHeDh1zySxiqGL3qaE",
  "key18": "uEbcEy5XEmMhp8LnPPZV9VjLaLoiRGmnXPPVSjHhwHZNML6D7KereB3E89MHYpMQcU2qkCebLkE5MMRASAedjyW",
  "key19": "5xt4bL241x2vz2atbAcAptYn8Xnju9sozA67VAq2jd2hrHpiVrTdoqGgJiYDWqLEWxHDRC5WooXsEY5bKcB5mggL",
  "key20": "2mE6VhGVRNMN8EmC4k1AHX3rcfgaWR9JYU5hdUHEXfRnCcWswnBtz2t9gLnoaHyY7xC8DDAg2EUuWoMYGRWurqeH",
  "key21": "YY9X5szm73KSiP64R2FGZVJjuQBw4dkYK4BEJfsGabMkoDmRsa89GDqvXKghqYQ2m7dE8hWokTDNUitq1xFY8ir",
  "key22": "5819PqBKqqzm3wxNRLwHx4wFdMnf2WXtzTRFMX9adAQt5R9ZRDQWTNFRPdGGuQQjajys1UEb4R7aE4kFZrATm6t4",
  "key23": "5HoWzg5RAn6wybZc5Fth3bYcuWZCgZgThGRqy5wiRnBscasLn2ZfB1mbB61sFzHvMhg2ErgoF26NukF99HYXiHXC",
  "key24": "2jGjjKp2mFG29P2Sc5JnKvSeNJkRxXYAFb6NeJiCSemm95CuGV2gQ6ztVEMcoQXxgf3qQU4z1mtXVmMGsVaF2EoU",
  "key25": "57aHttGY5D5LRXLnjTLiSwtJ26c6rNETxnsMiJNjeLK4TxqruQPbSVZaJFcAemy6x1SKZAG3HaHgFY8P1GW2Y5zv",
  "key26": "JVpzbtV5k4MqwjTx1xPBpSY7zchwxLmLAoyyxjdaFXhfrc9Zdpzkv5xEqzzk7uraw2ZGvfcdjspgC1E1sm39Ss3",
  "key27": "3sZ1Nv8UcvJ87CD22ddmHKBsYcredthv9fxCHQttavXTBTMzFVJ9NZhqnkyFAYC2jZTvXZQQsKrrZ19PBWzJzwZg",
  "key28": "4MJDRb9Z8bWsh5D8JSeo5nGg6EmJPFnmfhkSn8MdwgKhHg78dmzAKCEiPvwStm4aUbP3GPohnBwhzc5fxpd67NCz",
  "key29": "58MFB3RTrqiVv87yoUPMqaRRafnoiuzTRvMe9RqXBa9npH2e8ExxnExtRD6aAW72Vn2wgh7HrLcaRHCL1KBnUbMX",
  "key30": "4qTjft2rRBTvQBVZYR7G84sZCA3jCpr5gLNXuzZZP9gB7gHVWdQ2b39K6Fk3Sehcp8PBbm5gn6NFrnaoDRtho8ug",
  "key31": "4HXmBzipkmYfExnZWw83WNm18fP1xQt447fw4Uv4p7p3Leour5yS7bAm71hxnWj24S475iinVaGPFt9rcCZRByoB",
  "key32": "2oWoDLJcGnyivZicHDJCEoWeNeBtKPucvxQxiuVhrPuuKHXTGPNADoXFq4yECxn3SGnMA12gsUcE25tf2nopAp4M",
  "key33": "5Yz5g4uvJdCsweyV1UTQu7SaGcqAWPUo4UeeqnyUqSQcRMFJAUSmXmhKFLEvfXZg1jfu7A6QsJkfAejvrjZmfK1X",
  "key34": "5HaNv69UnHWfdZu37eNhpQa7Esnak1vYRCFzoTG8fXY3ZvTdVwN9CegANr25RQF4ZBPCRXuCaTkagkzbTHiSmZHR"
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
