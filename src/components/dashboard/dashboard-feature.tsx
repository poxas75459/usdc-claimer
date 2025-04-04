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
    "4QGqBRSD2XmrSoj9QrvBcs2N7Yk21Dh9sYBECcpbGjkBUKz6TLV4VEv4HoaS8UmVH8haTXjpAXt4jkoqQ18EVEWM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ojsDscePBcs1rJDQJSTm1M6QDT9tY8wNg5vmMoysXpoAjdwAKx2cydt318Tg5kwte9W4UuEHwpDkhrZEhScWR1U",
  "key1": "5j2peeYiwZJX1c5o99iQRb3n7uWqHzkScWZQuGgvTFLEd6YfoptpQQjrwP7N8C8R6Yh3pt37G9wJJXqE5kAKCNkh",
  "key2": "4YzzjUHb6pKoxYpNnvRYyKH5MrCPGYYK3XCBbyLVp9JjryNyrhChp6UirV3XT7YUAP7wALK1hkNa22eQ4zMQyinu",
  "key3": "oPGhKD9W2JWARCLYC5uQ1zAhpW4kLNW7shGJLjKny4P6UK9gEMaoMNvFDU3XCCLZSxqTBToENxNdVB1ZKFQDCX9",
  "key4": "2KiGfo53oh619KwkTMGwNqPPu2v2YLG4uemvbGnp53jaZ6Bd787euy3YzGbAqKvvwvmFJDE9H2tLM6Tr1txVEp4r",
  "key5": "455oLbzuE7B1NZaoZ6j8f5csnKLvZM7jg3wmny6u3sUnveKVSoEvmDdZmJyjE1SSFhWNYoPzyMt4iBVUZUrP5Hbs",
  "key6": "3WuZqj1pVaRBuKBg9gJAtYMUvB3soUYVjBe1jcAkipePmyjEAemTZveiyujE2sAPcX1ZMJYWkGb1J4TKHpnkkdPv",
  "key7": "2R7HzHzCZahbV6PakbmnnodvDVauJ9hg2zgHsSiqX8f4AXXwswH16i79tTfTa2wMQHyiw4sYqrXqUjQbrihFjpVv",
  "key8": "13LEPExcNebm8LneroFwYiGppprw29LzmmimkdhqNgw6QgGeLcr3LiAjYNcDGZtLzV9mGPnaHeu61xcc84xj8pH",
  "key9": "4f4gXGkJWsXY7wq7ShyuFq8Qvi2TqyTDpJAuNNgsZ1WB7roNujSULKVEgZPxPcMwgJCMPWs3La8xekF1vEegdwAo",
  "key10": "2RSgGCpVCBoNp9kyKA6CrrMPC18QWgVy65TnxvRmYksx2cZxmYzEvEbBEE37PkGuLVCZdKS2tCFyZNKXkbnj5Rnn",
  "key11": "5rFYv2GT7nuqvQtWGm5ZoPF9vjnjqo9Kgiy13dsrWUCHyJ2i99HDfiMoK1kkEdVrThDeLq45Eo5fqfxgsERCwJZY",
  "key12": "3431qi5BNDwEXcTKHbzTCMF7UaNagemshQnNzXrjZQ2Rymp3W3Tu1AurXuchFFRo7Nsc3qyU5M3A8UHZEgQAEvW5",
  "key13": "3zyXE8zTGHK3hTThHsi796pB95D6kGgdGGCegyio3EiP9XGYFozE1Z8WPZ1fYuHUHx8kQgRHjnoBFvbqNFRVjqkY",
  "key14": "2GLj3MKzjDezdCh7VKNAqHYq6HPk3okBsceZ55YhKUoR3RDWHpoBt5uCz8hkERdYV1M6Q99jQAET99yPu85giUeJ",
  "key15": "sAaXESeSyQuNRokW1tSdey5kHkNZs798ywgEBi4vMmzUcGQPRuhyP5qy9bzGPK4b17UfgGCiruSZH6hBcCEeAqa",
  "key16": "UiMjmotKr933bDKDnU7NeQkfzciGJprKtZw7mgKuF1Umq1vvnRMMgA783ZcT1KN5DeDR5SHUGSw52rzKfUPQ8vW",
  "key17": "4as7bxFEnf15qtSnVDjo3PZ67P3NTnQh2jqgYpszPiMafawMJf97aPH5BwTkAa8QdTif5Goa7GA2LR6P99TD9fw3",
  "key18": "62hWN1XeMduBiGx4kxs141KBS21bo2bRGfoK99LsHaES3Phf1vaj6wCMXKvoHFXmBWz1MYH7kcQL6ZVxSQdGgYEw",
  "key19": "4T4qhECKSWXPgK6QNWpQtFh883M9G3TcxqRDC7AkM16vxk1DLE7yEvPWxKzDWjZotP58fRSqYmushUVkN8zBdJsv",
  "key20": "XXohMKCu3JxusUe8u987SqUieQLuu3V1QAMmJfnGAj15dV61Br3LG25wL86F48cbHuMSnJTfnHJx9nTCQiGDiLo",
  "key21": "2d5hiKZWNV1jne6uAnvBMkEiy11UhLyZL98C5xe5yaS38kJnt3UKumC2ZiHxanNXAJwnshn4ThW3hAc3iVGykLHk",
  "key22": "gLhr26bxGg41sUHe8np2W47pHZvDEPbStJeMRYEPggFQGYZnUm6rEC7vXy1pGQs3qYPeqBY5PJLRoUmScYr9DTC",
  "key23": "3q6CcCf2MGjCMMWFuL1Mspiaf8boUFLBy6stnYQqShShPdZbwe2KVdeV6ZfMo9L1L8GxyjCbr5kB7crLqFMokHDL",
  "key24": "rVWiM79UvjVbFjFUEcJdwDHdPGe5V9bNX5MVVkFqmLc4AMe5KnnXaCXXeC9NvpDM3tka5pjBdTiMGDupFPjBnRE",
  "key25": "5Ec8m3AEta2XBmxAJmPVxFtWzrmjPdT6gG9Lbjd6m1d7piD8YYbM9SSUUKwmQSQPCtQiUjTHjfYEht8T4amh1jy2",
  "key26": "2o5VGkuNdivoqcg14R5hQSiPEUQY41tamdLWg4AsFxNNdJR6os4kbuMJ9sNksxWfcF4uWwwMh5kxppivw5ZFq4zz",
  "key27": "3oM8XXDgmpdRdd2CH2AXSd88fEn7LfHQeaTTZYr6vPMTNV8MCQFxCyNk1NzMA2PyktYpoTiHtCHdkR3HtAfmdnq8",
  "key28": "2jebvLDcmaaEKPatXdJ6MaXT5uVV4r9FZbQXDb1bE6YTgNE5uXwAQo3zWVPPMwGDKYGwRcSuiiJJBUZvgg6wBELm",
  "key29": "5KJUpBrem7SDLv8mcFFd4Ny8YnkDqnu3jQURurjk3jtBzAqS61xjPWN8PjgdcYZduKYcRDSgTadZYRD9yG1UongL",
  "key30": "4HrUvgGh1hFWW6VqdA1fYXZDiua5Y3ALv2Jumm2Wz1cG2dRDKCEGjFpnPhUYaKMe5gfGBanCxbDSA3HrAks3pVEz",
  "key31": "4Rzeu85EcMhYedPMk2f49JrDP85H6e5XXdpownquS5CaM1hHDV9nchFsGfbzue4S5BoLMznvdQeTmdcPTRRMuZom",
  "key32": "5LMpnu6CeSGMCYaXLiCXF2f6sfhXgsiZAGjKkv9rSEvpa6X83XYskS3XgiDWaVA5edYzLJaF13T3mSsD2v6TWd76",
  "key33": "SJX3XWrYgjRv1dyibNq9Ee3LZF9krDFXgST95Rj2EFCnA9iDTco6DQWmPf6yisNR4SU4CNv7QmfRW4NsPrUh43T",
  "key34": "23B84ZsMAoT26PZ2XBsafgWYrnzLsY6c24PJgHnSuXeYU6ShtFL7NwHUQHtwjSBHuk9uty4U3SMaqq5mcV4KM2is",
  "key35": "4o8D42W5zYBxKRRaR5Y2CZ36qh3HaqXEo4H9s2pTFjZZMRtDT4ExNpHKzpkNXGE2Kr9LWPW9XH2H5wMX1kwosHVY",
  "key36": "2D5mPa2ZUiwFXt2oJVjFWiTULi3JhzraJzeKJbvgEWHZD6jyVmzZ4EhDt7qbooiMsSzf7FtKn3rT3AMBf4YDZkVF",
  "key37": "26eFBjG3AbyB69GJ2ZKPJk3zesbUdfY8P3PAeZqNdbqtEYpyTJNQsEfPh3TkxVgutKK53N7ySGYegAcL4J4DmUMU",
  "key38": "JcvEoiaMrVbV8FZ3wjfKnw5yNQ1QfBZkW8nCzTQibYqSfJRzg3aDvpFUYs1Lfnkrx8ag5oiFNkiZJCPcVPcbYsU",
  "key39": "49PAALpTYLmZw5qQTTDMsieeFhRdzWi9yTRN733wrS8ZsS42e6PYg48MpEioAaUfjmgV6qrVyUg3NnKg8Chaz3RX",
  "key40": "c7MstCV9iPeNNyuLFNsJFMh9xJdzkG7nenQosMQWWCjzSJmPZo2Y8XY3WneQo7LoDeWTyHCkTkoBTrWP2rAwxCi",
  "key41": "5B2KxNUqsCBamFyJJird8JTQFFarihHQnUkFzYJ2eLam65XptfczbAGjyJH6rZHPiEXYHT5pkKYcaUgi57UwfGKB",
  "key42": "5E3E3FYQzWkwYoqQsdcy6eUCjoyJs5ohCTGkP6CxbQJ275fR7qdm4XuJu34aJa6t4BknMYXJsrQQWAoDR6hTpAfF",
  "key43": "35mUj6aey6ShHdzitWMxkokcEtuaHjLCpjBA5bByaiM7DzRcxaYfNf3jgFFHgTBiivtVL1YVdF9obUre3iKsLDa6",
  "key44": "4MsLmyqcn4TFTScWfpfG62iWMd9MeT2Uw5XTnyrZpyLFTUQ1KPfCwUJDk5oy2UJaAU21YKrmoDnvvgNcjZHfJYoG",
  "key45": "4prnyR4A6zKnjaSY4EQYcgYrFsyRfT2m7qu3DkSjcqbyT6E1QMe5PgGMtyZfmjSBwfVht5VR3CgLuRdBsZ1r97bk",
  "key46": "6348ToBhKyBGki6e2Qe1isM71QFSKAuZy57V3ivpAqjF3wsYK53rX4jg7L9iccJeEzZYT8bF3juGCDvb992sqZJ1",
  "key47": "2Qh8W6t8YFkd6P3U1GhvqerCUAwbXKycdXAwefQ8pUUFP5aJGiiXJiP9e2pmjKCVMepMxUYjH3dH2meex2L9zsaE",
  "key48": "3zq2Mq6V8vwkwnKLsTzkF6Wi4PhqiS52DcQjdjCArt56FKz8SqkqjSbfFjdhZvBJtehxRBreFaWaqX5vJAjPktVV"
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
