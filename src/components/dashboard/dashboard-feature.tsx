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
    "5Tas2RgP3v7YoSLXq1PT77G6ebMZFke29EDbd5WUJDxHQrRTrFjTko1rK3gSisqBbXquUTBkhFnb1DLHW8cteCg7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RLx7KUodgpV6ecFQwijvoGw8Ck7z7LUvCZwRgFDZjxdfDr3gx9ENNTG1jZajvRYFq3ijXJLccJHibeFZUKTLsNa",
  "key1": "4d7LJZHyx3KDjfcM6pUPkBQdXaBkA5VE95J72uTbZEvT5dpku39yawBBL3dbDgW2CeUqPPvHfW3DjBSD15RFZ6Zc",
  "key2": "gQXbZ8if3sq6355qtMXFNY6NxYgvci25Uqzu4WRQXKzTjLZ8k7w6fbjsxGVT8nZRMkkuxXmNoNrAirshG1KCbRk",
  "key3": "2dq6Ep3ySukKxxbxPSpDxfMKgaArmzeZqNQyGPVp1ChoKraPHd578UupfkhySF7qmnFpLAkmozbVC27ZHGDLbvfq",
  "key4": "2uLJu6JCqUvB3st2JKpihaCbHssjLCCNuTzyUBsSxhZ3SN7TPe6fhG22XwFhy8K1hjJTWftXRibj8GdLSH62NhDL",
  "key5": "2jHc7kpqHQVDRLgxBAGJHqQAa6gqMMBhpLpMXdXGyGdKKCJgVoSCsD61d6e9vRSxGYevoTBfqrHZVRXEYFxQCc8N",
  "key6": "3j2e3K7FKsFytngNH1riLU93SjVDnHHkgxK9Wbd5wLqdVuHcVydeDbFDNrSKJgnLC9ZSyQQF2pJYZxBGaZeuaVfJ",
  "key7": "5wdyJ9Lcdx2xLVapgirMt1f4H6QPokFgcuBUCy2fCcAL6asVfgaLCuKZGcbpsDQpVkMVGJrhyoriyLVncj5wrEVj",
  "key8": "35XV5FzhqdMnGuCT27v5tAepx7Mg4rnnGyiQD3BtYXJYeUvnzoimx9daNKZW3bK3UmGSJ7DWJkb6ToE3Le2qwvvt",
  "key9": "5XTn71911kCi13g6kK9faiuyWJhzLEtciGCzPPkPUR5zAF8jwEf6zbDYGGR6ynAoGBV1kgavPM9Wus9nfkr7iztx",
  "key10": "3XALsyc1YryGsNc5hSBcvt7wBSEy5iRd7ddLHMyEJMfkCVwgUd6gGrCHy5aH6JmueSLcEv5e2hdGW6iPDDN53cJr",
  "key11": "5DCUW1EBgJQNyGLxHMhXQyRjF76128JiXMhPDf6RZSiWoLU8J3HTDYcvTjAtyVmWU2wSUSa1UASePAFFj7cmQdKp",
  "key12": "26AVRJV8km6Hpe3DaxD75edJY5h5urQCq4gizXhtfoMRUGWS9GCDWBFvo7AwT9sd5THfLrnMbtQsCm761ooD8kvb",
  "key13": "2TDoNWB1jjCvFRqz4zY9YfRCCxWHrXe9uDLpiZCUkuDTJSZJwN84yXms7G827KRaJdQphFtpgAKs6KE38AijrPM",
  "key14": "5nthC2LvKasAuqGFafxjDbG1tD9UEXvgyskHE7KBvMX2f51DgDyf4AaMEzZ78uU7ijpJbX7m5cdWemK6iBdKcney",
  "key15": "58jXntK2aJQM9kyvdrDybkwpVguVmSt4wgdP8pbk2rendv5NPGEZABsj3yeQmnYqeUgjN9r1sQSFhBn4rtVJZMRA",
  "key16": "5B9JMTNg67s6ovRPeBQVLn6pDVqtJt2KdiRGhV1mWLVKqWdb1WPeLPufd7VhbJk6oJ1RSm3wTQL9GYCxxBC3o5sk",
  "key17": "3z5W47eJVcqgiC1aPpTQeZKk5XMYWPSei85aemjP3uXHm9jGM1oLDJ9eGnfhKwMB8PnYNeBzyjHhrZ6U28iPspm9",
  "key18": "2a4PSspKGTGSjwNN3p7urTKhg1zEwXGUqBZpv37GcdXhuttg9jqdQJR6T2dUphUC9MPiFsmwpmvP9VCBRtGYaJGG",
  "key19": "7ztwYRPBEX3ZckfQe8iAHAfRzFBayEtt1EnutMFCgYav1TWVTnx25AFeBswAWtGGXJDMZ2Fou6NtYZbdjAQ4hBd",
  "key20": "4LiCaMehtN3uEj6wAgeKRxyMQixKN9Phdu3jJtviiZqdBzjChBfr59GRsR8niTunJtcVgYpTBj5gDQ9CCxThV99U",
  "key21": "3Rv4mUn8Xz9aarY7ZZq8t7hxnFu7GHvivnBqHt7ZeMAPttMMjxjRrHZdCJuUFNFzoBhRHA8SBFwtCuFbThN33FW7",
  "key22": "4Ut6YtktKpp1uXc2i9p5w7Sv3NaVgVvoqyxd5PLrHNgQCk9FC6HBsXYYkzwtfzET3szjbhGcqbj29dW6H6spVFfD",
  "key23": "3Bf4sbqhDe1hm69wBuqqq9jjewx2aP5ULkMfVAoZv37DwZ2QSE4FqrofV3uZeCx9YE1qsFcmVVsskBhv6k5f7EQ2",
  "key24": "3WuVdbfk1LApk3YRSeuDELPPGGPfF61vK3DdLUN3X5nzsmbvgLxYb7mf9bHBTixZhFZL19Po59jAFzqXoDnXA2d4",
  "key25": "3hJ1HmzP9vpj3z94Cu7wmYNiY542ByPzzU7if4d4N9MhBqw9XD4eaETBS4WvAiASiQqHi1hDPtWmkh3CDzcDimRM",
  "key26": "k6damnPcj7mo8mZVP85QeEZ8gR54QQTEe9z7FofTTw4bkNvnus8SbKB3sFHW8Q2uRfe7FAZURm1P6in8rSduPLw",
  "key27": "5FgVqhvTGHmpWg63YdwqmdN8qLRyPB2LEoggNZbCfdg1QDgzANeCHpP3fKVSS6d6TPVfcNxckzZdi9qA77Pz64uN",
  "key28": "4MU3NtAtFt9dCnDhPqQx58XFiRt78H7oz4MToawDBgKAv32f2yjzbnCSxiFwaEAKwAH3kePBZGAr9B3Mjxgy3728",
  "key29": "375oxgwNPVBhAEzKmfpZq9PKW5pxRrHAduuoZfekcUxsuy175DMHzjdpadi2VFQENHo1pzDhBmCaAJa7eHaocHFu",
  "key30": "2vyw3Zox6GYEvyhBRaDJeV9PuUKSgGiJqTwcGrbBU5Y59ss5Uhs1CSYRVhXiYtnME9URfvGmiHJadETZXBfC4r8N",
  "key31": "3mFM7VAKH9iwpgLFNqr2RSoCkoFytYBy8x47wAY7cqhHpdEXwdFV38eEVCVjzT5o4pMYFkkEcoP9KEbezpJGb7jc",
  "key32": "D1qcA73zfzEqUvbjqrpQ4QHFnmJ9C1dHCxjLxN9JR6RR7kfPnUWShQMzUGZCxgGhhunbUKA64aviJwZf7ANFsLE",
  "key33": "3z25Hpzj22B3MKy5vUAzzYsNyPzXEs8W4pvjnHWobmAgDGaiCL1Rm21GF3jcTFLS47dwCmtc82xLDiT2ofgvi1s1",
  "key34": "WpvNnk1SHdBEFCFjMHsY9v5dRVTgthZDa4dhcPdunQ1BHzghEpnAdM5KYU2BosFHpivWfYTdcHNQGkLqXA23uZA",
  "key35": "3KiQfPHgrLt8jveA8YkuNUYQe59e9sXGTboDXDR3mBfdnAFz4pgwJwTE4s8xZL6NCykLKMUqseS3sNRHx6GrYpuU",
  "key36": "5H4DwCmkzEMSLR7aLHLsg8AQL8xhKNfip36RDB5tYRfSa1PA3mZYWsFhQwcfr5mcX6rJyRG2BVpjGN6t38EVSVow",
  "key37": "GLddTkVbLvfvvMbUoxpuvH1LvtdarqVrXJgf4nCGfdue6Yeacyd8Ycf5XTPckVDrdadcnJ8F9s12kjrdHwUTRbZ",
  "key38": "2ysbV5YC5Q4amE5cU4TDADoYgCatpr55S9N9kCUrKxupnRMfcK2RDHT5rHJRMZvxVcLa6ASBy13MgFhP58xZKyTN",
  "key39": "2XGwJf4UtddFuzrN6Af6ZshyYPUuoCFq71Kz8PhezbChtACxpiCEfHYb3RCrUsaacsDXm2TqD6qYBu5oxHJkP7F6",
  "key40": "3rPki2J9A52qXzpPFtDPVNzRctpcBc7Y8f9JyPdJDgdVQ1sXpkRJLkKeegAPEyCae9UbujVLnitSCWzWW6ByF3VS",
  "key41": "4veugUsK29FKBrKtvCeErBK3oM3mwPquLTFx8sasTWoMtfzeMBG9t5XArQknxv2nR6H5mZ4TrdKyum5eHCmkYsfT",
  "key42": "4Qi9pbqSp7UnYdGMMx6wyGuTyG56kzjbJY7UngArYeqstm2sTyuNb528Vw5HQHs9oNdMRAc9v6SashxckESjXKnX",
  "key43": "sbdvkaX79jno5KotjFLEXkmDrs5qx8RdSNV1c5mY8w5XNhXDX59K422XupChHUDRjS3w3VEJVrDKc29zNn1zZGe"
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
