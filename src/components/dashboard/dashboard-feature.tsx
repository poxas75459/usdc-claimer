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
    "1FgmMpDntYwrxyix57XqqQZDTBDHadqX49HZ1TJ3SCMSuaeQdC4QKR5u8fnACmeENfZ9ncmRZcWCtyaTN3ybJGB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ScJXSnuDnNhsh2vwD35ueEcy2bhwDzS478CseekR3AhwYgSQuLGQH2Bd3SWfoBBWKG6dgUbt9QHTgYRC2ES2F73",
  "key1": "39XgzDTms4yQMeSGyUWqAePbvaqSi1ZW3CmZzGxJPxvBJNwr9X9Xgh6SCyXCKtbVvUqNH1VBo5NFeRJGrPnFLuyZ",
  "key2": "4GS3g9S2Zfub3vQcFHZrrwuNNh8Shw8A3TDiT22BqYaexFQyfN7tiHhcweC4uFzxJXsMbFngYkmGXvUYM92w2XT4",
  "key3": "3bSiKc8RtqdKrApkdN8jaxMLmb9CofD9gUEaXvvVSEfDfiQvPAFmZxy3rNuP2J4vaJBDGkenCS84JJNbFrghEHn6",
  "key4": "4JJxgKnk1Sg9KTjGGMvEvnoc2WvvfajUgZv5YE3tQBriixHaw1e92pXz9FfAmwYWUZCgWJFHhBGbyVfDz5J2o3Wr",
  "key5": "38kR6feFebwjWz3Mp2dX71398jEFvD7uefaa9rZBHKY2aVoyJrfVds2onGA3n7tP2Ugsq1koBqGiupfFoc1FhUpQ",
  "key6": "Qc5mAwKNraZFb7xwjhbcVE4QmG58Lm5gv4MXy6UC7FjQDfbCbVMvonY27Hk5Kr8mayBiRRVEvH7yhTgNMBTEQUh",
  "key7": "eoTNKAPPjaKFkohq8Z6fRwfrgwe9BNUPYjFwP4PeitMz5NvAbi2CTi223w4b4AcbzwtfC7mJiesCwXqLezeV4qc",
  "key8": "2eW1DwwcNivLLKRbKFgK7dzLxsdDyzUG6gHJ1Fz7m1QsRupq9LrPVreBA27PyUCJUSKitCKXRsBfrrK1qMiWHgQv",
  "key9": "5WDrx37Hbq6WLGSP4zLjZh1vJhKmFVhD41K7kehiScHd7C3hWTuox8MsaCUndfe1Q6HfN2VvhL6XH9q7MkTgjSfY",
  "key10": "3p4UKdSfuweMTqUinGj3Yem8DBQkoTEeRBfURsh6vMwx3FiKE25cxbAy8EMT3Cqq7XBqccynM8Po8NTPZKEkvN81",
  "key11": "2un3TtKoE7qohxxaSZKxLRYCES8ZuoHLt1eqF1y6DTAUevN5AoNfMhvKmZ5fi4wuWLT1rEaUuT92mY7SKCpitENv",
  "key12": "3myW7EQDS38PGQ6naTTpjuYiAzEeoJdJdyYK84UChwECojmVugTuBW9VXBgUUsbSw2WNhjC7xTARaceG2bwXRK4k",
  "key13": "22uoVUf92gtRA3zTGVSbydoYkXTfPFRkRptKvZ4372ncqtBzgwBf2jTPhhNNXpWx2WomzjkgDZS24X9PXMf3UvMo",
  "key14": "3rtYTj1NEjxU16dchAVKbomNbXnT2m9mZnqvZuK861PLALgUGKTgCYSwJua2rGNsPLDCnJDBJsJHtorN82iD7ao6",
  "key15": "2wHw9EpVS89XB8poYDLaTiNQLt19ky1zuZrLqUyap7LvktoTHHz6fPea6GSrK87keJ2PvAHrbiMDXyZRe6TmL8F2",
  "key16": "3QSYHthhyXdbBUZwtPHp5jPjnxCTuGy4oxS9yDsBHVphZFuMJ7MTkwZ5cX9wJifJUa4F4Am8bETLghQLf1mGKHQH",
  "key17": "57emqwLAkHjxHhwmFz9bnCFkcfr7rxUngVUCd4riAKLgaJpLJnxu1HbfZ2dtmNVHLTHVZuUuh3xDmTVAuJFLyAqi",
  "key18": "2L17MdCmKKdJMKXhffU7go7BU12Dyf8dgaNoWeqAkVPhvBV9k6PayUiXMVcnoTHxwi4iHm4j5rVP28tsbEZaHmWy",
  "key19": "4vgNiVxBnDyaifbBjzGd6jfyDcBKuQUUWC8noSU8JRLmnAKtCQDjwpJqT4wWWi6QZiUJfbDeaDmds4tYf3na7GCn",
  "key20": "2SW7cMPfFRWD2nYRAwzTHyQZNPfqU6d813bHrL98fzbBN6K9YUEMwJBuojzaRnQDHRBoTJqYKPrMdeww1NMPpumh",
  "key21": "oGcQHeRsoMUcUv79ZKmoZkPmJZjvwnfJmbeSeGMdQRQchgkqGAY2WeKgfYmqAJTii4ZKYA2jTKrSG3cM9kKNMjW",
  "key22": "wtQH4kGzjgY8MRt5aTFXZo8NrVsJi1qN2NA5FRqvo5scvqJRHBWjimaHt45WcLWxMyFmFEaDsXPkdKiBo1w7QZe",
  "key23": "2W9J4fUSw6Y4uukkPuS5Cmc3Fg6RE8C5MtN1WHQJsrecEndqPcMoxg2EkiYQdtg3UzLiNEYCGcsVF7oZ1zQKjwGp",
  "key24": "3PikXfPRoRUPW4yehwsJkoLZTd8NaF7XdQCLnSqCH7vmWqBGHHs9ij1ksnVPad4dor4bvjDwqJqJ52i4FxrNJrCE",
  "key25": "2cETRJu3hMyezY1jVvNKGwzrECx8Sg8pWTe1wkrWdg6PcPKr681YN5KH1RCqg8TA32bd166bS1YWNJ9sAC3brw6d",
  "key26": "3se2w8W5vFWiGmfowAtsgp1SGWGva5H9M9eo6UdXkvfSvNiPdL8Gc6zjsUGnzFPCzCkza3wsm37csr4c34LxicXr"
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
