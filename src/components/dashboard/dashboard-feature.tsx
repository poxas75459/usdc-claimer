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
    "32taAVcCgk5B2s4AVfNmd4YeV71B7DDKv2ksXT7xmXiDP7fwLbJ11Ro3ZoTtJimSHMgC7wTvhYxQVEFZ5A9y2Ug1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DbCkbQwMoKPsJq6psoMNfhVyPdoXAhaL3Z1cTawSBVPWNCAhZ9WTJs6KfD5Y8tRtsYckMT78UBYxmbSrFph1GSg",
  "key1": "2uYDQx8oEutXU1e9X1cgtqoprM88xzNtoJrVboHoW8d8rQEiezKiM5U4DNjT6id5kggUVnUUXyuzdqNmhVUmKPsd",
  "key2": "4aBX2CLEa1qEq6fcuhBCwECrS3YpGTRuZSjNtCkTZPbstDAPYLhBNyiqrrnqZ1q8kA7LZy9TyJBAxY2FY2RHJrud",
  "key3": "1pD9Lrj2eNRus8wGfLBsxeW7qiZmZeBGwcuwm2aSHvzE4B1QSJEvuX1wUanHGzrbJPVPhDPQRhARkeK6U2gmfD5",
  "key4": "3gusCsiRnXTY8eE1Eo7hHhvp4UbrQmT5eEsKxQ4nqQx5QZtjBzirz87paEwrCaVR6Nposh8QAz8dFFmKovMunRjP",
  "key5": "3PcSLg3VQt4amzGzqv9expStR5ihahCjqk4f7aiiivF7M3sWGsDiMWptybZoAf7BQRnWwE2jMkkEmKS9VYEpBJpa",
  "key6": "27KeomUi3QFyW2UFbLKvtW38GLt2LC8qYw1bhckEmg3ms8vqkkywYRSj1ciTUoRBihtTpQ8rwnKS4D9XEiRxU9KH",
  "key7": "2s7NhyAausyk5GbZUcS6vGp5d9NTeVCJRcNXii5JyvhtN9Ho3maZKmxBokJKNBjHBRAYKhe1fVB9GpKNJB1eUNio",
  "key8": "HZXj5u2c2AtRKWvS9QAZh9pb2jFcvr5GLeZsK9svKP5bPasPnPm1gv5Ma1D7Wn1SwZwXqsdBeG7sw9wJZpU4kXH",
  "key9": "2rUuyoWsZhg169UTb6oJRzFrSQndbSfrbDKZZ2vUrvhCk8WYgkxNZPc1pD8FvDUcjxBs1A7aWL71NetkBzzPv8hS",
  "key10": "4DMRD3H7PkLBqa8HuE7zMhww7x5BzdQRFm8eSCdjQNUK5CsJgLopGPwbntd1Y6PKwkTowxjjLkE79hxd9QFp1tgZ",
  "key11": "4mntGSLdXvD9Dhm3wLuktzvSEeyQgT5L5zZn8wLSDgqaLcTtQ2NpvBfJwEZwfep9Fy7yqnawh5gkhnvTg8ffYJuV",
  "key12": "2xiqLFJeVk3DtLoVeiGTJhWF6N3qk7ZZqcYeS3xshrvmiNfJBptzM3j92SuW8mYoUj67zkzHdQA7B5CmHkun28pD",
  "key13": "4SKy8HELsTryCJokTv3oAcJ9dGo91UQNxtYxapLDSVoG4aZGcwXnridgEqhAA9MZB4J1SrBwUZnLbRma4fQ9x4S9",
  "key14": "5c9zGDQnQUo2sFRuTox6FfRErc4uv4eCTsWbEUA8z5jAkFSSgb4e6yuKLj5k2mnFhnQK3FRtZQMT3EeiAn6MGGvB",
  "key15": "3YkmQka3XLoR6UtVKJNAq7p44W9PRG2UPDQxYt6CQtpnAe8Yuydw4JXAz8D1URMwgJNb6BoPAWHfJM6RQ73gfYsu",
  "key16": "5tVU6o6cqCpqM5k9ZjsnhwsPRN5iFkDw9QYgXsCy3gZYnzeUd1CdVvaXCLYXSJ5aPR4rtHHquzUFiFLmUd4shGAa",
  "key17": "6DDCAAgqNc7bQUpaZEE8rCFvpzqWrx75bUYzgia32EZ9gq9yeeysdLpCgJiHdcUDJDyvjL7etRu2pN4C9dvRwKF",
  "key18": "36RbVmMX3CAntknTWVTeedZRxj2LK8xQNeu9Fb1CSHLvhXLoefY4gNq4eZ7CzmG8XdWreZQeLZujn2sTKGKFwaR5",
  "key19": "2HLruZnHveCXPpWf3gKZ2DsBj3MmwxS3RV6wAgVNMBS2LweQ7uMgBifkMiD4WBWdmth69DnuyEj3MGCoqyWm8KHV",
  "key20": "2ct1EGyNgHpRGbVyonUN4CrKmUeWThx72ZSVLGkwdKV1sAVUNDpVJ1bG3rpj7vUdFpv9meWNisYwVDaTtP6g5sj2",
  "key21": "5ST3VghaqQBh7vhrVc7hRikNpvbZZwEJ7uDkszrCdT89pKitMaZaE4gSGz9UQ92EeaKPtDLqrJ9sRoCvXcwX3XKN",
  "key22": "5FUTsUJ5kpsAvyY84Diispi749inqt6aUZcbkRHyVDCh8m91v81RGwy9obz8eZLgH6EBduxDnmDSzQjix8jgQnqA",
  "key23": "51KtdU8p7reKdNgZ9dVyn2X2ggAttiVip8NdhEPZYgXmRdvomV7kGts3JgSwxviRaajnn2o2y7SE9uJxzAkVQJqj",
  "key24": "2vSrWb4nuC2tVD8NQ62YSuzLEP2KNhuof5Vkd25kjXiBzjDeQBMHrJtJECf7WuBSYaar1JtfUn1TnpQ5Rf8V9wFz",
  "key25": "4NB12AhSHdeEDk44Q1JWCq1mEHPcsPSepp4uzXPTVw658gD13uQGguGtAmqfwEMaPMiLp5NCmvNZSowznLAtuPux",
  "key26": "a1qNyjZMa8Soyk7cTV6ji9UfoByK7xuMXTPrKc58NrKXi2SuA3qc1EV98Cp6WLzNGNU5TKa8oeZ6YvYX7gn2zmX",
  "key27": "G9XtDkejeMKwZWGzmgYmJcRGWJYbukQtmHsQPWpEF3Rix8QhfFSeLBNTgJez4Ey9iSHAooZbDrEzVB9t265HYgt",
  "key28": "452SNzVCy9DicQafs7aX1wn8R1XXXNAs6hFnyZTiE4bFfgHFXBa3sPNJVkFuGmqp3zxUNTV5N8c368m38xUvPjEb",
  "key29": "4MDgCZW1hsZKH6zaEtJ9wqTQZfPH82JAgXuGs94Ng2WrFRJ2MxcrvCGKLV284DVwgtsrSZ279f6k2oU8B3AQkNC4",
  "key30": "3Ebx42gM2NviTWnwZEMHUWvetKgrDGPr6BrN7W3cAfmVYGmXDRpraabuCizjNR9ZfyvcBnFtzWC3jttvFZUdy7rK",
  "key31": "Cw5mimhAaFEGuMCkLvLQ1J3rVo49yF21BFzXQqxWiEzhw4wXs3jAxGJ9j1yiCuWhfwTE7yzP4bx7ri9MsW35iiU",
  "key32": "635t3VTTPA6Ujg9R3hE23FGG7Lq6Zgg4kMo57GPzR8dic6HV2Co1fe4TPRV1XVGnEVoqifUvEJggDaYnjSkEmbjc",
  "key33": "5Xh971UKgM8VNGuW1NDGP5u3Mq7Y5VwKZ5GNEu1SBMsN9EQRPG8jeuGPhjna4eXkRRNYjDwqoURCTQu1STkqDKyA",
  "key34": "3RMRaEyhHEjJc22QeKUbM45joQVNuQcqAjENRNbNxsQq1fzTrcbs5iYsE6SeY6ENLEEaMtyvgMZjskaRcCSfc7Rd",
  "key35": "5AZsbsUk8zkwFsDj9UkXywz9c2xuMqXEcf8DU58JwejhjUAj7vt6Ponnn3XJGT3A2WaPUSE2hk864tAoNHcTLq3a",
  "key36": "2XoQ6eFsMFLS798KinufmCEhbKCT1YLUksftWRDkXQ82g6uvwLskCbnogVAemfjTBDZvSr1aBLhUDQHWLvChBaZt",
  "key37": "4yyw4QEPYAHCJSY9ZUVDkNuUmXEjn5vswGjJnZkM6RtwddPbcxYPea6uYnX5sdDDoaDZHXXnrNJFVyTpoJQyq25E",
  "key38": "4MBgG98gEFvhE9M4dsepJuCbn9rfH1aekV3RMCxEiXfjZuPhCcczhCFtZp9Tkr4LKbEy9nGcdGfKUVnhd4dKwnHZ",
  "key39": "3w46xsvyJ6EMHGm7eSd4U1qMwhQvoYip9rYwbucmN7mqRoFa5CYJRdwGwSS2bUs9Ur2H1Qsy1ybdhmgaj7g9tRLY",
  "key40": "2gFvRe6HqxUQHi2qdTgnTK4G67CUMRmGLqkQCrcEaScrUtktoa4C6f9S3JDXJs5W4udonTHTV7CkoLUsDr4iwQ3r",
  "key41": "5i8FjoVGJCZ1KgN7vJX27TE5R2MJ4JG15pvLYJuV3B2Zmn5a6rFSecqP2drffYs7VN6axauh2Hv43gaD9zVRK2tB",
  "key42": "5YADMexAzoT2E3iY3hoCha6PRd1CAjED7tmwMyF3HQvcU9cCy9madmYNJ7rh1Nd6syEBkn8rXZtd48CTs5rJyibX"
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
