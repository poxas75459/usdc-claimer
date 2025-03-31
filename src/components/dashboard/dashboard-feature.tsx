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
    "3o4rCBDNrYP9yKY5Jtgc4FUe9gFYnQ3HGWhwUfnsTU2Tp8vpLL7XzdihLbPSaZfqi2LdPPVMRhuU1fR2nyDDf4P6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51VEzUqMfjFSAFhRZJmTdB8C2J8t8VGsLzx7mJJKspszZoCvouchaWWUdSkgJMximeGosX6bsGEMQKyT3qUXBAmM",
  "key1": "2dkfCBVqivrervf7Hj2dpAZySbSgqMnN2PaAfm8uvdKgXbs1YCJPxzNdx6L99Xnf1wdim45YUHh7eMtCGCv6TrR9",
  "key2": "63CAjvKGp8vaMUXRz1XGS3LW9FTZHp1Qa8btgtKP3vh17bPqYC6fLogkeXQXyeBJXeaLSs3qoUgHoGQ6o8cJPyuB",
  "key3": "n5auPR5z1pYHLyqaC7KsinBoUic2eaYmV7vjAMtbxijtHbsgdrzRmM69u7uvCeWrDgRS32dpndmq4Dk645VoXA1",
  "key4": "H7Sx5gzuAZ36NWBM9J3uHKnMcFB38rJaJ1MvBpM78PQz2kMv9d1FF6hdAFqKoLv7fG3ZJpte2ecLt2svMKKmGAy",
  "key5": "2c9MJAyAczCtecFAVgMyDm2L1GFTQ97rdL7ocShECJfYGcp4k7Zj6QaW6Sp1ZLxXSE8qSCbDyxk1kCbsACgruiBz",
  "key6": "3LANUYrpbY7kc69HzkaygLeJ33w7sxm8Gwx2LvGURVcqTirM4cvarGMZtMFRtkLvqab8mx8jPFCAZ1uL7P2j6sBa",
  "key7": "21jBKASp7Zy3Kigc6CZNEaRTYe73TQT2J3x7WXrB8zhF2mwxaw4WcCdAWrGGgFBsZRqhcn2xoYamyfQxSayB26ZB",
  "key8": "2ktupCHPbZXa6ZATVywcXWAebPPvC57i69MSNdevvZKp8iZU1zHtZ7y9HrPHjiMHeLuZFySg4wNs8ACC1kDHGhjA",
  "key9": "q3CodxuAtKpK4aDpkh2bvg66CWdi57t1dAGyPGRspFh4BQGcFUnyqEqkUjipz2oY2sqdkB1kojNbzjTH5eUEM5m",
  "key10": "393mK9HC9Tr43ok6NcyvsPFvCznEUJC1mPDnT56y9ydjTnrkAPPJPRhtJP1e2rtCwkyhKBRLPHBaDyA47vgDyo1y",
  "key11": "2xmHv8o5PAk1cVoMebUaTYkvfQ6A24KTU1Rn1tBffp4mme9VF9DyZbiPmPhz9LuQ3joHEUxhN7et9scdbiGUgrti",
  "key12": "ySj3Z7XbVXpxNmo99EdxRDzzZMJRsMYgu9VRZpFCruLFYMkFLTLX9tDEZy1fJCFzuuEshAfCxVsCYD2KpovWrzb",
  "key13": "2qex3n7N4GKCv28P7vw2Y1TKuHNidCrGcRrPckS1ZZBK6qrasAkat4RU4xXQLCu9b6h4fXLoMgudUAkJ7SsbMezc",
  "key14": "3c7dBzER6iovT6mWQG8pVPR5mjJm4fWc4JVK4swaibdm4fkWQJrZnkW8awxzuMakRjVj3ukp5FGR2yem9kDCTBw6",
  "key15": "4kZky2XmmtYwacNLvop1pR48NztMQYEsr3BEHCw4w9Gmg5NG3Np7zxWnVS7FrfXSPNgn8tTzQvH9XUcdC2qv61RB",
  "key16": "dmQnHUwVkWY3X8b2C5bT8jFZHMGGNkLiFJcuD9G865wWYkUXpWen6VRs1NbvbuUC1Wh7KAmcCqKZSgJWhqNb11v",
  "key17": "4RW4j8boXwfh5jHQJzMqaBVisbVZMFWLCTZDBRKNHT6SJQSAqBjadmGAbjgrME46wjKxAa8WFnU4p67swEqJCFqV",
  "key18": "4eVHKe7AErKnPTxJfKJLFUXRYQcmTW3fwtrCzonuGbD1UstoAhwxwZXaccxmi3mL763hJXneyAXeqCrUEPZ4XDyP",
  "key19": "3cTfVfC8feNsiNTfz21DRvi4qX7kZj1hhDxzyJa5PDEXPLYREKxCsaGH8LcQhiXiLxheVfzh5D9vuepY6A1cjMWg",
  "key20": "yLqh8wVLuMHpHMhu7aLnHp5cA4C85Agq58xjiC1USBguyFuBX4ZMaTz1bVPUguwGuWyMtJYArwGNkC5CHEfVydJ",
  "key21": "3PTcydgouvTkGSdiaDrrUTEYRCfPrRdBBdh5z81T22zoWkZDCbRsNxCVtsi9qN6ni8VANkZcQhya9EwoTHYAsU2v",
  "key22": "4CupZUVfnw5NxJt4p49iadbdDWGCZU8RU87au6VmUi7YmriHYipJk6QcW2nksUXMvFiG2JzB4HE7ga2H5yfqGmek",
  "key23": "23BFyjwxReoq9sAeaEXBJd1RfWfPD9Pi9WGXoAocz3FqV5uLt66JHsy5yFxUpsy9M63QE3T9yVz74YUJFwqDKGTS",
  "key24": "2BpJLS1pboWUo1xcyWEx3ePUyAc9wuN1ia5XnENoXWzcjds3yPNCRv6CK5M3jyMkzd2E2Lh5YrXnYev9L8kuBZVr",
  "key25": "37Co1xc9P9Nb4Uk47gwTToJwwBM6DAoZBvH72oebZdXTPyU49dVpBE2wh8aWTkHgKvRuz4uQPrEPugR6LBHpdZuX",
  "key26": "5pHd8JdXPJqwZL5rVDgjHLQ39K22TCsRyyXx5PbURJVrDvgMB5UEuQ9rCRK6553L2JdhxHe8cH8PsKWK4Vckre2e",
  "key27": "4oFADZvHc9vw4pNrBtJXvFnpwqUP3xeAsVHbnCu1wD4BKzJzh7hvFvnBaVES1BcaBQMwcYTfDsANgK41eWXZ43Ap",
  "key28": "4zbY1MbKC5wUyH5hDUZkdnPMdtp8ErPxJpVuMBYhNB2iywzXH2X8bknnFDi9vhunXeoLc3Ef1VAhQp4WTigqabLe",
  "key29": "48jWdJG9TyrvgJZGFR94zfzTkgv7uN8VaUNQXouUoHQzef8zn93gSFbKix9eEr7APqtrXJLYbjaFoFFG4Qj2oJEb",
  "key30": "uMybuBeokqK1hYopTwcW8CQ66cPQ8z1azQWKcJRXZDUx1FuFPY2wYyxjxxzX3YvaTssPtUU1zbaxPYjyC2Fu4sq",
  "key31": "5bpbZUz3ZCAV5wJ46288n2GdLGs6qNmrnD31A6hdP3z9VdZ1Km8UgvG47mDzUW7Ei2S7YmUh2xTQcPAi4h8Q5ftc",
  "key32": "zf8sPXe1GKkJjv7YEpSd5eaqkomz1KCS3iBoVcc4hJ82t2CTPdtndsbZAcDqob3WWVX7TvvTJ1Aw6VN5zr5BDQ7",
  "key33": "JyNmgSby6rDxCdfwLqYKCv3Qn2v3rbCdvGMwRWkqhnmcn7LQEWfHPpmwrHxPCNB1xV1UTerHnkbAfohUJWGA7QY",
  "key34": "3WrtipPBfb6vigLdXi8dj2ADYSXbiNHuR8mSKSpAoMvyDnmuzUP3oWKCqwKoHvBwNCD3tRtjbeg9194apb331UUu",
  "key35": "hkXDRsP2Qd5bPsoPdLWbY31xe5eEFaHu95jABWWE4daNFzTGs6cKe673pdmUN2Dp1nrz8KNHwGk687KP7pXcsrj",
  "key36": "3rb5hwLbdpHUA8XYrpDzRhKioSvyaHNeWkNxmdoKt5wzErRQsTFirGQLVWoBQdaAiN8AmxT6US4kRQfqaWyTEiF",
  "key37": "5YNmmorCVmDWBaDevC9i88cfanFmZQfGYgzWkssHcxFvNEMzsegfdaypT5mAo5bpVVYJxa5wMUabCkswGsoHsUJs",
  "key38": "4TQ9cdK8wRCkLVvnhcEFtrTFAmieC2rP5sHa3mZKwkV4i8hgzjFSn8rFo2wBSuh25dTPSQCBd6VUggMZVixDEULe",
  "key39": "46nqfr5h4bABzUiSKwxiUJEe9FN14cb8XxZ5BzjacxiYEvMAphQxAvUvr2tBYv7rADRuph79227TmSLSr1psFEF4",
  "key40": "5T37nCd3RMQCEuPTr1fQ1yUNE2LAB3tAzEnNwNJndW6M1J2YFbdoHqu4Y23sZoJurPv289ij9Kz2W3p5eErqTQrD",
  "key41": "3GatPMry3yev845ppX1DW7scjPCZxmSRqhycztKrVFDnEMXrT6KPbP4afVmi5jgot56BSEarHXfZedUbaGGje965"
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
