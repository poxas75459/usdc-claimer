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
    "2zzqJ2qVcPDLVuecBrV8pPJTeKR1HydQpDE4DyFPRsR7TTmVFnBngfQAPRuAGDUx9AcSh4Lh6NAy7CQdUDL3ymso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NksqRKodG9cKdAzscd6S2B5iVuknVo1aUDXJ3WHUtyt5d6hYPSb6iavxctooBFRDXSx2tCQGEYJUUfHVeE8ZHoR",
  "key1": "3o5ihLes478fRokQxyZjeDEXSmNZ55oaFbK6hKrjapuHwtQaqJveUE1PopGgfkFyaYXFBRvVxvLcYqDSSCfoeHAN",
  "key2": "5CiaXYC1py3Z91umHezCcJJqTDrG8UnGSubPLHLGQ16tBhQ4c6V2Vgfjy6f6NZxf8ZRHSRaTTwy5oVUxAx5mz1C3",
  "key3": "5N5AxZverJ6A486SUbEu4uWZwRXsNhKttCSJ5DDTXG5WSQN7yaKkjvTqF3HcSrtwahxv8aETn4JpNNd8hQmv6iSa",
  "key4": "2K1m3zb5ZfbsZDechqcvaWt5zzbxGDw2UNJU7N1z3spszcusGo45Ljpx2Ldst5GHxsn4r26b4TTvWK3SZFkA6Gwz",
  "key5": "3E4rmrM72ziBeZfKq9MYRfoUXod3eCMSfpKxB3ubCiJwVEHqqu4LzUzzzPLLQnuRnucLpFFbom26gw2vi6T64G4e",
  "key6": "66SegWq7x7PppEjedK3rGDmdhB4nWh1eFr6nDin6ez8nNjDwQyVD5ZbtyHoL6X66gxzEZyEUENcAGR9BMM9yeT2m",
  "key7": "5AxwXbaQurr4fn4ArMQzogmVjhWp64izS1YwMTJFKNa1pTqKk5LnoLUBuBjKpr9TsqoZPgrbgc3viNnX21j4rNXC",
  "key8": "5S7hAxZyXqikwgjySD1sLD8aq3su4VtgRhfgFhUpsjEFXfCwS1s7BGKe8iXNfYxbiTKxfSZe7jVKqb3Wog1MLpZu",
  "key9": "2FVBKdJpnB1EwfwhPucdKvL49A2RTdUAvenLCV4zpsPtVtHMBG56qS5XvJAXn6Sm49BMGmi3qimCjkNZrGPkwtMo",
  "key10": "2B8vedXqK3ZeW9t6NVfJPtwDDTtXa4iM8XABoEVUxBSmPUCwm7E9Gxa8SujZrjAjLUoqKS4tzdqYPDakFq8Cjcse",
  "key11": "jes8n8ym1y3YeWx48Uwg5hnms3bZkmAVXh37RK4Eq6kB64r3w5Y2H8FZLmCKk85c8M9LUELTXMBaYC2g2wA6y5r",
  "key12": "5Ee7uLMmyr7pivMbWJ3oJWGYoXhokNHx2hbQ3hs9pztbUhbPgXpnau91QWxLBk7PiWwchoYUqmSqAzTDsxRhKzPF",
  "key13": "5HGL5HEZ8ZF2rQcVvotEk4tYt3ciQjzLBQq84VqPY9Rqdcj1D57hxWKsZGJaisFJCKyMa3bSFvPeKKQFLWqtEnA3",
  "key14": "zN7gLooJeBMMYa622zc3eMjrnEKVoKgMLw8gLQXhB7jjFMCX6erefjNGqfcPBbvLQSY18mcjVcXMWLGohacpC2F",
  "key15": "2fVD69oMBQBjcscX8gHeMADUXzWnB9hYGM3DmFXuyDQLiA454SThcwrxyVV2oJHnMYXJLFG2akyZPh3b1WponNK6",
  "key16": "2AfbDdUmQxTYuvfp4g2b9pEDr8Vapu7iygKRMpjcJcKJ2VcfADBAJnA8sCCu2RRpa3BJzzU4M9Q4VzE3tvMrixMd",
  "key17": "3a9y8hd9FQM4VSap5RURN7M4hkjp76bdsDJTTfaJKnooqr3KKpD3GYrnE6h4TVUU57cX5NUzFK62yqx7rWUpEkpS",
  "key18": "4QWiucigd8G95VyfDcwYDWoHo8SvKBWaqYXqDWMPmWGzKCAXu6hpBwoC5ssSVFZ3nbrNjKULrpPcSiKiF9Xt3QZp",
  "key19": "5dATEzfjnwzzGM6U4yzHvUjwL7JV2CccGBrNqzteEGhcJLrxvHUr9Ni69qBnBML6dirQmPcHQ22QCSv7uTGUZb7k",
  "key20": "5RJquU1h4mTMKok8bHUKgEf4Gw5XopzJBt5NVXeoDnC6CPYzYdRXpBWszSrYTTNA7yd9EftkhUVi3Hgs7id3uE7W",
  "key21": "2cYD4SaLRiRrn9ZRzvyzEkW5a2sK6mQJtrjeok1Xty5kvXZv2LZAeLtdKMZvVFZ3ayAtFPHaJSqjnL6wdLfgtzUG",
  "key22": "3u1vsfRgVsQbmViRft74os9QKktVdUjhuq51Lvyi4YhGUpt8SNpQnoqBr2ebmXSCzU1c6U5qorjgtgo7mhygy4Hv",
  "key23": "3rh8AoyWf9yWiyWJnqGhqkwxjdXVTRCJ74WggapyUUGmDBnGAZcrSj6CiJ7c3BmaZeddcePap5TKqgKKeTov1Wya",
  "key24": "2iPXEV9bjTNiMGgNifp3sBXhcyU9eWAzjcsQ5EmqhzFctdGazYtieVwnrsjD7SpCiiSn5LbBMTTD3TxP31hsdFAC",
  "key25": "2A8RtEoQWSCtH8aWtocs96gkx8STEGcoTo1bGaMGK5T1993Lj3Ed33M2wuqpacC6zMu98PNj1Kcue5KwJeNnQWyN",
  "key26": "3ba4WG6APuEg6eKnHKtB2iYjt1GQyKPDo99fSq6yGipv4DVG3YndKVUXNdiqz8Z6hcjEJpjCdKuBS3hPqSduMwMs",
  "key27": "34YnepMZoJen3z5QU7gf4gjQzcK91teLpXRvy3CrEaRTJsPdNgL6bz1ofX2UNZ6PRysVZm6qWinhDJB9MgoELQoy",
  "key28": "4Ph2NdCRicxGuXSsVrfoXK3v1sScL2mcVYdD7Hd6mf74yGGwqZ9q76yG8BMe7dVeHqKYrd8ReWTE1oaSYKY8NLMF",
  "key29": "tZ4KKEkfUxkpQdCmueMkpdbUZgYvBb4Uu6TYCa13tXKBHFrjtvpUE2ctcU7igVsujZr7WpW7cHVrnWT2QA6mjmq",
  "key30": "kdx21ch9GxPFi6Fcbc9cTbD22D3Tv6HoJ3DpzfyMHusM4Up5tv7LMiv3FRnzXSn7TLHG6SpKMTLN81bgbnm4kQY",
  "key31": "3ZU1pDGwR99Ma7diRAWDWdtBmVit9NQM4UaGZbf77S2vBZaTqviWethaPXuTaT6MiqNu72sEpPpo2fbxNDtXV7fm",
  "key32": "62CMiVoUaza6XpUKAowgWB3tT9hVVsSQUFVpAHBRTNQeyFFtREqVf67JCAhkdphycHNPCNEjgR1Jqkmgx5mG2EZG",
  "key33": "8bcFbm5QhkZyFHjWWvPrqkuBZk3LriwCzyNGjvQT4TpN8TvHiDZvRCyKuVW76c8CZZ6pmtkh7sURFssLXgy6Yoc",
  "key34": "5riWWSeBRdmrvKC88xRQL1JfD5V7uNDRSaMfK3h52o9W9FUq5DBWUU5pNr38zUzAFJgEEDGKKX2gVFaoTwhzQowg",
  "key35": "3txWW125HZ9rJkVgDpukkCKeSC2SRtd8yhKT1yx7eotZPTaNicj8nbtbwCY2B8iCGGc1Mu9Nz9b5bMNACBZ3VxDe"
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
