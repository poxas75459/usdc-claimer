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
    "2tMSrz8rKUVDyoJreBZR9hWKJVVEceAdnjuWjcpfjPVxWbnK9RkHexw65KoTpvnDvVy3j5oxv7gcNhrr7keuGgDA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ofBejYZFpSnWQWrXCFt3DLD83BmSqv4pYCEPGzSxD156MhYzdpkNZHy9ygkxcs5USooHj2srdLahg6unT5xo2Q8",
  "key1": "3qma9WhYg2Hdgsqis1cnCgd7s7r1L5MBjiAcCQBmTD38YphXbwY18fYDr9NFBepoj4M7Gaa4Ne9c8nxM6hET4wBV",
  "key2": "2qXMHosA3LPE9ykQkqXgEjKmk5C437hotnn6eejNpFyqG9QUbQz8Xhkrt1uoVcX1y43vywp6noz7hskCCHyCSWeT",
  "key3": "R1ejqasNnCc1YUvMRev96nZr637iuFChzA13qMoPXNXUV5kHmwMuz228g5yvta4fwpPRi5jDSZNZxxoB9p9vjkM",
  "key4": "4heNHbzgo5zLY2zMPZQ8hdtq2tGdTjMzrHPJ6axPKTavdPXdGE9hvNeBqfcXkhoERcNuYiMXaRbo1m1j1MJNcqm3",
  "key5": "4kVBp6mAeKMwHkiLxjKJ2U2NTH2Wg7i9gqgGrbWuqoSBP9PGNR85Hn3YQowk8aJ7XXGua1yUP1Tp6Mgm1QiVczvH",
  "key6": "3pyKFZS2zXagaEJnuJvqGjJ3BN1NjSawFwfto2UguV1xYvrJw8qvNhgEptEdK3X2AByy5k7H3tZHqFqGr58TuGK3",
  "key7": "5HjunFkEaccijeT2rXjramaLPYuZa4sZ2sTrTkVTdtADY2uH1yCWmgv6sCVkNVAbj6G9QRF79g6eWM9xUWmV9t14",
  "key8": "2rKcuFL5AN41hKQQfeHu9mme5jY2Jdi2c1jESr9zteSkr3UKqTt9ZCYu4jHa29ucH4rExKdyJ5HEzfW6bUpVqjLE",
  "key9": "JksassMtGSFXiAbZaMAuj6pq5pLG51mebSxbgokQtnXM5PaLF7srCNq4q5X6pbH9YnQxyxZtJstbc47MyHvcL61",
  "key10": "4zvGjZFANmb9MtienSRPdaznzVGGaddJMMnbU8GWDFHt5tH2jrosgb3qVXkyqg7P8QcpNG1J6eRMUtxvxjksdt65",
  "key11": "4QZGJW3X1y5EFSfb6r3Qvp6CapTJzKnWko9yQFcRRNB9k4i4FVGLq8HG8haB2a7BLEbb9AWDRhG9CDJAuDyFukKm",
  "key12": "3QAZfhLqAYRrPKAy26Cvw4sVyhmdLMF7SkSyFJrg2s41CPX3sxA5LovN7XDPxtJiRE6aVSxtgnigJL3kQ1K99Uiz",
  "key13": "4eWykFBn8LxpuSx8FZy4hMCn6yAMrEG3dYoZtVYk2zsbFhZrFkfR6CGUyWvi2z7Jc9nzDtYhyPyZ2RWm497V7sSm",
  "key14": "57Sf5RheFKfeaeNxB3FqVFaqeV3N4HvnRRC2RjQwnf63g9nHt53gnHDtysu2JcrxCJhFPCHDX22M4rBeiaS25Hqf",
  "key15": "2oEpdkBypfaBUV1kTBVXTRkdNPccpBtHbKeW1fdyo4aFbpyyw2qBjmcQMeiram8trnotUpdXS4dtsj1cPhJvWb1",
  "key16": "3gmNMxXKVT8D35DGJtKSe1HUSJbS54Q7qieDJoF2QJR1htDgitGrbk5eSitWpWjsDUZmLUSfpZxJPA9MZuxqs7F1",
  "key17": "4KX2mDDu2snfRCp1b6o1jAqB9zm6bLEvqK73jcnm7qFSyhLsztmYe2uSChwtAFHstwe7HJ1nWP6hzbqLNaem5pXt",
  "key18": "4vhLeDGNucV1WxY2MJSEcZyxiRBx7Jq2dmH85qzmMCZ3Y91ZK2HNc4WNBffM8sRwj25FRzXzgXcLWoSD89w2jbp8",
  "key19": "53jTNoJWRvUgLSCKParDjX2NnpFe1F5N13nTH3MiFmQiKrmUVXhijK4ZY5K7r3roCFyXTQLFssSQzY8eoQYq9rFM",
  "key20": "4L5EtQ5ozMKwpwSvnNmFt4wLDmUpVo3rEx8rNQ2HNDEdiuBGnRteSfhNB7Um8uyEu9AWpW95sVadFoiHgfR6drBG",
  "key21": "2qBSzKF5HY3xqEmzc55XswwrZn4uckoy8sCCKFicSuUvWtxv3ATHJUbkrmVRapzrUpoGYuhhWTZrP87jNwPixuqp",
  "key22": "hC8SBv4NdfhPqnwtXoMVXUNTkAWRQtt1D6wVBtrXHHm7LCBZt4k4FqhTezyo5vgwjuzpMh5WCkmDuvr9WPpnNc1",
  "key23": "48PeiepxQjCfSCKDQ9hBvempbWXWTQbKwUZ1AnnR5qQBeQQ1PRCQ7W3BEV5fgq8bvMbjcvo2HS4uT4KQvbfzRoFy",
  "key24": "5GEwKaHNK7KQGUZ4VmtZPgVQvk3cS7vPFhEVFRu1jyaAHJ8cBoRHEy13uCEM1Pxo7tsZ58D39P3JWJx535Kv2hrm",
  "key25": "4n3MhBC4JAXPkNgFduFmGid6PxrWMVLYXoaEHne14nZmJMQv8HwTjnQFaUqo8aUP79mVreRRV34FH3CPiAUjW2A7",
  "key26": "3jRQQGgdLU3bd2YZgqycpTHxQLi5fu39vdeLaTCtp2Pbc1aRS3pb5XNgQP9Crodc7nVHVpB39ktYYRosLgGvegEa",
  "key27": "27EudBmMK4bGZXrizxaWuAaww2NNEYBZqpydGN4Nm1Pkx4LW8P2bKM56aSunZ6ieUeH14KydT9S9Pk6ML6F2sLF7",
  "key28": "4tkSVsnFam3bx5rPvGhENYHCEWRip1vz7L1MJP1Me9CamaiBg1LdWcvZLMPwEWvraaYRmQyfUpiYQgurQFeY7fjx",
  "key29": "4d1agRKfuNpn83sAx54cBBMD8qgeZJxv7ncb9SWn1MdgT9oLKkCC4MZxP4Z4zjgT6EjetQWAfs6eo8Bdy6fiYZBx",
  "key30": "4PmMNH6bT6jdfXCYkzHgyNuWV5adQPUk7ETTPP3rmQcysJNxVRcyJgaN9d1ecGo97v9F61ui3pa24hs9BvuAqD7X"
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
