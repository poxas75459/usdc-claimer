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
    "28nxbbqJWXMrBjUrvudke7aTfcKPH6ieYxcGgTHHeg9TX7x4V5pcCZWLmd9GEUN9nwug9MVUKatDmAJpgyGWj3U1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TSV6S9V2XS2VTFHzz8KJUjoa7oCEKnZQzC27vWSrZtfRsEEMGyZu94tubLJSSP7ndPsHGsx9pFs8suV7KXkHMDA",
  "key1": "N2uxXvrwcJEph3TV1VDpoQw5obcHx2poZmXfRsD1soakV4Mj1PKHkGqQZXmnhzGKLQT3ZwDLhgAf1qyuomttapj",
  "key2": "4NPPbyfbWPCWo3HmrfoLxjXWsfheBYY64BpDMcEtnzTgKsmyA6VMTYQmFEyPJ4BoGrikykCttSj4CGPvMhwetH2Q",
  "key3": "4cPj3W53zsBgmNoWXtMHuDPt1zD7bHmCzrqCXpfgMH6TDjEjKQgiCrG1HLjEkVQ3vidUgVWsmZFAjqa1f2o7oPoV",
  "key4": "3P4BbEGBEiG7wfJBRCRSP2uBdMY9tZmBqARNvtTjazXTvNLuVN7DMdbpwn9U4nh6er6pJRpaUq1ja8whdUtvaSyq",
  "key5": "22GVKcTrkM3ANz4afvhXTRTzQ4BSh5YMfFphajuewXdbTewBTXcM4vvkJU82oxPpu1UqZNEkM2nHfKrWXuszXEQU",
  "key6": "5uKrXtAwufFTRgTSYC8ximFAk4frG4iR21BDpL8wRSXKZmAyotTdUfvvPTP5Xi14pT4aMFLtr1pYK5QTjS7V76Q3",
  "key7": "4EPSJtMZ2g46yTxYeZM9SW7LXm4LngjYgJCEmEYX1VpZhhvExayttE1qf1KoyPbhMZJToN4o4NNcYYSMjD59Ncot",
  "key8": "a5KDqQ5uJRZcGgAxx5sCocUs3N55ScBYoQmdJ69cMTWyR4Tj3nPpLWk3t3A5e2aN1dhUmCwbwMhfWETcXXpCGY9",
  "key9": "2vXoQLn1T8Jn3SumjsvoydiLEAXCqtywNUY9rPhvzd69A8t3a7puivNDFCSJhzS7an1B3YwstVXbb4HFRQthyvnV",
  "key10": "2pVWFtT9qKctk2bM4zm48mJiFnzcY4uaKgPtbgkg9qivZLgTubgCZXs8dQndZ5TetNHpbf9aajzDGQ8bPr8BLf6Z",
  "key11": "5xz2p5qLAYbZHiwWMp4d7Ca38Liu19FfhWSPUikZVFx2mC3yZ7LhJrizZSeVvmPWZVy5GPqNvVqPCp3rw1uH2nN9",
  "key12": "5HZgSNoGQcUtNPPtVhSongErJC3zyR9hPURsDLngfzogUmyWqzFemxtXfsWrEmiQ3TGciftzmcv7eJ8WzkJbBxi8",
  "key13": "2JLYWBSxLbd9gtAs8MZqQbrTEprK7xHjh7u7kCtpZ5jBgjALYLnPSmo5VRzan6JT9hpzEpSxSZx89e4P6x49m4bL",
  "key14": "5Wa3UDopNCzEJKeo7wTmZWJXnQmCbndRhy9A4J26z4UyhghgAqyAsJ9C9MpHkXiEwACirZX936DFovKU9XThDh5r",
  "key15": "34TbVYmFhyij9rSrbNqn4S35X9tAdP399WWLfAfnBL11pqejmJgAT5qhY5JkXuxy1P7mv9r3r2R7DM7mPqs5xDLx",
  "key16": "3funw35XBggi8VjQUCTLoVsYeT7ejtZhsaLFxdmg8aq3EBvcet1skgiDjgBV2yugAqYwiKpsCE14EpYMiAG19GUt",
  "key17": "4SnosCLVmFmLGrkt1wYd33gNUSqREW3RscEVs1Hzm5z4f3Kvwde2AisV13AqKFfyM2PhQv8UvKDGqECVn6qoNRJu",
  "key18": "KPo92uvLDt7p7mHAMFjrcHAtabRpsC4zXCyEFx1PY2hp7bUvEjvysyAF4CEcaxdtSS5NRs4xNawALdFKQCP8HDy",
  "key19": "376rtsYkrNpQwD6b7L79X2c2L6agF5s6d74Pv1KHLDMhTJH653kvMHUUfxyYkP6FC2yTvsfXwtyLjj8KZipeK8kw",
  "key20": "29FNRvUohYApcffcPqQw7kUgRvk8FAu99EpB19jKoTw6AorUaLvhxsprqbb8pEv3AnCkkFWY7UBUSnTyANpptwXy",
  "key21": "51NfQVivuVPauq2SDrW15Bhbv1XzbYo2SURM6hCdPMCn4kNcxirSMgKk512rvdfNu2JaqcuDF8jYT45aH7qmKA9M",
  "key22": "VPcTbcPrVYiB2w8SP3jDUyPy89ReiSVd527pUv1Sg6ZScGJ9g7LFqJHzg5M8H7CrXRZ7jVq4Hu9cTYY3VhARUdS",
  "key23": "DyqDGKpnTQXXJhcfC9XTKiJ1AnxpgBVExWSfhphZgnkw5y7GdxCkfCtqBpSwKZRs7kMwRcsH9eFSzTqbCRkVSFn",
  "key24": "4cA9hPEugWmpoCR4YEKS2shvk6drg3ch6YayNdEoG3EMK6d3QtmyxjMrVQfYdgYuKGUWMugTmNSwnB76KYGkpXR7",
  "key25": "5KKui7Uyh8b1FzB4RuNH2LLjy2XfeXUroDNJokaGtiiQ7CezgVqjfH17LAU7z6FYhfCxM3kGBkb1tVLj6J37LJfU",
  "key26": "5AfUfQgcCDxddXeXFstHQPZk7bLPgRFZCn9wz8UUF41W3ZyvVXrxLQSFYLhkxMz97A9ZznSi8v1RazbmSmrUrtYZ",
  "key27": "3HLDUcHPfDqpmotFk8VqrbNHB5kFeZVbWJDDYU4awa9kufyuoZ8ogsJ7tXSY5Rt3Wbz4RXxHcErmScg2AE4xDom5",
  "key28": "5frhwnkLCnKcu843sd1igtnfpP7EMqeodCLhExJrpJBZATw53En18Wu6g4uEEpqezJHgD3AtYoTwNYVxSxGKkBou",
  "key29": "4HNY2wGHwE39EDfCSBrVuLNbE9DNskWMLcvrdAyyfATTHSbCq1nVG9afmKHDND4tMFRs7GX7jaf72yQPv1vhU5j2",
  "key30": "4JWpdMsFHAWA1Zzfd1u37Snzkf9AnwYQX7PbymKWHtzfrY9v3taMhipnykvbEpCNMkxNX8T4ormfkfqZCVRBFcSE",
  "key31": "3MFk6Eko3CG238SF3UZaZKfxK9G6gnvnHt32JHZjBJNbtzs3Sk8HZwJukohqNYmFQS7xVZ6CCXkEcinkxcGfDZsw",
  "key32": "5cJwu7m3e49bXh6d4ti9DW1zNcLZEzvecvy1v688ct5TBq29cdzbnMoe6zugQadD76VszpvRxwGdCVG9oPLStcXn",
  "key33": "bKtajhYws3Y5aNDemwj392xg5jw2EBSqQZjaGchESJUzvvsRs6ud6GVCgSquJ5sFu6uZMY8EZ3ok43rbVCySiyQ",
  "key34": "4db3gXArMEddfMkApv2o286S9joAa6fHwgDr5F533p478AcAAGSSZAz34DpiSYw7RvCEuotUTvzEVPasU5vGUkze",
  "key35": "4NDbaPRPmw53rM4Ga37fT1yJ1ha2BGfVbDNQ8NszRogYLjxM6eVuPcqcTFYiiKGdWAGLZBbM675LQffhUfuiCaKS",
  "key36": "41fKe9rEMspgXmfRf5nQLTJ9UWtmL6tqbtBRRXecdUkuXscs7AGZZiX6XjkszjsW6kiBAZHL4GKMPfdwgMy16czE",
  "key37": "2UKK3MGYg4KJ1iCrUtndiNu58ckQbaEZABqzKcw2dyv1mzYSrxN63yXeQTUMia66ELzDUdHUFHkjErtdrfvBKvxT",
  "key38": "nRTTUFS9hm6W9CHBDyrJrvTSnMP9uJYNgcAZUb5U5iMUuoz7TdSzFcRgN5UHCnmjXtvMrQ4jsddCYfGoQSYb43f",
  "key39": "4MRnU1o3TZM8u32C2RpKMKGtwv2Uo1VdXijAyu5op2FWJ6HxcQjdi7VXnugn8wkGgvaABU784xkkDhZcf3da7hLC",
  "key40": "WGtPLdZRi7vnzYM2XbwVFUsNhuTDgfkm7fFCSsSNPoG4XpbAb8MNSbBaDvbhS6pYf1PtBTyLjmBzbLVdVU8nRYk",
  "key41": "4hnZh7m7zyfYg5aQgd544jaeqeGFxxo5933dSf4m1sUdBNeqbsink1oQqzibjBzpKSXF1Fcc9Pycz3Qx4n9Jgv4d"
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
