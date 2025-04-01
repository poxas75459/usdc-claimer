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
    "SSy2rDP8LVXy6dxsA32G6foYaU3RPgqeBsAndmRZZ5MnyKYQkYSRt7DWbwMCx5dq1ZZdVjunVBqDYRTGEa4hFzM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WmygURTo6RBER6Jec7eYvwU6xscoWgV6jbnuh8ydciJrv1eTK6pnGihZjHq1mJJvzPs8mbHcSqoHz5NVFTCVnyc",
  "key1": "2fwdRDqMrXfu3AZAccn4xn4pW93oFdkj9MfWLt7M9YmyPNFKGPQKCYnVpassFS2BPA3AVMbESKH7KoqGrAKqDwsJ",
  "key2": "ZbZWexiEsaBiNZD4m61u1Z7eFiaGaZQkeXZkhJt3KDaj7RA2wKoQRRXXw4Yn7ZsUCcjuPn2Jt1XQs8Dq9DyaW4Z",
  "key3": "2cnSevbLJ3xuAii7EKVTmr1UcyDVLC24LSgUACeQYjQrqg1pQWqF4dNqNHA4pz9gtLWdwnQNCw4E4y5RxxeU14Kw",
  "key4": "5RmoYuV93zTmKPH5ZH766C4pbAaVWB6vpJNGC38ETjko4GFqjqRGELdrYeeE6pNZRdLZshYkec1XyfVaVnR62jJp",
  "key5": "5dNYnPEqGyxJrxH4PtDJtqgXGQZ9UCepi1pJBDbfe7YRZku2pxbKqrfB3maTZJ1KfXoJ4M2k2Gy8fMrsQmPdVAFL",
  "key6": "2LpetUuAm8owctu23cD9sScC97MXSbnQcP3nSd4ZGPZtPXHfASdQcyVefWmAk6i3JeXstXt4N9ZAFSDeyqALs8oz",
  "key7": "37Bw63rFYcRcqVr5ZFyAp3p4MYphsQEY6EgApoJXKqHoBJV9UnnT6KA4PN5n1eSRPrUR9wa67jLxYsugCikqS9sQ",
  "key8": "2d3WPdm2G5spwQxeqCPCCLUE7QGoFJZH1F7ozb1qCDAp6WYoeLpW7ZfuDH7heVxN2hK8EHRMHSYnCUkWASXEpdbw",
  "key9": "2WgiA3KSoYRawpUe8dSnBpnPfwypiabaSmTrBgKiH4683yBbJfsSnTzvCUeFfZuu3ZJhFX8Q4tEeafA6mnAE9u7k",
  "key10": "4an546bCzCnLse6oawQ8Rq6zSkfhTr7tHhe2MX2pY8eAeTNVGSfBXQuHBrvgsGNBCdq5CMCrLyLsJCsBAbSSdcti",
  "key11": "66eVRjcLNGugSeft1XNRXs8ViwnyQya4VVNzszdgVhbvgfLWd9RFnqHnFwePM9xsQnsGNXVagQXHR4G1RQuHjeyj",
  "key12": "4HgVrAMCwVHaoFGxs9GzPA9VGux3L2997bgDvfEvVF8b3VfSkegB5U5YPVe7rCN39zN5SHXVCyRHvdM8LBjqEmPF",
  "key13": "EVB1KpcHf4xg2xnhxc1TZQiZ592AyzrQS8EwoVE7VLm9PsBVji3ss3CbXnSpYJEt2CsfhBDgkonX4ppZHXkfZqW",
  "key14": "3RNoxeiVtpbR8rryBa2cmkxQ4uWumdgDaekdf96tTHijqY6MwBFqUETijaBHASUCm8dMVQyEujfSJW3D2qLX2V3V",
  "key15": "4i36SPwPa8V48X6MG5wv7X8TrWuDCHuTjBWBhmzPQJLAmJNkWBhFAk2MDU1Kq7WuEeaFK1fubYETXgzHRnEfDNgW",
  "key16": "tHfWF34naGjPTEo2gCQ2AiNzRyMvGQkyzb5ga7NjeqZGip3nt59nbiAMxUvMVhPew4cpQrd32vAUTmYWJusjtEP",
  "key17": "5MaiPMCaMu4xs639aGBVMqtXxRsmJCaWRKwn6sfiVh4vSTNw2VV7dWZFmyGjZqmXsQdg3D9qvCxSX7pAnRosXXiD",
  "key18": "QUKenABQ65yNUcrd3d42ABWsyHkNv4JoD6FCn824t6XEPou3mV1NVAPJsoSHB41NRXgDzvsnLVq1ri6QEMEQrcP",
  "key19": "2tSnw1A1XWu277mqC6sgwdFMcHviEv39gcBJVw6kKidDfo1jPvwfj2CZpqztmLDeTWytdEXXyBF8mdSvYoHdQftT",
  "key20": "2aufi4e11PANgQ8wXPLJoon2Qy4NhJbBTuMiW4iacYD1NoYNsZaxEjAC7RFnryacybsFPHeoKyhdw2t19VQQJpLT",
  "key21": "457amfQC51Nr5AqUQKo2tv5Dvx55hq8ioAs2dsi3Td4CKNdUamRGEM4uY9Vm4pXygWcNPJtPKL1EKCjNF43z8NiJ",
  "key22": "4EwVHGwhhRYfjM9Xem6MPVm1mwtg9NsY9A89PWaY9yEboLUZgqohfmRDbySfvG5HrGS1YvAAz4y27H1HEgSNpp7q",
  "key23": "3zuu5XoL9hPKoCqmmkR72aLbZWJzMFyLegq8FohN3DTqLW8QeDQkCqZYUyojNrHvrpCJptzsLZZdPGQAq1cD1X2y",
  "key24": "4vvUdume7MqfS1GcpcPNYGa38MhUcPb6WYr7QsGpcBFQw5hiRwHmeCSRsNfiwjWERPuWfdAij3gyGhr3NXrc6Fdo",
  "key25": "4Z54CtfC3gfCcmcgSehdukoxuXuKr3Gn5QZwpjSN6TePC6FkbKvbdAnU9zWHLTaz7WvKt5utTLgrLrbhB2uCZLh6",
  "key26": "5yiBAT9cfgP9seBJLMWkwDif5noSo9KGCtGbF9CGAPWh2oTeVPZTvP6qNtmCYHwpA99yRfQdDRry6wQ3CVvBvDjm",
  "key27": "356revSNMrMBaPaRzMYDSZbgjKGztzvajz3yFh7yXT2RJBFbXf21jSkhy482do4gpHLLAqhpMgRZqKLWAJjP43iB"
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
