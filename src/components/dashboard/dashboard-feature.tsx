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
    "67NcnvcpHW2aFpvf4VbxXkAMi8NHxDn9GNqRzoJJfZGKGM6gjp15MSiuJzZz3oUteNhe2UEUzxht5fjyFRPUfUv7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KGpdJtMYtcXyzicSpkF2MiurdF3RwMydQeogpwwvEKpeF5MspJfSFFB5BYpfaznWdhd1M6m6Cy2GKhopqtBR8PU",
  "key1": "48VUEse89Xy2KMvsjWKNYohWLV9etb1bMjG5z3ToEAvaRddKppintEuhVnbtvnBZabringx5Pb9ybgVDdJiNFb6T",
  "key2": "3N86VMEfT9de867U3YwLrKDBXpRgoB9eTtp8wCUBvpA6Vy8ahx6EZVuEymnYadP2DcSHF9azgWJt3ki167bZDqQ4",
  "key3": "CcTidef9mC99jgw9nx3HBjtuFvuYhmrF26o7EnvJo3E7LYZaspyzUqBfEV5RhLC4PnVamYQJDBjgnmYh8EriEJZ",
  "key4": "5iMawFKHPj1yTBpbWPLobhmqsTGhnoPuggnsE4kkxnbjZPKN5tGG7suvdrohUtoSmuHpxCLTWBD4eJERpVt8r1YF",
  "key5": "s9NbMWd3gbeGea2k7Fas8nAfDiEP32m1CvVVHx1nK7ve92HVUe11THTbXAL98LCKouqKNhp7J8EWucGC13ZEYFK",
  "key6": "4fJBBU1CrTeJ9MXAfZrPqpP4cjqU5JrxnEWH9ANL9UyHcXx51DpcC2Xux5x3Q4BznQZeCBE5CG36v5ruRMfKvtcu",
  "key7": "3CFLZ3C42hHiNsL3wUBqWDYHU45DFCe6b3eujPKd5tZAYNkHdQJaDULt5SyryBzqmUmGXhNs1Zn1rF2Ln62SV4og",
  "key8": "5Tntj2A5zWva8584Txghw6xggxoNZVGaYFHLqF2uV9EtTsipSEuxUWfyBiAhvyscBScDTnukLLu2GTeb8QWQNUTa",
  "key9": "4WrEp5AiAkj5uuFvWAEPGPGQbWuqhaaSE8nv5Jd21kKZ82uAuJcyBd5nxbdN1PuE29GWZkRA2hbFhm6r9CQgVqa8",
  "key10": "HQ1n2Qv5w3uFfYRV1DR5gpaYaTTFcCnL96e4xKGs9XWvkLDTDYnPDqa3PQgvd3uvkKgSiMa4Qij7SqCjqwynjGN",
  "key11": "2m3B4cW5NCc9sMvCBeLKMXhS8LTJP9pqnMn6TTkDB31tQX3hT4r7Rhnw5j7D6mBRAMGZEQvyyp6Yc632SYyoaExi",
  "key12": "2fVcNapNjCA1D1465wyHcP4EX1fymf3PTocDnsENoiPzVsSHf7A2Sgk2siyEYnCmRHsqYUjos5hDDLfc5Tsd1bVp",
  "key13": "41zYzUXFGDJGnXorcve9mu9yRG5ZrbweTzj4o9uoyeFBWvopxFC9dHwgDwiA9euDiFqys79kVhWi9QhtU3yv9HTE",
  "key14": "25go2cKBMvwxX7eGSUShoQHHXmqE9WKNqTWQ3WanmWAwSMj2dCPxzW3vtCUmhgTrY5UBG6XnwFgT6Fw9We1D3juf",
  "key15": "4hH9LTEB3mdTs9Yua5VeV4ddEEvU1ig2SZxGhnKXDp1FzzBYVChD3DihmaTwy4uR3JW2aUqdmZGhSe4HQh8tExQE",
  "key16": "28zr145hoeyzx9or5iBTC2cQfndhvTKSDnwb6YeEymXBcFkiHnB7g2cGHsFA6kyrRqXqDuXiWSp4ntjXEChdt6To",
  "key17": "5toNKaDfzLTzjPkUbJmJGoB4u14U5AbD8dY6F4scfQETthTVUmxkWgX4bvmG6NsUtcco4Qgu3e1ekXmTR2HzVmqo",
  "key18": "2nQnXNs3xyqNPiT2iNHnGbHNwBAgMytYMJCjWnT5GtsFxGtb5HLjPcBt9fvxqxDry3ztDi9bhfwoXNf2jXp8hK3p",
  "key19": "2WXxBEs96pVhEUbYKeTjNrWex4oPbWW68vJ5bQkV74w9k4Bd4r6YESUCXQN8Vb1aSX4FfVpemXUhTsYpJDPCBQge",
  "key20": "2csPzNvUjxdLbheNJVRzFvvnFXwcj3yDdX6TKU7ESwha4YwiuGhsFeXqMtDS9jXmKeQB6YaVSuJ9opxqBxHQmPyA",
  "key21": "4S8zLeK5ouojLbYkbYnS2SP1LA6wScm5JHWH9m5EguXns54Uy1TvHGxFBAt1iarxPGPpMYXCrvUsDhtgt6YH1kpP",
  "key22": "5zs5feHW7KQ6PALpCeH6H7RmehwJmPWDbLZuiwe2SKjyvBoL4qKjoNzYghJm9zxnWcph74w9DHkWknapr45MVn8k",
  "key23": "Y4NTdppifDNDoHVDLi3bQCyD3K9nUFihsNNSJr8ZZMNc35sXbb7hiWwqDA6AUHAmXWPVe8UayGmkma9XwsThskS",
  "key24": "4E3zKbBHtqP1SrtdQRkYfLyrnh9ApcSqhus1fLJCeEKF7Q3qJdqCz43AvYFKpQwyZyFcthy1ZKAB6b7Q6epLLccA",
  "key25": "4erRA57zQbBzRJQh5hjmjFvJmdUupXMXeMuov2Pb1xfk3iKRd9m2Q7fnw5svs73G8eXV5UCrUoStx5s3kraF8Jpa",
  "key26": "5SfBJLfvWrMfcN3uGeSQReNzUWjhgZTd2GR6k1HC9QiaXoJdKNUjj5neWGC9ZUABXFikTHrog5xGDUBt9crtFNgV",
  "key27": "2tFQ9xkzJf5kxk9Phj3Eqseh1VSjz31gtyJ2iWjNSryEFxvzaMLQVRwmisbgRrKFLynDTDjaKFrwATctD9g1MFK4",
  "key28": "PgpfBqjzoUdSpNqAN6KwVArXrvd8CDJoknBGuPsKto498Xkgpf6wjRJnCs2N828wfLoAMSQ53J1pcmo93GTYLJr",
  "key29": "5NdaaWHSu9zSXexh5XFZUvxcEPzLRfPws5Qe9kAS2neUYqt7EKKnsKPYW3SynvPyd9Pr7zCwwD8rofET8uk5qhJa",
  "key30": "5dV2G5rqXg8a4qisinGhWbZSzsPeBonY9XEZSPBmAmpNpxbEGx7LH8n3zdZxhByPqBvU8CpJCBCwj1J8K9WS8xxh",
  "key31": "2zzMZC7o3AegkF27xHzczotfcpjYzHMNnC7aBMkct66kAugeVVZ3BvTqqZRcSSHhX996sgL724JTc4wm99L1LdMP",
  "key32": "3bWDNm8iLsKrSCM3nZ4umAM6FwaNEuDbF6ZJG9Ui9p6jW7mx81iKjccrW7v9xqpUjocBUYyo7SNqCqqipQkCe9Ea",
  "key33": "5fLbUnFqKveLaDSrxtjyERBrcA1nGfXkKcaXupWFxLCmikq5kaRGST1GvU6PTUfG6FJnpY76rBTeKyk8DRLM9ujH",
  "key34": "4SquDmNjrP34EXakESzTCSayB8u6iSmWgR4PZdPj3fXY3i8gK2WAaUuh8wPTkosPNqbGriq3k6cdSia6X4ZXMEA7",
  "key35": "2YRzaUqMQy35vPPEpcpYabXvyPZdNGjL8MJefdBbvYB7BFDtioyk6PT336m1V9beWj8QTjmUC7M8hSCJ3rqtbqsn",
  "key36": "5KQZtRu4ZGhpk5YHThN4yyomWtQUc8iqcDhWjxfvqZxRXzxBSwQZp1kb5ZQW68H5BKWPiQ1PSrxBVnfvj6NDwdRZ",
  "key37": "435uGa5rb1LtPcVm1bTMopriJw7twpxEFfabfJosgLp7DyPbjmUZXdmBRLLq7vLzgtst6n8kKQcRXKjgjFSaL9WM",
  "key38": "3xcBRGwm8mhA1H9VL5aHDXih2isGiWRmbBpbpnrgQ1FcZKMrhhPASKGXim2X7akYJk6T7DVeDz3thnu9Ne7HouyB",
  "key39": "3rMbSNe4JteprWLfd7oE3UktKrezKEaTe5yu3ST2Qq8CU5jPjSkxqG4gunNMgBTGT8ops2GQLVKhMsX6op4UZgKP",
  "key40": "2Rb5m1yG4qRRNsr2b7w2g6bBmL117DK1z1V6gWBt3csSRwrgn8fjxGAEfrHvaG3WdC5SaRrAgJJXfPMMjWbxEtrp",
  "key41": "36kSWsaLxBSvs4EsaUYCigatiRKVMyW1AYr8TmGY3iJHmSCJ9wFm6j5EXf7Hxos6EMXjtrNFfWqW3fr7jGfBW2r3",
  "key42": "3X6ZqU423Jz2E9uhhE2PTu2W7nFWQqsa1hrqkEqpjRi4kUcYTUrJ9UHSuTBByWHqLT12ZXw2BHwGojHVWmB3hJhW",
  "key43": "4eTXDnL7DZRLguNkzjs6isHVPmyzi4bC1NrF46aMqMScFpGdacA7PXbvhK9vCNWLvzRcmqyb9zG1jp7sNodkrx8H",
  "key44": "2ygx2Q6QyK9DQR6szLu7462KAQP28X9roVVFmzEoRK9Cnjjz8dphq3gRUM5WbVZex83dwG6esWyYAuLyLFHWHxKH",
  "key45": "uDy8qKf8F131WKVbXrC4RteT59YdrfogoAFj5uWJ8wLJvUAoXbVRiPQ9ofW9AAWw7RVisMm6BsGztELppKUk1uA",
  "key46": "vidJkpBgpsHsvZr4sR7dncfpbUD53XzHZthdruguTQ9YtKTChpjjA55oPSzjoqx9mKUWqrBSRQwb3jBpEVLmigE",
  "key47": "5tMLQa7pW14p32FL3mVF8qhEWf4DX9mshX56bQJUv1M4DUxUavDephgjprR4p1WkPYDkg8aU3LidbSCQKHNfibc3",
  "key48": "5EhAauMJwn4GJ2gacLyFApH7afDJAwxK1FjKLrS3gWE9EoAZ38CSKNhfVnXEULdL9SGyEEUfMS1QLLM7gdHKSYPD"
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
