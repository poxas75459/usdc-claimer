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
    "5WxjcyjJSmVaSo62hrkaLq9PoEVPp61zS4tS5PmJivZaEaWJRvsK5fF5D2zb5mwszk7MzBw588ZbELGAFfPR964U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vppYV6Ckfbc9vQEMPP4di17CCHmrmr1Cs9pnACgBkANHgvQ24hhTDBxpvqHdpre94awpyeti8ZUpEC3usfxzJaz",
  "key1": "3wxzAML1kkmXw77Z1WrqoeEF1YVQbtxuQ63HqEjbLeZQ8RkcYrscAcMbPdbGVXcun2MwapxbNGbRt9fRPBoKkuBA",
  "key2": "55euC4wqsK8QJFU7XxYkNKzEYeVLYVqJzogTrzs8sMNGfuZoyd6REFDBYdtUQpw5mmiSN8VyLUs9xLVtZVAejXPg",
  "key3": "3BGee1wqfy1tVFEeSupLAXrHyEyhrz91jhk7iMpWKQd12VGfd5HkDagPqdWMZaqHKU25MFPAXiMEgpCyN5apGAqy",
  "key4": "56vUiCNTvgmEHWFCVMj1mhuung1PoVffhrHnK6tQmtSY6jmANTJwDQ1V1EuTxoCT8c6b2LW4S53x8SHEmbSDkc4z",
  "key5": "4ni3FdCgsDtHSWzRByuyn4TV9GFa4h4UMfZQbG5qnqxSdtfDcHLZgmQq3YLyPX6mWpBxSpwTfg8MnJE1B77tzifW",
  "key6": "59CuqgzPzoQSWz2mGcAhTvgeGH7BJUmKeVvZmtbxTi55ymqVavcaNx27qNGutJE4Cr3bmm6qG17VB2zxMjEgkrF5",
  "key7": "4ETyuCtAM5qzoUopXrg3Y5TiKcTczuFz2yLXUMNibLNGR3KQ7JfYA6igfYwBdLetuuUBnW5sbex89Rv3gdXzeJUz",
  "key8": "4AXkWR4YQxbEjh1iLawL2tQw8ccCMZ3cbCi4ubzpeCXfSL1mi3zNFLCeTbuUbjvmDAT5LeztCzdBkzMtaJZsK5w2",
  "key9": "2sbJHJ5UQNJU3kNzxcxMFAwqGEyvJZkRutSGfyCVkYGyGWSAWaKiktAzwaZ4rM3akppVcEqzyz1CKjTd4t5H1ZCd",
  "key10": "1GCJJNrqJFTnHyXiHKbwdWYRNe5zn92RsntB7i2rN27nA9LD4nFkUDwEEjLK9qnRNCJMHMbdsnDPpPxpaKDBFYb",
  "key11": "MGYxymCzKEsBUnos4LgHUJ4AMCChX9ecyS4kRmEQgii25nE7pdHJgNNrJus13VjYPEQNWJwwPAAXjJ57ns2sUrL",
  "key12": "2WUgXYG6oqDRLCZKRCYkBbfimsspiEu11PsjwwjUppMkqRVL33fih84yt1p8xXopcqHCy5Q8NwxdGTcQDDJnySc6",
  "key13": "5ADxeiztP5Hi8MPpnn1EexTR276arBNvPHLNL2GoF1uYbvgRcecCRi4FPJMgKvV4xG89hyvqB4tDdt72LD7qrCfe",
  "key14": "3cX4SBrY1hjq2NMX8fXA55RdrdWu9QyDUrzUHCuCvP5fj9ND5vh4XUrLnF1zSRAjJA2SB89ZTTa2PsBn9TPJ4mYP",
  "key15": "WYijpgiWhUQgFzZir6YGYw86efTrxdaC5nr11cJnNpXVhqov8BrJqnHXZYqHMLbz1DTnh2Y6j4KWbcVBtjPUenW",
  "key16": "5KV8U1AM5eWuM3Ug9cfbsNjpbTUqWBqhpasHjNaGkrLgCozXynfcVinqrdyrCcJkCVVjwS8cDKPhSBqcijeWCYq8",
  "key17": "373qZ1Qm6e5nVNpUjjReq1U7PVThQs1x9CNzo4JZvKjrDay2tRha89uj8kkNYkz7KWh3mw3r2w3vCnnW2WrnTmhk",
  "key18": "6341fYVwT7G3fGkTyXrpG4j2TNxJy2X32LgNjy4T6ptSuq3JrBTg9E66s16qiJmxkMGzdbbqXKb8hKo5C5R9oZCR",
  "key19": "3Ge237CcmFHGbQAiMcMgz1pGj1R3Qq4H2Vy9wpRiW5AvA5FKXrQrkHzde6nKZo77oMDDRz6Ryoqwyf9qEHdnCsPK",
  "key20": "2RtjCRY9xQC9DR47TPsChpqAcriNzyMumXukT4P22Qzu6XeLoHCRB6wrdEwaJPK45z9T5GzuCRzKTncfh1RD3hfZ",
  "key21": "2WByyM1dqS1cYb2uywyq9kip5EiB5aLRZqcVLefHDchYG4jUFUm6LFJBsp96MLpnUKmXLkVow4XhtWFRhdSfKab9",
  "key22": "2ouDDuyLGVAQQR3raLxjZGvjpBog6KZsXnFy26CPPNSGhxWZyGfiXzgmMFCtj9bXtMXaZBsCBvksQByGmAyd26Fi",
  "key23": "4sW1frxahLaAoSE7TVUuM2iAhthiGPBN59evMPYXTwyMwCcmZDMTgmPDMNMUDVrjFYBQDK6Yf1QdazNN8BbDWg66",
  "key24": "3FbXd7pvrrety565PJAboyDwJPKSRuPssWGmmho5ZAjuypUGwdJqAUHc9jePcaRtt8JV7dhWdSEnnxGtTTCxmTKH",
  "key25": "GpLBPUraLBYna9KYG98UMR2zCiFtQkSqD6sWHnYU7yZPLbVbnU3mWGSsScGxhnAk6NP4h5Rguxdyg2RSSJ95xGf",
  "key26": "zGvYs7ttSrZAktM8x8Ct84tQ1gAr5N9ucwVX9KawSGdWdzE7XCPJTZpXCEG4gqEegiJSKr5VVz31BgzK3kpMFFb",
  "key27": "3xxAs9nJvGuhsZXtQSHN92XH4197DeXrSVyQnAPwvVUnJheGzreTwgz6muTX31hFGeiagioZacXBmG7r8zPk5VQT",
  "key28": "aNuGvC1mZ4NBQJCmowjdrdWLD9U2owhkeySNL5ZswjKtFzLuvHShsLearZ34saDrVoqCMs4bugoyCTkCSo3GyyF",
  "key29": "3xocNfd73Mg47jFKUkzHEBt5LzMj6AG3GGCFdZ5LbLBcSgMKJESzaLtmZRh7SnWfJAUjLrpnBLcDu94PnKRNV6i5",
  "key30": "28S1c5Jt3Js183ryv9FFttVkzuntSq1d6URpgFKtqs1Xhjzjk3jPsDvg7gDCAjdYfMzrcHhXqP9GqnR8GU1pSC9k",
  "key31": "3gyLCKyWP9WYbin2Hm7EYVdatjrNMEw4vN8XfH4mMoA5MM2p4kJs1sg54kRqpcV8Wdbf4r6QYiqFSFnzEU1wZzKk",
  "key32": "5ky3D2mqV7F2VihET1ZV8CHZ5sngADn2b9DRodRaWi8FNMPN5Hj1HkfJwr2skpP3jqBCV6oKZiUYWKZsgqmtV5mH",
  "key33": "LAgUksWzzmy2tf4hM6QzFsNzJFrdQ4WYDjg2kDnV8xcyGnPa6F7AVdqWzVUK6RYiHtds5uQYTkroESJefjPi4pn",
  "key34": "4QSErT8ZZKyWyPMw5MoHX2DHJJvVGsfBEufwLqxrURJMnt2v9WuWSpuMHCnWfQhtADmcLTDkXXMtXBv5oa1jGWhD",
  "key35": "454bnrqHGqMdNSiXxA7FNHh9nLaQjSFTFoQnrpuEYepjM4CLmVwngWnMvY3KN2hyDWqjECyKyDrbeEKhw1X8hD3R",
  "key36": "msC6mExvWHnZttqigq3189m92eN51ZmYj167fZCr5gsJCnN8K2mDZAqSifzCo2mBbRCDez5f1m1vpEgRvofbPqy",
  "key37": "svgMzgy2jHCNAqo3C4f1wAXQKWUkbwDhuM2NUkeoR3muTGfPuNMr1NmZT71d145kxQ3UrRAsrLHqkKSjMYGDish",
  "key38": "42DxTyXS9RtUeuzxbb9stVexqUmKRUoKMHpNzfAb7vCFbd1MHHG9ejSMkhGcikzqorY7tWUFct3yyvjHLU5LtVgV",
  "key39": "53UTG9hyNgkdewjL3cHaBtXYhsFhYgaqB1MiM1y485BZFsRd2ZBuk6sKtqVuGrz8eByq819qcfCmEaYVH5j4K3GK",
  "key40": "gasfRYbNkS4kwSq9DGM1KT6GeAeqGcJgLZoiHjKetW9J3xbWAR1hKhDQYxDQAHtdbB4v49kWT1FxgHbWDEa4uPH",
  "key41": "5ZjW3ibrs7r14tEVZBKMzLihQg4yzQTHYVVLvjYVviA4W7GpBqACieMUef6yum3M5QKbhqQMMXkBotgszEaGHE4f",
  "key42": "2MKMVhCPVT99L1YWGL3mmGpvgt2ovoMLcpAB6XHHqAhgfsSXZqeVMwufRE6qQ8pv9jLbighMxZAQvuM7G7x49Wos",
  "key43": "3GFAYhF9Y5nUJ4KUAiq2rYX2nbehDfxaQ1fHLNuoFjK6jHi4SZRddZfsBFeeXSnPhARjSDmx5cAgTYQ885KTnbJx",
  "key44": "5ho5Jk1vvhJ3oR7WASPiSXkGCQrryJZPLkShPJVvpU2nEE6tDqxEGZCKR4fA94FdxUcqkYSE6roQBfWxGcby4uvC"
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
