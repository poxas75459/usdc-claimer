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
    "5Ef7PacBcZVXnprx5e7JXEtzXQZJDibCyj9SCZ8kqRNXfEmjtrwhP8EGW9UggPen44m9vJdAPidMpUsJDW1jQHZa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YfeiWmkg7AWRVTGKqUfxdXHr4TaPzbg2XCP2DpAL9KQCFCBhHizbrjsy3wcB3wvaSeDXFFpdgn2uBRF4gEr8PUz",
  "key1": "4hTtADqWwvCbzeM64QkJg6raMSXWoWfBZ1Mba7WdTLQQ5sfmsAexE5TTEgLf7u2Rx6pLVSvjW3iSwnqh1ahdbfdC",
  "key2": "5JyuY9hDnZxsXYXZvutBGNuPxz3CbYzvQZpNoCq7hqsSsWJTYFwNJPHFNrL4f4XDVqg5peiJJVsMvJsiJzvDeknj",
  "key3": "ehoEzPCuWk3bGja1hb8ufaEQ3uoqe8RKuYRPwpRZjVEwC6ujtLuRLcqRVbhrP4mwD8rPsWNwiE2f8ViVXCivX7t",
  "key4": "4UE9TtwmELab5eYQ3hyf4GGXNKDWEagWybvnoAUNGQHg2MB6c7xNXBxnkz8bR9pVq898k19ycLiwLR9tbBGTL2M3",
  "key5": "4oT7v8GkazCP6woiyKFKDKUXdsWRvwK3j3ZG5KaD8EdThMfNvmRd14tnLWvUoexvknRDfiXAyWPYVmbFbGBXLGFX",
  "key6": "2odqz37cTBPNNCknHdQPBNsJBahbZPuNLfCt9fE2xbfTP4oezWWT8LpzSaKmwFBe8zYRLVXZQycEbditGvW5YNLu",
  "key7": "ou9qw6Rci3SdCiDJvqCC87UqxeNEh25Rbr3UgJzzZCCzpdL4uCadRSsK9C81J5kBckyovg2rLYovrrsrhyXRc2d",
  "key8": "2PUR9ZygpDqYkfCYpGUGokW4SgXE3ejKpkkmSbrBAgX1oLygH4vMjNza1PFDtACBQGbRe5VkscAeArwksaf25T96",
  "key9": "2zkFFJBx9hrzeCiexLUWUzJc9FjiyGVKQKp9KSDuyyoxHsUNwRRv85XdhWpRY8HCmg7rxjhmzAPf12wMeQ2XmALy",
  "key10": "cdGdLot5b5J48puhTV2mkn51z2mYAC3pCLBwKKMvPGbZqHMZQetnfNvxYghAC7YJcGMmuJ62z45wmRDwFg9JWpz",
  "key11": "4tjdvzAmw9kB22HM8t6HiXciUyVLcJrhcVSHETkpbMwYNqcQGtDRVXFvmrK59xVfA6L5fTKMgXCyWasgUgEB8doa",
  "key12": "44gwMi3JG3V6KXgwWHuC7jrWBdmKVjeJZrtS3Z525eJGwVsz74Y4H7xSD27z1RoXESLqwzTawG9HEvEGjHHgxVuT",
  "key13": "5nfCj2NDznJZGDuuCbYoQyeBcZdDxh6cu6RuKreJxujH6H6DfpXwAYDb1JLxr2LiTSNptaDq5DECgiMQ8a3uZThS",
  "key14": "2T3WBh3nMMTYMk5vfH949H9JhVQAWYPezHCP44fPzs8UxyLmuEm4AyFHeAU4eExBk9bNmUxFjiuzWdbn1FctUqww",
  "key15": "F9dSJX7ogi6VkrYW4GN3JTMGuz6ELYKFRBYQEY1HsAN3sdpyzaqmDJbSgyfweZ7sfx8Ub1vFLQ9zbJrxGv7Qfwg",
  "key16": "9BADpRm87uVzozREq7zgTEXarC56CFshnKYq9aMw6G1c3j3sAkaixzTx5eJpkoWZMYtCfVpKgXkSYSFRMgJcHhs",
  "key17": "2ox4M3usJXGGAg5jtf6u3TNmihuykqq79NHWJ3qsVzRmG13WZhb5Kd8zMZBXVSQegmdQ5F1MmF95px6fCjQ7ucf5",
  "key18": "4fPw8WnwdnnwcXovJASBUS7twQbdssPafCABqsmrnq3cLo4AbihKgxtcDaa9521tWriL1EXvoDmEZwEk5T9UBJhv",
  "key19": "4K5GXSmazMu18spuo4NLutGenqzwxyBRfpvfkDWgVpBKNLp1qPuxvY4twzn6zNreQj7L17YN79H6p2hq1Zj9GqKa",
  "key20": "2zkH7uwLzLumfqRBgpWDEc693Wy7sgqJQbmHdW6mVDU6BBKLr6HbCS4DRCYQVp2m17Vcn4Vm9JtxdWhQiW4unCUu",
  "key21": "4RoU7Z7Ui3mKFxSbvh6gpovZN2a5gGWBiug3gy2NGD8gkjsuspAuEJrJVDMRBEESTio8j1h1W6BDFJbCndAZovsS",
  "key22": "3Hd2AT1hEomEgcnWfvZxjHmvL8x712oQnRHBXShFbXjPSYNqnzF5QEhBTUfzf65oFwVnu8MWSF8jDmL9oHPLMM9i",
  "key23": "74C3TVkX2KoNkMBLqir8R4YRSHqac3SYQkJcepkcNd4DN8hLx3wpLHoJKQSgoWfRCJp3eBGaDcat5VgyL811KSr",
  "key24": "3dsGhTk1AB6UjLxsUEhuoKZLE8kcBLLV3FF1ZdaCbPCPpVDBPsf22w3wCZKxskEzxxRnQK9AVXNHTYoeHJ4sfRhK",
  "key25": "4je5G3VUw6dpMKr41vB3MKEAtenr8dN91hQ8HL7RHQmzWqFQTR893dv8neVjjf9waYxHdGFPgBLhPhB4zgspFHL6",
  "key26": "pqJiNx6hUGueBu4s5V9UE4UE922SDKM5B6o7zo9KnbYpe333jFZFSVW19SfgHCXdcNq69hAM9NH4hg429HdzJur",
  "key27": "4BGRpX6PKppDBJ6PHGFzcTkYMzQEqNNLvBdK3pz5uCHtNTtLdozQN6RaTaVEJ8saVxyybxcGWdFSmN5E2Zn5X1Vs",
  "key28": "4Bkw6jC4RSoo5gBDZEFmduvdCuGJ4b8rQBzHuoPHMC2osNs4DPrkmoXFK29xcdGdVWYJens4uZtbttQN5tyH44Dj",
  "key29": "6693FnCHnR6M7UqpoPfE7CiYzQR92VG1FkKytRKxUemNEaLmxT3w7zegfNNzdWkq99xmPUGiuqvN2G8QowEW3pyX",
  "key30": "5XKKBxa4UbbsG5A7BXBs9rM2W3bHjkzRYnWw6uB53vgLBc9xKPDbPXpfBbaj9jp4LKJ3vthum1vDCdgD33Pofe3A",
  "key31": "216snyrHG4CrJ6dretiRkS1eT88HhmQETTab2muPE1NkrEXjaA1wNKireDKVNQbtkBUf5swo7L2vs8MwQRG52Way",
  "key32": "vXGDxcvFuw48RkDFNqANAdGy3g4L4xLsM1YjKuUCA1yMs3M7PeqZaX7Lity9xjNGXztZxZqvAaGjPy28a1GTCWJ",
  "key33": "4k5nMG8ibGgyMRHe23j8tfbsTNypdrg16TAHmSSPEUhCE2GY8Xmnxu4ebXWnRvye7wXWjvp8BDbyh7EYx3844fq8",
  "key34": "3MwZhG8XJQ1JMdymdymthkH76MCbN7wgnfRSEiktLe2LgsDdNdAa89SQVVvcrPWRgWQXRKJJdAc2P58SrZqF4YKv",
  "key35": "3vUUkbuP7UPQTh6X1Gx3j77UwGyvWQxymCXWMS3J2E5z2gWirHDb3sb3iMdixpzyHL9G6hnZhzT5zS6kcnJEC5qW",
  "key36": "5fUdmuEeDYXFPndxMxX5oaMfHa4kjYZzaGk6PD1zDLfWzDTNdAiouA1Abjqaijc7NJfywArzZQ82igJdsZtg9wbN",
  "key37": "5qJ6Addhah1LT2YhEV6oSn2MZ9dGAHYbFj4pJ2epr3FUKkK8NHgRgwstkKFS1FigpdoPQTjCYvKJDaqsEAc915Lk",
  "key38": "2kPB25egDMTxenf1DFM3ZAVYfw9qmzmTrSF5GhsvyECASzefDhguNu9Sec8Mc7jv2d8fxBt9gVYnfgEP23GKRS7E",
  "key39": "4EoW1ZGrQRvVH3o43NxhV5jbsGeYywH2CjnNtXtJpT1REoywFDuXEddZqNfWRCWRodZfp8h13s19geqMa5iS2UiL",
  "key40": "63LpLPmKqjmrZitRAabNxckWmH3KsCZ8uu1SmPPTJQb7xBMwSGdkeDU2goEpPGJLWwTckYHynM3vARXHxMDDjJnU",
  "key41": "64KtJLoXgDDEHyC8aj6BvEy7D4t5ryVjMaetkn6wWWXVRFonvTxveo6DkcvZncG6PADYSy1AXHqD4xarBWe7dbM3"
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
