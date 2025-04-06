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
    "2eFwG9BPVkNwzk9CaWVBDsT95Yp6eQAGqbWDHKrfajCZDKYWEw9nTvg9dGRWCXxdUNk8YMTDAmCz57S7kv7jtU4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rpgmFMg4T442CxwAYLjMtLq1Scy89UGcqq346ZYrhnuRJtj32zEkw9c1g8BjBu9JDYjvL8XEUvZYJGScPWgo15c",
  "key1": "4qaMPU3aFiUMQMfabb2RAiXz7RshWfNCQSaSPJbG3LhK95TcdY2L5fp2sxBY7r7kxQdYqvHvwSpidzQ5UqGX7uXW",
  "key2": "3ewMPWzpMQsw8ZeJTGxZRLP5ztcyjB3d4wNCmCWt9jW3gUFt32NxyyfPG8ehRoLKKTDLZC1ozcH26j2KGBASto1B",
  "key3": "ShkD4m1UeczhhnqZx6YXT9fHFokE76SKrGNcQ8a1gG8fnQNZUaXDbhq6fwoEDk4MPJuLD31V6un2y3ARvsiAqm2",
  "key4": "4anh1yMroxZV2YmAPGQNm7Wuq3zqwNXnuyjQsCa636rhSp5pNNs7KTmhiFH9qDxhMvdxrjBMQwKuNfd4cVBe9CpU",
  "key5": "4Sa18L7rnUMbk5QBUw5bRMzP5N1fpu3Q5pFJypZ4sHCbUA3wbAfg4HRGkPbmCS8wwe713nUA3FHv5WEbL3D67k76",
  "key6": "3Mi69YgTHznfQ4dUn8i8BBkhGkp2Qh6cJqyAVvdL1quoHuegh6xUAJJfzjWWyxKGk5nbYy6VeZNCCpM56vpB6wKp",
  "key7": "5ZgHAfqMP6j1Ajted8gQoeTpSjysUUrnWmKvW6AYXWBq4uunSYBPCAKdBBTk9n6e7Yzvn1vs1jsogkLzieZZZXRw",
  "key8": "2ACmpTQv9XbpAQAdXeuQRzLdUWN8EfgvGdVYqiXNtvWnzRmzSHQwL51tkS62morLAuqWwEAs9WJ7rbs24FsWv1FQ",
  "key9": "evsYzotfmcHKhZTUW2CFzbujBwz2XP1NNe28Tkxha5ADGVzXNFfVMCmnBFYpXmuQELEytoNKhnJ14vZzx5WY7Af",
  "key10": "4Fmt6u9e6wU6CTpeHo1uc9S5NLTRuhYQpQfwSzDFhiQDa6PDSTfkk9Ey2SnK4ekDG1v3rXDNHbNZ3BU7vQjLuwEa",
  "key11": "3rEfcsR3KpvAhsX4FS2vj6qoX5oxzMXT14AUqoSR7kHdwBJzz2jKp5J9U2JhZVUBQuaGkFJqfbLRKnDnXEUXoN1x",
  "key12": "65iovPyvR7aq1rimN4ALKq33NNWuHcpwjLByKdk3uvXfURHnDoEqitELaTyyvQAKrNc4jHTrrF3PdWre7kz24Uz4",
  "key13": "fotdh16PzMRm4g6ngqYp1kXnfvpcWxNDBKfdA8zywedJt3Tma2SZBbd5avbeFxgSMyhN2efGd8woHntsSe8RvyZ",
  "key14": "54zi8N4LGtYq9ZAzRLHoztp7i9Tbz9HoHRcDCDmmxnJDJDaMfuPD6JWE3TBz6LyVcUxALJpaPhnM9FdXR6o3XJWF",
  "key15": "3AvsfupixYU4UxFsriuGtgSLm1E9zGtpVrt24e8Prn6naRpGf4Vxo29LkSkKKDzFN4V1BzX9AURQ3pkR5rdy9E5H",
  "key16": "5yVNahf426PMz3kvbGMRfEazH1tkeP1jpEyrBTjwbirt7ppx8LuXzTh1U3yJtU72uX5rTnrHSLrW3okMo1ixK7wu",
  "key17": "4wZUYX9rve6rifRt1EmD8V1ercnVnSSGxDAqiZXibe1g9gtZXYeJKSnaZsEa5KLVZU5sowBvA47RP5QP3kWD96u2",
  "key18": "34KzDNkvHVmRbCKpduvpKj7oCGx6gufWUW2eiixnWmd1fzH51mmRAfcrrh8qJZvzP4T6ADq6Q6Tdh9TJhbCqmgiH",
  "key19": "LeEKdcKF6cqgoku4fEvFDQu18Ak92LBVgTA7AvzQ1EVKm2xHz64iVpKzQtkbze1RAiUBsJFUNxQaDe1PieSyZ9R",
  "key20": "5WAwDQZZXcD7dgTrhtrmBNZ4rWVcZMHbHVfCzvqUTSFWbXDviLHLDywtkVNcqUWLdoszbD1xYnwpDv5QqkJ8JKHs",
  "key21": "FRs5pmcYp1wc6C3h3aA4etMADesZy8VLPHSsqRvLnherrBwyZeSjC2FXEP3re478xTZYSF6v1YkeHK2boLh8aCh",
  "key22": "5iGvDsL1eKcuAFPKWs2S7HbhNHNyEFEpDRRiLhyT6ZD9J51YDYs9XsWaPRTVtQAFWZwR7UcwP6MWuWwWvm8jyNBd",
  "key23": "3ptDZV9hcZ5kVqkJ8GigVyv2qMBw3sLBPN8XBYSz9rA4oWMSKeHphCnUPvmYMXC4Ba3P34vaQehHP3iAu5ESCqLY",
  "key24": "4riuUnJruBsSccaZpMu72waE3XAAQQjSVGJm33xEL2NiM2qQNDHeD6TL3ZMmQt7CPpxcMC4sixyPzbWGC5zYuBVo",
  "key25": "2Zog1vd4MnqsCPDa3rXTYR9Wu3cEzwgQ4FRhvgqK36zyfbSJe1SNQxDDqEJrgUnHqYerX68cR1jJKVcBLJUVHdd9",
  "key26": "4FGBNKnhdpKs2nwxe5qLLwFZc86CAxZX8xv9Dk5zoiuTi4v7PbizkuQkKHieyafchhcrTzEihy7Ns9yWuRjoi8et",
  "key27": "3UW7BPM6UyryfV3vUTmfBDV5czUWrJ62VY7TQM7gRrT97247m8fEjWwZ5KYTmwrMw7aaLbVS8Ad7KAT3H8bShy1Q",
  "key28": "siz3dM2s7xD7VbnMT4hasFHaw9bLAstJ5xu46mpW6KA8WKqUyKq3hDeXV9qwARtJniQD8agJAd6TBUgFfDTFzTT",
  "key29": "3CxxEm1JD58gR812g4E1Y126oDa1JJ771fHNq2igHi8CXkUVYgXLjksBJw4Unhn3owY9oTzZzY1YgpFvbqKWyPWa",
  "key30": "5PnjhXvRoavKA97DwZJV1YhZ979dusYWbbKgc7iraf7dbewERgAARu1RMGt8uAc3xVnhMbZixd6SpaQogMee9J1S",
  "key31": "3qYmfXKdXe2QjAwMkfcnJDHvfYrECcXWJBSt4C7HtgLxnbLZY3YiPBNKQFe6vd8pGV5oc2cPPgPXwY8Ljc59sRYZ",
  "key32": "4m1duJdhVvBorVuxExnrnVG9TWrF5s4n2LB1oPSxmDTVknfDPm7x5YWmTvCmVYDgBJBLKX2zj1XKspy8oBae46WK"
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
