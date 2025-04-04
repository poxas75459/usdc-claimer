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
    "5KyTv45HbDH5KMhh3SorUggGuoKUsxvpH4DJWk82Pby9mmCGcfkiTDm9eT4HqWQ1nhXe2b7g3kc3UvzFfYytBMRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26foVtoLTyTU3m49WHm611wMop6729hZd3jLd9GqjGa5ouZ18CuMpRdSz15HEbSdcSia3vg9r7URijABUgYEgpgS",
  "key1": "3yFuvau16xNUiieDojVCeHJVgWUw4Zff1ANRDRV75fUwvPg5aKUabhFpy8EKETPwTx5cCQtw4Cbp4enEhycgfG5J",
  "key2": "3hEePJwRStyvDQ78934WRcDmvyWktzQhXrQeQ8xyxcLPtZ3wbZHzcd1yHBbAu7ns2Ypf3PJK5PfwKJTVXnB4KEmk",
  "key3": "4TP2cUmbCukPN1X1TvbUtcvGweRrzH4ZqB8FMLzADfz3cPLkyVfLx4KVFtWsif5ndDnnk815hqDgdHDuCohDqAHU",
  "key4": "2nPyG4H3aE4P8eNNyhzsPohhE2sEUJaqZPc6dNdh6amvk3iF16oEf8dxVdXwVL4r39wAhTMBsMbzZRSzk9U6JfL6",
  "key5": "259nb6n9XdWVMP6UrX7RCNUhFQrS6qiBdZJSiQiogGneTEy4HwQqNHmLsTpATwMZkKBXANa4KML6xuHYE6EiqZrV",
  "key6": "2UCr2nsyNz5GuCG8XThMvWomytAD35VxyXiraCbYPT3Ko4mnXMSDBE1SYquQ5TYF4pNfDV9jKtrjciRSuXq3SPZZ",
  "key7": "oUaAHjsd1Fa4dmYu74aP42NxERyaw72maWtb7XUWa3UkCVTUS4kwEDHyVF5Ec84aLTpKPBcBTYczCTfRseKHYTm",
  "key8": "3jzbJkgHSkg4XAft554keThcwdU8VRbra6TNiUWjsje8ZHQLEw8ukjNSXcCg4WKo64oatDJqbawEmB4rHRszNTHH",
  "key9": "411B7FRpghMzufYmKpchWxaeLVSwBKY6YEEruZcSfQPyhqWoMpQmJZRDyFRhtwAnXF7rNzL1Ei7aZX2ccPWscx2A",
  "key10": "2NTNpGU7Xc4i55J8E7kJbEEehoBFJcFW9t5BWaSdhQ7cpPC3L5NgCZvTDcR8uNkghTtXcAyprUwnVaWgaBANDKqU",
  "key11": "4qN48V1kEiSS8AMnWZfg3pbKxv1Fm9CxnbGP91a3E1uprH2wMYnFzXUQ5QqENKHEAfLuoQjpss41iczTkZPZKMaC",
  "key12": "4qq6Z48s4kbRQpPHvr6jFzj82TKPpX9sFEFZYPQBxQL6hoA7c7rh2ux6sGez44jZyK9VTwLqaUA2t5JfRXwBiBwo",
  "key13": "3We5h2UdALBu3M4pFsQxBKBNJtkdzcevN7g9KDHER3Pxv99uKBHaZVxRCwH3bf2PZCZhxqm2nqjjhufzPL6JEr7X",
  "key14": "4BxkYfsq4NgqLC3kyiKTeJ1KuXa2E84fP7neHZGvoRQqWiDHeBiDGXbrBFv1wwWWBZn9DCphWZEifRnTWvxJQFTm",
  "key15": "24k1mCVGxwWofmnUt9FgFD4E3XXV9bwbuvRJuXMqxVVS7qUyUqVX5CqHjoVUceVLg3u375MiZK49hzikPasFHEZZ",
  "key16": "5Jd3ipAcAw7uR1NeVLmMgwwdHCXW3cBrwKgfyvTitYurtAExdSsfBohQ7zBN7rK7HgfE7CAtq4Dj6GpShU1Styvw",
  "key17": "imnfdFHFwJn2ENnQuC43eJyU359ayvW8ARAcskpzVEvyNx5yRZoTgjP2t9nZBo92KoE2aUftcwpGXDs4KPXjgYD",
  "key18": "3WgajZBEZ2J5okWvZCGH2FvNZKR7hzBiAoAwbEroQKU9gN61gMbZjgTXMV7v3vG7yv8ELkSiZ2JE6h7airSiUzrN",
  "key19": "5UrYmXUsopjG5bbvX2Kj4BUDHrkK1fzFzYBLtu78nL3ZGCLuNyHoPoXaDxPQBii2PXBKxsGMDcC8uhLxiTAzFjb9",
  "key20": "CWVzbjiGr4bJr2zTCgkxUh12mmLhqNnNG6ZJ6iHpAo4CigjHbAKWzzeCpM9mCxgMk43LL5E2CbmpbHpMk56uGnZ",
  "key21": "Zi5iwCwhX19VPAgXuJnPTjqwZ5GrfNmFrCP7eqfjVwA4jEunWpJxyH12cQRyfqt9G8eVyXkuN3woAo1EMRmLVRb",
  "key22": "5jKenvU6QmnwLtXTSRCjMDPXeVefXra978y9Gn3QsCcsEqjudyoZ5eFoYy4U7kjBbXmYdD69kbHyjsEDSmpejk2d",
  "key23": "56phhSyadWpNiSepa78AwaYWMnRRb1aJX4hfmbmyUNwWKn1quCRsANVWVm3X7ag6MamqWJry5z84qy2DQXdxPHWZ",
  "key24": "2hiChYrZxA3fn5ZoqphNVrvYU6qq5AVH5dimardyK2crE1YC3r3ekJ8jL52TagiZheuDCdihb67LnG7DxbHVp9Mr",
  "key25": "2U7zmKqACUrfL42kgsbMdqCwC9ZX97GfKTNkpcrYyceCVjpTGj8Pg7V3vxND5kXmk8ZcTF3uyEUYT4U1UWTTSXL9",
  "key26": "57BdwmfCTbCqs3WCWH5ix4rLEZQ8x4HLF3iczLPbPaMhDhzctQRGTKRRN5WPuP9UDa7sGV5YsVUB3wXcUoe1NBts",
  "key27": "35nwkk3tTk8QLkXCz5Dx5yGc9XTLfWKpN9pgkRpNZzRFE5mFvABZzHZYKLeGiNvCEmBwSa9C37TPVezmjLJshH5n",
  "key28": "4TFSuRbKR5tahcjdu6ymchETR5XZyr1uJjFRnKB3E9M6ztCsmSeP1DYxoTmFPFsdfRAMPd1TqLwnwC8kgbMmAc1q",
  "key29": "5DE9cBEsqvPst6kzyb34WXesWRaWsMRRxzrDG1pJxbdL2kijUzQWN3C5TuazhV8y5u9H5LLcZ9S47SXNV878yuEP",
  "key30": "4gS3ZjvCwZ77RzJcYQFPeZW94NnXEgwAquXYEQ5S6eChXynqUp9PsVseoUHfo3eA8x7qr5xLgK5Bo3xztzW1FLtw",
  "key31": "5EEZpmaQ1nPhAngX5jz6MSYQoHYn5mrrpfpRBmBRjPnmhen5NCnJ8B5nA213yQ2krzyWWSLx3oN11LQXVEmaNZ29",
  "key32": "4bovpQEnzXpZ5jaXx6Ab91baiMavZ7PkJJdPrNrEXMxNEMdSXwVTGQK8LuTC7GDD6M97zigozev2knGayDseUTNf",
  "key33": "3sfj9pExDvFUBFWm3tP5HWzzT2oiuAJiS84krhR152kV7RA8jNTN3t5K4UdUqoxawofd477mdhj1f5ahZWA3HhxS",
  "key34": "iGHtB3E489drC232iEeGSMXoMqQZujjJbuMZgqnKPQwRc8Rk9UFWmnrFeTxjb1Z9cKc7Pi5iiYCBfEZLMgRZN7h",
  "key35": "3qFSmXBdjSndNFkmaHPe2d3cAt8Was9gb9CMPcCZTqRz6yrh2Jn2fb8gsVkUyufyuBwnQ6WqZ82WkV87e4GdfSWX",
  "key36": "3ZDmLDzST13yLZFmk9pinPiDiWqfUDFfxtSm8JL5UipbpSzCFm14pQtVY7xuLwcnBVHU2XwhK5ncSA8exudHSJZV",
  "key37": "2srL52LHg3V9B8X8VuVJP4D2WSfNg9mzSk5dq8kCwYWi9sFGDzPoRzVmQVsKM4aoGzBugHoSftfVEt7Bdnd6qLwA",
  "key38": "WPUh9EfWtK5T2Bbw4527Ms5aHwccdhQcnKaiELywb9BgaKLkAsKz9Q4sizop6sQxFgaNApWDFDEypa8Ti1Xwg2P",
  "key39": "wXrbdKHsiYnCbsxwZNJFj6Qp9fS2nC6MyFCkiTQneW1GPUdfWP7sAMweRKv9ARmgW2CexoqKmhWN9jLcocM7tqE",
  "key40": "23kVFYcVbTVPYYefnxsswzrTcZEp6eR1WQsPPp9v6VQhtuzGzeozhk4EAfy6ZjjLG7iH2rVvJTSPJxjMRP7uDBdo",
  "key41": "3Qq9eZyM8ykztNfmRByGxpy5GZEZyu9kX9ufvoEfQhDRMm8x9UjhHD776kb2noCAcSWkfAzQMCGDWUseS7aYe7mG",
  "key42": "yJcmLU9aHtn9jvD4mCry99i2hpNe7STzhmHWWS4bi1bcwhhFuprn2R8Jcrimng844ogriKG8JCYtnEz9s4xrZVs",
  "key43": "5zagK2XRAsWDvNcSaG2jxQtBwBd4anPMTbJqRmk9CEquQG51svbbSJpEfZNj8MoBZfRqg9bWVVD8VXeGV2t2jdtN",
  "key44": "21NSx8fQdZYoPekPsApVvHHwBYbjV22dadFdBxdzsWuWem1H2WYJcaXMzokyku6kbHrK6CxPWnmyUogdntW38Z93",
  "key45": "4U87xoZc6pXJcrmD37yM2TN3AkYXKkxUtFYksJFwUdoicR1JR5wYXpVP4ZU8yyUortiay7VFyushCLAKATUqMt8q"
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
