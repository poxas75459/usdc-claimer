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
    "4wyF9qXCnwn6uen6HPh5P8axwKk7NpZwuUT8be4sSYCUDRB4JduwtRczDkc7XVi7Z1RYEejzG8TAws5DorUGagPM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D82dyXnTSibUQUw9MFe5pnkwS7hqhQiFNTKX1BaVovWFBg1SsT1fZrCsiNjptPA1w4BjMtNaBpm4zbaP3rnYjYz",
  "key1": "sAxk62bDRN33P6Tq5vie3GMvTcbKL5eaqq7i6tkLymiPJvPgfWeLgzei3HiooNFVgViGRPxeWWPErVMkW5z5ZBL",
  "key2": "2MaCRFBY27ihkoQs6689DqKbp69kdqiLbAk22cYkkJsxnpkEnJVjuq9udprqgkrU5q6pBqSVjsStgJvJ16ZY4TqY",
  "key3": "3jA8gk4xvgfQauc7svo6t3hLm5GjabX8CJoegMUcH2nCsWUDF5uFdmequAfv4cv77vJFoTHVGHv9bCFcdbHQh7x6",
  "key4": "3jSN1uy3kNrdayMfKgZ4U6RaqC91q2BsyD3zzq1L9kTDh8ffYTw21NVandBbop4vmnjK4i6pbiAZFYWhRQKmArpj",
  "key5": "P3go2AJpA4e1H75A2d2FMDxFoRGzG7Gtde21CxA256maZtS7P5h9j2WZsysHw2Rmex8kC7AqGyR4QjyfV1GPrVz",
  "key6": "449k3FCr6SrL7XFSaxBkWghuQj6MXNiMfBL1MNWmbQ1ifKiHyHukchTe2c9H3uRembCyiMgQCQkd6WxR55APd4Ph",
  "key7": "V6jMrZ99HphuN9zCABQT2ipv5nND9VMgRsfPKci4GzWGLyFgmB5yCwy1a7MV62rwvmuUNVCqN5YqkFUojBRif7h",
  "key8": "538zS4oS1PS8kwpFC2WeL2rx5heSsELArhUCe7Qp1b5W3vMNawqCa3ozoupLwPE6yX3nFu8BJ4RU9ZLc7gnbELyW",
  "key9": "5hD4JT1nPdp25qtZhxodHdJXVqYo2C6nJ7ZAsJHrsdHnyamPhSPUDbxfUsAS5mYCi93q686Mej8UwMmHXV1bAwxr",
  "key10": "2pdrLiP94eYgYwotBo8zXXtMSkprCrTXnPBa2SWWZVfGH5yYRCVX6dkiC9r7N6QTy7JArWhNH1E2nnA8w7jRYszC",
  "key11": "4t9aE5Seby14YvdGd9s5Q8GNYZkRGuGnjmzbUbQNyEk5yeyVfpL36mfkaoVeFw7o8kJxYbyhbJHW1TsGt5KQUMWz",
  "key12": "4e9ddSEqEpS5Lbih3uQtEsaPq5Q6jqmsJ2dfc1yANVF1keDsXMwVwPGsHvALa3ZZrdprLttSccyVaRTj8Jin1Hox",
  "key13": "ixHxa6EacptEPLbTvq4JxbHVtcZaH6mMPqjXhFoKz2q8ohJ3e1kDQeQP686w1rhQJ9a3rMkwZgWN4Sbt7ACm6f3",
  "key14": "5nk1oN11P3w1WQY7GcaAE4JAhaevVaV9gUBvBXF8nqNF1DjMTaigf4zh1ACrTgG8E6mg1mcaRQVZf9HZUnM2cZiN",
  "key15": "t2fNLZi34h3sdsKkRpkoQKgsLi6obPPWVguauNd87dRa6oa8p8XHS1roH4yP1eqJbVGEzjTdJd3G4kfZHDt81SH",
  "key16": "51JXpKhAjc9txbherb2tjFf38YcnANSS1wc5cfnYSDX546oBeA9QK2TuUbek4GVtXAo2Ne6jnrAbpFK9Prxbbqaw",
  "key17": "2ACEt5a9d6eQcQ6LgmnDnHe1HHQbDm1VUJ75VsE5iJzoFZmoVWBYGg2uDfKTkXHxTbDkbV5xZ9fpzjnp2Ekaz8ak",
  "key18": "2ReyhSmN1oiqoMAyfwwVoiGZJwpzFkxRqU3qUJA7x8fyHBBv9VL9va1GeVisKJ1jaqRCEziJvFUR4FbDb4n6FLUJ",
  "key19": "4k2JKMG52acyA1hpjc9h3fW8Rc5g5fG5ajzFAM2rGN28kiWeVbFnpEsTJcpdJ6XbGVAbGdp2KHWJTmsXGZXg8X74",
  "key20": "2Tpnrcgz2RGUcZKB79vdoKGpDgZzLjqvKbLVAMkj5mQzj42Rb4vsBh1od2bJhxYDbPm9APNPXG3egLmrDuxWvf6f",
  "key21": "qPn7JW998kffrL7HVghZT54JkxPExSdVA8v7GojVnnemYpuxBcrVuuR9vBrrBWHTcvsLCwmuYFpi23ksK8Egtos",
  "key22": "4aoxHQdfLW7TsYqYzgQAzBitaTceMsxXAA3JPcJYehY8SG4NGKNVm7zMR6kfE9c3aGaCCrvw5yYGJwxQEHuvq6Q",
  "key23": "FUxNtuLcpr6ZAp67FvoTTXHaFjgh7aKmtKXC2B9qbruCuFxB1cJNECM6h38uChoF53sh9inT5SJ4Meh1PypTfe3",
  "key24": "5nqFdvpBuixkphi6pCJ7ib9PYjz2kmwvKqD5hDU5YKRRzNyz6ZKK3RHUv6R9xvFXwmAsHct7TaJ6SGLc19HSwvmG",
  "key25": "5Q4FqSzMkicwqzgNxSEtMFkTkGkhwj3BmU3881PFrmJftSecVeNdTa2KTbq9s5XdVtsnmPNdMcYWGMYSrCKAnkHN",
  "key26": "4W1rhJ1GmTvhDaiWGQAMu5ge1sfq6FUfRoq3kp9vCb4eDE8Lc7tNnL8S11qEaRpkMmtp8FqfzoxtNXfRK9yJ47JX",
  "key27": "4Z911SHxgfevRYnrUCtsQ2hJdCcisc8bLKq5N6H1SHCAyhcpPmfTJC4oETChcW6NQZMrX7CHXzALVgxw14n3cRpz",
  "key28": "2K4Er8z8NYWoX11VWP5fGhouiJMEEVsEP4uJHRu8gSwEkJCMV5HSHbKd9opNNWSjmo9D2yDNUReVCgFDYN4hEvMp",
  "key29": "22UpHP3yDXy6WqAuCjpoaEeKe3gmUKNES7mu5z9hMb4brX2RpNWbR7moeZRCjMNwWG8pj5maKRVp2FTarfYSKq7V",
  "key30": "4LjznGsh6gLtii9iVv7JDuq3nLSXwDDsshZZVXcci7Br36afEw4vdQnsgLbW5aNei16LrgYvxWHEsBpbrwUJzz6U",
  "key31": "4amK6JY6ckBNL8HwUFuFBTjp2WZpV7M7AN5kLx4dNZnB67Dbt9Cq4oYuuo7tWHsPcE1CYZMdPduWudDsC8uuffKd",
  "key32": "3mrAAacqHTf4zNoiLXkDvEAjB7re4rxdBkRkyxe24z4TwS3m8H5WJSUzaEMNJ93mjAKRDczWoANaXyAe2fvd3Ers",
  "key33": "29A31BBs1kBiMPMkmvh84FCbABEZRLUoWpogXa9ZFXi9BmeVvv4uHxwvrau4fqbQnZCqaKxC47HTXyUa5wNkjgft",
  "key34": "bmULYrwuxAwYAEdL3tWVAbg77zqTGRVzx3onK2aJHXHy4XzTXzfRqHUoYgygbHE1w1X64bvTEXAM6NpEgopSFrF",
  "key35": "3GpcQwDJQ4DsbEEkxpsToCTpXuwvjwr1Vnpu36GfWquRDr3HBEZjov9WaxKWyGs9DuK94oVwnMYnRXaieVtp1bim",
  "key36": "4KhXNqeYZxTSi4umaQS3BzMaJdR7zmXiN1NvcicdxPk296ukDZPEsKVVtqCMS3CjEYij5ozvF9P2k1e1jxcn2ceZ",
  "key37": "3eVu3BgfeZYWVbooYsrCzwuuzG6RcsDFHMqjiRAUJDhUni5yadUeawi1YddoRwboReJq2wqBTHzkD7us9WHNT6Y3",
  "key38": "2aRUjjYnjphZTyy9eoiFmqtosHxNv2FaTsRfvaMd7C4MLuCqVgEQ9XQArxW9rUCswwZJSWR2T2k6PJLxdLCKKFZW",
  "key39": "bHfz6eA7DaeqigzjVd7uhvxKyjswzD7KhQrXhZLcDhEModTuo1hVwiyw5s3dS2SW4t8pb6ZvKtHFuEnxvcoGdSj",
  "key40": "4XRQ4cs2Xj2QHW5eLySZYezhpGLSXcbgN29PPTq6pJ4aE38U7RzGvSsZsoviCMwyqCuUojrcCeQRxcYWSWjTJ2SN",
  "key41": "5dQN6tKUUvo2cterGciK3nfFwf5pZt3D2iLiNDzpzcUJR5YWEr56T8HdGEqtzJAGwDJbGtrXd7pBE2cscDMksQ1F",
  "key42": "5nLW4NEjgMuJUbVojPJcGtNWEvuZhRrgy5bBcF3VhyVU4W9yeKnQwvcSsrknSHX9Kb2GDKrFWUoPHTNpPV688GAm",
  "key43": "3sudXD3Li4QuNwdswpRiyTsF22zD4ByEEggq8rMyPq9hSRtXcDUrqWsSvx49ufNZ8nLu2dUJsJe8u3fMAooaS1vs",
  "key44": "48jjzJ1RHEgw51th71rzeMdi6dxrvWh64D74WhyLo1NTtWMEJkgHJstpRn9AZEVCayR3e2cYfSAw5q5hxkVPZmhi",
  "key45": "L114w8jhZJs5B41PcmMsgea698ssV7c6SRfvV6DMYjSj8B4sLuFUcFdjntVTNAhUE2Fn4ijTjdvhjgK25Nwx52j"
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
