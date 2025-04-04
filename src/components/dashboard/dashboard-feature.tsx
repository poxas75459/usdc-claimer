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
    "2FHsmDaDdLTKgsHr5aaJG2kvmXow9D1uKmQDFjtUUuvwZLPr5BuquxNykrxXjEmhtGvE52S5kwEaZ8PVpCwzma6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mzWL4q5SRRTqkV9vL5gvZ5uVH6xiiE4b2BxW6jUKnm2J1AuxzonzZ38m3bDwE6Qx9zWigWxBWpkiShLHN2LTHRr",
  "key1": "7e9DnmhvQ4oPEk2vW2vQGkUQksUQVTcjowpS61qVFpAk6scJjfkepHnVKNW6mKKdMwubLNtHpLdCznwp8HBunb1",
  "key2": "4GPKT6KW19uUn9vPhUsrT3AZiMjdjeNf8S7fXvdzDZzEprWCmRjx2FwrYawYQVKWkKZ4o4DG3FgWjXud5tbziEQs",
  "key3": "4rDjrQtmC5vfyBR6nx2EXpKeGiv6yzJHkhZNpExuQ4bndHivtwjHQdjtSg4wceNCUrf87i1Lsf8CJMjFsgM1v2d2",
  "key4": "3tJPP2j72S12LcBpWd6xBTUrQdTaCmfmtUiBHkYHgGGzWrnzn7Ff1nxshKaT28eCSMeg1fnN42AmUZapjyMYddWj",
  "key5": "4a74xL9hCk1VmG8okYHSepbmGUUy9S3KHYYaqGReiFsFzarCaWgNaJRe95snFhCRwNBCEbC3LVwm3HnXN21B4RDB",
  "key6": "2bigJmJVcLe1Kndd1Unufi5W5pqtRHPcgWvgMCgtzAsR9duMnwtSaHqaLikqpL5mq9CUwJHDQ1kCiCujKHTie6zp",
  "key7": "5EzwcMCKg3hGPKFCR8N8YiZsM8sJCube6DVBTwGV14CLBkeRhQobLBy61gSzfk8tWSTXmmDoBbJeQZvnPBVfYTEG",
  "key8": "67ZKQYVRT2EwEMrvXME185KZGA8NqStXQJLQV83TW4d1K9DsCt8PUaVFu78HSmYPaHMuPofYp5JGRAUpce4tjR23",
  "key9": "2oeddrhECnVj3UDriJD2FQZm43WAr8YQXNTFQvKGGCQ37dDWp3qHHQgeXVXNCqWY1SU6LHJeCz9wfCRRAzoAJjSY",
  "key10": "4AiCBJpP3tGmi5uihDUvpVYTrFrTNL1xQCgSt2xwgAi5JC9qUTqpXCXYZT7kPj3TcYQuF6T1AgZYhBTjyPzr38eP",
  "key11": "2CbqV4nQsUo92Zc8r9iwDaMEVVcaJKtZnhrKi3fyMKRUdawoBbxdMCkw8ndgPD7EzmZCPNFiF7BFojbX6xe3mvsN",
  "key12": "TbBwSAEnF6t8xtcXswj9Tvw9NFGdB2SFZG832KjfpkHEqKJFg4GVvKSd5m9p6X2pmn8AQsh8d475qkYWEtQR98G",
  "key13": "5jqW74HDFYDWMj8nBGo6dHXPTV1RTUmTyqC7qzV7WrPi7FQdvbsbMViE8KDWjsh2xDuau4zRjMDSfS7Uapskb2w7",
  "key14": "5sp46DwELKHXkD2qQL18oP1mbxJiHpDWw9mRfqqBVwXodwRapa7zRkX31Z5Som1YrpSVSNWWpdre93GyxXnufBNe",
  "key15": "QHoqDPv8rgqswSFP448vdnYXt3M3FANouGWJHDyDtT4udF9xfB5Y4gSP2PLJ2a4QnXBkjDXTeJHSm6ZZ7jJEv6c",
  "key16": "5T586adBCCyUwXRbTAa9GTc6wJCp5vL3CZQAHB4T6GCab8M9UV1fqUgsRPdi8a1H9WJBT1kvS9dDPDAsBwNoz1cG",
  "key17": "8ztUBMsWevYevscrFvRYQFjd7vvBwMRLhzAXnumZwPDyEpNQuUMsLyMwS17qUbsmo4inhA5UA3DYYMSvnBDT2xG",
  "key18": "56c9Ltovog5xtsAYhRmwuwLnRhbbJbJmoLgnqWtDbbzieZvaQnJpFuo5NSNHr6qE968Umc2vkVv8JH1nVpWXxc5F",
  "key19": "2HLaYuVuAAPe2YmoVoVtTRbmXxMAdPsDK9frXGvxwmHAfK37sBAXNEmi1UhHhDarBKUmYh93S6pTN3gEBbt4ArtD",
  "key20": "2pz7Kwbhtu2FbG5SZEyQQD6D8cukWWgqxWEHurY7BewsYRoD4S1GdD5qxMA7vrBAZ3btaNKqxKVrckHhj6ov8Cmm",
  "key21": "5JLH7meZCJ2PD1foweZq6dj9GAwabx3xDdmEjPDBXmp5PDJ93sz2S4bpMkG5QSRsrUDnuXqrvQecoHro7CzdbquJ",
  "key22": "39SZbPaRRiZCiXmVXV1nMcePJd1q9E3kqyToqcSzNNaNmBc8dwJVkmN86FTfXMzrs8ghEJe3rMie7rRkz4TCzTRp",
  "key23": "DfWmQirvEBASQbNad2no6NL9npQKRktT4B5Hf8ho4PzwWq5Rv1Zdpj63LcdGwKsEgJpgqZuQnc7hTyiJABoTvzP",
  "key24": "LqnkMkFJ6j79rNWWJabJAsjnv3E1y5dB7iU48HxCwgfEakDgWKTw7mmKbLhFormp1YDSWMiUMorr1TREPoUy8KY",
  "key25": "4geB2dfJ26E4Uh5KphUjvHeUExGiEVczBxwbTJbHbJfaBYHU4gejJcKwSXvxRD4Tv67ZsqZGQ8BjFY2fKKtVrZTC",
  "key26": "1CgYckhpAkVvqeSHGmo2ovS2LrwbzpEnprJYHbPm8CTG87wYeWsMMbzuAsYusy3hRMnnrTDK98NJazBK2aDDqzV",
  "key27": "5otjJFSuM4yf5tAucnEXNwSsftD4aXPaS72sC6TysCSdhhKxCGSXn82p3EEysdKWmkfdqPuGKFeNtSwTMNapNUUB",
  "key28": "bLkNpCzJejcsZxb7sLYRdmdutbTjFSyMDbi6JNPP7diMxsMrXtiSaRY77PrezrpVviTXh7xButUtPBxcCKshub3",
  "key29": "4An8gg9GwLq1Z8CC5Sfb9siNMbrmyKLEZ2bepTQv3hzRDpjEx9NK1Yrwz19YR2BXFGYjRxTFoCf1D5Y9BaGc49YB",
  "key30": "3WKpKRh8RxGest6jabL4ePST2BRiKHvNpuCfEAwh6tDeutXFzL6cAskRZoyWRTRhp6hx6GzKysJLB4UVEa6Yow3y"
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
