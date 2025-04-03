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
    "2dDPkw5t8amr4UtZhW7VQupfXEFyM9pazit95VzHqpd9VRqNX33VWxLJ46ynubR5HCcLeVna7tDYEiJZYy95ud3N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xD2HJQE4vbide63aGpzC1c8wRHTPWfotiiDZFLgz1sWGY3cqxdFC2aBL1iN5CuhCKC4pcnqwpUrn6UgazMcV69g",
  "key1": "3yBvVZDZG6ku6mzcATnYYsfcMky2we8bJAwvKvPqwTAKH1sdaBwnSSvEcUjMYhucRi7C3JkNWjBcMcrGHQhaxPmh",
  "key2": "g9Q1uMbMzSM8DQNdjseWzw9dmU4keEZxEfsYbJktqdE6wwuGpnDCRRwABfwz9aozY7nNTr9n2zE69zPwNCRnE7x",
  "key3": "36zr8bU3o5USAAu9pBY1S7AyFv6pFP2BxXLYDbkjKVKZjxNi7a636mHUBh9E4YAoYGN2Tv6XFKAvKLuWRUm28jr5",
  "key4": "4uJXfafmXwHAzqRTWp6gbyEUAEdro5hTKqkKmuM4pFarMLpEiMywzgiKGfBs7EyqJrPmuq3Wt3U77k1EU9EyiMFN",
  "key5": "5N64EVurLuN3STH3DEvZ6wHHrMEaBwgnbSYtZQv3MpmhdsM3oRp5YQTczykAWedmFNwEzxu1k7C8QfwiUSzQ4jy8",
  "key6": "5NqoSApLXMTatSerb9FRoNPRtDUce83oQTeaShb27P5GakEkgbMi96MRfW2NwPLgM83BmxMunQXNurNgFYyWypMA",
  "key7": "4DT41GWNG3uh7TwEuoUJAvA4usxETqcRsP3FAme9DxVp9DdP2WwHVDh6CvcSa2kQn4KPhW1TswrdkXgM2EH5b28N",
  "key8": "M53YsdJqVXTnPkpiPV7tosTaTe59ixXqtzkAMeQHtbET89iQ9zr4nBdzS1CDDeJHGbCWbxjj4WogAzwSMpvadJk",
  "key9": "26DqBAfnmqHAT17uXVfGMZQViHmugnSy1a7SdvJ3YR9yYRZpLGzBEiX5Fwj5kbMTPBJgFnGwozufqPrsYLCL9TX1",
  "key10": "o34QQFrYajL5nVak1GBPsv3tBweuBcDbFvzxzMzB1SDW3XShWAFa45sndAS9tZg11RGymrgZX1iGrTFDqPdJQCw",
  "key11": "2ah6wE3K3tdor3e2TZRq1BcZfFvfPP3rwN7ncvhAP9QRxWuCbYctARAw4zfjLNrJBdysCZ8ocbvGVq4D9vSfbDHy",
  "key12": "ckhcmgRisHhdWjEJBmjYYkwuxTA77HnzDqsizikWMx1XbW5FTLKCm4tVT3wwF6CVAv75LPNcKRM98zwnN8orzyj",
  "key13": "5qHBE3mriJzRkpQ43xpVHuMh8zGHUxijbBCpjZM5LMn8kDbMGtkvvwtnh4pUBxfPn2ngeyaGVf6jJTJEBviDyfLA",
  "key14": "3u9ZtpmJXam46HNnxWP87YBJEq9hfBaqCX5JMRgwgxAxpsBvHDqUM59F9va8DVGSHJMgRA7x5t3co6Qf9W16V1AN",
  "key15": "326G7A17hBL4NdR4iqwDDqTpwZ8UB53w2ujyJTJTHFyXMkLAdHkNAfdZXTSTjWDP87g6czg7myRmz8hboD89uRsh",
  "key16": "2dFT1DXyuuh9Rn2y8udhEmkr6V4MNgBZtpPukdQ52HZej4ChxyAsAx86shHaYGAUjgQ8FccrYRaJc2FAFzQv5YLC",
  "key17": "3KiPwtwDeecaAkgpAbHbrNoPKvbkSunzLEPZG7e8oq11yPZct4iwbr9E5BKGmELALUqurb2BdC3Wm1AKDBsNxqDE",
  "key18": "Fjm9Wm2Jhh6ZRPS21u2YkJWVWuJL3ZfhbpCHUmKYs2PgutATyNtFRRbLiRhtwrHsfih4Lxe2UKCD36AhbpXXPT2",
  "key19": "4sme2KGErTzqduihhkKSBoqd5BPyZB9fuYYu7YowZAjRCfNQkfFBGK64Xm4bPk1ijwnJ7cd7UAsUbZCbvBGmEKaR",
  "key20": "2ibfekvzs68AN6jzXHYfsJDomRwiRTQMVHEW7iWY8568bsKYBXV6a6Rp1rLcSndhBMqJp6hRs4k43fUGTKv4vZeC",
  "key21": "5nVJ4yjskFMmY5hEmTvrErC47gDQMgSY35QWpTFxmZqbRWvtHRV47rUxmhDYpa62R591PA4C5yyMy2kjBT5vDGDj",
  "key22": "5s5hhdy8Fvu78qAPosQdMR6Mfztq3GErkAz6TwaQXYKgci4RbyQoToBtz4KFBNddN8P6JtwZHdbkKZ8WkQHHhdEr",
  "key23": "49VzRQZrmFLM7r35Qzc8MsJUVw9XFbka5Z4VfWq4EXWea1FAbNp7S7P9u8WcuzUL2k2LNbPiifgUTZMKtY9exunb",
  "key24": "52vWrzb7gs15Kbpe8xRb5p2H2F3kH2FgkPUZERLiTvkZDt7m5stpa6TLZLiqrGsJRDuQYW4gGYKnjfsWF9txPWb4",
  "key25": "2UxPUQyoRd7wxBaMTwCBFzezkrtnxK77uvg3BeB4o8e21MU1VUne8g832RWJbX3t3bwJ4DphkMc9prVtThFFUF6K",
  "key26": "uss4Ma5UQtypxdCnTrKq1HYN7bs4u6TpSMGhup9Qs5SfXmsdRrVy31NG7chbYzGmLNTdD61rn3JCx1xpkV51kL7",
  "key27": "2PyEgongS7nWjPEVARKtUzFxiKgFbvTfGQ3NQnvuLtXFro8VYm13ugoMjv2evcHnjk9C1CFyM5MHic4PUArYshf7",
  "key28": "3XJTwTYYH6i6GERkQqajuBs3YCZZvPW5nu7G3M9iKf7ENYBFx4rtz7bDrrBeriwWsEDPFFXzvmj4Q87FNSx2k1nJ",
  "key29": "41RwYjFzaf9r127mmTXv6Ud4afU2zeAtheNym8uSaCGqMw8gLGx9HxkhWrqmcLhvfNeFZ3RmcQSexGHrhDPHCVyC",
  "key30": "3DLY7dkdWtFWTwxan9WXhJJn8eCxfuw8W1dUXRzCkgGNnJCKqaUE288Kt4yo1LuuiVV9Q3FnSpfbkmLcbE2i6E59",
  "key31": "2vyy4saaf9yrZUEjNPWZ9vRqPAekaYcFuZ7WbjxCLJLGjvDuRXa4bY8y48Czwm74DY9PD1GqPZdiKoxHPo5pU2AY",
  "key32": "S6XRB81GzJc9k9fC2iukUUgcNEk9eG63EHxP8tuWorU9xTDwdiCf6PoE6Pq8JewWpd7Egh1JPvrJwBktym3K9wq",
  "key33": "38yA6P2nw9b1qw2rSgLPwHHenihHz5zDNsL3tVjPmbKN6Y2YfgsAN3de3QLvYsomKYjmNRN6nZQhdvrsmHBnj9Tg",
  "key34": "4jZe1TuiqwR8HUS7SQ1D7uaVNbueY61PeQjX24XeYc9Gy9E7kXF4WV3XtyEHtZ365Z1QMAX2Q58GuB3iZkdbG4Tq",
  "key35": "59HBJFNDTLthybcVPPkqznfhmRUNdUhu7nNwcgg87h6gqA1Mb6BUYDgSzc96p8ZhVnrJukEenQJ2WPTY1YgfBt4P",
  "key36": "U3zDWaEDqGucS78YqCMJZxA6MYcKUHrrTaJToVAp99anv6HpHDFqFNmrGQ6LSTdJtGzgbX7XP7PhxsU57ZPz18c",
  "key37": "2L6krJE6Qe55Xu4PX52qnn56pJwSfcKtsuqJeLT246SvsLqtrGWDyuPpxKQAHfTfeqN2J47o1Hes2BcFT1QZ7nk8",
  "key38": "5qbpwm9c1QyaMURCroftnCZRLUXPiXNPbF17oNAsx17ej96a9CNCiBPN8a5ihQFSTinSkqD3xo6ZqC3xCS8E8hXL",
  "key39": "2XokW9TQWi4GikGkWwqFhJZaFRnY9S2ooiNbLoyZic6jWVGtMTDdLNhwfv2wtKoY8mEfo5cmUfpfnMKidugmZu3q",
  "key40": "4XDoQ66kbgnDF2zh27jhLzsJrr4pc4t1Qr2gFmjiLU1mSWQRCYeCphqbLEQN3mnc6RnoMbDtuqhs3n7f9ynwFiSb",
  "key41": "3bLetC6AjSjSGYmAuDnubsCyv5KHLGyyb4ikGResj2TeJyre5CruFpccRw89WP9Bm94Q5Ba7NGX86VqYYwGhWNja",
  "key42": "Ug2WMETn2NeXYRfLA8FZnJUMvxnVcG4AhpCoRvQUGYGHoEVZWRrw9nji3SM7ABUrkZHpBDstxdLYoquMecU79c3",
  "key43": "EMsHo6TbvZdLc8qiyjD94zCL9GzGPsX8JXzzwtvJzzumwjjVmhqiffpYLHzLGKJsEePzuwW9jpiS8N33TWC6pfB",
  "key44": "3u1VpNEhkoBfAHMQNMMt39L3XRrdt4HH8ugBmzkHf3PLTdgKm66U3oy2uKovBZkiiHnv3TYert55cNchxvvG7o3L",
  "key45": "28rHykG7VxC1dQb2jjNpV3kfgq7EAboLJJ3DtrQBWXTvFgBsG1mJej18SFnSDKB8AdwUk8nRoLi6THqw8jJ4zFTE"
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
