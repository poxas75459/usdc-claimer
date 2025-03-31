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
    "yzR7ykHngdpD2oFcFpaN3Ytspc5WTR9nN7SxLnDY5ECHrtkEEotEu2rThfiEsH6bdcYNzkHByXJTqg9h2bn5oAo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BNRvgimmSVgkuBKr9PRsw97oYmGGLzb6aqjyXhPFYYzT4yotmjcs248B6Gehf2HZDYyfihMDvggsHaaZ1y1KSXp",
  "key1": "4WFDRrUmdBVB5KsvRH3nhP8gUbjTVYNM87DLktyzGLfaS8BYFpoWihK96NpNB7bS5qaYeW8RwzhhnpQpbn3DJ99A",
  "key2": "5tndLXufm9arW1KDBdvT3X6NaU4Gg4Jei8rNFkLFKBiG2PEEVX8wAt3wyDk7ftvsgbx4WjfJ6foFwN1Aiu3nrkc",
  "key3": "4U6u1DrDXaASypPDzc2jdTR4Qcb6fA6kkGjmMwCE23U4vhnWJa6BKJLFg6Rz5ZapnojnjTSk8Su7uecbqjB1jx4x",
  "key4": "3VfgD9YdrmKFjaNLCvp5jAvWMBbWZ6jjAtRMqfjCePTovovcpMeHasHHDpDxoa5Gnra853kJ4BfZaNLWqsUCdfNu",
  "key5": "rrwevABjYRVUrYDGh9RXYTqbxhRRya5KuJSkc7SK8W89XNcKu3q82uDLn3kuvzygXZYvLQmwbEhDajE7Km7zEgD",
  "key6": "3jLpq1k3YMfrTqk5c9mEqMEqxsqy9oYutXyq94sMqWc3D6NCHyE3CWkd9jSoWkTg3EV31ihESgQdF36pweDnbRkq",
  "key7": "5qBBXhmUkwEYLusLFx63GRheRCDmSPsMzHYZDqvdRcJFpHMomZbEPqc4DX1CwTyMDGzZbaAkXgnYXXn4iCvY5r4D",
  "key8": "3fuSTQg1PmViyuNnXXDi3uJLCWk2pTagken2Qu2FAbNRwTU2v7CSEwzHim8eAkjHphMXN59NAZscrBrG9BUV1RhM",
  "key9": "unkyFEQoXPbA1J5DbF8coLbgGPKQ5i55raaXy3TevBeZkSkV1Cyy7zNV1HUngh7fmT5A3PL6u6Fx56SKCesuN5f",
  "key10": "4So2AbaphPKfV7d6pwsn4enVh6NZWsfBi4Y6MPDoXnVRsGQWkZst7tkuceKdnpDvx4CV7k1HfNj1yQw5wkei34U2",
  "key11": "5PFUAU66MszcJHWAhSxC8fTdXiuQqhJVKLtM481VUtz1R4PjeehiE8rxBRDWxK95ZB6D9Dcm56tz6THZgmF5MjEj",
  "key12": "2wLHvgdu3YcxLis71jA8JhGBuBoamPTCu529DTWbxy2sfTHKd2AckpikwBCsniWUwATWPvPrCPRDJ7F5qpspUUWs",
  "key13": "3sWf7evVmPqKYgfoMgtTJXHmc3T9VDeumLtVGnb4sHRZCpVjN1TCVtzp5F5sEMWPEqYT3KPqDqkrkSvgEauJPVY4",
  "key14": "A9sBkStPqkNAM1ksEyFgGuqFdSUDwiMvqZrU4ircwMKUGaYDNJ5gDc2qsHFUDjgVchexFXPW5hSsNhe4eFeD4Dp",
  "key15": "3LFUMVUevBGJJbMTGedBeUAVSWoaX41cuDFLacvZjut1VWBHk6TygZ5myUsWTs76HamE2CDvRM1xbL1jYQ7fffHD",
  "key16": "32fuZ6CPssnzwCjgEHGMpkWvsFvmNeXCUg4sh3cJSQR4hnFyggZCYK2zV3uf3mdLdAuHnDZDEKTrFBAszE9Q2imY",
  "key17": "3dU2DY9TztxuNyUUFjsQ5DRe1dwkiMgSDQKLdoNeS2mJvXPe7XkV8fk4nF9sFAthDhmjfr7govoMpNbccxD2hy4c",
  "key18": "4dBzhJwFUEoPWoUr7Qp2SXQjz1KJGtT3xckcxGhMUV5Hfqpk6L1tQaywaFTopJfVai3FdyNJ1ir3LK3Jg3yLh8Jq",
  "key19": "4ftgTQgupnTsT6qUaKDCMdn1o6NqGTdSaUsYqTZftXXSaG9mWgtAGqzxFD1xX42h8d1x3stgbErkrbLMTD3B4Nq6",
  "key20": "2Rng512UXgzf3bwYKKJgwvYvHVymcnTCTX3QVW4U3PmLYqroJYiNZs6BAKsHN5BxwW54ot4tuDytDDCWzPVLXCvm",
  "key21": "5yFXnpib2EtaSFsvjidqRYZTtNJ9XzLn9szLN4aqZX6QK4V966QcdEPesD8HSraQeozUcwia1VmbFsyCge28kfzB",
  "key22": "3eN8uy93G8ZsnrsDRhz5YJQ4vBKYdH1XKv3WUUfgtwPPusKPnpxnWcuNbma3bvBrvbgxyBT594nDLkAPvCzTN578",
  "key23": "2Umwivhdk6fACfdfAa4vHCvzfc3VABqb7nuaHbrneMnXcftuTmotfiE9fCtqFcCMHknnuwW41sYWk9Wi6t5yiDze",
  "key24": "cnvRbC4Jh3txt7dnq8wv3S2VrmeTabEPGmHY4pX42W2ygPgmUPFxtV39pw499v9Qtn3VoHsqcAEBwrKq1V1TrDR",
  "key25": "39aPf3NTVYWwA9DMcNbzrpLsogURP3ANZkWFSoPaz62D9F7CjQQnuvWnXzo2dFuiMnGC5xWrUJj1FGiLd3oYxycw",
  "key26": "gaaFVnQHLjSa94BTqkjs2dik77Et393hEi3jQvSN7KrTuF6bNd2sNUq6re5SAHt2xjrdoxxpcfzmK4tVWKAzLEG",
  "key27": "3841GxQbcbzyEGaaGvobKTkDQ3V7XCLgmT2ZcK2QBbZwEWE9u9ARJfFTLptS4Bzic4Nfv8Yw7rC3Vqs8VBfv5iPr",
  "key28": "gQVaxuh3txFhEwB83s76DZs83nbLxgfDsY5e6MVGjk9VXLqzWTZuFXYcHS6SLZGSdRUaMw8RQFo5sLMjnjGqSE7",
  "key29": "4QCDaam6VPVssXws4Td6AJ6qQHHAtqYGJgjKN7U5nSPiFRnGvVLtSWucLU9arFw4srpWTCEf1TvAdfGzV22ubbG",
  "key30": "4EtaasRDsaCoxabXJkPy6iFzVeAS8yog2BZkHjyZuUR4Vhm4X9ZndgQMj9DeLQfeCbRQ9hcSWLd6d54vDf4higm7",
  "key31": "4Y6Qs7KVV4p7XLiV92uwcskRQYMr62W9hncyPzyRJP7XqPA4UEpX9LfNNTkiNhAPjUFHWGSPHDapwZudUsvCDDYB",
  "key32": "3mtzmYj4gJLQHEpuBuHfhTxwex9rZU6PejxD1W8GEFKjARjT5z8FLar79nCphKBrCt1XKjEJjeLP8L1CCLsQNfuk",
  "key33": "4ZAJ8dppwAHKgPLtufzHXE9yG33rjKzcGZ8zXRhPNTZJKokwhmWyCGT4j3G7C6hi11m9L46rZUvN7y8Ti7HgSnnu",
  "key34": "SFDcCFZsRdNuxoXAyCRjFebp9Kg5RKPgWxyRyqdt2X7MZdEuxv5bZUxoBqtWCmanwxWftgK7AuaZApS78WXokxU",
  "key35": "4kAxQT3AYLXioeETzavwvNaKk29ReGTDaKu4bDpFWqNLYvGXPXwswdMaQJ5yDKEqAsYEoirXCPHbw7E3trq4kFm7",
  "key36": "3hjXvqyEN8ngYemvW4e5suVENmrf4RGP4ksTK2BvBgQUzMdFY8Y3JYxHYRm8fjdG511dYgGktQixzpLdqjmL3xNN",
  "key37": "TBqL88E16s1SwnATjzSaMHUtveUr1QJdX9gRbDsijcu6Hd5w75w8nEQLzx1dv3oKLnGX8xJo4i9XSmTV9b8KpGT"
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
