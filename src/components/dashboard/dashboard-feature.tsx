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
    "3jRTxj1Ysi2Bve1gpFrbFg2KJhLywxW1ggGibM3gkaEEBHi51fmSVbdKhawMEt2wzawcc3H9M36WR9dApsNEPHdt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EwHySo72TdxPjLUgPMw2ZPR3TgH43GHVvnYKq1Yiwecbwj4QCv63J5SCQWka2uhvxb2xP4cugv6DzCdxsT87Vsw",
  "key1": "5RUb5VwDyTppEdZmpBMoBj9nFg3URj4WFjkmr98nFjNTRzbzXkurM5r1xXLFzr9tEbChW3S1zcFLHypR9PgdU6uU",
  "key2": "3EtXLXGgfdssuZiT5Urt5Btw5PJSKMDcx47egU5QoyDZQnTuiBYoh1oK2gAyYTLpu2qjpw5uJnnjMbEfc2ksxaZt",
  "key3": "2ZEKVtz5rhm9UNJ2vXvUKVZZ9QNsVzcNEvb1TFzmD27cNagmtjLTj6Awf7gqzsefiU5LeoR9DAVgKGSSMu5yU4pA",
  "key4": "4x1bm1tochnurGD6VaEDBi9JYxxGB7fC7CV6wx7sZ9PifaXAfxhaVTXmwy16kGduDx7n9CKB64CLEibCAUrhwhri",
  "key5": "4qSEL3gp3g8iySB6nEWrJdaERFwxGR4wKBPcG62EpkyojLmWChSaX536dF2QoRdB9UKiBYmCEEYq2RTaGZYU41bU",
  "key6": "5KmMaghanxij4P9CVqarAuaKqaDPvChQHSn5PnEFpqBvVALYsHTPEnjFdR6DAENAYC4gXrP8NdZpaqr4f27VQqK5",
  "key7": "3Ro5u9EEmsckRE5oYkKHziiNyeQhN1dZAzGgJX6VCUR3oxW1XmDr4d81SgUdPTDvSvemTDLNwZ35j8MgTJNaCVDy",
  "key8": "aQJPm7myxh7pFgvgXfPthwM3vw6uLFpQa7UqrpMvPerDAezXCMHkecFXcbeTFrgHeBoqAvLDPfmyr9Ho8t2fFuR",
  "key9": "3YUFgt6KxiPML6QJFiGbyqHMeEyE9Pu7QFb1UEQ8iyKKH4RTsv8nSmK58wovw6N94e1pjYiQ7RcXieKkHiJYRi3h",
  "key10": "3YzB8mmQTZ4WVzgsrheqUPQLLp7qR7EfRgD8EKNL7kt167SwzDjE2orPTrsYhSasfV9PbywVFN95QXRRavzoKMHu",
  "key11": "2xujQyBR9bQRpbDLCy8H5ihat9DR9Cc36g5qXnyAxSfLNftDwZWZTJj8rkoUh1HvHEg7qazVdq1YFDP5KBLB3DDX",
  "key12": "HKUuk7wEJVY9nyNYexyWH7vrBvK3nc3aFH4cLwP7BmL8Ly5Xn3F4aUL1QHKw1GStE5CpXA76UceJsGRcdEJA24p",
  "key13": "2HGePY1ESJwKj9oETvvHonWsT9fZjEjUCFWy9FE2xGgJUEQNtieLhEwrsYLmtVmcExMxC6TkYkxPAfY1xqQxGB3n",
  "key14": "4PmMLDTXzngfYSa3SYQQQeHFqnifnzwFhcjF8Z7cnKkiTDE6QZcp9edtnwXjM7MLGGNgYMsAN3WcF5LKckcLEGhT",
  "key15": "6tgnK3HjUDKmBTy5sgHgidHtfCE38sLeiNXoTbN3uuLzvcaNgzx8gx7vcjAgLpHtpRRTaFRrtFiiqRwQ8aewVk4",
  "key16": "rcfvXTY4S6kx3p1W4Dkdgmm3yrNBkKEcuSmtoggdEmEWRA5EMx31LHdR7ekPwimX7VShBY6GgLZEzkzXN2oDhxf",
  "key17": "4rrQjxMFJrmHTtecPrsw4x7oLi4oxEPATcCba3B4KipBmEnjsWqWjDU8UtWR62zSEDmWAtHuZNYZ8G8CvWTjcKR6",
  "key18": "2ediSb4g42PrzsSXQ9SHtbKvze7H8o8Prq3cm51YaduKxPKetWgDoCAdiV3MjRXd9FtHnbJzyQHyUHeoABNdrFhe",
  "key19": "2TM34xandNP19K18Jmxqivw9tJDnKbzXd1nc347HSozhZez9WwBvkrs7dw1BiJPauURiVz8Ew57VA2ypcjPE1vdj",
  "key20": "4nrcwgbSoJaubxFcqdkKgcGsjNQ57zuis6hLBq8hbm1de7cpEoEN66qsfL5wbGRXdjteV5NUR15stKk88RuRukJT",
  "key21": "33pRq5qLCvsgzs4NhjeqC9wkHCW2hJdGuN65LEjdVX9YobXVTvPPWnj3DgVs5SkvDtDYRJKCKEqhc28MhTrPyrV4",
  "key22": "8HuqCrFt3v3yzLFWerBtJhexdYXNgoahuV3pqh8nx3LCAFbBKSri4nY2yE3BD6mZpxHfMZdu8Y7oi52uDA3Mb1v",
  "key23": "SK74JvqGrTpMvq5nFPCwp47tKTBqFgq7dA3pxGtG1JDdx7FtveBVkaiep7wZyhbSM57YrMbhKXG5jf6QewgcDK6",
  "key24": "5hhfRDeK4XSzshDrdFxSRcEFVdPniiV3GrKHhw3J3J1hypgV3pJA8bLTUcadzWvPvgfmVB98y7DLpsoPTAi3W3Xr",
  "key25": "5J8Fw4ce1FxReNRUt8FZBLr8iNDnoT1GU9eSYqhcXLHaWd6uBtRKdLqSSANWUttRfvXrUNmKaRqEGgroM5REMJtd",
  "key26": "2QBJE7m9WQ3ZPGHLgkBziF5TZcU7nXdUS9FbXgf2d1Qzh66BFapLRW7EG8dftcRjqWPYEmVdtkj5xaaVbF19bbDu",
  "key27": "4uxHGA7DgPtj8CUfk5LsCUMZcZy7KbDRy1qmVM7fUg4gJ9fDgZdiYrMobnnikX6H55kM9APzTFYuVh8b2NiNr8UM",
  "key28": "9oCxHW6GfcUNYLqrsXWyJ4oiS4QQfBfoXoopBm7KZmCZgdTqWEEmLq2NGhh5TJBv6BLWMWR6KVmrdXBWCx3rVJ9",
  "key29": "4e6q6nu4UDBz6iSaPAZwiTrb8E1jtmf5gzd4i7jsGiW2FwNcJZnDYMCbgKAqrYhRh7AhNmncFk2K76DGkfwzVrRL",
  "key30": "5GuG2GKDqirjeVPqLu3BPCz9gEnCnnih4eFgQ5s8uzuAwkV7yqBkf63TTQrnSRTCkQ3mX6V5z3w54SwUQvTCQZi2",
  "key31": "3FLy4GCLCqmfY7g1Zv3W24fMPi4BkKuZeCCvrnoXLzCGtrUtMHqRoSATaqrHK6J21Q6SstgPnCVLQcFoAnCTokaJ",
  "key32": "2yFTHyd8Qxt4mkpXprKRYTNVM8nHVp2WABQcvwf9D1rDoDYfRfhqsycWQ42QwLRNMxzyvd6qHKh93Q6T69L4zWWR",
  "key33": "tcqdkP9EjadFTUJft9saqfEY7BVGug8XZccXaWzwA6LgqKaf2LPFMX3e15P4xeVzoSdRZcZ6NVZeHVqFa4pmKSa",
  "key34": "5TMeoz4LEh6QXe1igHcHUfABKNuMBe2sbMjZzPV8wBg4K63Fg9bbg8ddqKkYFza311BQif2RW5gmexVeqWkEUSS8",
  "key35": "iNBbHEcCNLntti6MvyW7SumUgJzAo6SysAkckRWntf4szjpcu7QEJeteMQ3kR9AbzX5S7hk1vVVUp1UyEXecvKD",
  "key36": "3F3YwgHVDKk7gcMACbRHyuKAAVzo8gQ2yBQpCanNyJ7R53kNW6W1tKdeB5ehnTcVo45xiGsngZwJUMiJUz64jHTs",
  "key37": "rnWeLPHWsSpbgrEJPGs1Ca5SyrgrUkgqp3PsQfTPiEv6NLDSWBtu8MMyZiMhpM1ngzBvSnFDbJDMzpM9ajCPnw8",
  "key38": "3RMmZRNrRtdbREA68X4rMofZPBFw6hzdohq9BJvUaqKvV8A8fyMTUu1rNvZaiQWXZvr2wroRZgoQvheZ1kjHyJ5c"
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
