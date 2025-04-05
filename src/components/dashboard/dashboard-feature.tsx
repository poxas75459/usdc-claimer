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
    "5PhAYKkGyLwPfrxyGHPg4zcWfZ3RtFErtAcNgoNuBH2gNjMroPXMnJEuRFS6nT91YthfeNN2s217Lax9rKj2hvfc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WmBWmGHCrg3m4VxQzha4Q44nWK6DrgVoK9UQpsjucHKoZ4LSmCDiVFN9kE5oK1MnRceAdRTzbDawVjPhurgfWpG",
  "key1": "2QPKyrguzMYutcPBBQ5PkM2dJJyA2zpFBvLrKaHJ6cAB7wdTNorbSY9y4XMZaAZxxP83goR6XdVpFoFPkGHahJHz",
  "key2": "5QCHaPJf8Qcn7aYk6NsR1WogUwnQ5HoA4kBPjGtNzcB2abcrrWH9Y6Hbkc1F6qViubnkrFM3YYkFXecKQDXMuFys",
  "key3": "o4AS3avWcwtNKf3uU51yJEUqKjCLMCn41Rq6LmoWGhQwd72SZ9hiUujpnfuU8yfJmpwkWte6RSyfrhhMTABYmxo",
  "key4": "5HDHfVrUMpHwKnWgASV2eV8FufcBrmaXGpTcydNGAuYQPn7rx2YbgvwJkWfepGNm1z8yAWPyLSzekbQFR5EBYRrN",
  "key5": "5EEbwHfZ5NZYjz3BFFCAAmWKj5LK3VjUHK1BUhhwc4BTEX9nxDBwkYZd1yzEwx6S1jHDavhZX8jMJ4SPf4KAHc9o",
  "key6": "52tf8vX5R7uJwm6au76xXowEbVoBxLnWoxHDhy3Vz9RdnUJRr6tjXoCg3NnffqJ3K6zRcoNg9kRyJWb7iCce1z19",
  "key7": "2X4XJjkvdVaXQe2XJ4TNfnHTaMDSowt5SPzgZYdGokKqmDQoZQB96UK4jrHg6jg5CRz4AiNdjMYUqx1RUc6CQZ6a",
  "key8": "5RiWhNjjpqewBP3Cmm5r1ojqtdXLSJqdmV7mB4RZLZGrDBQGKpANsnsqgGoXJUqQ7shcua4vMuRCVQfm6mGFAGoU",
  "key9": "271QQc81VvnKBevg28TLs2DSBzMJVVyjopcDr7dscxcN9pST8GEXCWvDWcBAp3zkpjw5C8qrnJ7BboKTwmuozAq1",
  "key10": "67TShHK5EkTSGWW2KgiV8GQoQAhmjh48bBSfMNuXetW8G1YHhDDoz5kkfSuRnosmfEaGkjRC94Nb6YPjivHtdYWh",
  "key11": "3KA2axLAcySQMjSaZYSeEP2xLwsD539ETV1nxVnanUpGXwdXfszNYDwodmLtLVqThXVFrr2rfEG5gbm7xi9N7Cnp",
  "key12": "4Kg2NBUWTy1B5qp6ZKKRrYnvRSj6zuLg5GihZupwz1ttxrJgzz7itDg9gYfEhAsUcNs9knzYK9TcYeJHCdyCGL28",
  "key13": "2mRfmsGn9UVuLAE5ws6Y4oqchFBgVHUXXwL8CUpMv2LfUaScwtENKq8gZVyjk8iBuzoCzpVz9hW5VWcLQ3EMfPs7",
  "key14": "2EMcYJGbHnEharFjrGnFNxXpfSeQr2bUUynCAfkJCXhUnvaM31M65E65zsGbM3F92djeD8dGkKbrdwMotRjz2Ff",
  "key15": "5k8eTKL1BY2K89EcHMta1FJoqZT895jCV14K1Q6SXxBXvXgufiTrYWx6HF7kGUhJdimT8Scae1QYpG5FxoHH9VwG",
  "key16": "4jTDQisYtBoZXfFhqPeUvoA17o4VXaJbN69RP4sZ5Pknaa7rDCnYcQUpR8uHEjLVqpRZcG2vpo89P4vMqpRamBxj",
  "key17": "3EJtyk1AS17eCMTX6w8y2dvF6xjkS5d41E6QRhdoeE4Byyrugzx5Ys5XEWLZQVWEEaY2kKX7PhU2E2SdTvZVdQ6D",
  "key18": "42J6oocoyAzx1Lb6jFFa4fZqL8d6EeYEdGYUgQyXGL3xeuejaL84mBeEhdVxuYat4FyYnd9uthdyPVfo6ELrVtkz",
  "key19": "4NPHQXfFHWFDWsUyPK7NXQ8NkxDMA9CrNqziKzpWzEupAnAB4srxsYqp2aKhqUmdpVyDoPzdAafS6dJdgE1Hm4oM",
  "key20": "55m7W5breAoDcWBbYzzXLcW1CPyHzai7J3hBF6mWbXpTGPAu3rLi16yAg1gvsnL2EE8dHx1Z9tKzM7uAjksSPoDs",
  "key21": "2TVxADVyr7qHQXLNogYXSKqWPs7Q3fHRgdfXE1d4p38hKGtkNMG24DqkpUjPxs5B9rRj7harQwGRKw77ozJj9wtQ",
  "key22": "SzoNj2svix3fgD3ka7EUYp15CBXsGNw9QgCZVSEnhwog7J4KTVASCDcg2pJsdrJXYpYxAEzyB5UUH3sHJ6yp9mn",
  "key23": "iCzymLFHNsdWhsgmp4c4kxzr42tvufb513EtnLgoJswT7SHBPfT53Bi1WDTuGDqyK1UT86mEx7HX9WsB72jSRbp",
  "key24": "5SxaVQ4P2bDyWPnJMKRi9rdjP2kNXdq9A5b7aR6VzjZBLCY8Z1TNW3RPT4Bh8NHXLwY2c5Qb5Nwj5cEobgDNdjbm",
  "key25": "MYySJMYAV2Tn7UDydd78bHrL5tzG88F83TRYU8dugPkDygCXuZ2z1SEYCabKUoRR75ZTjy5dBV4VbA16Xe8hcH7",
  "key26": "2uERtxVrWE7hezrmzmNKaTuvsPydsnGQi8jKALeCjyzgX7kLDEvBBQJB5tFVpWDyEyy98HVTVxwcJrMrLeaosuwq",
  "key27": "4HHX5wzpZHDJGDKGNdRPrFuZcMmganv3GyXofcwpZ4ieuCacjMEuz8ZEShF9AdeVYU6NLSdDXZA5cE58zNs7EPjA",
  "key28": "STAHZZWCxVt4Wxf2K6hEEi9DsQRqotHdU6QmPETZKz8XjiXa1NfJkpLhFFq4pH2CxCJ1BSey4skuWc4ZpVbCSxP",
  "key29": "4m7A75tRoQuNVrCe8tF3pGTNyxHeRpH4DdY2TcKABKVaPPRMEW2brW5HfCpXVmHegy6VGpC78Zo9o3xzFm5Gcfqq",
  "key30": "4UX7aZisH6eJejqgWnFUgUDqfvYNiimCZBToB1bN7uhcsd8oFvavxWudFAR2PuRpwa3iRNZftrMJD72wuepRioif",
  "key31": "55v74Yu6uRxucXbQLdy3612o2YMvCNCAiEBqwMZcd6CP46f94PyPRfqhHFCWC9ef3TsM219r6C72aCYtuugXUVD9",
  "key32": "32wnxm5hiv9WfNaRkM46dLoymTS1Yynb11M3e9AmV63JkacMH52bRW86bZqx5k7uGzpT6T39N1XQwK26otPJ9kyN",
  "key33": "5oBNqiaMfjqmWuVwFDTRJjFvhFPZrYHUyp9bmcaiRYrzBYhhZZeGHwKq5QyS3qHuLQWzgUvJZAkZ1osnBZbSsLwJ",
  "key34": "mb7b1imGrYURSLMntvwJfgDS7fy4HZjJ3dut73BLs2N17eHLEpR7qT2hGJLq2Px3WvuYnmJQMusustUnQ29XYg1",
  "key35": "5DxVM8F1V2GdmGNtA17GMSx21EmtbSAwmx6phs38VAEjoRqeJp27Mh4o7WRGuoce8WPUWLtHXuj5cTYLt6KkM1Tu",
  "key36": "5saPtng6FE6pMGDHwxb4xGF4Gdd6HE1AASt7PR4NXp6NE51ZqaTLG9nPEnchQQPizcL1RE61zKPeCW8tgNpoF8dK",
  "key37": "5HA7VAnyvEESpi32AGPKsyvqjPrg1cWps7ZegNL3aYJbqpuAhDYgH7kUKhckEHay1dv5GnHMk4sKxx8nNz8zKuWo",
  "key38": "9UZ1Uh2XkL8wmfdsQjcEDhvdoUd6bFca7FHt2Pd8ZpLSSgtvxGUuHET8TqR37FNvpihVAopwX8XaGA9jf2ko94u",
  "key39": "3gJVWBxR51Urc8ZUB8Jg41waZLfPCQCLJyWezqMdfkgyZeY7ctxniNMrdqg8bpET3nFvw5BnBeXVX1mxGFDeEMtc",
  "key40": "b8ZJLFjMu1rMvLDKrU84eb8eYXrG9sCCCLiTnQYEQ6qi6BQPqVTnh7owrJ4whVQ7fjwKwCJGhojVjkhhihfDLX5",
  "key41": "5q12B8kK3RjhYGWcCVkMo2FZmuLVLwLUqafGYybTNUMJCTqZrhh91Pr9anjPnTundoB4bZYSDuvz5HDmEF7UPJoZ",
  "key42": "47W2Q7ZpP4iF8drzLFjt3ev1Dtt1zMWdTjiUivvESmDSA2L9Msu8kwywK4is9Cn9cKrMFkwsjukT3ZpCbfgYXnkn"
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
