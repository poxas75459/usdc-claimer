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
    "tsDnWHeNRmuoHiwwwMrBuC4A6TL4kZwMcwYzDTBwuutxqozwpBBVpM4iArKYGTdXkGD8gHgSeV7jDZCfmKD1V5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "14y4thZwmUiBVxkyMU88f9S1T2hW3xs8dSGL2CrSfKqRQuYSQoVVVTkJrySbsKtncyaota43MP9Ts7deEEBkGhB",
  "key1": "mKD1awPwnxNRB5aMRYddMsQmQpQxomkqFio9fHftKugFbNQrxAjFtcWgxmDEjAjrCvt25TGiXkT5J7Mmv534DtW",
  "key2": "4KAenrpa6EoF9oCoqitbL7uPCDW8ZpW94och6uhDVMTJbsARMc75C757MujXivqGasufPCd3DJMAywAbcQ1os5r7",
  "key3": "2BfG5JEKrpGBg8ekiBjgqWoxH9R7yvAtkFcGrv874SPcDAjgWxY1dxpigPLMiz446hoDL5oyvB3orFUa8GUDxomW",
  "key4": "3eciy57G4jEoavZuZ6npNPjRz3ozyG8YMqR8L5VurVRuqeqbmieZPiuDDSFZxr39hFXiSSepv7tYiYGK72Zpa9ev",
  "key5": "5ZhwT7dhENfcLLrHXVMSWmj2HmtZTwjdfF5NfoDSjo2VyHWR7bib7KZKRyvbtFpRa5Ht7umfrpNwYUpc3GYddXbV",
  "key6": "mYhtnCBVnUj2dPZXXqsNet4A4bexXsAiNfddDk78DkV67p5raeQiMiy7RM3hNWmGhnF6FBd34vAb7eRL6Lvnmti",
  "key7": "4iDju9xDjyzuXQ4FmeC4taubKonCwfZ2D9SH5XiosbTvaQn4xD3TVr2T8EgPXsxtDsNX2PTFkfqTdQUA7JPT9AkT",
  "key8": "4pdnD6D6r7bSE1RPKYaVkeLJQAedZLC8rrHtx8Yeqje3mxbYdzuU5CqR9XQ9Dpg47PCPXNqckKYwUjJnqtmehhii",
  "key9": "DacGsrJ7QRArzAPUMVV52Ky3GGsiKJQeQ6gGnAQrh3Nn9QhUBccc6CggNM6gaf3BfXYDQcar7g3K4dysEztZ5vm",
  "key10": "2X75RS75noDoaCkQwnjhiWJLtNcuMQMuDNEisisfz1tSNVFSnBZvgLF6vgwBdcBnanxjrKYupgURi9hWiPYLdu3M",
  "key11": "2pyFrFA8Yr4AgPHVMQwwAjMy1dqtY8BGcLgsorcfkPYELem8aSPwMJX4o8hdZu2jXPo2XXeQ21ERrXtDT4J4yaF",
  "key12": "2wEYrrfQgHW5zunTBxe9zx1HeG5vSm1XhC9FygjCu4Z9FgXkx9tYDkaJdbqkJmpTdBX1pjCw3FpaodBzGVno13y",
  "key13": "29nMJa1AYSNbQoixeaZn6GhMz8YkAzzEZVbvbWFAQNzvfZSA2H6f5jR3UJG2qwG2VQ2mirSxC14JhiKe2x5b2DBV",
  "key14": "2fQybxKiqjprP46B9QcmupEyyzRYKsQM9WQY54fbyxV16knBUr8y8v2Ltywk7wmnhR1W5fKWTn4dyTDdT2kNJCPK",
  "key15": "5DzW3mPvXM45Rr5rD2ABJpxAW8H3PXuxAJGM7b74s18adRXCJu9R6EBSKfdszCMNnvWQiPgFxTGYdtbUxrEHT1em",
  "key16": "2gMbYCSXyDeXXPTb5cJAuWYbLoZP4eRSNfby5ToymtavqDwQ6fY9oFJGM1D37A1VeZpx6wFptQXk96FZCW8V3cir",
  "key17": "4FSSUvun77YZ8Xj2QVqWeHXUeE37BBEv4Tte5u8FQV5N5Ko7Cb8Ei9LH2pYXnw9NgupbGmjcXGwVDF6vgvWyHvLj",
  "key18": "54GkCRKPkCw9YYpW93uNtASkz6Z8iynJLn1cRLofh9RJLtLekCGxn6Vv7TMz5X4Vq6xpqrTkfQrQaj4Roqy4STUt",
  "key19": "8K8QZenPxwbMnzpzQX4bP69jqe8A9Dpd4jHx1iLFEd4ac8N3FL9y2N2ZoPkkFoMfsnJcTPi81AUAfgo8gVPGesV",
  "key20": "3tRY59Gjz2taEzgLhFDxbhynQDyDJxNqMqES3uUH499Ja9aYJEjJoMSaz3mvRWYjjWAJru7ovjuaEY9TwsGX5SQo",
  "key21": "2qmeCgQ3YduoH92kKD1sLHpGE81GrSq9JQxqA14EJqk1YwfQtXHQoui8k3LB7HBXqLnkgAMot8a9TU6yKn6PiWTt",
  "key22": "4L7pN5W1J6qNmcx8R2VK8PxgB3xpnxgKMARSrGTyjgzLY5gACWqar7zLWjLNXZK4ewCXCqABYizKjDhzPEJgsHms",
  "key23": "4L3Yu5wBQzKnqs3xgLMkXPdejSFna5woWjcVxHp9WLpnjzD9ZhVnPByCf4MeoCRczNWoVzUC8RBj1TtfMJaSednP",
  "key24": "3L2gPfZ7UMWDQnu54jvxmsVBFynMevPp2W1NaNQvcP1zPxVoQ2C8N9d65im6fxCWDzNzs35NMfqaJ7Sb7iU7HUkZ",
  "key25": "4WLwrNvFxzjK6vSTzgpv26PEYHftfqSSJ5aKD5uM6uPc1968WJQ63eYEmgUDxugpMNqiNVT9SPdoa8LUE4jDgNAk",
  "key26": "2PNwVuhZdXnVbkTK2XwTenro4SZQnsx7Tam6fdbMQfLst3UXRSnWKqfSDrgEApBG54qfSPTUfiuLfnET5FF6P7mA",
  "key27": "Q24jTbzLPVP6LYXXVKreFKykuTsdqpgQbpKsDkXdYVCzqS8xG5uAQkp7PgkGBzABqSPGDv1h7j2xMetbdEbM5Yw",
  "key28": "2cdRN2dFPBJJEWGHgyHpkShT4DHF3cjqq6Nhd6rQvAdPAftvSD6FRjgSVjZmM8xaP3A6djzhQqGPj97MXsug3bfz",
  "key29": "rVUG77d1Uk8D4HH3FF81WGKa2Jje2VGUmDhT5AFmnvkrUTWnqhLTZpBF3NSnSF4Sh8xCYDpptVgpnAavcjQWVAh",
  "key30": "7AZHxhht5kxLkjRXSkh7AYRzkPwwehfpBXHfrU3R6WX1KX5pbZKhzkSWiwGoz1P3K8VhCgDJUnzoGJ8oLsJtDfx",
  "key31": "PxsQtPnMaPmxDbHNWFzwTyGLaBug5485J7PLRQc8SJCYhYsWW7NiHUxEMeXtiGsTbpfycyAYqxhLj579yfoocbV",
  "key32": "uuhWzeRcfoRNzHUVjjhjQ8t4GX7xiHqo4CinGcQytUHxdLZvogF9DY5x1degLP4j87VFriNK8oAXA95kkKYfBxc",
  "key33": "3fogPtLCLcgvzKanuNeQXLC4vumCkD5CGUhCtDWwAb25veahzaNkaybwZR44ZVcb7zHqJEUg1JkffEj9vUjkbeD",
  "key34": "2XE29utiH3TKYGsf7GAHmM4XzuJwrRdiQKZ9XyatFT88Vzsdh9KjPY3nBzvKu6o8dV6NP78L6RfnXdksX94FYGdq",
  "key35": "5ubXyhjfZ7SXZYMzbbHqzuMUkvdkNhRGWPYuJP7fc2cUjP5dG339HaVWQ2bFwiiJMTTcVUt4TULDbyvBgtMU5Wyt",
  "key36": "5p9PhDbPyYrhTivDiMGjx8gpDkdhPNt6UGaHYspii9NyHZeNApDkFUx2McxbGBS1d4Cps5jjnZ8FR6JXBQ6WC6RZ"
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
