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
    "4rXk3zUHebs338YavjfYwfQ2SSYzAd86WwBJFQPjTK3rKLBkprsWE3d7uiBtCg8ke28iGGbZyv4ZvERPbMPDZFBQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m5mizgkknXKE764FuziyebJGX2KTVB1gQ66gAu5gmyFn5MHy2oF4He8jMzghdzLRTp9TiogXqdKBoLBPPnJxrus",
  "key1": "eRdnobU2AmjTz4ANV9Sg4X3EsuRWNKo7Twg1FfwYaegEEoup2VJY9UbDYAcYRYoFJkyeSgdb6iy1F9qEMgoA5To",
  "key2": "2AgxozeGv68FJRp4wmWfCg9yB4aF87zaenGH8TucpzePpT7ANb1gqh591tRGJce3QEcJzfAhXbwWEp5FamTmWqjH",
  "key3": "49azKSHebM2uCbXUSr3nruRBPfQDRPRyjCwibHq7fMMEjpq4VaPFczBhGYaMTDLNTBn1w7hyKsvhXDaYkibupMVn",
  "key4": "5Hs6zdhf2Vg3kR6aAFnZUbupu1v1A6GYDXjaCuSCHRUkZF1ehz1NgLYJFrpTVgm6s8hm3BEHR9fNkiLbH56hxYXP",
  "key5": "PkW6h5YDfiRNDkLyKeWTECujfx9m3md3MicCLnoWNxmMPGPZunvToFuiSwDGa1Q4RM4yrXPEsXqBZHkQbaEXUyQ",
  "key6": "2Nf8U1rw9NappbRvFcEbGaVSE6CXQJWmJxReJ397fbVFrHjBjCqmkc4kZumDGNgpPffaQ573UZT1hNnw6zTcryHn",
  "key7": "2WwjFhUD5YoQrnCPwh58QHxzSrGtaYq8tALhN8KgLofhVvrRL2tgdVVot4DySq8J4y7vwWUW14WrKrwNchjqXGgT",
  "key8": "2SYME2hdnp1pvPKQwDHqHpxxE57iE84nmimMKDsz5x9E8VmQHoqWUV6WthCG7mxhdJtk5m4rF3Jjk6TfArMSybqi",
  "key9": "2EP51LiabxZm5DKVk8dwGHKV3cZnx1GotprdPN6Mtn42BNZ2Y9vRKBWGDCzsTTuGUtaRYQQ39sECSz3oEP9tDKSB",
  "key10": "4V5YpheCZnRtb7UTenx7uwxZbNUu24voEKsxcDKAKSSbMZRMgYpZAY1eTDH3yBz3sBsT6qhKftQTGfz9nSFX6Bqt",
  "key11": "etgfDnjnDQrfqWKfEw7v5fbw32Wbz7ULADdDrztG2gS3dPZc49JQSS3ecW3Q7ege9FVGmoAV8MLqNQYYsQmDrqp",
  "key12": "3eoirhHSpTUVXtaGsJ6dSHiwUsHKpiddpp1nMyEmtK1HxXjTgnjCnn4XkJTNj3EbfqJvi9CBTDDEdMGcokqto2ud",
  "key13": "2MgekK6Ff6KsWdZvyH98RWHmJZnJKzGtUwkWTrA6PKsDwZRpyvN5iKzJ9iHC8AbkgsWLCieDKmYBAssjoLp7dHod",
  "key14": "23jzJToEg6uLD7f4xBLeKNMFyspNFKzczv5eyJkBQ5ggbz5hnedGnyeu2wUfTNFzr6DuVAf51Q53KZVLNsymUnoJ",
  "key15": "CQEkV7kZ7Cn8wR68Th5ZnzWw4RZTQtuaRZFDdAmgFXyoaa28mmpLscDyx1cf7rtfQ9MLHuXjiqdmE7nmps4onPz",
  "key16": "3YDtkAxmdJLbmHYAntPAhs19EZ94JceoJA6AdoQdhYGz3mQzzLGh9DfkHHDZyMcqHEdmNPAgX7qwa94bd4rhZUes",
  "key17": "2Z2JnHrYcgwsgfcVsQzC1E1Sb9ta8jopnUndLXUfuo4NrvQ4NqANLGrbAh4tvkPxCZBBY49L29sJjPKfR7PP3xrn",
  "key18": "5oxC5ByTHW7YNENJeaGjn5p3piyq6AVRHJCn8sZUdrQAkqMqyscVDyczTtCdAmhPDwzJvvkhbAav1butpG2Ms8u8",
  "key19": "5mwTMJUWyjbpc2YYaJM54fBAjESnkKYFBkt5J3d6V2A4TZzBFYA1YcokfQZvZYXUFCmi9Z8A89AHFF6RSRrPkuhc",
  "key20": "4FveFSVaQ1V3kbqmmfbYFV2QxgG9aBw7wWj7B3aRi1ay2MQRV8mxwkZmYjFn26Ti8bQVDSucN39mZSBR4GPUyDgm",
  "key21": "hgchTC6stZKm6r2eVpWQi5Cb8BS32di8V92CQPNjU9hdG2JbY1wMXqGZJ7c6UxyyuYGV9N9DUqPJmKLsfToqwCF",
  "key22": "2wgumE4hv3riFdCRZUhy9ENAbkXXxDMrYtDRxq5FpspeNuA5EwSZfSbotXZheAfftE8uuiw9KnsN9vtb43WhuEaB",
  "key23": "c45qhasBJPRFAohdNzG75SD8AD6fdEariHeUSDvxQk1aQ7LK2ARGhXS7nHanPeKW7QardpBKZUurZnkUrL54orP",
  "key24": "5DTs9CakXiNxzhty14p124Vtp2DmqDaa4CatfUtMr695259JygiPUeFktZmiiMCDZ5WEqLqo1K84UwTXshRNohQ1",
  "key25": "5kGqHqf2socvhJkwz5j6U211nMHrSexktrgAvtNUqK1edHQis4WT5Xn4cHdQH5ShvnrsZy5v7pVofYBCu5ANVrMF",
  "key26": "2FQk1mQ5anPzzyovqCtw52rejrPnWsUPDuNvVURfGZ8epjdUEYwgzcpRPzLqoMaqZZ4sDiRjzBeRJxtiZPzyvquo",
  "key27": "29FbTB95rGLuegYdqLjWaWva8X6HH7oqmazFthUJzmjxv1iXmZJyBtYeiHRXf7KCNtKCsSD9DmSMKq5Q4DqkUrcC",
  "key28": "DqKK1RRD4GS3gX9UWrkuukfvaEcM3aaaDXWdn7RRweSU7qTaUbRQ6PmpM3Ky1Ec21fzbsyyQhuMQ3MTKpe5pipF",
  "key29": "2nUmQwHP3jtGApc6GNk4CymxXEfm4zL2CamPZjyhYigwxdEV3xYGCecz5MAzE24Nho2HhZoeUUezfWpDH7QvW8e2",
  "key30": "2cEF6bJjc5wXn915PAaeuduzt7Mh46miqG3vfGwDZTmzfC5YAvg2jGQSRzYowTUXiAR9czEe18qLx4wU6vPEBPeZ",
  "key31": "3BW4iFA5s2zGoHYT3pytDs9VgvQmyL2R5CKG3hrwrwKhwzm4nMScSfi5J5bqmT4jwvWGnx4xF9J7CpQZBEkrZSv6",
  "key32": "452ofX1wkvGZ1g7hnviHPW6yp2Zxeke2Q5rZHKMCEx5AyfMToq1CZNisqRdXsMhUgS7ZQUpaNBYo4Mdye58cSE2v",
  "key33": "swGDiXnwdT3q42kigjEkeqFPfqL9kshcUSTigzbhf2miS9J2NeoNnfeB5hNSVLW5xGoAC5ExfZTzJuh48Sj8aLA",
  "key34": "51L34Tt2o666dks3putiCdDvpf41yQJtuK1MnqYpcomzUCL99DV4mQkz1SStaEqEF7wEtc3z3zdubhCio3PexyP",
  "key35": "5xRDsUKqp4bp8f1kXa25EbAJQakonQ2Ww8Fmms1DDSXC4bodqcz9ohZpHnTT2NnqgoDkQDNeYm7tx9tQQhzJcxBc",
  "key36": "62vcCoEo2uhcHvX852rHUbNtbc1y58nNj4mK1yaK33TX7eygzeUcyhfxdNcNEPJBNeK19a8Q8AHUXRde1DxWQWAQ",
  "key37": "2wBTVnqu533HwC1ouFJwuR1wNrkGRYAL3fNMcEpZWW8UPBLo2Ej3bDd5D4jdXDwGrgetCHp48CZf4e3Mvbt6jqf5",
  "key38": "5MHVbqD1C3PqcgABXy1hN26YsD4vggyYF7r4DxKTVsjZc3vQ2U9vDWDsAyfSSEuA5ZuJqyutEca7N9igoRsAQiRD",
  "key39": "42aLqRZnD4mvES9mbcj3tqCtf9MLvKiMMKqHCE33RUCU6DbS5krt2pE2GwPzfJyfZPsBZ5T4gFKQRCHpKTaKFQYn",
  "key40": "HGkpTvsWmLynmTaxnu7XhaQrGYSfSmfjWQfrkRQGCyrgmSFgUmLHRGqhFWeSnmNnR6QbC121G6Z6b5EYmGQi8X7",
  "key41": "4H3q3VsLS7AWEsLnvJh9qBPB2MzqHbf2QKQ1BnsY2Wc7NWiaeo441dCFE4R97o3vL525shXK3Tg4jXzMDP3vNr6c",
  "key42": "5CW9moyn88Cnwzforv5cMqsJHrdwv4dc4fT9uR1QDva5tKmuGkxaYmzZno7TK3rPeWUZrn1Fi48aMcud9ZQrvgNS",
  "key43": "5MXJp5J3pXb7wtcvbsW7g5XdnpZYvZbm5DL5bv1UtUy1ifgDLjRRPGthU2xfg9jzuaRaNCTiwuywzyGS3F1T8hHc"
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
