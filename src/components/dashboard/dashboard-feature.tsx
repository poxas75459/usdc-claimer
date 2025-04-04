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
    "26V3nM3yFMWCVqHpC8MisxHTsTs7FRrmwpvXx3yTaJiKAAt2H8PQnopFq1HRJ4tjM7XSD4SQjEGjhb8FPp3XvL3p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JFuke6TD6mSrtH7VXBfhicxSMCCVxEML1y6WgXf3htq6Pjj96rHvHjct7nafzbQY7wj85QfFvhd4cBJp2txNBLm",
  "key1": "5eToi483mcxRFCG563RRY64BHUmv29EZRJV1KAMnDxF9FRBN1SqtPz6Y7LCQSG8Kqk94mZcq6btVZBgtZpewrpjs",
  "key2": "3SVg16EUpYRfMGooMwxWAo4ZpwyNWjCf24PxRJGTVFdQWYRssCx1dq1Jf8k5wBkLMQPNxQkWt6fXaTJDub1Hmmb",
  "key3": "3kM9EVno2ssx68e7Rao6cmDbnUMR9Fy46tqUwUBQg2JPQ8xSjqPKiAPRLuF3s6TPopR3JtFkxajrTf25HLenyrWF",
  "key4": "47a5xtDAq1Yr7xCxx3h3Fr8Zsb4yoBGHyAoZP2TAjujRccre6PjdvvwrGsoMphPrzGcs6DJXYfud7hfs5R7KrxJW",
  "key5": "2WXrPoF7uMxn8qsbs9aQfTXfnDRhBEvmTjZbe8Rb37unGFrJxaoJT3EPKC1PifMPstMxiybm9zui8mZ7hyTw35yH",
  "key6": "3gNr4ex3Qw1iUDzBkvX9CckKvhJFexNZqk939b89Y13cy3zABwApTm1MYPurWHHp32J8XbtrCmHbpb6wbS2zhhzo",
  "key7": "2gieZ9ABLkZMixyYMETRahvt7BERquMnmRTFcC9fWDvRhLap2QoVE2V3Uf3LsPxYBYrUdd5iMiKZEbMAfwSKoDz4",
  "key8": "3jrbv7jcUE7sipFDw4ohFM26gwSjj1SqwAZgBrUtcKC2t3zEDp7HZjhTTtuj4xvs1tQp56stU2iS3UE3KvZQhHFE",
  "key9": "3X2DZJimMeevVmx2TEmk7ZhXuvJHyCKVHW448FtXAoaMjPyhed5EemLgibeTQGGVQ7BvKoWW1gUqhtZviKUENH65",
  "key10": "65Rj7ZLmxZKAYFyLUbtDWfiJeJmQMDh2vkeuDNK3kaq5cfYJ9bqBMRnxVTcNggFZq38g93SbUE6ynf8j9M86zJiJ",
  "key11": "2fmiFjjsCaM9XRaC7KaKRSKgu4WrvyLWKQGWQJP34zKfvBsjDB1qZSSQKRdAoEAPT5tL9763Yf5P93skZejn6Z5f",
  "key12": "2MGT2fiXbaK7oN16EZd3N9Q79U2eUzBgFyVKt1q16mNDiurD53BW8QSDDjBDMfQf1nLqfSbZLa3gUMT5faxPSKaa",
  "key13": "4b4wrttmQX1rjME7JRK8yBV8AL6e9Xe6MCEdnRWwQ7o6eSZzYEigsYicQVLRYTXv1vvsHhpA24cvGpHLy3FGmV9Z",
  "key14": "BzwJYD6bkkkjxDTaJ7fsEP2RRay7k5qah8r13HcFx3jDhfrXU5zC6fk4RDcmFkEcEKmiTze3cyQP3mmn42jxpsP",
  "key15": "55reyfzL1RPRL7hAKb33q56SReqUtbtBGHKir96h2HAYgnbGxWVo2aSZyh5wHmk1sykGCt5jhjPEygSCZF8fxAsf",
  "key16": "5FqpqnARUJWq9FRdUjJDQJt9RKHhfKHKA8iJpkET4uBytm8W3bA5Hg7SUUudfquebHVgUmZ8viA9LW6Vtd9bsB5o",
  "key17": "2QiKz6S8EXvJz5SsgE79KrhJML17pmzaHTXCkfKmx77zLyaJb6aJAYpFY7M9oQ1Q7Nvr5P2rqbWRN76U67meqW5u",
  "key18": "46Anh5nHAwhyZuEbKxy3rx9Aso4rFUAtckz5hr1sfr8Zbw2BisN7FZx4L5Cp1YJS9vvdsgfBZEUAeibj4j9gATLb",
  "key19": "8mTZajxqnJPesRxz9hFMwyzvmPDLQ4ynXnTHZsYNLSLggCJiaWSppXKxTB4BcPK9YBvSeADSBxwwrkC9s1oBata",
  "key20": "4teswXkUoM989GM9FeHFivrhT9ZqXMjEseExC2HLAXBSn6mZGnrV5X8TvCeULJJoqEAboUkRoBYWGGAN5PKrD3bE",
  "key21": "5X5C7s4MpGopZu1ehkF8ZbMPhqfA7QftiPysvCej3MVfRwaVc8XCZbgr94qn6GkKTytDjWvGR2t22pD67LZgKENu",
  "key22": "3BaHFy3evYipriTnot4c1MwhaWt2qztBaPg66PZJwQ4dUABLEPVZr7J7WeLqKb1ZTTLH6k6dVkgqEuav2VUCsKNq",
  "key23": "4y8Cggo1Y12Uc4WfcjK3q9GGvR6nzwbvyaN4cdbCVYkFeexzYsMNdRFmVP2c9E7UvdSjo6bt2JxzGcM2icSPabdM",
  "key24": "533bRLkN4FvJTS9drey2TK3egg32NehaBxySwahKsbHnh2Tx1mCCiXin39v2H9YZMW3QAsW4DCeBSWrhosdKQPUy",
  "key25": "41QMY9yHPyA3M4gycYQ3vmpYg4QZctx6brTRWgMCKn4tbRLnYgLYg5hv5is9ksx3a8yKRG29cTpJXtzK8EZPcK1s",
  "key26": "WhWbLku2FXkTVYWBt8VPsbD5fnz5x7Ny51vcFdcGde1RnaWHTviQk63mvmnTMkjUDFff3MbmDN2WEWWeuRp8wn7",
  "key27": "4nwNfr15fcp9J1StF2f6Vc5wa9L7T3tZd8j32axmYaH8fTb4zHUuYCeyUh8XbQo2SYwKEGJ4EBtcMU9jBcwZ9ayG",
  "key28": "5Vz4b8pwqXBQEjYPvr4aAvhmd8564imV2C6FjkrxGVojmfnkb2zDJXQzVuVSHzMeuTn74WKt5SGfz1zjkSxdXkNe",
  "key29": "4RTMgkiXvxd9cY9BTqsqzcFKVQgHiTMS7Awz926u95NtWgBzEruf87LkASJQjGcvSYrSdKjGKEwR6zR8FokvbPa8",
  "key30": "p1TAcQ3ZKwDsXGrKisAnbbA8VZitpZYRwEyZ6n7v2nwhnVbSaeNPe7SKzP2pD8TcP2PqAm4rZxSqCf7wgAqu2zW",
  "key31": "4xWvRDbwZvdiYxg55aeJQx8oC5PbXbXBv7X6hMEEGozV8V1tFKPa1xx4zkuT1W9qdnBDXafpfK6NxbsFtFRyRBS9",
  "key32": "xi1My4FNBcNse6gPnPg8cntBrPCnZ79SvbEL2kBzMgGW42mxfhUGug6Lrm1f88szwANdpiDp68q4VTxh9TYEuR6",
  "key33": "5FmR6zcDmKoZaHeQiUMYMPjPbLuUvHMkHM2Q9bjdQLejyTD3rjycY2s77mLSKojZFy9v9gskP4AmigjEUuDS7ChA",
  "key34": "zjWT4VMWaHyq4gmJoweYeAzg5GsRwrvN7CLJ6ri6T9WQNcBhH15PcnuBfaumWQpm73WbcgiMjQ7CW8WGx2fAebn",
  "key35": "56H5hFQSnzmS1yysisrrXYJHcmQvTPij3oFRpqb9Bg5q5TZBHgk42qZoSBNJKTAWH2xy8w7uVWk9pAq7T976V6YT",
  "key36": "35ApuxF5SU4wzFt8h7MrsjmkuS9kYVyNn3p2yXnLzqf1tXyf4XtnZpwbUQfr5kUmMcPAeUqG5H8CpresT6S8PVWC"
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
