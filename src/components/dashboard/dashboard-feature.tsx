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
    "953CJMbTLF5dXsS9ja3ipGuFn9xwiCycKgSCfZeZVGTHaFJyz85Lq2xZ4N5vhz598RR2JSmqKRo6KaCaBkMA9cR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xRBnw8DNhTT8L9KerF2X18mai8hGuMVURS69anyUj9ZBheb5gPh1roXCmZxykozrWdHxZYnFtnM6LwvLibe9xZt",
  "key1": "3pJBmN7hZvchc4TjpLJvqDQ6oWUtHFRYNbaPY4muFqpcXpTyLtt4CT3ZcT1LcTV39UhYKQXAskoVLZXVMbfGpLTr",
  "key2": "2RdtG9Cv2TKqRwBuTq2P8ZHcNkU734fV9Q2Yy2PNHx4888c1PJTifJr6R3tx3evm6znN5XuKmwgpTm22GMf65bRN",
  "key3": "4fvVtwxhhJeBxJ3qJpfHfnKcbbryBztZJkj1NWCPA2rT2Q1QjjZiYHaUuQFkhfjN5UNNpXgJgo8TFy3RJ4nwjEhz",
  "key4": "5eUx5SCNcC5JxQYHk74MLRKfLB4cegGhviqBei1yEj5rL5BB4P3CHAks6BYF4AYs3fY26cyWFAY6Eu7CYKGK43cJ",
  "key5": "39k6oLyGuzQWXFPy4WcwQcaoRPyS5i5jDejY2MYt1D5cmWF1EJXDVpg9JMtbowFqXL4cN3HpLkRm2XJyfPrJdvjx",
  "key6": "3dFJ8oK5vXStRBBcJCpE6mUYDuGomBreYJwMx5b89PK9DVcLvfSbWXRwhQU68GokDKQAs5B4eiVvU4oryuttzfga",
  "key7": "2d9qBbcpxDJtEvLfapaMBkAfY2DnRDYwBAxEyME7MxCGUzfeVdYjhgNx2C4MHHGtp24SK31aNBpDXCbQNmJAimhu",
  "key8": "2xbHJQsxwWYZL2XnBb8XMPYfdHQrw5rDEDTB9ibLgsHRmWVW6vhuZMQZXzqonUhJx6AtHXeJM98wavT1j4MkgF8a",
  "key9": "44C5Ercyd8NcMT6yNeEupD1cQCQ57r5sxnm5hPfSyCN4XYuCu9j8szHeZnyE9sNXEy61BAfwZNpWdFimz7eke8oS",
  "key10": "2m4hssbMFi2AtqTCuqWQfu8vPL6jPL5k7sdCbx8UcoEsUBgSW2ZaNGQyWfYh31yBmd57Cg8UKfS9o4PtDS94LFFQ",
  "key11": "5fTnXpZjXfrJoKyA2PWEhBTnXwa7uEEAHjXD1ZdmucGJspYL5M8M8C7LC5MbHJVykv6gSQFu92S2kwQqrKBy7qYJ",
  "key12": "2ECttG36Bs4nha8RNa8PEjf9FEJSp1HF9wNkdnfmy3DDDLr59bCjLDcFyVdu2EcESjkvtMeVJUujbcb23NUBpiEq",
  "key13": "27JVoszJjWrbF3sYk2259SNPBLYKHFFVKZ2fv9PLhn5TZSRn9eMy8qAkiKMeCysxaBgHxPXEw1Vt8TcotPpMhArp",
  "key14": "5RuwskfbYBHb7x5sU9h57fFFmKmYR2Du5rR8arsP48mWVk7zZ1Uiix3FymBfuUrVoB5uPrbbrCyTJeZ6TP9DMZjY",
  "key15": "2yhVrNbc4pKMVqE3NkEPB4FY6x3ghpJdX5XEmkUVPwziG2VX9iWcos3ssnrScXGRKL6QzgiQpZ6NXPbGC2qCoBwZ",
  "key16": "3xiBhxBCgsmnJZbHN1ZM8yn7c9WabZefE9ZjogUUZwgC1LA41nEu4eg6fEyY2soZXo8f1zynsXu6ysfEwQsr3HTp",
  "key17": "4TdReZ3VsirxYEYWZmio2xqmp6MAhHUGswPmpfasBYyY8GTYd9qSyu6g6oCvN1mx7vznijrambDXW6J8DqcwUhe2",
  "key18": "3ZxaohWUmjGPupePR43owjftAKgpt3nCwNvufrQGGLduYgvezTq2Uwqd974x6LFQSVzZYs6342QYirvtC2aW2rD1",
  "key19": "4CoAEAoJtJinQWkohPREwAK7uGMUar99Ykb6MZZ9wxQ7Dom1vh7BjvxpicbD5GAar4ydTXfddQdk1gUcknt9Wvaf",
  "key20": "5dpKrT29yeUXGZmz5vCAGhah2pUwiLQ4yBaA7fGjztPRzfjRcPWonmakUU1Fe4wHn7xDyaWZLjqiuZwra1oEeCV",
  "key21": "5GofdruArcrKqju5jefkqr94Mqv7VR7F9Ks1rUmqmGgKaoM3QkKh4z5uc7G5vpSi3zJq6dDtJ9iKWPvJYEnL9riC",
  "key22": "3c3dbLh4x4gHyH7AMSmqospe9ig6MbHgMJe86UDYgBgHfhHfAkuaSBD1ws1ahDyXgb4s8oGGJviBhQ4756MrQ9Aq",
  "key23": "2NqBghw3Hnnyvrzy3PCYykGRBbCNZBpyJYjDyHZYmiYDPYdz58tivKjPBmSg9ZBws9p34NnN2yWyqqhfePz3ZCja",
  "key24": "bGhweuP22xJV5CkBa8PvewgHhPQAVq8hf8vyEPa4oRdGzsidKACELb31LreDVvKJNyb9MbcriUEpogT1Tv5xrB2",
  "key25": "3Zi4eNzsDTTGLEcS9Th9N4zxLyt4B9QZUbmcYNjRT8EGrhczXVNRnffmND26FxXVJfejdcQ7mEjJye5X2VguVxpr",
  "key26": "5VLV8TnaEiNgPmUBFjboxAbbmJL9nZNNJiFgQsG5uHFDBnixQnGASzTiZhaLFBDFePCVQNAereghjiXzoJuMU6iE",
  "key27": "25His6Uc63cNfqemdb8yRyvbas17mGFSXhLDo9C4vqaU2TBFunt5dysLHxYDDRfiSsCf2ho29jqhe7uQ4GkWpgUJ",
  "key28": "3sPeY4FS1gSLVCXW2MU8W8Xt4ZQD7PjNbDSo3tSj8EpH5wGF3EsdTLzkUTxfWCK7ePtFcTY2UVNfNnDeqq1P1xQ8",
  "key29": "kX24uaiNRsEZdbA9GZDc6By2vwzDdDsPi7VRAgyDMnEmrUEgjhTfspc1sbmufdCF67tYVeoto1Pt2D7eM5fCzzw",
  "key30": "42sRXedNsxrjCfwQmEtuYHr5LDT7V8vgr4T46qFaMnS6PdLaxcxXeGkn5tyxfYzgGFw4RfuyjgseH4mc5fS2oswy",
  "key31": "3h4cCZFN1UsX3GzWMiNf8qER85mrKKhTaoks3QAjRfhTXFm9ogT8DMyYZuuuTWU4fa8seRyweKDpB9i9C9uozUtC",
  "key32": "3bMH5uG3R5uQTAJyECgWksEVKQxVVD6JwWHseRaUAfpBGNhsrg4kG8nvPJDGCMme7E69rG3YQntFQFxb7AwgYLck"
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
