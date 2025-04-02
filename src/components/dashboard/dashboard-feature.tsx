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
    "3QX1Bp6146bCbLk6X4rBPVWmi9GNoUEmwqT1FyFLwVYmC7gCiuJYRgUCbT9FV1eqzDazZdNYADCdLSbocaNmY8VN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MWAvW9a9yUZ3fTpQP9JbbYnY4PC4Ntr776DDNN57Nq2jWepRT1fsNQY5NqWLgWBXw9znW1mjtjrxZhqC6HEKZKA",
  "key1": "5YSmjMxCNvkV3BG8M76ckxSoW1W5F9tRaTu9pudadadMEabyoVDxvNw59DGyYJj7iEVpw85BKgSxtn52diu1sNi6",
  "key2": "4DMTDQUbomKBRaktEXMbzn78oBU3QiV34x4bvAVRXxf95AmfvpLvrLkg4FqpUbTxE1KLzjK1BY4Vv73xPWBWwrar",
  "key3": "3zq9ik68ixeWEBwDw8z8wn7nkaDbtamHG3aui9JkzJxApWQVo6szs7uQ5TBcsHuQv5PbYZSTCGt7hiPKtCyxja9j",
  "key4": "5FpCuxWBeDk1GKuG4KYmSVAjRjx9fNzQN3MD5uSim4H7con8pUCxEkBuJqaPwQZydU1NaLFuXqpv9gn8oXNHLMBh",
  "key5": "r1zZ7CjWNvkrnu59oSzr8NuxbZDk4XPU2yXBgBbhXVJ3L6rAqmoVZwFYBySDQAyRgFVHvKcoXVNuZQ3bt5DZLKn",
  "key6": "5Q3t9teFTgVjhkbBx41TFst35hZJ6m4s5PzSG5YBcd4euySyHJ6B8WBf4iu2R56YikAyFSvvTQu3KmhtRFj5WiuQ",
  "key7": "5xfe92mQ1WAd8tDuMA6TcmirYPdXcquruJsXmoCRZtcAJCvHb3qWimxnJ24dFXopbeN6WJDNcLBACJrsEV926xUn",
  "key8": "4nWMdLbDwhCUn8DAFhkiSqC6mDPPz6ts7xgqsDh5F9aCwbyp4RXj7znVmznpwWJVLJWoYo8d2inFf4vtUVR4eBek",
  "key9": "2yKq5SFeyxKPjoYRDQPqCBwqKYzDEvBBoZRJAVDPo8PEpxf29vge2iNLMRaGKDzNRZL16phEswi49juh8Mzf6VH8",
  "key10": "3z3TJ4FnWh8whmxGhvBSPtM2yNGHSdnT69xq1Hd9fWMwnv2d97uSPH9NRkaBReHLFAozFv52mSfucMhgKaavWEaX",
  "key11": "2eNifxZoV5ZpjkwwQLPWKh1pJDjXx2vz6ULUgnW7fjbgc9EouAbEH21djqrx93xXowLLxaW8KF2uR8RF1Q4niaHu",
  "key12": "5UyrCmzLEzKqt4fKXB9SPy4vThPXMMX5gvJmm8oPy1FCWLyj5LmScYzSFGaLEnJnvWxakmjGhdzr78BxCFq9v8Ma",
  "key13": "4Aw92inghZ2nQ2pvg15SxAWZQ9o4NnKsD2oqcMij3TonJsE8aFnD7LNNxbWdWib7UPeWDFN2R4iQmNFhhoe1EsVq",
  "key14": "3g67UdtNo3aM9yMHgdfhcqZ1dAsxmxKz9BU9NqLjMjrMYuvfVTkLPQif28X8weHSyyePU2RUXNRcusKg6WLFKWao",
  "key15": "2M6Tt2eX4GonaY4SCCTdVgxtMPg5mn8oVP9n8oF3BpfJXTHBx7WTr69ZkHPQFZdNpA2KVE1DBDBFJy5jQvHN84Gn",
  "key16": "4nNeLoxY2pnMPa75zwTyk6gLjhVL6iTvogxzvFdYcVAMW1HmuP4kTQCcpx3dv4ZrcD2UDsqp9AXJ3hKBqSdHppt6",
  "key17": "5mmLTu6bwzn3jhfSVaDHwa9ZrqcoJkEmXjJBUbKzLfHqoafp5hWWzABNt4tJCXXphtkrteqfjyqK2QCTsfyMR8vY",
  "key18": "fSbfyv1Q2jx2hDNzf5nQ8fdwP4UYjJvZREjztvENf44HzWXkd64qde6uRjerRvuASMWgr3jees96f68pc7ACXPN",
  "key19": "NQFy2u67oyy1gBmVzBoqQNNNeQk1stHjugr6hrviw1oMY4ue5aSfj1LY6S1sZhxsmtZhyBzbrpupNmzh119K6cE",
  "key20": "5vq2X62BLCv13FVrJPvu6xTMLArQcNtTk4sZ5Srt7B9pSEbYy31rKSiSmSAoJLYvkAwQUXTXBF2HaMnUE2YLNJWS",
  "key21": "3z1JTUHSgAr3w22hPGq4mgTa4oz815J8XiWdRKMUk6FKQqS4eitpDJ1aDTfsBRnDSSU9VZumv5VAZpW4Jat8N1at",
  "key22": "4DAD7YnSN1xsXzzbSG4CveGSxeRfjjz118r8WX9zkoNeNhdVVirWvBVqbXR9ZbgvMhY81zqYYuPGBiPNR8T6eZL8",
  "key23": "2KKv2BHsCmpW5RJVfPzp3D7ANrxzSxEAb4tAAMCA9rA8R5DJhzpyJrGaBjijLVjeGdBvA5gjsNpMvRbdGaaDUZeM",
  "key24": "4Y9KYMLnt2J5ju2ut4j3MBUyom7n49ArwFPm7myNVq2joWzmVLkWEwUZe4h54xZ939vEZve2Zn23BcHdoCYuVQXp",
  "key25": "c4LmV8DZw4bZX31MwdKVSwESe56MtTAhxztj9GXNprB3UDRD7RfQmJrJEa1edYCJ1LgcDtnMekcKNurBPQGoBcw",
  "key26": "4NYZLjBAcB2Mu8ureSjFm5oeMwK2WUKWJucAqSYMERATz9exTWsgytW5HTEyi2okhh8GzvzXwQUUnr8FL9D6Ho6m",
  "key27": "4EZiCXYvQUNBySpTihG7LqMfa4pjd3Uxz9CenKnh4Mjd7ZiBBYKSB1tXqfGZe1AijZJyL2n2Hj3rik82wDPZtdM6",
  "key28": "4g341sJ6Cq9EqXAU78Ny9Johh8CeqsMDQ7qGUyGeQtXGMo8xcgeVvwqUC89o2z6NbeTC8iyZhrfxBiFGBNy7bV7j",
  "key29": "47AYBL3fT9cqhrxKo7UtyWYoFx2gjhjZUTLo369HPwRvD8UMkcpFP7EWHujrDvyPxCLm4fUt8NiBRH8UNkqnQ1ag",
  "key30": "4jpYG9RKofJt7gh5LSuZPxwAXd9UqCH4YvS26ynAyzZP6A1SB9rDT22NzUQefvW56ufh89gD84vYzAGqEd1Rw5f7"
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
