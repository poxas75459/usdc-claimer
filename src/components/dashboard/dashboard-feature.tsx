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
    "3FpjW7FRdhWPvJ99p8NGiaYU9Lc92XbNRRTvZ2gSb3m26zCEKMiT5U4v1GLbdQZwHBWjuC7yYHP2SP4LXhJGACEw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cgj2wppiQsyTTMyHdFkKhyb5xtPrTkEd36G8Coa9X93XVPYcBJpkZea7hesaCGzDn6Ez1w6YhyUXeu5tXwyMX5N",
  "key1": "2K2xMWqYZsJZryArieTPZ6Jbz8yNMfUuKsZEEZSknkH6pSp23vQDf2p7qSJEJcvPdivTEx3kJnyhoUxFLRK1d8YL",
  "key2": "4bBFs7QJt4RTRirp17uYw9e8V2QM22guS4T9eytcdD31X4gZ8D4TRXeNCneDBmjnKQLN4Xzds8Am3FFyDRe5xMS7",
  "key3": "5AsTwmcpfxfFwLwRbLuB7j78Xv69yctj7qHbS9jqLE5JiEK6ZBUoNBQWXr31YmKahYgJjXMkprs43n1v9XYmn3tr",
  "key4": "YyXCorbKYwpndjgaJ5AcvqvQNqSeRnAjJ79UBBBXf7sYZUifBqnYwykZL9cyM2YyV4iWfMf86EBAr1Vx8EZvgr5",
  "key5": "3imRD1nDpsJL3ZB5NCGeDpRt3QPGkHSooaFnKNLKg8JLzfirNH1Xd1QqVF3gfR7mnqBqvRS7FYRTnJ5ZUCQA4K29",
  "key6": "7nXxS8PYZH4sfuphWkSLCcz8gPh9UiydBY9LXRTNa4KxSvyU5FXWddBXXYYFos9x4N5eUgFF1aQNzujDuEZYmyL",
  "key7": "5Sj5NNVPZjMwvJmgjB7xETzeUmacPYUJw3NX7TAxEQmmJ1hEa5V2U4Uu8dEJjBsqVi7kn7ASSCCNPNkTaPCKd7n7",
  "key8": "diQ6wm3Zh2rCpYi6isV1doauZVEFR4NQkZexJfboNQzbztSLMy8NRncvkZFAjDWkvbVNA2LAmsnfRQuRVeCV2Ab",
  "key9": "2DL9iwe217MorzFfSehLarKokAcpWntkSZFHL477GquvTVB17bTFrdHVxvtLvCvdc5vJEY9kQQGHMPokcogBWywQ",
  "key10": "394ePnckwKMSssL325QEEG9jT6hizS9GbuaPewyL6tJPZwA9H5ijkpF17DoWXmyjwK5wKGUFEoyHxzaW8oArm3Ht",
  "key11": "3fuTqoqXUHiX9JFaPq5FtUdPrTCmUgmuJihYv1w9QwcXGunGPRGKgzTTF3unqWUdzuvNig9nQMULjrMXU6YcNazm",
  "key12": "3YzrwVVCgqhGYJtHNUx6HXk2mJfs5uBGEEhbcU2BHjtE3FnxCSTJR4m5mimkWyaehyctgNaAVTmJqLvfJbBmibdZ",
  "key13": "4d4kUw136ZfsR7cEPiZJ5S3VZNqM1qH8pAHbErmftJ5YNhkzM6ANKo3KotjY6Gr9epRmAZyVsqLKm2JBmiv7qcD3",
  "key14": "2wnpmrpDVDz7EitCWzGprJePf2Q83fAdsYidrzfzqSWXheEGfTJ6HQRaSr8vyGFMRZJZBdiY9wKAh4GWHHzmvJ3h",
  "key15": "2atwxwJv4UbTsFnRH7Z5nx4dCGizHq3eAHnBq3bLK3efXkSGaJDxhVTXWjYESDqRz4cy16HQ1DCuDfvpQDwEYYnv",
  "key16": "2j7cUMmeUunRks6Ttb218eisTBbo4P7qzQ9f9vjSJxmVbbrWjY8ccCTYF7eFvnSjkpPSx5dzKbei7YC6hSFG2kC1",
  "key17": "JkcxJhPkpZ269WnoxrUMKrq64MPamD3eAFaZ4Wtg5iWvNodbGkqPDo66D8Aae45jkWKkif74aAYywqk8uoAWEoc",
  "key18": "fcQEbUgET3rR8qW9YP6LqcS8GxYAEht3Jsea2VWamd2bA8LZ1wqravwswuNW3SXvKsrvQd9MkC8huHmtn5ksypa",
  "key19": "Q6nbhVBac8zSzMTRLxsetxyvsWLdSa8uda6VXbh4SgUqNqAzxM7hLNVveCmQDDe2pAzAVxnJGzDvxZraBpzvnxa",
  "key20": "5Hx7sg9JhQAPRJsQodThsFgJgq5HovkX4Xs3yHNgv1xGdCMRk2xPvaSJvS2c91hrRy9XffGnPbErgVMxshKB6NHE",
  "key21": "4gDP2HGgZZiVCvvt4ZBwEigXU6k2XdN9zwEMcm1fScVj8JphoNHqYnfgPhQs7VyEbA3WPXU3jKa8pKqyA9Vfbred",
  "key22": "2WmhbPKVbaxKGLUGDFNbgyhfsTPqzn32jMUUWX5iZJ7FYdHmVKvsLEXx7irmv5rzGj2dB6Dd4bnxYTc4BW269UYP",
  "key23": "2AS9hXrgJdASKZjycurAmRFXX48qMYQGSfS1kxKHpNSTRFKMfGkz7v1dcGNubzYdWJEGHgQAFNX5X9TbXeYvKmVp",
  "key24": "4mMyX4sfHJxBHRWAoxYwmgdQ4dPgBKehtT4siuGeAfeKBHXbc7DLit4F8dPhdiMKJURUKgrjw7n6HhhUVqX45LuF",
  "key25": "3Px4exZ3asSeK9qRYGfKo8BagJP1AtZHqH1oMTnQL3yJC3HnftjKWYf4yUBvrDtSLwzLjc6xZXUyoTPo7BwLucPQ",
  "key26": "q3AXcQxevKgRx3HUaytNe7jwNikUHhLbec3iyyMpp67dvbTtm8vyDE2hey6gsRHn5WTTPuh5h56gVtCWyQw9Atk",
  "key27": "37Nhh18F4i3UrWWwKYDPnL9egkT2Rn8zd8R7pzJhVuib8UQwmmPyaKSjomp4vxLLew8tt2PdaSddb4AB6yxG2nU7",
  "key28": "2JpYYC17fdSw9FehBLeC2fGtpJ3gnMuV64MpeB7pFDWfpXuCG4MyqPTmZ9CzTBV9ogkFXFXzvVXp5QJKnb1THco9",
  "key29": "43ysbTdhmsCSrCTUXcJqmCKS4UgxiZ3tG9n6y9SeNyRDaXBe8uTHUX45BRZheyF13GZRpN9yMDQYyXCinnqAZ7Ba",
  "key30": "4HecXgAgDYXYbKpFF95vRW8CMDzBTV86EX5egjznLAtaLngPvG7wYvwizaxLksuYbWCEPdutgvmZ8qSvkrsqcTZh",
  "key31": "3ESsHieewk65YnZELjijTAutKJbB3CqoUEcoE4v5Kg9EDjFoVy7LNfHEVC2tWEwg4651eB2X3WZ8KU7fCnd79qx4",
  "key32": "21Gh6e57gK6L2StgEpMDw7ciNkCPY7jQnFJkym9SeDgjsANJqhVZcYRLP88WUbkaN2NfWeTCN76JaxHNzCZWaRry",
  "key33": "2pX4RjMJuWnt9JvprAYh2Qjk9ropuxMwuLjFP13kWogbDR8sxQbC9AA7YbRMhTxzWejq5Px7Wt6RAhzt64epM71X",
  "key34": "Sgrywy3FMTcJFkteouLawWBFyLxabZsHCRDKNTeAJpaPVPscC3qGDnxGSBY7W1ruFbR3Xo4MV68BqUdD7ZKkXxo",
  "key35": "4A5DLZVN4UxVXTYVUPR84tMPmUZzLKMpbMc7o5zJgddpemA5ZBubhmvU8FEk5SuK64eeYL1GJeSJ6iPso45MDZrV"
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
