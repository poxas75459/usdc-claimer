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
    "5ZPFvXGkpsNba71vPzmBjDe2eMdjjbL6jxUbwXJMpnNPQUWhqP9FUWQZXfiix5RMpYrNY6zTfYjXJLu78EFT8ZcM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NFfVsbocxPuhD4JxDSQCJ2UxaTFxTDzeH1MpjZcgrX3cFhJo3t6R4yP6TEqmbLLLdzFj4wEw5g5FmbyL7zsALNQ",
  "key1": "2W3gxm8j3NoNZwVKDeTP5WPXAHbHJ9cr1sGNAhkEtsJedQZgkjcEusNz4c3c1Xpfi5ttYJCsB9iRkH6LZL23LQXJ",
  "key2": "sCFqnmLAUswiHJyx5s1c5DmGuVmU3dQuxeebtZwLaECSinsnnVP9XsXegbnXjGMBevjDZFfd76FQDMqZSgrFQKh",
  "key3": "39GqWu57FjC8XGYeRCQ9jC49D3WnggQmftrBpmwCJuHYiHhomRS3MKpKwrexgFcKKDGRdveBZP3iF4DhQV9AQ78k",
  "key4": "5Xcu7mE3k1oW8wCwQcr2LjDYnhS3KrLsesdFz69F9my8w6X2F1cS9U7dwwwqHitZYm4fAjYWpT4pXhngHQB1joJr",
  "key5": "5ekgDhrguz5sqHpBuNLoV5DHrgbD1bBggRNwYEmdho9WLAmatHpbgMLLHP1EytG1B98R2giKyjq9KBWp5MxD6kGm",
  "key6": "5buM5BTCjvtCoCv455XRtrJnKPnKMooKfPutfLPG1dTffb85ZkKjYcNdPWhBCsVADhfiWSFep2VMF9xpYXwA8Rmv",
  "key7": "52Ks8Dir1J78Uyqm9nQj3r9zHPGtqfTSVpZf1q3fA3ub5XZFvV1i36TeQrj9oWeYT2N2uQJ4VRXzBWfKa1Z7GjqM",
  "key8": "4hBhLhbESnWzyqoXtJtX4uH8JkMWRUH72K5Wh9di1PGxVFLSZziRpieH8mGxLhV5wzLuK7JxHSueBvUBpAmL8o1P",
  "key9": "5YEwxWkHVXfUj8GGVzgF1fNio79aDaVgcxc3GQzcoKdNdGrvGKf2r9J1ChuqH6xKFS5rh2RFZNi75xw17ReDXw1E",
  "key10": "4fpTN9poLNKx8qjAHQG9x9SMRB2dE1f4jUoFEkDeLXasSadyhyrrHfuyRY2Pd5ppBcBMkwo7Guh23iUZ8QD5iYV5",
  "key11": "4KdiZwSUaPi72Vs6FQzhyRJRiGmbyc1eRoC6py2paXPdqkxUF3sWT9P2f91j3fWwQrpxkzXDcniFdAKMXARiFvG5",
  "key12": "JeZCjxE12v2G39JhHHy4iFx7ATREK3Hnbqi6TqZ1LKDSde7QXR72XNQ28yr4TFQAvT3cHgQ6f8p1RNQe9HX64Ky",
  "key13": "WVfyuFLT6L8Y5DCgUYYnaPE3H881BKAfpUUwV2nAL5ndfbUxoywhejBDHujdoDpmKtRVMnbWfwyN1vW8eukKKYp",
  "key14": "1cKDHG86f34GfV8sqBPuFV5DzNcDbZQumv7xJD6RmxoudrS4gqB9kpVdquBC3bVuVdyzUk2zL4EueLw3ue88aZs",
  "key15": "4rvxvQ7g7AJEeUQ2ykxXPTcvxqrz8CkbhBKdJmGggoafrgdQmnDLZ3mY3QEVvLT6ievuxXQ6G6mEc7x6aCZ9qWPb",
  "key16": "zX9cu3A4Dg6pKR2nhaGfufHYEioCMaiUeA45bjciQRgGHmEZwbNS9BEQCkQiccViLCEJtQ5LgX4DrzQUKLcgw7S",
  "key17": "2S6FmhjxiEPWgCqPYMqiMJ6d5e7LvCuYZFrW1LSnVFN4n7j8ayiUUoHziR7CZJA82EiQDbSPxeVHd1h9h88M5zq8",
  "key18": "2y2yT5GSDFry8zMDMmbg3J2StcvG7cj2MTMTWcPUNoVXMsciHLXpNodE2KXWoRNZ7r5una9yKXTR9YrFrGBZRVEQ",
  "key19": "4cCF2sT9gbfG3FNBhaaPSzQyeho3BEtzRpWSFPUAFrJZHnB33fvJRcRt2kSbKtXrc5K7cfgHrUtpUjN7QYCeyM66",
  "key20": "5pVxMz2MrRAN9EvTpen37py6L344rLbPR2YdCRT9Txd1bTxWhASvzQiR1VgvY2m9jBs4g8S6XsN5ZsmKJSPn9vjc",
  "key21": "668o3QjVeeJJtaGouiZ1vYh93pEvYMZCMkhYa49yMv4dW4r96ei5uWgeQQqBMLjKNVKTu4xjEZ8ehZ97SYhq6vp6",
  "key22": "2xu2E2BJYjtzhbXm8LCX4r39saajNKvN6fqmmqZ3T7tp4wi9GxyxF4cUq8m6iR7P799yWG1vSHYXgX2pykYx7B6D",
  "key23": "4gQti2WoSmX56TMs1E5Nqne3ARZyFLot7nF74QevuXQPsdUQ8NAGBok5cyx4NksEPD7Ffcx218i7WyMgkCLvuauh",
  "key24": "5r6Ut9hNiuLBdC36omk8KANeLiLMcPpuBQiDjwnncfy8ib8Q2dqco6kZMw21yHLemKyfuf4HaNMveXiKGYcb8x1w",
  "key25": "2t8eN6NGf42E3r2LdftEkDCsDKva5EcdhcrfbkCnxrseVEemLunWLEEj14w7UFt2aSvZ2m2bLDDnReyWWYgJwEpw",
  "key26": "3DqVkXS2T741crEEreXNFdaUzEtZrG99PD5Xriu5JvBmB39gx78e9fnuqZtLLomG6bW7rqt3gwQkoq1a8aJorYkY",
  "key27": "5aReyYp4mxxTNP6aD9XcsjG8VMSt5esXiTpjxubErWJLUXxpFvT4b78JjopZYBE81DwYncMP32x3T5hxro69XAd8",
  "key28": "3ew37vuoDH3EPZTVDed4VxjiMpJdJK9kbFMBSmrE4MgnWkTCnaXfTPqLucEPRurxFMX1auxby4ocdn3AYoj9tCEA",
  "key29": "LRmYchcHwfnV1CdPBFEPTHqCVt7HQbofhH1bMATQ5QJVAufgmUkPhadoXiZ2UkTZhQwUfx1cpEHDvbbYshjZBae",
  "key30": "5dhSbG5SWAXiC3bk25oAi2J8MKejsd8f7fu8p8Dov4WcL5abESPcuv48ybNjhnTjkp3GPR31wQmZPfg95E9x3kL1",
  "key31": "33kwGp7LgBhkdQaC2aTJMXta17J95BWzqEYpAESoCAoL5CxVE253posN5vUBDTU5zmt85AnRMQPxMMUCEdqPfXLZ",
  "key32": "4Rd9PADSP7xMLdNZLY7oEMj8rNepQ55vSsyhECSM18GoGXbTHk1N8PN5cSsfoTKrsDYhSpTTEzjA6BDJ6GNRB1yK",
  "key33": "54GAxP9zWpo1kdLjtTYcywitoZ7XZ2RJoL44PFweNjB6M1tymBw4PxLeWA52Zyx4LPPyi4sUToowDjSEVknLPfui",
  "key34": "2X4tXrzgautsZBbvMkE24wmpTmxdrKj2hWfHTj1LWCUcE5mnoH7LYUNgMpZdotgjy96Twy6iUpCb1Az9hqFBapKw",
  "key35": "5iNLjpLYzxq6acHE8fvJvNgrtKmtZLeJrv6UguCb99QBNHnGFmDe8vpxkmxELnprSRJRRs4rLgi2ruUCvzVoXc7F",
  "key36": "5RvNpH27ga2HKbwuHv4W95Kb6LeMPqTQhZZp93QrjvQiQ6cLg85YeAf1Ki7Nu9yiXkP5DDcoMAQhizk1EqPV4Yx1",
  "key37": "5FsNx9M2QtXG84NeQFmruh4hsdjfX4mJVehERvDhme7LbJFRb912Skw2Xw6NycPs5Yyjcmr3cfxCFJnUYhvLH7jd"
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
