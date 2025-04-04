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
    "5vdXEzTKCDaw2wBazCwE8AcNwAZDx42gXQmaPndDdTucAZa831NcpKrLKbqd34JcvT7aYzHAq59ya7WGwnv93sNw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "389X2dzjebXm1aJsqbi7X62yVkM1mwnaitbZyPXpsWWUuuFNDWRKKjX6JdXEh6U89Cjn15726JaDWz6TypCG2ir6",
  "key1": "2RFtMXCHXZbyZ5zMVdTboZm4bqdbjmJH94idy6q7gZw6Q4g2RTpZfMUxBTg3Pj2sM8jV4xLHRqv2FvtV2SfHssjF",
  "key2": "5tYze9MxJN2ssqxucz6HQxVu4vVTyLUHyfrY3kTNDJMGtiuLVSWSY4HytgwN7bjkUymRRxTERwMhs3jRQzFrTCBn",
  "key3": "8fwZkEEUZB227uMpwBgCrfmKBL3qyvi1pNB1bEGzanCsHdjBc4mcGA4m7yYj4TsjzjkcFV2aQFqi7MacFeseUFD",
  "key4": "5E87oiV6qj3eriCXTJNby1cDHAa8CzYVpJefQ1zRujPVqBV4rHsauBdsGdKAHtP8CTubUDApP9pfdw8Umav3VhcX",
  "key5": "4tYSUwbTNt6ghipmdd8d6DWwJxaRELhFETEFmUF9ZhvnNLsyFEFXrUDBdAPY2pqDC277rQDvAQde78V83cqs3iCw",
  "key6": "3jMAQjuDgNt7PP3pvsC6meGoZsxMV46wUsFJL3EQ2PSn2jb4aBscnnExP44h24Y2EFxJ8gGenmmYLaY4cwHXqMmT",
  "key7": "4qgodVVL5bXBdb4q855fkJ27urYQHT9vb1wReXEU7y7D2egUAQeWgb79V7suRAbbGF2wFY1TBr8opoTBoa3Kx1Gt",
  "key8": "kS4b5Urag5Td1MC39PPKr44kxZf7Y85nsNZCGmrnuCKeGEvdm4vUdnmzfcSg5EAekTGEQGaVXKgWm72FqQy7GiC",
  "key9": "36tQhjTEQYeSjFQ9KtQQ5vyy4ZesLh3h7v6NdLiasFvYmaCNQBcaJuJeCYnEPmQskUnQ8FucgCq1H5ys6u8hFcf9",
  "key10": "49ABxuM43jnANDakMxh2N5b3nchRXEtAyoxkyJdGekHetFieFcMeF1XJcbSxbnuU4cHd1ev8jWi6APw6uCZF8hq",
  "key11": "4LWyDsUhF4fgzjoXisfR2Rd2DaTFxhzFHaCSCFQjPfSwzbuoiCCPjQBcJuErTEeS6oBFdeBi42WTRVpFHyGrXmjW",
  "key12": "4cK7R8z76E5uEitMiB9Tqq8uWDeB4Y1vh42WgsL8o61TPACWdrEHNQXtpw5bSdH7HGdL7hjXz57GEq6AyJZMFGbx",
  "key13": "4Li2rUCwkh2BTD7FKxMY7FnrzrRVkYHr97fRpMYHxn5vjGz3xD85Wa4ki2KTp6BotGyhY9NXNhGpZnmHkS6nNDU8",
  "key14": "2vV2JS3wQUppyeEGhnKPx8hH3Pj3MbTVq3A7ssUudiJMKsmyMxKtW4ytRzhhTKcsbVSrdaTYShe4BA7Xr5unXG3V",
  "key15": "48S44zijysmsdm6fYD2YYvTSSprDZzJU8eJdUxGRZZtuEMmZZy8oxascquu7s4nNQtECRLujK2C5DaDQqiwyVrKt",
  "key16": "4vSkY7Ve2NTku7gKfWLswoUkvhZipbcyV8zVEQsXQPmgKiGCBtRLCZTtEzGYyCdft9qpU1Uuu6jsFVfhtURXV5Sg",
  "key17": "46j53sVffGNARQG424bX6PsGNBaWLumCRxdNh5T9iZzAWZ2eRst7ExBrVA7c3wrHdUb9hfvHNwgD3uuBUj9p9W9B",
  "key18": "4f5JGVKrzquJp1apGvUDoPUHD6EWV2VCvNjV386P4QhnpdrHQnQDANJFqrzWFhDssrW8Ha3Kt5ho1pVAuaBCpXNg",
  "key19": "3dbdzLjppRPbZL9HnQqZ1Mgh6ECRtwnq7ZALuLmBwuc4LoUj8RiJCKv4ekxVM8THvZ77YhquLqv1pXRRXAxRiggD",
  "key20": "63YFcZn6RzyJ6VESxHeqR9LMhDApmyqjsNtjCZUhJtoAwcpWGTWc7Sry5PESeyvk8aJVMtjryZtn3FQQkYqhrJYk",
  "key21": "4GGi5DK41SuxpL6ci3KsbqWn4nKnRn8ErmDXFp9tY3vXB8teUr9HiCsLfLWFd7cghmdKAAEZ6mPQrqz8PSV2V9By",
  "key22": "2Lvdz7SsoLw7eYtjCj1uQfAZpoz3GwmZng2f2Mj7WXtFqiytcraJZPXBxint3WSJuVUR9uFuAhHzCBPiAhCdqYyW",
  "key23": "2UV2BFcc7XCwHN49w4Pqk9B37j3HZy3R2xUM4GkNH6gX1qFe7PtGqFmYx6DfwQA84xhqtt68Ma34Ww3CT4obbFwK",
  "key24": "2mS1xaS6p2d6e3fHyGgSj58GkNS1oSjKroyZhWu3HyJG9eztZnHDVNVYjUR2W5dTfGkC616QF1etgjHueUizFAna",
  "key25": "25EjdszpNVfXgijJc4iF6hACm89rHUbBx5xAte5qpBckmdZAbQVc1hseRJ1GR5eV8YCxuzofRfbw9c4sDy4NJL5L",
  "key26": "5nKVCZpqNuWKjuEkyukcDzNnZ7GP2cZvfeZ2ZBmqjeDHMFKG12W1uX9X78DC3Hh7KFevz4JrSXnLDgQY3JPWNMxp",
  "key27": "4njcELXdv134mRYE3w4JXEnDuEDx8kVihftdJpRT7GhN4btwKqEnMqLNiMeqQ3PMYAoAFVgaihcvWp7Nui2HtNqh",
  "key28": "5UVHyxdUgccHQjmmgwAW5iEVJNoaeFsvphHxn93TaHMw8jaj7e83QFS8jXUc1B6WZ62vz7vVE9QqmF4yGqVBzsyV",
  "key29": "62EMpYyZuyP2jWb6NYfK9Xdtqd9g6Q4dyQddxw2Yj3Kc9ekdLUp9gVcLv4ddTbTwCoVMSWAJQpqtcUNxd9jCj8Bs",
  "key30": "5gop8jSFf2MrjxdTxUypZfrjjosrE4tGq7VeQYToM6XJuPTPrYRJH1L1gCZfGDD5oeUyiT9jkHPcmGHP24MWc2iw",
  "key31": "2XnUoDkQYFdrjticXko19XnF2cvjnQjefV8Dyyf1qSeULCKLnSgQRzcrnE5fEYBRfMcFCa4wVN3ayd8LCwmEMeiy",
  "key32": "2bAy7EWtz3JPSqT8sLhWJF8ayk3cvuWnXreVKsr6ZibaraSjYbBTgg1WGn2ycNwauDxN66WGaCS8AhqtRzrQPJW6"
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
