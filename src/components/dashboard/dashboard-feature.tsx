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
    "4k2Zz6tMU8sFWYhHo4RQjHervaS1pRwutKKrmAgWuvVuExQEYDhM48WFmAAReFEjBtSnK5QS4DoL2NXL7Yd5xbGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49E11muz6jWAEndDTBZYvvkRarNTjHqTo7YB3EyQ21syH7TpNJ5C5JHhUnnkmNqCG6d1K2FjCMLtFrAiMQujoRra",
  "key1": "ARsdJQR2j9FxBexcgNGbv187PsyqCiPZfFSEbPtiWBWuUfXMHaBJQUqE3STdbXiSAJbvmG7h1s5chWXGTsut2JL",
  "key2": "53dUZkCJ1zzVNzSd4BywiCmpDTmsxf5yyrxpWPay68y7ehzPBheDbAgK6zVHD2LTwzRFJibFhzhVMTXmZFBgdzr7",
  "key3": "29wf6aUtHw6Nxzr2phuL1PZUb9QC8sVn7AHQJV6uR8R93HPYSgEsSTr6f5r5vUcEZb2c14jUFLEF6hZeFLHD4Epn",
  "key4": "4BDyB6fRoRvUUK8SYQd5LkcyLD3dXC5SvN8PLAUyfHFFx5525i1Tfb1WsSA7oAqFqbQkBUXBqH95321xkr251FfR",
  "key5": "k8ek4d6H2pQMC6jKbb56VzFRgYT7Nz4K7hx9rBiw9xtNo22ZeXq3dtzrRL445258sF4qVRbb1uLSVNWSdKPP942",
  "key6": "34mCtU3S25C8bTiDDtWKyYJfmsgjydG3NMwaTYsqspqduQq2wd4kPh8dS46Svrg6sArfvGvGMQ8jgJseR77vxdai",
  "key7": "236Yz6XbBaTM5jyTTMkb3WwNd7axRj3APbwyrJiZvJpHxuL3jEjUPfPZgcB9VJVfu1qx2yQBxKsB3NpUK1XA4LZy",
  "key8": "o2Tm4pbjNgxE8CQoxY3kTEKxDaw9yMuN3GaEzMLrD7Vd319DK9AbmhMWUxQt1bzTo6gmHgD7cHErcDnb76Vi5dp",
  "key9": "2gCPAWKL7ut8Trnu9c2nRDw2Q25Fm1vaEmjVED8eKsVDxTzwTS6FGk7gC7sJHxtt3ALKgynoz4scvo7iSF26pg6L",
  "key10": "4ZFhnvmgFtjvFn8ae71fiFsyh83dWrKw6oY61qRamn81AKoNFeaFqHZrBKe7MH6oh51VqfTcnCxRYithRYkAVZkL",
  "key11": "3oX3KQXf9CfSgG9zrYEDVMmZf1fibT8NnsXhHYyywXZmN7jqDQqHb1AVZcX7DGKRFYb2iNo2xt6CTzz5Hy9VLwA8",
  "key12": "4Mj7BH1qbAv95gAMYpbSbnQqHwFGS2FrV5TyTZuuUWLGtC2XQD1S752kCqeE8TsU5QfuZkyQLphNyn6HzRTMDmvV",
  "key13": "4DvYz51bj8Tfx1MVXJ2KjcbcofigwUsQocLAeLpMcmicS3HEDe3wtKyZKjhtYds2LYrpgpZUUxnwF2m8Zuj6y1Sj",
  "key14": "f2ng3gejA2MRWCCjWu7AK7zNcbKhqsXTSJUjPSLNEUnWvWGtYr1o21Y9UxW87tXnVEZjcYsf3bVWjU5bYWnQ2Ma",
  "key15": "5fDvideRCNseY3YnPEwvJQvPAqygir6YQBFqmjxmfcfHjm9uDBCiegWT6sZXZcMDanotaigRETr5FXkDLAZxTALs",
  "key16": "3WsA8bpCJTtLfqMAWTpkBWaRQzXRQu1o4iheETmfudpnijKpvHXUX67Cx4NNmPCmFf9UwWnPvrtoYmf9UdKK8roR",
  "key17": "3wMq6iL6Se6xiUWUSQr4v4YbD3qbuuh6GR13ZoMJXKq8hsLxKueeCXdMViKoF1PnCWriAii2MBA7UfKYunzSrowP",
  "key18": "5e6jmjc2uAhSpZe4Jng6WcUUG161tgeT41JxpTPsiCdjab3sCgM94nt6ctvZN37vfWu7oC3n6iTTuq9aRVAGmRKd",
  "key19": "3yxG4FkZaQYukWGWqCQUveFrVwYe8CSRcZkPo4G8adEtU19ZZqBqi865yQSjM5EApyU15S55Yeg8epXRexi9bunf",
  "key20": "oZ5XoPLSPuWGeS4WeNz8CcCAMHQPznmUakxTGAsy1Pw1np4WuP1VuXf4qKeWp2AfXAAo4axrWYRBNLy3Wp7BZVF",
  "key21": "NY6jPN7ofS2KCwieuBarqLGcv9k5jVZhdKAdDv94stYWtoaeSwux48UANXLLkGRPdf59yXbvq2GJEt2VNLhsn6K",
  "key22": "2AYeEpt5K14MMfQQ675fcTB8AVjpY3RUsaGMNJpjRxd9APF2GKuEGmDDH5CVfwCnoDkzQnMMiKiEKsN1kJHQzL1i",
  "key23": "45xgvkULzTQR2ut37VjPWxNdGzg8L1ChXGVnQMbDAKkqUkk1GJYJdPcRn8HuKpvUds7eMCUxM6u115HKhDiJFWzq",
  "key24": "5EorxygYmhKXBHsPYtiZMwpLAhuH1hZASztjn6gEqLpwP16LPBrEyRvXDvUM3832BWmnAqSPSpWYPs375Vi8htLs",
  "key25": "61K1g8Zrcgu1jhhyZ9nKmxHC15MkpKDmfZgKwTmgbqjvDSe4HnTcvMb6BW5oJMC6DqoXMtMFzYZo3jUyW16UNJSh",
  "key26": "fDkmmLRVtr9Ew7N7D3JGFyh5mkwmZEkYjLLKSM6ttPYg2eX8oSZJAnGBRjYmGScBwaDhhLD2zC45mXn4JDic1L9",
  "key27": "3SQvQSF7Hw8ZubFbh2W15cEPJXoqUQbQ8jMT1a1UEKNeBAWvzgTyMcyZSYxVgzByCg4ZU8MtgEWmGwSqqZLEhEyn",
  "key28": "3fadBiGQJfF8tHEABWWw9xBnb9XoXeGjYNSuyW6udrVGGAJD3ecD7TquSsQysmYiLBfmZjwkCuVVNHmtMQCnRs2Q",
  "key29": "5pTJarJeN28dZeMzdLTS15EqBj9ebiAyVcgcw5QsnbkxxB9ujkbm4hcdsYu1kcWq62DauWdY7afmVP6f2fudG13v",
  "key30": "4Jex4TG2fqeo67389g5HCModQiULRuacsJw84fGuFaj3ALRfyGcTroVsZ7G4mSutvRu3tAt53uDeKGiGnnGdqgv2",
  "key31": "5qFpfgeE2rfYeiEoya5iqT2gzmkAcZ9avqyf8M7iTT2XFJRA977LXgz5XB1XkeJ1GBSd5Wdm7jNqstFZeNYzRd4t",
  "key32": "38bSCXx1yHGnSih1yg9iEm1G2sqJTRpVtJnH1XWGqy3Vm3DmWZ4vdtRXH6zUchLLyQE1wTLUMQxnuDatmvNVS3qy",
  "key33": "2hiGBaZgdpzwUyyghtFhZEzNFRu1jfYs2nhwdJkVaaLxURAPwu1K74YFd8zcSJNnkZ51eeyN9geUrdqG2iQbr3Kk",
  "key34": "4nCL9jJ4qn6npcJ5LmyG3FLM3DAa1GbMvu8Ju2BaEsSqgbJy7eWmPHVXPTs9unURKkUEsJeZHBGDhxx3Cmp4srj3",
  "key35": "58Nq236Jw8Xpo1KqGkqfZne3jPfUp9gv2Fixz2gGsmsJk3fjevgwBeEBWYY5Hk7AH9AaeyG564KKT6VyBLPQjYqr"
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
