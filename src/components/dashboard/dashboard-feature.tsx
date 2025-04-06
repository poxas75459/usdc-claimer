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
    "3hPJNMzRiTFCx8yAszraSeC9j6vKvLqYKqYqHr19yktxoJxrBe7TVb2MNVKfCFjKwkcgmYFNcGPFeEQE4mEGkBWY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tsZTzeu4fcPWE6YYQNCxxDPTghzeR5UgdbuKqBkhYJxSjptDLqCK4ndkjhVmSd2ukwqghVTe4TPq3kS82oCu6MX",
  "key1": "2KVNVuVRFmQrYK4bxoszK3N7NpTPA6m8WENdB4SCXP95tXKbpw16VKqjKfjUTaHeiufM742vhe2L7tFsGbACcCMJ",
  "key2": "yVZD3uYVUN99WMusebtG9CupdZedrixkmdmmUQxn83Gn2pV1DVehiHurnGeucUiCC6YZ3y5LQbprmds2gUExLap",
  "key3": "3qj2BAAv7VHxr4XxqmN2ngJusEJiEHwk3Tj6FGvnEFeVTaSbmN7ndSfgQwBZFTfje6fStGCxQ7CTEpaCaRaebDgT",
  "key4": "Qu2339XxMbVGnLfDyennYqJMVG1B3M6dZ389LVpuh3bvRLugdyqK6pS2WG3RG6SkrfYkQfdKPX4eqhspF1E6yZD",
  "key5": "31g8bRHhNEpWf6wuzrQUskuu6bEC7kR86jb9BxF1SuWrQngK8thW8oTQWL11MjfDDtT38fm2c6VoxW4v7hxswZ4y",
  "key6": "57AaH3W5Kg6BNUxKBmNUP1qBsQy5rAYTkYhAowAbAiUSjMnfzMyT9xVZDhasfJ32XSy2JUBxwX9E4VCeGNb7o3if",
  "key7": "35gzDgJKNwYFbyb291ZKJMgsyrpt2UbpwzEPHodtQTsbZW9S39foZKY4t1fZzSxx1NWhtDfhEfWqEzg4rU3LDcPj",
  "key8": "pi7kr1jL3ZEHziLbqw7DaX1LvGKiVQj3XvMi7uPdLcpA4eNk5JnL1dqYVQMkbqFuwpZqsni9qMYAjbQvNCed3rF",
  "key9": "4nJQvwgTTUrxTo2PdPTjdLAFZ1YZN4eYHaaucEZgh1WpSjXnrsEoXFmnnphP6QCjkbay4NbW1prE68Xw5UL6pE4C",
  "key10": "2KYQ6TDBZLHp7Dyex2WHQ7RbBELJFMb9HFAR8udmHf7CexK7L6SA6x11r2Eep2JZTEFdVW3yNTD2bfsTqr8Ank9q",
  "key11": "4vbkV6qSWxGCjm7FKwbcD88yCaskzJDm7TEjnKKcazXNAkRP6dBorUXB75K5WqMWsmtHFqisazwjGvV37rmEow3c",
  "key12": "31tzCKR6iiFUMsyC6qq5WpKpxLibVpeGGdizwmaFiEm6fZuMmkJtHdcqvmEL1Fv7JybL4r49gabEepJVXxEnjnpK",
  "key13": "2TWMa9BiAiB91DdUtnLs9Ss7ajPtkDY1VXKRkxYvcw2Sqryb19kF4xEk4Z6nbYVt7qedh4UNwZSYShesPYKpe4H8",
  "key14": "SSnX3gWGrbzvTEfAgTg2rudNuroJYiiTnkyVG2k6SKuuZTp4FddcMnWGBA3Yc87cGDC32VtAagJF61zca8rpQH9",
  "key15": "R83xjBB7HhVcSYFxjT8NQUYgfhFiMf3CwwizSzm1ecr61wWdeziD4PGv9inVzSGsLuGiik7Actgc79Dh6WFvBtg",
  "key16": "2GQw7PXQoUzdXbtwZvW62pbvBDNnGySQUFGH5iTnkN3jN1paYsDznuDeHDsv6eePAEi2drVtYg2AGef4keqqyynS",
  "key17": "5kBiNSeW7kB31j1HRR6srPb87ZXs3ZTX9NJtJqdZMh5o5UfaqRwQ8wAsXyvreGq45tBWRdBKL9iYYWofMejgxsWV",
  "key18": "AMZitBDLAvnBqzu1N1isXNviwvyRgpD4Q634X1Dd36s9zhsBjgsiXFjoSfHhDhMTYcri3SyVnDTgWQcYdXxpoge",
  "key19": "47LKrq8UdZsYvkV1QZZejiJCEvSuFDdUFXNxjv4S8sqGY9U8824nb5REsGLh5UingzPA6BPtLy1LQJNEBPxtpRTA",
  "key20": "52TqJgfGBMD9UZ1TDNuTuAU2BAsLXBU93CjAzpaPyqnj6rRbD53Q3iWmj7tMXoUU8wPiQudvs375ipJESU4uxQoG",
  "key21": "2cytdMTY1xpTLr5FBTjB12D8MLmeFrDxK8L3ZfP4bXZfU5h3ydXexV7nWYxmYYNT1SPkPF2otLKPzRNgDqQegsCu",
  "key22": "4zpUCGKMrEYJRZ6yscbkfAf2FSAzR3TEJiCDNikXKbPFLUNMnckTiiP5BdjFU7opUdQ8SSHuEzdLfaDCjFuLkABj",
  "key23": "ZzaKBC4sojQGa941sypotyZmPjECqPatiJqoEaG6VJ8YcBc2ax6KCX864giLDLFbxuvQkUy9e3r1yUA4sexHViX",
  "key24": "3hMXUnSRCNnqMGVXYynNuwJj5snKdJYrC1EVYXv9M6Tg7mZUfMKqkU74twsribeV4fVo4m7YkkVpLcEP5wXkywar",
  "key25": "2b6KsafFT3Xeq91VqwHWF3esWh2gJh6o8HZoMLT3Q9kQZWMuvL4F6M5bNXy7xR4pUUa9bHfsV6hwXgck8hH5P4Ag",
  "key26": "pAAZL4njRym9rG6DWFaVVDWVWKW5s6GNznpw1VKiQXkxg6DVJzrocDDmktHVrZ9ySs8CZVvcNAUrEzG1Bwjmann",
  "key27": "3qPWZLTR8oo2BGFeiHf5tkqm9AMUQTCVNugNdtwSvDgvBvDyBYtPfPjV6BAcA2DEBASYsgPWD7B7MzQY4ouoj6eF",
  "key28": "3YEHrbVz1CfWBo4XioCULxMtZV2LGPkfaAUaPkbb3J1AwiCD8C9N4izdm8PNdT7a8kwxpqEMyp6aPrsM7xyChACf",
  "key29": "2kUpZ1bWyHrtPxeG1Dteqepj4z74Y4EspB8ZhrNKyCbXw7QvuKtt8gyrvEn7VHUoZcRixPdEsVKuatmU3LK9UcRw",
  "key30": "2L7xYCgddiDRcwCMYfKFy45adLTQZjmpSL6if13os31ZbfV4jHNvwUEubw43vpmi7Ltb9qFeTB5DHYu6Z1Davk9g"
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
