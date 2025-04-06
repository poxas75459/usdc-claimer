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
    "3DCRHCD5Tg3JnvyupErEabg1WvuMYQiTwwyiA9ucPgvWxDdgVMXdf7pSrZfVTvjC8VRegXjpZXhKAfbwHGCyTYTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PS6ntaGArx8xJzphetWZ96hLAGj4JXpmXSuTWTmWLUtrzZoj6gBZEs45PkYk4TQ1PxrWW8wraKTFhaccNPWjMBg",
  "key1": "46yYDPEE52nR7isH7GT88v72oV6j3aAs8gmriQrC1iteZFnjxe4TJ4bt1UUFJWSjRbVNHFvee2AHaRMgrfQptCwa",
  "key2": "5xwJwEmqMNHYqTpg3xPVfLxWfsCX9ybZhenuyEpzYoAtYT3dpibiSWkTwfiecosYJaoh3oHmi4m8yjUepiN1ESwU",
  "key3": "4dMnGJfRV1fMS7zvRUDzK5XvvQF3WHEKSSa5ZVsCH2q1P8V8k6P5ksN2ErEBADswWoTTziSWmqACwaNysZqof2GE",
  "key4": "2Hiurd1R1mFVtkzJwVq8DGqmdgSAuxcuiwyXmzJdjwSde38751KtmqzGFERWio2awGBnE1z5QeZQEtorLfWB2bEA",
  "key5": "3ihAU416ZLUR9mGggKGxA6HAfXwNUZBmAEXK2BKVhDbM3YLjoLFVLUVNAZsC19enUUcn4HcaZswrm5ozZfzSGsKJ",
  "key6": "dLSeuN1Bb4kNb2WFvpFpc7xoXAzy61zvnvHSCncPDm1G6CMx7BvWDAXQawaWnTkTHhkbLvTUud12Fum8JigzbHq",
  "key7": "4PxDss4FaYPpqN6cEQFVFpqXh8HXsD7wzc9QAzgY2hfLAZejGZcvGFazt4S4irr9Har8oF6EXDjKvysjrVnfbfpf",
  "key8": "2pthAcgPtYoUvXsxYm8XokindKQP7cVFKjwtStRcKy7LhFv3qxYARGXSvHLzVmVKsHHKCxZsAte4vwSD58t8NgjG",
  "key9": "42wy9AyRFYtB7TFx7KUbVwcg45vwi4i1YZ9uyMs4x5MEv1B9T81htc3twN3cFRRVERiG8SqYYZV81TXANmh17KiE",
  "key10": "jsVem4XnvtZppVuqnsXdxrcxEa2aGtBSCxRwbvaEYvkgjW4rhJg1zhTw8KZhQQMkwCiWqbXycwcQAqnn6BKtjwK",
  "key11": "26BnKjP6SRDSJr2q2tLsAr8XENnGU1GUMMHAkmMYsLigvX8dHtp6vFJeQttunUpFHnpWeznebnyAHauUnYboUqcb",
  "key12": "4dc9RTnr1yCDfJKW51iG1Z78t1HBXNBHodG82wKv7vB1pYEh9E9yM242dSmnuGJEWk4i1v6G19Hg8JXAPSNbKGt6",
  "key13": "nFD3hWF9QVMuVpPKvSqJV1gDf2uDWA87TdiCFvHxrms5bJ5KgQoGX1HZ3vEaecLRRwA7f5wq1KV59b1ivLSYe4t",
  "key14": "umRpgWqjM7iefJMzHNodeVUmQAo2XoBDaS2JP9ZsYKwrCa1VQ7UJoCQqkUAiBQ1aaAcAmUqu91CwqbFca3yMTd6",
  "key15": "7UFM9Nsj3rqKRa8kNgjTWVrmmsCw2gidi2F2up2bVQdAVWdU2RZBDRWNJAHtZ4YNr7UmHQ4qpSXaXQeTy3HhPGa",
  "key16": "4q9tNwai4yA2unEegs6ZcgzgX5Qj8jB5GBdj732V9BomDLkMWzqeQnoUp7J5KZ8qigSg2LmX7C4zYS4fXwKMfUbv",
  "key17": "4o2SNKFzPFWaK68nvw6y92aAfUyPBxkXBxaVmNeVDtHGkJY1MeY6P5VUf1bPB6DRP4HaWijTzWjPqswVncvK4kHL",
  "key18": "5YBuHEKynzbh1QmMEN9KzZqf25pPDduLzzzSwXnaT2Juf6Yxc93vKiuPmcTQLeNjrrwApTM3bLLQJFuw4jiqfAo7",
  "key19": "58sExcAtgF5abWaVVG6qGMbj8DJGBHdnn5GoixDKghHRn8b1kCrccmnHvHQKVTSAXde8xbqi174DPe5UYYe9zy4i",
  "key20": "2Ffx2DMGTkZS35Ja6bH3v6TbjYhA1bvFEhVsgKT9WbsrWhUH6QLcz4CzgF1TLm4PpttzZhtNyncKAM4hQrvP7hnt",
  "key21": "4YvpN3RNvkBgWwMYsu36HJTuwfvu1v59BHMHKhTVB2DSvE7wcY45gTan346bM14yhJrrWbuQJM7SawBtJ1aS7MKL",
  "key22": "HsX95wbyGotvL4Jv1SRm2x8c6DuQZSA3xCLyQ3345zbVphFGUnwDq1J44aQt3EJcJUPWf9ufqEadiD8SyF4iEsH",
  "key23": "5TY5Aa2mRHaikySWkGikTH1mRJNEP9s6CWowWpb7diTTEXPEA2LLu5N9qef7z68kGBnuB1wRGxuevRmzMaai2qLV",
  "key24": "2QLBhjW8cibbKEUnp5B7DVvKfz4us4G6wj18uodtzjw5qkQm4jC9rixtFyXDD56f7x8rixZ4bpoPEgPe14vZ9gFu",
  "key25": "2fQFLGkogujMsWKhJD1TtqoBxkgQf5eXXyESrcoxGh4m52kesL7mGfQpEHxgcX2Jg9TTGR81SgB4F8TmpuvG4VvZ",
  "key26": "2yHZ3SEJ5vTT8Dfm8ZuwPQ4dLmMV2grrsL99zoQUTLnBAjfzsU8eucoBzNAkBRnZABsQQmsK8BpdaB8bQTdi2qzf",
  "key27": "5ca5q8qQ7ZFSugQK2p2wwbTCuy6vzwZYS5TUXT2tDyt4i7CCj3A237pKWfvaPH2W3QsykZxQWubmtnfyCArvgnQe",
  "key28": "2nDGh8QPLCFtXVwQVCpeFerhkk2uTYsxXBFVU6trJUt23MuPs4kcgrKizeGs9kJqVXgK7dtn7nyEYhSVN4bKwUL4",
  "key29": "33H94m11tfCBttsmKq8x3M4ZyEqynruN1qq11ZQyZiA1x7pd5rp6QZVjApf5dWAdd9CqQ5szGatoWGYg165rRne5",
  "key30": "4i6aXjggPv1tPdTUcii98JbJtf4gsUq62MqRRaAp6afeZWuwA2cA8durDpSfYF7V65UDLm488XpjnoBsWigDT8r3",
  "key31": "3aMmd99pj6L91bpj5fqpVsW2DhhbJeotXaGthArRVqRx8WSSDKaxzjJJXHBias6TBAot564jVsYorL2FWUYQJDgb",
  "key32": "tQ1V3ejYGFLac4sbgA8p7nW42kwrMXwvikzsiAB9J4rkgAsUmcPzTu1MMtSjXyYotwru6J9dRsuxdzUB6VZ4ynV",
  "key33": "4cwN4drvAccc7wjuTnJx2YoV6z8jFAto1FWtznqkdirHJUBYa1VmQBLczBtN2cfGydjhGgmUnBucMaeqETsScisY",
  "key34": "Z4cS5RTrBnzo2dMbu6MGGRz2NQcyrdF76LTdYCw8wNv8m4jUmeoTiKXYQsmT8DSNc653oUguY9n1pbL5kecn6u2",
  "key35": "4wMsAyYSAERNWJhNSCV8StD9YF2UDFBYEq2fpk1nvQz5RAF615CcpUGTEDWyNsKjs5UW6VSneSB4nKa9RHPxdHxh",
  "key36": "5YUbcPM3swvjKN1RghUrCBZSmr7CBUHwzUYaqU1QzftcrKjr1hmZgVVmuF1hKizEaG4Ks81XogGdHwE9WB9iVMxD"
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
