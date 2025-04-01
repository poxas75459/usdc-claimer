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
    "2BEZketsYbvAeX1WHTiEuavDPiPKu5hiqpsSrvCu16rRzrx7yaCgkwRt8ATkW115JG3kKdm5yAmdV5tf5yh2La4A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QcrCGneAVntNTN3S9CiCGW9A6ZUqxZbhc27jSHF42Ugj7K3oc2aPaeoLnKuD66fjj72Ssgzd4kLyRcziGkXdLPk",
  "key1": "2RvuVdQkdX7vJ7EfNdxKTvgc2Cp4wNUMjf81Hh3FcCb1u3hnUu8dBErzye17nEkJbcb2jGB9avYHFgJWcy3J3aeP",
  "key2": "3c4PXxzFJMPMASHp1B4AAtUYuKVMB4E1frdtr6qEoKobTKpk766n6npXtipViogyWkzzgJ7Gp8Q3ce6pmggwejtZ",
  "key3": "5SGDk3SWLxiqXgRLYQhQtCVmSofvYPU2znXQJvc3na11maJR82daEvcD2Ht3iKqeDxZ67QKVqYbPF6i1XbD2BGRL",
  "key4": "bCwVSsDXG21FYrKrSfKRf4F7qR3JnYxUfFrKnVdHZhVV3cfzCH2Bq1ueuECQodVNKmLgdGi6ffKWHCGrrHSvNLL",
  "key5": "2NjJEyz9QUz2tJthTJyjPJBQiixn68ro4njg1NTLkbSG9UwqvK6UjCFWRHbPhbDRzg6MxStbyuCxxWK4yFyZAMzP",
  "key6": "C9y2W4SvL5TmDex44d5n4khmTDWU2ZUfw2CHfYyRPgiEMF6rWPGFwKv5BaAo4K3WriGjyqukptEgSMhUsquTQsy",
  "key7": "26Jcky7wFFba5CrXK6tDgfijCKAfVpRPv7mMveEczUaTEtH5g54YkDqM1sJKxAc1ryJipkMQURbkJeHgHANxJ8Gc",
  "key8": "2i3vbupRzkJyDhWPC5c2BzaYPGn25HLnLr2VAgtgd3bV8yP2JdAvh6yxUTixJPZELGiwGQQppsLbNsf85fwouoSG",
  "key9": "GoLFNCupgGhJwtt9k7eMucELVf6U49FqicyG6mMn8RNc52v4Ez6g1c4Dz2kfEZjiPxAH8DiST8dwMeGjx6PsowH",
  "key10": "2kLeiXuLNfwky9c9t6MYiGgPaaqga8nRXS84U3GEvtJDwxUurMqoDs2WkQoTryy357Ub7JbUJjnZTwLU6wwyEuLp",
  "key11": "2hwCCMHqJtXHLAbzJDGCiHg4dYpTjvGPEN714QGrLX1xAjYGzNjqyNXq85tgCY5MouWX5n6a11raV6JghRCQ4Mfh",
  "key12": "4AjF8bX1oY6cU4t9YjfX9zwRNyF54niySiYvrWfi44xPFUgapTCkB6ZnzrqGZHoU5tJxdwCP5XhH7JCfagpRwrhi",
  "key13": "zd2ujUiraHXGwP1XQgW4JN6wAWSKKA2XLTSnRmvPHNjMuXAg6AuvNLCHf8TNtDh89Ki4qPwxcmdM17bevXQij47",
  "key14": "4yVM9pf7bXpP9KcPbmypDzBerb6S6zGZf8wYhCwmdizXp1u5wNBWCeBWPntjDvhvyt7TDsu2YUuaizS9DdUkfbiN",
  "key15": "22wbo4GTSieem7rB9p23kfTZpQ8221ZDU38EuVPss236bmAxk1n6t2ydLc1kvE5EQh4N4FReBhedHWtDSwQL9FVf",
  "key16": "5z58XhzqmWet2G3gP9oBY2HA9zk6wnNm2E2zELvUbfJ83cWWDp9dxMJjtauv6ManKFRZCkzeX7dps65vqoN8ZxeM",
  "key17": "35ZdCNGAjmerBMZtwmyp85SsABzmiMS66GDmNQ4d6fugb6C5Hy2mdhGGPfESNQoYMxVpAaVdWGcCaPkRUtd9aGLr",
  "key18": "2by2x8SUeGZvC8dkdUkcm4LY5FAgRbHZJAghbvBHxKPoReZogK5A6mg1XHMAXmUrvLkWwzyb17EVgsuBtkzvhSZC",
  "key19": "2xa1reJp2BH4akTBgC8FJrDJWxhYxQSw8XUCAASB7xfpgKiGqNmZnuaUN9t2zgimoKvq5TnML16VR8YTnCDacbBF",
  "key20": "4vZ6YuHuxXynJgZLcJEJjrrJMZpJCSYtwBtdN7gax7tXuW7QWCXYoqbEgV72a6K19oUHRKMuUTavzEb4zsJHNcx3",
  "key21": "5VNQRBJ32ubZa5MuVgc6YK2CLyqrx2RkNNQmbENpVA8ZJR7SASWtxA6pMthsTuh43EgVk8aYK3BPRKTpd9YnHy7z",
  "key22": "46gBPtbHk5F35FvCM4QvcbZYnZTdChKhZsfKbacwrhokusvQzZXpwXzvVAqvMuH26SpC5xpfesjHQTiot76mrZpn",
  "key23": "5RecL3y2Z3SQukkSjekmGe5pzCoT7Uu562hvmW7jCooaC9AMSfGjBHBnkGpkN3Ku2vLvMzpCE2xk1QuTVZ47cccq",
  "key24": "4Wj79BU3i9q4Xtd8f6MZTXZBmHfQoBAoDyGm8ZJcQLDpcu4bLxk9Duie9AEEcCc2CfMFn5RtLY4DpoJnYDUrjsng",
  "key25": "5Xbm9k8tBVQ9oSpvxrMw8Y5DhY3VCniJK8eoiAALd6BVcavnG6TuYB4EDqp3SgqHZ6A3zSzq8jiLh11NyZ375iHE",
  "key26": "45xzHuHuoknBhyZWRkUuTCZxD7arUTEEUnJnR7NzUw4oTCCv7zWdMKaUnM7jaAxNP3F6Zon9cCtWQE4dXjTcu7HM",
  "key27": "4Q2oxTfppxMUCDyQGFtTqqxTWtkCP8sRPPszZfJL6xf5yhywynBvcKzTnASyRYgbpCQiyksPquGx377iwt8MYurg",
  "key28": "dj2LbxeGSxZrYFPYyMt383ox5WR6Ri7M7r9Z7N4YBwZQQn5QAoCLcDCWFpfmpgkN63vR8ogeeZvfoqGVoPp3u6W",
  "key29": "SsMwoFb4SPomC4qx4s7tLXKLUwRWey3sTF6CGBbxkjfrANUfxRwKjTmPKkAV8QK1m5DSeazv3YDXqgDEsqxeyDf",
  "key30": "io3g8mTAsqoryvdFLru55NBTeUAyrWLUX6QHRSEqosmFNDzW2uQXu9ifYQuzABynm3wnkmEcZa1TKWyauguRwQa",
  "key31": "i4VSuSAouRnvFAfhmx1FakzveAhdMCrbjgRVtGE8QwiUh6fQWkQKVS47mVRkchrJjdzuJ1zLLtRnE2u7sJvFYqY",
  "key32": "63mEbdQJs1UBGnUhqhmUu6DVh8h8boRLX3nzaV4emGUxJqnkJmw3ueaseYeA46n2su9ttYGDActnr2egKbNcHf9q",
  "key33": "5LWMmMjKa1ANnknD6XmResF313Ep15pwwcfbU2CUeRAXCxBHpTRPQ36ZbAqKACCB4UxSRDS7CWqfgKBVuZZAg9by",
  "key34": "28WPUhJvpFrcaHA3Npi7cEePWKZAHj8WvvVgA5J8smVXE5gJ379jLbu3t36edkbGktYYs7SBvrJuFHtrEHdViZKZ",
  "key35": "4McUEdtjH1MBkz2HAPPZ9bR8DSgCQs9nG3gzFpy2WvPdqsUM1vMjvEhBgzRitusZuKWC6riCaebuF7ixdCXTZRFV",
  "key36": "UoeCXhruALmAk4Qu5cX1iMpvu753LiQqnDukB8jfDBKt8TdamFfpanRAG6vPiyf1919KwtXaP6PJQ6swD5TdY6E",
  "key37": "5PcxFmDwSXXcrRNw3dFLYE2yikNKK5toytAgP3JZ4zvxgpydP2N9dX2BCVW594PRXXKAhAPoAbSfWMXVubyoz7Te",
  "key38": "3jeLGQ3B4iR9HCXkeWbAfSWES4GUCcpCijRjHNgBM7mUii2t69dtT5mW2f99L8URfTjXH4qgeyhrnGvfV16PUANT",
  "key39": "2LHjqTMWFFRZEaikWJP3MtUS8irpigGa3ukCbk1JvaH5Z3riSrCzf5yycjX86sJ3LMCyEEDyosW2btWmoZ4FJWXs",
  "key40": "sF9Qw9UaBEctznjtyRB3NgidaW4zdMGBfjC9W2WsJYgebkYukWDdaSz5x1Wf4awk8fS3bhdyvkovb5Qn7ASVLpj",
  "key41": "2NJhSR13VzGhPc6erXJdjodHtZSKpciCZB35fMLgSr5K6VeXXr7S5fQxZFh5cf1pRWgmUXQ1sZd2v9MkFXunskwr",
  "key42": "4HD3aPDW5iXeV2poxzuuyaaFNRZpzahzW5xa2KsaTFdCK9PiLubSRfeStT7TnTNTUQFb5MUf7TiaacovMtMYCSi1",
  "key43": "2GHxxy86g4NjGs2baLLoEA8Mjht4Kw4oZ1VH6ffsZrhGgLnoGoNZDnior9PBMJXHnCST2YhTU7Zjk29XojbnyCEV",
  "key44": "xJLKdv9ti64RXStbyZcYmkiSPfcqyLjpWnQZZcWJXAusuC32Zv7tJKvnkRzj17pwAYK63E1XDcYRedCHAjWYWfg",
  "key45": "4Q7dATngkoWRFsFTkis7jrRpzDRWaR5zviXceps1vpUnkhx52p1164uSB8f2FMhSVpqudJVjgND8mmeGMJ7z91WK",
  "key46": "5EX8Bck9EDRZY8ddCR5Ek8LV6qJgNzyBcK7GQPDJyRkbPXM9Hepjtoy6DYrBLJXWs2bkQcvXe9NdTY21zj6toQG3",
  "key47": "5VXePyHyAJtPbc4U83tx5PehRXap94zA6GD7RG7dC2qP64MJVk6dDL2NuUTryh7ZJtudXwvbvdHYWGaYPMut5thv",
  "key48": "PooY6jFruKw5pQ55qNEvy8VCxAXjmdpLERKqmjHGTALsaD8qr2hNh9zQg4EVvecZFV97VpxKTThKGhcaLQzTNJi"
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
