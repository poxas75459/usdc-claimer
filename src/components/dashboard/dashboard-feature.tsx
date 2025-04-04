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
    "5zfCEueLuv7Bnh9hTvRRW9Hp82iUMnwDE93wfu8fAa3nTULC1KwtgruZfJ1aWTec7ABQJLErxYXtzzTWa5ykqmrK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZLzfUH939hLHX1NtU9qFnEAEu2qLLYtyLT2d3sKvva5Nh98zk8yjmitu2ZthzbfwdcZNMaxx5EpXitCYXnszdZc",
  "key1": "4Tofhghh6RH8ffVHSTWugJuvSLeFUH9kNnr4QYdfDZoZgSmHw6GxZSjT8PBJn1AxMxX89JmbxTCEmuvnt3vfyEw7",
  "key2": "5schnJgQBYgTdJ63esXE4sNdWxup9b8JBcaXeYS5zXCvqemNBiGjjTaBnQLP2tyALsYoGGFLDSiLmAgAB1SXAP6d",
  "key3": "2R2gftbbMNaPJQp6ivw4NyK2d29F5RagyDiaB1tHEepmKG1bA18je8LeqVPV7y9xTH2tDejcyif6YvhtZm8H4c7D",
  "key4": "55vKPdUv4JqApQHsyEzqFf8mrhCWU72csNwJxv8eRUtsNxbNbCS39nmCW2p87scTAZ7MN4pcFWiDku4pR5i5RYYT",
  "key5": "2rxPKmB3ETt1Dbri2ku2bhCU7wsviF3JyiKmQyEZL34Z1xkJCVfmKTwYgcEF9dCSJGcenzGZ94vSREWffL2KJju7",
  "key6": "38mqvX34T2vJ3qWPe1HRrsXrXVP191nc8kWdxWsNZ21txMkjkidET6qGih4zNd7npGkJkrRmigrMZrMQ8riDvTY",
  "key7": "4xLfqo6eCX4iSGHcsS3LGTDBjpszrTKH9i85DE8RpoHJhPN18SFYn6YifESBstzWk7FfnMcYE5sZkVhkFQP7FG4N",
  "key8": "3o1ieNe7pAo9vgao1xMH19qZ2n9WChuWKwHZAeF4TtwFVqbGgEsh3VAGdcQ4ZitcpUsUrSDQ1nW3ifXXdZra8rB5",
  "key9": "51LDEYCmDizRxa6arG1PrjuAWmT38DtLA9iDGgkhWntUbhPf47zSSFtKFC3ruQEyMJiUiyY5tUDMaWkUugMdLKSP",
  "key10": "5qsQYHRf2hoAAnoar8bbWHgGKWFqxiwRf3pnCcz13bLCoVWh6pyGtZVfA6JoHaLfSyQnqg9mENq7X7NuH3obyxLL",
  "key11": "2TmUgHdRKutnSgZJfJPRYeCsykWGjeMgnXa7acizP5VD7fkuZhXWAdnkrVLuEGvPHeXWc7Eu9L7ngEqj1TFP82Jd",
  "key12": "4V6gVCfZE5E5JWbgjVC5wwdi6sYpix9qYFdtP6JkNbmJ3aQUZ6BrMCSeUyi4oBi4aJFpYedHYX9PMiQbydiTcbjB",
  "key13": "2QyivBfCKqaQk1txZQoKxXptTqRNsfL9mzKVheffXTZFv2pyvVDRwP6sMyKRusSSrcBc7x1fXVnnBC4DZUUmrKfw",
  "key14": "4gskqeequWaD5eVQZ76aY5PsEXgP8rFFH6JU3yieaAbd2WLZ5WFqj63uVyjU38KcEsz39JxcThACsJZZPrNokWq7",
  "key15": "3dgSVVEjRHFsYp5LvATXGgmL5n1VNnMUNJz21aiWE9Li3RaNpWhF8bUa2ZX2JwdWZoUtdgjbNeSchUnoGfC3fpdN",
  "key16": "4QFWYpiWbcir5TxJnNEZemNgMKjWuLG82oeYPkUiG8zjJnkKNgVgzmzfovCS36q3W1C8WtkafuxpSUX1SAc8cXPi",
  "key17": "3Gw1TnpXB4DC2DqzxxCA6uyZCxHXxHWpoBwc2LapcjnRHrNZspZu9gwvLEDebZn3cLgTEJhyPv67npezVAsqYWUi",
  "key18": "5RMEGCvB5EwSkbpxnW7fZGa2suxc9aR5qnwArSwPcrMMk9dvzTLX4DKhsxZgFNDYYLCcRMy3Koh2XX7ssWq3VXaB",
  "key19": "7rs3x6meYvDP3n7VnTy5RmVFeeXj4nkGBorrgyenCh6hkKay6sdGjukcTr7CvSPb6uFGwWeyK2dsGx3d8UycTRx",
  "key20": "2soT9XF1A3MJniEiQQg6jHgMFRpxrmYBXMvqynANACHK8DiLqK1xhheh8c7j1KRMJht86L2L2p62FP4JeC1ZrrUD",
  "key21": "3SF4FFk7dqt58dZTvh9Nnnr8P4i6HsdbP4FAtbb2esZPBHnn5h7QGBz1TAa8th89wYeAjtkjUPRmAZ1QDSSBJmNG",
  "key22": "5y62oKiQzz77DVJsU8UY5dgdm7XmD3Wn1nZU5nwfhwrNKn28EHT9VBNMn7xt1zg77CupyRDHsCuR7rDiUjRPFRRk",
  "key23": "2HBo23yoawXrdbubSvFq4WKhDMcCRBTNfM9pNBbTYXARswG4B5PeJRt93QN6TZp8P7f5gBx4fvLWtemNMm5DDWak",
  "key24": "5XuVRoRjnUp9KMfN893EKAyMKiJph475EWDYJNXwcMpRjrmjmo2rW8ksz23BvcJUkeizeem6kvGDkFWFkcqALNH4",
  "key25": "3QZCQVF1Xu5a4gzgssAoT37qqoyZHQp26BfxNoXFaf973rPjx7pkgK1aCy49U57Yws6CwcTKmChLGDg9f79phGWP",
  "key26": "9bgz3XkAbqY3QiTJZp9ekLpfmuGn2dN1raGSZF4uT977LP9CxQQkbe4zfaEtUaJ51j1CicuELpebXnaDLZk2VJL",
  "key27": "2X4ZbVSTuBEgzC6yKEXJjfLRCsdc3bHLYahfMMRFeU2riypdmhNYHgdHnKpGd6RiC89g6qkXVRa9sNotebvCBEBM",
  "key28": "2t9eBMWqqf2SZbk7d95shMr2Yapo1SyPWtnmwZiva7ye5YfDeZ37YMH9VJ1HtRu9zLG6D2CHaaaRUNkZMXRCAbZV",
  "key29": "4GrFULZJpTGra5Xu2avMxodzUenhx3J6f7vumPFqhdvS6QVXpY3Pc1ghe54kM6Q5HHdoSC2sfZz4WntwkD76we7d",
  "key30": "5trp3AhmHLmuKvWjqykvi5fBH9neZUebKMj8Dvb3P4AXQ6YMhWkiGh2uybPrvaNyEpLfawi12N6a3TDYR7ntotG6",
  "key31": "VeSUM7smE1s5p4DJiHLk7uLvKNHEsgDtUiJjgiWvsCH6Pf3LRy9jixFJuTHM95RrUscZBNGEBi4AWaKFfPN3K1o",
  "key32": "py83zTWRPFrT7XHLmNMRBWZjgJp1uxCQZ5kkBArcka3MUE8MCGPvMZQUBAVE2XwReRjyR4wUYc5ni5rK4ZS7DG1",
  "key33": "vzLYv5pvHCGibTvtSjQz9AQ6D5FM3GQMBrxZSSRrs6wNYdSqJ1mDAcRfZ2zhuVbUJL1uB8uK3MGRsc6YTS2fqjt",
  "key34": "dsGF6vy96hRuiEMYFsxpihppqF3mv62g1hpySbRMhVbN8zn56u2pL1Mt29M4PX5uA9FApAf229Q8Cx251wMAdCx",
  "key35": "5vdhKwK94CV7c7e4HkVVzsmyLb26TcAANJqbxuKB3QMUjPRuQVY1vCug1M8GSBgSMmvgiCMMAz6SXkEvidwGz5bk",
  "key36": "2QTGGzXVAsEfD7mDbcH9WNs6cZYujR943eWPEEq7gGPZoMVbRLVhmjJ4c1QVzuwEMEm1B52RQoE5TWn8U1Mot9yB",
  "key37": "4CWaUQpv6f95dLQhdkLpnBhgSWAwckrPB9XKtAZL2VP76h6DoXimV6iRGQQQ75HSQhu2ekRz8aTMVe3VbdSGPssf",
  "key38": "5Lgc5zHJUNWFmcNYuZeMyecomqVnxtBUnpu1stnAH13EhVJyFkpJyYDMRi2huYanYX3EMEbjoU8EDX4eDbTmftTE",
  "key39": "fE8i32eajFvfaQ3kFHhrnLP4iLZpbHjgKm7irjDaE1NPGWhvEwrhm79Kw1ocnCqfsbieSDBAnBT1aRCiNEszGjq",
  "key40": "Nk1JsKJ2nqmcgioVD7gpqyuHmnwqx2bgEbccKTaomAxuLJMWW6mBtc5c6C5bMAYhcVw3EMBJbLkPdgkpMtCM8Xo",
  "key41": "2jG8fCLhu4tM59MmNaJM8Y4JDFhn4cV5javM4pGEV3eTYPQoWrtDj8LopkBAvtUJj3iiesjhwM3iCjT2An2b1rA1",
  "key42": "35UGx5mZgUHjAo3MAo6m5CfJT28PYyxBfHCgvKK5YQvSF9eykzzBF4RjLKV6xzg3un5MNebYtAPaE8pkcLPbtisY",
  "key43": "M8dgMcQ2SWyrzn8hpAMHkNuB4QHyomR2bQVf3HDwpCPTxuCnxjhPELrh1a9awkXs4LddC3pBnYkKQrh2SLKJ53W",
  "key44": "37W9hGKMazzXpBYxNaJmGzb6osJmPfSQnfh86mMqr6kJKpyiT7fK2XDCYS2cT8Mnq87XAWtMvQ3K6EfiwB2XxVbi",
  "key45": "39YUAo48sdZAdQa58zTsGP1MYeng6RotMH93znCP3nndfQndDafePBs55GhEh5gYMFd5ueT84kdisxHs5DvxgsWk",
  "key46": "2iAwzL9CdoSZQPGHk4xga3VDVZBFy3kHfUpGruszV93YRxVp41L3ZqXPt3jjb42GBPtC5QFUndnb4EpfENpfeaZH",
  "key47": "3n15Y8YgM9Qa1LM5G4d2abGw6FRn6VihPXDxK3PoGAC33DqbiyjMMyhSBPioJkLKyVeT6khyVURsmiHJ9hoaL16G",
  "key48": "UbTVJAMeYo4M9abCi9KpGgyc8Z8egE3smnhcNW8Df5j3gU6d2oNBviEqqQMM6ek15XZ8TKb1ieThfrtCqmQtewM"
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
