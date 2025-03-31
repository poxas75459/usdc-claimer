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
    "4Mxr8KNweN4z1dpjUXPPJ9WYXpPiHwzoFSzAfkzAPtELDkWMq1XPWjKKB7bHeDxANTWkW3tXiRybqvVP7o8t4tey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qApuJoj5RAnfX4zGc6rAWwzed9ZWkADieYi6WLaYRFbkhQgyofYqNnjvTRapV17Lm7ivcHMRoZUWkX1VQMnGzSE",
  "key1": "36xrLR5jCKSJ6MmUSki1Yp85KVrGqoKywsSfYon6eaBn5GvUpKBBx7xYYoXcpJxup5nuTSjZzU8EYCA93BoMoPDw",
  "key2": "5q5oaSyTPjfmFkRwytyw54i1kRkAA2LQXDe1CGcXnGYwtNszcFz2A1dS3iDNXWzgUY6nZkWkMzaPNFR1iCcQysyD",
  "key3": "3QqiQqqCdw52BL8kA38QgsChC8u3PS5u23GtpQkYNEGV8irSqdsnkcfvtBdGv3kc7SwRE9byHe6Vsr7opmRQtoxZ",
  "key4": "2emKVhRods3bzgSvRYrUZUF6j3vcajKbjFcnVei8Dum9yrMBiaun9PGxQ91eLrTDDgRpG4wKqdaTjd3vmabB9n9J",
  "key5": "5gFoUfJbWoCRKdoE4TmrgNnrchR2EUQEoQRMKrCNLpu1UMVkcKytCwnwGDKGnoKHRQNP5RS2NPr3JED9pdkNiuZ",
  "key6": "2MWeZptE5guEfsGNMhsKFCZRpxY9vGk4TTsPAVPeeujHiQrrvxJt52Fh7tAhgMq9PsjxNzsWAG3nUPgtNtXnA21q",
  "key7": "5TsA5eKe9U1ixcwUQGWsck1b3uWN8XdLRFEnmtxNqKiT7sXVtcBgHt2f9cuj7UPunAgZ53CWq6kTCFZN7txXoYXb",
  "key8": "XCe2r3EkBrGBGpEj5oYmLyWUhSMkGC2jQxgKF6gf2gQJ55Z8uzNm934owH8e27niSG4CMV7qEYd3HxsVAuf7SAz",
  "key9": "Ut11SbUMViQDgaUNAact6JVyhQ4b7jyWt1km2DH5mSGG7U8G51hCoVXznFkkuZNsRTiw5v3zKyemyfuJhhmw8Rs",
  "key10": "2QYAPkp4ZqPaEX6iChhrPPVkP3H8o4XEQXsNhHn6KRX6ptTmj78aTASdKm9YtG57FHQT3nKcGUb6gB6DukGP9uJ7",
  "key11": "5PjrduPXiP21r7j4TxSij59uqCpwMQ7diERF54qr1EiQEwUtHmAAjjfLxbcfziHpnx8urBHuUB8z2LcJruFf7V7D",
  "key12": "3t3uUZxHfic3Dwnd3HmeohMQKvRYdZnuFCyzeusFaiVfqk7DkmguJJMQqNf2tyJPzaqJBwUFqWf9usK5dwGwzSwt",
  "key13": "3Yzi5pJhXcxvxn5Y7ngHETR5JKCHEyVhFjEruBDmKanMKQ6cPUnA7aNRfLy1RSxoPNfG6E1GB6BSsjfeC4Siney",
  "key14": "2knBMDGEfC5T9xUkb8KjRczeFsK4eYoKSN8vrUAzyN6RzQXXMR8JpfdGvkHpWA5E6YiCgNtKTs9ZXfEATwdAYbeA",
  "key15": "41cey5uSBhSetfa2Tfgyu8QQydPoyVeJFjGJxRfQhewGCyuweQ71BPd49Kj31C8u6ButaiV3g58o8jRpXjtSFvar",
  "key16": "cAHKi2xhJmtk3QfKCJFAYFtEWsURGZpsAZ8oHGZrTw8XkappDVgfafCmoPYcZ4SPeD9r6WoKwhtLn7e3tyCjW6P",
  "key17": "2yi6izJNFjymeoyALUU5L4BGXV4pYbvWjpF2xADCKmZRExsUp5xhXYhAtyyEinpxvgEiPuS5v3FjDQG4duqBr7qm",
  "key18": "KDDsF5K4zZjJMAh1osz9vCYRWjuvacwWjCCMuhfeAKQXBrnxGUPTkaCRPwesD6JgZnYgBd5TDMKvDerBVHuJN4s",
  "key19": "3PwgPDkNiNqynvvjrB2jLZ9bZU1edwNfmo8aBmpFdJGbTkTzLHEMDuqCPy7SUu21L3AynyBTcSZoQ2oaqMKscC6V",
  "key20": "nohT5nvDDUiwR3F3UxrSj3au9ZFpRdVCmrvmFUV6AHd1zZezgtct1ohYD6tef1NZBshCFDeFu327pmP4Lvzbtit",
  "key21": "xX9pUypQQKY3jeGHyfsX7VfgC8qDdx119qyCB2vEXJKQLuNdxVykNbawaxLkZksaVU6CYKv4wPS4oheRMRhppRA",
  "key22": "28uTMu3xowkAfiWMWvR5YruPzrwe7EdpJtjR121XVJe8c1VNvPvJqBqFkpgHd7chdRmYuNSyGWH5zXzZZtyKg5hr",
  "key23": "5Wfi2bK9YzgSXBY8foCQEWJyCQFhMHraP1ixogW7oqcV7ftbc28bSG9o36GvNYJFs8iKBFhSL2MGZuwTyqmvXAkU",
  "key24": "3A1143acXw6BWkRBjFaESqMhSx576Hfj4kSfYnsq3aWkndShTHECdskRRi1TXcPyrqK3gitgfMAa6jcTSZamFRzP",
  "key25": "5pBTfavSG3FS5q7ZtvZwW86qcsKsnUNJnSQJbqo8eTeSCMxgYGNzH8131i8ThUnRyACuyXV8V4UsufoPNbtYa7J8",
  "key26": "64WR2a8iokf1rUAkWqoyYMXa2z6hMrsjiZ8othRW8p862TYhqFNR24rbS5Y4P7nB9zRcnfALZjAg98BeNGZEmRXC",
  "key27": "4eccSwrfL37ejcPK1hpeUg3xQiovvqsYBhArqvTDbKoEKbj4a1JtS3yRSBJba6t2MaRwY4LB4M1GGUogGPp4yoPc",
  "key28": "516BMth418Ffuyhe2k45UzNuFUeLrMf8cZmoMkQJWB9t2zDadfbAYaQ6jQ4hym4GuJzGDbUisTPxFqvrpMjbf7WK",
  "key29": "4xpzNMTJeTHg5x6gfHmiqSeigiHVHxqy6uyFQ6s7TydUvCXUGKAQULXWD99tcP8G2PtVLC6R4a4kBhvNr4GuBSiC",
  "key30": "5vgNUx1WpVApoYeWs5bz4ZAyk57J6Rb99NKxiEjcYRiHNUQXKg5nYK6zPEHyQx8FB9tMTsZYhcNDJpGNNbVpgfC6",
  "key31": "4hPbPn7ULHKi6ZnpggR1LuJY1HkeoeH1AAB9bEdZDnZdDie4TBMQp8hRR8kKmMLMLw7hEUSe5gpyPjWHd1ahbcF1",
  "key32": "4KzSxYDT72ZdgNnDjqmYT76KaWegskgjHnhbMSvrtZYA2kvyAjrWhF7PSn8qoQzLy192p9r3rYdBWFWsHcHnjKfg",
  "key33": "4rYX3WtjgpP352QXNqqqhh3dqoduULETCy4ULSjLLsiGWcr3WckqkZncyp1g7LwSNmo4H1v1cAeKMcQndC9drs1E",
  "key34": "3wmsw1izKsNF2DCs2BuSn3BH9BeGmMnqNYTUdKBKLe5Ssrfshu3DTZ5FS8iocaNF4JoVoGvKvuBTCex1iQwEtw6i",
  "key35": "2pW9BiHzTjFnStXyQSeBdi7VAJvfzQcbfnpJN8eMfUNj6W4bjSqwocfQbyJuW3G2jiqy8MHUzeXzNSEdSTcSYvhP",
  "key36": "QQYuKeooDYvaeapY4Ei7hwKcCCuwp7CZxAvzKoZGxPzc2AABSLJNLzhuSMZJM3MGTUEzMfuFBdRgcHAmge2iW9D",
  "key37": "p8pGYj3AX7bFeEmYFkLE9GQa3WV5DyVQ5iDUqXCzD8ouNbZa745gWNWNFSfLaCb7ahf3dpfJmp8A31TWSUPNFCf",
  "key38": "ixq86NZ9sgwcXen93QAB9M5JQRP8gVHfXJ95QKPGhPXwBcBDtzSjUu1iSAZ5TEqzDhGx95eLZ5ngfBk4fEbbF9Z",
  "key39": "4x2HEp7dgycimLoGRLYAi3Ayv5Nq2w6wVsL4FT3LCCThWneSDLC49inqooC3oF3YTAkS7LwVtBXHZ5W13JyzSALr",
  "key40": "2R1BL8hERenSSsbUtxVYNryx3x5pTkenZfBDQJ4UeoafzTTMyrGxCM9L1xCfWorLbcGnTcVyy1RK4z3K1PcfVCJu",
  "key41": "4SG7RcxPxu44bn54dgSN2wHVZJpGJaGYQse3JX9W4NKyhBQ2ivUzS5xfxntrU9rqrZQ1UGerkvffcxKTMcCeEFjy",
  "key42": "3CQfYnEp7a7HptnG7dL2QfjPEHrixw4BQio9udLV9MBnGBTKxozfnv2z72DhdqPm995EKN8mTivHaazXg3B63C6b",
  "key43": "49AYWvZ4DDF6CwvKzajbozUuzg4aXLySmR6hzPgfbmFWNW4u3Paxn9mX34DQHkTJmhhX91gsp3fr7bH2FgLwMrFq",
  "key44": "3xfYgH9S7WLDsyV4S7WDQpnMPdxQgTSZDAPsvw3mUqSSKAtY9Kcj9jUZwC9y3ZcxMjqvLq86DZkK9sU7PWG7BsvP",
  "key45": "2FzTrzeWBYUMcwxzpqeprx2tdN91bezUnmAq1F9ycoTdwYNb5ZDEN85a4RzXdLAkMFTEToDjNeXJQuPKzjxbpYRX",
  "key46": "3fCWtKh75NkvBM95Q5TjJkTzbkD3eenYkZyUs2PSrzKrENVU55j2dfAFWy71Xb3WwWoDGQQEjY4H2nsGczx4Wy6o",
  "key47": "4oN2A2XwEhjTkZnepFGYZieFUmxHriC1nNWJJa7g8vV8hryusJSnDDfxc8hun59wENxjgYdmBb3eLjrxgdBBqUNx"
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
