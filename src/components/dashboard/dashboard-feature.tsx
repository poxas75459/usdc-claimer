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
    "vBdTBxq9TgHBA57btNPws2iGVjd7ZFNVTvbEbz6ji3uUkdGPMdc6riknrvaN17nUGwETbkXFU75tTBdPcBi9EB3"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "hC3WiPPMGK1GAb9SmwLbJhrD5CMGjPP1pe8iYS7sVXZKbMSrnvdpZHksP9gptMMLSZ96F6iQHbtxQmZHKq6kRUE",
  "decoyKey1": "4V6GMT7o9ZdmmrHqGJtfMsvE1vj1dBoR9cUA2qsz1Qp6NhShp9QPqUh7RRobYFu97VK5fbFaMg948JGddYmwfBrq",
  "decoyKey2": "4XotiT9ZbDg9JkkVUvDRCrLZY9WWXJRX5bueCuouL7svD1MhHn4pXGG5FCmwni1eA1hA21s5ZHKKuxkB5CetLN6V",
  "decoyKey3": "3taDZChuLBdFt5gJ6jPUhZpoTXLMBtM8HwRgGR6ejS75uDaThw74QRUnVnD4twEAtrjtByg5j2qjHM5PZAQw3T7G",
  "decoyKey4": "5sxJW1vHgRFuCHSAykwQnvPcJtsv3JE7rKpxXGzNW6r6JRe6Fg4v7dt36htGbEdBo7gueBAZYGPvPUMY2Yj5V8RA",
  "decoyKey5": "a357K82d91wQTHtbtJAKnUGircNx8ntEEZBiUEJSenHD5FZxP1Rq9z8FCt4t5tuJQDzLW3oNzNf2k3TMELYzz6p",
  "decoyKey6": "4KiakqNtdMSD5KawjZLnhwUgXnCG3fb867swadPsJ1vvepHAjzSNGMs37rzXidX9MJrRh88A7nQHbxcMC1KxAxAy",
  "decoyKey7": "4VekARQ2CenJQxJeP7USGj6BFHKFpmPNep5kE3moBVgHUUwoeBmfCqEXtwitSp1sCcmAU42ovtinLanp6ASAWRix",
  "decoyKey8": "2ySKk3PQQfdiQsnSxPTq8JLVLr9P6ETSScqV53PKXAQyNFdNsFSX5QZs8TAwt6aua4mnWCLGcYH21ffurDaoYqj8",
  "decoyKey9": "3AAKp7LMiKhqnJuv3tinupN1PKeqs8MGbLNhBndKrV5PrB5mjQHvQAABTg8MLBqrqP1ir5kZT4r7b8D31yqWqNMd",
  "decoyKey10": "3YJs979ATtC3ZqKeVog9gWSPqSHDCXYN5Fv69Ew9AbMbbnJJbLkcbGrG3weiejnmwgGyDY8JJmpbAhxyTCXG6jz7",
  "decoyKey11": "5esuv48kyCkJKhTGsFRstGgutMufLBAP3hTwiRGmXUSe2swhVWdBvt4zDTNTjsHGXaGYvCcZjdbnhLGBRajzCMiL",
  "decoyKey12": "5tbpriPF1Sqq1gdMQTZ8PfFZEVd2ridU9EB16knKsbjyXR65Hn4vknkHj2EQ1oDJC4rB6H8VLWfDM5Q9kkFHE5BY",
  "decoyKey13": "5zYdHYiTvFNFDKty6SBv4tcmJJ2u735CJfZtoUwTmDbgWAf4TJB9EmoYhrRwz4p4JmAe4ULvytqzx6juFmFMLNZv",
  "decoyKey14": "3BTd9bCtSrMzVTsJ2uGLz14urbQK5CW9mUAhUcf3BpUBoEcejbgMBhPpGK1abBKEUzgTu3s6LB5omJZVDes9h9dz",
  "decoyKey15": "4KHCiZATRVys5US4uc4g6wFLYaMonnJRoqqWhxwwrQA36X3oKd2AFmE8T5vMoVXMyAptFVYeGq14femn8obrqWwN",
  "decoyKey16": "5uKCi9PwKn1XLGYbqn3o9m4mgGrLn7fL7kM8saZdPHdXHzNoPt7siRmcwQ1qivt6g8Y4dpsmAkppNdudpf6ez1s",
  "decoyKey17": "2tKfJQbzc976j7t7TrXCJuP5jG2FRvN4jNpBMHb89cxwkBwdiYufqBWeCNUpfEsM4E52A1sErLgNApSeDfjadnra",
  "decoyKey18": "3piyvSVY7y2psqZ4KnpLPnWUXRqxL1Q8kmva5ygDYGCkaZtVdp1W1b6CuSKbEjnaxtEzbKFXfysXU2QHVnuLHic",
  "decoyKey19": "5mcrCdvwicEqZxp32UHt3qBH6CMu2ZFrzdfapJGVgY8RkRiYf9euNzi2YVF51zUruQdLwX5qyGpYCxe2zvmGmJjL",
  "decoyKey20": "3hegvPnWsBG1VYERL9wf9vAJEQBzE5RHDmM9zNow7yweHJhE1E4PM9kJfg7sTbwjXc5hmSHuHRijYiAR51J8idty",
  "decoyKey21": "2ahGp9A9M9yM3BYstWohT2diMiVv9Ltqf7CfSeNET5Tdxhc7BeSi68x5quQquzqpY7Ggf5QYi5vTypNfQXjSxnoA",
  "decoyKey22": "4t6KyAMv2zYT3pP76s3X65N7uqNK4GJygaz7joo3rcrZ4QqPYNFCMLoQqHu2FKGumBEMApP9B9DbMM6mWRXb4SKv",
  "decoyKey23": "2UrbzN9ZmWmCtnCvimujtKpqUsSfboFZWZQXWW2t85gso9s8hZDqN86bEiuEqFqBekcDgRbqBtSf472rzvri23Dx",
  "decoyKey24": "khk6MptctQL8RdvoTNgi8e12K1QTJbKR51X3vaf8VD4Dpd7dFsem3SDB4WYfAanmJzYQWchFhAPKvRpzjsNLgD8",
  "decoyKey25": "2npt57LYhZAMMdfYyffebrVUZ1gEAFCXcfCM8MdEZFn1mWmejm7kkbWbvsw3QcrKpJFw3UDQ7on9LwrXB1cEH1Gc",
  "decoyKey26": "5fbsD3ouf5ocySRHMXL35fp5XqPMgnBcnYksbyY13icfZuvJfYGZ6UgMCQBUpavZaun7XriXgHZgNpDpSxrkJjE8",
  "decoyKey27": "4jdxfLk4jHiKWNE82WHQXnJZKZkEqeCh9Q6tmp2NowsMu3654Y5uh5H8KcnwvgpdrwJhZkVxjCpm3HPZWoJzTzwL",
  "decoyKey28": "27KcuNsDbvy1XMoPo2bXsh7bcyM2C5Mt7SBAm3Zzh8mVs9T4QtPqvddUiHkGzUbDifGNfvDkKptMgqwxBGTfFyE7",
  "decoyKey29": "2vGuvDs6LXaJrfV6CENmr4tUkZieL1MsJaetG4d4jDb4Dqud2Z1JXZxwbLN5tb7nQbuUFjLeUosg684LiJ7oDobT",
  "decoyKey30": "487jmmrX69k5XkgCbrVmB6XbXePQ7nzVePXd8idQgy48FnjcqDee767ivsHd5ciKWSEEanbhzk8ygKKWjJJsPRVe",
  "decoyKey31": "4R4vE4B7NxhGveEYfUx41annjVV7TDdpj3HAMtR87t8ULm3Uftw3yCUgtxtdYNqNJie7v8iEtGmPxittBBGUxt5Z",
  "decoyKey32": "51QFm23TdCDWt8W3jys5ibE24JnrC1ZeyxzsK5HKN6AvQFbqVEwWskkhD1F7B58SCuxrtw2L7N7cwK46xg5Hpygn",
  "decoyKey33": "eQFW3WWCXEFeJFexztUBznfmkcgbauFaL2ymFGqb2yfR4VoA4b1jAgYXgzLUgXdiNDXGpa5q945F3qTfPEeJ3Fi",
  "decoyKey34": "R3KxVDGH4cEw2W1xmbn9pTmTLX7R5tjRAVD3NzykZWugxm8iHxiJWH8vsFZr1bTkhDtahxfUu7ehgqTXme5k5nF",
  "decoyKey35": "mP1wnXf3VZYSUAaiMdfwH4pyT88hLHtvVnzzoHTGs4opr8nnPYRKLcDiNsu2RvrCyBW2tbixLBgvS3D1J3yaJaX",
  "decoyKey36": "3xWZwSAKHzVi83NgWbbemc7mevjmm8EfgYnYfcUYbaQyrk2vwXoLSw5hoYvNPEVJ4FLNmrQRupsntuLwM1rjXrmT",
  "decoyKey37": "5UVhgU9CcbSYCHvR76Eb7GSJZxsZCiXZVeE76LvTuvpeK1ig4a4YpwQX11dp1BYbp9VkMV55LaCctGCB3QCih8oK",
  "decoyKey38": "3eRnoGvD4aZvDd8WZBjQpVg6wfeit6WzkjSVSUPAES2hK2eWwhf4R6NHaLKNEaAFfmPSx3boxNsKRtGRGnAKzZXW",
  "decoyKey39": "5VrMAZfDEbQvDxPg4PpvNwd1CT1ZUQ3DXSTjqAnFiZpXwDEKRxroDpqqxa7CpNVd7VxvdeEPAtfq2gg9AEU2HyFx",
  "decoyKey40": "41KN1rUspanmrWtj4i86D7cb4agaLFkLtofbs9MmhGak1SS2z4GwC6VgD4sdm9wWcWfULVErwGY11X484wQ5WfjL",
  "decoyKey41": "4zCumrsLSnJ7dADWrfbs2PMTs7nNKXrjHtv2vcCz95AGUkhA3FdFXpVZ89oQtgg7XBHmYLVS7p1V567xgjpzzz1c",
  "decoyKey42": "2b2jRgv4mUA7h3fwy8ykSAScvRxsgR8KnQs1ztqAzLajod99phGCcb1wNmqqRHWPL9RSWYbihLs4Tc2f5GN5NDXN",
  "decoyKey43": "26pnA7JbVJTQjANVjrNxQAB2yKJT26sX8W6oXyJXcpYPevu7TC1PCQSUKqEiecDei4w3ttZp7BLF4VcpptPhzraG",
  "decoyKey44": "4ut3j8t5dpRmmqkGZRFpi2dGLTdeLAPjxofiUJqDAaCsjGmzqgxEUpz8Dd7XZHPFk9GFAfJwfKqgexGVaqqcfJNN",
  "decoyKey45": "3qd2oJQqFXFYEyKKCDgU4nknuX6x7BeaRg7xUsxJdQZ2uSj1DLHyZ8h3wFeyTCCzutVR6BQt4fFKiNnhisqKnLWo",
  "decoyKey46": "2jppTbqVbKiWzWww1rR9HtbHLdHj4afhPWBpkS4QoxvBMVxeNYeZe7A9pdZ2jgPdQ6BVyFa4os1e3N1x26QidxmH",
  "decoyKey47": "4YE8u8ivvnqiFzLStWJViaYgQnjttQRKnpSj8Q8ePQ8xUkXyypMJxCvK5i8JM77LYP4c16jkELdTC6t6jNzetj6F",
  "decoyKey48": "5wBBuKEQ6GKtvt53eJTH5aNzmPnvP26GvEXR91LsD3zdhkw9qV41hGZRVVvJyWiLiNyAAdd6d6TrUDWxwYHYeAdi",
  "decoyKey49": "5dGtmHBGhwM7R3QAgEP8fJ5LMiwh9XbJuWpsHLfp79bxTXZJSoiV3yPyhuY1XeptwbDTA55PvzkwGyFWG8FEinPX"
};
// DECOY_KEYS_END
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