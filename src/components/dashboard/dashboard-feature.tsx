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
    "2TViDCCJCZVSoHLs4QrE5TgsJpjPDBMqrTw6kAouQX7U1apYg4fQNpGoeH1HUYR6eFQZRrPuBiAhGRHWFFe6dNwd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zAuuyd6b555sWAsLwP9TdVzfDCxK98oDnLofmwiugLMFuoC6vqzQ31r15tuJNE3xDvAovWoz7P5aZju9YXYXoVd",
  "key1": "4fPXd16dgNTNs1NPAuPudsahRThvHMqEGNFhh2KC5G5jUs6r8JJgGLmPu2kY9a6GJqYrQSofjKFXMVbLX8KqvfMJ",
  "key2": "2T2jxoHVSM4RnhJDjjW6AJzNVqan4nYbKkQKoPxar7BT5NrMx5mJ2MNo8Ug3xwZ6Hy3RuY6JX5dRomo6wPBgFdhL",
  "key3": "4411m6AQQbnaLAkKcoVWYp4tiFiSRD3wNg63adm4KaBPv9FLCxdQmiE4NuSdM9kxykfmdP9rdbTZkoieonAKbeQP",
  "key4": "2cRZDV9JsH3ddPAhrBGyrzK2EY1wzhDMFtuH7ypao3fvSQMJEJHeAst3FHgbscThD8zdxSbNyhZU6UUrxLkpt7ne",
  "key5": "4ncGyM77GQgBTCEexJ52s1j7bNKksPMBrNfZUaHE3cMU7ge585U7RbzgPH64gEJAkPGjN32HBcqZ7CHnfcfJj7KA",
  "key6": "3xvKKftK4n1SffpSGJBum5W9W5MWhEdvV3EGY6uKNUSpjG6NGRyQrPnhHegQmt2xwH616LVeKvc8zNJLgyW6aBvE",
  "key7": "2YJUVAdC7zQR1K65umijG6PbgXizkU5A6bx3PvcjceyZhYYz37G17Fyvgbx3YLxSEpGq6vY3HTEnWqcQHE3fGxQ3",
  "key8": "4f7cC9uLyaq2wReEnqrABeJU5ZsQ5W2fUVDzBZQmSTXKUaYKN97qqbFnVHQdyLP767cy4sxLMLFGV6s9AXTEH81d",
  "key9": "55caYhsNKRhCaeDvarDfVyi9U9q2P2XiM2rXQuiq2q19FMVZqgo3AuKx2yQj4ePMmSfRJMVAoowc3EucjdE1KKpw",
  "key10": "4jJU7UUxqYtEFNLVcEm3madwxeVe1CjEKkzBKH5v7x8D2xA1QXw8LKahgferYeh4W2M9CfyHsXTztmAiB2LpVPR3",
  "key11": "4WX57LQrHbUEoiRRmj2a7jPdvX2wHfqBR9YvWp1yvJTDEQtzg9JpU1pCzpSRAvJgKYHMAWFxoEF7n6d9GtHD5iDr",
  "key12": "PtGGgmwVv8nkti7D9Hh78jjs4GKGgm7q217UBtXAgP7y41J5tjSRaTch4vNsDZae6zkUtY2RQtm39kENtjFMGKe",
  "key13": "cc7tihkyPKzFzuqRJLmtnkqwPHpEX6zdKo8zqrzsuZp51uwBitna8PsTYCvbRKPVMmqD711GvCRoEQJaWirb9vZ",
  "key14": "hqR2wKuwHdnmtSt6Vs9aNa8oDMwEa7Sa5yin8Cz1Q7rxoAQgJqGGqrYN1V9dB4QjjJiSAXkN3r3aHbFyaQiqL5E",
  "key15": "3zPVn3RVuJPjWyL31EzmrNRFhjZzRvKcrDvrVXc6ezA8h7vHZWyt2JEdEwsYEvnUbHcFNfxuso4cHBP1QBgS1bFi",
  "key16": "3aWZXJu1yTwpfa8m14uMTLenkBY2nenB4Yeh5zDc2DrBGUtnLJtgDNzQuJ53FCejrdXqvcbBFmHWGA6SuMw79yWL",
  "key17": "4dwtZePSzgQT3z6PAFxm31JuFa6rQqRCZMzGtoG91Q3px9dBAjaJ1uicJu7LszZRHmirr3GJMdLnQUgxexQh1zsw",
  "key18": "235yjHWFfu5eQgdYmCpiwR6wPcJCrxkEg2WFjSzJMPDtY9Rg2XkAjRJEZW7KZ8XMCQPueAhH9r6RcyEzDxryngD6",
  "key19": "TW3cAAr4hzfBeH4zYQKLvo6KCQ1YdryiEhmySdxH9uvYJQMU6wZdFrQhbncZ6J3ADUBP285AUEfF8fQFQC3EUTX",
  "key20": "5Q2RAswSQ96wU1guf6cM4dBiJ3c64VmyRAhGLtYLzT1spCReNzzsXAPUAoMF5QjApXBQb5ACznKSWxpUeZmQiP2b",
  "key21": "3pUwy6bVywcpCZdgo3mSn9WBA7L6WdFkTCh3CaNxR6UEdXjMJopuaWwsfCNUvHJ9Lw5RfU3zft7cpAtgu3dXgk4a",
  "key22": "Nda1n4PRLNMueGeYbr91Hm8uytG7XpGyG7kHNyMhCL1XXELAuDxXH9JBLq9ntXy6UZnpWn1pozupuftqNwJc1sA",
  "key23": "5JVFurrT98sks3St64z5LRJxwnbG3PFkmgjcyj6pzEbiJRea73fYFmLaVZbc7M3AmeXdLBxDEhjw2fxcfYCmXdcp",
  "key24": "5rsvTX3TWkKbTudPsFNEC5pC7yrvuhghXMLHLxpSnvzaUhzktydxL6rW1nBPz33CwsGndo9JeNTiaXNX4wvzB9Gn",
  "key25": "kKiwDs9KzDBiPGJDSVkv1ZsWgpsAcXRvZ6RTXRLGjC7MXtcKYW1YD521ET3cbhnY7snPbCQemGENPj8J4uKEcMz",
  "key26": "53uVyYqxCu2bpUECLPRwn6LY2nuV6dRmz859DjBmnZAyLAWAp8CpKUvDa4wuqq2guFcKcjq8CUyYsfsza93TkhCD",
  "key27": "3RxRMFEZTi4mojAJQoXkGbfaepf8kPTGeGW6TZwKndeVupQXhnaMmoeH1h9hNdGU2sgmzJuHUhJBaPEkqwK4W2bz",
  "key28": "34dzfkpiSf3wvUvgo8zJJd8Rj5wjqfsEfYV7Dot2PHHEp6HYktWiFwp7BeAuapnKD4nuhEShsguc4qrpEdLRpGtT",
  "key29": "ufD6ABNrZuESR3Gsf2ucfiJy5Kg7ukHLZAskKTs4NJ1sduszGyBHQrnhLMthqvqNFxPFV9DyCvAvxASieF25AqT",
  "key30": "5EGu3uDksLYr4Qyb5DJ8HaYwdPcdFsdecfPDcALQBD3DttiX3ZTRZmbAmJVNREFSG4ofL6bvMaENRpupp1Gt69th",
  "key31": "2fQzAm1KR7tVC6r6JDaYEnhqsZoM9No8tPEhjVw9Px3kiscPmK7VW2muvsNXeorBqZDMBYw4V9wfcvSqwU2xLAha",
  "key32": "3VWrt383kB7mmEaND6vwc929b37xrwqPPBKFjYJHgSGt5E9Gx59ocADD2b2hgdZ1dqFEJBhviGyJwCJSKLBMh6m5",
  "key33": "3U6RULWgmb3oWN3DV2zNx5WDfxUZVfNoJzqigkXMeXnWUtxTbPYLAKiYCH9KVR2zs9KoerKbHVoCUSgXH4BaXKDq",
  "key34": "36trbY6zdtymjngtJxjRz1A3UMFax3qvApRbn3qSJGmrcihjiUyyNbxSV78zzPfNb9ZhhF5eYXffyU4BRg2mPXY5",
  "key35": "3eJXuSNhh1pTLXHKLWQn4dZowE1G4LRPPCQSPy3HkRJxsRWhvzEk4KF88dsrvJbSoYPpYSSQ8bQJT3R1jcCew1kU",
  "key36": "5C2HTnpTbsuEjEkmoeCT8gugS9fYuQVrhuRpzLCpkRRH5C2TWkjmT3f3w85u45S7DCKwDN1X5iE7Zcny23M3AV46",
  "key37": "No5L1rZUdyG9xoRgd1zHnW7AoDhU9yFbgp2dF9hP9DyodADkfTEdcj9t9jaQFmZ8uFb88BMrmkzp3Xsc2DA9VWW",
  "key38": "61ajNDrj7H7XfGK4Qe5e4UPz4NVj1kt1fnodxDfLL3NGDDEGghV5UEyZ8cNaQQqJdHuhAVrmTy6NWNDMFedodwhV",
  "key39": "63dmU5AJbknN2K69gzAqMKwCU2mwEaoKCJfAPbsoNzLjy3cn9XiBHV4FKRiVqDj54Y9NU2RgDUzCPSajVDwXVeiu",
  "key40": "25akqQBfqVYRwCT7kHpHjiLFKGgiFZjXhpg2Bx3s5YvTkQw5J6LBmoRQ7uwrvq1kHS2X8tDYdrvEtCYG68iowB3V",
  "key41": "4bqTjaqebt3NquQVTpP5eSLgfeJonWNb8vpWbnRwihUZj6vrxmq43k2LC4faQRsGREQQLtayfMcMdkNMWRJnqdgg",
  "key42": "4TGQwiBLkJzkPGr9m2FHWBzqdXdgjP7EeHKzA3TBvYDsTdPJVRNEwK7dWypSjSAbdiLf6MNrvH363gZHFi2ScbpV",
  "key43": "5v58rNYJmacp6ywdYkeJNpCn8D2ruShoXzLRBFEtEV5qoNzHPu6t4cWHafP3f4r6iFEDHGQXSVu7WFxpcKJc9ym3",
  "key44": "morQH2daFtitUH1WKkV4ef9uSAnaEnd2YqiFS4CsTX9KwuCueZoh8MXBYXzSxLuLhtPSexuY1rQEEQbFzoCB2id"
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
