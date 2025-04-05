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
    "4BNKKdT8eKuoXz4atWR7pZUYmQLrRwh3SzbGmxgAqsSipECSiEeCZ2jqUmyWr2mPshtQRZ2ABttcTthMCT8YMkQF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25Py5RCaCLj8Qk5yPDKYXvXJvEYJfDM2wuk7DLGyaiXHwbGBRFNg9oBmJScTLWV3VZwvaXZKK6mhSkUS6qYtNHYD",
  "key1": "62v1Ec32tEhWiKwyrLdgPstC9U9TsAin2UvsLT5ecQ72ge6fovcAN9MHtV1M6LkVrTdYdyT5yLmdDvcEi9R2LSpH",
  "key2": "3chVwFQMxN14tzcxGGx2MvT8e2nToTVrsx6v6GGDfk1MKNddB8MHZNtRSUKeCBVNqXVxmU6ru4xTrXA1yxbnDuAg",
  "key3": "3xQNRcT7Nb65Cv5kV2RpGty5hm2aNaM9VuqgvusAoitr17MSbTuSdsbxDVbXKFPymJFRXTG77AFW9KHsxEo9sCvx",
  "key4": "qnxsUc6rmi4wfyrHx4fHofWFUyMxbikdhf38nXaD2Erev87gKJbKyaSMfK1mctGdmyv2HpfWZpNzqfw3sb6NAN6",
  "key5": "3C1sgEQuZ6YDJt5TZzanpmyPLs7WCsrU7wKrQHuHtTgDC2Z5VRgsdsA6e3fDUXb5sTnXmsXzSD4aPDmSp7EMF2Pq",
  "key6": "3WkpFAuQyunGt9C8Z6SjyH2soQ2CrK46pvXg1vjR7dGTESKnWQbqc2vJaWkcsF1yLWHKpNRbDLR1tZZgXi9asX8C",
  "key7": "DJd6w4TCe5rtmfHupt7JSAgw6BCgGDgbDeEofE8xcZqgngwG6sRGnBHN24BQjnqHjcRsZ5Uo3dMxDDdVZiJfUHC",
  "key8": "4tKFiKvZMnbayTWfiucQUvGXuWZt1tuxFaMUDJ2QZEP5DxU5c98HAvY744fcaFin8KZRqjGZbv7ZazcZhXViVfib",
  "key9": "5ZsGBZoBqBQbjXRsRGAdq8gRG9pNjUY875TtQATATv3ZhPFyzkhUrAVQatp5NPkKWTg8baqS4VCu12yh6rzCFS6A",
  "key10": "5anBsLh9NAK2FgcouYjT82x4dHW7Um5KhMJT9RwSeiDX65GRfQjVvwJpMYEpajAGF4utUWxKv3P1MSk6PmMZjn2k",
  "key11": "pytSvGVQtFtbajZFMZatBQN3pFhXk3UMyLDDESqgjUfX4kXxCPBc4Lp3GGsUSa6qSWZEoQQXbDguDZtv1MPd61F",
  "key12": "5RVMvixFjQrh5rqAg6QaKQosxxXjts3byTLqBho3E8f6aL7LwMPmw2rkYnwZ5MVQJwy8JoznHDmqFZmP7LZyptZj",
  "key13": "4kYLEaDHqY7pVtT1SeWdt3neAPVtDsvxnsiwwm1Ks8i3CyHCz7cXubmV5BAv1Y5Lo92ducCmos7k77RrckhPvSJ4",
  "key14": "5CcUbiWpB1kdWr1X1H3z5AUpejn1pkP5jXUjgpEQmyiDGQdoKHXUMD482VdGhZf3ZyNRRNojCvSNjpGFTti2rTAs",
  "key15": "45ws2Qg1EoiK1FSGwjpGu7z15rdq6cD2WoRwVoP3UYgFhz5uVKztStGDiDn5nVTcR8mGzypHD62PaHXsU1VC8NVw",
  "key16": "iopbe2e48vqpev2YMUKToonnmihSGrcU91itEJKbmLkKbHDCcrw41ZfXu5s5iJxAAFUSeWJWU6gdUYjyzLqhzCf",
  "key17": "4NrPgSkniUXnogZkgG5nyHWWJDbLu4r89T7LCt2D5Q1NxBrBjEfJEatyMJbWrBoksVbHdkND79c6Ao48KLz22TGj",
  "key18": "KUo6hmEb68pfCWnYv6M3NZTGfXFZFu3Ty7go4hpSQKGzn4r1KeEXCYByLaJEsB49KVs89h8T9rVARwojS3dzYZK",
  "key19": "5bLNaiBbJ76aNWcQ3aRnmtC8F99VYqV8ne4eHXvpcHaAgN72F9FNCU5ApNqgn5NvkKn2sbn8uCMmTHP7GD7RA5Ks",
  "key20": "2364oB7Gwp316h3ALhnpzsUSY5TLf1JsRJgxbjCnmW2f5aTyR6rCWBHqVuMjcuJfPadXD6ngvygnhmDpdi8MVG7P",
  "key21": "2BGPpeHRHcseYLBidBW8RyoFNQ7yLMQyXDPsLvn4Mow9mjEu5iC2zbvVH11hPcHrAXRCvejeyHibKQKAGLs4m41e",
  "key22": "37rDbUw3ynuQthg2JqpMobDgCkWqK6ZwyRHSpHpzVcg3ire5v8yLSifTUPEu9NQELUUi9WQG4AHrUHC4GVZ9ZFVF",
  "key23": "2FULKNKHNGhBeKA59sfnUXpB9tDMgXTVqjvVg4xSycDmTpyJwRw7GgM2wZft6eyDknWuQokK8aWPBntMevpCNRF8",
  "key24": "34mfSDjoaT9o3nKS1r4V19WHk1M7aVSxFjoG5qH88gm4VGhSSLraNKmSA9PpMrH2LnTzB72vwPxyvLmWC4zrLhdj",
  "key25": "6wJxaXp23bhU66DFEHk9aBRZmFz7oHuK6X2vQoSGyz7e1qffFkbMCWeCLL3RcYwsWGyedT5pwTq2SN6dEtrjAqV",
  "key26": "3EFDUXnfrPw9gtDS18paoP6WbE79NyHXRc4VjMaVVv3SSVPKUPZ5BPbMM6DQ4o94hkHqrap7tfawAiA7K5gTNfMt",
  "key27": "2pRUnBkySyT6kmk7xmLiBZLpAQzwHmavSxNuDSemt7bpBq5E36hN4fMquij1nceQVMiEoran2SHqxQYBckRLTifB",
  "key28": "5HZcWq4tNZhVwn73xJJ6wzhuuPx6JFFgKaenRq9EHWydSYAfcUuJPNwVaQaAqMoyybFoL4P1TchKzBsGR8AHtzo7",
  "key29": "4uMYNTyRWJr2M2nEQ3hf7RxcuyaGs3chh2hXgRghfA3mKopkENZPmjzDG9pmjuykDkxWQ7paGabdxvYzvNQCzCtp",
  "key30": "Y8iKS6VKErsd5SFMdbJ3raHAcGk8w3WYrUaQkiAmPJ8GEgbx7MsSEKRjhvTEsZFtaceAffwds4tRuGRrHPRgpfw",
  "key31": "2urEd64iU6YpDSxdgn7NLwsGfB9ZfCMQH6J5RnsF6q4xroPWkbN492cSVBhzgGnFnHgxduJEFRomEwMQLipodmGu",
  "key32": "4Vi9RPRL1DNZGgkaEpa31bk1ZXgu8DXbc8RD6rY4r8c3oBKqj5BALBFfwmGfvAzFstbieVXAKw7iwDguradADrPh",
  "key33": "75WYSB76CjMbXxgrZyUk8Vy4fHTHgj7nJEG3iRfT7eJH4d1fU2MXWNNQAgxtwqbeFpcM3751pN6yCw9TLA4No6Y",
  "key34": "3xevYkVGyKjpkgL6a28xez4wvvExS4HLxn7ZPQvNVfvU2Wa6dJhgoWPQN41CGHk5PN98yEi4LvCH1BJpGLFiLieU",
  "key35": "FCqR5gdP9Mn1ZBDr4DMFNH1HNmbwj2bVCejbBgCxffefcVTgj99eYzqzk39zrWHKTMgdqLyuszJ5V3dR3jAkrfC"
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
