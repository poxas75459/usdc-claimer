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
    "4EQRc6e4U3QPfJL9TCc3ceGjKUaDAQ7pd44ytwR3DhRu6dLGioZ98ExZjGdDHFa9VzxtnAZTrAyWTge3ohptwUbf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UKpbGShygKpTxKJLYS2r9sdHaX2B9YaX7Kreof9iMVpYrRR6mP7MiVg8QEAbQPtMNmK9HPWgZtHAEVN7LtJr1ud",
  "key1": "3UyJ2KKuMzxfZQjYsBs9fp6PRuVZp2yAVdQKvkBRPodJa69TxGVnjwbpu5pix23h6pNZeVqxmBACrAr88CvNrHyc",
  "key2": "USWEbUgwvZTcRtEc7Dg4ow4XiTfwZmW84C2i4EaGu5L36XGDx1sHJu57u4WtQ8AkZt8s2PiVVWSXFvWiKCmo749",
  "key3": "5H7kupoipfy66DuJg5qhv4TJUvEWwCxADUe9NJeN2ecBVUuKS1Kn4Ae1CwopUoMu2DXXJAE1cbBNvtJuateHhLuQ",
  "key4": "5ZteATZLSzfY5H18PD3TyRgjBnFsvLY9B8gxEaaPuRVmrVTXTq2uwBFun4CiDqzY6b3MaYE1eeJDW5G7UJPEWb4v",
  "key5": "2f8SjDyhbLVWnZuEsq7AzgmTqrXn6ewDmLbPGp1VqsD6tUoRbXok39CQMij9hz2xU7EAgwzF5EpJmWoJBJcNVZvM",
  "key6": "4dNP5m4UvijviwxthxfroyUpxoaGpfDcsTRpgwHkFMVdau6w4jkUHk1cp3TgWyRE2DAzJdycXTnUP4xnkFqKsZin",
  "key7": "pcx4hZ2qGWkUorWsggd7vQQiZKhw7Cf5yuiKaNgMBUX7i2QgYdJ4K5Y5wjkQjyDWt1cbeTa64AE19pQgkGH2CVs",
  "key8": "4uc5eUcWUovv7M6nBfEfETXRNFniJJXx86jfbwzSsxW5VGtsoYWhoqTPcHwJNPhYxtf3YX2EYuhxgBhLdHW5ysjk",
  "key9": "3jH9YvWwSjpRgeCAC66XqmNL3kU519tTVUAm4bEpGDEcSiyEUavVSxUFtEJhmehDE7L8JC5CMMVVccd9a9ExJus7",
  "key10": "4v7Rqem27EKNAxRBsud2VPAKo5d3xDgM5TvZ69vphxrUDXQkcJRQ8cBKn9CzbmJX6Qrb69nNtNDmetQpcgJZ5aPE",
  "key11": "3BeXT4xGy3Gs9y2Nzj6ZeHYSknfP1Q9pyAcR1Pn82Q8meJyn6Ki9aMQDsuQgYuCKPkNpi2nu93FVAGZWqh7uzsDc",
  "key12": "2vhr5rMVkNcPrVqvgCVjfXnGumtYhi31kZjoJG8q6uuhJW9wVgHswsbdwHtb1EXt8RrGrUMUHZDcp7K82e9Zn3vj",
  "key13": "3qUg28GxyWGGDic8t68RjXAhS9BKNWWdkdquNQaNXg7AHyqENbpAiP79KRtUWJEZjqiuGAeSubaPN7a9QaZnx27W",
  "key14": "HuNz1NK4SzxdyxyruJUi5oqEv2YpxaDhnqyE6iWW4HS11o3kcomg67UH9ZbQui9EwR7PXtfS8xe3amtNtKT7c4D",
  "key15": "2eiNunaDvy7CUwMQhV1UyXi7zjHQ28PGSF9HXSrTkhohpmNhaWhH14mCizdtmkabDoea7ukN1fhVRLB4Crew1jZD",
  "key16": "29CD5D9GcUs6SgoXU2aw4oatHJiVHTZbcJQX257gSpe1awtZHYSBRgQihtHgVa6rt3qQ2egcqoJebqf7S5cepzBA",
  "key17": "XFTdj3akuNyhfAPyRJBq17cgrxeCageBPR9EBu8qDBoWSSz8rDkYRXgLs5BL4Ux78JnqfE8BgR6FqQu6YxneRkp",
  "key18": "G84weAkVn9n9VA5opvrCMNkut1P7cVCk783chU5ZGCQpdDf1qvUiok8ad3YrBekWms1Tu9qPRrUHmsKmA6D24Pa",
  "key19": "54JYwE3mXbaKi9nNv45xFDm4Hnh9cL6vA2dcDyheJnQuDnASoQHRwyMwAntgxfTcd4hV2w6joUrP4HypWfEyNmWE",
  "key20": "8QbFS2LHiQpkbhAvnSLpaHwLA3ZpW8F4aiM6vBHA7jeFh3XC9tPgJmRrQoJ8BKwyyqgCtU2VXDKmcScPg21hgjv",
  "key21": "4P7PgwoTDDfXDPu5TTTSUdc9P6RSWy1Q31k57WUTNEiq4SodrV2TU6mW2jfdGF8h6rLcLcUyqAbpbR7AvJyqyxiP",
  "key22": "dotF6avPdTDUPEwwuNWnHJwJhyo2Nxrnd5h997yRdsDtNi1sDHzU342isDgcPF5jdk25AovS84foYaRJ5HCUQNZ",
  "key23": "UJQqJKf8rMZWkY7qaaWkgLB1iUuTqf1n5mTncpATszjvuUX1TqqEnJqkg4Hmnz7HwGpUuE85hmpYuN5JMDQKSKT",
  "key24": "8uc8iYe98QzagDUrGmrsDiQf3E71DLpU93AJZF2f7mmTaG8i5KNaQFhqxcEkmhr9TS6dPbfWztXmi7LS72SLMck",
  "key25": "5CkYsMKBPLt6jj6d2Wz11FdE4TfY9skAUg5j8xGaWPTWLthPoTpFKhiPY7K918HpLFM1yuggguhpWHkVHz4QM5hd",
  "key26": "VXVS5z8mM1dCGa291QNpeBgC5jNpSYt9znM2Z7J89nvJfstRRuqt2LBfJ7BQzSHPu6c9SM6keWNMAznB7KHGx7i",
  "key27": "3XBfcX8xSsNpZc1Rc9Fqq4WAc4joHrC4pCtKEbD4fzgPS58veNF5RNanKo18w1N1UsocLNmdvHWgdWEJ89ts4kcQ",
  "key28": "hprEvDqqwJhUgsAUbvxNepo5ziAQDnzgdrAkeePdvMPEzBwtMtsJi5eiawetVj7foz46T6YkJJsRkLmPraGs3JB",
  "key29": "4a3iDwcctktVEPX9s7g2DBWvrmReQpdS6ErPmWyB1Gsu2rsXLSCjHKmoDDJ5tNKduuqFTEhDjtV4nFbkise43BaN",
  "key30": "4pYK7rVxtPFKTtsNSkXpK2zi51qd5nMyTnAaFfom6PMyWXQD4doszkDo7T9kBKTDRnixrD42CDy5qTg3WLbGRDV7",
  "key31": "xTAS9jAjLL78CQRWPPfMaYJ5FVSJriGu8LPGpYFpm8wHTSn59Bpnu3c3KeMpLCw8dNNRp64pxwf3jg5oN1wyjQG",
  "key32": "5x94dSdMVhjwzXQHAUe8nKHcaqFB3sTL2xv6b3WMLUrrYQEYkoqJnPJEDfLwJdZTPzFfawBhmxXjNu2o46zWWKGa",
  "key33": "2r2PyhRJzLzoeSjrMh4BrqqrAiHWUHfbeGn4RNYcF3WDMQY7sUSP4wQDCwwQRNu9hPD5GY1c6te2AnLDCsuyakNg",
  "key34": "4hVWBceN4npssPHjKWo6TNwEidqRQnZdjstUjHnpAUTHB4kisCxdNZadShwBkmKDLHRYAyMb2CudWRDjYbCLCz4h",
  "key35": "3CBxvGZWCiekUkqA1RSqGbe6xPzJqwVj4Y4YEkaHYC1CeHkSs9t3xJWoZTgtr61d6eeCUGGWU5rBjShjVBDfqLkF",
  "key36": "2pJc1qnKax1B95UR6ngqa8FUpkcQ91EctLXUzmVuaGE7oUfrw16nzKUzRhQU6vpgqd1W75rfEuVi7zCeck2RxqiR",
  "key37": "4CNaGrJfg14T8fNQb15NvDvhHYdEbnzjR9eVZju3hUDjUN4vbiJSouUinmX1zVPaM5sp3kpnL2WEhpqBMFqQzgM8",
  "key38": "3SAN1QMUcYGGtJGpmWN26AWo8JE5VpQaXR3NHei86th1vrm6DxaajnPNYkpEaiKG55dneihrUEGB8eBtT42KQjbx",
  "key39": "L7xZqGcSNmhPWzFdxkwkKZ4k7J1LjUUcC8kwCrdPjeBb7YrvjteXjFwnDnseFFrwXM7dnjyHrxmaeoVsEwuBzFY",
  "key40": "2G6SqcEyqJYetsvNqn14UBLTAZQDk372Qtzhrs2fYLirvDqQKx4R3Ta2o82iU4ogg6CgL4Zfgx2rvDfREfRiWKUt"
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
