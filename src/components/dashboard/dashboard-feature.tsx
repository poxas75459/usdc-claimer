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
    "3uBQERyMRQxP4ShPCckqJJrmNoB5XXG3iLMBsiP6JGGGFuMXvgLXUdhEALWTaAEVChZmFRLod74kNRMnx3LDzwGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V3RyEnWkKuBVKeSxjiVahTJrokWXGz3ZsCzkcHgzhdNHQ7apXmVeSrVQZe5pFR6M2niy8zhTxr63zWnJqZqpBrn",
  "key1": "2iy1pXfz7rB3oF2P7eP2BAXoo7WWnMzR6GzikBsJvhAkumVvEfAXQm12UHskfgBQriBt2mMA9yXTC493FQNXPC3x",
  "key2": "2h958exMjr4dkFJCZuFtenC5qt8hJdUeu8JtoU7ihxtd2eUhgYfL4xJQ4rbLonTeGVFAZayA9TjgV9CbLkdpzCAR",
  "key3": "2RoGWumBoyvGZBvF9R69HZerSroJMAiKKDD2zeSxUXoccmXPxjLBh3nqRLYFSagZfYtcDL3kFNVFhpGeqcpdf5t8",
  "key4": "DM3vwv1iSzJK7gvrLVazsjMbLccycQ8uRpPLrqPgc99UP4eNsYEW8Bo725ykoxCDGKyvDLfZa4f2Q7Fk8X9vpuf",
  "key5": "4V1TXvFcJVx3Eq896XqjfeZtrWjSPi4ZR1sGGXuyVPCZ9MKoxmCUzoPqLFPs9DhuwewH4wiw3Xp5tPMXu1ucmC9n",
  "key6": "24cuavukXhh8tGD1Pn7jvqqnQndUQ6eEoULBXfAB7dtd8n5fetRTs9F8ncU7SdTsopJaLJcuZyS1UWkqJ7PwvNdf",
  "key7": "3S2tyy4Ab8ssygYocSkfWsgWmF3MfR9b67AQRwNZPcbpi6R5FCoKHJLS31tQ7n1eUpRJNtjH5guAtaiRtkovkyyg",
  "key8": "2CkCZHHpQAxturcq8PjSNQyYVPDzDbBPovmZx7sX3bB2ZcgygFdJWjJQCzBfFQxU8hoPAQ9rpZTabfi63ChEkDV9",
  "key9": "4d6vK1bdaCToxVRTmyb6dUQyoWMKGi3wxGam6uCJ16PHBxLmyHMxg7tavjo1hrWh4nVCfZZ7K44KWsRgvJPyWEeP",
  "key10": "5u9qeqEXkWzk5SwckRx1UEfuujAvZ3AZ5NJgUGyBn3oZjtwzUS8WSAJ3YNTY6sZDMTgcMGzFhQ1zXZ25HYNDb3iB",
  "key11": "CFuPuYd1h3ajkBteZfhrkoRHcpa4XjvCUxAdz1KXZCr3kXvomRYDZ3BySAnsv9ULB7d5HPVSzXH7BN1xYYrx4Bx",
  "key12": "4Mga1TpbbjsmgdXFKqnT6yBsZa4QVbGNQekrUMCBQqyYvdroT6c4CqY8XXiNhyLv4jLuCJwTdcHgep3YbSgrXeVU",
  "key13": "zn39sUNpaz8822mFsK2Bgsa28ZT1sfV77SSqDgsM2qH3aLfdDvSj1fdXAM6WtLqMqRHvjWPb1kcTEbivnFXFLkT",
  "key14": "2CBa1SLL8BqChR6if3H9Na3i1EXofL4fn6o7AySAgAWqQzS9SWVRSuNgG4oPiicjpuuppXkYAfPjyYNSSKn2zPCd",
  "key15": "efG6GWHNczcoPQMuruP15iGFCPLjQMZ4Ux5eqeX7TXGK6MUVkDPpKehCXEgqVTaLwPecLZu3MJ43xop3txDdzW9",
  "key16": "2cUfWBT3xecU8hfNYYNMGSa621kMFUUxF2GvDNmdS7gm4Gqksb7mNdyyQyzdbNaEeqAMWJ1R56nWnB3PzAmtZcY1",
  "key17": "5TxqSsq2C7gTMXRSZmDfiBL78iCSEjxoudYJV7aAnLawodm3S9AHFPUDpphPAryspdWUvYK8zJ6n3Pe8BxLNJ2MS",
  "key18": "3R8FLCxepkccoL9gFN9Bxb74eioVxfNxqXMaZbMrFtScci88Ugm8mHbiagNaMCfzukCqxvSEF59geGQ7zvhn8tTm",
  "key19": "4rh6vaawLav7bJPgHnPLGevYNkTMxiMV3nkMQ11EVxtZ8aNPuYSVzUftvCHEoQAJ4VycXhr7AuJNtRMhJXCSresK",
  "key20": "hRVv4TTnzDVH2odfjAQBK4m5FbTBawFs76AhaUoHg3exs531x6X3TkeEZTRtZuWzYLShWeRWFKNHKqrmuawaSxC",
  "key21": "TLpka1CZLi5sJkgqSLjcN6Enz6rzbNSqGZzWGqAh6AaEzkexwtjxSTE463GPiFfZo4DYgUvukdpmGW2ySBsjtgC",
  "key22": "2cpEVJoDVNNdJNStrwho3KsL5MC2zLtJcUS4w7s3YVS5AXqsZBW5WSM272KwEFpJG77LE5Ja6SS67WRm15cDqVbi",
  "key23": "5S4QKwiJNVi3ySXv1A3UpXpZfQ12KCvYmVauueGUd29F8UJhAHfKQBqS3vxJuJjm7GhvDgUHJd6hb3jV1hzyVNWn",
  "key24": "2RrJ5CrPQdxCLjUQ15WxaTktzeGBSAvDte1AGiAKwJpMm3b49efcqHMsXu73FdeFFJpvAU8K7kPfD62qU1stYAcv",
  "key25": "4Kow5UvMhdx7tMbDEXLc9zW9gy6jWfm7W7V9nQd2kRk9xKBbVcwxATcjw4uNFqQt9sjKLMcMSfBZPFqVxjn2JNnj",
  "key26": "5vJecL1bWN3EsWStf6axu15dkPGUhewum2o7QeSPJYXrxLCDzr3iTzEKLT7A3PmeNbMtkPFLHCaG3Zws4yjfQtMn",
  "key27": "52W8pdsmy3wHq4EtgyAYAz49z6Gr6Sdvsby52pe1RivJC8DbewCcNvyre6DWSpkB3cXFzUjQcucMp2xUm46MFFEj",
  "key28": "2hcjhVFFUzWY8W5QXCk9Q4vJUhY7NneRBA8orYdjCgRurg5E738yG51TYvqXHKkoBmdRLEFkAbDtcLYrmVg3oR1A",
  "key29": "jbtBsmXPgRsMRpgmHSZixWGHuVEJS8to77yxKKPoVSP6BnKtPHL4duDu2ddenFrdDUq62pSEYwHD9EvnxkXfS5v",
  "key30": "32zS8b755xPhcf18SuGJaeBgfx1JZgX8y3KpqhTwREvLcLyJFUNsXx54UtmPatwVnSEi5jUpatjA9R5FieD9vrEb",
  "key31": "EHXi6nQVv6PuA2A1GJjB5dWJTT9CZS1gguMSzZV4xfpmXaZuJZnVqQpEWZ9W7HYyECH6PUrMmLVTw7pNnn3qfKn",
  "key32": "26Vu6Y2g4HmXVP8rbdqUgHGsA9BCPRz2jm5yAfmTqzWo2rgxUV7rwQ6spJWrhBywb2AcCQGYfJUuQjR6sBkVXKJj",
  "key33": "3mMNxCjbCiHNiTjUuXxWQ7XuU7gZKTnGXBUmxmuhUNuGniHR4kiq1LCEWCYRuReQ1PTRqHY8ATeyYskwgedAGDPc",
  "key34": "5J6edCPiUGBRVcSSPvh9P1YF3L82E8fjbq8jYSgW6z2Ad2vfLQLG5XU5p6coEweLBbuzEmTuFNmW37wd9mNCvW1T",
  "key35": "bw3A9X18JkZRcbLsSmtuzxUhKC8VjuTHDUbU6XJpQ7NZzqX1tfDWq5tx67Uy12JH1GWUBAuvbfEfp2yiVTxzRTd",
  "key36": "66Uiahsq9pN4DA9GUQDvfcEwNbMcdTzbLeTddihfizKT8e8ixzThhW8tJuxt4Z97T2UpbfLKC4sDEPp1kK9M3183",
  "key37": "51hXo8sBb5qdfHygwYaP4NYvf7H4ekkK4UR6kPiaQeuacggchaXeXQeWeE2ihd5kPMe4nzjXmg7WoHARtbgQbkox",
  "key38": "3acQewso3MjChSLta7hwW3V5EDgboknkCiZvvenWVNiJ96xgiduGo1dTvcnw5GzTWLmWMBtrK2gbvXCVNqmkMQW3",
  "key39": "63XLrhRb9H4q7euWmwqNMiwG2qjYDPtPdNQQ5Xv6NSJFdwHXFf15g8Vqx5S1QkMxxHFptKsANpUXqEzYP2RPqvzg",
  "key40": "3qkAsAUAV9U6fwg1MBTt9hcFVNqKJW5Y84WcFZx2xkh3S8bTfqtTrn7Fr2LcgZ8qvDT9Dqo6L5f8ANkBGDJxfxQw",
  "key41": "3mwv7hHo5ReYDbM2vbjkGVyhTACtmGkdib9KdFhQFnGxZZbwkyQxMg5ZSscmGgpWRYCj1mXe25w3PwPDWH3LqAAB",
  "key42": "3CYa9uWs1wZgMKzxPQFtYNCGxkPqD9cXJy3VbiK2BBRcAYZ5fegsXv9Ya7JTN8MNpkzwoBV88vwEPUm2tapEqJFs",
  "key43": "dMCU1zzj4LP7hziLNJZWwX84VMYQomfFiYpeqvAJjUZMCVKgxthJdLYPcPXhvYuWFDMTkVS8sH7sGc1pDdHFVoJ"
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
