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
    "5ZvqnDx7tpvLmwQXoydPTiuVZigyVs8CpvkhKKWuKWnXpHNDQxAcoAeRnsFRhpZ3HGSV1myzCUCq9nB9d6Juqvug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YZETtLguJvTFxw25fWmsueDWLR1592Bgkx9cvxKdrYYs1ptQjxCd2AcZx8UwTsuKabCMvYChkPXGaA7hcjPo4PN",
  "key1": "4Kyt4AjK8yPAe8F8WJc13BEoAS3mFLpQhVgiRfnBHQQaSs8GbG33kqaoEoZWxcBzLyMQeFr1U9objQXGxhAy6WAs",
  "key2": "3YyKkt5MrFVBktGfrPqg8nR3okAL388fXmYXUirrMb1RosDh2AJv7YDKxrvfvaNdQ7PUsFNn4PLUb1LwveYFGgys",
  "key3": "3r8y67RQqJcNksLTujs2okeaK9Xg7VuKoqRot9g9nih7P6fk7HJ4oVyMX33h9DjqiEYHzk2uUudDRAC92cbCLztF",
  "key4": "5qGKdPSi7miQX1MGGwtnSbbq27fYvECdwAaKNVWu43RFwHN7JCoUhWCPXFCNJNUzVSTQFBQh7t6qSCcjoQDjwcrb",
  "key5": "4Sj13rWqDkrxk5tu1XpzMyiGRBpwdKMj4iGWBY5FwUnR71qDTR1nWiNnrJXc7HLcUtFMvgZACXyttPHhdxaYWTmP",
  "key6": "41fgWZimokmmNz1ChmixPWJFBKxZS8nzTpAaaTNRtmkAsrMoUNnoGaZj82jaHquXnuSjNjmiwPM799xbtgaMqNUw",
  "key7": "2tWbjYaj4UiNLtuwGRuQ6cQyrsAep8sn4upbf7jp3vR6wTzwZGQPvDu6nyjJ9kRToqZW8YBgPvr3KMJdhjVxWtxy",
  "key8": "2WnsgtK27jWZTh4bvWN61CDjCURjfGCfS79h8gibcYTdAmwDWwi4wCqYQeqC85SMn2WVZQaBrfZr1VvngpcYKd9X",
  "key9": "22cTpkTNswxnuWky4PGGyh1wduDoKqJk9JY2hoySceqcqwmfCrmhKhwcNqgAZQKxk4gYg42XQdHCzhVjvRdjsGtp",
  "key10": "5iL3rN1T65GgG5fyWKis27HstPLcSCV9zt2rcTsmQtXUVvsXJDzvA9Y8Hf6DnrB8yPwxMHKJwgZyCMCpU8tBx36W",
  "key11": "2m2jTQKEs9eb3CmAxtUZuHLrJU5pfoiHhWfw7WeaHBrJYVJs8FUXVBjb4y9MpQGMKY2MH6eZedCprXmShowo56eK",
  "key12": "3dJeRUiG9VSD1fSPFpJEFEP76HWTVU26L138tXG2tKycaojDysp4pSoZ65tfUrorSLrGRhjisnoJZvHc257uYH8G",
  "key13": "BpQrbnMNpZaRtJhNbsacVD9vTGxA1fVkRNHQWjhceZDbTjVrjmQog2S8LpzJ9Pgkbc2wDqLfheRncPkvbqxCDp2",
  "key14": "4Y9TtbE4Aee4Jbkq4xyCbV41ycKutEp5hKhiVCGdmbV8PKZsiGkSGLaWbVENM9LKERiUBYECkiAQcw2emt4eiHT3",
  "key15": "XM7w3Zx1NjoYJvSTJ6pe4YnDZbJFmBSEP2dRZhxcTSaY4cdt8P5afDqPd5JGr9JvtJWZNiTMXTVpJYA4zPFrC6C",
  "key16": "4ymB7u8ZYVt1pXGmwJALJ5D9MMkpec8MeM68QvYFeprGx3cxa4cnhjn8zLNiZ3E1nLWFkiyTQiPLq7qnqEsLpBYw",
  "key17": "368Dfq13P7f4KRgF4gNv56Zwqv72GPQzuMPDVkubF9gJHc2M6C5i5xdNrCMYJ2ciiV2sjTr6fSYuBgnVMGuEfUCu",
  "key18": "3LpkHoJhyoraX8zPe3mivrr9gWP3vWszBVny87gkrsXXtRVagu3YHsbbBjwQhjxKMhYoyZygBbPPvEhpeRqJ4Zkb",
  "key19": "4DDhv6DaPFr9y3nxSmZPfQV6c7gVyHDvTCYqqTu5wnXvV83dumnNr76J9ExNd8bQkkmko9ko8yvjQsQrd3niQBHk",
  "key20": "5VwoD2Ppr7FMFGmifgoZNsb1ewvbirdraYWgVS6dYhqcVyk2b98a9byjZoYa59dCegsjLDgMGg9TPBB8AHSCaATj",
  "key21": "5wgiryd2MhJVBepd1eunADdQZNgZq61eX8xBBqwtizXeCkXh1u8GiwPCN5SvYtPc42EhN9XFCW1TMGrwjeW3yPa5",
  "key22": "5HpnqdN5TVQzoqEZNaErcM7PHz3jtx71QrGMc28myLXt1ogWmEtzQPYUg3TjFwkWSXG3snVFdXsysX9qZ1qWsd34",
  "key23": "2EteH3dgwwoqfKqnYhPj1rzjPBTLHJVerpjXacG4wnP9vQwPbVVZ83xt7XXHdfpegTVdjfpCvZju2H8q4e6Wd1qz",
  "key24": "4SZsSVP5mHWnqQx9fnGoERVFJ2k7AQPgkFxxULeptrZr1egfS4CqkbTEDnpGiF69jUTMLUmNXPBPn7tzWZD6ihp2",
  "key25": "5bwimdjPWis9vsiLe5qRJkSMfpnbWcnLr3cyuc4spajf91EtsXs49Hn2GqHzGwjTa6TLY7cpfNCi8obrvb8ye3a",
  "key26": "3TZsaKKTnn2cqY4zjiUEhF8WSyjz9Y3H9FAtSUytGDPTtKeX9q7yzZTDpk9RxsUpaKX6vGUMJutjoSTymKMy4XGt",
  "key27": "3v4Bb58HQHZ6Jf3Mdkef1yffegfuTxcGURfDWTr37H2wENjjTJe9paCmVRowNSucwagjJYmxGDJFpytzY8BbSF43",
  "key28": "2UsHGrkzu3bLaaGAAtGeDLYwwGnopY2SzbQngctRRncSSYHDbSc3ZxjJGT4DQZzZWE1HA4MRqfMorDEQQKxiJuHx"
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
