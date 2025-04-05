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
    "2RAEamJETxcP3xwuJpjZR1fWbfYQL3WU6z1JxB5JovcTvSsfnQDRRqNDXyqxjquYKwZLUhdSL1JkCQu4eNUL49Fz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fy9pJVGP6rtit3qYFM81zwoo1p9bTgZuhfNAvUuHLaRgLFVvPYug9LG9gP11uvkvLH6Ktk6KnqLfRZbkJSQReNo",
  "key1": "2A1DTYqMM7pL8GnHVSMDjCeiSqLHfh47tU9At85FNfMrzi8bxt6yeXqE7NLJDtfhnrc26vfTP2hM6ibcJnaxC7Y6",
  "key2": "4q18987eM54ePxsuWt319D6XEU1yeHZtqCKFuQqWiwSwTauBY2pCydB7k7HHPfuRCfcehRwf89ehFg1yrFnENHVX",
  "key3": "3ZpgD8TUhhueMPaQG81HBYsGh6RViEngQSrwSkoamDBXkoybE2H4RyY5NGiX11Ppx5tDbBZedU7GUvhpQM31RtWS",
  "key4": "2tM3kQmHbPaJNeCojQ9NQrCnhp4BuvuRaE9p7RzUU2o8apCP4u8Tk1y5aHiZnzJns5RJQrH7Teme52umGFxYjCnz",
  "key5": "2cWuLLyniLP7kMJJ7ecSiBgYHXC5WBxKhGqoGge9zE6o1VrwAHkPx6k1FSsYPrm3ZgcJdXWPGKzsCGedGFGgrS4r",
  "key6": "2SNX1TAaMcwnUDNkpXcWDBB611TbKFQfYXNZyBSdetc1ircLe54nNJeUR3rgzPD3TnmMwLmmjcdugcGMhqgCKtxx",
  "key7": "uaHPG3VRVvoznkS2wYucx8iWXadaS4xSSmeonX2y1KU7hgR4ZFnAYwnLc8KiMHTbVoNMVSmkRTu7CsMFEu5UUxX",
  "key8": "2odZwPdhe4agRkdBwm9wvrN6ZETP7yBhDboYixyYiMhqHSde7PeVmsA9XxGQt27Dhe4VTYif6hg3uJg7LvsQWByf",
  "key9": "rsXFetLzT9Gzg3e8fyF2LuzqJzRbhXCYoG7hG7tDLSzCfuqb2gYiGKp8cA2LtwcedceC8rVskgvrUwmBf6VrQs8",
  "key10": "B8fUdn6HHZD6QGinxvgXwwyBP6h9QtCSXLCK67KxgteUzwuppk4sBvsqg7z5Mepc38aTE5DrGxYunNsNwngbH8i",
  "key11": "5SQruXj29p2iYcQpRKZaVqbrwVgCWWSQkwpgv4cJGKaxmqKYpLPXREYLhonUHXKmybsVbEHCxp3LEF1PorBcwooe",
  "key12": "5RNytEuLEpuwh9YCtAJgSzjQgsnJF34wRpCpgJsXF3VNU9DB6RhywGexWcbgndLpsMpYKYvELpUNDosef352d34L",
  "key13": "2x9QMgBLpW12ksnHq9gMTnzKxC4Qgh4VKrrsH9AsfA4WeV6hibfpEVsGoBVRgRxTkhzytchm4S2mpwXoRgSoShyF",
  "key14": "65djSXAcNdgXvoR8Ph8tNBjgRjvNn8cR8WQb1J6TdkNyHUqiSxjDF1SrmQQ3b7wroZQJ8HkiUCN755fdJ7noHcf5",
  "key15": "5e7YhGp5fjyU7FDKqdaERe2EHVsLbjS4qkHUyf7Ab4wvLH5vyoYW3ZLNN3MoGA61K7rPB8zgrS8XfhxUMiGYcwRf",
  "key16": "3gfN9iAr4oYeM5kFz4UWBtsFBLZxD8SwEw4vxEuT8Aig2nTS8j4bMLMvg47mLbULDn4MthAYK3ErqRCuiV1Xwft7",
  "key17": "2GizJ77NZPSGL2HWNaw19mw5VdHWVEgGhZHnTbZqyJVXcwLvodZjPHBLgYiBrxneVYbyEwBFen54PstkzQDCoF6N",
  "key18": "34Ux8EcfC9tcXDWtMu7XDZKpSL4SHoFiu5sEHX2rTW41NwGnjfzmHfkYjZMfXRzZA4uf1gjZVVgiSioz7BwCdAhv",
  "key19": "4q3xq9uWumh7d4fz6MVhUKM3UsT8mggTpE6iwnoAZr86Xz8GUS4V41gmDzgSQz2VaqEXGSDvRwBV9gHTyMgwKjWs",
  "key20": "4DP2CYAkk4wcxfLuwwMhek6Py4tGKLnzdmSyY37uv1xMyVDSoa4x1BHvraRUibYXTzWJzRtWhEA6w5HjVia1ftqC",
  "key21": "2QYutMMDhzFVKWZLagaUPBqi9KWFswufePNjwkqy8KhZornHuMbwQJPvz4XFL9XHxxJpwVHZ2gfuNcctQFVJWSke",
  "key22": "4bBiTak5sdW5tW9oF49eBeJ5U3ZcTQJCYEGrSx8Q9RTQdtFshFLt4CUgKFMktJPvbnWrJPAnhQWWBbCMR9a8ejCs",
  "key23": "BQPbMSgFfMZrFsc4SJkjfve44NcZrA56S1BXZMG1r1qY7Wqr1Q87M8Gn23jwFzdCC6MpAByNCJp3ag6nHWupphF",
  "key24": "5SUYQG3w2ZbXLURsqwALQCsc3K4J5bCWBFfitoAWB9JL7rAmheCHAXJzvxH6xjTTzHdPDizR2ahMuWBXwoukEK1C",
  "key25": "wXTkEwZ2ZTasiT68Fe37mJCvQyMpm6WTK1SBtFWGompGRpsBsZVFnBkRqoXvndkUSnDr61xGCRkJyofNDUVociF",
  "key26": "2ntPY2VHEmmjv5RiZ7zaW2M624eDtMQmtm2ekK1KkyLGYxksa4rrCK5cUFry4GX7PiPFAUZeZqPmLxgeqaeSSErZ",
  "key27": "5HGJM1rQbNMYm1B2dthHf3SGkjwiqv3BJT8Mni47VRFyMRVaq9LyevWJRTQQUdv2GrTEu8noGxU41RHxUuERZgh1",
  "key28": "3Y1EVoCU17NzUdYqjsRH5e1U9WveDG7HbL36wMBLCphnKaWxKQEb2qhnC9T9LXEFFBQanwkzjq8W9y3ij2zKeFT9",
  "key29": "2j1T6rZtKadRFwHTpvqzyPH7irf8SUuhkpZocvtz6uEDwe8HpXWJYeMTUkrf3K3wdiF4Ed2XGQdXLajS2J2RcamY",
  "key30": "4MKicJ4z1Qu3agwSciz82YKgMAzxKigpBmqQX78NrAHjwvjfc2Z5Q6gDkLcP5cYUCMr2LLTNKW75KuMWes2fQd4b",
  "key31": "2rsrhVrZPKW7tXCwJhpRnF6NpHr2Bhthz6NH7535aWcy75DYcAFfqp7gT7ELfDde4rnKtb2GWghU8CLkxmv2aS4",
  "key32": "XggoxL2xDh2Gh7q2hZ2BNDSLzMtPnfsgFvHwK3n9fmfzF1Dos3Jh9F2uLcYkzSZCJoA64cHtTaRRpXXC2fVGihM"
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
