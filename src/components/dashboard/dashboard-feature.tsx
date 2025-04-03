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
    "4Fa4HZr6LbUKV8nBiGtsep25WPPFsJLRow9mb3843TGJFKBMczYXo9ZQLJtMjkp6owhqBqhvoSDk9vXHCjPeLLSP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TNKdZnd9RmSjFwxRxKv1uCiANL48RRTZur5Q9pbPrF8cUNFzfvsEdVcVTRfznC3veP8VnAdEa93puVMzrzNQswW",
  "key1": "5TgsmbyDcsS3BxzDWokFZVsSBskJVSwKACGrEQEkDhFmMYtS97t42wLWMVh13cPbDYNLuyX44AynpM7S5vBcfm1z",
  "key2": "4YX7dFM4bijvqQmBHjQWthrg66sbjx6wTxjPX16ZQ5PrHC3xECW1NSivhNkSNh3uP7ix3GF3Cnzh3k6bF8ShYkYw",
  "key3": "22i3mRCV9mRwUWR4xHhbYqQ34r8sSR6aHYf7YJ8toA7X7BSpSyF6Aza7eSAz3W6bn5NjBgAo3L8pPgwxvNsUVpJ1",
  "key4": "3r7aNAdZ58vLJrAL76pQztxrDmHcDWzeiYJKnY9YH8WbVxX5mTbz3hDXVoQ14nEHXaziCtvWUR1r5kuxN8SFPNp7",
  "key5": "4iSkBsVt6rLbUfzp4y87MB5yFo6QtipKXqW8X79so1Qv49u6BZHQ1fTti99WeQ3oBUjyEsgfTEXCjNN22zucmDB7",
  "key6": "223EnkunaJAezh4TGc5zQ84Ya44ETgqytYjLcyRrN9jjv1F6NhGP57mbyjfjDUDwM51kEdJ339zo8AbbYmuryTiM",
  "key7": "2qTSQ1kSZY9iAeQYxJFVX4tniJYEAAeVMpdAVKdMrMutajh1eN6szffXUXej1UprhdWyFHUnQHbCHx215fsTMuXp",
  "key8": "EXh2QWmnXQGfmcUJWn89Kjwg16nYEw3X5SMNVMS2w7RLLDdoiqBR9hNZYUA81S6xf8NFqwstiaMoD3X8mUvi34F",
  "key9": "Dc6Q78q31nTRjn7p6G3pxJeAJFuFFVGEyCdiXG2vwF882yWRcDpS6r4ZohRAok46EKwMkD5H5drueWQK3m5hkW2",
  "key10": "gygpFCs7bNAB7hdbF1Q5fLyZCxmohTmUn1J8b9cZLMLrrE8E9dVcNPQJE3VUz9tcGg8GjTeyuRdSgzPNjMX7tc1",
  "key11": "2Cd2oagwfCE64oZW2tXmqyjLcbNtPfkkjTXyb6N9JQhKZBMD2ds9NdG2Kwa5nF88vaVTpN2fGJzEhFZaFifqxWfh",
  "key12": "5H3U4Y8bPSrPFfqRiBmMoVJtiYBktCqz8Kt9LZMeTS89y7cgSPmnZ4U5hCuSgGQFGyXaCDWkGcLeyfAMACwtiqK9",
  "key13": "2HNGHZ2wHvcJsPZtXKn873UAMkRPNxEdWXW85j1a8FbnUcLiwYVjGeR5czZH9bS4pGHYd9caoZknTKxR3JsK7iDg",
  "key14": "5QdwWZgpLbcd8hidiKsTpNy2KT8CSqWY7yrF4qbfoz1x2QecJKHtgmTHP6BKtPY9hnHapwSwzc71DXHSycEvy9pp",
  "key15": "311bfVbjWUZVq3zUwPKJFkjEtTHGAd5pypkeXFmp8ii43d3AD6vwnjRpbTdAuFsYiAyupbDFZay85iRMw2yUnqVf",
  "key16": "3Q6E5urrvxEkFNkcc8voHyjsGxyUSfdJXKosMhCxfG5f5xvb9Z2H3R1HRZEoBv6JDNneQan8PEvzCrRrKP38bHiH",
  "key17": "27eFhymHzFUnhGqX35D6C9STYsqfosh4yxcd35GM8WqbR6dcnrSyRLs49vaJNn5vLcEhUwcpmsQ3VkBVsv7isGpN",
  "key18": "4X4dhwfPG7XpKSHic9adSvWHA557iLNfcJr9VgVZQjBJLH7GZKZLG6s77uAMZxYt89GqSewVWXzC3tZrkgLpjuPZ",
  "key19": "cavX8ZWxF16Z2gAxopwiudEEKdLq1iaVe2CvrCMo5CLkeFRr4jNazkW6hrChqBZLc5j5hTBngHrsVWKqC2U6fhq",
  "key20": "5U9iYVuNbLkTbexvieFMp8WC9kVRSniBy4Eqn1k7rKBt5So7dNSwM8ytZ3BrGLRTjJD56fiY69SDuXNiZz8Y7AZX",
  "key21": "2qcFtLd2juebTNnETkVNMasbiQBGFerM3p4vwneiQkBpNzPG8CDZ68bPAcGGXNWd4covFQWFgo9yX32W7qmTGKZ",
  "key22": "4BeDbeuZJUKinLRYfEymDTRpRnyisfY8DuxsbM7AYTbkfhfn8FE54q5M9Vcy3J9DyGyzDEsY5kRxscasHVPvXe36",
  "key23": "4S52QEnTQhL6mkvzyduKi9vmj9PgT8s1Rowx3bfciTsQHmf7VpUNRtXBidybQaHRMsxJqjsGyK5ABQJcDZuDrqnu",
  "key24": "44hr1Yhyxmqrt8PZnbmFP3r69RrSGBJwfcR9jAeD89caox35jLZymZXyh93x8ia1mw4bnyvtkrPKZWBsft2mQ5XK",
  "key25": "5RXyC4dphaEiwMmj6voKDXKVhEmBLUzhZ6G74thYFBCyXHkWjmPNDvqQwC8qqqWndApmgd734M3T58TpyzUDJxz4",
  "key26": "3qmar1MbsXZ6mhYrYLHtbzfTThMAcuANMAe3S44fMUzQtKseirEeGYs1ziPK4oM3XQN4BkpmWwtHmx5HnHGoCiLQ",
  "key27": "611F7AEcNX5nRN6bWPm6XMwJnbR9pzhiBLDmZEXDaQ1jw78yzufEJuJBcgxYwdZJaMxCnKUi7pxejkpiRy75bqAU",
  "key28": "5qVhAeqz2m2fbUs3uC4QUADMCntxnsZs4Kaf2C6LoDeaaCBiq76aUffxHEuDjgdzFx2ab3UrmoTEToafPB1pkX1i",
  "key29": "P8KvRNPP76nQopBgsNhnhvtMYVAuPLVSeKB598Fz3dUbEfiCyFRkLxwZJ1G7hUWZ4EHtnVqkz7dgonPooGU7zGT",
  "key30": "25je9cpsV7dj4X1MUfAPP9ijYe9hXsiUd8Qa3j9BqMVsQCCaDkrvM1NsjXZDkCYtV7A3F3ZHMV4tREgYpZfv9GAK",
  "key31": "4gX1QfSnNSBVEfogoiK1FTQcieJ4JSj7WRbjfTas7aJd8v6kHT7F58USY2SxUA7XUFmi7ACLT2m5GHrGnzmwcdw6",
  "key32": "3EyaELiaA3cGUjKj4joNiZngoAgaSLJ9B3XurFzCq6Hgpkdd5orkrKEJmvwMCe7VhTLJgJt3aksohoa27hPZHgb3",
  "key33": "3EjzvrhFxdkUcJTMtWJ3VyE4MaquozjHfbP5coUAZwTSSyWtk4Hycw9Vc2x6UqHjCdQZ3e6gHA4gNYXvG8oEPDtV",
  "key34": "347ckm2mattRarhLqtRYwSNkHvfErKkFdaQkrppuyunaXdDtM9NvmPCiMPjMfymg9k9HtNqBNmzHHgkNhnRAygyF"
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
