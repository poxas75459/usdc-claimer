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
    "5TFFFpNvY4dPUrEbGknvsqDVjUpRr4rWPrgixinGqxeBhD5pmpzNfPbNQVBUtTbcm7XnaoKsnjFzQsqA1pttUDw4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hizHGvc7S6VLpiPJdWGhTNtyJzGPM8LkAQ3MJLGHVYioiPR1T1VCdX3AqDafPG9KDZiEAEmVY5YCBCu2HF1gUpb",
  "key1": "3QeAi5XUrwnC5bogCbAEhN88rnExKAE5hHvLwCPoaqQWs11myt1D5yVvTQ8RSGX7oefcKV3jcpWNbzJH67cZHJ7j",
  "key2": "3nsMfwExDVnCNCAcJgxdoEpogTqWVtDwc5k2rLQHcVwMoxAXauwm26PEF16HCttNWXthTL77c3BVz7Bo3cJLSCEg",
  "key3": "5AixnjxTr1e4vbthqg56fe8NFZ8RmaUvhJRALpSH9JXq73qktsXtMdaAZJhwRDLEqQRJttxJhDAuHPzSeNjwkeUt",
  "key4": "578usGnPmBgpPUcXAnsWYbTJbreZCw5aRrupqwA1pn2f7jZwhGXCBx7mYS8aamC31Sm7NVKpvRzSPDrvxpLUpmwj",
  "key5": "645v2rExe2nroALnjK4o83DT4dAkFRx5FmMdhfruU5jgQXby3UZiDYN2RaCjTejvDn15jm11H71E5x4zVNfkAvKU",
  "key6": "3GrhhQhUdGTVAGuV6TPq52J3aJeRTjPcHLr376UwKH4MSbFZtt6MbpxRwhkcDSqFoL92tdLux188gxuaMcmm7H5x",
  "key7": "2UH5RAr8v3VjNqMqTTxg4ztmgPKCDJYUnMRdjQyeeh3U3EMwwAiGT3YT7LiPvcJZ2wjCdrVbxz2FVDHHhpa7DkKL",
  "key8": "k9Deqz9MLiGcW7Sq67GggRJP7ZTYmedyvQp6gJFyiTiYR6V4hmv463efPV5tCbhqYfhdRntJRphHpurnygcjgSC",
  "key9": "44d7nzcConpXVPmhPFaACnw21GyfwcQWmykV5xgX7PHqd8dDRpxwswY1RmAFQRVFTu9CpnH9aqyRiLmUUyerrZPR",
  "key10": "2N2tHPk8Y6X2i3z5HogHHN9i82K76Nn7dd2NKJJ1DGGvNhRmm557QiiUKfz6Ym3y3GusjwRZTMuaFYamGPedaegK",
  "key11": "4Dd5RuXMS6TFkXPjjufrfNg7kwjJ18vLdGVEKcYJLdhD4fJM1gBGkJUhoGQh8bH31hnqGCdEj663f4YwFPtxtGSd",
  "key12": "8Xib3gE9o4ejsmTvYrP72SjoVQtozhmhtq3jGrP86eFWpzgnQviBg4a3Nfj5gtNRavc1HaAfUPEhHafhLuB4yD4",
  "key13": "4UZyFJ8tHkeSPnKTTEJZkAtUzzBbY98KgZkVhem4Mm7kjsBp3UwyMPEYATrteWYzJ6pPgbCKh4dbvyLqqbtvTSmb",
  "key14": "4sq6JkVFwX8fMwAHro7cirmoKHNZ9CEQAexLccZroPDNWXkkT1XnMdBR7V2qqosjzgRfCNDpEF8obnL5Z4pBMn3A",
  "key15": "3hDGC1HjzSvyuYkhbuvjU8UKqApTu9myR1f5E3PeJZXfK9HYqX1eRhuzTmUa1oVj99n2mfa92mKU4vzdJKGtv4Rp",
  "key16": "33YJe93YXbUv18xsAQywDXchr3JKYninFbeYrQUaTt8VR7TufDBHkt6uYwVsArLAgTznGQEDeTfySGXWa97HHsFE",
  "key17": "4t1qPqjZt8w5AN3A1JyLj48W8KmzzkQsGZGau3qMuJQp7aEDC7Uq4sZPDrr1HqBzzoXkQr2BADBb6HnP39YtRWwi",
  "key18": "21UBbgEFWHDLgwYUMmqNQ5qPBRGHsG4cRhECacJ8JAzXHg3MDR22T4YoNxwEo7axjuovdXJ3ZqR8yhWoYEPGg4Rt",
  "key19": "L3GEbddQrrjks3QcF1oAjcJFN9aZ3VR73XCK3XWz4WEVqSUsLCg8HZ9k6tSydtHVNYW2yGQ7UxykcDCyXKdHjKT",
  "key20": "5pwbpGXxK8a74pBd8K5JbAC5Vdfddd4ECz377JcXLVygF3v4RzztfYES9UVqvyfYY2VMdq8y1tk98UNvrWXohFYK",
  "key21": "2Dm1VfqJsgvbCJKtPF2oodEEyGdt8wyBq6h2cMu28x4n9JXruyb4BCPk3UStnJ8G7qcwWSYdBuhTqbaDc8LPRP46",
  "key22": "2dYErJ4twQxQ9JLQkUGepkXM5sgEBUw6Jwbk1xdCD9NU8zQrv5MokUwGsxX4PEiyTWsn9EeCKw8AmfNrY9wvTVhq",
  "key23": "2sD3s2kytbuSGCdWnAbgAGqsTm6YhJeM4bfNNkzALDH5uEYybgktw2HtYhRApn6Geaa8WwzypDrx8D9V8BbVXAJN",
  "key24": "371XKfCo1SH6rg8TAMkkgTmY8JRcpunWJeCHCCGU4yPJd3MPu1v4qqh5ZiVQQo38HwUGy99aN5dEcZdbqEua4GDk",
  "key25": "kxrL2Qd8v48YZm9txwA5C5BdK9pP21LWUwWA3tnjpAm5qwjGKnCfVQZQcBEjC1AvcLqPqsDGEU4VuGh2t4ukWLc",
  "key26": "41EDhUuRh9dmqcVDkEtVXBoZp59P698Rvg1tLJsDMTDCFcovC4W8bz1bSfkZE3DsdiZhkQX36e5eLfXAQBvzdwev"
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
