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
    "3NLwwThBmNECKdEsLXCDUR4t6eDRXhi2kid8K5bNiFZuZFLoSCGGTcocurwTnYmardPGLLWnhdyFKJnn6bBjiSbb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VD1pUh2iMhtuZZGEgmGgHTAgmQScusaezTjvcNGBGAgRu5Z4PAxzu3GXCcWQadCHXBwePPP9v1tj19HzVJ3r6vH",
  "key1": "4y4UC5sAeK1psv4iTfb4h7VXMR2mCCDaBT4EJ2excnqcSAh9TV89ZoUYV4R66KXfKdRmQbkZihSoqUkmhTNgctDA",
  "key2": "cmW4iCSFRJZmwbsXSDs6kHcXgNFaNzdqHSfe3z2maQCXRwV6SkjprfEJ4ZnkAm6nRsSDGeJQz7KdFHaQGiVMwED",
  "key3": "5nfRZzCK6CqeBtyCZMr6auEjANPVZZy7b8qs1byVsQLrYuTgfYX1ASw66snuh9B9bo851PqqiMgav5sgNZbTiUMJ",
  "key4": "665bhzapaD8UMGVf5t2SkSuECvoRD9ubZP6VEwxQs4aW2kXQjAxG2g8g7y1knHBYJWYhrywKNCKrJdB8gRQkKGJ1",
  "key5": "4n8coeY6QjQn34cEfNxFXo3y3GRDoxzQnzLvQUX3RpJtDHPSc9AGUrjF7cj7ivZJcUTwYhKqws8QF2wdkjd15GnL",
  "key6": "3k6kMWAvsZsd6zgxJK75H8FpqPgbt6R3hQCYvzrpKTQvoXu1cX6geUT59HyedSQWsab33Fktm21Dua8ZGxvgnnEr",
  "key7": "uxXsWoepB5G1WH5fyFH9Bs5xxzcMzM3ZpQKQ11UoaqfyEsibQKQzDr5GHKCziZWPrPztM2Ahdp5bFhf8TN9Ebtz",
  "key8": "2EhG2Zg98d7w7VDgVP2aneyAhCzRUzMKPiywFoueT53i4KQidZRH6pjFtsS99k9LfnLQH18EKn14fWv6PCa2Ffor",
  "key9": "2VdNdYRAW49sgne36qC7zfk9b9rxHXRgg3H8PfkK95wEmEHCo8fNy5qQSg39ULArj4PtxakqWfrG7iucK8aJGN2e",
  "key10": "41mmhsH8a31i9UX9FwA3oaxYiSLw3pr7c8eeDBsRPFw2oXWg1fDsVXuM3Lfg5Fcep1BcDBvxBvR5wyMm5ioKQXnB",
  "key11": "4qZcCKzqxuhTQMpjK2KmJw595zmFFjhsbNi3J9Vxdw6LU8WFmsbSqbE3kzX7J6DyCdiugc3FUjAYHLhB59PAxgDg",
  "key12": "5KayKtBe7Vf5HZAnBGVFk177xbVqkrTTDBYk3XKPafUweprfmkbRz8QJWeMXiaih9WWaN3hNgNEYbSWY1NJHmVWc",
  "key13": "5FzuYCzNuDpz3HN8CvqVktaMUnFLG3zSTQdmS5DS2dgUM9HT4TrfpGcuBNjzamMFQMXGhbmJhaBfdDCXp1BVURiy",
  "key14": "3avHciqJMJgbweE8MzpH5C4xcgTagQH26EqhaHidss8dQq4GyNvqfULn3hMoFemF5N9Auahp84HU8LvMbCxPATrA",
  "key15": "4HVpxmV1WnVU2eFJxJoL8mi52UE7GLKtYWn4iDhJAPuS7YNXWHHdyJWnLpejh7HWhqXQpSAzvaKGqY5f5tx3z9TG",
  "key16": "2aQJYADQ9b8ACpBhDYGoRFToYoMcRM5wLSwufHEBRuKuTX7VdfiqQft87tPjwYLxnE2Xnd2kBENN8UuuXx6rnRf7",
  "key17": "3kLkV7e9TpzKaxHvrWxbBA3GwMNuwXeT94T6fWBwmKx2afvzQ4QzEq3TrcsfaaPu1DynG9zACFmeEJhsuZvcEqer",
  "key18": "qdVhWmejMosxr1HLBdfzUPp8qRCgGo7SCHhEZVpJqCdKbCvVjfZzXPLVfLJ8KdxdgCQwcakJURmcDiaFPcXRG5S",
  "key19": "3VfqkCmRmYPBnN5pgfRxPGcZMeCpb6GWaJzu3BLA2PtwN8goeH2jwPevQxwM2Ahsk1iDfJ6LDkfoaP738QYZRNnm",
  "key20": "2qQPWToqnUfFj37nR6Fh41zfrvX4iq7Wod2MszmQPwqUnau2NAX1nNHHmZEzqv8awZEPse9g8Ncro1dvzAZxm8og",
  "key21": "DUEt7actvbr7yDkkphcpzpakF2p5pkXGLaR2pUi8c21mJrz2p5dJyszgUCVeFytgRCXfiYW3FQjDWmWqWm1UfdM",
  "key22": "5sbhpPrygyo8sVLuYouvhc9ScnmaLPkE1nVp7Yd5W3PR6EvQU9azzi9EfdncothQb92LVyHGzr8eis2132och7tP",
  "key23": "467CPH8gYdf83tvsYhPCfAUkCdVvVmBFE5gum9wrFNu5tnwhheC3QrjcHGEcvYyrEKNzYdoWgQBhi4vSQbMHYgnz",
  "key24": "3fD2FJzF4fhiBAqHtC6ZBFsdUpftXMXX86kdFgt6nwtipJCD8qJ9Xsx8XWzneCCMqaTWvT3QWtimAQjtURUKdpzX",
  "key25": "kYsuMgMnt1BdMfRPn73U4GMUitZrsjVsx3taNLJLWrDhD5v3BU7jneQ6CGz9DEu6AWD3EVWcRHrvBkjJ1CEFh1P",
  "key26": "3jxqGXbR9q9QEYYwj5vPTwZuaHpuWhocwaNw7KLUQbGcQTjQfNtgxKj6yxax51rqzExgU9ftZXpjYsSggymE64tU",
  "key27": "NGAy78zu1pjozfYPqmnfdbHRiC6dhhYwLyVXxh5zGNqGDNcUYxxhiBgwhUHMMYqfsGnHVYV2MwjL42rovVgg5do",
  "key28": "5evZetDJR52TxoR19JAmqgxbyKLQXhWiEXhrYeB27FJpVDUNiwJYSzVLAxWbDTaXcngGc9J4ZaSh92YTEdL6Cq2s",
  "key29": "Q1qNLLVFUVvUfUgr4ZxyRTbWNqv5JjyXoJiw75FYFwoJMSyQC1SVs5T259Dy2KdjZcJmVxMFZVmarQcYZvAmTNC",
  "key30": "4Y62ahJUpHLgfcdnrpuQPy9MWwsu2GbPcgdPc4BmPxbKKKdgJqwRiyi9Sww4z63zVyhVQnwW7kBkwuK6eV4izsGZ",
  "key31": "5Dz3mBTsmX4HozgcLL3EWbSskeSgQfUxkgHCGUQBmrB78hFvQzSzv17wyeqHUv9mM9fzB3NxMtqm1148mzTEYXsN",
  "key32": "61pbuoUbLy8zBUsKQKRk9a5DCgbx8B8WpwXn2jwhgjyu5RsXURvj2rh9DdcGHduZPbP6yh4RSfX3tFbXTF2xMRLE",
  "key33": "2rzqccpi35HfYVSBPhhouR4pVVKawkVsNPnLJtDY4VwtuiARH59YuZGr9QhX49eB1KkXmXyZBGbFVBB1dNLRAfYr",
  "key34": "4m5RZpgPwXdR5CNMDUr1W7Sb9EofznMm4pi6tmVbS8veRdsQUKP2xZf2h3UPDCj6WhEAqyunq8Ffr5czedt42quS",
  "key35": "5R1hfYpL5o7NrFyENiHDtdB3VoMbP9EHQRUrbCnKLmBk54pr4Vpb6KQPraeoYvpnNfqkwYg88Xzo7qtNGUucVX53",
  "key36": "3YPRZ91MZ4sP1bZskLnbx7d5tGe8XQVFyJMBS8WUaJJBPNaCtHj6qYGd4kehNnF3rPXFTfYJHNqMoP1B514jorLA"
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
