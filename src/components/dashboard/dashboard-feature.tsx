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
    "4k6c3V18q8NJ8qRYhhnC9YBkcsbJsMgLPeVStZvWBi3AEnVS4AF8cfRPTGyPU55L3aL5DBVKjmbS1ir7cMXp9cEz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mYoY7fUBquSMDqNLTZwcmaLedrdZHkLFDTDxj5TJK4wrBJZPogT3HeBfjyDnE5fxwLfotbxSNkA4r229jrp1ozP",
  "key1": "im2m8czo4oNGiPCv8f6dmkurNUPsTxhTk3qPNrghvwz1KMschN4G96BHs9czodq8eerhrUtoMBn6tzMUCiBBPmG",
  "key2": "3hvL3K4pGA6BVDTpnwfCi3SuDSC6vntWzaXNWd5w77LpEoHGYubgxq2R2NjoW9VpuYfZKGGcQM5HUi6WoNWPEAWY",
  "key3": "5Be56ULidA491Qh5DhMuchWAzA2KTBRLm95QPiKPaZ2jNimcFCThV68ewfMbGwNwbKsFHHFqkMfhbz8xbw2Vi7Yk",
  "key4": "4QNEhisdLTtDucj51WDdZbZS65AHc5eMxYrqbV3kxGZkJ2snqvFko1hFSyscuVynjnCTz6XPCNyMpjiCaxTZ7MFA",
  "key5": "2e7wzPsd8Cv6QEH6TSjP3fyCfM9WoYZ5Jq7kJJ8T57R4YU44Pqf5UHkaL6zAS5ALBjccL9zYFnAjFWMx6cGBWfha",
  "key6": "274obMbCJCb1xqVMLaaPa1J7xr6hLyS5hFUMmPKxpj2PdYqw5p8dkz3dtjNLVa2cSTgupSPETTbRnAZZEZfnQHg3",
  "key7": "46AhGt7eKPtvTpQaiynNKkwswxkG2MWPWPi73NXLoqcYXrQioQ5GWX3Piw5XnZpCgbAspvPJefyap6i8JtkhWEoK",
  "key8": "5AKpYqhZCb6y3SVQ2v1rKbS4noUfWvkeUK82fps1tGxKh4KrMkZoPwsKBDa8Ecma8DgKgaUuiDuZhJfVvdfvJzfd",
  "key9": "3aNHt4TxDmBePnT48zBau5eDTkqfZ9aSZRZKqgTw4bktm7QAs7Gt5rDi9x6XXdv4XDiGnDLVBUDE1zshZ1ktRL52",
  "key10": "NGktwqVzCNyFbf18oMrVJwiS7RekevyqXBRnxb5YJAoN2QXWGRVa6Nh614qVEPWWuLkBqcAvfcngMXTT8r3Nmvu",
  "key11": "456HfTuxfPtiqUq8panj699VpG8S1CPFq2J5UjBejjedWKBQ6HGNHrZqKSbcTCBohbEkg2tuvbwYupDHqfBDFRVx",
  "key12": "mzBpvTSHm6TXf7qigPCTSiyks1UiVwGxRQedSMU96UDXncV6eXj4aFrk18HMP4dnj76Bm8iR4k36rxAnjF8JgVn",
  "key13": "2CxVnKptCfWTSTKEmtZnoj5TzRF73p7Ei5oQWLoTaPvqWSsR1WoB4skfY5spxJ7gDx3qcPaEtZNw1yo9cRHdddiG",
  "key14": "3Ksp3ZmKku6nTJuSoZ6nsjAnEwgNLxE1PPtWBnHLWN9jXYAoJcFTw81caaoAHWZCDDVAAWpjGCDzpfAqxm5H4ffq",
  "key15": "329vZxoa7JWHRjNdm1BizDpg89nk6mXaga7QLamsUZ9ggAnAh16FA6zZRHygtFC2Ne8gFnCv4P9trHKU7dDWQKDQ",
  "key16": "3ckhG5EYr3h8ZfdFvGLNUAjZTPbDBuqYcganF8kgtgDoebFjvDqVjEk2oLXZXxPdmaUN5PYvowZiFqWnGc25xEmV",
  "key17": "5sjYKSboJomoNpLL21vKfFNUC6ALUVJumhSvmBxyP5NLkcrh6rTQmKbvMeKtkMNLXPKDxevwwRL7CYPsJXnqoi8T",
  "key18": "fjCTCxSus7rMXngwuvTrpH2VQguZCkVkfzywMt7fVYNz7T1fUMhcHh4bPRSKBHu8JYLcZBrkMQhbSBa1tdpTiqX",
  "key19": "4VjYF2jevQ4y386P6vprjCZwwqm3dYGhV9AZemmLWQkjrHwzLhpbWvjRRK3uX8PvwxDEcfkyqKndHm4BfMUsbNfB",
  "key20": "e6gFxrfG1moh5apBCYtdQHGhfTpjsMysZhpo8P6296AU4wRb7dEBMMnbnLPYy42DshjxiGg8DFsXtHpvyyQnDnr",
  "key21": "5QkDMZk6h5bDdcoxh4G9Qs4hkoaejL4GHVfan6tLZKvn3XFWKZDwjAUbDUwLswrswumh9kmrTDMR68tdA4SKdGQ2",
  "key22": "2Mv76bLxed45r2kBhBuC7bnjQsiE4DeTN9KLU3WmdFsWXKtBSZNcV4L9s8gWrv6UonZHMLNowN2yKea6VPPj8T4Y",
  "key23": "39NR4xKy8FitvdTDiE3LYJcVx6qsHY9vUSWQYeeidpmvcJbczdogAeSVJyxDQmTJ9x5wQ25EEWZrMSsDdEoEFe8E",
  "key24": "4xbVVYsqaHyf7qjJ35StTxULYR4CAzbJ1mHzv9DAu7u2KHCW5pgn7JawsaxsUsCXh94i8BGVftqhVvp1xaijANyJ",
  "key25": "3kykuYYfm98X1Zw6v22o8pXmo4oyaqXWHwMDYVWVKuU9CNcuETM2mddMskTQZ4KqgTneVsALbxuGAGGQBCN2zdPg",
  "key26": "YmfXdGwdZaqALRA2gRfjLgNKTeBMYRkJJiL7MwZgeFwewK3CK8QovkuFZyKMaz6CVVrDs7ZUHKLgD4HYwRQofNR",
  "key27": "o8MZfPMT5DuKnWzSE9mBrWyEnb8AfCE7vLyFvaGdgsSnG2ACi53rv1M7TSejoEQgWcZRQMYTNKTAb9sDVB5G5ZB",
  "key28": "4mo8c7GfKXXfGUon5XHGwdRoDC562yCHs5qaxHhAFdKVA3XMkDm34C17MRHZnCi1uVHWyJ5CvL4fyFmAqi6stVo9",
  "key29": "4EhxadVhXZNTFrGQwD5T7qZaGHLh9x7fNXuaKpAQK6k4swgo9pYymGscEYvQrXPnoigjkWxycb4TJsXQAN1Z9JTe",
  "key30": "4Mnz8gAxh8ztrxing95B97v3YHgov5xLrfZE4Tcq9hGu3QsmwLARJ1dXL5pCdxCRszs4NNrENZHWj4TSUMQvM9A1"
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
