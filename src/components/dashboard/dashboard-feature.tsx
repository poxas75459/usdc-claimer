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
    "4B9pQxy16iJeEPaiRNr3uzZbiaPSkJg9Z9h91eLtgviiNCKwq6XRgio7TmP61WznBUCGpsYmuwj9jdpZtWmuT3fM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fRFprhMPzVeoUM1b6Xem471hAP5VRmBk9edvbctaoMKMQ2feq6M5UdyNbrrDEuNFr5GXSjV9uJoHyKHqmy1Ux2N",
  "key1": "21Lmgcm4yxgKABbymakJmxosw47oR5C73iCqY8Wcdh9EtPtFMkzJ1grPx8Vx7uNF3yP5zYYVo4h3JSHxCJujtubK",
  "key2": "5XigP2jRqFXgRyGgvYZJbguUPwrksSWFWfvrGLHw9dVdyW5k3pVZPXNPUfKU9RZF4BGJH5HDmfaeWQAfyTpuVZ3j",
  "key3": "2g7GF1rJTZnUWkqRaz4reqMaSiVUHneC2RQEHrL9D7ww8ine5puq8Ku3Yf1xWhGoy4FLT6C8xpgSejxgdtHGmsts",
  "key4": "3K1ppP498j446GSTAhqYxuX4y8MCKmfX3tHFAmfixVTLugsrMq1ZwiZF738aWBkMAsLJ2WfXc4PMkjfBGBLjdga",
  "key5": "4pRC5cM4R5FTUoBAHJvX8uzwNmBiDkMFq8Y3QJwuqoDXbAAPHoP1axUPAuYVZFodPu3kZraXnJxBQ8KnUNmJkWHr",
  "key6": "UKcHrRhdmB38jhAt6LNdnsrGzFwZk6khhGTayKCdYBLyTACNQiwt73QG3Dnqvm9BDriCLXkCchW4ZDhKTjXyimM",
  "key7": "3pAUzTXQDW8hCfsTFMBfCVqztJBNwxKp8sRSEDWfpSRfugaeSzx1tfr9Q7R4mAZ2As5PcWiW2dYr6qp9WD2YjyFH",
  "key8": "4SCaidBLYDvfrNi57KDwVMyJ7eFMoxhiQiBPq5QMSL7gJxCWvRedeWYRBNvbUBbtd7b4BH8EDrbt4FJvPsWNCZ3L",
  "key9": "4b7pazBnJ4ma53PBQQTetTQZuKwVmUKnYaQXaBN6nHM2vLZedZhCC5Axe31s5imbhv6xRGevGd8PZGf7Dyb9f23E",
  "key10": "3TViToMUBhP4gsgMv6dGSP6kw1RyWRTLenWPMUWwdALSY335nQ1KTuYHRW1XoY6Se1RvXAZ8SMAWW9qmw3dHUXDe",
  "key11": "25hPQ63Xax1LgtGE9h9Q1G8aMaMe3666GD79YA892vCQNrjYydBPzJeVtte7BxumWYi6GogPiJ78txUd93Kjsfsu",
  "key12": "3Tc9fC88X9koy5VASRWdiJTuXL3a6E9NmT1dL7wbbSG2DW8Gaux3A96Ax1eF1oQsEQfd7SBPSddbNhtT8xM1no8G",
  "key13": "2VoJXPzK5PHsS1quodqEDsYzVysmse8Esz9qsEUPBfwuSBgFE9bbLJFtLPdLSk9x41cyuuap3GLAF5aY1SdFjRY",
  "key14": "3rTVD7sAs3Swjg8pZJNCrt681KKpG7MEk179fT6spA7VVmpr7nm3CSyVS8WyPstdvVfJJgBVABtSeGiEYSNd9nPf",
  "key15": "4MmPE6RckWgDWvU1eaf8E1jXvHoyFS8GkUL7fhAvC1QdTM9zRcviFHGPLAMD7NzDU5J8vFudTYvRZ4LgBdw64MC2",
  "key16": "3FZXE98jgSKVKhruEDZTi3hUqxBR9CkGvL2nTCFHjkeTrLfHnT3BSY9Q5Gmt4i5KtKkpyH2DM23mYRxZbZuPmJMg",
  "key17": "4HA86QRAwfP7WyGjK2Ts1kKphZSZo6jFiXvo21PveVJB88Cv8A4FaB3LUBmviukH2niJqy2LAjeUUaWx11GYz5dA",
  "key18": "4wA4jnBp46ouPh6Bo8xDxM4Hd4BaXBfHatDYc43zHVJ9e5MPFUPVTqMabPSByRCbq6kCgAwohYJx8xYPqHQ5P6qr",
  "key19": "5feSxxK3SiVUQX6v6hrNgx1pvRmxUxyFPq15jpideWpE6kxgvCGtJBusDGZpZ52Nd6cr5fRwYLts21p9nBXVQimv",
  "key20": "bE7vzhgmxL3JE2r2BNegr5GYCntp6gL5kRR9yRAaVDxxk3X8pEfRUWB8snwGQbbxPDYWrM7vVVC73u9FfJn115S",
  "key21": "3ph2svZMhw7xCNhEPnEGbBefLA1ESj8EBJ9haxSeQhDd4YKiPKWTEQFSFSqZFH1YrYJ8KHHytkFN5oiAk9UJNTbT",
  "key22": "5vL2YdBcPnoLMQJQUrvZcYWGzW2XrMUdza5bnMMHgWFKQTMMncgk3VS1vgeZbMBEUQ3JaqqW5uRvoRhJMhwdJaTA",
  "key23": "5cnDnvMFKNZj4DNdD4xtVmLidJf7Jy8PcdGYtk3HizAix3JM5mEQ9TmZtb8vVqAQgu4HkdDKKKT3o2LAthjepNkB",
  "key24": "3ecjxXgTD11a2gWzRRAj2ZHhxNKTU18hSbJk1pv3eZm2ewafWokbmD3G1iUo29BYA63QfqNrpLzPoQmSfFgG2Ybm",
  "key25": "4SD8X7FsRGtbQW1jKgsSmEivyD136vUQnBf7fXQsV4rn21qWckYbW9PmBm3yRQgTttpQqvfd3PmCdAKdDdKaZG6y",
  "key26": "2oM3BnazLdmHjTRbi53tWxNerWjTDmbjT5LhQ9hCHm3f7DhoRPoKz9okEoiF74Jvqk67E8tCYT5Aat8R6hcGh5gy",
  "key27": "4RLtUejwBnN64XiFyXUZjNeYeMvB46EMTmTSY9wkF1QCZj5erhN8h7RfEwxKBPYBTHPGfyjuArjyokKjkucuY4FK",
  "key28": "5qrFAZb3LEcECenLFbwTDg8HxChjRz5XC4o4MZ7xKQKrXtK7z7HHAJzCPnn3NfHFgDXaKMAGNmX7ytwba57SQSfT",
  "key29": "5stoCLxZveBsa89rpBCc45PzxbPuMUoBbXFxhUktP8dcTupLEr8LZ5fu4camqF2YLDmwP65FdsmnaDkfPjKXT7mu",
  "key30": "5MsykwvZ9r7uRpSwkxLKUJinzUFfbLRw5v57VxsPD8QD3U8ZMmgDGQeAkij2493BmhLc9GrbmKVz2QtauD1cVBRQ",
  "key31": "5fqfxYVF1dGUMBYutxhGYk4TFxETsW5RRM9Szht7tqU5H2BYoNNG1YEUYsZerLCp8XZ3xs1YCxdzSwzPeRx5o7ox",
  "key32": "5TVHmSQs4qKcVdBbHbb3Cj5mfHqFvgNjrE1B7CUrXKnec8aefJeoA9j3aHDr82KRBdkV8gV6MmCntaoWiEzAdd5G",
  "key33": "3Nf5Dq19jrEyE6kW8ogWp69uSAYJXk1dGM7oKcNDjzkwhnAVPtez3BGRevFnaaVsEtS1qWsYkbqjpkjksRyBpQUg",
  "key34": "3CktE9pQbRSYyh2nvydCRMNcQ7vzrUkMZ8wycu5rNuMRw9VBXpq4S6kDZtusnjnZ11kyWaAGonspx8FESrdMSruz",
  "key35": "3UTjJNnMD8nsTo4eWTXQxacLQaptNeCPKZHWE1y2PDkfJ1zWBKNzwzSjNf2anxkp7Aytr9fHLVW9fBuq7kfudJ3p",
  "key36": "5A6jKMSMGmXaVv7e6oGu3HRDzJdCdRhPLjJQcR4bEGXrTupTbrspUajBHFRViiY4u5APyTgS1GyG39vye1dj6hMe",
  "key37": "4hWK7bA8CnPXJA7uJPAzLBVZE4KD2Avc7ERkCLS5KufuyfB8C6ycvhKg5oQLmqKDGoBnXhHsXMrf43veWhFmLQb",
  "key38": "4N84RQ2vTSZEBtCGj27XyVFr48yFaDEfeXVyADfZGkBULifsajyrBpjEJKMDZFfTJz21Snohyot12vbLzdcgn3Qb",
  "key39": "4qe5pPGyRUaqnwHN4bfEBGLeWN5QK5G9cwp1Lc1h5gyww2pir4RR9gJ2NQSNhAdpQdwaib3XZw7jiQFx6dXQv7kd",
  "key40": "2mdZwVh9G8F4tqz5C7veQAmeAgvqwLYHQnAFgRNdwWLytm3NJubuZ3k86UmnvVxCCp1R12mc6FJLVybSzrRJ6HBf",
  "key41": "GLWC4k31rs4HEjcWketPg3JkxUdbT27Dnc3R4ZPk1D8KWzyWjqMeCtKjqVLayWyobxFSTczRRcV6ZSJSpLyFzvD",
  "key42": "6pkLwmcXSv3ywPMGEFVkKAnDjcsNsXw2oYMiNyQe1KfTb3oRkrbvyKikbPnKgwNstgr1eXWQV1tn95yXVkNfVqA",
  "key43": "2KUawvkvceJcMR2w1p1DXWzj8Z277MtrKpW8h6RhEXXEgahGf4a3xeiBVpniDtQdYWv1YJAw1e4TuUa5W632gwVX",
  "key44": "3qZXZzvpfHMAYrDRoZsVASxRu8qyBFYMLjgbFjunGaTab5KMDyZsf4Kprcn8GRB5CjUQ138f5YhWZ6t2oQX2qCHW",
  "key45": "SVQhFKu8RntYfa7T9hSSUn9ihoGbcuAFnYSqh5rYUbcP7RYNAQaWUBuEhbjXZctnAUpBjz7nJmLaXmy4JwnszqZ",
  "key46": "4fACZ9hVsEaXPiUFcrExpEno6vym1f8WBCiNCis4TB1crSHwpNthF1HxUijyEQoegnHeJXzBAboSU2mqBBZsyC4c"
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
