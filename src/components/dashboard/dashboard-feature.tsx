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
    "tGG9a2ec6gy392ZKc1uRHnMXhysqsNfz9LuTbJJ2UuCCUQwdu85gLNM7hYamcPkBDHDFiFtG3GniCQjCUtWYt2t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gW2yeFZSdzv3ZTLk7guJyBeoAAbughVosx2fSSHUekNTxqDFC4feHcUDXhLkDhuxDTqkHCfSzSkUKUXzxZ8tE89",
  "key1": "4QU8QXxLZSi1r3hydwWn9gTno6DCRJcbEkZV94V5GypG3y3dQHZjkqKFk6kQt134Utyp343mfkwDVc2bF9STuFRV",
  "key2": "2DeZP9veQdZ23ZwmuwXM6uU5cvGcvmfoduHKpxZR76j1efKWy9WTysj4Y8hLQVxYoNDhyP2TzB7j7c2caLdfVfKX",
  "key3": "3bqCqrpb6J9tiPhDPYBfd9o1J8ShLyMW7vKiT2oDAtn1g36BTJYkKgXfuJyBbcBHa41j8F12m4paVDiwBLaSHMLU",
  "key4": "5GxMwJh4f9LprNibnSBcAjEVST9n1si8xvg6TKgruRHS1J6t9RXi8vppUyvaAbFZinommCEQfi4Q63wCCJd23vP7",
  "key5": "4So3Y3kRaEx1Rv9xELaSsGJoRkivx9xmBaMyqc9BzfCof9XKuwXz6W8XWCQZRdvmD1SVnJ24DcgjTYM73LheoNbS",
  "key6": "58mL5kuNTXZ6xcaNqrm91A8cyAu2ugvt8toWE9V8Rgp15BPk9RiscGtynxcBSBFfbUCegewpFFtHVpo4VpEigDDv",
  "key7": "m7GHviXXfy13umNuzvH3CyjKFdwCaafcHj7gPMS5dy3EpqQ5fN4XSs1qU9bcEG1fzuk1wkrXTPkruHxEBKNknSh",
  "key8": "2vNyyLnhfJpVew6ErRZDLQPeLZJSEhsdpK4wBUXChof9vKTzpz92aDMWLForZeSKVZWJ4Tku9dQE82bjwgKevAwh",
  "key9": "5URsDPiSkc1AAXjKLGTdJQ7F7FpG7w7vEYUER6wEvjdhSZdaU8BaELL99S8TivRMUYb83PXg1QV2MUJ7iqZM5EDS",
  "key10": "4hUsUbSbrizyonwifN6gFA6ZjxufVeuxqGH1V8WXtqmvtAX5BJrE9sW69hPeMwD3d1z111kdrWK1aYB1pjn7eKk5",
  "key11": "2Mv5HP2xAhDqCErAgHzgHHwuH3YQqdaHZR81Uwth6YXz4XokBxw1LwPWFreme9JhJpUbNpfLwJN1qh2JFfnsvcy9",
  "key12": "643xLPG41gVAcArXMKwWw55uJpiwBkHmxpz2aFzpbpsWt9qGTHDGtn1yuPG1EYthGEWDivh5TtGPa5iD3bVWh9SJ",
  "key13": "2Uqz11MJF29rzCBk3a8k9EE8QMQXRR7tZTCtBrcj8utLbvZ3ys1mdqyHicKwEvYdijGMgygXeDVWeEuM66XGT1XB",
  "key14": "5gxit4TDj7NBjMmestJUFKGBjfcpi7Wkg6uz2iPj3wLv3sHMo7R5P28mcmUf7YXfRFGGNQm84rQz1KYhdkjUm9Fy",
  "key15": "26iYqitbvnaJ9HgWpNTYXfNhSQijKoWF6tLR9DkPss8Sv8nwV9Ssuv3w8DUUm62FYV5zYkTNaBFdH5UwyM72vswg",
  "key16": "5Nt3kRhE8mbPfbMwE5LzhbLvYRPDnDx3Y453dYfX3AnKJAbPdPMyKM7kt8KiCF23bDF24MUNHEUwf2AQJiZAAV94",
  "key17": "5TpUXg9XrW4pFRTSF7aYnZzPFYeL9KrzjVi4D6F18xUc4PuR75PWNHSCr2a4XNSUCLVTnNrEayToGGNfvLZreBj",
  "key18": "3X9C8wkFA2RkDtSC2cDvKvLySFFN2RDbbNwZLjHHeyn174NgwMgsGhkGgr2v4c4fHNomU1MBM6zgdvKiHBDSXuKo",
  "key19": "3ueL1nvZGLXyyVN6mf8R9NvT947Y8waRzppubk9YA6JyGc61MwbqM92pMN9g6sjcBXawPruMWwoeSEGo2DevuT3",
  "key20": "23sbSyjuM8kxgKgmWdak2dZBcCqz9bv2jFXF7kEyoJqj1kb5e6Ur7sdG6Po68Jpbki8LHY53XYgt9aVUr6PZUzgf",
  "key21": "67389ZNmG15BpeaB4zqPNtLpvWonnWpB8ig4fi3f9nWJkwwD1vj9LvfjwEUVBScQ537diZLpaUHEdSTC8mCxnRu6",
  "key22": "3NvktuhV4AuatDV1CzYCMvqpfiycgSqEQvjVZW3SwP3KD7QoeKEYXRVoz3qaeViPFFtvWXxYeXWziXxM62UYF4Uh",
  "key23": "24MtcFdoBiQzu5K1UwyE1gsaTaTU1CmHtWyEfLDM28AcSGZKY758Dz3tBZeUeh4v8WJCu2fK3nxVo914gU7dmAeK",
  "key24": "2beDXm528YdxYT6HaXhxSq4hzTidYu4tboi9xjNmWouN97iet6cjUZCfAp2SGsK93GWsKqhksvCXE8XLhzgZMsvW",
  "key25": "4ZHmDtRErCrqHz67j2sU3aQW2QQqczr1b6PPuDWHGcjxZtP3ehvrxhGcfo9HuuBs9NVig153QaEjDv9NF7WBx6CA",
  "key26": "5JDV2R6HN53dLUQStdhfqkWcybmeUvv8N6vVbt6LUDMVkhhb5oiXf19iusZpoe6sHfhFM84heiYLxLQdEZPUSyqp",
  "key27": "2amg6qRqphu5iCBgi77ri1b2ZxSnPiFfpDCbagm2L4GDYHLVTewnasd49KXKcWL8VzMVDnYmdiASqvaJ4nrpZLDP",
  "key28": "H68xvy5t88hXuVJ1njwBu4sUvJYazYB1GRt3P2jyDbdowsHhd9ASmJ1doaaR1kFuH5XQGP57Zw2HGxVhaCb3J6G",
  "key29": "5radvnBVyiB1uocwkzZWKn8cTmbwX2dxWxVPBSxiMiU3RNuhKm771t1K4LnVRZ9wcv7K27hu2M5fn8bYJqQDzXKk",
  "key30": "25AFsUZ6RUNmhbwZgTpWmoQ9Vs8GNjpbvrwv1J2ucLToGMkhWzJiLsRSf8yTbJ9GCgi7EmVFerkrH4VACzVGSVpc",
  "key31": "4dYNz9Qj4x4emgQybQ6gndDLHyDqMH2pGidD8Ny1UEXo1R54xu3cN5h5Gt3Vt8gYiBNhZp9kaNkC4H17naH99vfB",
  "key32": "66zZDVwDqbEZwUwLoGr219WwS8xLhR4WEzn1oKzBUsC2nzK4hADvuBxarocyE7ecHUvJ4B4QcfCm7o5zH7NJ9KZM",
  "key33": "2uRPJHjNvKAw3WmLovpDSQAkCz5RuoDT9qmPtos6eBr7oemkZk4h92Esx6pSKrcrsK8WvextDZvveSdLABZKJ7sv",
  "key34": "Tjh75VbdFbEcrXfc7s5P5fCWYLu2SjEwLGtJ1znC3EvdXirjCbQtkATj2RMFx1aL13nSde1KYkYgkJmdSnPSykv",
  "key35": "3VQEjQpunM31hd79o9d6sEykL9TQXvbnHPCReio289pfsQDh29hiHaRaBfZGkuTqRkbqQg2JqpmMsw8HEmLzw8aQ",
  "key36": "39CW4jwFQ1qiowNJud9oEfn4JjB8gq6KRESPFgK3o7MeWZgQ5vufVxvXyjRXRCw5xAoo9K9rjUVvBpTMCVmqtwQH",
  "key37": "5BpEcrTN2s2EJpQWk3Ch93HvbpwJXC3AaRE9V7ciS6rRMdBAswzCPAEuJexHwMBLQawXmiUSn3GVv9XjDi6JYU2u",
  "key38": "5tte9pMuusD3fbNXybzQ6A6fepKNd8HDRn4uVuCsqtiATZ3DfGMqTYKJN7FaiV42vRvKYeF6yFpyX4WJk7LwUxrM",
  "key39": "4Zd39C4MYhvTkLhQJJBjoh3vnQsJBWgWw4JMMaBab5f2tCRNnafdubEvtaj7H6o8cUJuhh97EGhrraxU8b5TrJgg",
  "key40": "2DWZpi9CmFN2wWxTtrsaSDPbZT8snzg7jU7A7purQJtAQKE1y2GwrYUXpKza6xRmnNFJibXWz2HzVBYQQr3yPnrA"
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
