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
    "3k1v8bBgxFk7MRuTYk3PKcCDsk73fxU3JwQ6oUsVeuUxb51HYc8cMpuAenZWXYzks6wgoEKhXNejZk1ywThYa6pA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UZbZcLA3yKiaGadZUcGQ254cYt2E26unP4gbHZnDmqh3BrxRsf7q8ySfvuoMRdnDrvuaUzgmt3JSxZzkoAcjeoP",
  "key1": "2yXxDuxNkCzzTezBuwTFk8vysWFuZGeNnwProPYcTa52rhU1VgVXkJAjdxcF7ixvtVKWg6XvNJQNdaxg82zyVx6K",
  "key2": "45jBExvPe2ZMobHwdqFNdaB2joXMCzNstThWDJm4ndrdmj9QuV4Jk2sNvEQ1c97CgCmpSeEPCUMuDbL5571PNmxJ",
  "key3": "3FdTFfX9k8hUqNZrJUqbdxKRnaGrkRzzEBdQhrUfbn9mbardJ5yMqpmQ44A5cS4iKcgRcVH9r88M4nhC9rqXpr1P",
  "key4": "3kuTvAnyywRKESm1FK1yy6FcPbLHkmcz7iwmDWPD9srBzhXxkESGYvAqHeVfuaacXjKQqeQEjJj6vQLAzPF5poBE",
  "key5": "4UqnBhJmxPokwuZj75WyBBuvC9LLinFgtLnmaSXmRUaHHUM6GKZea42e32nPKFKPEBnvfxkoVYDdhnnLc6LeJZse",
  "key6": "43Q9HF1bkxhgwAApnmq4NXjfw5VtsZatTg94SqM4srqnHxfDij3PZeusXNPPFY3a4bNihoqdfyXUqMwiXCcZ8rED",
  "key7": "53P3jyiiahwXm1g3m8MNzi3bYnazvBMUdvArR7V7utjykyZDqRNpHW9hctkNphUFaxo8RobHt5NnLdnxQAZrPXm",
  "key8": "3hVf4YS8vsXNLj9M8d3jmzhigthAmbgi65SgmUED6YHNmfvgbYJQ3Q3EyF53A7jm5SsQnLovKXhUvLZv9fbFBDTQ",
  "key9": "GnZSXEpi9XgmPuNDT5S4UaUuwYaoZgUtZYeErAmniVRdhiGxh38VGcXZfhVPmP79zood3wFibvMoQrZdsJHhJDk",
  "key10": "3nmkUYMiYX2zFwtodu8SSrQw1z2cNsERgm39qmtfWpY19mJGt6DXmabKp6Z7YDjRswFZemd91qcoh6DxRfUzZAEa",
  "key11": "2DdYNVtwzSUqXA9QqwP1NZsCp9amRBnRwL58yEYnQt2oavJJunMNXpXcTfkUFBNHwsnztu9AGbFhp3qacsEYoAFM",
  "key12": "yLnnd2De2ALBA9GegSRr88q8J8MSppuKvE2DRCYBoHYppKrA7K4H1n2jYAtka9uuUswsfNUzsxRsXPmmsm2Tu3M",
  "key13": "2CiaVrrZKaVWJuzB1dDjMa5yRCQC916kdBPhuonDPoJkaC5cT8nGyD6YVoTfH49VsVGSZhwfuQ9Zq7o14fPaTP91",
  "key14": "65XHQU3xp3QX9GUVNDXkEGEfq1WEm3Wjgk2enBfWaLhB5BgVYJhq1fA4mk6bNraN7aopRp1UrP1mvcKK2Sy1Pmpf",
  "key15": "r8QYhUrbyzHWJHVuQh4bPmtZobvXZrUWbNxmUXztHMPYrpCWpywxLeVtgFLhCfd55QZbEZ5RYFSMu4KrdwkATuL",
  "key16": "WgBXFqUJ2VEAA7Dug1u9SNtXpWJ8TijpFZbFudEwmxGFVVszP1cfnLWaKxGWFBLggUdpFVNhowZAcp5mQ8gjY5r",
  "key17": "3kjn57GAgSysohXBey8r9gujmPpK8uuNoTy5BFjnxUCuDnzRnw7PWfF55zWPy612LacitCrXXEdanqDxMVyA5okN",
  "key18": "MxGinDLpxhF6KkWigj6CKyHNNuJf4nz4jeGkE7g5HSmobEp866FsyykCnKDF1FkaUc3JV85bGCEwa72vBmNYhVi",
  "key19": "3QmMGkvvpmwkCwyUGQGfkNS1Sfpju3zq2weHzWkhrmeDXm9BWejE46jon9B9NPHFdkLY5PQZJPUGhkfA31TamQ1C",
  "key20": "cLny6WBY2H8q3wRwedNcnLecbHFSRWiCakLWxoGDT4cssSgFB8p4tw9H4dFudFL52S4pGLHWnAynEbzt7cMR86T",
  "key21": "3uewjdKNqY35fWVtoeBKLs5Wto4eNH1W8RmP4F2V5M2fcD9HsFSitmPKbQJaYA4MWSKAERdfhYNMPeexT2BLSmrt",
  "key22": "4VwiPv64SnWw1YDXEmNiWSHsEHL3jGLV3i9puQbwZUnn9danxhkANKnL58MLhnExuWG1qFCnnYTEnSTahoStkGDj",
  "key23": "2b79n3MGXLfVtB7DYcrm1uT3ucRa9991S3pzXbcH4gvpJfK3nAzepYQjbkEafZm5ZnwF2Efypv7iHUPDWPKNAjNA",
  "key24": "55vt1qsEiNAmwTeAEaxiRZTh4Sd3ZxVJezmfKmQ73iwBHFfPSXxGwapqeiQwxqDcy8WGujddN4FepSG8rvfwX4Y1",
  "key25": "DyBrhyLwu2kxwxCd2H9i5x3nsw2ms9sjFnEPTPpR8T35cnz2W38WnMDZoq2jrgmeFswTUNq5qFW2rrE1DHabePc",
  "key26": "XwQQBDmuDP5BYZhep6z4jagypidrN8TpsNDAiNhR5miXfEWcYCNRrzqw53fUGwedGuvXeVGbevAAZqFEyFovFuk",
  "key27": "5rBsf42Bkghj9BCd8SX8w5qvZejNLqz4coqtiivCk7otzKxuB3yf3q9tT5nS3sfDt1uS3y1nmqBoz64ceHRNZs9x",
  "key28": "4h3vQv8TCzE9LQNhusAvpdBtWWCzGi8fSiJXz7Grf4iurWUj2jKtE8qVaKKuSYq38o7oW3q5UorxJEJXJn7rtZCM",
  "key29": "4cQsqRmS52P1eKqMhUajed1ta9J8PSkx5Xbo7wmRscEbMFQVcAonNPcmGd7zBcgLRTugueHSJqPN9EKqiZDyC91m",
  "key30": "MyaNBCD5EvEs52jdmr5uGC6EWmvDaorAoyLniPgGMeEf2wZg89QWE4qLEbaR2wy2ZZptYohrXmYAdU6z687Zag8",
  "key31": "2BDRnLLvzT17UVxspznt4cYGUjompMTCNFAn2ty8FuCMEfj2ZGBdW6rm6NWpPg5XS1MrjR8D8hNFfEWzHTfRGiHN",
  "key32": "4KQAnsACKupFRAn6aYaaNuN8Bs5GF1aceupj3pb9EgCQEqK6iy9xZVP5W94WKRd3EFjrBjqaLpmW9zGDfq532A9S",
  "key33": "2nugeuJwaTCQjrzfx8vLJykWe4gHwSpZsq4cUwfi7upUaS1sk68VYn8duKjgAY5GwUyM7WKFZtNNJnTuJwFCpfWz"
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
