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
    "5kAJmDMKVYptPiz8LvBn8daTRKiSCQsRavw883dVu4JyNh7oJERdmDewcqyRFevMdPhdTVyhcRfW5e2yfDhrQUdi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JHhbuqJWWuu3vk9yTZUMdEfa2T9rYGB56jdBNgHtJmq23u1VnDJ6pCnUAkUQNRhWhykHvwTA3N4bXfKcjwgbe9U",
  "key1": "FJg5brpEYW46eVWBt9Hd9z5ztavWVpmrpMiBXteMsj2cN9VKNZ6hYDh6viKeE29LBPJN9mcMNWicKEnmpoNbgEF",
  "key2": "2AHCAjcHdNQhWE1cU17uzR1iDZDHNDeY2rekzZGJtsmUA8V97Mq2Q5VeyqewwwrNe1VyY79MxZZin6oBW4GNN9hA",
  "key3": "511MQMkND3GBmSnFeD3DZH3xTRb3FvKhEFbkow9ZYPHWoD3zZGSGsigtKAF6Tp571XnDNsQhpzMbpFK743rhUiDE",
  "key4": "2QEfoW9mZaHpoyQKTjsFBZmLrBdS9ejBuZ4U2iucB7TpY1Jgso3ATzmMRbYiYzTDCqFRBqvw7Kr1mJ3MQb2XFSVC",
  "key5": "2uB5ThuZ6SG86qH8G5h4L3bqxQXKJ5haq9XWGe47szDih8CkXHiceGBFRV6wDXrpPAQJGvbGJh7xFWA5MeXS74bM",
  "key6": "sJ6xCuUm5cHbvDSPSF9dozmhMwrqF6JyNjSESpJcv2Dmgr8kk2devoJiKq1TwqBJesFuYpVspHj2hSHHkcdUBbZ",
  "key7": "2zT6CW9GpDJ453FeKzS7VcZwUV9DrtxmQRMcu3QwyVF1wPec9JGFrnQMh91nbCv6e1xJnNkBajVCdxrUBn42nrPk",
  "key8": "5EcMeHsX2oYrSssuKEQyAx1JAKgUeQmJ5iVj6aysFrw86WN57ag3yjdnimadbMshP1jx4KHwNofzzqgzLXDPAYXK",
  "key9": "2WsiKJwgSR3cgZpxshcpib2mJMzWF5JXkMt83nn5QwBM8yYBjUt1XqwdCfbZDrKZJ4ArCyKTiQfvU5Bk8oeiw6xR",
  "key10": "5tPcE3T84cQS39wmDXYLyM41DkN7AFb9Edv7shjk9nbD9LkBzBYUzqtDwBYbL5Q4yfbd7PhifRHtjWDhfqdnCvkN",
  "key11": "pqhPSPpBwhWVqcoBsNsfWKrZgjPD1JnZeGYXuXTqyNV5EgWUCHBdUF6BfRRzxVTXPEFPAgXiW2z4UbwtVtzadZ8",
  "key12": "5NTNcfuFHirV5CmDTGfBWZpH44UntXzGEJe5Jnm3YgDJT1YmhcTVxtPzJVzZc1A6TH9DddksUQvn3JEiuG136fbE",
  "key13": "5gSBXnG9tuLH1CwuiGrMrJRLDpwDPTYZtwxM8sSNeHAPuN5vKjS4njwTFLvH6bvhEEy8YPEmZpcY1Gn9KZWbF7ai",
  "key14": "2RyLGq185b2PvYZyFqK2sdKsQ2CSwSW99aQckhpZVkQZREEnWPPw3BP8UnmwFHyVV6n7PMDGThuZTFkZRriGDttW",
  "key15": "42Sk1qjsFGhsFpUW7JC7pTNvuUGQuEPhsX1fruh6wdW8NKtA8WSVaB95ALrrFi4joydph2amM9r7Y4kqZVj1egBk",
  "key16": "2vdQngXsr265Xtp9xT899aMVtN31DbwCSDMjwpgcGdnTDmsPa6tMv222824d5hDUDdVziVHxQYCoB8g665UNoc7t",
  "key17": "3F8X5g8HeAXDb1wgF9FvtXcgpZ3aipNN5bK597RX2fnxsqBhQqazLczxooQGmBCZdkCR7pUkmwrVSQ1hsuvBsA2t",
  "key18": "5b1fsgqqHCpuNSbTeopvCqFTxECQtGPvgu5j6bBKsZf7XJfktdLfPuScM4vsrR7CWgAAS2gkxZLeRVx14Jb1v4uK",
  "key19": "3iNhutW8Tg4Mspq1gtSAgMMfWQ5sgtFCReHtoZ3EreSjj6KCGquNJqUmUgqo3rZe3VfT3Snoze1zcrSSGZhYLJ7f",
  "key20": "2pYnBn16kKnVrtKs4ceLMHE3fw2rAnNzU7eM1EhDeYzupwoJ4faE7soRLVBhsxQcU8oDmUZpBDZgibehgnofS1tj",
  "key21": "43nbCU1kBNetsrukHtRyS2X6tKX6R7TNcCaBSV3fZsK7W3edfemDNhHwbbjmoswuswG5LDkg5HQjdYT3qw9TrH8p",
  "key22": "2S2h9fv45pF1Q7zSTrRHzBTc1KY1S4UbiKBLNrBRzsJQ5y9xPMLqDibdyUqPc3ZGhDoGG5CiM4tDFwa7mh1S3Zf2",
  "key23": "2bj7ZpZ1NqxmAEnZJ8o7Cfv77iLusEfExxMHQ4aiaZHfmSnrDxobDmBWsB8BxxHfGW9bvVx5Q4m4sTwcxKSzEzQ",
  "key24": "dmHNGaKyhEgh336xQPAbYjhXXFTew1UNeV4J8bfANMWkEE9EPQ4EhEkpKzSqF414w8n7TZw22pymqc4S7mzvULA",
  "key25": "3orgViYSsgWwPbDCaxyBh4bU9kk6YAEG6AgGfZ4pggzw7dWU4aYrHRnCY35kW6brapp37MipYSYEegFiSnVMZgaM",
  "key26": "5TCeW8XmkExCrcJDiqjuPn768B5vFArByA6frQD4LDrJL5h1t9CZA1eVxQfzKnXJuVwtuSQbzscdDnvjYPRWsyh7",
  "key27": "5z7bdC4cjxAMzy65Vn8qjyFWXNPdi7wYKXhnLfTPNyWrpeDLGkzZGwdDodgpTKFmc5USRWwpjbguCzGm7x2guRBX",
  "key28": "5V83NejXfWEGf9z3uuEzNerXJZ3WdmMP9fGmV6UkhbS2PcaKcXPyvrrDbHJNHQ9HdMjPB3ukjG934vCec1Qr9Sfp",
  "key29": "3GfnY1AjdUn5CUUn7KPMUFuL58dPNQuYgbCqVeK3xDkEJgZXCeFz26doS381Ybt1tCTn1PTitPJdQzGzwq8rRqrX",
  "key30": "4G8oYUa3XtUhQqv3iwSpPvjFg3ab5wCNwgXNeGiJxeNaMT4hj7mbps9DFecrMJgpgh9ZGDKVu9iLdRnNFxxAwa6A",
  "key31": "3vrNGd27TyMjgK7JhkFYY2w4vsQ6USvUW6vEDm1pQqPb4nwQzFgikGjkQJLYHiZQkpqXJ37GE8gLHEhC4iRUG4Ee",
  "key32": "5RvsyKbxnkjoChWSdngKz7uuECBa4Rb3K79YA8JgkwKoaq5ZGHKHc4fMZMSVJJA4ao98bfm4PBVqMhv5x26RMz9k",
  "key33": "313nmrXyaMZh1bRcDYdjyXMezyhbWTc7ZQNB14t9jnDge9127ivEusyJ7df2qsBAMW9B7CEgoVGqSDZixSFXcNDr",
  "key34": "Cy1jtkJnpQGB76HLstLyfJSDkL3XiEnFJG6ZKp2CMBaSLeF61NKzzc4VwA8CW7zqzw9CGJ6ZWQwbjdDZUSPAXbw",
  "key35": "3WMgGBbjscDTLE5c51X9Z5ZK5h1KSgeA6bVohhK6r6iG9YV1xQA8xbUGfhWSaxmssK38MeJKVoiKGKZBKZUSozeL",
  "key36": "YSFDLSwhaKux55DPxDb7m9UyHr5E126hjyz8y1GyzHiUgLPCoX2sUqSEWGsnWyEYQaeTQfRaaLDFnU32RzLDUVJ",
  "key37": "4YFBZy2UE2vahTBcXx9WiFRyeiHmQgoVQdRCr5DHPiYTPWCPnhjK5Q1fCqgkueQDn8gRC8H3K3VjoZTcrEYyBSAK",
  "key38": "4uaRETZMgZzmhse81QLfKgQYEUGzXXdP9koVCRji98Yj34H8GdHzWfjxNbaCCd5WZB8FTo7c8ayDePKHhjbRCwQM",
  "key39": "45HmpCY43jNvSb39WZXJZkDVDsAaZJBzNoW3Ep1Jwm6WgeH1AY8WRJpMNdZ5JoEq3PVqwjX5fEKozFtJi6e6EcnY",
  "key40": "4gtMBXtdWvPzjYNVaH6eV4USmejoRa2wpnapDTaQfC7VQFJMkvErS6foidTn3AfLS6ZGMyNFA5BBcsLi4AY9KNi2"
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
