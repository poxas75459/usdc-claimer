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
    "4NXcyQ6nwD7SR4iLAwyMNui9kSKXDPor6VdwSm9Nfci1AE7h7AjWxXocVW7prHQxx8uXmkvfupZ294hhydYyuCg2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4beKp61661pCEU5X9j3GLLxBCrZejrd6eqELMcyycTrdGQYhRm6bX3L2mNEM1qQ3f1eQ8ntURaoSC3si5qTEdG4g",
  "key1": "3VRCCkVx5jnXzEyvUTmFJQqhHMLHEXbFSCzELaNN4uKLX7ssVaa27vqH4RqxyVsif2Z6jdgTDYSJc6K9Gb2FGMau",
  "key2": "vU6sFVtj81htX6cncC9HcbUN1BUX7LSusct75QZEQbnSMdbounXqNnQfaptkZNHMA4o4BN8rVNUwjWnCUF1XZKt",
  "key3": "Z5fPh2MeesPqDx5VMNGwKDxJkSXx1dRrb8oKW4ed1AoVgn7Mqyafwpv6ok1YtfxK4RBQgyFTE7rN4xke3GtG7Sz",
  "key4": "4fBuzqtNQ2RCcWMeYipkbDXtwtmsoAwu4UyCLfZXRJ2dFobt5PCKfvznVHQNRusq2usmvuFMkPs9QeEAd4HX8hdo",
  "key5": "5QqyxrRKfLTBKdZHPic1fmdqzesxVvd2HFhWnATPxz1oqYNuKr4HhDBAG4zNF5cqoNN1xQkzZcUiSRLvUJQTFycs",
  "key6": "3FHY3JBQocw854nfkif9bhzSwqjnZkwqDyCeK5BSvqkodg445vrMohdhYRRQFdJ1kmiywJTtAAKcS75Wn9X58QY2",
  "key7": "453vjMtF4kXAbGfPmnLT5H8DoCnsYn5V125j21um12fdAh2DghiR8JCS9Y9yki4VPj7zVBjBqS4CDuhAzio7bM9e",
  "key8": "2L9zWz8ohJmSvauTUTmHfgiFDmyGNqKM7v6mwTnEL9tvr45ksbwLUJqbxbcskYushYokRTzv6YU7ZuKiYWRvp7H7",
  "key9": "2CnCNhDa68KJkHNkhTkGtdiv5fEQE5Wv9VF6AGh5W8EYGCP4pjWG64dEVJYrQRmyDeU6Y1bSp9tiQEX94fWqMRzU",
  "key10": "26FTJctny8eajnpeuucCwdvubzNQTxmDVznFm34p8Q14Kzw4R1y6nyi93WHD4sSbPXTngFPgmPGzrhWfejaEFrru",
  "key11": "5V2w3Xu4KZM5VXKcPazzTzPA23Vx5ojFuc53UVW85KzWfm5dHvh4YVxZgZGKh3vp1DcBGhz4LWeukUgaEv23WEEY",
  "key12": "4GMp9fCn1VkUbMBQwUAAjaXD7jANgTgWBG1BkfrFA1Jz5YB3yc5qrs6kTLWV9SevPCufGQpj4cp2GBNiVVSxeSHa",
  "key13": "4Y1ritVBxBfkZjv5hvu2CVDAm4zuXZYd9pKDeA3bEvTD57Prf41CiayhEB7ibF9iA3YTak5scdqT5sC8mv8HAFiZ",
  "key14": "5UTxRZLzx2Kd1o31AiL31JYK3LZj2AZRhNRtfpDokb6pYb8Eti5D6uW6yyFvj4fVvbkxU4urtzwJkmJQ4AMgMAp9",
  "key15": "5mQpnRRhFTofBe8Ke33jMriG2m4h3Fz5k6qg85g3sxtbvp1n5v9DbxWewgaAbtbWQebk7kXKSWACPeTf65CRQcQu",
  "key16": "2JJrKraYUU4fTXELtVNeBAZ3DVkgokoM1qcbHDXthx9hvoiuapN1Xf7VP2y59XuVzAGLpZbb4GSvrZ5JSFkxd8Ya",
  "key17": "4MnmQtCSB1dWPvRPaYGMmrCMpMWUzNiKUmnpQ1phUxVYworWtoXu3RMSwFycTmQmJgXra9d4LWoxPYEoBcA6gqPT",
  "key18": "4ZL4EzzqwiFSjK6UbQcvYxxthN1pcW5H6HWy94rrYTjtgSiah9jSSdCiaFHC7PueoUpJuf4cRbin5CYertg1jVfi",
  "key19": "Sr5agk5sehgG7PHH7dr37huHuAwSdjmF1weD8ctHpdSiuiCaNRQwTXqSBVff2G77Vugta12WYJ4u1jicDsY6d9f",
  "key20": "LQm3e6ZxtuRDaehzuHZWthEV3Na7uh5JCar4L968PgqtbpHhTSWC5mqWHZ1yBd2zqXzRNMRGyeufioRdtuc3ycN",
  "key21": "3xrn8nTo5iJpSAxbk16egqoeW4M1wE5pw5mZZXtTi19KFdP8YrQdHvK9E7AjDDs9mNJ8McEotmUAchEnbhYYpbv1",
  "key22": "2WfVWwzhtxfzbt1jCHhA6vVgpkcuuutAh18Z1NVzKjdULDhy3eVtbxXL3UqmFWpFEFym9Z6fv4UKKQwQnX3vBncX",
  "key23": "3U8Ns6NYsQF6KwiUBFtipJcDhuuC18Nd2SqqLuupdcRkT32wo2Jp2F2ZiinUCmfL3VY79CTR5gRoQRUy6y6RvD4g",
  "key24": "34deYPtXMGxWv59twkbmMvTGAPfpmpDPk1yU9YePMFMgb2fShGSVpSN7eHCtK3PEcoSJbtjf2mTrPHia6TEM3sff",
  "key25": "3CaMKxN9myxHZJmes1UQ3jngjd255GYfZ2ZaJ6Pmqv9HNGkV1thr7KeSijk1cER4JhUd8xRthMPV5bLmGZNismsw",
  "key26": "43VcCPbdDQu8f7yKDwU3WM4uk9n5kVfxsVyqXTjToEvjeoQrZ12Gwek3m9Ms12PsXDPhTkvypMhfJcBckAu7CMYv",
  "key27": "Bc7RLXvFiEz1uiZPWnucmxTrsmASVkDv7XF6ebF9YGNk6TQ8snSV6Q9g4WQBry5erGGLJpvdDoDBZu5rrmde4k3",
  "key28": "5cEHUHxoAw6A4FzGRCPpzL18rJjmEjxX44KXjVrEihbPPzLLnNo32Mcikh6KDzpPc1pyfMdEXQ6JobjNe9HuukcH",
  "key29": "29Y12xSB9E1HvTrmMu3xazEqbhD2be259jjiTAEWJ72RQEHNQU3CHFf8TdemMfN3NLQKwnApvwG41tWe2ATdWUNF"
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
