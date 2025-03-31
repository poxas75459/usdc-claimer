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
    "3dHU4FTRiGyFFF8NBHn6912AVxoJCQDDdsJKbgWim1savBAYTLMqUy17i8FbZNFKM8tQqKEk1s99UoZkMXJGqcBu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6RQyDsezBuGJMB9fyTZB8awHTyW3iD5UZkkghuHaqsqUB5t9tsHvvecS7i4FUea1kdPoZeBNeBy3Rt9eMUcQDNA",
  "key1": "27pd9SqD97DSr7LNwMjgu8kGoweu38sSqH6UJHvgNB288WthaZAtqop4MKKLKXMCcGiLXrjPTXFiALKuZUDnuYnP",
  "key2": "fULgFHmgZZgM7tB75Y4A8fN1m62nvRLoHT7k6VZfmWpWxDXFdx74Lna86MXXnaByQ7RCkbuaSNxFA6c8485TAMN",
  "key3": "46zJZXnMpuMqAqAKJcxJL24tkKTFRyZ7D6HjY5EAv44r21Lf6F4RhtyiEtUWn28ejBftvEs8D4ghk6PqaKsK3Cr4",
  "key4": "2YQLAK1nyR2YfTySn2soQR4x1hMwzP1SrsBk5JD7oF2bC8PXVn8GbTfiAbnxjxcYreqGRmL5YkNQgV5pPXzcymvQ",
  "key5": "2266kp8bX8nqgapQX93GX95gbRnyEWpiPQziGHmejh9HDFWgVTWe9K9bviR7HC512WsNr8GFLwBGznEv4sAdarU1",
  "key6": "2BVGM5gKfygdBJPKPL9EJYAJHPK6hsPtmnMhwREGWfjMduEej5hc2awpSkaAvLV6C1e27pH7bB1rbjn9wgoxQPJZ",
  "key7": "4bZXKStD8g3Wpe7SbWGT9UG9fr43xrcmjpeq7zBL9cHycgVa8D4HuW4Q6ScoSsfUNyT8abYP9qtdQYxcRysvFL5L",
  "key8": "3fuXGvdu45zocBhVp8csoQaJGyHQU15EE9EahDVABVTNRj5ESsV3QsR8Hrx7q2PZWoxyWQUfTNNzQAMtkEaCCPpN",
  "key9": "4m6YCwLoNPybrmrWjHsB57f5YhLCQUwP17SsBk7ukd8qgZZFiseWZZsTW1Kawesw4WYHPnqKVTxN26BaTCNTtgSa",
  "key10": "3tJGjCSktS8tiUXaVCc2jTaQc6amGfASLo3bX9SfvZWG5vWU3zWJWs4Bkw9d6ZEwU3zCn2G9UZXM4T28siVpnHyX",
  "key11": "5pMb47EisFMMTc2QE3SiPfs3r9F6Z2tebm1Rb6c78BRkznEh2EnzRg8mEgi4zAgSXFMdB6SyXzcDrENW6coGV15V",
  "key12": "4TFkZcp28NDxnmoS5LHyyZNCSBjRWa43k1daEUqLirrMNVkVZkyPoQo9FLYmDJdBC1TUBSsuWwTHwFouKB7ENWPg",
  "key13": "23KPitajLFdSCvFFLCF4nk5c68majoyNXWSdPiC6tG7YAh683Y731oNKMJa7dKeDRVJ89BX8jgaxo7YfdxkamfC5",
  "key14": "eSA6hMJzh3x4NUxUVgyTxh8svuweXZoQg8Fzw5SLuEgU1PHjwV3AroSmKekAf95p1B4TJZRcxpZJHwQ38xXFYQ7",
  "key15": "ma3zLjsayzGX7EcRXfoKza9ZePEQpjU293sNJ3LfqfiP12JCSYMiMpezswvvyitHjAZjWKgDUKBTY6pcyTaWSSY",
  "key16": "3pbXmXSEoCsLd6ReU9u4cccsRpx1GjaSXE6DJzXs2vo8D2tJBYUEf5PMepwakXyyZdX5pjGWUizyH5VHNMeEjJYq",
  "key17": "3bMHudUqZD7D8emUJRGg3HVo1Rm62AHo7QuLxxNjLnTfUAmM4upjmxsKEJJ3RiX8F3A7KdBtfqmCaUieHbt2d9CP",
  "key18": "9wErNUVUez1BVYsGiJEVmo8Q9CCNLbiBRKPGMSU2TmD17Ne3bduzTbVkg8ESrq9BaxwTjSG4UEuRHSKaYjhzqh1",
  "key19": "2Jp5Ae21RiSFiQboubvsxV3g4q7XPE36UiQciixmHnVVvThLea2QgqSezhxcvwgcqWKHLeKMUoVkxy6Kw59mwG6c",
  "key20": "2ZCsgT3qUmyqAJo2depWkWECrRuz7ttMr92oXxic1h7mTyVcfQVs4FBn6fajKQg4eY8M6fC8QNFrQHYcDg9N1zMK",
  "key21": "2jcu6AxaNsmKLoKTZw2V4yp5hxoHHk9ajsJG8xKbUjURCDHytcvPhNbnJNFGaipaQUQySjTDY7FhYx5iHvUpPhCZ",
  "key22": "24XwZ8cBpi2H67FsWHTSvNLJLeX5CouCY3FFTWJuGhaAr9Xsdo5xfJGdNokFEwKvReB1AtYeVYc4TheaNF5gj8fF",
  "key23": "JkRJ2bNqH1VVfw4uxC5MrbLJkce7jr4fDwCorUX2AvCRDDm1s2DnofniiE8zVpL7sKDVXYd47uPFnS9c77AqBKr",
  "key24": "3f4E1ZuWAeHpPRAfYsG52y9hiVm1kRX6U7nQt9sTK4vK8BpmNcQhu4UcNzLw84T17YMoWsJ1F3DSx3K3N4pFbFRu",
  "key25": "3Ezbcip1rkgjgmymeG6KATp4v6NEs6tboFT8296LRfMQQ93b93E1rDBBNy77cqTuHHyfGgEhbEjFiza2WV1c7wRP"
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
