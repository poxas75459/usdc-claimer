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
    "9GeKyKs1vixVvftBvYdHACZ2sUGPf3USdX5FUUNwtXjWp98REtDGkWfV5f9ZopEtezvCKfTkzoSu4Q8CP8jjCzM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QzM2PwndxngWtRbfa9AMRqBwKV5FwZcPdVqh6AmdZhJeEVjuyohxd56VEqjtDDYUdo7wSkX3uNfzpkBHTLriXJ",
  "key1": "4E9tbJtFSaoiYVHqnD1yT2VSBMJZuq9U2RjvENzMPUna4kh4k4sK95kshFd17dzGjgreFwspH3kyS725gYVcFjgu",
  "key2": "tDFDhm95Lx4StF5zr7J1gArem2eyMiRhHcGNGbdH68x5cXMCTK3WuBdSDxGYu4fFJCBW2rA8ZSwMRgwQ7HWiop6",
  "key3": "3uHseB33c8owNDHzDmzDvMkEoruJzSYZPh1aDs4VeKCPdoxkXWHCNsE2BtnHF8MHGicfUnuHP9qweVKZXh1tmprf",
  "key4": "5r7hYyZEXTr4oGDtbsYMVyHaTrqAwHndE6dn5MYyLx7inq7T1hduxKEpitxoed24Je6z789cTqqn5fhvLhPMT4YD",
  "key5": "3MUM2RMig6H9ewGMzpxBTsV4Gv3y6obuRWQePQcLePdXvEXYtGoEPrJCpAw6nYPZPE8Mjw1YGVP84m2qfoKs5Gjj",
  "key6": "EJXutE1BAwcpbgug1Tqp6fpxmsYb511NuLN3tRkG9G7BK7t1qFpfwmsaV2T4juFqm5Z1g5jnCgZ1aLc7jbYkaLi",
  "key7": "2FMtqLfH1eac8qnR4zMWF6sr9V7xaBLfCXCPB9Kpy5h2etwq2LxeowyAXtFz1QHUYmErzPY45WyPTrap5fY4d3vk",
  "key8": "5ibskNyPNSSjK2Dtkopt2SozJ5HtyTZGs2iMyE5suz5aN287wVMB6RM99GuSVTyTNtAuq1KRqU14W1tot2iHLtHs",
  "key9": "4PhaCXjVR8Wq1yAv6k2z8hAXa8Z582GvELtv76Hbn8TXrx3DgH7PgXDZ19b3JH6qG7V3MPpv1xxWnMQV4Q6zSNpG",
  "key10": "2yWDCTfoHXgq2casuNxV3itvxHvBKNtffQL1ZaErxMzmdnyZBR5vU1PaZfL82Sm9ULEKxqX8zSuyAWLiddcqPs9W",
  "key11": "hrD1vdTvDVEnVjCyiV2kLzjorDkDW8WQyrDMEKE6t3soPQb71H1jM1gWz5kkvhStAch5esC94NMc53GJv1hfhD3",
  "key12": "21yyqiyQiZA4BQ2CtrpR6sehi8J6JAWZN5FousaEi2Uy55iJEKDXKnMgxTNRyDGCSo53nntHxceyCttPtmAWEfa7",
  "key13": "23smjQU9SioudT57kxCtH53Y61vgeoNcG8z8tB6JkAVokjqfEubnPhEF1ifgXQnut7ko7EejbFV6CuhyJp2BEHxu",
  "key14": "3e7CWdvz3LvDjAsU2RWuWzfWQK2HyCXcxBQpA138mTasohxVtPSwwJVZr6fsNJQzzJYLFSHC9XYtLejVeX5XLf4C",
  "key15": "4Y1SS5VdDu5VV2PYtJfq8h69ZRqcfHbzsK84TZ4A9A45GdA28f53kmFKjkCpGcyg2TFx8XQHxhyK2AQqHuefqyAf",
  "key16": "47iEszYAKE4FDXCmtZ5HUxadf5D9iLwVrkDgzkyWacnrYQTdP9yE3eEu6Ej69DPPxzgZuuibTfjtUUpJbJwjmfqp",
  "key17": "47uYbdyA12pJ1cu1QbSAGqvuc1JRX5XAws6ZbW2buT2TjYzzbxd9QXqyp5tAufDu57cz8KSFEsWBQRnbQPv5S92T",
  "key18": "3EN5QViC5ug45CRt5W82tqSpcuWJTPXya8DSqiNQTcQVgzKKKrbxKvgkYdqGA8Ymv44srXpFQb3u3onKfx5GCfDP",
  "key19": "NBbFfbHKEPEmiuR3aJZAfirZKT2uTozQ4sbLGXE2bgkMotYmzRtxEuUSz4etTjtaTmp2vmaFUPpszjK1Tcs4f8H",
  "key20": "5NVycM8252kxcWRxsmSeKqFzivKiaKbPEky17EogYFqnUo3xEZdVYEwhHUUuByWBZ9EJdRCp2Ecu1RJhs1dbqHTu",
  "key21": "3k9LcaYnSVuGSi5MpaxfnyAcj2N9AAHAbi6Z9kUzXfsLR5xtk4JBqNuaqG7VNdHZ2NtzHvWbjXx6MJVJrHMhFBw5",
  "key22": "514wc3BEFV8nrB4zk6KsGm5YvttB5hDqTMP8GWLGSN2fajRQ7m73HWpB8r3dmneMSqpiDaEcU5RXtTwhjzyHwDaw",
  "key23": "2qM7rAptHNLtXcdebttiDsrazuTNpxgQCBSLCt9ppQCkrfruy6y1oMJL2nZM3TUgcS8WzMNMg9TVg5AgSDH2Xzpz",
  "key24": "4U1T5PrEcyquMLBQK39z9oNvkZbXt9H3F23g1XtUkkqpMt3ppVJ44h4GL32CDPeACKzNHBtZDv2XW8dMga6qW67u",
  "key25": "2Jsgqo9AFRfM1qkV2VPzJSQ3fi5Bdqs2ekWDabsR7Ds9TTMtruguVmHxvdg7KCnZ3QmJ3JbAHSC5MSnRdrLHCmKf",
  "key26": "5SuAUPD659qsL87jzAtxFrmD45CRoT3uVr7gT3fjTBfqfGHiZpuL5dSZdwcrPgEGKUK1Y1BwR1WYsiMSWBDG3Nde",
  "key27": "pbPoc53CybbQdD9Mm7USkwaNomxhhao4EeHk1ftwXKPwDrzjATF4aPyNCkSCTMZZtmHnhoktBzhWScyoxAgJM8s",
  "key28": "5NJmXFEEErWbP7jYZfxTpCDdFzABiAkKKAmhvMW1fYeqikEheuqya4CF63gpojJG77DXLaT6pAVVWtkBonrDgiE6",
  "key29": "4x6QN2z3THAhkR1LqZKpEP3avQ9BdxdGCU3q3aWySGRVKTnnGNqL8PPENQH7mknx7zD4Qitvds1ep7phtZ2cw7Y5",
  "key30": "47gVqqMqjj5tzQhoyJS2mgJF6C4BqWZLU5JGTBVCWG7iD9xeZDk8NLJqr35dHJcSqAzeSrGpsPQiijjqwP2sKoiY",
  "key31": "4HqvTzgb1tgnrBQrj39YHjqh8o3FR5Bgi1uSU97G1FhidYzLWhDWmmrEqrWJe3QoLXbjXqzaw38GWhtZnmKQE5UN",
  "key32": "5pWW8pmBbLCdSR1pJ59RqhJTAJN4EWLEVTqb1Q9FrAZtWBdKAdbeUXjMZg2frnxdFpcDPLcfDX1LLvu6yVEMapSQ",
  "key33": "nDZNhPASVhsWTaEzLxMuPTRan2qzsTRbA1HPQdQmjGkd688zLTCQexZTZ5wrqc1E8wq5Zj7sbXt6QA43gZsnqbN"
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
