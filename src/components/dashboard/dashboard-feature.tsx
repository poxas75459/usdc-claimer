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
    "2KKQfFNd7JdaP6tyrgLnDUAdt1tCf9dzQwTmBhQs5y89FpZFwffYmMbrTABC4aHQQ4Q4DTecuhpXeEJQ93aW4uxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "112VFvEyAF16JevQYR5TzFj7knfFnxDEnxuQnUQLQqW5SE3Fm32on2KsZKv6JqaHogZLgEeaUPhJ1nmCP372prt",
  "key1": "3mtAd2TB1H75fv5sjhftKUEUuCFHo83h9NxSPfBCWLknvmBJAraae53GAicJQd4YmY8RTtaYXRubBEyBz8SeotxP",
  "key2": "4fm4w8wmwxW3GCNeRcurvSpi4g7PHY42fxU2GL4khJZfPQwMNboUGsRAN9fKj4G11L2RSvSkXvWkVPwzF5BzVq4V",
  "key3": "iDf7QNHtLK1RipkiE7Bxbj2qwMr6rXUXmyaPvmdW99CwHX1i3GYCgfH8y1eX2wnt9uK43TXaiXsHVHRH5hq1m4g",
  "key4": "Ty7TF1C7iVzdxmmwVGdZzCNGPF6DBGFnjLDwjik4EmWY9bUNS2RrmmYJUNZHaNFJtB5HzWoSvGG52Bz2wZUrQMi",
  "key5": "aV6GizVVep5qqcKheF3gPBLbWu8XSGGNFf5nBrrtkX9SLnBEvcNW4jCPE868VSuK2ny5zDfbwksmh3AcACmoR36",
  "key6": "3NExAc6RvRACbH9vzPG7N9F4hT9geXFuhDqpX81nbEYMySpsu3vDKXR6gFNnHX35ejmBD5JE8iSf45EbH7Dk1s2r",
  "key7": "2nuC72eej1h2eimD2TfUmZ6n4vuSVdrDmNriJgEC6Puos1njgHFjw7miBxsqMLSwxdD3a67WUgv2sygVL2LD971Q",
  "key8": "57SpFkwTgBBfubdu6eJUhhPDdi4nNZp81k214mJ63hrJS1sjxJYPpyP8neRncMkbaz5GwppUCPGLqQPnnEbEUob6",
  "key9": "2WALCymWcMtV4EZVvohZaVxp68BDoUZjWaTVVpbmHyEZrLQCK2ojHt27rZBq1vwHK5C6VyUwr8ShSsZsakAfHN3G",
  "key10": "5DUG8ZZE6SYV5vrW58dUSRPuows9z8shadBrWR1HqT7D74BPojy9yssZva2yYK1aWuPV7eqcqcU6XF9UMMWGdoSG",
  "key11": "9zagBoWZrsUVGL3qeD9MCT8RNTom7TtSxmAivZygwQMrZ1rQ3tRZZpSPKUkiJ62SuwqMCGLbmQgREnFYFddzim9",
  "key12": "LP6erXXgFSSWPad2GcvETqrYXb8Ho1E621z9bcPZ9enVGjsCmA8dqexjh1YWTazocGZAvM79LSttxzTL3qgPWui",
  "key13": "4Nau9vAgVEGafFy9VqwjaKoD3HyMVoFPJ9UNyFuCGaBkoGGDC6fQFBczhmFYZkqQmViduQccsxcpP7VSVwvhQNUz",
  "key14": "2XrCCZaauPyBYnusNA6LYGmEdFa2hCRuCYrcKFiCRif7MdjNifHAt4fx12udvKcFoxURJkLe5vdZCn2g6AHnitY3",
  "key15": "3r5CHiTSrsWvBF5sTK7zRDsNpJV7vbGUQNegC5fts6RFhDasKn3wEsYmDwY9EQXMSHQuzBHT1sxgTp6hh6mofzuB",
  "key16": "3YdG8uDro55o3BuTzQFYB5raZmbhg5H6S9gLSi77LSoUi5JwRBaY6MWqN7NiTf8idfnTtkYQW8VZyvTkhTycJn2R",
  "key17": "2Poy8oDv9NXgxnPVrw2NVLyqRf2TXuTG4euCWyWZzZ2ZawbcfYVpczqeJp2vgXRZKnWGoRoWYeiSBx9Ut3bdcXBn",
  "key18": "4daT1x3U6abiNutjXXuoTrKQM55e54h5i85wzwegxudZP7f8228W3bgSLY6NahS7Jc92a3Q2g2KRZM3DMLVwGP6a",
  "key19": "4HMoE2izP2vPmFGX6EgjpqbM1Lf6yyP9c7RiLNbEBFshcioLzUpWM8XbAPLCmCGCvNHF9DqHYiLQL66qcNZmQ5Ux",
  "key20": "64LPKUMxLi8vUFNaDvrS8rTZ1rVTMtnVgrtXqxGjaLDuijN2E2w7t9ySGyS1hkNUSoh57k3vCQQ7dQcgg6eASm8k",
  "key21": "4Q3FZXoFwCdRwpyeSJZFvoKgrC9EutuntthVmwaPEPjMTWNiEvA6ijUP4iQUEGaFMz6zh1sXre7XAm5TrMpSFsoi",
  "key22": "5ZNb9TqKNNW5Zaoc8M2VmTYcUDikQEtpF8WTAKjEYeB1av4dTa26LgN3WhXudcTG2mm3RNDu7VhG1YVvMqYH4Q9m",
  "key23": "3X2GmGZDzx6fZQhKGaXYNAV9FGMdw9qgNJs7xeVcLhwsMiXgubmvcP429bK2m376fYLfHV5F1iihujBe6LJT9pqB",
  "key24": "42u5vn6aegDX3P9SJ5N9zBKNQpw7HPhFHYMuW1KL6osT8nEga6b1QmxGKczMmNBt8zpTBMdku3ShrDtnrve1wUWD",
  "key25": "iiNsFVgnX5DanceUUnX14BQJBpi9p5spFxAhEn8W7iWYnws7sD9xcXuS4m1wZidp4ysr9vBvuhxP9cU7N3Vq7JB",
  "key26": "VjT26assuU2vYEZUbSFi5mGqhYzsvAreGqEL7q2ommFaZVh7aRTiHbMUvsNBaHyv4w7LsRem6fLn8gvxqQNoJYV",
  "key27": "5Twqig5JmEZ1hrVDPX4j2Uh9j78uUVwUp7em71rTUeKhPr8jPBzr1xUeye4xsyqtEmM812825fUdDQHNx3nc2hme",
  "key28": "bqdQrASK5R786QooZ8V5XKQqG5daib7nppD6DRypGsDQAsT3KzQnSP6DmkL5vywAjvuJf2544E4kWzwPZxY8wVn",
  "key29": "37iQgNjLdWVhoKcwDu5A3U3RQ7cS35bauTXvSCd3FYFxezzi4SDni6piqXu18FEQMThtW59HK4n2uXtyhC9xNn7n",
  "key30": "e5GPuNmkz6cfmPkCSY3brRv5GVadvKNEfcNjGrZZfS6GVcTTxzHCg8YPhstroACFdqZcL2BDGqtEvanbeQdEDMg",
  "key31": "4dEUrXurE6jrvnRNDa1CDNCAfGaJHR2dTwJB1Ek294kfocpF7aqvcEQvTzDXSUTHSdrHK1eMximRZnEQTSJpx2p8",
  "key32": "iphfwbVAGZPKVLQH8BSUPS3Jjobw5mFCoMj9zzzsZtLvbNmNWzoZrdK7oCMsszTZxFbrRRGWbBeNYNzSMvtUr92"
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
