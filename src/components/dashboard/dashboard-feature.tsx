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
    "5g1tV3wKDQQq4m8K9a4o7uXMx4SgaALV3jwXm9p4R5rdwpPE1xB5e9Z64LT7GpwZ1zHBAS8h8W54ro2UBQST7mon"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mSEHWVSGFoJm3tznWhSJhmpbMEP1UAqVQBSZihCPVwXREVsgNVHzYFw3YozF94qthuKjDQU8XfxyjigRfw2t28A",
  "key1": "4mStQwx7UCjzm8hrQzq1nLcedJ5hUUYxxjAJ5ZP8knbCWxRUVhKGm66LSz3x8LFnEoQPrUUP7ijEzpekS12X9b29",
  "key2": "2Bqs7kvSqYS5of5ysdBUdcNZT6X72xHypJzbvvwTgrsgBRNAULwtRvdVwbEtQHjrT6mpzzcwnKQtpc29bZvHVCb1",
  "key3": "5Md8NoNzcGzVjipqV93mwKJn5rwAPdC2x2MY56UYX75SzrDTHxdsQSCeBNB52V8JX4e5L3yu15o2zTdVfsHjQhaH",
  "key4": "3qjAgPRUvKuSw8h2L2x3jZGFHc9EAedSSb6yjKHzZUM4foycyMTb8YtKSnn454qu3yPXGCA7LwfNHsZYL2oHNLYQ",
  "key5": "2CWzUGxmm8PeBQQ7SmLmh9jxboRMKuVUxXffLF3sdrJ7pTKGj7oUsNa15aahn6rTJwa3C9WXu8nKUSktqR2dQHRS",
  "key6": "4modK3MM3ohDEZw5L4eGW9WrbU1mYUJLFf2GB3RKCq45zQEqmuKiNMnt96SrVtt5munPJDc4bkRg2JSEGCuy1CHy",
  "key7": "3TZDEfgds4VwydnrQGJobNuv5k4awpSq6hpGU9F6fZqesD2Gd6XSV47MR1UmnhLJ8sUD8aGwiopMkKQNSKsoE4Sf",
  "key8": "4i1BPNHKzXk9fRkzLV614nF3szLrjwUScwhEyyXYFKf75UMUAgq4paVL9SiaPrxpis4BMdaEPvb61kayDHzuDGLv",
  "key9": "5raX5ynHPKvJVEiuQKir3iy7aNtdpoHygoG17KjrMjfvP8XjAndgfWgCdG4gQRmRb9RceDmpoARsBk8xPbv8gjkE",
  "key10": "2de6EDCWxnEKPwY6TkzDWUUPtubXoNcJYiQ82G5j2EzrZiwoiwBE4M4uwN9NUukzfNGKXuy6HwQFBPg5nGp3EDwc",
  "key11": "36sq6LfYjDLLChvsjuHfyJPWsyaFgLK8Hfdk5xvC5gpd92j76hy9pBuXthN2XDKwAdKcGBxajwtBvqpV9LbgbPAh",
  "key12": "4cPsLUGmTa4gYbCbhuvZEv4Rw2npMZycwdzPxWtm9J8CdFpyNFFMsg1FMK8J3Yx2ENcCRyfgBELV5maFeB88HFJ7",
  "key13": "5mjaqXLSko2C11iTxGJGQ2fKwSmAT7LnJzvzRR464izFrRQ3M3QTKKp2MEbcMbe4nrf8S5fLjBKWRCzsUbWm7SPb",
  "key14": "25hV7RJ7yKLQ48k1rvt2UpHGqbo2qQPR7odPEJyk4NkRpDAczk5qCVbt2AG3F5gAHJpfd6QyNGcMG34oD7Vc97Qy",
  "key15": "2ksbqD3Bn4DzXce6aEGcvWbzNzeRHB1RGCsHGJw752EH5gPxAiEp9y5svXHzmrncPGR2uGnXFjKdxePVuMUxvDYn",
  "key16": "TUywAofhc4oWMkUX6oGKq6QEQqZ1swM4ezWZyhTSRshmUMtkTitzfZn58SfRhdjfYAZxiRVsaPYPmFUTaMVanPJ",
  "key17": "63Zpc2gaUHUhFq7CZAzxc6BL5v9oqcWCZigf4MoHs5rrujKV7oZpFf6bQ1H8xx5gokimzA8tBLonAEjuoVkMuec",
  "key18": "2EgVcQTZMFn9ZXrVFUroaBXSfbhpeaVgdzsVCdWeTcrmkHCFKeQJXjq1GMfWQi5HxhU3m3ghajrKrkivapiwJysQ",
  "key19": "4pjvPZ8vtgnLU2aiBULXUpLnxbGKKRns5mvfm4FNEHpaWWQeCac8L1NJHgUHpDumczAkCunfaWLuAUZLC5bqof9f",
  "key20": "3PDfhviK4q9P7aspm253LhjbvapQJHjJonCT5eQ3jF66w2XrdfWvcATQ1vNwtKjQXtmuFvD9bmvqtKj4exXLvt69",
  "key21": "3uhLhHndhuyYJ7GMuaXBuvzmEUviEcaSdTaU86XX189WxbA3Ga9sfRjgJiJx572icfZiQQFAdPh1Ka9eEZ7Lrap7",
  "key22": "57PRzT3Pr1VrZTWXHcD2W26aZyRRnRxUaxpwVrwD2DDnwfLh4q7k8q2JRXnAaFdxe5WyzStuZUhs7KEgf7nzArPg",
  "key23": "5yroWFA5RUsTg1SpV59cLUiHnd76CeuwLq9KYwfnPkVSQUsDR39k6piXVGbKBf1Cmitf43NoVn3rLnqSStfmSbif",
  "key24": "5KLpfoyixF5E8qqnmMPyUSw2vpuK3LTBnyXRQcQs6yhPJPyvu7R3j7ee6TBD4SDdFkXxFka38qUb1PatwYQenQ3y",
  "key25": "3ex1MYBwxMTFGS27P5VSBD5toEYGbCoWp5YoEtRSTcbu9AXEZnvKawxLBu6wXptgDKe6qJevDD5zXLbvDFDdd31Q",
  "key26": "58TNYbpREtQbhNGVv5nU3qkgy1NYrZ1kPbpfdMHS1qR3eiiE8YQ4rrUVp4QWBNDtWqVwvCboLRRQ1fJxAwKA6Wgk",
  "key27": "4kANNe7R9KcNmgedkWnfssdJN4pEbDdYBqXrA56cqSQMtSGZWwWfXfvfYhjmTdrdmgEptxDo4GKMqWTCsdhjkbTD",
  "key28": "25h5c3mJVP6D3wDHFvD29McEeyRCCA3GMg1iGLyAChtmdPxYxKkL8PrHXCQKVimF8DwG5qC4iEriJdquagTwuXd2",
  "key29": "Mq3N8GEVc3TWrY2qoCHJXkvjFPLMoSEr56irEoAKCzPRfVzbRMVipc7utugFCok4B5pxf1A8PrgZ2hFdDfb4g4U",
  "key30": "5dQyyg4myZVf51smunAUvv18TL4MaqAp8n2FeomDX1ndCVmpp9NyRjNQhShFRRQy3zWgzYZP6ei7gHTGSezc1HRQ",
  "key31": "6ej66EUoUo6xSE567AuCxv4T57uHhwQkGBZ6AvPTLzzyQ7TdpkJG6nswkW5WqhboNoybg6nAgrqwfymjF8qFm2h",
  "key32": "5fCwuQyXUZJ19YamSoE7BshZZWhCDNqsnYA9hosJ4pzYe9rbNqXZHm6kSXy7kbUYvkZMEuetW2ViWx4eZEJHwG9a",
  "key33": "4H2EGMaRLWDHJamhxXych6Agr1DtcPQV1QGCgub9nPkFUanFDbzK6kMe1kqzyaR9kJaoEZH3Zcvy1CRt2zHTrdYW",
  "key34": "4wachNRTy2NkVtvrapaPfUytiFq3yetN9j3pZ6dQGSCap9e2T3MbeepF37XXQztdx4tYtSqfxUh5TPzLcQGrcoWJ",
  "key35": "4ggPgi6zz6hz35mdBzwqgyoEHCbpErHh5YZJXPvSjb7DqwcuxshEVeqFLtgPF4oFXGpWu4znbjKrAa312rcbS6eA",
  "key36": "5VTBcztc9bfuoBLUbXYZ9zu9jWA91vApfuWKBDruLnNLe4cB4ExEJtcJ7EECHbK6dRTLZUdY3tF5YwFxkz3yiQHd",
  "key37": "2o2cvNHo1BWEbUXLDEdpmT7VhdbHFS9fnyJHq27MxosvpeyhEnpbSPD6KKJ2GmW8rmAG7PEtUSMzGmzoKP92Hd1i"
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
