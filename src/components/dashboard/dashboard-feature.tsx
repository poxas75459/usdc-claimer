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
    "ySr7TZQbXHX3sGR4tTKQ8hQkwMF2sRSuPwK3EoE3DYkeM8AhQjwbhjjHJAfCpYkBQjc4LCGd2FwGTtyUhRAKx1r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BEFiH89WzGEs7VR65eVEPoKDpF5nrKuuRckSRgijN7wkf6QQh3txHfSSqiVQddkVdLNBdsi7Kzg61FzTH4LsFxh",
  "key1": "5VLjPYvXNa7LksyVsEE1doSAL8pppZpHZvw7apW8PAyEcXQ8PwWKQxyAwoc3bRZkGTsB47RFnaCUmE4ARupTe6hv",
  "key2": "5gFoTea4SCnvEZ5rgN7vV3JWQ9hK6c1PHKW5XiNMvwvqgMPeQKPmLRtn8HaN6hDv7i6PBZWdZdVZKMKVsmW6tVT5",
  "key3": "YNYSyLmaPygH9rGUDqU4npmWZUX3GLYom9YjC3GT6W4cW8vUyAqENYmC55uTUGUAiDK9QLSVMm5qzMRfRYT4Ygq",
  "key4": "3zibhJT4R429U6HDtX88vjYAtPaPpKzyT1wL1rL5rVg2m67atJAh3wSKV2KAUwzvbaeZ5qtpxjkRUpsDRZocaPCQ",
  "key5": "3Wfrmvy4ncP3Z38GTuaFSBhw2P4jbcVJBJrLZggQ22YUzG3hHnZhg37wwZGa9t3MAzEDcvBQteZyv2ftA6LvrXEA",
  "key6": "66ihFwRbKnjVNYotgkEMET2DmnfDhdHK1hPpATebvn62hFTQ86hjKYD9dyATCj7D47n4Fk38B2VwBzFQk8XzhPBr",
  "key7": "2KrDAqRVU3Td9tTBavLNyrJve7eQCHbLuiBPdmwDvmku5oqYt2bdVa27GmPStkwAU4TUy91bHnyz5RQA34CQPcNc",
  "key8": "2qwZS24cr1cBRmh38Anbj9ofcoCu7AgQvKgLiqZYZxZgsuz8Wwmuo1NakUphCKqTeagFHF8YdShhKQCxbT9cusSM",
  "key9": "4cFWMqEzQTn5DhVQk5aG4VZAfPGGeF2dx4tr8dwPdSwvZrrcRVpvTwjFeDRdcKYzmJMECNm5uBbAD8tk8wR8sJVJ",
  "key10": "mSNuCYeYXTdN4tjyWJgYJ6jtLbNSkfK2uWbkuqF9G66bZNVQxoNcUi5XEhKjbVxYK5D2FXDtwbvd5hd35WyoE5q",
  "key11": "3vchsVidtBbr32DGwenoSE6HubS5UdxgHfeDDZuEYB8P9Dg7QwXEKLXeWKt4NVApwr7S71n3GFVPW9EbUy97mN1A",
  "key12": "3cTY844iQ2bfXN81a9kfdiAUqUwMkYRShKqoM9jfG5K2KeUhb6WjEj1qHAiUXU54MPRKJ445QtfEdwPBXKBGYgNc",
  "key13": "59hoiQBmeAixGv1idUa4AtcpsGKmjE7stUxMoVosif21XYTrG2GT1BwFVApq1LVd1cvD5pNLN2S2qkew9v8dRkHT",
  "key14": "3KJ51SASindhUuoRHRLrKorxy5x3VWbdTAbKTXBBY9FZtcoSUjEt4oMuHUjvgUUroSsfsykdKBSV9nBAsiPMDUVm",
  "key15": "3vWfeHLVFuF7qK3s6BYUHZdKHHBLqPAXpaS22u5tjDmxXteEoLDcSGYDH59SXnFjPUzkwQGzxL2QcvtuurDqh3AX",
  "key16": "2SPhwPipka93xFStHN5T3eTv3KP41UeNkmKXRuViKYJQNeSo1Ge1cKVU2Vp8rnp69MRHqHTnSeRfREgAoJHNjr76",
  "key17": "3TeBiGafe33nCLzRaoWU5ktg3rN3PCGfkUvPYmshVKaEzQVg1DmbfVALXLqzfcQDFR2ptPH3mAWuv4ZkZ2UV3b9y",
  "key18": "2k4jZrXFfKcxNRCcpk7mjaEtexHh8XDzfMJuq23eCsNm1iuiTVHk4P95ix4r89tErAJebLuRSXChuHamxR4FMkt5",
  "key19": "5ryTWh7RqYw7aBx5i9CbtJ2i8C9rZAe3P2XpG3YW2XTqnLFSLL97LFfzxiLrc4UdYoAb3WwdNX2sftS4QViVYBjk",
  "key20": "4Dg1LuCAV7kWXUUpoTGU742uWVWtKLRYGPKFBTgfSFyt1fAi6PvwqYxEgRStPJzc8Nvx6vXcg7UJ7zDwqutP69hV",
  "key21": "LdwGD5ipyQW3Y5HQb7WaNVcPfucZozzRFCu3UTzZxNbpgTXrqxjmoq495WwWNw4JpQAxhkf8GwryEJR51Ha4bGk",
  "key22": "3i9sT4j16fdA29fc5nndrAZpeYxwNF33ADAnzxC7J1deTXxRWH9KUByTXmsmeR8cisZb3PPM6NyE6FaFZTTgV8yc",
  "key23": "46nsxcHjbyFG7b5WyH8QACPUYJNe4Fcj4qyurLpSbacrNazd9DPokPEP8ngGAHordHQgUNzqQjw5eHB7AM64EBRR",
  "key24": "67XAfEGNSMk7mwFBeezbWzB7AdAFhr8LtoCktUGXMAumo3oSWwo6ZFD9fV7CZ4fWZuYKZbtvEQpJMVFo3bmALULP",
  "key25": "531uk78i17gZY9fDgEWQ2yuq8RoaWhYsNBWMagrfNayWQmajXVbt3d8wgmmEPhkJEiv9QM6CW4KiTHX7yDHSL3HM",
  "key26": "KuAAQ79qxmdG8EwKTbavJ9gYZgyBKfxHstKKy77AW6cB5bxV4a9kQTkobnSYZF5J8tw7XQTZ2vtmyCPvCXEtHbQ",
  "key27": "3C2nxiU6qYNv6YbXqXngcfTcv23nMKkY8YHtHk49V71HP1NVkEmzvsdmUzpyDn34v2vQ5wcvLBYs1u7QUWhjpNpB",
  "key28": "2sYegY1E5TVcLFyrP5YMAbQ62zgSj3eba2CWqUzHoRKY2CJfNutMgEw4XkmMhGsQXcSfdB7Ak44NqQx6EoG1wKzb",
  "key29": "4gKLq4JsCVwsbnB3WJwN9iTHYvUyxq4dSEjYmD93qCvv6uLhL4nd6d27nnacf1hFx5h3f5fs68SjDiXxYdYo9ZTh",
  "key30": "3y3siUPRXu3W1a9o3iQkwqESd4DFTQXqfFx4rTDLJDBLcX4bmNvabMbSqPC68YnwpX3MzDx44JNRRo7KfjgqrMED",
  "key31": "41TaSXqDBoQZJxBP6DwpQWtu5Qg9bXRtabbgpQQc939JEbq5hr5vKbuLkUwUp9UgN8hjDjWD2276pFZEdd7qJANr",
  "key32": "3FKSiGUj3GvbDQriXmi8dyFnTb75FncADKzRCnSMcwHgq8HwrUAbitrGsHFUbU5GoiiPDQin1awamafPWYnFKwYi",
  "key33": "4GM586Pb4JYfwbQjf35RS7D43MJ8X8QtQw2adY3XwTTPnWaz4jWBcSNSHm4tGdUjY5myvFSsbcyaU3vBQG8NuHQg"
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
