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
    "537ucTGBe3f7XRR51bJkV4oTsmhHDNAud6EYNkM2D21tpKrZYq4wcqiM4ffyKyiPve2aMLupVAzVAnrJBFdUha2M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dYLdSEK9tx5bUoDrNkr19SfMyL4Pdw9LoW7NWQXh84tVW1n3s7NdRDzQXFkBzuCLSqBJKXroRrKodeKXrY91BdB",
  "key1": "2hGjJEPUWVrXddaByvPYqV5eFiC6shT1h1h7obE3LcYfYXmEXzWS3tqLWZhn1g7CGfioX9ciyadomiM3xUVD5SSZ",
  "key2": "3n2QGb5SovUPLP8GFYCGdwPTzD3D1V55pfYf3TohkGizorgwEeG17tpn8kqHSBpK7jdscAMAk95rdF6Dbk1gQMuY",
  "key3": "53P77guKSveBFRyGQ38kEy5eR6GQVyMBqu1LaW16Lzp9ebfVYAhyn2kiWrde7A1ki9bKWjVokrokpgAyrT5zqa5U",
  "key4": "5XRPTRrJn283avVREgVV4gVSqKUoENMBVBC95a1ir6rFXGd39JNRvPFPf4qJzrcNFrkeUJ4NfNzwnDeZPF6NAb5k",
  "key5": "55Vzj2wXFgUath3zaAFJM6rH1KkJEyM8J2adkJQuWtGyWyVAs6UrpvNdhLwdg3DyrQRvZcv9PsDpXSwJnSe6P2g1",
  "key6": "4W75HBKJwEPrcqMf8kqi1TLzeVTd7LkNRWimn9qidn8cettHfaucq56ktphAgywvmWc7ssTX5vZeyNa4B5m8jtRh",
  "key7": "3FSuWVzRGe5gDWj5GPYUs2Rp34JgetyDxrP3HsBNt9Eih2NeN3y3HSWkfpeQHkjnLsM4fRgj1YURPSXzB5NwA3n3",
  "key8": "34YMGi1HHQLXdUWw4UF7zfztGVCGeUkjosv3YEYQqbt1E3eyN32885rxuqE6Jhx9WcYYTTJGbtBL3cj1niFxrgtd",
  "key9": "5bit574anVo2TbRFpT7Rexm7tzYT5hmG3aGv6bhxRwEhgZcz4Lu4LVK5NRfG6qP8mkqoWMjapnBcQmjKhwZ37Tx4",
  "key10": "RDyN9xeoPYiKy7rc359jCEnhdMkQEdJbhjWqseWaNFtJbTx4oKkDvCQka1DUG7PQYUJf58xkGaZrkjC7hJdtxAv",
  "key11": "2Agjw9jk9NTvsztNHAD85B5X7MRSMzVtxwaPeR7EJSMGTNTqqRPWW25cGYrpXLHHtrU7wDugX7bjGWTj7EDTGTAe",
  "key12": "3XXMHCZayswLYH7p2CfehzcPDTBnePvToPvZKBdnqDTmhJu5nJWdbZ7DhUfzGaYN3xZGCVfK8ArzTjHVAM1YEfe3",
  "key13": "4UxS43QBEkZxfa8f2mC2HbtPATDFsY6eGLbiTFLKJ6EiZof7wrcQ1svL1yMAqDpEkxduRPev9kaJTPpTDWgiR4o1",
  "key14": "5CqPeUShk8ZjgiBbvNvQmVPiq6AbRFon73yUrNbcCNyM3Q44tcQGeoBjruBdFYyCiZQzB6P63oJzowRYNUpjm1oS",
  "key15": "4k3kVj9eq3hqHKYiXjZj8ob9VZLoQyVM8LKEvM9hWaJqAgVQX8hURijZKGkCabgsuD7PTzktMddTzAbBDRe2YrJc",
  "key16": "5ZLFCnM2hnhjmPW9AmD4JxzjqGNrFLtp1cPiq6XeZrQf3TAo1DvF58DBzpBQJNYqpmgicBoRgfHjmG6hp7c69yYY",
  "key17": "1ePtG3z3c2jH6XYGeJJrRq3JG1efiAvFpvoBke3r4p4HBVBPE3mcgntrNNPJfuqbkBnYw49Vj9xcYNVfPTyUxEd",
  "key18": "2FyoQPGakmGVLqt2gjHgmBpph33UKZhxKyJSNSXwFq4d6ULBVPw6oXR7u1E7GKWNsxt55L7g9EbWgiSQosA6JChc",
  "key19": "skJvZ1k54DjCL28qM9m1tMubXPZHKwgn3oUBV4JFdf17diTbULgCoKQDiGsdx4PE5xM2WKGWGnrNjv5pX7rYGY2",
  "key20": "5y4uVa6t2Ui2x6QCSTbmRYK67vVF35XtsEK7SE4SWP1KBYLUrASa4PFbmkGe5ifzoNzLbw7PX224ZzWft2X3SBC5",
  "key21": "27Fz255eq4UbV6cB7zLeRscDfhwcXria9SDwxY8t2ga9KWYrVwyq9LaZpGaUokKCSyetTnBnkApS9Hu5ACo9573G",
  "key22": "5m4UHWHU3duxLRpGfZeHZSN6nmJxx4JmEfpsh2qCknN7KmnSGjhqY4sjnTCLGfbVZxbtTjpz3poZNguAju1CB2QF",
  "key23": "vafuZGQV3JLXLz8kUkf436xCMRpVHCZ9cHfhhgCFoNdKeTw32jCMoY7Z3hjRhZ1KB2UxwonHoMeV5eMZbxuo7R5",
  "key24": "3HPX1LYix91t7L6RP6LS9TBD6SLNLBJrJH11uJE4UkeqUbKmkm3QY9uBtFcQGDT6vgeZwgwmCUALFt1hr5hVYqYB",
  "key25": "5LXLpoA3AP432Ci8eH9E3jb1pCjRa2q99Ku5ZVaBUX8rzZPHzH6ri8S7pU781vLrD1SWowwuEsGrS1KqMBh28tBN",
  "key26": "4divA5MT9kTWhB4drjeJaXuRbdWuL1HqSArnXMfN5mvxoHR3mc5rXpVckRX3gqXuCBbWXVAZMkX89JNg5c9upjmQ",
  "key27": "3JqdQ1uY3yQeSXJvNsMGRhLi14XoesmkSygSsV8AFbAEHpB142tj7uRUsqHeca96a4p3AHrFT17U6hiMsBdXkf6M",
  "key28": "3j1vZY15qXu8fbjH4WC9gxgAoedyCXFGz8R88PYu6qmkcDdrbYRjRrbjwYsALaavNSAsTc9t1McmedrPeymPdB5s",
  "key29": "5knv9Vn2er8AbhnytNxgzrBCXvF9sbizzuGi6eQL66yCaBoSDZsfqsc1T2GDeFHixX89xxtuJxtkxzzvWZN25oDw",
  "key30": "2UtdfpzQUCu1wEsrGjjQwnT5AGTpx4dtFkVnprdvEZGsa2DugxuYTmTqaag35spZNK2m6k6fxEZK5kZSnuvmRwDL"
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
