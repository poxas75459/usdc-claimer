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
    "4hKxtp8HBqxyGxLJNL2v8dC9RbMhhL7ArFBgvZm7YATrWwoWCmPA8sYxgKRi7qkUdyry5HLr6Y1CGJxvsUZrmN9F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nT6rq2nWhEvSDntRMgo3tfft2NFfKXV5NmJoHjcEJCGNLrJWDng1wpCGYHum8kWHY1JXDSvYFNN9QNafxdDjDmp",
  "key1": "rfJKp5PQNVSvstpcrwqnJdsrgDShMWiHA5jXN5yAJ9B7kSuDqPXy5rW2ncUyqSGF5SDWPYKzm2graGoDmXHLCeC",
  "key2": "2TG4W7pqQ5cCMDwKbcapkA5j94gghf6qzxEEH3AjnaoCsQboPviTbD4HQCXpoZDtU8okwuhu9b1hqFa2HEk7REPA",
  "key3": "5ejX3XDjmphZPESiRUcEmQnF13a2RQKNRxDHYXgqVKdT1PvK1tP8A2LB4b1gcidZMYZR7Dc8S5UF8CGaX2sCxMtH",
  "key4": "2i8Mp58mj4khxyHa8XTGYCXnoaEe5UdQnask7oZBiQZBNBzSno1Nn55ohzGb6iSPKLV4rmXhZr2kGH6vCd1HBXkL",
  "key5": "8LpFRuRL3XR4BQ5WAoJdPdK6u9eUzzeyvxTktVZg4BYSzHCVT7YBkb7UbWEADjXNXkn5P7Lgbpj1HhWuQ5CKPbj",
  "key6": "5ZvzAC2BkyRuVrjSZV8noGx97Aph7PW6fhAWhFW3BBiNuom5CCcypSmL1Z1HSojs9dPbNfkbXqMAHknMixgtWpxr",
  "key7": "vvgiXAoGmGWUno5QpqZigANNhPBmqzrWhhk3Zm1aHuqvPphWii9Qt3LRMn2DquxhALmBphG2puReR5wUpRkBq9N",
  "key8": "o8d34UN43dQxRuc8TutLsn17BD8C72aZuM9e4qb2yKUVdGWetfwtkUJGW3Qgm85qn6vM8pc1d1ywbsd6BGwjvSx",
  "key9": "5xKa3tP4DhxR87uXrVX28NJh1bJCYExZSbQcHDiTGMP5r7S5YpHfoCSRP31rfHa426MeBPRENiCQ8kmZryCTubsJ",
  "key10": "2aF3LdcyzyrMCLq2TASMTaE6RoggTRxhvix2Apr6wkWBJXbVQmAyhoHqGvMdueR5FeUmeiJa9NDB4ax2hfe3JKQe",
  "key11": "62Q4XL3YiAt6DV16zX5PGfWcsZxG2WEg8Z81GyNfWn129Cp4qvbsBUvXAztbzyzFY1w1AKeL57aQekGigebbnS9f",
  "key12": "51USCRKLAFpatXwL4m17HPjAWJEQL6Qa461RaYqpKcVrvigjVZd3YoU19EQ8ufmbymhQYYzWZEXVU6FwK4otzzog",
  "key13": "52b7eTvKuDtPBEzvmwjwiyTDSrYkr9RrtTufGxTyryp1eAC5sct3oMfStUUZHbCcNg15dYgykEFSWeYXNjp6yMhy",
  "key14": "gr9Ab4eV9Eh5NW1UMgi6b3RCL7jxDE3No9aFCMZYUjXcYFDnbEkRj5tmbwSP78zQrmq19HbfaQ7t9U24M92T8eV",
  "key15": "471JF1ZbLPdQkDBWahC5jCMUnYxLDJkHu71kqw6GkcHtiHux8LHW4HTDajpqBcctY7CJiDf6cFedsxvg2vPbv6WL",
  "key16": "3xiJ8rfSnePTE13W72ePHpabAbPHdMhgW6tXmN9zxbh8G37uKw2obNypM8tqGfKzeJpE1onxhpQDSzqfZGsjQUBJ",
  "key17": "5j3MF9QJaNhtvufL1qoFW4Tyn91aburY9sZk4JcdVsArsuLwuen7t26TwgeH74J7qdeJUaTXYMB13tPy9qZv3ij9",
  "key18": "5zjWc2Z2WG4pmi6faoN9x1CDHggVchdHtPB9HoyoCyL12CTSd3CsNhaknvw1bisHwFRqD4vhegz5Jh9ja7tjxTxx",
  "key19": "1i534CpzmDpF94tSyaDDq3pBiY91QZHWyQ8arUMsHCbzpUH2kf6cztKL2s7M2VCkQKy8vSHHrSKL1s1sVjdwFEF",
  "key20": "4ETWC1udnTvbw4v2fBofnsMhfKAxAEbgxYjkTbQKywY9SB5sbK7iJH1E2Z52AVVkGwExYRM8nP6csaZw7e1aNfHG",
  "key21": "3otGt25Zj7KNW2oSaXYzhbMEzF94K8LwDR6rRFsrvEYrpic2ZWogxfeczXBatKM2zWX7ncWj5P9DrWhZpcDCdCix",
  "key22": "Qrt5vy6RaWFWXSv8DFxkFprvNhUfCAw5Wp4zkSdM6waza75w5NbttD3E6ZHVtaAkqgLvHC2AtC3tzC64XaMs7dg",
  "key23": "2QVuS7WmoUpGK3mNFLhZFGVxPb8B9qdgWJH7W4FXYamnRaLWWDxLX8pg5RnV9dFLfixSSRLaCm1oChjrhggrBvAr",
  "key24": "5iEYRrDtLWFtarGyu7Q4xtHV3c9cs7LsGWacTpHcYuLuyNMN5HNcz7pwJeyuWsTNWpo6e6ojsKBEQERobh92Hfp5",
  "key25": "2qeQw9GH149jmvtwv1oa9krAZmSdgWC1RbHjoUTHdr9f8xUwBiZmRqwqsW9APAKkZnN7CEspnmjrX1rL4z29wVnF",
  "key26": "3q2GhNAMc29XmKriT1VstrvV3kFtPpEHU8fv5B3PSEk3kNnSrkSsNvkeKwkYkPFXTD1ohK22zB9HGN59Q9Anpdhe",
  "key27": "3NV427TMdaQLekY6Ba6GQmfbrXR8TRf9dq91QuLzfbx2GfrWk8gcntc2SHEyHkvUbjSkZehVmo7aH2G76RNAvF4x",
  "key28": "4V1hfVFqQKos56N7LbWi81bKTCtkNBJpSrRZ5in7qnQ68yC9RmDLFRCcghd8rArUb6NkBKvteLkpJgpB1sc8s53x",
  "key29": "3KDT5YiQvsw7YTFW2YU2ozgUWqnPbBNuziZpnLjcZ1HCQiK7S95FoN2H3m7HoFJ9XbfvY4rRNjQfPQBPiQvdWb6s",
  "key30": "5CyECpNPPTpaE2C4581UximCfssTobYXwy4kS6nEjyHvmmeS19L134VyL5GUqfYoipQCCNxua25od2232ZPjVqE8",
  "key31": "4bHWhWHDsD7xDzRkXn692VCWmjja7fEJsbEMmkimP5fttjnsNW3Ht6uHa7mLaBzZg5ef5qYYpxr587jyb9wBe2BH",
  "key32": "4HW7p2ugEHFotKB3hdDr4uX79HgZjNMYY5Gu1u7FAi3nTGGVFneCzAAkwET96HqEPCHAffs84HGC1pU3KcSADLy7",
  "key33": "cko8mqd7vcqhPx6kQzDhajZN7rV1ScwAXhLC47gFg8wDawSeAjDy33nfXVrctNzTpzJAXMdmmdtr1eBC3o9Fzzh",
  "key34": "3tQeCK7sGb1t7gdudtKRRuXmr875uTAeKtAzkgaeQNFnKhD1ksZ6pPZ6QMBmWDjGceuFiaZjLbMKbPnBHPugf5ZJ",
  "key35": "3sKrbT9yDzBqb2PfJjSCgEzfbKuhWVWtcHNh13smzbRgzbV3q6kfoWKa4yyww1NRB3NwQKc9qU9agkNE8n1zdeb3",
  "key36": "2CdXsnx9R1fC6KCt7XD27XmNvnLcw78QWwxRGKTS1G1mdgDM2kLQJLwdqfRXawks9L6w7yDZ59odZQkGB8AZYgx8",
  "key37": "3fjHiBwKcDc7ypwwgu9cUawsBDvgWSXesDKoGf8wvDfPsokNtyvigvDgHVDE9BCW9kq6EH1FtSp9xNQM1JnyLFvM",
  "key38": "qhWkfPS4g2gNF8i2ZsjAfNPvBayGu9giiH8WjR8eVZyXuFEJbe9gjjtETeKMN7EQZYEgqzamabQ3YfaUJsBwa6u",
  "key39": "23jMkzbk1zwt6P7eja48ZT3YcE3XvybSiR9cYGUuSp1XMx3oF4XHQUDNg1KK7818xFHutHdEYtxhFaarsEyMqdAB",
  "key40": "pSta2bwVXx688CiALVt8kbYUWd1atNxs28LHqwMg45ckiWD1i6vuJkPsj6vrpjFdNVq3FzeN6yKWXexdAq9kG1N",
  "key41": "5t3iRnDyptpmoKx1GvNirDGaD33SbLGdUyxSteKBSoFouf9ihw6FuPUffS5HypyrqqQii79pBUXp6gUYWwi6okgN",
  "key42": "Gi42EMA4ZDLLBCwYpTcVju5Tpo4zXm4DiWpoRWyZd9kmoDnaqhb17bpAzLsdcXs4VfLmQ427D9RbTqivNpy3fcW",
  "key43": "5BmYcn34YwJsevmF6Cq18x19QZfSxD8ea5Uui2wm5BcFoEzfGMZQ9aJUq7p4iRB5tqE6U2A7WnubDem764XrH7d6",
  "key44": "RCSUddUzgbdX9GgoCuWZshTFHfQk85AbY78AmrVEpPrU19tFbDMU7GAgr3W1yJDhmeWjzwiqnL9kUqsqQjFz72L",
  "key45": "5k1A76fQSMw6btJTbHL77nikxRSRqRwX8S92rA6hZBJWmnDxxiu84x2uLeF9KNmjMA9ydQZsqBHSB18aDmPpJWRK"
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
