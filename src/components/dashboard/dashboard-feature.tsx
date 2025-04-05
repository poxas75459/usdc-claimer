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
    "VZRCBabHz7NDH8Hfv237WdAK1DhrgwuGc4SBsjhmoygJtvAoaodMB4q67hn3dYVdwSYuHUwUSUWELRFJf2GreZ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JZCPGfhE8FtwgScC1Y7ZWkXmpMZWEGErP3NUKXLJ7JpgvjdRz5rWgpRK1ZXnE8S4tjyBx6RrTRdF96YV1RDzmpe",
  "key1": "2JUJNyZpJK6xQdCKqx3eJMHEbRBR2ZNdEwnb3PpPe8Ytw3vEmbAVKWbmdtt2SbPLJBLbK239XwrkdbWu2ANNyL16",
  "key2": "gcY5DTArCSkrSv7iyJq8Zfb8DXnGUEp8Qs3TkovpKimpckdivH3JywG6JHGBDD93Kskp2WhjcFkEBn9vMvtgVvD",
  "key3": "5B62EDFLyNhXyWCAxPpHrnS1hxogLU7BYNaEdc7kFjA1dTZhYywEFKRbLAih4QHWv7kHWJqqtez1JHp9V2uLcpf6",
  "key4": "3EQAMKfJKwC5vgtgzW6nk22xNzBp28CvXsvreKwqwokg17F18psXCSndHpsYyQEcqZyTLP2ajsrVWaJPJXf7rKY9",
  "key5": "5vrhe3Mb8cQmgZj4gg1xcEuUoGEUWznwSBG9x8Co8Cmu5jJH4PmPQSvsV692GJsNb4i9okix71BTn4AK62mCSn7o",
  "key6": "4Z7yDoW8Rr3GM8PTDDXiLAxZXHQN67QtX4bt2rNZbL8HHz6DYMyJG32ihVY5JvzRGcLfJ3QLKHdgnbQGziKpAjET",
  "key7": "DYd1Y5w1jWPjXsprVa9R2eu4R9DwWaiZWfz7okMW3Dm2uP3B1iV55Hu8q9yDHK2j59nBErHTkFMaKYwKDyeceKw",
  "key8": "59JnueBmQoVTPbw6mezfZeagtcN7pKdpwZA4ggusuNwRNu5QMWdRq7yfes6QfZLP3jWtHc9eJ2oumrVe4GfWkhCA",
  "key9": "2PKpjioXdeTVYHShac97JeJ3pgxvHYwwQ7qAw2qvKa6qqMhwMW5wbsLNiaGoNsZbNyYfoQScGHeQJ1RPtWQvSwNJ",
  "key10": "PZ1VY1SyoG9mCL6u95U2mgdSYyPqvQjBDAPj4Jn13cfUrGX2iTwzaEzoUxx2PJWKLwjaKQYG52QDovtMHPjiBPn",
  "key11": "2Q38ZRdqZPdXStg8p4hfn5i3hZ12xurGFLbvZThyiU1mHNatkoWpabNXPFkZ3cQoKtziLucbsRbBM4Hfe7SYp11v",
  "key12": "3Eii3P7zv5AemgWiFzkL8KaRtjTVjayGrTZE5QRcxSE8AEK5KFgbP6Y8DHcwuz2LHyNQ5udpm2RQPrbkmGsAuwtc",
  "key13": "5otMaxfNiBiAahd9so4tGiNyUspkGxuRkvW9HPkKZSt9W5hbRQhcpwbUZvDALDummkJqZYvxSWavDu6xHrBLQ72B",
  "key14": "4UZq2Ee2KCqzz7memmS9rW8Nh7aACiVx1A2pmzL9bsNL7znC9mjwwSXtneJK2JXqJ2ghS5X5AKF3dK4GU41ASpma",
  "key15": "3rzkKrKjKF79A6J4Gw4qngC2AnpMadUdHPGEnsrfCwLHxiUu6FmUTndd6NB2ujSJKotbGSQgs5EFkPG6DefdmVYu",
  "key16": "3mH4dkzjnDSyH7PPQXVVUUx6LdKWF3y8SsnLStbbDpT9s3paJFiWqAbypefQL3q5CSKdtoD1tHa8mVEMikd7zWRP",
  "key17": "2kRYJ1VSUVcPwMVy8U3gEhw3uvKNQtr4FYDicv53bgTfryM53oXmskJq9te8prpRxiLxqCqvXk1xSSNDaZKg1x3h",
  "key18": "4ABUKr9edUFmwB4LMgs2XohUddfngYGD33BpuQbr8BtsVbvSnZea2D2qkPoYxXNhV6mmoaaeiFPJrX8eL9Zv6FSK",
  "key19": "jyfd1gnq8yJPyqo2X24bsuX3osQ4XbV2BnjxLgAFGDZ8qWToMp5mLW7HzcVdZriWYbkJe131hCVkH6XuUyfsPJh",
  "key20": "2BQ49pSY72np7Z7XjBWNsaJSvqiqUcQBjE5Sdb9CVToorfjDeA8eQaZHtBdVLcNgVMjhu7QhsPFCiVhVB7RuRoq2",
  "key21": "4vzmdbJtPTAin3KUQA46NoyLP2sDFnB48tSeMC5WUNTPofnnEBNBw2EoG53bvzrhfEsV8yn5XYGydoCbL5RnzAGx",
  "key22": "67KY4j3MRabYfX1CVVmDM4i57cZG9wLrFczA3ppX4RunKTpYL2zQPrG51EyJqmpCe3xmWQd7uiQT1uRH2pqCSY5d",
  "key23": "2WTTSjUFvYaZAom3ktkHw53asYAVf1PxVDmqUeqdGAKTUzXHunBUyspDS3siwJcG3mZzaAkNe8b6zAwaNGKN63ed",
  "key24": "46QoQyr6sEosp1ZTRUcvFGs3kDbBsy4aVv5Dpr5VymdtjEFtY22sLpuvKu8XjzJFZBdqbeov28cP1U7Sg5eWjxdz",
  "key25": "Ratt9a5wuvx7U3C6cAuWxGzDVrE5DGjSpCiL3qmWPDApKtEK1AdmF8Ge3q3PD1GJXTCNb54BivmrQuKXvXwPZvB",
  "key26": "pka1bECN4ok5GbeTnkss8peGn4buCut2HAHRkS8BrPSVVb373TAYSr66yGiU5syPPp7EFaXKqKz4UPUPDNiVPqj",
  "key27": "2XSF2UuzMb3iBPBAhrFvhES3MksGSmdL8F7kwctcPK7vPptWrZqPCsabdmayF1Dre1vZ7goEZQjjazXG47bSPTsu",
  "key28": "3LRZYTXL9UjgCmSDP1BjymJp1gfVdkg7QycDhXrxt4Wip7CVqLBQWWK7nat4WUsBp2nmr74sQDovFGJAokX5VEWV",
  "key29": "4YjTuNqgCp3jDdAyMpDckNnrJ5FQfrkGmSecdm5B6mNjxAGJJeBPYNkGa3sD5hWfxaU2ASMFBrjNeyGa8jvJjGqC",
  "key30": "zoij7qRMBaX1fpgurrQhHG2bQ22bDLdt5Y4uPP1rQc2gkuLx4pFzYiRH3kboFD8V2k7BGnu8JrFLvqvLigzKR8k",
  "key31": "5A5Fk9iDD4HNddfV9zqFKiF5SSNns4nBMyKUp4RrqgPiCu9zBeQmijuWr3hUDe8xcdqwLKrHDMTVTdumi4VLfuVT",
  "key32": "3TgS9hXMWwWtNxNxePDu9kBEY1TuzYkh3V5vXR5mazXYVCw7Sfoiw1sxqi5YwNDpFfHa1yqs6H2e4GyAVQXTRoiZ",
  "key33": "46r69K99W15ru2jLdD1MzkFvuMfyMehSCZGk7A9isM4htU5PvZodjzXQtx5xL9mWeCzXC7uoGjV9mEKsbSjQuAW9",
  "key34": "3MUhxia9R2ReueJqxMwgDez5CcBtpXEnfZaCFxdn2sGwzxRTZFGWpxTzMYrRs8YUF1JqwLJC1DRpLzMUZt2WbA3L",
  "key35": "2sUa3sKjxFYi2tGG1Zt3xtuhrxKVDmNKePaNkg5wAu5hBZYUAq99ZcQhmSrkpiUE7WfUZrrMr2rM6QMXuY2swhUq",
  "key36": "2u5Q7YntBXodJxPTrf9rD3Lqs6RsM6GBBXxw5sQCP5xUrfpY9ndhUhdaKiivWw3a2NX8ddNAMAPgY97m5yVW18nW",
  "key37": "422pLd2KwEiCH4DukCUqmF9g8v7cjGEi5F6CKqfk8M6vNt5uqhYjJJkvhhokVYtshhfYK9QizCCWDoSTe641xSR2",
  "key38": "22Rip9M72xD3B3D9gUUJt1iB9Z5GHWj68tFXMfbaiGqdQ7WnjFC6vPz1cwkm2scwBLnjEbGPPh3UbmKgweFZCagr",
  "key39": "2ue8m4VZ6CjZsWbsGra4mp2VCqBFzQrbgJMpqUKUSgUDuvRXtMmPiyNnGrYYon7YgCLEu1CHj3aqNgqTthrPoisC"
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
