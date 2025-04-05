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
    "3iJRyAaTrkEZi8qDZneGYLVSXNQkjEw9NWF3RFvyL5X5RcfpTjMJXDiRRirbEqzSYyscky9r8fM3w5w2qsudVuud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28nXKB6wmWSUtkCeYJdZBPwqTCnveoCPsD65e38EreNS33CyJ43xQ4kZePLUGg41c33AEJ2CvE2dJsKtDGUPSoyp",
  "key1": "4TZDM4GPkLH4TogNcNXLx7dN7yyR5v98CAJ989VzZNka2jHk4gcbo1Qy8E6FcQQggYpoPcJrmtK4rPFj38bucrqi",
  "key2": "3cec28fbAJRd2N54R1NuUGPauAa1nUU2CteWrvyQ4AojxBPJNmE17EhDyAVSTo6RcgEPhpvuahUYWHqmPuTeJd96",
  "key3": "3ubRKfa4LXMevdaFePBJuDEKXn2cGXsvyTjdeQnCvfcevbdeNR2buecb13V6bNfe313yUH2LAHZqFcThAjSpv9MU",
  "key4": "4wtbawM3Leq7hTvzHviELst4fKPytFXTrpqXutuipY2TDGnEwEsvFDywzEPTDzuRgpRD9m2UsPKS2DMBtJf2LpBk",
  "key5": "p3k4rK3vdhQcza13sqw9tmSyMdYdKaoy2PGjc4TB55cn9C8FXRRQYKsGhDupVLK7o4VZRrYxthJF4d4qmnRc8Et",
  "key6": "4anu2jfe993faBTbja6rHgb99SPhQKS1g8ATALGdkfhP2YtGxCm7cK2gfGdvd1gEJnSwudXAEfBAqBCXvvSA3qXT",
  "key7": "mSopBgL538hGqD6e67fy896yG89cBwAF8Dp5p6HmrRCEbWQwGtGdygRnzBqdN6CbM7ZfvsXdDrFRoMqwCexeLL6",
  "key8": "36GjdPRPYa3qSr3NKQFdnSB4rM1bkgxpqgzKfbpyAi3itTRZdceoYsG8owe74ateQ3dGh1yB981z8WpL5c1VCkgK",
  "key9": "LfX8BzLEbACH8sJtZhPGHk7F3DwuLH4JkDCGYBei2aqKMbp6iKGJtqGno83MNLmq5GvoWSpyBasoyvJDwR1GZVS",
  "key10": "2zE7si2kH152W1upKud3FwD8Mtgj4eSnRb1MFhptHmbLe3MFiuD1mCs5ottSyoNfmkYvz6WozU6Gh3ZvedQWbEbW",
  "key11": "31EQeDkN7XfWQZWozUXXjDH9bvovkYDrR3yzHbcw6cqx3KgYWYkuUSNcnNBudCBsXTSQuvGJ4Rhf7pAar5wGhZhk",
  "key12": "5hkrzkmU6R4CQbeUxhbss1fZERnMU5Vx4QyvFHx6LsT2iB4TdvkhDjjcdYhHXGHYoCqcdNjYnyUKyszGByHpiqH2",
  "key13": "2wF5VQmiNrrMHZK3ePxTPjm7pzMdTQ1QdAYnfEXfxe6zAwCTBCmEszYZBHt5oZq91jQ9uc71xxtzjsU5G3kNQpwy",
  "key14": "5EZm1492VnkXvKEAMTnVQQN3MbK6B653g9rzJ5hSxpe9jHn8diXh2GLQtJDhSHhvbjAv6SpP3jiVNJbumPgQo7Nj",
  "key15": "4ptcLDRJ9xEFd9u2H8UhZ9WMzhQ3KZLdbedAvdYyXH7Dq1K5z1787VHxCRevwnAKjbmjb4hUNroy3jbCh4WgYyvE",
  "key16": "3yXJ3GfdaXQbQGGjKSh5wkNoTfYyMNiNjh4GQNb6y4VHDZWafTvAAuuLePqniNgobedyGCxganLaHyhoEZy25hMw",
  "key17": "5m7QNuMWCmJLBpRssp5tjXiLHPWbc52awmsJ26jp2Wh6EgT1hDLP9vhYgBPhvh3pQ6ytTKRmMYiWSUNqbkH2WnER",
  "key18": "3VdV7d323pczabyUVQ4fgnqAkh56dhGWsZL9uCbLyvT3swWqgYMkEb3VgrqerTd4xV9ws3jJuAjGJ5B4JEcXThor",
  "key19": "3QV7jDCoLDRxCjgZGVRd1NJzyr8gW7QZTo2SKRydrLro6kjyTJD16GptVeDqJZGR1X8Yt6Hct2jCgfAj3jJcjsa7",
  "key20": "5Qoh44dFGPJqmvwNcngtHMfCqRhQPcmKYZkR8bmk15WJwoofCc6Mn8vnJS2UBk9WdhePhTT5GyPqm7yvJ87yysoP",
  "key21": "2Sdht9rsdoKsZz72tUftfwvcvGUKwQsnvPyhRrPnZADnerYKojJJ173hwd57Y9DF71t6ihMMH6vTzt7d5pU4ZJuQ",
  "key22": "3hfzGmPHqaddbnKSecbJ2NvJwjzoQsBAeG6rSpvQD3bC9RVZyNUPgUoFVw9HUhifBceTcCTpdPXL7ZC26MXfkEXw",
  "key23": "3rbKUC2ywXGTK2wUxCsdeyx82mFuHdhvwPWid7ixfRQaS18j8rsGF516oaLRrVPE92vRn2cgaUQH33k2N6Hmiyzf",
  "key24": "4vTxysXxz5GZBDdwanNRhCj54QcHnG4yAThVhFW6JxgdG9TXfUWo7MfkgNjCpjfC2Q65WHYvviA7dehDhujF1c7u",
  "key25": "4N8mA1k8R2xw6rZmk1Bh3kqAioPJZSi2D8Ujxmyw3qwgVL9oYgm9786TEZoVXtDL3rkFPu55w49ELhcBi4NJwpmb",
  "key26": "cPpScwYheczym33h8GtTZH22yeYX4MCYkdnzNxUfDutVv9aFcGZSB8DLAu2qAUH5RwYLbcgrdPCbmxG6Kzqr5Ar",
  "key27": "rqByXdPGehCSD3YTp1pxQSoEtfkTTgqqdcGwZwmbogZfk4pu4YX7wZCAoAeQ3BeKikT1qy5mYt8geoubqPuiWqN",
  "key28": "4kNcLWnRWAj9fS1Bzc1hwEGj8H1AH8NSpY4P1eHvDp38tsQAvuFEPpNLMkYrg3exHWb7rjpg2EYKPToHyweQefeG",
  "key29": "4sPekdNmKBgrYojysT4weBvTMtg7LASCW5MH7Ctey5y4RXevqGyTfkV272CPs5M3opcmkJsKkrUfzmbcD6AGVtM8",
  "key30": "34SkNsjPay54hy3WW8iWj2Wxf6JQoRJpcbYTGiza3an1N81yrn2trc6fyvshoMF7N4doyUeegJs1a4BnZn3hvdZH",
  "key31": "3FUb2NnuKT5ojjqWR4L97Xf7iKUtGge3kWx3Unakd9hrqqxiS1Upp8FpPEmxw4KnffM3EMvsGQgAFAFPY9s9dYyH",
  "key32": "4zPpVBEXjck4VWsZ1JyyC2aTaQMd8BsJzVeET2n6U45urz7S5W1HAp1WEW8DLHJfwvqqusSk1hb1waix3fTUmiVA",
  "key33": "sBsaefddqEpVWW8frvj1EPiVsqm4Tq3wZ5hS1MtNU2wiuPxpjtVaWK4pjNsWocGLhDGyipZ3DcgWj9XjhZQqHVf",
  "key34": "57jqHE5BJwCgg1TGUFM8gL8Pxy5iGTvA8ksgoUkfuzGVGzQrHQtaQZxCjQLjRMjKW3HXGTpnsXjH1mZeFLaCWHnx",
  "key35": "ar62NUt4DwrdiKnM2MgNfBij4pAR5fHjqnDxEWQUE6aMikvstNunDJtfRTrpCdtSdgtiBfz8BAYWYuDoudE8heB",
  "key36": "5NHTFgLdMoGcAywoUBeT5LJCMMq3ZSGDRThjuk81n8mRuNi6WVvYGCqh2exgwWbMz6oLZKidGiB9yTywg2dvfMeW",
  "key37": "5dvkr7XTUHfVoMrjKWDjUEs18G4o3eReCmmrqbtA5mgjV9ptuUtCPXHdyNdiwm3BfYYMjXyaPiFFUv3Kr7dkLdEw",
  "key38": "4ARSa1EgnyZ2cgxMWkAr7fwa9FKGbKubRERZ32d4boCPAm85BUfijFVMioDb6DQg17rFjthyPgNycwDvG937SojZ"
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
