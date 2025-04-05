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
    "pgweQWAvF863sXfstm8xZndUCnewAn9Xy5uSc9Td8PPAdhUXXsZU8GAmXm3NGoJHWV9vCrk72w2MXNPnSoj83Vm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ed6uijWogT7WuznRuwUkgtiew6kgiqi2d236PjHk9x4V8NkxnHpXn4ReLDvpXUqBDGL8PpTL8aDsbHNkYepyQPZ",
  "key1": "29JkBMNM9ypsYNNzP7W8QJB4yrNW1C5dXhVKVuT25dXMFwRVPFKnEozMz2wwLccsKKnX95vYchiAfJEkJdQE2QaV",
  "key2": "3ZLBLrdULeuRjZb9m23d21sX64dPD5fTKDNQH79x9H6LNfrLY6J9QCi5tvAhK5eNCxdV1KXLN5vurPQcwg2z3Hfv",
  "key3": "rv8H9xvRhgDkP8hXVLUniMGSZr6nHQH6fjMg4Xx2SL6DXDHrmRnePRDPQq5xHhauuCzV3vaoS18kRhtRx7RaPNA",
  "key4": "51WTWLSMts2q4MKSA7TfEwGxoSkK7or16sHcVmxjqCcdrLjrLzzVZy3cyUE5pVGJZgkyJjMnZSrVPaQKpnaTi3eZ",
  "key5": "3PA7iQ1hWGRU81Ny8c9NH6yN63hzhacm5DHMwvAmKmfgNajdG6bG4EwdRHzdFLe4YmrxGNqZQCJxRrgTN6nyFe8S",
  "key6": "4goFrDDoxYJVXuB1kL1JR3uWkd7jK1HepU4p4reP6NjmvvX3byMxqbMusxPzMcrx7bKBqgkvCbKMD4oREKrhfGVg",
  "key7": "WKX9fGQrh627oVdmUu1SNm5YT5uc5c9L7BtLXr3pyPa7mEZqKWz9YcRit84caaVfdRVk4aDnmNjgnvTwEKwfxxw",
  "key8": "26eH3M3SjWBo9Hae3M9CgKQsWa8amQom6zmq22e5fUKrDQCogp1jtix8PzDdeiLCeAULyD6qNnH1UTvUMK4aoXDm",
  "key9": "h9LraLw3RSs3WibWG3re2Mwg7CtTPEct5W7AwH8BA7HHvJgx8uY1YsLq6e1bBTXN5QZ96ejP4Y2HfQNgtL633WV",
  "key10": "4asMuzB6JLgg4Ui6vFq5E48uKfgjwYn1Qzcjh3qF6XghopKPUjVbf587SjwsoxWmkfD8tQfE8CyvAxsEdRZocNJz",
  "key11": "5KJ3KVyprijrQ15yTcUppqFSz4F3ApZSLq1cSD5VbckuBJFxch1oZYbQxfQm84Y5gSeLU7drW5N9UtUpb1pe2s3z",
  "key12": "3KMyPP7SLGCPAr63EonhFRdJaGDKh8sxwC5phgU8SrdCA6TsVHebPZsLhmcZPRAYQrfQy5puXGfmEey5o7X5YDxp",
  "key13": "4hXUZbdBa58YwUCzLG2TzV4JVP5oqvaJ5jTXbybiGKPvfHZV3dJG5d1CDsDKYcWqjgbp7MJeVzdF4chEvoZ96DH8",
  "key14": "3fyN8Z9aUNZTQhuWqRuhAUJApLJyya1ehaUqzR5D5ndaZrU88KhwZmRH8yo3U4TX56nxPAutGPWjGc91HBjGBCTU",
  "key15": "5hV23tZ8Bxn15Mc7US7nehY5rqkwPcW815dpfqfUfMhV8MSBnhotE81HU9Nb8aXUjR81b5K4fjrkL3EFQpwjJxsV",
  "key16": "2fpN5h6vxV7YWm4Yw1YgCa1f3bZZP2GgeDDp5EvWW37UzY8zK23FuUaMNL3k8NsoT2SvXsgEZswtPWkRgnhG8JKv",
  "key17": "4qWJbCDtioARHqG2qTcF6LUMck7Cxo5qN4mvBGELYR2fA5caCSGeGVD92dHKBgxJ9d3BwpVvsEAreohMcJaM1Rkr",
  "key18": "3VJ4LGsW8x2cKX8XvVq7nLGcZDRmJZgbzCfWZ4PN1WNV5cPUzEU91XCtpdQKARnS3242iYeuSs8vUfqkUhog5yYR",
  "key19": "5sjmkZ9RhXCkQAxfULPkU9FbgjSFazPck4vZgMhDwo7bM99csvWvBAenudS5feFvVJm6sn3m2kGKAMXdN4aa3B85",
  "key20": "RCQpANiL4Tjkznuyv3ebGDQNyvvB3ArNZLC9Ng2gjh9JAFTtqXdc4kY3x7MowWLqhVFvChvcV9YJtc7fhu688w4",
  "key21": "eVJS7eRNfz4LJNgBZMHfWQxP82jPBZyrrNvi6WxwGdPJKsfATcmGfyiwQ1NHcbKcZonWhcRMoYcDzQRTK1xHMJ7",
  "key22": "gY4nifa6K4s8few6NsjwhF5KUKgJrZsfNrwjZWigsRvDD1CjQycxajwwXa3Rz4CwN9hEoD1QrZKFW1G4NGfNjfe",
  "key23": "31SwzvTkt1hyDaTkWHgyThUykWQ78EA9vK4dpegx4q626u3aJe9bxw86TmSDRPETaiuzHCGwoAkVRRQbWkU5i8xt",
  "key24": "3YmGM65phxRfgvwVwMZXVPa1HFf6PAAeRmKh5zDLEtu5G3ZwvabSj71i6zmRpDeEpvxE9ib9aj1USyrMowF1dyMz",
  "key25": "sU9ZwzH5yhJAoAp1odC7LdkVdf4Bte1GkNEyud17M7dtgPia5aNat7hxTn1ZAte964RbJELEwpHPqnhGrVVzwTD",
  "key26": "4Dps6hjDymWhbGkC9s2dg26HdP5V9PaWBCjS72S2Ykyp3giYbqnaC5ytWUn66S25FcAVsnnfp78yeJ6MysZyt4nw",
  "key27": "4VDW6Krg4ufQaTwxbKtJAnU2BKSUWGfRMPGHwTTUyw1wN2ZfNuemZc18bSs9dwXZjJwcu4bmKxFDCUMHjMF1RRbT",
  "key28": "5Jy7uturQw9ALXossy88az2JTJ422jXLXnCKj1CS7vRuMnxMzZ91h67ehVwkr3H5HUV5fDbRQjEyDniqeNvJRTfW",
  "key29": "2qZTWLXoDuLTwVJpw4csLWAiKoYTG8B5o48TjiimCufptbbUpVPxoAGQkVvfzEqujwaDTCfTVnWXYE2f6x22zTXB",
  "key30": "2LrUFj9VU4VbXvvrPwM1F6DcJt9FVHqqipkMG4m1S5tzmhh1a2dE2mdbiT86HVRdGgyyRyRDp4c7z64TFSXrJWJF",
  "key31": "5pCznaLfU565Uvhsizxdah5JDWQNagN36ZoWyDkjbVhpvcNoNcbgqWQaSwh5eKgSJzWuJUHSpnygyDi1ubZwSLFA",
  "key32": "CbuEttP69M79peLEjtPjzMMTRwAVFaiTdGfz8m8km6v77wBYRowA3tv6WJv59ygDoTqPjAZMbjgmnaAwMLZ3aw3",
  "key33": "4QEAZTJVn5fDR8BqTnMytpTUpxxU1Ueas4WpwJnX9dFb6cyXBmywwCe5xHgrFcAG8GTSjwG5VSK92ThWUPvoBWBx",
  "key34": "f6G8KzxEs9rij5exXgMEerTf8k5V6Uujtb5sv9zZXMTdm9ojLmSHcq84tA9HWYFBREacwFNWhVcBejeW1jNqAuT",
  "key35": "5YfUxr9ymhBvJWT6Px15kyMFwVRLDyCTSb2XuMEvF1pqKBbwHtdHxuz9MR6Wtr8zP1EgFZqDeFRcsGJNwJJsUQjg",
  "key36": "5V9cXuAWVfq4pCPD9UtHVzuMw9aMhemML2gfUTESyPPm3nCVDTggnJJ9RLqkRQjdc96RX97D6q7VTGTvhnu9hUPy",
  "key37": "63N9Y3WsgTQxbPmBs96pf4xYw3ZLEsXho2YQBQUUPpeSKPKvD2EBK6bDmr45jdo7GsUtmYyRA4683nhnLjkmK5WV",
  "key38": "5crMyHYLRir84Ys48iHwywbe2zPtEkGrRGCfuSJkgLKKXmPueUnGxRadw9DkQVYLZikozn3NdBb9rWAUpD2K3gCQ",
  "key39": "2prGTSKhH7o2143mMm6na19T3Fa9pRprMGYCT4U2S8EzssdP89kZG2mTXUDg9RfqET7d5GGcpJLspGeGfmhN6Xn5",
  "key40": "58G3zdLYNZCy5X7XCi8cDCXNrx5SXSMJLKxxTbccqCRS5XJmGQvPvx4thovJa8ALUtruSxdqP1ukKb3zZdu6ANFB",
  "key41": "3qVCrrTrdunjShdt6VfmoHjkZYRoQe1aspzX4Lf68VPwyhjG3QnyFviGyufVFSf3XbedbFZbaA5vqqAu3RpUkg3p",
  "key42": "3KTjjaRBapyxWFj298ePLFXXSP7bZUno7cGq9N1ujKiBPx7oecx5B71wbETr6BMwKC643WERjcp6THmyF2TegP62",
  "key43": "5JHVq6h9sbPXayfFqgaQTZ3rjbo4kCeK5uwMe2MW9LAtjWx6jxj4AUpuf1eKLx5Vd59dAuAxsKvSwFKQEc3Uywpi",
  "key44": "4VMZmQurkyQubpyXA3xJaZim2vgYwmUsKWtwjvxzoUggAv6q6uxjPUgw57vx3KLKR5CqRXnGGVABP2YiLZMs1hec",
  "key45": "U29dSxoS6EZxri5FoZE8qainASaMue2sYSoHenmfss3uJVPk6pYyRS81dgwbZ59PQyZvhfn59ULfgeK8nNbSdHv",
  "key46": "5R7WmSz8mAiak1SieiYgP8yBV1TDXxdLckTaLvMdoj5REKhQiaGL8mWaSVyjBSfxsvJkJRoKhoKgsbhH6Yk6k8GC",
  "key47": "3HNvKa1VD3KVnafPwf2Mx8g5LbsKbRVDposraAC8M21qDuG4EBAKRQJw8wL7phUadr4QkecX9sB8UNiojUxkcVHw"
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
