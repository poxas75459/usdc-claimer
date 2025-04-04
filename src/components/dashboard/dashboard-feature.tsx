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
    "87J5xsyUEekrhq4DfrjxXaxk3rEmjFGtfqnC3rcX5D7Txt9gBAwwMaRHYQEau8ttYjAiSdnWyF7xHD7M84mUv9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u8Qbxwg2AeD7aFQSkjAM8x26eL3eFgqwP4ivDZCQ5Zu1cYRC1wVWyZC6gyLe6KGZWTsGg4epeG9RkyDeJpyKakX",
  "key1": "5Gy8dHTwZX6p63e6KxfQ9u1zrb2PoQH9S5y8UtFp7Xfef6Ck71Zo9pRoRkCtgyUyWVZbXAaE2uJeNcRmaNuNApBX",
  "key2": "3WDHnCFUfWe1pioMcQ63HnGmMwjwtJ2ansJjdComiqXZvfkb962kd638DnC4HQopj1zt5r1ocjadRXVgHnaDfuEH",
  "key3": "UjmPiXTpgh9kvx1nLVTD1NfDSvj749KiimD83PPt9xo6fh3jiM2C1MafqR9sjAmcckwandq767BseaHAvHosmCV",
  "key4": "23VCNSgFt1WjoxqucTinEVHkg9B3WgJyWD27pskKtqieQEAhyEcm9VXejSLueTFTMfy42RyHJ12PWmc9NjgM2387",
  "key5": "25TVZiwQtsPo5qBstEHEqkSWd33ydFthKjqW14THdx9iuFGT7HiuDreD5usqa8mdhHswBvTmyWeK69smT27hKD17",
  "key6": "3kQY6a7gg3EmEYEpxB3yPoqiyjPM2FuZZ188CeVmc3Aw36mDxFLgHo5dSVEtokNWWQ4LdK94zToMyWVifeftrF2x",
  "key7": "3cC55r1v99KYBFbVvn48nUs2gmCXDMxcRPnjdVAw2EQoNcenGU6ZJQN5sdUDXTwksT4v82iVTcQZnqSH72XMT8Af",
  "key8": "2ffkVi7yX71P4KX3equUhGx5xfy31Hiakw5TsyuvGmqeBV1vKeHUn1XgDrKKvBZYyXD5FBGGqnoDWxPp1RyWMNa1",
  "key9": "3QKesiWiGrk9YvNqT3AJ5SQmJQF7aV7Pj9Yj3fDkb7nTbfjfdTf4TvRk7r4APCwBE9fh9f3DGiEMiPvfcbpcH9KS",
  "key10": "XxkeEPEz7Se2jK5yJ2x3G6VVYSxMRg4mXahiVJXsKamTXea1a8x99ZtfQ2pdsVVkTJrDVLCr2DUoxu2xTt45RHv",
  "key11": "4QAasJPQorNXqngLHWdxwQPZmJ6FsZEzxWUCj9DS1QnbBTqWVcV2cbYkRyZfRuEXN6NqfhA7skzBuRvchsnBs5XM",
  "key12": "PSj3QVByHra1GByxoxfCCHELcoxDCPbTdwSRAG4tFAuiA3cgaUYYRPdL8suWYyxLYcgB4XvPTj5Z9f4GgMWGhrh",
  "key13": "3qu2cGH9LhdfBDjKKPGGq5uPFf4QHZTnqHLRa6H1ySrK3qsuDxG8rN3wnTxcebAPryqtCyZqPaoT4kiCYRW87nLq",
  "key14": "5gXYKes6RW6MTRLUg9pAmK9x25zTsQRKHxVtjiSxE8qqPm4bzU3xMb2JbQnAqXeHV7Z7kYRuN7v1jpRUrDC9f8pT",
  "key15": "3AZEcszf6dRPp3qfxJPeVqNWUyRAZH9pUH8oXhvJEuZF4RNhyvNBeDmMSM4p9QYYkkTePombGweTRdriA5vLSEvc",
  "key16": "29cw8GNFTR1McS6JWg3t987uFJohihV1fYZmTsMAaz5SZ8vAZxxZ4Berd2z1PyjUt9UwjBSXxhCUBT6Yvi4YbYGL",
  "key17": "5nDXqKENH8PiiefHJxE75R6yKT2MNxQ61TbN5P3gwfNGChi5W9EiNxD8L9W8MUFXnawNYRaBXx9x55HihKXzUfJB",
  "key18": "3htLtmmmb5UFiYrPgtFsRAUV2CbeJSyb8jwEXwd6RixGGL97V76jHezFKXGFmZc6fzBozmb1jrbL4umTVjg2Q4dc",
  "key19": "3VrEXmKPJhA3iuUz2wkSPmiHriG7m12G8jXKTDhAWRFVCJQcMymZ6xeuQQwnZQ9i16oRdWEKs2cJUm8wVRs95uuk",
  "key20": "cvr6nwopbLqV1TetgoNNYK122ZpnunFVFogG1RSdGpkW1978BcuiWmSUd3Vo5cpr4mYoWaN3bmAeGhKDF9sjmsr",
  "key21": "ZAeRWjr6rVb6Usn5C5Tn5QNosUobkMAdqeL55dMRndFaE82kPjwp2Qs4zCsRrvtwSU3S7RgPyzXjNCsYNdmBSvZ",
  "key22": "2fcBfZhueYck8SwkyBPfNwgaeiD8QHUmmZ3pJSKoFU6rNi6RvNcAj9z9GZ4C7gTgYoxht5qPW4kVkfsNvUbDHcL4",
  "key23": "4RnBrPxUrAqxq1kpbbsnfgLSToSVkUTVpYCcB1TLhHD6R4vF6jJ98W5owLxC4trKycqEPLJjr1o9iQvatpUtFQiC",
  "key24": "3ZgHWbkG5eJATeTUh5EYRffyuqpHnMvjNKMg4iAYZTdoLmQSgsMQvzNznzMxgUT4RUJ8YsmfvXmFWTBbJ2KXuWZT",
  "key25": "vWCEvRggU4XDYiZERBQwcqcbJqi3NR8j88HY5Zje7AwK7XNrAzbdvcLtP7tPnLoK8KsZFt14berrFgEFqvyMHZ6",
  "key26": "tdmcbJdd7xWxB96CkMpNdtnq9vDtXGWnjqczDpR7C4ocb8eFZQJ2ZdM8hd3ZfGe9QeWdE4CRDbVBisQnDxa7j9X"
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
