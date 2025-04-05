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
    "5eBXHZYw2nmLwbtAoC4WzbPRadgv6J1w4qBzLpxUMZGBKymKsospaosW7AUJPNXeP87CtVRVVuxX6pabuLnPFpb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67bZMQFRbGmRX7Rz5KE4Gb7DYaESfe7y5CCoissDxWFrHX55h4rZgCddhirDDoUXmHrsNtUF6Sdv1LwtEJCwrx4Z",
  "key1": "3vugSLRbrZV2hRsskF6oLEwm6iGbuzX9cPUkty931dzfXbEPrFUJEAMhyAYqqJrMYGcjmTHu14FEabhh79XtaPnQ",
  "key2": "wUcam2quHaQG67jFd4FsULErWaWjP9pnppjyxNZ5etepnGFhUHfP35kugg6xJZ5twUSwUT7xZVMG96ygyT7kTYf",
  "key3": "4rGtbEHhuNQBPS96zyRwgz1k2wKQihfRMnKdEDXFkCyuNvhDtsFLiSkM7qA4F2TxSNbqRvDgCm1CLamLvcZbmWSc",
  "key4": "3pAhGAuRWBfpWZhUJfQ7c7xy4zK79xHjvHfjqcbBBRHsKoKNjuXH813yUKaAa5tc3Kbdnat9yLHQma73nBMUEv7A",
  "key5": "4WAqbD8sYz1WDW2ZiAK3PRvEWFaMQ91WTtDiHpW91qqhVReuvrjWYmij1WoUU1nRgV8i99w6T7WaSLpPZtAbWTjb",
  "key6": "2Y9MeD2dv8CLYdSSqkwYZQFZfs3u2zkSK1VkgbqNTxKQMQ2oMhnwxbouuX4ciZG5TmGbs78J6dkq51Ur8tox8rSW",
  "key7": "25gJL2Qbsn4TaTf7rdwejeHaowGNJdBWecGda5YZVUMTbZNmW52FPTpBoU7x6HVPc5DZnec9gXCwAC9tGng4UXBm",
  "key8": "2QVT922brmpsL2unDtEuVSJnX22HwbQ1Aro4Pg3eLEw67hYrwctcHBvhEEGUV7S39Pmd8VVtZae23yBDW4eVEyne",
  "key9": "4W8SGwXdoDhEZC8XdQfVP5vDDXFXMnYtmjk64XMPHDcoZwTdS18i2pFmFweweZpnTCpM7Jmx17PfguHaTGpaJyWQ",
  "key10": "2k4oMbwWkbnmeKtX8JvRNVMpTk1vG8HNNWeaAmw1kWsESd1PCvDd2qvNS7K9apFQ63gG6qfgw7VyjKZPJTCGnKsV",
  "key11": "5QGZzANJo11WXm24Q4pDTcUjVKxxy87d6mFL6ozvHQeTTF5LJqarpFkLSZ4m2u2AKZPqDq3R7bxjwGXRHoiJf4kb",
  "key12": "2LBiSLVPs9HEQNPG8UM9GhW6hMpRopW2SfEfUeUF5HRNFRQ4tur1s6iTtwBqotG8qT4VnnNA1aV1X8qmJV77PNtm",
  "key13": "5q5U9Z1SkfL7d5g6zWNyM4U5c1gizVqYzrY2LmsL3YoB8ej6jS92RqBu5cr13sQouBqKfbAQNTwcanQ9MoprS76Y",
  "key14": "pzCNW94kxaqsj4nWQ2e4DtqTkAyhuVMURdXVsAG35qC8QGEEenpXZmQfDNedMaufq79mR8hLfEjJGfLs9g3ChHK",
  "key15": "3nh2ZeAsUvhbuz7hw53nBR1iBejXije1BfEU1ZcSRoz3swPy96XXQ5tRXbhqZyyiXjwAhECgaor6qX4BckLvKye",
  "key16": "hsEs2uavQoFv9YSisrHKj949DfMKxaL5QBVZ92uxCq4Kvb8ApQNRTFm3K28C8JSvyfmaewR71MPXaypGBCKhE5C",
  "key17": "4jC3scuaAYHrrXtYt1rLaRiP6zAjF934vMkht7PXYvnZRN3McokJH5YdUYi2LS1rjpJnJ73QHfqsYtyQm6TD5wk7",
  "key18": "4uZBpyeLdqvwnXad83VMC5qopA9fvnYj1Z2Nb6Y3Pf1TQAqRSkZWX4aRHTdfiFEXUd1vYXRubWsoEDA3E5idbxfC",
  "key19": "2EfU6nna14Jse2z9LD2gxUXK5ngUXCtt6xZxpVytnNyFchGhQvXoYxuqx5zxJD7h1dhivZeX7ysoRekZJGo8tfTp",
  "key20": "2a9RsLXREKSyzTnTx3f9ymEcqGTWwnFZDiWCvB7uMn2CTdpcWZ8vsnzhnNeACLzQXtc4rwaLGxfR153n8BP8Cj3v",
  "key21": "2BMBJ8gy8Me9J7ixzJgyUiLzdSmDRyWyCUgGTAbi7Vnf4rnKSpgfnfaiR1xAfT3CpZZQ3P6e5t64CTeBcFjL4FfX",
  "key22": "2SB5zzGS2VoH2gcNB3bM3CWtL4dTmWFe7KhRiCNZ68cuqmW4BSwgckxbyg8Gd6fYhnycBXmYsFYwBPMYqJ7e1wHS",
  "key23": "44SCBeNqgkh1ETwSkihDgixk3kPSXTSB2GSLN97HmLMdMru4p15Nj7ebn1sP7maBrkTk393a6tdkj25MccK5WCpv",
  "key24": "2MTRP4aJoR63tg4bMAoadFpkg3LTrhPHwh5kNwUPAVNGDAANPefTYmPhtmFYRV4QezgnQSZrBKj1tijaEbVdKEvj",
  "key25": "boYpgUtKrE13tnUUxpcFFCJXkVDRKksyaNY6oumf3DRZZdGS8J2FkS18S1JyaWW9qMwfvLmSjWY2Nd5gMq1TK2u",
  "key26": "4ZmtrGE18GWikRBdNkq4dTizihE2cTAHEc4XDJ8af1pbg56k9JjGa81kDBfmy4NVWAcWPKZ1zmvrstRqXjAtwfBA",
  "key27": "45ZW5BHBBuqym91BbZ17h1RPWmAsqsMig26rJRkeJ5JjCRsNovE7AcH48qppcySc4wQXEv29cxdmgb32ZntPPojp",
  "key28": "aPAX7rYr7wWhKePPKg5JrwYKibqrRqmmKZbuWjZGSDCy2U2uNAF7pCJJA3T2G4mxMPtQLDfY93vtPihyFfFXqLU",
  "key29": "3g4RvCpXNj9eE7ZkBZoXpZJ5P9Lqviagg9vNosGPHirwfzEHFBXmcEJPnDcpHHvoK2qrP1G5J19qb4BpZLHscA51",
  "key30": "5XUKUM7e18U89kupwWZQaxh26MtyWzdzQ1P7nk46FD5tRnxZ5E9cQmZfdSSd2qWaPL2M7Y6bTE5fLCnBhmcEtsG9",
  "key31": "3gymWAVDwBmcWND46872vGzAPyyAEMLWrQsHg1C8zSbUVQMwEbhytMyUXLuL2h1ZEWcQJfdQXdscwt9MsttB9QyN",
  "key32": "34ZXVfK4E13yYoqhLrCizQdbrjjKyKm9MD5a2xsqWhEeLPiSikHQAUhfk2V9JyAbycMk9E6FsqDY8emTZHemRVNG",
  "key33": "2ikhRqoYaziVwzLFTozn7pn78ucFFgfwaUnJXL6rA8KsFSgYxo8QenJhASiKUv7WuD39T5grBu1aYmzgSEDSbuHf",
  "key34": "3yHkUmTa4DXH7kGssfgL7xSjEMR79MNxuPeFxuz2TQXaA3rhvpM7PDny5kwrisrDGgcyod8JSuidBbTLvntLRCTe",
  "key35": "3p87g6gFpKsonN3v7muwwPKZXmM3ZHTyEyXZhDExGb8hXdiXUNKjEQorsEgVyxnPsGF3fD8tDhMEVRnPBx7swYUK",
  "key36": "H7PFXmMnSH8MW6skNhFMYW8QuW6vHzyP7CRiXzTz3EWULNFvJBbWZ4MTxe7X7U2FQGcwp4AVLAhV5WKNM3baBKn",
  "key37": "5Vcx2dR8SxgeLGskys2CprrCb7gfCg2toNiZ6HDE7YzQXEMYPqgs2JGHiqbRmFg5uU7QBxkUW1H67AGnVmBZ7VJZ",
  "key38": "29MLE6wpCjbSmTteVcjKYb1WYnEN3Upa78UCrsg5b6fRNLy9weuNr69f1dHSHdPuaBoLVf5mZA1L3uDy2ynJRZH1",
  "key39": "263uYgv6ZfQhRuAMZ3yryokPkWiAvAf2vyhjqE8Q6K1tsuh9FS8qUZ9iuEp5JNcX24CKTZgDTL3vH3pbEy8cQiEf",
  "key40": "2xFpheKG2qicSbFSjtoTd8atXzzXk9n73Vt4yH4k97Y4Wgj962dhT7pEgN3GzaVGFqdNwhvPgM6sa8BfMgmneK6W",
  "key41": "5JqKb64VmXDgUY9HNNZfLNwg7JzFgUBaJsSYHdYy9yy9NAGuTMhDYaXSwhUyf5USLpg3hdFNDppL6fvTDRwJG8uT"
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
