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
    "15VjFUHhB96dGU8M7qwg6BdCrY1jVrsmwK7JeH2L23ty7KJh3eVmAZnMNbky4cCaZMCxS1Nvn4njVTfShcxLn5V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h1ZrL4BsgTwtvTWtzmmpv417zUnxu93pxK1egcJvvjWCdoRLtKiyQ5tt9T25vmkK5HS9g6GtS2GRAX3a6QuFfnH",
  "key1": "2VGixZ7RgNWV8X5ePADQDDXon3PRhZWKJm38MAgJ9DV7AcR9CjNinCwa7SqAbiQkSHv3hQYNEPdYzN9ttZirsQZu",
  "key2": "215Cczrph7TX54skdM9guUdtXnAidX64SmSZyN6c9SmknLyaijM4dt2DftJ4xeumrWW2Kcbfz1kybaGJqwjrNdZr",
  "key3": "3m4hng9nsx4NzpQ5u6uRXFPYyoLHdPk6LQ2DQhg4C41TdkkxTRwca6ZtXunmASRxsVboawkauj1cQAFSgp4JSQ5j",
  "key4": "2zjsqkuDfzHdkjqnHhGgN3E6qXLP3jVUYNMUJWcuKQ4HyzvfL8AfWpt1mevJsXL1Ye1EkqxQ2Y3vTvUYB9QsQXt2",
  "key5": "3pkcDTKmMPXxxzmcEYkwkqHjN32AbpJwZr3bvcjjWDBchgb4Ntad7K3piM2KSu9CkoiBTBCfFmVcZgRJPXToMYrH",
  "key6": "z8Kre33DhiuKDGnp8NAFbzNM8MYBfDavb6pVCsXuD3FJEPhxtaNrGdZwhKEGHdakeB6SKDcZuBzkfpQu2rRkwV6",
  "key7": "4CwMFSgELH3SBuziTev1ZC9F1ay7FfYqftPTPyefP3pS82dFB5Ak8Gx1BbNPrfqH8bq1hnnCuAUdcH2TvbP3PbjH",
  "key8": "ZiwHCprW5ZbLyhhv6Lie3hUPKLpwxDDchAoNp2w7CZQWKA2SjyW6B6B4g4S89WbqHVikKLw7ZuF19DTqfvTYE8y",
  "key9": "3W2CWcDpeNVppmyLTuk7a18bawrko4WhpmcZ8DPYfLGjpgiEryZymePHpD5dmKGH32zb91YwFzQ4dsWaQVvr5qTf",
  "key10": "4vCmEQUfWHecdkJRG3KXSrnAUmV2aM7nYNEKfoWHiTF2VPMCaWVffgPFNq6VD4AL89mmJ5KAUStGEakZcvrHu1gr",
  "key11": "wtz1wt9tQkyxd3CCLZPqWq1FnhRJshrks2xeLR8ntgQzPRTXFHSbNkYv9NjxzauAdnqSsv9rgW9ZLSKttvxnKPd",
  "key12": "B96hTnfErhPA6LJpZDbYs4g4t5j7eR2EaGaWhvDA3cKJNuQsB5LaJ9pbEe4NLS6TfsNhAH7354UDstnJd87UTvF",
  "key13": "4eDzNhTnaLgxdHbKrW4vUupHFrHoUWYhfvGZC5z1ReqFhEb8BNTgh2snX3qMcBXPDB3SZ9oygMnoRBzoktWCjMKy",
  "key14": "5pBRQjYKkeu8qQV2RfM7pgKYyTQesUzBzyoWsdW2Ws1JgiRxZyykcbaDybC1RqXSvtT3aWwS3RjbZtDmHVh5sGyx",
  "key15": "36UpZaMFY3FygrJgg79SZdJGft5T9fUGhyknBjL5LavHbmxGV69HDVdJCEeXXZRTnm3ogMyvwFpbW59Gft9nVjAN",
  "key16": "2NpPsb1RAUBETqA5nKBm8gDEG9HchhcR3KmQcMvtAqmhTyNnH2B9FvBwMRvmgxNzbXRp6eBUWcuTDFyjvyLqL41x",
  "key17": "4maSJxVLMpNyntbqynmMZCi9ieCngfotBktoT8ZfV9Kf9XKKSmKq5Yhf5ZFrj1FUS5yuaRq4pwjWxDcLEPprLYdK",
  "key18": "2rvUDTmepsDbvLMzRHUtHewfsHsHxTJVcMH9U3PPnnyMbg4923jhZtDUoj1ZYq9npbSTdrry35RUTBG2gPfMxpQ2",
  "key19": "3gYyBu1Eg8KYPh87ew91qVdCwRAK8XDgajDwL74Uwzz1TghxcFSaqC6teCwFP2VBxRTnsVaxsqDP1gGwupXcRfrC",
  "key20": "5PKyVvb9cdZv2f1SXyfGpNpRqcV8ZWtmpnrLH25v2qwCqa9fehvbGxGAcfNxphr3g3qAzdpqJkC57abiEhBYYCrz",
  "key21": "4t3zquRJGd9QkK9P11QUHA1n5y6b4koHaYxCBG9QtC83J4zc8TYU6Gk6ChUvvCNz34TUhjkCnf1ndRz9uZ6xKMxp",
  "key22": "e5QwJruMvU3gTS2DvD1WMkZohP3eyRraKP8ZDuffVMdnJEfE3Y2aqyhyPc6bwLhXMXYDjVNVCSbhUSbq7419ufb",
  "key23": "5UWZxLviK8ZyDrreuW2EnRhLn3p5ArouhUJ7m38mH6AG5fdvzPio5DFy5cgdmWPLQ3JDLFbbkoFu2p1JQgpePH6V",
  "key24": "2gEBwQxamAXMg9qo4TNuNP5z43x4pVrFvNCApqrtxCFaZAKw4hZGPy15LH9NGHSyjXB6RbYJ2JWY7bFh1nRWYqQL",
  "key25": "2U6yuADtbLh3SxLBeXc19zwBWXwErnZbTK9DbQx2ToyK3ePWafwVwj3VcBQHMpiBPBJUKHAnoeAZjYhc61bUvJP2",
  "key26": "65umhGE7a6m3mriFuRxVXUMambCZBBRWJ8bNh3yXr79mywWiZBC5iRTSaBuJHguDXfNxD2bwAZczWQf9CHJNSaGy"
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
