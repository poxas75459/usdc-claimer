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
    "5zMCZRUc2uEtoACn1cp9nzhUtAdntYSw5uUCzs12HH288QvVxxGj94be8YAdGRenWUtj3Sw4QJ3QcKQfr4UP3rQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mxoZNsvMbd3uM6Wz7n8GwQ3Qk2nKey2fCdDHFGDV2c38Dbt28N9ZFuXXmLXVdsFpUv6aVkGJBJxKMWEVkvPmifU",
  "key1": "5ATrYDxaYS81Sko7XRTNA5sB5DxEcjbSKmcCF1hRfWbd8xDZijSv15FpLWiKqVb9kFSSujBHymfhxU6SAWN5vHyY",
  "key2": "5b8CyJwwF6FNSX35DLCjEajBn2jcA9BJTomCj1syd7DF6MXhsVwA8NAiMEtUoUtghpkd3gFcvEMmZhzYr3ssoHMw",
  "key3": "3tQFG2UL1dGdq9VcQBbP8Wf8MVPQppg38tpRCpRca91LgQch3XEpB8rn5GrMNYnpf5ZqR1vm1eKLFcujY82JqC3b",
  "key4": "3zX5bYLX1HYTtT4VxaPqCCBzuEuwzyhaBcEtRZZ38aLG9jR8bqeb25H8yNZg9QHLdCmtx7fzzZcV4LovqXz3D5xg",
  "key5": "3duJgiRnqd8kYeAApJVsP3bvHm29XszQEv3PrSUBikw3uALGor6PxrwipPSMFsihPgtbFLxDHjJtjyoTsiw9g9ue",
  "key6": "2USXrNcoziPdokQpiF1RnYPMfjVfK1kjxZr8LLTkoxjKnWjVAaWbRvpjd92ToKaerESt9bFPgceMoTRCvnCQaGhh",
  "key7": "66gcxuG3cwBqHkFEB1ZmSZGNWEkkRqpsEKwo5tCuszLvRtDeVNzCZfMEmiVU75WEuJnmDwCPpiMehzrieoSGsyvV",
  "key8": "4k1o8nbBCxxmyRmnspsgUiCQrsxMYNJa9o1wryw7mxH6JiuHfGNqpugNKJvHGEeSgX38aoTMeC9nopyX4RypV2U2",
  "key9": "2pxwXfguiNvAwAG7VzzXFfWQnbMQuGBjj9uwjn5toFj3edPmCm5CV4nunkWvq3SWUeuPYcJFqugyqro8a1V1cNsL",
  "key10": "5zTEPxJhNQnMJ61Gyi8U6BZLXgZbT6bgNy1MnquBC6NLLcTrH8K1zAKSgEXERn4rXz1U73qPXgJ53S7Ug1VFQZrk",
  "key11": "4hiVBpD1qUf3NKnKhCUY4zm134UtnscpDCu5RcaFixbxDLdjtaW4zxLPVyZ3fp4GeCw4iqCWux4zCaWBAw4Bthii",
  "key12": "5UnFFAigTLFVKp1hLXBfLTiV43LCHsWYvV9JAMGbpBGFTAypVdmkT4g15n9kGmQP724PkGcMCqkw3BAHTb2yEJ2L",
  "key13": "3j4FcqSVScpo9CaXUTTMnqToG84cQuC4WYRcnVJyxfChmzUbBQSGJMiL7kEPwun4wGGR5BzPtRwN5LXYAWbFswZH",
  "key14": "4tiHjAf8UjzZiRaHdtsyb7t5aBmo9U9r63YxpdXAUz9pX6r729pDmrmBz2mH2FxxzQhSWyQg4VqATak2cwK9qa3u",
  "key15": "5e71LfKykNXWKmu4gFnv8HLf7KqvVsoe3XZfovXPNcKi7bdK115DDYTqL79MubYFYPUw8ggFS3DhfKJs1MSKbE7p",
  "key16": "5KsWD5C8XfKtq9vMVCPHJouBSJcAHXNjVrFdQCYgZkGbADCZfhYDKfuYhA2wvFNxaQ15new15s3xwxeVdHPV2UgS",
  "key17": "64MzmLGTAS29qXPSytJnAfHPFZrdkeqcfQCrgvb3QJyc2wfMYmZfPKuAhe2HtuU1jiQLpNEVkFyyUmJuiCeHADL3",
  "key18": "T4GJYwEUErywQdwRX4GsK7dpgB5KhYa7AFLy9th6QCxECsSCJai1j9ZRJZ4HmqYiS6eCpPJ5x2K25dg8jWyB6VV",
  "key19": "2KSyMBNaV3JUp9Mq5NqePRhbKYBS1v2FtkxHp1HqsoZyXR2LHaUdWB6RPyTpDFELnqqYvrEjNiPJphRpQLhoirTF",
  "key20": "3NXLGuMGxshbHigU9w5forurQR5PfzuuXVWtQdwBt4k3fECq5rXXdQVJbyNYUFe7EHqKqzyyejCWE2izh3zK9Z9k",
  "key21": "9nS8MuHV2XKyPCA1NqGf88Kc9ia9tSC7AWor4Ht7EAAhHC9gxWBF4cu6mP7orPQkLvLeW1ocjJpWMGfRaeSckHq",
  "key22": "iHhUWP2qzsgQzMSGHvdEz6fFZVPbf4JS5rpc7yPLKVtwJ79aKR7BG9ymf7xmtWrALUigWjdknkPkpTCYzXaZ9ws",
  "key23": "4kisQrRNN3kAMMU1pS9vVFLSbzEuAqRLDZqCqw4vV8C9yuM479NFNSxUFELRAbQuLTVnYKBz96YzWgd7z98RHkcy",
  "key24": "26LXu65vv5KEK1sUJGemtXi9mRcR4vJbnDMCJyyH3CR8C9TLsZCSqA6Wtaafyn1rL4qaAmeN4LB7w5P9aoRvoZmh",
  "key25": "Ffqf8zaTn4ePFG4v3oCziQonQueJpcajdwN2b6VDxzQLcT8SJw7xVihgQBzSRMD7Qeow6MscJkXkb9hbZkHeRkt",
  "key26": "3vgmVGou9tG6PMQ1zUvbWQZBofwLon2WQpYmgMqusBio4N24XPyUJRE8spg2pgadtUt3ys3gYnBeKhafof6UNCGV",
  "key27": "2d7A79u28QHhqyYRGJBrQdgioAxmdRF9GgSWoTTAe6nUMprMmMdMJpu11gjgvT9pmuyxxJT4qUWYYkUtvjqgVKVM",
  "key28": "h7M1PMoqPBdBngwPBxsRWhAYhKo8gfXDXH4oNAPvMzoq8ovXDh7edozcD3rpKCK4BaT5RjXvKcM9KYSVeV7VxT5",
  "key29": "taCB6jukWyZ7h2cUq5Miq15QyBwGZBoqhpoRhEqhZCyLa9H5oTLuYeQKRSFE2RY6Z1WC3qtfvC4dgmrVhwUPet8",
  "key30": "57zfnsDApymLNEJvkuLjpqpfeKvA8CoCj9oEoZqrJsKhfrsZgZ2hp7W8nTHtJTgA7qVQ8Y7mQHN7C3brnfR1eD1V",
  "key31": "4xgfonFLUbaHEmKhb8dyjTJkZMpL5Er1eAbscU6X8hYuxfVYfZpaMjygweUX5r1SZNR8zbNdhvCo6zLjbepLyCi6",
  "key32": "41sFy3NYFxqCet8MhGeWT2nxULd44rjNxpY9o42APiJaQCF2GSRAFozQcExevgS6CfqQJ7sfQboGVBpC431AuKgS",
  "key33": "4kKfEvZbNPGvW7qSy2WmXAh2MMaSfPameM99bHYSuBLvq1smVMiXJa2K7NZrzWTX11v1TStDLfxV5knyoYQK8Qf1",
  "key34": "5RM4Aiod4STm7HNuxeKuC9Si1g38JuzUCKRNSUNbGMgdVZ6MinsdGZWPt4wBE9MCdx4zQSvs1Kt2Y4yHt1ex5MWR",
  "key35": "5KmafUEuSLGKZA4d4J5wTbopgE5xRZ7a5bwZV6PTrwNABiTRGZpFieZNH6ao7Ld3KrZxCoGNX5q6r5BRTLoighSW",
  "key36": "4CHJeGvRvAY9pfEYh4Hp9mHyA83DBTi3E1ysHguszKHbJqBYhwDaVmgD3747PvMrAEAgLog8iceLqLDP2BXECkuT",
  "key37": "v6aW4LXvG6mnpFb1GDdRMehydWd7CGwtVcfnpoAMLAzjAF8greZGrdTjAgfzVuhHefJs8yR2tbtDZd6WpuF6Asm",
  "key38": "GXJ3fWL8vkXQ5YrLiW8MGk6vbToq8JREL68Cd6LvPEtcFpkUY58MzThvYiEhqeojhWVSVQA9ShjytiLHWgC7QyZ",
  "key39": "5y3mUzjW5tzB9UkYCG5eFLdgPLDztddibK6VtNkoFGPGjcBsD7PWCwk5BHSqPJMgsrHgsfXppMndMV3bS49Boxcp",
  "key40": "3SJ4WfSKnm4GQHD5cbeAREYqB5m47zX6S32y528L2FRW8rXsZKAJzsHYaALw5TuqUPd8Kys87F3vymnKDEQuFcK",
  "key41": "23ieur7wisbeiMGqDYh34RYnxAJjA4QmMY7UegTruzzwKqHZfMqTC7L2SGuWok8Ac9ALMCLTBdWLNMFBRK2Gi4ZZ",
  "key42": "5owij3WQBPz1GWAbvCvbSfw6WY3xUwMnK8HPPfkQge9CwzMUp7sy99s6HWoAU8YAJ3agR1gjh1UPwCGT1VKYKSjM",
  "key43": "QePNaw6oG56GcekD7Keki7QoDE3F8uB2812Ky4ouS4ZDVsc3RNe8Nz6LoCUHh3J6UeTuvbKQuC7Kmt8HNUXWKvk",
  "key44": "5heKSQx4zTNfpd8u2kAAdz8kArK3GQ7PmxpDVtk3SjEbwmy8LXttz3NhrvdxBhAKTTiDPXTfi37Ui34aurEsJzuY",
  "key45": "3kUQXntGjiuGUw26b9Mh6PfotLzCf47UZ1pq8B4UofFhe86aVfcfVyGWetTDwJNM3iBYUmXgBGp9NvMPvpdAB813"
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
