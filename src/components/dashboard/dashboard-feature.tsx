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
    "2zRmdBwY49GvByzCKvbyg6rPyE8LpR2ALLYxZvvF4y18Bb7t3CKzupS4ekRfPcGwaSySbGwCPmkdyHpNJCSXkm6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zMGdtytkMtuXmikJsFsvNAbUTMuQKsfNWpUsXBXt9VFJYqqKrarnUJdGfvhULpwDYy1Y8npUFWXcwey1dSKxsH",
  "key1": "2S7E1Wu8vxMbZ3UtCPbyUt2PULeEcQukoqdccLmAUvz9AYYPfWFJgpCg7xyDUzEwS6zP1W4mYL4acgwVNFB51cSk",
  "key2": "43i3WDt1oYaDvVGEbjrcyNUeu1HpSSB68pvLy6hHjticJZZrg6qMXATVe7tpGAPGkvWqQ2PPr5eeTrcRSMk7T4KP",
  "key3": "4eYW8x9UrxYTyvjNTyEjCjcAbmB3wwdfCAjaRiAe7UtRsN9mo1B7pCzc4X8zKXxz7T616btWHszY8wZNfMujfEjP",
  "key4": "Z89hD2RFprz25YwM9JXs3YzCBPANYiYnR3AZTxCfVgGXFs1DLB7cDvP7Hi3PLTSgFsbRaK6gRH28besGokjW4QB",
  "key5": "TATSrcx8RVvoyfUFtJ1iGmSCNMdKkoLHgM6vX7iqbpK2moWLu9rdgtQbtjtYyLk1mYLQuSM8DWQzEWcskA5LJNh",
  "key6": "3HhNKyrAv4cWpM4GH8W6bvryuvv7w6n5A8xf5j1t3ie6GHNXETrm5RhHVapkeiBES4fxKF5uKQaHBiMH4Yhx2Cyj",
  "key7": "wGfcA61skRQ2CZBEwRzbiUB7eVppjiqd66KNP9mcyMg2BJdQWsJMXAtpfrNkJjp5By2Yr8DDf8XgfMRAHgFTfCf",
  "key8": "63jnTeZVvm7Gogm377QbcVUz4H2KRFUUPqmRZJgV5wo1vH1UCCZSP7vD8snEtEBJPvT4fHWBSFsSNXE1y38iV48C",
  "key9": "24GrgNp8jEZ5SEzumjYQYHD3YRkmu5GaN2dWouN61KYXx3MYXuKaJNkn9FDVhRtYuBoskwhK57hziRW5cfCeXyCC",
  "key10": "5CxzC6MLqBfBdVmyWSB4n9VKtrBjXrsetNeBqBZBLDykkPBUjAUqg94U3BQu3yhZXiZFdhQ6R2rsebmJtisP8b1s",
  "key11": "5Eua8EnCNDotT2WU3HHL7aqpVYUUe9rrkwe2rqBqCAvfcW9REKrQhCikGdTNKvuEyDJhp7iijQUKMUDVG2XQH15M",
  "key12": "5scZRKjmtSbjX7zMEAMF8Gik5qr8ah9R7eNDhXMohGiKHY1mh254ckwUnBe753GF1atV8MDDbzGqtJwyqz1s5x76",
  "key13": "4LLxMAo4KXWtVwNkzDFWJMxGya9KRJ9gR8xudghEY7Q5zLtUoDyfgUyFWw7YW1uKYUNQk3V87ofhsT12Gy4Jd8fu",
  "key14": "32XMFs1yEWgDkLYaoHhDQct9zSWXX3WbMpQWfpL4wxMuXPJM92xWbNvh6Y6p2Q9AaTmVKRSmZUYD6vXE88XLefey",
  "key15": "2ZgarwtyST878F1Sg4UkQFfep9duuG8A7AVmL4Sby1EQCEBooxHf4qNmwZnk5KbWi7TUP2DzxhaQWxUyyRGmH3D2",
  "key16": "x5JZdFpLqYMtZB9qahYSN2gBS2PdXnj18YezrtzhvJcRxBgpiHRi8HJocCsFdtDsYPeypMfcUsKeiQdhwH44RT8",
  "key17": "3LGWDvWXoPG9KZP9hxowSSZ7i2UEEvdH927KNrgkthDtryXpRuGjzii7gaivj2sgpT9cHSf2KTc5EaVM6hNDGq87",
  "key18": "2fSTkxg9ypGUuFR8PvuHUoiKwhALSsWM28D13BPFwwJv6BCFGz16dgxdLbiK9AZoseBSypqZohkZ5XugUoGVvmWB",
  "key19": "4aN2yY9KRqbY3aAEfrj9T8hYgzwj1cfghNaAvkxLL1Hr9ecFE941oXhYtDKcfwSYbYeJxe8ijWDna9BCes5sA6dF",
  "key20": "24MgL4ZYq3mnAZSD4pxRNLqq3NUCreWKTcvAufEY3ojJ5MU5fi9qwBZi6zvYRLMXgSbSV8LiyFnmf9ckAvDRUpmr",
  "key21": "4hXCcLcFMyy13E2i1hGhxWo8gM6mmdfobeFd1vgCrPBnkruLZs1W3P4iatnQboVEquX3fJmPZJHmaagNsJRJAWoj",
  "key22": "4e3KGHS96Vvp2NcsjZ7frdWdnwSMZjCWkAB38KUerBogETVnzTa98bHYkJQ9Pw6oaKjzgpbG2GnGnwzP2cypYd38",
  "key23": "48CFA91a2Zr5C5EJSJkXYiWWs7eNPkujNjQFSiJtEHnoMFc8NTT9pSgtCd5WHdmMzFwVca7sZbjvvrBHBkwYXAYi",
  "key24": "4KFEtgscrCAJ723EWmo7PunjAf3m2qr6NgRr1HoBTus5pKP3sPHUtxVExLp8hFR5mLGd5nYCUkXNJkSvVBjTE3Br",
  "key25": "2ZBDcW9N4iy5S1dMh2dGLHg9xyWbUasKu8mZ11tFcdg3nyujb8GhU5inUcd9Yux8MLBdFseKHG6U7rU1Trpssxnk"
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
