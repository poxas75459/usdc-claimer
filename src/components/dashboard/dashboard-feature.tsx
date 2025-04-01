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
    "2BZeZzwYTW9StMX8ReRxCLUQv2aQgjNfp97rL97awpxod5W7BEznTigz8wGyu9qXDoetyS63JBnMwFLh6iizXYEF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KMErSb4jyf7DqTuFNwHA7bFBrkoz2FZtFcCg565vWXL6APo77Nm9zANLrQebwiQH3j7pF1vqfrWo7fNTBUXWXLL",
  "key1": "4DgJ4Pk8sGCzDZcMgLMJbAcf6P29Xn22htvm4sEBWpMonPr58PnZRe9rMP6d7WJ7cFtgDqJV7BXoroY43YA1n7fu",
  "key2": "5X39mhJDJB6ACU799zbwd2hfmjapSWH54hgGm1K4WYU453DtYaErwdsovEWS1CMRf9AqB4D3UhZnjb1VGi4ozkdm",
  "key3": "3ceKwXGYPr2fXiFgHtwnyecc3FkZvfDZESJC8VBJUAWPuhmdNJaf1fPzQ81etvcv7ECSVvGNtoxK1TMDzU5RoCdy",
  "key4": "4JzGJTuUBJN1NeAMSZJ9gqPWLEfC7PMftVc7oMvhKEwN7yHfqGBXWiCWhfrNaU4N6YShpvHuBBEW7JDZNocjow8K",
  "key5": "2wGCJ3UvEmQ2G53ANbYVrp7WP1NUzdz2ntaqo2N96sDMgnLyhfcAteRksEgHepBmuFwidnjyJALtCUU1FVqpNEWa",
  "key6": "5QDoKJuYDPU7m4sTTuxYvuZVcvtoKFLmjuSG4L5T76F8BhGXL7F1cZQKAuwFDzpUiokSDg65gKQSjvfx1Ny1aX6V",
  "key7": "5wA1LU8FesPNmRAnF2fUK9xJuY7Jv5W1jRb4D3U23S4EtJ8cF6YujJ2pEMSoN3bNnmVeHZbD3TP3g36eNyHjweTq",
  "key8": "3Qk5afz1WBcX7hVtWGKWCWn9hGHM5Z5bDMc25won1wqTLs3L1ymZaAcR5XYGXFF2EmCSoLAXpcE19LFqHxKmmKoF",
  "key9": "3kZ4zZKuvoAiq2hTa93FPX9AGno5uD7Cgs6ESqBqnzhgVzz2Yxd6sRqWjBA7Rmicj3u5thTHxBoVGvGbckbPMPpD",
  "key10": "3c7tFajRmgCD6YVRE2abucttcnbWo8eA6qQstk24RpnS46nCtitUBSH42zdk5kVsBGPzn5gfMC5timQ2kCgyt4eA",
  "key11": "4RqcbqCF14HRSiVBEFSn1c5Dw9rSrh2LnuPSa6asDW6DyJvf5zdHekBdqr4cRkWeS5AdCuoQHnQiH24hZgqZtQCd",
  "key12": "UcTV2k5FQpvbhj66omxMj6MrWcEcsqG2psNEJzwSeKtC5MrMquXPg1YbckyGtQmxUqi41FemYf8hvuzRSNUnUE3",
  "key13": "4fVNySyZ8JoJ3z8DDw2fUvK6NR3HGRQyWuwAX7jHpseSgkTAXrHb3cjKtkoHKZUtML4nifKnDy4uy5kkk99PnH92",
  "key14": "5E3BMKtZDxkxg3gXkK9CTLa7S6d5DRSfRPBCGahEXnTrrY22vDigg28SGyXfsaePvej8iznH9DNvwMyKU655keem",
  "key15": "4gCU9igByxzcDaNhfZbh7TMC6JXLDs8HyscCGikx23bwE4qWxBv5dDSLhe6GeiS1z3tJas3FMBA9LTaoBHAwMRdG",
  "key16": "3YsTLuhyZkLE1pY8wtcUvtfSGuSXrFmXB1TaVK6gLh4L22QFKAW2WGgSFNMHgZyZiSgQkeqJDjb4MX9mhiPR2cqZ",
  "key17": "2dcgsogLHYU4KHyswGByR7oXQ59LUEtNVJjzscdX8JMN8rovyX6XDcB3v2cuWifa14HrtZJmBkPE5d937kH1KNHQ",
  "key18": "5pi1vjnKfoMtRTddYvEssoFfrY2AmaM1BpkMtN6yUWG4X9BGEy8ddznVYNpJqDrvaCuzF564cAJoFDwhyK13W7H9",
  "key19": "26rxQ3yaKM64nARNz2goVJrhqH6kpC3u2TxTpep63XRTk8Eu1VrSbVnzWQMWaTwun1WtE5PwqmnKZMpbZQYjUh7p",
  "key20": "56p4MJdH7vj3XxyZroj4z6Co9qcKbW3dPjnTDcETsMX1pwVpJK9wm6bf3GaMTZ1PR4cmQ2hL9iev2cyXqHf2nzQW",
  "key21": "5mFsWqs7zfVLsnH6M8zfxQaoGbxBRHCCiuXdFJRhRu72Au3N1EmuvD9WA9s7Vd23fuj7XBtQa3nTiSnn8VKF9sTc",
  "key22": "4uRMyeXnSpWhsKwdssVbE3bpXcSFexYtatKygNWE8yssaq4VFsnLJNessNss4hsE47FyNipe6FBV69UReFBNoJwT",
  "key23": "65izsZkVbyhqv4gMw9Lvx8ZQPEfJrd9YVDY2doDLjjtFT4zHPZkKgJR6uUzNujjCTjH3rRSstxjP9EehSvndjwWz",
  "key24": "46tn5Z7c5TYuPzHfKGVNqq5wv4XyDKBwEuSZY5RAk9DGVQEd4rbdBN4SmMMLjpPc6BTDbpbaPu264khXLu6FPFa6",
  "key25": "2MUomgL1WyqM93jw6NtdmhpWQNEc3cjBE1GrHGhK8joj82Z1cjQHt1KUeq2sHWLxPmSY4Ff61VwSbQp5PpvjAgB",
  "key26": "46hoHWAEyfh95cF1P6vsbWY1UxqGCUNdAbbwnWxAt5yYychdgeXfZYHwJgsQfj1CEnS4kSrNW4BJzEq9pQWya981",
  "key27": "2Kbsaf1RPZPF9tt5sk3dVkgUSEFZ3mEdnNrjN47d6pDjLNgTNSgS1CNfNcQXccsP8wn3TXpiwsWRvr3MagQAWdyc",
  "key28": "m9CtZtMWbqB5qF6PmBv6nmjRD4iGeEugZbw4wdaQCzkVGboSQ9KXDASh4eCTSVxVtEbawPwpNNNcCrovSTUXDun",
  "key29": "3hRTr6VYfSbGYEtgckGoQ1GWQBgdDq1xd7shL21F7CSa8GaZko2gk8B8sm6NfTWEST7JgnHki69hqwFWyqfyRdAH",
  "key30": "2eMzicMmYaqGGhTrXDLjnaWnbMu4gAp6yejkQX7ukyfUQ9Ym89WC2kzddU2YQiQrVPcQipJ3oEA3HNhSVVh4Y2Xq",
  "key31": "CRmdKatbnyo63iRiPfmswPPYJ4DXE9bRuDC8sgi7THQu1RHWqghQaHeZcLgYbXHHRF9NnX7x6sX6mtf2agCMpo1",
  "key32": "61EegMfkkbQgBm7dbsd6kprZA6W1QWrqewrkEbCoZFq5SUcPsigYByaXbNa88v1e4xyzipvXmXszqPow9qDkGgd2",
  "key33": "gsHqKvuby8imQpKNrY4FCdX3QkuQJVdwewYE8LVAQP88tSfrG2s7q7psptbaWx2FT5n8xzFXsChrJXmRaSnWH6d",
  "key34": "wXG8yyzsxbae9GMy8QzrLm7REXWMzzJRc8D4YK8CEapFsX1WjixBHbcuQt84n4v4XpY2AS2hkjd2oXcYC1oHpj8",
  "key35": "3UG6UkVtXxmnQjFyR46tWtU4TWmW4BwNs5JmZbqF6oVZbz2SRDsCdpnibZnKYYjRY3c7SesusGexsbHsWLPTMeHT",
  "key36": "Ncyubko7UTJJH91f9mW2Fk5GPyy13QnxW6YHfZePx4jX9UpYzNT3fGasG1aQHtFMD1G22TnBaz5t2PwRcHUzMTa",
  "key37": "4mHkPv7UoiRUFTvSSHMy5h61vb5r1WVrCVskid9uMmtJLE8y4WSJXrBhnqnXdZQ9iTRBopN9FgTmehdZehnZk4nr",
  "key38": "3NuPEaH8vcSwpNUBKjjhteJusFuXdgXCW74si2M2PWd4x1KWvge266YQkgym3bJCamhY86S5RmoG3obiNDMAMGYk",
  "key39": "ErVSjrEFsq2m1ZTw9hTnG7cqv2osyoFrFN6QmR2fHwbKGCUeG2uwNQs37UTZooqEQwPkaFDG88guMN971YWTxDy",
  "key40": "4gFLqLj16WDCTBZY6qFcsMwAoPEfRQGHFDtQrWNsyh2T2CjvgUjgA4avZQqLuGtQn1M2owv8YH2AHUCqr9GFp1Dg",
  "key41": "4uenif7RTo7QVc2VW9oN6rAJP22wKNWkeRkkCnGiA2iznU3mZWyMQdosUSZqxBVWoc2BapetC1wemKYF7KEckZNR",
  "key42": "4WfKgk2rGSQMgTRGTvAm9U3M5jET39ELnoeDkbCyj1YSq8QT6dyjXyZLVqLhUEd5KCG4qcRer7HqqaNm7QDFnGao",
  "key43": "5GxXa9VgYsdrC3zx2rvAq32Uk9dNwDuDCPNTmd22SRUkFhrvWaFebNjswDALxXFtK8TbGtaN7E1K3t4j1mj4CQ22",
  "key44": "4b6LxVUG4rvQMYxUte2XGd7tcHq5uMQXpCF1N8NrdszR5vFaTh3iVo1ZG6mfynbqcVoDpASDK4VtY9Fd7eVAysX7",
  "key45": "KjZXjE24PPnsYc4bMMzFf26rkRNEhqTiE7Gd4cP9W3TUa77MNCWUHXGF14zmauR5fHvpAFVMHrxWirmsgvfSjWH",
  "key46": "4TC2j1kkCayzc8XJGHRYWrRUKLxAjwCH4bqDHQrtKhxudwjf2YaXDyErTR9Uj5N4tt4CKr7s2ME6T6QpoynJJJ2V",
  "key47": "4Q23f7MNCxv5c8tVqJZ6gmesjDRvb7EnhBfgLtEtrUNxohQwsbvevSeJ5xRTArfaAGUfd1RBLVjg4qR2o1evDCvu",
  "key48": "4LE5JoXyHjAGzqAT7CWS5NQDR35zpQMa1KJw1tg5b3pvQcEjb2CWy8fEnCeLZrV56NQagU5akp6UQ6uXtG3CGSQq",
  "key49": "2vtQrruKTtCjjQwNEhbYARzTs4EcDEH8EwDdj8ziMeDQunQsReZhJPFa4SaNMLWxWnQeuRbtkt95mfucAmkLSqDy"
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
