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
    "HYwH5vb6iyira19EoqyN5WF6aF9Zc88he4iQgAVTAve6VLTioc51bHR5rYCjU6aqprn4CvdXSeehXuh2tzjb2WT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YeimgZZ7QRKnW9r6BtP4zofMaNeWkeMjqNb2NGBXZK9rxwrLeQz7rLgJDGsvdTZYZaQZFVwww5PjYBP6mTFbGWg",
  "key1": "266wdovyauEionQ4p5nzQQQc7Jq8veEX1wwx3jaXAgsMA9KKT1RU6SqFRhdYmEkiiqJccWknbwkYLoVMw6KVNMgs",
  "key2": "49jdptpPUYRS24qomEyBAzDB9M7YP8pRvXGN8RLybY5tpniQdz2mfR2eqLKVwieZ14NaNrDo2BVp6RoFaokGoDG9",
  "key3": "2db4qT7KGDhiqJLDWSuteUKSopp1agqFuD2duGNBEmzB9YXjCgCDi9FeW9jfpj7oAoogyoWS7DtJrD1nrJMFteNe",
  "key4": "k2UpjqyoBVoKD2w1FG4naBonFnh1vMsjQchAyhSfJFHF6Vg4jTrVHmWtTf4fDNFahW1rWdfKCasDhYHtYQe8D1R",
  "key5": "3N2nExSB8gSGeAX8xC8css5SBui8mYmzmQ9rhMXwJGcSkdLbvPxSaQe49J3uXEnkZ8gPyPf932H4j2respsJqhRS",
  "key6": "3DugPtR8KC5AWkQEn9gUfVGd1r6YgvchX9MJsx2t1z2eDgspd2tBHjp8HL1TkA4mu9yvLFEGvXXVAmsXxdn5hPNi",
  "key7": "4nUrLnEkG9hT7i1fui1ppSnRiAXNWdRsKndDEEAPV76hUJeT8n1Z4qDEYKS9hytnvDUXqxkt4VegpkHvzBr6a4d2",
  "key8": "3jTUD5oFbgKzaRL2tiT6jdgMYzhXwo59VNzV1HS7FsReEdQA7hJZo97QYQMW2wZthZxfauetEiaQuobrMcc9VhdR",
  "key9": "4xU9okBKDphu5VJPqeEtSewyRLVFkCfvj6wpMyQjs1DZ5LPHkLdhtFd5wSMkqSvyurPc8pxxn88sm99mPApaLxDj",
  "key10": "5AmjiEBGwdqz3AzUymTkhrBW6tptBbiN9PZXFnHWHETdY7BBGLtgijgoxJdPUKqFK3yNH9VBVTEB6BgB1puEYjNH",
  "key11": "2DUDPmeKdL5HuHswrNXPnVAL5r1r1AX1huGzs9w5f8nctc9NYMQmBPomrvsmdLdNC5tNLRigWY6smM5a598rAm55",
  "key12": "tebfWtzsPjHTNizSULAa6dAADEjCh5Mf9uDDxMbJRyETpL5xmqexwwRJdYHw6qwAGXm7euCbyNj3818L5cbZUvQ",
  "key13": "29rHV7twWjCti2HGwVEjBCMDMErtKtTCktRZiBrtcei59VpvoiMzxtyhrFtci9CmpdbcXsk3mL82ntCmkRGjLWAr",
  "key14": "23oyV6V2aV6oHZD7V87eNfqmW7232gsFevZpyDSiH81u8abnRGPtQxz5MfDd54uHN9HC5RRKYr1NAFb76GD1Sszz",
  "key15": "qUtSHisj6s25GJAdzpSoxw7dD5wTLz8LmxcgLNrZtCPcoBt1mBtWDAuTg2mtn2gsgNSHFgDhs3P3mqu5WiedcRt",
  "key16": "23H7zVAaWQEHZYXuNiXq7xWL2bac5Hp48ipNUQwRJksRVFXpjbg5d1L1xsCmGxLmLdFYdwP9EpDR5PX7ZRSR69tH",
  "key17": "46i1RnkfSS86RLKro6zt2jnFWJtcdnSXrtKyKeFcoxfZivx2MeDRUN7pB6imE78CjA9rtWGZizYo7aJnGzeNSRXn",
  "key18": "29gn6in7832rn4sUkvZrYwwtn2n7a81854Yki8tz5UdBYEiaMfudMuyHf2sumTV9gzDwBrNiQPTw92GFFyNgCkeG",
  "key19": "4JCbsJmP9MZ1VDVR7BmpzkQ28eWd4khHeNyxQB6Aghb97MhXmJib7RhfVrVL5ggG8h7zKJfbcMxVBJMsvDjPwCrM",
  "key20": "2c9hK6DJRMDG55j69c7ZnHx7qF2WKF4PxPT7c7iEjPWEak2yPugScmYzPuuK5btD8w1HWu8yTC8tZ2uz89oDyqHY",
  "key21": "Bzzr6dywp1rdEJ2rWGSqNMzBm67T2qVfJgceqMsf6h1AsqyjYYDUb6EGc6KCvcmHFVP49VPK8AmgLxfWcYERhjK",
  "key22": "3af6hSsaxSANzcDDuE8PRJzDUwQg6hnHFY2iX3Jq6VoPTUZ48FumNnNeuEonyBsV79WUzNKVqFQaiKKu1wWNLGw",
  "key23": "55B7mYFoXquriMA1Eg2m2RJCzTFLdPkGQ7Q7LkAmV1YKhGfLp2HwQs7L6iZvxB9y3GrR5QAPtRM9J4gJc99t2iMd",
  "key24": "3hSQBerbi8xLF9zusPJMvuUCTiaAjfcvTBFhidw8nKpEC4D1f7RhuR7jYis64H5u7jvvWV1ssi9j5B4UajqGAgA8",
  "key25": "5zj5z3YWVCkEWt11MiyrVYujUy9yehmokDPxu6n7NEKCytBTLW3MMPQ45wPdXmaskwrXwRtSgKxWJFY4oTn8uM5w",
  "key26": "57bm9Djuw2mjQkumbCBFPMCbwYueH6WzpSgjG8GAwuyov49mf7uek7Ka6EzsqTirg5g6KunzVRUcB2y8o9pJpo4J",
  "key27": "3azvsVjZNkEMmPHJJJTcS3dFgfW2mqM3TFjuaxpCF4ZvBNiBLNVs9bXeAQTHcDYQNDhK9Wh4XpMhm1RgmR1uhNjS",
  "key28": "xLtq87hnjwWBZKP28gK6SHK7tzi8fJhe54RwcKgSiRPNBdDcBhTDqBWFs4nznnQUhMRW2TFiVtvn1dV2hVNj46z",
  "key29": "29uWsGGYgr5Ph9uuN1hjMcAFCXopykX8G4pwC2dtpZvtANHM7JAtsRrnYkrGe2Qoc2Dn3x8tFnbqyY8SWrVN1dri",
  "key30": "4DEGZmFtz5J56qx3PoEpPVeqygcTH1bXn6oGrLZukkhEMEoWL4V4TWcHo4WoDV1Dn9fJAdzDSKoyeymYMzhJNcfy",
  "key31": "KpQYoVETnGt8vz3bEoif8mzp73JduPYBRn4qicfJ4nCPY2RXxLemVgFSbz1F5XSJn7ghDN2TXotbsQQyNugkmo7",
  "key32": "5txdAbyRrf3StvmSHMio1wMAt4EPS7K4Fh1uJX72FSfuqqtZd1peuepJmLkDMFtJirCU69gYQYuLrbMfGGarV9yW",
  "key33": "86akMD97irjjLpGEwvuue8HFdQaVugDuhwjnjE3HsNW7ase1nWnh2fJVc6e9ZAXJruWuzXibQaC3GLQNrbepoo5",
  "key34": "2Zz9iawTRJDG4RtbAonBRwoVJmv8FKUDagRKuUn31bxkkqX5zN7UBuc7jrLnYbfWX4djQ4VEPwfQp4q9GG2Xseh8",
  "key35": "qcjq5syX2pVsfpbgmM5B7FXcxXCvYFuNaYNZhLrzJd5qwMfwwf8Kd3iafXobeRBnzCCSxZQNA2BkMb2YFEV8twQ",
  "key36": "wKzhDJyQbivYxHH3eKHTVPa9aJrsZAQYJdnRNSk9ud7GPvZQ8vWk2prEEktjHHri7Hq4DcWHwGyND11s9zb8xVa",
  "key37": "8CjKX4mpGH6iK9Yr8MxCNt2TbCVmzH9A68mPwsLqrZFdJBczCtkx1u8Lo9ayTzurKdJCn3fhDnxprZTzyrVU6nY",
  "key38": "3RJottcDrTZodC4EHYsJjhHtxuQVL2Q3p3sNtoiNvM523EnXmsLHHGgb5o29TqoJ3XBk74MmhKTvuhdQcRST8Y1w",
  "key39": "3HH5bM3rdzbTFBdJWrLiLCyuv8cT7QEi2RtC8KSspx4DyjGQhqWR712h3GmPBoX5Kdb7pL73EAtMSCwpXrYyPXuk",
  "key40": "54RETgiBgUihQHDkZK35DUavQ89C7oe6CpdXGjZTrG7uAurVF488ccC851DEE2sVYEYEvRetVfKGFL5h2Kx4XTeS",
  "key41": "5T7GjnU91nDL4k7npZCwQrGZ2EMr3aMSJv24A8ksYewYGUQonWby35272iSDrhQ8PCiadUbAN5uvi6vCPZMHRm5m",
  "key42": "Q4xwEHo4xnRHZR2VS38feVqH66YxU5mb8VMAyZdHenMcTzXVZ469hma1WZVLnpziCyDcriimf85rXbRUdVgU152",
  "key43": "4tGgEHefjndhpvr1NtFo6oxt166YkBvmgMeHmybXC1rtdMpnZQP6UagjyVdKF9ZtmBji13NAEiqZ8U2LfMjrwcgC",
  "key44": "5wbrzK6FquPTG5jyNcMhUpJRiLRKtMNoftk4Yy6J16nnp1RFJj5btznXFGrAW5RuvpyXzULu8kparxA3VnQqCxGL",
  "key45": "5uvTg1AsbXd4w8guvnKh7EWgP1h4ECAW8yCqiPnCLdjJNudK9mdBHNZVvKaWAdc5yQEdEAd3FbnnauR3GCq4ttZa",
  "key46": "5nHFJ4KmA75yicZSYqF6uBZANUSKHB9FEdASaWUJV29eKhR7VD7CDSwMHhCKH8HxZfMDM7BdpiqGTWikE8JaPQhE",
  "key47": "2AbQssr5zsDy5wsyPe6zU94Bi1tK24iKTFhhkhrJaErNG7XfaK7x1uJcN9SnYjrwMU7Xz6ZrRoYaQwfWcMCDKiqZ",
  "key48": "3Z2wqhRCxE6N7d4kXVziKnDvGo6dB7NouvbbrcQ6VhcdXKYhmDExAkAoHsxeGpRz845a92WcQ9JagJCDGLw7kAZY"
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
