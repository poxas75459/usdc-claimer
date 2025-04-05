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
    "4Ey4B5HoGc6fB2ZrrNpb527fRv7zKkXAt56RkjwmiGY5x4fk14FbCHyUboM3bWG3g9bt7x48CPCQiyBWKCmhSDLk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38dVq8iuoTtMyBpVF3p1HczQrrDRLMQGUaUToUtQqp1KAgHbwZeZ6xv2Kmiy2QEGgooPSHhnMUCCAzehCCQmgyEC",
  "key1": "3gS4A5SZxY5ZhpBMfLUSbmhj1HBaaMkf4rn418XypmfgnE8reXCBjiVScqvwsQFWZCL2LAsCHFuxY9bniNqvrcNj",
  "key2": "3SSTRMYVxFEBYxoqU2S1vSCXQgxDoPQobvyBNe4LDVV14NeN2ak5C85oKqEpKcY6Cr8DmzSAnuQHiyTCXXqJ8EAv",
  "key3": "2JBCcMUFDDeyKMjyprtHkB8y2j1Frs2usvfU2SUDGBsgzcRUo7QoWqmTJFsuuENYTHTNqKBwAW6NV14Z8NTpXAfA",
  "key4": "pYWtqgNDgntRvbjkZAYj5x92fqPC543FaSQim264L6UCWz4hpcEi55cnSMhA5C3SjdgyS9vjBivWpSNoRL91dvv",
  "key5": "62WE3pfrDcgbmv8MQxS4vYnZGGBxk6gQMV4hsqhjDakpw2zY77fiWMxtBxPzQMNTcdCz9Z4PFuoUgjsKSzq3LhnL",
  "key6": "7Ju5dtHuiHVjxenTBYGxuz9GwFZKwetJfzZntVPkFLVmwJW7JUbCUA6JpW6oY98uyxFA2tEyEcwug5DmGZjx12q",
  "key7": "45czXoHYiym8FZYu74QVPWmNFqK2N4g2uJ4jUGbUnwV4Nm8PvtQjbkmsk8rDKYVMC8P7qgobxogtaasZQmrEFBAz",
  "key8": "37zBdakNZpyJRpTj9LuYuNbbF69o9nhUdoYLqfL6VVwxZZathDpPrv8TX4htsxY1sprLESn7iJGjpWTV7MaoSJ13",
  "key9": "5Xk8STzHNvBpDAr2He7Um6ppJg8gKjCPaqxdBtkXWTpDtQZFi9KSEcru2LrLjaMzDyXRYE5N2orqU2AN9YLZSZ3A",
  "key10": "5wh91Nee66VWRQiARRchBZboGh59WpEHPTx9YK2vdR22nDMwzvET1RWpB4CN2rpbRimCpppxVmw895aRAZQfzcYC",
  "key11": "53zYJntRYSWizVg4S3i9QjHfxtr3JbLKnBTVitPrUq9nBUNJvPQsZbnidZT33HJmuNLqxhLz77Y4wcWDAKP4RA7x",
  "key12": "2F5LpQS4oAN7LiSkzDDWcweEWpQegfCBxUeWamZRy4GwAnbr5xinFKgs4kxrLpyEbm51JvJTmj7bYZZhpjHWEQxx",
  "key13": "4nMS9U4uEvwviBdKRm1jEMnrE8cJhEqmN3N8BKt5M9CejNrCSux88ZTWC3o3J8Dj3scgxnBHnDgkBJs3PnbVnKRo",
  "key14": "5x8GCLnJkYaTApFecN5EbW3Eif3eKNUu2qtF6ExK54sZNtZMxPCoW6xZfqmGDfxJ2wvSLCLc27mT1XnBqZMCgR2y",
  "key15": "4crF3kLcdGQPcb568z5xp4N1DFkovYYGtgujtH6WbtnV7p4bkxJ1eUTPBrnb6Mc2SK3YL9LcoChih5oVzwDMQj1n",
  "key16": "4C1pWXVSL23GhZWcKf9enMxGaq9tjiFSdG1XBzSuPTvRLs5Ytf6KM3BPvoBoX5nUfFX1Z1bpD5dgELN34eUcD1Zb",
  "key17": "51X64DVcNtQJhFkc1AzTHjUEK3oRF25oVcqpx7R6BUhZEQxoAcfuaiiYzikqvVtCdX3L68AZB1bKRHZbuspUHcuJ",
  "key18": "3xUmvAMAk7RUCtpsQWW1KHrwoMyvWtQ7LBNfnsuXaA6T6WfVzWy7XaqerMyFTDfpCjedTjFX4orn45mPDjfxcukP",
  "key19": "57QDa1Z7qYMcGGmNoViUpXjSRogEQmQPwKWpv9kfdQcsZ4MoiFPRkPQSZEvhdFDCR94yZjF8mtF35ZZLYfK1DDkA",
  "key20": "2MsyLDGf2o8vMS1PzxMEdS6QVAoJgjutPkyTAiuGGeGrbaq7fACaU9JKcCiyNFyQd4uD1My3XY8wFHDDL2xTMrkp",
  "key21": "N5ykLeVjGxaH5hmZpDvYwRJe3vt6MGRXnLxa2yNg8H8xhPVDhvodqf2H6VzwJWYyKpW2w2A2emgs28GX9RkY6oy",
  "key22": "3Am3FC5NwaDvtQWALq9G4pcJGzt9ceWguSwCeBNVkYQQuiCWWCma3fjBoMUsoiD3rt27XxEqQSP7dmgeAZosy6w4",
  "key23": "D15ZwNr3md1u5Cvq6APYchjJzD8hYhRTm8aTXf69DHvQJ3QoMePrtegLTfm6EkvWpiMWxYTWaStmpCKpaCfYq9N",
  "key24": "5Tx6fekF2bBZgGXPW954znF5DyNvqxEBg5kWQ3gpKETXoCbf6Wv4CByewmx5YbEGo6BBTh1iobbg2xMFPiJaTmuV",
  "key25": "5MFE6sB8hoQxB3vcN9YWvau4pS2krDDgQfogPgpawuoZmzP2PHFXyotHP9vTPbGhosw3UqEwVmGbebHdWK7BXqBT",
  "key26": "4nwa8uSAihD3DZpkz5v8YFgc6ntK8dZ7rTfJsTym1osNR1SnRXtrtjoE2B5oJ32opwhk1sAXnFAYmNZNpX6TZP2Y",
  "key27": "2WYCdDBz3VhjtcfW6cc4m9ewDFbGayEDbEWbiGfRd7Zigs9gHANQp6A4EsN1DFHuH6y8CBmU9oGsD3heb5bpZVjY",
  "key28": "2LV2Y2o1qXUJZKLgvnL5CN4iKTfwamPgZsKZiFTYLFNqf8UMiST2MaGHWBtaayp6BthkpYjJMGKH7dbwP5PFA3km",
  "key29": "2vxazr5xYcwrUTM7VGEiRsvpvsUB3NaDYiHc1SGmhxZkTMRiTxUECNs46f5nhKttpwmy2X5EpE996jW3WxAED4u",
  "key30": "3RZEHzgnXaHZdTzjTJXhETJ2rPSLhVMddwWWD6cEAn6wAmkA3rjYjUrqmnXjqm3c6o6jSTVa68uHyR465VUazWJz",
  "key31": "3NefTVY9UfkHSYgeSDnKtGVP8X21vF4tcKwmiXda5RpbgcDUHRdPpAZYvMPoxCoruX2R46bSdDYG6YP4XRihT888",
  "key32": "z6QStZ6nHvJCzu8LbNuBCuPQuopc1okZdJ7gCVqEawY8A9hL8PoLk2WtxdG311KttMPHEqZUGnf9PBprnzHLqyB",
  "key33": "3xHuYH1wqKmGcWiYEwTgPWC4wAdiKkyMwfEVQxMwujC8dAhZtibYCMTK3BSHuh4LwcT5TVMJYUZZ58ifRRGQrLQw",
  "key34": "3y9efDNaZNMYHmXPJhVjeVQ2QzK573UfaWezWYeCBdRWyJ6aii9kNZ7Awnh2b5aoX9JxpfQyvVAfwJzSNfLFnZxu",
  "key35": "4DEiDZLMZnm1JfTiaNGh9D2uL6t2ZnSVA9R8gbK9h4sKvDqeptrfydjcv4omCf2LHSndyc9tM4hRsHiNiXTaCbY4",
  "key36": "4V8AESPVtNceenDU7dLyWJDzBSBx3iycqXURLMmsfj2yci9uHtM6FgABnq7RhELFrEnu6mQN59jVtRjNHSYhhiAZ",
  "key37": "3T9wRimj6aWmgEWLPmJWiuZN45yUDAzoR8D8vVMbVocm7JcvUFLhvaR27fwFmztgNfSpWiCzb5jse9DL3rcTqk7g",
  "key38": "RXzwHk5qyWxL1inkPcdUrnRbDJbTCr9BMQhxZmiMcvHxUAd22Do4z1cKWxt21PsKxb8TvxSZcFpJ9KpRx2gHbqK",
  "key39": "2XFFtK5V4n8uDBi9kBP8miykzDyV4qYcfGfw2UFpTaZp6d948VH99cA984W51PjgB72sB9wKPVgPs4im17VjBCDC",
  "key40": "qFNy6Vi1ku9vNGRzrrpGMzBDofA2k74d9SPnFni2TfZ13jUqv1bocsCzsmxK7NWmgvpSpoatq3zKur8vYFgCa6d",
  "key41": "3639pkiomYZcyuGa5zW5VWSBqMXZ7ase8L12GUmHukUZcLAkRvSyT41mfVCH48HSLWxXe4hhYMY2x22J1qXQ7AWd",
  "key42": "4nxzQt1N3G8a7RXrnWrcB5hLcVwqSfoqMtytH8vBF1K8dbnvJzuapYpPSHtWkEdg8pCdfXvKnuAG1pjLCav292af",
  "key43": "39C6ZGEdzkD87MDmdhG4hX8qZsBK93y5YsWXizQetYqPgKQGX3Qc2r5Z3nHt5cdjaWumu6C5ynZCGjpiughFnyko"
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
