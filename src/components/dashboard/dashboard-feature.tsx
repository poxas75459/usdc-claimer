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
    "2mpmFFJTHnNuesPSqgthGKNuuPjjtgG1smpXEFe29tCeCVUsLR4PSm6YVJugiwt31yeofTcBB13JRcQyYjzKtbbm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aQsTsVdvuLEcyJdboCoaySajkJvGcYRaVKYjt5xdyEframWqZKihyowwMzyM8orEn1H1gQZjdmBpaSAQF8vAVRM",
  "key1": "3S9FkFK3URY86C8Csa9bHYqGEssBdsZJ66gct1oWxH7Rx3aBYWrsTNTGvYoH2krunHWSNQHBQYK115XuLoYe1g4S",
  "key2": "369bCtCwtYYdGj2h95z7cqrGzAtVTNgbnm2t1bnRTmCAXK28VgMBMVamFxKKUkDhyVbhY3XyTeqVdy895RMecpo5",
  "key3": "5ucqkSHkr7TnC9dN9dWtbnTxTw8AKCahS2H8M7MnVM3znqAY45vZwB7ZYMAPCqHkg3F8LYyar2GQEY5XqV2bk36C",
  "key4": "4K1SfHhxav4ATxtXzKJKf7jAWFgwwUWkiRvqfFWQemtzqRqrUF3tdqdZqsCJXd7dEuphPZJp63uKBk59ptg88BdJ",
  "key5": "Ns8gmjXk8CwPQMocwV82rW2rE5TMkNDxbaKkSUX5Pn36SFFtincPE6SyaofPgPwjMkH7Cgiyj2WEQ9CxjFu7pdH",
  "key6": "2VzmEC3oT94wzxKEYUqV824s27X9qCJbQmHnfF2UeLNUxVDNXYpGxoxvmXF5yVqTijCQDjau96v93SjmCu3SCrz6",
  "key7": "47taxxY6pvbXtZ9r5hjkpEpqx3WchpouoWhjKXC4ioySiTANCrPqJiaTApGFVBpR1KK4PYLgd8piXGYuxF1Ca9oL",
  "key8": "QxAsXsyC3oDyqkS8EfKnJBGncdARts2s6xwrWayywTNQWefbFtZM4k2CnMWHrV9bV2FXqgoNGfbepNHot6uKgKG",
  "key9": "A18bTsEMcjvhyoVnV4J9ZXq4dDmdXFZmCN426XeLr7vjM5dq5G5rtqzgFmFCVHzyfd2cwEFUmeTEw5JL64npg91",
  "key10": "WWZndZED29uYDG7DkRnoPzDXvyqkJKMRJvtFmuRB3iuvQt6rJ2NPPdzaigVfdUGu5VpaQDDG7eiYBmxxdWTH6Ub",
  "key11": "5DnSYmSKx4N7rHpszvWNjETZ797sKHuzkcmTWadFRprCogqYgmww2ogDHnKnPnf1zVSKLQ1BhWeijNqzNgweB8YA",
  "key12": "42V4PrVTCt3Uz2uLZCFWf5rDEns2eUiUuBZ61ZG4L8hH7oRPpnN2hDLgfBXLHpot8F7NL5qJZ7StbnXj6FZW1VUc",
  "key13": "2mV7HjckqRzn9ZBF5A3t5zL1wG8NmcxCmWFGjk6NAnzJxadoeBRxnrKKWCspZmNhoyGx2AVocUjaGe1Q3Y9w5hPM",
  "key14": "2uknQndSiC3n1BRbE2jCxNdijMB9ENN9yx3VPuwgeqjfwwg7ZGEhjqXnNXftKzNUuErYiKmi7x6Pu73nX2DP8pdY",
  "key15": "pDbqmGFSxDLVdQXPEXPMGgxBZKFhozGeKg7raEzPZAsqA5dPpck7hyHuwKmoGhPsEZm8fiYArhvv1r8Vmus81av",
  "key16": "2sN5CYudRr6N5h67uSbempyxdDryEQATHYZYu2jfReVvcMAXzoE92drXPwCgB6uB2tY5T7U9T81VPmL9QPYBinaj",
  "key17": "3HbC8pnGwpXLyUkxJycu4eSRyn1KagFwv1spjMTbDskfb5vFmhcbjUdNeUZPsZ584oo9CGbP7XqoSvVmPsDGc4sq",
  "key18": "3iFDd69TbyjFQuJCCzmrkptSf7ooi4MbFcG9WJGChYmvRZJUsEKdCPcefZbmSqzuz7YgmB1mhfbjP6dtLAFBHTgM",
  "key19": "2eyYiFQdsT9BPzx8wsQDDubxA1G3Y3GqsF3Kmzpuc4TA1PQPbLebwsEkXUXNSAD9Zjg2pfhtmWRMxCrgUfe5y8zA",
  "key20": "A7AijpuxgX2bsy67HZ5PmrLwLeajDfhWKpRwx147ug9V3B6vomMaNxPLfD6N3a1Vj2x98yE3NZsMXJwyUjQoBvT",
  "key21": "VtVA848nM6mez6B3unPdkThYLLq4Q3WqAS2KgfZuCRdetH7QWsUrGMSkL92yUNyf2LvFQ5SbpdnUnWYqPeVrLqy",
  "key22": "63DvjUuqHpeQ85GbNY6a5q7zymRmdVrxtbyiXUfuoDmBbe3F911fhraq1XUz4hWXTGWw5KHN9ixQXKKTyWittLe",
  "key23": "e7UACvHe9MQKbBSkXZbZAtrjZ2YKZ1C25ABidcfcAxMLbwWYmGFJkHGgyNZzRTYwSC7AJ92mukdUe6bDY5WQynA",
  "key24": "5R7BKdLD6DFDsx8A5dvUfSqcfN2fFgxcqyHa49QaBBrWCcFgf2eBWg6cBYseZK8knMwYvY1oCJbvTyNkF1S39PiL",
  "key25": "5Yi5QLetnK6QexWS1kkNu39XhEcvzrB4cDs6WoMyZVQ5Unv5EdzJcuJhr6S5uttiKV5qJEziJYBCeUSSLgUynkSh",
  "key26": "nQLKk6Z9XMX3x4bYQbtcLcvDLi95HfxxsxiNgcKjhV5bYHQnoihSnr8ELjrJT9GWbAdXLTwQbeB2WgYes9tBJ77",
  "key27": "2rK1w1mLufiisewucpTfi9SgaNVpXM6HYjJU2zdDHehgAe6gjGQzrtsj7ojCup4A2haFXiFPTAwm8Z96959RzKPx",
  "key28": "5BH3DkXUZUFQxyjx96NYhtfSxzG8fQone3AJsR31JzSBigrveitsYeafqK4vxF2M36NaWksqqqcb3BMGxe6GYwGo",
  "key29": "4v4nDG5SEaZETZzHeefXmAKqh2skp2hebwdZD3fcLR4NkAhHmbcntggUSko6oXsP3cceSv54bCrroDCXKD1miZcn",
  "key30": "52PkS91eAcLTeQiE6xR4xboTmpRQmZCfKaU8QU9Epgto5YvJdzTy9zG7pAyfyVy4u84GzPnoMSqR3VLhmFgypFL1",
  "key31": "26bhpXZgdfRruex2nLy5H4rDxDtckHCzwmh6efkjSx6T6vpHqb7yC95jkek8EFfM5okCYkJqhG2xi1oKgB8DrZiF",
  "key32": "2jv1S2F7cCB7dinxJhrdRKqfnhffaxtJNDz7Q3nDdMDcvatacxgVpAH2WDBja1j8FFfetM9T3oTa7wgqRLstLimz",
  "key33": "5FPnshfkB14qZriySqM4CfPVc1D4B4xiYFgo2KGKDekdbUqXkHtBfc4XUxdQrNwGVDv3Eumhga9AYWHK4S2sFevk",
  "key34": "2PEd8cV6n6gnvUpLqFcDiwedv79UVt9vF9bEYNvKzhjSTobGtUuatr2FhNm26d3X9rNM9HsxCWdPceKQRQxYMALy",
  "key35": "3mmn335CXN8EP9x3k9LCvDUnrJEFz4ucWJfePj378qxN988RhyjsLuHbutV5vgKE7TXAzL9rgk8vdGRHvpMEY9Lg",
  "key36": "2guoeXwxnmw8YRNH5Mee88xa8PTGxNPxJVtwhWMGw665ZQJEgXusYz8aotQo5aP2tKXusHeUY5xVEHjyUwtpqt9b"
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
