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
    "31KVmiT1dEBpLX48n1rWjnGTWFTgiopUDR5yzUmUeLvHq5kPETGkPbvy4Qa3Shehqvupp89tX7HKpqwpm8Ss1NdJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Njv3xpMP8m6uRHWJhuujMtmA6JDGpj9koghMKUBfPEVdju7xSK16qEshDQYubsPAGgff7ST6uM6KkdPaDnpNXme",
  "key1": "RvgP4aPcu2aguisaHvbDUAeQZ3fG89WCEk3a9GYbrgJFr7EadCKmkPDyMe7r7Z2NwZg6J8KJ5gpixuJHoYpcHW6",
  "key2": "5x2isxG44oN7eB3RRKbcpj1aDSxHg3zEML7nQjUZf6SZh9ct2PQe9WKsyTAonbBtXjzMN9QVo3JzNpnY2o81bMd9",
  "key3": "4nXt8hp2pYUBV3jjuhD2oPeAcpFBWKXSrp7yv33PqpmrdcyAwsLqhwpAHtubZuTG3YEkgw9DZasughi8fxgXBzrH",
  "key4": "53GAVR7sAwkZc78jvMcvookpsTBMmU14Y2KevvuVPbv1LwpUkDbKcoEKmhQtPYktzH25iZ8TuQL8jRwfBeHEMVLx",
  "key5": "4Pfy23eRGoGwPuyRrYhHqxsjDU7jeHrNgapo9FXEuJPyYQoUeep1n7FtpdRBaYb1BcPnX3bNiDDjc5ycmomq9dR3",
  "key6": "24bACJT3nVpKS8AMhmBjyMHskbz2pgaGHh7G6Sqz6PYdVKjbCpAceo9WJqo2uABrJ8iTQjXfAECZk32n4vJbyNva",
  "key7": "3y7ax6ZMqK1mN7Eu46y9iizVG147KMKubMcXxXF9ECUxHdiEgnVZ3TQNaHNbfn7GZZqaJpMAhUMGzEyCiQ7dE3AA",
  "key8": "fMF4C34ChDF5PbC1hF26QoWM5sr7HWLdh5GzeF5peKATpRPx75Yk64zBLMbHdVJ9xw1qePCejfqs6vAmkKmZpuJ",
  "key9": "KM9Lr2hmvBBpWA5c6EaADM3NEg6LYGfoKc8TBjccrmPcsTY9GXeSmD7juan9Zh3gjW6B525gYegoTkcYpc3WXV2",
  "key10": "62fyNHCyPsn2QtFBysnsg6hukme2RiDyDEJ2NpbTDotyEBTkZVKynPxayK2LLwE938LE5Qeo6NEmZRYHnkpPeSXU",
  "key11": "5qz2v3PvSHUAL4nWyzUK7HvrVAWbDBMKXr7o9yfsdpQWRC7SUcgeXNtDZahHgkMfMTifJiH8KbpLYeePybYafXvo",
  "key12": "wptcBTMejqdce2WkRsNuumRnTkYjRLFbaB11c6AjR99GAHg2dmHS4FhKuNSHbMQ3NfX1EVsJzparcCaXoHHD51z",
  "key13": "23UMYRjg3bM2TMzUWGJfz7a7tYdPvvXCELMYw3zTcS9247QL4ytVZSBFbBYBsKFJrAae6MmK82QcDDm3CYQrvvif",
  "key14": "DC8ewbLGv22hg8hGBSrcqofGXjBdDTrV8QVCwbyn8mNxWzFsZQzUKf8A4U82nySxHmguhKZ8TPp4ZSu1BGrYfcL",
  "key15": "62VYdfyawkeoZCDAFp7TyaMUp5rjzbynwwt8uepjNcLsAVgMd8FCsVeveGzGHgZ8uV5u8cSdKs5LGXyQRLFeWW6S",
  "key16": "64sgDyuC32PfFnB5hXr4zHAPp7q44gRqA56sGiRAF2yEXBspEnM7Cg5zt5NENtmcQhxFjWNB9R33osQPKhEsFEcK",
  "key17": "3tS3L5hBKM19PrvUQnFrAAJKUcGfxctVhwaigPQX4ukJcjVwBFymPBRpfdTNsmCnLDoXNxYsKBk94nr693D5goUk",
  "key18": "4bVrP5Kj7YrWPdDF7jEy21di1MFvw5uDEpbFNfXrBBHvFCzJ3herMnrSvJP41W56ygZJfQ65GSTuAq6AHn5k7ShM",
  "key19": "2JZTwdP5Tra6xggSkS8qQUejxzMhCrv3ddHAC5dxNoX1AG47MderxUHLrPukMBZQvGbMHbawMR7sjECBtQPL9s3H",
  "key20": "3d7tTYa9HBJKKUz5vppF7bVt4oTUCJ4fTnLrNveNHziUggW3UUtP9jnaKT9zJP44ZJmHWGRayMrxBeRamm8bAg9b",
  "key21": "3EQXCn4n2yCLd4bJJJjXERbBaUzEfECp9Uptj6vpqbFWZqmkggk7indgSrAUyGjpFeSnaeVFLcH2XaaX2fMfa2wp",
  "key22": "bCMh6t5dwcHhyY679dxGGHGRXQqgsdDeGN7EEjPEDgFcdjP58MRXGJEF8T6e4oCsJBbEKS9k1jmkNGpC1BbpXb8",
  "key23": "31YLjDHYStcDRyUXP8x5HipAKY4DipeX4WdCSM8LP1zDFrFrGH111pDxXqtagKDwfNbaaak1VahQ7gNBPyYniDXg",
  "key24": "4vN4UavyhjTmw7YKcb6izfhhmYp5gXstyd9hpQ4LiZdpxoF6sZQu4YZtY4Budy9YBd5XNaAiGuRP2ME6euwutM2p",
  "key25": "2wDdvfRnqBLT42iGePdWHvHCA9GwV9zDraX6au7VxMicLzhFctnovLN7tTct69srENRMVeoTJAFjtaEpYZsQ4m5o",
  "key26": "3zgPw3zgwAmuihYWLievcTim8EdZyqQAC9NMEYoQVkg3jwfBCGDhHBRyXvrH7nnVbreCuZwbzyS47ktwzAErRY9q",
  "key27": "Y9VbJtUZWJFgsUq7F4ke8VWTvz2akMdFXzy1Amp7cvW96BnymU3unAz1ruQNnEMAuXqYsY49iVr7jgzGhV7xFMB",
  "key28": "2RC3x9ReWdFbKfCGJNG99So3BuFy14niJBPS49DT5f8AEHSGY2Ld3hD2GBQk3XpupkXSEfWFBsEXRzGEdhLGx2oh"
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
