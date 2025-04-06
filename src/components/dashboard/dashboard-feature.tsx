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
    "5br6HbeF672h58rxLRk7oQorpJS3AN6LjoLXJcdnESFA8HdQ6xZeM9ZyNX5owfTs3Grk6EAbdT74idq5TEXEGD4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TzWeVtX7njvRBLJHEbuKngDfnxEJNv2JkADMDidwXTgEDZrY2gMqr9mNM2XWX7uBnQVd9tiZjw2gnmyr5RC1PDd",
  "key1": "5LFTiNs4xC7iR5FGovhcWEL5Nr5joybcd8SMcseRfhx3v3FT92obU7STYPvsbySjVVLwswwU3zetXtxvwRJj2JYW",
  "key2": "jCX4KJdcJ3jNopkT6mtfBsQR3op1nsxLVZCj4pyd2ZkKXXNxN6uJk18g9cymEEJWj1GGsDnmMtKGhif36VLQraH",
  "key3": "4VpFZ66Qd7ewCw13HfNqvqZ5RLnoY4D4f5sJzQVW1eeJz5RTHvLW7YEWcmUsCbtzvyA3TvhSzbW836Ntoy6utiwh",
  "key4": "66SASy9rstaj8rXLjxCYMjLfW4z47gjZCQq6C2B2GuEvRhEDaRTgwqLar7sn5ww7LjhAZBeypZ2ZMWMxxP7XRhBf",
  "key5": "3uog6KQE2j2UFjLPf7HB32YDj9uCyESE1kJx4esEyNU2WMwppwV2txBC9LbfN8T2f1JEkkr5GqfDPNa7RS6Hp9vv",
  "key6": "58xwCZSbYbNRAasXUgsj96xCExPe9DNX2yDLdHATsQLQsh1gJEB8LLDK3FeMFpaS68JUxVXGvfpNaEMdhBUSgYDY",
  "key7": "5sF85Nh9RShK5ysc5P6FkPLeegT7d2EGQaiS4KzXikwLYmAMTJPGunPth4ZGohUW8rtKkSspa2Hsx9RUHUYcZQQ1",
  "key8": "zm3BeV8T6zaB9fMX8ZxbNaRuNCpH9erAbQdsRh7EbXJbDBejHJrHYBVxVXyF5sBaJCzuVGryBrzNUkqRQauWH4V",
  "key9": "BTue4wzgAetdLE2QwvC4MnAvc2uU5UqqbUUz3PT3rzhqVsyDawFAwwr9JwboGYbJptBfN68dwduw5rYxtHYQ8Z9",
  "key10": "5rP51huZsWRBpPa6v9VtxkHDNkUxaRqXfTuLUq7sxaFy5xY815b6uJX5Lt4HFfdQJT178DBLVXHmssMZyXCpqrhb",
  "key11": "2HDZs7T5BtfDLmHJjoVinRUokiLUbckVARjYM6t1nzLGJRJiRF85uX5y5ZSfuAfv848XLFt2wAJcYcS6dsjboLs6",
  "key12": "boAwqUpJjg2rog1GEG8Gf4uM8MjLRkfr3xLbT7GqT1pWzaavR3LbFHHC5XKA6H1nBoWhbrTHPktPSi2WHog8Cxx",
  "key13": "rtrNxZakGcwApGBdLSez8yi235mXd6uxKYL5mtMg3kJgHvnuqUGFEmxx97VxjkmixGPY4uJBZqXdABPsbxWFgJV",
  "key14": "3ohbS3Dr1EUv2ZMqjQM57t81kUz15YkbuCGNeAfAG8kKd4yvfKD8hvbwjgopSybfEa76sZEsoRu23smHQMfnrJxq",
  "key15": "2cSK2vziqpt2k6XyZ5CTFBQhb8dV9un1G2f7CFQ9sYmYBDBADvsDX4wVojayqJseakrGxgRxNnzg9tVrV1nCjByi",
  "key16": "3rVn4xmPtuuDjNCFn2GJ6n4pa8avNRcqQVJfcpyrPQCNPbRfjTbA8btmyEKMX5rMjuxZXBWAjppd6MVwnKZAmVJp",
  "key17": "599Q1esPMueDGuPufmat88VPzD1CctnZtYEpw2sRgMg8EYmwMxPqCtMZYZxNcdZDr3Pn11DTmeQUcgsKfp2ZWiWk",
  "key18": "4cFEK9UspgNxTe2rfszJ3a2yqFpXeFeZ6n3CS628eu7KdZb9uCV9dzYtiuLrwi186iqNhSGfH98RFxWwtWwqCYx1",
  "key19": "56DkzLsvy4hoohswdcyrrd1DQQpUgzSBirERsNox3AH4rt6UsZcDWF9761aRstd4cZfiAR7GuTaq7kRz4Qwj8YnU",
  "key20": "JajKZJKe3FendQqUEBTx56dTUzJ2tQdtGyXeKg4DcpJo3GxbXu4yg7G1EQwCZ7wJd6PpsiJENcbrTNuRZQr4a6q",
  "key21": "2U3MuRBAfY9iTYB4PW3PgxvABbTxnF567FcyCxhcbSX5BQEfFk4oq2F7h3U9dQzp79cizFfcmTj1ey6iJocc9cR9",
  "key22": "63qQBZBEEDS98nbJWGFRgficYfSNvZ4WuuRMvAR1tZXJyd67XMGCnjRmjHXGgqbbiLUWYesMonu15rLGYhsqrpsF",
  "key23": "2P9tiGV3v4nKb8yQpAWmANpgJzMmqCXcVbvGjEZC38fehQEkWwLQ32g7cFvgoWZjomwzJQq6cm8cvfW2hsaaBa78",
  "key24": "5egTLntrTjMe5jowkJD77LQDbkCGxssDD8SEtCBhbnLrCpZn8QJdsh465AF61ki1RkUkdsyDguJRXHMjNRuvSkFG",
  "key25": "4JouQPgTxc3Uzb4EL2Etey89kzPkQEnB3gRvu4UGPKZSfk2HxRFzptcNQeuwHBkxqdERVCWptwEWvZu9KxvBWgp3",
  "key26": "2YEisHS8epn63GMqA3Y4QjZKGfNqco9VqNmb6Zb7iaBWTfGUvTDbTt2qyVoJF4si3cL5ahChnr77aaCvNPqEgmjw",
  "key27": "4ey8yS5yrpm2n5sB7rqCCfwWUfmzYGwNbEmPRBKsngrthAjf65nk8Z3KqQJgfLuVQJBr4zrCbfzoxBKEMN3ADvYJ",
  "key28": "5yvymoqc1Z4BSBng3DduAgjbgDJnBvV8y6jzc91SWsJKTo91AxkpmzSfWZmmuHMNxaRgQiXQ1PEYhQdX62ivgQkf",
  "key29": "zeZbmuTyHvekhcqUiUZSqJzowkAL6Kv4jtx4xNZYRG7jjeaueJufV7ZVqEKRgkbZiwMoB3Uuzv3284k3Fw4APiD",
  "key30": "5i8zKMMz9fs7y7HrYXxBVnKTj9EWVvh6yZtujTorhXSVu67Pz58kN38Z6Em8XaQ6xf8BoTQRSRYbYQvWy9N34dKf",
  "key31": "3SvTetaVzigVY4kyfHnErGXM5KzZSEZb2BwcdrC6gjwtzJ42vgQJc2xdsW28fwydkRTCbT1Ro94ntp7cXYdYEtgs",
  "key32": "2F4gXa5vk6FDRshFPZHeH1tvRxpwhfSJHwzgxthhjh5Y4LwdwysDnXwKdoG8x86ByynQaqp9gfNMR3c8KhDQ3QJB",
  "key33": "i6pJ7NbhcVtF36rptSgUMZEvj66irEurhuWcaAGcocJa4HfLWwFb8S8HNX7BEEFSJUtBHpC4ZfzPCYdak4uHbuL",
  "key34": "2vDDyFr3N7TmNknKUqM4pint4udGbLe1G6KdGYpLVFChUEwbkYrqLuDHSdBrMqgzrDDwh5J4gjsewsbWvhYg6u3F",
  "key35": "4mPfYDFEFoUJTXsqXFgAVJp1jKpcKLiMBhhwiPDpGgkxPxTCez2Wm2hbNT3gFsvgXojXSyCDRzKZgqDfTZN8gCEQ",
  "key36": "66khwhg7KYmG4MZABpBR7frSqZnLWppV4n5sGtS1iV1dqPofTzBHTPhNcpzjN6vNASHBt1k9Cv7FkNADJ8QRrQE6",
  "key37": "46Ee1cknT2gorQo1B8hNvcsF8x9zY2qHqNKgXrqPrCaB7zUzQuXjajhXqDVt8mddwvx84mNFH8XAT3C6Yw8PS6Qh",
  "key38": "5qW9Xi3s3QpvCjb8rVrKJdtzb7mh5xKHZemN9XTSnLV6MPLqDsY4VTuAouiLJyGQokcx7Ygv3iVkW7uNEd2DcdYF",
  "key39": "CsMhWEhGZcugf2Zwc4BmTR3W5KzNSjYYTf8ybRWsoeK426A4EJuck7jri7gcQjHjY79NTn6A2wGqwafz7zCVaQL",
  "key40": "2GRdtagfyZ5QXW1X3kReBS2UHQF97qs4go7ADg4Ea9VYxJwFDNv4BCGPrtgqSW2D9wMWvZJVWSU4B9KREYPwDpd3",
  "key41": "26fedhSaCy5r2PWBMhEUmM3vJVGGqaeYE6yCrbQWeuP2z1UMGF9UKFHoNpeZMeDbSxPoM4t2DFipVmuHRLbLDQhc",
  "key42": "4zHKV6eTFiYt1d3r7oxijUQf4mrg9aPn5msMAh3w7Dkq62guw5zssN5kfPLN53JFfJHd6SnwU5by5YHNxsSXFDrD"
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
