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
    "5sDJ1Gx1WbvZ2nGJ6sbCe9kiXPYqyG2DqvFmPSC9bQYyL6LNpNQrmVQNpV5Y9UcP6aNSDLiBjqnRmfmmLi3PtKdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46QnoQP1ak7c3JW54LQYhBWFdvR5rLWj1XPzjaDTg7D9Pmj5Pwe2TKdk6H2dzhnMe87urLwugVCLLJDrjcns9gNf",
  "key1": "3u1j9jPhwQqE4petQjZ1tU6yV11vRrKrCkaDCehsBYVXttAjQCwwBgYPvFgHjUkJDbYJYDWv3EYMyNbmZ46yieRr",
  "key2": "59F7FLiCPsxY5CdBFdihz68grZdR3HjYFBU3hHNvRnPd93oFCDQwrDF4qvkZxDipGzzx4zygwvpdb73pqELBe6Gd",
  "key3": "3DmfhDejTueKxZEgEoUPUU4nnXh2AfxcV1jX87UhN2CDWbdKnvnGHRteUZdaxyxkJgfxFVTMZ2H53dYXeofdPem3",
  "key4": "41fG8pNMfonv8sAsETX5E8KQkXoUkptL6rY2gDKeTtiNaVNsnUQHys9AWQaxCw5rd694aDXgzeSPPKm5AgD1Uh4Q",
  "key5": "K6FzXeXopy2EBUPYVPs1CQTKAE8VUNw71TmURrpCRQeN4uxkXs4i3C7nj6KVXQzQ3729WowHkbfMKQv8YAPPMHx",
  "key6": "28zZiuyDJSiX2hYcY4frVtZFbpdYi9pwekdhTwtji7u4gBrEkmdhaLniwVZNWvxS3FUbr44SGzyvq9JWic8yVxxb",
  "key7": "4pxs9EWoKhbiFf9VGPeeou8Jcf7mCV24fhuQJUXDmSJJLzdVFxAmJgDVr64w2rMXm5RRPJeSmLztkgj8efyqELFe",
  "key8": "49zWKEKuFu6Z956hmBAQpFTDwNvrmYdGRtSErP8hpgWHduLgxMUFGpCSGiGBqbHpmfDon8ena77UZJeyHxHDGbiC",
  "key9": "3X5EuKMRBx76e9XPBgcfMPpT6HWyqYt3WKBjZRhAm9YLbxZjQ28BtqwGWoa2sFFMdKwzB2peuzXJJ97B1AqnGpHq",
  "key10": "3opamMSA6vQCiMK3Tn2uFcnvA3NUBESm7wdu3DytucmVUoxBCdsN5waskriG44ZtiDzhUkY36RXQBPbADEu6Tahz",
  "key11": "3jCj9UBssYgUsv2LiNWu9y1npxwZov2Yq2gM7FWpb85GQvatbdavJZpYo1VzowghAKeEVEXbRxUSYmjfSL6db11c",
  "key12": "5PkQBHJZM1KipgSJNjcK9bKGq2BHkJuzb35AYMGjy2UWrtu8ftRw9unqUJW1zTW3vpn7a6spFd3TSb1FARJLeu2k",
  "key13": "3urBsrJCGK4CeT9stVQdWTwFZ8zDZUWdJhszUwcTxGBD8bx69QwxPZ4PnVcAi3f7jNsSTAfy7WGJ71U9m9uLq94W",
  "key14": "3C7Fidq7G1gceYujUFBwuNUH9VPh1UwRoRddcUrpFnd6MAXnZxsbX1mUZXC6ABFsgs3jCtFzQP71WWf7oAMezhmU",
  "key15": "Ts1TpsdiJmwYxt2qFLUsYZ5L4wasD8athT3pxQ9JZxbFBNCsQYt5vzabyVZUgPgEt7ACQ8jmAMAvEhKqAo88nL9",
  "key16": "LVmMMa8kb6JQ1Zsu4Kw92LgXYNnVK6fMRshV8UWfJqHqk95zkRb9pg952fwz3N9PoYzYqFhX1KZHvXxn1xiwU4T",
  "key17": "bANdUN4eqckLWNhGFx7Yah6mYEP6JqjobLLo9r2bgWBhAMwuqSZJxSqDTMFPPvmzotytBfrMrXktzYzV8Rzh5Fi",
  "key18": "3Wj94tYyFKEKJ6bN1AtU8cJvdwtd9nR6J5vuSGrnqeBdNezZvoLiUEU3kz1gw3Eqd1VVBvsbGajjXEiGCnTmgh9C",
  "key19": "4ZiWAq1HvteFP2xVtrsbgj7tL2GPbfbU5CnxhnBXh66YcBJSN5LwX4EAW6S13dt1fHaDuXez1iSaHS8sF9PvpZ32",
  "key20": "4aE37JpkzxGDdRENthDb4SEfxTbL5C7izEqxJgxVgHRZjaTvoMqRskXMWr5Sk1dYwukJhumVVoVNvNo2AQyCD4gd",
  "key21": "2vVxeuWBAqNwcavE43p8qyWjTh2Hv38vgAKLSBa2XvM3vGQLyWyVh9R1AHBrJkFzztSghyLsDe2Pye5ndA5ymiiA",
  "key22": "2oyb7m3oYZiHhAyGofW2gAsdi8ABWoZFXuAyxHYLdSvskRQuJG8u2L7XhvLFi5YcLoemvCSJjJUfua3eRhkzTcnX",
  "key23": "3o8dEex75VJ9EPjnCjYdPZrF8MbEXfiYmYPZLLcBhY7BmKCi814iRjozkeG2QdhSTUoZqjRzFgW1Q5UH6RfpBodU",
  "key24": "2qoppoxrfUjW6ChAkPQ6nXEZ9pXu84h76349gNyCStW8JGuYyHmyabYuAQ5G9Kd1ngh6QUaboTH2J4TnKeSGtm9v",
  "key25": "iojWhpxoMyadQ11mori14yJ1aEGm7g5Jv1XoTdNedzSgs8ytExnMV8xX82CaZAMJXAWBAYAV6uCxE8BwdktjVA6",
  "key26": "5xiVV4gGisHAB7babAT7EPusJB3EP1ijnaKG479YbAgt9D9v7ENwywnDsgdpNNPKr7ESaAtLV8qducMkHkhMMh3J",
  "key27": "3rXyitYX3QHYpiWTSUFFtKy7qK1YuYcT395BjpZDTCwTQ1RRKmzpUdPMBSNjKyyoBXiz4bP6BqSvKhE6PwB7WYTz",
  "key28": "5c2mh5oWR1eT7ZFe4nRPh41h3ydCx6NPwAkZ5yZFeZaz8LG1HC3HebDy6c2gtEBB4EMQ1f69K7J3tHZzeLV115Ld",
  "key29": "3wDcXcp4w9bB2GwCz1CBgEnYuUiQZR6pchpjrTGqzWov8hwL3JqbGkHkq9xv66wryXrwwpjEgFAeq2Y951pak1qN",
  "key30": "3FeVZSqjfuCiKzv6DPQmjqWNSsQ2AqrqfTCeD82Cj4ZKuXPhcKwb7kTLP8U3TXrmTU58R5yADpkvWkHpuVx7SBV9",
  "key31": "2giEGUTVRWMJHBBhrRuFRzQnN258AVbc9Ye99TGWC79Qr8xig1aQBHJwh2YvbzPLiT7yLnfuhvg5J5TenfYhGvQg",
  "key32": "59yyUSxhqf6UgiGRC9GVZHX8yPahCAPEkStMraxd5Vcqxy7qAme5wf2A6UnB2MP8jqUH9X2XGgJnxqDMSrfia9pm",
  "key33": "4HuwDVoq6yYnqgERQRFYSTrApa7FvZtp8MEACjDZRAJ6QNcZNz5AdmU4te3ecavLsDQN5DpnYLFr94fM6NMhdzdn",
  "key34": "42cTeQg8NTcyY7nYCTkfhVsBQrLNcUTxQiejRw9bd3S64FrQW7Jf1rShdfqwe4JwneY7HoLHYdabgaakAexwzVhH",
  "key35": "pNWVcPhHk4JLgqSA7VbNWcg8o697hffHAxJYeRaD5S9kNmYyC8wKsL9seuaTf9xqXu3PuAjqNLRazko7D3VWaEj",
  "key36": "3VoWRrXG7pci2bKLMBtDuPo1hNjPMSaFtNaWxeojVgqxUS2RSvC2mFKLnRxMeaBJ7ACBjxMhCrc3gvTkxHn9CqH",
  "key37": "4CibktLNSqwqaBpDVc6gsGJVCnV6i7vyuW62vebYLsLEuM2ehQpqcWkUXLXCdEN5RbpojEskLCkinidNLf5At9Db",
  "key38": "4JPhujLG3XCbe2eKPbqJp4PKUKsjT9XrG7yRa7DgkzZfW6EgRy3mEs1y6CTTzCcHELPdc6WA8hzWKejRDhtXnWNT",
  "key39": "5yJdbteAqjPa1MQdExMK55fZNbZ8dkhkUVEnExGXZEunLQuR7s4zT6t7neo791HeGzJoPH5Wy7Af1a2UvPZNvRKA",
  "key40": "4EM4MaZkg8UV3nNreWFwS9vXebkdEvsAY3YeuKdYtWvRYDoy1pCEgR4bY1CGsJ4JyqjQDRFU1FeatnAdQ1bNAw8w",
  "key41": "16CJQaUfktzYgioQ6kA12abtCmb2FEcZEhDVX99cpAeiHsYZuHVJE4tr5V5gCz2bQb63JKsXuq2MEsG39qE2dCm",
  "key42": "2A5EHjyaXS75dK9t9XcHyqewFxCyMaJBrEcBPpFq3jxdUPPAVPNs3RCuA7ZkNsxp7nAg2ZUW5TAbVpYnFxPiqZoD",
  "key43": "5TAUaAeJJoSyanWgiZpHhaHXVraW7K6EreP7xwDfsdpXPSoToAjuVwGZUcmyS9CGRnFjG2xY9R9wT5ynqApHGxn3",
  "key44": "5peMM7oMgqyvWG4CDxfpXCbdfZCQtcmL6mENvYRMEd133zcVxjbQRhrvcDKjBCGArzoFSiaa34pM7hT7uppaNVPP",
  "key45": "vZLMUwxjxr7yy9sGyNA3pv2kbAwhLGmMgX9ZBtEquv9Ze222bYYZ6mvitMysikMZJ6VmaTLADmrGpderNFHgv3P",
  "key46": "2W3eyfqL7yc6H79WzWyPwqgyoSNJhVhCRcbTd6qKcCy97xjyc1ehwa3DN4xgzhNcPaceVTDNsukXP4UPtK4D7sbE",
  "key47": "486TxPVggZApSvXnSrxFT3wzV3pE2GEmChBeVzyydUJMT7LGxoXeUPTGdrKA1FDuWLVfK1zya9fZYC6Xjprz7rP5",
  "key48": "3ouzvAFwdS7W1cXJagFoSajQXEBFfoShXWRMvBfXYmwYLdSJnm3qac4xXnhThNiQ19ZRxULo1MGtMNdFUc7uJam"
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
