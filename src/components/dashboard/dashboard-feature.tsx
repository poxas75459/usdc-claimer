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
    "49eNZtksEzyw3Ezeu3FmYGnfaigZpSjASDRhrNxSxcgVZ4eRHnGYsTbTTiW8ERWSmfN7ax9x6y3Mb1RuLuGCibVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FGky6atuQNjTybWuC9RecKsoadyc1YqAzYeHY9A4149k5C9VHV2LdVrQDskz1KcDfHazWZYuNd8h3FUQMCbrvjR",
  "key1": "5Rg95coxogqhU5aniofqaPipxhZ82B8jzZtvJLXVJ63uKPMADQgrxyr9P34TrYeGmmJi67kngtx57NN12RfpdJoY",
  "key2": "3uF9zJJqaWh1qXCPbfCxRu6SCsRacMBNFXXos2SJzW2hjaC4P6QMjujsvQrRLSAvsaUWAKFkvDQiu7rLryYQ2eZ6",
  "key3": "4L2jGqFdWwyaH7g4Ns1bo9nd3iBqvh7KJSoZa4gPtzho6PCrme1Wq2gw2NLX5FnspoVGXwxDgQevkdBpnDBFCegQ",
  "key4": "2x8tQWZhNKvoSNSWLoM4uHGTs51eNHBb15HVQNsithCscgVeKshQKV4dJfyZx3T4VZAXMmYV7JRNeeDYnQWa9QZQ",
  "key5": "5m2Pqmx5LHdPXu8mVB3Mo2PeaWNeAZ8cnhNUXQtfUH7NHJR2NedU8m68MqhjMCAutJaV7rv5te7W9TGU1wQ75r6j",
  "key6": "3ZaqT6mZaXgGrFRRNAezLSPoSpUcqYRZ1suTaKAyp2K72zPvngsRJGCFfX5d3JEsxjUcHHbDUiDwZCRqzrHmGiWX",
  "key7": "3ykA2izTZF1P3MyQZwMzQG2CWSSfw5gMWqPt24mXtadx16TJ2nnZ2h2sgNGfxVN9kEYorwh5pFHfXhDqYcARh9us",
  "key8": "3ohwFvPyfU4vddcXdQd9X5rrMWLrzPzpmJm8gCKLYuYmSdo5GJz44NcMn2FnamxoCqbAcn3E5XYLzeUQH1c9maCX",
  "key9": "2pPsnFYgksoyPneKU8zRd4vtJ6S2Uk7K1r87r4A5h2BVtGpYpcsAZiaE1ZciWTgm3Q7joYiuyQ2dXZUpxCdhAGSM",
  "key10": "451A7QnsjRmA1HLEhG37GqoJgjtvJvd7FPFKLtttdHwxAiRgrF9ZbKmWp8NJ9WdKzb7acN7DvacS4LnoFj5ScKmo",
  "key11": "2TNt6uS65J5RtJMAoumPVjWweJw6xpCwKBnkhGHEQwXKFM2FiiTVaLvwZjUmMeiNHjxzD5z7oZJGdNbotgxz1fe3",
  "key12": "5Q2JwHt3Pu996Lqj2b8qxkxc2CmMU6a2cDaTx93vRzZajbacJHk3AMktsd8eCYNxv51ZwpRJJRaq4wnyoTFD5dFy",
  "key13": "5SzWpBDBKidxmSY4CtHTQYRkH6i59Zss4zAgbHqa6bBHZRbLuJeu7rFmfQweKBkThF1iy8p4XczjdFqxR87wPhgn",
  "key14": "3vGeGBwbPUSZbtPX49x943wbXgNFS24erHMcKGrSX6yGdvhWhZcxhuSjRfKdSEdJ3mWrsX9Mv5GDLqDSyW9rwxF2",
  "key15": "3i9JoUFVnonR45NtgoABTzfHDgGJG76zqYyN41FvPgnrvLvXL6Eh87sAkJES5xZ2wT1Miaw299vexvBgk9dPXCBA",
  "key16": "5R1aCjWxSGe3gDr8tN1q8E7nSp7KRxpfqeYBbmUzNDv3W9qoYUvCQ9g5jch4qYQZxH3GxYaaFacowMf6PMtN2c9e",
  "key17": "3D5J9s1rr7izCCBNnrciN63Cha3tCorhVH6aZGULu4LCuyjhrocL7ciVfwScJD61yQbEKJiPViNRKd9ghaVL8pGi",
  "key18": "454uUSApyHp59oUiXDvmmJGw4VCQeHPB864jFAjUxjAb4yPr7AcdUX3RSgmnGGZ376FsGCyXhLK4mYs8hRPgWikM",
  "key19": "4Wb19GHmfWQRwyEmkhe5nN5zivjqUPYWa28psijnLk3aGbnVYHqrRKqMA8en8gtCFZuRThsFUvG3XuWhAv7dKhUP",
  "key20": "JmYzCyt68rXLSdVX9yZyjp8xDbG7gkxgyaEpPPL7UTdXGzVSn89wsZVQuF6gnipryWbiAp3awbD7wragRQmksZW",
  "key21": "37BHvwvqQUwvmuUBZBN8YfPqDXELtQjehbtMfJWQ8SG23fP7Px5KeTYcGAue6oAo3TQnBmGQYcbsgPB98NqzFUq8",
  "key22": "3GC5w2Ur3XQKepEBuBsK3sd11FYKDhqyEQVQ3RcnJFv68zVUJc3bfjM79KwzTptKKeCpoAF7WpPcBasZzEuWpFvb",
  "key23": "5366MyBJzixEe7o5iQw6Nh6i4SupwjoUPdUMisGtpBwfJoaoHjndr4WjDgw8SG5GYqVUnsinzsoJyxqLKnj7Eegp",
  "key24": "ce5D1A8BCyCJ9zkkvAYN72ZAsVg5wk8ES1KLp3tejTjwyUwfYprg5NutNXT2XVNSvsXhTgto7iKgFGV5m3hytGx",
  "key25": "5FgYU7yC85f9gmKBffRvKW6GKsLzk5pAsWnrJa1CTcyA5gppr7syu7qtT2RVnXiw4hBpHdZPf5PUtLdd6SBCGXQQ",
  "key26": "2ytNP1qX99ahcdF3vabomZeAkEzoG8piikfXqfCEKUdeE2zDrTmDegLzf3P472oFHXgrc1KYL2PeWn6m1hHJ5kPZ",
  "key27": "2XMZ9XhQm6ThZr5RStB951CqGm82KWHQ9bxdkeUnuJFWuj1wfh3LhawuMfessXH9aPVWeyptkL9udwQnR7QfjN3Q",
  "key28": "5QmiMfDhc4KX68LQQQ5uzjB9PWrnGEhBQX8g5aQTBwLN6zgshMzj6t7sYVSgyXrnNwEPS83rbX4dJ1JKC4yR8PMR",
  "key29": "5mUiwR1c2BCDDzQ7K9akhtZw1q3xeV4PBPHDi6y1MXGmzAyzBtZMdbNRnHFPqFxQaXbugFknkb7Rnut7kkAN4p9d",
  "key30": "2oSQ39M24gk3qHccmL56kHcnMm7XVjoCVSGR4sU6Q1x1Tpbb4dVxrTuJctMhrUo3QPm26Bo3tdKQB6HV5crFu9V6",
  "key31": "5seB1XYhBPFGAnioT5LaVnudDVqSBPgvzR1qVmF98tx8tDt6L5mz4kMQMpZVuenk2ijHnUW2rkqijRiRvYzHTSaU",
  "key32": "2J8FP2YAvwuQR9jUL3fe9dqqMk2HUJ3UVdXzq31akdR6Qixas1ogWeyytwGSRWKmT8c8Ybmd4A1V7cXMg2yXZVk5",
  "key33": "3tfC5Af3uBq7xVosv19WfyWxVqxpBhmCa7z1fhJJGedbJcpdzmsouU2efpfxQX8CabLj6DAfdVhKADMUs99PNG8e",
  "key34": "2hBATuqLXbRPnk2TEdV21DQS8AQkcHYWb5bhyvTTinBuL8iHSJCMFfC4T2eZgSQ6D77a4TqzXhRXbrXu5DyEkaY6",
  "key35": "4Vv74QLxZdmiaqXvygL1qeBqdE8VwrvyVe4DymzTdqYMdh7NiyFb2bGqx2zfAxn6ofHLauZ3atox2iQ2touguFjS",
  "key36": "2Ce66Hf5ftcefRBsNB5HQ59JmBSat2QKEuU2LxB6DSscKXdLVQajRPeXq6QHSz9g7dP8AV6TxStxC2JajaP6cth5"
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
