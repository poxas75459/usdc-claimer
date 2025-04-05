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
    "2RtzxHypwrfjjVDzc3PxLFfiTZtvSmYnNbbutEbQqYcmt9BbKsXxoxYC6cXe8v9Q8H3xTpGttDr4ctAWETWi6pkV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46aQARSLoGfAcQDYCSbHvJboTPKbM1ZdCqvFxyBEf2L9pPTXkaPqu4Yv3jzHRbpZvyHD827w2EKidDTvnkw4YjiN",
  "key1": "52AwxJfW1e6bboaCnmGX5pcz2gdK638kQzE4GAyoEXATTVqQQWUZj4rMt73D3exDQQwtTA6sgpgEeDzQBso4wTfv",
  "key2": "4YFCi6NBx5buGT77or3mCQBnyV6dLHx3RakAhEX5UGrM6psy4tEPH4sR8m4pLkaKhUafpVhcQHdrkwtDxbut8pmV",
  "key3": "55pLNLm8TFNZHtsu3CcxiCTPA2MAWzAyyF3NSPHuJf9XKFfeGdERvtBPLVknbMTyBMB2GDpDhRQ3RoShLoj6MYbv",
  "key4": "Gfis1wYdqhawd5HQn9b7XGmCwMsE3ssQPjDfCoZaT2JvSg1QE8qHiLsT71t2CTTFkyeVbf1jE3J4GfgK4dZdUNt",
  "key5": "23TAGNszvmwGzMHttUeHxfR8Q7CdLNb1oGX9adgKsyS8Ay6eP67GPrD2j8iG23qEpzbG6cJNv4gCK7gux9uxpMRW",
  "key6": "5qypzUyEtuzM8w2srSuVhBKRhu8Fnz8uBjQPyeARsqxoNQPpXKNkFGzvdCkCFA2mEr2GfhnC6NU9e1sWza6PpgBP",
  "key7": "4kKfwvuKthWaV35XUnaCkrT8K5MGbG1dwfRcoHxWcDaQZEMa6AopdmDSwfYCBppzkwEUXAvBueNXQa1a53fj9pfQ",
  "key8": "3G5stHWDwCF5T4EQkwmAwBZzfxjS2MKdHKvpPnDX9wZ73TosCWMHm9pJj45GsvtMzdGayzveE5VEeiGAtHsDYzS6",
  "key9": "2f3U9YGEEbXFmmZFoNYUF8BL6b3Qww7cvynnhPAnmmiZWPJ9WPjYp3GxhFt9mYxcEEP93kbCPbHzV5TMrJKq4GsL",
  "key10": "5vqSNmWGvuz2A3Eov8EfdyACD2WeQCEkNo1rwddC5knVNjHVfA92p5iB1Ex2tnBDUpQzoxTmnQ5qmEKSzeiiKikx",
  "key11": "5QHcxzAEL68mRGR5TUxUCZkUX4qBdS3HzdptxwwZr982jsAABs84CwH5Ft8mgfnTP5n8mn5kmkaCrazYGfMBcpMq",
  "key12": "3LQwBMKv9MLwD9AdMUQD3gWeGktPySzcSZGaLecpStoyWiWsm9xQCruwpGDturN4a7FaBcffUHRHQwJghNbGQqis",
  "key13": "3LUfcXuXhHJejLEsrNd9GYqKiGibUGwgdWGPyqouDmWAavtT6vffnCbetdQkfpphQKRh3A36xvHmi6S38piSV9Ry",
  "key14": "61ENwwSUjQSCqJVvWemQBVMqyDHYZWHCHzTfWs2vop54yca8ELKrCT6a4CnhJJQUNyh1d9bHbAKmfQyK2GdaQRpp",
  "key15": "3s6gDznynLuZLBsU2Uxyvo6Di4YqXBtQpVaRPpGiTraToWovj2Nw9Mu8vUWwDbL2t6S6Hgn8acjZekwfsmEUR8RH",
  "key16": "c9gAczH6bhGWBWD7cDQda5cPE3bQASdyENiyWnQhi51oUGdm8xZ291JDgNTxRiG6NKjt68zyjWJ4JZzTtTcFoum",
  "key17": "SNqPhSbp616xcf1rViMhsNGTxGkaY5xAsKajZnwYei97VpTXwbyJC1JtA4VwYQEVFGJSyRzXHmupGsDpTmchLcW",
  "key18": "4sKfBtruexEvhv2zEVWHEZ5zvu9Q8rfiBfpZ1jKozgdba36CiW6r1JxuHTiFZaX2fmMakAuzaGxVLxYk9E4e4m67",
  "key19": "52kZeYSMLixNDcTVaUH6DBuFTmitRK3uKo1JTY7h1sGPJyK569CoGHorxJEwfNJ5LtyzFbePxR3q561erFMah4a5",
  "key20": "5g5h4aP8aswk5vRwqobUoC8tLn1v4TdfAComQULPixWZbTrNqgTHQNaE52sR7t7iCFe5uvDUT9pt11rhJgaKGXNo",
  "key21": "61mvwK17DvJHs2t8WkD5rbWJX65u73c2JusJJXs1KRH3CebUCpAnuL2xhWLDb5FJ1NtsRF6fexHcDqi8VN9VKtjV",
  "key22": "3hXyTxrGqpkEFNKRYBcy6MVu1qKTYdCJtkoXbVHx1d7iHD5FNJSj2EMBQurX24hYNhWmDgvAeeoSEpFs7hRAm76y",
  "key23": "5PdCdoMBgY8pKYJZJDpM1wvSCmXgbuqmMg8pYqg6qYmoWb1ETw4oWke3tiztnG1bSGsbpSXfu2yPWCEzEgUGMENc",
  "key24": "4v9Rhx6HEUFMaGceLT7RpLMcAqCk7J41MQ92fxRakV6myVSHUfRzfK2AGgQxnKqgPPzSNxucRYU7XAETGXNVqL2v",
  "key25": "2sX6bHgVTvR5dpaEnfKA5kVV4B8C5w3TqthAvNWfvdGspE5ZAHc45JB9TVhEDW5b1c7uXaiPGX2tsrevxUfkvbDp",
  "key26": "2Cgh79tQaXh8d9FwQiGsm8P4akfHDT7YbwWzzbdQ8wy7wEUf29GvYMHgQXHsRGh17LyqF8qFbC6bQ3mnmmgoLEvU",
  "key27": "386jT7ZZZjbA4ZQmdPamMboicyc7PcosTxUq2sspyuGVwe5Nd7U22i5VXasc4wGvqvM4vAAbc3Bt9D5KXC1xNsER",
  "key28": "3qp2PwwqrNLw4k8sh4wzuJC6VxYxwpr5MLo75iz2rY53xT68qsHueGrxwpds5yVWkLyw3MgNjREVNwc915REb1SK",
  "key29": "1Rt51CTSHWy55jFpWMJkRuaPeprvYRvNwcRsoZsXPiSW4oAatLnPtMh1XmSTDKzdMSBkxUjJ9mGtMcfBPcjZuhP",
  "key30": "qftxMx845LuQkCtXGVp9JyU4FRVwDQyFSdrfDmWMEDoNHZEaHsxrgxqKaXDSf43Z1hJAePU4eq6wMZEpkqFvSXC",
  "key31": "3fExMQiVFqDrRM2arvPrPKqaSDSzLNSNgM6zPUA5VbHChUR77aRK3MoqAcHS6u382783iGvoDegXoJmXoAzg23LP",
  "key32": "5QbxD87s5xnvbtKp6ewtqPLvaK1EEUNDVyxWYBFin5pZwWroGm2p61rw81sZ3cGn4X1VTK2fXPMUmkzq9pNbgd8k",
  "key33": "49Mvvy9SRqkCz4NUf5vtrpmKNeydcnzptjpP65tVjSeYy3DoQ1mhQAQpfQMojRozd6FyVkA78Gfyix1bAApevh1D",
  "key34": "3j5DsYJgSpsFwJnyMmjxGjamErgKfpNpDE7VC9VJyaT9RdLVm6mV7HeE9ZFgBXj2xWUXvLes2TeDnX9oafaLHooq",
  "key35": "Te4dTYTjL9VhnFHGNt34qJjebMCuenHc7es12SHNNpoNpd6YGq18QrjSXnHxT7FDCVTooRUawGsTTDEb24u2EqM",
  "key36": "2ULAjMrJSfL8dsLZ8np42b13KpirFeBpsyP7FonEGPZrZUZajXN9JwTdW4229MkkQBTcQ9YL3VVvTprh5MdMe4u8",
  "key37": "642MVMwLaVo4JzmFiVwTUud4Gs95RbbRi6c2JBqkPygfFwW4hoQgqoak1y479LWJH4XdFurn7qukzDty3TMJThSm",
  "key38": "3abk8wkudYLbTpH3sn55TEmvEhHpwVoKYafTkWdpfUNbczYmecVvgDCmZFiUSTn6XBkd3F7XAnewSj6mZrEgVtNf",
  "key39": "3YjpHY92UMbwQoV9HF1jnxPqx4m3svSThJBUYJjiZVkWLobZ56fTriEm2h4RZYUELkmfmr71p8AXJDqRNnUyst7S",
  "key40": "5Q4m56xsi6zH1hHR1nLLN22CmtJppUmB2aAVjQFx9RbudxRh8zXWpPFxVPLPwZxdDYscJwEu45bSMb8EoAeTWaz3",
  "key41": "Pm6Yh8DrUJoPfhu8e76wfewNnWPGjJydG2B3mPzUfpg1eynMsPQSnrxLe3DfrFCEpmWhWfq6EiC7rM6mAAACNTU",
  "key42": "3ekrDc2QBYhRgzfcqDXGvUgfjMy1HdPMThkchEnDwEMce6SMpfcutUT9vLrn1y1KBhdyM4v99rMLv9TZKk5eozEr",
  "key43": "3taJhBawSwtTdigah2rqX9yFBFpWy33XoFfuR5JhsoWeSKZbGvv5B7qdJjynryUMywfuQDMkyGgcZHxpr24UqrQe"
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
