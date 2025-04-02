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
    "3xPt1Pu8wpTcCYH6eWCZJ8KaaqEMfb1PLqeuh34nZB2z1zAozcd5fjkfUQGJ8k2XxfeKHqYgjkMKxvxzT5ebLkWw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TcFiR2MdD7Td4LiAE3fo1zuojVauJbcUbjJFQrPsC8eDjLZXR2vXSUgAqwfa5xgPiWF1pKhfxizYWMQ1eXyPEdR",
  "key1": "3GtrtpFx6aBhMCe9vJGr8EL3ZrN6qBgFpHStNimSAiaLvNZJbQxSVtoBLwcSpENj1H9A7Muj1iqTsdWdyD4jewq8",
  "key2": "3LEvonKc7vaKjANdXMHjGWBMGGVh85mf7m9eVco7y4oADBwzGZ3zcxTPMPuMh2XbrnRJ4L6CM4ZxQKBBnqsqZnet",
  "key3": "3bF9ePAiJPepJy1py3My3aCr6CN6wSQ4Ck6pmN9ZuMsUXKu2tjSEoCQXa2hMU2B2JqybBeG2DK2jHRroYxpapATu",
  "key4": "HS9sdPDSz4fbh7VVrTPLvdseSKTxCghiiWWfgiEFUj83nJA59mGsSybKkZRjvKqKezms7H9VP6KwhzAq4FhkPvA",
  "key5": "5hoo5cEzmSTZWbLBPAgA7pLcbMFsUfaoVAEaqTpkZLy1FLjG149QhRJZvyRkY4rYbmjuCa8MfU7TejCcGwypS4v8",
  "key6": "5gJw7ttYQ9Ax2ntjddThL9cLYv34c9kvzkCiH7woyMMrahnG5xeqGynGW7GLN9Cvy8EPsWCJfGf8GBzhqLvgeU1w",
  "key7": "42XXZ6V5Ku14hvzkxrcNurmX7jFVki3NdJ6i4e9UHXchMf48ihqcdKMzd3U41JVZYWoBCuiYYvN22QiFNeYedUav",
  "key8": "4pzd7d7S2h6HtJYfQ3AG8ZRnyAsAFyfrX7KVGs1UaHuhdmVEamVuiJwPZA16AXs1EQsoAzhPHoiwBz2NyhCEoT6L",
  "key9": "5piCWV5BDDktEUBvH2jJcoVJ6LagT2C2Eq84Bia88DwUutfYzuoe1TyAkGuTNErKgbokqBQdWo5zduK1fBzWusfr",
  "key10": "4fmXPyVxXmT9JEd8zFC5gA4nSdGddu11PLGejTg79Qxfg73qq3x6sxohfQNJJLzxoyLPHq44btogK2Ae2oui2Bjd",
  "key11": "2i2tpZyotJPKqGToPiuuJb6w182i9yNce2Z7vWRK8QhMaJ7sUrEKvUs9CwL1pCFdjYw9DspinYgvKezBaYBtsi1M",
  "key12": "3YhhkYiJQqxH2RYqqeAHNPPPoU5EYZm4YSgMb95jimdmZ7qdy3U6PmP6TMq98dXDCMyCcK9RGTrvuWbrAPN16cUM",
  "key13": "KxPeuKx3JMR5M8baZvf9txT3qcrSSghPPgGZ2p4arq4FPTSL7g9kKZRyyZCk9fdMH8ws6TGwQwynpGGNpbZ6ZoD",
  "key14": "3sept4KEWEPEQhy8Yuk5WTE4NzFFFBoDUeZQUZM6287NtVRHV3WWco8abPhsD6kyAS6wzbawvUsFQvZWj6Nb4cFf",
  "key15": "3F19rVCMBh7Pc39ZihZ1nDykGFMufE45fFPT4GhYt4L2oph3nwkSarZLGBt9ncjwzNZB6rQRzy7h5Vu79QngVrMw",
  "key16": "9FC2Wi5XBxgR3rC7PVxMXNYKmqfTFs17hsDGpqh78f5AFJkZ3kn4wpRWrXjJRxAtDis3X4nZt5RVtMM1LSdpLtN",
  "key17": "35opKav9SP5EwBqKhvbNJ8cGUHfTe1thhMVp5cf1MJmovpeNnZFSQYKm6gtxgEoiQz1ER2KMQi2YhzjznzRon2WS",
  "key18": "2vumpVJcJtFrVxpPAjcXYHEFZLN4Jx1SnYVTuVmVVhreMLc6gnYVjxkC3DbG9vTcXQwvCNpe176bTg5NtGUbBo2X",
  "key19": "39wqp6XDhdpMii4HBi5749tRFmka7Zrnf1gm131FX1XGwxwj34bmsRQN1rbVXePseY7haCRxgKTxUyFf8Dx7LLNf",
  "key20": "EDqMDvzYu9VXrw6bTJwY5CxffEFpc3E1iG63unAdA4oPNudtp4HQxRtrY6bkZuuNqKM7V2PNnGSMmkNA2wBiPJ2",
  "key21": "4aVP8T3Jbmf2e16j3aiEU46QMmhHP6Ch72Qu77nvUbmYL66hJuqU4KD26jLMm8MPD2oaHz83EGzDgDpRd7p99ibH",
  "key22": "5xDpEdNAszyPpyH2M1kYNEhPrjsVziBfUqpscBzV4q8QfgtDr3sM9QgDXVx5wcLXwVoDe1SCo9Mo1M4h9UqmgZ3F",
  "key23": "4tZswvPdPjDW2P1VvUoqFT2fzQTfg8MW8BFRYWV2bcoPtA5VWRQiXbhZdurPtv8tfykMd9x8asBV3UvN9MoXh622",
  "key24": "57VsBLL5CPCfzuywZmbiu2wKQrg6H2wbLdxiz62vLaJkLCgom2QNZPFYFfDubKfbe5VRn3VkWsw7AFBaDBgr1Yu6",
  "key25": "2yKdfo4biGVFQE3bsNrkiN3ZyED3GqwGoDcwGr1Q19uiegD5fozDPHpMvYimPs5GdxKg8f6pqvs7WbFJFL7Vp9Nh",
  "key26": "38TRUw1J2VQ1qYGpoh1LzsncKNM2kue5PtQWXWvfYck7ytfZWHK7XWtAFVJ5VaBQtmi6gwoJn7BAoKffftUBVQxK",
  "key27": "45XcFV9RxamPp9oXydzo9TgpMeTScwEt1DDK44C6jhUpUjGwKYmQeo4UTjc7fbesjwD7nNUEqMhq2RWqGqrsgEiP"
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
