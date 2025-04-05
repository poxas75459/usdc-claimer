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
    "122XoCJo2mpTxChzXin5rQxdyxGpHCcMHzzkBSDnHVpgEeqynafGrxdm2trxJVteVyiiTQZkQMGwVtdvdtQA1UVN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZLYardsNGR1YBRNfazMESDwFw3SBCU5YQguaqZeUYfhd4HnBRQGQWgiiMVHkrv4dQf2SFGVisuZMhUeyK43H7KP",
  "key1": "2iYRNS5Y1KuHXbSkyVG22vyEbkf7asbayk357T7QxNMknFFC1zzieEtgaY8nmoRpNNahuNNtnUoAXNDUUwWmkUPh",
  "key2": "Phfr3jqgreuZF9zTpp7Psv4yqeUoh3BYXeULxboLMdiDKDn5R5kN65EDYWLM45xcPZrY6LSdm7e7u53jmjnbQSV",
  "key3": "49zpzQAoHtNkCaubYWHxq9E1UQDdDkD8xE1TL4e1YSxEe3fH4qYsV1FW53hFgVNX7qiFHbJGpyvTku3i4su5rPKL",
  "key4": "63KPmYpxb41qkdc6xK7xUjn2gZNmGkaPrDrm7gwmMqweMbSVLo7NPRVbkks4zHzsxdmixXeP5tGEQLtCDJ8RoCJ4",
  "key5": "49enpuP9RJnH6XLUXhtTbc2TdevqVQavCn4KeUAhiMCr7ataRawtiHHdE6N4v6ppLMy6wwsPGrDHEsjYvCGoYKtf",
  "key6": "4UyMZLhm96fjhvEZbP6YHcXWPcihR6gvVad2jEJhXozDRHt43LREZBJ8Ut4nNCFnbSP2se9WHa3dmN6Mew9BKWZJ",
  "key7": "5LswtSaeVEpAnn8Gfzk2a6iWaBAqqXk4ygLY8e1XaocwKZeasGUuH1KjNDsBzxJtxqWYKP5w1zN8KYJAWnsj5QsM",
  "key8": "5E2oCNAQLYa1asARLFZ8dg9zgWfEVCzYDX22Yfc76TmPzJPqeaU45xxTHwML9RjoQLDg6o5uYcvDouEcbf951WF8",
  "key9": "VVWKePAiiVhaZZHWBq8DN3ktKiTadRSrmje1LyKnd1b5qBsmTPxN66HeipsJ7v7zeUuL2eUDQ6iMC2JLNncqQC9",
  "key10": "3pAF46ogM5zyzh8Ad21Y6mK7Evzka9M37S44PtozumguXMjPdNUq4TmcsRgCp93K3NScYoCeopeqhRC7UxkxwnJh",
  "key11": "3SBWPw5JafmtboHxUsfskgym54FPNDxopGhR8iPL7Ssd9DrPZpi4X9JU2qxgeZT9LUy6cANS6CimeEieTRhbWJkB",
  "key12": "4P6uhSrUPPe53WNaCAjNsC7Ki7SbbD2FVry9TfrXsg1pTR87vyiom2mq9MFsxy1hp2cWSkaUEJKnWKEnepDEbzzm",
  "key13": "5aPRR1MLfGKskJRqRf1i465FrNHj8EUgEtX9arzMLpJuzUa4PZjnvoNf12u7ZZnNaPjnEYU9Fup6FqobLxHAdGXX",
  "key14": "5sdPaKPR5tsUnBBQaytEPFLPwySaWXVFx3cnbZYDa2zZDw8eCEv4Yhk3iawYm8q6iCwoJb7yQoeWyThKbJV7CXmm",
  "key15": "3qWdgRFdckCbQmvJSCiGqH39BjHHy6T4oreG92gaMbw6YVkPXZgmt5eZAi2opKjTSj3XJeDBnkU9Beax38Q7we2q",
  "key16": "2QucF7eQqecAmJkDEnphvZhC9n5i99bBPdYFkAqKgKrbD2vqAFBYNm8N3T4xuyVQqRrTP5Du2X7B7kZfqVZiLVZT",
  "key17": "Q9xoHjHpx9ZytCLxky7JNyKpjXugiVPG9HYtDUZYnKustYixQZ6MVKvUkP5wYM7s7VcnPcaJzqRVVuydUpWrqVx",
  "key18": "3z4AaoKmTcUS9FkRjDFETQcmcNqbvC5nd3TvmA8tWr61WjDeftQ6Y2rceUXigL9g1P6AmW9NkqoKb8ydbGnmGvkL",
  "key19": "3upmSUP9jRudVdRYvmR35hM8ZW5JAm5AhB6GdP6oxNLYasuG2NF4Jx95ExQ8mhhTHxPZTSL8ZKscbWEwTtpn1SDE",
  "key20": "23psndR88XX4Da1nkzXMeU4FaS2EKSw1YXNBM4YnuUTUqFvHtYWEL13jQXHmKunFXQd1p3hj6yrPCrp2sn8spvma",
  "key21": "36PGizxeo1gjYo7ZiT8EY16MtRTd9MmPjCwpSJLnWCeKqxdcFz4ksw5rXdWRqhgR5MH3amSckHk2JnsAPeaZePFw",
  "key22": "6DE6igTYo231KGKcFNgMSU4RFQvroquzK4u7Jdckvcso7dBgqtbeNikjq4LpUojieemiTHA8gWoXQqyE8QHMMBF",
  "key23": "3fRFqHsqr173yc6M8kWndZ4AY58r1YnjjMGQMcDXXsJK4GfP7ELvukpNS99tRyT5xeev5Cxz3d8AgtuuSFNHQiiL",
  "key24": "3yXqKN9uS8vMpD2XjfwS9ryje7aiZzoZHuShWcVgqKgDRxfirewsvserPrRdtu4TzoqM3pUWMGv2ZDQ2hgrJKr9w",
  "key25": "4k81Y6p6cHQNAkPoR6ATv2J823TStbaSDynT9P5mrRzgXH8NmpG7JWvxdRAVBMXR4ESueBB38ksU8kupStt3oGmy",
  "key26": "21bEo5A3vswhTACRtPxtHxzKH2EsWktfBgrdCv7dPTGvMLYcP1Cws2KQLikrfTSZ1QtNgUiPdE7iQfGZF7YMij2E",
  "key27": "54dG1iJXf7zQsxiDM7zgc4k7q3CpuzH53KHkGwREMLEKFXZbNG3rEC4JNimWPysju2wM67VSnJMPBrZEr18xTY85",
  "key28": "C41R2aajd6QDecSUcCP4AmMigupfB2iKfQLrseYrvPdFzewqx1JYHHSQEjJRCLYt1nommxan4WTgChLmq729GgQ",
  "key29": "4WasVWLMGdsj4LX2t2ixvehazVQ6zzDi8kWQvJSfoyyfcWq1LAip61EcSJuq8PmCmn1uknFLfkB4RGZWLEzXN3Pk",
  "key30": "5SePBa9Pi4mN3ZRoAc85PBWdxzbUfRDG6f2yUViyfdAyZBPU3BYRYpJZFH83RvBFmVZUt57bDBhmKDfqANeB7Yt1",
  "key31": "3VVgbsqeh4feUmHzzP7FLkCa4yaFb4FyXskmnKiNX9AjX5xvybM42BQiebY7cchMkZgbQFZ751hu8CLPwQeyQsjq",
  "key32": "3W3j6w5QTUpJjfV5hqcEonSf6Mre3fSqPXnyvbz5fVuCDvXxHyMQvf3pMD7SdjfWXwvoj43EUWBNiL99Jb8kE8vv",
  "key33": "V5DWJd6zsYjWfPPoVkwQSoPBjUmJT8jCsF37vEpWkTTgcQvyqaYLQGU3SC294NxAyGJ3PrAh4EndiUc77GBdctD",
  "key34": "272p6AN8FUDcDbNgcRENKFTh7DgjRPWMCY4KLFdMCmwvM9YEUHcza8fm7vgHNAZz1pTNAogyQEqKKZ1kVNT1dxqM",
  "key35": "4xgYJxGKEcTm1GYU5N6n57FoqmWS6diHhyWrJAsSBxHA6f2VpsRrkm21CV57AtjddbKg3MR4M3sjazFGLBETLL8y",
  "key36": "3Pdcoxh22r9nbh543w5WAFy9eFJJiPRPACFri8uLGbBrcznTK1W7VvB4Ak1hVzKnZNmPj9E3Ff1SinjeAKSV6Pie",
  "key37": "5SQ9k15WhqXEiHiYNwE71TDwJGAajSdPX8N8iQsrhK7hYwxDduEKEfjnMGCmEw85kA3nThKgzCocZMJjXtqsDAG8",
  "key38": "4P1zXDi892176Hi2jdAjcWiott39ZJMLrSY86Sgp93b8J25u1rPdi2cBP7NLXukZXfumJw5wyF6mRZRTzfX451My",
  "key39": "4tvZo1VuPprVayQv7GGqkKTgtYf7Ei6U2iWNnYQmzXc62BvFtKq4RZJr1Nm6W1CYcq9JHM3QGPZHh2i4bpb38G5h",
  "key40": "65ZocRApEsGmQRNuBJ1VqrZ6AM165AeMvM3jseooXtjAJ5pdwSM7CojDJ8DJbvi4kywip6oALGF4YzAp9xqfiGWz",
  "key41": "3FkJzJ9H5wnTuHP1AKr3hsNH827Qp7TLeQ5w8CtTGrTtnktBoJacX54mAvK7wGooDgqkBzFA5k6YzpmR1rdy83fy",
  "key42": "2W7Uc3y8cAvPP1LSRy1CmeQhfEBayZUvpLQyS3qN4ShW4W5Su9WDtMbutMAK1rQVqzV7dvDrx816c3NjN14ePHa",
  "key43": "2csUpGgwjh85qAytj1Sqt3dfJND2egjwBezEyKzASLq3vaR3BfUVLCZGdAGDjDNPSTFmZ3jUC5r1c3mbFADEMZU",
  "key44": "3cmNN3tWnCdxPrecE2b3fgHYCw985pS862c1VsJkTJX6DAM6M8HqC6uf1dFLTFyKGdGdinhCSacWcBxCYeJwgQm8",
  "key45": "q1TcadjBdiS9VYtGYXvVk92iFB5tC98MXr6dTbpop16TQLCpss4a6FrKF1NpHvvZFz887gX3nYb1UEQXQw8nVBC"
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
