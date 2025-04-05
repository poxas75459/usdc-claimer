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
    "3LkrbhkMbQdLC4hGhcQ6GbzX1w5vCBuMR64nzHgjTd2wJmm4Q4W2qVnQR2JEFWyP4EviuB1tWNQ4EQJ1bEYSC647"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gb8wUAy6X7b3DULN7RqybjpceZ4xAmXZVEMrxAH4i1UaoSgVJ9PUWfzy368AMJGWCcX2YtCAgK2ZXxXMZfR47kE",
  "key1": "pzr6cdx88Y8abFz7kPwKWRPUNmh5G2Vd2kjQYU4NFtzXDhEhkpvC6wdLebwXvRWrE2jerXiQmo4Fm1XQjaLhCPb",
  "key2": "3hUDTXMhXtsF6oJb6HZrdvsWcbGERJcQUT29bi1MohAyE3WYr2bB3DnDNFsMsNjg673M1u22QffkSUE4GvgMgQTr",
  "key3": "5vhWHkutBiiqqfAEv5gsowrDPfgJreGLLidYAHJNiEXiM4D4xGrJLUC8jcHkqo4LhJJLJv8rBf5BgH3KyhYfxyEf",
  "key4": "5PnKKmSuGQuxBNAKeP7P9D2vEk48ZyyVRLaqbyPUiSTvWBE8bPCR3MCiSnvdEUpCcKUhghHsVXpUTPwVdWrGi55k",
  "key5": "3At9GGZSjqCfYt3G6eseabSv31cp4mDQ6GjrjK5Z33ddNvftTTLrGyQ1CHJZ8sBg4xGjGc46ndtEmBW5MYMKJ4QG",
  "key6": "4wCWLX3HUNEHaKea8qkrZ31n2YYqwdYhJCdjm44Vqif9X7ghK6xA151q8QixQni3krgzbGTZLr4TDr42g5htS5vN",
  "key7": "4moiSvhWDZqdoksE7DiA4Du1uKzmeP8ADNMoYnZa4Q3KwFri94PrZDBCRwd5LfNjZG62rxV95ohwAs1YMrPtFPKr",
  "key8": "3zEFkpyiyzgW4hCg1eZ4vBKD2oSn28RANcrmZqduZc9aBYZdaLggTgkiWx4V4TAQMHijX44mnqmSjQq4sdQqFJTZ",
  "key9": "k2uPiCVHjDShVRgG2WUvUNLzttk2hgWS5mjhLyxbBB9FPrnYpYkGJ6Xj8Y17bVxMJR3PV3Cx55ua778Nw1GT3wH",
  "key10": "36ui8UBJ8fAT6xfZuP4P2u6ZJCpUzV7n9XZzzu7aUoaBvUxB6YSfUi3nzVANWZxggJikHTk4wUP76tkPS6V3yc9g",
  "key11": "Z6n1TmrTS5mHRAfMT8GwzaNE6BBzv59xEQFgSUhBrCbDUhpPXkX9egzH9cNfCFJqXR3kKUep2x2A6uzPuMdTnWr",
  "key12": "5LN5BprLfNKUjWrya7MDH6goiv5cRjYEbto5SpCHSpz3gN7NRP9jKtq9njuJxzb3fb26z4A3KJVS3ts6T1B8Lx7w",
  "key13": "35gpVrXKdGzFgvmsk4Gwa41mhrKpPYwyFrdtUbt4C4RjVgikwK3iSs4cUGwPpdqn8xMm1Mx64WCP2RUyEs3UXMy3",
  "key14": "5GNmdoRAANZQdzxStVxbA13r2rmHa6wMBB3u294Js7TyTeYu56oxMSHfbx6MkUxwEXLB9c3S43q66ZuAsNZu1dyh",
  "key15": "5CD5Fo8yCbJGk7MgRGrKRWdHRcLVsjiGEPXva4YtrZRksPZP4zmwrfxMh2kyFkwyC14jFzGFVm5k5SpSBz95Uxy7",
  "key16": "54Qdn7zzMUbQBBff4aed87Zva2qbJbAY4NgsmwrMxsxABjSmhP5fkajnH1ptw1Lerc2nPeMpRzTceJPNhKY9yDCJ",
  "key17": "3Awo6ySUDeetwktHUJXH7Ff3yfj4RcfYXwfGuKtfnf4MDDExpm9d9EMkkZ5KzLrytbmpbgYaF2iHZHVPSSVQap8y",
  "key18": "5uQFDRVeF5rtKW6a5J59bhZJ8HuPTBrcgtkEWdGX5Cchxs3XqaccACpxm5i2DoP4qNzJGBm6QE2nFdtktKBuamxu",
  "key19": "5WR6qMFm9fNsG2DKEV95JQvZxevQhtjNJXHXCv53RLkGTx5B98R6FhogyioRQoRJB5JTnKHu5ezaKvLGeCjJ73LW",
  "key20": "4MpjPFYWRZjwT62Q3KD9FfbARo5wfnXiifFdxXEXuVHmBh9zUvyTaHipUsuFEGNr6pR9TPvGLmjkfgCZRv4TTbEb",
  "key21": "3v35WRygucLyjaMYTnoEaoazrDM2abNrQ5NyfgbTr3KBZJbs7FXMSiPMkcHXG2ZHj9i4ch1LGGW8FixguQBmZMDX",
  "key22": "4r84jZHnHbKZVjpaghpbBDCbruHnou5mHNdCtHbUwfnLokMS1hLGUpAQLX9ogCHUm4goFHSeRbVGg3rU7EkeUrRK",
  "key23": "2DtsV1CRPX3sZXEW7YRSruoKENtFRMnfSZikFEYqGZFdV3YihDh9vr3SPMTmueC12jXW7vQMzMbNu3s2fA59ykaV",
  "key24": "32aGg65jaVvj5PBZPQqiTufYtwra9vtNPPfEMeMh3pMrDyUhogAGPgNir7Z9w2vLJxdngmTmk5XA7PzeDZW6W1QW",
  "key25": "5XYt943CpasJGXm4SAHmem5goUFkbS9qNMyKe9SXmTnqe9CuuaDHAVsScMRz7xXDdZeNzpXg6S9qGqizRA95fQqN",
  "key26": "3rSgURY9iDh9FJy6rNas29zT6pixvqKWAY58zRzE78CoJAeWrchaSivQPeHHJxcE84NPDLK5NQmCTHVYpHh36Bnn",
  "key27": "42aHuffb7mmAAht4Lnerv4MSqHgnqqBH7yBpZaYJRNEMUBN6t6swbwC9CYennywSnQy1cBjr8i99bVyKb9RzcHrP",
  "key28": "56fDJLHARYKg4tQTpB6DzcsNgHT71t6Nz9DpDoRrY8LFyihJUNP9eyaueMM69d98C6bzHAHPXvW4MAEWg3JYmHHf",
  "key29": "3uu58TMv5mLmRw3dsAb9UjKAJqdS8WergYrzwoUMpn4hqt3GJLoV4hsvNFskAh3xchTTiR1MiWXWtKpzkAaEb5AP",
  "key30": "4mJrZfpccURHsj8om6RnFPMiLdV7SWyzzHq4GQAAdYCituF5K5E5vESCbL6EagU3gR3DqbTxt364fv7BV5jJKue5",
  "key31": "PY59iyN7WRPuZhHfSAtoRpgqzZpDpdbQdrpnKkJsgEznu5bbBRLdZ4t5dsBCXGS95nnXbWrNivXy2z3gZoXH6x2",
  "key32": "5oEYwrRLFvrnf6nCQXat9BbNKCSsjs95A5kPQ4VtQsw72Cpyd5hygkebsWHQAsNPANhZm6fZwe9Lxz2pcd119a5R",
  "key33": "3TxjT4G1GySsrGG5sK5f17H4L1kdu2xjTAkUL7aDWNtPp4aAwG1P7Mjr6kNiuTGv5vDrdNUqR2saqyoSj66m5NDJ",
  "key34": "xjR2aCPmnGY4dxqP9Cjx5hEANFujcMAninqZPbbGDj8cKBPWsHv2KPCAeMFCEzJRbJ9VL55XTMKgw6dJCrNS9pE",
  "key35": "5rsfAY9b5sEmeArvA56HvqW7VqRKx7Hr7nvymxf4xTWo2t8xi9kTgbznYc8p5VRD9PjS6886EwAzFXvAMfQtbBUv",
  "key36": "2Ngjp75vBn8L2GmCgvae286Z6wEsj62xhBA8iNHMW4saiKSqfksu1oR3W2t8vjgjcCu2AnEeYgbqjF1WZ12pJFvs",
  "key37": "3kmY84aw6Rztpx5dxL5HZQdcgSL6d8qhtetuBtrxgukD1VapRbhqxR7EMxcyy4nwLpWqrWCF1Li2THx29iNVVfyS",
  "key38": "xmSZ5rpnQVG71FegGMWAjBJEfwHTep56dBvDqiGXrPZBAkAGkcLiDeUsNgmqS7BCFmcPzxb5t8jxwHhHw5xz4mh",
  "key39": "yxg1uC6ZxvGWRvGwmknvv6vv8CZu7R4TdDwHdpy1DiALDrSPa87A1sSaoXdL1RjN48TBhZKwCsx4NCakBKM2SXd",
  "key40": "5soXt9mtd5LzzA7CUmb2KGeF589jEgYjkaLBevBrVtGB57VXiXa1e5b8UcfZAjx27qJDCenqkdCHu11DaD9e2zbA"
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
