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
    "5cNfTVuCb8S88h5wn2TWo68s7qrQzXRUbFpXUczzRVLstkYh8Q4bUJHYJbtzGbpyuPLvyPGh7NFxuVzuLPmc4GLc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JaYTgEyWurSQFdxeStT4RPqTGbkMhoGJadywcpzH69Sje28TVfsRsNabbSsdrDVLc9yMSjc74TPriPr2upowYnj",
  "key1": "5VaQnpb29D4KfD46nm6Tzn19ifKpmyk7yCqtncruvAJ62YZ15v8VxUMWUvT6G5kzTonVcKxbggdoUG1hL9LbQAqE",
  "key2": "5nzTSafxxnPd9ERkhBHRvpS612G6pEkhbq6QuZ9R8wfQSrytjseNC1nEVn5dp7AXGX5dpB4ophZgCn5T78fRqG5j",
  "key3": "3Mzmo1CUSn9QMyhJ1q5RneNvbDnkZdd6iiqV4bkX1hGEMVX5ZWue9DUJk9258QXwSBeL3XYBoGvHqrxc4QZvapTM",
  "key4": "3hRAY2k9GjhaZVAKY5CWTAgkkaUYAUXSCffNaG6hTM6Mubun22a7PX8GauoigYimgeYfjk4oLBAkXkD2oitBYqdU",
  "key5": "5THsvj4bdTPF3aWi5wbuooktFGVM4YphN5uiT3GwauxxnExkz1xYg83Sm1QV5bBJ7vC5c9MiU6GrdkugAzt5WppX",
  "key6": "5JKbWm4CpHSK1tK4vMgkA8QBnQ2PQuNrzd93MToFXU6GvaFDcaCgCb1g7cRwndcdsqqrFhz1Vr1hrZdqG883p5Wp",
  "key7": "4akwd23r7w5zfJAgfoF1NvdUem3PTFGh87y5DYKcBj4w73XDZ2UqEdmQc3DmaAdBzZyrXQ2QrQ369qGCR7axGW1V",
  "key8": "2HgTNhmXT71x8WS9c6ts1bwESUo8T4PNFF6NyQw6XzcsPga8z2nevimL69MEcWXV4LrFZede6Jpopxq5ZUVTd8y1",
  "key9": "2KYxcVFD8gq5pRU1d3FrQmyKwgAPzm2K9QpaGcNVJeeHaaGyW9DX7qqqjKCPBcTYziNGvWPtwGRg3ha1Wz1AkN3u",
  "key10": "2JGQJSmYfkzCshN67Ki9RqVHy5LcmUWJGRCP1BbJwcYLbLMSL8sjQmQf6ZvKHEQHzeyJ9984wRStyuT9BtpzLumM",
  "key11": "518C36oZQEJG33BUkqFtfwk23JRDDtTfYLRNFfjd8tmYtfWEJRdqPaVdvi6HeRwGjFqAwC5hjiejh6wKMYDERcmB",
  "key12": "66gC24TUZJrtYfPUFteWYzo3GYfjRRfW9RTw7EcGARKC8Xkvo7NES3pXyiE3q1A2vf1o4qxhQ7dy5BJAEXh4Vft5",
  "key13": "5ZrQML7fzeR5tLku7MK2j1NodpZPnr15qzHCMXkxbgtVinaCbVbHYQMDqZSYnDJVrSNop1HYfAog3a2x8u2YDws6",
  "key14": "fh74PqhM24YwP1pGPzouAF3HJr2rToKJDhDnjyAvFmb4EphU65U7Vva99riQ48AdmseF3VjMwQtuziFphzQ55og",
  "key15": "4mvb26CWYnwJxJb8er1HRGgnSCR6zTNxQnWtfTXDssEtLvzRiJEXQ8FqFv1iirYkosBPMJUBJcEsm1aZP2eFeH4K",
  "key16": "2XnqbXkBE55Kpcx8vqNQR8AqVwdx9KuRMB1TnpBiB8N1Gzk9iT9vAHndjVXw2W6gCaGTMVNKZwPJzx3DNZYzmN5W",
  "key17": "3hgyJM9YNDdgtCVPtJbKBdEaxu4TTqpKDezjyRuHxCajpsFSrW8JgBU1DjA94rN7cbpLicwSUbdBBoBMH7jAZFJe",
  "key18": "39SFbqK4UNMEF5GPskFNHVrUWi6DMBwz7a82adYNoS9CWXExHfN4hHKz1jb6FfxWBP1ESkYmJCvwfzH5515Dxwnu",
  "key19": "54NWayARtSWWcWKNnL9kMbyqvJVdvE7U2QwMCKni8v7CWQPsBYzt74mgmK4PVu8jDsZjCQ4CorUSMCFk6kkPaiDD",
  "key20": "2uruTFwJercp99meJoVzCMKTvVf4djPevB93VAYuTv5gEzqW265YPFpc77ePgtzfG9dE5QqijgGbXsBGSgJQJNVC",
  "key21": "3QBP979fpbe7iL2fpcPBq7RvBnyrYuTFNExdfSxAUbCM1vNrHcQsqGbP9mVrzo9n8jDv6UkGEiVnZza2nyhBx2zm",
  "key22": "3GrB2h9UZkaqyXfYt1vutU9BV77dB42MLQ9t75MN9JuUgHWBnggRofzpXQFDRSCm9NpPKtjDRqUGfZJq5aNpxsd4",
  "key23": "4akwESbUp1Lj9AmUbMn6BSy9Hz47SMTcUDydmuRvMgC9g5jEZ4Fdn5uUYYrKdAmxS1WNtYpWKQa1ZaPHrpj8Ht5R",
  "key24": "56nQ3ZwjHzeMgBzZbnbMmGcKw5eQwLKqaEhDdrYwwH4QC8pibP7gBkTCQ9u2xvjxAc6N9UWM2eQH4GSYXF4qRncX",
  "key25": "BVTUW131nh5u5mvz6bJB3V3PsJGyrMTtYPFizx62ZvSoX6VVjGYgatGzYtTMRa6rg4vVqKmAqamYUQ7ewdT4vTY",
  "key26": "4suQyT36GN5RittqFHTw5aCjfSXYT1iDZJc8TvNzy1tPDW3NF7AXYJ8jjBeCANTfTREy6EsLm8YwxJZ6WSuHjJR3",
  "key27": "31QvYMNqnWQTaXXJ7jFWuPvWkpsWWfuqj1F53tnidUDDUCKAVXvM3CBTQQ7GrqwRbZyaKXm8gd719vKrLUyiVXKE",
  "key28": "ZwJT7Zx2XUN9HzKUYJXLtHMm4btsQ9we1GmoyvNw7aV2UXCoziMFWrcr2sFmfo7UJPcLb1G4vj2Vb9XhGUiNNEz",
  "key29": "3Wf83M4xjkMpfrybM4tdG6VQtucDDYbufsLDSJRbvdrLtqWRA12DoSssVzrMDUtg2nAMGFprVq4bRtGf5GmfAAmo",
  "key30": "AVT7FtZK2ibHrArUpT8TbgiftBcRyggMnBwERc9dRFusz12WTNjAuwQPPQj94jAgwy2CDh5DTrZY5gBzZhiFSvR",
  "key31": "2HdJ8ScJsS9gVR4qQ4uSbqqNngfFucy6jy3sL31xW7BfLEp174Wy9dqR2Pd3nKjUM24U8r5keyeGhu6BS2QavNt7",
  "key32": "UwUK3Q3kLHyaR82wGgfixHj1Wmd4yn55GUDBvjdeEUNqj4Ty6EN55vkkfNuVtpPWYg7VE9ayknZT5NUUdeBa4JY",
  "key33": "2j5jbxwU4bgEqXSFq2m2LX7itBLRS2rPfRjq9BSfytnNFMeynePAKZEMZFATpWCe9LcwydpH9SeysEKnwNdSbxYY",
  "key34": "2fHeGAPHLj5wLLy671n2czWwqNgbSGcZiEP3yXJLfNDUCiDWcyYXtzkzGXPrDDarTkJ4fuWX1o2qGwY4Q2sRPFN",
  "key35": "268BgNzWD1pmL9wGtb89uXwv4vhdNjUFqomEwF4NF9fdu7nXw96pG9KFVTxBSsR6rTSGELeccWjvwtFddHrNgPiz",
  "key36": "4jcjJNA7gshKFfPPVZQbFDhSXYQQ31RKYt2jE4scy9T2m5YVXVvNMkbYvy9H3KGCfJDsvkBPJchtFdGAp5WCqrQF",
  "key37": "2PEdbd7GuMumfSYNbcFnyJ2WahEGRcA6TCxHSK8ipr2dmNNav6NEZbdURhscMhS2oddKm28Gp1VGCG3japHtkJYX",
  "key38": "5XPegf8rBr9BueGQrFpHh8xgVCujz332CjKaW6peUu986sRzQ7Ahfn9ySsoqYg5gohZTDVFj24vSWT1dyPrqh7Za",
  "key39": "5v8wBVqFUzMFgvoFjMzDYMCNa9F7eM2LHk7adjzGwPsURTDVKpUC7DkCaT19aJDejYGcPQyeE2LREGWPdnrMDqz2",
  "key40": "3msd6F6PRiUA8pu1xuLxqxAHHevLMyS1abU9PUR2Kce36FQAyVWJWyifx5sM4a6irVMnFmJmF3mypmhAB1er7gLw",
  "key41": "NmcxVtJ11JLMuq8nr5fvaxW2iHcfw7jm85tK1LqofNE85eDJkyR8nJ4bwxBwm2No8t9vW98ufYvzT7EzLqmZhaZ",
  "key42": "5G4J1Coa2y1rfLeKo5RoYP3rfybDCTQd5Xfyh1Pk4ed9sA7zEqXfKZxPeekG1rt34yn4bYSNAqHoMmDrrxZLfRpD",
  "key43": "2RKoDht2drf8nfR7t2N61oR5wsgwqkArmbjbDjnhQepZsBsUs7LducvzkN7BugVFn3JxmBm1gdYA8vS4juu3DJjW",
  "key44": "2u78e1xgdTBD1s4T4FVEvfYETe3KwgNBWZwp9rwLtfmqdbnRV1R8ugsPMNP2vEghnNHih2JtGkeipPAahy827NoF",
  "key45": "659x2DWLHXex4S6neP3pVxUZfamawirpg6sZ2sLE29yA7Uc2YB3JFaajqmm3D4FhWJDotyMYkHHcYNQext5uiFLX",
  "key46": "ELcQAcxpGD7f8B6bu63MEX4EmZ7ZdcwAJZco46ktcoHRcLRRoDmLD359srcmBMhyB6S8YTTh6oDM8TE1FuC8EZ5",
  "key47": "3PCMADr1ceXaUzmrx3MELL4qv8AqztYHPmcQCDYx8gWKkSrKRooXBwHn5UctYkZgWBqHV4Sxcym4a2AYxruz6EaS",
  "key48": "5mZxsTtakb1JWuW98yDX6XCSQMhaapiSesL6iuhiUyeU7EAbHiiY1Euw8tZSeS5z9zB77YPcF38N4RtxKF4uStqY",
  "key49": "2Dc1sHzHNJbvCkrXX3QrBssouwBh3p2Hi7N7oNTnq4DT6b2yKXNkbEdq5wP2FFR8fsdEAghmB5atGcbfzUkDiNYs"
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
