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
    "3SC5ZM1ip9hmN17R5LnFkBYzwj4f6aWuhveD6GMMHqbYHhPTWM9WMCLfjTbbkwXiedJmpG1xdvwEEKMBAKocBb83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pw5xH4EknCkvKba8TsaDrqrqCD6X4HdKui4hAdSyhmbCNeruHFTn3LrokzZp9MLTej4Y2Fnmzn3Km6CRKnNexhE",
  "key1": "4KoTqx4yXDFZHWwjX3HdETTG3Yx4ic5JRqTrFVtfkzA4rAUgcMAd1jW53r4PzJXiNeWunS4KARfS1LdMWdj6LUnW",
  "key2": "3NMuuHGXnB4vvy4yPUGhYst5FiBw7pvRajZnxT9p9KHzzPUQtr8xCFWHniGrvTwaxCNSh1Nbp3mx9TuvVeuxGCza",
  "key3": "2Q8XxHiruLiKLCxz4ocgTkeEckERhAkXtkmeAhBhePvjJ6Z6ynF7wU2wuDZs6w9fwh1BKEdm4MFq79HCiAgmiACR",
  "key4": "5VcbrYx3TUbKsb6N1TNMR2x8b9WF6hsgtaZdEexcGUpJK7M7EFVzyMgVShtwoR7J4B4vdPhFjRo1haupiANnBcb2",
  "key5": "1La64LKSBG6S22EayUcgzHwEb6Mdv3Am4KLP6L3YJJgWjTwtf43QQLB6HHHi71HTRKcuRtsAoWEeqeqemJgMGzX",
  "key6": "3SXpXuoGCvJa1ncBm5EJYNYHzg6eUZGUDoet2rdCJUBf6Jx7T2tFyRgR1asGAfk2PecAu6uXGjS8vVYUkN1n7cjH",
  "key7": "24r6KboZ9CErRVGXS1tBHWHN7hnUCJvmwTM3ymVqnY5HiaQfeRWNBKmSD6ntXtHHHpNfi8f9dFYP8p3CL7eDtDAR",
  "key8": "5y9jiK8YR9ssuHPmCBCuCW3DYEKgx3oxux13v9wKhsvtwgr2Twgobi1Y9L4pduGpRxjGcLSCD5FndbkREqynDTGc",
  "key9": "5rB4wan8GwV771p1B6nSePuKM8svsTLeBUiHM1EsXnjLYtB7GJyxsu7AMoH8DmKYadcsDynEfd6UsoqXoseLobeP",
  "key10": "CpWh8y2nNAGNbrYsH8zjzZCdyte9Ztf7YeEdsZfaYgnn3dhGpTdCVSk2G5bK1FjwqVeSqkWJv21n6YEAXkuKRzX",
  "key11": "5miC1q9hNQ117pWMRVPSdfW7qDT4fZTZrm8Y6myjUyV9r5kW9Xh8xd4cNsXjD7KHMRERgsgfJbodkANYebjGvCj3",
  "key12": "4PDkfkZxe8RJrxtjiKDKmoSG1M8JKgHMxETqX3SfFfR9xUSyPwrUHsttYgLFck9x9hSZXGwNgRLPgdyDPwkN67uH",
  "key13": "4rc8Lk3fkPc3fQEk48X3FoKQohcuuTPW1jLw4d5w84Xk8bsBgZC8z8gC2kRpkJRSaBzyVnSTCngMK52Zn9avWiDJ",
  "key14": "5yDzmomvFYbxTVqwDxpZyia2D6zQf7bS3QNLWtd12DEaC64PUwhj8TSA4Dj4PidVD8idi584fnd4Kk8giuorzM4Q",
  "key15": "4oSdaPihwrhGDHCT3JoWLM4L1P2P6BKT8SAGnsfwDyQUzfrvsoqDybZU21kreWQ1TvGbswu6MbKM6jmufjtVbJoo",
  "key16": "2J78ST2qXycQ5cyxxBJmZHcWL5VsuSPmh89cKwGmwAzpnZ4Mh3hv2ewAuoBJfnv9G7AfDUxdLHGtMSLQdhCuFNSC",
  "key17": "4FbhrtPF6wu96yg8rjUrBti34FNhUpf4uzSq2M7qzWu7gCfp49ZffCFZhCjEjy7N2nE7zzba69sAWAjbnyXmsDig",
  "key18": "5RLS7GiyVuhzgvmTvAwQV9jLDWEavygqxPRs1TpLwkTSWkHXgXk5RghKTyLQE8TpK33xHSHsnryHjNbN6PxgmCS4",
  "key19": "2dAsdFtfY7A8vXNt4r9LwVguy3fdh7r7dvpjUx3hCW54AdtWBHg8RS35TPhLz6frbgbgKGnKucGy2TzHdoog3HmA",
  "key20": "3QZqUQ7nXPFaHnmzNJrZv2uY5vRo3TgmgVAkcCuXVdp9Dvo1QBJk5SyTwB2p3DPM4BKtG6LJGiNznbBGGE9qFdhY",
  "key21": "4uecUJKrmKJn7KN1D6t5ba8hxrk7Ymq716m2JDryGCvssGE8yzewEAZYyFiJQr6Wv2AiAgNaGg3vGWSTv6E1vh5r",
  "key22": "aUdACujUHLovpuUrKV8o6Gh1Me8P2X9de61emsKav7BMQ7UZv6bwYtg3e3y3z7BjTm3Q4wav89Bw2bFmMHSp49v",
  "key23": "5zYjHw2oE4saZd3jYbJQsfhzstLMdsJGtrri5qh8oT8yjYfTsN51KasFeCKwaMJz72a2aNkSTwfsfzmP6BpD63BP",
  "key24": "3Zp2UXbGMufXxNpVP6RtfvFGnwEnxuGRR5bKqW3tZRM9ZiVgK2zEArcgBiopLiGFDi2ZRfpc2b7zh4NkSQWYTV7E",
  "key25": "2kwYFxtoXhQhtP8Cq7PRh9mDBLuKrC2NEK7Q2eCvbbURWNWVgf9QSA8g9tXsGX3aEPqNGbfrBVyUwzGhtZcYpJWU",
  "key26": "5AhMhNMdP7jbP4BXWwFQboZ7JJ1gtKo5D7aADGhXaU5FUAFTYNbNtsPTHnFEbLdRAk4qgbmurfnvEdEmgexuxqN1",
  "key27": "aiiji3W45wdf9AcES1iLXyn7g1Z2LUbqgMjNzm3xYK9nGQh7xQqKAG4yRoMqJ9WwwVnXDwfr9Rz7Zbkeofg8sAy",
  "key28": "vzQKPv7Xa9cekYrZshpvwqeMTLdrEYVWAURpFCic1EVA4uNcEsmKMbUogGTKgzGk71N2aC94TuSk189Maw6BvJw",
  "key29": "TRjpotgF915x2ZK3xyeTpwZK8b5TWHah3ysAc85m9MQijdWGDkEyVqBtHTa4YATUrHnQ7dZ7nx3isU2FeiX5UNT",
  "key30": "38YpF9jHzA1uqU3jYahbFuDPMa1ZV6Ah21P6YTBSSWh2PYdR14DoKDXwfovNkhnuc6uZ3PSnTHNGq2Fnx5uLYr2x",
  "key31": "4sp9TBNdDy2AdBcSwRyCxd3d5iArFQ8R2tCGUU3v4jjNe1G5v3nmDxaUiyTafsTcZVD4azXo1hKDD8ozooNC5X5A",
  "key32": "axPtDwF3ogLD3prbDJQAeVwLKEcKNiiWCZTKK6AsGHeiZ6LqiBUxnkEeYCC8E3tL9SgqAbdLRfHR5R1DMLFpBej",
  "key33": "4jFUPQaGJfed8gd1CPFdpeHmsUpH9wQziTDWULRqTCeGchoonSLreLBMZQqc2vUQjBLn2zHHXLnxQv9WNTNpjdkb",
  "key34": "yFtM4CEmMELRnd6LYNwxHcJetABCX3DYZZgqcFXbWM766YdAJpaba9Faexi29RoBjcYWgyjEinnqAtikKE941WF",
  "key35": "3Dhtb52shqLeuBGQxM3h5S9RtRKktt3SkeiQgi2DKmZg8YTqApqWdWHV6cXauNbvWuayjeUTMxVuxnD3ET1zvKJx",
  "key36": "QLTjovBudxs8KUmmEJNycUYwBTn9snjCNSDzzFXYn6mGWVJVhneyi1frTb1wYqsSkEjWhvmDHJURm5RapcchS5U",
  "key37": "2uDpj49zFJD1Dfi3AiADXr97yisFrfGbLodB5qLBDqDQdBNJAv4PxPC89xD6MP3XWHivzGWSL4DZaP1XuVuPMZgR"
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
