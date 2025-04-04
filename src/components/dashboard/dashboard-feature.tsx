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
    "3rkmq7wmDvtBYW4wRbXhC1XiCjtJ27GqV6eANZUoqw7wJsAabSe8wjoPRAALZntDqDqi7Wn2pHbgVTWTBHynwuLW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PuQKR2Ui14cUZZhXQDf711cABXNhoKdt8S5aYyJXwtjd3vsgzxu5VdyUxq9ALN9s1d8jiT4vdrGiYkAewp3rWxB",
  "key1": "4hZ8qhSGYzoTs5wu7DJCMgvum8qExoHp7aGu2zMTZuAbujcj1VH8Gxj9PgkmfdFBKxCFeAxdCWy9sp2yPVbxPW8c",
  "key2": "nf4SDfegv5oVc3BQyxmDSoRoWCtM6NxKt5isksF8YrjyEpMCUyRekDruj147TQdPsZsjPr5ppHM5DxdQRsussPY",
  "key3": "d2CBukfrp9LQAN7HpsTMagoNtGrSLiT45oyBEBW8X1n8htEhcGHbEiFDCeVcbdKWWuZ689YegSDwSV111y83azq",
  "key4": "3kQwvynfUyrpnX7P1SdrXbmJv124hYt6HZFwfkSfWUe9Cn3HgkAtLeKsvfpE29Up8UcawLXEmCcMK88yQUY8ALgT",
  "key5": "c9yKFAmXefsFHg5BbMRQG25eKZKvbQE88FsA5jE42sNXCqWxRdMrt7itZWPApgC1KzZRr6HTfUsLhpdNMrGofrh",
  "key6": "2tRE865No9xembiYcPBZYkeBDTWaLBPcTAptsSLHAviy7nySGwDz1jRng575km3rVS2TZM2nTmSws2pPmzadHe1V",
  "key7": "517J5T1AruYmCXbTzHaBgrm1qUUCY1iykeCFWiFksEihEotZB4gC4C1hZxVdtRFjXhArLVo1rHUZGJXirWX6nWZf",
  "key8": "5RUSKUYbRp5RR7qC1j8twF72hdAiRvCfRte5oqeZKhsd5RAXoJiurCGPgBgjUwcZRLnr3sc1ik6qArgxMxEM2YEL",
  "key9": "yoBWB3qvhvqqfskXd9AKpDuXWEzKeVaKibLXkffgjgTkBCS4oeKTq98jGR8MbGdm6jKc7jsVDFQdWvEiYsvoGRX",
  "key10": "4fkdd99Krrpv92nfzU2qS4JzmbxpAz4c19FN2Ccf7q72D98gzxWGFJTacqAkxN5b9xrvBDmCBB2axMRfkHKmkL5k",
  "key11": "5fbhQQJ42HSjSzaij3r2uWEP72ffzEWoQ5b324H2G6gnmqwjSLcMPUggkNPrEttVKCfCpyi6cYTeQGXHYaoP36zR",
  "key12": "4Usucbof4ksMX1njSiZ1LK3sepGVm6gYA2RpATZMCEbNtzVJeBZkq8MSJkKCp4oNbgCrRg3EQAuJXGtjwMehyXvw",
  "key13": "2VLuib6uB1A9XvVrhJVFtvd11xzjv8r4fH3kL8VCQtP4wYGXFCULS7jXMYmBsizU4ejnwqsH6DpmNtXkaYc5jBBD",
  "key14": "4vsFQSY9CK55t7RiawZ5dwLZp4PdiQmioLmbyFxUskCQy7awW2D98bHESDduiQaAnsTZVQnMAFXCa4FM4VcwQqGT",
  "key15": "3uSonPaRpoFLTwYPYWBWAQ1X5TZUYQSRTi4mEL7HvK5w4pw2Ta7aLjz6KMAB5RYy8PN9pV1zCkjEMUiS2LLsEDDC",
  "key16": "3LZrRXiwdjr4ZvSsFvuiEptAPrftgvi5zEG8SzcT3vtuKXeXRQPSvpJMqbLkirpMc2JfADnMg7JHnt6gYPEy2qU9",
  "key17": "3GzjzjZ2pF7fH5NPzGL5zkthP2RC2GxCn4RZpdr5ERfUvfmGdGre124EZwKL2yzMPLvvFcTDGjWyurhs7VsZdXwj",
  "key18": "ncUp44uLMPdk4s7YL45QX9newDzfvY8NgbgxfqRqnSynefFVReyJYyyzZH1yGcbfkMgBn4ASgdhHL2N612mWYM5",
  "key19": "3h2KmFm2tFgkMXxvdkGmf4geGwqpzgNQH2meKx6wVYFjai5PzT9JRqdW76C6B5FibXiWcwyyorerHezbLWBebiAZ",
  "key20": "5ouhF6DQgd1ipTFjy4PjwExteeR9fgnsxeLCsADBG2BJiij9htf8JXqAXRDY2WSMacz7BQ41fzeGdEVhkjGJa1ez",
  "key21": "CTtckqeEc5vS9SBqgAa8arnYVbKm5tkvv3qShk53ZZWfQJuv94a9voLuUVQAQVvsT7sJJCxraZYCz1pTouUkhGs",
  "key22": "5FKsUqRr4TEJC1tWmBzRqcxpMcNVAz2omwvvZEaoXgTHNkxP86Dcx4QcEqggvkXAd24Ec1NmCjgPuDc1t3KmnQ4n",
  "key23": "3xz4vHvTsjF7P1kx9xzJDcczsY4LoKvmA4Bdos7YYa8cdMKe9M6eFpgLrmGZqeVQmWyyYaxVH3sVmUPwV2npvRP8",
  "key24": "5syU1sh3UVxS3FmLA4513MAxVVSusNbHQXCbVs1QFGRh9FoJM81kEHc3DJQ2ASc9kpm81kCbrfcKREUVpo8teSVR",
  "key25": "65sLu6BEkjTK6ngAAeHHvU8JarR6DD5UWcmt2QwtXLM4Y1RbKQVnNVnZjr3wZMw7gHZwALnpu1qrACtgZxvx81Yx",
  "key26": "nApWfyaEkdAy2fZmELJW9MXWMwrTF4iGti4gfweBvvgFwnnTfxMnAnbayLEgKwnLZSgp32xwKfG8jpeH6LTgSvq",
  "key27": "3E4oQmFnbTF8wtGS2jMSam9BMLmMvqQ1Mo5tzixyKAwuzj55zP3nyGc3TQFKEbNTqHWoMTqLhoKVveymrsL8DbLE",
  "key28": "544VuwJh46NmEeTBV7CUfRLDRH1uJ2v8fDvZEFjtYUBvywcLumKM8gu1ChdBawg4uz6mbnYXi5ufj7gM4XQH29Yz",
  "key29": "4qhQ3J8FDj5rdordTF52MxXNMFsEyYVCtcG9nwk6yE2K2Ks573HWMdkrc9LR9Y23EEZ9GPFAkv55CsiAtHRMLScJ",
  "key30": "32EiM3y3xVQuxufG5FdAKee2Pc7PYkiqtfrH1Sizj3RnL86W7fiAGgBy4pLuHFFPt2yVaZwehH3pMjAF1ELTdZqS",
  "key31": "h5JYF7No7H7GNutFGb3Rfqu5E1MfTNHXbyfNqJAPNo5u4Z8fYaWU2LX1ucHkQJY7oUbUDeVZzjchwAuLUC5EMrz",
  "key32": "46qe2KMP1zHcFQpgA3VTjEY7LpjHtp6uFnUbU3JfaQ7sbahCCCo91Vv9qHQFV44uHt5jYvCcyaRQ8BoYvxN2f4cW",
  "key33": "5cDMJtxyfjRgfoPF8H7nJJcmTRnCmy1AYA3sZC3VbMfntHNvWo5iVaJuFGkqvAvijgSJV2wwnhzJooc718vo3qY8",
  "key34": "4nARerCAQaQm4ojHXZXhAYzftEywm3BMpU8Btfw4zuTP79hiP4GhgU94GA2apMuaRWWZ9sHHepfvnY7MiX8cta6N",
  "key35": "4a3225oiR8SeQsmaXffRF8mhvhT58uSnGPnc5qPBQjfo5xqB2KpBvxpVozjBgykZE2YnephHYEeGorisybD8KC1a",
  "key36": "5BDhBLRTYWRxgAYHH6GRzGQ7yLi5WkUSbAEFDq6RUbfwRphDsq1bMBBGW6BErpwGQ6afPszZB46vfRGxuKMgGvhQ",
  "key37": "22nc5XKSiZERCGRejGLShhgRL1wGEHTWQ8dxjULfqokoe3xgVCx8CUuJwNGUogxPcybqiNRN4NgN5j8fcaFH9UmU",
  "key38": "5bj2dErALQYhbn5cvSiCzxqNeuTDmK2wh4jVJcrSH5scbu1oPWRLz3HQYrKEoUFf9q1tDc725vfz6yBfhT3mWvea"
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
