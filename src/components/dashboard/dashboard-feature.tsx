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
    "35X2VvGTU3vcwLSLPGhRNJsDmbstGqYTPonQqWrM7qZXFyyX4uQS2ikCkM2bhNt4whKJZgmaZptaTgppeNsi9DTi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21rgiFVroJbM9J5VFYRtPpeagYgivHjT4tVfCc5D2k3tYRjGuLhBTqvy63DVZ28Qk9CCppFHoLJYZodo7hrydkZs",
  "key1": "5YRCcRv8xVXMCCwVtVsCr8qEw5PsqezaERjULenU4LxW5zwWM1oAe4XkkQ2TNjsdho3Hc9oEALZzMEvpuYAaDpHu",
  "key2": "5nXvPHEEqEUFMjiJNQFFoEVFp3yjdpfQ5cf7aJz3K6g652oxKhdXopNFfUcT1uWKRXEBe9oYwBKaLzEB9PqyWjN",
  "key3": "UdQBMFkNttuHDdZWTFoZhchcSdLv2CHWhpX8Vj5Hyo9f2MpzoURqWchbA235fywqZD5NeutqXt6bwr1CTa1ZG1K",
  "key4": "d2xuEvYdebKLiffeUVPL43Cu9uZdCAveka8Lx5Yf6JBrFqjAkMzh7adbgasGymCxLhsRhfsgYLSfN3aCLPskpvb",
  "key5": "5r1zK7AbvEg1GVwT8h5jxamtvFDqBgoJrzzy4kRXKPRYEVGyBhJTtUtBaUBKY558HN1fpet8hMFvye9rMiWyxSVE",
  "key6": "4r1vomEzKH9NG5CHQBPQZG9FqiyXgnYv4LuYdfVb4heiYCeK8HJEGPhb6NcfxNgVsSPM9Q8cLqovz98wLjtJSu4H",
  "key7": "4cbngCpoNmjhJQXf3LPD2hE38GprheNvrerynDU8gphZHSkYxhWgmoMCaGuoiVCzZZWJnJYgf8XW9e8aEPoVjRBc",
  "key8": "2Dqg9omuJZBQ6PViuadvRkvkn7scqTqFPWEgPWUwPoHvRGqiDErg5eaGmpPysgR1qqSvn5tVJhUDepgUTDaCZCHr",
  "key9": "vDgSDVFNxMLgtYwKVwFWdUwCk5ePGwQqCUo3TCyX3ixkduJ4dfhGSXpUHkYiHouy4yBmYzvwhfNjjocFf7SKYNo",
  "key10": "28rkTqw5grkeoknHwoPqr75Rft4D69x6RrAuQWjBh3wHSPPCWWod74HqmsekEbpvsiH5SZcFoH9hCRLCeEw5b6qV",
  "key11": "3XaKSD4DHVKog24WdADaPGDt4cRJDT3nAUd6BL8eCdnWdiFVHhTapXreL9Zchwbu97UjvmtKyk15NcZKd3vkG8Aa",
  "key12": "3yVV6tegKzHMUC3xwQvrdGFLusbY1PRvZs1uVsH1YxBs51A844RwPBWXhW5J3t5RNVzg3EdKKcn9U3YrNHcoyNSH",
  "key13": "2wU6u56yARo1Gyai6RKRg2yueDtD9Q8Y9uMKYgeVjXLjvdxKa3cE1XFtRf8REw3WT8Si2H79Dsa2iCiNBpS3fY9o",
  "key14": "5py1FnWp4WW3KpvdLBpn7tHkBXgkuoca7H8i5PAZR8vSyhBtm9HFnLC5S2JjKUtJrdk4UDDW7YLqZUg8UMxZT1JM",
  "key15": "4xbwGbVcitpQ7BqZpdxnEJY4X1MMTdevebCjs2DaTUtCXPf37CBjxuUbsNrMia1pdyoyT9ax2g3T7aASuDfQK4hg",
  "key16": "hQyQB9SiGoQqA9aQfofHFV3fzNDv3Mjah7kPDBr93nkqMiSw95A97WpkXJ5tMzfxfobPPxs6LTQJtADry49ZVTP",
  "key17": "3EPvmiLzkNfzLYWVTHRnQWwDVUzq5ZWASFTM6Kp7MtNNbDfPY9WXVHbM8PuhmGFChayx4gsnJ48DCqjcZuKTHffd",
  "key18": "6583DTcKAFz5PBQRCiGTFH8cN7khfqvCxguV5zXnPhBGdtsH5Kk8fWyim9k9DsUispR376VVRVyJFC3kS47HR4bJ",
  "key19": "3rp4GdKAW5qRB2ng1Fhe6N9PftrvrWdnYFZsUTBwuAhr3V2PNnEzdgmVwGFh9uyVXjbF3sJ2q3jrNQUAJJA4t7FE",
  "key20": "5rtRvqLw6BG2dYDVx1PojQtPFSCY3apQ2G2QZmTcKr83F6c7a8Nct1DaW7iJqvcLRUhPNbL6fdRFPgzts481aLWc",
  "key21": "4HCubMxMCDaGXAhPtWcgqMr8LhcxA37FPHTYt6wK47oiYxfSjqRxH9Da7yELc9MVWyvhFsX5f7t4vEe3L4dUzW1P",
  "key22": "3t5wvmNYYsdqdVQhHirzyzRiRaTqsyJcZMoJ3KdnEG9vZSbxr6Ms9SFRYbxF9B8D5qMnVCVBotcB3jFjmVjUxgK7",
  "key23": "4vUTTscvrz6hPFrRmTup2udhUmNwW56KaSiUYwoK6ZaScqQzS1G439KfyM7aw2fwfPW26gQZW5zHBsuTZFVsAUNG",
  "key24": "5xYn1xHnEGSd6LjNxmE8ySTXgVifCHMtuNvnxeTFgwu7oebfni1mjzPUujohjCRDgt9rVQpbK2VT8nDZcBbG8sok",
  "key25": "4C2P1R3E3LpMyRHSpuSF4aGM6ti2ujHM6irxZYSpx1F4CSvwtBpDHmDitGe2jgNaRqm2snYwcEPKtawPFW3u7o8z",
  "key26": "285NTgrwhLNEEvMpwtUBfo7inds1GP9rGM4QMZv3iWDWXtZuP11KwMbHomdbkaTv5R6sAy9sbBGx2sgS867bQQTC",
  "key27": "5ihWoXeSXcBhL8W3pLXmC1fUzw3W1FwVo4f6ZfEPFFeuewefPKnaBr2P9PFwcKSNuE8a2prGgJ7mCeyQNZpquaoD",
  "key28": "3AjJhUg4byRDoUiDGMrSco97dedaL7dC5JEAt5kMm1NU7r7Z9MoVpuYY6pSNfReyz5KgRVBd1wbyGTDNFK8XS2nE",
  "key29": "56y8W6MbD83kRKxSqsJkGYewEMVPHvcvzFw7b5izVok7VbCs4Ups6vqPmnGDJYzZXD2aaKu6tgZ2hqKqtkW2A33h",
  "key30": "4wuEVV7PmeeDoBLBaXp4PdufbeFEpHgX5p9KSMmXptjYpfNGAFHahAbGd7bASo92Sma4zbK2XGNuedSokiLfatST",
  "key31": "43d9dL7Z1JGbiRtkwzXyk2Uq4urwm4Fn8Pf2LVCjKBTT3dZkQKMFczUwz2mBCFfFMZxc9y9sq1V3tLRiHzhVGXrk",
  "key32": "5iQkzabDcvMBXVEQn3VEg5h2bsRJib3t8cjrmYDmzuXuTEQnEJC7oqgPfMuotVTFaAU8Qn2A6YNoQt4CXAp2p9Yn",
  "key33": "1aR3pAxmzRH5kAgJM4jqskxPj2hRhxqonmZBqFJ9qSpEPX9gGqUJh77xmZe4K8vaZkVqknhLas2KQRR4aZizKGB",
  "key34": "4CpvnTDUVH4TdP1gKhrZLqtWfPoo4Ju26Hk3P6Ea9jAXYzy7XAGf9NVLeVCY4pzeeF95o7DF9tfAJ4A1SE49biBU",
  "key35": "hzBtLu5BqdDPPuPEhCXikEvECrU9TpvHTqXicTsDTU5DhyAkbvj6YqNTUeegbBwYfnPXWiDYrBZoRgnLoa5g4c8",
  "key36": "51BC8pa6vhsCnvTu1xzPe9oJamJ6kJMSyMsjLvUU9wZQ4pk699xMpECQdZAMe8y9zJAYcH6Y4i6Y2zL5FYrjuZ18",
  "key37": "5aGZyfUqH4JF2TLmhy7Bo19gf6rjo4vGimBLbd5gmbeokk852coxwfouX2Gv1yCeaWZb9SqGysiwH3zizbNRQia6",
  "key38": "5XjbBP7V7nPeUykHT9wy1n1JnSKjjGV5Qj4nnCjiLyiTqQJWbt8CxRuyw7c6DwmnSqcQHq2fW7W5MPbjTRMSkEVZ",
  "key39": "3ygcHqeKd2MDoXh6gijaQNFWZsZ7mH74CuV9xkX3VuAZDuVhG4QjMEp2g78dJ1qgYJeQ1Fy57bSSbfeExJcsPoph",
  "key40": "599eSTrDR7tHWrKQk1T4A2PjxMkP3Y34iAmMxvi3JP8ZNJhjD8gdvVM7YeCcjjozHYBZDe1t4wg4n6FAnR5KkhGM",
  "key41": "4L6TF6PuK33CW9a48pzb3TFTvTsMf11Fy7NZVPxHpnf2HQrz2FnyGQ82YpPPfXaj1ggMui3KTTZdG1i4YxBmRLyM",
  "key42": "43HPgZZ6QTeosfBHbiYJjbJF3hoxDvqaFkzroCERjyrsprLbzkH28WwoG2GHgtxiANR5hV6FqpZKZ3EFjffB1F1K",
  "key43": "4gVhebdStvAAHR87B88jbm8QTnuZpdvpPYQy2r23nRipwMyKv6e78J8Dh4GELfk5nWFZQ5DGmmwXGCvmdsTqmfG4",
  "key44": "5isRSATzJarC7DBDapczvJQu7C4oriCQSxyhzLLWkbKLFtcbANZeNoFpfDMiFkR17MpwpQ7PHbw65kmFjwdDojjm",
  "key45": "iJW5pfVfrsVmUsAnzM1wmhLN5hTUTuQPTuMQ9zqny2ptyEEkiDiXThrcoz3zZpQhmKZKTMs8jMeToRjgupzvbtw",
  "key46": "67XBo65X4Vu8CVuGgHVBbs5jNako6C836vm5sp9Sx7ndFZx5rLJrs6Fbsaajcz7cfgLua7xHuY9yKZ1dabWNWd4e",
  "key47": "vKTCY7XNvVHdxwqoXSJUhZAoAhCwWb2duXaypETjZWdFvwcFv4antSraYsCvMtDkPmstHU41PALwW6FoGL17htQ"
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
