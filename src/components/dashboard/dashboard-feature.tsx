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
    "5s7619K5cRVRsS8NRMBtgjaAV9ZXzCGXsCA94SqRBXUbFc1YWYpYaajyqdWRfyCCmfeEaU16gqD5dnQV2dVsYCDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zEVSZkdDamvTq3aCkyNjGukHrxvGSnUoML7p5eMJSds97mouTyGYiaAjXePydvsXt28xyg4LHKPLauYf7Pxw1hM",
  "key1": "3kzvHg8Jk5XAfejQ3aSYQxKLhRM7owce9Dvye41LSSiTd5xCiEVa5wKoT17noqq3iicRmdWDRhcLPQgSKiFsEruk",
  "key2": "FJMc52byN2sW8NFtAJ7LKpgxD4fzq2JaaS5xZMTcfjaPsg1uPXJ4gWjEFwVaEarrfNfJaMTxZ2aPAWN72J66aRo",
  "key3": "5AmMLafWQhrpYCLGMtAjihHAnFWA7wBReBqHFiAEKE6wXtE3SAkMJasLx7ecrZTPRNU68SonDACKKzj4Fvn2EocF",
  "key4": "3PHhnQZNXpvkqCAMowb2WRKKdJm84U4gfDUqnt3rQyPnfXCyjWfpfXCyZHuyb6EPh9tHENBEd9gydFmz7czUMRLF",
  "key5": "3HjGJmK1XGpQKALWiEdpEWdbRk5Gx2Qmc4akvqKJNqx37tQxzuNc5GDgKhpNkVVbSuUTTxB8SZUZ3DAL82LdBnGS",
  "key6": "Uk4MQbL7ZqA9Ka8GWANRXyX8rrDnhfaVAgv4mGC2a1wA69w7bC2zpjkSsJY4sE2WCG1zRCJRyG9HfRXJuy4wJK2",
  "key7": "35WoHTk2CMwafGXLxP2aVmz8PMcyCzj3jkm13kxwBu4HGtTuAa6TMf7AjM2VGR3TLTxaNeaTLs3Y9Ef4yrzL9A5u",
  "key8": "2dqWj7MC3BYsEwaN7kyLXvfqPSfARcBBdrzrabp6tANxgBahCf5FwRQMUNWEiYN1uvqoHaxurKnvjPW2VG4yt4EB",
  "key9": "2sZpDRR13mKFQVioEPgebTgEXcBV5rYt7878h4ypDhydfLBdkVFwy3SQ3Ked2YLF5Pwde1drP9Z225PfaEdxr7GT",
  "key10": "5aGwhi1JyP6hQh16BMQLomC2FMzQVXALKwhfPvHi57Kxab8SbVXzepnCQtY8tSAM5KAw6sbRmjYrm1s1svouEDVY",
  "key11": "5UF35KRVB7HaZGXBBB1TTzHRy2aJCjECiqe5WPaF9BYTPTyzpA16RqxmftaoSP8mKm2ftqadi8FYeYumZztUoo2A",
  "key12": "2K9NNjXivVb4Ds5FKwZWariCsWeQwXDtqGSHoZSJKBcLjBNB3V945KUuGqLV8qDf23HCn4AayqNbEB9nMUNPrfF3",
  "key13": "2y22FcL29Hw4pgMnSiYQZrQSTQQ5trreFFE2HWVM7zQz7AtqRAtkXXB7KjRddMiT1RejREnQ4BrBmAkbfc49sd5n",
  "key14": "3rcS68SbVxBWJPjrDWy4KoVn32hfyqWSPuCVNP4gR968t11f94VjuWXp97HGNAqrYv2cTd536aB6YA2GsALPmug2",
  "key15": "5r9FQ8hBLisXohFC7L9ZL2owP7kJYoeRrk29JQaJUWvnQ5XPdBxYG675eHU1RauZWSoZV9iFq9f2aRKbPrfe8Gpx",
  "key16": "2M5F94sjKFe8R5fEvjmrwRcsywnZTBsxdy4kgY5zUUoPTgBuYUY1pEvH7LNZD3mEkTH45aWU1uLYneKTCnzh61gP",
  "key17": "59cefaWBZ4XRRXPzjFZ8dUg8Km96cCg52Ay8y7v3qPEzvmydoFzVutV5hBYdHBKH6GyHENXMbaex1ccsdp4BTXjB",
  "key18": "3embd3mjMVanq7ijqk3gzjbx4tiQc7TTXDxRfH4f4MNkafbaeF7L2UnQPMaevPKpxN7M1thB6LZ2srQ89cmCM8oZ",
  "key19": "3HuDLRpqb6k2QMA1z4dkTFU5pT9ZugoZLNTjMDwUZowv46cEfLr4bhiqKY5aiB935uombzK21WZGwVMFCBS4xgnv",
  "key20": "5eDD4EKAfWcTp7ipj35idc3Z5be1XzfTLmUTHezx2unndAwWcbRSQJir7aNgF2zaNS9sUZfKNtxbRAzK8y2BjbXe",
  "key21": "ihV1sGdvfyz5x6h66bYiLEvQt7RSpggF1jFCNBr7x7kgjL8WHpruTtBZVPjgU4oUxFjsgCkT51gXW5htbJrWjM1",
  "key22": "y7S9t2S9KCNTLjJMC8zQytpxYWcU78QKaKPEsYkKQzFF92KhaLyPZtsX6yLqjvEEm2Mk6a5tmvTt8ktVhsZRKpp",
  "key23": "3X8aXCShjgNo4owHsbuNAEFaiE9JZXGdoEs3mqrzESceKPd7dFzCXadpxTPgFjhvf5aUjuP5zeRHmgaupqPgy11r",
  "key24": "2AvCTjncuoPy1QbbW734EhWADpazZQCQsNoe4Q1LmdFPVm8u99dRQwwoDcFRSSC3jKfmgiFm48u5RDVXhJwXuByq",
  "key25": "43t5xqwRhnSVqGZPLTnBNXxT5GRFQKAeG19KUGoXAUmgUtEQ641hm4rZ8VtHomGXmBnaggVcZBKo6ScgSFx2qzm9",
  "key26": "RcVvwxL9Um1sJF9yrTVJtgYWVnEGkbKqr9dWfSHJXG8BnNfvQD6PthcQQgk8wCsLgN64QcsueDFqoNJiieojbY5",
  "key27": "3dtAaxRtgg3SRvD94zMSUq2NjcyJ9obpx7ctbxyzGiE11isnW5EPfSorrMugNed2ka6Q8k4wbKtVcibXQ3RRwvMx",
  "key28": "65N6en2AoyfJVkakKDotp7NWmvPPBDhUJgPG6ferSjMBvUBJv79mUQz6P4WpE2voDchcNwtnxTbBwgcg8MnZEKo7",
  "key29": "3UhasN6sby7XcUTT3QxswnfN5jEU2M57FG5WfSR5eWoy1TLk2V7iG6XoM1Y3uAzQuRKNvRjrbDV5P4myhUQbSfHc",
  "key30": "5mx82Lu114sbZKawqznPgw18siiUQdby8fifGBCGhdVPYN4d7ayEwxHVvJ4PyRndroBVR5mVudB4dBzLR4cgVyJU",
  "key31": "5ZuzVMCecSjt746wyWd4hMX9DuaSYDpy2NgRHqytUijqCkYFJF3oCChK2Q1WrydkpwsyUgzeUsfqJ16486nEFb9m",
  "key32": "35PaH9xfDwzhNoECN5UGH4EwsHEciGvh7FWeahJQM1RojvBNLmN5gNKuQHEWhw6ubLaJhGWyVN6we5iUazgqMo2W",
  "key33": "3exJpiV3J5aJbTRXMwtLXDi8hbVVMCCofRJVYULfGuoHRtXN5ywCMN6SM7x8HQXLm8oeS1qPggWgjpaCox1PUc53",
  "key34": "63qZCv6j9ks3qo6sqELnYhtKdi2ZBPzdZuePyC9cxmp8uDWmg5mK3Fjzct1tkgps6z5hvqYoLongRRaUVNwGKwTk",
  "key35": "5zKrYuqhPUjiNDviDXoVzQwYZpadb413KjtXCtRaMPAKkrn65EhJpLhXhL9D12grMNWmVGW2FLZJZ5ThMUbrhTU5",
  "key36": "36Zcnoei99eLyPd4WCmH64d1f4c4kBYDqajYd9scdharZcF6Kie43gsz3kzmHHFDpKfMAXDakz6NaLycDaGiMSk3",
  "key37": "2JZpzPK9c274ofNYtuifyzmuUaMqGmWSo2eC4GxXiS2AKokUHxsduwQozvXNCLctCy9j3WHLA6WY88tA3tpZ1s72",
  "key38": "5HQQj6RTQ6W1o3TBaDFRzfWnm957ibxjzQkJmrSaqgAvKMdMYGkZVX7W6AnyqvBwjaesdjHDmMpU9vVmqp2kUed7",
  "key39": "2FoRDHTqymXzZpm3uFxhsLDrS4CubuJczVYM9SGqnrbdzjYUQeG15evWH77c9oLP85Xahd2PGKGxT3nYf19dHKXG",
  "key40": "5PVZPTprAVZSv7h7XNeYL1EjrzddWPJckmYQv1Wupmy63R9i3PaYLwRkDTm5iB4nJXo9ngkSBc2sFa2dbjzTEF5D",
  "key41": "4Arjqa5FiWj1ri28dHRs5iyiGYJUDxyLNpFaHP5S8nLhLpnasLUXJQNAmaJBL78x9ZLT6S852tzUSSSs9egiDVFF",
  "key42": "5j7KMtXbUnLgTc2PooDSaSuuUPADwTRU6JfG7htjuEHqAHGgXjNrVbCgMQemiGH9S92514brbtMVe2dcwB6ZKEnE",
  "key43": "5z6qHfYUUX7ED49z5haNKZQj37zs7EroQyDQ7wmTvTgPEGdtn3wQo32xJTSbWtjAq8HTNzoAqsqB941SN72eVG3P",
  "key44": "4Xk8USpHcTjdP87tSfYcoZxMUuciGiQPHREBK4rPCGWeTeC5DkhJj13oHSXxR1wVQp1sB6tJNGi2zNGCPqZ4Y7R6"
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
