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
    "kzwaZjZ42uZac2gPUSGwpMRBH7g8W5ZignheZZiiDGbAJKy7mGReqqFf1ofyNivnU2irNyLCUbprRK3x5qXsdS2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J7d65QDnfsraqotTEcccpJ6adpgBPWZkCeNvZT9z1vXt8H6t29irg5GjnrY23gVeg9yokjRV5hjSpJAjSQVFA9S",
  "key1": "5R4m4dnWkFVyAYvnEcRms88R66Q4V81GK6ZnBnRKGXyQnSEK6zBSMRRZ4df78oxC2Yb24TcLWzpQGvxqFCiWtzow",
  "key2": "3Uw14kz141JS3jBmq2kJ4P2xnoKaqYS1SywTrN47VT6nQcjzTDXCYzQseyMtwrQGU6TN5PzxvPXLHrvwMMMfigMX",
  "key3": "56vtKUSgRAeZpmZW5YcasXvJ4kp34AXbDum1AmzhyTkzeXFLBtLPNxwydNHpP3EUGQvFZSn3FUEKdFC993BLpKNC",
  "key4": "y6vBXvQeZQokCyUPJCFP2UFwAfAHRC6amyd3xwSo4ky8xSAiCVxvNShFkqRc8R33rvc75WCu5nz9B1zQyhgfTz7",
  "key5": "vHarWDDdEANniFy9rmC1pytez3CGA5kYGr9viBPPzFX6xg5DiD81XUgcBFALWzQn8UrfJtcgR5zFT3zEjnDyhEF",
  "key6": "659vGFexYeZ5qinFLGyqSRVtKAbQm2d3LE6Pon6DaRdLteLq6UoWEmk2qpM1jrxSncQpbHW5odYUNVowqppZDdsQ",
  "key7": "5oSxXUicRku2LgsK7maFiL8nyWznm7ECQTxN7bWoyZWwrA7jZ9Fww6t9sPeyUW8yp5dtgjzKFa7LXPexqdqj3TXA",
  "key8": "3DQoCHRa19aYMvESC2RZcc8of3FH4bo3BkwBbAEM8J4yxyroiVPa9Ps6wYaPKkDGq7LC4mEs5yS1bG73spgnJS7t",
  "key9": "Xz6ZeCPAUJFRkqCDUfekAnX6UBhGh4FXUa6NWgAja41b8vU8ScKWDDLhfeqpqYoFoWus2yUv1vkT7EUdw59oHSg",
  "key10": "586WdjdtbofQmMkdQ9cwUMpjbXo3haKZsWkyyPUw91ZraXKiH2txA7FpoK9jTRdCkSb7DfDU25WbLgmKkPHfcEeo",
  "key11": "5Y5eGspSXhtqqE3r85FMsiXy3JgS12s1NQ8fhchmrgPjDH4xyVWRRiUkfzpMKmpx3qybBrxpkPZYH4m7pSL61EPd",
  "key12": "4rkEWd1Df9JEGEP8UDyYMme8jMCJzdoEqN6JmWmA2RnKT5RfnaBet2syFg4weQih8q9559zWQyUhenDu8mUeQzNY",
  "key13": "3H6k6WB5Q2XsNFvfzXS32fneAVkqJEuxbJ2PnigXp8QmcqqcAQz2JiC5DjAAvqEcng3QqAo8fMgNSYX3B4RSfeVv",
  "key14": "2EvfXgTvaAGxc5onE8FMnjmwwETCLJq5M4qQhPAtW1EUnCa12pitwbT26Gx95eX2UUSQpamyC9eTA8USVXVrK4i",
  "key15": "2xMjRUvsgYQhfUMaQEF4uKV1fGhG2zPjg7AbFnziE5dev7t18vTEXAh789FZBkFJcT4Q1m1xuAav9rdPycrKrW4z",
  "key16": "cnjfrvSu1iWNvwgcy2DeZgbEi1acDGXPxFytYj2RGzx4UZ2Qv6DetgT12Z8VWSaX6MTaAYe9qMzWLehuPqZXZRN",
  "key17": "4k24yRffqQMmvUiDHEfvLLVRBhYbU7HeWEALDunbzkTKhUDxXpoyEwao3uoiF3KRPT79VZKjwABjyw8ALfiyysXb",
  "key18": "2FT8C4Ay1mzd7hpC2kBmGUmieebUPq6JtK2KtJzJNKPqhq5EAcyPFwaptcH1X6crS4FTDFWdLrWu7jg7x7zYa5Ao",
  "key19": "5F4z4Je8FbBTEwcmD69Kkjag2cH5dT8UCzoXWudsGEgv8iMLTE6dBJrbUpYwWZJRp3nwSE3kvhwpKqLwCRghMsxe",
  "key20": "8gDCgd9oL57wYPTe6AVkLPfGL8aCF6x9dWoZD3pbNfsFyxY2rhxgLCTJTa9e8TDPWu6STi4adP2fQG2Ngmi43ao",
  "key21": "4HY9iCyKsqyamz6xKYYj3TWtvp91zs5mcA3BNEcTxPDkhTgcVMw4cFCRvYd3yxx73jEb8fJayESngZeL5vfZHsUP",
  "key22": "2ncHQ9iAn5VECsuVqcdCQGfYE9eJ9VhoNWjVqBst7FxD68EiPJ48bk16KsRac9b2n29pyadwijo2T7uLqWPmAiBE",
  "key23": "5Tv9GZ7WiW1AN2TDHGnHGKRipXXPmzuv5KrwNGZD1r4QWYQVfjxvcz1AWGbXdNoFCUwzJCm5264rMaQGjNhFbAV3",
  "key24": "5X4xDWwmjQMrXqsjTzRTnWowPF2hXXjCKg9f64hXqP84ae2fnRf9qCke8L1S1DS45RBEZFNjoL3PChEzgJDwHxPr",
  "key25": "5PBnhDFsEjPWAWPjjW1nGUHogYj8VbnqSeHkZA6NmJch9ZHHT4S2rzrxX2J4YWprrsSkGLX3uR7YkEbwfSSvavk2",
  "key26": "4UqbCttASxL4RtgKWQGuCpDBqv7DT78cYNZALoARyGQhZKdFVX33uB4ZsMzG9QEBgxj9j5UHXmdhCQW4LLfxNbME",
  "key27": "338GHZHuZRWN1E41yUdDPTB9PszmWGEVdVGdXx81yNbApmkz3tNtrfxYFnUkgGVDb9zq3EUrQJRUiBAXRv7jn1Uf",
  "key28": "5wqzu5L4AEh3ouj9uqYFoRYoMgD4jXS6zupQdj5wiGhN8p3GUREjfoDLxwqeZrqDnvVTdPp4xuTnp2DmTgdX3Heg"
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
