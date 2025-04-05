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
    "25tmJuUc2sD6Dbf5k9ZVpWPjBVySEgsw8cH2DqaTm7RbheAA32u9dM6ssNfcFJ6HTF1iZ2pjA4SB9yWRvvKbf3TM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rCxn9hyy8wyMaf3Vmw9bgNLxrUxdMjE2L5Fi3g7pVabWVYjtvuatwrio53c6CMWuJjT1CbJxQuHHCKeep69dmzk",
  "key1": "5WhHmoHdxQVCTJqBEURb2i9xvjNuSsGzrLbpH9W3iR3ttFpiDbirYoGqGZetEtaxX8HU4n8syfV8UPkb8wuYvSi4",
  "key2": "4DH27HxKpeERANmSuNgmTySbTkcRKwRXLRobZZMp1Ht9SaUebMutGKHArbqPDooReQ9Es8Py5tjxtRhy5gNDqpU2",
  "key3": "2hz6D5kPSW1qPNFqB7h9EDkYSbeoUQwMWE5gAfTns1fWLxHPZXvrMfnYNHMZUADYwM55BoxoQ99Zg2FtAWp1cvVi",
  "key4": "HfApG5TaTGjRTfFFs8pqetnnTLDNnUMnd9ucTVS1Kznt8E2wdvzfRN5oceSG5bVMrHyFmPqR8DksLiYTDeQYxqQ",
  "key5": "2JPnpTG5csfGkpPv8bXrwan6BxVwPzV51We5Wd2T8RkU9QNt3yLcgmmkKgbYPJthVvsKUcK4kjYtZDjtjScGJdtL",
  "key6": "3vz2j41PaoRJ35nvz9hhhd5Ff5UrrmRbj6zuhsTuqrWBDZBGwqRGLkHoD76toR3etKY89oL48Vc2d9A6QugbfVmg",
  "key7": "374HMU1y4teRER6XfrJys3qU3LShhRtk1fiir5mZQfhKQm4XegCfSaUpFcNXzhq5V85bx8qvEzGC1Mmd8UsGfmPU",
  "key8": "3UB3iBGA4yijL7NUBXCJYCDzC8KY2STMCXA7d2TDb92wPfhF9ZTkyzsRD3VCcA4REKZ9CVyb5dKAz7nLDxrzXnTH",
  "key9": "2chEtdnkqbSCCXkyvNeWYUNrGMbh9wxEAcu3iYPruHGcnx37DEh2XmzE16SMHw8bT7LPB5evWiYMdKnLJk3XL8HE",
  "key10": "5uBL7N2TgBKbaNFqpJJUqx3RMHoykoDasTBYTrf5uEAaJAZBc8nwwCzxkxRsrUHT2vaDR4Ev8Vt5Fhoc9GnfqTPV",
  "key11": "4ytpXEy9hzP6mm8UVG7EPvMUA2qpkxHYU4Drgv4zoob4atDbGGEqPM49RxME1vJo26bm4772yq4n35quQZiS6Fhu",
  "key12": "3PGQByp6zsFVcVCRJr9XJhUok3P1asmXVoc6DEN6NrvM7p3Tt7b6nEHZCGtDbiHMZt5cAGWatTFyZtNJ1dpRuabF",
  "key13": "5V7fqeeAw5YXn81ZWTefqXDDPueL5vjgj246gymhWy1qvbC2aKNEYhywmPg1BseGtwV6giT3XyXAmhRHrmfz91x",
  "key14": "5v6wsrEEjgPo2SotiStzyRJcooKar75K5nMiq8iPDeVUHa2nRnVi73eiYfRvxrQqz4mKy4xKBqzhNuQQqcSSSkGW",
  "key15": "2EXtZKV6E81XHfmCgff1PHAWAVVG4n89zLmYq3WdCEfYqmJUR3fTrEEzRsPYTU18nZjPCpz38gSB5v163XiNQjQZ",
  "key16": "3wkZ7Lp7GWsj6Qb3KocVK68Dci3574bm68xFL85PkqLLQFegM789pwwvkz9BgnehaEEeNJvD7hyRECPV1yaP4xde",
  "key17": "4MzfGJ9gEuwLnrWVcDDcmjWXuaeTPCDDNpipMRx4YSd5YgDLrsYGjpAkEsoVvnsGzZL7bGNRCB797LAeqnVRtZE2",
  "key18": "44Z5EBjfw1a4SFHyDFDHwrRiKPEtD8W1fQSm9BjVfWLvTVBmCv8nHjaC3EESbeTRiVsNYenm2FnUZwqFco6WfWNa",
  "key19": "5DJUZhix5vZfD5hpvk3RGay9PWmc9GRoi5Sw3Vwj4Sig4GSwMUnQxg5H98QZkHDogcW89abZQSHDXCd7Pox4RSDi",
  "key20": "PqCDYBTUe9nq2w6WJVLh69tU9YGfqFA2bFurWXT8qxESvRhUuTjR7P9aPEha2UFww2GaBrqNk7mPwnPWTbypE33",
  "key21": "49pREcSkc1okb1eQkgzppz7YyFecpJ8X8YwjK2TwpHe4BWbgehX67Hxz1mvtTDb7G7EnoT3XuddFfAXwU3e4ztN5",
  "key22": "5sLtGYACSy8t5tyFyMwjaWFAvN6vWRaPjJ14ivVC4fCJh4NqGuLv4pWwApQC6httUKoMRr8eZt3PDhB5nkjbEcqd",
  "key23": "24MXfbSSaN8kqECQUQbfEn49sa9MErJXgrHepRACedNsWBjRvLhJ7RhHd6Wvvi7FPSEhTmpwnWfNLCdNg4MQFmcP",
  "key24": "27GtQMap8muP2mTVMnSPAYMk66EeBPSHceyZi7NijfmnxCwY4SEDYf2NxiSvzKTaBg7vKYMZQgwqQzpfEukuJHZ2",
  "key25": "4VDyUcFoSMiVJAQNVMjYZaoLNAzGNj66FSfiUrNvqtPX1eqaRo89Jc65XmawDLXNvvdyyVFWCirpSw4A4BxoP9tu",
  "key26": "46AJJYsQTjzfp1yATLvSKdZcetoLnNgeeShEiaEpUEJ3ZJpoYEGXFDqSwjbHYbtePfwYNiQMZwCvNp6vaaakoe9S",
  "key27": "4ZqXMGobs1G3UTj9JeJBicheiw1qyRR9wes16i7VeUNVNLHGXnpsFGy6ewuVuyNnUU46x4zXUbZTihkFeoPiLhw9",
  "key28": "24hLBMT84D5yZiMyuW2BKtvYpD8CcN2xBAg8En5Xu1LafeGmZBJFqn4KKegBEukSDhzfyAWAqTTEqerzfjYoH69w",
  "key29": "3yWDAfUNFfvLgr8b2mox3wPR1qktzPFJEAy1rCCLHkKpmGRyE3bs8u8N6DG76329UDNxbwTHYjotzoZ43T9u7TPZ",
  "key30": "2f48A31uRN8U2MxxiuKvqBgTYU21AprSs6vKapoxmf5kz4FyA66tJc9CzYNeR1mJAWUUyNURLapYn1hFEwr9QRzM",
  "key31": "5DDHQyGNQVwL9RDePVYVe94gjdsj4QfWoF4ETC3zXaFB4DG299mE32dU38oiNa3TeZg2cKTsGPYUhnuCcLAvMwm5",
  "key32": "4VeJZPkEHR7wso3P2oyjKQTmbo2RPhc6kyozp7fXdmWjS7iYPxL4cazYchzecaZkUyN77mrayyGBcLAzqovb1y3m",
  "key33": "649KyWcmxGXq24FXByBp3P7yrkHaWvepcV3YY26jvN2H4Q3kADvtVA6bMaaxrz7W1rRUpSDmXZRbNhUzAJpfTPrJ",
  "key34": "5wLoRpn8pRbAGjRj5waTj8DTCqF7AVED3NtJENjGWXmpyebVditUzUmQxupyjPGqb3kVsz7GD5Vse5FAWGpnUS5u",
  "key35": "42qp76Vbb2Ttuzr5CmbkJUpMczP7KhoabaRftktLbXW9eTB2MhD8jtD7ch948XEwnwLUJFVHexiVVBMfoa9Pni45",
  "key36": "3mLBvRgMR6ZLaJ1kfbTVaVnLkUSe3XK2Y8UBPcoXeQGqgEhR4TKoi5L7e69D8P9r2WZ76iBPa2L92FZiTZyGgF21",
  "key37": "5oxS1zMAVAYPmcF8h3Set36FjDkXwNavjxWgujZRJvUS9G3z2AtCvBwka1gwupDdYEuGeKmvnpKwT6LY7sAVXxRD",
  "key38": "3ZyGLZQRMLkD6cLN6kJiVmXyMrjw8RvTiEGzSYG4XsVDe3tFLyGNdohJYKEczARLwFdPhiybc9CkxntBZe4YFmnb",
  "key39": "CQeo9NkZh3wa5ev39Z3oSJccNUR6u6BmMXWnKR58e1dFYzw6P2wa5rm2uTXoq5yekEhXFiQAHtSfRNZzgHA1nSK",
  "key40": "3frxXJLMBWQjnvn9AoBcLCnK9jJWvWpwqCU5oaP25g2hiMVJ3EpSJpR7wzgvz1jMfKGCZR3ZuihcoZVRdq4JBkqA",
  "key41": "2xQbomsDWowinEYGACgaqpQEBNATD1VSQpmj8iweV5ZPLkQtYMCRNMtL2H3MSqAinLNCSjuSVuGcNZ1JA6C7coki",
  "key42": "2wqSSVezE8fibiksv668JGJNfLAG8bWbioFXeTBbbHvBKF2fxdrmcSNsMLBsKyQEdzgkrJki7WP5oUEWwzUXwAVY",
  "key43": "4K7UZWcHFbSREu15sfJbh6gCitoBz16Ji2kGbMXSBbAkprG2L8i5sFQT7zHNQWgGbBqjgZst3rEk1Cppd2KP3Fcz",
  "key44": "4Zzk6XNHMHqcn8ruAybPxyYFU11noz1FCy4MxhR3QKzAEdtkjZ6wumfLUgjiZWzELijhhssTkYYrwK6EBdMFWPMG",
  "key45": "67p6VQiNyNkptvEMUNAQcdaashw4nBgcBXCnFR93em7W4ZisHQ23TRgC4tSNXGt9JacghMhHLkU9MzQRrXzG3spN",
  "key46": "ScD4KktgoX3NejSsBbMfTnwrBTto1YgN8wvawcmD3MQykm83dhaxUEzsMWT2QCHDY2ZobzauMFZb4DuSUEfdqAu",
  "key47": "2BM4xatHCfA3M2rtSAj8C8PStyEZBdCkBVGKRVRh9ZKD5ouaMpt5Cs1wfrRvRvVjZ5NtdAbHkGjieBqJVHPQftDg",
  "key48": "2U7Mt82yUPXXVkfMpxj4j9WnqC797mqRBiCesnxdMHoZs15ud6vaSZBTp6tkyuGPTdmpkC7xLm2QKMkhQp9UtPd1",
  "key49": "tg2dyWPrwqppTS9yFeAwK71VUgNKrt2Cuz58L8n61ebMoyJEHA3UYefduADuWRWTjK9rH94dzSHnyCPgPoZkReg"
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
