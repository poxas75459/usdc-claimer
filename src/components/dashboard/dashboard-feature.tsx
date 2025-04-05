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
    "32BzxpdJVAJN5K2vc6y5U9YfFcU8NTjFmYY5BmJy1iK42m81V1Ts2GBFkmKu3sUQh2veNM1bqxCym8k2APupZAn4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X4599LLxdXNLNF6QLu5wCdHDQoBG3dmMWMcxvQ42yykz8fSbbZafqXKVEUJWWh7Xtrm5G8VWktWmnP4M7rr3nfy",
  "key1": "KqCFGRPp31jZBTbREGSmhaQU9sRsQ7Jxfq6b7zg78xQeTK3FXaAhQFC92a2KSqGbWm9j48jTqzmrgsYvDispq92",
  "key2": "4sMV6CQ7x8kJzJwDGRHqkdjEuT5i7W3L9yZwADZ6TLvUsysJzfKHcGoWwAaZDdNw5F42KSjrLVtUnVUCphdd16bm",
  "key3": "4GSEUoZvgD6xoVgjYLgD3JD8pwXumM2XHYuKvptbeZKUaEwkq51qf4HjFu73Ry8bz9wByZFT4XDjRjiQiXKmLpRz",
  "key4": "SrzLBAfpzL5PjjekKPYazZ9R3KeibWFJvco9SV6fg5E2qJWLnLtQwWnmnj87SjWeFDs3d7aBVsp8qBGpU9Mm4er",
  "key5": "2oMyVRMhcQAv4Labk1gDUNAd2pQbb7mjrim8ygGs6sHbzKtgrX76ppMZUnLDU8SJaZ8eixi1HDv5sudt3yzExRj7",
  "key6": "4Gw4717L7SejprEudthbafvz6UhVWtLDwEcv5jLHj3nLrExutxhUgWCZ42Y9RqGzAcemkAL9qXwSYdwV8D7jze6b",
  "key7": "2ZyZ8dA4Lgtvw5rdeJ1isBtPMrT3kyxTypWNNQ8DPyJvpB4ewEKQJSXJxcTtnMJWrVmyPcJKTMCihwE3WqYRysSL",
  "key8": "3exDZq4sgXW6rwU5yk22jgYG5EiYjnzpAZ8feYLbdySt9mwJLRxEVBEZQy8GztgZx99zrWPq7nGi3yxJAmUDFeQd",
  "key9": "5RgdD92NjczxrhmqeMk6ExbNwLzSxVo8UKMxbEuhvcSaZCVhnT28riXo9CMKymQrXnPgPGuHPgfNyaXaKJSPismK",
  "key10": "3SbcxfYEmVyYqJ68ig4b9ca6tF2g5QgkmJxYwTTL1HziikTDsrfdVD6GLMWur9m3jEjiVTYzsb5QNQ1V2f3pYAPR",
  "key11": "mzgQAKQCAFdgpvujidY4ZX1bpx7SRUjNvSE4EGTFdmTZYRUb62fDJ6QVMq33TL1bfvv8HUZNrJ989E6Gr48ALCs",
  "key12": "2eukHMgfokE9X2E2d5evenddtbjVujwAeB9DRUU1J1pGMQxuCpLSbNHPNMiLcNHTZ2XADRnffAC1aBoFFRToHF9W",
  "key13": "n1iqwfozsv9c36Q7jfXxtdWLm5qXr5GU25KF7V4aRie43pHVFRZmPDj553kzg5kdjzEehJW53MY1eoNYYvYjYuX",
  "key14": "xMnzAj6DALSuAqrsj9DB9qpWBLvLVeaZcbXpuaFShJetjn9uuZpCG1ztm2jaM7CPdBJnMZzNqJZQegkBdzxsD2J",
  "key15": "4coWBqypruCHMCyafP9s47oYBVYVzYUCzgGjPQ47C4Xn3a6xLWTF6mw36U6qa7iVa7F94cc6TJhTyH7fJihoFbuT",
  "key16": "2EAmCnNTEnSTNguZFmXcxgag9zvxiaciRH7TCdsehPax1gg8k9qRHpyhtSVdL9wXRpAtwPnbHszPWuCRPnZU7oHM",
  "key17": "49BtVcZGieebFMC5zWvjNaUoEmPfHUc8tfga9asWcoBbbc1EGfUpKQ3RaRgRRWAC4mCQJiqg3Dann6oCxyKuYfMm",
  "key18": "4y3epTrQGe5tKzoiPB1C5txsr1o6Nt6zdoaAPNgucRGeGuX3x1UJmE6UwxMi8iWU7KyGFXYZBWrWWisRC3rdYWCz",
  "key19": "5o1M92gJU6qQq6yufXw23cxoegAuJNou8TTruV4sjiyFN9q3i7yWjowsH9o44NPRGmNxJhoafPM9G177A8uju9Ef",
  "key20": "4ULYEADcafA8b1oq7QaZ41154qRDzFUQWGcxTsZsZmhuMSnDT6rnT4g2n2ro4iG5xnpWLipkHbqivMicaYYSn7U9",
  "key21": "4xdHcittUXcwEZr2f2HwEPZqchNhYDxmGimraPxsVeywMMS4bJgFruTCJ7hsUP2vtuxo11agr1tyjnBSy96kbYaF",
  "key22": "42UA3xP9pvpo1sSyuLt7iVPprud1bRxJZacZ7L6FkqmpB46uNACqysam2tos2H2ZaHoFWVzRhfpcniDCJTifegQx",
  "key23": "Xd1hsmYgZGTvMCAfcz4HzjqVabaCDLnwmjLXpZbP5fXgJGXjmY412KpGAs957UKYoGBzYvRjNRtqhTh3maC3ujJ",
  "key24": "5v4KWXio8eB9pxGarzWwySrrnmeHQq2uu9shjWQ6iyTSryx1Hc368BHjZFxzNMCjfkv7dKhhJvjU5CKt84UfLvoY",
  "key25": "2gwCdrWzcwgqtv42iPMbPRQAPkmrdwW4RNp885n8xuKpyLDetJyY57u7aLjCxT5BNnRuqXTRbe7cDsYrkFqpw9RC",
  "key26": "2ZBGirKKP4CVZeiBGV77cZDGiYzc4GuDXRjadPbwiQdRqBPJsLhKy9dLmrrW8ACpZ8zpbtCepDFMUds9jkr6B6v9",
  "key27": "4NVACN8La6yReTrneoVePXThpwDTLRHFV25tEKAjLepj1K4zHiJGeBGNKTeZKyrQ7Vws2YYiEzeZFq5zV8gxj8Gt",
  "key28": "3eaJbFtDg2WGbscGNj1n8KDCGGaW84vY62eX2GXMN9HWDEcZwkV8Nx7fGsysuiuzgQZW4NC3ZSoAjQkwerB93krU",
  "key29": "2UugSyeK3Wdqj91udWioLXuzouPneHTHxJBFRMHnEga1jKBdVy3LWVowz4x7gbwXJAQ1jyNPS5BXLu1jXYrsvoVu",
  "key30": "5Rh4amvSN8XcaEUEJX7ksJGpH8iXPSA3K1tFARqK6ef5fdyquCV2dZqioPKxxdkgNTNh34WWjgu5HHtQeqL2nzy3",
  "key31": "2EUU2SHkNtTkSkj6tJ3XQrwe8TgEcs79ofbVNzTQfR677FqRUTKi8UizCYF8Voh6v8fBMBfFyseKeRW1YfAmAcDu",
  "key32": "5hcp7Tdq8ex5K9uzBzjj4fzyyMsTxYjNV5zpesLyhPqZFtojdEV9TYgwEo4afH48VYfrgfJRsoXfPsQ31ULDKMBD",
  "key33": "3etidoWBVTRjQhSiiUj3nR6xU4ZYW8s7LCSWMgzxMhgdYA6hAruNYb2EdyiprJHvP1vV1hYNCn6HGezkWHBYdpRU",
  "key34": "4nJweok8deDWqVYmuUpSQFBjB2oWZAFeZRJ6emDs1wJz6CXrPTvFWdfHmbQHMBw6y8AqCoLWhn9Gzo1dJxmDtuoo"
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
