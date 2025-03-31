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
    "2dzp8J3XxpnLvcxHVYf5FxJNEoL1ddf575SGaSrFWvJRsJbqJqbTQk3sZ63f8mLUeKBKwH2z1ufnHM4mC19hrCRs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53uTfkEdTpB461M3TyWdHRoUHH6gm3MLzqDwgGjEuFC6EFwVCfBK2paVD3S67Q85nTjCz6eZuKcBLW5J6mz54prG",
  "key1": "51oRextCENHGKZL2gDM4oKhH6TfJTJBLtUYciuof1gXPATueD9686DoFpsh6CgFxkyarLLVwajvJe4SCGxzNnyLN",
  "key2": "5RFyLZxbv4KvZe98Jhw1xBQPVfUFTrSDQnb2dU1q5oLVYivV5gh3nL6UDrhDXZAQG5dQkGQjzCUxDXcuJzUYwt4R",
  "key3": "3kd5fmUtvrREYWdir1FTso3hWX7FA5L5yuaPerbNeEwgRnFjRunJYrhCVm9WmeuWjTMoWd8Xahm4KPru6XDLVpJA",
  "key4": "5hb4DSVBPRTQ9G5tF1FZqh4ag4Zjp1AkUtF641KzvJqQMDX8mtEFAD3hynJNRqxZWknTEt9zpZyHwYoHg8ShBqMX",
  "key5": "4NyYu6ZXoQuh88ZR5QdnyYgkmW67myt32WoYcJPwQejbHWSqCzFdYrAY81zeia7cACmLRtDYuTucBq6xQoyufpSB",
  "key6": "39bD2bunBNtLubncettGVvVZWVdn3H8jHTDET3RKFdJDMSBbWfXm5iDdHc6Y26GJEgjqfqp7E6vqFZCNUYAN8AiG",
  "key7": "3eFkpd4moxAwdAK4Yf8e3rtWtiQytMiYUgr9PBBgrtUwc7E9HraqthivYBuGCBMiQhbGzy2VpeAVS252MZ2KSCpZ",
  "key8": "3BwmcfTCJq5SoYAme5NtYuA6NGFaCYLeus7J11MZHJoMAGScwb51dCxsmpmu6GziSyCKpBeyhK7MCiBT34Ro9KQJ",
  "key9": "63wwotZTeVUW2QYormMgg9auVHRaENBc1Ka1niKkgiA4srDCMiw3EFsxLBuXbayLiQZVMcV7Chp9wT8zxxNkgFuo",
  "key10": "4vaZZL7RerPY2Hvfi48mqDoFCjSun6GNcdQJCtcR5FY3bB9Wt9Z7Zeb8g5jQuj1CADWYxZ4nVD36KBY5icMcumbd",
  "key11": "21TfKYyu9NAm4Q84sJpXR1JFbvxyaTYMgS9G3QGSqaVHD4znJQvgiXgCPNKuv2F99bmqUZhhR5FmAD6MmweNJ5Za",
  "key12": "3DUELsoFmMXwq6T58WtTeNr7hLfRU5ZrMBUDQYZuUqSZT3aL3f5MT5kRJ8dqs6WMHxEvAf48yAUfugBw1UXgXrWX",
  "key13": "2gHg1TcZXUsF5mEX7LGpZy48Qsz7FcfRSV4tpsZVuKnerBgktDGpc6kaVpqYXoDckfehmAnTkgGU59wbW11pVxKU",
  "key14": "67LwQvoTsGcjj7N2cLekup1RqRcMMWoGgCK4adTnwWAPRCZ5JYAWWL5HJRKUH3D8UmUcvGWqsGGEjrKad8iBK7Fj",
  "key15": "52j8oh8dz5wnEPbmC3dW58AaRRacoPW3jkuHMhH3aJEwotArkkGuj4nRARtH5m9z7DskQF4HxgE8huYcGHCzbnet",
  "key16": "3rdsz7V1A9UcnZnu2t4faPPhA4fegYBdnxqFwiKHeHnb3gt2BuJ9e1JEnYtXGebfaBbE8Bc5pJQMGYoHs27xPydP",
  "key17": "5azNyAFG7BssJ17HaBg8Mys3gkdTnbQJiTGjMqRhvNvrcEpBWHGwdEwusPagyfhB7Dxb5dvTpcYEJ39VnCfbf6cZ",
  "key18": "Bxfk2uaYhTjcYYhFwQhkkxgBX3tYKADnpN6xDcNYbZxAK6HHhy2cXgTPQHfx493ikd2QN81L1wcfsjpAcwNas4p",
  "key19": "2qhVvS8Zd9FjyF8PaA6vz7k6bkAuuteeD3HCkLcNdxNLgfhBwaF8RsTqmBXZkkFQLo5p8bCXvM2Ltjmtf5xuy4jh",
  "key20": "2GdjbNSBVqjVui1Wjto4jHJvhSMNu52aCGUottgQKJw5xzBFsE3jTvdw1CFuAmAEuSgQF6ArTQtfykdiuwNTZpPp",
  "key21": "5WBYSSzo4JwqHqzmU9oCaQJAg3u1Y92kspq1kki3no4fVJfWtiAkoz7mMax2w17qrY9Z7GtYTCvgBCbUqdajvUfU",
  "key22": "2e1oEpk4df8dNMEGigLTThav34QqDP1qCtzt6LGhhaXPMWCAvh1rNMEgG4vsvfU5YaRdv4ZPKdLktGbtCXwG8tJj",
  "key23": "5Tb6QJ5EJHhkKCWTh5P1BCqqZSuQXsmJdBJuwTxyV6aQPk6hgd9VTUjs41zXsXLDnLdz2scWPfiwcPSKxNdryUSo",
  "key24": "5D8SBkoC4BcRz3oBoj3Yi39xtvZAuJ1UBkgNhEJok3uRjk9SqXTEMvcJ9hn2VtEaBfy4ssNMvaLBaz8KTcGdf9Hz",
  "key25": "4WocXg1yXrWDbuk9mTQW3ZMicASN6LJQq3nAHYZuXxBJuZ78n8M9X7g8bcLpucBYhrHFZpBXGMnqT95biubpkXs3",
  "key26": "5jmGMKEGyFPzqxe78D4SaTsLTe9Mdxsi4zxXPb7JpSPLqsvEwLb36ra6nxqZrVxMhsTFvPBfbj5Vrq6CLtYKTGMG",
  "key27": "5DUZDyGDz1A74xj4NDYWkCcS6YtuuNdNWLuGqZY5PjETyepSW6RHaMpgFMP6oee7xDgHFLtyj29oxtj2u6DFyCi9",
  "key28": "5c3n9CdvFWRr9t9zZyDzBJmmxQaJSHGYyww8HoToPPgSe52kr5oYCESfde3TNy6KQgyVBkdNt2EU2PFd2U6cHrhC",
  "key29": "4AdgwMXPksZjJMb6JCo1ELvYTMFZdUCKgEt9Qo9R8NzWunb5gSzboVQxR2XX89xEPTHff122S6okDJxH8PVSqb5v",
  "key30": "4G9mszcfgDEwA7ZuhpX6ZTEd9zCzE2QZ7288je4ZzvVN1aoxg651zTY2qRAygFhDPrkcbEBcDtNMMtp6k6DUBomz",
  "key31": "P18jg5vGftcJuU8JjuTkN8tZdcRemzRhZHoGzRJi6vWPG54XfdDPwi4QwH6FSgzqmZ31w226mmpWKwJRLVQ9kUp"
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
