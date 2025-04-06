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
    "2GY7FJ9NTLrFTdvBKesNoZxUDeYSXEv9dg8LjEsMxTZm7DMoijYSLfHioWgYxJSVL1LbWSqGypgYCTj6wpyCsDXN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VHvFEuH6squvxMfVXFoFNQSj87NZBH7TNaJTBczqkrz7hNcY8JoqJecuyvuxRhmicfoRvYVQnio7TYZfbJzwZVZ",
  "key1": "2pFM6grRMZgdJuWFTMbiTACcsAczR2HnkvmSBESGM9fbjpxQama5o61E5n4L2gaj8MpRo1BoDRwnZEFB2Mnaiiof",
  "key2": "4rmLN44Jv2kmMJNhYeHRpyeg3HWpfJn9ueJR5qQDwSxV559nZ5wo5CaKhahiGmc9KcC83pE44eHJL6897LhWNFRf",
  "key3": "5RBRWMqWq3zMvqugaaQ9bf7cGMxXc8NMz3mjzeAk9qDSoa8kp1oCCGNNuTjsXCYicVqFQh3HLyG4AxdfQckj4FrP",
  "key4": "iB8qJxS2cgV893JqFrdEDBhdgJ4ry2GG6XCA9tiKsvg6CDR6G9hvfP9LgYHhBSJnjvLnCYjRVimbzbvjhFRh9dX",
  "key5": "4eZnn89BWCkScgpTELnPbcfV1wB9N5iWgMGM6RVchatFXaGaYYjnamVP7TTXyQuuWUuFi46dS4KeY7x5QeUqpUo6",
  "key6": "aCvivPCcZrdBAs8vSA9xGCixdeuBE7YCX2eEof4xe9TX6fdaom5DuSTquwh8SexfQyhA8LreF2vnPfNvekMfKfk",
  "key7": "2QK5NF81svN2qqXjWtezPvezUuYSSN9FVASfKisBMSd8CFm7bktf8W94mwqCPHvMt5QaKcocCjCYmR9KXb38eXH3",
  "key8": "5hjZA9xsxP7Vgx4tD6WTys1CFMyWzEWZoa5d5vMPgGyytJo752Qnn7J2p3WncZqYAiSEFH2bbpJQ49v922F9fRxF",
  "key9": "dveuGCLMTp3YJDpB2hb5FmXzbZMnMcrZJVCAZrHna7NxmfV77msoi6Qs9sUooFZxirM9QiLHFJ3tUnSnzvJCcnQ",
  "key10": "vtnPZ5Z3z3VMovYEMJCSmiZf8yHsfK44LULWcFKWefzQXJ19uudTtkQbhyNgcgkQhCy39WVkqEAEn36c5idL2K6",
  "key11": "4Uq9NUAmSV5tjnDXT2SWTdaHVjKdmjoVCGvTzL5KR3gk9dYmUEwUYQKtABStP7f6yQ8jZsPyjz1w2GQkeEfuUQdP",
  "key12": "RNKGtMJDpmryqcUybbQpCvFT4piHuouyX5oKc6EBDixTD11bToT2dNZ5kXN6gff7q1fcaKdVdzvogkBcZSW6oYw",
  "key13": "5ZrzKQuJ8rz65Cf8Y137NDpzeaA3bTLtfgtqLSADPHseDkvachUdXuokAGgNsEMDTkjxgdu7cq2Y3GGYAPoqitax",
  "key14": "5qWfcB6NEfq6GPhsUaST9XM5wAXTTEna6j6MYwavodUr2UpqnzwGnnPJ8hvWiagFuUrrrWN5fkXSNTTdwnciqFfE",
  "key15": "5xqUDLm4LuNiJWdi9K6T92oB6eRDPhzzsSsq9kPU2mKM7HQWw3CYBPikDaid27K8Kc7jKRXqQXRv4hewjBGuLgJ4",
  "key16": "4fuxfvB8YFdkSedn86HMnN5fNhPWevFQCP6Y3MTFyPygx1aiAdha9St4hsQciMFRi2mkF8yB475c5UbrwZkuwfvv",
  "key17": "2cTkMpZCw7iWCbAEvriN4SE2N1Hqz7PNFxzyX2iUEVDwha21N22EMtr4GehLGGeamJ1hZvKBN8XZLwRySjczQAtQ",
  "key18": "2RZ2mkMvU1x4muL37TD4MhEBVEig9aVBSgtkGBQEdyADywcGveJ2ixAA9WqCLDoxfv6awsgdwk4dAwsKHxvdRQUb",
  "key19": "3hYmcSy6LkpC7qPsQdjBXW1CTxMq8YbuoMm4Ma12V5ws5zf88MtYC3AWxMmx58Kkz4yAJ6fkWJAm3RoW2ZCh8P1R",
  "key20": "2azSfx5DKApgWMGBPxMvQjYyiHdsCpN2Kqx5oWQvFZw3Hc7D5b1xkZvv44rMudyM2Upozdb1CKc1mh8KbbqdB9az",
  "key21": "kG2prZ8pLGCq3uJxoVz9cUEUttE7RnmszDd2VaY5UHtKLXEWYvR676Bkfcn2feNxyrAedMLKL8nVgiaU5z4FuNW",
  "key22": "3c6np5DG8SpgrdzQ1oW9ybZAjkyShBDVYKRXP7VHoKDmibuSD5qLvf6FFrXUWU3aWD6JJSHDR7eBX3kZqqjUr9he",
  "key23": "5GGKt5Dx9XNLyF87B3nhCtc5dCAzq8a33U1Rcj57Zfqp9eARJmHoQevUdbAtt8n3ce1TZkKxT6wb5pzJLYLdWRYT",
  "key24": "5v65JBPc6odDkUwhPYz9dQBFjEePn7BDHdzdx7CrjAJQLFMf8sipbnADPDkukmurPPFuTZ2D9SrUVvxLBLEiQEsC",
  "key25": "2YRyzaLy9jzLZYi7KDuiA3eb91NTg3i29fxrW9ERepFeaMNv3j9a7rnVKCYL3vYCXzqSuku53VpP8U8D7aPjmDJh",
  "key26": "66kCeA9xiAFrpkfVZ9bqSj8so1fvXiKC3F6uccrMNQLLtEHB7R75t3LjtFuJY7mjCAkjV9S9zHUYHzvAmyLhSXgA",
  "key27": "5mgXWbgTYAdXNc1SSA3SZuERrtszn6p77qSKzjqKueiyRVogMT1trqxzrrDDmnabk2kACmK8pYWZZrm2hYN3emye",
  "key28": "5TpKu5MupzkEm9RUS5SSZEoySxkko5mK32g37Fz4grSmo5dCcA8F549rkBCUt7WvvohBvhM6NGtpoPjyuNo51G4x",
  "key29": "rWd3FGsc1ypaWc7AwPjJodu7k15MhGYAebRJbGMCvQRBvFzBsnY1f5cXCqkkbaSi5cxQ3JTnphWAEaV1q4B34cQ",
  "key30": "5bt2M3FWbVohin9rp4YwMWGF5ANcTh95McX4TKVHB7xBaozHvX4uUTL4coropGser4D5i7gyZR99bFwydQ4MjbrW"
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
