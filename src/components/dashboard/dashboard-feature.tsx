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
    "4URSGLosnocti5EqEPd21pStJd93gmykysRmWvhMc7DKNUYUjDBDvpBRMSgBV4MAeRbANzrcqXWgeYHnktaC3Hvh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mGS6whBX4E8rZ4jWztQzB9foJoJgQnknTttJqbzedddQyBtiwAyRp5FSToJtMkbLDSzrDVRD8zWgXWKJXUVpvBv",
  "key1": "3nXmPyz6863DRygwy5ujVrAkZx97EeygcZMeSkpo1ekGfGg6WQf6CuRmUr7YBBwxoXC4Zg5ur3q6orHAuMJCQ281",
  "key2": "2VCMR3z62eqSy2ychiW86Jgy9Z4Kyi3RCawjtrhDARATZPQmDEDUB4fB6L7hqqFjLn2h7QCjkks4TjiqdTqy7mGw",
  "key3": "4PeZABF3nMQ9oqhvFiyGrBoAamrMQKo2vkUTD7K7jZAnymQS72hgCbr2Xfkt5wK6TrKmYFgNKi67QZTehtYCDJuc",
  "key4": "rt5bwnnZ5F7geHjRv1efMd4o1eBdmXKiwGNCoU9rLC5vXirkScMRoJ14Nd9eXLpM9cHsfwS96UPg3JJW6FGHKH9",
  "key5": "4ARfGUaLPZYVU1Do6Ja88J4n1mrsBQxfGaCmRt9jLZt6x46QjpAYuisSEY5wnemgMUKEVNLkgcfDHhB7m71HmPxM",
  "key6": "4GroNT7GwyzExJELdBNkb5LZB9y2cJJJqtYUQz4tSGah6PZRdkzact6X8ztSnJe3bQvg7XybnSzXMJADnhUQ33Ft",
  "key7": "3zmPas3hzoE5DfaXgcRf1pMp5iHqGpjkNSo2Hex3AfDrUv4keJYcQLDQUwDqvvqBPNsZ4DR3iXULjTLxzS2DTKU1",
  "key8": "3oq7cFePwiuWPaGVE4ruJrWbVWHeSKHhdoxDMgvvELWJxmELeGrEgpBLmd1FWM2AhccqzacAx7f3D3R65jMGPkUx",
  "key9": "2qDqUEcm46RHiCqqnZChmq8Rhux9eR668CkFfLA1kvSRs5B28HMVTXKf92hz7PKrYyuUcJ3yZerp4icDvYrJQg3x",
  "key10": "5YWgYyTWEqzN9DTomB9q9HHN29Zv7CjPxsRvUAZEoEdbJrsnWyV96z6oijXPff24hGCUnZZNu764pNCRigMpou72",
  "key11": "3pTXmU673GbBWHNdPVBbr8V9gFDUix9Nz3Ewc353kP9XghTFrsPANaGWxbL6db9Fiv7H4DYus8gjjsqDYJJCnjMH",
  "key12": "25yhx9xGd9ZDMtKxoroWmCuxTzXm1tpKnmNHZRGMyjrSoiAKwC1GxCfpPDNP7XAPpPAdtvPXvsrrLCMbYPkESRrz",
  "key13": "3sDFipUVrRzwXiYCATZv8kF4F2taSKEZ8tMsT8M3ZiaAqNeuRTEwsVJiB4bFYbShmbFTK3b6wNYJjuAJ18pWRQ2n",
  "key14": "8xxNtgz172VMDETnuPNz3tfsUs8kYBTgz9ko8tHVRqV6ytibS28XkhG7QdEmt8hsLeuX7dahenkFNikZ1DgozpN",
  "key15": "5z8vxpe7JQeRsXw93oHS3HSSbeP6RMn92oLWEKXMVoXDrnp9CGgDSxo1E5etmiMAYnoZmMXcwRh1gSaXckxnuSiy",
  "key16": "4q8yXpojuWsKWw27km5NcQ9KpYrWSYNmCYpcCqv2cZ6vZ4dxivGw5Xaxr4yw5SX7BuGASe5bzrFCH5AsAKPu8edY",
  "key17": "5zYHYpqZx62V9xpJRhyx7fV5bh6A8LFUMip5mJdKP7aQgNhVdbFNZ2yRGbWj9imYkx8pQUgKEyeFzkbTuBY4nCLd",
  "key18": "57PsR74CCuhc9kVkbSdrCxadhLUjm7rF8BWr3eiLqR5du5ZcBZpZf4GRtRDQo2UpfbrWihn8A61vVqkcYrs4pnaC",
  "key19": "U6V9e6eDm8BFTqancFC8nqGHPU9nxwt2z3kBVpzmaPwhQdVJydJXNhWYKQ2z8LgvUS3qU6oq4xtSrxBiUWifpM7",
  "key20": "2oz8py6SERzpxdUcNiGiZTyLuuVSH946wmLyrLbk3Q8LFRJNAzcGLzwDnujWzjMj22Zy9r12DBdNrR8mVwyRwLWq",
  "key21": "4o4d8zoSGkwRNzEzQtuE2wzx6sZXHKgLqdjSSdy34bXoVp1P8g1TK9AgMreKeerjVwf7kWSb2EUuhqbGcBH2Wh9U",
  "key22": "2LAvCyEtQWsTERH73bSxYXVd6xGsqmrHJ4KojPCwR26EAyxoE5PCAsmLJ1vvvoUg2QTyHYPvv7PEfh8G7aMSESj9",
  "key23": "2RFgJnijgbgAdEKMZdbXrqmN6ww2uH3X4cpsxzwA6kjHuWgJAEhVoTsfhz6zCLkvYYp2BPtckBgxbLnA6DwoNSxd",
  "key24": "tkWMHGdYwhXicjYnYACGbczCy87Y2y6vcH5gPETqFLFQcmBw2n94JFX6qh2ZfsyuHp9fZfXCGYkhCVdo2ZuKHo3",
  "key25": "YyAqhpD1xqjuN3f4JQxujftQKYYk9aycHS6oygcvm5mzc6RtFr1jLuNA3Zh8BrcrXb58Ssp7jDq54sv6vhGnLqZ",
  "key26": "2LHvmqHef3zvojQoU57KduJ2i4dQGogwsZ9strjvX1BQuV4JyvRGv2RDqhYamEPdDhby6b5gedjKbq67wpangCdH",
  "key27": "5yvfiuzhPYi4fUo3V2yS5JgkEserzZdJkJpKW4MbbJ7byxX2eC7bRcNW5mP14uRnxtd2WwzsCMQff3pX8ALAtgW1",
  "key28": "3yW22VRAdbCEqkwCzu8eB5dqRrDpAtpP2jaXWds4tiDzWE8LnKbiVnZED1938SYkeesvd5wu98FdqKqNL9xsf4wd",
  "key29": "546dNX9GqUcKCrG6uCuDDWZ3VGAsMAz4phdKGo3ivNstR4owtLNCD7utnsGojonpyGQm72N62XkE5yaVwZEm4Lrm",
  "key30": "1uVr5XtEr1Uwat4MtfWqfYd25rsKegz8j8Ko5TLs71EW78dQeqjn91abbiTG37hj8itno1W7acbFQLqVH6aTTw3",
  "key31": "2xKCXcpDob1mdtNvnzY6NwZP2npAVtSt1CWw16MV6MAYzfenX2CjbLyofTTTZqEJ8e4Ee7xNc8e2se3ocMpqyqr4",
  "key32": "3ChRgcMypUQTnBJhRjFNvzX6aeCnHHgke6jEiKJrF4bUWp7mMN5bfDWQaXv8dxwhQY85UzyhF1Ur3i6FaB9WDQ3L",
  "key33": "2TrT59dnXvDXPB7fk6cRLBVRzfDfuqDzbfAD6SeK4R7rLv7C2Ufog7KPxU4vPAaMz7gfbw5M6icAG5Wegk4M1hxm"
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
