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
    "2ZaGgHxeKSWBoVMznnALWLLXwC93CqJBhfheJcGdLANVxd78Aa3N5RMRSSir3eDJNVpzanBPuMpX4GnAu7g8CEkH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qe7YS6av16uFVtg6QDFYsAqbvmem1R4hrgXtuxFbE3DGXrsWAvVq55sFRx429f9f5TtZw3UBnWxnfcgZSyk8ibL",
  "key1": "2fTJqCT2h5muWzobyNiyKLpR1hdJbzeozVyVsYSAezsTB9v6XScNxpctcVLbSvBvQpgivcf7CcmYEFsLnoS48Gtb",
  "key2": "23U9172oi8Y1y1XxPcjZbcPgGRqpjF6P2323w3wpcYTA73Zwhu74aYdScANxftFLxAArvf554xaom8kyK1t15pwt",
  "key3": "3AnwE1VwVYRJLyyEphCscHVmRRpuHZXdkFVNzuyEf84QTcfoZoomjAg47G6eAorSFvMVGCEbTSvau2NG5hLiKokJ",
  "key4": "3vTL8aGB9BiUaKfdM17fmSLwu7wcoRVPf5unetTxxttpwCDKXVZNmp7tGkoBupFJznFJ4rkfyNnhebLLK3JneRbp",
  "key5": "CiRkVF3h9QTbeLUAUPFvJ9X45yrxyz5nN168oMZRDpBoVgMnt4SBGEgPG3PWsDnaJ6F18Th5y4jytmdMb6fi8eP",
  "key6": "yYpBaNicHSkyaJqFtJ4wiP2zgf2f6gxx1N2cbFH3x4YpgFCDVwDfzcj7DF9GfuyMyChMZ83C6eY2Hb1kHJbqi7f",
  "key7": "RHa81pSa1356Jj3xiMTBF4wDq7uyEgwAoNV3dMhYsAA9TF6zsE48noECZ2sAMJnDE4kgkHz135qgvBmPt2QDkom",
  "key8": "3kFTtZDccPiJqthQ7i7qGH7wx7rYy2bhFmTTNoTrtyHSYLSWGMxpajd92cviHazNHjiNwrYgp5z96k9YtLhC8WkT",
  "key9": "7pjAvb4eKwA9nJeUKJiGHBi93hN75DSVCs7GHMCA3Qv8PMigM7ZMiMxVv88MorubgQeeNuwHY9N3gEtiXePBdJi",
  "key10": "LpenprZ4girvdbkhxpYr4gf9MgHEB2b2ri4vPd43Mnoj5vqCbS45hAEbNuFpSqH9Nxxj9C9jpqaGyQ6FKa2Pexr",
  "key11": "5zN7dkApso8a5yJX5Edw5itgcRQHa9wZPvfCn9rYLFhudprK6RzqHJdwoCUsajZyxwWyoWzw9nyN4TSFBMCy6kuf",
  "key12": "2qwPJMtqm1VpASrnd8uPJK7Hs3PzZCA8sCwh9LvTxQgdA7yppxgi1oipG8e6MKaPRkTCk9N88DW42dAqHuTD4YsE",
  "key13": "Rhmk6rVU7BbJDn4ZjWFMaQCQymk1jtifSE55b8gAbEbgHbpNW5iJxBMLgKjwKiJyhAzRNdwujJPuTrqMi3aN2bF",
  "key14": "5EcQdfDV5XJvAD2nC7Q6dnotRwEgT4T9kJ2jhtSm9dMvZNadN3f8AhciT5CqqZb13hGykAsMcWwHD4N2gzEr9yio",
  "key15": "3wuSzA4MbFckXEKFM1MDMiCb8VEH5PcLa6nBqBm8xj8vYvgF8A13R3TEyTJEwCMTeSHs5TxBe9c95vsVcjXNmHXo",
  "key16": "5xKUjneGLDwJXmToqkNR1k7hqD7Xx2GR5Aun4ktdEvGTML5eRTsu9sJXLV4ZyLAVka72oUCJEsLX5m2HY52J4NHH",
  "key17": "9qhCTunofjSS9xArGEZuMKSah3AhvsTMihDrtBhJbKWi9FWyXoqcMQnYP8Npa64iySNXeVdbQSV9VYhe1jwWMjg",
  "key18": "Kj8WiFeZmNsnApqKXkxKrmNNEtAkrhMNLpCvGq4QmAgcr3Dw73VrQsXYma64R2zcdgjS4PNx2gLwpjJub8qBNS2",
  "key19": "23bGQKgvJHHCifhMdu77DqiAWFcKtxWWQVmkkqyp7vALa621tdLPGM9fQsDRpbX2a1iYG4drqHZQxJP9zMKQzeJQ",
  "key20": "5yb2iVBHV9VGrC3njBtYnyXpD1vjQsHR6bVYUb6mtSWZcv3bmRHYmEJN7QcHUwz4zPSFc4Szto2xcrkZD2fkY7XF",
  "key21": "41Cqv5WM3mELkM4RVin4rs77cdrg7c4eoYYdkNwcKNU6tE4BYc1sHdvFaBpkFJmTiur61UYPxmDDUadCQmRce8hS",
  "key22": "4KmcySSXUBYLhmrwZCP16AXJ43bP41fwLGPdrtjz5PpXWXRMmshKk59cMzHyzCaMwpFNrSaramj4R9eWGMzvNYYe",
  "key23": "4mptxiT2Ewvu8W5sFPSKDU71mYNW8sseZ7PnDq7htyiudq7YgdWk8VZABDvHTCk3ZCLeTgjoJ1fd7ztzLQp1sNtq",
  "key24": "4nqpzAuquHvhbAXFDPT5QjEW47B2PSUtgprY6wPgJFKyXiaPQFWY8zdwddSkCpPdEfkAEgeCZkuS5TxHAvz62k22",
  "key25": "5bJsSEK3w9XM448mq5B4ppFTPhuMGkNuZcszgWTRvWq8HhZHbBmjjCumGrN7bahxybsfeEGhA4Z5Y5ZkrVCSb5Pm",
  "key26": "4rdbBZuq3KRzYRS9DYSQSGEFxsT6Lbte5rbPdd5EeLBpbFxy79Eb8ymYLBmf5inP9Bqh23BUSXpmDtzDQjQ72xJR",
  "key27": "3cCmcwtXNJnMeSigoDSXMr4m821wZMpcBhGNVfTpnunsrRqqTZ2tfLCfgHgUJ2ysFoLUzUkcdFFgFeQFzLQbAwUj",
  "key28": "2hXnFtqiGjinyuJXK4smhPD3sMna7BDK51X1jw7HVzpicSALBGZbAwSN3vXBpRAGRkQbuzYBCLYVx4cZP63vqc4H",
  "key29": "5eNhFYygHGpaWQsDgpVWd7EfpBM91QAQiKgkv7iqytSNtHN2WtoD5nnLqSt6rXhc4ENNHqcmB2CtbRScSo3TEJab",
  "key30": "62w7LRxVtKmBSWbxHBC5o6nDwSb4YuSQqwNo6mbU9zYLE54XrJwDHAz8cfnD6qTkC6iG8oXDUfHqBUQZPchngK9K",
  "key31": "23az5XVuNxdeWs4JEFk3TEyaP5wi6qZ1uaPjXZCsNWfhZ6ieSQoGbb4HsYKqDqDRhPpzuSGq4F5HrwqgEsDM9u5o",
  "key32": "28dC15q7y9trXW2Tz7VXs7X8XU223WandbzzJdPAiwbBTqDpaKy3w5W1iEcVbTWXmx4m3t3oLXuybj5kebknBAii",
  "key33": "4VE5WnJ7sZiowVFotzgsxSDCFWLRAjgByCPXfn9cwspFX7vFqVGcfhSKc7GSKYUuSnJAZ6zme48FdJ3rFdf75cLF",
  "key34": "3hJNw5TZwf7aPFnbiwoMNJy7QBWfwJmo8D9oV1kPLB7zAtypTJshwVfRJDP6wiSw7AFGUtem7eQ86T7JbmQxfyQu",
  "key35": "2tFm26WjX6fYQwCFhUJyw3RGaTovBzLURUPUQKmz68HhDHqW9EEvMUKuxTaiL1P9xQD2iqQfBzgG36J59jkUvNU6",
  "key36": "4okySyjKgZoCywYrnmWt73JoTkAoZAfaMuGUpy8vvod6kJkAz7Q4mN13Md5Cqpg1hsuk53j4ctFqJ91Nmt1PuJdH",
  "key37": "4Y2yW1EuWQ6UYJGYjejsXjrPGdKN5ZWNQx4iMhKPtSGBa1z6WkXg6dpgFJLh8vBwF1gVBtFThAxWKpNxz8rkQMpf",
  "key38": "41aLKhA1AqC7mD33vaMTnfEVDhkubw6ykm1AXgqpPNtoMcQPHhKZSkd4FQ7fgDAXC3vwBhDJ8NBBGCaSpmLVgQUE",
  "key39": "2saqm7Mefj4UKKkVCWScBVe7DKavq3qRTQx7zAhiDFnXNAeacXEcNE4iZxytVXDW12exEzBpvxgpjxNHPmiuS4BP",
  "key40": "53s2ShgDgsC2LizWzr6DhLnkotUbanVTcS3RxLwcfTRYSyhii1gsxxuGpfo2DVr6GPHvR4sCb9HUpeaWzQpsM1Vh",
  "key41": "2yZLRF16Cg2s2feCYcsxhFYsXX8Uq1Uam27opj2345gBejV2Nm9VCAsh9LhNPvaC78AbqPNmvEETjVTUnVBRFQ1P",
  "key42": "2ouK6cwHjzXNPxV1u9BNF1iKPZtpo9m5YVykyXn7RMcWTWs2kx4rgyu4RxSaBhsus1AFzSZ1bN74sbyq4mWAjukX",
  "key43": "3UCcwEeGMbU7d3ctJ2ohMtx16VmysiPSQsceZrRxDeESduZwToP5Jb45bRENrS5r6sewuBYPz1x98P1uYJ55E6LU"
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
