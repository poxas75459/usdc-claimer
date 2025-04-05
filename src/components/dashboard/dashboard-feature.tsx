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
    "4zav1MNNYMVr3JcFnCxNKTa48tmzrdCPYxXWTUUFQ52mjTQpEnLvf59Jkc6tXVn5982rQis7S7aHNk6dVUUgvFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7mPzXsQ1k1cXdhCJJzKpQYaFsyopT7nkBG4KQ6Jdb7WZ8SnpU4HBxxDMEBoUMpK1FS9E8C2v81eS8CvMZ7Nz9Er",
  "key1": "3Vpfk5gtLRQViRkZUCKYgeMKM9NfinUeqheqetVzuEtWwsX7Ek4iRDaZ5pYi8VUv758R2yJWhZM35Nh9yszmewtj",
  "key2": "4LSCMXShQXsdtvxYec6Gs4K8SR8sXWHnsDU9RWkv6TXkxuTiCFm12vz34q4NUbL39XhkqjxV35FXj9KmtoYL5wdM",
  "key3": "4YXPRxFheqj7bGzj2KwHvPbvh1pUPXKqvkJu6NW65UUriTCYDjK2STRs6SWeocd56JwoNtruDVDi6HPeQA43KK7R",
  "key4": "2bqDvcrXyCESoVHpGgaK6ytGd7WHRR4483ojpbiTUyCrW1TkybRASrVvN8wk4P86AunZBkhAJ4eKvEjhX7dSo9Kg",
  "key5": "wXaX3uLpkHgj9KrpNR2QELhqRLmrSbu2QmaRXucjREsYFSJEQxaVFyZpd71YQAu7M1Q2dWYib3r7a71cRdqWuEk",
  "key6": "3cWURZ2h8UkBAduQpW9PjPkPwmPDqkLGyZU5eDmj2zPiiYY7V6FjZA5k7pmwG3nnWv4WUUAggZUi1twMykUnmWYb",
  "key7": "Z3dzKYmCXzx6GKBv8Gf5MhcXpR52SPnefMvshhsUHBH42U3pkBpEpadD9WFTwH5rh8rQ3fRtVB8QdtuVnyz1XdE",
  "key8": "rmyho7HAGqY8hMxiDDK6hh8v7aVAfDsnuKwBKc4Cgayk6E8vJxXfsEuuZoGZ62xUr7NW98yJ316V8YZ3TTcfWjb",
  "key9": "4Z8zAArrjAZfUcVMMmx2T7426SBdiRFxYHmdNFaCuhgFipBikH3VJKq5dQkezyAUVBA7vD8DNPKYnL3Bb8bgx9b9",
  "key10": "2LvdQaA44URf4EarLvNLLbgybPjQ4sWFqrpyxenaZfYo6wx3v3RADVdD9vfkwZL68NPbfK1GTDVMjD39sCMemVZu",
  "key11": "2csfZ6HWbKHqA1cvBm5rpDjepK6Eh5wa6tHAmQ24bjdB1daLQ8CT5f4mWtcxHTUjxdhZLZDj5gU8ErPAU8z4eARW",
  "key12": "5NrNDCL1DtUUcX97sMTJP4GEnTPspXPVA1y7ucXCEEsRdijyVk1SFGiTsi4pyfVduZnG2dAK7kGgpfYoM34qy3c4",
  "key13": "4UetPfjjjdccaXdgGEZnV8tPSgmT8o4rt5YFiYBUhEUcLJRVTu5khaTS2j5A5TtxbQadK8xDGHVLxiB7rGrmm4qd",
  "key14": "4SdFzetn2LvQPcudfgnTWLeRbeW2QdaXpr7Tj743BeX2yMFzxn1Huwgd9krSGTCPW4cgjFH1B6vqNejnMcaqz6eU",
  "key15": "56Rsz3adgDBCrPzAH1ookGGAQGhCrcAT588runVQKMfSk61VCUtvuJ18T6yzYSSqgWfn6zkCLkmAsQp7AApJTFH9",
  "key16": "57RmKDPSepG3oUnM5gJm9T1ShYY37wrRkExq7njXGcVPCTHSVpHoCd1MvvfhLyESpdBRLUPm61kfFWKGLHnBHp2o",
  "key17": "3c2PrhndZV46wDBnch4VBWC9QZaATt9VUxNUb97M81kqdmKRvV1QUfrAkAXSu4BCeDcAxDQkjT5J4fxWsLHBZRAP",
  "key18": "4L688GTU6Ykh1QMv4terBeVVXaDoMgTsx41jx6qf7X73iQUEmmxeQpS9fph43hCZ1BvotWxA3hdQB4VjZm3pvsFK",
  "key19": "4UXPRhSsETAU77o4EtZ7eea3Xqf4GxTwffLo5LFpiDKrd9thNiVfiSxMPf6kyCLgsGWHKknVzBNL5ZFa2JoKwhG",
  "key20": "2L7P7n6uZxcD6CK8VX7U1GudvNxp1b7kgG5UTXK5Bq5DC718CjPqzjtkSg6m2BzvpcMs41Au4K14YWMLLgLVtKtg",
  "key21": "2Wze7qxZMePdZv22NKAroxFsvGMZAZAj8pcmCt7oCjadax9hruZhfahmm9nw5PLx2JeMYNbmJvXLWsCnLx3TQXeR",
  "key22": "Z8zcYYF9u8fUUXWux34DN2xyf9RmGqu8yAuRuYni9fEScHdxKWzPqoXz7DwEtDfjtA1kspAvpRtmLH9uAiWk9KC",
  "key23": "3nQ7boSi5Tz3tFP6LyLEUuoi64FHzAXQBxsG6VFkwconeLJ9oKvxeWGHUUCwmsQPy1JTg33FLaQmiXCu7XDQ9PaE",
  "key24": "5FkgmZJfkBMeK8MUfnNg3vXw3Z9YaZG5ctitEiAQG5ceDnGHEzi8TPSTczJqKkegcjYujEW1d4mGEUwTRZLmsvzK",
  "key25": "5rNwS9UWTtdZjuechtAGw54H9iPyQbPsfBzAwxxpRtK6NdavcLtCvxv1JkJgb9uMENBCwHLatSu4F8HXNEnx3Zf",
  "key26": "4DAp5bXARTEaLybURv1wnm8ryWg7dw8Q61QPYQmcmemYtT5sjWsZzn9GJbKYJQD7riUkJNg8JxmxcvtSPnwWRGip",
  "key27": "3CM5gNYnw3nbHLNxRGJJsfQse6oDgwwPgZ3awsZ7WgnNVfnbREBGuJHCN2svG8Lds7gLs8XsuN7NdKqkVDaGVdDw",
  "key28": "T3mVWa6R12om2NHjktbSovgk1uBbqqZ5n9ftQzXow65xr7zyQ4JVuG6wysWLHKmZ4HvUPGQGpmdW7m8mtgtDKhN",
  "key29": "2MoJHj7qmMmnFfkgnQdEBFQMp6FT4CU2EF6z98aTK3eJ4tVy6Gu9zgGTEj9FtR7ZddQNK5GMGwhesguEzp3xruAg"
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
