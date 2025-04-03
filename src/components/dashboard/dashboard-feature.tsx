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
    "3umr8wNb9XSePjUtXXxGD8DF8NDdG3B6avsrVCAHTRUgxLvtCGRYm9XhMcCH2Q2Jn9LUkeoC3Ln3ugmLtppGhNJv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2McVXNz4teiuuCVgWaeTx4AQJDCBAntLhXnRkHxncG1uqEi8qmQ1viBkHeumBDnA2j8Rtsy3ECcZAncUr1Q5q5qw",
  "key1": "2XMfuXeznxooBVuyoiSJqaNUS4GViZWfP4GJCrM3xhVqLVvEPAVznrDTVyh1K5DxYhEDkKJaqxsf79vgW9Y8tsp9",
  "key2": "3P18vddGMNqMnWZ1QdLPigzNn969GQcTHmZhuAC5doZHGJiSGULPsNpPvF6o6ADN2i5jczC2ifezd7HcTxqMHgEu",
  "key3": "4AoFDiijRv3rgzyyFvZamkwaNLVB8hC2zWNVtZr5WdMSnBmsrmvp41YK4XWXZPQpM2tVJcHXKVBcWYjnPF4STbQS",
  "key4": "5W6YpJEmcE4J9NH3ReuGYLb4XVhNhMjEi44dj8PC5dUMtsWBfYG1PM961igvDEEfmM6YAHpkh7rsjLxJ1FeXFnRM",
  "key5": "21uPB3Bb2RT1rXV2A8DGJtAC315Wo8AsMwXLr78H9HYMLpo8yXC8kpmRAAYZMcVB3myatJAVF1fPitpfMa3KFB6x",
  "key6": "5Dowg3WsqH8dT4DtgHou8hJu5itKirVKf9oxQpVqVCLn2jUAL5aRgeD7ytgYFKt9EjogDBMDzTrQnUJa2o8jn56g",
  "key7": "542NRZx3ss5Xwahuv6F8F1wom1KZBhLD96nLfwCS6QMeuHZRZ3963Gn4nxu7caA9TtSzydzpM1sA4rP6KEh9neXy",
  "key8": "3SK7iZK4QpmNXjZKGN4qhh8fXRr3kEripsdntJontFHCb9avNU2m15axkKuEsKchhMsLgCb6CYSCuPsrJxKuh3eu",
  "key9": "4UDRvu4TQDfhDtAgfPVx9NcZX3jsCeZYX9MXRt1xwbmR5dy77xZL4X17HB9AdJPvQKPxzsV4qEofawadVs2kVX7F",
  "key10": "gF16WuY43wUPs4LvZoaYAz39gtXNWsnFTt66EBnZgA7EHbwYS4WdDSHci1eHepN7snB7AYm1RhdCJvHdqAS7z64",
  "key11": "3peu28azSNpLcwx2tUddKoTqinnmEAp4fVsQxxkyY1n9ZpmHpHwMUWC4xWsW4CjU8xHc7CBMwbxSzam4SafmXTx6",
  "key12": "5r63iMDLsu3VjuyK1iQKyQuoVGczQcPMbQ3VQpnsVqouGopwKfBw45EJdipAJ11hrdSbtcjgMH7fapung1RuSkb8",
  "key13": "28Wi9WvLQ1DedS7xoQFBJeXrbBh6z2oyWzLErcX4o96goDWkkUvdFGYsiZEUXTWrixQvgthY5Cvobn3sBvgNsFMY",
  "key14": "33vcngVWpvRAHgibKdyNE7xSPzy9H2rUuzGfGGCjxRsjF7Y7o46h4BBkudd6nDpYpZHFwxevPx1eWqEPNB1hLjxN",
  "key15": "UknqbRT3tAF9yFtmVuz45ErVeGMx6iLyV3HqkVTiPX67M52jhrNou46a9uq1iqYmE8DgjAb4XZUUa5dG8eVE1dV",
  "key16": "Z9mAG7hTQXHkCPZuj6j6xAXzYcRGB6yB2faGLczSR2gzEQ7Cpcvdqbo3Unpf365kx8DZKjYBveU3x4DRM3sMzUt",
  "key17": "5Zo9eeGBk1oMGvsUqvVxTSdx3Wzn7LB7DTkyHzecPGjs3kmhAuca8ff5xkSHdM83ZdavwgeaCvzH5ZRNtyLpKGAR",
  "key18": "4aY4Sqxb4toiecSEoLS7sHyEwbk3KtMRyh5C3E4rBzJAQMWgCGnVFzRTDzSf2U2hA4hKkwokpif2GyFhgtjomWu5",
  "key19": "5A586Z4XGUUPaewdz5uC8Yk2GASpT8H4V8K5NAeVXF7tGFaY1E4iFaVDhX4KFBRa4E3C1WgvL3UvLmCaF7vep6yE",
  "key20": "5nk5iwEWgLG3XFNTr2ZN5agDhoiNNHEVPAp13wZwUu3RuuG8ooVpk2A4CWq6WrDzwG3R4ycmo22Simdtrgbq2Frs",
  "key21": "49V6UaSr7VbQq8wAPuXFMB6q5K7kCrwxwdoqNRgixZ5aHpqsWqDdA18sLxM1SgWyeLBbZ3uEpB5EJZ29TWRZrpwq",
  "key22": "5BU7Yd8xVUdDQvBDh4YdoYVaBoE6NJoS8zoLQnAWFmFiZf6YBocPaJ2C9jwSGg7J9EBqZfuHJX4avs2b6rPYBDpL",
  "key23": "2mwtnyVNo1QuMzRYUNDswSj1qhnbjzdhqXZLhRqMfize3aMqdy1vZpacukQgyNjJ7wTnp7zxykXoCbNitrnacFgR",
  "key24": "2oFA4cdnDedjNdzG1woa66a8hYPnYM8tjaqVcotS7F2sdnXqSD38oUwoJ15NuwnDouRTPHLM2pNksShVNUgB8aS5",
  "key25": "4GFz4PzrEvsqAgnFo7VaMNTzWekgLwgbJwgETmWLcMMF4PsqTb3gSqnwbpwaUXPGcHyzuKRrFiZuvLLM1r6MGQL9",
  "key26": "4Wvf9yQDXJHRTqg17uMH9PRNFzqLhP3gTSxm3WHcGExTDzHE7wEwK9GmJ1TKJPHoudaLiZkbqim29vAGuUAth6pm",
  "key27": "5XNN6mkgP929GwNRgtrN2kZ4m9d6XFPwardCVgf4vwYJrq44D1uSTn1zbvusm5SmwxpY4tKAeHCzyuph2pmUFu1u",
  "key28": "5VZSKJLchFHJhUGaRZpDGtyPW53yJjqWKiyEUYsCawxhfM1dHLdtFyfX2DMA6YGsiXttcN1mJDrQYdVJYFHb3Lb4",
  "key29": "3e6DRvioJCiEg8gjEYMWcCf8FmHwgA3LCPWuRztyxGgiumDZaoCtVfnXUf8mcARWmumF5njstrU9zDXiExZuyhNs",
  "key30": "4QpywWWXLMSVbuannwg5E1JU4ywNpTPwfxjmjyTghKaxURHZeHWs5fca2hpSecpmJkvnMF5poQtRJUg31D8tHW9a",
  "key31": "jd6jtRUUr2PFvFiak5njsdixsers2N5AsxwjSWAQNcqUHWDe7TxByjFtVY6HgyzvhKhdC5t5hwo2mibZvZwVMUn",
  "key32": "Nsf1SG34vPFrjo1BCSpoLYXtHCfxffUmshGsnGUYYuXk3ECo7cRcovLie52jTG7Q39yHEjruHc9so6v8fij9U8o",
  "key33": "4nJpA4dFBUd5HihUV9kXEmBmuMQpb6VAkyKjrSS1XwZbPi2vKixUA4jBc6hbzNH7TA84qFnJxYGvTqpeP5E9mGG8",
  "key34": "GY4nMyBda5NWairaPb7Bzn8QPToQcrEyAeqWSBfMggpeNpeK9et47YrxY3NrXffW1zW26YYKyKVs5YdBvUauVJJ",
  "key35": "pc14K7tVbxGiHwRPpr5c8jCoFFZZ5gzCrxf36Bio1pjQiN6Xtura1oUSM3WMcgjWLEyyaGXXriS5jxqHWmd6ehG",
  "key36": "5dNpQ8MBBtdLGBhctnGB9WZhHucAdKt1PncM6VD1rKJqczpSJRkYZT4LW4TgF9zw3mWbiTeYSpKRgvyoF2Xi86en",
  "key37": "49wYpLhJgQ9Ug1PRxDtGszdq1FHaP3zpoabi5AxNQhpxDEVkvKsLX1vCFNwZ9b7EFq7gzSdo1d3iVJu1Tu8KBHLD",
  "key38": "JwXHowwecJCqxuYqBstCYANtSqAZ3W9rjAPj6SUCi4KLb2ve1ejvir2iMEgU4A5ZbNjEnDifpQdc9cYznCf6inp",
  "key39": "4JB1WuijmgTavzMa84JZMrcnriZ4F4cfk8NStE1TVLZCsnBmDTECrFFLswVouVoJT7yVT48j53QbiNp9XuCNMdi4",
  "key40": "5fGnAY9BJEBsyKed3xm6Vo9kyVSXWAZ5ccm6wdHg4emtTwiCf71BqDeQLncepzuicWwsJwVFeYmo283dcsUd3HtA",
  "key41": "2LAZ3wL2ocyabUtLkM33SpHuaGWaARc7PLGbbhkv2GB9P8HRWBgeigzyvamnX93g19gaUHv3J788UarfE1k53ZRM",
  "key42": "1zus89xhBqxiUwsDGqpuSsZFQbxKb6F1zpTMb2goM4NPr2mtmCZEMGxP4wixwBjWFA4bho3UZYAJczc9FTFpPgp",
  "key43": "9P4YnSELoQbUGoAv1YdDbYFvhogSnMQZi2fKqNaVch9sgTkUmi9wYtQE6FbaBNNmj9Ea9baCAeteUmYdJfc8Kb3",
  "key44": "WwRtCv6ALWTzVMTX4dLXuJKGuoC4XJ2oNVkPK3WDdREiWbrLaKG6pgARWGJmz63pgHE5J7JkvJp27KtVzH49gPE",
  "key45": "2dsGDqGmpNPJkPxjk7QpceXzDhHL9JJY6e1BAupr1VMZaz9zEUfWBfwFdyF2f35EZ4NAqP5JizB4fveyaPUFYuTN",
  "key46": "3w2K4pgmbb74R7ttmipdLBEPQ5zYq333UAhajXjd5vPCrFqWPsnT8KXYH7pWLQM6evi6s86gJAjFCbihHDLqNsfP"
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
