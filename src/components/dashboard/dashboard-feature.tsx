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
    "3Rnbv4kGtcm6HzET6Qt9ArNNW4qgiw2KCZCxnaHTYA4bPCF3EzJtmvAFQpr8hfLtnAqDxepQiivRGnjSQkjE6UhL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nuytss3R11pbihfGgATS6aP8jSiP4LubNkjNWbFJEi4RwHMre1mdWZ495edhhMpe3vbRznyEwt7MQ9NJ7J9kpax",
  "key1": "QhCa2TNRMRZBHqNNxEgg78fHMwLhBohnz5DHER7BiDrXwfNPudCWyLMzeqdBL6S63zZgksEo3BxsHXe2qXdrcum",
  "key2": "PLJcKir2g8YvY2owxBpGLZFzVGGfKv1Qz5XJJxzGLTQkxiXRgFXLnq4f7PWHxJTBSaEYsye8oicnumf74sPDAK9",
  "key3": "52zcxNLekqjXGskmY63GtPGbCaTDS9UiyiGtrijNNKK4nD95Yv1C9LgP1aTr9oFAW8KCzCZDnk8DkQjPisHb3661",
  "key4": "4JYLnnz64s6xyS6WkYvPsZHr2Urj1SUwVYt7fTsSofbk2ibMRa54iMmEHDVuh8nSzinaaoU35FaYKFuhhyHqinpJ",
  "key5": "CdriDEv7TRkKhJpjo6ZSwxW2LjidhQLxSqbQ58mS7hNufcSwfWnsmZwqjCpKiKCyqeB39wjF5YrWWP8vrsYDd8g",
  "key6": "3uKkxUnS9MQ5AYHRBwVhpfyMDZML18UVV6C1HmkMgdwBoinKpgG6TAd6UPpiQ2HSwRv5pKyxL4QqKUeCAFkVbKyB",
  "key7": "iA6PRRcwwHKB9JKDR93ypZUrtTcKuMMz8jLhn3L2ew9w69trGPJDNub6nbaaoS1C1xv5W118SjDUw79PLiwyAPi",
  "key8": "q4rymKHgFMFLJsxeXdDSVQmhyh6fmQK4Mxu1uiadH6eMZHhxL5APs58tnu8MrcUswAfpackNZtRBRkBrrLFBhuZ",
  "key9": "5TRyw5NiDj54kwjmsvbZaUTgrW6qwjiWnE7X5Ts9hJcUKj5ANrnq7w4Lz8vm2Rs2FAtDXc8WSQ1adFqXj6hecEvk",
  "key10": "5KwFLkJwYymWVdNRKPHXxYBjTCpZoP6f1fdkfGvgQemUHo26pbGfAxD6duHYFrnb8FwmugybUbRCriWTqVRgA6sB",
  "key11": "gygmAf2XoMoGkfnYbQaVrfu8Pb3QfgLKbiCjrJAUwWXQHhyTHjhtvDCPow2GS6RitdwhngvV5Hz7MpGfgpayvSM",
  "key12": "3aAm3N3ArCaFr4WMfhanepoQd4qj2qJQBVJQxWwTwpsD9GiA6XpPmWgDuK7pSobvuqQxes6rJxnyayMF21SGHx5p",
  "key13": "2DYJKUFm5HyAcPxNNuxH5Dw7vjVNHQNVwPrwpFwXbArasrqcSUwMmbx2WeoFnRTu4U1LWy5toyDEodAoPafHwuQx",
  "key14": "2yfxnVsP7rXpivjwZeLRxHyrMZtJbtabBeerJC5LFpBACmSpnzs9pMW6LFccFpWnB8SwM3CgoF9Rq66xcGnKP4ks",
  "key15": "3EjF8g7Z5msnkpQxKB55pHNAx9iELaj3LLWuqRsszJ2WdPCPiJUcZqjP5zPm7TBNkLAcQ1RxuFMCptFh8JUJqRoa",
  "key16": "2gSc7jZFXfHE2VqWcTjJeV28w1ACw64DucQS5B8UhUXWoPpq7vWpqnhMn4aMY3xayrgUxHSR1B9sukkQBT2Cv6Uv",
  "key17": "5U7pBTZw6H9p17ZfxdwT4jsumm96rayUvTVHoicAF3kJAiGWhVYs7tyibmJftDaKwEdPeCxhFPDK5ECucmSRGzZh",
  "key18": "5ztJciTLWeTUfHHXiN2hETRDSGsRm9j89VUUJSPPjRWfxazcXHTParKXa3rJ4kLxkgfzVFnCAYhAmGyUAy83u68Y",
  "key19": "4SZbBjPyhW3koUn7FV2ffsGkuyM5WnJ9BNaMEUAf6ev9UX299jZipsXqMhfFHfqpNPsNJ5JiJPYxeFDVhBF3Rgti",
  "key20": "2F588x4dsgQ7e6jdv2gZqJf1BW8Ey2jBGdhM3N2XeBwLmM5N2j1sUhpUS56hsAqBsCTSe7KangoyMoYFUkDEdQMT",
  "key21": "5ytjWk8ftGqHpBqpoN31b8GaWYoyHnxKSNgCnTrMZK6H8jVgdcEdYdMEdgWxTQxmrDiBrotXg6Bftqm2UEnW8fC7",
  "key22": "xw1jgaF99pPyS6YKX1XDYNKDWEc6goidG8gxuSFwXWJJeAxUZbKSH1buKHq4xmvaBXbwCSYAru2z2TpjxJnM6vt",
  "key23": "2st1j6DJguKjs1xiN4o9q8hmimwjDUc6T2jGjBzeTUYVF62uuSuAiiETZVeAnoQVX93xM7Vm6xRBcaodSsQ4DVAA",
  "key24": "2B6CLkvUWRowMQpH5JK78kFB3Rh32UsQT8W5fqLFBSUVaZhZjA5i6fYMsswZR2Z8GNniBXcTZLYDHLg1GiAy8sAW",
  "key25": "2rcLX1fSv9kHYFC416NjeYqQejYfnkQQTajWyFQp9gTPDx57fssjCkwQvBQWLUgQHU6UKkFLHK46hRvcWcRUq9Uj",
  "key26": "3yN91M34ssM7VsrhCZGRKei37jbsq37Byv5b7ecWNhNB2RqB6kgUvbweAxp8dbUYcYeGHzju4un4xsSQYngxxfgc",
  "key27": "5nZmJLWMiZxLyBSmX6ngdwoRDGqunaGTJq2QZFgvLbvHJy9ZQZFWDcsJj1nJkbxg4GK3VbFpZdqb6aoFXuNRRTpL",
  "key28": "5oTZKPrqTEmp27Xt6jUkAe1Kaiqh2XdZZg1QPFb6BFg9UFehyMhz2kEvDKHzfQUFvkuE7Dg8sCFhpi8zmV24zKs1",
  "key29": "3pFnC5C8HaM5U3bXxLCacKjnJrvShrcnSM5bGdqD72S6abWqnvcS5rNr7mpXAoQbtP913U9o5FmEpFjY3gRZoZK5",
  "key30": "3KRfchoKD9MseZHriSzD1E8utefeZo3zhvYZefp41F2amRtiqUGnrEfaLLQ6zBUtCxRCfbm9Zf4V3LYxttHakbS7",
  "key31": "5Gfd6KLnD2DjXfAaBq897qcdDDcuRu6SrmgBFSyGv5934N4XDxxE8eAoqVVVQymMcCcFztwowg1nMeUqhdmF4Sdr",
  "key32": "2hMtYbbTfHHiesWnaDSWefpC3JBRcH2pLPt42tb32oFrf9R5VxzTsxCkw16cjjncZwqxWGEfTDwT1zLb65pfVqXv",
  "key33": "4CbRAsMAPbpMF9H4x32c63Bn82pysN3vhgPBYD54tDFwd9TJkCvXtyy5C8sbPoFuaA9iYKKbY1fiquBP3MQpwSHW",
  "key34": "3hSJGzgAcXjrxNTfUh3VkjNxHEznEW2S1ynDNpg3XjJkBTwEmyNvr6UPb3WH65TeevhbYPumniv6y6AW439UfhKy",
  "key35": "3D47cmLH9LgesVKWg2UW3jEdzJvGYwuJnSM3VHLzco69Ce4E2wqpuoYTe1B9rsTWSTquSsjYnNrwGhMGYVLuuS8V",
  "key36": "5ebnCJb6G4svv3HuToEKrhADCAmckmPYVJPavhRJWS3V8UCWPANLXFGovxyDuAhwkX5EbnRzxkJzoTQMhDxvragW"
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
