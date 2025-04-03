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
    "3aQUj8TAebcBVv89DGExupdo14C564fup4dBY6MUoz9VJuFMzxa6xS9HAg19PFfMVieVK7LZTjriXVuQRrFCT4Nw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hoVqL3cCTdbxADRu9Jb7aLzvKhSK1KXQpTH7dTqH49iTXcr9mYnH2ZZQJV3FFVR5bTp42EMabwyCRZsghxCUFKw",
  "key1": "62drr8hGF2QE7xKwBEp4rDzBUtUVPpy1uWe5HNJittxhoY6CHfCQGBfz7BEjWNQsMpzAC7YY1e63A9erWPmV3cPU",
  "key2": "EBccJiVfVaZJdZLoVNTU8H5QNhYhHXRyXeYbYsRHJaE6XLBmVV7CjZ4mP8T6ut4BfQujQZqRLuF6hU3VoiXxidf",
  "key3": "3nDXvuyxxtmNLhod3R6kDkdszqUQyWiA2uBzgH67MAGokDsh5Yo7rUV3VyyhVhMZpHFGDKh9GtEsKg1r19mkfhg6",
  "key4": "5ReXPGFcjUf3TgRX4dA8TyVDktfgwTKxhie5UuvfwwQ3BnZHUqJu6t7dYwUmoDFJoy4scaMt1Rc1jqB8jog7r8Hg",
  "key5": "4KoPfKLrxa4DvvoCedExtE4bVYRfw1eBPLgcYe1e8wEFkkfg7KWk9Bv8woW7Lkc2fU62PxdyjyYQuJSVVJ3ydwvD",
  "key6": "4vTbYEZuavEC4fgv9qJtSNY4M6fWAJnixqFPQrwMJ87Dbk6BcZGFWDBuEhsxgGSN1yEMucBDKsj3rd3sgxfujHEL",
  "key7": "2ULMcXVQ3uhxjVgQnp9gEGq4oa6Q7q9jR4qiTLshCbj1HBr6Fv7oGMQmKWXuiejvPwoqzQg8ZhsTgt4ktFFunY1L",
  "key8": "5pwbLrzXK2eRvJcofn2FKbds7eWfVfy9rdxg3xtrfvWzHkHQm73shjtv1xeHfHbh7SxxPHUocpnbMeX2GiJN3A7i",
  "key9": "4sAPhjEiBtvVRfgZkMQDgMxbV9nRELqpXEJcSHRH72Y8fXN5faPQJnKUAgnJtcmxqPo2NX78BrF2E71zbjVufNS6",
  "key10": "2awYLAZHwFbcxjxSccuQ3U3m3TLe6H8j5LT4PVdEbT4253x1zKYLYYBmV8qadyiJEHJ19nqmSADVETzMyF8hCnPC",
  "key11": "5RFuxMCPTk5BCP3s3PbGuVWv1J3U4ZXAZCQnaWiMyCYyje4STeYH6YzaY3X7picWR9L9uFExds2WszXPrmxFnGT3",
  "key12": "3d8z6SvhVtYgQ6TRP8zLyFBoTvQDZjqvjrMKsRbmkMMS6Z7BCZKgwseee6GqsZN1BCPpAqdJ2gDAj3XcTM5Qw9T1",
  "key13": "3tD2mGMNWQrM2bYnQ9NwbLnwBWSx6ToC5yGkFHUQgXkuadDfi7UVgKSpKny184W526t9NGKfsDGrmupvTUBKxtoj",
  "key14": "hH9n593m5BcCGWG9jZeXytweWu4fau8kimURKGQpSEVitvUfFR4DqWk5xHCa2cjRYhoFreYMrVr23oYooKZp71Z",
  "key15": "3yHuzHC3T5V8zM6pGMV7FHZsUMHhWCdsvpYiHm6VZK8m35aNPhokxWg2QtLKgiBWDVZB9GPvbYcWWMbTf7CUpoQy",
  "key16": "3fUGJd9CyqQLhDKhjzT375kzivMSxCXJWg5Na2hLuQ5E4mL8N79EveNUUm3uqtuw4oHc4EekpxFR8EFRLcH9m14c",
  "key17": "64yH8B4abXTSgkLEscc1mAS2n6Gn6tSMy89raw9ge28EsLYsVs9D3KPqpr1rhgRNbgdpi8hGmWih1hoWh3tJoa6a",
  "key18": "45vJiS9e4vnGBXyvFpJxMAH5nhaTEMeMX7iyknXNrKFRDoLUwvpMMSNPcjdLU8NeMmLXyynWW7LLwwTFJY6TkEs6",
  "key19": "2rmttMAnbkskAwYyZovKgrf76Yrb3tFqeUWvygQDK9jQQZofBrcdffybktpjP9xceaBasv8Vtzi8sdaYvZ6at6AZ",
  "key20": "516Me5cymvuZyULNp2YhSHnihDWdhnK3J8gkxLezFvisv9D6MMGHnaDW6MVZGSLGR11uNxmPjG3BwLAJ4sniV6hF",
  "key21": "445c2F3NrwfF2yM1SdE5KEKqhamrUSoftwmE1UXyj41uF972cXQeCgDzDdwyVfuPZjtSCPdgAXcikwR1NGVdmrDU",
  "key22": "59HguzcrjvLVeweDpEF7eksNwmVKscqsvapYqn4k59vYxWwX9SSHU4E6VmpRgN2cvY4FpVVnB9Q1J1hcbg9VpMbg",
  "key23": "5k1MeGWmdUvQm688rvWtc3eKfNQgkwzUgW3pdJaCBs9p9vv7YA8B2w8mLqfieVL6nDz7rtdjZAPDxXaVeBQZhzpK",
  "key24": "4jHNX5MQgE8YeyrHSYDH2tgschSFbQHSLfzj9NiBg8iVmAnTE6duwuTHvVCE83AZ9Qm5pYrLRRkiPsaDQ5ZguYu",
  "key25": "4duX91c3UGmxYcNE9zLsknGbePMc1P1WG2YCGiLHaH2arJb4urtbHS6YQDXWAFe7XLg8ioneqcnNbxBesoynbUmL",
  "key26": "45PW6Ck1XUhGebaYyLtfFUEbo9PjwDTRWjDZf6XFgZLwQMkkPNHsSDkaciFhSEsVdwHBXCg9X63nqRDFQJcJjvUG",
  "key27": "4h6KPJn8wavhkwv35DBuXXMk3W8ZEjPhwp5GSnAoZr4jvccwV9drGF7tzaW1MmhAgfoaBdL9HABQTSDpHSm8R1m5",
  "key28": "4vDohJVYneSMxNjtiJv2LsdHtxP6ZQCequFpPBC4xjd2DP7ZYzzNq8FegeToR2jGJFZTHxydb2z4fQCvQiSiBNKP",
  "key29": "4aLZ3YMkP4SUU12xsFh4NCAiYhLtRnAdHpNkmLYtvm2S2VJnwhkGiFBWBpZC5Jxsy1cd6gV8qHPKsisBVqNntjMe",
  "key30": "3VJ3JQhdrWkqC9F5XeUquFKBFtj9ZQqUdACQHBVQEydUAcLDvfdfStxj6uABYeVtKgSs1BoLk5s6k4qfjosZo9pS",
  "key31": "3NJA6sEBpB5qnQoD21rEGDViC7e692xJsZNwvPBQbnS994UoLgpoek8F2mTC4RMa18ZQ3ed5bMLaamCQRH3wwYCY",
  "key32": "3JfnJrun82ve6oobSVmqRDhDwsW7ckPJ9DtGgNw9qUzSHqh8W2n8UhVDtxpmmuq1Bj2eqnm3HUMzNbKmLSf3DTAv",
  "key33": "4gc5SccZRnfXSB3CgLhb1oZUp1A8FfZAg52i7FV6SUSzrGueJy3ArjvwigkoNiAiSqeHTduoZQ6VaRjW4TN6uUYu",
  "key34": "4FqCfU34JxTrLg77KnAqPqwZJi5mYrRhPTq46MoyZVXa8wBPSYADRD6YU37Dt8KMkf9xQ5vUhLa3VZPSQFEgFyRK",
  "key35": "573uhExaL52xG9s4btQwzwpFZLSyuiZSKRkdBhmcvuEPwGZkNiRcZSnk3rUmCBccxfaVRbYBS1Yszc9fzNcjvZAt",
  "key36": "2Tz3xPTuLZiYt4ViAHkKN3KYm54vhgnjLV5BaotqHChack9ow3mpL3wpyjF5CKc1TfMsVurVADTDRBeqcRJS3c8n",
  "key37": "2Px3T324RTVq5txF96g1JphGczh51gTGYpfY78QVgX5rAvqjd1E2K1PtJtbBPCTv14TTyNFFzv8e7ZQkRwXffyKq",
  "key38": "5MCahXCPrANpgVsX7kNcFiJfY53MSNKJcdN6rkSCnxuBp2nAeShWRyJjYirarfB8CaezYxxu77RFsiyzjgNudNor",
  "key39": "42SttXrQieVvgiYjpZsNLfdTeeiCU53fqymehKkekVDWxZTL37f4vV9vUxxXcZAAKuZxtoni9BRpTg9Urojj86tM",
  "key40": "fbrVtMgfPvWspK14qQyViirfenEFTudQHHHYouaUBYriAjVQbQfpmr8nntCfGvZvckXhCLHLzWPKPPLY1KV41Nf",
  "key41": "2bLUdSQyXpXzBdB4HgMzds1KX7XW38thxw5HHf9HoLXNJRSoQqLh7TvWNaWtGPafqdWHUR6QbYQrzcqVALR7GEsx",
  "key42": "LzJhi3K35A8mYY1mXF1YnSbbJAMFLErnHiq9pY2wt5SeebHLFmKerc4b2Z3WmiRW6V9QwkaZbJELtfVGzuQB21C",
  "key43": "5GrTE9eNq241y42cayAvinSXoA9zySHvfZ5L6nj3HshTWoJ8KZoXHBvmWBgr8SsoWUpA1Qgq8C4RdTsyFgckpJ7L",
  "key44": "2egkdvaWADWfwkr6DiCooFcurW9PzWbg9WWyF8GBNCKgHeHTWY2UtMiBiX1L5rPQNqz6vapAq4VHasEjDczAJQh4",
  "key45": "3GZxQwTEFPC2fTpdpjMRK6Qm7WaDh7mwMqJVyTKd8ocwxXobG2JMZ2N1VUBLrFrypCov1FVXZcVM5GV4VD8PUp5Z"
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
