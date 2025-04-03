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
    "QX8RHK2kD1mr7N5JcFhEF9JeSaHPycnyNaB97YbdteXn7xPrKprRbZUTkSaAATExqR77fvrwNxZcqigxx54RGKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q3bt9tmzC3JHuZvtP7HLvaBu4Boj2A74Y5EWjnpTUv5GVa37YhYzUy3ZnQicM32WGtHfiWybcDLG8SMTofunpeU",
  "key1": "5h3UYHmB1f157eLTEWyBUzXGBHgW9jYmdTZBM21QaF95fxn5jXJ5sANwyZohwMoJwaiR9XhHjDcixBdcte1dVdXw",
  "key2": "2kE4Cf8XXbC259KMqE85NxDCZajwwnpnm3QzLPSsYEXBWnKh6Jt8XrzxMpbHnDYpgnFka1JBcJM1Moh9j3njM4uZ",
  "key3": "4ia19KjpzJDC9Nhg7AidLpXr4DmxXfReCK8inHiVSDb1D31DjNGTwM3XVA289DkWLoWvJXjpLbpfvwDHuUkpXw6P",
  "key4": "4mFbpgwxrLTXnhQgsgyCXsdh9qvkJTFHoTa6NTNkWEoCaZd2WDD4sS5XtCac4KUiU1QJfFJ5mXdfXyrEEXEBmP3t",
  "key5": "2sCR9ep6sgpzaGPDGfYRbKxCqJKSKe5m9t1SjUdUYfcz2gzVKySyi9tWbnbSJo7BN1DZWgp9y1ZS56puzo13idFM",
  "key6": "3Rojx6BuAP4erLmyMQ8GTrFGqkggBPcfQaWv7D6KGt2tcU5QMT34ZBGfjFaxxC23TBa2nDDwrwQ3UPCrJDcbs2Gw",
  "key7": "fjzDfSbx83GmLepoCEjbZPokzBm9iYfEZmmw3qkYAB1zxHxhZnKMkpizeFefbzEHGguph8quaczRSzgYFeXjcFv",
  "key8": "5HvihLmSMVM5zRLHSQ6Donne2tkJ35Y9GDjbqv2Jqq63NK2wYjkFTTH1W2QA1Tsgg16Wm84UMcHW8XrXe5p2fima",
  "key9": "41ar3PNZw53Ag41pqVPzyKPQC7H6FLuLFA3pdoWA2Y7Q8r4aATb8w7498vGApwLTvZTnqKUtHBBo6T2rkGTiLCia",
  "key10": "a4UUoMJpJqh8gerq74MMDvnrkLuDkCmxYQVHDeZVqMDDHQeVoo3zdNAGGg1wXdFYFTGsdGrVBbndDnRfdHNMxHh",
  "key11": "2MDKe7r4dwXtKK6FSxciia4xpQrCDCBncgPLAnasTisukbPPe2wX4f73QRxpr6xDJbr6KjtfKhX8LPbKHWsCYp9n",
  "key12": "2VxX6NQ7QzyyRdWzjLDa9JiX5JrvdUvPCUe778oZnByPLDU1NwHfzsP5Tgng51PU74DdgZLTWxRPeQATszFHztqB",
  "key13": "3F7No7ByvdU3Xpft9iRY3J5XGv8CaRn6jgntachtiSZKP2Y2gAiWiUD9NVVsMWSW5JNqmcxFWHnqGFy28wEPwRAi",
  "key14": "uacLbxxMsCjpY489M1vhdih1b54Y2HVy6iieQ9MhZ1Ka6ChECByZosEEYrYd8NwBNoskdtf9UpifTYvvPbipsKQ",
  "key15": "2CbjPqvLC732BdMCj329SrWFvKCwyCRTLrYfK1EhQrp7jkxRoqx8M9RD2sxWeVPvRm5Bt8rCwQLhHpJhBc1TeSt",
  "key16": "2KZ4jqWLy1qLcXpbFp9uKC9AMB8NxTRU3uwMpeUTGfbw7kbJ9TorTS96t24hDBta7w3BRXseQC98DKqq9QbRPSmo",
  "key17": "4m6bBV1et5cWaJueEx4LpGBpRryfwrRH4PL8RsETRGECN67Vm1BQkUBx69pNB3vRCZn4b1c5ygRgEwtqFgJ15bLR",
  "key18": "2wUdsd2Hzz8JbqLNYk11MzjGTLyt7HAnw95ADBKzayxjpJ1WLzzjzMn4VYzKoJK5JuNz1RD3yfbdxiRxQahsKdag",
  "key19": "26BNSRC5Pn4ryjtEELQPwL4uuaYuStGi2T9CV4hWE95wM2MuYy536jfFQ9g4nLW3jVYFzrG6UALsXQt6YXL7YVpg",
  "key20": "2SJ84YzYnkxc1RE4RpFcff5qnCMrcV9YfJ961EtwS4ES2uAsBbKQgoXYcP3aFyrfFPK5PrQPouZFWsb5dco7WMVs",
  "key21": "5QDQpfnZKCeAww9y92Cwx8YEnhzdkYKDQ5TR3yLYBpCXUijqKxT9FTgVat9QdXx3Mxj9nHKYjGtKoxFcyYE3swjF",
  "key22": "54Vh32vBe5huG25g2QrjPuc7HwfCiFTZSe1TN1dCW3SU9QxWL8E7jzY7QeC8ZpaWuiaGBFvuQY4RRCTqhQo1yK2L",
  "key23": "4fLBRPNbi3vdJKKeFD7A2PyLt8XF9AsCzYNQzvGyuvfBDmFT3tSJz2kiz58bnePU72DjcKh3pUJQ3Si1KfTPdUnv",
  "key24": "54EPJ9Hb9wWrXgVsKiVP7cpkmzDTofo8Lk9pvS8ivEzDXxKKwmccpnBDqca19GLasZPhrbe2sj557YYzYJ3JLMKT",
  "key25": "KEdFA3edSCZaPUKoAPuhu8JmtUWU4yppekupyLVrHWiCtgFF1GuDiPL794mWLfGGB2sp4q7P2YzpXYkQibtSTgH",
  "key26": "3AinyPwtvvedmPVxxSPiyiaxLp3hXi1ZfpcfCKfqdKNuP28wkHAcQwp7UJYAvo1o7ZPnpwW75x3Zz1S8D6pyUEEU",
  "key27": "4QLNfxcq9TcEHgGut158KQkkum5JLPY4Ea3YQCsdUAFrUXtCs3sqjK9Pw7hAmxTBteqzUJhu6AjMoCUVEjkYD7KY",
  "key28": "5ASQqGyH4fiGjasy2vP1bqLV35xYDkg5kiDraJxFn3VEnPzLHVjYRV7tDdG6eY3Nd6ozPVvbYQgqxGp3PTDhp1DU",
  "key29": "31bxuKjcj3Frkwwmp6QzdySk7jbgZqAggLyy4W1KudTwX115zTgsWKUoXWKRNWbyykFGoXtMW7rBhuPGbSAR4WwL",
  "key30": "3aPYfiTsEBxz26uXV8zcF4hFY1jbZGfpZRRJvrHD4PDifL5iePNxmmfawaf6EV9buQga9ppkHPLZ9o4tuVXcyjdV",
  "key31": "32tcJsHeVEeRrjZRZHPxJRCiHRSuYrH3soqiJGuUrKYwVpLuCs8zewTNaWxVwLTzBVVTXfDPwc4nXsvYjApM8M5s",
  "key32": "3LKLfiYNiSZdBX1thg1TR1o8hkkTndeA7E2P8KmycgRrg4rtBpVGPYbCRiaLkF8KxKzmmjbjjs6J8kTbMJBfmRwR",
  "key33": "5e69XFjUce5A5UPSvzFaYeuX5ZthkiCTHhoB4ygZNekaAr5y15yTj5G52A51iHCztNsxGx16FfuY4xxUGaZW3Qcr"
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
