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
    "52CpbwESxjH45xK6yoZdi8NNCF1Tq3R8RwvngPoqeTtRKKZZAzLdDSQtD7KWFR83Ywg2dTUeuMJ8o2AZXTspK4Fs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yJ8etNSn2by6uG3XiugiCB5oauNEcMxdJiixQB4hE6ZdhWewo4Wxu9HTJQhsaD616f4AjiCwAY89qVNn42S6fYc",
  "key1": "4FHmUSk8JwMHuZnCSGiWs9xZUjYKnvN7RYGaYom2jN3FszEtuQpMrNSc9v2FiDPutGiptR5MntNuDTesGzzZP38g",
  "key2": "2Smj3X8sQbUhB5xSEkY8svpxLWaNfLcUtsdai1piruBkcbwVWthtEr9gLXS8NmxzyWhUGH9mvw6stMhhuTEfJmpe",
  "key3": "3XCgMfJTXJFxHNrMPzLe4X5TjnhMcK7xxfbPtu6iq1UCCyh9sRfD324gEAbA5kWPkRbBsqBL9UufqUvfvtUDZepA",
  "key4": "3K68B949VkyVEXLhEHnDVRt2y4ohuf1UTucrfBAYPhUSHCFCoww6mGe2Chfoa2Tm3qAvN3cQTMWuQuXmiBzKDMT7",
  "key5": "3YQqXyk9YdC7miiPLqNvvpmtvaStpRPyNwixTShUrShQ42zKmSFiNpLWVoR9RpsEbsf2KpotZj3k9w7wQw97fCKC",
  "key6": "3rEVYdCKnWZdXjhyYjttATziAZZQJYUqnEhuxRQr98ZF4KFEmBEdDRWtS4ZzGhSPNse3CQY8DvWw7RTbJnjCDuxN",
  "key7": "39phKk1UeNv9CYSPo6JiLkZtoBabrsVyuBfyxLva6GSqkXURzFfoJtPfhMcbGwFEnTYpQWzpm3UcCRtq9PTcfhSk",
  "key8": "gQ6JDcDrvVQjf64e4yGgTkWcgev1xq5tcYrLnVKbPfbmXmSAf3mqhtGPdGAneu3Eer8vrvdutdsMR764rdcrdJZ",
  "key9": "526imJ5Tzdp7eHuE2FTKzu2PFnP5W2ekhQED8r2xqK79JKnQNr8SbgpA9AWRiPB71f5Hgnjbq25MgTyupJnkaVkH",
  "key10": "3grScTSnweSM9Rc9KZDrRV2CMDzmSMLRrQEAQJMZFenJXNazmgYoLaZHSfk1diPp6sRHGisz9kTa8cKzj73ZHZnS",
  "key11": "yfvmtxBZmvD2sJ96zut34YcVdbmpVGGt7zotmfcnGT9a8gyW98RmK5ceMZ6FVdAm2TVtVs4VJdp5sp64Vp1zC4N",
  "key12": "3UTuUmsny5fcNytCY49F1JToNba9wjAjPFFhM1hmfaEVNDzYsqHPxpXhsMbarNeskr8v9W33LnsrghdXKLBzahT5",
  "key13": "4jGh56NVMBMrQTPVuSaR53mWPEHeamSyheZhyXStppQJiMZhtR3Us9GrnFRnujWg47GaHtHfWoc6ZXbE8BF6fvfB",
  "key14": "2NoaQU5HCtSMkczgm4auRJdS8ruSXZtDXvFQ7XvxrgM2ocNB4aRZuU5wCMPoM3RLT9GisnpAcQnUQ5YGUmnyvKv",
  "key15": "3XHkxc33Umb4iAz4z1577VHGw6tUpvAUDUce7FfLirdpXWhd7GV7x2yd65ne3q8aGn65mgu2wfiX8E7XwK3EahgH",
  "key16": "2LJbSarbnH9dzX4DmvrcM2xDHoVvDrhtZcfBYccWn1kQMkyg8ehe4ZjQk4xhQRABCWWoGDj9bNA2d7v19kcSpg8D",
  "key17": "5BYvRPErvher5gbEDdaREmmdBi1A42ih3g6K5qxtQvvCiUvmt46xeN7ggpFpg5q3nrhQPvKYnqZpRqEqKeRQPVNf",
  "key18": "2rNbUC6gsciLmBoQqNCy3p7kNtvPQL4TRNVeDRg2KPgwKvtzHTvivPyg7YDq9w79DBCEhqX3zfH46ZZoujKEnLyo",
  "key19": "4UnL8LBdtp8BJeK8h2eTkbE3CHrUV7c6y2V5cabnjiciio6ERV24Baj2dzZtb7eHaa2R3oPJ8J6VDtNDgsKYLY22",
  "key20": "2dXo9wVs2omVRPzFWozBdte8J4N647kkeZJQEcp5CBvSfk1mgx178oqaF6fXD29gbkdyiVB8xX9pYH9LyH9RfnmZ",
  "key21": "2SHKpChwChswupL5dAaWtmHoGRcLrdy4Y5uGi6G5Estz7dT32i2EqE8BQn9ZHh9FMv4jgHc7gsVarkwQMJZimi4s",
  "key22": "2dMnH4eTatd6UaUF3iuCJQQjuQ3BRhefLer4fhEKcNKRE3fn4TM7voGbDjGjKKcdqY5VCV9me6nurjHWfRrWMvKX",
  "key23": "5QFLE7TgCWpzCW3GhNiRr3Bn9rPn87VSK3Hf3W6HgASum46Ystsaq8viHJSuJ8vxsepZFSgp7Z7wEoFy7P6UHuEZ",
  "key24": "2LBApaMb1YFjGKrpG2B2iz2S8iQ1YvG6v7NTVKjKJbyyjF7jzxzVDCpZMth2KevN7me8aoAKQu2w6uAa1UaqnZQK",
  "key25": "tBXY45BjGq1gwuVw9bgkRAKGBkNAGiCbbrP45BdL6ohdF4GoSq7urmXAPqourzrAGCC9GPdME35jaf11e9bf6q1",
  "key26": "51wj2mCNnkXSmpfm9aitADLvYnUNfZHcGpvM8PHaS7cUN4pRi7F19zEgk6GwubzrgQ55awMKVAe1PZir9HKMeV1b",
  "key27": "4tDd787QBa1AHT9XYwHtzK7y97pJ6JwVnXnEERxCBgVJmEK9jkzrJEGDW59BfKicQJAMWAjEzXAFn3rKi1m4kQJg",
  "key28": "5iL7Sh2zSwjNA4qBc3BZzHRBkLo7ebRtYnGm3EqpjgodfpF7XA3AP7asWmpTE9xKu7V4uYv2PJYehjv5BLZZdYaN",
  "key29": "sNqNt4PTGUkmXak5SLHFvQaaw5RvELdAztsLbjDJafL48UfZCh3U9Q6baQPh5pEkVh7ZKy6sz3xK3a9U4KsXotB",
  "key30": "49zqjfyTUcCPf2T5FVPzDrwzox3EbM25zEgYkJjmRtRbMgqwQRUAnmvqEbBayA3LptHEn23tvKWirKbMJrZJCeuC",
  "key31": "2MFr31HMFZhtGRvrw2m56SteFyje537QG3Hhf8aErWbrKDq4NKFS6X9fWUbgtn8uo8Ux8EPPqeEMfcjTYgPXALje",
  "key32": "3CBQYoSzsKYqsoJEr7FyutosCT3Fzu5PRKNNNdAEtek9xmEWksJ7nz7SwcP2oAFaVaEtQeC4y8wDwDAvoaonvthE",
  "key33": "cHhr766Lkvxi5YpCdtgcThjJFVCyR2esrMywgno7K4WGcsYJfrUr39yqk5Se1CFUmkqKuy5GA1KzA3jTyCS4Sc4",
  "key34": "5iemayCVaq3m6KEYSBDwMG4ciqRxj3yQKf6PELwxYXQJvcE7RF58QzQyH6Q1TNd5nSdAzNfNbHn4KSH3xcd5Yy8P",
  "key35": "4XWqig7MCyh93d6P3sZreuG7nqVJg8kaSPxMmgnthZBmMMe8Auz1zxYZ7Li9hUXfW7uacJTtvArmfkH9mFX7w13Y",
  "key36": "5bj95dY7Hcd3HeUDG5uon99QWB3trSK2noCKyxx2kuCdJgFnCkj9nWtHdCiPVPKGGuKrfT9KreBR3fEibxjQ6b5V",
  "key37": "sLXzmL4NFNCrU1qtw7TiAfWaDLv6KyomSj61eecEYdQFmFcv6X5KJsYHwo6Pe4mk7Af4uEy6AwnrrZLgy9oscWT",
  "key38": "5KasbwdMVDnxHgVgvitpQssvBzVfDWKxFKNKwhsCEQiS3xhLcrxU3XYwRAmPZpBZnyShm1HYoxVinEveML29uibV",
  "key39": "3GLfqsRE51xSs5zfM3ScdZjnG7bnynXayunnyotE8fk29Ni5dekhF6d6FKaXQvVC23LvCGGkfbHazWPznJke9vTq",
  "key40": "4414U1JdP7Rc2VFZ1m5zfCKq5SkuHrQRYEHDjNcCEzXrGEYVFpZPrm31Sx7dwNdQauWkQoNYWVhtS7F5mK1QBiNM",
  "key41": "5ye71K6CcM1Y9mstNYsvJGgq3hZwjyvdbSBxVXADkEPCks626eefS7d2WYh3B52MR6TqS6A2XvxDcesDqdDuSojj",
  "key42": "2bdgzQFS4PA1gZWvpEdStXZDGRiUqV6h4ARxSFPY1JYRGdmUovQMSiye7VJBT9hQvRq69NqB2ktQ7sf7mDbREQC3",
  "key43": "4prkxpFUPCiUMJ15zvtLM6QGevka4euV2pvxhcihVHQrDi33oSP7HFbGXmQFqcHWTwrkTRvTn4zZdHhc4ZTR8qwn"
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
