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
    "2PMTGb3UqWLp7eDXpZyAZzpXWUWULBWhD4MfNWq92LCnhfL2gxySPQwbHTCehZnoi7KmLaS3g7HrZUcr3N1Uobdc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E6eGovrsTgA4jWaeq4Ph5tS62wmB2jVQYCvsxPMPP7dNcKw1UKDun4nw2UWh3FpwuchtjKqgbq6ZaCarQp2LSEL",
  "key1": "2eg9rv3jXv9rhPvKK16p4nzi4mfVNGMAY6UCmEnDY8z2mTCzM1fEHaMaEoYBKW5dhPcER6NiUdK6thVjZAoXKroe",
  "key2": "2xZ9ENEb99jFn2LyKXcGvN2kWkTgahx1yumrpdxsQSPWEMb1x1KcuWcVo9GrZxHwv3HRNgikAbgTUZ9WhYWTKPQ7",
  "key3": "3rWLieRqgfjfCErLKGiB1Dc84zB1c9Bbu25frnqay87uTY3VhQ9kqEb7rmMN39mo4QtqjtpoPqhVVcaEVFfxis8q",
  "key4": "3pD6zDU8PGdNiUtgUbm7GnDNsH865N1MACWh5uQUWGUnbb6etfZ5KQXUo7z4kjxKbZgfTdmcheUJwWe1nTnZiZfy",
  "key5": "25nYNE4jhY4tPsK4tNYsrCBfgDUPxC3Yb3mAC9EB5Vmiv4ZAcXtuwoLd3ogwAoZZCRibN7atgpJ9EPhHtBaxvn2R",
  "key6": "Wz9W7obW8LE9VR41GAKPDWicn1iLhLjncRYzHnCtf4bZTnnTcL39nNvL9vUAdFYXmYCnPpEv9gwTjewFxD12T1n",
  "key7": "3mQYcKE8LW8Nvtv6B6esVkkbDTpv2xR6jnLUF6XNPNoA5qczrYsf1q3RxWNKjcWZi8vEdtG2Mvr4gSXMGfsJu3CL",
  "key8": "64aUmdiQGNT8FrRKQNCcVd2pcgQyghWzuznLBLGreJJ4L5grs7AnZ21V8cay5aJUFraww1dajt1nqN6fwqGV4ddM",
  "key9": "3WJDi9ZSA9tttrsdJhQKKSqpdTjXNqCgQKWYd8CA25sZThG2867GdiU18uh4tr63YHtfZQdLHcgvTHo1aYGfMqAA",
  "key10": "2EiqUVyYg63y7xdA6haeb3XtMWbvWD2NsEvXaSWPUnpLYnCng5wpDJSfuKY8SHHMNsnwbbfFFj7utahH8ttttXGL",
  "key11": "2akiPkpoRU5Yc3aLr5PEwzxBY88Lfcu9iq56JoQrYKmayF7M4FU8Y352234bJ5txeaM7BZxVkqCNGZrAn7e1NDHd",
  "key12": "3Z7dtWsot7dqLjWR9wdf225km48KGcAGcXMyBc8o6KXczYHcdWVLZaQX9jMLoUx1TyqRYWYXPZzRpXYJFTa1rb1V",
  "key13": "8wnNR5GSEeyff8pudEULPznKpwXH4cYFhDcC2DXCQPso6iQXhwkMRFpBURzeUsBRtwkegpjVjw9FaKnj61jxsTU",
  "key14": "35e1i2y7WaUpJGJ3Q9LGiYQyAWKPFVkutpkzTk19w5uPx6T2LXjZLLb6Yx7ARd3Z9phmjuD76uToiicd2SUGScab",
  "key15": "3gQ6dgvb1YqJyzpCGQipWwQ3ioScWi1tJFbhGYSycftdWTGUAx92u7czWgsFt35x57kJ9bUBJJ4AttL3Q8e7Rcbh",
  "key16": "3ECEahHu4kfvY3JLU1thmxLkMEUPuRQPnh7yQL3cFpeocLgVE7JosiW2emnJ6n8A2Dg3UY2MtHZrTn1JUAVmTb2N",
  "key17": "4RYg29ZFPRivkd21fUcQkdXULpoYCbFMiJVqfF5JsmUjKHnNoSx4T14KuerBMCVkFudtk4pYUS74HZDpCujHHvRT",
  "key18": "YuLeEZHHdUdi2mN7SFhcqSWSeGzVfxvw6ZdGM8E8u1z1fqaBPMR5j219Ljd4ey4GqbqZL8aE4KazeKChZtyUref",
  "key19": "qjnPoUWrizJ5LHZNnjbBgh6SGQBpR8XmujnWQmxBduakHypX6cMSLgFeMeRLUFezyY7AH37oPYeTQn7wmnaMDDq",
  "key20": "217LuVWgi4aQBdAtwYet24Sb9DKyCXw7MdMLPzrME3HtyUkAyAfKU64X6Lghhpk5k2SPyYYMYDonwdjvaxQ2td5g",
  "key21": "BF7BXijZqp5eahgHFPzuz8mk45w5dDMvtNKpSi2qWSF9PrT8FrmoBfkTVSeNDFXqeSLMa33d2C1UL8oLpkLfMmi",
  "key22": "GN9kF1jjW9cB4c3wLHhNDaLs2apjMcQXRg4PKLt6VjvENRhC915aVs9hM2JwaUmjWXuXQjruXWEbNDX7oVmDCc5",
  "key23": "2yKW3ew3PjRgoNykBVQUqLfFnVGGSTpizBfP5prh4rqWqNQbqKVYzyw4AqYFjPdnG7rF12SVGy7iqbK8Cafxtkh",
  "key24": "4iFDThHX18DjZvtX4bBDedWctdo1KQKrnEYHbRpC1msXhyuCgAGCSoToWsJNsRevFLokmG7H2yyULqKg7VSP3ep2",
  "key25": "2TQ7zwUTXJabNU3EwcMaLA7xcQFE44ec7aWmPgpazDUx6HMBu9GhbP4qMmZV2uUCeKJFttdkqwixZchNvysGVfE3",
  "key26": "BuoHV4edYLQGDQebEvfzFsZ9d6RRdhhSkwrw7FnxKNYf44oQ4N6qX3UE6cs75EyAcxSjx4UZYvbX3YDqjXsdVpS",
  "key27": "UqrzZ9tveapaxYuKTUE2yyMoGmC3MH6WeoxygAWWi9oebZsHe7mznjqtHdk1Qpm2MAWkZxJqvCr5whyKds2Z92C",
  "key28": "2aE7bauVKAfWSumUDqZoLfcruCoBr5DpBeD8tVGyMqiwQrwdiNHuGwdwNXxP4bZLzD9CguNVK2EApKzPVJiZ6EQZ"
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
