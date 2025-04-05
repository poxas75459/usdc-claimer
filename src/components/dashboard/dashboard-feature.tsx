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
    "euyGeTfnL22wiDqoCp8Ejj45qwYrWE5ieL4yJ3SV6CNr1FPFGFe8Sjpswc5AuAnpmpJsWTFmhtJ7CJCdmBcrMjQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Df7rpt3nDNKbjvku4MocPJcuuk3z6xL8GHKZdqipi8VTnjtrQxJ6gAFkyWN2m8Q6Cd8GD3n1HRhNyrdcNCob4hn",
  "key1": "2QL8r8wAHidgx9rYYGibX8txodC3m9u8Ewe3gizwCdhDt8uUCLXgoPGAkPAT7Vt2yhCwBJ15qSfh8zKwNQdbuCbH",
  "key2": "3dAvsEXSXYhBaq6ERH6opRk8fNK2ESCo5X28Kf3uytZtvfcVt8i7gLRAdxUfvyq84Wr8ovvRCB1f5NTPMRgXYu5o",
  "key3": "2cnZB9R96ZCkHcbQ1dY2GcvTcJBWXWkYobnFZBj6t7YQGVpAEXW2iZL7X29kVy7MrafmC6QC5YKY8EngLpCkUqwk",
  "key4": "2hZ84gZSPBPdQBFNwz5Znxke8tWdUT3VgpTRsXtnmArnSmnCtpBBg6eJXgij8fJY46JmURfJr9rqtrRMZHh7siE1",
  "key5": "Jt6PSoRkM5Ky1LntFS6MmWZWNnCZ8Z26waz5LsA3KZuArkZRY5PHvscs7PdFaTjpQ66SUS5GcY4neYp544bhm96",
  "key6": "3x1KJCP6yuJZwJek6P9R6aUJjthHDbUV6CYfzM5T2vR3sDzbpejZ25EESXr8RNpGmtVZuut7MW9Egm3qLd7fcdTu",
  "key7": "RNbM44ZA8Epnr32URrYtE8iDE45dY5SHWcjk9RaisLYd3g3xvnyx6Hk6CBaubSE4LCuwEZKP4xkwX7VHio4EVqe",
  "key8": "2AiALSRi5nsNFj78JpvGEbEy4CdVBVW22K2ucGjxafKXxCq5JD49EQ66ESQYPSjzAJ2Cb9pd5h3RJReceY8DrhwE",
  "key9": "jmSLSNUeopMCWJnnc43FcS6gddqxAUtq5PXgQs9HfLDB9GjJjPzESEuaeRqnR3hqPKf4V9ALSoNDNLEJj3Zsdvy",
  "key10": "2srrQ7YiUoyZRZ8wM7e39gNrvkrHKWQStzS2nfFsTjkee1Gwv4LSiXNz7wrhinyALpYyzdpHeepALhuQkAbbiDNn",
  "key11": "3ncKaCCc6Pq4B5RXxeL2XiyDpRaqqF553sykWYP6XJ5ZM6PQ5p4dJFCanASP8qo4MhXJeDeTHR5bRtyUtjcwDQUp",
  "key12": "5YoHNseHzyzrkZoo4mumrx1ALbXvbQSirEW6ZnAU5hGRZNXEpdMZYuffR6sfUpjhfm1gj4X8xGpq5nifegEQfhwW",
  "key13": "2LV3net4P9azLKq3tSUXekNRCtZxTTiSp4xbRVXoimArTKgri3QCCicacpDbJmT8VhGA2ax6xC18b5c5f47b29iJ",
  "key14": "wKyiNP9sbptAM1czzGjPYgaboTJ3t2RRamYLwNGS7Z6vzLySBV5wdYDo2SKsaEUte2SUVF8tzpvvMcEmiXfqsu3",
  "key15": "3hStmcMhcnDKSHP46BXtyMiDLGVVVat6rYMsUYg7cHdrVgWzZ4MpZeok1fYCTQ4kEtyRWMvXyz4uSwifVkhu4LAt",
  "key16": "4Pk5CxK4zK3MEXUnkYycvpkaQr4bqND47SryYRKp4EvS4TKP8vRK8NmhRUkF44ypSm9jEqLKkqQV4ciQ9hUksWtH",
  "key17": "4cxHVWJTBSinhvJ4B15uwiQVLYxnMw7TQXeEcqNXbcRqiCbBdrsN7eRPqi1XGY7H17thkTn6u6Mh2vShjvu6tEF9",
  "key18": "5Dx2AXA8JEZoNwbQx792eLBKuiyzghnxsExcVDeRwHZ3Ev9ZFE1qwMVurVqzdC9MfQnKHNeBMKgXiFpbkvh6iTZY",
  "key19": "4X2oJrhTJKWeNBjgPSTfhVH8XLmSvFT2ieJpmrTorNBdtzScohspQF2tuckyHrsSAk6Lc5Wng9v4qpxTorCERy3W",
  "key20": "pB8qNfeRWjd6JWErb2CSA79mV1q3qHdrVZnSyHF5NmMAnd29gwpsmf5NnQDPRsQZg47qMYozjJnAHvWYJeaNzzb",
  "key21": "pZvmQ1KjCwjA76Q62CPnFrxKuWQYXM5VdfR81K1sCw5N3xgUnGBRBh2D91xkibRYHZFxgspQPCDqSzFN4D5jzmH",
  "key22": "3UtGytJY3LnYRmxS6dadc5wdzWRxPVy5xiKSzQh6uG3bp7MRiMTqaV3zoeu5Ndow29EvWUV5pzvpruhHiwPdNvnn",
  "key23": "4u9ojhfPhndCoVaDHfFBrCuwE7kLtTVrD8WLyaNazUBzaLqBmMMMk1yaTcgmCvd6vjY3h7kdcTYbwXpwrcmY29vF",
  "key24": "KXzzYjNguzFWAqHtFoxezKdXtuekXAksPi9DqwEdDsWTsYRmYaYkMbxFDSTv848HDuF8bgK6PPYucVLh9Spf5ih",
  "key25": "4nTeAcDy4Dhg3xPgpv8YCZLFyR4RHFcLrSz849kbmgff8JUNPfRD64tA6t2C2RKvE6QMJe8jDsbdXtv8DAUpSPf9",
  "key26": "2hW8WyGMK9Vo2U1uDHK6K71wapZwDDug9tBvSzViiGFiHsuALiJwmXqvAqUrhqKPRQYHUjt3CFyjbszSfFg2MJBh"
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
