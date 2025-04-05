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
    "q7EfsAxTgcZ1BzeYzgScGukNPTi83BegmTmVx1buMZCbprp5c5TYd15M14dzf3oEYuQ9TrzNv25KnkxKtcbK7TY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qMi6jdGdKGcAgVkm9MAZz9xxPjgYHSGQR3BfQF5Cb3esHmni1VyHHwKn3aFH5YKDHPRd21YBMLsggyvEKHU1MKx",
  "key1": "4qhsjcVDMAaiw62vhgj3DnhkfzgfD5u8bwHbHbA7V94c5cw4FRFCq2YpMjdcBpK6rDnoPpaRTWi3Tg4CLsjrSbBJ",
  "key2": "5HncaoJJZLzTKuepHiPQwruR6hLnfJj8ZQcjU6Cv1VCuKVYzMeqToisF2BAPzZn5W6H3RjnbAySHWBpyDpDtq9bN",
  "key3": "4BS1UjxxqT3RpAnyLhtfvaj4khTdsToWnCHHVdZYPVeD8iFBPaV9GhX7QBvf6rDtCAsghs9LHrUuaXX9YxLX9MS2",
  "key4": "4dsBxQ7LkfejyNaGsyN8RUUXHjF4Zus8BX2BmmzdxfupDuaRgiS7CbGnuxZCP2WmYjzNb4FYuBUszRtfy4qtrgyM",
  "key5": "YKoZ69VEQG3ut1BQ8FZvyunEJsTmyeWpYEVC8fV8RHW9kzNLwi5ubiRXvtoB6ZXFWKVBn4vRoHdX9phCSJRfny5",
  "key6": "5mpdFyp9wxDMw4eZ1EzpQxfGfaPfn4iSMrTjfrgsr9ejDL1y2XFV9TEwCrG1Zbyk6kwgz8pgwUiyBHPyRQGo46Fd",
  "key7": "3Ckcr1xuiwiAHeLidxWc5zPKtEiVkYZt6eMQk4gGfMCBucB74jXKLpACh94jURioGrT2agD6NtNar94cmsq8CASB",
  "key8": "rXUJDTGXzA774i1TCvgvVz695K9uQPmntFCK1j9kabEaQ2QhaMpmZsctUfGQ6NZvhunjFUSpLzyaKWySLezaYcc",
  "key9": "4top9bJ8Y4jtFfQCWzTiHQ1bBXgPrkJQs2hhQtVdeVt7xB2mH5LDhgQh7qcUuukLeYCpQJHGTBr1AEAgpqCEEUoo",
  "key10": "5KLRK2PeDApLt4KGeD8ykgiP8yoRJMRRCpxHXeT8S2JEocwcGj5yb91wjKC14jqCxGEQ4GD4wD3yBpEXtSvv2XTv",
  "key11": "4zEHRDYfJiNarGuNfVWjx3FzpfHwDoYKC2YVeLYrFdbDFtdXPxxAKDFYUqgRPqZvRqAEBq4cVcYqo1ifcwne6JuS",
  "key12": "2XV7aDTRTTTgBqCaMox8a9piqVRbn8aBrhbjkYesqkkpkAoSqcXxGXqCeZc5Ly6Msoqisq96iUHsUTwXRcwfNFVk",
  "key13": "2254tpHwwXUE1i5aGNHFsHjpk4umHFCgcTK3bEcpgbZvE6Nm5dNcwFvqJFvfuLentV6haZ8u48aSMJza1dMNBh5W",
  "key14": "2G4nFZ2Lir9q9DCAa5TApSHBgDjHo2riZRLfNA1HezMkCAB3VZmw5wxg1XANgqHKRVHh9YuT4SUzsTvjguFyeTfN",
  "key15": "3X7ofBQphppBdkFjVewXcW7WZM489h6acKJDZyV5ZuXTatMFRrWMiqZxsma6CMiN3R9MmChQ3f2nu8jo1DyooiTJ",
  "key16": "4WgJDaUkcfjv4HBnbFEJA6dvveF7NKiHYKr6V3wsACb2PV6f9kPJh51iCLFJTwJ3QzS5SAoZmDvW46VZNVzHdyoX",
  "key17": "ffzm9LUyE5r5SxZPqSAd9fB19HCiobV4AWk2LnVJFGfHDTiM1xTS2zP5gBEYcgDLGJBvzzj8i9JtjNX2YnRe45o",
  "key18": "2u6eUnMW2stk6Kmkr4qiKgGEk3yb73VFj4SM385snkX3U4heYhGgdouPzWdDHmg1dhRMvCe2hrKeAT22Sm1rrCGY",
  "key19": "4HNvCjtWmMPSDzRhDDCqviAZoXrYAUwd4ekhK6Rpt8R1VSNk4jzE82Eka3mqqWydaPJCstsgquZZjX7HM3AJdRow",
  "key20": "4oLrKappHhVGnEUGwS8uDKj3gMmhVcxC8RpHA7nrG3q22xxRCippV5VFEQhhza6imiRRGrDp1u4opEUmjHN74FkU",
  "key21": "4Hxdo9Dep3pW3YhtaKkXP8JWApmjSFJmXKMPgbaUF9Y1h73t72YiRtwbWBgnqkhGtjr9xXbLVH6B6R9L3f2FuAbh",
  "key22": "5wVW9baRQrWSELvne2E6EaqZxUfxq7mkrASiAQC1MqMFRxmswfqRAHAAgBcBYdWC3kmViQoqmuBtXDQe5dYQ1SAv",
  "key23": "dm8mpmwneDrgD3s9aTx3ADzyBvdph386dDmVWDSCZJhoEp6FBwH5FnLMTdFcgQoPXvyyZynsSAzMhLa7ga8cHrn",
  "key24": "3xvxPYYpzRy7sGARbB24KbB2xKTFBbcBWAYi9yLCC2oHyWWw1tMw2cmJt6ARGRQX3Kx9ZiSbbwASB7RjTYBCcNK2",
  "key25": "5bM3zbG1Shg6Ary9iKQykee15fYYKbWQJG8Nttwp7SzsLJbuftpsvHkX7ohSSDgKUdCRbKfTK3aF7AAEPEBCziib",
  "key26": "4ri5aBRf2uhQsaD1QLALq96K5F1DTs6edsdejfRVEvLe7HRZRjAd15fQciNgWb2E5SfGLpUn9Yy6JhiKhqg4mn5",
  "key27": "3HGAZhnDvtRVTD3gXnX6jUiqu1nM3N2qZg6LuoQCBnbjbNPUrahV6pxxikiT3eG3q6mfDssiJcBwn6Udn3U7ZzPk",
  "key28": "5rQKLg1P4RWXBpomVXTTzYuF2xsHc54jaBbEyuYmvmkqNM4d8BEzzmnznwio85rNMLJLmT62r9K12f6ptdNugsLF",
  "key29": "3EJ2u1EFLSmNnSUdapVVjXaCnuBhpXreMcLgwW3GATh5QK18ii8yUgez3XEGrKz6hNmCTeJR4Q65ffmj3JBn7R8G",
  "key30": "5kxrdkP31qVqqagsfNfukzy8hxmAJEsUE5aRdnxWmPGi57RCGsoxkLEJrsZXKusU3g7MQmQfTTAuh9S7DBMdC8mc",
  "key31": "3CWX77mJdvKT8wnQu7PCBCUAmQqbLJ4crbFEpDpxUFReLuRDHeNmcZSPH3eDpEEHot8GaJRK9g324MAqbwecMVqN",
  "key32": "2XZTnnoTcuHRpJm1h4mzvoSr1E6zsph2PA3nVaq4qtVt6VPYYwj3YKkGGMUUMBidNHYyKLBmdsiUdksowDRVz3kQ",
  "key33": "3reJChM4HGj2pYMwe9Sa4WvucJCoHr8ZFRUrPrLzEviTLRpwHYViWSARczak1B6kE5zR4HZAMfEEP1mfPsH8WaQn",
  "key34": "2AdpopcXtqeyzobNYbC8cGqfFKR46ZxCNpvxXFYyQUVjK5Vb7r6n9BAaeeoSKq9U9MPY1mpYw3rpfHyNDaGjukM7",
  "key35": "2QSivNgA3mh8K8uruVCzRQHheqESPNajPfRS6J1rcUjNaiaq6daEM8FehfgnpZFwjCDrmWEBALv8RGi2uC1NSoFG",
  "key36": "35NsCDwddT3GjTzqzGHxkdjVwbwY9RjaCJKyY8xpBrwWHHfRXHkxUGtjuaepyfmd3erxjHYTE6cxJ9Rb2g1X7b2S",
  "key37": "rQMHpfhKCXZzWEiB18GkpH4zVH1vepuix4mMyn2iGyz8Za12hKwVjqhRPdSFHoFu8eMuRCChCxZ8pZ6hDk1zbN9",
  "key38": "57YfNnhRCEJYpMMbww7hD8vacYTa5Gb8YWtcWVxBAN2kkTnmgpJaMFq8x82tAeSyC9GPBUXKX5rn9TA2j2hGCwL",
  "key39": "5q42PJHVhyjexSPQ7vEEYBA8MTXF8DWWu6tRtDkq9qbG9tqEiJHoUL3H8FgshKdKHGjf51zhgmhQ86RKLiqkcJ6u",
  "key40": "4eRvpoE3VAgKSRVuTPh39GmwyTi4MihbSHdF4MSTXsG6yniWDRApngDbxWBdRDAKfXcTzAtaWWnnJ2VfXHXwWo7a"
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
