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
    "5xUDzvePxbYvrccqSWUWjk7yLb8QmLQoyb9cTcV5w9AHnJmutnkXYKSTBuwFH8Arg3VGN1fgvmqeULBA1RDVvEUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "13XNfM4ZVZhnQySkhPjAUgcmp5hv5vwUruxnYrkrKJB3rXsRcJDDApczrXeLajMwV6JKRMb8K8CPCeTEcgNKVeF",
  "key1": "2FFaTkLzyfsTjfKoSP8xSQbDaH9EPBHyG3pMTcGnCSe9tBi9G5uiV4Pi6g4PPvRKtxk5xXmLrK4p8hNEpFn1tufb",
  "key2": "ZvF5qhT545BtnMdCrMhygKDTcvQ533q9SMahM3pjhYxdbLCHfhFUZugDbQ1W9PPWPMjfszhu8abeGktY3EoTMS6",
  "key3": "5vi98sDN15qSVtdhSpnqNkiMUPjybcWMQtNGszEg2SpzqVQ8jEKXuE1HgLrjnX3yjD2LGv2W9mCfaW1gVrU984a",
  "key4": "57BpHRQPnWuQk2TA3DpH9ETSeRTgoqettW5fyX61CBuWbFbAr2QsFCdBHFbC6Gz8YD7cVpF2gv55KTvqnV9F23XK",
  "key5": "CtNfbbxmc9q2e15drdoe9HDEhS8CytqM9t1SpMZCB7Q9bXrbLnTKBXv8qencYR7dAJ7ohQgWbLfda8DkZQ4Vb7A",
  "key6": "3Ha7zoAm9kdbntG8Jb1DEz5P51WfaPpRcnXHHDz5gkYUmkMY1bV6TV1Y1bTWdCvHD6ZGwzi72QLjiQSr7Zisnima",
  "key7": "25oG2w4tuvSrSbiQroK3enbGdXDhq7aDDtc87otC5Ucin9s8HvstgD1LuxddqrMBdCpK4zBrDwoXtXe4G4zn843N",
  "key8": "5a9vVfVW1aMttL48n6eM75rNQXvBdJdiaiJW4uGj2hvh36nHCHckXuaMxxNyFzt3eKsMdfUBKyxnsWCD6Sv2Q1C3",
  "key9": "5jyELsiZyQapNghGqrXw7Raw7T15nU7fy1NevNETPmyazTBg6zSfryPnCpuwT2NC7KCpcmYe6JruP3Wzm2C9E1L5",
  "key10": "531MBV1pQfiktH2aMFS6gsYGagpHaXXXnjznvmKnT9FmMzmGeeW12LATj9yLosn22wA4xTXgbdugGqGTh3T67NDC",
  "key11": "4cpMwfagkYJLqoK6W1nT7UFk86Avhee5R7j6CvYD8QunRj7ZxpA4NKoLQgPBN2pnJMKsHep55U9jbBBixjtAgw4p",
  "key12": "5HxWeS22sZDSf9pmstErrkLiaQcg5LrSJokDUpEKtr1GWpKZVJY7DsoBbd4kfuoWGpP9KZ5HPuuLCERywazz3g3H",
  "key13": "4RG9GexRFQ8bqD2bZb8qhCGxXrGvPApyrNsFDzisUsLTBgAdQuPLpEW6dkZrD3qs8fy5SmKVfNQBEBAneegECKv3",
  "key14": "5tf8eDdrvXiyJnquRaVrmsYYiftVqthjtXNrX9irG9n94wEwMSaACrk2a7hCJJDvEXAkwUkH4KBpncGAC93reKqQ",
  "key15": "qUvaLbGz9fdhvnHAyAMguhRHGstXEqkZLzBqbwT8yfWp1JrWpuxz4QbNPgoudKMxtJZ8XwkGiBZiDsj8BoBjAdp",
  "key16": "4VgBKhfVVVfLwnACTYA4SDbSQySvA9EicToFNEKETRFrJK1YuNXQ3MieBmJ26Z4GmRKRH8SbmDwsJGhqKmo4bz9u",
  "key17": "22iqTGc6mPhzwSKm8pGQAcDbYnNgPYkp42H6U4RhkFMxvH3Ahf9Hr6rUH6bwjVWkgQg8DqUAAnsuw8pFHYxg9UEt",
  "key18": "4bA7zF1uzm7NWWzpRciyK2RbDA8Cwd18A5v9Wwx7zVmW3SNEcT7VttCbApmU2LCzPfyZYzDJeN6gv2i8SRTTvcYF",
  "key19": "4fd53XuWeq6vun21RDisoLJMToDUcXbjM5TSwfrEm4RCz5DvPXLF6KY7YnonZP7Qq7GhMqb3LwpEs6ZUUmiQeVRK",
  "key20": "YNpKisD67MYin1wbNM4YKCkYWw5jPF4bJTZMkmBWpzs75DigZitmj4GnyVCt8GFmnhr1Kqo53ftM89bgR4bmuWY",
  "key21": "35Kb69ErZx1ztEPVHnKyXtgPiAesRNkBSZoXBiRfikaD3sdE4Q4VfFKMiRCLPAZXJKziXDkXxjE1JXuBvHSRbQdH",
  "key22": "zaSvjYaMvQE2DvoubXuv85wBV7MR94Sovg5ddBzzhbkgNC5r1jDbhsRhdUpM2v8RzuurrJiNntPrAsqeTFrSf4g",
  "key23": "3EGERS8VCfAqn3738EpNrh8ps16ywHAGjpNjps1waAHCJQUqoDJJof5hLPpmrRJPy1SzU3bF4LwkTmbXmwGWSzyH",
  "key24": "35MsQU3D2KvcubaUc3R2HqaQycPHsiU7QrUucjWWkyrBViKWgposdx5VyoGntLveyvRhAxthvCMycM1rGCjhPJNx",
  "key25": "DUM3ptE5YG9NNRG9y5jfvydznfyNUrASYZYvX3G1fvvwgYSAg53SeASxJX72mdVh4NrmEJseS9zSLZLvJb289Lz",
  "key26": "4HqXjvGToAxPG2wM8WrpfEQ3uxhk9CpQfk6S51W6XtRG27eKFcoXgam3UvHX46PQcBTJAaapTAWYwhbrsV5yXBe3"
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
