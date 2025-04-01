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
    "2koFRQLyrLSH9WGP1AC8v63dgGEtiLmPfZLKExV9fGVSDL4Bggo4ko7fyeU79xjQBYXmJvCj25Pfh7fzrCBD2zYX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3og82r7r8XLPkmz18YezfKaV2VrjjDauSBGhmtkbFwufoYMgi1vZ7gDJB9BKU83saAoDDbYB4tRQnnCS5RTZGboo",
  "key1": "LiXSeutq4TCBJFbgnYwmhhWBvS82bQaouajurPshA1wm2SNZCbxsMPop95y5AD2QgFdwR23yHguT6ewpererZGs",
  "key2": "u2xRLhXnC7HyWJuQ6Ex29N22w2dpvJq7ZaxdqSYtrL4y6KtQyNBDjKmuDtavVwwKUb5MaVcGm1vg6hJc392BmMg",
  "key3": "63B1WoXimn1wqicHeBNSe4vbTAD2kfav69kC1E5YedsEVoii2Kx4ygaXjXWGMJCzfQvE7z6okw6nhy9Ddh9Bo1bi",
  "key4": "5Jhi8SCGSuv7AeK8HJkayZD3Cqb6ki13EfdGKrPsr5UWuAWKCywPwgp9ADAQmoyQP7X68GpFRn558CT8YNCarjfh",
  "key5": "63s7xyxtLtS4qr9gFQMnyYsvfKrrM44yCjB4A6ZtddqxGV3mNwmUZEiHeLKDk4rjLUEX7piRLqTc9HjPzNauyKTg",
  "key6": "4k6RHsWBbyPdRoWf9WFqTjvc8L4ZRq2zjSkrAxQnTy7SjYN5xHVtRi4yRmWqYe1LC4ePQ8akELZwYgWPL11fTgUr",
  "key7": "4uTmrdU9TuqgijHf77EST115CfoGpFgyV9zQDavUibuzBjDtePbvBRqEYvZNcyeGWT5eZP2HayjGJ9htD9Xaxhb5",
  "key8": "2F9SVdZvE5i553Jtq4cNCHSxhQJWE8bwatTUykoj4XJ4KVxLr77WV3GXeUu6KEVXFAmeH9GrRiqbEZQFZpxEdKLP",
  "key9": "3EVxF8h7Wnz21A7bfvcVmCtVGabmFg87gGpqLFfo1Xx7TgyBF7kfmfEcSiCypyNgCqvtNELfPSpZ2YrSThXzsVtF",
  "key10": "2PUd1PFCKn8jacQiHfGWSM4F8cPUmuys9735TsMcKWRFajUPJatKLyZtWQ2dBBRuMMm8Uywztw4mv4cHS9NVnpvF",
  "key11": "3rVVUYk5JzuJhFMtLDaqVxcNkT5GRJMBZHrj6MH11VsdDXFwYnCxRXyRnVE4r8vSzoY7ADr6dtqyK8hkiSBDYDgJ",
  "key12": "PJuxaoXKT8K7gbAFdHZJuTvs2kF1NjRJCS5hCUEqmhVRk2MqieHD686VaAt5S2hzJKE31aNtjeDuxxNAWCEXjv3",
  "key13": "3hutUbsZK858zaqANhPBrzUsd48ZQrMzH6CycntiMdtTk3Cz7BcLH6hHhcNRPAUjSXaXFSvNMooSeZ5YPt29dP1T",
  "key14": "35CvF24ap87JXUmKy5p6VBiuUioJ6WEsZc9BnZ5Paum6NbyxRJiuS6wmCV5FC6Nyb6N3PeeaNjAiSq79wWN2cUQg",
  "key15": "2U5mNpYh3iciruNwXDWrDyNqYVs4oaLtcZbHY5zJuUfisSJvtBqdq5yjy99zsmVBASp8EsoYKzorquoLXfeKqV3e",
  "key16": "5ePZocFCud7Xn3N1P3SRkWbqrMcq7YiaLXqYHndWLLg47QxspaKh9F5gJTRub8aicLSoxJ4iF5Pzc31tnKkHxZNg",
  "key17": "2CEdtXEipNEZiakGUnqGqGQ6Rzx7mCvDvH92vbA6QrLmGNfUYAdSvJdmvBmzYd1GhmDTMz1KtPhjHb8rmzBTujr4",
  "key18": "3whD98RpkJWo6syJLvmiMWubLEZ9bMPB8ovxNFzQGv9GBbBymmjhVNeyiF5JGJ9pb5iYXKEsySrfyfg3WZQBztm",
  "key19": "3TjoET3jVWRwSMfSPtRMv1LGdRAo7SZ7DJL1kZfcZsP1Qh6T6L1pUDPAKLVKy34C1uRPt7uJTowTmUNgv9UxDy3Q",
  "key20": "5RiUbo4EALX8KU1PaV58THVNEcLWEu48urrMyV74t5qFjoz4MH6Csq3QHAikfekpatxjkSmJcB6VBcxYF7LbkwSm",
  "key21": "362E8HqJtunbDZ1UJ9MNrA6Tx8ADWn847uynUPgtMk49mFtxMjoHyV8scPAG8BQFfLkTzwWuto6f6X3SVUyWLPst",
  "key22": "3CsYMhQBSJBSicWPjjbH422hvViGuy2mpnh2V6FukxfDcbHQTuv62myRVmyEKBBPYrrZp6WPMWezwiT3vYQ57tKN",
  "key23": "AEmTgYWN4SBzeenuMDDHPFuwD22SGptnbsMLkzSoWggEo3e3LvLqSvwRkNAZiuQSeY4Zp5s2trmCvD8268nCgAM",
  "key24": "2oGPViehA6Q5ooRKS6XWwSxTwV7UAiFpy3zctHjHyi5ucubLEEwtTFp3DjpqnkyRiKspTooLP5b8wkTnGosegosm",
  "key25": "3gSP6HAVvKkcrXEyjikXxiHF5hckgeiTKfJKqAifygzpEa2SQrR9L2rAtCzpztmEhXLnnoh1cEyLwFVJkmD7DkcH",
  "key26": "2Md2j6qFqSuGzCaAiaq9Gjv11BzxvAch1zt7WyuSvUB1xAdPySTDeNP2ixRPhaZK1gqa43TuB13rPbmHpyCqVCVA",
  "key27": "3iZx8dkZNGeCBQjY8SuhKE2i5x6tu7hLjxSunLFGb4Nixkp9BjXqMwELhLJCK9JBswsXAFFMAy8uPLwjtvGpnQPw",
  "key28": "27gEvR5Rnh5UKrKKafFiBMG33fFFJjkbNyAgBVFvm6h18ojJBU1R8HFfGqPr6CUr4GBxJZ5hurWaecHC6SNxD8AZ",
  "key29": "3qXDidu22k7A3cn2aUanDiXYiCmYuW4ZJLegYr8xy4VJ8JpbynUFWUuEUhRjY8ffiZKzkpCsxP6kMS66WSLm2um"
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
