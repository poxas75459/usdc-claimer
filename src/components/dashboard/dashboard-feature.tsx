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
    "2eySKgnxZHQSGqmpak5fKSarUfWAetQcLrNxsUPZmSCQ3Mj7pUDTVQHh15UmKjSp2otXm1norAEHnZVpQ7atrDUN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tiSqNGfzXX3cUvMhnJiex11mqvq1rths9T7rTRyarefoMt89Qme9wASkRToM5jQuWp3M6mNhCeL3M6WJvbpK4fe",
  "key1": "tnaWAgMUUrsaiWCo32VrMdRZVe96Scw6MzNcFJKtMNEb6KpezHmjUxwfuXTQaKzuGiJgSPN29ZD7Wd2hMnrmrsP",
  "key2": "5SrSrGzMj9i4nSUM64rwQnmgEryQyyMTPxyYwrz2dprrBM5tnyEgSbRXgFQLpnkPy7ogE5XxqDLSPnsSsNRh7gZt",
  "key3": "3hbBWXBZqBSpd6ETDBzq3NF43nVx9niTE1cmfNdYWTBSmmpwYPTiY8HD9Z6gKJDxZfoeQb3dpJJ1beG8R8PKqaJY",
  "key4": "vJkGX2JaW2PKUZmz3DwhwMTAW1kmMMZXharvT1uZY546NqBWkkfMgompAw9mZsbb2mUxNUKLQcNnQiS7oq26i3P",
  "key5": "4vHdzJEje3g3mDDMwHoNGK4V7bpDQNfwKMavprMLBAfeae7cATaEXDxCW3jbHrqMsT49Xcrq4juhm3WA49GJBKjJ",
  "key6": "45A25CPizXLgjGWeRANYGHbRkQw21QhgDt8eB9nt18Wx6WgcT51LKZVKypfp5zNJpHGB8CLYwv55TDAmFPiZTf1s",
  "key7": "2Xmf4LzutaEswDsQbdyUYZYV7euNTaByJWYFQSz6cDnJS4zihR8hccqwaAt8ZAu4RsPUMqMD7oipENpAyDMRJLJL",
  "key8": "3JCtHzccsY4j3JA9JhSnPFi99fZw7cTeMdgV3q4V6KMvEtFSoAr9Uc1ZHbvgRAPW7RAMjGWmwknJZ4LTCjHZHr33",
  "key9": "5KG2C1DAsX8pNykRahqzx4JHvs2E2PE5ihVLpxKfsX7GC92KCrRCTdNCt1jQLG1fWQcgLqcg5vEFqGU1fzzecKfd",
  "key10": "C4nFFNQQGKEhZah4zmFoP8M4AzpewB7wxNHe1cvKDVzYD8BtxT6jekfMqhPHqCEXAAkDrbJfHqTMpqgvjeuXwT8",
  "key11": "5zL1LTkHGisRtejL3iyMLT2186kkUvEYCS5sTURUvWj75eS7jqVZ8FEvH6HhX24evCuhZq7vPrEhLUpySvvZAQf1",
  "key12": "2Fh6rMG7pPwu4U93QUpkKo72bFSawBtZjW4168Z5vzfSSs625cneqPaPrkxV1xCzgBR4LzeTFkyx3fBpXDNZWsHm",
  "key13": "4mKQCmW3S5WXxMJXXguxiE83NcSa61hW1SybqymPkijCH7p6h4imxJ8b61n2K7XxGuZRWYd785W9YZMVmPLvVyky",
  "key14": "3q1ywWn3r6s62nccD1xhfZgHdktZWo66u8jyRAvGDpVuXbRYsnN7AnqSaDBSSJvhh2ovRLQUDi4uqrQMo6qF4Q6q",
  "key15": "kxfeSerSySph2FX1J6EwCWjWBkuEPhWusurun2c8pRTR2DCH4bTXgMwUcSrw9vdBLXTe4brfudMaPikp24Zj2Aj",
  "key16": "3qiaymnMakex63X2vxWMzJW1PtvNxuc699dvFUjzqmqaYUCXQ7a7G1NLjwQyMpbqujSTTxy7tT33X955kBYxdtNq",
  "key17": "5qL9mF5CGh5iCGkZeCMyVT3bRGws1VCM9k1am6zgPkKm1yzdqtvPerWLvdhas6XeybuStyfzLwbSMZthvMu6xQVC",
  "key18": "3K3sUkMnJoGh2mb6jNQAykcVyvY9nmSUSQz25yB48bD7LyWnby3WeCFySnnQoKRBjoCS47HRatcJjxde14FQwfpj",
  "key19": "2b39Xz3YsNU39y7mEmRgfUTkcbaofusD4Grt6LVsDGsEfHvC7hZhGSriVPHbPMDnfZmsTji1F4XzYesJEDVt3N4A",
  "key20": "CTbMSqkPHTVqzBYKbw3A8kNyrW6GciorFGZF8eYBjLRMiV1bciZDhxW3mBKpQGmKyWivy34P7TygWv2NTjeHnLb",
  "key21": "4qpapmMmgPXka1rgcF8GayX8H59Rg1eajZKpqqDxEx4Nsnj2cdSYENwbcMVPqSusF1z32Fw9RP8d2oavViy3gvRr",
  "key22": "4pKdVi82UHNVyFmiPeumPAgg9PvdFvQGodwNfWkpWsakoVnYyGVKQpW1AnCfpiQAYmnDWNjq3KMDVXCqYu88iJU6",
  "key23": "3aUWf7pDFdFr74savXga98QLDfpwNzYXaaVfb7NHUu3M3TaeQkDUaYTWUw6yUcLxze17VzC5Apr3DaLqRm7Lh1e4",
  "key24": "2vAHHAZjMw2NkfhR5MkA13yVD28MVD4QrBjyWfp9P6Cn8fp2TFAK99rJM5SS7QSBCWeUftGi7FeBC3Cbd3guA4XB",
  "key25": "3L1xnSCdnRcYFjGAuBejQaos8HCDyLyzkMFcdmXcnofiX8hfJKqshYVpwVdheLWA8s757tCqz3bWYt6m8gvd5biD",
  "key26": "3Yg3AHpicZidfuBRtgqtTKDS5NRiPAY7Cp1Dbfg9HKFBz4skAJ4FUEwhxS2r1kabgh1mKDPXL2M9DG7qon5vw1n6",
  "key27": "3jiiiiRP4KwL2PZ7DyJjoRQXjJ7SL3b9NH3NQ6d21sJextMVYxAC2nruvMfUzBaYX4os4S99YHS9D5pUv8F7bYG1",
  "key28": "2Uc1aS8nkxjqSTb5DN6NfBR6WwGerCopagd8Mg1GPsrohBVzFBQBZSrJMk4JzKqsHCrZPaQxRRMphA5eo2VpPzDa",
  "key29": "42naBkGhLdA7PAHfU6wQjb5PgszTjDLy9jn4YgaS8NeNRiriWUTbLAUse5Wj5nFmatULm7LhwjfiRSpcQU9h5gTU",
  "key30": "4ojfUCHniHExmfLGtm9djGx5D3XqUxkjWEWuH6pEZJioQ3NhC2nrFPyfyMeM4kYiwbiyxvn6eUH845BiEkLA7YnH",
  "key31": "39ojkXkg6h9SPAUQ3QYtMVEbjbVjAMVDB5ibVJbpTdLDU5jyTTWWupm26SntC4mWSuf1zzSUFafMPcLKXKZFj4pd",
  "key32": "yd6QhJMLosdViPgzbpRvVkn5U5jE9nxnahB7MNDSrMDxWNNZENm4CC1oeGc1dscmFnnHFygJHsXGERvuqGAgLkA",
  "key33": "4AA9EZQCdobjyguGsNBpKuTD9khfqvJuDGS52Kuj3KMc3nK9DHWkHfPXGMoLYYK2h2QfwEYL7yXaYbDePKrvkrxG",
  "key34": "4DaMssNgtEoedF8RQshz3pv3ss3nhUWnW2QUECMs4WMNmkcmzsXGmbADeyUFu8gUkwY6KPGohkmDh5JyPLnaoPj8",
  "key35": "3FUuveWYgMHhJtxKVPYfwbUjb81bPQ7fdWPkMrhwLE7BQkgSVsHso3EFmo6sepHBUxrr2qC7i2sfax1m8YrNpZWR",
  "key36": "3KZwSnwFKuyFHDDEkwWdUMHbntK1cZAAngvSLEHp6Z8bRzAa68Z7eB7TkUcCivVsZgdYwBVitJ1sMiLCUzQRHXGx",
  "key37": "4T3QdSUKXdpaPt7K8mrdzUScsZzNw8sbTngCRBfbn9M7223285asDKMkp7aDMcR4km1bgCdLa1bD99s4BzdMLKuh",
  "key38": "3T9aQ6V4rRsLLPa7rsrTLKeSMhf7BCDX1V5hgKkcTFkDg1TcZDZZ9h8AqmB4Kak4bWy1DE1AsQgjF9SvHvjBcvav",
  "key39": "4iMXiEL5ReQbaE68qWBYvnnhQRZfkmBFVCfgMRatABeNigt8zfhsHR3uZSxVKaQBGo96WCuQxQgb3SLDEv3ssF93",
  "key40": "4trCghwmHAePFXr7G7wMi1fFZjPhkrSsFZoh6CJVKBn8V1HduzSSwKjABWx3uhY4XejNZ8UyU1EWpLk7qk1rWktT",
  "key41": "CbNxEbJAC5v2EfZUW18rFPktrn9JYRjkvirP1TRvGys38fmDDntck8iyJucTWguefpia6wiSZX8t3okgUpcPRyG",
  "key42": "3yssBDZZmhjeBcXkVTaAnA7pCszoxHP6VgfbGj9dZs4taNe6TCRaDsJxf23VdJjG7QHNCrJzg2pyDGhh3xXPc1tT",
  "key43": "4RyijKUS2eD5rrsr7QK7Sgd5yfDnp9TY3mg5qbqNwfXVN4YcPF3juy6rdYk8bmyZ74SCcqY9wP2GwpYDLy13cgeT",
  "key44": "y4PppSjiZ8hYk8TirzU3H2kYQzVzj7e7wSnAqJDRZHj8jQbmbUSb9WSjC4NPfsEbP3PbV9DkmfKBmG7F92GK1Ze",
  "key45": "R7Hr3hNX8objXSoR241J11hG1Z4E7ZmVx8gZUXVrz5piNHVejoJijdh3XMSHCpU1eT24bw2S2B5XTjW9kK3i85H",
  "key46": "5SfqYx3FYynG8YxHCkQQRVasQXwUnNW6tQGzGdAkMAZLCfBWxUDpxgU225aGw64FbcTuxmsNsXRUQ5JLAMiJ9mmG",
  "key47": "22GhHHaw59d5gfyzBS3ZLLPdiWyQTKCJk3VXht2KsPQSFD6TpwM3P9i2KL3XkKJLKzweDbXELhUmnF4n8psMyF2o",
  "key48": "2qHtS1583mMxTQzER1zfip5wzBRj7erqQcRY9QCBpK2mRopbmCrcE72gVyLrcGX3f4ihRzQ82BJy9vGw4ZPHZCHp",
  "key49": "3oMAmC1xhd73XZZeyDLiXoz2j2mNesgPD6WMXDNS6vcUuu6sr5mVYGeN6CB6jUtNMSehApddMrfD9D7VDVRh3e1i"
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
