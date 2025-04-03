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
    "4M9YZyVR8fQ1eYeBYedaDWBe5cMREtx4aokaFMCiJEuRRCrzrTDcUEHRdA5xKsGSjVi2mpJz47KdA4V74YmHXpiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c4wdpz4b1gQqgJDRj88A4B3k7kwn4fg63F2cMTpXspBKMpWcF5BSmj2JytwpWRGGnLenmcxbmf6Gds4pfj79Vrf",
  "key1": "2Z3TNS6fsVkpezTr3mhcz1RSTy3DsLgoiQgKFB38yKyMHZmrGXswS8ahkwRmF6Hca5hH2Q36je9eBpHUAeUtJz4m",
  "key2": "3QCxosYYAH5sbpdN14P7yCQxme8JuQWUBkdbSMYZwD7SiGxsBYhg8cEZDX3Ha7pbU28UFeu3ioQSACUjRBA9Ak5B",
  "key3": "3Sexb7ydpVZmwunwZ92BEHu7fk7mCsuR8jG8JLHBR9QqWJ6Nqk2FYbSViEmzWHfXnH6kMiQKo9oJkC1Um8gUUAXb",
  "key4": "2nHCXjE3eEWUiLCpDJG8hB1yeh9dV28jUSzufZMGjZchLarcG8cirhbgZH6W61HEjqcBefU7YVXkaDSc15UvGALC",
  "key5": "DRAgWAr9Sv286EGSXYE1MGk7mr11CejCVShAh7TDmXJSTD6tdbVpqtAYimXKiUF5zaWdaw2n1FkTrvy4mkEyBbz",
  "key6": "3RSpbpAKXkdZDbdzQwtYgc5waVEG4cJE7ZKZg4NkhmuGCDeRNna1PJJuenm6Bwm1sopyPZFgZp5cKXKRCukqk4Z3",
  "key7": "3pvZ6cFfW34X7VeP8rUjSBNhxw27qnCCEYHWWzQdDNZHTNoVYtqego8U9fE3nfZ7RvdXH5KYoTC7tPJLRvzcqbRz",
  "key8": "8U2U77Y2QiKKv3QSr9PJtQ4ny7hdxysVRY6pbiMfbnLPMdabtivh5rDnKazC9tueB3YhvhQStm5zskHAXyWrhhx",
  "key9": "3CibM5RExYmEz5h9UALZNr5zYPNFHBKNsxLWRuddZ9Ga1BPZRfLei3inaNKaYwfvDBi52piPggZKyTXmNaiv5B7j",
  "key10": "5VD9poCSsFqkKBDd8rutUzKZm4W9HoZ7yoxDRXRhQqrjLGmrwsfV45BpGvFwqR29fCAJ5ntz1EPVWYvAqm97uBeW",
  "key11": "2eRSPXDAVqZgSGYtPwem9oAS38eZ6UPUYv3dqBPDJyLcq6SGBc9wCVRFfqPdUPRMVf3dyGdQ358QEMtgu7NGRLJk",
  "key12": "GqoJq9R1JAZfGH7oRkNHYByPnHM7CnrPtUfZtFkSPyTswTWswxWpTncUpmWbG5ma4g5AJCm8GPGs2SQWwTiDqTn",
  "key13": "3eL3yviDS7eLMCTHDpx419EqzaDfhWcmFntwU8SkdVATmvkTnpVwicU34DtLk418U6wPrBwCfgnwZGbk1BiBBDZ5",
  "key14": "3mVnSujSRE6fZN3t97VmkZn8QqrJeUrQtVqbzqWr8LMRJcxnJTTxmnEYfLWCebhMo1wjbmAk1vaKUQ1vcenjHNsE",
  "key15": "33GQUngLfKRRtpxrPua7j7spSLxspxtpAX3hhXWqJe97jRnPbjKtGNYfUGRhCynJ8W2rp9ySFbrrjczyKcx6Fziv",
  "key16": "24E8zCFXaetPSjPLfD5bT9958i4QDgjjXZwy7Td6Ts2eaekFGuU8xcLgMTqE22h3RLGk3PCfSatkikKQ8NFVr9yA",
  "key17": "2MoJzeWCzauyBa5i9mvH4Vc29ShWquzcz33YMYPopARVes3csiuUCvZAxMQtDYczdJihmSi7t9fQh3e7JK935QrW",
  "key18": "31sTjoRityLWtsGnXmVUwRskbgoSmSzja3qSGoDFyFZNWdgnxiQFP2YEAfHSLJfyciSEAKxX4YLCJ1obtQRcAAyq",
  "key19": "5gAKnLXhCe3n61JBv9XqFEAeKhKvkuGSpYcvXYnk4XJ6GJ2DAV2LmaaaS7f24McjKbHaPUGUwaxZs1DD9Aouaih5",
  "key20": "uPzwgazEeqZP8fKpXTyZYMLGb95h5PrZT5kDhmWsQ9QK5yg8M44aFWvoFd1ZomURxrN7anGqPaWkzN8T7qu5bYX",
  "key21": "5vArVuGryNwLJ95Z8bpZQ9wpkRp55m1xWPimLssuWs71b4hwgvJZYgAvJkX2L3m5Q3wkoWySKWgJ5NQfC2VHa1Qq",
  "key22": "hx39kMUQBFSchLvz7Yd7tuqUiVz1G5pCeY4npKk4JMm11GTc9XYYYmXBQGok7HDk8J1WuwMQBFSYEqYgwFdw4Y8",
  "key23": "3UgUuKQw4RYnerTrVedjyuyHmdbQvydnq5CnpvFBfVjuWfwqP4mdt2u9yXSjqp2SgNrWGoJbVLa5KHJyewax2kAa",
  "key24": "2cgRFvniHaGCavuxbFa4yWzJmM3aKFDVztWWv7FmzNh98Njsba4J7kbeq9FPZwF3yTnUgC9heQSf8WBq49ZAibW7",
  "key25": "2VmuMKMoGKGizKZJ5Pi5Mc4LbS4WVQsmSsvNfQGTLN9L4X5v8q8Vw3EEt3WagnNuTnXMfN6wp5dJmBkKnfEAzpsy",
  "key26": "2pQXQvDcaMU9y53HwwjzXcDBALxp7CQq7bLQEiSQEUeGZa5c3FMxYqDhfB25zQLNSzFPFtRdmZygLdCsojMhAFCx",
  "key27": "3jKTye3hjk5683qRQKvkk6mcZspviF8LarE4j9oJ4zkca3FPGvHscQZ5jyARrw4V98GQA1n4dLsQoKwpCTN6ybfc",
  "key28": "5DzaafFnibQcS1Gjo3UWmY4LBKHdup4qrMCzsssTxxU82GyvNmNCv9P1Jj1rJs21fFs8tLX7WJeiHuqoFGoq8BK2",
  "key29": "5X8HxBvahJqQTE6W9jsCjscnxKCtAN5QDfsfPJAERTRk2d6khssQtck93SYcXLKiRAehfKERgx7A7evmohB9432N"
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
