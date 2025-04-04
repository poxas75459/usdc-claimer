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
    "3JMwKwtxcQNBxqhqbbCWTg3Bq8ohDhSaktoQ7hTsZwvAEi4vE78feiAP5cmGjhWCBXFuQcnGSdYJvXwv4hhxP5Ki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mkPRvEgXkRb95ervs6GLGzWzj2t1Ke8qeyXE69nQvU8TAvdA5xDykScMT5QACj3cVNqwiaLqb3YmPUMgfDr1yzm",
  "key1": "4fKqez99mzvcvujsTAfgMTb2hRxz5YnYUhdBSdmCK1x7xoESVwjUecgtPor2bbAb5u6akQeoc1ZCXne8rUvXhcLe",
  "key2": "2oXwBKTzpgz6YdssdVzJDuzMKVFAVqQcr1C6i5kEQ6abYZzq1cmn8WEmnAY8RyCybTzY66e1kPrQUZV3uqWRBEpj",
  "key3": "4UTSRiDme4os2oBHkc7hgnaLwmcPkDhvoT2kewJzUFnz6RRRR11xWK6g3fvcxFNvpfR2ZQiqae7s6RpUknsmCh4a",
  "key4": "5grbBbjhzNYCoiF5y21HJZC9i8JftY2oz9tXTZ26QgP8ewGKLCsNeQ9q4ByBgfSVsgptTaLMgFahJTS8bXPre3nv",
  "key5": "DRxLMnJ4vQzwASiQUh9RBzQNpEMWvKnXtCh9M8wVM2j1AnwzUPBVdjnVmgcuZB4oZFd9jpD8hf2vemC37jeY4dk",
  "key6": "3ydcTwtnXREALWaWWKG8JED5dLY9gF6j7DDYsmhrSrcdnjkfLNB8VRAhuZ6YuGzgQ3z8AmaYBQm6yr988rWxZPpb",
  "key7": "4amiBRdJtfJjP4M1H1CKPPN41P6oiyoaywUJepbRLjcRf2E3tZH1ehnaVVSJzUn1e9yzfad5QcwjgsmqcvpEHJjK",
  "key8": "wnRo1rSv4p3rsiGUcuXdTzCDUXXECjHBWHHCUQHuw13dEHtqz71Wb2DiRuckdqMN51MNRL3goPpafn1rkUphH1h",
  "key9": "3mXUqi7RCo7zBuNunivZhSmTvfrys6B1sfJ16yvdH9Gsz5scyFnFX25R4C6zLkfcdzrk6vb1z8qwCtuSVSshDFb5",
  "key10": "66ookAoEu4yBCnUk1xpaQSSgusBYPEEokvJHsgof4nhRzvHneaaoNxf1Tekdgc5w7yABPixhNMLZK9N8v5V8fR2N",
  "key11": "3H6VPGy8S8KMXfgnD4dmffNfV9wFRFRujtsJ2oGpz35YSEpi14gC99f5haEg2XhGjAM61FEpY5xgdADk5kM321pC",
  "key12": "3mn8rp53hbJkrpzuHh2Urw1q6cQPTeAcr3C5x7kXAQ4jNyJGJTmEkm7PeTdS2PSwQgPGRrP2phc6ra7tiyLNUeAg",
  "key13": "5wHZPg96FqQwkrVMf7WhSYVwLu5gVD3CFZqrEPt8L5zaSGDzTzo2ar3R2JeUXVjbYZRMLJifPKk16W5mvp9UXHNj",
  "key14": "2G5f7XiUdx2JxEKMi9vDhsFgFkqirZjKrvY5PHrVD3unpmrVS62Mmkd63ejwUy4T6EhgMFWKFzKkoG8UyjdEePLL",
  "key15": "4nWsE8Weui5mK1PsfUvA4fjo2oCwRsD3HSCDYRVF6H6mTQyjwoCP3WvoxA6HKrvTiP4ViVK5JHu4D1H2XeUxEKpm",
  "key16": "4dA2x4ddnURfdEpQL1HvuejGTmBDEnmNcJMUxPUaW1AXaSx4zhbFTDDvs19dgupUhmiq73YTtaw2zHNiZ6Ug1sc3",
  "key17": "4jtLzgvTd8D9M3PGderuiesd8N1212ZPhMVRgWtL9w1cwaBJvDSxhfMkMqxeHoCV7Z4X8cMd7fBEXVBp7HzzDqgP",
  "key18": "bPcMeEqCeYvgF34KQCcfAbEo5xYFPN5hEahNbuyD2gosvUNeWkPxn1wowCGPTFePWV9KnoowBGNhV3P4dBq2x6s",
  "key19": "4iB9W8zwARUtHU5oDRidcwhKK2MiDpHkUEKk34pWr6SBaGQLpY2GZMUw9WjrDPjM9rhxWGHEDYtFwsQiLv9kutgZ",
  "key20": "2SwYLnw1mWW7ZAyk7BVB48deThApXQmVAauqqMyfhPVnhUprrGmtE1JrYHnCEJKaMPekQ86c1AxJ6hM6cFeW8jDm",
  "key21": "4cmMt1fuEGRFp7NsVGVSCM5XY7EJmxYwC11CHsyZL4yo74SiguDb6UNtDwy6GhEgTm28ZrzMRTUEuFn2c75WjApt",
  "key22": "Y3YH8R5NjwckaEW3txAbQfK2BgwHKDGqbwHNKhHcFeAgjsUqGweGqZ8iVEYSbUxCcontTccnCw2asv71RC7d35V",
  "key23": "Fa1sGjjywAvAaiPHxb8ujvsRXenAhUA6icoebm6YRX6cp2s7nbTxLsb3X6mxDTou1hWmzRH6R5oq7aD6YagqRi5",
  "key24": "4tapVjN98NAsRZgcGZL4BBa7pePm62v4RUdphVHQsxszpijPXhQ8gvuybuU5GRQx3NnaNQzQYrC6kxYhyBNCRSHp",
  "key25": "2fgfdALiwY5Wffty424AY2u6siRyxnPfGpukmQDQSGNXmv87TvHTgfmZUt6rAWtDrafFrY7WY7JdaweWL1wu4Qxj",
  "key26": "3ViCwaGeek8eiHQbUvuDW3umqwMjAPYnz3jEKjGMkhhxKiKj5XfejvqowrpgFg3rN2awHxm7EvwscGHHBJnrkxQR",
  "key27": "4Lsz2SsBtQPvTqZVLtBBsCPj8UyFKVWCqkrFxZNbGiPWE2jM8cdJ8wPPRQF54BvdsT98FRKxazMy1ivvzXsMDvJC",
  "key28": "3BXProKRLLunLSCtCndn6rY3DHpHnr5fCELuz4ADXH1vSkm2vTNqpvYYU3QiZP8Cv6XqEXKiQnrRD7kx3mznR6LS",
  "key29": "4VNmZKH9egXswtRMqKYNfRz45eefTqwLMSmggS7Sqf3UtQbeCPECjXZcrBKg3ytdDH5pFZsHBU3A3HM1BmibV32m",
  "key30": "WVhjg8M8odbLhT8fUNQzLFebkHDRXBe1TmtyLsXvnBucVK2qmWmh5hdkB9Kc8UtSTUiyFrrvghFHDs7C3diq2bW",
  "key31": "5HEPdhiwmduZ6zohsZRhejohMCUv2M3M2wrF6jvXeGFJENW8JeWSx9oyybZT9qYz18C5nPQFjP2d73Vy4FD8tZKd",
  "key32": "3qPNLCw64WGzsVH6G7Yeu8JQC65MdTXszB74FALDuJsZ12GmqTTzhUaEvejEE73R1EdanivckrpbsuiuDN7okaU5",
  "key33": "3TCZnSi3vmVZW5bjaP8Bx7hWV8hrhHY6PKGEvPYcTtpgmtPVTahyWawJKNLT9anjyh6cQqy3EoXCZ7qKTv4dsY3m",
  "key34": "57BrH8bYBV6r4cLg1ghx5ue7y98YuFTWxDLLZ1ZZD5rm9G7HdtkrSxDCjVnduTGyZy5pQTbRh7dJqY7oaSHv6Gnw",
  "key35": "3hxnQzqeumWAiQjsWtFMK6mnytNnDM935jjmL6JuRei2tkXtpAuR1vnPxqaQTN1tRxTa5UiPui2YnLcr2cpPicq",
  "key36": "23cAiikZC9pTaceFfJHaGrEYvgZEmAr6NjMZgGzxSQYe3gM7dPcYvb7agyFh6XiDf6hyu7gVxoEL94qXQCYGftQt"
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
