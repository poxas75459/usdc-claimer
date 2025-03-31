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
    "YsPWQThdCcqBJ8p8gfvhP5JxSXnk4zogWDGa47Auwg2uPwkJG7K3tQZMe9y9JhrP6HJJ4Hy3WoL7bP6oizsX7ub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5orK7ULbCUXyxFVZMiRdDZiyAtTaUhmaSyzwpNgzPmQBMB74miZSpsYtgMeGmaRiNzfB8AdrEhTn4pBgQG8LRBFk",
  "key1": "5xYyk6Su14Wzy96ZdkS9LUEHQzLat5F8BLGLyYR1eZmQDMKoasHoUCLF4NXQNHM5WgFqjDUbn9BPxNe9n3RVrq1L",
  "key2": "4Kn55uFNtqTLnHuN1pBgFKrT7hfNDnGfJHZwXfRoBrBkuyQGWU8YrghFunTPh5zr4mevabKSqbxotxobt3Hm3SKe",
  "key3": "3RtA5yRmxgLWga9j5CKvty5KBBkQ3EzrjCvun2tcVT4eVzda6AxKVA1eGqNArwCqcznKrSm2pJSm1w7vQZcx83kW",
  "key4": "66psSdtHx779Hn13z8ASWYvuWigcCHjh3YB9J4ZML5KW8fsPkXKrH9846YVGfsQ4dEipmUPNamp1sGisa3AZZzce",
  "key5": "3QE8GmZScsd6S4PChRNEEoZRHjiE7vy9vdEs7A3TT2VhAQQ2nuDhPHp51R9XrDv5nTFu4VCuNrAAqbYE5Pw4KbUn",
  "key6": "4kZe3x8AS8EtQZsJYJmfLF86JontSJqCALJYSphQKPJAt6HQwzKx5kpEfjyzJrgkvTUUtVQ1zEShK8F1dogF3rmw",
  "key7": "43AK7QZByDPVmprqqEm43fMv2y4ScmNfk8XPEFKn7tdf4vKDtfY3FdeE1TZ5ehB7KkGNV5YKffLRz1FGio476FbF",
  "key8": "2ECRVTdrvAPJbdktAvHMZdSnWa65xyD5ctUSD3v1dWze2LHEHh7NngSJj8SEpCDQnZVLrmERmw6rQdKkg6qzBvm7",
  "key9": "4ULQWiHvPAFHoFvd7J3re4GodSSpdtLjJkXB11P4HxcwKhi6AYCNGazDk8mQFN3htjLA8zuPAKbajtZ9MRmQQJo2",
  "key10": "2Y7N8HBw3B21NoZHxGUU9nwdxxyRCc8b3Bp21hmuWa5agZ2HTJWRN4oAd627G72c4tS6EUeKqwXS3X9EkYTS5CzH",
  "key11": "4b8SBEjxxPXfeYfa53112dqRtufofa9rhQWdrm1nbhRq17udWBjQcisHz1vughHZCaKGvfmzWy7ffAb748cHErb4",
  "key12": "4F6EvTg9q979eqXxmBkojozr5gG3C3t4MMb1QfjLeRHjZ1ZUYaKxpFh3UURwepMdeMVuadTMAPDUFpw1h8uLG4ra",
  "key13": "4mZdcv3Y2VnBg82sRFWZutD93shvQJ2pkK4qBEjdRRiCr3FVRpeSVmnMVYSo45jhB4NQ48Gqp59zi9y6phcJgd1r",
  "key14": "2KQ4zpb6pWKAjf7LRYHcLgCqdhPJ9MY4j261BnTjqXixmnZZN5dvpNzwNxWiJC1YANhbXxpL6fWk8JTa9RuruwR8",
  "key15": "cqLYxsANQ4sJFnHu2oms9RhbhjaEsSaC73inXqgaTDHMsXjWyExt9teUYfdVriPiPBSpWeu5oCYWqiia3zVEB9X",
  "key16": "5yf7LSZe41oGLNfKxFZnYrtixqJEqBEfiBMD68fE3m3icouMJ6jQiWhUuRsMqhxxjeuNBQfMkMJYbKhvhkFEEDmH",
  "key17": "5LdmUnjJ8txPP6UVT8AudNFiPeVkmVGdVLMK1JvtLS6HFtkGraY9eNEvHFMiynnHBkG5BjgBwyTw3XNd5bZU8HX8",
  "key18": "3b1UbFJe94AHtsgVHvt99ctVuuv3EJ44sfqvrFijQVqX514SiKtFh7c8gLqBxt1o3kzUgW8pi5RzQ9w67ygNZUFe",
  "key19": "2oydvXoueJhKNB1roMe3W6uxabC8dDv3cFxfUQ9DX5FwgtTPpNw917rxCyRjczSPt6pJJdkJCchdG4NsNhPbgtrY",
  "key20": "3mxiWJEc6RAnUN5xGHP4ediW4HTLE1jg9QuAPLRGCFWhNThewYMHD6ZXPyGBhEn4eXWKe9ueLiqrT9n2tKtDrNaz",
  "key21": "5HixtVUiUGLGwsCvhCYKA3dQscH9WfNPWtSaFjYKgf3GuxwcbexZoa2N7cNgnNdjNSeVKkPq6UNH9ZJswGnRBjqT",
  "key22": "u6CSKcc7kejJHErysqUN5vAqQQguhLRSinfisaBogBt9Yxa9Kt9bFgj9iXSmXeqqtKECRGqHJB5kUaGZBGheJ5i",
  "key23": "5nKKgvCdnQspAwvyK1RQaSpfww6NpWgYuhXUDVwSSj13Wk1gdXhVrpmVBdFwsmDG276gCMzLaBAeMeAydrcaqnf",
  "key24": "5KGKj6LzAM2nPKCnu8Ksh7cYxHck4USP76tocwf6mDfp4hnAMpzpmbFDFEdZ6iTkacREe9AEyoVwe51T7pGNP1U7",
  "key25": "54K7CtNWL7HK7oAS8xRAjUUTGvyb2ErjhVSwcCAQawZnneSkFpZwZJTaJxSxUvz8yiUSKeUUks1TRtJnQDhm4F5w",
  "key26": "3bchQMtaJgxXsH1dcX2T1RMdUwKFHGukDx7nuDkkNA46M79M3VnqfVeN9rCkEXdthSwezWJXPvfh5UyE11K8veJM",
  "key27": "4Nh4NAaVt3cH7nEbzwq8Y7C9zu7vvbuTk7EtsECVUgAzujZcDsmDVThykPg6mnczRZriQ9wGDi4zygxXTHMDMT6q",
  "key28": "3f7DCgQzVY5wTpPyiQszuG3Zwfet8AC38XVeDHP4Fuzq9BERMWjR386KnZjND1PqsRU9z49gGdPvstzLZfSwo6KU",
  "key29": "CVFEGphsbKXA4NyY1whmDVdgjVkXi51xXtHg215f2vsrPbcxXrb7xdRR8sgEUqMcN9CK78Qh4SQNvKaRbTjTSo4",
  "key30": "4THBDXDFdDf2toTY377opfHBZGazK7suFPsHspEndpTbX37enuaXiUQ9ZwaqpPcSxzJpNNES7prc72mZmbB8sFgf",
  "key31": "cCvFP1Lfr7wRsQRx6LXf9MbdZzXE6dFQ57ifYvnnZRiFFdeLqGD73SPLo2R8BPriaHPceD7Mv9J3y2UJDjgSGUY",
  "key32": "5FGQQQKeMN2nTzBJRiNVvfNe5bVh7bMEFFSHfPR3UR1mSD2ukGqQ17BLPpHsBde6nvsvV9ErnWjHzMYDhKXF1D28",
  "key33": "4Kb3EmQzEKjnFSXBtc7xwuH5guSW79AQqUxJNHqndPMyTLCeL6csG46zY11vEJWMU6h4rAYkkfqdCumtFsnDbXoR",
  "key34": "2TCaRmb7gRwMFYnXK8iH75FrM9kw4sfWiwQ36pkCEMdMWiwoMQmKAZ19PSb4fCXWfY5rTwFxYzwxMm71PwKWt6F8",
  "key35": "zjost5XhLck34rLd2Kcu7tWG5tDsdx79vQtLhmjiY4yRWaXj6NBkEpnhBwfvoTDfw9JXXDSLK5bXaBxfpZS9bgN",
  "key36": "6m86sZAxaP9qQsVxS5K9Wz8L18prCPZMvy29y7HHjnWYeNipJkFWaQT7Tt74TZEA5aVFMxWZu4yC5TYay424MJS",
  "key37": "58LkH78MaTDBP1p6nZHpXnDTAF3SAcmMHeWBEKwiNwWbFCorq6kKTGnDP5mJGG8bxRrcJ6k4pGjb6LaRdqJWFXQU",
  "key38": "4tfYKoVE8eNAhEFw59t4QMvz3ZAuKT2CEhFKtmPZuupBUHAA9fMe5TjutZ9cTVUFPkYsMFQiPPrFySsikbyMchmw",
  "key39": "5UJdDyoGp76P5y431Ku7nCyDMfnCBGinLMW1o99VB79e8HDTxyD1najRbpYSYeMWycj29UVRKDYcHH2TgMLqENcC",
  "key40": "3fVZS92WUJZPXa8FQtvmYEuHW8ZGrQPSeAA56imjx9rshDLj5c54Z2C1BgLYti97AmXK8LxjuS1PMgQ17kbW3GDM",
  "key41": "5CYc9UxF8AU45bQ4WMwBcxXyt7QXffLcDJkKqAMLmYebXnTykbQFb36RJDmXMRki6RaJvSzXTvV1KvXViqtPonon",
  "key42": "5u3eUvh59tU9UVTFCK1PuPaPCJZzTLQKGnDHjhT2tBah4Pvj4NkXJG2rK6ZeTCMwLqCkaEiqLySMNKMFEXsakkyg",
  "key43": "5j4ccpHRSH118jw72qemDUMoA6k1iJ34hRi9RJPAEMSTphbYkhzQiSJfpyRbMjaXz3nq1Vz8UezZ3iRBkDmh4nvP",
  "key44": "2661LxnyjKkGJpf4FhfNAyxuUGY1iizFZ2M5oLLpcoTARbZdQ11Czo66kpmY32VNQH6vhcZLaxbrKQpTr1H8Djrn",
  "key45": "3dEShX22fwX4kwnLVEjUScD1Ttb832v1z1pJpepNkwMPuWcEPtGqNtMKBwHpKeWuBgEUP1QpUn9ocXomdTqEfi8a",
  "key46": "2Cx5KQrRSyx6dReeYDq9Y3GwdxoQWBd6XwbCZ6WK2KDjcCAJtYaSJg12HiCSM25f59cQv4R2jHExo5ExZNAjTNCF",
  "key47": "2ZViKYMGYcCDAPLhNdbKcdf592sSaFF9hPsAhfwYuo8mzVmPRxyBmhP2rfEMmHudpuZ152hYMN8MWZJDPF1JiwB3",
  "key48": "5y1EzwDPLMaRjgAmSYTN7WYpZWYrp5qKfDMDP87d7kqL5DyMCcs6sPFYaqTX3hDhLnsKwS59Ba9nMkd8ctGztCYt",
  "key49": "3KZcYw5zRV2bPFnUMjuMg5SfWABqnaH6n6mhAgn3iPbMfdkn6PMAJTAYjFrjwkajpYeZP3FgJRvUxry2aXg4Apmj"
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
