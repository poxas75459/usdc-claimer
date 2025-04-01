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
    "4wNS3diUiBKRfHAWsys3bkk2JquuqZat4Q7WytkSjUHmEiEGrE5ayZcs5P4V5ATToxJFXqqfQRDmu8Mnp5yMuJ7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dhUarYt89gCc7U1QDMEUuU8N26Tg75zpqahkYRfDa1AgJzAqM7zigdcKZjw5LTajz8XCFWgKnWGLUZGwuU29WC9",
  "key1": "4LtHfVZtu4i8qek2o4k5toUB8YVPY8RrypP1hPPhVSdC8FpEUSKqyERevvSmtu7xeJ8EFsumGgtReLJUejbyVo73",
  "key2": "4PTRYNxRvbmpLdAJstR7iWGSeWZ787rFPDc4QgUUUGAWmQYex5Hjg9mZ34qxDxqYxVFgfDk5whATkmhpy4pG7fAp",
  "key3": "4kABwCiQ5FjqTvhTMcQS5T73xobU7uo88YaHdmdFaPTAJ3BuTMT1bPnFYqRjUKihxMxbHjQUKYKJRkt4XVbuGsSM",
  "key4": "67VxumGksFitNfbfKGspryjaSkcrobwaMYwMrnFevruhVYmi6xHGteAcJXfuqpxbavL8QuBxCZmZMUZ4DNcsRAdL",
  "key5": "n4HCs1VHqZZc9tLL9WCcJ1LowQR7ZHW5rvs1bqGyV8gnE5RURSHNDofUxQL4ANNMWuv4bTwWuAVGHbZUgGPXRe4",
  "key6": "126gp68RK6cdxCwmHSt98wm5piscR61cxk2ab9qmtheK3gdcpwbcCJqFmTkBzmdcApXyLeftHpMahaY6c5tw6Wst",
  "key7": "HmuHFHqrkks3iC8eAt9zPWfdP9RznyLr6bNL1JwkHCbZjEjPWM19CJ1eFwRKs16YBm9TMj8TPCTsSRs3A6BJodF",
  "key8": "5mkaBc1D7JBnMDmKXnLDxDLX9sKNfqYixdgu1wPqpdsxwUZjR5WcXTGDWRzbKgepuNGYAaHuQDeL24vPxPcfp6Jn",
  "key9": "2kNWCxwNrd5avPucJYTPgezdA6n2v9ycWMTtXmRJ2ao7WMmQ6MJEMjbASg89mB9y7VxesiyU3LDz7FDmZoA597tL",
  "key10": "2RFjiSdviEKkDMFZf4YxwRfGvAG6fPBagHsX8tPNfndbLBmayhWcCFRYFDRDci9g8GD2zyRfQ4pkzcQVxkyJdQAP",
  "key11": "5miMQfrvnTUkMGGexpQE9JtM8sXiKTzGWj1JTrXqpjnAL52UdhCxEAcgZszSsGFMTGUZ9kPAayyXhsPaigyk9tc5",
  "key12": "4k2U2hCFkBGB42STATJ5Va1MqjbHxT7pYc2RKaCPfAaGpquirW5zYcQZdcMxf8HKHLwH3t9UBLhJzJh2knzpn9PX",
  "key13": "5qAmkVsVttPS7CEoh9juQBYjqJQz4WjyF4Fr2u7mk6DxDpy9sEtyDKkRVrUxrAMDheHHPdg6bnEwGK24fcF59EzU",
  "key14": "qartJ5B17x1J2PjqaZ1vjv3sZ6xLpUhDE6qWUGDaswHbdeu2FQjrvhdqCBMfreuXXwh6Khg9XafqAch5fWRxYhj",
  "key15": "5BW8gvMaq4e6mJeMsaoJjRnqo2mob7tpzNZ4wZos5FhS5WS68YGaQvDujV7QB3wMVmbgNAB5TUP7W56EA7WE7aHi",
  "key16": "2rDsTuUAWicfFckJGvMz81uk4SxSaTwJZjxfxaB1A1Bvhr6MLfWpSUeaZoRETEMBmm4tvezAq8VyBVnzBcnbgJGP",
  "key17": "4mpA2uxqejUfx3AV7NHDQLgybYRy3iU3UnDCG8rA6unSU7aqV373p9EG8iWjeUSvkvUt76ZoHSPfuiGmyANs65nt",
  "key18": "257a8HxCpr1362i9fBy1DwNhgTEUAC1ZYhbtuYvPXgassrP84NfknqbswcP2BznXPXeG8pLrSHNZU726WVHmqbCj",
  "key19": "4tTAktHjaf5hHXi2RJFneDYEFC325K3yorPRQgHwuQ3TFD1YFzH2yhCZUsGigUcZrZJhojVHQzneUxqGZQejHqGh",
  "key20": "2YmSuiz75PSsqcKRui3eBaZYqGeEtF17GNG19HNKSCG1Q4qnxeYTrjdnChMJaHrgfFvxJTZS7uJWm4pWzwYVrzt4",
  "key21": "4SNfphJgfewPcBHgUsaaCtRx3XKo7j8zFLXnwp6a5FpxwR3nynAkthT7d789NZVCpxyZzoqwnSLPUndW4mPJdX3j",
  "key22": "21y9HXCvGTzgpFoUMQARTMG3KE938xzGqQUGaU7X43Hp8rd7WrSVAXcfWSoHvxjkD4gjnNP7TaWZ1X4Sjz7oPSzk",
  "key23": "2Qa6nr2iSsxW8zxAeD7XNffb1RqPW6Yu6tYZ4zAmq6RjsBvKy8bwqLHGeRR7tYvGqsMbBkHPJad8Jw9XoauygLMF",
  "key24": "5qiknfeR6uoEP6169GufKLiCnqZts4DAVQnZYszPvH2GCSnL3vQHkL3YgSgikAyR5kBfQcEr3wgyh6n4Qqa4qdVg",
  "key25": "HiAuwMkAgHH8A8YufQsobT7UYhsTEZcXAwmV3z3yApE25sHwbqTE6N7MBUD7NMiszdRfBhs2jFfLRnZgVVtCouH",
  "key26": "Rt4CvG1GHe48QzU6Ug6NdXuPnLxEg918VdaKwiKYpwuz8uSLdNiNU7PKkSPW16HsrCXN5wNntccPd1VWsMsaSb4",
  "key27": "v5kNzw5b3Aoo1u3yyZh1qJcLjJLUScexE9HR4Wyi78GU3L6ZQ7m7hJS2Uog7NnVWmSndBsmCT6oVR2h7zEojzhj",
  "key28": "yien8ddVEp7N43wULayo1LETN6TKGFhM4fkDc8RayUAtGgBUu7gfEdQQrCYBp6qcucSEfmEy9NJmXJzv7Fh54Gw",
  "key29": "Y83NYbav145HSGTsdSaiBpeNy9py9yUgmhC6BLqy8QNspch16DRqsz3BFSNRX6Q9S5Hcx1sGAgbUPKodvNBAhJq",
  "key30": "2VdEu4a322uJv995wbD7cnhi2HJP1AYRw9yr9TEXLfttvNQDnheMPsyiqJCKhrWjMfw3bypCR1s1mLQh8LbSUuhm",
  "key31": "4t4Kv4dD6MH3NS8s9NQVnxyKPLuNtfHxUHD4jFr997W9JKB29RmjGBfBbzRgx96AeHFrFQ7Ke1eu9nLd5CUAmSuZ",
  "key32": "kS5tJcNUeR7oRUAhW95wWMxBw4zENFHyNANe2BwafTpmXQhaPeN5MfAoFzL22ToVP4d7ZTFi16cuZNamBbeGwZK",
  "key33": "5XfbKx5bQqXLQ4jdagKgVEryRuiyhdcniiFoG5UxtfewxF6zhwnbzM3hXsESa74mjDSE4Caq7ybEwRTBGxMNKSEf",
  "key34": "3fZ29MdLWPVe8Lga2UZjZxrNvSVyTmtt1ZwX3BgEJxyWbFfCKDaRfUZvoQrTES1QVhFKMRMtvXJeGvPJ8YjNzudE",
  "key35": "5bweKAqZd4KWdHPRofvU5djYA84VtDKvrNC2rXTHoKepFeCZLxozjDzARK2MyvJA734RPnBhmPRTuvQpRBHAjptg",
  "key36": "3rzhjZrHHEQtuxPWoFmdj7wmrypGRBWM2Fh3FB9Gzp5n1QB9Xmc7z5DQuiWUrEFp9Kvg9z7H6hEBv6rg6AjACM21",
  "key37": "3NVNRqYJpUJpGMRJrrG4Bi1Q7adRobyWpEfncJ5hzik4DkSVpMDdKv1azNFTUM3TvhgnsJTNuyCUSidaq5kfMtgv",
  "key38": "3aum6kKDv4XrPpqwMPNv1G2tggwDTn8CcHE1CPE8EbcxHALJMamFF3Xra1z6aQkF13roJqQxUpPADfeeh4meZNo7",
  "key39": "4CPsBNPwhvZuJetdBogK3hajpy1DbbgU7j3ZbLFnB5bPi7TTDXPZHnPk8qFd57wXWgxGGScnfgpxPWBjK53CaEA5",
  "key40": "3zjfLucAcrSHuUzPVWS4ddzHm7raxKRFzf7RdpxPSPTDvamQ61mNUVeMhyU6T7urpEeJ7VkLe6isGUxQBe5Bs7Mn",
  "key41": "2wvXBSHh88MDb6UzSQZvxH3tgewbrP7cqXepJ9Phok28wfPKMh1L7UkCjKVapLAQzhUx3AVSL21XrAguRx5jgGf4",
  "key42": "GqSZ8FwFmknq2svgvSEi6vZhACWC4HPS2tjZPWrP6a52iRZ3VbF5NqKbDxRvM1mg2i6YfsTS32CMVBP89kfFhfN",
  "key43": "4Wf11q57EVfH8rf3qQsTjxoup72MgjHoebkVTprf78yrwNxtoCodYSUn9PcEbzbdPZiwX43wi4nX557Dik37iwi4",
  "key44": "4fC7XRiaGe63JtafSmExKe37F3dzshpn4kYZPW4ZKpFhZhGx7qgvaUhuhgRJY8fK5J9LPM5NnoMuyN8HzcQugCMq",
  "key45": "4ueYwXtQofbtg7o5rPfXzxFogtmPNnVoA5EjKxzULyy2V3M1oWBWDX7PWYT7wLnFKPrjtjBijPymrQ4acEfaJ4Tj",
  "key46": "5pPv3KWUJFoVb6w7ein2hsePNsG4TksxcJ7AuT97rTM1B1WtDoNzXQcQnx1bUNPQPCMT1mmMG3KJUhK9J82QWTgx"
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
