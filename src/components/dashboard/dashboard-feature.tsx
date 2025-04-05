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
    "2DJkrvkQvSEUVSWtEvAguUkiCBJpdgAFQAocKTWXefGLvDPaYrU7HrQXikUvomm8m3kvbXNwB7qfDxLp8xhkJJQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52ZwgmC1SZNgnXum4f8oSdKASf8ikyQv9PG4PMbatZoYVC2aKPvUNtTWToBc9DTNmAYbCqgks4Rx6Uwk38x5LtBZ",
  "key1": "2wFWttn7SxbeLXH4iuo1zDumdA8AYCqeA33M2B7RSWenmUHpVaj2BKvxQFUWsc5qkkrF8xsrWrJxABZkTtBNT8a2",
  "key2": "gV6deGCvn5Pcj4emzmyjZjjDfvxu8gGvcLCTbaMWUqfXhquy9wPfnpwSuumQePaaEemiNspf5LnyDUCxUPqtNrc",
  "key3": "5tg8tNfixzucZhinwYxZ9mo4TeRvygqwqDkVFutzEbEciyvAi9dm1M7NdjvQhttBfb2f26zvedjME5csFYXnhah6",
  "key4": "kwA3hoQFwiKgsHDvz9fwyXPpz3SFtgsnqNbrUHgwwZs5VVumpKZt8FUrJgJo8qP1bYEc1Hn3SQYBXxiAzv2wE2n",
  "key5": "ftypMge7FhRu4FKskDnZuZby6YkcaaSVDrp7naj35jAoY79ZapGqWw7izcb8LxoQ5HodGoVCW4WTpvBSYdPXvsc",
  "key6": "2NXahTE6K32DXtrBoH24jMNmLhWVwFfB8ZsUDf29yh8HHG7qgP4Bd9rNjB51cNAkoHro5SPvzaq5NKUNr9r6gG5c",
  "key7": "nPbVjWk69sWVPFw7xHQrpiXsncnkJqUBRULDh8HvhhXt819KHa3rrrLTCeAb9rq6Z1wuAF439DNYZdZ8cdidkBR",
  "key8": "3ukUwBCCPgGe9xCkq3NWcj64YVQdW8XfMqVMKS85j7WJV9bjzcFymRnZhSVKpNyqEpwr7ZjnyeonjkKGRjEnxqZr",
  "key9": "TyS9K6btZbS9jrwmq4fVZVXATw3huPJxx2V5HPGph9ngobDXXiGgmAxLBCESjy6Zh7EyuRydLsGmkWu5wo4W8JY",
  "key10": "5ha2VyYLgK9UzKtKMWE1wJsaeQLDCbTrcQ67ivWjKfwoWrJbQJxRKJdrqdiik3kxwH5Y4Fjgs4w4kTWCifkUwozp",
  "key11": "4YJzhqg1Nuwt69XGM6X1xmPkzfjC9mwNpY8TrPezvVa4bwVEqWy4iVRaxwGDd5E6LQVRAAvJH7ukmMLXADbTScVD",
  "key12": "4sEfzx2FztKFCjoRCdBhUknV8zDbLj6rdpmwwnGSzsAVNVmP486v9bVue6ULkWEJCpxaQcLTt4rhsAjBLGRr6kcZ",
  "key13": "4RDQHzT9YUfZMDeogHmrPGV7wgS5ULriffhj9zxhpnWYe35XhmomzNqcPxgjn1ZKjGX7N6qRFtEVBPJqQjRomd9",
  "key14": "3D7esWvqYqE6zUnqXAs3KJ8sCSDBUVAJL8fkQzzcTWT9LQEcqK3AJ3dWiQ8k1gNDaE8yGbuTDSHnnbPBeTLY4Mii",
  "key15": "5UGhuztCEGS4rnCsouctGG2dEa9oiGi4NTvgR746EcK7w7oBqdPmiKGCier4MKN7Saz6CEw8FMZFY94KFx3BLqN1",
  "key16": "22KZ59qQfwzPQkSsx1zR2EfPQJ3E1LEZMkJnWamEy8XLVyDdJHkwcYnTPNagHATnhw4LniBtqZraZK5tGAL1yjsA",
  "key17": "2ucsmYRwRCDoqDXosC1VvJ9egRYbpE31zHRyaM9qUpqnUisqdnV95KVVpC3c5TuZV4Negvdt2iazM9rJsRy1yffo",
  "key18": "4qmYiiCyQTxiBFN8Rqn2UfCKDNHFFygon4ccxTf5aaWyNW9fTLk1vkKJZsF8v6c54xEJBq3C4gKq7moSgWPQxwMt",
  "key19": "2aGZcruGhZrLRxFSBP57eGd8TxBM1sjqS8gti9nYHsfS6khW5uv2H7SuJpfXfWo8rwWG9xHjVEf6ww1U1U7RK2Ea",
  "key20": "5Ks5fY3tCFmnnKXSrt31K62EZbyundcfXguRnBp8CHaznxZPEPRwynYSdwQhchrADHoX4yW8Cobe7J9GEhMwxL1K",
  "key21": "4PpExCud1wXmqKy4CwrMD1ksrDt7Xm7U2WgBghXPTs38zjWSoTXNLcG57mtFfmWFr63gJg4inreE2DKNRCDe1PDB",
  "key22": "43piJJCDwEN7yE5P1VfxaQKmkAwhPu9B69EgfkKL7WP2MGxmX8p1Ri1ydwkGFoYGwWisKy4KwktdhZMoKjaEweu9",
  "key23": "3BgAud3FEQJBGXjmbvQiixWAjUzUd7qpiz7hjb9BZ4zN1jibV3CvkXcuFgHoTnLab5dZT7sDhjN27G258Scp3rNU",
  "key24": "63hhg5GXr3iPZREGsqu1odCZhbdsZ6sAPUsCN6d9rHny93VCGdrUzx3ra7HTx7P2bMYdP1Hew8hQX3cZWu6twje",
  "key25": "212qJCoDaiGBJBGdNy1hPVWoSiPhssLtwe4jJoMYvj9ydZDZ8HFxCiL4DruSDK4toE4qyHWP7GS8fpkeQbJSmAMt",
  "key26": "5hRowQQUp5csTmXtAyshfib4RZ83WHLpecG4448AsRq3FiQNKFqhBzQTSFyG1xPwkzspjCd4CMuAhBmuWSaHzNK2",
  "key27": "5TgxcSbmn5ZEdkcYZp8kkojMdEY6UPjg3nLxxe9BpKQvHH6kxYdQ72dfJcKZUCGCy9z3gtMJ4QybeFsGieCjtbgp",
  "key28": "3AoeEGjF3ewn3DGfAMr59SnZqkSjxQ2SPyLNxL41xERcw7Jvfqba4djeeRrqpooBNiJrWLwfhXa4kP6QTtjmTBXA",
  "key29": "pDD1QHC58Ma2bJp5TKikz6NsQtjCrJTfQRnBQq4FWu9Ygg89e1oTWSuhnfQqecsMM5CKDEXdXi6BSAYAgFsLiqc",
  "key30": "3PM1EobbKjHEhgTVWGwBHEkHZ429w5m2yW8DdVP39rhnUSs9wdrxa7QveEQR83qTonWMAgvf6YdRuvP9HXw5jD9R",
  "key31": "58oTqsB1nMM6N8erxLG3G4dQiAhaqXnaW7vTmXtYYyJQjF8ii4czBWzeRyLvL7i8hHMxHjWffeDhcoiGw9pvsLTv",
  "key32": "3Q6Nbg8NmwwiSUzfK7xrYLFPxLkxLfSdeQekpyL3HmziDqdfHd94EYsyQviwfKGhSRzMsneFTPKM7XnEftBuEU2X",
  "key33": "2yUh5d9sG3ZLWG48nyP5fkj7T7pSycUc9rECymehZmW5bgUekTfnTaFXUg6owjg3x3sWZwGbaRiZatGAn8ygxD7E",
  "key34": "5H3z4HC96b18NicLydxsjmas4qmb6VPeAEYhUZKP3aecP8vQyhLvK7bVQH5hH5fjkuoA7DMX1iFUHbeavYQo1Mq6",
  "key35": "2qSeQBS8x2jMfUUZe3HNWTiQdUuiLsVsVBBcwCyC2tCqjU2fCQYweUa1Fb3oJspKz92zMxy2Q8bUF5FYyeN6s8C3",
  "key36": "5ZfGvt5pcpb3k99RvJu7fqx15XgkS1rQZdp1pireTCUkUGtpU1ZKFq5BtgyyM8q9mZwVg3MVnoepAtrnKYrraaLJ",
  "key37": "4AAEmKorpXExfYFchfaqQmWRbnvqTcWv27S4zqzxbXK5bvErwMH8ktM1M8rxys72Xd3SokfkZ6BQRmgMuF83cxRZ",
  "key38": "65dqGZoZ5FbcX9tcub3B4qmmavocne18UqemTmFB6SNBGGbGJbM4WrhjFzeJxhi7J8eQ8VW643tjVLabxh2NXDyF",
  "key39": "EsM5z8FRMQpknWHv21ZaptCWcH5U5KDbhVgnHhFsiPGbA2zrP2q3mm9GMZZSpgbnx5PPyLF2fAMxfyLtF6J5JzK",
  "key40": "65zCW6zrQN7HTakggBfxmA8CZsgfr8PWHosH1P1D26Twmy7zeatwYccBzy6JJSncqq52aMCQKKmMajc3AKZPtk6a",
  "key41": "5jeGZ6bTTfzWQGdMoS4aFaiGc4GQcxAjhxdTy4hedLdbuyAmnurwho89eb9wJqH67usDA2frr56PmgNcv6sZ6nuf",
  "key42": "ACaUmhqwP9P1rjqg9siXvaBdTj4VC9M3iDPfZQd1BkLvwG8pNQqc2DZvnajDp7Z8hMZs5WTRudiZLnTa62fYWDE",
  "key43": "3M9Rup4BMdktA8vShj53AHmYtDPVE4ZHF8KncachxwiaV7VA7UkMjU1DGs5WeJaVtLzafVRKBnEwRCGimqS8uute",
  "key44": "3bpaRNaYGWALjfQX9vBdhA6xcTPBX3KPjgsbwMYUARoxvL7Qq8U1rsyvy6wKzQP1JyfqELTCEYeiPW1f1TtrdS49",
  "key45": "28zdDrYgYE6KfWYGRaXZcmBGL32o4XGW5ktq8mJXxfTtBfnA7w2EJokYeaaR4UMX7vfTzBVAEPRDAHS5AFWj6xNX"
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
