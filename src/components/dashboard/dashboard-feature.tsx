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
    "3nfgBB8fr9AUjpjVyA4BapsjoGaWhj8fga9NWc9iC1dA3SBKphPSBSWYSu1C5GWXxdungaCP445doQjuzAuHziLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CDMPitHGQnDu5viqCqhTdL9KXx2AeKKBvn7qen9r5EdASULevP4gxLWe6KtYRNTwBBVoAneZds3zoc4iUGJWEbj",
  "key1": "3AH77oCNvi3Ebvjddn8XtzbjyJd8VAZvFiyF4jVwyrcAnPX2W6roLz9TyYNjXPp63zUVtksxXXnL3P9QEtgnPhCM",
  "key2": "36y2PimJzp4419TJmQw5BWvrFsMpaw95KPHAyN72ayp3Nt7ueRhrGChH19hTg5ixREca4Mzamyh3xddvSZnoPn99",
  "key3": "5ff8W84bdkWNNRwHhaQoGVnYw4XQYJJjPE3UBn6tzxNTcX9iwf553UJLQwVWS49zz5F6J1a2iybRW8WymuRnkZkX",
  "key4": "4TQ2K1xx2ukBHC3uJg85iCuWyCr33HvRPVnQYCRwW5UVYCHjnJg4jTLHcfKYBUsD5GK4uUbxdu7dttN3CsMrr5Nv",
  "key5": "4zuAKP4fSn9TpMUWCRd3z2Jrb7NRULPr7PXT6phyeWaFBMRtoeDVede3zX2RQXhofx3UcoAc5z44ij961HBZRji",
  "key6": "2766DQcSRzSCBjH9R1wQamvCKRTxYQVpmt9nmtpa6NwnpmLXBPvk2Kh1idvQWkqMby2b9AjspGX5VnBMu8x62zDe",
  "key7": "4JLyobYyjSbv42m4rNWP3Hwj2CEJw4cvk4k4EeBmgMmyg5mh9is6ickHAzGufVzLP21sfPB4Bsvo8bgYWjZUuQAQ",
  "key8": "3btwXmQGEqNj3HarHtpsDve8L4CmkZQqvNaBc9MJCfH2FGymQ8kCe8Zxr3WBVqcysqMLPZfChqn5xD9hXmsNdHre",
  "key9": "vbwE8BaEDJ1xXzTSvhT8gdRJP5K7RNKRHgSaveGqHKFS6G9iaEFHPndLwsFjsKMauSGjb15byh8v4ier2XFnqxs",
  "key10": "4A5xGnvWdY5g158owmBdf3Xo8fPDxzXN7Up9ZvRZcQpW4qbk8uaNzEQ6xsCvphJzDZ1QC8L2ydqXJs9RU2gPcjSZ",
  "key11": "5ehhw43evVzSpSzJt97HhYNYFvDgy5y4PScka42JKNQxutaTwPRzKStVdFCcCpVDmqXw3K7NwcVoUG2ue9E6d2V4",
  "key12": "kU5tZQYfZPJqUQfNXakLCrqLpLiwA2GgVWHf1rkQQoDKj7TDminsWPnipwzamJmTAeSx2cXUjbUJqQvVdyi1SFB",
  "key13": "214cfSch9JPSTSytuxzwoXmp7XkdptbiMqbnX1yxwMMurWjtRqaK9wXEhY2pAntoVhZVjmB4HLraRBWyZ7u5rAeb",
  "key14": "VNB7XXCqgdexYxXt7vij549odv595vmjzv5nWf5vjT4cARB7MzBWQSnuG7twMxzN9uD4VDAQ3x1V5kH8mfYtKGb",
  "key15": "3ex6oqqK7EK4NgpxtjoSHXh9MWiAUwxJ4npPoekM9vDd89LWXn2AUbBuRvfbP8yvysQjxNXSzjsKKeMT3eezUHvf",
  "key16": "52b2CybnmrsM5cpHpgs7LAnwZzJcoTeynNYdz6QMpGXhRaaKnirjKDaZs3z1dDgXhKXfxS3QX58RQafwAdB54cFt",
  "key17": "3chTgzbBu6u5wehNMgg6ggi53upt8gM7p4WwhhyfJeivkyLQhouctrSHTPn7iLHob8orEmfthBwYrLgiqW7KzJY5",
  "key18": "65H5S9HTkgF1riXEjaPqE9ErrscwBj8tLTPSMSReG6WiUUopwq94FFGfRRrLgHnbHC3KZBxGHsVadcWDi6ZUDNEN",
  "key19": "4hu4cjvcLFi8EqPzXpFjzG7pg6Vb6aY2u7ByrTsmXPaEAHP1kTYcRQBRecANZUhZfVySFYn9M3mzT6C8J3h1kaKw",
  "key20": "RmpVGYwDjgaWMFxWRP8qS1xRQU1mnB4uuqjK9KZ3HVgZBHu86mf5wqnHnD7i3cedYcaaefTWztrc6cSLJfkt1Fv",
  "key21": "4RHTB7YtupUhzaZ2hMZRDLuagTdougetPxy88msQBHAdDcGSwZsRGcVLXJwofX2fBPzucQxfPtxsCdSrZiJXAUMc",
  "key22": "eGubZWF8KAHsf1toQ8crEhGQcuLHoBih4gWzxfmBcZFrJXwHdeBf2UtATzYFKTgt5ZRi4NWkW24F8V2DYwKSSee",
  "key23": "5ZsWXdNX1y8oG1E5G6HahfTegCjkoYWMhqALw99nBhTsP9DcMRjcqtXifVRUg857jbSmShAjidejmKs25x4pZaZX",
  "key24": "5XQxYmyxkLXTWoLo3wRnaUe3AF8nqTinif4SH18Bo4HY4Jf2LCuB92UPCYPHvZ5sJ9vQA2aKEKS6mHPz148BB1DV",
  "key25": "4PfmBtBzSsG1d1pus9Pa8M2RdgLd6d9iMbfedZLoUfPqn1QyXoapSrgx8hspk9WiginLCPCSVjKMrtke8MTvT93X",
  "key26": "5dVJKnLLpowbrqWP7BcJoFEFUaZowzhNXnd39nmK25ykfpyPUY8BAWnMhpcGKjDh2zK1yFbdwS38MPxvywn2wGEY",
  "key27": "2gPTzZjK4UkcF4uM1C3K4Q7uviER9Nbxav5KkCdBiqRYdAupS8DF5BiDvEd2urujvkg93me8dmytuQqASbzFjAnA",
  "key28": "4ngwp71Hp64aELvficJgPSYVnvFCzrarsZ91WQSW5MknXjww7UWEquHZh8bZEpeuEkTbjgMAkvWKKkoCLPYGDhGh",
  "key29": "rGYZznyuugd6S4HLwcY7jjhmWKX8j62fPuDwoX1gvLuD7YeykpqhC4Ck452mUsnd69u7dxBBNmeNNnTvBBhi38h",
  "key30": "3wGifedGmdMsvLpZjn5f2rq5nqUGJ8EjdkP1JBhV4cdrqsiAWhK2Mmyv7c2qKVpf3aA9PdioRumgsC4tDb78Z7h9",
  "key31": "95XSTJrnQuTodAwX5UDE3jB3gRrfisUvm3kP7ncv3CwHGHN2LcUepwLiSx6LvgktV6ou3hCQznoGcfPnyzjKcza",
  "key32": "NYr9WEtPp5ohLEVKiGQrh6hNeR9b544BosS3fUMdkiwVVkCJEaZMQckoBJrTakjcHPNzPCrvDwwaAM53iqKk2mk"
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
