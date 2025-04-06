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
    "26Jmw7UftBsmvYkas2rYdHC4pXn231WfVpvLtnJ3fUWj2bRBp7d1pQJkRPwjWv6fUmXN5Qh7k4gQod1cTp14jWAZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yx84p9KGT3AHP8GxVk9KVEyuzPgPcH87iQs1g8ZrAQAKYkKE5v2RGN33AirnVTVqMhvQweya26ETDKYLgFLqy88",
  "key1": "2JyuwrnRidBFRLM87YZnRzBs83qDkEjLVTiRcs4E3xyaU9mGDsSnXefU4RDVnkkiSxXhbHuPvPWtjduJWiVnv7JS",
  "key2": "4j7c2uhtrjKzmBAbNtzrDFMGNoFrQmjGyUdQALf8eKg6SQXBU88qj6yiACL5xw8Bxmhdoi4y2hvb4DELKVYW5xkW",
  "key3": "2tj5quhn4dwHFrBCCFcZD3FkBQdZkY2JB3wTdvJbxwwkhBeYF3ZbVedookbEY4abrt7myeYd14XT5AAYQAA29RLV",
  "key4": "3gfjQEfoXFsWBxdMExPiGEaBwKZDVpkYdadvKZjeFX5vtHg2XuboWXBXR5Aj8CeFthBrksxdAafWGXyekeNEFsr8",
  "key5": "2jvJ7jmkomJ5qGN2EwEJdPHB8VShv75NU6WJzVWjvYutSx29T9cJb43bLUxoUmBpV3PtbiwTBcWLstoezf3ir974",
  "key6": "3Ysi5KWNXcyXx2C1sWgENrcrNnN1csjtFHuL9rmRWC74gwzB4J2zBuhsyJRgeWyCZgsPed4wJQFa6RfoS1Z2xunc",
  "key7": "3qAMGPhgCgByAaGrEjJK6oLUmoTnyPG3uWznXwonsHG8RV95mnZbXzFt2oCJuf3oB4W8gKdKQb1BFpPDd2GCiF61",
  "key8": "DqR8LCoqYWWw3e8BcymqgqDES9qEEXQerrtCduPYGtijn5QDw9FfSFnUquXercRVKhQoSd1VGFobS6EME427E9m",
  "key9": "3M4AC5hnH31oum2LNL48pLxh17R1R4keqmgYgq6Zwc3vWTy5tTJcBHj2T9QGUstZHMEoT4GhacvHGSETFqadxaiR",
  "key10": "5nKWBGxmSuzQyZ5FZfhEXs5GmMQFZqdFwqjLapUgsVsDtVkk9NfxCvJKsuzdPPs5upANTfTkyp4yM34LFu6d9tca",
  "key11": "3vBmkTUuqT1p5kR3iXovvtSAwQaraxPb2nGrvegXfHvrFkXEq6cfD7GPd3J4EJVafa2Rx1djEgLx9z5M7DzRqdQ8",
  "key12": "3vET3n1tG6WJcdZ1NCooXNa8gpUFesTgvSiDZuEDG8M3GW7CzbY6TwBM3gjZm53C5gz8KBTwF2yLysBHFAQDUiGL",
  "key13": "VNRHWCQSbYBBbwR5LPW8v65S4fXq95DhXhVTzNXH2vxFFoVgMmnGwdW6fGjFhEApTtzymuBw4J72BqppRbLpmsF",
  "key14": "29wea2A7N7GdXZomEnpnD6dpcmivA9nc7FtqM2fHYTUvZnA9arSYE2ZBhqDGTk8SikS5vcERwEJEA2TmXraLUpTW",
  "key15": "4tTCJqnpkKBAxK8hckhFFzHTk2E8dJxbxpmrXL5TMswMAhHAZfmHHXPi2YZXkjior87wcCjPnpMxyzqCSm2wETFm",
  "key16": "pZjZ4D9VNQucDgV6Bv38QzhSJqaNJ23vBnyWh3bqvJzSayKW3qLExLsasEL4LMqczvswccZJRnVFmhqoxwseFh5",
  "key17": "58yjYUif7KUamfCcRPgndCK62jZkBkojHQ827TcfjzKNDy7MV4AEZBbZpvZmHCSBWbR6ac7V2FCUFGPm5d5rBAKe",
  "key18": "4JcRoum116UoCQfTUaUAQxJJpysAg4ZnLA2PtHu19eGqm6CSW3k2icVxo3hUePypNFxQoRRihmGvuwTBchkfR2tx",
  "key19": "3kWUZhPcndPT6562Fx33CNCmVgkffMiQHHRyJhZ4bgiBGmKbGYfTwUz6GHn11TEAMvdSCJxLQy9Mb3MHBDpD15Wy",
  "key20": "mAYb4QUcmJwuxtsMR5o3eaXkRHCfZnasb3azctYUzRNPpfbGRdyQTRN15x762FXRT8aQXBG3AQw4GkKrnrmMzse",
  "key21": "5cwfQcGXe9YKLbspgNHVXXYTDybee7Tb1XNWNVhPcLWhoVvZLgEJgxZ3evHYPXEzVUPtSf8KozSZJopPkiDromFT",
  "key22": "wtzAeHDsNhfUH2C3BxU7eUy1wV4SU996b1sBo4dM14sNMFHQa4hJ3CyfE4vecVXR2x58uAwuwRa6SwgXsNeWHWr",
  "key23": "5cbo5HWA5bMaQCrkqq72vapZVRmJ2dicvWDDQrABxUTCXeQhetpbRBv3BSQ4Hkqb2CRF7SgxX8oBB17q3zDWyGPq",
  "key24": "2HYQvhFWtPzRmp6Vc5NawSRTbVEci3bARP16u4df4yC1GNkBwgLWHpbZP8ReiTEvGVuzJiV48mLFpKqTWSoftqYT",
  "key25": "2qVkF3zPz5RZLUqTRac8x5FxWsEH48Z5Wis8xEUyXDT5NnpYVVzCR7DNS3riN6A51CsvNuZ1gJPaABMzkJ6JEwkY",
  "key26": "29v9HJ5g4A1GoZofhntzw8LeZ9UUqQBUGJYmwum71AqqfYLA7frbeUe8DbFhjzKPrUUP7xiFgXRWxj4BzszPPss7",
  "key27": "4gkdAg6LB1pRToyX587k1mdntaJssz5ek2yySBE8YR1LM9M9Y2VzskGnKDdDmQAmWUrKrf6S3wqBHQ3Z6PEgzjuu",
  "key28": "5y77e8mHSCzs5sf1fhdchQYG6TtbNj9eNVsxMajP8FC5xM2bLNZtavQ9ZzTyZkaexm8Q1vx5cwkSFn8jkM1x22sR",
  "key29": "3TJA2MkaehLMnpTcGPdtRGrjh5cd78awjut3UtSnEaXfjig63XVCSGiBQuh9aUeiTXrqPcpodGUXvCJ2Jdz3ub9T",
  "key30": "4TA11MpRa9GK8ti33yHFpiPnDMqmjg8enRYMJL8Aw15wLzpN9MUF2i3zCWbwr8Gb7ypRHSimEHyR2b1MwqCC3AYp",
  "key31": "3GBDyEpagmrHKxDLkBqp8cGuo1XJdWXfq4qTW6V5rkBoNUZfXja7UcuSdcUXD2q4uihUjWC4KGiWFiqh3RVNjL87",
  "key32": "cjGrZio5x16a5iVsLFtBBUBZhvHfCcHzqGBgDSu3zwHn2cqDeAMwABv8wKFQk6nZCfTFBZiW8NQpZTPx25o9FxJ",
  "key33": "3beVosFDkPsXB3i2yxzfwfoAgmr3ExHSDehXFWScLKmgrixYxjJ4hCaTn9E6eGW3gLdWmLC1YafwVd2MneyHXXw3",
  "key34": "mp5ybEK82Kzd1cUCwtK3YgHfsA9zu2S3LJdY9toT9truLge4M79nnR1WDAUvTvDNqwNzmzRGSn1PCp3EwmcjiM3",
  "key35": "4mLSFU4UhJHtvUpK7wHNrgEGU5UfwXhiuJQxAfEQN8MkXvJ2Y8EwSkNns3Vu1daymwsCwCjwurSuUqu3AQwKQBp9",
  "key36": "5577DkTWAYBiZLXAWezmzRdXNFg8ywhMH8zSxkY35QHEUcUZes1ZKLMRz9edVjzTEnnG95Ra5D5saxYFxJwYZaid",
  "key37": "4eXTZ8qBb9iAwM3pEvSBbM8NTe98mpeoa93p9X1DQUfZ5WJz2yyQfAXFSYRoorZZtHsyxCggns7XsA4p9eXo4bJi",
  "key38": "2trXo4KwtQfXtyjPeSxZ1SmzdYjdT9yK5YQ3TDksxJL7dvNb6b4PcNEcN8NQiubE8sMBkyTtxPN2ahUuUYkD9qEi",
  "key39": "466PVs9YrHY6aHVwQwQ7wKEF1DSywyE3aBaZLYNQ6gbhEffpK8TSi1tCtvU7nLTQq8TnJo4mAXKDh4KiWCZfEGKM",
  "key40": "DCv8pWkgmNfytFD5sD8ojq5QzasQHdwrbVA39zZPicjbR1b5g5Hbc4TtF4jxNLQ3zjhtADP93fKakDYajHtKgy8"
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
