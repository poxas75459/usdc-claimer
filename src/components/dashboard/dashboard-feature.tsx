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
    "2rkcfLH79JE1HjCdSwi5Yd7pGWXT3xxwwqnRBk9vP9cXuUFvT3f8a6x1QE4xmzRQYC87FY4rzC3EczWJn2UgNDGM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bRgZ7MRMQ9uSeggez97EpEpHKV5WW8P4PAEFYcQWXMaeVzcyjsdYN8DscVwgwqFYWoXBEyeHNpJvtpoYt5254Cw",
  "key1": "T8Q7WjMkGXG932D55x1QUHBRyDmftTB6k5b5kBJcC9Zjx66wAW3AnxwTHc5eCyoJQmrEfdXjd3vb3YPXrUSGV3d",
  "key2": "4kefEdyvjkhmx6wWKvQZsvRAomXfFRymEustUoTZEv1ys9ha5YpDijcy8kvaifyW7twsGANLqhTPhskyhix8xSpB",
  "key3": "3kPvDJFR4tjkHN997c42L5jXyfJodK9x4P37uEtBG3pZ2Vh7FxGd94CjEpdejDA15SqFNKNjYJZRHRM5QFGkhGeW",
  "key4": "35dtxwSqRTyRRb8PB2SD4Ezoqi6u9f8rL6oauSWMdrntAaBkzx8KH7Vw7fJPN1WZjqZJcYeZiKxuGXjBivZtprXF",
  "key5": "4GjAUQmDHA6wRxPXeYKfyJejZxT74ceN3ERQvvyRwtBJ9kFY9ErUBfEu5yUrNUjWyQyHumdjiuGZFuPecAFdEgpv",
  "key6": "HK1fZv9wuwqx7rGoFxpAn56F3xZW5xKRvrXJRyhTtCDo4NPPJW397A8R8jnN4bKrGQHy3B17FPVehFGtCkBGhdD",
  "key7": "5XB7Um3kkegRsJ664YFwJuZ7eHJfpUaAqGh1PsYGnGAfWPs9u4ehHYKMX3h91jUamJcNTc2BaoytmEau3PJhoGU6",
  "key8": "RTg3bKGrCLbpgDGkw1FKxTpitLm4zkcGuowNCPf6c6hP26PVMa4FSW9m2szAYK6yxjVyoa8FZMeuNY3QRt8Bmy6",
  "key9": "3oQBryqxPByVrAyHdb1g8DZY21J8innCW4MX8YNLJv8tWDWUNiebLMQYNtcrahh3SH2g33AR8tNkbmC2yFCY99zs",
  "key10": "3zy6jrBaVFWUN9snzSocZhCkcnrRbPEfyfUemgJCDLWNBozyskNdZxWZVKkgvsBMghZ8p97iN6y5Q77t6UoFqVvi",
  "key11": "4TV7ZwNMRA7W6bNtFtchoz1HSfESMGFTxHpNUeyW4MDpNTPSFNXVhGjKA8V2Cq6L6DW2CLecusKoziffzSNjLbBF",
  "key12": "4YKnG6nfAzRNy3wu2QAadWWiagnFwLahhMmggoiWxvCz6thAc4ZYudK5Lubkjm2jFH76FgzHe3wKK1pNLaxsEMg3",
  "key13": "2AjNoEgmXLA8mF2Fa2F6dLg8QEiAiom2CQ7LK11v83vcU5NrWypgfW7BPKurwkQeF4oWdVstWEbRDdt8XKgmfmzu",
  "key14": "ENMCt1Zs8y8ekfnsSSSFXM9aLddKaSQtrLfT98aTtqk5EtSJMnqRZzqcuArjs8z6BrBModMyRD3WApjCehnEq6h",
  "key15": "5okdU1rJX3qWYi6LBA5GHafzCpeAeTHSLTtKakti2XkXp81fzfenr11uENhGQGjsq7Rn9CrGZWXLY6boGs2qLv7k",
  "key16": "539AgA7hC4U3WwS1VPhsXN8TnZKkSFyvJZgihYnnfExrKiH5NwRwu2cvoQfB6Pxku3YhZLUgxcWF7GzwXp7Vzi6o",
  "key17": "48Y94X1k1xcpniMRn7N6rRz2FF5wfoLM1cbuMTLLhxvzqcMpg6d4htCRf4nhgg4VcboqMJKHwKfoTQ3qmeWZ2gCj",
  "key18": "T4BW29L4o7AcNJMzBKQ4A3Wh6kDBHxRiteBq8T9qk5eoWTp2oVptDGad98NBjyXBNS5Pgva86K81WwLo7KDW9oC",
  "key19": "2igdtQMjsMhES2Qyj1cVLL7Aheb6kim367UDqmvNyc3JfAU7KSKKQV7DKfdNY2HFMr4Jouu2NHxBHrUtFRr9LBR3",
  "key20": "66ZR9WrRdiVvz1hcBhFej251eWj4xDQ6piZaUexJSK14bx9h8i1WBtZ4F26h2EQZLoYu1E7xfBmksCL5sTtwiot2",
  "key21": "3iUTnoHaLar64HXSXxkZzewVm8dd6dPqViMWH5i3dB4cCzEWpHZG1xwE8zDUTUsXDKdifEuqgxi8HRYQPWEoFscr",
  "key22": "4PZYCN5ZLWfT9YVq7V2gfTUMsVrTGokQEASC8ADQNPzjhrGwX91THbQRmJyy7D3afH44nXpwrSj9Eg9i9opcfTNu",
  "key23": "EgWTq4k5VN5JETtHLnTVrXUA1ARbqipQ16fh2TrjPgYoegnFbhChwxXYURRTUE2RrR84iw2RUyjaaiP34kPB4j5",
  "key24": "5Wvp3i2hnQHekXKVjhJmSXKiQUdqUtmmp1L3MxgGp1TNBwMdSmQkuhaXh7rhPp8zVyQudQ9rGM6YZShvR6GicQ2g",
  "key25": "4JfGgWtaXf8z9PxrxdfurLx3dKw3My5of7pWDTqVb2EkZD4NLAXDycyYAP1W6BCGXF5HZVm3J5j4whovMg8Q6gmc",
  "key26": "2qQ6kjZCdNVUMPzDhwqhuobccZKWLRhGE4cQaLBBC8CAugDZeaswRaf7grroPhNAfrg7YxaQ4VSFvwVvN4A23X54",
  "key27": "5giwM9nLcuR7g1vxxico4CwbfLQaLqbfP1bg75LYPk7b18R8k8RcsdEW4t2apJHWnkmbcDDMDnDo1n7cwQhUdWq4",
  "key28": "5PFRGLxcr4HG2WQfV3fXscdqNuSaZ3aLgDmAm5HTftfaJn2wRCnz6PbxRtWLRMjyjysWEFhNHHW1pLAL7RpRecmV",
  "key29": "5hZrsaMMkE6SxYcjPVeLf72tNSKWppsSMt6mdRYmyLpixiwc5gKwfEGyLzn5Py9MFDc6s14ma1YB54CJnEpRvjVF",
  "key30": "5t1AadNoNW5LQAdFcNXn6TFCSjpzVLpgmUqUqguRm3zE442NrSNL46DZbQEhT5FGgTWWmkPLhDFseHSzFQ6f6xKS",
  "key31": "3MLuFYUuQqLVpfFGuLF8MmLjEU8PmzEg69uQS8T1kRLAZWDiAX3G8ekPgDCBSmVR3qh66QBUYDuqLVUpS96deboN"
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
