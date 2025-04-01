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
    "2qEMCFvugi1cdgFXGYBCoXHmNcvcqBYkq1QrDbRbwwkAW5FBVJh9Qu4ZrnctGqie1khm8wugMPT54y49iTYpzGgG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ELFHb5jyUczUvW3uUZkv7BaRxzURS2ZLZ2VF3wdyPXydthNCkfQjT5PKCe9boWugodjody9TNLsZPzX3gRX6CVg",
  "key1": "2U4nTC6JovvUJbXbYPzaXUTUWyvuqN8DZRvCdhpKDzDsFDor3NztY6zBT3Kiys5mmi5Svgapqw6j1diivf381SPg",
  "key2": "2fbcEyNc5PAW89kbEmzAD86EV5xtUe7DScqC2un77kLaTrL9KBA3uNNfUdCbLvsyHMPpfYEATuRDDCubEu1xWRe6",
  "key3": "5bzaQGtHQ6QgQ93fijNPyR7wmfcefJNRGP7eYgg2Xjoq1PTKQ33poFbjy17xwcp5QzonuuUtNR13D74vLCeVs4bx",
  "key4": "2ioPzh6DhNGXYd2mtR5GUuHRRwXpR5oaeJbsBhMKHsVpN87rgKGXrjVuwizZu1cqVbqQSaSQHcD4VrYZjr3ssLpZ",
  "key5": "3FAeWBaJR4E6sj9s9xP6BuH3Gscwk15BSrXDaRKu8TVsyPoXmM6UiKcUe2E2TcMcCzgKseKaioZh46gziBp3aMNA",
  "key6": "5hLgn7KWw6RuN6NUvBYnSQr4cGqf7Rx3h1KAjTsxDrccgJXeJJmCgDJgaWoanqakXQ3AWjrViZE61t6wdZxHqEf1",
  "key7": "m6KBuFnCnSYZPekR7BYUVY9qBtr26w431iRV67vgMP1EHXfnZA9LS3Gg6xPiXLmEMMujTbzRwW3KLQnJWMaxLig",
  "key8": "AH3MiwPW4FB3zaTNqXrDwBmQTx4Jx9f88b8X9eY7uFEP28KXPo4ZFfLZw4utYiz2PDe5nKnWfsn2i24riCt43VH",
  "key9": "FH2ajKRKgcca6YWXBoW4S8cQsQ4YRKrbDqjnU1wMt93ccxrRpTroc96qC75EsiGchcQ1iY1r9PyJhuF9ZuYtNQs",
  "key10": "W9Ge2G6o7fpv5E4Wu8zemHkx4K6gPaQdFjmgrnYFvVtzGpr1QSKQJnADuVTdphn8UBCvfCdbAqmt2sUTSnSAWF8",
  "key11": "6VftYprogTwyr56rdYLuA5vsfQpHiEftrF3Bb39jQVcsiaqvzBauW3jZ7c7kFdhBWXCRCZ3oYPbEgoTMvLCaqeU",
  "key12": "2aKEYu5S24VNypovQ6Z8475UoJxySAZDm6KQ6DwU3GmCwWgwKKKkSc8V13JgypaU2zgb5ZwXG55xUzMEAWs1CEG3",
  "key13": "31tWBaKGc3F2ei28onrvV6mmjVn1JXsHPAvDM2BAvKd7Yve4Mk4v1Y6nrRXpcLYq7vyRB8xY5KHcsy1zEXgaqvsF",
  "key14": "3ZXUAAB8Az2Ao31J7q5QrcNLQkZ2yhYf4FJYebm1moyV4NnTJERuoauoUbRrLfq5apcxuhUwELwv4d3CUdD7W16R",
  "key15": "2p9Xkooenj28KDwG4Rzds62GYr5oeq9E1JuiquL3enMpzcNsujSRPY5RXyScHiFx4QLEW9z9GsvRMz4h6WPhWrA2",
  "key16": "yeEpgmf72C92Qn67w7j16DREffY9TCmq1Qua4EysadNuqe3rYFg2Lj8Nb5j2SMYtR5nKV3T5bGR2KJPJbqZDRRv",
  "key17": "9qg8TEDz8sJgCFZqRXgK62dyZHkNWHtp7ejFhtq9w3BDb9mfXNGdrdti8wALgMi2y4knzKSAA1nukEZrkc4ohMv",
  "key18": "2DtKkXwX3w2XvZFX4436T8kbsu7mxNqubQa4GgFFm6N1YdRPGX7tfUoZ6QBUThN946eXuBJpRXXo3fcZY46QDMur",
  "key19": "5PTavVYHwcZaJQH9SQZx5ekCaSpcU7x1xSFMDPxRrcSRe3YuWyuDauv9hYiRaNtWTzptTr8cnhgmyhHgRX3nucQk",
  "key20": "3M6fTJPVrNmovcPfAd3o7nC8JrHFKTqPV3DsZ84kaL5mA71JH9SA4K9YJgxxn6iW6o5e78UPdES4rEFTnihfDd4U",
  "key21": "549EtreZPYe7QjmUKKfvhRv7cnyncpyiMMCmgGt9ZXw6F4ikrHCuE3nW4mvEB14A6om6KEDAGyhkpsHDbaWPpzQ5",
  "key22": "5xxSwQQU9cTajmbop5jqrCML646fQioL1Mi4kJ7zQCfiRDFwvXJnkpaEaZtMjVxo7kXTwaxt5LhLgUi1bwMgP7qQ",
  "key23": "VAbiz53y3TGjZpb1cgPxePQQD2RJ3jz14khDRYDyd8K9QmnwwF17dh6sPZBv6LXYcAPc7VmfMmjW64KJh5w6qKk",
  "key24": "4MzDpsY1oqCgWw1EF7x1eTm6LeqFGiWyLWnLsugNu7BxYeyyiqKixPqE6Pj6MNDj4sejoMQ7qbz6ttx98QkgWvm8",
  "key25": "erLRBRbrZNmLUcrrjABpgNzCdvdc8sFbZWesGdpJLpR7XTS8BBJgntW12BeaB33zJENHN3H1Xyh1Dt4L1h2qNLf",
  "key26": "5pyme8UbapuGHxXvdfEoHeiA6ZaJhHb1bwPoxJdLcYUKEndUH73StSizc2FwtSPYbJFBZUWGso3oqJLTHjHaurjW",
  "key27": "76YD3RYVUXYNE229Guddb3aars6fcJM3JhKqZS5VDn6cuHhysxu4iAcmKCMupft9989NcrKUTby2QF8gcQY86nb",
  "key28": "5jDBDkr19Aw9oWxoxTfwkgG776jEUmZWmJ6wpLa7JuYjyF4p87NMdmTfzUAcZzEKrVb9ogbVX1rNRHdDokGJcAm3",
  "key29": "5CL11j2fbKrLRDjrjG3te4a67BfvVg47Qpi7XYMp6CnDDC8bcW7kZbnikN2q9ywEVgPpdzJRmJJFuh11C2qefDLb",
  "key30": "342iZ1GQ1kZ9u8BPLUqLq3wzHNKf1DopHSbt5fj4dATvC8mawgdWW3zXNeWve18zp8N4LEeHEJ171DG5ZwDKGT9V",
  "key31": "bSbY847W1AxnKGZeCHNAKjnuSbUHh9SdUXUff9BRMdZrby4NCvscuMv49wywCZDiwuqjYbZw6pXkMutMn4u2p9o",
  "key32": "3fTW86xdVSTr4ENsCvCMemTbGtB3X8k5WyK5ZSesaV9vFXx9ZgcrfnAgM9JCBQ7fhXyXRJ1uLYg4rLzY4Y21qVgc",
  "key33": "5xQnBtooF232Luo6fYQe1hpDivDXr33psATct8PS58TDGiVxDKFtcAk72NLU3v7Wts2CeMFjUYsQBcxSHHdzKaTc",
  "key34": "3syFM2kXpDWqwWpqndorekzgdkpV75FCR1Ky7t6VxEDmqdCBTNMqAA6cjyXLxMcZq3yuBwemb42xmXLBXCyuBLGG",
  "key35": "gQLBCiNgzFVz4ko5Kempae4jpXCLuStCYK4qZXKeESMrhh4ocnV9Yv9PGGC2W3dU1DvfxfUmRpJJGch2ANd1FEz",
  "key36": "2XaxR5H21giRvKVdCL3X5zkyuUeRG6Nzyfcp7tDLmUpTNxQHCmKcViju4fKgho2e4SJuSogbetXkixbqT9YsnrJb"
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
