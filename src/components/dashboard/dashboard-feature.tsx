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
    "46oWC5T97vYJDiCat5d2BbDEsZFrS9ihW9SioB7iP4qxxuKuaHyqFRaLNHvT88HrYrehKh8h7Qi75RNW5bZtn67T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y138r95j2QpxDf9yPRiTcx3Te9wkkwutQNVNaNvkHqzjx1gGppErW73ZGPoZMgDxiwc4RtFwAp1k2Da4BdEw4fg",
  "key1": "4EKtBGHGnMgBYyDSvLJN55Ssc9Rf5oT3Yks7dv615oVEqaK7nunPcw9cdk8QvBYPFyPF4MN4FW4j7mPEEbXCP4F4",
  "key2": "2S3vVA5bmHwuq1nEAj2qTxB6jYGXiiMDkhPDTU9uWAmCaTf5NE79Z7k4aVy7uBQvgrdjo3bwbWdhBgB8xeyY6ggL",
  "key3": "3vqRFppHmPSHqJNk1ERGMnj4vyUzEVpXikdCGDpyVdVUdWxULdtKT9EPVmzAiybhJuna4QxrnKy4KoUz98qDy4xp",
  "key4": "4bHqmmnB5vZp8kd3gdTwYQcR9c2tLa6EV67jMAgudh1kXXx9bpkJA9EMLenru4gYfp3eUoDGKtA8hvM1aBraeaor",
  "key5": "3Mme2csz262zr6qbGGiuGwMHGzmLa8baGKG7Dv7G5DAeES8JbmqgkkV6aNbEUMbDRuwFMyyHwyru2NuSPwTFcBFp",
  "key6": "3gCHU1f9MMT2sDa2jAv1tbnevK8zVGLjvAxjKuR3wA3S9EFtN5MjbZTpNimcRUjWuqi8XQgAydHUEKtWZDqYBBiu",
  "key7": "4Fgy22KQhyjRuwprxVkY1oPAfWgRqMHFnowWNCWhr4cFCfL9T82P7tEgZVbuwNRfp3FcEKzP6fpny9z7HBJ5EiTM",
  "key8": "5i1YfjBrktasArUbp9BAe6GkGm7NZAc29ZayNCGuzJLxZiGvHowgT9CyfBKsEzibtLxKax26e9RnGcAjLG8iAbZL",
  "key9": "4qZxycK4rT5JkrPHRLw7JhqAC66UTQM3DFSnVHVK8wtAhFVvg37GEx1uZRi8VCgoEd7ywiGBb9PSR4JFzQ7kUMEe",
  "key10": "5dx6YJEe3NUkp9MdznfQL6qXYyyAk7Wxu1AbCQkT85B6RFyr1NhT1M9i4iJ1AgWXkLT3yN6EjoC4SHHiUMEKfyUj",
  "key11": "51M9RpXgD35wDvDSoRfAxj6hWfRcd23hxWfL9sDteVPFc59NWpaV8XuMfJEi4eLzc6L3FjasNekrwbrSfQGmAykA",
  "key12": "3F8y7cUp5o3xBV5aw7FTnn4ejXJQE59GFuwAGWF9sDZ8yGUY8z7BM6TxjEiJkneSUBFECghF7SuU2nVLsFnsHytu",
  "key13": "4GWm5dvJBLHMnNUn1usmTZb8yiZVgS2QLL42sLX7tTFUGY2MYdqZYKmXkELGn55fr6JtG3f1sB3LqMMXdg1WNLJD",
  "key14": "5rb5m59u2ocwBjUkgVnwA34CGR3W58fqNAEEdaE4ytTXvaQKL2hWwTUFdrjUDUrCkUSGUHcQ7FxMgLtyGGk5j3eh",
  "key15": "565cBzQU1WTtdrFNxSDQx8d6ZtXiQJybptarJvrhs4FwzdXqwMNeG8UcdpyMXBQERxp3vNnFYueXZgimLyHAPk37",
  "key16": "2aAaJCkh2VgmPBsLbv9244TnjPELdsJGSvBuaTd5tXSYXaoofe9UQYBUXQKoYtfq5GeiujMSH8qNkser9CTinX9L",
  "key17": "5ENSm1pjbnFBTLpBY6irtkBgWH6Mq6D1Z72EAayXqa1A9tfSnhK6aA4qhouR7dRVCJdLLJciEiKJfBQ9ncaXra8L",
  "key18": "eg5WM3a1FPrPLpJHvxkHmEiQcwBXFaARb3CwxvAUhaFrqfC2M7jTEZrzsn5WTJMhNHSU61SR56At4ngihmKg4jP",
  "key19": "5TmKUWKqoFvHhnPJsVp3YiLNFCf2iP9Ew2MG71PpxWoN4k7bDJh3NuLKnmBZMngE4RMRDgCy1xxXTY8UWKJ6U8GW",
  "key20": "5YhVF9otF11jkWaXAcZ4E26J5sfSHocbrZhTVBLJ39otfc24kDLjC27z9UPYxDYyX8vrVNFv1EJEK4M9WYDhtk1X",
  "key21": "31cZcvHcPG3rtKHs1H2ANDuqNSjL8oMVz2JQU5iYhkUi1jcmseVkUrS5Yb8dgV79FDsMq8yYuJyEksnTEQpzQeRu",
  "key22": "46WTswBeDKqYUXEtZCZoQvjtMcDs2awvN6vgSiyiLPzZZDPiM9fBPLh12ZFEDdJgj9TwPaWEMjxYk1BEhuV8Un9J",
  "key23": "5KYwKpjKrPKYrgwCGX5oEYhrYbySSSsf3VDmzNAtxSPJqeoqhUQ53TBSGUpZGVgdkj5zUju4FEzXdTFtPZiG8TW3",
  "key24": "2ahp6yeoufHvDGnX8c6Awk2kdt4pNCjogUJ7Kh6Z5vY27moG4s3aWwDHGbWgRUuJsBfNmrgvNfM98NqmVar9GEBs",
  "key25": "45zVLiGeNn2WSpoYy2vw6p7kBH1gitvb2KiXpSNAVkg3LkVVTCgusv5PFtEi5rT5dJfUeDXw4Ae24cTUXozjp31A",
  "key26": "29n5NExbwixSAaZwPjD1LDBn6xyisbhPMTspQodzpqndDxZmcFLT7NmN39wifWQLQYMR8pqSW8NC1VDVfgVyzYnD",
  "key27": "4m8K23dt9oSBegVqTgFyvU5nU4w8LKFAtsNPfEey1ydJNtRc8BTSwL8RVGtJmNoXk88ofoSbyZzDTTQh7oqRS4dY",
  "key28": "TwFpXAnyjymbybvbkP48UYyxgSY8AE73WZQicq9dPNVzYEkdmNfyuC9emhV158nVXh5j1CJHMzVTFHzmkEUr1wj"
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
