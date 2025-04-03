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
    "4xC8mnMV6Pzfg7twwZ4UeqS78mZvWKoBTfidZUixGeRt1V9zxedeSzUC7fGVrcELFLmyqQ3o6kTe2UjNWrPUqJ11"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MScbR9iR6PAXE6UJryb7DSG5xLWsRfBq9qXd2gteXHbhVcMzy9kWNngaiwLqKajqiHmBEsW7HX1i7hX24R3wiEY",
  "key1": "55i8XmmqwHUM2NBL9ApYPi8W8mJjwXoNDXwDEchZrSHD8B1K4DwxwaCWpbWk6toM5ZbFxYtsCYN4RafyqVmvWH9E",
  "key2": "dHxc5emp81r7A92y4ZemqFrwb4qXuGvJsGcYbHutLR9wAdq2i2zMvrPoAm5qNZBEojVFt5PyVWLgpMHA9GTPqGs",
  "key3": "4RoyWsMEELG161rpqHsMFSbHert6o7pt2K9vpwGjg51GYGP2KA43ejy6MDiSxmrsBQ9xiKBW6qWSBhYvB9wfrDBp",
  "key4": "Sh2PwyoxuXXPVk5BG3wPsHGsmvsYw8DnD8YVSregA7SUQtTzNCdNyKUesbabX5mF5SqWDN7xdfqz3LENDaqfBro",
  "key5": "4dFYBVLeLiKcAUbBTSMb9uroLAGZ4Xy7wXmCNRzsAUpbny73YWaChZvSbGb1r6e7wsNpjP9bQquv7gZWrV3B2njD",
  "key6": "4JyqKtUEUnFeguTsKbWAQtqseiUgMynKwHY2LfUyR7xznyr6XAmwfn7uLJiRGeaJEPerAb5qAu7X9GwEaEXHNtYU",
  "key7": "sZVnMav5RiPqKBbT8ydrVTdBathNPyiPese65ie5dHkkwvSf37fGHAcgNkjcSFYKaXmdGe5oUZNv8iNMwwFJkcn",
  "key8": "ZuythMEmHYoZiYhWcK99u8VFMdQbMXfeoubLXi8RmcgVKAjLRcp9juKM7cfcXxr6mcVW7gCQvaT324FDmoEiBoz",
  "key9": "4J8SExdnC9wkMkg9wzubbBBwHF9KFZDAKeRBoh45UuyqG9BGQeeejC9KQAg9GroiyN2t8jB3h3pMVUgojmLke449",
  "key10": "4feZ28iwAnBS4i4BpmZCxt68htMWnYzjjLTpS8KLJAzXa6Qw1zJa7tmxbMVazudVpxHoLzGx6h7Zn9LkjdopdUNE",
  "key11": "3SJUJpBJfHU8NVo69wLbhZ96aiWEAtuqi9HZoforcuAw5HjPVvwq4eg6XwHLW4L5eCuEcunTjCLFX5b9uaTKniWN",
  "key12": "2fEkJPYDY6S6UEAUSD16dogYVG55szVUFuz26LFmkUPnQ2MzLfEALbhq71gGqfCHTLcrKE55Jtsa1uZYmS1Fe3Mr",
  "key13": "3rbhbDe584gPPoLwbyCKJ6C41YGRwCd3YpNYQcmzswM1Efg1cVuHVyTZiZj9ihnTeSvabrDzMBYJQowa8goUT2K7",
  "key14": "5V8oqFKSpy3ivSQ1HU4kRAjPD3DCWyhSUjVHjna11av84Rk4XgDCj1TdnMoKgd8tZNWEDbA6vTVS47nKHXkjYB3q",
  "key15": "4dLB8PRB8NqsYMDSt8rnt83qRUGzQyQRpMKt38wbQBtWoL72nDJYiKVG5BrrjonytjQvzy8trxP5Dt2kSY9eGTBn",
  "key16": "8nfMamuYFQEAquQh8LMTsPLwtL7pUrEtXSMZWpUdWuTtDLeGEW7AQKgiLjSFGGtNn4ToFvbN9u7VFhjPFHDxVpm",
  "key17": "3Z4d8CFD5BpZxTgD8bPxhdBpid4NidTrJkqTbPuHHZuzTYzrcbNWT2tdX4U4uNyPbJNoNhQo8Kjfacuj47D1mpYV",
  "key18": "3mcKcfNWb8JyqREDTUwCc5aQbVyjLN7PkBrnnU97ihhofF7HQiziMfp6ewehRyrvttHHScNsueTzzbo8KrHFxK7b",
  "key19": "2r2GVvXdYJAyTN9bfZkPaztj5Lc9sEK8jzsXbq8oGRwHfLnhW2njPkpo2suxKznz2rq5YsWdLVAmuRzrzcQDJkv",
  "key20": "4UsxTfxcCM14KxwgbaCacysGK5pN4g7WPNykkQpQ52P7j2PYxpnESiCq8CLwYf6d8YRVFmB1Rp8GdwaHfA8HoM21",
  "key21": "2nQ5u28RYd9V6s8jDxxjWmd1ocu3bkxggTFUkFaSWW4VuAAc8AE83cLCCDkJT6vgQBeFiKDY6aiWXoAxowhdUgTZ",
  "key22": "LqN95AhLRtoFUVd8CEHYsawbynPe48tjMVvEv8SFrGtrnPpZA1gGvpD2nZfdVAGdLzUfT3HYhRLzafRozeSTtV8",
  "key23": "2mgNMJA1wXJWmD3FK56qdFq99zCLrgmZ4z6ZFG8k2BhR6BWKx3Mdxwb2pnc8sHvdgWtjd5xMqmaRj8bxrDEPDpfg",
  "key24": "bWSbPADzF12hezf9WNWRRFiLcVtfgGBYwjuawVg1ANA5oc9N9aWUWGQXDNWU4FwqxsjoWxerE3bLd9haSSB16he",
  "key25": "5AvAPv3vLTLiU7iib4HnnzFXaKwcMqA1xJKewiybgpsgt6AMze1qYtVxmJmTgNF97MHbpMer82ihbfyp1Qhkj34L",
  "key26": "UtwWzDhFF7MWwgbUrGTqCUJzYJshTXLye193wcUXJDTcjwRxBMCdFhpSYSZZbpJVirwVpSbr4oJLimbKsXocHvr",
  "key27": "3Gc9RGxaoHy7Km24UUHx181gB4QYCihSmMjEvPjc9gcdVZP7hcWTcqssxKo3oy8S2m57r4mfHRpaxWRoWz4nGwkJ",
  "key28": "3aoScFfon73DoKRsfLxJnWXXNdGs1BuXqWPTfAGChLfbRb3kxBcCdsNsZN1QbYbzBHXCn2US8eKye3TgBPJrN5z1",
  "key29": "5F2TWu4Un8QdxnhdaKx8nbTX7ypY7ngD3xtqpC5Byxui1ctt9NmYvr3qVJoYmPdWsefsxNj9Hq1HDJKDSR7249F7",
  "key30": "63KqSJ1CgqQNHe7hv64qNKi5tQVcmxLYkgUCTaNhWx5usNBTqwe15oDt6piui4U9dvQhuK48b6meRRwRkvPJfFSv",
  "key31": "3Kob66eY8erCu9Fz1neUV6nB2QjzmbUHxA29xczanFJUMFaYUijjv7CmSQJ21a1sNhKuQ4DZT85htdccjij1jD4Z",
  "key32": "3Ntt4YfppFMMHD3z4sijP8trERub4DcXxRiBxzJjWW4vQUH1MWyMHAvcSkyPD7zj1s4EFei9CQK3z3EwxhwS8iNP",
  "key33": "4AAsquuFyTgRRaYAoBENfLigajZXUjLxCrQqVjqmVCMgSz8fuJmi9VhCVvAmHADr1r4HRpL6uZFZbmkryiGuh4n4",
  "key34": "2UWbGXz3ndxLJF7BdKaGuH1dgQuU7x5RwLf9LYYJZFzDN8GKu82EhnHkUaaD4sJaEYR5zUnbmKFe4evgCaYh6sRW",
  "key35": "3ew4NoBgm7YFjxGLqf7dEvmtt64zWAGWNt3C19wFw9A62xdCzHGfFx2VKX77oZdSjbesYnyReoN9HW15v79uBaWx",
  "key36": "3HRVeh8usZ1J5tGsDmEfsijAn3ohCS9UC4kervi728yhWkcA5JNd6NrorJzhuAWrfhVqFfnNJxbSDWDj6EvrHctn"
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
