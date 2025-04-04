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
    "2KE7QbK2Xu3PaSTW1akn94seB7WR5meAtns2s4zv3i7j3y8a9Wyktvw1dP9CJcc6gJoMKTBF9cLKbbAndjUmgDKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aewwSEXjTj2wsSLUkqjCW6SR6TfBJfx6BbzzLnTPf8ZGuvgpMcBSPP9joYwFxr7CTXZBbJN3gKEaufMJPsqbBCB",
  "key1": "4XmAQUjksoLqh6VN1oqopN7952y9o4XbUEiVoxwXGQjBYabkdjqzfGdznfnzGDxXhgcNb4ch85L42XDz8qxdn853",
  "key2": "4NJuvyDHchajWg4k9DMseK1AvBQMHKESbCUrPEC6q8HqTXDPu6g2PkkEGCUfw61y71gxXiA34ByQji4TF3Qn1PDF",
  "key3": "G87UDWg2joF8UMUNtHjYmyhVwKYzuYEFdVDtR3QndM2bdGNbtyJNcpExTW8zwa7h4WyVSzM2VKffpfvJGFYg4Pk",
  "key4": "2vL9BEo2wjdqkyewdUq6baBXG9pTwm29u7FtLtmQuDmLjuS8ExbkdCECaa5v1BtXp3JKVtvmc3MYcePR3HZGy1qb",
  "key5": "3rpt3bRU6TEcA7QFoiqasrA8pMbA8SKtiXzWNsfr6gHXSsBaAtW39ZTzLDwGL297UT7q5H1m11bvx7o2GRVDNvFy",
  "key6": "3DpSY2rtt2R3pgDL1peD2rwtF9vbGTy4bVorogPxxzSurTrKzsLRAUSMPZN9N6LMnJFv4y4D9ZkZeMdreSyjR4my",
  "key7": "5Sv2E26VLKE5g4xNHRJoYXwW7Q8NMTpusvDAdN6Gam9gX3AHGykt7fPwBCd7Bj2PhrGx8Kvb2oFnwe3EMtc3jL3a",
  "key8": "4fME3LtpQFCrnmYMayuuBHSrGWZ2HtbcJjQut2qSPrchDVWHVmsxTKUtkWLQKSdt2dirkdZsvLhd9DAkUL6FS2cH",
  "key9": "281pajWCViU7znyPfWuuqcyC1Dpbr7zgVyHctW8QmvQCC93Fu6kBqhvuRwbADNSq6shMCuzhdUckLDx6kvVGyqNV",
  "key10": "4FNSm57qK86w1oWoAjafUmuLZDr9ki4LXC1VjeQGnpqim3qmcJ5s6SekQMLBCBttiX9mZADTnJsCXWFt51r2CjKL",
  "key11": "41JrkJLY1ioAC1S8XenqP2hQSbVmGChfzV3TxMCHaxZDH5RK87jZGJWHJy86XtREB5p5eAk9GKtJCdckPVL6QcD4",
  "key12": "5iZRfqgu7ncmgkqBxZGTrdFmxnzC5RfWYeYvNzHDuP3XXN1DjeN7iEYTHsHUMtjDzXy7c6EiW1wgDchbr9sQ3wvA",
  "key13": "AGmFiyrjE2kVXWG16Bq1YmWhmL6pS1rMPsWVfaHYevfqWRsu3yqDN6dQ1sehdRYjQwzVERPsL6RKdoMbL4NQxRH",
  "key14": "37fd8q3dUyPqgdUVEH2dWHh9Cv29aB5J6Ci6qszESQ6rj5qPz2Gse1o9EGnoZFbsdoG8cdGk5L32ZS76xbpWgWbZ",
  "key15": "6FZfefybNteq9HhQJKvNV7fdLNHwjTNnddo15Rgi66P9aCDadpkphcqdFFsZA5zQtk3c2DHAtJUqJoHTHccEngN",
  "key16": "3pkox2yT2fYxDjVo5zjMNKf1nCH1V4GDQv9REAs5S1cfr2cpH6tVCF1CSRUEJ9Ksu6hzzV8emK1a3nDQvLZ4QcRe",
  "key17": "K2VvEgBJdhrTLA4nefbAXmLJYRKym2yvX69Kqp9pMBvLunshBkEB3SzgiMs4DAmVDPYYHNrUrHecRerHH1Emzwn",
  "key18": "5yKb77tjLVJxp6bkPsCju8Ab4x9wKyfzTA6wodMqFeDqJ4JPeHPrNxzdDhoJRnEFiSxvoJJ8LnTGnxhBb9pqEUSJ",
  "key19": "4TDatgoLLFmKo8eYFaVB77wTJe5r2MM3cP5dwpSYy49KuBD9YysupqrXymjsDA6TYqenHPNBAHD3EBVRXBMss5XG",
  "key20": "XBpnkCDvBSUtgS8rYbu2FUFuKqfvt1s6puDwy4Krh4suUTSwbi3RXaeDE7sBiGWjd1TehPKFe9Ek6CVCHLqzuMb",
  "key21": "2vgM95CKBN58sw95FUFVRcahHDY9YXA6Faupvhn2F1BuqcX3qfDkeyhiK7YEoDzhGxRxxZtafvWViFvtM4RRbsZv",
  "key22": "4Z4pBXbfGkZ5KDohxJHNKmCibsy98meuRzy1pvj1M9hMs5riayY6rkecgW1a5o8U7rbPmnF5biw1mBTMgCK7agaU",
  "key23": "4GNkJ65YB43y6GvPDtLHsSbgtWBjQRbjA7cmEPfXLSetx1ER6CJi8oddRUBFHeP5FYUEKuVZRCj4StzooSXTcEzD",
  "key24": "2MkLHW5FFwvwvHDKbiY8TK3TtP1y66PjGxMVs6cxNpXF33g7LLRgJLYNtXNg2TCtKRWyuXqgaLTdxbMHYtB2z18g",
  "key25": "5tNPSutwvtGC6WWcocrQf1v2AJmgFBnrGMzjGv8MuG56vFUELV3W8LYDBMG4iY8xEFiQqxbDgMnTPtV5bW3jcnQx",
  "key26": "54BQL4jkEdpPkowV4QM7vDQNLrxY2kUommDH7pm7KoQSV6cAdiFD1BJMz1S9dJfjkDr2jUy91dxGgDr6Fv3Xnte8",
  "key27": "49VPQgEurTQw5cx7uy3fFw2EeSRmKED18dcFWpUZK1Mvs2BKepB3NBbhA8BWSWk7x4mNjHGGC23rLpYufDh2wwvE",
  "key28": "4SoKyf7xHuVzS5b3dqUK6JjPkS3EcJoUeJCcfbm2cyADf5qhkhPAcNm9v3H71HCDDwyk7U7o48h58uj9Z6ySD2kb",
  "key29": "2zB6ZACSZ9TASCM1setK6YrkB4bceNpUyHAiVf8yexYWEZ52JBRx782bHYdhodoKc2AN1qZBB2toUw4DmJgcLFD1",
  "key30": "5nNemJfC2RLL66bj7C2nR8cbHh87qiJXSximZJuZnniRZFvmah8XbyLBeiMst935SJKi3jHK5oUPDDD9dGgvNfkB",
  "key31": "5KXtErJcEquFSRwRwdpECcmgDxKP92Wj1fvGXVjYu1A7VsWfYEjM8HmvM4aktNp5FYGo5d8SCb13NhY8K2zkgAhC",
  "key32": "34v77dq9bmx7mruauB6Kq88bwJpJP9DCeiz6q28D3AxtfUUj4DZoxKahf8m6HQJMz2YqUXDx5PoZVWFSxSXXnpNN",
  "key33": "2f81U3GncV625PDK6Gx7GqpnnUpcuDLf65n76vMTDigdmCvdwS6RWXHWepe6SmvH8XEygcRpgTwTSHJ433dH3dKS",
  "key34": "4J6CCMiTX5jtYHfMh95YysRPs9mL3RmBsroXsRwh7jwgXWaDFrnePVmphcvDwaecxoHMezbCZfEADisdfxjYYiEs",
  "key35": "5cciNEpr9QibXauDWFSMPrNUi1Ek2eDWGfUw3kodU4JFaaWqTji4rRRCnWwEmknm84tMY8P3Ds8BrQYNTuFvZurG",
  "key36": "2brCq6SSFC1eatD8fyVC7pHHTBAUqF6grYFRvkoo82jr4xDVYvknKfihdVHn6gUShttU5EsVWFohCc61EwghKut5",
  "key37": "AY3Y51rzw6MNWw5BwiLgfNLBj8jhbdvPFdr7inLXpsDAmvYtrYB8npCXewaGuzPZPC7k1VzHA2JdnYScNaN76cy",
  "key38": "2JTZ1BV4FbnmW7kAKx7cpjDiaYTvBRWjcHvWobHc6yEDZWESCHyssBmeUdSrmxZwT1cCR7outyLuwZ4SV5QPofam",
  "key39": "2xv7BbMAozzrYuZLHYTunhTtJZEgTpiqvYLYLzY5RgndSt4iSjUUUSjMpstv5qFh12ULTWk7d29XFNVLqyjt2mzh",
  "key40": "4i6RbUbxx82hXL37qw5Ror3nY2GLyuWnyfNyJJ6K98kckGaqJmNbR4p2jA1HAusm8khJaeQVoMUHofxWDjxCmkUo",
  "key41": "2C3vJXMTcgxYwFpF9UDH11FnV98wHwrJGuuCe5dcHYWvE6GyUSgti7s9rt5UiHFSwSjFyW7CTueqVCGPZiTrVS6f",
  "key42": "XEVJ1VtyBG3A7rEDW9mjck4bhhp8YrnwfSrnDLzVqSH6tf8XQYTQ3Bhc1mtkMRStsru34vQHGLSK4MjwRFkKWZ5",
  "key43": "3M1bBoK549YQzYDsDrotWFmpNUPMMAvfg1oLrf6EQWt6N1XMGV63EQCXVtjaw8k8Nuy2FqvVcQj24DqhA7gy6jQE",
  "key44": "2Qi1D19TkPBC5VUD3frJe9Moke8jFumyDvdZjYZ1j6Kre7dbsN45JPVurrL5kSgG5wahNz2vt9pJs2KMJVfRiD8a",
  "key45": "2e5Qnno6Zy85oEk4WuTYZjDcLdSgLna7BgTcaG2VkdU4Jk7AKhtMWaF9xnXxzjGAt1gPD2a2LZ1UiDsz62ZvswgD",
  "key46": "4UjjizGJ5E7VmVA2ogbHMLoM9SmuBCFYZTKJej2QvrAEHpA5RoZM3aJmr3t8r8R78jDCqBjKpAUCquwa1iQwp2Vi"
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
