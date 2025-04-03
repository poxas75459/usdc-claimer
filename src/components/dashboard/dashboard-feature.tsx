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
    "zDTEdCNgDQpLyGHoNhajkRqSapRXpsEjsjTrJcxYyNtaLimkGxsrfb6N74weqkPuGs7LHhGHksmMujtum4ETiKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g41mh5hSPKefXAXoUP14n1hve1a2MDo4YimK2yxUYHn4JHuUvWzNpq75r6NGrxgsaZF6dNBi6zpdrjwJ7Dnam6J",
  "key1": "4XtGNdjvVaYDTwvNYvs7vtzM9t3qRMaerh4M9V7JTjpEvMvqmG7vxTNVbb2DxAuYJ5aDtrNqtxrZeCHy6VpbyjhE",
  "key2": "bC4srWZBFXBjNCYndUFTRuX2KH8hEtwYf1N4H9au2otgU2QwfYwy5R1xpz8vCDDykLCw6NE3VguuGDmC41Cmi5h",
  "key3": "65DYhJREz8mG9rEhVGN1mDWpypAe5i35unJxtiQsPoGk66US9Tnmej7puqoX9JxYGP5tG2woKzimDGLqPt3LAvZE",
  "key4": "5dRcc2GhjL521JqCSvcVaaQ6VyiwCK9mVwEwZnnaH3ZmeYMLBwABNR8jeppQv88HYFwqEUHL3tirLeUspqofXXQC",
  "key5": "3o3vegdLvK9mZ3QtTpfYwQLNQ161NLrRxkPbffk4N8TuKzqbQ62TUhZHrPip4WM1pVspMhuo2ZPVh919aCVAFWW6",
  "key6": "46b7yPZCrKLeNWLnBJgYYMjMTocpa2zs8E6DEMF2quymSjsGdGj1hqVs3Wn1td7ztWreh4k6UESMXe8LFmuMYY6e",
  "key7": "xntc323egHHUxH17xWpgndWWz7zq6FZEv2MRW8thF9PNJLKtFFMkDaXZGSQS1nBysCWvKrD48MtxghnXK4SQwMt",
  "key8": "2ufrmtfZsQwGtJEosQGx5TsL6U128QtCoAH5KU7omN5HDRS8zwSAA4gJYkUt4RrsJ3dr7rkcXGbtDzdHyYALGjN6",
  "key9": "23FDgg34XEtnmzLpi43sauJydxsMrWymXL7PdPYtpjNTjZpn4kXx87mn3RxyNTS3QjAeZtdDTzRiiDttiX8nMxsU",
  "key10": "5QeNHCBceYCB54QuPWiJWkLLbk6q4b4F5JuXne4qSyvWoDgtWAfPpC67MsiZHCpw6MVTxenFrxvMCZ9P6DqUbo9F",
  "key11": "4AZbqxCnEGNCMrCvD6ywYg62WZejGNbzBjjodBxY8mkfFny8yMM1HJdUdS8bVEDjo2MSegDcKuBTwD8m7XRwH46c",
  "key12": "3fcAFKEVDnmdwJYNj5yVizQ8nYguFf7EPypXUKLwtwB8qsKavh5pSboVWeL4MB8M5nB5EZrSFU2KtqLixAAaBu51",
  "key13": "iXyFXL3jCU9z7ZH2DerWcASZX5NMJiPJitxnYAYi9N5jfe1GRwokvCvpRDQYvSUJbcHGmX5ScnDUsW4Lsxnf2oz",
  "key14": "2tKEBhos6GLLsttwFApXMivBxv6Rw3Mkf34Qe5Bcu4k5PXvBCHxWvFck15Rz7FbV7XYmTrKCJdAbHqnkGEq71eRm",
  "key15": "5CMfPAwMpEp6NnJznDp9nmjbLUjzfTyTASqvUuNWYqzb3JPd9GnCzwrAXAoiMFFbhpUSqtB8ASNoaqaX3JYnpNPS",
  "key16": "3DMXwLschcng9juM8Uv2FufRHo19VATok9K9WystXgEBSGJacPsoCoZfeK4qggS9DoaWSnQu7sSaU4UD88Vuyprg",
  "key17": "5p4pEroU1SmuVt2fXQQ91Peh45iXUu3Z3XAr23epR9zFDyZJgspVjoqAtXsNRJsNMmHKpi38A5rZjfpxKboSvGTf",
  "key18": "5VJudKNS6KzqKKDN1nDuyZcbiib1GYeg3i1d36BWHt3LgqrLDpNoArPwWqYtTEJFmuQmMqYXNKUzVP973FgHhBn9",
  "key19": "5ziA6ogSms2Q17XDeDfQtE6yQUMxVcaPQffhc9iWQjNUsmb9Wh7LH4a6XaDXGNyoY7iX7b28z5LFc7itaCDyzoz9",
  "key20": "3waj5bUHheBT2vi2m7bRz7CNqzJT1DduuTx7ycN4iDeuZnddSedgTfpjZjU845hshSKeebHPHMZmWDmSNJ4SfnJk",
  "key21": "4LzP9T9ZoJNgAToNDw8EegT4iEvviE4oRSDF5NG6G7StSaUt9HKX7VgvWrhPRUzb2eroSdfQymTWi29auS7axmo9",
  "key22": "3kpDwabcAHia4C4irjqMdznjm2fGCF4AdS39MirPPgzEPrBUTBER9VEcV68XkTvk34G7E6D6HJiP3GBiLR7hr8XE",
  "key23": "5teNHGU5iF9KySiv9jEYLoXyDgiJVZq5PNdKsKaoDrcdyEnq2x7x6viL5uHWGRrLTx6GpjargduF5Tjsu6eiZpMr",
  "key24": "3iF65dya1pVvTxnaHZ3FXThzaCMoiRaqn9EEkvAAaDkcsXHdqBLzxCu9NPMrcxjEcwXcSKcytkrGt9q6xFAaoV7",
  "key25": "24xnV2BKkwPjzSdPFqprEEtec7cSd1dYK7t3CREBMPnTR3fqJR5Rrkc9VHBYK3uZvG8FrzuB1sfSa46k7offdczc",
  "key26": "3EKaDR9MvtBE2Xe6r4jkGbTAatzhnpo8exgtvXuQvFTLxCLUV7DJKqWCcqmx4RNqs2WKD9d89Rq1LDpwb8sRC7vB",
  "key27": "3rwsxCtk8Re8PhhxFNo45K8pFhDHvQNB7iUkXVCmoYPCvBX7Xee4ZjSmRAvjnvbeEdvZnC1HFnCb4J3bZapX1Zqj",
  "key28": "4ZgMWHRc72JU6nJ2fniDrZUAip4vXXtYg27DnPoAwao3iDE4ECzkfBXjkp6nKV4FTLfxBsyRM2rngL1u2ypZtwX3",
  "key29": "2hP4c9yjLRBEHVBxKtMJuywPwbXn4HYgKVnoYuMjj3XVPRPxoKAuyWHJ8jDVd9S8xfxokZxWH2CPPahjtd3f1iP2",
  "key30": "2Y6PdDot4C8YJL8hjR92N5m7CG9cRLjVTodYCKHfzefUTfpTQxdJUijmhd9Ji9kH8CMCmg8jo2wQYBquV3fcrHNF"
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
