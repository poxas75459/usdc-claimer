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
    "2cyRv49ZeX5KbghNAzMp7S8f5CppPyxmGgbqRxPNAywH4kMD9rq6cgw8T4mNhQ934jgqzm2GGFUXzyJEAqEnGG5R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MZHCqBwz8o7BkPVH7GBB8HnKuwSYysSPRLJT3zALEofGVJS9L4Ki7QcdG23b8xWyok6NoT5swuo3qGTz1WPzyZW",
  "key1": "2EjMtuG2WYsP563v5SMTv1Whxj1W6aeVzjXgUFnDSck7XEqtzbnWVVKqa7hpd38VeStFXcQdFLjBvrzHRzBhQUnH",
  "key2": "4bjkfujPvRKQJ6E6EL5bwy5mWFHTwp9LxCS7xJ9BFLYaoJfw1HjtEcxx8pmoGbH7M4LiaWDUa45Ai83Gk62EQvVe",
  "key3": "fxxG4dQkWBGDam4WN6dn7EweSrtuY8Nd29hfSkGiCwv1eXgbrEutFKiwtxG3F6NfM3ezoDEJyc6QUQ4SVJaVGcJ",
  "key4": "5pC8Hk6P38bS3U6xWt6yy4c7hpnaB8qjndxEa3iQtA3qsWfJhQr3fZP8nN4yUyvXigHeNLB4arivnXTusuDTWxCZ",
  "key5": "2JnzyQWpMFcL9PgbhXhUnVFMo2UoUrrAwudygdbCdeZJviTSooPfEgxNcmFJVYz3G1ZGcxxsU9shC8NEwgT2K8eT",
  "key6": "4osWTWCtR18B1LaEkhQC1g2iVxMYWQVH6m3xjTv97dncofxyNGrNQc7ReULv81jw1p2ArxvHcosPyeYcMHFxW4La",
  "key7": "21jwHw4S5JHnWT84jcUt8QJ1vqPGZqeNA5E3TMxECnoP8beeGcbvLLHGh1aFQTJUzouqksmUDBFHJ1ZQyaqZ2abD",
  "key8": "26RrXJ6tc3Fsqyf2TZgLrjSFZ7CDiBj6SNES4b9So191Dih1zrhwgzuDaheZLotQ34CtvbDSwvTc5Y6uDyJ8UADw",
  "key9": "2Qxy5qeWWMR3y7txKKFfdg5Xt1XRnwSU6BpEpeJaMENZBNeJHh1b9uLtbfHouZnRHFUL4G1bWoTtWFHaAxNkbak1",
  "key10": "WgZKRBTC9RSHMkbfXfEHGJQ7t1C9ceFxwwpDHB1gUHgu1mnv4jmpTtMf37TohYeJfbNe4vb3yngiqF1Amrri5GA",
  "key11": "HcjYe3Mz6p6AfNdxpP4FDHnj3AJQypubJRPMC8DUwbT57fRMzANXNepi7ynYe7bAg839GTu1AsD1xm4ZVJqRwNa",
  "key12": "35pxB7WDbEyoPmvTzbpPokJAHLYR6aFfyFBQn7Hvage5p4iHPPu9t4zrTkCchBnu8U4DYWvDhqkSh8zTxwW5JZaC",
  "key13": "3sQEeQ45vdxsFYWUbPWLveYxRKkEfgrtsUUJb8YG1tB82whYHioz3MsVew3rkqVPQjSLVgRnq1HHhoTNdoXWHAag",
  "key14": "svB4RT5Eze8BLMhov8XcShz75xpJ4r1LYkUVFakRCbNZ81ib1Q3QiVWVf1kK1WEQSwwUD8D1Cw7nQk3NbayJwGh",
  "key15": "mhoVZ56R7e2QaUfWgnaGRPs1GAQNQg7zb1EhahiD1HCa8cFZ9waYcXoDN5JrZQuSPJQ2SRbawFbJkHHHAfwSq6e",
  "key16": "66Xdh14kadpakCk2U8Ui43iJGRVFCnJjtrQk9eYtoq4fokKWkQiHF1Sixyj3jESDeMxv62nXt92fT5bUmyHHSv5A",
  "key17": "33yhxMCkgnHiU6Bg7u1sNUT2PKYTAD3LZkMwfy8XunGz452LvcZtYj7L5jZ7DWZyh7B56Gwnw3u4fvLcPr5P46ei",
  "key18": "XvNZkdNAQ6eJorU19Wv8mVr5bZQTKy8reK8JrrYCp7FHCqBLFbH3psyiRXLHP7kF4NbvC5v9YRcouKvp9VfhSCm",
  "key19": "2UCRNtg2xuYGaueEoebtT6nPbGApWwAgCY9bT53sg5Ff3BGAdQEP9x7mQyyDR8JW35r7MFzfYDi95Whhy4b3VrG2",
  "key20": "Y8Y1LptXdPZShrU15zcrw9tyugvNhmPFyTpVWSifDvSUxyyULrKidUnGRK5czH6NoEqtmm8j7HwxwXnUJ5iu5ii",
  "key21": "2rEVGjMwCoUHAPD8yKi7Wyzyj1XY4WgBbzyUxEk5R2juuRt8Zr1dkGcj7n5RgXk6c2XwRHtDhGgXH1mLQvDS6K6X",
  "key22": "4kSm7nYDN3LeGkER98uf72PtmBqYLsaJYJizGrHKkJUSDVEMRLmPaYwiA7YSyAbNZqfJ1vj8igfuaCSZrsf7svLh",
  "key23": "55ZZC6pNh1kqzRhePpLtK8ihBgtWh7f8tN1QmZiyaAjaZafDZCwS8AXTxpSTG9zEchbU2DJQvhd1XbFNLvMn7MdZ",
  "key24": "esT1E8yFZiHJSbcuRPsspgkRmkDgCjHbibWNTebHuQwT15igQXovYMLBxWaofRbpPwri832dpAZGPLMsKcmew2n",
  "key25": "3GX3xvMMHewN38TnY1G3HWs8VosFsCq9Xsi8WXcs7tCwSYxjiwMvPEbRq9cSjqjq2o1Ug2j9idmN5MazerwtSCCY",
  "key26": "4nmsYQFRpGiak4cUp2UCiVNg9zUc6TRCaU626ZPJWw14KV1Zjfyt33Yy4XbktFKEkjLaDfJ3YR6dzDnDFGpMcXCu",
  "key27": "62Cfg1Z4zHjYXEPrG1R4JATBCRUD6D1votopqqDZ85RbFN8DTyGgAKZfsrspVZdFZ17uZvB2sKvzX4V24NQxX5jQ",
  "key28": "QVEu4UB4Q7mYbDd7uGxX2StTh2d1frEj5iN46vMeHXC64yuNUXLhwgzQtceEG3MT6htR2UL84Zh2JkLHkEgwhHm",
  "key29": "L1XXgCYJ7RsnQWNSx4TbFAkzsKd6X6s7EHVKvJC79NXur1cBsCDXUTp84atk9vAwBEwTY7mKkSeZoCV2iGjzVvX",
  "key30": "ydt8yUAbgLMZg2mYh8MrPC24TpnH9jTxxpg3Zwj4EfPRC4ThGtu9tMAWx3LZq93p5jBWaHSG3Z2Qg8c7LZSK76P",
  "key31": "4CQ5Ai7DisK1RfGhUxwaHBv7rVjTh4nSBon2YCTnVsnubVvGqUpRYTum2ybU16xZwY1F7qxhHiUaTQkEVkeBT3o5",
  "key32": "2Y7fKQXTCeEBg2LATqnEcVMHwb7oYVzGjAcs8HTRQGeUr1Pm9dRLkZpwa2EVZSPEeozz2BdaKykyvbBV1HtMdmcE",
  "key33": "DgvpRC22Q5smCdK6shVaVCqKyH5Fvy5LVyPKzbQveV1dLxP6vMUU8S3GrTcD8QhptsxAvMmHASdfZvrwLh2boDr",
  "key34": "434dPBiy4MmXNQrsJuKhS9idRYCyRNa5EX85ns6Jsgi5kBH6rrZpLZRN7iGkPRvB6mxZZv6f1EALEXoj9yGTmH4p",
  "key35": "47m74RfJD1S7Jty3AiwQXqKs9zhTAbuQMpQDECTiLBD3xJB4QHb2Bz423opacuDnUc9Yz9GEH2SJ2oyMiQiiHYpW",
  "key36": "D4tXcFHUKJ8SgyZkMAjoUNiGnFfqKomnDMZ5uyeoNrJT3BbK1LPjUPeZPC5tmHmH8wBrrqTsH2rnhoQet8fNA52",
  "key37": "5TqR3YppwZR5urx7n524d15HHbfPDBLqp1Gn4U3hBqHUqhVw9DUpv9ZQBcE8v3YFsrMncANLDVcNPnVs61jA5W6E"
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
