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
    "54SKzvU9UNZdYyMVxsPp3fNrvdhcrZApTDngfmNzvpm5g5mcDmE3xmaTjBV88AnRjqvJNLFMiAXouKRWE3coRTUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N4pWcgqERykBbXpiCfjGc3dB9vwdWhMLfEEHcP8bB7nkdfbYbpHcaiRFoXitqWCVvQG9YA97YiWLD4PLBeKomxF",
  "key1": "5FUNbamxgEEosi5thoQR7NZ2iKK2jfLAY5xf72fjeKszVAe9UAFpERtmB86gfFGqrBpmyiepUYC3TGndfpn34CeD",
  "key2": "3GRzaC68UZarTnoXP2MyGTPkWisUdGjY4b3nWog2UYP2kY2Nrc6ZebaQ8y79tfsoFhibtw1ryXcFpSXThTJz5Qrd",
  "key3": "5HWPJ9NXPKbfAH4q5d7NAA2oqTjRWTHvxx3PUa6BRMvCvS67T8HxEc3TWyEghvNKcrKwnYi26q6MFp5ung5cuJty",
  "key4": "3xUTeQwZUSG1kVxw182CmMMYJ8ityxawvecVsyXFchF5Czvody7BzGEQi8ybWNtWSnzu7d6qLiPMALmguBmZJG9x",
  "key5": "2wvkp3i4mhgd38ikkUHnbLLgmM2LAdEREAFZgYHwWf4oz9CW33JQYM85SXbitEwRRoo3Cz5yiPiTyn77ZE6D4jVL",
  "key6": "nnedjX9JXMYGPTEkTLuGQGhicaPhRJjWURfx7fKS2o9fkyzAkDPqWYJMEGcmgnDgCJfCZRm13hr5TFWPgL8mbes",
  "key7": "3SkUKxtC9M1fBgZKsBqXPuTdKBcAKwhqTtmhspAsA8HujtkgYtq4kzxSgdx9SqVk9UW1wc5sfsDDCuLMK17jXfyB",
  "key8": "27eTeutawGHm7V2L9KMtpJnDHusEyMcWhLnaYmYWv2fdTPZghQXumAYQ3bXgEZdfyZypUQQEUymf6fteArV1tTWZ",
  "key9": "3RigKJ88CPeeCEJ4ZxKraaLscazbzbRN17FfPAoJmpFyUBSYLVZG1amzfH6Vc2FNcBLLnRCCJ7Lg4sFJ7Sq3ioN",
  "key10": "5q9broqpefDri2sXUB8pAqxy4fuDnU3Z5MNt4YFSKze4cpeHuEGZyWr1DeaGsSM6XQiPERtBmbphR6CXyeMPEK1P",
  "key11": "3i26XrMS4Y11cxPiv6GCdq6knjuSbqvnKcmcvfKFe3ZqstRyqi5YwV9GnCU6aDUCRkcnmfVDxgMLmWNbDTfgHmKP",
  "key12": "3wto7Z1zbAGLXYg1B43tMMmiozd1aAzDrTUh6xBDWcZNVpasznfy49RLVyhLy1wQZhbpqgH8mgNbzsHQhdFwt9S1",
  "key13": "66CkymRbJamYNiznz9zhK7SxU5yhLwbnCjsRJsXg6xFoNyL5kwyMYYceyAri5cQqNcyFEAsr7CRM3xDyMUgc2B8T",
  "key14": "2eouNYshwdBwsFwCzQcY3Ne7RXqq7m3N8JAdCRnWkgUyiZYRKT1yBLLSdjHgXfpcfrDgVatc1U9F2E4U8BtNa831",
  "key15": "4ZfFGm65yjwACMXuXfTTPFHGdkfDChBB1NmRo46m8mSM7JARKn8n3F6Gixgva7Jo7o36dyB3UdmzHtYQZAWrDnD1",
  "key16": "29CVaA8E6htxgEX8yZyMjwGUh7baj6frBZybxxgj3RRs3J9XfxkWzcyFcVg8cC4NiYcrRcXc6LVTpkKjEWvuvaA3",
  "key17": "emYvWZonRxbNGz7HzY4TJTRnrmiLWXpmxiLbHmoDdWKmy6uPnhkDZ5jHHST6Mov2rpQFjv5gsKSiqwBJyTYZK6t",
  "key18": "wz8RtQnW3SU89UjrsgddcBVNLVpQVt87hb3tVhFqgCbevpWWA5GVafBKEfMuJNwSzBhqDohhWP5XWkFA3w8BFxS",
  "key19": "28bSe1Zexq7u55GFVUKroyVDiLvVJwFmFGF3HwjCnR9YvBEmcJMamSN87CeRk72kDhkpB4DYRQMJnRK1268mDrYs",
  "key20": "3djiM7Rzd8mPbk22UcBVTFAhCDvcoAWdHGxHw243pTjwu4Rqi48am1d2xTVjGboE7vEqbckfvEsgrPkDNvjnhWFu",
  "key21": "5hgDMVwD9bCykNQFk49YBg2Ax3qR39FULdEjC1XZbiPdkrSQvdQoHgSVbXwNRFacf1Bs1Z3e9UUUuxLRFrkSa7TP",
  "key22": "3pWYsXVK7sEK4dWETygFbr2yYVYXva6BShKwk86GbhHwnffeyxXpjpTqsWzN9sPB3xzePi7H1paQQfQTVWP7YKd1",
  "key23": "2uaPSt1rawwvGARjPPJJKXvboy2wumv6ykfWYDbqdj1GY4ELwEhXpDXZS5z82PsbfMT6cEJybsXCswbEfNHpXGp5",
  "key24": "4HjGQR7kSBofGvcMTeKMG1aDcs6qy4zMyDebpWimawkmfWfuEsEag6BYv64w4N1ZVd2V18wBvtNrxHb4tZEX42x7",
  "key25": "5JQJeydiT7MTYDC3Mtr8HKxaBntfuzzb6SQ8jtP76pe7rESNEhMcAYDzfYZivJv4Xgk1S6ftEXQovZ877GahRFQw",
  "key26": "388LDnugxDYPZ5ygrEuLq7XW4w4YbR6jqRjE1jbjX8aEYuRm9fktj8rnkKygkjfptZnNgjTLuJpoo1ePE2ZU8ptW",
  "key27": "5tZvWYpBKm3XCeqqg2UqzSuXSyXMgq5wLLtk9uazxWaMGdn3fP9ndSdRH1VWDo8MGCKP7eh3rWzAgCERJaJwngBi",
  "key28": "HSyFqUQrwhodBv3rqg9trSWoZYzWPX4t3JF87bZK8ZpKg3fqUt46W4Z9RZ5EaYtcc2t3wa1HiJXas2ptLpSTaSf",
  "key29": "3zCme6c2ibomEoHg2X49y9HkF4U4iJ5q8axpBP7pJyi3n4zLJaZH7BAQhEo3s8QD9k6FbuyM4mWVCTNVp5acBUB5",
  "key30": "3EjJewTUjU31hiLg6S7fSjmonTHTHKw8ANeKWdKxFhRVntVntJuQ9XmbjcgVVGuHq4ayEwtcaEJfx5KyzgmhEyTf"
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
