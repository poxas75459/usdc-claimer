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
    "5rQVHS9LsyZNSZXfmtk11WcUsGxvLopmPTqnbSZDBHdBb5P7aa1oMH4RNyM9pgVxYvyNcDCrXajPBb1fFACofqik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k1Prs6VwdvhBTBmSt6QmBkR6Q3bFMiHYMyM6wfx2qaLsBXsgTRqunWKbEkewB17x3TCLzDYuKrkCujKJRjKcsD4",
  "key1": "p4iRUXCynw4LxwZivMzCagnNwzV1DAPQLiq3dXnycJUx35yScVfVbChcTY2N91BoGAdvmWpALWSc1xpJWZppfp2",
  "key2": "5UbYqBTwYXxJFQjAgyF4ZL4jtyRvJRGsAF7krq5b1kGVYt9yUbudMkPE48kZkoXMysNvZR2pfkvwvkwcaoweuyH8",
  "key3": "W82BYhJ7mk6TRwBi6Co1djnP6jgS2sExGqDYKngqRk6y9X8vHKGZKXnjhyis4fzkorJhirrqoQsThnDRgLcQG5Q",
  "key4": "3aFUZC2cJPqoQ38KgX3Qp3X65WzJWGw7Nb3864ENvFcJ8mgBRFCzu5eDkTxtd4wHxUYzkc46qCYV6vcC3Qu9McEV",
  "key5": "5TjSERmXWjsQpGotTmU7w8mstZjrZbdNPkTKqKcNGbW2ddTYLDt1z99XRTKyNxKRtd6LbDsCRDBAb1uuJGZVVYBX",
  "key6": "3fBPzKNNHX4U2QB7zpqd6Ec3FRFVZQpUdTfQRpPz2Q6MwyCSvQM6j2He78Nf7hRgNCBxiExh3aUY4Liy7ytAe8VD",
  "key7": "3uqakJ58Ni5Lhrzk6Vm6SH5qcsUuGgEH7azTg36hHkM6SvipuyD3ypWBUsc4rd4jV4epU7UBGRzmaqYFNt2JQj5u",
  "key8": "47epUBxfAaH3Y8n2ZNSckH9ish2murs7zqxxYJ7t28tBmrycy58i7z4abqHtbiX3meMhFYZhAcTQ8qaSFM3gQ6LS",
  "key9": "Pa5ViY4tUNj8WyJxygMPBBc2esoKKgUL1QDp975mZrGu8noySaSRJpXSKDs2RrA7yXVE8bjz8scHFTdZaLABvzc",
  "key10": "PizGRpLN2JwD3ygUcwaKTjUU3n3YqoXSntMnkx9HM266g8cxunrKCLHFuhp9VNDQ2pxBkKJAiiNVUQaFXdREZ8o",
  "key11": "3kGAjEGKKg2iSmySVUMdxa6ka9ae3iAtKqCsf5iiaAm19XQHZdwh47Z3gZC2UWtcw9E6Ahbi5BnCn9zjSRuArPoA",
  "key12": "3KPe1uGTSApXqBZgakVZCAXRNVGDt6cssWQHaUBePpehtCpDftgKt2tJ4Jz5TPocbBf5Vkjzuc7zdtt6HqxfwDFY",
  "key13": "2B6jZwLxT4Y3pFd9MvPW5zSE7A4iUXnKjMwvjhf8VN178X1Y8EryZ1T489fRjZiQoiWY6JNHDM4tRyVah6d5jfRg",
  "key14": "3KMCvPp9hWkoyWdK1s454YoR2erd7noLi5L8tYAe6QrCgd6HfDB3cdM6kv87XazbRSJqEjMvuJpBVNpy1F98etGu",
  "key15": "bJ4okCUcpuNdhNcc8U2vmcVbRhDYBBaLJGp1m5YaLepAMeVgwEBm2qh6u5EcUFi3nt8nw3dZJsFCvgCkKWb3fTA",
  "key16": "5KdKm9hXAyhHLgLxyK6LSqmGU9N7vbZMAkBCMXtfif9nPk2QCNaDV6bemJjcNZawcfrJP9VEULFgupcmaRpBQbvW",
  "key17": "3S5dFqN5vzpVfXRcgJ57PaAK66EBKrY5fTAf5aa9H8oisc5JFEKUwBGonwEfbPNXk1XFHUsCbuvmPxKtZe3nCHWa",
  "key18": "58USeq9TJ8YyEnX7PrhfiXM92Dp7TebhwPt4WYvz4haq3GnsGxaE1bmqn6dfGrbeMPVQYkFNf1CrNDVQWUwDRyer",
  "key19": "3bdZRXTZ1FcZiiuRJcXaLjyyHEmZH9RTMvPm63NKnUCYPx2w4n4Xiq83Nx7QNwwarfQrBdJdnpm9GdivUCMMTqa3",
  "key20": "45PnoCKJJFAUwq37yrLgd2CQUgAsHhbvuCPeVtx1A6qcXmoQeFNkxnJhkVmH7gbQRsa2kPQVcNbDbaV24f8MfL3f",
  "key21": "4LHyfWoFa4Dge9VTf7k9nGGSKtDxqieYbTxC4NhnUcpWFnnm9TX5EjyuPQKoE6ozmKRNZQ6wy81A813aEdpvKDxq",
  "key22": "3nvzVw2VtHPGnqqZ87fi6ndgvzRHS5Ezrp7wr8ZwDegLtXkmxFE7iDxPb71HFZ1cujLSN8J4xVcfGNvULqpWCXWP",
  "key23": "2mLmYRBjWvbooREQTsbFSS9HLVKw4FQ961K6nZKAhmdiacnx96CdF4sGMRzVgeXqKyQwEL8zi3niei1XbMYcH7uZ",
  "key24": "5wPqWduDHy7SzeRw88KL5Ac75EH8vgTcvK66DYnV4qKaaRFjiPATuqH71U757EbM7KrPELRCpTWk6GF4jDmijqnc",
  "key25": "4nogZ5PEQEakvfaVaquAfZxkLsyywzAYi5JYWAR27ihSzoaS9YouMXuYJoTPEBUWHVpKCNuDavqqmF1ydqrNAFax",
  "key26": "3tUahZgPbyKqnBVeidZVBKXwjHgaF1sFnm7jWFM5x6aA4wF36R64nJm9TjVwHgR2cALNSxFTWz8Xi9kDmSsyejYj",
  "key27": "2qgs9nj63Y6SByTRYAsVxMunDNyG1xDJiHdWmqPMea8bR7uNafEgWWZScMks6B4Hdrv7JpBSdWWgvCC4DQDdtn2m",
  "key28": "3xPBHME1vYAPEzv6m645fGhHL2DqpufV8kfcTpdrHm77jogxJDgCaextYMRHFmgoxuqc7sYnpXPEoDxjq2b6aaYn",
  "key29": "28b9HUrBPQYubcfGUUVYRm6vic7EA8ow3yGADXeWnmx2HNHX5RPCYVqiULNDPma47BjU2PruZJPX6S59Tr7wgCTX",
  "key30": "3mn61wqDQitrLvyoNTbxv2jYfi4npkn7cEJvgqfkn6TM2KMVeVrfTMrdspVTnYq2tG4LFLHafzjTnzDsEQB3DmVp",
  "key31": "2y122yAJbVXwLoiq2KYk2mACgERW2fSqFBFHXFnvCXiuL2DbLnRemzYkkoBiTkriPfXBLQiNjmx9ttkGs18TFbuL",
  "key32": "5YJqVxn6ehjgwKGa9CAc9YoTNCcyvHXTrRewJzLEbFjARqRkexy7w9duLu8574EsRtDD7pcH6tgLFTcVyE12aURC",
  "key33": "4xtd3KFYfJjzF9VfxatbMGBFxjYHcDUQTDrr34PhABGNfLx8KQnSxjmbSLSjc3c7185qLMYJouMEdSd3BNJyZkqT",
  "key34": "stgisNf4xo78rxiW7cJmN3RrTzb9jKLpoYzmw2u7ipZxMPFjy7pAC5Z1sEjxU3rtFp7cvghV28f7sfwkKsqWRcc",
  "key35": "5CB3fUaYspyEqAqnDbfGp49ZXh5UsQJKg7Ka81mq5Vio5hSz5yuKHAnJGmMBSDA3pML2jSuAf3jBYQLkU2SUBmhM",
  "key36": "2c3FiUccu9fPmuhVebX2K7nP6ZdeAr1WrfirWsV7PHLhx71YW5Zov96TbqXm4Jw2gDmQTdetMksrhJeCCMrnFngV",
  "key37": "4cK9fqven4aqr6yb5VFWSedWMQoveoWKW41jP8bKnUAb5FqmxhLdu6PkvL7qTymMi4nCM5EPcxVhcu7fK5aWDe7c",
  "key38": "4KTwjKjBfCf4eecwdnUQaBQAacdmnVidpTy2s92VX6DeiZRaej8CeWCZT4zXWD27CHUuHaJ71gqmoiAnWZzFJZi9",
  "key39": "vg4ZTJCqM49JWMNXbc3hmFfoToyv2i9YaFWPLueGbuZkWEPbVTHsoFc2HDZ9kETpmRe619aWQtchS4Prr29ULG4",
  "key40": "2A8pd7KLTRUFZqzZ7fS5px74B7QoFf3ug4BevoEj9mTHKzPLUQmb584uJERcgM7mbx8h9H1Hw8HL45VvdJMsk4q2",
  "key41": "5au483HpqHHK6mK34SFUdFnvcR96TJg8LVCiypCX39N8687vna35synpPgeny6CDGVb4qhdivQMPv2qZkQb69qzD",
  "key42": "KcCL7pTSrpxkP8v71WSP96KKg1ebp1Esdt8zPHrXnWpzS2n9w6Tqsx56Yab7LaTy8XwesDuyxZtfVF89bfEwDNu",
  "key43": "2vCPwZQnR9tGALk138SDCBxULw2fPAJ6Eff9nHSTBoTQ4ahxMqouE3zHk4DWgLxaMjH99mdiJuF9xykvxCyWZpc8",
  "key44": "2WDdjGnQPpesScNrb4v4jPCZ2CCq1ESw5BQi2gjmgEduhJVd7aLHGKYwnoBqpT18ZhfTgKxFHNeGQC56TNj23MZA",
  "key45": "5jHbZPuZnEHxyaspkmF4HmVbCTgmRPJVv4WDCxi7PjuACQTbpJitkbrwYroYcbijzUspBfmr5mKjzV5zLQ3wLsdX",
  "key46": "3EuJe8TPvXmNQM77x7zTGnMFTCFehfSAPFKBa4RrNyFFvrrfupBSMfQ1fjmTVAwdDPK98HELFtcskrdDZYrGfdjA",
  "key47": "4UPZkcfN5XVwnYraHTyQoqQrpgcURuicnbri1U2Bt2icX9aMwQgDW9HeNpHvciG8SzS4L4pjfiJr2pU5rDFkMZ5o",
  "key48": "2YeAUCkar7gGffddFdYyVdYiswU1VQdENdop7bgdk9qESdEdwCS22H7DnyF8s8ocRsP6ynyt97Mq8BuW1QcFqL8S",
  "key49": "4H8ZjrZHrDoQJUNH56ZLtAZedWji8LQDuYzwBDMVpM4QUNxsFEf9AXY3on99qsYTC98fvNCUUQmaNoWZmSJVuh6b"
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
