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
    "3RcP6PXpc5mopAa1aZ763BzEiXBXXecdaaxxmbJUrMvJZrdh4XL3VTbYfNgZmZjYQasZ8uFnNHHmym9pKzdmHM7G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bfw2joy1KoACuzsNLj5RdU8eJGrcS1Y4MHDo2Dfzvjn37hLY1JGfyvh8cApdtAgyx76P357tLTo86Djss7WKYix",
  "key1": "2isPoPXPN44BJ84VnYjPwWjjfTZNN7GLK1G7yn3wWNSjbxrqsWNTqrEKfg2jxcjVR46xJ5WyUHmoZwFbE9xPfJDE",
  "key2": "3KmW7K7CgHnz6X33tpjwtJhm99eoNJS5sh4f7ETJJaDjknqPE2v4FZznVHLxwaKWsZ665cCdYHP5Vud9mDx12EkK",
  "key3": "2qwkF9tZ7FxcgL7pamAnFvjP8NLtNBRhXRFEjqQhAESRXSrLXXQmZ6Qx6fHCW5cqqhrpxoxhZKvHrpX5VB6GVoy8",
  "key4": "ncdnj6sJUokDSpy7wCHgBNdppxuRiFbsW1woCVLbjc7brcsNjNXrHHVw7BpjsLwZJNGTo6CLyFnWY7cTvqANxMj",
  "key5": "4KQzfckSD9RSA5w8KqG3giGELjpdUbYkVLsDgf9kAc876NdBFXUyhuMVCMXpB5kpXos4sBhtMSYbiFaubJ7BkXo1",
  "key6": "34LxuiacHAdLcSVAbW659kSAdvrsetGZG4tozGAAoZ3AGzVf9R6tAxZtxaQTFfnUa3BYFpNZ2hhZGKW68Yah8dbt",
  "key7": "1VCLagaoSWhCDxPkkpYsUuHqkU9KdPAPuaafqMAfjYUzkGK7BkHcTWF3xtLGpEh5XEecfnwgxMnd9uYYivsdRBp",
  "key8": "2ZPDRPcTVQgeVGdLUGK8HqbFb6F3a4tVWGvXtQ7gBvS5bbxqu7o5bNsiVaQWW8mxcFfn6m84kDt7VSbPWd3A1ZJG",
  "key9": "3rKeJy1b8YD3zSphnWEV2yET6ixcX6joLBwqTU8kabfgxF1dWrBNsfGUMHJ2MuqHwQFm6755WNrizDtyHyMukqkp",
  "key10": "4DfD2KuU6NLgzf9yw49xomVx8ykgvB2XCqKBF6udYwjcYJkgo4GxXFwySZCai78XhEnFqRj3wsb9itaqUBDakHHN",
  "key11": "4xi3pqdnZWV3PQcXv6b8PhTDcNUtvDP3Xg5BMbMBTvRCx6yqyUtzSgGohjKPwvwinoLga7TUXCerk3RhTLxqqVX1",
  "key12": "5NPRnQmeLCuiohBURFY9cjBbiYK6JaFAtauteW79tTzd8barqU66R2waGx8rJsHUGu4veY4foXkKEzr43FiYPThZ",
  "key13": "2ixoNVc535ZhhExV9DgS5QfyrXudK7EcrP56Yy645Mg8xJNk8rL4YABjdvnjZAzygvq8kQfYgV45KWvwMt29P9gY",
  "key14": "3A6iHPBhUBiMPKPGrw2mbzyuMnesucP7H2RdC27789dwjahNU5r7jo3BUkonX5VrAQhkMn81ocBEi1NrgsTKZwLL",
  "key15": "gvR6wFsWZmbfTpF9gfaUXXwh2LXbSQi9Fi6DTDbajD8MFw4btAGyyguyv5oyx9nGQdjAXA77H142ts77w8wyzLe",
  "key16": "4PTTm2gW7nrrxta4RdW7zV3NDS9HC2z4m6HXKU4uwPvzFQoKgtMXZ9dazMMX93QzDsRFJyVKdshPVvc9dfaH9wko",
  "key17": "Bnf88VJy1LcQJXvKfg6W8DeJ3xYxyuJ5kJ28U3ya33KXqrgScT7vvzXE6kUU3jJhyikqkMQJ78EW8KGXePkErek",
  "key18": "pkvLXTxQs7362VVNnATDaC7VNdkzsveYgPL1wA2BeoxoqgYYNoBdYSWWDgt7kagUHRhZkCyXmRev2u2FdcHjrVZ",
  "key19": "2AcAakMBdWV9z5gnRxxpP6kGpqXPYRw2Lt7vSvczMsQ8ZLxJeyrPPT29kRTyC9qB7p5EnbNx4NUtpzXPy9Q9JoLT",
  "key20": "yGBycf9hni4uCcqE1TbBGrrdeWDGh8dSriupS9AfhxW9gdgykyiAhXhCPsnU9iCtw6dJ2wvKFjJ6stpwPdwUE11",
  "key21": "3rKL8bc8J2YzKFYaaf6QmeHNxXZ3fjBBhQndoRogwyWdRpRw1K9VNo88MuWCnJQFW4ziU51AoD1Pnm7jsB3aS2ko",
  "key22": "2ak5h8vdQdrnAgm5nMZME2TcxGZGuFtbeHvD8bARsaDYjUJh4CzkPMwvCVkQ8TnovvkjpjhJC5N6qxcSwSgTHRXQ",
  "key23": "5Rzc8n7uj4Ugzxnbt8uUw92ceHtFtq5rRhwDumb1RnMXVy77ReVFyx1pW2dF4NKF7YNTVNXLyEfMga3Xq3kD3NRC",
  "key24": "3rm1qrqUWuHH1PTkCZPjEme3PgiGqAq6kFSA4CQa4A7PZbvKGGYak5eLVQovrgKBQwbzNpyh9Lh8FgkCoHnFRhNu",
  "key25": "3z2jxwa7tx6A9BYARPnMYqUsRH2iRgwv31xEPfv2h17Ea36ysxkvKUrU6v7kQjhqRQ1S7BRArf9w3zMT6JuknJKa",
  "key26": "2kSsd91QBR9LmjxQLQfmRaFiRdMDkZjKBUGzfy96UE4PC8cRCdKNW5YSMgoABs3JiQ8wgmaJ3EkSwYjakscsS25d",
  "key27": "4DYS3vz1zGznVQBTBZhs6LXny5zdVruiihZjL5p44N2eLQYp67wFL6nY464wi5FBThwABe1tLdbRba2bCuD3MFwK"
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
