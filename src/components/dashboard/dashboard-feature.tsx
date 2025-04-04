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
    "4KU6bpbRkVCqUD25Ghi5GWzkhzRSypovGJH5waBHPrLQVur5U2M6Hoacz1EXvkg266seDzAK4MZL5BgGa1qaLdbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uUp3YQCK1vGU9rvkNBnM1jvFQCWZ1UrZEZHZ9cTpq8SBQoh4W39U3YLe2xXQcqwSwJHJ4qvupcQ8imY7XQiCa9z",
  "key1": "13J3XLcnBMkHpWhx6AoNCPTyFfk9mUgzM8XXVMf9qHpmksAatnAZtFbMJE5VugDuuubWhHm1jXx9XqBWktZTsHf",
  "key2": "3mYkFHBXHq5mGims9j7ynz9tChcxDUopLeGe6AxCn7S6sPTdV6Rk5z7Y1AD1JNhAhETzkLSYVZsCkvFmUC94gL8N",
  "key3": "2W8HQaxXv1rp1js3wgBB8gaixkPYRiHq9FuqhHdi5xgn99jV8kGBFdWqBWrFDSfLNYg8u8g2o14hCacBthktvTgB",
  "key4": "3t2DFa7c3XkRHmcc9sGY3ZmkgTZ6wtsR6S98Uuwf7eCEwZyQJY3k7JSyJDVx2FKdcc4Ymx65Mrya27MRy8MVHsfq",
  "key5": "3hYj5jiVZbiV1pNAmBPvDEsWKbVPZNyANVnDmVHHdk1JfLqoC3s9bUjGx1Vm2P2iwPuGS41pRT1KTeBRHSay3JQQ",
  "key6": "4gj29EKARGsgM1582NMzveJkC2Zosv8JA7jBYYnGNWirUSE4whsfMoskBEJy7LzFD2t53eQY5FsrbkkN53fQqxue",
  "key7": "4HtR3ecs2unhZDtZdniNsF29rodkiPuFnVHMnk71VTHfCTqoV21McY1PcBzHXKuUWGkMvnZFAxaURTMrkLZn2VrY",
  "key8": "3R2FS7B4JvxinpjHdtyUPkD7ePHGeLjXF4Fp72ihpCU43WZqMn3bDkVhLbZPemiTJG6k7sTAn5J9XPGiuVxMyrc4",
  "key9": "36Pkh8xZe2nFQ8xx7tYL8MzgRWmYjZA4N6zh8rFYTe9wRiRyLawYV5Wqc2UeBVYTEiSyLTKMa7R4hrNeAYZu7iot",
  "key10": "4qdUGPhGNdHYXrhaPnw7L5gnuvWQ8XYK3hzPBEKH7aaM333kor7shqZPG9qzZ4hSgXWrDbjB1WjPc8RbtC2Xr3b9",
  "key11": "4QSZZ5o9CZqBjcy7fgFNsR3JNostPBPFyd4JtqCTAGHtvvvjh7FSHWQhhHHSb7Bz9FYtWFUPVV8n25oaKYGYMNbH",
  "key12": "2tWFGKFUAGGVzhKkfXKXzSAcxxux8nN7xr3gL63jJhwVdqBTjqujAPETND4nd5AikdcrDTgZdEjBUg7KcdanCxHM",
  "key13": "5Nne37DBpdLZMshg6aAHPj4UXrLGA9c9QeUjScMG5WUMJwThDSsi5LKrHU3N2VWCPjDnU2nKZL59LeW8pnkhd7Cn",
  "key14": "4TS9xkyurRjKnUJcDjHqi4wV7LzXV19gkPZxPMhScjUv18MTFiJcQok1mM9bM63efsu2fXQDK7qzneJgc1YQVzNj",
  "key15": "4sZbuxvCP78gJ4UsPJ2LhRqseTkzBLQSRP8p6mwuJ6TbB8KAvNNoEHTNdwtNiP9MXBSPujnpGDgZwWKZRqGf1bzY",
  "key16": "5gBFNr33WRMuadmHAbs4URxmQkiyXaKyLumbRapySZ8degEjFgNa6anPzx83FxudDnv5NMfptmqdpYyKik4z2yGB",
  "key17": "egBE7ax6HzBbysFxnT3VDdYwan5ZaBAyFzNuLJjZqrz9BqQ7g176fnGkQA9YYReYsN7D2L84u4bf4MgmzfxYcnn",
  "key18": "KJNJrbvPeot5P21iYftnqXPQYykucuPa32bL4aHees4xNd8p5LdiCbJPYsFdM6Fu6t4EUPqL7PKwhR1g25CC89J",
  "key19": "4JPkfPCqFQzt99jcWnqZ3KmjxQNTvK9WcTRmxfLNqFHwcTuqNHsKPUxoiL2khxopYX8sut2cdmt39dX3utAU4741",
  "key20": "4CuEQhpLopYkAcedeLjMUjDrP4Uocia29PQtUzLhJLEB5PbTYyUznxpfBSjVUp6AkbiucuHHb3AUTx1wfvhKBQmc",
  "key21": "2SdQYfXKJjJmmMxfMQZoaccgoFX1dG6E77ayQrQPbyELEyFxGqC97KUfjmneyiACtrDq6QggLbECNjosgNT1aaAB",
  "key22": "4GpoR4P2MJtRt9fojir7BzSeXi4EJ6wPEBHhjdTCEopD6R2gTvHpQouBzsn4QPi3dYHQuK2EunayBcVP7dWWwgGN",
  "key23": "3CvVP4hGcyZe4XXL8T6aGjadRksetEwhaQ4yeqKJVC8ZF84b2HEebVAerbuTSM4Xyqw5kWi15P2pfsw8xodi2qqt",
  "key24": "2Pctct9X6dN11JZUifbwqfmZzDWQQoixapU1m9DbC7Uzohi2EUPKDHUGEce2fvAUchXAMK1xSC16TZutXDUTw95U",
  "key25": "3AqbLqeYLArhBtVsPngeUCdzzHQru6FT9HffxFBjjppmXFZ8P46tShWMLK9kBaW834feERqRRkQVSbax1UKuEigy",
  "key26": "3XVGVRGWZYZeFMfiqiNeNw734YjYQsg3Huf1VFet3UxMb9BHA6VytEcsL2ZT3NT1L47PqJTJUasbCF8XgCVY6nwd",
  "key27": "21XEZYiZMN7SkjaGqvXPf4fP2ooBv8nf6sfDUVw8dTFUdLswFNutLWqWiAbUFdEm6HfRxD6HneCeFn5PFm3Zbr4J",
  "key28": "5yNfVivymJFWQtvAjMupSKoArFjyEKzPQbhPkMniszSmtsvFSyKWWQ7hmCdCQpKQ8PTPyhaR8rwrkvqGbdbCYmE",
  "key29": "SZzjifsqDkRg7PVZWnUkEsaeZHfEAYYXmE9cJABU5fWm3CVmcBeQqvpAJo1XLhMkxzQg6NNeBagZtFDHiP1VGLA",
  "key30": "ABnLmpxDc7tTtULGsAAs3oiiGDvBVDZP4ejES4QdnpYGtg6WtpQi8g6cWH8TJE3visMdJ5npiYg3y8Zib8Ysmve",
  "key31": "2rXH3nBoTruq1BRmQbTJGbhPqTTsC7TEQx2T9WriuvBktgFFd9JL55A3gSNSPCHXtZ7YCzgG1VJKLP9bdMWzVs4U"
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
