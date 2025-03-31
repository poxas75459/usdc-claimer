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
    "43U1kN27LNnMvGmwMoS1tWzCrb2hi3dgi5tSKccQvyNaovLosuyj2Y6au4NgQupiDiLM7ENpMssHttNsw6wpAUwg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61kJzLBgLEjyoP3hjYFXBRDUCM8EJjxeqN999pmh8y5jeye17hjoLhS5itaB8NYgnKwGbLwP9JnuW6pphXZLyuoQ",
  "key1": "hojrfALWcBdd9T44oLTsJrCqMAZA9BdV42ig76TyZ2gsgUpMUZy52vdZyW9aSn81h1f94PTcYgmMyL3kJrW9v8L",
  "key2": "SBuHujYYhgqs7oSXe4n6AeRdzxvTj4zS15jPxKjC7sQsmVZ3676o2H7SgrUCzdV3M8uGccLGJCBot9uLnMYpJ8d",
  "key3": "44oeJibeP44KQeTgHf2gsMBV67KDYXr1NhNw6yq5Sfg32ceuxFnB7KpwmUu87BTDduQHzdwBWLKHPxzaEY4HzPHJ",
  "key4": "4xdDgwxrMWLd2dRmCYNt1oEFj87i1yyAWbz217sXkh5PVmQPVeFyXanuRJu9iRC6NAjbcZm8Rg3ix8NRDQ7gtrG7",
  "key5": "3zG2ZrQfwqxpAiMHr53nyyUDTCJniqMvFs2p6ZdrrV82pY5tK4t5B5UnXaV34tozrDM2Nj6PbiBM99DioBLyb6Pp",
  "key6": "3KnF4wGaJEBy1nySBUx9VYjpFAAXQqADbU1MzQBWeePj3oDMQ8wKSEZc2pLDZopc2uyeH7Qr6jwKw2E4YZ8j7QLy",
  "key7": "468DkuS4MAfbhoUvmTZgy3YqwsQKeUcpBQKNjC8kLzMGJfxRQ4tAm2aTrG2jn8RAijgPPT86PUuraMrR1G2SK2Tx",
  "key8": "4Mzy2ugwSTfCMtGBgBvbF4KoTFBeP2UXKTp6da2ESjdTxWGFvAyWm4v5kstcTT3hF39VEgY6Yi5m6hJGzcAnXdrk",
  "key9": "2a1bDEQ7D9wb5Nvv4VL49TDCm4wBd7Pb55PcbKymXt1jtmgVvCNMjTbMUVFJoEXETVbb2NxADUtMkhdsBHwCQCPz",
  "key10": "uZVD9d4xfqhhwMGNaZux5bET1Bo5Cr5aeXRfBJYWkMzKpTAAEuDoYR1MaXAf33hTqHCLaghvFtSM7GU22hW65KA",
  "key11": "5G2qovwtf4hZ3WQ3Jo3ddD3X2Fnzum4fvsrFgSPeaxC2ULHPTffwaLXzQZZa9EfFJ2RQqHHDPRUq8DKoTTwXE6Qv",
  "key12": "3EsNzQkdyqMHbibB5phcs6BuF83wTHJ65KqKR9kfbjd56e1mRdc1Wsq6PiwnTRvfHD1EG5f9YX9EnrsH5mzHJ9TU",
  "key13": "3KFZiEFaPbGNa2qYALRFw2BPznbAgZyjRAu5FQ9B4sXHRAkX7NjFqETR1GRGt2p7yPvp4WWJRfnzkYhJyRfA13xh",
  "key14": "5AQNYzmR8cKgzHk6moCSLCs9Z77rYto2v2Hx7AredJjvRHt2ZQL4FqnbNuAj29esKopG7tCfSeyfBEs7LeeCEAf9",
  "key15": "49WzMmAqZjcC19Ge138ibx8bPRiwKz4scGhQMp4RSdHhkuZKUiMJS24cY15sBSL6pUNXQEEPxkrdvmBcPUrfkySS",
  "key16": "A9y6AwboYTwLRrF5JoAN99w4rNEERTHJN4WWiHhCBsF5HjLhU1EBtfrkow7PLAEMWrNu9xn5EZRMw9LrGc4uxTn",
  "key17": "5ZRSNeH9FCUkNPHuFdKJrHhca7BtJFjvSN42k8ZfXWTLvTnmYNJRCRhNyqCSQr525Ufn25qPP6jg7qs4uVzfG97G",
  "key18": "4Ki6fr5CMAEhSKwRtjhfF1BQyAnGu5vg9MS2BEtFEbewpN7vKXusWHPN8jN5eqWcdJ7PVHgxYGVo3oF7xhcjJt3s",
  "key19": "2NFPiHjo7FoUhJuyfsCj8cLwNwGh4v6QH9Nob12cjMTuKG7ZAMAn47h9ewYNco5foBMpBw7UR8FU4CB3HppzwfHS",
  "key20": "4uhySRhaXFhr9mR8eFSphq2UEdBBun2qpBkpeWP3GSzihmWCnh5QXbZ1XjKAcA8VLkRrS5SNrzzxAa9Non94tudP",
  "key21": "PXyc76xtLMG2EDkJofm1ejLxEu4LfghrZJW5MqVTW5AjTV5Fx4BYi1qp3GchZxt64vcosh3Tapxuub8JDGRREKy",
  "key22": "2yp3Nqst2kkdp61vR4Lh6rbSumeyG9Rt1y33bJmdJtuy7hD95baapDQpEWUiFvgPAxNqCBPFaZ9K7xRAdYaEurUT",
  "key23": "4U8qjFrTGKna8jymibthW2YqeTP8vaXVp3Wpk9jgV75bCnrao25HhTrqHtzfNcPs5M9odsE5NrJZvg55NYfi8g82",
  "key24": "5Z2SWMnDuSdgYS5tS7BfUuZp7SsYHMmFoEDdMYz8ZjySZcF2LmjfUPW38HyfJzS215AW9e9cUGzqo3jMchHu3DnP",
  "key25": "4rg59KbX4tfvFt6WuvGmiMmwYdv7PYpcWkdCgjphUvSWx1anyrHgSuRzvDx479VnyDjhY3bJYkNLBCfgvD8jcWFe",
  "key26": "5SaDYw54CrNP2cUnRzhRs8QgXeveAoJoeLGVmk2WtHidqDuieCexSJjWZq4YkHyjHxqtE9anN58wu5iKKp2J4g3Q",
  "key27": "MmqNb99r2ndGrFdi8ESutRLAp54DwQi2sJa6vRoGNtGvYdfZYuazJvwx4kYTW11j5jDdejN4oEDZTJTM6XF9Y94",
  "key28": "3HzA4VeRek8496eLkSEUAat3CzdV5RimL5xSPDRRdh2EXZpYs89F4or2RQ11yaA5oWTAWBV4JhihMBAKgeLW4FZf",
  "key29": "3kmnEzwfeu333xtQw9fEGJfY7kYoWNJ48uQki5d3hjRYTXe1gBReprYGTpqGEWyNMgXxivQ5Yi9SFiKGjGwakFU2",
  "key30": "QwDCdSajPusY4jt2sVMsbmfNmjr9RSzYPyDK6YAFEbsbkSER6fP7y4st1Y56kiE65EKeSnpjDmq58omGgaZykrg",
  "key31": "3H2pWrSs5E5s4nvyUCuRA5WjHyFyNmrDTVWRUn61zYJakVxtkB5jdEHFiR5rKp5nTnDGQQMvwQyv2yuyrhsj33S5",
  "key32": "2f48Bqj3TkN7htW7CRenSxnL1nHYWqBp2JyoA2V7gj2rGbY2W1dDy1YH4SMQA3h9DCm8onGWZUhr3VtejuuJe77h",
  "key33": "qErYHAwqh8geYdBgRPX4DcDhi2H6bcn37rZKeBvDTWEuTa4NztwywuYmLfGsVqhZrvZ1dZc9Vxaxp9roySpsodT",
  "key34": "55GMMZFErMrStifqykw66bDJtT1cDhxMtV7x1WYzSD78qQj78MS8ms1Ut7EP6jpQepAzhSkSu8v7bWre59JCb6xM",
  "key35": "4VEqHVtYutniSbUwLMePreegf6hd8kozSWvR92VMqXHs8kWbCWa2gE1PbHQ262nySLrx5zbE2fyFRPthAFHoMW91",
  "key36": "5su6wTVR9Hv4jC1igXQnqtBLXCGe4wSfiWWFbMddy38DdAT9mgvNkeedwdGi8cTumF2zuE1xtp1SaJuPP3kGuWrW",
  "key37": "4FYT9z2213L3SfbmxfPhqeX5gTZxL4KPRGFprcxqyjF1HvsWGCgdaiBp9birC1FeDTscqNijnJNkC13VpqcoR3qj",
  "key38": "2NhdhWaEYXacvU6NstwmJq3kcLGAbcNR9M8HsSdy6xKeXseXPGJqr7p4Cm57s4w54NzK13WsRs5yhd5VVzMPqW3R",
  "key39": "5enTsNdkBDjqJPkXg4LPPNieHd7Ccr8Nxye6S3FwDdfwyKQKKQMetSCHw4bZvzfTdQmvrqtATeWJgaqczKzxku6A",
  "key40": "FQFqjPxYMzBUxB8zDyY3E9JQVxj3c3pA5DnxtJaZDFSnPWHrMZ5qNtxc5k93W5EksAsd4cTW4XeKeD9JEBUL7mb",
  "key41": "4Do7ZSthp1cssY2eANdf1dHfChUdnqWs1AnKNKbWEAzLoDUXxb5Cgj46r11rCx2QuutXvguhR6nw1ra2seYwWkMa",
  "key42": "3Cvuwtp2dYpUKDF5HJyhXkLPV4vKxYdWmzNkm7CpDRmg8osXYdDL4K8Ba1zLwaQp9rWujx7xxaW4Ht61cxY7LpAx",
  "key43": "5ZR6j6EQNFYUYYrFHETTAWjGpdARH4TRUMw7mmt3xyD41WYhJVnz2oeFaiLA4FTbuoiV69QkxJuTdyQ9njkE2mUt",
  "key44": "3n9wE3FiqNW4spBJNWRhmLyQVWjYgDDV2zJjXcA5oMZLoC6mQaZhQ8vqc21ZY2cPoSsfsWnpDJpbF6LH6vq6Wb4b",
  "key45": "2VhWkxRRUowpn2BCpwMMs9V3KDXgFcNtMMY99bEcyMm1EnKFDVPyjp9Z3myxB7Pst1kRj2qiJbRkFwEWqMx8PQ3Z",
  "key46": "4oxetepSPJRUbpdorrd9Fa74MpGqMbzJPBjnqsgJrqGGawkYVkjhrXi5ibHxmbmeaPDV5PCwnLuvcMGoPsL38ZZR",
  "key47": "um2uTA6wL4AKofHqiThgedUFYrJU2e8PKruScthXDhez2jwRUQ77a8xZiHMvi8knD4L17f6XFyptcDaHsPN4yNF",
  "key48": "2CtAizWfH5ycPEEbt3ZVhNxjfk3ykV6N9uBZdLVFQZJBHCxewbv6PENt8VzVzodpkuCDVJML7JwiTh92f6NKR81w",
  "key49": "4aBY8JtSyCRAi72oGjEqgpUPoWBxSfPDYBfnmGQ4p2oCcAz76jdjmr7Wi4T3i2v6FFGhstHcr8CGgzMCXyLKzPdg"
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
