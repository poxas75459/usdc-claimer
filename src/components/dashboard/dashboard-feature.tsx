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
    "3eFZ5kSy8DbCeS1Xe9DR8onJcVM3GFzUV2Hi2AFhRK2HnoEYDVABtxTLDG7rpSWGKYPRtiJ441EmNo3D433rA34o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kFn3krQx32DXdeUUjZhyqpFXtrpCTGsrQfWTAfRQmEV2QdurCNLUAh876sa1EY7mDaXF5MigPSJpQdX72BC9pZn",
  "key1": "41vqe9XUevCPqWsLCZkRKMEopQKQZz7YiMvGzCuwJSLk7SzHTPjhKqTwV2iygsXfwEmLphX8fmdNd6NxWAP7xCPr",
  "key2": "41raT9PUCsaSyWPTqrG4UmLhGDDsPSxnN6MJCud1WQK9G3xEq1y2PF9mNo93jyui5abv9NJdivtQVH8UTyGzzLZE",
  "key3": "4u82tsAkSuZgA1VV17zAzWwJyGhP5NWTYGSCEb6vcfveR1WXY4rgUcxk4S2VBWGFb7aPRGzmykGVFkdY1a66sSSb",
  "key4": "4UPkPh9WYQntiMbQemJ2anrQH8vjqL2FnRSXWmt7VX7KPTnee1kw6QLNPb6DV1RgVjk41MBekcBSX2WC2vHjGQRF",
  "key5": "3WumVWVwvXXAAr2JBx7jhH7Qh3fDGGGDTXhgcvmEEYZNsKFp2wGBxNoVwgJ5VJvL9sTT5A8DjMz3rYRmHeotnWgg",
  "key6": "2yeBxV4wNKt1soENmiFuq6NL8hSUQTTBeHzPTjm1hdHcQaoJTp8sefijqLCRf611Nph6LeHaAU6SjyUHZmXj11iG",
  "key7": "3gWRuA2cQ5etgKQyKx66q4XWYqKWfEjdYTzu3zqhFMzMfeozo5k4fACrDbd8FxTX4R9CwdXRpftQZF2tUn8hZPdY",
  "key8": "5pu9VZjasJUtmyRBRtVfg1QkSoTHyFjTnNCHMcbt5ti7bd918VgqC8kKcVaJNrc5LrBBQcxtsqFvc4VTxoJoKQLV",
  "key9": "Zg6oWF7LzD6RXkfFCcUpwqD4DdQdyjfArGguNJwJNJWxV7TGVLr3YcGTNKWxj2Y8N5acQ91PTPEU9eKXNJvdRpf",
  "key10": "47WGRH7SrPNnrR46WwRmMe1DsG2qZrahVxL4QPDkGqxXR5LryipG37ymkCivVQC3o6a6eESZfm6GBbk8o5itDjz8",
  "key11": "5Kc7qJEWBzLc8qd9T4oUPqaUHQrNvd2U17KpyapUjWVwLRHXDNnsscVDrLr7VHJ3VBUe1RubD4ZGxhgY3tV4Q9pU",
  "key12": "3afbLkjPKRDtn4tcF7HpXiwEwXPH7ACdzfpPUKQQAFFKX2GCbcpqRFRMPX6hardSAKJUQoVEWuDQgefcvbTRKgx8",
  "key13": "2QJop3Pkgoz6cX7pF4uZKANC48VTbqrNfZdTTkeakiZPQWzG9NUjiUqdcFajgvVKiUSNjq3GGmfaP7tSyzbE6y3p",
  "key14": "23QjaPboRW5gTxkftT1oFcXJp75azJ7kQ1JczuBDdKYDWzgdsbAMfEXvdnJm4J693MqNmS13EmuN3qmtUAg7W9Jh",
  "key15": "23anFHrbFtE2pxdRB8gKP6RYPgqamBXUkZpV25ba84KV25hs1LDkyHqwg2TUg2Vi48g818xoAV652ZAoSXkcyGFN",
  "key16": "uNwjjudPUt9CZHiFjnjqZgx58VEZ8ygShJx5Ho9TRYgTVRjqnpRMy41vMdAbpBFguT5Kf2qyjFFNtXNAqP71gqD",
  "key17": "3meP4qWfMG6VteCH6QgiZU5Lt5RtmwzRmZVoqLKaF53Z2JmLgUqTuLK7VTpbR4Bt7ZGEVAzu9RAo3twUMqJUo2w",
  "key18": "5g8vJXET89jrnzUBK1awkB48xjv22f834tcwrSQWuYByXtNU3XTnQmcExTrZr8371XDP5oZsrJ5UScLmjhkjNowp",
  "key19": "2zucCbM6PnVPLrVvA3VpKBYZPVgWyTiuT72JsbFKmzrRonhhjQTq1dCtz5JMCop5GD8eVX3BcDd7gRtih77koQTe",
  "key20": "3V2ZRmHAjvB4YNSLQFTsdGQAGSww22zY2XN95HTUf6LbNnCLUSe63v4v7dtH7dbMNWHqGEjeVzRiqMrpy26Xwgia",
  "key21": "hvjih9WWjieW4mg9Fe8BUwkKSqGBzLN6oy2ffQm6hCaGEVETytE52S9XGHgbq9fiRB2VmruoPdsRDGLEN1zAb6D",
  "key22": "481tJCmqfgGb2gWVGV54pKzycJb7smA9FC9DmUeLN1VuuEecYsCWK5gzbxu4nxZuavdPF7rjbg3CbKfVBsaSrVyu",
  "key23": "2g1AKYYa2sTDjJMa5FuAtGjzCc7L3NtCwpPxLEWzyAFNPF7UQEuEgJvCjHwzMeCNkMswWUUeRzqYL1HvyTQzEaMq",
  "key24": "4KyTfepc5dJF9Tsn2VGNwo6HYr1mkWqt2o5Tt8dQ3tqhxCLRVqMaPBXLckMCFCrm276A61QB5bBxDoZKfAQqoNfq",
  "key25": "sr9J8gSReCTQgAGeN3wjejVS4VGCmrGsPVp9YtyHbBNM9sZTsabF21ErMELzqwJTd6Gztk7UNS9cJp5zsY5YdwZ",
  "key26": "4xReTfMQ1j8RbiqxWyFLHEJUcyRqpffxP8hRMJoD5L4HHvtWwVCPLnr8oUqgBZtfHr4jCaaK18XBD1U1qfVLaYQB",
  "key27": "8DoYmKmwM1WbrCJ6wU5sq2vv5N2cTy99p7d9UBBJyKivgicxDedJVqZgtqRZJ3JFM7ZJJj8ZFfCZyF1bq9woZ42",
  "key28": "3HQAtPXCaQ5R5LVnbWVuq2FoJBay8oS5vu7BVs214HaY5V7M1URH2vVmUn9qrQTHwHJvwa8Hf2CsrDKGCAtEJ4wc",
  "key29": "4N1k5U7QFPvhsNBHc1ar6FEy17sN4hPPGBDiuPQHjgoY5WVxizT8Xh7oS7HK93JoMZxUeN6Tfv6dz4eKF9A9AkjU",
  "key30": "2NcCyCkH3MH24azrWfz9azBnt6AjGVsFokeQVvVCyNQUC5fF7Z8fTPKFK5DqLqdrWW51PYQuF9LUEuSPpKKoPppw",
  "key31": "4141kXjaSrQf4pkvnhELoFqNyMwqV9JS2mGNRCM69ka26jTbnMz5ZpkoKWzRi7iQucmMniRamauWMtmiHaPDA6UU",
  "key32": "56afRDe5AmPQDmx8Aieb2rfKghdJz8iZHJ7zRcmtr3AM72sq5qGyiydFNig4RpLTDaCTGwZoqPqVfx5h6ZfotBbc",
  "key33": "66PX5uscT9g3DwxGu443ikuWGsxwQufkuQLjcsMP1XSBRpjU1xdkmBWEJ6vz4v8Sh1L3eA9AgDRJ2oU9sYtUjinr",
  "key34": "3ZPqy9JVNFpRRRSFLGtw7Gd2ibAYRYuh7KFApNcp8GbyD2rpZqszuxVpwopuGxxCk2ae83zeQNAVX7F3C2Ppo2CY",
  "key35": "2jbDVXrkRaZfZtJZXv8ekURcdsFRGdsBEYjszyg8UVkUrdXLZPhpeEKmgBjBtjk2gTUKXL83MfffF92w886Q24vk",
  "key36": "4g6QwQ496e8NpbQcGAk147zwzsbp8Adgv5WVPr5qyPgN1nLEipcQCwtg6NF2AYHapagWJhg3VQRdrd7zy4NEAmvm",
  "key37": "5HUYomAyeW3W1Z8aTmLEbes2Ld3xp9vNyven1aEi423v59Xie6ap9VBVgp2fDX4dXNEzCqXR176kv1VJaPieHMoo",
  "key38": "57WZ78f7kGhjk7fHhD2uFALShdyCwpsdZfBNdXT3d6McYvu4GkaPLy1K9UzUG3Jyi1SurkQq8EN9rZswoULCQiWW",
  "key39": "2FLfnK32rTYkZh75KAbuLLfoxHyN4TUJsmmgxmd9ieYSBfRzD2nLNhDWvgmuyDoFkRTUtrqKnzkwHdrE5RooFELm",
  "key40": "2MgUz2mD5nK7Ryx3NJDeF4jjsuqYBgQtv4t81YSPshv7yajJeyUJnh6b3YqNyiRv9mhUR7vsqqY92bX35ujevoi8",
  "key41": "2GhCFNDqc1YwW1awnhn1cH2AFVKMcFPpTQS2wtMi1ZN24RCiy8VwiUrhebGsGJJyE1XUK7Fgn1ijYBLVdkf2dTHV"
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
