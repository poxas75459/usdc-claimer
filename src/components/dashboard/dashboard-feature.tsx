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
    "4UZC4rLyLLMPwCm278nB8pBsUHyLhsDmyi9G1MGTtyWpWhTYqgNj3jFn39UFTr89waLzuTJuGokPskzUfk8dAmwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L3ukXDSTGMXqVp8h2dUYMHubgGMj1Ct7NEAzuM397ecWtpwSWdogZpocKvzE2WsxyWt64JNAwi4Uc9s9bhcXrn3",
  "key1": "3KH2iwk4dUEXdkQn8JvjxvVE4VFCeFZyUYwpJuAhv2dFLDYvjd3UUaZSVHQveKPoosWvJbM6Vk5hG2jq5hSLBfBd",
  "key2": "5RoKUBBmmkRTPcG2Ak4dPJLtYQNjEuJ2YaZ9REMhEG7GuC2qK2PFh1BvdSejJEXnvzGEHHzCqA4qfVttttfdhHHL",
  "key3": "3trM9ffieWT65CesUFbKCsQ4deFXxDFCspMpBHw8VEWzzaCbGb698jjWt3oh8Ho3ZEYPTb8dmCXWQi4LcUX7svBR",
  "key4": "46NnF7fTapbVE57nkdhyNx3LtK1AYme6uGystXisQjpXbt64ibDLqy61FB5Yyn2Rng8pNq2L4C4JHAQX163MXt1F",
  "key5": "2qTCajdYqXiaLu6f4MCkDqjfFibCMPN4qxJxGkixnw6KXAUqokzhPubpZRoK8WeeLZrYN8nHMtjZyehSA6dhy3Ay",
  "key6": "4U6HEptndejKBiHAQsaYRHZQBHEc7PrLptYFuvaG5p4z3zQF6hGef68GSWetmQqVhhdyyMi2B3HkvG7k2anqBYAh",
  "key7": "23AYw3hL9R8sv4GAWEczWfEUX5iREzTtMWKJVXnBRU9bGzpq3McE8dvrpfrznpRnLnY1BZ2mRUqq2WiAKmejPtrN",
  "key8": "9Nq9C1wbup8Pr3ebKN6qW8LRtFxvGBXZsV2s9j3mvSMKDVuoqwuzN8dbBhT9w6DW9weAsikSpaAC3ct9YnJFVmZ",
  "key9": "VHzLhWTThRyziZkvpNrZpX4fkPpgJuqnRMwzrnN1Uq51gJLNQpQKwthd5tBtnj1r1iGkzQuQNhdjiYzrBXkh3ZE",
  "key10": "5mBYFePBCQZaHTXRmieNkLuTzzvaATRH2utogTpAHDs8FkFrsU3iDGbWEhDnbhnZ3zXpj73JKTvJiEhX3ozoaYNB",
  "key11": "2d7cEJbAhFG5gB9Arg6NdPwAHVarPtM376CxkU35pjSiLFHAiPh9Hd29nc7CFPD7qpWgtJsWGMTmEoR49WJ3zvV9",
  "key12": "2fiwxDTaQ2Ec686Z15gn657qPqv89dR2xw1zCiAeAdvv7W4YLd1JkeTUiGj8BgkepTjxM6q2MnkAoFWewccdwGMm",
  "key13": "2FE4eeGirvRPvKm4Dne3dcGdJAduSe7tcsAH6mMqfeukeSxeGqBPZDAaPRMTFzrhY2dAzDqtzXTwjph2gpQYeC1p",
  "key14": "2AJgVkCyjy9un14mgQRKXZjUyh2QXgcz56DSJNyTvhXwaoyV6feZeGwsrNUEfGnYYFn5izX4ydUz37D78a1deTiW",
  "key15": "2Y4j5RuLAp45yAazAjyhUVAncaGSgdv5LxawsMmpBRmUHLFcpYBRq8wWYxnHZipBxtNGpWg9D1hko8y4DWR69xBw",
  "key16": "4dkDVj33VYLoujUioXkpddeZ3Xi5G8rVTAhbngtUvnKe8WA4AZCyS4TSSzNmxLspsQ4NKzKVD8CGtWdtdJTN4u87",
  "key17": "2FMAfqNxDZU2EAPbW4AGnMhrdzLfmg15BZ17Mns3G6wM77JiN2YghHnG3wRWNMsKfDym2GwwnFuSahdEQUr2PzS6",
  "key18": "2thfRXJK1DyxT2aiob4KFNVZLgQwF7pvL6eX69N68QTpwwK5SMoBKBGtUm3h7BswvAavimqGR774KUePrt97R1Ap",
  "key19": "57R3qgyv7Lpd8CUEojFYEzYVhjkD6kJycMsVZDqkCuhXD1Hi4fjXykbAdjekbsz34o3SMqQZrAiKw96LpdUY6Zm1",
  "key20": "iaWbUncm53GNrNoTJimoP8izGyNT37PMFu2XH9pmsSdSTUqfZjjngcEniLcNxYD7VCacoK7eWqTSxHGhax4TLu6",
  "key21": "5gVp5akhWayaxJmjoLwu7shfyyay8BJw7qgNFMT2fPxNge59KacfhMSx1UYr7AbuBe6yvtQWykJpyZ63H3h1mcXK",
  "key22": "5NHjCEgEmLhZYPYnvZynPrCUrgdpj6nzr8UoCjjQTY1X3PZHUpDp2zi3bnPS21vPHd9XsEzyCrih65yAtHxbRzqi",
  "key23": "48rdrKXxHpLW9LhswfTJuzjwJvHScvN69s2nbFFXPF5oSCWSF9MjNWV5XYa8pZf4MzdQeZqPhfzcs3BRVvQ6AXzD",
  "key24": "5oD2KyD1xHXkteHu5uakewYakidvXBz3H1DLUKQxUsLbkM5Pz54fnqMkJJgtsKHjtnMnvJEXKeTzUb2PjSyd1W5Z",
  "key25": "5oPNtCoXhGjg16YkmzcT3JhGAhUA8ymrumECpJtp7W2Fcas7oahn22ocR7BS6jXujJT4f9osjVoYGKEAGihYGUhF",
  "key26": "4PizM1tEG6GA6tzj1ZdEqgp9SgjsRi5kMv5gvKb5DdujPRjpo5zDTxhV5BvkZrco2WcoTKaoUwoeaYWCHtBUdqhA",
  "key27": "25rZGv2khz5NBboDYhW9UowGNT3b2sEun72XsRif1NwJKWuqhk424zNZLdDmWPM9vdffEVpWot4ZmeZuxPmmhbzf",
  "key28": "HSEKdYp8ZETS5J6kTLbhSFwgkmGubVk1Tb5rFW8VYwZLjX6Mu5Wq9PSyt4y76cZDNpWT3gAJ8R5M4YZipA1tFhM",
  "key29": "4RmJMnaAf3vWR6z5vqtJhATLHDFZUroFEJ6LWNHefUgNBj2C4XxtWeVJkxqR7DnfWwZuE1o17tnRHHJNyTBg6jNq",
  "key30": "FYDSJZRpYfCoGZjepNgTicUzRzF5mqqMacY9kFBSy9XkzyBU16EpthKhvb8njz9ogYWrNM656hif6AmPkpY4YbN",
  "key31": "V2KPtKWzamZUYHuqxuZEDU5LBaiLdWydCBgg55HN2FR9zfCAZUP7ggx5yYHzSn7CzmsQTRJQ1kReut7LsGbhT4J",
  "key32": "2pi2b5RTDgxw4bsWrFNvssuRju3G8G4f1zhv4yuVydggXKXzN4KJZ2sq7jgWzDp1J1jpoGv1QQPkSyPi2sVCRYJu",
  "key33": "59LTg7wXquPFJ97FVoR1gccwSZLf5mh2mt34dgQMkYmUGnhS5QswiteoeTQB14SgKesjY9T26fx6y5WuB4mRJzaJ",
  "key34": "5nh4sQoT9toNWGWfGsDhiejXyGpytDjL4fUY4PyfrMBcLKtSKiA2Hyi3nKkZW6S2sXqEU1DGeLVzu2Sq6jtF6cek",
  "key35": "4m4yNnbMa8BHKUTty1Ch9PPjNSC13kSK6eUiVm5z6RBM9BdkVWs96gW46nLAens8ehUxrqAKVAbcU9oyguzSPmvw",
  "key36": "fJsBaAj5sWte9MX5zeZcCGBWzpFqdoSGUcF297jEwJV8h7dDeNn9MNUhxWQVRB5zQiW6rPFKJHJgbBEzsnb5iBt",
  "key37": "5MBtMZCv1phc2VsyFopseSK4KHDMaE9nqc9CAPW3dwGPGwUynNgX63wAYDjDhcgLJ92ax2kzUDfCKyeAV2cJci7b",
  "key38": "5sof9Gy9FcshdQDMVXDPjzaJ3ipghQKM8Fqr9cZPz8KnZkCKmNFjDFmVZAw6p6WQUZnUu9BrczgR18FfkPcshqPn",
  "key39": "28t4zfy1iHdzEF39e8U18nYrAGXK4zCCQGSD3Ga7HGjU3i7qpkshNPfd7HuPegEzVqM9sMnJH2HWZyxMjQA78YcW"
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
