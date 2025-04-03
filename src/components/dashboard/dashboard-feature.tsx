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
    "bGf6xLi4zspbvMVKPEPkiRddV3rugXzhiVQHQ4k7EEkbr3tUiycxH4arVuTauScSSvgb6gFVMuPKCb4J5vhDqop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iDJf5tzTq4qePYEFWpywgfySvBdZPe1YZ9RQghzfjESPcaabh8JW5fCbV5YTNrje8AYEWbp7MiJjg7UEVfXKzF5",
  "key1": "3MidnW5yjpqAoXpGSXpp7QuJWLHKZcsghntNfbB5SZuqqdTY6DbYtw95kLG43kMUkhr5S1xQhciNjwoWcA8j9tfE",
  "key2": "tmeH1ig83VkgD4hzkpMNeC5H8YGpzCbf6i65SQKG5yjXqE5nuVk2XECLZbyMs2rGcAtNSSFLGKaXDwGconr3hRJ",
  "key3": "4Zac6ZcCdAjLiZf1AVqxeo4fxnvAJ9cryoMqwwYLvc5UgHHQDnfBZTFCdqdGCXXtz2NarWSwL6u4panoZdeDwhd8",
  "key4": "3PFsrVRmwqwoYzMLFYkSwH59LXBHV7XnQXrxYGzEfGSuMoThgVgqdcLqD3VbfuLNrPRk1C8J2VKbkwJKsc5wntDg",
  "key5": "3mGPyPwQr69VDvUD1s7Qai2tVqkGgew8QKkcCyqxZXWUVtX2MTmRpirxQGUqRX3SrPHz4aUcBXRMNzuN9m174YiP",
  "key6": "3pM6yydNrcYzde6QwmGdRSpRUjwPnKo6UGrDwAQdphaZshAnwpMquci4KW7KU7EjJ5V9GCXes5XMvRP8ZyyPURCB",
  "key7": "kFCkjMwrV1MTE3RAyCQw6noBUKVhsKXBMhLchVfeEfTBUWWZ3Nc1Xt74XnK3YSfvqX4rxru884AtXKYDGLMCQP7",
  "key8": "Uu4WUpMFa3dkkFrTnmu2ixEyxLrQYKrCSBussnXAebCJLGae1qNgrmKn9v2yUU7Rsg2c3HaYkqmnk2G9yKTvg6g",
  "key9": "4PsTjeZU2hhiv2s5YwevaWccUCSqW7Zqs2a3pgUbRnngkkqLU4gqgoesoXvJN4usHG8P8zdEUvmrCDsBCsTjkq58",
  "key10": "2kMKJoV7LVdByJSYRgmZq8nh7yLFpvcZ21qi7PStVRiDwi3aV3hhfT5CkNgsxFk2kHwVnNytHM3k25vQxcHxCvnk",
  "key11": "32TxsneEpLuYEwerMG2XrJPgyMvDXRaoWTE6HyyosL4dYXjJ6tUZetK5u9Wxg23rhYqFQABfBQHBcTRN81WHXNpN",
  "key12": "5HAREDM8wYcNTwWBakVdPoZgaWm6tmKsdxNCyLfcf1QQ2xWhruGTystZSWtiEMNDzL4v2eh7DmEwsF3E4RDhrWmo",
  "key13": "33ugzNWisiP9beo4QU78YmRAPVjMjp6tLhhDdGZVpsXe4twSuDVQ85H1JwiegD7Ru4JTKomj6yHa8T4JT3Ha1Yih",
  "key14": "2zu3bRjtJw1nVvpDELRNv8BBJTRmBt6LbZ5DFwAXJ1tRd4o3nQZ4zphan6Q85HhH7X1DibueyQ7QpU7mFScdPJc3",
  "key15": "2Fh26Zzw9a62F9qGoqo5w8vhc9i6iBDqJafFC4Do4SBBDTqBt4fEaC8X6ZTfia2aUcDRfPJHzWzQvdpXgQUTUtwg",
  "key16": "2PuSfnzqQtWefafYDVzFKcruDeZpdC3NwxbcW7jK72sygW733M8TLrMTiWndHrEbkM3msMSvyAQ6kVqS8noWqNbM",
  "key17": "52k95uxz85AaBktcs4nfsnzKxja6ph3WKRktdJRg87E4cxbjG8c8PgQKANpQtM9tni68pVYnt3mRWyFZP4WUvkMf",
  "key18": "4ZvkcG9tbSEUyHWhSt4KBJTAudexQyynUUPQdYoNeSW8An8hvqQdjNp2d5uzqYEtoadtyCuN2PPjap1yvyxggnRF",
  "key19": "4pXzgCoFEDVE4bu3nb6wbsPzyBMHeVmM17oLiJYtxV9QmNAksd662vGV71T7fnpDHYDtuWxFjeJozJbkxp5H8HDj",
  "key20": "4ELjYKf5WE8LZBrNDscZ8nsNfDMhowVz78wQDDPmKWCqZ8DYa4eQbdsQUNc1eU1oCQ27cRPUitYkgUVQfZcv2hng",
  "key21": "2ueESHRAr7WLydnJrYKMkAr2L2GFvMyh2zcJeYkPgP1VFk3HoaMdC6ByofdY1Lwxjf2eSr3oim1dsoNRkPNMchSb",
  "key22": "5quAwEjNHPxJWjJ2oPj2uh4TfqNmxxWPvHgEHFcSDrWX9EjHjnjeBCQfr8rQHuZtMe62nUx8nAXfNKfkmLW1BzJE",
  "key23": "4v8ep6nUFDZ2n42rgcRbNBxYyQF8jyeuRbBzUQVBXBLVvDjJVenR5MHdZrNpykWjuEjM3h2GYBC7qzBCB2KZshja",
  "key24": "2UAUcesNRz5yf8sXbSCrVe67MP3tZnw4drFvkY4g1D2WVFUjjaYsGWV9AX8LWbjnHa5LyudYBpdxmmu672EkZosj",
  "key25": "3nsVK1pzn1finKuryRSWuc33UnVYM28UWxzwPr1fburfANNwJWjWhQj4Vdu8vPLh2Kynis5xohEAyzLihfkVQjfJ",
  "key26": "2ZYB4NYdkqzfTSYNaVZooVvCDPJFrW1y7kZH8Fqquh3KDgEcp4XKq4eiswXUoBhNdsgyVWowu9MNe7WboapJ2qF"
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
