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
    "4KgNJPaiKtdm7aT4nv5FTPKSUgEKaeXhFJVvBR2HkfttkVyvdMgVogesVksKYFdroXKDKypnFmxcECRNmTQWJpr4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rTp34BuzbZetmdPwwhv3i3wn9QzvPC7soYbXTKpDtznck2pKVAUwEt6A1D4ZAe5sDconxDTJwZt5RLs62PwyVSa",
  "key1": "vMHHFgRoJKhL8JQznVcNZpLH17pzVhxwmjus6exzifLU37eSBPviYub1Xgw7WxAbxMmm849nYZ8pBWNUbvPGR6D",
  "key2": "jx3PNVGEcNHtAzCjAKGHGLQupRbcZgzg8EuE9uLfntAJLK5UaTFdpteyPjUTayaf8WrZVZcMgYNBTSBKEZ9Egt3",
  "key3": "4L48Y25XPZMBy4tiQJYGTSx5WaMUrBWsXSGwNzTK7cJv1kquQjBNFQCzPzb3fGRzkYQDQxWdNepucvEHufBQ3VAq",
  "key4": "5vY9TpcuD1tcMJL7aZ5C87yusgs9jESRCVAN5aSZK4k4okdcSDQ1iNYAVizSQ8K9nKr8ChCMUjhukuizs1GGLQzX",
  "key5": "2VqbiScWuBo1hKbCSExKWnJCxuU7Fyx5ebCPo1wq7WvsV3jyz2svsDHjtDP5qGpbrrfuofpDvi18eFmbqcn8muEa",
  "key6": "5FgfqxTg4BySHsyebuopSSNjGGMRpLbLV7t4xpubPMq3svJ5seFZLSZCLFVDSYeo3vdBXywrisacghxGmMgnJQ34",
  "key7": "5hktCRpni9JVvK3wLSY7NSUWwaxCBEEFkgRjCJVusxUm3T5Lizbwh1TSojYpTF9S4Bw7kNL4MeDEfEPc5LZmDUFA",
  "key8": "26jjHPqiHUkvnbBFuCweV87Ev3hdcdFLEfdTPQ6W1dG1DK8TaYJA3i13EaLXBuPMjhcAZ4USbeFS8GdUCdB7hSaX",
  "key9": "4C66LCjocEDJTmbZGbM51F8671a9RFMzALxPLzKnmaacYNxSFqFd6FpXFLKt12NDBWdSr6gtkVvQEhfLygDqGuMT",
  "key10": "675KUuNrPpBzuJxjzmbTykF5CcL9CFbrdNXaWhcgt7UwRF1R2utNM8avaoZnDB1LXcGCciYWFhunF6NaKGYMGS6H",
  "key11": "5Y9afmJ8UxZa1QL1T7EUF1ZyyGJUEwqKj1vZDx3zfncUScbB4S6zfrn62bWh3E4yFaP9GgJx3yZC2WDjCA5N23iq",
  "key12": "5KY88VJq8URjxq6b4CCv3WGCJGmntjxj9JPcGXNen58XEotjMXWFPdFZMZc6G9USsapYp2r3ooqQyh3hvxmxjsuT",
  "key13": "4H6g6YqhRZAxARupjDX3UheJ3GB2phYvS2u93Ppt6D6cg6W3HKvHp4DPVaQeQDoZnBcxZ88b4h3Kr9AXqYJbvCHq",
  "key14": "42naAk9RXvvYMjLmKdxrSVcfbpFZKm5D3jGoqbDATAWn1LtH3cvkMvnpd3pRjKqrVEXFRLubaKyFJdNnnDBofboX",
  "key15": "2cZuwro9yjX8BF7zsCUWCW7FYNLoi161Se3WXadNt9cuBSb7bBAT51BjtUgtQ3CvCqA51kKoszGJVSw3DZuiCMw4",
  "key16": "5YjVCx6xiHgg4zKF47VWTbzVEDZCoCxF3QUvQQ7if8wgS6bzV7etDKusvyLBhzA9FP9NUdUwJ1pZsEPQwUmrsyFq",
  "key17": "5fCiWFKgRbAtD8S7RukJBgjDUC4EK81PDk88w5Hhp2S7FXDN1q9a5nqQoDB99kGn48KyFbbpGAUjuUqKPiBT6Ndr",
  "key18": "4EJiUeEuuuPL7tVunEJiQL2YesPtrPtSVxVJR6EsK9sRc319MFooRAfLSC3ZYxGpufzCk3s5QED9doTNnkSGDa81",
  "key19": "mRdsUW6WecF3WRf7ACcLPc5V1KJ6T8wyw56Y6UaLHNh4vX5mfqV3pUUiMNJJtzpddybXmu8Vw2Jjnejw88AtYtf",
  "key20": "X3RsApUKuCwXgGaNVTSh7JTr2fumyiJbRitV9y9TpMYvT24psF2TCbWpnDXi2LhgeMpyoVpiDhaPUcenopgJaz2",
  "key21": "Rkfwzg4ArrpJm7iFGrKZEBitpKWP6M7wgpmRzDpfjqH55dogJzAZvtJMKRVPuprYYR6kzkaMaSWTE2W541V5oWP",
  "key22": "4FkiEGLYhhNT4YxLtFkac2iYmdg7EFQocK9kz2L5J7oP1yVCmpNQ1UkZJ8igksc76ctSjc4AURmRhdH8oYMzC26p",
  "key23": "4CK35ME9CGDjvipCmNWoAQH3SvL9LemBcLCGuhaWDvBA1LvPGXZag2frZENw7oqTxY7siwLApdURBDCzhQBZxmnJ",
  "key24": "4qVcU6MpCn7Py49x2k6CmwUchPsBJR4ZXCvNRQkCbFxYC86Wcp4TfSb1xdHKrSwhNygpNaecVqj8MBpyGE6GoWyY",
  "key25": "2uuFEjobM7LCS5ghGvGmE7xSz2fhYYWfdRzPpchYLEuCjybtACuKnQcxKreMjSERmm67Rrhhnczkiyd6MCd59rEF",
  "key26": "4wsa2cXD4wRNzqqUqCwyFVesu1QZjw8DndGHsjANfXexJwiJ6Ti1WCmip8QVH1Pti4bTQZjjD6dawvtXZ9q9ERV7",
  "key27": "iqp3g6BFYQv2JgLQCtoUrzwFpxwP7xUBsLo3gonswPrEARJrJpviPaZm4Fq6PoD5p3ANEDGgCSLbomd39bCyghX",
  "key28": "4eCA5D5RQVyhs5wHsaF5zDbmneU1m65adp3oSSTfzJnHiKHjeni6LYQoA6QSKov9a5Tzi4rTbtH7qXLhJ7TENPc6",
  "key29": "5gCL1VcvrH2SbF4d5hZAbd2mGuPuEjEVFYpnKcbexav9rkKKJ5g1vJbr7Y97YWjvfx5ErcPwFr9ydKSGsDRUXsMt",
  "key30": "3WxgCwodD6Qcxn61q3HScETx2hExgWQQGHyChdSeei9YQo3KDeCgzaJEdVMY8SVJGfZ5UrT5MFFzwouMaKBfFpaW",
  "key31": "2Y1ewzzHj8ZYiKwdDf27Mhck8CyPKUyRttnGCQiVkNfmg3CLmrux9TM4pzBebf8m7iP2o6xoc7b4BuURLixL4JDe",
  "key32": "rKZoQBfkqkHFR2oepCHmi9P4gMCLme3s39CrZKYi6A2S4VZnmRLEQ7TNbxHLoGchudt6p1wzaLtZQE8DQyvrMNc",
  "key33": "47exxDpBPaGrLKbkBqbxFf5vkTQL86ToSTvGoQqE53pg9buJRrPEtgHXC8AWJtaje7UzEe78akM9YKJDnqEqbrmn",
  "key34": "4KqFDc3bSW8nWXpN3uuu4Tm9JTG8vQ9K6pYkCuuCVyjQ16BpdrdPFY3nfw9vMhzKMvAQwxUrAwcLCUu7TpfZaQnR"
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
