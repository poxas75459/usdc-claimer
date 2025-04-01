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
    "HXFsfu2cRjA1PpWDRntWwNHCYqTFqMkFAuNJjjXzz4vPhetyLZV8HKKfpYFTmsnpPfcPZbRbLNSMX9bkGS8q387"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21n3NjwVLscPTm8CPFuFuXWm1EsPMatx5b4HyHrZeX8D6EhaKN5buYj85AJMmUEa3tCcVPEEvDCFatKP1sP6stcY",
  "key1": "ijmXc5DsiFH3kaA5kGGcNPSVhCGgpk2wpeizMx1PSnuXGQNSBpSzRgQiPvYt7NXAMbTEjBdKUs6fBc1HTpWPzz2",
  "key2": "5a3ady8T45uira5wS1LbFzuL6XEvVLD3whCW2NW2WLFDmj2QWgN8hjPyrDwgLJ94AVLdVgd7yz7n3UK5GmgQVJBV",
  "key3": "3gZCdwwUL15Ju35mLPfPaAQpakst4GW9uW6bdvw4XcGgwuXytTJKphewKP8NHBiCp1AaLwRdaRCLQ3dCytk9nwLx",
  "key4": "63U4xxwoR3J4SGT1ZGWCsagrvVHAet7Uo6NZ5Nd5YaZbkbCZrP1kocrX1fF6zx2fUJ3NcNNCcvsLKdB6BG8EDoNr",
  "key5": "5onFFTpQrsrDcucYGFoUPP4Qs2zzBKmksyNmgaYdKLxWUEsmx2k4xRpbsNt5VaRUbzevkMW9GaReRhiLpRRNVTs2",
  "key6": "25Pxk25ZScj5V4iEubsbAiE6xiuxohRXcbtwVAD53cwC6fvAVs16GhkidtdHhjGrhxLTkjbnCZjSSHUjGeEX3Uw3",
  "key7": "SxjTFGRh3uNJD8ByVoQn95joXhd33pWL8ajZkTT6Humz9hc8iAfizu943Bj3UWqknm71F6X2BnqJ9FFY8fWersm",
  "key8": "3Fp1T3FnDuM4rYR7j5VAwtGfgkuypsCNXFNN1JiDRWHL2FKRhYRP1EGcmkzGk5GLDJxJx1HCAbC3tPaZSAE4Gq5m",
  "key9": "5ybCR38yu6o8MGNjmcUkxb9SSpfep56pXg5GTkxhxivWWgKsciB5tr2UAnZiuqZahxM5V61z6eHDLraHJXk2cAke",
  "key10": "2SQ7YfYUqt4GzXFT7xiTUw8RD6NCYEaBrMTc6i6hnvP5U9QPX9wTWwQJWqd6nsryDzRRCo8NCnQH5cs8UkYz1EsF",
  "key11": "s8StmKpfKqvvnCv3PUWBYMX7FguBuFiU5Qm4njo9958dvB1DgccoGA1kJznr581kRBdETP1HWsW8XHiNsR4MhCW",
  "key12": "4mzj7DeS8sjQ5aScGXGPCGdk4E3SE9TvpCvkDSVv9SC7sskeB1boNT99yosfMzQDdxhTHRoDuB6xUPUKvfphU8vK",
  "key13": "4ANTmUhYUyWyKnn1WCC75XSUwEtgREMqi4xjjoxsdFUz8qQogWCxDyn1qNf9inXFBqgHB3mUoayRyFsjYYnFGUnD",
  "key14": "35jF5CtexGbUepPtEn79g1fpoeqjSTz6RYnWddkMDFwTQ51vBasg5a7rKwQE3MHYgux8iXQsz9uY9FzdPPatXAhS",
  "key15": "2nAvKK5AH3LmPPjgrMKfRMWYbhabP8WPtCQpBN3q2U9tqtoCfKTTxT7Hfjowcn9n57L2NyRBcJ3pTroVvVMa49NC",
  "key16": "4skaq5odDaFBaTwUmW6mEyTBaLjGYCt3CisATJhoHPrnN5oRUDTedYEEFWXnLWriyV1NwUqCmWsoCGX1yJmUu4hj",
  "key17": "q8m9RHEcc1b3mdSAtBwqkhzqVrFMULVjwS7QjcV8jZaPX3HDuUUDBKbBD5FNkvAqEceevELH4p6YYzVGZT9JDyc",
  "key18": "3Y77XUXAMb8ZBwQouVgPzQkrUnjifQSs7PBtSgncYz1fh2fdfXzsCQWBRpV2CBgo3kEke61rUU7v1Gii91X41Nbw",
  "key19": "dQTZsKVgXtaTb7dccJeFfBxpJG7qbEjQ8mugvK26omYeo8qZ1HoWyKcp3beCDcje6Fd5yaebb1qtJLXUhNE7cwt",
  "key20": "2zJm5XdSYLud4Bx7DzEqQrL9aU9BPMTa7fKJmX8DcpL5wRqUtdvi9cQBDbkauUJs6PhoHwxwQ9uXD2ri1wi4LoaA",
  "key21": "3s1yrfzxMpybM6gFX3Z9Gkv98kWYkvEF144npttnvYZ8EC7oVzDKPnajAxc52DUVyLRNd522HeTNag9nwuATypGv",
  "key22": "4tTAWTQwUTViJTKyxutycSrpPe2fU8Cj7Smq1LkooA7kjo1p8D96h4VFvxpBYN8x21S7AK1kDjqmjuvZsMG9Zuh8",
  "key23": "4NTfNvQSBorTocSbgG6g3euDcAdpMwsDyhAUT3oeax9kMK9zhovHH2MU8HV91atF7ktyypYw4gKF6anyf5dsh3Jm",
  "key24": "N6ENfBoncsSz9DF477jz3o8vP4T6PrMFtmqcJFUBkVkzf3RWY6rMF4GEHhmyMTewUz9BAgE5aL1k4GDPvWsWAZH",
  "key25": "SGog7sVq8vB3BU1c5LdC43beo4ZurmKM3J48FT7r8vvWwRnVCGtztdhw7BDnknZjQjdGmFUTUYfqPfHaj2d6L5b",
  "key26": "5Posgr1a8uwWUwUS8JAs9yHymmijLwLtwaALbEFYAzLDj69eog3eRLXSXvoAbk6fJ3Bwt2tJcqTD8pnXJPGJoeD4",
  "key27": "2zyxSZa6eJ9HwWAPRN3dQP1enFHcg1hEwKiRMMDMhqNxMefFFkyHiDvboRjGREqEcyUh6Mo9Ef4fCrhjHvvjEcCD",
  "key28": "iQJ3qwmZDRjQv1WDK56TN21YHDx73TW4aGsTrYTB82uaRifMbCYMqDCPe82w5Bwa3e9Ta5AfjizDAVCEvCx56e5",
  "key29": "5gHQ22stVC6vdD5Ztb36N3xi79hzyLANFdVC7dPUYkMrFQT2WfmDYFyfkhqSZneGqyXmUZ2FhzCL64QzJXRKrhVB",
  "key30": "21yxDgve8UB23HDJfC1jNANWB5QmNWB6rr2iW5ZzvrAwmSdnkrwL9tQZgtxhD8A2SkRkqWqaVpkBzojfyEA6TnRj",
  "key31": "25a24Bt3wiBhpLmxLpZqFP2hmU3A7JSaLV5GYzqPbYprcZSs46U2S4Wo8n5Zx2TFjPawXGAcFdYJMABFRCsVxnha",
  "key32": "3pj7kFzqbaTLikh7CperT78X8EkoUdMxQsk3MiUGggSt4dD72m8hUrUt4aCUN3Ay85kD4Lzi3HeHCBcsoV4dMCQk",
  "key33": "475dSrp4x8hT82qHdGFXz1YW9WzGXwPtn75pvVc9MruUfx3GtiU6BeEAL3qGvYq2NmBNT1xYZheAQoPyGoCWnij8",
  "key34": "52jptVYVzYUpS7oMrrvMZo6ZVA7UkJ1Wku1yDUGxAJnsEjvsuG9ooBW2MjABR9Gxhednivy1nGW9gg197MMRBVaR",
  "key35": "3artVF3Vmf57VvuiyQAdoFhykwbAMbRQmWWeSopnrga9HYSfKAUgFWwNRtr4Rfm6KarfQVZGtFRGrUFvFegz5uZ1",
  "key36": "2djZgsBwraEak9g8geT3bquMUbpketZSqYYkAU7nQ8gCvvweGuZ1CepTjXMu4CnpvWZmmBedETWyrwpfQUHtVCFH",
  "key37": "5enp3VWX4FjR5vAd6n5qfJ4zhvw5AkpRzjkSG9F3GEPMSrsASskukVXqvFiFKqU39dkGYkVy9ot22Hg4CFnTwUGz",
  "key38": "3q8oFwDiKiSK2o7cqfBz58tfuXx1KUaWhxCheixv5QRDFDt7hHoAiSArpWzg3tgXuZxgkhS4XmqMvgJSHmYWeggJ",
  "key39": "2cFaw9kKduv7zSVo93tDahm3Jomg7Uia8Xcd8tyjASrQi4NJDgGnRm8PxXkHffAkGd8twxF6totCmWKp83ekgWae",
  "key40": "62E6HjWWUijATWHgNtByKGk7w5zjA2Gr4GZGRxYfHeN5cx9cSGAcWjmyzjbnMsvdq3GmVo8ynbMZAis4rX2MdNAh",
  "key41": "nmsFMn7M2zzT7zmirxAQ6WrxYMUyhyVirnjkbpST3QyRgUoEB3yYSSQ7rWF3PqyGz3s7too4nLuTcCCXsLd6FTH",
  "key42": "2umg2BQMGmMdZRpQi9NvpTYRXvGZG1uVL52wMPaTpx6nuZVUoyApQq5ASvcwjDBtFUvCPfb1rDPfBDzKeYYHWSnS",
  "key43": "tJajHEkSmE7pnwgi2NabeEBmrztfgEPCf8zPapaSLD1o1rWXkfEx7XEpXvyJ1wgbgj7TfYDwCzE6fga6F2kxXrK",
  "key44": "2rKcXsfDaTkqQSuZs1jJccs9o6hjD9XGVYo6jDfkRShheBKfQjY51fWVoQq1idVUaiKAQxfKjKz4MLWHnVSEuPFV",
  "key45": "2qa4b8NN85FXHuTQzR4WDxyqBd2Q14JB1yEWhvbkN5vVMVYcTw1HdEcmWaH59XehZsV7hNgnUpUHoLEHCPy6jnQ",
  "key46": "22KeepHnXZ4g2cuFJ5tXyjvf1BNWA7YTMijAiFw6HhZBqC6WArbzTGpGYYfNiRhaWnYebAqUwdTZUaaY7VTWvLan",
  "key47": "2zxop6enqiWRknP3CnYywqAMXQ1zHMiagAo8CtNFU4h1JKiqrvsqHb8YkntY9ypuZ3NY342mQxEvWznsgyorjhdP",
  "key48": "62Gtyf6TTPUQgW3kJFGSumD1rjMgjzYe9Bn4faQc9wQTt7TbyopzyA1Qo3m7iz6A4v7ez2EaebF9CYUUomFb3nLu"
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
