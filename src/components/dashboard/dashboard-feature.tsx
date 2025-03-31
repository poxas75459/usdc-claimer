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
    "vznquadLzoTcLToViQqAp293v2bbHsFSKy4NqkTibUxjMSQggSbTKVUVsuTvabFc1W5ZhTpj4zR11kheyQPtkd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zq2L5SAbg7ciBBdDNn3KKs5FGC4zDxdhHrTxWf577g2cRzzzpD9PFbJttibFa6NkFmEUeeLzWZj18byN5jobEt3",
  "key1": "5MQRmuTrFsfew9dU8LKo59Gpt77MtRvXG9JJ2YMt9uZyrwZugL6t32HmxcM14jBHTgY4X9wEV3aRhHVTM2cqVVDW",
  "key2": "5VbanZFZo8MTtJYYoBpsMuNtzuJToMCXuWphRygyHd2zGHv667kyoeV1piEQZwoCWCcryiHmUMCm1zbBC3MQcXCL",
  "key3": "4JAebvnySrNU1sEDjKswZd4e6RhB1RucnfS2ZdReRFAhcDaeyerX13uqG5GJpz9QFHiBk9FvQXcE1nZasdQrLJv5",
  "key4": "BdVX6iEJYMn2mHWwKvRpQd8kyxCZEX1C2E3wdPu4mzPQDieP5tF3equpQiEeCPB1NktmuXHUTdVm8GjibRu8oVZ",
  "key5": "oQR5etNVeXVZQBb3ZyeG6WiHiKZoeinSFL53UMf78yeahfMPiF5wniYkpuoC38ej5HEuKZmFykFaihsZ2NTtS62",
  "key6": "3Mdvz83Xv67RrGupZf3Rn6L51Czu3Eq1TMcPPY9ZfwxJ4D3TQBi3LMaSLekx5ckZtWJQe5ibduJxFtvQRRcFatSN",
  "key7": "2CencWcDr7XVd4kcA4cQtJog4pEQfBposxVU9cMFCpvt96Xrgq8WaF3UuxB5TnGvfpHVB5fZaZg5tAcQdo83AfjG",
  "key8": "3wjUtD3Ch6ABxpHJwsGVqDqnN266654FhCECqUGyjkN434tPteQFVEigZHXJEmqodeYBgvhaz4iVmuWLQrTyAS4X",
  "key9": "2GyazaJEWsggjYxZ94m63UBCJ5kPdXozvG65Rhj7xjcFYJ8hfCijBkW7mMefQQYFXwiw2u7McuvfJHHW7AxfYDDB",
  "key10": "3z9SnE8fN9yjnQoLTegr7NYYYQL3V2oZH24prBziJkXoyYuVhx118fqwi8hw9zUVDSvaZuHr7rLoVTHtimFec1KR",
  "key11": "4vn1yw29x17RJqSFiuCY6ZcQrquhkuWX6qQk43CdUpKHELexyq9BJaYCgzGGNA2vGgXdGKoCLPfdrys5dpCACLfL",
  "key12": "TFAKLBJAHZkmRKdq1wMsEaYPKp4rtxLihXEBQ67QjCTdFm1JDjeuWWu8mf5WDRQNGzp45Zm1z4tpR8KBBhdRdcZ",
  "key13": "3Y1TGzR9CHMqqLW4bHZZM9fym5jVWeoE8kHSemDfoEoNPTtSNy75C6nS7VBm33QuiApCNLaYAWnPDQRRoUDbvVg5",
  "key14": "5LH4brwwKvzHTQzgiTFUqMcNhXySAyHkprD65sS6yqNbLaYt7CN2YhAUwPK5qmiG6Xi6bErwfmAWFHgvbKfMaNx2",
  "key15": "4ipouLNUoNtNfsYG2M9sJpGtSrXiC4ndp37xMexhs6K95wX1FkV83VSqaTJsey8rgaufByDnRp4dxboX2g5JqetF",
  "key16": "NgwDwLB2fVUed2hDKXGxYvnVFJdwt1hrF7gus6fUPdokPDaGAjZg2bo4Qqy9BjubNsW9XkxJeoUyjRv5ufud9GN",
  "key17": "3ThJ3fGemHzAoGGAvoxxFMBDzrhcJMJdZMUxsxJkxdzb6ffPC3Nv7Mr8sJx3BfuoKHU59s8RGbJvKUoadYRKtW7Y",
  "key18": "4GKJqLQ5XVEyjHfbMNFZjt6R2h8nXLmYhAiaSxnumD34T9ZAU8hcpQKXqUxMd1XqZpGXwexqAEev5M5ndwn7oDL3",
  "key19": "35MNvmo3yWxBnwTZWL2qPS2afZmXdBZwtt6RjKZfSLuRCUj6JHdM4oZY1rykQPivfz3CQUbvNhzxakRSrazRyicX",
  "key20": "2HyvyFbkyvFwSrFYvb1Jh9UYCQjD53HBWW6AfzqCN2EBG8svMcnpsHsJtxoso4EmHdwmKu97QbnJgKjdcgVPBeu4",
  "key21": "5Y6kj6Lq81SpP4RYa7DfZZKf7FbJticUPNBCftTMuTorjVvX2zE71cYMEyQWUFDKJEVMXj3JqnGgYJmQs15mCqxH",
  "key22": "ZHX6HNh532AaTUc5fWus8Z1kzTHDYsFGeT1VbAVyVLV6cTgDnsYbhH3t74yhqCQaN3KN5Yx1ZzknYLpFvcUKfYy",
  "key23": "2ygtyXw4s1LP9LGh8PwY3Uo1tCDFHhB9a9buvuRXc3xATYJAbCd8djbPuKgBZs13WYMw9FxQQHcx3tK5phkAzL8g",
  "key24": "3Kqu3bDJLP7eVWk5heBw6XBfttt4npdiLVHveiNpBC1iQEtzjzBnqkoC7rQMCMm9WriSMRzx1AMGzuobiabzfH1G",
  "key25": "SjN8ymt1vzwPBUom64sjtxKLUpC37W3B49XbWKSstUi342eHPppENVtrGXzPfFCXe33oRHmZEqDY9keX1S9ebxP",
  "key26": "w9omS8yoPudcs36dZyYCe9oib1dDaqXyXiu1r4GfLtZszGbU2TXYwqkwDzcokoo4T4HEE533LMjJ2WPQdLKKW3d",
  "key27": "5h2nbwnTPcfvLo5pxod2yvYsrdN52rAYcCHpnCiKLkAjRRcHt9Ly7s2zZMrVia7ya7ESZL4f78Atrwz1NryCfFqM",
  "key28": "P7E484DCGvieTRyvGkGChBPmyoZeK8vZgzPuQULCs6WYL4iMTUhE4aNQ6V2qYMdJ1hSi4faxR5Y7yU8LNi43ZAx",
  "key29": "2TGG9rECdC7cXWVj6AiFVaFbhNSbY4ZZC2VVzVqjbzmGjBvzpqmDE9N8N9CTi3easLLzYHXebTjo39ipvEwir3GX",
  "key30": "4HTBqSQYGP3NHFkHstJbh8pzzVxZL3T375CZeArzCegr9VtPqQ26dhaxHzghPFcy4PgsYqnWbXXz97hjcq1VPfZE",
  "key31": "5cVzhguxUqsTQv3c6iEANXhNp6nuvZgKtBxVNBtK67VzPPogBDrT1WJXuSLos28A5FUFnGKGdmBpgrouVdwJ2tZn"
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
