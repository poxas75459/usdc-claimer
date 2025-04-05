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
    "4B73mF8LwWWThEsGerRMG9ErRBXy7fvb1Mg4GQen2Y72jP4oLFveMk8XfxSpSLXxQ69pyGQfy1CPDNkuChC4nxDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z81AmKzj4ux2KVbbvZGAz2PNh8EXNVizgSjcvg1rAioweF6pKTwVtj5V3AEpuk2C2LnNGBYRf9hm8WPcA6WJZ5a",
  "key1": "CdsS4GsFUt5hZ7zn7xyMrd6iCSWVUaPB5qEJ1NpcQEtH9btHSrxumqo2NGgdBfjHPC9dpRHgXpd2tGcVeBRJqSX",
  "key2": "4gTPkyPcnwYhzNtQgBwhBfvCMYVz8QjzBVfiYyEr29pCmoHY7RvDfvU4GYbb3z99vocuJUy1ceQ2V4sikaVCZMQN",
  "key3": "3BaFz7j3zQcNaVNm3rEAfx6YFNd2iwRTNWBF1kR4Voix3vMBjwzA8fypKEn71pUYGsRi58ELs2ETRZ13k2LH3Hjn",
  "key4": "QdisGsJjm9ycgmz9fiXypwr2oTzy2hY6x7Yfaa35cG14e3r3ZxkCX1aDgsMLVLz5cNKa1tZMGov5oCkcmyKvUXA",
  "key5": "QNJiCFYdGehnp5ejva5fyvjKACnb4C3UFLpYZ2LjwQ7JKkGASmcMaL6eQZ2ZaFyGibg1EWGFdQ3DRVP7iCrioow",
  "key6": "56CEPywMYjgeMxz66DrtPBR9apzGf6Ae6Bja76aBixWX1ZCQsXcf5THCwXJw5PEUNntH6KW6NR5Z8Qi4pWn8urT8",
  "key7": "3fzFY9xSUHXy9gVF7zTurE99EX63Qhy2jA8yjfxvY6HtjT55rbbv8ZcmBZnbGnGPBeJgCVfjyHJ6qsWc21XH4LWC",
  "key8": "1Pe4jfrBtZMAzgP4tXZL1SAu2a8pNY7kkzE1saUeQAA76NQhNbTbp3tKPuv5fLBFfv63TECGHgAK4vg6bn3qvNF",
  "key9": "4Vw4qPnyrsBeG9BWrnfvaWwtMKKssDbnkhtNYTVmGy26wiDcKED2rVDyXafNQr559YA54jnQwJRqf2pKkGY2UK3",
  "key10": "867EmQyDQW4hCvQVKtGZH9KFyQAJuzs6hCM4BvZ3tjQvBKUaMkTRWqsK1xqaY2EfTV76W5BHS8tf9Tvdwa6kmPb",
  "key11": "4bRncnBk6VGU5PbPqru5S8zbpAEzd7qGaPV7wWfqY8L9VUx1zaAmYYvjAPDv9gxhubiHub5y4Kavxizfo6KTWc7g",
  "key12": "caZYxy7FEEk8t2cCuzVpZgvAf3ooREdfH7VRE4BiWXSLUHUnY4WfUGTtKj6usmfsQi82dZ6HBeAZMvJmB36MVzs",
  "key13": "3HfYxB5mVWv2cgaK2QtsDpbstKc1x1e8GFcVssnrNmQMhJ8Ea9X961FARS3hGneeZG7MxKK9CDYfaRkxHWEBLrp",
  "key14": "21PJRqs8w1wjnTfiFysGPvVm6oq3f8CrmnmcsExrat4cJFgpkTyenAj7LXyt6LWeVVtt6vg8tfxPSK91xvNVgBEJ",
  "key15": "3vYoDRHZsNt6WbGhEYMBsAsQ9kG5NyauLRqfA9dgi8ipovkYApPChkWwi4zPCNbkGJWue9sLsJdn9ccddpQsWQ9",
  "key16": "2S6wp4S7UDwCqyn3STzApZvHzAx39CK3aB2Aza7HKSjpDCtKSVDQTPJpeccFof6JcKsme1v4hreMkav4pmziVsnG",
  "key17": "5tuBhLhJ85SYRP7RHtzXsBEbHchrTaWS6Equ6VwUC8VBA2XQwXkeot39JFGFXPVsKGDDsKJJFjB4Ju5Z6Pe16mAE",
  "key18": "5cmAzGL4kknjJLy8iL6veg936R7rjndkPRPYbcHE3Hy4x1MJuZGESY3y4uPG6UifSgZ51KJ5DXwSvMf72b7aVLHV",
  "key19": "3hzTiWACfrX84LDpRWmgt4j3aEL4ps2yaF6K9g7JD99eJ11UvoNtpHkLsWDoCZfsbPMnfUuK42AMnrXXVZ4dncr9",
  "key20": "4Hgj4MgoCRr13SU7xULreT4jUhTH6HTLeXsYXfApfMfTWfHN9kh7zarGqQAFtz3ZLfofUhfWyn3HhMyxrgM4QQBZ",
  "key21": "2PjXNDq7DBzdBSpFrwKojtn6c7eQkTuhqKB4GmRz6merzaVDAqR7A1PjrTYjLPCDwQMr4cZ3khMfFXDk2YhYFwK6",
  "key22": "4ASMzyiA6MiJXfWDzMyfSfH2y3xCZNMWqM9Sqy6oVGcoNVHrKib97i4pJucwJcyrCmiz721Vnp8DYPCNodGiuEGA",
  "key23": "4KVrEqBQiYbPDXKm2fiKp96GmPJuquJFBAaXa3PnDf5nUFrougCoGNFcG7DZj8SY4dsVPLzbCkp7EtrsN1Qip4ch",
  "key24": "4mkpnwwhS81LRUJT3pNz6JqivPZdswpCgsjN31CyYy34gyZk8K8p1bmkzYixnJHVZiGje5XhEHL44yHiwE2L5wrG",
  "key25": "2hhVipQhbREAtNPk5zSoYND78zoxAyCZQUABf1k3gNtXLL98qYRYBkSGiPZfddBAw8UF8wfGyme57NxxajydRzrv",
  "key26": "H2CepmxdRLWfFQS4r5UZhhsmamxxcHahAkH5oHVy2RpYjMRCnEYxp6Wnr8NX1ymMTzvjrNScarz9LK6rmHw9P57",
  "key27": "4wFc4467bR1K5Nq5LLWP3GBKJLJUh3s7zJKzLzVtCuK6AKZADrehxDLBGvR3L64suRt26nnxaiQoeu1QDvRmNdFJ",
  "key28": "21N1vKoKTV3XC4vfXuKuEU85oLutsqo9ubkPZXcA5t4RL91h68svM99iN4dY677Qg7SBEogN8WoZ3VoHsALLg1Tr",
  "key29": "hpQR7zSk3pnbLDTHMXnc9jgSxDTSWQUAFzHJk1LPmiJNdNYoJcK87Bgq7UFBF4C1ZYkuCnYz2oZi1kexpe4omJu",
  "key30": "71crExJvsZ88wvhiS5sqHJ4oXzU4W2FnjVyhrWQXCDa8z8fnxQGsE41YyP5ztkRNdQwXi17BvsLhxXouFHwg4GP",
  "key31": "5fq5Lu8W17HDRXWGGaFRmtLFNjFKR9AyWhncVHZX8v3WW2TSZyXUFtRyGjXudUz4AnSfg4RCMwGHNvWnFW13DcSL",
  "key32": "4TDMH2Jdx4xSdyhjYA3Yf3SiWCai62scqjY9bcmQo78M6HrBZtvYswtJZm5R3PC1v49gwk6tTdE6U5nw27XTofM6",
  "key33": "3SaCzXfHusL2QWESVXnzkuSxG1HhN7cbejct7vfvrGQfvHEH7qHHeoHzAnp1u5e58EsfBMFKJMr8qJ2DeLnXQzAb",
  "key34": "26CnaWBDZKSTvpdqwkifcohaDTFpRzeRoyvvNmgYBTE8aCoJ2JnwZrfxKsPJLayiznJovS5eKRjio23wjefjpsVy",
  "key35": "66Gw9U8yzHumxS2C2MXNKmnVi4uCKj5f2C37x9fHmRNg5Kzyy1nCBLaS9RhSzeS7G4QmRM6SJXBqaVocNfNNP8b3",
  "key36": "66THG3Dy77w6UMHUoCNSzjarF6W6RYEDgbrQJpoHy3ZbQ1LUSZsShygq8y2Wmc7FM8pkuaiPebryT7HWVT29VkUq",
  "key37": "4brJiCdTapoYZ8z3rHcAWtkftTCmmxSzsKuzzyVDE9XvbxH7EmWezTFeBgCEzXYNzdQw9qBXDz6ft24HM4rPmxoJ",
  "key38": "4q6YTniVJn4PSDbdjcyciAxiBchP816eJH4ExMFofTCqptdYzEwHqvLtTz2sH42TNYQCDdgJbXvSEoGtgVUqJerH",
  "key39": "5NPtGXZkABcYB5RBSfUu578jExKhVHxwEkChV3dhJkZLWzNvFzUAQQxpFYB5V3sUG73bnpz7Zm4NejbLceJJmQLL"
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
