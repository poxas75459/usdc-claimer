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
    "2jN6MBQ6YY675E5PALF6sUJBoBpoyscjGgWCX23jJacD9hVRrbLo3WJr1LN3ZRJUzJKeHrosw2RZ3mLf8tAhjxia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ejgyZmiGdosqgpmmsrbi6mb438Ri6tCKeZuQM5iYKmYGQXj6NfoEjbxnMcs3oe4cCV6aoJaneiDg2MbpaAprvxd",
  "key1": "48sgqW5krCdAqDi7ektB45RdkA63hJmAoBMWks9nq3W26jnkfsrhBNBB7StKXnGfAjGtHefiTJ2j97mPUAZC3YUE",
  "key2": "5vXzoMKXuJdDvP1Lb32H1GhTBi3nNmLNBjfA2v18x8iLY2XFhLz8fYXHkZu3sqxfaaUpEmn8NJt3XpT6UVTrZnup",
  "key3": "2aianQMBHjoRGqEBGMWtK381798uyPQPzRN3jWY6Bhzj3q8AGJfVedHgyvv8Z8VCniKsdFdMsbGu7y9EiCVgMB8X",
  "key4": "3GGJoz8DBwXW7TStLrRoSgyUf2KYCr7L6MzVc2BWivxJQvvSvfA37qPks5kYSWL28CLdVMX3BBmYDkDMF3u2ywfe",
  "key5": "4W4WMpAmekxr2Z8dFW6Kj2fckxFmDR9n6382YuywnsmcCdYmbLx75LSxN9AHoumUXq826NVAyc49wQpuesXNmqtk",
  "key6": "3REweW8FPnyWNe3ozH4TGfvphyiHfZcMCbBVjCgBKvCXL33ZTs4xk8mbMqhEWq95VUjD6qWPCH1nVm68nWaL3cfT",
  "key7": "hpbDZHbbayurJHXcez3BJGtKZUyaUaxZATZ6xkiwDdRGA5sptJ4jPeKo6N5gqAwxtgn1Tw8NMn3fyyVTyexWouX",
  "key8": "A5HXhxZRV19CvSuSZciym1siEJ93TkeeTPdvyyhR1kCoRkwaVb8bfJBe1VwUWVe5KnhA3j2c19vjx9A82mJiTqX",
  "key9": "3wVhZvT2SBtTYrQzzHqWgY98ZGsqqjXNVEMerdoy2L2tCuwJNWX4YqyxKmQ8MGKJK6cmajHKeWoSgYZJqYRHY4Gg",
  "key10": "3vHqKSEMiBRm2efDfj4EfGwnc2DDuEXtGg6amZKpPTa2kpWoSjwZ7DyGJQ6G5LgakVMtZKfzMdA1tDDyhf3oRCeX",
  "key11": "3q4ZxQv3F444b6JcP7emTcPUpgrEtsoYMpL6tbiM7XNh6zmTmbCDU2oGWKGkZ6DWouB4wqXF2DY6CqyafYJQ7z7C",
  "key12": "5WEwck2j9xPeG79UoqHkabd2jLr1cmNn9yCE4m7TKGvL6nJeqUgJDS7Kr9jso2ugm2nP5PNY8gVC7VE3HYz9pD52",
  "key13": "4HQwhJXGfKevUwxkcSEjrmeqcq1hUvqYh6qysiX8Pexpy19Drz1zX4SK7v4gS5BFLuiKRWuWXmCfQ1mvUpCvfGRx",
  "key14": "5GRPgPUt5Kq7CpVLxieeDPSgNNHpgxoPZ4YkP2RCzMLTTvLJf2VJehKutC2STGCUkp14vCjHReiLiXQukUiXvxM7",
  "key15": "48gnRjJuB8fUJq9sos6Ap9nHRdk88t66y2KGsaM8nhbmYZaRgdpBuHCmnWXgEhEcqres9J8HoXwx66P1SJzJKqCp",
  "key16": "4XSEkrRCdpvmLphATpGcBu6n5rrMmLDn6NMb921tzGnX8wQC3TYnWtEnTXmepUUcPC7FXF3wZ9yW6mdJMpaudm3p",
  "key17": "4Zo8NeesGLuNprnX3THX7KMVFUmWkmTiyovVEjRswHhkSK1js3u3RzYuyNoLVsQhuA5xWE29qKt58MmNMVoethk",
  "key18": "34xr98W1kT17TiL5TmSd3fC45u9JzTLjd1a2ZP7NDgArdzj6uxzEM3zG3mZ6VwpmLxuLD1ZWtp9Dga2kc6qqH3eb",
  "key19": "PCDyFtvrSJvGKK4g2qDhPbPbfyHbEkQbhf6KGHwnbgLKRzpqosQpGetX6BoucTpQh5TNCRDxEJDPfbr6U94TdUq",
  "key20": "57PjhvaLsJDpKZFJB8tGWMcAGdvErkAHcARaPVSpn6jYnPmeX23qfxWBobyCJHijP4zFUySLC2RtEXRjPToKNDmZ",
  "key21": "2PhLphge7JsmRwcGehJ9odQqi1evejC9yWHbAhkd3FDbLbwG44fHsFbDDsbCseHfjetyTCxJhwhA5fhc2WSjkAWr",
  "key22": "3UeytapZkjPZcuU5WTwE5VXEPAAT3f1FgpwWgEgVUPXkyZk7a3QyQmzLixZYNhBfACxcEiSB8D4Xu9PWaXbs3aKs",
  "key23": "2qX3JawbZkUZiLy1D9rzhZnSkBLbRAG9qJgx48EUt3Cgj5Yee12jVoh3AQXgQxZQQS5p77oLr5zK9mxy2ChPxGex",
  "key24": "55MhVHfUwASU7cEQ3SHyzo1NzGTpfdaT1DCKrmA8q94rFZdaQRRF8GvSKoybyH8741WjhXbvKAjjtqQ3QcdCpGkR",
  "key25": "J27YAKebPnCNLYDasFhHcFqaDHkSvyB6Au6Eg1fA6B7Dg6Hb3SZU4f7YcYHaT4SqNCEDaewpS1nQYDuFncXNSN5",
  "key26": "3FespJJSQFk95J3LCPo8bhXt2Q6gmSGKhJadaUMqn9G9tpeyrrYkEBswvXRmoapuJVzQTvKPFkHZyzzG8P9g8TTV",
  "key27": "2G7C7dYmPYFN57tyjEFStxKr4t8pSbnJnvhwmLzXdjZkDHjPkCHTw51rr3CeLDeRqKSHGgUt2m8NMisGqXtceezo",
  "key28": "vAPwddpVf3ACmX4c1u6NA6Y9AYVcG2p7Dmm2Am51oprMwoHDuUMNbNMKcweayAfU3gg5BbDAVreAJfSsdM7qR5P",
  "key29": "37LPDzc6zq7Hu4hPm7eai6msMDDwdXdSM3dD1U93VdxrzrM2xmhV443NbcbEreS1xE6wbBStyDnHpCBGDkhBzye3",
  "key30": "2SbnZ97df32XJPSPKmAZsqmTqMNfRgoVCm1Cbe7MTkgy2GgXaod2EBKPbWPS3h9n8uNaYE8QWyYLizWVD81bouFm",
  "key31": "5hJhQbgQksjzYx9KWmAxZW2vrKkn6og29zMiU2YgWUjGjWQGqfTDnqapMru9kVDLhauH377Ars6EB7yLYVvAwxxw",
  "key32": "4qBFw9mR6XYPcJV1YwVJkGrmBt93org58Bce7BXZ2v4Z4Dx3GrweQRUH2fs3sctr1her3teSyaXwiS6kJx6YBeoQ",
  "key33": "4mkFjQkYuj9q5vq8KoYUXZqUrDHvJ8mgU5sSXMTzP6MSgd16mjhARzQfZZ7CjJXh6cG66wdi4KRJbJA8P2smeU3m",
  "key34": "5yWKGPXi1k8irRsk635CAda2zGoU3LnCRTgmrHJSVoZ938PPrNmnXqnjndL4zY2ovkWJBEp8AbppTUFHLj8mBn3H",
  "key35": "49Ju31tpyWbuEv1hDEJsxmPzMmmvuDZ34e1FUVQF3QB5tUKrtz8AH6P3njvrL9rtmmVZMzz5vfX3svt9T8tGrvUd",
  "key36": "62fWAkQY6EpxLWttHYvaey4wPW4FdUtL8VcUMc7rZtW5zTTHvRuSnaTgsRGXMPFCpbBAoPrgKd87yjNTSbquLA39",
  "key37": "3HxsambdtZH2RHvKmm9qg3eGHmzoD1ikR5ZjXyotXrg7uFEo2tk6P8aFoeKZDJ1RMN5Ln1ciQ7N6tNz8Vik8ooPM",
  "key38": "2jzXd3t3nHCjeZ9GX23WyBUnuch5XfCU8Z9mi7TJkiZL8Y4Lc98QYtuDtR89dLu73u81YcFUGq3UWNknSyATYiyz",
  "key39": "5hk1M4TAuQdyK16GkfzL3Zz6AgyLqHcNSz6awhC3HT2MUSbgjZxo8he6g4KZ3i1Z18n4u9iMVvavFEWBsFV2aqD4",
  "key40": "4Z15XywUWkvnwE4uJUGa3PWR4Am6tb8HJLnDK4CzVqnRBbtPH6KJeP176k7LFXLSjswHQWgcX2TQd9DdmbDUxJt8",
  "key41": "32cEeDAQtnr1H8T479aQuoinghcgiUBs3a86GDdKkZF6uyAfDDt68Up4j97Ls7y5cGhS5Fs7AX2v2sWhkX1Ztsqb",
  "key42": "3oZU2JiVP1VFi5GmKAW6drLicnVh2yEJTigQnF3BKjTKYk8QXSjwdxjsz3xb2oFnjNVoKFnF96Z99W9u18hSLBS8",
  "key43": "5jWqkxQg3rraoj2E9mqmickVizf4ExGXkC5zvAMGUnQz6CNV47CEBP4s13toTFG9oEfuFhAJuGcy5uaMm4yBDL9M",
  "key44": "4HgvVwZR4ewbRtGpaA8ZCuRGFScDKvtoSsyGrswU6g8ubvpi4Z2vJ15S2pxLAd3M36v1SFmB4EkLX6z4T7NF7CF5"
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
