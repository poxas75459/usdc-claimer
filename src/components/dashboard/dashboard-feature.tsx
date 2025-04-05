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
    "2nNBLZExgSts5P5GyTDZMHVjawhrQchh8sVqnefcq33sQz8EDmSSACsaxMf7QfuRMfv9zJfDhbvsjXUapGSu4E6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NUj8yVeKc3dNYdxmj5VbKKG7yMxBwD4eZPG3MfxSvogrK55Q96UaviS6LiwjfMHunprMkb8e34Jk4fgyeXfr2ZQ",
  "key1": "4oMmc2j56xK7gaMbQBbmdZcGeKHxg7JZayZdWWzDzHPTDmzC5VPnz8yYH8QmuC7XMCdppb4QFQbtpY6d91wp7aTX",
  "key2": "5uoLW1tYwCiQ42ZgYzCv8nrnAS8JpnE7rxEZwT9y5iGq77atpy1je2s4A3hwbouNg6AGyVQdkrZB3qiCBcJrmPAL",
  "key3": "53V3jEztNzF6hY1J9m5eyM8EWa748KcnH3fTZYD2psgnMB9HE4e6gYZUi8r3KccJfAnA375b2TbpWdhNLpA3hiiq",
  "key4": "4pAAa9TbEc3SJy5pnq4xYiwDLB9PxjssYyX2CUavdYXodwubtP2qVEjTbQhQzRWbxS6fwCAstAKiNXUP77hniQsq",
  "key5": "2WATENC1oBEeuxmmtYL9MYcXsoBr5TmhmURhSYo9fwbHcoExwF3oC2fpHHJoKAFZ6onJoTGMNHmJWQvQogLjbPse",
  "key6": "yvv9W28WfCE9gDb4X4mwienwwT5mZQUQTeFeXgLdGrTFAqijhYrdu84capD4pFWea1GT642sVfhmi3y9utzdzGq",
  "key7": "4D8vGyq1G8DrMKQXFnUARcqVELs529x7RzgJWqGBQojHyRC2JV2GizissJHCXfZkWJ7veBUDqk27gK4brEPXvxMW",
  "key8": "2kWXPHCaVURWN6p9mKYVx3difV23qwMcXhuQPH8nrjb8gNHdYKErkErwRBgKRnCUJnwhq6hYWZYG6rivfWSdW2Zi",
  "key9": "56gEBvE1ZNGF1MdDDkTexzeRifTKPxpvhEhDYsGyFNhAsGp8YDeV4Y1HeEQtXNFiHMNt6QfuHSjiL6CXrk7n6fMf",
  "key10": "2LM2vTzwwDgaC8UW3JzyhqertxGHXTeVtLUEjnbQnLfrZyWjeWqSHLsuyF9wYe6nWvewjKkh6y7ynaKPfYRn6gGa",
  "key11": "2oGGTQ9cSnwCS5FRdYh7TNVwjEdvgDih6YN6ca1auttvZZyJS5KTw6MUnduC26ffqh7KsVibBtstHZiWh6RJpgrZ",
  "key12": "543dWcPFjnsMbPCcFEQtrzDB8DM1n5R3QoNYSUW7PbJt9CVb2NiX1rFqczpoH1zfMKKDgAdqpSfYF4VLMQbREbEN",
  "key13": "3AAkoau9No617eREVuftm3Yy8FxGMazLmo3XB8rWdVsRhUDbS861bwDWBdASnERusrk3x4VjZ7eiv4JicYMchTix",
  "key14": "3Mah2ctxPHjPMMuBp3muVCmJi1fAsbE1DAv2cu6RH5rnmRfEw76dvkfdTX6Uri2Zp6SCS2KS8HLv2dESXNa4W5X1",
  "key15": "43S1AEG1FL5VQFxgP2xVDLXpBHs56REWpBy8QaKtaXhiGz3ab5kjYyFKT5siv9mj7Aga7fcMDhfzEnbzEbVEdpTP",
  "key16": "Q45Tk2txz7oV7rMczntQD7MpZBpQrmpugmvtQTnrREocZ1fxQBtA61hTcVYtdcEZ2mZssRxuZQb5qKvLvma7PSx",
  "key17": "2qemvXX9noECq7y4raC6H1kgz34FL3mHUNkSwCtRwYro9LR2ymyABhLVZfpLnadKo4w7ome5kdTDMMjiBXJy8BTW",
  "key18": "4ttoZd9YmTVnLAqEic6svGcz7wGne61f4V8sDpkZxo4rEWH8bAfLLP9nLzrsCFAuqVv4EQFauLYhADFdYL3QzJUt",
  "key19": "gXpehcvJvoz4K7UYXRDmR4E94avSVjSBSPMN4sh8dfRjDAPQX9UVme6qjejLdjHE1cuwhmHYEfZxAc5MvJb4QR5",
  "key20": "54MB7cgJQVzPyaKWEtHAXjo9B8YVfdiyvSzqsEUX2fY2P3LfWQaR2FtNQwbnd3QjUsbB3Ln9bGC7iHGiWcQPm5dz",
  "key21": "3wPBrqWQvB7un83pp1LwBVgbERn2yGAU4DUHVG8B27NvhpDWzLWYEuVJUEKyQ5zdwG78LvbHorkwsa7u3sxEa2ym",
  "key22": "NsHVWdALd5XrUPrU6nBHLPZrK4ws3877z26GmqKktGP8subvMdTdKzwQKccc8KmXpQAdJ7piwwT1PqUFmfQ9h4z",
  "key23": "pVLUwEsNbGQ9VrDKr7jV6DoJyLE1JffdoWoR3vz17yFYbso2HhHvREdarg87TXhCjPMogwEHQueonB7hX88kqh3",
  "key24": "51g9WjNET8oTnUTjHQpdBQDRZswrfR7SL2yAQAdbJ2eyxpFgNsq5AuLGUi1oovE1qTiNAPttHPop9uWCyqaFQNVG",
  "key25": "6uRgZ3LVnwXY8n1YnqbNHfBP5SXNxFa5hz3jarte9cK72cQm9GpAM6bvKddn6qk6KiY6tNxSz3gM3owENjk35XK",
  "key26": "3fCGH1gZznT7YcUmHzwcDGS175z6D8qgm9HB3KyoWZZCKzrEL6DG2XWdvARyn15iKZHyjGjyj2HqMTFkhViLPeqU",
  "key27": "5wp6msamwHua3wiysGVgCMGzMZwGKT1rmUUFGY1auNENXT5s8FFYCZzQ6ssYsN3rDbFb5NTkEFfhDaxUZ6jY1bWV",
  "key28": "XNEZQMVpMReftGXi9eYmGjQiitjkWMVVz8kiYAJ6GQx7zgcWzWDeRPYcd3bBdUqqjfbXLAg8rAERQzECPZGCWUN",
  "key29": "3rGo4MYFq2hTpDiaEWSAm8fLNqxMac4v7g8kFAwWWEnGTPZoDym355dpwnNZyTvdCFxkFKxHNGimuH2ge7FM5eo4",
  "key30": "3DLohyfLjKnGBs4RE2ub6xC4yurkuNq5FBCetzxdXyEAe3k2JxpTdws6AYBpW3CBJSSsxaopC4iRG5oHM2ALTuFC",
  "key31": "2AAiPQVnTECyuAeJnCKto973tQyZAZGrK7HADVhuPqVJBFPKmV5cXk2GGJdD2vHp8f5CTGDcwdUvouVEnnFEBmD4",
  "key32": "4YPfyxRZtYb9Qb8X6Zmy74eh4RDzXMPLYVR2xRK27a63fkSExBBqnyKtSvS4K7bTr3G1n6qJx8nVUpqCtgSCk1PA",
  "key33": "646YBuuDf2rWCRhBvXhcQu3goTMYpTNyCTM1STC2K7px7E9Lq4PjrC8tEXLgVdqZMtyj6cLZ1ifVc4kdLsoxyVkd",
  "key34": "2KCN5pSspHR1cfUptd8zeM89C3S3SdmYL5bGqQdfALDBo58vbz8bMGTcVNKWbjkichRyyytDQye3mphwuzDZJr1o",
  "key35": "5tzX8ZvqB8KE3huEPyFnMgtoRF6aLhWQSZHjvMhJZ8NBK6FuXMGhotJMF8j6w4HC9UxGCsEiHEpf2fR3sKK1uM7B",
  "key36": "3frumVJJSASN9XaDYnXJAhDRawP6PhUPRMzwvFCq6kGq2DLPNFFFsbdu8Y7caNPP5hXxQ3DK9pu6Sifc7huZHmX1",
  "key37": "XEWsvcGVgmF2oyW7HL4jfgQh6sNvKhUnHCR7HYZK5UgS5iS8e22VhdRYGNFDMT27UZ3vrDEjf4X3i1i7Q3dhoVK"
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
